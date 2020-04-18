import Logo from 'public/Logo.svg'
import Menu from 'public/icons/Dashboard.svg'
import Notifications from 'public/icons/Notify.svg'

import * as S from './Header.styled'

const Header = () => {
  return (
    <S.Header>
      <Menu />
      <Logo />
      <Notifications />
    </S.Header>
  )
}

export default Header
