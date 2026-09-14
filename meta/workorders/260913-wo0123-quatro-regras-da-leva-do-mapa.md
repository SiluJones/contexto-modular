# WO 0123 — quatro regras da leva do projeto do mapa, nos dois lados do dogfooding

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco **alto**. Dez edicoes em quatro arquivos, dois deles
> **CRLF**, e uma delas dentro de um gerador que monta string por string.
> **Pre-requisito:** commit `0c84279`, arvore limpa (so `.claude/launch.json` nao rastreado, fora de
> escopo desde antes da wo0121), harness em **19/19 nichos · 105/105 · 0 erros**.
> **Base:** os verbetes `FK-AB`, `FK-V`, `FK-AC`/`FK-AF` e a `DEC-045` do projeto `Sand-Land-Map`
> (`meta/IDEAS.md` §«Feedback para o Kit» e `meta/DECISIONS.md`, leva de `7c2e8c5`), lidos por inteiro
> no chat em 2026-09-13, mais os casos medidos na aplicacao das wo0121 e wo0122 deste repositorio.
> **Depende de:** wo0122 (aplicada, `627fa33`; fecho `0c84279`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: a `D-151` entra aqui. O chat nao
> entrega documento depois. `meta/CEREBRO.md` e editado por esta WO como **superficie**, nao como
> registro — e a casa recebendo a mesma regra que o produto publica.

> **Ancoras lidas em** (arquivo vivo lido NESTE turno, mount de `0c84279` — manifesto de 2026-09-13
> 14:35 — desachatado em sandbox; o build reproduziu **877.931 bytes** e **19/19 · 105/105** antes de
> qualquer edicao, batendo exato com o repo):
> - `meta/workorders/_TEMPLATE.md` — a linha `> **Proximo comando:** …` e o bloco de 4 linhas `- **Quem roda:** por padrao, **quem aplica**. So vai ao dono …`
> - `src/index.template.html` — dentro de `buildWoTemplate()`, as MESMAS duas ancoras em forma de literal JS; e dentro do gerador do CEREBRO, a linha `L.push("- **Dados fora da raiz exigem permissão.** …`
> - `meta/CEREBRO.md` — a linha `- **Peça número cru, não interpretação.** …` na secao `## 📏 Medição delegada`
> - `validate.js` — `const instTpl = …` + `const instClaude = …`; a linha do `const gerado = {…}` e a do `const instalado = {…}`; a linha `woTemplate: "meta/workorders/_TEMPLATE.md", claudeMd: "CLAUDE.md"` do mapa `CAMINHO`; a ultima entrada `["modelo de WO: proximo comando", …]` da lista `CLAUSULAS`; e o titulo do `C43`

---

## 1. Por que

O projeto `Sand-Land-Map` mantem uma secao «Feedback para o Kit» com 30 verbetes. Medido: o KCM
registra, pelo rotulo, de `FK-A` a `FK-Q` — a leva entregue ate 2026-08-18. De `FK-R` em diante sao
**17 verbetes, escritos entre 18/08 e 10/09, e nenhum e citado em nenhum documento do kit**. Parte
chegou por outra porta; **seis ficaram de fora por conteudo**. Esta WO fecha quatro delas, e **tres tem
caso medido dentro deste repositorio, nas duas ultimas WOs**:

1. **`FK-AB`** — a wo0121 prometeu `grep "platinar/100%-ar um jogo" = 0` para uma frase que a propria
   Edicao 12 manda inserir. A regra em prosa **ja estava** no molde («Numero de checklist e DERIVADO…
   a WO costuma citar as frases que insere»), foi lida, e foi violada. O verbete diz exatamente isso:
   *«a FK-Y como prosa nao pega; ela precisa de forma mecanica»*.
2. **`FK-V` + a licao da `FIX-037`** — a wo0121 previu `hero-companion` = 10 somando de cabeca («1 no
   `case` + 9 de CSS»); o real e 9, porque a classe do elemento e montada por `"hero hero-" + niche.id`
   e nunca aparece literal. E a wo0121 prescreveu um par negativo de **uma** edicao quando o teste que
   de fato rodou fizera **tres** — a `FIX-037` ja registrou isso como licao, por outro caminho.
   **Duas descobertas independentes da mesma lei** e o criterio que o proprio acervo usa para chamar
   um padrao de estrutural.
3. **`FK-AC`/`FK-AF`** — e aqui **nao e ausencia, e conflito**, que e o achado desta WO. O molde diz
   hoje: *«leitura e operacao reversivel na mesma maquina nunca sao dele [do dono]»*. O campo mediu o
   contrario para um caso especifico: tres WOs seguidas puseram «abra os dois mapas e confira» na lista
   de quem aplica, e **as tres voltaram sem conferencia nenhuma**, porque o navegador nao estava
   conectado a sessao do executor; no mesmo periodo, dois roteiros escritos para o dono devolveram
   **27 itens respondidos**. A wo0121 deste repositorio repetiu o erro: pos «abrir o `index.html` no
   navegador» na checklist do Code. Deu certo por acaso.
4. **`DEC-045`** — o molde ja manda declarar a unidade de um `grep -c`, e para ai. A regra completa e
   maior e a formulacao do acervo e melhor que qualquer parafrase: *«saida deduzida e indistinguivel
   de saida medida no ponto onde e escrita, e so se separa no ponto onde e usada»*.

**E o segundo eixo desta WO, que o dono pediu explicitamente:** cada regra entra **na casa e no que o
kit entrega**, e nao em prosa paralela — no **mesmo texto**, para que a lista `CLAUSULAS` do `C43`
possa conferir os dois lados com um regex so. Regra que entrasse de um lado so voltaria a ser conselho
que o outro lado nao segue, que e a doenca da `FK-T`.

## 2. Contexto factual

**Medido no sandbox** (reconstruido do mount de `0c84279`; baseline `index.html` 877.931 bytes ·
19/19 · 105/105 · VERDE):

| Arquivo | Antes | Depois | Fim de linha |
|---|---|---|---|
| `meta/workorders/_TEMPLATE.md` | 12.280 | **14.127** | CRLF (187 → 205 linhas) |
| `meta/CEREBRO.md` | 47.042 | **47.916** | LF |
| `src/index.template.html` | 386.728 | **389.607** | CRLF (4.897 → 4.915) |
| `validate.js` | 162.158 | **163.771** | LF |
| `index.html` (gerado) | 877.931 | **880.810** | — |

- **Checagens: 105 antes, 105 depois.** Nenhum check novo — o `C43` ganha clausulas, e clausula nao e
  check. A lista `CLAUSULAS` vai de **25 para 31** entradas `[medido: contagem das linhas `["` dentro
  do bloco, nos dois arquivos]`.
- **`C28` inalterado:** `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
  **Nenhuma das quatro regras entra nas Instrucoes, e isso e decisao, nao acaso:** o combo tem **92
  caracteres** de folga e o incremento do modo Code tem **36**. As regras vao ao **CEREBRO gerado**
  (sem teto) e ao **molde de WO** (entregue no zip), que e onde elas de fato operam.
- **Tres pares negativos rodados e restaurados**, um por direcao, porque o `C43` protege duas:
  1. a **casa** perde `ancorada em \`^\`` no molde → *«a superficie INSTALADA `meta/workorders/_TEMPLATE.md` nao tem a clausula 'modelo de WO: negativa em ^'»*;
  2. a **casa** perde `quem tem a TELA vê` no CEREBRO → *«a superficie INSTALADA `meta/CEREBRO.md` nao tem a clausula 'CEREBRO: olho humano e do dono'»*;
  3. o **produto** perde `declara ONDE NASCE` → *«o kit GERADO perdeu a clausula 'modelo de WO: valor tem fonte'»*.

**Deduzido, e marcado como tal:** que as duas clausulas do CEREBRO valem para os 19 nichos e nao so
para quem escreve WO. Sai do conteudo — pedir um valor e pedir uma conferencia de tela acontecem em
qualquer nicho —, mas nenhum projeto fora do par KCM/mapa rodou com elas ainda.

## Inventario — de onde saiu a lista de edicoes

Tres perguntas, feitas ao artefato:

1. *«Onde mora o molde de WO?»* — `grep -n "woTemplate" src/index.template.html` e `grep -rn "_TEMPLATE"
   validate.js`. **Duas casas**, e e o ponto: `buildWoTemplate()` no produto e
   `meta/workorders/_TEMPLATE.md` na casa, ja pareadas pelo `C43`.
2. *«Onde o kit fala de pedir valor e de quem confere?»* — a secao `## Medição delegada` existe **nos
   dois lados**: gerada por `buildClaudeMd` e escrita a mao em `meta/CEREBRO.md`. **Segundo par.**
3. *«Que par o `C43` NAO cobre?»* — leitura do mapa `gerado`/`instalado`: quatro superficies, e o
   `meta/CEREBRO.md` **nao esta entre elas**. O par do CEREBRO gerado nunca foi o `CLAUDE.md` da casa
   (ponteiro curto, adaptado de proposito) — e o `meta/CEREBRO.md`, que nunca foi comparado com nada.

**Declaro as contagens:** 10 edicoes · 4 arquivos · 6 clausulas novas (25 → 31) · 1 superficie nova no
`C43` (4 → 5) · **nenhum check novo**.

---

## Edicao 1 — `meta/workorders/_TEMPLATE.md` · as tres regras de cabecalho *(CASA)*

> **CRLF.** Ancora de UMA linha.

**Ancora** (comeco da linha, unica no arquivo):

```
> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.
```

**Inserir IMEDIATAMENTE ANTES dessa linha:**

```
> **Checagem negativa vai ancorada em `^`.** Sem excecao. O texto que uma WO insere quase sempre cita a
> frase que ela manda conferir, e a cita no MEIO de uma linha, dentro de uma explicacao: `grep -c "frase"`
> = 0 falha ai, `grep -c "^frase"` nao. A regra em prosa do paragrafo acima ja existia e foi violada pela
> WO que a leu — forma mecanica nao depende de o autor lembrar, no fim, do que escreveu no meio.
> **Padrao de conferencia e RECORTADO, nunca redigitado.** O padrao do `grep` sai por copia do texto da
> ancora citada nesta mesma WO; o comando do par negativo sai do comando que voce de fato rodou. Padrao
> que voce nao consegue recortar de uma ancora e sinal de que a conferencia mede outra coisa. Ja custou
> duas vezes: um `grep` pedido com dois espacos de indentacao tendo a linha certa, com quatro, citada
> tres paragrafos acima; e um par negativo prescrito com uma edicao quando o teste que rodou fizera tres.
> **Valor exigido por uma instrucao declara ONDE NASCE.** Numero: o comando que o produz. Contagem: a
> unidade (linha ou ocorrencia). Carimbo de hora: `date +%y%m%d-%H%M`, rodado na hora. Resultado de
> terceiro: de quem, e em que artefato ele ja esta escrito. Valor exigido sem fonte e preenchido por
> deducao — e saida deduzida e indistinguivel de saida medida no ponto onde e ESCRITA; as duas so se
> separam no ponto onde e USADA, tarde demais.
```

## Edicao 2 — `meta/workorders/_TEMPLATE.md` · «Quem roda» ganha o terceiro caso *(CASA)*

**Ancora — substituir o BLOCO INTEIRO de 4 linhas** (dentro do item «Teste manual que a validacao NAO
cobre»; atencao a indentacao de 6 e 8 espacos, que faz parte da ancora):

```
      - **Quem roda:** por padrao, **quem aplica**. So vai ao dono o passo que toca **rede de terceiro**
        ou **destroi algo fora do repositorio**; leitura e operacao reversivel na mesma maquina nunca sao
        dele. E quando for dele, o passo chega com o comando exato, o que esperar ver, e o que fazer se
        vier diferente — **nunca peca um resultado que voce nao ensinou a produzir.**
```

**Substituir por:**

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

## Edicao 3 — `meta/CEREBRO.md` · as duas clausulas universais *(CASA)*

**Ancora** (a linha inteira, na secao `## 📏 Medição delegada`; ela e longa — copie ate o fim):
a que comeca por `- **Peça número cru, não interpretação.** Diga o comando ou o que contar`.

**Inserir IMEDIATAMENTE APOS essa linha, como duas linhas novas:**

```
- **Todo valor que você pede declara onde nasce.** Número: o comando que o produz. Contagem: a unidade (linha ou ocorrência). Carimbo de hora: o comando de data, rodado na hora. Resultado de terceiro: de quem, e em que arquivo já está escrito. Valor exigido sem fonte é preenchido por dedução — e saída deduzida é indistinguível de saída medida no ponto onde é ESCRITA; as duas só se separam no ponto onde é USADA, tarde demais.
- **Quem tem o disco mede; quem tem a TELA vê.** Conferência que exige olho humano num renderizador — abrir o app e dizer o que aparece — é do dono, em roteiro onde cada item diz **o que se vê quando está certo**. Não é preferência: três pedidos de «abra e confira» dirigidos à execução voltaram sem conferência nenhuma, e no mesmo período dois roteiros escritos para o dono devolveram 27 itens respondidos.
```

---

## Edicao 4 — `src/index.template.html` · o mesmo cabecalho, dentro de `buildWoTemplate()` *(PRODUTO)*

> **CRLF**, e aqui o texto e **literal JS**: cada linha e uma string com virgula no fim, indentada com
> 4 espacos. As aspas internas de `"frase"` vao **escapadas** (`\"`). Copie o bloco como esta.

**Ancora** (uma linha, unica no arquivo):

```
    "> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.",
```

**Inserir IMEDIATAMENTE ANTES dessa linha:**

```
    "> **Checagem negativa vai ancorada em `^`.** Sem excecao. O texto que uma WO insere quase sempre cita a",
    "> frase que ela manda conferir, e a cita no MEIO de uma linha, dentro de uma explicacao: `grep -c \"frase\"`",
    "> = 0 falha ai, `grep -c \"^frase\"` nao. A regra em prosa do paragrafo acima ja existia e foi violada pela",
    "> WO que a leu — forma mecanica nao depende de o autor lembrar, no fim, do que escreveu no meio.",
    "> **Padrao de conferencia e RECORTADO, nunca redigitado.** O padrao do `grep` sai por copia do texto da",
    "> ancora citada nesta mesma WO; o comando do par negativo sai do comando que voce de fato rodou. Padrao",
    "> que voce nao consegue recortar de uma ancora e sinal de que a conferencia mede outra coisa. Ja custou",
    "> duas vezes: um `grep` pedido com dois espacos de indentacao tendo a linha certa, com quatro, citada",
    "> tres paragrafos acima; e um par negativo prescrito com uma edicao quando o teste que rodou fizera tres.",
    "> **Valor exigido por uma instrucao declara ONDE NASCE.** Numero: o comando que o produz. Contagem: a",
    "> unidade (linha ou ocorrencia). Carimbo de hora: `date +%y%m%d-%H%M`, rodado na hora. Resultado de",
    "> terceiro: de quem, e em que artefato ele ja esta escrito. Valor exigido sem fonte e preenchido por",
    "> deducao — e saida deduzida e indistinguivel de saida medida no ponto onde e ESCRITA; as duas so se",
    "> separam no ponto onde e USADA, tarde demais.",
```

## Edicao 5 — `src/index.template.html` · «Quem roda» no molde gerado *(PRODUTO)*

**Ancora — substituir o BLOCO INTEIRO de 4 linhas** dentro de `buildWoTemplate()`:

```
    "      - **Quem roda:** por padrao, **quem aplica**. So vai ao dono o passo que toca **rede de terceiro**",
    "        ou **destroi algo fora do repositorio**; leitura e operacao reversivel na mesma maquina nunca sao",
    "        dele. E quando for dele, o passo chega com o comando exato, o que esperar ver, e o que fazer se",
    "        vier diferente — **nunca peca um resultado que voce nao ensinou a produzir.**",
```

**Substituir por:**

```
    "      - **Quem roda:** por padrao, **quem aplica**. Vai ao dono o passo que toca **rede de terceiro**, o",
    "        que **destroi algo fora do repositorio**, e o que exige **olho humano num renderizador** — abrir a",
    "        tela e dizer o que aparece. O terceiro caso e excecao MEDIDA, nao preferencia: tres WOs seguidas",
    "        puseram «abra e confira» na lista de quem aplica e as tres voltaram sem conferencia, porque o",
    "        navegador nao estava conectado a sessao dele; no mesmo periodo, dois roteiros escritos para o dono",
    "        devolveram 27 itens respondidos. Fora esses tres casos, leitura e operacao reversivel na mesma",
    "        maquina nunca sao dele. E quando for dele, o passo chega com o comando exato, o que esperar ver, e",
    "        o que fazer se vier diferente — **nunca peca um resultado que voce nao ensinou a produzir.**",
```

## Edicao 6 — `src/index.template.html` · as duas clausulas no CEREBRO gerado *(PRODUTO)*

> Este e o lado que chega aos **19 nichos**, nao so a quem escreve WO. As outras duas regras (o `^` e o
> «recortado») ficam **de fora daqui de proposito**: sao especificas de quem escreve ordem de servico,
> e o CEREBRO nao ensina WO.

**Ancora** (uma linha, unica — a do `L.push` que comeca por `- **Dados fora da raiz exigem permissão.**`).

**Inserir IMEDIATAMENTE ANTES dessa linha:**

```
  L.push("- **Todo valor que você pede declara onde nasce.** Número: o comando que o produz. Contagem: a unidade (linha ou ocorrência). Carimbo de hora: o comando de data, rodado na hora. Resultado de terceiro: de quem, e em que arquivo já está escrito. Valor exigido sem fonte é preenchido por dedução — e saída deduzida é indistinguível de saída medida no ponto onde é ESCRITA; as duas só se separam no ponto onde é USADA, tarde demais.");
  L.push("- **Quem tem o disco mede; quem tem a TELA vê.** Conferência que exige olho humano num renderizador — abrir o app e dizer o que aparece — é do dono, em roteiro onde cada item diz **o que se vê quando está certo**. Não é preferência: três pedidos de «abra e confira» dirigidos à execução voltaram sem conferência nenhuma, e no mesmo período dois roteiros escritos para o dono devolveram 27 itens respondidos.");
```

---

## Edicao 7 — `validate.js` · a quinta superficie

**Ancora** (duas linhas consecutivas, dentro do `C43`):

```
  const instTpl = lerRepo("meta/workorders/_TEMPLATE.md");
  const instClaude = lerRepo("CLAUDE.md");
```

**Inserir IMEDIATAMENTE APOS:**

```
  // wo0123: a QUINTA superficie. O par do CEREBRO gerado nunca foi o `CLAUDE.md` da casa (que e
  // ponteiro curto e adaptado de proposito) e sim o `meta/CEREBRO.md` — e ele nunca foi comparado
  // com nada. Entra com as duas clausulas desta leva, nao com as antigas: comparar retroativamente
  // transformaria adaptacao legitima em falha, que e o erro que o comentario acima ja evitou uma vez.
  const instCerebro = lerRepo("meta/CEREBRO.md");
```

## Edicao 8 — `validate.js` · os tres mapas ganham a coluna nova

**8a — Ancora / Substituir por** (duas linhas consecutivas):

```
  const gerado = { wrap: kit.wrap, applyWo: kit.applyWo, woTemplate: kit.woTemplate, claudeMd: kit.claudeMd };
  const instalado = { wrap: instWrap, applyWo: instApply, woTemplate: instTpl, claudeMd: instClaude };
```
```
  const gerado = { wrap: kit.wrap, applyWo: kit.applyWo, woTemplate: kit.woTemplate, claudeMd: kit.claudeMd, cerebro: T.buildClaudeMd(T.normNiche(T.NICHES.dev)) };
  const instalado = { wrap: instWrap, applyWo: instApply, woTemplate: instTpl, claudeMd: instClaude, cerebro: instCerebro };
```

> **Por que `T.buildClaudeMd(...)` e nao `kit.claudeMd`:** medido — `kit.claudeMd` e o `CLAUDE.md`
> **curto** (o ponteiro que o Claude Code le em todo turno), nao o CEREBRO. Usar `kit.claudeMd` aqui
> deixa o check VERMELHO com *«o kit GERADO perdeu a clausula 'CEREBRO: valor declara a fonte'»* — foi
> o primeiro resultado em sandbox, e e o alarme correto sobre a fonte errada. O nicho `dev` e so o
> portador: as duas clausulas sao universais e saem iguais em qualquer um.

**8b — Ancora / Substituir por** (uma linha, no mapa `CAMINHO`):

```
    woTemplate: "meta/workorders/_TEMPLATE.md", claudeMd: "CLAUDE.md"
```
```
    woTemplate: "meta/workorders/_TEMPLATE.md", claudeMd: "CLAUDE.md", cerebro: "meta/CEREBRO.md"
```

## Edicao 9 — `validate.js` · seis clausulas novas

**Ancora** (a ultima entrada do bloco de clausulas do molde de WO; repare no alinhamento por espacos,
que faz parte da linha):

```
    ["modelo de WO: proximo comando", /Proximo comando/i,            ["woTemplate"]],
```

**Inserir IMEDIATAMENTE APOS:**

```
    // wo0123: as quatro regras da leva do projeto do mapa (FK-AB, FK-V+FIX-037, FK-AF, DEC-045).
    // Entram AQUI por construcao: esta tabela confere a MESMA clausula no molde que o kit GERA e no
    // molde INSTALADO na casa, que e o par de dogfooding. Regra que entrasse so num dos dois lados
    // voltaria a ser conselho que o outro lado nao segue.
    ["modelo de WO: negativa em ^",   /ancorada em `\^`/,            ["woTemplate"]],
    ["modelo de WO: recortado",       /RECORTADO, nunca redigitado/,  ["woTemplate"]],
    ["modelo de WO: valor tem fonte", /declara ONDE NASCE/,           ["woTemplate"]],
    ["modelo de WO: olho humano",     /olho humano num renderizador/, ["woTemplate"]],
    // As duas que valem para os 19 nichos, nao so para quem escreve WO — por isso vao ao CEREBRO,
    // que todo nicho recebe, e nao ao molde, que so o modo Code entrega.
    ["CEREBRO: valor declara a fonte", /declara onde nasce/,          ["cerebro"]],
    ["CEREBRO: olho humano e do dono", /quem tem a TELA v/,           ["cerebro"]],
```

## Edicao 10 — `validate.js` · o titulo do `C43` tambem nao pode mentir

Duas substituicoes **na mesma linha** do `check(...)` do `C43`:

- `as QUATRO superficies instaladas do proprio KCM` → `as CINCO superficies instaladas do proprio KCM`
- `(wo0087, generalizado na wo0116)` → `(wo0087, generalizado na wo0116 e na wo0123)`

> E o `C102` aplicado ao proprio harness: contagem escrita em titulo envelhece igual a contagem escrita
> em prosa, e nenhum check abre o titulo de outro check.

---

## Edicao 11 — `meta/DECISIONS.md` · `D-151` (append no fim do arquivo)

**Ancora:** o fim do arquivo (hoje termina no bloco da `FIX-037`). **Inserir no FIM**, precedido de
linha em branco e `---`:

```

---

## D-151 — Quatro regras da leva do mapa entram nos dois lados, e o C43 ganha a quinta superfície

**Data:** 2026-09-13 · **Base:** `FK-AB`, `FK-V`, `FK-AC`/`FK-AF` e `DEC-045` do projeto `Sand-Land-Map` (leva `7c2e8c5`), mais os casos medidos na aplicação das wo0121 e wo0122 deste repositório.

**O que entra, e por quê cada uma tem caso e não só argumento.**
1. **Checagem negativa ancorada em `^`, sem exceção** (`FK-AB`). A regra em prosa já existia no molde e foi violada pela WO que a leu: a wo0121 pediu `grep = 0` para uma frase que ela própria manda inserir. **Forma mecânica não depende de o autor lembrar, no fim, do que escreveu no meio** — e é essa a diferença entre uma regra que pega e um conselho que não pega.
2. **Padrão de conferência é recortado, nunca redigitado** (`FK-V` + a lição da `FIX-037`). Duas ocorrências independentes: o `hero-companion` = 10 somado de cabeça quando o real é 9, e o par negativo prescrito com uma edição quando o teste rodado fizera três. Padrão que não se consegue recortar de uma âncora é sinal de que a conferência mede outra coisa.
3. **Olho humano num renderizador é do dono** (`FK-AC`/`FK-AF`). **Não é ausência, é conflito:** o molde dizia «leitura e operação reversível na mesma máquina nunca são dele», e o campo mediu o contrário para este caso — três WOs pediram «abra e confira» à execução e as três voltaram sem conferência, contra 27 itens respondidos por dois roteiros escritos para o dono. A cláusula vira exceção **medida**, com o número junto, para não ser lida como preferência.
4. **Valor exigido declara onde nasce** (`DEC-045`). Número → o comando. Contagem → a unidade. Hora → o comando de data. Resultado de terceiro → de quem, e em que arquivo já está. *«Saída deduzida é indistinguível de saída medida no ponto onde é escrita, e só se separa no ponto onde é usada»* — por isso a fonte vai na instrução, não na revisão.

**Os dois lados, que é o ponto estrutural.** Cada regra entra **no mesmo texto** na casa e no que o kit entrega — `meta/workorders/_TEMPLATE.md` e `buildWoTemplate()`; `meta/CEREBRO.md` e o CEREBRO gerado —, e não em prosa paralela. Isso não é elegância: é o que permite à lista `CLAUSULAS` do `C43` conferir os dois lados **com um regex só**. Regra escrita de um lado só volta a ser conselho que o outro não segue, que é a doença que a `FK-T` descreveu.

**A quinta superfície.** O `C43` comparava quatro instaladas, e o `meta/CEREBRO.md` — que é o par real do CEREBRO gerado — **nunca tinha sido comparado com nada**. Entra com as duas cláusulas desta leva e **não com as antigas**: comparar retroativamente transformaria adaptação legítima em falha, que é o erro que o próprio comentário do check já evitou uma vez, no `CLAUDE.md`.

**Onde as regras NÃO entram, e é decisão.** Nenhuma das quatro vai às Instruções: medido, o combo tem 92 caracteres de folga e o incremento do modo Code tem 36. E as duas regras de WO (`^` e «recortado») ficam fora do CEREBRO gerado, porque o CEREBRO não ensina WO — o kit teria vocabulário sem uso para 18 dos 19 nichos.

**Custo medido:** `index.html` 877.931 → 880.810 bytes; `CLAUSULAS` 25 → 31; superfícies do `C43` 4 → 5; **checagens 105 → 105** (cláusula não é check); `C28` inalterado. Três pares negativos, um por direção protegida.

**Fica pendente:** as outras duas ausências da mesma leva — a `FK-AE` (nota no mount é insumo obrigatório, e «não verificado» é proibido para o que está no mount) e a `FK-AD` (manifesto e árvore descritos por PERGUNTA, não por nome) —, que são do ritual e não do molde, e por isso vão numa WO própria. E a `DEC-056` (revisão externa de WO irreversível) segue não decidida: é a única da lista que exige um segundo agente.
```

---

## Fora de escopo

- **`FK-AE` e `FK-AD`** — são do ritual, moram no CEREBRO §abertura de turno, e misturá-las aqui
  faria uma WO de duas naturezas. Vão na seguinte.
- **`DEC-056`** (revisão externa) — decisão do dono, ainda não tomada; custa um segundo agente.
- **Enviar de volta ao `Sand-Land-Map`** que as quatro foram aceitas — é correspondência, e o canal
  dela não é esta WO.
- **`meta/STATUS.md`, `meta/CHANGELOG.md` e o log do dia** — canal do `/wrap`.
- **Salto de versão** — segue em v1.122.0 (o `C54` exige os três carimbos juntos; o precedente é não
  saltar por WO).

## Armadilhas desta WO

- **Dois arquivos CRLF** (`meta/workorders/_TEMPLATE.md`, 187 linhas; `src/index.template.html`, 4.897).
  As Edições 2 e 5 são **substituições de bloco multi-linha** nesses arquivos — é a única forma possível
  aqui, porque o bloco «Quem roda» tem de sair inteiro. Se o editor colar com `\n` puro, a âncora não
  casa e você verá «não encontrado», **não** uma aplicação errada: o modo de falha é seguro. **Nunca
  `sed -i`** em nenhum dos dois.
- **A Edição 4 é texto dentro de literais JS.** As aspas de `"frase"` vão escapadas (`\"`) e cada linha
  termina em `",`. Colar o texto da Edição 1 aqui quebra o build com erro de sintaxe.
- **A indentação faz parte da âncora** nas Edições 2, 5 e 9 (6 e 8 espaços nas duas primeiras;
  alinhamento por espaços na terceira). É o caso exato da `FK-V`: **recorte, não redigite.**
- **A Edição 8a tem uma fonte fácil de errar.** `kit.claudeMd` parece o CEREBRO e é o `CLAUDE.md` curto.
  O erro dá VERMELHO imediato e com mensagem clara, mas custa um ciclo — está documentado na própria
  edição.
- **Esta WO cita, na prosa e nas edições, as frases que ela insere.** Todo `grep` do checklist abaixo é
  **ancorado em `^`** ou medido por âncora recortada, que é exatamente a regra que a WO institui. Se
  você encontrar no checklist um padrão não ancorado, é defeito desta WO — **reporte**.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente**: `meta/workorders/_TEMPLATE.md`, `meta/CEREBRO.md`,
      `src/index.template.html`, `index.html`, `validate.js`, `meta/DECISIONS.md` (modificados) + esta
      WO (novo). **Nada além.**
- [ ] `node build.js` → `index.html` de 877.931 para **880.810 bytes**, 19 módulo(s).
      *Previsto por build real em sandbox reconstruído do mount, cujo baseline bateu exato (877.931).*
- [ ] `node validate.js index.html` → **19/19 nichos · 105/105 checagens · 0 erros**. A contagem
      **não sobe**: cláusula não é check.
- [ ] `C43` verde, e a mensagem passa a dizer **31 cláusulas** (eram 25).
- [ ] `C28` inalterado: `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- [ ] Tamanhos: `meta/workorders/_TEMPLATE.md` **14.127** · `meta/CEREBRO.md` **47.916** ·
      `src/index.template.html` **389.607** · `validate.js` **163.771**.
      *Os dois CRLF já são CRLF no repo e o sandbox também gravou CRLF — não há correção de fim de
      linha a fazer. Se divergir, rode `git ls-files --eol` nos dois antes de qualquer outra hipótese.*
- [ ] Greps — **todos ancorados em `^`**, porque esta WO cita na prosa as frases que insere
      (`grep -c` conta LINHAS; é o que se quer aqui, porque cada frase abre uma linha):
      - `grep -c "^> \*\*Checagem negativa vai ancorada" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^> \*\*Padrao de conferencia e RECORTADO" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^> \*\*Valor exigido por uma instrucao declara ONDE NASCE" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^      - \*\*Quem roda:\*\* por padrao" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^- \*\*Todo valor que você pede declara onde nasce" meta/CEREBRO.md` = **1**
      - `grep -c "^- \*\*Quem tem o disco mede; quem tem a TELA vê" meta/CEREBRO.md` = **1**
      - `grep -c "^  const instCerebro = lerRepo" validate.js` = **1**
      - `grep -c "^    \[\"CEREBRO: " validate.js` = **2**
      - `grep -c "^## D-151" meta/DECISIONS.md` = **1**
      - **Negativo, e por isso ancorado:** `grep -c "^        ou \*\*destroi algo fora do repositorio\*\*; leitura" meta/workorders/_TEMPLATE.md` = **0** (era 1 — é a linha que a Edição 2 remove).
- [ ] **Par negativo — copiado dos comandos que rodaram em sandbox; reproduza os TRÊS**, porque o `C43`
      protege **duas direções** e um negativo só prova uma:
      - **Quem roda:** quem aplica. **Faça backup dos três arquivos antes** (`cp`) e restaure por eles.
      - **Chega no ramo?** A/B alteram a superfície **instalada** (arquivo lido por `lerRepo` dentro do
        `C43`); C altera o **gerador**, então exige `node build.js` entre a edição e o `validate`.
      - **Esta é qual pergunta:** «presta?». Prova que a regra guardada é a regra certa, e que o par
        gerado↔instalado acusa nos dois sentidos.
      - **A — a casa fica atrás (molde):** em `meta/workorders/_TEMPLATE.md`, troque
        `` ancorada em `^` `` por `ancorada em inicio de linha`. `node validate.js` → **VERMELHO**:
        *«a superficie INSTALADA `meta/workorders/_TEMPLATE.md` nao tem a clausula 'modelo de WO: negativa em ^'»*.
      - **B — a casa fica atrás (CEREBRO):** em `meta/CEREBRO.md`, troque `quem tem a TELA vê` por
        `quem tem a tela confere` → **VERMELHO**: *«a superficie INSTALADA `meta/CEREBRO.md` nao tem a
        clausula 'CEREBRO: olho humano e do dono'»*. **É o negativo que prova a quinta superfície** —
        antes desta WO esta edição passava verde.
      - **C — o produto perde a regra:** em `src/index.template.html`, troque `declara ONDE NASCE` por
        `declara a origem`; `node build.js` e `node validate.js` → **VERMELHO**: *«o kit GERADO perdeu a
        clausula 'modelo de WO: valor tem fonte'»*.
      - **Restaurar os três dos backups**, `node build.js` de volta a **880.810 bytes** e harness em
        19/19 · 105/105 antes do commit. Apague os backups e diga o caminho no relatório.
- [ ] **Roteiro para o DONO — não rode, entregue** *(é a regra que esta WO institui, aplicada a ela
      mesma: exige olho humano num renderizador)*. No fecho do chat, o dono abre o `index.html`, escolhe
      um nicho qualquer, gera o pacote e confere: **(a)** o `CEREBRO.md` baixado traz, na seção
      «Medição delegada», os dois itens novos — *quando está certo*, o primeiro começa por «Todo valor
      que você pede declara onde nasce»; **(b)** em modo Code, o `meta/workorders/_TEMPLATE.md` do zip
      traz o parágrafo da checagem ancorada em `^` — *quando está certo*, ele aparece logo antes da
      linha «Proximo comando».
- [ ] Nada criado fora do repositório além dos três backups temporários.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/workorders/_TEMPLATE.md meta/CEREBRO.md src/index.template.html index.html validate.js meta/DECISIONS.md meta/workorders/260913-wo0123-quatro-regras-da-leva-do-mapa.md
```

```
git commit -m "feat(kit): quatro regras da leva do mapa, na casa e no que o kit entrega" -m "Checagem negativa ancorada em ^, padrao de conferencia recortado e nao redigitado, olho humano num renderizador e do dono, e valor exigido declara onde nasce. Cada uma entra no mesmo texto nas duas superficies, para o C43 conferir gerado e instalado com um regex so. O C43 ganha a quinta superficie: meta/CEREBRO.md, que nunca tinha sido comparado com nada. Sem check novo: 25 clausulas viram 31. D-151."
```

```
git push
```
