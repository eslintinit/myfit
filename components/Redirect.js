import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import SplashScreen from './slash_screen'

import { userName, userEmail, userFavorites } from './context'

import { useState, useEffect } from 'react'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Logo from 'public/LogoWhite.svg'

import * as S from 'styles/pages/auth/slash_screen'

import { graphql } from 'graphql'
import sentry from '../lib/sentry'

const { Sentry, captureException } = sentry()

export default ({ children }) => {
  const router = useRouter()
  const { route } = useRouter()

  const cancelRedirect =
    route === '/auth/welcome' ||
    route === '/auth/login' ||
    route === '/auth/signup' ||
    route === '/auth/onboarding' ||
    route === '/auth/resetpassword' ||
    route === '/auth/resetpassword/[resetToken]'

  const token = Cookie.get('token')

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [favorites, setFavorites] = useState()

  const ME = gql`
    query {
      me {
        name
        email
        favorites
      }
    }
  `

  const { error, data, loading } = useQuery(ME, {
    context: { headers: { Authorization: 'Bearer ' + token } },
    onCompleted(data) {
      setName(data.me.name)
      setEmail(data.me.email)
      setFavorites(data.me.favorites)
      Cookie.set('token', token, { expires: 365 })
    },
    onError(error) {
      captureException(error)
      if (error && !cancelRedirect) {
        Cookie.remove('token')
        router.push('/auth/onboarding')
      }
    },
  })

  // if (error && !cancelRedirect) {
  // Cookie.remove('token')
  // router.push('/auth/onboarding')
  // }

  return (
    <userFavorites.Provider value={{ favorites, setFavorites }}>
      <userName.Provider value={{ name, setName }}>
        <userEmail.Provider value={{ email, setEmail }}>
          {loading ? <SplashScreen /> : children}
        </userEmail.Provider>
      </userName.Provider>
    </userFavorites.Provider>
  )
}
