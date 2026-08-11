# WO 0083 — skill `ficha-de-choque` no nicho Narrativa & Ficcao

> **Tipo:** WO de CODIGO.
> **Config sugerida:** Sonnet, esforco medio — quatro edicoes, texto exato fornecido. O volume esta na
> Edicao 2 (um bloco grande), nao na complexidade.
> **Pre-requisito:** `KIT_VERSION 1.103.0`, commit `5b45780`, `main` == `origin/main`, harness
> **18/18 · 82/82 · 0 erros**. A arvore tem 1 nao rastreado (a wo0082) — a Edicao 5 versiona.
> **Base:** `meta/analises/260807-ANALISE-extracao-de-acervo-nicho-narrativo.md` (leva 4b), decisoes do
> autor em `260807-0802.txt` e `260807-1701.txt`. Fontes primarias: `.claude/skills/ficha-de-choque/SKILL.md`
> e `DECISIONS.md` de *I will die before the game story start* (`ea086dc`); `meta/CEREBRO.md` §«Worldbuilding:
> extracao em dois turnos» e §«Como apresentar extracao e choque (DEC-033)» e `DECISIONS.md` de
> *My Little Lady* (`44eaf44`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** procure `name:"ficha-de-choque"` em `src/niches/narrative.js` antes de comecar. Se
> existir, **PULE a Edicao 2** e diga no relatorio.

> **Canal dos meta neste ciclo = CODE.** Esta WO e o registro: faca os appends da Edicao 5.

---

## 1. Por que

O nicho narrativo modela **fundar** uma obra e **escreve-la**. Nao modela **herda-la**: `grep "extra[cç]"`
em `src/niches/narrative.js` retorna **zero**. Dois projetos rodando exatamente essa fase — extrair
worldbuilding de acervo antigo para o canone — inventaram metodo por conta propria, e os dois metodos se
completam em vez de competir.

O custo de nao ter isso e medido, e e alto. Num deles o autor chegou perto de largar a obra; o motivo nao
foi a historia, foi receber conflito por referencia cruzada nua (`CONTINUIDADE:93`, «ver DEC-025»), como
se ele decorasse o que escreveu meses atras. No outro, um capitulo inteiro fugiu de regras ja registradas
no acervo **sem o autor saber que houve choque**, porque contradizer prosa ja escrita fazia a ideia ser
descartada em silencio.

O que os dois produziram junto e um protocolo completo. Separados, nenhum dos dois e.

## 2. Contexto factual

- **Medido:** `src/niches/narrative.js` tem hoje 4 skills e nenhuma mencao a extracao de acervo.
- **Medido:** o custo de teto e **zero**. Skill vive no CEREBRO gerado e no `skills.zip`; o gatilho novo
  entra em `triggersExtra`, que tambem nao passa por `buildInstr`. C28 antes e depois: `padrao 6618/6900 ·
  +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7512/7600` — **identico**. Nenhuma linha nova nas
  Instrucoes: o `narrative` tem so 282 chars de folga, e uma Agent Skill e carregada pela `description`,
  nao por gatilho nas Instrucoes.
- **Medido (aplicado e validado em sandbox reconstruido deste mount):** `node build.js` + `node validate.js`
  fecham **18/18 · 83/83 · 0 erros**.
- **Medido (prova negativa do C39, quatro vezes, uma de cada vez):** matando o teste de entrada, removendo
  a segunda condicao do 🔧, deixando a intro dizer «Quatro skills», e deixando o ticket se derivar de si
  mesmo — o C39 falhou nos quatro casos.
- **Fronteira, por decisao registrada:** ordem de leitura, tamanho de leva e sequenciamento **ficam fora**
  da skill. A DEC-024 do *My Little Lady* revogou uma mudanca de ordem que o proprio assistente propos, e
  a evidencia e literal: *«e o que acontece ao ler um documento que responde perguntas que ainda nao foram
  feitas»*. O autor esclareceu em `260807-1701.txt` que nao quer isso como muralha — propor continua
  permitido —, entao a regra que ficou (ja no produto, wo0082) e de **quando**, nao de **se**: troca de
  trilho para e vira analise.

---

## Edicao 1 — `src/index.template.html` · bump de versao

**Ancora:**

```
const KIT_VERSION = "1.103.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.104.0";
```

---

## Edicao 2 — `src/niches/narrative.js` · a skill

> **Este arquivo e LF** (so o `index.template.html` e CRLF). Nao normalize para CRLF aqui.

**2a — a contagem na intro do pacote.**

**Ancora:**

```
    intro:"Quatro skills opcionais que empacotam o protocolo de escrita
```

**Substituir o inicio da string por:**

```
    intro:"Cinco skills opcionais que empacotam o protocolo de escrita
```

(o resto da linha fica intacto.)

**2b — a skill nova, como quinto elemento do array `skills`.**

**Ancora** (ultima linha da skill `textura-mundo`, que fecha o array):

```
        applyStub:["- Sistema de poder/mundo desta obra em uma frase: [...]","- Teto de poder (grandeza inicial ↔ máxima): [...]","- Personagens que ainda estão rasos e precisam de interior: [...]"]
      }
    ]
  },
```

**Substituir por** — a mesma linha `applyStub`, depois `},` (com virgula), depois o bloco da skill nova,
depois o fechamento:

```js
        applyStub:["- Sistema de poder/mundo desta obra em uma frase: [...]","- Teto de poder (grandeza inicial ↔ máxima): [...]","- Personagens que ainda estão rasos e precisam de interior: [...]"]
      },
      {
        name:"ficha-de-choque",
        gatilho:"ao extrair worldbuilding de acervo antigo, ou ao encontrar contradição entre o que está escrito e uma nota do autor",
        description:"Apresentação de extração e de choque de continuidade em ficha de quatro campos com citação literal, mais o ciclo de leva com ticket. USE ao processar notas/arquivos antigos do autor rumo ao cânone, ao achar contradição entre nota e meta/ ou entre nota e capítulo escrito, e ao retomar itens que ficaram sem decisão na leva anterior. NÃO use em obra sem acervo pré-existente — ver o teste de entrada.",
        body:[
          "# Ficha de choque — como um item é apresentado para o autor decidir",
          "",
          "> **Teste de entrada (primeira coisa, sempre).** Esta skill serve para obra que **herda um acervo**: notas antigas, planilhas, arquivos soltos, worldbuilding escrito antes do primeiro capítulo. Se a obra está sendo fundada agora e o mundo nasce na conversa, **não use** — pergunte em prosa e siga. Marreta em noz custa mais que a noz. Sinal de que serve: existe uma pasta de notas que ninguém releu inteira, ou o autor diz «isso já está definido em algum lugar».",
          "",
          "## O problema que ela resolve",
          "",
          "O autor **não decora o que escreveu** — e disse isso com todas as letras em mais de um projeto. Pergunta solta em prosa («o que é o cartão fundido?», «e a mecânica de nomeação?») obriga ele a adivinhar a que você se refere, sobre um assunto que ele definiu meses atrás. Referência cruzada nua — `CONTINUIDADE:93`, «ver DEC-025» — tem o mesmo defeito: aponta para um lugar em vez de mostrar o texto. Num projeto real isso chegou perto de custar a obra.",
          "",
          "## Os quatro campos (ordem fixa, nenhum opcional)",
          "",
          "1. **O QUE ESTÁ ESCRITO HOJE** — arquivo + o **texto literal**, citado por inteiro.",
          "2. **O QUE ISSO SIGNIFICA** — português simples, sem jargão do projeto.",
          "3. **DE ONDE VEM O CHOQUE** — a nota ou decisão que contradiz, também com texto literal.",
          "4. **O QUE EU PROPONHO** — **o texto exato** que entraria no lugar, pronto para copiar. Não a descrição da mudança: a linha.",
          "",
          "**Variante lacuna** — quando não há «escrito hoje» para chocar (o acervo levanta algo que o cânone nunca cobriu), os dois primeiros campos viram **um**: «O QUE ESTÁ EM ABERTO». Os campos 3 e 4 seguem iguais.",
          "",
          "**A regra que vale sozinha, fora de qualquer ficha:** se a dúvida nasceu de uma nota do autor, **a frase da nota entra citada, inteira, antes da pergunta**. E nunca use um rótulo que você inventou para o assunto — ele não reconhece o nome que você deu à dúvida dele.",
          "",
          "## Marca de confiança (obrigatória, um item nunca sai sem ela)",
          "",
          "- **literal** — a nota diz assim, e a frase-fonte está citada.",
          "- **síntese** — você combinou, deduziu ou generalizou. **Sempre destacada**, nunca misturada com as literais.",
          "- **conflito** — contradiz o cânone atual, com a linha citada.",
          "- **aberto** — a nota pergunta algo ou deixa por decidir.",
          "",
          "**Regra da frase-fonte:** se não existe frase citável, o item **não pode** ser literal — é síntese. E síntese só vira cânone com aprovação explícita. Você **não** decide sozinho que uma síntese «é claramente o que o autor quis dizer».",
          "",
          "## Status por item (a leitura de cinco segundos)",
          "",
          "🟡 pendente · 🟢 aplicado · 🔴 descartado · 🔧 **resolvido sozinho**.",
          "",
          "**🔧 só quando as DUAS condições valem:** (a) nenhuma prosa já escrita depende do resultado, **e** (b) existe uma reconciliação que aproveita todas as fontes sem descartar nenhuma como errada. Aí você aplica e **lista** — para transparência, não para aprovação. Fora disso, pergunta. Numa auditoria real esse critério resolveu 6 de 8 pendências sem gastar o tempo do autor; as 2 que sobraram eram sabor autoral (nome, flavor), e sabor não tem critério mecânico.",
          "",
          "Feche o bloco com uma **tabela-rodapé**: quantos itens em cada estado, e quais esperam resposta.",
          "",
          "## Extração não é transcrição",
          "",
          "Devolver a ideia do autor reescrita, e só isso, é entrega incompleta — foi apontado sete vezes na mesma nota, num projeto. Cada item vem com **o que a ideia destrava · o que ela atropela · ao menos uma alternativa ou ampliação**. A ideia dele **nunca** é descartada nem substituída: a sua entra **ao lado**, rotulada como proposta sua, para ele escolher. Silêncio propositivo é omissão, não respeito.",
          "",
          "**E refine o rascunho dele por padrão.** Quando o autor escreve o texto de uma descrição, nome, título ou frase de mundo, responda com **2–4 variações** refinadas (variando registro: mais vago/poético ↔ mais claro/mecânico), com o trade-off de cada uma. Ele escolhe, ajusta, ou confirma o original — a oferta não é obrigação de trocar.",
          "",
          "## O que o choque pode atingir",
          "",
          "**Capítulo escrito não é fonte protegida.** Choque contra prosa já publicada é reportado com o **mesmo peso e o mesmo formato** que choque contra `meta/` — nunca filtrado por contradizer o que já está escrito. Foi esse filtro silencioso que fez um capítulo inteiro fugir de regras já registradas no acervo, sem o autor saber que houve choque.",
          "",
          "**Canonizar não obriga aplicar.** Uma regra de mundo pode entrar no cânone sem ser aplicada retroativamente a nenhum capítulo — coexistência é aceitável, e quando/onde aplicar é decisão separada. Na ausência de preferência explícita do autor, **não assuma que o capítulo escrito vence**.",
          "",
          "**Resumo de capítulo é derivado.** Divergiu da prosa? A prosa vence, e o resumo é reescrito **lendo o capítulo** — nunca ajustado de memória.",
          "",
          "## Antes de abrir pendência",
          "",
          "- **Confira o cânone primeiro.** Já aconteceu de virar «questão em aberto» algo que a CONTINUIDADE já resolvia.",
          "- **Nota antiga é suspeita por padrão:** contradição entre nota velha e cânone atual sinaliza *possivelmente superada* — nunca escala como pendência do projeto, nunca se resolve pela nota velha sozinha.",
          "- **A leitura padrão é «isto provavelmente já foi definido numa nota que ainda não li»**, não «isto está perdido». Enquanto houver acervo por ler, termo sem lastro não vira pendência.",
          "",
          "## O ciclo de leva, e o ticket",
          "",
          "Cada leva sai num arquivo próprio — `AAMMDD-HHMM-leva-<assunto>.md`, fora do versionamento — em vez de virar parede de texto na conversa.",
          "",
          "- **Só o que está em aberto entra.** Decidido sai na hora para o cânone e **não reaparece**. Foi acumular verde e vermelho fechados que inutilizou a primeira tentativa disso: achar o item reaberto exigia garimpar entre defuntos.",
          "- **O não respondido volta refinado**, nunca repetido igual.",
          "- **O ticket novo se deriva do cânone e das respostas do autor — nunca do ticket velho.** O anterior serve para saber *o que perguntar de novo*; o texto de cada item é reconferido contra os `meta/` antes de reaparecer. Sem isso, o ticket vira uma segunda fonte desatualizada, que é exatamente o defeito que ele existe para evitar.",
          "- **Cabeçalho declara o que ele é:** saída de assistente, não cânone. O cânone é o `meta/`.",
          "- **Assunto grande demais pede sessão própria.** Reconhecer isso e propor a sessão dedicada é parte do trabalho — empurrar o nó inteiro para dentro de uma leva é o que faz a resposta virar parede.",
          "",
          "## O que esta skill NÃO decide",
          "",
          "Ordem de leitura das notas, tamanho da leva, por onde começar e quando parar: **é do autor**, sempre. Você pode apontar um problema no método — não redesenhá-lo no meio do trabalho. Trocar o funcionamento da extração enquanto ela roda já custou três reprojetos seguidos num projeto real, e os três falharam pelo mesmo motivo: otimizar o processo em vez de executá-lo. Se enxergar algo melhor, **pare e proponha** como análise, com o autor decidindo."
        ],
        applyStub:["- Onde vive o acervo desta obra (pasta/arquivos): [...]","- Ordem de leitura definida pelo autor: [...]","- Tamanho de leva combinado: [...]","- Onde os tickets são arquivados depois de respondidos: [...]"]
      }
    ]
  },
```

---

## Edicao 3 — `src/niches/narrative.js` · gatilho do nicho

**Ancora** (em `triggersExtra`):

```
    ["Voz/estilo calibrado num trecho aprovado"
```

**Inserir IMEDIATAMENTE ANTES** (uma linha so):

```js
    ["Nota/arquivo antigo do acervo entra em extração, ou uma nota contradiz o que já está escrito", "Apresenta em FICHA (skill `ficha-de-choque`): quatro campos com citação literal dos dois lados, marca de confiança e status. Nunca pergunta solta nem referência cruzada nua — o autor não decora o que escreveu. A leva sai em ticket `AAMMDD-HHMM-leva-<assunto>.md`, só com o que está em aberto."],
```

---

## Edicao 4 — `validate.js` · check C39

**Ancora:**

```
check("C38 higiene universal
```

**Inserir IMEDIATAMENTE ANTES** o bloco abaixo, seguido de uma linha em branco:

```js
check("C39 skill ficha-de-choque no narrative (wo0083): teste de entrada, quatro campos, marca de confianca, 🔧 com criterio duplo, ciclo de ticket e fronteira do metodo", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  const sk = (narr.skillsPack.skills||[]).find(x => x.name === "ficha-de-choque");
  assert(sk, "skill ficha-de-choque nao existe no pacote do narrative");
  const body = (sk.body||[]).join("\n");
  const marcas = [
    [/Teste de entrada/, "sem teste de entrada — a skill dispara em obra que nasce agora, e vira marreta em noz"],
    [/O QUE ESTÁ ESCRITO HOJE[\s\S]*O QUE ISSO SIGNIFICA[\s\S]*DE ONDE VEM O CHOQUE[\s\S]*O QUE EU PROPONHO/, "os quatro campos nao estao na ordem fixa"],
    [/O QUE ESTÁ EM ABERTO/, "sem a variante lacuna (item que nao tem 'escrito hoje' para chocar)"],
    [/citada, inteira, antes da pergunta/, "sem a regra de citar a frase-fonte antes de perguntar"],
    [/rótulo que você inventou/, "nao proibe perguntar por rotulo inventado pelo assistente"],
    [/\bliteral\b[\s\S]*\bsíntese\b[\s\S]*\bconflito\b[\s\S]*\baberto\b/, "sem as quatro marcas de confianca"],
    [/não pode\*{0,2} ser literal/, "sem a regra da frase-fonte (sem frase citavel, o item nao e literal)"],
    [/🔧/, "sem o status 'resolvido sozinho'"],
    [/nenhuma prosa já escrita depende[\s\S]{0,400}sem descartar nenhuma como errada/, "o criterio do 🔧 perdeu uma das duas condicoes — 🔧 com uma condicao so decide o que era do autor"],
    [/Extração não é transcrição/, "sem a regra de devolver opiniao, variacao e alternativa"],
    [/nunca\*{0,2} é descartada nem substituída/, "a alternativa do assistente pode acabar substituindo a ideia do autor"],
    [/2–4\*{0,2} variações/, "sem a extensao da DEC-12 (refinar o rascunho do autor por padrao)"],
    [/Capítulo escrito não é fonte protegida/, "capitulo escrito continua filtrando choque em silencio"],
    [/não assuma que o capítulo escrito vence/, "sem a regra de nao assumir precedencia da prosa ja escrita"],
    [/Resumo de capítulo é derivado/, "sem a regra do resumo derivado contra a prosa"],
    [/possivelmente superada/, "sem o tratamento de nota antiga como suspeita"],
    [/já foi definido numa nota que ainda não li/, "sem a leitura padrao que evita abrir pendencia por termo sem lastro"],
    [/AAMMDD-HHMM-leva-/, "sem o nome do ticket de leva"],
    [/Só o que está em aberto entra/, "o ticket nao encolhe — foi acumular decidido que inutilizou a primeira tentativa"],
    [/nunca do ticket velho/, "o ticket pode se derivar de si mesmo e virar segunda fonte desatualizada"],
    [/saída de assistente, não cânone/, "o ticket nao se declara derivado no cabecalho"],
    [/O que esta skill NÃO decide/, "sem a fronteira do metodo"],
    [/otimizar o processo em vez de executá-lo/, "a fronteira do metodo perdeu o modo de falha que a motivou"],
  ];
  marcas.forEach(([re,msg]) => assert(re.test(body), msg));
  // frontmatter valido e description que ensina quando NAO usar
  const md = T.buildSkillMd(sk);
  assert(/^---\nname: ficha-de-choque\ndescription: /.test(md), "buildSkillMd nao rende frontmatter valido para a skill nova");
  assert(/NÃO use/.test(sk.description), "a description nao ensina quando NAO usar — skill sem limite dispara onde nao serve");
  assert((sk.applyStub||[]).length >= 3, "applyStub raso: sem acervo, ordem e destino do ticket, a skill roda generica");
  // o ponteiro no CEREBRO cita a skill nova, e o corpo nao vaza
  T.STATE.builder = T.STATE.builder || {};
  T.STATE.builder.skillsMode = "yes";
  const cmd = T.buildClaudeMd(narr);
  delete T.STATE.builder.skillsMode;
  assert(/ficha-de-choque/.test(cmd), "ponteiro do CEREBRO nao cita a skill ficha-de-choque");
  assert(!/name: ficha-de-choque/.test(cmd), "corpo da skill vazou pro CEREBRO — deveria ficar so no zip");
  assert(/Cinco skills/.test(cmd), "a intro do pacote ainda diz 'Quatro skills' — a contagem repetida mente");
  // gatilho do nicho aponta a skill
  const trig = (narr.triggersExtra||[]).find(t => /ficha-de-choque/.test(t[1]||""));
  assert(trig, "tabela de gatilhos do narrative nao manda apresentar em ficha");
  assert(/extração|contradi/i.test(trig[0]), "o gatilho da ficha nao nomeia o evento (extracao/contradicao)");
  return "ok (" + (narr.skillsPack.skills||[]).length + " skills no pacote)";
});
```

---

## Edicao 5 — `meta/` · registro (append) e o arquivo nao versionado

**5a — versionar a wo0082**, que ficou nao rastreada:
`meta/workorders/260807-wo0082-higiene-universal-e-update-que-sabe-subtrair.md`. Se o `.gitignore` a
excluir, **PARE e reporte** — nao force com `-f`.

**5b — `meta/DECISIONS.md`:** append de **D-117**, no formato dos vizinhos. Conteudo obrigatorio: a skill
`ficha-de-choque` no `narrative`, com a genealogia honesta (o protocolo **nao** e convergencia
independente — o autor transplantou os quatro campos de um projeto para o outro; o que o transplante prova
e **reproducao**, nao invencao dupla: o formato pegou noutro projeto e no primeiro lote real produziu duas
regras novas no projeto receptor, inclusive uma correcao de atribuicao do autor contra o assistente); o
que veio de cada lado (do *I will die*: quatro campos com o texto pronto no campo 4, status incluindo 🔧
com o criterio duplo da DEC-8, ciclo de leva, formato de lacuna, DEC-11 e DEC-12; do *My Little Lady*:
marcas de confianca, regra da frase-fonte, nota antiga suspeita, conferir o canone antes de abrir
pendencia); o **teste de entrada** e por que ele existe (o autor pediu explicitamente que a skill nao vire
marreta em noz — ele tem obra sem acervo); o **ticket de leva** `AAMMDD-HHMM-leva-<assunto>.md` fora do
versionamento, em `notas-arquivadas/`, com a correcao de que **ele se deriva do canone, nunca de si
mesmo**; a **fronteira** (ordem, tamanho e sequencia sao do autor) e por que ela nao e muralha; alcance
**so `narrative` por ora** (`game` e `rpg` esperam — pedido do autor: um por vez, porque a skill vai mudar
depois da primeira leva real); `KIT_VERSION 1.104.0`; custo de teto **zero**; harness **82/82 -> 83/83, 0 erros**.

**5c — `meta/STATUS.md`:** nova secao `## 💬 Última sessão (2026-08-07 — v1.104.0)` no topo, rebaixando a
anterior. **Antes de escrever qualquer numero, procure o valor ANTIGO no arquivo INTEIRO** (`1.103.0`,
`82/82`) e atualize **todas** as ocorrencias de estado atual, preservando as historicas. Registrar: **leva
4b fechada**; a frente de feedback dos dois narrativos **encerrada** (levas 1, 3 e 4 aplicadas); e as duas
pendencias que sobram dela — (i) montar os pacotes de update para *My Little Lady* e *I will die* quando o
kit estabilizar, com o *My Little Lady* rodando hoje com a linha de ritual revogada na v1.90.0; (ii) o
vocabulario «sessao» x «turno», ainda sem decisao, que o autor levantou em `260807-1701.txt`.

---

## Fora de escopo

- **Nao** estender a skill a `game` ou `rpg`: decisao do autor e um por vez.
- **Nao** criar arquivo de ticket nem pasta `notas-arquivadas/` — o ticket nasce no primeiro uso, do lado
  do projeto, e vive **fora** do repo versionado (e irmao dele, na pasta-pai).
- **Nao** mexer nas outras quatro skills do pacote.
- **Nao** gerar pacotes de update para os projetos narrativos: espera o kit estabilizar.
- **Nao** mexer no vocabulario «sessao» x «turno».
- **Nao** gastar teto: nenhuma edicao toca `buildInstr`. Se o C28 mudar, algo vazou.

## Armadilhas desta WO

- **`src/niches/narrative.js` e LF, nao CRLF.** Nao rode a normalizacao da wo0082 nele. Conferencia:
  `python -c "print(open('src/niches/narrative.js','rb').read().count(b'\r\n'))"` deve imprimir **0**.
- **Edicao 2b: a virgula.** A skill `textura-mundo` hoje fecha com `}` **sem** virgula, porque era a
  ultima. Ela passa a ser a penultima: o `}` dela vira `},`. Esquecer a virgula quebra o build.
- **O corpo da skill tem emoji e aspas tipograficas** (🟡🟢🔴🔧, «», —, ↔). Copie o bloco **verbatim**;
  o C39 procura varios deles literalmente, inclusive o 🔧.
- **Cada string do array `body` e UMA linha do arquivo.** O editor vai quebrar visualmente; o arquivo nao.
- **Numero de check:** C39 e o proximo livre (o ultimo em uso e C38). Se ja existir, **PARE e reporte**.
- **Nao edite `index.html` a mao.** Edite `src/` e rode `node build.js`.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra exatamente `src/index.template.html`, `src/niches/narrative.js`, `validate.js`,
      `index.html`, `meta/STATUS.md`, `meta/DECISIONS.md` — mais a wo0082 (Edicao 5a), e nada alem.
- [ ] `src/niches/narrative.js` continua **sem CRLF** (comando das Armadilhas -> **0**).
- [ ] `node build.js` roda sem erro.
- [ ] `node validate.js` fecha **18/18 · 83/83 · 0 erros**, com **C39 verde** reportando **5 skills**.
- [ ] **C28 imprime os mesmos numeros de antes** (`padrao 6618/6900 · combo 7512/7600`). Se mudou, **PARE
      e reporte**.
- [ ] **Teste manual que a validacao nao cobre:** abra `index.html`, escolha **Narrativa & Ficcao**, deixe
      o pacote de **skills ligado**, e baixe o **skills.zip**. Precisa existir
      `skills/ficha-de-choque/SKILL.md`, com frontmatter `name: ficha-de-choque` e a `description`
      contendo o **`NÃO use`**. Confira tambem, no CEREBRO gerado na tela, que a intro diz **«Cinco
      skills»** e que a tabela de gatilhos do nicho traz a linha da ficha.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da validacao · o commit
e o push. **Escreva-o DEPOIS de resolver o push.**

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html src/niches/narrative.js validate.js index.html meta/STATUS.md meta/DECISIONS.md meta/workorders/260807-wo0082-higiene-universal-e-update-que-sabe-subtrair.md
```

```
git commit -m "feat(narrative): skill ficha-de-choque para extracao de acervo pre-existente (wo0083, D-117)" -m "- o nicho modelava fundar e escrever uma obra, nao herdar uma: zero mencao a extracao de acervo antes desta WO" -m "- funde os dois metodos que os projetos narrativos criaram: quatro campos com citacao literal e texto pronto no campo 4, status com 🔧 sob criterio duplo, ciclo de leva e formato de lacuna; mais marcas de confianca, regra da frase-fonte, nota antiga suspeita e conferir o canone antes de abrir pendencia" -m "- teste de entrada na primeira linha: obra sem acervo nao usa a skill. Skill sem limite dispara onde nao serve" -m "- capitulo escrito deixa de ser fonte protegida: choque contra prosa tem o mesmo peso e o mesmo formato, e canonizar nao obriga aplicar" -m "- ticket de leva AAMMDD-HHMM-leva-assunto.md fora do versionamento: so o que esta em aberto entra, e ele se deriva do canone, nunca de si mesmo" -m "- fronteira explicita: ordem de leitura, tamanho de leva e sequenciamento sao do autor" -m "- gatilho no nicho + check C39; alcance so narrative por ora" -m "- KIT_VERSION 1.104.0; custo de teto zero; 18/18, 82/82 -> 83/83, 0 erros"
```

```
git push
```
