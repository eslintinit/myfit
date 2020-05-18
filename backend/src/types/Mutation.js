const { compare, hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { idArg, mutationType, stringArg } = require('nexus')
const { APP_SECRET, getUserId } = require('../utils')
const { promisify } = require('util')
const { randomBytes } = require('crypto')

const nodemailer = require('nodemailer')

const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg({ nullable: true }),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { name, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { email, password }, context) => {
        const user = await context.prisma.user.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('question', {
      type: 'User',
      nullable: true,
      args: {
        gym: stringArg(),
      },
      resolve: async (parent, { gym }, ctx) => {
        const userId = getUserId(ctx)
        return await ctx.prisma.user.update({
          data: { gym },
          where: { id: userId },
        })
      },
    })

    t.field('requestReset', {
      type: 'User',
      nullable: true,
      args: {
        email: stringArg(),
      },
      resolve: async (parent, { email }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const randomBytesPromisified = promisify(randomBytes)
        const resetToken = (await randomBytesPromisified(20)).toString('hex')
        const resetTokenExpiry = `${Date.now() + 3600000}` // 1 hour from now

        const result = await ctx.prisma.user.update({
          data: { resetToken, resetTokenExpiry },
          where: { email },
        })

        const auth = {
          type: 'oauth2',
          user: 'gmodhl67@gmail.com',
          clientId:
            '653535787581-6cgotknbfr4iadar6nm06007gnb1g80r.apps.googleusercontent.com',
          clientSecret: 'V3jtElsPY55BmCBQKfRuPTNE',
          refreshToken:
            '1//04yOeNRXx9B9cCgYIARAAGAQSNwF-L9IrYMN1jdz36dx787p9NSudMT-3VeU7tNBPEVMcDsDcDrOuxqEooUwK4qG4KfrF4bg71qE',
        }

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth,
        })

        const mail = {
          from: 'gmodhl67@gmail.com',
          to: `${result.email}`,
          subject: 'MyFit Password Reset',
          text: `Hello, dear ${result.name} here is a link to reset your password in MyFit.
      Don't forget it later.
      If this email is anexpected for you, please contact us.`,
          html: `<a href= "http://90.188.249.253:3000/auth/resetpassword/${result.resetToken}">Reset link (token=${result.resetToken})</a>`,
        }

        transporter.sendMail(mail, (err, info) => {
          if (err) {
            throw new Error(`${err}`)
          } else {
            return console.log(JSON.stringify(info))
          }
        })

        result.resetToken = 'hidden'
        return result
      },
    })

    t.field('resetPassword', {
      type: 'AuthPayload',
      nullable: true,
      args: {
        resetToken: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { password, resetToken }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            resetToken,
          },
        })
        if (!user) {
          throw new Error('Your password reset token is invalid.')
        }
        console.log('reset expiry = ', user.resetTokenExpiry)
        if (Number(user.resetTokenExpiry) < Date.now()) {
          throw new Error('Your password reset token is expired.')
        }

        const hashedPassword = await hash(password, 10)

        const result = await ctx.prisma.user.update({
          where: { resetToken },
          data: {
            password: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null,
          },
          //where: {resetToken}
        })

        return {
          token: sign({ userId: result.id }, APP_SECRET),
          user: result,
        }
      },
    })

    t.field('changeName', {
      type: 'User',
      nullable: true,
      args: {
        name: stringArg(),
      },
      resolve: async (parent, { name }, ctx) => {
        const userId = getUserId(ctx)
        return await ctx.prisma.user.update({
          data: { name },
          where: { id: userId },
        })
      },
    })

    t.field('changePassword', {
      type: 'User',
      nullable: true,
      args: {
        password: stringArg(),
      },
      resolve: async (parent, { password }, ctx) => {
        const userId = getUserId(ctx)
        const hashedPassword = await hash(password, 10)
        return await ctx.prisma.user.update({
          data: { password: hashedPassword },
          where: { id: userId },
        })
      },
    })

    t.field('setFavorite', {
      type: 'User',
      nullable: true,
      args: {
        exercise: stringArg(),
      },
      resolve: async (parent, { exercise }, ctx) => {
        const userId = getUserId(ctx)
        const user = await ctx.prisma.user.findOne({
          where: { id: userId },
          select: { favorites: true },
        })

        const liked = user.favorites.find((favorite) => favorite === exercise)
        if (liked) {
          const filtered = user.favorites.filter(
            (favorite) => favorite !== liked,
          )
          return await ctx.prisma.user.update({
            data: {
              favorites: {
                set: filtered,
              },
            },
            where: {
              id: userId,
            },
          })
        } else
          return await ctx.prisma.user.update({
            data: {
              favorites: {
                set: [...user.favorites, exercise],
              },
            },
            where: {
              id: userId,
            },
          })
      },
    })
  },
})

module.exports = {
  Mutation,
}
