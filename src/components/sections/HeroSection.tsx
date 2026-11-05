import React, { useState } from 'react';
import { ArrowDown, Mail, Sparkles, Code2, MapPin, GraduationCap } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Container } from '../common/Container';
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  TailwindIcon,
  NodejsIcon,
  PostgresqlIcon,
  DockerIcon,
} from '../common/Icons';

export const HeroSection: React.FC = () => {
  const [avatarError, setAvatarError] = useState(false);
  const showAvatar = Boolean(profileData.avatarUrl && !avatarError);
  return (
    <section id="home" className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Subtle Ambient Background Texture & Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none select-none -z-10" aria-hidden="true">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent dark:from-indigo-600/15 dark:via-purple-600/5 dark:to-transparent blur-3xl opacity-70" />
        
        {/* High-Precision Subtle Dot Matrix */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20 [background-image:radial-gradient(rgba(79,70,229,0.3)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(129,140,248,0.4)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-surface-subtle-light dark:bg-surface-subtle-dark border border-border-light dark:border-border-dark text-foreground-muted-light dark:text-foreground-muted-dark mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profileData.status}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark leading-[1.12] mb-6">
              {profileData.heroHeading}
            </h1>

            {/* Credible Description */}
            <p className="text-base sm:text-lg lg:text-xl text-foreground-muted-light dark:text-foreground-muted-dark max-w-4xl leading-relaxed mb-8 sm:mb-10">
              {profileData.heroDescription}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-light text-white dark:bg-accent-dark dark:text-gray-900 font-medium text-sm sm:text-base hover:bg-accent-hover-light dark:hover:bg-accent-hover-dark transition-all duration-150 shadow-sm focus-visible:ring-2 focus-visible:ring-accent-light"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark border border-border-light dark:border-border-dark font-medium text-sm sm:text-base hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent-light"
              >
                <Mail className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                <span>Contact Me</span>
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-xl bg-surface-light dark:bg-surface-dark text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark border border-border-light dark:border-border-dark transition-colors shadow-xs"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {profileData.linkedinUrl && (
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3.5 rounded-xl bg-surface-light dark:bg-surface-dark text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark border border-border-light dark:border-border-dark transition-colors shadow-xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Core Tech Stack Brand Strip */}
            <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-border-light dark:border-border-dark w-full">
              <span className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-3.5">
                Core Technologies & Frameworks
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {[
                  { name: 'React', icon: ReactIcon },
                  { name: 'Next.js', icon: NextjsIcon },
                  { name: 'TypeScript', icon: TypescriptIcon },
                  { name: 'Tailwind CSS', icon: TailwindIcon },
                  { name: 'Node.js', icon: NodejsIcon },
                  { name: 'PostgreSQL', icon: PostgresqlIcon },
                  { name: 'Docker', icon: DockerIcon },
                  { name: 'Git & GitHub', icon: GithubIcon },
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-xs font-medium text-foreground-light dark:text-foreground-dark shadow-2xs hover:border-accent-light/50 dark:hover:border-accent-dark/50 hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark transition-all duration-200 select-none group/tech"
                    >
                      <Icon className="w-3.5 h-3.5 text-accent-light dark:text-accent-dark group-hover/tech:scale-110 transition-transform" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Visual Identity & Profile Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full p-6 sm:p-8 lg:p-9 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                {/* Profile Photo / Stylized Placeholder Container */}
                <div className="relative group/avatar shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-border-light dark:border-border-dark bg-gradient-to-br from-accent-light/10 via-purple-500/10 to-transparent flex items-center justify-center shadow-md relative group-hover/avatar:border-accent-light/60 dark:group-hover/avatar:border-accent-dark/60 transition-colors">
                    {showAvatar ? (
                      <img
                        src={profileData.avatarUrl}
                        alt={profileData.fullName}
                        className="w-full h-full object-cover"
                        onError={() => setAvatarError(true)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center select-none">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold flex items-center justify-center text-sm sm:text-base shadow-sm">
                          LV
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Active online pulse dot */}
                  <span
                    className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-surface-light dark:border-surface-dark flex items-center justify-center shadow-xs"
                    title="Available for full-stack opportunities"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </span>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground-light dark:text-foreground-dark">
                    {profileData.fullName}
                  </h2>
                  <p className="text-xs sm:text-sm text-accent-light dark:text-accent-dark font-mono font-medium">
                    {profileData.headline}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-border-light dark:border-border-dark text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-border-light/60 dark:border-border-dark/60">
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark shrink-0">
                    <GraduationCap className="w-3.5 h-3.5" />
                    University
                  </span>
                  <span className="font-semibold text-foreground-light dark:text-foreground-dark sm:text-right">
                    RTU Mandaluyong
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-border-light/60 dark:border-border-dark/60">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark shrink-0">
                    Graduation
                  </span>
                  <span className="font-semibold text-foreground-light dark:text-foreground-dark sm:text-right">
                    Expected 2027 (4th Year)
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-border-light/60 dark:border-border-dark/60">
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                    Location
                  </span>
                  <span className="font-semibold text-foreground-light dark:text-foreground-dark sm:text-right">
                    Mandaluyong City, Philippines
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark shrink-0">
                    <Code2 className="w-3.5 h-3.5" />
                    Focus Stack
                  </span>
                  <span className="font-mono text-xs font-semibold text-accent-light dark:text-accent-dark sm:text-right">
                    React · Next.js · TypeScript · Node.js · PostgreSQL
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-light dark:border-border-dark">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  <Sparkles className="w-4 h-4 text-accent-light dark:text-accent-dark shrink-0" />
                  <span>Focused on full-stack web solutions and practical, reliable code.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
