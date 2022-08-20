import styled, { css } from "styled-components"
import type { TextProps } from "types"


export const StyledText = styled.p<TextProps>`
  position: relative;
  margin: 0;
  padding: 0;
  ${({ theme, color, size, lineHeight, weight }) => css`
    ${color && `color: ${theme.font.color[color]}`};
    font-size: ${theme.font.size[size ?? 0]}px;
    font-weight: ${theme.font.weight[weight ?? 0]};
    line-height: ${lineHeight ? `${theme.font.lineHeight[lineHeight]}px` : 1.2};
  `};
`