import styled from 'styled-components';

const MAX_WIDTH_CONTAINER = 1264;
const CONTAINER_PADDING = 96;

const StyledContainer = styled('section')<{ fluid?: boolean }>`
  ${({fluid}) => `box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: ${
      fluid ?
        `${MAX_WIDTH_CONTAINER}px` :
        `calc(${MAX_WIDTH_CONTAINER + CONTAINER_PADDING}px)`
};
    padding-left: ${fluid ? 0 : `${CONTAINER_PADDING}px`};
    padding-right: ${fluid ? 0 : `${CONTAINER_PADDING}px`};
    width: 100%; 
    
    @media (max-width: 600px) {
      padding-left: ${fluid ? 0 : '10px'};
      padding-right: ${fluid ? 0 : '10px'};
    }`}
`;
export {StyledContainer};
