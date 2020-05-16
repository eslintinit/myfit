import Back from 'public/icons/Back.svg'

import * as S from 'styles/pages/exercise'

export default () => (
  <div>
    <S.Bg>
      <S.NavigationBar>
        <Back />
      </S.NavigationBar>
      <S.Caption>
        <S.TextBold>Exercise 2</S.TextBold>
        <S.Text>
          Drop and give me 20! Pushups are one of the most basic yet effective
          bodyweight moves you can perform because of the number of muscles that
          are recruited to perform them.
        </S.Text>
      </S.Caption>
      <S.Tip>
        <S.NumberTip>Tip 1</S.NumberTip>
        <S.TipText>
          If you can’t quite perform a standard pushup with good form, drop down
          to a modified stance on your knees — you’ll still reap many of the
          benefits from this exercise while building strength.{' '}
        </S.TipText>
      </S.Tip>
      <S.Steps>
        <S.Step>
          <S.Ellipse />
          <S.StepText>Step 1</S.StepText>
          <S.Picture src="https://i.imgur.com/cmkxCa7.png" />
          <S.Text>
            Start in a plank position. Your core should be tight, shoulders
            pulled down and back, and your neck neutral.
          </S.Text>
        </S.Step>
        <S.Step>
          <S.Ellipse />
          <S.StepText>Step 2</S.StepText>
          <S.Picture src="https://i.imgur.com/gCEpzXf.png" />
          <S.Text>
            Bend your elbows and begin to lower your body down to the floor.
            When your chest grazes it, extend your elbows and return to the
            start. Focus on keeping your elbows close to your body during the
            movement.
          </S.Text>
        </S.Step>
        <S.LastStep>
          <S.Ellipse />
          <S.StepText>Step 3</S.StepText>
          <S.Picture src="https://i.imgur.com/JZVq0wW.png" />
          <S.Text>Complete 3 sets of as many reps as possible.</S.Text>
        </S.LastStep>
      </S.Steps>
      <S.Tip>
        <S.NumberTip>Tip 2</S.NumberTip>
        <S.TipText>
          Starting with your right arm, bend your elbow and pull the weight
          straight up toward your chest, making sure to engage your lat, and
          stopping just below your chest.
        </S.TipText>
      </S.Tip>
    </S.Bg>
  </div>
)
