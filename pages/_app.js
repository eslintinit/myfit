import { useRouter } from 'next/router'
import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'
import Layout from 'components/Layout'

import Cookie from 'js-cookie'

import 'styles/index.css'

import { ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hoc'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
//import { parseCookies } from '../lib/parseCookies'

import Redirect from '../components/Redirect'

// https://vimeo.com/108980280 - Canyon
// https://vimeo.com/248940683 - Apple Watch
function MyApp({ Component, pageProps }) {

  const token = Cookie.get('token')

  const { route } = useRouter()
  console.log(route)
  const hideLayout =
    route === '/workouts/[workout]' ||
    route === '/workouts/[workout]/[exercise]' ||
    route === '/combos/[combo]' ||
    route === '/question' ||
    route === '/player' ||
    route === '/player/one' ||
    route === '/player/two' ||
    route === '/player/three' ||
    route === '/faq' ||
    route === '/auth/slash_screen' ||
    route === '/auth/welcome' ||
    route === '/auth/onboarding' ||
    route === '/auth/login' ||
    route === '/auth/signup' ||
    route === '/auth/question' ||
    route === '/auth/resetpassword' ||
    route === '/auth/resetpassword/[resetToken]'

  // https://backend.jjjuk.now.sh/
  const cache = new InMemoryCache()
  const link = new HttpLink({
    headers: { Authorization: 'Bearer ' + token },
    uri: 'https://backend.jjjuk.now.sh',
    fetch,
  })

  const client = new ApolloClient({
    link,
    cache,
    
  })

  return (
    <>
      <ApolloProvider client={client}>      
        <>
          <Reset />
          <FontsStyles />
        </>
        <Redirect>
          {hideLayout ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </Redirect>
      </ApolloProvider>
    </>
  )
}



/* MyApp.getInitialProps = ({ ctx }) => {
  console.log('ctx.req = ', ctx.req.headers);
  const cookies = parseCookies(ctx.req)
  // const cookies = parseCookies(req);
  console.log('cookies = ', cookies)
  return {
    token: cookies.token,
  }
} */

export default MyApp
