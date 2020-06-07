import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { validate } from 'email-validator'

import Cookie from 'js-cookie'

import { useRouter } from 'next/router'

import Back, { toUpperCase } from 'public/icons/Back.svg'
import EyeOpened from 'public/icons/EyeOpened.svg'
import EyeClosed from 'public/icons/NoSeeG.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'
import Info from 'public/icons/Info.svg'
import Lock from 'public/icons/Lock.svg'
import Photo from 'public/icons/Photo.svg'
import Profile from 'public/icons/Profile.svg'

import * as S from 'styles/pages/auth/signup'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authCode, setAuthCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorAuthCode, setErrorAuthCode] = useState(false)

  const router = useRouter()

  const SIGNUP_USER = gql`
    mutation signup($email: String!, $password: String!, $name: String!, $authCode: String!) {
      signup(email: $email, password: $password, name: $name, authCode: $authCode) {
        token
      }
    }
  `

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      console.log('Get token value = ', signup.token)
      Cookie.set('token', signup.token, { expires: 365 })
      router.push('/auth/question')
      
    },
  })

  console.log('error here ==== ', JSON.stringify(error))

  const handleCodeChange = (e) =>{
    setErrorAuthCode(false)
    //validate authCode format (for better UX)
    let val = e.target.value.toUpperCase();
    if (val.length === 4 && authCode.length === 5) setAuthCode(val.slice(0,-1))
    else if (val.length === 4 && authCode.length === 3) setAuthCode(val.slice(0,-1) + "-" + val.slice(-1))
    
    else if (val.length <= 7) {
      setAuthCode(val)
    }
  }



  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back onClick={() => router.push('/auth/welcome')} />
        </S.NavigationBar>
        <AnimatePresence>
          <S.InfoBlock
            initial={{ marginBottom: -608 }}
            animate={{ marginBottom: 0 }}
            exit={{ marginBottom: -608 }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '16px',
              }}
            >
              <S.Line active></S.Line>
              <S.Line></S.Line>
              <S.Line></S.Line>
              <S.Line></S.Line>
            </div>
            <S.Caption>
              <S.TextBold>New Account</S.TextBold>
              {/*
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <Photo style={{ marginBottom: '8px' }} />
                <S.Text>Upload picture</S.Text>
              </div>
              */}
            </S.Caption>
            <S.Text
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Full name {errorName && <S.Error>Invalid Name</S.Error>}
            </S.Text>
            <S.Field>
              <Profile />
              <S.Input
                placeholder="Enter your name"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={errorName ? { color: 'red' } : null}
                onBlur={() => {
                  // if (!regName.test(name) && name !== '') setErrorName(true)
                  // else setErrorName(false)
                }}
              />
            </S.Field>
            <S.Text
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Email {errorEmail && <S.Error>Invalid Email</S.Error>}
            </S.Text>
            <S.Field>
              <Email />
              <S.Input
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                onBlur={() => {
                  if (!validate(email) && email !== '') setErrorEmail(true)
                  else setErrorEmail(false)
                }}
                style={errorEmail ? { color: 'red' } : null}
              />
            </S.Field>
            <S.Text>Password</S.Text>
            <S.Field>
              <Key />
              <S.Input
                placeholder="Create password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <EyeOpened onClick={() => setShowPassword(false)} />
              ) : (
                <EyeClosed onClick={() => setShowPassword(true)} />
              )}
            </S.Field>
            <S.Text
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >Authentication Code {error && error.message === "GraphQL error: Authorization code is invalid" && <S.Error>Invalid Code</S.Error>}
            </S.Text>
            <S.Field>
              <Lock />
              <S.Input
                placeholder="Enter Code"
                value={authCode}
                onChange={(e) => {handleCodeChange(e)}}
                onBlur={() => {
                  if (authCode !== '' && authCode.length !== 14) {
                    setErrorAuthCode(true)
                  } else {
                    setErrorAuthCode(false)
                  }
                }}
                style={errorAuthCode ? { color: 'red' } : null}
              />
              <Info onClick={() => setShowTooltip(!showTooltip)} />
              {showTooltip && (
                <S.Tooltip>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </S.Tooltip>
              )}
            </S.Field>
            <S.SignUp
              onClick={(e) =>  {
                if (password && validate(email) && authCode.length === 14){
                  e.preventDefault()
                  if (!loading) signUp({ variables: { name, email, password, authCode } })
                }
              }}
              active={password && validate(email) && authCode.length === 7}
            >
              Create Account
            </S.SignUp>
          </S.InfoBlock>
        </AnimatePresence>
      </S.Bg>
    </div>
  )
}
