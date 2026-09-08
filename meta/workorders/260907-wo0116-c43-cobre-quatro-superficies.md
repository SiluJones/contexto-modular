# WO 0116 — a `i-N60` é paga: o `C43` passa a cobrir as quatro superfícies instaladas da casa

> **Tipo:** WO de CODIGO (harness) + registro. Toca `validate.js` e `meta/IDEAS.md`. **NAO toca `src/`** — o `index.html` nao muda.
> **Config sugerida:** modelo padrao, esforco medio. Uma tabela ampliada, dois mapas e uma mensagem generalizada.
> **Pre-requisito:** v1.122.0 com wo0115 aplicada, commit `c3b58cd`, arvore limpa.
> **Base:** `i-N60`, aberta na wo0108 e com o gatilho disparado **cinco vezes**; escopo encolhido pela exploracao de 04/09 (candidato 3).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se os alvos `woTemplate`/`claudeMd` ja existirem nos mapas, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-07** (commit `c3b58cd`), e todas aplicadas de verdade em sandbox reconstruido desse mount.
>
> **Afirmacao sobre artefato legivel:** executada em sandbox, com `node validate.js` **18/18 · 101/101 · VERDE**. **`index.html` NAO muda: 846.128 bytes antes e depois**, e o `src/index.template.html` fica **byte a byte identico** (conferido por comparacao binaria). **Dois pares negativos medidos**, um por superficie nova: tirar «Ancoras lidas em» do `_TEMPLATE.md` da casa e tirar o vocabulario de ato do `CLAUDE.md` deixam o `C43` **VERMELHO**, cada um nomeando o arquivo certo na mensagem.
>
> **Medicao previa — teto:** nao se aplica. Nada entra em `buildInstr` nem no CEREBRO; o `C28` nao se move.
>
> **Numero de checklist e DERIVADO**, com `grep -o ... | wc -l` onde a contagem e de ocorrencia.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

A `i-N60` nasceu na wo0108 com um achado medido: `meta/workorders/_TEMPLATE.md` estava **6.618 bytes** atras do gerado, sem o campo que a skill `apply-wo` usa para **recusar** uma WO — e ficou assim por seis WOs. O diagnostico ja estava certo desde entao: **o atraso nao e o achado, a cegueira e.** O `C43` era o unico check que abre arquivo do proprio repositorio, cobria **duas** superficies (as skills `wrap` e `apply-wo`) mais o `settings.json`, e nasceu (wo0087) porque *«as skills instaladas ficaram tres versoes atras do gerado sem ninguem notar»*. O mesmo defeito reapareceu **no vizinho que ele nao cobria**.

O gatilho era «a proxima WO que tocar o `validate.js`». Ele disparou nas **wo0110, wo0111, wo0112, wo0113 e wo0115** — cinco vezes, sempre reportado, nunca pago. Gatilho que dispara cinco vezes sem pagamento e uma pendencia perpetua se disfarcando de item com gatilho.

**A exploracao de 04/09 encolheu o trabalho antes de ele comecar,** e e por isso que esta WO e pequena. O candidato 3 daquela passada testou a hipotese obvia — comparar instalado x gerado byte a byte — e a **refutou com medicao**: deu 29 linhas «ausentes» no `CLAUDE.md` e 8 em cada skill, **todas falso positivo**, porque a casa reescreve as regras com forma propria e substitui os placeholders. Diff literal transformaria adaptacao legitima em falha. **O caminho e ampliar a lista de clausulas do `C43`, nao trocar o metodo** — e e exatamente isso que esta WO faz.

## 2. Contexto factual

- **Medido — as quatro superficies.** Instaladas na casa e vindas do kit: `.claude/skills/wrap/SKILL.md` e `.claude/skills/apply-wo/SKILL.md` (ja cobertas), `meta/workorders/_TEMPLATE.md` e `CLAUDE.md` (novas). A `sondar` ja tem assert proprio desde a wo0112, e o `settings.json` e conferido a parte.
- **Medido — quais clausulas entram, e por que nem todas.** Cada candidata foi testada **nos dois lados** antes de entrar na tabela. No `_TEMPLATE.md`, as sete candidatas passaram (o arquivo e byte a byte igual ao gerado desde a wo0115); entram **seis**. No `CLAUDE.md`, das seis candidatas so **quatro** existem nos dois lados: «config modelo x esforco» e «additionalDirectories» estao no gerado e **nao** na casa, que adaptou o arquivo legitimamente. **Ficam de fora de proposito** — conferir o que a casa tem direito de mudar transformaria adaptacao em falha, que e o erro que a exploracao apontou.
- **Medido — o check continua sendo UM.** O total permanece **101**. O `C43` ganha alvos e clausulas, nao um irmao.
- **Nao medido, e declarado:** se as outras superficies do kit instaladas em **outros** projetos tem o mesmo atraso. Esta WO cobre a casa. Para os demais, o vetor continua sendo o pacote de update, parqueado pela D-138.

---

## Edicao 1 — `validate.js` · o `C43` passa a nomear quatro superficies no titulo

**Ancora** (primeira linha do check):

```
check("C43 o instalado nao fica atras do gerado (wo0087): skills e settings do proprio KCM carregam as clausulas que o kit publica"
```

**Substituir por:**

```
check("C43 o instalado nao fica atras do gerado (wo0087, generalizado na wo0116): as QUATRO superficies instaladas do proprio KCM carregam as clausulas que o kit publica"
```

## Edicao 2 — `validate.js` · o comentario da `sondar` deixa de negar o que agora existe

**Ancora:**

```
  // wo0112: a casa tambem instala a skill de exploracao. Nao e a generalizacao da i-N60
  // (comparar TODA superficie instalada com a gerada) — e o minimo para a sondar nao nascer descoberta.
```

**Substituir por:**

```
  // wo0112: a casa tambem instala a skill de exploracao. Era o minimo para a sondar nao nascer
  // descoberta; a generalizacao (i-N60) veio na wo0116, logo abaixo, e cobre quatro superficies.
```

> Comentario que nega a existencia de algo que passou a existir vira armadilha para quem ler o arquivo daqui a tres meses.

## Edicao 3 — `validate.js` · os dois alvos novos entram nos mapas

**Ancora** (duas linhas seguidas):

```
  const gerado = { wrap: kit.wrap, applyWo: kit.applyWo };
  const instalado = { wrap: instWrap, applyWo: instApply };
```

**Substituir por:**

```
  // wo0116 (i-N60): a generalizacao. O C43 cobria duas superficies instaladas; passa a cobrir quatro.
  // As duas novas sao as que ficaram para tras sem ninguem ver: o modelo de WO da casa (6.618 bytes
  // atras do gerado por seis WOs) e o CLAUDE.md. O metodo NAO muda — continua sendo clausula por
  // regex, e nao diff: a exploracao de 04/09 mediu que comparar arquivo a arquivo da falso positivo
  // em toda superficie que a casa adapta (29 linhas "ausentes" no CLAUDE.md eram redacao propria e
  // placeholders substituidos, com a regra presente nos dois lados).
  const instTpl = lerRepo("meta/workorders/_TEMPLATE.md");
  const instClaude = lerRepo("CLAUDE.md");
  const gerado = { wrap: kit.wrap, applyWo: kit.applyWo, woTemplate: kit.woTemplate, claudeMd: kit.claudeMd };
  const instalado = { wrap: instWrap, applyWo: instApply, woTemplate: instTpl, claudeMd: instClaude };
  const CAMINHO = {
    wrap: ".claude/skills/wrap/SKILL.md", applyWo: ".claude/skills/apply-wo/SKILL.md",
    woTemplate: "meta/workorders/_TEMPLATE.md", claudeMd: "CLAUDE.md"
  };
```

## Edicao 4 — `validate.js` · as dez clausulas novas

**Ancora** (ultima linha da tabela `CLAUSULAS`, seguida do fechamento):

```
    ["relatorio fora do repo",   /DENTRO do repo/,                        ["wrap"]],
  ];
```

**Substituir por:**

```
    ["relatorio fora do repo",   /DENTRO do repo/,                        ["wrap"]],
    // wo0116 (i-N60): as clausulas das DUAS superficies novas. Escolhidas por MEDICAO — cada uma foi
    // conferida presente no gerado E no instalado antes de entrar. No CLAUDE.md, "config modelo x
    // esforco" e "additionalDirectories" ficaram DE FORA de proposito: existem no gerado e nao na
    // casa, que adaptou o arquivo legitimamente. Conferir o que a casa tem direito de mudar seria
    // transformar adaptacao em falha.
    ["modelo de WO: ancoras lidas",   /Ancoras lidas em/,            ["woTemplate"]],
    ["modelo de WO: numero derivado", /DERIVADO/,                    ["woTemplate"]],
    ["modelo de WO: grep -o",         /grep -o \.\.\. \| wc -l/,      ["woTemplate"]],
    ["modelo de WO: fim de linha",    /git ls-files --eol/,          ["woTemplate"]],
    ["modelo de WO: medicao previa",  /Medicao previa/i,             ["woTemplate"]],
    ["modelo de WO: proximo comando", /Proximo comando/i,            ["woTemplate"]],
    ["CLAUDE.md: vocabulario de ato", /`apply` · `wrap` · `probe` · `explore`/, ["claudeMd"]],
    ["CLAUDE.md: relatorio em arquivo", /-code-/,                    ["claudeMd"]],
    ["CLAUDE.md: relatorio sem pedir", /sem pedir/i,                 ["claudeMd"]],
    ["CLAUDE.md: como desligar",      /Para desligar/i,              ["claudeMd"]],
  ];
```

> **Atencao ao escape:** a clausula do `grep -o` e uma regex que contem `...` e `|` — no arquivo ela e `/grep -o \.\.\. \| wc -l/`. As tres barras invertidas dos pontos e a do pipe **tem** de chegar. Se sumirem, o `|` vira alternancia e a regex casa com quase tudo, dando falso VERDE.

## Edicao 5 — `validate.js` · a mensagem de erro deixa de supor que so ha skills

**Ancora** (linha inteira):

```
      assert(re.test(instalado[alvo]), "a skill INSTALADA `.claude/skills/"+(alvo==="wrap"?"wrap":"apply-wo")+"/SKILL.md` nao tem a clausula '"+nome+"' que o kit publica: consertar o gerador nao conserta o instalado (D-115), e a casa e o primeiro instalado");
```

**Substituir por:**

```
      assert(re.test(instalado[alvo]), "a superficie INSTALADA `"+CAMINHO[alvo]+"` nao tem a clausula '"+nome+"' que o kit publica: a casa ficou atras do gerado");
```

> O ternario antigo devolvia **sempre** um caminho de skill: com os alvos novos, um `_TEMPLATE.md` desatualizado seria reportado como se fosse `.claude/skills/apply-wo/SKILL.md`. **Instrumento que relata o fato certo com o lugar errado** — a mesma familia do FIX-0009 do mapsmith.

## Edicao 6 — `meta/IDEAS.md` · a `i-N60` fecha

**Ancora** (linha inteira do titulo):

```
## i-N60 — O modelo de WO instalado ficou 6.618 bytes atrás do gerado, e nenhum check olha para ele — ABERTA, com gatilho
```

**Substituir por:**

```
## i-N60 — O modelo de WO instalado ficou 6.618 bytes atrás do gerado, e nenhum check olha para ele — IMPLEMENTADA na wo0116
```

**E acrescentar, ao final do bloco da ideia** (imediatamente apos o paragrafo que termina em «alto demais para justificar um ciclo próprio.*»), um paragrafo novo:

```

**Fechada em 2026-09-07 (wo0116), depois de o gatilho disparar CINCO vezes** — wo0110, wo0111, wo0112, wo0113 e wo0115, todas tocando o `validate.js`, todas reportando o disparo, nenhuma pagando. *Gatilho que dispara cinco vezes sem pagamento é pendência perpétua com outro nome, e o registro fica aqui para que a próxima ideia com gatilho não repita o padrão: se o gatilho disparar duas vezes seguidas, ou paga ou muda o gatilho.* **O que a paga custou menos que o previsto, e o motivo está medido:** a exploração de 04/09 testou o diff literal como instrumento e o refutou (falso positivo em toda superfície que a casa adapta), o que reduziu o trabalho a ampliar a tabela de cláusulas. Cobertura final: **quatro** superfícies, dez cláusulas novas, e duas candidatas do `CLAUDE.md` deliberadamente fora, porque a casa tem direito de adaptar.
```

---

## Fora de escopo

- **`meta/CEREBRO.md` da casa.** Nao e superficie instalada: e documento proprio do KCM, e a wo0114 acabou de trazer para ele o que faltava. Conferi-lo contra o CEREBRO gerado seria comparar coisas diferentes.
- **O `settings.json`.** Ja tem conferencia propria dentro do mesmo check.
- **O carimbo de versao nas superficies instaladas do KCM** — fora de escopo por decisao da wo0106 (assimetria de proposito), e continua fora.
- **As superficies instaladas nos OUTROS projetos.** O vetor delas e o pacote de update, parqueado pela D-138.
- **A IDEA-137** (previsao numerica de checklist) segue para depois.

## Armadilhas desta WO

- **Esta WO nao muda o `index.html`.** Se o build acusar tamanho diferente de **846.128**, alguma coisa tocou o template sem querer: **PARE e reporte**.
- **A Edicao 4 tem regex com escape denso** (`\.\.\.` e `\|`). Perder as barras produz **falso verde**, que e pior que vermelho.
- **A Edicao 5 remove um ternario e passa a usar `CAMINHO`**, que so existe se a Edicao 3 tiver entrado. Aplique 3 antes de 5.
- **A Edicao 6 tem duas partes** — o titulo e o paragrafo no fim do bloco. Fazer so a primeira deixa a ideia marcada como implementada sem dizer o que foi feito.
- **Nada de `sed -i`.** O `validate.js` e LF e o risco e menor, mas edicao pontual continua sendo o caminho.

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` continua em **846.128 bytes** *(inalterado — esta WO nao toca `src/`)*.
- [ ] `node validate.js` → **18/18 · 101/101 · 0 erros**. Total continua **101**.
- [ ] O `C43` aparece no log com o titulo novo, contendo **`QUATRO superficies`**.
- [ ] `grep -o "woTemplate: kit.woTemplate" validate.js | wc -l` → **1** · `grep -o "CAMINHO\[alvo\]" validate.js | wc -l` → **1**.
- [ ] `grep -o '"modelo de WO:' validate.js | wc -l` → **6** · `grep -o '"CLAUDE.md:' validate.js | wc -l` → **4** *(as dez cláusulas novas)*.
- [ ] `grep -o "QUATRO superficies" validate.js | wc -l` → **1**.

> *A primeira versão deste checklist previa `grep -o "woTemplate"` = 9 e `"claudeMd"` = 8. Medido: **21 e 21** — as duas palavras já apareciam em outros checks. Contagem de palavra comum num arquivo de 2.000 linhas não é canário; os cinco acima são marcadores únicos desta WO. Errei de cabeça exatamente a classe de previsão que a wo0115 acabou de documentar no modelo.*
- [ ] `grep -o "a skill INSTALADA" validate.js | wc -l` → **0** *(a mensagem antiga saiu)*.
- [ ] `grep -o "IMPLEMENTADA na wo0116" meta/IDEAS.md | wc -l` → **1**.
- [ ] **Par negativo 1 (medido):** trocar `Ancoras lidas em` por qualquer outra coisa em `meta/workorders/_TEMPLATE.md` e rodar `validate` → **VERMELHO no C43**, com a mensagem nomeando **`meta/workorders/_TEMPLATE.md`**. Desfaça.
- [ ] **Par negativo 2 (medido):** trocar o vocabulario de ato no `CLAUDE.md` e rodar `validate` → **VERMELHO no C43**, nomeando **`CLAUDE.md`**. Desfaça.
- [ ] `git diff` mostra: `validate.js` e `meta/IDEAS.md` — mais a WO (nova). **`index.html` e `src/` NAO aparecem.**

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · **as duas mensagens dos pares negativos, copiadas literalmente** (e o que valida a Edicao 5) · o commit e o push, escrito **depois** de resolver o push.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0116.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add validate.js meta/IDEAS.md meta/workorders/260907-wo0116-c43-cobre-quatro-superficies.md
```

```
git commit -m "test(harness): o C43 passa a cobrir as quatro superficies instaladas da casa" -m "Paga a i-N60, aberta na wo0108 e com gatilho disparado cinco vezes sem pagamento. O check cobria duas skills mais o settings; passa a cobrir tambem meta/workorders/_TEMPLATE.md e CLAUDE.md, que foram os que ficaram para tras sem ninguem ver. O metodo continua sendo clausula por regex e nao diff: a exploracao de 04/09 mediu que comparar arquivo a arquivo da falso positivo em toda superficie que a casa adapta. Dez clausulas novas, escolhidas por medicao nos dois lados; duas candidatas do CLAUDE.md ficam de fora porque a casa adaptou o arquivo legitimamente. A mensagem de erro deixa de supor que toda superficie e skill. index.html inalterado."
```

```
git push
```
