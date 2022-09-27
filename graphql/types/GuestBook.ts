import { objectType, extendType } from "nexus";

export const GuestBook = objectType({
  name: "GuestBook",
  definition(t) {
    t.string("id");
    t.string("author");
    t.string("body");
    t.string("placement");
    t.field("createdAt", { type: "DateTime" });
  },
});

export const GuestBookQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("guestbooks", {
      type: "GuestBook",
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.guestBook.findMany();
      },
    });
  },
});
