import { useEffect, useState } from "react";

import type { Countdown } from '../types/countdown'

const DAY_IN_MILISECOND = 86_400_000
const HOUR_IN_MILISECOND = 3_600_000 
const MINUTE_IN_MILISECOND = 60_000
const SECOND_IN_MILISECOND = 1_000


export default function useCountdown(endAt: number): Countdown {
  const [day, setDay] = useState<number>(0)
  const [hour, setHour] = useState<number>(0)
  const [minute, setMinute] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)

  let interval: NodeJS.Timer

  const startCountdown = () => {
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = endAt - now

      const currentDays = Math.floor(distance / DAY_IN_MILISECOND)
      const currentHours = Math.floor(distance % DAY_IN_MILISECOND / HOUR_IN_MILISECOND)
      const currentMinutes = Math.floor(distance % HOUR_IN_MILISECOND / MINUTE_IN_MILISECOND)
      const currentSeconds = Math.floor(distance % MINUTE_IN_MILISECOND / SECOND_IN_MILISECOND)

      if(distance < 0) {
        clearInterval(interval)
      } else {
        setDay(currentDays)
        setHour(currentHours)
        setMinute(currentMinutes)
        setSecond(currentSeconds)
      }
    }, 1000)
  }

  useEffect(() => {
    startCountdown()

    return () => clearInterval(interval)
  })

  return {
    day, hour, minute, second
  }
}