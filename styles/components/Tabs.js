import styled from 'styled-components'
import { PRIMARY, BLACK, GREY } from 'styles/colors'

export const Tabs = styled.div`
  margin-top: 24px;
  position: fixed;
`

export const Tab = styled.div`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  margin-bottom: 32px;
  font-weight: 700;
  color: ${GREY};
  padding-left: 16px;
  padding-right: 16px;
  margin-left: -16px;
  ${(props) =>
    props.active &&
    ` 
    color: ${BLACK};
    :before {
      transform: translateX(-50%);
      border-radius: 100%;
      position: absolute;
      background: ${PRIMARY};
      bottom: calc(50% - 4px);
      height: 3px;
      content: '';
      width: 3px;
      right: 36px;
    }
  `}
`
