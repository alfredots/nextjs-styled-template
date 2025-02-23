import { ReactNode } from 'react';

import * as S from './styles';

import { StyleProps } from '@/ui/styles/types';

export type BoxProps = {
  $style?: StyleProps;
  $xs?: StyleProps;
  $sm?: StyleProps;
  $md?: StyleProps;
  $lg?: StyleProps;
  $xl?: StyleProps;
  $2xl?: StyleProps;
  children: ReactNode;
};

export const Box = ({ children, $style }: BoxProps) => {
  return <S.BoxStyle $style={$style}>{children}</S.BoxStyle>;
};
