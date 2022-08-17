// .storybook/preview.js

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Standard from '../src/utils/theme';
import GlobalStyle from '../src/utils/globalStyle'
export const decorators = [
  (Story) => (
    <ThemeProvider theme={Standard}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];