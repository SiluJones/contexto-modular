# Spec — Modo Atualização, Fase B: prompt + UI (botão ↻ + `<dialog>` de duas saídas) (i-N40)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS**.
> **Harness: +1 check (G10).** Passa de **36/36 → 37/37**. G10 guarda a **regra dura de entrega** (§3 da análise): o prompt é disparo para IA, **nunca** contém blocos de diff. O Code confirma 37/37 pós-build + testa baixar/copiar no navegador.
> Aplicar com: **`/apply-spec 260707-spec0036-update-prompt-e-ui.md`**
> Config: **Sonnet + esforco Alto** (funções novas + `<dialog>` novo + botão no cluster + fiação no boot + check novo).
> **Diff conferido no chat contra o template vivo v1.61.0** (pós spec0035, commit b60a0d8). Build/harness ficam com o Code.
> Base: `meta/ANALISE-MODO-ATUALIZACAO.md` §2/§3/§5/§6 — i-N40. **Aplicar depois da spec0035.** É a **Fase B**. Fase C (gatilho `UPDATE_PROTOCOL` no CEREBRO) é a próxima.

## Contexto
A Fase A entregou o motor `buildUpdatePack`. Esta fase pluga: (1) `buildUpdatePrompt(niche)` — o **disparo humano**
que a conversa-alvo executa; (2) `downloadUpdatePack()` — o zip **achatado** (pacote + `_UPDATE-MANIFEST.md` +
`_UPDATE-PROMPT.md`); (3) a **UI** — botão **↻** no cluster de ação abrindo um `<dialog>` de **duas saídas**
(baixar zip / copiar prompt) com **linha de status dos modos ligados** (feedback do ASU, análise §5). A UI estava
adiada até a correção dos 3 modos — feita na spec0030 —, então agora está liberada.

**Regra dura de entrega (análise §3, INEGOCIÁVEL):** o prompt é **orientação/disparo endereçado a outra IA**
("compare, proponha, o usuário decide"), que fará a comparação. **Nunca** é uma lista de edições/diffs para o
humano colar — o humano só repassa arquivos inteiros + o disparo. O check **G10** trava isso: o prompt não pode
conter blocos de código (```), e deve conter a rotina de comparação e a regra de não-sobrescrever.

**NAO fazer:** não pôr diffs no prompt (fere a regra dura); não tocar `buildUpdatePack`/downloads antigos; o
`<dialog>` vai **antes do `<script>`** (lição D-059 — o `boot()` fia listeners síncronos), ao lado do `cfg-dialog`.

---

## Tarefa A — CSS do modal de atualização (reusa `.btn`/`.btn ghost`)
**Ancora** (a última linha do CSS do modal de config):
```
  .cfg-sec>h3{margin:0 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--ink-faint)}
```
**inserir-DEPOIS** dela:
```
  .upd-note{font-size:13px;color:var(--ink-dim);line-height:1.5;margin:0 0 12px}
  .upd-modes{font-family:var(--mono);font-size:11px;color:var(--ink-faint);margin:0 0 14px}
  .upd-actions{display:flex;gap:10px;flex-wrap:wrap}
  .upd-hint{font-size:12px;color:var(--ink-faint);margin:12px 0 0}
```

## Tarefa B — HTML: o `<dialog>` de atualização (ao lado do cfg-dialog, antes do `<script>`)
**Ancora** (o fecho do `cfg-dialog`):
```
        <div id="cfg-nicho-body"></div>
      </section>
    </div>
  </dialog>
```
**inserir-DEPOIS** dela:
```

  <!-- MODAL DE ATUALIZAÇÃO — pacote template-update; não troca nicho nem página (spec0036) -->
  <dialog class="cfg" id="upd-dialog" aria-labelledby="upd-title">
    <div class="cfg-head">
      <h2 id="upd-title">Atualizar projeto existente</h2>
      <button type="button" class="cfg-x" id="upd-close" aria-label="Fechar">✕</button>
    </div>
    <div class="cfg-body">
      <p class="upd-note">Empacota este nicho <b>achatado + afixado</b> (<code>__template-update</code>) para subir ao mount de um projeto KCM já existente. A conversa-alvo compara com o vivo e <b>propõe o merge — nunca substitui às cegas</b>.</p>
      <p class="upd-modes" id="upd-modes"></p>
      <div class="upd-actions">
        <button type="button" class="btn" id="upd-dl">↓ Baixar .zip de atualização</button>
        <button type="button" class="btn ghost" id="upd-copy">⧉ Copiar prompt</button>
      </div>
      <p class="upd-hint" id="upd-hint">O prompt também vai dentro do zip como <code>_UPDATE-PROMPT.md</code>.</p>
    </div>
  </dialog>
```

## Tarefa C — JS: prompt + download + render (após `buildUpdatePack`)
**Ancora** (o fecho de `buildUpdatePack`, imediatamente antes de `function loadScript`):
```
  const manifest = buildUpdateManifest(niche, files, codeOn, skillsOn);
  return { files, manifest, codeOn, skillsOn, affix: UPDATE_AFFIX };
}
function loadScript(src){
```
**substituir-BLOCO por:**
```
  const manifest = buildUpdateManifest(niche, files, codeOn, skillsOn);
  return { files, manifest, codeOn, skillsOn, affix: UPDATE_AFFIX };
}
/* Prompt de atualizacao: DISPARO para a IA-alvo (comparar/propor/fundir), NUNCA lista de diffs (analise §3). */
function buildUpdatePrompt(niche){
  const pack = buildUpdatePack(niche);
  if(!pack) return "";
  const L = [];
  L.push(`Subi um **template-update** do KCM para este projeto (nicho: ${niche.label}). No mount ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo.`);
  L.push("");
  L.push("Estes arquivos sao **genericos/estruturais** — propositalmente vazios do especifico desta obra; nao estranhe a falta de conteudo. Para cada um:");
  L.push("- **Compare** com o arquivo vivo equivalente do projeto (o destino real esta no manifesto).");
  L.push("- **Reporte-me, sem aplicar nada sozinho:** (a) novidade util que meu projeto ainda nao tem; (b) choque com o que ja existe — apresente lado a lado, eu decido; (c) algo que meu projeto tem e o template nao cobre.");
  L.push("- **Nunca sobrescreva conteudo vivo** por template vazio.");
  L.push("- Itens marcados **`fusao`** (CEREBRO, INSTRUCOES) carregam comportamento que meu projeto pode ter evoluido: **compare e proponha o merge, nunca substituicao cega.**");
  L.push("");
  L.push("Arquivos no pacote:");
  pack.files.forEach(f => {
    const role = (f.role || "").replace(/\s+/g, " ").trim().slice(0, 90);
    L.push(`- \`${f.flat}\` -> \`${f.real}\` (${f.nature})${role ? " — " + role : ""}`);
  });
  L.push("");
  L.push("Comece listando o que encontrou em (a), (b) e (c). Eu decido os merges.");
  return L.join("\n");
}
async function downloadUpdatePack(){
  const niche = getCurrentNiche();
  if(!niche) return;
  if(typeof JSZip === "undefined"){
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");
  }
  const pack = buildUpdatePack(niche);
  if(!pack) return;
  const zip = new JSZip();
  pack.files.forEach(f => zip.file(f.flat, f.content || ""));   // achatado na raiz do zip
  zip.file("_UPDATE-MANIFEST.md", pack.manifest);
  zip.file("_UPDATE-PROMPT.md", buildUpdatePrompt(niche));
  const blob = await zip.generateAsync({type:"blob"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `${niche.id || projectSlug(niche.label)}-template-update.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function renderUpdateDialog(){
  const m = $("#upd-modes"); if(!m) return;
  const niche = getCurrentNiche();
  const codeOn = codeModeOn();
  const skillsOn = skillsPackOn() && !!(niche && niche.skillsPack && (niche.skillsPack.skills || []).length);
  m.innerHTML = `No pacote: <b>skills ${skillsOn ? "sim" : "nao"}</b> · <b>Code ${codeOn ? "sim" : "nao"}</b> (reflete os modos ligados agora).`;
}
function loadScript(src){
```

## Tarefa D — botão ↻ no cluster + wiring
### D.1 — `actionsClusterHTML`
**Ancora:**
```
/* Cluster de ação do canto (spec0031). Download estruturado (spec0034); atualizar entra na spec0035. */
function actionsClusterHTML(){
  return '<div class="actions">'
    + '<button type="button" class="actbtn" id="act-dl" title="Baixar projeto estruturado (pasta pronta para começar)" aria-label="Baixar projeto estruturado">↓</button>'
    + '<button type="button" class="actbtn" id="act-cfg" title="Configurações do projeto" aria-label="Configurações do projeto">⚙</button>'
    + '</div>';
}
```
**substituir-BLOCO por:**
```
/* Cluster de ação do canto: download estruturado (spec0034) · atualizar (spec0036) · configuração (spec0031). */
function actionsClusterHTML(){
  return '<div class="actions">'
    + '<button type="button" class="actbtn" id="act-dl" title="Baixar projeto estruturado (pasta pronta para começar)" aria-label="Baixar projeto estruturado">↓</button>'
    + '<button type="button" class="actbtn" id="act-upd" title="Atualizar projeto existente (pacote template-update)" aria-label="Atualizar projeto existente">↻</button>'
    + '<button type="button" class="actbtn" id="act-cfg" title="Configurações do projeto" aria-label="Configurações do projeto">⚙</button>'
    + '</div>';
}
```

### D.2 — `wireActions`
**Ancora:**
```
function wireActions(){
  const g = $("#act-cfg");
  if(g) g.addEventListener("click", () => { const d = $("#cfg-dialog"); if(d && d.showModal) d.showModal(); });
  const dl = $("#act-dl");
  if(dl) dl.addEventListener("click", downloadStructuredZIP);
}
```
**substituir-BLOCO por:**
```
function wireActions(){
  const g = $("#act-cfg");
  if(g) g.addEventListener("click", () => { const d = $("#cfg-dialog"); if(d && d.showModal) d.showModal(); });
  const dl = $("#act-dl");
  if(dl) dl.addEventListener("click", downloadStructuredZIP);
  const up = $("#act-upd");
  if(up) up.addEventListener("click", () => { renderUpdateDialog(); const d = $("#upd-dialog"); if(d && d.showModal) d.showModal(); });
}
```

### D.3 — fiação do dialog no boot (fechar + baixar + copiar)
**Ancora** (o fim da fiação do cfg-dialog no boot):
```
    if(cfgDialog) cfgDialog.addEventListener("click", (e) => { if(e.target === cfgDialog) cfgDialog.close(); });
```
**inserir-DEPOIS** dela:
```

    // Modal de atualização — fechar + duas saídas (baixar zip / copiar prompt) (spec0036)
    const updDialog = $("#upd-dialog");
    const updClose  = $("#upd-close");
    if(updClose && updDialog) updClose.addEventListener("click", () => updDialog.close());
    if(updDialog) updDialog.addEventListener("click", (e) => { if(e.target === updDialog) updDialog.close(); });
    const updDl = $("#upd-dl");
    if(updDl) updDl.addEventListener("click", downloadUpdatePack);
    const updCopy = $("#upd-copy");
    if(updCopy) updCopy.addEventListener("click", async () => {
      const n = getCurrentNiche(); if(!n) return;
      const h = $("#upd-hint");
      try {
        await navigator.clipboard.writeText(buildUpdatePrompt(n));
        if(h){ h.textContent = "Prompt copiado."; setTimeout(() => { h.innerHTML = 'O prompt também vai dentro do zip como <code>_UPDATE-PROMPT.md</code>.'; }, 1800); }
      } catch(e){
        if(h) h.textContent = "Não foi possível copiar — o prompt está no zip como _UPDATE-PROMPT.md.";
      }
    });
```

## Tarefa E — harness: expor `buildUpdatePrompt` + check G10 (guarda a regra dura)
### E.1 — SHIM
**Ancora:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack};';
```
**substituir-BLOCO por:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt};';
```
### E.2 — check G10
**Ancora:**
```
// ============ SUMARIO ============
```
**inserir-ANTES** dela:
```
check("G10 update-prompt: disparo para IA (compara/nao-sobrescreve) e SEM blocos de diff (regra dura de entrega)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const s = T.buildUpdatePrompt(dev);
  assert(s && s.length > 0, "prompt vazio");
  assert(/compare/i.test(s), "prompt sem a rotina de comparacao");
  assert(/nunca sobrescreva|substituicao cega/i.test(s), "prompt sem a regra de nao-sobrescrever");
  assert(s.indexOf("```") === -1, "prompt NAO pode conter blocos de diff (fere a regra dura de entrega)");
  return "ok";
});

```

---

## Verificação visual (Code — rede desta spec)
1. No cluster de ação há três botões: **↓** (estruturado), **↻** (atualizar), **⚙** (config).
2. Clicar **↻** abre o modal "Atualizar projeto existente" com a linha de status ("No pacote: skills … · Code …" refletindo os modos ligados **agora**).
3. **Baixar .zip de atualização** gera `<nicho>-template-update.zip` **achatado**: arquivos `*__template-update.*` na raiz + `_UPDATE-MANIFEST.md` + `_UPDATE-PROMPT.md`.
4. Ligar o modo **Code** e reabrir: a linha de status mostra "Code sim" e o zip passa a incluir os arquivos do kit (achatados, sem colidir).
5. **Copiar prompt** copia o disparo (a dica vira "Prompt copiado." e volta ao normal). O prompt é orientação para a IA-alvo, **sem** blocos de diff.
6. Fechar por ✕/Esc/backdrop; não troca nicho nem aba.

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: Modo Atualização Fase B — `buildUpdatePrompt` (disparo para IA, nunca diffs — regra dura §3, travada por G10) + `downloadUpdatePack` (zip achatado: pacote + `_UPDATE-MANIFEST.md` + `_UPDATE-PROMPT.md`) + UI (botão ↻ no cluster → `<dialog>` de duas saídas + linha de status dos modos). `<dialog>` antes do `<script>` (lição D-059).
- **`meta/IDEAS.md`** — i-N40: marcar **Fase B concluída**; falta a **Fase C** (gatilho `UPDATE_PROTOCOL` no CEREBRO).
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0036 aplicada (prompt + UI do atualizador, G10, 37/37); bump minor.

## Próxima spec
- **spec0037 — Fase C:** bloco curto `UPDATE_PROTOCOL` no CEREBRO (`buildClaudeMd`), ciente de `template`/`fusao`, ensinando a conversa-alvo a reconhecer template-updates (versão condensada do prompt); harness confirma presença e que não estoura o teto. Fecha o i-N40.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: Modo Atualizacao Fase B - prompt + UI (botao atualizar + dialog de duas saidas) (spec0036, i-N40)" -m "buildUpdatePrompt (disparo para IA-alvo: comparar/propor/fundir, nunca diffs - regra dura travada por G10); downloadUpdatePack zipa o pacote achatado + _UPDATE-MANIFEST + _UPDATE-PROMPT; botao atualizar no cluster abre <dialog> de duas saidas (baixar zip / copiar prompt) com linha de status dos modos; dialog antes do <script> (licao D-059); 37/37"
git push
```
