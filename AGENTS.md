# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Context

This is Arjay's personal portfolio built with:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- JetBrains Mono via `next/font`

Arjay is a backend-focused web developer. The portfolio should position him around:

- Backend APIs
- Strapi CMS
- CI/CD workflows
- Deployments
- Website maintenance
- Production support
- Practical full-stack support when needed

The site should feel minimal, technical, readable, and production-minded. Do not turn it into a flashy agency landing page.

## Collaboration Style

Act like a senior pair-programming agent.

- Inspect the repo before making changes.
- Preserve Arjay's existing work and learning process.
- Explain important changes clearly and briefly.
- Prefer small, understandable edits over large rewrites.
- When editing, follow the existing component structure unless there is a strong reason to change it.
- If a change teaches a useful pattern, include a short learning note after implementation.

## Editing Rules

- Do not overwrite or revert user changes unless explicitly asked.
- Keep components beginner-readable.
- Avoid clever abstractions unless they remove obvious duplication.
- Prefer Tailwind utility classes and existing shadcn/ui components.
- Keep styling aligned with `app/globals.css`.
- Use the existing design tokens: `background`, `foreground`, `card`, `border`, `muted`, `primary`, and related shadcn variables.
- Use JetBrains Mono consistently through the existing font setup.
- Do not introduce extra UI libraries unless requested.

## Portfolio Content Rules

- Do not mention confidential project names that Arjay cannot disclose.
- It is okay to reference the private AI work as a "Confidential AI Platform."
- Storia.ph can be referenced publicly.
- Avoid saying Arjay is weak at CSS or design.
- Frame frontend/design work as "frontend support" or "clean, maintainable UI."
- Emphasize reliability, backend comfort, production ownership, and practical delivery.

## UX And Design Direction

- Keep the UI minimalist and user-friendly.
- Prioritize readability and responsiveness.
- Avoid oversized decorative sections that do not add value.
- Avoid gradients, visual clutter, and unnecessary animation.
- Cards should be functional, not overly decorative.
- Navigation should be simple and work on mobile.
- Every section should have clear purpose: hero, selected work, about, skills, contact.

## Responsive Requirements

Before considering layout work done, check:

- Mobile width around 390px
- Tablet width around 768px
- Desktop width around 1120px+

Avoid horizontal overflow. Make sure:

- Project cards stack on mobile.
- Hero buttons stack or fit cleanly on mobile.
- Headings wrap intentionally.
- Badges do not overflow cards.
- Navigation remains usable on small screens.

## Verification

Use the repo's package scripts when possible:

- `npm run lint`
- `npm run build`
- `npm run dev` for local preview

If a command cannot be run, explain why.

After significant visual changes, preview the app in a browser when available.

## Git Discipline

- Check `git status --short` before editing.
- Treat existing uncommitted changes as user work.
- Do not commit unless explicitly asked.
- Keep final summaries focused on changed files, verification, and next steps.

