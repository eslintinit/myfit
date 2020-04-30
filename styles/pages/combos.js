import styled from 'styled-components'

import {
  BLACK,
  DARK_GREY,
  GREY,
  PRIMARY,
} from 'styles/colors'

export const HeroVideos = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`

export const BigCard = styled.div`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
  url('https://i.imgur.com/e3Fkael.png');
  border-radius: 8px;
  width: 78vw;
  height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
`

export const New = styled.div`
  background: ${PRIMARY};
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: white;
  position: absolute;
  top: 14px;
  right: 12px;
  border-radius: 8px;
`

export const BigBold = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: white;
`

export const Points = styled.div`
  display: flex;
  align-self: center;
`

export const Rectangle = styled.div`
  width: 12px;
  height: 6px;
  border-radius: 16px;
  background: ${PRIMARY};
`

export const Ellipse = styled.div`
  width: 6px;
  height: 6px;
  background: rgba(189, 189, 189, 0.25);
  border-radius: 50%;
  margin-left: 4px;
`

export const Cards = styled.div`
  display: flex;
`

export const RowOne = styled.div`
  margin-top: 24px;
  margin-right: 16px;
`

export const RowTwo = styled.div`
  margin-top: 24px;
`

export const Text = styled.div`
  position: absolute;
  width: 80%;
  bottom: 16px;
  left: 12px;
`

export const Bold = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: white;
  margin-bottom: 4px;
`

export const Time = styled.div`
  display: flex;
`

export const Min = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: white;
  margin-left: 4px;
`

export const Card = styled.div`
  border-radius: 8px;
  width: 37vw;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`

export const CardOne = styled(Card)`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
  url('https://i.imgur.com/Zk454LT.png');
`

export const CardTwo = styled(Card)`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
  url('https://i.imgur.com/svr6xxF.png');
`

export const CardThree = styled(Card)`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
  url('https://i.imgur.com/M0chehC.png');
`

export const CardFour = styled(Card)`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
  url('https://i.imgur.com/AS6jAy5.png');
`

export const CardFive = styled(Card)`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
  url('https://i.imgur.com/swbxhPj.png');
`

export const CardSix = styled(Card)`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
  url('https://i.imgur.com/JCq6FQH.png');
`
