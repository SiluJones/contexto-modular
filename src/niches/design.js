NICHES.design = {
  id:"design", label:"Design Visual", icon:"✦", group:"serif", category:"core",
  cardColor:"#c084fc", cardTags:["identidade","editorial","freelance"],
  cardDesc:"Identidade, layout, conceito — do brief à arte final",
  intro:{
    headline:"Do brief à arte final sem perder o conceito no caminho.",
    lede:"O risco aqui é duplo: perder a coerência visual entre peças (a cor que vira outra, a fonte que escapa) e perder o porquê das escolhas entre uma conversa e outra. Aqui o sistema visual fica registrado — paleta em todos os espaços de cor, regras de logo, decisões de conceito — e cada revisão sabe qual rodada é e o que o cliente já aprovou.",
    ctxBlurb:"<code>PROJETO.md</code> guarda o brief e o escopo · <code>MARCA.md</code> fixa o sistema visual (logo, cores, tipografia) · <code>DECISOES.md</code> diz por que cada escolha · <code>REVISOES.md</code> rastreia versões e feedback.",
    hero:"design"
  },
  topbar:[
    {id:"project", label:"Projeto", placeholder:"ex: identidade-cafe-azul"},
    {id:"client", label:"Cliente", placeholder:"ex: Café Azul Ltda."},
    {id:"phase", label:"Fase", type:"select", options:["Briefing","Conceito","Criação","Revisão","Arte-final","Entrega"]},
  ],
  behaviors:[
    ["dualeye","Dois olhares: designer e quem vai ver","Avalia cada peça como designer (composição, hierarquia, sistema) E como o público que vai recebê-la (consegue ler? entende rápido? a mensagem chega?). Antecipa a reação do usuário-final e do cliente. A dor de fundo do cliente costuma ser concreta (ex.: \"legibilidade para clientes mais velhos\"), não estética abstrata — atende a dor real."],
    ["feedback_specific","Feedback: problema do cliente, solução do designer","Quando o cliente dá feedback vago (\"não gostei\", \"deixa mais moderno\"), traduz em problema concreto antes de agir — faz perguntas específicas (\"a cor está forte demais? o título compete com a imagem?\"). A intuição do cliente sobre o PROBLEMA costuma estar certa; a SOLUÇÃO vem do designer. Não aplica a solução literal do cliente sem entender o problema por trás."],
    ["system_consistency","Consistência com o sistema visual","Antes de propor qualquer elemento (cor, fonte, espaçamento, tratamento), consulta MARCA.md e REFERENCIAS.md. Não introduz cor fora da paleta nem fonte fora do sistema sem sinalizar explicitamente como decisão nova. Coerência entre peças é o que separa identidade de colagem."],
    ["scope_rounds","Guarda escopo e rodadas de revisão","Toda peça tem entregáveis e número de rodadas definidos em PROJETO.md. Quando um pedido extrapola (nova peça, mais rodadas que o contratado), sinaliza com \"Yes-and\": reconhece, posiciona como adicional/fase-2, oferece caminho. Quando a rodada atual é a última contratada, avisa com gentileza."],
    ["print_verify","Verifica specs técnicas antes de afirmar","Em assuntos onde um erro vira retrabalho ou peça impressa errada (CMYK vs RGB, sangria, resolução, fontes incorporadas, specs de uma ferramenta), confirma o fato por busca antes de afirmar. Não inventa configuração; aponta a dúvida. Pré-impressão tem regras duras — segue o checklist em PRODUCAO.md."],
    ["ref_type","Distingue referência de conteúdo vs. de estilo","Quando o cliente manda uma referência, separa o que é referência de CONTEÚDO (usar o texto/dados/informação) do que é referência de ESTILO (usar o visual/tom). Confundir as duas gera erro de direção. Anota qual é qual em REFERENCIAS.md."],
  ],
  builderSection:{
    title:"Ferramentas & Entregáveis",
    hint:"Marque o que o projeto usa. Entra nas instruções para o assistente não sugerir fora do seu setup.",
    type:"chips",
    groups:[
      {label:"Ferramentas", items:["Affinity Designer","Affinity Publisher","Affinity Photo","Figma","Illustrator","Photoshop","InDesign","Canva","Procreate","Sketch","Inkscape","CorelDRAW","Penpot"]},
      {label:"Tipo de entregável", items:["Logotipo","Identidade visual","Sistema de marca","Cardápio / Menu","Catálogo","Apresentação","Mockup web","Landing page","Infográfico","Material editorial","Embalagem","Social media","Sinalização","Tipografia"]},
      {label:"Mídia de saída", items:["Impressão","Digital/tela","Ambos (print+digital)","Grande formato","Web"]},
      {label:"Formato de arquivo", items:["PDF","PDF/X (print)","PNG","SVG","JPG","AFDESIGN","AFPUB","INDD","AI","FIG","PSD","EPS"]},
    ],
    other:false
  },
  conventions:[
    "O sistema visual (paleta, tipografia, regras de logo) vive em MARCA.md; toda peça nova obedece a ele.",
    "Cores são registradas em todos os espaços relevantes: HEX e RGB (tela), CMYK (impressão offset), Pantone (cor especial) — para a marca não mudar de tom entre mídias.",
    "Decisões de conceito (por que esta fonte, esta cor, este símbolo) vão em DECISOES.md — não basta o arquivo do design lembrar.",
    "Cada versão entregue vira entrada em REVISOES.md, com a rodada de revisão usada e o feedback recebido.",
    "Escopo (entregáveis, rodadas, exclusões) vive em PROJETO.md e é a referência para julgar pedidos novos.",
    "Para peças impressas, o checklist de pré-impressão em PRODUCAO.md é obrigatório antes de marcar como pronta."
  ],
  triggersExtra:[
    ["Conceito ou direção visual definida", "Entrega DECISOES.md completo (por que esta direção, alternativas, racional) e MARCA.md se o sistema mudou."],
    ["Versão entregue ao cliente", "Entrega REVISOES.md completo (versão, rodada usada, feedback) e STATUS.md."],
    ["Decisão de cor/fonte/símbolo", "Entrega MARCA.md e DECISOES.md completos atualizados."],
    ["Peça indo para impressão", "Roda e entrega o checklist de PRODUCAO.md; só marca pronta se passar."],
    ["Pedido de nova peça ou rodada extra", "Entrega o rascunho 'Yes-and' e registra em DECISOES/STATUS o impacto no escopo."],
  ],
  contextFiles:[
    {name:"PROJETO.md", cat:"ctx", role:"O brief: objetivo, público, mídia, tom, entregáveis, rodadas e exclusões. Estável.", content:`# PROJETO.md — [Nome do Projeto]

> Arquivo **estável**. O brief é a fundação de tudo — o assistente lê para alinhar direção e julgar pedidos.
> Mude só em alteração real de escopo (e isso vira decisão registrada).

---

## Objetivo
[O que este projeto precisa alcançar, em 1-3 frases. O resultado para o cliente/negócio, não as tarefas.]

## Público-alvo
- **Quem vai ver/usar:** [perfil concreto. Idade, contexto, como consome.]
- **A dor de fundo:** [o que realmente importa para eles. Ex.: "clientes mais velhos precisam ler o menu rápido". Palavras do cliente entre aspas.]

## Mídia e contexto de uso
- **Onde vai viver:** [impressão / digital / ambos / grande formato]
- **Se impressão:** [tamanho final, tipo de papel se souber, onde será impresso. Specs detalhadas em PRODUCAO.md.]
- **Se digital:** [telas, contexto — mobile? apresentação?]

## Tom visual pretendido
[3-5 adjetivos âncora + o que evitar. Ex.: "acolhedor, artesanal, legível — NÃO corporativo, NÃO minimalista frio".]

## Entregáveis (o que está incluído)
- [Entregável concreto + formato + quantidade. Ex.: "1 cardápio A3 frente e verso, PDF print-ready".]
- [...]

## Rodadas de revisão contratadas
- **Número:** [ex.: 2 rodadas de ajuste após a primeira versão]
- **O que conta como rodada:** [definição, para não virar revisão infinita]
- **Rodadas já usadas:** [ex.: 1 de 2]

## O que NÃO está incluído (exclusões)
> Contém scope creep. Liste o que o cliente pode achar incluso mas não está.
- [Ex.: versões para redes sociais; impressão física; novas fotos/ilustrações; mais de N rodadas.]

## Prazo
- [Marco — data — status]
`},
    {name:"CLIENTE.md", cat:"ctx", role:"Quem é o cliente: gosto, vetos, como dá feedback. Estável.", content:`# CLIENTE.md — [Nome do Cliente]

> Arquivo **estável**. O assistente lê para acertar o tom da comunicação e antecipar o gosto/atrito.

---

## Quem é
- **Nome / negócio:** [...]
- **Quem aprova:** [a pessoa que decide é quem pediu? há um chefe por trás?]
- **Familiaridade com design:** [leigo / tem repertório / acha que entende]

## Gosto e referências do próprio cliente
- **Gosta de:** [estilos, marcas que admira, exemplos que citou.]
- **Não gosta de / vetos:** [o que ele rejeita explicitamente.]

## Como dá feedback (importante)
- **Forma:** [específico / vago ("não gostei") / prescritivo ("põe vermelho")]
- **Usa IA ou terceiros?** [se repassa análise de GPT/Gemini ou de um conhecido como se fosse dele — anote. Tratar com cuidado: separar a vontade real dele da sugestão de fora.]
- **Velocidade de aprovação:** [decide rápido / some / muda de ideia]

## Sensibilidades
- [Assuntos delicados; como ele reage a crítica/correção; o que irrita.]

## Histórico
- [Projetos anteriores; atritos e como foram resolvidos.]
`},
    {name:"MARCA.md", cat:"ctx", role:"O sistema visual: logo (regras), paleta em todos os espaços de cor, tipografia, extensões, tom. Estável.", content:`# MARCA.md — Sistema Visual

> Arquivo **estável** e central. É a fonte de verdade do visual — toda peça obedece a ele.
> Para identidade/marca, são seis ativos: logo, marca secundária, paleta, tipografia, extensões, tom.
> Se o projeto é uma peça avulsa (não uma identidade), preencha só o que se aplica.

---

## 1. Logo / marca primária
- **Descrição:** [o que é o logo, versões — horizontal, vertical, símbolo isolado.]
- **Clear space (zona de respiro):** [espaço mínimo ao redor. Ex.: "altura do 'x' do logotipo".]
- **Tamanho mínimo:** [impressão (mm) e digital (px) — abaixo disso perde legibilidade.]
- **Usos proibidos:** [não distorcer, não trocar cor, não aplicar sobre fundo de baixo contraste, não adicionar efeitos.]

## 2. Marca secundária / variações
- [Submarca, selo, versão monocromática, favicon — quando usar cada uma.]

## 3. Paleta de cores
> Registre em TODOS os espaços relevantes para a cor não mudar entre tela e papel.

| Nome | HEX | RGB | CMYK | Pantone | Uso |
|---|---|---|---|---|---|
| [Primária] | #...... | r,g,b | c,m,y,k | [PMS ...] | [onde usar] |
| [Secundária] | | | | | |
| [Apoio/neutro] | | | | | |

- **Regra de contraste:** [combinações garantidas; mínimos de acessibilidade se for digital.]

## 4. Tipografia
- **Display / títulos:** [família, pesos usados, quando usar.]
- **Texto corrido:** [família, peso, tamanho-base.]
- **Hierarquia:** [como título / subtítulo / corpo / legenda se diferenciam.]
- **Fallback:** [fonte de substituição se a principal não estiver disponível.]

## 5. Extensões visuais
- [Padrões, ícones, grafismos, tratamento de imagem/fotografia, grid.]

## 6. Tom visual
- [A "personalidade" que o conjunto transmite, em uma frase + o que NÃO somos.]
`},
    {name:"REFERENCIAS.md", cat:"ctx", role:"Moodboard textual: paletas, tipografias, links — distinguindo conteúdo de estilo. Estável.", content:`# REFERENCIAS.md — [Projeto]

> Arquivo **estável**. Moodboard em texto + referências do cliente, com a distinção crucial: conteúdo vs. estilo.

---

## Direção visual (moodboard textual)
[Descreva em palavras o clima visual: "luz quente, texturas de papel, tipografia serifada com personalidade". Liga o tom de PROJETO.md à execução.]

## Referências do cliente
> Para cada uma, marque: é referência de CONTEÚDO (usar o texto/dados/info) ou de ESTILO (usar o visual)?
- **[Referência + link]** — [CONTEÚDO ou ESTILO?] — [o que aproveitar dela especificamente.]
- [...]

## Paletas em estudo
- [Combinações candidatas — antes de virarem oficiais em MARCA.md.]

## Tipografias em estudo
- [Fontes candidatas + por que combinam com o tom.]

## Referências negativas
- [Estilos/exemplos que o projeto NÃO deve seguir — explicitamente.]
`},
    {name:"DECISOES.md", cat:"ctx", role:"Por que cada escolha visual: esta fonte, esta cor, este símbolo, este layout. Cresce devagar.", content:`# DECISOES.md — Decisões Visuais

> Arquivo que **cresce devagar**. Guarda o PORQUÊ das escolhas — o que o arquivo de design não conta.
> Evita refazer a mesma discussão ("por que não usamos azul mesmo?") a cada conversa.

---

## DEC-[N] — [A decisão, em uma linha]
**Data:** AAAA-MM-DD · **Status:** ativa | revista por DEC-X

### Contexto
[Que escolha precisou ser feita e por quê agora.]

### Decisão
[O que foi decidido. Ex.: "tipografia de títulos: Fraunces; corpo: Inter".]

### Alternativas consideradas
- **[Alternativa]** — [por que não.]

### Racional
[Por que esta escolha serve ao objetivo/público/tom de PROJETO.md. Ligue à dor de fundo do cliente quando aplicável.]

### Aprovação
[O cliente aprovou? Em que data? (cruza com REVISOES.md.)]

---

## DEC-[N+1] — [...]
[...]
`},
    {name:"REVISOES.md", cat:"hist", role:"Histórico de versões entregues, feedback do cliente e qual rodada foi usada. CRESCE.", content:`# REVISOES.md — Histórico de Versões

> Arquivo que **cresce**. Cada versão entregue e cada feedback ficam registrados, com a rodada de revisão.
> Prova o que foi entregue/quando e mostra quantas rodadas já rolaram (controle de escopo).

---

## [Entregável] — v[N]
**Enviado em:** AAAA-MM-DD · **Como:** [PDF / link / mockup]
**O que mudou desde a anterior:** [resumo das alterações.]
**Feedback do cliente:** [o que ele disse — literal quando relevante. Vago? Específico? De terceiro/IA?]
**Tradução do feedback:** [o problema concreto por trás, como o designer entendeu.]
**Rodada de revisão:** [ex.: usou a 1ª de 2.]
**Status:** [aguardando feedback / em ajuste / aprovada]

---

## [Entregável] — v[N+1]
[...]
`},
    {name:"STATUS.md", cat:"ctx", role:"O agora: o que está aprovado, o que aguarda, próximo passo, com quem está a bola. Rolante.", content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Item resolvido sai daqui (vira versão em REVISOES, ou nota no log).

---

## Fase atual
[Briefing / Conceito / Criação / Revisão / Arte-final / Entrega]

## 🎾 Com quem está a bola
[**Designer** — preciso fazer X / **Cliente** — aguardando aprovação/feedback de Y desde DATA.]

## ✅ Aprovado
- [O que o cliente já bateu o martelo — não mexer sem novo pedido.]

## 🔧 Em criação / ajuste
- [O que está na bancada agora.]

## ⏳ Aguardando do cliente
- [Aprovação / material / texto / fotos — desde quando.]

## ⚠️ Riscos / atritos
- [Rodada de revisão quase no limite; prazo apertado; feedback contraditório; cliente sumido.]

## Próxima ação + prazo
- [O próximo passo concreto + data + de quem é.]

## 💬 Última sessão
**[data]** — [o que rolou + onde parou + próximo passo óbvio.]
`},
    {name:"PRODUCAO.md", cat:"opcional", role:"OPCIONAL — checklist de pré-impressão/exportação por entregável. Use quando há peça impressa ou entrega técnica.", content:`# PRODUCAO.md — Pré-impressão e Exportação

> **Opcional**, mas obrigatório quando há peça para impressão. Reúne as specs e o checklist que evitam reimpressão cara.
> Regra de ouro: projetar em CMYK desde o início se o destino é papel.

---

## Specs por entregável
### [Peça — ex.: Cardápio A3]
- **Tamanho final (trim):** [ex.: 297 × 420 mm]
- **Sangria (bleed):** [ex.: 3 mm em todos os lados]
- **Margem de segurança:** [conteúdo importante a ≥ 3-5 mm da borda de corte]
- **Resolução:** [300 DPI no tamanho final para leitura de perto]
- **Modo de cor:** [CMYK; perfil ICC se o gráfico fornecer]
- **Onde será impresso:** [gráfica / copy shop + contato]

## Checklist de pré-impressão (pré-flight)
> Marcar antes de exportar a arte final.
- [ ] Documento em **CMYK** (imagens importadas convertidas também)
- [ ] **Sangria** aplicada; fundos/imagens estendem até a sangria
- [ ] Conteúdo crítico (texto, logo) dentro da margem de segurança
- [ ] **Resolução** ≥ 300 DPI no tamanho final; nada esticado/pixelado
- [ ] **Fontes** incorporadas ou convertidas em contornos
- [ ] Marcas de corte (crop marks) na exportação
- [ ] Ortografia e espaçamento revisados (texto é a falha que mais escapa)
- [ ] Cores especiais (Pantone) conferidas contra MARCA.md
- [ ] **Prova real:** exportar PDF e imprimir um teste / levar a copy shop antes da tiragem
- [ ] PDF final exportado como **PDF/X** (print-ready)

## Exportação digital (se aplicável)
- [ ] RGB; sRGB para web
- [ ] Resolução/tamanho corretos por uso (1x/2x para tela)
- [ ] Formatos por destino (SVG p/ vetor, PNG p/ transparência, JPG p/ foto)

## Notas da gráfica
- [Especificidades que o impressor pediu; aprendizados de tiragens anteriores.]
`},
    {name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.", content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Projeto]

## Foco da sessão
[Conceito, criação de peça, revisão, pré-impressão, apresentação.]

## Feito
- [Peças/versões trabalhadas; o que avançou.]

## Decisões visuais
- [O que virou DEC-N em DECISOES.md (fonte, cor, símbolo, layout).]

## Revisões / feedback
- [Versões entregues e feedback → REVISOES.md; rodada usada.]

## Sistema de marca
- [Mudou algo em MARCA.md? Cor, fonte, regra de logo?]

## Produção
- [Checklist de pré-impressão rodado? Pendências técnicas?]

## Onde parei
[Estado ao encerrar + próximo passo + com quem está a bola. Alimenta o STATUS.]
`}
  ],
  outputs:[
    {key:"status", name:"STATUS.md", role:"completo: o aprovado, o que aguarda, com quem está a bola", active:true},
    {key:"revisoes", name:"REVISOES.md", role:"completo, com nova entrada se houve entrega ou feedback", active:true},
    {key:"decisoes", name:"DECISOES.md", role:"completo, com nova DEC se houve decisão de conceito/visual", active:true},
    {key:"marca", name:"MARCA.md", role:"completo, se o sistema visual mudou (cor, fonte, regra de logo)", active:false},
    {key:"producao", name:"PRODUCAO.md", role:"completo, se uma peça foi para impressão (quando usa o arquivo)", active:false},
    {key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true},
  ],
  promptsExtra:[
    { id:"G", title:"Brief / onboarding do projeto", when:"Começo de projeto — montar o brief e o sistema antes de criar.",
      fill:"context", fillLabel:"O pedido do cliente, referências, tudo que sabe (cole conversa/briefing)",
      body:(p,n)=>`Onboarding de projeto de design${p.client?` (${p.client})`:""}.\n\nCONTEXTO:\n${p.context||"[Cole o pedido, conversa inicial, referências enviadas, tudo que sabe]"}\n\nEntregue (arquivos completos):\n- PROJETO.md: objetivo, público + a DOR DE FUNDO real, mídia (impressão? digital?), tom visual (adjetivos âncora + o que evitar), entregáveis, e principalmente o que NÃO está incluído + número de rodadas\n- CLIENTE.md: perfil, gosto, vetos, como dá feedback (marque o que é dedução vs. fato)\n- REFERENCIAS.md: organize as referências separando CONTEÚDO de ESTILO\n- Perguntas críticas a fazer antes de criar (o que falta no brief: tamanho final? onde imprime? quem aprova?)\n\nSinalize qualquer zona cinza de escopo que valha travar agora. Se for peça impressa, lembre de capturar specs para PRODUCAO.md.`
    },
    { id:"H", title:"Explorar conceito / direção", when:"Hora de propor direções visuais — quero opções, não uma só.",
      fill:"brief", fillLabel:"O que vou criar + o que o brief pede (ou diga: use o PROJETO.md)",
      body:(p,n)=>`Exploração de conceito.\n\nO QUE CRIAR:\n${p.brief||"[A peça/identidade + o que o brief pede. Ou: 'use PROJETO.md e MARCA.md']"}\n\nUsando PROJETO.md (objetivo, público, tom) e REFERENCIAS.md:\n- Proponha 2-3 direções de conceito distintas (não variações da mesma) — cada uma com: ideia central, paleta sugerida, tipografia, e como serve à dor de fundo do cliente\n- Para cada direção, diga o que ela arrisca e para quem ela funciona melhor\n- Aponte qual você recomenda e por quê (mas apresente as outras com justiça)\n- Boas práticas: apresentar mais de uma opção mostra flexibilidade sem perder direção\n\nNão detalhe execução ainda — é direção. Depois que eu escolher, registramos em DECISOES.md.`
    },
    { id:"I", title:"Interpretar feedback visual vago", when:"Cliente deu feedback do tipo 'não gostei' / 'deixa mais X'.",
      fill:"feedback", fillLabel:"O feedback do cliente, literal (cole como ele mandou)",
      body:(p,n)=>`Tradução de feedback visual.\n\nFEEDBACK LITERAL:\n${p.feedback||"[Cole o que o cliente disse, sem editar]"}\n\nAnalise (como designer E como o público-final):\n- Qual é o PROBLEMA concreto por trás do comentário (a intuição do cliente sobre o problema costuma estar certa)\n- A solução que ele propôs (se propôs) resolve o problema, ou trata o sintoma? A solução é trabalho meu\n- Parece feedback dele ou de uma IA/terceiro? (jargão estranho, contradição com o gosto dele em CLIENTE.md)\n- Onde conflita com decisões já aprovadas (DECISOES.md) ou com o sistema (MARCA.md)\n\nProponha: (a) 1-3 perguntas específicas de esclarecimento (\"a cor está forte demais? o título compete com a foto?\"), (b) o que dá para ajustar já com segurança, (c) o que esperar esclarecer antes de mexer. Não aplique a solução literal sem entender o problema.`
    },
    { id:"J", title:"Registrar decisão visual", when:"Bateu o martelo numa escolha (fonte, cor, símbolo, layout) e quero o porquê gravado.",
      fill:"decision", fillLabel:"A escolha + as alternativas que estavam na mesa",
      body:(p,n)=>`Decisão visual.\n\nESCOLHA:\n${p.decision||"[O que foi decidido + alternativas consideradas + o que motivou]"}\n\nFaça:\n- Reformule por que esta decisão precisou ser tomada\n- Liste as alternativas e por que não\n- Articule o racional ligando ao objetivo/público/tom de PROJETO.md (e à dor de fundo do cliente)\n- Se mexe no sistema visual, atualize MARCA.md também\n\nEntregue DECISOES.md completo (nova DEC-N) e, se aplicável, MARCA.md completo. Anote se o cliente já aprovou (cruza com REVISOES.md).`
    },
    { id:"K", title:"Checklist de pré-impressão / entrega", when:"Peça pronta indo para impressão ou para entrega digital — não quero erro caro.",
      fill:"piece", fillLabel:"A peça + destino (gráfica? tela?) + specs que já sei",
      body:(p,n)=>`Pré-impressão / entrega.\n\nPEÇA E DESTINO:\n${p.piece||"[A peça + vai para impressão/tela + tamanho/specs que já sei]"}\n\nSe for IMPRESSÃO, rode o checklist de PRODUCAO.md comigo, item a item:\n- Documento em CMYK (e imagens convertidas)? Sangria aplicada e fundos estendidos? Conteúdo crítico dentro da margem de segurança? Resolução ≥ 300 DPI no tamanho final? Fontes incorporadas/convertidas? Marcas de corte? Ortografia revisada? Pantones conferidos contra MARCA.md? PDF/X exportado?\n- Aponte o que falta verificar e o que eu preciso conferir no arquivo (você não vê o arquivo — me guie no que olhar)\n- Recomende uma PROVA REAL antes da tiragem (imprimir teste / copy shop), com o porquê\n\nSe for DIGITAL: confira modo de cor (sRGB), resolução por uso, formato por destino.\n\nEntregue PRODUCAO.md completo com o checklist no estado atual. Verifique specs técnicas por busca se houver dúvida — não chute.`
    },
    { id:"L", title:"Preparar apresentação ao cliente", when:"Vou mostrar o trabalho ao cliente e quero conduzir bem a conversa.",
      fill:"goal", fillLabel:"O que vou apresentar + o resultado que quero (aprovar? escolher entre opções?)",
      body:(p,n)=>`Preparar apresentação ao cliente${p.client?` (${p.client})`:""}.\n\nO QUE APRESENTAR:\n${p.goal||"[A(s) peça(s)/direção(ões) + o resultado que quero: aprovação? escolha entre opções? sinal verde para arte-final?]"}\n\nUsando CLIENTE.md (como ele decide) e DECISOES.md (os porquês):\n- Como abrir: reconectar ao objetivo/dor de fundo antes de mostrar o visual (vende a solução, não só a estética)\n- Para cada peça/opção: o racional curto (por que esta escolha resolve o problema dele)\n- Antecipar as objeções prováveis dado o gosto/vetos dele, e como responder\n- Como pedir feedback ESPECÍFICO (perguntas dirigidas) em vez de \"o que achou?\"\n- Se apresentar opções: como conduzir para uma decisão sem parecer indeciso\n\nEntregue como roteiro de apresentação + um rascunho de mensagem/e-mail de envio (que eu edito antes de mandar). Lembre: você não fala com o cliente; prepara.`
    },
  ]
};