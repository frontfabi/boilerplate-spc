import type { TextProps } from "types";

import { StyledText } from "./styles";

const Text = ({
  children,
  tag = "p",
  color = "default",
  size = 0,
  lineHeight = 0,
  weight = 1,
}: TextProps) => {
  return (
    <StyledText
      as={tag}
      color={color}
      size={size}
      lineHeight={lineHeight}
      weight={weight}
    >
      {children}
    </StyledText>
  );
};

export { Text };
