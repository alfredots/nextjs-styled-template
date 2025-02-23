import { CSSProp, css } from 'styled-components';

import { getTheme } from '../theme';

const defaultTheme = getTheme();

export const makeMinWidth = (mediaQuery: keyof typeof defaultTheme.breakpoints, styleCss: CSSProp) => {
  return css`
    @media (min-width: ${defaultTheme.breakpoints[mediaQuery]}) {
      ${styleCss}
    }
  `;
};
