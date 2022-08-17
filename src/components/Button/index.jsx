import { StyledButton } from './styles';

const Button = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export { Button };
