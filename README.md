# Mohaimin Al Aoun — Portfolio

UI-first full-stack engineer portfolio built with React, TypeScript, and Rsbuild. The site features product work, systems engineering, and AI projects.

## Run locally

```bash
npm install
npm run dev
```

Rsbuild prints the local URL when the server is ready.

## Build

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Deploy with Vercel

Import this GitHub repository into Vercel, then use:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Connect `main` as the production branch. Vercel can then build and deploy each push to `main`. No environment variables are required for this static portfolio.
