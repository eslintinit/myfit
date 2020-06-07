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
  const [errorInvalidCode, setErrorInvalidCode] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const authcodes = [
    { id: 1, authCode: 'E98-34A' },
    { id: 2, authCode: 'E9F-C8D' },
    { id: 3, authCode: 'DB7-49B' },
    { id: 4, authCode: '80D-E45' },
    { id: 5, authCode: 'DEE-B79' },
    { id: 6, authCode: 'F3C-F08' },
    { id: 7, authCode: 'D01-961' },
    { id: 8, authCode: '5DD-6BE' },
    { id: 9, authCode: 'D63-F8A' },
    { id: 10, authCode: '976-945' },
    { id: 11, authCode: '0F4-E67' },
    { id: 12, authCode: 'E42-AB6' },
    { id: 13, authCode: '4E8-E57' },
    { id: 14, authCode: '5EA-245' },
    { id: 15, authCode: '56F-759' },
    { id: 16, authCode: '513-7A3' },
    { id: 17, authCode: '8FA-D06' },
    { id: 18, authCode: '9C8-922' },
    { id: 19, authCode: '768-AD2' },
    { id: 20, authCode: '139-128' },
    { id: 21, authCode: 'F7F-0AA' },
    { id: 22, authCode: '5C4-B75' },
    { id: 23, authCode: 'AC5-20E' },
    { id: 24, authCode: 'EB8-FD7' },
    { id: 25, authCode: '64A-16A' },
    { id: 26, authCode: '646-36C' },
    { id: 27, authCode: 'B74-3B3' },
    { id: 28, authCode: 'BDA-3F7' },
    { id: 29, authCode: 'DF6-FB7' },
    { id: 30, authCode: '174-44B' },
    { id: 31, authCode: '9A4-2D6' },
    { id: 32, authCode: 'FCC-294' },
    { id: 33, authCode: '6E1-3B6' },
    { id: 34, authCode: '851-386' },
    { id: 35, authCode: '9C4-873' },
    { id: 36, authCode: 'D79-6F0' },
    { id: 37, authCode: '1DA-958' },
    { id: 38, authCode: '3D7-FCC' },
    { id: 39, authCode: 'D76-8D7' },
    { id: 40, authCode: 'E44-980' },
    { id: 41, authCode: '750-2B9' },
    { id: 42, authCode: 'E2F-190' },
    { id: 43, authCode: 'C50-26D' },
    { id: 44, authCode: 'EE1-F87' },
    { id: 45, authCode: '308-DF3' },
    { id: 46, authCode: '7FB-7A3' },
    { id: 47, authCode: 'C84-9C9' },
    { id: 48, authCode: '62B-BDE' },
    { id: 49, authCode: '912-8F0' },
    { id: 50, authCode: 'BCA-8A2' },
    { id: 51, authCode: '08A-1FC' },
    { id: 52, authCode: '857-EC5' },
    { id: 53, authCode: 'E86-1D9' },
    { id: 54, authCode: '43B-EB5' },
    { id: 55, authCode: 'F9E-BCA' },
    { id: 56, authCode: 'B77-D42' },
    { id: 57, authCode: '0DF-C1F' },
    { id: 58, authCode: '1F1-53C' },
    { id: 59, authCode: 'E61-3D3' },
    { id: 60, authCode: '98A-403' },
    { id: 61, authCode: 'A6B-DE3' },
    { id: 62, authCode: '21E-B8F' },
    { id: 63, authCode: '792-515' },
    { id: 64, authCode: '107-81B' },
    { id: 65, authCode: '447-9CE' },
    { id: 66, authCode: 'E03-B7B' },
    { id: 67, authCode: 'CC2-25A' },
    { id: 68, authCode: 'EC3-B4D' },
    { id: 69, authCode: '559-EC9' },
    { id: 70, authCode: 'B79-963' },
    { id: 71, authCode: 'DB6-7E2' },
    { id: 72, authCode: '1E6-FE2' },
    { id: 73, authCode: 'B66-956' },
    { id: 74, authCode: '255-B73' },
    { id: 75, authCode: 'C11-180' },
    { id: 76, authCode: '2FB-C6C' },
    { id: 77, authCode: '418-955' },
    { id: 78, authCode: 'D74-59E' },
    { id: 79, authCode: '9D5-7B5' },
    { id: 80, authCode: '77B-833' },
    { id: 81, authCode: '218-57E' },
    { id: 82, authCode: '29C-5E3' },
    { id: 83, authCode: '876-1F5' },
    { id: 84, authCode: 'DEE-28C' },
    { id: 85, authCode: 'A8C-259' },
    { id: 86, authCode: 'BC8-EB3' },
    { id: 87, authCode: 'CB1-C61' },
    { id: 88, authCode: '94E-9F6' },
    { id: 89, authCode: '466-8A7' },
    { id: 90, authCode: '94D-6A0' },
    { id: 91, authCode: 'F93-7E6' },
    { id: 92, authCode: 'E0C-0C6' },
    { id: 93, authCode: 'FC9-EA9' },
    { id: 94, authCode: '0DC-AAF' },
    { id: 95, authCode: 'E58-BAF' },
    { id: 96, authCode: '611-816' },
    { id: 97, authCode: '8FB-6C5' },
    { id: 98, authCode: '3DA-6CB' },
    { id: 99, authCode: '566-054' },
    { id: 100, authCode: 'D20-76A' }    
  ]

  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorAuthCode, setErrorAuthCode] = useState(false)

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
            >Authentication Code {/* error && error.message === "GraphQL error: Authorization code is invalid" */ errorInvalidCode && <S.Error>Invalid Code</S.Error>}
            </S.Text>
            <S.Field>
              <Lock />
              <S.Input
                placeholder="Enter Code"
                value={authCode}
                onChange={(e) => {handleCodeChange(e)}}
                onBlur={() => {
                  if (authCode !== '' && authCode.length !== 7) {
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
              onClick={async (e) => {
                if (password && validate(email) && authCode.length === 7){
                  e.preventDefault()
                  if (!loading) {                    
                    if (authcodes.find(rec => rec.authCode === authCode) !== undefined) signUp({ variables: { name, email, password } })
                      else setErrorInvalidCode(true)
                  }
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
