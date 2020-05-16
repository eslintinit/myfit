import styled from 'styled-components'

import {
  BLACK,
  DARK_GREY,
  PRIMARY,
  GREY,
} from 'styles/colors'

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  margin-bottom: 24px;
`

export const TextBold = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: white;
`

export const Notifications = styled.div``

export const Card = styled.div`
  border-bpttom: 1.5px solid rgba(189, 189, 189, 0.15);
  display: flex;
  flex-direction: row;
  align-items: center;

`

export const Text= styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${GREY};
`

export const Time= styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${DARK_GREY};
`
