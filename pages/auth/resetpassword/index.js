
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMutation } from '@apollo/react-hooks'

import { validate } from 'email-validator'

import { useRouter } from 'next/router'

import gql from 'graphql-tag'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'
import EyeOpened from 'public/icons/EyeOpened.svg'
import EyeClosed from 'public/icons/NoSeeG.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'

import * as S from 'styles/pages/auth/login'

export default () => {
    const router = useRouter()
    const [email, setEmail] = useState('')

    const [errorStyle, setErrorStyle] = useState(false)

    const REQUEST_RESET = gql`
    mutation requestReset($email: String!) {
      requestReset(email: $email) {        
          name
          email        
      }
    }
  `

  const [ requestReset, {  error, loading }] = useMutation(REQUEST_RESET, {
    onCompleted({ requestReset }) {
      alert(`Dear ${requestReset.name}! Please check your email: ${requestReset.email}`)
    }
  })











    return (
        <div>
          <S.Bg>
            <S.NavigationBar>
              <Back onClick={() => router.push('/auth/login')} />
            </S.NavigationBar>
            <AnimatePresence>
              <S.InfoBlock
                initial={{ marginBottom: -431 }}
                animate={{ marginBottom: 0 }}
                exit={{ marginBottom: -431 }}
              >
                <S.Caption>
                  <S.TextBold>Reset Password</S.TextBold>
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
                  Email { error && <S.Error>Something is wrong</S.Error>} { errorStyle && <S.Error>Invalid Email</S.Error>}
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
                    onBlur={() => {
                      if (!validate(email) && email !== '') setErrorStyle(true)
                      else setErrorStyle(false)
                    }}
                     style={
                       errorStyle && email !== '' ? { color: 'red' } : null 
                    } 
                  />
                </S.Email>
                <S.Login
                  onClick={(e) => {
                    e.preventDefault()
                     if (!loading) requestReset({ variables: { email } })
                   /* if (error) setErrorStyle(true) */
                  }}
                  active={ validate (email) }
                >
                  Send reset email
                </S.Login>
              </S.InfoBlock>
            </AnimatePresence>
          </S.Bg>
        </div>
      )
    }
    