import { Reset } from 'styled-reset'
import FontsStyles from 'styles/fonts'
import { withApollo } from '../apollo/client'

/* import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hoc";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from 'node-fetch';
 */
//import Cookie from 'js-cookie';
//import { parseCookies } from "../lib/parseCookies";

function MyApp({ Component, pageProps, /* token */ }) {

//console.log (token);




/* const cache = new InMemoryCache();
const link = new HttpLink({
  headers: { "Authorization": "Bearer " + token},
  uri: "http://90.188.249.253:4000/",
  fetch
  
});

const client = new ApolloClient({
  link,
  cache
}); */


  return (
    <>
    
      <FontsStyles />
      <Reset />
      <Component {...pageProps} />
    
    </>
  )
}


/*   MyApp.getInitialProps = ({ ctx }) => {
  //console.log(ctx.req);

  

   const cookies = parseCookies(ctx.req);
    console.log("cookies = ", cookies);
  return {
    token: cookies.token
  }; 
   
};   */

export default withApollo(MyApp)
