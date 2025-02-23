import { ThemeType } from '@/ui/styles/theme';

export type PalleteProps = {
  color: keyof ThemeType['colors'];
  bgColor: keyof ThemeType['colors'];
};
