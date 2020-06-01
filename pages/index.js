import { getWorkouts } from 'lib/api'
import { getCombos } from 'lib/api'
//import { Element } from 'react-scroll'
import Tabs from 'components/Tabs'

import { getFavoriteExercises } from 'lib/api'

import { useState, useContext, useEffect } from 'react'
import { userFavorites } from '../components/context'

import Workouts from 'components/pages/Workouts'
 import Combos from 'components/pages/Combos'
import Favorites from 'components/pages/Favorites' 

import { Section, ScrollingProvider } from 'react-scroll-section'

export default ({ workouts, combos }) => {
  const [exercises, setExercises] = useState([])

  const { favorites, setFavorites } = useContext(userFavorites)

  useEffect(() => {
    ;(favorites && // check if react context exists
      getFavoriteExercises(favorites).then((result) => {
        setExercises(
          result.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
          ),
        )
      })) ||
      []
  }, [favorites])

  return (
    <ScrollingProvider>
      <Tabs />
      <div style={{ marginLeft: 46, width: '100%' }}>
        <Section id="workouts">
          <Workouts workouts={workouts} />
        </Section>
        <Section id="combos">
          <Combos combos={combos} />
        </Section>
        <Section id="favorites">
          <Favorites exercises={exercises} />
        </Section>
      </div>
    </ScrollingProvider>
  )
}

export async function getStaticProps({ preview }) {
  const workouts = (await getWorkouts(preview)) || []
  const combos = (await getCombos(preview)) || []
 
  return {
    props: { workouts , combos  },
  }
}
