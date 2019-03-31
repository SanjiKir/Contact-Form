import React, { Component } from 'react';

import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import GlobalStyle from './styled-components/GlobalStyle';
import { StateProvider } from './store/store';
import { reducer } from './store';
import ContactListContainer from './containers/ContactListContainer/ContactListContainer';
import { MainScreenContainer } from './containers';

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
        <StateProvider reducer={reducer}>
        <>
          <GlobalStyle />
          <div style={{display: 'flex'}}>
            <ContactListContainer />
            <MainScreenContainer />
          </div>
        </>
        </StateProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
