# Spec — Fase 1: renomear os arquivos de gestão dos nichos para inglês (template)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca o produto** (nichos `.js` → `index.html`): **precisa** de `node build.js` e `node validate.js` (17/17).
> Prompt: **"leia `meta/specs/2026-06-29-spec0004_template-rename-en-fase1.md` e execute"**.
> Config: **Sonnet basta** (mecânico). Não há lógica nova aqui.

## Contexto
Fase 1 da migração para inglês (D-035). Renomeia, **nos nichos**, os arquivos de **gestão** que estavam em PT.
Conteúdo de nicho (`MECANICAS`, `BIBLIA`, `RECEITAS`…) **permanece em PT** — não tocar. As seções universais do
`buildClaudeMd()` já usam os nomes em inglês, então após esta fase nicho e gatilhos passam a **casar no idioma**.
(A consciência por-nicho — Decisão 3 — é a Fase 3.)

## Tarefa — substituir tokens (CAIXA ALTA) nos arquivos `.js` dos nichos
Em cada arquivo abaixo, substitua o(s) token(s) **só em caixa alta** (são nomes de arquivo: no `name:"...md"` e em qualquer referência nos prompts/gatilhos daquele nicho). **Não** toque em palavra acentuada de prosa ("decisões", "histórico"…).

| Arquivo `.js` | Trocar |
|---|---|
| `brainstorm.js` | `DECISOES`→`DECISIONS`, `IDEIAS`→`IDEAS` |
| `business.js` | `CONTEXTO`→`CONTEXT`, `DECISOES`→`DECISIONS` |
| `design.js` | `DECISOES`→`DECISIONS` |
| `product.js` | `DECISOES`→`DECISIONS` |
| `narrative.js` | `GLOSSARIO`→`GLOSSARY` |
| `research.js` | `GLOSSARIO`→`GLOSSARY`, `HISTORICO`→`HISTORY` |
| `dev.js` | `HISTORICO`→`HISTORY` |

Regras:
- Se um token aparecer num contexto que **não** é referência de arquivo (parecer errado trocar), **PARE e reporte**.
- **Não** edite os outros nichos nem o `index_template.html` (as seções universais já estão em inglês).
- Conteúdo de nicho em PT **não muda**.

## Validar (obrigatório — toca o produto)
1. `node build.js` → **OK** (sem `FALHA`).
2. `node validate.js` → **17/17**.
3. `grep -rln "DECISOES\|IDEIAS\|GLOSSARIO\|CONTEXTO\|HISTORICO" *.js` → deve voltar **vazio** (nenhum token PT de gestão sobrou nos nichos).
4. `git diff` → só os 7 arquivos acima + `index.html` (rebuild); nenhuma palavra de prosa trocada.

## Ao terminar (raia do Code — append-only)
- **`meta/CHANGELOG.md`** — topo:
```
## v1.38.0 — Nomes de gestao dos nichos em ingles (Fase 1)
- Renomeados nos nichos: DECISOES->DECISIONS, IDEIAS->IDEAS, GLOSSARIO->GLOSSARY, CONTEXTO->CONTEXT, HISTORICO->HISTORY (D-035). Conteudo de nicho permanece PT. Falta Fase 2 (camada universal STATUS+IDEAS+DECISIONS) e Fase 3 (CEREBRO por nicho).
```
- **`meta/STATUS.md`** — versão → **v1.38.0** + linha na «Última sessão» (Fase 1 da migração feita; Fases 2-3 pendentes).
- (Sem novo DEC — é execução do D-035.)

## Commit (Code roda; sem acento)
```
git add brainstorm.js business.js design.js product.js narrative.js research.js dev.js index.html meta/CHANGELOG.md meta/STATUS.md
git commit -m "refactor: nomes de gestao dos nichos em ingles (Fase 1, D-035)" -m "DECISOES/IDEIAS/GLOSSARIO/CONTEXTO/HISTORICO -> DECISIONS/IDEAS/GLOSSARY/CONTEXT/HISTORY nos 7 nichos afetados; conteudo de nicho permanece PT; harness 17/17; v1.38.0"
git push
```

## Próximas fases (NÃO agora)
- **Fase 2:** adicionar a camada universal `STATUS`+`IDEAS`+`DECISIONS` aos nichos que não têm `DECISIONS` (ex.: `game`, criativos). Sonnet basta.
- **Fase 3 (Opus + Alto + pensamento ligado):** Decisão 3 (gatilhos/higiene gerados dos `contextFiles` reais), `FIX-` canônico, commit-na-instrução-curta, e a linha do ritual "ler `.txt` soltos".
