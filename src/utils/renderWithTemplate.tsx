import {render} from '@testing-library/react';
import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import theme from 'utils/theme';

import GlobalStyle from './globalStyle';

interface RenderOptions {
  themeObj?: object
}

interface ThemeWrapperProps {
  children: React.ReactElement<any>
}

const renderWithTheme = (
    ui: React.ReactElement<any>,
    renderOptions: RenderOptions = {},
) => {
  const {themeObj = theme, ...options} = renderOptions;
  const ThemeWrapper: React.FC<any> = ({children}: ThemeWrapperProps) => {
    return (
      <ThemeProvider theme={themeObj}>
        <GlobalStyle />
        <Router>{children}</Router>
      </ThemeProvider>
    );
  };

  return render(ui, {wrapper: ThemeWrapper, ...options});
};
export {renderWithTheme};
