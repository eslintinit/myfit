import React, { useEffect } from 'react'
import * as S from 'styles/install_prompt'
import Modal from './Modal'

import { useModal } from '../hooks/useModal'

import image from '../public/Logo.svg'

import Close from 'public/icons/Close.svg'
import share from 'public/icons/AppleShare.svg'

export const InstallPWAS = ({ ...props }) => {
  const [modalOpen, setModalOpen, toggleModal] = useModal()

  useEffect(() => {
    setModalOpen(true)
  }, [])
  return (
    <Modal isActive={modalOpen}>
      <S.Wrapper>
        <S.Modal>
          <div>
            <S.Logo src="https://i.imgur.com/H8eQbwm.png" alt="Install PWA" />
          </div>
          <S.Heading>Install MyFit!</S.Heading>
          <S.Text>
            Install this application on your homescreen for a better experience.
          </S.Text>
          <S.Text
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 0,
            }}
          >
            Tap
            <img
              src="/icons/AppleShare.svg"
              style={{ margin: '8px 4px 8px' }}
              alt="Add to homescreen"
              height="20"
              width="20"
            />
            then &quot;Add to Home Screen&quot;
          </S.Text>
        </S.Modal>

        <S.CloseIcon>
          <Close onClick={() => setModalOpen(false)} />
        </S.CloseIcon>
      </S.Wrapper>
    </Modal>
  )
}
