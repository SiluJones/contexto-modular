# Spec — Disciplina v2 · Fase A (ASU): entrega por download + escopo código-vs-docs

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca o produto** (`src/index.template.html` → `index.html`): **precisa** de `node build.js` e `node validate.js` (17/17).
> Prompt: **"leia `meta/specs/2026-06-30-spec0007_asu-entrega-e-escopo.md` e execute"**.
> Config: **Sonnet + `/effort high`** (é texto de diretriz, não lógica).

## Contexto
O `CORRIGIR` (260630) mostrou dois problemas na diretriz do ASU:
1. **Entrega inline corrompe bytes.** A instrução ia como bloco `yaml` colado no chat; em âncoras não-ASCII, o copia-e-cola corrompe o UTF-8. O `INSTRUCTION_GUIDE` §0 já diz *"Salve como instrucao.yaml e rode"* — a ferramenta espera o yaml **como arquivo**. Correção: **entregar a instrução como `.yaml` para baixar** (bytes exatos).
2. **Faltava escopo código-vs-docs.** Um projeto analisou (corretamente) que ASU serve para código e docs de **heading único e estável** (`DECISIONS`, `CONTEXT`), mas **não** para os **rolantes** (`STATUS`/`CHANGELOG`/`IDEAS`), cujas edições são holísticas (mover resolvido, reclassificar, checar P12) — patch brigaria com a higiene. É o nosso D-030 aplicado ao ASU.

Tudo em `src/index.template.html`, na seção `if(asuModeOn())` (≈2205-2216) e na linha da instrução curta (≈1916).

## Tarefa A — cabeçalho: instrução vai para baixar
Na linha do cabeçalho (≈2209), **substitua** o trecho:
`responda com UMA instrução \`yaml\` (patch cirúrgico), não arquivos inteiros.`
por:
`entregue UMA instrução \`yaml\` (patch cirúrgico) **para baixar**, não arquivos inteiros.`

## Tarefa B — reescrever os itens 1-5 → 1-6 (bloco contíguo)
**Substitua** as 5 linhas `L.push("1. …")` … `L.push("5. …")` (≈2211-2215) por este bloco de 6:
```js
  L.push("1. Ao pedir uma \"instrução ASU\" (ou ao **editar** arquivos existentes), entregue a instrução **como arquivo `.yaml` para baixar** — não colada no chat: o download preserva os bytes UTF-8 exatos e evita corromper âncoras não-ASCII no copia-e-cola. Nome `AAAA-MM-DD-asuNNNN.yaml` (ex.: `2026-06-28-asu0001.yaml`), com `format_version` igual ao declarado no `INSTRUCTION_GUIDE.md` (não fixe número — o guia é o contrato). Acompanhe de UMA linha: `python -m src apply <arquivo>.yaml --root <RAIZ> --dry-run`. Nunca XML.");
  L.push("2. **Arquivo NOVO:** entregue-o pronto para baixar — não o reescreva como instrução ASU. Exceção: criação junto de edições a existentes na MESMA instrução → aí `create_file`. (Mesmo numa edição, o usuário pode preferir o arquivo inteiro para baixar — se pedir, respeite.)");
  L.push("3. **Escopo do ASU (código vs. docs):** use ASU para **código** e para docs de **heading único e estável** (`DECISIONS.md` — cada `## DEC-N` é único —, `CONTEXT.md`). Os docs **rolantes** (`STATUS.md`, `CHANGELOG.md`, `IDEAS.md`) vão **inteiros** (arquivo completo para baixar): as edições deles são holísticas (mover o resolvido, reclassificar, checar que nada único se perdeu) e um patch cirúrgico brigaria com a própria higiene. Reavalie o `DECISIONS.md` via ASU só quando passar de ~700 linhas — aí o ganho de token compensa.");
  L.push("4. Prefira edições **cirúrgicas** (`replace_function`/`replace_method`/`replace_section`/`set_json_path`); para JS e outras, `type: \"text\"` + `replace_context_block` com âncoras copiadas **literalmente** do arquivo real (indentação exata), casando **uma única vez** — só o miolo no `new_content`. Se a âncora tiver caractere não-ASCII, evite o literal com `.*`: prefira uma âncora ASCII vizinha estável.");
  L.push("5. Não invente campos nem use número de linha; o `INSTRUCTION_GUIDE.md` é a referência obrigatória do formato.");
  L.push("6. **Verificação (sessão seguinte):** se emitiu uma instrução ASU e os arquivos estão à vista, confira no disco cada arquivo tocado antes de seguir — não confie em \"deu certo\".");
```
(Mudanças: item 1 vira download; item 3 é novo — escopo código-vs-docs; item 4 ganha a dica de âncora não-ASCII; os antigos 3→4, 4→5, 5→6.)

## Tarefa C — instrução curta reflete download + docs-hybrid (≈1916)
**Substitua** a linha:
`  if(asuModeOn()) lines.push("Código: **editar** arquivo existente → instrução ASU (\`yaml\`, nome \`AAAA-MM-DD-asuNNNN.yaml\`); arquivo **novo** → entregue pronto para baixar. Detalhe no CEREBRO.");`
por:
```js
  if(asuModeOn()) lines.push("ASU: **editar** código/doc de heading único → instrução `yaml` **para baixar** (nome `AAAA-MM-DD-asuNNNN.yaml`, bytes exatos); **arquivo novo** e **docs rolantes** (STATUS/CHANGELOG/IDEAS) → arquivo inteiro para baixar. Detalhe no CEREBRO.");
```

## Validar (obrigatório)
1. `node build.js` → **OK**; `node validate.js` → **17/17**.
2. **Manual:** ligue "Saída via ASU?" → no CEREBRO, o item 1 diz "arquivo `.yaml` para baixar" (não "bloco colado"); existe o item 3 de escopo código-vs-docs; a instrução curta traz a linha ASU nova.
3. `git diff` revisado (só a seção asuMode + a linha da instrução curta).

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — **D-037** (confirme número):
```
## D-037 — ASU: instrução por download + escopo código-vs-docs

**Decisão.** A instrução ASU é entregue como arquivo `.yaml` para baixar (bytes UTF-8 exatos), não colada no chat. ASU vale para código e docs de heading único/estável (DECISIONS, CONTEXT); docs rolantes (STATUS/CHANGELOG/IDEAS) vão inteiros; reavaliar DECISIONS via ASU só perto de ~700 linhas. Âncora não-ASCII: evitar literal com `.*`.

**Por quê.** Colar YAML corrompe bytes em âncoras não-ASCII (visto em produção); o INSTRUCTION_GUIDE ja espera o yaml salvo como arquivo. E patch cirúrgico briga com a higiene holística dos docs rolantes — é o D-030 aplicado ao ASU.
```
- **`meta/CHANGELOG.md`** — topo: `## v1.41.0 — ASU por download + escopo codigo-vs-docs (disciplina v2, Fase A)` + 1-2 bullets (D-037).
- **`meta/STATUS.md`** — versão → **v1.41.0** + linha na «Última sessão» (disciplina v2 Fase A feita; Fases B-D pendentes: config mode-aware, nome de spec no Modo Code, obediência feedback/nome-de-download).

## Commit (sem acento)
```
git add src/index.template.html index.html meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: ASU por download + escopo codigo-vs-docs (disciplina v2 Fase A, D-037)" -m "instrucao ASU entregue como .yaml para baixar (bytes exatos); ASU para codigo e docs de heading unico, docs rolantes vao inteiros; dica de ancora nao-ASCII; v1.41.0"
git push
```
