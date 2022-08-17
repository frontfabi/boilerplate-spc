import styled, { css } from "styled-components"
import type { TextProps } from "types"
export const StyledText = styled.p<TextProps>`
  position: relative;
  margin: 0;
  padding: 0;
  ${({ theme, color, size, lineHeight, weight }) => css`
    ${color && `color: ${theme.font.color[color]}`};
    ${size && `font-size: ${theme.font.size[size ?? 0]}px`};
    ${weight && `font-weight: ${theme.font.weight[weight ?? 0]}`};
    ${lineHeight && `line-height: ${theme.font.lineHeight[lineHeight ?? 0]}px`};
  `};
`