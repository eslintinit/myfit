import { useRouter } from 'next/router'
import Logo from 'public/Logo.svg'
import Menu from 'public/icons/Dashboard.svg'
import Notifications from 'public/icons/Notify.svg'

import * as S from './Header.styled'

const routeTitleMap = {
  '/safety': 'Safety',
  '/about_us': 'About Us',
  '/contact_us': 'Contact Us',
  '/review': 'Review',
  '/settings': 'Settings',
}

const Header = ({ showSidebar, setShowSidebar }) => {
  const { route } = useRouter()
  const isHome = route === '/'

  return (
    <S.Header>
      {showSidebar ? <div /> : <Menu onClick={() => setShowSidebar(true)} />}
      {isHome ? (
        <Logo />
      ) : (
        <S.HeaderTitle>{routeTitleMap[route]}</S.HeaderTitle>
      )}
      {isHome ? <Notifications /> : <div style={{ width: 27 }} />}
    </S.Header>
  )
}

export default Header
