NICHES.business = {
  id:"business", label:"Negócios", icon:"📊", group:"serif", category:"core",
  cardColor:"#38bdf8", cardTags:["estratégia","finanças","decisão","operação"],
  cardDesc:"Estratégia, unit economics e decisões — com premissa explícita e contraponto",
  intro:{
    headline:"Decisão de negócio com a premissa na mesa e o número honesto.",
    lede:"O risco aqui é decidir por chavão e por número que ninguém checou: a projeção otimista que vira plano, a métrica que impressiona mas esconde a queima de caixa, o framework aplicado como receita. Aqui cada análise declara suas premissas, o número vem com a conta (ou com o aviso de que é estimativa), e toda recomendação carrega o melhor contra-argumento.",
    ctxBlurb:"<code>CONTEXTO.md</code> fixa empresa e mercado · <code>OBJETIVOS.md</code> traz metas com critério de sucesso · <code>ANALISE.md</code> guarda o raciocínio (e as premissas) · <code>DECISOES.md</code> registra o porquê.",
    hero:"business"
  },
  topbar:[
    { id:"company", label:"Empresa/Projeto", placeholder:"ex: padaria-do-bairro" },
    { id:"escopoSel", label:"Escopo", type:"select",
      options:["Estratégia","Finanças","Operações","Crescimento","Modelo de negócio","Decisão pontual"] },
    { id:"langSel", label:"Idioma do output", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["assumptions","Premissa sempre na mesa","Toda análise, projeção ou recomendação declara as premissas em que se apoia. Não apresenta conclusão como se fosse fato sem mostrar de onde veio. Quando uma premissa é frágil ou não validada, diz isso — e mostra como a conclusão muda se a premissa mudar (sensibilidade)."],
    ["numbercheck","Número com conta, não chutado","Não inventa cifra, percentual ou benchmark. Quando dá um número, mostra a conta ou a fonte; quando é estimativa, rotula como estimativa e dá a faixa. Métrica de mercado que vira base de decisão é verificada por busca antes de afirmar. Confiança não é precisão — um número que soa plausível pode estar errado."],
    ["counterargue","Sempre o contraponto","Toda recomendação vem com o melhor argumento contrário (não uma versão fraca). Se a decisão parece óbvia demais, procura o que está sendo ignorado. Pergunta «o que precisaria ser verdade para esta ser a decisão errada?». Não vende a tese — testa-a."],
    ["firstprinciples","First principles antes de framework","Entende o problema real e a meta antes de aplicar qualquer framework (SWOT, OKR, Canvas, Porter). Framework é lente, não receita — usa o que esclarece e ignora o que só preenche slide. Vários podem ser combinados se cada um agregar; nenhum substitui pensar do zero sobre o caso concreto."],
    ["riskcost","Risco e custo de oportunidade","Toda decisão é avaliada pelo que arrisca E pelo que deixa de fazer (o caminho não escolhido). Aponta o downside e a probabilidade, não só o upside. Em finanças, lembra que as métricas são interdependentes — escalar aquisição com margem/retenção ruins só acelera a queima de caixa."],
    ["strategyfilter","A estratégia é o filtro","Usa os objetivos e a estratégia (OBJETIVOS.md) como crivo de toda decisão: «isto nos aproxima da meta?». Sinaliza quando uma iniciativa atraente não serve à estratégia (distração) ou contradiz uma decisão anterior (DECISOES.md). Foco é dizer não ao que não serve."],
  ],
  builderSection:{
    title:"Enquadramento do negócio",
    hint:"Define setor, tipo de saída e as lentes úteis. Entra nas instruções.",
    items:[
      { kind:"radios", label:"Tipo de negócio", name:"sector", opts:[
        ["startup","Startup"], ["smb","Pequeno/médio negócio"], ["solo","Autônomo/solo"], ["enterprise","Empresa estabelecida"], ["nonprofit","Sem fins lucrativos"], ["ecommerce","E-commerce/varejo"] ] },
      { kind:"radios", label:"Tipo de saída", name:"outtype", opts:[
        ["analysis","Análise/diagnóstico"], ["plan","Plano de ação"], ["model","Modelo financeiro"], ["decision","Apoio a decisão"], ["pitch","Material para terceiros"] ] },
      { kind:"chips", label:"Lentes que valem usar", name:"lenses", opts:[
        ["swot","SWOT"], ["okr","OKRs"], ["canvas","Business Model Canvas"], ["lean","Lean Canvas"], ["porter","5 Forças de Porter"], ["pestle","PESTLE"], ["unit","Unit economics"], ["jtbd","JTBD"], ["bcg","Matriz BCG"], ["ansoff","Ansoff"] ] },
    ]
  },
  conventions:[
    "Toda análise/projeção declara suas premissas; premissa frágil é sinalizada, com a sensibilidade da conclusão.",
    "Número vem com conta ou fonte; estimativa é rotulada como tal (com faixa); benchmark de decisão é verificado antes de afirmar.",
    "Toda recomendação carrega o melhor contra-argumento e o «o que precisaria ser verdade para estar errada».",
    "Framework é lente, não receita: entender o problema vem antes; combinar frameworks só se cada um agregar.",
    "Decisão é avaliada por risco E custo de oportunidade; métricas financeiras são interdependentes.",
    "A estratégia (OBJETIVOS) é o filtro: o que não serve à meta é sinalizado como distração."
  ],
  triggersExtra:[
    ["Decisão de negócio tomada", "Entrega DECISOES.md completo (decisão, premissas, alternativas, contra-argumento, risco)."],
    ["Análise concluída", "Entrega ANALISE.md completo (com premissas e sensibilidade explícitas)."],
    ["Objetivo ou meta definido/revisto", "Entrega OBJETIVOS.md completo (com critério de sucesso/KR)."],
    ["Plano de ação montado/atualizado", "Entrega PLANO.md completo."],
    ["Mudança de contexto (mercado, empresa)", "Entrega CONTEXTO.md completo atualizado."],
  ],
  contextFiles:[
    { name:"CONTEXTO.md", cat:"essencial", role:"Empresa, mercado, momento, modelo de negócio. O pano de fundo. Estável.",
      content:`# CONTEXTO.md — [Empresa / Projeto]

> Arquivo **estável**. O assistente lê primeiro para entender o negócio antes de analisar.
> Muda pouco: só em mudança real de mercado, modelo ou momento.

---

## O negócio
[O que a empresa faz, para quem, como ganha dinheiro. Em 2-4 frases, sem marketing.]

## Modelo de negócio (resumo)
> Os blocos essenciais (à la Business Model Canvas, só o que importa).
- **Segmento de cliente:** [quem paga / quem usa.]
- **Proposta de valor:** [o problema que resolve / por que escolhem isto.]
- **Canais:** [como chega ao cliente.]
- **Fontes de receita:** [como entra dinheiro — recorrente? transacional?]
- **Estrutura de custo:** [os maiores custos; fixo vs. variável.]

## Mercado
- **Tamanho/dinâmica:** [ordem de grandeza + tendência. Marcar o que é estimativa.]
- **Concorrentes / alternativas:** [quem mais resolve isto, incluindo "não fazer nada".]
- **Forças externas relevantes:** [regulação, tecnologia, economia que afetam o negócio — PESTLE só no que importa.]

## Momento atual
- **Estágio:** [ideia / operando / crescendo / maduro / em virada.]
- **Saúde geral:** [como vai o caixa/receita, em uma linha. Detalhe em ANALISE/objetivos.]

## Restrições
- [Limites reais: capital, equipe, tempo, regulação — o que condiciona as decisões.]
`},
    { name:"OBJETIVOS.md", cat:"essencial", role:"Objetivos atuais com critério de sucesso mensurável (OKR). O filtro das decisões. Estável-rolante.",
      content:`# OBJETIVOS.md — Objetivos e Metas

> O **filtro** de toda decisão: serve a algum objetivo daqui? Se não, é distração.
> Objetivos mudam devagar; os números (KR) se atualizam conforme o período.

---

## Objetivo maior (norte)
[A meta de médio prazo que orienta tudo. Onde o negócio quer estar.]

## Objetivos do período (OKR)
> Objetivo qualitativo + 2-4 resultados-chave mensuráveis. KR é número, não tarefa.
### O1 — [objetivo qualitativo, inspirador mas claro]
- **KR1:** [resultado mensurável — métrica + alvo + prazo.]
- **KR2:** [...]
- **KR3:** [...]

### O2 — [...]
- **KR1:** [...]

## Métricas-norte do negócio (poucas, as que importam)
> Os poucos números que dizem se o negócio vai bem. Não um painel de dezenas.
- **[Métrica]:** [valor atual + tendência + por que esta importa.]

## O que decidimos NÃO perseguir agora
> Foco é dizer não. Oportunidades adiadas de propósito (evita dispersão).
- [Iniciativa/mercado — por que fica para depois.]
`},
    { name:"ANALISE.md", cat:"essencial", role:"Análises em andamento, com premissas e sensibilidade explícitas. Cresce.",
      content:`# ANALISE.md — Análises

> Onde mora o RACIOCÍNIO — e, principalmente, as PREMISSAS. **Cresce.**
> O assistente registra aqui cada análise para que premissas e conclusões fiquem rastreáveis (e revisáveis se a premissa mudar).

---

## [Título da análise] — [data]
### Pergunta
[O que esta análise tenta responder / qual decisão ela informa.]

### Premissas
> A parte mais importante. Liste tudo que está assumindo, marcando o grau de confiança.
- [Premissa — validada? estimativa? de onde veio?]

### Análise
[O raciocínio. Números com a conta ou fonte. Estimativas rotuladas, com faixa.]

### Sensibilidade
> Como a conclusão muda se as premissas-chave mudarem (otimista / base / pessimista).
- [Se a premissa X for Y em vez de Z → a conclusão vira...]

### Conclusão
[O que a análise indica — com a confiança proporcional à qualidade das premissas.]

### Contraponto
[O melhor argumento contra esta conclusão; o que precisaria ser verdade para ela estar errada.]

---

## [Próxima análise]
[...]
`},
    { name:"DECISOES.md", cat:"essencial", role:"Decisões de negócio com premissas, alternativas, contraponto e risco. Cresce devagar.",
      content:`# DECISOES.md — Decisões de Negócio

> Arquivo que **cresce devagar**. Guarda o PORQUÊ das decisões — evita rediscutir e mostra com que premissas algo foi decidido (úteis para revisar quando a realidade muda).

---

## DEC-[N] — [a decisão, em uma linha]
**Data:** AAAA-MM-DD · **Status:** ativa | revista por DEC-X

### Contexto / pergunta
[O que forçou esta decisão; qual objetivo (OBJETIVOS.md) ela serve.]

### Decisão
[O que foi decidido, direto.]

### Premissas em que se apoia
[As suposições-chave. Se uma cair, a decisão deve ser revista.]

### Alternativas consideradas
- **[Alternativa]** — [por que não; o que se abriu mão (custo de oportunidade).]

### Risco e contraponto
[O principal risco + probabilidade; o melhor argumento contra; o que monitorar para saber se erramos.]

### Como saberemos se deu certo
[A métrica/sinal que confirma ou refuta a decisão, e em quanto tempo.]

---

## DEC-[N+1] — [...]
[...]
`},
    { name:"STATUS.md", cat:"rolante", role:"Onde o negócio está agora: foco, números-chave, decisões pendentes, próximos passos. Rolante.",
      content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Item resolvido sai daqui (vira decisão em DECISOES ou nota no log).

---

## Foco atual
[Estratégia / Finanças / Operações / Crescimento / Modelo / Decisão pontual] — [o tema do momento.]

## 📊 Números-chave agora
> Poucos, os que importam. Marcar estimativa vs. real.
- **[Métrica]:** [valor + tendência + leitura curta.]

## 🔍 Em análise
- [Análise em curso → ANALISE.md.]

## ⚖️ Decisões pendentes
- [Decisão a tomar + o que falta para decidir (qual dado/premissa validar).]

## ⏳ Aguardando
- [Informação, aprovação, recurso — desde quando.]

## ⚠️ Riscos / atenção
- [O que pode dar errado e merece olho; premissa frágil que sustenta algo importante.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    { name:"MODELO-FINANCEIRO.md", cat:"opcional", role:"OPCIONAL — unit economics, projeções, runway. Use quando o negócio precisa modelar números com rigor.",
      content:`# MODELO-FINANCEIRO.md — Unit Economics e Projeções

> **Opcional**, mas valioso quando há decisão financeira. Reúne os poucos números que dizem se o modelo se sustenta.
> Regra de ouro: clareza acima de sofisticação; sempre declarar as premissas; poucos números que importam, não dezenas.

---

## Premissas do modelo
> Tudo que sustenta os números abaixo. Se mudar aqui, muda tudo.
- [Premissa — valor — validada/estimada — fonte.]

## Unit economics (por cliente/unidade)
| Métrica | Valor | Como foi calculado / fonte |
|---|---|---|
| Preço médio (ticket) | [...] | [...] |
| Custo por unidade (COGS) | [...] | [...] |
| Margem de contribuição | [...] | [preço − custo variável] |
| CAC (custo de aquisição) | [...] | [gasto ÷ clientes adquiridos] |
| LTV (valor no tempo) | [...] | [margem × tempo de vida] |
| LTV : CAC | [...] | [saudável ≈ 3:1] |
| Payback do CAC | [...] meses | [tão importante quanto a razão] |
| Churn / retenção | [...] | [...] |

> Lembrete: as métricas são interdependentes. LTV:CAC bom não salva se o payback é longo demais ou a retenção é ruim.

## Visão de caixa
- **Receita (período):** [valor / projeção — base/otimista/pessimista.]
- **Custos (período):** [fixos + variáveis.]
- **Burn mensal (se aplicável):** [quanto queima por mês.]
- **Runway:** [meses de caixa restantes ao ritmo atual.]

## Cenários (sensibilidade)
- **Base:** [premissas centrais → resultado.]
- **Otimista:** [o que muda → resultado.]
- **Pessimista:** [o que muda → resultado; este é o que importa para sobreviver.]

## A história por trás dos números
> Em 3-4 frases: o que estes números contam sobre a saúde e o futuro do negócio.
[...]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Empresa]

## Foco da sessão
[Análise, decisão, modelagem financeira, planejamento, diagnóstico.]

## Análises feitas
- [O que foi analisado → ANALISE.md. Premissas-chave que ficaram registradas.]

## Decisões
- [O que virou DEC em DECISOES.md (com premissas e contraponto).]

## Números
- [Métricas calculadas/atualizadas → MODELO-FINANCEIRO ou STATUS. Marcar estimativa vs. real.]

## Objetivos
- [Algum objetivo/KR mudou → OBJETIVOS.md.]

## Riscos / premissas frágeis
- [O que precisa ser validado; suposição que sustenta algo importante.]

## Onde parei
[Ponto exato + próximo passo. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: foco, números-chave, decisões pendentes", active:true },
    { key:"decisoes", name:"DECISOES.md", role:"completo, se houve decisão (com premissas, contraponto, risco)", active:true },
    { key:"analise", name:"ANALISE.md", role:"completo, se uma análise avançou (com premissas e sensibilidade)", active:true },
    { key:"objetivos", name:"OBJETIVOS.md", role:"completo, se um objetivo/KR mudou", active:false },
    { key:"modelo", name:"MODELO-FINANCEIRO.md", role:"completo, se houve modelagem de números (quando usa o arquivo)", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Diagnosticar uma situação", when:"Quero entender onde o negócio está antes de decidir o que fazer.",
      fill:"situation", fillLabel:"A situação + os dados que você tem (cole números, contexto)",
      body:(p,n)=>`Diagnóstico de negócio.\n\nSITUAÇÃO:\n${p.situation||"[A situação + dados disponíveis: receita, custos, mercado, o que está acontecendo]"}\n\nConsultando CONTEXTO.md e OBJETIVOS.md, faça um diagnóstico honesto:\n- Qual é o problema/oportunidade REAL (first principles), não o sintoma aparente\n- O que os números dizem — e o que eles NÃO dizem; marque o que é estimativa\n- Que lente(s) ajuda(m) aqui (SWOT, unit economics, 5 Forças...) — use só o que esclarece\n- Premissas que eu estou assumindo sem perceber\n- O contraponto: e se a leitura óbvia estiver errada?\n\nEntregue ANALISE.md completo com premissas e sensibilidade explícitas. Termine com as 1-2 perguntas que mais mudariam o diagnóstico se respondidas.`
    },
    { id:"H", title:"Modelar números / unit economics", when:"Preciso calcular se a conta fecha (margem, CAC/LTV, runway).",
      fill:"numbers", fillLabel:"Os números que você tem + o que quer descobrir",
      body:(p,n)=>`Modelagem de números.\n\nDADOS E PERGUNTA:\n${p.numbers||"[Os números que tenho — preço, custos, clientes, gastos — + o que quero descobrir: margem? a conta fecha? quanto de runway?]"}\n\nModele com clareza (não sofisticação):\n- DECLARE as premissas primeiro; marque cada uma como validada ou estimada\n- Mostre a CONTA de cada métrica (não só o resultado): margem de contribuição, CAC, LTV, LTV:CAC, payback, runway — o que for aplicável\n- Lembre da interdependência: LTV:CAC bom não salva payback longo ou churn alto\n- Faça 3 cenários (base/otimista/pessimista) — o pessimista é o que importa para sobreviver\n- Conte a HISTÓRIA por trás dos números em 3-4 frases\n\nNão invente cifra que falta — peça ou estime com faixa rotulada. Entregue MODELO-FINANCEIRO.md completo.`
    },
    { id:"I", title:"Avaliar uma decisão (com contraponto)", when:"Tenho uma decisão a tomar e quero pensá-la sem me enganar.",
      fill:"decision", fillLabel:"A decisão em jogo + as opções + o que está em jogo",
      body:(p,n)=>`Avaliação de decisão.\n\nDECISÃO:\n${p.decision||"[A decisão + as opções na mesa + o que está em jogo (custo, risco, prazo)]"}\n\nAjude a decidir com honestidade, consultando OBJETIVOS (a estratégia é o filtro) e DECISOES (alguma decisão anterior restringe esta?):\n- Reformule a decisão real e o que ela serve (qual objetivo)\n- Para cada opção: prós, contras, e o CUSTO DE OPORTUNIDADE (o que se abre mão)\n- Premissas que cada caminho assume\n- Risco de cada opção: downside + probabilidade, não só upside\n- O melhor CONTRA-ARGUMENTO à opção que parece vencer; «o que precisaria ser verdade para ela estar errada?»\n- Recomendação, com a confiança proporcional à evidência\n\nEntregue DECISOES.md completo (nova DEC-N com premissas, contraponto e o sinal que dirá se acertamos).`
    },
    { id:"J", title:"Planejar (do objetivo à ação)", when:"Tenho um objetivo e preciso de um plano para chegar lá.",
      fill:"goal", fillLabel:"O objetivo + o prazo + os recursos disponíveis",
      body:(p,n)=>`Plano de ação.\n\nOBJETIVO:\n${p.goal||"[O objetivo + prazo + recursos (capital, equipe, tempo) disponíveis]"}\n\nMonte um plano realista, ancorado em OBJETIVOS.md e CONTEXTO.md (restrições):\n- Traduza o objetivo em resultados-chave mensuráveis (se ainda não há)\n- Os poucos movimentos que mais impactam o objetivo (não uma lista de 30 itens)\n- Sequência e dependências: o que precisa vir antes do quê (cuidado: escalar antes de consertar o fundamento queima caixa)\n- Recursos x restrições: o plano cabe no que temos?\n- Riscos do plano e os sinais de alerta a monitorar\n- O que deliberadamente fica de fora (foco)\n\nEntregue PLANO.md completo. Marque as premissas do plano e o que o derrubaria.`
    },
    { id:"K", title:"Aplicar uma lente / framework", when:"Quero analisar o negócio por um framework específico (SWOT, Canvas, Porter...).",
      fill:"frame", fillLabel:"Qual framework + o foco da análise",
      body:(p,n)=>`Análise por framework.\n\nFRAMEWORK E FOCO:\n${p.frame||"[Qual lente: SWOT / Business Model Canvas / 5 Forças / PESTLE / etc. + o que quer enxergar com ela]"}\n\nAplique a lente com critério (lente, não receita), usando CONTEXTO.md:\n- Primeiro: o framework é mesmo o certo para esta pergunta? Se outro servir melhor, diga\n- Preencha só o que tem substância — não force caixas vazias para "completar o slide"\n- Para cada elemento, baseie em fato/dado (marque estimativa); nada de achismo genérico\n- Extraia os INSIGHTS acionáveis (o framework é meio, não fim): o que isto muda na decisão?\n- Combine com outra lente só se agregar\n\nEntregue ANALISE.md completo. Termine com "o que esta análise nos faz fazer diferente".`
    },
    { id:"L", title:"Pensar cenários (e o que pode dar errado)", when:"Quero me preparar para futuros diferentes antes de me comprometer.",
      fill:"context", fillLabel:"A decisão/aposta + as incertezas que mais preocupam",
      body:(p,n)=>`Planejamento de cenários.\n\nCONTEXTO:\n${p.context||"[A decisão/aposta + as incertezas que mais preocupam (mercado, custo, demanda, concorrência)]"}\n\nExplore os futuros possíveis:\n- Identifique as 2-3 incertezas-chave que mais afetam o resultado\n- Monte cenários (base / otimista / pessimista, ou por eixos de incerteza) — descreva cada um e o que o dispara\n- Para cada cenário: o que aconteceria com o negócio e o que exigiria de nós\n- Movimentos «no-regret» (que valem em qualquer cenário) vs. apostas condicionais\n- Sinais antecipados a monitorar (o que indicaria que estamos indo para o cenário ruim)\n- O downside máximo: dá para sobreviver a ele? Como limitar?\n\nFoque no pessimista tanto quanto no provável — sobreviver vem antes de otimizar. Aponte o que registrar em ANALISE/DECISOES.`
    },
  ]
};