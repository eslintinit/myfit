import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

import Logo from 'public/LogoWhite.svg'

import * as S from 'styles/pages/slash_screen'


export default ({ children }) => {

const router = useRouter()
const { route } = useRouter()

const cancelRedirect = 
route === '/wellcome_screen' ||
route === '/login' ||
route === '/sign_up'

const token = Cookie.get('token');

if (typeof window !== 'undefined') {
console.log("tut = " + token);
if (!token && !cancelRedirect ) {
 router.push('/wellcome_screen');
}
}


if (!token && !cancelRedirect) return(
    <S.Bg>
      <Logo />
    </S.Bg>
   )

if (token || cancelRedirect ) return (children)
  
}