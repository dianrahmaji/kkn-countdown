import useCountdown from "../hooks/useCountdown";

import type { CountdownUnitType } from "../types/countdown";

interface CountdownItemProps {
  value: number;
  unit: CountdownUnitType;
}

function CountdownItem({ value, unit }: CountdownItemProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="font-mono text-4xl lg:text-5xl">
          {value > 9 ? value : `0${value}`}
        </span>
        <span className="uppercase font-medium font-sans text-[8px] lg:text-xs">
          {value === 1 ? unit : `${unit}s`}
        </span>
      </div>
      {unit !== "second" && (
        <span className="font-mono mt-0.5 text-2xl lg:text-4xl">
          {unit === "day" ? "\u00a0" : ":"}
        </span>
      )}
    </>
  );
}

interface CountdownProps {
  endAt: string;
}

export default function Countdown({ endAt }: CountdownProps) {
  const endAtTimestamp = new Date(endAt).getTime();
  const { day, hour, minute, second } = useCountdown(endAtTimestamp);

  return (
    <div className="mt-6 flex justify-center items-start gap-1">
      <CountdownItem value={day} unit="day" />
      <CountdownItem value={hour} unit="hour" />
      <CountdownItem value={minute} unit="minute" />
      <CountdownItem value={second} unit="second" />
    </div>
  );
}
