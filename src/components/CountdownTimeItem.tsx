import React from "react";
import styled from "styled-components";

import { TimeStateType } from "../types/types";

const TimeItemWrapper = styled.div`
  p {
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    &.time-value {
      font-family: "Roboto Mono", monospace;
      font-size: 2.7em;
      @media only screen and (min-width: 720px) {
        font-size: 3.2em;
      }
      @media only screen and (min-width: 1080px) {
        font-size: 4.5em;
      }
      @media only screen and (min-width: 1300px) {
        font-size: 5.5em;
      }
    }
    &.time-unit {
      font-family: "Roboto", sans-serif;
      font-size: 0.5em;
      @media only screen and (min-width: 720px) {
        font-size: 0.7em;
      }
      @media only screen and (min-width: 1080px) {
        font-size: 0.9em;
      }
      @media only screen and (min-width: 1300px) {
        font-size: 1.1em;
      }
    }
  }
`;
type CountdownTimeItemProps = {
  value: TimeStateType;
  unit: String;
};

const CountdownTimeItem: React.FC<CountdownTimeItemProps> = ({
  value,
  unit,
}) => {
  return (
    <TimeItemWrapper>
      <p className="time-value">{value > 9 ? value : `0${value}`}</p>
      <p className="time-unit">{unit}</p>
    </TimeItemWrapper>
  );
};

export default CountdownTimeItem;
