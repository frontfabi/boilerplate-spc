import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 768px) {
    grid-column-gap: 36px;
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: 1024px) {
    grid-column-gap: 24px;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export {StyledGrid};
