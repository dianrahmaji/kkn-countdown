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

const parseDate = (date: Date) =>
  Intl.DateTimeFormat("id", { dateStyle: "full", timeStyle: "long" }).format(
    date
  );

const GuestBook: NextPage<Props> = ({ guestbooks }) => {
  return (
    <div className="max-w-2xl px-8 mx-auto justify-center flex flex-col">
      <div className="my-14">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Guestbook
        </h1>
        {guestbooks.map(({ id, body, placement, author, createdAt }) => (
          <div key={id} className="flex flex-col space-y-2 mt-4">
            <div className="prose dark:prose-dark w-full">{body}</div>
            {placement && (
              <div className="text-gray-500 text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div className="ml-1">{placement}</div>
              </div>
            )}
            <div className="flex items-center space-x-3">
              <p className="text-sm text-gray-500">{author || "Anonim"}</p>
              <span className="text-gray-200 dark:text-gray-800">/</span>
              <p className="text-sm text-gray-400 dark:text-gray-600">
                {parseDate(new Date(createdAt))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
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
