import { useState } from 'react'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'
import NoSee from 'public/icons/NoSee.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'

import * as S from 'styles/pages/login'
import { GREY, BLACK } from 'styles/colors'


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
          <S.Caption>
            <S.TextBold>Wellcome back, Susie Little</S.TextBold>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <img src='https://i.imgur.com/AC7RyMh.png' />
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '8px' }}>
                <S.Text>Change Account</S.Text>
                <Arrow style={{ transform: 'rotate(270deg)', marginLeft: '4px' }}/>
              </div>
            </div>
          </S.Caption>
          <S.Text>Email</S.Text>
          <S.Email>
            <Email />
            <S.Input
              placeholder="myfit@gmailcom"
            />
          </S.Email>
          <S.Text>Password</S.Text>
          <S.Password>
            <Key />
            <S.Input
              placeholder="Input password"
              type="password"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <NoSee />
          </S.Password>
          <S.RedText>Forgot password?</S.RedText>
          <S.Login onClick={login} active={text !== ''}>
            Login
          </S.Login>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
