# Spec — Skills de escrita viram download `.zip` separado + ponteiro no CEREBRO (Q1 Nível 2, D-052)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260703-spec0023-skills-zip-e-ponteiro.md`**
> Config: **Sonnet + esforco Alto** basta (diff exato ja validado; aplicacao mecanica por ancora + build + harness).
> **Diff ja validado no chat:** build OK, harness **17/17, 33/33, 0 erros** (G6 reescrita), teto narrative intacto em **6688/6900**. Zip montado de verdade com JSZip: estrutura `skills/<nome>/SKILL.md` × 4 + `skills/README.md` confirmada por `unzip -l`. `narrative.js` NAO e tocado (os dados do skillsPack ja existem; so muda como sao emitidos).
> Base: `meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md` (Q1, Nivel 2).

## Contexto
Hoje (v1.49.0) o toggle de skills emite as 4 SKILL.md INTEIRAS como texto dentro do CEREBRO — inchaco medido de **+10.055 chars (+29%)** — e ainda com uma instrucao autodestrutiva («pode apagar este apendice»). Isso e o anti-padrao de contexto: o corpo da skill deveria carregar sob demanda (progressive disclosure), nao ficar sempre no CEREBRO. Alem disso, instrucao «apague este bloco» num arquivo de regras fixas e um risco (usuario ou IA obedece e remove algo importante).

**Correcao:** as skills passam a sair como um **pacote `skills.zip` separado** (botao proprio na aba de saida), com a estrutura fiel `skills/<nome>/SKILL.md` — o usuario descompacta e arrasta a pasta `skills/` para dentro de `.claude/`. O CEREBRO fica so com um **ponteiro curto**: intro + tabela de gatilhos + instrucao de instalacao. Reducao medida: de +29% para **+4,4%** (so o ponteiro). A instrucao autodestrutiva some.

**NAO fazer:** nao tocar `src/niches/narrative.js` (os dados ja estao la); nao mexer no apendice do Modo Code (isso e a spec0026); nao adicionar dependencia (JSZip ja e usado pelo `downloadZIP` existente, carregado sob demanda do CDN).

## Tarefa A — `src/index.template.html`: ponteiro no lugar do apendice inline

**Ancora** (o bloco INTEIRO do apendice de skills — do `if(skillsPackOn()` ate a linha do `Gerado pelo Kit`, inclusive):
```
  if(skillsPackOn() && niche.skillsPack){
    const sp = niche.skillsPack;
    L.push("");
    L.push("---");
    L.push("");
    L.push("## Apêndice — skills de escrita (Agent Skills)");
    L.push("");
    L.push(sp.intro);
    L.push("");
    L.push("**Onde instalar:** em **claude.ai**, Configurações → Capabilities/Skills → enviar cada SKILL.md (planos pagos). No **Claude Code**, salve cada uma em `.claude/skills/<nome>/SKILL.md` na raiz do repo (ou `~/.claude/skills/` para valer em todos os projetos). O mesmo arquivo serve nos dois — formato idêntico.");
    L.push("**Como funciona:** o Claude lê só o `name` + `description` de cada skill no início da sessão; o corpo carrega sozinho quando a `description` casa com o que você pede (é *progressive disclosure* — o protocolo pesado não pesa no token de todo turno). Por isso a `description` é o gatilho e vem deliberadamente \"insistente\", com verbos concretos.");
    L.push("**Preencha antes de usar:** cada skill tem uma seção «Aplicação neste projeto» em branco — é onde a regra genérica vira a regra DESTA obra (nomes, exemplos, invariantes reais). Skill sem essa parte preenchida rende pela metade.");
    L.push("**Este CEREBRO e as skills se completam:** o CEREBRO define o comportamento base lido sempre; as skills carregam o protocolo detalhado no gatilho. Quando ligar as skills, o assistente as consulta nos gatilhos abaixo em vez de repetir tudo aqui.");
    (sp.skills||[]).forEach(sk => {
      L.push("");
      L.push(`### \`${sk.name}/SKILL.md\``);
      if(sk.gatilho) L.push(`> Aciona quando: ${sk.gatilho}`);
      L.push("```markdown");
      L.push("---");
      L.push(`name: ${sk.name}`);
      L.push(`description: ${sk.description}`);
      L.push("---");
      sk.body.forEach(b => L.push(b));
      L.push("");
      L.push("## Aplicação neste projeto");
      L.push("<!-- Preencha com o específico DESTA obra. Sem isto, a skill roda genérica. -->");
      (sk.applyStub||["- [a preencher]"]).forEach(a => L.push(a));
      L.push("```");
    });
    L.push("");
    L.push("> Depois de instalar e preencher as skills, você pode apagar este apêndice do CEREBRO — ele é um starter, não a fonte viva. As skills passam a ser a fonte do protocolo de escrita.");
  }
  L.push("");
  L.push(`*Gerado pelo Kit de Contexto Universal — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
```

**Substituir por:**
```
  if(skillsPackOn() && niche.skillsPack){
    const sp = niche.skillsPack;
    L.push("");
    L.push("---");
    L.push("");
    L.push("## Skills de escrita (Agent Skills) — pacote separado");
    L.push("");
    L.push(sp.intro);
    L.push("");
    L.push("As skills NÃO vivem neste arquivo — ficam no pacote **`skills.zip`** que o kit gera à parte (botão «Baixar skills (.zip)» na aba de saída). Cada uma carrega sozinha quando seu gatilho dispara (*progressive disclosure*): o corpo pesado não ocupa contexto até ser preciso. Consulte-as nos gatilhos abaixo em vez de reescrever o protocolo aqui.");
    L.push("");
    L.push("| Skill | Aciona quando |");
    L.push("|---|---|");
    (sp.skills||[]).forEach(sk => {
      L.push(`| \`${sk.name}\` | ${sk.gatilho||"—"} |`);
    });
    L.push("");
    L.push("Instalação: descompacte `skills.zip` e mova a pasta `skills/` para **`.claude/skills/`** na raiz do projeto (Claude Code), ou envie cada `SKILL.md` em **claude.ai → Configurações → Skills** (planos pagos). O `README.md` dentro do zip repete estes passos. Cada skill tem uma seção «Aplicação neste projeto» em branco — preencha com o específico da obra antes de usar.");
  }
  L.push("");
  L.push(`*Gerado pelo Kit de Contexto Universal — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
```

## Tarefa B — `src/index.template.html`: `buildSkillMd` + `downloadSkillsZIP`

**Ancora** (o fim da funcao `downloadZIP`, para inserir logo apos):
```
  const blob = await zip.generateAsync({type:"blob"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `kit-${niche.id}-templates.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
```
**Substituir por** (mesma funcao + as duas novas):
```
  const blob = await zip.generateAsync({type:"blob"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `kit-${niche.id}-templates.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
// Renderiza UM SKILL.md a partir do dado da skill (fonte unica: mesma estrutura que ia inline no CEREBRO).
function buildSkillMd(sk){
  const L = [];
  L.push("---");
  L.push(`name: ${sk.name}`);
  L.push(`description: ${sk.description}`);
  L.push("---");
  (sk.body||[]).forEach(b => L.push(b));
  L.push("");
  L.push("## Aplicação neste projeto");
  L.push("<!-- Preencha com o específico DESTA obra. Sem isto, a skill roda genérica. -->");
  (sk.applyStub||["- [a preencher]"]).forEach(a => L.push(a));
  L.push("");
  return L.join("\n");
}
async function downloadSkillsZIP(){
  const niche = getCurrentNiche();
  if(!niche || !niche.skillsPack || !(niche.skillsPack.skills||[]).length) return;
  if(typeof JSZip === "undefined"){
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");
  }
  const sp = niche.skillsPack;
  const zip = new JSZip();
  // estrutura fiel ao formato: skills/<nome>/SKILL.md — arrasta 'skills/' para dentro de .claude/
  sp.skills.forEach(sk => zip.file(`skills/${sk.name}/SKILL.md`, buildSkillMd(sk)));
  const readme = [
    `# Skills de escrita — ${niche.label}`,
    "",
    "Pacote de Agent Skills gerado pelo Kit de Contexto Universal.",
    `Data: ${today}`,
    "",
    "## Como instalar",
    "- **Claude Code:** mova a pasta `skills/` deste zip para dentro de `.claude/` na raiz do projeto — o resultado é `.claude/skills/<nome>/SKILL.md`. (Ou `~/.claude/skills/` para valer em todos os projetos.)",
    "- **claude.ai:** Configurações → Skills → envie cada `SKILL.md` (planos pagos).",
    "",
    "## Antes de usar",
    "Cada skill tem uma seção «Aplicação neste projeto» em branco — preencha com o específico da obra (nomes, exemplos, invariantes). Sem isso, a skill roda genérica.",
    "",
    "## Atenção ao versionar",
    "Se o projeto tiver `.gitignore`, garanta que ele **não** ignore a pasta `.claude/` inteira — as skills devem ser versionadas junto do projeto. Ignore apenas artefatos locais (ex.: caches), nunca `.claude/skills/`.",
    "",
    "## Skills incluídas",
    ...sp.skills.map(sk => `- **${sk.name}** — ${sk.gatilho||""}`),
    ""
  ].join("\n");
  zip.file("skills/README.md", readme);
  const blob = await zip.generateAsync({type:"blob"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `skills.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
```

## Tarefa C — `src/index.template.html`: botao HTML

**Ancora:**
```
      <div class="btnrow" style="margin-bottom:14px">
        <button class="btn" id="dl-all">↓ Baixar todos</button>
        <button class="btn ghost" id="dl-zip">↓ Pacote em ZIP</button>
      </div>
```
**Substituir por:**
```
      <div class="btnrow" style="margin-bottom:14px">
        <button class="btn" id="dl-all">↓ Baixar todos</button>
        <button class="btn ghost" id="dl-zip">↓ Pacote em ZIP</button>
        <button class="btn ghost" id="dl-skills" style="display:none">↓ Baixar skills (.zip)</button>
      </div>
```

## Tarefa D — `src/index.template.html`: visibilidade + wiring do botao

### D1. Visibilidade (no fim de `renderTemplates`)
**Ancora:**
```
  host.querySelectorAll("[data-tpl]").forEach(b => {
    b.addEventListener("click", () => {
      const f = files.find(x => x.name === b.dataset.tpl);
      if(f) downloadFile(f.name, f.content||"");
    });
  });
}
```
**Substituir por:**
```
  host.querySelectorAll("[data-tpl]").forEach(b => {
    b.addEventListener("click", () => {
      const f = files.find(x => x.name === b.dataset.tpl);
      if(f) downloadFile(f.name, f.content||"");
    });
  });
  // Botao de skills so aparece quando o nicho tem skillsPack E o modo skills esta ligado
  const dlSkills = $("#dl-skills");
  if(dlSkills) dlSkills.style.display = (niche && niche.skillsPack && skillsPackOn()) ? "" : "none";
}
```
> Nota: `renderTemplates` ja e chamada na troca de nicho e na troca de toggle (o mesmo ponto que re-renderiza prompts/templates), entao a visibilidade acompanha o estado sem wiring extra.

### D2. Bind do botao (junto dos outros dl-*)
**Ancora:**
```
    const dlZip = $("#dl-zip");
    if(dlZip) dlZip.addEventListener("click", downloadZIP);
```
**Substituir por:**
```
    const dlZip = $("#dl-zip");
    if(dlZip) dlZip.addEventListener("click", downloadZIP);
    const dlSkills = $("#dl-skills");
    if(dlSkills) dlSkills.addEventListener("click", downloadSkillsZIP);
```

## Tarefa E — `validate.js`: SHIM + G6 reescrita

### E1. Exportar `buildSkillMd` no SHIM
**Ancora:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes};';
```
**Substituir por:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd};';
```

### E2. Reescrever o check G6
**Ancora** (o bloco INTEIRO do G6 atual):
```
check("G6 switch skills-pack (narrative: no->sem / yes->4 skills; dev nao tem o toggle)", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.skillsMode = "no";
  const noSk = T.buildClaudeMd(narr);
  T.STATE.topbar.skillsMode = "yes";
  const yesSk = T.buildClaudeMd(narr);
  T.STATE.topbar.skillsMode = "no";
  assert(!/skills de escrita/i.test(noSk), "skillsMode=no nao deveria ter o apendice de skills");
  assert(/skills de escrita/i.test(yesSk), "skillsMode=yes deveria ter o apendice de skills");
  assert(/name: escrita-serial/.test(yesSk) && /name: checagem-continuidade/.test(yesSk) && /name: voz-calibragem/.test(yesSk) && /name: textura-mundo/.test(yesSk), "faltou alguma das 4 skills");
  assert(/Aplicação neste projeto/.test(yesSk), "skill sem a secao 'Aplicacao neste projeto'");
  assert(noSk !== yesSk, "round-trip do skills-pack nao alterou o CEREBRO.md");
  // niche-scoping: o toggle so existe onde o nicho declara skillsPack
  assert((narr.topbar||[]).some(t=>t.id==="skillsMode"), "narrative deveria ter o toggle skillsMode");
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="skillsMode"), "dev NAO deveria ter o toggle skillsMode (nicho sem skillsPack)");
  return "ok";
});
```
**Substituir por:**
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

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js
```
**17/17, 33/33, 0 erros.** Esperado: `N[narrative]` segue em `instr 6688`; o CEREBRO com skills ON cai de +29% para ~+4,4% (so o ponteiro). Depois, ABRA o index.html, nicho **Narrativa & Ficção**, ligue o modo skills e confira: (a) aparece o botao «Baixar skills (.zip)» na aba Templates; (b) baixe e descompacte — a estrutura e `skills/<nome>/SKILL.md` × 4 + `skills/README.md`; (c) o CEREBRO gerado tem so a tabela de gatilhos + instalacao, SEM o corpo das skills e SEM «pode apagar»; (d) o README do zip tem a clausula do `.gitignore`.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-052: «Skills de escrita saem do CEREBRO e viram pacote `skills.zip` separado (botao proprio na aba de saida), estrutura `skills/<nome>/SKILL.md` (arrasta para `.claude/`). CEREBRO fica so com ponteiro (intro + tabela de gatilhos + instalacao): inchaco cai de +29% para +4,4%. Reusa o JSZip do downloadZIP. Q1/Nivel 2 da analise. Zip inclui README com clausula anti-.gitignore de `.claude/`.» **E o principio geral:** «Diretriz KCM: o CEREBRO.md contem SO regras/diretrizes/tecnicas FIXAS — nunca artefatos temporarios nem instrucoes autodestrutivas («apague este bloco»). Qualquer material de instalacao/arranque sai como arquivo/download separado, jamais como bloco-para-remover dentro de um arquivo de regras. (Aplicado as skills nesta spec; o mesmo padrao no Modo Code sera corrigido na spec0026.)»
- **`meta/CHANGELOG.md`** — v1.50.0 no topo.
- **`meta/IDEAS.md`** — registrar que a Q1/Nivel 2 foi aplicada; abrir i-N37 «Modo Code: apendice de arranque vira download (espelho da D-052) — spec0026» como Ativa; nota de que o principio «CEREBRO so com regra fixa» agora e diretriz.
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI a propria spec
```
git add src/index.template.html validate.js index.html meta/specs/260703-spec0023-skills-zip-e-ponteiro.md meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md meta/DECISIONS.md meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md
git commit -m "feat: skills de escrita viram pacote skills.zip separado + ponteiro no cerebro (D-052)" -m "inchaco do cerebro cai de +29% para +4,4%; estrutura skills/<nome>/SKILL.md; reusa JSZip; principio 'cerebro so com regra fixa, sem artefato autodestrutivo'; harness G6 reescrita; 17/17 33/33 0 erros"
git push
```
