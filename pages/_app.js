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

  const hideLayout =
    route === '/workouts/[workout]' ||
    route === '/workouts/[workout]/[exercise]' ||
    route === '/combos/[combo]' ||
    route === '/faq' ||
    route === '/auth/slash_screen' ||
    route === '/auth/welcome' ||
    route === '/auth/onboarding' ||
    route === '/auth/login' ||
    route === '/auth/signup' ||
    route === '/auth/question' ||
    route === '/auth/resetpassword' ||
    route === '/auth/resetpassword/[resetToken]' ||
    route === '/notifications'

  const { prompt } = useIsIOS()

  const { sPrompt } = useIsSamsung()

  return (
    <>
      <>
        <Reset />
        <FontsStyles />
      </>
      <Redirect>
        {prompt && <InstallPWA />}
        {sPrompt && <InstallPWAS />}
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
