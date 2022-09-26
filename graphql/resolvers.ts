import { DateTimeResolver } from "graphql-scalars";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    guestbooks: (_parent, _args, ctx) => {
      return ctx.prisma.guestBook.findMany();
    },
  },
};
