import { autoStorage } from '$lib/storage';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import '../index.css';

export enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

type ThemeProviderProps = {
  children?: ReactNode;
  defaultTheme?: Theme;
  key?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: Theme.System,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const useTheme = () => useContext(ThemeProviderContext);

function ThemeProvider({
  children,
  defaultTheme = Theme.System,
  key = 'ui-theme',
  ...props
}: Readonly<ThemeProviderProps>) {
  const storage = autoStorage({});
  const [theme, setTheme] = useState<Theme>(() => {
    const currentTheme = storage.getItem(key);
    if (currentTheme && Object.values(Theme).includes(currentTheme as Theme)) {
      return currentTheme as Theme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window?.document.documentElement;

    root.classList.remove(Theme.Light, Theme.Dark);

    if (theme === Theme.System) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? Theme.Dark
        : Theme.Light;

      root.classList.add(systemTheme);

      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // useEffect(() => {
  //   if (theme === defaultTheme) return;
  //   setTheme(defaultTheme);
  // }, [defaultTheme, theme]);

  useEffect(() => {
    console.info('Theme defined to', theme);
    storage.setItem(key, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, key],
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export { ThemeProvider, useTheme };
