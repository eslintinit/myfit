import styled from 'styled-components'
import { BLACK } from 'styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${BLACK};
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 14px 16px;
  # transition: 0.2s;
  border-radius: ${(props) => (props.showSidebar ? '20px' : '0px')};
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  ${(props) =>
    props.showSidebar &&
    `
    position: fixed;
    left: 188px;
    transform: scale(0.85);
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
`
