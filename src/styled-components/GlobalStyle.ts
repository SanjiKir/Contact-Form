import { createGlobalStyle } from '.';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.palette.backgroundColor};
    min-height: 100vh;
  }
`;

export default GlobalStyle;
