# WO 0101 — Registrar a extração do Mapsmith 11: nove itens de feedback e a carta 01 ao FlatDrop

> **Tipo:** WO de DOC (registro).
> **Config sugerida:** modelo leve, `/effort` **médio** — duas inserções num arquivo, sem código.
> **Pré-requisito:** v1.119.0, commit `bb8ebee`, árvore limpa fora de `.claude/launch.json` (não
> rastreado conhecido). Nenhum build, nenhum harness: esta WO não toca `src/` nem `index.html`.
> **Base:** transcrito `mapsmith_11.md` (44 blocos, 17–20/08) lido bloco a bloco no chat de 2026-08-20,
> mais o `IDEAS.md` e o `CEREBRO.md` do Mapsmith no mount da mesma data, mais três medições feitas no
> mount e declaradas abaixo.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte** — nunca chute um
> lugar próximo.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE**
> o item e diga no relatório — não duplique.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique os appends previstos e não
> espere doc do chat. O chat entrega, à parte, dois arquivos NOVOS que ele mesmo escreveu — a análise
> (que entra no repo por esta WO) e a carta ao FlatDrop (que **não** entra: correspondência é
> transitória por decisão registrada). *Uma fonte por doc por ciclo.*

---

## 1. Por que

O ciclo do Mapsmith devolveu material que não está em arquivo nenhum do kit. Enquanto ele existir só no
transcrito de uma conversa fechada, **não existe para a próxima conversa** — e um dos nove itens é
justamente a família de defeito que atravessou cinco séries por falta de registro no lugar certo.

Junto, esta WO paga duas dívidas antigas de registro: versiona a análise que nasce hoje (o Mapsmith
acabou de perder dois dias com uma análise `untracked` que gerou três decisões) e fecha, pela carta 01,
a errata da mensagem de 2026-08-02, reservada desde a wo0077 para «a próxima mensagem ao FlatDrop».

## 2. Contexto factual

Ordem em que aconteceu, com a origem de cada fato marcada.

**[medido no mount, 2026-08-20]**

- O `_MANIFEST` do KCM (gerado 21:20) declara `bb8ebee 2026-08-18 docs(log): registra os dias 14 e 18
  de agosto`. **A pendência (a) do brief de 18/08 está fechada** — os dois logs entraram.
- Todo arquivo do mount chega com `mtime` **zerado** (`1979-12-31 00:00`), nos dois projetos, sem
  exceção.
- A coluna «Nome na pasta» do `_MANIFEST` declara nome inexistente em **11 arquivos de 109** (5 de 53
  no KCM, 6 de 56 no Mapsmith). Padrão determinístico: ponto inicial e ponto interno viram `_`.
  Atinge os três *dotfiles* de configuração e o `index.template.html`.
- O gerador (`src/index.template.html`, `buildCodeKitFiles`) manda `AskUserQuestion` **só** no caminho
  vermelho. Nada no caminho verde enuncia o passo humano seguinte. Conferido por leitura das duas
  ocorrências.
- Ausentes do gerador, conferidos por busca: `exaustiv` (0), `âncoras lidas` (0), `vai INTEIRO` (0),
  passo `1b` (0). Os quatro existem hoje **só** no `CEREBRO.md`/skills do Mapsmith, escritos por eles.

**[lido no transcrito `mapsmith_11.md`]**

- Cinco afirmações do assistente refutadas em 22 turnos; em quatro, quem refutou foi o dono ou o
  executor. Um sexto caso da mesma família sem afirmação: um relatório quatro turnos em «Manter — não
  li», contendo a armadilha de `grep` que reapareceu na wo0110 e na wo0111.
- O «PARE e relate» pegou quatro erros do chat na mesma sessão, com **zero falhas** medidas.
- A D-133 (menu vira botão) é de **18/08**; o Mapsmith descobriu o mesmo defeito sozinho em **19/08** e
  o corrigiu à mão na wo0104.

**[relatado pelo dono do Mapsmith]**

- Três reclamações sobre a mesma classe de defeito, em turnos diferentes (bloco 17, bloco 25, bloco
  35) — e a do bloco 35 é **posterior** à regra escrita para evitá-la.
- Pedido explícito no bloco 43: que o motivo seja *«analisado, apresentado para o KCM lidar também,
  desenvolvido e refinado métodos para lidar»*.

**[deduzido, e marcado como tal]**

- Que a sanitização dos 11 nomes é do Projeto do Claude e não do FlatDrop: **inferência**, apoiada em
  ser determinística e igual nos dois modos de renomeação (`collisions` e `fullpath`). A carta 01 pede
  a mudança sem afirmar nada sobre o código do FlatDrop.

---

## Edição 1 — `meta/IDEAS.md` · duas entradas novas no topo do feedback

**Âncora** *(o cabeçalho da seção `📮 Feedback para o Kit`; ocorrência única, conferida com `grep -c` = 1)*:

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** a linha da âncora (mantendo a linha em branco que já existe logo abaixo
dela — o bloco novo entra depois dessa linha em branco e antes da entrada de 2026-08-18):

```

### 2026-08-20 — Extração do Mapsmith 11: nove itens, e o primeiro é a família que atravessou cinco séries
Transcrito de 44 blocos (17–20/08) lido bloco a bloco. **Oito itens vêm do Mapsmith; o nono é achado nosso, da própria leitura.** Nenhum virou WO ainda — o item (1) abriu análise, e os itens (2) a (7) esperam a decisão dela para saírem em leva única, por não valer dois ciclos de registro.

**(1) A afirmação verificável — e é o item que sustenta os outros.** Cinco afirmações do assistente refutadas em 22 turnos, e em quatro quem refutou foi o dono ou o executor: «não há mecanismo» (caiu num print), «o menu selecionável é do cliente, não do modelo» (caiu em duas buscas — `AskUserQuestion` é do modelo), «a raspagem de HTML acabou» (caiu por uma letra: o atributo virou `data-gccmap`), «`_make_tab` é o helper que os testes usam» (o símbolo não existe no repositório), e «não li o STATUS/DECISIONS/CHANGELOG/log porque o mount é anterior» (os quatro estavam no mount, com `mtime` do mesmo dia e já contendo o conteúdo alegado ausente — a WO foi refeita inteira). Somando com as **quatro violações da D-126 na série anterior, todas do nosso lado**, são dez ocorrências em duas séries com a regra escrita e publicada nos 18 nichos. **O diagnóstico está em `meta/analises/260820-ANALISE-a-afirmacao-verificavel.md`**, com cinco pontos de decisão: as regras que falham são autoendereçadas (quem confere é quem tem o viés, e cumprir não produz artefato); as que funcionam ou passam a conferência para outro («PARE e relate», zero falhas medidas) ou são mecânicas (C43/C37 cobraram a auto-aplicação antes de o autor pensar nela). E a sub-causa é precisa: **a metade da regra sem comando associado é a que não sobrevive** — «não desperdiça token» venceu o P8 em silêncio, todos os turnos, sem nunca ser formulado. *Nenhum dos 96 checks pode observar uma leitura que não aconteceu: esta família é o ponto cego estrutural do harness, e por isso atravessou cinco séries.*

**(2) O comando vai INTEIRO, e «é do dono» exige nomear o impedimento.** O CEREBRO proíbe caminho ambíguo, mas **só em comando destrutivo** — o `verify` só lê e caiu no vão: o chat entregou `mapsmith verify "<...>\atlas-fallen\caladrias"` com o caminho completo impresso em **três** relatórios do mesmo dia. Reticências no lugar de um valor que se tem não é economia, é trabalho devolvido ao dono. E a metade cara: o chat descobriu um impedimento real (a rede local derruba HTTPS) e passou a **herdá-lo para comandos vizinhos que não tocam a rede**, carimbando «conferência do dono» em cinco WOs seguidas sem nunca perguntar o que, exatamente, o executor não conseguiria. **Impedimento de um passo não se herda para o passo vizinho**, e a regra que resolve é uma pergunta de uma linha antes de escrever «é do dono»: *o que este comando faz que o executor não consegue?* Sem resposta, não é do dono. Corrigido lá pela wo0101 deles; ausente do gerador (busca por `vai INTEIRO`: 0 ocorrências). **Custo medido:** a reclamação voltou no bloco 35 **depois** de a regra ter sido escrita no bloco 18 — regra escrita num CEREBRO não alcança quem já pegou o hábito.

**(3) «Arquivar / Manter» exaustivo, com leitura forte e prazo.** O CEREBRO manda listar nome por nome; **não diz que a lista é exaustiva nem o que a omissão significa**. O dono formulou melhor que a regra: *omissão pode ser «já extraí tudo» ou «nunca abri», e as duas pedem ações opostas*. O que o Mapsmith adotou e vale universalizar: a lista cobre **todo** arquivo avulso do mount; «Arquivar» só admite o que foi lido **inteiro naquele turno** — é afirmação forte, não despacho; «Manter» exige motivo. **E falta a metade que eles ainda não têm:** «Manter — não li» precisa de prazo. Foi exatamente um «Manter — não li» de quatro turnos que deixou passar um relatório que documentava a armadilha de `grep` reaparecida na wo0110 **e** na wo0111. *Um relatório não lido custou duas repetições do mesmo erro.* Busca por `exaustiv` no gerador: 0 ocorrências.

**(4) O relatório é escrito antes da última ação, e pode afirmar o contrário do que houve.** O relatório termina em «PUSH — NÃO CONCLUÍDO» e o push sai minutos depois: **o arquivo afirma o contrário do que aconteceu**, e não por descuido — o relatório é o último ato do executor, então tudo que vem depois fica de fora por definição. Das três saídas consideradas lá, a escolhida foi a única que não depende de alguém lembrar: **o fecho seguinte confere `git status`/`git log` contra o que o relatório anterior afirmou** e corrige. Está em campo desde 19/08 e passou limpo em três rodadas («conferência que passa não vira linha»). **Limite conhecido, registrado por eles antes de morder:** confere só o relatório mais recente — o caso que originou a ideia não seria pego hoje. Busca pelo passo `1b` no gerador: 0 ocorrências.

**(5) A enunciação do próximo comando no caminho VERDE — o kit só cobre o vermelho.** As skills de fecho declaram `disable-model-invocation: true`, e a flag está certa: skill que commita e empurra não dispara sozinha. Mas o gerador manda oferecer saídas **só no vermelho**, e é no **verde** que mora o passo humano seguinte. Efeito medido no mesmo dia: uma WO fechou em verde e o fecho previsto não rodou, porque **nada na tela do dono enunciou que a vez era dele** — e o padrão «verde commita sem perguntar» (v1.111.0) resolveu o passo automático e deixou o passo humano sem sinalização nenhuma: quem não precisa mais decidir sobre o push também parou de olhar para o fim do relatório. **O buraco não é de execução, é de enunciação.** Dois degraus, ambos dentro do kit: o modelo de WO ganha o campo **«Próximo comando»**, e as skills de fecho terminam com esse comando **cru e sozinho na última linha**, sem frase de apresentação — exigência de forma do dono, com a razão junto: *texto em volta esconde o comando em vez de destacá-lo*.

**(6) `AskUserQuestion` serve para ESCOLHER, não para DISPARAR — e o kit adotou a ferramenta sem dizer isso.** Três fatos medidos, não supostos: **(a)** é ferramenta **do modelo** — devolve cartão selecionável, aceita 1–4 perguntas com 2–4 opções de `label` + `description`, `header` até 12 caracteres, e **não** está disponível em subagente disparado pela ferramenta Agent; **(b)** ela **não contorna** `disable-model-invocation`: medido duas vezes, o dono escolhia «rodar o fecho agora» e ainda tinha de digitar — **acrescentou um passo sem tirar nenhum**; **(c)** o texto fantasma na caixa de entrada é outra coisa: «Prompt suggestions», gerado pelo **cliente** com requisição de fundo própria, desligado por padrão no modo interativo, **não comandável** por texto do executor. **Conclusão prática:** cartão no vermelho (ali existe escolha de verdade), comando cru no verde (ali existe gatilho, e cartão não sabe gatilho). A D-133 pôs a ferramenta nas duas skills e **não** registrou o limite — sem esta nota, o próximo projeto usa o cartão para disparar e paga o mesmo ciclo.

**(7) Um relatório por ato, e o voto contrário fica registrado.** Cada skill grava o seu. O dono perguntou se um arquivo por sessão não seria mais otimizado. **Não seria**, pelo mesmo motivo que separa as duas skills: são atos distintos, que podem acontecer com horas de distância ou não acontecer. Um arquivo único ou ficaria pela metade, ou obrigaria a reescrever o que já estava fechado — que é o item (4) em escala maior: **um arquivo que afirma o estado final antes de o estado final existir**. Registrado como voto contrário, para não voltar como dúvida.

**(8) O `_MANIFEST` do FlatDrop: `mtime` por arquivo e o nome plano que não existe.** Virou a **carta 01 ao FlatDrop** (ver entrada seguinte). Nasceu da causa do item (1): a metade cara da regra de reler o mount não tem comando associado, e **não pode ter** — medido hoje, o mount **zera o `mtime` de todo arquivo** (`1979-12-31 00:00`, nos dois projetos, sem exceção), então a idade só pode chegar pelo manifesto. Na mesma medição saiu um defeito maior e que ninguém tinha visto: a coluna «Nome na pasta» declara nome **inexistente** em **11 arquivos de 109** — ponto inicial e ponto interno viram `_` no upload, atingindo os três *dotfiles* de configuração e o **`index.template.html`**, que é o gerador inteiro deste repositório. **A regra dura de entregar pelo nome real desachatado depende dessa tabela**; onde ela não casa, o assistente volta a inferir o caminho, que é exatamente o que o manifesto existe para eliminar.

**(9) Dois projetos resolveram o mesmo defeito em paralelo, com um dia de diferença — achado nosso.** A D-133 corrigiu o «menu numerado» em **18/08**. O Mapsmith descobriu o mesmo defeito sozinho em **19/08**, corrigiu à mão, e devolveu como feedback um item que o kit **já tinha fechado no dia anterior**. Custou uma WO a eles e um item de feedback morto a nós. A causa é estrutural e não tem conserto barato: o pacote de update é *pull* e por leva, então **entre levas os projetos reresolvem o resolvido** — e o kit não tem canal para avisar um instalado de que algo já foi corrigido. *Gatilho de retorno: a segunda vez que um projeto devolver feedback sobre defeito já fechado.*

### 2026-08-20 — Carta 01 enviada ao FlatDrop: o manifesto e o que chegou (aguardando resposta, com gatilho)
Enviada em 2026-08-20 como `260820-kcm-para-flatdrop-01-o-manifesto-e-o-que-chegou.md`. **Numeração declarada como suposição:** `01` foi atribuído por não haver, do nosso lado, carta anterior sob a convenção de nome atual — a mensagem de 2026-08-02 é anterior a ela; a carta pede que o outro lado confira a própria pasta antes de responder.

**Três pedidos, numerados por exigência da própria convenção** (carta com três contratos costuma receber resposta que aceita um e ignora dois): **(1)** a coluna «Nome na pasta» declarar o nome **como ele chega**, ou ganhar uma terceira coluna com o nome após sanitização — 11 arquivos de 109 medidos hoje; **(2)** cada linha da tabela carregar o **`mtime`** do arquivo na origem, tornando a defasagem legível sem comando — **é a única via**, porque o mount zera todos os `mtime`; **(3)** somar `ahead N / behind M` à linha de estado do git, e dizer «sem upstream» quando não houver — **devolução de 2026-08-02 que nunca voltou**, repetida porque continua reproduzível. Prioridade declarada, se for preciso escolher uma: o **(2)**, porque o (1) é contornável com atenção e o (2) não tem contorno nenhum deste lado.

**A carta paga também a errata reservada desde a wo0077** para «a próxima mensagem ao FlatDrop»: a mensagem de 2026-08-02 afirmava a wo0076 pendente quando ela já estava aplicada (`d423747`), e afirmava a `i-N54` já descartada quando o registro ainda estava aberto. Os dois estados ficam corrigidos, e a errata **sai da fila** — não repetir em carta futura.

**Gatilho, porque carta sem resposta não é memória:** se não vier resposta até a próxima leva de update do kit, o item (2) vira ideia adiada com gatilho próprio e o item (1) passa a ser contornado por regra escrita deste lado — o assistente deixa de tratar «nome plano ausente do mount» como arquivo que não subiu. *A correspondência é transitória e não entra no repositório: o que precisava sobreviver está nesta entrada.*
```

---

## Fora de escopo

- **Nenhuma mudança no gerador.** Os itens (2) a (7) são feedback **registrado**, não implementado — a
  leva que os implementa depende do ponto de decisão 4 da análise. Não «aproveite a viagem».
- **Nenhuma entrada em `STATUS.md`, `DECISIONS.md` ou `CHANGELOG.md`.** Nada foi decidido, nenhuma
  versão mudou e nenhum check nasceu: entrada ali afirmaria um estado que não existe. O `logs/` do dia
  segue a regra normal do fecho, se ele rodar.
- **A carta ao FlatDrop não entra no repositório.** Correspondência é transitória por decisão
  registrada (D-123); o que precisava sobreviver dela está na Edição 1.
- **O `.flatdropignore` do próprio KCM** continua com o gatilho aberto que já tem; a medição dos 11
  nomes não o dispara (o defeito é do manifesto, não do que foi filtrado).

## Armadilhas desta WO

- **O texto inserido cita `grep`, `1b` e nomes de arquivo várias vezes.** Se for conferir por contagem,
  use as previsões do checklist abaixo e **não** invente outras: `grep -c` conta **linhas**, e as
  entradas novas são de linhas muito longas.
- **A âncora é um cabeçalho de seção curto.** Confira que a ocorrência é única **antes** de inserir. Se
  houver duas, **PARE** — não escolha a primeira.
- **Emoji na âncora.** `## 📮 Feedback para o Kit` carrega um emoji; copie a linha do arquivo, não deste
  documento, se o seu editor normalizar caracteres.
- **A entrada de 2026-08-18 («Carta 02 do Sand-Land-Map») tem de continuar sendo a terceira do bloco**
  depois da inserção. Se ela subir ou sumir, a inserção entrou no lugar errado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `meta/IDEAS.md`, e nada além. Os dois arquivos novos aparecem em
      `git status` como não rastreados até o `git add`.
- [ ] `grep -c "^## 📮 Feedback para o Kit$" meta/IDEAS.md` → **1** (a seção não foi duplicada).
- [ ] `grep -c "^### 2026-08-20 — " meta/IDEAS.md` → **2** (as duas entradas novas, e só elas).
- [ ] `grep -n "^### 2026-08-18 — Carta 02 do Sand-Land-Map" meta/IDEAS.md` → **uma linha, com número
      MAIOR** que o das duas entradas novas. É esta conferência que prova que a inserção ficou no topo
      da seção e não no meio dela.
- [ ] `test -f meta/analises/260820-ANALISE-a-afirmacao-verificavel.md` → o arquivo entregue pelo chat
      está no lugar. **Se não estiver, PARE**: o `git add` abaixo falharia em silêncio parcial e a
      entrada da Edição 1 passaria a apontar para um caminho inexistente.
- [ ] **WO só de doc:** não precisa de build nem de `validate.js` — a rede é o `git diff`.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado das cinco
conferências acima · o commit. **Não** substitua este relatório pelo bloco de fecho do chat.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/IDEAS.md meta/analises/260820-ANALISE-a-afirmacao-verificavel.md meta/workorders/260820-wo0101-extracao-do-mapsmith-11.md
```

```
git commit -m "docs(meta): registra a extracao do Mapsmith 11 e a carta 01 ao FlatDrop" -m "Nove itens de feedback extraidos do transcrito de 44 blocos: a familia da afirmacao verificavel (cinco refutacoes em 22 turnos, dez em duas series), comando inteiro e quem executa, Arquivar/Manter exaustivo com prazo, relatorio escrito antes da ultima acao, enunciacao do proximo comando no caminho verde, semantica real do AskUserQuestion, um relatorio por ato, o manifesto do FlatDrop, e o achado do defeito resolvido em paralelo por dois projetos. Nenhuma mudanca no gerador: os itens 2 a 7 esperam a decisao da analise. A analise entra versionada no mesmo commit para nao repetir o caso da analise untracked que gerou tres decisoes do lado do Mapsmith."
```

```
git push
```
