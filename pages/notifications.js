import * as S from 'styles/pages/notifications'
import Close from 'public/icons/Close.svg'

export default () => (
  <div style={{ background: '#000000', height: '100vh', padding: '0px 16px' }}>
    <S.NavigationBar>
      <S.TextBold>Notifications</S.TextBold>
      <Close />
    </S.NavigationBar>
    <S.Notification>
      <img src='https://i.imgur.com/3lgIIEE.png' />
      <S.Text>Added the new video in <S.Highlight>Core Workout</S.Highlight> section</S.Text>
      <S.Container>
        <S.EllipseGrey />
        <S.Time>4m</S.Time>
        <S.EllipseRed />
      </S.Container>
    </S.Notification>
    <S.Notification>
      <img src='https://i.imgur.com/3lgIIEE.png' />
      <S.Text><S.Highlight>Boulder shoulders</S.Highlight> workout in <S.Highlight>Combos</S.Highlight> for you</S.Text>
      <S.Container>
        <S.EllipseGrey />
        <S.Time>18m</S.Time>
        <S.EllipseRed />
      </S.Container>
    </S.Notification>
    <S.Notification>
      <img src='https://i.imgur.com/3lgIIEE.png' />
      <S.Text><S.Highlight>Chest Pump</S.Highlight> workout in <S.Highlight>Combos</S.Highlight> for you</S.Text>
      <S.Container>
        <S.EllipseGrey />
        <S.Time>2h</S.Time>
        <S.EllipseRed />
      </S.Container>
    </S.Notification>
    <S.Notification>
      <img src='https://i.imgur.com/3lgIIEE.png' />
      <S.Text>Added the new video in <S.Highlight>Forearm Workout</S.Highlight> section</S.Text>
      <S.Container>
        <S.EllipseGrey />
        <S.Time>12h</S.Time>
        <S.EllipseRed />
      </S.Container>
    </S.Notification>
    <S.Notification>
      <img src='https://i.imgur.com/3lgIIEE.png' />
      <S.Text>Added the new video in <S.Highlight>Triceps Workout</S.Highlight> section</S.Text>
      <S.Container>
        <S.EllipseGrey />
        <S.Time>2d</S.Time>
        <S.EllipseRed />
      </S.Container>
    </S.Notification>
    <S.Notification>
      <img src='https://i.imgur.com/3lgIIEE.png' />
      <S.Text>Added the new video in <S.Highlight>Chest Workout</S.Highlight> section</S.Text>
      <S.Container>
        <S.EllipseGrey />
        <S.Time>15d</S.Time>
        <S.EllipseRed />
      </S.Container>
    </S.Notification>
  </div>
)
