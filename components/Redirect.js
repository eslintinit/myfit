import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

import { userName, userEmail } from './context'

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
    route === '/auth/onboarding'

 /*  const token = Cookie.get('token')

  if (typeof window !== 'undefined') {
     if (!token && !cancelRedirect) {
       router.push('/auth/onboarding')
     }
  } */

const [name, setName] = useState()
const [email, setEmail] = useState()

  const ME = gql`
  query {
    me {
      name,
      email
    }
  }
`
const { error, data } = useQuery(ME)

 if (!email && data && data.me.email && !name && data.me.name) { 
  console.log(data.me.name)
  setName(data.me.name) 
  setEmail(data.me.email) 

  
} 
else if (error && !cancelRedirect) {
  /* Cookie.remove('token')
  router.push('/auth/onboarding') */
}
  console.log('context = ', name, ' ', email)
  //else return (<S.Bg><Logo /></S.Bg>)

  return (
    <userName.Provider value={{ name, setName }}>
      <userEmail.Provider value={{ email, setEmail }}>
      {children}
      </userEmail.Provider>
    </userName.Provider>
    
    )
}
