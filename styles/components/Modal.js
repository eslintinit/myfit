import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`
