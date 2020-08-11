import { ApolloServer } from "apollo-server";
import config from "./config";

export const start = async () => {
  const rootSchema = `
  type Cat {
      name: String
  }
  type Query {
      cat: Cat
  }
  schema {
    query: Query
    
  }
`;
  const server = new ApolloServer({
    typeDefs: [rootSchema],
    async context({ req }) {
      return {};
    },
  });

  const { url } = await server.listen({ port: config.port });
  console.log(`GQL server ready at ${url}`);
};
