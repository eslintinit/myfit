import { getWorkouts } from 'lib/api'
import { getCombos } from 'lib/api'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'


import Cookie from 'js-cookie'
import { getFavoriteExercises } from 'lib/api'

import { useState, useContext, useEffect } from 'react'
import { userFavorites } from '../components/context'

import Workouts from 'components/pages/Workouts'
import Combos from 'components/pages/Combos'
import Favorites from 'components/pages/Favorites'


export default ({ workouts, combos }) => {
  
 
  const [exercises, setExercises] = useState([])

  const { favorites, setFavorites } = useContext(userFavorites)
 
  useEffect(() => {
    console.log("FAVFAVFAVFAVFAVFAV ", favorites)
    
   async () => {
    const exerc = favorites && (await getFavoriteExercises(favorites)) || []
    console.log('my exerc = ', exerc)
      /* setExercises(
      exerc.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    )  */ }
  }, [favorites])

  

  
  return (
    <div>
      <Workouts workouts={workouts} />
      <Combos combos={combos} />
       <Favorites exercises={exercises} /> 
    </div>
  )
}

export async function getStaticProps({ preview }) {
  const workouts = (await getWorkouts(preview)) || []
  const combos = (await getCombos(preview)) || []
   
  return {
    props: { workouts, combos },
  }
}
