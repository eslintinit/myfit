import styled from 'styled-components'

// import { PRIMARY, BLACK } from 'styles/colors'

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5vh;
  width: 90vw;
  height: 68vh;
  background: white;
  padding: 24px 12px;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-family: 'MadeSans' !important;
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 36px;
`

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  position: absolute;
  left: calc(50% - 32px);
  top: -32px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
`

export const Heading = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-top: 36px;
  margin-bottom: 24px;
`

export const Text = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 16px;
`
