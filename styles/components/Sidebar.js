import styled from 'styled-components'
import { animated } from 'react-spring'
import { BLACK, PRIMARY } from 'styles/colors'

export const SidebarContainer = styled(animated.div)`
  height: 100vh;
  background: ${BLACK};
  margin-left: 0;
`
// transition: 0.2s;
// width: 246px;

// ${(props) => !props.show && ` margin-left: -240px; `}
// ${(props) =>
//   props.show &&
//   `
// transition-delay: 0.1s;
// transition: 0.15s;
// `}

export const Header = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  margin: 16px 16px 24px 16px;
`

export const OpenMenu = styled.div`
  margin-left: 8px;
  margin-right: 28px;
  width: 154px;
`

export const Account = styled.div`
  margin-left: 8px;
  margin-bottom: 40px;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

export const MenuPoints = styled.div``

export const Point = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  margin-bottom: 12px;
  ${(props) =>
    props.active &&
    `
    background: rgba(250, 69, 4, 0.2);
    border-radius: 8px;
    color: ${PRIMARY};
  `}
`

export const TextPoint = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-left: 12px;
`

export const Logout = styled.div`
  border-top: 1px solid rgba(189, 189, 189, 0.35);
  margin-top: 56px;
  padding-top: 28px;
`
