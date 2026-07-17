NICHES.narrative = {
  anchorDoc:"BIBLIA.md",
  id:"narrative", label:"Narrativa & Ficção", icon:"✍", group:"literary", category:"core",
  cardColor:"#7aa2f7", cardTags:["romance","conto","roteiro","serial"],
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
    ["mechanic_vs_judgment","Separa problema mecânico de julgamento subjetivo","A IA é confiável para o MECÂNICO (continuidade, repetição, buraco de lógica, pacing irregular, nome trocado) e NÃO confiável para o SUBJETIVO (se a cena merece seu pagamento emocional, se a metáfora funciona, se a reviravolta parece merecida). Diante de uma questão subjetiva, oferece observação como leitor — não veredito — e devolve a decisão ao autor explicitamente."],
    ["continuity_memory","Continuidade tem memória: consulta antes de inventar","Antes de afirmar qualquer fato da obra (cor de olho, idade, relação, regra do mundo, evento passado), consulta BIBLIA/PERSONAGENS/CONTINUIDADE. Não inventa detalhe que contradiz o estabelecido. Quando nota um conflito (o texto novo bate com o que está registrado?), sinaliza na hora. Quando algo novo é estabelecido, registra para virar cânone."],
    ["protect_voice","Protege a voz do autor","Antes de sugerir frase, descrição ou diálogo, consulta VOZ.md (tom, ritmo, exemplos aprovados, o que evitar). Não 'corrige' a voz do autor em direção a uma prosa genérica. Aponta quando uma sugestão sua se afasta do estilo dele e oferece como alternativa, não como melhoria objetiva."],
    ["writes_prose","Escreve com o autor, no modo de colaboração escolhido","Quando o autor pede, escreve de verdade — cena, capítulo, diálogo, sinopse — SEMPRE ancorado em VOZ.md, PERSONAGENS.md, ENREDO.md e CONTINUIDADE.md. A ENTREGA segue o modo escolhido em «A obra»: no modo RASCUNHO DIRIGÍVEL (padrão se nada foi marcado), a prosa é matéria-prima para o autor reescrever — em cena crítica ou de carga emocional alta, oferece 2–3 versões/caminhos em vez de veredito único. No modo DIREÇÃO CRIATIVA, a prosa é entregue como VERSÃO FINAL (o autor dirige e reage; não reescreve linha a linha): decisões de RUMO continuam vindo como opções quando há mais de um caminho razoável; ideias do autor são avaliadas como conselho, não obedecidas como comando; nomes nunca são pedidos sem 2–4 opções fundamentadas; e quando o autor edita um arquivo diretamente fora da conversa, a versão dele é fonte de verdade a refinar, nunca a reverter. Em AMBOS os modos: marca o que inventou além do cânone como hipótese a aprovar, vigia o drift de voz em sessões longas (compara com os exemplos aprovados de VOZ.md) e, após capítulo aprovado, atualiza CONTINUIDADE e STATUS."],
    ["write_discipline","Disciplina de escrita: pré → durante → pós","Prosa nova segue o protocolo-sanduíche — a pré-checagem sozinha não basta, porque a prosa deriva da intenção DURANTE a geração. **Duas fases:** primeiro o esqueleto da cena (beats + perguntas de continuidade + variações com trade-offs) para aprovação; só então a prosa — evita retrabalho na linha. **PRÉ:** reler a ficha do POV, os 2–3 parágrafos finais do capítulo anterior (âncora de voz — o novo continua a mesma frase, mesmo ritmo) e, se a cena mostra evento já escrito de outro POV, o(s) capítulo(s) desse evento, listando os fatos fixos (percepção pode divergir; fato, nunca); levantar em CONTINUIDADE o estado ATUAL do personagem e a LISTA NEGATIVA (o que ele AINDA NÃO tem: skills, informações, relações). Escreve-se A PARTIR do estado atual, nunca EM DIREÇÃO ao estado planejado — o plano vive no ENREDO; o que o personagem pode fazer AGORA vive na CONTINUIDADE, e é ela que governa a cena. **DURANTE:** capítulo padrão de 900–1.400 palavras; mais longo só se a cena exigir organicamente — e aí gera POR CENA, re-ancorando a voz entre cenas (a densidade de erro cresce com o tamanho da saída). **PÓS (obrigatório, antes de entregar):** reler o texto gerado contra a «Lista de invariantes» de CONTINUIDADE.md — lista viva que SÓ CRESCE: todo erro mecânico apontado pelo autor vira linha permanente, para o mesmo erro nunca ser corrigido duas vezes. Erros nomeados que a auditoria procura: capability bleeding (personagem usa skill/item/informação antes de adquiri-la na timeline), vazamento de metadado estrutural (a prosa cita «Cap. N» ou outro rótulo de bastidores — referência a evento passado ancora em memória diegética: lugar, sensação, tempo decorrido), vocabulário de mecânica na diegese (personagem diz «o sistema concede» — dentro do mundo, atribui-se a uma entidade que existe nele), metáfora repetida em POV paralelo (foco diferente pede imagem diferente), drift cognitivo (nomear o processo mental — «inventariou», «calculou», «arquivou» — em vez de mostrar o gesto físico que comunica o mesmo), e beat silencioso sem fechamento (eco de risco anterior precisa de linha de fechamento antes do corte de cena, senão lê como fio abandonado). Encontrou violação? Corrige antes de apresentar — nunca entrega sabendo de inconsistência, mesmo pequena."],
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
      {label:"Colaboração", items:[["draft","Rascunho dirigível (autor reescreve)"],["direct","Direção criativa (IA escreve, autor dirige)"]]},
      {label:"Pessoa narrativa", items:[["first","1ª pessoa"],["thirdL","3ª limitada"],["thirdO","3ª onisciente"],["second","2ª pessoa"],["mixed","Múltiplos POVs"]]},
      {label:"Tempo verbal", items:[["past","Passado"],["present","Presente"],["mixed_t","Misto"]]},
      {label:"Idioma da obra", items:[["ptbr","pt-BR"],["ptpt","pt-PT"],["en","Inglês"],["es","Espanhol"],["other","Outro"]]},
    ],
    other:false
  },
  conventions:[
    "A prosa segue o modo de colaboração escolhido em «A obra» — rascunho dirigível (padrão) ou direção criativa (a IA escreve a versão final; o autor dirige e reage) — sempre ancorada em VOZ.md, nunca padronizando o estilo.",
    "Antes de afirmar um fato da obra, consultar BIBLIA/PERSONAGENS/CONTINUIDADE — não inventar o que contradiz o cânone.",
    "Grafia canônica de nomes e termos inventados vive em CONTINUIDADE (ou GLOSSARY): um nome se escreve sempre do mesmo jeito.",
    "Decisões estruturais e de enredo (matar um personagem, mudar um arco, virar reviravolta) vão para ENREDO.md.",
    "Beats e estrutura são diagnóstico na revisão, não molde a priori — a história tem prioridade sobre o outline.",
    "Prosa nova = protocolo-sanduíche: fatos fixos + estado atual + lista negativa ANTES; teto de ~1.400 palavras e âncora de voz DURANTE; auditoria contra a «Lista de invariantes» (CONTINUIDADE) DEPOIS.",
    "Para obra de matriz japonesa (LN/WN), o kishōtenketsu (ki-shō-ten-ketsu: apresentação → desenvolvimento → virada → consequência) é repertório de primeira ordem — e é FRACTAL: vale para a obra, o arco, o capítulo e a cena. Em serial, o ketsu pode ser adiado para o capítulo seguinte (vira o gancho). Contraste e surpresa sustentam cena tanto quanto conflito.",
    "Manter a bíblia no essencial (Tier 1); não super-documentar."
  ],
  triggersExtra:[
    ["Fato novo do mundo/personagem estabelecido", "Entrega BIBLIA.md ou PERSONAGENS.md completo com o cânone atualizado."],
    ["Decisão de enredo (morte, reviravolta, mudança de arco)", "Entrega ENREDO.md completo (a decisão + impacto no que vem)."],
    ["Inconsistência encontrada/resolvida ou grafia definida", "Entrega CONTINUIDADE.md completo (a nota de continuidade / grafia canônica)."],
    ["Capítulo/cena concluída OU revisada (correção de capítulo existente conta igual)", "Gatilho TRIPLO, não simples: (1) STATUS.md e ENREDO.md completos — incluindo o resumo do capítulo EM PROSA, não só a checklist marcada; (2) busca ativa por todo bloco «Estado atual»/«Status atual» nos arquivos afetados, conferindo que o RÓTULO (Cap. N) bate com o capítulo recém-escrito — o doc que «parece atualizado» porque a checklist bate é o bug clássico; (3) fatos novos da cena para CONTINUIDADE.md."],
    ["Erro mecânico apontado pelo autor na prosa", "Vira linha PERMANENTE na «Lista de invariantes» de CONTINUIDADE.md (a lista só cresce — o mesmo erro nunca se corrige duas vezes); se for erro de voz, ganha espelho também em VOZ.md → «O que EVITAR»."],
    ["Voz/estilo calibrado num trecho aprovado", "Entrega VOZ.md completo com o novo exemplo de prosa aprovada. A cada ARCO concluído, propõe 1–2 exemplos novos substituindo os mais antigos — a voz amadurece; exemplos presos nos primeiros capítulos deixam de representar a voz atual."],
  ],
  skillsPack:{
    intro:"Quatro skills opcionais que empacotam o protocolo de escrita como Agent Skills nativas — carregadas sob demanda no gatilho certo, em vez de inchar as Instruções lidas em todo turno. Derivam de skills provadas em campo (projetos de novel reais); cada erro que elas previnem já aconteceu. Ligue este pacote quando a obra entra em produção de capítulos.",
    skills:[
      {
        name:"escrita-serial",
        gatilho:"o autor pede prosa nova — «escreve o capítulo», «continua a cena», «POV de X»",
        description:"Protocolo de escrita de capítulo/cena em ficção serial: o sanduíche pré→durante→pós. USE SEMPRE que o autor pedir para escrever, continuar, expandir ou reescrever qualquer prosa da obra — capítulo, cena, diálogo, ponte — mesmo que ele não mencione «protocolo» ou «skill». Vale para qualquer POV e qualquer arco.",
        body:[
          "# Escrita serial — o protocolo-sanduíche",
          "",
          "Prosa nova nunca sai direto. A pré-checagem sozinha falha porque a prosa deriva da intenção DURANTE a geração — por isso há três camadas.",
          "",
          "## 1. PRÉ (antes de escrever)",
          "- Duas fases: primeiro o ESQUELETO (beats + perguntas de continuidade + 2–3 variações com trade-offs) para o autor aprovar; só então a prosa. Evita reescrever a linha inteira.",
          "- Reler: a ficha do POV (PERSONAGENS.md), os 2–3 parágrafos finais do capítulo anterior (âncora de voz — o novo continua a mesma frase, mesmo ritmo), e — se a cena mostra evento já escrito de outro POV — o capítulo desse evento, listando os fatos fixos (percepção pode divergir; fato, nunca).",
          "- **A cena já existe?** Antes de escrever, cheque se ela não foi escrita e aprovada em algum arquivo do Projeto — reler o capítulo anterior (âncora de voz) NÃO substitui essa busca. Reescrever do zero uma cena já aprovada é retrabalho e perda de versão.",
          "- Levantar em CONTINUIDADE.md o «Estado atual» do personagem e a LISTA NEGATIVA: o que ele AINDA NÃO tem (skills, informações, relações não estabelecidas).",
          "- Princípio que rege tudo: escrever A PARTIR do estado atual, NUNCA EM DIREÇÃO ao estado planejado. O plano vive no ENREDO; o que o personagem pode fazer AGORA vive na CONTINUIDADE, e é ela que governa a cena.",
          "",
          "## 2. DURANTE (escrevendo)",
          "- Capítulo padrão 900–1.400 palavras. Mais longo só se a cena exigir organicamente — e aí gerar POR CENA, re-ancorando a voz entre cenas. A densidade de erro cresce com o tamanho da saída.",
          "- A unidade de geração é a CENA; o capítulo é montagem.",
          "",
          "### Técnicas de cena (o «como», não só o «o quê»)",
          "- **Flag de uma frase, não esqueleto sempre:** para cena simples, a fase 1 pode ser só uma linha — «Antes de escrever: [a questão]. Prossigo com [X] ou prefere [Y]?». O esqueleto completo (beats + variações) fica para cena que toca mecânica nova, contradiz cânone, é POV paralelo ou mexe com questão aberta do STATUS. Não pesar o trivial.",
          "- **Informação de mundo entra como FALA, não resumo do narrador.** «O Intendente explicou que cada um receberia pontos» ❌ → «— Cada um de vocês recebe cem pontos. Gastem com sabedoria. — O Intendente não sorriu.» ✅. Discurso direto do personagem de autoridade, não exposição reportada.",
          "- **Teste de imersão:** se remover o diálogo e nada se perde além do que o narrador já resumiria, o diálogo é redundante — corte ou reescreva. E vice-versa: se o narrador resume o que deveria ser vivido em cena, converta em diálogo/ação.",
          "- **Ratio de diálogo:** cena com interação/autoridade/grupo pede diálogo real, não parágrafos de narração com uma fala solta. Mire ~40% de diálogo nessas cenas (calibrável por obra) — abaixo disso, provavelmente virou palestra.",
          "- **POV paralelo, regra de ouro:** cada POV deve revelar algo que o outro não podia. Se o segundo POV só recobre o mesmo terreno com outras palavras, ele não se justifica — e reusar a mesma metáfora/imagem denuncia o autor único por trás dos dois.",
          "",
          "### Processando notas de revisão do autor (interpretar antes de transcrever)",
          "- **Interpretar, não colar.** A nota pode vir fora de ordem cronológica ou conter contexto destinado só ao seu raciocínio, não à prosa. Decida ONDE (e SE) cada ponto entra na cena — não cole a informação no ponto exato em que foi mencionada.",
          "- **Separe o que é para a cena do que é para o seu entendimento.** Parte da nota vira texto; parte só orienta você — classifique antes de escrever.",
          "- **Nota longa = processar por inteiro.** Nota com muitos pontos numerados corre risco de ser absorvida pela metade: enumere, aplique um a um e confira ao fim que nenhum ficou de fora.",
          "- **Nunca dramatizar mecânica em momento de ação** (cruza com «vocabulário de mecânica na diegese»).",
          "",
          "## 3. PÓS (antes de entregar — obrigatório)",
          "- Reler o texto gerado contra a «Lista de invariantes» de CONTINUIDADE.md. Achou violação? Corrige antes de mostrar — nunca entregar sabendo de inconsistência, por menor que seja.",
          "- Ao fim de capítulo aprovado, disparar o gatilho triplo de docs (ver skill checagem-continuidade)."
        ],
        applyStub:["- Teto de palavras desta obra: [ex: 1.200]","- POVs ativos e seus arquivos: [...]","- Peculiaridade de ritmo/estrutura desta obra: [...]"]
      },
      {
        name:"checagem-continuidade",
        gatilho:"antes de afirmar um fato do mundo, e ao fechar um capítulo",
        description:"Checagem de continuidade e memória factual: lista negativa antes de escrever, auditoria de invariantes depois, e gatilho triplo ao fechar capítulo. USE ao afirmar qualquer fato da obra (poder, timeline, quem-sabe-o-quê, grafia), ao revisar prosa recém-escrita, e SEMPRE ao concluir um capítulo/cena. Procure ativamente pelos erros nomeados abaixo.",
        body:[
          "# Checagem de continuidade",
          "",
          "## Erros nomeados que a auditoria procura (releia a prosa contra cada um)",
          "- **Capability bleeding:** personagem usa skill/item/informação antes de adquiri-la na timeline. Cheque contra a LISTA NEGATIVA do «Estado atual».",
          "- **Vazamento de metadado estrutural:** a prosa cita «Cap. N», nome de arquivo ou rótulo de bastidores. Referência a evento passado ancora em memória diegética (lugar, sensação, tempo decorrido), nunca no índice.",
          "- **Vocabulário de mecânica na diegese:** personagem diz «o sistema concede». Dentro do mundo, atribui-se a uma entidade que existe nele.",
          "- **Metáfora repetida em POV paralelo:** foco diferente pede imagem diferente — reusar denuncia o autor único.",
          "- **Drift cognitivo:** nomear o processo mental («inventariou», «calculou», «arquivou») em vez de mostrar o gesto físico que comunica o mesmo.",
          "- **Beat silencioso sem fechamento:** eco de risco anterior sem uma linha de fechamento antes do corte de cena lê como fio abandonado.",
          "- **Narração que hedgeia o próprio POV:** o personagem-foco sempre sabe o que ELE fez, disse ou quis — «provavelmente», «não sabia bem o que tinha dito» sobre si mesmo é falso. Incerteza só é legítima sobre a reação ou a intenção do OUTRO. (3ª limitada e 1ª pessoa.)",
          "- **Vazamento de familiaridade cedo demais:** capítulo-ponte logo após um marco (primeiro encontro, primeiro dia) que importa linguagem de rotina/intimidade («como sempre», «ele já tinha me mostrado») insustentável no tempo curto decorrido — em geral por reaproveitar frases do capítulo SEGUINTE, que cobre a relação madura. Variante temporal do capability bleeding: cheque o tempo decorrido, não só a habilidade.",
          "- **Transição ausente disfarçada de economia:** cena nova (sobretudo abrupta ou chocante) sem a frase mínima de ambientação — onde, quando, o que estava acontecendo. Prosa econômica corta adjetivo e explicação de emoção; nunca a orientação básica da cena.",
          "- **Eco não verificado:** corrigir um fato canônico num arquivo sem buscar ativamente as reafirmações do mesmo fato — parafraseadas, não citadas — nos outros arquivos. Regra-mãe: fonte única, eco citado (o fato mora num lugar mestre; os outros citam, não reparafraseiam). Ao mudar um fato, faça a busca ativa pelos ecos.",
          "- **Craft afirmado sem verificação:** apresentar uma «regra de ofício» (ritmo, estrutura, o que «funciona») como consenso estabelecido sem confrontar com a prática real. É o P13 dentro da escrita — pesquise para refutar antes de afirmar com confiança.",
          "",
          "## Lista de invariantes (a memória viva)",
          "Vive no topo de CONTINUIDADE.md e SÓ CRESCE. Todo erro mecânico apontado pelo autor vira linha permanente — o mesmo erro nunca se corrige duas vezes. Toda prosa nova é relida contra ela.",
          "",
          "## Pergunta-oráculo (o teste operacional do «a partir do estado»)",
          "Antes de dar a um personagem uma capacidade, informação ou reação: «se eu apagasse meu conhecimento do arco planejado e lesse SÓ os capítulos anteriores, este personagem teria acesso a isso agora?» Se a resposta depende de algo que só o autor/plano sabe, é capability bleeding — recue ao que a página já estabeleceu.",
          "## Gatilho triplo — capítulo concluído OU REVISADO (revisão de capítulo existente dispara o mesmo) (não é um passo só)",
          "1. STATUS.md e ENREDO.md completos — incluindo o resumo do capítulo EM PROSA, não só a checklist marcada.",
          "2. Busca ATIVA por todo bloco «Estado atual»/«Status atual» nos arquivos afetados, conferindo que o RÓTULO (Cap. N) bate com o capítulo recém-escrito. O doc que «parece atualizado» porque a checklist bate é o bug clássico.",
          "3. Fatos novos da cena para CONTINUIDADE.md (incluindo novas invariantes)."
        ],
        applyStub:["- Invariantes já conhecidas desta obra: [...]","- Fonte-rápida (dado que muda a cada capítulo) desta obra: [ex: % de poder, contadores]","- Mecânica multi-eixo a vigiar, se houver: [...]"]
      },
      {
        name:"voz-calibragem",
        gatilho:"ao revisar se a prosa «soa como a obra», e ao retomar após pausa",
        description:"Calibragem de voz e estilo: recalibrar contra os exemplos APROVADOS mais recentes, não os mais antigos, e manter o espelho de erros de voz. USE ao revisar se um trecho soa como a obra, ao retomar a escrita depois de uma pausa ou troca de sessão, e quando o autor aprovar/rejeitar um trecho por questão de voz.",
        body:[
          "# Voz e calibragem",
          "",
          "- A voz é do AUTOR. A skill protege o estilo dele, não o padroniza em direção a uma prosa genérica.",
          "- Consulte VOZ.md antes de sugerir frase, descrição ou diálogo: tom, ritmo, exemplos aprovados, «O que EVITAR».",
          "- **Recalibre contra o RECENTE:** a voz amadurece; exemplos presos nos primeiros capítulos deixam de representar o melhor da voz atual. Ao retomar, ancore nos exemplos aprovados mais novos.",
          "- **Voz negativa por personagem:** o que este personagem NUNCA diria nem notaria primeiro vale tanto quanto o que diria.",
          "- **Espelho de erros:** todo erro de voz documentado (FIX / invariante) ganha uma linha em VOZ.md → «O que EVITAR». As duas listas dessincronizam se só uma for atualizada.",
          "- **Cura do drift cognitivo (não só o diagnóstico):** para cada verbo mental marcado («inventariou», «calculou», «arquivou», «avaliou»), pergunte «que gesto físico observável comunica a mesma conclusão?» e troque. «Ela inventariou a sala» → «Os olhos dela correram os cantos, contando saídas.» O leitor deduz o processo pela ação.",
          "- **Teste do «ela-não-come»:** releia 2–3 parágrafos do personagem mais analítico; se nada ali é sensorial ou físico (só pensamento e dedução), falta corpo — o personagem virou uma câmera que analisa. Ancore-o num gesto, num desconforto, numa reação do corpo.",
          "- **Anti-correção (não vá longe demais):** não troque o verbo mental por um sinônimo mental («avaliou» por «ponderou») — isso é o mesmo tique com outra roupa. E não elimine TODA cognição: o alvo é PROPORÇÃO, não extinção do traço. Um personagem analítico ainda pensa; ele só não narra o próprio fluxograma.",
          "- Subjetivo vs. mecânico: sobre «a cena merece o pagamento emocional?», ofereça observação de leitor, não veredito — a decisão volta ao autor."
        ],
        applyStub:["- Trechos-âncora da voz atual (colar ou apontar): [...]","- Tiques a evitar específicos desta obra: [...]"]
      },
      {
        name:"textura-mundo",
        gatilho:"ao planejar mundo, elenco ou sistema de poder antes de escrever",
        description:"Textura de mundo e profundidade de elenco: fichas com interior/tell físico, três camadas de elenco, teto de poder e equação de mecânica. USE ao conceber a obra, ao introduzir personagem ou facção nova, ao definir ou esclarecer o sistema de poder/magia, e quando o elenco secundário parecer passivo ou o mundo parecer papelão.",
        body:[
          "# Textura de mundo",
          "",
          "- **Ficha primária funda:** medo real; a falha que o personagem NÃO vê em si; humor específico; um tell físico (gesto/hábito que o identifica sem dizer o nome); uma contradição do arquétipo. Ficha rasa = ensemble passivo e cenas sem emoção lá na frente.",
          "- **Três camadas de elenco:** primário (ficha completa); secundário (recorrente — precisa de UMA vida fora do protagonista que o leitor sinta); terciário (aparição pontual — uma linha ou gesto, nunca arquétipo vazio). O mundo deve parecer que continua existindo quando o protagonista não está olhando.",
          "- **Teto de poder (obra com progressão):** UMA frase de ordem de grandeza entre o nível inicial do protagonista e o teto do mundo, definida ANTES do Cap. 1 — senão a primeira cena com algo mais forte não tem calibragem.",
          "- **Equação de mecânica:** para sistema com mais de uma variável interagindo, amarre a EQUAÇÃO proativamente (GLOSSARY/CONTINUIDADE) — definir cada termo isolado não previne a confusão, que aparece ao montar o conjunto.",
          "- **Personagem analítico precisa de corpo:** tell físico e ação, não só processo mental — senão «não come, só analisa».",
          "",
          "## Fazer o mundo respirar (técnicas de textura)",
          "- **Retecer fora de cena:** mencione de passagem um secundário/lugar/rotina numa cena onde ele NÃO está — sugere vida contínua. Ex.: entre capítulos, o restaurante ganha «uma nona mesa»; ninguém narra a reforma, mas o mundo se moveu. Barato e poderoso.",
          "- **Eco físico vs. eco comportamental (reconhecimento tardio de parentesco/identidade):** a herança se revela por dois canais — o físico (traço visível: cor de olho, um gesto herdado) e o comportamental (invisível: um tique, um valor, uma reação sob pressão). Para a revelação tardia, plante os dois antes e deixe o comportamental fazer o trabalho — mais forte e menos óbvio que o físico.",
          "- **Revelar por atrito, não por palestra:** dois secundários discordando sobre algo pequeno na frente do protagonista ensinam a cultura/regra sem infodump. O leitor aprende vendo a fricção, não ouvindo a explicação. Antídoto direto ao maior risco do nicho (exposição empilhada).",
          "- **Checklist «pelo menos 1 dos 3 por capítulo»** (torna a textura auditável, não só aspiracional): (a) um secundário com vida própria demonstrada; (b) um lugar que existe independente da trama; (c) um evento nos bastidores que o protagonista não causou. Um por capítulo já mantém o mundo vivo."
        ],
        applyStub:["- Sistema de poder/mundo desta obra em uma frase: [...]","- Teto de poder (grandeza inicial ↔ máxima): [...]","- Personagens que ainda estão rasos e precisam de interior: [...]"]
      }
    ]
  },
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
- **Teto de poder (obra com sistema de poder/progressão):** [UMA frase de ordem de grandeza entre o nível inicial do protagonista e o teto do mundo — o que o rank mais alto consegue fazer. Defina ANTES do Cap. 1: sem isso, a primeira cena em que o protagonista cruza com algo mais forte não tem calibragem.]
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
- **Interior (o que dá vida):** [medo real; a falha que ele NÃO vê em si; humor específico; uma contradição do arquétipo. Ficha rasa aqui = ensemble passivo e cenas sem emoção lá na frente.]
- **Tell físico:** [o gesto/hábito corporal que o identifica sem dizer o nome. Personagem analítico precisa de corpo tanto quanto de mente — senão "não come, só analisa".]
- **Quer (externo) × Precisa (interno):** [o objetivo declarado vs. a verdade que falta aprender — o motor do arco.]
- **Voz / fala:** [como fala: ritmo, vocabulário, bordões, o que NUNCA diria nem notaria primeiro (a voz negativa vale tanto quanto a positiva). Frases típicas entre aspas.]
- **Arco:** [de onde parte → para onde vai. O ponto de virada interno.]
- **Evolução registrada:** [onde o ARCO está agora — só o que muda devagar (rank, papel, relações firmadas). Números que mudam a cada capítulo (poder, contadores, aquisições) vivem no «Estado atual» de CONTINUIDADE.md; esta ficha aponta para lá, nunca duplica o número.]
- **Relações:** [com quem se conecta e como essa relação muda.]

---

## [Próximo personagem]
[...]

---

## Elenco secundário (uma linha cada)
> Três camadas de investimento: **primário** (ficha completa acima), **secundário** (recorrente — precisa de UMA vida fora do protagonista que o leitor sinta: um ofício, uma rotina, uma relação que não inclui o MC), **terciário** (aparição pontual — uma linha ou gesto específico, nunca arquétipo vazio). O mundo deve parecer que continua existindo quando o protagonista não está olhando.
- **[Nome]** — [função na trama + o traço que o distingue + a vida fora do MC, se secundário.]
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
> **Refresque por arco concluído:** a voz amadurece; exemplos presos nos primeiros capítulos deixam de representar o melhor da voz atual. Ao retomar após pausa, recalibre contra os exemplos mais RECENTES, não os mais antigos.
\`\`\`
[Trecho 1 — escrito ou aprovado pelo autor.]
\`\`\`
\`\`\`
[Trecho 2.]
\`\`\`

## Diálogo
- [Como os diálogos soam: realistas e cheios de subtexto? estilizados? Diferença de fala entre personagens vive em PERSONAGENS.md.]

## O que EVITAR
> Tiques e clichês que não combinam com esta obra. **Espelho de erros:** quando um erro de voz/prosa é documentado (FIX ou invariante em CONTINUIDADE), ganha uma linha aqui também — as duas listas dessincronizam se só uma for atualizada.
- [Ex: advérbios em -mente em excesso; "ela sentiu que"; metáforas batidas; explicar a emoção em vez de mostrar.]
- [Ex. clássico de drift cognitivo: "inventariou", "calculou", "arquivou" como tique narrativo — trocar o verbo mental pelo gesto físico que comunica o mesmo.]

## Decisões de estilo
- [Escolhas conscientes: presente histórico? itálico para pensamento? Cruza com a grafia em CONTINUIDADE.]
`},
    {name:"CONTINUIDADE.md", cat:"hist", role:"Notas de continuidade + grafia canônica + inconsistências resolvidas. A memória factual. CRESCE.", content:`# CONTINUIDADE.md — Notas de Continuidade

> A memória factual da obra. **Cresce.** É aqui que se previne o olho que muda de cor e o nome grafado de dois jeitos.
> O assistente consulta antes de afirmar detalhes e registra cada novo fato/correção.

---

## Estado atual (fonte rápida — atualiza a CADA capítulo)
> Dados que mudam rápido (poder, contadores, aquisições, o que o personagem TEM e SABE agora) vivem SÓ aqui — fonte única; PERSONAGENS.md aponta para cá e guarda o que muda devagar. **Rotule com o capítulo** e confira o rótulo a cada atualização: rótulo travado num capítulo velho é o bug clássico.
> É este bloco (não o plano do ENREDO) que governa a cena sendo escrita: escreve-se A PARTIR daqui.
- **[Personagem] — pós-Cap. [N]:** [o que tem/sabe/pode. E a LISTA NEGATIVA: o que AINDA NÃO tem — skills não adquiridas, informações não reveladas a ele, relações não estabelecidas.]

## Lista de invariantes (auditoria pós-escrita — SÓ CRESCE)
> Toda prosa nova é relida contra esta lista ANTES de ser entregue. Cada erro mecânico apontado pelo autor vira linha permanente — o mesmo erro nunca se corrige duas vezes. A lista nunca encolhe.
| Invariante | Como verificar na prosa |
|---|---|
| [Ex: a skill X só existe após o evento do Cap. 7] | [nenhum uso de X antes desse ponto da timeline] |
| [Ex: rótulo de bastidores nunca aparece na diegese] | [buscar "Cap.", números de capítulo, nomes de arquivo no texto] |

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
    {name:"CRONOLOGIA.md", cat:"opcional", role:"OPCIONAL — linha do tempo dos eventos da obra. Use quando há saltos temporais ou tramas paralelas.", content:`# CRONOLOGIA.md — Linha do Tempo

> **Opcional.** Use quando a obra tem saltos temporais, flashbacks, tramas paralelas ou uma história longa onde "quando aconteceu o quê" começa a escapar.
> Separa a ordem CRONOLÓGICA (quando os eventos ocorrem na história) da ordem NARRATIVA (em que o leitor descobre).

---

## Linha do tempo da história (ordem cronológica)
| Quando | Evento | Cap. onde aparece | Quem envolve |
|---|---|---|---|
| [data/marco no mundo] | [o que acontece] | [cap. narrativo] | [personagens] |

## Tempo relativo decorrido (desde o evento-âncora)
> Comece este tracker no SEGUNDO marcador temporal relativo da obra («três dias depois», «na sexta seguinte») — não espere acumular vários. Sem a soma centralizada, um «três dias depois» futuro contradiz a matemática acumulada em silêncio; manter desde cedo é barato, reconstruir depois é caro.
| Cap. | Dias desde [âncora: Cap. 1 / evento X] | Marcador no texto |
|---|---|---|
| [N] | [E+12] | [«na sexta seguinte»] |

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

## Esclarecimento de mecânica (a equação completa)
> Para mecânica com mais de uma variável interagindo (valor atual + teto + estado; dois eixos sobrepostos), amarre a EQUAÇÃO aqui, proativamente — definir cada termo isolado não previne a confusão: ela aparece quando se tenta montar o conjunto («X 35% = Y 35%? os dois têm o mesmo teto?»).
- **[Mecânica]:** [como as variáveis se relacionam entre si; o que muda de um estado para o outro; o que fica igual.]

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