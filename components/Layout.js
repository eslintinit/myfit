import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Tabs from 'components/Tabs'

import * as S from 'styles/components/Layout'

export default ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { route } = useRouter()

  const showTabs =
    route === '/' || route === '/favorites' || route === '/combos'

  return (
    <S.Wrapper>
      <Sidebar show={showSidebar} close={() => setShowSidebar(false)} />
      <S.Page showSidebar={showSidebar}>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <S.Content>
          {showTabs && <Tabs />}
          <div style={{ marginLeft: showTabs ? 46 : 0, width: '100%' }}>
            {children}
          </div>
        </S.Content>
      </S.Page>
    </S.Wrapper>
  )
}
