import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h1 {
    margin: 0;
    text-align: center;
    &.side-heading {
      font-family: 'Roboto Mono', monospace;
      text-transform: uppercase;
      font-size: 1.2em;
      @media only screen and (min-width: 720px) {
        font-size: 1.4em;
      }
      @media only screen and (min-width: 1080px) {
        font-size: 1.57em;
      }
      @media only screen and (min-width: 1300px) {
        font-size: 1.74em;
      }
    }
    &.main-heading {
      font-family: 'Roboto', sans-serif;
      color: #00a8cc;
      font-size: 2em;
      @media only screen and (min-width: 720px) {
        font-size: 2.3em;
      }
      @media only screen and (min-width: 1080px) {
        font-size: 2.6em;
      }
      @media only screen and (min-width: 1300px) {
        font-size: 2.9em;
      }

    }
  }
`;

const CountdownTitle: React.FC = () => {
  return (
    <TitleWrapper>
      <h1 className="side-heading">Countdown Penarikan</h1>
      <h1 className="main-heading">KKN-PPM UGM</h1>
      <h1 className="side-heading">Periode 2 Tahun 2021</h1>
    </TitleWrapper>
  );
}

export default CountdownTitle;
