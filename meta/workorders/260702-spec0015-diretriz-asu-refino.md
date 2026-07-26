# Spec — Refino da diretriz ASU: capitulos, rolantes de todo nicho e verificacao obrigatoria (revisa D-037)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html`** (caminho real COM ponto) -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260702-spec0015-diretriz-asu-refino.md`**
> Config: **Opus + esforco Alto**. Atencao ao teto (agora 6900); a linha ASU 1916 so aparece com asuMode ligado.

## Contexto (estudo ASU-vs-spec-vs-inteiro)
Refina o D-037 com o resultado do estudo:
- **Capitulos / escrita longa (narrative e afins):** o "lost-in-the-middle" na GERACAO de texto longo e real e documentado — reescrever um capitulo inteiro para mudar um trecho arrisca corromper o resto. Logo: **edicao localizada em capitulo existente -> ASU** (patch cirurgico preserva as milhares de palavras ao redor byte a byte); **escrita nova ou reescrita profunda -> arquivo inteiro** (nao ha ancora; e geracao, nao edicao). Isso da utilidade real ao ASU no narrativo.
- **Rolantes de QUALQUER nicho -> nunca ASU:** alem de STATUS/CHANGELOG/IDEAS/HISTORY, tambem os equivalentes de dominio que acumulam por acrescimo/higiene (ex.: `REVISOES` no design; arquivos de progresso/log em game/pixel). Edicao holistica (mover resolvido, reclassificar, fundir) briga com patch cirurgico — e o diff pode "bater" e mesmo assim a higiene estar errada (ASU nao tem julgamento).
- **Verificacao SEMPRE, sozinha:** se uma instrucao ASU foi aplicada e os arquivos estao a vista, conferir no disco cada arquivo tocado ANTES de seguir, mesmo sem o usuario pedir (ja e o ponto 9 do PROMPT_IA do ASU e o D-042 — a diretriz gerada deve dizer isso explicitamente, sem chocar com o guia).
- **Nome do arquivo:** corrigir `AAAA-MM-DD-asuNNNN.yaml` -> `AAMMDD-asuNNNN.yaml` (follow-up do D-041, que o proprio D-041 pediu).

## Tarefa A — instrucao curta (linha ASU, ~1916)

**Ancora (copie caractere a caractere do arquivo real; o texto abaixo esta sem acento por seguranca):**
```
  if(asuModeOn()) lines.push("ASU: **editar** codigo/doc de heading unico -> instrucao `yaml` **para baixar** (nome `AAAA-MM-DD-asuNNNN.yaml`, bytes exatos); **arquivo novo** e **docs rolantes** (STATUS/CHANGELOG/IDEAS) -> arquivo inteiro para baixar. Detalhe no CEREBRO.");
```
**Substituir por (mantendo os acentos reais no seu texto):**
```
  if(asuModeOn()) lines.push("ASU: **editar** codigo, doc de heading estavel (DECISIONS/CONTEXT) ou trecho localizado de capitulo -> instrucao `yaml` **para baixar** (nome `AAMMDD-asuNNNN.yaml`, bytes exatos, ancora copiada do arquivo real). **Escrita nova**, **reescrita profunda** e **docs rolantes** (STATUS/CHANGELOG/IDEAS/HISTORY e equivalentes que acumulam por higiene) -> arquivo inteiro para baixar. Apliquei ASU? Confira no disco cada arquivo tocado antes de seguir, mesmo sem eu pedir. Detalhe no CEREBRO.");
```
**Diff esperado:** 1 linha por 1 linha. Confira que game/narrative seguem sob 6900 (a linha so entra com asuMode; meca no output).

## Tarefa B — CEREBRO gerado (buildClaudeMd, ~2222)

**Ancora:**
```
  L.push("3. **Escopo do ASU (codigo vs. docs):** use ASU para **codigo** e para docs de **heading unico e estavel** (`DECISIONS.md` — cada `## DEC-N` e unico —, `CONTEXT.md`). Os docs **rolantes** (`STATUS.md`, `CHANGELOG.md`, `IDEAS.md`) vao **inteiros** (arquivo completo para baixar): as edicoes deles sao holisticas (mover o resolvido, reclassificar, checar que nada unico se perdeu) e um patch cirurgico brigaria com a propria higiene. Reavalie o `DECISIONS.md` via ASU so quando passar de ~700 linhas — ai o ganho de token compensa.");
```
**Substituir por:**
```
  L.push("3. **Escopo do ASU (por tipo de arquivo):** (a) **codigo** e docs de **heading estavel** (`DECISIONS.md`, `CONTEXT.md`, `GLOSSARY`) -> ASU serve (append/troca localizada, ancora inequivoca). (b) **Capitulos / escrita longa:** edicao de **trecho localizado** -> ASU e ate preferivel (evita reescrever o capitulo todo e o risco de perder conteudo no meio); **escrita nova ou reescrita profunda** -> arquivo inteiro (nao ha ancora; e geracao). (c) **Docs rolantes** (`STATUS`, `CHANGELOG`, `IDEAS`, `HISTORY` e equivalentes de dominio que acumulam por higiene, ex.: `REVISOES`) -> **sempre inteiros**: a edicao e holistica (mover o resolvido, reclassificar, fundir, checar que nada unico se perdeu) e um patch cirurgico briga com a higiene; pior, o diff pode 'bater' e a higiene estar errada, porque o ASU nao tem julgamento. Reavalie `DECISIONS.md` via ASU so perto de ~700 linhas. **Verificacao obrigatoria:** apliquei uma instrucao ASU e os arquivos estao a vista? Confira no disco cada arquivo tocado antes de seguir, mesmo sem o usuario pedir — nao confie em 'deu certo' (alinhado ao ponto 9 do PROMPT_IA do ASU).");
```
**Diff esperado:** 1 push por 1 push (linha longa). 0 outras.

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js index.html
```
**17/17, 0 erros.** Confirme no output que nenhum nicho com asuMode passa de 6900. Se estourar, PARE e reporte (nao corte regra).

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-046: «Refino do D-037 (estudo ASU-vs-spec-vs-inteiro): ASU serve para codigo, heading estavel e TRECHO LOCALIZADO de capitulo; escrita nova/reescrita profunda e rolantes (de qualquer nicho, incl. REVISOES) vao inteiros; verificacao de volta obrigatoria e autonoma; nome asu corrigido para AAMMDD. Nao obriga ASU nos meta/ — mas se usar, verifica sozinha.»
- **`meta/CHANGELOG.md`** — v1.45.0 no topo.
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI o proprio arquivo da spec
```
git add src/index.template.html index.html meta/specs/260702-spec0015-diretriz-asu-refino.md meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: refino da diretriz ASU por tipo de arquivo + verificacao obrigatoria (D-046)" -m "capitulos: ASU para trecho localizado, inteiro para escrita nova; rolantes de qualquer nicho sempre inteiros; verificacao de volta autonoma; nome asu AAMMDD; harness 17/17"
git push
```
