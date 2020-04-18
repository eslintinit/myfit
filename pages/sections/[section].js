import Link from 'next/link';
import { useRouter } from 'next/router'
import { getSection } from '../../lib/api'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/layout'

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

export default function Section({ section }) {
  const { back } = useRouter()
  return (
    <div>
      <Back onClick={back}>Back</Back>
      <Header>{section.name}</Header>
        <ul>
    {section.workouts.map(workout => 
      <li style={{ marginTop: 20, paddingLeft: 30 }}>
      <Link
        href="/workouts/[workout]"
        as={`/workouts/${workout.url}`}
      >
          {workout.name}
      </Link>
        </li>
        )}
        </ul>
    </div>
  )
}

export async function getServerSideProps({ params, preview }) {
  const section = (await getSection(params.section, preview)) || []
  console.log(section)
  return {
    props: { section },
  }
}
