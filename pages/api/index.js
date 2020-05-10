//const { GraphQLServer } = require('graphql-yoga')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { makeSchema } = require('nexus')
import path from 'path'
//const { PrismaClient } = require('@prisma/client')
const types = require('./types')
import { graphql } from 'graphql'
import { applyMiddleware } from 'graphql-middleware'

//const prisma = new PrismaClient()

const schema = makeSchema({
  types,
  plugins: [nexusPrismaPlugin()],
  outputs: {
    // schema: __dirname + '/schema.graphql',
    // typegen: __dirname + '/generated/nexus.ts',
    typegen: path.join(process.cwd(), 'generated/nexus.ts'),
    schema: path.join(process.cwd(), 'schema.graphql'),
  },
})

export default async (req, res) => {
  const query = req.body.query
  const variables = req.body.variables
  const response = await graphql(schema, query, {}, {}, variables)
  return res.end(JSON.stringify(response))
}
