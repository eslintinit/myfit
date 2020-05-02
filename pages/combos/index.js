import Play from 'public/icons/Play.svg'
import Time from 'public/icons/TimeWhite.svg'

import * as S from 'styles/pages/combos'

export default () => (
  <div>
    <S.HeroVideos>
      <S.BigCard>
        <S.New>NEW</S.New>
        <Play />
        <S.Text>
          <S.BigBold>Chest Pump</S.BigBold>
          <S.Time>
            <Time />
            <S.Min>1h 30 min</S.Min>
          </S.Time>
        </S.Text>
      </S.BigCard>
      <S.Points>
        <S.Rectangle />
        <S.Ellipse />
        <S.Ellipse />
      </S.Points>
    </S.HeroVideos>
    <S.Cards>
      <S.RowOne>
        <S.CardOne>
          <Play />
          <S.Text>
            <S.Bold>Core burn</S.Bold>
            <S.Time>
              <Time />
              <S.Min>45 min</S.Min>
            </S.Time>
          </S.Text>
        </S.CardOne>
        <S.CardThree>
          <Play />
          <S.Text>
            <S.Bold>Boulder shoulders</S.Bold>
            <S.Time>
              <Time />
              <S.Min>6 min</S.Min>
            </S.Time>
          </S.Text>
        </S.CardThree>
        <S.CardFive>
          <Play />
          <S.Text>
            <S.Bold>Glute shaping</S.Bold>
            <S.Time>
              <Time />
              <S.Min>8 min</S.Min>
            </S.Time>
          </S.Text>
        </S.CardFive>
      </S.RowOne>
      <S.RowTwo>
        <S.CardTwo>
          <Play />
          <S.Text>
            <S.Bold>Tricep Killer</S.Bold>
            <S.Time>
              <Time />
              <S.Min>13 min</S.Min>
            </S.Time>
          </S.Text>
        </S.CardTwo>
        <S.CardFour>
          <Play />
          <S.Text>
            <S.Bold>Bicep build</S.Bold>
            <S.Time>
              <Time />
              <S.Min>4 min</S.Min>
            </S.Time>
          </S.Text>
        </S.CardFour>
        <S.CardSix>
          <Play />
          <S.Text>
            <S.Bold>Leg tone</S.Bold>
            <S.Time>
              <Time />
              <S.Min>18 min</S.Min>
            </S.Time>
          </S.Text>
        </S.CardSix>
      </S.RowTwo>
    </S.Cards>
  </div>
)
