import { StyledContainer } from './styles';
import { ContainerProps } from 'types'

const Container = ({ children, fluid }: ContainerProps) => {
  return (
    <StyledContainer fluid={fluid}>
      {children}
    </StyledContainer>
  );
};

export { Container };
