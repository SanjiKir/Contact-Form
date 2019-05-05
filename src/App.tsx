// What I was missing was the link to the deployed version of this app. You could try netlify.com, it takes just a few mins and others could see the app without running it localy ;) 
import React, { Component } from 'react';

import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import GlobalStyle from './styled-components/GlobalStyle';
import { StateProvider } from './store/store';
import { reducer } from './store';
import { AppContainer} from './containers';

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
        <StateProvider reducer={reducer}>
        <>
          <GlobalStyle />
          <AppContainer />
        </>
        </StateProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
