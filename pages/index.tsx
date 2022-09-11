import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto justify-center flex flex-col min-w-[500px]">
      <div className="text-center uppercase font-bold">
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono">
          Countdown Penarikan
        </p>
        <p className="text-[#00a8cc] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans">
          KKN-PPM UGM
        </p>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono">
          Periode 2 Tahun 2021
        </p>
      </div>
    </div>
  );
};

export default Home;
