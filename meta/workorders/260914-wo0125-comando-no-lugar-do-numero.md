# WO 0125 — o numero vira comando, o aviso vira divida, e duas correcoes de casa

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco **alto**. Nove edicoes; duas sao **substituicao de bloco
> multi-linha** em arquivo **CRLF**, e uma delas tem uma armadilha que o harness pega (ver Edicao 3).
> **Pre-requisito:** commit `3e96447`, arvore limpa (so `.claude/launch.json` fora de escopo), harness
> em **19/19 nichos · 105/105 · 0 erros**.
> **Base:** `FK-R` e `FK-S` do projeto `Sand-Land-Map` (`meta/IDEAS.md` §«Feedback para o Kit», leva
> `97e4ed5`), lidas por inteiro no chat em 2026-09-14; mais duas correcoes de defeito introduzido pelas
> wo0123/wo0124 deste repositorio.
> **Depende de:** wo0124 (aplicada, `5dd41d5`; fecho `3e96447`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: a `D-153` entra aqui.

> **Ancoras lidas em** (arquivo vivo lido NESTE turno, mount de `3e96447` — manifesto de 2026-09-14
> 15:07 — desachatado em sandbox; o build reproduziu **882.573 bytes** e **19/19 · 105/105** antes de
> qualquer edicao, batendo exato com o repo):
> - `meta/workorders/_TEMPLATE.md` — a linha `> **Checagem negativa vai ancorada em \`^\`.** Sem excecao.`; a linha `inserir varias linhas, ancore em UMA so e diga se o texto novo entra antes ou depois dela.]`; e o bloco de 8 linhas `- **Quem roda:** …` que a wo0123 deixou
> - `src/index.template.html` — as MESMAS tres ancoras em forma de literal JS dentro de `buildWoTemplate()`; e a entrada de `HYGIENE_RULES` que comeca por `    "**«Não verificado» é proibido para o que está no mount`
> - `validate.js` — a entrada `["modelo de WO: olho humano",     /olho humano num renderizador/, ["woTemplate"]],`
> - `meta/DECISIONS.md` — o fim do arquivo (hoje termina no bloco da `D-152`)

---

## 1. Por que

**Quatro frentes, duas delas conserto de estrago proprio.**

**(1) `FK-R`.** A regra que a wo0123 adotou (`FK-AB`, negativa ancorada em `^`) resolve a classe da
**citacao** — a WO conta uma frase que ela mesma insere. Ela **nao** resolve a classe do **numero
absoluto**, e essa pegou tres WOs seguidas deste repositorio: 4.915 linhas previstas contra 4.917
reais; uma ocorrencia prevista 10 contra 9; um negativo previsto 0 contra 1. **So o terceiro e da
classe que o `^` cobre.** O diagnostico do projeto do mapa e de posicao, nao de regra: *«a checklist e
escrita por ultimo, com o trabalho ja mentalmente concluido»*, por quem **nao tem o repositorio na
mao**. A proposta deles move a aritmetica para quem tem.

**(2) `FK-S`.** *«Quando o autor consegue descrever o modo de falha com precisao suficiente para
avisar, ele tem informacao suficiente para eliminar a falha — o aviso e a prova de que o conserto era
possivel.»* Caso medido aqui: a wo0124 avisou que certa frase *«nao e citada por nenhum texto inserido
— conferido»*, e **era falsa**; o conserto (ancorar o padrao em `^`) estava ao alcance de quem escreveu
o aviso.

> **As duas escaparam da triagem de 13/09** porque o projeto do mapa as marca como «ainda NAO
> enviadas» e eu li a secao inteira sem notar que a marca era deles, nao minha. O canal deles e o
> arquivo; o arquivo chegou.

**(3) A clausula do olho humano cita uma causa que a fonte nao sustenta.** A wo0123 escreveu *«as tres
voltaram sem conferencia, **porque o navegador nao estava conectado a sessao dele**»*. Conferido contra
o verbete: os numeros (tres tentativas, zero conferencias, 27 itens) sao da `FK-AC`, que diz *«as tres
falharam **por motivos diferentes** — extensao do Chrome devolvendo a aba para newtab, e depois, no app
desktop, screenshots em branco com timeout»*. A causa unica veio da `FK-AF`, que e **outro episodio**
(wo0090/wo0091). Nao e falso no espirito, e e mais especifico do que a fonte permite — e esta publicado
no que o kit entrega. A fonte ainda acrescenta o que a versao atual perdeu: *«a decisao nao depende de
saber por que a ferramenta falha — o que decidiu foi o contraste»*, que e o argumento mais forte.

**(4) `HYGIENE_RULES` com uma entrada de indentacao diferente.** Medido: **21 entradas com 2 espacos e
1 com 4** — a que a wo0124 inseriu. O texto da WO mandava 4 espacos por deslize de quem a escreveu
(citou o padrao do array vizinho), e quem aplicou seguiu o literal, que era a decisao certa: o executor
nao reformata por juizo proprio. O conserto e de quem errou.

## 2. Contexto factual

**Medido no sandbox** (reconstruido do mount de `3e96447`; baseline 882.573 bytes · 19/19 · 105/105):

| Arquivo | Antes | Depois |
|---|---|---|
| `meta/workorders/_TEMPLATE.md` | 14.127 | **16.340** |
| `src/index.template.html` | 391.370 | **393.742** |
| `validate.js` | 164.341 | **164.731** |
| `index.html` (gerado) | 882.573 | **884.945** |

- **Checagens: 105 antes, 105 depois.** `CLAUSULAS` vai de **33 para 35** *(comando medido: `node
  validate.js index.html | grep -oE "em [0-9]+ clausulas"`, antes e depois)*.
- **`C28` inalterado:** `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- **`HYGIENE_RULES`: 21+1 vira 22+0** *(comando medido: contar linhas do array que casam `^  "` e `^    "`)*.
- **Dois pares negativos rodados e restaurados:** a casa perde `peca o COMANDO — nao o numero` →
  *«a superficie INSTALADA … nao tem a clausula 'modelo de WO: comando no lugar do numero'»*; o produto
  perde `Aviso e divida do autor` → *«o kit GERADO perdeu a clausula 'modelo de WO: aviso e divida do
  autor'»*.
- **Um terceiro vermelho, nao provocado, e vale contar:** ao requebrar as linhas da Edicao 3, a frase
  `nunca peca um resultado que voce nao ensinou a produzir` ficou partida em duas linhas, e o **`C42`
  caiu** — ele exige a frase contigua. O texto final abaixo ja traz a frase inteira numa linha so.
  *Isto e um par negativo de graca: o `C42` provou que protege o que diz proteger.*

## Inventario

Duas perguntas ao artefato: *«onde o molde fala de numero previsto?»* (o bloco `Numero de checklist e
DERIVADO` e a clausula do `^`, no cabecalho — **duas casas, e as duas em par gerado/instalado**) e
*«onde o molde autoriza aviso?»* (a secao `## Armadilhas desta WO`, cujo corpo e um colchete de
instrucao — **uma casa, tambem em par**).

**Declaro as contagens:** 9 edicoes · 4 arquivos · 2 clausulas novas (33 → 35) · **nenhum check novo**
· 1 causa corrigida · 1 indentacao uniformizada.

---

## Edicao 1 — `meta/workorders/_TEMPLATE.md` · `FK-R`: o comando no lugar do numero *(CASA)*

**Ancora** (uma linha, unica):

```
> **Checagem negativa vai ancorada em `^`.** Sem excecao. O texto que uma WO insere quase sempre cita a
```

**Inserir IMEDIATAMENTE ANTES dessa linha:**

```
> **Onde o numero absoluto e caro de simular, peca o COMANDO — nao o numero.** «Rode isto antes, rode
> depois, diga os dois valores e por que a diferenca e essa.» Transfere a aritmetica de quem ESCREVE, que
> nao tem o repositorio na mao, para quem APLICA, que tem — e produz o dado que a WO queria, em vez de um
> palpite conferido. **Regra de corte:** previsao que depende de somar parcelas de edicoes diferentes, ou
> de contar ocorrencias dentro de texto que a propria WO insere, e **cara** e vai como antes/depois;
> contagem de uma linha unica ancorada em `^` e **barata** e vai como numero. **Medido:** tres WOs
> seguidas erraram um numero absoluto — 4.915 linhas previstas contra 4.917 reais (numero tirado de uma
> medicao feita antes da ultima edicao), uma ocorrencia prevista 10 contra 9 reais (duas parcelas somadas
> de cabeca) e um negativo previsto 0 contra 1 real. So o terceiro e da classe que o `^` resolve. Regra
> por si so nao conserta defeito de POSICAO: a checklist e escrita por ultimo, com o trabalho ja
> mentalmente concluido, e e ali que a aritmetica de quem nao tem o repo falha.
```

## Edicao 2 — `meta/workorders/_TEMPLATE.md` · `FK-S`: o aviso e divida *(CASA)*

**Ancora** (uma linha, unica — a ultima do colchete de instrucao da secao `## Armadilhas desta WO`):

```
inserir varias linhas, ancore em UMA so e diga se o texto novo entra antes ou depois dela.]
```

**Inserir IMEDIATAMENTE APOS essa linha, precedido de UMA linha em branco:**

```

**Aviso e divida do autor, nao protecao do leitor.** Quando voce consegue descrever o modo de falha com
precisao suficiente para avisar, voce tem informacao suficiente para **eliminar** a falha — o aviso e a
prova de que o conserto era possivel. Antes de escrever «⚠ cuidado com X», responda: por que X nao foi
resolvido na ancora, no padrao do grep ou na ordem das edicoes? Se a resposta existir, conserte e apague o
aviso. So sobra aqui o que e **propriedade do arquivo ou do ambiente** e nao esta ao seu alcance: fim de
linha CRLF, bloco que sera regenerado, numero de check ja usado por outra WO em voo. **Caso medido:** uma
WO avisou que certa frase «nao e citada por nenhum texto inserido — conferido», e era falsa; o conserto
(ancorar o padrao em `^`) estava ao alcance de quem escreveu o aviso.
```

## Edicao 3 — `meta/workorders/_TEMPLATE.md` · a causa do olho humano bate com a fonte *(CASA)*

> **Substituicao de bloco multi-linha em arquivo CRLF.** Se o editor colar com `\n` puro, a ancora nao
> casa e voce vera «nao encontrado» — modo de falha seguro. **Nunca `sed -i`.**

**Ancora — substituir o BLOCO INTEIRO de 8 linhas** (indentacao de 6 e 8 espacos faz parte da ancora):

```
      - **Quem roda:** por padrao, **quem aplica**. Vai ao dono o passo que toca **rede de terceiro**, o
        que **destroi algo fora do repositorio**, e o que exige **olho humano num renderizador** — abrir a
        tela e dizer o que aparece. O terceiro caso e excecao MEDIDA, nao preferencia: tres WOs seguidas
        puseram «abra e confira» na lista de quem aplica e as tres voltaram sem conferencia, porque o
        navegador nao estava conectado a sessao dele; no mesmo periodo, dois roteiros escritos para o dono
        devolveram 27 itens respondidos. Fora esses tres casos, leitura e operacao reversivel na mesma
        maquina nunca sao dele. E quando for dele, o passo chega com o comando exato, o que esperar ver, e
        o que fazer se vier diferente — **nunca peca um resultado que voce nao ensinou a produzir.**
```

**Substituir por (11 linhas):**

```
      - **Quem roda:** por padrao, **quem aplica**. Vai ao dono o passo que toca **rede de terceiro**, o
        que **destroi algo fora do repositorio**, e o que exige **olho humano num renderizador** — abrir a
        tela e dizer o que aparece. O terceiro caso e excecao MEDIDA, nao preferencia: tres WOs adiaram
        conferencia de interface esperando que quem aplica a fizesse, e as tres falharam **por motivos
        diferentes** — extensao do navegador devolvendo a aba, depois captura de tela em branco por
        timeout. Saldo: zero conferencias. No mesmo periodo, dois roteiros escritos para o dono devolveram
        27 itens respondidos, e **o que decidiu foi esse contraste, nao o diagnostico de cada falha** — nao
        e preciso saber por que a ferramenta falha para parar de depender dela. Fora esses tres casos,
        leitura e operacao reversivel na mesma maquina nunca sao dele. E quando for dele, o passo chega com
        o comando exato, o que esperar ver, e o que fazer se vier diferente —
        **nunca peca um resultado que voce nao ensinou a produzir.**
```

> **A ultima linha e separada de proposito.** O `C42` exige a frase
> `nunca peca um resultado que voce nao ensinou a produzir` **contigua**, sem quebra no meio. Requebrar
> essas duas ultimas linhas de outro jeito derruba o harness — foi medido em sandbox.

---

## Edicao 4 — `src/index.template.html` · `FK-R` no molde gerado *(PRODUTO)*

> **CRLF** e **literal JS**: cada linha e uma string com virgula no fim, indentada com **4 espacos**
> (e o padrao real de `buildWoTemplate`, conferido linha a linha neste turno).

**Ancora** (uma linha, unica):

```
    "> **Checagem negativa vai ancorada em `^`.** Sem excecao. O texto que uma WO insere quase sempre cita a",
```

**Inserir IMEDIATAMENTE ANTES dessa linha:**

```
    "> **Onde o numero absoluto e caro de simular, peca o COMANDO — nao o numero.** «Rode isto antes, rode",
    "> depois, diga os dois valores e por que a diferenca e essa.» Transfere a aritmetica de quem ESCREVE, que",
    "> nao tem o repositorio na mao, para quem APLICA, que tem — e produz o dado que a WO queria, em vez de um",
    "> palpite conferido. **Regra de corte:** previsao que depende de somar parcelas de edicoes diferentes, ou",
    "> de contar ocorrencias dentro de texto que a propria WO insere, e **cara** e vai como antes/depois;",
    "> contagem de uma linha unica ancorada em `^` e **barata** e vai como numero. **Medido:** tres WOs",
    "> seguidas erraram um numero absoluto — 4.915 linhas previstas contra 4.917 reais (numero tirado de uma",
    "> medicao feita antes da ultima edicao), uma ocorrencia prevista 10 contra 9 reais (duas parcelas somadas",
    "> de cabeca) e um negativo previsto 0 contra 1 real. So o terceiro e da classe que o `^` resolve. Regra",
    "> por si so nao conserta defeito de POSICAO: a checklist e escrita por ultimo, com o trabalho ja",
    "> mentalmente concluido, e e ali que a aritmetica de quem nao tem o repo falha.",
```

## Edicao 5 — `src/index.template.html` · `FK-S` no molde gerado *(PRODUTO)*

**Ancora** (uma linha, unica):

```
    "inserir varias linhas, ancore em UMA so e diga se o texto novo entra antes ou depois dela.]",
```

**Inserir IMEDIATAMENTE APOS essa linha** (repare na string vazia, que produz a linha em branco):

```
    "",
    "**Aviso e divida do autor, nao protecao do leitor.** Quando voce consegue descrever o modo de falha com",
    "precisao suficiente para avisar, voce tem informacao suficiente para **eliminar** a falha — o aviso e a",
    "prova de que o conserto era possivel. Antes de escrever «⚠ cuidado com X», responda: por que X nao foi",
    "resolvido na ancora, no padrao do grep ou na ordem das edicoes? Se a resposta existir, conserte e apague o",
    "aviso. So sobra aqui o que e **propriedade do arquivo ou do ambiente** e nao esta ao seu alcance: fim de",
    "linha CRLF, bloco que sera regenerado, numero de check ja usado por outra WO em voo. **Caso medido:** uma",
    "WO avisou que certa frase «nao e citada por nenhum texto inserido — conferido», e era falsa; o conserto",
    "(ancorar o padrao em `^`) estava ao alcance de quem escreveu o aviso.",
```

## Edicao 6 — `src/index.template.html` · a mesma correcao da causa *(PRODUTO)*

**Ancora — substituir o BLOCO INTEIRO de 8 linhas**, que e o texto da Edicao 3 em forma de literal JS:
cada linha da ancora e da substituicao e `    "` + a linha correspondente da Edicao 3 + `",`.
Aplique a Edicao 3 primeiro e converta linha a linha, **sem reformatar** — o conteudo e identico e as
aspas internas sao guillemets, entao **nao ha escape a fazer**.

## Edicao 7 — `src/index.template.html` · a indentacao volta ao padrao do array *(PRODUTO)*

**Ancora** (uma linha, unica — a entrada de `HYGIENE_RULES` que a wo0124 inseriu com **4** espacos
quando as outras 21 tem **2**):

```
    "**«Não verificado» é proibido para o que está no mount, e toda ressalva declara a leitura que a sustenta.**
```

**Substituir por:** a MESMA linha, inteira, com **dois espacos** de indentacao em vez de quatro. Nada
mais muda — nem uma letra do texto. *Efeito medido: −2 bytes no template e −2 no `index.html`, ja
embutidos nos tamanhos previstos.*

---

## Edicao 8 — `validate.js` · duas clausulas novas

**Ancora** (uma linha; o alinhamento por espacos faz parte dela — **recorte, nao redigite**):

```
    ["modelo de WO: olho humano",     /olho humano num renderizador/, ["woTemplate"]],
```

**Inserir IMEDIATAMENTE APOS:**

```
    // wo0125: FK-R e FK-S, as duas que a triagem de 13/09 deixou passar porque o projeto do mapa as
    // marcava como «ainda nao enviadas» — e o canal deles e o arquivo, nao a carta.
    ["modelo de WO: comando no lugar do numero", /peca o COMANDO — nao o numero/, ["woTemplate"]],
    ["modelo de WO: aviso e divida do autor",    /Aviso e divida do autor/,       ["woTemplate"]],
```

## Edicao 9 — `meta/DECISIONS.md` · `D-153` (append no fim do arquivo)

**Ancora:** o fim do arquivo (hoje termina no bloco da `D-152`). **Inserir no FIM**, precedido de linha
em branco e `---`:

```

---

## D-153 — O número previsto vira comando medido, o aviso vira dívida, e duas correções de casa

**Data:** 2026-09-14 · **Base:** `FK-R` e `FK-S` do `Sand-Land-Map` (leva `97e4ed5`), mais dois defeitos introduzidos pelas wo0123/wo0124 deste repositório.

**`FK-R` — o `^` não cobre o número absoluto.** A regra da wo0123 resolve a classe da **citação** (a WO conta uma frase que ela mesma insere). A classe do **número absoluto** ficou aberta e pegou três WOs seguidas daqui: 4.915 linhas previstas contra 4.917 reais, uma ocorrência prevista 10 contra 9, um negativo previsto 0 contra 1 — **só o terceiro** era da classe coberta. O diagnóstico do projeto do mapa é de **posição**, não de regra: *«a checklist é escrita por último, com o trabalho já mentalmente concluído»*, por quem não tem o repositório na mão. A regra nova move a aritmética para quem tem, com **regra de corte** para não virar burocracia: previsão que soma parcelas de edições diferentes, ou conta ocorrências dentro de texto que a WO insere, é cara e vai como antes/depois; contagem de linha única ancorada em `^` é barata e segue como número.

**`FK-S` — aviso é dívida do autor.** *«Quando o autor consegue descrever o modo de falha com precisão suficiente para avisar, ele tem informação suficiente para eliminar a falha.»* O caso é nosso: a wo0124 avisou que certa frase «não é citada por nenhum texto inserido — conferido», e **era falsa**, com o conserto ao alcance de quem escreveu o aviso. A seção de armadilhas passa a aceitar só o que é **propriedade do arquivo ou do ambiente** — CRLF, bloco regenerado, número de check em voo —, e tudo o mais volta como conserto.

**As duas escaparam da triagem de 13/09** porque o projeto do mapa as marca como «ainda NÃO enviadas». A marca é da contabilidade deles; **o canal é o arquivo, e o arquivo chegou**. Regra: feedback lido é feedback recebido, independente de o remetente considerá-lo despachado.

**Correção de fato — a causa do olho humano.** A cláusula da wo0123 dizia que as três conferências falharam *«porque o navegador não estava conectado à sessão dele»*. Os números são da `FK-AC`; a causa única veio da `FK-AF`, que é **outro episódio**. A fonte diz *«por motivos diferentes»* e acrescenta o que faltava: *«a decisão não depende de saber por que a ferramenta falha — o que decidiu foi o contraste»*. Texto normativo publicado com causa mais específica do que a fonte sustenta é o mesmo defeito de sempre, um nível acima: **não é número deduzido, é causalidade deduzida.**

**Correção de higiene — a indentação.** `HYGIENE_RULES` tinha 21 entradas com 2 espaços e 1 com 4, inserida pela wo0124 porque a WO mandava 4 (deslize de quem a escreveu, citando o padrão do array vizinho). Quem aplicou seguiu o literal e **fez certo**: o executor não reformata por juízo próprio. O conserto é de quem errou, e fica registrado que a ordem das duas coisas é essa.

**Um par negativo de graça.** Ao requebrar as linhas da cláusula corrigida, a frase `nunca peca um resultado que voce nao ensinou a produzir` ficou partida em duas e o **`C42` caiu** — ele exige a frase contígua. Nenhum teste foi desenhado para isso; o check provou sozinho que protege o que diz proteger, e o texto final traz a frase inteira numa linha.

**Custo medido:** `index.html` 882.573 → 884.945 bytes; `CLAUSULAS` 33 → 35; **checagens 105 → 105**; `C28` inalterado; `HYGIENE_RULES` 21+1 → 22+0.

**Fecha a extração da leva do mapa.** Das oito ausências (seis da triagem de 13/09 e estas duas), todas entraram. Segue aberta uma só, e é decisão do dono: a **`DEC-056`** — ordem de serviço irreversível passa por revisão de quem não conhece o repositório —, a única que exige um segundo agente. **A carta de volta ao `Sand-Land-Map` sai depois desta WO**, não antes: escrever antes de terminar a extração faria a carta descrever um estado que já mudou.
```

---

## Fora de escopo

- **`DEC-056`** — decisão do dono, não tomada.
- **A carta 04 ao `Sand-Land-Map`** — sai depois desta WO aplicada, por decisão do dono de 14/09.
- **`meta/STATUS.md`, `meta/CHANGELOG.md`, log do dia** — canal do `/wrap`.
- **Salto de versão** — segue em v1.122.0.

## Armadilhas desta WO

*(Pela `FK-S`, que esta WO institui: só sobra aqui o que é propriedade do arquivo ou do ambiente. O que
era consertável foi consertado antes de entregar — a frase do `C42` já vem inteira na Edição 3, e as
âncoras multi-linha já vêm com a indentação recortada do arquivo vivo.)*

- **`meta/workorders/_TEMPLATE.md` e `src/index.template.html` são CRLF.** As Edições 3 e 6 são
  substituição de bloco multi-linha nesses arquivos — inevitável, porque o bloco tem de sair inteiro.
  Modo de falha é seguro: âncora colada com `\n` puro não casa e o editor reporta «não encontrado».
- **A Edição 6 depende da 3.** Ela é a mesma substituição em forma de literal JS; aplique a 3 primeiro
  e converta linha a linha.
- **O número de check `C42` não é desta WO** — ele aparece aqui como *resultado esperado de um erro*,
  não como edição. Nenhum check novo é criado.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente**: `meta/workorders/_TEMPLATE.md`, `src/index.template.html`,
      `index.html`, `validate.js`, `meta/DECISIONS.md` (modificados) + esta WO (novo). **Nada além.**
- [ ] `node build.js` → `index.html` de 882.573 para **884.945 bytes**, 19 módulo(s).
- [ ] `node validate.js index.html` → **19/19 · 105/105 · 0 erros**.
- [ ] `C28` inalterado: `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- [ ] Tamanhos: `meta/workorders/_TEMPLATE.md` **16.340** · `src/index.template.html` **393.742** ·
      `validate.js` **164.731**. *Os três remedidos no sandbox depois da última edição — a primeira
      redação desta WO trazia 164.859 para o `validate.js`, número escrito antes da Edição 8 e não
      reconferido. Foi o próprio checklist que pegou, rodando contra o artefato antes de entregar:
      é a `FK-R` acontecendo dentro da WO que a institui.*
- [ ] **Medidos por comando ANTES e DEPOIS** *(é a regra que esta WO institui, aplicada a ela mesma —
      rode antes de começar e de novo no fim, e diga os dois valores)*:
      - `node validate.js index.html | grep -oE "em [0-9]+ clausulas"` → **33 antes, 35 depois**.
        A diferença é de 2 porque a Edição 8 acrescenta duas entradas.
      - `grep -cE '^  "' src/index.template.html` e `grep -cE '^    "' src/index.template.html`
        **restritos ao bloco de `HYGIENE_RULES`** → **21 e 1 antes, 22 e 0 depois**. A diferença é de
        uma linha migrando de 4 para 2 espaços, pela Edição 7.
- [ ] Greps — **ancorados em `^`**, todos de linha única e por isso previstos como número:
      - `grep -c "^> \*\*Onde o numero absoluto e caro de simular" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^\*\*Aviso e divida do autor" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^        e preciso saber por que a ferramenta falha" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^    \"> \*\*Onde o numero absoluto e caro de simular" src/index.template.html` = **1**
      - `grep -c "^    \"\*\*Aviso e divida do autor" src/index.template.html` = **1**
      - `grep -c "^    \[\"modelo de WO: comando no lugar do numero\"" validate.js` = **1**
      - `grep -c "^## D-153" meta/DECISIONS.md` = **1**
      - **Negativo, ancorado em `^`:**
        `grep -c "^        puseram «abra e confira» na lista de quem aplica" meta/workorders/_TEMPLATE.md` = **0**
        (era 1 — é a linha que a Edição 3 remove).
- [ ] **Par negativo — copiado dos comandos que rodaram em sandbox; reproduza os DOIS:**
      - **Quem roda:** quem aplica. **Backup dos dois arquivos antes** (`cp`); restaure por eles.
      - **A — a casa fica atrás:** em `meta/workorders/_TEMPLATE.md`, troque
        `peca o COMANDO — nao o numero` por `peca o comando em vez do numero` → **VERMELHO**:
        *«a superficie INSTALADA `meta/workorders/_TEMPLATE.md` nao tem a clausula 'modelo de WO:
        comando no lugar do numero'»*.
      - **B — o produto perde a regra:** em `src/index.template.html`, troque `Aviso e divida do autor`
        por `Aviso costuma ser divida do autor`; `node build.js` e `node validate.js` → **VERMELHO**:
        *«o kit GERADO perdeu a clausula 'modelo de WO: aviso e divida do autor'»*.
      - **Restaurar**, `node build.js` de volta a **884.945 bytes**, harness 19/19 · 105/105 antes do
        commit. Apague os backups e diga o caminho no relatório.
- [ ] **Roteiro para o DONO — não rode, entregue.** Continua pendente o da wo0124 (abrir o
      `index.html`, gerar o pacote e conferir os dois trechos na seção «Medição delegada» e no molde do
      zip). Esta WO acrescenta um item ao mesmo roteiro: no molde do zip, o parágrafo do **comando no
      lugar do número** aparece logo antes do parágrafo da checagem ancorada em `^` — *quando está
      certo*, começa por «**Onde o numero absoluto e caro de simular**».
- [ ] Nada criado fora do repositório além dos dois backups temporários.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/workorders/_TEMPLATE.md src/index.template.html index.html validate.js meta/DECISIONS.md meta/workorders/260914-wo0125-comando-no-lugar-do-numero.md
```

```
git commit -m "feat(kit): o numero previsto vira comando medido e o aviso vira divida do autor" -m "FK-R: onde o numero absoluto e caro de simular, o molde passa a pedir o comando antes e depois com a diferenca explicada, movendo a aritmetica de quem escreve para quem tem o repositorio. FK-S: a secao de armadilhas so aceita propriedade do arquivo ou do ambiente; o resto volta como conserto. Corrige a causa da clausula do olho humano, que citava outro episodio da fonte, e uniformiza a indentacao de HYGIENE_RULES. Sem check novo: 33 clausulas viram 35. D-153."
```

```
git push
```
