import styled, { keyframes } from 'styled-components'

import { BLACK, DARK_GREY, SOFT_ORANGE } from 'styles/colors'

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: 400px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`

export const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

export const Workouts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 1044px;
  margin-top: 24px;
`
export const Card = styled.div`
  flex-basis: calc(50% - 8px);
  background-image: url(${(props) => props.image});
  border-radius: 8px;
  height: ${(props) => props.height}px;
  max-height: ${(props) => props.height}px;
  margin-bottom: 16px;
  padding: 16px 12px;
  background-size: cover;
  :nth-child(-n + 4) {
    margin-right: 16px;
  }
  box-sizing: content-box;
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
