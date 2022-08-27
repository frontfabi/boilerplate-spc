import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';

import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/globalStyle';
import Standard from './utils/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
console.log(Standard);
root.render(
    <React.StrictMode>
      <ThemeProvider theme={Standard}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
