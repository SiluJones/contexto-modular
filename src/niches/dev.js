NICHES.dev = {
  id:"dev", label:"Desenvolvimento", icon:"⌨", group:"serif", category:"core",
  cardColor:"#e7a23f", cardTags:["solo dev","equipe","freelance"],
  cardDesc:"Código, arquitetura, decisões técnicas",
  intro:{
    headline:"Contexto que viaja entre conversas.",
    lede:"Em vez de depender do histórico — que cresce, consome tokens e força \"continue\" atrás de \"continue\" — você mantém arquivos enxutos que o Claude lê no começo de cada sessão e regenera no fim, completos e prontos para substituir.",
    ctxBlurb:"<code>CLAUDE.md</code> define o comportamento · <code>CONTEXT.md</code> quase não muda · <code>STATUS.md</code> é rolante (só o agora) · <code>DECISIONS.md</code> cresce devagar · <code>ROADMAP</code> e <code>GLOSSARY</code> entram se o projeto pedir.",
    hero:"dev"
  },
  topbar:[
    {id:"project", label:"Nome do projeto", placeholder:"ex: minha-ferramenta"},
    {id:"version", label:"Versão", placeholder:"0.1.0"}
  ],
  behaviors:[
    ["comments","Código comentado com propósito","Docstring em toda função pública; comentário onde a lógica não é óbvia ou onde há uma decisão não-trivial. Não comenta o óbvio («incrementa i»). Comentário explica o PORQUÊ, não o QUÊ."],
    ["preserve","Preserva comentários e código existente","Ao editar, mantém comentários válidos e só remove os órfãos. Não reescreve trechos que já funcionam sem motivo. Não apaga código comentado do usuário sem avisar."],
    ["rootcause","Vai à causa raiz, não ao sintoma","Diante de um bug, investiga a causa antes de propor correção. Não aplica «band-aid» que esconde o problema. Se a correção é paliativa por necessidade, diz isso explicitamente e registra a dívida."],
    ["minimal","Mudança mínima que resolve","Prefere o diff menor que resolve o problema ao refactor grande não pedido. Se enxerga uma melhoria maior, sugere à parte — não embute no meio de outra tarefa."],
    ["testflag","Sinaliza o que testar","Após uma mudança, aponta o que vale testar (caso feliz, casos de borda, regressão possível) e — quando há suíte — qual teste cobre ou falta."],
    ["screenshots","Indica o que merece print no README","Aponta quais telas/saídas valem captura para documentação, sem gerar a imagem."]
  ],
  builderSection:{
    title:"Stack & Ferramentas",
    hint:"Marque o que o projeto usa. Entra nas instruções para o Claude não sugerir fora da sua stack.",
    type:"chips",
    groups:[
      {label:"Linguagem", items:["TypeScript","JavaScript","Python","Go","Rust","Java","Kotlin","C#","PHP","Ruby","Swift","C/C++","Elixir"]},
      {label:"Front-end", items:["React","Next.js","Vue","Nuxt","Svelte","Angular","Astro","Solid","HTML/CSS puro"]},
      {label:"Back-end", items:["Node/Express","NestJS","FastAPI","Django","Flask","Spring","Rails","Laravel","Go stdlib","Gin",".NET"]},
      {label:"Estilização / UI", items:["Tailwind","CSS puro","Sass","styled-components","Bootstrap","shadcn/ui","Chakra UI"]},
      {label:"Banco de dados", items:["PostgreSQL","MySQL","SQLite","MongoDB","Redis","Supabase","Firebase","Prisma","SQLAlchemy","Drizzle"]},
      {label:"Mobile", items:["React Native","Flutter","Expo","SwiftUI","Android/Kotlin","Ionic"]},
      {label:"Testes", items:["pytest","Jest","Vitest","Playwright","Cypress","JUnit","Go test","RSpec"]},
      {label:"Deploy / Infra", items:["Docker","Kubernetes","GitHub Actions","Vercel","Netlify","Cloudflare","AWS","GCP","Railway","Fly.io","VPS","GitHub Pages"]},
    ],
    other:true
  },
  conventions:true, conventionsFor:"code",
  // Gatilhos específicos de dev (somam aos universais no CLAUDE.md gerado)
  triggersExtra:[
    ["Decisão de arquitetura ou troca de lib", "Entrega o DECISIONS.md completo (nova DEC-N: contexto, decisão, alternativas, consequências)."],
    ["Mudança de fase do projeto", "Entrega o ROADMAP.md completo com a fase atualizada (concluída / em curso / próxima)."],
    ["Termo técnico próprio do projeto usado", "Entrega o GLOSSARY.md completo com o termo definido."],
  ],
  contextFiles:[
    {name:"CONTEXT.md", cat:"ctx", role:"O que o projeto é: visão, stack, estrutura, como as peças críticas funcionam, armadilhas, produto. Estável.", content:`# CONTEXT.md — [Nome do Projeto]

> Arquivo **estável**. O assistente lê no início de cada sessão para se ambientar.
> Muda pouco: só em alteração estrutural (stack, arquitetura, escopo, nova armadilha descoberta).
> Mantenha enxuto — descreve o que o projeto É, não o que está acontecendo agora (isso é o STATUS).

---

## Visão Geral
[2-4 frases: o que o projeto faz, para quem, qual problema resolve. Sem marketing.]

## Stack Tecnológica
- **Linguagem(ns):** [ex: Python 3.11]
- **Framework(s):** [ex: FastAPI]
- **Banco / persistência:** [ex: SQLite via SQLAlchemy]
- **Front-end:** [se houver]
- **Testes:** [ex: pytest]
- **Deploy:** [ex: Docker + VPS]

## Estrutura do Projeto
\`\`\`
[Árvore de pastas essencial — só o que importa para navegar.
Não cole a árvore inteira; só os diretórios e arquivos que um recém-chegado
precisa entender. Anote a função de cada um em uma linha.]

projeto/
├── src/
│   ├── core/          # [o que vive aqui]
│   └── ...
├── tests/
└── ...
\`\`\`

## Convenções de Código
- **Nomes:** [arquivos, funções, variáveis — idioma e estilo. Ex: snake_case, inglês.]
- **Comentários:** [idioma; quando comentar.]
- **Commits:** [formato. Ex: imperativo curto em PT-BR; Conventional Commits.]
- **Estilo:** [linter/formatter. Ex: ruff + black; eslint + prettier.]
- **Imports/organização:** [convenção, se houver.]

## Como o [componente crítico] funciona (CRÍTICO)
> Use esta seção para o(s) mecanismo(s) central(is) que, se mal-entendidos, geram bug.
> Ex: como o arquivo de configuração central é lido; como o pipeline de dados flui;
> como a autenticação encadeia. Explique em prosa + exemplo mínimo.

[Descrição do mecanismo. O assistente vai consultar isto antes de mexer na peça.]

## Arquitetura — pontos-chave
[Decisões estruturais em uma linha cada, com referência ao raciocínio completo em DECISIONS.md.]
- [Ponto] — ver DEC-00X.
- [Ponto] — ver DEC-00Y.

## Armadilhas Conhecidas (o que NÃO fazer)
> A parte mais valiosa do arquivo. Cada armadilha já custou tempo uma vez.
> Formato: o que parece certo → por que está errado → o que fazer em vez disso.

1. **[Armadilha]** — [por que morde] → [o certo].
2. **[Armadilha]** — [por que morde] → [o certo].

## Contexto de Produto
> Por que o projeto existe e para onde aponta. Evita decisões tecnicamente corretas mas erradas para o produto.
- **Usuário-alvo:** [quem usa]
- **Dor que resolve:** [a dor concreta]
- **O que é sucesso:** [como se mede]
- **O que o projeto deliberadamente NÃO é:** [limites de escopo]
`},
    {name:"STATUS.md", cat:"ctx", role:"O agora: o que funciona, o que está em progresso, o que está quebrado, backlog curto. Rolante — o resolvido sai.", content:`# STATUS.md — Estado Atual

> Arquivo **rolante**: descreve só o AGORA. O assistente lê no início para saber onde retomar.
> Item resolvido SAI daqui — vai para o CHANGELOG (se foi entrega) e/ou para o log da sessão.
> Médio e longo prazo NÃO ficam aqui — ficam no ROADMAP.

---

## Versão Atual
**[0.1.0]** — [data] — [frase do que esta versão representa]

## ✅ Funcionando
- [Funcionalidade estável que já pode ser usada.]
- [...]

## 🔧 Em Progresso
- [O que está sendo construído agora + quem/onde parou.]

## ❌ Quebrado / Com Problema
- [Bug ativo: sintoma observável + suspeita, se houver. Quando resolver, vira entrada em DECISIONS se foi grave.]

## 📋 Backlog (curto prazo — itens acionáveis)
> Só o que dá para pegar nas próximas sessões. Ideia vaga vai pro IDEAS; plano em fases vai pro ROADMAP.
- [ ] [Item concreto e pequeno.]
- [ ] [...]

## 📁 Arquivos Críticos (não mexer sem contexto)
- \`[caminho/arquivo]\` — [por que é sensível; o que ler antes de tocar.]

## 💬 Última Sessão
**[data]** — [2-4 linhas: o que foi feito, onde parou, qual o próximo passo óbvio. É a primeira coisa que o assistente lê para retomar o fio.]
`},
    {name:"DECISIONS.md", cat:"ctx", role:"Por que as coisas são como são: decisões de arquitetura (DEC) e bugs graves resolvidos (FIX). Cresce devagar.", content:`# DECISIONS.md — Registro de Decisões

> Arquivo que **cresce devagar**. Guarda o PORQUÊ — o que o código sozinho não conta.
> Duas naturezas: **DEC** (decisões de arquitetura/design) e **FIX** (bugs graves resolvidos, para não repetir).
> Não reescreva entradas antigas; se uma decisão for substituída, marque «SUPERADA por DEC-N» e adicione a nova.
> Quando passar de ~700 linhas, mova as mais antigas para \`DECISIONS-archive.md\`.

---

## Como usar
Cada decisão recebe um ID sequencial (DEC-001, DEC-002…) e segue o formato abaixo (ADR simplificado). Bugs graves usam FIX-001, FIX-002… com sintoma/causa/solução/lição.

---

## DEC-[N] — [Título curto da decisão]
**Data:** AAAA-MM-DD · **Status:** aceita | superada por DEC-X

### Contexto
[Que problema ou pergunta forçou esta decisão.]

### Decisão
[O que foi decidido, em uma ou duas frases diretas.]

### Alternativas consideradas
- **[Alternativa A]** — [por que não.]
- **[Alternativa B]** — [por que não.]

### Consequências
[O que isso facilita, o que isso custa, o que passa a ser verdade no projeto por causa disso.]

---

## FIX-[N] — [Título do bug grave]
**Data:** AAAA-MM-DD

- **Sintoma:** [o que se observava.]
- **Causa raiz:** [o que realmente estava errado — não o sintoma.]
- **Solução:** [o que foi feito.]
- **Lição:** [o que evita que volte a acontecer; virou armadilha em CONTEXT?]
`},
    {name:"CHANGELOG.md", cat:"hist", role:"Histórico de versões entregues (SemVer + Keep a Changelog). Cresce no topo.", content:`# CHANGELOG

> Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/) e versionamento [SemVer](https://semver.org/lang/pt-BR/).
> **Cresce**: entradas novas no topo. Registra só o que foi de fato concluído/entregue.

## [Não lançado]
### Adicionado
- [Funcionalidade nova pronta, ainda sem número de versão.]

---

## [0.1.0] — AAAA-MM-DD
### Adicionado
- [O que entrou.]
### Modificado
- [O que mudou em comportamento existente.]
### Corrigido
- [Bug corrigido — referência FIX-N se houver.]
### Removido
- [O que saiu.]
`},
    {name:"IDEAS.md", cat:"ctx", role:"Segundo cérebro: ideias suas e do assistente. Nunca perde nada — ideia muda de status, não some.", content:`# IDEAS.md — Brainstorm e Visão

> **Segundo cérebro** do projeto. Captura TUDO que for mencionado, mesmo solto ou no meio de outro assunto.
> Nunca perde: ideia implementada vai para «Concluídas»; ideia recusada vai para «Descartadas» com o motivo.
> Separar por autor (você × assistente) ajuda a lembrar de onde veio cada coisa.

---

## 💡 Ideias Ativas — Usuário
### AAAA-MM — [Título da ideia]
[Descrição em uma ou duas linhas. O que é, por que pode valer. Sem decidir agora.]

---

## 🤖 Ideias Ativas — Assistente
### AAAA-MM-DD — [Título]
[Sugestão do assistente que ainda não virou trabalho nem foi recusada.]

---

## ✅ Concluídas
> Ideia que virou realidade. Mantida aqui para histórico (com referência à versão/decisão).
- **[Ideia]** — implementada em [versão] / ver DEC-N.

---

## 🚫 Descartadas
> Ideia avaliada e recusada. O motivo evita reabrir a discussão depois.
- **[Ideia]** — descartada porque [motivo].
`},
    {name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído pelo conteúdo preenchido.", content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** Este arquivo é o MOLDE — não é substituído.
> Ao final de cada sessão, o assistente entrega um arquivo novo \`logs/AAAA-MM-DD.md\` preenchido neste formato.
> Os logs vivem em \`logs/\` no Git (NÃO no Projeto) e são lidos só sob demanda — quando você precisar recuperar o detalhe de uma sessão antiga.

---

# Log — AAAA-MM-DD

## Objetivo da sessão
[O que se pretendia fazer ao começar.]

## Feito
- [Mudanças concretas: arquivos tocados, funções criadas, bugs resolvidos.]

## Decisões
- [Decisões tomadas → quais viraram DEC-N em DECISIONS.md.]

## Bugs
- [Bugs encontrados/resolvidos → quais viraram FIX-N.]

## Aprendizados / armadilhas
- [O que descobrimos que vale virar armadilha em CONTEXT.md.]

## Onde parei
[Estado exato ao encerrar + próximo passo óbvio. Isto alimenta o «Última Sessão» do STATUS.]

## Próximos passos
- [Ações para a próxima sessão.]
`},
    {name:"ROADMAP.md", cat:"opcional", role:"OPCIONAL — plano deliberado de evolução em fases. Use quando o projeto tem direção de médio/longo prazo.", content:`# ROADMAP.md — Plano Intencional de Evolução

> **Opcional.** Use quando o projeto tem um plano em fases — não para tarefas soltas (isso é o Backlog do STATUS) nem para brainstorm (isso é o IDEAS).
> Cada fase tem um objetivo e um critério de conclusão. Marque o estado: 🟢 concluída · 🟡 em curso/próxima · 🔵 futura · 🚫 descartada.
> Médio e longo prazo vivem AQUI, não no STATUS.

---

## 🟢 F1 — [Nome da fase] *(concluída)*
**Objetivo:** [o que esta fase entregou.]
**Critério de conclusão:** [como soubemos que acabou.]
- [Entrega principal.]

## 🟡 F2 — [Nome] *(próxima / em curso)*
**Objetivo:** [...]
**Critério de conclusão:** [...]
- [ ] [Item da fase.]

## 🔵 F3 — [Nome] *(futuro, sem data)*
**Objetivo:** [...]
- [Direção, ainda não detalhada.]

---

## 🚫 Itens descartados desta visão
- **[Item]** — fora de escopo porque [motivo]. (Pode viver no IDEAS se ainda for ideia.)
`},
    {name:"GLOSSARY.md", cat:"opcional", role:"OPCIONAL — termos próprios do projeto. Use quando há jargão que se repete entre sessões.", content:`# GLOSSARY.md — Termos do Projeto

> **Opcional.** Use quando o projeto tem vocabulário próprio (nomes de módulos, conceitos, identificadores) que o assistente reexplicaria a cada sessão sem isto.
> Mantenha curto: só o que não é óbvio para alguém de fora.

---

## Conceitos do projeto
- **[Termo]** — [definição em uma linha, no sentido específico deste projeto.]

## Arquiteturas / módulos
- **[Nome do módulo/padrão]** — [o que é, o que faz.]

## Comandos / artefatos
- **[comando ou arquivo]** — [para que serve.]

## Identificadores
- **[Sigla/ID]** — [o que significa no projeto.]
`},
    {name:"HISTORICO.md", cat:"opcional", role:"OPCIONAL — conhecimento consolidado de fases antigas (guias, análises que não cabem no CONTEXT enxuto). Lido sob demanda.", content:`# HISTORICO.md — Conhecimento Consolidado

> **Opcional.** Arquivo-baú para conhecimento denso que já foi aprendido e não muda mais — guias técnicos, análises de viabilidade, notas de migração — que tornariam o CONTEXT pesado demais.
> Não é lido no início da sessão; o assistente consulta sob demanda quando o assunto aparece.

---

## 1. [Guia técnico consolidado]
[Conteúdo de referência que já é estável. Ex: «como inspecionar um site novo», «como configurar o ambiente do zero».]

## 2. [Análise/decisão histórica]
[Notas de uma fase encerrada que ainda têm valor de consulta.]

## 3. [Procedimento herdado]
[Passo a passo que raramente muda.]
`}
  ],
  outputs:[
    {key:"status", name:"STATUS.md", role:"completo e atualizado (rolante: o resolvido sai)", active:true},
    {key:"changelog", name:"CHANGELOG.md", role:"completo, com nova entrada se algo foi concluído", active:true},
    {key:"decisions", name:"DECISIONS.md", role:"completo, com nova DEC/FIX se houve decisão ou bug grave", active:true},
    {key:"ideas", name:"IDEAS.md", role:"completo, com as ideias da sessão capturadas e reclassificadas", active:true},
    {key:"roadmap", name:"ROADMAP.md", role:"completo, se alguma fase mudou de estado (quando o projeto usa roadmap)", active:false},
    {key:"glossary", name:"GLOSSARY.md", role:"completo, se surgiu termo novo (quando o projeto usa glossário)", active:false},
    {key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true},
  ],
  promptsExtra:[
    { id:"G", title:"Debugar com método", when:"Apareceu um bug e quero a causa raiz, não um band-aid.",
      fill:"bug", fillLabel:"Sintoma + como reproduzir + o que já tentei (cole erro/stack se houver)",
      body:(p,n)=>`Debug com método.\n\nSINTOMA:\n${p.bug||"[O que acontece + passos para reproduzir + mensagem de erro/stack + o que já tentei]"}\n\nAntes de propor correção:\n- Liste 2-4 hipóteses de causa raiz, da mais provável à menos\n- Para cada uma, o que confirmaria ou descartaria (o que olhar, o que logar)\n- Aponte qual arquivo/função provavelmente está envolvido (consulte CONTEXT «como funciona» e Arquivos Críticos)\n- Cheque se isto bate com alguma Armadilha Conhecida em CONTEXT.md\n\nDepois da causa identificada: proponha a MUDANÇA MÍNIMA que resolve (não refactor). Se a correção for paliativa, diga e registre a dívida. Se o bug for grave, prepare a entrada FIX-N para DECISIONS.md.`
    },
    { id:"H", title:"Registrar uma decisão técnica", when:"Vamos escolher entre caminhos (lib, arquitetura, padrão) e quero o porquê gravado.",
      fill:"decision", fillLabel:"A escolha em jogo + opções consideradas + restrições",
      body:(p,n)=>`Decisão técnica.\n\nESCOLHA:\n${p.decision||"[O que precisa ser decidido + opções na mesa + restrições do projeto]"}\n\nFaça:\n- Reformule o problema real por trás da escolha (qual pergunta estamos respondendo)\n- Para cada opção: prós, contras, e o que ela custa no longo prazo neste projeto\n- Considere o que já existe em DECISIONS.md (alguma decisão anterior restringe esta?)\n- Recomende uma, com o argumento — e o melhor contra-argumento\n- Diga como saberíamos cedo se a escolha foi errada\n\nAo final, prepare a entrada DEC-N completa (contexto, decisão, alternativas, consequências) para o DECISIONS.md, e entregue o arquivo completo atualizado.`
    },
    { id:"I", title:"Revisar código / diff", when:"Tenho código escrito (meu ou de outro) e quero revisão honesta antes de seguir.",
      fill:"code", fillLabel:"Cole o código ou o diff + o que ele deveria fazer",
      body:(p,n)=>`Revisão de código.\n\nCÓDIGO E INTENÇÃO:\n${p.code||"[Cole o código/diff + o que ele deveria fazer]"}\n\nAvalie, em ordem de severidade:\n- Corretude: faz o que deveria? Casos de borda quebram?\n- Bugs latentes: race, null, off-by-one, recurso não fechado, etc.\n- Aderência ao projeto: respeita as Convenções de CONTEXT.md e as Armadilhas?\n- Legibilidade: algum trecho que o próximo leitor vai travar?\n- Segurança/performance: só onde for risco real e medível, sem otimização prematura\n\nSepare «precisa corrigir» de «sugestão opcional». Não reescreva tudo — aponte e proponha o diff mínimo onde importa. Diga o que testar depois.`
    },
    { id:"J", title:"Planejar uma feature ou fase", when:"Vou começar algo maior e quero quebrar em passos antes de codar.",
      fill:"feature", fillLabel:"A feature/fase + o que ela precisa entregar + restrições",
      body:(p,n)=>`Plano de implementação.\n\nFEATURE/FASE:\n${p.feature||"[O que construir + o que precisa entregar + restrições de tempo/stack]"}\n\nProduza:\n- Objetivo em uma frase e critério de «pronto»\n- Decisões de design que precisam ser tomadas antes de codar (e quais já estão em DECISIONS.md)\n- Quebra em passos pequenos e ordenados, cada um entregável e testável\n- Arquivos que cada passo toca (cheque Arquivos Críticos em CONTEXT)\n- Riscos e onde provavelmente vai dar trabalho\n- O que fica fora de escopo nesta rodada\n\nSe o projeto usa ROADMAP, diga onde esta feature encaixa (qual fase) e prepare o ROADMAP atualizado. Não comece a codar até eu confirmar o plano.`
    },
    { id:"K", title:"Auditar antes de mexer numa peça crítica", when:"Vou tocar num arquivo/sistema sensível e não quero quebrar o que funciona.",
      fill:"area", fillLabel:"O que vou mexer + o que pretendo mudar",
      body:(p,n)=>`Auditoria pré-mudança.\n\nALVO:\n${p.area||"[Arquivo/sistema que vou tocar + a mudança pretendida]"}\n\nAntes de qualquer edição:\n- Releia em CONTEXT.md a seção «como funciona» relevante e a lista de Arquivos Críticos\n- Liste o que depende desta peça (quem chama, quem é afetado se ela mudar)\n- Liste as Armadilhas Conhecidas que tocam esta área\n- Aponte o que pode quebrar em silêncio (sem erro óbvio)\n- Proponha a ordem mais segura de mudança + como verificar cada passo\n\nSó depois disso, proponha o diff. Se o risco for alto, sugira fazer em incrementos verificáveis em vez de um salto.`
    }
  ]
};