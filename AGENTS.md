# Repository Guidelines

## Project Structure & Module Organization

This is a pnpm-managed Vite SSG personal site using Vue, Markdown routes, UnoCSS, and build scripts.

- `pages/` contains route files. Markdown pages become routes through `vue-router/vite`; posts live in `pages/posts/`.
- `src/` contains Vue application code: `src/App.vue`, `src/main.ts`, shared components in `src/components/`, stores in `src/store/`, logic helpers in `src/logics/`, and global styles in `src/styles/`.
- `data/`, `demo/`, and `photos/` hold structured content.
- `public/` contains static assets and CMS config copied as-is.
- `scripts/` contains TypeScript utilities for RSS, redirects, photos, sponsors, and image compression.

## Build, Test, and Development Commands

Use pnpm 11 as declared in `package.json`.

- `pnpm install` installs dependencies.
- `pnpm dev` starts Vite on port `3333` and opens the site locally.
- `pnpm build` syncs static assets, builds SSG output, copies fonts, generates RSS, and writes Netlify redirects.
- `pnpm preview` serves the built output locally.
- `pnpm lint` runs ESLint across the repository.
- `pnpm compress` compresses staged images.
- `pnpm photos` runs the photo management script.
- `pnpm redirects` regenerates redirect data.

## Coding Style & Naming Conventions

Follow the Antfu ESLint configuration in `eslint.config.js`; formatting is enforced by ESLint. Prefer TypeScript for scripts and app code. Vue components use PascalCase filenames such as `SponsorButtons.vue`; helpers should use descriptive camelCase exports. Route Markdown files should use lowercase kebab-case slugs, for example `pages/posts/type-your-config.md`.

Use the `~/` alias for imports from `src/`. Keep generated declaration files such as `typed-router.d.ts` under tool control.

## Testing Guidelines

No dedicated test runner is configured. Before submitting changes, run `pnpm lint` and `pnpm build`. For logic-heavy additions in `scripts/` or `src/logics/`, add focused tests only after introducing a test framework separately.

## Commit & Pull Request Guidelines

Current history uses concise Conventional Commit-style messages, for example `chore: init`. Use `type: summary` (`feat`, `fix`, `docs`, `chore`, `refactor`) and keep the subject imperative and scoped.

Pull requests should include a short description, validation commands, linked issues when applicable, and screenshots or preview notes for visual changes. Mention content licensing impact when changing words, images, demos, or photos.

## Security & Configuration Tips

Do not commit secrets or local credentials. Keep deployment-related changes in `netlify.toml`, `_redirects`, and `_dist_redirects` intentional and verify redirects with `pnpm redirects` or a production build.
