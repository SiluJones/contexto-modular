# spec0047 — Doc-âncora por nicho + fim do choque CONTEXT (base)

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.70.0` (commit `ff9b810`, pushado), harness **18/18 · 52/52 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 53/53 checagens · 0 erros.**
> **⚠️ Já validado:** todas as Tarefas A–C foram aplicadas numa reconstrução do repo em sandbox
> (`node build.js` + `node validate.js index.html`) — **verde 18/18 · 53/53**. As âncoras abaixo são
> byte-exatas contra `src/index.template.html` (arquivo com fim de linha CRLF; copie o texto como está).
> **Rode `/check-spec` antes de aplicar.**
>
> **Origem:** `meta/analises/260716-ANALISE-REFINO-NARRATIVE.md` §A. Primeira das duas specs do refino
> narrativo; esta é **de base** (afeta os 18 nichos), a spec0048 é do nicho.

## Por quê (o bug, medido — não é só cosmético)

O resolvedor do «doc de contexto» adivinhava o arquivo-âncora por **regex de nome**
(`/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i`). Auditoria empírica dos 18 nichos:

- **`BIBLIA` (narrativa), `MARCA` (marketing), `ESTILO` (pixel), `MUNDO` (rpg) não casam a regex.** Nesses
  4 nichos o ritual gerado — **nas Instruções E no CEREBRO** — cai para `CEREBRO → STATUS` e **omite o
  arquivo-âncora**. Na narrativa isso significa que o ritual nunca manda ler a **bíblia da obra**, o arquivo
  em torno do qual o nicho inteiro é construído.
- **Choque `CONTEXT` (o relatado como cosmético):** duas linhas do modo ASU e o ritual do kit-Code cravam o
  literal `CONTEXT`/`CONTEXT.md`, que a narrativa (e vários nichos) **não possui** — o leitor recebe
  instrução para um arquivo inexistente.

**Correção:** cada nicho **declara** seu âncora (`anchorDoc`); os resolvedores preferem essa declaração e só
caem na regex como retaguarda; as citações genéricas de `CONTEXT` viram genéricas; e um **check-guarda G25**
trava a invariante para sempre (ritual cita o âncora de todo nicho; Instruções nunca citam um `.md`
inexistente).

---

## Tarefa A — `src/index.template.html`

### A1 — resolvedor do ritual das Instruções (`buildInstr`): prefere `anchorDoc`
**Âncora:**
```javascript
  const coreFiles = (niche.contextFiles||[]).map(f=>f.name);
  const readOrder = [
    "CEREBRO.md",
    coreFiles.find(n=>/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i.test(n)),
    coreFiles.find(n=>/STATUS/i.test(n)),
  ].filter(Boolean);
```
**Substituir por:**
```javascript
  const coreFiles = (niche.contextFiles||[]).map(f=>f.name);
  const ctxName = ("anchorDoc" in niche)
    ? niche.anchorDoc
    : coreFiles.find(n=>/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i.test(n));
  const readOrder = [
    "CEREBRO.md",
    ctxName,
    coreFiles.find(n=>/STATUS/i.test(n)),
  ].filter(Boolean);
```
> `anchorDoc` string entra na ordem; `anchorDoc:null` (nicho sem âncora, ex. `custom`) cai no `.filter(Boolean)` e o ritual fica só com o que existe. Nicho sem o campo → regex, como antes.

### A2 — resolvedor do ritual do CEREBRO (`buildClaudeMd`): prefere `anchorDoc`
**Âncora:**
```javascript
  const ctxF = cf.find(f=>/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i.test(f.name));
```
**Substituir por:**
```javascript
  const ctxF = ("anchorDoc" in niche)
    ? (niche.anchorDoc ? cf.find(f=>f.name===niche.anchorDoc) : null)
    : cf.find(f=>/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i.test(f.name));
```
> `if(ctxF) order.push(...)` logo abaixo já trata `null` — nicho sem âncora não emite a linha.

### A3 — linha do modo ASU (Instruções): tira o literal `CONTEXT`
O fragmento abaixo é **único** no arquivo (dentro de uma linha longa de `lines.push`). Substitua só o fragmento.
**Âncora (fragmento):** `doc de heading estável (DECISIONS/CONTEXT)`
**Substituir por:** `doc de heading estável (DECISIONS + o doc de contexto estável do projeto)`

### A4 — §3 do ASU (CEREBRO): tira o literal `CONTEXT.md`
Fragmento **único**. Substitua só o fragmento (atenção às crases).
**Âncora (fragmento):** `` (`DECISIONS.md`, `CONTEXT.md`, `GLOSSARY`) ``
**Substituir por:** `` (`DECISIONS.md`, o doc de contexto estável do projeto, `GLOSSARY`) ``

### A5 — ritual do kit-Code (`buildCodeKitFiles`, o `CLAUDE.md`): genérico
Este `CLAUDE.md` é um scaffold com placeholders (`<NOME DO PROJETO>`), niche-agnóstico — a referência vira genérica.
**Âncora (fragmento):** `` Leia `meta/CEREBRO.md` → `meta/CONTEXT.md` → `meta/STATUS.md` antes de agir. ``
**Substituir por:** `` Leia `meta/CEREBRO.md` → o doc de contexto do projeto (ex.: `meta/CONTEXT.md`) → `meta/STATUS.md` antes de agir. ``

### A6 — bump `KIT_VERSION` (invariante i-N50: todo bump mexe aqui)
**Âncora:** `const KIT_VERSION = "1.70.0";`
**Substituir por:** `const KIT_VERSION = "1.70.1";`

---

## Tarefa B — declarar `anchorDoc` nos 5 nichos que a regex erra

Em cada arquivo, o header `NICHES.<id> = {` é **único**. Insira `anchorDoc` como primeiro campo.

**`src/niches/narrative.js`** — Âncora: `NICHES.narrative = {` → Substituir por:
```javascript
NICHES.narrative = {
  anchorDoc:"BIBLIA.md",
```
**`src/niches/marketing.js`** — Âncora: `NICHES.marketing = {` → Substituir por:
```javascript
NICHES.marketing = {
  anchorDoc:"MARCA.md",
```
**`src/niches/pixel.js`** — Âncora: `NICHES.pixel = {` → Substituir por:
```javascript
NICHES.pixel = {
  anchorDoc:"ESTILO.md",
```
**`src/niches/rpg.js`** — Âncora: `NICHES.rpg = {` → Substituir por:
```javascript
NICHES.rpg = {
  anchorDoc:"MUNDO.md",
```
**`src/niches/custom.js`** — Âncora: `NICHES.custom = {` → Substituir por:
```javascript
NICHES.custom = {
  anchorDoc:null,
```
> `custom` é o construtor: seus únicos arquivos são `DECISIONS.md` + `IDEAS.md`, sem panorama-âncora. `null` = «sem âncora» explícito (o ritual fica só com `CEREBRO.md`, comportamento idêntico ao atual, agora declarado). Os outros 13 nichos já resolvem certo pela regex — **não** precisam do campo (o G25 confirma).

---

## Tarefa C — `validate.js`: check-guarda **G25**

**Âncora:** `// ============ SUMARIO ============`
**Substituir por** (insira o bloco G25 ANTES da linha-âncora, que permanece logo depois):
```javascript
check("G25 ritual cita o doc-ancora de cada nicho; Instr nao cita .md inexistente (choque CONTEXT)", () => {
  const RE=/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i;
  const semAncora=[], choque=[];
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cf=(n.contextFiles||[]).map(f=>f.name);
    const anchor = ("anchorDoc" in n) ? n.anchorDoc : cf.find(nm=>RE.test(nm));
    // (a) se ha ancora (declarada nao-null ou resolvida), o ritual das Instrucoes E do CEREBRO citam-na
    if(anchor){
      const instr=T.buildInstr(n), cmd=T.buildClaudeMd(n);
      if(!instr.includes(anchor)) semAncora.push(id+" Instr sem "+anchor);
      if(!cmd.includes(anchor)) semAncora.push(id+" CEREBRO sem "+anchor);
    }
    // (b) Instrucoes nunca citam um .md que o nicho nao possui (asu on/off); pega o choque CONTEXT.md
    [{},{asuMode:"yes"}].forEach(wm=>{
      T.STATE.workmode=wm;
      const instr=T.buildInstr(n);
      (instr.match(/\b[A-Z][A-Z-]*\.md\b/g)||[]).forEach(lit=>{
        if(lit==="CONTEXT.md" && !cf.includes("CONTEXT.md")) choque.push(id+" cita "+lit+" (asu:"+(!!wm.asuMode)+")");
      });
    });
    T.STATE.workmode={};
  });
  assert(semAncora.length===0, "ritual sem doc-ancora -> "+semAncora.join(" | "));
  assert(choque.length===0, "Instr cita .md inexistente -> "+choque.join(" | "));
  return "ok";
});

// ============ SUMARIO ============
```
> G25 testa com `asuMode` ligado e desligado — é assim que ele pega o choque `CONTEXT`, que só aparece no modo ASU. Restaura `STATE.workmode={}` ao fim de cada nicho.

---

## Tarefa D — docs (append)

- **`meta/DECISIONS.md` → D-080:** resolvedor do doc-âncora deixa de adivinhar por regex de nome; cada
  nicho declara `anchorDoc` (retaguarda: regex). Corrige a omissão do âncora no ritual de 4 nichos
  (narrative/BIBLIA, marketing/MARCA, pixel/ESTILO, rpg/MUNDO) e o choque `CONTEXT` (ASU + kit-Code) em
  nichos sem `CONTEXT.md`. `custom` declara `anchorDoc:null`. Check-guarda **G25**. Origem: análise
  260716 §A.
- **`meta/IDEAS.md` → i-N53** (doc-âncora por nicho) — **nascida e FECHADA** nesta spec.
- **`meta/STATUS.md`:** v1.70.0 → **v1.70.1** (patch: fix de geração + invariante nova); testes
  **18/18 · 53/53 · 0 erros**; `KIT_VERSION 1.70.1`. Na linha de método, somar o G25.
- **`meta/CHANGELOG.md`:** entrada v1.70.1 no topo (bug do doc-âncora + choque CONTEXT + G25).

---

## Verificação

1. `/check-spec meta/specs/260716-spec0047-doc-ancora-por-nicho.md` → APLICÁVEL.
2. `node build.js` → 18 módulos · `node validate.js index.html` → **18/18 · 53/53 · 0 erros** (o hook roda sozinho).
3. **Prova do âncora:** no navegador, nicho **Narrativa**, aba Instruções → o ritual mostra
   «… leia nesta ordem: `CEREBRO.md` → `BIBLIA.md` → `STATUS.md`» (antes pulava a BIBLIA). Ligue o **modo
   ASU** e confirme que a linha do ASU **não** cita `CONTEXT` («DECISIONS + o doc de contexto estável…»).
4. Repita o olho em **marketing** (MARCA), **pixel** (ESTILO), **rpg** (MUNDO) — âncora presente.
5. **Sem regressão:** dev/business/career ainda citam `CONTEXT.md`; game cita `JOGO.md`.
6. `git diff --stat` — template + 5 nichos + validate.js + index.html + 4 meta-docs.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        src/niches/narrative.js src/niches/marketing.js src/niches/pixel.js src/niches/rpg.js src/niches/custom.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/specs/260716-spec0047-doc-ancora-por-nicho.md
git commit -m "fix(base): doc-ancora por nicho (anchorDoc) + fim do choque CONTEXT + G25 (spec0047, D-080)

- resolvedor prefere niche.anchorDoc (retaguarda: regex); ritual de narrative/marketing/pixel/rpg
  passa a citar o ancora (BIBLIA/MARCA/ESTILO/MUNDO), antes omitido
- linhas do ASU e o CLAUDE.md do kit-Code deixam de cravar CONTEXT literal (generico)
- custom declara anchorDoc:null; KIT_VERSION 1.70.1; novo check-guarda G25 (asu on/off)
- i-N53 fechada; 18/18, 53/53, 0 erros"
git push
```
