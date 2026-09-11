# Vikas William — Portfolio

A responsive, component-based React + TypeScript portfolio. The hosted version uses the included Vinext/Cloudflare integration. A standalone Vite build is also available for Netlify, Vercel, GitHub Pages, or any static host.

## Run locally

Requires Node.js 22.13+ and the pnpm version in package.json.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev:static
```

## Deploy independently

```sh
pnpm build:static
```

Publish the `dist-static` directory. In Netlify or Vercel, select the Vite/Other preset, use `pnpm build:static` as the build command, and `dist-static` as the output directory. No API keys or environment variables are required. Relative asset paths also support GitHub Pages project subpaths. Upload the generated output with your chosen host's deployment workflow.

The existing `pnpm build` command builds the Cloudflare-compatible hosted version. Keep the two output directories separate.

## Edit your content

- `data/portfolio.ts`: profile links, projects, experience, and skill groups.
- `types/portfolio.ts`: enums and the project interface.
- `components/portfolio/`: Header, Hero, Work/ProjectCard, Experience, Skills, Footer, and shared UI.
- `app/globals.css`: responsive design, typography, colors, and reduced-motion styles.
- `public/vikas-william.png`: supplied portrait.
- `app/layout.tsx` and `standalone/index.html`: metadata for each deployment mode.

The website contains no runtime GitHub dependency; repository links work without an authenticated session.

## Content review

Positioning: Senior Frontend Engineer, with AI-assisted development as a workflow skill. Java, Node.js, PostgreSQL, and AI fundamentals are explicitly grouped as expanding skills. No professional AI product delivery or senior backend expertise is claimed.

Career content uses previously supplied information, because LinkedIn could not be retrieved. Earlier company dates are approximate year ranges. Review those dates and official roles before sharing with recruiters. Public repository existence was checked through GitHub; the routing/Redux project's dependencies were also checked. Other descriptions are deliberately broad and identify practice work; they do not assert production impact or verified functionality.

## Validation

Production build and TypeScript checking are run during delivery. Responsive breakpoints, focus states, skip navigation, descriptive links, image dimensions, and reduced motion are included. Browser-based visual and interaction tests have not been run.
