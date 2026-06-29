NICHES.pixel = {
  id:"pixel", label:"Pixel Art", icon:"🎨", group:"digital", category:"creative",
  cardColor:"#34d399", cardTags:["sprites","game art","animação"],
  cardDesc:"Paleta, silhueta, clusters e animação — estilo coerente do 1º sprite ao último",
  intro:{
    headline:"Estilo coerente do primeiro sprite ao último, sem visual drift.",
    lede:"O risco aqui é o desvio visual que afunda projetos indie: a paleta que escapa, o outline que ora tem ora não, o pivô que dança entre frames, o sprite #40 que não combina com o #1. Aqui as regras de estilo ficam travadas (paleta, resolução, outline), as convenções de animação são as mesmas para todos, e cada decisão técnica tem o porquê registrado — para o conjunto parecer uma coisa só.",
    ctxBlurb:"<code>ESTILO.md</code> trava paleta, resolução e regras · <code>SPRITES.md</code> cataloga personagens e assets com specs · <code>ANIMACAO.md</code> fixa frames e timing · <code>STATUS.md</code> mostra o que está em produção.",
    hero:"pixel"
  },
  topbar:[
    { id:"project", label:"Projeto", placeholder:"ex: sprites-lumen-forge" },
    { id:"resSel", label:"Resolução-base", type:"select",
      options:["16×16","24×24","32×32","48×48","64×64","Cenário/livre"] },
    { id:"engineSel", label:"Ferramenta", type:"select",
      options:["Aseprite","Piskel","LibreSprite","Photoshop","GraphicsGale","Pixquare","Outra"] },
    { id:"phase", label:"Fase", type:"select",
      options:["Estilo/paleta","Sprites estáticos","Animação","Tilesets/cenário","Polimento","Exportação"] },
  ],
  behaviors:[
    ["palette_law","Paleta é lei","A paleta definida em ESTILO.md é regra: não introduz cor fora dela sem sinalizar como decisão explícita. Paleta limitada força melhor design de textura e sombra — é virtude, não limitação. Cores são para esculpir forma (luz/sombra), não enfeitar. Sugere ferramentas de paleta (ex.: Lospec) quando for definir, mas a escolha é do artista."],
    ["silhouette_first","Silhueta antes de tudo","A leitura começa pela silhueta: se o sprite não é reconhecível como uma forma preta sólida, cor nenhuma conserta. Pensa em grandes clusters de luz e sombra primeiro (aperte os olhos: as massas precisam emergir). Detalhe nunca obscurece a forma básica."],
    ["aa_intentional","Anti-aliasing é escolha, não default","AA é controverso: muitos pixel artists evitam de propósito porque bordas duras são parte da estética, e AA pode deixar o sprite borrado/sujo em tamanho pequeno. O assistente trata AA como decisão consciente (onde, quanto), nunca como passo automático. Em baixa resolução, frequentemente menos AA é melhor."],
    ["avoid_artifacts","Caça os vilões: jaggies, banding, pillow, tangentes","Vigia os erros clássicos: jaggies (linhas irregulares por inclinação inconsistente), doubles (linhas de largura dupla), banding (pixels que reforçam a grade e achatam a forma), pillow shading (sombrear toda borda ignorando a luz) e tangentes (linhas paralelas que prendem o olho). Aponta esses problemas quando descritos, com o conserto."],
    ["timing_first","Em animação, timing antes de frames","Timing é o que mais importa — não a contagem de frames. Poucos frames com bom timing batem muitos frames flat. Defende duração variável (antecipação lenta, ação rápida, recuperação lenta) e tempos de referência (idle ~400ms, walk ~100-150ms, run ~80-100ms, hold no frame de impacto). Squash & stretch vale até em 16×16 (1px de diferença muda tudo)."],
    ["consistency_lock","Trava a consistência (anti-drift)","O maior assassino visual indie é o desvio entre assets. Mantém travados: paleta única, resolução em grade limpa (múltiplos: 32 personagem / 16 tile, nunca 24 solto), outline padronizado (sempre 1px / sempre colorido / sempre nenhum — nunca misturar), e pivô/âncora consistente entre frames (o erro nº1 de animação janky). Sinaliza quando algo novo foge do padrão."],
    ["creator_executes","Orienta e critica; o artista executa","O assistente não desenha os pixels — orienta técnica, planeja sprites, critica o que o artista descreve/mostra, e mantém a coerência. Levanta opções e o porquê; a mão e o gosto são do artista. Para julgamento estético (ficou bom?), dá leitura técnica e devolve a decisão."],
  ],
  builderSection:{
    title:"O estilo",
    hint:"Define o enquadramento visual. Entra nas instruções para o assistente respeitar a estética e as restrições.",
    items:[
      { kind:"radios", label:"Era/estética alvo", name:"era", opts:[
        ["8bit","8-bit (NES — paleta mínima)"], ["16bit","16-bit (SNES/Mega — mais cor)"], ["modern","Pixel moderno (HD, paletas amplas)"], ["mono","Monocromático/Game Boy"], ["mixed","Misto/próprio"] ] },
      { kind:"radios", label:"Uso final", name:"usage", opts:[
        ["game","Assets de jogo"], ["anim","Animação/GIF"], ["illust","Ilustração/arte"], ["portrait","Retrato/ícone"] ] },
      { kind:"chips", label:"Técnicas em uso", name:"techniques", opts:[
        ["dither","Dithering"], ["aa","Anti-aliasing seletivo"], ["selout","Selective outlining"], ["noout","Sem outline"], ["limitpal","Paleta restrita (≤16)"], ["rota","Rotação/clusters"], ["subpixel","Sub-pixel animation"] ] },
    ]
  },
  conventions:[
    "A paleta de ESTILO.md é regra; cor nova entra só como decisão explícita. Cor serve para esculpir forma, não enfeitar.",
    "Silhueta legível primeiro; pensar em clusters de luz/sombra antes de detalhe.",
    "Anti-aliasing é escolha consciente (onde/quanto), nunca passo automático — em baixa resolução, menos costuma ser mais.",
    "Resolução em grade limpa (múltiplos coerentes); outline padronizado e nunca misturado; pivô consistente entre frames.",
    "Em animação: timing antes de contagem de frames; duração variável; squash & stretch mesmo em baixa resolução.",
    "Decisões de estilo/técnica vão com o porquê em ESTILO; o assistente orienta e critica — o artista executa."
  ],
  triggersExtra:[
    ["Regra de estilo definida (paleta, outline, resolução)", "Entrega ESTILO.md completo atualizado."],
    ["Sprite/asset novo especificado ou catalogado", "Entrega SPRITES.md completo (specs, paleta usada, estado)."],
    ["Convenção de animação definida (frames, timing)", "Entrega ANIMACAO.md completo."],
    ["Decisão de técnica (dithering, AA, dimensão)", "Entrega ESTILO.md (ou RESTRICOES) com a decisão e o porquê."],
  ],
  contextFiles:[
    { name:"ESTILO.md", cat:"essencial", role:"A bíblia visual: paleta, resolução, outline, regras de sombreamento. A fonte da consistência. Estável.",
      content:`# ESTILO.md — Guia Visual

> A **bíblia visual** do projeto — trava o que mantém todos os assets coerentes. O assistente lê primeiro e consulta antes de sugerir qualquer coisa visual.
> **Estável**: muda só em decisão de estilo deliberada. Escrever isto cedo previne o "visual drift" que afunda projetos.

---

## Estética alvo
[A referência: 8-bit minimalista? 16-bit colorido? pixel moderno HD? + 2-3 jogos/artistas de referência e o que puxar de cada.]

## Paleta (lei do projeto)
> Paleta limitada força melhor design. Liste as cores oficiais; nada entra fora daqui sem decisão.
| Cor | HEX | Uso |
|---|---|---|
| [base 1] | #...... | [onde usar — ex.: pele, fundo, destaque] |
| [sombra] | #...... | [...] |
| [luz] | #...... | [...] |

- **Tamanho da paleta:** [ex.: 16 cores no total — regra autoimposta.]
- **Rampas de cor (ramps):** [grupos de luz→sombra de cada material; cores podem ser compartilhadas entre rampas (hue shifting).]
- **Fonte:** [paleta própria ou de Lospec — nome/link.]

## Resolução e grade
- **Resolução-base de personagens:** [ex.: 32×32.]
- **Tiles/cenário:** [ex.: 16×16 — múltiplo limpo da base, nunca 24 solto.]
- **Regra:** todos os assets compartilham grade ou múltiplo coerente.

## Outline (padronizado — nunca misturar)
- **Regra:** [sempre 1px preto / colorido (selective outlining) / sem outline / interno apenas] — UMA escolha, aplicada a tudo.
- **Por quê:** [a leitura/estética que essa escolha serve.]

## Sombreamento e luz
- **Fonte de luz:** [direção fixa — ex.: superior-esquerda.] (Evita pillow shading.)
- **Níveis de sombra:** [quantos tons por material — ex.: base + 1 sombra + 1 luz.]
- **Dithering:** [usa? onde? — textura/transição, não em tudo.]
- **Anti-aliasing:** [decisão consciente: usa AA seletivo onde? ou estética de borda dura sem AA?]

## O que evitar (assinatura negativa)
- [Vilões a banir neste projeto: jaggies, banding, pillow shading, tangentes, doubles, AA excessivo.]
`},
    { name:"SPRITES.md", cat:"essencial", role:"Catálogo de personagens e assets: specs, paleta usada, estado. Cresce.",
      content:`# SPRITES.md — Catálogo de Sprites e Assets

> **Cresce** conforme os assets são feitos. Mantém specs e estado de cada um, e garante que todos sigam o ESTILO.
> O assistente consulta para manter coerência e saber o que já existe / falta.

---

## Personagens
### [Nome] — [papel]
- **Resolução:** [ex.: 32×32, conforme ESTILO.]
- **Silhueta:** [a forma que o torna reconhecível; o que o distingue à distância.]
- **Paleta usada:** [as cores da paleta oficial aplicadas neste sprite.]
- **Estados/poses:** [idle, andar, atacar... quais existem e quais faltam → cruza com ANIMACAO.]
- **Pivô/âncora:** [o ponto de referência (ex.: centro dos pés) — fixo entre todos os frames.]
- **Estado:** [rascunho / lineart / colorido / sombreado / pronto.]

---

## Assets de ambiente / tiles
- **[Tileset/objeto]** — [resolução, função, estado.]

## UI / ícones
- **[Elemento]** — [tamanho, paleta, estado.]

---

## Fila de produção
> O que falta criar, em ordem de prioridade.
- [ ] [Asset — prioridade — depende de quê.]
`},
    { name:"ANIMACAO.md", cat:"essencial", role:"Convenções de animação: contagem de frames, timing por ação, pivô. Estável.",
      content:`# ANIMACAO.md — Convenções de Animação

> Onde vivem as regras de movimento — para todas as entidades animarem de forma coerente.
> **Estável**. O assistente consulta para manter timing e contagem consistentes (inconsistência é o que deixa animação janky, não falta de frames).

---

## Princípio-guia
**Timing antes de frames.** Poucos frames com bom timing > muitos frames flat. Duração variável: antecipação lenta, ação rápida, recuperação lenta.

## Timing de referência (por ação)
| Animação | Frames típicos | Timing | Observação |
|---|---|---|---|
| Idle | 2-4 | ~300-500ms/frame | respiro/bob sutil; blink ocasional |
| Walk | 4-6 | ~100-150ms/frame | contato mais longo, passagem mais curta |
| Run | 4-8 | ~80-100ms/frame | mais snap |
| Attack | 3-6 | setup ~80-100ms, impacto hold 150-200ms | hold no impacto dá peso |

## Squash & stretch
> Vale mesmo em baixa resolução: 1px de compressão na antecipação, 1px de esticada no ápice (Celeste faz com 1 linha de pixel). Tira a rigidez robótica.
- [Convenções de squash/stretch do projeto.]

## Anticipation (é game design, não só polimento)
> Toda ação importante tem um "tell" — frame de preparação que avisa o jogador. Telegrafar ataques é o que torna o jogo justo.
- [Regras: quais ações precisam de frame de antecipação.]

## Pivô / âncora (anti-janky)
> O erro nº1: pivô que dança entre frames. Fixe o ponto de referência.
- **Âncora:** [ex.: o quadril/pés fica sempre no mesmo pixel entre os frames de um ciclo.]

## Consistência entre entidades
> Se o player anda em ciclo de X frames a Y ms, NPCs seguem o mesmo padrão.
- [Convenções globais de timing/contagem.]

## Onion skinning / fluxo
- [Como o artista mantém proporção entre frames (onion skinning na ferramenta).]
`},
    { name:"RESTRICOES.md", cat:"essencial", role:"Regras autoimpostas e limites técnicos do projeto. A disciplina criativa. Estável.",
      content:`# RESTRICOES.md — Regras Autoimpostas

> As **restrições deliberadas** que dão identidade e disciplina — em pixel art, limite é estilo.
> **Estável**. Separar de ESTILO permite listar aqui os "nãos" e limites técnicos sem poluir o guia visual.

---

## Restrições de cor
- **Cores totais:** [ex.: máximo 16 no projeto inteiro.]
- **Cores por sprite:** [ex.: até 4-6 por personagem.]
- **Regra de hue shifting:** [sombra desloca matiz, não só escurece?]

## Restrições de dimensão
- [Tamanhos permitidos; grade fixa; o que NÃO fazer (ex.: nada de meia-grade, nada de escala não-inteira).]

## Restrições técnicas (destino)
- **Escala de exibição:** [ex.: jogo roda a 3x — só escala inteira, nunca fracionária (evita pixel distorcido).]
- **Formato de export:** [PNG com alpha, sempre lossless — nunca JPEG.]
- **Limites da engine/destino:** [tamanho de sprite sheet, nº de cores, orçamento de animação.]

## Restrições de processo
- [Disciplinas autoimpostas: ex.: "sem AA neste projeto", "tudo a partir da paleta X", "todo sprite passa pelo teste da silhueta".]

## Por que estas restrições
[O efeito de identidade/coerência que elas criam — para lembrar por que valem a pena quando incomodarem.]
`},
    { name:"STATUS.md", cat:"rolante", role:"O que está em produção agora, próximos assets, pendências. Rolante.",
      content:`# STATUS.md — Em Produção

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Asset pronto sai daqui (vira entrada no SPRITES; o estado fica lá).

---

## Fase
[Estilo/paleta / Sprites estáticos / Animação / Tilesets / Polimento / Exportação]

## 🎨 Na bancada agora
- [O asset/animação em produção + em que etapa (lineart, cor, sombra, frames).]

## 📋 Próximos assets
- [ ] [O que vem em seguida, por prioridade.]

## 🔁 Em revisão / a ajustar
- [Sprite que precisa de correção — qual problema (silhueta? paleta? banding?).]

## ⚠️ Atenção / consistência
- [Risco de drift: algo destoando do ESTILO; outline/escala fora do padrão; pivô inconsistente.]

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
    { name:"TILESET.md", cat:"opcional", role:"OPCIONAL — design de tilesets e cenários: módulos, transições, regras de encaixe. Use em jogos com mapas/cenários.",
      content:`# TILESET.md — Tilesets e Cenário

> **Opcional.** Use quando o projeto tem cenários montados com tiles (plataforma, top-down, RPG).
> Tiles precisam encaixar sem costura visível e formar um todo coerente.

---

## Grade e dimensão
- **Tamanho do tile:** [ex.: 16×16, múltiplo limpo da base de ESTILO.]
- **Como os tiles se conectam:** [borda compartilhada; regra de transição entre materiais.]

## Materiais / terrenos
### [Material — ex.: grama]
- **Tiles necessários:** [centro, bordas, cantos internos/externos, transições para X.]
- **Variações:** [tiles alternativos para quebrar repetição visível.]

## Regras de encaixe (tiling)
- [Como evitar costura/repetição óbvia; uso de tiles de detalhe espalhados.]
- [Auto-tiling, se a engine usa (47-tile / blob).]

## Profundidade / camadas
- [Fundo, meio, frente; parallax se houver.]

## Props e decoração
- [Objetos que povoam o cenário — tamanho, paleta, densidade.]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Projeto]

## Foco da sessão
[Definição de estilo/paleta, sprite estático, animação, tileset, polimento.]

## Feito
- [Assets/frames trabalhados + estado (cruza com SPRITES).]

## Decisões de estilo/técnica
- [Regra de paleta/outline/dithering/dimensão definida → ESTILO ou RESTRICOES, com o porquê.]

## Animação
- [Convenção de frames/timing definida ou ajustada → ANIMACAO.]

## Consistência
- [Algo destoou do padrão? Como foi corrigido? (anti-drift)]

## Onde parei
[Estado + próximo asset. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: na bancada, próximos assets, consistência", active:true },
    { key:"sprites", name:"SPRITES.md", role:"completo, se um asset foi especificado/criado/atualizado", active:true },
    { key:"estilo", name:"ESTILO.md", role:"completo, se uma regra de estilo mudou (paleta, outline, resolução)", active:false },
    { key:"animacao", name:"ANIMACAO.md", role:"completo, se uma convenção de animação foi definida", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Definir estilo e paleta", when:"Começo de projeto — travar a estética antes de produzir assets.",
      fill:"refs", fillLabel:"A vibe/estética que quero + referências + restrições (resolução, nº de cores)",
      body:(p,n)=>`Definição de estilo visual.\n\nVIBE E REFERÊNCIAS:\n${p.refs||"[A estética pretendida + jogos/artistas de referência + restrições (resolução? quantas cores?)]"}\n\nAjude a travar o ESTILO (escrever cedo previne visual drift):\n- Estética alvo clara (era, mood) + o que puxar das referências\n- Proposta de PALETA: quantas cores, as rampas (luz→sombra por material), e a lógica (hue shifting?). Sugira partir de uma paleta de Lospec se ajudar\n- Resolução-base e a grade (múltiplos coerentes: personagem vs. tile)\n- Regra de OUTLINE (uma só — 1px preto / colorido / sem) e por quê\n- Fonte de luz fixa + níveis de sombra (evita pillow shading)\n- Decisão consciente sobre AA e dithering (onde, se usar)\n- A "assinatura negativa": o que este projeto bane (jaggies, banding, etc.)\n\nEntregue ESTILO.md e RESTRICOES.md completos. A paleta e o gosto são seus; eu estruturo as regras.`
    },
    { id:"H", title:"Planejar um sprite", when:"Vou criar um sprite e quero planejar antes de desenhar.",
      fill:"sprite", fillLabel:"O que é o sprite + função + tamanho (ou: use ESTILO.md)",
      body:(p,n)=>`Planejamento de sprite.\n\nSPRITE:\n${p.sprite||"[O que é + função (personagem/inimigo/item) + tamanho. Ou: 'conforme ESTILO.md']"}\n\nConsultando ESTILO.md (paleta, resolução, outline) e SPRITES.md:\n- SILHUETA primeiro: que forma o torna reconhecível como mancha preta sólida? O que o distingue dos outros à distância?\n- Os grandes clusters de luz/sombra (aperte os olhos — as massas precisam ler antes do detalhe)\n- Quais cores da paleta oficial usar, em quais rampas\n- Pivô/âncora (onde fica o ponto de referência — importa para animar depois)\n- Onde o detalhe entra SEM obscurecer a forma\n- Armadilhas a vigiar neste sprite (banding em curva? tangente entre membros?)\n\nNão "desenhe" o sprite — eu executo. Dê o plano técnico + o que conferir. Entregue SPRITES.md completo com a spec do novo asset.`
    },
    { id:"I", title:"Criticar um sprite (revisão técnica)", when:"Tenho um sprite pronto e quero crítica honesta de técnica.",
      fill:"desc", fillLabel:"Descreva o sprite (ou cole/descreva o que fez) + o que te incomoda",
      body:(p,n)=>`Crítica técnica de sprite.\n\nSPRITE:\n${p.desc||"[Descreva o sprite — pose, cores, o que tem — e o que te incomoda nele]"}\n\nAvalie tecnicamente (consultando ESTILO.md):\n- Silhueta: lê bem como forma sólida? É distinguível?\n- Clusters: as massas de luz/sombra emergem ao apertar os olhos, ou o detalhe polui?\n- Paleta: está dentro da oficial? As rampas funcionam? Contraste suficiente?\n- Sombreamento: a luz é coerente (uma fonte) ou há pillow shading?\n- Vilões: jaggies (inclinação inconsistente), banding, doubles, tangentes, AA excessivo/sujo?\n- Consistência com o ESTILO e com os outros sprites (anti-drift)\n\nSepare "precisa corrigir" de "sugestão de polish". Para cada problema, o conserto concreto (qual pixel/área). O julgamento de "ficou bonito" é seu — eu dou a leitura técnica.`
    },
    { id:"J", title:"Planejar uma animação", when:"Vou animar um sprite e quero acertar frames e timing.",
      fill:"anim", fillLabel:"Qual animação (idle/walk/attack...) + de qual sprite",
      body:(p,n)=>`Planejamento de animação.\n\nANIMAÇÃO:\n${p.anim||"[Qual animação — idle/walk/run/attack/hurt... — de qual sprite]"}\n\nConsultando ANIMACAO.md (convenções) e SPRITES.md (o sprite, o pivô):\n- Quantos frames (poucos e bem cronometrados > muitos flat) e por quê\n- O TIMING por frame (duração variável: antecipação lenta, ação rápida, recuperação lenta) — use os tempos de referência\n- Onde entra anticipation (o "tell" — se for ação, é game design, não enfeite)\n- Squash & stretch possível (mesmo 1px muda a sensação)\n- Pivô/âncora fixo entre os frames (o erro nº1 é o pivô dançar)\n- Follow-through/secondary (cabelo, capa) se couber\n\nNão desenhe os frames — eu animo. Dê o plano: lista de frames com pose + timing + o que vigiar. Entregue ANIMACAO.md completo se definir convenção nova.`
    },
    { id:"K", title:"Diagnosticar um problema visual", when:"Algo está 'errado' no sprite/animação e não sei nomear o quê.",
      fill:"problem", fillLabel:"O sintoma — o que parece errado (cole/descreva)",
      body:(p,n)=>`Diagnóstico visual.\n\nSINTOMA:\n${p.problem||"[O que parece errado — 'a linha está estranha', 'a animação treme', 'parece chapado'...]"}\n\nIdentifique o problema técnico pelo sintoma:\n- "Linha serrilhada/quebrada" → jaggies (inclinação inconsistente) ou doubles → como uniformizar a linha\n- "Parece chapado/sem volume" → falta de clusters de sombra, ou pillow shading (sombra em toda borda) → fixar fonte de luz\n- "Borda suja/borrada" → AA excessivo em baixa resolução → reduzir/remover AA\n- "O olho fica preso num ponto" → banding ou tangente → quebrar a paralela\n- "Animação treme/desliza" → pivô inconsistente entre frames → fixar a âncora\n- "Não dá pra ver o que é" → silhueta fraca → repensar a forma antes da cor\n- "Cores não combinam" → fora da paleta, ou rampa sem contraste/hue shift\n\nDiga o nome do problema, por que acontece, e o conserto concreto. Se for de estilo recorrente, aponte o que registrar em ESTILO/RESTRICOES.`
    },
    { id:"L", title:"Auditar consistência (anti-drift)", when:"Quero checar se os assets ainda formam um conjunto coerente.",
      fill:"scope", fillLabel:"O que auditar (cole a lista de assets, ou descreva o conjunto)",
      body:(p,n)=>`Auditoria de consistência.\n\nCONJUNTO:\n${p.scope||"[Os assets a comparar — descreva ou liste o que já existe]"}\n\nConfronte tudo contra o ESTILO.md e entre si (o visual drift é o assassino indie):\n- Paleta: todos usam as cores oficiais? Algum sprite escapou para tons fora da paleta?\n- Resolução/grade: todos respeitam a base e os múltiplos? Algum 24 solto no meio de 32/16?\n- Outline: a regra é a mesma em todos (sempre 1px / sempre colorido / sempre nenhum)? Algum misturou?\n- Sombreamento: mesma fonte de luz e níveis em todos?\n- Animação: contagem de frames e timing consistentes entre entidades? Pivôs alinhados?\n- "Densidade" de detalhe parecida (um sprite muito mais detalhado que os outros destoa)?\n\nListe os desvios encontrados, do mais gritante ao menor, com o conserto. Aponte o que vale virar regra explícita em ESTILO/RESTRICOES para não repetir.`
    },
  ]
};