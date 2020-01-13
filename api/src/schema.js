import { neo4jgraphql } from "neo4j-graphql-js";

export const typeDefs = `
  type User {
    id: ID
    name: String
    email: String
    pets: [Pet] @relation(name: "PETS", direction: "OUT")
  }
  type Pet {
    id: ID
    name: String
    owner: User @relation(name: "OWNER", direction: "IN")
  }
  
  type Query {
    users(id: ID, name: String, email: String, pets: [String]): [User]
    pets(id: ID, name: String, owner: String): [Pet]
  }

  type Subscription {
    CreateUser: User
  }
`;

export const resolvers = {
  Query: {
    users: neo4jgraphql,
    pets: neo4jgraphql
  }
};
