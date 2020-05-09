import styled from 'styled-components'

import { BLACK, DARK_GREY, PRIMARY, GREY, SOFT_ORANGE } from 'styles/colors'


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 24px;
`

export const CoverImage = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding-bottom: 16px;
`

export const Box = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding: 24px 0px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const UserText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  margin-left: 16px;
`

export const TextBold = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
`
