import { colors } from './tokens/colors';
import { radius } from './tokens/radius';
import { screen } from './tokens/screen';
import { shadow } from './tokens/shadow';
import { spacing } from './tokens/spacing';
import { weight } from './tokens/weight';

const theme = {
  colors,
  spacing,
  shadow,
  radius,
  weight,
  screen
} as const;

export const getTheme = () => {
  return theme;
};
