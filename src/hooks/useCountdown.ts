import { useEffect, useState } from "react";

import { TimeStateType } from "../types/types";

type Countdown = {
  timeDays: TimeStateType;
  timeHours: TimeStateType;
  timeMinutes: TimeStateType;
  timeSeconds: TimeStateType;
};

function useCountdown(countdownDate: number): Countdown {
  const [timeDays, setTimerDays] = useState<TimeStateType>("0");
  const [timeHours, setTimerHours] = useState<TimeStateType>("0");
  const [timeMinutes, setTimerMinutes] = useState<TimeStateType>("0");
  const [timeSeconds, setTimerSeconds] = useState<TimeStateType>("0");

  let interval: NodeJS.Timer;

  const startTimer = (): void => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return {
    timeDays,
    timeHours,
    timeMinutes,
    timeSeconds,
  };
}

export default useCountdown;
