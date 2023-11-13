export type Layout = {
  display: 'grid' | 'flex' | 'block' | 'inline'
}

export type Grid = {
  alignItems: string
  gap: string
  gridTemplateAreas: string
  gridTemplateColumns: string
  justifyItems: string
}

export type Positioning = {
  position: 'relative' | 'absolute' | 'sticky' | 'fixed' | 'static'
  top: string
  right: string
  bottom: string
  left: string
  insetInlineStart: string
  insetInlineEnd: string
  insetInline: string
  insetBlockStart: string
  insetBlockEnd: string
  insetBlock: string
  zIndex: string
}

export type Spacing = {
  margin: string
  padding: string
}

export type Sizing = {
  width: string
  height: string
  minWidth: string
  minHeight: string
  maxWidth: string
  maxHeight: string
}

export type Font = {
  fontSize: string
  lineHeight: string
  fontWeight: string
  letterSpacing: string
  color: string
  textDecoration: string
}
