import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '../src/global/lightTheme';

export const RenderWithTheme: React.FC = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
