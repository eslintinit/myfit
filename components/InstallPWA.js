import React, { useEffect } from "react"
import Modal from "./Modal"
import { useModal } from "../hooks/useModal"


import image from '../public/Logo.svg'
import share from '../public/icons/AppleShare.svg'

export const InstallPWA = ({...props}) => {
    const [modalOpen, setModalOpen, toggleModal] = useModal();
    
    useEffect(
        () => {
          setModalOpen(true)
        }, []
    )
    return (
          <Modal isActive={modalOpen}>
              <div>
                  <div style={{maxWidth: "400px"}}>
                      <div style={{marginTop: "-50px"}} >
                          <img
                              src={image}
                              height="72"
                              width="72"
                              alt="Install PWA"
                              />
                      </div>
                      <div>
                          <h3>Install Myfit!</h3>
                      </div>
                      <p>Install this application on your homescreen for a better experience.</p>
                      <div>
                          <p>
                          Tap
                          <img
                              src={share}
                              style={{margin: "auto 4px 8px"}}                              
                              alt="Add to homescreen"
                              height="20"
                              width="20"
                              />
                          then &quot;Add to Home Screen&quot;
                          </p>
                      </div>
                      <button onClick={() => setModalOpen(false)}>Close</button>
                  </div>
              </div>
          </Modal>
      )
  }
