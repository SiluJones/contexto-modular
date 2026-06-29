NICHES.narrative = {
  id:"narrative", label:"Narrativa & Ficção", icon:"✍", group:"literary", category:"core",
  cardColor:"#f59e0b", cardTags:["romance","conto","roteiro","serial"],
  cardDesc:"Mundo, personagens, voz e continuidade — sem perder o fio",
  intro:{
    headline:"A bíblia da obra que segura a história entre uma sessão e outra.",
    lede:"O risco aqui é o esquecimento que corrói: o olho que muda de cor, o nome grafado de dois jeitos, a personagem que contradiz quem era. Igual a uma sala de roteiristas de TV — onde cada episódio é escrito por gente diferente mas o mundo continua coerente porque todos consultam a mesma bíblia. Aqui o Claude consulta a bíblia antes de inventar, e a sua voz continua sendo sua.",
    ctxBlurb:"<code>BIBLIA.md</code> ancora mundo e regras · <code>PERSONAGENS.md</code> guarda voz e arco · <code>VOZ.md</code> protege o seu estilo · <code>CONTINUIDADE.md</code> tem a memória (e a grafia canônica).",
    hero:"narrative"
  },
  topbar:[
    {id:"project", label:"Obra", placeholder:"ex: o-jardim-cinza"},
    {id:"chapter", label:"Capítulo/Cena", placeholder:"ex: Cap. 12, cena 2"},
    {id:"phase", label:"Fase", type:"select", options:["Concepção","Rascunho (draft)","Revisão","Line edit","Finalização"]},
  ],
  behaviors:[
    ["never_writes","A IA não escreve a história — explora, o autor decide","A voz do autor é insubstituível. O assistente nunca tenta ser o autor: ele explora possibilidades (continuações, variações, e-se), levanta opções, e o autor escolhe e escreve na própria voz. Quando gera trecho de prosa a pedido, marca como rascunho/exploração para o autor reescrever — nunca empurra prosa de IA como se fosse a versão final. Lembra ao autor de examinar se o texto soa como ELE, não só se 'soa bem'."],
    ["mechanic_vs_judgment","Separa problema mecânico de julgamento subjetivo","A IA é confiável para o MECÂNICO (continuidade, repetição, buraco de lógica, pacing irregular, nome trocado) e NÃO confiável para o SUBJETIVO (se a cena merece seu pagamento emocional, se a metáfora funciona, se a reviravolta parece merecida). Diante de uma questão subjetiva, oferece observação como leitor — não veredito — e devolve a decisão ao autor explicitamente."],
    ["continuity_memory","Continuidade tem memória: consulta antes de inventar","Antes de afirmar qualquer fato da obra (cor de olho, idade, relação, regra do mundo, evento passado), consulta BIBLIA/PERSONAGENS/CONTINUIDADE. Não inventa detalhe que contradiz o estabelecido. Quando nota um conflito (o texto novo bate com o que está registrado?), sinaliza na hora. Quando algo novo é estabelecido, registra para virar cânone."],
    ["protect_voice","Protege a voz do autor","Antes de sugerir frase, descrição ou diálogo, consulta VOZ.md (tom, ritmo, exemplos aprovados, o que evitar). Não 'corrige' a voz do autor em direção a uma prosa genérica. Aponta quando uma sugestão sua se afasta do estilo dele e oferece como alternativa, não como melhoria objetiva."],
    ["writes_prose","Escreve com o autor, não pelo autor","Quando o autor pede, escreve de verdade — cena, capítulo, diálogo, sinopse — SEMPRE ancorado em VOZ.md, PERSONAGENS.md, ENREDO.md e CONTINUIDADE.md: contexto rico é o que separa prosa com voz de prosa genérica. Entrega como rascunho dirigível: em cena crítica ou de carga emocional alta, oferece 2–3 versões/caminhos em vez de um veredito único; marca o que inventou além do cânone como hipótese a aprovar. Vigia o drift de voz em sessões longas (compara com os exemplos aprovados de VOZ.md) e, após capítulo aprovado, atualiza CONTINUIDADE e STATUS. A voz final é do autor — rascunho é matéria-prima, não texto pronto."],
    ["beats_diagnostic","Beats como diagnóstico, não fórmula","Estruturas (três atos, Save the Cat, jornada) são ferramentas de diagnóstico, não camisas de força. Não força a história num molde nem empurra o autor a escrever 'uma versão burra do próprio estilo'. Usa beats sobretudo na revisão: se um trecho derrapa, costuma faltar limiar, escalada, escolha custosa, ou um protagonista que age — aponta isso, sem prescrever a solução."],
    ["no_overdoc","Não super-documenta a bíblia","A bíblia serve à obra, não o contrário. Mantém o registro no essencial (Tier 1: nomes, descrições-chave, regras centrais, eventos maiores); só aprofunda quando a complexidade pedir. Documentar demais rouba tempo da escrita — escrever o próximo capítulo importa mais que catalogar perfeitamente o anterior."],
  ],
  builderSection:{
    title:"A obra",
    hint:"Define o enquadramento criativo. Entra nas instruções para o assistente respeitar gênero, formato e ponto de vista.",
    type:"chips",
    groups:[
      {label:"Gênero", items:[["fantasy","Fantasia"],["scifi","Ficção científica"],["romance","Romance"],["horror","Terror"],["thriller","Suspense"],["literary","Literário"],["realism","Realismo"],["historical","Histórico"],["ya","YA"],["mixed","Misto"]]},
      {label:"Formato", items:[["novel","Romance"],["novella","Novela"],["short","Conto"],["series","Série/saga"],["screen","Roteiro"],["webnovel","Web novel/serial"],["graphic","Roteiro de HQ"]]},
      {label:"Pessoa narrativa", items:[["first","1ª pessoa"],["thirdL","3ª limitada"],["thirdO","3ª onisciente"],["second","2ª pessoa"],["mixed","Múltiplos POVs"]]},
      {label:"Tempo verbal", items:[["past","Passado"],["present","Presente"],["mixed_t","Misto"]]},
      {label:"Idioma da obra", items:[["ptbr","pt-BR"],["ptpt","pt-PT"],["en","Inglês"],["es","Espanhol"],["other","Outro"]]},
    ],
    other:false
  },
  conventions:[
    "A voz é do autor — e o assistente também ESCREVE, quando pedido e sob direção: cena, capítulo, diálogo, opções. Sempre como rascunho ancorado em VOZ.md para o autor reescrever; nunca por conta própria, nunca padronizando o estilo.",
    "Antes de afirmar um fato da obra, consultar BIBLIA/PERSONAGENS/CONTINUIDADE — não inventar o que contradiz o cânone.",
    "Grafia canônica de nomes e termos inventados vive em CONTINUIDADE (ou GLOSSARY): um nome se escreve sempre do mesmo jeito.",
    "Decisões estruturais e de enredo (matar um personagem, mudar um arco, virar reviravolta) vão para ENREDO.md.",
    "Beats e estrutura são diagnóstico na revisão, não molde a priori — a história tem prioridade sobre o outline.",
    "Para obra de matriz japonesa (LN/WN), o kishōtenketsu (ki-shō-ten-ketsu: apresentação → desenvolvimento → virada → consequência) é repertório de primeira ordem — e é FRACTAL: vale para a obra, o arco, o capítulo e a cena. Em serial, o ketsu pode ser adiado para o capítulo seguinte (vira o gancho). Contraste e surpresa sustentam cena tanto quanto conflito.",
    "Manter a bíblia no essencial (Tier 1); não super-documentar."
  ],
  triggersExtra:[
    ["Fato novo do mundo/personagem estabelecido", "Entrega BIBLIA.md ou PERSONAGENS.md completo com o cânone atualizado."],
    ["Decisão de enredo (morte, reviravolta, mudança de arco)", "Entrega ENREDO.md completo (a decisão + impacto no que vem)."],
    ["Inconsistência encontrada/resolvida ou grafia definida", "Entrega CONTINUIDADE.md completo (a nota de continuidade / grafia canônica)."],
    ["Capítulo ou cena concluída", "Entrega STATUS.md e ENREDO.md completos (onde paramos, o que vem)."],
    ["Voz/estilo calibrado num trecho aprovado", "Entrega VOZ.md completo com o novo exemplo de prosa aprovada."],
  ],
  contextFiles:[
    {name:"BIBLIA.md", cat:"ctx", role:"A story bible: premissa, mundo, regras, tom. Enxuta (Tier 1 primeiro). Estável.", content:`# BIBLIA.md — [Nome da Obra]

> A **bíblia da obra**: a enciclopédia que mantém tudo consistente da página 1 ao "fim".
> **Estável** e **enxuta**: comece pelo essencial (Tier 1). Só aprofunde quando a obra pedir — documentar demais rouba tempo da escrita.
> O assistente lê no início para se ambientar e consulta antes de afirmar qualquer fato do mundo.

---

## Premissa
[1-3 frases: a história em essência. O "e se" central, o conflito que move tudo.]

## Gênero, formato e tom
- **Gênero / formato:** [ex: fantasia / romance em série]
- **Tom geral:** [ex: melancólico com lampejos de humor; sombrio; intimista.]
- **Temas centrais:** [o que a obra investiga por baixo do enredo.]

## Mundo — Tier 1 (essencial)
> Só o que é preciso para escrever sem se contradizer. Geografia, época, e as REGRAS que, se quebradas, geram furo.
- **Cenário / época:** [onde e quando.]
- **Regras do mundo:** [o que pode e não pode acontecer. Sistema de magia/tecnologia: o custo e os limites — não só o que faz, mas o que NÃO faz.]
- **Sociedade / poder:** [só o que afeta a trama: quem manda, qual a tensão social relevante.]

## Mundo — Tier 2 (só se a obra precisar)
> História antiga, cultura detalhada, política, línguas. Adicione sob demanda, não por completude.
- [...]

## Pilares de continuidade
> As poucas verdades que NÃO podem variar. (Detalhe fica em CONTINUIDADE.md.)
- [Ex: a magia sempre cobra um preço físico; a cidade fica ao norte do rio.]
`},
    {name:"PERSONAGENS.md", cat:"ctx", role:"Fichas: voz, arco, traços, relações e evolução intencional de cada personagem. Estável.", content:`# PERSONAGENS.md — [Obra]

> Fichas dos personagens. **Estável** — atualiza quando um arco avança ou um traço se firma.
> O assistente consulta para manter cada personagem coerente (ou evoluindo de propósito, não por descuido).

---

## [Nome do personagem] — [papel: protagonista / antagonista / secundário]
- **Aparência (o que não pode variar):** [traços-chave: cor de olho/cabelo, idade, marcas. Estes são os que mais geram furo de continuidade.]
- **Quem é:** [personalidade em 2-3 traços concretos, não adjetivos vagos.]
- **Quer (externo) × Precisa (interno):** [o objetivo declarado vs. a verdade que falta aprender — o motor do arco.]
- **Voz / fala:** [como fala: ritmo, vocabulário, bordões, o que NUNCA diria. Frases típicas entre aspas.]
- **Arco:** [de onde parte → para onde vai. O ponto de virada interno.]
- **Evolução registrada:** [onde o personagem está AGORA na obra — para não regredir sem querer.]
- **Relações:** [com quem se conecta e como essa relação muda.]

---

## [Próximo personagem]
[...]

---

## Elenco secundário (uma linha cada)
- **[Nome]** — [função na trama + o traço que o distingue.]
`},
    {name:"ENREDO.md", cat:"ctx", role:"Estrutura e enredo: beats, o que já aconteceu, o que vem, decisões de trama. Cresce devagar.", content:`# ENREDO.md — Estrutura e Trama

> A espinha da história + o registro do que já aconteceu e do que vem.
> **Cresce devagar.** Beats aqui são DIAGNÓSTICO, não fórmula — a história tem prioridade sobre o outline.

---

## Estrutura geral
- **Modelo de referência (se usa algum):** [três atos / Save the Cat / jornada — ou "intuitivo, sem molde fixo".]
- **Conflito central:** [a pergunta dramática que a obra responde no fim.]
- **Arco macro:** [início → meio → fim em 3-5 linhas.]

## O que já aconteceu (resumo rolante por capítulo/parte)
> Mantém curto: o suficiente para o assistente saber a história até aqui sem reler tudo.
- **Cap. [N] — [título/foco]:** [o que aconteceu de relevante para a trama.]
- [...]

## Onde a história está agora
[O ponto exato da narrativa + a tensão aberta no momento.]

## O que vem (próximos beats / cenas planejadas)
> Planejado, mas não sagrado. Se a escrita pedir outro caminho, o caminho ganha.
- [ ] [Próxima cena/beat + o que precisa acontecer nela.]
- [ ] [...]

## Decisões de enredo (DEC)
> Escolhas que mudam o rumo: matar um personagem, uma reviravolta, alterar um arco. Com o porquê.
### DEC-[N] — [a decisão] · [data]
[O que foi decidido, por quê, e o que isso afeta no que vem.]

## Fios soltos / a pagar
> Promessas feitas ao leitor que precisam de resolução (setups esperando payoff).
- [Fio aberto — onde foi plantado — onde/como pretende pagar.]
`},
    {name:"VOZ.md", cat:"ctx", role:"A voz da obra: tom, ritmo, exemplos de prosa aprovada, o que evitar. Protege o estilo do autor. Estável.", content:`# VOZ.md — Voz e Estilo

> Guarda a VOZ — que é do autor, não do assistente. Serve para o assistente respeitar o estilo, não para padronizá-lo.
> O assistente consulta antes de sugerir prosa, e nunca empurra a obra em direção a um texto genérico.

---

## Tom e ritmo
- **Sensação geral da prosa:** [ex: frases curtas e secas; períodos longos e sinuosos; sensorial; contido.]
- **Distância narrativa:** [íntima e dentro da cabeça do personagem / mais afastada e observadora.]
- **Densidade:** [enxuta / descritiva. Quanto de descrição vs. ação vs. introspecção.]

## Exemplos de prosa APROVADA (do autor)
> O recurso mais útil do arquivo. Cole trechos que SOAM como a obra deve soar — a referência viva da voz.
\`\`\`
[Trecho 1 — escrito ou aprovado pelo autor.]
\`\`\`
\`\`\`
[Trecho 2.]
\`\`\`

## Diálogo
- [Como os diálogos soam: realistas e cheios de subtexto? estilizados? Diferença de fala entre personagens vive em PERSONAGENS.md.]

## O que EVITAR
> Tiques e clichês que não combinam com esta obra.
- [Ex: advérbios em -mente em excesso; "ela sentiu que"; metáforas batidas; explicar a emoção em vez de mostrar.]

## Decisões de estilo
- [Escolhas conscientes: presente histórico? itálico para pensamento? Cruza com a grafia em CONTINUIDADE.]
`},
    {name:"CONTINUIDADE.md", cat:"hist", role:"Notas de continuidade + grafia canônica + inconsistências resolvidas. A memória factual. CRESCE.", content:`# CONTINUIDADE.md — Notas de Continuidade

> A memória factual da obra. **Cresce.** É aqui que se previne o olho que muda de cor e o nome grafado de dois jeitos.
> O assistente consulta antes de afirmar detalhes e registra cada novo fato/correção.

---

## Notas de continuidade
> Verdades pontuais que precisam ser respeitadas. (Ex: "Sara odeia café no cap. 2 — não a transforme em barista no cap. 10".)
- [Fato + onde foi estabelecido (cap./cena).]
- [...]

## Grafia canônica (nomes e termos inventados)
> Um nome se escreve sempre do mesmo jeito. Decida e registre.
| Termo | Grafia oficial | Observação |
|---|---|---|
| [Personagem/lugar] | [ex: Lyriel — não "Lyrial"] | [pronúncia / origem, se útil] |

## Convenções de estilo/grafia da obra
> Decisões de consistência (cruza com VOZ).
- [Ex: "e-mail" com hífen; números até dez por extenso; pensamento em itálico; títulos de livros em itálico.]

## Inconsistências encontradas e resolvidas
> Histórico de furos pegos e como foram corrigidos — para não reabrir.
### [Data] — [o furo]
- **Conflito:** [o que se contradizia.]
- **Resolução:** [o que ficou valendo como cânone.]
`},
    {name:"STATUS.md", cat:"ctx", role:"Onde estamos: capítulo, cena, próxima escrita, o que está aberto. Rolante.", content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar a escrita.
> Item resolvido sai daqui (vira resumo em ENREDO, ou nota no log).

---

## Fase
[Concepção / Rascunho / Revisão / Line edit / Finalização]

## Onde estou na obra
- **Ponto atual:** [Cap. X, cena Y — o que está sendo escrito agora.]
- **Contagem aproximada:** [palavras/capítulos, se acompanha.]

## Próxima escrita
- [A próxima cena/beat a escrever + o que precisa acontecer nela.]

## Abertos / a resolver
- [Decisão de enredo pendente; fio solto que está incomodando; dúvida de continuidade a checar.]

## Em revisão (se aplicável)
- [O que está sendo revisado e em que modo: estrutural / desenvolvimento / copy / line.]

## 💬 Última sessão
**[data]** — [o que avançou + onde parei + a próxima escrita óbvia.]
`},
    {name:"CRONOLOGIA.md", cat:"opcional", role:"OPCIONAL — linha do tempo dos eventos da obra. Use quando há saltos temporais ou tramas paralelas.", content:`# CRONOLOGIA.md — Linha do Tempo

> **Opcional.** Use quando a obra tem saltos temporais, flashbacks, tramas paralelas ou uma história longa onde "quando aconteceu o quê" começa a escapar.
> Separa a ordem CRONOLÓGICA (quando os eventos ocorrem na história) da ordem NARRATIVA (em que o leitor descobre).

---

## Linha do tempo da história (ordem cronológica)
| Quando | Evento | Cap. onde aparece | Quem envolve |
|---|---|---|---|
| [data/marco no mundo] | [o que acontece] | [cap. narrativo] | [personagens] |

## Antes do início da obra (backstory relevante)
- [Eventos do passado que afetam a trama, em ordem.]

## Tramas paralelas (se houver)
- **[Fio A]:** [linha do tempo própria.]
- **[Fio B]:** [...]

## Pontos de convergência
- [Onde os fios/linhas se cruzam — para sincronizar.]
`},
    {name:"GLOSSARY.md", cat:"opcional", role:"OPCIONAL — termos, nomes próprios, jargão do mundo + significado. Use em fantasia/ficção científica com muito vocabulário.", content:`# GLOSSARY.md — Termos da Obra

> **Opcional.** Use quando a obra inventa vocabulário (fantasia, ficção científica, mundos próprios) que se repete e precisa de sentido e grafia estáveis.
> A grafia canônica também vive em CONTINUIDADE; aqui entra o SIGNIFICADO.

---

## Termos do mundo
- **[Termo]** — [o que significa no mundo da obra; grafia oficial.]

## Lugares
- **[Nome]** — [o que é, onde fica.]

## Grupos / facções / espécies
- **[Nome]** — [o que é, o que os distingue.]

## Línguas / expressões inventadas
- **[Palavra/expressão]** — [tradução/sentido; quando se usa.]
`},
    {name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.", content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão de escrita/revisão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Obra]

## Foco da sessão
[Escrita de cena nova, revisão (qual modo), planejamento de enredo, calibragem de voz.]

## Escrito / avançado
- [Cenas/capítulos trabalhados; o que progrediu.]

## Decisões de enredo
- [O que virou DEC em ENREDO.md.]

## Continuidade
- [Fatos novos / grafia definida / furos resolvidos → CONTINUIDADE.md.]

## Personagens
- [Arco que avançou, traço que se firmou → PERSONAGENS.md.]

## Voz
- [Trecho de prosa aprovado que vale virar referência → VOZ.md.]

## Onde parei
[Ponto exato + próxima escrita. Alimenta o STATUS.]
`}
  ],
  outputs:[
    {key:"status", name:"STATUS.md", role:"completo: onde estamos e a próxima escrita", active:true},
    {key:"enredo", name:"ENREDO.md", role:"completo, se a trama avançou ou houve decisão de enredo", active:true},
    {key:"continuidade", name:"CONTINUIDADE.md", role:"completo, se surgiu fato novo, grafia ou furo resolvido", active:true},
    {key:"personagens", name:"PERSONAGENS.md", role:"completo, se um arco avançou ou traço se firmou", active:false},
    {key:"voz", name:"VOZ.md", role:"completo, se um trecho de prosa aprovado virou referência", active:false},
    {key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true},
  ],
  promptsExtra:[
    { id:"J", title:"Escrever capítulo/cena (sob direção)", when:"Quero que o assistente ESCREVA — um capítulo, uma cena, um diálogo — na direção que eu der, ancorado na bíblia.",
      fill:"brief", fillLabel:"O briefing: o que acontece, POV, onde entra na trama, tom (+ formato: capítulo WN/LN? cena? diálogo?)",
      body:(p,n)=>`Escrita sob direção (rascunho para eu reescrever — a voz final é minha).\n\nBRIEFING:\n${p.brief||"[O que acontece nesta cena/capítulo + POV + onde entra na trama + tom + tamanho alvo]"}\n\nAntes de escrever, consulte VOZ.md (tom, ritmo, exemplos aprovados), PERSONAGENS.md (voz de cada um), ENREDO.md e CONTINUIDADE.md (cânone e grafias).\n\nEscreva o rascunho completo, observando:\n- Ritmo de capítulo serial: HOOK nas primeiras 2 frases → desenvolvimento (plot OU personagem) → um beat emocional → gancho/pergunta aberta no fim. Cada capítulo responde algo do anterior E abre uma pergunta nova.\n- Se a obra é de matriz japonesa, o kishōtenketsu vale aqui dentro (apresentação → desenvolvimento → virada → consequência; em serial, a consequência pode virar o gancho).\n- No ponto mais crítico (decisão, revelação, carga emocional), PARE e ofereça 2-3 versões do trecho em vez de decidir por mim.\n- Marque [HIPÓTESE] em qualquer fato/nome que você inventar além do cânone — eu aprovo ou corto.\n- Ao final: checagem rápida de continuidade (contradiz algo? grafia canônica ok?) e o que registrar em CONTINUIDADE/STATUS se eu aprovar.\n\nNão padronize meu estilo: na dúvida entre "bonito genérico" e a minha voz, escolha a minha voz.`
    },
    { id:"G", title:"Explorar continuações / possibilidades", when:"Travei numa cena ou quero ver caminhos antes de escrever — sem que a IA escreva por mim.",
      fill:"situation", fillLabel:"Onde a cena está + para onde pode ir (cole o trecho ou descreva)",
      body:(p,n)=>`Exploração de possibilidades (não escreva a versão final — explore para eu desenvolver na minha voz).\n\nONDE ESTOU:\n${p.situation||"[Cole o trecho onde parei ou descreva a cena + a dúvida de para onde ir]"}\n\nConsultando BIBLIA, PERSONAGENS e ENREDO:\n- Proponha 3-5 caminhos possíveis para esta cena/momento, distintos entre si — o que cada um abre e fecha na trama\n- Para cada um, diga como afeta o arco do(s) personagem(ns) e os fios soltos abertos\n- Aponte qual serve melhor ao conflito central (mas a escolha é minha)\n- Cheque se algum caminho contradiz a continuidade estabelecida\n\nNão escreva a cena pronta. Dê as direções como exploração; eu escrevo na minha voz. Se eu pedir um esboço, marque como rascunho para eu reescrever.`
    },
    { id:"H", title:"Revisar continuidade", when:"Quero checar se um trecho novo bate com o que já foi estabelecido.",
      fill:"passage", fillLabel:"O trecho novo a checar (cole)",
      body:(p,n)=>`Revisão de continuidade.\n\nTRECHO:\n${p.passage||"[Cole o trecho novo a verificar]"}\n\nConfronte com BIBLIA, PERSONAGENS e CONTINUIDADE:\n- Algum detalhe contradiz o cânone? (aparência, idade, relação, regra do mundo, evento passado, linha do tempo)\n- Algum nome/termo inventado está com grafia diferente da canônica?\n- Algum personagem age/fala de forma incompatível com quem é (sem que seja evolução intencional)?\n- Algum fio solto foi tocado aqui — plantado ou pago?\n\nListe cada achado com: o que diz o trecho × o que diz o cânone × sugestão de correção (sem reescrever sua prosa). Se um fato novo aparece e não conflita, aponte o que vale registrar em CONTINUIDADE.`
    },
    { id:"I", title:"Feedback de desenvolvimento (pacing / arco)", when:"Quero leitura crítica de estrutura — o mecânico, não o gosto.",
      fill:"text", fillLabel:"O trecho/capítulo + o que você quer saber",
      body:(p,n)=>`Feedback de desenvolvimento (foco no mecânico; o julgamento subjetivo fica comigo).\n\nTEXTO E PERGUNTA:\n${p.text||"[Cole o trecho/capítulo + o que quer avaliar: pacing? o arco avança? a cena justifica seu espaço?]"}\n\nAvalie o que é diagnosticável:\n- Pacing: onde arrasta, onde corre rápido demais, cenas que não puxam para a frente\n- Estrutura: a cena tem um limiar/virada? há escalada? o protagonista AGE ou só reage?\n- Arco: este trecho move o arco do personagem ou marca passo?\n- Setups e payoffs: alguma promessa ao leitor ignorada; algo que pede plantio antes\n- Lógica: buracos, conveniências, motivação que não fecha\n\nUse os beats como DIAGNÓSTICO, não para me encaixar num molde. Para o que é subjetivo (a cena emociona? a metáfora funciona?), dê sua impressão como leitor e devolva a decisão a mim — não decida por mim.`
    },
    { id:"J", title:"Simular diálogo de personagem", when:"Quero entender uma personagem ou testar uma dinâmica antes de escrever a cena.",
      fill:"setup", fillLabel:"Quais personagens + a situação a testar",
      body:(p,n)=>`Simulação de personagem (para eu ENTENDER a dinâmica, não para virar a cena final).\n\nQUEM E A SITUAÇÃO:\n${p.setup||"[Quais personagens + a situação/tensão a explorar]"}\n\nUsando PERSONAGENS (voz, querer/precisar, relações) e VOZ:\n- Simule como cada personagem reagiria/falaria nesta situação, fiel à voz de cada um\n- Revele o subtexto: o que cada um quer e esconde aqui\n- Aponte o que essa simulação ensina sobre a dinâmica (algo que talvez eu não tenha desenvolvido)\n\nIsto é estudo de personagem, não a cena pronta. Eu escrevo a cena na minha voz. Se algo novo sobre o personagem se firmar, aponte o que vale registrar em PERSONAGENS.`
    },
    { id:"K", title:"Registrar decisão narrativa", when:"Bati o martelo numa escolha de trama, mundo ou personagem e quero o porquê gravado.",
      fill:"decision", fillLabel:"A decisão + o que ela muda na obra",
      body:(p,n)=>`Decisão narrativa.\n\nDECISÃO:\n${p.decision||"[O que decidi: morte de personagem, reviravolta, regra do mundo, mudança de arco... + o que motivou]"}\n\nFaça:\n- Reformule a decisão e por que ela serve à obra (ao conflito central, ao tema, ao arco)\n- Liste o que ela afeta no que já foi escrito e no que vem (fios a ajustar, setups a plantar/pagar)\n- Sinalize qualquer risco de continuidade que ela cria\n\nEntregue o arquivo completo afetado: ENREDO.md (se é trama), BIBLIA/PERSONAGENS (se é mundo/personagem), e CONTINUIDADE se cria um novo fato a respeitar. Registre como DEC datada onde couber.`
    },
    { id:"L", title:"Checar consistência de voz e grafia", when:"Quero ver se um trecho soa como a obra e se a grafia está canônica.",
      fill:"passage", fillLabel:"O trecho a checar (cole)",
      body:(p,n)=>`Checagem de voz e grafia.\n\nTRECHO:\n${p.passage||"[Cole o trecho]"}\n\nConsultando VOZ (tom, ritmo, exemplos aprovados, o que evitar) e CONTINUIDADE (grafia, convenções):\n- O trecho soa como a obra? Onde se afasta do tom/ritmo estabelecido?\n- Aparece algum tique da lista "o que evitar"?\n- Nomes e termos inventados estão com a grafia canônica?\n- As convenções de estilo da obra (itálico, números, hífens) foram seguidas?\n\nAponte os desvios e ofereça ajustes como SUGESTÃO na direção da SUA voz — não reescreva para uma prosa genérica nem "corrija" seu estilo. A decisão final do texto é minha.`
    },
  ]
};