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
const Card = styled.div`
  border-radius: 8px;
  flex-basis: calc(50% - 8px);
  margin-bottom: 16px;
`

const CardOne = styled(Card)`
  background: #FFF8E1;
  height: 232px;
`
const CardTwo = styled(Card)`
  background: #FFEFF4;
  height: 260px;
`
const CardThree = styled(Card)`
  background: #D6EDFF;
  height: 174px;
`
const CardFour = styled(Card)`
  background: #FFEBE0;
  height: 146px;
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
