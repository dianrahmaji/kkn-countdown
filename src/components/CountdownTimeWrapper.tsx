import React from "react";
import styled from "styled-components";

import useCountdown from "../hooks/useCountdown";

import CountdownTimeItem from "./CountdownTimeItem";
import CountdownTimeSeparator from "./CountdownTimeSeparator";

const TimeWrapper = styled.div`
  height: 55%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

type CountdownTimeWrapperProps = {
  countdownDate: number;
};

const CountdownTimeWrapper: React.FC<CountdownTimeWrapperProps> = ({
  countdownDate,
}) => {
  const { timeDays, timeHours, timeMinutes, timeSeconds } =
    useCountdown(countdownDate);

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
};

export default CountdownTimeWrapper;
