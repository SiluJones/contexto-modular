# Spec — Conserto: CEREBRO/INSTRUCOES faltando nos downloads (fonte compartilhada dos gerados)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS**.
> **Harness: +1 check (G11).** Passa de **37/37 → 38/38**. O Code confirma pós-build + testa os downloads no navegador.
> Aplicar com: **`/apply-spec 260707-spec0037-downloads-completos.md`**
> Config: **Sonnet + esforco Alto**.
> **Diff conferido no chat contra o template vivo v1.62.0** (pós spec0036, commit 79ad24a). Build/harness ficam com o Code.
> **BUG achado pelo usuário** (download estruturado sem `meta/CEREBRO.md`) + **auditoria** que ele pediu de todos os downloads. **Independe da spec0038 (Fase C)** — pode aplicar em qualquer ordem entre elas.

## Contexto (a raiz do bug)
`CEREBRO.md` e `INSTRUCOES-DO-PROJETO.md` são **gerados** (`buildClaudeMd` / `buildInstr`) e **não estão** em
`niche.contextFiles`. Como todo download de "templates" itera só `effectiveFiles`/`contextFiles`, os três omitem
os gerados:
- **`downloadStructuredZIP`** (projeto novo) — faltava **`meta/CEREBRO.md`** (o INSTRUCOES já ia à raiz).
- **`downloadZIP`** ("Pacote em ZIP") — faltavam **CEREBRO e INSTRUCOES**.
- **`downloadAllTemplates`** ("Baixar todos") — faltavam **CEREBRO e INSTRUCOES**.

É *drift*: o CEREBRO é montado à parte e nunca foi somado às listas. O conserto certo é uma **fonte única dos
gerados** (`generatedContextFiles`) que os três downloads consomem — assim, somar um gerado no futuro cobre
todos de uma vez, e um check trava a regressão.

**NAO fazer:** não duplicar o INSTRUCOES no estruturado (a linha explícita sai, o helper assume); não mexer em
`downloadSkillsZIP`/`downloadCodeKitZIP` (têm propósito específico e já incluem o que devem — o kit-Code já traz
`CLAUDE.md`); não aplicar afixo no estruturado (segue projeto-novo).

---

## Tarefa A — helper `generatedContextFiles` (após `effectiveFiles`)
**Ancora** (o fecho de `effectiveFiles`):
```
  return (niche && niche.contextFiles) || [];
}
```
**inserir-DEPOIS** dela:
```
/* Arquivos GERADOS que nao vivem em contextFiles (CEREBRO, INSTRUCOES). Fonte unica: todo download
   de "templates" consome isto, para nunca sair pacote incompleto. meta:true -> meta/; meta:false -> raiz. */
function generatedContextFiles(niche){
  if(!niche) return [];
  return [
    { name: "CEREBRO.md", role: "Comportamento do assistente (COMO age).", content: buildClaudeMd(niche), meta: true },
    { name: "INSTRUCOES-DO-PROJETO.md", role: "Instrucoes lidas em toda mensagem.", content: buildInstr(niche), meta: false }
  ];
}
```

## Tarefa B — `downloadZIP`: incluir os gerados (achatado, com afixo como o resto)
**Ancora:**
```
  effectiveFiles(niche).forEach(f => zip.file(applyAffix(f.name), f.content||""));
```
**inserir-DEPOIS** dela:
```
  generatedContextFiles(niche).forEach(f => zip.file(applyAffix(f.name), f.content || ""));
```

## Tarefa C — `downloadAllTemplates`: incluir os gerados nos downloads individuais
**Ancora:**
```
function downloadAllTemplates(){
  const niche = getCurrentNiche();
  if(!niche || !niche.contextFiles) return;
  niche.contextFiles.forEach((f, i) => setTimeout(() => downloadFile(f.name, f.content||""), i*120));
}
```
**substituir-BLOCO por:**
```
function downloadAllTemplates(){
  const niche = getCurrentNiche();
  if(!niche || !niche.contextFiles) return;
  const files = [...niche.contextFiles, ...generatedContextFiles(niche)];
  files.forEach((f, i) => setTimeout(() => downloadFile(f.name, f.content || ""), i * 120));
}
```

## Tarefa D — `downloadStructuredZIP`: CEREBRO em `meta/`, INSTRUCOES via helper (sem duplicar)
**Ancora:**
```
  // meta/ — arquivos de contexto do nicho (nomes canonicos, SEM afixo: projeto novo)
  effectiveFiles(niche).forEach(f => zip.file(`${root}/meta/${f.name}`, f.content || ""));
  // Instrucoes na raiz
  zip.file(`${root}/INSTRUCOES-DO-PROJETO.md`, buildInstr(niche));
```
**substituir-BLOCO por:**
```
  // meta/ — arquivos de contexto do nicho (nomes canonicos, SEM afixo: projeto novo)
  effectiveFiles(niche).forEach(f => zip.file(`${root}/meta/${f.name}`, f.content || ""));
  // Gerados: CEREBRO em meta/, INSTRUCOES na raiz (sem eles o pacote vinha incompleto — bug corrigido)
  generatedContextFiles(niche).forEach(f => zip.file(`${root}/${f.meta ? "meta/" : ""}${f.name}`, f.content || ""));
```

## Tarefa E — harness: expor `generatedContextFiles` + G11 (trava a regressão)
### E.1 — SHIM
**Ancora:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt};';
```
**substituir-BLOCO por:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, generatedContextFiles};';
```
### E.2 — check G11
**Ancora:**
```
// ============ SUMARIO ============
```
**inserir-ANTES** dela:
```
check("G11 downloads completos: gerados (CEREBRO em meta/, INSTRUCOES) na fonte compartilhada", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const gen = T.generatedContextFiles(dev);
  assert(gen.some(f => f.name === "CEREBRO.md" && f.meta === true && f.content && f.content.length), "CEREBRO ausente/errado nos gerados");
  assert(gen.some(f => f.name === "INSTRUCOES-DO-PROJETO.md" && f.meta === false && f.content && f.content.length), "INSTRUCOES ausente/errado nos gerados");
  return "ok";
});

```

---

## Verificação visual (Code — rede do conserto)
1. **Download estruturado (↓):** o zip agora traz **`<raiz>/meta/CEREBRO.md`** (antes faltava), além de INSTRUCOES na raiz.
2. **"Pacote em ZIP" (dl-zip):** agora inclui **CEREBRO.md** e **INSTRUCOES-DO-PROJETO.md** (achatados, com afixo se ligado).
3. **"Baixar todos" (dl-all):** agora baixa também **CEREBRO.md** e **INSTRUCOES-DO-PROJETO.md**.
4. Nenhum dos downloads que já funcionavam (skills, kit-Code, atualização) mudou.

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `FIX`/`DEC`: downloads de "templates" (`downloadZIP`, `downloadAllTemplates`, `downloadStructuredZIP`) vinham **sem os gerados** (CEREBRO/INSTRUCOES não estão em `contextFiles`); criado helper **`generatedContextFiles`** como fonte única (CEREBRO→`meta/`, INSTRUCOES→raiz), consumido pelos três; G11 trava a regressão.
- **`meta/STATUS.md`** — atualizar a linha «Versão atual» (está defasada em v1.57.0; sincronizar com a versão real) + linha na «Última sessão»: spec0037 (conserto downloads + G11, 38/38); bump minor.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "fix: CEREBRO/INSTRUCOES faltavam nos downloads de templates (fonte compartilhada generatedContextFiles) (spec0037)" -m "CEREBRO e INSTRUCOES sao gerados e nao vivem em contextFiles, entao downloadZIP/downloadAllTemplates/downloadStructuredZIP saiam incompletos (estruturado sem meta/CEREBRO.md); helper generatedContextFiles vira fonte unica (CEREBRO->meta/, INSTRUCOES->raiz) consumida pelos tres; G11 trava a regressao; 38/38"
git push
```
