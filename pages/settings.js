import Sidebar from 'components/Sidebar'
import { useState } from 'react'

import Dashboard from 'public/icons/Dashboard.svg'
import Notification from 'public/icons/Notification.svg'
import Key from 'public/icons/Key.svg'

import * as S from 'styles/pages/settings'

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      marginTop: 24,
    }}
  >
    {/*
      <S.CoverImage>
        <S.TextBold>Your cover image</S.TextBold>
      </S.CoverImage>
      <S.PersonalInfo>
        <S.Text>Full Name</S.Text>
        <S.Text>Email</S.Text>
      </S.PersonalInfo>
      */}
    <S.Notifications>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingBottom: '24px',
        }}
      >
        <Notification style={{ marginRight: '16px' }} />
        <S.TextBold>Send me push notification</S.TextBold>
      </div>
      {/*
        <S.Text>About new video content</S.Text>
        <S.Text>About new product</S.Text>
        <S.Text>MyFit Updates</S.Text>
      */}
    </S.Notifications>
    <S.ChangePassword>
      <Key style={{ marginRight: '16px' }} />
      <S.TextBold>Change password</S.TextBold>
    </S.ChangePassword>
  </div>
)
