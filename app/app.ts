import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import bodyParser from 'body-parser';
import cors from 'cors';
import loggerInfo from './logger/Bunyan';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

server.applyMiddleware({ app });
loggerInfo.info(`GraphQL ready at http://localhost:${5000}${server.graphqlPath}`)

export default app;