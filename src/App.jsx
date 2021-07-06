import React from 'react';
import styled from 'styled-components';
import CountdownPage from './pages/CountdownPage';

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const App = () => {
  return (
    <MainWrapper>
      <CountdownPage />
    </MainWrapper>
  );
}

export default App;
