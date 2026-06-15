# CONTEXT.md — Kit de Contexto Universal

> O **passaporte** do projeto. Leia primeiro. Estável — muda pouco.
> Meta deste arquivo: uma conversa NOVA entende o projeto inteiro e navega o código sem precisar de mais nada.
> Versão de referência: **v1.33.0** · `index.html` ~580 KB / ~8409 linhas · **17/17 nichos, 0 erros** no harness.
> (Histórico de versões fica no CHANGELOG; o "porquê" de cada escolha, no DECISOES; o estado atual, no STATUS.)

---

## 1. O que é o projeto

O **Kit de Contexto Universal** é um **único `index.html`** (vanilla JS, sem build, sem deps de runtime além de JSZip via CDN) que ajuda pessoas a **manter contexto entre conversas com o Claude**. Problema que resolve: conversa longa com IA vira "papão de token" e, ao trocar de conversa, perde-se todo o contexto (decisões, ideias, estado).

Solução: o kit gera **arquivos vivos** (`CONTEXT.md`, `STATUS.md`, `DECISOES.md`, etc.) que o usuário sobe num Projeto do Claude.ai (ou anexa) e que fazem a IA se ambientar na hora. São **17 nichos** (16 de conteúdo + **1 construtor** `custom`). Cada nicho gera dois artefatos adaptados ao domínio: as **Instruções do Projeto** (curtas, lidas em toda mensagem) e um **CLAUDE.md completo** (subido como arquivo).

Três capacidades hoje: **(1) manter contexto** (os arquivos vivos + logs); **(2) o kit DESENVOLVE** (narrative escreve sob direção; game cria/codifica — D-023); **(3) coordenar grupos** (HUB com Cânone Central — D-024/025/026/027).

O kit é dogfooding: este projeto é gerenciado pelos arquivos que ele prega.

## 2. Stack e arquitetura

- **Um arquivo:** `index.html`. HTML + CSS + JS inline. Sem framework, sem build.
- **Hospedagem:** GitHub Pages — `silujones.github.io/kit-contexto/`. Repo `github.com/SiluJones/kit-contexto`. **Site de página única → tem um `.nojekyll` na raiz** (sem ele o build do Jekyll quebra; ver FIX-005). Estrutura do repo: `index.html` na raiz, os `.md` em `meta\`, logs em `logs\`, README/PLANNING/NICHOS-CANDIDATOS na raiz.
- **Bibliotecas externas (CDN):** JSZip (botão "baixar pacote ZIP"). Resto é vanilla.
- **Persistência no browser:** `localStorage` para presets do custom, estado (STATE) e o HUB. localStorage é proibido em *artifacts* do claude.ai, mas aqui funciona porque o arquivo roda no GitHub Pages do usuário (site real). **localStorage é por origem:** presets do site publicado NÃO aparecem no arquivo local (`file://`) e vice-versa (isso já confundiu — não é bug).
- **Questão de arquitetura em aberto (DIREÇÃO ACEITA, sem código):** migrar do HTML único para **modular** (dados de cada nicho em JSON + núcleo central). Motivação reforçada: abre **i18n** (trocar UI e dados de template de idioma, de forma auditável), inclusive **idioma misto** (artefatos/código/meta em inglês; UI e conversa em pt-BR). Detalhe e plano em **IDEIAS i-N13 (expandido) + i-N26**; preocupação do usuário = não quebrar a ferramenta (mitigação: o harness 17/17 é a rede; migrar nicho a nicho). **Não mexer sem o "vai" explícito.**

### Mapa do JS (do topo do `<script>` para baixo)
1. **Constantes de fundação:** `LANGS` (idiomas: "pt"/"en"/"es"/"other"); `BEHAVIORS_BASE` (**13** princípios universais — §4); `FILE_PHILOSOPHY`; `UNIVERSAL_IDEAS_TPL` (template IDEAS injetado via `normNiche` em todo nicho sem o seu — v1.29.0); `HYGIENE_RULES`; `TRIGGERS_BASE`; `UPDATE_PROTOCOL` (commit, canal de atualização, privacidade, handoff — §6); `AFFIX` (afixo de download); `OSENV`/`OS_LABELS`/`OS_CMDNOTE` (seletor de SO). **Nota:** `UNIVERSAL_HUB_TPL` existiu (v1.30.0) mas o HUB hoje é gerado pela página 06 via `buildHub()` (`effectiveFiles` NÃO injeta mais HUB.md no download por-nicho — D-025).
2. **Objetos `NICHES.<id>`** — um por nicho (16 de conteúdo + `custom`). Começam em (números mudam ao editar): dev ~973, design ~1342, client ~1711, narrative ~2021, marketing ~2363, research ~2666, product ~2975, business ~3272, game ~3591, pixel ~3939, brainstorm ~4249, music ~4555, rpg ~4854, cuisine ~5191, animation ~5473, comics ~5804, custom ~6113.
3. **Normalizadores:** `normNiche` (~6236; injeta o template IDEAS universal e o toggle `groupMode` no topbar), `normBehaviors`, `normConventions`, `normBuilderSection` (~6200; **FIX-004**: `opts: g.items.map(it => Array.isArray(it) ? it : [it,it])` — aceita item string OU par `[código,rótulo]`), `normFiles`, `normOutputs`, `normTopbar`.
4. **Render:** `renderTopbar` (~6745; aceita `opts:[[v,l]]` E `options:["str"]`; campo `type:"toggle"` = switch CSS `.tsw`; handler lê checkbox e chama `renderTemplates`), `renderBehaviors`, `renderBuilder`, `renderCustomForm` (construtor unificado), `updatePreview`, `buildInstr` (Instruções), `buildClaudeMd` (CLAUDE.md completo), `renderTemplates` (usa `effectiveFiles`), `setView` (troca de aba; chama `renderHub` ao abrir a 06).
5. **Construtor unificado (Custom):** `composeFromNiches(niches, sel)` (~7507; concatena com dedup visível + checagem de conflito; `sel` = granularidade), chips `data-sc`/classe `.chip`, `STATE._sc={selected,expanded,pieces}`; presets via `toPreset`/`fromPreset`/`mergeCustom` (localStorage — **`body` do prompt guardado como STRING**, FIX-003); atalho "Nichos salvos" na barra (aparece quando há presets).
6. **HUB de grupo (página 06, D-025/026/027) — ~8151+:** `NICHE_CODE` (códigos curados por nicho), `baseCode(f)`, `computeCodes(frentes)` (variador de duplicata → DEV0/DEV1), `buildHub()` (gera o HUB.md populado), `renderHubChips()` (chips dos 16 nichos = adicionar frente, estilo "add"), `renderHubRows()` (linhas: ↑↓ + select + código + nome + responsável + ✕; estilo padrão do kit), `renderHub`/`wireHub`/`updateHubPreview`/`persistHub`/`loadHub`. Estado `STATE.hub={product,frentes:[{niche,name,resp,code}]}` em `LS_HUB="kit-hub-v1"` (independente de nicho).
7. **Boot** — `boot()` no fim, try/catch com banner de erro; chama `loadHub()`+`wireHub()`.

### Shape de cada nicho — `NICHES.<id>`
```
{
  id, label, icon, group, category,          // group = tema visual do card (serif/literary/digital); category = core/creative/special
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
Cada nicho tem 12 prompt cards: 6 universais (A-F, da fundação) + 6 específicos (G-L, de `promptsExtra`). O CLAUDE.md lista só TÍTULOS; os corpos vivem na aba Prompts.

## 3. Método de validação (harness jsdom) — REGRA DE OURO

**NUNCA publicar sem o harness verde (17/17, 0 erros JS).** O harness vive em `/home/claude/kit/validate.js` (o container PODE resetar entre sessões — recriar se sumir; `npm install jsdom` se faltar).

Como funciona: extrai o `<script>` do `index.html`, remove `boot();`, e expõe via shim `window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub}`. Para cada nicho roda `normNiche(NICHES[id])` e checa: Instruções + CLAUDE.md gerados; P12/P13 presentes (nas Instruções, na linha comprimida); sem princípio com label `undefined`; integridade dos chips do builderSection (FIX-004) + round-trip seleção→saída; **teto de 6500 caracteres por Instrução**; compressão dos universais; presença das diretrizes de cada versão (D-018/022, IDEAS universal, writes_prose, builds_game, ROTEIRO, diretriz de personalização das Instruções, seção Código/build no LOG do game); round-trip do switch HUB; smoke test do `buildHub` (códigos curados + variador DEV0/DEV1 + Cânone Central + identificadores). São ~24 checagens de conteúdo.

Padrão de qualidade a cada mexida: `node --check` no script extraído; `node validate.js`; balanceamento `<div>`/`</div>` (hoje 283/283); **anti-testes** (desfazer a correção numa cópia e confirmar que o teste REPROVA); sincronizar o index para `/mnt/user-data/outputs/` e conferir md5 idêntico ao validado.

## 4. Os 13 princípios universais (BEHAVIORS_BASE — em todos os nichos)
1. Analisa antes de aceitar. 2. Não desperdiça tokens (pedir arquivo necessário ≠ desperdício; inventar arquivo falso = pior). 3. Direto e objetivo. 4. Admite incerteza (pesquisa o que muda antes de afirmar). 5. Explica trade-offs. 6. Instruções sempre cuidadosas. 7. Estuda o domínio antes de estruturar. 8. Verifica antes de pedir arquivo; não inventa o que falta (inferência PEDIDA é ok; **STATUS é pista, não fato** — confere o estado real antes de repetir pendência e atualiza o STATUS se já resolvida). 9. Captura ideias. 10. Cadência (fases auditáveis; não fragmenta o trivial). 11. Usa a versão mais recente que tem; só pára e pede quando não tem a que a tarefa exige. 12. **Higiene ao encolher** arquivos-chave (não encolhe em silêncio; abre com «Mudanças nesta revisão»; confere que nada único se perdeu). 13. **Pesquisa para refinar E para refutar** (busca a experiência de outros, inclusive onde a ideia já falhou; contraponto com lastro na prática alheia).

> Nas Instruções (lidas em toda mensagem) os 13 universais aparecem **comprimidos numa linha de nomes** ("Princípios universais (definição completa no CLAUDE.md): …"); só os behaviors DO NICHO viram bullets. A definição completa fica no CLAUDE.md (v1.30.0, D-024).

## 5. Como as peças críticas funcionam

### `today` nos templates — ARMADILHA CRÍTICA
Nos templates `.md` (strings em `content`), datas usam `${today}` (a CONSTANTE), **NUNCA `${today()}`** — chamada de função numa template literal avaliada na carga TRAVA O BOOT (tela branca).

### O HUB de grupo (página 06) — D-024 a D-027
Para quando vários projetos do kit servem ao MESMO produto (ex.: um jogo com frentes de game/arte/enredo/música). Dois mecanismos:
- **Por projeto:** o switch **"Projeto em grupo?"** (toggle universal no topbar de cada nicho) → ligado, adiciona ao CLAUDE.md daquele projeto a SEÇÃO que manda ler o HUB; não injeta arquivo.
- **Group-level:** a **página 06 · HUB** (`buildHub`) monta a lista de frentes (nicho + nome + responsável por + código) e gera UM `HUB.md` populado, colado idêntico em cada projeto do grupo.
O `HUB.md` (inspirado no `CANON.md` que o piloto montou — D-026) tem: **tabela de identificadores** (código por frente, default curado por nicho via `NICHE_CODE`, variador DEV0/DEV1 em duplicata — D-027); **diretrizes D1–D6** (nunca mexer na casa do outro; tarefa que afeta outro vira `[CÓDIGO-NNN]` na caixa dela; cada verdade tem um dono; **Cânone Central tem precedência**; atualizar na hora; tudo assinado/datado com refutação `[REFUTACAO-ID]`); **Cânone Central** (fatos travados que toda frente respeita — nomes, paleta/identidade global, dimensões, marcos); **frentes** (caixa de entrada + decididos, com responsabilidade por frente); **status rápido**. Responsabilidade fica no bloco da frente (não em 4ª seção). É o loop «Feedback para o Kit» funcionando: o piloto evoluiu a estrutura e ela voltou para o kit.

### O Custom unificado (D-019)
Um card `custom`. Tela: (1) **Compor a partir de nichos prontos** (chips dos 16; marcar abre "escolher peças" — granularidade por arquivo/comportamento/prompt; "Importar e concatenar" roda `composeFromNiches` com dedup visível + checagem de conflito e preenche o builder abaixo, na mesma tela); (2) **Custom Builder** (presets/identidade/home/arquivos/comportamentos/convenções/saídas/prompts). Tudo vai para o motor de preset (localStorage).

### Contexto vs. RAG, mount, anexo — FUNDAMENTAL (D-018)
- **Conhecimento do Projeto tem 2 modos automáticos por TAMANHO total:** *in-context* (pequeno → arquivos INTEIROS no contexto, fidelidade total) e *RAG/"Modo de pesquisa"* (grande → só FRAGMENTOS por relevância). Volta a in-context se encolher.
- O nosso `index.html` (~580 KB) cai em RAG, mas isso NÃO impede a leitura pelo mount: arquivo que ESTÁ no mount `/mnt/project/` é lido INTEIRO com a **ferramenta de código** ligada, RAG ou não. **O que importa é como o mount é alimentado:** **o conector do GitHub alimenta só o RAG e NÃO popula o mount**; **só o upload direto** dos arquivos no Projeto popula o mount — e chegam **achatados** (sem subpastas; nomes iguais colidem → ver manifesto/`_MANIFEST.md` se houver, ou o mapa que o assistente faz no início). Caminho limpo: **subir os arquivos DIRETO no Projeto** + ferramenta de código ligada.
- **Anexo de conversa:** fidelidade total, mas só naquela conversa (não passa adiante) e custa token a cada turno. Arquivo gerado pelo próprio assistente na conversa tem a mesma fidelidade (entrou no histórico).
- **CUIDADO — janela é finita:** "nasceu na conversa = 100% para sempre" é FALSO. Conversa longa é truncada/compactada (aconteceu nesta sessão). Para o index grande: subir direto no Projeto e, em conversa nova, re-subir/reanexar.
- Sincronização do GitHub é MANUAL ("Sync now") e às vezes falha silenciosamente → para o que precisa estar fresco, preferir UPLOAD DIRETO.

### Dois formatos de dados (normalizadores)
Por razões históricas, nichos existem em 2 formatos: `renderTopbar` aceita `opts:[[v,l]]` E `options:["str"]` (causa do bug v1.11.1); `normConventions` aceita array, `true` (bloco default) ou `false`/null; `normBuilderSection` aceita item string OU par (FIX-004). Sempre rodar o harness após mexer.

### Dois artefatos
`buildInstr()` → **Instruções do Projeto** (curtas, colar no campo de Instruções do Claude.ai). `buildClaudeMd()` → **CLAUDE.md completo** (fundação + protocolo + gatilhos + saídas). Abas `#tab-instr`/`#tab-claude`.

### Afixo de download + Seletor de SO
`AFFIX={mode,text,sep}` + `applyAffix(name)` (aba Templates: padrão/prefixo/sufixo; o usuário usa o **sufixo `__update`** para atualizar projetos sem perder conteúdo). `OSENV={value}` + OS_LABELS + OS_CMDNOTE (campo no "Construir instrução": Windows-CMD/PowerShell/macOS/Linux/não-especificar) → injeta a sintaxe de comando certa.

## 6. UPDATE_PROTOCOL (transversal — no CLAUDE.md de TODOS os nichos)
- **commit ao final** (`commitIntro` incondicional: 3 linhas — `git add` listando arquivos, `git commit`, `git push`, Conventional Commits; `commitNota` só com a sintaxe por SO).
- **canal de atualização do kit** — ensina o Claude do projeto a reconhecer e aplicar updates do kit trazidos para a conversa (regra nova → colar o texto; template novo → fluxo do sufixo `__update`).
- **privacidade** — relevância + marcação, não censura.
- **handoff/transferência** — contexto vs. RAG, regra anti-arquivo-falso, onde colocar cada arquivo, plano de handoff ao final; **manifesto de achatamento auto-detectado** (se houver `_MANIFEST.md`, é fonte de verdade de nomes; entrega pelo nome real; senão segue normal); **só upload direto popula o mount** (D-018, corrigido na v1.28.0).
- **diretriz nova (v1.32.0):** o assistente pode **adaptar as Instruções do Projeto** a cada projeto (encurtar/trocar/remover/acrescentar), respeitando o teto de caracteres e registrando o desvio (válvula i-N22 aplicada às Instruções).

## 7. Armadilhas conhecidas (NÃO repetir)
1. **`${today()}` em template** → tela branca. Use `${today}`.
2. **`renderTopbar` lendo só `f.opts`** → selects vazios nos nichos com `options:`. Corrigido v1.11.1 (aceita os dois).
3. **`default:"pt-BR"` no langSel** (LANGS usa "pt") → idioma em branco. Corrigido v1.11.1.
4. **git commit com `\`** (continuação bash) → QUEBRA no CMD do Windows. O usuário usa **CMD do Windows**: commit em UMA LINHA, `-m` repetido, **mensagem SEM acentos** (CMD corrompe).
5. **Publicar sem validar** → NUNCA sem o harness verde (17/17). Erros de clipboard/download no jsdom são falsos-positivos; "Boot failed: DOMException" no harness é esperado.
6. **The Brazilian House** → projeto de DESIGN GRÁFICO (cardápio físico), NÃO culinária.
7. **Editar a partir de FRAGMENTOS (RAG, sem mount nem anexo)** → arquivo falso. Critério não é "está em RAG?", é "tenho o COMPLETO?". Com ferramenta de código leio inteiro pelo mount qualquer arquivo que ESTEJA no mount — mas o mount só é alimentado por upload direto (D-018). Sem mount nem anexo, PEÇO o arquivo; nunca reconstruo.
8. **`toPreset` guardando `body` como função** → `JSON.stringify` descarta funções → corpo do prompt sumia. Corrigido v1.25.1 (STRING). FIX-003. Nada que vá ao localStorage pode ser função.
9. **Construtor reescrevendo controles sem restaurar o esqueleto** → controles errados ao trocar de nicho. Corrigido com captura/restauração do esqueleto (v1.24.0). FIX-001.
10. **GitHub Pages sem `.nojekyll`** → build do Jekyll quebra ("invalid characters… UTF-8" em `meta/STATUS.md`) e o site não atualiza. Site de página única → `.nojekyll` na raiz. FIX-005.
11. **LOG-TEMPLATE é por-nicho (16 definições distintas)** — cada nicho customizou as seções do seu log; não dá replace global. O do **game** tem `## Código / build` (v1.32.0, resposta ao erro-260613).
12. **Âncoras de `str_replace` reconstruídas de memória falham** — ao editar docs/código, VER o texto exato antes (várias edições falharam por 1 caractere diferente). Scripts Python que gravam só no fim abortam tudo se uma âncora não bate.

## 8. Produto / posicionamento
- Compete e complementa a feature nativa "Pesquisar e referenciar conversas". Diferencial: portabilidade (arquivos vão pro Git, funcionam em qualquer conta), estrutura deliberada (decisão/ideia/estado separados), controle do que entra no contexto.
- Filosofia central: **separação contexto vs histórico** (o princípio mais sólido). Contexto = leve, recarregado sempre. Histórico = no Git, lido sob demanda.
- Inspiração distante: GitHub spec-kit. Lições: "composição assistida > fusão automática" (base do Custom) e "doctor/lint" para conflitos (a checagem do compose).
- **Enquadramento profissional** (Anthropic "Effective context engineering" + literatura 2025/26): janela = recurso finito; "context rot"; estratégias offload/retrieve/isolate/compress; Git para estado entre sessões — tudo valida a arquitetura do kit.
- **Expansões em avaliação** (IDEIAS/ROADMAP): refator modular + **i18n com idioma misto** (i-N13/i-N26, direção aceita); nicho/ferramenta de **guias/tutoriais/wikis**; ferramenta de **auto-aplicação de patches** (a IA emite diffs/arquivos estruturados e uma ferramenta local aplica). "Kit desenvolve" a estender a HQ/RPG/animação/música quando os pilotos pedirem.

## 9. Localização dos arquivos (ambiente de trabalho do Claude)
- **Deliverable:** `/mnt/user-data/outputs/index.html`. **Meta-docs:** `/mnt/user-data/outputs/` (e o usuário coloca em `meta\` no repo). Logs em `logs/`.
- **Mount do Projeto:** `/mnt/project/` (somente-leitura aqui). Alimentado por **upload direto** (não pelo conector do GitHub — D-018); pode estar vazio se só o conector estiver ligado; chega achatado.
- **Scratchpad/validação:** `/home/claude/kit/` (index em disco + `validate.js` + jsdom em `node_modules`). Recriar o harness se o container resetar.
- **Transcrições de sessões antigas:** `/mnt/transcripts/` (esta sessão: p14–p18; há `journal.txt` com o catálogo).

## 10. Idioma e convenções
- **pt-BR em tudo**, inclusive comentários de código e nomes de template (profissionais: STATUS.md, DECISOES.md). (Possível idioma misto no futuro — i-N26.)
- Entrega via `present_files`; arquivos COMPLETOS para baixar/substituir, nunca blocos soltos.
- Commit ao final no formato CMD Windows (uma linha, `-m` repetido, SEM acentos), pronto para colar; 3 linhas (`git add` listando, `git commit`, `git push`).
- **Handoff ao final:** dizer, arquivo por arquivo, onde colocar cada um na próxima conversa (Projeto vs. anexo) e, quando útil, montar o prompt de início.
- **P12 (higiene ao encolher)** e **P13 (pesquisa para refinar E refutar)** valem para o nosso próprio trabalho, não só para a ferramenta.
- Respostas concisas, sem floreio/bajulação; não fragmentar o trivial; nunca publicar sem 17/17 nichos e 0 erros; não introduzir framework/build/deps.
