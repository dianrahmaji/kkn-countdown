import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import CountdownTimeItem from './CountdownTimeItem';
import CountdownTimeSeparator from './CountdownTimeSeparator';

const TimeWrapper = styled.div`
  height: 55%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`

const CountdownTimeWrapper = () => {

  const [timeDays, setTimerDays] = useState('0');
  const [timeHours, setTimerHours] = useState('0'); 
  const [timeMinutes, setTimerMinutes] = useState('0'); 
  const [timeSeconds, setTimerSeconds] = useState('0');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('August 24 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        clearInterval(interval)
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    }
  });

  return (
    <TimeWrapper>
      <CountdownTimeItem value={timeDays} unit="days" />
      <CountdownTimeSeparator separator="&nbsp;" />
      <CountdownTimeItem value={timeHours} unit="hours" />
      <CountdownTimeSeparator />
      <CountdownTimeItem value={timeMinutes} unit="minutes" />
      <CountdownTimeSeparator />
      <CountdownTimeItem value={timeSeconds} unit="seconds" />
    </TimeWrapper>
  );
}

export default CountdownTimeWrapper;
