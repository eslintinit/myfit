import styled from 'styled-components'

import TextareaAutosize from 'react-textarea-autosize'

import {
  BLACK,
  DARK_GREY,
  SOFT_BLUE,
  SOFT_YELLOW,
  GREY,
  PRIMARY,
} from 'styles/colors'


export const Text = styled.div`
  margin-left: 14px;
  flex-grow: 1;
`

export const Bold = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`

export const Normal = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
`

export const FAQ = styled.div`
  background: ${SOFT_YELLOW};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 17px 12px 17px 16px;
`

export const ChatBot = styled.div`
  background: ${SOFT_BLUE};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 17px 12px 16px 16px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Chat = styled.a`
  margin-top: 16px;
  margin-left: 38px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const ChatName = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  flex-grow: 1;
  margin-left: 12px;
  color: ${BLACK};
`

export const GetInTouch = styled.div`
  background: ${BLACK};
  padding: 24px 16px 56px 16px;
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  margin-left: -16px;
`

export const GetInTouchText = styled.div`
  margin-bottom: 24px;
`

export const TextBold = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`

export const TextNormal = styled.div`
  color: ${GREY};
  font-size: 12px;
  line-height: 16px;
`

export const YourQuestion = styled.div`
  margin-bottom: 23.5px;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.25);
`

export const Message = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_GREY};
  margin-bottom: 14px;
  margin-top: 8px;
`
// margin-top: 87px;

export const SendMessage = styled.div`
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
export const Textarea = styled(TextareaAutosize)`
  background: black;
  border: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${GREY};
  margin-bottom: 14px;
  /*margin-top: 87px;*/
  margin-top: 8px;
  outline: none;
  width: 100%;
`
