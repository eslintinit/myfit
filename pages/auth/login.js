import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMutation } from '@apollo/react-hooks'

import Cookie from 'js-cookie'

import { useRouter } from 'next/router'

import gql from 'graphql-tag'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'
import EyeOpened from 'public/icons/EyeOpened.svg'
import EyeClosed from 'public/icons/NoSeeG.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'

import * as S from 'styles/pages/auth/login'
import { GREY, BLACK } from 'styles/colors'
import { route } from 'next/dist/next-server/server/router'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [errorStyle, setErrorStyle] = useState(false)

  const router = useRouter()

  const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token,
        user{
          gym
        }
      }
    }
  `

  const [login, { error, loading }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      console.log('Get token value = ', login.token)
      Cookie.set('token', login.token, { expires: 365 })
      if (login.user.gym === "" ) router.push('/auth/question')
      else router.push('/')
    },
  })

  

  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back onClick={() => router.push('/auth/welcome')} />
        </S.NavigationBar>
        <AnimatePresence>
          <S.InfoBlock
            initial={{ marginBottom: -431 }}
            animate={{ marginBottom: 0 }}
            exit={{ marginBottom: -431 }}
          >
            <S.Caption>
              <S.TextBold>Welcome back</S.TextBold>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                {/*
                <img src="https://i.imgur.com/AC7RyMh.png" />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '8px',
                  }}
                >
                  <S.Text>Change Account</S.Text>
                  <Arrow
                    style={{ transform: 'rotate(270deg)', marginLeft: '4px' }}
                  />
                </div>
                */}
              </div>
            </S.Caption>
            <S.Text
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Email {error && error.message !== 'GraphQL error: Invalid password' && <S.Error>No user found</S.Error>}
            </S.Text>
            <S.Email>
              <Email />
              <S.Input
                placeholder="myfit@gmailcom"
                type="email"
                value={email}
                onChange={(e) => {
                  setErrorStyle(false)
                  setEmail(e.target.value)
                }}
                style={
                  error && email && password !== '' ? { color: 'red' } : null
                }
              />
            </S.Email>
            <S.Text
             style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >Password {error && error.message === 'GraphQL error: Invalid password' && <S.Error>Invalid Password</S.Error>} </S.Text>
            <S.Password>
              <Key style={error ? { color: 'red' } : null} />
              <S.Input
                placeholder="Input password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setErrorStyle(false)
                  setPassword(e.target.value)
                }}
                style={errorStyle ? { color: 'red' } : null}
              />
              {showPassword ? (
                <EyeOpened onClick={() => setShowPassword(false)} />
              ) : (
                <EyeClosed onClick={() => setShowPassword(true)} />
              )}
            </S.Password>
            
            <S.RedText onClick={()=>{              
              router.push('/auth/resetpassword')
            }
            }>Forgot password?</S.RedText>
            
            <S.Login
              onClick={(e) => {
                e.preventDefault()
                if (!loading) login({ variables: { email, password } })
                if (error) setErrorStyle(true)
              }}
              active={email && password !== ''}
            >
              Login
            </S.Login>
          </S.InfoBlock>
        </AnimatePresence>
      </S.Bg>
    </div>
  )
}
