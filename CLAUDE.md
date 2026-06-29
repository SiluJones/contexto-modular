# CLAUDE.md — contexto-modular (Kit de Contexto Modular / KCM)

> Guia operacional para o **Claude Code**. Curto de propósito (lido toda sessão).
> O **cérebro** do projeto é `meta/` — leia sob demanda. Comece por `meta/CEREBRO.md`
> (como trabalhamos) e `meta/STATUS.md` (onde paramos).

## O que é
Um `index.html` único (vanilla JS, sem build no lado do usuário) que gera arquivos de
contexto para Projetos do Claude.ai. 16 nichos de conteúdo + 1 construtor (`custom`).
O `index.html` é **gerado** a partir de `src/` — **não editar o `index.html` à mão.**

## Estrutura
- `src/index.template.html` — casco (UI + lógica, sem os dados dos nichos)
- `src/niches/<id>.js` — os 17 módulos de nicho (os dados)
- `build.js` + `build-manifest.json` — remontam o `index.html` na raiz
- `validate.js` — harness (17 nichos + checagens transversais)
- `meta/` — docs: `CEREBRO.md` (cérebro), `STATUS`, `DECISIONS`, `CHANGELOG`, `ROADMAP`, `IDEAS`, `CONTEXT`…

## Comandos
- **Montar:** `node build.js`  → gera o `index.html` na raiz
- **Validar:** `node validate.js index.html`  (precisa de jsdom: `npm install jsdom` uma vez)
- **Nunca** commitar sem o harness em **17/17 nichos + checagens, 0 erros.**

## Convenções
- Editar um nicho = editar `src/niches/<id>.js` e rodar `node build.js`. Nunca editar o `index.html` direto.
- Produto = **1 arquivo único, sem framework/bundler/npm** (só JSZip via CDN). Decisão D-001.
- Respostas e código em **pt-BR**.
- **Commits:** uma linha, `-m` repetido, **sem acento**. Conventional Commits (`feat`/`fix`/`docs`/`refactor`/`chore`).
- Ambiente: **PowerShell** (não Git Bash pra abrir o `claude`).

## Fluxo com o chat (planejamento)
O chat (Claude web) cuida de design/curadoria e entrega os `meta/` **inteiros**; o Code
implementa e **só acrescenta** em `STATUS`/`DECISIONS`/`logs/`/`ROADMAP` (append-only, não
reescreve). Protocolo completo em `meta/CEREBRO.md` › «🤝 Fluxo Chat ↔ Claude Code».

## Não faça sem pedir
- Não editar o `index.html` à mão (é gerado por `build.js`).
- Não **reescrever** os docs de curadoria (`CONTEXT`/`IDEAS`/`GLOSSARY`) — isso é raia do chat;
  aqui só **append** em `STATUS`/`DECISIONS`/`logs`.
- Não adicionar dependências ao produto.
