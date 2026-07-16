NICHES.marketing = {
  anchorDoc:"MARCA.md",
  id:"marketing", label:"Marketing & Conteúdo", icon:"◈", group:"serif", category:"core",
  cardColor:"#f87171", cardTags:["conteúdo","social","newsletter","marca"],
  cardDesc:"Pilares, voz, calendário e distribuição — conteúdo com estratégia, não avulso",
  intro:{
    headline:"Voz consistente, pilares claros, e conteúdo que não vira pilha de posts soltos.",
    lede:"O risco aqui é produzir muito e dizer nada: voz que muda a cada post, tema que pula sem critério, métrica que parece boa mas não move nada. Aqui a marca tem pilares definidos, a voz fica registrada (e consistente entre formatos), o calendário é um documento vivo, e a métrica é a que importa — não a que enche os olhos.",
    ctxBlurb:"<code>MARCA.md</code> fixa posicionamento e pilares · <code>AUDIENCIA.md</code> diz para quem · <code>TOM-E-VOZ.md</code> mantém a voz consistente · <code>PAUTA.md</code> é o calendário vivo.",
    hero:"marketing"
  },
  topbar:[
    {id:"brand", label:"Marca/Cliente", placeholder:"ex: cafe-azul"},
    {id:"channel", label:"Canal principal", type:"select", options:["Instagram","LinkedIn","TikTok","Blog","Newsletter","YouTube","Podcast","Multi-canal"]},
    {id:"phase", label:"Fase", type:"select", options:["Estratégia","Produção","Distribuição","Análise","Campanha ativa"]},
  ],
  behaviors:[
    ["pillars","Ancora tudo nos pilares de conteúdo","Todo conteúdo nasce de um dos 3-5 pilares da marca (os temas que ela possui), não de um impulso solto. Diante de uma ideia de post, identifica a qual pilar serve e à qual dor da audiência responde. Conteúdo sem plano vira coleção de assets aleatórios — o pilar dá direção e autoridade."],
    ["voiceconsist","Mantém a voz consistente (e é do humano)","Antes de escrever, consulta TOM-E-VOZ.md e mantém a voz idêntica entre formatos e canais. A IA é multiplicador, não a dona da voz: o POV, a narrativa e a precisão são do humano. Não padroniza a marca numa voz genérica de IA; sinaliza quando uma sugestão se afasta do tom estabelecido."],
    ["audiencefit","Escreve para a audiência, não para a marca","Parte da dor/desejo da audiência (consulta AUDIENCIA.md), não do que a marca quer dizer de si. O conteúdo conecta antes de converter. Distingue o que a audiência valoriza do que é vaidade interna da marca."],
    ["platformnative","Adapta ao canal, não copia entre eles","Cada plataforma tem formato, ritmo e comportamento próprios. Não joga o mesmo texto em todo canal: adapta tom, tamanho e formato ao nativo de cada um. Sugere repurposing inteligente (uma peça vira várias), não cópia literal."],
    ["metricreal","Distingue métrica de vaidade de métrica que importa","Liga cada conteúdo/campanha a um objetivo no funil (awareness / consideração / decisão / lealdade) e à métrica adequada àquele estágio. Desconfia de número que impressiona mas não move nada (views sem tráfego/lead). Métrica só vale com contexto e ligação ao objetivo — e foca poucas, não dezenas."],
    ["editorial","Mantém o calendário como documento vivo","Toda peça planejada/publicada passa pela PAUTA.md com tema, pilar, formato, canal e status. O calendário previne produção de última hora e garante cadência e consistência. O que foi publicado vira histórico; o que vem fica claro."],
  ],
  builderSection:{
    title:"Estratégia de conteúdo",
    hint:"Marque canais, formatos e tom. Entra nas instruções para o assistente produzir no alvo.",
    type:"chips",
    groups:[
      {label:"Canais", items:["Instagram","LinkedIn","TikTok","X/Twitter","Threads","Blog","Newsletter","YouTube","Podcast","WhatsApp","Facebook","Pinterest"]},
      {label:"Formatos", items:["Posts feed","Stories","Reels/Shorts","Carrosséis","Artigos","Newsletter","Roteiros de vídeo","E-mails","Anúncios","Landing pages","Threads/X"]},
      {label:"Tom da marca", items:["Formal","Próximo","Especialista","Inspiracional","Irreverente","Provocador","Educativo","Aspiracional","Direto"]},
      {label:"Objetivo principal", items:["Awareness/alcance","Engajamento","Geração de leads","Conversão/vendas","Autoridade/thought leadership","Comunidade/lealdade"]},
    ],
    other:false
  },
  conventions:[
    "Todo conteúdo serve a um dos 3-5 pilares da marca e a uma dor da audiência — nada de post solto sem encaixe.",
    "A voz vive em TOM-E-VOZ.md e é idêntica entre formatos/canais; a IA não vira dona da voz (POV e precisão são do humano).",
    "Conteúdo é adaptado ao nativo de cada canal; repurposing inteligente, não cópia literal entre plataformas.",
    "Cada peça/campanha tem um objetivo no funil e a métrica adequada ao estágio — vanity metric não conta como sucesso.",
    "A PAUTA.md é documento vivo: tema, pilar, formato, canal, status; o publicado vira histórico.",
    "Afirmação sobre resultado (o que funcionou) é checada contra dado real, não suposta."
  ],
  triggersExtra:[
    ["Pauta/calendário planejado ou revisto", "Entrega PAUTA.md completo (temas, pilares, formatos, datas, status)."],
    ["Pilar de conteúdo ou posicionamento definido", "Entrega MARCA.md completo atualizado."],
    ["Voz calibrada (exemplo aprovado)", "Entrega TOM-E-VOZ.md completo com o novo exemplo."],
    ["Persona/segmento de audiência revisto", "Entrega AUDIENCIA.md completo."],
    ["Campanha ou análise de métrica fechada", "Entrega STATUS.md (e RESULTADOS, se usa o arquivo)."],
  ],
  contextFiles:[
    {name:"MARCA.md", cat:"ctx", role:"Posicionamento, valores, diferenciais e os 3-5 pilares de conteúdo. Estável.", content:`# MARCA.md — [Nome]

> Arquivo **estável**. O assistente lê primeiro para alinhar todo conteúdo ao posicionamento e aos pilares.
> Muda pouco: só em reposicionamento real.

---

## Posicionamento
[O que a marca é e para quem, em 1-2 frases. O lugar que ocupa na mente da audiência.]

## Proposta de valor
- **O que oferece:** [produto/serviço/ideia.]
- **Para quem:** [o público central.]
- **Por que importa:** [a dor que resolve / o desejo que atende.]
- **Diferencial:** [o que a separa dos concorrentes.]

## Pilares de conteúdo (3-5)
> Os temas que a marca POSSUI — "estacas fincadas no chão". Cada peça de conteúdo nasce de um deles.
1. **[Pilar 1]** — [do que trata + a qual dor da audiência responde + por que a marca tem autoridade nele.]
2. **[Pilar 2]** — [...]
3. **[Pilar 3]** — [...]

## Valores e personalidade
- [O que a marca defende; traços de personalidade que guiam o tom.]

## O que a marca NÃO é / não faz
> Limites de assunto e postura — evita conteúdo fora de caráter.
- [Ex.: não entra em política; não faz humor às custas de ninguém.]

## Concorrentes / referências
- [Quem mais fala com esta audiência; o que fazem bem; onde há espaço para a marca se destacar.]
`},
    {name:"AUDIENCIA.md", cat:"ctx", role:"Personas, suas dores/desejos, canais e a linguagem que ressoa. Estável.", content:`# AUDIÊNCIA.md — Quem Ouve a Marca

> Arquivo **estável**. O assistente consulta para escrever PARA a audiência (a partir da dor dela), não para a marca.
> Revise trimestralmente — o comportamento da audiência evolui.

---

## [Persona / segmento] — [nome curto]
- **Quem é:** [contexto, momento de vida/trabalho. Demografia só se importar.]
- **Dor / desejo principal:** [o que tira o sono / o que aspira. É daqui que o conteúdo parte.]
- **O que consome:** [que conteúdo já segue, de quem, em que formato.]
- **Onde está:** [canais e horários onde realmente se engaja.]
- **Linguagem que ressoa:** [palavras, referências, tom que conectam — e o que afasta.]
- **Gatilho de ação:** [o que a faz parar de rolar / clicar / compartilhar.]
- **Objeções:** [o que a impede de confiar/comprar.]

---

## [Próxima persona]
[...]

---

## Para quem NÃO é
- **[Quem]** — [por que não é o alvo; evita diluir a mensagem tentando agradar todos.]
`},
    {name:"TOM-E-VOZ.md", cat:"ctx", role:"Guia de linguagem: como a marca soa, exemplos bons e ruins, palavras e proibições. Estável.", content:`# TOM-E-VOZ.md — Guia de Linguagem

> Arquivo **estável** e central. Garante que a marca soe igual em todo canal e formato.
> O assistente consulta antes de escrever qualquer peça — a voz é da marca/humano, não uma voz genérica de IA.

---

## A voz em uma frase
[Se a marca fosse uma pessoa falando, como soaria? Ex.: "uma amiga especialista que explica sem te fazer sentir burro".]

## Eixos de tom
> Onde a marca fica em cada espectro (ajuste conforme o caso/canal).
- Formal ↔ Casual: [onde fica]
- Sério ↔ Bem-humorado: [onde fica]
- Técnico ↔ Acessível: [onde fica]
- Contido ↔ Entusiasmado: [onde fica]

## Exemplos APROVADOS (a referência viva)
> Trechos reais que soam exatamente como a marca deve soar.
\`\`\`
[Exemplo 1 — escrito ou aprovado.]
\`\`\`
\`\`\`
[Exemplo 2.]
\`\`\`

## Exemplos do que EVITAR
> O que NÃO soa como a marca — igualmente útil.
- ❌ [Frase fora de tom] → ✅ [como ficaria na voz da marca.]

## Vocabulário
- **Palavras que usamos:** [termos da marca, jargão aceito.]
- **Palavras que evitamos:** [clichês, termos proibidos, jargão corporativo vazio.]
- **Como nos referimos a nós / ao produto / ao cliente:** [convenções de nomenclatura.]

## Ajustes por canal
> Como a voz se adapta ao nativo de cada plataforma (sem deixar de ser a mesma marca).
- **[Canal]:** [o que muda — tamanho, formalidade, uso de emoji, etc.]
`},
    {name:"PAUTA.md", cat:"ctx", role:"Calendário editorial vivo: temas, pilares, formatos, datas, status. Rolante para o período ativo.", content:`# PAUTA.md — Calendário Editorial

> **Documento vivo** (rolante para o período ativo). Previne produção de última hora e garante cadência e consistência.
> O que foi publicado desce para o histórico; o que vem fica no topo. O assistente consulta para saber o que está no ar e o que falta.

---

## Período: [mês/semana atual]
**Cadência alvo:** [ex.: 3 posts/semana no IG + 1 newsletter/semana.]

| Data | Tema | Pilar | Formato | Canal | Status |
|---|---|---|---|---|---|
| [dd/mm] | [tema da peça] | [qual pilar] | [carrossel/reel/artigo...] | [canal] | [ideia / produção / agendado / no ar] |
| | | | | | |

## Campanhas / séries em curso
- **[Campanha/série]** — [objetivo + peças que a compõem + período.]

## Banco de temas (próximos, sem data ainda)
> Ideias de conteúdo a encaixar. Cada uma ligada a um pilar.
- [Tema — pilar — formato sugerido.]

## Datas/ganchos relevantes
- [Sazonalidades, lançamentos, datas do setor a aproveitar.]

---

## Histórico (publicado)
> Desce para cá depois de no ar — referência do que já foi feito (evita repetir, ajuda a medir).
- **[dd/mm]** — [tema] — [canal] — [resultado, se medido → RESULTADOS.md].
`},
    {name:"STATUS.md", cat:"ctx", role:"Estado atual: campanha ativa, conteúdo urgente, próximos passos. Rolante.", content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde a operação de conteúdo está.
> Item resolvido sai daqui (vira histórico na PAUTA ou nota no log).

---

## Fase
[Estratégia / Produção / Distribuição / Análise / Campanha ativa]

## 🎯 Em curso agora
- [O que está sendo produzido/distribuído + para quando.]

## ⏰ Urgente / com prazo
- [Conteúdo com data marcada que precisa sair.]

## 📊 Métricas em observação
> Poucas e ligadas a objetivo — não um painel de vaidade.
- **[Métrica]** ([estágio do funil]): [valor/tendência + o que ela informa.]

## ⏳ Aguardando
- [Aprovação do cliente; material/foto; decisão de pauta.]

## ⚠️ Riscos / atenção
- [Cadência em risco; campanha sem performance; tema sensível.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    {name:"DECISIONS.md", cat:"ctx", role:"Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.", content:`# DECISIONS.md — Decisões e o porquê

> Cresce devagar. Guarda o PORQUÊ — o que não se deduz do resto.
> Duas naturezas: **DEC** (decisões) e **FIX** (problemas graves resolvidos, para não repetir).
> Append-only: não reescreva entradas antigas; se uma for substituída, marque «SUPERADA por DEC-N» e adicione a nova.

---

## DEC-[N] — [título curto]
**Data:** AAAA-MM-DD · **Status:** aceita | superada por DEC-X

### Contexto
[Que problema ou pergunta forçou esta decisão.]

### Decisão
[O que foi decidido, em uma ou duas frases.]

### Alternativas consideradas
- **[Alternativa]** — [por que não.]

---

## FIX-[N] — [problema grave resolvido]
**Sintoma:** [o que se via.] · **Causa raiz:** [o porquê.] · **Solução:** [o que resolveu.] · **Lição:** [como evitar de novo.]
`},
    {name:"RESULTADOS.md", cat:"opcional", role:"OPCIONAL — desempenho de conteúdo e campanhas, por funil. Use quando há medição contínua.", content:`# RESULTADOS.md — Desempenho

> **Opcional.** Use quando a operação mede resultado de forma contínua. Liga conteúdo/campanha a métricas por estágio do funil, distinguindo o que importa do que é vaidade.
> Serve para decidir o que repetir, ajustar ou cortar — com dado, não com achismo.

---

## Métricas-norte (poucas, por funil)
| Estágio | Métrica que importa | Por que esta (não vaidade) |
|---|---|---|
| Awareness | [ex.: alcance qualificado] | [liga a quê] |
| Consideração | [ex.: cliques/tempo na página] | [...] |
| Decisão | [ex.: conversões/leads] | [...] |
| Lealdade | [ex.: recorrência/churn] | [...] |

## Desempenho por peça/campanha
### [Peça/campanha] — [data]
- **Objetivo (funil):** [estágio + o que se queria.]
- **Métrica observada:** [número + comparação com o esperado/baseline.]
- **Leitura:** [o que funcionou/não, com contexto — cuidado com correlação ≠ causa.]
- **Decisão:** [repetir / ajustar / cortar.]

## Aprendizados consolidados
> O que já sabemos que funciona com esta audiência — para não re-testar.
- [Aprendizado — de onde veio.]
`},
    {name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.", content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Marca]

## Foco da sessão
[Estratégia, produção de peças, planejamento de pauta, análise de métrica.]

## Produzido / planejado
- [Peças criadas ou pautadas → PAUTA.md (com pilar e canal).]

## Estratégia / pilares
- [Decisão sobre pilar, posicionamento, audiência → MARCA/AUDIENCIA.]

## Voz
- [Exemplo aprovado que vale virar referência → TOM-E-VOZ.md.]

## Métricas
- [O que se observou; leitura honesta (vanity vs. real) → RESULTADOS.]

## Onde parei
[Ponto exato + próximo passo. Alimenta o STATUS.]
`}
  ],
  outputs:[
    {key:"status", name:"STATUS.md", role:"completo: em curso, urgências, métricas observadas", active:true},
    {key:"pauta", name:"PAUTA.md", role:"completo, se a pauta/calendário mudou", active:true},
    {key:"marca", name:"MARCA.md", role:"completo, se pilar/posicionamento mudou", active:false},
    {key:"tomvoz", name:"TOM-E-VOZ.md", role:"completo, se a voz foi calibrada", active:false},
    {key:"resultados", name:"RESULTADOS.md", role:"completo, se houve análise de desempenho (quando usa o arquivo)", active:false},
    {key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true},
  ],
  promptsExtra:[
    { id:"G", title:"Definir estratégia e pilares", when:"Começo de operação de conteúdo — estabelecer pilares e direção antes de produzir.",
      fill:"context", fillLabel:"A marca, o que vende, para quem, e o que já existe (cole o que tiver)",
      body:(p,n)=>`Estratégia de conteúdo.\n\nCONTEXTO:\n${p.context||"[A marca + o que vende + para quem + canais atuais + o que já existe]"}\n\nEntregue (arquivos completos):\n- MARCA.md: posicionamento, proposta de valor, e os 3-5 PILARES de conteúdo (cada um ligado a uma dor da audiência e à autoridade da marca) + o que a marca NÃO faz\n- AUDIENCIA.md: as personas com dor/desejo, onde estão, linguagem que ressoa\n- Recomendação de cadência realista por canal (não prometa volume insustentável)\n- Perguntas críticas a responder antes de produzir (o que falta saber sobre marca/audiência)\n\nResista a pular para "ideias de post" antes dos pilares estarem claros — conteúdo sem plano vira pilha de assets soltos.`
    },
    { id:"H", title:"Gerar pauta / calendário", when:"Tenho os pilares e quero planejar conteúdo do período.",
      fill:"period", fillLabel:"Período + canais + cadência desejada + ganchos/datas (ou: use MARCA.md)",
      body:(p,n)=>`Planejar a pauta.\n\nPARÂMETROS:\n${p.period||"[Período (ex.: próximo mês) + canais + cadência (ex.: 3/semana) + datas/lançamentos relevantes]"}\n\nUsando MARCA.md (pilares) e AUDIENCIA.md:\n- Distribua temas pelos pilares (equilíbrio — nenhum pilar dominando sem razão)\n- Para cada peça: tema, pilar, formato nativo do canal, canal, e o objetivo no funil\n- Aproveite ganchos/datas relevantes; encadeie séries quando fizer sentido\n- Sugira repurposing: uma peça forte que vira várias (ex.: artigo → carrossel → reel → e-mail)\n- Garanta cadência sustentável, não um plano que ninguém consegue manter\n\nEntregue PAUTA.md completo com a tabela (data/tema/pilar/formato/canal/status). Marque o que é prioridade.`
    },
    { id:"I", title:"Escrever uma peça (na voz da marca)", when:"Vou produzir um conteúdo específico e quero no tom certo, no formato do canal.",
      fill:"brief", fillLabel:"O que escrever: tema + formato + canal + objetivo (ou: pegue da PAUTA.md)",
      body:(p,n)=>`Escrever uma peça de conteúdo.\n\nBRIEF:\n${p.brief||"[Tema + formato + canal + objetivo no funil. Ou: 'a próxima peça da PAUTA.md']"}\n\nConsultando TOM-E-VOZ.md (voz), AUDIENCIA.md (dor/linguagem) e MARCA.md (pilar):\n- Parta da dor/desejo da audiência, não do que a marca quer dizer de si\n- Escreva no formato NATIVO do canal (tamanho, ritmo, estrutura — carrossel ≠ artigo ≠ reel)\n- Mantenha a voz idêntica ao guia; se eu pedir, ofereça 2 variações de abertura/gancho\n- Inclua o CTA adequado ao objetivo no funil (awareness não pede venda dura)\n- Lembre: a voz é da marca; eu reviso e aprovo. Você multiplica, não decide o POV\n\nEntregue a peça pronta para revisão + (se útil) a versão repurposed para outro canal.`
    },
    { id:"J", title:"Repurposing (uma peça vira várias)", when:"Tenho um conteúdo bom e quero multiplicá-lo entre formatos/canais.",
      fill:"piece", fillLabel:"A peça original (cole) + para quais canais/formatos quer adaptar",
      body:(p,n)=>`Repurposing de conteúdo.\n\nPEÇA ORIGINAL:\n${p.piece||"[Cole o conteúdo original + os canais/formatos de destino]"}\n\nAdapte de forma inteligente (não cópia literal):\n- Extraia o núcleo (a ideia/insight central que vale repetir)\n- Para cada canal de destino, reformule no formato nativo (ex.: artigo → carrossel de N slides → roteiro de reel → e-mail → thread)\n- Ajuste o tom ao canal mantendo a voz da marca (TOM-E-VOZ.md)\n- Varie o gancho/abertura por canal — o mesmo gancho não funciona em todo lugar\n- Sugira ordem/cadência de publicação (qual sai primeiro, intervalo)\n\nEntregue as versões adaptadas, prontas para revisão. Atualize a PAUTA.md se virarem peças agendadas.`
    },
    { id:"K", title:"Analisar desempenho (sem se enganar com vaidade)", when:"Tenho números de conteúdo/campanha e quero interpretar com honestidade.",
      fill:"data", fillLabel:"As métricas + o objetivo da peça/campanha + o que esperava",
      body:(p,n)=>`Análise de desempenho.\n\nDADOS E OBJETIVO:\n${p.data||"[As métricas observadas + o objetivo da peça/campanha (estágio do funil) + o que esperava/baseline]"}\n\nInterprete com rigor:\n- A métrica é adequada ao objetivo do funil? (awareness mede alcance; decisão mede conversão)\n- O que é VANITY aqui (impressiona mas não move nada) vs. o que é ACIONÁVEL (liga a resultado)?\n- O número tem contexto? (comparado a quê — baseline, período anterior, benchmark)\n- Explicações alternativas para o movimento (sazonalidade, mudança de algoritmo, amostra pequena)?\n- Cuidado: correlação ≠ causa\n\nRecomende: repetir, ajustar ou cortar — com o porquê. Foque em poucas métricas que importam, não num painel inteiro. Se há decisão, aponte o que registrar em RESULTADOS.md.`
    },
    { id:"L", title:"Calibrar tom e voz", when:"Quero definir/afinar como a marca soa, ou checar se uma peça está na voz.",
      fill:"samples", fillLabel:"Exemplos do que soa certo/errado, ou a peça a checar",
      body:(p,n)=>`Calibragem de voz.\n\nMATERIAL:\n${p.samples||"[Exemplos de texto que soam como a marca (e que não soam), ou a peça a verificar]"}\n\nFaça (consultando TOM-E-VOZ.md se já existir):\n- Se é para DEFINIR: extraia dos exemplos os eixos de tom (formal↔casual, sério↔bem-humorado, etc.), o vocabulário a usar/evitar, e escreva 2-3 exemplos-âncora aprovados\n- Se é para CHECAR uma peça: aponte onde foge do tom, onde usa palavra da lista de evitar, e ofereça ajustes na direção da voz da marca (não para uma voz genérica)\n- Sinalize diferenças de voz necessárias por canal (sem deixar de ser a mesma marca)\n\nLembre: a voz é decisão do humano/marca; você ajuda a articulá-la e mantê-la. Entregue TOM-E-VOZ.md completo (atualizado ou novo).`
    },
  ]
};