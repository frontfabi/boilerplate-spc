import { white } from './colors/white'
import { lightGray } from './colors/lightGray'
import { green } from './colors/green'
import { neutral } from './colors/neutral'
import { darkGray } from './colors/darkGray'
import { blue } from './colors/blue'
import { yellow } from './colors/yellow'
import { red } from './colors/red'

const theme = {
  color: {
    blue,
    darkGray,
    green,
    lightGray,
    neutral,
    red,
    white,
    yellow,
  },
  font: {
    size: {
      h1: 58.59,
      h2: 46.88,
      h3: 37.5,
      h4: 24,
      p: 20,
      s: 16,
    },
    weight: [300, 400, 500, 600, 700],
    lineHeight: [29, 36, 46, 57, 71]
  }
}

export type StandardType = typeof theme
const Standard: StandardType = {
  ...theme
}
export default Standard