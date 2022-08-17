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
    size: [16, 20, 24, 37.5, 46.88, 58.59],
    weight: [300, 400, 500, 600, 700],
    lineHeight: [29, 36, 46, 57, 71],
    color: {
      text: darkGray['494E58'],
      title: darkGray['2B2F38'],
      success: green['00B912'],
      inputDefault: neutral['586682'],
      buttonLabel: white['FFFFFF'],
      link: blue['1F3C75']  
    }
  },
  button: {
    primary: {}
  }
}

export type StandardType = typeof theme
const Standard: StandardType = {
  ...theme
}
export default Standard