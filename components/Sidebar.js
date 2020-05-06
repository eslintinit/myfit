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

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import Cookie from 'js-cookie';

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
  color: #ffffff;
`

const MenuPoints = styled.div``

const Point = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  margin-bottom: 12px;
  ${(props) =>
    props.active &&
    `
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
const SafetyIcon = styled(Safety)`
  fill: gba(189, 189, 189, 0.35);
`

export default ({ setShowSidebar }) => {
  const { route } = useRouter()

  const homeActive = route === '/'
  const safetyActive = route === '/safety'
  const aboutUsActive = route === '/about_us'
  const contactUsActive = route === '/contact_us'
  const settingsActive = route === '/settings'
  const reviewActive = route === '/review'
  
   const GET_MY_NAME = gql`
    
     query {
       me {
      name
     }   
     }
    
`;

const router = useRouter();

const signOut = (e) => {
  e.preventDefault();
  Cookie.remove('token');
  router.push('/login')
};

const { error, data } = useQuery(GET_MY_NAME)

  return (
    <div style={{ height: '100vh', background: BLACK, width: 246 }}>
      <NavigationBar>
        <Close onClick={() => setShowSidebar(false)} />
      </NavigationBar>
      <OpenMenu>
        <Account>
          <img
            src="https://i.imgur.com/PtZghFA.png"
            style={{ width: '33%', marginBottom: '16px' }}
          />
          <Text>Hej,</Text>
           {data && data.me.name ? <Text>{data.me.name}</Text> : <Text>Error!</Text>}
        </Account>
        <MenuPoints>
          <Link href="/">
            <Point active={homeActive}>
              <Home fill={homeActive ? PRIMARY : 'white'} />
              <TextPoint>Home</TextPoint>
            </Point>
          </Link>
          <a
            href="https://www.instagram.com/p/B-A_SMJjy-s/?igshid=4h2e2xwn3qz3"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Point>
              <Shop />
              <TextPoint>Shop MyFit</TextPoint>
            </Point>
          </a>
          <Link href="/safety">
            <Point active={safetyActive}>
              <Safety fill={safetyActive ? PRIMARY : 'white'} />
              <TextPoint>Safety</TextPoint>
            </Point>
          </Link>
          <Link href="/about_us">
            <Point active={aboutUsActive}>
              <About fill={aboutUsActive ? PRIMARY : 'white'} />
              <TextPoint>About Us</TextPoint>
            </Point>
          </Link>
          <Link href="/contact_us">
            <Point active={contactUsActive}>
              <Contact fill={contactUsActive ? PRIMARY : 'white'} />
              <TextPoint>Contact Us</TextPoint>
            </Point>
          </Link>
          <Link href="/review">
            <Point active={reviewActive}>
              <Review fill={reviewActive ? PRIMARY : 'white'} />
              <TextPoint>Review</TextPoint>
            </Point>
          </Link>
          <Link href="/settings">
            <Point active={settingsActive}>
              <Settings fill={settingsActive ? PRIMARY : 'white'} />
              <TextPoint>Settings</TextPoint>
            </Point>
          </Link>
        </MenuPoints>
        <Logout>
          <Point>
            <SignOut />
            <TextPoint onClick ={(e) => signOut(e)}>Sign Out</TextPoint>
          </Point>
        </Logout>
      </OpenMenu>
    </div>
  )
}
