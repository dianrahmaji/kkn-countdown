export default function Title() {
  return (
    <div className="text-center uppercase font-bold flex flex-col gap-2">
      <p className="text-2xl lg:text-3xl font-mono">Countdown Penarikan</p>
      <p className="text-[#00a8cc] text-3xl lg:text-4xl font-sans">
        KKN-PPM UGM
      </p>
      {/* TODO:: Fetch data from API */}
      <p className="text-2xl lg:text-3xl font-mono">Periode 2 Tahun 2021</p>
    </div>
  );
}
