import { DefaultTheme } from 'styled-components'

import { colors } from './tokens/colors'
import { radius } from './tokens/radius'
import { shadow } from './tokens/shadow'
import { spacing } from './tokens/spacing'
import { typography } from './tokens/typography'
import { weight } from './tokens/weight'

export const theme: DefaultTheme = {
  colors,
  typography,
  spacing,
  shadow,
  radius,
  weight
} as const
