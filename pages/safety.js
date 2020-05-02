import { useState } from 'react'

import Care from 'public/icons/Care.svg'
import EU from 'public/icons/EU.svg'
import Dashboard from 'public/icons/Dashboard.svg'
import Natural from 'public/icons/Natural.svg'
import Question from 'public/icons/Question.svg'
import Sidebar from 'components/Sidebar'

import * as S from 'styles/pages/safety'

export default () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <S.Container>
      <S.Column>
        <S.CardOne>
          <Natural />
          <S.TextBold>
            MyFit resistance bands are made from 100% natural latex.
          </S.TextBold>
          <S.Text>
            If you are allergic to latex, we would advise consulting with a
            health professional before using it.
          </S.Text>
        </S.CardOne>
        <S.CardThree>
          <EU />
          <S.TextBold>
            MyFit Resistance Bands are CE regulated in conformity with EU
            regulations.
          </S.TextBold>
        </S.CardThree>
      </S.Column>
      <S.Column>
        <S.CardTwo>
          <Care />
          <S.TextBold>Please use with care.</S.TextBold>
          <S.Text>
            Whilst our bands are great are creating resistance, it’s important
            that you use them with the safety of your body in mind. Like any
            other gym weights, if you lift too heavy, you can cause damage.
          </S.Text>
        </S.CardTwo>
        <S.CardFour>
          <Question />
          <S.TextBold>
            You can find our contact details at{' '}
            <S.Link
              href="https://myfitproducts.com/pages/contact"
              target="_blank"
            >
              my-fit.io
            </S.Link>{' '}
            if you have any other questions.
          </S.TextBold>
        </S.CardFour>
      </S.Column>
    </S.Container>
  )
}
