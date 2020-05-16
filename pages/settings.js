import Sidebar from 'components/Sidebar'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import { grey } from '@material-ui/core/colors'

import Dashboard from 'public/icons/Dashboard.svg'
import Notification from 'public/icons/Notification.svg'
import Key from 'public/icons/KeyRed.svg'
import Arrow from 'public/icons/VectorArrow.svg'
import Profile from 'public/icons/Profile.svg'
import Email from 'public/icons/Email.svg'
import Photo from 'public/icons/PhotoRed.svg'
import Close from 'public/icons/CloseBig.svg'

import * as S from 'styles/pages/settings'

const ActiveSwitch = withStyles({
  switchBase: {
    color: grey[400],
    '&$checked': {
      color: deepOrange[600],
    },
    '&$checked + $track': {
      backgroundColor: deepOrange[100],
    },
  },
  checked: {},
  track: {},
})(Switch)

export default () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const [name, setName] = useState('')
  const save = () => {
    alert('Thanks. We will contact you shortly')
  }

  return (
    <S.Content>
      {/*
      <S.CoverImage>
        <S.TextImage>Your cover image</S.TextImage>
        <S.InfoImage>
          <img src='https://i.imgur.com/7wnzfta.png' />
          <S.Upload>
          <Photo />
          <S.PictureText>Change picture</S.PictureText>
          </S.Upload>
        </S.InfoImage>
      </S.CoverImage>
      */}
      <S.Box>
        <S.TextPersonal>Full Name</S.TextPersonal>
        <S.InfoName>
          <Profile />
          <S.UserText>Susie Little</S.UserText>
          <Arrow />
        </S.InfoName>
        <S.TextPersonal>Email</S.TextPersonal>
        <S.Info>
          <Email />
          <S.UserText>myfit@gmail.com</S.UserText>
          <Arrow />
        </S.Info>
      </S.Box>
      <S.Box>
        <S.Info>
          <Notification />
          <S.TextBold>Send me push notification</S.TextBold>
        </S.Info>
        <S.InfoNotification>
          <S.Text>About new video content</S.Text>
          <Switch
            size="small"
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </S.InfoNotification>
        <S.InfoNotification>
          <S.Text>About new product</S.Text>
          <Switch
            size="small"
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </S.InfoNotification>
        <S.InfoNotification>
          <S.Text>MyFit Updates</S.Text>
          <Switch
            size="small"
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </S.InfoNotification>
      </S.Box>
      <S.Box>
        <S.Info>
          <Key />
          <S.TextBold>Change password</S.TextBold>
          <Arrow />
        </S.Info>
      </S.Box>
      <S.PopOver>
          <S.Caption>
            <S.TextPopOver>Your Full Name</S.TextPopOver>
            <Close />
          </S.Caption>
          <S.TextPersonal>Full Name</S.TextPersonal>
          <S.Field>
            <Profile />
            <S.Input
              placeholder="Enter your name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </S.Field>
          <S.Save onClick={save} >
            Save
          </S.Save>
      </S.PopOver>
    </S.Content>
  )
}
