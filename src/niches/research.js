NICHES.research = {
  id:"research", label:"Pesquisa", icon:"🔬", group:"literary", category:"core",
  cardColor:"#94a3b8", cardTags:["acadêmico","síntese","fontes","argumento"],
  cardDesc:"Investigação estruturada: fontes íntegras, hipóteses, síntese, argumento",
  intro:{
    headline:"Investigação que não perde a fonte, a hipótese, nem o porquê de cada nota.",
    lede:"O risco aqui é duplo: o intelectual (perder o fio do argumento, confundir hipótese com evidência, esquecer por que uma nota foi feita) e o de integridade (citação fabricada — quase 40% das referências geradas por IA são erradas ou inexistentes). Aqui as fontes são reais e verificadas, cada nota diz por que existe, e a síntese cresce sem virar pilha de resumos.",
    ctxBlurb:"<code>TEMA.md</code> fixa a pergunta e o recorte · <code>FONTES.md</code> cataloga só o que foi verificado · <code>HIPOTESES.md</code> separa o que é tese do que é evidência · <code>SINTESE.md</code> constrói o argumento.",
    hero:"research"
  },
  topbar:[
    { id:"project", label:"Pesquisa", placeholder:"ex: vigilância-e-poder" },
    { id:"areaSel", label:"Área", type:"select",
      options:["Humanas","Sociais","Exatas","Biológicas","Saúde","Engenharia","Direito","Interdisciplinar"] },
    { id:"phase", label:"Fase", type:"select",
      options:["Pergunta/recorte","Revisão de literatura","Coleta/análise","Síntese","Escrita","Revisão final"] },
  ],
  behaviors:[
    ["citelock","Nunca inventa referências (citelock)","NÃO cita de memória. Uma citação só entra se o assistente puder verificá-la (busca, ou fonte que o usuário forneceu) — autor, título, ano, onde encontrar. Alucinação de citação é induzida pelo pedido, não inevitável: na dúvida, o assistente diz «não verifiquei esta referência» em vez de produzir uma plausível. Confiança não é correção — uma referência que «soa certa» pode não existir. Toda referência que entra na FONTES deve ser rastreável a um registro real."],
    ["hypoflag","Marca hipótese vs. evidência vs. especulação","Distingue sempre três níveis: o que é EVIDÊNCIA (apoiado por fonte verificável), o que é HIPÓTESE (afirmação a testar) e o que é ESPECULAÇÃO/inferência do próprio raciocínio. Nunca apresenta hipótese como fato estabelecido. Marca o grau de confiança e o que falta para confirmar."],
    ["steelman","Steel-man dos oponentes","Apresenta a posição contrária na sua forma MAIS forte, não numa caricatura — e só então responde. Para a tese ser sólida, precisa existir contra-argumento crível: se ninguém discordaria, provavelmente é fato trivial, não tese. Mostra por que a posição se sustenta sob a pressão do melhor contra-argumento."],
    ["synthesis","Síntese é argumento, não pilha de resumos","Sintetizar não é resumir fonte por fonte: é encontrar conexões, padrões e tensões entre fontes para construir algo maior que a soma. Cada fonte citada tem uma função no argumento (apoia, complica, contradiz). Sinaliza quando uma única fonte está dominando (síntese parcial) e quando uma afirmação está sem sustentação (asserção oca)."],
    ["gap_thesis","Posiciona na conversa: lacuna → tese","Ancora a contribuição na literatura: o que já se sabe, qual a lacuna/tensão, e o que esta pesquisa acrescenta. Usa o movimento «embora a maioria sustente X, um exame mais atento sugere Y». A tese precisa ser específica e arguível, ligada à conversa acadêmica."],
    ["note_why","Toda nota diz por que existe","Ao registrar uma fonte ou ideia, anota não só o conteúdo, mas POR QUE foi anotado: como conecta, contradiz, corrige ou apoia o que já está na pesquisa. Nota sem o porquê é inútil no futuro. Resume com as palavras do próprio pesquisador, não copia o abstract."],
    ["transl","Traduções controladas","Ao traduzir um trecho de fonte, mantém o original ao lado (ou a referência exata) e sinaliza que é tradução — não apresenta paráfrase traduzida como citação literal. Termos técnicos com tradução incerta vêm com o original entre parênteses."],
  ],
  builderSection:{
    title:"Enquadramento da pesquisa",
    hint:"Define o tipo de trabalho e a norma de citação. Entra nas instruções.",
    items:[
      { kind:"radios", label:"Saída esperada", name:"output", opts:[
        ["essay","Ensaio / artigo"], ["litreview","Revisão de literatura"], ["thesis","Monografia / dissertação / tese"],
        ["paper","Paper científico"], ["report","Relatório técnico"], ["notes","Notas / fichamento"] ] },
      { kind:"radios", label:"Abordagem", name:"approach", opts:[
        ["qual","Qualitativa"], ["quant","Quantitativa"], ["mixed","Mista"], ["theory","Teórica / conceitual"] ] },
      { kind:"chips", label:"Norma de citação", name:"refstyle", opts:[
        ["abnt","ABNT"], ["apa","APA"], ["chicago","Chicago"], ["mla","MLA"], ["vancouver","Vancouver"], ["ieee","IEEE"], ["other","Outra"] ] },
    ]
  },
  conventions:[
    "Nenhuma citação entra sem verificação: referência fabricada é falha grave, não detalhe. Na dúvida, sinalizar «não verificado» em vez de inventar.",
    "Cada fonte na FONTES tem citekey (autor-ano), dados completos e uma nota de POR QUE importa para a pesquisa.",
    "Separar sempre evidência (com fonte) de hipótese (a testar) de especulação (inferência) — em HIPOTESES e na própria escrita.",
    "Síntese liga fontes num argumento; não é resumo sequencial. Cada fonte tem função (apoia/complica/contradiz).",
    "Bibliografia (FONTES) é separada das notas de ideia (SINTESE) — naturezas diferentes.",
    "Traduções vêm sinalizadas, com o original referenciado; termo técnico incerto traz o original entre parênteses."
  ],
  triggersExtra:[
    ["Fonte nova consultada e verificada", "Entrega FONTES.md completo (citekey, dados, e a nota de por que importa)."],
    ["Hipótese criada, confirmada ou refutada", "Entrega HIPOTESES.md completo (status atualizado + o que mudou)."],
    ["Avanço na síntese / argumento", "Entrega SINTESE.md completo (o argumento no estado atual)."],
    ["Conceito-chave definido", "Entrega SINTESE.md (ou GLOSSARIO) com a definição registrada."],
  ],
  contextFiles:[
    { name:"TEMA.md", cat:"essencial", role:"A pergunta de pesquisa, o recorte, a justificativa e a tese provisória. Estável.",
      content:`# TEMA.md — [Título da Pesquisa]

> Arquivo **estável**. O assistente lê primeiro para entender o que se investiga e os limites do recorte.
> Muda pouco: só quando a pergunta ou o escopo de fato se reorientam.

---

## Pergunta de pesquisa
[A pergunta central, específica e respondível. Evite perguntas vagas ou amplas demais.]

## Recorte
- **Inclui:** [o que está dentro do escopo — período, objeto, corpus, população.]
- **NÃO inclui:** [o que fica de fora deliberadamente — evita escopo infinito.]

## Justificativa / relevância
[Por que esta pergunta importa. Que lacuna ou tensão na literatura ela endereça.]

## Tese provisória
> A resposta hipotética que a pesquisa vai sustentar ou refutar. Específica e arguível (existe contra-argumento crível).
[Embora se costume sustentar X, esta pesquisa argumenta Y, com base em Z.]

## Objetivos
- **Geral:** [o que a pesquisa pretende alcançar.]
- **Específicos:** [desdobramentos concretos.]

## Norma e idioma
- **Citação:** [ABNT / APA / Chicago...]
- **Idioma do texto:** [pt-BR / outro]
`},
    { name:"FONTES.md", cat:"essencial", role:"Catálogo de referências VERIFICADAS, com citekey e a nota de por que cada uma importa. Cresce.",
      content:`# FONTES.md — Catálogo de Referências

> Arquivo que **cresce**. A bibliografia da pesquisa, separada das notas de ideia (que ficam em SINTESE).
> **Regra dura:** só entra fonte verificada (existe de verdade, dados conferidos). Nada de referência de memória não checada.
> Cada fonte tem um citekey (autor-ano) usado para citar no texto.

---

## Como usar
Para cada fonte: citekey, dados completos na norma da pesquisa, e — o mais importante — uma nota de POR QUE ela importa (como conecta/contradiz/apoia a tese). Resuma com suas palavras, não copie o abstract.

---

## [autorAno] — [Título curto]
- **Referência completa:** [Sobrenome, Nome. *Título*. Editora/Periódico, ano. DOI/URL se houver.]
- **Tipo:** [livro / artigo revisado por pares / fonte primária / relatório / tese]
- **Verificada?** [✓ conferida em (base/onde) — ou ⚠ a verificar]
- **Argumento central da fonte:** [em 1-2 frases, com suas palavras.]
- **Por que importa para esta pesquisa:** [apoia / complica / contradiz a tese? que peça do argumento ela sustenta?]
- **Citações-chave:** [trecho literal entre aspas + página. Marcar tradução se traduzido.]

---

## [próximoAutorAno] — [...]
[...]

---

## A verificar (fila)
> Fontes mencionadas mas ainda não conferidas — NÃO citar até verificar.
- [ ] [referência incompleta a localizar/confirmar.]
`},
    { name:"HIPOTESES.md", cat:"essencial", role:"Hipóteses ativas e seu status, separando evidência de tese de especulação. Cresce devagar.",
      content:`# HIPOTESES.md — Hipóteses e Status

> Arquivo que **cresce devagar**. Separa o que é hipótese (a testar) do que já é evidência (sustentado) e do que é especulação (inferência).
> O assistente consulta para não tratar hipótese como fato e para saber o que ainda falta confirmar.

---

## Hipóteses ativas
### H[N] — [enunciado da hipótese]
- **Status:** [aberta / apoiada parcialmente / confirmada / refutada]
- **Evidência a favor:** [fontes/dados que sustentam — com citekey.]
- **Evidência contra:** [o que tensiona — steel-man do contra.]
- **O que falta para decidir:** [que dado/fonte/análise resolveria.]

---

## Confirmadas (viraram base do argumento)
- **[H anterior]** — confirmada por [evidência]; agora integrada à SINTESE.

## Refutadas (registradas para não reabrir)
- **[H anterior]** — refutada porque [motivo/evidência]. Não retomar sem dado novo.

## Especulações / intuições (ainda não são hipóteses)
> Lampejos a desenvolver — o "inbox" intelectual. Sem compromisso ainda.
- [ideia solta + por que pode valer.]
`},
    { name:"SINTESE.md", cat:"essencial", role:"O argumento em construção: tese, estrutura, conceitos definidos, síntese das fontes. Estável-rolante.",
      content:`# SINTESE.md — Argumento em Construção

> O coração intelectual da pesquisa: onde as fontes viram ARGUMENTO (não pilha de resumos).
> Cresce e se reorganiza conforme o pensamento amadurece. O assistente consulta para manter o fio.

---

## Tese atual
[A afirmação central no estado de hoje — pode evoluir desde a tese provisória do TEMA.]

## Mapa do argumento
> A espinha lógica: como as ideias se encadeiam para sustentar a tese.
1. [Primeira ideia/seção → o que estabelece → fontes que a sustentam (citekey).]
2. [Segunda → ...]
3. [...]

## Conceitos definidos
> Termos centrais no sentido específico desta pesquisa (evita reexplicar e ambiguidade).
- **[Conceito]** — [definição operacional + de quem vem, se herdado de um autor.]

## Síntese por eixo temático
> Organizado por TEMA, não por fonte. Em cada eixo, o que as fontes dizem juntas, onde concordam e onde divergem.
### [Eixo / debate]
[O que a literatura sustenta neste ponto; pontos de consenso; pontos de disputa; onde sua tese se posiciona.]

## Contra-argumentos e respostas
> As objeções mais fortes à tese (steel-man) e como o argumento responde.
- **Objeção:** [a melhor versão da crítica.] → **Resposta:** [por que a tese se sustenta sob essa pressão.]

## Lacunas / a desenvolver
- [Pontos do argumento ainda frágeis ou sem fonte; o que pesquisar a seguir.]
`},
    { name:"STATUS.md", cat:"rolante", role:"Fase, prazos, próximas leituras e pendências. Rolante — o resolvido sai.",
      content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Item resolvido sai daqui (vira nota no log ou entra na SINTESE).

---

## Fase
[Pergunta/recorte / Revisão de literatura / Coleta-análise / Síntese / Escrita / Revisão final]

## Onde estou
[O ponto atual da investigação + a frente de trabalho ativa.]

## Próximas ações
- [ ] [Próxima leitura/fonte a buscar e verificar.]
- [ ] [Próximo trecho a escrever ou hipótese a testar.]

## Pendências de verificação
> Fontes citadas no rascunho que ainda não foram conferidas — risco de integridade.
- [ ] [referência a confirmar antes de submeter.]

## Prazos / marcos
- [Entrega — data — status.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    { name:"GLOSSARIO.md", cat:"opcional", role:"OPCIONAL — termos técnicos e conceitos próprios da pesquisa. Use quando há vocabulário denso ou herdado de vários autores.",
      content:`# GLOSSARIO.md — Termos e Conceitos

> **Opcional.** Use quando a pesquisa lida com vocabulário técnico denso, conceitos de autores diferentes (que podem definir o mesmo termo de modos distintos), ou jargão que se repete.
> Complementa os «Conceitos definidos» da SINTESE — aqui entram também termos de terceiros, com a fonte.

---

## Conceitos centrais (no sentido desta pesquisa)
- **[Conceito]** — [definição operacional] — [de quem vem / como esta pesquisa o usa.]

## Termos com disputa de definição
> Quando autores divergem sobre o que um termo significa — registre as versões para não confundir.
- **[Termo]** — [Autor A: definição X] vs. [Autor B: definição Y]. Esta pesquisa adota: [qual e por quê].

## Siglas e abreviações
- **[SIGLA]** — [significado por extenso.]

## Termos em outra língua
- **[termo original]** — [tradução adotada + por que; alternativas descartadas.]
`},
    { name:"HISTORICO.md", cat:"opcional", role:"OPCIONAL — conhecimento consolidado de fases antigas: revisões já fechadas, levantamentos extensos. Lido sob demanda.",
      content:`# HISTORICO.md — Conhecimento Consolidado

> **Opcional.** Arquivo-baú para material denso já estável que pesaria no contexto do dia a dia — uma revisão de literatura já fechada, um levantamento extenso, fichamentos antigos.
> Não é lido no início da sessão; o assistente consulta sob demanda. Evita perder conhecimento quando um projeto/fase termina (o erro clássico de arquivar e esquecer 90% do que se leu).

---

## 1. [Revisão / levantamento já consolidado]
[Conteúdo de referência estável — pode ser longo. Ex.: o estado da arte de um subtema já mapeado.]

## 2. [Fichamentos de uma fase encerrada]
[Notas detalhadas que saíram do fluxo ativo mas ainda têm valor de consulta.]

## 3. [Decisão metodológica histórica]
[Por que tal método/recorte foi adotado numa fase anterior.]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Pesquisa]

## Foco da sessão
[Leitura/fichamento, teste de hipótese, escrita de síntese, revisão de argumento.]

## Fontes trabalhadas
- [Fontes lidas/verificadas → FONTES.md. Marcar as que ficaram «a verificar».]

## Hipóteses
- [Hipótese aberta/confirmada/refutada → HIPOTESES.md.]

## Avanço no argumento
- [O que progrediu na SINTESE: eixo desenvolvido, conceito definido, contra-argumento respondido.]

## Pendências de integridade
- [Citações ainda não verificadas que entraram no rascunho.]

## Onde parei
[Ponto exato + próxima ação. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: fase, próximas ações, pendências de verificação", active:true },
    { key:"fontes", name:"FONTES.md", role:"completo, se fonte nova foi consultada e verificada", active:true },
    { key:"hipoteses", name:"HIPOTESES.md", role:"completo, se uma hipótese mudou de status", active:true },
    { key:"sintese", name:"SINTESE.md", role:"completo, se o argumento avançou", active:true },
    { key:"glossario", name:"GLOSSARIO.md", role:"completo, se um conceito foi definido (quando usa o arquivo)", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Mapear a literatura (a partir de uma fonte-semente)", when:"Começo da revisão — quero descobrir o terreno sem cair em citação inventada.",
      fill:"seed", fillLabel:"Tema + uma fonte-semente que você já tem (ou o ponto de partida)",
      body:(p,n)=>`Mapeamento de literatura.\n\nPONTO DE PARTIDA:\n${p.seed||"[O tema + uma fonte-semente confiável que você já tem, ou os termos centrais]"}\n\nFaça (com integridade de citação acima de tudo):\n- Proponha eixos/subtemas que a literatura desta área costuma cobrir\n- Sugira termos de busca e tipos de fonte a procurar (não invente referências específicas)\n- Para qualquer obra que você mencionar como possivelmente relevante, marque CLARAMENTE se é algo que você consegue verificar ou apenas uma pista a confirmar — nunca apresente como referência certa sem verificação\n- Aponte o que parece ser consenso vs. o que é debate aberto na área\n- Identifique onde pode estar a LACUNA que justifica a pesquisa\n\nNão preencha FONTES.md com nada não verificado. Devolva um mapa do terreno + uma fila de buscas a fazer.`
    },
    { id:"H", title:"Fichar uma fonte", when:"Li/tenho uma fonte e quero registrá-la direito em FONTES.md.",
      fill:"source", fillLabel:"A fonte (cole referência, trechos, ou o texto) + o que te chamou atenção",
      body:(p,n)=>`Fichamento de fonte.\n\nFONTE:\n${p.source||"[Cole a referência completa + trechos relevantes ou o texto + por que a li]"}\n\nProduza a ficha para FONTES.md:\n- Citekey (autorAno) e referência completa na norma da pesquisa\n- Argumento central da fonte, em poucas frases COM MINHAS PALAVRAS (não copie o abstract)\n- Por que importa para esta pesquisa: apoia, complica ou contradiz a tese? que peça do argumento ela toca? (consulte TEMA e SINTESE)\n- Citações-chave: trecho literal entre aspas + página (marque se for tradução)\n- Como conecta com fontes que já estão em FONTES.md (concorda? diverge?)\n\nNão invente dados bibliográficos que faltam — sinalize o que precisa ser confirmado. Entregue FONTES.md completo.`
    },
    { id:"I", title:"Testar uma hipótese", when:"Tenho uma hipótese e quero confrontá-la com a evidência, honestamente.",
      fill:"hypo", fillLabel:"A hipótese + a evidência que você já tem a favor e contra",
      body:(p,n)=>`Teste de hipótese.\n\nHIPÓTESE:\n${p.hypo||"[O enunciado da hipótese + evidência que você já reuniu, a favor e contra]"}\n\nConfronte com rigor:\n- Liste a evidência A FAVOR (com citekey de FONTES) e quão forte é cada peça\n- Faça o steel-man da posição CONTRÁRIA: a evidência contra na sua forma mais forte\n- Aponte o que é evidência (com fonte) vs. o que é inferência sua (especulação)\n- Diga o que FALTA para decidir: que dado/fonte/análise confirmaria ou refutaria\n- Veredito honesto: a hipótese se sustenta, sustenta-se parcialmente, ou cai?\n\nNão force a hipótese a vencer. Entregue HIPOTESES.md completo com o status atualizado.`
    },
    { id:"J", title:"Avançar a síntese / argumento", when:"Quero transformar fontes em argumento — sem virar resumo sequencial.",
      fill:"focus", fillLabel:"O eixo/seção a desenvolver + as fontes envolvidas (ou: use SINTESE.md)",
      body:(p,n)=>`Avanço da síntese.\n\nFOCO:\n${p.focus||"[O eixo temático/seção a desenvolver + as fontes envolvidas. Ou: 'continue de SINTESE.md']"}\n\nConstrua ARGUMENTO, não resumo:\n- Organize por TEMA/ideia, não fonte por fonte\n- Mostre onde as fontes concordam, onde divergem, e que padrão emerge do conjunto\n- Para cada afirmação, ancore na evidência (citekey) — sinalize qualquer afirmação que esteja sem sustentação\n- Posicione a tese: «embora se sustente X, o exame sugere Y»\n- Inclua o contra-argumento mais forte e a resposta\n- Avise se uma única fonte está dominando (síntese parcial)\n\nEntregue SINTESE.md completo atualizado. Não cite nada não verificado.`
    },
    { id:"K", title:"Auditar integridade das citações", when:"Antes de submeter/entregar — quero garantir que nenhuma referência é fabricada.",
      fill:"draft", fillLabel:"O trecho/rascunho com as citações (cole) — ou a lista de referências",
      body:(p,n)=>`Auditoria de integridade de citações.\n\nMATERIAL:\n${p.draft||"[Cole o trecho com citações ou a lista de referências a auditar]"}\n\nVerifique cada referência (a integridade vem ANTES da conveniência):\n- Para cada citação, ela está em FONTES.md como VERIFICADA? Se não, sinalize como pendente\n- Algum dado bibliográfico parece inconsistente (autor/ano/título/periódico que não batem)?\n- Alguma afirmação atribui à fonte algo que a fonte talvez não diga? (cheque contra a ficha)\n- Onde eu deveria buscar para confirmar (Google Scholar, base da área, DOI)?\n\nListe: (a) referências OK, (b) referências a verificar antes de submeter, (c) qualquer suspeita de citação que não exista. Não confirme como real nada que você não possa verificar — confiança não é prova. Entregue STATUS.md com as pendências de verificação atualizadas.`
    },
    { id:"L", title:"Revisar o argumento (leitura crítica)", when:"Tenho um trecho pronto e quero leitura crítica de lógica e evidência.",
      fill:"text", fillLabel:"O trecho a revisar + o que você quer checar",
      body:(p,n)=>`Revisão crítica de argumento.\n\nTRECHO:\n${p.text||"[Cole o trecho + o que quer avaliar: a lógica fecha? a evidência sustenta?]"}\n\nAvalie o diagnosticável:\n- Cada afirmação tem sustentação, ou há asserções ocas (confiantes mas sem evidência)?\n- As citações constroem o argumento ou só interrompem? Alguma deriva do ponto?\n- A lógica encadeia (premissas → conclusão) ou há saltos?\n- O contra-argumento foi enfrentado, ou ignorado (deixando um «sim, mas...» no leitor)?\n- Equilíbrio: uma fonte/voz está dominando indevidamente?\n- Hipótese sendo tratada como fato em algum ponto?\n\nSepare «precisa corrigir» de «sugestão». Para julgamentos de mérito intelectual, dê sua leitura e devolva a decisão a mim. Aponte onde buscar evidência que falta — sem inventar fonte.`
    },
  ]
};