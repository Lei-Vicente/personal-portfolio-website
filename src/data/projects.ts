import { Project } from '../types';

export const projectsData: Project[] = [
  {
    slug: 'financeos',
    name: 'FinanceOS',
    category: 'Personal',
    summary: 'A sovereign personal finance management platform and real-time multi-wallet liquidity ledger.',
    role: 'Full-Stack Developer',
    overview:
      'FinanceOS is a full-stack personal finance web application and Progressive Web App (PWA) built with React, Vite, Tailwind CSS, an Express.js backend API, and a PostgreSQL database in Docker. It provides a real-time liquid balance ledger uniting physical cash, traditional banks, and mobile e-wallets (GCash, Maya, GoTyme, BDO, BPI, SeaBank, etc.) with zero third-party subscription lock-in.',
    problem:
      'Tracking personal liquidity across disparate banking apps, mobile e-wallets, and cash reserves frequently leads to fragmented records, blind spots in recurring cash flow, and tedious manual accounting.',
    goal:
      'To build a sovereign, responsive web application that centralizes multi-channel balances, provides instant category budgeting with visual progress, and delivers keyboard-first productivity without subscription bloat or third-party credential dependencies.',
    pillars: [
      {
        title: 'Multi-Wallet Liquidity Ledger',
        description: 'Consolidated real-time balance tracking across traditional banking, mobile e-wallets (GCash, Maya, GoTyme), cash on hand, and investments.',
      },
      {
        title: 'Visual Budgets & Savings Funds',
        description: 'Monthly spending caps with real-time progress indicators, status alerts, and dedicated savings milestone funds.',
      },
      {
        title: 'Automated Recurring Bills',
        description: 'Background recurring transaction processor with due date scheduling, operational toast feedback, and payment status tracking.',
      },
      {
        title: 'PWA & Keyboard-First Architecture',
        description: 'Installable Progressive Web App with dedicated iOS/Android/Desktop install guides, persistent caching, and desktop Ctrl+K command palette.',
      },
    ],
    implementedFeatures: [
      'Multi-wallet liquidity ledger (Banks, E-Wallets: GCash, Maya, GoTyme, BDO, BPI, Cash, Investments)',
      'Transaction ledger with flexible category select, tags, inflow/outflow indicators, and date filtering',
      'Monthly budget caps with visual progress bars and confined calendar month picker',
      'Dedicated savings milestone funds with goal progress tracking and deposit history',
      'Automated recurring bill engine with due date processing and operational status feedback',
      'Financial analytics: interactive cash flow charts, net-worth telemetry, and CSV report export',
      'Installable Progressive Web App (PWA) with device auto-detect install guide modal',
      'Desktop command palette (Ctrl+K) for rapid keyboard navigation and quick actions',
      'Express.js REST API with Docker PostgreSQL backend, JWT authentication, and automated test suite',
    ],
    myContributions: [
      'Architected and implemented the client-side PWA and local Express API with PostgreSQL in Docker',
      'Engineered multi-channel liquidity ledger and automated recurring transaction processor',
      'Built interactive budget progress tracking, savings funds, and financial analytics charts',
      'Implemented desktop command palette shortcuts (Ctrl+K) and install tutorial guide modal',
      'Configured automated verification test suites and deployed production releases to Vercel',
    ],
    technologies: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Express.js',
      'PostgreSQL (Docker)',
      'PWA (Service Worker)',
      'Framer Motion',
      'Chart.js / Recharts',
    ],
    demoUrl: 'https://personal-financial-management-syste-six.vercel.app/',
    coverImage: '/images/projects/financeos.png',
    screenshots: ['/images/projects/financeos.png', '/images/projects/financeos-full.png'],
    repoUrl: undefined,
    visibility: 'public',
    accentColor: '#10B981',
  },
  {
    slug: 'practisync',
    name: 'PractiSync',
    category: 'Academic',
    summary:
      'An academic capstone platform engineered for Rizal Technological University (RTU) to centralize OJT practicum management, digital records, and verification workflows.',
    role: 'Full-Stack Developer (Capstone Lead)',
    overview:
      'PractiSync is an academic capstone web application designed for the College of Engineering and Technology at Rizal Technological University (RTU). It centralizes on-the-job training (OJT) coordination across four distinct role-based portals: Students, Faculty Coordinators, Industry Partner Supervisors, and Super Administrators.',
    problem:
      'Traditional practicum management at RTU relied on physical logbooks, fragmented paper compliance dossiers, delayed coordinator sign-offs, and disjointed coordination across dispersed partner host companies.',
    goal:
      'To engineer a unified practicum management system that centralizes student compliance dossiers, automates Daily Training Records (DTR), enforces course-hour requirements, and provides an audited multi-role evaluation lifecycle.',
    pillars: [
      {
        title: '4-Tier Role Workspaces',
        description: 'Dedicated role portals for Students, Coordinators, Industry Supervisors, and Super Admins.',
      },
      {
        title: 'Digital DTR & Hour Auditing',
        description: 'Daily time in/out, break calculations, narrative journals, and verified progress tracking against required course hours.',
      },
      {
        title: 'Compliance Dossier & Forms',
        description: 'Dynamic OJT forms generation, PDF/Word downloads, requirement checklists, and coordinator verification queues.',
      },
      {
        title: 'Industry & Recruitment Portal',
        description: 'Host training establishment directory, student opportunity applications, supervisor evaluations, and rubric assessments.',
      },
    ],
    discussedScope: [
      'Student workspace with required-hour progress, DTR logging, class code joining, and SOS support',
      'Coordinator dashboard with review queues, class roster management, and document verification',
      'Industry Partner Supervisor portal for opportunity posting, applicant review, and student performance ratings',
      'Super Admin module for curriculum management, academic units, course hour policies, and account provisioning',
      'Dynamic document generation with draft saving, printable PDF/Word templates, and revision history',
      'Weekly progress reports with competency self-assessments, rubric scoring, and supervisor feedback',
      'Company directory, recruitment opportunity postings, and student application tracking',
      'Course hour policy versioning with snapshotted graduation target tracking',
    ],
    myContributions: [
      'Led the capstone architecture and 4-tier role specification for RTU practicum operations',
      'Engineered student DTR daily time logging, break calculation, and verified hour tracking',
      'Designed coordinator review queues, document status verification, and hour policy versioning',
      'Developed printable evaluation form models and multi-party supervisor feedback structures',
    ],
    technologies: [
      'Next.js / React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma ORM',
      'Role-Based Access Control (RBAC)',
      'Relational Data Modeling',
    ],
    demoUrl: 'https://practi-sync.vercel.app/',
    repoUrl: undefined,
    visibility: 'public',
    accentColor: '#6366F1',
  },
  {
    slug: 'sales-reimbursement-system',
    name: 'Sales Reimbursement System',
    category: 'Business',
    summary:
      'An enterprise expense platform uniting reimbursement claims, cash advances, and liquidations into an audited workflow. Contributed as a Full-Stack Developer to maintain and expand the established codebase.',
    role: 'Full-Stack Developer (Feature Development & Maintenance)',
    overview:
      'The Sales Reimbursement System is an enterprise business application built with Next.js, Prisma, and PostgreSQL that digitizes employee expense filing, receipt verification, and multi-tier approval workflows. I joined the development team during my internship, contributing as a Full-Stack Developer to navigate the established codebase, implement key reimbursement role workflows, refine claim calculations, and support production deployment.',
    problem:
      'Manual expense vouchers, paper receipts, and uncoordinated cash advances lead to delayed payouts, reconciliation bottlenecks, and limited audit visibility across sales teams and finance custodians.',
    goal:
      'To build a centralized, auditable reimbursement pipeline connecting requestors, approvers, cash custodians, finance personnel, and administrators with strict role-based access and automated settlement tracking.',
    pillars: [
      {
        title: 'Unified Claim & Liquidation Pipeline',
        description: 'Consolidated handling of standard reimbursements, transport claims, cash advance requests, and expense liquidations.',
      },
      {
        title: '5-Tier Role-Based Workflow',
        description: 'Distinct portals and permissions for Requestors, Approvers, Custodians, Finance Staff, and Administrators.',
      },
      {
        title: 'Secure Payout Release Codes',
        description: 'Two-party cash disbursement verification where custodians generate release codes and requestors verify receipt.',
      },
      {
        title: 'Relational Audit & Master Data',
        description: 'Prisma-backed relational audit trail tracking status transitions, delegation reassignments, and policy caps (PHP 1,000 per claim).',
      },
    ],
    implementedFeatures: [
      'Multi-type claim filing (Standard Reimbursements, Transport Claims, and Cash Advances)',
      'Cash advance liquidation workflow with itemized expense breakdown and receipt attachments',
      'Minutes of Meeting (MOM) and Letters of Agreement (LOA) activity documentation',
      'Hierarchical approval matrix with approve, reject, return, delegate, and transfer capabilities',
      'Custodian cash disbursement terminal with 2-factor release code confirmation',
      'Finance reporting views and company master data administration',
      'Receipt storage integration with Supabase Storage and Prisma schema migrations',
      'Automated testing pipeline with Jest unit suites and Playwright end-to-end coverage',
    ],
    myContributions: [
      'Joined active team codebase during internship, collaborating via Git feature branches and code reviews',
      'Implemented and refined core reimbursement role workflows, status transitions, and action controls',
      'Enhanced claim expense detail views, receipt attachment handling, and summary amount calculations',
      'Maintained and extended Next.js Route Handlers and Prisma schema models for financial records',
      'Diagnosed and resolved workflow edge cases across requestor, approver, and custodian user roles',
      'Verified and supported the live application deployment on Vercel',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma ORM',
      'PostgreSQL',
      'Tailwind CSS',
      'Supabase Storage',
      'Playwright E2E',
    ],
    demoUrl: 'https://sales-reimbursment-system.vercel.app/',
    coverImage: '/images/projects/sales-reimbursement.png',
    screenshots: ['/images/projects/sales-reimbursement.png', '/images/projects/sales-reimbursement-full.png'],
    repoUrl: undefined,
    visibility: 'public',
    accentColor: '#F59E0B',
  },
];
