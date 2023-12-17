import { CSSProp, css } from 'styled-components';
import { screen } from 'styles/tokens/screen';

export const minWidth = (
  mediaQuery: keyof typeof screen,
  styleCss: CSSProp
) => {
  return css`
    @media (min-width: ${screen[mediaQuery]}) {
      ${styleCss}
    }
  `;
};
