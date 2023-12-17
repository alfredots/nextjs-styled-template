import styled, { css } from 'styled-components';
import { minWidth } from 'styles';

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors['primary-500']};
    font-size: var(--font-size-36px);

    ${minWidth(
      'lg',
      css`
        background: red;
      `
    )}
  `}
`;
