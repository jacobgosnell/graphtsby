import ApolloClient from "apollo-client";
import gql from "graphql-tag";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import seedmutations from "./seed-mutations";

dotenv.config();

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.GRAPHQL_URI, fetch }),
  cache: new InMemoryCache()
});

client
  .mutate({ mutation: gql(seedmutations) })
  .then(data => console.log(data))
  .catch(e => console.log(e));
