import styled from 'styled-components'

import { BLACK, DARK_GREY, PRIMARY } from 'styles/colors'

export const Content = styled.div``

export const ContentTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: ${BLACK};
  margin-bottom: 24px;
`

export const Pictures = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`

export const InfoBold = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
`

export const InfoNormal = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_GREY};
  margin-top: 8px;
  margin-bottom: 24px;
`

export const SocialLinks = styled.div`
  background: ${BLACK};
  padding: 24px 16px 56px 16px;
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-left: -16px;
`

export const SocialText = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 60%;
  flex-grow: 1;
`
