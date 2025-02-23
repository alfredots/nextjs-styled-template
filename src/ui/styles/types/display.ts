export type DisplayProps = {
  display:
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'flow-root';
  overflow: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit';
  textOverflow: string;
  visibility: 'visible' | 'hidden' | 'collapse';
  whiteSpace:
    | 'normal'
    | 'pre'
    | 'nowrap'
    | 'pre-wrap'
    | 'break-spaces'
    | 'pre-line';
};
