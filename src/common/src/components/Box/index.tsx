import { ReactNode } from 'react'

import { Sizing } from 'common/src/types'

import * as S from './styles'

export type BoxProps = {
  sizing: Partial<Sizing>
  children: ReactNode
}

export const Box = ({ children, sizing }: BoxProps) => {
  return (
    <S.BoxStyle
      {...{
        $sizing: sizing
      }}
    >
      {children}
    </S.BoxStyle>
  )
}
