import styled from 'styled-components';
import { device } from './device.js';



import {
  BLACK,
  DARK_GREY,
  SOFT_YELLOW,
  GREY,
  PRIMARY,
  WHITE,
  SOFT_PINK,
  SOFT_ORANGE
} from './colors.js'


export const Bg = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 615px;
  overflow: hidden;
  @media ${device.tablet} {
    height: 545px;
  }
  @media ${device.mobile} {
    height: 540px;
  }
  @media ${device.mobileS} {
    height: 496px;
  }
`

/*export const MenuBlockLight = styled.div`
  width: 81vw;;
  height: 720px;
  background: ${SOFT_ORANGE};
  opacity: 0.5;
  border-radius: 8px;
  transform: rotate(3deg);
  align-self: start;
  position: absolute;
  top: -70px;
  left: 63.68px;
  @media ${device.laptop} {
    transform: rotate(6deg);
    width: 100vw;
    height: 448px;
    top: 45px;
    left: -20px;
  }
  @media ${device.mobile} {
    width: 500px;
    height: 500px;
    opacity: 0.7;
    left: -55px;
    top: 0px;
  }
  @media ${device.mobileM} {
    left: -103px;
  }
`*/

export const MenuBlock = styled.div`
  @media ${device.mobile} {
    transform: rotate(-8deg);
    height: 500px;
    width: 500px;
    top: -12px;
    left: -23px;
    background: ${SOFT_ORANGE};
    border-radius: 8px;
    align-self: center;
    position: absolute;
    opacity: 0.8;
  }
  @media ${device.mobileM} {
    top: -23px;
  }
  @media ${device.mobileS} {
    top: -56px;
  }
`

export const MenuImage = styled.img`
  width: 100%;
  position: absolute;
  top: -150px;
  @media ${device.laptop} {
    width: 112%;
    top: -43px;
  }
  @media ${device.tablet} {
    width: 115%;
  }
  @media ${device.mobile} {
    width: 171%;
    top: 42px;
    right: -70px;
  }
  @media ${device.mobileM} {
    width: 190%;
  }
  @media ${device.mobileS} {
    width: 206%;
  }
`

export const Box = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: start;
  align-self: center;
`

export const MobileMenu = styled.div`
  @media ${device.desktop} {
    display: none;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
    padding: 12px 20px;
    background: ${BLACK};
    display: flex;
    justify-content: space-between;
  }
`

export const NavigationMenu = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  @media ${device.laptop} {
    padding: 16px 0px 0px;
  }
  @media ${device.mobile} {
    display: none;
  }
`

export const Menu = styled.div`
  width: 374px;
  display: flex;
  justify-content: space-between;
  color: ${BLACK};
  margin: 0px 432px 0px 112px;
  @media ${device.laptop} {
    width: 305px;
    margin: 0px 40px 0px 85px;
  }
`

export const MenuButton = styled.a`
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
`

export const ButtonPrimary = styled.a`
  font-weight: bold;
  font-size: 16px;
  line-height: 134.7%;
  color: ${WHITE};
  text-align: center;
  background: ${PRIMARY};
  border-radius: 8px;
  text-decoration: none;
  padding: 17px 24px;
  cursor: pointer;
  @media ${device.mobile} {
    width: 160px;
    height: 48px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
`
export const ButtonPrimaryMobile = styled.a`
  font-size: 14px;
  line-height: 18px;
  font-weight: 800;
  color: ${WHITE};
  background: ${PRIMARY};
  border-radius: 8px;
  text-decoration: none;
  padding: 12px 16px;
`

export const AmazonButton = styled(ButtonPrimary)`
  margin-left: 56px;
  background: rgba(250, 69, 4, 0.2);
  padding: 19px 24px 16px;
  @media ${device.mobile} {
    width: 160px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin-left: 16px;
  }
`

export const MainCTA = styled.div`
  width: 579px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 176px;
  @media ${device.tablet} {
    margin-top: 80px;
    width: 541px;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
    align-self: center;
    text-align: center;
    align-items: center;
    margin-top: 128px;
  }
  @media ${device.mobileS} {
    margin-top: 48px;
  }
`

export const MainHead = styled.h1`
  font-family: 'FuturaHeavy';
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
  @media ${device.mobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0em;
  }
`
export const MainText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${BLACK};
  margin-top: 16px;
  @media ${device.laptop} {
    width: 81%;
  }
  @media ${device.mobile} {
    font-size: 14px;
    line-height: 24px;
    margin-top: 8px;
  }
`

export const MainButtons = styled.div`
  margin-top: 40px;
  display: flex;
  @media ${device.mobileS} {
    width: calc(100vw - 40px);
  }
`


export const Benefits = styled.div`
  padding: 100px 0px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.laptop} {
    padding: 80px 40px 64px;
  }
  @media ${device.mobile} {
    padding: 64px 20px 43px;
  }
`

export const Caption = styled.div`
  width: 780px;
  @media ${device.laptop} {
    width: 100%;
  }
`

export const TextHead = styled.h2`
  font-family: 'FuturaHeavy';
  font-weight: 900;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 0.05em;
  color: ${BLACK};
  text-transform: capitalize;
  @media ${device.mobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0em;
    padding: 0px 20px;
  }
`

export const CaptionText = styled(MainText)`
  @media ${device.laptop} {
    width: 100%;
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  margin-top: 64px;
  @media ${device.laptop} {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media ${device.mobile} {
    margin-top: 48px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 210px;
  width: 276px;
  padding: 16px 32px;
  background: #F8F8F8;
  border-radius: 8px;
  @media ${device.laptop} {
    padding: 16px 24px;
  }
  @media ${device.mobile} {
    padding: 16px 32px;
    justify-content: center;
  }
  @media ${device.mobileS} {
    width: calc(100vw - 104px);
  }
`

export const CardOne = styled(Card)`

`

export const CardTwo = styled(Card)`
  margin: 0px 80px;
  @media ${device.laptop} {
    margin-left: 40px;
    margin-right: 0px;
  }
  @media ${device.mobile} {
    margin: 32px 0px;
  }
`

export const CardThree = styled(Card)`
  @media ${device.laptop} {
    margin-top: 40px;
  }
  @media ${device.mobile} {
    margin-top: 0px;
    height: auto;
  }
`

export const CardTextBold = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${BLACK};
  margin-top: 24px;
  margin-bottom: 8px;
`

export const CardText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
`


export const ProductBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 1135px;
  @media ${device.laptop} {
    height: 894px;
  }
  @media ${device.tablet} {
    height: 796px;
  }
  @media ${device.mobile} {
    height: 654px;
  }
`

export const FullKitStyle = styled.img`
  width: 100%;
  position: relative;
  top: -280px;
  @media ${device.laptop} {
    top: -200px;
  }
  @media ${device.tablet} {
    top: -150px;
  }
  @media ${device.mobile} {
    top: -80px;
  }
`

export const DarkBlock = styled.div`
  width: 100vw;
  height: 598px;
  background: ${BLACK};
  display: flex;
  align-items: center;
  position: relative;
  top: -300px;
  justify-content: space-between;
  @media ${device.laptop} {
    height: 500px;
    top: -200px;
    justify-content: flex-end;
  }
  @media ${device.tablet} {
    top: -150px;
  }
  @media ${device.mobile} {
    top: -80px;
    height: 486px;
  }
`

export const ProductStyle = styled.img`
  height: 100%;
  @media ${device.laptopL} {
    object-fit: contain;
  }
  @media ${device.mobile} {
    width: 120vw;
  }
`

export const ProductCTA = styled.div`
  width: 460px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.laptop} {
    position: absolute;
    left: 0px;
  }
  @media ${device.tablet} {
    width: 90%;
    bottom: 42px;
  }
  @media ${device.mobile} {
    width: 100%;
    bottom: 16px;
  }
`

export const ProductHead = styled.h2`
  font-family: 'FuturaHeavy';
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${PRIMARY};
  @media ${device.laptop} {
    width: 70%;
  }
  @media ${device.mobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0em;
  }
  @media ${device.mobileS} {
    font-size: 27px;
    line-height: 34px;
  }
`

export const ProductHeadWhite = styled(ProductHead)`
  color: ${WHITE};
`

export const ProductText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${GREY};
  margin: 12px 0px 48px;
  @media ${device.tablet} {
    margin-top: 96px;
    width: 62%;
  }
  @media ${device.mobileS} {
    font-size: 14px;
    line-height: 18px;
  }
`

export const App = styled.div`
  padding: 80px 0px 0px 64px;
  display: flex;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: column-reverse;
    padding: 80px 0px 80px;
  }
  @media ${device.mobile} {
    padding: 40px 0px 21px;
  }
`

export const AppImage = styled.img`
  width: calc(50vw - 64px);
  @media ${device.laptop} {
    width: 100%;
    margin-top: 80px;
  }
  @media ${device.mobile} {
    margin-top: 16px;
  }
`

export const AppCTA = styled.div`
  margin-left: 118px;
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.laptop} {
    align-items: center;
    width: 100%;
    margin: 0px;
  }
`

export const FramedHead = styled.div`
  @media ${device.laptop} {
    text-align: center;
    width: 61vw;
  }
  @media ${device.mobile} {
    width: 90vw;
  }
`

export const AppHead = styled.h2`
  font-family: 'FuturaHeavy';
  font-weight: 900;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
`

export const AppBox = styled.div`
  margin: 40px 0px 48px;
  @media ${device.laptop} {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin: 40px 40px 56px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    margin: 40px 20px 48px;
  }
`

export const AppCard = styled.div`
  padding: 20px 24px;
  border-radius: 8px;
  display: flex;
  background: #F8F8F8;
  @media ${device.laptop} {
    padding: 20px 20px 20px 25px;
    width: 42%;
  }
  @media ${device.mobile} {
    width: calc(100% - 40px);
  }
`

export const WorkoutCard = styled(AppCard)`

`

export const CombosCard = styled(AppCard)`
  margin-top: 16px;
  @media ${device.laptop} {
    margin-top: 0px;
    margin-left: 20px;
  }
  @media ${device.mobile} {
    margin-top: 24px;
    margin-left: 0px;
  }
`

export const FavouritesCard = styled(AppCard)`
  margin-top: 16px;
  @media ${device.laptop} {
    margin-top: 24px;
  }
`

export const Framed = styled.div`
  margin-left: 24px;
`

export const AppTextBold = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${BLACK};
  margin-bottom: 4px;
`

export const AppText = styled(CardText)`
  margin-top: 16px;
  width: 56%;
  @media ${device.mobile} {
    width: 90%;
  }
`

export const Bottom = styled.div`
  width: 100vw;
  padding: 48px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const BottomText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${DARK_GREY};
  margin-top: 8px;
`

export const OrderButton = styled(ButtonPrimary)`
  margin: 32px 0px 16px;
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
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
  @media ${device.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 40px;
  height: 92px;
  width: 160px;
  justify-content: space-between;
  @media ${device.tablet} {
    margin-left: 20px;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
  }
`
export const FooterButton = styled(MenuButton)`
  color: ${WHITE};
  text-decoration: none;
`

export const Socials = styled.div`
  width: 128px;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
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
  @media ${device.tablet} {
    margin-right: 20px;
  }
`

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media ${device.tablet} {
    width: 75%;
    margin-left: 20px;
    margin-top: 16px;
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

export const MyFitRight = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff6b;
  align-self: flex-start;
  background: #000000;
  width: 100vw;
  padding: 8px 40px 20px;
`
