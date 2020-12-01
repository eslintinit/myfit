import React, { useState } from 'react'
import Checkbox from './Checkbox.js'
import { useLocalStorage } from 'hooks/useLocalStorage'

// import Picture from '../../icons/banner.png'
// import Close from '../../icons/Close.png'

import * as S from './style.js'

const Banner = () => {
  const [checked, setChecked] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useLocalStorage(
    'bannerDismissed',
    false,
  )
  const [bannerClosed, setBannerClosed] = useState(bannerDismissed)
  if (bannerClosed) return <div />

  return (
    <S.Outer>
      <S.Bg>
        <S.Image src={'https://i.imgur.com/dq1kaHQ.png'} />
        <S.Block
          action="https://formspree.io/f/xqkgdwjq"
          method="POST"
          onSubmit={(e) => {
            if (!checked) {
              alert('You must accept our privacy policy')
              e.preventDefault()
              return
            }
            alert(`Thanks you! We'll get in touch as soon as we are re-stock`)
            setBannerClosed(true)
            setBannerDismissed(true)
          }}
        >
          <S.Box
            src={'https://i.imgur.com/y92gtZM.png'}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setBannerClosed(true)
            }}
          />
          <S.Head>get 20% off</S.Head>
          <S.Text>
            we are currently out of stock!
            <br /> sign up to our newsletter
            <br /> and receive 20% off your first order when we are re-stock
          </S.Text>
          <S.EmailBlock
            type="email"
            id="email"
            name="email"
            placeholder="email address"
          />
          <S.Policy>
            <label>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <S.PolicyText>i accept the private policy</S.PolicyText>
            </label>
          </S.Policy>
          <S.SignUp type="submit" value="Submit">
            sign up
          </S.SignUp>
        </S.Block>
      </S.Bg>
    </S.Outer>
  )
}

export default Banner
