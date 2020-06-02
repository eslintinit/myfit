import Heart from 'public/icons/Heart.svg'
import Arrow from 'public/icons/ArrowRight.svg'
import Time from 'public/icons/TimeGray.svg'
import { Element } from 'react-scroll'

import * as S from 'styles/pages/favorites'

export default function favorites({ exercises }) {
  return (
    <S.Cards id="index-favorites">
      <S.Card>
        <S.CaptionOne>
          <div>
            <S.HeadText>Core</S.HeadText>
            <S.TinyText>{exercises.length} exercises</S.TinyText>
          </div>
          <Heart />
        </S.CaptionOne>
        {exercises.map((exercise) => (
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
        ))}
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
  )
}
