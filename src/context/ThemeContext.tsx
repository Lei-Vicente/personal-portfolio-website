import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent | { clientX: number; clientY: number }) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (event?: React.MouseEvent | { clientX: number; clientY: number }) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // Check View Transitions API support and user motion preference
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const startViewTransition = (document as any).startViewTransition;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof startViewTransition !== 'function' || isReducedMotion) {
      setThemeState(nextTheme);
      return;
    }

    // Determine circular expansion epicenter coordinates (prioritizing button element center)
    let x = window.innerWidth / 2;
    let y = 0;

    if (event && 'currentTarget' in event && event.currentTarget) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else if (event && 'clientX' in event && typeof event.clientX === 'number' && event.clientX > 0) {
      x = event.clientX;
      y = event.clientY;
    }

    // Calculate maximum radius required to cover the entire viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = startViewTransition.call(document, () => {
      flushSync(() => {
        setThemeState(nextTheme);
        const root = document.documentElement;
        if (nextTheme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    }).catch(() => {
      // Ignore transition cancellation if interrupted
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
