# CHANGELOG — Kit de Contexto Universal

> Histórico de versões. Versão atual: **v1.33.0**.

## v1.33.0 — 2026-06-14 — Códigos de área melhores (curados + variador) + rótulo de grupo

Respostas do usuário (`ideia-260613_-_3`): ajustes no construtor do HUB + um rótulo.

- **Códigos de área curados por nicho:** o default agora é bonito e identificável — `dev → DEV` (não "DESE"), `game → GAME`, `pixel → PIXEL`, `narrative → NARR`, `music → SOM`, `comics → HQ`, etc. (mapa `NICHE_CODE`). Antes derivava das 4 primeiras letras do nome/nicho.
- **Variador de duplicata:** se o mesmo código-base se repete (duas frentes "dev"), vira **DEV0, DEV1, DEV2**…; código único fica sem sufixo (PIXEL). Funções `baseCode(f)` + `computeCodes(frentes)`; o campo "código" por linha continua sobrescrevendo o default.
- **Rótulo de grupo** no seletor de nichos: "Criativo & Mídia — exploração, jogos, narrativa" → **"Histórias, Jogos & Mídia — mundos, arte e som"**.

**Validação:** smoke test do `buildHub` atualizado (curados + variador DEV0/DEV1); 17/17, 0 erros; `div` 283/283; ~580 KB / 8409 linhas.

---


## v1.32.0 — 2026-06-13 — HUB inspirado no CANON.md + construtor por botões + diretriz de Instruções + log técnico

Sessão com 3 insumos do piloto: `erro-260613` (válvula preservou `## Código` num log de game), `ideia-260613_-_2` (botões + estilo + diretriz de Instruções) e o **CANON.md** que o projeto em grupo montou sozinho (versão mais madura do HUB). Ver **D-026**.

### HUB enriquecido com o CANON.md (inspiração do piloto)
- **Identificadores das áreas:** cada frente ganha um **código** (`[GAME]`, `[ART]`…) — campo opcional na linha; vazio = derivado do nome. Tabela de identificadores no topo do `HUB.md`.
- **Cânone Central:** nova seção de **fatos travados** que toda frente respeita (nomes, paleta/identidade global, dimensões/regras, marcos fundadores) — a inovação central do CANON.md que faltava no HUB.
- **Precedência do cânone (D4):** mudar um fato travado exige sinalização + **aprovação do usuário** antes de qualquer frente aplicar.
- **Tarefas com origem:** caixa de entrada no formato `[ORIGEM-NNN]`, com refutação `[REFUTACAO-ID]` nos Decididos.
- Estrutura final: Identificadores → Diretrizes (D1–D6) → Cânone Central → Frentes (caixa+decididos) → Status rápido.

### Construtor do HUB: botões + estilo do kit (ideia-260613_-_2)
- **Adicionar por botões:** uma fileira de chips (os 16 nichos); clicar **adiciona** uma frente daquele nicho (estilo "add", não toggle — clicar 3× adiciona 3). O `<select>` por linha continua para trocar o nicho depois.
- **Estilo consistente:** o `<select>` e os campos (código, nome, responsabilidade) agora usam o visual padrão do kit (fundo, borda, foco âmbar) — resolve a inconsistência das telas.

### Diretriz: o assistente pode personalizar as próprias Instruções (ideia-260613_-_2)
- O CLAUDE.md gerado agora autoriza explicitamente: **adaptar as Instruções do Projeto a este projeto** (encurtar, trocar exemplos, remover princípio que não se aplica, acrescentar regra do projeto), respeitando o teto de caracteres e registrando no DECISIONS + «Feedback para o Kit». É a válvula (i-N22) aplicada às Instruções.

### Log técnico para game (erro-260613)
- O LOG-TEMPLATE do nicho **game** ganhou a seção **`## Código / build`** (some quando o projeto é só design). O log do game era todo voltado a design; um projeto que CONSTRÓI o jogo não tinha onde registrar código — exatamente a customização que o piloto Fando preservou.

### Validação
Harness +5 checagens (identificadores, Cânone Central, formato de código no `buildHub`; diretriz de Instruções em 17/17; seção Código no LOG do game). **Anti-testes:** sem a diretriz, 17 reprovam; sem a seção Código, o game reprova. **17/17, 0 erros**; `div` 283/283; ~579 KB / 8396 linhas.

---


## v1.31.0 — 2026-06-13 — Página construtora do HUB (ideia-260613)

Nova página **06 · HUB** (grupo de projetos) e refino do modelo do HUB. Ver **D-025**.

### Construtor do HUB
- View dedicada onde o usuário **monta as frentes do grupo**: cada linha = **nicho** (dropdown dos 16) + **nome** (cargo/área) + **responsável por** (1 linha). Botões **+ adicionar**, **✕ remover** e **▲▼ reordenar**; **preview ao vivo** do `HUB.md`; botão **baixar HUB.md**. Campo "nome do grupo/produto" no título.
- O `HUB.md` sai **populado** com as frentes: seção 1 (diretrizes D1–D5), seção 2 (um bloco por frente: Responsável por → Visão → Caixa de entrada → Decididos) e seção 3 (status relâmpago por frente). Estado próprio (`STATE.hub`), persistido em `localStorage` à parte (independente de nicho).
- **Responsabilidade** entra no bloco de cada frente (linha "Responsável por"), **não** numa 4ª seção: evita duplicar a Visão e o "dono" (D3, que agora aponta para essa linha). É o campo que cada conversa do projeto atualiza para as outras frentes.

### HUB saiu do download por-nicho
- `effectiveFiles` **não injeta mais** `HUB.md` nos templates/zip de cada nicho (senão cada nicho carregaria um HUB genérico repetido). O `HUB.md` vem só da página HUB (um por grupo). O switch **"Projeto em grupo?"** continua adicionando a **seção de instruções do HUB** ao CLAUDE.md gerado do projeto (e o texto agora aponta para a página HUB, não para os templates do nicho).
- Sobre "identificador para limitar tokens" por frente (cogitado na ideia): não existe mecanismo desse tipo no kit e não é necessário — o HUB é um documento, não um orçamento de tokens em runtime; nada foi adicionado.

### Validação
Harness: round-trip do HUB atualizado (seção no CLAUDE.md quando ligado; `HUB.md` **não** entra no nicho) + **smoke test do `buildHub`** (nome do grupo, frente nomeada, responsabilidade preenchida e vazia→"a definir"). **Anti-teste:** reintroduzir `HUB.md` no nicho reprova. **17/17, 0 erros**; `div` 283/283; ~575 KB / 8353 linhas.

---


## v1.30.1 — 2026-06-13 — Switch de verdade + HUB aparece ao ligar + correção do GitHub Pages

Patch a partir de teste real (o site não atualizava no Pages; o switch era um seletor; o HUB.md não dava para baixar).

- **GitHub Pages corrigido (FIX-005):** o build do Jekyll falhava com "invalid characters for the used encoding UTF-8" ao renderizar `meta/STATUS.md`, então o site parava de atualizar (o HTML local abria normal). Os `.md` gerados estão em UTF-8 válido — o Jekyll é que não é necessário aqui (o site é um app de página única; os `.md` são docs de projeto). Solução: arquivo **`.nojekyll`** na raiz do repo → o Pages serve estático, sem build, sem o erro e sem os avisos de Node 20.
- **"Projeto em grupo?" virou switch real** (toggle), não mais um `<select>` de Sim/Não. Novo tipo de campo `toggle` no topbar (CSS de switch com o âmbar do tema), guarda "yes"/"no".
- **HUB.md agora aparece ao ligar o switch:** o handler do topbar passou a chamar `renderTemplates`, então a aba Templates (e o zip) mostram/escondem o `HUB.md` na hora — antes só atualizavam o preview, e o download só surgia ao trocar de nicho. Sem botão extra: o download fica na aba Templates, junto dos demais.

### Validação
**17/17, 0 erros**; `div` 274/274; ~564 KB / 8221 linhas. (Harness inalterado: o round-trip do HUB lê `STATE.topbar.groupMode`, que o toggle continua alimentando com "yes"/"no".)

---


## v1.30.0 — 2026-06-12 — HUB multi-projeto (switch) + Instruções enxutas (−27%)

Sessão de código guiada por: "aceito o HUB, prossiga" + "as Instruções podem estar grandes — dá para refinar?". Duas frentes, ver **D-024**.

### 1. HUB de grupo de projetos (i-N24) — virou switch na ferramenta
- Toggle universal **"Projeto em grupo?"** no topbar (injetado via `normNiche`, aparece em todos os nichos; padrão Não).
- Ligado: o CLAUDE.md gerado ganha a seção **"Projeto em grupo (HUB compartilhado)"** (ler HUB no ritual; nunca mexer na casa do outro; mudança que afeta outra frente vira item na caixa dela — inclui `AGUARDANDO DESIGN`; ao encerrar, processar caixa + status relâmpago + entregar HUB completo); as Instruções ganham 1 linha no ritual; e o **`HUB.md`** (constante `UNIVERSAL_HUB_TPL`, genérico) entra nos templates/zip via `effectiveFiles`.
- Desligado: nada disso aparece — opt-in puro, confirmado por round-trip no harness.
- Mecanismo confirmado: switch embutido agora; o "custom de grupo" foi descartado (redundante com canal de atualização). O `HUB.md` personalizado das 4 frentes do jogo segue como entrega à parte.

### 2. Instruções do Projeto enxutas (lidas em toda mensagem)
- Os **13 princípios universais** (idênticos em todo nicho, completos no CLAUDE.md) deixaram de ser 13 bullets e viraram **uma linha densa só com os nomes** ("Princípios universais (definição completa no CLAUDE.md): …"). Os behaviors ESPECÍFICOS do nicho seguem como bullets — são o que diferencia o projeto.
- Parágrafo de saídas encurtado (detalhes ficam no CLAUDE.md).
- Resultado medido: média por nicho **6193 → 4503 caracteres (−27%)**, máx **7193 → 5503**, bullets ~48 → ~29. CLAUDE.md (a versão completa) inalterado.

### Validação
Harness +3 checagens: compressão dos universais presente em 17/17; **teto de 6500 caracteres** por Instrução (trava contra re-inchaço futuro); round-trip do switch HUB (ligado×desligado). Checagem de P12/P13 nas Instruções adaptada à forma comprimida. **Anti-teste:** compressão desativada → 17 reprovam. **17/17, 0 erros**; `div` 273/273; ~563 KB / 8206 linhas.

---


## v1.29.0 — 2026-06-12 — O kit DESENVOLVE (fase 1: escritor e game design) + IDEAS universal

Sessão guiada pela ideia-260612 + leitura do GUIA_COMPLETO_ESCRITOR_NOVEL + pesquisa (P13: kishōtenketsu e práticas/armadilhas de escrita assistida por IA). Três frentes (ver **D-023**):

### 1. IDEAS universal — fim do "faltou o IDEIAS.md"
Todos os nichos referenciam IDEAS (P9, gatilhos, higiene), mas só dev e brainstorm tinham o template — pilotos reclamavam da ausência. Agora: **`UNIVERSAL_IDEAS_TPL`** (constante de fundação, com seções Ativas/Em avaliação/Concluídas/Descartadas **e «Feedback para o Kit»**, fechando o ciclo da i-N21) é **injetado via `normNiche`** em todo nicho que não traga o seu; e o CLAUDE.md gerado ganhou a regra: *arquivo referenciado que ainda não existe → o assistente o CRIA na primeira necessidade, sem tratar como erro*.

### 2. Narrativa & Ficção — escreve COM o autor
- Convention da voz **reescrita** (a antiga "não escreve a obra" contradiria o novo modo): o assistente **escreve quando pedido e sob direção**, sempre como rascunho ancorado em VOZ.md.
- Behavior novo **`writes_prose`** ("Escreve com o autor, não pelo autor"): ancora em VOZ/PERSONAGENS/ENREDO/CONTINUIDADE (contexto rico = antídoto da prosa genérica), oferece 2–3 opções em cena crítica, marca [HIPÓTESE] no que inventa, vigia drift de voz, atualiza CONTINUIDADE/STATUS após aprovação.
- Convention nova: **kishōtenketsu** (fractal; em serial o ketsu adiado vira gancho; contraste/surpresa sustentam cena).
- Prompt novo **J — "Escrever capítulo/cena (sob direção)"** com o ritmo serial (hook → desenvolvimento → beat → gancho; "responde algo E abre pergunta").

### 3. Game design — cria o jogo, não só o documento
- Behavior novo **`builds_game`**: designer, desenvolvedor E programador — entrega protótipo jogável, conteúdo e dados; documento é meio.
- Template novo **`ROTEIRO.md`** ("o kit não tinha onde viver a narrativa cena a cena" — feedback literal do piloto): missões×sidequests, formato de cena com escolhas/consequências/requisitos, lore passivo, cutscenes, tutorial narrativo, e o estado **AGUARDANDO DESIGN** (semente da i-N24 multi-projeto).
- Trigger + output do ROTEIRO; convention "também CONSTRÓI".

### Validação
Harness +10 checagens (IDEAS pós-norm em 17/17; "primeira necessidade"; writes_prose/kishōtenketsu/anti-contradição no narrative; builds_game/ROTEIRO no game). **Anti-teste:** injeção desativada → 15 nichos reprovam. **17/17, 0 erros**; `div` 273/273; ~559 KB / 8176 linhas.

---


## v1.28.0 — 2026-06-11 — Lote de diretrizes D-022 embutido + orientação mount/RAG corrigida (D-018)

Passada de código única que embute as **5 diretrizes validadas pelo usuário** (D-022) no conteúdo gerado de todos os nichos, e corrige a orientação mount/RAG/anexo (D-018) no CLAUDE.md gerado **e** na tela "Tokens & Fluxos". Sem mudança de layout/DOM (`div` 273/273 inalterado).

### O que entrou (e onde)
- **i-N18 — Manifesto de achatamento (detecção automática):** novo item em `UPDATE_PROTOCOL.handoffComo` — se existir `_MANIFEST.md` (ex.: FlatDrop), é a fonte de verdade de nomes/estrutura (sufixo `__pasta` = colisão; entrega sempre pelo nome real); se não existir, segue normal **sem travar**; ausência de arquivo pode ser filtragem deliberada da ferramenta de achatamento.
- **i-N19 — STATUS é pista, não fato (refino de P8):** frase nova na def do princípio `check_before_ask` + bullet na seção dedicada «Verifica antes de pedir um arquivo» — antes de repetir pendência do STATUS, conferir o estado real; se resolvida, dizer e atualizar o STATUS.
- **i-N20 — Commit em 3 linhas:** `commitIntro` agora especifica TRÊS linhas separadas (`git add` **listando os arquivos** — `.` a critério quando pequeno/limpo —, `git commit`, `git push`); a parte de 3 linhas saiu do `commitNota` (que só renderiza com SO definido) para o `commitIntro` (incondicional) — a regra é universal, não detalhe de shell. `commitNota` fica só com a sintaxe por SO (CMD: 1 linha por comando, `-m` repetido, **sem acentos**).
- **i-N21 — Gatilho «Feedback para o Kit»:** linha nova em `TRIGGERS_BASE` — feedback **dito OU feito** (desvio estrutural: diretriz nova no CLAUDE.md do projeto, template alterado/dispensado, arquivo novo) → registra na hora no IDEAS, seção «Feedback para o Kit».
- **i-N22 — Válvula de desvio registrado:** nova regra em `HYGIENE_RULES` (texto aprovado): templates são **ponto de partida, não contrato**; adapte e **registre** o desvio (DECISIONS + «Feedback para o Kit»); desviar sem registrar é o erro; não duplicar o que a estrutura cobre.
- **D-018 — mount/RAG:** `handoffComo` (3 itens reescritos) e os callouts da tela "Tokens & Fluxos" agora dizem o certo: **só o upload direto popula o mount** (e ele chega **achatado**, sem subpastas); o **conector do GitHub alimenta só a busca (RAG)** e não aparece no mount.

### Validação
- Harness ganhou **6 checagens de conteúdo por nicho** (manifesto, gatilho de feedback, válvula, refino de P8, commit 3 linhas, correção mount/RAG no CLAUDE.md gerado). **Anti-teste:** numa cópia com o lote removido, 34 reprovações (17×2) — as checagens separam certo do errado.
- **17/17 nichos, 0 erros**; chips íntegros (FIX-004); `div` 273/273; ~551 KB / 8101 linhas.

---

---

## v1.27.1 — 2026-06-11 — Correção: chips de campo de Cliente/Narrativa não selecionáveis (FIX-004)

Conserto de bug em produção: nos nichos **Atendimento ao Cliente** e **Narrativa & Ficção**, os chips do bloco "específico do nicho" (Gênero, Formato, Pessoa narrativa, Canal, etc.) mostravam o rótulo grudado ("fantasy,Fantasia") e **não acendiam ao clicar** — pareciam não selecionáveis. Mudança de **uma linha** no conversor `normBuilderSection` + teste de regressão; nenhuma alteração de fluxo, layout ou DOM (`div` 273/273 inalterado).

### Causa e correção (FIX-004)
- `normBuilderSection` convertia `groups → items` assumindo que cada item era uma **string** (`it => [it, it]`). Esses dois nichos usam o formato **par `[código, rótulo]`**, então cada item já era um array e virava `[["fantasy","Fantasia"],["fantasy","Fantasia"]]`. O `data-val` saía como a string `"fantasy,Fantasia"`, que nunca batia com o array ao marcar o estado `.on` — e o finder da saída (`o[0]===val`) também falhava, então a escolha nem aparecia no texto gerado. Os nichos que usam strings (dev, design, marketing…) não eram afetados.
- Correção: `it => Array.isArray(it) ? it : [it, it]` — par passa direto, string é embrulhada. Compatível com os dois formatos, ponta a ponta (seleção, `.on` e texto gerado).

### Validação
- Harness estendido: além de 17/17 + P12/P13, agora checa a **integridade dos chips** de todos os nichos (nenhum opt pode ser `[array,array]`) e faz um **round-trip seleção→saída** (seleciona o 1º chip de cada nicho e confirma que o **rótulo** aparece no texto gerado, não o código). Provado que o teste **reprova** o código com o bug e **aprova** o corrigido. 17/17, 0 erros; ~548 KB / 8097 linhas.

---

## v1.27.0 — 2026-06-07 — Princípios universais 11 → 13: higiene ao encolher (P12) + pesquisa para refinar/refutar (P13)

Propaga para a **ferramenta** dois princípios que até aqui valiam só na nossa governança, virando o **12º e o 13º itens de `BEHAVIORS_BASE`** — agora aparecem nas Instruções (versão curta) e no CLAUDE.md (versão completa) gerados de **todos os 17 nichos**. Mudança **só de dados** (a array `BEHAVIORS_BASE`); nenhuma alteração de fluxo, render ou DOM.

### 1 — P12: Higiene ao encolher arquivos-chave (`shrink_hygiene`) — DEC D-020
- 12º item de `BEHAVIORS_BASE`. Ao reescrever/encolher um arquivo-chave (CONTEXT, STATUS, DECISIONS, CHANGELOG, IDEAS, ROADMAP), o assistente informa o que saiu e para onde foi (ou que é redundante/obsoleto), justifica **item a item** (nota «Mudanças nesta revisão») e confere que nada único se perdeu. Protege contra **PERDER** conteúdo ao enxugar — o par de «verifica antes de pedir arquivo», que protege contra **INVENTAR** o que falta. Conclui a propagação que estava na fila desde a v1.26.0.

### 2 — P13: Pesquisa para refinar E para refutar (`research_refute`) — DEC D-021 (decide a i-N17)
- 13º item de `BEHAVIORS_BASE`. Resolve a **i-N17**, que estava em aberto: em vez de só reforçar P1/P7, optou-se por um **princípio próprio**. O assistente pesquisa a experiência de outros (casos, post-mortems, críticas, convenções) não só para **refinar** a proposta, mas para **REFUTÁ-LA** quando a evidência aponta contra — busca ativamente onde a ideia já falhou para os outros e traz o contraponto com lastro externo. Complementa P1 (a posição) e P5 (o melhor argumento contrário), agora com fonte na experiência de fora, não só no raciocínio interno.

### Nomes genéricos do kit (não os nossos pt-BR)
- No texto dos dois princípios usei os nomes **genéricos** que o kit gera (CONTEXT, STATUS, DECISIONS, CHANGELOG, IDEAS, ROADMAP), e **não** os nossos (DECISOES/IDEIAS), para casar com `HYGIENE_RULES` / `TRIGGERS_BASE` / `UPDATE_PROTOCOL`, que já usam os nomes genéricos no artefato gerado.

### Validação
- Harness jsdom **recriado** (o ambiente reseta entre sessões), construindo cada nicho via `normNiche(NICHES[id])` — como `getCurrentNiche` faz (normaliza os behaviors de nicho de array para objeto; sem isso eles sairiam com label `undefined`, que é artefato de harness, não bug). `validate.js` **17/17 nichos, 0 erros**: Instruções + CLAUDE.md gerados; **P12 e P13 presentes nos dois artefatos** de cada nicho (bullet `- **Label.**` nas Instruções; `### 12.` / `### 13.` no CLAUDE.md); guarda extra confirma que **nenhum** princípio sai com label `undefined`. `node --check` ok; tags balanceadas (div **273/273**, inalterado — confirma que não houve mudança estrutural). Índice ~548 KB / 8095 linhas.

---

## v1.26.0 — 2026-06-07 — Custom unificado: composição + construção numa só tela; atalho de nichos salvos; granularidade

Reforma da área Custom a partir de teste em navegador. **Supersede a parte de D-014 sobre "2 cards de construção"** (vira **D-019**). **17 nichos** agora (era 18): os dois construtores viraram um. Três itens, cada um validado antes do seguinte (P10).

### 1 — Unificar Inteligente + Builder num só card `custom` (D-019)
- O card de construção passou a ser **um só**. A tela tem a seção **"Compor a partir de nichos prontos"** (os chips dos 16 nichos, antes o Inteligente) **no topo** e o **"Custom Builder"** logo abaixo. Importar pelos chips **preenche o builder na mesma tela**, sem trocar de view — acaba o vai-e-volta e o beco sem saída builder→inteligente que o usuário relatou.
- Removido o nicho `customSmart` (objeto, CSS de tema `data-niche="customSmart"`, hero, branch de roteamento em `renderBuilder`, função `renderSmartCustomForm`). `renderSmartCustomForm` → `composerSectionHTML()` + `wireComposer()` + `refreshComposer()` (re-render só de `#g-composer`). `renderCustomForm` renderiza o composer no topo. `NICHES.custom` ganhou cardDesc/cardTags de composição.

### 2 — Atalho "Nichos salvos" na barra superior
- `savedNichesShortcutHTML()` + `wireSavedNichesShortcut()` (injetados por `renderTopbar`): quando há presets salvos, aparece um dropdown na barra do topo; **selecionar ativa** o nicho salvo de qualquer lugar (`localStorage.setItem(LS_PRESET_CURR, name)` + `setNiche("custom")`). Resolve "não tinha acesso fácil aos nichos salvos".

### 3 — Granularidade por nicho (a etapa 2 do Custom Inteligente, i-N6/D-014 item 4)
- Cada nicho marcado nos chips tem **"escolher peças"**: expande checkboxes de **arquivos / comportamentos / prompts** daquele nicho (padrão = tudo marcado; "marcar todas" / "limpar" por nicho). `composeFromNiches(niches, sel)` ganhou o 2º parâmetro `sel` e um filtro `inc(id,type,key)` que pula as peças desmarcadas.

### Validação
- Suíte: `validate.js` **17/17, 0 erros**; `validate-switch` (transições + **coexistência** chips/builder no custom); `validate-compose`/`validate-conflict`/`validate-reuse` (atualizados p/ `setNiche("custom")`); `t-prompt` (corpos preservados); `t-shortcut` (atalho ativa de qualquer lugar); `t-granular` (peça desmarcada some do import; "marcar todas" reinclui). `node --check` ok; tags balanceadas (div 273/273). Índice ~546 KB / 8092 linhas.

---

## v1.25.1 — 2026-06-07 — fix: corpo dos prompts sumia depois de Ativar

Bugfix sobre a v1.25.0, achado em teste de navegador.

### Corrigido (FIX-003)
- **Corpo dos prompts importados/compostos vinha vazio depois de Ativar** (na aba Prompts e no CLAUDE.md/Prompts gerado). **Causa:** `toPreset` guardava o `body` do prompt como **função**; ao Ativar, o preset vai para o `localStorage` via `JSON.stringify`, **que descarta funções** → ao reler, `body` virava `undefined`. (No editor de Instruções funcionava porque ali o `_cf` ainda tinha o body como string.)
- **Conserto:** `toPreset` passa a guardar `body` como **STRING** (`typeof p.body==="function" ? p.body({},{}) : (p.body||"")`). A view, os geradores e o `fromPreset` já aceitam string. Prompts compostos no custom têm corpo estático (template com `[placeholders]`), sem `fill` dinâmico.
- **Confirmado por design:** o CLAUDE.md gerado lista só **título** dos prompts (corpo NÃO) — igual aos nichos prontos; os corpos vivem na aba Prompts (para copiar).
- **Lição registrada (armadilha #8 do CONTEXT):** nada que vá para o `localStorage` pode ser função.

### Validação
- `t-prompt.js` (novo): após Ativar (com round-trip de localStorage), os 18 prompts do nicho composto mostram o corpo na view; preset salvo guarda `body` como string. Regressão verde (18/18 à época; depois 17/17 com a unificação).

---

## v1.25.0 — 2026-06-04 — Fluxo de preset: Ativar de verdade, editar/trocar, nome pré-preenchido

Refinamento do fluxo de presets do Custom (e do Custom Inteligente, que o reusa), a partir de teste em navegador: "reutilizar / ativar / excluir" não estava claro e o "Aplicar" tinha um footgun. Sem mudança de arquitetura — conserto + UX sobre o motor existente.

### Conserto + UX de preset
- **Footgun do "Aplicar" consertado:** ativar sem digitar um nome **zerava** o preset em silêncio (o `setNiche` relia `LS_PRESET_CURR`, não achava o preset não-salvo e anulava). Agora o botão é **"⚡ Ativar este nicho"** (ação primária) e **sempre persiste** o preset antes de ativar — com o nome digitado ou um **derivado do título** (`slugifyName`). Ativar passou a refletir de fato em Início/Instruções/Prompts/Templates.
- **Sai do "preso":** quando um nicho custom está ativo, uma **barra** ("Usando o nicho: X · ✎ Editar / trocar nicho", via `injectActiveCustomBar`) permite voltar ao construtor com o preset carregado — e de lá trocar para outro salvo pelo dropdown. Antes, com preset ativo, o construtor e o dropdown sumiam (lock-out).
- **Nome pré-preenchido (item 3 do plano):** ao importar no Custom Inteligente, "Nome para salvar" já vem com um slug do título combinado — "Ativar"/"Salvar" funcionam de primeira.
- **Nome/seleção persistem:** o nome do preset agora fica em `STATE._cf._presetName`, restaurado pelo template a cada re-render (antes, qualquer rebuild — carregar/dispensar/seletor de conflito — apagava o campo `#cf-name`).
- **Texto de ajuda** sob os botões explicando Ativar / Salvar / Carregar / Excluir.
- **Mensagem de vazio da Início** agora é acionável (aponta para o Custom Inteligente / Ativar) em vez de só "crie um preset".

### Validação
- Novo teste `validate-reuse.js` (16 checagens): ativar com nome vazio (footgun), barra editar/trocar, carregar preset no editor, excluir. Regressão verde: 18/18 nichos, transições, compose, conflito. `node --check` ok; tags balanceadas (div 267/267). Índice ~531 KB / 8066 linhas.
- Verificado por teste: com preset ativo, a Início lista os arquivos do nicho (não era bug — vazio = nenhum preset ativo; lembrar do `localStorage` por origem: presets do site publicado não aparecem no arquivo local e vice-versa).

---

## v1.24.0 — 2026-06-04 — Custom Inteligente (etapa 1): 2º construtor, concatenação, dedup/conflito; re-entrância dos builders

Primeira etapa do **Custom Inteligente** (D-014): um SEGUNDO nicho de construção que parte da **composição assistida** de nichos prontos, mantendo o Custom (Blank) como página em branco. Feito em 4 sub-fases auditáveis (P10), validando a cada passo. Também corrige um **bug latente** dos construtores e os torna re-entrantes. **18 nichos** agora (era 17): 16 de conteúdo + 2 construtores.

### Custom Inteligente — etapa 1
- **2º construtor (`NICHES.customSmart`):** card ao lado do Blank (`category:"special"`), tema próprio (`data-niche="customSmart"`), hero próprio, `isBuilder:true`. `getCurrentNiche` generalizado para `raw.isBuilder` (ambos os construtores usam `mergeCustom`).
- **Chips (1.1):** fileira dos 16 nichos de conteúdo com seleção múltipla, contador ao vivo e "limpar seleção" (`renderSmartCustomForm`, `contentNiches`; estado em `STATE._sc`).
- **Concatenação (1.2):** `composeFromNiches` junta contextFiles + behaviors + promptsExtra + convenções + saídas dos nichos marcados; prompts renumerados G,H,I…; `body` de prompt (função `(p,n)=>str`) é renderizado para string; pré-preenche o editor Blank (`STATE._cf`) e cai no motor existente (`toPreset → mergeCustom → presets`). Banner de resumo no editor.
- **Dedup com conflito (1.3):** distingue duplicata **idêntica** (unifica em silêncio) de **conflito** (mesmo nome, conteúdo diferente → preserva versões e oferece **seletor de qual manter** por arquivo); comportamento com definição divergente é **sinalizado, não bloqueado** (spec-kit-like). O banner separa "idênticos unificados" de "⚠ conflitos".

### Conserto de bug + robustez
- **Bug latente (pré-existente, afetava o Blank):** `renderCustomForm` reescrevia a coluna de controles inteira e **nada restaurava o esqueleto** ao sair de um nicho construtor → controles errados/cascata (o próximo construtor também falhava). Conserto: `captureControlsSkeleton`/`restoreControlsSkeleton` + restauração no topo de `renderBuilder` e dos dois formulários construtores.
- **Re-entrância:** `renderCustomForm` e `renderSmartCustomForm` agora são idempotentes (restauram o esqueleto antes de reescrever) → re-chamadas diretas (cf-load/save/delete, "limpar seleção", "dispensar") param de abortar em silêncio.

### Registros
- **D-018** (DECISOES): o mount `/mnt/project/` é alimentado por **upload direto**, NÃO pelo conector do GitHub (que alimenta só o RAG/Conhecimento do Projeto); corrige a conclusão de D-016/v1.22.0. O mount chega achatado.

### Validação
- Harness jsdom **reconstruído** (o ambiente reseta entre sessões), com **boot limpo por nicho** (evita contaminação do construtor que reescreve a coluna). `validate.js` **18/18 nichos, 0 erros**; `validate-switch.js` (5 transições construtor↔normal); `validate-compose.js` (compor dev+pixel, 15 checagens); `validate-conflict.js` (conflito + seletor, 18 checagens). `node --check` (0 erros) + tags balanceadas (div 264/264). Índice ~528 KB / 8024 linhas. **Caso real:** dev+pixel revela 2 conflitos (`STATUS.md`, `LOG-TEMPLATE.md`).

---

## v1.23.0 — 2026-06-03 — Refino das diretrizes (P8/P11), handoff multi-pasta e canal de atualização

Refinamentos pedidos pelo usuário em cima da v1.22.0, **antes de transferir** — para evitar choque/inconsistência/redundância entre diretrizes. **Achado empírico:** o mount `/mnt/project/` está **achatado** (todos os arquivos na raiz; sem subpastas `meta/`/`logs/`), mesmo o repo do GitHub tendo `meta/`. Com uploads diretos + GitHub duplicados não dá para isolar se o GitHub achata as subpastas ou se é o upload que aparece — fica recomendado um **teste limpo** (só-GitHub, conversa nova, `ls -R /mnt/project/`).

### Diretrizes refinadas (`BEHAVIORS_BASE`)
- **P8 (verifica / não inventa):** escopo corrigido — a regra é contra **inventar silenciosamente** um arquivo que deveria ter; **exceção explícita:** se o usuário PEDIR para inferir/extrapolar/completar, o assistente faz (transparente, como inferência). Resolve o conflito quando o usuário de fato quer inferência.
- **P11 (versões):** reformulado de "pausa e avisa se desatualizado" para **"usa sempre a versão mais recente que tem; só PARA e pede quando NÃO tem a atualizada que a tarefa exige"** — não interrompe trabalho no meio para pedir algo que já possui (evita o "monstro" de halts desnecessários). Avisa em uma linha quando usa a sua versão em vez da do Projeto.

### Handoff (seção transversal)
- **Ritual de início:** o assistente **mapeia a estrutura montada** (`/mnt/project/`) e informa ao usuário o que há e onde — útil em projetos multi-pasta (Next/Svelte) onde o usuário pode não saber o que passar.
- **Multi-pasta:** colocar TUDO no Projeto (GitHub/upload) + ferramenta de código → mount; **anexar é o último recurso** (chat sem ferramenta). Aviso sobre **colisão de nomes iguais** em pastas diferentes (mount achatado): diferenciar com prefixo de pasta ou confiar no mapeamento.

### Canal de atualização (i-N3, reforçado)
- Ao integrar uma atualização do sistema num projeto já montado: **preserva a estrutura existente** (nichos/docs específicos), adapta só as camadas universal/transversal, e **mostra a lista do que vai mudar antes de mudar**. **Feedback opcional** (só se pedido): resume o que o projeto criou além do Kit, para levar de volta — sem sobrecarregar a conversa que recebe a atualização.

### Registros
- **D-017** (DECISOES): refino P8/P11 + handoff multi-pasta + canal, com o achado do mount achatado e a recomendação do teste limpo.

### Validação
- `node --check` (0 erros) + balanceamento de tags + jsdom: **17/17 nichos, 0 erros**, handoff em todos. Índice ~519 KB / 7705 linhas.

---

## v1.22.0 — 2026-06-03 — Mount/ferramenta de código no protocolo de transferência + diretrizes refinadas

Refino do protocolo de transferência (continuação da v1.21.0), motivado por (a) uma divergência real entre duas conversas que o usuário trouxe e (b) atritos entre diretrizes que ele identificou. **Verificação empírica nesta sessão:** o `/mnt/project/` é um mount dos arquivos do Projeto que eu leio INTEIRO com a ferramenta de código, **independente de RAG** — li o `index.html` completo (518 KB, byte-idêntico ao entregue) com o Projeto em "Modo de pesquisa".

### Corrigido (estava impreciso na v1.21.0)
- A seção de transferência (`UPDATE_PROTOCOL.handoffComo`) e a tela "Tokens & Fluxos" diziam "arquivo grande → RAG → anexar", conflando dois mecanismos. **Correção:** existem DOIS canais — o conhecimento do Projeto no chat (in-context/RAG) E o mount `/mnt/project/` (lido inteiro pela ferramenta de código, mesmo em RAG). O que importa é ter o arquivo COMPLETO por algum canal, não o rótulo RAG. Anexar é o caminho do chat comum (sem ferramenta de código).

### Adicionado ao CLAUDE.md gerado (todos os nichos)
- **Caminho limpo para projetos com código/repo:** deixar tudo no Projeto (inclusive grandes) + ligar a ferramenta de código → leitura/edição pelo mount, sem anexar. **Ritual de início:** o assistente confere se tem o mount; se não tiver (ferramenta desligada), avisa o usuário para ligá-la ANTES de trabalhar. **Projetos multi-pasta** (Next, Svelte): o grosso no Projeto/mount, anexar só o arquivo da tarefa, respeitando o limite de anexos (sem número fixo).

### Diretrizes universais refinadas (`BEHAVIORS_BASE`: 9 → 11)
- **Princípio 2 (tokens), esclarecido:** economizar token nunca é evitar pedir um arquivo necessário nem inferir para "poupar um turno"; token em trabalho verificável é investimento, inferir arquivo falso é o desperdício maior. (Resolve o atrito que o usuário sentiu.)
- **Princípio 3 (direto):** + "sem rodeios" — dá a resposta ou o bloqueio claro ("não tenho X completo, me envie").
- **Princípio 8 (verifica antes de pedir):** + anti-inferir — se não tiver o arquivo completo, faz a parte que dá e pede o resto; nunca reconstrói para "seguir mesmo assim".
- **Princípio 10 (novo) — Cadência:** trabalho grande em fases auditáveis (plano no ROADMAP/IDEAS/STATUS), cada incremento completo; não fragmenta o trivial. Não afrouxa a regra de doc completo.
- **Princípio 11 (novo) — Não regride nem mistura versões:** antes de editar, confere se o arquivo bate com a versão mais recente que o assistente gerou (e a coerência interna); se estiver desatualizado/inconsistente, PAUSA e avisa antes de agir. (Resolve o caso relatado dos "2 arquivos incompletos que se completavam".)

### Registros
- **D-016** (DECISOES): mount/ferramenta de código no protocolo + refino das diretrizes, com a verificação empírica e a reconciliação da divergência.
- CONTEXT.md (mecanismo dos dois canais + armadilha #7 corrigida), CLAUDE.md (princípios refinados + realidade do mount + ritual) atualizados.

### Validação
- `node --check` (0 erros) + balanceamento de tags + jsdom: **17/17 nichos, 0 erros**, handoff em todos. Índice ~519 KB / 7703 linhas.

---

## v1.21.0 — 2026-06-03 — Transferência entre conversas: contexto/RAG + plano de handoff (transversal)

Implementa a ideia **i-N9**: ensina o assistente (e o usuário) a lidar com o que o Claude consegue ou não fazer com arquivos do Projeto (RAG) vs. anexados — resolvendo uma lacuna de conhecimento que pôs projetos do usuário em risco. Foi um desvio pedido pelo usuário ANTES do Custom Inteligente.

### Adicionado ao CLAUDE.md gerado (todos os nichos)
- **Seção "Transferência entre conversas: o que vai para o Projeto e o que se anexa"** no UPDATE_PROTOCOL (campos `handoffTitulo`/`handoffIntro`/`handoffComo`, renderizados em `buildClaudeMd`). Cobre: os dois modos do conhecimento do Projeto (in-context vs. RAG/"Modo de pesquisa"); a **regra dura anti-arquivo-falso** (nunca reconstruir a partir de fragmentos — pedir o anexo); onde colocar cada arquivo (leve→Projeto, de preferência upload direto; grande/em-edição→anexo); o comportamento do anexo (por sessão, custa token, fidelidade total); o **handoff ao final** (dizer arquivo-por-arquivo onde colocar + montar o prompt de início); e a verificação de integridade.

### Adicionado à UI (view "Tokens & Fluxos")
- **Seção "Contexto vs. RAG — e onde colocar cada arquivo":** o enquadramento RAM/disco, a tabela dos dois modos, como identificar o "Modo de pesquisa", onde colocar cada arquivo, e a regra de ouro. Correção do item que dizia "o Claude lê sozinho" sem a ressalva do RAG.

### Fundamento (pesquisa 2026-06-03)
- **Documentação oficial:** conhecimento do Projeto alterna automaticamente in-context ↔ RAG por TAMANHO; RAG expande ~10x e mostra indicador visível; volta a in-context se encolher. Sincronização do GitHub é MANUAL ("Sync now"), só puxa nome+conteúdo do branch (sem histórico/PRs), e há relatos de quebra silenciosa. Anexo é por sessão e custa contexto a cada turno; contexto NÃO passa entre conversas a menos que esteja no conhecimento do Projeto.
- **Persistência/fidelidade:** um arquivo nasce fiel na conversa que o gerou (entra no histórico) — mesma fidelidade de um anexo, mesmo custo de token — mas só enquanto está na janela viva (conversa longa é compactada e perde o que sai da janela). "Ler/aprender" um arquivo NÃO cria cópia durável; a fidelidade vem de o conteúdo estar PRESENTE no contexto.
- **Context engineering** (Anthropic "Effective context engineering" + literatura): janela é recurso finito; "context rot" (recall cai com o volume; janela maior não resolve); estratégias offload/retrieve/isolate/compress; Git para estado entre sessões; "sumarização iterativa ancorada" (doc de estado) = papel do STATUS. Valida a arquitetura do kit.

### Registros
- **D-015** (DECISOES): protocolo de transferência (contexto vs. RAG), com fundamento técnico.
- **i-N9** (IDEIAS): implementada. **i-N10** semeada (carimbo de versão automático nos downloads).
- **CONTEXT.md** ganhou a seção "Contexto vs. RAG, anexo e fidelidade" + armadilha #7; **CLAUDE.md** ganhou a regra "Transferência e fidelidade de arquivo"; **README.md** ganhou a seção de contexto/RAG/transferência.

### Validação
- `node --check` (0 erros de sintaxe) + balanceamento de tags + teste DOM (jsdom): **17/17 nichos, 0 erros**, seção de handoff confirmada no CLAUDE.md de todos. Índice em ~519 KB / 7700 linhas. (O "Boot failed: DOMException" no harness é esperado — boot precisa de elementos reais; o teste chama buildClaudeMd/buildInstr direto.)

---

## v1.20.0 — 2026-05-30 — Privacidade (i-N2): relevância + marcação, não censura

Implementa a ideia i-N2 no formato aprovado pelo usuário — no UPDATE_PROTOCOL (transversal a todos os nichos, no CLAUDE.md gerado).

### Adicionado ao CLAUDE.md gerado (todos os nichos)
- **Seção "Privacidade: o que vai (e não vai) para os documentos".** Tese: o mecanismo certo NÃO é censura (que atrapalharia a captura do que importa), é relevância + marcação.
  - Informação pessoal incidental sem valor de contexto fica fora — por irrelevância, não censura (resolve o caso do "desabafo no meio de uma ideia").
  - Informação sensível que PRECISA ser registrada: o assistente sinaliza e oferece generalizar/omitir o detalhe, preservando o dado útil. Decisão final do usuário.
  - Na dúvida entre "contexto útil" e "pessoal demais", pergunta antes de gravar.

### Também nesta leva
- **NICHOS-CANDIDATOS.md** (meta): recuperado dos PLANNING-PART1/PART2 o mapa dos 22 nichos candidatos — os 16 que entraram + os 8 que ficaram de fora (Educação, Jurídico, Saúde, Filosofia, Podcast, Coaching, User Research, Arquitetura), com arquivos sugeridos de cada. Para não se perder de novo.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Seção de privacidade confirmada no CLAUDE.md gerado.

---

## v1.19.0 — 2026-05-30 — Commit ao final + canal de atualização (transversais a todos os nichos)

Implementa duas ideias pendentes, ambas no UPDATE_PROTOCOL (transversal — valem para TODOS os 17 nichos, no CLAUDE.md gerado), sem mexer em nicho individual.

### Adicionado ao CLAUDE.md gerado (todos os nichos)
- **Commit pronto ao final (i-N1 generalizada):** seção que instrui o assistente a fechar entregas com a mensagem de commit pronta (Conventional Commits), quando o projeto usa Git. Sensível ao SO: se o seletor de SO estiver definido, a nota explica a sintaxe certa do shell (ex.: CMD do Windows = uma linha, `-m` repetido). Antes isso só existia no CLAUDE.md do nosso próprio projeto (dogfooding); agora qualquer projeto criado pelo kit ganha a regra.
- **Canal de atualização do kit (i-N3 parte A):** seção que prepara o assistente para receber atualizações do Kit dentro de uma conversa que já usa o projeto — reconhecer um bloco/arquivo marcado como "atualização do Kit", resumir o que mudou (1-3 linhas) antes de aplicar, preservar o conteúdo específico do projeto ao adotar um template novo, e perguntar em caso de conflito de regra. Resolve a ideia sem mudar UI: é texto gerado, puro.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Ambas as seções confirmadas no CLAUDE.md gerado (testado com music + SO Windows-CMD).

---

## v1.18.0 — 2026-05-30 — Etapa 16: nicho brainstorm aprofundado — O FECHAMENTO 🎉

Décimo-sexto e ÚLTIMO nicho a aprofundar — e o mais simbólico: é o nicho do PRÓPRIO KIT (ideação, pensar junto). Fecha o ciclo de refinamento área por área. Matéria-prima: pesquisa do domínio (técnicas — divergir/convergir, Double Diamond, SCAMPER, How Might We, affinity/clusters; o papel da IA — parceira de pensamento vs. máquina de respostas, anti-sycophancy, atrito produtivo) + tudo aprendido nas 15 etapas anteriores.

### Nicho brainstorm v2
- **7 templates**: TEMA, IDEIAS, MAPA, FILTROS, STATUS, LOG-TEMPLATE (núcleo) + **DECISOES** (opcional, quando alimenta escolhas reais).
- **IDEIAS.md** reestruturado em ativas / banho-maria / descartadas-com-razão / sementes — "nada se perde" (a descartada pode ressuscitar noutro contexto).
- **TEMA.md** começa pela pergunta central (formato "Como poderíamos...") + suposições embutidas a questionar; **FILTROS.md** com critérios explícitos à vista + caminho recomendado; **MAPA.md** com clusters por afinidade + eixos + território vazio.
- **8 behaviors** (o mais rico do kit, à altura do fechamento): divergir antes de convergir; **espelho e contraponto, não eco** (anti-bajulação — o behavior-assinatura); questiona a premissa; quebra modelos mentais (SCAMPER/reverso/analogias); clusters e eixos; critério transparente ao convergir; nada se perde + a síntese decide; **pensar COM você, não POR você**.
- **6 prompts G-L** num arco completo: G Enquadrar o problema (a pergunta certa), H Divergir, I Mapear, J Convergir, **K Aprofundar/pressionar uma ideia** (advogado do diabo honesto), L Destravar.

### Fundamento (pesquisa 2026)
- Divergir antes de convergir (Double Diamond); volume sobre perfeição; não julgar cedo (o erro nº1 da ideação).
- SCAMPER e técnicas quebram modelos mentais; brainstorm reverso, analogias, inversão para sair do óbvio; "How Might We" reformula o problema.
- Convergir com critério explícito (viabilidade/impacto/alinhamento); affinity diagrams/clusters; matriz impacto×esforço como apoio, não veredito.
- O coração do nicho: a IA é espelho/catalisador do pensamento, não máquina de respostas. A SYCOPHANCY ("glazing") corrói o pensamento crítico — se a interação fica frictionless demais, perde-se a tensão que gera insight. Pensar COM a IA (mantendo o pensamento independente), não deixar a IA pensar POR você. Metas honestas (quem você é, não quem "deveria" ser).

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros, selects do topbar populando. Brainstorm com 12 prompts e 7 templates.

### 🏁 MARCO FINAL
- **TODOS os 16 nichos de conteúdo estão no padrão de ouro** (8 sérios + 8 criativos). Só o custom (gerador, não precisa de aprofundamento) fica como está. O refinamento área por área está COMPLETO.

---

## v1.17.0 — 2026-05-30 — Etapa 15: nicho comics (HQs/Mangás) aprofundado

Décimo-quinto nicho (7º e ÚLTIMO criativo de conteúdo). Só falta o brainstorm (fechamento). Matéria-prima: pesquisa do domínio (linguagem sequencial — Scott McCloud/Will Eisner: sarjeta/closure, transições, página como arquitetura; roteiro/lettering — full script vs Marvel method, formato, balão enxuto, virada de página, webtoon) + padrão de ouro dos anteriores.

### Nicho comics v2
- **7 templates**: OBRA, PERSONAGENS, ROTEIRO, MUNDO, STATUS, LOG-TEMPLATE (núcleo) + **PRANCHAS** (opcional, breakdown de páginas/thumbnails).
- **ROTEIRO.md** em formato real de quadrinho (PÁGINA/QUADRO/BALÃO/LEGENDA/SFX), com marca L/R para a virada de página e notas de transição.
- **OBRA.md** com método de roteiro e direção de leitura (incl. scroll vertical do webtoon); PERSONAGENS com design/silhueta + formato de balão característico.
- **7 behaviors**: continuidade tem memória; pensa na sarjeta/closure (não só no quadro); a página é arquitetura (controla o tempo, a quebra de página guarda o reveal); um quadro uma ação; escreve para o artista/letreirista (balão ≤25 palavras); mostre no desenho não no balão; escreve/estrutura — o artista desenha.
- **6 prompts G-L**: G Conceito, H Escrever roteiro (página/quadro), I Planejar páginas (layout/ritmo), **J Resolver transição/sequência**, K Revisar diálogo e balões, **L Diagnosticar ritmo/leitura travada**.

### Fundamento (pesquisa 2026)
- A sarjeta e o "closure" (McCloud): o leitor preenche o que está entre quadros — é o que torna o quadrinho interativo; sarjeta padrão/larga/ausente muda o ritmo. As 6 transições de McCloud.
- A página é arquitetura que controla o tempo (quadro grande desacelera, pequeno acelera); a quebra de página (L/R) guarda o reveal; quebrar o quadro para impacto.
- Um quadro = uma ação (erro nº1 do novato); roteiro serve ao artista (full script vs Marvel method; formato claro; balão ≤25 palavras / ≤3 linhas; SFX/display lettering).
- Webtoon/scroll vertical é outra experiência (respiro, "thumb stops"), não um resize. Mostre no desenho; silêncio é recurso.
- Papel do assistente: não desenha — escreve roteiro, planeja página, mantém coerência; o traço é do artista.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros, selects do topbar populando. Comics com 12 prompts e 7 templates.

### Marco
- **TODOS os 7 criativos de conteúdo concluídos** (game, pixel, music, rpg, cuisine, animation, comics). Falta só o brainstorm (fechamento poético) + custom (gerador).

---

## v1.16.0 — 2026-05-30 — Etapa 14: nicho animation (Animação) aprofundado

Décimo-quarto nicho (6º criativo; penúltimo antes do fechamento). Matéria-prima: pesquisa do domínio (ofício — 12 princípios de animação de Disney/Thomas & Johnston; pipeline — 3 fases, cadeia roteiro→storyboard→animatic que trava o timing) + padrão de ouro dos anteriores. O nicho antigo era forte em "série/roteiro" mas raso no ofício de animação; v2 equilibra os dois lados.

### Nicho animation v2
- **8 templates**: PROJETO, PERSONAGENS, ROTEIROS, ESTILO, PRODUCAO, STATUS, LOG-TEMPLATE (núcleo) + **CENAS** (opcional, quebra shot a shot).
- **ROTEIROS.md** com beats + notas de staging/timing pretendido (resolver no papel) + solução visual (mostre, não conte).
- **ESTILO.md** ganhou seção "Linguagem de movimento" (frame rate/on-twos, quais dos 12 princípios definem o feel, timing característico); **PRODUCAO.md** com o pipeline explícito (pré→produção→pós) e o "cemitério saudável" de cortes.
- **7 behaviors**: continuidade tem memória; os 12 princípios são o ofício (com moderação); trava o timing antes da produção cara (storyboard/animatic); voz e design por personagem (silhueta que comunica); arco do episódio E da série; mostre em movimento não conte; orienta/estrutura — o animador executa.
- **6 prompts G-L**: G Conceito/história, H Roteiro, **I Storyboard/animatic (resolver o ritmo)**, J Animar uma ação (os princípios), **K Diagnosticar movimento sem vida**, L Decisão de escopo.

### Fundamento (pesquisa 2026)
- 12 princípios (Disney/Thomas & Johnston): squash&stretch, antecipação, staging, ease in/out, arcos, follow-through, timing, exagero, secondary action, apelo... — dão peso/vida/clareza; usar com moderação; ignorá-los é dos erros que mais estragam animação.
- Pipeline em 3 fases (pré→produção→pós); a cadeia roteiro→storyboard→animatic TRAVA timing/staging antes da produção cara; o animatic é a ponte que revela problemas de pacing cedo.
- Silhueta que comunica personalidade (design simples mas individual); foco no timing tanto quanto no visual.
- Papel do assistente: não anima nem desenha — orienta princípios/estrutura/roteiro/pipeline; o "ficou com vida" se vê no movimento, é do animador.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros, selects do topbar populando. Animation com 12 prompts e 8 templates.

---

## v1.15.0 — 2026-05-30 — Etapa 13: nicho cuisine (Cozinha) aprofundado

Décimo-terceiro nicho (5º criativo). O caso The Brazilian House foi VERIFICADO e descartado para este nicho (é projeto de design gráfico de cardápio físico, não culinária — já serviu ao nicho design). Matéria-prima: pesquisa própria do domínio (desenvolvimento de receita — ratios, teste com 1 variável, padronização; menu/restaurante — engenharia de cardápio, contribution margin vs food cost %, plate cost) + padrão de ouro dos anteriores.

### Nicho cuisine v2
- **6 templates**: CONCEITO, RECEITAS, MENU, STATUS, LOG-TEMPLATE (núcleo) + **CUSTOS** (opcional, plate cost/margem). (REFERENCIAS antiga foi absorvida em CONCEITO/MENU.)
- **RECEITAS.md** centrado no RATIO (a proporção) + método com o PORQUÊ + pontos críticos + alérgenos — não só lista de ingredientes.
- **MENU.md** com engenharia de cardápio (matriz popularidade × margem: estrela/enigma/cavalo de batalha/abacaxi); **CUSTOS.md** com plate cost e a lição bife × frango (margem > food cost %).
- **7 behaviors**: o ratio é a fundação; muda uma coisa por teste; a pesquisa informa não dirige; NÃO cozinho nem provo (o cozinheiro prova — paralelo ao 'não ouço áudio' do music); técnica com o porquê (ciência); custo e margem (não só food cost %); alergias e clareza.
- **6 prompts G-L**: G Desenvolver receita, H Escalar/adaptar, I Diagnosticar prato que falhou, J Montar/ajustar menu, K Custo e precificação, **L Combinar sabores/criar do zero**.

### Fundamento (pesquisa 2026)
- Ratios são a fundação: saber a proporção é saber todas as variações (vinagrete 3:1, bolo em partes iguais); escolha de ingrediente dentro do ratio = personalidade.
- Desenvolvimento: mudar UMA variável por teste; testar ≥2x; a pesquisa informa o primeiro teste (nunca aleatório), não dirige; Flavor Bible para combinações; outra pessoa testa a clareza.
- Menu: engenharia de cardápio (popularidade × lucratividade); CONTRIBUTION MARGIN importa mais que food cost % (bife 50% põe mais no caixa que frango 33%); plate cost padronizado (incluir tempero/guarnição); rever sazonal/trimestral.
- Papel do assistente: não tem paladar — orienta ratio/técnica/estrutura/custo; o ponto e o tempero são do cozinheiro.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros, selects do topbar populando. Cuisine com 12 prompts e 6 templates.

---

## v1.14.0 — 2026-05-30 — Etapa 12: nicho rpg (Mestres de RPG) aprofundado

Décimo-segundo nicho (4º criativo). Matéria-prima: pesquisa do domínio (prep — método Lazy DM/Sly Flourish, prep leve, segredos abstratos; mesa — agência do jogador, yes-and, improviso, NPCs com motivação, Session Zero/safety tools, pacing) + padrão de ouro dos anteriores.

### Nicho rpg v2
- **8 templates** (antes 7): MUNDO, PJs, NPCs, CAMPANHA, SESSAO, STATUS, LOG-TEMPLATE (núcleo) + **REGRAS-CASEIRAS** (opcional, house rules/rulings/Session Zero).
- **SESSAO.md** reestruturado no método Lazy DM (início forte, cenas modulares, segredos, NPCs, ameaças, recompensas, cliffhanger).
- **CAMPANHA.md** com "situação atual (não enredo linear)", segredos abstratos da revelação, e fios soltos/promessas a pagar; **PJs.md** com gancho pessoal e spotlight (equilíbrio de holofote); **NPCs.md** com voz/motivação/stakes + "bag of tricks".
- **7 behaviors**: lore tem memória; NPCs com voz/motivação/stakes; PJs no banco do motorista (mestre é facilitador, não oponente); prep leve do que a party toca; segredos abstratos da revelação; improvisa com coerência (yes-and); cuida da mesa (Session Zero, segurança, pacing).
- **6 prompts G-L**: G Criar mundo, H Preparar sessão (Lazy DM), I Encarnar/criar NPC, **J Improvisar agora** (a party saiu do previsto), K Processar a sessão (pós-mesa), **L Resolver problema de mesa**.

### Fundamento (pesquisa 2026)
- Método Lazy DM (Sly Flourish): prep sessão-a-sessão, leve e modular; o mínimo é início forte + 2-3 cenas + 2-3 NPCs + segredos; improvise o resto. Framework vs. detalhe (como jazz).
- Prep o que a party vai tocar, não o mundo inteiro; segredos/pistas são o tecido conectivo, abstratos de como serão revelados.
- Agência do jogador é central: o GM é facilitador, não oponente; as escolhas dos PJs dirigem a história. Improvisar > preparar; "sim, e..." em vez de bloquear.
- NPCs com motivação, voz distinta e stakes (proativos). Session Zero + ferramentas de segurança (linhas e véus, X-Card); pacing em camadas; o divertimento de todos antes da história perfeita.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros, selects do topbar populando. RPG com 12 prompts e 8 templates.

---

## v1.13.0 — 2026-05-30 — Etapa 11: nicho music (Música) aprofundado

Décimo-primeiro nicho (3º criativo). Matéria-prima: pesquisa do domínio (produção — 4 fases demo→master, pré-produção, arranjo; mix/teoria — gain staging, EQ, kick×baixo, reference track; letra/songwriting — prosódia, específico→universal, hook) + padrão de ouro dos anteriores.

### Nicho music v2
- **7 templates** (antes 6): PROJETO, FAIXAS, LETRAS, ARRANJO, STATUS, LOG-TEMPLATE (núcleo) + **REFERENCIAS** (opcional, biblioteca destrinchada). HARMONIA virou ARRANJO (harmonia + arranjo + decisões + checklists técnicos).
- **PROJETO.md** com sonoridade-alvo + voz lírica + referências como lente; **LETRAS.md** com prosódia e o princípio específico→universal; **ARRANJO.md** com decisões (intenção) + checklists técnicos de pré-produção/mix/QC.
- **7 behaviors**: honestidade sobre o som (NÃO ouço áudio — julgo no papel, o produtor confere de ouvido); letra com voz e prosódia; harmonia em humanês (ligada ao efeito); referência como lente não cópia; arranjo é movimento; registra a intenção; orienta e propõe, o artista toca e decide.
- **6 prompts G-L**: G Conceito/sonoridade, H Escrever/revisar letra, I Harmonia/progressões, J Estrutura/arranjo, K Checklist de mix (ordem técnica), **L Destravar (bloqueio criativo)**.

### Fundamento (pesquisa 2026)
- 4 fases (demo→gravação→mix→master); pré-produção (referência, BPM/tom, esboço); arranjo = quando elementos entram/saem; o gap de QC pré-master é onde se perde qualidade.
- Mix: gain staging primeiro (mix estático antes de plugins, headroom -6 a -3dB); EQ é dar espaço (kick×baixo, cortar mud 125-500Hz); reference track é bússola.
- Letra: prosódia (casamento palavra+música); partir do específico (imagem concreta) para o universal; hook = simplicidade/repetição/contraste/prosódia; ritmo melódico é a fundação; rima é ferramenta, não obrigação.
- Limite do assistente: não ouve áudio — orienta teoria/estrutura/letra e dá checklists; o sonoro é do ouvido do artista.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros, selects do topbar populando. Music com 12 prompts e 7 templates.

---

## v1.12.0 — 2026-05-30 — Etapa 10: nicho pixel art aprofundado

Décimo nicho (2º criativo; 3º favorito do usuário). Matéria-prima: pesquisa do domínio (fundamentos — clusters, AA, dithering, silhueta, evitar jaggies/banding/pillow; animação — timing, squash&stretch, anticipation, pivô; workflow/consistência — style guide anti-drift, resolução em grade, outline padronizado) + padrão de ouro dos anteriores.

### Nicho pixel v2
- **7 templates** (antes 6): ESTILO, SPRITES, ANIMACAO, RESTRICOES, STATUS, LOG-TEMPLATE (núcleo) + **TILESET** (opcional, cenários).
- **ESTILO.md** trava paleta (com rampas/hue shifting), resolução+grade, outline padronizado, fonte de luz fixa, e a "assinatura negativa" (vilões banidos).
- **ANIMACAO.md** com timing de referência por ação (idle ~400ms, walk ~100-150ms, run ~80-100ms, hold no impacto), squash&stretch, anticipation como game design, e pivô consistente (anti-janky).
- **SPRITES.md** cataloga com silhueta, paleta usada, pivô e estado; RESTRICOES separa limites técnicos e disciplinas autoimpostas.
- **7 behaviors**: paleta é lei; silhueta antes de tudo; AA é escolha (não default); caça jaggies/banding/pillow/tangentes; timing antes de frames; trava consistência (anti-drift); orienta e critica — o artista executa.
- **6 prompts G-L**: G Definir estilo/paleta, H Planejar sprite, I Criticar sprite, J Planejar animação, K Diagnosticar problema visual, **L Auditar consistência (anti-drift)**.

### Fundamento (pesquisa 2026)
- Fundamentos: clusters para textura, silhueta legível primeiro, sombrear = esculpir forma (não enfeitar); AA é controverso (muitos evitam — borda dura é estética); paleta limitada força melhor design.
- Vilões: jaggies, doubles, banding, pillow shading, tangentes — com seus consertos.
- Animação: timing é tudo (poucos frames bem cronometrados > muitos flat); squash&stretch vale até em 16×16 (1px); anticipation é game design (telegrafar ataques); pivô inconsistente é o erro nº1.
- Consistência: style guide escrito cedo previne visual drift (o assassino indie); resolução em grade limpa; outline padronizado nunca misturado; 32×32 é o sweet spot.
- Papel do assistente: orienta/planeja/critica técnica e mantém coerência — não desenha os pixels.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros, selects do topbar populando. Pixel com 12 prompts e 7 templates.

---

## v1.11.1 — 2026-05-30 — fix: selects do topbar (Gênero/Engine/Fase) vazios

Correção de bug funcional na interface, reportado pelo usuário (dropdowns do topbar apareciam vazios no game design e em outros nichos).

### Corrigido
- **Selects do topbar não populavam.** A `renderTopbar` só lia `f.opts` (formato de pares `[[valor,label]]`), mas os nichos reconstruídos (client, narrative, marketing, research, product, business, game) definem as opções como `options:["string",...]`. Resultado: `f.opts` indefinido → nenhuma `<option>` gerada → dropdown vazio. Agora a função aceita os DOIS formatos (`opts` de pares e `options` de strings), normalizando internamente. Imune a isso no futuro.
- **Idioma aparecia em branco.** 10 campos `langSel` usavam `default:"pt-BR"`, mas `LANGS` usa o valor `"pt"` — o default não casava com nenhuma opção. Corrigido para `default:"pt"` (agora mostra "Português (pt-BR)" selecionado).
- Selects sem default agora mostram um placeholder "—" inicial (em vez de auto-selecionar a primeira opção silenciosamente).

### Lição registrada
- O teste jsdom validava contagem de templates/prompts/preview, mas NÃO o conteúdo do topbar — por isso o bug passou. Teste de regressão do topbar (contar opções reais por select) foi adicionado ao ritual de validação.

### Validação
- Teste DOM: 17/17 nichos, 0 erros. game (Gênero 14 / Engine 11 / Fase 6), research (Área 8 / Fase 6), pixel (formato antigo, 4/5/4) — todos populam. Idioma = Português em todos.

---

## v1.11.0 — 2026-05-30 — Etapa 9: nicho game design aprofundado + seletor de SO

Nono nicho (primeiro CRIATIVO) reconstruído — o 2º favorito do usuário, com refino dedicado. Matéria-prima: pesquisa do domínio (MDA framework; economia/balanceamento de sistemas; produção indie e scope creep) + padrão de ouro dos anteriores.

### Seletor de sistema operacional (ideia i-N5, implementada)
- Novo campo no "Construir instrução" (Windows-CMD / Windows-PowerShell / macOS / Linux / não especificar). Injeta nas Instruções E numa seção "Ambiente" do CLAUDE.md a sintaxe certa de comandos de terminal (continuação de linha, caminhos), evitando o bug do `git commit` que quebrou no CMD do usuário. Padrão = não especificar. Persiste no estado.

### Nicho game v2
- **8 templates** (antes 7): JOGO, MECANICAS, UNIVERSO, ARTE-E-SOM, PRODUCAO, STATUS, LOG-TEMPLATE (núcleo) + **NIVEIS** (opcional, level design).
- **JOGO.md** começa pela EXPERIÊNCIA alvo (aesthetic) + core loop + pilares + anti-escopo (GDD enxuto e vivo).
- **MECANICAS.md** registra a INTENÇÃO por trás dos números (curva pretendida, sensação), economia com sources/sinks, premissas de jogador.
- **PRODUCAO.md** é a defesa contra scope creep: MVP, vertical slice, marcos, e o "cemitério saudável" (cortado/adiado com porquê).
- **7 behaviors**: começa pela experiência (MDA); pensa em sistemas; ancora no core loop; guarda a intenção por trás do número; trata escopo como assassino; design é hipótese a testar; explora mas o designer decide.
- **6 prompts G-L**: G Conceito/core loop, H Projetar mecânica, I Balancear sistema, J Decisão de escopo (cabe ou corta), K Playtest, **L Diagnosticar 'não está divertido'**.

### Fundamento (pesquisa 2026)
- MDA: começar pela aesthetic (a experiência), mecânicas → dynamics → aesthetics; core loop é o coração; definir a emoção alinha tudo; GDD enxuto e vivo.
- Economia começa com intenção; curvas (exponencial/logarítmica/sigmoide) têm propósito; alvo é o Flow (esforço×recompensa); simulação revela edge cases; pense em sistemas, não features.
- Scope creep é o assassino nº1 de jogos indie; cada "não" é um "sim" ao jogo terminado; vertical slice (cortar escopo, não qualidade); ideia boa que não cabe → registrar para depois.
- Design é hipótese; validar barato (protótipo de papel, vertical slice, playtest) antes de comprometer produção.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Game com 12 prompts e 8 templates. Seletor de SO testado (injeta em Instruções + CLAUDE.md).

---

## v1.10.0 — 2026-05-30 — Etapa 8: nicho business (Negócios) aprofundado

Oitavo nicho reconstruído — fecha os nichos "sérios". Matéria-prima: pesquisa do domínio (estratégia — frameworks como lentes, OKR, Business Model Canvas, SWOT/Porter; unit economics — CAC/LTV/runway, declarar premissas; decisão — first principles, risco e custo de oportunidade) + padrão de ouro dos anteriores.

### Antes / correção
- **fix(meta): regra de commit corrigida para CMD do Windows.** O `\` (continuação de linha bash) quebrava no CMD do usuário. CLAUDE.md do projeto agora especifica: comando numa linha só, repetindo `-m` (cada `-m` = um parágrafo). Registrada ideia i-N5 (comandos sensíveis ao SO).

### Nicho business v2
- **7 templates** (antes 6): CONTEXTO, OBJETIVOS, ANALISE, DECISOES, STATUS, LOG-TEMPLATE (núcleo) + **MODELO-FINANCEIRO** (opcional, unit economics).
- **CONTEXTO.md** com modelo de negócio (à la Canvas) + mercado + restrições.
- **OBJETIVOS.md** como FILTRO de decisão, com OKR (objetivo + KR mensuráveis) e "o que decidimos NÃO perseguir".
- **ANALISE.md** estruturada em premissas → análise → sensibilidade → conclusão → contraponto.
- **MODELO-FINANCEIRO.md** com tabela de unit economics (margem, CAC, LTV, LTV:CAC, payback, churn, runway), cenários e "a história por trás dos números".
- **6 behaviors** (reescritos): premissa sempre na mesa; número com conta (não chutado); sempre o contraponto; first principles antes de framework; risco e custo de oportunidade; a estratégia é o filtro.
- **6 prompts G-L**: G Diagnosticar, H Modelar números/unit economics, I Avaliar decisão (contraponto), J Planejar, K Aplicar lente/framework, **L Pensar cenários**.

### Fundamento (pesquisa 2026)
- Frameworks são lentes complementares, não receitas; combinar só se cada um agregar; entender o problema (first principles) vem antes.
- OKR para metas mensuráveis; estratégia como filtro de decisão ("isto nos aproxima da meta?"); foco é dizer não.
- Unit economics: poucos números importam (CAC, LTV, churn, margem, burn); são interdependentes (escalar com fundamento ruim queima caixa); LTV:CAC ~3:1, payback tão importante quanto a razão; SEMPRE declarar premissas.
- Decisão por risco E custo de oportunidade; a narrativa por trás dos números importa mais que a planilha.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Business com 12 prompts e 7 templates; tags semânticas corretas.

---

## v1.9.0 — 2026-05-30 — Etapa 7: nicho marketing aprofundado + afixo nos downloads

Sétimo nicho reconstruído + implementação da ideia N3-B (prefixo/sufixo nos downloads).

### Afixo opcional nos nomes de arquivo (ideia i-N3 parte B)
- Nova caixa na aba Templates: escolher **padrão** (nome original, como sempre), **prefixo** ou **sufixo**, com um campo de texto.
- Função única `applyAffix(name)` aplicada em downloadFile, downloadAllTemplates, ZIP e CLAUDE.md — um só ponto de verdade.
- Padrão = inalterado: quem não ativa continua baixando `STATUS.md`. Ativando prefixo "meu-projeto" → `meu-projeto__STATUS.md`; sufixo → `STATUS__meu-projeto.md`. Sanitiza espaços/barras/aspas. Preview ao vivo.

### Nicho marketing v2
- **7 templates** (antes 6): MARCA, AUDIENCIA, TOM-E-VOZ, PAUTA, STATUS, LOG-TEMPLATE (núcleo) + **RESULTADOS** (opcional, desempenho por funil).
- **MARCA.md** com os 3-5 PILARES de conteúdo (temas que a marca possui, ligados a dor da audiência).
- **TOM-E-VOZ.md** com eixos de tom, exemplos aprovados/evitados, vocabulário e ajustes por canal.
- **PAUTA.md** como calendário vivo (tabela tema/pilar/formato/canal/status) + banco de temas + histórico.
- **6 behaviors** (reescritos): ancora nos pilares; voz consistente e do humano (IA é multiplicador); escreve para a audiência; adapta ao canal (não copia); distingue vanity de métrica real; calendário vivo.
- **6 prompts G-L**: G Estratégia/pilares, H Gerar pauta, I Escrever peça, **J Repurposing**, K Analisar desempenho (vanity vs. real), L Calibrar voz.

### Fundamento (pesquisa 2026)
- Content pillars (3-5 temas que a marca possui) dão direção e autoridade; conteúdo sem plano vira pilha de assets.
- Calendário editorial é documento vivo; estratégia documentada → mais resultado.
- Voz consistente entre formatos/canais; IA é multiplicador, humano é dono do POV/voz/precisão.
- Distribuição é estratégica (formato nativo por plataforma); repurposing multiplica, não copia.
- Métrica organizada pelo funil (awareness/consideração/decisão/lealdade); vanity ≠ actionable; foco em poucas métricas com contexto.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Marketing com 12 prompts e 7 templates. Afixo testado (padrão/prefixo/sufixo, sanitização, preview).

---

## v1.8.0 — 2026-05-29 — Etapa 6: nicho product (Produto/UX) aprofundado

Sexto nicho reconstruído; fecha os nichos "sérios". Matéria-prima: pesquisa do domínio (discovery moderno — Opportunity Solution Tree, JTBD; artefatos de PM — PRD, personas, jornadas; priorização — RICE, North Star) + padrão de ouro dos anteriores.

### Adicionado / enriquecido no nicho product
- **7 templates** (antes 6): PRODUTO, PERSONAS, JORNADAS, DECISOES, STATUS, LOG-TEMPLATE (núcleo) + **EXPERIMENTOS** (opcional, validação por hipótese).
- **PRODUTO.md** com North Star Metric + anti-escopo + proposta de valor via JTBD.
- **PERSONAS.md** centrado em JOB (não demografia), com alternativas atuais e sinais de comportamento real (observado vs. suposto).
- **JORNADAS.md** com tabela passo/emoção/atrito + oportunidades (espaço de problema, não soluções).
- **DECISOES.md** com métrica esperada e hipóteses/riscos por decisão.
- **6 behaviors** (reescritos): problema antes da solução (JTBD), sempre métrica de sucesso, chama o risco, prioriza com critério (não HiPPO), registra racional, fala pelo usuário com humildade.
- **6 prompts G-L**: G Discovery de pedido, H Escrever spec/PRD, I Priorizar, J Registrar decisão, K Analisar métrica, **L Mapear oportunidades (OST)**.

### Fundamento (pesquisa 2026)
- Discovery moderno = Opportunity Solution Tree (outcome → oportunidades → soluções → experimentos); resistir a pular para solução.
- JTBD: "as pessoas contratam um produto para um job"; solução para problema grande vale mais; o problema vem antes da solução.
- Priorização (RICE) é APOIO à decisão, não veredito; afastar o HiPPO; erro comum é confiança alta sem avaliar risco.
- Definir métrica de sucesso ANTES previne scope creep; North Star captura valor real, não vaidade; discovery é contínuo.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Product com 12 prompts (6 A-F + 6 G-L) e 7 templates; tags semânticas corretas.

---

## v1.7.0 — 2026-05-29 — Etapa 5: nicho research (Pesquisa) aprofundado

Quinto nicho reconstruído. Matéria-prima: pesquisa aprofundada do domínio (workflow de pesquisa/Zettelkasten; integridade e citação na era da IA; argumentação e síntese acadêmica) + o padrão de ouro dos nichos anteriores.

### Adicionado / enriquecido no nicho research
- **8 templates** (antes 6): TEMA, FONTES, HIPOTESES, SINTESE, STATUS, LOG-TEMPLATE (núcleo) + **GLOSSARIO** e **HISTORICO** (opcionais).
- **FONTES.md** reforçado: regra dura de só catalogar fonte VERIFICADA, citekey (autor-ano), e — central — a nota de POR QUE cada fonte importa (apoia/complica/contradiz a tese), além de uma fila "a verificar".
- **HIPOTESES.md** com três níveis explícitos (evidência × hipótese × especulação), status por hipótese, e seções de confirmadas/refutadas/intuições.
- **SINTESE.md** reformulado como ARGUMENTO: mapa do argumento, síntese por eixo temático (não por fonte), conceitos definidos, contra-argumentos e respostas, lacunas.
- **7 behaviors** (antes 5): citelock reforçado, hipótese vs. evidência vs. especulação, steel-man, **síntese é argumento não resumo**, **lacuna → tese**, **toda nota diz por que existe**, traduções controladas.
- **6 prompts G-L** (reescritos): G Mapear literatura (de fonte-semente, sem inventar citação), H Fichar fonte, I Testar hipótese, J Avançar síntese, **K Auditar integridade das citações**, L Revisar argumento.
- **Gatilhos próprios** (triggersExtra): fonte verificada → FONTES; hipótese muda status → HIPOTESES; avanço → SINTESE; conceito definido → SINTESE/GLOSSARIO.

### Fundamento (pesquisa 2026)
- Citação fabricada é crise real: ~40% das referências geradas por IA são erradas/inexistentes; alucinação é INDUZIDA pelo pedido, não inevitável; confiança ≠ correção. Daí o citelock como regra dura e o prompt de auditoria.
- Notas precisam dizer POR QUE existem (Zettelkasten); bibliografia separada das notas de ideia; conhecimento deve sobreviver ao fim do projeto.
- Síntese ≠ resumo: conexões/padrões/tensões entre fontes; cada fonte tem função; sinalizar fonte dominante e asserção sem sustentação.
- Tese precisa ser arguível (existe contra-argumento crível); posicionar como lacuna→tese; enfrentar a objeção mais forte (steel-man).

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Research com 12 prompts (6 A-F + 6 G-L) e 8 templates; tags semânticas corretas.

---

## v1.6.0 — 2026-05-29 — Etapa 4: nicho narrative (Narrativa & Ficção) aprofundado

Quarto nicho reconstruído. Matéria-prima: pesquisa aprofundada do domínio (story bible e continuidade; o papel da IA na ficção; craft de estrutura) + o padrão de ouro de dev/client/design v2. Sem caso real ainda — domínio coberto por pesquisa.

### Adicionado / enriquecido no nicho narrative
- **9 templates** (antes 7): BIBLIA, PERSONAGENS, ENREDO, VOZ, CONTINUIDADE, STATUS, LOG-TEMPLATE (núcleo) + **CRONOLOGIA** e **GLOSSARIO** (opcionais).
- **BIBLIA.md** (reformulado de UNIVERSO): a story bible com Tier 1 / Tier 2 explícitos (essencial primeiro, aprofunda sob demanda) + pilares de continuidade.
- **PERSONAGENS.md** enriquecido: aparência que não pode variar, querer (externo) × precisar (interno) como motor do arco, voz/fala, e "evolução registrada" (onde o personagem está AGORA, para não regredir).
- **ENREDO.md** (reformulado de TRAMA): estrutura + resumo rolante do que aconteceu + o que vem + decisões de enredo (DEC) + fios soltos a pagar (setup/payoff).
- **CONTINUIDADE.md** (reformulado de INCONSISTENCIAS): notas de continuidade + grafia canônica (tabela) + convenções de estilo + furos resolvidos.
- **6 prompts G-L** (reescritos): G Explorar continuações, H Revisar continuidade, I Feedback de desenvolvimento (pacing/arco), J Simular diálogo de personagem, K Registrar decisão narrativa, L Checar voz e grafia.
- **6 behaviors específicos** — o mais importante: «A IA não escreve a história — explora, o autor decide». Mais: separa problema mecânico de julgamento subjetivo; continuidade consulta antes de inventar; protege a voz do autor; beats como diagnóstico não fórmula; não super-documenta.
- **builderSection** ampliado: + tempo verbal; gênero/formato/POV reorganizados.

### Fundamento (pesquisa 2026)
- A story bible ancora consistência entre sessões (igual à sala de roteiristas de TV); mas NÃO super-documentar — Tier 1 primeiro, escrever importa mais que catalogar.
- A IA NUNCA escreve a história: a voz do autor é insubstituível; risco de manter prosa-IA sem examinar se soa como o autor.
- A IA é confiável no mecânico (continuidade, pacing, lógica), não no julgamento subjetivo (se a cena merece o pagamento emocional, se a metáfora funciona) — essas decisões são do autor.
- Beats/estrutura são diagnóstico na revisão, não molde a priori (risco de virar "versão burra do próprio estilo"); a história tem prioridade sobre o outline.
- Continuação = explorar possibilidades para o autor desenvolver na própria voz; simular diálogo ajuda a entender dinâmicas.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Narrative com 12 prompts (6 A-F + 6 G-L) e 9 templates; tags semânticas corretas.

---

## v1.5.0 — 2026-05-29 — Etapa 3: nicho design (Design Visual) aprofundado

Terceiro nicho reconstruído. Matéria-prima: pesquisa aprofundada do domínio (workflow de design e gestão de revisões; sistema de identidade de marca com 6 ativos e cores multi-espaço; pré-impressão/prepress) + o caso real The Brazilian House (peça impressa, cliente que usa IA, foco em legibilidade) + o padrão de ouro de dev/client v2.

### Adicionado / enriquecido no nicho design
- **9 templates** (antes 7): PROJETO, CLIENTE, MARCA, REFERENCIAS, DECISOES, REVISOES, STATUS, LOG-TEMPLATE (núcleo) + **PRODUCAO** (opcional, pré-impressão).
- **MARCA.md** (novo, central): sistema visual com os 6 ativos — logo (clear space, tamanhos mínimos, usos proibidos), **paleta em HEX/RGB/CMYK/Pantone** (para a cor não mudar entre tela e papel), tipografia, extensões, tom.
- **PRODUCAO.md** (novo, opcional): specs por entregável + **checklist de pré-impressão** (CMYK, sangria, margem de segurança, 300 DPI, fontes incorporadas, marcas de corte, prova real, PDF/X). Resolve o que o caso The Brazilian House expôs.
- **6 prompts G-L** (antes 4): G Brief/onboarding, H Explorar conceito (apresentar 2-3 direções), I **Interpretar feedback visual vago**, J Registrar decisão visual, K **Checklist de pré-impressão/entrega**, L **Preparar apresentação ao cliente**.
- **6 behaviors específicos**: dois olhares (designer + público-final); feedback = problema do cliente, solução do designer; consistência com o sistema visual; guarda escopo/rodadas; verifica specs técnicas de impressão; distingue referência de conteúdo vs. estilo.
- **Gatilhos próprios** (triggersExtra): conceito definido → DECISOES+MARCA; versão entregue → REVISOES+STATUS; decisão de cor/fonte → MARCA+DECISOES; peça indo p/ impressão → checklist PRODUCAO; pedido extra → 'Yes-and'.

### Fundamento (pesquisa 2026)
- Brief é a fundação; rodadas limitadas (2-3) com escopo claro; documentar feedback evita "ele disse, ela disse".
- Feedback deve ser específico, não prescritivo: a intuição do cliente sobre o PROBLEMA costuma estar certa, a SOLUÇÃO vem do designer.
- Identidade = 6 ativos; cores precisam de todos os espaços (HEX/RGB/CMYK/Pantone) para não mudar de tom entre mídias; logo precisa de regras técnicas (clear space, mínimos).
- Pré-impressão: CMYK desde o início, sangria 3mm, 300 DPI no tamanho final, fontes incorporadas, e PROVA REAL antes da tiragem.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Design com 12 prompts (6 A-F + 6 G-L) e 9 templates; tags semânticas corretas.

---

## v1.4.0 — 2026-05-29 — Etapa 2.5: consolidação da fundação + dogfooding

Pausa deliberada antes da Etapa 3, motivada por três pontos levantados pelo usuário e pela evolução do projeto-feedback GameDataHub2 (que, independentemente, convergiu para regras iguais às nossas — validação).

### Adicionado à fundação (universal, todos os nichos)
- **9º e 8º princípios universais** (antes 7):
  - **«Estuda o domínio antes de estruturar»** — ao aprofundar uma área com práticas estabelecidas, pesquisa o estado-da-arte antes de montar a estrutura. Eleva a regra que tornou o client bom de acaso a lei.
  - **«Verifica antes de pedir arquivo»** — quando o usuário diz «já subi X», procura X primeiro; só pede upload se não achar. Vinda do GameDataHub2; conecta ao princípio de não desperdiçar tokens.
- **Nova seção no CLAUDE.md gerado**: «Verifica antes de pedir um arquivo» (regra dura).

### Refinado
- **Protocolo de entrega de docs**: incorporada a nuance do GameDataHub2 — o que decorre do trabalho do assistente, o assistente registra (sem esperar pedido); o que o usuário quer acrescentar por conta é dele. Reforçado «entregar o conjunto consistente de uma vez; estado meio-atualizado é pior que não mexer».

### Dogfooding (o kit aplicado a si mesmo)
- **Criado `meta/CLAUDE.md`** do próprio projeto Kit: ritual de início, os 9 princípios aplicados a nós, padrões de código do index.html (incluindo a armadilha do `${today}` vs `${today()}`), como manter os docs, o processo de aprofundar um nicho (Etapas), e o checklist de validação. Resolve a transferência de contexto entre conversas do nosso próprio desenvolvimento.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. 9 princípios universais confirmados em todos os nichos.

---

## v1.3.0 — 2026-05-29 — Etapa 2: nicho client (Gestão de Cliente) aprofundado

Segundo nicho reconstruído em profundidade. Matéria-prima: feedback de uso real (BRIEFING do projeto The Brazilian House) + pesquisa de práticas profissionais do nicho (gestão de escopo, rodadas de revisão, "Yes-and" para scope creep, confirmação por escrito, comunicação difícil) + o padrão do dev v2.

### Adicionado / enriquecido no nicho client
- **8 templates** (antes 6): CLIENTE, PROJETO, ACORDOS, STATUS, ENTREGAS, LOG-TEMPLATE (núcleo) + **COMUNICACOES** e **FINANCEIRO** (opcionais).
- **6 prompts G-L** (antes 4): G Onboarding, H Registrar reunião, I Pedido fora de escopo ("Yes-and"), J Escrever comunicação (pensando na relação), **K Interpretar feedback ambíguo do cliente**, **L Preparar conversa difícil**.
- **6 behaviors específicos** reescritos a partir do caso real e da indústria: atua como profissional E cliente-final; distingue feedback do cliente vs. de IA/terceiros; guarda escopo com "Yes-and"; confirma o combinado por escrito; preserva a relação ao comunicar; verifica afirmações técnicas antes de afirmar.
- **Gatilhos próprios** (triggersExtra): reunião → ACORDOS+STATUS; pedido fora de escopo → ACORDOS + rascunho; entrega → ENTREGAS; mensagem-chave → COMUNICACOES; cotação/fatura → FINANCEIRO.

### Avanços de conteúdo notáveis
- **PROJETO.md** agora fixa entregáveis, **rodadas de revisão contratadas** e **exclusões** (o que NÃO está incluído) — a defesa central contra scope creep, confirmada pela pesquisa.
- **CLIENTE.md** captura **como o cliente dá feedback**, incluindo se ele repassa análise de IA/terceiros como se fosse dele (caso real do BRIEFING) e a dor de fundo dele (com as palavras dele).
- **STATUS.md** introduz "🎾 com quem está a bola" (cliente × prestador) — clareza de próximo passo.

### Fundamento (pesquisa 2026)
- Escopo explícito com rodadas e exclusões é a defesa central; mudança indefinida é cara.
- Scope creep se trata com "Yes-and" (reconhece, posiciona como adicional/fase-2, oferece caminho), não com "não está no escopo".
- Em comunicação difícil, o valor está em perguntar o que se quer preservar na relação e sinalizar se o tom vai sair pela culatra — não só polir texto.
- O papel do assistente é preparar (rascunho/registro); o profissional edita e envia, decide o que fazer com o feedback.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Client agora com 12 prompts (6 A-F + 6 G-L) e 8 templates; tags semânticas corretas.

---

## v1.2.0 — 2026-05-29 — Etapa 1: nicho dev aprofundado

Primeiro nicho reconstruído em profundidade (referência de ouro para os demais), usando como matéria-prima o feedback de uso real do projeto GameDataHub.

### Adicionado ao nicho dev
- **3 arquivos opcionais** (além dos 6 do núcleo): `ROADMAP.md` (plano em fases), `GLOSSARY.md` (termos do projeto), `HISTORICO.md` (conhecimento consolidado de fases antigas, lido sob demanda). Total: 9 templates.
- **5 prompts G-K** (o dev tinha zero antes): G Debugar com método (causa raiz, não band-aid), H Registrar decisão técnica (vira DEC-N), I Revisar código/diff, J Planejar feature ou fase, K Auditar antes de mexer em peça crítica.
- **Gatilhos específicos de dev** (`triggersExtra`): decisão de arquitetura → DECISIONS completo; mudança de fase → ROADMAP completo; termo novo → GLOSSARY completo.

### Enriquecido
- **CONTEXT.md**: agora inclui «Como funciona [componente] (CRÍTICO)», «Armadilhas Conhecidas» (o que NÃO fazer, com porquê) e «Contexto de Produto». Antes era só visão/stack/estrutura.
- **STATUS.md**: estrutura ✅Funcionando / 🔧Em Progresso / ❌Quebrado / 📋Backlog acionável / 📁Arquivos Críticos / 💬Última Sessão.
- **DECISIONS.md**: formato DEC-N (ADR) + FIX-N (bug grave: sintoma/causa raiz/solução/lição), com regra de arquivamento acima de ~700 linhas.
- **IDEAS.md**: separado em Usuário × Assistente + Concluídas + Descartadas (com motivo).
- **6 behaviors de dev** reescritos: comentário com propósito, preserva código existente, causa raiz, mudança mínima, sinaliza o que testar, indica prints.

### Corrigido
- **Mapeamento de categorias de arquivo**: `hist`→histórico (cresce), `ref`→referência, rolante→contexto. Antes `hist` aparecia como «opcional» e LOG-TEMPLATE como «rolante» (remendo da v1.1). Nova função única `fileTag()` substituiu a lógica duplicada em dois lugares. Nova tag visual «opcional».
- **Nota de ambiente corrigida**: a versão anterior dizia que «dentro de um Projeto não dá para gerar arquivos» — tecnicamente errado. O correto: os arquivos já no Projeto são somente-leitura, mas isso não impede gerar versões novas completas para baixar/salvar.

### Validação
- Teste DOM (jsdom): 17/17 nichos, 0 erros. Dev agora com 11 prompts (6 A-F + 5 G-K) e 9 templates. Tags semânticas conferidas em dev e game.

---

## v1.1.1 — 2026-05-29 — Entrega de documentos como arquivos completos

Ajuste de direção a partir de esclarecimento do usuário. O ponto de fricção no uso real não era "o Claude pediu pra atualizar os docs" — era **o Claude ter entregado blocos soltos de texto para o usuário costurar à mão dentro dos arquivos**. O usuário quer arquivos completos, prontos para baixar e substituir.

### Definido
- **Protocolo de entrega**: o assistente entrega sempre o ARQUIVO COMPLETO e atualizado (pronto para substituir o antigo), nunca trechos para colar/costurar. Se vários arquivos mudaram, entrega todos inteiros. As regras de higiene são aplicadas pelo assistente ao montar o arquivo — o usuário recebe o resultado já correto.
- **Ressalva de ambiente**: dentro de um Projeto do Claude (pasta somente-leitura, sem criação de arquivo para download), e só nesse caso, o assistente entrega o conteúdo completo de cada arquivo no chat, um por bloco de código, pronto para salvar. Em ambientes com criação de arquivos, entrega para baixar. Princípio idêntico: arquivo inteiro, nunca pedaços.
- **Aplicar continua sendo decisão do usuário** — mas o trabalho de montar o arquivo é do assistente, não do usuário.

### Adicionado (mantido desta sessão)
- **7º princípio universal: «Instruções sempre cuidadosas»** — qualquer instrução, guia ou passo a passo entregue ao usuário deve ser completo, detalhado e bem explicado; nunca leviano; não assume contexto que o usuário não tem.

### Corrigido em relação à versão intermediária
- Uma primeira tentativa desta sessão chegou a instruir "preparar blocos demarcados para o usuário colar" — exatamente o comportamento indesejado. Revertido: agora é arquivo completo.

### Validação
- Teste DOM (jsdom) dos 17 nichos: 0 erros; 7 princípios universais; seção «Como o assistente entrega as atualizações» presente e correta no CLAUDE.md.

---

## v1.1.0 — 2026-05-29 — Fundação transversal

Primeira etapa do refinamento pós-MVP. Não mexe nos nichos individualmente ainda — eleva a base que todos compartilham, a partir do feedback massivo recebido do Claude no projeto GameDataHub (nicho dev) e dos materiais reais de uso (design/cliente).

### Adicionado
- **2 princípios comportamentais universais** (agora 6 no total, antes 4):
  - **Analisa antes de aceitar** — o assistente não segue cegamente; avalia viabilidade de cada sugestão e se posiciona (a favor / refina / contra), sempre fundamentado. Nunca se limita às palavras do usuário.
  - **Não desperdiça tokens** — não pergunta o que já foi decidido, não pede confirmação de plano aprovado, consolida perguntas.
- **Geração de CLAUDE.md**: novo artefato gerado pelo kit, separado das Instruções do Projeto. Toggle de abas na tela de Instruções (Instruções do Projeto ↔ CLAUDE.md), cada um com seu copiar/baixar.
- **Filosofia rolante/estável/cresce** como estrutura base (constante FILE_PHILOSOPHY).
- **Regras de higiene anti-inchaço** (HYGIENE_RULES): referência cruzada em vez de duplicação; STATUS só o agora; IDEAS nunca perde; DECISIONS arquiva quando grande.
- **Tabela de gatilhos** (evento -> arquivo a atualizar) gerada no CLAUDE.md, extensível por nicho via `triggersExtra`.
- **Mapeador de comportamento temporal** por arquivo (`fileBehaviorLabel`) cobrindo os nomes de arquivo dos 17 nichos.

### Mudou
- `buildInstr()` agora produz um **núcleo denso** (ritual de início + princípios curtos + arquivos + idioma), em vez do bloco antigo. Inclui CLAUDE.md no ritual e na lista de arquivos.
- Princípios nas Instruções aparecem encurtados (primeira frase); a versão completa vai no CLAUDE.md.

### Fundamento técnico (ver DECISOES D-012)
- Instruções do Projeto são lidas inteiras a cada mensagem (token-caras) -> núcleo enxuto.
- Arquivos de conhecimento usam RAG nos planos pagos e são fáceis de atualizar -> CLAUDE.md completo.

### Validação
- Teste DOM (jsdom) dos 17 nichos: 0 erros de JS, todos renderizam Instruções + CLAUDE.md.
- Toggle de abas, geração de ambos os artefatos, troca de nicho: sem erros.

---

## v1.0.0 — 2026-05-27 (planejado)

### Adicionado
- **18 nichos** implementados em página única:
  - 8 core: dev, design, client, narrative, marketing, research, product, business
  - 8 criativos: game, pixel, brainstorm, music, rpg, cuisine, animation, comics
  - 1 special: custom (construtor)
- **Heros visuais distintos** para cada nicho (não apenas troca de cor — estruturas próprias: terminal, swatches, kanban, editorial, feed, paper, wireframe, KPIs, HUD, grade de pixels, postits, waveform, scroll medieval, card de receita, timeline, painéis, grade vazia).
- **Custom como construtor real**: formulário para definir identidade (nome, ícone, cor, fonte), arquivos de contexto, comportamentos extras, convenções, saídas, prompts G+. Salva e carrega presets via `localStorage`. Múltiplos presets simultâneos.
- **Persistência por nicho**: trocar de nicho preserva o estado de cada um.
- **Theming via CSS variables**: `[data-niche]` e `[data-group]` no `<html>` trocam cor e família de fonte sem repintar nada via JS.
- **3 grupos de fonte display**:
  - serif (Fraunces) para a maioria
  - literary (Playfair Display) para narrative, research, music, rpg, comics
  - digital (Oxanium) para game, pixel
- **6 prompts universais (A–F)** + **4 prompts específicos (G–J)** por nicho.
- **4 comportamentos universais** + 4-5 comportamentos extras por nicho.
- **Download individual de templates** + **pacote ZIP** (via JSZip carregado por CDN sob demanda).
- **Meta-doc do próprio kit** em `meta/` usando estrutura do nicho Brainstorm.
- **`DEPLOY-GUIDE.md`** (fora do repo) com passo a passo para GitHub Pages.

### Mudou em relação à v0.x (kit Dev-only)
- Onde antes era só desenvolvimento, agora são 18 domínios.
- `PLANNING.md` consolidado (antes vinha em duas partes).
- `README.md` reescrito para multi-nicho.
- Templates do Dev agora vivem como conteúdo baixável; arquivos `CONTEXT.md`, `STATUS.md`, `DECISIONS.md`, `IDEAS.md`, `CHANGELOG.md`, `LOG-TEMPLATE.md` na raiz do projeto antigo foram substituídos pelos arquivos em `meta/`.
- Nome de templates padronizado profissionalmente (sem versões "definitivo" ou "aprimorado").

### Removido
- Versões parciais antigas do `PLANNING-PART2.md` (consolidado em `PLANNING.md` único).
- Index.html antigo (versão só Dev — substituído pelo novo).
- `niche_visual_identity_map.html` (rascunho de design, integrado no produto final).

---

## v0.x — sessões anteriores (não numeradas formalmente)

Versão Dev publicada em `silujones.github.io/kit-contexto-claude`. Resolveu o problema só para devs. Esta v1.0.0 expande para 18 domínios mantendo a mesma arquitetura.

---

## Possíveis v1.1 / v1.2 (não compromissos)

Itens em `meta/IDEIAS.md` arquivados como "evolução natural":

- Exportar/importar preset Custom como `.json` (i11)
- Tema claro (i9)
- Tradução para inglês (i10)
- Versão impressa (PDF) dos templates (i13)
- Drag-and-drop para reordenar arquivos no Custom (i20)
- Atalhos de teclado adicionais (i24)
- Carimbo de versão automático nos downloads (i-N10)

Nada disso está prometido. Decisão depende de uso real.
