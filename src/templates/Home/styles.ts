import styled, { css } from 'styled-components'

import { makeMediaQueryMinWidth } from 'styles'

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors['primary-500']};
    font-size: ${theme.typography['2xl'].fontSize};
    letter-spacing: ${theme.typography['2xl'].letterSpacing};
    line-height: ${theme.typography['2xl'].lineHeight};

    ${makeMediaQueryMinWidth(
      'lg',
      css`
        background: red;
      `
    )}
  `}
`
