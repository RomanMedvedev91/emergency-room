import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://emergency-room-server.onrender.com/",
  cache: new InMemoryCache(),
});
