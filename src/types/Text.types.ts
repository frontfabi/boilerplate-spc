import { ReactNode } from "react"

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'strong'

export type FontColorType = 'text' | 'title' | 'success' | 'default' | 'buttonLabel' | 'link' | 'danger'

export type LineHeightType = 0 | 1 | 2 | 3 | 4
export type WeightType = 0 | 1 | 2 | 3 | 4
export type SizeType = 0 | 1 | 2 | 3 | 4 | 5 | number

export type TextProps = {
  children: ReactNode | JSX.Element
  tag?: TagType
  color?: FontColorType
  size?: SizeType
  lineHeight?: LineHeightType
  weight?: WeightType
}
