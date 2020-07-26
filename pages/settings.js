import Sidebar from 'components/Sidebar'
import { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import { withStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import { grey } from '@material-ui/core/colors'

import Cookie from 'js-cookie'

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
    // color: '#000',
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
    // color: '#000',
    '&$checked': {
      color: '#FA4504',
    },
    '&$checked + $track': {
      backgroundColor: '#FFF',
    },
  },
  checked: {},
  track: {},
})(Switch)

const RSwitch = withStyles({
  switchBase: {
    // color: '#000',
    '&$checked': {
      color: '#FA4504',
    },
    '&$checked + $track': {
      backgroundColor: '#000',
    },
  },
  checked: {},
  track: {},
})(Switch)

export default () => {
  const [showChangeEmail, setShowChangeEmail] = useState(false)
  const [showChangeName, setShowChangeName] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [push, setPush] = typeof window !== 'undefined' && useState({
    newVideo: window.localStorage.getItem('newVideo'),
    newProduct: window.localStorage.getItem('newProduct'),
    updates: window.localStorage.getItem('updates'),
  })

  console.log(window.localStorage.getItem('newVideo'))
  
  const token = Cookie.get('token')

  
  const handleChange = (event) => {
    setPush({ ...push, [event.target.name]: event.target.checked })
    window.localStorage.setItem(`${event.target.name}`, event.target.checked)
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
  const [changeName] = useMutation(CHANGE_NAME, {
    context: { headers: { Authorization: 'Bearer ' + token } },
    onCompleted({ changeName }) {
      setName(changeName.name)
    },
  })

  const CHANGE_EMAIL = gql`
    mutation changeEmail($email: String!) {
      changeEmail(email: $email) {
        email
      }
    }
  `
  const [changeEmail] = useMutation(CHANGE_EMAIL, {
    context: { headers: { Authorization: 'Bearer ' + token } },
    onCompleted({ changeEmail }) {
      setEmail(changeEmail.email)
    },
  })

  const CHANGE_PASSWORD = gql`
    mutation changePassword($password: String!) {
      changePassword(password: $password) {
        email
      }
    }
  `
  const [changePassword] = useMutation(CHANGE_PASSWORD,{
    context: { headers: { Authorization: 'Bearer ' + token } },
  })

  const close = () => {
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
      changePassword({ variables: { password: newPassword } })
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
              checked={push.newVideo}
              onChange={handleChange}
              name="newVideo"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </S.InfoNotification>
          <S.InfoNotification>
            <S.Text>About new product</S.Text>
            <Switch
              size="small"
              checked={push.newProduct}
              onChange={handleChange}
              name="newProduct"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </S.InfoNotification>
          <S.InfoNotification>
            <S.Text>MyFit Updates</S.Text>
            <Switch
              size="small"
              checked={push.updates}
              onChange={handleChange}
              name="updates"
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
          <AnimatePresence>
            <S.Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
          </AnimatePresence>
          <AnimatePresence>
            <S.PopOver
              initial={{ marginBottom: -343 }}
              animate={{ marginBottom: 0 }}
              exit={{ marginBottom: -343 }}
            >
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
              <S.Save
                onClick={validate(newEmail) && save}
                active={validate(newEmail)}
              >
                Save
              </S.Save>
            </S.PopOver>
          </AnimatePresence>
        </>
      )}
      {showChangeName && (
        <>
          <AnimatePresence>
            <S.Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
          </AnimatePresence>
          <AnimatePresence>
            <S.PopOver
              initial={{ marginBottom: -343 }}
              animate={{ marginBottom: 0 }}
              exit={{ marginBottom: -343 }}
            >
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
              <S.Save onClick={newName !== '' && save} active={newName !== ''}>
                Save
              </S.Save>
            </S.PopOver>
          </AnimatePresence>
        </>
      )}
      {showChangePassword && (
        <>
          <AnimatePresence>
            <S.Overlay
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          <AnimatePresence>
            <S.PopOver
              initial={{ marginBottom: -343 }}
              animate={{ marginBottom: 0 }}
              exit={{ marginBottom: -343 }}
            >
              <S.Caption>
                <S.TextPopOver>Your New Password</S.TextPopOver>
                <Close onClick={close} />
              </S.Caption>
              <S.TextPersonal>Password</S.TextPersonal>
              <S.Field style={{ marginBottom: 24 }}>
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
              <S.Save
                onClick={
                  newPassword === confirmPassword && newPassword !== '' && save
                }
                active={newPassword === confirmPassword && newPassword !== ''}
              >
                Save
              </S.Save>
            </S.PopOver>
          </AnimatePresence>
        </>
      )}
    </S.Content>
  )
}
