import styled from 'styled-components'
import Care from 'public/icons/Care.svg'
import EU from 'public/icons/EU.svg'
import Dashboard from 'public/icons/Dashboard.svg'
import Natural from 'public/icons/Natural.svg'
import Question from 'public/icons/Question.svg'
import { BLACK, DARK_GREY, SOFT_BLUE, SOFT_YELLOW, SOFT_PINK, SOFT_ORANGE, PRIMARY } from 'styles/colors'

const Navigation = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  justify-content: center;
	align-items: flex-end;
  justify-content: space-between;
`

const NavigationTitle = styled.div`
  color: ${BLACK};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  flex-grow: 1;
  padding-right: 27px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`

const Column = styled.div`
  flex-basis: calc(50% - 8px);
`
const TextBold = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  margin-top: 16px;
`

const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
  margin-top: 8px;
`

const Card = styled.div`
  border-radius: 8px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
`

const CardOne = styled(Card)`
  background: ${SOFT_YELLOW};
  height: 232px;
`

const CardTwo = styled(Card)`
  background: ${SOFT_PINK};
  height: 260px;
`

const CardThree = styled(Card)`
  background: ${SOFT_BLUE};
  height: 174px;
`

const CardFour = styled(Card)`
  background: ${SOFT_ORANGE};
  height: 146px;
`

const Link = styled.a`
  text-decoration: none;
  color: ${PRIMARY};
`

export default () => (
  <div style={{ padding: '16px' }}>
    <Navigation>
      <Dashboard />
      <NavigationTitle>Safety</NavigationTitle>
    </Navigation>
    <Container>
      <Column>
        <CardOne>
          <Natural />
          <TextBold>MyFit resistance bands are made from 100% natural latex.</TextBold>
          <Text>If you are allergic to latex, we would advise consulting with a health professional before using it.</Text>
        </CardOne>
        <CardThree>
          <EU />
          <TextBold>MyFit Resistance Bands are CE regulated in conformity with EU regulations.</TextBold>
        </CardThree>
      </Column>
      <Column>
        <CardTwo>
          <Care />
          <TextBold>Please use with care.</TextBold>
          <Text>Whilst our bands are great are creating resistance, it’s important that you use them with the safety of your body in mind. Like any other gym weights, if you lift too heavy, you can cause damage.</Text>
        </CardTwo>
        <CardFour>
          <Question/>
          <TextBold>You can find our contact details at <Link href="https://google.com">my-fit.io</Link> if you have any other questions.</TextBold>
        </CardFour>
      </Column>
    </Container>
  </div>
)
