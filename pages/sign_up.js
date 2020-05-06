import { useState } from 'react'
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Cookie from 'js-cookie';

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password:$password, name:$name){
      token
    }
  }
`;

  /*
  const signUp = () => {
    //alert('Thanks. We will contact you shortly')
  }
  */

  const [signUp] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      console.log("Get token value = ", signup.token);
      Cookie.set('token', signup.token);
    }
  });

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </S.Field>
          <S.Text>Email</S.Text>
          <S.Field>
            <Email />
            <S.Input
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Field>
          <S.Text>Password</S.Text>
          <S.Field>
            <Key />
            <S.Input
              placeholder="Create password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <NoSee />
          </S.Field>
          <S.Text>Authentication Code</S.Text>
          <S.Field>
            <Lock />
            <S.Input
              placeholder="Enter Code"
            />
            <Info />
          </S.Field>
          <S.SignUp onClick={ (e) => {
            e.preventDefault();
            signUp({variables: {name, email, password }});

          }
          } active={password && email && name !== ''}>
            Create Account
          </S.SignUp>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
