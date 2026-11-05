import React, { useState, useMemo } from 'react';
import { projectsData } from '../../data/projects';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectFilter, FilterOption } from '../projects/ProjectFilter';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterOption>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projectsData;
    return projectsData.filter((p) => p.category === filter);
  }, [filter]);

  const counts = useMemo(() => {
    const map: Record<FilterOption, number> = {
      All: projectsData.length,
      Personal: projectsData.filter((p) => p.category === 'Personal').length,
      Academic: projectsData.filter((p) => p.category === 'Academic').length,
      Business: projectsData.filter((p) => p.category === 'Business').length,
    };
    return map;
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border-light dark:border-border-dark bg-surface-subtle-light/40 dark:bg-surface-subtle-dark/20">
      <Container>
        <SectionHeading
          label="Featured Work"
          title="Projects & Case Studies"
          description="Curated applications covering personal finance tools, academic practicum workflows, and enterprise business systems."
        />

        <ProjectFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={counts}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
