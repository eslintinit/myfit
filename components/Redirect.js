import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

import { userName, userEmail, userFavorites } from './context'

import { useState } from 'react'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Logo from 'public/LogoWhite.svg'

import * as S from 'styles/pages/auth/slash_screen'





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

 /*  const token = Cookie.get('token')

  if (typeof window !== 'undefined') {
     if (!token && !cancelRedirect) {
       router.push('/auth/onboarding')
     }
  } */

const [name, setName] = useState()
const [email, setEmail] = useState()
const [favorites, setFavorites] = useState()

  const ME = gql`
  query {
    me {
      name,
      email,
      favorites     
    }
  }
`
const { error, data } = useQuery(ME, {
  onCompleted(data){
  setName(data.me.name) 
  setEmail(data.me.email) 
  setFavorites(data.me.favorites)
  Cookie.set('favorites', data.me.favorites)
  }
})

  if (error && !cancelRedirect) {
   Cookie.remove('token')
   Cookie.remove('favorites')
  router.push('/auth/onboarding') 
}
  console.log('context = ', name, ' ', email)
  //else return (<S.Bg><Logo /></S.Bg>)

  return (
   <userFavorites.Provider value={{ favorites, setFavorites }}> 
    <userName.Provider value={{ name, setName }}>
      <userEmail.Provider value={{ email, setEmail }}>
      {children}
      </userEmail.Provider>
    </userName.Provider>
    </userFavorites.Provider> 
    )
}
