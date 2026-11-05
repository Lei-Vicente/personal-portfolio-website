import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { Project } from '../../types';
import { AbstractCover } from '../common/AbstractCover';

interface ProjectPreviewProps {
  project: Project;
  className?: string;
  showBrowserBar?: boolean;
  interactive?: boolean;
}

const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 840;

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project,
  className = '',
  showBrowserBar = true,
  interactive = true,
}) => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [scale, setScale] = useState(0.27);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Dynamically calculate scale factor so the 1440x840 widescreen desktop view fits edge-to-edge in a compact height with 0px side gaps
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      if (container) {
        const width = container.clientWidth;
        if (width > 0) {
          setScale(width / DESKTOP_WIDTH);
        }
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  let hostname = `${project.slug}.app`;
  if (project.demoUrl) {
    try {
      hostname = new URL(project.demoUrl).hostname;
    } catch {
      hostname = project.demoUrl;
    }
  }

  const handleReload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.demoUrl) {
      setIsIframeLoading(true);
      setIframeKey((prev) => prev + 1);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#1E202B] dark:bg-[#0D0F17] flex flex-col group/preview ${className}`}
    >
      {/* Authentic Desktop Browser Chrome Bar */}
      {showBrowserBar && (
        <div className="relative z-10 flex items-center justify-between px-3 py-1 sm:py-1.5 bg-[#1E202B] dark:bg-[#11131C] border-b border-white/10 shrink-0 text-slate-300">
          {/* Left: Window Dots & Navigation Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-xs" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-xs" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-xs" />
            </div>

            <div className="hidden xs:flex items-center gap-0.5 text-slate-400 pl-1">
              <button
                type="button"
                className="p-1 rounded hover:bg-white/10 text-slate-500 cursor-not-allowed"
                title="Back"
                disabled
              >
                <ArrowLeft className="w-3 h-3" />
              </button>
              <button
                type="button"
                className="p-1 rounded hover:bg-white/10 text-slate-500 cursor-not-allowed"
                title="Forward"
                disabled
              >
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={handleReload}
                className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors"
                title={project.demoUrl ? 'Reload preview' : 'Project preview active'}
              >
                <RotateCw className={`w-3 h-3 ${isIframeLoading && project.demoUrl ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Center: Real Browser Omnibox URL Bar */}
          <div className="flex-1 min-w-0 max-w-xs sm:max-w-md mx-2 sm:mx-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#282A36] border border-white/10 text-xs text-slate-200 shadow-inner">
              <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
              <span className="font-mono text-[10px] sm:text-[11px] truncate tracking-tight text-slate-300">
                {hostname}
              </span>
            </div>
          </div>

          {/* Right: Avatar & External Launcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Profile Avatar Badge matching user screenshot */}
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center shadow-xs select-none"
              title="Signed in as Lei Vicente"
            >
              L
            </div>

            {/* Open in new tab or case study */}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 sm:p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Open live site in new tab"
                aria-label={`Open ${project.name} in new tab`}
              >
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            ) : (
              <Link
                to={`/projects/${project.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="p-1 sm:p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="View project case study"
                aria-label={`View ${project.name} case study`}
              >
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Showcase Content Area - Edge-to-Edge Desktop Viewport (0px side gaps) */}
      <div
        ref={containerRef}
        style={!className.includes('h-') ? { aspectRatio: `${DESKTOP_WIDTH} / ${DESKTOP_HEIGHT}` } : undefined}
        className="relative w-full overflow-hidden bg-white flex-1 min-h-0"
      >
        {!interactive && project.coverImage ? (
          <div className="relative w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center">
            <img
              src={project.coverImage}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top select-none group-hover/preview:scale-[1.01] transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : interactive && project.demoUrl ? (
          <div className="relative w-full h-full overflow-hidden bg-white">
            {/* Loading Indicator */}
            {isIframeLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/90 text-slate-300">
                <div className="w-6 h-6 border-2 border-accent-light dark:border-accent-dark border-t-transparent rounded-full animate-spin mb-2" />
                <span className="text-[11px] font-mono tracking-tight text-slate-400">
                  Loading desktop view...
                </span>
              </div>
            )}

            {/* Scaled Desktop Viewport Container - Edge-to-Edge */}
            <div
              style={{
                width: `${DESKTOP_WIDTH}px`,
                height: `${DESKTOP_HEIGHT}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0 bg-white"
            >
              <iframe
                key={iframeKey}
                ref={iframeRef}
                src={project.demoUrl}
                title={`${project.name} live application`}
                className="w-full h-full border-0 bg-white"
                scrolling="no"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                onLoad={() => setIsIframeLoading(false)}
              />
            </div>
          </div>
        ) : (
          <AbstractCover
            slug={project.slug}
            category={project.category}
            name={project.name}
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
};
