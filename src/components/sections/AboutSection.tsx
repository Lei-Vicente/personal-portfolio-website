import React from 'react';
import { Layers, Wrench, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 border-t border-border-light dark:border-border-dark bg-surface-subtle-light/40 dark:bg-surface-subtle-dark/20">
      <Container>
        <SectionHeading
          label="About Me"
          title="Background & Focus"
          description="A dedicated approach to learning, software development, and technical problem solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-base sm:text-lg text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
            <p className="text-foreground-light dark:text-foreground-dark font-normal">
              {profileData.aboutParagraph}
            </p>

            <div className="pt-4 border-t border-border-light dark:border-border-dark">
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-foreground-light dark:text-foreground-dark mb-4">
                Core Strengths & Collaboration
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {profileData.strengths.map((strength) => (
                  <li key={strength} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-foreground-light dark:text-foreground-dark shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent-light dark:text-accent-dark shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mini-panels: What I Build & How I Work */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground-light dark:text-foreground-dark">
                  What I Build
                </h3>
              </div>
              <p className="text-sm sm:text-base text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                Full-stack web applications, structured database models, and responsive front-end interfaces focused on practical usability, clean architecture, and reliable performance.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-foreground-light dark:text-foreground-dark">
                  How I Work
                </h3>
              </div>
              <p className="text-sm sm:text-base text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                Disciplined troubleshooting, systematic testing, organized records, and transparent communication across non-technical users, engineering peers, and organizational stakeholders.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
