import { createGlobalStyle, css } from 'styled-components';
import {StandardType} from './theme';

const GlobalStyle = createGlobalStyle<{ theme: StandardType}>`
  ${({ theme }) => css`
    body {
      font-family: 'Montserrat';
      margin: 0;
      padding: 0;
      background: ${theme.color.white['F2F2F2']};
    }
  `}
`;
 
export default GlobalStyle;