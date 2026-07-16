# ANÁLISE — Refino do nicho Narrativa (a partir de feedback de campo)

> **Destino:** `meta/analises/260716-ANALISE-REFINO-NARRATIVE.md`
> **Raia:** Chat (análise; ainda **não** é spec). **Data:** 2026-07-16. **Base:** v1.70.0.
> **Método:** estudo dos 4 projetos reais que usaram o nicho (`Feedback novel`, 70 arquivos, ~244k tokens) + `feedback_novel.txt` (síntese do usuário). Fonte de maior sinal: as seções «Feedback para o Kit» dos quatro `IDEAS.md`. Achados de código conferidos no `index_template.html`/`narrative.js` do mount — nada aqui é suposição sem lastro (P13).

---

## 0. Panorama

Os quatro projetos (`I will die before the game story start`, `My Little Lady`, `My mother is the final boss of a game`, `Rascunho de um Despertar`) já **auditaram o próprio feedback contra a leva v2 (2026-07-04)**. A maior parte do que pediram **já foi incorporada** (skills `escrita-serial`/`checagem-continuidade`/`textura-mundo`/`voz-calibragem`, gatilho triplo, lista negativa, teto de poder, modo Direção Criativa, etc.). Este refino ataca **o resíduo em aberto** + **um bug de geração que ninguém tinha diagnosticado na raiz**.

Classifiquei tudo em três donos: **(A) bug de base/gerador**, **(B) nicho narrativa** (`narrative.js`), **(C) universal → CEREBRO/base** (nasceu na narrativa, mas vale para todo nicho). Ferramentas irmãs (FlatDrop/ASU) ficam registradas à parte.

---

## A. BUG DE BASE — o ritual gerado omite a BÍBLIA (mais grave que o «choque CONTEXT»)

O `feedback_novel.txt` relatou como **cosmético** o choque da linha do ASU citando `CONTEXT`, um arquivo que a narrativa não gera. Ao rastrear a raiz, o problema é **maior e silencioso**:

O resolvedor do «doc de contexto» usa uma **regex de nome de arquivo**:
`/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i` (em `index_template.html`, no `readOrder` do ritual das Instruções ~L2243 e no `ctxF` do CEREBRO ~L2373).

**`BIBLIA` não casa essa regex** (conferido: `NAO`). Consequência para a narrativa:

1. **O ritual gerado NÃO manda ler a BIBLIA.** `readOrder` cai para `CEREBRO → STATUS` — a bíblia da obra, arquivo-âncora de todo o nicho, some da ordem de leitura tanto nas Instruções quanto no CEREBRO. O nicho inteiro é construído em torno de «consultar a bíblia antes de inventar», e o ritual gerado nunca aponta para ela.
2. **Choque cosmético (o que foi relatado):** duas linhas do modo ASU cravam o literal `CONTEXT` (`~L2250`: «doc de heading estável (DECISIONS/CONTEXT)»; `~L2574`: «(DECISIONS.md, CONTEXT.md, GLOSSARY)») e o ritual do Code (`~L2926`) cita `meta/CONTEXT.md`. A narrativa não tem CONTEXT.md → o leitor recebe instrução para um arquivo que não existe.

**Direção proposta (detalhe fica na spec):** parar de adivinhar o arquivo-âncora por regex de nome. Cada nicho **declara** seu doc de contexto explicitamente — p.ex. um campo `anchorDoc:"BIBLIA.md"` (ou marcar o `contextFiles` primário com `anchor:true`). O ritual e o CEREBRO emitem **o nome resolvido**; as linhas do ASU trocam o literal `CONTEXT` por «o doc de contexto do projeto» resolvido. **Guarda nova (check G):** para todo nicho, (i) o `readOrder` do ritual contém o `anchorDoc` declarado; (ii) a saída não cita nenhum `*.md` que não esteja no conjunto de arquivos daquele nicho. Isso impede a regressão em qualquer nicho futuro cujo âncora não se chame «CONTEXT».

**Impacto além da narrativa:** todo nicho cujo doc-âncora não bate a regex sofre a mesma omissão. Vale varrer os 18 (game=`JOGO` casa; rpg/música/etc. a conferir) — a correção é de base, resolve para todos.

> Prioridade **ALTA**: é a única entrada que degrada o produto no uso real, não só documentação a completar.

---

## B. NICHO NARRATIVA — mudanças em `narrative.js`

### B1. Cinco erros nomeados novos para a skill `checagem-continuidade`
Hoje a skill nomeia 6 erros (capability bleeding, vazamento de metadado, vocabulário de mecânica, metáfora repetida em POV paralelo, drift cognitivo, beat silencioso). Os projetos, em produção, nomearam mais — cada um vindo de um FIX real:

| Erro nomeado | Definição operacional | Fonte |
|---|---|---|
| **Narração hedgeando o próprio POV** | O POV sempre sabe o que ele mesmo fez/disse/quis. «provavelmente», «não tinha certeza do que tinha dito» sobre si é falso; incerteza só é legítima sobre a **reação/intenção do OUTRO**. | My Little Lady, FIX-006 |
| **Vazamento de familiaridade cedo demais** | Capítulo-ponte logo após um marco (1º encontro, 1º dia) importa linguagem de rotina/intimidade («como sempre», «ele já tinha me mostrado») que só se sustenta muito depois — em geral por reaproveitar frases do capítulo SEGUINTE. Variante **temporal** do capability bleeding. | My Little Lady, FIX-007 |
| **Transição ausente disfarçada de economia** | Cena nova (sobretudo abrupta) sem a frase mínima de ambientação (onde/quando/o que acontecia). Prosa econômica corta adjetivo e explicação de emoção — **nunca** a orientação básica da cena. | My Little Lady, FIX-008 |
| **Eco não verificado** | Corrigir um fato canônico num arquivo sem **buscar ativamente** reafirmações do mesmo fato (parafraseadas, não citadas) nos outros arquivos. Regra-mãe: **fonte única, eco citado** — o fato mora num lugar mestre; os outros citam, não reparafraseiam. | My mother, DEC-007 |
| **Craft afirmado sem verificação** | Apresentar uma «regra de ofício» como consenso estabelecido sem pesquisar (ex.: «brevidade abrupta é o próprio ponto»). É o P13 aplicado dentro da escrita. Cabe como nota curta, não erro pleno. | My Little Lady, FIX-008 |

### B2. `escrita-serial` — passo PRÉ novo: «a cena já existe?»
O PRÉ manda reler o capítulo anterior, mas **não** manda checar se a cena prestes a ser escrita **já existe** em algum arquivo do Projeto. Custo real: uma cena aprovada foi reescrita do zero. Adicionar à fase PRÉ um passo explícito de busca por cena existente. (My mother, FIX-001.)

### B3. `escrita-serial` — bloco «processando notas de revisão do autor»
Padrão de erro em dois sentidos: aplicar notas do autor **literalmente demais** (colar no ponto exato mencionado, mesmo fora de ordem, mesmo quando a nota era raciocínio e não prosa) **e** processar parcialmente notas longas (19 pontos numerados absorvidos pela metade). Mesma causa: falta um passo «**interpretar antes de transcrever**». Checklist proposto: o que é para a cena vs. para o entendimento do assistente · ordem cronológica correta · nunca dramatizar mecânica em momento de ação. (I will die, princípios 21-23.)

### B4. Gatilho «Capítulo/cena concluída **OU REVISADA**»
O gatilho triplo dispara na escrita nova, mas **revisão de capítulo existente** dispara o mesmo dever — e não estava explícito. Custo: um Cap. 3 corrigido (v1→v2) ficou 3 sessões com STATUS/DECISIONS/CONTINUIDADE/ENREDO descrevendo como pendente algo já resolvido. Reescrever a linha do `triggersExtra` e da skill para «concluída **ou revisada**». (My Little Lady, FIX-005.)

### B5. `textura-mundo` (ou `escrita-serial`) — eco físico vs. eco comportamental
Recurso para cenas de **reconhecimento tardio de parentesco/identidade**: distinguir a herança **visível** (eco físico — traço, gesto) da **invisível** (eco comportamental — tique, valor, reação). Reutilizável para qualquer obra com revelação de parentesco/identidade. Nunca entrou em template. (My Little Lady, 2026-06-13.)

### B6. Template CONTINUIDADE — rascunho bruto vs. canônico + retcon
Para obras com muita reescrita: uma tabela «Rastreamento de fontes brutas» (nota crua já extraída) e a regra de retcon — **CONTINUIDADE guarda só a verdade atual; o histórico da mudança vai para ENREDO/DECISIONS**. Avaliar como seção opcional no template de CONTINUIDADE. (My mother, DEC-006.)

### B7. Verificar (talvez já resolvido) — onde «A obra» é definida
Um projeto relatou que «A obra» era referenciada mas nunca ancorada num arquivo; resolveu pondo a seção nas Instruções do Projeto. **O KCM já injeta o `builderSection` «A obra» nas Instruções** — provavelmente o projeto não usava o builder atual. Ação: **confirmar na saída gerada** que o enquadramento («modo de colaboração», gênero, POV) aparece nas Instruções; se sim, item fecha sem código. (My mother.)

---

## C. UNIVERSAIS — nasceram na narrativa, mas o dono é o CEREBRO/base

Estes reaparecem em 2+ projetos e o `feedback_novel.txt` cobra explicitamente. Não são do nicho — subir para a fundação vale para os 18.

- **C1. Regra do «pedido composto».** Mensagem com vários pedidos empilhados → enumerar fases, executar o que não bloqueia, parar só na decisão bloqueante. Pedida por 2 projetos (2026-06-17/06-20), veio do kit-irmão, **nunca entrou no CEREBRO v2**. Candidata a extensão do Princípio 10 (cadência). *Nota meta: a própria mensagem de abertura desta sessão é um pedido composto.*
- **C2. «Nunca pedir nome isolado — sempre 2-4 opções fundamentadas» como princípio universal.** Hoje só existe **implícito** dentro do modo Direção Criativa (P17). Decidir nome errado custa retrabalho **em qualquer modo**. Promover a convenção geral.
- **C3. «Ideias do autor como conselho, não comando» — generalizar.** Também amarrado só ao modo Direção Criativa. O autor dá conselho tanto num rascunho quanto numa versão final; a regra deve valer independente do modo.
- **C4. Risco de gênero gramatical em rename.** Find-replace cego de um termo de sistema quebra concordância quando o gênero muda (ex.: «Assentamento» m. → «Consolidação» f.). Vale para qualquer kit em língua com gênero gramatical — nota nas convenções de estilo/grafia, não só na narrativa. (FIX-003.)
- **C5. Instruções curtas ↔ CEREBRO completo dessincronizam.** Quando uma customização estrutural entra no CEREBRO, a versão curta (Instruções do Projeto) fica para trás e chega a **contradizer** o CEREBRO. Pedido: lembrete/mecanismo de regeneração. Cruza com o G19 atual («refino das Instruções») — avaliar se vira um adendo lá.
- **C6. Verificação outcome-based ao retomar «pendente».** Reler o arquivo real antes de confiar no status. **Provavelmente já coberto** pelo P8 do KCM («STATUS é pista, não fato») — confirmar e, se coberto, marcar como fechado sem código.

---

## D. MODO À PARTE — ingestão de acervo pré-existente

**D1. Modo «migração/extração de acervo pré-existente».** Playbook da Fase 1 de um dos projetos: ler ~150 arquivos retalhados, **sinalizar contradição sem decidir sozinho**, «informar arquivo esgotado → autor move → repete». Acompanha uma convenção de pasta: `Arquivados/` (temporária, gitignorada, apagada ao fim) **distinta** de `notas-arquivadas/` (permanente) — a confusão entre as duas já custou o «desaparecimento» de planilhas .xlsx inteiras (FlatDrop filtrou o que estava em pasta gitignorada). É **universal** (qualquer nicho pode herdar acervo) e **distinto** do prompt D atual («Adotar o KCM num projeto em andamento»), que trata de adotar o *sistema*, não de ingerir *conteúdo* bruto. Candidato a modo/prompt próprio — escopo maior, merece análise dedicada.

---

## E. Fora do nicho (registrar para as ferramentas irmãs)

- **FlatDrop:** ao achatar, emitir resumo «N arquivos ignorados por `.gitignore`» (contagem + regra que casou), para o autor perceber na hora se algo relevante ficou de fora. (I will die.)
- **ASU:** o CEREBRO template deveria avisar que o ASU **não cobre `.docx`**. (My mother.)

---

## F. Já incorporado (não refazer — conferência de diligência)
Modo Direção Criativa (P17) · gatilho triplo com busca ATIVA · lista negativa + pergunta-oráculo · capability bleeding / vazamento de metadado / vocabulário de mecânica nomeados · teto de poder no BIBLIA · três camadas de elenco + retecer + checklist por capítulo · espelho de erros VOZ↔invariantes · recalibrar voz contra o recente · POV negativo · imersão por diálogo direto · seção «Esclarecimento de mecânica» no GLOSSARY · «Estado atual» único em CONTINUIDADE (fonte-rápida) · CRONOLOGIA com tempo relativo · `.claude/skills/<nome>/SKILL.md`.

---

## G. Sequenciamento proposto (a decidir com o usuário antes de qualquer spec)

1. **Spec 1 — base (prioridade ALTA):** corrigir o resolvedor do doc-âncora (declaração explícita por nicho) + literais `CONTEXT` + check-guarda. Varre os 18 nichos. *Toca `index_template.html` → harness obrigatório.*
2. **Spec 2 — nicho narrativa:** B1 (5 erros nomeados) + B2 + B3 + B4 + B5, com harness a 18 nichos. Vigiar o **teto de instrução**: o `N[narrative]` já está em 6688/6900 (folga de 212 chars) — a maioria de B vai nas **skills** (carregadas sob demanda), não nas Instruções, então o teto deve aguentar; **confirmar no harness**.
3. **Depois:** C1-C5 no CEREBRO (barato, doc-only) · B6/B7 (verificação) · D1 como análise própria.

**Ponto de decisão para o usuário:** confirmar (a) começar pela **Spec 1 (base)** por ser a única que degrada o produto, ou priorizar o nicho; (b) se B1-B5 entram numa spec só ou fatiados; (c) se os universais C vão junto ou viram leva separada. **Não abro spec sem esse aval** (rito do career: análise → aval → spec).
