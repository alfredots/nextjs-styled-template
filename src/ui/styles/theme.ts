import { breakpoints } from '@/ui/styles/tokens/breakpoints';
import { colors } from '@/ui/styles/tokens/colors';
import { fontSize } from '@/ui/styles/tokens/font-size';
import { fontWeight } from '@/ui/styles/tokens/font-weight';
import { lineHeight } from '@/ui/styles/tokens/line-height';
import { radius } from '@/ui/styles/tokens/radius';
import { shadow } from '@/ui/styles/tokens/shadow';
import { sizing } from '@/ui/styles/tokens/sizing';
import { spacing } from '@/ui/styles/tokens/spacing';

const theme = {
  colors,
  spacing,
  shadow,
  radius,
  sizing,
  fontSize,
  fontWeight,
  lineHeight,
  breakpoints
} as const;

export const getTheme = () => {
  return theme;
};

export const themeBase = getTheme();

export type ThemeProps = typeof theme;
