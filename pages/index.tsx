import { PrismaClient } from "@prisma/client";
import type { NextPage, GetStaticPropsResult, GetStaticProps } from "next";

import Title from "../components/title";
import Countdown from "../components/countdown";

interface Countdown {
  id: string;
  period: number;
  year: number;
  startAt: string;
  endAt: string;
}

interface Props {
  countdown: Countdown;
}

const Home: NextPage<Props> = ({ countdown }) => {
  const { period, year, endAt } = countdown;
  return (
    <div className="h-screen max-w-7xl mx-auto justify-center flex flex-col min-w-[500px]">
      <Title period={period} year={year} />
      <Countdown endAt={endAt} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient();
  const countdown = await prisma.countdown.findFirst({
    where: {
      AND: {
        startAt: {
          lte: new Date(),
        },
        endAt: {
          gt: new Date(),
        },
      },
    },
  });

  if (!countdown) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      countdown: {
        ...countdown,
        startAt: countdown.startAt.toISOString(),
        endAt: countdown.endAt.toISOString(),
      },
      validate: 60 * 60 * 24,
    },
  };
};

export default Home;
