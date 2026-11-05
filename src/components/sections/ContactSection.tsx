import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profileData.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = profileData.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Silently fail if clipboard denied
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 border-t border-border-light dark:border-border-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Heading, context, and availability */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <SectionHeading
              label="Get in Touch"
              title="Let's connect."
              description="I'm interested in Full-Stack Developer opportunities, technical collaborations, and conversations about building useful software."
              className="mb-6 !max-w-none"
            />

            <div className="space-y-4 text-sm text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed mb-6">
              <p>
                Whether you have questions about my projects, capstone scope, or potential entry-level engineering roles, feel free to reach out directly.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-foreground-light dark:text-foreground-dark">
                <MapPin className="w-3.5 h-3.5 text-accent-light dark:text-accent-dark shrink-0" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Stack Opportunities</span>
            </div>
          </div>

          {/* Right Column: Full-width Interactive Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {/* Email Card (Full width) */}
            <div className="sm:col-span-2 p-6 sm:p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-accent-light/30 dark:hover:border-accent-dark/30 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark">
                    <Mail className="w-6 h-6" />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark bg-surface-subtle-light dark:bg-surface-subtle-dark transition-colors focus-visible:ring-2 focus-visible:ring-accent-light"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-base sm:text-lg font-bold text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors break-all"
                >
                  {profileData.email}
                </a>
                <p className="mt-2 text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                  Direct communication for recruiters & engineering collaborators.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-light dark:border-border-dark">
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent-light dark:text-accent-dark hover:underline"
                >
                  <span>Open default mail client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            {profileData.linkedinUrl && (
              <div className="p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-accent-light/30 dark:hover:border-accent-dark/30 transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <LinkedinIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                      <Sparkles className="w-3 h-3 text-accent-light dark:text-accent-dark" />
                      <span>Professional</span>
                    </div>
                  </div>

                  <p className="text-xs font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1">
                    LinkedIn
                  </p>
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors truncate block"
                  >
                    lei-vicente
                  </a>
                  <p className="mt-2 text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                    Professional network, background & connections.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-light dark:border-border-dark">
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark transition-colors"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* GitHub Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-accent-light/30 dark:hover:border-accent-dark/30 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-surface-subtle-light dark:bg-surface-subtle-dark text-foreground-light dark:text-foreground-dark">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                    <Sparkles className="w-3 h-3 text-accent-light dark:text-accent-dark" />
                    <span>Public Work</span>
                  </div>
                </div>

                <p className="text-xs font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1">
                  GitHub Profile
                </p>
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors truncate block"
                >
                  github.com/Lei-Vicente
                </a>
                <p className="mt-2 text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                  Source code, academic repositories & commits.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-light dark:border-border-dark">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark transition-colors"
                >
                  <span>View repositories & activity</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
