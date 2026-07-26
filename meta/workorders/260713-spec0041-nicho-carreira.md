# spec0041 — Nicho «Carreira» (18º nicho)

> **Base:** `meta/analises/260713-ANALISE-NICHO-CARREIRA.md` (entregue no mesmo ciclo — o Code só posiciona).
> **Raia:** Code. **Config sugerida:** Sonnet + esforço Alto. Windows: abrir pelo **PowerShell**.
> **Pré-requisito:** repo em `v1.66.0` (pós-spec0040, commit `8c0504a`), harness 17/17 · 41/41 · 0 erros.
> **Resultado esperado:** **18/18 nichos · 43/43 checagens · 0 erros.**
> **⚠️ Já validado:** o conteúdo do `career.js` e todas as âncoras abaixo foram **executados de verdade**
> (build + harness) numa cópia do repo antes desta spec ser escrita. `instr` do career = **6179/6900**.

---

## Tarefa A — criar `src/niches/career.js` (arquivo NOVO)

Crie o arquivo com **exatamente** este conteúdo:

```javascript
NICHES.career = {
  id:"career", label:"Carreira", icon:"🧭", group:"serif", category:"core",
  cardColor:"#84cc16", cardTags:["evidência","negociação","portfólio","decisão"],
  cardDesc:"Transforma o que você já fez em prova — e prova em decisão de carreira",
  intro:{
    headline:"O que você já fez, com prova. E a decisão, com o contra-argumento na mesa.",
    lede:"O risco aqui é duplo: chegar na negociação sem registro (o escopo cresceu, ninguém anotou, a memória entrega três linhas genéricas) e chegar na entrevista com um currículo que afirma o que não pode provar. Aqui cada fato entra datado e com prova, cada faixa salarial vem pesquisada com fonte, e nenhuma decisão irreversível sai sem o melhor argumento contrário.",
    ctxBlurb:"<code>EVIDENCIAS.md</code> guarda fato+prova · <code>DOSSIE.md</code> consolida competência com lastro · <code>SITUACAO.md</code> mantém contratado × real · <code>DECISIONS.md</code> registra o porquê (e o contraponto).",
    hero:"career"
  },
  topbar:[
    { id:"project", label:"Projeto", placeholder:"ex: carreira-alex" },
    { id:"momentSel", label:"Momento", type:"select",
      options:["Empregado querendo mudar","Buscando a primeira vaga na área","Negociando na atual","Transição de área","Autônomo/CNPJ","Acumulando evidência"] },
    { id:"frentes", label:"Frentes ativas", type:"multi", panel:"modal",
      options:["Aumento/revisão de cargo","Nova vaga","Portfólio/vitrine","Estudo","Renda própria","Reorganizar o trabalho atual"] },
    { id:"langSel", label:"Idioma do output", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["evidence_first","Evidência antes de adjetivo","Nada entra em currículo, portfólio, LinkedIn ou pitch sem fato datado e prova registrada em EVIDENCIAS.md. Adjetivo («proativo», «domínio de X», «sênior») é derivado de fato, nunca afirmado por conta própria. Se falta lastro, diz que falta e sugere como produzi-lo — não preenche o vazio com estilo. Número só aparece quando existe: inventar métrica de entrega é o mesmo erro que inventar experiência."],
    ["scope_ledger","Livro-razão do escopo","Mantém em SITUACAO.md o cargo contratado × o escopo real, em linha do tempo, com data, quem pediu e a prova. Todo acréscimo de função é registrado no dia em que acontece — é o dado que a memória perde e que a negociação exige. Se o novo pedido cruza uma fronteira declarada pelo usuário, avisa ANTES de ele aceitar por inércia."],
    ["benchmark_sourced","Número com fonte, ou não é número","Faixa salarial, piso, valor de mercado e comparação de cargo são pesquisados (região, senioridade, modalidade, data) e citados com fonte. Nunca chutados. Sem fonte, rotula como estimativa e dá a faixa. Vale também para a conta do «quanto meu trabalho vale»: mostra a conta, não só a conclusão."],
    ["counterargue_before_irreversible","Contraponto antes do irreversível","Antes de ato que não se desfaz — pedir aumento, pedir revisão de cargo, revelar autoria de um sistema, recusar tarefa, pedir demissão, publicar material da empresa — entrega o MELHOR argumento contrário (não uma versão fraca), o cenário adverso, o timing (o estado da empresa muda a conversa) e o custo de oportunidade. Depois disso, recomenda: não fica em cima do muro."],
    ["mine_projects","Minerar os projetos em evidência","Ao receber os meta/ (ou o repo) de outro projeto, varre em busca de evidência: o que foi construído, o problema que resolvia, a decisão difícil, o número real (versão, cobertura, tamanho, tempo), o papel exercido. Converte em fato → competência demonstrada → como provar numa entrevista, e escreve em EVIDENCIAS.md. Projeto pequeno gera evidência pequena: nunca infla."],
    ["vent_is_not_fact","Desabafo é sinal, não é fato","Desabafo é bem-vindo e útil (revela fronteiras, valores e o que drena) — vai para o log/SITUACAO marcado como sinal, e nunca vira fato no dossiê nem premissa de decisão sem checagem. Sem bajulação e sem dramatização. Quando a conversa vira sofrimento, diz isso com franqueza e sugere apoio humano. Quando vira questão jurídica (propriedade do que você construiu, contrato, CNPJ, rescisão), organiza os fatos e recomenda advogado — sem dar parecer."],
  ],
  builderSection:{
    title:"Enquadramento profissional",
    hint:"Define alvo, limites e instrumentos. Entra nas instruções.",
    items:[
      { kind:"radios", label:"Área-alvo", name:"target", opts:[
        ["dev","Desenvolvimento"], ["data","Dados/BI"], ["product","Produto"], ["design","Design"], ["ops","Infra/Suporte"], ["admin","Administrativo/Ops"], ["other","Outra"] ] },
      { kind:"radios", label:"Modalidade aceita", name:"modality", opts:[
        ["onsite","Presencial"], ["hybrid","Híbrido"], ["remote","Remoto"], ["any","Indiferente"] ] },
      { kind:"chips", label:"Instrumentos a manter", name:"assets", opts:[
        ["cv","Currículo"], ["linkedin","LinkedIn"], ["github","GitHub"], ["portfolio","Portfólio/site"], ["pitch","Pitch/apresentação"], ["letter","Carta"] ] },
      { kind:"chips", label:"Fronteiras (o que você NÃO quer)", name:"limits", opts:[
        ["clients","Atendimento a cliente"], ["oncall","Plantão/escala"], ["travel","Viagem"], ["people","Gestão de pessoas"], ["sales","Vendas"], ["onsitefix","Presencial fixo"] ] },
    ]
  },
  conventions:[
    "Nada entra em currículo/portfólio/pitch sem fato datado e prova em EVIDENCIAS.md; adjetivo é derivado, nunca afirmado.",
    "Escopo real é registrado no dia em que muda (data, quem pediu, prova); cruzar fronteira declarada gera aviso antes do aceite.",
    "Faixa salarial e dado de mercado vêm pesquisados com fonte e data; sem fonte, é estimativa rotulada com faixa.",
    "Ato irreversível só depois do melhor contra-argumento, do cenário adverso, do timing e do custo de oportunidade.",
    "meta/ de outro projeto vira evidência por mineração (fato → competência → como provar); projeto pequeno, evidência pequena.",
    "Desabafo é sinal marcado, não fato. Questão jurídica ou de saúde: organiza os fatos e aponta o profissional — sem dar parecer.",
    "Projeto pessoal e sensível: versiona local ou em repositório PRIVADO; nunca publica dados de salário, terceiros ou da empresa.",
  ],
  triggersExtra:[
    ["Entrega concluída (trabalho ou projeto)", "Entrada nova em EVIDENCIAS.md no mesmo dia (fato + prova + competência)."],
    ["Escopo cresceu / nova função pedida", "Linha na linha do tempo de SITUACAO.md + aviso se cruzou fronteira declarada."],
    ["Conversa com superior sobre cargo/salário/promessa", "Registro datado em SITUACAO.md (o que foi dito, por quem, sob que condição)."],
    ["Pesquisa de faixa ou de vaga", "Entrega MERCADO.md com fonte e data — número sem fonte não entra."],
    ["Decisão de carreira tomada", "Entrega DECISIONS.md completo (premissas, alternativas, contra-argumento, risco aceito)."],
    ["meta/ de outro projeto entregue", "Rodada de mineração → EVIDENCIAS.md + DOSSIE.md atualizados."],
    ["Candidatura enviada ou respondida", "Atualiza o pipeline em MERCADO.md (estágio, resultado, aprendizado)."],
    ["Currículo/pitch pedido", "Checa o lastro antes de escrever; entrega o artefato + registra a versão em MERCADO.md."],
  ],
  contextFiles:[
    { name:"CONTEXT.md", cat:"essencial", role:"Quem sou: formação, histórico, restrições reais, o que busco. O pano de fundo. Estável.",
      content:`# CONTEXT.md — [Seu nome / projeto de carreira]

> Arquivo **estável**. O assistente lê primeiro para saber com quem está falando.
> Muda pouco: só em mudança real de emprego, formação ou objetivo.

---

## Quem sou (fatos, não marketing)
[Formação, quando, onde. Tempo de experiência real. O que você faz hoje, em 2-3 frases secas.]

## Trajetória (linha do tempo curta)
| Período | Onde | Papel | O que ficou (competência/evidência) |
|---|---|---|---|
| [AAAA-MM → hoje] | [empresa] | [cargo] | [o que essa fase te deu — link para EVIDENCIAS] |

## O que busco
- **Objetivo de 12 meses:** [concreto. "Ganhar mais" não é objetivo; "sair da zona administrativa para uma vaga júnior de dados até dez/2026" é.]
- **Objetivo de 3 anos:** [direção, não fantasia.]

## Restrições reais
- **Financeira:** [salário atual, o mínimo que dá para aceitar, quanto tempo você aguenta sem renda.]
- **Geografia/mobilidade:** [cidade, disposição a mudar, remoto.]
- **Tempo:** [horas/semana livres de verdade para estudo e projetos.]
- **Fronteiras:** [o que você NÃO aceita fazer. Escreva agora, com a cabeça fria — é o que o assistente usará para te avisar quando o escopo tentar cruzar a linha.]

## Como eu trabalho
[Do que você gosta, o que te drena, onde você rende. Fato observado, não autoimagem.]
`
    },
    { name:"EVIDENCIAS.md", cat:"essencial", role:"O coração. Append-only: fato datado + prova + competência que demonstra. Cresce sempre.",
      content:`# EVIDENCIAS.md — o que eu já fiz, com prova

> **Append-only.** Nunca reescreva o arquivo: só acrescente ao topo da lista.
> **Regra:** só entra o que tem **data** e **prova**. Sem prova, é opinião — vai para o log, não para cá.
> Este arquivo é a fonte de tudo: currículo, portfólio, pitch e negociação **derivam** daqui.

## Como registrar
Uma entrada por fato. Formato:

### EV-001 · [AAAA-MM-DD] · [Título curto do fato]
- **O que foi:** [o que você fez, em uma frase concreta.]
- **Problema que resolvia:** [qual dor existia antes — é isto que dá valor ao fato.]
- **Como resolvi:** [o essencial: abordagem, decisão difícil, o que foi descartado.]
- **Número (se houver):** [tempo economizado, itens processados, versão, cobertura de teste. Só se for real.]
- **Prova:** [link/commit/arquivo/print/quem pode confirmar. Sem prova, não entra.]
- **Competência que demonstra:** [ex: automação, modelagem de dados, gestão de escopo.]
- **Onde usar:** [currículo · entrevista · negociação · portfólio.]

---

## Registros

### EV-001 · [data] · [fato]
- **O que foi:**
- **Problema que resolvia:**
- **Como resolvi:**
- **Número:**
- **Prova:**
- **Competência que demonstra:**
- **Onde usar:**
`
    },
    { name:"DOSSIE.md", cat:"essencial", role:"Retrato consolidado, DERIVADO das evidências: competência com nível e lastro. Rolante.",
      content:`# DOSSIE.md — o retrato consolidado

> **Derivado.** Toda linha aqui aponta para uma evidência (EV-xxx). Se não aponta, **não pode ficar**.
> Arquivo **rolante**: é reescrito quando o retrato muda — mas nunca inventa o que não está em EVIDENCIAS.

---

## Resumo em 3 frases
[O que você é hoje, profissionalmente, sem adjetivo não lastreado.]

## Competências (com nível e prova)
| Competência | Nível | Lastro (EV) | Como eu provo numa entrevista |
|---|---|---|---|
| [ex: automação de processos] | [básico/intermediário/sólido] | EV-003, EV-011 | [o que eu mostro/conto em 2 min] |

> **Nível** é honesto, não aspiracional: «sólido» significa que você já entregou em condição real.

## O que ainda NÃO tem prova
> A lista mais útil do arquivo — vira insumo do ESTUDO e dos próximos projetos.
- [competência que o mercado pede e você ainda não demonstrou.]

## Como eu trabalho (padrões observados)
- [padrão real que as evidências revelam — ex: "resolve por automação antes de aceitar processo manual".]

## Fronteiras (o que eu não quero)
- [copiado do CONTEXT; o assistente usa para avisar quando o escopo tenta cruzar.]
`
    },
    { name:"SITUACAO.md", cat:"essencial", role:"Emprego atual: contratado × real, linha do tempo do escopo, remuneração, sinais. Cresce.",
      content:`# SITUACAO.md — o emprego atual

> Aqui mora o dado que a negociação exige e a memória perde: **o que foi combinado × o que você faz**.
> A linha do tempo é **append**: nunca apague uma linha; corrija com uma linha nova.

---

## O combinado (na contratação)
- **Cargo:** [título formal.]
- **Escopo prometido:** [o que foi dito que você faria. Com data.]
- **Remuneração:** [salário + benefícios + descontos. Data da última revisão: ____.]
- **Jornada:** [horas/semana.]

## O real (hoje)
- **Escopo efetivo:** [tudo que você faz de fato, listado.]
- **Delta:** [o que existe no real e não existia no combinado. É este delta que sustenta a conversa de cargo/salário.]

## Linha do tempo do escopo (append)
| Data | O que mudou | Quem pediu | Prova | Cruzou fronteira? |
|---|---|---|---|---|
| [AAAA-MM-DD] | [nova função assumida] | [quem] | [e-mail/tarefa/entrega] | [sim/não — qual] |

## Conversas e promessas (append)
| Data | Com quem | O que foi dito | Condicionante | Cumprido? |
|---|---|---|---|---|

## Sinais da empresa
> Fatos observáveis que mudam o **timing** de qualquer pedido (caixa, saídas, prioridade).
- [AAAA-MM-DD] [sinal + o que ele sugere. Marque o que é interpretação sua.]

## Desabafos (sinal, não fato)
- [AAAA-MM-DD] [o que te irritou/drenou. Fica aqui como sinal — nunca vira premissa de decisão sem checagem.]
`
    },
    { name:"MERCADO.md", cat:"recomendado", role:"Vagas-alvo, requisitos recorrentes, faixas COM FONTE, e o pipeline de candidaturas. Cresce.",
      content:`# MERCADO.md — o que o mercado pede e paga

> **Regra dura:** número sem fonte não entra. Toda faixa vem com **fonte + data + região + senioridade**.
> Quando não há fonte, escreva «estimativa» e dê a faixa — nunca um valor seco.

---

## Vagas-alvo
| Cargo | Senioridade | Modalidade | Região | Por que serve |
|---|---|---|---|---|

## Requisitos que se repetem
> Extraídos de vagas reais. Ordene por frequência — é o que vira ESTUDO.
| Requisito | Frequência | Tenho prova? (DOSSIE) | Lacuna |
|---|---|---|---|

## Faixas pesquisadas
| Cargo / senioridade | Região | Faixa | Fonte | Data |
|---|---|---|---|---|
> [Ex: fonte = pesquisa salarial X, vaga pública Y, sindicato/piso Z. "Ouvi dizer" não é fonte.]

## Pipeline de candidaturas
| Vaga | Empresa | Data | Estágio | Resultado | O que aprendi |
|---|---|---|---|---|---|

## Versões de artefato enviadas
| Artefato | Versão | Enviado para | Data |
|---|---|---|---|
`
    },
    { name:"PLANO.md", cat:"recomendado", role:"Fases com GATILHO explícito: «quando X, faço Y». O critério antes da emoção. Rolante.",
      content:`# PLANO.md — o que fazer, e quando

> O plano existe para você decidir **com a cabeça fria hoje** o que vai fazer **no dia quente**.
> Toda fase tem **gatilho** (o que a dispara) e **critério de saída** (como sei que acabou).

---

## Agora (0-30 dias)
- **Objetivo da fase:** [um só.]
- **Ações:** [3 no máximo.]
- **Gatilho para a próxima fase:** [«quando X acontecer, passo para a fase seguinte».]

## Próximo (1-3 meses)
- **Objetivo:** …
- **Depende de:** [o que da fase anterior precisa estar pronto.]

## Depois (3-12 meses)
- **Objetivo:** …

## Gatilhos de decisão (defina agora, execute depois)
| Se acontecer… | Eu faço… | Por quê |
|---|---|---|
| [ex: me pedirem a 4ª função nova sem revisão] | [levo o delta do SITUACAO para a conversa] | [o delta já está documentado] |
| [ex: a empresa atrasar salário] | [ativo a busca ativa] | [risco de caixa é sinal, não boato] |

## O que eu deliberadamente NÃO vou fazer
- [foco é dizer não. Escreva o que fica de fora e por quê.]
`
    },
    { name:"ESTUDO.md", cat:"recomendado", role:"Trilha derivada da lacuna MERCADO × DOSSIE. Estudo por lacuna, não por curiosidade. Rolante.",
      content:`# ESTUDO.md — a trilha (por lacuna, não por curiosidade)

> Só entra aqui o que fecha uma **lacuna real**: o mercado pede (MERCADO.md) e você não tem prova (DOSSIE.md).
> Estudo sem entrega não vira evidência — cada item tem um **artefato de saída**.

---

## Lacunas priorizadas
| Lacuna | Frequência no mercado | Custo de aprender | Prioridade |
|---|---|---|---|

## Trilha ativa
### [Tema] — [por que: lacuna X]
- **Fonte:** [curso/livro/doc — uma só, não cinco.]
- **Artefato de saída:** [o que você vai TER ao terminar: dashboard, script, projeto. É isto que vira EV-xxx.]
- **Prazo:** [data.]
- **Estado:** [não começado / em curso / entregue → EV-xxx]

## Concluídos (viraram evidência)
| Tema | Artefato | EV |
|---|---|---|
`
    },
    { name:"DECISIONS.md", cat:"essencial", role:"Decisões de carreira com premissas, alternativas, contra-argumento e risco aceito. Cresce devagar.",
      content:`# DECISIONS.md — as decisões (e o porquê)

> Append-only. Uma decisão por bloco. **Nenhuma decisão irreversível entra aqui sem o contra-argumento
> que ela teve que vencer** — é isso que te protege de decidir por emoção e chamar de estratégia.

---

## DEC-001 — [Título da decisão]
- **Data:** [AAAA-MM-DD]
- **Contexto:** [o que estava em jogo.]
- **Decisão:** [o que foi decidido, em uma frase.]
- **Premissas:** [em que isto se apoia. Marque a frágil.]
- **Alternativas descartadas:** [e por quê.]
- **Melhor contra-argumento:** [o argumento mais forte CONTRA esta decisão — e por que decidi assim mesmo.]
- **O que precisaria ser verdade para estar errada:** […]
- **Risco aceito:** [o downside que você aceitou correr.]
- **Sinal de revisão:** [o que, se acontecer, me faz reabrir esta decisão.]
`
    },
    { name:"STATUS.md", cat:"rolante", role:"O agora: frente ativa, próximo passo, o que está pendente de decisão. Rolante.",
      content:`# STATUS.md — onde eu estou agora

> Rolante: só o agora. Item resolvido sai daqui (o registro fica em DECISIONS/EVIDENCIAS).

## Momento
[Uma frase: emprego, frente ativa, o que está em jogo neste mês.]

## Frentes ativas
- [ ] [frente + próximo passo concreto]

## Pendente de decisão
- [ ] [a decisão que está esperando informação — e QUAL informação falta.]

## Próximo passo (um só)
[O que fazer na próxima sessão.]
`
    },
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# logs/AAAA-MM-DD.md — log de sessão

## O que aconteceu
[Fatos do dia: entregas, pedidos, conversas.]

## Evidência gerada?
- [ ] Sim → EV-xxx criado em EVIDENCIAS.md
- [ ] Não

## Escopo mudou?
- [ ] Sim → linha nova em SITUACAO.md (cruzou fronteira? qual?)
- [ ] Não

## Sinais (inclui desabafo)
[O que te drenou, o que te animou, o que a empresa sinalizou. **Sinal, não fato.**]

## Próximo passo
[Um.]
`
    },
  ],
  outputs:[
    { key:"evidencias", name:"EVIDENCIAS.md", role:"entrada nova (append), se houve fato com prova", active:true },
    { key:"situacao", name:"SITUACAO.md", role:"completo, se o escopo, a remuneração ou uma conversa mudaram algo", active:true },
    { key:"status", name:"STATUS.md", role:"completo: frente ativa, pendências, próximo passo", active:true },
    { key:"decisoes", name:"DECISIONS.md", role:"completo, se houve decisão (com contra-argumento e risco)", active:true },
    { key:"dossie", name:"DOSSIE.md", role:"completo, se o retrato mudou (só com lastro em EVIDENCIAS)", active:false },
    { key:"mercado", name:"MERCADO.md", role:"completo, se houve pesquisa de faixa/vaga ou movimento no pipeline", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Minerar um projeto em evidência", when:"Quero transformar um projeto meu (os meta/, o repo) em prova de competência.",
      fill:"projectdump", fillLabel:"Cole os meta/ do projeto (CONTEXT, STATUS, DECISIONS, CHANGELOG) ou descreva-o",
      body:(p,n)=>`Mineração de projeto → evidência.\n\nPROJETO:\n${p.projectdump||"[Cole aqui os meta/ do projeto (CONTEXT, STATUS, DECISIONS, CHANGELOG) ou descreva o que ele é e o que você fez nele]"}\n\nLeia como quem procura PROVA, não elogio:\n- O que foi realmente construído (escopo, tamanho, tempo, versões)\n- O problema real que isso resolvia — e para quem\n- As decisões difíceis e o que foi descartado (é aqui que mora a senioridade)\n- Os números REAIS que existem (cobertura, itens, tempo economizado). Se não existe número, não invente\n- O papel que EU exerci de fato (não o que o projeto fez)\n\nEntregue entradas EV-xxx completas para EVIDENCIAS.md (fato · problema · como · número · prova · competência · onde usar) e diga, honestamente, o que aqui é evidência FORTE e o que é fraca. Projeto pequeno gera evidência pequena — não infle.`
    },
    { id:"H", title:"Radiografia do escopo (contratado × real)",
      when:"Quero ver, com data e prova, o quanto meu trabalho cresceu além do combinado.",
      fill:"scope", fillLabel:"O que foi combinado + o que você faz hoje (e desde quando)",
      body:(p,n)=>`Radiografia do escopo.\n\nDADOS:\n${p.scope||"[O que foi combinado na contratação + tudo que você faz hoje + desde quando cada coisa entrou]"}\n\nConsultando SITUACAO.md e CONTEXT.md (fronteiras):\n- Monte a tabela CONTRATADO × REAL e isole o DELTA (o que existe hoje e não existia no combinado)\n- Datar cada acréscimo; onde faltar data ou prova, PERGUNTE — não preencha por dedução\n- Marque quais acréscimos cruzaram uma fronteira que eu declarei\n- Classifique o delta: (a) natural do cargo, (b) acúmulo de outro cargo, (c) função de outro nível\n- Diga o que, deste delta, é ARGUMENTO de negociação e o que não é\n\nEntregue SITUACAO.md completo, com a linha do tempo. Sem número de salário inventado: se a comparação de mercado for necessária, use o prompt de faixa (pesquisa com fonte).`
    },
    { id:"I", title:"Faixa de mercado (com fonte)",
      when:"Preciso saber o que o mercado paga por isto — de verdade, com fonte.",
      fill:"role", fillLabel:"Cargo + região + senioridade + o que você faz de fato",
      body:(p,n)=>`Pesquisa de faixa de mercado.\n\nALVO:\n${p.role||"[Cargo + região + senioridade + o escopo real que você exerce]"}\n\nPesquise antes de responder (não responda de memória):\n- Faixas para o cargo FORMAL e para o cargo que o ESCOPO REAL descreve (podem ser dois cargos diferentes — este é o ponto)\n- Cada faixa com FONTE, DATA, região e senioridade. Sem fonte → rotule «estimativa» e dê a faixa\n- Piso/sindicato/convenção, se aplicável\n- O que explica a variação (porte da empresa, setor, presencial × remoto)\n\nEntregue MERCADO.md completo. Termine dizendo, com honestidade: onde eu estou nesta faixa hoje, e qual é a evidência (DOSSIE/EVIDENCIAS) que sustentaria pedir mais — e qual falta.`
    },
    { id:"J", title:"Preparar uma conversa difícil (aumento, cargo, recusa)",
      when:"Vou pedir aumento/revisão de cargo, ou recusar um acréscimo de escopo.",
      fill:"ask", fillLabel:"O que você vai pedir (ou recusar), para quem, e quando pretende falar",
      body:(p,n)=>`Preparação de conversa difícil.\n\nO PEDIDO:\n${p.ask||"[O que vou pedir ou recusar · para quem · quando pretendo falar]"}\n\nEste é um ato IRREVERSÍVEL: prepare-o como tal, usando SITUACAO (delta), EVIDENCIAS (prova), MERCADO (faixa com fonte) e CONTEXT (restrições e fronteiras):\n- O argumento em 3 frases, ancorado em FATO datado — não em esforço nem em sentimento\n- As 3 evidências mais fortes (e por que estas)\n- O melhor CONTRA-ARGUMENTO da outra parte (a versão forte, não a fraca) e a resposta a cada um\n- O TIMING: o que os sinais da empresa dizem sobre falar agora × esperar; o que muda se eu esperar\n- O que eu aceito como resultado mínimo, e o que eu faço se a resposta for não (isso decide ANTES da conversa)\n- O risco: o que esta conversa pode custar, e a probabilidade\n\nEntregue o roteiro + a decisão registrada em DECISIONS.md (com o contra-argumento vencido). Se a evidência não sustenta o pedido, DIGA — é mais útil que me encorajar.`
    },
    { id:"K", title:"Currículo / pitch com lastro",
      when:"Preciso gerar ou revisar currículo, LinkedIn ou portfólio.",
      fill:"artifact", fillLabel:"Qual artefato + para qual vaga/público (cole a vaga, se houver)",
      body:(p,n)=>`Artefato de apresentação, com lastro.\n\nALVO:\n${p.artifact||"[Currículo / LinkedIn / portfólio / pitch — e para qual vaga ou público. Cole a vaga se tiver]"}\n\nRegra inegociável: **nada entra sem lastro em EVIDENCIAS.md**.\n- Selecione as evidências que servem A ESTE alvo (não todas)\n- Escreva cada linha como fato + resultado; número só se ele existir de verdade\n- Aponte, explicitamente, o que a vaga pede e eu NÃO consigo sustentar — e o que dá para sustentar parcialmente (e como dizer isso sem mentir)\n- Adapte a linguagem ao público, sem inflar o conteúdo\n\nEntregue o artefato pronto + a lista do que ficou de fora por falta de prova (isso vira ESTUDO/próximo projeto) + registro da versão em MERCADO.md.`
    },
    { id:"L", title:"Decidir (ficar, sair, aceitar, recusar)",
      when:"Tenho uma decisão de carreira na mesa e não quero decidir no impulso.",
      fill:"decision", fillLabel:"A decisão + as opções + o prazo",
      body:(p,n)=>`Decisão de carreira.\n\nDECISÃO:\n${p.decision||"[A decisão + as opções na mesa + o prazo real]"}\n\nDecida comigo sem me bajular, consultando CONTEXT (restrições/fronteiras), SITUACAO, MERCADO e DECISIONS (alguma decisão anterior restringe esta?):\n- Reformule a decisão REAL (frequentemente não é a que eu enunciei)\n- Separe o que é FATO do que é sinal/desabafo — e diga qual é qual\n- Para cada opção: o que ganho, o que perco, o custo de oportunidade, o ponto sem volta\n- O cenário adverso de cada opção e a probabilidade (não só o upside)\n- O melhor contra-argumento à opção que parece vencer\n- Se a questão for jurídica (propriedade do que eu construí, contrato, CNPJ, rescisão): organize os fatos e diga que isso é conversa de advogado — não dê parecer\n- Recomende, com a confiança proporcional à evidência\n\nEntregue DECISIONS.md completo, com o sinal que dirá se acertamos.`
    },
  ],
};
```

---

## Tarefa B — `build-manifest.json`

Insira o módulo **logo depois** do `business`:

**Âncora (achar):**
```json
    {
      "marker": "//__KCU_NICHE:business__//",
      "file": "src/niches/business.js"
    },
```
**Substituir por:**
```json
    {
      "marker": "//__KCU_NICHE:business__//",
      "file": "src/niches/business.js"
    },
    {
      "marker": "//__KCU_NICHE:career__//",
      "file": "src/niches/career.js"
    },
```

---

## Tarefa C — `src/index.template.html` (6 edições por âncora)

### C1 — marcador do módulo (o nicho entra depois de business, antes de game)
**Âncora:**
```
/* ---------- GAME (Game Design) ---------- */
//__KCU_NICHE:game__//
```
**Substituir por:**
```
/* ---------- CARREIRA (Carreira & Trabalho) ---------- */
//__KCU_NICHE:career__//

/* ---------- GAME (Game Design) ---------- */
//__KCU_NICHE:game__//
```

### C2 — CSS do hero (inserir **antes** do bloco do game)
**Âncora (as duas primeiras linhas do bloco Game):**
```css
  /* Game Design: HUD */
  .hero-game{
```
**Substituir por:**
```css
  /* Carreira: dossie/evidencia */
  .hero-career{display:grid;grid-template-columns:1.35fr 1fr;gap:16px;align-items:stretch}
  .hero-career .ev{background:var(--panel);border:1px solid var(--line-soft);border-radius:12px;padding:16px 18px}
  .hero-career .ev h4{margin:0 0 12px;font-family:var(--mono);font-size:10.5px;letter-spacing:.8px;text-transform:uppercase;color:var(--ink-faint)}
  .hero-career .ev .row{display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-top:1px dashed var(--line)}
  .hero-career .ev .row:first-of-type{border-top:0}
  .hero-career .ev .row .tag{font-family:var(--mono);font-size:10px;color:var(--amber);background:rgba(0,0,0,.25);border-radius:5px;padding:2px 6px;white-space:nowrap}
  .hero-career .ev .row .txt{font-size:12.5px;color:var(--ink-dim);line-height:1.5}
  .hero-career .ev .row .txt b{color:var(--ink);font-weight:600}
  .hero-career .side{background:var(--panel2);border:1px solid var(--line-soft);border-radius:12px;padding:16px 18px;display:flex;flex-direction:column;gap:10px}
  .hero-career .side .lbl{font-family:var(--mono);font-size:10px;letter-spacing:.8px;text-transform:uppercase;color:var(--ink-faint)}
  .hero-career .side .big{font-family:var(--disp);font-size:26px;font-weight:600;color:var(--ink);line-height:1.15}
  .hero-career .side .delta{font-size:12.5px;color:var(--ink-dim);line-height:1.5}
  .hero-career .side .stamp{margin-top:auto;font-family:var(--mono);font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:var(--green);border-top:1px dashed var(--line);padding-top:8px}

  /* Game Design: HUD */
  .hero-game{
```

### C3 — `heroHTML()` (inserir o case **antes** do `case "game"`)
**Âncora:**
```javascript
    case "game": return `
      <div class="row1">
```
**Substituir por:**
```javascript
    case "career": return `
      <div class="ev">
        <h4>EVIDENCIAS.md · append-only</h4>
        <div class="row"><span class="tag">EV-014</span><span class="txt"><b>Catálogo digital publicado</b> — substituiu a busca manual por SKU. Prova: repo + painel.</span></div>
        <div class="row"><span class="tag">EV-013</span><span class="txt"><b>Conferência pedido × fornecedor</b> — função assumida em 2026-05-12. Prova: e-mail da diretoria.</span></div>
        <div class="row"><span class="tag">EV-012</span><span class="txt"><b>Gerador de cartazes em massa</b> — de 3h para 20min por campanha.</span></div>
      </div>
      <div class="side">
        <span class="lbl">Contratado × real</span>
        <span class="big">+4 funções</span>
        <span class="delta">assumidas desde a contratação, sem revisão de cargo ou salário — todas datadas e com prova.</span>
        <span class="stamp">faixa: pesquisada, com fonte</span>
      </div>`;
    case "game": return `
      <div class="row1">
```

### C4 — `NICHE_CODE` (código do HUB)
**Âncora:**
```javascript
  music:"SOM", rpg:"RPG", cuisine:"COZ", animation:"ANIM", comics:"HQ", custom:"AREA" };
```
**Substituir por:**
```javascript
  music:"SOM", rpg:"RPG", cuisine:"COZ", animation:"ANIM", comics:"HQ", career:"CARR", custom:"AREA" };
```

### C5 — comentário do dicionário
**Âncora:** `NICHES — dicionário completo dos 17 nichos`
**Substituir por:** `NICHES — dicionário completo dos 18 nichos`

### C6 — responsivo (o hero empilha junto com os outros de grade)
**Âncora:**
```css
    .hero-marketing,.hero-business,.hero-client{grid-template-columns:1fr 1fr}
```
**Substituir por:**
```css
    .hero-marketing,.hero-business,.hero-client{grid-template-columns:1fr 1fr}
    .hero-career{grid-template-columns:1fr}
```
> (Só a **primeira** ocorrência — a do breakpoint maior. A segunda ocorrência, no breakpoint
> menor, já usa `1fr` e não precisa de mudança.)

---

## Tarefa D — `validate.js` (4 edições + o novo check)

### D1 — regra de ouro (comentário)
`// REGRA DE OURO: 17/17 nichos, 0 erros.` → `// REGRA DE OURO: 18/18 nichos, 0 erros.`

### D2 — G1
**Âncora:**
```javascript
check("G1 shim/__T populado, 14 chaves, 17 nichos", () => {
  assert(T && Object.keys(T).length >= 12, "poucas chaves no shim");
  assert(ids.length === 17, "esperado 17 nichos, achou " + ids.length);
```
**Substituir por:**
```javascript
check("G1 shim/__T populado, 14 chaves, 18 nichos", () => {
  assert(T && Object.keys(T).length >= 12, "poucas chaves no shim");
  assert(ids.length === 18, "esperado 18 nichos, achou " + ids.length);
```

### D3 — cabeçalho da seção
`// ============ POR NICHO (17) ============` → `// ============ POR NICHO (18) ============`

### D4 — novo check **G15** (inserir **antes** do sumário)
**Âncora:**
```javascript
// ============ SUMARIO ============
```
**Substituir por:**
```javascript
check("G15 nicho career: campos chegam a saida, behaviors-chave e arquivos do dossie", () => {
  const c = T.NICHES.career;
  assert(c, "nicho career ausente");
  const n = T.normNiche(c);
  const keys = (n.behaviors||[]).map(b => b.id || b[0]);
  ["evidence_first","scope_ledger","benchmark_sourced","counterargue_before_irreversible","mine_projects","vent_is_not_fact"]
    .forEach(k => assert(keys.includes(k), "behavior ausente no career: " + k));
  const files = T.effectiveFiles(n).map(f => f.name);
  ["EVIDENCIAS.md","DOSSIE.md","SITUACAO.md","MERCADO.md","PLANO.md","DECISIONS.md"]
    .forEach(f => assert(files.includes(f), "arquivo ausente no career: " + f));
  // spec0033: campo de topbar precisa CHEGAR ao buildInstr (nao pode ser metadado morto)
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.momentSel = "Negociando na atual";
  T.STATE.topbar.frentes = ["Aumento/revisão de cargo","Estudo"];
  const instr = T.buildInstr(n);
  assert(/Momento: Negociando na atual/.test(instr), "campo Momento nao chegou as Instrucoes");
  assert(/Aumento\/revis.o de cargo/.test(instr), "campo Frentes (multi) nao chegou as Instrucoes");
  assert(instr.length <= 6900, "instrucao do career excede 6900: " + instr.length);
  T.STATE.topbar.momentSel = ""; T.STATE.topbar.frentes = [];
  return "ok";
});

// ============ SUMARIO ============
```

### D5 — linha final deixa de ser hardcoded
**Âncora:**
```javascript
console.log("RESULTADO: VERDE — 17/17, 0 erros");
```
**Substituir por:**
```javascript
console.log("RESULTADO: VERDE — " + nicheOk + "/" + nicheChecks.length + ", 0 erros");
```

---

## Tarefa E — arrumar as análises (o usuário já moveu para `meta/analises/`)

1. **Posicionar a análise nova** (entregue no chat) em:
   `meta/analises/260713-ANALISE-NICHO-CARREIRA.md`

2. **Renomear as 7 antigas** para o padrão `AAMMDD-ANALISE-desc.md`. Descubra a data do **primeiro
   commit** de cada uma e renomeie com `git mv` (o script que o usuário tentou no PowerShell falhou —
   **faça você**, e mostre a tabela antes/depois). Se um arquivo não tiver histórico (nunca commitado),
   **pergunte** em vez de chutar a data.
   ```bash
   for f in meta/analises/ANALISE-*.md; do
     d=$(git log --diff-filter=A --follow --format=%ad --date=format:%y%m%d -- "$f" | tail -1)
     [ -n "$d" ] && git mv "$f" "meta/analises/$d-$(basename "$f")" || echo "SEM HISTORICO: $f"
   done
   ```
3. Confirme que o `.flatdropignore` cobre `meta/analises/*` (o usuário diz já ter posto — **verifique**,
   não confie). Se faltar, some as linhas no mesmo padrão de `meta/specs/*`.

---

## Tarefa F — docs (append-only, sem reescrever nada)

- **`meta/DECISIONS.md`** → **D-069**: nasce o 18º nicho `career`. Registre a tese (evidência → dossiê →
  artefato; movimento com contraponto), os 6 behaviors, o campo **Fronteiras** e a regra de privacidade
  (projeto do usuário é local/privado; o template é público). Aponte para a análise.
- **`meta/IDEAS.md`** (confira o maior i-N antes de numerar):
  - **i-N42 — REESCRITA.** A leitura anterior estava errada: **C e D não são sobre os downloads do KCM** —
    são os prompts do **projeto receptor** (C = projeto novo; D = projeto que já existe e vai adotar o
    kit). O refino real é: (a) C/D devem reconhecer **como os templates chegaram** (pacote achatado ×
    **estruturado** do botão ↓ — neste caso não se "gera do zero" o que já veio pronto); (b) C/D são
    **mode-blind** (no Code o receptor tem repo → árvore + commit; no ASU, edição por `.yaml`); (c) o
    **rótulo** de cada prompt deve dizer para quem ele é — se uma conversa do próprio KCM se confundiu,
    o usuário se confunde igual. **D ≠ pacote de atualização** (o ↻ já tem prompt próprio + protocolo no
    CEREBRO, i-N40).
  - **i-N43 — Auto-refino registrado.** Projetos diagnosticam a causa de um problema e **não registram**
    o aprendizado: fica na memória da conversa, some ao truncar/transferir e o erro se repete. Falta um
    gatilho universal «problema diagnosticado → grava a armadilha no DECISIONS/CEREBRO do projeto e
    reporta ao KCM». (Origem: nota `260709-0808`. **Verificar antes de especificar** se já existe algo
    truncado/corrompido no CEREBRO nessa direção.)
  - **i-N44 — Handoff enxuto + log do Code.** Handoff **não se versiona** (é atalho efêmero; o repo é a
    verdade), nome padronizado `_HANDOFF-AAAA-MM-DD.md`, arquivado fora do repo. O brief deve carregar
    **só o fio vivo** (o que não está em arquivo nenhum) e **nunca** repetir STATUS/DECISIONS. No modo
    **Code** ele é quase dispensável (tudo já foi para append); no **vanilla** é o único portador. Avaliar
    também o Code emitir um **log de sessão** (hoje o usuário copia a última mensagem à mão).
  - **i-N45 — Prompt de retomada fixo.** Separar o **prompt de retomada permanente** (não datado, vive no
    CEREBRO: "leia os meta/ nesta ordem, confirme em uma frase, execute o próximo passo") do **brief
    datado e efêmero**. Refino natural do prompt F pós-spec0040.
- **`NICHOS-CANDIDATOS.md`** → marcar «Desenvolvimento Pessoal & Coaching» como **parcialmente absorvido**
  por `career` (mesmo padrão de "Solo Dev Studio" e "User Research"), e somar `career` à lista dos que
  entraram (agora **17 de conteúdo + custom**).
- **`meta/STATUS.md`** → nova «Última sessão» (2026-07-13), versão **v1.66.0 → v1.67.0** (minor: nicho
  novo), testes **17/17 · 41/41 → 18/18 · 43/43**. Demova a sessão anterior.
- **`meta/CHANGELOG.md`** → entrada da v1.67.0.

---

## Verificação (obrigatória, nesta ordem)

1. `node build.js` → deve dizer **18 módulo(s)**.
2. `node validate.js index.html` → **18/18 nichos, 43/43 checagens, 0 erros**.
3. `git diff --stat` — confira que é **aditivo**: as únicas substituições previstas são as âncoras C4/C5/C6,
   D1–D3, D5 e as linhas de versão do STATUS. **Nenhuma deleção** fora disso (lembrete: na spec0040
   apareceu uma deleção-fantasma de `meta/TRANSFERENCIA-2026-07-05.md`; se ela reaparecer, **não
   commite** — pergunte).
4. Abra o `index.html` no navegador e confira **visualmente**: o card «Carreira» aparece na grade, o hero
   renderiza (não fica em branco), a aba de configurações mostra o campo **Frentes ativas** (chips multi),
   e o preview das Instruções mostra a linha «Contexto do projeto: Momento: … · Frentes ativas: …».

---

## Commit (bloco separado, mensagem sem acento)

```bash
git add src/niches/career.js src/index.template.html index.html build-manifest.json validate.js \
        meta/analises meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md \
        NICHOS-CANDIDATOS.md meta/specs/260713-spec0041-nicho-carreira.md
git commit -m "feat(niche): nicho career (18o) - evidencia, escopo, negociacao com contraponto (spec0041, D-069)

- src/niches/career.js: 6 behaviors (evidence_first, scope_ledger, benchmark_sourced,
  counterargue_before_irreversible, mine_projects, vent_is_not_fact), campo Fronteiras,
  10 templates (EVIDENCIAS/DOSSIE/SITUACAO/MERCADO/PLANO/ESTUDO/...), 6 prompts extras
- template: marcador, hero, NICHE_CODE (CARR), responsivo; build-manifest com 18 modulos
- harness: G1 18 nichos, G15 (campos chegam ao buildInstr) -> 18/18, 43/43, 0 erros
- analises renomeadas para AAMMDD-ANALISE-*.md; IDEAS: i-N42 reescrita, i-N43/44/45"
git push
```
