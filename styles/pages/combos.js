import styled from 'styled-components'

import {
  BLACK,
  DARK_GREY,
  GREY,
  PRIMARY,
} from 'styles/colors'

export const HeroVideos = styled.div`
  margin-top: 24px;
`

export const Cards = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled.div`
  border-radius: 8px;
  width: 138px;
  height: 180px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`

export const CardOne = styled(Card)`
  background-image: url('https://i.imgur.com/Zk454LT.png');
`

export const CardTwo = styled(Card)`
  background-image: url('https://i.imgur.com/svr6xxF.png');
`

export const CardThree = styled(Card)`
  background-image: url('https://i.imgur.com/M0chehC.png');
`

export const CardFour = styled(Card)`
  background-image: url('https://i.imgur.com/AS6jAy5.png');
`

export const CardFive = styled(Card)`
  background-image: url('https://i.imgur.com/swbxhPj.png');
`

export const CardSix = styled(Card)`
  background-image: url('https://i.imgur.com/JCq6FQH.png');
`
