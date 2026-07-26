# spec0052 — Adesão ao ritual: mount-check por turno + memória×mount + fix vazamento ASU

> **Raia:** Code. **Config:** Sonnet + esforço Alto (ou Opus 5 + Alto). Windows: **PowerShell**.
> **Pré-requisito:** `v1.74.0` (pós-spec0051, commit `a586fc7`, pushado), harness **18/18 · 57/57 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 58/58 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado numa reconstrução pós-0051 em sandbox (`build` + `validate`) → verde
> **18/18 · 58/58**. Âncoras byte-exatas e únicas (CRLF).
> **Teto medido:** a nuance vai quase toda para o CEREBRO (sem teto); só um gatilho curto entra nas
> Instruções (+81 chars em todos). **`game` fica em 6879/6900 (folga 21)** — o mais apertado; **vigiar**.
> **Rode `/check-spec` antes de aplicar.**
>
> **Origem:** relatório 260722-1153 (projetos ignorando o ritual). **Prioridade:** URGENTE (quebrando
> projetos ao vivo), à frente do SDD.
> **NÃO inclui** o "padrão de nome de spec nas Instruções" — o nome «spec» muda na spec0053; só se faz aqui
> o que independe do rename.

## O quê

Três correções + dogfood:
- **C-a** — o princípio universal `check_before_ask` (P8) ganha a lógica **mount-por-turno + memória×mount**:
  revisar o mount a CADA turno (sem depender de sinal do usuário) e **comparar** memória × mount sem tratar
  nenhum como verdade absoluta. (CEREBRO — sem teto.)
- **C-b** — gatilho curto no ritual das Instruções (a superfície lida todo turno). (+81 chars.)
- **C-c** — fim do **vazamento da nomeação ASU no modo Code**: a linha «Nomes padronizados» só cita
  `AAMMDD-asuNNNN.yaml` quando o modo ASU está ligado.
- **Dogfood** — as mesmas correções nos arquivos **próprios do KCM** (`INSTRUCOES-DO-PROJETO.md` + `CEREBRO.md`).

---

## Tarefa A — `src/index.template.html`

### A1 (C-a) — `check_before_ask` (P8) ganha mount-por-turno + memória×mount
Fim da descrição do princípio (fragmento **único**).
**Âncora:** `em vez de ecoar o registro velho."],`
**Substituir por:**
```
em vez de ecoar o registro velho. Reveja o mount a CADA turno (novos `.txt`, `_MANIFEST`, arquivos mudados) antes de responder — não espere eu sinalizar upload; um «continuar» ou uma reclamação também pode vir com o mount atualizado. Compare o mount com o que você lembrava: não trate o mount como verdade absoluta nem confie só na memória — o mount é provavelmente a pasta do usuário, mas ele pode ter esquecido de subir. Se difere do que você lembrava, é provável atualização: estude a diferença. Se o mount bate com a memória mas eu afirmo ter aplicado algo que não aparece, faça o que dá e AVISE («o mount não parece atualizado com X»), em vez de inferir cegamente ou regenerar o que já foi feito."],
```

### A2 (C-b) — gatilho curto no ritual das Instruções (`buildInstr`)
**Âncora:** ``${coreFiles.some(n=>/CHANGELOG/i.test(n))?" → última entrada do `CHANGELOG.md`":""}.`);``
**Substituir por:**
```
${coreFiles.some(n=>/CHANGELOG/i.test(n))?" → última entrada do `CHANGELOG.md`":""}. E reveja o mount a cada turno (novos \`.txt\`/arquivos), sem esperar eu sinalizar.`);
```

### A3 (C-c) — fim do vazamento ASU (linha «Nomes padronizados», dentro de `codeModeOn()`)
**Âncora:**
```javascript
L.push('- **Nomes padronizados:** specs em `meta/specs/` seguem `AAMMDD-specNNNN-desc.md` (ex.: `260630-spec0007-asu-entrega-e-escopo.md`); instruções ASU seguem `AAMMDD-asuNNNN.yaml`. Numeração sequencial e estável; a data é a de criação. O chat nomeia; o Code aplica.');
```
**Substituir por:**
```javascript
L.push('- **Nomes padronizados:** specs em `meta/specs/` seguem `AAMMDD-specNNNN-desc.md` (ex.: `260630-spec0007-asu-entrega-e-escopo.md`)'+(asuModeOn()?'; instruções ASU seguem `AAMMDD-asuNNNN.yaml`':'')+'. Numeração sequencial e estável; a data é a de criação. O chat nomeia; o Code aplica.');
```

### A4 — bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.74.0";` → **Substituir por:** `const KIT_VERSION = "1.75.0";`

---

## Tarefa B — `validate.js`: check **C14**

**Âncora:** `check("C13 E-ASU`
**Substituir por** (insira C14 ANTES do C13, que permanece logo depois):
```javascript
check("C14 adesao ao ritual (spec0052): mount-check por turno + memoria x mount + fix vazamento ASU no modo Code", () => {
  const n=T.normNiche(T.NICHES.dev);
  assert(/reveja o mount a cada turno/i.test(T.buildInstr(n)),"Instr sem gatilho de reler o mount por turno");
  assert(/não trate o mount como verdade absoluta/.test(T.buildClaudeMd(n)),"CEREBRO sem logica memoria x mount");
  T.STATE.workmode={codeMode:"yes"};
  assert(!/asuNNNN/.test(T.buildClaudeMd(T.normNiche(T.NICHES.dev))),"modo Code sem ASU cita asuNNNN (vazamento)");
  T.STATE.workmode={asuMode:"yes"};
  assert(/asuNNNN/.test(T.buildClaudeMd(T.normNiche(T.NICHES.dev))),"modo ASU deveria citar asuNNNN");
  T.STATE.workmode={};
  return "ok";
});

check("C13 E-ASU
```

---

## Tarefa C — DOGFOOD: arquivos próprios do KCM

> O KCM é mantido pelos arquivos que prega. As mesmas correções precisam valer para ele.

### C1 — `INSTRUCOES-DO-PROJETO.md` (item 4)
**Âncora (linha inteira):**
```
4. **Releitura por turno (não só na abertura):** SEMPRE que o usuário sinalizar upload — mesmo sem nomear o arquivo (ex.: "já subi", "veja o txt", "como pode ver", "atualizei o mount") — releia o mount (notas `.txt` novas + `_MANIFEST.md`) **antes de responder**, nunca de memória. Responder de memória a um "veja o txt" é erro conhecido; esta regra existe para evitá-lo.
```
**Substituir por:**
```
4. **Releitura por turno (incondicional):** a CADA turno, antes de responder, reveja o mount (notas `.txt` novas, `_MANIFEST.md`, arquivos mudados) — **não** dependa de eu sinalizar upload; um "continuar", uma correção ou uma reclamação também pode vir com o mount atualizado. Nunca responda de memória a algo que o mount já resolve. E **compare** o mount com o que você lembrava: não trate o mount como verdade absoluta nem confie só na memória — se difere, é provável atualização (estude); se o mount bate com a memória mas eu afirmo ter aplicado algo que não aparece, faça o que dá e **avise** ("o mount não parece atualizado com X"), em vez de inferir ou regenerar o que já foi feito.
```

### C2 — `CEREBRO.md` (item 8, P8) + nota de revisão
Estende o fim do item 8 (mesmo texto do template). **Âncora:** `se já foi resolvida, diz e atualiza o STATUS em vez de ecoar o registro velho.`
**Substituir por:**
```
se já foi resolvida, diz e atualiza o STATUS em vez de ecoar o registro velho. **Reveja o mount a CADA turno** (novos `.txt`, `_MANIFEST`, arquivos mudados) antes de responder — não espere eu sinalizar; e **compare** memória × mount: não trate o mount como verdade absoluta nem confie só na memória. Se divergem, é provável atualização (estude); se o mount bate com a memória mas eu afirmo ter aplicado algo ausente, faça o que dá e AVISE ("o mount não parece atualizado com X"), em vez de inferir ou regenerar.
```
E atualize a linha «Mudanças nesta revisão» do topo do `CEREBRO.md` para a nova versão, registrando: «P8 ganhou a lógica mount-por-turno + memória×mount (spec0052)».

---

## Tarefa D — docs (append)

- **`meta/DECISIONS.md` → D-085:** adesão ao ritual (origem: relatório 260722). P8 (`check_before_ask`) ganha
  mount-por-turno **incondicional** + comparação memória×mount (nem mount como verdade absoluta, nem só
  memória; se divergem, estuda; se mount defasado vs. algo que o usuário diz ter aplicado, faz o que dá e
  avisa). Gatilho curto no ritual das Instruções. Fim do vazamento da nomeação ASU no modo Code (só cita
  `asuNNNN` com ASU ligado). Aplicado também aos arquivos próprios do KCM (dogfood). Check C14.
- **`meta/IDEAS.md`:** registrar a adesão ao ritual como INCORPORADA; **fechar B7** (verificado: «A obra» é
  ancarada na saída da narrativa — não estava aberto); **parquear** o handoff padronizado (260720,
  `AAMMDD-HANDOFF-BRIEF.md` no prompt de retomada) e o **rename de «spec»** (spec0053) como próximos.
- **`meta/STATUS.md`:** v1.74.0 → **v1.75.0**; testes **18/18 · 58/58 · 0 erros**; `KIT_VERSION 1.75.0`;
  somar C14; **nota de vigilância: `game` em 6879/6900 (folga 21)** — o mais apertado; qualquer adição futura
  a `game` ou aos universais das Instruções precisa medir o teto antes.
- **`meta/CHANGELOG.md`:** entrada v1.75.0 no topo.

---

## Verificação

1. `/check-spec` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 58/58 · 0 erros**. C14 verde; G2 segue 13.
3. **Teto:** nenhum nicho estoura; `game` = 6879 (folga 21). `grep -n "6900" validate.js` segue vazio.
4. **Comportamento:** nicho **dev** no **modo Code sem ASU** → CEREBRO NÃO cita `asuNNNN` (com ASU, cita); as
  Instruções trazem «reveja o mount a cada turno»; o CEREBRO traz a lógica memória×mount.
5. **Dogfood:** `INSTRUCOES-DO-PROJETO.md` item 4 e `CEREBRO.md` item 8 atualizados.
6. `git diff --stat` — template + validate.js + index.html + INSTRUCOES-DO-PROJETO.md + CEREBRO.md + 4 meta-docs + a spec.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        INSTRUCOES-DO-PROJETO.md CEREBRO.md \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/specs/260716-spec0052-adesao-ao-ritual.md
git commit -m "fix(ritual): mount-check por turno incondicional + memoria x mount + fim do vazamento ASU no modo Code (spec0052, D-085)

- P8 (check_before_ask) ganha mount-por-turno sem depender de sinal + comparacao memoria x mount
  (nem mount como verdade absoluta nem so memoria; se divergem estuda; se defasado, faz o que da e avisa)
- gatilho curto no ritual das Instrucoes; linha 'Nomes padronizados' so cita asuNNNN com ASU ligado
- dogfood: mesmas correcoes em INSTRUCOES-DO-PROJETO.md e CEREBRO.md
- fecha B7 (verificado); check C14; KIT_VERSION 1.75.0; game em 6879/6900 (vigiar)
- 18/18, 58/58, 0 erros"
git push
```
