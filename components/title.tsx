interface TitleProps {
  period: number;
  year: number;
}

export default function Title({ period, year }: TitleProps) {
  return (
    <div className="text-center uppercase font-bold flex flex-col gap-2">
      <p className="text-2xl lg:text-3xl font-mono">Countdown Penarikan</p>
      <p className="text-[#00a8cc] text-3xl lg:text-4xl font-sans">
        KKN-PPM UGM
      </p>
      <p className="text-2xl lg:text-3xl font-mono">
        Periode {period} Tahun {year}
      </p>
    </div>
  );
}
