# Spec — Download estruturado (projeto novo): zip com árvore de pastas + botão no cluster de ação (i-N36 / analise §1)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html`** → **`node build.js` + `node validate.js` OBRIGATORIOS** (17/17, 0 erros).
> **Harness: sem check novo nem alterado** — segue **35/35**. É aditivo: novas funções de download + botão no cluster; nenhum `build*`/check muda. Como os downloads existentes, a função não é testada no harness (é ação de DOM/blob) — o Code valida **no navegador** (baixar e conferir a árvore). Confirma 35/35 pós-build.
> Aplicar com: **`/apply-spec 260707-spec0034-download-estruturado.md`**
> Config: **Sonnet + esforco Alto** (função grande + 3 helpers + 2 edições no cluster; tudo aditivo, mas confira a árvore do zip no navegador).
> **Diff conferido no chat contra o template vivo v1.57.0** (mount enxuto pós-`.flatdropignore`). Build/harness ficam com o Code.
> Base: `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md` §1 + decisões do usuário. **Aplicar depois da spec0033.** O botão **atualizar** (i-N40) é a spec0035 (entra no mesmo cluster).

## Contexto
Falta a intenção **"projeto novo"**: um download que entrega o projeto **já na árvore de pastas certa**, ciente
da config, para o usuário descompactar e começar — em vez de montar as pastas à mão e rodar o FlatDrop. Os
downloads **granulares** (Baixar todos / ZIP / skills / kit-Code, na aba Templates) **ficam** — são a intenção
"peças avulsas" e o usuário pediu para mantê-los. Este é um botão **novo e separado**, no cluster de ação do
canto (ao lado da engrenagem; o atualizar vem depois).

**Árvore gerada** (`<raiz>` = nome do projeto ou "projeto"):
```
<raiz>/
  INSTRUCOES-DO-PROJETO.md         (sempre — buildInstr)
  meta/  <arquivos de contexto>    (sempre — effectiveFiles, nomes canônicos)
  logs/.gitkeep                    (sempre — pasta vazia persistida)
  .gitignore                       (sempre — enxuto)
  .flatdropignore                  (sempre — afinado ao Projeto do Claude)
  README.md                        (sempre — arranque)
  [se modo Code:]
  CLAUDE.md                        (buildCodeKitFiles.claudeMd)
  .claude/settings.json
  .claude/skills/apply-spec/SKILL.md
  .claude/skills/wrap/SKILL.md
  meta/specs/.gitkeep              (pasta vazia)
  [se skills ligado:]
  .claude/skills/<nome>/SKILL.md   (se Code)  OU  skills/<nome>/SKILL.md (se não)
```

**Decisões fixadas:**
- **Nomes canônicos, sem afixo.** O afixo (`applyAffix`) serve à **atualização** de projeto existente
  (disambiguação — i-N40/spec0035). Um projeto **novo** quer nomes limpos (`CEREBRO.md`, não `x__CEREBRO.md`).
  Então o estruturado **não** aplica afixo.
- **Pastas vazias com `.gitkeep`** — descompactadores e o git nem sempre preservam pasta vazia; o `.gitkeep`
  garante que `logs/` (e `meta/specs/` no modo Code) cheguem.
- **`.flatdropignore` gerado** ignora `logs/` (e `meta/specs/` no modo Code) do upload ao Projeto — sintaxe já
  validada no `flatdrop-kcm.md`; tudo segue versionado no git.
- Botão no **cluster de ação** (canto), reusa `.actbtn` (spec0031) — **sem CSS novo**.

**NAO fazer:** não remover os downloads granulares da aba Templates; não aplicar afixo no estruturado; não
tocar `buildInstr`/`buildClaudeMd`/`buildCodeKitFiles`/`effectiveFiles`/`buildSkillMd` (só são **chamados**).

---

## Tarefa A — botão de download no cluster de ação
**Ancora** (o `actionsClusterHTML` atual, da spec0031):
```
/* Cluster de ação do canto (spec0031). Nasce com a engrenagem; download/atualizar entram nas specs 0033/0034. */
function actionsClusterHTML(){
  return '<div class="actions">'
    + '<button type="button" class="actbtn" id="act-cfg" title="Configurações do projeto" aria-label="Configurações do projeto">⚙</button>'
    + '</div>';
}
```
**substituir-BLOCO por:**
```
/* Cluster de ação do canto (spec0031). Download estruturado (spec0034); atualizar entra na spec0035. */
function actionsClusterHTML(){
  return '<div class="actions">'
    + '<button type="button" class="actbtn" id="act-dl" title="Baixar projeto estruturado (pasta pronta para começar)" aria-label="Baixar projeto estruturado">↓</button>'
    + '<button type="button" class="actbtn" id="act-cfg" title="Configurações do projeto" aria-label="Configurações do projeto">⚙</button>'
    + '</div>';
}
```

## Tarefa B — wiring do botão
**Ancora** (o `wireActions` atual):
```
function wireActions(){
  const g = $("#act-cfg");
  if(g) g.addEventListener("click", () => { const d = $("#cfg-dialog"); if(d && d.showModal) d.showModal(); });
}
```
**substituir-BLOCO por:**
```
function wireActions(){
  const g = $("#act-cfg");
  if(g) g.addEventListener("click", () => { const d = $("#cfg-dialog"); if(d && d.showModal) d.showModal(); });
  const dl = $("#act-dl");
  if(dl) dl.addEventListener("click", downloadStructuredZIP);
}
```

## Tarefa C — funções do download estruturado
**Ancora** (o fim de `downloadCodeKitZIP` — bloco único pelo nome do zip):
```
  a.href = url; a.download = `claude-code-kit.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
```
**inserir-DEPOIS** desse bloco:
```

/* ---- Download estruturado (projeto novo): arvore de pastas ciente da config (spec0034) ---- */
function projectSlug(raw){
  const s = (raw || "").toString().trim().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return s || "projeto";
}
function structuredGitignore(){
  return [
    "# .gitignore — lixo de SO / editor. NAO ignore .claude/, meta/ nem logs/ (versionados de proposito).",
    ".DS_Store", "Thumbs.db", "*.swp", ".vscode/", ".idea/", ""
  ].join("\n");
}
function structuredFlatdropignore(codeOn){
  const L = [
    "# .flatdropignore — enxuga o que sobe ao Projeto do Claude (tudo segue versionado no git).",
    "# Sintaxe .gitignore; salvo na raiz; tem a palavra final sobre o .gitignore.",
    "",
    "# Logs de sessao: o \"agora\" fica no meta/STATUS.md; o diario nao precisa ir ao mount.",
    "logs/", ""
  ];
  if(codeOn){
    L.push("# Specs aplicadas: o desfecho vive em meta/DECISIONS.md e meta/CHANGELOG.md; o corpo pesa.");
    L.push("# (Para estudar uma spec no Projeto, reinclua com !meta/specs/<arquivo>.)");
    L.push("meta/specs/", "");
  }
  return L.join("\n");
}
function structuredReadme(niche, root, codeOn, skillsOn){
  const L = [
    `# ${root} — projeto de contexto (${niche.label})`,
    "", "Estrutura de arranque gerada pelo Kit de Contexto Universal.", `Data: ${today}`, "",
    "## Estrutura",
    "- `meta/` — arquivos de contexto (CEREBRO define COMO o assistente age; CONTEXT, O QUE o projeto e; STATUS/DECISIONS/IDEAS...).",
    "- `INSTRUCOES-DO-PROJETO.md` — cole em Projeto -> Instrucoes no claude.ai (versao curta, lida em toda mensagem).",
    "- `logs/` — um arquivo por sessao (vazia por enquanto)."
  ];
  if(codeOn){
    L.push("- `CLAUDE.md` + `.claude/` — arranque do Claude Code (settings + skills apply-spec/wrap). Ajuste o comando de build no CLAUDE.md e no allow do settings.");
    L.push("- `meta/specs/` — specs de mudanca (vazia por enquanto).");
  }
  if(skillsOn){
    L.push(`- \`${codeOn ? ".claude/skills" : "skills"}/\` — Agent Skills do nicho; cada uma tem «Aplicacao neste projeto» para preencher.`);
  }
  L.push("- `.gitignore` / `.flatdropignore` — o segundo enxuga o que sobe ao Projeto do Claude sem tirar o versionamento.", "",
    "## Como comecar",
    "1. Suba os `meta/` (e o `INSTRUCOES-DO-PROJETO.md`) a um Projeto do claude.ai — ou use o FlatDrop para achatar e subir de uma vez.",
    "2. Cole o `INSTRUCOES-DO-PROJETO.md` em Projeto -> Instrucoes.");
  if(codeOn) L.push("3. Para desenvolver no Claude Code: abra a pasta; o CLAUDE.md guia o resto.");
  L.push("");
  return L.join("\n");
}
async function downloadStructuredZIP(){
  const niche = getCurrentNiche();
  if(!niche || !niche.contextFiles || !niche.contextFiles.length) return;
  if(typeof JSZip === "undefined"){
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");
  }
  const tb = STATE.topbar || {};
  const root = projectSlug(tb.project || tb.projeto || tb.peca || tb.tema || "projeto");
  const codeOn = codeModeOn();
  const skillsOn = skillsPackOn() && niche.skillsPack && (niche.skillsPack.skills || []).length > 0;
  const zip = new JSZip();

  // meta/ — arquivos de contexto do nicho (nomes canonicos, SEM afixo: projeto novo)
  effectiveFiles(niche).forEach(f => zip.file(`${root}/meta/${f.name}`, f.content || ""));
  // Instrucoes na raiz
  zip.file(`${root}/INSTRUCOES-DO-PROJETO.md`, buildInstr(niche));
  // logs/ vazia
  zip.file(`${root}/logs/.gitkeep`, "");

  // Kit do Claude Code (so no modo Code)
  if(codeOn){
    const k = buildCodeKitFiles();
    zip.file(`${root}/CLAUDE.md`, k.claudeMd);
    zip.file(`${root}/.claude/settings.json`, k.settings);
    zip.file(`${root}/.claude/skills/apply-spec/SKILL.md`, k.applySpec);
    zip.file(`${root}/.claude/skills/wrap/SKILL.md`, k.wrap);
    zip.file(`${root}/meta/specs/.gitkeep`, "");
  }
  // Skills do nicho (se ligado): dentro de .claude/ se Code, senao na raiz
  if(skillsOn){
    const base = codeOn ? `${root}/.claude/skills` : `${root}/skills`;
    niche.skillsPack.skills.forEach(sk => zip.file(`${base}/${sk.name}/SKILL.md`, buildSkillMd(sk)));
  }
  // Ignores + README
  zip.file(`${root}/.gitignore`, structuredGitignore());
  zip.file(`${root}/.flatdropignore`, structuredFlatdropignore(codeOn));
  zip.file(`${root}/README.md`, structuredReadme(niche, root, codeOn, skillsOn));

  const blob = await zip.generateAsync({type:"blob"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `${root}.zip`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
```

---

## Tarefa D — harness
**Nada a mudar.** Após `node build.js`: `node validate.js index.html` → **17/17, 35/35, 0 erros**. As funções são
aditivas e só **chamam** builders já cobertos; como os demais downloads, não têm check (são ação de blob).

## Verificação visual (o Code confere no navegador — é a rede desta spec)
1. No canto do topbar, ao lado da engrenagem, aparece o botão **↓** ("Baixar projeto estruturado").
2. Num nicho, preencher o **nome do projeto** (1º campo do topbar). Clicar **↓** baixa `<slug>.zip`.
3. Descompactar e conferir a árvore: `<slug>/meta/CEREBRO.md`… (nomes **sem** afixo), `<slug>/INSTRUCOES-DO-PROJETO.md`, `<slug>/logs/.gitkeep`, `<slug>/.gitignore`, `<slug>/.flatdropignore`, `<slug>/README.md`.
4. **Ligar o modo Code** e baixar de novo: agora vêm `CLAUDE.md`, `.claude/settings.json`, `.claude/skills/apply-spec/SKILL.md`, `.claude/skills/wrap/SKILL.md` e `meta/specs/.gitkeep`; o `.flatdropignore` passa a incluir `meta/specs/`.
5. **Ligar skills:** com Code, as skills do nicho saem em `.claude/skills/<nome>/SKILL.md`; sem Code, em `skills/<nome>/SKILL.md`.
6. Sem nome de projeto: a raiz do zip é `projeto`. Os downloads **granulares** da aba Templates continuam funcionando.

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: download **estruturado** (projeto novo) no cluster de ação — árvore de
  pastas ciente da config (`meta/` + Instrucoes na raiz; `CLAUDE.md`/`.claude/`/`meta/specs/` só no modo Code;
  skills em `.claude/skills` com Code ou `skills/` sem; `logs/` sempre), pastas vazias com `.gitkeep`,
  `.gitignore`/`.flatdropignore` gerados, raiz = nome do projeto (slug) ou "projeto", **nomes canônicos sem
  afixo** (afixo é do fluxo de atualização). Granulares mantidos.
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0034 aplicada (download estruturado + botão no cluster);
  bump minor.

## Próxima spec
- **spec0035 — atualizar (i-N40):** botão **↻** no cluster → `<dialog>` de duas saídas ("Baixar .zip de
  atualização" achatado+afixado+`_UPDATE-MANIFEST.md` + "Copiar prompt"; prompt também no pacote como
  `_UPDATE-PROMPT.md`). É onde o **afixo** volta a valer. A mais pesada; por último.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: download estruturado (projeto novo) + botao no cluster de acao (spec0034)" -m "zip com arvore ciente da config: meta/ + INSTRUCOES na raiz, CLAUDE.md/.claude/ e meta/specs/ so no modo Code, skills em .claude/skills ou skills/, logs/ sempre; pastas vazias com .gitkeep; .gitignore + .flatdropignore gerados; raiz = slug do nome do projeto ou projeto; nomes canonicos sem afixo (afixo e do fluxo de atualizacao); downloads granulares mantidos; harness 35/35 inalterado"
git push
```
