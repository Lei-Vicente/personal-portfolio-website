import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  iconClassName?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  iconClassName = '',
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={(e) => toggleTheme(e)}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-full transition-transform active:scale-90 focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className={`w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45 ${iconClassName}`} aria-hidden="true" />
      ) : (
        <Moon className={`w-4 h-4 text-slate-700 dark:text-neutral-300 transition-transform duration-300 hover:-rotate-12 ${iconClassName}`} aria-hidden="true" />
      )}
    </button>
  );
};
