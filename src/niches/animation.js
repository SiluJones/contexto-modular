NICHES.animation = {
  id:"animation", label:"Animação", icon:"🎬", group:"serif", category:"creative",
  cardColor:"#818cf8", cardTags:["curta","série","motion"],
  cardDesc:"Roteiro, storyboard, princípios e produção — da ideia ao timing que dá vida",
  intro:{
    headline:"Da ideia ao movimento que dá vida, com o timing travado antes de animar.",
    lede:"O risco aqui é duplo: perder a coerência (o personagem que muda de design, o arco que se contradiz) e — o que mais custa em animação — descobrir um problema de ritmo só depois de animar, quando refazer é caríssimo. Aqui a história e o estilo ficam coerentes, o timing é resolvido no storyboard e no animatic (antes da produção cara), e o movimento se apoia nos princípios que dão peso e vida.",
    ctxBlurb:"<code>PROJETO.md</code> fixa premissa, mundo e estilo · <code>PERSONAGENS.md</code> guarda voz e design · <code>ROTEIROS.md</code> traz história e estrutura · <code>PRODUCAO.md</code> protege o escopo e o pipeline.",
    hero:"animation"
  },
  topbar:[
    { id:"project", label:"Projeto", placeholder:"ex: o-relogio-de-areia" },
    { id:"formatSel", label:"Formato", type:"select",
      options:["Curta-metragem","Série/episódios","Longa","Clipe musical","Motion graphics","Vinheta/comercial","Conteúdo web/social","Game cutscene"] },
    { id:"tecnSel", label:"Técnica", type:"select",
      options:["2D quadro a quadro","2D rigging/cutout","3D","Stop-motion","Pixel/limitada","Mista","Indefinida"] },
    { id:"langSel", label:"Idioma", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["continuity_memory","Continuidade tem memória","Antes de afirmar fato da história, do mundo ou de um personagem, consulta PROJETO/PERSONAGENS/ROTEIROS. Não contradiz o estabelecido (design, arco, o que já aconteceu). O que surge e vinga vira cânone registrado. Numa série, a continuidade entre episódios é o que sustenta o todo."],
    ["principles_craft","Os princípios de animação são o ofício","Pensa movimento pelos 12 princípios (squash & stretch, antecipação, staging, ease in/out, arcos, follow-through, timing, exagero, apelo...). Eles dão peso, vida e clareza — e ignorá-los é dos erros que mais estragam animação. Usa com MODERAÇÃO (exagero demais vira cartunesco que distrai); o princípio serve à intenção da cena, não a si mesmo."],
    ["timing_before_prod","Trava o timing antes da produção cara","Defende resolver ritmo e staging cedo — no storyboard e no ANIMATIC — onde corrigir custa pouco. Animar é caro em tempo; descobrir um problema de pacing depois de animado é o erro mais doloroso. Indica câmera, movimento e timing aproximado já no board. O animatic é a ponte: a primeira impressão do ritmo antes do trabalho pesado."],
    ["voice_per_char","Voz e design por personagem","Cada personagem tem voz/fala consistente e um design coerente (consulta PERSONAGENS). Silhueta legível que comunica a personalidade (design simples mas individual). O assistente mantém ambos estáveis entre cenas/episódios e sinaliza quando algo foge."],
    ["arc_episode_series","Arco do episódio E arco da série","Em formato episódico, cuida dos dois níveis: cada episódio satisfaz por si E faz avançar o arco maior. Liga os ganchos pessoais dos personagens à trama. Sinaliza quando um episódio não fecha sozinho ou não contribui para o todo."],
    ["show_dont_tell","Mostre em movimento, não conte","Animação conta pela imagem e pelo movimento — uma ação, uma expressão, um gesto dizem mais que diálogo expositivo. O assistente busca a solução visual antes da verbal. A emoção aparece na atuação (timing, pose, olhar), não num personagem explicando o que sente."],
    ["creator_animates","Orienta e estrutura; o animador executa","O assistente não anima nem desenha os quadros — orienta princípios, estrutura, roteiro e pipeline, e critica o que o criador descreve. Levanta opções e o porquê; a execução e o gosto visual são de quem cria. Para o julgamento de 'ficou fluido/com vida' — que se vê no movimento — dá a leitura técnica e devolve a decisão."],
  ],
  builderSection:{
    title:"O projeto de animação",
    hint:"Define o enquadramento. Entra nas instruções para o assistente respeitar formato, técnica e escopo.",
    items:[
      { kind:"radios", label:"Fase", name:"phase", opts:[
        ["concept","Conceito/roteiro"], ["preprod","Pré-produção (board/animatic)"], ["production","Produção (animando)"], ["post","Pós (som/edição)"], ["series_run","Série em andamento"] ] },
      { kind:"radios", label:"Escala realista", name:"scale", opts:[
        ["solo","Solo"], ["duo","Dupla"], ["small_team","Time pequeno"], ["hobby","Hobby/tempo livre"] ] },
      { kind:"chips", label:"Tom dominante", name:"tone", opts:[
        ["comedy","Comédia"], ["drama","Drama"], ["action","Ação"], ["poetic","Poético/lírico"], ["dark","Sombrio"], ["whimsy","Lúdico/fantasioso"], ["epic","Épico"], ["slice","Cotidiano"], ["experimental","Experimental"] ] },
    ]
  },
  conventions:[
    "Antes de afirmar fato da história/mundo/personagem, consultar PROJETO/PERSONAGENS/ROTEIROS; o improvisado que vinga vira cânone.",
    "Movimento pensado pelos 12 princípios, com moderação e a serviço da intenção da cena.",
    "Timing e staging resolvidos cedo (storyboard, animatic) — antes da produção cara; o animatic trava o ritmo.",
    "Voz e design por personagem mantidos coerentes; silhueta legível que comunica personalidade.",
    "Em série: cada episódio fecha por si E faz avançar o arco maior.",
    "Mostrar em movimento antes de contar; o assistente orienta/estrutura — o animador executa e julga o que se vê no movimento."
  ],
  triggersExtra:[
    ["Roteiro/episódio escrito ou revisto", "Entrega ROTEIROS.md completo (com beats e timing pretendido)."],
    ["Fato novo de história/mundo/personagem", "Entrega PROJETO.md ou PERSONAGENS.md completo com o cânone atualizado."],
    ["Direção de arte/som definida", "Entrega ESTILO.md completo."],
    ["Mudança de escopo / marco de pipeline", "Entrega PRODUCAO.md completo (o que está dentro + o que foi cortado/adiado e a fase)."],
    ["Episódio/curta finalizado", "Entrega STATUS.md e PRODUCAO.md (estado + o que aprendeu)."],
  ],
  contextFiles:[
    { name:"PROJETO.md", cat:"essencial", role:"A bíblia: premissa, mundo, tom, arco geral. O norte criativo. Estável.",
      content:`# PROJETO.md — [Nome do Projeto]

> A **bíblia** do projeto. O assistente lê primeiro para alinhar história, tom e estilo.
> **Estável** e enxuta: o essencial que orienta as decisões; não uma enciclopédia.

---

## Logline
[A história em 1-2 frases. Quem, o que quer, qual o obstáculo, o que está em jogo.]

## Premissa e tema
- **Premissa:** [a situação que move a história.]
- **Tema:** [o que a obra investiga por baixo da trama — a ideia central.]
- **A experiência alvo:** [o que o público deve sentir — riso, melancolia, tensão, deslumbramento.]

## Mundo
- **Cenário / regras:** [onde se passa; a lógica interna que não pode ser quebrada.]
- **Tom visual e narrativo:** [a sensação do mundo.]

## Arco geral (se série/longa)
> A jornada maior. Em série, o fio que atravessa os episódios.
- [O ponto de partida → as viragens → para onde caminha.]

## Formato e técnica
- **Formato:** [curta / série (nº de eps × duração) / longa / clipe...]
- **Técnica:** [2D quadro a quadro / rigging / 3D / stop-motion / mista] — condiciona escopo e estilo.

## O que o projeto NÃO é (anti-escopo)
> Limites de visão — evita virar outra coisa e estourar o escopo.
- [Ex.: não é série longa; não tem ação pesada; não é realista.]
`},
    { name:"PERSONAGENS.md", cat:"essencial", role:"Elenco: design (silhueta), voz, arco, evolução. Estável; consultado antes de inventar.",
      content:`# PERSONAGENS.md — Elenco

> O elenco — design e voz de cada um. O assistente consulta para manter coerência visual e de fala.
> **Estável**: atualiza quando um arco avança ou o design se firma.

---

## [Nome] — [papel: protagonista / antagonista / secundário]
- **Quem é:** [em 2-3 traços concretos.]
- **Design / silhueta:** [a forma que o torna reconhecível à distância; o que a silhueta comunica da personalidade. Traços visuais que NÃO podem variar entre cenas.]
- **Voz / fala:** [como fala — ritmo, vocabulário, tique. Para soar igual sempre.]
- **Quer / motivação:** [o objetivo que o move.]
- **Arco:** [como muda ao longo da obra; o que está em jogo para ele.]
- **Atuação característica:** [como expressa emoção em movimento — gestos, postura típicos. Ajuda na animação fiel.]

---

## [Próximo personagem]
[...]

---

## Relações
- [Quem é o quê de quem; as tensões/vínculos que geram drama.]
`},
    { name:"ROTEIROS.md", cat:"essencial", role:"Roteiros e estrutura de episódio/curta, com beats e timing pretendido. Cresce.",
      content:`# ROTEIROS.md — Roteiros e Estrutura

> **Cresce** conforme a história é escrita. Guarda roteiros, beats e o timing pretendido.
> O assistente consulta para coerência e para resolver ritmo no papel (antes de animar).

---

## [Título do episódio/curta] — [estado: ideia / outline / roteiro / board]
**Logline do episódio:** [a história desta peça em 1 frase.]
**Função no arco (se série):** [o que avança no arco maior + o que fecha por si.]

### Estrutura / beats
> Os momentos-chave em ordem. Pense em pacing — onde sobe a tensão, onde respira.
1. [Beat — o que acontece + a função dramática.]
2. [...]

### Roteiro / tratamento
\`\`\`
[O roteiro em si — ação e diálogo. Marque o que está fechado e o que é rascunho.]
\`\`\`

### Notas de staging / timing pretendido
> Onde indicar câmera, ritmo e duração aproximada — resolver aqui evita refazer animação depois.
- [Cena X: câmera, movimento, sensação de tempo (lento/rápido), beat de silêncio.]

### Solução visual
> Onde a história pode ser contada por imagem/ação em vez de diálogo (mostre, não conte).
- [Momento — como mostrar em vez de falar.]

---

## [Próximo episódio]
[...]
`},
    { name:"ESTILO.md", cat:"essencial", role:"Direção de arte e som: visual, paleta, princípios de movimento, áudio. Estável.",
      content:`# ESTILO.md — Direção de Arte e Som

> Mantém a coerência audiovisual — tudo precisa parecer e soar de uma peça só.
> **Estável**. O assistente consulta para sugerir dentro do estilo, não fora dele.

---

## Direção visual
- **Estilo de arte:** [a referência visual + 2-3 obras de inspiração e o que puxar de cada.]
- **Paleta:** [cores-chave e o clima; como a cor muda por cena/emoção.]
- **Design de personagem:** [linguagem de formas; nível de detalhe; o que dá unidade ao elenco.]
- **Cenário / backgrounds:** [estilo, profundidade, relação com os personagens.]

## Linguagem de movimento
> Como ESTE projeto se move — os princípios aplicados ao seu jeito.
- **Estilo de animação:** [fluido e cheio? limitado/estilizado? exagerado ou contido?]
- **Frame rate / "on twos":** [anima em 1s, 2s? o que isso faz pela sensação.]
- **Princípios em destaque:** [quais dos 12 definem o feel daqui — ex.: muito squash & stretch para comédia; arcos suaves para drama.]
- **Timing característico:** [o ritmo típico — snappy? contemplativo?]

## Direção de som
- **Música:** [estilo, quando entra, o clima que sustenta.]
- **SFX e foley:** [a personalidade sonora; sons-assinatura.]
- **Voz / dublagem:** [tom da atuação vocal, se houver.]
- **Silêncio:** [onde o vazio sonoro trabalha.]

## Identidade
- [O elemento audiovisual-assinatura — o que faz alguém reconhecer a obra num quadro ou num som.]
`},
    { name:"PRODUCAO.md", cat:"essencial", role:"Escopo, pipeline, marcos e o que foi cortado. A defesa contra estourar prazo. Rolante-cresce.",
      content:`# PRODUCAO.md — Escopo e Pipeline

> A **defesa contra o escopo impossível** — animação custa caro em tempo, e excesso de ambição mata projetos.
> O assistente consulta para julgar se algo cabe, e registra o pipeline e os cortes aqui.

---

## Escopo realista
> O que dá para entregar com o tempo/equipe REAIS. Animação é lenta — seja honesto.
- **Duração-alvo:** [minutos finais — cada minuto custa muito mais do que parece.]
- **O que está dentro:** [conteúdo comprometido para esta versão.]

## Pipeline (as etapas deste projeto)
> Pré → Produção → Pós. Adapte ao seu fluxo (não há dois iguais).
- **Pré-produção:** roteiro → storyboard → animatic (TRAVAR timing/staging aqui) → design/model sheets.
- **Produção:** layout → animação (blocking → refino) → cenários → cor/comp.
- **Pós:** som/música → edição → render final.

## Marcos
| Marco | O que entrega | Alvo | Status |
|---|---|---|---|
| [Animatic] | [timing travado] | [data] | [...] |
| [Blocking] | [poses-chave] | [...] | [...] |

## ✂️ Cortado / adiado (o cemitério saudável)
> Cada corte é tempo que volta para terminar. Ideias boas que não cabem agora.
- **[Cena/ideia]** — adiada/cortada porque [não cabe no tempo / não serve à história].

## Riscos de produção
- [A cena que vai dar mais trabalho do que parece; a dependência arriscada; o gargalo do pipeline.]
`},
    { name:"STATUS.md", cat:"rolante", role:"Onde a produção está agora: o que está feito, em que etapa, próximos passos. Rolante.",
      content:`# STATUS.md — Estado da Produção

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Item resolvido sai daqui (vira marco em PRODUCAO ou nota no log).

---

## Fase
[Conceito/roteiro / Pré-produção / Produção / Pós / Série em andamento]

## ✅ Pronto
- [O que já está finalizado (roteiro fechado, animatic pronto, cena X animada...).]

## 🔧 Em andamento
- [O que está sendo feito agora + em que etapa do pipeline + onde parei.]

## 🎬 Próxima ação
- [O próximo passo concreto.]

## 🧩 Para resolver
- [Decisão de roteiro/design pendente; problema de staging a destravar.]

## ⚠️ Atenção / escopo
- [Risco de prazo; uma cena crescendo demais; algo destoando do ESTILO/continuidade.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    {name:"DECISIONS.md", cat:"rolante", role:"Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.", content:`# DECISIONS.md — Decisões e o porquê

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
    { name:"CENAS.md", cat:"opcional", role:"OPCIONAL — quebra de cenas/shots com staging e notas de animação. Use na produção shot a shot.",
      content:`# CENAS.md — Quebra de Cenas / Shots

> **Opcional.** Use na fase de produção, quando o trabalho é shot a shot e vale rastrear cada um.
> Liga cada shot ao roteiro e guarda as notas de staging e animação.

---

## Cena [N] — [nome/descrição]
- **Roteiro:** [→ ROTEIROS.md, qual beat.]
- **Staging:** [enquadramento, câmera, composição — o que a cena precisa comunicar.]
- **Ação principal:** [o que acontece; o movimento-chave.]
- **Princípios em foco:** [quais dos 12 importam aqui — ex.: antecipação forte antes do susto.]
- **Timing:** [duração aproximada; ritmo; beats de pausa.]
- **Estado:** [board / animatic / blocking / refino / comp / pronto.]
- **Notas:** [o que vigiar; a dificuldade desta cena.]

---

## [Próxima cena]
[...]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Projeto]

## Foco da sessão
[Roteiro, storyboard/animatic, design, animação, som, produção.]

## Feito
- [O que avançou — em qual etapa do pipeline.]

## História / roteiro
- [Beats/cenas trabalhados → ROTEIROS.md.]

## Mundo / personagens
- [Fato novo, design firmado, voz → PROJETO/PERSONAGENS (cânone).]

## Movimento / estilo
- [Decisão de linguagem de movimento ou direção → ESTILO.]

## Escopo / pipeline
- [Algo entrou/foi cortado; marco atingido → PRODUCAO.]

## Onde parei
[Estado + próximo passo. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: o que está pronto, em andamento, próxima ação", active:true },
    { key:"roteiros", name:"ROTEIROS.md", role:"completo, se um roteiro/episódio avançou", active:true },
    { key:"personagens", name:"PERSONAGENS.md", role:"completo, se um personagem/design foi firmado ou evoluiu", active:false },
    { key:"projeto", name:"PROJETO.md", role:"completo, se a premissa/mundo/arco mudou", active:false },
    { key:"estilo", name:"ESTILO.md", role:"completo, se a direção de arte/som/movimento mudou", active:false },
    { key:"producao", name:"PRODUCAO.md", role:"completo, se o escopo/pipeline mudou", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Explorar conceito / história", when:"Tenho uma ideia e quero firmar premissa, tom e arco antes de roteirizar.",
      fill:"idea", fillLabel:"A ideia + o formato pretendido + a sensação que imagino",
      body:(p,n)=>`Exploração de conceito de animação.\n\nIDEIA:\n${p.idea||"[A ideia + o formato (curta/série/clipe) + a sensação/experiência que imagino]"}\n\nFirme a visão (consultando PROJETO.md se existir):\n- Logline forte (quem quer o quê, contra qual obstáculo, o que está em jogo)\n- Premissa, tema e a EXPERIÊNCIA alvo (o que o público deve sentir)\n- Mundo essencial e tom (visual e narrativo)\n- Se for série: o arco maior + como os episódios se encadeiam\n- O anti-escopo: o que isto NÃO deve tentar ser (animação é cara — ambição realista)\n- Referências de DNA (obras parecidas) e o que puxar de cada\n\nNão detalhe roteiro ainda — firme a base. A visão é sua; eu apresento opções com trade-offs. Quando você escolher, registramos em PROJETO.md.`
    },
    { id:"H", title:"Escrever / estruturar roteiro", when:"Quero escrever ou revisar um roteiro/episódio.",
      fill:"script", fillLabel:"O episódio/curta + o que já tem (ideia, beats, ou roteiro)",
      body:(p,n)=>`Roteiro e estrutura.\n\nMATERIAL:\n${p.script||"[O episódio/curta + o que já existe: ideia, beats, ou um roteiro a revisar]"}\n\nConsultando PROJETO.md (tom, arco) e PERSONAGENS.md (vozes):\n- Defina a logline do episódio e — se série — sua função no arco maior (e o que fecha por si)\n- Estruture os BEATS com atenção ao pacing (onde sobe a tensão, onde respira)\n- Escreva/revise mantendo a voz de cada personagem\n- Busque a SOLUÇÃO VISUAL: onde contar por imagem/ação em vez de diálogo expositivo (mostre, não conte)\n- Marque o timing/staging pretendido nas cenas-chave (resolver no papel evita refazer animação)\n\nEntregue ROTEIROS.md completo (com beats e notas de timing). A história é sua; eu estruturo e aponto onde a imagem pode falar.`
    },
    { id:"I", title:"Storyboard / animatic (resolver o ritmo)", when:"Vou planejar o board/animatic e quero travar staging e timing.",
      fill:"scene", fillLabel:"A cena/sequência + o que ela precisa comunicar",
      body:(p,n)=>`Planejamento de storyboard/animatic.\n\nCENA/SEQUÊNCIA:\n${p.scene||"[A cena ou sequência + o que ela precisa comunicar (a emoção, a informação, o beat)]"}\n\nResolva o ritmo ANTES de animar (é onde corrigir é barato), consultando ROTEIROS.md e ESTILO.md:\n- STAGING: enquadramento, câmera e composição que dirigem o olhar para o que importa (você é o diretor)\n- O timing/pacing da sequência: duração aproximada de cada beat, onde acelera, onde pausa (o silêncio também conta)\n- Como os planos se encadeiam (continuidade, eixo, ritmo de corte)\n- Onde a ANTECIPAÇÃO prepara o público para um beat importante\n- O que o animatic precisa testar (o ritmo funciona? a leitura é clara?)\n\nNão desenhe o board — dê o plano de planos/timing; você executa. Lembre: o animatic é a ponte que revela problemas de pacing cedo. Atualize ROTEIROS.md com o staging decidido.`
    },
    { id:"J", title:"Animar uma ação (os princípios)", when:"Vou animar uma ação específica e quero aplicar os princípios certos.",
      fill:"action", fillLabel:"A ação a animar + o personagem + a sensação que quero",
      body:(p,n)=>`Plano de animação de uma ação.\n\nAÇÃO:\n${p.action||"[A ação a animar (pulo, soco, reação, caminhada...) + o personagem + a sensação/peso que quero]"}\n\nConsultando PERSONAGENS.md (atuação) e ESTILO.md (linguagem de movimento), oriente pelos 12 princípios:\n- ANTECIPAÇÃO: que preparação precede a ação (agachar antes do pulo)\n- TIMING & spacing: quantos frames, onde acelera/desacelera (ease in/out); o ritmo que dá o peso certo\n- SQUASH & STRETCH: onde aplicar (mantendo o volume) — com moderação para não virar cartunesco indevido\n- ARCOS: o caminho curvo natural do movimento\n- FOLLOW-THROUGH / overlapping: o que continua se movendo depois (cabelo, roupa, massa)\n- SECONDARY action e EXAGERO a serviço da intenção\n- A POSE-chave que comunica a ação (staging/apelo)\n\nDê o plano (poses-chave, breakdowns, timing aproximado) e o que vigiar; você anima. O julgamento de "ficou com vida" se vê no movimento — é seu. Atualize CENAS.md se usar.`
    },
    { id:"K", title:"Diagnosticar movimento sem vida", when:"Uma animação está 'dura', 'flutuante' ou 'sem peso' e não sei o porquê.",
      fill:"problem", fillLabel:"O que está errado no movimento (descreva o que sente)",
      body:(p,n)=>`Diagnóstico de movimento (você vê o movimento; eu interpreto pelos princípios).\n\nSINTOMA:\n${p.problem||"[O que parece errado — 'duro/robótico', 'flutuante/sem peso', 'abrupto', 'sem vida', 'confuso de ler']"}\n\nIdentifique a causa provável pelos princípios:\n- "Duro/robótico" → falta de ease in/out e de arcos (movimento linear); ou falta de follow-through/overlapping\n- "Flutuante/sem peso" → timing/spacing errados; falta de squash & stretch e de aceleração da gravidade\n- "Abrupto/sem impacto" → falta de antecipação antes da ação\n- "Sem vida/mecânico" → falta de secondary action e de exagero; pose-chave fraca\n- "Confuso de ler" → staging fraco (a leitura/silhueta não está clara)\n- "Travado/sem fluidez" → spacing irregular entre frames; pivô/peso inconsistente\n\nDiga o nome do problema, por que acontece, e a correção concreta (qual princípio aplicar, onde). Comece pela hipótese mais provável e de menor esforço. O veredito é seu olho no movimento.`
    },
    { id:"L", title:"Decisão de escopo / produção", when:"Tive uma ideia (ou estou na dúvida) e preciso saber se cabe na produção.",
      fill:"context", fillLabel:"A ideia/cena + onde o projeto está (tempo, equipe, fase)",
      body:(p,n)=>`Decisão de escopo/produção.\n\nIDEIA E CONTEXTO:\n${p.context||"[A ideia/cena nova, ou a dúvida + onde o projeto está: tempo restante, equipe, fase do pipeline]"}\n\nAvalie com honestidade (animação custa caro em tempo — excesso de ambição mata projetos), consultando PROJETO.md (visão) e PRODUCAO.md (escopo/pipeline):\n- Esta ideia FORTALECE a obra ou só adiciona trabalho? Serve à história/experiência?\n- O custo REAL em tempo de animação (cada segundo a mais é caro; uma cena nova puxa board, design, animação, comp, som)\n- Cabe na fase atual do pipeline e no tempo/equipe reais?\n- Se é boa mas não cabe: registrar para uma v2/sequência/episódio futuro\n- Onde dá para entregar a mesma intenção com MENOS (reaproveitar cenas, planos mais econômicos, animação limitada inteligente)\n\nVeredito claro: ENTRA (e o que sai para abrir espaço) ou FICA PARA DEPOIS. Cada corte é tempo que volta para terminar. Entregue PRODUCAO.md completo (escopo + o que foi adiado).`
    },
  ]
};