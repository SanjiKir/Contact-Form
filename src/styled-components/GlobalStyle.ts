import { createGlobalStyle } from '.';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
      
    @media only screen  and (min-width: 1824px) {
      font-size: 16px;
    }
  }

  ::-webkit-scrollbar {
    width: 1.2em;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.scroolbarColor};
    border-radius: 30px;
    border: .2em solid #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.palette.darkDefaultHoverColor}; 
  }

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
