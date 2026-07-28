# wo0065 — Bloco de fecho é da raia de planejamento + disciplina de entrega + fim dos resíduos `spec`

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.86.0` (pós-wo0064, commit `7e6e154`), harness **18/18 · 65/65 · 0 erros**.
> **Resultado esperado:** `v1.87.0`, harness **18/18 · 66/66 · 0 erros** (check novo **C22**).
>
> **Toca `src/` e `validate.js`** → exige `node build.js` + `node validate.js index.html`.
> Rode **`/check-wo`** antes.
>
> **Já testada pelo chat:** sandbox reconstruído do mount, 14 edições aplicadas, build + harness
> rodados — **18/18 · 66/66 · 0 erros**, com dois anti-testes do C22 confirmados. **Teto na configuração
> padrão inalterado** (`narrative` 6612, `game` 6520); `dev` 6038 → **6117** (folga 783).

---

## Contexto — o que quebrou e por quê

**1. O Claude Code passou a emitir o bloco de fecho de turno** (visível na nota `260727-1833.txt`), e
ninguém pediu isso. A causa é rastreável: o `CLAUDE.md` manda o Code ler o `meta/CEREBRO.md`, e lá a
seção do bloco de fecho diz «**Todo** turno de trabalho termina com este bloco» — sem dizer **de quem é
a raia**. A wo0064 reescreveu essa seção e a deixou mais fresca, o que provavelmente selou a adoção.

O prejuízo é concreto: o Code trocou o **relatório de trabalho** (o que fez, o que encontrou, o que
fugiu do texto da WO — veja a qualidade da nota `260727-1609.txt`, da wo0062) por um **formulário** que
ele preenche com «nada avulso» e «sem WO pendente». Formulário preenchido com vazio é pior que
relatório: perde a única informação que só quem executou tem. E, de quebra, ele violou a própria regra
condicional do bloco, escrevendo as linhas vazias que o formato proíbe.

**Correção:** o bloco ganha dono. Planejamento fecha com o bloco; execução fecha com o relatório.

**2. Duas disciplinas de entrega que vinham falhando no chat** (do meu lado, repetidamente):
- **WO entregue sem a linha `/apply-wo <arquivo>`.** A regra existia — mas só no `meta/CEREBRO.md`,
  lido no início da sessão, e não nas Instruções, lidas em toda mensagem. Regra que precisa valer em
  todo turno e mora só no CEREBRO é regra que evapora.
- **Bloco `git` parcial** (só o `git add`), que não serve para nada: o que importa é o `git commit`.

**3. Resíduos do rename `spec`→WO (wo0053) no kit do Claude Code.** O C15 vigiava caminhos
(`meta/specs/`) e o nome do comando (`apply-spec`), mas não a **prosa**: o `CLAUDE.md` gerado e a skill
`apply-wo` ainda diziam «aplica uma **spec**», e o argumento era rotulado `Spec: $ARGUMENTS`. Ou seja:
todo projeto-filho em modo Code nascia com o vocabulário errado.

---

## Tarefa A — `src/index.template.html`: a raia do bloco de fecho

**Âncora (linha única):**

```js
  L.push("**Este formato é o ponto de partida, não uma jaula.**
```

**Ação:** INSERIR a linha abaixo **imediatamente antes** da âncora:

```js
  L.push("**De quem é este bloco:** da raia de **planejamento** (o assistente no chat). Quem **executa** no Claude Code não fecha assim — fecha com o **relatório de trabalho**: o que fez, o que encontrou que foge do que a tarefa pedia, os arquivos tocados, o resultado do build/validação e o commit. Trocar o relatório por este formulário perde a informação que só quem executou tem.");
```

---

## Tarefa B — `src/index.template.html`: duas linhas nas Instruções

**B1 — Âncora (linha única):**

```js
  lines.push("**Análise antes do compromisso:** mudança não-trivial → análise escrita antes (`analises/AAMMDD-ANALISE-<tema>.md`). Formato e funil no CEREBRO.");
```

**Ação:** INSERIR **logo após** a âncora:

```js
  if(codeModeOn()) lines.push("**WO nunca vai sozinha:** entregue junto a linha `/apply-wo <arquivo>` para eu colar no Code.");
```

**B2 — Âncora (fim da linha do Commit, trecho único):**

```
mensagem sem acento. Não pule o commit.");
```

**Substituir por:**

```
mensagem sem acento. Não pule o commit. Bloco git parcial (só `add`) não serve: ou os três em ordem, ou só o `commit`.");
```

---

## Tarefa C — `src/index.template.html`: fim dos resíduos `spec` (6 edições de linha única)

| # | Âncora (trecho) | Substituir por |
|---|---|---|
| C1 | `doc por spec` | `doc por WO` |
| C2 | `Specs **só de doc não tocam o produto** → não precisam de build` | `WO **só de doc não toca o produto** → não precisa de build` |
| C3 | `**Ao APLICAR uma spec (Code):**` | `**Ao APLICAR uma WO (Code):**` |
| C4 | `curadoria que reescreve vem do chat (arquivo inteiro OU spec).` | `curadoria que reescreve vem do chat (arquivo inteiro OU WO).` |
| C5 | `"- Spec com diff exato já validado → **Sonnet**, esforço proporcional (mecânico = baixo/médio).",` | `"- WO com diff exato já validado → **Sonnet**, esforço proporcional (mecânico = baixo/médio).",` |
| C6 | `L.push("- \`meta/workorders/\` — specs de mudanca (vazia por enquanto).");` | `L.push("- \`meta/workorders/\` — WOs: instrucoes de aplicacao do chat para o Code (vazia por enquanto).");` |

> Cada trecho aparece **1×**. **Não** faça find-replace cego em `spec` — `aspect-ratio`, `específico`,
> `SPEC.md`, `spec de feature` e `specs/AAMMDD` são legítimos e o C15 reprova se quebrarem.

---

## Tarefa D — `src/index.template.html`: kit do Claude Code (raia de execução)

**D1 — Âncora (linha única):**

```js
    "- Ao aplicar uma spec de `meta/workorders/`: ache cada âncora exatamente; se não achar, PARE e reporte. Não mexa fora das edições nomeadas. `git diff` antes do commit.",
```

**Substituir por (duas linhas — a correção de vocabulário da C-tabela **e** a regra nova):**

```js
    "- Ao aplicar uma WO de `meta/workorders/`: ache cada âncora exatamente; se não achar, PARE e reporte. Não mexa fora das edições nomeadas. `git diff` antes do commit.",
    "- **Ao fechar a tarefa, RELATE o trabalho** — o que fez, achados e desvios do que a tarefa pedia, arquivos tocados, resultado do build/validação e o commit. **Não** copie o bloco de fecho do `meta/CEREBRO.md`: aquele é da raia de planejamento, e trocar relatório por formulário perde o que só você viu.",
```

**D2 — Âncora:** `"description: Aplica uma spec de meta/workorders/ ao repo` → **Substituir por:**
`"description: Aplica uma WO de meta/workorders/ ao repo` (na mesma linha, mais adiante:
`para aplicar uma spec nomeada.` → `para aplicar uma WO nomeada.`).

**D3 — Âncora:** `"Leia o arquivo de spec indicado em \`meta/workorders/\` e execute-o.",`
**Substituir por:** `"Leia o arquivo de WO indicado em \`meta/workorders/\` e execute-o.",`

**D4 — Âncora:** `"Spec: $ARGUMENTS",` **Substituir por:**

```js
    "Ao terminar, RELATE: o que foi feito, achados/desvios do texto da WO, arquivos tocados, build/validação e o commit.",
    "WO: $ARGUMENTS",
```

---

## Tarefa E — `validate.js`: check novo **C22**

**Âncora (linha única):**

```js
check("C21 analise antes do compromisso
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
check("C22 disciplina de entrega no modo Code (wo0065): WO com comando junto, bloco git inteiro, relatorio na raia de execucao", () => {
  const n=T.normNiche(T.NICHES.dev);
  T.STATE.workmode = T.STATE.workmode || {};
  const prevC=T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode="yes";
  const instrCode=T.buildInstr(n);
  const kit=T.buildCodeKitFiles();
  const cmd=T.buildClaudeMd(n);
  T.STATE.workmode.codeMode=prevC;
  assert(/\/apply-wo <arquivo>/.test(instrCode),"Instr do modo Code nao manda entregar a linha /apply-wo junto da WO");
  assert(/Bloco git parcial/.test(instrCode),"Instr nao proibe o bloco git parcial (so add)");
  assert(/relatório de trabalho/.test(cmd),"CEREBRO nao separa a raia: bloco de fecho e do planejamento, relatorio e da execucao");
  assert(/RELATE o trabalho/.test(kit.claudeMd),"CLAUDE.md do kit nao manda a raia de execucao relatar");
  assert(/RELATE/.test(kit.applyWo),"skill apply-wo nao pede o relato ao terminar");
  // residuos do rename spec->WO (wo0053) que sobraram no kit do Code
  const kitTxt=[kit.claudeMd,kit.applyWo,kit.wrap,kit.settings].join("\n");
  assert(!/uma spec/i.test(kitTxt),"kit do Code ainda fala em 'uma spec' (vocabulario pre-wo0053)");
  assert(!/arquivo de spec/i.test(kitTxt),"kit do Code ainda fala em 'arquivo de spec'");
  assert(!/Spec: \$ARGUMENTS/.test(kitTxt),"skill apply-wo ainda rotula o argumento como Spec");
  return "ok";
});

```

---

## Tarefa F — bump

**Âncora:** `const KIT_VERSION = "1.86.0";` → **Substituir por:** `const KIT_VERSION = "1.87.0";`

---

## Tarefa G — dogfood no KCM

### G1 · `meta/CEREBRO.md` — a raia do bloco de fecho

**Âncora (linha única):**

```
Vale para todo turno de trabalho, não só ao encerrar a sessão: é o que permite retomar sem reconstruir contexto. Absorve i-N44/i-N45 e a nota 260720 (nome do handoff).
```

**Substituir por:**

```
**De quem é este bloco (wo0065):** da raia de **planejamento** — o chat. O **Claude Code não fecha assim**: ele fecha com o **relatório de trabalho** — o que fez, os achados e desvios do texto literal da WO, os arquivos tocados, o resultado de `build`/`validate` e o commit. O relatório é insubstituível porque carrega o que só quem executou viu; o formulário, preenchido com «nada a arquivar» e «sem pendência», troca informação por ritual. Se o Code começar a emitir o bloco, é sinal de que esta seção foi lida sem a cláusula de raia — corrija aqui, não no turno.

Vale para todo turno de trabalho **da raia de planejamento**, não só ao encerrar a sessão: é o que permite retomar sem reconstruir contexto. Absorve i-N44/i-N45 e a nota 260720 (nome do handoff).
```

### G2 · `CLAUDE.md` (raiz) — dizer ao Code como fechar

**Âncora (linha única):**

```
- **Nunca** commitar sem o harness em **18/18 nichos, 0 erros** (o total de checagens sobe a cada check novo).
```

**Substituir por:**

```
- **Nunca** commitar sem o harness em **18/18 nichos, 0 erros** (o total de checagens sobe a cada check novo).

## Como fechar uma tarefa
**Relate o trabalho** — o que fez, os achados e desvios do texto literal da WO, os arquivos tocados, o resultado de `build`/`validate` e o commit. **Não** use o bloco de fecho de turno do `meta/CEREBRO.md` (Próximo/Estado/Arquivar/Config/Handoff): aquele é da raia de **planejamento**. Relatório > formulário — o que importa aqui é o que só você viu ao executar.
```

### G3 · `.claude/commands/wrap.md` — acrescentar o relato

**Âncora (linha única):**

```
Encerre a tarefa atual:
```

**Substituir por:**

```
Encerre a tarefa atual (fechamento da raia de EXECUÇÃO — relatório, não o bloco de fecho do chat):
- **Relate:** o que foi feito, os achados e desvios do texto literal da WO (âncora já aplicada, arquivo ausente, tarefa que já existia), os arquivos tocados e o resultado de `build`/`validate`.
```

### G4 · `INSTRUCOES-DO-PROJETO.md` (raiz) — as duas disciplinas

**Âncora (linha única):**

```
- **Commit:** entregue o `git commit` pronto, em **bloco separado** para copiar isolado, mensagem **sem acento**. Não pule o commit.
```

**Substituir por:**

```
- **Commit:** entregue o `git commit` pronto, em **bloco separado** para copiar isolado, mensagem **sem acento**. Não pule o commit. **Bloco `git` parcial (só `add`) não serve:** ou os três em ordem (`add`/`commit`/`push`), ou só o `commit` — que é o que importa.
- **WO nunca vai sozinha:** toda WO entregue vem acompanhada da linha `/apply-wo <arquivo>` para colar no Code. Sem a linha, a entrega está incompleta.
```

> Depois de aplicar, **avise o usuário para recolar o arquivo em Projeto → Instruções.**

### G5 · Renomear o guia (o nome ficou no vocabulário pré-wo0053)

O conteúdo novo vem **pelo chat**, com o nome novo — esta WO só remove o antigo e conserta as
referências (um canal por doc por ciclo):

```bash
git rm meta/workorders/_GUIA-doc-por-spec.md
```

E no `.flatdropignore`, **âncora:** `!meta/workorders/_GUIA-doc-por-spec.md` →
**substituir por:** `!meta/workorders/_GUIA-doc-por-wo.md`

E no `meta/CEREBRO.md`, na entrada «Higiene do FlatDrop», **âncora:**
`` `!meta/workorders/_GUIA-doc-por-spec.md` `` → **substituir por:** `` `!meta/workorders/_GUIA-doc-por-wo.md` ``

> O arquivo `meta/workorders/_GUIA-doc-por-wo.md` chega pronto do chat neste mesmo ciclo. Se ele não
> estiver na pasta quando você for commitar, **avise** — não recrie o conteúdo.

---

## Tarefa H — registros

1. **`meta/DECISIONS.md`** — **D-099 — O bloco de fecho tem raia: planejamento fecha com o bloco,
   execução fecha com relatório.** Contexto: o Code adotou o bloco por conta própria (nota
   `260727-1833.txt`) porque a seção do CEREBRO dizia «todo turno» sem dizer de quem. Opções: (A)
   deixar como está — o Code continua trocando relatório por formulário; (B) tirar o bloco do CEREBRO
   e deixá-lo só nas Instruções — quebraria o projeto vanilla, que não tem Instruções separadas; (C)
   **dar dono ao bloco** — escolhida. Consequência: o `CLAUDE.md` gerado e a skill `apply-wo` passam a
   mandar **relatar**. Registre junto a lição de método: **regra que precisa valer em todo turno e mora
   só no CEREBRO evapora** — foi o que aconteceu com a linha `/apply-wo` (existia na D-030, sumiu na
   prática) e é o motivo de ela subir para as Instruções agora.
2. **`meta/CHANGELOG.md`** — `## v1.87.0 — Raia do bloco de fecho + disciplina de entrega + fim dos
   resíduos spec (wo0065, D-099)`, com o custo de teto medido (padrão inalterado; `dev` +79).
3. **`meta/STATUS.md`** — append + versão **v1.87.0** · 66/66.
4. **`meta/IDEAS.md`** — registrar **aberta** e marcada como **A ANALISAR (prioridade)**:
   **o teto não cobre os modos.** O check `N[]` mede a configuração **padrão** e o `G16` varia só
   chips/multi — nenhum dos dois liga **Modo Code** ou **ASU**. Medido nesta WO: com Code+ASU ligados,
   `narrative` vai a **8081** e `game` a **7989** — mais de 1.000 chars **acima** do teto de 6.900, sem
   que nada fique vermelho. Ou o teto precisa ser por configuração, ou as linhas dos modos precisam da
   mesma curadoria que os comportamentos receberam na wo0057/wo0059. **É análise, não WO** — mexer no
   G16 hoje deixaria o harness vermelho na hora.

---

## Verificação

1. `node build.js` · `node validate.js index.html` → **18/18 · 66/66 · 0 erros**, com **C22 verde**.
2. Teto padrão: `narrative` **6612**, `game` **6520** (inalterados), `dev` **6117**.
3. `meta/workorders/_GUIA-doc-por-wo.md` presente; `_GUIA-doc-por-spec.md` ausente; nenhuma referência
   ao nome antigo (`grep -rn "GUIA-doc-por-spec" . --exclude-dir=.git`).
4. `git status` limpo.

---

## Commit (bloco separado, sem acento)

```bash
git add -A
git commit -m "feat(kit): bloco de fecho ganha raia + disciplina de entrega + fim dos residuos spec (wo0065, D-099)

- planejamento fecha com o bloco; execucao (Claude Code) fecha com RELATORIO de trabalho
- CLAUDE.md gerado e skill apply-wo passam a mandar relatar achados e desvios
- Instrucoes (modo Code): WO nunca vai sozinha, vai com a linha /apply-wo
- Instrucoes: bloco git parcial (so add) nao serve - os tres em ordem ou so o commit
- 9 residuos do rename spec->WO removidos do kit do Code e da prosa das raias
- guia renomeado para _GUIA-doc-por-wo.md; referencias corrigidas
- check C22; KIT_VERSION 1.87.0; harness 18/18, 66/66, 0 erros"
git push
```
