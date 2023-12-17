import { spacing } from 'styles/tokens/spacing';

type spacingProps = keyof typeof spacing;

export const setSpacing = (
  value1: spacingProps,
  value2?: spacingProps,
  value3?: spacingProps,
  value4?: spacingProps
) => {
  const addValue2 = value2 ? ' ' + spacing[value2] : '';
  const addValue3 = value3 ? ' ' + spacing[value3] : '';
  const addValue4 = value4 ? ' ' + spacing[value4] : '';

  return spacing[value1] + addValue2 + addValue3 + addValue4;
};
