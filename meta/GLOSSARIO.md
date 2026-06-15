# GLOSSÁRIO — Kit de Contexto Universal

> Termos próprios do projeto que se repetem entre sessões. Consulte quando um nome não for óbvio. Detalhe técnico no CONTEXT; decisões no DECISOES; histórico no CHANGELOG/HISTORICO.

## Conceitos do produto

- **Kit (de Contexto Universal):** a própria ferramenta — um único `index.html` (vanilla JS, sem build) que gera os arquivos de contexto que mantêm o Claude no mesmo ponto entre conversas. Publicado em `silujones.github.io/kit-contexto`.
- **Nicho:** um perfil de projeto (Desenvolvimento, Game Design, Narrativa & Ficção, Pixel Art…). São **16 nichos de conteúdo + 1 construtor** (`custom`) = 17. Cada nicho gera Instruções + CLAUDE.md + templates `.md` próprios.
- **Construtor / `custom`:** o 17º nicho. Não tem conteúdo fixo: compõe um perfil a partir de pedaços dos outros 16 (ver «composeFromNiches») ou de um builder manual. Existe para cobrir o que os nichos prontos não cobrem.
- **Instruções do Projeto:** o artefato CURTO, colado em *Projeto → Instruções*, **lido em toda mensagem**. Por isso é enxuto (os 13 princípios universais viram uma linha de nomes; só os behaviors do nicho ficam em bullets). Gerado por `buildInstr`.
- **CLAUDE.md:** o artefato COMPLETO, subido como arquivo no Projeto. Traz comportamento detalhado, regras de higiene, tabela de gatilhos, protocolo de atualização. Gerado por `buildClaudeMd`. É a versão longa; as Instruções são o resumo.
- **Dois artefatos:** o par Instruções (curto, toda mensagem) + CLAUDE.md (completo, sob demanda). Princípio central do design: não repetir um no outro.
- **Dogfooding:** o kit é mantido usando o próprio kit — estes arquivos (CONTEXT, STATUS, DECISOES, CHANGELOG, IDEIAS, ROADMAP, GLOSSARIO, HISTORICO, logs) são os do próprio projeto.

## HUB e grupo de projetos

- **HUB / HUB.md:** arquivo COMPARTILHADO por um GRUPO de projetos que servem ao mesmo produto (ex.: um jogo com frentes de game design, arte, enredo e som). Montado na página **06 · HUB** do kit; copiado idêntico em cada projeto do grupo. Gerado por `buildHub`.
- **Frente:** cada projeto/área dentro de um grupo (no HUB). Tem nicho + nome + responsabilidade + código de área.
- **Cânone Central:** seção do HUB com os **fatos travados** que todas as frentes respeitam (nomes, paleta/identidade global, dimensões, regras de mundo, marcos). Inspirada no `CANON.md` que o piloto montou. Mudá-los exige aprovação do usuário (diretriz D4 do HUB).
- **Identificador / código de área:** o `[DEV]`, `[GAME]`, `[ART]`… de cada frente. Serve para RASTREAR a origem de tarefas entre frentes (`[ORIGEM-NNN]`), NÃO para limitar tokens. Default curado por nicho (mapa `NICHE_CODE`); duplicatas viram `DEV0`, `DEV1`, `DEV2` (variador, função `computeCodes`).
- **«Projeto em grupo?»:** o switch (toggle) no topo de cada nicho. Ligado, adiciona a SEÇÃO de instruções do HUB ao CLAUDE.md daquele projeto (não baixa o HUB.md — esse vem da página 06).
- **Diretrizes do HUB (D1–D6):** regras do grupo geradas no HUB.md (nunca editar arquivo de outra frente; mudança que afeta outra vira tarefa na caixa dela; cada verdade tem um dono; Cânone Central tem precedência; atualizar na hora; tudo assinado/datado). NÃO confundir com as decisões de arquitetura DEC-/D-0xx.

## Comportamento gerado (no conteúdo dos arquivos)

- **BEHAVIORS_BASE:** o array dos **13 princípios universais** (P1–P13) que entram em TODO nicho. Ex.: P8 «verifica antes de pedir» (STATUS é pista, não fato), P12 «higiene ao encolher», P13 «pesquisa para refinar E refutar».
- **Behaviors de nicho:** comportamentos específicos de cada nicho, somados aos universais (ex.: `writes_prose` na narrativa, `builds_game` no game).
- **Válvula de desvio registrado:** regra de higiene (i-N22) que autoriza adaptar/dispensar templates e estrutura quando o projeto pede, DESDE QUE registre o desvio (em DECISIONS + «Feedback para o Kit»). «Desviar sem registrar é o erro.»
- **Gatilho «Feedback para o Kit»:** quando o usuário dá feedback sobre o kit — dito OU feito (desvio estrutural) — o assistente registra na hora no IDEAS do projeto. É o que volta para evoluir o kit.
- **UPDATE_PROTOCOL:** bloco transversal no CLAUDE.md de todos os nichos: como atualizar templates (sufixo `__update`), como fazer o handoff, o canal de atualização do kit, o formato do commit (3 linhas; CMD sem acentos), o manifesto de achatamento.

## Contexto, arquivos e ambiente

- **Contexto vs. RAG vs. mount vs. anexo (D-018):** quatro formas de o Claude «ver» um arquivo. **Mount** = sistema de arquivos em `/mnt/project/` (só o **upload direto** no Projeto popula, e chega **achatado**, sem subpastas). **RAG** = busca; o **conector do GitHub** alimenta só a busca, NÃO o mount. **Anexo** = arquivo colado na conversa.
- **Manifesto / FlatDrop / `_MANIFEST.md`:** quando um repo é subido ACHATADO por uma ferramenta (ex.: FlatDrop), um `_MANIFEST.md` mapeia caminho original → nome plano (sufixo `__pasta` em colisão). Detecção automática: se existe, é fonte de verdade de nomes; se não, fluxo normal. FlatDrop pode FILTRAR o que sobe (node_modules, .gitignore…).
- **Afixo / sufixo `__update`:** convenção de download do kit para atualizar um projeto sem perda — baixa o template com sufixo, o assistente do projeto compara e adapta preservando o conteúdo do projeto.
- **LOG-TEMPLATE.md:** o MODELO de log de sessão; fica permanente no Projeto (nunca substituído). Os logs preenchidos vivem em `logs/AAAA-MM-DD.md` no Git, lidos sob demanda. O do nicho game ganhou `## Código / build` (v1.32.0).

## Código (estrutura do `index.html`)

- **`NICHES.<id>`:** o objeto de definição de cada nicho (behaviors, conventions, contextFiles, outputs, promptsExtra, topbar…). Ver «shape» no CONTEXT §2.
- **`normNiche` / `normBehaviors` / `normBuilderSection`:** normalizadores que preparam o nicho para gerar saída. `normNiche` injeta o `UNIVERSAL_IDEAS_TPL` (IDEAS em todo nicho) e o toggle `groupMode`.
- **`buildInstr` / `buildClaudeMd` / `buildHub`:** as três funções que GERAM, respectivamente, as Instruções curtas, o CLAUDE.md completo e o HUB.md.
- **`effectiveFiles(niche)`:** os arquivos de template efetivos do nicho no download (NÃO injeta HUB.md — esse vem da página 06).
- **`groupModeOn()`:** lê o switch «Projeto em grupo?».
- **`frenteCode` / `baseCode` / `computeCodes` / `NICHE_CODE`:** o sistema de códigos de área do HUB (default curado + variador de duplicata).
- **`STATE`:** o estado em memória da página (nicho atual, topbar, behaviors, builder, `hub`…). **`LS_*`:** as chaves de `localStorage` que persistem o estado (ex.: `LS_HUB` guarda o grupo, independente de nicho).
- **Harness / `validate.js`:** o validador jsdom que roda fora da página, monta cada nicho e confere 17/17 + ~24 checagens de conteúdo. **Anti-teste:** desfazer a correção numa cópia e confirmar que o teste REPROVA (prova que o teste morde). Detalhe no CONTEXT §3.

## Sistemas de identificadores (nos docs do projeto)

- **DEC-NNN / D-0NN:** uma decisão de arquitetura registrada em DECISOES.md (cresce devagar; não se reescreve, supersede).
- **FIX-NNN:** um bug grave resolvido, em DECISOES.md (formato sintoma/causa/solução/lição).
- **i-Nxx:** uma ideia em IDEIAS.md. Ideia muda de status (Ativa → Em avaliação → Concluída → Descartada), **nunca some**.
- **P1–P13:** os 13 princípios universais (ver BEHAVIORS_BASE).
- **SemVer (vX.Y.Z):** versão da ferramenta no CHANGELOG (Keep a Changelog; cresce no topo).
