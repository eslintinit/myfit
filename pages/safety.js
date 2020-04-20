import styled from 'styled-components'

const Navigation = styled.div`
  color: BLACK;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationTitle = styled.div`
  color: BLACK;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 24px;
`
const CardOne = styled.div`
  background: #FFF8E1;
  height: 232px;
  border-radius: 8px;
  flex-basis: calc(50% - 8px);
  margin-bottom: 16px;
`
const CardTwo = styled.div`
  background: #FFEFF4;
  height: 260px;
  border-radius: 8px;
  flex-basis: calc(50% - 8px);
  margin-bottom: 16px;
`
const CardThree = styled.div`
  background: #D6EDFF;
  height: 174px;
  border-radius: 8px;
  flex-basis: calc(50% - 8px);
  margin-bottom: 16px;
`
const CardFour = styled.div`
  background: #FFEBE0;
  height: 146px;
  border-radius: 8px;
  flex-basis: calc(50% - 8px);
  margin-bottom: 16px;
`

export default () => (
  <div style={{ padding: '16px' }}>
    <Navigation>
    <NavigationTitle>Safety</NavigationTitle></Navigation>
    <Container>
      <CardOne></CardOne>
      <CardTwo></CardTwo>
      <CardThree></CardThree>
      <CardFour></CardFour>
    </Container>
  </div>
)
