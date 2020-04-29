import { useState } from 'react'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/ArrowG.svg'


import * as S from 'styles/pages/question'


export default () => {
  const [color, setColor] = useState('default')

  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back />
          <S.Skip>Skip</S.Skip>
        </S.NavigationBar>
        <S.InfoBlock>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: '16px'}}>
            <S.Line></S.Line>
            <S.Line></S.Line>
            <S.Line></S.Line>
            <S.Line></S.Line>
          </div>
          <S.TextBold>How often do you go to the gym?</S.TextBold>
          <S.Points>
            <S.Point1
              onClick={() => setColor(color === 'default' ? 'active' : 'default')}
              active={color === 'active'}
            >I don`t</S.Point1>
            <S.Point2>Rarely</S.Point2>
            <S.Point3>Regularly</S.Point3>
          </S.Points>
          <S.BottomNavigation>
            <S.Text>Choose one answer</S.Text>
            <S.Next>Go Next
              <Arrow style={{ marginLeft: '4px' }}/>
            </S.Next>
          </S.BottomNavigation>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
