/* tslint:disable:no-console */
import { ApolloServer, gql } from "apollo-server";
import express = require("express");

export const app = express();

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

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
