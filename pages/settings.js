import Sidebar from 'components/Sidebar'
import { useState } from 'react'

import Dashboard from 'public/icons/Dashboard.svg'
import Notification from 'public/icons/Notification.svg'
import Key from 'public/icons/KeyRed.svg'
import Arrow from 'public/icons/ArrowRight.svg'
import Profile from 'public/icons/Profile.svg'
import Email from 'public/icons/Email.svg'
import Photo from 'public/icons/PhotoRed.svg'

import * as S from 'styles/pages/settings'

export default () => (
  <S.Content>
    <S.CoverImage>
      <S.TextBold>Your cover image</S.TextBold>
      <S.Info>
        <img src='https://i.imgur.com/7wnzfta.png' />
        <Photo />
        <p>Change picture</p>
      </S.Info>
    </S.CoverImage>
    <S.Box>
      <S.Text>Full Name</S.Text>
      <S.Info>
        <Profile />
        <S.UserText>Susie Little</S.UserText>
        <Arrow />
      </S.Info>
      <S.Text>Email</S.Text>
      <S.Info>
        <Email />
        <S.UserText>myfit@gmail.com</S.UserText>
        <Arrow />
      </S.Info>
    </S.Box>
    <S.Box>
      <S.Info>
        <Notification />
        <S.TextBold>Send me push notification</S.TextBold>
      </S.Info>
      <S.Info>
        <S.Text>About new video content</S.Text>
        <S.Switcher>
          <S.SwitcherBg></S.SwitcherBg>
          <S.Ellipse></S.Ellipse>
        </S.Switcher>
      </S.Info>
      <S.Info>
        <S.Text>About new product</S.Text>
        <S.Switcher>
          <S.SwitcherBg></S.SwitcherBg>
          <S.Ellipse></S.Ellipse>
        </S.Switcher>
      </S.Info>
      <S.Info>
        <S.Text>MyFit Updates</S.Text>
        <S.Switcher>
          <S.SwitcherBg></S.SwitcherBg>
          <S.Ellipse></S.Ellipse>
        </S.Switcher>
      </S.Info>
    </S.Box>
    <S.Box>
      <S.Info>
        <Key />
        <S.TextBold>Change password</S.TextBold>
        <Arrow />
      </S.Info>
    </S.Box>
  </S.Content>
)
