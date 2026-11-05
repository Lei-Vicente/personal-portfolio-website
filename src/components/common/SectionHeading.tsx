import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`mb-12 max-w-3xl ${className}`}>
      {label && (
        <span className="inline-block text-xs font-mono uppercase tracking-wider font-semibold text-accent-light dark:text-accent-dark mb-2">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
