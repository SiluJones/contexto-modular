# HISTÓRICO — Kit de Contexto Universal

> Conhecimento consolidado das fases do projeto, lido **sob demanda**. Para o dia a dia bastam CONTEXT (o que é) + STATUS (o agora) + CHANGELOG (versões). Este arquivo guarda o ARCO — como o projeto chegou aqui — e lições grandes que não cabem no CONTEXT enxuto.

## Os arcos do projeto (visão de cima)

**1. Fundação (v1.0–v1.10 aprox.).** Decisão-raiz (D-001): um **único `index.html`** vanilla, sem build, deploy estático no GitHub Pages, rodável via `file://`. Nasce o modelo de **nicho** (`NICHES.<id>`) e a geração de **dois artefatos** (Instruções curtas + CLAUDE.md completo). Filosofia central fixada: **separação contexto vs histórico** (contexto leve recarregado sempre; histórico no Git lido sob demanda). Por razões históricas, dois formatos de dados convivem (daí os normalizadores e o cuidado com `renderTopbar`).

**2. Build-out dos nichos + armadilhas de boot (v1.11–v1.24).** Crescimento para 16 nichos de conteúdo. Bugs estruturais que viraram lição: `${today()}` em template trava o boot (use `${today}`); `renderTopbar` precisava aceptar `opts` (pares) E `options` (strings) — bug v1.11.1; `default:"pt-BR"` não casava com LANGS ("pt"). FIX-001: o construtor reescrevia a coluna de controles sem restaurar o esqueleto → captura/restauração + re-entrância. Consolidou-se a **suíte jsdom** como regra dura (nunca publicar sem verde).

**3. Custom unificado (v1.25–v1.26, D-019 supersede D-014).** Os dois construtores ("Blank" + "Inteligente") viraram **um** card `custom`: composição a partir de nichos prontos (chips + granularidade por peça) NO TOPO + Custom Builder abaixo, na mesma tela. `composeFromNiches` com **dedup visível** e **checagem de conflito** (inspiração distante: GitHub spec-kit — "composição assistida > fusão automática"). FIX-002 (footgun de ativar sem salvar) e FIX-003 (corpo de prompt sumindo: `JSON.stringify` descarta funções → guardar `body` como STRING; nada que vá ao localStorage pode ser função). Contagem final: **17 nichos** (16 + 1).

**4. Contexto/RAG/mount — o entendimento que mudou tudo (v1.22 + D-016/D-018).** Ficou claro como o Claude.ai lê arquivos: Conhecimento do Projeto tem 2 modos por TAMANHO (in-context fiel × RAG por fragmentos); o mount `/mnt/project/` é lido inteiro com a ferramenta de código, RAG ou não; **mas só o upload direto popula o mount** (achatado) — o conector do GitHub alimenta só a busca (D-018). Regra anti-arquivo-falso: nunca reconstruir de fragmentos; o critério é "tenho o COMPLETO?", não "está em RAG?". E a janela é finita — "nasceu na conversa = 100% para sempre" é FALSO (conversa longa é truncada/compactada). Tudo isso entrou no CLAUDE.md gerado e validou a arquitetura do kit (enquadramento profissional: Anthropic "Effective context engineering", "context rot").

**5. Os princípios universais amadurecem (v1.27, D-020/D-021).** `BEHAVIORS_BASE` foi de 11 → 13: P12 (higiene ao encolher arquivos-chave) e P13 (pesquisa para refinar E para REFUTAR — buscar onde a ideia já falhou para os outros). Princípios próprios, não reforço dos antigos.

**6. O kit ganha pilotos e começa a se evoluir pelo uso (v1.28–v1.29, D-022/D-023).** Primeiros testes reais (incl. um jogo em 4 frentes) geram feedback. D-022 congela um lote de 5 diretrizes (manifesto de achatamento auto-detectado; "STATUS é pista, não fato"; commit em 3 linhas; gatilho «Feedback para o Kit»; **válvula de desvio registrado** — templates são ponto de partida, não contrato) e a **régua de triagem** do feedback em 3 destinos (absorver no base / módulo de grupo / específico). D-023: o **kit DESENVOLVE** — IDEAS universal; narrative escreve sob direção (com kishōtenketsu); game cria/codifica (ROTEIRO.md + estado AGUARDANDO DESIGN).

**7. O HUB de grupo, em três passos (v1.30–v1.33, D-024 a D-027).** Switch "Projeto em grupo?" + Instruções enxutas (−27%) → página construtora 06 → **absorção do CANON.md** que o próprio piloto montou (Cânone Central, identificadores de área, precedência, tarefas com origem) → códigos de área curados + variador. É o caso-modelo do loop «Feedback para o Kit»: um piloto evoluiu a estrutura e ela voltou para todos. Pelo caminho, FIX-005 (Pages só publica com `.nojekyll`) e a diretriz de personalização das Instruções.

## Lições grandes (transversais, valem para o futuro)
- **Evoluir puxado pelo uso, não pela especulação.** As melhores adições (válvula, ROTEIRO, Cânone Central) vieram de dor real de piloto. Ideias sem lastro de uso ficam represadas em IDEIAS até o sinal.
- **O harness é o ativo que destrava mudanças ousadas.** 17/17 + anti-testes permitem refatorar com rede. É a mitigação central para o refator modular futuro (migrar nicho a nicho, validando).
- **Fidelidade de arquivo é a regra mais cara de aprender.** Contexto vs. RAG vs. mount vs. anexo; só upload direto popula o mount; janela finita. Quando em dúvida, pedir o arquivo completo, nunca reconstruir.
- **localStorage não guarda funções; CMD do Windows corrompe acentos; `${today()}` mata o boot.** Três armadilhas que voltam se esquecidas.

## Ideias maiores ainda abertas (detalhe em IDEIAS)
- **Refator modular + i18n com idioma misto (i-N13 expandido / i-N26)** — direção aceita; abre tradução auditável da UI e dos templates, e modo misto (artefatos em inglês, conversa em pt-BR). Sem código até decisão.
- **Guias/tutoriais/wikis (i-N14)** e **auto-aplicação de patches + entrega por diff (i-N15/i-N16)**.
- **Estender "o kit desenvolve" a HQ/RPG/animação/música** quando os pilotos pedirem.

> Para o detalhe versão-a-versão, ver CHANGELOG. Para o "porquê" de cada escolha e os bugs, ver DECISOES (DEC/FIX). Para o estado atual, STATUS.
