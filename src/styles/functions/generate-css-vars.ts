import { css } from 'styled-components';
import { getTheme } from 'styles';

const theme = getTheme();

export const generateCssVars = (propName: keyof typeof theme) => {
  const props = theme[propName];

  const cssVarPrefix: Record<keyof typeof theme, string> = {
    colors: 'color',
    fontSize: 'font-size',
    fontWeight: 'font-weight',
    lineHeight: 'line-height',
    radius: 'radius',
    screen: 'screen',
    shadow: 'shadow',
    spacing: 'spacing'
  };

  const result = Object.entries(props).map(([key, value]) => {
    return `--${cssVarPrefix[propName]}-${key}: ${value};`;
  });

  return css`
    ${result.toString().replaceAll(',', '')}
  `;
};
