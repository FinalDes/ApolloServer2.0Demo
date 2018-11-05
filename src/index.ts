/* tslint:disable:no-console */
import { ApolloServer, gql } from "apollo-server-express";
import express = require("express");

const app = express();

const typeDefs = gql`
  type Query{
    hi: String
  }
`;

const resolvers = {
  Query: {
    hi: () => {
        return "hi";
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

export const server = app.listen({ port: 4000 }, () => {
  console.log("🚀  Server ready at http://localhost:4000/graphql");
  // console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
