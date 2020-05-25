

import { useRouter } from 'next/router'

import { SectionLink } from 'react-scroll-section'

import * as S from 'styles/components/Tabs'

export default function Tabs({ setShowSidebar }) {
  const { route } = useRouter()


  return (
    <S.Tabs>
      <SectionLink section="workouts">
        {({ onClick, isSelected }) => (
          <S.Tab 
            active={isSelected} 
            onClick={() => {setShowSidebar(false); onClick()}}
            >
            Workout
          </S.Tab>
         )}
      </SectionLink>

      <SectionLink section="combos">
        {({ onClick, isSelected }) => (
          <S.Tab
            active={isSelected}
            onClick={() => {setShowSidebar(false); onClick()}}
          >
            Combos
          </S.Tab>
        )}
      </SectionLink>

      
      <SectionLink section="favorites">
        {({ onClick, isSelected }) => (      
          <S.Tab
            active={isSelected}
            onClick={() => {setShowSidebar(false); onClick()}}
          >
            Favorites
          </S.Tab>
        )}
      </SectionLink>
    </S.Tabs>
  )
}
