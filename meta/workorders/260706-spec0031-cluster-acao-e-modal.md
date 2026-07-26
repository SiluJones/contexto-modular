# Spec — Cluster de ação no canto + modal de configuração (`<dialog>`) + afixo migrado (i-N36 fase "topbar inteiro", parte 2)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html`** → **`node build.js` + `node validate.js` OBRIGATORIOS** (17/17, 0 erros).
> **Harness: sem check novo nem alterado** — segue **35/35** (é UI + realocação de HTML; nenhum `build*`/campo/estado de saída muda). O Code confirma 35/35 pós-build.
> Aplicar com: **`/apply-spec 260706-spec0031-cluster-acao-e-modal.md`**
> Config: **Sonnet + esforco Alto** (CSS novo, `<dialog>` nativo, **move** o bloco do afixo entre regiões, mexe nos 2 ramos do renderTopbar + boot).
> **Diff conferido no chat contra o template vivo v1.56.0.** Build/harness ficam com o Code.
> Base: `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md` §2. **Aplicar depois da spec0030.** Prepara o terreno para 0032 (aba Nicho + campos `multi`/`segmented`), 0033 (download estruturado) e 0034 (atualizar).

## Contexto
O canto direito do topbar mostra hoje um `.sync-note` (● + rótulo do nicho) **redundante** — a rail já
identifica o nicho. Ele vira a casa do **cluster de ação**. Nesta spec o cluster nasce com **1 botão: a
engrenagem** (⚙), que abre um **modal de configuração** (`<dialog>` nativo). Os botões **download** e
**atualizar** entram nesse mesmo cluster nas specs 0033 e 0034 (cada spec traz o seu — sem botão morto agora).

O modal já ganha a seção **Projeto**, e a config **global do afixo sai da aba Templates para dentro dela**
(decisão do usuário: "muito melhor ali do que perdido em Templates"). A migração do afixo é um **move de HTML
com IDs preservados** — a fiação (`$("#affix-prefix-on")` etc., no boot) acha os inputs em qualquer lugar do
DOM, então **nada da lógica do afixo muda**.

**Decisão de escopo (registrar como DEC):** o **SO fica de fora desta spec**. O `<select>` de SO está entelado
com `OSENV`/`#g-os` perto da saída; migrá-lo agora adicionaria risco sem necessidade. Entra numa spec própria
depois, com estudo dedicado. A aba **Nicho** do modal e os tipos de campo `multi`/`segmented` são a spec0032.

**`<dialog>` nativo:** `showModal()` centraliza, prende foco, fecha no Esc, tem backdrop — tudo nativo/acessível.
É camada por cima: abrir/fechar **não toca `STATE.niche` nem re-renderiza as views** (não troca nicho/página).

**NAO fazer:** não tocar `buildInstr`/`buildClaudeMd`/`applyAffix`/`AFFIX`; não mexer nos campos do nicho; não
migrar o SO; não adicionar botões download/atualizar ao cluster (são 0033/0034).

---

## Tarefa A — CSS: cluster de ação + modal
**Ancora** (a última linha do CSS do afixo, estável e pré-existente):
```
  .affix-preview{font-size:12px;color:var(--ink-faint);margin:11px 0 0;line-height:1.5;border-top:1px solid var(--line-soft);padding-top:10px}
```
**inserir-DEPOIS** dela:
```
  /* Cluster de ação no canto do topbar + modal de configuração (spec0031) */
  .actions{display:inline-flex;gap:6px;align-items:center;margin-left:auto}
  .actbtn{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;cursor:pointer;border-radius:8px;border:1px solid var(--line);background:transparent;color:var(--ink-dim);font-size:15px;transition:all .12s}
  .actbtn:hover{border-color:var(--ink-faint);color:var(--ink);background:rgba(231,162,63,.08)}
  .actbtn:focus-visible{outline:2px solid var(--amber-soft);outline-offset:2px}
  .cfg{width:min(560px,92vw);max-height:86vh;border:1px solid var(--line);border-radius:14px;background:var(--panel2);color:var(--ink);padding:0;box-shadow:var(--shadow)}
  .cfg::backdrop{background:rgba(8,6,3,.62)}
  .cfg-head{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--line-soft)}
  .cfg-head h2{margin:0;font-size:18px;font-weight:600;color:var(--ink)}
  .cfg-x{width:30px;height:30px;border-radius:7px;border:1px solid var(--line);background:transparent;color:var(--ink-dim);cursor:pointer;font-size:14px}
  .cfg-x:hover{color:var(--ink);border-color:var(--ink-faint)}
  .cfg-body{padding:18px 20px;overflow:auto}
  .cfg-sec{margin-bottom:8px}
  .cfg-sec>h3{margin:0 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--ink-faint)}
```

---

## Tarefa B — HTML: criar o `<dialog>` e mover o afixo para dentro dele

### B.1 — inserir o modal antes de `</body>`
**Ancora** (única no arquivo):
```
</body>
```
**inserir-ANTES** dela:
```
  <!-- MODAL DE CONFIGURAÇÃO — aberto pela engrenagem; não troca nicho nem página (spec0031) -->
  <dialog class="cfg" id="cfg-dialog" aria-labelledby="cfg-title">
    <div class="cfg-head">
      <h2 id="cfg-title">Configurações do projeto</h2>
      <button type="button" class="cfg-x" id="cfg-close" aria-label="Fechar">✕</button>
    </div>
    <div class="cfg-body">
      <section class="cfg-sec" id="cfg-sec-projeto">
        <h3>Projeto</h3>
        <!-- AFIXO: mover o bloco #affix-box para cá (Tarefa B.2) -->
      </section>
    </div>
  </dialog>
```

### B.2 — mover o bloco do afixo da aba Templates para o modal
Isto é um **move**, não uma reescrita. Na aba Templates (logo após o `.btnrow` dos botões de download):
- **Recorte** o bloco inteiro do afixo: da linha `      <div class="affix-box" id="affix-box">` até o
  `</div>` que **fecha esse box** — o primeiro `</div>` depois do parágrafo `<p class="affix-preview"
  id="affix-preview">…</p>` (o bloco tem duas `.affix-row` + o `<p>` de preview dentro).
- **Cole** esse bloco **dentro** de `<section class="cfg-sec" id="cfg-sec-projeto">`, no lugar do comentário
  `<!-- AFIXO: mover o bloco #affix-box para cá (Tarefa B.2) -->`.
- **Não altere** o conteúdo do bloco — mesmos IDs (`affix-box`, `affix-prefix-on/text`, `affix-suffix-on/text`,
  `affix-preview`). A fiação no boot os encontra por ID em qualquer lugar do DOM.

**Guarda-corpo:** se o começo/fim do bloco não bater exatamente (indentação, comentário), **PARE e reporte** —
não adivinhe as fronteiras do recorte.

---

## Tarefa C — JS

### C.1 — funções do cluster de ação (antes de `renderTopbar`)
**Ancora** (o fecho da função `wireModes`, imediatamente antes de `function renderTopbar(niche){`):
```
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
**inserir-DEPOIS** desse bloco:
```
/* Cluster de ação do canto (spec0031). Nasce com a engrenagem; download/atualizar entram nas specs 0033/0034. */
function actionsClusterHTML(){
  return '<div class="actions">'
    + '<button type="button" class="actbtn" id="act-cfg" title="Configurações do projeto" aria-label="Configurações do projeto">⚙</button>'
    + '</div>';
}
function wireActions(){
  const g = $("#act-cfg");
  if(g) g.addEventListener("click", () => { const d = $("#cfg-dialog"); if(d && d.showModal) d.showModal(); });
}
```

### C.2 — `renderTopbar`: trocar o `.sync-note` pelo cluster, nos dois ramos
**Ancora 1** (ramo sem campos):
```
    host.innerHTML = modesClusterHTML() + _saved + `<div class="sync-note"><i class="dot"></i> ${niche.label}</div>`;
    wireSavedNichesShortcut();
    wireModes();
    return;
```
**substituir-BLOCO por:**
```
    host.innerHTML = modesClusterHTML() + _saved + actionsClusterHTML();
    wireSavedNichesShortcut();
    wireModes();
    wireActions();
    return;
```
**Ancora 2** (fim da montagem do innerHTML no ramo normal):
```
  }).join("") + _saved + modesClusterHTML() + `<div class="sync-note"><i class="dot"></i> ${niche.label}</div>`;
```
**substituir-BLOCO por:**
```
  }).join("") + _saved + modesClusterHTML() + actionsClusterHTML();
```
**Ancora 3** (fecho do renderTopbar):
```
  wireSavedNichesShortcut();
  wireModes();
}
```
**substituir-BLOCO por:**
```
  wireSavedNichesShortcut();
  wireModes();
  wireActions();
}
```

### C.3 — fechar o modal (fiação única no boot)
**Ancora** (na sequência de fiação dos botões de download, no boot):
```
    const dlCodekit = $("#dl-codekit");
    if(dlCodekit) dlCodekit.addEventListener("click", downloadCodeKitZIP);
```
**inserir-DEPOIS** dela:
```

    // Modal de configuração — fechar pelo X e pelo clique no backdrop (Esc é nativo do <dialog>)
    const cfgDialog = $("#cfg-dialog");
    const cfgClose  = $("#cfg-close");
    if(cfgClose && cfgDialog) cfgClose.addEventListener("click", () => cfgDialog.close());
    if(cfgDialog) cfgDialog.addEventListener("click", (e) => { if(e.target === cfgDialog) cfgDialog.close(); });
```

---

## Tarefa D — harness
**Nada a mudar.** Após `node build.js`: `node validate.js index.html` → **17/17, 35/35, 0 erros**. (Só UI + realocação de HTML com IDs preservados; `applyAffix`/`AFFIX`/`build*` intactos.)

## Verificação visual (no navegador)
1. No canto direito do topbar, no lugar do "● {nicho}", agora há a **engrenagem** (⚙); ela fica fixa com o topbar sticky.
2. Clicar a engrenagem abre o **modal centralizado** "Configurações do projeto", com a seção **Projeto** contendo o **afixo** (prefixo/sufixo + preview) — que **sumiu da aba Templates**.
3. Ligar prefixo/sufixo e digitar: o preview do afixo atualiza e vale para os downloads, exatamente como antes (a lógica não mudou de lugar, só a caixa).
4. Fechar: pelo **✕**, por **Esc**, ou clicando **fora** (backdrop). Abrir/fechar **não** troca de nicho nem de aba nem re-renderiza a saída.
5. A rail continua identificando o nicho (o indicador redundante do canto saiu sem perda).

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: canto do topbar troca o `.sync-note` redundante por um **cluster de ação**; nasce com a **engrenagem** → **modal `<dialog>` de configuração** (não toca nicho/página); **afixo migrado** da aba Templates para a seção Projeto do modal (move de HTML, IDs e `applyAffix` intactos). **SO adiado** (entelado com `OSENV`/`#g-os` — spec própria depois). Download/atualizar entram no cluster nas specs 0033/0034.
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0031 aplicada (cluster de ação + modal + afixo no modal); bump minor.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: cluster de acao no canto do topbar + modal de configuracao (spec0031, i-N36)" -m "engrenagem abre <dialog> nativo (Esc/backdrop/foco preso), nao troca nicho nem pagina; afixo migrado da aba Templates para a secao Projeto do modal (move de HTML, IDs e applyAffix intactos); .sync-note redundante removido do canto; SO adiado; harness 35/35 inalterado"
git push
```
