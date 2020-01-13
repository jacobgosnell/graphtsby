/* eslint-disable no-console */
import { ApolloServer } from "apollo-server";
import neo4j from "neo4j-driver";
import { makeAugmentedSchema } from "neo4j-graphql-js";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./schema";

dotenv.config();

const schema = makeAugmentedSchema({
  typeDefs,
  resolvers
});

const driver = neo4j.driver(
  process.env.NEO4J_URI || "",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "root"
  )
);

const server = new ApolloServer({
  context: { driver },
  schema
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
