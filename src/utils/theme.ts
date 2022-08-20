import { blue } from './colors/blue'
import { darkGray } from './colors/darkGray'
import { green } from './colors/green'
import { lightGray } from './colors/lightGray'
import { neutral } from './colors/neutral'
import { red } from './colors/red'
import { white } from './colors/white'
import { yellow } from './colors/yellow'

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
      danger: red['B90000'],
      default: neutral['586682'],
      buttonLabel: white['FFFFFF'],
      link: blue['1F3C75']  
    }
  },
  button: {
    default: {
      bg: blue['144695'],
      text: white['FFFFFF'],
      border: blue['144695']
    },
    primary: {
      bg: blue['007BFF'],
      text: white['FFFFFF'],
      border: blue['007BFF']
    },
    alternative: {
      bg: darkGray[797979],
      text: white['FFFFFF'],
      border: darkGray[797979]
    },
    disabled: {
      bg: neutral['9DB3D4'],
      text: white['FFFFFF'],
      border: neutral['9DB3D4']
    }
  }
}

export type StandardType = typeof theme
const Standard: StandardType = {
  ...theme
}
export default Standard