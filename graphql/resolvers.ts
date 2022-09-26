export const resolvers = {
  Query: {
    guestbooks: (_parent, _args, ctx) => {
      return ctx.prisma.guestBook.findMany();
    },
  },
};
