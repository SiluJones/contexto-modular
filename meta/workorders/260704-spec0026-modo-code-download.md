# Spec — Modo Code: apêndice de arranque vira download `.zip` + formato Skills atual (i-N37, D-055)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260704-spec0026-modo-code-download.md`**
> Config: **Sonnet + esforco Alto** (diff maior — remocao de bloco + 2 funcoes novas; ancoras robustas, ja validado).
> **Diff ja validado no chat:** build OK, harness **17/17, 34/34, 0 erros** (nova G7). Zip montado de verdade: `claude-code-kit/CLAUDE.md` + `.claude/settings.json` + `.claude/skills/apply-spec/SKILL.md` + `.claude/skills/wrap/SKILL.md` + `README.md`, confirmado por `unzip -l`. Instrucao «pode apagar» removida de TODO o gerado. Nenhum nicho tocado. Ponteiro do Code adiciona so ~3,2k chars (antes o apendice inline era bem maior).
> **Fonte de referencia:** os arquivos finais validados estao em `spec0026-src/` (index.template.html e validate.js). Em caso de duvida de ancora, o Code pode comparar com eles — mas as ancoras abaixo sao exatas.
> Base: `meta/ANALISE-MODO-CODE-REFINO.md` (secao 4) + pesquisa das praticas de Claude Code 2026 (slash commands fundidos em Skills; CLAUDE.md < 200 linhas).

## Contexto
O Modo Code emitia um «Apendice — arquivos de arranque» como texto DENTRO do CEREBRO, com a instrucao autodestrutiva «pode apagar este apendice» — o MESMO anti-padrao que a D-052 corrigiu nas skills. Alem disso, os comandos vinham no formato LEGADO `.claude/commands/*.md`; o formato atual (2026) e `.claude/skills/<nome>/SKILL.md` (slash commands foram fundidos em Skills). Esta spec: (A) troca o apendice inline por um ponteiro curto; (B) cria `buildCodeKitFiles`/`downloadCodeKitZIP` que geram o pacote `claude-code-kit.zip` no formato Skills atual; (C) atualiza o starter do CLAUDE.md (regra «< 200 linhas», config Sonnet/Opus atual); (D) botao + wiring + harness G7.

A **seção de raias** (o PRIMEIRO bloco `if(codeModeOn())`) NAO muda — e regra fixa, fica no CEREBRO.

**NAO fazer:** nao tocar o primeiro `if(codeModeOn())` (raias); nao tocar nichos; nao mexer no bloco de skills (spec0023).

## Tarefa A — `src/index.template.html`: apêndice inline → ponteiro

**Ancora** (o SEGUNDO bloco `if(codeModeOn()){`, INTEIRO — comeca com o push de `## Apêndice — arquivos de arranque` e termina no `}` antes de `if(skillsPackOn()`):
```
  if(codeModeOn()){
    L.push("");
    L.push("---");
    L.push("");
    L.push("## Apêndice — arquivos de arranque do Claude Code (crie estes no repo)");
    L.push("");
    L.push('Crie os arquivos abaixo nos caminhos indicados (depois de criar, pode apagar este apêndice). São um **starter** — ajuste o comando de build e as permissões ao seu projeto.');
    L.push("");
    L.push("### `CLAUDE.md` (na RAIZ do repo)");
    L.push("```markdown");
    L.push("# <NOME DO PROJETO> — guia para o Claude Code");
    L.push("");
    L.push("> Arquivo-raiz lido pelo Claude Code em toda sessão. Mantenha CURTO (custa token em todo turno).");
    L.push("> O comportamento detalhado do assistente está em `meta/CEREBRO.md`.");
    L.push("");
    L.push("## Ritual de início");
    L.push("Leia `meta/CEREBRO.md` → `meta/CONTEXT.md` → `meta/STATUS.md` antes de agir. Confirme em uma frase o que entendeu.");
    L.push("");
    L.push("## Build / validação");
    L.push('- Build: `<seu comando de build, ex.: npm run build>`  (PLACEHOLDER — troque pelo do seu projeto)');
    L.push('- Testes/validação: `<seu comando de teste>` — rode antes de commitar mudança de código.');
    L.push('- Mudança só de doc (meta/) NÃO precisa de build; a rede é o `git diff`.');
    L.push('- Adicione seus comandos de build/teste ao `allow` de `.claude/settings.json`.');
    L.push("");
    L.push("## Convenções");
    L.push("- Mensagens de commit **sem acento**.");
    L.push("- Edições nos meta/ são **append-only** pelo Code (STATUS, DECISIONS); curadoria que reescreve vem do chat (arquivo inteiro OU spec).");
    L.push('- Ao aplicar uma spec de `meta/specs/`: ache cada âncora exatamente; se não achar, PARE e reporte. Não mexa fora das edições nomeadas. `git diff` antes do commit.');
    L.push("```");
    L.push("");
    L.push("### `.claude/settings.json`");
    L.push("```json");
    L.push("{");
    L.push('  "permissions": {');
    L.push('    "allow": [');
    L.push('      "Read", "Edit", "Grep", "Glob",');
    L.push('      "Bash(git status:*)", "Bash(git diff:*)", "Bash(git add:*)", "Bash(git commit:*)", "Bash(git push:*)"');
    L.push("    ],");
    L.push('    "deny": ["Bash(rm -rf:*)"]');
    L.push("  }");
    L.push("}");
    L.push("```");
    L.push('(Adicione seu comando de build/teste — ex.: `"Bash(npm run build:*)"` — ao `allow`.)');
    L.push("");
    L.push("### `.claude/commands/apply-spec.md`");
    L.push("```markdown");
    L.push("Leia o arquivo de spec indicado em `meta/specs/` e execute-o.");
    L.push("Localize cada âncora EXATAMENTE; se não achar uma, PARE e reporte — não chute um lugar próximo.");
    L.push("Não toque em nada fora das edições nomeadas. Ao fim, rode `git diff` e confira a forma esperada antes de commitar.");
    L.push("Spec: $ARGUMENTS");
    L.push("```");
    L.push("");
    L.push("### `.claude/commands/wrap.md`");
    L.push("```markdown");
    L.push("Encerre a tarefa: atualize `meta/STATUS.md` (append, não reescreva), acrescente `DEC-`/`FIX-` em `meta/DECISIONS.md` se houve decisão/bug,");
    L.push("e me mostre o `git diff` e o comando de commit (uma linha por comando, mensagem SEM acento).");
    L.push("```");
  }
```
**Substituir por:**
```
  if(codeModeOn()){
    L.push("");
    L.push("---");
    L.push("");
    L.push("## Kit de arranque do Claude Code — pacote separado");
    L.push("");
    L.push("Os arquivos de arranque do Claude Code (o `CLAUDE.md` raiz, `.claude/settings.json` e os comandos) NÃO vivem neste arquivo — ficam no pacote **`claude-code-kit.zip`** que o kit gera à parte (botão «Baixar kit do Claude Code (.zip)» na aba de saída). Isto mantém o CEREBRO só com regra fixa; artefato de instalação sai como arquivo.");
    L.push("");
    L.push("| Arquivo | Papel |");
    L.push("|---|---|");
    L.push("| `CLAUDE.md` (raiz) | guia curto lido pelo Code em todo turno (ritual + build + convenções) — mantenha < 200 linhas; o detalhado fica no CEREBRO |");
    L.push("| `.claude/settings.json` | permissões (allow/deny) — adicione seu comando de build/teste ao `allow` |");
    L.push("| `.claude/skills/apply-spec/SKILL.md` | comando `/apply-spec`: aplica uma spec de `meta/specs/` (âncora exata ou PARA e reporta) |");
    L.push("| `.claude/skills/wrap/SKILL.md` | comando `/wrap`: fecha a tarefa (append em STATUS/DECISIONS + `git diff` + commit) |");
    L.push("");
    L.push("Instalação: descompacte `claude-code-kit.zip` e mova `CLAUDE.md` e a pasta `.claude/` para a **raiz do repo**. O `README.md` do zip repete os passos e traz a cláusula anti-`.gitignore` de `.claude/`. Formato atual (2026): os comandos são **Skills** em `.claude/skills/<nome>/SKILL.md` (o `.claude/commands/*.md` legado também funcionaria, mas Skills é o recomendado e tem precedência).");
  }
```

## Tarefa B — `src/index.template.html`: `buildCodeKitFiles` + `downloadCodeKitZIP`

**Ancora** (o fim de `downloadSkillsZIP` — o `a.download = ` do skills.zip ate o fecho, seguido da abertura de `loadScript`):
```
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `skills.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function loadScript(src){
  return new Promise((resolve, reject) => {
```
**Substituir por** (o mesmo fim + as duas funcoes novas + a reabertura de `loadScript`):
```
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `skills.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
// Monta os arquivos de arranque do Claude Code (fonte unica: mesma estrutura real do repo).
// Comandos no formato ATUAL (2026): .claude/skills/<nome>/SKILL.md, nao o legado .claude/commands/*.md.
function buildCodeKitFiles(){
  const claudeMd = [
    "# <NOME DO PROJETO> — guia para o Claude Code",
    "",
    "> Arquivo-raiz lido pelo Claude Code em toda sessão. Mantenha CURTO (< 200 linhas — custa token em todo turno).",
    "> Regra prática: se remover uma linha e o Claude ainda acerta, ela não pertence aqui. Procedural detalhado → vira skill em `.claude/skills/`.",
    "> O comportamento detalhado do assistente está em `meta/CEREBRO.md`.",
    "",
    "## Ritual de início",
    "Leia `meta/CEREBRO.md` → `meta/CONTEXT.md` → `meta/STATUS.md` antes de agir. Confirme em uma frase o que entendeu.",
    "",
    "## Build / validação",
    "- Build: `<seu comando de build, ex.: npm run build>`  (PLACEHOLDER — troque pelo do seu projeto)",
    "- Testes/validação: `<seu comando de teste>` — rode antes de commitar mudança de código.",
    "- Mudança só de doc (meta/) NÃO precisa de build; a rede é o `git diff`.",
    "- Adicione seus comandos de build/teste ao `allow` de `.claude/settings.json`.",
    "",
    "## Convenções",
    "- Mensagens de commit **sem acento**.",
    "- Edições nos meta/ são **append-only** pelo Code (STATUS, DECISIONS); curadoria que reescreve vem do chat (arquivo inteiro OU spec).",
    "- Ao aplicar uma spec de `meta/specs/`: ache cada âncora exatamente; se não achar, PARE e reporte. Não mexa fora das edições nomeadas. `git diff` antes do commit.",
    "",
    "## Config (modelo × esforço)",
    "- Spec com diff exato já validado → **Sonnet**, esforço proporcional (mecânico = baixo/médio).",
    "- Tarefa com julgamento sem rede (refator multi-arquivo, spec que delega decisão) → **Opus**, esforço alto.",
    "- Esforço proporcional à ambiguidade; `/effort low` para o trivial.",
    ""
  ].join("\n");
  const settings = [
    "{",
    '  "permissions": {',
    '    "allow": [',
    '      "Read", "Edit", "Grep", "Glob",',
    '      "Bash(git status:*)", "Bash(git diff:*)", "Bash(git add:*)", "Bash(git commit:*)", "Bash(git push:*)"',
    "    ],",
    '    "deny": ["Bash(rm -rf:*)"]',
    "  }",
    "}",
    "",
    "// Adicione seu comando de build/teste ao allow — ex.: \"Bash(npm run build:*)\", \"Bash(npm test:*)\"."
  ].join("\n");
  const applySpec = [
    "---",
    "name: apply-spec",
    "description: Aplica uma spec de meta/specs/ ao repo — localiza cada âncora exatamente, substitui, e para se não achar. Use quando o usuário pedir /apply-spec ou para aplicar uma spec nomeada.",
    "disable-model-invocation: true",
    "---",
    "Leia o arquivo de spec indicado em `meta/specs/` e execute-o.",
    "Localize cada âncora EXATAMENTE; se não achar uma, PARE e reporte — não chute um lugar próximo.",
    "Não toque em nada fora das edições nomeadas. Ao fim, rode `git diff` e confira a forma esperada antes de commitar.",
    "Spec: $ARGUMENTS",
    ""
  ].join("\n");
  const wrap = [
    "---",
    "name: wrap",
    "description: Encerra a tarefa — append em STATUS/DECISIONS, git diff e comando de commit. Use quando o usuário pedir /wrap ou para fechar a sessão de trabalho.",
    "disable-model-invocation: true",
    "---",
    "Encerre a tarefa: atualize `meta/STATUS.md` (append, não reescreva), acrescente `DEC-`/`FIX-` em `meta/DECISIONS.md` se houve decisão/bug,",
    "e me mostre o `git diff` e o comando de commit (uma linha por comando, mensagem SEM acento).",
    ""
  ].join("\n");
  return { claudeMd, settings, applySpec, wrap };
}
async function downloadCodeKitZIP(){
  if(typeof JSZip === "undefined"){
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");
  }
  const f = buildCodeKitFiles();
  const zip = new JSZip();
  const root = "claude-code-kit";
  zip.file(`${root}/CLAUDE.md`, f.claudeMd);
  zip.file(`${root}/.claude/settings.json`, f.settings);
  zip.file(`${root}/.claude/skills/apply-spec/SKILL.md`, f.applySpec);
  zip.file(`${root}/.claude/skills/wrap/SKILL.md`, f.wrap);
  const readme = [
    "# Kit de arranque do Claude Code",
    "",
    "Gerado pelo Kit de Contexto Universal.",
    `Data: ${today}`,
    "",
    "## Como instalar",
    "Mova `CLAUDE.md` e a pasta `.claude/` para a **raiz do repo**. Ajuste o comando de build no `CLAUDE.md` e no `allow` de `.claude/settings.json`.",
    "",
    "## Formato dos comandos",
    "Os comandos vêm como **Skills** (`.claude/skills/<nome>/SKILL.md`) — o formato atual (2026). Invoque com `/apply-spec` e `/wrap`. O `disable-model-invocation: true` faz cada um rodar só quando você chama, nunca sozinho. (O formato legado `.claude/commands/*.md` também funcionaria, mas Skills é o recomendado e tem precedência.)",
    "",
    "## Atenção ao versionar",
    "Se o repo tiver `.gitignore`, garanta que ele **não** ignore a pasta `.claude/` inteira — o CLAUDE.md, as permissões e os comandos devem ser versionados com o projeto. Ignore só artefatos locais, nunca `.claude/skills/` nem `.claude/settings.json`.",
    ""
  ].join("\n");
  zip.file(`${root}/README.md`, readme);
  const blob = await zip.generateAsync({type:"blob"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `claude-code-kit.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function loadScript(src){
  return new Promise((resolve, reject) => {
```

## Tarefa C — `src/index.template.html`: botao HTML

**Ancora:**
```
        <button class="btn ghost" id="dl-skills" style="display:none">↓ Baixar skills (.zip)</button>
```
**Substituir por:**
```
        <button class="btn ghost" id="dl-skills" style="display:none">↓ Baixar skills (.zip)</button>
        <button class="btn ghost" id="dl-codekit" style="display:none">↓ Baixar kit do Claude Code (.zip)</button>
```

## Tarefa D — `src/index.template.html`: visibilidade + wiring

### D1. Visibilidade (em `renderTemplates`)
**Ancora:**
```
  const dlSkills = $("#dl-skills");
  if(dlSkills) dlSkills.style.display = (niche && niche.skillsPack && skillsPackOn()) ? "" : "none";
}
```
**Substituir por:**
```
  const dlSkills = $("#dl-skills");
  if(dlSkills) dlSkills.style.display = (niche && niche.skillsPack && skillsPackOn()) ? "" : "none";
  const dlCodekit = $("#dl-codekit");
  if(dlCodekit) dlCodekit.style.display = codeModeOn() ? "" : "none";
}
```

### D2. Bind (junto dos outros dl-*)
**Ancora:**
```
    const dlSkills = $("#dl-skills");
    if(dlSkills) dlSkills.addEventListener("click", downloadSkillsZIP);
```
**Substituir por:**
```
    const dlSkills = $("#dl-skills");
    if(dlSkills) dlSkills.addEventListener("click", downloadSkillsZIP);
    const dlCodekit = $("#dl-codekit");
    if(dlCodekit) dlCodekit.addEventListener("click", downloadCodeKitZIP);
```

## Tarefa E — `validate.js`: SHIM + check G7

### E1. SHIM
**Ancora:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd};';
```
**Substituir por:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles};';
```

### E2. G7 (inserir apos o fecho do G6)
**Ancora** (o fim do G6):
```
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="skillsMode"), "dev nunca teve skillsMode no topbar");
  return "ok";
});
```
**Substituir por:**
```
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="skillsMode"), "dev nunca teve skillsMode no topbar");
  return "ok";
});

check("G7 modo Code (dev: kit vira download separado, ponteiro no CEREBRO, sem inline nem 'apagar')", () => {
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.codeMode = "no";
  const noC = T.buildClaudeMd(dev);
  T.STATE.topbar.codeMode = "yes";
  const yesC = T.buildClaudeMd(dev);
  T.STATE.topbar.codeMode = "no";
  assert(!/Kit de arranque do Claude Code/i.test(noC), "codeMode=no nao deveria ter a secao do kit");
  assert(/Kit de arranque do Claude Code/i.test(yesC), "codeMode=yes deveria ter a secao (ponteiro) do kit");
  assert(/claude-code-kit\.zip/i.test(yesC), "ponteiro sem apontar o pacote claude-code-kit.zip");
  assert(!/pode apagar este ap.ndice/i.test(yesC), "instrucao autodestrutiva 'apagar apendice' nao pode existir no CEREBRO");
  assert(!/<NOME DO PROJETO> — guia para o Claude Code/.test(yesC), "conteudo do CLAUDE.md vazou inline pro CEREBRO — deveria ficar so no zip");
  assert(!/"deny": \["Bash\(rm -rf/.test(yesC), "conteudo do settings.json vazou inline pro CEREBRO — deveria ficar so no zip");
  assert(noC !== yesC, "round-trip do modo Code nao alterou o CEREBRO.md");
  const f = T.buildCodeKitFiles();
  assert(/^# <NOME DO PROJETO>/.test(f.claudeMd) && /< 200 linhas/.test(f.claudeMd), "CLAUDE.md starter invalido");
  assert(/"permissions"/.test(f.settings) && /"deny"/.test(f.settings), "settings.json starter invalido");
  assert(/^---\nname: apply-spec\ndescription: /.test(f.applySpec) && /disable-model-invocation: true/.test(f.applySpec), "apply-spec nao esta no formato Skill atual");
  assert(/^---\nname: wrap\ndescription: /.test(f.wrap) && /disable-model-invocation: true/.test(f.wrap), "wrap nao esta no formato Skill atual");
  return "ok";
});
```

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js
```
**17/17, 34/34, 0 erros.** Depois, ABRA o index.html, nicho **Desenvolvimento & Engenharia** (ou qualquer um), ligue «Desenvolver no Claude Code?»: (a) o CEREBRO ganha «Kit de arranque do Claude Code — pacote separado» (tabela + instalação), SEM os arquivos inline e SEM «pode apagar»; (b) aparece o botao «Baixar kit do Claude Code (.zip)» na aba Templates; (c) baixe e descompacte — estrutura `claude-code-kit/CLAUDE.md` + `.claude/settings.json` + `.claude/skills/apply-spec/SKILL.md` + `.claude/skills/wrap/SKILL.md` + `README.md`; (d) os SKILL.md têm frontmatter `name`/`description`/`disable-model-invocation`; (e) desligar o toggle → botao some e a secao sai do CEREBRO.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-055: «Modo Code: apendice de arranque sai do CEREBRO e vira `claude-code-kit.zip` separado (botao proprio), espelhando a D-052. Remove a instrucao autodestrutiva «pode apagar». Comandos migrados do formato legado `.claude/commands/*.md` para o atual `.claude/skills/<nome>/SKILL.md` (slash commands fundidos em Skills em 2026; `disable-model-invocation: true` para so rodarem por invocacao). CLAUDE.md starter atualizado (regra «< 200 linhas», config Sonnet/Opus atual em vez da regra obsoleta da i-N29). Harness G7. Fecha i-N37 e o ciclo de refino de modos (skills+code). Base: meta/ANALISE-MODO-CODE-REFINO.md.»
- **`meta/CHANGELOG.md`** — v1.53.0 no topo.
- **`meta/IDEAS.md`** — marcar **i-N37 ✅ IMPLEMENTADA** (v1.53.0); **fechar i-N7** como «analisada — KCM ja pratica SDD adaptado (CEREBRO=constitution, spec=specify+plan, apply-spec=implement); emprestimo pontual (`/check-spec`) registrado como i-N39»; abrir **i-N38** «Hook de pre-commit que roda o harness e bloqueia commit sem verde (candidato a proxima fase de Code)» e **i-N39** «/check-spec: gate read-only de conferencia da spec antes de aplicar (do /analyze do spec-kit; opcional, chat ja pre-valida)» como Ativas.
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI a propria spec e a analise
```
git add src/index.template.html validate.js index.html meta/specs/260704-spec0026-modo-code-download.md meta/ANALISE-MODO-CODE-REFINO.md meta/DECISIONS.md meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md
git commit -m "feat: modo Code - kit de arranque vira download separado + formato Skills atual (i-N37, D-055)" -m "apendice sai do cerebro (espelho D-052); sem 'apagar apendice'; comandos migram p/ .claude/skills; CLAUDE.md < 200 linhas + config atual; harness G7; 17/17 34/34 0 erros"
git push
```
