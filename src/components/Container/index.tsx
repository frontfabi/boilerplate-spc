import { ContainerProps } from 'types';

import { StyledContainer } from './styles';

const Container = ({ children, fluid }: ContainerProps) => {
  return <StyledContainer fluid={fluid}>{children}</StyledContainer>;
};

export { Container };
