import Link from 'next/link'
import { useTransition, animated } from 'react-spring'
import { getFavoriteExercises } from 'lib/api'

import { parseCookies } from 'lib/parseCookies'

import stringArray from 'string-array'

import Heart from 'public/icons/Heart.svg'
import Arrow from 'public/icons/ArrowRight.svg'
import Time from 'public/icons/TimeGray.svg'

import Cookie from 'js-cookie'

import * as S from 'styles/pages/favorites'

export default function favorites({ exercises }) {
  console.log(exercises)

  const transitions = useTransition(true, null, {
    from: { opacity: 0, marginTop: 300 },
    enter: { opacity: 1, marginTop: 0 },
    leave: { opacity: 0, marginTop: -300 },
  })
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <S.Cards>
            <S.Card>
              <S.CaptionOne>
                <div>
                  <S.HeadText>Core</S.HeadText>
                  <S.TinyText>{exercises.length} exercises</S.TinyText>
                </div>
                <Heart />
              </S.CaptionOne>
              {exercises.map((exercise) => (
                <Link
                  href={`/workouts/[workout]/[exercise]`}
                  as={`/workouts/${exercise.workout.url}/${exercise.url}`}
                >
                  <S.Exercise>
                    <S.Picture src={exercise.image.url} />
                    <S.Info>
                      <S.TextBold>{exercise.name}</S.TextBold>
                      <S.Time>
                        <Time />
                        <S.Min>{exercise.time}</S.Min>
                      </S.Time>
                    </S.Info>
                    <Arrow />
                  </S.Exercise>
                </Link>
              ))}
              {/*  <S.Exercise>
                <S.Picture src="https://i.imgur.com/jxaTxNT.png" />
                <S.Info>
                  <S.TextBold>Exercise 2</S.TextBold>
                  <S.Time>
                    <Time />
                    <S.Min>24 min</S.Min>
                  </S.Time>
                </S.Info>
                <Arrow />
              </S.Exercise>
              <S.Exercise>
                <S.Picture src="https://i.imgur.com/jxaTxNT.png" />
                <S.Info>
                  <S.TextBold>Exercise 3</S.TextBold>
                  <S.Time>
                    <Time />
                    <S.Min>14 min</S.Min>
                  </S.Time>
                </S.Info>
                <Arrow />
              </S.Exercise> */}
            </S.Card>
            {/*
      <S.Card>
        <S.CaptionTwo>
          <S.Info>
            <S.HeadText>Combos</S.HeadText>
            <S.TinyText>1 exercises</S.TinyText>
          </S.Info>
          <Heart />
        </S.CaptionTwo>
        <S.Exercise>
          <S.Picture src="https://i.imgur.com/U2ZaPVV.png" />
          <S.Info>
            <S.TextBold>Boulder shoulders</S.TextBold>
            <S.Time>
              <Time />
              <S.Min>6 min</S.Min>
            </S.Time>
          </S.Info>
          <Arrow />
        </S.Exercise>
      </S.Card>
      */}
          </S.Cards>
        </animated.div>
      ),
  )
}

favorites.getInitialProps = async ({ req }) => {
  const cookies = parseCookies(req)
  const cookieFav = cookies.favorites.replace(/"/g, '')
  const favorites = await stringArray.parse(cookieFav).array

  const favoriteExercisesUrls = favorites //["exercise-1", "exercise-2", "exercise-3"]
  const exercises = (await getFavoriteExercises(favoriteExercisesUrls)) || []

  console.log(exercises)
  return {
    exercises: exercises.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
    ),
  }
}
