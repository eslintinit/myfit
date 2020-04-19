import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Back from 'public/icons/Back.svg'
import Layout from 'components/Layout'
import { getExercises, getExercise } from 'lib/api'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 44px;
`

export default ({ exercise }) => {
  const { back } = useRouter()
  console.log('exercise')
  console.log(exercise)

  if (!exercise) return null

  return (
    <div style={{ padding: '14px 16px' }}>
      <Header>
        <Back onClick={back} />
      </Header>
      {exercise.name}
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
