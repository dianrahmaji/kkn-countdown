import React from "react";
import styled from "styled-components";

import CountdownTitle from "../components/CountdownTitle";
import CountdownTimeWrapper from "../components/CountdownTimeWrapper";
import Footer from "../components/Footer";

const CountdownWrapper = styled.div`
  height: 100vh;
  min-width: 400px;
  width: 100vw;
`;

const CountdownComponent: React.FC = () => {
  const countdownDate = new Date("August 24 2021 00:00:00").getTime();

  return (
    <CountdownWrapper>
      <CountdownTitle />
      <CountdownTimeWrapper countdownDate={countdownDate} />
      <Footer />
    </CountdownWrapper>
  );
};

export default CountdownComponent;
