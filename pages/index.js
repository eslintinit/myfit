import { getWorkouts } from 'lib/api'
import { getCombos } from 'lib/api'
//import { Element } from 'react-scroll'

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
    favorites && // check if react context exists
  (getFavoriteExercises(favorites).then(result => {    
    setExercises(
            result.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    )
  })) || [] 
  }, [favorites])

  

  
  return (
    
      <div>
      {/* <Element name="workouts" className="element"> */}<Workouts workouts={workouts} />{/* </Element> */}
      {/* <Element name="combos" className="element"> */}<Combos combos={combos} />{/* </Element> */}
      {/* <Element name="favorites" className="element"> */} <Favorites exercises={exercises} />{/* </Element> */} 
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
