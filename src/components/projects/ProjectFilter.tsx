import React from 'react';
import { ProjectCategory } from '../../types';

export type FilterOption = 'All' | ProjectCategory;

interface ProjectFilterProps {
  currentFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  counts: Record<FilterOption, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  currentFilter,
  onFilterChange,
  counts,
}) => {
  const options: FilterOption[] = ['All', 'Personal', 'Academic', 'Business'];

  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-2 mb-8"
    >
      {options.map((option) => {
        const isActive = currentFilter === option;
        const count = counts[option] ?? 0;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onFilterChange(option)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark ${
              isActive
                ? 'bg-accent-light text-white dark:bg-accent-dark dark:text-gray-900 shadow-sm'
                : 'bg-surface-subtle-light dark:bg-surface-subtle-dark text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark border border-border-light dark:border-border-dark'
            }`}
          >
            <span>{option}</span>
            <span
              className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full ${
                isActive
                  ? 'bg-white/20 dark:bg-black/20 text-white dark:text-gray-900'
                  : 'bg-border-light dark:bg-border-dark text-foreground-muted-light dark:text-foreground-muted-dark'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
