import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Player from 'components/Player'

import Arrow from 'public/icons/Arrow.svg'
import Minus10 from 'public/icons/minus10.svg'
import Next from 'public/icons/Next.svg'
import Plus10 from 'public/icons/plus10.svg'
import Pause from 'public/icons/Pause.svg'
import Favorite from 'public/icons/Like-filled.svg'
import { BLACK, DARK_GREY, GREY, LIGHT_GREY, PRIMARY } from 'styles/colors'

import Back from 'public/icons/Back.svg'
import { getExercises, getExercise } from 'lib/api'

import * as S from 'styles/pages/exercise'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  height: 44px;
  position: fixed;
`

const Bg = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BLACK};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 24px;
  # position: fixed;
  # bottom: 128px;
  margin-top: -80px;
`

const VideoNavigation = styled.div`
  display: flex;
  align-items: center;
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
  width: 100vw;
  box-sizing: border-box;
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 16px;
  margin-top: -20px;
  # position: fixed;
  # bottom: 0;
  # margin-top: -115px;
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

  const [isFavorite, setFavorite] = useState(false)

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header>
        <Back style={{ zIndex: 2 }} onClick={back} />
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
      <Player />
      <Content>
        <ContentHeader>
          <Name>Exercise 1</Name>
          <Description>
            Challenging your balance is an essential part of exercise.
          </Description>
          {/*
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
          */}
          <S.Tip>
            <S.NumberTip>Tip 1</S.NumberTip>
            <S.TipText>
              If you can’t quite perform a standard pushup with good form, drop
              down to a modified stance on your knees — you’ll still reap many
              of the benefits from this exercise while building strength.{' '}
            </S.TipText>
          </S.Tip>
          <S.Steps>
            <S.Step>
              <S.Ellipse />
              <S.StepText>Step 1</S.StepText>
              <S.Picture src="https://i.imgur.com/cmkxCa7.png" />
              <S.Text>
                Start in a plank position. Your core should be tight, shoulders
                pulled down and back, and your neck neutral.
              </S.Text>
            </S.Step>
            <S.Step>
              <S.Ellipse />
              <S.StepText>Step 2</S.StepText>
              <S.Picture src="https://i.imgur.com/gCEpzXf.png" />
              <S.Text>
                Bend your elbows and begin to lower your body down to the floor.
                When your chest grazes it, extend your elbows and return to the
                start. Focus on keeping your elbows close to your body during
                the movement.
              </S.Text>
            </S.Step>
            <S.LastStep>
              <S.Ellipse />
              <S.StepText>Step 3</S.StepText>
              <S.Picture src="https://i.imgur.com/JZVq0wW.png" />
              <S.Text>Complete 3 sets of as many reps as possible.</S.Text>
            </S.LastStep>
          </S.Steps>
          <S.Tip>
            <S.NumberTip>Tip 2</S.NumberTip>
            <S.TipText>
              Starting with your right arm, bend your elbow and pull the weight
              straight up toward your chest, making sure to engage your lat, and
              stopping just below your chest.
            </S.TipText>
          </S.Tip>
          {/*
          <S.Info>
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
          </S.Info>
          */}
        </ContentHeader>
      </Content>
    </div>
  )
}

// export async function getStaticProps({ params, preview }) {
//   const exercise = (await getExercise(params.exercise, preview)) || {}

//   return {
//     props: { exercise },
//   }
// }

// export async function getStaticPaths() {
//   const allExercises = await getExercises()

//   return {
//     paths:
//       allExercises?.map(
//         (exercise) => `/workouts/${exercise.workout.url}/${exercise.url}`,
//       ) || [],
//     fallback: true,
//   }
// }
