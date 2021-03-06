import styled from 'styled-components'

export const Bg = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.33) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://i.imgur.com/H1ZZp6D.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 375px) {
    background-size: cover;
    background-position: start;
  }
`
