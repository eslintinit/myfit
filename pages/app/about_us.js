import { useState } from 'react'

import Instagram from 'public/icons/Instagram.svg'
import Facebook from 'public/icons/FacebookIcon.svg'
import Twitter from 'public/icons/Twitter.svg'
import Logo from 'public/Logo.svg'

import * as S from 'styles/pages/about_us'

export default () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div style={{ marginTop: 24 }}>
      <S.Content>
        <S.ContentTitle>
          MyFit are a UK company looking to revolutionise the way we workout.
        </S.ContentTitle>
        <S.Pictures>
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
        </S.Pictures>
        <S.InfoBold>Resistance bands are cool</S.InfoBold>
        <S.InfoNormal>
          - but we’re going a step-ahead to ensure you maximise your potential.
          Our health experts have devoted a great amount of time in creating a
          variety of workouts, whatever your health goals are. We’ve managed to
          create resistance from the comfort of your own home, without
          compromising on the quality.
          <br />
          <br />
          The exclusive MyFit app is your go-to for all resistance workouts
          created by our own experts. We aim to regularly upload new workouts to
          freshen up your workout routine!
        </S.InfoNormal>
        <S.InfoBold>
          Let’s get fit together.
          <br />
          <br />
          Team MyFit
        </S.InfoBold>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: 32,
            marginBottom: 32,
          }}
        >
          <Logo />
        </div>
      </S.Content>
      {/*
        <S.SocialLinks>
          <S.SocialText>
            Join us in the resistance workout revolution.
          </S.SocialText>

          <a href="https://www.facebook.com/MyFitProducts/" target="_blank">
            <Facebook style={{ marginRight: '12px' }} />
          </a>
          <a href="https://twitter.com/myfitproducts" target="_blank">
            <Twitter style={{ marginRight: '12px' }} />
          </a>
          <a href="https://www.instagram.com/myfitproducts/" target="_blank">
            <Instagram />
          </a>
        </S.SocialLinks>
        */}
    </div>
  )
}
