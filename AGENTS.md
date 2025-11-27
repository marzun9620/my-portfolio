# Repository Guidelines

This repo is a Next.js 16 + TypeScript portfolio site styled with Tailwind CSS 4. Keep changes focused, typed, and accessible.

## Project Structure & Module Organization
- `app/`: App Router entry (`layout.tsx`, `page.tsx`), global styles in `globals.css`, and static assets like `favicon.ico`.
- `components/`: Reusable sections (`hero-section.tsx`, `navigation.tsx`, `skills-section.tsx`, etc.); keep new UI in similarly scoped files.
- `lib/utils.ts`: Shared utilities (e.g., `cn` for class merging). Prefer adding small helpers here before duplicating logic.
- `public/`: Static images (`/profile.png`, logos) served directly; add new assets here and reference with absolute paths.
- Root configs: `eslint.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `next.config.ts`, `components.json` (shadcn/ui setup).

## Build, Test, and Development Commands
- `npm run dev`: Start the local dev server at `http://localhost:3000` with HMR.
- `npm run build`: Production build; run before shipping to catch server/client boundary issues.
- `npm run start`: Serve the production build locally; good for sanity checks.
- `npm run lint`: ESLint (Next + TypeScript + Tailwind); run it before opening a PR.

## Coding Style & Naming Conventions
- TypeScript everywhere; favor typed props and explicit return types on exported functions.
- Components are functional, PascalCase exports; files use kebab-case (`skills-section.tsx`).
- Tailwind-first styling; use `cn` from `lib/utils` when composing conditional classes. Keep class lists ordered logically (layout → spacing → color).
- 2-space indentation, double quotes, and no semicolons follow existing formatting. Avoid inline styles unless necessary.
- Default to server components; add `"use client"` only when hooks or browser APIs are required.

## Testing Guidelines
- No automated tests exist yet. Minimum check: `npm run lint` plus manual verification in dev (`npm run dev`) and, for critical changes, `npm run build`.
- When adding logic-heavy utilities, add lightweight unit tests (e.g., in `lib/__tests__/`) using the Jest/Vitest stack of your choice and document the command in this file.
- Name tests after the unit under test (`utils.test.ts`, `hero-section.test.tsx`) and keep them colocated with source or under `lib/__tests__`.

## Commit & Pull Request Guidelines
- Current history only has the initial scaffold; use Conventional Commits going forward (`feat: add research carousel`, `fix: correct nav anchors`) in present tense.
- Keep PRs scoped; include a short description, screenshots for UI changes, and steps to reproduce/verify.
- Link related issues or tasks. If adding config or assets, mention affected environments and any new env vars.
- Run `npm run lint` (and `npm run build` when touching Next config) before requesting review; note any intentional lint disables.

## Security & Configuration Tips
- Do not commit secrets. Store keys in `.env.local` (ignored by git); document required variables in PRs.
- When adding external links or embeds, prefer `rel="noopener noreferrer"` and validate URLs. Keep third-party scripts to a minimum to maintain performance.
