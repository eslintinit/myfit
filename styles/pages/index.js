import styled from 'styled-components'

import {
  BLACK,
  DARK_GREY,
  SOFT_ORANGE,
} from 'styles/colors'

export const Workouts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  height: calc(100vh - 100px);
  margin-top: 24px;
`
export const Card = styled.div`
  flex-basis: calc(50% - 8px);
  background-image: url(${(props) => props.image});
  border-radius: 8px;
  height: 200px;
  margin-bottom: 16px;
  padding: 16px 12px;
  box-sizing: border-box;
  :nth-child(2) {
    margin-left: 16px;
  }
  background-size: cover;
`
export const Title = styled.h2`
  color: ${BLACK};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`
export const Subtitle = styled.p`
  color: ${DARK_GREY};
  font-size: 14px;
`
