# WO 0133 — papel curto dos arquivos nas Instrucoes e o teto medido nos quatro eixos

> **Tipo:** mista — CODIGO (produto + harness) + DOC (o registro).
> **Config sugerida:** modelo padrao, esforco medio. 157 trocas nos 19 modulos de nicho (por script, lendo a tabela da Edicao 1), mais 14 edicoes nomeadas, todas TROCAR menos a ultima, que acrescenta no fim do `meta/DECISIONS.md`.
> **Pre-requisito:** HEAD = `0e41773` (o `/wrap` da wo0132), `main` = `origin/main`. Harness em **19/19 · 107/107 · 0 erros**, v1.124.0.
> **Base:** analise `meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md`, recomendacao aceita pelo dono como esta (2026-10-16): reabre a `D-094`, grupo e linha do SO no `C28`, teto nao sobe, ramo do Code fica, duas WOs. Esta e a WO-1.
> **Depende de:** wo0132 (aplicada, `9e3e194`; fecho `0e41773`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `a376150500693f63fea3a2f75be8bb5cc6849363  meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md` (nova, LF; status Decidida e a secao da resposta do dono)
> - `482e8f5da4abd6b57da3311e8f4437014a8f1b46  logs/2026-10-16.md` (secao «Conversa 3 (chat)» acrescentada depois da do Code, LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO (coluna «depois» da Edicao 18). Se ja existir, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `0e41773`; as ancoras longas foram **recortadas do arquivo vivo**, exigindo ocorrencia unica, e nao redigitadas; as edicoes foram aplicadas por script numa replica `git archive HEAD | tar -x` e depois de novo **a partir do texto desta WO**, com comparacao byte a byte):
> - `src/niches/*.js` — os 157 trechos `role:"<papel>",` da tabela da Edicao 1, um por arquivo de contexto, cada um com 1 ocorrencia no seu modulo e na linha do `name:` certo
> - `src/index.template.html` — o `role:` do `UNIVERSAL_IDEAS_TPL`; a linha `    role:    f.role,` de `normFiles`; em `buildInstr`, a linha do `CEREBRO.md` e a `_instrFiles.forEach`; `const MODO_ORCAMENTO`; no «Teto por configuração» do CEREBRO gerado, o trecho «para as linhas que *qualquer* modo»; `const KIT_VERSION`
> - `validate.js` — a linha `const SHIM` e o bloco inteiro do `C28`
> - `meta/CHANGELOG.md` — a linha da «Versão atual» e o titulo `## v1.124.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — os titulos da `i-N68` e da `i-N67`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-160`, CHANGELOG, `i-N67`, `i-N69`. A Edicao 13 toca o
> `meta/STATUS.md`, que e do `/wrap`, so para trocar o numero da versao (excecao da `D-158`, pelo `C54`). A analise e o log sao do
> chat: esta WO so os versiona, pelo sha1.

---

## 1. Por que

A analise de 16/10 mediu que o `C28` olhava dois dos quatro eixos de modo do gerador. O grupo (+234 em todo nicho) nunca teve orcamento, o canal entrou depois dele, e a linha do sistema operacional (ate 213) nao era medida: o pior caso realista era **8.027** (`narrative`, grupo + Code + ASU + Windows) com o harness verde. Ao mesmo tempo, 82% da lista de arquivos das Instrucoes repete literalmente o CEREBRO gerado. Esta WO encurta o papel de cada arquivo nas Instrucoes (o inteiro fica no CEREBRO) e faz a regua medir o que o gerador emite. Corta a **v1.125.0** (`D-158`).

## 2. Contexto factual — medido na replica

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 107/107 | **19/19 · 108/108** (entra o `C107`) | `node validate.js index.html` |
| `C28` | `ok (padrao 6662/6900 · +Code 546/550 · +ASU 372/400 · compart 372/450 · combo 7580/7600)` | `ok (padrao 6034/6900 · +Code 546/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7380/7600 · 304 configuracoes)` | linha do `C28` |
| `C107` | — | `ok (174 papeis curtos em 174 arquivos)` | linha do `C107` |
| `C54` | v1.124.0 | **v1.125.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 905.587 bytes | **913.772 bytes** | a linha `OK:` do `node build.js` |

- **174 = 157 + 17:** os 157 papeis dos modulos e o IDEAS universal (`UNIVERSAL_IDEAS_TPL`), que o `normNiche` injeta nos 17 nichos que nao trazem o proprio IDEAS.
- **Prova de que a regua nova ve o que a antiga nao via:** o `validate.js` desta WO rodado contra o `index.html` do HEAD acusa o `C28` (`narrative pasta+grupo combo+SO 8027>7600`, entre outros) e o `C107` (`dev: a linha do CEREBRO.md nas Instrucoes nao e a curta`).
- **Tres provas negativas rodadas e restauradas:** tirar o `short` de `narrative/PERSONAGENS.md` → `C107` vermelho (`papel nas Instrucoes com 87 > 45`); `grupo: 200` no `MODO_ORCAMENTO` → `C28` vermelho; restaurado, o build volta a 913.772 bytes.

## Inventario

- **Papeis a encurtar: 158**, por leitura do artefato (`NICHES[id].contextFiles[].role` dos 19 modulos, mais o `UNIVERSAL_IDEAS_TPL`). Os 158 passam de 45 caracteres — nenhum fica sem `short`. Por modulo: `animation` 9 · `brainstorm` 7 · `business` 7 · `career` 10 · `client` 9 · `comics` 8 · `companion` 11 · `cuisine` 7 · `custom` 1 · `design` 9 · `dev` 10 · `game` 10 · `marketing` 8 · `music` 8 · `narrative` 10 · `pixel` 8 · `product` 7 · `research` 9 · `rpg` 9; total **157**, mais **1** no template.
- **Lugares que leem `f.role` no template: 11** (`grep -n "f.role" src/index.template.html` — o prompt de setup, `normFiles`, a tabela da UI, `buildInstr`, a tabela do CEREBRO gerado, o cartao da UI, o README do zip, o manifesto e o prompt do pacote de update, e dois no construtor `custom`). **Mudam 2:** `normFiles` passa a carregar o `short`, e `buildInstr` o mostra. Os outros 9 seguem com o papel inteiro, de proposito.
- **O construtor `custom` nao muda:** ele monta os arquivos a partir das versoes dos presets sem o `short`, e as Instrucoes mostram o papel inteiro — o comportamento de hoje. Fora de escopo.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `0e41773`. Se diferente, **PARE e reporte**.
2. `sha1sum` dos dois arquivos do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M logs/2026-10-16.md`, `?? .claude/launch.json`, `?? meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md`, `?? meta/workorders/261016-wo0133-papeis-curtos-e-regua-dos-quatro-eixos.md`. Diferente = **PARE**.
4. Idempotencia: `cat src/niches/*.js | grep -c 'role:"[^"]*", short:"'` = **0**, e `grep -c "^## i-N69 " meta/IDEAS.md` = **0**. Se der outro numero, a WO ja foi aplicada (inteira ou em parte): **PARE e reporte**.

## Edicao 1 — `src/niches/*.js` · o papel curto de cada arquivo de contexto (157 trocas)

**Como aplicar:** para cada linha da tabela abaixo (colunas separadas por TAB: modulo, arquivo, papel, papel curto), abra `src/niches/<modulo>.js` e **troque** o trecho

```
role:"<papel>",
```

por

```
role:"<papel>", short:"<papel curto>",
```

O trecho `role:"<papel>",` tem de aparecer **exatamente 1 vez** no modulo, na mesma linha do `name:"<arquivo>"` — se der 0 ou 2+, **PARE e reporte** a linha da tabela. Leia a tabela **deste arquivo** (nao a redigite): ela foi recortada do fonte, e o papel e a ancora. Os modulos sao LF (`git ls-files --eol src/niches/`); grave em LF.

```
dev	SPEC.md	Modelo de **spec de feature** (Spec-Driven Development): o problema, os critérios de aceite verificáveis, as decisões e o fora-de-escopo. **Sob demanda** — copie para `specs/AAMMDD-nome.md`, uma por feature, e a pasta nasce aí. **Não é o modelo das WOs** (instrução de aplicação Chat→Code, em `meta/workorders/`): spec diz o QUE construir, WO diz COMO aplicar.	Spec de feature (o QUÊ), sob demanda; não WO.
dev	CONTEXT.md	O que o projeto é: visão, stack, estrutura, como as peças críticas funcionam, armadilhas, produto. Estável.	Visão, stack, armadilhas, produto. Estável.
dev	STATUS.md	O agora: o que funciona, o que está em progresso, o que está quebrado, backlog curto. Rolante — o resolvido sai.	O agora e o backlog curto. Rolante.
dev	DECISIONS.md	Por que as coisas são como são: decisões de arquitetura (DEC) e bugs graves resolvidos (FIX). Cresce devagar.	O porquê: arquitetura (DEC) e bugs (FIX).
dev	CHANGELOG.md	Histórico de versões entregues (SemVer + Keep a Changelog). Cresce no topo.	Versões entregues (SemVer). Cresce no topo.
dev	IDEAS.md	Segundo cérebro: ideias suas e do assistente. Nunca perde nada — ideia muda de status, não some.	Segundo cérebro: ideia muda, não some.
dev	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído pelo conteúdo preenchido.	Modelo do log do dia; nunca substituído.
dev	ROADMAP.md	OPCIONAL — plano deliberado de evolução em fases. Use quando o projeto tem direção de médio/longo prazo.	OPCIONAL — plano de evolução em fases.
dev	GLOSSARY.md	OPCIONAL — termos próprios do projeto. Use quando há jargão que se repete entre conversas.	OPCIONAL — jargão que se repete no projeto.
dev	HISTORY.md	OPCIONAL — conhecimento consolidado de fases antigas (guias, análises que não cabem no CONTEXT enxuto). Lido sob demanda.	OPCIONAL — fases antigas; lido sob demanda.
design	PROJETO.md	O brief: objetivo, público, mídia, tom, entregáveis, rodadas e exclusões. Estável.	O brief: objetivo, entregáveis, exclusões.
design	CLIENTE.md	Quem é o cliente: gosto, vetos, como dá feedback. Estável.	O cliente: gosto, vetos, feedback. Estável.
design	MARCA.md	O sistema visual: logo (regras), paleta em todos os espaços de cor, tipografia, extensões, tom. Estável.	Sistema visual: logo, paleta, tipografia.
design	REFERENCIAS.md	Moodboard textual: paletas, tipografias, links — distinguindo conteúdo de estilo. Estável.	Moodboard: conteúdo separado de estilo.
design	DECISIONS.md	Por que cada escolha visual: esta fonte, esta cor, este símbolo, este layout. Cresce devagar.	O porquê de cada escolha visual.
design	REVISOES.md	Histórico de versões entregues, feedback do cliente e qual rodada foi usada. CRESCE.	Versões, feedback e rodadas usadas. CRESCE.
design	STATUS.md	O agora: o que está aprovado, o que aguarda, próximo passo, com quem está a bola. Rolante.	Aprovado, pendente, com quem está a bola.
design	PRODUCAO.md	OPCIONAL — checklist de pré-impressão/exportação por entregável. Use quando há peça impressa ou entrega técnica.	OPCIONAL — checklist de pré-impressão.
design	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
client	CLIENTE.md	Quem é o cliente: perfil, como se comunica, como dá feedback, sensibilidades, o que evitar. Estável.	O cliente: perfil, feedback, o que evitar.
client	PROJETO.md	O projeto ativo: objetivo, escopo, entregáveis, rodadas de revisão e — crucial — o que NÃO está incluído. Estável dentro do projeto.	Escopo, entregáveis e o que NÃO está nele.
client	ACORDOS.md	Tudo que foi combinado, aprovado ou prometido — verbal ou escrito. A memória formal da relação. CRESCE.	Tudo combinado ou prometido. CRESCE.
client	STATUS.md	O estado da relação agora: próxima ação, com quem está a bola, prazo, risco. Rolante — o resolvido sai.	Próxima ação, bola, prazo, risco. Rolante.
client	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
client	ENTREGAS.md	Histórico de entregas, versões e aprovações. CRESCE — registro do que já saiu.	Entregas, versões e aprovações. CRESCE.
client	COMUNICACOES.md	OPCIONAL — registro do texto final das mensagens-chave enviadas ao cliente. Use quando a comunicação é sensível ou frequente.	OPCIONAL — texto final das mensagens-chave.
client	FINANCEIRO.md	OPCIONAL — valores cotados, faturas, pagamentos. Use quando há mais de uma cobrança ou risco de esquecer o que foi cotado.	OPCIONAL — cotações, faturas, pagamentos.
client	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
narrative	BIBLIA.md	A story bible: premissa, mundo, regras, tom. Enxuta (Tier 1 primeiro). Estável.	Premissa, mundo, regras, tom. Estável.
narrative	PERSONAGENS.md	Fichas: voz, arco, traços, relações e evolução intencional de cada personagem. Estável.	Fichas: voz, arco, relações. Estável.
narrative	ENREDO.md	Estrutura e enredo: beats, o que já aconteceu, o que vem, decisões de trama. Cresce devagar.	Beats, o que aconteceu, o que vem.
narrative	VOZ.md	A voz da obra: tom, ritmo, exemplos de prosa aprovada, o que evitar. Protege o estilo do autor. Estável.	Tom, ritmo, prosa aprovada. Protege o estilo.
narrative	CONTINUIDADE.md	Notas de continuidade + grafia canônica + inconsistências resolvidas. A memória factual. CRESCE.	Memória factual e grafia canônica. CRESCE.
narrative	STATUS.md	Onde estamos: capítulo, cena, próxima escrita, o que está aberto. Rolante.	Capítulo, cena, próxima escrita. Rolante.
narrative	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
narrative	CRONOLOGIA.md	OPCIONAL — linha do tempo dos eventos da obra. Use quando há saltos temporais ou tramas paralelas.	OPCIONAL — linha do tempo dos eventos.
narrative	GLOSSARY.md	OPCIONAL — termos, nomes próprios, jargão do mundo + significado. Use em fantasia/ficção científica com muito vocabulário.	OPCIONAL — termos e nomes do mundo.
narrative	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
marketing	MARCA.md	Posicionamento, valores, diferenciais e os 3-5 pilares de conteúdo. Estável.	Posicionamento e pilares de conteúdo.
marketing	AUDIENCIA.md	Personas, suas dores/desejos, canais e a linguagem que ressoa. Estável.	Personas, dores, canais, linguagem.
marketing	TOM-E-VOZ.md	Guia de linguagem: como a marca soa, exemplos bons e ruins, palavras e proibições. Estável.	Como a marca soa; exemplos e proibições.
marketing	PAUTA.md	Calendário editorial vivo: temas, pilares, formatos, datas, status. Rolante para o período ativo.	Calendário editorial vivo. Rolante.
marketing	STATUS.md	Estado atual: campanha ativa, conteúdo urgente, próximos passos. Rolante.	Campanha ativa, urgências, próximos passos.
marketing	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
marketing	RESULTADOS.md	OPCIONAL — desempenho de conteúdo e campanhas, por funil. Use quando há medição contínua.	OPCIONAL — desempenho por funil.
marketing	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
research	TEMA.md	A pergunta de pesquisa, o recorte, a justificativa e a tese provisória. Estável.	Pergunta, recorte, tese provisória.
research	FONTES.md	Catálogo de referências VERIFICADAS, com citekey e a nota de por que cada uma importa. Cresce.	Referências VERIFICADAS, com citekey.
research	HIPOTESES.md	Hipóteses ativas e seu status, separando evidência de tese de especulação. Cresce devagar.	Hipóteses: evidência separada de especulação.
research	SINTESE.md	O argumento em construção: tese, estrutura, conceitos definidos, síntese das fontes. Estável-rolante.	O argumento em construção.
research	STATUS.md	Fase, prazos, próximas leituras e pendências. Rolante — o resolvido sai.	Fase, prazos, próximas leituras. Rolante.
research	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
research	GLOSSARY.md	OPCIONAL — termos técnicos e conceitos próprios da pesquisa. Use quando há vocabulário denso ou herdado de vários autores.	OPCIONAL — termos e conceitos da pesquisa.
research	HISTORY.md	OPCIONAL — conhecimento consolidado de fases antigas: revisões já fechadas, levantamentos extensos. Lido sob demanda.	OPCIONAL — fases fechadas; lido sob demanda.
research	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
product	PRODUTO.md	Visão, proposta de valor, princípios, North Star. O norte que filtra decisões. Estável.	Visão, valor, North Star. Estável.
product	PERSONAS.md	Personas/segmentos com seus jobs, dores e ganhos. Quem usa e por quê. Estável.	Quem usa: jobs, dores, ganhos.
product	JORNADAS.md	Jornadas-chave dos usuários: passos, emoções, pontos de atrito e oportunidades. Estável.	Jornadas: passos, atritos, oportunidades.
product	DECISIONS.md	Decisões de produto com racional, alternativas e métrica esperada. Cresce devagar.	Decisões de produto, com métrica esperada.
product	STATUS.md	Iniciativas em curso, métricas atuais, prioridades e próximos passos. Rolante.	Iniciativas, métricas, prioridades. Rolante.
product	EXPERIMENTOS.md	OPCIONAL — hipóteses testadas e resultados (A/B, entrevistas, protótipos). Use quando o produto valida por experimento.	OPCIONAL — hipóteses testadas e resultados.
product	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
business	CONTEXT.md	Empresa, mercado, momento, modelo de negócio. O pano de fundo. Estável.	Empresa, mercado, modelo de negócio.
business	OBJETIVOS.md	Objetivos atuais com critério de sucesso mensurável (OKR). O filtro das decisões. Estável-rolante.	Objetivos com critério mensurável (OKR).
business	ANALISE.md	Análises em andamento, com premissas e sensibilidade explícitas. Cresce.	Análises com premissas e sensibilidade.
business	DECISIONS.md	Decisões de negócio com premissas, alternativas, contraponto e risco. Cresce devagar.	Decisões com premissas, contraponto e risco.
business	STATUS.md	Onde o negócio está agora: foco, números-chave, decisões pendentes, próximos passos. Rolante.	Foco, números-chave, pendências. Rolante.
business	MODELO-FINANCEIRO.md	OPCIONAL — unit economics, projeções, runway. Use quando o negócio precisa modelar números com rigor.	OPCIONAL — unit economics e projeções.
business	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
career	CONTEXT.md	Quem sou: formação, histórico, restrições reais, o que busco. O pano de fundo. Estável.	Quem sou, restrições reais, o que busco.
career	EVIDENCIAS.md	O coração. Append-only: fato datado + prova + competência que demonstra. Cresce sempre.	Fato datado + prova + competência. Só cresce.
career	DOSSIE.md	Retrato consolidado, DERIVADO das evidências: competência com nível e lastro. Rolante.	Retrato DERIVADO das evidências. Rolante.
career	SITUACAO.md	Emprego atual: contratado × real, linha do tempo do escopo, remuneração, sinais. Cresce.	Emprego atual: contratado × real. Cresce.
career	MERCADO.md	Vagas-alvo, requisitos recorrentes, faixas COM FONTE, e o pipeline de candidaturas. Cresce.	Vagas, requisitos, faixas COM FONTE.
career	PLANO.md	Fases com GATILHO explícito: «quando X, faço Y». O critério antes da emoção. Rolante.	Fases com GATILHO: «quando X, faço Y».
career	ESTUDO.md	Trilha derivada da lacuna MERCADO × DOSSIE. Estudo por lacuna, não por curiosidade. Rolante.	Trilha pela lacuna MERCADO × DOSSIE.
career	DECISIONS.md	Decisões de carreira com premissas, alternativas, contra-argumento e risco aceito. Cresce devagar.	Decisões com premissas e risco aceito.
career	STATUS.md	O agora: frente ativa, próximo passo, o que está pendente de decisão. Rolante.	Frente ativa, próximo passo. Rolante.
career	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
game	JOGO.md	A visão: pitch, experiência alvo, core loop, pilares, público. O norte. Estável.	Pitch, core loop, pilares. O norte.
game	MECANICAS.md	Sistemas, regras e balanceamento — com a INTENÇÃO de design por trás dos números. Cresce.	Sistemas e a INTENÇÃO por trás dos números.
game	UNIVERSO.md	Lore, mundo, personagens e tom — a bíblia de ficção do jogo. Estável; consultada antes de inventar.	Lore e mundo; consulte antes de inventar.
game	ARTE-E-SOM.md	Direção de arte e áudio: estilo visual, paleta, referências, feel sonoro. Estável.	Direção de arte e áudio. Estável.
game	PRODUCAO.md	Escopo, marcos, vertical slice e o que foi cortado/adiado. A defesa contra scope creep. Rolante-cresce.	Escopo, marcos, cortes: contra scope creep.
game	STATUS.md	Onde o desenvolvimento está agora: o que funciona, o que está em construção, próximos passos. Rolante.	O que funciona, o que se constrói. Rolante.
game	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
game	NIVEIS.md	OPCIONAL — design de níveis/fases/encontros. Use quando o jogo tem level design estruturado.	OPCIONAL — design de níveis e encontros.
game	ROTEIRO.md	OPCIONAL — a casa da narrativa cena a cena: missões, diálogos ramificados, lore passivo, cutscenes, tutorial narrativo. Use quando o jogo conta história.	OPCIONAL — narrativa cena a cena, diálogos.
game	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
companion	ALVO.md	O artefato: versão, plataforma, a instância que conta, o que é 'pronto' e o ritmo de mudança. Estável.	Versão, plataforma, o que é 'pronto'.
companion	FONTES.md	Em quem este projeto confia, por degrau — e o que cada fonte não responde. Cresce.	Fontes por degrau, e o que cada uma não diz.
companion	ARMADILHAS.md	O que faz perder tempo ou fechar porta: a do artefato e a da fonte, separadas.	O que faz perder tempo ou fechar porta.
companion	mecanicas/INDICE.md	Uma linha por sistema: o mapa de `mecanicas/`, e por onde começar depois de um patch.	Uma linha por sistema; por onde começar.
companion	mecanicas/[sistema].md	Como um sistema funciona de verdade, com carimbo só no que é volátil. Referência.	Como um sistema funciona; carimbo no volátil.
companion	rotas/NN-[assunto].md	Sequência: o que fazer, em que ordem, num trecho — aponta para `mecanicas/`, não reexplica.	Sequência de um trecho; aponta, não explica.
companion	STATUS.md	Eu agora: onde estou, pendências de confirmação, próximo passo. O ÚNICO que reinicia numa jogada nova.	Onde estou; o ÚNICO que reinicia na jogada.
companion	ESCOLHAS.md	As escolhas que fecharam portas no jogo: o porquê, o escopo, o que ficou de fora. Append-only.	Escolhas que fecharam portas. Append-only.
companion	PATCHES.md	O que mudou NO JOGO, quando, e o que isso invalidou aqui. Responde «o que mudou desde a última vez».	O que mudou no jogo e o que invalidou aqui.
companion	GLOSSARY.md	Jargão do jogo e da comunidade — uma linha por termo. A explicação completa mora em `mecanicas/`.	Jargão, uma linha por termo.
companion	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca é substituído pelo log preenchido.	Modelo do log do dia; nunca substituído.
pixel	ESTILO.md	A bíblia visual: paleta, resolução, outline, regras de sombreamento. A fonte da consistência. Estável.	Paleta, resolução, sombreamento. Estável.
pixel	SPRITES.md	Catálogo de personagens e assets: specs, paleta usada, estado. Cresce.	Catálogo de assets: specs e estado. Cresce.
pixel	ANIMACAO.md	Convenções de animação: contagem de frames, timing por ação, pivô. Estável.	Frames, timing por ação, pivô. Estável.
pixel	RESTRICOES.md	Regras autoimpostas e limites técnicos do projeto. A disciplina criativa. Estável.	Regras autoimpostas e limites técnicos.
pixel	STATUS.md	O que está em produção agora, próximos assets, pendências. Rolante.	Em produção, próximos assets. Rolante.
pixel	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
pixel	TILESET.md	OPCIONAL — design de tilesets e cenários: módulos, transições, regras de encaixe. Use em jogos com mapas/cenários.	OPCIONAL — tilesets e regras de encaixe.
pixel	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
brainstorm	TEMA.md	O que se explora, por quê, e a pergunta central. O norte da exploração. Estável.	O que se explora e a pergunta central.
brainstorm	IDEAS.md	O banco de ideias com IDs — inclui as descartadas (com a razão). Nada se perde. Cresce.	Ideias com ID, descartadas inclusas.
brainstorm	MAPA.md	Clusters (afinidade) e eixos que organizam o espaço de ideias. Cresce-rolante.	Clusters e eixos do espaço de ideias.
brainstorm	FILTROS.md	Critérios de corte e priorização — explícitos. A convergência honesta. Cresce devagar.	Critérios de corte, explícitos.
brainstorm	STATUS.md	Fase atual, a síntese do momento e a próxima decisão. Rolante.	Fase, síntese do momento. Rolante.
brainstorm	DECISIONS.md	OPCIONAL — decisões tomadas na exploração, com o racional. Use quando o brainstorm alimenta escolhas que precisam ser lembradas.	OPCIONAL — decisões da exploração.
brainstorm	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
music	PROJETO.md	Conceito, sonoridade-alvo, voz lírica, referências. O norte do projeto. Estável.	Conceito, sonoridade-alvo, referências.
music	FAIXAS.md	Catálogo das faixas: estado (ideia→master), tom, BPM, o que falta. Cresce.	Faixas: estado, tom, BPM, o que falta.
music	LETRAS.md	Letras em construção, com voz, prosódia e o que cada uma quer dizer. Cresce.	Letras em construção, com prosódia.
music	ARRANJO.md	Estrutura, harmonia e decisões de arranjo/produção, com a intenção. Cresce devagar.	Estrutura, harmonia, arranjo, com intenção.
music	STATUS.md	Onde o projeto está agora, faixa ativa, próximos passos. Rolante.	Faixa ativa, próximos passos. Rolante.
music	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
music	REFERENCIAS.md	OPCIONAL — biblioteca de referências sonoras destrinchadas. Use quando o projeto se apoia em muitas referências.	OPCIONAL — referências sonoras destrinchadas.
music	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
rpg	MUNDO.md	Cenário, regras do mundo, lugares e facções. A bíblia do mundo. Estável.	Cenário, lugares, facções. Estável.
rpg	PJs.md	Personagens dos jogadores: ficha resumida, ganchos pessoais, arco. O centro da história. Estável.	PJs: ficha, ganchos, arco. O centro.
rpg	NPCs.md	NPCs do mundo: voz, motivação, stakes, estado. Cresce.	NPCs: voz, motivação, estado. Cresce.
rpg	CAMPANHA.md	Arco geral, ganchos, segredos, fios soltos e o que já aconteceu. A espinha da história. Cresce.	Arco, ganchos, segredos, fios soltos.
rpg	SESSAO.md	Prep da PRÓXIMA sessão (método Lazy DM). Rolante — recriada a cada sessão.	Prep da PRÓXIMA sessão. Recriada a cada uma.
rpg	STATUS.md	Estado da campanha agora: onde a história parou, próxima sessão, pendências. Rolante.	Onde a história parou. Rolante.
rpg	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
rpg	REGRAS-CASEIRAS.md	OPCIONAL — house rules, decisões de regra e rulings recorrentes. Use quando a mesa tem ajustes próprios do sistema.	OPCIONAL — house rules e rulings.
rpg	LOG-TEMPLATE.md	Modelo do log de sessão (pós-jogo). Referência fixa — nunca substituído.	Modelo do log de sessão; nunca substituído.
cuisine	CONCEITO.md	Identidade da cozinha: o que é, para quem, tradição-base, princípios. O norte. Estável.	Identidade da cozinha. O norte. Estável.
cuisine	RECEITAS.md	Receitas afinadas: ratio, método, o porquê, rendimento, alérgenos. Cresce.	Receitas: ratio, método, alérgenos. Cresce.
cuisine	MENU.md	A carta: pratos, estrutura, e (se comercial) margem/popularidade. Rolante-cresce.	A carta e, se comercial, a margem.
cuisine	STATUS.md	O que está em teste/desenvolvimento agora, próximos passos. Rolante.	Em teste agora, próximos passos. Rolante.
cuisine	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
cuisine	CUSTOS.md	OPCIONAL — plate cost, food cost % e margem por prato. Use no contexto comercial.	OPCIONAL — plate cost e margem por prato.
cuisine	LOG-TEMPLATE.md	Modelo do log de prova/desenvolvimento. Referência fixa — nunca substituído.	Modelo do log de prova; nunca substituído.
animation	PROJETO.md	A bíblia: premissa, mundo, tom, arco geral. O norte criativo. Estável.	Premissa, mundo, tom, arco. Estável.
animation	PERSONAGENS.md	Elenco: design (silhueta), voz, arco, evolução. Estável; consultado antes de inventar.	Elenco; consulte antes de inventar.
animation	ROTEIROS.md	Roteiros e estrutura de episódio/curta, com beats e timing pretendido. Cresce.	Roteiros com beats e timing. Cresce.
animation	ESTILO.md	Direção de arte e som: visual, paleta, princípios de movimento, áudio. Estável.	Arte, movimento e som. Estável.
animation	PRODUCAO.md	Escopo, pipeline, marcos e o que foi cortado. A defesa contra estourar prazo. Rolante-cresce.	Escopo, pipeline, cortes: contra o prazo.
animation	STATUS.md	Onde a produção está agora: o que está feito, em que etapa, próximos passos. Rolante.	Etapa atual, próximos passos. Rolante.
animation	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
animation	CENAS.md	OPCIONAL — quebra de cenas/shots com staging e notas de animação. Use na produção shot a shot.	OPCIONAL — cenas e shots com staging.
animation	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
comics	OBRA.md	A bíblia: premissa, tom, arco geral, formato. O norte criativo. Estável.	Premissa, tom, arco, formato. Estável.
comics	PERSONAGENS.md	Elenco: design (silhueta), voz, arco. Estável; consultado antes de inventar.	Elenco; consulte antes de inventar.
comics	ROTEIRO.md	Roteiros em página/quadro, com diálogo, descrição e notas de layout. Cresce.	Roteiro por página e quadro. Cresce.
comics	MUNDO.md	Mundo, regras, lugares, facções. A coerência do universo. Estável.	Mundo, regras, facções. Estável.
comics	STATUS.md	Onde a obra está agora: o que está pronto, em que etapa, próximos passos. Rolante.	Etapa atual, próximos passos. Rolante.
comics	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
comics	PRANCHAS.md	OPCIONAL — breakdown visual página a página (thumbnails, layout, fluxo de leitura). Use ao planejar a arte.	OPCIONAL — breakdown visual por página.
comics	LOG-TEMPLATE.md	Modelo do log do dia. Referência fixa — nunca substituído.	Modelo do log do dia; nunca substituído.
custom	DECISIONS.md	Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.	O porquê: decisões (DEC) e correções (FIX).
```

## Edicao 2 — `src/index.template.html` · o papel curto do IDEAS universal

**Ancora** (em `const UNIVERSAL_IDEAS_TPL`):

```
  role:"Segundo cérebro do projeto: captura toda ideia (sua e do assistente) na hora. Ideia muda de status, não some.",
```

**Substituir por:**

```
  role:"Segundo cérebro do projeto: captura toda ideia (sua e do assistente) na hora. Ideia muda de status, não some.", short:"Segundo cérebro: ideia muda, não some.",
```

## Edicao 3 — `src/index.template.html` · `normFiles` carrega o `short`

Sem esta edicao o `short` dos modulos some na normalizacao: `normFiles` copia so `name`, `cat`, `role` e `content`.

**Ancora** (em `function normFiles`, a linha inteira):

```
    role:    f.role,
```

**Substituir por:**

```
    role:    f.role, short: f.short,
```

## Edicao 4 — `src/index.template.html` · a linha do `CEREBRO.md` nas Instrucoes

**Ancora** (em `buildInstr`, secao «Arquivos de contexto»):

```
lines.push("- **CEREBRO.md** — comportamento do assistente (este conjunto de regras, em versão completa).");
```

**Substituir por:**

```
lines.push("- **CEREBRO.md** — o comportamento completo do assistente.");
```

## Edicao 5 — `src/index.template.html` · as Instrucoes mostram o papel curto

**Ancora** (em `buildInstr`, a linha seguinte a da Edicao 4):

```
_instrFiles.forEach(f => lines.push(`- **${f.name}** — ${f.role}`));
```

**Substituir por:**

```
_instrFiles.forEach(f => lines.push(`- **${f.name}** — ${f.short || f.role}`));
```

## Edicao 6 — `src/index.template.html` · o balde do grupo

**Ancora:**

```
const MODO_ORCAMENTO = { code: 550, asu: 400, compartilhado: 450 };
```

**Substituir por:**

```
const MODO_ORCAMENTO = { code: 550, asu: 400, compartilhado: 450, grupo: 250 };
```

## Edicao 7 — `src/index.template.html` · o CEREBRO gerado publica o balde do grupo e a linha do SO

**Ancora** (trecho de uma linha longa, no item «Teto por configuração» do CEREBRO gerado; 1 ocorrencia):

```
para as linhas que *qualquer* modo de trabalho liga (elas têm limite próprio, senão crescem sem dono). O **total** com modos ligados não passa de **${INSTR_TETO_MODOS}**.
```

**Substituir por:**

```
para as linhas que *qualquer* modo de trabalho liga (elas têm limite próprio, senão crescem sem dono), e **+${MODO_ORCAMENTO.grupo}** para o projeto em grupo. O **total** com modos ligados — contando a linha do sistema operacional, quando escolhido — não passa de **${INSTR_TETO_MODOS}**.
```

## Edicao 8 — `src/index.template.html` · corte de versao (D-158)

**Ancora:**

```
const KIT_VERSION = "1.124.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.125.0";
```

## Edicao 9 — `validate.js` · o shim expoe o SO

**Ancora** (inicio da linha `const SHIM`):

```
const SHIM = 'window.__T = {INSTR_TETO_MODOS, 
```

**Substituir por:**

```
const SHIM = 'window.__T = {OSENV, OS_CMDNOTE, INSTR_TETO_MODOS, 
```

(Os dois trechos terminam com um espaco depois da virgula.)

## Edicao 10 — `validate.js` · o `C28` nos quatro eixos, e o `C107` logo depois

**Ancora** (o bloco inteiro do `C28`, da linha `check("C28` ate o `});` que o fecha, antes do `check("C27`):

```
check("C28 teto por configuracao (wo0071): 6900 no padrao, orcamento por modo, total nos combos <= INSTR_TETO_MODOS", () => {
  const S=T.STATE; S.workmode = S.workmode || {};
  const pc=S.workmode.codeMode, pa=S.workmode.asuMode;
  function len(niche, code, asu){
    S.workmode.codeMode = code ? "yes" : "";
    S.workmode.asuMode  = asu  ? "yes" : "";
    return T.buildInstr(niche).length;
  }
  const fora=[]; let maxCode=0, maxAsu=0, maxTotal=0, maxPadrao=0, maxCompart=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const padrao=len(n,0,0), comCode=len(n,1,0), comAsu=len(n,0,1), combo=len(n,1,1);
    const incCode=comCode-padrao, incAsu=combo-comCode, compart=comCode+comAsu-combo-padrao, total=Math.max(comCode,comAsu,combo);
    maxCode=Math.max(maxCode,incCode); maxAsu=Math.max(maxAsu,incAsu); maxCompart=Math.max(maxCompart,compart);
    maxTotal=Math.max(maxTotal,total); maxPadrao=Math.max(maxPadrao,padrao);
    if(padrao > T.INSTR_TETO) fora.push(id+" padrao "+padrao+">"+T.INSTR_TETO);
    if(incCode > T.MODO_ORCAMENTO.code) fora.push(id+" +Code +"+incCode+">"+T.MODO_ORCAMENTO.code);
    if(incAsu  > T.MODO_ORCAMENTO.asu)  fora.push(id+" +ASU(marginal) +"+incAsu+">"+T.MODO_ORCAMENTO.asu);
    if(compart > T.MODO_ORCAMENTO.compartilhado) fora.push(id+" compartilhado +"+compart+">"+T.MODO_ORCAMENTO.compartilhado);
    if(total   > T.INSTR_TETO_MODOS)    fora.push(id+" combo "+total+">"+T.INSTR_TETO_MODOS);
  });
  S.workmode.codeMode=pc; S.workmode.asuMode=pa;
  assert(fora.length===0, "fora do orcamento -> " + fora.join(", "));
  // o produto ENSINA os numeros que o harness cobra (senao o projeto nao consegue reproduzir a conta)
  const cmd=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/Teto por configuração/.test(cmd), "CEREBRO nao ensina o teto por configuracao");
  assert(cmd.indexOf("+"+T.MODO_ORCAMENTO.code)>=0 && cmd.indexOf("+"+T.MODO_ORCAMENTO.asu)>=0 && cmd.indexOf(String(T.MODO_ORCAMENTO.compartilhado))>=0, "CEREBRO nao publica os tres orcamentos (Code, ASU, compartilhado)");
  assert(cmd.indexOf(String(T.INSTR_TETO_MODOS))>=0, "CEREBRO nao publica o total maximo com modos ligados");
  assert(/O que se trava é o \*\*incremento\*\*/.test(cmd), "CEREBRO nao explica que a trava e do incremento, nao do total");
  return "ok (padrao " + maxPadrao + "/" + T.INSTR_TETO + " · +Code " + maxCode + "/" + T.MODO_ORCAMENTO.code + " · +ASU " + maxAsu + "/" + T.MODO_ORCAMENTO.asu + " · compart " + maxCompart + "/" + T.MODO_ORCAMENTO.compartilhado + " · combo " + maxTotal + "/" + T.INSTR_TETO_MODOS + ")";
});
```

**Substituir por:**

```
check("C28 teto por configuracao (wo0071; quatro eixos na wo0133, D-160): 6900 no padrao dos dois canais, orcamento por modo e por grupo, total nos combos com a linha do SO <= INSTR_TETO_MODOS", () => {
  const S=T.STATE; S.workmode = S.workmode || {};
  const antes={mountMode:S.workmode.mountMode, groupMode:S.workmode.groupMode, codeMode:S.workmode.codeMode, asuMode:S.workmode.asuMode}, osAntes=T.OSENV.value;
  function len(niche, m, g, code, asu){
    S.workmode.mountMode = m ? "yes" : "";
    S.workmode.groupMode = g ? "yes" : "no";
    S.workmode.codeMode  = code ? "yes" : "";
    S.workmode.asuMode   = asu  ? "yes" : "";
    return T.buildInstr(niche).length;
  }
  // a linha do sistema operacional: o maior custo entre os sistemas, medido no gerado (nao depende de nicho nem de modo)
  const nRef=T.normNiche(T.NICHES.dev); T.OSENV.value="none"; const semSO=len(nRef,0,0,0,0); let maxSO=0;
  Object.keys(T.OS_CMDNOTE).forEach(k => { T.OSENV.value=k; maxSO=Math.max(maxSO, len(nRef,0,0,0,0)-semSO); });
  T.OSENV.value="none";
  const fora=[]; let maxCode=0, maxAsu=0, maxTotal=0, maxPadrao=0, maxCompart=0, maxGrupo=0, configs=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    [0,1].forEach(m => [0,1].forEach(g => {
      const ch=(m?"mount":"pasta")+(g?"+grupo":"");
      const padrao=len(n,m,g,0,0), comCode=len(n,m,g,1,0), comAsu=len(n,m,g,0,1), combo=len(n,m,g,1,1); configs+=4;
      const incCode=comCode-padrao, incAsu=combo-comCode, compart=comCode+comAsu-combo-padrao;
      const total=Math.max(comCode,comAsu,combo,g?padrao:0)+maxSO;
      maxCode=Math.max(maxCode,incCode); maxAsu=Math.max(maxAsu,incAsu); maxCompart=Math.max(maxCompart,compart); maxTotal=Math.max(maxTotal,total);
      if(!g){ maxPadrao=Math.max(maxPadrao,padrao); if(padrao > T.INSTR_TETO) fora.push(id+" "+ch+" padrao "+padrao+">"+T.INSTR_TETO); }
      if(g){ [[0,0],[1,0],[0,1],[1,1]].forEach(([c,a]) => { const inc=len(n,m,1,c,a)-len(n,m,0,c,a); maxGrupo=Math.max(maxGrupo,inc); if(inc > T.MODO_ORCAMENTO.grupo) fora.push(id+" "+ch+" grupo +"+inc+">"+T.MODO_ORCAMENTO.grupo); }); }
      if(incCode > T.MODO_ORCAMENTO.code) fora.push(id+" "+ch+" +Code +"+incCode+">"+T.MODO_ORCAMENTO.code);
      if(incAsu  > T.MODO_ORCAMENTO.asu)  fora.push(id+" "+ch+" +ASU(marginal) +"+incAsu+">"+T.MODO_ORCAMENTO.asu);
      if(compart > T.MODO_ORCAMENTO.compartilhado) fora.push(id+" "+ch+" compartilhado +"+compart+">"+T.MODO_ORCAMENTO.compartilhado);
      if(total   > T.INSTR_TETO_MODOS)    fora.push(id+" "+ch+" combo+SO "+total+">"+T.INSTR_TETO_MODOS);
    }));
  });
  Object.assign(S.workmode, antes); T.OSENV.value=osAntes;
  assert(configs === 16*Object.keys(T.NICHES).length, "esperado 16 configuracoes por nicho, medi "+configs);
  assert(fora.length===0, "fora do orcamento -> " + fora.join(", "));
  // o produto ENSINA os numeros que o harness cobra (senao o projeto nao consegue reproduzir a conta)
  const cmd=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/Teto por configuração/.test(cmd), "CEREBRO nao ensina o teto por configuracao");
  assert(cmd.indexOf("+"+T.MODO_ORCAMENTO.code)>=0 && cmd.indexOf("+"+T.MODO_ORCAMENTO.asu)>=0 && cmd.indexOf(String(T.MODO_ORCAMENTO.compartilhado))>=0, "CEREBRO nao publica os tres orcamentos (Code, ASU, compartilhado)");
  assert(cmd.indexOf("+"+T.MODO_ORCAMENTO.grupo+"** para o projeto em grupo")>=0, "CEREBRO nao publica o orcamento do grupo");
  assert(/contando a linha do sistema operacional/.test(cmd), "CEREBRO nao diz que a linha do SO conta no total");
  assert(cmd.indexOf(String(T.INSTR_TETO_MODOS))>=0, "CEREBRO nao publica o total maximo com modos ligados");
  assert(/O que se trava é o \*\*incremento\*\*/.test(cmd), "CEREBRO nao explica que a trava e do incremento, nao do total");
  return "ok (padrao " + maxPadrao + "/" + T.INSTR_TETO + " · +Code " + maxCode + "/" + T.MODO_ORCAMENTO.code + " · +ASU " + maxAsu + "/" + T.MODO_ORCAMENTO.asu + " · compart " + maxCompart + "/" + T.MODO_ORCAMENTO.compartilhado + " · grupo " + maxGrupo + "/" + T.MODO_ORCAMENTO.grupo + " · SO " + maxSO + " · combo+SO " + maxTotal + "/" + T.INSTR_TETO_MODOS + " · " + configs + " configuracoes)";
});

check("C107 papel curto nas Instrucoes, papel inteiro no CEREBRO (wo0133, D-160)", () => {
  const LIM=45, nunca=/nunca (é )?substitu/; let curtos=0, arquivos=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const instr=T.buildInstr(n), cmd=T.buildClaudeMd(n);
    assert(instr.indexOf("- **CEREBRO.md** — o comportamento completo do assistente.")>=0, id+": a linha do CEREBRO.md nas Instrucoes nao e a curta");
    T.effectiveFiles(n).forEach(f => {
      arquivos++;
      const visto = f.short || f.role;
      assert(visto.length <= LIM, id+"/"+f.name+": papel nas Instrucoes com "+visto.length+" > "+LIM+" (falta o short curado)");
      assert(instr.indexOf("- **"+f.name+"** — "+visto) >= 0, id+"/"+f.name+": as Instrucoes nao listam o arquivo com o papel curto");
      assert(cmd.indexOf(f.role) >= 0, id+"/"+f.name+": o CEREBRO perdeu o papel inteiro");
      if(f.short){
        curtos++;
        assert(f.short !== f.role, id+"/"+f.name+": short igual ao papel");
        assert(/^OPCIONAL/.test(f.role) === /^OPCIONAL/.test(f.short), id+"/"+f.name+": o short perdeu (ou inventou) o marcador OPCIONAL");
        assert(!nunca.test(f.role) || nunca.test(f.short), id+"/"+f.name+": o short perdeu o «nunca substituido»");
      }
    });
  });
  return "ok (" + curtos + " papeis curtos em " + arquivos + " arquivos)";
});
```

## Edicao 11 — `meta/CHANGELOG.md` · versao atual

**Ancora:**

```
> Histórico de versões. Versão atual: **v1.124.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.125.0**.
```

## Edicao 12 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.124.0 — A segunda leva do feedback dos vizinhos, e o livro de leitura que impede o atraso de se repetir (wo0131, D-159)
```

**Substituir por:**

```
## v1.125.0 — O teto das Instruções passa a olhar os quatro eixos, e o papel de cada arquivo encurta nas Instruções (wo0133, D-160)
- **Instruções geradas:** cada arquivo de contexto aparece com uma frase curada de até 45 caracteres (campo `short`); o papel inteiro segue no CEREBRO gerado, na tabela de documentos, e no cabeçalho do template. A linha do `CEREBRO.md` também encurta. Padrão máximo **6.681 → 6.034**; pior caso realista (`narrative`, grupo + Code + ASU + a linha do Windows) **8.027 → 7.380**.
- **Teto por configuração:** o `C28` mede canal × grupo × Code × ASU — 16 configurações por nicho, 304 no total — e soma a linha do sistema operacional ao total dos combos. O grupo ganha orçamento próprio (**+250**), publicado no CEREBRO gerado junto dos outros três.
- **Reabre a `D-094`**, que manteve os papéis longos quando a folga era de 862 a 1.647. O teto **não sobe** (`D-103` confirmada) e o ramo do Code fica nas Instruções.
- Origem: análise `261016-ANALISE-teto-das-instrucoes-geradas.md` (`i-N67`). Harness **19/19 · 108/108** (entra o `C107`).

## v1.124.0 — A segunda leva do feedback dos vizinhos, e o livro de leitura que impede o atraso de se repetir (wo0131, D-159)
```

## Edicao 13 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; 1 ocorrencia):

```
Versão atual: **v1.124.0**.
```

**Substituir por:**

```
Versão atual: **v1.125.0**.
```

## Edicao 14 — `meta/IDEAS.md` · a `i-N67` decidida

**Ancora** (o titulo inteiro):

```
## i-N67 — O teto das Instruções geradas está quase cheio nos dois eixos — ABERTA, gatilho: antes da próxima regra que precise morar nas Instruções
```

**Substituir por:**

```
## i-N67 — O teto das Instruções geradas está quase cheio nos dois eixos — DECIDIDA em 2026-10-16 (`D-160`; análise `261016-ANALISE-teto-das-instrucoes-geradas.md`): a WO-1 é a wo0133 (papéis curtos + `C28` nos quatro eixos); a WO-2, a curadoria das convenções que repetem um princípio do nicho, segue ABERTA
```

## Edicao 15 — `meta/IDEAS.md` · `i-N69`, acima da `i-N68`

**Ancora** (o titulo inteiro da `i-N68`):

```
## i-N68 — Conferências de tela pendentes do dono — ABERTA, gatilho: a próxima vez que o dono abrir o `index.html` no navegador
```

**Substituir por:**

```
## i-N69 — Medir o teto em regras, não só em caracteres — ABERTA, sem gatilho de data

**Origem:** análise `261016-ANALISE-teto-das-instrucoes-geradas.md`, opção (2). O teto em caracteres mede um substituto: na evidência externa de 2026, o que derruba a aderência é o número de regras simultâneas — preprint arXiv 2607.19257, não revisado: resposta perfeita de 93,8% com 10 regras e 23,8% com 40, no Claude Sonnet 5 `[relatado pela fonte]`. Uma regra longa e única custa mais caracteres e menos atenção que três curtas.

**A ideia:** um contador de regras ao lado do de caracteres no `C28` — linha de conteúdo fora os títulos, como a análise contou (54 na `narrative` com Code + ASU). Só mede; não decide teto. Complementa a entrada de 2026-07-29 («Revisar o orçamento por modo quando o custo real de token/caractere mudar»), que segue sendo a única condição para o teto subir.

## i-N68 — Conferências de tela pendentes do dono — ABERTA, gatilho: a próxima vez que o dono abrir o `index.html` no navegador
```

## Edicao 16 — `meta/DECISIONS.md` · `D-160` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que termina em «**Produto:** `i-N65`.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore (`git ls-files --eol`): grave o texto novo em CRLF.

```
## D-160 — O teto das Instruções olha os quatro eixos, e o papel do arquivo encurta nas Instruções (reabre a D-094)

**Data:** 2026-10-16 · **WO:** 0133 · **Análise:** `meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md` · **Reabre:** `D-094` (os papéis dos arquivos) · **Estende:** `D-105` (teto por configuração).

**Decisão.** Aceita como está a recomendação da análise (dono, 2026-10-16): (1) a `D-094` é reaberta — o papel de cada arquivo de contexto ganha uma frase curada de até 45 caracteres no campo `short`, que tem precedência nas Instruções; o `role` inteiro segue no CEREBRO gerado, na tabela de documentos, e no cabeçalho de cada template; (2) o `C28` passa a medir os quatro eixos do gerador — canal × grupo × Code × ASU, 16 configurações por nicho — e soma a linha do sistema operacional ao total dos combos; o grupo ganha o balde `grupo ≤ 250` no `MODO_ORCAMENTO`; (3) o teto **não sobe**: a `D-103` é confirmada com o critério de hoje, e a ideia de medir regras em vez de caracteres fica na `i-N69`; (4) o ramo do Code fica nas Instruções — as quatro linhas dele são lidas pelo chat, não pelo executor; (5) duas WOs — esta, e a curadoria das convenções que repetem um princípio do nicho, que segue aberta na `i-N67`. Corta a **v1.125.0** (`D-158`).

**Por que a D-094 caiu.** Ela manteve os papéis longos porque a folga era de 862 a 1.647 por nicho. Em 16/10 a folga padrão da `narrative` era 238, e com grupo + Code + ASU três nichos passavam do total de 7.600 sem o harness ver.

**Por que a régua mudou.** O `C28` (wo0071) nasceu com dois eixos. O grupo é mais antigo que ele e nunca teve orçamento (+234 em todo nicho); o canal entrou na wo0129, depois dele; a linha do sistema operacional (até 213) nunca foi medida. O pior caso realista era 8.027 (`narrative`, pasta + grupo + Code + ASU + Windows) com o harness verde. É o mesmo defeito que a `D-105` achou com o balde compartilhado: linha sem orçamento cresce sem dono.

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0133 traz a medida no repo]`: padrão máximo **6.681 → 6.034**; combo com a linha do SO **8.027 → 7.380**/7.600; incrementos inalterados (Code 546, ASU 372, compartilhado 372); grupo **234**/250; SO 213. **174 papéis curtos em 174 arquivos** — 157 dos módulos e o IDEAS universal, injetado em 17 nichos. Check novo `C107`: o papel visto nas Instruções tem até 45 caracteres, o inteiro está no CEREBRO, e o curto preserva «OPCIONAL» e «nunca substituído». Harness 107 → **108**.

**Fica fora, de propósito:** o construtor `custom` monta arquivos sem `short` e mostra o papel inteiro, como hoje; o vocabulário de mount nas Instruções do canal pasta («(no Projeto)») é da `i-N66`; as Instruções da casa (7.039) não são geradas, e o `C28` não as mede.
```

## Edicao 17 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (913772 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **108/108**. Registre crua no relatorio a linha do `C28` e a do `C107`. O tamanho do `index.html` e `[medido em sandbox]` em LF: se o seu der diferente so pelo fim de linha, relate e siga; harness vermelho = **PARE**.

## Edicao 18 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 17. Todos contam LINHAS (`grep -c`); o padrao de cada um e exclusivo do texto que esta WO insere (medido 0 no HEAD). Esperado `antes → depois` no comentario:

```
cat src/niches/*.js | grep -c 'role:"[^"]*", short:"'                      # 0 -> 157
grep -cF 'short:"Segundo cérebro: ideia muda, não some."' src/index.template.html   # 0 -> 1
grep -cF 'role:    f.role, short: f.short,' src/index.template.html          # 0 -> 1
grep -cF 'f.short || f.role' src/index.template.html                         # 0 -> 1
grep -cF 'grupo: 250 }' src/index.template.html                              # 0 -> 1
grep -cF 'const KIT_VERSION = "1.125.0";' src/index.template.html            # 0 -> 1
grep -c '^check("C107 ' validate.js                                          # 0 -> 1
grep -c '^## D-160 ' meta/DECISIONS.md                                       # 0 -> 1
grep -c '^## i-N69 ' meta/IDEAS.md                                           # 0 -> 1
grep -m1 '^## v' meta/CHANGELOG.md                                           # v1.124.0 -> v1.125.0
```

**Prova negativa (rode e restaure):** tire o trecho ` short:"Fichas: voz, arco, relações. Estável.",` (com o espaco inicial) de `src/niches/narrative.js`, rode `node build.js` e `node validate.js index.html`: o `C107` tem de ficar vermelho com `narrative/PERSONAGENS.md: papel nas Instrucoes com 87 > 45`. Restaure **recolocando o mesmo trecho** no mesmo lugar (o arquivo ainda nao esta commitado, entao `git checkout` desfaria a WO inteira nele), rode o build de novo e confira que o `index.html` voltou ao tamanho da Edicao 17 e o harness ao verde.

**Forma do diff:** rode `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha) e confira contra a tabela abaixo, medida na replica com `git diff --no-index --numstat`. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/niches/*.js` (19 modulos; cada linha trocada e a linha do papel) | 157 | 157 |
| `src/index.template.html` | 7 | 7 |
| `validate.js` | 55 | 19 |
| `index.html` (gerado) | 164 | 164 |
| `meta/CHANGELOG.md` | 7 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 7 | 1 |
| `meta/DECISIONS.md` | 14 | 0 |
| `logs/2026-10-16.md` (a secao do chat, ja no disco) | 15 | 0 |
| `meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md` (nova) | 184 | 0 |
| `meta/workorders/261016-wo0133-papeis-curtos-e-regua-dos-quatro-eixos.md` (esta WO) | 643 | 0 |

Por modulo, `+ = − =`: animation 9 · brainstorm 7 · business 7 · career 10 · client 9 · comics 8 · companion 11 · cuisine 7 · custom 1 · design 9 · dev 10 · game 10 · marketing 8 · music 8 · narrative 10 · pixel 8 · product 7 · research 9 · rpg 9. O `index.html` e o `validate.js` foram medidos com `--ignore-cr-at-eol`; a analise, o log e esta WO entram como o chat os gravou (LF).

## Edicao 19 — commit e push (verde = sem perguntar)

```
git add src/index.template.html src/niches index.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md logs/2026-10-16.md meta/workorders/261016-wo0133-papeis-curtos-e-regua-dos-quatro-eixos.md
```

```
git commit -m "feat(kit): papel curto dos arquivos nas Instrucoes e teto medido nos quatro eixos (wo0133, D-160)" -m "Reabre a D-094: cada arquivo de contexto ganha um short de ate 45 caracteres nas Instrucoes; o papel inteiro segue no CEREBRO. O C28 passa a medir canal x grupo x Code x ASU e a linha do SO, com balde proprio para o grupo; C107 novo. v1.125.0."
```

```
git push
```

---

## Fora de escopo

- A curadoria das convencoes que repetem um principio do nicho (a WO-2 da analise) — segue aberta na `i-N67`.
- O vocabulario de mount nas Instrucoes do canal pasta («Arquivos de contexto (no Projeto)», «Logs detalhados do dia NÃO ficam no Projeto») — e da `i-N66`.
- O construtor `custom` e os outros 9 lugares que leem `f.role` (Inventario): seguem com o papel inteiro.
- O `G16` (pior caso de conteudo): segue com os modos desligados, como decidiu a `D-105`.
- O cabecalho do `meta/STATUS.md` alem do numero da versao: contagens e «Ultima sessao» sao do `/wrap`.

## Armadilhas desta WO

- **Fim de linha.** Na arvore, `src/index.template.html`, `validate.js` e `meta/DECISIONS.md` sao **CRLF**; os modulos de nicho, o CHANGELOG, o STATUS e o IDEAS sao LF (`git ls-files --eol`). A ancora da Edicao 10 tem 31 linhas: compare com o `\r` normalizado e grave de volta em CRLF. As demais ancoras sao de uma linha.
- **A tabela da Edicao 1 tem TAB como separador** e o papel pode conter crase, aspas simples, «», `→` e colchetes (`mecanicas/[sistema].md`): leia a tabela por script, deste arquivo, e procure o trecho como texto literal — nunca como expressao regular.
- **`short` ja existe no vocabulario dos principios** (o campo curado da `D-090`), mas na forma de array: o padrao da Edicao 18 (`role:"[^"]*", short:"`) e exclusivo do texto que esta WO insere — medido 0 no HEAD.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0133.txt` (`date +%y%m%d-%H%M`, rodado na hora).
