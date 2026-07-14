# Claude Project Guide - Personal Profile (Vercel)

This file serves as a guide for Claude/Cursor to understand the development standards, commands, and architecture of this personal profile website.

---

## 🚀 Quick Start & Commands

### Development
*   **Install dependencies:** `npm install` (or `pnpm install` / `yarn`)
*   **Run local dev server:** `npm run dev` (typically starts at `http://localhost:3000`)
*   **Build project:** `npm run build`
*   **Lint code:** `npm run lint`

### Vercel Deployment
*   **Vercel Dev (Local server with Vercel Env):** `vercel dev`
*   **Deploy to Preview:** `vercel`
*   **Deploy to Production:** `vercel --prod`

---

## 🛠 Tech Stack & Architecture

This is a modern, fast, and SEO-friendly personal portfolio designed for seamless hosting on **Vercel**.

*   **Framework:** Next.js (App Router) / React
*   **Styling:** Tailwind CSS (utility-first, responsive design)
*   **Icons:** Lucide React / Simple Icons (for social brands)
*   **Hosting & Analytics:** Vercel (Speed Insights, Web Analytics enabled)
*   **Content (Optional):** MDX / JSON for project and bio data

### Directory Structure
```text
├── .vercel/            # Vercel deployment metadata
├── public/             # Static assets (avatar, resume PDF, OG images)
├── src/
│   ├── app/            # Next.js App Router (pages, layout, api)
│   ├── components/     # Reusable UI components (ProjectCard, Hero, etc.)
│   ├── data/           # Personal info, experience, and projects data (JSON/TS)
│   └── styles/         # Global CSS & Tailwind config
├── tailwind.config.js  # Tailwind CSS configuration
└── vercel.json         # Vercel-specific routing & headers

🎨 Design & Code Guidelines
1. Code Style & Best Practices
Component Structure: Write clean, functional React components using TypeScript. Prefer arrow functions: const Component = () => { ... }.

Tailwind Styling: Keep class names clean. Use clsx or tailwind-merge for conditional classes if needed.

Responsive First: Always ensure the profile looks stunning on mobile devices first (sm:, md:, lg: breakpoints).

Data-Driven UI: Keep personal details (projects list, work experience, social links) in src/data/profile.ts so they can be updated easily without touching the UI code.

2. Vercel Optimization
Image Optimization: Always use Next.js <Image /> component instead of standard <img> tags to leverage Vercel's Edge Image Optimization.

SEO: Ensure every page has metadata configured properly (Title, Description, Open Graph image for social sharing).

Fast Loading: Keep client components to a minimum. Use Server Components ('use server') by default, and only use 'use client' when interactivity (toggles, forms) is required.

📝 Profile Data Schema (Reference)
When updating or adding new information, refer to the structure in src/data/profile.ts:

TypeScript
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  socials: {
    github: string;
    twitter: string;
    email: string;
  };
}
