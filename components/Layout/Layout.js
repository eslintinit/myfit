import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Tabs from 'components/Tabs'
import Cookie from 'js-cookie';

import Logo from 'public/Logo.svg'

import * as S from './Layout.styled'

export default ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const route  = useRouter()

  const token = Cookie.get('token');
  
  if (typeof window !== 'undefined') {
  console.log("tut =" + token);
  if (!token) {
    route.push('/login');
  }
  
}

  const showTabs =
    route === '/' || route === '/favorites' || route === '/combos'

  return ( token ?
    <S.Wrapper>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      <S.Page showSidebar={showSidebar}>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <S.Content>
          {showTabs && <Tabs />}
          {children}
        </S.Content>
      </S.Page>
    </S.Wrapper> : <Logo style={{position:'absolute', left:'50%', top:'50%'}} />
  )
}
