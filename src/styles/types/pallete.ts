import { ThemeType } from 'styles';

export type PalleteProps = {
  color: keyof ThemeType['colors'];
  bgColor: keyof ThemeType['colors'];
};
