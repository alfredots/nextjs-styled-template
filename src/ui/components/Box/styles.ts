import styled, { css } from 'styled-components';

import { ThemeProps } from '@/ui/styles';
import { makeMinWidth } from '@/ui/styles/functions/make-min-width';
import { StyleProps } from '@/ui/styles/types';

type Props = {
  $style?: StyleProps;
};

const toKebabCase = (str: string) => str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const renderCss = (theme: ThemeProps, props?: StyleProps) => {
  if (!props) return '';

  return css`
    ${Object.entries(props)
      .filter(([, value]) => value !== undefined && value !== null && typeof value !== 'symbol')
      .map(([key, value]) => {
        const cssKey = toKebabCase(key);

        // Mapeia propriedades que usam o tema
        if (typeof value === 'string') {
          if (key.endsWith('Color') && theme.colors[value as keyof ThemeProps['colors']]) {
            return `${cssKey}: ${theme.colors[value as keyof ThemeProps['colors']]};`;
          }
          if (key.includes('Width') && theme.sizing[value as keyof ThemeProps['sizing']]) {
            return `${cssKey}: ${theme.sizing[value as keyof ThemeProps['sizing']]};`;
          }
          if (key.includes('Radius') && theme.radius[value as keyof ThemeProps['radius']]) {
            return `${cssKey}: ${theme.radius[value as keyof ThemeProps['radius']]};`;
          }
        }

        return `${cssKey}: ${value};`;
      })
      .join('\n')}
  `;
};

const breakpoints = {
  $xs: 'xs',
  $sm: 'sm',
  $md: 'md',
  $lg: 'lg',
  $xl: 'xl',
  $2xl: '2xl'
} as const;

export const BoxStyle = styled.div<Props>`
  ${({ theme, $style, ...responsiveProps }) => css`
    ${renderCss(theme, $style)}

    ${Object.entries(responsiveProps)
      .filter(([, value]) => value !== undefined && value !== null && typeof value !== 'symbol')
      .map(([key, value]) =>
        value
          ? makeMinWidth(
              breakpoints[key as keyof typeof breakpoints],
              css`
                ${renderCss(theme, value)}
              `
            )
          : ''
      )
      .join('\n')}
  `}
`;
