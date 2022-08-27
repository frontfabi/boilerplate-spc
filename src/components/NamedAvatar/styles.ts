import styled, { css } from 'styled-components';

import { yellow } from './../../utils/colors/yellow';

const StyledNamedAvatar = styled.div`
  position: relative;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    border: 1px solid ${theme.color.yellow.FFBF2E};

    p {
      color: ${theme.color.yellow.FFBF2E};
    }
  `}
`;

export { StyledNamedAvatar };
