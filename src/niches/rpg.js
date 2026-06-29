NICHES.rpg = {
  id:"rpg", label:"RPG (Mestres)", icon:"🎲", group:"literary", category:"creative",
  cardColor:"#c084fc", cardTags:["mesa","campanha","one-shot"],
  cardDesc:"Mundo, NPCs, prep leve e improviso coerente — campanha que lembra de tudo",
  intro:{
    headline:"A campanha que lembra de tudo entre uma sessão e outra.",
    lede:"O risco aqui é o mundo perder a memória: o NPC que muda de voz, o segredo plantado e esquecido, a promessa feita à party que ninguém anotou. E o oposto — afundar em prep que os jogadores nunca tocam. Aqui a lore fica coerente, a prep é leve e improvisável (o que a party vai tocar, não o mundo inteiro), e cada sessão começa sabendo onde a história parou.",
    ctxBlurb:"<code>MUNDO.md</code> ancora cenário e regras · <code>NPCs.md</code> guarda voz e motivação · <code>CAMPANHA.md</code> mantém arco, segredos e fios · <code>SESSAO.md</code> é a prep leve da próxima mesa.",
    hero:"rpg"
  },
  topbar:[
    { id:"campaign", label:"Campanha", placeholder:"ex: as-cinzas-de-valdrin" },
    { id:"systemSel", label:"Sistema", type:"select",
      options:["D&D 5e","Pathfinder","Tormenta","Call of Cthulhu","PbtA","FATE","Savage Worlds","OSR","Vampiro","Sistema próprio","Outro"] },
    { id:"toneSel", label:"Tom", type:"select",
      options:["Heroico","Sombrio","Investigação","Horror","Político/intriga","Humor","Exploração","Survival","Épico"] },
    { id:"langSel", label:"Idioma", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["lore_memory","Lore tem memória: consulta antes de inventar","Antes de afirmar qualquer fato do mundo (nome, lugar, evento passado, relação, regra do cenário), consulta MUNDO/NPCs/CAMPANHA. Não inventa detalhe que contradiz o estabelecido. Quando algo novo surge na mesa (improvisado), registra para virar cânone. O mundo precisa lembrar o que aconteceu nas sessões anteriores."],
    ["npc_voice","NPCs com voz, motivação e stakes","Cada NPC relevante tem voz distinta, uma motivação clara e algo em jogo — interações precisam parecer significativas, não figurantes. O assistente mantém a voz de cada NPC consistente (consulta NPCs) e ajuda a improvisar falas fiéis. NPC é movido por objetivo, não por servir à trama do mestre."],
    ["pc_center","Os PJs no banco do motorista","A experiência dos jogadores é o centro: o mestre é facilitador, não oponente. As escolhas dos PJs formam a espinha da história — não um roteiro pré-escrito que eles devem seguir. O assistente ajuda a tecer os ganchos pessoais de cada PJ na trama e a deixar os jogadores brilharem. O mestre não joga para 'vencer'."],
    ["prep_light","Prep leve do que a party vai tocar","Prepara o que a party provavelmente vai tocar na próxima sessão ou duas — situação, obstáculos, NPCs que importam — e deixa o resto solto. Não super-documenta o mundo inteiro. Método Lazy DM: início forte, cenas, segredos/pistas, locais, NPCs, ameaças, recompensas. Framework robusto, detalhe flexível (como jazz: saiba o tom e a melodia, improvise o resto)."],
    ["secrets_abstract","Segredos e pistas abstratos da revelação","Trata segredos e pistas como o tecido conectivo da campanha — cada um revela uma peça do mundo. Mantém-nos abstratos de COMO serão descobertos: improvisa a descoberta na mesa, conforme os jogadores agem. Não amarra um segredo a um único NPC ou local (se a party não for lá, o segredo se perde)."],
    ["improv_coherent","Improvisa com coerência (yes-and)","Quando os jogadores fazem o inesperado, isso é feature, não bug — improvisar bem começa por escutar. Usa 'sim, e...' (incorpora a ideia) ou 'não exatamente, mas...' (redireciona) em vez de bloquear. Improvisa consequências orgânicas, não punitivas, baseadas na lógica do mundo — mantendo a coerência com o que já está estabelecido."],
    ["table_safety","Cuida da mesa (Session Zero, segurança, pacing)","Lembra que a mesa é um espaço compartilhado: ajuda a preparar Session Zero (expectativas, tom, limites de conteúdo) e a usar ferramentas de segurança (linhas e véus, X-Card) quando o tom for pesado. Atenta ao pacing — não se demorar em logística trivial, misturar altos e baixos, cortar cena chata. O divertimento de todos vem antes da 'história perfeita'."],
  ],
  builderSection:{
    title:"A campanha",
    hint:"Define o enquadramento. Entra nas instruções para o assistente respeitar sistema, tom e estilo de mesa.",
    items:[
      { kind:"radios", label:"Formato", name:"mode", opts:[
        ["campaign","Campanha longa"], ["miniarc","Mini-arco (poucas sessões)"], ["oneshot","One-shot"], ["westmarches","West Marches/aberta"], ["sandbox","Sandbox"] ] },
      { kind:"radios", label:"Estilo de prep", name:"prep", opts:[
        ["lazy","Prep leve (Lazy DM)"], ["module","Módulo pronto adaptado"], ["sandbox_prep","Sandbox/situação"], ["heavy","Detalhada"] ] },
      { kind:"chips", label:"Pilares de experiência (foco da mesa)", name:"pillars", opts:[
        ["combat","Combate tático"], ["roleplay","Interpretação/drama"], ["exploration","Exploração"], ["mystery","Mistério/investigação"], ["intrigue","Intriga/política"], ["horror","Tensão/horror"], ["puzzle","Puzzles/desafios"], ["story","História/narrativa"] ] },
    ]
  },
  conventions:[
    "Antes de afirmar fato do mundo, consultar MUNDO/NPCs/CAMPANHA; o que é improvisado na mesa e vinga vira cânone registrado.",
    "Cada NPC relevante tem voz, motivação e stakes; a voz se mantém entre sessões.",
    "Os PJs no centro: o mestre é facilitador; as escolhas deles dirigem a história — sem roteiro forçado.",
    "Prep leve do que a party vai tocar (Lazy DM); não super-documentar o mundo; segredos abstratos da revelação.",
    "Improvisar com 'sim, e...'; consequências orgânicas e coerentes com a lógica do mundo, não punitivas.",
    "A mesa é compartilhada: Session Zero, ferramentas de segurança e pacing antes da 'história perfeita'."
  ],
  triggersExtra:[
    ["Sessão jogada (pós-mesa)", "Entrega STATUS.md e CAMPANHA.md completos (o que aconteceu, fios novos, segredos revelados, promessas feitas)."],
    ["Fato novo do mundo/NPC estabelecido (inclusive improvisado)", "Entrega MUNDO.md ou NPCs.md completo com o cânone atualizado."],
    ["Prep da próxima sessão", "Entrega SESSAO.md completo (início forte, cenas, segredos, NPCs, ameaças)."],
    ["Decisão de arco/trama da campanha", "Entrega CAMPANHA.md completo (o rumo + os fios afetados)."],
  ],
  contextFiles:[
    { name:"MUNDO.md", cat:"essencial", role:"Cenário, regras do mundo, lugares e facções. A bíblia do mundo. Estável.",
      content:`# MUNDO.md — [Nome do Cenário]

> A **bíblia do mundo** — mantém o cenário coerente entre sessões. O assistente lê primeiro e consulta antes de afirmar fatos do mundo.
> **Estável** e enxuto (essencial primeiro): só o que importa para as sessões que estão acontecendo; não escreva uma enciclopédia que ninguém usa na mesa.

---

## Tom e premissa
[A sensação do mundo (sombrio? heroico? estranho?) e a premissa que move a campanha, em poucas linhas.]

## Regras do mundo (o que define este cenário)
- **Lógica interna:** [como funciona magia/tecnologia/sobrenatural — limites e custos, para a improvisação ser coerente.]
- **O que é diferente do padrão:** [o que este mundo faz que foge do genérico do sistema.]

## Lugares-chave (só os que a party toca ou tocará)
### [Local]
- **O que é:** [em 1-2 linhas.]
- **Por que importa:** [o que a party faz/encontra aqui; o gancho.]
- **Atmosfera:** [um detalhe sensorial para evocar na mesa — sem "descrever demais a maçaneta".]

## Facções e poderes
### [Facção]
- **Quer:** [o objetivo dela — facção tem função, é proativa.]
- **Método / recursos:** [como age.]
- **Relação com a party:** [aliada, rival, neutra — e como pode mudar.]

## Cânone estabelecido na mesa
> Fatos que surgiram jogando (improvisados) e agora são verdade. Registre para não contradizer.
- [Fato — em que sessão surgiu.]
`},
    { name:"PJs.md", cat:"essencial", role:"Personagens dos jogadores: ficha resumida, ganchos pessoais, arco. O centro da história. Estável.",
      content:`# PJs.md — Personagens dos Jogadores

> Os protagonistas — o centro da campanha. O assistente consulta para tecer a trama em torno deles e manter coerência.
> **Estável**: atualiza quando um arco avança ou um gancho pessoal entra em jogo.

---

## [Nome do PJ] — [jogador] — [classe/conceito]
- **Conceito:** [quem é, em 2-3 traços.]
- **Gancho pessoal:** [o que ESTE personagem quer / teme / busca — o fio dele para tecer na trama. (Ex.: procura o irmão perdido → vira subtrama.)]
- **Vínculos:** [com outros PJs e NPCs.]
- **Arco:** [para onde o personagem pode crescer; o que está em jogo para ele.]
- **Momento de brilhar:** [o tipo de cena em que este PJ se destaca — para o mestre dar holofote.]
- **Spotlight recente:** [quando ele teve foco pela última vez — ajuda a equilibrar a atenção na mesa.]

---

## [Próximo PJ]
[...]

---

## Notas da party (como grupo)
- **Dinâmica:** [como o grupo funciona junto; tensões/sinergias.]
- **Objetivo comum:** [o que une a party agora.]
`},
    { name:"NPCs.md", cat:"essencial", role:"NPCs do mundo: voz, motivação, stakes, estado. Cresce.",
      content:`# NPCs.md — Personagens do Mundo

> **Cresce** conforme NPCs surgem. Cada um com voz, motivação e stakes — para interações importarem.
> O assistente consulta para manter a voz consistente e improvisar falas fiéis.

---

## [Nome] — [papel: aliado / vilão / neutro / recorrente]
- **Voz:** [como fala — ritmo, vocabulário, tique, bordão. Para soar igual toda vez que aparecer.]
- **Quer (motivação):** [o objetivo dele — NPC é movido por isso, não pela trama do mestre.]
- **Stakes:** [o que ele tem a ganhar/perder; por que se importa.]
- **Relação com a party:** [como vê os PJs; como isso pode evoluir.]
- **Aparência/sinal:** [um traço marcante para a party reconhecer.]
- **Estado atual:** [vivo/morto, onde está, o que está fazendo agora — atualiza com a campanha.]

---

## [Próximo NPC]
[...]

---

## Bag of tricks (NPCs prontos para improviso)
> Nomes + um traço, para puxar quando a party for a um lugar inesperado.
- **[Nome]** — [um traço/voz em uma linha.]
`},
    { name:"CAMPANHA.md", cat:"essencial", role:"Arco geral, ganchos, segredos, fios soltos e o que já aconteceu. A espinha da história. Cresce.",
      content:`# CAMPANHA.md — Arco e Fios

> A espinha da campanha + a memória do que já rolou. **Cresce.**
> Pense em sementes plantadas que florescem em várias direções — não um roteiro linear que os jogadores devem seguir.

---

## Premissa da campanha
[O conflito/situação central que move a campanha. O que está em jogo no grande quadro.]

## Situação atual (não enredo linear)
> O que as facções/forças estão fazendo AGORA, independente da party. O mundo é proativo; a party reage e interfere.
- [Quem está fazendo o quê, e o relógio que corre.]

## Ganchos ativos
> Fios lançados que a party pode puxar. Cada um conectado a um PJ ou ao mundo.
- [Gancho — a quem interessa — o que abre se puxado.]

## Segredos e pistas (abstratos da revelação)
> O tecido conectivo. Cada um revela algo do mundo. NÃO amarrados a um único local/NPC — improvise a descoberta.
- [ ] [Segredo/pista — o que revela.]
- [ ] [...]

## Fios soltos / promessas
> O que foi prometido à party ou deixado em aberto — para pagar depois e não esquecer.
- [Fio — onde surgiu — como pretende resolver.]

## O que já aconteceu (resumo por sessão)
> Curto: o suficiente para o assistente saber a história até aqui.
- **Sessão [N] — [título]:** [o que rolou de relevante; decisões da party; consequências.]

## Decisões de campanha (DEC)
> Mudanças de rumo importantes (matar um vilão, revelar uma reviravolta) com o porquê.
### DEC-[N] — [a decisão] · [data]
[O que e por quê; o que afeta nos fios.]
`},
    { name:"SESSAO.md", cat:"rolante", role:"Prep da PRÓXIMA sessão (método Lazy DM). Rolante — recriada a cada sessão.", content:`# SESSAO.md — Prep da Próxima Sessão

> **Rolante**: a prep da PRÓXIMA mesa. Substituída a cada sessão (a anterior vira resumo em CAMPANHA).
> Método Lazy DM: leve, modular, improvisável. Prepare o que a party vai tocar — não o mundo inteiro.

---

## Sessão [N] — [data prevista]

## 🎬 Início forte
> Comece com um impacto (combate, mistério, drama) que puxa a party para dentro. Nada de "vocês estão na taverna, o que fazem?".
[A cena de abertura.]

## 🎯 Cenas potenciais (2-4, modulares)
> O que provavelmente vai acontecer — soltas, em qualquer ordem, puláveis.
1. [Cena — a situação + o obstáculo + o que está em jogo.]
2. [...]

## 🔑 Segredos e pistas desta sessão (até ~5)
> Abstratos de como serão revelados — improvise a descoberta.
- [Segredo/pista.]

## 👥 NPCs em cena
> Quem provavelmente aparece — voz + o que quer (puxar de NPCs.md ou criar).
- [NPC — traço/voz — o que quer aqui.]

## ⚔️ Ameaças / encontros possíveis
- [Encontro — quando faria sentido — dificuldade aproximada.]

## 💰 Recompensas
- [Tesouro/info/avanço que pode entrar.]

## 🪝 Ganchos para o futuro / cliffhanger
> Onde fincar a próxima isca; uma boa parada para terminar a sessão.
- [O gancho.]

## Notas da mesa
- [Lembretes: spotlight de quem está sobrando? regra a conferir? promessa a pagar?]
`},
    { name:"STATUS.md", cat:"rolante", role:"Estado da campanha agora: onde a história parou, próxima sessão, pendências. Rolante.",
      content:`# STATUS.md — Estado da Campanha

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde a história parou e o que vem.
> Detalhe do que aconteceu vai para CAMPANHA; aqui fica o estado vivo.

---

## Onde a história parou
[O ponto exato em que a última sessão terminou + a tensão aberta no momento (cliffhanger?).]

## 🎲 Próxima sessão
- **Quando:** [data.]
- **Foco provável:** [o que a party deve perseguir — prep em SESSAO.md.]

## 🧭 Party agora
- **Onde estão:** [local + situação.]
- **Objetivo imediato:** [o que querem fazer em seguida.]
- **Estado:** [recursos, ferimentos, condições relevantes.]

## ⏳ Fios quentes (a pagar logo)
- [Promessa/gancho que está pedindo resolução.]

## ⚠️ Atenção
- [Spotlight desequilibrado (um PJ sumindo)? tom da mesa? algo de Session Zero a reforçar?]

## 💬 Última sessão
**[data]** — [resumo de 2-4 linhas + onde parou + próximo passo óbvio. Detalhe completo em CAMPANHA.]
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
    { name:"REGRAS-CASEIRAS.md", cat:"opcional", role:"OPCIONAL — house rules, decisões de regra e rulings recorrentes. Use quando a mesa tem ajustes próprios do sistema.",
      content:`# REGRAS-CASEIRAS.md — House Rules e Rulings

> **Opcional.** Use quando a mesa adapta o sistema ou acumula decisões de regra que precisam ser consistentes entre sessões.
> Evita o "mas semana passada funcionou diferente" — rulings viram referência.

---

## House rules (ajustes deliberados ao sistema)
- **[Regra]** — [o que muda em relação ao padrão + por que adotamos.]

## Rulings recorrentes (decisões que viraram precedente)
> Como a mesa resolve situações que o livro não cobre claramente. Consistência > perfeição.
- **[Situação]** — [como decidimos resolver; vale daqui pra frente.]

## Acordos da mesa (Session Zero)
> O que ficou combinado sobre estilo de jogo, para reforçar quando precisar.
- **Tom e conteúdo:** [o tom acordado + linhas e véus (o que não entra / entra fora de cena).]
- **Estilo:** [theater of the mind vs. mapa; fudge de dados ou não; XP vs. marcos.]
- **Ferramentas de segurança:** [X-Card / check-ins — como sinalizar desconforto.]

## Dúvidas de regra em aberto
- [Regra a esclarecer antes da próxima vez que aparecer.]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão (pós-jogo). Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Após cada sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido (o "diário da campanha"). Logs vivem no Git, lidos sob demanda.

---

# Log — Sessão [N] · AAAA-MM-DD · [Campanha]

## Resumo da sessão
[O que aconteceu, em 3-6 linhas — o "previously on" da próxima vez.]

## Decisões da party
- [As escolhas importantes que os jogadores fizeram + consequências.]

## Cânone novo
- [Fatos do mundo estabelecidos (inclusive improvisados) → MUNDO/NPCs/CAMPANHA.]

## Fios
- [Segredos revelados; ganchos lançados/pagos; promessas feitas → CAMPANHA.]

## NPCs
- [Quem apareceu, o que fez, mudança de estado → NPCs.]

## Spotlight
- [Quem brilhou; quem ficou de fora (equilibrar na próxima).]

## Onde parou
[O cliffhanger/estado final + o próximo passo óbvio. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: onde a história parou, próxima sessão", active:true },
    { key:"campanha", name:"CAMPANHA.md", role:"completo, se a história avançou (fios, segredos, o que aconteceu)", active:true },
    { key:"npcs", name:"NPCs.md", role:"completo, se um NPC surgiu ou mudou de estado", active:false },
    { key:"mundo", name:"MUNDO.md", role:"completo, se um fato novo do mundo foi estabelecido", active:false },
    { key:"sessao", name:"SESSAO.md", role:"completo, ao preparar a próxima sessão (Lazy DM)", active:true },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"diário da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Criar / desenvolver o mundo", when:"Começo de campanha ou quero aprofundar uma região/facção.",
      fill:"seed", fillLabel:"A ideia do cenário ou o que quero desenvolver + tom",
      body:(p,n)=>`Desenvolvimento de mundo.\n\nPONTO DE PARTIDA:\n${p.seed||"[A ideia do cenário, ou a região/facção a aprofundar + o tom da campanha]"}\n\nConstrua de forma enxuta e jogável (não enciclopédia), consultando MUNDO.md:\n- Tom e premissa em poucas linhas\n- Regras do mundo que importam (a lógica interna — limites de magia/tecnologia — para improviso coerente)\n- Só os lugares/facções que a party vai tocar; cada local com um gancho e UM detalhe sensorial (sem descrever demais)\n- Facções com o que QUEREM (proativas) e como podem cruzar com a party\n- Espaços deliberados em branco (para improvisar e para os jogadores preencherem)\n\nResista a detalhar o que ninguém vai usar na mesa. Entregue MUNDO.md completo. O cenário é seu; eu ajudo a estruturar e a manter coerente.`
    },
    { id:"H", title:"Preparar a próxima sessão (Lazy DM)", when:"Vou mestrar em breve e quero prep leve e improvisável.",
      fill:"context", fillLabel:"Onde a party parou + o que deve acontecer (ou: use STATUS/CAMPANHA)",
      body:(p,n)=>`Prep da próxima sessão (método Lazy DM — leve, modular).\n\nCONTEXTO:\n${p.context||"[Onde a party parou + o que provavelmente vão perseguir. Ou: 'continue de STATUS.md e CAMPANHA.md']"}\n\nPrepare só o que a party vai tocar:\n- 🎬 Início forte (uma cena com impacto que puxa a mesa para dentro — nada de "vocês estão na taverna")\n- 🎯 2-4 cenas potenciais, modulares (em qualquer ordem, puláveis)\n- 🔑 Até ~5 segredos/pistas, ABSTRATOS de como serão revelados (improvise a descoberta)\n- 👥 NPCs prováveis (voz + o que querem — puxe de NPCs.md)\n- ⚔️ Ameaças/encontros possíveis (com dificuldade aproximada)\n- 💰 Recompensas que podem entrar\n- 🪝 Um gancho/cliffhanger para terminar\n\nDeixe o resto solto para improvisar. Tece os ganchos pessoais dos PJs (PJs.md) onde der. Entregue SESSAO.md completo.`
    },
    { id:"I", title:"Encarnar / criar um NPC", when:"Preciso de um NPC com voz e motivação, ou vou interpretar um na mesa.",
      fill:"npc", fillLabel:"Quem é o NPC (ou: o tipo que preciso) + a situação",
      body:(p,n)=>`NPC com voz e motivação.\n\nNPC:\n${p.npc||"[Quem é o NPC, ou o tipo que preciso (taverneiro? vilão? informante?) + a situação em que aparece]"}\n\nConsultando NPCs.md (se já existe) e MUNDO.md:\n- Voz distinta: ritmo, vocabulário, um tique/bordão (para soar igual toda vez)\n- O que ele QUER (motivação) e seus STAKES (o que arrisca) — movido por objetivo, não pela trama\n- Como vê a party e como isso pode mudar\n- Um traço marcante para reconhecimento\n- Se eu pedir, dê 2-3 falas de exemplo na voz dele para a situação\n\nSe for para a mesa agora, mantenha pronto para improviso. A interpretação na mesa é minha; você me dá a munição. Entregue NPCs.md completo com a ficha.`
    },
    { id:"J", title:"Improvisar agora (a party fez o inesperado)", when:"Estou mestrando e os jogadores saíram do previsto.",
      fill:"situation", fillLabel:"O que a party fez + onde isso pega de surpresa",
      body:(p,n)=>`Improviso em jogo (a party saiu do esperado — isso é feature).\n\nO QUE ACONTECEU:\n${p.situation||"[O que a party fez/decidiu + por que pega de surpresa / o que eu não preparei]"}\n\nMe ajude a responder com coerência, rápido, consultando MUNDO/CAMPANHA/NPCs:\n- O que a LÓGICA do mundo diz que aconteceria aqui (consequência orgânica, não punitiva)\n- Como dizer "sim, e..." (incorporar a ideia deles) ou "não exatamente, mas..." (redirecionar) — sem bloquear a criatividade\n- Que segredo/pista/NPC já existente posso puxar para cá (reaproveitar a prep, não jogar fora)\n- O que isso muda nos fios da campanha (a registrar depois)\n- Se for uma ação "legal e que não quebra o jogo", como deixar acontecer\n\nSeja conciso e prático — é para usar na hora. Depois, aponte o que vale virar cânone em MUNDO/CAMPANHA.`
    },
    { id:"K", title:"Processar a sessão (pós-mesa)", when:"Acabei de mestrar e quero registrar o que rolou.",
      fill:"recap", fillLabel:"O que aconteceu na sessão (suas anotações ou um relato)",
      body:(p,n)=>`Processar a sessão jogada.\n\nO QUE ROLOU:\n${p.recap||"[Suas anotações ou um relato do que aconteceu na sessão]"}\n\nFaça (o "diário da campanha"):\n- Resumo em 3-6 linhas (o "previously on" da próxima vez)\n- Decisões importantes da party + consequências\n- Cânone NOVO estabelecido (inclusive o que você improvisou e agora é verdade) → MUNDO/NPCs/CAMPANHA\n- Fios: segredos revelados, ganchos lançados/pagos, PROMESSAS feitas à party (para não esquecer)\n- NPCs: quem apareceu, mudança de estado\n- Spotlight: quem brilhou, quem ficou de fora (equilibrar na próxima)\n- Onde parou (o cliffhanger/estado final)\n\nEntregue CAMPANHA.md e STATUS.md completos e atualizados (e MUNDO/NPCs se mudaram). Isto vira a base para preparar a próxima.`
    },
    { id:"L", title:"Resolver um problema de mesa", when:"Algo na dinâmica da mesa não está funcionando (pacing, spotlight, tom, conflito).",
      fill:"problem", fillLabel:"O problema que percebi na mesa",
      body:(p,n)=>`Problema de mesa (a experiência dos jogadores vem antes da 'história perfeita').\n\nPROBLEMA:\n${p.problem||"[O que não está funcionando — sessões arrastadas? um jogador domina? outro sumiu? combate sem graça? tom desalinhado? conflito entre jogadores?]"}\n\nDiagnostique e proponha, com cuidado humano:\n- A causa provável (pacing? spotlight desigual? expectativas desalinhadas da Session Zero? sistema? o jogo virou monólogo do mestre?)\n- Para PACING: o que cortar (não se demorar em logística/maçaneta), como misturar altos e baixos, quando terminar a cena/sessão\n- Para SPOTLIGHT: como dar holofote a quem está sumindo (puxar o gancho pessoal dele de PJs.md)\n- Para CONFLITO/tom: como uma conversa franca (ou nova Session Zero) e ferramentas de segurança ajudam — a maioria dos conflitos é mal-entendido, não malícia\n- 1-2 ações concretas para a próxima sessão\n\nFoque no divertimento de todos. Não psicanalise os jogadores; trate como ajuste de mesa. Aponte o que registrar em REGRAS-CASEIRAS/STATUS.`
    },
  ]
};