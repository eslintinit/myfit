import styled from 'styled-components'

import { PRIMARY } from 'styles/colors'

export const Bg = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.33) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://i.imgur.com/wvzY70G.png);
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: absolute;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  text-transform: capitalize;
  color: white;
`

export const Line = styled.div`
  width: 40px;
  height: 2px;
  background: white;
  border-radius: 8px;
  margin: 26px 0px 16px 0px;
`

export const SignUp = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  color: white;
  border-radius: 8px;
  padding: 15px 16px;
  margin-top: 24px;
  width: 90%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
`

export const Login = styled.div`
  border-radius: 8px;
  padding: 15px 16px;
  margin-top: 24px;
  width: 90%;
  background: ${PRIMARY};
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  color: white;
`
