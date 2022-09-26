import { DateTimeResolver } from "graphql-scalars";

export const resolvers = {
  Query: {
    // TODO: Add type
    // @ts-ignore
    guestbooks: (_parent, _args, ctx) => {
      return ctx.prisma.guestBook.findMany();
    },
  },
};
