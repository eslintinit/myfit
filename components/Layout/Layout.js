import Header from 'components/Header'
import Navigation from 'components/Navigation'

import * as S from './Layout.styled'

export default ({ children }) => (
  <S.Container>
    <Header />
    <S.Content>
      <Navigation />
      {children}
    </S.Content>
  </S.Container>
)
