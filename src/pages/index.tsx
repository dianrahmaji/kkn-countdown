import styled from 'styled-components'

import CountdownTitle from '../components/CountdownTitle'
import CountdownTimeWrapper from '../components/CountdownTimeWrapper'
import Footer from '../components/Footer'

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const CountdownWrapper = styled.div`
  height: 100vh;
  min-width: 400px;
  width: 100vw;
`

const index = () => {
  const countdownDate = new Date('August 24 2021 00:00:00').getTime()

  return (
    <MainWrapper>
      <CountdownWrapper>
        <CountdownTitle />
        <CountdownTimeWrapper countdownDate={countdownDate} />
        <Footer />
      </CountdownWrapper>
    </MainWrapper>
  )
}

export default index
