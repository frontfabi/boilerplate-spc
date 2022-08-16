import { createGlobalStyle, css } from 'styled-components';
import {StandardType} from './theme';

const GlobalStyle = createGlobalStyle<{ theme: StandardType}>`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      background: ${theme.color.white.FFFFFF};
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
  `}
`;
 
export default GlobalStyle;