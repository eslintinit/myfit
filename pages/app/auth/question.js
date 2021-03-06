import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'

import Cookie from 'js-cookie'

import gql from 'graphql-tag'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/ArrowG.svg'
import ArrowActive from 'public/icons/Arrow-active.svg'

import * as S from 'styles/pages/auth/question'
import { GREY, PRIMARY } from 'styles/colors'

export default () => {
  const token = Cookie.get('token')

  const [color, setColor] = useState('default')
  const [pointOne, setPointOne] = useState(false)
  const [pointTwo, setPointTwo] = useState(false)
  const [pointThree, setPointThree] = useState(false)

  const [round, setRound] = useState(0)

  const quiz = [
    [
      'How often do you go to the gym?', //question
      "I don't", /////////
      'Rarely', //answers
      'Regulary', /////////
    ],
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
    context: { headers: { Authorization: 'Bearer ' + token } },
  })

  const somePointActive = pointOne || pointTwo || pointThree

  return (
    <div>
      <S.Bg>
        <S.NavigationBar>
          <Back
            onClick={() =>
              round > 0 ? setRound(round - 1) : router.push('/app/')
            }
          />
          <S.Skip onClick={() => router.push('/app/')}>Skip</S.Skip>
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
              round={round}
              onClick={() => {
                if (round !== 2) {
                  setPointOne(!pointOne ? true : false)
                  setPointTwo(false)
                  setPointThree(false)
                } else {
                  setPointOne(!pointOne)
                }
              }}
              active={pointOne}
            >
              {quiz[round][1]}
            </S.Point1>
            <S.Point2
              round={round}
              onClick={() => {
                if (round !== 2) {
                  setPointOne(false)
                  setPointTwo(!pointTwo ? true : false)
                  setPointThree(false)
                } else {
                  setPointTwo(!pointTwo)
                }
              }}
              active={pointTwo}
            >
              {quiz[round][2]}
            </S.Point2>
            <S.Point3
              round={round}
              onClick={() => {
                if (round !== 2) {
                  setPointOne(false)
                  setPointTwo(false)
                  setPointThree(!pointThree ? true : false)
                } else {
                  setPointThree(!pointThree)
                }
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
              let answers = []
              if (round === 2) {
                const points = [
                  { id: 1, state: pointOne },
                  { id: 2, state: pointTwo },
                  { id: 3, state: pointThree },
                ]
                const answersNotFiltered = points.map((point) =>
                  point.state === true ? quiz[round][point.id] : null,
                )
                answers = answersNotFiltered.filter((answer) => answer !== null)
              }
              setAnswer([
                ...answer,
                round !== 2
                  ? quiz[round][pointOne ? 1 : pointTwo ? 2 : 3]
                  : answers,
              ])
              setPointOne(false)
              setPointTwo(false)
              setPointThree(false)

              if (round === 2) {
                const gym = JSON.stringify({
                  gym: answer[0],
                  exp: answer[1],
                  goals: answers,
                })
                if (!loading) {
                  router.push('/app/')
                  question({ variables: { gym } })
                }
              } else setRound(round + 1)
            }}
          >
            {round !== 2 ? (
              <S.Text>Choose one answer</S.Text>
            ) : (
              <S.Text>Choose answers</S.Text>
            )}
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
