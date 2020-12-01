import styled from 'styled-components'

import { BLACK, WHITE, DARK_GREY, SOFT_ORANGE } from '../../styles/colors.js'

export const Outer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`

export const Bg = styled.div`
  width: 948px;
  height: 529px;
  background: ${WHITE};
  border: ${BLACK} 2px solid;
  outline: ${DARK_GREY} 9px solid;
  display: flex;
  * {
    font-family: 'MadeSans' !important;
  }
  z-index: 5;
`

export const Image = styled.img`
  width: 382px;
  height: 100%;
`

export const Block = styled.form`
  width: 566px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`
export const Box = styled.img`
  align-self: flex-end;
  height: 34px;
`

export const Head = styled.h1`
  font-size: 58px;
  margin-top: 41px;
`

export const Text = styled.p`
  line-height: 18px;
  font-size: 16px;
  width: 70%;
  margin-top: 53px;
`

export const EmailBlock = styled.input`
  width: 330px;
  height: 50px;
  background: ${WHITE};
  font-size: 16px;
  border: 3px ${BLACK} solid;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: ${BLACK};
  margin-top: 48px;

  ::placeholder,
  ::-webkit-input-placeholder {
    text-transform: uppercase;
    text-align: center;
    color: ${BLACK};
    font-family: 'MadeSans' !important;
  }
`

export const Policy = styled.div`
  margin-top: 32px;
`

export const PolicyText = styled.span`
  font-size: 14px;
  margin-left: 12px;
`

export const SignUp = styled.button`
  width: 244px;
  height: 40px;
  text-transform: uppercase;
  font-size: 16px;
  color: ${WHITE};
  text-align: center;
  background: ${BLACK};
  border: none;
  cursor: pointer;
  margin-top: 30px;
  font-family: 'MadeSans' !important;
`
