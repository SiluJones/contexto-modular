# Spec — Afixo prefixo E sufixo simultaneos e independentes (i-N34)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html`** (CSS + HTML + JS do casco) -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260702-spec0020-afixo-prefixo-e-sufixo.md`**
> Config: **Opus + esforco Alto** (UI nova + logica; testar visualmente depois).
> **Diff ja validado no chat:** build OK, `node --check` OK, harness 17/17 / 32/32 / 0 erros, e anti-teste dos 4 casos (nenhum / so prefixo / so sufixo / ambos) confere.

## Contexto
A i-N3 Parte B (afixo no download, v1.9.0) trata prefixo/sufixo como **escolha exclusiva** (modes: `none | prefix | suffix`, um so de cada vez). A i-N34 pede o refino: **prefixo e sufixo INDEPENDENTES** — duas caixas separadas, cada uma com seu switch liga/desliga, combinando numa unica passada. Resultados possiveis: nenhum (`CLAUDE.md`), so prefixo (`projeto__CLAUDE.md`), so sufixo (`CLAUDE__v1.8.md`), ambos (`projeto__CLAUDE__v1.8.md`). Preview do nome final atualiza ao vivo.

**NAO fazer:** nao mexer no separador `__`; nao mudar a sanitizacao (mesma regra de nome seguro); nao tocar em outras telas; nao alterar o visual alem do bloco do afixo.

## Tarefa A — CSS (bloco `.affix-*`)

**Ancora** (substituir o bloco INTEIRO):
```
  .affix-box{border:1px solid var(--line-soft);border-radius:10px;padding:13px 15px;margin-bottom:20px;background:var(--panel2)}
  .affix-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
  .affix-label{font-family:var(--mono);font-size:11px;letter-spacing:.4px;text-transform:uppercase;color:var(--ink-faint)}
  .affix-modes{display:flex;gap:3px;background:var(--bg);padding:3px;border-radius:8px;border:1px solid var(--line-soft)}
  .affix-mode{appearance:none;border:0;background:transparent;color:var(--ink-faint);font-family:var(--mono);font-size:11px;font-weight:600;padding:5px 10px;border-radius:6px;cursor:pointer;transition:all .15s}
  .affix-mode:hover{color:var(--ink-dim)}
  .affix-mode.on{background:var(--amber);color:#15110a}
  .affix-input{flex:1;min-width:140px;background:var(--bg);color:var(--ink);border:1px solid var(--line);border-radius:8px;padding:7px 10px;font-family:var(--mono);font-size:12px}
  .affix-input:disabled{opacity:.4;cursor:not-allowed}
  .affix-preview{font-size:12px;color:var(--ink-faint);margin:10px 0 0;line-height:1.5}
```

**Substituir por:**
```
  .affix-box{border:1px solid var(--line-soft);border-radius:10px;padding:13px 15px;margin-bottom:20px;background:var(--panel2)}
  .affix-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:9px}
  .affix-row:last-of-type{margin-bottom:0}
  .affix-label{font-family:var(--mono);font-size:11px;letter-spacing:.4px;text-transform:uppercase;color:var(--ink-faint);min-width:58px}
  .affix-tsw{display:inline-flex;align-items:center;gap:7px;cursor:pointer;user-select:none;flex:none}
  .affix-tsw input{position:absolute;opacity:0;width:0;height:0}
  .affix-tsw .track{position:relative;width:34px;height:19px;border-radius:999px;background:var(--line-soft);border:1px solid var(--line);transition:background .15s;flex:none}
  .affix-tsw .track::after{content:"";position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:var(--ink-dim);transition:transform .15s,background .15s}
  .affix-tsw input:checked + .track{background:var(--amber)}
  .affix-tsw input:checked + .track::after{transform:translateX(15px);background:#15110a}
  .affix-input{flex:1;min-width:140px;background:var(--bg);color:var(--ink);border:1px solid var(--line);border-radius:8px;padding:7px 10px;font-family:var(--mono);font-size:12px}
  .affix-input:disabled{opacity:.4;cursor:not-allowed}
  .affix-preview{font-size:12px;color:var(--ink-faint);margin:11px 0 0;line-height:1.5;border-top:1px solid var(--line-soft);padding-top:10px}
```

## Tarefa B — HTML (bloco `#affix-box`)

**Ancora** (substituir o bloco INTEIRO):
```
      <div class="affix-box" id="affix-box">
        <div class="affix-row">
          <span class="affix-label">Nome dos arquivos:</span>
          <div class="affix-modes">
            <button type="button" class="affix-mode on" data-affix-mode="none">padrão</button>
            <button type="button" class="affix-mode" data-affix-mode="prefix">prefixo</button>
            <button type="button" class="affix-mode" data-affix-mode="suffix">sufixo</button>
          </div>
          <input type="text" id="affix-text" class="affix-input" placeholder="ex: meu-projeto, v1.8" disabled />
        </div>
        <p class="affix-preview" id="affix-preview">Os arquivos saem com o nome original (ex.: <code>STATUS.md</code>).</p>
      </div>
```

**Substituir por:**
```
      <div class="affix-box" id="affix-box">
        <div class="affix-row">
          <label class="affix-tsw" title="Ligar prefixo">
            <input type="checkbox" id="affix-prefix-on" />
            <span class="track"></span>
          </label>
          <span class="affix-label">Prefixo</span>
          <input type="text" id="affix-prefix-text" class="affix-input" placeholder="ex: meu-projeto" disabled />
        </div>
        <div class="affix-row">
          <label class="affix-tsw" title="Ligar sufixo">
            <input type="checkbox" id="affix-suffix-on" />
            <span class="track"></span>
          </label>
          <span class="affix-label">Sufixo</span>
          <input type="text" id="affix-suffix-text" class="affix-input" placeholder="ex: v1.8" disabled />
        </div>
        <p class="affix-preview" id="affix-preview">Os arquivos saem com o nome original (ex.: <code>STATUS.md</code>).</p>
      </div>
```

## Tarefa C — JS: estado do afixo

**Ancora:**
```
const AFFIX = { mode:"none", text:"", sep:"__" };  // mode: "none" | "prefix" | "suffix"
```
**Substituir por:**
```
const AFFIX = { prefixOn:false, prefix:"", suffixOn:false, suffix:"", sep:"__" };  // prefixo e sufixo INDEPENDENTES (i-N34): cada um com seu switch; combinam numa passada
```

## Tarefa D — JS: `applyAffix`

**Ancora** (funcao inteira):
```
function applyAffix(name){
  const t = (AFFIX.text||"").trim();
  if(AFFIX.mode === "none" || !t) return name;
  // separa base.ext (último ponto). Sem extensão → afixa no fim/início direto.
  const dot = name.lastIndexOf(".");
  const base = dot > 0 ? name.slice(0, dot) : name;
  const ext  = dot > 0 ? name.slice(dot) : "";
  const sep  = AFFIX.sep || "__";
  if(AFFIX.mode === "prefix") return `${t}${sep}${base}${ext}`;
  return `${base}${sep}${t}${ext}`;  // suffix
}
```
**Substituir por:**
```
function applyAffix(name){
  // prefixo e sufixo sao independentes: nenhum, um so, ou ambos numa unica passada.
  const pre = AFFIX.prefixOn ? (AFFIX.prefix||"").trim() : "";
  const suf = AFFIX.suffixOn ? (AFFIX.suffix||"").trim() : "";
  if(!pre && !suf) return name;
  // separa base.ext (último ponto). Sem extensão → afixa no fim/início direto.
  const dot = name.lastIndexOf(".");
  let base  = dot > 0 ? name.slice(0, dot) : name;
  const ext = dot > 0 ? name.slice(dot) : "";
  const sep = AFFIX.sep || "__";
  if(pre) base = `${pre}${sep}${base}`;
  if(suf) base = `${base}${sep}${suf}`;
  return `${base}${ext}`;
}
```

## Tarefa E — JS: wiring (bloco do afixo no boot)

**Ancora** (bloco inteiro, dentro do boot, comeca em `// Afixo opcional nos nomes de arquivo`):
```
    // Afixo opcional nos nomes de arquivo
    const affixText = $("#affix-text");
    const affixPreview = $("#affix-preview");
    const updateAffixPreview = () => {
      if(!affixPreview) return;
      const sample = applyAffix("STATUS.md");
      if(AFFIX.mode === "none" || !(AFFIX.text||"").trim()){
        affixPreview.innerHTML = "Os arquivos saem com o nome original (ex.: <code>STATUS.md</code>).";
      } else {
        affixPreview.innerHTML = `Exemplo: <code>STATUS.md</code> → <code>${escapeHTML(sample)}</code> · vale para baixar todos, ZIP, e o CEREBRO.md.`;
      }
    };
    $$("[data-affix-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        AFFIX.mode = btn.dataset.affixMode;
        $$("[data-affix-mode]").forEach(b => b.classList.toggle("on", b.dataset.affixMode === AFFIX.mode));
        if(affixText) affixText.disabled = (AFFIX.mode === "none");
        updateAffixPreview();
      });
    });
    if(affixText) affixText.addEventListener("input", () => {
      // sanitiza: sem espaços/barras/aspas (mesma regra de nome de arquivo seguro)
      AFFIX.text = affixText.value.replace(/[\\/:*?"<>|\s]+/g, "-");
      if(affixText.value !== AFFIX.text) affixText.value = AFFIX.text;
      updateAffixPreview();
    });
```

**Substituir por:**
```
    // Afixo opcional nos nomes de arquivo — prefixo E sufixo independentes (i-N34)
    const affixPreOn   = $("#affix-prefix-on");
    const affixPreText = $("#affix-prefix-text");
    const affixSufOn   = $("#affix-suffix-on");
    const affixSufText = $("#affix-suffix-text");
    const affixPreview = $("#affix-preview");
    const updateAffixPreview = () => {
      if(!affixPreview) return;
      const sample = applyAffix("STATUS.md");
      if(sample === "STATUS.md"){
        affixPreview.innerHTML = "Os arquivos saem com o nome original (ex.: <code>STATUS.md</code>).";
      } else {
        affixPreview.innerHTML = `Exemplo: <code>STATUS.md</code> → <code>${escapeHTML(sample)}</code> · vale para baixar todos, ZIP, e o CEREBRO.md.`;
      }
    };
    // sanitiza: sem espaços/barras/aspas (mesma regra de nome de arquivo seguro)
    const sanitizeAffix = v => v.replace(/[\\/:*?"<>|\s]+/g, "-");
    if(affixPreOn) affixPreOn.addEventListener("change", () => {
      AFFIX.prefixOn = affixPreOn.checked;
      if(affixPreText) affixPreText.disabled = !AFFIX.prefixOn;
      updateAffixPreview();
    });
    if(affixSufOn) affixSufOn.addEventListener("change", () => {
      AFFIX.suffixOn = affixSufOn.checked;
      if(affixSufText) affixSufText.disabled = !AFFIX.suffixOn;
      updateAffixPreview();
    });
    if(affixPreText) affixPreText.addEventListener("input", () => {
      AFFIX.prefix = sanitizeAffix(affixPreText.value);
      if(affixPreText.value !== AFFIX.prefix) affixPreText.value = AFFIX.prefix;
      updateAffixPreview();
    });
    if(affixSufText) affixSufText.addEventListener("input", () => {
      AFFIX.suffix = sanitizeAffix(affixSufText.value);
      if(affixSufText.value !== AFFIX.suffix) affixSufText.value = AFFIX.suffix;
      updateAffixPreview();
    });
```

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js
```
**17/17, 0 erros.** Depois, ABRA o index.html gerado, va na aba **Templates**, e confira: (a) dois toggles independentes (Prefixo / Sufixo), cada um habilita sua caixa; (b) o preview do nome atualiza ao vivo; (c) os quatro casos batem — nenhum `STATUS.md`, so prefixo `projeto__STATUS.md`, so sufixo `STATUS__v1.8.md`, ambos `projeto__STATUS__v1.8.md`; (d) baixar-todos / ZIP / CEREBRO.md respeitam o afixo.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-049: «Afixo no download passa de escolha exclusiva (none/prefix/suffix) para prefixo E sufixo INDEPENDENTES — dois toggles + duas caixas, combinando numa passada (i-N34). Fecha o refino da i-N3 Parte B.»
- **`meta/CHANGELOG.md`** — v1.47.0 no topo.
- **`meta/IDEAS.md`** — marcar i-N34 como ✅ IMPLEMENTADA (v1.47.0).
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI o proprio arquivo da spec
```
git add src/index.template.html index.html meta/specs/260702-spec0020-afixo-prefixo-e-sufixo.md meta/DECISIONS.md meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md
git commit -m "feat: afixo prefixo e sufixo independentes e simultaneos (i-N34, D-049)" -m "dois toggles + duas caixas, combinam numa passada; preview ao vivo; harness 17/17"
git push
```
