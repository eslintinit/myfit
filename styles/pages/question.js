import styled from 'styled-components'

import { BLACK, DARK_GREY, GREY, PRIMARY, SOFT_ORANGE } from 'styles/colors'

export const Bg = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.33) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://i.imgur.com/zRrcCEH.png);
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavigationBar = styled.div`
  height: 44px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`

export const Skip = styled.button`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: white;
`

export const InfoBlock = styled.div`
  border-radius: 20px 20px 0px 0px;
  background: #ffffff;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
`
export const Line = styled.hr`
  height: 2px;
  background: ${PRIMARY};
  width: 22vw;
  border-radius: 4px;
  border: none;
`
export const TextBold = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  width: 75vw;
  color: BLACK;
  text-transform: capitalize;
`
export const Points = styled.div`
  align-self: center;
  display: flex;
  height: 30vh;
  margin: 80px 0px;
  position: relative;
`

export const Point = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  position: absolute;

  background: ${SOFT_ORANGE};
  color: ${PRIMARY};
  ${(props) =>
    props.active &&
    `
    background: ${PRIMARY};
    color: white;
  `}
`
export const Point1 = styled(Point)`
  right: 10px;
`

export const Point2 = styled(Point)`
  top: 24px;
  left: 14px;
`

export const Point3 = styled(Point)`
  top: 120px;
  right: -24px;
`
export const BottomNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 8px;
  align-items: center;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_GREY};
`

export const Next = styled.button`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${GREY};
`
