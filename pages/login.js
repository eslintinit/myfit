import { useState } from 'react'

import { useMutation } from "@apollo/react-hooks";

import Cookie from 'js-cookie';

import { useRouter } from 'next/router'

import gql from 'graphql-tag'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'
import NoSee from 'public/icons/NoSee.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'

import * as S from 'styles/pages/login'
import { GREY, BLACK } from 'styles/colors'


export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorStyle, setErrorStyle] = useState(false)

  const router = useRouter()

  const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password:$password){
      token
    }
  }
`;

const [login, { error }] = useMutation(LOGIN_USER, {
  onCompleted({ login }) {
    console.log("Get token value = ", login.token);
    Cookie.set('token', login.token);
    router.push('/')
    
  }
  
});










  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back onClick={() => router.push('/wellcome_screen')} />
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
              type="email"        
              value={email}
              onChange={(e) =>{setErrorStyle(false); setEmail(e.target.value)}} 
              style={errorStyle && (email && password !== '') ? {color: 'red'} : null}             
            />
          </S.Email>
          <S.Text>Password</S.Text>
          <S.Password >
            <Key style={error ? {color: 'red'} : null} />
            <S.Input
              placeholder="Input password"
              type="password"
              value={password}
              onChange={(e) => {setErrorStyle(false); setPassword(e.target.value)}}
              style={errorStyle ? {color: 'red'} : null}
            />
            <NoSee />
          </S.Password >
          <S.RedText>Forgot password?</S.RedText>
          <S.Login onClick={ 
            (e) => {
            e.preventDefault();
            login({ variables:{ email, password } });
            if (error) setErrorStyle(true);
            }
            } active={email && password !== ''}>
            Login
          </S.Login>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
