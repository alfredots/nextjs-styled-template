import { minWidth } from './functions/make-media-query';
import { setSpacing } from './functions/spacing';
import { colors } from './tokens/colors';
import { fontSize } from './tokens/font-size';
import { fontWeight } from './tokens/font-weight';
import { lineHeight } from './tokens/line-height';
import { radius } from './tokens/radius';
import { screen } from './tokens/screen';
import { shadow } from './tokens/shadow';
import { spacing } from './tokens/spacing';

const theme = {
  colors,
  spacing,
  shadow,
  radius,
  fontSize,
  fontWeight,
  lineHeight,
  screen,
  utilities: {
    minWidth,
    setSpacing
  }
} as const;

export const getTheme = () => {
  return theme;
};
