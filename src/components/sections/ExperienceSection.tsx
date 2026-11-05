import React from 'react';
import { Briefcase, Users, Calendar, Building } from 'lucide-react';
import { experiencesData } from '../../data/experience';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const ExperienceSection: React.FC = () => {
  const professionalExperiences = experiencesData.filter(
    (exp) => exp.category === 'professional' || exp.category === 'academic'
  );
  const leadershipExperiences = experiencesData.filter((exp) => exp.category === 'leadership');

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-border-light dark:border-border-dark">
      <Container>
        <SectionHeading
          label="Experience"
          title="Work & Technical Background"
          description="Direct professional exposure in software development, IT operations, academic support, and organizational leadership."
        />

        {/* Technical & Professional Roles */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase font-mono text-accent-light dark:text-accent-dark">
            <Briefcase className="w-4 h-4" />
            <span>Technical & Professional Experience</span>
          </div>

          <div className="relative border-l-2 border-border-light dark:border-border-dark ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {professionalExperiences.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-accent-light dark:border-accent-dark group-hover:scale-110 transition-transform" />

                <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">
                      {exp.role}
                    </h3>
                    {exp.dates && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.dates}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-accent-light dark:text-accent-dark mb-4">
                    <Building className="w-4 h-4" />
                    <span>{exp.organization}</span>
                  </div>

                  <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Confirmed responsibilities bullets only */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-border-light dark:border-border-dark text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-light dark:text-accent-dark mt-1 font-bold">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Organizational Involvement */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
            <Users className="w-4 h-4" />
            <span>Leadership & Organizational Experience</span>
          </div>

          <div className="relative border-l-2 border-border-light dark:border-border-dark ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {leadershipExperiences.map((exp) => (
              <div key={exp.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark group-hover:border-accent-light dark:group-hover:border-accent-dark transition-colors" />

                <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">
                        {exp.role}
                      </h3>
                      <Badge variant="subtle" size="sm">
                        Leadership
                      </Badge>
                    </div>
                    {exp.dates && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.dates}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-foreground-light dark:text-foreground-dark mb-4">
                    <Building className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                    <span>{exp.organization}</span>
                  </div>

                  <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {exp.responsibilities && (
                    <ul className="space-y-2 pt-2 border-t border-border-light dark:border-border-dark text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-light dark:text-accent-dark mt-1 font-bold">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
