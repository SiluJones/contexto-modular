# WO 0127 — o roteiro ganha retorno, o risco ganha comando, e o byte ganha ponta

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco medio. Oito edicoes, **duas** delas substituicao de bloco
> multi-linha em arquivo CRLF; nenhuma cria artefato novo.
> **Pre-requisito:** commit `5b7dc6f`, arvore limpa (so `.claude/launch.json` fora de escopo), harness
> em **19/19 nichos · 105/105 · 0 erros**.
> **Base:** o `ROTEIRO-passe-de-navegador` de 2026-09-01 e a analise `260904-ANALISE-versionar-autorais-do-jogo`
> do projeto `Sand-Land-Map` (leva `97e4ed5`), lidos no chat em 2026-09-15; e o **relatorio de aplicacao
> da wo0126** deste repositorio, que achou o `core.autocrlf` separando arvore de trabalho e blob.
> **Depende de:** wo0126 (aplicada, `5b7dc6f`; fecho `470462d`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: a `D-155` entra aqui.

> **Ancoras lidas em** (arquivo vivo lido NESTE turno, mount de `470462d` — manifesto de 2026-09-15 —
> desachatado em sandbox; o build reproduziu **888.250 bytes** e **19/19 · 105/105 · 40 clausulas**
> antes de qualquer edicao, batendo exato com o repo):
> - `meta/workorders/_TEMPLATE.md` — o bloco de 7 linhas `- **Quando o passo e do dono…`; e a linha `> tamanho, ou preveja faixa em vez de numero exato.`
> - `src/index.template.html` — as MESMAS duas ancoras em forma de literal JS dentro de `buildWoTemplate()`; e, no gerador do CEREBRO, o `L.push` que comeca por `"- **Meça antes de propor.**`
> - `meta/CEREBRO.md` — a linha que comeca por `- **\`meta/analises/\` (D-089/D-096):**`
> - `validate.js` — a entrada `["CEREBRO: a frase vai sozinha",       /a frase vai sozinha/,           ["cerebro"]],`
> - `meta/DECISIONS.md` — o fim do arquivo (hoje termina no bloco da `D-154`)

---

## 1. Por que

**Fecha a extracao do projeto vizinho.** Tres itens, e cada um tem origem diferente — o que e, em si,
o resumo do que essa extracao ensinou.

**(1) A forma do roteiro que a wo0126 escreveu esta incompleta, e o defeito e meu.** Eu a derivei do
`ROTEIRO-conferencia-humana` de 29/08 sem ter lido o de **01/09**, que existe na mesma pasta e tem
**tres campos a mais**. O que falta mais doi e o ultimo: **«o que me mandar de volta»** — o contrato
de retorno. Sem ele, o dono responde em prosa livre e alguem tem de perguntar de novo, que e
exatamente o atrito que o roteiro existe para evitar. Os outros dois sao **Estado** (commit, versao
instalada e **onde esta o rollback vivo**) e **Preparo** (o que abrir antes, para o passe nao parar no
meio). *Declarar um tipo de documento a partir de um exemplo so foi a pressa: havia dois na pasta.*

**(2) Um heuristico de decisao que o kit nao tem.** Da analise do `.gitignore` deles sai a frase que
fechou a decisao: *«regra em camadas e notoriamente facil de errar — mas e **verificavel por
comando**»*. Generalizado: **risco que se confere por comando nao e risco, e custo de conferencia.**
Ao comparar opcoes, separe **qual erra mais facil** de **qual avisa quando errou** — a intuicao so
enxerga a primeira metade, e por isso prefere a opcao que falha em silencio.

**(3) O byte previsto precisa dizer em que ponta foi medido.** O molde ja manda carregar o fim de
linha; faltava a outra metade. No relatorio da wo0126, quatro tamanhos previstos por mim bateram no
**blob** e divergiram na **arvore de trabalho**, porque `core.autocrlf=true` converte no checkout os
arquivos que o `.gitattributes` marca so como `text=auto`. Quem aplicou investigou e provou com
`git cat-file -s` que os numeros da WO estavam certos — **e a conferencia, feita na outra ponta,
parecia errada.** E a `DEC-048` num eixo novo: a unidade de um tamanho nao e «bytes», e «bytes onde».

## 2. Contexto factual

**Medido no sandbox** (reconstruido do mount de `470462d`; baseline 888.250 bytes · 19/19 · 105/105 ·
**40 clausulas**):

| Arquivo | Antes (blob) | Depois (blob) | Fim de linha no repo |
|---|---|---|---|
| `meta/workorders/_TEMPLATE.md` | 18.883 | **19.958** | CRLF |
| `meta/CEREBRO.md` | 50.155 | **50.802** | **LF** |
| `src/index.template.html` | 397.047 | **398.768** | CRLF |
| `validate.js` | 165.393 | **165.931** | **LF** |
| `index.html` (gerado) | 888.250 | **889.971** | CRLF |

> **Os numeros acima sao do BLOB** — e esta WO institui dizer isso. Nesta maquina, `wc -c` na arvore de
> trabalho dara **51.118** para o `meta/CEREBRO.md` e **168.108** para o `validate.js`, porque os dois
> chegam convertidos para CRLF; os outros tres batem nas duas pontas. **Medido nesta sessao:** o mount
> desta leva entregou os dois em CRLF (316 e 2.171 pares `\r\n`), e foi assim que eu reparei. Confira
> pelo indice (`git cat-file -s` apos `git add`) se quiser bater com a tabela.

- **Checagens: 105 antes, 105 depois.** `CLAUSULAS` vai de **40 para 43** *(comando: `node validate.js
  index.html | grep -oE "em [0-9]+ clausulas"`, nas duas pontas)*.
- **`C28` inalterado:** `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- **Tres pares negativos rodados e restaurados**, um por superficie — e os tres feitos **lendo o arquivo
  antes de abri-lo para escrita**, que e a licao que a wo0126 pagou com um template truncado.

**Cobertura declarada, e de que:** com esta WO, o material do vizinho foi varrido assim — **integral**
na secao de feedback (32 verbetes), no molde de WO deles, nos 65 titulos de `DECISIONS` com leitura
completa das 10 de metodo, nas 13 «Tecnicas especificas», nos **dois** ROTEIRO e na forma das duas
sondas; **por amostragem** nos 33 arquivos restantes (19 analises, spec, docs), dos quais as duas
entradas mais densas em vocabulario de metodo foram abertas e sao de **dominio**. A varredura integral
das 19 analises segue **pendente**, e a recomendacao e nao faze-la: o rendimento caiu de seis itens em
dois dias para tres neste turno.

## Inventario

Duas perguntas ao artefato: *«a pasta de analises deles tem mais de um ROTEIRO?»* — **dois**, e eu
tinha lido um; e *«o kit tem o heuristico do risco?»* — varrido por **cinco formulacoes diferentes**
no CEREBRO, no molde, no `DECISIONS` e no template do produto, **ausente nos quatro**. A terceira
frente nao veio de varredura: veio do relatorio de quem aplicou a WO anterior.

**Declaro as contagens:** 8 edicoes · 4 arquivos · 3 clausulas novas na **lista** `CLAUSULAS` (40 → 43)
· **nenhum check novo** · nenhum artefato novo.

---

## Edicao 1 — `meta/workorders/_TEMPLATE.md` · o roteiro ganha os tres campos *(CASA)*

> **Substituicao de bloco multi-linha em arquivo CRLF.** Ancora colada com `\n` puro nao casa — falha
> segura. **Nunca `sed -i`.**

**Ancora — substituir o BLOCO INTEIRO de 7 linhas** (a indentacao de 6 e 8 espacos faz parte dela):

```
      - **Quando o passo e do dono, ele nao e item de checklist: e ROTEIRO, e roteiro tem forma.** Sai da
        lista de quem aplica e vai para o fecho do chat, como bloco proprio com quatro linhas de
        cabecalho — **Para** (quem, e com o que aberto) · **Por que** (o que a automacao nao cobriu,
        nomeando a WO) · **Formato** (cada item diz **o que se ve quando esta certo**, com numero quando
        existe numero) · **Tempo** (quanto dura num passe so) — e uma secao final **«o que este roteiro
        NAO testa»**, que e o que impede «passou tudo» de ser lido como «esta tudo certo». Forma medida
        em campo: 27 itens respondidos em dois roteiros, contra zero em tres tentativas sem forma.
```

**Substituir por (12 linhas):**

```
      - **Quando o passo e do dono, ele nao e item de checklist: e ROTEIRO, e roteiro tem forma.** Sai da
        lista de quem aplica e vai para o fecho do chat, como bloco proprio. **Cinco linhas de
        cabecalho:** **Para** (quem, e com o que aberto) · **Por que** (o que a automacao nao cobriu,
        nomeando a WO) · **Formato** (cada item diz **o que se ve quando esta certo**, com numero quando
        existe numero) · **Tempo** (quanto dura num passe so) · **Estado** (commit, versao instalada e
        **onde esta o rollback vivo** — e a linha que decide se o dono pode mexer sem medo). **Tres
        secoes:** **Preparo** (o que abrir e deixar pronto antes de comecar, para o passe nao parar no
        meio), os itens, e **«o que este roteiro NAO testa»**, que impede «passou tudo» de ser lido como
        «esta tudo certo». **E fecha com «o que me mandar de volta»** — o contrato de retorno, dizendo em
        que forma a resposta volta (numero, sim/nao, print). **Sem ele o dono responde em prosa livre e
        alguem tem de perguntar de novo**, que e o atrito que o roteiro existe para evitar. Forma medida
        em campo: 27 itens respondidos em dois roteiros, contra zero em tres tentativas sem forma.
```

## Edicao 2 — `meta/workorders/_TEMPLATE.md` · o byte ganha a ponta *(CASA)*

**Ancora — substituir a linha inteira:**

```
> tamanho, ou preveja faixa em vez de numero exato.
```

**Substituir por (6 linhas):**

```
> tamanho, ou preveja faixa em vez de numero exato. **E carrega tambem ONDE foi medido:** arvore de
> trabalho e blob do git nao sao a mesma coisa quando `core.autocrlf` esta ligado — a maquina converte
> no checkout arquivos que o `.gitattributes` marca so como `text=auto`, e o `wc -c` da arvore diverge
> do `git cat-file -s` do indice por 1 byte por linha. **Diga qual das duas pontas voce previu**; na
> duvida, preveja o blob, que e o que fica no repositorio. Ja custou um desvio de relatorio em que os
> numeros da WO estavam certos e a conferencia, feita na outra ponta, parecia errada.
```

## Edicao 3 — `meta/CEREBRO.md` · o heuristico do risco conferivel *(CASA)*

**Ancora** (a linha inteira que comeca por `- **\`meta/analises/\` (D-089/D-096):**`; ela e longa —
identifique pelo comeco).

**Inserir IMEDIATAMENTE APOS essa linha, como uma linha nova:**

```
- **Risco que se confere por comando não é risco: é custo de conferência.** Ao comparar opções, a que parece mais arriscada frequentemente é a mais barata de auditar — regra em camadas, migração em passos, estrutura nova. Separe as duas perguntas: **qual erra mais fácil** e **qual avisa quando errou**. Opção que erra fácil e avisa na hora perde para opção que erra difícil e falha em silêncio, e a intuição diz o contrário porque só enxerga a primeira metade. Quando a diferença entre duas opções é só essa, escreva o comando que audita junto da recomendação — é ele que transforma o risco em item de checklist.
```

---

## Edicoes 4 e 5 — `src/index.template.html` · as MESMAS duas do molde *(PRODUTO)*

Dentro de `buildWoTemplate()`, repita as Edicoes 1 e 2 em forma de **literal JS**: cada linha vira
`    "` + a linha correspondente + `",`. As ancoras sao as mesmas, tambem em forma de literal.
**Aplique as Edicoes 1 e 2 primeiro e converta linha a linha, sem reformatar.** Os textos nao contem
aspas duplas internas — **nao ha escape a fazer**.

- **Edicao 4** = Edicao 1 · substituicao do bloco de 7 literais por 12
- **Edicao 5** = Edicao 2 · substituicao de 1 literal por 6

## Edicao 6 — `src/index.template.html` · o heuristico no CEREBRO gerado *(PRODUTO)*

**Ancora** (uma linha, unica — o `L.push` que comeca por):

```
  L.push("- **Meça antes de propor.**
```

**Inserir IMEDIATAMENTE APOS essa linha:**

```
  L.push("- **Risco que se confere por comando não é risco: é custo de conferência.** Ao comparar opções, a que parece mais arriscada costuma ser a mais barata de auditar. Separe **qual erra mais fácil** de **qual avisa quando errou**: opção que erra fácil e avisa na hora perde para opção que erra difícil e falha em silêncio, e a intuição diz o contrário porque só enxerga a primeira metade. Quando a diferença entre duas opções é essa, escreva o comando que audita **junto da recomendação** — é ele que transforma risco em item de checklist.");
```

---

## Edicao 7 — `validate.js` · tres clausulas novas

**Ancora** (uma linha; o alinhamento por espacos faz parte dela — **recorte, nao redigite**):

```
    ["CEREBRO: a frase vai sozinha",       /a frase vai sozinha/,           ["cerebro"]],
```

**Inserir IMEDIATAMENTE APOS:**

```
    // wo0127: fecha a extracao do projeto do mapa. As duas primeiras saem do ROTEIRO de 01/09, que a
    // wo0126 nao tinha lido; a terceira saiu do relatorio de aplicacao da wo0126, que achou o
    // `core.autocrlf` separando arvore de trabalho e blob.
    ["modelo de WO: roteiro tem retorno", /o que me mandar de volta/i,  ["woTemplate"]],
    ["modelo de WO: byte tem ponta",      /qual das duas pontas/,       ["woTemplate"]],
    ["CEREBRO: risco conferivel",         /n[aã]o [eé] risco: [eé] custo de confer/i, ["cerebro"]],
```

## Edicao 8 — `meta/DECISIONS.md` · `D-155` (append no fim do arquivo)

**Ancora:** o fim do arquivo (hoje termina no bloco da `D-154`). **Inserir no FIM**, precedido de linha
em branco e `---`:

```

---

## D-155 — Fecha a extração do vizinho: o roteiro ganha retorno, o risco ganha comando, o byte ganha ponta

**Data:** 2026-09-15 · **Base:** o `ROTEIRO-passe-de-navegador` de 01/09 e a análise do `.gitignore` do `Sand-Land-Map`; e o relatório de aplicação da wo0126 deste repositório.

**1. A forma do roteiro estava incompleta, e o defeito é de quem a declarou.** A wo0126 derivou o tipo de **um** exemplo, havendo **dois** na mesma pasta. Entram os três campos que faltavam: **Estado** (commit, versão instalada e **onde está o rollback vivo** — a linha que decide se o dono pode mexer sem medo), **Preparo** (o que abrir antes, para o passe não parar no meio) e, o que mais importa, **«o que me mandar de volta»** — o contrato de retorno, dizendo em que forma a resposta volta. Sem ele o dono responde em prosa livre e alguém tem de perguntar de novo, que é o atrito que o roteiro existe para evitar. **Regra que fica: tipo de documento não se declara a partir de um exemplo só — varra a pasta inteira antes de fixar a forma.**

**2. Risco que se confere por comando não é risco: é custo de conferência.** Da análise do `.gitignore` deles sai o argumento que decidiu: *«regra em camadas é notoriamente fácil de errar — mas é verificável por comando»*. Generalizado, separa duas perguntas que a intuição funde: **qual erra mais fácil** e **qual avisa quando errou**. Opção que erra fácil e avisa na hora ganha de opção que erra difícil e falha em silêncio — e a intuição prefere a segunda, porque só enxerga a primeira metade. Ausente no kit, conferido por **cinco formulações** em quatro documentos.

**3. O byte previsto carrega o fim de linha **e a ponta**.** O molde já mandava conferir CRLF × LF; faltava dizer **onde** o número foi medido. Na wo0126, quatro tamanhos previstos bateram no **blob** e divergiram na **árvore de trabalho**, porque `core.autocrlf=true` converte no checkout os arquivos que o `.gitattributes` marca só como `text=auto`. Quem aplicou investigou com `git cat-file -s` e provou que os números da WO estavam certos — **e a conferência, feita na outra ponta, parecia errada**. É a `DEC-048` num eixo novo: a unidade de um tamanho não é «bytes», é «bytes onde». *Nota de rastreamento: nenhuma WO alterou `core.autocrlf`; config de git fica fora de escopo de WO, e o desvio precede esta série.*

**A extração do `Sand-Land-Map` fecha aqui, com cobertura declarada.** Integral: a seção de feedback (32 verbetes), o molde de WO deles, os 65 títulos de `DECISIONS` com leitura completa das 10 de método, as 13 «Técnicas específicas», os dois ROTEIRO e a forma das duas sondas. Por amostragem: os 33 arquivos restantes, dos quais as duas entradas mais densas em vocabulário de método foram abertas e são de **domínio**. **A varredura integral das 19 análises segue pendente, e a recomendação é não fazê-la:** o rendimento caiu de seis itens em dois dias (seção curada) para cinco em um turno (decisões e técnicas) para três neste (dois roteiros e uma análise).

**O saldo da extração inteira: catorze regras, e a maioria veio do que eles NÃO curaram para nós.** Seis da seção de feedback, cinco das decisões e técnicas locais, três desta WO. **Fica aberta uma só, e é decisão do dono: a `DEC-056`** — ordem de serviço irreversível passa por revisão de quem não conhece o repositório —, a única que exige um segundo agente. **A carta 04 sai agora**, e é ela que fecha o ciclo do lado deles.
```

---

## Fora de escopo

- **Varredura integral das 19 analises deles** — declarada pendente, com recomendacao de nao fazer.
- **`DEC-056`** — decisao do dono.
- **Mexer em `core.autocrlf` ou no `.gitattributes`** — config de maquina e de repositorio, fora do
  escopo de qualquer WO. Esta WO ensina a **declarar a ponta**, nao a mudar a conversao.
- **A carta 04** — sai no chat depois desta WO aplicada.
- **`meta/STATUS.md`, `meta/CHANGELOG.md`, log do dia** — canal do `/wrap`. **Versao** — segue v1.122.0.

## Armadilhas desta WO

*(Pela `FK-S`: so o que e propriedade do arquivo ou do ambiente.)*

- **Dois arquivos CRLF**, e as Edicoes 1, 2, 4 e 5 sao substituicoes de bloco multi-linha neles.
- **As Edicoes 4 e 5 dependem das 1 e 2.**
- **`meta/CEREBRO.md` e `validate.js` chegam convertidos para CRLF nesta maquina.** Os tamanhos da
  tabela sao do **blob**; o `wc -c` da arvore vai divergir, e isso e esperado, nao defeito.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente**: `meta/workorders/_TEMPLATE.md`, `meta/CEREBRO.md`,
      `src/index.template.html`, `index.html`, `validate.js`, `meta/DECISIONS.md` (modificados) + esta
      WO (novo). **Nada alem.**
- [ ] `node build.js` → `index.html` de 888.250 para **889.971 bytes**, 19 modulo(s).
- [ ] `node validate.js index.html` → **19/19 · 105/105 · 0 erros**. A contagem **nao sobe**.
- [ ] `C28` inalterado: `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- [ ] **Tamanhos — pelo BLOB, apos `git add`** *(`git cat-file -s :caminho`)*: `_TEMPLATE.md` **19.958** ·
      `meta/CEREBRO.md` **50.802** · `src/index.template.html` **398.768** · `validate.js` **165.931**.
      *Na arvore de trabalho, `meta/CEREBRO.md` e `validate.js` darao maior (51.118 e 168.108 nesta
      maquina) — e o `core.autocrlf`, e e esperado.*
- [ ] **Medido por comando ANTES e DEPOIS:**
      `node validate.js index.html | grep -oE "em [0-9]+ clausulas"` → **40 antes, 43 depois**. A
      diferenca e de 3 porque a Edicao 7 acrescenta tres entradas — **tres clausulas na lista.**
- [ ] Greps **ancorados em `^`**:
      - `grep -c "^        secoes:\*\* \*\*Preparo\*\*" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^> trabalho e blob do git nao sao a mesma coisa" meta/workorders/_TEMPLATE.md` = **1**
      - `grep -c "^- \*\*Risco que se confere por comando" meta/CEREBRO.md` = **1**
      - `grep -c "^    \[\"modelo de WO: byte tem ponta\"" validate.js` = **1**
      - `grep -c "^## D-155" meta/DECISIONS.md` = **1**
      - **Negativo, ancorado em `^`:**
        `grep -c "^        cabecalho — \*\*Para\*\*" meta/workorders/_TEMPLATE.md` = **0**
        (era 1 — a linha que a Edicao 1 reescreve).
- [ ] **Item DE LEITURA — nao tente `grep`:** abra `src/index.template.html` no gerador do CEREBRO e
      confira que o `L.push` do risco esta **entre** o de «Meça antes de propor» e o de «A análise não
      decide nem abre trabalho sozinha».
- [ ] **Par negativo — copiado dos comandos que rodaram em sandbox; reproduza os TRES.**
      **Leia o arquivo ANTES de abrir para escrita** — a wo0126 truncou um template por inverter isso.
      - **A — casa, molde:** troque `«o que me mandar de volta»` por `«o que devolver»` → **VERMELHO**:
        *«a superficie INSTALADA `meta/workorders/_TEMPLATE.md` nao tem a clausula 'modelo de WO:
        roteiro tem retorno'»*.
      - **B — casa, CEREBRO:** troque `não é risco: é custo de conferência` por
        `é risco menor do que parece` → **VERMELHO**: *«…`meta/CEREBRO.md` nao tem a clausula 'CEREBRO:
        risco conferivel'»*.
      - **C — produto:** troque `qual das duas pontas` por `onde exatamente`; `node build.js` e
        `node validate.js` → **VERMELHO**: *«o kit GERADO perdeu a clausula 'modelo de WO: byte tem
        ponta'»*.
      - **Restaurar os tres**, `node build.js` de volta a **889.971 bytes**, harness 19/19 · 105/105
        antes do commit. Apague os backups e diga o caminho no relatorio.
- [ ] **Roteiro para o DONO — nao rode, entregue.** Esta WO **muda a forma do proprio roteiro**, entao o
      roteiro pendente das wo0124-0126 deve ser reemitido no formato novo (cinco linhas de cabecalho,
      Preparo, itens, «o que NAO testa» e «o que me mandar de volta») — tarefa do chat no fecho, nao de
      quem aplica.
- [ ] Nada criado fora do repositorio alem dos tres backups temporarios.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/workorders/_TEMPLATE.md meta/CEREBRO.md src/index.template.html index.html validate.js meta/DECISIONS.md meta/workorders/260915-wo0127-roteiro-risco-e-ponta-do-byte.md
```

```
git commit -m "feat(kit): roteiro ganha contrato de retorno, risco ganha comando, byte ganha ponta" -m "O tipo roteiro foi declarado a partir de um exemplo havendo dois na pasta: entram Estado com rollback vivo, Preparo, e o contrato de retorno que faltava. Risco que se confere por comando passa a ser tratado como custo de conferencia na comparacao de opcoes. E o byte previsto passa a declarar a ponta em que foi medido, depois de o relatorio da wo0126 achar o core.autocrlf separando arvore de trabalho e blob. Fecha a extracao do projeto vizinho. Sem check novo: 40 clausulas viram 43. D-155."
```

```
git push
```
