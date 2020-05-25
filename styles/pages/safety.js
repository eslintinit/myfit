import styled from 'styled-components'
import {
  BLACK,
  DARK_GREY,
  SOFT_BLUE,
  SOFT_YELLOW,
  SOFT_PINK,
  SOFT_ORANGE,
  PRIMARY,
} from 'styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  min-height: calc(100vh - 72px);
`

export const Column = styled.div`
  flex-basis: calc(50% - 8px);
`
export const TextBold = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  margin-top: 16px;
`

export const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
  margin-top: 8px;
`

export const Card = styled.div`
  border-radius: 8px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
`

export const CardOne = styled(Card)`
  background: ${SOFT_YELLOW};
  height: calc(50% - 20px);
  box-sizing: border-box;
`

export const CardTwo = styled(Card)`
  background: ${SOFT_PINK};
  height: calc(50% - 20px);
  box-sizing: border-box;
`

export const CardThree = styled(Card)`
  background: ${SOFT_BLUE};
  height: calc(50% - 20px);
  box-sizing: border-box;
`

export const CardFour = styled(Card)`
  background: ${SOFT_ORANGE};
  height: calc(50% - 20px);
  box-sizing: border-box;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${PRIMARY};
`
