import { CSSProp, css } from 'styled-components'

import { minWidth } from 'styles/tokens/media'

export const makeMediaQueryMinWidth = (
  mediaQuery: keyof typeof minWidth,
  styleCss: CSSProp
) => {
  return css`
    @media ${minWidth[mediaQuery]} {
      ${styleCss}
    }
  `
}
