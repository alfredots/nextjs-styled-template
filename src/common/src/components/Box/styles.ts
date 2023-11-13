import styled, { css } from 'styled-components'

import { convertObjectToStyle } from 'common/src/utils/convert-object-to-style'

import { BoxProps } from '.'

type BoxStyleProps = {
  $sizing?: BoxProps['sizing']
}

export const BoxStyle = styled.div<BoxStyleProps>`
  ${({ $sizing }) => css`
    ${$sizing && convertObjectToStyle($sizing)}
  `}
`
