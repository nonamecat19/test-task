import { createGlobalStyle } from 'styled-components'
import COLORS from "../constants/colors";

const GlobalStyles = createGlobalStyle`
  // default styles reset
  *{
    margin: 0;
  }
  
  // rewriting Ant Design default styles
  .ant-input{
    &:hover, &:focus, &:active{
      border-color: ${COLORS.MAIN} !important;
    }
  }
  .ant-input-password{
    &:hover, &:focus, &:active{
      border-color: ${COLORS.MAIN} !important;
    }
  }
  
  
`
export default GlobalStyles