# WO 0126 — cinco regras que estavam FORA da secao de feedback, e o roteiro vira tipo

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco **alto**. Doze edicoes; uma e substituicao de bloco
> multi-linha em arquivo **CRLF**, e duas encostam no bloco de fecho, que e o texto mais fragil do kit.
> **Pre-requisito:** commit `ad9a70d`, arvore limpa (so `.claude/launch.json` fora de escopo), harness
> em **19/19 nichos · 105/105 · 0 erros**.
> **Base:** `DEC-048`, `DEC-052` e a clausula do fecho do `meta/CEREBRO.md` do projeto `Sand-Land-Map`;
> o `ROTEIRO-conferencia-humana` de 2026-08-29; e a tecnica «checagem por `grep` falha de dois jeitos
> previsiveis quando o que se confere e PROSA» das «Tecnicas especificas» deles (leva `97e4ed5`), tudo
> lido no chat em 2026-09-15.
> **Depende de:** wo0125 (aplicada, `ad9a70d`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: a `D-154` entra aqui.

> **Ancoras lidas em** (arquivo vivo lido NESTE turno, mount de `a02e16f` — manifesto de 2026-09-14
> 15:07 — desachatado em sandbox; o build reproduziu **884.945 bytes** e **19/19 · 105/105** antes de
> qualquer edicao, batendo exato com o repo):
> - `meta/workorders/_TEMPLATE.md` — a ultima linha do item `- **Declare quantos.**`; o bloco de 3 linhas `> Variantes — use a que couber…`; a linha `> WO que a leu — forma mecanica nao depende…`; e a linha `        **nunca peca um resultado que voce nao ensinou a produzir.**`
> - `src/index.template.html` — as MESMAS quatro ancoras em forma de literal JS dentro de `buildWoTemplate()`; e, no gerador do CEREBRO, o `L.push` que comeca por `"   **A frase só pode conter resultado que o usuário saiba produzir.**`
> - `meta/CEREBRO.md` — dentro do bullet `- **Próximo**`, a frase `se é fato do usuário, o comando exato e o que esperar ver vêm no MESMO turno. `
> - `validate.js` — a entrada `["modelo de WO: aviso e divida do autor",    /Aviso e divida do autor/,       ["woTemplate"]],`
> - `meta/DECISIONS.md` — o fim do arquivo (hoje termina no bloco da `D-153`)

---

## 1. Por que

**Nenhuma das cinco estava na secao «Feedback para o Kit» do projeto vizinho.** Elas vieram de uma
varredura do material que eles **nao** curaram para nos: duas decisoes (`DEC-048`, `DEC-052`), um
roteiro que eles escreveram para o dono em 29/08, uma «tecnica especifica» do CEREBRO deles, e uma
clausula do bloco de fecho que a versao deles tem e a nossa nao.

**O achado de metodo, e ele vale mais que os cinco:** feedback curado e o que o remetente **sabe** que
e transferivel. O que ele descobriu e guardou como decisao local costuma ser mais afiado, porque
nasceu de um caso que doeu — e ninguem o oferece, porque parece especifico demais. **Varrer o material
nao curado do vizinho rendeu cinco regras; a secao curada tinha rendido seis em dois dias de leitura.**

E uma delas e um conserto de assimetria. A `DEC-044` — «o Proximo diz de quem e o resultado» — **ja
estava no kit**, nos dois lados, e eu a declarei ausente numa varredura anterior: grepei a **frase**
e nao o **fato**, que e exatamente o que o nosso proprio Inventario proibe. O que falta de verdade e
outra coisa, e so a versao deles tem: **a frase vai sozinha**.

## 2. Contexto factual

**Medido no sandbox** (reconstruido do mount de `a02e16f`; baseline 884.945 bytes · 19/19 · 105/105):

| Arquivo | Antes | Depois |
|---|---|---|
| `meta/workorders/_TEMPLATE.md` | 16.340 | **18.883** |
| `meta/CEREBRO.md` | 49.585 | **50.155** |
| `src/index.template.html` | 393.742 | **397.047** |
| `validate.js` | 164.731 | **165.393** |
| `index.html` (gerado) | 884.945 | **888.250** |

- **Checagens: 105 antes, 105 depois.** `CLAUSULAS` vai de **35 para 40** *(comando: `node validate.js
  index.html | grep -oE "em [0-9]+ clausulas"`, antes e depois)*.
- **`C28` inalterado:** `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
  Nenhuma das cinco entra nas Instrucoes — quatro vao ao molde de WO e uma ao CEREBRO, os dois sem teto.
- **Tres pares negativos rodados e restaurados**, um por superficie: a casa perde
  `e ROTEIRO, e roteiro tem forma` no molde → *«a superficie INSTALADA `meta/workorders/_TEMPLATE.md`
  nao tem a clausula 'modelo de WO: roteiro tem forma'»*; a casa perde `E a frase vai sozinha` no
  CEREBRO → *«…`meta/CEREBRO.md` nao tem a clausula 'CEREBRO: a frase vai sozinha'»*; o produto perde
  `E declare de QUE` → *«o kit GERADO perdeu a clausula 'modelo de WO: unidade da cobertura'»*.
- **Um tropeco do proprio sandbox, contado porque e da familia da Edicao 2:** ao montar o terceiro par
  negativo, um comando abriu o `src/index.template.html` para escrita **antes** de calcular o texto, a
  expressao falhou no meio e o arquivo ficou **vazio** — o `build.js` acusou na hora («marcador
  `//__KCU_NICHE:dev__//` aparece 0x»), o backup restaurou e a integridade foi reconferida pelos cinco
  tamanhos. E o mesmo defeito que a Edicao 2 descreve: **operacao de duas metades em que a primeira
  destroi antes de a segunda existir.**

## Inventario

Tres perguntas ao artefato, e a terceira e a que produziu o achado de metodo:

1. *«O molde cobre isto?»* — varredura por `Substitui|Higiene de execu|servidor|quantos de quantos|
   tempor[aá]ri` no nosso molde contra o deles: **dois candidatos**, e um (`Substitui:`) ja existia.
2. *«O kit ja tem a `DEC-044`?»* — leitura do bullet do **Proximo** nos dois CEREBRO, palavra a palavra
   em vez de `grep`: **ja tem**, e o produto ate a explica melhor que a casa. **Uma** clausula falta.
3. *«O que eles guardaram como decisao local?»* — leitura dos 65 titulos de `DECISIONS`, integral nos de
   metodo: `DEC-048` e `DEC-052`. Mais o `_TREE`, os dois `ROTEIRO` e as 13 «Tecnicas especificas».

**Declaro as contagens — e de que:** 12 edicoes · 4 arquivos · 5 clausulas novas na lista `CLAUSULAS`
(35 → 40, **contadas na lista, nao no repositorio**) · **nenhum check novo** · 1 tipo de documento novo.
*Cobertura declarada: varri o molde de WO deles, os 65 titulos de decisao, um dos dois ROTEIRO, as 13
tecnicas e a secao de feedback inteira. **Nao varri** as 19 analises nem a spec — sao de dominio, e a
varredura delas segue **pendente**, nao concluida.*

---

## Edicao 1 — `meta/workorders/_TEMPLATE.md` · `DEC-048`: a unidade DENTRO do numero *(CASA)*

**Ancora** (uma linha, a ultima do item «Declare quantos»):

```
  pego: a WO dizia onze, o executor achou doze. A contagem e a rede; a proibicao do `head` sozinha nao pega.
```

**Inserir IMEDIATAMENTE APOS:**

```
- **E declare de QUE.** Numero de cobertura sem a unidade DENTRO dele nao e contestavel: «20/20
  comparados» media arquivos contra um pacote, e a conclusao «encerrado» falava do repositorio — duas
  coberturas diferentes, e a segunda nunca foi declarada. Escreva «20/20 arquivos do pacote comparados;
  varredura do repo: pendente», nao «20/20». A pergunta «quantos?» so e respondivel junto com «de que?»,
  e **no fim de um trabalho longo a segunda metade e a que se perde**.
```

## Edicao 2 — `meta/workorders/_TEMPLATE.md` · `DEC-052`: a variante MOVER *(CASA)*

> **Substituicao de bloco multi-linha em arquivo CRLF.** Ancora colada com `\n` puro nao casa — o
> editor reporta «nao encontrado», que e modo de falha seguro. **Nunca `sed -i`.**

**Ancora — substituir o BLOCO INTEIRO de 3 linhas:**

```
> Variantes — use a que couber, sempre com a ancora acima: **Inserir IMEDIATAMENTE APOS** ·
> **Inserir IMEDIATAMENTE ANTES** · **Remover o bloco inteiro** · **Criar arquivo novo** (sem ancora;
> diga o que fazer se ele ja existir).
```

**Substituir por (9 linhas):**

```
> Variantes — use a que couber, sempre com a ancora acima: **Inserir IMEDIATAMENTE APOS** ·
> **Inserir IMEDIATAMENTE ANTES** · **Remover o bloco inteiro** · **Criar arquivo novo** (sem ancora;
> diga o que fazer se ele ja existir) · **MOVER**.
> **Mover e a edicao mais fragil que existe numa WO de doc, porque tem DUAS METADES:** a que escreve no
> destino e a que remove a estrutura na origem. A ancora precisa conter **as duas**, e a que falta e
> sempre a de apagar — ancorar so no ponto de insercao descreve metade da operacao e, ao pe da letra,
> produz conteudo duplicado ou duas estruturas aninhadas com o texto antigo preso entre elas. Se voce
> nao consegue ancorar a remocao, **quebre em duas edicoes numeradas** — remover primeiro, inserir
> depois — e diga na WO que sao as duas metades da mesma operacao.
```

## Edicao 3 — `meta/workorders/_TEMPLATE.md` · a valvula da checagem de leitura *(CASA)*

**Ancora** (uma linha, a ultima da clausula do `^`):

```
> WO que a leu — forma mecanica nao depende de o autor lembrar, no fim, do que escreveu no meio.
```

**Inserir IMEDIATAMENTE APOS:**

```
> **Quando o `grep` nao serve, diga que a checagem e DE LEITURA.** Prosa quebra em varias linhas, e uma
> frase que a propria WO escreveu em duas nao e encontrada inteira por padrao nenhum de linha unica —
> **ja derrubou um check deste repositorio**, que exigia uma frase contigua e a recebeu partida. As
> saidas, nesta ordem: escolher como padrao um **trecho curto que caiba numa linha** e que o texto novo
> nao cite; ou, nao havendo, **escrever que aquele item e de leitura** — «abra o arquivo e confira que o
> paragrafo X esta inteiro» —, porque a lista de conferencia tem o direito de mandar abrir o arquivo.
> Inventar um padrao que nao casa e pior que admitir que ali nao cabe `grep`.
```

## Edicao 4 — `meta/workorders/_TEMPLATE.md` · o roteiro vira tipo com forma *(CASA)*

> O kit **exige** o roteiro desde a wo0123 e nunca disse o que ele e: zero ocorrencias de «roteiro» no
> `GLOSSARY.md` e no molde, e a unica no `CEREBRO.md` e a palavra solta dentro da regra que o exige.

**Ancora** (uma linha, o fim do campo «Quem roda»; a indentacao de 8 espacos faz parte dela):

```
        **nunca peca um resultado que voce nao ensinou a produzir.**
```

**Inserir IMEDIATAMENTE APOS:**

```
      - **Quando o passo e do dono, ele nao e item de checklist: e ROTEIRO, e roteiro tem forma.** Sai da
        lista de quem aplica e vai para o fecho do chat, como bloco proprio com quatro linhas de
        cabecalho — **Para** (quem, e com o que aberto) · **Por que** (o que a automacao nao cobriu,
        nomeando a WO) · **Formato** (cada item diz **o que se ve quando esta certo**, com numero quando
        existe numero) · **Tempo** (quanto dura num passe so) — e uma secao final **«o que este roteiro
        NAO testa»**, que e o que impede «passou tudo» de ser lido como «esta tudo certo». Forma medida
        em campo: 27 itens respondidos em dois roteiros, contra zero em tres tentativas sem forma.
```

## Edicao 5 — `meta/CEREBRO.md` · «a frase vai sozinha» *(CASA)*

> **Encosta no bloco de fecho — uma frase, e so.** A `DEC-044` ja esta ali; o que entra e o modo de
> falha oposto ao da lacuna. Nao reescreva mais nada deste bullet.

**Ancora** (trecho dentro do bullet `- **Próximo**`; **repare no espaco final**, que faz parte da ancora):

```
se é fato do usuário, o comando exato e o que esperar ver vêm no MESMO turno. 
```

**Inserir IMEDIATAMENTE APOS esse trecho, na MESMA linha** (o bullet e um paragrafo de uma linha so):

```
**E a frase vai sozinha: uma sentença citável, sem ressalva colada.** Qualquer coisa anexada a ela — «— inclusive os três comandos», «(e confirme se X)» — é lida como **segunda tarefa**, mesmo quando descreve trabalho que o executor já ia fazer por outro documento; o usuário não tem como saber que aquilo não é com ele. Se o executor precisa de algo a mais, isso mora **na WO**, onde ele lê. É o modo de falha oposto ao da lacuna, e mais difícil de ver porque parece zelo: a lacuna pede trabalho que falta, o apêndice entrega trabalho que sobra.
```

---

## Edicoes 6 a 9 — `src/index.template.html` · as MESMAS quatro do molde *(PRODUTO)*

Dentro de `buildWoTemplate()`, repita as Edicoes 1 a 4 em forma de **literal JS**: cada linha vira
`    "` + a linha correspondente + `",`. As ancoras sao as mesmas linhas, tambem em forma de literal.
**Aplique as Edicoes 1 a 4 primeiro e converta linha a linha, sem reformatar.** Os textos nao contem
aspas duplas internas (as citacoes sao « »), entao **nao ha escape a fazer**.

- **Edicao 6** = Edicao 1 · ancora `    "  pego: a WO dizia onze, o executor achou doze. …",` · inserir apos
- **Edicao 7** = Edicao 2 · substituicao do bloco de 3 linhas de literais por 9
- **Edicao 8** = Edicao 3 · ancora `    "> WO que a leu — forma mecanica nao depende …",` · inserir apos
- **Edicao 9** = Edicao 4 · ancora `    "        **nunca peca um resultado que voce nao ensinou a produzir.**",` · inserir apos

## Edicao 10 — `src/index.template.html` · «a frase vai sozinha» no CEREBRO gerado *(PRODUTO)*

> Aqui o texto e um `L.push` proprio, **nao** uma emenda no meio de outro: no gerador o bullet do
> Proximo ja esta quebrado em varias chamadas, e a clausula nova entra como a seguinte.

**Ancora** (uma linha, unica — o `L.push` que comeca por):

```
  L.push("   **A frase só pode conter resultado que o usuário saiba produzir.**
```

**Inserir IMEDIATAMENTE APOS essa linha:**

```
  L.push("   **E a frase vai sozinha: uma sentença citável, sem ressalva colada.** Qualquer coisa anexada a ela — «— inclusive os três comandos», «(e confirme se X)» — é lida como **segunda tarefa**, mesmo quando descreve trabalho que o executor já ia fazer por outro documento; o usuário não tem como saber que aquilo não é com ele. Se o executor precisa de algo a mais, isso mora **na WO**, onde ele lê. É o modo de falha oposto ao da lacuna, e mais difícil de ver porque parece zelo: a lacuna pede trabalho que falta, o apêndice entrega trabalho que sobra.");
```

---

## Edicao 11 — `validate.js` · cinco clausulas novas

**Ancora** (uma linha; o alinhamento por espacos faz parte dela — **recorte, nao redigite**):

```
    ["modelo de WO: aviso e divida do autor",    /Aviso e divida do autor/,       ["woTemplate"]],
```

**Inserir IMEDIATAMENTE APOS:**

```
    // wo0126: a leva do projeto do mapa que nao estava na secao de feedback deles — saiu das decisoes
    // DEC-048 e DEC-052, do ROTEIRO de 29/08 e da tecnica do `grep` em prosa no CEREBRO deles.
    ["modelo de WO: unidade da cobertura", /E declare de QUE/,              ["woTemplate"]],
    ["modelo de WO: mover tem duas metades", /DUAS METADES/,               ["woTemplate"]],
    ["modelo de WO: checagem de leitura",  /a checagem e DE LEITURA/,       ["woTemplate"]],
    ["modelo de WO: roteiro tem forma",    /e ROTEIRO, e roteiro tem forma/,["woTemplate"]],
    ["CEREBRO: a frase vai sozinha",       /a frase vai sozinha/,           ["cerebro"]],
```

## Edicao 12 — `meta/DECISIONS.md` · `D-154` (append no fim do arquivo)

**Ancora:** o fim do arquivo (hoje termina no bloco da `D-153`). **Inserir no FIM**, precedido de linha
em branco e `---`:

```

---

## D-154 — O material NÃO curado do vizinho rendeu mais que a seção de feedback, e o roteiro vira tipo

**Data:** 2026-09-15 · **Base:** `DEC-048`, `DEC-052`, o `ROTEIRO-conferencia-humana` de 29/08, a técnica do `grep` em prosa e a cláusula do fecho do `Sand-Land-Map` (leva `97e4ed5`).

**O achado de método, e ele vale mais que as cinco regras.** Nenhuma das cinco estava na seção «Feedback para o Kit» deles. Feedback curado é o que o remetente **sabe** que é transferível; o que ele guardou como decisão local costuma ser mais afiado, porque nasceu de um caso que doeu — e ninguém o oferece, porque parece específico demais. **Medido: a seção curada rendeu seis itens em dois dias de leitura; a varredura do material não curado rendeu cinco em um turno.** Regra: quando um projeto vizinho tem acervo, o `DECISIONS` e as «técnicas específicas` dele valem tanto quanto a seção que ele escreveu para nós.

**O que entrou.**
1. **`DEC-048` — a unidade DENTRO do número de cobertura.** O nosso Inventário mandava «declare quantos» e parava no numerador. «20/20 comparados» media arquivos contra um pacote enquanto a conclusão falava do repositório: duas coberturas, e a segunda nunca declarada. *A pergunta «quantos?» só é respondível junto com «de quê?», e no fim de um trabalho longo a segunda metade é a que se perde.*
2. **`DEC-052` — a variante MOVER, com as duas metades.** A wo0125 adotou a metade proibitiva da `FK-S` (aviso é dívida) e deixou a construtiva: toda edição que move tem a metade que escreve e a metade que apaga, e a âncora precisa conter as duas. Sem isso, ao pé da letra, o resultado é conteúdo duplicado ou estruturas aninhadas. **Caso do próprio turno em que a regra foi escrita:** um comando do sandbox abriu o template para escrita antes de calcular o texto, a expressão falhou no meio e o arquivo ficou vazio — mesma forma, primeira metade destruindo antes de a segunda existir.
3. **O roteiro vira tipo com forma.** O kit **exigia** o artefato desde a wo0123 e nunca o definiu: zero ocorrências de «roteiro» no `GLOSSARY.md` e no molde. Agora tem forma — **Para · Por que · Formato · Tempo** e uma seção **«o que este roteiro NÃO testa»** —, medida em campo: 27 itens respondidos em dois roteiros contra zero em três tentativas sem forma.
4. **A válvula da checagem de leitura.** O `grep` falha de dois jeitos previsíveis em prosa; o `^` da wo0123 cobre o primeiro (texto novo cita o velho) e não o segundo (**prosa quebra em várias linhas**), que derrubou o `C42` na wo0125. A saída escrita: trecho curto que caiba numa linha; e, não havendo, **declarar o item como de leitura** — a lista de conferência tem o direito de mandar abrir o arquivo. *Inventar um padrão que não casa é pior que admitir que ali não cabe `grep`.*
5. **«A frase vai sozinha».** A `DEC-044` — o «Próximo» diz de quem é o resultado — **já estava no kit**, nos dois lados, e uma varredura anterior a declarou ausente porque grepou a **frase** e não o **fato**, que é o que o próprio Inventário proíbe. O que faltava é o modo de falha **oposto ao da lacuna**: a ressalva colada. «— inclusive os três comandos» é lida como segunda tarefa mesmo descrevendo trabalho que o executor já ia fazer; a lacuna pede trabalho que falta, o apêndice entrega trabalho que sobra, e o apêndice é mais difícil de ver porque parece zelo.

**Uma assimetria medida, e ela corta nos dois sentidos.** O CEREBRO deles está **atrás** do nosso na estrutura do fecho — não tem o esqueleto «copie e preencha», nem o `Arquivar / Manter` em três estados, nem a regra de que cada linha é condição observável — e **à frente** na cláusula do Próximo. Projeto vizinho desatualizado não é projeto vizinho sem o que ensinar.

**O bloco de fecho continua sendo o único texto normativo do kit sem rede.** Nenhum check olha um turno de chat; o que segura é o esqueleto. Por isso esta WO acrescenta ali **uma** frase e para — encostar no fecho é barato de fazer e caro de errar.

**Custo medido:** `index.html` 884.945 → 888.250 bytes; `CLAUSULAS` 35 → 40; **checagens 105 → 105**; `C28` inalterado. Três pares negativos, um por superfície.

**Fica pendente:** as 19 análises e a spec deles, que são de domínio e **não** foram varridas — cobertura declarada como pendente, não como concluída. E a **`DEC-056`** (revisão de WO por quem não conhece o repositório), que segue sendo decisão do dono.
```

---

## Fora de escopo

- **Varrer as 19 analises e a spec do vizinho** — dominio, e a varredura fica declarada como pendente.
- **`DEC-056`** — decisao do dono, nao tomada.
- **A carta 04** — sai depois desta WO, quando a extracao fechar.
- **Reescrever o bloco de fecho** — esta WO acrescenta uma frase e nao toca no resto.
- **`meta/STATUS.md`, `meta/CHANGELOG.md`, log do dia** — canal do `/wrap`. **Salto de versao** — segue v1.122.0.

## Armadilhas desta WO

*(Pela `FK-S`: so o que e propriedade do arquivo ou do ambiente. O que era consertavel foi consertado
antes de entregar.)*

- **Dois arquivos CRLF.** A Edicao 2 (e a 7, que e ela no produto) e substituicao de bloco multi-linha —
  inevitavel, porque o bloco das variantes sai inteiro.
- **A Edicao 5 tem espaco no fim da ancora.** O trecho termina em `MESMO turno. ` com um espaco antes do
  texto novo. Recorte, nao redigite.
- **As Edicoes 6 a 9 dependem das 1 a 4.** Sao as mesmas, convertidas linha a linha.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente**: `meta/workorders/_TEMPLATE.md`, `meta/CEREBRO.md`,
      `src/index.template.html`, `index.html`, `validate.js`, `meta/DECISIONS.md` (modificados) + esta
      WO (novo). **Nada alem.**
- [ ] `node build.js` → `index.html` de 884.945 para **888.250 bytes**, 19 modulo(s).
- [ ] `node validate.js index.html` → **19/19 · 105/105 · 0 erros**. A contagem **nao sobe**.
- [ ] `C28` inalterado: `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- [ ] Tamanhos: `_TEMPLATE.md` **18.883** · `meta/CEREBRO.md` **50.155** ·
      `src/index.template.html` **397.047** · `validate.js` **165.393**.
- [ ] **Medido por comando ANTES e DEPOIS** *(regra da wo0125)*:
      `node validate.js index.html | grep -oE "em [0-9]+ clausulas"` → **35 antes, 40 depois**. A
      diferenca e de 5 porque a Edicao 11 acrescenta cinco entradas — **cinco clausulas na lista, nao
      cinco arquivos no repositorio.**
- [ ] Greps **ancorados em `^`**, todos de linha unica:
      - `grep -c "^- \*\*E declare de QUE" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^> \*\*Mover e a edicao mais fragil" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^> \*\*Quando o .grep. nao serve" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^      - \*\*Quando o passo e do dono" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^    \[\"modelo de WO: unidade da cobertura\"" validate.js` = **1**
      - `grep -c "^## D-154" meta/DECISIONS.md` = **1**
      - **Negativo, ancorado em `^`:**
        `grep -c "^> diga o que fazer se ele ja existir)\.$" meta/workorders/_TEMPLATE.md` = **0**
        (era 1 — a Edicao 2 troca o ponto final por ` · **MOVER**.`).
- [ ] **Item DE LEITURA — nao tente `grep`** *(e a valvula que esta WO institui, aplicada a ela mesma:
      os dois textos abaixo sao paragrafos longos que a WO cita inteiros na prosa, entao padrao de linha
      unica ou nao casa ou casa duas vezes)*:
      - **Abra `meta/CEREBRO.md`** no bullet `- **Próximo**` e confira que a frase «E a frase vai
        sozinha…» esta **dentro do mesmo paragrafo**, logo depois de «…vêm no MESMO turno.», e que
        **nada mais do bullet mudou**.
      - **Abra `src/index.template.html`** no gerador do CEREBRO e confira que o `L.push` novo esta
        **entre** o da clausula «A frase só pode conter resultado…» e o do item `2. **Estado**`.
- [ ] **Par negativo — copiado dos comandos que rodaram em sandbox; reproduza os TRES**, um por
      superficie, porque o `C43` protege duas direcoes e duas superficies instaladas diferentes:
      - **Quem roda:** quem aplica. **Backup dos tres arquivos antes** (`cp`); restaure por eles.
        **Leia o arquivo ANTES de abrir para escrita** — foi assim que o sandbox se truncou.
      - **A — casa, molde:** troque `e ROTEIRO, e roteiro tem forma` por `e um roteiro com forma propria`
        em `_TEMPLATE.md` → **VERMELHO**: *«a superficie INSTALADA `meta/workorders/_TEMPLATE.md` nao tem
        a clausula 'modelo de WO: roteiro tem forma'»*.
      - **B — casa, CEREBRO:** troque `E a frase vai sozinha` por `E a frase deve ir sozinha` em
        `meta/CEREBRO.md` → **VERMELHO**: *«…`meta/CEREBRO.md` nao tem a clausula 'CEREBRO: a frase vai
        sozinha'»*.
      - **C — produto:** troque `E declare de QUE` por `E diga a unidade` em `src/index.template.html`;
        `node build.js` e `node validate.js` → **VERMELHO**: *«o kit GERADO perdeu a clausula 'modelo de
        WO: unidade da cobertura'»*.
      - **Restaurar os tres**, `node build.js` de volta a **888.250 bytes**, harness 19/19 · 105/105
        antes do commit. Apague os backups e diga o caminho no relatorio.
- [ ] **Roteiro para o DONO — nao rode, entregue.** Continua pendente o herdado das wo0124/wo0125. Esta
      WO acrescenta ao mesmo roteiro: no `CEREBRO.md` gerado pelo kit, o bullet do **Proximo** traz a
      frase nova — *quando esta certo*, «E a frase vai sozinha» aparece **no mesmo paragrafo** da regra
      do resultado, e nao como item separado.
- [ ] Nada criado fora do repositorio alem dos tres backups temporarios.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/workorders/_TEMPLATE.md meta/CEREBRO.md src/index.template.html index.html validate.js meta/DECISIONS.md meta/workorders/260915-wo0126-cinco-regras-fora-da-secao-de-feedback.md
```

```
git commit -m "feat(kit): cinco regras do material nao curado do vizinho, e o roteiro vira tipo" -m "A unidade entra dentro do numero de cobertura; MOVER vira variante de edicao com as duas metades; o roteiro para o dono ganha forma propria depois de ser exigido por tres WOs sem nunca ter sido definido; a checagem que nao cabe em grep passa a poder se declarar de leitura; e a frase do Proximo passa a ir sozinha, sem ressalva colada. Nenhuma das cinco estava na secao de feedback do vizinho: sairam do DECISIONS, de um roteiro e das tecnicas especificas dele. Sem check novo: 35 clausulas viram 40. D-154."
```

```
git push
```
