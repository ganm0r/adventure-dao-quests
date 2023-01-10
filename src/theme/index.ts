import colors from './constants/colors';
import typography from './constants/typography';
import { breakpoints, mediaQueries } from './constants/responsiveness';

const questsTheme = {
  colors,
  breakpoints,
  mediaQueries,
  ...typography,
};

export { questsTheme };
export type Theme = typeof questsTheme;
