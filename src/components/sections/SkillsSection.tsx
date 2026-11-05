import React from 'react';
import { Code2, Terminal } from 'lucide-react';
import { coreSkillCategories, supplementarySkills } from '../../data/skills';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 border-t border-border-light dark:border-border-dark">
      <Container>
        <SectionHeading
          label="Technical Capabilities"
          title="Skills & Technologies"
          description="Direct development proficiencies, workflow tools, and operational competencies."
        />

        {/* Core Development Proficiencies */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase font-mono text-accent-light dark:text-accent-dark mb-6">
            <Code2 className="w-4 h-4" />
            <span>Core Development Stack</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {coreSkillCategories.map((group) => (
              <div
                key={group.title}
                className="p-5 sm:p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-accent-light/30 dark:hover:border-accent-dark/30 transition-colors"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-foreground-light dark:text-foreground-dark uppercase tracking-wider mb-4 pb-2 border-b border-border-light dark:border-border-dark">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="accent" size="md">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supplementary Tools & Operational Capabilities */}
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase font-mono text-foreground-muted-light dark:text-foreground-muted-dark mb-6">
            <Terminal className="w-4 h-4" />
            <span>Additional Tools & Experience</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supplementarySkills.map((group) => (
              <div
                key={group.title}
                className="p-6 rounded-2xl bg-surface-subtle-light/60 dark:bg-surface-subtle-dark/40 border border-border-light dark:border-border-dark flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-mono font-semibold text-foreground-muted-light dark:text-foreground-muted-dark uppercase tracking-wider mb-3">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="subtle" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
