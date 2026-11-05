import React, { useState, useEffect } from 'react';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  FileText,
  Sparkles,
  Send,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { Container } from '../common/Container';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [phtTime, setPhtTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Manila',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setPhtTime(timeString);
      } catch {
        // Fallback if Intl.DateTimeFormat fails
        setPhtTime('');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 border-t border-border-light dark:border-border-dark overflow-hidden">
      {/* Ambient Radial Lighting & Subtle Dot Matrix (Matching Hero Aesthetic) */}
      <div className="absolute inset-0 pointer-events-none select-none -z-10" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-t from-indigo-500/10 via-purple-500/5 to-transparent dark:from-indigo-600/15 dark:via-purple-600/5 dark:to-transparent blur-3xl opacity-70" />
        <div className="absolute inset-0 opacity-30 dark:opacity-15 [background-image:radial-gradient(rgba(79,70,229,0.3)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(129,140,248,0.4)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_70%,#000_50%,transparent_100%)]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shadow-xs mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Full-Stack Developer Roles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark leading-tight mb-4">
            Let's build something reliable together.
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
            Interested in discussing an engineering role, technical collaboration, or project architecture? Reach out through any of the channels below.
          </p>
        </div>

        {/* Bento Grid Hub */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Primary Action Card: Direct Email Channel (7 Cols) */}
          <div className="md:col-span-12 lg:col-span-7 p-6 sm:p-8 lg:p-9 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:border-accent-light/40 dark:hover:border-accent-dark/40 transition-all duration-200 flex flex-col justify-between group/email">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2.5">
                  <div className="p-3 rounded-2xl bg-accent-light/10 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-accent-light dark:text-accent-dark font-semibold">
                      Primary Channel
                    </span>
                    <span className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                      Direct Communication
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fast Response</span>
                </span>
              </div>

              <div className="mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1.5">
                  Email Address
                </p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors tracking-tight break-all block"
                >
                  {profileData.email}
                </a>
                <p className="mt-2 text-xs sm:text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
                  Direct line for engineering recruiters, hiring managers, and collaborative opportunities.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-border-light dark:border-border-dark flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-light text-white dark:bg-accent-dark dark:text-slate-950 text-sm font-semibold hover:bg-accent-hover-light dark:hover:bg-accent-hover-dark transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent-light"
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-xl bg-surface-subtle-light dark:bg-surface-subtle-dark text-foreground-light dark:text-foreground-dark border border-border-light dark:border-border-dark text-sm font-medium hover:bg-border-light/50 dark:hover:bg-border-dark/50 transition-colors shadow-2xs focus-visible:ring-2 focus-visible:ring-accent-light"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-foreground-muted-light dark:text-foreground-muted-dark" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Secondary Card: Location & Timezone Beacon (5 Cols) */}
          <div className="md:col-span-12 lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:border-accent-light/40 dark:hover:border-accent-dark/40 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Location & Timezone
                  </span>
                  <span className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                    Work Authorization
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1">
                    Based in
                  </p>
                  <p className="text-base sm:text-lg font-bold text-foreground-light dark:text-foreground-dark">
                    {profileData.location}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-subtle-light dark:bg-surface-subtle-dark border border-border-light dark:border-border-dark flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-light dark:text-accent-dark shrink-0" />
                    <span className="text-xs font-mono text-foreground-muted-light dark:text-foreground-muted-dark">
                      Local Time (PHT)
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-foreground-light dark:text-foreground-dark">
                    {phtTime || 'GMT+8'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-light dark:border-border-dark mt-6">
              <p className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark">
                Open to <strong className="text-foreground-light dark:text-foreground-dark font-semibold">On-Site</strong>, <strong className="text-foreground-light dark:text-foreground-dark font-semibold">Hybrid</strong>, and <strong className="text-foreground-light dark:text-foreground-dark font-semibold">Remote</strong> full-stack software development roles.
              </p>
            </div>
          </div>

          {/* Tertiary Card: LinkedIn Profile (4 Cols) */}
          {profileData.linkedinUrl && (
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-6 lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:border-blue-500/50 hover:bg-surface-subtle-light/40 dark:hover:bg-surface-subtle-dark/40 transition-all duration-200 flex flex-col justify-between group/link focus-visible:ring-2 focus-visible:ring-accent-light"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover/link:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground-subtle-light dark:text-foreground-subtle-dark group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </div>

                <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1">
                  Professional Network
                </span>
                <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors mb-1.5">
                  Connect on LinkedIn
                </h3>
                <p className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                  Career trajectory, professional connections, and industry endorsements.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-border-light dark:border-border-dark flex items-center justify-between text-xs font-mono text-accent-light dark:text-accent-dark font-medium">
                <span>/in/lei-vicente</span>
                <span>Visit →</span>
              </div>
            </a>
          )}

          {/* Tertiary Card: GitHub Profile (4 Cols) */}
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-6 lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:border-accent-light/50 hover:bg-surface-subtle-light/40 dark:hover:bg-surface-subtle-dark/40 transition-all duration-200 flex flex-col justify-between group/github focus-visible:ring-2 focus-visible:ring-accent-light"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-surface-subtle-light dark:bg-surface-subtle-dark text-foreground-light dark:text-foreground-dark group-hover/github:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground-subtle-light dark:text-foreground-subtle-dark group-hover/github:text-accent-light dark:group-hover/github:text-accent-dark group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5 transition-all" />
              </div>

              <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1">
                Open Source & Code
              </span>
              <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark group-hover/github:text-accent-light dark:group-hover/github:text-accent-dark transition-colors mb-1.5">
                Explore GitHub
              </h3>
              <p className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                Production repositories, system architectures, and commit activity.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-border-light dark:border-border-dark flex items-center justify-between text-xs font-mono text-accent-light dark:text-accent-dark font-medium">
              <span>@Lei-Vicente</span>
              <span>Visit →</span>
            </div>
          </a>

          {/* Tertiary Card: Resume & Credentials (4 Cols) */}
          <a
            href={profileData.resumeUrl || '/resume/Leibern_R_Vicente_Resume_Public.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-12 lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:border-emerald-500/50 hover:bg-surface-subtle-light/40 dark:hover:bg-surface-subtle-dark/40 transition-all duration-200 flex flex-col justify-between group/resume focus-visible:ring-2 focus-visible:ring-accent-light"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover/resume:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground-subtle-light dark:text-foreground-subtle-dark group-hover/resume:text-emerald-600 dark:group-hover/resume:text-emerald-400 group-hover/resume:translate-x-0.5 group-hover/resume:-translate-y-0.5 transition-all" />
              </div>

              <span className="block text-[11px] font-mono uppercase tracking-wider text-foreground-subtle-light dark:text-foreground-subtle-dark mb-1">
                Curriculum Vitae
              </span>
              <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark group-hover/resume:text-emerald-600 dark:group-hover/resume:text-emerald-400 transition-colors mb-1.5">
                Download Resume
              </h3>
              <p className="text-xs text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed">
                Official technical resume formatted for technical recruiters and ATS parsing.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-border-light dark:border-border-dark flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
              <span>PDF · Public Version</span>
              <span>Open PDF →</span>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
};
