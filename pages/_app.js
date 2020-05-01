import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

function MyApp({ Component, pageProps }) {

//localStorage.setItem('token', "");

const link = new HttpLink({
  headers: { "Authorization": "Bearer " + localStorage.getItem('token') },
  uri: "http://localhost:4000/"
})

const client = new ApolloClient({
  link
});


  return (
    <>
    <ApolloProvider client={client}>
      <FontsStyles />
      <Reset />
      <Component {...pageProps} />
    </ApolloProvider>
    </>
  )
}

export default MyApp
