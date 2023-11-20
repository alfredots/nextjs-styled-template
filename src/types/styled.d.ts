// styled.d.ts
import 'styled-components'

import { getTheme } from 'styles/theme'

const theme = getTheme()
type ThemeInterface = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
