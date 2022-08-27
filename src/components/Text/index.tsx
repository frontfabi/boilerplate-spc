import type { TextProps } from 'types';

import { StyledText } from './styles';

const Text = ({
  id,
  children,
  tag = 'p',
  color = 'default',
  size = 0,
  lineHeight = 0,
  weight = 1,
  ...rest
}: TextProps) => {
  return (
    <StyledText
      id={id}
      as={tag}
      color={color}
      size={size}
      lineHeight={lineHeight}
      weight={weight}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export { Text };
