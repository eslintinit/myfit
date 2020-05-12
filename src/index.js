const { GraphQLServer } = require('graphql-yoga')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { makeSchema } = require('nexus')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')

import { join } from 'path';

const prisma = new PrismaClient()

const server = new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      schema: join(__dirname + '/../schema.graphql'),
      typegen: join(__dirname + '/generated/nexus.ts'),
    },
  }),
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(
  {
    endpoint: '/graphql',
    playground: '/graphql',
    subscriptions: false,
    /* cors: {
      credentials: true,
      origin: 'https://myfit.jjjuk.now.sh'
    }   */
  },
  () =>  console.log(`🚀 Server ready`)
  );
  
  
  export default server.createHandler({ path: '/graphql' })
