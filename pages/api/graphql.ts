import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";

import type { NextConfig } from "next";

import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import { createContext } from "../../lib/context";

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  context: createContext,
});

const startServer = apolloServer.start();

// TODO: Add types
export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};
