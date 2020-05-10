import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const { idArg, queryType, stringArg } = require('nexus')
const { getUserId } = require('../utils')

const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return prisma.user.findOne({
          where: {
            id: userId,
          },
        })
      },
    })
  },
})

module.exports = {
  Query,
}
