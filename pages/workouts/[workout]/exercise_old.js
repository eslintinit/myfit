import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactPlayer from 'react-player'

import Arrow from 'public/icons/Arrow.svg'
import Favorite from 'public/icons/Like-filled.svg'
import { BLACK, DARK_GREY, GREY, LIGHT_GREY, PRIMARY } from 'styles/colors'

import Back from 'public/icons/Back.svg'
import { getExercises, getExercise } from 'lib/api'

import * as S from 'styles/pages/exercise'

export default ({ exercise }) => {
  const { back } = useRouter()
  console.log('exercise')
  console.log(exercise)

  const [isFavorite, setFavorite] = useState(false)

  if (!exercise) return null

  return (
    <div
      style={{
        padding: '14px 16px 0',
        background: 'rgba(0, 0, 0, 0.03)',
        boxSizing: 'border-box',
        overflow: 'scroll',
        backgroundImage: 'url(https://i.imgur.com/SPewObX.png)',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <S.Header>
        <Back onClick={back} />
      </S.Header>
      <S.Content>
        <S.ContentHeader>
          <S.Name>{exercise.name}</S.Name>
          <S.Description>{exercise.description}</S.Description>
          <S.Caption>
            {exercise.video && <ReactPlayer url={exercise.video.url} />}
            {exercise.video && (
              <iframe
                src={`https://player.vimeo.com/video/${exercise.video.providerUid}?title=0&byline=0&portrait=0`}
                style={{
                  width: '100vw',
                  height: 243,
                  marginLeft: -16,
                }}
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              />
            )}
          </S.Caption>

          <S.Text style={{ marginBottom: 16 }}>{exercise.intro}</S.Text>
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
        </S.ContentHeader>
      </S.Content>
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
