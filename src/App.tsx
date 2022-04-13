import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './global/theme';
import {Navigation} from './navigation';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
