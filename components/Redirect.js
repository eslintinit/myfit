import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import SplashScreen from './slash_screen'

import { userName, userEmail, userFavorites } from './context'

import { useState, useEffect } from 'react'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

/* 
import Logo from 'public/LogoWhite.svg'

import * as S from 'styles/pages/auth/slash_screen'

import { graphql } from 'graphql' */

export default ({ children }) => {
  const router = useRouter()
  const { route } = useRouter()

  const cancelRedirect =
    route === '/app/auth/welcome' ||
    route === '/app/auth/login' ||
    route === '/app/auth/signup' ||
    route === '/app/auth/onboarding' ||
    route === '/app/auth/resetpassword' ||
    route === '/app/auth/resetpassword/[resetToken]'

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
      if (error && !cancelRedirect) {
        Cookie.remove('token')
        router.push('/app/auth/onboarding')
      }
    },
  })

  // if (!token) {
  // Cookie.remove('token')
  // router.push('/app/auth/onboarding')
  // }//

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
