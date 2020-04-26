import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Tabs from 'components/Tabs'

import * as S from './Layout.styled'

export default ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { route } = useRouter()

  const showTabs =
    route === '/' || route === '/favorites' || route === '/combos'

  return (
    <S.Wrapper>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      <S.Page showSidebar={showSidebar}>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <S.Content>
          {showTabs && <Tabs />}
          {children}
        </S.Content>
      </S.Page>
    </S.Wrapper>
  )
}
