import styled from 'styled-components'

import {
  BLACK,
  DARK_GREY,
  PRIMARY,
  GREY,
  SOFT_ORANGE,
} from 'styles/colors'

export const NavigationBar = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 24px;
`

export const NavigationTitle = styled.div`
  color: ${BLACK};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  flex-grow: 1;
  padding-right: 27px;
`

export const Content = styled.div``

export const CoverImage = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  margin-bottom: 24px;
`

export const PersonalInfo = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  margin-bottom: 24px;
`

export const Notifications = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  margin-bottom: 24px;
`

export const ChangePassword = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
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
  line-height: 133.83%;
  color: ${DARK_GREY};
`
