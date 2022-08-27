import { GridProps } from "types";

import { StyledGrid } from "./styles";

const Grid = ({ children }: GridProps) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export { Grid };
