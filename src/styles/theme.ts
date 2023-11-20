import { breakpoints } from './tokens/breakpoints'
import { colors } from './tokens/colors'
import { radius } from './tokens/radius'
import { shadow } from './tokens/shadow'
import { spacing } from './tokens/spacing'
import { typography } from './tokens/typography'
import { weight } from './tokens/weight'

const theme = {
  colors,
  typography,
  spacing,
  shadow,
  radius,
  weight,
  breakpoints
} as const

export const getTheme = () => {
  return theme
}
