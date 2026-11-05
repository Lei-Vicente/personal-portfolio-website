import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Target,
  AlertCircle,
  Layers,
  FolderGit2,
  Sparkles,
  Code2,
  FileText,
  UserCheck,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { ProjectPreview } from '../components/projects/ProjectPreview';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Leibern R. Vicente Portfolio`;
    } else {
      document.title = `Project Not Found | Leibern R. Vicente Portfolio`;
    }
  }, [project]);

  if (!project) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-foreground-muted-light dark:text-foreground-muted-dark mb-6">
          The requested project case study could not be found.
        </p>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-light text-white dark:bg-accent-dark dark:text-slate-950 font-medium text-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Projects</span>
        </Link>
      </Container>
    );
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <article className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
      <Container>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 hover:text-foreground-light dark:hover:text-foreground-dark transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Projects</span>
          </Link>
          <span>/</span>
          <span className="text-foreground-light dark:text-foreground-dark font-medium truncate">
            {project.name}
          </span>
        </div>

        {/* Header & Meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="accent">{project.category}</Badge>
              {project.demoUrl && (
                <Badge variant="default" className="text-emerald-600 dark:text-emerald-400">
                  Live Demo Active
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark mb-4">
              {project.name}
            </h1>

            <p className="text-base sm:text-xl text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
              {project.summary}
            </p>
          </div>

          {project.demoUrl && (
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-light text-white dark:bg-accent-dark dark:text-slate-950 font-medium text-sm sm:text-base hover:bg-accent-hover-light dark:hover:bg-accent-hover-dark transition-colors shadow-sm"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Project Visual Showcase (Centered Cinematic Frame) */}
        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-border-light dark:border-border-dark overflow-hidden mb-12 sm:mb-16 shadow-xl shadow-slate-900/5 dark:shadow-2xl dark:shadow-black/50 bg-[#1E202B] dark:bg-[#0D0F17]">
          <ProjectPreview
            project={project}
            className="w-full"
          />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* Main Case Study Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview & Executive Summary */}
            {project.overview && (
              <section className="space-y-5">
                <div className="flex items-center justify-between border-b border-border-light dark:border-border-dark pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground-light dark:text-foreground-dark flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-accent-light dark:text-accent-dark" />
                    <span>Project Overview</span>
                  </h2>
                  <span className="text-xs font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                    Executive Summary
                  </span>
                </div>

                <p className="text-base sm:text-lg text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                  {project.overview}
                </p>

                {/* At-a-Glance Executive Specification Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl bg-surface-subtle-light/70 dark:bg-surface-subtle-dark/40 border border-border-light dark:border-border-dark">
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-muted-light dark:text-foreground-muted-dark mb-1">
                      Role / Focus
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground-light dark:text-foreground-dark">
                      {project.role || 'Full-Stack Development'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-muted-light dark:text-foreground-muted-dark mb-1">
                      Category
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground-light dark:text-foreground-dark">
                      {project.category} Application
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-muted-light dark:text-foreground-muted-dark mb-1">
                      Deployment
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground-light dark:text-foreground-dark flex items-center gap-1.5">
                      {project.demoUrl ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Live Production (Vercel)</span>
                        </>
                      ) : project.slug === 'practisync' ? (
                        <span>Academic Prototype (RTU)</span>
                      ) : (
                        <span>Enterprise Prototype</span>
                      )}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-muted-light dark:text-foreground-muted-dark mb-1">
                      Deliverable
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground-light dark:text-foreground-dark">
                      {project.slug === 'financeos'
                        ? 'Interactive Web App / PWA'
                        : project.slug === 'sales-reimbursement-system'
                        ? 'Enterprise Web App (Audited)'
                        : 'Multi-Role Practicum Hub'}
                    </span>
                  </div>
                </div>
              </section>
            )}

            {/* Core Architecture & Key Pillars */}
            {project.pillars && project.pillars.length > 0 && (
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground-light dark:text-foreground-dark flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                    <span>Core Architecture & Key Pillars</span>
                  </h3>
                  <span className="text-xs font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                    Engineering Principles
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-xs space-y-2 group hover:border-accent-light/40 dark:hover:border-accent-dark/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-light dark:bg-accent-dark" />
                        <h4 className="text-sm sm:text-base font-semibold text-foreground-light dark:text-foreground-dark">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed pl-3.5 border-l border-border-light/60 dark:border-border-dark/60">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* The Challenge & The Solution */}
            {(project.problem || project.goal) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.problem && (
                  <section className="p-6 rounded-2xl bg-surface-subtle-light/60 dark:bg-surface-subtle-dark/40 border border-border-light dark:border-border-dark space-y-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-foreground-light dark:text-foreground-dark flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span>The Challenge</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                      {project.problem}
                    </p>
                  </section>
                )}

                {project.goal && (
                  <section className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark space-y-2.5 shadow-xs">
                    <h3 className="text-base sm:text-lg font-bold text-foreground-light dark:text-foreground-dark flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                      <span>The Solution & Goal</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                      {project.goal}
                    </p>
                  </section>
                )}
              </div>
            )}

            {/* My Key Contributions & Ownership */}
            {project.myContributions && project.myContributions.length > 0 && (
              <section className="p-6 sm:p-7 rounded-2xl bg-surface-subtle-light/70 dark:bg-surface-subtle-dark/40 border border-accent-light/30 dark:border-accent-dark/30 space-y-4 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border-light dark:border-border-dark pb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground-light dark:text-foreground-dark flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-accent-light dark:text-accent-dark" />
                    <span>My Key Contributions</span>
                  </h3>
                  <span className="text-xs font-mono text-accent-light dark:text-accent-dark font-medium">
                    Engineering Scope & Ownership
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {project.myContributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-xs sm:text-sm text-foreground-light dark:text-foreground-dark shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-light dark:text-accent-dark shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Core Implemented Capabilities */}
            {project.implementedFeatures && project.implementedFeatures.length > 0 && (
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground-light dark:text-foreground-dark flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Core Implemented Capabilities</span>
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    Production Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.implementedFeatures.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-xs sm:text-sm text-foreground-light dark:text-foreground-dark shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Discussed Functional Scope (PractiSync specific) */}
            {project.discussedScope && project.discussedScope.length > 0 && (
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground-light dark:text-foreground-dark flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                    <span>Discussed Functional Scope</span>
                  </h3>
                  <span className="text-xs font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                    Architecture & Design Goals
                  </span>
                </div>
                <p className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                  *Note: These represent the planned capstone scope and coordination architecture for RTU practicum workflows.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {project.discussedScope.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-xs sm:text-sm text-foreground-light dark:text-foreground-dark shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-light dark:text-accent-dark shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Source & Verification Evidence */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-subtle-light/60 dark:bg-surface-subtle-dark/40 border border-border-light dark:border-border-dark space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-foreground-muted-light dark:text-foreground-muted-dark block font-semibold">
                Source & Verification Evidence
              </span>
              <p className="text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                {project.slug === 'financeos' && (
                  'Production deployment verified on Vercel with active PWA service worker and local Express.js/PostgreSQL Docker development.'
                )}
                {project.slug === 'practisync' && (
                  'Academic capstone project for Rizal Technological University (RTU). Role-based workspaces, routing allowlists, and permissions are mapped directly from the source repository.'
                )}
                {project.slug === 'sales-reimbursement-system' && (
                  'Live production deployment verified on Vercel with Next.js, Prisma, and PostgreSQL. Multi-role claim workflow and liquidation pipelines are active.'
                )}
              </p>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 w-full">
            <div className="p-6 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground-subtle-light dark:text-foreground-subtle-dark pb-2 border-b border-border-light dark:border-border-dark">
                Project Information
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted-light dark:text-foreground-muted-dark flex items-center gap-1.5 font-mono text-xs">
                    <Layers className="w-3.5 h-3.5" />
                    Category
                  </span>
                  <span className="font-semibold text-foreground-light dark:text-foreground-dark">
                    {project.category}
                  </span>
                </div>

                {project.role && (
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-foreground-muted-light dark:text-foreground-muted-dark flex items-center gap-1.5 font-mono text-xs shrink-0">
                      <UserCheck className="w-3.5 h-3.5" />
                      Role
                    </span>
                    <span className="font-semibold text-foreground-light dark:text-foreground-dark text-right text-xs">
                      {project.role}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted-light dark:text-foreground-muted-dark flex items-center gap-1.5 font-mono text-xs">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    Status
                  </span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {project.demoUrl ? 'Live Production' : 'Documented'}
                  </span>
                </div>

                {project.demoUrl && (
                  <div className="pt-3 border-t border-border-light dark:border-border-dark">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-accent-light text-white dark:bg-accent-dark dark:text-slate-950 font-medium text-xs shadow-sm hover:bg-accent-hover-light dark:hover:bg-accent-hover-dark transition-colors"
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Technologies & Stack Card */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="p-6 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm space-y-3.5">
                <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground-subtle-light dark:text-foreground-subtle-dark pb-2 border-b border-border-light dark:border-border-dark flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-accent-light dark:text-accent-dark" />
                  <span>Technologies & Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-surface-subtle-light dark:bg-surface-subtle-dark border border-border-light dark:border-border-dark text-foreground-light dark:text-foreground-dark font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Next/Previous Navigation Widget */}
            <div className="p-5 rounded-2xl bg-surface-subtle-light/60 dark:bg-surface-subtle-dark/40 border border-border-light dark:border-border-dark space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-foreground-muted-light dark:text-foreground-muted-dark block">
                More Projects
              </span>
              <div className="flex flex-col gap-2">
                {prevProject && (
                  <Link
                    to={`/projects/${prevProject.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-xs"
                  >
                    <span className="flex items-center gap-1 text-foreground-muted-light dark:text-foreground-muted-dark">
                      <ChevronLeft className="w-3.5 h-3.5" />
                      {prevProject.name}
                    </span>
                    <Badge variant="subtle" size="sm">{prevProject.category}</Badge>
                  </Link>
                )}
                {nextProject && (
                  <Link
                    to={`/projects/${nextProject.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-xs"
                  >
                    <span className="flex items-center gap-1 text-foreground-muted-light dark:text-foreground-muted-dark">
                      {nextProject.name}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <Badge variant="subtle" size="sm">{nextProject.category}</Badge>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
};
