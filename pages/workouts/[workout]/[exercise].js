import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Arrow from 'public/icons/Arrow.svg'
import Minus10 from 'public/icons/minus10.svg'
import Next from 'public/icons/Next.svg'
import Plus10 from 'public/icons/plus10.svg'
import Pause from 'public/icons/Pause.svg'
import Favorite from 'public/icons/Like-filled.svg'
import { BLACK, DARK_GREY, GREY, LIGHT_GREY, PRIMARY } from 'styles/colors'

import Back from 'public/icons/Back.svg'
import { getExercises, getExercise } from 'lib/api'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  height: 44px;
`

const Bg = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BLACK};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 24px;
`

const VideoNavigation = styled.div`
  align-self: center;
`

const Timeline = styled.div`
  margin: 16px;
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  color: ${DARK_GREY};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;

`

const Line = styled.div`
  height: 2px;
  width: 75vw;
  background: rgba(189, 189, 189, 0.35);
  border-radius: 8px;
  margin: 0px 4px;
`

const Active = styled.div`
  height: 2px;
  width: 35%;
  background: ${PRIMARY};
  border-radius: 8px;
`

const Content = styled.div`
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 16px;
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
        backgroundImage: 'url(https://i.imgur.com/VXpZfAC.png)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header>
        <Back onClick={back} />
      </Header>
      {/*
      {exercise.video && (
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
      )}
      */}
      <Bg>
        <VideoNavigation>
          <Minus10 style={{
            marginRight: '24px',
          }}/>
          <Next />
          <Pause style={{
            margin: '0px 48px',
          }}/>
          <Next style={{
            transform: 'rotate(180deg)',
          }}/>
          <Plus10 style={{
            marginLeft: '24px',
          }}/>
        </VideoNavigation>
        <Timeline>
          <p>30:56</p>
          <Line>
            <Active />
          </Line>
          <p>90:00</p>
        </Timeline>
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
      </Bg>
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
