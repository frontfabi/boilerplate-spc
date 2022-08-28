import styled from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => `
    background: ${theme.color.white['FFFFFF']};
    padding: 96px 148px;
  `}
`;

export const BoxHighlight = styled.div`
  ${({ theme }) => `
    align-items: center;
    background: ${theme.color.white['F4F7FC']};
    border-radius: 25.53px;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 56px;
    padding: 32px;
  `}
`;

export const TextContent = styled.div`
  margin-left: 45px;
`;

export const StyledKeyValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  height: 36px;

  p {
    margin-right: 8px;
  }
`;
