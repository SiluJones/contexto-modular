# Spec — Modo skills sai do topbar e vai para o builder «A obra», default LIGADO (Q2, D-053)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260704-spec0024-skills-no-builder.md`**
> Config: **Sonnet + esforco Alto** basta (diff exato ja validado; aplicacao mecanica por ancora + build + harness).
> **Diff ja validado no chat:** build OK, harness **17/17, 33/33, 0 erros** (G6 reescrita), teto narrative intacto em **6688/6900**. Anti-testes: default LIGADO (builder vazio => skills ativas); `skillsMode=no` => desligado; `skillsMode` fora do topbar; topbar do narrative volta a `project/chapter/phase + groupMode/asuMode/codeMode`. `narrative.js` NAO e tocado.
> Base: `meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md` (Q2, opcao (a): mover para o painel do nicho).

## Contexto
O topbar acumulava toggles universais (grupo/ASU/Code) + o de skills — «virou um monstro», com clique-errado por proximidade. O de skills nem era universal (so aparecia no narrative), entao nao pertencia aquela fileira. Esta spec **move o controle de skills para dentro do builder «A obra»** (onde ja vivem Gênero, Formato, Colaboração — «skills de escrita» e uma escolha DA OBRA, nao um modo global) e o deixa **LIGADO por padrao**. Reduz a densidade do topbar em um e elimina o clique-errado entre skills e os universais.

O mecanismo (ponteiro no CEREBRO + `downloadSkillsZIP`, da spec0023) fica intacto; muda so a FONTE do estado (`STATE.topbar.skillsMode` -> `STATE.builder.skillsMode`), o LOCAL do controle (topbar -> builder) e o DEFAULT (desligado -> ligado).

**NAO fazer:** nao tocar `src/niches/narrative.js`; nao mexer nos 3 toggles universais (isso e a fase futura de reforma do topbar); nao alterar `downloadSkillsZIP`/`buildSkillMd`/ponteiro (spec0023).

## Tarefa A — `src/index.template.html`: tirar skills do topbar

**Ancora:**
```
    topbar:         [...normTopbar(n.topbar), ...(n.skillsPack ? [{ id:"skillsMode", label:"Gerar skills de escrita?", type:"toggle", default:"no" }] : []), { id:"groupMode", label:"Projeto em grupo? (gera HUB.md)", type:"toggle", default:"no" }, { id:"asuMode", label:"Saída via ASU (patch)?", type:"toggle", default:"no" }, { id:"codeMode", label:"Desenvolver no Claude Code?", type:"toggle", default:"no" }],
```
**Substituir por:**
```
    topbar:         [...normTopbar(n.topbar), { id:"groupMode", label:"Projeto em grupo? (gera HUB.md)", type:"toggle", default:"no" }, { id:"asuMode", label:"Saída via ASU (patch)?", type:"toggle", default:"no" }, { id:"codeMode", label:"Desenvolver no Claude Code?", type:"toggle", default:"no" }],
```

## Tarefa B — `src/index.template.html`: `skillsPackOn` le o builder, default LIGADO

**Ancora:**
```
function skillsPackOn(){ return !!(STATE.topbar && STATE.topbar.skillsMode === "yes"); }
```
**Substituir por:**
```
function skillsPackOn(){ return (STATE.builder && STATE.builder.skillsMode === "no") ? false : true; }
```
> Semantica: ausencia OU "yes" => ligado; so "no" explicito desliga. Isso implementa o default-ON pedido.

## Tarefa C — `src/index.template.html`: renderizar o controle no builder «A obra»

**Ancora** (fim da montagem do HTML em `renderBuilderSection`, o fecho do `forEach` de items + a linha `host.innerHTML = html;`):
```
  });
  host.innerHTML = html;
```
> Nota: esse `});` seguido de `host.innerHTML = html;` aparece uma vez em `renderBuilderSection`. Se houver duvida de unicidade, inclua a linha anterior (`html += ...`) do ultimo `else if` para ancorar — mas no arquivo atual o par e unico nessa funcao.

**Substituir por:**
```
  });
  // Controle de skills de escrita — vive no builder «A obra», não entre os toggles universais (spec0024). Default LIGADO.
  if(niche.skillsPack){
    const skOn = !(STATE.builder.skillsMode === "no");
    html += `<div class="subhead">Skills de escrita</div>`;
    html += `<div style="font-size:12px;color:var(--ink-faint);margin:-4px 0 8px;line-height:1.5">Gera o pacote <code>skills.zip</code> (protocolo de escrita como Agent Skills) na aba de saída. Ligado por padrão.</div>`;
    html += `<label class="tsw" style="display:inline-flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" data-skills-toggle${skOn?" checked":""}/><span class="track"></span><span style="font-size:13px;color:var(--ink-dim)">${skOn?"Skills ativadas":"Skills desativadas"}</span></label>`;
  }
  host.innerHTML = html;
```

## Tarefa D — `src/index.template.html`: wiring do toggle do builder

**Ancora** (o ultimo bloco de wiring de `renderBuilderSection`, dos `[data-text]`, e o `}` que fecha a funcao):
```
  host.querySelectorAll("[data-text]").forEach(el => {
    el.addEventListener("input", () => { STATE.builder[el.dataset.text] = el.value; persistState(); updatePreview(); });
  });
}
```
**Substituir por:**
```
  host.querySelectorAll("[data-text]").forEach(el => {
    el.addEventListener("input", () => { STATE.builder[el.dataset.text] = el.value; persistState(); updatePreview(); });
  });
  const skToggle = host.querySelector("[data-skills-toggle]");
  if(skToggle) skToggle.addEventListener("change", () => {
    STATE.builder.skillsMode = skToggle.checked ? "yes" : "no";
    renderBuilderSection(niche); persistState(); updatePreview(); renderTemplates(niche);
  });
}
```
> `renderTemplates(niche)` no handler garante que o botao «Baixar skills (.zip)» aparece/some junto do toggle.

## Tarefa E — `validate.js`: G6 reescrita (estado no builder, default LIGADO)

**Ancora** (bloco INTEIRO do G6 atual — comeca em `check("G6 switch skills-pack`):
```
check("G6 switch skills-pack (narrative: ponteiro no CEREBRO, corpos SO no zip; dev nao tem o toggle)", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.skillsMode = "no";
  const noSk = T.buildClaudeMd(narr);
  T.STATE.topbar.skillsMode = "yes";
  const yesSk = T.buildClaudeMd(narr);
  T.STATE.topbar.skillsMode = "no";
  assert(!/Skills de escrita/i.test(noSk), "skillsMode=no nao deveria ter a secao de skills");
  assert(/Skills de escrita/i.test(yesSk), "skillsMode=yes deveria ter a secao de skills");
  // ponteiro: os NOMES das 4 skills aparecem na tabela de gatilhos
  assert(/escrita-serial/.test(yesSk) && /checagem-continuidade/.test(yesSk) && /voz-calibragem/.test(yesSk) && /textura-mundo/.test(yesSk), "ponteiro sem alguma das 4 skills");
  // MAS o corpo NAO fica inline no CEREBRO (progressive disclosure): sem frontmatter, sem stub, sem instrucao de apagar
  assert(!/name: escrita-serial/.test(yesSk), "corpo da skill (frontmatter) vazou pro CEREBRO — deveria ficar so no zip");
  assert(!/<!-- Preencha com o específico/.test(yesSk), "stub 'Aplicacao neste projeto' vazou pro CEREBRO — deveria ficar so no zip");
  assert(!/pode apagar este ap.ndice/i.test(yesSk), "instrucao autodestrutiva 'apagar apendice' nao pode existir no CEREBRO");
  assert(/skills\.zip/i.test(yesSk), "ponteiro sem apontar o pacote skills.zip");
  assert(noSk !== yesSk, "round-trip do skills-pack nao alterou o CEREBRO.md");
  // buildSkillMd rende um SKILL.md valido a partir do dado (fonte do zip)
  const sk0 = narr.skillsPack.skills[0];
  const md = T.buildSkillMd(sk0);
  assert(/^---\nname: escrita-serial\ndescription: /.test(md), "buildSkillMd sem frontmatter valido");
  assert(/Aplicação neste projeto/.test(md), "buildSkillMd sem a secao 'Aplicacao neste projeto'");
  // niche-scoping: o toggle so existe onde o nicho declara skillsPack
  assert((narr.topbar||[]).some(t=>t.id==="skillsMode"), "narrative deveria ter o toggle skillsMode");
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="skillsMode"), "dev NAO deveria ter o toggle skillsMode (nicho sem skillsPack)");
  return "ok";
});
```
**Substituir por:**
```
check("G6 skills-pack (narrative: controle no builder, default LIGADO, fora do topbar; ponteiro no CEREBRO)", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  T.STATE.builder = T.STATE.builder || {};
  // default LIGADO: builder sem skillsMode => skills ativas
  delete T.STATE.builder.skillsMode;
  const defSk = T.buildClaudeMd(narr);
  assert(/Skills de escrita/i.test(defSk), "default deveria ser LIGADO (secao de skills presente sem setar nada)");
  T.STATE.builder.skillsMode = "no";
  const noSk = T.buildClaudeMd(narr);
  T.STATE.builder.skillsMode = "yes";
  const yesSk = T.buildClaudeMd(narr);
  delete T.STATE.builder.skillsMode;
  assert(!/Skills de escrita/i.test(noSk), "skillsMode=no nao deveria ter a secao de skills");
  assert(/Skills de escrita/i.test(yesSk), "skillsMode=yes nao deveria ter a secao de skills");
  // ponteiro: os NOMES das 4 skills aparecem na tabela de gatilhos
  assert(/escrita-serial/.test(yesSk) && /checagem-continuidade/.test(yesSk) && /voz-calibragem/.test(yesSk) && /textura-mundo/.test(yesSk), "ponteiro sem alguma das 4 skills");
  // corpo NAO vaza pro CEREBRO
  assert(!/name: escrita-serial/.test(yesSk), "corpo da skill (frontmatter) vazou pro CEREBRO — deveria ficar so no zip");
  assert(!/<!-- Preencha com o específico/.test(yesSk), "stub vazou pro CEREBRO — deveria ficar so no zip");
  assert(!/pode apagar este ap.ndice/i.test(yesSk), "instrucao autodestrutiva nao pode existir no CEREBRO");
  assert(/skills\.zip/i.test(yesSk), "ponteiro sem apontar o pacote skills.zip");
  assert(noSk !== yesSk, "round-trip do skills-pack nao alterou o CEREBRO.md");
  // buildSkillMd rende um SKILL.md valido
  const md = T.buildSkillMd(narr.skillsPack.skills[0]);
  assert(/^---\nname: escrita-serial\ndescription: /.test(md), "buildSkillMd sem frontmatter valido");
  assert(/Aplicação neste projeto/.test(md), "buildSkillMd sem a secao 'Aplicacao neste projeto'");
  // o controle SAIU do topbar (nao esta mais entre os toggles universais)
  assert(!(narr.topbar||[]).some(t=>t.id==="skillsMode"), "skillsMode NAO deveria mais estar no topbar (moveu pro builder)");
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="skillsMode"), "dev nunca teve skillsMode no topbar");
  return "ok";
});
```

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js
```
**17/17, 33/33, 0 erros.** `N[narrative]` segue em `instr 6688` (o ponteiro vive no CEREBRO, nao nas Instrucoes — default-ON nao mexe no teto por-turno). Depois, ABRA o index.html, nicho **Narrativa & Ficção**: (a) o topbar NAO tem mais «Gerar skills de escrita?» — so os 3 universais; (b) no painel «A obra», abaixo dos chips, aparece «Skills de escrita» com um toggle JA LIGADO («Skills ativadas»); (c) por vir ligado, o botao «Baixar skills (.zip)» ja aparece na aba Templates; (d) desligar o toggle -> o botao some e o CEREBRO perde a secao de skills; (e) trocar de nicho e voltar mantem o estado (persistState).

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-053: «Controle de skills de escrita sai do topbar e vai para o builder «A obra» (ao lado de Colaboracao), com default LIGADO. Motivo: topbar sobrecarregado causava clique-errado; «skills» e escolha DA OBRA, nao modo global. Estado migra de STATE.topbar.skillsMode para STATE.builder.skillsMode; skillsPackOn passa a default-ON (so «no» explicito desliga). Q2/opcao (a) da analise. Reforma dos 3 toggles universais fica para fase futura (pesquisa dedicada).»
- **`meta/CHANGELOG.md`** — v1.51.0 no topo.
- **`meta/IDEAS.md`** — nota de que a Q2 (modo skills) foi aplicada; a reforma dos 3 universais + feedback ambiental (faixas/selos de cor, simbolo do Code, identidade do ASU) segue como item de pesquisa futura (junto de i-N36).
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI a propria spec
```
git add src/index.template.html validate.js index.html meta/specs/260704-spec0024-skills-no-builder.md meta/DECISIONS.md meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md
git commit -m "feat: controle de skills vai do topbar para o builder 'A obra', default ligado (D-053)" -m "reduz sobrecarga do topbar e clique-errado; skills e escolha da obra; estado migra p/ STATE.builder; default-ON; harness G6 reescrita; 17/17 33/33 0 erros"
git push
```
