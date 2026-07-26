# spec0045 — Contador de instrução na UI (i-N46) + reconstrução do CHANGELOG (i-N47)

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.68.1` (pós-spec0044, commit `8501307`, pushado), harness 18/18 · 49/49 · 0 erros.
> **Resultado esperado:** **18/18 nichos · 50/50 checagens · 0 erros.**
> **⚠️ Já validado:** Tarefas A–D executadas de verdade numa cópia do repo (build + harness). A Tarefa E
> é doc-only (CHANGELOG).
> **Rode `/check-spec` antes de aplicar.**
>
> **Revisão pós-check-spec (v2):** o `/check-spec` da v1 apontou, com razão, que a Parte 1 prometia «fonte
> única, some o 6900 cravado» mas migrava só **um** dos **três** literais `6900` do `validate.js`. Esta v2
> migra os três (B2 + B4 + B5), honrando a promessa. Sem isso, se `INSTR_TETO` divergisse de 6900 um dia,
> o teto do career (linha 374) derraparia calado.

Duas frentes independentes, uma barata cada. i-N46 dá ao usuário o retorno visual que faltava (ver a
instrução crescer ao marcar chips, em vez de descobrir num harness); i-N47 fecha o buraco v1.54–v1.66 do
CHANGELOG.

---

## PARTE 1 — i-N46: contador de caracteres da instrução na UI

O produto **não tinha** uma constante de teto — os `6900` viviam cravados no `validate.js` (em **três**
lugares). Esta parte cria `INSTR_TETO` no produto, faz **UI e harness lerem dela** (fonte única, os três
literais migrados), e mostra um contador ao lado dos botões Copiar/Baixar da saída.

### Tarefa A — `src/index.template.html`

#### A1 — constante de teto (fonte única)
**Âncora:** `const NICHES = {};`
**Substituir por:**
```javascript
// Teto das Instrucoes do Projeto (lidas em toda mensagem). Fonte unica: UI + harness leem daqui.
const INSTR_TETO = 6900;
const NICHES = {};
```

#### A2 — elemento do contador (ao lado de «Copiar»)
**Âncora:**
```html
              <button class="btn sm" id="copy-instr">⧉ Copiar</button>
```
**Substituir por:**
```html
              <span id="instr-count" class="instr-count" aria-live="polite" title="Tamanho das Instruções — lidas em toda mensagem"></span>
              <button class="btn sm" id="copy-instr">⧉ Copiar</button>
```

#### A3 — CSS do contador (antes da regra `pre{…}`)
**Âncora:** `  pre{background:#0e0b06;`
**Substituir por:**
```css
.instr-count{font:600 11px/1.6 var(--mono,monospace);letter-spacing:.3px;align-self:center;padding:2px 8px;border-radius:999px;border:1px solid var(--line-soft);color:var(--ink-faint);white-space:nowrap}
  .instr-count.ok{color:var(--green);border-color:color-mix(in srgb, var(--green) 40%, transparent)}
  .instr-count.warn{color:var(--amber);border-color:color-mix(in srgb, var(--amber) 45%, transparent)}
  .instr-count.over{color:#fff;background:#ef4444;border-color:#ef4444}
  .instr-count.free{color:var(--ink-faint)}
  pre{background:#0e0b06;
```

#### A4 — função `updateInstrCount` (antes de `updatePreview`)
**Âncora:** `function updatePreview(){`
**Substituir por:**
```javascript
function updateInstrCount(len){
  const el = $("#instr-count");
  if(!el) return;
  if(len < 0){
    el.textContent = "CEREBRO · sem teto";
    el.className = "instr-count free";
    return;
  }
  const pct = Math.round(len / INSTR_TETO * 100);
  el.textContent = len + " / " + INSTR_TETO + " (" + pct + "%)";
  el.className = "instr-count " + (len > INSTR_TETO ? "over" : len > INSTR_TETO * 0.9 ? "warn" : "ok");
  el.title = len > INSTR_TETO
    ? "Acima do teto — as Instrucoes sao lidas em toda mensagem; peca para enxugar (o CEREBRO tem a versao longa)."
    : "Tamanho das Instrucoes do Projeto (lidas em toda mensagem).";
}

function updatePreview(){
```

#### A5 — `updatePreview` chama o contador
**Âncora:**
```javascript
  if(STATE.outTab === "claude"){
    p.textContent = buildClaudeMd(niche);
  } else {
    p.textContent = buildInstr(niche);
  }
  const _asuRem = $("#asu-reminder");
```
**Substituir por:**
```javascript
  const isClaude = STATE.outTab === "claude";
  p.textContent = isClaude ? buildClaudeMd(niche) : buildInstr(niche);
  updateInstrCount(isClaude ? -1 : buildInstr(niche).length);
  const _asuRem = $("#asu-reminder");
```

> **Nota do check-spec:** a linha isolada `if(STATE.outTab === "claude"){` aparece 2× no arquivo, mas o
> **bloco multilinha** desta âncora (terminado em `const _asuRem = $("#asu-reminder");`) é único — a 2ª
> ocorrência é o handler de `dl-instr`, com corpo diferente. A âncora é segura.

> **Comportamento:** aba **Instruções** → «5754 / 6900 (83%)», verde até 90%, âmbar de 90–100%, vermelho
> cheio acima de 100%. Aba **CEREBRO** → «CEREBRO · sem teto» (o CEREBRO é lido sob demanda, não tem teto).
> O contador reage a cada marcação de chip porque `updatePreview` já roda em toda mudança de estado.

### Tarefa B — `validate.js` (fonte única: os TRÊS literais 6900 migram)

#### B1 — expor `INSTR_TETO` no SHIM
**Âncora:**
```javascript
workBadges, buildUpdatePack, buildUpdatePrompt, generatedContextFiles, PROMPTS_BASE};
```
**Substituir por:**
```javascript
workBadges, buildUpdatePack, buildUpdatePrompt, generatedContextFiles, PROMPTS_BASE, INSTR_TETO};
```

#### B2 — o assert do check `N[...]` lê a constante (1º literal, ~linha 188)
**Âncora:**
```javascript
    assert(instr.length <= 6900, "Instrucao excede 6900: " + instr.length);
```
**Substituir por:**
```javascript
    assert(instr.length <= T.INSTR_TETO, "Instrucao excede " + T.INSTR_TETO + ": " + instr.length);
```

#### B3 — novo check **G22** (antes do sumário)
**Âncora:**
```javascript
// ============ SUMARIO ============
```
**Substituir por:**
```javascript
check("G22 contador de instrucao: INSTR_TETO exposto e a UI le dele (i-N46)", () => {
  assert(typeof T.INSTR_TETO === "number" && T.INSTR_TETO >= 6000, "INSTR_TETO ausente ou improvavel");
  const html = fs.readFileSync(path, "utf8");
  assert(/id="instr-count"/.test(html), "elemento do contador ausente no HTML");
  assert(/function updateInstrCount/.test(html), "funcao updateInstrCount ausente");
  assert(/len \/ INSTR_TETO/.test(html), "contador nao usa INSTR_TETO como base");
  return "ok";
});

// ============ SUMARIO ============
```

#### B4 — o assert do teto do **career** lê a constante (2º literal, ~linha 374) — **acréscimo da v2**
**Âncora:**
```javascript
  assert(instr.length <= 6900, "instrucao do career excede 6900: " + instr.length);
```
**Substituir por:**
```javascript
  assert(instr.length <= T.INSTR_TETO, "instrucao do career excede " + T.INSTR_TETO + ": " + instr.length);
```

#### B5 — rótulo do check `N[...]` deixa de cravar 6900 (3º literal, ~linha 182) — **acréscimo da v2**
**Âncora:**
```javascript
  check("N["+id+"] Instr+CEREBRO, teto 6900, universais comprimidos, sem undefined, IDEAS/HUB, chips", () => {
```
**Substituir por:**
```javascript
  check("N["+id+"] Instr+CEREBRO, teto INSTR_TETO, universais comprimidos, sem undefined, IDEAS/HUB, chips", () => {
```

> Depois de B2/B4/B5, `grep -n "6900" validate.js` deve retornar **vazio**. Aí a fonte única é real: mudar
> `INSTR_TETO` num lugar move UI, os checks N e o check do career juntos.

---

## PARTE 2 — i-N47: reconstruir o CHANGELOG (v1.54–v1.66)

O corpo do `meta/CHANGELOG.md` saltava de **v1.53.0 direto para v1.67.0** — 13 versões (v1.54–v1.66) só
existiam no STATUS/DECISIONS. Esta parte as reconstrói a partir do DECISIONS (D-056 a D-068).

> **Não existe v1.64.0:** houve um salto real de numeração no histórico (v1.63.0 → v1.65.0). A nota do topo
> do CHANGELOG registra isso para ninguém procurá-la depois.

### Tarefa C — `meta/CHANGELOG.md`: nota do topo

**Âncora:**
```
> Histórico de versões. Versão atual: **v1.68.1**.
> (Nota: o corpo deste arquivo pulou de v1.53.0 direto para v1.67.0 — as versões intermediárias
> ficaram registradas em `meta/STATUS.md` e `meta/DECISIONS.md`; o CHANGELOG andou atrasado.
> Reconstruir v1.54–v1.66 é a i-N47.)
```
**Substituir por:**
```
> Histórico de versões. Versão atual: **v1.68.1**.
> (v1.54–v1.66 reconstruídas a partir de `meta/DECISIONS.md`/`meta/STATUS.md` na spec0045 — i-N47.
> **Não existe v1.64.0**: houve um salto real de numeração no histórico, de v1.63.0 para v1.65.0.)
```

### Tarefa D — `meta/CHANGELOG.md`: inserir as 12 entradas

Insira o bloco abaixo **imediatamente antes** de:
```
## v1.53.0 — Modo Code: kit de arranque vira download separado
```

**Bloco a inserir (v1.66 → v1.54, ordem decrescente, colando o padrão do arquivo):**

<!-- BLOCO-CHANGELOG-INICIO -->
## v1.66.0 — Prompts de transferência mode-aware; fim do "regenerar os meta no chat" (spec0040, D-068)
- **O achado:** os prompts A–F eram o último subsistema **mode-blind** do KCM. O prompt **E** («Conversa pesada — transferir agora») mandava *"gere todos os arquivos de contexto… o conteúdo COMPLETO de cada um"* — regenerar os meta grandes no pior momento da conversa. Isso já causara perda documentada (num projeto consumidor, uma regeneração do `IDEAS.md` comeu 33 bullets), é destrutivo no modo Code (repo é a verdade + Code faz append → dois escritores) e contradiz o CEREBRO no modo ASU (edições saem por `.yaml`).
- **Correção:** **E e F viram mode-aware.** E passa a gerar o **HANDOFF-BRIEF** (arquivo novo, atalho de arranque — não a memória) e trata o contexto por modo: Code → **não regenerar**, listar o append e exigir commit/push; ASU → edições por `.yaml`; vanilla → **só os arquivos que mudaram** + higiene P12; grupo → empilha o HUB. F vira **ritual de retomada** com precedência explícita: **os arquivos vencem o brief**.
- `PROMPTS_BASE` exposto no SHIM; novo check **G14** trava a regressão (E/F cientes de modo, brief não vence os arquivos).
- Prompts C/D (setup do projeto receptor) ficam para depois — viram a i-N42.
- Harness **17/17, 41/41, 0 erros**.

## v1.65.0 — FIX: ignores faltavam no pacote de atualização (spec0039, D-067)
- **Bug (achado pelo usuário):** `buildUpdatePack` (Fase A do Modo Atualização) empacotava `meta/*`, CEREBRO, INSTRUCOES, skills e kit-Code, mas **não incluía** o `.gitignore` nem o `.flatdropignore` que o download estruturado já gerava. Um projeto que se atualizasse pelo pacote nunca recebia melhorias nesses dois arquivos.
- **Correção:** os dois ignores passam a ser somados sempre, antes do manifesto, reusando `structuredGitignore`/`structuredFlatdropignore` (natureza `template`, nomes planos `gitignore__template-update` / `flatdropignore__template-update`). Downloads granulares seguem só com conteúdo.
- Novo check **G13** trava a presença dos ignores no update-pack.
- Harness **17/17, 40/40, 0 erros**.

## v1.63.0 — Modo Atualização Fase C: gatilho `UPDATE_PROTOCOL` no CEREBRO; fecha a i-N40 (spec0038, D-066)
- `buildClaudeMd` ganha uma seção **incondicional** «Ao receber um template-update do KCM», inserida antes de «Regras de higiene» — vale para **todo** projeto gerado, ligado ou não a modos. É a versão condensada e permanente do prompt da Fase B: ensina a IA-alvo a reconhecer o sufixo `__template-update` + o `_UPDATE-MANIFEST.md` e a rotina **comparar → reportar → nunca-sobrescrever** (novidade útil que falta · choque lado a lado, o usuário decide · o que o projeto tem e o template não cobre). Itens `fusao` (CEREBRO, INSTRUCOES) pedem merge proposto, nunca substituição cega.
- Novo check **G12** trava a presença (`template-update` + regra de não-sobrescrever + distinção `template`/`fusao`).
- **Fecha a i-N40 (Modo Atualização): Fases A + B + C completas.**
- Harness **17/17, 39/39, 0 erros**.

## v1.62.0 — FIX: CEREBRO/INSTRUCOES faltavam nos downloads; fonte única `generatedContextFiles` (spec0037, D-065)
- **Bug (do usuário):** CEREBRO e INSTRUCOES são **gerados** e não vivem em `contextFiles`, então `downloadZIP` / `downloadAllTemplates` / `downloadStructuredZIP` saíam sem eles — o download estruturado vinha sem `meta/CEREBRO.md`.
- **Correção:** helper `generatedContextFiles` vira a **fonte única** (CEREBRO → `meta/`, INSTRUCOES → raiz), consumida pelos três caminhos de download.
- Novo check **G11** trava a regressão.
- Harness **17/17, 38/38, 0 erros**.

## v1.61.0 — Modo Atualização Fase B: `buildUpdatePrompt` + UI (botão ↻ → `<dialog>` de duas saídas) (spec0036, D-064)
- `buildUpdatePrompt(niche)` monta o **disparo humano** que a conversa-alvo executa: compara cada arquivo do pacote com o vivo equivalente e **reporta** (novidade útil · choque lado a lado · o que o template não cobre); nunca sobrescreve conteúdo vivo por template vazio; itens `fusao` pedem merge. **Regra dura: o prompt jamais contém blocos de diff** — é orientação, não uma lista de edições para colar.
- `downloadUpdatePack()` zipa (JSZip) o pacote achatado + `_UPDATE-MANIFEST.md` + `_UPDATE-PROMPT.md` como `<nicho>-template-update.zip`. UI: botão **↻** (`#act-upd`) no cluster de ação abre `<dialog id="upd-dialog">` com a linha de status dos modos ligados no momento do clique e duas ações (baixar zip / copiar prompt). O `<dialog>` fica **antes do `<script>`** (lição D-059).
- Novo check **G10** trava a regra dura (prompt não vazio, com rotina de comparação e de não-sobrescrever, e **sem** bloco de código).
- Harness **17/17, 37/37, 0 erros**.

## v1.60.0 — Modo Atualização Fase A: motor `buildUpdatePack` (achatado + afixado + manifesto) (spec0035, D-063)
- Motor da i-N40: `buildUpdatePack` monta o pacote de atualização de um projeto KCM existente — arquivos **achatados** e **afixados** (`__template-update`) + `_UPDATE-MANIFEST.md`, com natureza `template`/`fusao`. Resolve a colisão real: `downloadZIP` já achatava+afixava os `meta/*.md`, mas skills/kit-Code saíam em subpastas sem afixo, colidindo quando o Projeto do Claude achata tudo (vários `SKILL.md` iguais).
- Novo check **G9**; Fases B (prompt + UI) e C (gatilho no CEREBRO) vêm nas specs seguintes.
- Harness **17/17, 36/36, 0 erros**.

## v1.59.0 — Campos de nicho entram na saída; bloco "Contexto do projeto" no `buildInstr` (spec0033, D-061)
- **Achado:** campos de nicho como `genreSel`/`engineSel`/`phase` eram preenchidos na UI mas **não moldavam a saída** — o gênero multi da spec0032 era só cosmético. `buildInstr` ganha um bloco **«Contexto do projeto»** que injeta os campos de topbar/builder preenchidos, guardado por presença de valor (topbar vazia não emite nada, o teto 6900 segue intacto).
- Conserta também o desencontro `phase`/`fase` — a Fase nunca aparecia na linha Estágio.
- **Fecha a i-N41.**
- Harness **17/17, 35/35, 0 erros**.

## v1.58.0 — Download estruturado (projeto novo): árvore de pastas ciente da config (spec0034, D-062)
- Novo botão **↓** (`#act-dl`) no cluster de ação chama `downloadStructuredZIP` — a intenção **"projeto novo"**: entrega o projeto já na árvore certa (raiz = slug do projeto) — `meta/` (nomes canônicos, sem afixo) + `INSTRUCOES-DO-PROJETO.md` na raiz + `logs/.gitkeep`; com Modo Code, soma `CLAUDE.md` + `.claude/…` + `meta/specs/.gitkeep`; skills do nicho conforme ligadas; `.gitignore` + `.flatdropignore` gerados na hora + `README.md`. O afixo **não** é aplicado (nomes limpos são a intenção de projeto novo).
- Os downloads granulares (aba Templates) ficam — são a intenção "peças avulsas".
- Harness **17/17, 35/35, 0 erros** (funções aditivas, verificadas no navegador com JSZip).

## v1.57.0 — Sistema de campos ganha `multi`/`segmented`, roteados ao modal (spec0032, D-060)
- Novos tipos de campo: **`multi`** (chips aditivos, valor-lista) e **`segmented`** (chip de escolha única), roteados ao modal por `panel:"modal"`. Pesquisa fixou que multi-seleção com opções visíveis pede chips, não dropdown, e que campos numerosos/defina-e-esqueça pertencem ao modal, não à topbar apertada.
- **Gênero de jogo** vira `multi`. Aplicada depois da spec0031 (modal/dialog já existente).
- Harness **17/17, 35/35, 0 erros** (campos de topbar ainda não entravam na saída — isso vem na spec0033).

## v1.56.0 — Cluster de ação no canto + modal `<dialog>` de configuração; afixo migra para o modal (spec0031, D-059)
- O canto do topbar vira **cluster de ação** (substitui o `.sync-note` redundante) com a engrenagem **⚙** abrindo um **modal `<dialog>`** de configuração; o **afixo** migra da aba Templates para a seção Projeto do modal.
- **D-059 (armadilha registrada):** a spec mandava inserir o `<dialog>` depois do `</script>` final; verificação no navegador expôs que isso quebra a fiação — `boot()` roda síncrono no fim do `<script>` e o `<dialog>`, por vir depois, ainda não existia no DOM, deixando listeners anexados em `null` (o Esc nativo do `<dialog>` mascarava o bug). Correção: o bloco foi movido para **antes** do `<script>`. É a lição que vira o futuro check G17.
- Harness **17/17, 35/35, 0 erros** (UI + realocação de HTML; nenhum `build*`/estado muda).

## v1.55.0 — Modos viram botões-toggle no topbar sticky; painel e selos saem (spec0030, D-058)
- Os 3 modos (`groupMode`/`codeMode`/`asuMode`) saem do painel `<details class="workmode">` (D-056) e dos selos perto da saída (D-057) e passam a viver como um **cluster de botões-toggle** (`.modebtn`, `aria-pressed`) dentro do `#topbar`, herdando o `position:sticky` — fixos ao rolar. Ativo, o botão enche com a cor do modo (Grupo verde, **Code laranja de verdade** via nova variável `--code:#e8823a`, ASU teal) + rótulo; lê em escala de cinza. Descrições viram tooltip própria (`.tip`, hover/focus, `pointer-events:none`, `aria-describedby` → `role="tooltip"`).
- Corrige três dores do feedback: selos invisíveis, «Code não ficou laranja», painel que sumia ao rolar. `workBadges()` passa a ler a fonte única `WORK_MODES`.
- Harness **17/17, 35/35, 0 erros** (check G8 mantido).

## v1.54.0 — Selos de estado multicanal e refino dos modos (spec0028/spec0029, D-056/D-057)
- **D-056:** os 3 modos universais migram do topbar para o painel global recolhível «Modo de trabalho» (`STATE.workmode`) — toggles soltos no topbar davam clique-errado; segmented control refutado (os modos coexistem).
- **D-057:** cada modo ligado ganha um **selo multicanal** acima do preview — nunca cor sozinha (WCAG 1.4.1): cor (`--sc`) + glifo (`.g`) + rótulo; contraste no contorno e texto (fundo transparente), ordem estável grupo → Code → ASU. `workBadges()` é a fonte pura (testável), `renderWorkBadges()` espelha no DOM.
- Novo check **G8**. *(Esta base foi logo revista pela spec0030/D-058, que devolveu os modos ao topbar como botões-toggle.)*
- Harness **17/17, 34/34, 0 erros**.
<!-- BLOCO-CHANGELOG-FIM -->

> As duas linhas de comentário HTML `<!-- BLOCO-CHANGELOG-… -->` são só marcadores desta spec — **não as
> inclua** no arquivo. Cole apenas o conteúdo entre elas.

---

## Tarefa E — docs (append)

- **`meta/DECISIONS.md` → D-076:** produto ganha a constante `INSTR_TETO` (fonte única de teto; UI e harness
  leem dela — os três literais `6900` do `validate.js` migrados); contador de instrução na saída
  (verde/âmbar/vermelho por %, «sem teto» no CEREBRO); check G22. **D-077:** CHANGELOG reconstruído
  (v1.54–v1.66) a partir do DECISIONS; registrado o salto real de numeração (não há v1.64).
- **`meta/IDEAS.md`:** **i-N46** e **i-N47** → **FECHADAS**.
- **`meta/STATUS.md`:** v1.68.1 → **v1.69.0** (minor: nova capacidade de UI + constante de produto); testes
  **18/18 · 50/50 · 0 erros**. Na linha de método, trocar «teto 6900» por «teto `INSTR_TETO` (6900)».
- **`meta/CHANGELOG.md`:** entrada da v1.69.0 (esta sessão) no topo, além da reconstrução.

---

## Verificação

1. `/check-spec meta/specs/260714-spec0045-contador-changelog.md` → APLICÁVEL (a ressalva da v1 foi
   incorporada; não deve sobrar ressalva sobre os `6900`).
2. `node build.js` → 18 módulos · `node validate.js index.html` → **18/18 · 50/50 · 0 erros** (o hook roda
   isso sozinho).
3. `grep -n "6900" validate.js` → **vazio** (prova da fonte única).
4. **Visual:** abra o `index.html`; na saída, aba **Instruções**, o contador aparece ao lado de «Copiar» e
   muda ao marcar/desmarcar chips no modal; troque para a aba **CEREBRO** → vira «CEREBRO · sem teto».
   Marque chips até passar de 100% em algum nicho e confirme que o selo fica **vermelho**.
5. `meta/CHANGELOG.md`: `grep -oE 'v1\.[0-9]+\.[0-9]+' meta/CHANGELOG.md | sort -u -V` deve mostrar a
   sequência contínua de v1.53 a v1.69 **sem v1.64**.
6. `git diff --stat` — aditivo.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/specs/260714-spec0045-contador-changelog.md
git commit -m "feat(ui+docs): contador de instrucao com INSTR_TETO como fonte unica + reconstrucao do CHANGELOG (spec0045, D-076/D-077)

- i-N46: INSTR_TETO no produto (UI e harness leem dele; os 3 literais 6900 do validate.js migrados);
  contador na saida (verde/ambar/vermelho por %, 'sem teto' na aba CEREBRO); novo check G22
- i-N47: CHANGELOG reconstruido v1.54-v1.66 a partir do DECISIONS; registrado o salto real (nao ha v1.64)
- 18/18, 50/50, 0 erros"
git push
```
