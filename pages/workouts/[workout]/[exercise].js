import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from 'components/layout'
import { getExercises, getExercise } from 'lib/api'

export default ({ exercise }) => {
  const { back } = useRouter()
  console.log('exercise')
  console.log(exercise)

  return (
    <div>
      <div onClick={back}>Back</div>
    </div>
  )
}

export async function getStaticProps({ params, preview }) {
  const exercise = (await getExercise(params.exercise, preview)) || {}

  return {
    props: { exercise },
  }
}

export async function getStaticPaths() {
  const allExercises = await getExercises()

  return {
    paths:
      allExercises?.map(
        (exercise) => `/workouts/${exercise.workout.url}/${exercise.url}`,
      ) || [],
    fallback: true,
  }
}
