import { join } from "path";
import { makeSchema } from "nexus";

export const schema = makeSchema({
  types: [],
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "graphql", "context.ts"),
  },
});
