import styled from 'styled-components'

import { BLACK, DARK_GREY } from 'styles/colors'

export const Navigation = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const FAQ = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${BLACK};
  margin-bottom: 4px;
  flex-grow: 1;
  padding-right: 28px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
`

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Answer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  border-radius: 8px;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const TextBold = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  width: 80%;
`

export const Text = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${DARK_GREY};
  padding-top: 8px;
`
