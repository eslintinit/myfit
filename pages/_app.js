import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from 'node-fetch';

import Cookie from 'js-cookie';
import { parseCookies } from "../lib/parseCookies";

function MyApp({ Component, pageProps, token }) {

Cookie.set("token", "");

console.log(JSON.stringify(token));


const cache = new InMemoryCache();
const link = new HttpLink({
  headers: { "Authorization": "Bearer " + token },
  uri: "http://localhost:4000/",
  fetch: fetch
})

const client = new ApolloClient({
  link,
  cache
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

MyApp.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx);

  return {
    token: cookies.token
  };
};

export default MyApp
