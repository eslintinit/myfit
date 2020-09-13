import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMutation } from '@apollo/react-hooks'
import Loader from 'react-loader-spinner'
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
  const [errorInvalidCode, setErrorInvalidCode] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const [termsAgreed, setTermsAgreed] = useState(false)

  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const router = useRouter()

  const SIGNUP_USER = gql`
    mutation signup($email: String!, $password: String!, $name: String) {
      signup(email: $email, password: $password, name: $name) {
        token
      }
    }
  `

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      console.log('Get token value = ', signup.token)
      Cookie.set('token', signup.token, { expires: 365 })
      router.push('/app/auth/question')
    },
  })

  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back onClick={() => router.push('/app/auth/welcome')} />
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
            <div>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.value)}
                style={{ marginRight: 8, marginBottom: 24 }}
              />
              <label htmlFor="terms">
                I agree to the
                <a
                  href="/policy"
                  target="_blank"
                  style={{
                    color: '#fa4504',
                    marginLeft: '4px',
                    textDecoration: 'underline',
                  }}
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <S.SignUp
              onClick={async (e) => {
                if (password && validate(email) && termsAgreed) {
                  e.preventDefault()
                  if (!loading) {
                    signUp({ variables: { name, email, password } })
                  }
                }
              }}
              active={password && validate(email) && termsAgreed}
            >
              {loading ? (
                <Loader
                  type="Oval"
                  color="white"
                  height={24}
                  width={24}
                  style={{ marginTop: -3, marginBottom: -3 }}
                />
              ) : (
                'Create Account'
              )}
            </S.SignUp>
          </S.InfoBlock>
        </AnimatePresence>
      </S.Bg>
    </div>
  )
}
