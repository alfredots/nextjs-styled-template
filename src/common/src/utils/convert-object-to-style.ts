const replaceCapitalLetterToDashLowerCase = (cssProperty: string) => {
  return (cssProperty = cssProperty.replace(
    /[A-Z]/g,
    (match) => `-${match.toLowerCase()}`
  ))
}

export const convertObjectToStyle = (style: object) => {
  return Object.entries(style)
    .map(
      ([cssProp, cssValue]) =>
        `${replaceCapitalLetterToDashLowerCase(cssProp)}:${cssValue}`
    )
    .join(';')
}
