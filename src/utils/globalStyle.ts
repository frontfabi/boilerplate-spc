import { createGlobalStyle, css } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      background: ${theme.color.white['ffffff']};
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
  `}
`;
 
export default GlobalStyle;