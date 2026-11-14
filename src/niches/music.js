NICHES.music = {
  id:"music", label:"Música", icon:"🎵", group:"literary", category:"creative",
  cardColor:"#22d3ee", cardTags:["composição","produção","letra"],
  cardDesc:"Conceito, letra, arranjo e mix — do esboço à faixa que soa como você imaginou",
  intro:{
    headline:"Do esboço à faixa pronta, mantendo a voz e a intenção de cada decisão.",
    lede:"O risco aqui é perder o fio entre o que você imaginou e o que ficou: a sonoridade-alvo que se dilui, a letra que perde a voz, a decisão de arranjo que ninguém lembra por que tomou. Aqui o conceito sonoro fica definido, a letra guarda prosódia e intenção, e cada escolha de harmonia/arranjo tem o porquê registrado — para a faixa soar como uma coisa só, do demo ao master.",
    ctxBlurb:"<code>PROJETO.md</code> fixa o conceito e a sonoridade-alvo · <code>FAIXAS.md</code> cataloga as músicas e seu estado · <code>LETRAS.md</code> guarda letra com prosódia · <code>ARRANJO.md</code> registra estrutura e decisões de produção.",
    hero:"music"
  },
  topbar:[
    { id:"project", label:"Projeto", placeholder:"ex: ep-luz-baixa" },
    { id:"genreSel", label:"Estilo dominante", type:"select",
      options:["Pop","Rock","Hip-hop/Rap","Eletrônica","R&B/Soul","Folk/Acústico","MPB","Sertanejo","Indie","Metal","Jazz","Trilha/Instrumental","Outro"] },
    { id:"daw", label:"DAW / ferramenta", type:"select",
      options:["Ableton Live","FL Studio","Logic Pro","Reaper","Cubase","Bitwig","Studio One","GarageBand","Bandlab","Reason","Outra"] },
    { id:"producao", label:"Produção", type:"select", options:["Tocada","Gerada por IA (Suno)"] },
    { id:"langSel", label:"Idioma das letras", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["sound_honest","Honestidade sobre o som (não ouço áudio)","O assistente NÃO ouve o áudio: não finge avaliar timbre, mix ou afinação de algo que não pode escutar. Trabalha com o que é textual e teórico — estrutura, harmonia, letra, arranjo no papel, checklists técnicos — e pede que o produtor julgue de ouvido o que é sonoro. Não inventa que 'ficou bom' sem base.","Não ouve áudio: não finge avaliar timbre, mix ou afinação."],
    ["lyric_voice","Letra com voz coerente e prosódia","Mantém a voz lírica consistente (consulta LETRAS) e busca prosódia — o casamento de palavra e música. Letra forte parte do específico (a imagem concreta, não o tema abstrato) para chegar ao universal. Rima é ferramenta: perfeita resolve, imperfeita (assonância) cria tensão; nem toda linha precisa rimar. Mostra, não explica a emoção.","Mantém a voz lírica (LETRAS) e busca prosódia entre palavra e música."],
    ["harmony_human","Harmonia e teoria em humanês","Explica harmonia, escala e teoria em linguagem clara, com o nome técnico ao lado, não em jargão hermético. Liga a teoria ao EFEITO (que sensação a progressão cria), não à regra pela regra. A teoria serve à música; quando o ouvido do artista contraria a teoria, o ouvido costuma ter razão.","Explica teoria em linguagem clara, com o nome técnico ao lado."],
    ["ref_lens","Referência como lente, não cópia","Usa faixas de referência para mirar (sonoridade, arranjo, mix), não para copiar. Ajuda a extrair O QUE numa referência serve ao projeto (a textura? a estrutura? o groove?) e a traduzir para a voz do artista. Reference track é bússola, não molde."],
    ["arrange_motion","Arranjo é movimento (entradas e saídas)","Pensa arranjo como dinâmica: quando cada elemento entra e sai é o que torna a faixa viva. Contraste verso↔refrão (densidade, registro, energia); o refrão costuma subir em altura e encher a instrumentação. Defende tirar para destacar — strip down até achar o que é único na música.","Arranjo é dinâmica: quando cada elemento entra e sai."],
    ["record_decisions","Registra a decisão e a intenção","Decisão de produção/arranjo/harmonia relevante vira registro com o porquê (a sensação pretendida), não só o que foi feito. Em projeto longo (EP/álbum), é o que mantém coerência entre faixas e o que evita refazer escolhas.","Decisão de produção vira registro com a sensação pretendida."],
    ["creator_plays","Orienta e propõe; o artista toca e decide","O assistente explora possibilidades (progressões, estruturas, variações de letra, ideias de arranjo), mas a execução e o gosto são do artista. Levanta opções com o efeito de cada uma; a decisão final — sobretudo a estética/sonora — é de quem faz a música.","Propõe possibilidades; a execução e o gosto são do artista."],
  ],
  builderSection:{
    title:"O projeto musical",
    hint:"Define o enquadramento. Entra nas instruções para o assistente respeitar formato, papel e foco.",
    items:[
      { kind:"radios", label:"Formato", name:"format", opts:[
        ["single","Single"], ["ep","EP"], ["album","Álbum"], ["soundtrack","Trilha/instrumental"], ["beat","Beat/instrumental solto"] ] },
      { kind:"radios", label:"Papel principal", name:"role", opts:[
        ["composer","Compositor(a)"], ["producer","Produtor(a)"], ["lyricist","Letrista"], ["artist","Artista/intérprete"], ["band","Banda"], ["all","Faço tudo"] ] },
      { kind:"chips", label:"Foco do trabalho", name:"focus", opts:[
        ["writing","Composição"], ["lyrics","Letra"], ["harmony","Harmonia/teoria"], ["arrangement","Arranjo"], ["production","Produção/beat"], ["mixing","Mix"], ["mastering","Master"], ["concept","Conceito do projeto"] ] },
    ]
  },
  conventionsSoCerebro:[
    "Referência é lente para mirar, não molde para copiar — traduzir o que serve para a voz do artista.",
    "Arranjo é movimento (entradas/saídas, contraste verso↔refrão); tirar para destacar.",
    "Decisões de produção/harmonia/arranjo vão com o porquê (a intenção/sensação) — coerência entre faixas.",
  ],
  conventions:[
    "O assistente não ouve áudio: julga estrutura/harmonia/letra no papel e dá checklists; o sonoro é avaliado de ouvido pelo artista.",
    "Letra busca prosódia (palavra+música), parte do específico para o universal; rima é ferramenta, não obrigação.",
    "Teoria/harmonia em humanês, ligada ao efeito; quando o ouvido contraria a regra, o ouvido tem prioridade.",
    "Referência é lente para mirar, não molde para copiar — traduzir o que serve para a voz do artista.",
    "Arranjo é movimento (entradas/saídas, contraste verso↔refrão); tirar para destacar.",
    "Decisões de produção/harmonia/arranjo vão com o porquê (a intenção/sensação) — coerência entre faixas."
  ],
  triggersExtra:[
    ["Decisão de harmonia/arranjo/produção", "Entrega ARRANJO.md completo (a decisão + a intenção/sensação por trás)."],
    ["Letra avançou (verso, refrão, revisão)", "Entrega LETRAS.md completo com a versão atual."],
    ["Faixa nova ou mudança de estado de faixa", "Entrega FAIXAS.md completo (estado: ideia/demo/produção/mix/master)."],
    ["Conceito/sonoridade do projeto definido", "Entrega PROJETO.md completo atualizado."],
  ],
  contextFiles:[
    { name:"PROJETO.md", cat:"essencial", role:"Conceito, sonoridade-alvo, voz lírica, referências. O norte do projeto. Estável.", short:"Conceito, sonoridade-alvo, referências.",
      content:`# PROJETO.md — [Nome do Projeto]

> Arquivo **estável**. O assistente lê primeiro para alinhar tudo ao conceito e à sonoridade pretendida.
> Muda pouco: só em reorientação real do projeto.

---

## Conceito
[O que este projeto é, em 2-4 frases. A ideia/sentimento que ele explora; o que o une (se for EP/álbum).]

## Sonoridade-alvo
> A imagem sonora que se persegue — o "norte" do som.
- **Vibe / mood:** [a sensação central — ex.: noturno, melancólico com energia contida.]
- **Instrumentação característica:** [os sons que definem o projeto.]
- **Produção / textura:** [cru e orgânico? polido e denso? lo-fi? espaçoso?]
- **BPM e tom (se já há):** [faixa de andamento e tonalidades, se definidos.]

## Voz lírica (se há letra)
- **Quem fala:** [a persona/ponto de vista das letras.]
- **Temas:** [o que as letras investigam.]
- **Tom da escrita:** [confessional? narrativo? abstrato? direto?]

## Referências (lentes, não moldes)
> Para cada uma, O QUE puxar — não para copiar.
- **[Artista/faixa]** — [o que serve: a textura? a estrutura? o groove? o tom de letra?]

## O que o projeto NÃO é
> Limites de identidade sonora — evita virar outra coisa.
- [Ex.: não é dançante; não usa autotune; não é épico/cinematográfico.]

## Idioma e formato
- **Idioma das letras:** [pt-BR / outro]
- **Formato:** [single / EP / álbum / trilha] — [nº de faixas previstas.]
`},
    { name:"FAIXAS.md", cat:"essencial", role:"Catálogo das faixas: estado (ideia→master), tom, BPM, o que falta. Cresce.", short:"Faixas: estado, tom, BPM, o que falta.",
      content:`# FAIXAS.md — Catálogo de Faixas

> **Cresce** conforme as músicas nascem e avançam. Mostra o estado de cada faixa e o que falta.
> O assistente consulta para saber onde cada música está e manter coerência no conjunto.

---

## [Título da faixa] — [estado]
- **Estado:** [ideia / demo / produção / mix / master / pronta] (as 4 fases: demo → gravação → mix → master)
- **Tom / BPM:** [ex.: Lá menor, 92 BPM.]
- **Conceito:** [do que a música trata / a sensação dela.]
- **Estrutura:** [ex.: intro–verso–pré–refrão–verso–refrão–ponte–refrão.]
- **O que já tem:** [letra? melodia? base? gravação?]
- **O que falta:** [próximo passo concreto.]
- **Notas:** [referência específica desta faixa; problema em aberto.]

---

## [Próxima faixa]
[...]

---

## Ordem / sequenciamento (se EP/álbum)
> A ordem das faixas conta uma história — energia, tonalidade, pacing do disco.
- [Ordem provisória + a lógica (abre com X pela energia, fecha com Y pelo clima).]
`},
    { name:"LETRAS.md", cat:"essencial", role:"Letras em construção, com voz, prosódia e o que cada uma quer dizer. Cresce.", short:"Letras em construção, com prosódia.",
      content:`# LETRAS.md — Letras

> **Cresce.** As letras e o trabalho sobre elas. O assistente consulta para manter a voz lírica e a prosódia.
> Princípios: partir do específico (a imagem concreta) para o universal; prosódia (palavra casa com música); mostrar, não explicar.

---

## [Título da faixa]
**Tema / o que quer dizer:** [a verdade específica por trás — não "saudade", mas a imagem concreta que a carrega.]
**Voz / ponto de vista:** [quem fala, em que tom.]
**Esquema de rima / prosódia:** [ex.: refrão ABAB, versos mais soltos; onde a rima resolve e onde fica em aberto de propósito.]

\`\`\`
[Letra em construção — versos, refrão, ponte. Marque o que está fechado e o que é rascunho.]
\`\`\`

**Notas de revisão:** [linhas a melhorar; clichês a cortar; onde a prosódia briga com a melodia.]

---

## [Próxima faixa]
[...]

---

## Banco de linhas / imagens
> Versos soltos, imagens, títulos em potencial — capturados antes de esquecer, para usar depois.
- [linha ou imagem solta.]
`},
    { name:"ARRANJO.md", cat:"essencial", role:"Estrutura, harmonia e decisões de arranjo/produção, com a intenção. Cresce devagar.", short:"Estrutura, harmonia, arranjo, com intenção.",
      content:`# ARRANJO.md — Arranjo e Harmonia

> Onde vivem as decisões de estrutura, harmonia e produção — com o PORQUÊ (a sensação pretendida). **Cresce devagar.**
> O assistente registra aqui para manter coerência e não refazer escolhas.

---

## Harmonia do projeto
- **Progressões recorrentes:** [as que dão identidade — em cifras + o efeito que criam.]
- **Tonalidades / modos:** [o que se usa e a cor emocional.]
- **Notas de teoria (humanês):** [decisões harmônicas explicadas pelo efeito, não pela regra.]

## Arranjo — princípios do projeto
> Arranjo é movimento: quando elementos entram e saem.
- **Dinâmica verso↔refrão:** [como cria contraste — densidade, registro, energia.]
- **Camadas:** [o que sustenta a base; o que entra para destacar momentos.]
- **"Tirar para destacar":** [onde o vazio trabalha a favor.]

## Decisões — índice
> Escolhas de arranjo/harmonia/produção: uma linha aqui; o registro inteiro no DECISIONS.md. Um lugar só numera DEC — duas listas com o mesmo número divergem.
- DEC-[N] — [a decisão em uma linha] · [data] → DECISIONS.md [lá: o que foi decidido + a sensação pretendida + alternativa considerada. Ex.: "tirar a bateria no 2º verso para criar intimidade antes do refrão final".]

---

## Checklists técnicos (para o artista executar de ouvido)
> O assistente não ouve — dá o roteiro; o produtor confere no áudio.
- **Pré-produção:** referência escolhida? BPM/tom definidos? esboço/estrutura no DAW?
- **Mix (ordem):** gain staging primeiro (mix estático antes de plugins; headroom -6 a -3 dB no master); EQ para dar espaço (kick × baixo: separar fundamentais, cortar "mud" 125-500 Hz); então compressão, espacialização (pan/reverb); comparar com a referência.
- **Antes do master (QC):** ouviu em vários ambientes (fone, monitor, celular, carro)? o gap que mais derruba qualidade é pular o controle pré-master.
`},
    { name:"STATUS.md", cat:"rolante", role:"Onde o projeto está agora, faixa ativa, próximos passos. Rolante.", short:"Faixa ativa, próximos passos. Rolante.",
      content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Item resolvido sai daqui (vira estado em FAIXAS ou nota no log).

---

## Fase
[Conceito / Composição / Letra / Produção / Mix / Master] — [o foco do momento.]

## 🎵 Faixa(s) ativa(s)
- [Em qual música se está trabalhando + em que etapa.]

## ▶️ Próxima ação
- [O próximo passo concreto — escrever ponte, gravar voz, mixar refrão...]

## 💡 Ideias a desenvolver
- [Melodia/letra/arranjo capturados, esperando trabalho.]

## ⏳ Travado / aguardando
- [O que está parado e por quê — falta gravar algo, decisão de arranjo pendente.]

## ⚠️ Atenção / coerência
- [Algo destoando da sonoridade-alvo; faixa que não conversa com o resto do EP.]

## 💬 Última conversa
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    {name:"DECISIONS.md", cat:"rolante", role:"Por que as coisas são como são: decisões importantes (DEC) e problemas graves resolvidos (FIX). Cresce devagar; append-only.", short:"O porquê: decisões (DEC) e correções (FIX).", content:`# DECISIONS.md — Decisões e o porquê

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
    { name:"REFERENCIAS.md", cat:"opcional", role:"OPCIONAL — biblioteca de referências sonoras destrinchadas. Use quando o projeto se apoia em muitas referências.", short:"OPCIONAL — referências sonoras destrinchadas.",
      content:`# REFERENCIAS.md — Biblioteca de Referências

> **Opcional.** Use quando o projeto se apoia em várias referências e vale destrinchar cada uma (em vez de só listar em PROJETO).
> Referência é lente: o valor está em isolar O QUE serve e traduzir para a voz do projeto.

---

## [Faixa/artista de referência]
- **O que puxar:** [o elemento específico — a textura do baixo? a estrutura? o tipo de refrão? o tom de letra?]
- **O que NÃO copiar:** [o que é da identidade deles e não cabe aqui.]
- **Como traduzir:** [como adaptar esse elemento para a sonoridade-alvo do projeto.]

---

## Referências por aspecto
> Organizado por aspecto, para consultar na hora certa.
- **Sonoridade/mix:** [faixas que são o alvo de como deve SOAR.]
- **Arranjo/estrutura:** [faixas que inspiram a forma.]
- **Letra/tema:** [letristas/faixas que inspiram a escrita.]
- **Groove/ritmo:** [referências de levada.]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log do dia. Referência fixa — nunca substituído.", short:"Modelo do log do dia; nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log do Dia

> **Referência fixa.** O MOLDE — não é substituído.
> O log entra ao bater um gatilho de evento — cortar versão, registrar decisão ou erro grave, virar o dia —, e não «no fim», que numa conversa longa nunca chega. O assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Projeto]

## Foco do dia
[Composição, letra, harmonia, arranjo, produção, mix.]

## Feito
- [O que avançou — em qual faixa, qual etapa.]

## Decisões de arranjo/harmonia
- [O que virou DEC em ARRANJO.md (com a intenção/sensação por trás).]

## Letra
- [Versos/refrão trabalhados → LETRAS.md; o que ficou fechado.]

## Faixas
- [Mudança de estado de alguma faixa → FAIXAS.md.]

## Coerência
- [Algo destoou da sonoridade-alvo? Como foi tratado?]

## Onde parei
[Estado + próximo passo. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: fase, faixa ativa, próxima ação", active:true },
    { key:"faixas", name:"FAIXAS.md", role:"completo, se uma faixa nasceu ou mudou de estado", active:true },
    { key:"letras", name:"LETRAS.md", role:"completo, se a letra avançou", active:false },
    { key:"arranjo", name:"ARRANJO.md", role:"completo, se houve decisão de harmonia/arranjo/produção", active:false },
    { key:"projeto", name:"PROJETO.md", role:"completo, se o conceito/sonoridade mudou", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log do dia preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Definir conceito e sonoridade", when:"Começo de projeto — firmar a identidade sonora antes de produzir.",
      fill:"idea", fillLabel:"A ideia do projeto + a vibe que imagino + referências",
      body:(p,n)=>`Conceito e sonoridade do projeto.\n\nIDEIA:\n${p.idea||"[A ideia + a vibe/sentimento que imagino + referências que tenho em mente]"}\n\nAjude a firmar o PROJETO.md:\n- Conceito em 2-4 frases (o que une o projeto, o sentimento central)\n- Sonoridade-alvo: vibe, instrumentação característica, textura de produção, faixa de BPM/tom se der\n- Voz lírica (se há letra): quem fala, temas, tom da escrita\n- Para cada referência, O QUE puxar dela (textura? estrutura? groove? tom de letra?) — lente, não cópia\n- O que o projeto NÃO é (limites de identidade sonora)\n\nLembre: eu não ouço áudio — trabalho conceito, estrutura e letra; o som você julga de ouvido. Entregue PROJETO.md completo. A visão sonora é sua; eu ajudo a articulá-la.`
    },
    { id:"H", title:"Escrever / revisar letra", when:"Quero trabalhar uma letra — do zero ou revisando.",
      fill:"lyric", fillLabel:"O tema/imagem + o que já tem (cole a letra ou a ideia)",
      body:(p,n)=>`Trabalho de letra.\n\nTEMA E MATERIAL:\n${p.lyric||"[O tema ou imagem central + a letra que já existe, ou só a ideia]"}\n\nConsultando PROJETO.md (voz lírica) e LETRAS.md:\n- Comece pelo ESPECÍFICO: qual imagem concreta carrega o tema? (não "saudade", mas o objeto/cena que a evoca) — para chegar ao universal\n- Trabalhe a prosódia: as linhas têm movimento (alternância longo/curto)? a rima serve (perfeita resolve, assonância cria tensão)? nem toda linha precisa rimar\n- Mostre, não explique a emoção\n- Contraste verso↔refrão (o refrão é o coração — simples, repetível)\n- Mantenha a voz lírica do projeto\n\nSe eu pedir, dê 2-3 variações de uma linha/refrão com o efeito de cada. A decisão é minha; você propõe. Entregue LETRAS.md completo com a versão trabalhada.`
    },
    { id:"I", title:"Harmonia e progressões", when:"Quero ajuda com acordes/progressão e entender o efeito.",
      fill:"harmony", fillLabel:"O que tenho (tom, acordes, trecho) + o que procuro",
      body:(p,n)=>`Harmonia.\n\nMATERIAL E OBJETIVO:\n${p.harmony||"[O que já tenho — tom, progressão, trecho — + o que procuro: uma progressão pro refrão? sair de um lugar? mais tensão?]"}\n\nEm humanês (nome técnico ao lado, ligado ao EFEITO), consultando ARRANJO.md:\n- Analise o que já existe: que sensação a progressão atual cria, e por quê\n- Proponha 2-3 opções de progressão/caminho — cada uma com o efeito emocional (não a regra pela regra)\n- Se for transição, como conduzir de um trecho ao outro de forma natural\n- Considere a tonalidade/modo do projeto (coerência)\n- Dê em cifras claras (e graus, ex.: I–V–vi–IV, se ajudar)\n\nLembre: quando seu ouvido contrariar a teoria, o ouvido tem prioridade — eu dou as opções e o porquê. Entregue ARRANJO.md completo se virar decisão.`
    },
    { id:"J", title:"Estrutura e arranjo", when:"Quero definir a forma da música e o movimento do arranjo.",
      fill:"song", fillLabel:"A faixa + o que ela tem + a sensação que quero",
      body:(p,n)=>`Estrutura e arranjo.\n\nFAIXA:\n${p.song||"[A faixa + o que ela tem (partes, andamento) + a sensação/dinâmica que quero]"}\n\nConsultando PROJETO.md e ARRANJO.md:\n- Proponha a ESTRUTURA (intro/verso/pré/refrão/ponte...) que serve à música, com a lógica\n- Arranjo como MOVIMENTO: quando cada elemento entra e sai; onde a tensão sobe e desce\n- Contraste verso↔refrão (densidade, registro, energia — o refrão costuma subir e encher)\n- "Tirar para destacar": onde o vazio cria impacto (ex.: tirar bateria antes do último refrão)\n- O que torna esta faixa única — o strip down: reduzida ao mínimo, o que sobra de marcante?\n\nNão "produzo" o áudio — desenho o plano de arranjo; você executa e ajusta de ouvido. Entregue ARRANJO.md completo com as decisões e a intenção.`
    },
    { id:"K", title:"Checklist de mix / produção", when:"Vou mixar ou produzir e quero um roteiro técnico (que eu confiro de ouvido).",
      fill:"context", fillLabel:"O que vou mixar/produzir + onde está + o que te incomoda no som",
      body:(p,n)=>`Roteiro de mix/produção (eu não ouço — dou o checklist; você confere no áudio).\n\nCONTEXTO:\n${p.context||"[O que vou mixar/produzir + em que estado + o que te incomoda (mud? sem espaço? sem peso?)]"}\n\nDê o roteiro técnico na ORDEM certa:\n- **Gain staging primeiro:** mix estático (balanço de volume) antes de qualquer plugin; headroom -6 a -3 dB no master para não clipar\n- **EQ = dar espaço:** kick × baixo (separar os fundamentais — ex.: kick ~90Hz, baixo ~50Hz); se "mud", reduzir 125-500 Hz; cada elemento no seu lugar do espectro\n- **Compressão:** controlar dinâmica onde precisa, sem achatar\n- **Espacialização:** pan e reverb para profundidade/largura\n- **Reference track:** comparar com uma faixa profissional do alvo, no mesmo volume\n- **QC pré-master:** ouvir em vários ambientes (fone, monitor, celular, carro) — o gap que mais derruba qualidade é pular isso\n\nPara o sintoma que você descreveu, aponte o suspeito provável e o que checar. O julgamento final é do seu ouvido. Atualize ARRANJO.md se virar decisão de produção.`
    },
    { id:"L", title:"Destravar (bloqueio criativo)", when:"Empaquei numa música e não sei como seguir.",
      fill:"stuck", fillLabel:"Onde empaquei + o que já tem (cole o trecho/ideia)",
      body:(p,n)=>`Destravar a criação.\n\nONDE EMPAQUEI:\n${p.stuck||"[Onde travei — falta refrão? a ponte não vem? a letra não anda? + o que já tenho]"}\n\nExplore caminhos (sem escrever a música por mim), consultando PROJETO/FAIXAS/LETRAS:\n- Diagnostique o tipo de bloqueio (estrutura? melodia? letra? o material não combina?)\n- Ofereça 3-5 direções concretas e DISTINTAS para sair daqui — cada uma com o que abriria\n- Se for letra: uma imagem/ângulo novo a explorar; se for música: uma mudança de progressão/ritmo/estrutura a testar\n- Sugira um exercício rápido para gerar opções (ex.: reescrever o refrão em 3 humores; tirar tudo menos voz e violão)\n- Aponte o que NÃO forçar (às vezes a música pede outra coisa que o plano)\n\nDê as direções; eu escolho e faço na minha voz. O objetivo é desbloquear, não decidir por mim.`
    },
  ],
  variantes:[
    // wo0167 (i-N25, D-179): Produção «Gerada por IA (Suno)». O texto do Cancioneiro é copiado byte a byte,
    // com carimbo de origem (commit, data, sha1); a fonte é o Cancioneiro. O C119 confere o sha1 de cada cópia.
    { campo:"producao", valor:"Gerada por IA (Suno)", origem:{ projeto:"Cancioneiro", commit:"110e0ba", data:"2026-11-14" },
      instr:"## Suno (faixa gerada por IA)\n- Toda faixa sai no JSON do Cancioneiro (prompt-modelo no projeto): arquivo .json; sem arquivo, um bloco de código.\n- Copiável × referência: `style`/`lyrics` só com o que se cola no Suno; título, idioma, nota e rótulo vão nos campos de referência. Nunca «[ESTILO SUNO]» ou «LETRA» dentro do texto.\n- Style: 6 a 8 tags, gênero primeiro; até 10 com módulos. Letra até ~3.000 caracteres (acima de 5.000 o Suno corta em silêncio). Um BPM por faixa.\n- Antes de entregar faixa ou álbum, rode a skill `revisar-faixa`; ao escrever style ou letra, consulte `macetes-suno`.\n- Não ouço o áudio: o dono gera, ouve e diz o que saiu; eu não digo que «ficou bom».",
      cerebro:"## Produção com IA de música (Suno)\n\n**O artefato é o pedido.** Num projeto em que a faixa é gerada pelo Suno, o que se escreve não é a gravação,\né o pedido: o `style` (mundo sonoro) e a `lyrics` (arquitetura no tempo). O trabalho do assistente é escrever\nesse pedido bem e explicar o porquê de cada escolha; o do dono é gerar, ouvir e decidir.\n\n**Onde cada coisa mora.** O JSON do Cancioneiro (formato no prompt-modelo) é o catálogo copiável: uma coleção,\nálbuns, faixas, módulos de estilo. O `FAIXAS.md` do projeto continua com o estado de cada faixa e o que falta;\no `LETRAS.md` guarda a letra em construção e a prosódia; a versão que vai ao Suno é a do JSON. Quando os dois\ndivergirem, o JSON é o que foi entregue; o `.md` registra por quê mudou.\n\n**Orçamento, porque o Suno corta em silêncio.** Style com 6 a 8 tags (até 10 com módulos ligados), gênero nas\nprimeiras palavras; letra até ~3.000 caracteres, nunca acima de 5.000; um BPM por faixa, no style e no campo\n`bpm`; instrumental em loop com `[Instrumental]` sozinho no Lyrics; tirar algo é `excludeStyles`, não «no X».\nOs números são os do painel de qualidade do Cancioneiro, que os mantém com fonte e data.\n\n**Revisão antes de entregar.** A skill `revisar-faixa` conta letra, tags, rótulos e BPM — com código quando a\nconversa tiver execução, nunca de cabeça. Vermelho (o Suno corta) se resolve antes de entregar, com proposta\nconcreta de corte; cortar letra é decisão do dono.\n\n**Ciclo de uma faixa.** Conceito (PROJETO) → letra com prosódia (LETRAS) → pedido ao Suno (JSON, revisado) →\no dono gera e relata o que ouviu → ajuste do pedido, uma variável por vez (variante ou módulo, sem reescrever a\nfaixa), ou uma ferramenta do Suno quando só um trecho falha (`macetes-suno` §10 e §11) → estado em\nFAIXAS. Relato do dono é a única medida de som; registre-o com a data e a versão do Suno.\n\n**Tags de seção conforme o gênero.** Canção usa `[Verse]`, `[Chorus]`, `[Bridge]`; faixa de arco linear\n(instrumental, trilha) usa `[Intro]`, `[Build]`, `[Climax]`, `[Outro]`; `[Drop]` só em eletrônica. Tag de outro\ngênero puxa a faixa para ele: na dúvida, o vocabulário neutro.\n\n**Direito de uso e nome de artista: pergunte, nunca suponha.** Antes de subir áudio ao Suno (Cover, Extend de\num áudio) ou de publicar uma faixa, pergunte ao dono se o áudio é dele, em que plano a faixa foi gerada (o uso\ncomercial depende do plano e dos termos do momento: confira na conta, `macetes-suno` §11) e com que nome de\nartista ela sai. Registre a resposta no PROJETO. Isto não é conselho jurídico.\n\n**A interface do Suno muda.** Limites e campos vêm de fonte secundária (o Suno não publica os do v6).\nSe o dono disser que um campo não existe na conta dele (o Exclude não aparece no v6-mini gratuito), acredite\ne adapte.\n\n> Copiado byte a byte do Cancioneiro — `kit-musica/BLOCO-SUNO.md`, Parte 2, commit `110e0ba` (2026-11-14), sha1 `6811edcb63192ca09c5ad59f1b0b5996cae3656c`. A fonte é o Cancioneiro: mudança de limite, de campo ou de regra chega por carta e vira atualização do kit.",
      arquivos:[
        { name:"PROMPT-PARA-CHATS.md", cat:"ref", role:"REFERÊNCIA — o prompt-modelo do Cancioneiro: o contrato do JSON das faixas que vão ao Suno. Copiado do Cancioneiro; a fonte é ele.", short:"Contrato do JSON do Cancioneiro.",
          content:"# Prompt-modelo — gerar canções no esquema do Cancioneiro\n\n> **Para que serve:** cole o bloco abaixo num chat de IA (Claude, etc.) junto do seu pedido de música.\n> O chat passa a devolver a canção/álbum em **JSON no esquema canônico**, pronto para importar\n> na ferramenta Cancioneiro — sem inventar convenção própria.\n>\n> **Como usar:** no app, botão **Prompt** — escreva o pedido e copie o prompt já completo.\n> Ou, à mão: copie tudo dentro da linha `--- INÍCIO ---` até `--- FIM ---`, cole no chat,\n> e complete o \"Meu pedido\" no final. O chat responde só com o JSON.\n\n---\n\n--- INÍCIO ---\n\nVocê vai gerar canções para IA de música (Suno) em um formato JSON específico. Siga estas regras à risca.\n\n## Regra inviolável: separe conteúdo copiável de referência humana\n- **Copiável** (vai literalmente para os campos do Suno): `style`, `lyrics`, `excludeStyles`.\n- **Referência humana** (nunca vai para o Suno, é só para organização): `title`, `language`, `context`, `notes`, `tags`, `key`.\n- NUNCA coloque rótulos como \"ESTILO:\", \"[LETRA]\", \"[ESTILO SUNO]\" dentro de `style` ou `lyrics`. Esses campos contêm APENAS o texto que eu colaria direto no Suno.\n\n## Os dois campos do Suno\n- **`style`** = o campo \"Style of Music\": mundo sonoro (gênero, instrumentos, clima, produção, andamento). Texto separado por vírgulas, **sem colchetes**.\n- **`lyrics`** = o campo \"Lyrics\": estrutura e vocal. Colchetes vão aqui.\n  - Faixa instrumental em loop/circular: use apenas `[Instrumental]`.\n  - Faixa instrumental linear (com arco: abertura, final): use tags de arco `[Intro]`, `[Build]`, `[Climax]`, `[Outro]`, vocabulário neutro de gênero.\n  - Faixa com vocal: escreva a letra com tags de seção (`[Verse]`, `[Chorus]`, `[Pre-Chorus]`, etc.).\n\n## Como construir o `style` — cinco camadas audíveis\nDescreva decisões que dá para OUVIR, não elogios (\"épico\", \"lindo\", \"profissional\" não ajudam). Pense em camadas:\n1. **Gênero/lane** — a família + um sabor secundário (ex.: \"dark ambient cinematic\", \"k-pop girl crush\"). 1–2 gêneros no máximo.\n2. **Movimento** — como pulsa (ex.: \"driving rhythm\", \"half-time pulse\", \"sparse\").\n3. **Instrumentos** — 2–4, com frase específica (\"delicate piano arpeggios\" > \"piano\"). Não empilhe.\n4. **Voz** — quem conduz (\"close-mic alto\", \"female soprano\", ou \"no vocals\" se instrumental).\n5. **Produção/clima** — espaço da mixagem + 1–2 palavras de clima (\"dry upfront mix, intimate\", \"cinematic, ominous\").\nColoque o mais característico NO INÍCIO (as primeiras ~20–30 palavras pesam mais). Se quiser sugerir andamento, inclua \"NN bpm\" — mas saiba que o Suno trata BPM como aproximação, não comando.\n\n**Orçamento de tags.** Cada trecho entre vírgulas é uma tag. Escreva o `style` com **6 a 8 tags**: menos que 4 fica vago; acima de ~10 as últimas perdem efeito. Prefira juntar ideias numa tag específica (\"warm analog synth pads\") a espalhar adjetivos soltos (\"warm, analog, synth, pads\"). Se o `style` tiver \"NN bpm\", use o mesmo número no campo `bpm`.\n\n## Elementos indesejados\nNão escreva \"no X\" dentro do `style` para remover algo. Coloque em `excludeStyles` (array), que mapeia para o campo Exclude do Suno.\n\n## Módulos de estilo (só se eu pedir variações por módulo)\nUm módulo é um trecho de `style` que eu ligo e desligo na ferramenta para gerar variações sem reescrever a faixa. Se eu não pedir módulos, deixe `styleModules` vazio (`[]`) na coleção e nas faixas.\n- **Onde moram:** os módulos são declarados UMA vez, no `styleModules` da **coleção** (topo do JSON), como objetos. Nunca escreva o objeto do módulo dentro da faixa.\n- **Formato de cada módulo:** `id` (único, minúsculas-com-hífens), `category`, `label` (nome curto para o botão), `fragment` (o trecho copiável: 1 a 3 tags separadas por vírgula, sem colchetes, sem \"no X\"), `notes` (opcional, referência humana). Não existem outros campos: nada de `enabled`, `default`, `text`, `style` ou `excludeStyles` dentro do módulo.\n- **`category`** é exatamente um destes valores: `genre`, `motion`, `instrument`, `vocal`, `mood`, `production`, `tempo`.\n- **Na faixa, `styleModules` é uma lista de ids** (texto). Os ids citados são os módulos que já vêm **ligados**; os demais da coleção ficam disponíveis, desligados, para eu experimentar.\n- **Orçamento com módulos:** o `style` da faixa continua com 6 a 8 tags, e as tags dos módulos citados somadas às do `style` não passam de 10. Módulo que repete um trecho que já está no `style` não soma nada. Ofereça os módulos extras declarados na coleção, sem citar na faixa.\n- **Andamento:** BPM só em módulo de `category` `tempo`, com o fragmento no formato \"NN bpm\". Em outras categorias, não escreva número de BPM.\n\n## Esquema JSON de saída\nDevolva um objeto de **coleção** com esta estrutura (campos obrigatórios marcados com *):\n\n```json\n{\n  \"schemaVersion\": \"1.0\",              // * sempre \"1.0\"\n  \"title\": \"Nome do álbum ou acervo\",  // *\n  \"description\": \"opcional\",\n  \"targetTool\": \"suno\",\n  \"styleModules\": [                    // opcional — os módulos, declarados uma vez (ver seção acima)\n    { \"id\": \"mod-tape-warmth\", \"category\": \"production\", \"label\": \"Textura de fita\",\n      \"fragment\": \"tape saturation, vintage warmth\", \"notes\": \"opcional, referência humana\" }\n  ],\n  \"albums\": [                          // *\n    {\n      \"id\": \"album-slug\",              // * minúsculas, hífens\n      \"title\": \"Nome do Álbum\",        // *\n      \"description\": \"opcional\",\n      \"songs\": [                       // *\n        {\n          \"id\": \"faixa-slug\",          // * único, minúsculas-com-hífens\n          \"title\": \"Título da Faixa\",  // * referência humana\n          \"language\": \"pt-BR\",         // * ou \"instrumental\", \"ja\", \"en\", etc.\n          \"state\": \"ideia\",            // * um de: ideia | gerada | editada | loop-pronto | aprovada\n          \"style\": \"...\",              // * COPIÁVEL — Style of Music, sem colchetes, 6 a 8 tags\n          \"lyrics\": \"...\",             // * COPIÁVEL — Lyrics, com colchetes/tags\n          \"bpm\": 120,                  // opcional, número ou null\n          \"key\": \"D minor\",            // opcional, referência humana\n          \"excludeStyles\": [],         // opcional, array de strings copiáveis p/ Exclude\n          \"variants\": [                // opcional — mesma letra, style alternativo\n            { \"label\": \"Nome da variante\", \"style\": \"...\", \"excludeStyles\": [] }\n          ],\n          \"styleModules\": [\"mod-tape-warmth\"], // opcional — SÓ ids da coleção; os citados vêm ligados\n          \"context\": \"cena/uso\",       // opcional, referência humana\n          \"notes\": \"notas de produção\",// opcional, referência humana\n          \"tags\": []                   // opcional, etiquetas livres\n        }\n      ]\n    }\n  ]\n}\n```\n\n## Saída\n- **Se você consegue criar arquivos para download**, entregue um arquivo `.json` com o nome do `id` do álbum (ex.: `album-slug.json`), contendo só o JSON.\n- **Se não consegue**, responda com o JSON inteiro dentro de **um único bloco de código** marcado como `json`, sem texto antes ou depois do bloco.\n- JSON válido: aspas duplas, sem vírgula sobrando, sem comentários.\n- Se eu pedir uma única faixa, ainda assim embrulhe em coleção→álbum→[faixa].\n\n## Meu pedido\n(descreva aqui as canções que você quer: tema, quantidade, idioma, clima, se instrumental ou com vocal, referências sonoras…)\n\n--- FIM ---\n\n---\n\n## Notas para o mantenedor (não faz parte do prompt)\n\n- Este prompt reflete o `song.schema.json` e `collection.schema.json` v1.0. Se o esquema mudar, **atualize este arquivo junto** (uma fonte por dado — o esquema é a fonte; este prompt é um espelho didático).\n- **O app lê ESTE arquivo** (botão «Prompt»): busca-o no Pages a cada clique e copia o que está entre as linhas `--- INÍCIO ---` e `--- FIM ---`, trocando a linha entre parênteses abaixo de `## Meu pedido` pelo pedido digitado. Não há segunda cópia do prompt. Mantenha as duas linhas de marcação e essa linha entre parênteses: o `scripts/validate.py` reprova se uma delas sumir.\n- **Módulos (DEC-016, DEC-021):** a coleção carrega os próprios módulos; a faixa cita ids. O teste de 2026-10-28 (`meta/specs/261028-prompt-modelo-e-modulos.md`) mostrou que, sem a seção de módulos, três chats inventaram três formatos e aninharam o módulo na faixa — o app abria o painel com 0 chips. As sete `category` são as camadas do app (`LAYERS` em `app/index.html`); a de `tempo` vira atalho do controle de BPM (DEC-020).\n- **Orçamento de tags (6 a 8 no style; até 10 com os módulos ligados):** mesma faixa do painel de qualidade (`QUALITY_LIMITS` em `app/index.html`, com fonte e data). Se o painel mudar, mude aqui.\n- O prompt ensina as cinco camadas e a regra copiável/referência — é o principal contra a bagunça dos álbuns antigos.\n- **Saída em arquivo ou em bloco de código (DEC-023):** o arquivo baixa pronto para arrastar no app; o bloco de código tem botão de copiar que entrega só o JSON. Se a resposta for colada inteira (com as cercas ou texto em volta), a importação extrai o JSON e avisa no toast — não é para depender disso, é rede de segurança.\n- Teste ponta a ponta: copie o prompt pelo app, peça algo num chat novo fora de Projeto, baixe o arquivo (ou copie o bloco) e arraste/importe na ferramenta; depois `python3 scripts/validate.py <arquivo>`.\n\n<!-- Copiado byte a byte do Cancioneiro: `schema/PROMPT-PARA-CHATS.md`, commit `110e0ba` (2026-11-14), sha1 `73488fdeeca65840ca195c7193d09df71e35e78e`. A fonte é o Cancioneiro (DEC-027 dele): mudança chega por carta e vira atualização do kit. -->\n" },
      ],
      anexos:[ ["FAIXAS.md", "\n## No Suno (Produção: Gerada por IA)\n> O copiável — o style e a letra que vão ao Suno — mora no JSON do Cancioneiro; aqui fica o estado de cada faixa e o que falta. Quando os dois divergirem, o JSON é o que foi entregue, e este arquivo registra por que mudou.\n\n| Faixa | Estado no Suno | Última geração (data · versão do Suno) | O que o dono ouviu | Próximo ajuste (uma variável) |\n|---|---|---|---|---|\n| [título] | [pedida · gerada · ajustando · aprovada] | [...] | [o relato do dono] | [...] |\n"], ["LOG-TEMPLATE.md", "\n## Gerações no Suno\n- [faixa] — [data · versão do Suno] — [o que mudou no pedido] — [o que o dono ouviu]\n\n## Medições pendentes\n- [o que ainda falta o dono gerar ou ouvir para decidir]\n"] ],
      gatilhos:[
        ["O dono gerou no Suno e relatou o que ouviu", "Registra no log do dia («Gerações no Suno»), com a data e a versão do Suno; ajusta o pedido no JSON do Cancioneiro, uma variável por vez (skill `macetes-suno`); atualiza o estado em FAIXAS.md. O relato do dono é a única medida de som."],
      ],
      prompts:[
        { id:"S", title:"Gerar faixa para o Suno", when:"Quero o pedido de uma faixa (ou álbum) para gerar no Suno e organizar no Cancioneiro.",
          fill:"track", fillLabel:"A faixa ou o álbum que quero (tema, referências, gênero)",
          body:(p,n)=>`Faixa para o Suno.\n\nPEDIDO:\n${p.track||"[A faixa (ou o álbum): tema, sentimento, referências, gênero, BPM se souber]"}\n\nEscreva o pedido ao Suno pelo contrato do Cancioneiro (PROMPT-PARA-CHATS.md):\n- Conceito em 2-3 frases, ancorado no PROJETO.md\n- Letra com prosódia (LETRAS.md), tags de seção conforme o gênero, até ~3.000 caracteres\n- Style de 6 a 8 tags, gênero primeiro; um BPM por faixa\n- No copiável, só o que vai ao Suno; título, idioma e notas nos campos de referência\n- Rode a skill revisar-faixa antes de entregar — contando, nunca estimando\n- Não invente fórmula de referência: se eu quiser uma, colo da janela «Fórmulas» do Cancioneiro\n\nEntregue o .json (sem arquivo, um bloco de código) e atualize o FAIXAS.md.` },
      ],
      saidas:[ { key:"json", name:"o .json do Cancioneiro", role:"completo, se uma faixa foi pedida ou ajustada", active:true } ],
      skillsTitulo:"Skills do Suno (Agent Skills)",
      skillsIntro:"Duas skills do Cancioneiro para o Suno, copiadas byte a byte com o carimbo de origem — carregam sob demanda, no gatilho certo, em vez de inchar as Instruções.",
      skills:[
        { name:"macetes-suno", gatilho:"ao escrever ou reescrever style e letra, e quando o dono relata o que ouviu", description:"O que tem efeito no Suno e o que é mito — os dois campos, o style em camadas, o orçamento de tags, os limites que cortam em silêncio, BPM, instrumental, exclusão, o que fazer depois de ouvir e as ferramentas do Suno (Replace Section, Extend, Remaster, Cover, Persona). USE ao escrever ou reescrever o style ou a letra de uma faixa para o Suno, ao montar variantes, quando o dono relatar o que ouviu, e quando perguntar «por que saiu assim?» ou «como faço o Suno fazer X?». Para conferir uma faixa pronta, use a skill revisar-faixa.", raw:"---\nname: macetes-suno\ndescription: O que tem efeito no Suno e o que é mito — os dois campos, o style em camadas, o orçamento de tags, os limites que cortam em silêncio, BPM, instrumental, exclusão, o que fazer depois de ouvir e as ferramentas do Suno (Replace Section, Extend, Remaster, Cover, Persona). USE ao escrever ou reescrever o style ou a letra de uma faixa para o Suno, ao montar variantes, quando o dono relatar o que ouviu, e quando perguntar «por que saiu assim?» ou «como faço o Suno fazer X?». Para conferir uma faixa pronta, use a skill revisar-faixa.\n---\n\n# Macetes do Suno — o que tem efeito\n\n> Parte do kit de música do Cancioneiro (`kit-musica/`). Fonte: `meta/HISTORY.md` do Cancioneiro, que\n> traz cada item com data, fonte e nível de confiança. **Conferido em 2026-10, Suno v6; §10 e §11 em 2026-11.** A interface\n> do Suno muda: se o dono disser que um botão ou campo não existe na conta dele, acredite nele.\n\n## 1. Dois campos, dois trabalhos\n\n- **Style of Music** = o mundo sonoro: gênero, instrumentos, voz, clima, produção, andamento. Texto\n  separado por vírgulas, **sem colchetes**.\n- **Lyrics** = a arquitetura no tempo: seções e voz. **Colchetes moram aqui** (`[Verse]`, `[Chorus]`).\n\nRuim: `[ESTILO SUNO] k-pop, synth` no Style. O rótulo é texto que o Suno lê como pedido.\nBom: `k-pop girl crush, punchy synth bass, …` — só o que se cola.\n\n**Regra que não se dobra:** rótulo de referência (título, «ESTILO SUNO», «LETRA», «VAR A», idioma, nota)\nnunca entra no texto que vai para o Suno. No JSON do Cancioneiro isso já é estrutural: `style` e `lyrics`\nde um lado; `title`, `context` e `notes` do outro.\n\n## 2. O style em cinco camadas audíveis\n\n1. **Gênero** — uma família e um sabor (`dark ambient cinematic`). No máximo dois gêneros.\n2. **Movimento** — como pulsa (`driving rhythm`, `half-time pulse`, `sparse`).\n3. **Instrumentos** — de 2 a 4, com frase específica (`delicate piano arpeggios` > `piano`).\n4. **Voz** — quem conduz (`close-mic alto`, `male duo tenor and baritone`, `no vocals`).\n5. **Produção e clima** — o espaço da mixagem e uma ou duas palavras de clima.\n\nDescreva o que dá para **ouvir**. «Épico», «lindo», «profissional» não mudam nada.\n**O começo pesa mais:** as primeiras ~20 a 30 palavras mandam. Gênero primeiro; detalhe depois.\n\n## 3. Orçamento de tags\n\nCada trecho entre vírgulas é uma tag. **De 6 a 8 tags**; abaixo de 4 fica vago; **acima de ~10 as\núltimas perdem efeito** e os sinais se anulam em resultado genérico.\n\nRuim: `warm, analog, synth, pads, dreamy, soft, lush, airy, nostalgic, retro, 80s, chill` (12 adjetivos\nsoltos).\nBom: `warm analog synth pads, dreamy 80s nostalgia, airy close vocal` (3 tags que dizem mais).\n\nPrecisa cortar? Em geral: gênero > clima > instrumento principal > voz > BPM. **Exceção:** em gênero\ncentrado na voz (rap, rap-pop) a voz é o gênero — não corte a voz primeiro.\n\n## 4. Limites — o Suno corta em silêncio\n\n| Campo | Limite | Na prática |\n|---|---|---|\n| Style | ~1.000 caracteres | sobra muito: o problema é o número de tags, não o tamanho |\n| Lyrics | 5.000 caracteres | **a partir de ~3.000 o Suno corre**: pula seções, encurta |\n| Título | 100 caracteres | — |\n\nPassou do limite, o excedente **não chega** — sem erro, sem aviso. A letra longa é o defeito mais comum:\nrefrão repetido por extenso quatro vezes come mil caracteres. Escreva o refrão completo uma ou duas vezes\ne marque as repetições com a tag (`[Chorus]`).\n\n## 5. BPM é aproximação\n\n- `NN bpm` no style ajuda a mirar o andamento; o Suno **não obedece com precisão**.\n- **Um número por faixa.** Dois números («95 BPM to 118 BPM») viram ruído para o Suno e confusão para o\n  controle de BPM do Cancioneiro. Para acelerar, descreva (`gradual build, accelerating`), não some números.\n  Se a rampa for escolha consciente, escreva-a num trecho só (`95 BPM building to 115 BPM`): desde a 0.19.0 o\n  Cancioneiro a reconhece, copia como está e avisa em âmbar; dois números soltos continuam sendo erro.\n- O campo `bpm` do JSON repete o número do style.\n\n## 6. Instrumental\n\n- **Faixa em loop** (exploração, estudo): Lyrics só com `[Instrumental]`, nada mais; no style, `no\n  vocals` como reforço. Sem isso, o Suno tende a cantarolar depois de ~15 a 20 segundos.\n- **Faixa com arco** (abertura, final, trailer): tags de arco no Lyrics — `[Intro]`, `[Build]`,\n  `[Climax]`, `[Outro]`, com descrição curta (`[Build: percussão entra]`). Vocabulário **neutro de\n  gênero**: `[Drop]` é de EDM, não de orquestra.\n- Roteiro de tempos («0:00–0:30 build») é nota para quem edita, não texto do Lyrics.\n\n## 7. Tirar algo: Exclude, não «no X»\n\n`no drums` dentro do style funciona mal; o campo **Exclude** funciona melhor. No JSON, vai em\n`excludeStyles`. **O v6-mini (plano gratuito) não mostra o campo Exclude** — ali, uma ou duas negações no\nstyle são o recurso que sobra; mais que isso dilui.\n\n## 8. Mitos que circulam\n\n- «O style caiu para 200 caracteres» — é o limite do v4, copiado para guias novos.\n- «O BPM agora é respeitado com precisão» — não está em material oficial.\n- «Tag X no fim da lista funciona melhor» — o começo pesa mais, não o fim.\n- Números exatos de blog («9 em 10 gerações») são estimativa de quem vende curso.\n\n## 9. O que o assistente não sabe\n\nO assistente **não ouve** o resultado. Ele escreve o pedido e explica o porquê; o dono gera, ouve e diz o\nque saiu. «Ficou bom» só quem ouviu pode dizer. Quando o resultado sair estranho, pergunte primeiro: passou\nde algum limite? quantas tags? tinha rótulo no texto?\n\n## 10. Depois de ouvir: uma variável por vez\n\nO dono gerou e contou o que ouviu. Antes de reescrever, separe **o que ficou bom** do **que não ficou**,\ne mude **uma coisa só** por rodada — duas mudanças juntas não dizem qual funcionou.\n\n| O dono disse | Mude isto, e só isto |\n|---|---|\n| «o gênero/clima não é esse» | as primeiras tags do style (o começo pesa mais) |\n| «tem instrumento sobrando/faltando» | uma tag de instrumento, ou o Exclude |\n| «a voz não é essa» | a tag de voz; para manter a mesma voz em várias faixas, Persona (§11) |\n| «correu / pulou parte da letra» | a letra: está acima de ~3.000? refrão por extenso repetido? (`revisar-faixa`) |\n| «cantou onde era instrumental» | `[Instrumental]` sozinho no Lyrics (§6) |\n| «está bom, mas um trecho ficou fraco» | não peça de novo: Replace Section ou Extend (§11) |\n\n**Onde guardar a mudança, sem reescrever a faixa:** um style alternativo vai em `variants[]` da faixa; uma\nfrase que serve a várias faixas vira **módulo** da coleção (ligável no Cancioneiro). Registre o relato no\n`FAIXAS.md` do projeto com a **data** e a **versão do Suno** — ele é a única medida de som que existe.\n\n**Conte as gerações:** em geral são várias por resultado bom. Três rodadas sem melhorar com uma variável\nde cada vez é sinal de que o pedido brigou consigo mesmo (sinais opostos no style, letra longa demais): volte\nà `revisar-faixa` antes da quarta.\n\n## 11. Ferramentas do Suno: quando usar em vez de pedir de novo\n\n> Lido em 2026-11-09 na página de produtos e na central de ajuda do Suno, e num guia verificado em 2026-09\n> (fontes no fim). Nomes, planos e limites mudam: se o dono disser que não existe na conta dele, acredite.\n\n| Situação | Ferramenta | Ressalva |\n|---|---|---|\n| Um verso, ponte ou final fraco; o resto está bom | **Replace Section** (regenera só o trecho escolhido) | no guia, só planos pagos |\n| Falta uma seção, um final, espaço para crescer | **Extend** (continua de um ponto escolhido) | quanto mais cedo o ponto, mais do resto muda |\n| A faixa está certa; só o som (clareza, equilíbrio) | **Remaster** | variação sutil: não muda letra nem estrutura |\n| A faixa funciona; quer outro gênero ou outra interpretação | **Cover** | é transformação grande; para polir, Remaster |\n| A mesma voz e o mesmo clima em várias faixas (um álbum) | **Persona** (vocal, estilo e clima salvos num perfil) | o style da faixa continua dizendo o que muda |\n| Arranjo fino, stems, MIDI | **Studio** | aí o trabalho já é de produção, fora do pedido |\n\n**Uso comercial:** o que sai de remix de faixa de outra pessoa pode ter uso só pessoal pelos termos de\nsetembro de 2026. Antes de publicar, o dono confere os termos; isto não é conselho jurídico.\n\nFontes da §11: [Suno — produtos](https://suno.com/pt-br/products) ·\n[Suno — central de ajuda, «Making Music»](https://help.suno.com/en/categories/550017) ·\n[Jack Righteous — Suno Remix Guide: Covers, Song Edits, Studio](https://jackrighteous.com/blogs/guides-using-suno-ai-music-creation/suno-remix-covers-edits-studio)\n", carimbo:"<!-- Copiado byte a byte do Cancioneiro: `kit-musica/skills/macetes-suno/SKILL.md`, commit `110e0ba` (2026-11-14), sha1 `53915f1bf780b7715afd82479f50d9d74c374440`. A fonte é o Cancioneiro (DEC-027 dele): mudança chega por carta e vira atualização do kit. -->" },
        { name:"revisar-faixa", gatilho:"antes de entregar uma faixa ou um álbum", description:"Revisão de faixa para o Suno antes de entregar — conta caracteres da letra e tags do style, procura rótulo dentro do que se copia, «no X» no style e dois BPM. USE SEMPRE antes de entregar uma faixa ou um álbum no JSON do Cancioneiro, e quando o dono colar um JSON e pedir «revisa», «confere», «está pronto para o Suno?». Não corta nada sozinha: aponta, e o corte é decisão do dono.", raw:"---\nname: revisar-faixa\ndescription: Revisão de faixa para o Suno antes de entregar — conta caracteres da letra e tags do style, procura rótulo dentro do que se copia, «no X» no style e dois BPM. USE SEMPRE antes de entregar uma faixa ou um álbum no JSON do Cancioneiro, e quando o dono colar um JSON e pedir «revisa», «confere», «está pronto para o Suno?». Não corta nada sozinha: aponta, e o corte é decisão do dono.\n---\n\n# Revisar faixa — o painel de qualidade antes do app\n\n> Parte do kit de música do Cancioneiro (`kit-musica/`). Os números abaixo são os do painel de qualidade\n> do app (`QUALITY_LIMITS` em `app/index.html`); o `scripts/validate.py` reprova se divergirem.\n\nO Suno **corta em silêncio**: o que passa do limite do campo não chega ao modelo, sem aviso. E o que fica\ndentro do limite pode render menos — tags demais se anulam, letra longa faz o Suno correr. Esta skill\nmostra isso **antes** de a faixa sair, para o dono decidir o que cortar. Medido nos guias antigos do\ndono, escritos sem esta revisão: 72 de 151 letras acima de 5.000 caracteres, 138 de 151 styles acima de\n10 tags.\n\n## Quando\n\n- Antes de entregar qualquer faixa ou álbum.\n- Quando o dono colar um JSON (ou um `.md` antigo) e perguntar se está pronto.\n- Depois de mudar o style ou a letra de uma faixa já revisada.\n\n## O que conferir (por faixa)\n\n| # | Conferência | Vermelho (o Suno corta ou quebra) | Âmbar (funciona pior) |\n|---|---|---|---|\n| 1 | Caracteres da **letra** (`lyrics`) | acima de 5.000 | acima de 3.000 — o Suno começa a correr |\n| 2 | Caracteres do **style** | acima de 1.000 | acima de 850 |\n| 3 | **Tags** do style (trechos entre vírgulas) | — | acima de 10 (as últimas perdem efeito) ou abaixo de 4 (vago) |\n| 4 | **Rótulo** dentro do copiável: `ESTILO SUNO`, `[LETRA]`, `Style:`, `Letra:` em `style`/`lyrics` | sempre | — |\n| 5 | **Colchete** no style | sempre (colchete é do Lyrics) | — |\n| 6 | **«no X»** no style | — | vai para `excludeStyles` (se o plano tiver o campo) |\n| 7 | **BPM**: dois números no style, ou campo `bpm` diferente do style | — | um BPM por faixa; rampa num trecho só («95 BPM building to 115 BPM») o app preserva e avisa, mas o Suno não segue: prefira um BPM e descreva a subida |\n| 8 | **Instrumental** com `[Instrumental]` e mais coisa no Lyrics, ou letra cantada com «no vocals» no style | — | sinais que brigam |\n\nVariantes (`variants[].style`) passam pelas conferências 2 a 7.\n\n## Como contar (não estime de cabeça)\n\nContar caracteres e tags «no olho» erra. Rode a conta. Se a conversa tiver execução de código, use o script\nabaixo no JSON da coleção. Ele só lê e imprime:\n\n```python\nimport json, re, sys\n\nLYRICS_MAX, LYRICS_WARN = 5000, 3000   # = QUALITY_LIMITS.lyrics no app\nSTYLE_MAX, STYLE_WARN = 1000, 850      # = QUALITY_LIMITS.style\nTAGS_VAGUE, TAGS_MANY = 4, 10          # = QUALITY_LIMITS.tags (vague, many)\nLABEL = re.compile(r\"ESTILO SUNO|\\[LETRA\\]|^\\s*(Style|Letra|Lyrics)\\s*:\", re.I | re.M)\nNEG = re.compile(r\"(?<![a-z])no\\s+[a-z][a-z-]*\", re.I)\nBPM = re.compile(r\"\\b(\\d{2,3})\\s*-?\\s*bpm\\b\", re.I)\n\ndef check_style(style, where, out):\n    tags = len([t for t in style.split(\",\") if t.strip()])\n    if len(style) > STYLE_MAX: out.append(f\"VERMELHO {where}: style com {len(style)} caracteres (limite {STYLE_MAX})\")\n    elif len(style) > STYLE_WARN: out.append(f\"ambar {where}: style com {len(style)} caracteres\")\n    if tags > TAGS_MANY: out.append(f\"ambar {where}: {tags} tags no style (acima de {TAGS_MANY})\")\n    elif tags < TAGS_VAGUE: out.append(f\"ambar {where}: {tags} tags no style (vago)\")\n    if \"[\" in style: out.append(f\"VERMELHO {where}: colchete no style\")\n    if NEG.search(style): out.append(f\"ambar {where}: negacao no style: {NEG.search(style).group(0)!r}\")\n    if len(set(BPM.findall(style))) > 1: out.append(f\"ambar {where}: {len(set(BPM.findall(style)))} BPM no style\")\n\ndef review(coll):\n    out = []\n    for album in coll.get(\"albums\", []):\n        for s in album.get(\"songs\", []):\n            where = f\"{album.get('id')} > {s.get('id')}\"\n            style, lyrics = s.get(\"style\", \"\"), s.get(\"lyrics\", \"\")\n            if len(lyrics) > LYRICS_MAX: out.append(f\"VERMELHO {where}: letra com {len(lyrics)} caracteres (limite {LYRICS_MAX})\")\n            elif len(lyrics) > LYRICS_WARN: out.append(f\"ambar {where}: letra com {len(lyrics)} caracteres\")\n            for field, text in ((\"style\", style), (\"lyrics\", lyrics)):\n                if LABEL.search(text): out.append(f\"VERMELHO {where}: rotulo dentro de {field}\")\n            check_style(style, where, out)\n            nums = set(BPM.findall(style))\n            if s.get(\"bpm\") is not None and nums and str(s[\"bpm\"]) not in nums:\n                out.append(f\"ambar {where}: campo bpm {s['bpm']}, style diz {', '.join(sorted(nums))}\")\n            sung = [l for l in lyrics.split(\"\\n\") if l.strip() and not re.fullmatch(r\"\\s*\\[.*\\]\\s*\", l)]\n            if lyrics.strip().startswith(\"[Instrumental]\") and sung: out.append(f\"ambar {where}: [Instrumental] com letra\")\n            if sung and re.search(r\"\\bno vocals?\\b\", style, re.I): out.append(f\"ambar {where}: letra cantada com 'no vocals' no style\")\n            for i, v in enumerate(s.get(\"variants\", []) or []):\n                check_style(v.get(\"style\", \"\"), f\"{where} variante {i + 1}\", out)\n    return out\n\ncoll = json.load(open(sys.argv[1], encoding=\"utf-8\"))\nproblems = review(coll)\nprint(\"\\n\".join(problems) or \"Nada a apontar nas oito conferencias.\")\nprint(f\"-- {sum(p.startswith('VERMELHO') for p in problems)} vermelho(s), {sum(p.startswith('ambar') for p in problems)} ambar(es)\")\n```\n\nSem execução de código: conte a letra por seção e some, e diga que a conta é estimada.\n\n## Como apresentar\n\n1. **Primeiro os vermelhos**, faixa por faixa, com o número medido e o limite. Vermelho é o que o Suno\n   vai cortar ou receber quebrado.\n2. Depois os âmbares, agrupados por tipo.\n3. Para cada vermelho, **uma proposta concreta** — o trecho exato a tirar, ou as tags a juntar —, nunca\n   «encurte a letra». Para letra longa: repetição de refrão é o primeiro candidato; ponte e outro falados,\n   o segundo.\n4. **Não corte sozinho.** Mostre e espere o dono escolher. Cortar letra é decisão de autor.\n\n## O que esta skill não faz\n\n- Não julga se a faixa **soa** bem: o assistente não ouve áudio. O dono gera no Suno e diz o que ouviu.\n- Não garante obediência: passar nas oito conferências quer dizer que o Suno **recebe** tudo; o resultado\n  continua variando a cada geração.\n- Os limites são de fonte secundária (o Suno não publica os do v6); estão no app com fonte e data.\n", carimbo:"<!-- Copiado byte a byte do Cancioneiro: `kit-musica/skills/revisar-faixa/SKILL.md`, commit `110e0ba` (2026-11-14), sha1 `d25f7de8f4828c86895c981e291831d4f62c045f`. A fonte é o Cancioneiro (DEC-027 dele): mudança chega por carta e vira atualização do kit. -->" },
      ],
    },
  ],
};