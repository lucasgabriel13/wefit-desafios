import 'styled-components';
import { theme } from '../styles/theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType { }
}