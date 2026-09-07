# WO 0115 — o `/wrap` cita em vez de concluir, e o modelo de WO passa a avisar sobre `grep -c` e fim de linha

> **Tipo:** WO de CODIGO + doc instalado. Toca `src/index.template.html`, `validate.js`, uma skill instalada e o modelo de WO da casa. **Exige `node build.js` e `node validate.js`.**
> **Config sugerida:** modelo padrao, esforco medio-baixo. Tres frases, tres asserts e um arquivo substituido.
> **Pre-requisito:** v1.122.0 com wo0114 aplicada, commit `692f76f`, arvore limpa.
> **Base:** IDEA-126 do `mapsmith` (medida la, nao aqui) e dois desvios medidos **neste** repositorio no relatorio `260907-1524-code-kcm-apply-wo0114.txt`.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-07** (commit `692f76f`). Cada ancora aplicada de verdade em sandbox reconstruido desse mount.
>
> **Afirmacao sobre artefato legivel:** executada em sandbox, com `node build.js` (`index.html` 845.091 -> **846.128 bytes**) e `node validate.js` (**18/18 · 101/101 · VERDE**). **Par negativo medido:** trocar «Sobre MEDIÇÃO você não conclui: cita e aponta» pelo oposto deixa o `C30` **VERMELHO**.
>
> **Medicao previa — teto:** os cinco numeros do `C28` sao **identicos** (`padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`). As tres frases moram na skill `wrap` e no modelo de WO — arquivos do kit do Code, fora de `buildInstr`.
>
> **Medicao previa — fim de linha, e desta vez medida em vez de suposta:** `index.template.html` tem **4.869** linhas CRLF e **0** LF; `SKILL__wrap.md`, `_TEMPLATE.md`, `CEREBRO.md`, `STATUS.md` e `validate.js` sao **LF puro**. **So o template e CRLF.** A wo0114 supos o contrario e errou a previsao de bytes em 30.
>
> **Numero de checklist e DERIVADO,** e as contagens abaixo saem de **`grep -o ... | wc -l`**, nao de `grep -c` — ver a Edicao 2 para o motivo.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

**Frente 1 — o `/wrap` reinterpreta o `/apply-wo`.** A `IDEA-126` do `mapsmith` registra **duas ocorrencias em tres ciclos** em que o segundo relatorio de um ciclo afirmou algo que o primeiro desmente: um disse que um arquivo nao estava na maquina depois de o outro te-lo listado com tamanho e data; outro escreveu que uma chave «nao foi identificada» onze minutos depois de o `apply-wo` te-la identificado. **A conferencia `1b` existe e nao pega isso**, porque ela compara **commit e estado do git** com o relatorio anterior — e um numero medido nao e conferivel contra o `git log`.

**Medido aqui: o KCM nao tem ocorrencia.** O `/wrap` da wo0114 fez exatamente o certo — recapitulou o `apply` citando o relatorio das 15:24 e escreveu «recapitulando o apply, ja no relatorio 1524», sem reconcluir. **Amostra: um par.** A evidencia e do consumidor, e o que ela acusa e a **skill que o kit gera** — que e a mesma nos dois projetos. Corrigir o produto por evidencia de um consumidor e o caminho normal; esperar a primeira ocorrencia na casa seria esperar pelo custo que ja foi pago em outro lugar.

O remedio adotado e a opcao **(b)** deles, que eles mesmos avaliam como mais barata e como a que ataca a causa: **o `/wrap` fica proibido de concluir sobre medicao que ele nao rodou — cita e aponta.**

**Frente 2 — duas armadilhas de contagem, medidas nesta casa e no mesmo dia.** O relatorio da wo0114 trouxe dois desvios, os dois de previsao minha:

1. **`grep -c` conta LINHAS, nao ocorrencias.** Previ `grep -c "medido em sandbox"` = 2 e o disco devolveu **1**: as duas mencoes estao no **mesmo bullet**, que e uma linha so. `grep -o ... | wc -l` devolveu 2. Nos nossos `meta/`, onde um paragrafo e sempre uma linha unica, essa diferenca e a regra e nao a excecao.
2. **Byte previsto carrega o fim de linha.** Previ 46.990 bytes e o disco deu **46.960**: 30 linhas novas x 1 byte de CR, porque meu sandbox gravou CRLF num arquivo que no repo e LF. E eu havia escrito na propria WO que «o arquivo e CRLF», generalizando o incidente da wo0112, que era do **template**.

Nenhuma das duas e erro de raciocinio: sao erros de **instrumento**, e o lugar delas e o modelo de WO, ao lado da regra do numero derivado — que hoje manda derivar e nao diz com o que.

## 2. Contexto factual

- **Medido — a `1b` cobre o que o git responde, e so.** Commit, push, arquivo nao rastreado: tudo verificavel contra `git status`/`git log`. Byte, contagem de item e nome de chave nao sao.
- **Medido — os fins de linha deste repositorio**, contados byte a byte: `index.template.html` **CRLF** (4.869); `SKILL__wrap.md` (45), `_TEMPLATE.md` (183), `CEREBRO.md` (312), `STATUS.md` (391) e `validate.js` (1.954) todos **LF**. *A regra pratica que sai disso: no KCM, so o template e CRLF.*
- **Medido — a casa fica atras se o gerado andar sozinho.** O `meta/workorders/_TEMPLATE.md` estava byte a byte igual ao gerado (11.524) desde a wo0108; a Edicao 2 muda o gerado, entao a casa precisa do arquivo novo no mesmo commit — senao repete o defeito que a `i-N60` registra e que o `C43` **nao** cobre para este arquivo.
- **Nao medido, e declarado:** se o `/wrap` do KCM ja contradisse um `apply-wo` em ciclos anteriores. Reli **um** par (wo0114). Os anteriores foram arquivados e nao estao mais no mount. **Amostra de 1 de 7.**

---

## Edicao 1 — `src/index.template.html` · a skill `wrap` gerada nao conclui sobre medicao

**Ancora:**

```
e confira o que ele AFIRMA contra `git status` e `git log`.
```

**Substituir por** (a ancora seguida do texto novo, na mesma linha):

```
e confira o que ele AFIRMA contra `git status` e `git log`. **Sobre MEDIÇÃO você não conclui: cita e aponta.** O `1b` compara commit e estado do git — coisas que o git responde. Achado numérico do relatório anterior (quantos bytes, quantos itens, qual chave) o git NÃO desmente: ou você reroda a medição e diz que rerodou, ou escreve «medido no relatório X, não reconferido aqui». Contradizer sem remedir é o modo de falha caro — o log do dia guarda o relatório ERRADO, e desempatar dois registros que se negam custa uma sessão e exige os dois relatórios em mãos, que é o que se perde.
```

## Edicao 2 — `src/index.template.html` · o modelo de WO ganha as duas armadilhas

**Ancora** (linha inteira do array, `grep -o` = 1):

```
    "> relatorio de quem aplica, que estava certo.",
```

**Substituir pelas CINCO linhas abaixo** (o texto continua o paragrafo existente; cada linha e um item do array, com virgula no fim):

```
    "> relatorio de quem aplica, que estava certo. **`grep -c` conta LINHAS, nao ocorrencias:** em documento cujo",
    "> paragrafo e uma linha so, duas mencoes no mesmo bullet contam 1 — para ocorrencia use `grep -o ... | wc -l`,",
    "> e diga qual dos dois voce previu. **Byte previsto carrega o fim de linha:** numero tirado de sandbox que grava",
    "> CRLF erra 1 byte por linha nova quando o arquivo do repo e LF. Confira com `git ls-files --eol` antes de prever",
    "> tamanho, ou preveja faixa em vez de numero exato.",
```

> **Esta e a edicao que mais pede cuidado.** E um array JS: cada linha precisa abrir e fechar aspas duplas e terminar com virgula. Uma aspa faltando derruba o `index.html` inteiro com «Unexpected identifier» — aconteceu comigo, no sandbox, ao escrever esta WO.

## Edicao 3 — `validate.js` · o `C30` passa a exigir as tres frases

**Ancora** (linha inteira, dentro do `check("C30 …")`):

```
  assert(/AAMMDD-HHMM-code-<slug>-wrap-<alvo>\.txt/.test(kit.wrap), "skill wrap nao grava o relatorio no arquivo com o ato wrap (regra so no CLAUDE.md evapora)");
```

**Inserir IMEDIATAMENTE APOS:**

```
  // wo0115: o 1b compara o que o git responde. Sobre MEDICAO o wrap cita e aponta, nunca conclui —
  // dois casos medidos no mapsmith em tres ciclos, e o log do dia guardou o relatorio errado nos dois.
  assert(/cita e aponta/.test(kit.wrap), "a skill wrap nao proibe concluir sobre medicao que ela nao rodou: o 1b so desmente o que o git responde");
  assert(/grep -o \.\.\. \| wc -l/.test(kit.woTemplate), "o modelo de WO nao avisa que grep -c conta LINHAS: previsao de ocorrencia em paragrafo longo erra");
  assert(/git ls-files --eol/.test(kit.woTemplate), "o modelo de WO nao avisa que byte previsto carrega o fim de linha (sandbox CRLF x repo LF)");
```

## Edicao 4 — `.claude/skills/wrap/SKILL.md` · a mesma regra na casa

**Ancora** (fim do bloco da conferencia `1b` na skill instalada):

```
  **conferência que passa não vira linha**.
```

**Inserir IMEDIATAMENTE APOS, como novo item da lista:**

```
- **Sobre MEDIÇÃO você não conclui: cita e aponta.** O `1b` compara commit e estado do git — o que o
  git responde. Achado numérico do relatório anterior (bytes, contagens, qual chave) o git **não**
  desmente: ou você reroda a medição e diz que rerodou, ou escreve «medido no relatório X, não
  reconferido aqui». Contradizer sem remedir é caro — o log do dia guarda o relatório **errado**, e
  desempatar dois registros que se negam custa uma sessão e exige os dois em mãos, que é o que se perde.
```

> A casa tem redacao propria nesta skill (bullets, quebras de linha), por isso o texto e o mesmo em conteudo e diferente em forma. O `C43` confere pela clausula, nao pelo diff — e e por isso que ele tolera a diferenca.

---

## Arquivo que vem do chat, nao desta WO

`_TEMPLATE.md` (**12.093 bytes, LF**) → substituir `meta/workorders/_TEMPLATE.md` (hoje 11.524). E o modelo gerado pela Edicao 2, sem a linha de carimbo (decisao da wo0106), **em LF**, que e o fim de linha real deste arquivo no repo — medido, nao suposto. Entra so no `git add`. Sem ele, a casa fica atras do gerado no mesmo commit que faz o gerado andar.

## Fora de escopo

- **A opcao (a) da IDEA-126** — a `1b` passar a listar os achados numericos do relatorio anterior e marcar cada um como «confirmado» ou «nao reconferido». Mais cara, e os proprios autores avaliam a (b) como a que ataca a causa. Se a (b) nao bastar, a (a) continua disponivel.
- **A `i-N60`** e a **IDEA-137**. *Reporte que a `i-N60` disparou de novo* — esta WO toca o `validate.js` **e** substitui um arquivo instalado que nenhum check cobre, que e exatamente a classe dela.
- **Reler os pares `apply`/`wrap` anteriores** para medir a frequencia na casa. Os relatorios foram arquivados e nao estao no mount; refazer isso exigiria voltar com eles.

## Armadilhas desta WO

- **A Edicao 2 e array JS.** Aspas e virgulas em todas as cinco linhas. Se o build morrer com «Unexpected identifier», e ali.
- **A Edicao 1 e a 4 dizem o mesmo em formas diferentes**, de proposito. Nao unifique.
- **`«»`, `·`, `—` e as crases entram literais.**
- **NAO use `sed -i`** no `src/index.template.html` — e o unico arquivo CRLF do repo, e o `sed` do Git Bash o reescreve inteiro em LF (incidente da wo0112). Nos `.md` e no `validate.js`, que sao LF, o risco nao existe — mas edicao pontual continua sendo o caminho.
- **`build` antes de `validate`.**

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` de **845.091** para **846.128 bytes**. *(Sandbox e repo devem casar aqui: o template ja e CRLF nos dois.)*
- [ ] `node validate.js` → **18/18 · 101/101 · 0 erros**. Total continua **101**.
- [ ] `grep -o "cita e aponta" src/index.template.html | wc -l` → **1**.
- [ ] `grep -o "cita e aponta" .claude/skills/wrap/SKILL.md | wc -l` → **1**.
- [ ] `grep -o "git ls-files --eol" src/index.template.html | wc -l` → **1**.
- [ ] `grep -o "grep -o ... | wc -l" src/index.template.html | wc -l` → **2** *(a mencao no modelo de WO e a do proprio exemplo)*.
- [ ] `wc -c meta/workorders/_TEMPLATE.md` → **12.093** *(era 11.524; o arquivo do chat chegou ao disco)*.
- [ ] `git ls-files --eol meta/workorders/_TEMPLATE.md` → `i/lf w/lf`. *Se vier `crlf`, o arquivo foi salvo com o fim de linha errado.*
- [ ] Os cinco numeros do `C28` continuam **`padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`**.
- [ ] **Par negativo (medido no sandbox):** trocar na Edicao 1 «Sobre MEDIÇÃO você não conclui: cita e aponta.» por «Sobre MEDIÇÃO, conclua o que parecer certo.» e rodar `build` + `validate` deve dar **VERMELHO no C30**. Desfaça depois, **sem `sed -i`**.
- [ ] `git diff` mostra: `src/index.template.html`, `index.html`, `validate.js`, `.claude/skills/wrap/SKILL.md`, `meta/workorders/_TEMPLATE.md` — mais a WO (nova). Nada além.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · os cinco numeros do `C28` · o commit e o push, escrito **depois** de resolver o push. **Reporte também:** que a `i-N60` disparou de novo, e o resultado de `git ls-files --eol` para os cinco arquivos tocados.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0115.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html index.html validate.js .claude/skills/wrap/SKILL.md meta/workorders/_TEMPLATE.md meta/workorders/260907-wo0115-wrap-cita-e-aponta.md
```

```
git commit -m "fix(kit): o wrap cita em vez de concluir, e o modelo de WO avisa sobre grep -c e fim de linha" -m "A conferencia 1b compara commit e estado do git, e um numero medido nao e conferivel contra o git log: o wrap passa a citar e apontar sobre medicao que nao rodou. Adotada a opcao (b) da IDEA-126 do mapsmith, que mediu dois casos em tres ciclos; o KCM nao tem ocorrencia medida, e a evidencia acusa a skill que o kit gera. O modelo de WO ganha as duas armadilhas de contagem medidas na wo0114: grep -c conta linhas e nao ocorrencias, e byte previsto carrega o fim de linha. Casa atualizada no mesmo commit. C30 exige as tres frases. Teto inalterado."
```

```
git push
```
