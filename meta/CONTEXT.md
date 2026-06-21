# CONTEXT.md — Kit de Contexto Modular (KCM)

> O **passaporte** do projeto. Leia primeiro. Estável — muda pouco.
> Meta deste arquivo: uma conversa NOVA entende o projeto inteiro e navega o código sem precisar de mais nada.
> Versão de referência: **v1.34.0** · produto = um `index.html` (~581 KB) **gerado** de `src/` · **17/17 nichos, 0 erros** + **~32 checagens** no harness.
> (Histórico de versões fica no CHANGELOG; o "porquê" de cada escolha, no DECISOES; o estado atual, no STATUS; ideias no IDEIAS.)
>
> **Mudanças nesta revisão (v1.34.0):** o projeto deixou de ser um HTML único editado à mão e passou a ser **modular** — o `index.html` é **gerado** de `src/index.template.html` (casco) + 17 módulos `src/niches/*.js` via `build.js` (D-028). O **cérebro gerado** foi renomeado de `CLAUDE.md` → `CEREBRO.md` (D-029). Entrou o switch **"Saída via ASU (patch)"** (asuMode) e o **build escreve na raiz**. O **desenvolvimento migrou para o Claude Code** (§ novo "Desenvolvimento"). Nada de conteúdo se perdeu desta regeneração.

---

## 1. O que é o projeto

O **Kit de Contexto Modular (KCM)** é um **único `index.html`** (vanilla JS no lado do usuário, sem build, sem deps de runtime além de JSZip via CDN) que ajuda pessoas a **manter contexto entre conversas com o Claude**. Problema que resolve: conversa longa com IA vira "papão de token" e, ao trocar de conversa, perde-se todo o contexto (decisões, ideias, estado).

Solução: o kit gera **arquivos vivos** (`CONTEXT.md`, `STATUS.md`, `DECISOES.md`, etc.) que o usuário sobe num Projeto do Claude.ai (ou anexa) e que fazem a IA se ambientar na hora. São **17 nichos** (16 de conteúdo + **1 construtor** `custom`). Cada nicho gera dois artefatos adaptados ao domínio: as **Instruções do Projeto** (curtas, lidas em toda mensagem) e um **`CEREBRO.md` completo** (subido como arquivo; antes chamado `CLAUDE.md` — renomeado na v1.34.0, D-029).

Três capacidades hoje: **(1) manter contexto** (os arquivos vivos + logs); **(2) o kit DESENVOLVE** (narrative escreve sob direção; game cria/codifica — D-023); **(3) coordenar grupos** (HUB com Cânone Central — D-024/025/026/027).

**Ecossistema de 3 ferramentas do usuário (o "toolchain"):** **KCM** (este — o gerador), **ASU** (Atualizador Automático de Scripts — ferramenta Python que aplica patches YAML cirúrgicos com schema+diff+backup+rollback; v0.6.0, tem GUI PySide6) e **FlatDrop** (achata repos para upload no Projeto, gera `_MANIFEST.md`). Os três se coordenam por contratos (ver "HUB" abaixo e i-N27 no IDEIAS).

O kit é dogfooding: este projeto é gerenciado pelos arquivos que ele prega — e a v1.34.0 foi além: **o próprio Claude Code aplicou um spec do chat** (rename CLAUDE→CEREBRO) com 17/17 + 32/32, provando o protocolo de raias (ver "Desenvolvimento").

## 2. Stack e arquitetura

**Produto (lado do usuário): um arquivo.** O `index.html` final é HTML + CSS + JS inline, sem framework, **sem build no lado do usuário** — roda em `file://` e no GitHub Pages. Isso é o invariante D-001 (preservado).

**Dev (como o arquivo é feito): modular (v1.34.0, D-028).** O `index.html` é **gerado** de:
- `src/index.template.html` — o **casco** (HTML/CSS/JS comum, sem os dados de nicho).
- `src/niches/<id>.js` — **17 módulos**, um por nicho (os objetos `NICHES.<id>`).
- `build.js` — concatenador Node puro (lê `build-manifest.json`, falha ruidosa se faltar peça) que remonta o `index.html` **na raiz** do repo.
- `validate.js` — o **harness** (jsdom): extrai o `<script>`, troca `boot()` por um shim, roda os 17 nichos e ~32 checagens de conteúdo. `npm install jsdom` se faltar (declarado em `package.json`).
- `build-manifest.json` — lista os módulos na ordem do build.
- Saída byte-idêntica à v1.33.0 com tudo desligado — o produto continua 1 arquivo único.

**Repo e estrutura:** diretório de trabalho `Contexto/contexto-modular/` (download do GitHub vira `contexto-modular-main`). Push para `origin/main`. Estrutura: `index.html` na raiz, `src/` (casco + módulos), `meta/` (os `.md` de contexto, incl. `meta/specs/`), `logs/`, `.claude/settings.json` (permissões do Claude Code), `CLAUDE.md` na raiz (arquivo-raiz do Code — ≠ do `CEREBRO.md`), `HUB.md` na raiz, `validate.js`, `build.js`, `build-manifest.json`, `package.json`. `.gitignore` ignora `rascunhos/ backups/ dist/ node_modules/` (e NÃO `instrucoes/`). **Hospedagem:** GitHub Pages servindo o `index.html` da raiz — **site de página única → precisa de `.nojekyll` na raiz** (sem ele o Jekyll quebra; FIX-005). (O histórico citava o repo `kit-contexto`; o diretório atual é `contexto-modular` — confirmar a URL/repo do Pages no GitHub.)

- **Bibliotecas externas (CDN):** JSZip (botão "baixar pacote ZIP"). Resto é vanilla.
- **Persistência no browser:** `localStorage` para presets do custom, estado (STATE) e o HUB. Proibido em *artifacts* do claude.ai, mas funciona aqui porque roda no Pages do usuário (site real). **localStorage é por origem:** presets do site publicado NÃO aparecem no arquivo local (`file://`) e vice-versa (já confundiu — não é bug).
- **i18n (futuro, destravado pelo modular):** trocar UI e dados de template de idioma, de forma auditável, inclusive **idioma misto** (artefatos/código/meta em inglês; UI e conversa em pt-BR). Plano em IDEIAS i-N13 (expandido) + i-N26. O refator que isso exigia **já foi feito** (modular); falta a camada de idioma. Sem código até o "vai" explícito.

### Mapa do JS (do topo do `<script>` para baixo — vale para o `index.html` montado; a origem está em `src/`)
1. **Constantes de fundação:** `LANGS` (idiomas: "pt"/"en"/"es"/"other"); `BEHAVIORS_BASE` (**13** princípios universais — §4); `FILE_PHILOSOPHY`; `UNIVERSAL_IDEAS_TPL` (template IDEAS injetado via `normNiche` em todo nicho sem o seu — tem «Feedback para o Kit» e, abaixo, «Feedback para o ASU», v1.34.0); `HYGIENE_RULES`; `TRIGGERS_BASE`; `UPDATE_PROTOCOL` (commit, canal de atualização, privacidade, handoff — §6); `AFFIX`; `OSENV`/`OS_LABELS`/`OS_CMDNOTE` (seletor de SO). **Nota:** `UNIVERSAL_HUB_TPL` existiu (v1.30.0) mas o HUB hoje é gerado pela página 06 via `buildHub()` (`effectiveFiles` NÃO injeta mais HUB.md no download por-nicho — D-025).
2. **Objetos `NICHES.<id>`** — um por nicho (16 de conteúdo + `custom`). **Cada um vive em `src/niches/<id>.js`.** Ordem no manifesto: dev, design, client, narrative, marketing, research, product, business, game, pixel, brainstorm, music, rpg, cuisine, animation, comics, custom.
3. **Normalizadores:** `normNiche` (injeta o template IDEAS universal e o toggle `groupMode` no topbar; e o `asuMode` quando ligado), `normBehaviors`, `normConventions`, `normBuilderSection` (**FIX-004**: aceita item string OU par `[código,rótulo]`), `normFiles`, `normOutputs`, `normTopbar`.
4. **Render:** `renderTopbar` (aceita `opts:[[v,l]]` E `options:["str"]`; `type:"toggle"` = switch CSS `.tsw`), `renderBehaviors`, `renderBuilder`, `renderCustomForm`, `updatePreview`, `buildInstr` (Instruções), `buildClaudeMd` (gera o **CEREBRO.md** — o nome da FUNÇÃO ficou `buildClaudeMd`, mas o arquivo de saída é `CEREBRO.md`), `renderTemplates` (usa `effectiveFiles`), `setView` (troca de aba; chama `renderHub` ao abrir a 06).
5. **Switch "Saída via ASU (patch)" (asuMode, v1.34.0):** toggle no topbar (opt-in, off por padrão); `asuModeOn()`; quando ligado, `buildClaudeMd` injeta no CEREBRO a diretriz que orienta o assistente a entregar mudanças de código via instrução ASU, **apontando** para o `INSTRUCTION_GUIDE`/`PROMPT_IA` (não congela o conteúdo do guia). Off = saída idêntica. Checagem G5 (round-trip ASU) no harness.
6. **Construtor unificado (Custom):** `composeFromNiches(niches, sel)` (concatena com dedup visível + checagem de conflito); chips `data-sc`/`.chip`; presets via `toPreset`/`fromPreset`/`mergeCustom` (localStorage — **`body` do prompt guardado como STRING**, FIX-003); atalho "Nichos salvos" na barra.
7. **HUB de grupo (página 06, D-025/026/027):** `NICHE_CODE` (códigos curados por nicho), `computeCodes` (variador de duplicata → DEV0/DEV1), `buildHub()` (gera o HUB.md populado), `renderHubChips`/`renderHubRows`/`renderHub`/`wireHub`/`persistHub`/`loadHub`. Estado `STATE.hub` em `LS_HUB="kit-hub-v1"`.
8. **Boot** — `boot()` no fim, try/catch com banner de erro; chama `loadHub()`+`wireHub()`.

### Shape de cada nicho — `NICHES.<id>` (em `src/niches/<id>.js`)
```
{
  id, label, icon, group, category,          // group = tema visual do card; category = core/creative/special
  cardColor, cardTags[], cardDesc,           // card na seleção
  intro:{ headline, lede, ctxBlurb, hero },  // tela "Início"
  topbar:[ {id,label,placeholder?} | {id,label,type:"select",options|opts,default?} | {id,label,type:"toggle",default?} ],
  behaviors:[ [id, titulo, descrição], ... ],// behaviors ESPECÍFICOS (somam aos 13 universais)
  builderSection:{ title, hint, items|groups, type? },
  conventions:[...] | true | false,
  triggersExtra:[ [evento, ação], ... ],
  contextFiles:[ {name, cat, role, content}, ... ],  // templates .md (cat: ctx/rolante/opcional/ref → vira tag)
  outputs:[ {key, name, role, active}, ... ],
  promptsExtra:[ {id, title, when, fill, fillLabel, body:(p,n)=>`...` }, ... ],  // prompts G-L
  isBuilder: true                            // SÓ no custom
}
```
Cada nicho tem 12 prompt cards: 6 universais (A-F, da fundação) + 6 específicos (G-L). O CEREBRO lista só TÍTULOS; os corpos vivem na aba Prompts.

## 3. Método de validação (harness jsdom) — REGRA DE OURO

**NUNCA publicar sem o harness verde (17/17, 0 erros JS, ~32 checagens).** O harness é `validate.js` (na raiz do repo agora; `node validate.js index.html`). Fluxo: editar `src/` → `node build.js` (remonta o `index.html` na raiz) → `node validate.js index.html`. As ~32 checagens cobrem D-018/022/028/029 (v1.29–v1.34) + integridade dos chips (FIX-004) + smoke/round-trip do HUB + round-trip do switch ASU (G5) + suíte de fluxos. O container PODE resetar entre sessões — recriar/`npm install jsdom` se sumir. Erros de clipboard/download no jsdom são falsos-positivos; "Boot failed: DOMException" é esperado.

## 4. Os 13 princípios universais (`BEHAVIORS_BASE`)
1. Analisa antes de aceitar. 2. Não desperdiça tokens (pedir arquivo necessário ≠ desperdício; inventar arquivo falso = pior). 3. Direto e objetivo. 4. Admite incerteza (pesquisa o que muda antes de afirmar). 5. Explica trade-offs. 6. Instruções sempre cuidadosas. 7. Estuda o domínio antes de estruturar. 8. Verifica antes de pedir arquivo; não inventa o que falta (inferência PEDIDA é ok; **STATUS é pista, não fato** — confere o estado real antes de repetir pendência e atualiza o STATUS se já resolvida). 9. Captura ideias. 10. Cadência (fases auditáveis; não fragmenta o trivial). 11. Usa a versão mais recente que tem; só pára e pede quando não tem a que a tarefa exige. 12. **Higiene ao encolher** arquivos-chave (não encolhe em silêncio; abre com «Mudanças nesta revisão»; confere que nada único se perdeu). 13. **Pesquisa para refinar E para refutar** (busca a experiência de outros, inclusive onde a ideia já falhou).

## 5. Conhecimento de contexto, mount e desenvolvimento

### Contexto vs. RAG, mount, anexo — FUNDAMENTAL (D-018)
- **Conhecimento do Projeto tem 2 modos automáticos por TAMANHO:** *in-context* (pequeno → arquivos INTEIROS, fidelidade total) e *RAG/"Modo de pesquisa"* (grande → só FRAGMENTOS por relevância). Volta a in-context se encolher.
- O `index.html` (~581 KB) cai em RAG, mas isso NÃO impede a leitura pelo mount: arquivo que ESTÁ no mount `/mnt/project/` é lido INTEIRO com a **ferramenta de código** ligada, RAG ou não. **O que importa é como o mount é alimentado:** **o conector do GitHub alimenta só o RAG e NÃO popula o mount**; **só o upload direto** dos arquivos no Projeto popula o mount — e chegam **achatados** (sem subpastas; nomes iguais colidem → ver `_MANIFEST.md` se houver). Caminho limpo: **subir os arquivos DIRETO no Projeto** + ferramenta de código ligada.
- **Anexo de conversa:** fidelidade total, mas só naquela conversa e custa token a cada turno.
- **CUIDADO — janela é finita:** "nasceu na conversa = 100% para sempre" é FALSO. Conversa longa é truncada/compactada. Para o index grande: subir direto no Projeto e, em conversa nova, re-subir.

### Desenvolvimento — Claude Code + protocolo de raias (v1.34.0)
O desenvolvimento migrou para o **Claude Code** (desktop até segunda; CLI no trabalho). **Divisão de raias:**
- **Chat (este, planejamento):** arquitetura, análise, pesquisa, curadoria que **reescreve** — entrega **arquivos INTEIROS** (CONTEXT/CHANGELOG/IDEIAS/ROADMAP/CEREBRO) + **o commit junto**. Nunca mais "bloco de colar".
- **Code (execução):** implementar, corrigir, testar, `build`, `git`, e **append** em STATUS/DECISOES/logs. Specs curtas em `meta/specs/`; prompt de 1 linha "leia `meta/specs/<arq>.md` e execute". Ao fim, escreve uma linha "arquivos tocados nesta sessão" no STATUS.
- **Regra "dois cérebros":** **append não conflita; reescrita conflita.** O repo é a única fonte de verdade; o chat sempre lê a última versão que o usuário sobe (P11). O chat entrega **todo** o meta decidido **antes** de liberar pro Code (evita desencontro).
- **Modelo/esforço:** padrão **Sonnet 4.6 esforço baixo**; o chat **avisa** quando um spec precisa de **alto** (linha "⚠️ suba o esforço" no topo do spec) — o Code NÃO troca o próprio modelo/esforço sozinho; quem muda é o usuário (UI / `/model` / `settings.json`).
- **Windows/macetes:** abrir o `claude` pelo **PowerShell**; **sem `ANTHROPIC_API_KEY`** (senão cobra API à parte); abrir na **pasta do repo** (não a mãe). O `.claude/settings.json` (allowlist de permissões) pula os prompts de permissão (vale desktop e CLI).
- Sincronização do GitHub é MANUAL e às vezes falha em silêncio → para o que precisa estar fresco, UPLOAD DIRETO.

### Dois formatos de dados (normalizadores)
Por razões históricas, nichos existem em 2 formatos: `renderTopbar` aceita `opts:[[v,l]]` E `options:["str"]`; `normConventions` aceita array, `true` ou `false`/null; `normBuilderSection` aceita item string OU par (FIX-004). Sempre rodar o harness após mexer.

### Dois artefatos + afixo + SO
`buildInstr()` → **Instruções do Projeto** (curtas). `buildClaudeMd()` → **`CEREBRO.md` completo**. `AFFIX`/`applyAffix` (aba Templates: padrão/prefixo/**sufixo `__update`** para atualizar projetos sem perder conteúdo). `OSENV`+OS_CMDNOTE injeta a sintaxe de comando do SO escolhido.

## 6. UPDATE_PROTOCOL (transversal — no CEREBRO de TODOS os nichos)
- **commit ao final** (`commitIntro` incondicional: `git add` listando, `git commit`, `git push`, Conventional Commits; sintaxe por SO).
- **canal de atualização do kit** — ensina o Claude do projeto a aplicar updates do kit trazidos à conversa.
- **privacidade** — relevância + marcação, não censura.
- **handoff** — contexto vs. RAG, regra anti-arquivo-falso, onde colocar cada arquivo, plano de handoff; **manifesto de achatamento auto-detectado**; **só upload direto popula o mount** (D-018).
- **diretriz (v1.32.0):** o assistente pode **adaptar as Instruções do Projeto** a cada projeto, registrando o desvio (válvula i-N22).

## 7. Armadilhas conhecidas (NÃO repetir)
1. **`${today()}` em template** → tela branca. Use `${today}`.
2. **`renderTopbar` lendo só `f.opts`** → selects vazios. Corrigido v1.11.1 (aceita os dois).
3. **`default:"pt-BR"` no langSel** (LANGS usa "pt") → idioma em branco. Corrigido v1.11.1.
4. **git commit com `\`** → QUEBRA no CMD do Windows. Commit em UMA LINHA, `-m` repetido, **mensagem SEM acentos**.
5. **Publicar sem validar** → NUNCA sem o harness verde (17/17 + 32 checagens).
6. **The Brazilian House** → projeto de DESIGN GRÁFICO, NÃO culinária.
7. **Editar a partir de FRAGMENTOS (RAG, sem mount nem anexo)** → arquivo falso. Critério: "tenho o COMPLETO?". Sem mount nem anexo, PEÇO o arquivo; nunca reconstruo.
8. **`toPreset` guardando `body` como função** → sumia. STRING (FIX-003). Nada no localStorage pode ser função.
9. **Construtor reescrevendo controles sem restaurar o esqueleto** → controles errados. Corrigido v1.24.0 (FIX-001).
10. **GitHub Pages sem `.nojekyll`** → build quebra, site não atualiza. `.nojekyll` na raiz (FIX-005).
11. **LOG-TEMPLATE é por-nicho (16 definições distintas)** — não dá replace global. O do **game** tem `## Código / build`.
12. **Âncoras de `str_replace`/ASU reconstruídas de memória falham** — VER o texto exato antes (várias edições falharam por 1 caractere).
13. **Editar o `index.html` à mão** → ERRADO agora: editar `src/` e rodar `node build.js` (senão a próxima build sobrescreve).
14. **Nomes do mount mudam por sessão** (achatado FlatDrop: `dev__src__niches.js` ou colisões `dev.js`) — conferir `_MANIFEST.md` / listar antes de mapear.

## 8. Produto / posicionamento
- Compete e complementa a feature nativa "Pesquisar e referenciar conversas". Diferencial: portabilidade (arquivos no Git), estrutura deliberada (decisão/ideia/estado separados), controle do que entra no contexto.
- Filosofia central: **separação contexto vs histórico** (o princípio mais sólido). Contexto = leve, recarregado sempre. Histórico = no Git, lido sob demanda.
- Inspiração distante: GitHub spec-kit ("composição assistida > fusão automática"; "doctor/lint" para conflitos).
- **Enquadramento profissional** (Anthropic "Effective context engineering" + literatura 2025/26): janela = recurso finito; "context rot"; offload/retrieve/isolate/compress; Git para estado entre sessões.
- **Expansões / em avaliação** (IDEIAS/ROADMAP): **i18n com idioma misto** (i-N13/i-N26 — o refator modular que destravava já saiu); **função "modo Code"** (switch que gera o kit de arranque do Claude Code: `CLAUDE.md` raiz starter + `.claude/settings.json` + comandos + protocolo de raias + macetes Windows, desktop e CLI — i-N29, spec a escrever); **HUB enxuto** (o aparato pesado é over-engineered para toolchain solo; manter só o registro de contratos / Cânone, com dono + versão derivada — i-N27, a validar/testar); **ciclo de vida do feedback** nas seções «Feedback para o Kit/ASU» (status + rotação para `logs/`, sem arquivo novo — i-N28). "Kit desenvolve" a estender a HQ/RPG/animação/música quando os pilotos pedirem (i-N25 música). O **ASU** e o **FlatDrop** seguem como ferramentas vivas do toolchain (não mudar fluxo deles).

## 9. Localização dos arquivos (ambiente de trabalho do Claude)
- **Deliverables:** `/mnt/user-data/outputs/`. O usuário coloca: `index.html` na raiz (ou o Code gera via build), os meta em `meta/`, specs em `meta/specs/`, `settings.json` em `.claude/`.
- **Mount do Projeto:** `/mnt/project/` (somente-leitura). Alimentado por **upload direto** (não pelo conector do GitHub — D-018); chega achatado.
- **Scratchpad/validação:** `/home/claude/kit/` (recriar o harness se o container resetar).
- **Transcrições de sessões antigas:** `/mnt/transcripts/` (com `journal.txt` de catálogo).

## 10. Idioma e convenções
- **pt-BR em tudo**, inclusive comentários de código e nomes de template (profissionais: STATUS.md, DECISOES.md). (Idioma misto no futuro — i-N26.)
- Entrega via `present_files`; **arquivos COMPLETOS** para baixar/substituir, **nunca blocos soltos** (o chat erra se empurrar "colar no fim" — usar arquivo inteiro ou deixar o Code fazer o append).
- Commit ao final no formato do SO (Windows: uma linha, `-m` repetido, SEM acentos), pronto para colar.
- **Handoff ao final:** dizer, arquivo por arquivo, onde colocar cada um na próxima conversa.
- **P12** e **P13** valem para o nosso próprio trabalho, não só para a ferramenta.
- Respostas concisas, sem floreio/bajulação; não fragmentar o trivial; nunca publicar sem 17/17 + 32 checagens; não introduzir framework/build/deps **no lado do usuário** (o build do dev é Node, fora do produto).
- **Dois `CLAUDE.md` não se confundem:** `meta/CEREBRO.md` (o cérebro — como o assistente trabalha) ≠ `CLAUDE.md` na raiz (lido pelo Claude Code: build, convenções, aponta pro `meta/`).
