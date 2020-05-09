import { useRouter } from 'next/router'
import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'
import Layout from 'components/Layout'
import 'styles/index.css'

// https://vimeo.com/108980280 - Canyon
// https://vimeo.com/248940683 - Apple Watch
function MyApp({ Component, pageProps }) {
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
    route === '/slash_screen' ||
    route === '/wellcome_screen' ||
    route === '/onboarding' ||
    route === '/login' ||
    route === '/sign_up'

  return (
    <>
      <>
        <Reset />
        <FontsStyles />
      </>
      {hideLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default MyApp
