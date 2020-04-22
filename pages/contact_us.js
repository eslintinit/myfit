import styled from 'styled-components'
import Dashboard from 'public/icons/Dashboard.svg'
import Question from 'public/icons/Question.svg'
import Arrow from 'public/icons/Arrow.svg'
import Contact from 'public/icons/Contact Us.svg'
import Telegram from 'public/icons/Telegram.svg'
import Facebook from 'public/icons/Facebook.svg'


const Navigation = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
`

const NavigationTitle = styled.div`
  color: BLACK;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  flex-grow: 1;
  padding-right: 27px;
`

const Text = styled.div`
  margin-left: 14px;
  flex-grow: 1;
`

const Bold = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`

const Normal = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #5B5B5B;
`

const FAQ = styled.div`
  background: #FFF8E1;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 17px 12px 17px 16px;
`

const ChatBot = styled.div`
  background: #D6EDFF;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 12px 16px 16px;
`

const Chat = styled.div`
  margin-top: 16px;
`

const GetInTouch = styled.div`
`

export default () => (
  <div style={{ padding: '16px' }}>
    <Navigation>
      <Dashboard />
      <NavigationTitle>Contact Us</NavigationTitle>
    </Navigation>
    <FAQ>
      <Question />
      <Text>
        <Bold>FAQ</Bold>
        <Normal>Find answers to popular questions here</Normal>
      </Text>
      <Arrow style={{ transform: 'rotate(270deg)' }}/>
    </FAQ>
    <ChatBot>
      <Contact />
      <Text>
        <Bold>Use Chat Bot</Bold>
        <Normal>Select messenger for communication</Normal>
        <Chat>
          <Telegram />
        </Chat>
        <Chat>
          <Facebook />
        </Chat>
      </Text>
    </ChatBot>
    <GetInTouch></GetInTouch>
  </div>
)
