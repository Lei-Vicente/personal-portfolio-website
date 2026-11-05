import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { educationData } from '../../data/education';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-border-light dark:border-border-dark bg-surface-subtle-light/40 dark:bg-surface-subtle-dark/20">
      <Container>
        <SectionHeading
          label="Academic Foundation"
          title="Education & Recognition"
          description="Formal higher education in Information Technology and recognized academic distinctions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium text-foreground-muted-light dark:text-foreground-muted-dark">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-1">
                  {item.degreeOrLevel}
                </h3>

                <p className="text-sm font-medium text-accent-light dark:text-accent-dark mb-2">
                  {item.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-foreground-muted-light dark:text-foreground-muted-dark mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              {item.recognition && item.recognition.length > 0 && (
                <div className="pt-4 border-t border-border-light dark:border-border-dark">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-2">
                    Honors & Distinctions
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.recognition.map((rec) => (
                      <span
                        key={rec}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{rec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
