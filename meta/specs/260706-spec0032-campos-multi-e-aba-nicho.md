# Spec — Campos multi-seleção + aba Nicho no modal: gênero de jogo vira multi (i-N36 fase "topbar inteiro", parte 3)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `src/game.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS** (17/17, 0 erros).
> **Harness: sem check novo nem alterado** — segue **35/35** (os campos de topbar não entram na saída gerada; nenhum `build*`/check muda). O Code confirma 35/35 pós-build.
> Aplicar com: **`/apply-spec 260706-spec0032-campos-multi-e-aba-nicho.md`**
> Config: **Sonnet + esforco Alto** (tipo de campo novo + render/wiring de chips no modal + roteamento + valor-lista na persistência).
> **Diff conferido no chat contra o template vivo v1.57.0** (dialog já reposicionado antes do `<script>` pela correção D-059). Build/harness ficam com o Code.
> Base: `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md` §3. **Aplicar depois da spec0031.** Reusa o padrão de chips que **já existe no builder** (`renderBuilderSection`, `.chip`/`.chip.on`, `cur.includes(v)`) — não inventa componente.

## Contexto
O gênero de jogo é hoje um `select` de escolha **única** — mas um jogo pode ser de vários gêneros. A pesquisa
(ANALISE §3) fixou: multi-seleção com opções visíveis pede **chips** (botões-de-nome), não dropdown; e esses
campos numerosos/defina-e-esqueça pertencem ao **modal** (aba Nicho), não à topbar apertada. O builder **já**
renderiza chips multi (`kind:"chips"`, valor-array) e único (`kind:"radios"`) — esta spec espelha esse padrão
para o **sistema de campos** (topbar → modal), com dois tipos novos: **`multi`** (chips aditivos, valor-lista)
e **`segmented`** (chip de escolha única). Campos ganham `panel:"modal"` para renderizar na aba Nicho em vez
da topbar.

**ACHADO a registrar (P8/P13) — importante:** rastreando o template, `genreSel`/`engineSel`/`phase` (e demais
campos de topbar) **só são lidos no render (1767) e na gravação (1787)** — **não entram na saída gerada**
(CEREBRO/Instruções). Ou seja, hoje são **metadados que não contam**. Esta spec conserta o **controle** (e o
modelo de dados: um jogo passa a registrar vários gêneros corretamente), mas **não** faz o campo aparecer na
saída — isso é uma spec seguinte (ver §Ao terminar / próximos). Mesmo assim vale: dado correto + topbar
menos apertada + pré-requisito da fiação futura.

**NAO fazer:** não tocar `buildInstr`/`buildClaudeMd` (a saída não muda nesta spec); não mexer no builder
(`STATE.builder`/`data-chip`); não converter engine/fase agora (só o gênero é o pedido — engine/fase podem
migrar numa spec futura); não usar `title`/dropdown para o gênero.

---

## Tarefa A — CSS (mínimo; reusa `.chip`/`.chips`/`.subhead` do builder)
**Ancora** (última linha do CSS do modal, da spec0031):
```
  .cfg-sec>h3{margin:0 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--ink-faint)}
```
**inserir-DEPOIS** dela:
```
  #cfg-nicho-body .subhead{margin-top:2px}
  #cfg-nicho-body .chips{margin-bottom:14px}
```

---

## Tarefa B — HTML: seção Nicho no modal
**Ancora** (fecho da seção Projeto + corpo + dialog):
```
      </section>
    </div>
  </dialog>
```
**substituir-BLOCO por:**
```
      </section>
      <section class="cfg-sec" id="cfg-sec-nicho" hidden>
        <h3>Nicho</h3>
        <div id="cfg-nicho-body"></div>
      </section>
    </div>
  </dialog>
```
(Começa `hidden`; `renderNicheConfig` mostra só quando o nicho tem campos `panel:"modal"`.)

---

## Tarefa C — JS

### C.1 — `renderTopbar` ignora os campos que vão para o modal
**Ancora:**
```
  const fields = niche.topbar || [];
```
**substituir-BLOCO por:**
```
  const fields = (niche.topbar || []).filter(f => f.panel !== "modal");
```

### C.2 — `renderNicheConfig` (nova função, após o fecho do `renderTopbar`)
**Ancora** (o fecho do `renderTopbar`, com as três chamadas de wire):
```
  wireSavedNichesShortcut();
  wireModes();
  wireActions();
}
```
**inserir-DEPOIS** desse bloco:
```

/* Config por-nicho dentro do modal — campos com panel:"modal".
   multi = chips aditivos (valor-lista); segmented = chip de escolha única;
   select/text = fallback. Reusa .chip/.chips/.subhead do builder. (spec0032) */
function renderNicheConfig(niche){
  const sec = $("#cfg-sec-nicho"), body = $("#cfg-nicho-body");
  if(!sec || !body) return;
  const fields = (niche.topbar || []).filter(f => f.panel === "modal");
  if(fields.length === 0){ sec.hidden = true; body.innerHTML = ""; return; }
  sec.hidden = false;
  body.innerHTML = fields.map(f => {
    const opts = (f.options || f.opts || []).map(o => Array.isArray(o) ? o : [o, o]);
    if(f.type === "multi"){
      const cur = Array.isArray(STATE.topbar[f.id]) ? STATE.topbar[f.id] : (Array.isArray(f.default) ? f.default : []);
      const chips = opts.map(([v,l]) => `<button type="button" class="chip ${cur.includes(v)?"on":""}" data-nfmulti="${escAttr(f.id)}" data-val="${escAttr(v)}">${escapeHTML(l)}</button>`).join("");
      return `<div class="subhead">${escapeHTML(f.label)}</div><div class="chips">${chips}</div>`;
    }
    if(f.type === "segmented"){
      const cur = STATE.topbar[f.id] ?? f.default ?? "";
      const chips = opts.map(([v,l]) => `<button type="button" class="chip ${cur===v?"on":""}" data-nfseg="${escAttr(f.id)}" data-val="${escAttr(v)}">${escapeHTML(l)}</button>`).join("");
      return `<div class="subhead">${escapeHTML(f.label)}</div><div class="chips">${chips}</div>`;
    }
    const val = STATE.topbar[f.id] ?? f.default ?? "";
    if(f.type === "select"){
      const head = (val === "") ? `<option value="" disabled${f.default?"":" selected"}>—</option>` : "";
      const os = head + opts.map(([v,l]) => `<option value="${escAttr(v)}"${v===val?" selected":""}>${escapeHTML(l)}</option>`).join("");
      return `<div class="subhead">${escapeHTML(f.label)}</div><select data-nfsel="${escAttr(f.id)}" class="affix-input">${os}</select>`;
    }
    return `<div class="subhead">${escapeHTML(f.label)}</div><input type="text" data-nftext="${escAttr(f.id)}" class="affix-input" value="${escAttr(val)}" placeholder="${escAttr(f.placeholder||"")}"/>`;
  }).join("");
  const refresh = () => { persistState(); updatePreview(); renderPrompts(getCurrentNiche()); renderTemplates(getCurrentNiche()); };
  body.querySelectorAll("[data-nfmulti]").forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.nfmulti, v = b.dataset.val;
    const cur = Array.isArray(STATE.topbar[id]) ? STATE.topbar[id] : [];
    STATE.topbar[id] = cur.includes(v) ? cur.filter(x=>x!==v) : [...cur, v];
    renderNicheConfig(niche); refresh();
  }));
  body.querySelectorAll("[data-nfseg]").forEach(b => b.addEventListener("click", () => {
    STATE.topbar[b.dataset.nfseg] = b.dataset.val; renderNicheConfig(niche); refresh();
  }));
  body.querySelectorAll("[data-nfsel]").forEach(el => el.addEventListener("change", () => { STATE.topbar[el.dataset.nfsel] = el.value; refresh(); }));
  body.querySelectorAll("[data-nftext]").forEach(el => el.addEventListener("input", () => { STATE.topbar[el.dataset.nftext] = el.value; refresh(); }));
}
```

### C.3 — chamar no `setNiche`
**Ancora:**
```
  renderTopbar(niche);
  renderBuilder(niche);
```
**substituir-BLOCO por:**
```
  renderTopbar(niche);
  renderNicheConfig(niche);
  renderBuilder(niche);
```

---

## Tarefa D — `src/game.js`: gênero vira multi no modal
**Ancora:**
```
    { id:"genreSel", label:"Gênero", type:"select",
      options:["Ação","Plataforma","RPG","Estratégia","Puzzle","Roguelike","Metroidvania","Aventura","Simulação","Survival","Visual novel","Tiro","Card game","Outro"] },
```
**substituir-BLOCO por:**
```
    { id:"genreSel", label:"Gênero (pode ser mais de um)", type:"multi", panel:"modal",
      options:["Ação","Plataforma","RPG","Estratégia","Puzzle","Roguelike","Metroidvania","Aventura","Simulação","Survival","Visual novel","Tiro","Card game","Outro"] },
```
(Engine e Fase ficam como estão nesta spec.)

---

## Tarefa E — harness
**Nada a mudar.** Após `node build.js`: `node validate.js index.html` → **17/17, 35/35, 0 erros**. (Campos de topbar não entram na saída; nenhum `build*` muda.)
**Degradação limpa:** um `STATE.topbar.genreSel` antigo (string, de antes) não é array → `renderNicheConfig` cai no default `[]` e ignora o valor velho (o usuário re-seleciona os gêneros). Sem erro.

## Verificação visual (no navegador)
1. No nicho **Game design**, o campo **Gênero saiu da topbar**; a topbar fica com Engine + Fase (+ modos + engrenagem).
2. Abrir a engrenagem → o modal agora tem a seção **Nicho** com "Gênero (pode ser mais de um)" em **chips**; clicar vários **acende vários** (multi), clicar de novo desliga.
3. Recarregar: os gêneros escolhidos voltam (persistência de lista). Trocar de nicho e voltar: idem.
4. Em nichos **sem** campo `panel:"modal"`, a seção **Nicho não aparece** (fica `hidden`).
5. Abrir/fechar o modal não troca nicho/aba nem re-renderiza a saída.

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: sistema de campos ganha `multi` (chips/valor-lista) e `segmented` (chip único), roteados ao modal por `panel:"modal"` (reusa `.chip` do builder); gênero de jogo vira `multi`. **Registrar o achado:** campos de topbar do nicho **não entram na saída gerada** hoje (só metadados) — controle consertado, fiação para a saída fica para spec futura.
- **`meta/IDEAS.md`** — **nova ideia (append)**: *"i-N4X — Campos de nicho na saída: hoje `genreSel`/`engineSel`/`phase` são preenchidos mas não entram no CEREBRO/Instruções. Fazer um bloco 'Contexto do nicho' na saída consumir esses campos (gênero(s), engine, fase), para o que o usuário marca de fato moldar o contexto gerado."* (numerar como o próximo i-N livre — conferir o maior no IDEAS antes.)
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0032 aplicada (campos `multi`/`segmented` + aba Nicho no modal; gênero multi); bump minor.

## Próximas specs (contexto)
- **spec0033** — **campos de nicho na saída** (fiação do achado acima) OU **download estruturado** — decidir a ordem com o usuário (o download não depende disto; a fiação dá sentido ao gênero multi). Recomendo a fiação antes, para o gênero multi não ficar cosmético.
- **spec0034** — atualizar (i-N40).

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: campos multi-selecao + aba Nicho no modal; genero de jogo vira multi (spec0032, i-N36)" -m "tipos de campo multi (chips/valor-lista) e segmented (chip unico) roteados ao modal por panel:modal, reusando .chip do builder; genero de jogo (14 opcoes) sai da topbar e vira multi na aba Nicho; degrada limpo de valor antigo string; achado registrado: campos de topbar nao entram na saida (fiacao fica p/ spec futura); harness 35/35 inalterado"
git push
```
