import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
};
