import { generateCssVars } from '../../src/styles/functions/generate-css-vars';

describe('styles generateCssVars', () => {
  it('should generate colors css vars', () => {
    const result = generateCssVars('colors');

    console.log(result);
  });
});
