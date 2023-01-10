const breakpoints = {
  /** 360px */
  phone: '22.5em',

  /** 768px */
  tablet: '48em',

  /** 1024px */
  desktop: '64em',

  /** 1440px */
  largeDesktop: '90em',
};

const mediaQueries = {
  phone: `@media screen and (max-width: ${breakpoints.phone})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.largeDesktop})`,
  largeDesktop: `@media screen and (min-width: ${breakpoints.largeDesktop})`,
};

export { breakpoints, mediaQueries };
