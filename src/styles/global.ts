import { createGlobalStyle } from 'styled-components';

import { generateCssVars } from './functions/generate-css-vars';

export const GlobalStyles = createGlobalStyle`
  :root{
    ${generateCssVars('colors')}
    ${generateCssVars('fontSize')}
    ${generateCssVars('lineHeight')}
    ${generateCssVars('fontWeight')}
    ${generateCssVars('radius')}
    ${generateCssVars('spacing')}
  }

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   html,
   body,
   #__next {
     height: 100%;
   }
`;
