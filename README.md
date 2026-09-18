# QUADRA — loja de tênis de basquete

Estrutura em duas pastas independentes: `frontend` (React, pronto pra rodar)
e `backend` (só a estrutura de pastas/arquivos em padrão MVC + repository,
pra você implementar).

## Rodar o front

```bash
cd frontend
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Organização do front (`frontend/src`)

- `models/` — formato dos dados (`Product.js`) e mock temporário.
- `controllers/` — hooks que decidem de onde vêm os dados
  (`useFeaturedProducts.js`). Troque o mock por um `fetch` pra API aqui,
  sem mexer nas views.
- `views/` — componentes de UI (Header, Hero, FeaturedProducts, ProductCard,
  Footer), cada um com seu `.css` ao lado.
- `styles/` — `variables.css` (paleta e tipografia) e `global.css` (reset e
  classes utilitárias).

## Organização do back (`backend/src`)

Só a estrutura, sem lógica:

```
src/
├── controllers/    # recebe req/res
├── models/         # entidades
├── repositories/    # acesso a dados
├── routes/         # endpoints
├── middlewares/     # ex.: tratamento de erro
├── config/          # conexão com banco, env
└── server.js         # entrada do Express
```

Endpoint sugerido pro front consumir: `GET /api/products`, no formato usado
em `frontend/src/models/Product.js`.
