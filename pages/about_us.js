import styled from 'styled-components'
import Dashboard from 'public/icons/Dashboard.svg'
import Instagram from 'public/icons/Instagram.svg'
import Facebook from 'public/icons/FacebookIcon.svg'
import Twitter from 'public/icons/Twitter.svg'
import { BLACK, DARK_GREY, PRIMARY } from 'styles/colors'

const NavigationBar = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  justify-content: center;
	align-items: flex-end;
  justify-content: space-between;
  margin: 16px 16px 24px;
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

const Content = styled.div`
  margin: 0px 16px;
`
const ContentTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: ${BLACK};
  margin-bottom: 24px;
`

const Pictures = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`

const Info = styled.div`
`

const InfoBold = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
`

const InfoNormal = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_GREY};
  margin-top: 8px;
  margin-bottom: 24px;
`

const SocialLinks = styled.div`
  background: ${BLACK};
  padding: 24px 16px 56px 16px;
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
	flex-direction: row;
`

const SocialText = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  width: 60%;
  flex-grow: 1;
`

export default () => (
    <div>
      <NavigationBar>
        <Dashboard />
        <NavigationTitle>About us</NavigationTitle>
      </NavigationBar>
      <Content>
        <ContentTitle>MyFit are a UK company looking to revolutionise the way we workout!</ContentTitle>
        <Pictures>
          <img src='https://i.imgur.com/FU5O4kf.png' width='164px' height='164px' style={{ paddingRight: '15px' }}/>
          <img src='https://i.imgur.com/zsEImLx.png' width='164px' height='164px'/>
        </Pictures>
        <Info>
          <InfoBold>Resistance bands are cool</InfoBold>
          <InfoNormal>- but they’re a lot cooler when they’ve been created and designed to allow you to replicate nearly all gym workouts. We’ve managed to create resistance from the comfort of your own home without compromising on your workout goals. </InfoNormal>
          <InfoBold>The MyFit app is your go-to for all resistance workouts created by our own experts! </InfoBold>
        </Info>
      </Content>
      <SocialLinks>
        <SocialText>Join us in the resistance workout revolution.</SocialText>
        <Facebook style={{ marginRight: '12px' }}/>
        <Twitter style={{ marginRight: '12px' }}/>
        <Instagram />
      </SocialLinks>
    </div>

  )
