import Link from 'next/link'
import { useRouter } from 'next/router'
import { getWorkout, getAllWorkouts } from '../../lib/api'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/layout'
import markdownToHtml from '../../lib/markdownToHtml'

const Back = styled.div`
  width: 100%;
  border-bottom: 1px solid #d4d0d0;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`

const Header = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding-left: 10px;
`

export default function Section({ workout, content }) {
  const { back } = useRouter()

  return (
    <div>
      <Back onClick={back}>Back</Back>
      <Header>{workout?.name}</Header>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export async function getStaticProps({ params, preview }) {
  const workout = (await getWorkout(params.workout, preview)) || {}
  const content = await markdownToHtml(workout?.content || '')

  return {
    props: { workout, content },
  }
}

export async function getStaticPaths() {
  const allWorkouts = await getAllWorkouts()
  return {
    paths: allWorkouts?.map((workout) => `/workouts/${workout.url}`) || [],
    fallback: true,
  }
}
