import styled from 'styled-components'
import { device } from './device.js'

import { BLACK, DARK_GREY, GREY, PRIMARY, WHITE, LIGHT_DARK } from './colors.js'

export const Bg = styled.div`
  overflow: hidden;
  position: relative;
  height: 970px;
`

export const ContactBox = styled.div`
  width: 35%;
  position: absolute;
  margin-top: 100px;
  margin-left: 160px;
`

export const Header = styled.h1`
  font-family: 'FuturaHeavy';
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.05em;
  color: ${BLACK};
`
export const HeadText = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${BLACK};
  margin-top: 24px;
  margin-bottom: 42px;
`
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  background: #f8f8f8;
  font-size: 18px;
  line-height: 24px;
  border: none;
  width: 80%;
  border-radius: 2px;
  height: 60px;
  padding-left: 16px;
  margin-bottom: 18px;
  font-family: 'FuturaMedium';
`
export const Select = styled.select`
  background: #f8f8f8;
  font-size: 18px;
  line-height: 24px;
  border: none;
  width: 83%;
  border-radius: 2px;
  height: 60px;
  padding-left: 16px;
  margin-bottom: 18px;
  color: #7d7d7d;
  font-family: 'FuturaMedium';
`

export const TextArea = styled.textarea`
  background: #f8f8f8;
  font-size: 18px;
  line-height: 24px;
  border: none;
  width: 80%;
  border-radius: 2px;
  height: 60px;
  padding-left: 16px;
  margin-bottom: 32px;
  font-family: 'FuturaMedium';
`

export const FormButton = styled.input`
  background: ${PRIMARY};
  color: ${WHITE};
  font-weight: bold;
  font-size: 16px;
  line-height: 134.7%;
  font-family: 'FuturaHeavy';
  border: none;
  width: min-content;
  border-radius: 8px;
  padding: 17px 24px;
  cursor: pointer;
`

export const FullKitStyle = styled.img`
  width: 100%;
  transform: rotate(-46deg);
  position: absolute;
  right: -415px;
  top: 278px;
`

export const Footer = styled.div`
  background: #000000db;
  width: 100vw;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: start;
  overflow: hidden;
  @media ${device.mobile} {
    padding: 24px 0px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  justify-content: space-between;
  @media ${device.laptop} {
    margin-bottom: 32px;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
  }
`

export const MenuFooter = styled.div`
  display: flex;
  color: ${WHITE};
  flex-direction: column;
  align-items: start;
  margin-left: 40px;
  height: 46px;
  width: 80px;
  justify-content: space-between;
  @media ${device.tablet} {
    margin-left: 20px;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
  }
`

export const MenuButton = styled.a`
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
`

export const Socials = styled.div`
  width: 74px;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
    width: min-content;
  }
`

export const FooterAddress = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${WHITE};
  width: 222px;
  margin: 0px 120px;
  @media ${device.laptop} {
    margin: 0px;
  }
`

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media ${device.tablet} {
    margin-right: 20px;
  }
`
export const EmailHead = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: ${WHITE};
`

export const EmailText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${WHITE};
  margin: 8px 0px 20px;
  width: 80%;
`

export const Email = styled.input`
  background: #0000001c;
  font-size: 14px;
  line-height: 20px;
  border-width: 1px 0px 1px 1px;
  width: 70%;
`

export const EmailButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: ${BLACK};
  text-align: center;
  background: ${WHITE};
  border: none;
  padding: 0px 16px;
  cursor: pointer;
  @media ${device.mobile} {
    margin-bottom: 42px;
  }
`
