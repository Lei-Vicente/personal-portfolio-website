# UI Design System & Contract — Leibern R. Vicente Portfolio

> Implements the **UI Craft v3** design standard for the **Experience** (showcase) and **Persuade** (hiring/contact) surfaces.

---

## 1. Design Contract

- **Owner:** Leibern R. Vicente
- **Target Role:** Full-Stack Developer
- **Audience:** Technical recruiters, engineering hiring managers, technical interviewers, and engineering collaborators.
- **Surface:** **Experience** (Project Case Studies & Showcase) + **Persuade** (Hiring & Contact).
- **Core Action:** Explore projects and reach out for software development opportunities (`View Projects` & `Contact Me`).
- **Required States:**
  - Responsive layouts: 320px, 360px, 768px, 1024px, 1280px+.
  - Dark and Light themes with persistent state (`localStorage`) and zero initial flash.
  - Interactive elements: Visible `:focus-visible` focus rings, active press states, smooth micro-interactions.
  - Graceful absence handling: Certifications hidden when empty; missing repository links or screenshots gracefully omitted rather than displaying dead links or empty placeholder boxes.
- **Non-Negotiable Truth In UI:**
  - Zero arbitrary skill percentage bars (e.g. no "React 90%").
  - Zero invented metrics, testimonials, or company logos.
  - Zero unverified project-specific stack claims.
  - Privacy compliance: No personal street address or phone number exposed.

---

## 2. Character & Palette

| Token | Dark Mode (`.dark`) | Light Mode | Rationale |
| :--- | :--- | :--- | :--- |
| **Background** | `#0B1120` (Slate 950 Deep) | `#F8FAFC` (Slate 50) | High readability, clean contrast |
| **Main Surface** | `#111827` (Gray 900) | `#FFFFFF` (Pure White) | Structural card separation |
| **Subtle Surface** | `#1E293B` (Slate 800) | `#F1F5F9` (Slate 100) | Nested panels, badges, code tags |
| **Primary Text** | `#F8FAFC` (Slate 50) | `#0F172A` (Slate 900) | WCAG AAA contrast for body copy |
| **Secondary Text**| `#94A3B8` (Slate 400) | `#475569` (Slate 600) | Subtle metadata, secondary labels |
| **Border** | `#334155` (Slate 700) | `#E2E8F0` (Slate 200) | Crisp delineation without heavy hairlines |
| **Accent** | `#818CF8` (Indigo 400) | `#4F46E5` (Indigo 600) | Intentional interactive focus & brand accent |

---

## 3. Typography & Hierarchy

- **Primary Sans:** `Plus Jakarta Sans`, `Poppins`, `Inter`, system-ui, -apple-system, sans-serif.
  - Headings: `font-semibold` / `font-bold`, smooth geometric curves, max 2 lines at any width.
  - Body: 16–18px desktop with relaxed line-height (`leading-relaxed`), max reading width ~72ch.
- **Monospace:** `JetBrains Mono`, ui-monospace, monospace.
  - Reserved strictly for technical tags, dates, status badges, and code symbols.

---

## 4. Motion Guidelines

- Respects `prefers-reduced-motion: reduce`.
- Duration: 150ms–350ms with easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Restrained animations only: reveals on scroll (`opacity` and `translateY`), filter transitions, and tactile button press feedback (`scale(0.98)`).
- Strictly no looping typewriters, no cursor trails, and no scroll-jacking.
