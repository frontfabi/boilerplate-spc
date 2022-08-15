import { ReactNode } from "react"

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'strong'

export type TextProps = {
  children: ReactNode | JSX.Element
  tag?: TagType
  color?: string
  size?: number
  lineHeight?: number
  weight?: number
}