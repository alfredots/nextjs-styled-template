import { spacing } from '../../src/styles/functions/spacing';

describe('styles spacing', () => {
  it('should return one value', () => {
    const result = spacing('16px');

    expect(result).toEqual('1rem');
  });

  it('should return two value', () => {
    const result = spacing('16px', '16px');

    expect(result).toEqual('1rem 1rem');
  });

  it('should return three value', () => {
    const result = spacing('16px', '16px', '16px');

    expect(result).toEqual('1rem 1rem 1rem');
  });

  it('should return four value', () => {
    const result = spacing('16px', '16px', '16px', '16px');

    expect(result).toEqual('1rem 1rem 1rem 1rem');
  });
});
