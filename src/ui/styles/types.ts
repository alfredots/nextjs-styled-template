import { ThemeProps } from '@/ui/styles/theme';

export type StyleProps = Partial<{
  /* Layout */
  display: 'grid' | 'flex' | 'block' | 'inline' | 'none';
  visibility: 'visible' | 'hidden' | 'collapse';
  overflow: 'visible' | 'hidden' | 'scroll' | 'auto';
  contain: string;

  /* Flexbox */
  flex: string;
  flexGrow: '0' | '1';
  flexShrink: '0' | '1';
  flexBasis: 'auto' | 'content' | 'fit-content' | 'max-content' | 'min-content' | '0' | string;
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignSelf: 'auto' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';

  /* Grid */
  gridTemplateRows: string;
  gridTemplateColumns: string;
  gridAutoFlow: string;
  gridAutoRows: string;
  gridAutoColumns: string;
  gap: string;

  /* Positioning */
  position: 'relative' | 'absolute' | 'sticky' | 'fixed' | 'static';
  top: string;
  right: string;
  bottom: string;
  left: string;
  insetInlineStart: string;
  insetInlineEnd: string;
  insetBlockStart: string;
  insetBlockEnd: string;
  zIndex: string;
  float: 'left' | 'right' | 'none' | 'inline-start' | 'inline-end';
  clear: 'none' | 'left' | 'right' | 'both' | 'inline-start' | 'inline-end';

  /* Spacing */
  margin: string;
  padding: string;

  /* Sizing */
  width: string;
  height: string;
  minWidth: string;
  minHeight: string;
  maxWidth: string;
  maxHeight: string;
  aspectRatio: string;

  /* Borders */
  border: string;
  borderWidth: keyof ThemeProps['sizing'];
  borderStyle: 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  borderColor: keyof ThemeProps['colors'];
  borderRadius: keyof ThemeProps['radius'];
  outline: string;
  outlineWidth: keyof ThemeProps['sizing'];
  outlineStyle: 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  outlineColor: keyof ThemeProps['colors'];

  /* Background */
  background: string;
  backgroundColor: keyof ThemeProps['colors'];
  backgroundImage: 'none' | `url(${string})` | `linear-gradient(${string})` | `radial-gradient(${string})` | `conic-gradient(${string})`;
  backgroundSize: 'auto' | 'cover' | 'contain' | string;
  backgroundPosition: 'left' | 'center' | 'right' | 'top' | 'bottom' | `${string} ${string}`;
  backgroundRepeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | 'round' | 'space';
  backgroundClip: 'border-box' | 'padding-box' | 'content-box' | 'text';
  backgroundOrigin: 'border-box' | 'padding-box' | 'content-box';
  backdropFilter: 'none' | `${string}(${string})`;

  /* Typography */
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  textDecoration: string;
  textAlign: string;
  textTransform: string;
  whiteSpace: string;
  wordBreak: string;
  color: string;

  /* Effects */
  boxShadow: string;
  textShadow: string;
  filter: string;
  opacity: string;
  mixBlendMode: string;

  /* Transitions & Animations */
  transition: string;
  transitionProperty: string;
  transitionDuration: string;
  transitionTimingFunction: string;
  animation: string;
  animationName: string;
  animationDuration: string;
  animationTimingFunction: string;
  animationDelay: string;
  animationIterationCount: string;
  animationDirection: string;
  animationFillMode: string;

  /* Misc */
  cursor: string;
  pointerEvents: string;
  clipPath: string;
  willChange: string;
}>;
