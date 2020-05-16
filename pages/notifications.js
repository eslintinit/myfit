import * as S from 'styles/pages/notifications'
import Close from 'public/icons/Close.svg'

export default () => (
  <div style={{ background: '#000000', height: '100vh', padding: '0px 16px'}}>
    <S.NavigationBar>
      <S.TextBold>Notifications</S.TextBold>
      <Close />
    </S.NavigationBar>
    <S.Notifications>
      <S.Card>
        <S.Text>Added the new video in Core Workout section</S.Text>
        <S.Time>4m</S.Time>
      </S.Card>
    </S.Notifications>
  </div>
)
