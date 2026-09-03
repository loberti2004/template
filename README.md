# Tabletop

A lightweight React + TypeScript + Vite starter for apps that need a clean base and Cloudflare integration.

## Included

- React + Vite setup
- TypeScript enabled
- SCSS support with shared design tokens
- Cloudflare Pages/Workers structure
- D1 database configuration and example API route
- Minimal starter screen ready for extension

## Tech stack

- React
- Vite
- TypeScript
- SCSS
- Cloudflare Workers / Pages
- Cloudflare D1

## Quick start

```bash
npm install
npm run dev
```

## Cloudflare D1 commands

Local query:

```bash
npx wrangler d1 execute tabletop-db --local --command "SELECT 1 as test;"
```

Remote query:

```bash
npx wrangler d1 execute tabletop-db --remote --command "SELECT 1 as test;"
```

## Project scripts

```bash
npm run dev
npm run build
npm run dev:cf
```

## Project notes

This repository keeps the app minimal and production-friendly while leaving room to build the actual product on top of it.

## License

MIT
