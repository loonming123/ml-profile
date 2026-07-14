# Claude Project Guide — Personal Profile (Vercel)

This file guides Claude/Cursor on development standards, commands, and architecture for this personal profile website. Keep it in sync with the actual codebase — if a section here drifts from reality, fix the doc, not the assumption.

---

## 🚀 Quick Start & Commands

### Development
* **Install dependencies:** `npm install` (or `pnpm install` / `yarn`)
* **Run local dev server:** `npm run dev` (typically starts at `http://localhost:3000`)
* **Build project:** `npm run build`
* **Lint code:** `npm run lint`
* **Type check:** `npm run typecheck` (or `tsc --noEmit` if no script exists)

### Vercel Deployment
* **Vercel Dev (local server with Vercel env):** `vercel dev`
* **Deploy to Preview:** `vercel`
* **Deploy to Production:** `vercel --prod`

### Before Any Deploy
Run in this order and confirm each passes before moving to the next:
1. `npm run lint` → verify: no errors (warnings are fine to note, not required to fix unless caused by your change)
2. `npm run typecheck` → verify: no type errors
3. `npm run build` → verify: build succeeds locally, no missing env vars logged
4. Manual check on `npm run dev`: page loads, no console errors, mobile viewport looks correct

---

## 🛠 Tech Stack & Architecture

Current workspace contents are minimal and data-focused.

* **Language:** TypeScript
* **Content source:** `src/data/profile.ts`
* **Current scope:** profile data and repository guidance only

### Directory Structure
```text
├── AGENTS.md
└── src/
    └── data/
        └── profile.ts
```

---

## 🎨 Design & Code Guidelines

### 1. Code Style & Best Practices
* **Component Structure:** Clean, functional React components using TypeScript. Prefer arrow functions: `const Component = () => { ... }`.
* **Tailwind Styling:** Keep class names clean. Use `clsx` or `tailwind-merge` for conditional classes.
* **Responsive First:** Mobile-first — design and test at `sm:` before `md:`/`lg:`.
* **Data-Driven UI:** Keep personal details (projects, experience, social links) in `src/data/profile.ts` so content updates never require touching UI code.

### 2. Vercel Optimization
* **Images:** Always use Next.js `<Image />` instead of `<img>` to leverage Edge Image Optimization. Set explicit `width`/`height` or `fill` with a sized parent — never let layout shift on image load.
* **SEO:** Every page needs metadata (Title, Description, OG image). Verify OG image renders correctly by testing the URL in a social-preview debugger before shipping.
* **Fast Loading:** Server Components by default. Add `'use client'` only where interactivity (toggles, forms, animations) is actually needed — don't mark a whole page client just because one child needs it.

### 3. Simplicity & Surgical Changes
* No speculative props, config options, or abstractions for features not requested (e.g. don't add a multi-theme system if only dark mode was asked for).
* When editing an existing component, don't reformat unrelated JSX, reorder props, or "clean up" adjacent code — match existing style even if you'd write it differently.
* If you add an import/variable, remove it if a later edit makes it unused. Don't delete pre-existing unused code unless asked — flag it instead.
* Every changed line should trace directly to the request. If a fix reveals a bigger underlying issue (e.g. inconsistent data shape across `profile.ts` fields), name it — don't silently refactor beyond scope.

### 4. Common Mistakes to Avoid
* Don't hardcode personal data (name, bio, links) directly in components — it belongs in `src/data/profile.ts`.
* Don't use `<a>` for internal navigation — use Next.js `<Link>`.
* Don't fetch data client-side for content that's static at build time; prefer Server Components or static generation.
* Don't skip `alt` text on `<Image />` — required for accessibility and SEO both.
* Don't introduce a new state management library (Redux, Zustand, etc.) for a portfolio site — local state/props is almost always sufficient.
* Don't add analytics/tracking scripts beyond what's already wired through Vercel Analytics unless explicitly asked.

### 5. Accessibility & Quality Bar
* All interactive elements (buttons, links, toggles) must be keyboard-navigable and have visible focus states.
* Color contrast should meet WCAG AA at minimum, especially for text over background images or gradients.
* Headings should follow logical order (one `h1` per page, no skipped levels).
* Run a quick Lighthouse pass (`npx lighthouse http://localhost:3000 --view` or Chrome DevTools) after any layout-affecting change — flag if Performance or Accessibility scores drop.

---

## 📝 Profile Data Schema (Reference)

When updating or adding information, follow the structure in `src/data/profile.ts`:

```typescript
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bulletPoints: string[];
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: {
    category: string;
    items: string[];
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  education: {
    degree: string;
    school: string;
    period: string;
  };
  certifications: string[];
}
```

If a new field is genuinely needed, add it to the interface and update all existing data objects that implement it in the same change. Keep the schema and the data aligned.

---

## ✅ Goal-Driven Execution

For any non-trivial task, state a brief plan before implementing:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
```

Examples for this project:
* "Add a new project card" → verify: entry renders correctly on mobile and desktop, image loads via `<Image />`, no layout shift, lint/build pass.
* "Fix broken social link" → verify: link opens correct URL in a new tab (`target="_blank" rel="noopener noreferrer"`), no typo in `profile.ts`.
* "Add dark mode toggle" → verify: toggle persists across reload (if intended), no flash-of-wrong-theme on load, contrast still meets AA in both modes.

For trivial changes (typo fix, one-line copy edit, swapping an icon) — skip the ceremony and just make the change.

---

## 🔐 Environment & Secrets

* Never commit `.env.local` or any file containing real API keys, tokens, or Vercel project IDs.
* If a feature needs a secret (e.g. a contact-form email service, analytics key), add it to Vercel's Environment Variables dashboard and reference via `process.env`, and note in the PR/commit which env var needs to be set — don't hardcode a placeholder that looks real.
* Flag any secret found already committed in plaintext rather than quietly removing it — it may need to be rotated, not just deleted.
