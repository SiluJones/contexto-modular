NICHES.cuisine = {
  id:"cuisine", label:"Cozinha", icon:"🍳", group:"serif", category:"creative",
  cardColor:"#fb7185", cardTags:["receitas","menu","restaurante"],
  cardDesc:"Receitas, técnica, menu e custo — do ratio que afina o prato à carta que fecha a conta",
  intro:{
    headline:"Do ratio que afina o prato à carta que fecha a conta.",
    lede:"O risco aqui é o conhecimento de cozinha virar bagunça: a receita que muda toda vez e nunca fica igual, o prato afinado de boca mas sem proporção anotada, a carta montada por gosto sem saber o que dá lucro. Aqui cada receita guarda o ratio e o porquê, o teste muda uma coisa por vez, e a carta é pensada por margem — não só por food cost. O cozinheiro prova; eu organizo a técnica, a estrutura e a conta.",
    ctxBlurb:"<code>CONCEITO.md</code> fixa a identidade da cozinha · <code>RECEITAS.md</code> guarda ratios e técnica afinados · <code>MENU.md</code> organiza a carta · <code>STATUS.md</code> mostra o que está em teste.",
    hero:"cuisine"
  },
  topbar:[
    { id:"project", label:"Projeto", placeholder:"ex: menu-outono-2026" },
    { id:"ctxSel", label:"Contexto", type:"select",
      options:["Restaurante","Cozinha em casa","Livro/blog de receitas","Confeitaria/padaria","Food service/escala","Catering/eventos","Food truck"] },
    { id:"refSel", label:"Tradição-base", type:"select",
      options:["Brasileira","Italiana","Francesa","Japonesa","Mexicana","Mediterrânea","Asiática (geral)","Contemporânea/autoral","Vegetariana/vegana","Confeitaria","Fusão","Outra"] },
    { id:"langSel", label:"Idioma", type:"select", opts:LANGS, default:"pt" },
  ],
  behaviors:[
    ["ratio_foundation","O ratio é a fundação","Pensa receita em PROPORÇÃO antes de quantidade fixa — saber o ratio é saber todas as variações daquela família (vinagrete 3:1 óleo:ácido; pão pela hidratação; bolo amanteigado em partes iguais). Ao desenvolver ou escalar, parte do ratio e mantém o equilíbrio. A escolha de QUAL ingrediente dentro do ratio é onde entra a personalidade do cozinheiro."],
    ["one_change","Muda uma coisa por teste","No desenvolvimento, altera uma variável por vez (um ingrediente, um tempo, uma temperatura) para saber o que fez diferença. Não empilha mudanças num teste só. Recomenda testar ao menos duas vezes antes de dar a receita como certa — a primeira versão raramente é a final."],
    ["research_informs","A pesquisa informa, não dirige","Estuda ratios, técnicas, tempos e temperaturas de fontes confiáveis para preparar o terreno — mas isso informa o desenvolvimento, não o substitui. O primeiro teste nunca é aleatório: é informado. Para combinações, raciocina por afinidade de sabor (à la Flavor Bible), não por chute."],
    ["taste_is_yours","Não cozinho nem provo — o cozinheiro prova","O assistente NÃO tem paladar: não finge saber se ficou gostoso, salgado ou no ponto. Orienta ratio, técnica, estrutura, sequência e custo — e devolve ao cozinheiro o julgamento do que só a boca decide (tempero, ponto, textura). Ajusta a receita a partir do que o cozinheiro relata ter provado, não de uma suposição de sabor."],
    ["technique_why","Técnica e o porquê (ciência do cozinhar)","Explica a técnica com o motivo por trás (por que selar dá sabor — reação de Maillard; por que descansar a carne; por que o glúten desenvolve). Liga método a resultado, para o cozinheiro entender e adaptar, não decorar passos. Técnica antes de truque: a base bem-feita resolve mais que o atalho."],
    ["cost_margin","Custo e margem importam (não só food cost)","Quando o contexto é comercial, pensa custo do prato (plate cost — ingredientes padronizados, incluindo tempero e guarnição) e, sobretudo, MARGEM DE CONTRIBUIÇÃO — não só food cost %. Um prato de food cost % mais alto pode dar mais lucro por unidade. Em carta, raciocina por engenharia de cardápio (popularidade × lucratividade) e sazonalidade real."],
    ["allergy_clarity","Alergias, restrições e clareza","Trata alergias e restrições alimentares com seriedade — sinaliza alérgenos e não os trata como detalhe. Em receita para compartilhar, preza pela CLAREZA: passos que outra pessoa consegue seguir e reproduzir. Quando possível, sugere que outra pessoa teste a receita para validar se está clara."],
  ],
  builderSection:{
    title:"O contexto da cozinha",
    hint:"Define o enquadramento. Entra nas instruções para o assistente ajustar técnica, escala e foco.",
    items:[
      { kind:"radios", label:"Escala", name:"scale", opts:[
        ["home","Caseira (1 família)"], ["small","Pequena (jantar/evento)"], ["restaurant","Restaurante (serviço diário)"], ["volume","Volume/produção"] ] },
      { kind:"radios", label:"Foco do trabalho", name:"focus", opts:[
        ["recipe","Desenvolver receita"], ["menu","Montar/ajustar menu"], ["technique","Aprender/afinar técnica"], ["cost","Custo e precificação"], ["cookbook","Livro/conteúdo de receita"] ] },
      { kind:"chips", label:"Técnicas-base em jogo", name:"tech", opts:[
        ["braise","Brasear/cozidos"], ["roast","Assar"], ["saute","Saltear/selar"], ["bake","Panificação"], ["pastry","Confeitaria"], ["ferment","Fermentação"], ["sauce","Molhos"], ["grill","Grelhar"], ["sousvide","Sous-vide"], ["raw","Cru/cura"] ] },
    ]
  },
  conventions:[
    "Receita é pensada em RATIO antes de quantidade fixa; escalar mantém a proporção e o equilíbrio.",
    "No desenvolvimento, muda-se UMA variável por teste; testar ≥2 vezes antes de dar como certa.",
    "A pesquisa de ratios/técnicas informa o primeiro teste (que nunca é aleatório), não o dirige.",
    "O assistente não tem paladar: orienta ratio/técnica/estrutura/custo; o ponto e o tempero são do cozinheiro.",
    "Técnica explicada com o porquê (ciência); técnica-base antes de truque.",
    "No comercial: plate cost + margem de contribuição (não só food cost %); carta por engenharia de cardápio e sazonalidade. Alérgenos sempre sinalizados."
  ],
  triggersExtra:[
    ["Receita afinada (ratio/técnica fechados)", "Entrega RECEITAS.md completo (ratio + método + o porquê + alérgenos)."],
    ["Menu/carta montado ou ajustado", "Entrega MENU.md completo (com notas de margem/popularidade se comercial)."],
    ["Conceito da cozinha definido", "Entrega CONCEITO.md completo atualizado."],
    ["Teste/prova registrado", "Entrega STATUS.md (e RECEITAS, se a versão mudou) com o que o cozinheiro provou e o próximo ajuste."],
    ["Análise de custo/precificação feita", "Entrega MENU.md (ou CUSTOS, se usa o arquivo) com plate cost e margem."],
  ],
  contextFiles:[
    { name:"CONCEITO.md", cat:"essencial", role:"Identidade da cozinha: o que é, para quem, tradição-base, princípios. O norte. Estável.",
      content:`# CONCEITO.md — [Nome da Cozinha / Projeto]

> Arquivo **estável**. O assistente lê primeiro para alinhar receitas e menu à identidade.
> Muda pouco: só em reorientação real do conceito.

---

## O que é esta cozinha
[A identidade em 2-4 frases. O que ela faz, para quem, o que a torna ela mesma.]

## Tradição-base e influências
- **Raiz:** [a tradição central — ex.: brasileira contemporânea, italiana regional.]
- **Influências:** [o que entra de outras cozinhas e por quê.]
- **O ponto de vista:** [o que esta cozinha defende — sazonal? regional? técnica clássica? conforto?]

## Para quem
- **Público:** [quem come aqui — restaurante? família? leitores do blog?]
- **Ocasião:** [dia a dia? celebração? refeição rápida?]
- **Restrições do público:** [alergias comuns, preferências dietéticas a respeitar.]

## Princípios da cozinha
> As regras que filtram decisões de receita e menu.
- [Ex.: "ingrediente da estação manda"; "nada de atalho que sacrifique sabor"; "tem que caber no tempo de uma noite de semana".]

## Restrições reais
- **Orçamento / custo-alvo:** [se comercial, a faixa de food cost/margem pretendida.]
- **Equipamento / espaço:** [o que a cozinha tem — condiciona o que dá para fazer.]
- **Tempo:** [quanto tempo de preparo é realista no contexto.]

## O que esta cozinha NÃO é
- [Limites de identidade — ex.: não é fine dining; não usa ultraprocessados; não é picante.]
`},
    { name:"RECEITAS.md", cat:"essencial", role:"Receitas afinadas: ratio, método, o porquê, rendimento, alérgenos. Cresce.",
      content:`# RECEITAS.md — Receitas Afinadas

> **Cresce** conforme as receitas são desenvolvidas e afinadas. Cada uma guarda o RATIO e o PORQUÊ — não só a lista de ingredientes.
> O assistente consulta para manter consistência e para escalar/adaptar sem quebrar o equilíbrio.

---

## [Nome do prato] — [estado: em teste / afinada]
**O que é / a ideia:** [a intenção do prato — a experiência que entrega.]
**Rendimento:** [quantas porções esta versão faz.] · **Alérgenos:** [glúten, lactose, oleaginosas, etc. — sempre sinalizar.]

### Ratio / proporção (a fundação)
> A proporção entre os componentes-chave — o que permite escalar e variar sem perder o equilíbrio.
[Ex.: massa 5:3 farinha:água; molho 3:1 óleo:ácido; recheio base + temperos.]

### Ingredientes (quantidades para o rendimento acima)
- [ingrediente — quantidade (peso de preferência, para precisão).]

### Método
> Os passos, com o PORQUÊ onde importa.
1. [Passo — e por que (ex.: "selar em fogo alto para Maillard = sabor").]
2. [...]

### Pontos críticos (o que decide o resultado)
- [O que mais afeta o prato; o ponto que o cozinheiro precisa julgar de boca/olho.]

### Notas de ajuste
- [O que foi mudado entre testes e o efeito; o que ainda dá para afinar.]

---

## [Próxima receita]
[...]
`},
    { name:"MENU.md", cat:"essencial", role:"A carta: pratos, estrutura, e (se comercial) margem/popularidade. Rolante-cresce.",
      content:`# MENU.md — A Carta

> A carta atual e seu raciocínio. O assistente consulta para coerência (a carta conta uma história) e, no comercial, para equilíbrio de margem.
> Reveja sazonal/trimestralmente — custos e estação mudam.

---

## Conceito da carta
[O fio que une os pratos — estação, tradição, ocasião. Por que estes pratos juntos.]

## Estrutura
> Como a carta se organiza e conduz a escolha.
- **Seções:** [entradas / principais / sobremesas / etc. — e a lógica.]
- **Nº de itens por seção:** [poucos e bem-feitos > muitos; facilita cozinha e escolha.]

## Pratos
### [Seção]
- **[Prato]** — [descrição curta (linguagem que vende sem mentir).] — [preço, se comercial.]
  - *Receita:* [→ RECEITAS.md] · *Alérgenos:* [...]

## Engenharia de cardápio (se comercial)
> Cruzar popularidade × lucratividade. Margem de contribuição importa mais que food cost %.
| Prato | Food cost % | Margem de contribuição (R$) | Popularidade | Quadrante |
|---|---|---|---|---|
| [prato] | [%] | [preço − custo] | [alta/baixa] | [estrela / enigma / cavalo de batalha / abacaxi] |

- **Estrelas (popular + lucrativo):** [destacar/proteger.]
- **Enigmas (lucrativo, pouco vendido):** [dar visibilidade/reposicionar.]
- **A rever:** [pouco popular E pouco lucrativo → ajustar ou tirar.]

## Sazonalidade / próximas trocas
- [Ingredientes da estação a aproveitar; o que entra/sai na próxima revisão.]
`},
    { name:"STATUS.md", cat:"rolante", role:"O que está em teste/desenvolvimento agora, próximos passos. Rolante.",
      content:`# STATUS.md — Em Desenvolvimento

> Arquivo **rolante**: só o AGORA. O assistente lê para saber onde retomar.
> Receita afinada sai daqui (vira entrada em RECEITAS; o estado fica lá).

---

## Foco atual
[Desenvolver receita / montar menu / afinar técnica / custo] — [o tema do momento.]

## 🔬 Em teste
- [Receita/prato sendo desenvolvido + em qual versão/teste + a variável que está mudando agora.]

## 👅 Aguardando prova
> O que precisa ser cozinhado e provado para avançar (o assistente não prova — você prova).
- [O que testar + o que observar ao provar (sal? ácido? ponto? textura?).]

## 📋 Próximos
- [ ] [Próxima receita/ajuste por prioridade.]

## ⚠️ Atenção
- [Algo destoando do conceito; custo estourando; alérgeno a revisar; receita que não está clara.]

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
    { name:"CUSTOS.md", cat:"opcional", role:"OPCIONAL — plate cost, food cost % e margem por prato. Use no contexto comercial.",
      content:`# CUSTOS.md — Custo e Precificação

> **Opcional.** Use no contexto comercial (restaurante, food service, catering). Reúne o custo real por prato e a margem.
> Regra: margem de contribuição (dinheiro no caixa) importa mais que food cost % isolado.

---

## Premissas
- **Food cost %-alvo:** [a meta do negócio — ex.: 28-32%.]
- **Fonte de preços:** [fornecedor / data da cotação — preços mudam, datar.]

## Plate cost por prato
> Padronizar a porção de cada ingrediente, incluindo tempero, óleo e guarnição.
### [Prato]
| Ingrediente | Qtd na porção | Custo |
|---|---|---|
| [item] | [qtd] | [R$] |
| **Plate cost total** | | **[R$]** |

- **Preço de venda:** [R$] · **Food cost %:** [custo÷preço] · **Margem de contribuição:** [preço − custo]

## Comparativo (a lição do bife × frango)
> Lembrete: o item de food cost % "pior" pode dar mais margem por unidade. Decidir por margem, não só por percentual.
| Prato | Food cost % | Margem (R$) | Vende muito? | Leitura |
|---|---|---|---|---|
| [A] | [%] | [R$] | [sim/não] | [...] |

## Notas de precificação
- [Ajustes ao mercado local; ancoragem (item caro que faz o resto parecer bom valor); combos/extras que elevam o ticket.]
`},
    { name:"LOG-TEMPLATE.md", cat:"ref", role:"Modelo do log de prova/desenvolvimento. Referência fixa — nunca substituído.",
      content:`# LOG-TEMPLATE.md — Formato do Log de Prova/Desenvolvimento

> **Referência fixa.** O MOLDE — não é substituído.
> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido. Logs vivem no Git, lidos sob demanda.

---

# Log — AAAA-MM-DD · [Projeto]

## Foco da sessão
[Desenvolvimento de receita, ajuste de menu, técnica, custo.]

## Testes / provas
> O que foi cozinhado e o que o cozinheiro provou (o ponto, o sal, a textura) + a variável mudada.
- [Receita — teste nº — o que mudei — o que provei — o resultado.]

## Receitas
- [O que foi afinado → RECEITAS.md (ratio/método/porquê).]

## Menu / custo
- [Mudança na carta ou no custo → MENU/CUSTOS.]

## Conceito
- [Algo mudou na identidade → CONCEITO.md.]

## Onde parei
[Estado + próximo passo (o que cozinhar/ajustar a seguir). Alimenta o STATUS.]
`}
  ],
  outputs:[
    { key:"status", name:"STATUS.md", role:"completo: em teste, aguardando prova, próximos", active:true },
    { key:"receitas", name:"RECEITAS.md", role:"completo, se uma receita foi afinada (ratio/método/porquê)", active:true },
    { key:"menu", name:"MENU.md", role:"completo, se a carta mudou", active:false },
    { key:"conceito", name:"CONCEITO.md", role:"completo, se o conceito da cozinha mudou", active:false },
    { key:"custos", name:"CUSTOS.md", role:"completo, se houve análise de custo/precificação (quando usa o arquivo)", active:false },
    { key:"log", name:"logs/AAAA-MM-DD.md", role:"log da sessão preenchido (formato em LOG-TEMPLATE.md)", active:true },
  ],
  promptsExtra:[
    { id:"G", title:"Desenvolver uma receita", when:"Quero criar/afinar uma receita partindo do ratio certo.",
      fill:"dish", fillLabel:"O prato/ideia + o que quero dele + restrições (tempo, dieta, ingrediente)",
      body:(p,n)=>`Desenvolvimento de receita.\n\nPRATO E OBJETIVO:\n${p.dish||"[O prato ou ideia + o que quero dele (sabor, textura, ocasião) + restrições: tempo, dieta, ingrediente que tenho]"}\n\nConsultando CONCEITO.md (identidade, restrições):\n- Identifique o RATIO base da família deste prato (a proporção que garante equilíbrio) — é o ponto de partida\n- A partir do ratio, proponha a primeira versão informada (não aleatória): ingredientes, quantidades (em peso de preferência), método\n- No método, explique o PORQUÊ onde importa (a ciência: Maillard, descanso, glúten, emulsão)\n- Aponte os pontos críticos — o que decide o resultado e o que VOCÊ vai precisar julgar de boca (sal, ácido, ponto, textura)\n- Sinalize alérgenos\n- Sugira UMA variável para ajustar no próximo teste, conforme o que você provar\n\nLembre: eu não provo — oriento ratio/técnica; o ponto é seu. Entregue RECEITAS.md completo (marcada como "em teste"). Recomende testar ≥2x antes de fechar.`
    },
    { id:"H", title:"Escalar / adaptar uma receita", when:"Tenho uma receita e preciso mudar o rendimento ou adaptar (dieta, ingrediente, equipamento).",
      fill:"recipe", fillLabel:"A receita atual + o que mudar (rendimento, substituição, restrição)",
      body:(p,n)=>`Escalar/adaptar receita.\n\nRECEITA E MUDANÇA:\n${p.recipe||"[A receita atual + o que preciso: dobrar/reduzir o rendimento? substituir um ingrediente? adaptar para sem-glúten/vegano? outro equipamento?]"}\n\nConsultando RECEITAS.md:\n- Se for ESCALAR: parta do RATIO para manter o equilíbrio (não basta multiplicar tudo — temperos, fermentos e líquidos podem não escalar linearmente; aponte quais)\n- Se for SUBSTITUIR: que ingrediente cumpre a mesma FUNÇÃO no ratio (gordura por gordura, ácido por ácido) e o que muda no resultado/método\n- Se for adaptar a equipamento/tempo: o que ajustar em técnica/temperatura\n- Marque o que provavelmente vai precisar de reteste (o que não é garantido só na conta)\n- Mantenha/atualize os alérgenos\n\nNão garanta sabor por suposição — aponte o que conferir provando. Entregue RECEITAS.md completo com a versão adaptada.`
    },
    { id:"I", title:"Diagnosticar um prato que não deu certo", when:"Cozinhei e algo saiu errado — quero entender o porquê.",
      fill:"problem", fillLabel:"O que fiz + o que deu errado (descreva o que provou/observou)",
      body:(p,n)=>`Diagnóstico de receita (você provou; eu interpreto pela técnica).\n\nO QUE ACONTECEU:\n${p.problem||"[O que fiz + o que deu errado: ficou seco? sem sabor? não cresceu? talhou? sem ponto? — descreva o que provou e observou]"}\n\nInvestigue pela técnica e pelo ratio, consultando RECEITAS.md:\n- O sintoma que você descreveu aponta para qual causa provável? (ex.: "seco" → tempo/temperatura altos ou pouca gordura; "não cresceu" → fermento/glúten/forno; "talhou" → temperatura/emulsão; "sem sabor" → falta de sal/ácido/dourar)\n- O ratio estava equilibrado para o resultado pretendido?\n- A técnica (tempo, temperatura, ordem) bate com o que o prato exige? por quê\n- A mudança de MENOR esforço para testar a causa mais provável primeiro\n- O que observar/provar no próximo teste para confirmar\n\nMude uma variável por vez no reteste. Eu dou as hipóteses pela técnica; a confirmação é na sua boca. Atualize RECEITAS.md se chegarmos a um ajuste.`
    },
    { id:"J", title:"Montar / ajustar um menu", when:"Quero montar uma carta ou rever a que tenho.",
      fill:"context", fillLabel:"O contexto da carta + os pratos (ou ideias) + estação/ocasião",
      body:(p,n)=>`Montagem/ajuste de menu.\n\nCONTEXTO:\n${p.context||"[O contexto (restaurante? jantar? blog?) + os pratos ou ideias + estação/ocasião + público]"}\n\nConsultando CONCEITO.md (identidade) e RECEITAS.md:\n- Encontre o FIO que une a carta (estação, tradição, ocasião) — a carta conta uma história\n- Estruture as seções e o equilíbrio entre elas (poucos itens bem-feitos > muitos; pense na carga da cozinha)\n- Equilíbrio prático: variedade de técnicas/proteínas/texturas; reaproveitamento inteligente de ingredientes entre pratos (controla custo e desperdício)\n- Aproveite a sazonalidade real\n- Descrições que vendem sem mentir; sinalize alérgenos\n- Se for comercial, aponte onde aplicar engenharia de cardápio depois (margem × popularidade)\n\nEntregue MENU.md completo. A escolha final dos pratos é sua; eu organizo e equilibro.`
    },
    { id:"K", title:"Custo e precificação", when:"Contexto comercial — quero calcular custo do prato e pensar preço/margem.",
      fill:"data", fillLabel:"O prato + ingredientes e preços que você tem + o preço atual (se há)",
      body:(p,n)=>`Custo e precificação.\n\nDADOS:\n${p.data||"[O prato + ingredientes com quantidades e preços que você tem + o preço de venda atual, se houver]"}\n\nCalcule com método, consultando CONCEITO.md (food cost-alvo) e RECEITAS.md (porções):\n- PLATE COST: custo de cada ingrediente na porção padronizada — incluindo tempero, óleo e guarnição (o que costuma ser esquecido)\n- Food cost % = plate cost ÷ preço de venda\n- MARGEM DE CONTRIBUIÇÃO = preço − custo (o dinheiro que de fato entra no caixa)\n- A leitura crucial: não decida só por food cost % — um prato de % "pior" pode dar mais margem por unidade (a lição do bife × frango). Mostre os dois números\n- Sugestões de precificação: ajuste ao mercado, ancoragem, combos/extras que elevam o ticket\n- Se algum dado de preço falta, peça — não invente cifra\n\nEntregue CUSTOS.md (ou MENU.md) completo. Os preços de mercado e a decisão final são seus.`
    },
    { id:"L", title:"Combinar sabores / criar do zero", when:"Quero explorar combinações ou criar um prato a partir de um ingrediente/ideia.",
      fill:"seed", fillLabel:"O ingrediente, sabor ou ideia de partida + a direção que imagino",
      body:(p,n)=>`Exploração de sabor.\n\nPONTO DE PARTIDA:\n${p.seed||"[O ingrediente, sabor ou ideia + a direção que imagino (uma estação, uma tradição, uma textura)]"}\n\nExplore por afinidade de sabor (raciocínio à la Flavor Bible), consultando CONCEITO.md:\n- Com o que este ingrediente combina classicamente, e por quê (afinidade aromática, contraste, equilíbrio)\n- 3-4 direções DISTINTAS de prato a partir daqui — cada uma com a ideia central e a técnica que pediria\n- Para cada direção, o ratio/estrutura base de onde começar\n- O equilíbrio a buscar (gordura, ácido, sal, doçura, textura, temperatura — os eixos que fazem um prato "fechar")\n- O que provavelmente vai exigir teste e ajuste de boca\n\nDê as direções; você escolhe e cozinha. Eu não provo — oriento a combinação e a estrutura; o veredito é seu. Se uma direção virar receita, registramos em RECEITAS.md.`
    },
  ]
};