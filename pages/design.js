import { BLACK } from 'styles/colors'
import * as S from 'styles/index'

export default () => {
  return (
    <S.Container>
      <S.Navigation>
        <S.Menu />
        <S.Logo />
        <S.Notifications />
      </S.Navigation>
      <S.Content>
        <S.Tabs>
          <S.Tab>Workout</S.Tab>
        </S.Tabs>
        <S.Workouts>
          <S.Card>
            <S.Title>Core</S.Title>
            <S.Subtitle>4 exercises</S.Subtitle>
          </S.Card>
        </S.Workouts>
      </S.Content>
    </S.Container>
  )
}
