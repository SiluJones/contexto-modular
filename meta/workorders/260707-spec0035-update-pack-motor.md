# Spec — Modo Atualização, Fase A: motor `buildUpdatePack` (achatado + afixado + manifesto) (i-N40)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS**.
> **Harness: +1 check (G9).** Passa de **35/35 → 36/36**. G9 valida o motor headless (unicidade dos nomes planos, manifesto presente, gating de modo, `fusao` do CEREBRO/INSTRUCOES). O Code confirma 36/36 pós-build.
> Aplicar com: **`/apply-spec 260707-spec0035-update-pack-motor.md`**
> Config: **Sonnet + esforco Alto** (funções novas + esquema de nomes + manifesto + check novo; tudo aditivo).
> **Diff conferido no chat contra o template vivo v1.60.0** (pós spec0034, commit 70444df). Build/harness ficam com o Code.
> Base: **`meta/ANALISE-MODO-ATUALIZACAO.md`** (§4 esquema de nomes, §4.5 fusão, §7 riscos) — i-N40. **Aplicar depois da spec0034.** É a **Fase A** (motor). Fase B (prompt + botão ↻ + `<dialog>` de duas saídas) e Fase C (gatilho no CEREBRO) vêm em specs seguintes.

## Contexto
O "Modo Atualização" empacota, **achatado e afixado**, tudo o que o KCM gera para um nicho — meta + CEREBRO +
instrução + skills (se ligado) + kit-Code (se ligado) — para o usuário subir num gesto ao mount de um projeto
KCM **já existente** e a conversa-alvo propor o merge. A dor real (análise §1): `downloadZIP` já achata+afixa os
`meta/*.md`, mas skills/kit-Code saem em **subpastas sem afixo** — colidindo quando o Projeto do Claude achata
tudo (quatro `SKILL.md` iguais). Esta fase entrega o **motor** que unifica isso.

**Decisões fixadas (análise §9), aplicadas aqui:**
- **Afixo `__template-update`** (fixo, independente do `AFFIX` do usuário — o afixo do usuário é para os
  downloads normais; a atualização tem afixo próprio, auto-descritivo).
- **Nomes planos únicos e legíveis**, o destino real vai no manifesto. Skills carregam o nome no arquivo plano
  (`<skill>.SKILL__template-update.md`) — resolve a colisão dos `SKILL.md`.
- **CEREBRO e INSTRUCOES entram**, montados com a **build ativa do momento**, classificados **`fusao`** (merge
  proposto, nunca substituição cega). Os demais são `template`.
- **Manifesto próprio `_UPDATE-MANIFEST.md`** (distinto do `_MANIFEST.md` do FlatDrop): declara nicho, modos
  ligados, data, afixo, e a tabela `nome-plano → destino-real · natureza · papel`.

**Desvio consciente da análise (registrar):** a análise §4.1 pede "versão do kit" no manifesto, mas **não há
constante de versão no produto** (o "v1.4" da tela é stamp velho; a versão real vive no `meta/STATUS.md`, fora
do build). O manifesto usa **data** (`today`) e declara os modos; a versão pode ser somada depois se o produto
passar a expor uma constante.

**Escopo desta fase:** só o **motor** (`buildUpdatePack`) + manifesto + o check G9. **Sem UI, sem zip, sem
prompt** — isso é Fase B. O motor é função pura (testável), exposta ao harness.

**NAO fazer:** não tocar `downloadZIP`/`downloadSkillsZIP`/`downloadCodeKitZIP`/`downloadStructuredZIP` (o novo
é aditivo); não aplicar o `AFFIX` do usuário (usar o afixo fixo); não desenhar UI nesta fase.

---

## Tarefa A — `src/index.template.html`: funções do motor
**Ancora** (o fim de `downloadStructuredZIP`, imediatamente antes de `function loadScript`):
```
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function loadScript(src){
```
**substituir-BLOCO por** (insere o motor entre o fecho do `downloadStructuredZIP` e `loadScript`):
```
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/* ---- Modo Atualizacao (i-N40), Fase A: motor de empacotamento achatado + afixado (spec0035) ---- */
const UPDATE_AFFIX = "__template-update";
function updateFlat(displayName){
  // insere o afixo antes da ultima extensao; trata "<skill>.SKILL.md" como unidade (o . fica no base)
  const dot = displayName.lastIndexOf(".");
  const base = dot > 0 ? displayName.slice(0, dot) : displayName;
  const ext  = dot > 0 ? displayName.slice(dot) : "";
  return `${base}${UPDATE_AFFIX}${ext}`;
}
function buildUpdateManifest(niche, files, codeOn, skillsOn){
  const L = [];
  L.push("<!-- kcm-update-manifest v1 -->");
  L.push(`# _UPDATE-MANIFEST — ${niche.label}`);
  L.push("");
  L.push(`- Nicho: ${niche.label}`);
  L.push(`- Modos ligados: skills ${skillsOn ? "sim" : "nao"} · Code ${codeOn ? "sim" : "nao"}`);
  L.push(`- Data: ${today}`);
  L.push(`- Afixo: ${UPDATE_AFFIX}`);
  L.push("");
  L.push("> Isto e um **template-update** do KCM: arquivos genericos/estruturais, propositalmente vazios do");
  L.push("> especifico desta obra. NAO substitua conteudo vivo por template vazio. Natureza `template` =");
  L.push("> comparar e adotar novidade e seguro; natureza `fusao` (CEREBRO, INSTRUCOES) = comparar com o vivo");
  L.push("> e propor merge, o usuario decide — nunca substituicao cega.");
  L.push("");
  L.push("| Nome no upload | Destino real | Natureza | Papel |");
  L.push("|---|---|---|---|");
  files.forEach(f => {
    const role = (f.role || "").replace(/\|/g, "/").replace(/\s+/g, " ").trim().slice(0, 120);
    L.push(`| \`${f.flat}\` | \`${f.real}\` | ${f.nature} | ${role} |`);
  });
  L.push("");
  return L.join("\n");
}
function buildUpdatePack(niche){
  if(!niche) return null;
  const codeOn   = codeModeOn();
  const skillsOn = skillsPackOn() && !!niche.skillsPack && (niche.skillsPack.skills || []).length > 0;
  const files = [];
  // meta/*.md do nicho — template
  effectiveFiles(niche).forEach(f => files.push({
    flat: updateFlat(f.name), real: `meta/${f.name}`, nature: "template",
    role: f.role || "", content: f.content || ""
  }));
  // CEREBRO — fusao (build ativa do momento)
  files.push({ flat: updateFlat("CEREBRO.md"), real: "meta/CEREBRO.md", nature: "fusao",
    role: "Comportamento do assistente (COMO age).", content: buildClaudeMd(niche) });
  // INSTRUCOES — fusao (build ativa do momento)
  files.push({ flat: updateFlat("INSTRUCOES.md"), real: "INSTRUCOES-DO-PROJETO.md", nature: "fusao",
    role: "Instrucoes lidas em toda mensagem.", content: buildInstr(niche) });
  // skills do nicho (so se ligado) — template
  if(skillsOn){
    niche.skillsPack.skills.forEach(sk => files.push({
      flat: updateFlat(`${sk.name}.SKILL.md`), real: `.claude/skills/${sk.name}/SKILL.md`,
      nature: "template", role: sk.gatilho || "", content: buildSkillMd(sk)
    }));
  }
  // kit-Code (so se ligado) — template
  if(codeOn){
    const k = buildCodeKitFiles();
    files.push({ flat: updateFlat("CLAUDE.md"), real: "CLAUDE.md", nature: "template",
      role: "Guia raiz do Claude Code.", content: k.claudeMd });
    files.push({ flat: updateFlat("claude-settings.json"), real: ".claude/settings.json", nature: "template",
      role: "Permissoes do Claude Code.", content: k.settings });
    files.push({ flat: updateFlat("apply-spec.SKILL.md"), real: ".claude/skills/apply-spec/SKILL.md",
      nature: "template", role: "Comando /apply-spec.", content: k.applySpec });
    files.push({ flat: updateFlat("wrap.SKILL.md"), real: ".claude/skills/wrap/SKILL.md",
      nature: "template", role: "Comando /wrap.", content: k.wrap });
  }
  const manifest = buildUpdateManifest(niche, files, codeOn, skillsOn);
  return { files, manifest, codeOn, skillsOn, affix: UPDATE_AFFIX };
}
function loadScript(src){
```

---

## Tarefa B — `validate.js`: expor `buildUpdatePack` no SHIM
**Ancora:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges};';
```
**substituir-BLOCO por:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack};';
```

## Tarefa C — `validate.js`: check G9
**Ancora** (o comeco do sumario):
```
// ============ SUMARIO ============
```
**inserir-ANTES** dela:
```
check("G9 update-pack: nomes planos unicos, manifesto presente, modos gatilham, CEREBRO/INSTRUCOES = fusao (dev)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.builder  = T.STATE.builder  || {};
  // modos alvo desligados
  T.STATE.workmode.codeMode = "no";
  T.STATE.builder.skillsMode = "no";
  const p0 = T.buildUpdatePack(dev);
  assert(p0 && p0.files && p0.files.length, "pack vazio");
  assert(/kcm-update-manifest/.test(p0.manifest), "manifesto ausente/sem assinatura");
  const flats0 = p0.files.map(f => f.flat);
  assert(new Set(flats0).size === flats0.length, "nomes planos colidiram: " + flats0.join(","));
  assert(flats0.every(n => n.indexOf("__template-update") > 0), "algum nome sem o afixo __template-update");
  assert(!p0.files.some(f => /^\.claude|^CLAUDE\.md$/.test(f.real)), "kit-Code entrou com Code desligado");
  assert(p0.files.some(f => f.real === "meta/CEREBRO.md" && f.nature === "fusao"), "CEREBRO deveria ser fusao");
  assert(p0.files.some(f => f.real === "INSTRUCOES-DO-PROJETO.md" && f.nature === "fusao"), "INSTRUCOES deveria ser fusao");
  // com Code ligado, o kit entra e os nomes seguem unicos
  T.STATE.workmode.codeMode = "yes";
  const p1 = T.buildUpdatePack(dev);
  const flats1 = p1.files.map(f => f.flat);
  assert(new Set(flats1).size === flats1.length, "nomes planos colidiram com Code: " + flats1.join(","));
  assert(p1.files.some(f => f.real === ".claude/settings.json"), "kit-Code nao entrou com Code ligado");
  T.STATE.workmode.codeMode = "no";
  return "ok";
});

```

---

## Verificação (Code)
- `node build.js` + `node validate.js index.html` → **17/17, 36/36, 0 erros** (G9 novo verde).
- Opcional no console do navegador: `buildUpdatePack(getCurrentNiche())` retorna `{files, manifest, ...}`; os
  `files[].flat` terminam em `__template-update` antes da extensão; `SKILL.md` viram `<skill>.SKILL__template-update.md`;
  ligar o modo Code acrescenta os 4 arquivos do kit sem colidir.

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: Modo Atualização Fase A — `buildUpdatePack(niche)` coleta os artefatos do
  nicho (meta + CEREBRO + INSTRUCOES + skills/kit-Code conforme modo), achatados e afixados com `__template-update`
  (afixo fixo, ≠ AFFIX do usuário); `_UPDATE-MANIFEST.md` mapeia nome-plano → destino real + natureza
  (`template`/`fusao`); CEREBRO e INSTRUCOES são `fusao` (merge, nunca substituição cega). Manifesto usa **data**
  (produto não expõe constante de versão). Check **G9** (unicidade + gating + fusão). Aditivo; downloads antigos
  intactos.
- **`meta/IDEAS.md`** — i-N40: marcar **Fase A concluída**; Fase B (prompt + UI) e Fase C (gatilho CEREBRO) pendentes.
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0035 aplicada (motor buildUpdatePack + G9, 36/36); bump minor.

## Próximas specs
- **spec0036 — Fase B:** `buildUpdatePrompt(niche)` (disparo para a IA-alvo: comparar/propor/fundir, nunca
  sobrescrever — análise §6) + **UI**: botão **↻** no cluster de ação → `<dialog>` de duas saídas ("Baixar .zip de
  atualização" = pacote achatado + `_UPDATE-MANIFEST.md` + `_UPDATE-PROMPT.md` / "Copiar prompt") + linha de status
  dos modos ligados (feedback do ASU, análise §5).
- **spec0037 — Fase C:** gatilho `UPDATE_PROTOCOL` curto no CEREBRO (buildClaudeMd), ciente de `template`/`fusao`;
  harness confirma presença e teto.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: Modo Atualizacao Fase A - motor buildUpdatePack achatado+afixado + G9 (spec0035, i-N40)" -m "buildUpdatePack coleta meta+CEREBRO+INSTRUCOES+skills/kit-Code conforme modo, achatados e afixados com __template-update (afixo fixo, distinto do AFFIX do usuario); _UPDATE-MANIFEST mapeia nome-plano->destino real + natureza template/fusao; CEREBRO e INSTRUCOES sao fusao (merge, nunca substituicao cega); manifesto usa data (produto nao expoe versao); check G9 valida unicidade dos nomes planos, gating de modo e fusao; 36/36; downloads antigos intactos"
git push
```
