# AGENTS.md

## Project Overview
Single-page advertisement agency website ("Buzzly") built with React 18 + Vite 6.

## Tech Stack
- **Frontend**: React 18, Vite 6, plain CSS (no UI framework)
- **Runtime**: Node 22 (via docker-compose.base44.yml)
- **No backend, no database, no external services** — pure static SPA

## Development
```bash
docker compose -f docker-compose.base44.yml up -d
```
- App served on host port 3000 (mapped to container port 5173)
- Vite dev server with HMR; edits to `src/` hot-reload automatically
- `npm install` runs on container startup; `node_modules` is an anonymous volume

## Project Structure
- `src/App.jsx` — root component composing all sections
- `src/components/` — Navbar, Hero, LogosStrip, Services, Work, Stats, Testimonials, CTA, Footer
- `src/styles/global.css` — CSS variables, reset, shared utilities
- `src/styles/components.css` — per-component styles

## No secrets required
The app has no external dependencies or credentials.
