import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
