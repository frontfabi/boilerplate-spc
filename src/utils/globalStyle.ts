import {createGlobalStyle, css} from 'styled-components';

import {StandardType} from './theme';

const GlobalStyle = createGlobalStyle<{ theme: StandardType }>`
  ${({theme}) => css`
    body {
      font-family: "Montserrat";
      margin: 0 !important;
      padding: 0 !important;
      background: ${theme.color.white.F2F2F2};

      [disabled] {
        opacity: 0.55;
        cursor: not-allowed;
      }
    }
  `}
`;

export default GlobalStyle;
