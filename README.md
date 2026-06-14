# learn-with-me

Blog de engenharia de software — feito com [Astro](https://astro.build), [MDX](https://mdxjs.com) e [Tailwind CSS v4](https://tailwindcss.com).

Fins educacionais. Contribuições são bem-vindas!

## Adicionar uma publicação

1. Crie um arquivo `.mdx` em `src/content/blog/`
2. O nome do arquivo será o slug da URL (ex.: `src/content/blog/hello-world.mdx` → `/blog/hello-world`)
3. Adicione o frontmatter:
   ```yaml
   title: "Título do Post"
   description: "Descrição curta"
   pubDate: 2026-01-01
   draft: false
   ```
4. Execute `npm run dev` para ver localmente

## Comandos

| Comando | Ação |
|---------|------|
| `npm run dev` | Servidor local (localhost:4321) |
| `npm run build` | Build estático em `dist/` |
| `npm run preview` | Preview do build |
