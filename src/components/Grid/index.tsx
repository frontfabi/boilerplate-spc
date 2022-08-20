import { StyledGrid } from './styles';
import { GridProps } from 'types'

const Grid = ({ children }: GridProps) => {
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  );
};

export { Grid };
