import styled from 'styled-components'
import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'

const Navigation = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
`

const FAQ = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: BLACK;
  margin-bottom: 4px;
  flex-grow: 1;
  padding-right: 28px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  border-radius: 8px;
`

const Question = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  border-radius: 8px;
  padding-top: 24px;
  padding-bottom: 24px;
`

const TextBold = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: BLACK;
  width: 80%;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #5B5B5B;
  padding-top: 8px;
`

export default () => (
  <div style={{ padding: '16px' }}>
    <Navigation>
      <Back />
      <FAQ>FAQ</FAQ>
    </Navigation>
    <Container>
      <TextBold>Do you ship internationally?</TextBold>
      <Arrow />
    </Container>
    <Container>
      <TextBold>What payment methods do you accept?</TextBold>
      <Arrow />
    </Container>
    <Container>
      <TextBold>What if I received the wrong or defective product(s)?</TextBold>
      <Arrow />
    </Container>
    <Answer>
      <Question>
        <TextBold>What shipping methods are available and how much do they cost?</TextBold>
        <Arrow style={{ transform: 'rotate(180deg)' }}/>
      </Question>
      <Text>For your convenience, we ship via FedEx, DHL & USPS. The store is plugged directly into the shipping provider's shipping calculator, the rates for which are based on your location, package weight, and package dimensions.  To calculate the cost of shipping for your order, put in your ZIP code during checkout and click continue.</Text>
    </Answer>
    <Container>
      <TextBold>How do I track my order?</TextBold>
      <Arrow />
    </Container>
  </div>
)
