import React from 'react';
import styled from 'styled-components';

const Separator = styled.p`
  font-family: 'Roboto Mono', monospace;
  margin: 0;
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
`;

const CountdownTimeSeparator = ({ separator = ":" }) => {
  return (
  <Separator>{separator}</Separator>
  );
}

export default CountdownTimeSeparator;
