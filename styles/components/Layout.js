import styled from 'styled-components'
import { BLACK } from 'styles/colors'
import { animated } from 'react-spring'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${BLACK};
  overflow: hidden;
  position: relative;
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
`

export const Page = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 14px 16px;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  width: 100vw;
`
// min-width: 100vw;
// width: 100vw;
// position: fixed;
// left: 188px;
// ${(props) =>
//   props.showSidebar &&
//   `
//   transform: scale(0.85);
// `}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;

  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`
