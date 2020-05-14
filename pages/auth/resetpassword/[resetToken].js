import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMutation } from '@apollo/react-hooks'

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
        
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const [errorStyle, setErrorStyle] = useState(false)

    const resetToken = router.query.resetToken










    return (
        <div>
          <S.Bg>
            <S.NavigationBar>
              
            </S.NavigationBar>
            <AnimatePresence>
              <S.InfoBlock
                initial={{ marginBottom: -431 }}
                animate={{ marginBottom: 0 }}
                exit={{ marginBottom: -431 }}
              >
                <S.Caption>
                  <S.TextBold>New Password</S.TextBold>
                </S.Caption>
                <S.Text
                 style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >Password {/*  error && <S.Error>Reset email expire</S.Error> */ }</S.Text>
            <S.Password>
              <Key />
              <S.Input
                placeholder="Input password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setErrorStyle(false)
                  setPassword(e.target.value)
                }}                
              />
              {showPassword ? (
                <EyeOpened onClick={() => setShowPassword(false)} />
              ) : (
                <EyeClosed onClick={() => setShowPassword(true)} />
              )}
            </S.Password>
                <S.Text
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  Repeat Password { errorStyle && <S.Error>Passwords don't match</S.Error> }
                </S.Text>
                <S.Email>
                  <Key />
                  <S.Input
                    placeholder="Repeat password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setErrorStyle(false) 
                      setConfirmPassword(e.target.value)
                    }}
                    onBlur={() => {
                        if (password !== confirmPassword) setErrorStyle(true)                        
                      }}
                     style={
                       errorStyle && (confirmPassword && password !== '' ) ? { color: 'red' } : null 
                    } 
                  />
                </S.Email>
                
                <S.Login
                  onClick={(e) => {
                    e.preventDefault()
                    
                  }}
                  active={(password === confirmPassword) && (password && confirmPassword !== '')}
                >
                  Set New Password
                </S.Login>
              </S.InfoBlock>
            </AnimatePresence>
          </S.Bg>
        </div>
      )
    }
    