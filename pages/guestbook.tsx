import { PrismaClient } from "@prisma/client";
import type { NextPage, GetServerSideProps } from "next";

interface GuestBook {
  id: string;
  body: string;
  author: string | null;
  placement: string | null;
  createdAt: string;
}

interface Props {
  guestbooks: GuestBook[];
}

const GuestBook: NextPage<Props> = ({ guestbooks }) => {
  return <pre>{JSON.stringify(guestbooks, null, 2)}</pre>;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const prisma = new PrismaClient();
  const guestbooks = await prisma.guestBook.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  const serialized = guestbooks.map((guestbook) => ({
    ...guestbook,
    createdAt: guestbook.createdAt.toISOString(),
  }));

  return {
    props: {
      guestbooks: serialized,
    },
  };
};

export default GuestBook;
