import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useSpring } from 'react-spring'
import { Swipeable } from 'react-swipeable'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Tabs from 'components/Tabs'

import * as S from 'styles/components/Layout'

export default ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { route, push } = useRouter()
  const contentRef = useRef(null)

  const sidebarAnimation = useSpring({
    // position: 'absolute',
    opacity: showSidebar ? 1 : 0,
    transform: showSidebar ? `translateX(0)` : `translateX(-40px)`,
    // width: showSidebar ? `100%` : `0px`,
  })

  const pageAnimation = useSpring({
    transform: showSidebar ? `scale(0.85)` : `scale(1)`,
    borderRadius: showSidebar ? `20px` : `0px`,
    left: showSidebar ? '182px' : '0px',
  })

  const showTabs =
    route === '/' || route === '/favorites' || route === '/combos'

  const swipeHandler = (props) => {
    console.log(props)
    const { dir, absY } = props
    if (dir === 'Right') {
      setShowSidebar(true)
    }
    if (dir === 'Left') {
      setShowSidebar(false)
    }

    // if (absY > 20) {
    //   // if workouts route
    //   if (route === '/') {
    //     if (dir === 'Up') {
    //       // push('/combos')
    //       if (contentRef.current.scrollTop > 320) {
    //         contentRef.current.scrollTop = 0
    //         push('/combos')
    //       }
    //     }
    //   }

    //   // if combos route
    //   if (route === '/combos') {
    //     if (dir === 'Up') {
    //       // push('/favorites')
    //       if (contentRef.current.scrollTop > 203) {
    //         contentRef.current.scrollTop = 0
    //         push('/favorites')
    //       }
    //     }
    //     if (dir === 'Down') {
    //       if (contentRef.current.scrollTop === 0) {
    //         push('/')
    //       }
    //     }
    //   }

    //   // if favorites route
    //   if (route === '/favorites') {
    //     if (dir === 'Down') {
    //       if (contentRef.current.scrollTop === 0) {
    //         push('/combos')
    //       }
    //     }
    //   }
    // }
  }

  return (
    <S.Wrapper>
      <Sidebar
        style={sidebarAnimation}
        show={showSidebar}
        close={() => setShowSidebar(false)}
      />
      <Swipeable
        onSwiped={swipeHandler}
        preventDefaultTouchmoveEvent={false}
        delta={100}
      >
        <S.Page showSidebar={showSidebar} style={pageAnimation}>
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <S.Content ref={contentRef}>
            {showTabs && <Tabs setShowSidebar={setShowSidebar} />}
            <div style={{ marginLeft: showTabs ? 46 : 0, width: '100%' }}>
              {children}
            </div>
          </S.Content>
        </S.Page>
      </Swipeable>
      <style jsx global>
        {`
          .react-player {
            position: absolute;
            top: 0;
            left: 0;
          }
        `}
      </style>
    </S.Wrapper>
  )
}
