import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

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

  const token = Cookie.get('token')

  if (typeof window !== 'undefined') {
    // if (!token && !cancelRedirect) {
    //   router.push('/auth/onboarding')
    // }
  }

  //else return (<S.Bg><Logo /></S.Bg>)

  return children
}