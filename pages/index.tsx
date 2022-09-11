import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto justify-center flex flex-col min-w-[500px]">
      <div className="text-center uppercase font-bold flex flex-col gap-2">
        <p className="text-2xl lg:text-3xl font-mono">Countdown Penarikan</p>
        <p className="text-[#00a8cc] text-3xl lg:text-4xl font-sans">
          KKN-PPM UGM
        </p>
        <p className="text-2xl lg:text-3xl font-mono">Periode 2 Tahun 2021</p>
      </div>
      <div className="mt-6 flex justify-center items-start gap-1">
        <div className="flex flex-col items-center">
          <span className="font-mono text-4xl lg:text-5xl">00</span>
          <span className="uppercase font-medium font-sans text-[8px] lg:text-xs">
            days
          </span>
        </div>
        <span className="font-mono mt-0.5 text-2xl lg:text-4xl">&nbsp;</span>
        <div className="flex flex-col items-center">
          <span className="font-mono text-4xl lg:text-5xl">00</span>
          <span className="uppercase font-medium font-sans text-[8px] lg:text-xs">
            hour
          </span>
        </div>
        <span className="font-mono mt-0.5 text-2xl lg:text-4xl">:</span>
        <div className="flex flex-col items-center">
          <span className="font-mono text-4xl lg:text-5xl">00</span>
          <span className="uppercase font-medium font-sans text-[8px] lg:text-xs">
            minute
          </span>
        </div>
        <span className="font-mono mt-0.5 text-2xl lg:text-4xl">:</span>
        <div className="flex flex-col items-center">
          <span className="font-mono text-4xl lg:text-5xl">00</span>
          <span className="uppercase font-medium font-sans text-[8px] lg:text-xs">
            second
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
