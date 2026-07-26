# spec0046 — Prompts de setup mode+entrega-aware (i-N42) + carimbo de versão (i-N10) + `_MANIFEST` na retomada

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.69.0` (pós-spec0045, commit `5752c20`, pushado), harness 18/18 · 50/50 · 0 erros.
> **Resultado esperado:** **18/18 nichos · 52/52 checagens · 0 erros.**
> **⚠️ Já validado:** todas as âncoras e os dois checks foram executados de verdade numa cópia do repo
> (build + harness + render dos prompts nos 3 modos via jsdom). Os corpos de C/D abaixo são cópia literal
> do que passou.
> **Rode `/check-spec` antes de aplicar.**

Três frentes numa spec (a análise `260715-ANALISE-PROMPTS-SETUP.md` já mapeou tudo):
1. **i-N42** — prompts C e D deixam de ser cegos a modo e a formato de entrega, e ganham títulos claros.
2. **i-N10** — o produto passa a expor `KIT_VERSION`; a versão aparece no rodapé e carimba os downloads.
3. **F** — o ritual de retomada passa a começar pelo `_MANIFEST.md` (a mesma consciência de C/D).

---

## PARTE 1 — i-N10: `KIT_VERSION` (fonte única de versão)

O produto **não tinha** constante de versão — o rodapé mostrava um `v1` cravado e os READMEs dos downloads
diziam «Kit de Contexto Universal» sem versão. Espelha o que a spec0045 fez com `INSTR_TETO`.

### Tarefa A — `src/index.template.html`

#### A1 — constante + helper (logo depois de `INSTR_TETO`)
**Âncora:** `const INSTR_TETO = 6900;`
**Substituir por:**
```javascript
const INSTR_TETO = 6900;
// Versao do kit (i-N10). Fonte unica: rodape da UI + carimbo dos downloads.
const KIT_VERSION = "1.70.0";
// Linha de credito padrao dos artefatos gerados (README, manifestos).
function kitStamp(){ return `Gerado pelo Kit de Contexto Universal v${KIT_VERSION} — ${today}.`; }
```

#### A2 — rodapé usa a versão real
**Âncora:** ``  $("#foot-niche").textContent = `${niche.label} · v1`;``
**Substituir por:** ``  $("#foot-niche").textContent = `${niche.label} · v${KIT_VERSION}`;``

#### A3 — README dos Templates (`downloadZIP`)
**Âncora:** ``Gerado por: Kit de Contexto Universal\nData: ${today}``
**Substituir por:** ``Gerado por: Kit de Contexto Universal v${KIT_VERSION}\nData: ${today}``

#### A4 — README das skills
**Âncora:** `    "Pacote de Agent Skills gerado pelo Kit de Contexto Universal.",`
**Substituir por:** `    \`Pacote de Agent Skills gerado pelo ${kitStamp()}\`,`

#### A5 — README do kit do Claude Code
**Âncora:** `    "Gerado pelo Kit de Contexto Universal.",`
**Substituir por:** `    \`${kitStamp()}\`,`

#### A6 — `structuredReadme`
**Âncora:** ``    "", "Estrutura de arranque gerada pelo Kit de Contexto Universal.", `Data: ${today}`, "",``
**Substituir por:** ``    "", `Estrutura de arranque gerada pelo Kit de Contexto Universal v${KIT_VERSION}.`, `Data: ${today}`, "",``

#### A7 — rodapé do template `INSTRUCOES-DO-PROJETO`
**Âncora:**
```javascript
  L.push(`*Gerado pelo Kit de Contexto Universal — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
```
**Substituir por:**
```javascript
  L.push(`*Gerado pelo Kit de Contexto Universal v${KIT_VERSION} — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
```

#### A8 — `_UPDATE-MANIFEST` carimba a versão
**Âncora:**
```javascript
  L.push(`- Nicho: ${niche.label}`);
  L.push(`- Modos ligados: skills ${skillsOn ? "sim" : "nao"} · Code ${codeOn ? "sim" : "nao"}`);
  L.push(`- Data: ${today}`);
```
**Substituir por:**
```javascript
  L.push(`- Nicho: ${niche.label}`);
  L.push(`- Kit: v${KIT_VERSION}`);
  L.push(`- Modos ligados: skills ${skillsOn ? "sim" : "nao"} · Code ${codeOn ? "sim" : "nao"}`);
  L.push(`- Data: ${today}`);
```

> **`KIT_VERSION` = "1.70.0"**: esta spec entrega a v1.70.0, então a constante nasce já com o valor
> que o STATUS/CHANGELOG vão registrar. **A partir daqui, todo bump de versão mexe nesta constante** —
> anote isso no CEREBRO/BUILD como parte do ritual de release (vira a i-N50, ver Tarefa E).

---

## PARTE 2 — i-N42: prompts C e D mode+entrega-aware, com títulos claros

### Tarefa B — `src/index.template.html`: reescrever o prompt **C**

**Âncora (bloco atual inteiro do C):**
```javascript
  { id:"C", title:"Projeto novo, do zero",
    when:"Primeira sessão de um projeto que ainda não existe.",
    fill:"about", fillLabel:"Sobre o projeto (o que é, para quem, suas ideias, o que fazer primeiro)",
    body:(p,n)=>{
      const files = n.contextFiles.map(f=>f.name).join(", ");
      return `Vou iniciar um novo projeto${p.project?` (${p.project})`:""} no domínio "${n.label}". Ajude a desenvolver e a criar a documentação de contexto para eu transitar entre conversas sem perder nada.\n\nSOBRE O PROJETO:\n${p.about||"[Escreva tudo: o que é, para quem, suas ideias, o que fazer primeiro]"}\n\nAO FINAL, gere preenchidos (sem os comentários de exemplo, só conteúdo real):\n${files}, logs/${today}.md.\nProntos para subir no repositório e usar como contexto na próxima conversa.`;
    } },
```
**Substituir por:**
```javascript
  { id:"C", title:"Começar um projeto do zero com o KCM",
    when:"Primeira sessão de um projeto que ainda não existe.",
    fill:"about", fillLabel:"Sobre o projeto (o que é, para quem, suas ideias, o que fazer primeiro)",
    body:(p,n)=>{
      const files = n.contextFiles.map(f=>f.name).join(", ");
      const L = [];
      L.push(`Vou iniciar um novo projeto${p.project?` (${p.project})`:""} no domínio "${n.label}". Ajude a desenvolver a ideia e a criar a documentação de contexto para eu transitar entre conversas sem perder nada.`);
      L.push("");
      L.push("SOBRE O PROJETO:");
      L.push(p.about||"[Escreva tudo: o que é, para quem, suas ideias, o que fazer primeiro]");
      L.push("");
      L.push(`AO FINAL, gere preenchidos (sem os comentários de exemplo, só conteúdo real): ${files}, logs/${today}.md.`);
      if(codeModeOn()){
        L.push("");
        L.push("**Modo Code:** este projeto vai virar um repositório. Organize a saída na árvore certa — `meta/` para os arquivos de contexto, `INSTRUCOES-DO-PROJETO.md` na raiz, `logs/` para os diários — e feche com o `git init` + primeiro commit prontos. (Se eu preferir a árvore pronta em zip, o botão ↓ do KCM já entrega tudo estruturado — me lembre disso.)");
      } else if(asuModeOn()){
        L.push("");
        L.push("**Modo ASU:** projeto novo não tem o que editar — gere os arquivos inteiros normalmente nesta primeira leva.");
      } else {
        L.push("Prontos para eu subir a um Projeto do claude.ai (ou versionar) e usar como contexto na próxima conversa.");
      }
      return L.join("\n");
    } },
```

### Tarefa C — `src/index.template.html`: reescrever o prompt **D**

**Âncora (bloco atual inteiro do D):**
```javascript
  { id:"D", title:"Projeto existente — adicionar o sistema",
    when:"Projeto em andamento que ainda não tem os arquivos de contexto.",
    fill:"situation", fillLabel:"Situação atual",
    body:(p,n)=>{
      const files = n.contextFiles.map(f=>f.name).join(", ");
      return `Quero organizar este projeto${p.project?` (${p.project})`:""} de "${n.label}" com um sistema de documentação para transitar entre conversas sem perder contexto.\n\nSITUAÇÃO ATUAL:\n${p.situation||"[O que já foi feito, o que funciona/está pendente, principais decisões já tomadas]"}\n\nMATERIAL ATUAL:\n[Anexe os arquivos relevantes ou descreva o que existe]\n\nGere preenchidos com a realidade atual:\n${n.contextFiles.map(f=>`- ${f.name} (${f.role})`).join("\n")}\n- logs/${today}.md`;
    } },
```
**Substituir por:**
```javascript
  { id:"D", title:"Adotar o KCM num projeto já em andamento",
    when:"Projeto que já existe (script, planejamento, material) e ainda não tem os arquivos de contexto.",
    fill:"situation", fillLabel:"Situação atual",
    body:(p,n)=>{
      const L = [];
      L.push(`Quero organizar este projeto${p.project?` (${p.project})`:""} de "${n.label}" com um sistema de documentação para transitar entre conversas sem perder contexto.`);
      L.push("");
      L.push("SITUAÇÃO ATUAL:");
      L.push(p.situation||"[O que já foi feito, o que funciona/está pendente, principais decisões já tomadas]");
      L.push("");
      L.push("MATERIAL ATUAL:");
      L.push("[Anexe os arquivos relevantes ou descreva o que existe]");
      L.push("");
      L.push("Antes de gerar qualquer coisa: **se eu anexei um `_MANIFEST.md`** (o mapa de um pacote estruturado — download ↓ do KCM ou FlatDrop), ele é a fonte de verdade de nomes e estrutura. Leia por ele, entenda o que JÁ veio pronto e **não regenere o que já existe** — só complemente o que falta. Sem `_MANIFEST.md`, trate o material como arquivos soltos.");
      if(codeModeOn()){
        L.push("");
        L.push("**Modo Code:** o repositório é a verdade. Leia o que já está versionado e ACRESCENTE os arquivos de contexto que faltam — não reescreva o que existe.");
      } else if(asuModeOn()){
        L.push("");
        L.push("**Modo ASU:** mudanças em arquivos que já existem saem como instrução `.yaml`, não como arquivo inteiro. Arquivos novos (os de contexto que ainda não existem) vêm inteiros.");
      }
      L.push("");
      L.push("Gere preenchidos com a realidade atual (só os que ainda não existem, ou complementando os que vieram incompletos):");
      L.push(n.contextFiles.map(f=>`- ${f.name} (${f.role})`).join("\n"));
      L.push(`- logs/${today}.md`);
      return L.join("\n");
    } },
```

> **Títulos** (a confusão que a i-N42 corrige): C vira **«Começar um projeto do zero com o KCM»**, D vira
> **«Adotar o KCM num projeto já em andamento»** — o eixo fica explícito no próprio rótulo, como o usuário
> pediu. Os corpos ganham ramos `codeModeOn()`/`asuModeOn()` e D detecta o `_MANIFEST.md` (lê pelo mapa,
> não regenera). Nenhuma lógica de detecção nova: reusa a consciência que já vive no CEREBRO.

---

## PARTE 3 — F cita o `_MANIFEST.md` na retomada

### Tarefa D — `src/index.template.html`: novo passo no ritual de F

**Âncora:**
```javascript
      steps.push("Leia os arquivos de contexto: primeiro o que define seu comportamento, depois o estado atual, as decisões e o que ficou pendente.");
```
**Substituir por:**
```javascript
      steps.push("Se houver um `_MANIFEST.md` no material (pacote estruturado — download ↓ do KCM ou FlatDrop), use-o como mapa de nomes e estrutura antes de deduzir qualquer caminho.");
      steps.push("Leia os arquivos de contexto: primeiro o que define seu comportamento, depois o estado atual, as decisões e o que ficou pendente.");
```

### Tarefa E — `src/index.template.html`: texto-guia da view Prompts

**Âncora:**
```html
<p class="lede"><b>A–F</b> são universais (existem em todo nicho). <b>G em diante</b> são específicos deste nicho. Os campos lá em cima já entram automaticamente; onde houver caixa, o que você escrever substitui o marcador — se deixar vazio, o marcador permanece.</p>
```
**Substituir por:**
```html
<p class="lede"><b>A–F</b> são universais (existem em todo nicho): <b>A/B</b> dia a dia, <b>C</b> começa um projeto do zero com o KCM, <b>D</b> adota o KCM num projeto que já existe (se você já subiu o material estruturado, com <code>_MANIFEST.md</code>, o D lê pelo mapa em vez de recriar), <b>E/F</b> transferem entre conversas. <b>G em diante</b> são específicos deste nicho. Os campos lá em cima já entram automaticamente; onde houver caixa, o que você escrever substitui o marcador — vazio, o marcador permanece.</p>
```

---

## Tarefa F — `validate.js`: dois checks

### F1 — expor `KIT_VERSION` no SHIM
**Âncora:**
```javascript
generatedContextFiles, PROMPTS_BASE, INSTR_TETO};
```
**Substituir por:**
```javascript
generatedContextFiles, PROMPTS_BASE, INSTR_TETO, KIT_VERSION};
```

### F2 — G23 e G24 (antes do sumário)
**Âncora:**
```javascript
// ============ SUMARIO ============
```
**Substituir por:**
```javascript
check("G23 prompts de setup mode+entrega-aware (i-N42): C/D com ramos por modo, D e F citam _MANIFEST", () => {
  const byId = id => T.PROMPTS_BASE.find(x => x.id === id);
  const C = byId("C"), D = byId("D"), F = byId("F");
  assert(C && D && F, "prompt C, D ou F ausente");
  const cSrc = C.body.toString(), dSrc = D.body.toString(), fSrc = F.body.toString();
  ["codeModeOn","asuModeOn"].forEach(m => {
    assert(cSrc.includes(m), "prompt C nao ramifica por " + m);
    assert(dSrc.includes(m), "prompt D nao ramifica por " + m);
  });
  assert(/_MANIFEST/.test(dSrc), "prompt D nao menciona _MANIFEST.md");
  assert(/_MANIFEST/.test(fSrc), "prompt F nao menciona _MANIFEST.md na retomada");
  assert(/zero/i.test(C.title), "titulo de C nao deixa claro 'do zero'");
  assert(/andamento|existe|existente/i.test(D.title), "titulo de D nao deixa claro 'projeto existente'");
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.workmode = { codeMode:"yes" };
  const dCode = D.body({}, dev);
  assert(/Modo Code/.test(dCode), "ramo code de D nao disparou (estado workmode)");
  T.STATE.workmode = { asuMode:"yes" };
  const dAsu = D.body({}, dev);
  assert(/Modo ASU/.test(dAsu), "ramo asu de D nao disparou");
  T.STATE.workmode = {};
  return "ok";
});

check("G24 KIT_VERSION exposto, no rodape e carimbado nos downloads (i-N10)", () => {
  assert(typeof T.KIT_VERSION === "string" && /^\d+\.\d+\.\d+$/.test(T.KIT_VERSION), "KIT_VERSION ausente ou fora do padrao semver");
  const html = fs.readFileSync(path, "utf8");
  assert(/KIT_VERSION/.test(html), "KIT_VERSION nao aparece no bundle");
  assert(/\$\{KIT_VERSION\}`;/.test(html), "rodape nao usa KIT_VERSION");
  assert(/function kitStamp/.test(html), "helper kitStamp ausente");
  assert(/Kit de Contexto Universal v\$\{KIT_VERSION\}/.test(html), "downloads nao carimbam a versao");
  return "ok";
});

// ============ SUMARIO ============
```

---

## Tarefa G — docs (append)

- **`meta/DECISIONS.md` → D-078:** i-N42 — prompts C/D mode+entrega-aware; títulos explícitos («Começar do
  zero com o KCM» / «Adotar o KCM num projeto em andamento»); D e F detectam `_MANIFEST.md` (lê pelo mapa,
  não regenera), reusando a consciência que já vivia no CEREBRO. **D-079:** i-N10 — `KIT_VERSION` como fonte
  única de versão (rodapé + carimbo dos downloads + `_UPDATE-MANIFEST`); helper `kitStamp()`.
- **`meta/IDEAS.md`:** **i-N42** e **i-N10** → **FECHADAS**. Registrar:
  - **i-N50 — bump de versão faz parte do release:** todo release passa a atualizar `KIT_VERSION` no
    `src/index.template.html` junto com STATUS/CHANGELOG. Anotar no CEREBRO/BUILD como passo do ritual.
  - **i-N51 — `custom` sem prompts G+:** o nicho «Personalizado» não tem nenhum prompt específico; avaliar
    um prompt genérico de «defina o próprio fluxo». Baixa prioridade.
  - **i-N52 — consistência de contrato dos G+:** check de harness confirmando que todo prompt que pede
    entrada declara `fill`/`fillLabel`. Baixa prioridade.
- **`meta/STATUS.md`:** v1.69.0 → **v1.70.0** (minor: prompts + versão exposta); testes **18/18 · 52/52 · 0
  erros**.
- **`meta/CHANGELOG.md`:** entrada da v1.70.0.

---

## Verificação

1. `/check-spec meta/specs/260715-spec0046-prompts-setup-versao.md` → APLICÁVEL.
2. `node build.js` → 18 módulos · `node validate.js index.html` → **18/18 · 52/52 · 0 erros** (o hook roda
   sozinho).
3. **Visual:** abra o `index.html`; o rodapé da coluna esquerda mostra **«Dev · v1.70.0 · pt-BR»** (não
   mais «v1»). Na view Prompts, os cards **C** e **D** têm os títulos novos; copie o **D** com o Modo Code
   ligado e confira o parágrafo «Modo Code»; ligue ASU e confira o «Modo ASU». Baixe um pacote (↓ ou aba
   Templates) e confirme que o README diz **«v1.70.0»**.
4. `git diff --stat` — aditivo.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md \
        meta/specs/260715-spec0046-prompts-setup-versao.md
git commit -m "feat(prompts+versao): C/D mode+entrega-aware, _MANIFEST na retomada, KIT_VERSION exposto (spec0046, D-078/D-079)

- i-N42: prompt C 'Comecar do zero com o KCM' e D 'Adotar o KCM num projeto em andamento' ganham ramos
  por modo (code/asu) e deteccao de _MANIFEST.md (le pelo mapa, nao regenera); texto-guia da view atualizado
- F: ritual de retomada comeca pelo _MANIFEST.md quando o material veio estruturado
- i-N10: KIT_VERSION como fonte unica (rodape v1.70.0 + carimbo nos READMEs e no _UPDATE-MANIFEST); kitStamp()
- G23 (prompts de setup) e G24 (versao) -> 18/18, 52/52, 0 erros"
git push
```
