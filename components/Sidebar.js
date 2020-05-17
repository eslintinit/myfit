import { useRef } from 'react'
import { useRouter } from 'next/router'
import { useTransition, useChain, animated, config } from 'react-spring'
import { Swipeable } from 'react-swipeable'
import Link from 'next/link'

import { useState } from 'react'

import Close from 'public/icons/Close.svg'
import Home from 'public/icons/Home.svg'
import Shop from 'public/icons/Shop.svg'
import Safety from 'public/icons/Safety.svg'
import About from 'public/icons/AboutUs.svg'
import Contact from 'public/icons/Contact.svg'
import Review from 'public/icons/Review.svg'
import Settings from 'public/icons/Settings.svg'
import SignOut from 'public/icons/SignOut.svg'

import * as S from 'styles/components/Sidebar'
import { PRIMARY } from 'styles/colors'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Cookie from 'js-cookie'

export default ({ show, close }) => {
  const { route } = useRouter()
  const router = useRouter()
  const sidebarRef = useRef()

  const transition = useTransition(show, null, {
    from: {
      transform: 'translateX(-100%)',
    },
    enter: {
      transform: 'translateX(0)',
    },
    leave: {
      transform: 'translateY(-100%)',
    },
    unique: true,
    config: config.stiff,
    ref: sidebarRef,
    // onStart: onAnimationStart,
    // onRest: onAnimationEnd
  })
  const [name, setName] = useState()

  const GET_MY_NAME = gql`
    query {
      me {
        name
      }
    }
  `

  const signOut = (e) => {
    e.preventDefault()
    Cookie.remove('token')
    router.push('/auth/welcome')
  }

  const { error, data } = useQuery(GET_MY_NAME)

  if (!name && data && data.me.name) setName(data.me.name)

  if (error) {
    // Cookie.remove('token')
    // router.push('/auth/onboarding')
  }

  const homeActive =
    route === '/' || route === '/favorites' || route === '/combos'
  const safetyActive = route === '/safety'
  const aboutUsActive = route === '/about_us'
  const contactUsActive = route === '/contact_us'
  const settingsActive = route === '/settings'

  const swipeHandler = ({ dir }) => {
    if (dir === 'Left') {
      close()
    }
  }

  useChain(show ? [sidebarRef] : [sidebarRef], show ? [0, 0.25] : [0, 0.6])

  // return transition.map(({ item, key, props }) =>
  //   item ? (
  //     <animated.div key={key} style={props} className="sidebar">
  //       {trail.map(({ item, key, props }) => (
  //         <animated.div key={item} style={props} className="sidebar__item">
  //           {item}
  //         </animated.div>
  //       ))}
  //     </animated.div>
  //   ) : null,
  return (
    <S.SidebarContainer show={show}>
      <Swipeable onSwiped={swipeHandler} preventDefaultTouchmoveEvent={false}>
        <S.Header>
          <Close onClick={close} />
        </S.Header>
        <S.OpenMenu>
          <S.Account>
            <img
              src="https://i.imgur.com/PtZghFA.png"
              style={{ width: '33%', marginBottom: '16px' }}
            />
            {name ? <S.Text>Hey,</S.Text> : <S.Text>Wait for</S.Text>}
            <S.Text>
              {name ? <S.Text>{name}</S.Text> : <S.Text>loading...</S.Text>}
            </S.Text>
          </S.Account>
          <S.MenuPoints>
            <Link href="/">
              <S.Point active={homeActive} onClick={close}>
                <Home fill={homeActive ? PRIMARY : 'white'} />
                <S.TextPoint>Home</S.TextPoint>
              </S.Point>
            </Link>
            <a
              href="https://google.com"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <S.Point>
                <Shop />
                <S.TextPoint>Shop MyFit</S.TextPoint>
              </S.Point>
            </a>
            <Link href="/safety">
              <S.Point active={safetyActive} onClick={close}>
                <Safety fill={safetyActive ? PRIMARY : 'white'} />
                <S.TextPoint>Safety</S.TextPoint>
              </S.Point>
            </Link>
            <Link href="/about_us">
              <S.Point active={aboutUsActive} onClick={close}>
                <About fill={aboutUsActive ? PRIMARY : 'white'} />
                <S.TextPoint>About Us</S.TextPoint>
              </S.Point>
            </Link>
            <Link href="/contact_us">
              <S.Point active={contactUsActive} onClick={close}>
                <Contact fill={contactUsActive ? PRIMARY : 'white'} />
                <S.TextPoint>Contact Us</S.TextPoint>
              </S.Point>
            </Link>
            <a
              href="https://google.com"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <S.Point>
                <Review fill="white" />
                <S.TextPoint>Review</S.TextPoint>
              </S.Point>
            </a>
            <Link href="/settings">
              <S.Point active={settingsActive} onClick={close}>
                <Settings fill={settingsActive ? PRIMARY : 'white'} />
                <S.TextPoint>Settings</S.TextPoint>
              </S.Point>
            </Link>
          </S.MenuPoints>
          <S.Logout>
            <S.Point>
              <SignOut />
              <S.TextPoint onClick={(e) => signOut(e)}>Sign Out</S.TextPoint>
            </S.Point>
          </S.Logout>
        </S.OpenMenu>
      </Swipeable>
    </S.SidebarContainer>
  )
}
// return (
//   <S.SidebarContainer show={show}>
//     <Swipeable onSwiped={swipeHandler} preventDefaultTouchmoveEvent={false}>
//       <S.Header>
//         <Close onClick={close} />
//       </S.Header>
//       <S.OpenMenu>
//         <S.Account>
//           <img
//             src="https://i.imgur.com/PtZghFA.png"
//             style={{ width: '33%', marginBottom: '16px' }}
//           />
//           {data && data.me.name ? (
//             <S.Text>Hey,</S.Text>
//           ) : (
//             <S.Text>Wait for</S.Text>
//           )}
//           <S.Text>
//             {data && data.me.name ? (
//               <S.Text>{data.me.name}</S.Text>
//             ) : (
//               <S.Text>loading...</S.Text>
//             )}
//           </S.Text>
//         </S.Account>
//         <S.MenuPoints>
//           <Link href="/">
//             <S.Point active={homeActive} onClick={close}>
//               <Home fill={homeActive ? PRIMARY : 'white'} />
//               <S.TextPoint>Home</S.TextPoint>
//             </S.Point>
//           </Link>
//           <a
//             href="https://google.com"
//             target="_blank"
//             style={{ textDecoration: 'none' }}
//           >
//             <S.Point>
//               <Shop />
//               <S.TextPoint>Shop MyFit</S.TextPoint>
//             </S.Point>
//           </a>
//           <Link href="/safety">
//             <S.Point active={safetyActive} onClick={close}>
//               <Safety fill={safetyActive ? PRIMARY : 'white'} />
//               <S.TextPoint>Safety</S.TextPoint>
//             </S.Point>
//           </Link>
//           <Link href="/about_us">
//             <S.Point active={aboutUsActive} onClick={close}>
//               <About fill={aboutUsActive ? PRIMARY : 'white'} />
//               <S.TextPoint>About Us</S.TextPoint>
//             </S.Point>
//           </Link>
//           <Link href="/contact_us">
//             <S.Point active={contactUsActive} onClick={close}>
//               <Contact fill={contactUsActive ? PRIMARY : 'white'} />
//               <S.TextPoint>Contact Us</S.TextPoint>
//             </S.Point>
//           </Link>
//           <a
//             href="https://google.com"
//             target="_blank"
//             style={{ textDecoration: 'none' }}
//           >
//             <S.Point>
//               <Review fill="white" />
//               <S.TextPoint>Review</S.TextPoint>
//             </S.Point>
//           </a>
//           <Link href="/settings">
//             <S.Point active={settingsActive} onClick={close}>
//               <Settings fill={settingsActive ? PRIMARY : 'white'} />
//               <S.TextPoint>Settings</S.TextPoint>
//             </S.Point>
//           </Link>
//         </S.MenuPoints>
//         <S.Logout>
//           <S.Point>
//             <SignOut />
//             <S.TextPoint onClick={(e) => signOut(e)}>Sign Out</S.TextPoint>
//           </S.Point>
//         </S.Logout>
//       </S.OpenMenu>
//     </Swipeable>
//   </S.SidebarContainer>
