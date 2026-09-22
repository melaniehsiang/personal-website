# Trail × Product Personal Website

A React personal website about the connection between backpacking and product building. Built with Vite, Tailwind CSS, and local shadcn-style UI components.

## Tech stack

- React
- Vite
- Tailwind CSS
- shadcn-style components in `src/components/ui`
- lucide-react icons

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

If you change `tailwind.config.js`, `postcss.config.js`, `vite.config.js`, or font configuration, stop and restart the dev server. To force Vite/Tailwind to rebuild cached styling, run:

```bash
npm run dev:fresh
```

Open the URL printed in your terminal. Vite usually runs at:

```text
http://localhost:5173
```

For a production-equivalent local check, use:

```bash
npm run preview:prod
```

This runs `npm run build` first, then serves the generated `dist/` output so local matches the published build process.

## Available commands

```bash
npm run dev          # Start local dev server
npm run dev:fresh    # Start dev server and force dependency/style cache rebuild
npm run build        # Build production files into dist/
npm run preview      # Preview existing production build locally
npm run preview:prod # Build, then preview production output locally
```

## Adding photos later

The site has placeholder sections for images in `src/main.jsx`. Search for `PhotoPlaceholder` and replace those blocks with real image markup when ready, for example:

```jsx
<img
  src="/images/trail.jpg"
  alt="Backpacking trail at sunrise"
  className="h-full w-full rounded-[2rem] object-cover"
/>
```

Place public images in a future `public/images/` folder so they can be referenced with `/images/file-name.jpg`.
