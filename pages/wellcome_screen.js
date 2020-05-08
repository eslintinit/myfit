import Logo from 'public/LogoW.svg'

import * as S from 'styles/pages/wellcome_screen'

export default () => (
  <div>
    <S.Bg>
      <S.Container>
        <Logo/>
        <S.Line />
        <S.Text>Join the Resistance Workout Revolution</S.Text>
      </S.Container>
      <S.SignUp>Sign Up</S.SignUp>
      <S.Login>Login</S.Login>
    </S.Bg>
  </div>
)
