import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
  background-color:${(props) => props.theme.bgColor};
  ::-webkit-scrollbar {
    display: none;
  }
}

`;

export default GlobalStyle;
