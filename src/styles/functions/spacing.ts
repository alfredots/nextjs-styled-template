import { getTheme } from 'styles';

const theme = getTheme();

type spacingProps = keyof typeof theme.spacing;

export const spacing = (
  value1: spacingProps,
  value2?: spacingProps,
  value3?: spacingProps,
  value4?: spacingProps
) => {
  const addValue2 = value2 ? ' ' + theme.spacing[value2] : '';
  const addValue3 = value3 ? ' ' + theme.spacing[value3] : '';
  const addValue4 = value4 ? ' ' + theme.spacing[value4] : '';

  return theme.spacing[value1] + addValue2 + addValue3 + addValue4;
};
