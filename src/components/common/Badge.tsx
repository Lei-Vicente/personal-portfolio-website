import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs sm:text-sm',
  };

  const variantClasses = {
    default:
      'bg-surface-subtle-light dark:bg-surface-subtle-dark text-foreground-light dark:text-foreground-dark border border-border-light dark:border-border-dark',
    accent:
      'bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark border border-accent-light/20 dark:border-accent-dark/30 font-medium',
    outline:
      'border border-border-light dark:border-border-dark text-foreground-muted-light dark:text-foreground-muted-dark',
    subtle:
      'bg-surface-subtle-light dark:bg-surface-subtle-dark text-foreground-muted-light dark:text-foreground-muted-dark',
  };

  return (
    <span
      className={`inline-flex items-center font-mono rounded-md font-normal ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
