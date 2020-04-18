import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FontsStyles />
      <Reset />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
