import Layout from 'components/Layout'

import Heart from 'public/icons/Heart.svg'
import Arrow from 'public/icons/ArrowRight.svg'
import Time from 'public/icons/TimeGray.svg'

import * as S from 'styles/pages/favorites'

export default () => (
  <Layout>
    <S.Cards>
      <S.Card>
        <S.CaptionOne>
          <div>
            <S.HeadText>Core</S.HeadText>
            <S.TinyText>3 exercises</S.TinyText>
          </div>
          <Heart />
        </S.CaptionOne>
        <S.Exercise>
          <S.Picture src='https://i.imgur.com/jxaTxNT.png' />
          <S.Info>
            <S.TextBold>Exercise 1</S.TextBold>
            <S.Time>
              <Time />
              <S.Min>22 min</S.Min>
            </S.Time>
          </S.Info>
          <Arrow />
        </S.Exercise>
        <S.Exercise>
          <S.Picture src='https://i.imgur.com/jxaTxNT.png' />
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
          <S.Picture src='https://i.imgur.com/jxaTxNT.png' />
          <S.Info>
            <S.TextBold>Exercise 3</S.TextBold>
            <S.Time>
              <Time />
              <S.Min>14 min</S.Min>
            </S.Time>
          </S.Info>
          <Arrow />
        </S.Exercise>
      </S.Card>
      <S.Card>
        <S.CaptionTwo>
          <S.Info>
            <S.HeadText>Combos</S.HeadText>
            <S.TinyText>1 exercises</S.TinyText>
          </S.Info>
          <Heart />
        </S.CaptionTwo>
        <S.Exercise>
          <S.Picture src='https://i.imgur.com/U2ZaPVV.png' />
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
    </S.Cards>
  </Layout>
)
// query {
//   allWorkouts(filter: {
//     url: { in: ["core", "triceps"] }
//   }) {
//     id
//     name
//   }
// }
