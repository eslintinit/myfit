import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'

import gql from 'graphql-tag'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/ArrowG.svg'

import * as S from 'styles/pages/auth/question'

export default () => {
  const [color, setColor] = useState('default')
  const [pointOne, setPointOne] = useState(false)
  const [pointTwo, setPointTwo] = useState(false)
  const [pointThree, setPointThree] = useState(false)

  const [round, setRound] = useState(0)

  const quiz = [
    ['How often do you go to the gym?', "I don't", 'Rarely', 'Regulary'],
    ['What muscle groups you want to build?', 'Chest', 'Back', 'Arms'],
    ["What's your goal?", 'Looking good', 'Getting strong', 'Feeling healthy'],
  ]

  const [answer, setAnswer] = useState([])

  const router = useRouter()

  const QUESTION = gql`
    mutation question($gym: String!) {
      question(gym: $gym) {
        gym
      }
    }
  `
  const [question, { loading }] = useMutation(QUESTION, {
    onCompleted({ question }) {
      alert(question.gym)
      router.push('/')
    },
  })

  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back />
          <S.Skip>Skip</S.Skip>
        </S.NavigationBar>
        <S.InfoBlock>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '16px',
            }}
          >
            <S.Line active></S.Line>
            <S.Line active={round === 0 || round === 1 || round === 2}></S.Line>
            <S.Line active={round === 1 || round === 2}></S.Line>
            <S.Line active={round === 2}></S.Line>
          </div>
          <S.TextBold>{quiz[round][0]}</S.TextBold>
          <S.Points>
            <S.Point1
              onClick={() => {
                setPointOne(!pointOne ? true : false)
                setPointTwo(false)
                setPointThree(false)
              }}
              active={pointOne}
            >
              {quiz[round][1]}
            </S.Point1>
            <S.Point2
              onClick={() => {
                setPointOne(false)
                setPointTwo(!pointTwo ? true : false)
                setPointThree(false)
              }}
              active={pointTwo}
            >
              {quiz[round][2]}
            </S.Point2>
            <S.Point3
              onClick={() => {
                setPointOne(false)
                setPointTwo(false)
                setPointThree(!pointThree ? true : false)
              }}
              active={pointThree}
            >
              {quiz[round][3]}
            </S.Point3>
          </S.Points>
          <S.BottomNavigation
            active={pointOne || pointTwo || pointThree}
            onClick={(e) => {
              e.preventDefault()
              setAnswer([
                ...answer,
                quiz[round][pointOne ? 1 : pointTwo ? 2 : 3],
              ])
              setPointOne(false)
              setPointTwo(false)
              setPointThree(false)

              if (round === 2) {
                const gym = answer[0]
                if (!loading) question({ variables: { gym } })
              } else setRound(round + 1)
            }}
          >
            <S.Text>Choose one answer</S.Text>
            <S.Next>
              Go Next
              <Arrow style={{ marginLeft: '4px' }} />
            </S.Next>
          </S.BottomNavigation>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
