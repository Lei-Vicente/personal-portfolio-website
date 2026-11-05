import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';
import { ProjectPreview } from './ProjectPreview';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group flex flex-col rounded-2xl sm:rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark overflow-hidden shadow-sm hover:border-accent-light/50 dark:hover:border-accent-dark/50 transition-all duration-300 h-full">
      {/* Visual Showcase (Instant Poster Preview on Cards) */}
      <div className="relative w-full overflow-hidden shrink-0 border-b border-border-light dark:border-border-dark">
        <ProjectPreview project={project} interactive={false} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <Badge variant="accent" size="sm">
            {project.category}
          </Badge>

          {project.demoUrl && (
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Demo Available
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors mb-2">
          <Link to={`/projects/${project.slug}`} className="focus-visible:underline">
            {project.name}
          </Link>
        </h3>

        <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed flex-1 mb-6">
          {project.summary}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between pt-4 border-t border-border-light dark:border-border-dark mt-auto gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            <span>{project.slug === 'practisync' ? 'View Case Study' : 'View Project Details'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark"
              aria-label={`Open Live Demo for ${project.name}`}
            >
              <span>Launch</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium rounded-lg text-foreground-muted-light dark:text-foreground-muted-dark bg-surface-subtle-light dark:bg-surface-subtle-dark border border-border-light dark:border-border-dark">
              {project.category === 'Academic' ? 'RTU Capstone' : 'Architecture'}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
