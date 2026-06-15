NICHES.client = {
  id:"client", label:"Gestão Cliente", icon:"◎", group:"serif", category:"core",
  cardColor:"#2dd4bf", cardTags:["agência","freelance","atendimento"],
  cardDesc:"Relação, acordos, escopo, entregas — manter o fio da meada",
  intro:{
    headline:"Quem disse o quê, em que dia, e o que ficou combinado.",
    lede:"O risco aqui não é técnico — é interpessoal e de escopo. \"Tinha ficado combinado outra coisa\", \"você falou que ia ficar pronto sexta\", \"isso não foi pedido\". Aqui os acordos viram registro, o escopo fica explícito (com rodadas e exclusões), e cada nova conversa começa sabendo onde está a relação.",
    ctxBlurb:"<code>CLIENTE.md</code> guarda quem é e como ele dá feedback · <code>PROJETO.md</code> fixa escopo, rodadas e exclusões · <code>ACORDOS.md</code> registra o combinado · <code>STATUS.md</code> mostra o agora (e com quem está a bola).",
    hero:"client"
  },
  topbar:[
    {id:"client", label:"Cliente", placeholder:"ex: Café Azul Ltda."},
    {id:"project", label:"Projeto", placeholder:"ex: rebranding-2026"},
    {id:"phase", label:"Fase", type:"select", options:["Prospecção","Onboarding","Execução","Revisão","Entrega","Pós-entrega"]},
  ],
  behaviors:[
    ["dualview","Atua como profissional E como cliente-final","Avalia o trabalho com dois olhares: o do prestador (qualidade técnica, escopo, viabilidade) e o de quem vai receber/usar o resultado. Aponta o que o cliente provavelmente vai sentir/reclamar antes de ele reclamar. Sem elogio falso — crítica honesta é o serviço."],
    ["feedbacksource","Distingue feedback do cliente vs. de terceiros","Clientes às vezes repassam feedback de uma IA (GPT/Gemini) ou de um conhecido como se fosse deles. Quando o feedback chega com cara de \"analisado por fora\", trata com cuidado: separa o que é a vontade real do cliente do que é sugestão de terceiro, e valida o ambíguo antes de agir."],
    ["scopeguard","Guarda o escopo com 'Yes-and', não 'No-but'","Quando um pedido extrapola o contratado, não diz \"não está no escopo\" de forma seca. Reconhece a ideia, posiciona como adicional/fase-2, e oferece caminho (orçamento extra, próxima etapa). Consulta sempre PROJETO.md (entregáveis, rodadas, exclusões) antes de classificar algo como fora de escopo."],
    ["writeitdown","Confirma o combinado por escrito","Todo acordo verbal ou decisão importante vira item em ACORDOS.md. Quando algo combinado não tem registro formal, sugere uma confirmação curta por escrito ao cliente — proteção dos dois lados."],
    ["preserve_rel","Preserva a relação ao comunicar","Antes de redigir comunicação delicada, considera o que se quer preservar na relação e qual resultado se quer de fato — não só \"o que responder\". Sinaliza se o tom pretendido pode sair pela culatra. O profissional sempre edita antes de enviar; o texto é um rascunho forte, não a palavra final."],
    ["verify_claims","Verifica afirmações técnicas antes de afirmar","Em assuntos onde um erro vira retrabalho ou promessa furada ao cliente (specs de impressão, prazos de terceiros, limites de uma ferramenta), confirma o fato por busca/consulta antes de afirmar. Não inventa correção; aponta a dúvida."],
  ],
  builderSection:{
    title:"Perfil do atendimento",
    hint:"Define como o assistente se comunica e quais riscos prioriza. Entra nas instruções.",
    type:"chips",
    groups:[
      {label:"Tom com o cliente", items:[["formal","Formal"],["semi","Semiformal"],["casual","Descontraído"],["technical","Técnico"]]},
      {label:"Canal principal", items:[["email","E-mail"],["whats","WhatsApp"],["meeting","Reuniões"],["mix","Misto"]]},
      {label:"Tipo de serviço", items:[["design","Design"],["dev","Desenvolvimento"],["content","Conteúdo"],["consulting","Consultoria"],["marketing","Marketing"],["other","Outro"]]},
      {label:"Modelo de cobrança", items:[["fixed","Preço fechado"],["hourly","Por hora"],["retainer","Retainer/mensal"],["phased","Por fases"],["value","Por valor"]]},
      {label:"Relação", items:[["oneoff","Projeto único"],["recurring","Recorrente"],["agency","Sou agência (vários)"],["subcontract","Subcontratado"]]},
    ],
    other:false
  },
  conventions:[
    "Acordos verbais viram registro escrito em ACORDOS.md no mesmo dia — não basta \"a gente combinou\".",
    "Escopo (entregáveis, rodadas de revisão, exclusões) vive em PROJETO.md e é a referência para julgar pedidos novos.",
    "Comunicação ao cliente é sempre rascunho forte; o profissional edita e envia. O assistente não fala com o cliente.",
    "STATUS sempre diz com quem está a bola (cliente ou prestador) e qual o próximo passo + prazo.",
    "Feedback ambíguo ou de origem incerta (IA do cliente, terceiros) é validado antes de virar trabalho.",
    "Afirmação técnica que vira promessa ao cliente é verificada antes de sair."
  ],
  triggersExtra:[
    ["Reunião ou conversa importante", "Entrega ACORDOS.md e STATUS.md completos (acordos novos, riscos, pendências geradas)."],
    ["Pedido que extrapola o contratado", "Entrega ACORDOS.md completo (pedido + resposta proposta) e o rascunho de comunicação 'Yes-and'."],
    ["Entrega feita ou versão aprovada", "Entrega ENTREGAS.md completo (versão, data, status) e CHANGELOG da relação se usar."],
    ["Mensagem-chave enviada ao cliente", "Entrega COMUNICACOES.md completo com o texto final registrado (quando o projeto usa esse arquivo)."],
    ["Valor cotado / fatura / pagamento", "Entrega FINANCEIRO.md completo (quando o projeto usa esse arquivo)."],
  ],
  contextFiles:[
    {name:"CLIENTE.md", cat:"ctx", role:"Quem é o cliente: perfil, como se comunica, como dá feedback, sensibilidades, o que evitar. Estável.", content:`# CLIENTE.md — [Nome do Cliente]

> Arquivo **estável**. O assistente lê no início para acertar o tom e antecipar atritos.
> Atualize quando aprender algo novo sobre como o cliente funciona — não a cada mensagem.

---

## Quem é
- **Nome / empresa:** [...]
- **Papel de quem decide:** [a pessoa que aprova é a mesma que pediu? há um chefe por trás?]
- **Negócio dele:** [o que faz; ajuda a entender o que ele valoriza]
- **Nível de familiaridade técnica:** [leigo / intermediário / sabe do assunto]

## Como se comunica
- **Canal preferido:** [e-mail / WhatsApp / reunião]
- **Ritmo de resposta:** [rápido / some por dias / responde fora do horário]
- **Estilo:** [direto / prolixo / muda de ideia / decide por impulso]

## Como dá feedback (importante)
- **Forma:** [específico / vago / "não gostei" sem dizer porquê]
- **Usa IA ou terceiros?** [se ele repassa análise de GPT/Gemini ou de um conhecido como se fosse dele — anote. Tratar esse feedback com cuidado: separar a vontade real dele da sugestão de fora.]
- **O que realmente importa pra ele:** [a dor de fundo. Ex.: "legibilidade pra clientes mais velhos", não "estética". Palavras dele entre aspas quando der.]

## Sensibilidades / o que evitar
- [Assuntos delicados, gatilhos, coisas que irritam. Ex.: não gosta de ser corrigido na frente de outros; reage mal a "isso não dá".]

## Histórico da relação
- [Como começou; projetos anteriores; momentos de atrito e como foram resolvidos.]
`},
    {name:"PROJETO.md", cat:"ctx", role:"O projeto ativo: objetivo, escopo, entregáveis, rodadas de revisão e — crucial — o que NÃO está incluído. Estável dentro do projeto.", content:`# PROJETO.md — [Nome do Projeto]

> Arquivo **estável** dentro do projeto. É a referência para julgar se um pedido novo está dentro ou fora do contratado.
> Mude só em alteração real de escopo (e isso vira acordo em ACORDOS.md).

---

## Objetivo
[O que este projeto entrega ao cliente, em 1-3 frases. O resultado, não as tarefas.]

## Entregáveis (o que está incluído)
- [Entregável concreto 1 — formato/quantidade. Ex.: "1 cardápio A3, frente e verso, PDF para impressão".]
- [Entregável 2]
- [...]

## Rodadas de revisão contratadas
- **Número de rodadas:** [ex.: 2 rodadas de ajuste após a primeira versão]
- **O que conta como rodada:** [definição, para não virar revisão infinita]
- **Rodadas já usadas:** [ex.: 1 de 2]

## O que NÃO está incluído (exclusões)
> A seção mais importante para conter scope creep. Liste o que o cliente pode achar que está incluso mas não está.
- [Ex.: versões para redes sociais; impressão física; novas fotos; mais de N rodadas.]

## Prazo e marcos
- [Marco — data combinada — status]

## Modelo de cobrança e valor
- [Preço fechado / por hora / fase — valor — condições de pagamento. Detalhe financeiro completo em FINANCEIRO.md se usar.]

## Referências do cliente
> Distinga referência de CONTEÚDO (usar o texto/dados) de referência de ESTILO (usar o visual). Anote qual é qual para não confundir.
- [Referência — é conteúdo ou estilo?]
`},
    {name:"ACORDOS.md", cat:"ctx", role:"Tudo que foi combinado, aprovado ou prometido — verbal ou escrito. A memória formal da relação. CRESCE.", content:`# ACORDOS.md — Registro de Combinados

> Arquivo que **cresce**. Cada coisa combinada vira um item datado. É a defesa contra "tinha ficado combinado outra coisa".
> Inclui: aprovações, mudanças de escopo, promessas de prazo, decisões de design/conteúdo aceitas pelo cliente.

---

## Como usar
Cada acordo recebe data e status. Mudança de escopo aprovada também entra aqui (e atualiza PROJETO.md).

---

## AC-[N] — [O que ficou combinado, em uma linha]
**Data:** AAAA-MM-DD · **Como:** [reunião / e-mail / WhatsApp / ligação]
**Detalhe:** [o que exatamente foi acordado.]
**Status:** [confirmado por escrito / só verbal — pedir confirmação / cumprido]
**Impacto:** [muda escopo? prazo? valor? Se muda, atualizou PROJETO.md/FINANCEIRO.md?]

---

## AC-[N+1] — [...]
[...]

---

## Pendências de confirmação
> Coisas combinadas só na conversa, sem registro formal. Sugerir confirmação por escrito.
- [ ] [Acordo verbal X — enviar confirmação ao cliente.]
`},
    {name:"STATUS.md", cat:"ctx", role:"O estado da relação agora: próxima ação, com quem está a bola, prazo, risco. Rolante — o resolvido sai.", content:`# STATUS.md — Estado da Relação

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde a relação está e o que fazer em seguida.
> Item resolvido sai daqui (vira entrega em ENTREGAS, ou nota no log).

---

## Fase atual
[Prospecção / Onboarding / Execução / Revisão / Entrega / Pós-entrega]

## 🎾 Com quem está a bola
[**Prestador** — preciso fazer X / **Cliente** — esperando ele responder/aprovar Y desde DATA.]

## Próxima ação + prazo
- [O próximo passo concreto + data. De quem é.]

## ⚠️ Riscos / atritos ativos
- [Cliente sumido há N dias; rodada de revisão quase no limite; promessa de prazo apertada; feedback contraditório pendente de esclarecer.]

## Aguardando do cliente
- [Aprovação / material / resposta — desde quando.]

## 💬 Última interação
**[data]** — [o que rolou + onde parou + próximo passo óbvio. Primeira coisa que o assistente lê para retomar.]
`},
    {name:"ENTREGAS.md", cat:"hist", role:"Histórico de entregas, versões e aprovações. CRESCE — registro do que já saiu.", content:`# ENTREGAS.md — Histórico de Entregas

> Arquivo que **cresce**. Cada versão entregue e cada aprovação ficam registradas, com data.
> Útil para provar o que foi entregue e quando, e para ver quantas rodadas já rolaram.

---

## [Entregável] — v[N]
**Enviado em:** AAAA-MM-DD · **Como:** [link / anexo / PDF]
**O que mudou desde a versão anterior:** [resumo.]
**Resposta do cliente:** [aprovou / pediu ajustes (quais) / sem resposta desde DATA.]
**Rodada de revisão:** [ex.: usou a 1ª de 2.]

---

## [Entregável] — v[N+1]
[...]

---

## Marcos de pagamento (se atrelados a entrega)
- [Entrega X → fatura Y → status.]
`},
    {name:"COMUNICACOES.md", cat:"opcional", role:"OPCIONAL — registro do texto final das mensagens-chave enviadas ao cliente. Use quando a comunicação é sensível ou frequente.", content:`# COMUNICACOES.md — Mensagens-Chave Enviadas

> **Opcional.** Use quando a relação tem comunicação delicada ou muitas trocas que vale guardar.
> Registra o texto FINAL que foi ao cliente (após você editar) — para manter consistência de tom e ter histórico do que foi dito.

---

## [Assunto] — AAAA-MM-DD
**Canal:** [e-mail / WhatsApp] · **Objetivo:** [aprovar / avisar atraso / propor fase 2 / cobrar]
**Texto enviado:**
\`\`\`
[O texto final, como foi enviado.]
\`\`\`
**Resultado:** [resposta do cliente / efeito.]

---

## [Assunto] — AAAA-MM-DD
[...]
`},
    {name:"FINANCEIRO.md", cat:"opcional", role:"OPCIONAL — valores cotados, faturas, pagamentos. Use quando há mais de uma cobrança ou risco de esquecer o que foi cotado.", content:`# FINANCEIRO.md — Valores e Pagamentos

> **Opcional.** Use quando o projeto tem múltiplas cobranças, fases pagas, ou histórico de valores que é fácil esquecer ("quanto cotei mesmo?").
> Mantenha factual. Não substitui contrato/nota fiscal — é a memória de trabalho.

---

## Valores acordados
- **Escopo base:** [valor + condição de pagamento.]
- **Adicionais aprovados:** [item — valor — quando.]

## Faturas / cobranças
| # | Referente a | Valor | Emitida | Vencimento | Status |
|---|---|---|---|---|---|
| 1 | [...] | [...] | [...] | [...] | [paga / pendente / vencida] |

## Cotações em aberto (não fechadas)
- [O que foi cotado mas o cliente ainda não aprovou — valor + data da cotação.]

## Notas
- [Combinados sobre forma de pagamento, parcelamento, etc.]
`},
    {name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de sessão. Referência fixa — nunca substituído.", content:`# LOG-TEMPLATE.md — Formato do Log de Sessão

> **Referência fixa.** Este é o MOLDE — não é substituído.
> Ao final de uma sessão de trabalho sobre o cliente, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido neste formato. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Cliente]

## Foco da sessão
[O que se trabalhou: revisão, comunicação, planejamento, etc.]

## Interações com o cliente
- [Conversas/mensagens que aconteceram ou foram preparadas.]

## Acordos novos
- [O que virou item em ACORDOS.md.]

## Escopo
- [Algum pedido tocou o limite do escopo? Como foi tratado?]

## Entregas
- [O que foi enviado/aprovado → ENTREGAS.md.]

## Riscos / atritos
- [O que apareceu na relação que merece atenção.]

## Onde parei
[Estado da relação ao encerrar + próximo passo + com quem está a bola. Alimenta o STATUS.]
`}
  ],
  outputs:[
    {key:"status", name:"STATUS.md", role:"completo: estado da relação, com quem está a bola, próxima ação", active:true},
    {key:"acordos", name:"ACORDOS.md", role:"completo, com novo acordo se algo foi combinado", active:true},
    {key:"entregas", name:"ENTREGAS.md", role:"completo, se houve entrega ou aprovação", active:false},
    {key:"comunicacoes", name:"COMUNICACOES.md", role:"completo, se uma mensagem-chave foi enviada (quando usa o arquivo)", active:false},
    {key:"financeiro", name:"FINANCEIRO.md", role:"completo, se houve cotação/fatura/pagamento (quando usa o arquivo)", active:false},
    {key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true},
  ],
  promptsExtra:[
    { id:"G", title:"Onboarding de cliente novo", when:"Primeiro contato — montar perfil do cliente e escopo claro.",
      fill:"context", fillLabel:"Tudo que sabe sobre o cliente e o pedido (cole conversa, e-mail, briefing)",
      body:(p,n)=>`Onboarding de um cliente novo${p.client?` (${p.client})`:""}.\n\nCONTEXTO:\n${p.context||"[Cole a conversa inicial, e-mail, briefing recebido, tudo o que sabe]"}\n\nEntregue (arquivos completos):\n- CLIENTE.md com o perfil percebido — marque claramente o que é DEDUÇÃO vs. FATO; preste atenção em como ele dá feedback e se parece usar IA/terceiros\n- PROJETO.md com escopo, entregáveis, e principalmente o que NÃO está incluído + número de rodadas de revisão\n- Lista de perguntas críticas a fazer antes de fechar (escopo, prazo, quem aprova, forma de pagamento)\n- Rascunho de e-mail de retorno (proposta de continuação) — lembrando que é rascunho, você edita antes de enviar\n\nSinalize qualquer zona cinza de escopo que valha travar agora, antes de começar.`
    },
    { id:"H", title:"Registrar reunião ou conversa", when:"Depois de uma call, reunião ou troca importante.",
      fill:"transcript", fillLabel:"Transcrição, anotações ou resumo do que aconteceu",
      body:(p,n)=>`Registrar uma interação importante com o cliente.\n\nO QUE ACONTECEU:\n${p.transcript||"[Cole transcrição, anotações, ou descreva o que foi conversado]"}\n\nFaça:\n1. Separe o que virou ACORDO (entra em ACORDOS.md, com status verbal/escrito) do que foi só conversa\n2. Identifique riscos novos para a relação (vão para STATUS.md)\n3. Liste pendências geradas — para você e para o cliente — e com quem fica a bola\n4. Aponte o que foi combinado só verbalmente e merece confirmação por escrito (sugira o texto curto)\n5. Se algo tocou o escopo, diga e atualize PROJETO.md\n\nEntregue ACORDOS.md e STATUS.md completos e atualizados.`
    },
    { id:"I", title:"Pedido que extrapola o escopo", when:"Cliente pediu algo que parece sair do contratado.",
      fill:"request", fillLabel:"O que o cliente pediu (cole as palavras dele)",
      body:(p,n)=>`O cliente fez um pedido que parece sair do escopo. Quero conter sem soar seco nem dizer "não".\n\nPEDIDO LITERAL:\n${p.request||"[Cole exatamente o que o cliente disse]"}\n\nAvalie, consultando PROJETO.md (entregáveis, rodadas, exclusões):\n1. Realmente está fora do escopo? Ou é zona cinza? Ou está dentro e eu que travei à toa?\n2. Se está FORA: rascunhe resposta no espírito "Yes-and" — reconhece a ideia, posiciona como adicional ou fase-2, oferece caminho (orçamento extra / próxima etapa, com novo prazo). Tom positivo, limite firme.\n3. Se é ZONA CINZA: rascunhe resposta que pede esclarecimento sem soar defensivo.\n4. Se já estamos no limite de rodadas de revisão, mencione isso com gentileza.\n\nEntregue ACORDOS.md completo (registrando o pedido e a resposta proposta). O texto é rascunho — eu edito antes de enviar.`
    },
    { id:"J", title:"Escrever comunicação ao cliente", when:"Preciso mandar e-mail/mensagem e quero o texto certo para a relação.",
      fill:"goal", fillLabel:"O que preciso comunicar + qual resultado quero + o que quero preservar na relação",
      body:(p,n)=>`Preciso comunicar algo ao cliente${p.client?` (${p.client})`:""}. Antes de escrever, pense na relação, não só no texto.\n\nOBJETIVO E CONTEXTO:\n${p.goal||"[Ex.: avisar de atraso / pedir aprovação / propor fase 2 / cobrar fatura. + o resultado que quero + o que não quero estragar na relação]"}\n\nFaça:\n- Leia CLIENTE.md para acertar o tom e antecipar como ele vai reagir\n- Diga em uma linha qual é o resultado que esta mensagem precisa produzir\n- Se meu instinto/tom puder sair pela culatra, sinalize antes\n- Escreva o rascunho (pronto para eu editar e enviar)\n- Se houver risco de mal-entendido, dê uma versão alternativa mais cautelosa\n\nLembre: você não fala com o cliente; entrega o rascunho. Eu edito e envio.`
    },
    { id:"K", title:"Interpretar feedback ambíguo do cliente", when:"Cliente mandou um feedback vago, contraditório, ou que parece vir de fora (IA/terceiro).",
      fill:"feedback", fillLabel:"O feedback do cliente, como ele mandou (cole literal)",
      body:(p,n)=>`O cliente mandou um feedback que preciso interpretar antes de executar.\n\nFEEDBACK LITERAL:\n${p.feedback||"[Cole o que o cliente escreveu/disse, sem editar]"}\n\nAnalise (atue como profissional E como o cliente-final):\n- O que ele provavelmente QUER de fato (a dor por trás), vs. a solução que ele propôs\n- Parece vir dele ou de uma IA/terceiro? (jargão estranho, contradição com o que ele costuma dizer) — se sim, trate com cuidado\n- Onde o feedback é contraditório ou incompatível com o escopo (PROJETO.md) ou com decisões já aprovadas (ACORDOS.md)\n- O que dá para aplicar já, e o que precisa ser esclarecido antes\n\nProponha: (a) o que executar agora, (b) as 1-2 perguntas de esclarecimento que valem fazer (como dúvida, não como objeção), e (c) se algo conflita com escopo, como sinalizar. Não invente correção para o ambíguo — pergunte.`
    },
    { id:"L", title:"Preparar conversa difícil", when:"Tem um assunto espinhoso (atraso meu, erro, cliente insatisfeito, renegociar) e quero chegar preparado.",
      fill:"situation", fillLabel:"A situação difícil + o que está em jogo + o resultado que eu quero",
      body:(p,n)=>`Tenho uma conversa difícil com o cliente pela frente e quero preparar.\n\nSITUAÇÃO:\n${p.situation||"[Ex.: vou atrasar a entrega / errei algo / cliente está insatisfeito / preciso renegociar prazo ou valor. + o que está em jogo + o resultado que eu quero]"}\n\nMe ajude a preparar, consultando CLIENTE.md:\n- Qual o resultado realista que quero desta conversa (e o que quero preservar na relação)\n- Como o cliente provavelmente vai reagir, dado o perfil dele\n- O enquadramento honesto (assumir o que for meu sem me rebaixar; nada de desculpa excessiva)\n- 2-3 formas de abrir o assunto, da mais direta à mais cuidadosa\n- O que NÃO dizer (o que pioraria)\n- Se for atraso/erro meu: como propor solução junto com o reconhecimento\n\nEntregue como preparação + um rascunho de mensagem (se for por escrito). Eu decido o tom final e envio.`
    },
  ]
};