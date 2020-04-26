import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Arrow from 'public/icons/Arrow.svg'
import Favorite from 'public/icons/Like-filled.svg'
import { BLACK, DARK_GREY, GREY, LIGHT_GREY, PRIMARY } from 'styles/colors'

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

const Content = styled.div`
  position: fixed;
  bottom: 0;
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 16px;
  margin-left: -16px;
  margin-right: -16px;
  width: 100%;
  box-sizing: border-box;
`

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Name = styled.div`
  color: ${BLACK};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
`

const Description = styled.div`
  color: ${DARK_GREY};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
`

const DetailedButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 8px;
  align-items: center;
  margin-left: 16px;
  width: calc(100% - 56px);
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
`

export default ({ exercise }) => {
  const { back } = useRouter()
  console.log('exercise')
  console.log(exercise)

  const [isFavorite, setFavorite] = useState(false)

  if (!exercise) return null

  return (
    <div
      style={{
        padding: '14px 16px',
        background: 'rgba(0, 0, 0, 0.03)',
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <Header>
        <Back onClick={back} />
      </Header>
      <iframe
        src={`https://player.vimeo.com/video/${exercise.video.providerUid}?title=0&byline=0&portrait=0`}
        style={{
          width: '100vw',
          height: 300,
          marginLeft: -16,
        }}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <Content>
        <ContentHeader>
          <Name>{exercise.name}</Name>
          <Description>{exercise.description}</Description>
          <Info>
            <Favorite
              fill={isFavorite ? PRIMARY : 'transparent'}
              stroke={isFavorite ? 'none' : BLACK}
              strokeWidth={1.5}
              stroke-location="inside"
            />
            <DetailedButton>
              Detailed Instructions
              <Arrow
                style={{
                  position: 'absolute',
                  right: 12,
                  transform: 'rotate(-90deg)',
                }}
              />
            </DetailedButton>
          </Info>
        </ContentHeader>
      </Content>
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
