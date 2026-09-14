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

Open the URL printed in your terminal. Vite usually runs at:

```text
http://localhost:5173
```

## Available commands

```bash
npm run dev      # Start local dev server
npm run build    # Build production files into dist/
npm run preview  # Preview the production build locally
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
