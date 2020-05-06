import { useState } from 'react';
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Cookie from 'js-cookie';

import { useRouter } from 'next/router'


import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'
import NoSee from 'public/icons/NoSee.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'

import * as S from 'styles/pages/login'
import { GREY, BLACK } from 'styles/colors'




export default () => {
  //const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password:$password){
      token
    }
  }
`;

  const [login] = useMutation(LOGIN_USER, {
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="myfit@gmailcom"
            />
          </S.Email>
          <S.Text>Password</S.Text>
          <S.Password>
            <Key />
            <S.Input
              placeholder="Input password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <NoSee />
          </S.Password>
          <S.RedText>Forgot password?</S.RedText>
          <S.Login onClick={ 
            (e) => {
            e.preventDefault();
            login({ variables:{ email, password } });
            }
            } active={email && password !== ''}>
            Login
          </S.Login>
        </S.InfoBlock>
      </S.Bg>
    </div>
  );
}
