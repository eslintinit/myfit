import { motion } from 'framer-motion'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'

import { BLACK, DARK_GREY, PRIMARY, GREY, SOFT_ORANGE } from 'styles/colors'

const isIOS =
  process.browser &&
  window &&
  /iPad|iPhone|iPod/.test(window.navigator.userAgent) &&
  !window.MSStream

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 24px;
`

export const CoverImage = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding-bottom: 16px;
`

export const Upload = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 11px;
`

export const PictureText = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${PRIMARY};
  margin-left: 4px;
`

export const Box = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding: 24px 0px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 32px);
`

export const InfoImage = styled(Info)`
  justify-content: start;
`

export const InfoName = styled(Info)`
  margin-bottom: 32px;
`

export const InfoNotification = styled(Info)`
  margin-top: 24px;
`

export const UserText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  margin-left: 16px;
  flex-grow: 1;
`

export const TextBold = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  flex-grow: 1;
  margin-left: 16px;
`

export const TextImage = styled(TextBold)`
  margin: 0px 0px 16px;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
`

export const TextPersonal = styled(Text)`
  margin-bottom: 16px;
`

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0);
`

export const PopOver = styled(motion.div)`
  border-radius: 20px 20px 0px 0px;
  background: #ffffff;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  margin-left: -16px;
`

export const Caption = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextPopOver = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${BLACK};
  flex-grow: 1;
`

export const Input = styled.input`
  border: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  outline: none;
  flex-grow: 1;
  margin-left: 16px;

  ${isIOS && 'font-size: 16px;'}
`

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.25);
  padding-bottom: 16px;
  ${Input}:focus && {
    border-bottom: 1.5px solid rgba(189, 189, 189, 1);
  }
`

export const Save = styled.div`
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
