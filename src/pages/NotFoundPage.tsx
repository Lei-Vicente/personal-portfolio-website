import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '../components/common/Container';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20">
      <Container className="text-center max-w-md">
        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent-light dark:text-accent-dark">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark mt-2 mb-4">
          Page not found
        </h1>
        <p className="text-base text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/#home"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-light text-white dark:bg-accent-dark dark:text-slate-950 font-medium text-sm hover:bg-accent-hover-light dark:hover:bg-accent-hover-dark transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark border border-border-light dark:border-border-dark font-medium text-sm hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </Container>
    </main>
  );
};
