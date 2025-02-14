import styled, { css } from 'styled-components';

import { BoxProps } from '.';

import { convertObjectToStyle } from '@/ui/components/Box/convert-object-to-style';

type BoxStyleProps = {
  $sizing?: BoxProps['sizing'];
};

export const BoxStyle = styled.div<BoxStyleProps>`
  ${({ $sizing }) => css`
    ${$sizing && convertObjectToStyle($sizing)}
  `}
`;
