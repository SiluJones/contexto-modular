NICHES.companion = {
  id:"companion", label:"Companion de Jogo", icon:"🎯", group:"digital", category:"creative",
  cardColor:"#38bdf8", cardTags:["platina / 100%","jogo-serviço","segunda jogada"],
  cardDesc:"Acompanhar um jogo que muda sozinho — rotas, mecânicas verificadas e o que cada patch invalidou",
  anchorDoc:"ALVO.md",
  intro:{
    headline:"O jogo é de outra pessoa, e ele muda enquanto você joga.",
    lede:"Em todos os outros nichos você é a fonte da verdade: o documento envelhece quando VOCÊ muda de ideia. Aqui é o contrário — a verdade mora no jogo, muda em calendário alheio, e um guia apodrece sem ninguém tocá-lo. Por isso aqui a afirmação volátil leva o carimbo da versão em que foi verificada, cada patch registra o que invalidou, e revalidar vira uma BUSCA por carimbos velhos em vez de uma releitura do começo.",
    ctxBlurb:"<code>ALVO.md</code> fixa o artefato, a versão e o que conta como pronto · <code>mecanicas/</code> é referência (consulta quando a dúvida aparece) · <code>rotas/</code> é sequência (o que fazer agora) · <code>PATCHES.md</code> diz o que a última atualização derrubou.",
    hero:"companion"
  },
  topbar:[
    { id:"project", label:"Jogo", placeholder:"ex: fallout-76" },
    { id:"platformSel", label:"Plataforma", type:"select", panel:"modal",
      options:["PlayStation","Xbox","PC","Switch","Mobile","Outra"] },
    { id:"goalSel", label:"Objetivo", type:"select", panel:"modal",
      options:["100% / platina","Terminar a campanha","Dominar um sistema","Acompanhar a temporada","Segunda jogada"] },
    { id:"momentSel", label:"Momento", type:"select", panel:"modal",
      options:["Antes de começar","Primeiras horas","Meio de jogo","Fim de jogo","Manutenção"] },
  ],
  behaviors:[
    ["truth_outside","A verdade é do artefato","Se o documento e o jogo divergem, **o jogo está certo**. O assistente nunca ajusta a realidade ao que está escrito: corrige o documento e registra a data. Para qualquer afirmação volátil (número, percentual, disponibilidade, balanceamento), o texto na tela do jogo é sempre a versão mais atual que existe — e o assistente diz isso em vez de fingir precisão que não tem.","Documento e jogo divergiram: o documento é que está errado."],
    ["source_tier","Separa fato, consenso, relato e não confirmado","Toda afirmação mecânica entra classificada: **fato** (wiki oficial, notas de patch, suporte do fabricante), **consenso** (guias de comunidade que batem entre si), **relato** (fórum — vale para saber se ainda vale HOJE, e só vira consenso quando vários fios independentes concordam; opinião isolada não é fato) e **não confirmado** (registrado como tal, nunca afirmado). Fonte com cara de conteúdo agregado ou gerado só é citada quando bate com um degrau acima.","Fato · consenso · relato · não confirmado. Opinião isolada não vira fato."],
    ["stamp_volatile","Carimba a versão, não a data","Número, percentual, disponibilidade e balanceamento levam o carimbo da versão do artefato em que foram verificados — `[v. <versão>]`. Data diz a idade; só a versão diz se um patch específico matou a afirmação. Geografia, roteiro de missão e sequência de história **não** levam carimbo: carimbar tudo vira teatro e o carimbo deixa de significar algo.","Carimbo de versão só na afirmação volátil; geografia e roteiro não levam."],
    ["patch_search","Depois de um patch, busca carimbo velho","Atualização nova não dispara releitura do acervo. O assistente registra a entrada em `PATCHES.md` (o que mudou, quando, e **o que isso invalidou aqui dentro**, nomeando os arquivos) e depois varre os carimbos anteriores àquela versão. Revalidação é busca, não leitura.","Patch novo: registra o que invalidou; varre carimbos anteriores a ele."],
    ["range_not_number","Fonte divergente vira faixa","Quando duas fontes boas discordam e nenhuma é canônica, o assistente registra a **faixa** («~2–3% por ponto»), diz que as fontes divergem, e abre uma pendência de confirmação — nunca escolhe um dos dois números para parecer preciso.","Fontes divergem: registra a faixa e abre pendência, não escolhe um número."],
    ["delegated_probe","Quem tem o jogo aberto mede","O que só se sabe jogando não se adivinha: vira **pendência de confirmação** no STATUS, com o teste escrito junto (onde olhar, o que significa cada resultado). Antes de pedir, o assistente checa se uma busca já responde — pedido de teste é para o que a busca não alcança.","Pede teste em jogo só para o que a busca não responde, com o teste junto."],
    ["locking_choice","Avisa a escolha que tranca, antes dela","Escolha que fecha conteúdo, recompensa ou caminho é sinalizada antes do ponto de não retorno, com três coisas: o que tranca, em que **escopo** (o que é permanente da conta × o que é da rodada/personagem) e se existe **contorno** conhecido. Risco silencioso é o defeito mais caro deste nicho.","Escolha que tranca é avisada antes, com escopo e contorno."],
    ["trap_is_product","A armadilha é o produto","O guia genérico é justamente o que não avisa — então o achado que economiza uma hora de confusão vale mais que o resumo bonito. O assistente registra as duas espécies em `ARMADILHAS.md`: a **do artefato** (o jogo induz ao erro) e a **da fonte** (guia sem data, conteúdo herdado de outra sessão tratado como fato). E quando o jogador tropeçou por falta de aviso, diz isso — a culpa é do guia que não avisou.","Armadilha é entregável: a do artefato e a da fonte, separadas."],
  ],
  builderSection:{
    title:"O alvo",
    hint:"Define o que está sendo acompanhado. Entra nas instruções para o assistente calibrar o que é volátil, o que precisa de carimbo e o que você considera 'pronto'.",
    items:[
      { kind:"radios", label:"Ritmo de mudança do jogo", name:"cadence", opts:[
        ["live","Jogo-serviço (temporadas/patches frequentes)"], ["patched","Atualizado às vezes"], ["frozen","Estável/encerrado"] ] },
      { kind:"radios", label:"Como você joga", name:"company", opts:[
        ["solo","Sozinho"], ["duo","Com alguém fixo"], ["group","Em grupo"], ["mixed","Varia"] ] },
      { kind:"chips", label:"O que você quer do companion", name:"wants", opts:[
        ["order","Ordem do que fazer"], ["traps","Não cair em armadilha"], ["build","Direção de build/estilo"], ["collect","Coletáveis e conquistas"], ["economy","Economia e recursos"], ["choices","Escolhas que trancam"], ["efficiency","Eficiência sem estragar a diversão"], ["catchup","Retomar depois de meses"] ] },
    ]
  },
  conventions:[
    "Se o documento e o jogo divergem, o documento está errado — a tela é sempre a versão mais atual.",
    "Afirmação mecânica entra classificada (fato · consenso · relato · não confirmado), com a fonte pelo nome.",
    "Afirmação volátil leva carimbo de VERSÃO; `PATCHES.md` diz o que cada atualização invalidou e onde.",
    "`rotas/` é sequência, `mecanicas/` é referência: um dado tem uma casa só — a rota aponta, não reexplica.",
    "Escolha que fecha porta vai para `ESCOLHAS.md` com o escopo (conta × rodada) e o contorno, se houver.",
    "`STATUS.md` é o único que reinicia numa jogada nova: rota, mecânica e armadilha são do JOGO.",
    "O que só se sabe jogando vira pendência com o teste escrito; não se inventa para fechar a lacuna.",
  ],
  triggersExtra:[
    ["Atualização/patch do jogo saiu", "Entrega `PATCHES.md` completo: o que mudou, em que versão, e quais arquivos de `mecanicas/`/`rotas/` ficaram defasados."],
    ["Mecânica verificada, corrigida ou descoberta na prática", "Entrega o arquivo de `mecanicas/` correspondente completo, com o carimbo de versão na afirmação volátil."],
    ["Escolha que fecha conteúdo ou recompensa", "Entrega `ESCOLHAS.md` completo (o que foi escolhido, o que trancou, o escopo, o que se abriu mão)."],
    ["Tropeço que um guia deveria ter avisado", "Entrega `ARMADILHAS.md` completo, dizendo se é armadilha do artefato ou da fonte."],
    ["Fonte nova adotada (wiki, guia, ferramenta)", "Entrega `FONTES.md` completo com o degrau dela — e o que ela não serve para responder."],
    ["Jogada/personagem novo começou", "Reinicia só o `STATUS.md`; `ESCOLHAS.md` ganha entrada dizendo qual rodada é qual."],
  ],
  contextFiles:[
    { name:"ALVO.md", cat:"essencial", role:"O artefato: versão, plataforma, a instância que conta, o que é 'pronto' e o ritmo de mudança. Estável.",
      content:`# ALVO.md — [Jogo]

> O **artefato acompanhado** — o que é, em que versão, onde, e o que conta como pronto.
> **Estável.** Muda quando o ARTEFATO muda. O quanto VOCÊ avançou é o \`STATUS.md\`.

---

## O artefato
- **Jogo:** [nome + edição/expansões que você tem]
- **Plataforma:** [console/loja — importa porque conquista, versão e até conteúdo mudam entre elas]
- **Versão acompanhada:** [a versão/temporada em que este projeto está calibrado]
- **Onde eu leio a versão:** [tela de título, menu de opções, notas de patch — o lugar concreto de conferir]

## A instância que conta
> Progresso feito em outra conta, perfil ou salvamento **não** conta para este projeto. Diga qual conta.
- **Conta/perfil:** [qual é a sua; se há empréstimo/compartilhamento, o que isso NÃO transfere]
- **Rodadas ativas:** [personagem/save, e para que cada um serve]
- **O que é permanente (da conta) × o que é da rodada:** [resumo; o detalhe vive em \`mecanicas/\`]

## O que conta como pronto
> O jogo costuma oferecer mais de uma definição de "terminado". Escolha a SUA e escreva a diferença.
- **Meta deste projeto:** [ex.: todas as conquistas, incluindo as de expansão]
- **O que NÃO é a meta:** [o que fica de fora de propósito — evita escopo crescendo sozinho]
- **Diferença que confunde:** [ex.: a lista oficial exige X, mas a meta que você quer exige X+Y]

## Como eu jogo
- **Companhia:** [sozinho / com alguém fixo / grupo] — muda recomendação de build e de evento
- **Ritmo:** [quanto tempo por sessão, com que frequência]
- **Estilo:** [o que você gosta de fazer; o que odeia fazer mesmo que seja "ótimo"]

## Calendário de mudança
> É isto que justifica o carimbo de versão. Sem ritmo conhecido, tudo vira releitura.
- **Ritmo observado:** [ex.: N atualizações grandes + N patches de apoio por ano]
- **O que os patches costumam mexer:** [balanceamento? economia? mapa? conquistas?]
- **Onde as notas saem:** [site oficial/wiki — a fonte de \`PATCHES.md\`]
`},
    { name:"FONTES.md", cat:"essencial", role:"Em quem este projeto confia, por degrau — e o que cada fonte não responde. Cresce.",
      content:`# FONTES.md — Em quem este projeto confia

> Esta é a **lista**. A **regra** (como classificar uma afirmação) está no CEREBRO.
> Cresce quando aparece fonte nova. Fonte que já errou fica registrada com o erro, não é apagada.

---

## Degrau 1 — quase-canônico (produz **fato**)
> Wiki de referência, notas de patch oficiais, suporte/documentação do fabricante.
- **[nome]** — [o que ela responde bem] · [o que ela NÃO cobre]

## Degrau 2 — guia de comunidade (produz **consenso**)
> Útil, não infalível. Ótimo para rota, ordem e dica prática; perigoso para número sem data.
- **[nome]** — [para quê] · **última atualização visível:** [data]

## Degrau 3 — fórum e discussão (produz **relato**)
> Serve sobretudo para uma pergunta: *isto ainda vale hoje?* Vira consenso só quando vários fios
> independentes concordam — **uma opinião isolada não vira fato aqui**.
- **[nome/comunidade]** — [o que costuma aparecer lá primeiro]

## Degrau 4 — ferramenta viva
> Lê o artefato atual em vez de descrever uma versão passada; por isso vale mais que texto antigo.
- **[nome]** — [o que ela calcula/mostra] · [como eu sei que está viva: conteúdo datado de ...]

## ⚠️ Cautela extra — fonte contaminada
> Conteúdo agregado ou gerado em série: frases genéricas, datas reaproveitadas, "revisado editorialmente"
> sem autor. **Só é citada quando bate com um degrau acima** — nunca sozinha.
- **[nome]** — [por que desconfio]

## Fora deste projeto
- [fonte descartada + o motivo — evita ser readotada daqui a três meses]
`},
    { name:"ARMADILHAS.md", cat:"essencial", role:"O que faz perder tempo ou fechar porta: a do artefato e a da fonte, separadas.",
      content:`# ARMADILHAS.md — O que o guia genérico não avisa

> **Casa única.** Rotas e mecânicas apontam para cá; não reexplicam.
> Duas espécies, e elas não se misturam: o **jogo** induzindo ao erro, e a **fonte** informando errado.

---

## 🎮 Armadilhas do artefato
> O jogo faz você concluir a coisa errada — interface, nomenclatura, dependência escondida.

### [Nome curto da armadilha]
- **O que parece:** [a conclusão natural e errada]
- **O que é:** [o fato, com fonte e, se volátil, \`[v. versão]\`]
- **Custo se cair:** [tempo perdido, recurso gasto, porta fechada]
- **Como não cair:** [o gesto concreto]

## 📰 Armadilhas da fonte
> A informação que você vai encontrar por aí está errada, velha ou fora de contexto.

### [Nome curto]
- **O que circula por aí:** [a afirmação comum]
- **Por que falha:** [mudou em tal versão / é de outra edição / é opinião apresentada como regra]
- **O que fazer em vez disso:** [conferir onde, com que fonte]

---

## Nota de tom
Quando você tropeçou porque ninguém avisou, o defeito é do guia, não seu — e fica registrado assim.
Armadilha que já custou algo real vai para o topo da lista; a hipotética fica embaixo.
`},
    { name:"mecanicas/INDICE.md", cat:"essencial", role:"Uma linha por sistema: o mapa de `mecanicas/`, e por onde começar depois de um patch.",
      content:`# mecanicas/INDICE.md — Mapa dos sistemas

> Uma linha por arquivo. **Referência**, não sequência: a ordem aqui é a de consulta, não a de jogo.
> Depois de uma atualização, este índice diz por onde começar — e a coluna de versão diz o que cheira a velho.

| Arquivo | O que cobre | Revisado na versão | Sensível a patch? |
|---|---|---|---|
| \`atributos.md\` | [o sistema de progressão do personagem] | [v. ...] | não |
| \`economia.md\` | [moeda, limites, o que é escasso] | [v. ...] | **sim** |
| \`[sistema].md\` | [...] | [v. ...] | [...] |

## Regra de granularidade
Um arquivo por **sistema que o próprio jogo trata como sistema** — tem menu, tela ou nome próprio.
- **Piso:** se não enche uma tela e não tem ritmo próprio de mudança, entra como seção do vizinho.
- **Teto:** quando duas partes do mesmo arquivo passam a ter versões de verificação muito diferentes, **racha ali**.
- Um arquivo por item individual (cada arma, cada carta) é fragmentação, não organização.
`},
    { name:"mecanicas/[sistema].md", cat:"essencial", role:"Como um sistema funciona de verdade, com carimbo só no que é volátil. Referência.",
      content:`# [Sistema] — como funciona de verdade

> **Referência estável.** Vale em qualquer fase do jogo; leia quando a dúvida aparecer.
> Revisado por inteiro na versão **[v. ...]**. Afirmação volátil leva o próprio carimbo.

---

## Em uma frase
[O que este sistema faz, sem jargão.]

## Como funciona
- [Regra estável — sem carimbo, porque não muda com balanceamento.]
- [Número/percentual/limite.] \`[v. ...]\` · **fonte:** [nome]
- [Afirmação em que as fontes divergem: registre a **faixa**.] \`[v. ...]\` · **não confirmado**

## O que é permanente e o que é da rodada
| Permanente (conta) | Da rodada (personagem/save) |
|---|---|
| [...] | [...] |

## Pega comum
[O erro que este sistema costuma induzir — uma linha, com ponteiro para \`ARMADILHAS.md\`.]

## A conferir no jogo
- [ ] [O que só se sabe abrindo a tela: onde olhar, e o que cada resultado significa.]

## Fontes
- [nome] — [o que ela sustenta aqui]
`},
    { name:"rotas/NN-[assunto].md", cat:"essencial", role:"Sequência: o que fazer, em que ordem, num trecho — aponta para `mecanicas/`, não reexplica.",
      content:`# [NN] — [Assunto da rota]

> **Sequência.** A ordem importa. Como os sistemas funcionam está em \`mecanicas/\` — aqui não se reexplica.
> Numerada por ordem de leitura, **sem data no nome**: a rota é atualizada no lugar, não é série histórica.
> Revisada na versão **[v. ...]**.

---

## Serve para
[Em que momento do jogo esta rota se aplica, e o que ela assume que você já fez.]

## Antes de começar
- [Pré-requisito real — item, nível, acesso.]
- [Armadilha que mora logo no começo → \`ARMADILHAS.md\`.]

## A sequência
1. **[Passo]** — [o que fazer.] [Por que agora, e não depois.]
2. **[Passo]** — [...] · sistema envolvido: \`mecanicas/[sistema].md\`
3. **[Passo]** — [...]

## Escolha que tranca nesta rota
> Se houver. Diga o ponto exato e mande para \`ESCOLHAS.md\` antes de o jogador chegar nele.
- [ponto] → [o que tranca] → [escopo] → [contorno, se existe]

## Como eu sei que terminei esta rota
[Condição observável no jogo — não "quando sentir que acabou".]
`},
    { name:"STATUS.md", cat:"rolante", role:"Eu agora: onde estou, pendências de confirmação, próximo passo. O ÚNICO que reinicia numa jogada nova.",
      content:`# STATUS.md — Onde eu estou

> **Rolante.** Só o agora. Item resolvido sai daqui.
> **É o único arquivo que reinicia numa jogada nova** — rota, mecânica e armadilha são do jogo, não da jogada.

---

## Agora
- **Versão do jogo em que joguei por último:** [v. ...] · **em:** [data]
- **Onde estou:** [fase/região/capítulo + o número que mede progresso]
- **Rodada ativa:** [qual personagem/save, se houver mais de um]

## Rodadas
| Rodada | Progresso | Para que serve | Escolha pendente |
|---|---|---|---|
| [nome] | [...] | [...] | [...] |

## Próximo passo
[Uma coisa, concreta, que dá para fazer na próxima sessão.]

## ⏳ Pendências de confirmação
> O que só se sabe jogando. Cada item traz **o teste**, não só a dúvida.
- [ ] [Pergunta] — **teste:** [onde olhar] · **o que cada resultado significa:** [...]

## ⚠️ Atenção no curto prazo
- [Escolha que tranca e está chegando · armadilha que vale relembrar antes da próxima sessão.]
`},
    { name:"ESCOLHAS.md", cat:"rolante", role:"As escolhas que fecharam portas no jogo: o porquê, o escopo, o que ficou de fora. Append-only.",
      content:`# ESCOLHAS.md — O que eu escolhi, e o que isso fechou

> **Append-only.** Uma entrada por escolha que tem custo de reversão. Entrada antiga não se reescreve;
> se mudou de ideia, entra uma nova dizendo o que a substitui.
> Aqui é escolha **dentro do jogo**. Discordância sobre a estrutura deste projeto vai para «Feedback para o Kit», no IDEAS.

---

## E-001 — [A escolha, em uma linha]
**Data:** [AAAA-MM-DD] · **Rodada:** [personagem/save] · **Versão:** [v. ...]

- **O que escolhi:** [...]
- **O que isso trancou:** [conteúdo, recompensa ou caminho que deixou de estar disponível]
- **Escopo:** [permanente na conta · só nesta rodada] — *é isto que decide se existe contorno*
- **Contorno conhecido:** [ex.: outra rodada consegue o lado oposto — com fonte] · ou **nenhum**
- **Por que escolhi assim:** [o trade-off, na sua voz]
- **Do que abri mão:** [o que a outra opção daria]
`},
    { name:"PATCHES.md", cat:"rolante", role:"O que mudou NO JOGO, quando, e o que isso invalidou aqui. Responde «o que mudou desde a última vez».",
      content:`# PATCHES.md — O que mudou no jogo, e o que caiu aqui

> Entradas novas no topo. Registra o **artefato**, não este projeto.
> É o que transforma «reler tudo» em «procurar carimbos anteriores a esta versão».

---

## [v. versão] — [data] · [nome da atualização]
**Fonte das notas:** [onde você leu]

**Mudou no jogo**
- [o que mudou, em uma linha por item]

**Invalidou aqui**
- \`mecanicas/[sistema].md\` — [qual afirmação caiu] → [ ] reconferida
- \`rotas/[NN]-[assunto].md\` — [qual passo mudou] → [ ] reconferida

**Não mexeu em nada nosso**
- [dito explicitamente quando for o caso: ausência de impacto também é informação]
`},
    { name:"GLOSSARY.md", cat:"essencial", role:"Jargão do jogo e da comunidade — uma linha por termo. A explicação completa mora em `mecanicas/`.",
      content:`# GLOSSARY.md — Jargão

> **Uma linha por termo.** Se precisou de parágrafo, o lugar é \`mecanicas/\`.
> Termo que a comunidade usa com sentido diferente do jogo entra com os dois sentidos.

---

## Do jogo
- **[Termo]** — [o que é, em uma linha.] Ver \`mecanicas/[sistema].md\`.

## Da comunidade
- **[Gíria]** — [o que querem dizer.] [Se o jogo chama de outra coisa, diga qual.]

## Deste projeto
- **[Termo que só existe aqui]** — [o que significa nestes documentos.]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log do dia. Referência fixa — nunca é substituído pelo log preenchido.",
      content:`# LOG-TEMPLATE.md — Formato do log do dia

> **Referência fixa.** Este arquivo é o MOLDE; o log do dia é outro arquivo (\`logs/AAAA-MM-DD.md\`).
> Preenche ao bater um gatilho de evento — conquista destravada, escolha que tranca, mecânica confirmada
> na prática, fim da sessão. Não espera "o fim": numa sessão longa o fim nunca chega.

---

# Log — AAAA-MM-DD

## Versão do jogo hoje
[v. ...] — [se a sessão pegou uma atualização no meio, diga]

## Objetivo de hoje
[O que eu pretendia fazer ao começar.]

## O que aconteceu
- [Progresso real: onde cheguei, o que fechou.]

## Confirmado na prática
- [Pendência do STATUS que virou fato — com o que eu vi na tela. Vira carimbo em \`mecanicas/\`.]
- [Afirmação do documento que se mostrou FALSA — o documento é que estava errado.]

## Escolhas
- [Escolha com custo de reversão → vira E-NNN em \`ESCOLHAS.md\`.]

## Tropeços
- [O que me custou tempo e ninguém avisou → candidato a \`ARMADILHAS.md\`.]

## Onde parei
[Estado exato + próximo passo óbvio. Alimenta o \`STATUS.md\`.]
`},
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: onde estou, pendências de confirmação, próximo passo", active:true },
    { key:"mecanicas", name:"mecanicas/[sistema].md", role:"completo, se uma mecânica foi verificada, corrigida ou descoberta", active:true },
    { key:"rotas", name:"rotas/NN-[assunto].md", role:"completo, se a sequência de um trecho mudou ou foi escrita", active:true },
    { key:"armadilhas", name:"ARMADILHAS.md", role:"completo, se algo custou tempo ou fechou porta sem aviso", active:true },
    { key:"patches", name:"PATCHES.md", role:"completo, se saiu atualização do jogo — com o que ela invalidou aqui", active:true },
    { key:"escolhas", name:"ESCOLHAS.md", role:"completo, se foi feita escolha com custo de reversão", active:false },
    { key:"fontes", name:"FONTES.md", role:"completo, se uma fonte foi adotada, rebaixada ou descartada", active:false },
    { key:"alvo", name:"ALVO.md", role:"completo, se o artefato mudou de versão, edição ou definição de pronto", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log do dia preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Montar o alvo (primeira conversa)", when:"Vou começar a acompanhar um jogo e preciso fixar versão, meta e fontes antes de qualquer guia.",
      fill:"target", fillLabel:"O jogo, a plataforma, o que você quer alcançar e como costuma jogar",
      body:(p,n)=>`Montagem do alvo.\n\nO QUE VOU ACOMPANHAR:\n${p.target||"[Jogo + plataforma + o que eu considero 'pronto' + como eu jogo]"}\n\nAntes de escrever qualquer rota:\n1. Pesquise e me diga a **versão/temporada atual** do jogo e onde eu confiro isso na tela.\n2. Levante o **ritmo de atualização** (quantas por ano, o que costumam mexer) — é o que decide o que vai levar carimbo.\n3. Monte o \`FONTES.md\` com os degraus: quase-canônico, guia de comunidade, fórum, ferramenta viva — e marque as que têm cara de conteúdo agregado/gerado.\n4. Diga se a minha definição de "pronto" bate com a oficial, e onde elas diferem.\n5. Liste o que você NÃO conseguiu confirmar, como pendência com o teste escrito.\n\nEntregue \`ALVO.md\` e \`FONTES.md\` completos. Ainda não escreva rota.`
    },
    { id:"H", title:"Escrever uma rota", when:"Quero a sequência do que fazer num trecho específico do jogo.",
      fill:"stretch", fillLabel:"O trecho (fase, região, objetivo) + onde eu estou agora",
      body:(p,n)=>`Rota nova.\n\nTRECHO:\n${p.stretch||"[O trecho do jogo + onde eu estou hoje]"}\n\nRegras desta rota:\n- **Sequência, não explicação.** Sistema que precisar de explicação vira (ou aponta para) arquivo em \`mecanicas/\`.\n- Cada passo diz **por que agora** e não depois.\n- Pré-requisito escondido vem ANTES do passo que depende dele — é o erro mais comum dos guias.\n- Se há escolha que tranca neste trecho, ela aparece antes do ponto de não retorno, com escopo e contorno.\n- Afirmação volátil leva \`[v. versão]\`; geografia e roteiro não levam.\n- Termine com a condição observável de "terminei esta rota".\n\nEntregue o arquivo de rota completo e diga quais arquivos de \`mecanicas/\` precisam existir para ele funcionar.`
    },
    { id:"I", title:"Explicar um sistema (mecânica)", when:"Não entendi como algo funciona, ou entendi errado e perdi tempo.",
      fill:"system", fillLabel:"O sistema + o que aconteceu quando você tentou usar",
      body:(p,n)=>`Mecânica.\n\nSISTEMA:\n${p.system||"[O sistema + o que eu tentei fazer e o que aconteceu]"}\n\nExplique como funciona de verdade:\n1. Separe o que é **estável** do que depende de balanceamento (só o segundo leva carimbo de versão).\n2. Diga o que é **permanente da conta** e o que é **da rodada** — é isso que decide se um erro é recuperável.\n3. Se as fontes divergirem num número, registre a **faixa** e abra pendência; não escolha um valor.\n4. Se o que eu descrevi indica que o jogo me induziu ao erro, registre como armadilha do artefato — e diga isso na cara.\n5. O que só se sabe abrindo a tela vira pendência **com o teste escrito**.\n\nEntregue o arquivo de \`mecanicas/\` completo e a linha correspondente do \`INDICE.md\`.`
    },
    { id:"J", title:"Chegou um patch — o que caiu?", when:"Saiu atualização do jogo e preciso saber o que do meu material envelheceu.",
      fill:"patch", fillLabel:"A versão/nome da atualização (ou só 'saiu patch, descubra qual')",
      body:(p,n)=>`Atualização do jogo.\n\nPATCH:\n${p.patch||"[Versão/nome da atualização, ou peça para descobrir qual é a mais recente]"}\n\nNão releia o acervo. Faça assim:\n1. Ache as **notas oficiais** e resuma só o que toca no que este projeto documenta.\n2. Varra os carimbos \`[v. ...]\` anteriores a esta versão e liste os arquivos e as afirmações afetadas.\n3. Para cada uma: **caiu**, **sobreviveu** ou **precisa de teste em jogo** (com o teste escrito).\n4. Se a atualização não mexeu em nada nosso, diga isso explicitamente — ausência de impacto é informação.\n\nEntregue \`PATCHES.md\` completo com a entrada nova, e só depois os arquivos que precisaram mudar.`
    },
    { id:"K", title:"Vou ter que escolher — o que fecha?", when:"Estou perto de uma decisão que parece irreversível e quero entender antes.",
      fill:"choice", fillLabel:"A escolha que está na minha frente + o que eu já fiz nesta rodada",
      body:(p,n)=>`Escolha que tranca.\n\nA DECISÃO:\n${p.choice||"[A escolha na minha frente + em que ponto da rodada eu estou]"}\n\nAntes de eu escolher:\n1. Confirme, **com fonte**, o que cada lado tranca de verdade — e o que só parece trancar.\n2. Diga o **escopo**: o que é permanente na conta e o que vale só para esta rodada.\n3. Se existe **contorno** (outra rodada, outro save, refazer depois), diga qual e o custo dele.\n4. Diga qual é o **ponto de não retorno** exato e o que dá para fazer dos dois lados antes dele.\n5. Recomende — com o trade-off explícito — mas a decisão é minha.\n\nSe eu já tiver escolhido, entregue \`ESCOLHAS.md\` completo com a entrada.`
    },
    { id:"L", title:"Voltei depois de meses", when:"Parei de jogar por um tempo e quero retomar sem reler tudo.",
      fill:"gap", fillLabel:"Quando você parou, onde estava, e o que lembra de ter deixado no meio",
      body:(p,n)=>`Retomada.\n\nO INTERVALO:\n${p.gap||"[Quando parei + onde estava + o que lembro de ter deixado pendente]"}\n\nMe recoloque em jogo:\n1. Compare a versão registrada no \`ALVO.md\` com a atual e liste as atualizações que passaram.\n2. Use os carimbos para dizer **o que do meu próprio material está velho** — arquivo por arquivo.\n3. Releia o \`STATUS.md\` e diga o que dele ainda vale e o que já não faz sentido.\n4. Me dê **uma** próxima ação concreta para a primeira sessão de volta — não um plano de dez passos.\n5. Relembre as armadilhas que ficaram no caminho imediato.\n\nEntregue \`PATCHES.md\` e \`STATUS.md\` completos.`
    },
  ]
};
