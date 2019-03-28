import React, { Component } from 'react';

import { TextAreaField, InputField } from './components';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import GlobalStyle from './styled-components/GlobalStyle';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <>
          <GlobalStyle />
          <InputField label="zhopa" />
          <TextAreaField />
      </>
      </ThemeProvider>
    );
  }
}

export default App;
