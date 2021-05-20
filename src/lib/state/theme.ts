import tates from 'tates';
import { createStateHook } from 'react-tates';

export interface ThemeState {
  theme: string;
}

const tate = tates<ThemeState>();
const { state } = tate;

export const themeActions = {
  setTheme(theme: string): void {
    state.theme = theme;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  },
  getTheme(): void {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      state.theme = localStorage.getItem('theme');
    }
  },
};

export const useTheme = createStateHook<
  string,
  typeof tate,
  typeof themeActions.getTheme
>({
  tate,
  property: 'theme',
  action: themeActions.getTheme,
});
