import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import { useMutation } from '@apollo/react-hooks'

import Cookie from 'js-cookie'

import { userFavorites } from 'components/context'

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

const Label = styled.div`
  color: ${BLACK};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`

const Benefit = styled.div`
  font-size: 12px;
  color: ${DARK_GREY};
  border: 1.5px solid #f8f8f8;
  border-radius: 8px;
  padding: 6px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
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

const TOGGLE_FAVORITE = gql`
  mutation setFavorite($exercise: String!) {
    setFavorite(exercise: $exercise) {
      id
      favorites
    }
  }
`

export default ({ exercise, url }) => {
  const [videoLoading, setLoading] = useState(true)
  const { back, push } = useRouter()
  const { favorites, setFavorites } = useContext(userFavorites)

  const token = Cookie.get('token')

  const liked = favorites && favorites.find((fav) => fav === url)
  const [isFavorite, setFavorite] = useState()

  useEffect(() => {
    if (liked) setFavorite(true)
    else setFavorite(false)
  }, [favorites])

  /* if (typeof window !== 'undefined') {
    console.log('favorites = ', JSON.stringify(favorites))
    console.log('liked = ', liked, liked ? true : false)
  }  */

  const [toggleFavorite, { error, loading, data }] = useMutation(
    TOGGLE_FAVORITE,
    {
      context: { headers: { Authorization: 'Bearer ' + token } },
      onCompleted(data) {
        setFavorites(data.setFavorite.favorites)
      },
    },
  )

  useEffect(() => {
    window.scrollTo(0, 150)
  }, [])

  if (!exercise) return null

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {videoLoading && (
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            top: 0,
            left: 0,
            zIndex: 100,
          }}
        >
          <Loader type="Oval" color="#FA4504" height={100} width={100} />
        </div>
      )}
      <Header style={{ zIndex: 2 }}>
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
      {exercise.video ? (
        <Player videoUrl={exercise.video} onReady={() => setLoading(false)} />
      ) : (
        <div style={{ marginTop: 48 }} />
      )}
      <Content
        style={{
          marginTop: 0,
        }}
      >
        <Favorite
          fill={isFavorite ? PRIMARY : 'transparent'}
          stroke={isFavorite ? 'none' : BLACK}
          strokeWidth={1.5}
          stroke-location="inside"
          style={{
            position: 'absolute',
            right: '16px',
          }}
          onClick={() => {
            console.log('exercise url = ', url)

            if (url && !loading) {
              setFavorite(!isFavorite)

              toggleFavorite({
                variables: {
                  exercise: url,
                },
              })
            }
          }}
        />
        <ContentHeader>
          <Name>{exercise.name}</Name>
          <S.Description style={{ width: '80%' }}>
            {exercise.description}
          </S.Description>
          {exercise.benefits && exercise.benefits.length > 0 && (
            <>
              <Label>Benefits</Label>
              <S.Benefits>
                {exercise.benefits.map((benefit) => (
                  <Benefit>{benefit.name}</Benefit>
                ))}
              </S.Benefits>
            </>
          )}

          {console.log(exercise)}
          {exercise.content && exercise.content.length > 0 && (
            <S.NumberTip style={{ width: 52, marginBottom: 16 }}>
              Tips
            </S.NumberTip>
          )}
          <ul>
            {exercise.content &&
              exercise.content.map((tip, index) => (
                <S.TipItem>{tip.tip}</S.TipItem>
              ))}
          </ul>
          {/*
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
          */}
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

export async function getStaticProps({ params, preview }) {
  const exercise = (await getExercise(params.exercise, preview)) || {}
  const url = params.exercise
  return {
    props: { exercise, url },
  }
}

export async function getStaticPaths() {
  const allExercises = await getExercises()

  return {
    paths:
      allExercises?.map(
        (exercise) => `/app/workouts/${exercise.workout.url}/${exercise.url}`,
      ) || [],
    fallback: true,
  }
}
