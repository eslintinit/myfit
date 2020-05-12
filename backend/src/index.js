const { GraphQLServer } = require('graphql-yoga')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { makeSchema } = require('nexus')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')

const prisma = new PrismaClient()

new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      schema: __dirname + '/../schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
  }),
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
}).start(
  {
    endpoint: '/graphql',
    playground: '/graphql',
    subscriptions: false,
    cors: {
      credentials: true,
      origin: 'https://myfit.jjjuk.now.sh'
    }  
  },
  () =>  console.log(`🚀 Server ready`)
  );
