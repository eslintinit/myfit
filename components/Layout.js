import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { Swipeable } from 'react-swipeable'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Tabs from 'components/Tabs'

import * as S from 'styles/components/Layout'

export default ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { route, push } = useRouter()
  const contentRef = useRef(null)

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

    if (absY > 300) {
      // if workouts route
      if (route === '/') {
        if (dir === 'Up') {
          push('/combos')
          // if (contentRef.current.scrollTop > 420) {
          //   contentRef.current.scrollTop = 0
          //   push('/combos')
          // }
        }
      }

      // if combos route
      if (route === '/combos') {
        if (dir === 'Up') {
          push('/favorites')
          // if (contentRef.current.scrollTop > 203) {
          //   contentRef.current.scrollTop = 0
          //   push('/favorites')
          // }
        }
        if (dir === 'Down') {
          if (contentRef.current.scrollTop === 0) {
            push('/')
          }
        }
      }

      // if favorites route
      if (route === '/favorites') {
        if (dir === 'Down') {
          if (contentRef.current.scrollTop === 0) {
            push('/combos')
          }
        }
      }
    }
  }

  return (
    <S.Wrapper>
      <Sidebar show={showSidebar} close={() => setShowSidebar(false)} />
      <Swipeable
        onSwiped={swipeHandler}
        preventDefaultTouchmoveEvent={false}
        delta={100}
      >
        <S.Page showSidebar={showSidebar}>
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <S.Content ref={contentRef}>
            {showTabs && <Tabs />}
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
