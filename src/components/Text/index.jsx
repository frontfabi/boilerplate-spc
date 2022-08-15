import { TextProps } from 'types';
import { StyledText } from './styles';

const Text = ({ children, tag = 'p', color, size, lineHeight, weight }: TextProps) => {
  return (
    <StyledText as={tag} color={color} size={size} lineHeight={lineHeight} weight={weight}>
      {children}
    </StyledText>
  );
};

export { Text };
