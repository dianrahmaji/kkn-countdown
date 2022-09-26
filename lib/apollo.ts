import { ApolloClient, InMemoryCache } from "@apollo/client";

const hostname =
  process.env.NODE_ENV === "production"
    ? process.env.VERCEL_URL
    : "http://localhost:3000";

const apolloClient = new ApolloClient({
  uri: `${hostname}/api/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
