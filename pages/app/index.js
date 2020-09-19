import { getWorkouts } from 'lib/api'
import { getCombos } from 'lib/api'
//import { Element } from 'react-scroll'
import Tabs from 'components/Tabs'
import Loader from 'react-loader-spinner'

import { getFavoriteExercises } from 'lib/api'

import { useState, useContext, useEffect } from 'react'
import { userFavorites } from 'components/context'

import Workouts from 'components/pages/Workouts'
import Combos from 'components/pages/Combos'
import Favorites from 'components/pages/Favorites'

import { Section, ScrollingProvider } from 'react-scroll-section'

export default ({ workouts, combos }) => {
  const [exercises, setExercises] = useState([])
  const OneSignal = process.browser && window.OneSignal

  const tagsExist =
    window.localStorage.getItem('newVideo') ||
    window.localStorage.getItem('newProduct') ||
    window.localStorage.getItem('updates')

  if (process.browser && !tagsExist && OneSignal) {
    OneSignal.getTags((tags) => {
      window.localStorage.setItem(
        'newVideo',
        typeof tags.newVideo !== 'undefined' ? tags.newVideo : false,
      )
      window.localStorage.setItem(
        'newProduct',
        typeof tags.newProduct !== 'undefined' ? tags.newProduct : false,
      )
      window.localStorage.setItem(
        'updates',
        typeof tags.updates !== 'undefined' ? tags.updates : false,
      )
      console.log(tags)
    })
  }

  tagsExist &&
    useEffect(() => {
      OneSignal.sendTag(
        'newVideo',
        window.localStorage.getItem('newVideo'),
      ).then((tagsSend) => {
        console.log('newVideo: ' + tagsSend.newVideo)
      })
      OneSignal.sendTag(
        'newProduct',
        window.localStorage.getItem('newProduct'),
      ).then((tagsSend) => {
        console.log('newProduct: ' + tagsSend.newProduct)
      })
      OneSignal.sendTag('updates', window.localStorage.getItem('updates')).then(
        (tagsSend) => {
          console.log('updates: ' + tagsSend.updates)
        },
      )
    })

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
        <Section id="favorites">
          <Favorites exercises={exercises} />
        </Section>
        <Section id="combos">
          <Combos combos={combos} />
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
