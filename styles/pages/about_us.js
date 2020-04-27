import styled from 'styled-components'

import { BLACK, DARK_GREY, PRIMARY } from 'styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${BLACK};
`

export const Page = styled.div`
  background: #fff;
  # transition: 0.2s;
  border-radius: ${(props) => (props.showSidebar ? '20px' : '0px')};
  ${(props) =>
    props.showSidebar &&
    `
    height: 100vh;
    box-sizing: border-box;
    width: 100vw;
    position: fixed;
    left: 188px;
    transform: scale(0.85);
  `}
`

export const NavigationBar = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  align-items: flex-end;
  margin: 16px 16px 24px;
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
