import Header from 'components/Header'
import Navigation from 'components/Navigation'
import Meta from 'components/Meta'

import * as S from './Layout.styled'

const Layout = ({ children }) => (
  <S.Container>
    <Meta />
    <Header />
    <S.Content>
      <Navigation />
      {children}
    </S.Content>
  </S.Container>
)

export default Layout
