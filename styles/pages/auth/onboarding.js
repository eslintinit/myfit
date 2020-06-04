import styled from 'styled-components'

import { PRIMARY, BLACK } from 'styles/colors'

export const Bg = styled.div`
  height: 100vh;
  background: ${BLACK};
  display: flex;
  flex-direction: column;
`

export const VideoBg = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(https://i.imgur.com/vC9cRoQ.png);

  background-size: cover;
  flex-grow: 1;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const Text = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: white;
  margin: 0px 16px 24px;
`

export const Bold = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 8px;
`

export const Points = styled.div`
  display: flex;
  align-self: center;
  margin-top: 24px;
`

export const Rectangle = styled.div`
  width: 12px;
  height: 6px;
  border-radius: 16px;
  background: ${PRIMARY};
`

export const Ellipse = styled.div`
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border-radius: 50%;
  margin-left: 4px;
`

export const Button = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 36px 24px 68px;
`
