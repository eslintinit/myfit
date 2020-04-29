import { useState } from 'react'

import Back from 'public/icons/Back.svg'
import NoSee from 'public/icons/NoSeeG.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'
import Info from 'public/icons/Info.svg'
import Lock from 'public/icons/Lock.svg'
import Photo from 'public/icons/Photo.svg'
import Profile from 'public/icons/Profile.svg'

import * as S from 'styles/pages/sign_up'


export default () => {
  const [text, setText] = useState('')

  const login = () => {
    alert('Thanks. We will contact you shortly')
  }

  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back />
        </S.NavigationBar>
        <S.InfoBlock>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '16px'}}>
          <S.Line></S.Line>
          <S.Line></S.Line>
          <S.Line></S.Line>
          <S.Line></S.Line>
        </div>
          <S.Caption>
            <S.TextBold>New Account</S.TextBold>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Photo style={{ marginBottom: '8px'}}/>
              <S.Text>Upload picture</S.Text>
            </div>
          </S.Caption>
          <S.Text>Full name</S.Text>
          <S.Field>
            <Profile />
            <S.Input
              placeholder="Enter your name"
            />
          </S.Field>
          <S.Text>Email</S.Text>
          <S.Field>
            <Email />
            <S.Input
              placeholder="Enter email"
            />
          </S.Field>
          <S.Text>Password</S.Text>
          <S.Field>
            <Key />
            <S.Input
              placeholder="Create password"
              type="password"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <NoSee />
          </S.Field>
          <S.Text>Authentication Cod</S.Text>
          <S.Field>
            <Lock />
            <S.Input
              placeholder="Enter Code"
            />
            <Info />
          </S.Field>
          <S.Login onClick={login} active={text !== ''}>
            Create Account
          </S.Login>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
