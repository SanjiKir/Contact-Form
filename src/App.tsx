import React, { Component } from 'react';

import { ContactList, InfoScreen } from './components';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import GlobalStyle from './styled-components/GlobalStyle';
import { StateProvider } from './store/store';
import { reducer } from './store/reducer';
import ContactListContainer from './containers/ContactListContainer/ContactListContainer';

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
            <InfoScreen />
          </div>
        </>
        </StateProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
