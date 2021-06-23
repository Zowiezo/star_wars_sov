import compression from 'compression'
import RateLimit from 'express-rate-limit'
import depthLimit from 'graphql-depth-limit'
// import { ApolloEngine } from 'apollo-engine'
import { importSchema } from 'graphql-import'
import { GraphQLServer, PubSub } from 'graphql-yoga'
// import helmet from 'helmet'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
// import createLoaders from './loaders'
import resolvers from './resolvers'

const isProd = process.env.NODE_ENV === 'production'

createConnection()
  .then(async _connection => {
    const pubsub = new PubSub()
    const server = new GraphQLServer({
      typeDefs: importSchema('./src/schema/schema.graphql'),
      resolvers,
      context: {
        // loaders: createLoaders(),
        pubsub,
      },
    })
    //server.express.use(helmet())
    server.express.use(compression())
    const limiter = RateLimit({
      windowMs: 24 * 60 * 60 * 1000, // 24 hours
      max: 1000, // limit each IP to 1000 requests per windowMs
      //delay: 0, // disable delaying - full speed until the max limit is reached
    })
    // server.express.enable('trust proxy')
    server.express.use(limiter)
    // Requests to /graphql redirect to /
    server.express.all('/graphql', (_req, res) => res.redirect('/'))
    server
      .start({
        tracing: true,
        cacheControl: true,
        port: 4000,
        endpoint: isProd ? '/api/' : '/',
        validationRules: [depthLimit(10)],
      })
      .then(() => console.log(`Server started`))
      .catch(console.error)
  })
  .catch(console.error)
