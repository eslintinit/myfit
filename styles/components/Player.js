import styled from 'styled-components'
import { BLACK, DARK_GREY, PRIMARY } from 'styles/colors'

export const Active = styled.div`
  height: 2px;
  width: 35%;
  background: ${PRIMARY};
  border-radius: 8px;
`

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BLACK};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 24px;
  margin-top: -20px;
  position: fixed;
  max-width: 100vw;
  width: 100vw;
  position: fixed;
  bottom: 164px;
  padding-bottom: 20px;
`

export const VideoNavigation = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

export const Timeline = styled.div`
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  color: ${DARK_GREY};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: calc(100% - 32px);
  margin: 16px;
`

export const Line = styled.div`
  height: 2px;
  width: 75vw;
  background: rgba(189, 189, 189, 0.35);
  border-radius: 8px;
  margin: 0px 4px;
`

// :focus::-webkit-slider-runnable-track {
//   background: red;
// }

//   ::-webkit-slider-runnable-track {
//     width: 100%;
//     height: 8.4px;
//     cursor: pointer;
//     box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
//     background: green;
//     border-radius: 1.3px;
//     border: 0.2px solid #010101;
//   }
// https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
export const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  margin: 0px 4px;
  background: transparent;
  border-radius: 8px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    height: 2px;
    border-radius: 8px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    height: 24px;
    width: 24px;
    border-radius: 50px;
    margin-top: -11px;
    # background-color: ${PRIMARY};
    background-color: transparent};
  }

  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(${(props) => props.value}, ${PRIMARY}),
    color-stop(${(props) => props.value}, rgba(189, 189, 189, 0.35))
  );
`
