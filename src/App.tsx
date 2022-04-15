import './config/reactotron';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import themes from './global';
import {Navigation} from './presentation/navigation';
import {store} from './application/redux';
import AppProvider from './application/context';
import {useColorScheme} from 'react-native';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme =
    deviceTheme && deviceTheme === 'dark' ? themes[deviceTheme] : themes.light;

  return (
    <Provider store={store}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </AppProvider>
    </Provider>
  );
};

export default App;
