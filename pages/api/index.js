//const { GraphQLServer } = require('graphql-yoga')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { makeSchema } = require('nexus')
//const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')
import { graphql, make } from 'graphql'
import { applyMiddleware } from 'graphql-middleware'

//const prisma = new PrismaClient()

const schema = makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      schema: __dirname + '/schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
    
  })

   const schemaWithMiddleware = applyMiddleware(
    schema,
    permissions
  ) 


  export default async (req, res) => {
    const query = req.body.query
    const variables = req.body.variables
    const response = await graphql(schemaWithMiddleware, query, {}, {}, variables)
    return res.end(JSON.stringify(response))
  }
