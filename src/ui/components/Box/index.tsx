import { ReactNode } from 'react';

import * as S from './styles';

import { Sizing } from '@/ui/components/Box/types';

export type BoxProps = {
  sizing: Partial<Sizing>;
  children: ReactNode;
};

export const Box = ({ children, sizing }: BoxProps) => {
  return (
    <S.BoxStyle
      {...{
        $sizing: sizing
      }}
    >
      {children}
    </S.BoxStyle>
  );
};
