import React from 'react';
import styled from 'styled-components';
import CountdownTitle from '../components/CountdownTitle';
import CountdownTimeWrapper from '../components/CountdownTimeWrapper';
import Footer from '../components/Footer';

const CountdownWrapper = styled.div`
  height: 100vh;
  min-width: 400px;
  width: 100vw;
`;

const CountdownComponent = () => {
  return (
    <CountdownWrapper>
      <CountdownTitle />
      <CountdownTimeWrapper />
      <Footer />
    </CountdownWrapper>
  );
}

export default CountdownComponent;