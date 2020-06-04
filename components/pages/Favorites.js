import Link from 'next/link'
import { groupBy } from 'lodash'

import Heart from 'public/icons/Heart.svg'
import Arrow from 'public/icons/ArrowRight.svg'
import Time from 'public/icons/TimeGray.svg'

import * as S from 'styles/pages/favorites'

export default function favorites({ exercises }) {
  const exercisesByWorkout = groupBy(exercises, (i) => {
    return i.workout.name
  })

  return (
    <S.Cards id="index-favorites">
      {Object.entries(exercisesByWorkout).map(([workout, favorites]) => (
        <S.Card style={{ marginBottom: 36 }} key={workout}>
          <S.CaptionOne>
            <div>
              <S.HeadText>{workout}</S.HeadText>
              <S.TinyText>{favorites.length} exercises</S.TinyText>
            </div>
          </S.CaptionOne>
          {favorites.map((exercise) => (
            <Link
              href={`/workouts/[workout]/[exercise]`}
              as={`/workouts/${exercise.workout.url}/${exercise.url}`}
              key={exercise.url}
            >
              <S.Exercise key={exercise.url}>
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
        </S.Card>
      ))}
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
  )
}
