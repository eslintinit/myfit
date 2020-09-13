import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    font-family: 'Muli', sans-serif !important;
  }


  @font-face {
    font-family: 'FuturaHeavy';
    src: local('FuturaHeavy'), url(/fonts/Futura-Heavy.ttf) format('truetype');
  }

  @font-face {
    font-family: 'FuturaMedium';
    src: local('FuturaMedium'), url(/fonts/Futura-medium.ttf) format('truetype');
  }
`
