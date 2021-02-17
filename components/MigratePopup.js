import React, { useEffect } from 'react'
import * as S from 'styles/migrate_popup'
import Modal from './Modal'

import { useModal } from '../hooks/useModal'

import image from '../public/Logo.svg'

import Close from 'public/icons/Close.svg'
import share from 'public/icons/AppleShare.svg'

const MigratePopup = ({ ...props }) => {
  const [modalOpen, setModalOpen, toggleModal] = useModal()

  useEffect(() => {
    setModalOpen(true)
  }, [])
  return (
    <Modal isActive={modalOpen}>
      <S.Wrapper>
        <S.Modal>
          <h1
            style={{
              fontSize: 28,
              margin: '24px 0px 32px',
            }}
          >
            MEET NEW APP!
          </h1>
          <S.Text>
            We’ve released our new app that’s available for download on the App
            and Play store.
            <br />
            <br />
            Be sure not to miss out on the new exercises available.
            <br />
            <br />
            The current app will be discontinued in the coming days!
          </S.Text>
          <a
            href="https://apps.apple.com/gb/app/myfit-app/id1549972126?l=en"
            target="_blank"
          >
            <img
              style={{ height: 48, marginTop: 24, marginBottom: 8 }}
              src="https://cdn.shopify.com/s/files/1/0518/3347/1136/files/appel.png?v=1609847788"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=app.bravostudio.A01ETNFZH3P55793ABB0MHV5CJ2"
            target="_blank"
          >
            <img
              style={{ height: 48 }}
              src="https://cdn.shopify.com/s/files/1/0518/3347/1136/files/google.png?v=1609847788"
            />
          </a>
        </S.Modal>

        <S.CloseIcon>
          <Close onClick={() => setModalOpen(false)} />
        </S.CloseIcon>
      </S.Wrapper>
    </Modal>
  )
}

export default MigratePopup
