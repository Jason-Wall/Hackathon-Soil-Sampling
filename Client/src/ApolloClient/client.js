import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  gql,
  HttpLink,
} from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "http://localhost:4001/graphql",
});

export const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
});
