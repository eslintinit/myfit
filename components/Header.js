import { useRouter } from 'next/router'
import Link from 'next/link'
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
      <S.MenuWrapper show={!showSidebar}>
        <Menu onClick={() => setShowSidebar(true)} />
      </S.MenuWrapper>
      {showLogo ? (
        <Logo />
      ) : (
        <S.HeaderTitle>{routeTitleMap[route]}</S.HeaderTitle>
      )}
      {showLogo ? (
        <Link href="/notifications">
          <Notifications />
        </Link>
      ) : (
        <div style={{ width: 27 }} />
      )}
    </S.Header>
  )
}

export default Header
