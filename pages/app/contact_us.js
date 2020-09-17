import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import Dashboard from 'public/icons/Dashboard.svg'
import Question from 'public/icons/Question.svg'
import Arrow from 'public/icons/Arrow.svg'
import Contact from 'public/icons/Contact_Us.svg'
import Telegram from 'public/icons/Telegram.svg'
import Facebook from 'public/icons/Facebook.svg'

import Sidebar from 'components/Sidebar'

import * as S from 'styles/pages/contact_us'

export default () => {
  const [text, setText] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)

  const sendMessage = () => {
    alert('Thanks. We will contact you shortly')
  }

  return (
    <div style={{ width: '100%', marginTop: 24 }}>
      <Link href="/faq">
        <S.FAQ>
          <Question />
          <S.Text>
            <S.Bold>FAQ</S.Bold>
            <S.Normal>Find answers to popular questions here</S.Normal>
          </S.Text>
          <Arrow style={{ transform: 'rotate(270deg)' }} />
        </S.FAQ>
      </Link>
      {/*
      <S.ChatBot>
        <S.Container>
          <Contact />
          <S.Text>
            <S.Bold>Use Chat Bot</S.Bold>
            <S.Normal>Select messenger for communication</S.Normal>
          </S.Text>
        </S.Container>
        <S.Chat href="https://t.me/ignatif" target="_blank">
          <Telegram />
          <S.ChatName>Telegram</S.ChatName>
          <Arrow style={{ transform: 'rotate(270deg)' }} />
        </S.Chat>
        <S.Chat href="https://www.facebook.com/MyFitProducts/" target="_blank">
          <Facebook />
          <S.ChatName>Facebook Messenger</S.ChatName>
          <Arrow style={{ transform: 'rotate(270deg)' }} />
        </S.Chat>
      </S.ChatBot>
      */}

      <AnimatePresence>
        <S.GetInTouch
          initial={{ marginBottom: -343 }}
          animate={{ marginBottom: 0 }}
          exit={{ marginBottom: -343 }}
          transition={{ delay: 0.5 }}
        >
          <S.GetInTouchText>
            <S.TextBold>Get In Touch</S.TextBold>
            <S.TextNormal>
              You can leave your question here and we will reply to you shortly
              by email.
            </S.TextNormal>
          </S.GetInTouchText>
          <S.YourQuestion action="https://formspree.io/mwkwezea" method="POST">
            <S.TextNormal style={{ fontWeight: 'bold' }}>
              Your Question
            </S.TextNormal>
            <S.Textarea
              placeholder="Enter message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </S.YourQuestion>
          <S.SendMessage active={text !== ''} type="submit">
            Send Message
          </S.SendMessage>
        </S.GetInTouch>
      </AnimatePresence>
    </div>
  )
}
