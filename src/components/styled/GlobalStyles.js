import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }

  body {
    background-color: var(--dark);
  }

  html, body {
    font-family: Raleway, Arial, Helvetica, sans-serif;
    
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rock Salt', Arial, Helvetica, sans-serif;

    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  a, p, span, input, label, select {
    font-size: 1.8rem;
  }

  a {
    color: var(--teal);
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  input, label, select {
    font-family: Raleway, Arial, Helvetica, sans-serif;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
