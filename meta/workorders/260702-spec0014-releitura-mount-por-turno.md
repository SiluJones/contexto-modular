# Spec — Releitura do mount por turno (v2: linha fundida + teto 6900)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index_template.html` e `validate.js`** -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260702-spec0014-releitura-mount-por-turno.md`**
> Config: **Opus + esforco Alto**.

## Antes de tudo — reverter o working tree sujo
A v1 desta spec estourou o teto e ficou aplicada SEM commit (harness vermelho). Volte ao ultimo verde antes de aplicar esta v2:
```
git checkout -- src/index_template.html index.html
git status   # deve ficar limpo
```
Se `git status` nao ficar limpo, PARE e reporte.

## Contexto
Regra a inserir: releitura do mount **por turno** ao sinal de upload (mesmo sem nomear arquivo), nao so na abertura — previne responder de memoria a "veja o txt" (erro real). A v1 falhou porque **adicionava** uma linha nova (360 chars) sobre a existente, estourando `game` e `narrative` no teto 6500. **Correcao:** (a) **fundir** a linha do ritual de `.txt` com a nova regra numa so (elimina redundancia "inicio" vs "por turno"); (b) **elevar o teto para 6900** no harness (o teto 6500 era conservador; a instrucao curta continua enxuta). Verificado: com a linha fundida, `game` ~6586/6900 e `narrative` ~6519/6900 — folga real, sem cortar nenhuma regra.

## Tarefa A — fundir a linha do ritual (substituir-BLOCO)

**Ancora (a linha existente, ~1913):**
```
  lines.push("No inicio da sessao, cheque notas avulsas `.txt` recentes no diretorio do projeto e leia-as — entrada transitoria do usuario (a fundir nos meta/), nao fonte canonica. Se nao houver, siga normalmente.");
```
(o texto real tem acentos — copie-o CARACTERE A CARACTERE do arquivo, nao desta spec)

**Substituir por (linha unica, fundida e enxuta):**
```
  lines.push("No inicio e sempre que o usuario sinalizar upload (mesmo sem nomear o arquivo — \"ja subi\", \"veja o txt\", \"atualizei o mount\"), releia o mount (notas `.txt` + `_MANIFEST.md`) ANTES de responder, nunca de memoria. Sao entrada transitoria (a fundir nos meta/), nao fonte canonica; se nao houver, siga.");
```
(mantenha os acentos reais na sua edicao: "inicio"->"início", "usuario"->"usuário", etc. — o texto acima esta sem acento so nesta spec por seguranca de bytes; espelhe o estilo acentuado da linha original)

**Diff esperado:** 1 linha por 1 linha. 0 outras alteracoes no template.

## Tarefa B — elevar o teto no `validate.js`

**Ancora 1 (a assertion):**
```
    assert(instr.length <= 6500, "Instrucao excede 6500: " + instr.length);
```
**Substituir por:**
```
    assert(instr.length <= 6900, "Instrucao excede 6900: " + instr.length);
```
**Ancora 2 (o rotulo da checagem, linha ~107):** troque o literal `teto 6500` por `teto 6900` na string de descricao do check.
**Diff esperado:** 2 trocas de "6500"->"6900" no validate.js. Nada mais.

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js index.html
```
Espere **17/17, 0 erros**. Confirme no output que `game` e `narrative` estao abaixo de 6900 (~6586 e ~6519). Se algum passar de 6900, PARE e reporte (nao corte regra; rediscutimos o teto).

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-045: «Releitura do mount por turno ao sinal de upload (mesmo sem nomear arquivo), fundida na linha de `.txt` do ritual; previne responder de memoria a «veja o txt». Teto da instrucao curta elevado de 6500 para 6900 (era conservador). Instrucao curta, todos os nichos.»
- **`meta/CHANGELOG.md`** — v1.44.0 no topo.
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI o proprio arquivo da spec
```
git add src/index_template.html index.html validate.js meta/specs/260702-spec0014-releitura-mount-por-turno.md meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: releitura do mount por turno ao sinal de upload + teto 6900 (D-045)" -m "funde a linha de txt do ritual com a regra por-turno (mesmo sem nomear arquivo); eleva teto da instrucao curta de 6500 para 6900; previne resposta de memoria; harness 17/17"
git push
```
