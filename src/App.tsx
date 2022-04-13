import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './global/theme';
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
