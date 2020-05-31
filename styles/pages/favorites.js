import styled from 'styled-components'

import { BLACK, DARK_GREY, GREY, PRIMARY, SOFT_ORANGE } from 'styles/colors'

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  min-height: calc(100vh - 100px);
`

export const Card = styled.div`
  margin-bottom: 24px;
`

export const Caption = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`
export const CaptionOne = styled(Caption)`
  background: ${SOFT_ORANGE};
`

export const CaptionTwo = styled(Caption)`
  background: #f8f8f8;
`

export const HeadText = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: ${BLACK};
`
export const TinyText = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: ${DARK_GREY};
`

export const Exercise = styled.div`
  margin: 16px 12px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Info = styled.div`
  flex-grow: 1;
`

export const Picture = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  object-fit: cover;
  border-radius: 8px;
`

export const TextBold = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  margin-bottom: 6px;
`

export const Time = styled.div`
  display: flex;
`
export const Min = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
  margin-left: 4px;
`
