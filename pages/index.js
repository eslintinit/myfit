import Layout from '../components/layout'
import Link from 'next/link';
import { getWorkoutSections } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
` 
const Section = styled.div`
flex-basis: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
border-bottom: 1px solid #d4d0d0;
padding-bottom: 30px;
padding-top: 20px;
` 
const SectionName = styled.h2`
font-weight: 600;
font-size: 18px;
letter-spacing: 1px;
text-transform: uppercase;
color: #383838;
font-family: Helvetica Neue;
padding-top: 10px;
` 
const SectionImage = styled.img`
width: 100%;
padding: 0 20px;
object-fit: contain;
` 

export default function Index({ workoutSections }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {workoutSections.map(section => (
            <Link href={`/sections/[section]`} as={`/sections/${section.url}`}>
            <Section key={section.id}>
              <SectionImage src={section.image.url} />
              <SectionName>
                {section.name}
              </SectionName>
            </Section>
              </Link>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const workoutSections = (await getWorkoutSections(preview)) || []
  return {
    props: { workoutSections },
  }
}
