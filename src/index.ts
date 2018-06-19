/* tslint:disable:no-console */
import { ApolloServer, gql } from "apollo-server";

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

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
