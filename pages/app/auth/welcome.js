import { Swipeable } from 'react-swipeable'
import Logo from 'public/LogoW.svg'

import { useRouter } from 'next/router'

import * as S from 'styles/pages/auth/welcome'

export default () => {
  const router = useRouter()

  const swipeHandler = (props) => {
    const { dir } = props
    if (dir === 'Right') {
      router.push('/auth/onboarding')
    }
  }

  return (
    <Swipeable onSwiped={swipeHandler} delta={100}>
      <div>
        <S.Bg>
          <S.Container>
            <Logo />
            <S.Line />
            <S.Text>Join the Resistance Workout Revolution</S.Text>
          </S.Container>
          <S.SignUp onClick={() => router.push('/auth/signup')}>
            Sign Up
          </S.SignUp>
          <S.Login onClick={() => router.push('/auth/login')}>Login</S.Login>
        </S.Bg>
      </div>
    </Swipeable>
  )
}
