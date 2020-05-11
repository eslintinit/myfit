import { useRouter } from 'next/router'
import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'
import Layout from 'components/Layout'

import 'styles/index.css'

import { ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hoc'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import { parseCookies } from '../lib/parseCookies'

import Redirect from '../components/Redirect'

// https://vimeo.com/108980280 - Canyon
// https://vimeo.com/248940683 - Apple Watch
function MyApp({ Component, pageProps, token }) {
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
    route === '/auth/signup'

// http://90.188.249.253:4000/
  const cache = new InMemoryCache()
  const link = new HttpLink({
    headers: { Authorization: 'Bearer ' + token },
    uri: 'http://localhost:4000/',
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

<<<<<<< HEAD
MyApp.getInitialProps = ({ ctx }) => {
  //console.log(ctx.req);
  const cookies = parseCookies(ctx.req)
  console.log('cookies = ', cookies)
=======

MyApp.getInitialProps = ({ req })  => {
    //console.log('req = ', req.cookie);  
    const cookies = parseCookies(req);
    console.log("cookies = ", cookies);
>>>>>>> d8fa244b4c158a5864a66a60b17bc16ddb0b4653
  return {
    token: cookies.token,
  }
}

export default MyApp
