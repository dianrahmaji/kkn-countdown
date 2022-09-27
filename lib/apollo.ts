import { ApolloClient, InMemoryCache } from "@apollo/client";

const hostname =
  process.env.NODE_ENV === "production"
    ? process.env.VERCEL_URL
    : "http://localhost:3000";

const apolloClient = new ApolloClient({
  uri: `${hostname}/api/graphql`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  cache: new InMemoryCache(),
});

export default apolloClient;
