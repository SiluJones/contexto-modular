# ANÁLISE — O enxugamento do CEREBRO gerado: o que sai da abertura da conversa, para onde vai, e o teto que impede o peso de voltar

> **Status:** Decidida (2026-11-18, KCM 29: como recomendado — E1 + E2 + T em duas WOs; o `GUIA-DO-KIT.md` com natureza `do-kit`; a Medição delegada fica; a WO B espera dois eventos de vizinho)
> **Data:** 261118 · **Base:** v1.150.0, HEAD `34f3494` (wo0184), árvore limpa (só `?? .claude/launch.json`)
> **Vira:** a WO A na wo0185 (v1.151.0; o corpo da seção do update foi inteiro para o GUIA, e não só para o prompt: nada se apaga, e os checks mudam de fonte em vez de perder a frase); a WO B espera dois eventos de vizinho (`i-N99`) · **Decisão:** `D-188`
> **Raia:** Chat (análise; **não** é WO). **Antecessoras:** `260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md` e `261016-ANALISE-teto-das-instrucoes-geradas.md` (o mesmo problema, uma camada acima); `261117-ANALISE-a-leva-de-novembro.md` (a K0, que adiou este trabalho para cá).
> **Método:** réplica `git archive HEAD | tar -x` fora da pasta do repo, com o `node_modules` do dono; `node build.js` + `node validate.js index.html` verdes (19/19 · 127/127). Sondas em Node que chamam o `buildClaudeMd` real pelo mesmo shim do `validate.js`, em `$HOME/kcmtools/` na VM do chat (podem sumir com a sessão): `secoes.js` (bytes por seção, 19 nichos × 4 modos), `secv.js` e `cerebro-de.js` (o mesmo CEREBRO em versões antigas, do `index.html` de cada commit), `strip-loop.sh` com um `validate-strip.js` (o harness com uma seção tirada do CEREBRO gerado). Todo número abaixo é `[medido em réplica]`, salvo marca em contrário.
> **Escopo dado pelo dono** (KCM 29, 18/11, resposta no chat à pergunta do handoff): o enxugamento **pode mover texto para fora do CEREBRO** — para um arquivo lido sob demanda ou para skills — além de encurtar e condicionar `[relatado pelo dono]`.

## Problema

O CEREBRO é o arquivo que o ritual manda ler inteiro **na abertura de toda conversa**, em todo projeto do kit. Ele tem hoje de **92,7 a 116,0 KB** nos 19 nichos e quatro modos, e **o peso é da base comum**: o `custom` com dois arquivos gera 96.322 bytes; o que é próprio do nicho soma de 4 a 13 KB. Em 15/07 (v1.70.0) o mesmo CEREBRO do `design` tinha 33.468 bytes: **triplicou em quatro meses**, e nunca houve um teto que o fizesse aparecer.

Quatro vozes, nenhuma combinada com a outra: o fileview (`i-N93` item 4: 106 KB contra 36 KB do anterior), o got-legends (`i-N92` item 10: de 55 a 112 KB depois do update; «é o arquivo da abertura de toda conversa»), o cardápio (`i-N95` item 3: 99.948 bytes para uma peça — medida do KCM; a pergunta da carta 01, «pesou?», segue sem resposta) e o Cinzeiro (`i-N98` item 4: 119.776 bytes no custom de quatro nichos; a resposta vem na carta 02 deles). A `D-185` deu o gatilho da `D-181` por cumprido pela família.

**Se nada for feito:** cada conversa de cada projeto continua abrindo com um texto de 16,8 mil palavras; cada WO de kit soma à base sem que nada a meça (a leva de novembro somou 1.166 bytes porque a `D-185` mandou declarar, não porque algo cobrasse); e cada update de projeto continua fundindo à mão um arquivo `fusao` de 100 KB — o got-legends levou 13 turnos e duas WOs para isso (`D-180`).

## Restrições / o que foi medido

**1. O tamanho, por nicho e modo** `[sonda secoes.js; bytes UTF-8]`

| | canal pasta | pasta + Code | canal de reserva (mount) | mount + Code |
|---|---|---|---|---|
| menor (`custom`, 2 arquivos) | 96.322 | 102.719 | 92.677 | 98.652 |
| `design` | 102.137 | 108.567 | 98.492 | 104.500 |
| `dev` | 103.030 | 109.502 | 99.385 | 105.435 |
| maior (`narrative`) | 109.512 | **115.987** | 105.867 | 111.920 |

**2. O crescimento** `[cerebro-de.js sobre o index.html de cada commit; nicho design, modos padrão de cada época]`

| Data | Versão | Commit | CEREBRO do `design` |
|---|---|---|---|
| 15/07 | v1.70.0 | `ff9b810` | 33.468 |
| 01/08 | v1.95.0 | `8af3ed7` | 48.773 |
| 15/08 | v1.117.0 | `573a18f` | 74.456 |
| 01/09 | v1.122.0 | `387aa0c` | 82.307 |
| 15/09 | v1.122.0 | `c3b6459` | 89.847 |
| 15/10 | v1.124.0 | `bc6df27` | 95.932 |
| 15/11 | v1.143.0 | `b3a4fb0` | 99.948 |
| 18/11 | v1.150.0 | `34f3494` | 102.137 |

O salto foi de julho a setembro (+56 KB); desde outubro, +6 KB em 26 versões. **De onde veio** (julho → hoje, mesmo nicho): Regras de higiene 1.237 → 18.834 · Bloco de fecho 0 → 9.679 · Sonda e exploração 0 → 8.438 · Análise antes do compromisso 0 → 5.118 · Medição delegada 0 → 3.691 · Canal do chat 0 → 3.739 · Refino das Instruções 1.545 → 4.969 · Ao receber um template-update 788 → 3.993 · Correspondência 0 → 2.737. Os Princípios cresceram pouco (9.719 → 13.254).

**3. As seções da base, o que cada uma custa, o que a prende e quando ela serve** `[secoes.js; strip-loop.sh: cada linha é um harness inteiro com só aquela seção tirada do CEREBRO gerado, ~25 s cada]`

O `C121` fica vermelho em toda remoção (o índice do topo deixa de bater com as seções) — é artefato do método, não prende texto; está fora da coluna. «Quando serve» é a leitura desta análise sobre o próprio texto da seção: **sempre** (todo turno), **abertura**, ou **evento** (um acontecimento que se vê: chegou carta, chegou pacote, precisa de um número).

| Seção (`design`, canal pasta) | Bytes | +Code | Checks que a prendem | Quando serve |
|---|---|---|---|---|
| Regras de higiene | 18.834 | = | 20 (`C3` `C23` `C24` `C27` `C32` `C33` `C34` `C36` `C38` `C43` `C44` `C45` `C47` `C50` `C53` `C55` `C56` `C112` `C116` `C125`) | sempre |
| Princípios de trabalho | 13.254 | = | 13 (`C2` `C8` `C9` `C11` `C12` `C14` `C16` `C18` `C32` `C53` `C55` `C112` `C117`) | sempre |
| Bloco de fecho de turno | 9.679 | = | 11 (`C19` `C22` `C24` `C27` `C31` `C33` `C42` `C43` `C53` `C55` `C112`) | todo turno |
| Sonda e exploração (com os três `## ` do esqueleto em bloco de código) | 8.438 | = | 5 (`C43` `C44` `C49` `C52` `C101`) | **evento** (precisa de número; defeito de raspão) |
| Transferência — canal de reserva | 6.459 | = | 2 (`C1` `C43`) | **evento** (a conversa roda sem a pasta) |
| Como o assistente entrega | 5.834 | 6.228 | 4 (`C26` `C106` `C112` `C124`) | sempre |
| Análise antes do compromisso | 5.118 | 5.189 | 7 (`C21` `C24` `C30` `C34` `C36` `C43` `C44`) | regra sempre; o «como» só no **evento** |
| Refino das Instruções | 4.969 | = | 7 (`G19` `C11` `C17` `C19` `C28` `C44` `C111`) | dever com gatilho; o «como» só no **evento** |
| Tabela de gatilhos | 4.800 | 5.120 | 16 | sempre |
| Ao receber um template-update | 3.993 | = | 6 (`G12` `C25` `C29` `C38` `C112` `C120`) | **evento** (chegou pacote) |
| Canal do chat — pasta vinculada | 3.739 | 4.173 | 3 (`C43` `C105` `C124`) | sempre |
| Medição delegada | 3.691 | = | 5 (`C35` `C41` `C43` `C112` `C124`) | evento, mas fica (ver abaixo) |
| Correspondência entre projetos | 2.737 | = | 3 (`C43` `C45` `C112`) | **evento** (chega ou sai carta) |
| Como manter os documentos | 2.174 | = | 3 (`C31` `C49` `C107`) | abertura |
| topo + índice | 2.075 | 2.174 | — | abertura |
| Recomendação de configuração | 1.427 | 1.314 | 2 (`C56` `C113`) | todo turno |
| Ao final da conversa | 1.355 | 3.058¹ | 2 (`C41` `C112`) | evento (fim) |
| Verifica antes de pedir · Técnicas específicas · Convenções · Ritual · Quando perguntar · Idioma | 3.562 juntas | = | de 1 a 3 cada (Convenções: `C8` `C104` `C108`); «Quando perguntar», nenhum | sempre |
| Só com o Code: Desenvolvimento no Claude Code · Kit de arranque | — | 1.875 + 1.647 | nenhum · `G7` | quando escreve WO |

¹ Com o Code a seção troca de forma («o assistente REGISTRA o que falta»; `C19` `C41` `C47`).

Três leituras:

- **Quase tudo está preso** (24 checks diferentes só nas seções de evento). Mover não é proibido por isso: o check passa a procurar a frase no arquivo novo. Mas cada check que muda de fonte é um lugar onde a cobertura pode afrouxar calada — é o custo principal de qualquer opção que mova texto.
- **Duas seções não têm check nenhum:** «Quando perguntar vs. quando agir» (357 bytes) e «Desenvolvimento no Claude Code» (1.875). Dado, não proposta.
- **A `D-185` marcou a Medição delegada como seção que o enxugamento não corta** (as linhas novas da leva foram para lá de propósito). Esta análise a mantém no CEREBRO.

**4. O texto não se repete ao pé da letra** `[shingles de 7 palavras sobre o CEREBRO do design]`: 101 de 16.485 sequências aparecem em mais de uma seção. A repetição que existe é de **ideia** (a releitura da pasta aparece no Canal do chat e duas vezes na higiene; «a sua cópia não é a fonte» na higiene e no princípio 11; «não verificado» na higiene e na Medição delegada). Encurtar, portanto, é **curadoria que reescreve**, não remoção de cópia.

**5. Densidade** `[mesma sonda, fora dos blocos de código]`: 16.817 palavras, 431 linhas, 150 itens de lista, 303 trechos em negrito. A higiene sozinha tem 26 regras, e 12 delas passam de 700 bytes.

**6. A fusão (`D-180`) decide como o corte chega aos projetos instalados.** O CEREBRO é `fusao` e **a base é o arquivo do pacote**: o que sai da base some do vivo no update seguinte sem revogação. O risco é o inverso: o inventário que a `D-180` exige lista «o que do vivo ficou de fora», e uma seção inteira que sumiu da base aparece ali como candidata a **voltar** pelo transplante. As naturezas que o manifesto conhece hoje são três (`template`, `fusao`, `modelo-em-espera`); nenhuma diz «arquivo do kit: substitua inteiro».

**7. O pacote de update já carrega o conteúdo da seção do update.** O prompt tem 9.607 bytes e o `C120` confere a regra da fusão nos três lugares — prompt, manifesto e CEREBRO. Num projeto atrasado, a seção do CEREBRO vivo é, por construção, a **versão velha** da regra; quem manda é o prompt colado.

**8. As Instruções não têm onde receber ponteiro.** O incremento do Code está em 549/550 em 18 dos 19 nichos (`261117`, medida 1). Tudo o que esta análise move tem de ser achado a partir do **próprio CEREBRO** (o índice do topo e a tabela de gatilhos, lidos na abertura), não das Instruções.

**O que NÃO foi medido:** (a) se a ferramenta de leitura do chat, nos projetos, corta um arquivo de 100 KB — o ritual supõe leitura inteira e ninguém conferiu; a forma barata é perguntar na próxima carta se o rodapé do CEREBRO chegou; (b) tokens: não há contador na VM — por bytes, a abertura custa na casa das dezenas de milhares de tokens `[deduzido]`; (c) o que os projetos releem no meio da conversa — não há registro disso em nenhum vizinho lido; (d) as respostas do cardápio e do Cinzeiro (carta 02) ainda não chegaram e podem mudar o peso desta análise.

## A experiência de fora (P13 — onde a ideia já falhou)

- **A favor de enxugar.** A documentação do Claude Code mira menos de 200 linhas por arquivo de memória e diz que arquivo maior consome mais contexto e **reduz a aderência**; e lembra que importar arquivo organiza, mas não reduz custo, porque o importado carrega junto. Um estudo de ETH Zurich e LogicStar (ICLR 2026) mediu arquivos de contexto de repositório em vários agentes: eles tendem a **baixar a taxa de sucesso** e sobem o custo em mais de 20%; os agentes seguem as instruções — e por isso exigência desnecessária torna a tarefa mais difícil. O IFScale (NeurIPS 2025) mediu a queda do seguimento de instruções com a densidade, e um viés a favor das primeiras.
- **Contra mover para leitura sob demanda — o contraponto que mais pesa.** A Vercel comparou, nas evals de Next.js 16, conhecimento em skill contra um índice sempre presente no `AGENTS.md`: em 56% dos casos o agente **não chamou a skill**; com instrução explícita para usá-la, 79%; com o índice comprimido no arquivo sempre lido, 100%. A lição dela não é «nada fora do arquivo», é **o mapa fica sempre presente, o detalhe se lê quando preciso**, e a decisão de buscar não pode ficar no juízo do modelo.
- **A história da própria casa.** A `D-161` moveu 46 convenções das Instruções para o CEREBRO e deu certo porque o CEREBRO é lido na abertura — a camada de baixo ainda era lida. Um arquivo sob demanda é outra coisa: **é a camada que pode não ser lida.** E o teto das Instruções (`C28`) segurou as Instruções desde julho; o CEREBRO, sem teto, triplicou.

**O que isto pede de qualquer opção que mova:** só sai o que tem **gatilho observável** (um arquivo que chega, um modo que falta, um número que se precisa medir), e o gatilho fica na tabela de gatilhos do CEREBRO, com o nome do arquivo e da seção. Regra que vale sempre, ou cujo gatilho é juízo («mudança não-trivial», «sinal de atrito»), **fica dentro**.

## Opções consideradas

**E0 — Nada além de um teto.** Congela o peso onde está (102 KB no `design`). Não resolve a reclamação; só impede a próxima. Fica como parte de toda opção, não como opção sozinha.

**E1 — Condicionar ao modo e apontar para onde o texto já mora.** (a) «Ao receber um template-update» vira um parágrafo-ponteiro (o pacote traz o prompt; a fusão parte do pacote; o pacote fica na pasta-pai até o merge fechar), ~400 bytes: o resto já está no prompt e no manifesto (medida 7). (b) No canal pasta, «Transferência — canal de reserva» vira o essencial da reserva em ~1,5 KB (diga qual canal tem; arquivo inteiro por download; nunca de fragmentos; o FlatDrop por pergunta), e o corpo vai para o GUIA da E2 — ou, sem a E2, fica só no CEREBRO gerado com o mount. **Ganho:** −8,6 KB no canal pasta, −3,5 KB no mount. **Custo:** 8 checks mudam de fonte. **Risco:** baixo — os dois gatilhos são arquivos que se veem (o pacote; a pasta que não responde).

**E2 — Um arquivo do kit lido sob demanda, `meta/GUIA-DO-KIT.md`, com o que tem gatilho observável.** Nasce com: a Sonda e exploração inteira, a Correspondência inteira, o corpo da Transferência de reserva (E1b), e a **metade «como fazer»** da Análise antes do compromisso e do Refino das Instruções — no CEREBRO ficam a regra e o gatilho de cada uma (~1 KB e ~1,2 KB). Cada seção que sai deixa no CEREBRO **uma linha na tabela de gatilhos** («Chega ou sai carta de outro projeto → antes de responder, leia «Correspondência» no `GUIA-DO-KIT.md`») e uma linha no índice do topo («No `GUIA-DO-KIT.md`, lido quando o gatilho pede: …»). O GUIA ganha natureza própria no manifesto, **`do-kit`: substitui inteiro, não se funde** — o que o projeto quiser mudar ali vai para «Técnicas específicas deste projeto», no CEREBRO. **Ganho (com a E1):** −27,0 KB no canal pasta.

| Configuração | Hoje | Com E1 + E2 |
|---|---|---|
| `design`, pasta | 102.137 | **75.123** |
| `custom` (2 arquivos), pasta | 96.322 | 69.308 |
| maior, pasta + Code (`narrative`) | 115.987 | 88.902 |
| maior, mount + Code (`narrative`) | 111.920 | 89.884 |

Volta o CEREBRO ao tamanho de meados de agosto, sem perder regra: o texto que sai continua no kit, num arquivo que o pacote entrega. **Segundo ganho, que não aparece nos bytes:** um quarto do CEREBRO deixa de ser `fusao`. O merge à mão de cada update encolhe na mesma proporção, e o GUIA de um projeto nunca fica velho — o update o troca inteiro. **Custo:** até 19 checks mudam de fonte (os das cinco seções; na Análise e no Refino, só os que prendem a metade que sai); o `C43` passa a conferir o lado gerado no GUIA; o `C121` aprende o índice com o GUIA; o manifesto ganha a natureza e a linha «seções que mudaram para o GUIA — não transplante». **Risco:** o da Vercel — o GUIA não ser aberto quando devia. É por isso que só entra seção de gatilho observável.

**E3 — Encurtar o que fica (higiene, princípios, fecho: 41,8 KB).** A higiene tem 26 regras, 12 delas acima de 700 bytes, e as longas costumam carregar o caso que as originou; tirar o caso e deixar a regra daria algo entre 10 e 15 KB `[deduzido: não houve curadoria de amostra]`. **Custo alto:** 44 prisões de check nessas três seções, reescrita de texto que cada projeto pode ter adaptado (e a fusão do update compara bloco a bloco), e a regra perde o «por quê» que a fazia ser seguida — a casa aprendeu que regra sem razão é a que se descumpre. **Não agora.** Se o teto apertar depois da E2, uma seção por WO, com medida antes e depois.

**E4 — Skills (Agent Skills) para o conteúdo de evento.** Descartada: só existem no kit do Code (o pacote sem o Code não as tem, e o canal de reserva também não), e é exatamente o mecanismo que a Vercel mediu falhando por não ser chamado.

**E5 — Só o ritual: ler na abertura o índice e as seções fixas, o resto sob demanda.** Zero byte mudado, e o índice já existe. Descartada como principal: põe **todas** as seções no juízo do modelo (a falha da Vercel, sem nem o gatilho observável), não reduz o merge do update e não muda nada para quem lê o arquivo inteiro de qualquer jeito.

**T — Teto da base, como o `C28` faz com as Instruções (vai com qualquer opção).** Um check novo mede o CEREBRO gerado: o do `custom` padrão (o melhor indicador da base, porque o nicho quase não pesa) e a pior configuração entre os 19 nichos e os quatro modos. Calibrado no resultado da WO que o cria, com folga pequena; subir o teto é decisão escrita, e toda WO de kit declara quanto a base mudou (a prática da `D-185`, virada regra).

## Recomendação

**E1 + E2 + T, em duas WOs de código, nesta ordem:**

1. **WO A — o GUIA nasce com o que é evento puro.** `meta/GUIA-DO-KIT.md` com a Sonda e exploração, a Correspondência e o corpo da Transferência de reserva; a seção do update vira ponteiro (E1a); a natureza `do-kit` no manifesto, com a «Resposta esperada» «substitui inteiro», e a linha «não transplante» para as seções que mudaram; as linhas da tabela de gatilhos e do índice; os checks que mudam de fonte, cada um com a prova negativa de que ainda fica vermelho sem a frase (agora no GUIA). **Ganho:** cerca de −19 KB no canal pasta. Corta minor (`D-158`).
2. **WO B — o «como» da Análise e do Refino, e o teto.** As duas seções ficam com a regra e o gatilho; o detalhe vai ao GUIA. O check do teto nasce aqui, calibrado no resultado (pelas contas desta análise: o `custom` padrão perto de 69,3 KB e a pior configuração perto de 89,9 KB, antes da folga). **Ganho:** cerca de −8 KB. Corta minor.

**Por quê esta e não as outras.** A E1 sozinha tira só 8% e deixa o merge do update do mesmo tamanho. A E3 tem o pior custo por byte e o maior risco de perda calada. A E2 tira um quarto do arquivo sem reescrever uma regra — o texto muda de lugar, não de forma —, e o lugar novo é do kit, o que o tira do merge. O teto é o que faltou desde julho: sem ele, qualquer enxugamento é desfeito em três meses, como as Instruções seriam sem o `C28`.

**Por quê nessa ordem.** A WO A só mexe em seções de gatilho que se vê (pacote, carta, número, pasta que não responde), onde a falha da Vercel tem menos espaço; se o GUIA não for aberto nos primeiros eventos dos vizinhos, a WO B (que move o «como» de duas seções de juízo) não sai. O teto vai na B porque calibrá-lo antes dos dois cortes fixaria um número que a própria análise já sabe que vai mudar.

**Fora do escopo:** o CEREBRO da própria casa (`meta/CEREBRO.md`, 63.240 bytes, escrito à mão) — o `C43` exige que ele carregue as cláusulas que o kit publica, e as carrega; enxugá-lo é outra análise, se o GUIA provar no kit.

## Riscos

- **O GUIA não ser aberto quando o gatilho dispara** (a falha medida pela Vercel). Mitigação: só seções de gatilho observável; a linha do gatilho nomeia o arquivo e a seção; o índice do topo lista o que mora no GUIA. **O que vigiar:** nos próximos eventos dos vizinhos — uma carta respondida, uma sonda escrita, um update fundido —, se a resposta segue o que só o GUIA diz (o contador único, as três propriedades do relatório da sonda). O livro de leitura já é o lugar de conferir. Dois eventos em que o GUIA não foi aberto suspendem a WO B.
- **A seção movida voltar pelo merge.** O inventário da `D-180` mostra «do vivo ficou de fora: Sonda e exploração» e o dono, de boa-fé, a transplanta de volta. Mitigação: a linha «não transplante» no manifesto e no prompt, e uma asserção no `C120`.
- **Regra local dentro de uma seção movida.** Um projeto que acrescentou regra própria à Sonda, no CEREBRO, a perderia sem ver se o GUIA substitui inteiro. Mitigação: o prompt do primeiro update depois da WO A manda procurar, nas seções que mudaram, linha que não está no GUIA, e levá-la a «Técnicas específicas» — o inventário da `D-180` aplicado a elas.
- **Check que muda de fonte e afrouxa calado.** Mitigação: muda a fonte da frase, nunca a asserção; prova negativa por seção movida, na réplica, relatada na WO.
- **Canal de reserva.** Sem a pasta, o GUIA tem de estar no Projeto junto do CEREBRO: o pacote o lista, e a linha da reserva diz que ele vai junto.
- **Mudança de método no meio do trabalho** (a própria higiene proíbe). Não se aplica: o projeto a recebe pelo update, quando decide atualizar.

## Ponto de decisão

1. **E1 + E2 + T, nas duas WOs, nesta ordem?** (recomendado) — ou só a E1 + T, ou só o T.
2. **O nome e o lugar:** `meta/GUIA-DO-KIT.md`, ao lado do CEREBRO, com a natureza `do-kit` (substitui inteiro; o que é do projeto vai para «Técnicas específicas»)? Outro nome serve; a natureza é o que importa.
3. **A Medição delegada fica no CEREBRO**, como a `D-185` disse? (recomendado: fica)
4. **A condição para a WO B:** dois eventos de vizinho conferidos pelo livro de leitura, sem o GUIA ignorado — ou a WO B logo depois da A, sem esperar?

## Fontes

- Claude Code, «How Claude remembers your project» (memória e `CLAUDE.md`): https://code.claude.com/docs/en/memory
- Gloaguen et al., «Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?» (ICLR 2026): https://arxiv.org/abs/2602.11988
- Jaroslawicz et al., «How Many Instructions Can LLMs Follow at Once?» (IFScale): https://arxiv.org/abs/2507.11538
- Vercel, «AGENTS.md outperforms skills in our agent evals» (jan. 2026): https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals
