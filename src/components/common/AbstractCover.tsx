import React from 'react';
import { ProjectCategory } from '../../types';

interface AbstractCoverProps {
  slug: string;
  category: ProjectCategory;
  name: string;
  className?: string;
}

export const AbstractCover: React.FC<AbstractCoverProps> = ({
  slug,
  name,
  className = '',
}) => {
  if (slug === 'financeos') {
    return (
      <div
        className={`w-full h-full min-h-[200px] bg-surface-subtle-light dark:bg-surface-subtle-dark relative overflow-hidden flex items-center justify-center p-6 ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-40 dark:opacity-25 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]" />
        <svg
          viewBox="0 0 320 160"
          className="w-full max-w-sm h-auto relative z-10 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="20" y1="130" x2="300" y2="130" stroke="currentColor" className="text-border-light dark:text-border-dark" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="20" y1="80" x2="300" y2="80" stroke="currentColor" className="text-border-light dark:text-border-dark" strokeWidth="1" strokeDasharray="4 4" />
          <path
            d="M 30 110 Q 90 100 130 65 T 220 50 T 290 30"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="130" cy="65" r="5" fill="#10B981" />
          <circle cx="220" cy="50" r="5" fill="#10B981" />
          <circle cx="290" cy="30" r="6" fill="#10B981" />
          <rect x="40" y="30" width="60" height="24" rx="4" className="fill-surface-light dark:fill-surface-dark stroke-border-light dark:stroke-border-dark" strokeWidth="1" />
          <line x1="50" y1="42" x2="80" y2="42" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="sr-only">Abstract finance ledger graphic for {name}</span>
      </div>
    );
  }

  if (slug === 'practisync') {
    return (
      <div
        className={`w-full h-full min-h-[220px] bg-slate-900 text-slate-100 relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-10 select-none ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Architecture Blueprint Card */}
        <div className="relative z-10 w-full max-w-xl bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-300">
                PractiSync System Architecture
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
              4-Tier Role RBAC
            </span>
          </div>

          {/* 4-Tier Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4 text-center">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">Tier 1</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">Student</div>
              <div className="text-[10px] text-slate-400 mt-0.5">DTR & Hours</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">Tier 2</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">Coordinator</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Dossier Review</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">Tier 3</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">Supervisor</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Performance Rating</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">Tier 4</div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">Super Admin</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Curriculum Policy</div>
            </div>
          </div>

          {/* Central Engine Strip */}
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-slate-300">DTR Calculation & Verification Engine</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-indigo-300">
              <span>Dynamic OJT Forms</span>
              <span>·</span>
              <span>Audit Records</span>
            </div>
          </div>
        </div>

        <span className="sr-only">PractiSync system architecture and role overview for {name}</span>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full min-h-[200px] bg-surface-subtle-light dark:bg-surface-subtle-dark relative overflow-hidden flex items-center justify-center p-6 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-40 dark:opacity-25 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]" />
      <svg
        viewBox="0 0 320 160"
        className="w-full max-w-sm h-auto relative z-10 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="70" y="35" width="180" height="90" rx="8" className="fill-surface-light dark:fill-surface-dark stroke-border-light dark:stroke-border-dark" strokeWidth="1.5" />
        <rect x="85" y="50" width="70" height="8" rx="2" className="fill-border-light dark:fill-border-dark" />
        <rect x="85" y="66" width="120" height="6" rx="2" className="fill-surface-subtle-light dark:fill-surface-subtle-dark" />
        <rect x="85" y="80" width="90" height="6" rx="2" className="fill-surface-subtle-light dark:fill-surface-subtle-dark" />
        <circle cx="215" cy="80" r="14" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1.5" />
        <polyline points="209,80 213,84 221,76" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">Abstract business workflow graphic for {name}</span>
    </div>
  );
};
