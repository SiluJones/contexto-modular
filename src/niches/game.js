NICHES.game = {
  id:"game", label:"Game Design", icon:"🎮", group:"digital", category:"creative",
  cardColor:"#a78bfa", cardTags:["solo dev","indie","equipe pequena"],
  cardDesc:"Core loop, sistemas, mundo e produção — da experiência ao jogo terminado",
  intro:{
    headline:"Da experiência pretendida ao jogo terminado, sem o escopo te engolir.",
    lede:"O risco aqui é duplo: perder a coerência (a mecânica que não serve à experiência, a lore que se contradiz, o número de balanceamento esquecido) e — o assassino nº1 de jogos indie — o escopo que cresce até o projeto morrer. Aqui o design parte da emoção que o jogo quer provocar, os sistemas guardam a intenção por trás dos números, e cada \"não\" a uma feature é um \"sim\" ao jogo que você vai terminar.",
    ctxBlurb:"<code>JOGO.md</code> fixa a experiência e o core loop · <code>MECANICAS.md</code> guarda os sistemas e o porquê do balanceamento · <code>UNIVERSO.md</code> mantém a lore coerente · <code>PRODUCAO.md</code> protege o escopo.",
    hero:"game"
  },
  topbar:[
    { id:"project", label:"Jogo", placeholder:"ex: ecos-do-abismo" },
    { id:"genreSel", label:"Gênero", type:"select",
      options:["Ação","Plataforma","RPG","Estratégia","Puzzle","Roguelike","Metroidvania","Aventura","Simulação","Survival","Visual novel","Tiro","Card game","Outro"] },
    { id:"engineSel", label:"Engine", type:"select",
      options:["Godot","Unity","Unreal","GameMaker","Construct","Bevy","Phaser","LÖVE","RPG Maker","Própria","Indefinida"] },
    { id:"phase", label:"Fase", type:"select",
      options:["Conceito","Protótipo","Vertical slice","Produção","Polimento","Lançamento"] },
  ],
  behaviors:[
    ["experience_first","Começa pela experiência, não pela mecânica","Pensa primeiro na AESTHETIC — a emoção/experiência que o jogo quer provocar (medo, maestria, deslumbramento, tensão) — e só então quais mecânicas a produzem. Quando avalia uma mecânica, pergunta «que sensação isto cria no jogador?». Mecânica que não serve à experiência central é candidata a corte. (MDA: mecânicas → dynamics → aesthetics.)"],
    ["systems_thinking","Pensa em sistemas, não em features avulsas","Vê o jogo como sistemas que interagem (loops de feedback, economia, progressão), não uma lista de funcionalidades. Antes de adicionar algo, pergunta como interage com o que já existe e que comportamento emergente pode surgir. Mudar um número afeta a curva inteira — sinaliza o efeito sistêmico."],
    ["loop_anchor","Ancora no core loop","Todo design volta ao core loop — o ciclo central que o jogador repete e que precisa ser divertido sozinho («coletar→criar→sobreviver», «lutar→saquear→evoluir»). Polir o loop primário vem antes de adicionar o secundário. Uma mecânica que não reforça o loop é peso, não valor."],
    ["intent_over_number","Guarda a intenção por trás do número","Em balanceamento, registra a INTENÇÃO de design (a curva pretendida, a sensação alvo), não só o valor atual. Curvas têm propósito: exponencial evita nível-máximo instantâneo mas arrisca grind; logarítmica dá retorno decrescente; sigmoide modela a jornada. O número é meio; a experiência de esforço×recompensa (Flow) é o fim. Declara as premissas de quem-vai-jogar."],
    ["scope_killer","Trata escopo como o assassino que é","Scope creep é a maior causa de jogos indie não terminados. Avalia toda ideia nova contra a visão central: fortalece a experiência ou dilui? Cabe no tempo/equipe? Quando uma ideia é boa mas não cabe, registra para depois (pós-lançamento/DLC/sequência) em vez de embutir agora. Lembra: cada «não» é um «sim» ao jogo que será terminado; terminar algo modesto vale mais que abandonar algo ambicioso."],
    ["playtest_hypothesis","Trata design como hipótese a testar","Toda decisão de design é uma hipótese sobre como o jogador vai reagir — e o jogador real surpreende. Sugere validar barato e cedo (protótipo de papel, vertical slice, playtest) antes de comprometer produção. Distingue o que é fato observado em teste do que é suposição do designer."],
    ["creator_decides","Explora; o designer decide","O assistente explora possibilidades (variações de mecânica, e-se de sistema, opções de lore), mas a visão é do designer. Não impõe «a solução certa»: levanta opções com trade-offs e devolve a escolha. Para julgamento de diversão/feel — subjetivo — dá sua leitura e deixa a decisão com quem cria."],
    ["builds_game","Cria o jogo, não só o documento","Quando o usuário quiser, o assistente é game designer, desenvolvedor E programador: projeta a mecânica E entrega o artefato — protótipo jogável (código), conteúdo (níveis, diálogos, tabelas de balanceamento), tutorial narrativo. Documento é meio; o fim é coisa testável. Protótipo mínimo antes de sistema completo. Quando a tarefa é código, valem as práticas de dev: arquivo completo e funcional, sem quebrar o que existe — e o design registrado (MECANICAS/ROTEIRO) acompanha o que foi construído."],
  ],
  builderSection:{
    title:"O jogo",
    hint:"Define o enquadramento. Entra nas instruções para o assistente respeitar gênero, escopo e os pilares de experiência.",
    items:[
      { kind:"radios", label:"Escopo realista", name:"scope", opts:[
        ["jam","Game jam (dias)"], ["small","Pequeno (semanas/meses)"], ["medium","Médio (meses/1 ano)"], ["large","Grande (1 ano+)"] ] },
      { kind:"radios", label:"Equipe", name:"team", opts:[
        ["solo","Solo"], ["duo","Dupla"], ["small_team","Time pequeno (3-6)"], ["hobby","Hobby/tempo livre"] ] },
      { kind:"chips", label:"Pilares de experiência (a sensação alvo)", name:"pillars", opts:[
        ["mastery","Maestria/habilidade"], ["exploration","Exploração/descoberta"], ["tension","Tensão/medo"], ["narrative","História/imersão"], ["strategy","Estratégia/decisão"], ["creativity","Criatividade/expressão"], ["social","Social/competição"], ["relax","Relaxamento/fluxo"], ["progression","Progressão/recompensa"] ] },
    ]
  },
  conventions:[
    "O design parte da experiência alvo (aesthetic); mecânica que não a serve é candidata a corte.",
    "Tudo se ancora no core loop; polir o primário vem antes de adicionar o secundário.",
    "Em balanceamento, registrar a INTENÇÃO de design (curva, sensação), não só o número atual — e as premissas de quem vai jogar.",
    "Escopo é o filtro: ideia nova é testada contra a visão e o tempo; o que não cabe vai para 'depois' (IDEIAS de pós-lançamento), não para o projeto atual.",
    "Decisão de design é hipótese: validar barato (protótipo, vertical slice, playtest) antes de comprometer produção.",
    "Lore e regras vivem coerentes em UNIVERSO/MECANICAS; o assistente consulta antes de inventar fato do mundo ou do sistema.",
    "O assistente também CONSTRÓI: protótipo jogável, código, conteúdo e dados — design vira artefato testável, não só documento. A narrativa cena a cena (missões, diálogos ramificados, lore passivo) vive em ROTEIRO.md."
  ],
  triggersExtra:[
    ["Decisão de mecânica ou sistema", "Entrega MECANICAS.md completo (a regra + a intenção/curva por trás + o efeito sistêmico)."],
    ["Fato novo de lore/mundo/personagem", "Entrega UNIVERSO.md completo com o cânone atualizado."],
    ["Mudança de escopo (corte, adição, fase)", "Entrega PRODUCAO.md completo (o escopo atual + o que foi cortado/adiado e por quê)."],
    ["Resultado de playtest", "Entrega STATUS.md e MECANICAS.md (o que o teste confirmou/refutou; o que ajustar)."],
    ["Ideia que não cabe agora", "Registra em PRODUCAO.md (ou IDEIAS) como pós-lançamento/DLC, sem inflar o escopo atual."],
    ["Cena, missão ou diálogo ramificado escrito/decidido", "Entrega ROTEIRO.md completo (a cena no formato de jogo: escolhas com consequências, requisitos, lore passivo, estado de sincronia)."],
  ],
  contextFiles:[
    { name:"JOGO.md", cat:"essencial", role:"A visão: pitch, experiência alvo, core loop, pilares, público. O norte. Estável.",
      content:`# JOGO.md — [Nome do Jogo]

> A **visão** do jogo — o DNA dele. O assistente lê primeiro para alinhar todo design.
> **Estável** e enxuto: sucessos indie têm GDD enxuto focado no core loop e no feel, não em detalhe massivo. Mantenha vivo, mas curto.

---

## Pitch (60 segundos)
[O jogo em 2-4 frases. O quê, para quem, e por que é especial. Algo que você diria a um amigo ou publisher.]

## Experiência alvo (a aesthetic)
> O passo mais importante: o que o jogador deve SENTIR. Tudo o mais serve a isto.
- **Emoção central:** [medo / maestria / deslumbramento / tensão / aconchego / poder...]
- **Fantasia do jogador:** ["ser um X que faz Y" — o papel que o jogo entrega.]
- **Momento dos sonhos:** [a cena/situação que, se acontecer, define o jogo.]

## Core loop
> O ciclo central que o jogador repete — precisa ser divertido sozinho.
[Ex.: explorar → enfrentar → coletar → melhorar → explorar mais fundo. Descreva o loop e por que ele prende.]

## Pilares de design (3-4)
> As regras que filtram decisões. Toda feature deve servir a um pilar.
1. **[Pilar]** — [o que significa na prática; o que ele inclui e exclui.]
2. **[Pilar]** — [...]
3. **[Pilar]** — [...]

## Público e referências
- **Para quem é:** [o jogador-alvo; o que ele já joga e ama.]
- **Referências (DNA):** [3-5 jogos + o que especificamente puxamos de cada — mecânica? tom? estrutura?]
- **O que nos diferencia:** [o twist que nos separa das referências.]

## O que o jogo NÃO é (anti-escopo)
> Limites de visão. Evita o jogo virar outra coisa.
- [Ex.: não é mundo aberto; não tem multiplayer; não é difícil estilo soulslike.]
`},
    { name:"MECANICAS.md", cat:"essencial", role:"Sistemas, regras e balanceamento — com a INTENÇÃO de design por trás dos números. Cresce.",
      content:`# MECANICAS.md — Sistemas e Regras

> O coração jogável: mecânicas, sistemas e balanceamento. **Cresce** conforme o design se firma.
> Regra de ouro: registre a INTENÇÃO (a curva/sensação pretendida), não só o número — quem chega depois (ou você daqui a 3 meses) precisa saber o porquê.

---

## Mecânicas centrais (servem ao core loop)
### [Mecânica] — [a qual pilar/experiência serve]
- **Como funciona:** [a regra, clara o bastante para implementar.]
- **Que sensação cria:** [a aesthetic que ela produz no jogador.]
- **Interage com:** [outros sistemas que ela afeta / que a afetam — pensamento sistêmico.]
- **Entradas e saídas:** [o que consome, o que gera — se é parte da economia.]

---

## Economia / progressão
> Os recursos e como fluem. Economia começa com INTENÇÃO, senão colapsa.
- **Recursos:** [o que o jogador acumula/gasta; de onde vem (sources) e para onde vai (sinks).]
- **Curva de progressão:** [exponencial / logarítmica / sigmoide / linear — e POR QUÊ essa. Qual a sensação pretendida (esforço×recompensa).]
- **Premissas de jogador:** [estamos assumindo qual tempo de jogo / habilidade? — o balanceamento depende disso.]
- **Risco de quebra:** [inflação, grind, mudflation, exploit — o que vigiar.]

## Balanceamento (valores + porquê)
| Sistema | Valor atual | Intenção (a sensação/curva) | Status |
|---|---|---|---|
| [ex.: dano base] | [10] | [matar inimigo comum em 3 hits = sensação de peso sem tédio] | [a testar / validado] |

## Controles / verbos do jogador
- [Os verbos centrais (pular, atirar, falar, construir) — o vocabulário de ação do jogo.]

## Decisões de design (DEC)
> Escolhas de mecânica/sistema com o porquê. Evita rediscutir.
### DEC-[N] — [a decisão] · [data]
[O que foi decidido, a intenção por trás, alternativas, e o efeito sistêmico esperado.]
`},
    { name:"UNIVERSO.md", cat:"essencial", role:"Lore, mundo, personagens e tom — a bíblia de ficção do jogo. Estável; consultada antes de inventar.",
      content:`# UNIVERSO.md — Mundo e Lore

> A **bíblia de ficção** do jogo — mantém o mundo coerente. O assistente consulta antes de afirmar qualquer fato do universo.
> **Estável** e enxuto (Tier 1 primeiro): só o que importa para o jogo que está sendo feito; não escreva uma enciclopédia que ninguém vai usar.

---

## Tom e fantasia
[A sensação do mundo: sombrio? caprichoso? épico? E a fantasia que ele sustenta (ligada à experiência alvo de JOGO.md).]

## Mundo — essencial (Tier 1)
- **Cenário / época:** [onde e quando se passa.]
- **Regras do mundo:** [o que é possível/impossível; a lógica interna que não pode ser quebrada — magia/tecnologia com seu custo e limite.]
- **Conflito central:** [a tensão que move a ficção do jogo.]

## Personagens
### [Nome] — [papel: jogável / NPC / antagonista]
- **Quem é:** [em 2-3 traços concretos.]
- **Aparência (o que não pode variar):** [traços-chave para arte e consistência.]
- **Função no jogo:** [o que faz pela experiência/mecânica do jogador.]
- **Voz / fala:** [como fala, se tiver diálogo.]

## Grafia canônica
> Nomes inventados se escrevem sempre do mesmo jeito.
- **[Nome/termo]** — [grafia oficial + significado.]

## Lore Tier 2 (só se o jogo precisar)
> História antiga, facções, detalhe cultural. Adicione sob demanda.
- [...]
`},
    { name:"ARTE-E-SOM.md", cat:"essencial", role:"Direção de arte e áudio: estilo visual, paleta, referências, feel sonoro. Estável.",
      content:`# ARTE-E-SOM.md — Direção de Arte e Áudio

> Mantém a coerência audiovisual — o jogo precisa parecer e soar como uma coisa só.
> **Estável**. O assistente consulta para sugerir dentro do estilo, não inventar fora dele.

---

## Direção de arte
- **Estilo visual:** [pixel art / low poly / 2D desenhado / vetorial... + referências.]
- **Paleta:** [cores-chave e o clima que criam. Em pixel art, ligar ao nicho de Pixel Art se for o caso.]
- **Inspirações visuais:** [jogos/obras + o que puxar de cada.]
- **Legibilidade:** [como o jogador lê a informação importante na tela (o que se destaca, o que é fundo).]
- **Restrições técnicas:** [resolução, nº de cores, orçamento de animação — o que condiciona o estilo.]

## Feel / juiciness
> O que faz a ação ser gostosa: feedback visual e sonoro de cada interação.
- [Screen shake, partículas, hit stop, telegrafia — o que dá peso e resposta às ações.]

## Direção de áudio
- **Música:** [estilo, instrumentação, quando muda; o clima que sustenta.]
- **SFX:** [a personalidade sonora; sons-assinatura.]
- **Diegético vs. não-diegético:** [o que vem do mundo vs. da trilha.]

## Identidade
- [O elemento audiovisual-assinatura — o que faz alguém reconhecer o jogo numa screenshot ou num clipe de som.]
`},
    { name:"PRODUCAO.md", cat:"essencial", role:"Escopo, marcos, vertical slice e o que foi cortado/adiado. A defesa contra scope creep. Rolante-cresce.",
      content:`# PRODUCAO.md — Escopo e Produção

> A **defesa contra o scope creep** — o assassino nº1 de jogos indie. Mantém o escopo honesto e o que ficou para depois.
> O assistente consulta para julgar se uma ideia nova cabe, e registra cortes/adiamentos aqui.

---

## MVP — o jogo mínimo que ainda é o jogo
> A menor versão que entrega a experiência central. Foco absoluto até estar pronto.
- [O que o MVP precisa ter (e SÓ isso) para o core loop funcionar e a experiência aparecer.]

## Vertical slice (a fatia completa)
> Um pedaço pequeno mas POLIDO — o jogo final em miniatura. Cortar escopo, não qualidade.
- [Qual fatia representa o jogo inteiro: ex. um nível completo do início ao fim, com arte/som/feel finais.]
- **Status:** [não iniciado / em construção / pronto.]

## Escopo atual (o que está dentro)
- [Funcionalidade/conteúdo comprometido para esta versão.]

## Marcos
| Marco | O que entrega | Alvo | Status |
|---|---|---|---|
| [Protótipo] | [core loop jogável] | [data] | [...] |
| [Vertical slice] | [fatia polida] | [...] | [...] |

## ✂️ Cortado / adiado (o cemitério saudável)
> Cada "não" é um "sim" ao jogo terminado. Ideias boas que não cabem AGORA — guardadas para pós-lançamento/DLC/sequência.
- **[Ideia/feature]** — adiada para [pós-lançamento / v2 / nunca] porque [não serve ao core / não cabe no tempo].

## Riscos de produção
- [O que pode estourar o prazo; a tarefa que você está subestimando; dependência arriscada.]
`},
    { name:"STATUS.md", cat:"rolante", role:"Onde o desenvolvimento está agora: o que funciona, o que está em construção, próximos passos. Rolante.",
      content:`# STATUS.md — Estado do Desenvolvimento

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Item resolvido sai daqui (vira marco em PRODUCAO ou nota no log).

---

## Fase
[Conceito / Protótipo / Vertical slice / Produção / Polimento / Lançamento]

## ✅ Funcionando (jogável)
- [O que já está implementado e funciona.]

## 🔧 Em construção
- [O que está sendo feito agora + onde parei.]

## 🐛 Quebrado / a corrigir
- [Bugs ou mecânicas que não estão funcionando como deviam.]

## 🎯 Próxima ação
- [O próximo passo concreto de design/implementação.]

## 🧪 Para playtestar
- [Hipóteses de design esperando teste; o que validar com jogadores.]

## ⚠️ Atenção / escopo
- [Risco de scope creep rondando; prazo apertado; sistema que está crescendo demais.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    { name:"NIVEIS.md", cat:"opcional", role:"OPCIONAL — design de níveis/fases/encontros. Use quando o jogo tem level design estruturado.",
      content:`# NIVEIS.md — Design de Níveis

> **Opcional.** Use quando o jogo tem níveis, fases, mapas ou encontros desenhados (plataforma, metroidvania, RPG, puzzle).
> Cada nível ensina/testa algo do core loop; o conjunto forma uma curva de dificuldade.

---

## Filosofia de level design
- **Curva de dificuldade:** [como a dificuldade sobe ao longo do jogo; onde dá respiro.]
- **Pacing:** [alternância de tensão/calma, ação/exploração.]
- **Ensinar sem tutorial:** [como os níveis introduzem mecânicas pela própria estrutura.]

## [Nível / fase / área] — [nome]
- **Propósito:** [o que ensina ou testa; que mecânica/sensação destaca.]
- **Novo elemento:** [o que é introduzido aqui pela primeira vez.]
- **Beat de experiência:** [o momento marcante que este nível entrega.]
- **Dificuldade:** [onde fica na curva.]

---

## [Próximo nível]
[...]
`},
    { name:"ROTEIRO.md", cat:"opcional", role:"OPCIONAL — a casa da narrativa cena a cena: missões, diálogos ramificados, lore passivo, cutscenes, tutorial narrativo. Use quando o jogo conta história.", content:`# ROTEIRO.md — Narrativa cena a cena

> Aqui vive o que o jogador VIVE, na ordem em que vive. Regras do mundo ficam em UNIVERSO.md; mecânica em MECANICAS.md. Narrativa de jogo é ramificada e interativa — escolha tem consequência.

## Espinha (missões principais) × Opcional (sidequests)
| # | Cena/Missão | Tipo | Estado | Depende de |
|---|---|---|---|---|
| 01 | [nome] | principal | rascunho / escrita / AGUARDANDO DESIGN | [mecânica/ação a confirmar] |

> **AGUARDANDO DESIGN:** cena cuja ação/mecânica ainda não foi confirmada pelo design — registre a intenção em 1 linha e NÃO detalhe até confirmar (evita retrabalho e dessincronia entre frentes/projetos).

## Formato de cena
CENA: [nome] · LOCAL: [INT/EXT — onde — quando]
ENTRADA: [por que o jogador está aqui / o que ele quer]

[Ação/descrição curta]

PERSONAGEM: fala

[OPÇÕES DO JOGADOR:]
[A] "..." → consequência (relação, item, rota, flag)
[B] "..." → consequência
[C] [REQUISITO: habilidade/objeto ≥ X] "..." → consequência

SAÍDA: [o que mudou no mundo/estado ao fim da cena]

## Lore passivo
(worldbuilding que o jogador DESCOBRE: descrição de item, diário, carta, ambiente — 1 linha por peça + onde vive no jogo)

## Cutscenes
(sequências não-interativas — formato de roteiro de cinema, curtas; marque o gatilho que as dispara)

## Tutorial narrativo
(que mecânica é ensinada por qual cena — ensinar JOGANDO, dentro da história, não por caixa de texto)
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Jogo]

## Foco da sessão
[Design de mecânica, balanceamento, lore, level design, produção, playtest.]

## Feito
- [O que avançou no design/implementação.]

## Decisões de design
- [O que virou DEC em MECANICAS.md (com a intenção por trás).]

## Código / build
- [Quando o projeto CONSTRÓI o jogo (não só projeta): o que foi implementado/refatorado no protótipo, arquivos e sistemas tocados, bugs técnicos resolvidos. Apague esta seção se este projeto é só design.]

## Sistemas / balanceamento
- [Números ajustados + a intenção; efeito sistêmico observado.]

## Mundo / lore
- [Fato novo / grafia / personagem → UNIVERSO.md.]

## Escopo
- [Algo entrou ou foi cortado/adiado? → PRODUCAO.md. Cada 'não' registrado.]

## Playtest
- [O que foi testado, o que o jogador real fez, o que confirmou/refutou.]

## Onde parei
[Estado + próximo passo. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: o que funciona, em construção, próxima ação", active:true },
    { key:"mecanicas", name:"MECANICAS.md", role:"completo, se houve decisão de mecânica/sistema/balanceamento", active:true },
    { key:"producao", name:"PRODUCAO.md", role:"completo, se o escopo mudou (corte, adição, marco)", active:true },
    { key:"universo", name:"UNIVERSO.md", role:"completo, se surgiu fato novo de lore/mundo/personagem", active:false },
    { key:"roteiro", name:"ROTEIRO.md", role:"completo, se cena/missão/diálogo ramificado foi escrito ou alterado", active:false },
    { key:"arte", name:"ARTE-E-SOM.md", role:"completo, se a direção audiovisual mudou", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Explorar conceito / core loop", when:"Tenho uma ideia de jogo e quero firmar a experiência e o loop antes de detalhar.",
      fill:"idea", fillLabel:"A ideia do jogo + a sensação/fantasia que imagino",
      body:(p,n)=>`Exploração de conceito de jogo.\n\nIDEIA:\n${p.idea||"[A ideia + a sensação/fantasia que imagino para o jogador]"}\n\nComece pela EXPERIÊNCIA (aesthetic), não pela mecânica:\n- Qual é a emoção central e a fantasia do jogador? O "momento dos sonhos"?\n- Proponha 2-3 versões de CORE LOOP que produziriam essa experiência — cada uma com o ciclo e por que prende\n- Para cada loop, quais mecânicas centrais ele exige (poucas — foco)\n- Sugira 3-4 pilares de design que filtrariam decisões\n- Aponte o anti-escopo: o que este jogo NÃO deveria tentar ser\n- Referências úteis (jogos com DNA parecido) e o que puxar de cada\n\nNão detalhe sistemas ainda — firme a visão. A escolha é sua; eu apresento opções com trade-offs. Quando você escolher, registramos em JOGO.md.`
    },
    { id:"H", title:"Projetar / revisar uma mecânica", when:"Quero desenhar uma mecânica ou sistema, ou revisar um que já tenho.",
      fill:"mech", fillLabel:"A mecânica/sistema + o que ela deve fazer pela experiência",
      body:(p,n)=>`Design de mecânica.\n\nMECÂNICA:\n${p.mech||"[A mecânica/sistema + que sensação ou função ela deve ter no jogo]"}\n\nConsultando JOGO.md (experiência, core loop, pilares) e MECANICAS.md:\n- Que SENSAÇÃO esta mecânica cria? Serve à experiência alvo e ao core loop, ou é peso?\n- Como ela INTERAGE com os sistemas que já existem? Que comportamento emergente pode surgir? (pensamento sistêmico)\n- Entradas/saídas: ela afeta a economia? como?\n- Onde pode quebrar ou virar exploit?\n- Versão mínima viável da mecânica (para protótipo) vs. versão completa\n\nSe envolver números, registre a INTENÇÃO (a sensação/curva pretendida), não só o valor. Entregue MECANICAS.md completo. Marque o que é hipótese a testar em playtest.`
    },
    { id:"I", title:"Balancear um sistema", when:"Tenho números (dano, custo, XP, drop) e quero equilibrar com intenção.",
      fill:"system", fillLabel:"O sistema + os números atuais + a sensação que eu quero",
      body:(p,n)=>`Balanceamento de sistema.\n\nSISTEMA:\n${p.system||"[O sistema + números atuais + a sensação/experiência pretendida]"}\n\nEquilibre a partir da INTENÇÃO, não do número solto:\n- Qual a curva pretendida e por quê? (exponencial evita max instantâneo mas arrisca grind; logarítmica = retorno decrescente; sigmoide modela a jornada)\n- Declare as PREMISSAS de jogador (que tempo de jogo / habilidade estamos assumindo?) — o balanceamento depende disso\n- Mapeie sources (de onde o recurso vem) e sinks (para onde vai) — o fluxo precisa fechar, senão dá inflação ou escassez\n- Aponte onde pode quebrar: exploit, grind, mudflation\n- Sugira como validar barato (simular casos, ou playtest dirigido) antes de fechar\n- Lembre: o alvo é o Flow (esforço×recompensa equilibrados), não um número "certo"\n\nEntregue MECANICAS.md completo com valores E a intenção por trás. Marque o que precisa de teste real.`
    },
    { id:"J", title:"Decisão de escopo (cabe ou corta?)", when:"Tive uma ideia nova (ou estou na dúvida) e preciso decidir se entra no jogo.",
      fill:"feature", fillLabel:"A ideia/feature + onde o projeto está hoje (tempo, equipe, fase)",
      body:(p,n)=>`Decisão de escopo.\n\nIDEIA E CONTEXTO:\n${p.feature||"[A ideia/feature nova + onde o projeto está: tempo restante, equipe, fase]"}\n\nAvalie com honestidade brutal (escopo é o assassino nº1 de jogos indie), consultando JOGO.md (visão) e PRODUCAO.md (escopo atual):\n- Esta ideia FORTALECE a experiência central ou DILUI o conceito? Serve a um pilar?\n- Reforça o core loop, ou é um sistema paralelo que compete por atenção?\n- Cabe no tempo/equipe REAL? Qual o custo escondido (cada feature puxa arte, som, teste, bugs)?\n- Se é boa mas não cabe: como registrá-la para pós-lançamento/DLC/sequência sem implementar agora?\n\nDê um veredito claro: ENTRA (e o que sai para abrir espaço) ou FICA PARA DEPOIS. Lembre que cada "não" é um "sim" ao jogo terminado. Entregue PRODUCAO.md completo (escopo + o que foi adiado, com o porquê).`
    },
    { id:"K", title:"Preparar / analisar um playtest", when:"Vou testar com jogadores, ou já testei e quero interpretar o resultado.",
      fill:"context", fillLabel:"O que vou testar (ou: o que aconteceu no teste + o que observei)",
      body:(p,n)=>`Playtest.\n\nCONTEXTO:\n${p.context||"[O que quero testar — qual hipótese de design. Ou: o que aconteceu no teste + o que os jogadores fizeram/disseram]"}\n\nSe for PREPARAR:\n- Qual é a HIPÓTESE de design a validar? (ex.: "o tutorial ensina o pulo duplo sem texto")\n- O que observar (onde o jogador trava, hesita, se frustra, sorri) — comportamento, não só opinião\n- Perguntas a fazer DEPOIS de jogar (abertas, não indutivas)\n- O mínimo a ter pronto para o teste ser útil\n\nSe for ANALISAR:\n- O que os jogadores FIZERAM vs. o que eu esperava (a intenção de design se confirmou?)\n- Separe o problema real (o que travou) da solução que o jogador sugeriu — a solução é sua\n- O que é sinal (padrão entre testers) vs. ruído (um tester só)\n- O que ajustar, e o que NÃO mudar ainda (esperar mais dados)\n\nEntregue STATUS.md e, se houve ajuste de design, MECANICAS.md. Marque hipótese confirmada/refutada.`
    },
    { id:"L", title:"Diagnosticar 'não está divertido'", when:"Algo no jogo não engaja e não sei o que é.",
      fill:"problem", fillLabel:"O que está sem graça / o sintoma que você sente (cole o que puder)",
      body:(p,n)=>`Diagnóstico de diversão.\n\nSINTOMA:\n${p.problem||"[O que está sem graça / o que você ou os testers sentem que não funciona]"}\n\nInvestigue por camadas (MDA: o problema na aesthetic costuma vir de uma mecânica), consultando JOGO.md e MECANICAS.md:\n- A experiência que está faltando: o jogo deveria provocar QUE sensação aqui, e o que provoca em vez disso?\n- Suspeitos comuns: core loop fraco (o ciclo não recompensa); feedback insuficiente (ação sem resposta visual/sonora — juiciness); pacing (arrasta ou atropela); curva errada (fácil/difícil demais — fora do Flow); falta de agência (escolhas sem consequência); ausência de clareza (jogador não entende o que fazer)\n- Para cada suspeito, o que olharia para confirmar\n- A mudança de MENOR custo que testaria a hipótese mais provável primeiro\n\nDê sua leitura como designer, mas o julgamento de "ficou divertido" é meu e do playtest. Proponha 1-2 experimentos baratos antes de qualquer redesign grande.`
    },
  ]
};