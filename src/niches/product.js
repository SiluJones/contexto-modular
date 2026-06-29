NICHES.product = {
  id:"product", label:"Produto/UX", icon:"📐", group:"serif", category:"core",
  cardColor:"#f472b6", cardTags:["discovery","jornadas","specs","priorização"],
  cardDesc:"Discovery, personas, jornadas, specs e decisões — do problema ao shippado",
  intro:{
    headline:"O problema antes da solução, e o porquê de cada decisão preservado.",
    lede:"O risco aqui é construir a coisa certa pelo motivo errado: feature pedida sem o problema entendido, decisão tomada e esquecida, prioridade definida pela voz mais alta. Aqui o problema vem antes da solução (JTBD), cada decisão guarda o racional, e a prioridade tem critério — não opinião do mais graduado.",
    ctxBlurb:"<code>PRODUTO.md</code> fixa a visão e os princípios · <code>PERSONAS.md</code> e <code>JORNADAS.md</code> ancoram quem e como · <code>DECISIONS.md</code> guarda o porquê · <code>STATUS.md</code> mostra as iniciativas e métricas.",
    hero:"product"
  },
  topbar:[
    { id:"product", label:"Produto", placeholder:"ex: app-de-rotas" },
    { id:"stageSel", label:"Estágio", type:"select",
      options:["Discovery","Definição","Em construção","Lançado","Crescimento","Manutenção"] },
    { id:"langSel", label:"Idioma do output", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["problemfirst","O problema antes da solução (JTBD)","Diante de um pedido de feature, primeiro entende o JOB que o usuário tenta realizar — o problema, dor ou progresso desejado — antes de discutir solução. «As pessoas não compram um produto, contratam-no para um job.» Uma solução para um problema grande vale mais que para um pequeno. Não aceita a solução proposta sem entender o problema por trás."],
    ["successmetric","Sempre uma métrica de sucesso","Toda iniciativa nasce com a pergunta «como saberemos que deu certo?». Define o resultado esperado e a métrica antes de construir — isso previne scope creep e permite validar depois. Liga ao North Star do produto quando há um. Sem métrica, a feature é um palpite caro."],
    ["riskcall","Chama o risco antes do bonito","Aponta o risco e a hipótese frágil antes de polir a solução. Distingue o que é fato do que é suposição não validada. Em priorização, desconfia de confiança alta sem avaliação de risco — o erro mais comum. Não deixa a hipótese embutida passar como certeza."],
    ["prioritize","Prioriza com critério, não com voz alta","Usa framework (RICE, impacto×esforço, Kano) como APOIO à decisão, não como decisão automática — o número informa, o julgamento estratégico decide (timing, compromissos, visão). Afasta o «HiPPO» (a opinião do mais graduado vence). Sempre dá o argumento de por que algo NÃO deveria estar na lista."],
    ["decisionlog","Registra a decisão e o racional","Toda decisão de produto relevante vira entrada em DECISIONS.md com o porquê, as alternativas e o que se esperava. O racional de hoje é o que evita rediscutir em três meses e o que orienta quem chega depois."],
    ["userreal","Fala pelo usuário, com humildade","Representa a perspectiva do usuário-alvo (consulta PERSONAS/JORNADAS), mas lembra que entendimento do job é sempre incompleto e evolui. Não confunde o que a equipe acha que o usuário quer com o que ele de fato faz. Sinaliza quando uma afirmação sobre o usuário precisa de validação real."],
  ],
  builderSection:{
    title:"Enquadramento do produto",
    hint:"Define o tipo de produto e as ferramentas. Entra nas instruções.",
    items:[
      { kind:"radios", label:"Tipo de produto", name:"ptype", opts:[
        ["b2b","SaaS B2B"], ["b2c","App/produto B2C"], ["internal","Ferramenta interna"], ["marketplace","Marketplace"], ["platform","Plataforma/API"], ["hardware","Hardware+software"] ] },
      { kind:"radios", label:"Maturidade", name:"maturity", opts:[
        ["idea","Ideia / pré-MVP"], ["mvp","MVP"], ["pmf","Buscando PMF"], ["scaling","Escalando"], ["mature","Maduro"] ] },
      { kind:"chips", label:"Frameworks que usamos", name:"frames", opts:[
        ["jtbd","JTBD"], ["ost","Opportunity Solution Tree"], ["rice","RICE"], ["kano","Kano"], ["moscow","MoSCoW"], ["okr","OKRs"], ["northstar","North Star Metric"], ["doublediamond","Double Diamond"], ["story","User Stories"] ] },
    ]
  },
  conventions:[
    "Job antes de feature: nenhum pedido vira solução sem o problema/JTBD entendido primeiro.",
    "Toda iniciativa tem métrica de sucesso definida ANTES de construir (liga ao North Star quando há).",
    "Decisões de produto relevantes vão para DECISIONS.md com racional, alternativas e o que se esperava.",
    "Priorização usa framework como apoio, não como veredito — o julgamento estratégico decide; registra-se o porquê de cada score.",
    "Afirmação sobre o usuário que não foi validada é marcada como hipótese, não fato.",
    "Risco e hipótese frágil são sinalizados antes de refinar a solução."
  ],
  triggersExtra:[
    ["Decisão de produto tomada", "Entrega DECISIONS.md completo (decisão, alternativas, racional, métrica esperada)."],
    ["Pedido virou oportunidade qualificada", "Entrega STATUS.md (e PRODUTO/JORNADAS se mudou o escopo de quem/como)."],
    ["Persona ou jornada nova/revista", "Entrega PERSONAS.md ou JORNADAS.md completo."],
    ["Spec/PRD escrito ou priorização feita", "Entrega STATUS.md completo (iniciativa + métrica + prioridade)."],
  ],
  contextFiles:[
    { name:"PRODUTO.md", cat:"essencial", role:"Visão, proposta de valor, princípios, North Star. O norte que filtra decisões. Estável.",
      content:`# PRODUTO.md — [Nome do Produto]

> Arquivo **estável**. O assistente lê primeiro para alinhar toda decisão à visão.
> Muda pouco: só em reorientação estratégica real.

---

## Visão
[Onde o produto quer chegar, em 1-2 frases. O mundo que ele cria para o usuário.]

## Proposta de valor
- **Para quem:** [o usuário/segmento central.]
- **Que job resolve:** [o problema/progresso que o usuário contrata o produto para fazer.]
- **Como é melhor que a alternativa:** [por que escolher isto em vez do que já existe / não fazer nada.]

## Princípios do produto
> As regras que filtram decisões — o que o produto sempre faz e o que nunca faz.
- [Princípio — ex.: "simplicidade acima de completude"; "nunca cobrar pela função de segurança".]

## North Star Metric
- **Métrica-norte:** [a única métrica que melhor captura o valor entregue ao usuário. Ex.: "rotas concluídas por usuário/semana".]
- **Por que esta:** [como ela representa valor real, não vaidade.]
- **Métricas de input (que a movem):** [as alavancas que o time controla.]

## O que o produto NÃO é (anti-escopo)
> Limites deliberados — evita virar tudo para todos.
- [Ex.: não é uma rede social; não atende o público X.]

## Contexto de mercado (curto)
- **Concorrentes/alternativas:** [quem mais resolve este job, incluindo "não fazer nada".]
- **Nosso diferencial:** [o que nos posiciona.]
`},
    { name:"PERSONAS.md", cat:"essencial", role:"Personas/segmentos com seus jobs, dores e ganhos. Quem usa e por quê. Estável.",
      content:`# PERSONAS.md — Personas e Segmentos

> Arquivo **estável**. O assistente consulta para representar o usuário e julgar relevância de pedidos.
> Personas são sobre JOBS e comportamento, não só demografia. Atualize quando a pesquisa revelar algo novo — o entendimento é sempre incompleto.

---

## [Nome da persona] — [papel/segmento]
- **Contexto:** [quem é, em que situação usa o produto. Demografia só se for relevante ao job.]
- **Job principal (JTBD):** [o progresso que tenta fazer. Formato: "Quando [situação], quero [motivação], para [resultado esperado]".]
- **Dores atuais:** [o que trava/frustra hoje, antes do nosso produto.]
- **Ganhos desejados:** [o que seria sucesso na visão dela.]
- **Como resolve hoje (alternativas):** [o que usa no lugar — inclusive workarounds e "não fazer nada".]
- **Sinais de comportamento real:** [o que ela FAZ, não só o que diz querer. Marcar o que é observado vs. suposto.]

---

## [Próxima persona]
[...]

---

## Anti-persona (para quem NÃO é)
- **[Quem]** — [por que este produto não atende esta pessoa; evita decisões de agradar quem não é o alvo.]
`},
    { name:"JORNADAS.md", cat:"essencial", role:"Jornadas-chave dos usuários: passos, emoções, pontos de atrito e oportunidades. Estável.",
      content:`# JORNADAS.md — Jornadas do Usuário

> Arquivo **estável**. Mapeia como o usuário atravessa o produto (ou o problema) — onde trava, onde poderia ser melhor.
> O assistente consulta para situar onde um pedido/feature entra na experiência.

---

## [Nome da jornada] — [persona + objetivo]
> Ex.: "Maria — da primeira abertura até a primeira rota concluída."

| Passo | O que o usuário faz | O que sente | Atrito / oportunidade |
|---|---|---|---|
| [1] | [ação] | [emoção/expectativa] | [onde trava ou onde dá para encantar] |
| [2] | | | |

**Momento da verdade:** [o ponto que decide se o usuário fica ou abandona.]
**Maior atrito hoje:** [o problema #1 desta jornada.]

---

## Oportunidades levantadas (espaço de problema)
> Dores/atritos que, se resolvidos, aproximam do resultado. Vira matéria-prima de priorização — NÃO são soluções ainda.
- [Oportunidade — qual persona/jornada — magnitude da dor.]

---

## [Próxima jornada]
[...]
`},
    { name:"DECISIONS.md", cat:"essencial", role:"Decisões de produto com racional, alternativas e métrica esperada. Cresce devagar.",
      content:`# DECISIONS.md — Decisões de Produto

> Arquivo que **cresce devagar**. Guarda o PORQUÊ das decisões — evita rediscussão e orienta quem chega depois.
> Decisão sem racional registrado é decisão que será refeita.

---

## DEC-[N] — [a decisão, em uma linha]
**Data:** AAAA-MM-DD · **Status:** ativa | revista por DEC-X

### Contexto / problema
[Que problema ou oportunidade forçou esta decisão. Qual job/persona/jornada toca.]

### Decisão
[O que foi decidido, direto.]

### Alternativas consideradas
- **[Alternativa]** — [por que não.]

### Racional
[Por que esta escolha serve à visão/princípios de PRODUTO.md e ao usuário.]

### Métrica esperada
[Como saberemos se foi a decisão certa. Que número deve se mover, em quanto tempo.]

### Hipóteses e riscos
[O que estamos assumindo que pode estar errado; o principal risco.]

---

## DEC-[N+1] — [...]
[...]
`},
    { name:"STATUS.md", cat:"rolante", role:"Iniciativas em curso, métricas atuais, prioridades e próximos passos. Rolante.",
      content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde o produto está e o que vem.
> Item entregue/encerrado sai daqui (vira nota no log; a decisão fica em DECISIONS).

---

## Estágio
[Discovery / Definição / Em construção / Lançado / Crescimento / Manutenção]

## 🎯 Iniciativas em curso
> Cada uma com o problema que resolve e a métrica de sucesso.
- **[Iniciativa]** — job/problema: [...] — métrica de sucesso: [...] — estado: [discovery / spec / build / medindo].

## 📊 Métricas agora
- **North Star:** [valor atual + tendência.]
- **Inputs/secundárias relevantes:** [...]

## 📋 Backlog priorizado (curto prazo)
> Ordenado por critério (não por voz alta). Anotar o framework/score quando usado.
- [ ] [Item — problema que resolve — prioridade/score — esforço.]

## ⏳ Aguardando / bloqueios
- [Decisão pendente; dado de pesquisa que falta; dependência de outro time.]

## ⚠️ Riscos / hipóteses a validar
- [Suposição frágil que, se errada, derruba uma iniciativa.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    { name:"EXPERIMENTOS.md", cat:"opcional", role:"OPCIONAL — hipóteses testadas e resultados (A/B, entrevistas, protótipos). Use quando o produto valida por experimento.",
      content:`# EXPERIMENTOS.md — Hipóteses e Aprendizados

> **Opcional.** Use quando o produto valida decisões por experimento (A/B, teste de protótipo, entrevistas, fake door).
> Registra o que foi testado, o resultado e o APRENDIZADO — para não repetir teste nem esquecer o que já se sabe.

---

## EXP-[N] — [o que testamos]
- **Hipótese:** [acreditávamos que (mudança) levaria a (resultado) para (persona).]
- **Método:** [A/B / protótipo / entrevista (quantas) / fake door / survey.]
- **Métrica observada:** [o que medimos.]
- **Resultado:** [o que aconteceu — número/observação.]
- **Aprendizado:** [o que isso ensina; confirma ou refuta a hipótese?]
- **Decisão decorrente:** [o que fizemos com o resultado → DEC-N em DECISIONS.]

---

## Aprendizados consolidados (o que já sabemos)
> Verdades validadas sobre o usuário/produto — para não retestar.
- [Aprendizado — de qual experimento veio.]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Produto]

## Foco da sessão
[Discovery, escrita de spec/PRD, priorização, análise de métrica, decisão.]

## Discovery / aprendizados
- [O que se aprendeu sobre o job/usuário → PERSONAS/JORNADAS. Marcar validado vs. suposto.]

## Decisões
- [O que virou DEC em DECISIONS.md (com métrica esperada).]

## Priorização
- [O que foi priorizado e com que critério/score.]

## Métricas
- [O que se observou no North Star/inputs.]

## Riscos / hipóteses
- [Suposição frágil sinalizada; o que precisa validar.]

## Onde parei
[Ponto exato + próximo passo. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: iniciativas, métricas, backlog priorizado", active:true },
    { key:"decisoes", name:"DECISIONS.md", role:"completo, se houve decisão de produto (com racional e métrica)", active:true },
    { key:"personas", name:"PERSONAS.md", role:"completo, se uma persona/job foi revisto", active:false },
    { key:"jornadas", name:"JORNADAS.md", role:"completo, se uma jornada/oportunidade mudou", active:false },
    { key:"experimentos", name:"EXPERIMENTOS.md", role:"completo, se um experimento rodou (quando usa o arquivo)", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Discovery de um pedido (job antes de feature)", when:"Chegou um pedido de feature e quero entender o problema antes de construir.",
      fill:"request", fillLabel:"O pedido + quem fez + qualquer contexto",
      body:(p,n)=>`Discovery de pedido (problema antes da solução).\n\nPEDIDO:\n${p.request||"[O pedido + quem fez + contexto disponível]"}\n\nNão proponha solução ainda. Faça discovery, consultando PRODUTO/PERSONAS/JORNADAS:\n- Qual JOB o usuário tenta realizar por trás deste pedido? (a dor/progresso, não a feature)\n- Qual persona é afetada e onde isto entra na jornada dela?\n- A solução pedida é a única forma de resolver o job? Que alternativas existem?\n- Que hipóteses não-ditas o pedido embute? O que precisa ser validado?\n- O job vale a pena? (problema grande ou pequeno?) Casa com a visão/princípios de PRODUTO.md? Se não, qual a tensão?\n- Que pergunta(s) eu deveria fazer a quem pediu, antes de virar feature?\n\nDevolva um discovery brief curto: job, persona/jornada, oportunidade, hipóteses a validar, e a recomendação (vale explorar? travar? redefinir?).`
    },
    { id:"H", title:"Escrever spec / PRD", when:"O problema está claro e quero especificar a solução.",
      fill:"feature", fillLabel:"A solução/feature + o problema que resolve + restrições",
      body:(p,n)=>`Escrever spec/PRD.\n\nFEATURE E PROBLEMA:\n${p.feature||"[A solução + o job/problema que resolve + restrições conhecidas]"}\n\nProduza um PRD enxuto:\n- **Problema & job:** o que resolve, para qual persona (referência a PERSONAS/JORNADAS)\n- **Objetivo & métrica de sucesso:** como saberemos que deu certo (liga ao North Star); definir ANTES previne scope creep\n- **Escopo:** o que está incluído e — explícito — o que NÃO está nesta versão\n- **Requisitos:** o que precisa existir, em comportamento (não implementação)\n- **Hipóteses e riscos:** o que assumimos que pode estar errado; o principal risco\n- **Fora de escopo / depois:** o que fica para versões futuras\n- **Perguntas abertas:** o que falta decidir/validar\n\nNão inche: spec serve para alinhar, não para impressionar. Sinalize qualquer requisito que seja na verdade uma suposição não validada.`
    },
    { id:"I", title:"Priorizar (com critério, não voz alta)", when:"Tenho uma lista de candidatos e preciso ordenar com método.",
      fill:"list", fillLabel:"Os itens candidatos + a restrição/contexto atual (tempo, time, meta)",
      body:(p,n)=>`Priorização.\n\nCANDIDATOS:\n${p.list||"[Itens candidatos + contexto: meta do trimestre, tamanho do time, prazo]"}\n\nAvalie cada item (framework como apoio, não veredito):\n- Job/problema que resolve e qual persona/jornada (magnitude da dor)\n- Aderência à visão/princípios de PRODUTO.md e impacto no North Star\n- Score num framework adequado (RICE: alcance, impacto, confiança, esforço — ou impacto×esforço). Desconfie de confiança alta sem avaliar risco\n- Hipótese subjacente (forte/média/fraca) e risco principal\n\nProponha uma ordenação com racional curto por item. Identifique 1-2 itens que claramente NÃO deveriam estar na lista, com argumento. Lembre: o score informa, mas a decisão final pesa estratégia/timing/compromissos — não é automática. Afaste decisão por «voz mais alta».`
    },
    { id:"J", title:"Registrar uma decisão de produto", when:"Batemos o martelo numa decisão e quero o porquê gravado.",
      fill:"decision", fillLabel:"A decisão + o que motivou + alternativas que estavam na mesa",
      body:(p,n)=>`Decisão de produto.\n\nDECISÃO:\n${p.decision||"[O que foi decidido + o que motivou + alternativas consideradas]"}\n\nFaça:\n- Reformule o problema/oportunidade por trás da decisão (qual job/persona)\n- Liste as alternativas e por que não\n- Articule o racional ligando à visão/princípios de PRODUTO.md\n- Defina a métrica esperada: que número deve se mover e em quanto tempo (como saberemos se acertamos)\n- Aponte as hipóteses embutidas e o principal risco\n\nEntregue DECISIONS.md completo (nova DEC-N). Se a decisão muda escopo de quem/como, atualize PERSONAS/JORNADAS também.`
    },
    { id:"K", title:"Analisar uma métrica / resultado", when:"Tenho um número (bom ou ruim) e quero interpretá-lo sem me enganar.",
      fill:"data", fillLabel:"A métrica + o número + o que esperava + contexto",
      body:(p,n)=>`Análise de métrica.\n\nMÉTRICA E CONTEXTO:\n${p.data||"[A métrica + valor observado + o que esperava + o que mudou no período]"}\n\nInterprete com honestidade:\n- O que o número diz de fato — e o que ele NÃO diz (correlação ≠ causa)\n- É métrica de valor real ou de vaidade? Como se relaciona com o North Star?\n- Que explicações alternativas existem para esse movimento? (sazonalidade, mudança externa, amostra pequena)\n- O que precisaria ser verdade para essa leitura estar certa? Que dado confirmaria?\n- Ação recomendada: agir, investigar mais, ou não fazer nada ainda?\n\nNão pule para conclusão que agrada. Marque o que é evidência vs. hipótese. Se a leitura sugere uma decisão, aponte o que registrar em DECISIONS.`
    },
    { id:"L", title:"Mapear oportunidades (Opportunity Solution Tree)", when:"Tenho um resultado-alvo e quero descobrir caminhos antes de pular para soluções.",
      fill:"outcome", fillLabel:"O resultado/outcome desejado + o que já sabe das dores dos usuários",
      body:(p,n)=>`Mapeamento de oportunidades (Opportunity Solution Tree).\n\nRESULTADO DESEJADO:\n${p.outcome||"[O outcome no topo: ex. 'aumentar rotas concluídas por semana' + o que já sabe das dores]"}\n\nConstrua a árvore (outcome → oportunidades → soluções → experimentos):\n- **Outcome:** reformule o resultado-alvo de forma mensurável (liga ao North Star)\n- **Oportunidades:** as dores/necessidades não atendidas (de PERSONAS/JORNADAS) que, resolvidas, aproximam do outcome — são PROBLEMAS, não soluções. Agrupe e mostre quais pesam mais\n- **Soluções:** só DEPOIS, 2-3 ideias por oportunidade priorizada\n- **Experimentos:** como validar barato a hipótese de cada solução antes de construir\n\nResista a pular direto para soluções. O valor está em mapear bem o espaço do problema primeiro. Aponte qual oportunidade atacar primeiro e por quê.`
    },
  ]
};