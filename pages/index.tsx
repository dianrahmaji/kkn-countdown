import type { NextPage } from "next";

import Title from "../components/title";
import Countdown from "../components/countdown";

const Home: NextPage = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto justify-center flex flex-col min-w-[500px]">
      <Title />
      <Countdown />
    </div>
  );
};

export default Home;
