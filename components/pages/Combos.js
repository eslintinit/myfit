import Link from 'next/link'

import Play from 'public/icons/Play-combo.svg'
import Time from 'public/icons/TimeWhite.svg'

import * as S from 'styles/pages/combos/index'

export default ({ combos }) => {
  if (!combos || combos.length === 0) return <div />

  const firstCombo = combos[0]
  const restCombos = combos.slice(1)

  return (
    <div>
      <S.HeroVideos>
        {firstCombo && (
          <Link href={`/combos/[combo]`} as={`/combos/${firstCombo.url}`}>
            <S.BigCard image={firstCombo.image.url}>
              <S.New>NEW</S.New>
              <Play />
              <S.Text>
                <S.BigBold>{firstCombo.name}</S.BigBold>
                <S.Time>
                  <Time />
                  <S.Min>{firstCombo.time}</S.Min>
                </S.Time>
              </S.Text>
            </S.BigCard>
          </Link>
        )}
        <S.Points>
          <S.Rectangle />
          <S.Ellipse />
          <S.Ellipse />
        </S.Points>
      </S.HeroVideos>

      <S.Cards>
        <S.RowOne>
          <Link href={`/combos/[combo]`} as={`/combos/${firstCombo.url}`}>
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
          </Link>
          <Link href={`/combos/[combo]`} as={`/combos/${firstCombo.url}`}>
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
          </Link>
          <Link href={`/combos/[combo]`} as={`/combos/${firstCombo.url}`}>
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
          </Link>
        </S.RowOne>
        <S.RowTwo>
          <Link href={`/combos/[combo]`} as={`/combos/${firstCombo.url}`}>
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
          </Link>
          <Link href={`/combos/[combo]`} as={`/combos/${firstCombo.url}`}>
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
          </Link>
          <Link href={`/combos/[combo]`} as={`/combos/${firstCombo.url}`}>
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
          </Link>
        </S.RowTwo>
      </S.Cards>
    </div>
  )
}
