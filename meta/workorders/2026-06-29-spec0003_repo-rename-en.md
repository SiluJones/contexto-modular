# Spec — Fase 0: padronizar os nomes do repo KCM para inglês (git mv + corrigir referências)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **NÃO toca o produto** (`index.html`/`index_template.html` ficam intactos — a migração do *template* é fase à parte).
> Mexe só nos **docs do repo** (`meta/` + raiz). **Não precisa de `build.js`/`validate.js`.** A rede é o `git diff`.
> Prompt: **"leia `meta/specs/2026-06-29-spec0003_repo-rename-en.md` e execute"**.
> Config: **Sonnet basta** (é mecânico).

## Contexto
Decisão: padronizar os arquivos de **gestão/infra** do KCM para **inglês** (convenção de TI + evitar colisão tipo `IDEAS`/`IDEAS` em custom com dev). Esta é a **Fase 0**: o próprio repo KCM. O *template* (nichos) vem em fases seguintes. Conteúdo de nicho permanece PT (não se aplica aqui).

## Tarefa A — renomear os 4 arquivos (git mv)
Se o usuário já renomeou à mão, **pule esta tarefa** e siga para a B.
```
git mv meta/DECISIONS.md   meta/DECISIONS.md
git mv meta/IDEAS.md     meta/IDEAS.md
git mv meta/GLOSSARY.md  meta/GLOSSARY.md
git mv meta/HISTORY.md  meta/HISTORY.md
```
(Os demais já estão em inglês: `CONTEXT`, `STATUS`, `CHANGELOG`, `ROADMAP`, `LOG-TEMPLATE`. `CEREBRO.md` e o `CLAUDE.md` raiz **não** mudam de nome.)

## Tarefa B — corrigir as referências internas
Em **todos os `.md` do repo** (`meta/*.md`, `meta/specs/*.md` e os `.md` da raiz como `CLAUDE.md`, `README.md`, `PLANNING.md`, `MAPA.md`, `HUB.md`…), substitua os **tokens de nome de arquivo** (referências, não prosa acentuada):

| Trocar | Por |
|---|---|
| `DECISIONS` | `DECISIONS` |
| `IDEAS` | `IDEAS` |
| `GLOSSARY` | `GLOSSARY` |
| `HISTORY` | `HISTORY` |

Regras:
- Troque **só os tokens em CAIXA ALTA** (são os nomes de arquivo: `DECISIONS.md`, "o DECISIONS", a `Tabela de gatilhos`, a lista de higiene, etc.). **Não** toque na palavra em prosa acentuada (ex.: "decisões", "ideias", "histórico") — isso é texto, não nome de arquivo.
- **Não** edite `.js` nem `index_template.html` (são o template — fase à parte).
- Se algum token aparecer num contexto que **não** é referência de arquivo e a troca parecer errada, **PARE e reporte** antes de prosseguir.
- Opcional: ajuste o **H1** de cada arquivo renomeado se ele estiver em PT puro de título (ex.: `# Decisões` → `# Decisions`). O **corpo** (as decisões em si) permanece em PT.

## Validar
- **Sem build.** Rode `git diff` e confira: 4 renomeações + as trocas de token; nada tocado em `.js`/`index_template.html`; nenhuma palavra de prosa trocada por engano.
- `grep -rn "DECISIONS\|IDEAS\|GLOSSARY\|HISTORY" --include="*.md" .` deve voltar **vazio** (todas as referências migraram).

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** (o arquivo recém-renomeado) — acrescente **D-035** (confirme o número):
```
## D-035 — Nomes de gestão padronizados em inglês (universal por nicho)

**Decisão.** Os arquivos de **gestão/infra** passam a ter nome canônico em **inglês** em todo o ecossistema: `CONTEXT`, `STATUS`, `DECISIONS`, `IDEAS`, `CHANGELOG`, `ROADMAP`, `GLOSSARY`, `HISTORY`, `LOG-TEMPLATE`. Camada universal por nicho: **`STATUS`+`IDEAS`+`DECISIONS`**. Conteúdo de nicho (`MECANICAS`, `BIBLIA`…) **permanece em PT**.

**Por quê.** Convenção de TI do mundo real (nomes de infra em inglês) e — decisivo — evitar **colisão** quando um nicho faz custom com dev (não gerar `IDEAS` e `IDEAS` para a mesma coisa). Conteúdo de nicho fica na língua do criador porque não colide e não é infra.

**Migração em fases:** Fase 0 = repo KCM (este commit). Fases 1-3 = template (renomear nichos; camada universal; CEREBRO por nicho + `FIX-` + commit-na-instrução-curta).
```
- **`meta/CHANGELOG.md`** — topo:
```
## v1.37.1 — Nomes do repo KCM em inglês (Fase 0)
- Repo KCM migrado: `DECISIONS→DECISIONS`, `IDEAS→IDEAS`, `GLOSSARY→GLOSSARY`, `HISTORY→HISTORY` + referências (D-035). Template (nichos) vem nas Fases 1-3.
```
- **`meta/STATUS.md`** — versão → **v1.37.1** + linha na «Última sessão» + registre que a migração do template (Fases 1-3) está pendente.

## Commit (Code roda; sem acento)
```
git add -A
git commit -m "refactor: nomes de gestao do repo KCM em ingles (Fase 0)" -m "git mv DECISIONS/IDEAS/GLOSSARY/HISTORY -> DECISIONS/IDEAS/GLOSSARY/HISTORY + referencias; D-035; template vem nas Fases 1-3; doc-only, sem build"
git push
```
