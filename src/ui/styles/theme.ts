import { colors } from './tokens/colors';
import { fontSize } from './tokens/font-size';
import { fontWeight } from './tokens/font-weight';
import { lineHeight } from './tokens/line-height';
import { radius } from './tokens/radius';
import { screen } from './tokens/screen';
import { shadow } from './tokens/shadow';
import { sizing } from './tokens/sizing';
import { spacing } from './tokens/spacing';

const theme = {
  colors,
  spacing,
  shadow,
  radius,
  sizing,
  fontSize,
  fontWeight,
  lineHeight,
  screen
} as const;

export const getTheme = () => {
  return theme;
};

const themeBase = getTheme();

export type ThemeType = typeof themeBase;
