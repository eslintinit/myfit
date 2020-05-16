import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'

import { BLACK, DARK_GREY, PRIMARY, GREY, SOFT_ORANGE } from 'styles/colors'


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 24px;

  /*background: rgba(0, 0, 0, 0.2);*/
`

export const CoverImage = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding-bottom: 16px;
`

export const Upload = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 11px;
`

export const PictureText = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${PRIMARY};
  margin-left: 4px;
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

export const InfoImage = styled(Info)`
  justify-content: start;
`

export const InfoName = styled(Info)`
  margin-bottom: 32px;
`

export const InfoNotification = styled(Info)`
  margin-top: 24px;
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

export const TextImage = styled(TextBold)`
  margin: 0px 0px 16px;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${DARK_GREY};
`

export const TextPersonal = styled(Text)`
  margin-bottom: 16px;
`

export const PopOver = styled.div`
  border-radius: 20px 20px 0px 0px;
  background: #ffffff;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
`

export const Caption = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextPopOver = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${BLACK};
  flex-grow: 1;
`

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid BLACK;
  padding-bottom: 16px;
`

export const Input = styled.input`
  border: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
  outline: none;
  flex-grow: 1;
  margin-left: 16px;
`
export const Save = styled.div`
  border-radius: 8px;
  padding: 15px 16px;
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: white;
  background: ${PRIMARY};
`
