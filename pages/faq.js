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

const Questions = styled.div`

`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 66px;
  align-items: center;
`

const TextBold = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: BLACK;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #5B5B5B;
`

export default () => (
  <div style={{ padding: '16px' }}>
    <Navigation>
      <Back />
      <FAQ>FAQ</FAQ>
    </Navigation>
    <Questions>
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
      <Container>
        <TextBold>What shipping methods are available and how much do they cost?</TextBold>
        <Arrow />
      </Container>
      <Container>
        <TextBold>How do I track my order?</TextBold>
        <Arrow />
      </Container>
    </Questions>
  </div>
)
