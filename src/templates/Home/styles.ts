import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  ${({ theme }) => {
    const { colors } = theme;
    const { minWidth, setSpacing } = theme.utilities;

    return css`
      background: ${colors['error-900']};
      padding: ${setSpacing('8px', '16px')};

      ${minWidth(
        'md',
        css`
          color: ${colors['neutral-900']};
        `
      )};
    `;
  }}
`;
