import Arrow from 'public/icons/ArrowWhite.svg'

import * as S from 'styles/pages/onboarding'

export default () => (
  <div>
    <S.Bg>
      <S.VideoBg>
        <S.Text>
          <S.Bold>Discover MyFit.</S.Bold>
          <p>A team of experienced trainers has developed professional video tutorials for you. We take care that your lessons are not in vain!</p>
          <S.Points>
            <S.Rectangle />
            <S.Ellipse />
            <S.Ellipse />
          </S.Points>
        </S.Text>
      </S.VideoBg>
      <S.Button>
        <p>Get Started</p>
        <Arrow />
      </S.Button>
    </S.Bg>
  </div>
)
