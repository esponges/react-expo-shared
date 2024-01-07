// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.EXPO_PUBLIC_GQL_URL, // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
