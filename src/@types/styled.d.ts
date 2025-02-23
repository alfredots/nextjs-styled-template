// styled.d.ts
import 'styled-components';

import { ThemeProps } from '@/ui/styles/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeProps {}
}
