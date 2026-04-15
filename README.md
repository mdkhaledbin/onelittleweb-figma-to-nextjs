# OneLittleWeb Mid-Level Web Developer Hiring Assessment

Production-quality, pixel-perfect Next.js landing page implementation based on the provided Figma design, with strong focus on layout accuracy, responsive behavior, reusable architecture, and clean engineering standards.

## Hiring Assessment Context

This repository is a practical submission for the Mid-Level Web Developer hiring assessment at OneLittleWeb.

Primary objective:

- Convert the provided Figma design into a fully functional landing page
- Build with Next.js
- Maintain high fidelity in spacing, typography, alignment, visual hierarchy, and responsive behavior

## Quick Requirement Verification

- [✅] Implemented as a working Next.js project
- [✅] Design translated into a pixel-accurate landing page
- [✅] Responsive behavior implemented across desktop, tablet, and mobile
- [✅] Reusable React component architecture applied
- [✅] Codebase structured for maintainability and future extension

## Links

- Live URL: https://onelittleweb-figma-to-nextjs.netlify.app/


## Features

- Pixel-accurate UI implementation based on Figma reference
- Responsive layout tuned for common breakpoints
- Reusable, section-driven component architecture
- Clean separation of routing, presentation, and shared data
- App Router-based route composition (including dynamic route patterns)
- Smooth interaction and motion support where appropriate

## Tech Stack

- Framework: Next.js (App Router)
- Library: React
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion
- Linting: ESLint
- Deployment: Netlify

## Project Structure

Typical structure used in this repository:

```text
.
|-- app/
|   |-- layout.tsx
|   |-- page.tsx
|   |-- globals.css
|   |-- services/
|   |   `-- [slug]/page.tsx
|   `-- pricing/
|       `-- [pricing-type]/page.tsx
|----- @modal
|       |-- (.)services/
|       |    `-- [slug]/page.tsx
|       `-- (.)pricing/
|            `-- [pricing-type]/page.tsx
|-- components/
|   |-- sections/
|   |-- common/
|   |-- hero/
|   |-- services/
|   |-- pricing/
|   |-- about/
|   `-- review/
|-- lib/
|   `-- constants.tsx
|-- public/
|-- next.config.ts
|-- tailwind.config.ts
|-- tsconfig.json
`-- package.json
```

## Approach and Implementation

### Componentization Strategy

- Built the page as composable section components to keep each part focused and testable
- Extracted shared UI elements (buttons, wrappers, modal primitives, icons) into reusable units
- Kept data flow predictable by centralizing shared display content and metadata in a constants module

### Responsiveness Handling

- Implemented a mobile-first layout strategy with controlled breakpoint scaling
- Maintained consistent spacing rhythm and container constraints across viewport sizes
- Validated visual balance and readability for desktop, tablet, and mobile variants

### Design Fidelity Approach

- Matched typography scale, spacing, alignment, and component proportions against Figma
- Preserved section hierarchy and interaction expectations from the source design
- Reduced design drift by using consistent utility patterns and shared design tokens

## Data Handling

Current implementation uses static constants from a shared module for predictable rendering and clean component reuse.

Data is currently stored as static constants for performance and simplicity. This can be easily migrated to an API layer (e.g., Next.js API routes or external backend) if dynamic content is required.

## Performance Considerations

- Lean component composition to avoid unnecessary render complexity
- Static data usage for fast initial rendering and low runtime overhead
- Optimized asset usage through Next.js conventions and public asset organization
- Route and section structure designed for future incremental optimization

## Run Locally

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Deployment

Deployed at: Netlify

Recommended flow:

1. Pushed repository to GitHub
2. Imported repository into Netlify
3. Configured project (framework auto-detected as Next.js)
4. Deployed and verified responsive behavior on the live URL

## Time Taken

- Total implementation time: 8± hours

## Evaluation Note

This submission is intentionally structured for rapid recruiter and engineering review. It demonstrates attention to detail in UI execution, thoughtful component architecture, responsive implementation quality, and production-oriented frontend practices expected from a mid-level developer.
