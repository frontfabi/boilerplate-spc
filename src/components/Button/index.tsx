import { Text } from 'components/Text';
import { ButtonProps } from 'types';
import { StyledButton } from './styles';

const Button = ({ children, btnStyle = 'normal', btnStatus = 'default', disabled, onClick, ...rest }: ButtonProps) => {
  return (
    <StyledButton btnStyle={btnStyle} btnStatus={btnStatus} disabled={disabled} onClick={onClick} {...rest}>
      <Text weight={3} size={0}>{children}</Text>
    </StyledButton>
  );
};

export { Button };
