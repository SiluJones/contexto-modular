# Spec — Nicho Narrativa, Fase B: switch «skills de escrita» (skills-pack) — i-N35

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html` + `src/niches/narrative.js` + `validate.js`** -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260703-spec0022-skills-pack-narrativa.md`**
> Config: **Sonnet + esforco Alto** basta (diff exato ja validado; aplicacao mecanica por ancora + build + harness).
> **Diff ja validado no chat:** build OK, harness **17/17, 33/33, 0 erros** (nova G6), teto narrative intacto em **6688/6900** (o pacote vive no APENDICE do CEREBRO, nao nas Instrucoes lidas por turno — sem impacto no teto). Anti-testes: default-off limpo; toggle presente so no narrative, ausente nos outros 16.
> Base: `meta/ANALISE-REFINO-NICHO-NARRATIVO.md` (Fase B) + doc oficial Agent Skills (frontmatter name+description; description "pushy"; progressive disclosure; claude.ai settings / `.claude/skills/`).

## Contexto
Fase A (spec0021) reescreveu o comportamento do nicho. Fase B entrega o pacote de skills nativas: 4 Agent Skills opcionais (escrita-serial, checagem-continuidade, voz-calibragem, textura-mundo) derivadas das skills provadas em campo nos projetos de novel. O mecanismo espelha o do «Modo Code»: um toggle no topbar liga um APENDICE no CEREBRO que emite cada SKILL.md como starter (com frontmatter + corpo generico + secao «Aplicacao neste projeto» em branco). O toggle e NICHE-SCOPED: so aparece em nichos que declaram `skillsPack` — hoje, so o narrative.

**NAO fazer:** nao adicionar o toggle ao topbar global (ele nao pode aparecer nos 17 nichos); nao inflar as Instrucoes por-turno (o pacote fica no CEREBRO, sob demanda); nao tocar em outros nichos.

## Tarefa A — `src/index.template.html`: toggle niche-scoped

### A1. Toggle condicional no `normNiche` (so quando o nicho declara `skillsPack`)
**Ancora:**
```
    topbar:         [...normTopbar(n.topbar), { id:"groupMode", label:"Projeto em grupo? (gera HUB.md)", type:"toggle", default:"no" }, { id:"asuMode", label:"Saída via ASU (patch)?", type:"toggle", default:"no" }, { id:"codeMode", label:"Desenvolver no Claude Code?", type:"toggle", default:"no" }],
```
**Substituir por:**
```
    topbar:         [...normTopbar(n.topbar), ...(n.skillsPack ? [{ id:"skillsMode", label:"Gerar skills de escrita?", type:"toggle", default:"no" }] : []), { id:"groupMode", label:"Projeto em grupo? (gera HUB.md)", type:"toggle", default:"no" }, { id:"asuMode", label:"Saída via ASU (patch)?", type:"toggle", default:"no" }, { id:"codeMode", label:"Desenvolver no Claude Code?", type:"toggle", default:"no" }],
```

### A2. Helper `skillsPackOn`
**Ancora:**
```
function codeModeOn(){ return !!(STATE.topbar && STATE.topbar.codeMode === "yes"); }
```
**Substituir por:**
```
function codeModeOn(){ return !!(STATE.topbar && STATE.topbar.codeMode === "yes"); }
function skillsPackOn(){ return !!(STATE.topbar && STATE.topbar.skillsMode === "yes"); }
```

### A3. Apendice de skills no `buildClaudeMd` (antes da linha final "Gerado pelo Kit")
**Ancora** (as DUAS linhas finais da funcao, imediatamente antes de `return L.join`):
```
  L.push("");
  L.push(`*Gerado pelo Kit de Contexto Universal — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
```
**Substituir por:**
```
  if(skillsPackOn() && niche.skillsPack){
    const sp = niche.skillsPack;
    L.push("");
    L.push("---");
    L.push("");
    L.push("## Apêndice — skills de escrita (Agent Skills)");
    L.push("");
    L.push(sp.intro);
    L.push("");
    L.push("**Onde instalar:** em **claude.ai**, Configurações → Capabilities/Skills → enviar cada SKILL.md (planos pagos). No **Claude Code**, salve cada uma em `.claude/skills/<nome>/SKILL.md` na raiz do repo (ou `~/.claude/skills/` para valer em todos os projetos). O mesmo arquivo serve nos dois — formato idêntico.");
    L.push("**Como funciona:** o Claude lê só o `name` + `description` de cada skill no início da sessão; o corpo carrega sozinho quando a `description` casa com o que você pede (é *progressive disclosure* — o protocolo pesado não pesa no token de todo turno). Por isso a `description` é o gatilho e vem deliberadamente \"insistente\", com verbos concretos.");
    L.push("**Preencha antes de usar:** cada skill tem uma seção «Aplicação neste projeto» em branco — é onde a regra genérica vira a regra DESTA obra (nomes, exemplos, invariantes reais). Skill sem essa parte preenchida rende pela metade.");
    L.push("**Este CEREBRO e as skills se completam:** o CEREBRO define o comportamento base lido sempre; as skills carregam o protocolo detalhado no gatilho. Quando ligar as skills, o assistente as consulta nos gatilhos abaixo em vez de repetir tudo aqui.");
    (sp.skills||[]).forEach(sk => {
      L.push("");
      L.push(`### \`${sk.name}/SKILL.md\``);
      if(sk.gatilho) L.push(`> Aciona quando: ${sk.gatilho}`);
      L.push("```markdown");
      L.push("---");
      L.push(`name: ${sk.name}`);
      L.push(`description: ${sk.description}`);
      L.push("---");
      sk.body.forEach(b => L.push(b));
      L.push("");
      L.push("## Aplicação neste projeto");
      L.push("<!-- Preencha com o específico DESTA obra. Sem isto, a skill roda genérica. -->");
      (sk.applyStub||["- [a preencher]"]).forEach(a => L.push(a));
      L.push("```");
    });
    L.push("");
    L.push("> Depois de instalar e preencher as skills, você pode apagar este apêndice do CEREBRO — ele é um starter, não a fonte viva. As skills passam a ser a fonte do protocolo de escrita.");
  }
  L.push("");
  L.push(`*Gerado pelo Kit de Contexto Universal — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
```

## Tarefa B — `src/niches/narrative.js`: dados do `skillsPack`

Inserir o bloco `skillsPack` inteiro ENTRE o fecho do `triggersExtra` e o inicio do `contextFiles`.

**Ancora** (o fecho do triggersExtra + a linha do contextFiles — aparece UMA vez):
```
  ],
  contextFiles:[
    {name:"BIBLIA.md", cat:"ctx", role:"A story bible: premissa, mundo, regras, tom. Enxuta (Tier 1 primeiro). Estável.", content:`# BIBLIA.md — [Nome da Obra]
```
> Nota: use o bloco `contextFiles:[` seguido do `BIBLIA.md` como parte da ancora para garantir unicidade (ha outros `],` no arquivo).

**Substituir por** (mesma cauda, com o `skillsPack` inserido antes de `contextFiles`):
```
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
          "- Levantar em CONTINUIDADE.md o «Estado atual» do personagem e a LISTA NEGATIVA: o que ele AINDA NÃO tem (skills, informações, relações não estabelecidas).",
          "- Princípio que rege tudo: escrever A PARTIR do estado atual, NUNCA EM DIREÇÃO ao estado planejado. O plano vive no ENREDO; o que o personagem pode fazer AGORA vive na CONTINUIDADE, e é ela que governa a cena.",
          "",
          "## 2. DURANTE (escrevendo)",
          "- Capítulo padrão 900–1.400 palavras. Mais longo só se a cena exigir organicamente — e aí gerar POR CENA, re-ancorando a voz entre cenas. A densidade de erro cresce com o tamanho da saída.",
          "- A unidade de geração é a CENA; o capítulo é montagem.",
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
          "",
          "## Lista de invariantes (a memória viva)",
          "Vive no topo de CONTINUIDADE.md e SÓ CRESCE. Todo erro mecânico apontado pelo autor vira linha permanente — o mesmo erro nunca se corrige duas vezes. Toda prosa nova é relida contra ela.",
          "",
          "## Gatilho triplo — capítulo concluído (não é um passo só)",
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
          "- Subjetivo vs. mecânico: sobre «a cena merece o pagamento emocional?», ofereça observação de leitor, não veredito — a decisão volta ao autor."
        ],
        applyStub:["- Trechos-âncora da voz atual (colar ou apontar): [...]","- Tiques a evitar específicos desta obra: [...]"]
      },
      {
        name:"textura-mundo",
        gatilho:"ao planejar mundo, elenco ou sistema de poder antes de escrever",
        description:"Textura de mundo e profundidade de elenco: fichas com interior/tell físico, três camadas de elenco, teto de poder e equação de mecânica. USE ao concebir a obra, ao introduzir personagem ou facção nova, ao definir ou esclarecer o sistema de poder/magia, e quando o elenco secundário parecer passivo ou o mundo parecer papelão.",
        body:[
          "# Textura de mundo",
          "",
          "- **Ficha primária funda:** medo real; a falha que o personagem NÃO vê em si; humor específico; um tell físico (gesto/hábito que o identifica sem dizer o nome); uma contradição do arquétipo. Ficha rasa = ensemble passivo e cenas sem emoção lá na frente.",
          "- **Três camadas de elenco:** primário (ficha completa); secundário (recorrente — precisa de UMA vida fora do protagonista que o leitor sinta); terciário (aparição pontual — uma linha ou gesto, nunca arquétipo vazio). O mundo deve parecer que continua existindo quando o protagonista não está olhando.",
          "- **Teto de poder (obra com progressão):** UMA frase de ordem de grandeza entre o nível inicial do protagonista e o teto do mundo, definida ANTES do Cap. 1 — senão a primeira cena com algo mais forte não tem calibragem.",
          "- **Equação de mecânica:** para sistema com mais de uma variável interagindo, amarre a EQUAÇÃO proativamente (GLOSSARY/CONTINUIDADE) — definir cada termo isolado não previne a confusão, que aparece ao montar o conjunto.",
          "- **Personagem analítico precisa de corpo:** tell físico e ação, não só processo mental — senão «não come, só analisa»."
        ],
        applyStub:["- Sistema de poder/mundo desta obra em uma frase: [...]","- Teto de poder (grandeza inicial ↔ máxima): [...]","- Personagens que ainda estão rasos e precisam de interior: [...]"]
      }
    ]
  },
  contextFiles:[
    {name:"BIBLIA.md", cat:"ctx", role:"A story bible: premissa, mundo, regras, tom. Enxuta (Tier 1 primeiro). Estável.", content:`# BIBLIA.md — [Nome da Obra]
```

## Tarefa C — `validate.js`: check G6

Inserir logo APOS o fecho do check G5 (ASU round-trip).

**Ancora** (o fecho do G5):
```
  assert(noAsu !== yesAsu, "round-trip do ASU nao alterou o CEREBRO.md");
  return "ok";
});
```
**Substituir por:**
```
  assert(noAsu !== yesAsu, "round-trip do ASU nao alterou o CEREBRO.md");
  return "ok";
});

check("G6 switch skills-pack (narrative: no->sem / yes->4 skills; dev nao tem o toggle)", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.skillsMode = "no";
  const noSk = T.buildClaudeMd(narr);
  T.STATE.topbar.skillsMode = "yes";
  const yesSk = T.buildClaudeMd(narr);
  T.STATE.topbar.skillsMode = "no";
  assert(!/skills de escrita/i.test(noSk), "skillsMode=no nao deveria ter o apendice de skills");
  assert(/skills de escrita/i.test(yesSk), "skillsMode=yes deveria ter o apendice de skills");
  assert(/name: escrita-serial/.test(yesSk) && /name: checagem-continuidade/.test(yesSk) && /name: voz-calibragem/.test(yesSk) && /name: textura-mundo/.test(yesSk), "faltou alguma das 4 skills");
  assert(/Aplicação neste projeto/.test(yesSk), "skill sem a secao 'Aplicacao neste projeto'");
  assert(noSk !== yesSk, "round-trip do skills-pack nao alterou o CEREBRO.md");
  // niche-scoping: o toggle so existe onde o nicho declara skillsPack
  assert((narr.topbar||[]).some(t=>t.id==="skillsMode"), "narrative deveria ter o toggle skillsMode");
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="skillsMode"), "dev NAO deveria ter o toggle skillsMode (nicho sem skillsPack)");
  return "ok";
});
```

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js
```
**17/17, 33/33, 0 erros.** Esperado: `G6` verde; `N[narrative]` segue em `instr 6688` (o pacote NAO entra nas Instrucoes por-turno — so no CEREBRO sob demanda). Depois, ABRA o index.html, entre no nicho **Narrativa & Ficção** e confira: (a) aparece o toggle «Gerar skills de escrita?» no topbar — e some ao trocar para outro nicho (ex.: Dev); (b) com o toggle LIGADO, o CEREBRO.md gerado ganha o «Apêndice — skills de escrita» com as 4 skills, cada uma com frontmatter `name`/`description` e a seção «Aplicação neste projeto»; (c) com o toggle desligado, o apêndice some.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-051: «Nicho narrativa, fase B (i-N35): switch niche-scoped «Gerar skills de escrita?» que emite um pacote de 4 Agent Skills (escrita-serial, checagem-continuidade, voz-calibragem, textura-mundo) como apêndice do CEREBRO — mesmo padrão do Modo Code. Toggle so aparece em nichos que declaram `skillsPack` (hoje so narrative); pacote vive no CEREBRO sob demanda, sem impacto no teto das Instrucoes. Formato oficial Agent Skills (frontmatter name+description; description pushy; secao «Aplicacao neste projeto» para o projeto preencher).»
- **`meta/CHANGELOG.md`** — v1.49.0 no topo.
- **`meta/IDEAS.md`** — marcar i-N35 como ✅ IMPLEMENTADA (v1.49.0); manter i-N36 (fase C) Ativa.
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI a propria spec
```
git add src/index.template.html src/niches/narrative.js validate.js index.html meta/specs/260703-spec0022-skills-pack-narrativa.md meta/DECISIONS.md meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md
git commit -m "feat: nicho narrativa fase B - switch skills-pack de escrita (i-N35, D-051)" -m "toggle niche-scoped emite 4 Agent Skills no apendice do CEREBRO; formato oficial name+description; sem impacto no teto; harness G6; 17/17 33/33 0 erros"
git push
```
