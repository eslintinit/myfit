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
          onSubmit={(ev) => {
            if (!checked) {
              alert('You must accept our privacy policy')
              ev.preventDefault()
              return
            }

            ev.preventDefault()
            const form = ev.target
            const data = new FormData(form)
            const xhr = new XMLHttpRequest()
            xhr.open(form.method, form.action)
            xhr.setRequestHeader('Accept', 'application/json')
            xhr.onreadystatechange = () => {
              if (xhr.readyState !== XMLHttpRequest.DONE) return
              if (xhr.status === 200) {
                form.reset()
                alert(
                  `Thank you, we'll get in touch as soon as we've re-stocked`,
                )
                setBannerClosed(true)
                setBannerDismissed(true)
                // this.setState({ status: "SUCCESS" });
              } else {
                // this.setState({ status: "ERROR" });
              }
            }
            xhr.send(data)
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
              <S.PolicyText>
                i accept the
                <S.PolicyLink target="_blank" href="https://my-fit.io/policy">
                  private policy
                </S.PolicyLink>
              </S.PolicyText>
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
