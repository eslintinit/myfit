import Layout from 'components/Layout'
import { useState } from 'react'
import styled from 'styled-components'
import Dashboard from 'public/icons/Dashboard.svg'
import Instagram from 'public/icons/Instagram.svg'
import Facebook from 'public/icons/FacebookIcon.svg'
import Twitter from 'public/icons/Twitter.svg'
import { BLACK, DARK_GREY, PRIMARY } from 'styles/colors'
import Sidebar from 'components/Sidebar'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${BLACK};
`

const Page = styled.div`
  background: #fff;
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

const NavigationBar = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  align-items: flex-end;
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

const Content = styled.div``

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
  margin-left: -16px;
`

const SocialText = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 60%;
  flex-grow: 1;
`

export default () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <Layout>
      <div style={{ marginTop: 24 }}>
        <Content>
          <ContentTitle>
            MyFit are a UK company looking to revolutionise the way we workout!
          </ContentTitle>
          <Pictures>
            <img
              src="https://i.imgur.com/FU5O4kf.png"
              width="164px"
              height="164px"
              style={{ paddingRight: '15px' }}
            />
            <img
              src="https://i.imgur.com/zsEImLx.png"
              width="164px"
              height="164px"
            />
          </Pictures>
          <InfoBold>Resistance bands are cool</InfoBold>
          <InfoNormal>
            - but they’re a lot cooler when they’ve been created and designed to
            allow you to replicate nearly all gym workouts. We’ve managed to
            create resistance from the comfort of your own home without
            compromising on your workout goals.{' '}
          </InfoNormal>
          <InfoBold>
            The MyFit app is your go-to for all resistance workouts created by
            our own experts!{' '}
          </InfoBold>
        </Content>
        <SocialLinks>
          <SocialText>Join us in the resistance workout revolution.</SocialText>

          <a href="https://www.facebook.com/MyFitProducts/" target="_blank">
            <Facebook style={{ marginRight: '12px' }} />
          </a>
          <a href="https://twitter.com/myfitproducts" target="_blank">
            <Twitter style={{ marginRight: '12px' }} />
          </a>
          <a href="https://www.instagram.com/myfitproducts/" target="_blank">
            <Instagram />
          </a>
        </SocialLinks>
      </div>
    </Layout>
  )
}
