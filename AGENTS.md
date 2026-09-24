# PCReady Website

Marketing and documentation site for **PCReady** — statically prerendered (SSG) output in `.output/public`.

## Commands

```sh
npm install
npm run dev            # local dev server (port 8080)
npm run typecheck      # tsc --noEmit
npm run lint           # eslint
npm run build          # prerender all routes to .output/public
npm run preview        # serve production build locally
```

## Verification

`npm run typecheck && npm run lint && npm run build` must stay green before any change is
considered done. Deployment copies only `.output/public`.