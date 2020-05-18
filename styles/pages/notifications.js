import styled from 'styled-components'

import { BLACK, DARK_GREY, PRIMARY, GREY } from 'styles/colors'

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin-bottom: 8px;
`

export const TextBold = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: white;
`

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0px;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.15);
`

export const Text = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${GREY};
  margin-left: 16px;
  margin-right: 24px;
  flex-grow: 1;
  width: 40vw;
`

export const Highlight = styled.span`
  color: white;
  font-weight: bold;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 18vw;
  justify-content: space-between;
`

export const Time = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${DARK_GREY};
  margin-right: 16px;
`

export const EllipseGrey = styled.div`
  width: 3px;
  height: 3px;
  background: ${DARK_GREY};
  border-radius: 50%;
`

export const EllipseRed = styled.div`
  width: 6px;
  height: 6px;
  background: ${PRIMARY};
  border-radius: 50%;
`
