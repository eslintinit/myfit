import { SectionLink } from 'react-scroll-section'

import * as S from 'styles/components/Tabs'

export default function Tabs() {
  return (
    <S.Tabs>
      <SectionLink section="workouts">
        {({ onClick, isSelected }) => (
          <S.Tab
            active={isSelected}
            onClick={() => {
              if (process.browser) {
                document
                  .getElementById('layout-content')
                  .scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
              onClick()
            }}
          >
            Workout
          </S.Tab>
        )}
      </SectionLink>

      <SectionLink section="combos">
        {({ onClick, isSelected }) => (
          <S.Tab
            active={isSelected}
            onClick={() => {
              document.getElementById('layout-content').scrollTo({
                top: document.getElementById('index-workouts').clientHeight,
                left: 0,
                behavior: 'smooth',
              })
              onClick()
            }}
          >
            Combos
          </S.Tab>
        )}
      </SectionLink>

      <SectionLink section="favorites">
        {({ onClick, isSelected }) => (
          <S.Tab
            active={isSelected}
            onClick={() => {
              document.getElementById('layout-content').scrollTo({
                top:
                  document.getElementById('index-workouts').clientHeight +
                  document.getElementById('index-combos').clientHeight,
                left: 0,
                behavior: 'smooth',
              })
              onClick()
            }}
          >
            Favorites
          </S.Tab>
        )}
      </SectionLink>
    </S.Tabs>
  )
}
