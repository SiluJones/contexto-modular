NICHES.brainstorm = {
  id:"brainstorm", label:"Brainstorm", icon:"💡", group:"serif", category:"creative",
  cardColor:"#facc15", cardTags:["ideação","estratégia","pensar junto"],
  cardDesc:"Divergir, mapear e convergir — pensar junto sem perder o fio. É o nicho deste próprio Kit.",
  intro:{
    headline:"Pensar junto sem perder o fio — nem a honestidade.",
    lede:"O risco aqui é duplo: a ideia boa que escapa porque não foi anotada, e o parceiro que só concorda — que faz o pensar PARECER melhor em vez de torná-lo melhor. Aqui as ideias ficam guardadas com seus critérios, a divergência vem antes da convergência, e o assistente é espelho e contraponto, não eco. É o nicho deste próprio Kit: o lugar de pensar com a IA, não de deixar a IA pensar por você.",
    ctxBlurb:"<code>TEMA.md</code> fixa o que se explora e por quê · <code>IDEIAS.md</code> é o banco que cresce (nada se perde) · <code>MAPA.md</code> organiza em clusters e eixos · <code>FILTROS.md</code> guarda os critérios de corte.",
    hero:"brainstorm"
  },
  topbar:[
    { id:"theme", label:"Tema", placeholder:"ex: novo-app-de-rotas" },
    { id:"phaseSel", label:"Fase", type:"select",
      options:["Divergir (gerar)","Mapear (organizar)","Convergir (decidir)","Aprofundar uma ideia","Revisão geral"] },
    { id:"natureSel", label:"Natureza", type:"select",
      options:["Produto/feature","Negócio/estratégia","Criativo/conteúdo","Problema a resolver","Decisão pessoal","Pesquisa/exploração","Aberto"] },
    { id:"langSel", label:"Idioma", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["diverge_first","Divergir antes de convergir","Respeita as duas fases (à la Double Diamond): primeiro abrir (gerar muitas possibilidades, volume sobre perfeição, sem julgar), depois fechar (avaliar com critério). Não mata uma ideia no nascedouro nem pula para «a solução» cedo demais. Sinaliza em qual fase estamos e protege a divergência do julgamento prematuro — o erro nº1 da ideação."],
    ["mirror_not_echo","Espelho e contraponto, não eco","O assistente é parceiro de pensamento, não máquina de concordar. NÃO bajula: se uma ideia é fraca, diz — com respeito e com o porquê. Oferece o ângulo que falta, a objeção honesta, a pergunta socrática que examina a premissa. O atrito produtivo é o que gera insight; concordar com tudo faz o pensar PARECER melhor em vez de torná-lo melhor."],
    ["challenge_assumptions","Questiona a premissa, não só a ideia","Antes de avaliar as opções, examina a PERGUNTA: ela está bem colocada? Que suposição não-dita está embutida? Reformula como «Como poderíamos...» quando ajuda. Muitas vezes a ideia trava porque o problema foi mal enquadrado — destravar o enquadramento abre tudo o que vem depois."],
    ["break_mental_models","Quebra modelos mentais (técnicas)","Quando a geração satura no óbvio, usa técnicas para forçar ângulos novos: SCAMPER (substituir, combinar, adaptar, modificar, outro uso, eliminar, reverter), brainstorm reverso (como PIORAR o problema?), analogias de outros domínios, inversão. A técnica é andaime para sair do senso comum, não enfeite."],
    ["cluster_map","Identifica clusters e eixos","Na fase de mapear, agrupa as ideias por afinidade (affinity) e nomeia os clusters; encontra os eixos que organizam o espaço (ex.: esforço × impacto, ousado × seguro). Mostra os padrões que emergem — onde as ideias se concentram, que território está vazio (e talvez promissor)."],
    ["criteria_transparent","Critério transparente ao convergir","Convergência sem critério é palpite disfarçado. Antes de cortar/priorizar, torna explícitos os critérios (viabilidade, impacto, alinhamento, prazo) e aplica-os à vista. Usa apoios (matriz impacto × esforço, dot voting mental, prós/contras) como ferramenta — não como veredito automático. O porquê do corte fica registrado."],
    ["nothing_lost","Nada se perde; a síntese decide","Toda ideia que surge vai para IDEIAS.md com um ID — inclusive a descartada (com a razão), porque uma ideia morta hoje pode ressuscitar amanhã noutro contexto. E ao fim de uma fase, o assistente não devolve uma lista morna: sintetiza, recomenda um caminho, e diz o próximo passo. Captura tudo; conclui com posição."],
    ["think_with_not_for","Pensar COM você, não POR você","A decisão e o gosto são seus; o assistente é catalisador, não substituto do seu pensamento. Levanta opções, tensiona, organiza — e devolve a escolha. Para metas, puxa para o honesto: o que é estruturalmente alcançável a partir de quem você é hoje, não o que «soa impressionante». Não deixa você se enganar."],
  ],
  builderSection:{
    title:"O que vamos pensar",
    hint:"Define o enquadramento. Entra nas instruções para o assistente calibrar o modo de pensar junto.",
    items:[
      { kind:"radios", label:"Modo dominante", name:"mode", opts:[
        ["generate","Gerar (preciso de muitas ideias)"], ["decide","Decidir (tenho opções, preciso escolher)"], ["unstick","Destravar (empaquei)"], ["explore","Explorar (mapear um espaço)"] ] },
      { kind:"radios", label:"Maturidade do tema", name:"maturity", opts:[
        ["blank","Página em branco"], ["seeds","Algumas sementes"], ["messy","Bagunçado/muitas ideias soltas"], ["narrowing","Já afunilando"] ] },
      { kind:"chips", label:"Técnicas que ressoam", name:"tech", opts:[
        ["scamper","SCAMPER"], ["reverse","Brainstorm reverso"], ["hmw","How Might We"], ["mindmap","Mapa mental"], ["analogies","Analogias"], ["firstprinciples","First principles"], ["sixhats","6 chapéus"], ["matrix","Matriz impacto×esforço"], ["crazy8s","Crazy 8s"] ] },
    ]
  },
  conventions:[
    "Divergir antes de convergir: proteger a geração do julgamento; abrir, depois fechar. Sinalizar a fase.",
    "O assistente é espelho e contraponto, não eco — não bajula; oferece a objeção honesta e a pergunta que examina a premissa.",
    "Antes de avaliar opções, checar o enquadramento da pergunta (reformular como 'Como poderíamos...' quando ajuda).",
    "Quando satura no óbvio, usar técnicas (SCAMPER, reverso, analogias) para forçar ângulos novos.",
    "Convergir com critério explícito (viabilidade, impacto, alinhamento) à vista; apoios são ferramenta, não veredito.",
    "Nada se perde: toda ideia (mesmo a descartada, com a razão) vai para IDEIAS.md; ao fim de uma fase, sintetizar e recomendar um caminho."
  ],
  triggersExtra:[
    ["Ideias geradas numa sessão", "Entrega IDEIAS.md completo (cada uma com ID; inclui as descartadas com a razão)."],
    ["Mapeamento/clusters definidos", "Entrega MAPA.md completo (clusters nomeados + eixos)."],
    ["Critérios de corte/priorização definidos ou aplicados", "Entrega FILTROS.md completo (critérios + o que passou/caiu e por quê)."],
    ["Tema/pergunta reformulado", "Entrega TEMA.md completo atualizado."],
    ["Fase fechada (síntese + decisão)", "Entrega STATUS.md (a síntese, o caminho recomendado e o próximo passo)."],
  ],
  contextFiles:[
    { name:"TEMA.md", cat:"essencial", role:"O que se explora, por quê, e a pergunta central. O norte da exploração. Estável.",
      content:`# TEMA.md — [O que estamos explorando]

> Arquivo **estável**. O assistente lê primeiro para saber o que se explora e em que enquadramento.
> Muda quando a própria pergunta é reformulada (e reformular é, muitas vezes, o avanço).

---

## A pergunta central
> O melhor enquadramento que temos AGORA. Em formato «Como poderíamos...» quando couber.
[Ex.: "Como poderíamos ajudar viajantes a planejar rotas sem se sentirem sobrecarregados?"]

## Por que isto importa
[O que está em jogo; por que vale pensar nisto. O que muda se resolvermos bem.]

## O que já sabemos
- **Contexto / restrições reais:** [o que condiciona — tempo, recursos, público, técnico.]
- **O que já foi tentado / descartado antes:** [para não reinventar nem repetir erro.]
- **Suposições embutidas:** [o que estamos assumindo sem ter certeza — candidato a questionar.]

## Critérios de sucesso (provisórios)
> Como saberemos que uma ideia é boa? (vira base do FILTROS na convergência)
- [Ex.: simples de usar; viável em 3 meses; alinhado à visão X.]

## O que isto NÃO é
> Limites do escopo da exploração — evita divergir para o infinito.
- [Ex.: não é redesenhar o produto inteiro; não é sobre preço.]
`},
    { name:"IDEIAS.md", cat:"essencial", role:"O banco de ideias com IDs — inclui as descartadas (com a razão). Nada se perde. Cresce.",
      content:`# IDEIAS.md — Banco de Ideias

> **Cresce** e nunca encolhe: toda ideia que surge entra aqui com um ID. **Nada se perde** — a ideia descartada hoje pode servir amanhã noutro contexto.
> Na fase de divergir, registra-se SEM julgar (volume sobre perfeição). O julgamento vem depois, em FILTROS.

---

## Ativas / em consideração
### i-[N] — [a ideia em uma linha]
- **O que é:** [descrição curta.]
- **De onde veio:** [gatilho/origem, se relevante.]
- **A favor:** [o que a torna promissora.]
- **Dúvida/risco:** [o que precisa ser verdade para funcionar; a objeção honesta.]
- **Cluster:** [→ MAPA.md, a que grupo pertence.]

---

## Em banho-maria (boas, mas não agora)
> Ideias válidas que não cabem nesta rodada — guardadas de propósito.
- **i-[N]** — [a ideia] — adiada porque [não é o foco agora / depende de X].

---

## Descartadas (com a razão)
> Não apagadas: registradas com o porquê. Se o contexto mudar, podem voltar.
- **i-[N]** — [a ideia] — descartada porque [a razão honesta]. *(Reviver se: [condição].)*

---

## Sementes soltas / fragmentos
> Meio-ideias, perguntas, imagens — capturadas antes de escapar, para desenvolver depois.
- [fragmento.]
`},
    { name:"MAPA.md", cat:"essencial", role:"Clusters (afinidade) e eixos que organizam o espaço de ideias. Cresce-rolante.",
      content:`# MAPA.md — Clusters e Eixos

> Organiza as ideias do IDEIAS.md em grupos com sentido — para enxergar o espaço, não uma lista solta.
> O assistente atualiza conforme as ideias se acumulam e os padrões emergem.

---

## Clusters (agrupamento por afinidade)
> Ideias que pertencem juntas, cada grupo com um nome que captura o tema.
### [Nome do cluster]
- **Do que trata:** [o tema comum.]
- **Ideias:** [i-N, i-N, i-N → IDEIAS.md.]
- **Leitura:** [o que este cluster sugere; está cheio (território explorado) ou tem espaço?]

---

## Eixos (o espaço de possibilidades)
> Os eixos que organizam o pensamento — ajudam a ver onde as ideias caem e o que falta.
- **Eixo 1:** [ex.: esforço baixo ↔ alto.]
- **Eixo 2:** [ex.: incremental ↔ ousado.]
- **Onde as ideias se concentram:** [o padrão — todas no canto seguro? falta ousadia?]
- **Território vazio (e talvez promissor):** [o quadrante que ninguém explorou ainda.]

## Padrões e tensões
> O que o mapa revela: temas recorrentes, contradições entre ideias, lacunas.
- [Padrão/tensão observado.]
`},
    { name:"FILTROS.md", cat:"essencial", role:"Critérios de corte e priorização — explícitos. A convergência honesta. Cresce devagar.",
      content:`# FILTROS.md — Critérios de Convergência

> Onde a convergência fica HONESTA: os critérios na mesa, aplicados à vista. Convergir sem critério é palpite disfarçado.
> O assistente registra aqui o porquê de cada corte/priorização — para a decisão ser rastreável.

---

## Os critérios (o que faz uma ideia valer)
> Derivados dos critérios de sucesso de TEMA.md. Poucos e claros.
- **[Critério 1 — ex.: impacto]:** [o que significa na prática.]
- **[Critério 2 — ex.: viabilidade]:** [...]
- **[Critério 3 — ex.: alinhamento à visão]:** [...]
- **Peso:** [algum critério pesa mais? (ex.: viabilidade é eliminatória nesta rodada).]

## Avaliação (à vista)
> As ideias finalistas contra os critérios. Apoio à decisão, não veredito automático.
| Ideia | Impacto | Viabilidade | Alinhamento | Leitura |
|---|---|---|---|---|
| i-N | [alto/médio/baixo] | [...] | [...] | [a síntese] |

## Decisões de corte / priorização
> O que avançou, o que ficou para depois, o que caiu — com o porquê.
- **Avança:** [i-N — por quê.]
- **Banho-maria:** [i-N — por quê → IDEIAS.md.]
- **Cai:** [i-N — por quê → IDEIAS.md (descartadas).]

## O caminho recomendado
> Ao fim da convergência: a recomendação (com confiança proporcional à evidência) e o próximo passo.
[A síntese: por aqui, por isto, e o primeiro passo concreto.]
`},
    { name:"STATUS.md", cat:"rolante", role:"Fase atual, a síntese do momento e a próxima decisão. Rolante.",
      content:`# STATUS.md — Estado da Exploração

> Arquivo **rolante**: só o AGORA. O assistente lê para saber em que fase estamos e o que vem.
> O detalhe vive em IDEIAS/MAPA/FILTROS; aqui fica o estado vivo e a direção.

---

## Fase
[Divergir / Mapear / Convergir / Aprofundar uma ideia / Revisão] — [o foco do momento.]

## 🧭 Onde estamos
[A síntese de uma linha: o que já se sabe / decidiu até aqui.]

## 🔥 Em foco agora
- [O que está sendo pensado/decidido + onde parei.]

## ⚖️ Próxima decisão
- [A escolha que precisa ser feita + o que falta para fazê-la (gerar mais? aplicar critério?).]

## 💡 Quentes / não esquecer
- [Ideias ou fios que estão pedindo atenção → IDEIAS.md.]

## ⚠️ Atenção
- [Convergindo cedo demais? a pergunta está bem colocada? falta divergência ousada?]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    { name:"DECISOES.md", cat:"opcional", role:"OPCIONAL — decisões tomadas na exploração, com o racional. Use quando o brainstorm alimenta escolhas que precisam ser lembradas.",
      content:`# DECISOES.md — Decisões da Exploração

> **Opcional.** Use quando o brainstorm leva a decisões que precisam ser lembradas e justificadas depois (ex.: alimentando um projeto real).
> Guarda o PORQUÊ — para não rediscutir e para que quem retoma entenda o caminho.

---

## DEC-[N] — [a decisão, em uma linha]
**Data:** AAAA-MM-DD · **Status:** ativa | revista por DEC-X

### O que foi decidido
[Direto.]

### A partir de quais ideias
[i-N, i-N → IDEIAS.md; o que do brainstorm levou aqui.]

### Por quê (o racional)
[Os critérios (FILTROS) que pesaram; por que esta e não as alternativas.]

### O que se abriu mão (alternativas)
[Os caminhos não escolhidos — para lembrar que foram considerados.]

### Próximo passo
[O que esta decisão dispara.]

---

## DEC-[N+1] — [...]
[...]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Tema]

## Foco da sessão
[Divergir, mapear, convergir, aprofundar, reformular a pergunta.]

## Ideias geradas / trabalhadas
- [O que entrou em IDEIAS.md (IDs); inclui descartadas com a razão.]

## Mapa
- [Clusters/eixos novos ou ajustados → MAPA.md.]

## Convergência
- [Critérios aplicados; o que avançou/caiu e por quê → FILTROS.]

## Pergunta / enquadramento
- [A pergunta mudou? → TEMA.md.]

## Síntese
- [A leitura do dia: onde chegamos + o caminho que parece promissor.]

## Onde parei
[Estado + próxima decisão. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: fase, síntese, próxima decisão", active:true },
    { key:"ideias", name:"IDEIAS.md", role:"completo, se ideias foram geradas/trabalhadas (com IDs; inclui descartadas)", active:true },
    { key:"mapa", name:"MAPA.md", role:"completo, se clusters/eixos mudaram", active:false },
    { key:"filtros", name:"FILTROS.md", role:"completo, se critérios foram definidos ou aplicados (convergência)", active:false },
    { key:"tema", name:"TEMA.md", role:"completo, se a pergunta/enquadramento mudou", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Enquadrar o problema (a pergunta certa)", when:"Antes de gerar ideias, quero ter certeza de que estou perguntando a coisa certa.",
      fill:"problem", fillLabel:"O problema/tema como você o vê hoje + o contexto",
      body:(p,n)=>`Enquadramento do problema.\n\nCOMO VEJO HOJE:\n${p.problem||"[O problema ou tema como você o enxerga agora + o contexto/restrições]"}\n\nNão gere soluções ainda — examine a PERGUNTA primeiro:\n- Reformule o problema de algumas formas diferentes — incluindo «Como poderíamos...» — e mostre como cada enquadramento muda o que viria depois\n- Que SUPOSIÇÃO não-dita está embutida no jeito como você colocou? O que aconteceria se ela fosse falsa?\n- Estamos resolvendo o problema certo, ou um sintoma dele? Qual é o problema por trás do problema?\n- O escopo está bom — nem amplo demais (vira tudo) nem estreito demais (perde a solução)?\n- Quais seriam bons critérios de sucesso aqui?\n\nDevolva o melhor enquadramento que enxergar (e por quê), com os critérios provisórios. Reformular a pergunta é, muitas vezes, o maior avanço. Entregue TEMA.md completo.`
    },
    { id:"H", title:"Divergir (gerar muitas ideias)", when:"Quero gerar o máximo de possibilidades, sem filtro ainda.",
      fill:"focus", fillLabel:"O foco da geração + o que já tem (ou: use TEMA.md)",
      body:(p,n)=>`Divergência — gerar, sem julgar.\n\nFOCO:\n${p.focus||"[O foco da geração. Ou: 'a pergunta de TEMA.md']"}\n\nEstamos ABRINDO: volume sobre perfeição, sem matar ideia no nascedouro. Consultando TEMA.md e IDEIAS.md (não repetir o que já existe):\n- Gere um lote generoso de ideias — das óbvias às estranhas (as estranhas destravam as boas)\n- Cubra ângulos variados: incrementais E ousadas; de baixo custo E ambiciosas\n- Quando começar a saturar no óbvio, aplique uma técnica para forçar ângulos novos: SCAMPER (substituir/combinar/adaptar/modificar/outro uso/eliminar/reverter), brainstorm reverso (como PIORAR isto?), analogias de outro domínio\n- Não avalie ainda — mas marque, sem cortar, quais parecem ter mais energia\n\nNão me dê só o seguro e bem-comportado — empurre. Entregue IDEIAS.md completo (cada ideia com ID). O julgamento vem depois.`
    },
    { id:"I", title:"Mapear (organizar o que surgiu)", when:"Tenho muitas ideias soltas e quero enxergar o espaço.",
      fill:"ideas", fillLabel:"As ideias a organizar (cole, ou: use IDEIAS.md)",
      body:(p,n)=>`Mapeamento — organizar para enxergar.\n\nIDEIAS:\n${p.ideas||"[As ideias soltas a organizar. Ou: 'as de IDEIAS.md']"}\n\nConsultando IDEIAS.md, dê forma ao espaço:\n- Agrupe por AFINIDADE (affinity): clusters de ideias que pertencem juntas; nomeie cada cluster pelo tema que captura\n- Encontre os EIXOS que organizam o espaço (ex.: esforço × impacto; incremental × ousado; quem atende)\n- Mostre onde as ideias se CONCENTRAM (território explorado) e onde está VAZIO (o quadrante que ninguém tocou — às vezes o mais promissor)\n- Aponte padrões e TENSÕES (ideias que se contradizem; temas que reaparecem; lacunas)\n\nNão é só categorizar — é revelar o que o conjunto está dizendo. Entregue MAPA.md completo. Se o mapa sugerir uma ideia nova de combinação, registre em IDEIAS.md.`
    },
    { id:"J", title:"Convergir (decidir com critério)", when:"Tenho boas opções e preciso escolher, sem ser por palpite.",
      fill:"options", fillLabel:"As opções finalistas + o que importa na decisão",
      body:(p,n)=>`Convergência — decidir com honestidade.\n\nOPÇÕES E O QUE IMPORTA:\n${p.options||"[As opções finalistas + o que importa (prazo, recursos, meta). Ou: 'os clusters de MAPA.md']"}\n\nConsultando TEMA.md (critérios de sucesso) e FILTROS.md:\n- Torne os CRITÉRIOS explícitos primeiro (viabilidade, impacto, alinhamento, prazo) — convergir sem critério é palpite disfarçado. Algum é eliminatório?\n- Avalie as opções contra os critérios À VISTA (uma matriz simples ajuda) — mas como APOIO, não veredito automático\n- Para cada finalista: a favor, contra honesto, e «o que precisaria ser verdade para ser a escolha certa»\n- Recomende um caminho, com confiança proporcional à evidência — e diga o que vai para banho-maria e o que cai (com a razão)\n- Termine com o PRÓXIMO PASSO concreto\n\nNão fique morno em cima do muro: sintetize e tome posição (é uma recomendação, a decisão é sua). Entregue FILTROS.md completo (e IDEIAS.md atualizado com o que caiu/adiou).`
    },
    { id:"K", title:"Aprofundar / pressionar uma ideia", when:"Tenho uma ideia promissora e quero testá-la a fundo (advogado do diabo).",
      fill:"idea", fillLabel:"A ideia + por que ela te atrai",
      body:(p,n)=>`Pressão sobre uma ideia (estresse honesto, não bajulação).\n\nIDEIA:\n${p.idea||"[A ideia promissora + por que ela te atrai]"}\n\nSeja o melhor parceiro crítico que esta ideia pode ter — porque concordar com tudo não a deixaria mais forte:\n- Desenvolva o melhor CASO a favor (qual a versão mais forte dela?)\n- Faça o melhor caso CONTRA (a objeção real, não uma fraca de palha)\n- Que premissas ela exige? Quais são frágeis? «O que precisaria ser verdade para isto funcionar?»\n- Pré-mortem: imagine que falhou daqui a um ano — o que deu errado?\n- Como deixá-la mais forte / como testá-la barato antes de apostar?\n- Honestamente: ela é tão boa quanto parece, ou o entusiasmo está mascarando um furo?\n\nNão me poupe para ser agradável — o atrito é o que gera o insight. Se for boa, mostre como blindá-la; se tiver furo, aponte. Atualize IDEIAS.md com o que aprendemos.`
    },
    { id:"L", title:"Destravar (estou empacado)", when:"Empaquei — sem ideias, ou rodando em círculo.",
      fill:"stuck", fillLabel:"Onde travei + o que já tentei",
      body:(p,n)=>`Destravar o pensamento.\n\nONDE TRAVEI:\n${p.stuck||"[Onde empaquei — sem ideias? girando nas mesmas? não consigo decidir? + o que já tentei]"}\n\nDiagnostique e destrave (consultando TEMA/IDEIAS/MAPA):\n- Que TIPO de bloqueio é? (a pergunta mal colocada? medo de julgar e por isso nada flui? excesso de opções e paralisia? estou preso a uma suposição?)\n- Se for falta de ideias: aplique uma técnica de ruptura — inversão (e se eu quisesse o OPOSTO do objetivo?), analogia forçada (como [outro domínio] resolveria?), restrição radical (e se eu só tivesse 1 dia / R$0 / uma frase?)\n- Se for rodar em círculo: aponte a suposição que está me prendendo e proponha largá-la\n- Se for paralisia de decisão: reduza ao próximo passo MENOR e reversível — o que dá para testar barato hoje?\n- Me devolva uma pergunta que reabra o espaço, não uma resposta pronta\n\nO objetivo é fazer o pensamento voltar a fluir — pensar COM você, não por você. Capture o que surgir em IDEIAS.md.`
    },
  ]
};