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
  const OneSignal = process.browser && window.OneSignal

  

  if (process.browser) {
    let tags = {}
    OneSignal.getTags((receivedTags) => {
    tags = receivedTags
    console.log(receivedTags)
    })
    
    window.localStorage.setItem('newVideo', tags.newVideo)
    window.localStorage.setItem('newProduct', tags.newProduct)
    window.localStorage.setItem('updates', tags.updates)
  }

  const tagsExist = window.localStorage.getItem('newVideo') || window.localStorage.getItem('newProduct') || window.localStorage.getItem('updates')


  tagsExist && useEffect(()=>{
    OneSignal.sendTag("newVideo", window.localStorage.getItem('newVideo')).then((tagsSend)=>{
      console.log("newVideo: " + tagsSend.newVideo)      
    })
    OneSignal.sendTag("newProduct", window.localStorage.getItem('newProduct')).then((tagsSend)=>{
      console.log("newProduct: " + tagsSend.newProduct)     
    })
    OneSignal.sendTag("updates", window.localStorage.getItem('updates')).then((tagsSend)=>{
      console.log("updates: " + tagsSend.updates)      
    })
  },)

  const { favorites, setFavorites } = useContext(userFavorites)

  useEffect(() => {
    if (favorites) {
      getFavoriteExercises(favorites).then((result) => {
        setExercises(result)
      })
    }
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
    props: { workouts, combos },
  }
}
