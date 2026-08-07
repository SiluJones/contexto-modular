# ANÁLISE — Feedback de dois projetos narrativos: o método de extração e quatro defeitos confirmados

> **Status:** Em discussão
> **Data:** 260807 · **Base:** `KIT_VERSION 1.101.0` · commit `315d4bd` · manifesto FlatDrop gerado 2026-08-07 06:15 (branch `main`, limpo) · harness declarado 18/18 · 80/80 · 0 erros
> **Vira:** — · **Decisão:** —

---

## 0 · O que eu li, e com que confiança

| Fonte | Tipo | Confiança |
|---|---|---|
| `ficha-de-choque-SKILL` (*I will die*) | **artefato real** do repo | fato |
| `260805-auditoria-01` / `-02` (*I will die*) | **artefato real** (dois tickets rodados) | fato |
| `IDEAS` § «Feedback para o Kit» dos dois projetos | **artefato real** | fato |
| `CEREBRO` / `DECISIONS` dos dois projetos | **artefato real** | fato |
| `260806-HANDOFF-BRIEF` (*My Little Lady*) | **derivado de assistente** | pista |
| `260803-HANDOFF-BRIEF` (KCM) | **derivado de assistente** | pista |
| `260718-DESIGN-004-pendencias` (*MLL*) | derivado, mas com legenda original | pista + formato |
| `260805-0834.txt`, `260806-1026.txt`, `260804-1444.txt` | **nota do autor** | fato |

**A ironia vale registro:** o feedback mais forte destes dois projetos é *«documento derivado nunca é fonte»*, e metade do que eu li sobre eles são handoff briefs — derivados. Tudo que sai daqui marcado como pista precisa ser conferido contra o repo daquele projeto antes de virar WO. Os quatro defeitos da §2 **não** dependem disso: foram medidos neste mount, no código do produto.

---

## 1 · Problema

Dois projetos narrativos passaram julho e agosto fazendo a mesma coisa que o kit **não modela**: extrair worldbuilding de um acervo antigo, retalhado, contraditório, para dentro do cânone. Não é escrever. Não é revisar. É uma fase inteira, com economia própria — o que se lê, como se apresenta ao autor, quem decide o quê, e o que acontece com o que ficou esperando.

Nessa fase os dois inventaram mecanismo. Um deles virou skill de verdade (`ficha-de-choque`), rodou duas levas reais e produziu duas regras novas *no projeto que a recebeu*. O outro chegou perto de perder o autor — em `My Little Lady` o autor disse com todas as letras que estava perto de largar a obra, e o motivo não foi a história: foi o assistente apresentar conflito por referência cruzada (`CONTINUIDADE:93`, «ver DEC-025»), contando com uma memória que ele não tem.

**O kit já disse não a isto uma vez.** D-084 (spec0051, 2026-07-18) descartou o «modo de migração/extração» com este motivo: *«não precisa de modo: era organização + script Python mal-implementado + leitura incompleta de caminhos, não uma lacuna de comportamento do kit»*. **Aquele descarte continua certo para o que ele julgou.** O que chegou agora é outra coisa: não é onde os arquivos ficam — é **como um item é apresentado para o autor decidir**, e o que se faz com o que ele não decidiu. Isso é comportamento, e é exatamente o que o kit modela.

Em paralelo, e independentemente: três defeitos concretos reportados por `My Little Lady` em **2026-07-23** continuam vivos no produto **quinze dias depois**, e um deles derruba, em silêncio, duas capacidades que o kit ganhou depois disso.

---

## 2 · O que foi medido (neste mount, no código, agora)

### 2.1 — Confirmado quebrado

**(a) O `.claude/settings.json` que o kit gera é JSON inválido.**
`index_template.html:3210–3223` — depois do `}` final, a última linha do array é:

```
// Adicione seu comando de build/teste ao allow — ex.: "Bash(npm run build:*)", "Bash(npm test:*)".
```

JSON não aceita comentário. O Claude Code reporta o arquivo inteiro como malformado e **nenhuma** permissão vale. Fonte única (`buildCodeKitFiles`, retorno na linha 3250), servida ao zip do kit (`3260`) e ao pacote estruturado (`3395`) — ou seja, **todo projeto gerado com Modo Code desde sempre**.

O custo não é só o `allow`. O mesmo bloco carrega `"additionalDirectories": ["../"]`, que é a chave de que dependem **duas** frentes posteriores: o **relatório em arquivo** (D-108, v1.95.0) e a **medição delegada** (D-113, v1.100.0). As duas foram entregues em cima de uma permissão que, no arquivo gerado, nunca chegou a existir.

**(b) `Write` não está no `allow`.**
A lista é `Read, Edit, Grep, Glob` + os cinco `Bash(git …)`. Sem `Write`, o Code não cria `logs/AAAA-MM-DD.md` nem capítulo novo — e a skill `/wrap`, que o próprio kit entrega, manda fazer as duas coisas. A skill pede o que a permissão nega.

**(c) O harness nunca faz `JSON.parse`.**
`grep -c "JSON.parse" validate.js` → **0**. O único check do arquivo é `validate.js:157`, por substring: `/"permissions"/` **e** `/"deny"/`. As duas casam num arquivo quebrado. Oitenta checagens, e nenhuma abre pelo parser do formato que o kit emite. **É a mesma doença da D-110** (o kit tinha o princípio do bloco marcado e não tinha a anatomia; o defeito estava vivo no próprio `.flatdropignore`) — só que uma superfície acima: o kit valida o que gera pelo *texto*, nunca pelo *leitor* do formato.

**(d) `CONTINUIDADE.md` é classificado como snapshot na tabela do CEREBRO.**
`index_template.html:2748`: `if(/BRIEF|CONTINU/.test(n)) return "Snapshot (atualiza antes de migrar)";`
Contra `narrative.js:302`, que declara o papel do arquivo: *«A memória factual. **CRESCE**»* — e contra a skill do próprio nicho, que manda a lista de invariantes só crescer. O kit se contradiz sobre um dos dez documentos do nicho mais maduro que ele tem. Reportado em 2026-07-23; vivo.

### 2.2 — Confirmado **não** quebrado (o feedback envelheceu; devolver ao projeto)

| Item reportado | Onde medi | Veredito |
|---|---|---|
| «eco físico vs. eco comportamental não incorporado — reenviar» (MLL) | `narrative.js:166`, dentro de `textura-mundo` | **incorporado** (B5/spec0048) |
| «pedido composto não está no CEREBRO» (*I will die*, 07-04) | `index_template.html:1073`, dentro de `cadence` | **incorporado** (C11/spec0049) |
| «linha truncada: *…se a cena merece seu pagamento emo…*» | `grep "pagamento emo"` → 0 ocorrências | **corrigido** (curadoria do `short`) |
| «`INSTRUCOES__template-update.md` com 7.794 chars estoura o teto de 6.900» | C28 hoje: `padrao 6618` · `combo 7512/7600` | **resolvido por outro caminho** — D-105 criou orçamento por configuração; 7.794 era o combo, que hoje tem teto próprio |
| «*docs rolantes saem sempre inteiros* generaliza a limitação do ASU» | `index_template.html:2660`, **dentro de `if(asuModeOn())`** (abre em 2652) | **o produto está certo** — ver 2.3 |

### 2.3 — Achado novo, que ninguém reportou

O item «saem sempre inteiros» **não é** um defeito do produto: a frase vive dentro do bloco do modo ASU. Mas o `My Little Lady` sofreu com ela **de verdade** — o projeto migrou de ASU para Code em 2026-07-23 (DEC-017) e a seção continuou no CEREBRO **já gerado**, porque um CEREBRO gerado é um arquivo, não uma função. Resultado: o assistente recusou o canal certo por um motivo que já não se aplicava, e o autor teve de corrigir.

**A lacuna real é do protocolo de update:** ele sabe comparar arquivo novo com arquivo vivo, e **não sabe dizer «este modo foi desligado — as seções que ele emitiu precisam sair»**. Nenhuma das quatro levas de feedback anteriores (ASU, FlatDrop, Mapsmith) tocou nisso, porque nenhuma delas desligou um modo.

### 2.4 — Duas notas do autor, fora do eixo narrativo

**`260805-0834.txt` — push e relatório.** O autor discorda em parte de impedir o push automático: *«eu muitas vezes esqueço de dar push»*. Aceita as duas saídas (empurrar quando não há problema, ou perguntar com «sim» como opção recomendada). **A parte dura é a outra:** o relatório está sendo gravado **antes** da decisão de push, então diz «push pendente» e o push acontece logo depois, sem registro — *«que relatório é esse que conta apenas parte da história?!»*.
Medi: o `CLAUDE.md` do kit do Code manda gravar o relatório «ao fechar QUALQUER tarefa» e **não diz nada sobre push** — nem quando empurrar, nem em que ordem. O modelo de WO fecha com o bloco `git push` solto. A ordem nunca foi escrita, então o relatório mente por construção. Isso bate com o incidente do `260803-1000.txt`, em que o Code pediu confirmação e empurrou no mesmo turno.

**`260804-1444.txt` — medição como bloco colável.** O autor reclamou de receber medições como texto para colar no Code: *«o espaço no code tem limite de caractere, por isso os wo, eles existem justamente por causa disso […] poderia ter gerado algum tipo de arquivo para elas»* — e contou que resolveu sozinho gerando um arquivo temporário. **Isto contradiz, com evidência de campo, um dos três desvios deliberados registrados na D-113**, que decidiu que pedido de medição é *bloco colável*, não seção de arquivo. A nota é do dia **seguinte** à decisão. O desvio precisa ser reaberto — não a decisão inteira, só esse terço.

### 2.5 — Estado do nicho narrativo hoje

4 skills (`escrita-serial`, `checagem-continuidade`, `voz-calibragem`, `textura-mundo`), 10 documentos, prompts G–L. **Nenhum deles menciona extração de acervo pré-existente.** `grep "extra[cç]"` em `narrative.js` → 0 ocorrências. O nicho modela fundar uma obra e escrevê-la; não modela herdar uma.

**Teto:** `narrative` está em **6618/6900 — folga 282**, o mais apertado dos 18. Toda a §3 abaixo foi desenhada para caber em CEREBRO e skills, que não pagam teto. Só um item pede linha nas Instruções, e ele está isolado de propósito.

---

## 3 · O material novo: o que os dois projetos produziram

### 3.1 — O protocolo de ficha (o item central)

Quatro campos fixos, sempre com **texto literal** dos dois lados:

1. **O QUE ESTÁ ESCRITO HOJE** — arquivo + linha + citação exata.
2. **O QUE ISSO SIGNIFICA** — português simples, sem jargão do projeto.
3. **DE ONDE VEM O CHOQUE** — a nota ou decisão que contradiz, também citada.
4. **O QUE EU PROPONHO** — o texto exato que entraria no lugar, pronto para copiar.

Mais: status por emoji (🟡 pendente · 🟢 aplicado · 🔴 descartado · 🔧 resolvido sozinho), ciclo de leva (o decidido **sai** do ticket; o não respondido volta **refinado**, nunca repetido igual), tabela-rodapé de cinco segundos, e um formato reduzido para **lacuna** (não há «escrito hoje» para chocar: os dois primeiros campos viram um, «O QUE ESTÁ EM ABERTO»).

**A regra de ouro, que vale sozinha, fora de qualquer protocolo:** se o gatilho da dúvida foi uma nota do autor, **a frase da nota entra citada, inteira, antes da pergunta**. Nunca «o que é X?» sobre um rótulo que o assistente inventou. Os dois projetos têm o mesmo erro nomeado por trás disso — «cartão fundido», «mecânica de nomeação», «B2».

**Honestidade sobre a origem:** isto **não** é convergência independente. A skill declara a própria genealogia — funde os quatro campos de um projeto irmão com a legenda-por-emoji de um design doc do `My Little Lady`. Foi o autor que transplantou. O que o transplante prova não é invenção dupla; é **sobrevivência**: o formato pegou num projeto diferente, com outro mundo e outro estágio, e no primeiro lote real produziu duas regras novas *no projeto receptor* (DEC-11 e DEC-12) — inclusive uma **correção de atribuição do autor contra o assistente**, que uma pergunta solta em prosa não teria arrancado. Isso é mais forte que convergência: é reprodução.

### 3.2 — As regras que vieram junto

| Regra | Origem | Alcance que eu proponho |
|---|---|---|
| **Extração não é transcrição** — cada item devolve *o que destrava · o que atropela · ao menos uma alternativa*, **ao lado** da ideia do autor, nunca no lugar | MLL DEC-040 (o autor apontou **sete vezes** na mesma nota que recebia a própria ideia reescrita) | narrativo (skill de extração) |
| **🔧 resolvido sozinho** — mecânico + baixo risco de reversão + nenhuma prosa depende → aplica e **lista**, não pergunta | *I will die* DEC-8 → skill | narrativo, e candidato a universal |
| **Ler do mais recente para o mais antigo** (precedência inalterada: o recente vence) | MLL DEC-022 — **medido**: as 6 notas mais antigas renderam 6 fatos em ~40 ideias, e dois itens tiveram de ser reabertos como provisórios | narrativo |
| **Capítulo não é fonte protegida** — choque contra prosa escrita é reportado com o mesmo peso; canonizar não obriga aplicação retroativa; coexistência é aceitável | *I will die* DEC-11 | narrativo |
| **Refinar o rascunho do autor por padrão** — 2–4 variações com trade-offs, ele escolhe/ajusta/confirma o original | *I will die* DEC-12 | **estende** o behavior `naming` (D-083), que já faz isto para **nomes**; DEC-12 generaliza para qualquer texto de mundo que o autor rascunhe |
| **Não desenvolver frente nova durante a extração** — ideia que surge vai para IDEAS e espera, **inclusive quando é do assistente** | MLL, regra do autor de 05/08 | narrativo (disciplina de fase) |
| **Varrer pelo fato, não pela frase** — ao fechar item, procurar o termo antigo, **o conceito em paráfrase**, e as listas de pendência — **inclusive as skills**, as mais esquecidas e as mais perigosas, porque são lidas antes de escrever | MLL FIX-015 (onze resíduos em cinco arquivos; o pior mandava parar antes de escrever prosa por causa de um teto já decidido) | **universal** |
| **Documento derivado nunca é fonte**, e precisa de marca no nome | MLL FIX-016 (`RECON-001` e um checklist lidos como cânone por um turno inteiro) | **universal** — hoje `grep derivado` no produto → **0** |
| **«Por coincidência» é onde o furo mora** — beat que depende de acaso pede qualificar o acaso (força, origem, ciclo) | MLL FIX-018 | narrativo (craft) |
| **Resumo de capítulo é derivado; quando diverge da prosa, a prosa vence** e o resumo é reescrito **lendo o capítulo** | MLL, 2026-08-03 | narrativo (gatilho de conferência) |
| **Ambiguidade hoje é erro daqui a três sessões** — escreva para quem vai ler sem contexto | MLL | provavelmente já coberto por P6; **não** proponho linha nova |

### 3.3 — O «azul»: a proposta de `PENDENTES.md`

Esta merece parágrafo próprio, porque é a única com **análise já feita do outro lado** e pedido explícito de não implementar.

O ciclo de extração tem três estados e só dois endereços. **Validado** vira DEC no `meta/`. **Refutado** vira linha negativa na CONTINUIDADE. **Esperando resposta do autor** fica no chat — e morre quando a conversa acaba. Aconteceu: três blocos de uma leva existiram por dois turnos apenas no contexto do assistente.

O autor propôs um design doc numerado, não-rolante, em que cada geração descarta o já validado/refutado. O assistente do MLL **aceitou o diagnóstico e refutou o formato, com motivo**: o problema não era o arquivo ser rolante — era **regerar sem gravar**; um `.md` numerado por rodada refaz o que turno + WO + log já fazem e cria mais um lugar para ficar desatualizado (a doença que custou a FIX-015). A contraproposta é um arquivo rolante **só azul**, uma linha por item — a pergunta em uma frase · a nota de origem · o que está travando —, que **só encolhe**: validou, sai e vira WO; refutou, sai e vira linha negativa.

**O autor pediu que ficasse registrado como ideia, estrutura e análise, para ponderar depois. Não implementar sem decisão dele.** Eu trago para cá exatamente nesse estado.

---

## 4 · Opções

### 4.1 — Para o protocolo de extração

**(A) Skill de nicho — `extracao-acervo`, no `narrative`.**
Custo de teto **zero** (skills vivem no CEREBRO gerado). Cabe o protocolo inteiro: quatro campos, formato de lacuna, status por emoji, ciclo de leva, ordem de leitura, extração≠transcrição, capítulo não protegido, disciplina de fase. Check novo trava o conteúdo. É a forma que o kit já usa para as outras quatro skills do nicho, e é a forma em que o material **já existe e já rodou** no outro lado.

**(B) Modo, como Code e ASU.** Rejeito. Modo é interruptor global que reescreve Instruções e paga teto; a fase de extração é temporária e não muda o resto do comportamento. E o kit já disse não a isto (D-084 §D) — reabrir como modo seria reabrir o que foi corretamente fechado.

**(C) Universal no CEREBRO base.** Rejeito como forma principal. Extrair acervo de worldbuilding não é comportamento dos 18 nichos. **Mas** duas peças dentro dele **são** universais e vão por este caminho: *citar a nota-gatilho antes de perguntar* e *documento derivado nunca é fonte*.

**(D) Não fazer.** Rejeito. Dois projetos rodando a mesma fase sem modelo, um deles já com custo real medido em quase-abandono, é exatamente a população que o kit existe para servir.

### 4.2 — Para o «azul»

**(A) Documento novo `PENDENTES.md` no template narrativo.** Endereço claro, disciplina de encolhimento explícita. Custo: o 11º documento de um nicho que já tem dez.
**(B) Seção «Aguardando decisão» dentro do `STATUS.md`.** Zero arquivo novo, e o STATUS já é rolante-só-o-agora. Custo: mistura estado-do-trabalho com fila-de-decisão, e o STATUS narrativo já carrega «Abertos».
**(C) Registrar a estrutura e a análise, e esperar.** É o que o autor pediu no outro projeto.
Eu **não** recomendo entre A e B nesta análise — recomendo **C**, porque a decisão é dele e ele já disse isso lá.

### 4.3 — Para os defeitos da §2.1

Uma WO só, mecânica, sem análise — cabe em «mudança pequena vai direto a WO, sem cerimônia». O único ponto de desenho é o **(c)**: o parser no harness pode ser (i) um `JSON.parse` no `settings.json` gerado, ou (ii) uma regra geral — *todo artefato que o kit emite com extensão de formato conhecido é aberto pelo parser daquele formato no harness*. Recomendo **(ii) com implementação inicial só do JSON**: a regra é o que impede a próxima ocorrência, e hoje o JSON é o único formato parseável que o kit emite.

---

## 5 · Recomendação — quatro levas, nesta ordem

**Leva 1 — os defeitos (uma WO, mecânica).** `settings.json` válido (comentário sai do JSON e vai para o `CLAUDE.md`, que já tem o lembrete de build/teste no lugar certo) · `Write` no `allow` · `CONTINUIDADE` deixa de ser snapshot na tabela · **check novo que abre pelo parser**. Primeiro porque é o único item onde o kit está entregando coisa quebrada, e porque conserta o alicerce de duas frentes recentes.

**Leva 2 — as duas notas do autor (WO pequena).** Ordem push→relatório no kit do Code, com o push explícito (empurra quando verde, ou pergunta com «sim» recomendado — sua escolha, §6) · reabrir o desvio da D-113 sobre medição em arquivo. Segundo porque é pedido direto seu, com evidência, e é barato.

**Leva 3 — universais de higiene (CEREBRO, teto zero).** «Varrer pelo fato, não pela frase», com as skills nomeadas como superfície · «documento derivado nunca é fonte» + marca no nome · linha na **tabela de gatilhos** para o bloco de fecho (a tabela é consultada por gatilho; a seção do CEREBRO é lida por sequência, e foi por isso que ela não rodou uma conversa inteira no MLL) · a lacuna do **modo desligado** no protocolo de update (§2.3).

**Leva 4 — o nicho narrativo (a frente grande).** Skill `extracao-acervo` + o que dela é universal + a extensão do `naming` pela DEC-12 + os dois itens de craft. Esta é a única que pede análise própria antes da WO, porque é conteúdo novo e grande — e porque metade do meu material sobre ela é derivado (§0) e precisa ser conferido contra os repos dos dois projetos.

**Fora das levas, para encaminhar às frentes irmãs:** FlatDrop — emitir «N arquivos ignorados por `.gitignore`» ao concluir o achatamento (custou o sumiço de planilhas inteiras num dos projetos, descoberto sessões depois). ASU — `relative_path` precisa do subcaminho da subpasta; conferir contra o `_MANIFEST`, nunca assumir a raiz.

**Não recomendo mexer agora:** modo de colaboração perguntado no setup · exemplo lado a lado de «DEC de trama × DEC de processo» · `Arquivados/` como terceira convenção de pasta. As três continuam abertas e legítimas; nenhuma tem custo medido, e a fila de agosto já está cheia.

---

## 6 · Riscos

- **Inchar o nicho mais apertado.** `narrative` tem 282 chars de folga. A leva 4 é grande e cabe toda em skill/CEREBRO — mas se o protocolo pedir gatilho nas Instruções (e ele provavelmente vai: extração é fase, e fase precisa ser reconhecida), essa linha precisa **pagar a própria entrada** enxugando outra. É o padrão que já funcionou duas vezes (i-N57, hoje com gatilho de contagem esperando a terceira). Esta seria a terceira.
- **Promover cedo demais.** O protocolo rodou **duas** levas, num projeto, com um autor. Promover a universal seria repetir o erro que a i-N54 refutou — varrer uma população que não existe. Por isso a recomendação é **skill de nicho**, e só duas peças sobem a universal.
- **Confiar em derivado.** Metade do material da leva 4 vem de handoff briefs. Se virar WO sem conferência contra os repos, o kit grava como fato o que um assistente resumiu — exatamente o defeito que o material denuncia.
- **Reabrir a D-113 inteira.** A nota do autor derruba **um** dos três desvios (bloco colável). Os outros dois (gatilho condicional ao Modo Code; onde o número pousa) não foram tocados por evidência nenhuma e devem ficar de pé.
- **O consertar não conserta o instalado.** A leva 1 arruma o **gerador**. Todo projeto já gerado continua com um `settings.json` inválido no disco. Isso pede uma linha no protocolo de update — e provavelmente um aviso seu aos projetos vivos, que é raia sua, não do kit.

---

## 7 · Ponto de decisão

1. **Leva 1, agora?** É a única com coisa quebrada em produção. Se sim, eu monto a WO no próximo turno — com o repo reconstruído em sandbox e `build` + `validate` rodados de verdade antes de entregar.
2. **Push:** o Code **empurra quando estiver tudo verde** (você declarou que costuma esquecer), ou **pergunta com «sim, dar push» como opção recomendada**? Nos dois casos, o relatório passa a ser gravado **depois** da decisão — isso não é escolha, é a correção.
3. **Medição:** volta a poder sair como **arquivo** (para você mandar o Code ler), em vez de bloco colável? Reabro só esse terço da D-113.
4. **Leva 4:** abro análise própria para o protocolo de extração, ou você prefere que eu vá direto à WO da skill? Recomendo a análise — mas ela custa um turno inteiro.
5. **O «azul» (`PENDENTES.md`):** registro como ideia com a estrutura e a análise, e paro — ou você quer decidir entre arquivo novo e seção do STATUS agora?
6. **Os repos dos dois narrativos:** para a leva 4 eu preciso conferir os itens marcados como «pista» na §0. Você sobe os `meta/` deles, ou eu escrevo a WO só com o que é artefato real (a `ficha-de-choque` e as duas auditorias) e deixo o resto para uma segunda passada?
