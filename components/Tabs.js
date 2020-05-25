
//import { scroller } from 'react-scroll'
import { useRouter } from 'next/router'

/* const scroll = (where, options) => scroller.scrollTo(where, options) */

import * as S from 'styles/components/Tabs'

export default function Tabs({ setShowSidebar }) {
  const { route } = useRouter()

  /* const options = {
    duration: 500,    
    smooth: true,
    containerId: 'containerElement'   
  }
 */
  return (
    <S.Tabs>
      {/* <Link activeClass="active" to="workouts" spy={true} smooth={true} duration={500} containerId="containerElement"> */}
        <S.Tab active={route === '/'} onClick={() => {setShowSidebar(false); /* scroll('workouts', options); */}}>
          Workout
        </S.Tab>
      {/* </Link> */}
      {/* <Link activeClass="active" to="combos" spy={true} smooth={true} duration={500} containerId="containerElement"> */}
        <S.Tab
          active={route === '/combos'}
          onClick={() => setShowSidebar(false)}
        >
          Combos
        </S.Tab>
      {/* </Link> */}
      {/* <Link activeClass="active" to="favorites" spy={true} smooth={true} duration={500} containerId="containerElement"> */}
        <S.Tab
          active={route === '/favorites'}
          onClick={() => setShowSidebar(false)}
        >
          Favorites
        </S.Tab>
      {/* </Link> */}
    </S.Tabs>
  )
}
