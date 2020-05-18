import Sidebar from 'components/Sidebar'
import { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import { withStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import { grey } from '@material-ui/core/colors'

import { validate } from 'email-validator'

import { userName, userEmail } from '../components/context'

import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Dashboard from 'public/icons/Dashboard.svg'
import Notification from 'public/icons/Notification.svg'
import Key from 'public/icons/KeyRed.svg'
import Arrow from 'public/icons/VectorArrow.svg'
import Profile from 'public/icons/Profile.svg'
import Email from 'public/icons/Email.svg'
import Photo from 'public/icons/PhotoRed.svg'
import Close from 'public/icons/CloseBig.svg'

import * as S from 'styles/pages/settings'

const FirstSwitch = withStyles({
  switchBase: {
    color: '#000',
    '&$checked': {
      color: '#FA4504',
    },
    '&$checked + $track': {
      backgroundColor: '#F8F8F8',
    },
  },
  checked: {},
  track: {},
})(Switch)

const ActiveSwitch = withStyles({
  switchBase: {
    color: '#000',
    '&$checked': {
      color: '#FA4504',
    },
    '&$checked + $track': {
      backgroundColor: '#F8F8F8',
    },
  },
  checked: {},
  track: {},
})(Switch)

const RSwitch = withStyles({
  switchBase: {
    color: '#000',
    '&$checked': {
      color: '#FA4504',
    },
    '&$checked + $track': {
      backgroundColor: '#F8F8F8',
    },
  },
  checked: {},
  track: {},
})(Switch)

export default () => {


  const [showChangeEmail, setShowChangeEmail] = useState(false)
  const [showChangeName, setShowChangeName] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { name, setName } = useContext(userName)
  const { email, setEmail } = useContext(userEmail)


  const [newName, setNewName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')

  const CHANGE_NAME = gql`
    mutation changeName($name: String!) {
      changeName(name: $name) {
       name
      }
    }
  `
  const [changeName] = useMutation(CHANGE_NAME,{
    onCompleted({ changeName }){
      setName(changeName.name)
    }
  })
  
  const CHANGE_EMAIL = gql`
  mutation changeEmail($email: String!) {
    changeEmail(email: $email) {
     email
    }
  }
  `
  const [changeEmail] = useMutation(CHANGE_EMAIL,{
    onCompleted({ changeEmail }){
      setEmail(changeEmail.email)
    }
  })

  const CHANGE_PASSWORD = gql`
    mutation changePassword($password: String!) {
      changePassword(password: $password) {
      email
      }
    }
  `
  const [changePassword] = useMutation(CHANGE_PASSWORD)
  
  const close = () =>{
    setShowChangeEmail(false)
    setShowChangeName(false)
    setShowChangePassword(false)
    setNewName('')
    setNewEmail('')
    setNewPassword('')
  }

  const save = () => {
    setShowChangeEmail(false)
    setShowChangeName(false)
    setShowChangePassword(false)
    if (newName !== '') {
      changeName({ variables: { name: newName } })
      setNewName('')      
    }
    if (newEmail !== '') {
      changeEmail({ variables: { email: newEmail } })
      setNewEmail('')
    }
    if (newPassword !== '') {
      changePassword ({ variables: { password: newPassword } })
      setNewPassword('')
    }
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
        <S.InfoName onClick={() => setShowChangeName(true)}>
          <Profile />
          <S.UserText>{name}</S.UserText>
          <Arrow />
        </S.InfoName>
        <S.TextPersonal>Email</S.TextPersonal>
        <S.Info onClick={() => setShowChangeEmail(true)}>
          <Email />
          <S.UserText>{email}</S.UserText>
          <Arrow />
        </S.Info>
      </S.Box>
      <S.Box>
        <FormGroup>
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
            <RSwitch
              size="small"
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </S.InfoNotification>
          <S.InfoNotification>
            <S.Text>MyFit Updates</S.Text>
            <ActiveSwitch
              size="small"
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </S.InfoNotification>
        </FormGroup>
      </S.Box>
      <S.Box>
        <S.Info onClick={() => setShowChangePassword(true)}>
          <Key />
          <S.TextBold>Change password</S.TextBold>
          <Arrow />
        </S.Info>
      </S.Box>
      {showChangeEmail && (
        <>
          <S.Overlay onClick={close} />
          <S.PopOver>
            <S.Caption>
              <S.TextPopOver>Your Email</S.TextPopOver>
              <Close onClick={close} />
            </S.Caption>
            <S.TextPersonal>Email</S.TextPersonal>
            <S.Field>
              <Profile />
              <S.Input
                placeholder="myfit@gmail.com"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </S.Field>
            <S.Save onClick={validate(newEmail) && save} active={validate(newEmail)}>Save</S.Save>
          </S.PopOver>
        </>
      )}
       {showChangeName && (
        <>
          <S.Overlay onClick={close} />
          <S.PopOver>
            <S.Caption>
              <S.TextPopOver>Your Full Name</S.TextPopOver>
              <Close onClick={close} />
            </S.Caption>
            <S.TextPersonal>Full Name</S.TextPersonal>
            <S.Field>
              <Profile />
              <S.Input
                placeholder="Enter your name"
                type="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </S.Field>
            <S.Save onClick={newName !== '' && save} active={newName !== ''}>Save</S.Save>
          </S.PopOver>
        </>
      )}
       {showChangePassword && (
        <>
          <S.Overlay onClick={close} />
          <S.PopOver>
            <S.Caption>
              <S.TextPopOver>Your New Password</S.TextPopOver>
              <Close onClick={close} />
            </S.Caption>
            <S.TextPersonal>Password</S.TextPersonal>
            <S.Field>
              <Profile />
              <S.Input
                placeholder="Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </S.Field>
            <S.TextPersonal>Confirm Password</S.TextPersonal>
            <S.Field>
              <Profile />
              <S.Input
                placeholder="Repeat password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </S.Field>
            <S.Save onClick={((newPassword === confirmPassword) && newPassword !== '') && save} active={(newPassword === confirmPassword) && newPassword !== ''}>Save</S.Save>
          </S.PopOver>
        </>
      )}
    </S.Content>
  )
}

