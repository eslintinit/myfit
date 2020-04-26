import styled from 'styled-components'
import { BLACK } from 'styles/colors'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 44px;
`

export const HeaderTitle = styled.div`
  color: ${BLACK};
  font-weight: bold;
  font-size: 16px;
`
