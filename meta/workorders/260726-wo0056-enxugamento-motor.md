# wo0056 — Enxugamento **WO-A**: o motor (campo `short` curado), sem reescrever texto

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.78.0` (pós-wo0055, commit `8b06474`, pushado), harness **18/18 · 61/61 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 62/62 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado em sandbox pós-wo0055 → verde **18/18 · 62/62**, **com prova de que a saída
> dos 18 nichos fica idêntica** (única diferença: o carimbo de versão no rodapé).
> **Rode `/check-wo` antes de aplicar.**
>
> **Origem:** `meta/analises/260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md`, etapa **A** do plano A→B→C aprovado.
> **Esta WO não muda uma palavra de conteúdo.** Instala a mecânica; a curadoria é a WO-B.

## O que descobri antes de projetar (muda o enunciado da análise)

A análise supunha que as Instruções carregavam a **definição integral** dos comportamentos. **Não é bem
assim:** já existe uma função `shortDef()` que corta na **primeira frase, com teto de 180 chars**. Ou seja,
metade do mecanismo já existia — o que falta não é *cortar*, é **curar**: a frase que sobra hoje é a primeira
do texto, escolhida por acaso, não a melhor síntese da regra.

Isso muda o desenho da WO-A para melhor: em vez de criar um sistema de compressão, **adicionamos um campo
curado opcional** que tem precedência sobre o corte automático.

| | hoje | depois da WO-A | depois da WO-B |
|---|---|---|---|
| Instruções | 1ª frase automática (≤180) | idem (**nada muda**) | frase **curada** |
| CEREBRO | definição integral | idem | idem |

**A regra de exceção que você aprovou fica embutida na mecânica:** comportamento **sem** `short` continua
usando o corte automático — ou seja, *não preencher* é a forma de dizer «este fica como está». Nada a
configurar.

---

## Tarefa A — `src/index.template.html`

### A1 — `normBehaviors` aceita o 4º elemento
**Âncora:**
```javascript
    if(Array.isArray(b)) return { id:b[0], label:b[1], def:b[2] };
```
**Substituir por:**
```javascript
    if(Array.isArray(b)) return { id:b[0], label:b[1], def:b[2], short:b[3] };
```
> Comportamento em forma de objeto já passa direto (`return b`), então o campo `short` também funciona lá sem
> mudança. Nichos que não informam o 4º elemento recebem `short: undefined` — inofensivo.

### A2 — `buildInstr` prefere a frase curada
**Âncora:**
```javascript
    own.forEach(b => lines.push(`- **${b.label}.** ${shortDef(b.def)}`));
```
**Substituir por:**
```javascript
    own.forEach(b => lines.push(`- **${b.label}.** ${b.short || shortDef(b.def)}`));
```
> `buildClaudeMd` **não muda**: o CEREBRO segue emitindo `b.def` integral. É isso que garante que a curadoria
> nunca perde informação — ela só decide o que fica *sempre à vista*.

### A3 — bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.78.0";` → `const KIT_VERSION = "1.79.0";`

---

## Tarefa B — `validate.js`: check-guarda **C18**

**Âncora:** `check("C17 auto-refino`
**Substituir por** (insira C18 ANTES do C17, que permanece logo depois):
```javascript
check("C18 motor do enxugamento (wo0056-A): campo 'short' curado nas Instr, definicao completa no CEREBRO", () => {
  const raw=fs.readFileSync(path,"utf8");
  // (1) motor instalado
  assert(/short:b\[3\]/.test(raw),"normBehaviors nao aceita o 4o elemento (short)");
  assert(/b\.short \|\| shortDef\(b\.def\)/.test(raw),"buildInstr nao prefere o short curado");
  // (2) contrato, para todo nicho que ja tenha short curado
  let curados=0, perdidos=[];
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const instr=T.buildInstr(n), cer=T.buildClaudeMd(n);
    (n.behaviors||[]).filter(b=>b.def).forEach(b => {
      // nenhum comportamento pode sumir das Instrucoes
      if(!instr.includes(b.label)) perdidos.push(id+"/"+b.id);
      if(b.short){
        curados++;
        // a definicao completa PRECISA continuar no CEREBRO
        if(!cer.includes(b.def)) perdidos.push(id+"/"+b.id+" def completa fora do CEREBRO");
        // o short precisa realmente comprimir
        if(b.short.length >= b.def.length) perdidos.push(id+"/"+b.id+" short nao comprime");
      }
    });
  });
  assert(perdidos.length===0,"contrato violado -> "+perdidos.slice(0,4).join(" | "));
  return "ok ("+curados+" curados)";
});

check("C17 auto-refino
```
> Hoje ele reporta **`ok (0 curados)`** — correto, ninguém foi curado ainda. A partir da WO-B o número sobe,
> e o contrato passa a valer para cada um: **definição completa no CEREBRO** e **compressão real**.

---

## Tarefa C — docs (append)

- **`meta/DECISIONS.md` → D-090:** enxugamento etapa A. Comportamento de nicho ganha campo opcional
  **`short`** (4º elemento) com precedência nas Instruções; o CEREBRO continua com a definição integral.
  **Achado que corrigiu a análise:** as Instruções já cortavam pela `shortDef()` (1ª frase, teto 180) — o
  ganho da WO-B não vem de *cortar*, vem de **curar** a frase. A **regra de exceção fica embutida**:
  comportamento sem `short` mantém o corte automático. Check C18 (motor instalado + contrato: nada some das
  Instruções, definição completa no CEREBRO, `short` comprime de fato). **Saída dos 18 nichos idêntica** —
  só o carimbo de versão muda.
- **`meta/IDEAS.md`:** enxugamento **A concluída**; **B (curadoria por levas: game, narrative, career, rpg →
  demais)** e **C (papéis de arquivo + migração p/ `meta/` + poda de markdown)** seguem parqueadas. Anotar
  também: **padronizar a pasta de análises no kit** (nome e template — hoje cada projeto inventa: `analises/`,
  `design/`…), a decidir junto com o handoff.
- **`meta/STATUS.md`:** v1.78.0 → **v1.79.0**; **18/18 · 62/62 · 0 erros**; `KIT_VERSION 1.79.0`; somar C18;
  manter a nota do `game` (6879/6900) — **ela só cai na WO-B**.
- **`meta/CHANGELOG.md`:** entrada v1.79.0 no topo, deixando claro que é **mecânica, sem mudança de conteúdo**.

---

## Verificação

1. `/check-wo` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 62/62 · 0 erros**; C18 verde reportando **0 curados**.
3. **Prova de neutralidade (a mais importante):** compare a saída antes/depois. `buildInstr` de **todos** os 18
   nichos deve ser **byte-idêntica**; `buildClaudeMd` deve diferir **apenas** na linha do rodapé
   (`v1.78.0` → `v1.79.0`). Qualquer outra diferença é regressão — pare e reporte.
4. **Teto:** nenhum nicho muda de tamanho (`game` segue 6879).
5. `git diff --stat` — template + validate.js + index.html + 4 meta-docs + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260726-wo0056-enxugamento-motor.md
git commit -m "feat(instrucoes): motor do enxugamento - campo short curado nas Instrucoes, definicao integral no CEREBRO (wo0056, D-090)

- normBehaviors aceita 4o elemento (short); buildInstr prefere o short curado, senao mantem shortDef
- buildClaudeMd inalterado: CEREBRO segue com a definicao completa (curadoria nao perde informacao)
- regra de excecao embutida: comportamento sem short mantem o corte automatico
- achado: as Instrucoes ja cortavam na 1a frase (teto 180); o ganho da etapa B e curar, nao cortar
- check C18 (motor + contrato); saida dos 18 nichos identica, so o carimbo de versao muda
- KIT_VERSION 1.79.0; 18/18, 62/62, 0 erros"
git push
```
