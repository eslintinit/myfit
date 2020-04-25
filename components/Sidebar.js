import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Close from 'public/icons/Close.svg'
import Home from 'public/icons/Home.svg'
import Shop from 'public/icons/Shop.svg'
import Safety from 'public/icons/Safety.svg'
import About from 'public/icons/AboutUs.svg'
import Contact from 'public/icons/Contact.svg'
import Review from 'public/icons/Review.svg'
import Settings from 'public/icons/Settings.svg'
import SignOut from 'public/icons/SignOut.svg'
import { BLACK, PRIMARY } from 'styles/colors'

const NavigationBar = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  margin: 16px 16px 24px 16px;
`

const OpenMenu = styled.div`
  margin-left: 8px;
  margin-right: 28px;
  width: 154px;
`

const Account = styled.div`
  margin-left: 8px;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`

const MenuPoints = styled.div`
`

const Point = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 12px;
  ${props => props.active && `
    background: rgba(250, 69, 4, 0.2);
    border-radius: 8px;
    color: ${PRIMARY};
  `}
`

const TextPoint = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-left: 12px;
`


const Logout = styled.div`
  border-top: 1px solid rgba(189, 189, 189, 0.35);
  margin-top: 56px;
  padding-top: 28px;
`

export default ({ setShowSidebar }) => {
  const { route } = useRouter()
  console.log(route)


  return (
    <div style={{ height: '100vh', background: BLACK, width: 246 }}>
      <NavigationBar>
        <Close onClick={() => setShowSidebar(false)} />
      </NavigationBar>
      <OpenMenu>
        <Account>
          <Text>Hej,</Text>
          <Text>Susie Little</Text>
        </Account>
        <MenuPoints>
          <Point>
            <Home />
            <TextPoint>Home</TextPoint>
          </Point>
          <Point>
            <Shop />
            <TextPoint>Shop MyFit</TextPoint>
          </Point>
          <Link href="/safety">
            <Point active={route === '/safety'}>
              <Safety />
              <TextPoint>Safety</TextPoint>
            </Point>
          </Link>
          <Link href="/about_us">
            <Point active={route === '/about_us'}>
                <About />
                <TextPoint>About Us</TextPoint>
            </Point>
          </Link>
          <Link href="/contact_us">
            <Point active={route === '/contact_us'}>
              <Contact />
              <TextPoint>Contact Us</TextPoint>
            </Point>
          </Link>
          <Point>
            <Review />
            <TextPoint>Review</TextPoint>
          </Point>
          <Link href="/settings">
            <Point active={route === "/settings"}>
              <Settings />
              <TextPoint>Settings</TextPoint>
            </Point>
          </Link>
        </MenuPoints>
        <Logout>
          <Point>
            <SignOut />
            <TextPoint>Sign Out</TextPoint>
          </Point>
        </Logout>
      </OpenMenu>
    </div>
  )
}
