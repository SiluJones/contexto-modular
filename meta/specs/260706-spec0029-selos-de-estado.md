# Spec — Selos de estado multicanal e empilháveis perto da saída (i-N36 fase C, parte 2)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS**.
> Aplicar com: **`/apply-spec 260706-spec0029-selos-de-estado.md`**
> Config: **Sonnet + esforco Alto** (componente novo + funcao pura + wiring + G8 novo; adiciona a chave `workBadges` ao SHIM).
> **APLICAR DEPOIS do spec0028.** Depende de `STATE.workmode` e dos helpers `groupModeOn/asuModeOn/codeModeOn` ja lendo `workmode`. Se rodar antes, as guardas de topbar do 0028 nao existem e o G8 testa estado que ninguem alimenta.
> **Diff conferido no chat contra o template vivo v1.53.0.** Build e harness ficam com o Code.
> Base: `meta/ANALISE-REFORMA-MODOS-TOPBAR.md` (secao 3: WCAG 1.4.1/1.4.11, selos empilhaveis, glifos/cores por modo). Contagem de checks: **34 → 35** (novo G8).

## Contexto
Feedback ambiental: quando um modo esta ligado, o usuario precisa **ver** isso perto de onde o efeito importa (a saida/preview), sem depender de memoria. A pesquisa fixou tres travas duras:
- **Nunca cor sozinha** (WCAG 1.4.1): cada selo usa **≥2 canais** — cor + **glifo** + **rotulo em texto**.
- **Contraste de estado ≥3:1** (WCAG 1.4.11), com o alerta de que laranja/amarelo sao traicoeiros: **o contraste vive no contorno + texto, nao no preenchimento** (selo de fundo transparente, borda e texto coloridos). Passa em **escala de cinza** porque glifo + rotulo distinguem cada modo mesmo sem cor.
- **Varios modos ligados → selos discretos empilhaveis**, nunca faixas sobrepostas (faixas brigam por area e destroem contraste).

**Ordem estavel** dos selos: **grupo → Code → ASU** (mesma ordem do painel do 0028). Glifos/cores fixados: **grupo** = glifo de grupo + verde; **Code** = simbolo + laranja (amber); **ASU** = **chevron duplo `»` + teal**. O sistema e dimensionado para **3 modos**; o **atualizador (i-N40) NAO ganha selo** — entra depois como **acao** perto da saida (a area comporta os dois sem aperto). Bom acoplamento: os selos sao a **mesma fonte de verdade** que o futuro manifesto de update vai ler.

**NAO fazer:** nao usar cor como unico sinal; nao pintar o preenchimento do selo (fundo transparente); nao adicionar 4o selo; nao mudar `buildInstr`/`buildClaudeMd`.

---

## Tarefa A — CSS: variavel `--teal` + componente `.selo`

### A.1 — variavel de cor
**Ancora** (a ultima cor do `:root`):
```
    --red:#d98a6a;
```
**inserir-DEPOIS** dela:
```
    --teal:#5cc2c9;
```
> Nota: a analise cita `#0E7C86` como base **para fundo claro**. Nosso tema e escuro (`--panel` ~`#201c14`); um teal claro (`#5cc2c9`) e o equivalente que passa ≥3:1 como **borda/texto sobre o painel escuro**. O preenchimento continua transparente.

### A.2 — componente
**Ancora** (a linha do `.dot` no bloco do topbar CSS — estavel, unica):
```
  .dot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green);transition:background .4s}
```
**inserir-DEPOIS** dela:
```
  /* Selos de estado do Modo de trabalho — multicanal (cor+glifo+rótulo), empilháveis (spec0029) */
  .selos{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
  .selo{
    display:inline-flex;align-items:center;gap:5px;
    font-family:var(--mono);font-size:10.5px;letter-spacing:.4px;line-height:1;
    padding:4px 8px;border-radius:6px;border:1px solid var(--sc);background:transparent;color:var(--sc);
  }
  .selo .g{font-weight:700;font-size:12px}
  .selo.group{--sc:var(--green)}
  .selo.code{--sc:var(--amber)}
  .selo.asu{--sc:var(--teal)}
```
Cada `.selo` define `--sc` (cor do selo) e **borda + texto + glifo** herdam dela — contraste no contorno/texto, fundo transparente, exatamente a regra da analise. Tres canais: cor (`--sc`) + glifo (`.g`) + rotulo (texto).

---

## Tarefa B — HTML: ponto de montagem, logo acima do preview da saida

**Ancora** (o `<pre>` da saida, dentro de `.out`):
```
          <pre id="preview-instr"></pre>
```
**inserir-ANTES** dela:
```
          <div class="selos" id="work-selos" style="margin:2px 0 10px"></div>
```
Fica **perto da saida** (imediatamente acima do preview das Instrucoes/CEREBRO), na aba de saida. `display` alterna via JS: `flex` quando ha selo, `none` quando nenhum.

---

## Tarefa C — JS: `workBadges()` (pura) + `renderWorkBadges()` + wiring

### C.1 — funcoes novas
**Ancora** (os helpers de modo, ja migrados para `workmode` pelo spec0028):
```
function codeModeOn(){ return !!(STATE.workmode && STATE.workmode.codeMode === "yes"); }
```
**inserir-DEPOIS** dela:
```
/* Selos de estado — fonte unica (pura, testavel no harness) + render (spec0029).
   Ordem estavel: grupo, Code, ASU. ASU = chevron duplo » + teal. */
const WORK_SELOS = [
  { id:"group", on:()=>groupModeOn(), label:"Grupo", glyph:"◉" },
  { id:"code",  on:()=>codeModeOn(),  label:"Code",  glyph:"⌘" },
  { id:"asu",   on:()=>asuModeOn(),   label:"ASU",   glyph:"»" },
];
function workBadges(){
  return WORK_SELOS.filter(s => s.on()).map(s => ({ id:s.id, label:s.label, glyph:s.glyph }));
}
function renderWorkBadges(){
  const host = $("#work-selos"); if(!host) return;
  const b = workBadges();
  host.innerHTML = b.map(s =>
    '<span class="selo ' + s.id + '"><span class="g" aria-hidden="true">' + s.glyph + '</span>' + escapeHTML(s.label) + '</span>'
  ).join("");
  host.style.display = b.length ? "flex" : "none";
}
```
> Glifos sao placeholders mono-renderaveis e trocaveis: `◉` (grupo), `⌘` (Code — pode virar a marca do Claude Code depois), `»` (ASU, chevron duplo — **fixado**). O que o harness trava e a **presenca/ordem/rotulo** e o chevron do ASU, nao o desenho exato dos outros.

### C.2 — wiring: atualizar os selos quando a saida re-renderiza
**Ancora** (o fim de `updatePreview`, a linha do reminder do ASU):
```
  if(_asuRem) _asuRem.style.display = asuModeOn() ? "block" : "none";
```
**inserir-DEPOIS** dela:
```
  renderWorkBadges();
```
O handler de toggle do painel «Modo de trabalho» (spec0028) ja chama `updatePreview()` a cada mudanca, entao os selos se atualizam sozinhos ao ligar/desligar um modo — sem wiring extra.

---

## Tarefa D — harness: expor `workBadges` no SHIM + check G8

### D.1 — SHIM
**Ancora** (a constante `SHIM` no `validate.js`):
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles};';
```
**substituir-BLOCO por** (acrescenta `workBadges` no fim do objeto):
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges};';
```

### D.2 — check G8
**Ancora** (o fim do check G7 — a linha de fecho `});` do G7, logo antes do proximo `check(`; identifique pelo bloco):
```
  assert(!/Kit de arranque do Claude Code/i.test(noC), "codeMode=no nao deveria ter a secao do kit");
  assert(/Kit de arranque do Claude Code/i.test(yesC), "codeMode=yes deveria ter a secao (ponteiro) do kit");
```
> (Essas duas linhas sao o miolo final do G7. **Nao as altere** — servem so para localizar o fim do G7. O `});` que fecha o G7 vem logo depois.)

**inserir-DEPOIS** do `});` que fecha o G7:
```

check("G8 selos de estado: presente quando liga / ausente quando desliga / ordem estavel (grupo, Code, ASU)", () => {
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.groupMode = "no"; T.STATE.workmode.codeMode = "no"; T.STATE.workmode.asuMode = "no";
  assert(T.workBadges().length === 0, "nenhum modo ligado deveria dar 0 selos");
  T.STATE.workmode.groupMode = "yes"; T.STATE.workmode.codeMode = "yes"; T.STATE.workmode.asuMode = "yes";
  const all = T.workBadges().map(s=>s.id);
  assert(all.length === 3, "3 modos ligados deveriam dar 3 selos, deu " + all.length);
  assert(all.join(",") === "group,code,asu", "ordem instavel: " + all.join(","));
  T.STATE.workmode.groupMode = "no"; T.STATE.workmode.codeMode = "no";
  const one = T.workBadges();
  assert(one.length === 1 && one[0].id === "asu", "so ASU ligado deveria dar so o selo ASU");
  assert(/»/.test(one[0].glyph), "selo ASU deveria usar o chevron duplo »");
  T.STATE.workmode.asuMode = "no";
  return "ok";
});
```

---

## Verificacao visual (o Code confere no navegador, alem do harness)
1. Nenhum modo ligado: **nenhum selo** acima do preview.
2. Ligar «Projeto em grupo» no painel Modo de trabalho: aparece o selo **◉ Grupo** (verde, contorno) acima da saida.
3. Ligar os tres: **◉ Grupo · ⌘ Code · » ASU**, nesta ordem, empilhados sem sobrepor; cada um contorno colorido, fundo transparente.
4. **Teste em escala de cinza** (devtools → emular): os tres continuam distinguiveis por glifo + rotulo (nao dependem de cor).
5. Desligar um: o selo correspondente some; a ordem dos que restam nao muda.

## Ao terminar (append-only; NAO reescrever nenhum doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: selos de estado multicanal (cor+glifo+rotulo), empilhaveis, contorno/texto carregam o contraste (fundo transparente), ordem estavel grupo→Code→ASU, ASU = chevron duplo `»` + teal (`--teal:#5cc2c9`, on-dark do `#0E7C86` da analise). `workBadges()` e a fonte pura (harness G8); o atualizador i-N40 entra como acao futura, sem selo. Fecha a parte 2 da fase C da i-N36.
- **`meta/STATUS.md`** — linha na «Ultima sessao»: spec0029 aplicada (selos de estado, G8, 35/35); versao bump (minor). Se o 0028 ja bumpou nesta sessao, este e o proximo minor.
- **i-N36** em `meta/IDEAS.md`: com 0028+0029 aplicadas, a **fase C (reforma dos 3 modos + feedback ambiental) esta feita**; o que resta da i-N36 e so a fase "topbar inteiro" (adiada) + o encaixe do atualizador i-N40. Marcar o progresso (append/edicao de status da ideia — se preferir edicao no lugar, vai por doc-spec proprio; append e suficiente).

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: selos de estado multicanal empilhaveis perto da saida (spec0029, i-N36 fase C)" -m "cor+glifo+rotulo por modo, contraste no contorno/texto (fundo transparente), grayscale-safe; ordem estavel grupo>Code>ASU; ASU = chevron duplo + teal; workBadges() puro no SHIM + G8 (35/35); atualizador i-N40 fica como acao futura sem selo"
git push
```
