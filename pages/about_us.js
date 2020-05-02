import { useState } from 'react'

import Instagram from 'public/icons/Instagram.svg'
import Facebook from 'public/icons/FacebookIcon.svg'
import Twitter from 'public/icons/Twitter.svg'

import * as S from 'styles/pages/about_us'

export default () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div style={{ marginTop: 24 }}>
      <S.Content>
        <S.ContentTitle>
          MyFit are a UK company looking to revolutionise the way we workout!
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
          - but they’re a lot cooler when they’ve been created and designed to
          allow you to replicate nearly all gym workouts. We’ve managed to
          create resistance from the comfort of your own home without
          compromising on your workout goals.{' '}
        </S.InfoNormal>
        <S.InfoBold>
          The MyFit app is your go-to for all resistance workouts created by our
          own experts!{' '}
        </S.InfoBold>
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
