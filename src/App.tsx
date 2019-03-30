import React, { Component } from 'react';

import { ContactList, InfoScreen } from './components';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import GlobalStyle from './styled-components/GlobalStyle';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div style={{display: 'flex'}}>
          <ContactList />
          <InfoScreen />
        </div>
      </>
      </ThemeProvider>
    );
  }
}

export default App;
