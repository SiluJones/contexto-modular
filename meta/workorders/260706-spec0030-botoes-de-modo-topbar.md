# Spec — Modos de trabalho viram botões no topbar sticky (i-N36 fase "topbar inteiro", parte 1)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html`** → **`node build.js` + `node validate.js` OBRIGATORIOS** (17/17, 0 erros).
> **Harness: sem check novo nem alterado** — segue **35/35**. G4/G5/G7 continuam valendo (a guarda "fora do niche.topbar" segue verdadeira: os modos vêm de `WORK_MODES`, não de `niche.topbar`); G8 segue verde (`workBadges()` continua a fonte pura dos modos ativos, agora lendo `WORK_MODES`). O Code confirma 35/35 pós-build.
> Aplicar com: **`/apply-spec 260706-spec0030-botoes-de-modo-topbar.md`**
> Config: **Sonnet + esforco Alto** (remove o painel + os selos, unifica listas, reescreve 2 ramos do renderTopbar, CSS novo de botão + tooltip; âncoras exatas abaixo).
> **Diff conferido no chat contra o template vivo v1.55.0.** Build/harness ficam com o Code.
> Base: `meta/ANALISE-REFORMA-MODOS-TOPBAR.md` + decisões do usuário (260706-1026.txt) + pesquisa WCAG 1.4.13 (tooltip). **Aplicar antes de spec0031 (cluster de ação + modal) e spec0032 (atualizar).**

## Contexto
Feedback do usuário sobre o painel «Modo de trabalho» (spec0028) + selos (spec0029):
1. Os selos ficaram pouco visíveis (perto da saída) — o lugar certo é a **barra superior**, sempre presente.
2. O Code não leu como "laranja" (estava em `--amber`, que puxa dourado).
3. O painel `<details>` **não é sticky** — some ao rolar e só ocupa altura.

Correção fixada: **voltar os 3 modos ao topbar**, mas como **botões-toggle agrupados** (não switches soltos, não segmented control). O topbar já é `position:sticky; top:0; flex-wrap` → os botões ficam **fixos ao rolar de graça** (resolve 1 e 3). Ativo, o botão **enche com a cor do modo** (Grupo verde, Code **laranja de verdade**, ASU teal) + rótulo curto → multicanal (cor + rótulo + `aria-pressed`), passa WCAG 1.4.1 e lê em escala de cinza (cheio vs contorno). As descrições viram **tooltip** no hover/foco.

**Tooltip — decisão com lastro (WCAG 1.4.13, pesquisado):** conteúdo em hover/foco deve ser dismissível, hoverável e persistente; `title` é isento mas feio/inacessível; e tooltip preso a **botão** é inacessível a toque (não há hover; focar um botão o ativa) — por isso a regra: **só conteúdo não-essencial**, escrito assumindo que pode nunca ser lido. Aqui rótulo+cor já bastam; a frase é enriquecimento. Implementação: tooltip CSS próprio (não `title`) que aparece em `:hover` **e** `:focus-visible` (teclado), **`pointer-events:none`** (nunca bloqueia o clique — pedido explícito do usuário), posicionado **abaixo** do botão em espaço vazio (não cobre conteúdo), com `aria-describedby` → `role="tooltip"` (leitor de tela anuncia no foco). É o padrão pragmático aceito para dica curta não-essencial.

**Também nesta spec (limpeza do "voltar um pouco"):** o painel `<details>` sai; os **selos perto da saída saem** (redundantes com botões sempre visíveis). O `STATE.workmode` e a função pura `workBadges()` **ficam** (harness G8 depende dela).

**NAO fazer:** não tocar `buildInstr`/`buildClaudeMd`/`buildHub` (a saída não muda); não tocar `niche.topbar` nem os campos do nicho (o 1º campo — ex.: OBRA — é o nome do projeto e fica onde está); não tocar o `.sync-note` do canto (será substituído pelo cluster de ação na spec0031); não remover a classe `.check` (é do builder).

---

## Tarefa A — CSS

### A.1 — cor laranja dedicada do Code
**Ancora** (a variável adicionada pela spec0029):
```
    --teal:#5cc2c9;
```
**inserir-DEPOIS** dela:
```
    --code:#e8823a;
```

### A.2 — remover o CSS dos selos (agora sem uso)
**Ancora** (o grupo de CSS dos selos, do comentário até a última cor — comeca em `.selos{` e termina em `.selo.selo-asu{...}`):
```
  .selos{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
  .selo{
    display:inline-flex;align-items:center;gap:5px;
    font-family:var(--mono);font-size:10.5px;letter-spacing:.4px;line-height:1;
    padding:4px 8px;border-radius:6px;border:1px solid var(--sc);background:transparent;color:var(--sc);
  }
  .selo .g{font-weight:700;font-size:12px}
  .selo.selo-group{--sc:var(--green)}
  .selo.selo-code{--sc:var(--amber)}
  .selo.selo-asu{--sc:var(--teal)}
```
**Ação:** remover esse bloco inteiro (e a linha de comentário `/* Selos de estado ... */` logo acima, se presente). **Guarda-corpo:** se o comentário divergir, remova apenas de `.selos{` até `.selo.selo-asu{...}`; se qualquer uma dessas linhas não bater exatamente, **deixe o bloco** (é CSS morto inócuo) e siga — não vale travar a spec por higiene de CSS.

### A.3 — trocar o CSS do painel pelo CSS dos botões de modo + tooltip
**Ancora** (o bloco do painel `.workmode`/`.wm-body`, da spec0028):
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
**substituir-BLOCO por:**
```
  /* Botões de modo de trabalho — no topbar sticky, agrupados, cor no estado ativo (spec0030) */
  .modes{display:inline-flex;gap:6px;align-items:center;padding:4px 8px;border:1px solid var(--line-soft);border-radius:10px;background:rgba(22,19,13,.4)}
  .modes-lbl{font-family:var(--mono);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--ink-faint);margin-right:2px}
  .modebtn{position:relative;display:inline-flex;align-items:center;gap:5px;cursor:pointer;font-family:var(--mono);font-size:11px;letter-spacing:.4px;line-height:1;padding:6px 10px;border-radius:7px;border:1px solid var(--line);background:transparent;color:var(--ink-dim);transition:all .12s}
  .modebtn .g{font-weight:700;font-size:13px}
  .modebtn:hover{border-color:var(--ink-faint);color:var(--ink)}
  .modebtn:focus-visible{outline:2px solid var(--amber-soft);outline-offset:2px}
  .modebtn[aria-pressed="true"]{border-color:var(--mc);background:var(--mc);color:#1a160e;font-weight:700}
  .modebtn.mode-group{--mc:var(--green)}
  .modebtn.mode-code{--mc:var(--code)}
  .modebtn.mode-asu{--mc:var(--teal)}
  /* dica (tooltip) — hover/foco, não bloqueia o clique, não cobre conteúdo (WCAG 1.4.13) */
  .modebtn .tip{position:absolute;top:calc(100% + 8px);left:0;z-index:40;width:max-content;max-width:260px;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--panel2);color:var(--ink-dim);font-family:var(--body);font-size:12px;line-height:1.4;letter-spacing:0;text-transform:none;opacity:0;visibility:hidden;transform:translateY(-3px);transition:opacity .12s,transform .12s;pointer-events:none;box-shadow:var(--shadow)}
  .modebtn:hover .tip,.modebtn:focus-visible .tip{opacity:1;visibility:visible;transform:translateY(0)}
```

---

## Tarefa B — HTML: remover o painel e o ponto de montagem dos selos

### B.1 — painel `<details>`
**Ancora:**
```
    <!-- MODO DE TRABALHO — painel global recolhível (modos que valem para a sessão) -->
    <details class="workmode" id="workmode" open>
      <summary>Modo de trabalho <span class="wm-count" id="wm-count"></span></summary>
      <div class="wm-body" id="wm-body"></div>
    </details>
```
**Ação:** remover o bloco inteiro (os modos passam a ser renderizados dentro do `#topbar` pela Tarefa C).

### B.2 — div dos selos
**Ancora:**
```
          <div class="selos" id="work-selos" style="margin:2px 0 10px"></div>
```
**Ação:** remover a linha.

---

## Tarefa C — JS

### C.1 — unificar a lista + funções do cluster (substitui `WORKMODE_FIELDS`/`updateWorkCount`/`renderWorkmode`)
**Ancora** (o bloco inteiro adicionado pela spec0028, de `const WORKMODE_FIELDS = [` até o `}` que fecha `renderWorkmode`, imediatamente antes de `function renderTopbar(niche){`):
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
**substituir-BLOCO por:**
```
/* Modos de trabalho — fonte única (id do estado + rótulo/glifo/cor/descrição). Ordem estável: grupo, Code, ASU. */
const WORK_MODES = [
  { id:"groupMode", key:"group", label:"Grupo", glyph:"◉", cls:"mode-group",
    desc:"Projeto em grupo — gera um HUB.md compartilhado; o CEREBRO passa a ler a caixa de entrada do grupo." },
  { id:"codeMode",  key:"code",  label:"Code",  glyph:"⌘", cls:"mode-code",
    desc:"Desenvolver no Claude Code — emite o kit de arranque (CLAUDE.md, settings, skills) como download à parte." },
  { id:"asuMode",   key:"asu",   label:"ASU",   glyph:"»", cls:"mode-asu",
    desc:"Saída via ASU (patch) — edições viram instrução .yaml para baixar e aplicar; escrita nova/rolante sai inteira." },
];
function modesClusterHTML(){
  const btns = WORK_MODES.map(m => {
    const on = STATE.workmode[m.id] === "yes";
    return '<button type="button" class="modebtn ' + m.cls + '" data-mode="' + m.id + '"'
      + ' aria-pressed="' + (on?"true":"false") + '" aria-describedby="tip-' + m.key + '">'
      + '<span class="g" aria-hidden="true">' + m.glyph + '</span>' + escapeHTML(m.label)
      + '<span class="tip" role="tooltip" id="tip-' + m.key + '">' + escapeHTML(m.desc) + '</span>'
      + '</button>';
  }).join("");
  return '<div class="modes" role="group" aria-label="Modo de trabalho"><span class="modes-lbl">modo</span>' + btns + '</div>';
}
function wireModes(){
  document.querySelectorAll('.modebtn[data-mode]').forEach(el => {
    el.addEventListener("click", () => {
      const id = el.dataset.mode;
      const on = STATE.workmode[id] === "yes";
      STATE.workmode[id] = on ? "no" : "yes";
      el.setAttribute("aria-pressed", on ? "false" : "true");
      persistState(); updatePreview(); renderPrompts(getCurrentNiche()); renderTemplates(getCurrentNiche());
    });
  });
}
```

### C.2 — `renderTopbar`: injetar o cluster nos dois ramos + wire
**Ancora 1** (ramo de nicho sem campos de topbar):
```
  if(fields.length === 0){
    host.innerHTML = _saved + `<div class="sync-note"><i class="dot"></i> ${niche.label}</div>`;
    wireSavedNichesShortcut();
    return;
  }
```
**substituir-BLOCO por:**
```
  if(fields.length === 0){
    host.innerHTML = modesClusterHTML() + _saved + `<div class="sync-note"><i class="dot"></i> ${niche.label}</div>`;
    wireSavedNichesShortcut();
    wireModes();
    return;
  }
```
**Ancora 2** (fim da montagem do innerHTML no ramo normal):
```
  }).join("") + _saved + `<div class="sync-note"><i class="dot"></i> ${niche.label}</div>`;
```
**substituir-BLOCO por:**
```
  }).join("") + _saved + modesClusterHTML() + `<div class="sync-note"><i class="dot"></i> ${niche.label}</div>`;
```
**Ancora 3** (fecho do renderTopbar):
```
  wireSavedNichesShortcut();
}
```
> (Essa é a última linha do `renderTopbar`, logo antes do comentário `6. BUILDER`.)
**substituir-BLOCO por:**
```
  wireSavedNichesShortcut();
  wireModes();
}
```

### C.3 — remover a chamada órfã `renderWorkmode()`
**Ancora** (no fluxo de `setNiche`):
```
  renderTopbar(niche);
  renderWorkmode();
  renderBuilder(niche);
```
**substituir-BLOCO por:**
```
  renderTopbar(niche);
  renderBuilder(niche);
```

### C.4 — `workBadges()` passa a ler `WORK_MODES`; remover `WORK_SELOS` e `renderWorkBadges`
**Ancora** (o bloco da spec0029, de `const WORK_SELOS = [` até o `}` que fecha `renderWorkBadges`):
```
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
    '<span class="selo selo-' + s.id + '"><span class="g" aria-hidden="true">' + s.glyph + '</span>' + escapeHTML(s.label) + '</span>'
  ).join("");
  host.style.display = b.length ? "flex" : "none";
}
```
**substituir-BLOCO por:**
```
/* Fonte pura dos modos ativos (usada pelo harness G8; antes alimentava os selos, hoje reflete os botões). */
function workBadges(){
  return WORK_MODES.filter(m => STATE.workmode[m.id] === "yes").map(m => ({ id:m.key, label:m.label, glyph:m.glyph }));
}
```
> `WORK_MODES` é declarado na Tarefa C.1 (antes de `renderTopbar`), então `workBadges` (mais abaixo no arquivo) o enxerga. O G8 continua verde: `workBadges` retorna a mesma forma (`{id:"group"/"code"/"asu", label, glyph:"»" p/ ASU}`), na mesma ordem.

### C.5 — remover a chamada órfã `renderWorkBadges()` em `updatePreview`
**Ancora:**
```
  const _asuRem = $("#asu-reminder");
  if(_asuRem) _asuRem.style.display = asuModeOn() ? "block" : "none";
  renderWorkBadges();
}
```
**substituir-BLOCO por:**
```
  const _asuRem = $("#asu-reminder");
  if(_asuRem) _asuRem.style.display = asuModeOn() ? "block" : "none";
}
```

---

## Tarefa D — harness
**Nada a mudar.** Confirme após `node build.js`:
- `node validate.js index.html` → **17/17, 35/35, 0 erros**.
- G4/G5/G7 verdes (guarda "fora do niche.topbar" segue válida — os modos vêm de `WORK_MODES`).
- G8 verde (`workBadges()` agora lê `WORK_MODES`, mesma forma/ordem).

## Verificação visual (no navegador)
1. O topbar mostra, à direita dos campos do nicho, um cluster **"modo"** com 3 botões: **◉ Grupo**, **⌘ Code**, **» ASU**.
2. Rolar a página: o cluster **fica fixo** com o topbar (não some — resolve o problema 3).
3. Clicar um botão: ele **enche com a cor** (Grupo verde, **Code laranja** de verdade, ASU teal) + texto escuro; `aria-pressed` alterna; a saída muda como antes (HUB / kit Code / diretriz ASU).
4. Passar o mouse (ou focar por teclado) num botão: aparece a **dica** abaixo dele, sem bloquear o clique; sai ao afastar/desfocar.
5. Teste em escala de cinza: ativo (cheio) vs inativo (contorno) + rótulo distinguem os 3 sem depender de cor.
6. O painel «Modo de trabalho» sumiu; os selos perto da saída sumiram; recarregar mantém o estado (persistência por-nicho intacta).

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: modos voltam ao topbar como **botões-toggle agrupados** (`aria-pressed`, cor no ativo: Grupo verde / Code `--code:#e8823a` laranja / ASU teal), fixos por herdarem o `sticky` do topbar; descrições viram **tooltip** hover/foco `pointer-events:none` (WCAG 1.4.13, conteúdo não-essencial). Removidos: painel `<details>` (spec0028) e selos perto da saída (spec0029). `STATE.workmode` e `workBadges()` mantidos (G8). Fecha a parte 1 da fase "topbar inteiro" da i-N36.
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0030 aplicada (botões de modo no topbar, painel/selos removidos, Code laranja); bump minor.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: modos de trabalho viram botoes coloridos no topbar sticky (spec0030, i-N36)" -m "botoes-toggle agrupados com aria-pressed, cor no estado ativo (Code laranja de verdade), tooltip hover/foco sem bloquear clique (WCAG 1.4.13); remove painel details (spec0028) e selos perto da saida (spec0029); STATE.workmode e workBadges() mantidos (G8 verde); harness 35/35 inalterado"
git push
```
