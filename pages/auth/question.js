import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'

import gql from 'graphql-tag'

import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/ArrowG.svg'


import * as S from 'styles/pages/question'


export default () => {
  const [pointOne, setPointOne] = useState(false)
  const [pointTwo, setPointTwo] = useState(false)
  const [pointThree, setPointThree] = useState(false)

  //const [gym, setGym] = useState("") 

  
  const router = useRouter()

  const QUESTION = gql`
    mutation question($gym: String!) {
      question(gym: $gym) {
        gym
      }
    }
  `
  const [question] = useMutation( QUESTION,{
    onCompleted({ question }){
      alert(question.gym)
      router.push('/')      
    }
})
 

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
              onClick={() => {
                setPointOne(!pointOne ? true : false);
                setPointTwo(false);
                setPointThree(false)
                
              }}
              active={pointOne}
            >I don`t</S.Point1>
            <S.Point2
            onClick={() => {
              setPointOne(false);
              setPointTwo(!pointTwo ? true : false);
              setPointThree(false)
              
            }}
            active={pointTwo}>Rarely</S.Point2>
            <S.Point3
            onClick={() => {
              setPointOne(false);
              setPointTwo(false);
              setPointThree(!pointThree ? true : false)
                            
            }}
            active={pointThree}>Regularly</S.Point3>
          </S.Points>
          <S.BottomNavigation 
          active={pointOne || pointTwo || pointThree}
          onClick={
            (e) =>{
              e.preventDefault()
              const gym = pointOne ? "none" : pointTwo ? "rarely" : "regulary";
              question({ variables: { gym } })
            }
          }
          >
            <S.Text>Choose one answer</S.Text>
            <S.Next >Go Next
              <Arrow style={{ marginLeft: '4px' }}/>
            </S.Next>
          </S.BottomNavigation>
        </S.InfoBlock>
      </S.Bg>
    </div>
  )
}
