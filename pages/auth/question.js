import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'

import gql from 'graphql-tag'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/ArrowG.svg'
import ArrowActive from 'public/icons/Arrow-active.svg'

import * as S from 'styles/pages/auth/question'
import { GREY, PRIMARY } from 'styles/colors'

export default () => {
  const [color, setColor] = useState('default')
  const [pointOne, setPointOne] = useState(false)
  const [pointTwo, setPointTwo] = useState(false)
  const [pointThree, setPointThree] = useState(false)

  const [round, setRound] = useState(0)

  const quiz = [
    ['How often do you go to the gym?', "I don't", 'Rarely', 'Regulary'],
    [
      'How would you describe your gym ability?',
      'Beginner',
      'Advanced',
      'Intermediate',
    ],
    ['What are your fitness goals?', 'Tone', 'Build muscle', 'Lose weight'],
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
      // alert(question.gym)
      router.push('/')
    },
  })

  const somePointActive = pointOne || pointTwo || pointThree

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
                const gym = `${answer[0]}, ${answer[1]}, ${answer[2]}`
                if (!loading) question({ variables: { gym } })
              } else setRound(round + 1)
            }}
          >
            <S.Text>Choose one answer</S.Text>
            <S.Next active={somePointActive}>
              Go Next
              {somePointActive ? (
                <ArrowActive
                  style={{
                    marginLeft: '4px',
                  }}
                />
              ) : (
                <Arrow
                  style={{
                    marginLeft: '4px',
                    stroke: somePointActive ? PRIMARY : GREY,
                  }}
                />
              )}
            </S.Next>
          </S.BottomNavigation>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
