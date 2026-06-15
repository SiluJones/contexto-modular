NICHES.comics = {
  id:"comics", label:"HQs", icon:"💥", group:"literary", category:"creative",
  cardColor:"#f472b6", cardTags:["quadrinhos","mangá","webcomic"],
  cardDesc:"Roteiro, páginas, ritmo de quadro e arco longo — da ideia à arte sequencial",
  intro:{
    headline:"Da ideia à arte sequencial, com a sarjeta trabalhando a seu favor.",
    lede:"O risco aqui é tratar quadrinho como prosa ilustrada e perder o que o meio tem de único: o ritmo que vive na quebra de página, o quadro entupido de ações, o balão que cobre o desenho. Aqui a história fica coerente, o roteiro fala a língua do artista (um quadro, uma ação; balão enxuto), e o que importa é a arte sequencial — a sarjeta, onde a imaginação do leitor preenche o que está entre os quadros.",
    ctxBlurb:"<code>OBRA.md</code> fixa premissa e tom · <code>PERSONAGENS.md</code> guarda voz e design · <code>ROTEIRO.md</code> traz o roteiro em página/quadro · <code>MUNDO.md</code> mantém a coerência do universo.",
    hero:"comics"
  },
  topbar:[
    { id:"project", label:"Obra", placeholder:"ex: o-ultimo-farol" },
    { id:"formatSel", label:"Formato", type:"select",
      options:["HQ/single issue","Graphic novel","Mangá","Webcomic (tira/página)","Webtoon (scroll vertical)","Tira/cartum","Minissérie"] },
    { id:"estilo", label:"Tradição-estilo", type:"select",
      options:["Americana (comics)","Mangá/japonesa","Franco-belga (BD)","Webtoon/coreana","Indie/autoral","Cartum/humor","Outra"] },
    { id:"langSel", label:"Idioma", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["continuity_memory","Continuidade tem memória","Antes de afirmar fato da história, do mundo ou de um personagem, consulta OBRA/PERSONAGENS/MUNDO. Não contradiz o estabelecido (design, arco, o que já aconteceu). O que surge e vinga vira cânone registrado. Em obra longa/seriada, a continuidade entre capítulos é o que sustenta o todo."],
    ["sequential_closure","Pensa na sarjeta (closure), não só no quadro","O que torna o quadrinho único acontece ENTRE os quadros: na sarjeta, o leitor preenche o que não foi mostrado (closure). O assistente pensa a sequência, não quadros isolados — o que cada transição pede do leitor. Sarjeta/transição padrão = fluxo; larga = pausa; ações justapostas = simultaneidade. Escolhe a transição (momento, ação, cena, aspecto...) que serve ao ritmo."],
    ["page_architecture","A página é arquitetura: controla o tempo","O layout não só contém a história — vira parte dela. Quadro grande desacelera, quadro pequeno acelera; a contagem de quadros por página é decisão de pacing (ação = poucos e grandes; diálogo tolera mais). A QUEBRA DE PÁGINA é ferramenta: o reveal vive na virada (página ímpar/par importa). Sugere quebrar o quadro (sangrar a borda) para impacto pontual."],
    ["one_panel_one_action","Um quadro, uma ação","Cada quadro congela UM momento — o erro nº1 do roteirista novato é enfiar várias ações num quadro só. O assistente decompõe a cena em beats visuais, um por quadro, e escolhe qual instante de cada ação melhor a conta. Pensa qual momento mostrar (não o filme inteiro)."],
    ["script_for_artist","Escreve para o artista (e o letreirista)","Roteiro de quadrinho não é prosa: serve à equipe. Indica página, quadro, descrição (clara, sem dirigir cada traço), e diálogo. Balão enxuto — ~25 palavras no máximo, até ~3 linhas; acima disso, quebra em dois. SFX e display lettering (placas, telas) marcados. Deixa espaço para a arte respirar — não entope o quadro de texto que cobre o desenho."],
    ["show_in_art","Mostre no desenho, não no balão","A imagem carrega o que prosa contaria: uma expressão, um gesto, um objeto no canto do quadro dizem mais que diálogo expositivo. O assistente busca a solução visual antes da verbal; usa legenda/balão para o que a imagem não alcança, não para repetir o que ela já mostra. Silêncio (quadro mudo) é recurso, não falha."],
    ["creator_draws","Escreve e estrutura; o artista desenha","O assistente não desenha — escreve o roteiro, planeja a página, mantém a coerência e critica o que o criador descreve. Levanta opções de layout/transição/ritmo e o porquê; o traço e o gosto visual são de quem desenha. Para o que se julga no desenho pronto, dá a leitura e devolve a decisão."],
  ],
  builderSection:{
    title:"A obra",
    hint:"Define o enquadramento. Entra nas instruções para o assistente respeitar formato, tradição e ritmo.",
    items:[
      { kind:"radios", label:"Método de roteiro", name:"method", opts:[
        ["full","Full script (quadro a quadro)"], ["plot","Plot/Marvel (resumo + arte primeiro)"], ["mixed","Misto"], ["self","Sou autor-desenhista"] ] },
      { kind:"radios", label:"Densidade típica de página", name:"density", opts:[
        ["sparse","Arejada (poucos quadros)"], ["standard","Padrão (4-6 quadros)"], ["dense","Densa (muitos quadros)"], ["vertical","Scroll vertical (webtoon)"] ] },
      { kind:"chips", label:"Tom dominante", name:"tone", opts:[
        ["action","Ação/aventura"], ["drama","Drama"], ["comedy","Comédia"], ["horror","Terror"], ["slice","Cotidiano"], ["romance","Romance"], ["fantasy","Fantasia"], ["scifi","Ficção científica"], ["noir","Noir/policial"], ["experimental","Experimental"] ] },
    ]
  },
  conventions:[
    "Antes de afirmar fato da história/mundo/personagem, consultar OBRA/PERSONAGENS/MUNDO; o improvisado que vinga vira cânone.",
    "Pensar a sequência e a sarjeta (closure), não quadros isolados; escolher a transição que serve ao ritmo.",
    "A página é arquitetura: contagem/tamanho de quadro é pacing; a quebra de página guarda o reveal.",
    "Um quadro = uma ação; decompor a cena em beats visuais, escolhendo o instante que melhor conta.",
    "Roteiro serve ao artista: página/quadro/descrição/diálogo claros; balão ≤ ~25 palavras / ~3 linhas; SFX marcados.",
    "Mostrar no desenho antes de contar no balão; silêncio é recurso. O assistente escreve/estrutura — o artista desenha."
  ],
  triggersExtra:[
    ["Roteiro/capítulo escrito ou revisto", "Entrega ROTEIRO.md completo (em página/quadro, com diálogo e notas de layout)."],
    ["Fato novo de história/mundo/personagem", "Entrega OBRA.md, MUNDO.md ou PERSONAGENS.md completo com o cânone atualizado."],
    ["Layout/ritmo de páginas definido", "Entrega ROTEIRO.md (ou a seção de thumbnails/breakdown) completo."],
    ["Capítulo/edição finalizado", "Entrega STATUS.md (estado + o que aprendeu sobre ritmo/recepção)."],
  ],
  contextFiles:[
    { name:"OBRA.md", cat:"essencial", role:"A bíblia: premissa, tom, arco geral, formato. O norte criativo. Estável.",
      content:`# OBRA.md — [Nome da Obra]

> A **bíblia** da obra. O assistente lê primeiro para alinhar história, tom e ritmo.
> **Estável** e enxuta: o essencial que orienta decisões; não uma enciclopédia.

---

## Logline
[A história em 1-2 frases. Quem, o que quer, qual o obstáculo, o que está em jogo.]

## Premissa e tema
- **Premissa:** [a situação que move a história.]
- **Tema:** [o que a obra investiga por baixo da trama.]
- **A experiência alvo:** [o que o leitor deve sentir.]

## Arco geral
> A jornada maior. Em obra seriada, o fio que atravessa os capítulos.
- [Ponto de partida → viragens → para onde caminha.]

## Tom e gênero
[O gênero + a sensação (sombrio? cômico? épico? íntimo?) que define a leitura.]

## Formato e ritmo
- **Formato:** [HQ / graphic novel / mangá / webcomic / webtoon] — [extensão: nº de páginas/capítulos.]
- **Tradição/estilo:** [americana / mangá / franco-belga / webtoon — molda layout e leitura.]
- **Método de roteiro:** [full script / plot (Marvel) / autor-desenhista.]
- **Direção de leitura:** [esquerda→direita / direita→esquerda (mangá) / scroll vertical (webtoon).]

## Referências
> Obras de DNA parecido + o que puxar de cada (estrutura? arte? ritmo? tom?).
- [Obra — o que puxar.]

## O que a obra NÃO é (anti-escopo)
- [Limites de visão — evita virar outra coisa e estourar o escopo.]
`},
    { name:"PERSONAGENS.md", cat:"essencial", role:"Elenco: design (silhueta), voz, arco. Estável; consultado antes de inventar.",
      content:`# PERSONAGENS.md — Elenco

> O elenco — design e voz de cada um. O assistente consulta para manter coerência visual e de fala.
> **Estável**: atualiza quando um arco avança ou o design se firma.

---

## [Nome] — [papel: protagonista / antagonista / secundário]
- **Quem é:** [em 2-3 traços concretos.]
- **Design / silhueta:** [a forma que o torna reconhecível à distância; o que a silhueta comunica. Traços visuais que NÃO podem variar entre quadros (para o artista manter).]
- **Voz / fala:** [como fala — ritmo, vocabulário, tique. Para o diálogo soar igual sempre. Se quiser, formato de balão característico (ex.: serrilhado, robótico).]
- **Quer / motivação:** [o objetivo que o move.]
- **Arco:** [como muda ao longo da obra; o que está em jogo.]
- **Linguagem corporal:** [como expressa emoção em gesto/postura — ajuda o artista a atuar o personagem.]

---

## [Próximo personagem]
[...]

---

## Relações
- [Quem é o quê de quem; as tensões/vínculos que geram drama.]
`},
    { name:"ROTEIRO.md", cat:"essencial", role:"Roteiros em página/quadro, com diálogo, descrição e notas de layout. Cresce.",
      content:`# ROTEIRO.md — Roteiro

> **Cresce** conforme a história é escrita. Roteiro em formato de quadrinho — serve ao artista e ao letreirista.
> Regras: um quadro, uma ação; balão ≤ ~25 palavras / ~3 linhas; descrição clara sem dirigir cada traço.

---

## [Título do capítulo/edição] — [estado: outline / roteiro / thumbnails]
**Logline:** [a história desta peça em 1 frase.]
**Função no arco:** [o que avança no arco maior + o que fecha por si.]
**Páginas estimadas:** [quantas; e a direção de leitura.]

### Beats / quebra
> Os momentos-chave em ordem, pensando no ritmo (e em quais reveals caem na virada de página).
- [Beat — função dramática — em que página cai (e se é virada/reveal).]

### Roteiro (página/quadro)
> Formato claro para a equipe. Indique a quebra de página; marque L (esquerda) / R (direita) se a virada importa.
\`\`\`
PÁGINA 1 (R)
QUADRO 1 — [descrição da imagem: o que se vê, enquadramento, o instante. Uma ação.]
  BALÃO (Personagem): [diálogo — enxuto, ~25 palavras máx.]
  LEGENDA: [narração/voz off, se houver.]
  SFX: [efeito sonoro / display lettering.]

QUADRO 2 — [...]
\`\`\`

### Notas de layout / transições
> Onde indicar pacing: quadros grandes/pequenos, sarjeta larga (pausa), quebra de quadro (impacto), tipo de transição.
- [Página/quadro: a intenção de ritmo.]

---

## [Próximo capítulo]
[...]
`},
    { name:"MUNDO.md", cat:"essencial", role:"Mundo, regras, lugares, facções. A coerência do universo. Estável.",
      content:`# MUNDO.md — Mundo e Lore

> A coerência do universo da obra. O assistente consulta antes de afirmar fatos do mundo.
> **Estável** e enxuto: só o que a história usa; adicione sob demanda.

---

## Tom e premissa do mundo
[A sensação do cenário e a lógica que o move, em poucas linhas.]

## Regras do mundo
- **Lógica interna:** [o que é possível/impossível; magia/tecnologia com seus limites e custos — para a coerência não quebrar.]
- **O que é diferente:** [o que este mundo faz que foge do genérico.]

## Lugares-chave
### [Local]
- **O que é / por que importa:** [em 1-2 linhas; o que acontece aqui.]
- **Visual:** [um traço que o artista precisa para desenhar coerente.]

## Facções e poderes
### [Facção]
- **Quer:** [o objetivo — facções proativas geram conflito.]
- **Relação com os protagonistas:** [como cruza com a história.]

## Grafia canônica
> Nomes inventados se escrevem sempre igual.
- **[Nome/termo]** — [grafia oficial + significado.]

## Cânone estabelecido
> Fatos que já entraram na obra (inclusive improvisados) e agora são verdade.
- [Fato — em que capítulo surgiu.]
`},
    { name:"STATUS.md", cat:"rolante", role:"Onde a obra está agora: o que está pronto, em que etapa, próximos passos. Rolante.",
      content:`# STATUS.md — Estado da Obra

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Item resolvido sai daqui (vira nota no log; o cânone fica em OBRA/MUNDO).

---

## Fase
[Conceito / Roteiro / Thumbnails / Arte / Lettering / Publicação] — [foco do momento.]

## ✅ Pronto
- [O que já está fechado (roteiro do cap. X, thumbnails da página Y...).]

## 🔧 Em andamento
- [O que está sendo feito agora + onde parei.]

## 🎯 Próxima ação
- [O próximo passo concreto.]

## 🧩 Para resolver
- [Decisão de roteiro/design pendente; problema de ritmo/layout a destravar.]

## ⚠️ Atenção / continuidade
- [Algo destoando do estabelecido; design de personagem inconsistente; arco que não fecha.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + próximo passo óbvio.]
`},
    { name:"PRANCHAS.md", cat:"opcional", role:"OPCIONAL — breakdown visual página a página (thumbnails, layout, fluxo de leitura). Use ao planejar a arte.",
      content:`# PRANCHAS.md — Breakdown de Páginas

> **Opcional.** Use ao planejar a arte página a página (thumbnails/layout), entre o roteiro e o desenho final.
> Foco no FLUXO: como o olho percorre a página e como o ritmo se constrói quadro a quadro.

---

## Página [N] ([L/R])
- **Função:** [o que esta página entrega na história; cai uma virada/reveal aqui?]
- **Nº de quadros:** [e por quê — ação (poucos/grandes) ou diálogo (mais)?]
- **Layout / fluxo:** [como os quadros se arranjam; o caminho do olho; algum quadro sangrando a borda?]
- **Quadro-foco:** [o quadro que domina a página (splash? o maior?) e por que merece destaque.]
- **Ritmo:** [onde a leitura acelera/desacelera; sarjeta larga para pausa?]
- **Texto:** [carga de balões — cabe sem cobrir a arte? onde o letreirista vai precisar de espaço?]

---

## Página [N+1]
[...]

---

## Notas de spread (páginas duplas)
> Se há páginas duplas, o que elas fazem (panorama, grande momento) e como L/R se combinam.
- [...]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Obra]

## Foco da sessão
[Roteiro, breakdown de páginas, design, lettering, revisão.]

## Feito
- [O que avançou — capítulo, páginas, etapa.]

## História / roteiro
- [Beats/cenas escritos → ROTEIRO.md.]

## Mundo / personagens
- [Fato novo, design firmado, voz, grafia → OBRA/MUNDO/PERSONAGENS (cânone).]

## Ritmo / layout
- [Decisão de quebra de página, transição, densidade → ROTEIRO/PRANCHAS.]

## Onde parei
[Estado + próximo passo. Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: o que está pronto, em andamento, próxima ação", active:true },
    { key:"roteiro", name:"ROTEIRO.md", role:"completo, se um roteiro/capítulo avançou", active:true },
    { key:"personagens", name:"PERSONAGENS.md", role:"completo, se um personagem/design foi firmado ou evoluiu", active:false },
    { key:"obra", name:"OBRA.md", role:"completo, se a premissa/arco/tom mudou", active:false },
    { key:"mundo", name:"MUNDO.md", role:"completo, se um fato novo do mundo foi estabelecido", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Explorar conceito / história", when:"Tenho uma ideia e quero firmar premissa, tom e arco antes de roteirizar.",
      fill:"idea", fillLabel:"A ideia + o formato pretendido + a sensação que imagino",
      body:(p,n)=>`Exploração de conceito de quadrinho.\n\nIDEIA:\n${p.idea||"[A ideia + o formato (HQ/graphic novel/mangá/webtoon) + a sensação que imagino]"}\n\nFirme a visão (consultando OBRA.md se existir):\n- Logline forte (quem quer o quê, contra qual obstáculo, o que está em jogo)\n- Premissa, tema e a EXPERIÊNCIA alvo (o que o leitor deve sentir)\n- O arco maior + como os capítulos se encadeiam (se seriado)\n- Formato e tradição (americana/mangá/webtoon) e como isso molda o ritmo e a leitura (incl. direção e, no webtoon, o scroll vertical)\n- Anti-escopo: o que isto NÃO deve tentar ser\n- Referências de DNA e o que puxar de cada\n\nNão escreva roteiro ainda — firme a base. A visão é sua; eu apresento opções com trade-offs. Quando você escolher, registramos em OBRA.md.`
    },
    { id:"H", title:"Escrever roteiro (página/quadro)", when:"Quero escrever ou revisar um capítulo em formato de roteiro.",
      fill:"script", fillLabel:"O capítulo + o que já tem (ideia, beats, ou roteiro)",
      body:(p,n)=>`Roteiro de quadrinho.\n\nMATERIAL:\n${p.script||"[O capítulo/cena + o que já existe: ideia, beats, ou um roteiro a revisar]"}\n\nConsultando OBRA.md (tom, método, leitura), PERSONAGENS.md (vozes) e MUNDO.md:\n- Decomponha a cena em BEATS visuais — um quadro, uma ação (não enfie várias ações num quadro)\n- Escreva no formato de roteiro: PÁGINA / QUADRO / descrição da imagem (clara, sem dirigir cada traço) / BALÃO / LEGENDA / SFX\n- Diálogo enxuto: ~25 palavras no máximo por balão, até ~3 linhas — acima disso, quebre\n- Indique a quebra de página e, onde a virada importa para um reveal, marque L/R\n- Busque a SOLUÇÃO VISUAL (mostre no desenho) e deixe espaço para a arte respirar; use o silêncio (quadro mudo) quando ele disser mais\n\nEntregue ROTEIRO.md completo (em página/quadro + notas de layout). A história é sua; eu estruturo e escrevo para o artista.`
    },
    { id:"I", title:"Planejar páginas (layout e ritmo)", when:"Tenho o roteiro e quero pensar o fluxo e o ritmo das páginas.",
      fill:"pages", fillLabel:"As páginas/cena a planejar + o ritmo que quero",
      body:(p,n)=>`Planejamento de páginas (layout e ritmo).\n\nMATERIAL:\n${p.pages||"[As páginas ou cena a planejar + o ritmo/sensação que quero. Ou: 'as próximas páginas de ROTEIRO.md']"}\n\nPense a PÁGINA como arquitetura que controla o tempo, consultando ROTEIRO.md e OBRA.md (tradição):\n- Quantos quadros por página e o porquê (ação = poucos e grandes/acelera o impacto; diálogo = mais quadros)\n- O caminho do olho pela página (fluxo de leitura claro; algum quadro sangrando a borda para impacto?)\n- O quadro-foco de cada página (splash? o maior?) e o que merece esse destaque\n- A QUEBRA DE PÁGINA: que reveal/gancho cai na virada (L→R); usar a virada a favor da surpresa\n- Sarjeta: onde uma pausa (sarjeta larga) ou simultaneidade ajuda o ritmo\n- Se for webtoon: pensar em scroll vertical (respiro entre quadros, "thumb stops"), não em página\n\nNão desenhe — dê o breakdown (layout/ritmo por página); você (ou o artista) executa. Entregue PRANCHAS.md (ou a seção de layout do ROTEIRO).`
    },
    { id:"J", title:"Resolver uma transição / sequência", when:"Uma passagem entre quadros ou cenas não está fluindo.",
      fill:"transition", fillLabel:"A passagem que não flui (descreva os quadros/momentos)",
      body:(p,n)=>`Transição / sequência.\n\nPASSAGEM:\n${p.transition||"[A passagem que não flui — entre quais quadros/cenas; o que você quer que o leitor sinta ali]"}\n\nResolva pela linguagem da sarjeta (closure), consultando ROTEIRO.md:\n- Que TIPO de transição serve aqui? (momento-a-momento = tensão lenta; ação-a-ação = o pão com manteiga; tema-a-tema = avança a cena; cena-a-cena = salto de tempo/lugar; aspecto-a-aspecto = atmosfera, típico do mangá)\n- O que o leitor precisa preencher na sarjeta — está pedindo closure demais (confuso) ou de menos (arrastado)?\n- A largura da sarjeta / quebra ajuda? (pausa, simultaneidade)\n- Falta um quadro de ligação, ou sobra um quadro redundante?\n- A leitura/eixo está clara, ou o olho se perde?\n\nProponha a sequência ajustada (quais quadros, qual transição) e o porquê. Atualize ROTEIRO.md.`
    },
    { id:"K", title:"Revisar diálogo e balões", when:"Quero enxugar o texto e checar se os balões cabem na arte.",
      fill:"dialogue", fillLabel:"O diálogo/página a revisar (cole o texto)",
      body:(p,n)=>`Revisão de diálogo e balões.\n\nMATERIAL:\n${p.dialogue||"[O diálogo ou a página a revisar — cole o texto dos balões/legendas]"}\n\nEnxugue para o meio (texto cobre arte é o vilão), consultando PERSONAGENS.md (vozes):\n- Cada balão dentro de ~25 palavras / ~3 linhas? O que passar, quebre em dois ou corte\n- O que o BALÃO diz que o DESENHO já mostraria? (corte a redundância — mostre, não conte)\n- A voz de cada personagem está fiel e distinta?\n- A ordem de leitura dos balões no quadro está clara? (quem fala primeiro)\n- Legenda/voz off: está ganhando seu espaço ou poderia virar imagem?\n- Onde o silêncio (quadro sem texto) diria mais?\n\nEntregue a versão enxuta, marcando o que cortei e por quê. O objetivo é deixar a arte respirar. Atualize ROTEIRO.md.`
    },
    { id:"L", title:"Diagnosticar ritmo / leitura travada", when:"A história 'não anda' ou as páginas estão confusas de ler e não sei por quê.",
      fill:"problem", fillLabel:"O sintoma — o que parece errado no ritmo/leitura",
      body:(p,n)=>`Diagnóstico de ritmo/leitura.\n\nSINTOMA:\n${p.problem||"[O que parece errado — 'arrasta', 'atropela', 'confuso de ler', 'sem impacto', 'os reveals caem mortos']"}\n\nInvestigue pela linguagem do meio, consultando ROTEIRO.md e OBRA.md:\n- "Arrasta" → transições momento-a-momento demais; quadros redundantes; páginas com quadros pequenos onde devia acelerar\n- "Atropela" → closure demais entre quadros (falta beat); ação importante sem espaço; reveal sem preparação\n- "Confuso de ler" → fluxo do olho quebrado; ordem de balões ambígua; layout que luta contra a leitura\n- "Sem impacto" → o grande momento não tem destaque (devia ser splash/quadro maior); caiu no lugar errado da página\n- "Reveal morto" → a virada de página não foi usada (o reveal apareceu antes da virada); falta a quebra L→R\n- "Texto demais" → balões cobrindo a arte; expositivo no lugar de visual\n\nDiga o nome do problema, por que acontece, e a correção concreta. Comece pela hipótese mais provável e de menor esforço. O que se julga na arte pronta é seu olho; eu aponto a estrutura.`
    },
  ]
};