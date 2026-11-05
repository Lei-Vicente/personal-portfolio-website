import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { certificationsData } from '../../data/certifications';
import { profileData } from '../../data/profile';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [pillStyle, setPillStyle] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
    opacity: number;
    duration: number;
  }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
    duration: 300,
  });

  const location = useLocation();
  const navContainerRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const prevSectionRef = useRef<string>('home');
  const isManualNavRef = useRef<boolean>(false);
  const manualNavTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sections = useMemo(() => [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(certificationsData.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
    { id: 'contact', label: 'Contact' },
  ], []);

  const navLinks = useMemo(() => [
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Experience', href: '/#experience', id: 'experience' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Education', href: '/#education', id: 'education' },
    ...(certificationsData.length > 0 ? [{ name: 'Certifications', href: '/#certifications', id: 'certifications' }] : []),
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ], []);

  // Unlock scroll lock helper
  const unlockScroll = useCallback(() => {
    isManualNavRef.current = false;
    if (manualNavTimeoutRef.current) {
      clearTimeout(manualNavTimeoutRef.current);
      manualNavTimeoutRef.current = null;
    }
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Listen for scrollend to release manual navigation lock
  useEffect(() => {
    const handleScrollEnd = () => {
      if (isManualNavRef.current) {
        unlockScroll();
      }
    };

    window.addEventListener('scrollend', handleScrollEnd);
    return () => {
      window.removeEventListener('scrollend', handleScrollEnd);
      if (manualNavTimeoutRef.current) {
        clearTimeout(manualNavTimeoutRef.current);
      }
    };
  }, [unlockScroll]);

  // Smooth scroll spy: tracks active section based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      // If manual navigation (link click) is in progress, do not let scroll events thrash intermediate tabs
      if (isManualNavRef.current) {
        return;
      }

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page: activate contact
      if (scrollPosition + windowHeight >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Top of page: activate overview/home
      if (scrollPosition < 160) {
        setActiveSection('home');
        return;
      }

      // Mid-page: activate whichever section intersects threshold
      const triggerPoint = scrollPosition + windowHeight * 0.35;
      let matchedSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (triggerPoint >= top && triggerPoint < top + height) {
            matchedSection = section.id;
            break;
          } else if (triggerPoint >= top) {
            matchedSection = section.id;
          }
        }
      }

      setActiveSection(matchedSection);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname, sections]);

  // Update sliding pill position and size smoothly across all transitions
  useEffect(() => {
    const linkIds = navLinks.map((l) => l.id);
    const prevIdx = linkIds.indexOf(prevSectionRef.current);
    const nextIdx = linkIds.indexOf(activeSection);

    // Calculate distance to dynamically tailor the physical glide duration
    const distance =
      prevIdx !== -1 && nextIdx !== -1 ? Math.abs(nextIdx - prevIdx) : 1;
    // Seamless gliding duration: ~280ms for adjacent, up to ~420ms for full-width travel
    const duration = Math.min(420, Math.max(280, 260 + distance * 32));

    prevSectionRef.current = activeSection;

    const updatePillGeometry = () => {
      const activeEl = linkRefs.current[activeSection];
      const navContainer = navContainerRef.current;

      if (activeEl && navContainer) {
        const containerRect = navContainer.getBoundingClientRect();
        const linkRect = activeEl.getBoundingClientRect();
        const left = linkRect.left - containerRect.left;
        const top = linkRect.top - containerRect.top;
        const width = linkRect.width;
        const height = linkRect.height;

        setPillStyle({
          left,
          top,
          width,
          height,
          opacity: 1,
          duration,
        });
      } else {
        // If on 'home' or page without matching nav item, smoothly fade pill out
        setPillStyle((prev) => ({ ...prev, opacity: 0, duration: 250 }));
      }
    };

    updatePillGeometry();

    const handleResize = () => {
      updatePillGeometry();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection, navLinks]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();

      // Lock scroll spy so scrolling past intermediate sections does not trigger intermediate jumps
      isManualNavRef.current = true;
      if (manualNavTimeoutRef.current) {
        clearTimeout(manualNavTimeoutRef.current);
      }

      scrollToSection(id);

      // Fallback unlock after smooth scroll duration completes
      manualNavTimeoutRef.current = setTimeout(() => {
        isManualNavRef.current = false;
      }, 850);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();

      isManualNavRef.current = true;
      if (manualNavTimeoutRef.current) {
        clearTimeout(manualNavTimeoutRef.current);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');

      manualNavTimeoutRef.current = setTimeout(() => {
        isManualNavRef.current = false;
      }, 850);
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-4 pointer-events-none">
      {/* Mobile Click-Outside Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/25 dark:bg-black/50 backdrop-blur-xs pointer-events-auto md:hidden z-40 animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Dynamic Island Floating Bar */}
      <div className="pointer-events-auto relative z-50 flex items-center justify-between gap-2.5 sm:gap-4 md:gap-6 bg-surface-light/85 dark:bg-surface-dark/90 text-foreground-light dark:text-foreground-dark backdrop-blur-xl border border-border-light/90 dark:border-border-dark/80 rounded-full pl-2.5 pr-3 py-2 sm:py-2.5 shadow-lg shadow-slate-900/5 dark:shadow-2xl dark:shadow-black/50 transition-all duration-300 hover:border-accent-light/40 dark:hover:border-accent-dark/40 max-w-full">
        
        {/* Left: Brand Monogram Icon */}
        <Link
          to="/#home"
          onClick={handleHomeClick}
          className="flex items-center group p-0.5 sm:p-1 focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark rounded-full shrink-0"
          aria-label="Leibern Vicente - Home"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-9.5 md:h-9.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-extrabold flex items-center justify-center text-xs sm:text-sm tracking-tight group-hover:scale-105 transition-transform shadow-sm">
            LV
          </div>
        </Link>

        {/* Center: Desktop Navigation Links with Pure Smooth Gliding Capsule */}
        <nav
          ref={navContainerRef}
          className="hidden md:flex relative items-center gap-1 text-sm font-medium text-foreground-muted-light dark:text-foreground-muted-dark p-0.5"
          aria-label="Main Navigation"
        >
          {/* Continuous Gliding Capsule across all modules */}
          <div
            className="absolute top-0 left-0 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm pointer-events-none ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
            style={{
              transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
              width: `${pillStyle.width}px`,
              height: `${pillStyle.height}px`,
              opacity: pillStyle.opacity,
              transitionProperty: 'transform, width, height, opacity',
              transitionDuration: `${pillStyle.duration}ms`,
            }}
          />

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                ref={(el) => {
                  linkRefs.current[link.id] = el;
                }}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative z-10 inline-flex items-center justify-center text-center px-4 py-2 rounded-full transition-colors duration-250 select-none text-sm ${
                  isActive
                    ? 'text-white dark:text-slate-950 font-semibold'
                    : 'hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-surface-subtle-light/60 dark:hover:bg-surface-subtle-dark/60'
                }`}
              >
                <span className="leading-none text-center block">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Theme Toggle & Pill Button) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle
            className="p-2 sm:p-2.5 text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark"
          />

          {/* Desktop "Resume" Pill Button */}
          <a
            href={profileData.resumeUrl || '/resume/Leibern_R_Vicente_Resume_Public.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume (PDF)"
            aria-label="View Leibern Vicente's resume in a new tab"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark whitespace-nowrap shrink-0 group"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 sm:p-2.5 rounded-full text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dynamic Island Expanded Dropdown Card */}
      {isOpen && (
        <div className="pointer-events-auto relative z-50 md:hidden mt-2.5 w-full max-w-sm rounded-3xl bg-surface-light/95 dark:bg-surface-dark/95 text-foreground-light dark:text-foreground-dark backdrop-blur-2xl border border-border-light dark:border-border-dark p-4 shadow-2xl shadow-slate-900/10 dark:shadow-black/60 animate-in fade-in zoom-in-95 duration-150">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-2xl transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold shadow-xs'
                      : 'text-foreground-muted-light dark:text-foreground-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-surface-subtle-light dark:hover:bg-surface-subtle-dark'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-border-light dark:border-border-dark">
              <a
                href={profileData.resumeUrl || '/resume/Leibern_R_Vicente_Resume_Public.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                title="View Resume (PDF)"
                aria-label="View Leibern Vicente's resume in a new tab"
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-sm font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
