import { css } from 'styled-components';

import { minWidth } from '../../src/styles/functions/make-media-query';

describe('styles makeMinWidth', () => {
  it('should generate min width xs', () => {
    const result = minWidth('xs', css``);

    expect(result.toString().replaceAll(',', '')).toContain(
      '@media (min-width: 0px)'
    );
  });

  it('should generate min width sm', () => {
    const result = minWidth('sm', css``);

    expect(result.toString().replaceAll(',', '')).toContain(
      '@media (min-width: 640px)'
    );
  });

  it('should generate min width md', () => {
    const result = minWidth('md', css``);

    expect(result.toString().replaceAll(',', '')).toContain(
      '@media (min-width: 768px)'
    );
  });

  it('should generate min width lg', () => {
    const result = minWidth('lg', css``);

    expect(result.toString().replaceAll(',', '')).toContain(
      '@media (min-width: 1024px)'
    );
  });

  it('should generate min width xl', () => {
    const result = minWidth('xl', css``);

    expect(result.toString().replaceAll(',', '')).toContain(
      '@media (min-width: 1280px)'
    );
  });

  it('should generate min width 2xl', () => {
    const result = minWidth('2xl', css``);

    expect(result.toString().replaceAll(',', '')).toContain(
      '@media (min-width: 1536px)'
    );
  });
});
