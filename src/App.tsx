import './config/reactotron';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import theme from './global/theme';
import {Navigation} from './presentation/navigation';
import {store} from './application/redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
