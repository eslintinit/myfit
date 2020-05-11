import styled from 'styled-components'

import { BLACK, DARK_GREY, PRIMARY, GREY, SOFT_ORANGE } from 'styles/colors'


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 24px;
`

export const CoverImage = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding-bottom: 16px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${PRIMARY};
`

export const Box = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding: 24px 0px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 32px);
`
export const UserText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  margin-left: 16px;
  flex-grow: 1;
`

export const TextBold = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  flex-grow: 1;
  margin-left: 16px;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
`
export const Switcher = styled.div`

`
export const SwitcherBg = styled.div`
  width: 24px;
  height: 8px;
  background: ${SOFT_ORANGE};
  border-radius: 8px;
`

export const Ellipse = styled.div`
  width: 16px;
  height: 16px;
  background: ${PRIMARY};
  border-radius: 50%;
`
