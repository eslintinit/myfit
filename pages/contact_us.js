import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Dashboard from 'public/icons/Dashboard.svg'
import Question from 'public/icons/Question.svg'
import Arrow from 'public/icons/Arrow.svg'
import Contact from 'public/icons/Contact_Us.svg'
import Telegram from 'public/icons/Telegram.svg'
import Facebook from 'public/icons/Facebook.svg'
import {
  BLACK,
  DARK_GREY,
  SOFT_BLUE,
  SOFT_YELLOW,
  GREY,
  PRIMARY,
} from 'styles/colors'
import TextareaAutosize from 'react-textarea-autosize'
import Sidebar from 'components/Sidebar'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${BLACK};
`

const Page = styled.div`
  background: #fff;
  width: 100%;
  # transition: 0.2s;
  border-radius: ${(props) => (props.showSidebar ? '20px' : '0px')};
  ${(props) =>
    props.showSidebar &&
    `
    height: 100vh;
    box-sizing: border-box;
    width: 100vw;
    position: fixed;
    left: 188px;
    transform: scale(0.85);
  `}
`

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
  color: ${BLACK};
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
  color: ${DARK_GREY};
`

const FAQ = styled.div`
  background: ${SOFT_YELLOW};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 17px 12px 17px 16px;
`

const ChatBot = styled.div`
  background: ${SOFT_BLUE};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 17px 12px 16px 16px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Chat = styled.a`
  margin-top: 16px;
  margin-left: 38px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

const ChatName = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  flex-grow: 1;
  margin-left: 12px;
  color: ${BLACK};
`

const GetInTouch = styled.div`
  background: ${BLACK};
  padding: 24px 16px 56px 16px;
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
`

const GetInTouchText = styled.div`
  margin-bottom: 24px;
`

const TextBold = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`

const TextNormal = styled.div`
  color: ${GREY};
  font-size: 12px;
  line-height: 16px;
`

const YourQuestion = styled.div`
  margin-bottom: 23.5px;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.25);
`

const Message = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_GREY};
  margin-bottom: 14px;
  margin-top: 8px;
`
// margin-top: 87px;

const SendMessage = styled.div`
  border-radius: 8px;
  padding: 15px 16px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  ${(props) =>
    props.active
      ? `
    background: ${PRIMARY};
    color: white
  `
      : `
    background: rgba(250, 69, 4, 0.2);
    color: rgba(255, 255, 255, 0.2);
  `}
`

export default () => {
  const [text, setText] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)

  const sendMessage = () => {
    alert('Thanks. We will contact you shortly')
  }

  return (
    <Wrapper>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      <Page showSidebar={showSidebar}>
        <div style={{ padding: '16px' }}>
          <Navigation>
            {!showSidebar && <Dashboard onClick={() => setShowSidebar(true)} />}
            <NavigationTitle>Contact Us</NavigationTitle>
          </Navigation>

          <Link href="/faq">
            <FAQ>
              <Question />
              <Text>
                <Bold>FAQ</Bold>
                <Normal>Find answers to popular questions here</Normal>
              </Text>
              <Arrow style={{ transform: 'rotate(270deg)' }} />
            </FAQ>
          </Link>
          <ChatBot>
            <Container>
              <Contact />
              <Text>
                <Bold>Use Chat Bot</Bold>
                <Normal>Select messenger for communication</Normal>
              </Text>
            </Container>
            <Chat href="https://t.me/ignatif" target="_blank">
              <Telegram />
              <ChatName>Telegram</ChatName>
              <Arrow style={{ transform: 'rotate(270deg)' }} />
            </Chat>
            <Chat
              href="https://www.facebook.com/MyFitProducts/"
              target="_blank"
            >
              <Facebook />
              <ChatName>Facebook Messenger</ChatName>
              <Arrow style={{ transform: 'rotate(270deg)' }} />
            </Chat>
          </ChatBot>
        </div>
        <GetInTouch>
          <GetInTouchText>
            <TextBold>Get In Touch</TextBold>
            <TextNormal>
              You can leave your question here and we will reply to you shortly
              by email.
            </TextNormal>
          </GetInTouchText>
          <YourQuestion>
            <TextNormal style={{ fontWeight: 'bold' }}>
              Your Question
            </TextNormal>
            <TextareaAutosize
              style={{
                background: 'black',
                border: 'none',
                fontWeight: 'normal',
                fontSize: '14px',
                lineHeight: '18px',
                color: GREY,
                marginBottom: '14px',
                // marginTop: '87px',
                marginTop: '8px',
                outline: 'none',
                width: '100%',
              }}
              placeholder="Enter message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </YourQuestion>
          <SendMessage onClick={sendMessage} active={text !== ''}>
            Send Message
          </SendMessage>
        </GetInTouch>
      </Page>
    </Wrapper>
  )
}
