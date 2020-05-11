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
      <S.TextImage>Your cover image</S.TextImage>
      <S.InfoImage>
        <img src='https://i.imgur.com/7wnzfta.png' />
        <S.Upload>
        <Photo />
        <S.PictureText>Change picture</S.PictureText>
        </S.Upload>
      </S.InfoImage>
    </S.CoverImage>
    <S.Box>
      <S.TextPersonal>Full Name</S.TextPersonal>
      <S.InfoName>
        <Profile />
        <S.UserText>Susie Little</S.UserText>
        <Arrow />
      </S.InfoName>
      <S.TextPersonal>Email</S.TextPersonal>
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
      <S.InfoNotification>
        <S.Text>About new video content</S.Text>
        <S.Switcher>
          <S.SwitcherBg></S.SwitcherBg>
          <S.Ellipse></S.Ellipse>
        </S.Switcher>
      </S.InfoNotification>
      <S.InfoNotification>
        <S.Text>About new product</S.Text>
        <S.Switcher>
          <S.SwitcherBg></S.SwitcherBg>
          <S.Ellipse></S.Ellipse>
        </S.Switcher>
      </S.InfoNotification>
      <S.InfoNotification>
        <S.Text>MyFit Updates</S.Text>
        <S.Switcher>
          <S.SwitcherBg></S.SwitcherBg>
          <S.Ellipse></S.Ellipse>
        </S.Switcher>
      </S.InfoNotification>
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
