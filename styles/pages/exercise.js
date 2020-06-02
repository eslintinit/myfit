import styled from 'styled-components'

import { BLACK, DARK_GREY, GREY, PRIMARY } from 'styles/colors'

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

export const NavigationBar = styled.div`
  height: 44px;
  margin-bottom: 16px;
`

export const Caption = styled.div`
  margin-bottom: 24px;
`

export const TextBold = styled.h2`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 28px;
  color: ${BLACK};
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_GREY};
`

export const StepText = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
`

export const Steps = styled.div`
  margin-bottom: -4px;
`
export const Container = styled.div`
  width: 90vw;
`

export const Step = styled.div`
  padding-bottom: 28px;
  padding-left: 20px;
  position: relative;
  border-left: 1.5px solid ${PRIMARY};
`

export const LastStep = styled.div`
  padding-bottom: 24px;
  padding-left: 20px;
  position: relative;
  border-left: 1.5px solid white;
`

export const Ellipse = styled.div`
  width: 8px;
  height: 8px;
  background: ${PRIMARY};
  border-radius: 50%;
  position: absolute;
  left: -5px;
`

export const Picture = styled.img`
  width: 80px;
  height: 80px;
  margin: 8px 0px;
`

export const Tip = styled.div`
  background: #f8f8f8;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 24px;
`

export const NumberTip = styled.div`
  background: ${DARK_GREY};
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 40px;
  height: 20px;
`

export const TipText = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
  margin-top: 8px;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 44px;
`

export const Content = styled.div`
  bottom: 0;
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 16px;
  width: 100vw;
  margin-left: -16px;
  margin-top: 12px;
  box-sizing: border-box;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Name = styled.div`
  color: ${BLACK};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
`

export const Description = styled.div`
  color: ${DARK_GREY};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 24px;
`

export const TipItem = styled.li`
  color: ${DARK_GREY};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`

export const DetailedButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 8px;
  align-items: center;
  margin-left: 16px;
  width: calc(100% - 56px);
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
`

export const Benefits = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 24px;
`
export const Benefit = styled.div`
  font-size: 12px;
  color: ${DARK_GREY};
  border: 1.5px solid #f8f8f8;
  border-radius: 8px;
  padding: 6px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
`
