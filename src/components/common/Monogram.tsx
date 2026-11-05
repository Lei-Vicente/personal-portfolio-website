import React from 'react';

interface MonogramProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Monogram: React.FC<MonogramProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-24 h-24 text-3xl',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-surface-subtle-light dark:bg-surface-subtle-dark border border-border-light dark:border-border-dark font-mono font-bold tracking-wider select-none overflow-hidden group shadow-sm ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/10 to-transparent dark:from-accent-dark/15 dark:to-transparent" />
      <span className="relative text-accent-light dark:text-accent-dark font-sans font-bold">
        LV
      </span>
    </div>
  );
};
