import Link from 'next/link'
import { Element } from 'react-scroll'
import { Image } from 'react-datocms'

import * as S from 'styles/pages/favorites'
import Arrow from 'public/icons/ArrowRight.svg'

import { Wrapper, Workouts, Card, Title, Subtitle } from 'styles/pages/index'

export default ({ instructions }) => {
  return (
    <S.Cards id="index-instructions">
      {instructions.map((instruction) => (
        <Link
          href={`/app/instructions/[instruction]`}
          as={`/app/instructions/${instruction.id}`}
          key={instruction.url}
        >
          <S.Exercise>
            <S.Info>
              <S.TextBold>{instruction.title}</S.TextBold>
            </S.Info>
            <Arrow />
          </S.Exercise>
        </Link>
      ))}
    </S.Cards>
  )
}
