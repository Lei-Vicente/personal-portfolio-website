import React from 'react';
import { Mail } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Monogram } from '../common/Monogram';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-surface-subtle-light/50 dark:bg-surface-dark/50 py-12">
      <div className="w-full max-w-[min(94vw,1800px)] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Identity & Location */}
          <div className="flex items-center gap-3">
            <Monogram size="sm" />
            <div>
              <p className="font-semibold text-sm text-foreground-light dark:text-foreground-dark">
                {profileData.fullName}
              </p>
              <p className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                {profileData.location}
              </p>
            </div>
          </div>

          {/* Quick Section Shortcuts */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground-muted-light dark:text-foreground-muted-dark" aria-label="Footer Navigation">
            <a href="/#about" className="hover:text-foreground-light dark:hover:text-foreground-dark transition-colors">
              About
            </a>
            <a href="/#experience" className="hover:text-foreground-light dark:hover:text-foreground-dark transition-colors">
              Experience
            </a>
            <a href="/#projects" className="hover:text-foreground-light dark:hover:text-foreground-dark transition-colors">
              Projects
            </a>
            <a href="/#skills" className="hover:text-foreground-light dark:hover:text-foreground-dark transition-colors">
              Skills
            </a>
            <a href="/#education" className="hover:text-foreground-light dark:hover:text-foreground-dark transition-colors">
              Education
            </a>
            <a href="/#contact" className="hover:text-foreground-light dark:hover:text-foreground-dark transition-colors">
              Contact
            </a>
          </nav>

          {/* External Links */}
          <div className="flex items-center gap-4 text-foreground-muted-light dark:text-foreground-muted-dark">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {profileData.linkedinUrl && (
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-lg hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark"
              aria-label="Email Leibern Vicente"
              title="Email Leibern Vicente"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between text-xs text-foreground-muted-light dark:text-foreground-muted-dark gap-2">
          <p>© {currentYear} {profileData.fullName}. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            {profileData.headline} · {profileData.expectedGraduation}
          </p>
        </div>
      </div>
    </footer>
  );
};
