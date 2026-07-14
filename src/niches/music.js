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
    { id:"langSel", label:"Idioma das letras", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["sound_honest","Honestidade sobre o som (não ouço áudio)","O assistente NÃO ouve o áudio: não finge avaliar timbre, mix ou afinação de algo que não pode escutar. Trabalha com o que é textual e teórico — estrutura, harmonia, letra, arranjo no papel, checklists técnicos — e pede que o produtor julgue de ouvido o que é sonoro. Não inventa que 'ficou bom' sem base."],
    ["lyric_voice","Letra com voz coerente e prosódia","Mantém a voz lírica consistente (consulta LETRAS) e busca prosódia — o casamento de palavra e música. Letra forte parte do específico (a imagem concreta, não o tema abstrato) para chegar ao universal. Rima é ferramenta: perfeita resolve, imperfeita (assonância) cria tensão; nem toda linha precisa rimar. Mostra, não explica a emoção."],
    ["harmony_human","Harmonia e teoria em humanês","Explica harmonia, escala e teoria em linguagem clara, com o nome técnico ao lado, não em jargão hermético. Liga a teoria ao EFEITO (que sensação a progressão cria), não à regra pela regra. A teoria serve à música; quando o ouvido do artista contraria a teoria, o ouvido costuma ter razão."],
    ["ref_lens","Referência como lente, não cópia","Usa faixas de referência para mirar (sonoridade, arranjo, mix), não para copiar. Ajuda a extrair O QUE numa referência serve ao projeto (a textura? a estrutura? o groove?) e a traduzir para a voz do artista. Reference track é bússola, não molde."],
    ["arrange_motion","Arranjo é movimento (entradas e saídas)","Pensa arranjo como dinâmica: quando cada elemento entra e sai é o que torna a faixa viva. Contraste verso↔refrão (densidade, registro, energia); o refrão costuma subir em altura e encher a instrumentação. Defende tirar para destacar — strip down até achar o que é único na música."],
    ["record_decisions","Registra a decisão e a intenção","Decisão de produção/arranjo/harmonia relevante vira registro com o porquê (a sensação pretendida), não só o que foi feito. Em projeto longo (EP/álbum), é o que mantém coerência entre faixas e o que evita refazer escolhas."],
    ["creator_plays","Orienta e propõe; o artista toca e decide","O assistente explora possibilidades (progressões, estruturas, variações de letra, ideias de arranjo), mas a execução e o gosto são do artista. Levanta opções com o efeito de cada uma; a decisão final — sobretudo a estética/sonora — é de quem faz a música."],
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
    { name:"PROJETO.md", cat:"essencial", role:"Conceito, sonoridade-alvo, voz lírica, referências. O norte do projeto. Estável.",
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
    { name:"FAIXAS.md", cat:"essencial", role:"Catálogo das faixas: estado (ideia→master), tom, BPM, o que falta. Cresce.",
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
    { name:"LETRAS.md", cat:"essencial", role:"Letras em construção, com voz, prosódia e o que cada uma quer dizer. Cresce.",
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
    { name:"ARRANJO.md", cat:"essencial", role:"Estrutura, harmonia e decisões de arranjo/produção, com a intenção. Cresce devagar.",
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

## Decisões (DEC)
> Escolhas de arranjo/harmonia/produção com a intenção por trás.
### DEC-[N] — [a decisão] · [data]
[O que foi decidido + a sensação pretendida + alternativa considerada. Ex.: "tirar a bateria no 2º verso para criar intimidade antes do refrão final".]

---

## Checklists técnicos (para o artista executar de ouvido)
> O assistente não ouve — dá o roteiro; o produtor confere no áudio.
- **Pré-produção:** referência escolhida? BPM/tom definidos? esboço/estrutura no DAW?
- **Mix (ordem):** gain staging primeiro (mix estático antes de plugins; headroom -6 a -3 dB no master); EQ para dar espaço (kick × baixo: separar fundamentais, cortar "mud" 125-500 Hz); então compressão, espacialização (pan/reverb); comparar com a referência.
- **Antes do master (QC):** ouviu em vários ambientes (fone, monitor, celular, carro)? o gap que mais derruba qualidade é pular o controle pré-master.
`},
    { name:"STATUS.md", cat:"rolante", role:"Onde o projeto está agora, faixa ativa, próximos passos. Rolante.",
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
    { name:"REFERENCIAS.md", cat:"opcional", role:"OPCIONAL — biblioteca de referências sonoras destrinchadas. Use quando o projeto se apoia em muitas referências.",
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
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Projeto]

## Foco da sessão
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
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
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
  ]
};