import { useRouter } from 'next/router'
import Logo from 'public/Logo.svg'
import Menu from 'public/icons/Dashboard.svg'
import Notifications from 'public/icons/Notify.svg'

import * as S from 'styles/components/Header'

const routeTitleMap = {
  '/safety': 'Safety',
  '/about_us': 'About Us',
  '/contact_us': 'Contact Us',
  '/review': 'Review',
  '/settings': 'Settings',
}

const Header = ({ showSidebar, setShowSidebar }) => {
  const { route } = useRouter()
  const showLogo =
    route === '/' || route === '/favorites' || route === '/combos'

  return (
    <S.Header>
      {showSidebar ? (
        <div style={{ width: 27 }} />
      ) : (
        <Menu onClick={() => setShowSidebar(true)} />
      )}
      {showLogo ? (
        <Logo />
      ) : (
        <S.HeaderTitle>{routeTitleMap[route]}</S.HeaderTitle>
      )}
      {showLogo ? <Notifications /> : <div style={{ width: 27 }} />}
    </S.Header>
  )
}

export default Header
