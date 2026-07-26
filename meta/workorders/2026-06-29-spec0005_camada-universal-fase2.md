# Spec — Fase 2: camada universal (DECISIONS em todo nicho) + varredura do resíduo

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca o produto** (nichos `.js` → `index.html`): **precisa** de `node build.js` e `node validate.js` (17/17).
> Prompt: **"leia `meta/specs/2026-06-29-spec0005_camada-universal-fase2.md` e execute"**.
> Config: **Sonnet + esforço ALTO** (são 12 inserções estruturadas — esforço baixo não dá).

## Contexto
Fase 2 da migração (D-035). A Decisão confirmada: **camada universal `STATUS`+`IDEAS`+`DECISIONS`** em todo nicho. `STATUS` e `IDEAS` já são universais; falta o **`DECISIONS`** nos 12 nichos que não têm. Também: varrer o resíduo que a Fase 1 documentou (o `game` referenciando `IDEIAS` em prosa).

## Tarefa A — varredura do resíduo (só o genuíno)
No **`game.js`**, há duas referências em prosa ao arquivo universal de ideias escritas como `IDEIAS` (≈ linhas 46 e 56: "(IDEIAS de pós-lançamento)" e "ou IDEIAS"). Troque **`IDEIAS`→`IDEAS`** nessas duas.
- **NÃO** toque nos rótulos de prompt em prosa de outros nichos (`CONTEXTO:`, `IDEIA E CONTEXTO:`, `MÉTRICA E CONTEXTO:`) — são cabeçalhos de seção, não nomes de arquivo. Ficam em PT.

## Tarefa B — adicionar `DECISIONS.md` aos 12 nichos sem ele
Nichos a receber: **animation, client, comics, cuisine, custom, game, marketing, music, narrative, pixel, research, rpg**.

Em cada um, **insira no array `contextFiles`, logo após a entrada do `STATUS.md`**, esta entrada (use, no `cat:`, **a mesma categoria que o `STATUS` daquele nicho usa** — é um arquivo que cresce):

```js
    {name:"DECISIONS.md", cat:"<cat-do-STATUS-deste-nicho>", role:"Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.", content:`# DECISIONS.md — Decisões e o porquê

> Cresce devagar. Guarda o PORQUÊ — o que não se deduz do resto.
> Duas naturezas: **DEC** (decisões) e **FIX** (problemas graves resolvidos, para não repetir).
> Append-only: não reescreva entradas antigas; se uma for substituída, marque «SUPERADA por DEC-N» e adicione a nova.

---

## DEC-[N] — [título curto]
**Data:** AAAA-MM-DD · **Status:** aceita | superada por DEC-X

### Contexto
[Que problema ou pergunta forçou esta decisão.]

### Decisão
[O que foi decidido, em uma ou duas frases.]

### Alternativas consideradas
- **[Alternativa]** — [por que não.]

---

## FIX-[N] — [problema grave resolvido]
**Sintoma:** [o que se via.] · **Causa raiz:** [o porquê.] · **Solução:** [o que resolveu.] · **Lição:** [como evitar de novo.]
`},
```

Cuidado: respeite a vírgula/indentação do array de cada nicho (não quebre o JS). Se um nicho tiver um arquivo que já cumpre 100% o papel de DECISIONS com outro nome, **PARE e reporte** em vez de duplicar (ex.: confirmar o `game` — ele guardava decisão no `MECANICAS`; aqui ganha o `DECISIONS` dedicado, o `MECANICAS` segue sendo a spec de mecânicas).

## Validar (obrigatório)
1. `node build.js` → **OK**.
2. `node validate.js` → **17/17**.
3. `grep -c "DECISIONS.md" *.js` em cada um dos 12 → deve haver pelo menos 1.
4. `grep -rn "IDEIAS" game.js` → só rótulos de prosa, se houver; nenhuma referência de arquivo.
5. `git diff` → 13 arquivos `.js` (12 + game) + `index.html`; nada de prosa trocada por engano.

## Ao terminar (raia do Code — append-only)
- **`meta/CHANGELOG.md`** — topo:
```
## v1.39.0 — Camada universal STATUS+IDEAS+DECISIONS (Fase 2)
- DECISIONS.md adicionado aos 12 nichos que nao tinham (camada universal, D-035). game: residuo IDEIAS->IDEAS em prosa corrigido. Falta Fase 3 (CEREBRO por nicho).
```
- **`meta/STATUS.md`** — versão → **v1.39.0** + linha na «Última sessão» (Fase 2 feita; Fase 3 pendente — exige Opus no Code).

## Commit (sem acento)
```
git add animation.js client.js comics.js cuisine.js custom.js game.js marketing.js music.js narrative.js pixel.js research.js rpg.js index.html meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: camada universal DECISIONS em todo nicho (Fase 2, D-035)" -m "DECISIONS.md nos 12 nichos sem ele; game IDEIAS->IDEAS em prosa; harness 17/17; v1.39.0"
git push
```
