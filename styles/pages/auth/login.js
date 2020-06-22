import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { BLACK, DARK_GREY, GREY, PRIMARY } from 'styles/colors'

const isIOS =
  process.browser &&
  window &&
  /iPad|iPhone|iPod/.test(window.navigator.userAgent) &&
  !window.MSStream

export const Bg = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.33) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://i.imgur.com/zRrcCEH.png);
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 375px) {
    background-size: cover;
    background-position: center;
  }
`

export const NavigationBar = styled.div`
  height: 44px;
  padding: 16px;
`

export const InfoBlock = styled(motion.div)`
  border-radius: 20px 20px 0px 0px;
  background: #ffffff;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
`

export const Caption = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TextBold = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: BLACK;
  width: 50vw;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
`

export const RedText = styled(Text)`
  color: ${PRIMARY};
  align-self: flex-end;
`

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.25);
  margin-bottom: 24px;
`

export const Password = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid BLACK;
  margin-bottom: 8px;
`

export const Input = styled.input`
  border: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  margin: 15px 16px;
  outline: none;
  flex-grow: 1;
  ${isIOS &&
  `
    font-size: 16px;
  `}
`

export const Login = styled.div`
  border-radius: 8px;
  padding: 15px 16px;
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: white;
  ${(props) =>
    props.active
      ? `
    background: ${PRIMARY};
  `
      : `
    background: rgba(250, 69, 4, 0.2);
  `}
`

export const Error = styled.span`
  color: red;
`
