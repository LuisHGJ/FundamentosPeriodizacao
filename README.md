# Fundamentos da Periodização — Kaizen Powerlifting

**Projeto de cliente.** Página de vendas do curso on-line **Fundamentos da Periodização**, ministrado por Leonardo Hermisdorf e Dylan Lopes.

🔗 **Site no ar:** https://fundamentos-periodzacao.vercel.app/

Hospedado na **Vercel**, com a URL padrão do próprio domínio `*.vercel.app` — o cliente não viu necessidade de algo mais "personalizado" nesse sentido, já que se tratava só de um link na bio levando para a página de vendas.

## O que foi entregue

- **Design** da página (layout, hierarquia visual e identidade do curso)
- **Front-end** completo e responsivo
- **Links** (checkout, redes sociais e demais CTA da página)

Antes disso, o material era apenas uma página no Notion — o trabalho consistiu em readequar todo esse conteúdo para um site de verdade, publicado e pronto para vender.

## Stack

TanStack Start, React, Tailwind CSS, shadcn/ui, TypeScript e Vite.

## Desenvolvimento

```sh
git clone <this-repository-url>
cd kaizen
bun install
bun run dev
```

## Scripts

| Comando | Descrição |
|---|---|
| `bun run dev` | Inicia o servidor de desenvolvimento |
| `bun run build` | Gera o build de produção |
| `bun run preview` | Visualiza o build localmente |
| `bun run lint` | Roda o ESLint |
| `bun run format` | Formata o código com Prettier |
