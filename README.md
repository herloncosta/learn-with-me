<div align="center">
  <h1>learn-with-me</h1>
  <p>
    <strong>Software engineering blog — built with Astro 5, MDX & Tailwind CSS v4</strong>
    <br/>
    <em>Free and open source software</em>
  </p>
  <p>
    <a href="https://lwm-blog.netlify.app">lwm-blog.netlify.app</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/software%20livre-MIT-blue" alt="Software Livre">
    <img src="https://img.shields.io/github/last-commit/herloncosta/learn-with-me" alt="Last commit">
  </p>
</div>

A personal blog focused on software engineering — performance, architecture, tooling, and the craft of building software. Written in Portuguese, aimed at developers of all levels.

## Tech stack

- **Framework**: [Astro 5](https://astro.build)
- **Content**: [MDX](https://mdxjs.com) with Astro Content Collections v3
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (CSS-first, no config file)
- **Animation**: [framer-motion](https://motion.dev) (page transitions & scroll reveals)
- **Deploy**: [Netlify](https://www.netlify.com)

## Getting started

```bash
npm install
npm run dev        # localhost:4321
npm run build      # static output → dist/
npm run preview    # preview the built site
```

## Adding a post

1. Create a `.mdx` file in `src/content/blog/`
2. The filename becomes the URL slug (e.g. `hello-world.mdx` → `/blog/hello-world`)
3. Add frontmatter:

```yaml
title: "Post Title"
description: "Brief description"
pubDate: 2026-01-01
updatedDate: 2026-01-10   # optional
draft: false              # omit or set to true to hide from listing
```

4. Restart the dev server — routing is automatic

### Contributing a post via pull request

You can submit your own article by opening a pull request. Follow the steps below:

1. **Fork** the repository and create a new branch
2. **Create** a `.mdx` file under `src/content/blog/` with a descriptive slug name (e.g. `meu-artigo.mdx`)
3. **Add frontmatter** at the top of the file (see schema above)
4. **Write your article** in Markdown with MDX — you can use JSX components, code blocks, tables, images, and more
5. **Preview locally** (optional but recommended): run `npm install && npm run dev` and open `http://localhost:4321`
6. **Open a pull request** against the `main` branch

> Check existing posts in `src/content/blog/` for reference on style and structure.

## Project structure

```
src/
├── content/blog/        # MDX posts
├── content/config.ts    # Content schema (Zod)
├── layouts/             # BaseLayout.astro
├── components/          # Reusable components
├── pages/               # Routes
├── styles/global.css    # Tailwind @theme + OKLCH tokens
└── scripts/             # Client-side JS
```

## Contributing

Contributions are welcome! This is an educational project — feel free to open issues, suggest improvements, or submit PRs.

## License

MIT &mdash; see the [LICENSE](LICENSE) file.
