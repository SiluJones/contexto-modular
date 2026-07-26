# Spec — Painel «Modo de trabalho» global e recolhível: os 3 modos saem do topbar (i-N36 fase C, parte 1)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS** (17/17, 0 erros).
> Aplicar com: **`/apply-spec 260706-spec0028-painel-modo-de-trabalho.md`**
> Config: **Sonnet + esforco Alto** (mexe em UI + estado + persistencia + CSS + 3 checks de harness reescritos; ancoras robustas).
> **Diff conferido no chat contra o template vivo v1.53.0** (linhas citadas batem no `index.template.html`, 3578 linhas). **Build e harness ficam com o Code** — o chat nao roda node; a rede final e o `git diff` + o verde do harness.
> Base: `meta/ANALISE-REFORMA-MODOS-TOPBAR.md` (secoes 1-2) + i-N36. **Aplicar ANTES do spec0029** (os selos dependem de `STATE.workmode` e dos helpers deste spec).

## Contexto
Os 3 modos universais (`groupMode`, `asuMode`, `codeMode`) sao hoje **injetados no `topbar` de todo nicho** (toggles soltos entre os campos do nicho). A analise confirmou, com pesquisa e com a D-053 interna, que **toggles soltos sao erro** e que **segmented control esta refutado** (os 3 modos coexistem — selecao multipla independente). A solucao fixada: **checkbox agrupado** sob um heading **«Modo de trabalho»**, num **painel recolhivel** (progressive disclosure) que segue **global / sempre-acessivel** (correcao do usuario: hoje os modos aparecem de qualquer aba porque o topbar e sticky; prende-los a uma view seria regressao). Por isso o painel vive no `.main`, **logo abaixo do topbar sticky, fora de qualquer `.view`** — visivel de qualquer aba.

**Decisao de escopo (registrar como DEC):** o estado dos modos continua **por-nicho** (mesma vida do `STATE.topbar` de hoje), apenas migra de `STATE.topbar.*` para **`STATE.workmode.*`**. "Global" aqui = **alcance de UI** (o painel aparece em toda aba), **nao** estado compartilhado entre nichos — manter por-nicho preserva a promessa "a **saida gerada NAO muda**, so a UI e o caminho do estado". Se fosse global-entre-nichos, trocar de nicho mudaria quais nichos emitem HUB/ASU/Code — mudanca de comportamento indesejada.

**NAO fazer:** nao mudar nenhum `buildInstr`/`buildClaudeMd`/`buildHub` (a saida e identica); nao tocar nichos; nao mexer no `skillsMode` (ja saiu pro builder na spec0024); nao renomear `LS_STATE` (o snapshot antigo so ignora a chave nova — degrada limpo).

---

## Tarefa A — `src/index.template.html`: tirar os 3 modos da injecao do topbar

**Ancora** (dentro de `normNiche`, a linha que injeta os toggles universais):
```
    topbar:         [...normTopbar(n.topbar), { id:"groupMode", label:"Projeto em grupo? (gera HUB.md)", type:"toggle", default:"no" }, { id:"asuMode", label:"Saída via ASU (patch)?", type:"toggle", default:"no" }, { id:"codeMode", label:"Desenvolver no Claude Code?", type:"toggle", default:"no" }],
```
**substituir-BLOCO por:**
```
    topbar:         normTopbar(n.topbar),
```
Os 3 modos deixam de ser campos de topbar; passam a viver no painel «Modo de trabalho» (Tarefa E/G). Um nicho que nao declara `topbar` fica com `[]` e o topbar renderiza so o rodapinho de sync — comportamento ja existente.

**Diff esperado:** 1 linha substituida por 1 linha (−3 objetos de toggle).

---

## Tarefa B — `STATE`: adicionar `workmode`

**Ancora** (o objeto `STATE`, comeco):
```
const STATE = {
  niche: null,
  topbar: {},
```
**inserir-DEPOIS** a linha `  topbar: {},`:
```
  workmode: {},
```
**Diff esperado:** +1 linha.

---

## Tarefa C — persistencia: gravar, restaurar e resetar `workmode` (por-nicho, junto do topbar)

### C.1 — `persistState`
**Ancora** (o `JSON.stringify` do snapshot por-nicho):
```
      localStorage.setItem(LS_STATE + STATE.niche, JSON.stringify({
        topbar: STATE.topbar, behaviors: STATE.behaviors,
        builder: STATE.builder, outputs: STATE.outputs, extra: STATE.extra, os: STATE.os
      }));
```
**substituir-BLOCO por** (acrescenta `workmode`):
```
      localStorage.setItem(LS_STATE + STATE.niche, JSON.stringify({
        topbar: STATE.topbar, workmode: STATE.workmode, behaviors: STATE.behaviors,
        builder: STATE.builder, outputs: STATE.outputs, extra: STATE.extra, os: STATE.os
      }));
```

### C.2 — `restoreStateFor`: reset
**Ancora** (a linha de reset no topo de `restoreStateFor`):
```
  STATE.topbar = {}; STATE.behaviors = {}; STATE.builder = {};
```
**substituir-BLOCO por:**
```
  STATE.topbar = {}; STATE.workmode = {}; STATE.behaviors = {}; STATE.builder = {};
```

### C.3 — `restoreStateFor`: leitura do snapshot
**Ancora:**
```
      STATE.topbar    = snap.topbar    || {};
```
**inserir-DEPOIS** dela:
```
      STATE.workmode  = snap.workmode  || {};
```
**Diff esperado (Tarefa C):** 2 blocos substituidos (+1 token cada) + 1 linha inserida.

---

## Tarefa D — helpers de modo leem `STATE.workmode`

**Ancora** (as tres funcoes, em sequencia):
```
function groupModeOn(){ return !!(STATE.topbar && STATE.topbar.groupMode === "yes"); }
function asuModeOn(){ return !!(STATE.topbar && STATE.topbar.asuMode === "yes"); }
function codeModeOn(){ return !!(STATE.topbar && STATE.topbar.codeMode === "yes"); }
```
**substituir-BLOCO por:**
```
function groupModeOn(){ return !!(STATE.workmode && STATE.workmode.groupMode === "yes"); }
function asuModeOn(){ return !!(STATE.workmode && STATE.workmode.asuMode === "yes"); }
function codeModeOn(){ return !!(STATE.workmode && STATE.workmode.codeMode === "yes"); }
```
Como `buildInstr`/`buildClaudeMd`/`buildHub` so chamam esses helpers, a **saida gerada nao muda** — so a fonte do booleano.

---

## Tarefa E — HTML: container do painel, logo abaixo do topbar (sempre visivel)

**Ancora** (a div do topbar dentro do `.main`):
```
    <!-- TOPBAR — campos dinâmicos por nicho -->
    <div class="topbar" id="topbar"></div>
```
**inserir-DEPOIS** dela:
```
    <!-- MODO DE TRABALHO — painel global recolhível (modos que valem para a sessão) -->
    <details class="workmode" id="workmode" open>
      <summary>Modo de trabalho <span class="wm-count" id="wm-count"></span></summary>
      <div class="wm-body" id="wm-body"></div>
    </details>
```
`<details>`/`<summary>` da progressive disclosure **nativa e acessivel** (teclado + leitor de tela de graca). Fica `open` por padrao — recolhivel, mas nao escondido (respeita "sempre-acessivel"). Vive fora de qualquer `<section class="view">`, entao aparece em toda aba.

---

## Tarefa F — CSS do painel

**Ancora** (o fim do bloco do switch `.tsw`, ultima linha antes do comentario do HUB):
```
  .tsw input:focus-visible + .track{outline:2px solid var(--amber-soft);outline-offset:2px}
```
**inserir-DEPOIS** dela:
```
  /* Modo de trabalho — painel global recolhível (spec0028) */
  .workmode{margin:0 30px;border-bottom:1px solid var(--line-soft);background:rgba(22,19,13,.55)}
  .workmode>summary{list-style:none;cursor:pointer;padding:11px 0;font-family:var(--mono);font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--ink-faint);display:flex;align-items:center;gap:10px}
  .workmode>summary::-webkit-details-marker{display:none}
  .workmode>summary::before{content:"▸";color:var(--amber);display:inline-block;transition:transform .15s}
  .workmode[open]>summary::before{transform:rotate(90deg)}
  .workmode .wm-count{font-size:10px;color:var(--ink-faint);letter-spacing:.2px;text-transform:none}
  .wm-body{display:flex;flex-wrap:wrap;gap:8px 34px;padding:2px 0 15px}
  .wm-body .check{padding:6px 0;max-width:340px}
```
O `gap:8px 34px` + `max-width:340px` dao a **folga anti-clique-errado** que o usuario pediu. Reusa `.check` (ja estilizado: caixa 14px `accent-color` amber, `<span>` rotulo + `<small>` descricao).

---

## Tarefa G — JS: `WORKMODE_FIELDS` + `renderWorkmode()` + contagem + wiring

### G.1 — funcoes novas
**Ancora** (a assinatura de `renderTopbar`):
```
function renderTopbar(niche){
```
**inserir-ANTES** dela:
```
const WORKMODE_FIELDS = [
  { id:"groupMode", label:"Projeto em grupo",              desc:"Gera um HUB.md compartilhado; o CEREBRO passa a ler a caixa de entrada do grupo." },
  { id:"codeMode",  label:"Desenvolver no Claude Code",    desc:"Emite o kit de arranque (CLAUDE.md, settings, skills) como download à parte." },
  { id:"asuMode",   label:"Saída via ASU (patch)",         desc:"Edições viram instrução .yaml para baixar e aplicar; escrita nova/rolante sai inteira." },
];
function updateWorkCount(){
  const c = $("#wm-count"); if(!c) return;
  const n = WORKMODE_FIELDS.filter(f => STATE.workmode[f.id] === "yes").length;
  c.textContent = n ? "· " + n + " ativo" + (n>1?"s":"") : "· nenhum ativo";
}
function renderWorkmode(){
  const body = $("#wm-body"); if(!body) return;
  body.innerHTML = WORKMODE_FIELDS.map(f => {
    const on = STATE.workmode[f.id] === "yes";
    return '<label class="check"><input type="checkbox" data-wm="' + f.id + '"' + (on?" checked":"") + '/>'
         + '<span>' + escapeHTML(f.label) + '<small>' + escapeHTML(f.desc) + '</small></span></label>';
  }).join("");
  body.querySelectorAll("[data-wm]").forEach(el => {
    el.addEventListener("change", () => {
      STATE.workmode[el.dataset.wm] = el.checked ? "yes" : "no";
      persistState(); updatePreview(); renderPrompts(getCurrentNiche()); renderTemplates(getCurrentNiche());
      updateWorkCount();
    });
  });
  updateWorkCount();
}
```
As reacoes ao toggle (`persistState` → `updatePreview` → `renderPrompts` → `renderTemplates`) sao **exatamente** as do antigo handler do topbar (linha do `[data-tb]`) — por isso a saida e o comportamento nao mudam.

### G.2 — chamar no fluxo de troca de nicho
**Ancora** (a chamada existente, dentro de `setNiche`):
```
  renderTopbar(niche);
```
**inserir-DEPOIS** dela:
```
  renderWorkmode();
```
(`restoreStateFor` roda antes deste ponto no `setNiche`, entao `STATE.workmode` ja esta populado.)

---

## Tarefa H — harness: G4/G5/G7 passam a usar `STATE.workmode` + guardas "fora do topbar"

Os checks hoje setam `T.STATE.topbar.<modo>`; como os helpers agora leem `workmode`, os checks devem setar `workmode`. Cada um ganha tambem uma assercao (espelho da G6) de que o modo **nao esta mais no topbar** — trava de regressao. **Nenhum check novo** (G8 e do spec0029): segue **34/34**.

### H.1 — G4
**Ancora** (o check G4 inteiro):
```
check("G4 switch HUB round-trip (dev: no->sem / yes->com)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.groupMode = "no";
  const noHub = T.buildClaudeMd(dev);
  T.STATE.topbar.groupMode = "yes";
  const yesHub = T.buildClaudeMd(dev);
  T.STATE.topbar.groupMode = "no";
  assert(!/HUB/.test(noHub), "groupMode=no nao deveria ter HUB");
  assert(/HUB/.test(yesHub), "groupMode=yes deveria ter HUB");
  assert(noHub !== yesHub, "round-trip nao alterou o CEREBRO.md");
  return "ok";
});
```
**substituir-BLOCO por:**
```
check("G4 switch HUB round-trip (dev: no->sem / yes->com; grupo fora do topbar)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="groupMode"), "groupMode NAO deveria mais estar no topbar (moveu pro painel Modo de trabalho)");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.groupMode = "no";
  const noHub = T.buildClaudeMd(dev);
  T.STATE.workmode.groupMode = "yes";
  const yesHub = T.buildClaudeMd(dev);
  T.STATE.workmode.groupMode = "no";
  assert(!/HUB/.test(noHub), "groupMode=no nao deveria ter HUB");
  assert(/HUB/.test(yesHub), "groupMode=yes deveria ter HUB");
  assert(noHub !== yesHub, "round-trip nao alterou o CEREBRO.md");
  return "ok";
});
```

### H.2 — G5
**Ancora** (as linhas de estado do G5):
```
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.asuMode = "no";
  const noAsu = T.buildClaudeMd(dev);
  T.STATE.topbar.asuMode = "yes";
  const yesAsu = T.buildClaudeMd(dev);
  T.STATE.topbar.asuMode = "no";
```
**substituir-BLOCO por:**
```
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="asuMode"), "asuMode NAO deveria mais estar no topbar (moveu pro painel Modo de trabalho)");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.asuMode = "no";
  const noAsu = T.buildClaudeMd(dev);
  T.STATE.workmode.asuMode = "yes";
  const yesAsu = T.buildClaudeMd(dev);
  T.STATE.workmode.asuMode = "no";
```
(As assercoes seguintes do G5 — diretriz ASU, `python -m src apply`, `INSTRUCTION_GUIDE.md`, `noAsu !== yesAsu` — **nao mudam**.)

### H.3 — G7
**Ancora** (as linhas de estado do G7):
```
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.codeMode = "no";
  const noC = T.buildClaudeMd(dev);
  T.STATE.topbar.codeMode = "yes";
  const yesC = T.buildClaudeMd(dev);
  T.STATE.topbar.codeMode = "no";
```
**substituir-BLOCO por:**
```
  assert(!(dev.topbar||[]).some(t=>t.id==="codeMode"), "codeMode NAO deveria mais estar no topbar (moveu pro painel Modo de trabalho)");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.codeMode = "no";
  const noC = T.buildClaudeMd(dev);
  T.STATE.workmode.codeMode = "yes";
  const yesC = T.buildClaudeMd(dev);
  T.STATE.workmode.codeMode = "no";
```
(A linha `const dev = T.normNiche(T.NICHES.dev);` do G7 fica logo acima desta ancora e **nao muda** — a guarda usa esse `dev`.)

---

## Verificacao visual (o Code confere no navegador, alem do harness)
1. Abrir `index.html`: abaixo do topbar aparece **«Modo de trabalho»** recolhivel, aberto, com 3 checkboxes (Projeto em grupo / Desenvolver no Claude Code / Saida via ASU), cada um com descricao curta.
2. Os 3 toggles **sumiram do topbar** (so restam os campos do nicho + o rodapinho de sync).
3. Ligar cada modo muda a saida como antes (HUB / diretriz ASU / ponteiro do kit Code no CEREBRO) e o contador do summary reflete "N ativos".
4. Recarregar a pagina: o estado dos modos volta (persistencia por-nicho). Trocar de nicho e voltar: idem.
5. Recolher/expandir o painel de qualquer aba (Inicio, Prompts, Templates...): ele esta sempre la.

## Ao terminar (append-only; NAO reescrever nenhum doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: os 3 modos universais migram do topbar para o painel global «Modo de trabalho» (`<details>`); estado `STATE.topbar.*` → `STATE.workmode.*`, **por-nicho** (saida gerada inalterada; "global" = alcance de UI, nao estado entre nichos). Fecha a parte 1 da fase C da i-N36. Harness G4/G5/G7 migrados para `workmode` + guardas "fora do topbar".
- **`meta/IDEAS.md`** — **registrar a i-N40** (nova; o handoff a chamou "i-N27", mas i-N27 ja existe — HUB enxuto). Append no fim da secao de ideias:
```
## i-N40 — Modo Atualização: empacotar o nicho ativo (achatado + afixado + prompt) para subir num gesto a um projeto KCM existente — 💡 ANALISADA, A ESCOPAR (2026-07-06)
Refino/descendente da **i-N3** (backdoor de atualização + afixo, já implementada). Base: `meta/ANALISE-MODO-ATUALIZACAO.md` + nota `260704-1959.txt`. Um gesto que empacota, **achatado e desambiguado**, tudo do nicho ativo (meta + CEREBRO + instrução + skills se ligado + kit-Code se ligado) num **zip achatado** + `_UPDATE-MANIFEST.md` + **prompt de atualização gerado por nicho**, para o usuário subir de uma vez ao mount de um projeto que já usa o KCM. **Decisões fixadas:** afixo `__template-update`; CEREBRO+instrução entram como build ativa do momento, classificados `fusao` (merge proposto, nunca substituição cega); **zip apenas**; a **UI do atualizador fica ADIADA** até a reforma dos 3 modos (i-N36) — entra como **ação** perto da saída, não como 4º modo/selo. Dor real: assimetria — `downloadZIP` já achata+afixa os meta, mas `downloadSkillsZIP`/`downloadCodeKitZIP` saem em subpasta sem `applyAffix`. Acopla com os selos (spec0029): mesma fonte de verdade que o manifesto do update lê.
```
- **`meta/STATUS.md`** — linha na «Ultima sessao» registrando spec0028 aplicada (painel «Modo de trabalho», `STATE.workmode`, harness migrado), + versao bump conforme convencao (minor).

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: painel Modo de trabalho global recolhivel; 3 modos saem do topbar (spec0028, i-N36 fase C)" -m "groupMode/asuMode/codeMode migram de STATE.topbar para STATE.workmode (por-nicho); painel <details> sempre-acessivel abaixo do topbar; saida gerada inalterada; harness G4/G5/G7 migrados + guardas fora-do-topbar; registra i-N40 (Modo Atualizacao)"
git push
```
