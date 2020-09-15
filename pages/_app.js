import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'
import Layout from 'components/Layout'
import React from 'react'
import useIsIOS from '../hooks/useIsIOS'
import { InstallPWA } from '../components/InstallPWA'
import { InstallPWAS } from '../components/InstallPWAS'

import useIsSamsung from '../hooks/useIsSamsung'

import { withApollo } from 'lib/apollo'

import Cookie from 'js-cookie'

import 'styles/index.css'

import Redirect from '../components/Redirect'

function MyApp({ Component, pageProps }) {
  const token = Cookie.get('token')
  const { route, events } = useRouter()

  useEffect(() => {
    events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0)
    })
  }, [])

  useEffect(() => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.document.addEventListener(
        'touchmove',
        (e) => {
          if (e.scale !== 1) {
            e.preventDefault()
          }
        },
        { passive: false },
      )
    }
  }, [])

  let hideLayout = !route.startsWith('/app')

  if (!hideLayout) {
    hideLayout =
      route === '/app/workouts/[workout]' ||
      route === '/app/workouts/[workout]/[exercise]' ||
      route === '/app/combos/[combo]' ||
      route === '/app/faq' ||
      route === '/app/auth/slash_screen' ||
      route === '/app/auth/welcome' ||
      route === '/app/auth/onboarding' ||
      route === '/app/auth/login' ||
      route === '/app/auth/signup' ||
      route === '/app/auth/question' ||
      route === '/app/auth/resetpassword' ||
      route === '/app/auth/resetpassword/[resetToken]' ||
      route === '/app/notifications'
  }

  const { prompt } = useIsIOS()

  const { sPrompt } = useIsSamsung()

  const isApp = route.startsWith('/app')

  if (!isApp) {
    return (
      <>
        <Reset />
        <FontsStyles />
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <>
      <>
        <Reset />
        <FontsStyles />
      </>
      <Redirect>
        {process.browser && prompt && <InstallPWA />}
        {hideLayout ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Redirect>
    </>
  )
}

export default withApollo()(MyApp)
