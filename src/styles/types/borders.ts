import { ThemeType } from 'styles';

export type BordersProps = {
  border: keyof ThemeType['sizing'];
  borderTop: keyof ThemeType['sizing'];
  borderLeft: keyof ThemeType['sizing'];
  borderRight: keyof ThemeType['sizing'];
  borderBottom: keyof ThemeType['sizing'];
  borderColor: keyof ThemeType['colors'];
  borderTopColor: keyof ThemeType['colors'];
  borderRightColor: keyof ThemeType['colors'];
  borderBottomColor: keyof ThemeType['colors'];
  borderLeftColor: keyof ThemeType['colors'];
  borderRadius: keyof ThemeType['colors'];
};
