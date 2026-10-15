# WO 0130 — feedback dos vizinhos, leva 1: o molde de WO, as skills e o corte da v1.123.0

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco medio. Vinte e seis edicoes em doze arquivos; **todas no modo
> TROCAR**, com a ancora repetida no texto novo (a regra da Edicao 3, cumprida pela propria WO).
> **Pre-requisito:** commit `cb061c5`, `main` = `origin/main`. Harness em **19/19 · 106/106 · 0 erros**, `C43` em 46 clausulas.
> **Base:** analise `meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md`, decidida em 2026-10-15.
> **Depende de:** wo0129 (aplicada, `9024620`; fecho `1d8f4b0`, `cb061c5`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** um por linha, com o `sha1sum` que o chat mediu
> ao grava-los. A Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu
> no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `25f78c9534adbb6207ce688a607f0da7adab19de  meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md` (novo, LF)
> - `beb9131a39cd4b14563321e219b8e349ec69b428  logs/2026-10-15.md` (novo, secoes do chat, LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO (coluna «depois» da Edicao 28). Se ja existir, **PULE** e diga.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-158`, CHANGELOG, `i-N64`. **Excecao de raia,
> declarada na D-158:** a Edicao 21 troca so o numero da versao no cabecalho do `meta/STATUS.md`, porque o `C54`
> exige STATUS e `KIT_VERSION` iguais no mesmo commit. O resto do STATUS e do `/wrap`.

> **Ancoras lidas em** (lidas pelo chat NESTE turno, no disco, HEAD `cb061c5`; as 26 aplicadas por script numa
> replica `git archive HEAD | tar -x` que recusou ancora com 0 ou 2+ ocorrencias — 26 de 26 bateram uma vez; depois,
> aplicadas de novo **a partir do texto desta WO** e comparadas byte a byte com a primeira replica):
> - `src/index.template.html` — em `buildWoTemplate()`, as linhas literais `> e nao espere doc do chat.`, `> **Proximo comando:**`, `> depois — e diga na WO que sao as duas metades` e `em campo: 27 itens respondidos`; em `buildCodeKitFiles()`, as linhas `Localize cada âncora EXATAMENTE;`, `Ao terminar, RELATE:`, `WO: $ARGUMENTS`, ``e confira o `git diff` — a forma esperada`` e a ``Grave em `../AAMMDD-HHMM-code-<slug>-explore`` da sondar; e `const KIT_VERSION = "1.122.0";`
> - `meta/workorders/_TEMPLATE.md` — as mesmas quatro linhas do molde
> - `.claude/skills/apply-wo/SKILL.md` — a linha `- Feche com o **relatório de trabalho**` e as duas linhas com `18/18`
> - `.claude/skills/wrap/SKILL.md` — a linha ``- Acrescente `D-0NN` / `FIX-0NN` ``
> - `.claude/skills/sondar/SKILL.md` — a linha ``Grave em `../AAMMDD-HHMM-code-<slug>-explore``
> - `validate.js` — a clausula `["CLAUDE.md: vocabulario de ato"` do `C43`
> - `meta/STATUS.md` — o trecho `> Versão atual: **v1.122.0**. Teste:` do cabecalho
> - `meta/CHANGELOG.md` — a linha 3 (`Versão atual`) e o titulo `## v1.122.0 — Os dois carimbos`
> - `meta/CEREBRO.md` — o paragrafo `Nunca publicar sem o harness passar` da secao «Validação»
> - `meta/IDEAS.md` — o titulo da `i-N64`
> - `meta/DECISIONS.md` — o fim do arquivo

---

## 1. Por que

Primeira das duas levas da analise de 15/10: das 37 entradas do feedback dos tres projetos a adotar, as que moram
no **molde de WO** e nas **skills**. Cada regra entra **com o mesmo texto** no que o kit gera e na casa, e ganha uma
clausula no `C43`, que confere os dois lados. Junto, a regra que faltava: **WO que muda o que o kit gera corta minor
na mesma WO** — e esta corta a **v1.123.0**, com a entrada de CHANGELOG cobrindo `D-138` a `D-157`, que a v1.122.0
atravessou sem corte.

## 2. Contexto factual — medido na replica

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 106/106 | **19/19 · 106/106** | `node validate.js index.html` (ultimas duas linhas) |
| Clausulas do `C43` | 46 | **62** | `node validate.js index.html \| grep -oE "em [0-9]+ clausulas"` |
| `C54` | v1.122.0 | **v1.123.0 nos tres lugares** | linha do `C54` no harness |
| `C28` | padrao 6603 · +Code 546 · combo 7521 | **igual** (nada nas Instrucoes) | linha do `C28` |
| `index.html` gerado | 895.747 bytes | **901.168 bytes** | a linha `OK:` do `node build.js` |

> Bytes da **arvore de trabalho**, como o `build.js` imprime; a replica tem o template em CRLF, como a sua maquina, e
> reproduziu os 895.747 de hoje antes de editar.

- **16 clausulas novas no `C43`, nao 17:** a regra da hora tem dois alvos (`applyWo`, `wrap`) e conta uma vez.
- **Duas provas negativas rodadas e restauradas:** «Inserir so com ancora de LINHA INTEIRA» trocado no molde da casa →
  `C43` vermelho (a superficie INSTALADA perdeu a clausula); STATUS de volta a v1.122.0 → `C54` vermelho («KIT_VERSION e
  1.123.0 mas o STATUS declara v1.122.0»).

**`numstat` previsto** (`git diff --cached --numstat`; com `--ignore-cr-at-eol` se o seu git acusar fim de linha):

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 46 | 2 |
| `index.html` | 46 | 2 |
| `meta/workorders/_TEMPLATE.md` | 38 | 0 |
| `validate.js` | 18 | 0 |
| `meta/DECISIONS.md` | 12 | 0 |
| `.claude/skills/apply-wo/SKILL.md` | 11 | 2 |
| `.claude/skills/wrap/SKILL.md` | 10 | 0 |
| `meta/CHANGELOG.md` | 9 | 1 |
| `meta/CEREBRO.md` | 2 | 0 |
| `meta/IDEAS.md` | 1 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `.claude/skills/sondar/SKILL.md` | 1 | 0 |

Mais os dois arquivos do chat (cabecalho) e esta WO, sem edicao sua.

## Inventario

Vinte e seis edicoes, montadas a partir do script que as aplicou na replica — ele e a fonte, esta lista e a saida
dele. **1–8:** onze regras do molde, em quatro pontos, no gerado (1–4) e na casa (5–8), com o mesmo texto. **9–13:** as
skills geradas. **14–18:** as skills da casa (a 15 e a 16 corrigem «18/18», que sobrou da v1.121). **19:** o `C43`.
**20–23:** o corte de versao. **24–26:** a regra do corte, a `i-N64` e a `D-158`.

**Fim de linha.** Os blocos estao em LF. `src/index.template.html`, `meta/CEREBRO.md`, `meta/DECISIONS.md`,
`meta/workorders/_TEMPLATE.md`, `validate.js` e `.claude/skills/wrap/SKILL.md` estao em **CRLF na sua arvore de
trabalho**: compare ancora e texto com os `\r` removidos e grave com o fim de linha que o arquivo ja tinha.
**Modo:** todas as edicoes, menos a 26, sao **TROCAR** — o texto novo ja contem a ancora no lugar certo. A 26 acrescenta
no fim do arquivo.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; `git log -1 --oneline` = `cb061c5`.
2. `sha1sum meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md logs/2026-10-15.md` — os dois iguais ao cabecalho.
3. `git status --short` = exatamente: `?? .claude/launch.json`, `?? logs/2026-10-15.md`,
   `?? meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md`, `?? meta/workorders/261015-wo0130-feedback-leva-1-molde-skills-e-versao.md`. Outra linha = **PARE e reporte**.
4. `node build.js` e `node validate.js index.html`: `895747` bytes, `106/106`, `em 46 clausulas`. Diferente = **PARE**.

## Edicao 1 — `src/index.template.html` — molde gerado: o banner decide quem aplica

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "> e nao espere doc do chat. *Uma fonte por doc por ciclo; escolher errado aqui duplica conteudo.*",
````

**Texto:**

````
    "> e nao espere doc do chat. *Uma fonte por doc por ciclo; escolher errado aqui duplica conteudo.*",
    "> **O banner decide quem APLICA, nao quem redige.** WO que traga edicao numerada num documento que o",
    "> banner reserva ao chat e contraditoria: quem aplica PARA e pergunta, em vez de escolher um dos lados",
    "> — escolher em silencio ja deixou o registro de uma WO inteira de fora.",
````

## Edicao 2 — `src/index.template.html` — molde gerado: sete regras de cabecalho, antes do Proximo comando

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.",
````

**Texto:**

````
    "> **A string contada e EXCLUSIVA do texto que a WO insere.** Se ela aparece tambem noutro ponto do",
    "> arquivo, o numero previsto e da intencao, nao do arquivo — quatro contagens seguidas erraram assim",
    "> num projeto vizinho, todas por uma string generica que ja existia la. O comando antes/depois resolve",
    "> o VALOR; esta regra resolve o ALVO, e os dois defeitos sao diferentes.",
    "> **Comando de conferencia que voce nao rodou no ambiente de quem aplica vai marcado «nao testado».**",
    "> Um `grep` de fim de linha devolveu o oposto do prometido noutra plataforma, e so nao virou ciclo",
    "> perdido porque quem aplicou montou um controle sozinho. Marcado, o vermelho dele e lido como suspeita",
    "> do instrumento, nao da aplicacao.",
    "> **Esperado deduzido nao e condicao de parada.** Valor que voce deduziu e nao mediu (um status HTTP,",
    "> um total) vai rotulado «deduzido — relate o cru, nao pare»; so valor medido pode mandar parar.",
    "> **Quando o numero absoluto e inevitavel, escreva-o como PISO** («se der menos que 126, PARE»): protege",
    "> contra perda sem depender de acertar o total. **E rede ja vermelha nao e rede:** se lint ou build ja",
    "> falham antes da WO, o criterio e o DELTA — meca o baseline (`git stash`, rode, `git stash pop`),",
    "> compare antes e depois, e nomeie cada erro novo.",
    "> **Referencia a outro documento cita o TRECHO literal, nunca numero de linha ou de secao.** Trecho",
    "> falha alto quando o documento muda; numero falha em silencio e parece preciso enquanto esta errado.",
    "> Vale para comportamento de arquivo de terceiro (CSS, configuracao de biblioteca): o conserto cita a",
    "> regra que ele vence, com o seletor ou a chave literal — afirmar cascata sem abrir o arquivo ja",
    "> declarou resolvido o que nao estava.",
    "> **Simule a WO a partir do PROPRIO TEXTO dela.** Aplique as edicoes numa copia do repositorio lendo-as",
    "> do arquivo da WO — nao da lembranca nem do script que as gerou — e compare com o que foi testado. Ja",
    "> pegou uma linha em branco que o bloco cercado perdeu e um saldo que esquecia as linhas da propria WO.",
    "> **O bloco de commit da WO nao traz rodape de coautoria.** Quem commita poe o seu: o modelo e a sessao",
    "> sao de quem aplica, e um rodape escrito por quem redigiu e trocado na aplicacao.",
    "> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.",
````

## Edicao 3 — `src/index.template.html` — molde gerado: insercao so com linha inteira

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "> depois — e diga na WO que sao as duas metades da mesma operacao.",
````

**Texto:**

````
    "> depois — e diga na WO que sao as duas metades da mesma operacao.",
    "> **Inserir so com ancora de LINHA INTEIRA.** Ancora que e so o comeco de uma linha longa pede a quem",
    "> aplica que ache o fim de uma linha que ele nao ve inteira, e ja virou insercao do lado errado. Prefira",
    "> **Substituir** com a ancora repetida dentro do texto novo: substituir nao tem lado. Linha em branco na",
    "> BORDA do texto novo nao sobrevive ao bloco cercado — ponha-a no MEIO, entre a ancora e o texto.",
    "> **Caso medido:** um script de aplicacao tratou «inserir apos» como «substituir» em tres edicoes; o",
    "> saldo de linhas previsto pela WO acusou, e quem aplicou corrigiu antes do commit.",
````

## Edicao 4 — `src/index.template.html` — molde gerado: tres regras de item de roteiro

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "        em campo: 27 itens respondidos em dois roteiros, contra zero em tres tentativas sem forma.",
````

**Texto:**

````
    "        em campo: 27 itens respondidos em dois roteiros, contra zero em tres tentativas sem forma.",
    "        **Tres regras de item.** (1) O item descreve o ESTADO FINAL, nao a acao: «deixe o arquivo sem",
    "        a chave X, ainda valido como JSON», nunca «apague a linha» — a acao tem duas leituras, e a",
    "        errada e a mais natural. (2) Estado intermediario so entra se for REPRESENTAVEL no modelo:",
    "        escreva qual valor o representa; se nao houver, o item mede outra coisa. (3) O roteiro vai",
    "        INTEIRO no corpo da resposta do chat, numerado — nunca «ver o fim da WO».",
````

## Edicao 5 — `meta/workorders/_TEMPLATE.md` — molde da casa: o mesmo texto da Edicao 1

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
> e nao espere doc do chat. *Uma fonte por doc por ciclo; escolher errado aqui duplica conteudo.*
````

**Texto:**

````
> e nao espere doc do chat. *Uma fonte por doc por ciclo; escolher errado aqui duplica conteudo.*
> **O banner decide quem APLICA, nao quem redige.** WO que traga edicao numerada num documento que o
> banner reserva ao chat e contraditoria: quem aplica PARA e pergunta, em vez de escolher um dos lados
> — escolher em silencio ja deixou o registro de uma WO inteira de fora.
````

## Edicao 6 — `meta/workorders/_TEMPLATE.md` — molde da casa: o mesmo texto da Edicao 2

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.
````

**Texto:**

````
> **A string contada e EXCLUSIVA do texto que a WO insere.** Se ela aparece tambem noutro ponto do
> arquivo, o numero previsto e da intencao, nao do arquivo — quatro contagens seguidas erraram assim
> num projeto vizinho, todas por uma string generica que ja existia la. O comando antes/depois resolve
> o VALOR; esta regra resolve o ALVO, e os dois defeitos sao diferentes.
> **Comando de conferencia que voce nao rodou no ambiente de quem aplica vai marcado «nao testado».**
> Um `grep` de fim de linha devolveu o oposto do prometido noutra plataforma, e so nao virou ciclo
> perdido porque quem aplicou montou um controle sozinho. Marcado, o vermelho dele e lido como suspeita
> do instrumento, nao da aplicacao.
> **Esperado deduzido nao e condicao de parada.** Valor que voce deduziu e nao mediu (um status HTTP,
> um total) vai rotulado «deduzido — relate o cru, nao pare»; so valor medido pode mandar parar.
> **Quando o numero absoluto e inevitavel, escreva-o como PISO** («se der menos que 126, PARE»): protege
> contra perda sem depender de acertar o total. **E rede ja vermelha nao e rede:** se lint ou build ja
> falham antes da WO, o criterio e o DELTA — meca o baseline (`git stash`, rode, `git stash pop`),
> compare antes e depois, e nomeie cada erro novo.
> **Referencia a outro documento cita o TRECHO literal, nunca numero de linha ou de secao.** Trecho
> falha alto quando o documento muda; numero falha em silencio e parece preciso enquanto esta errado.
> Vale para comportamento de arquivo de terceiro (CSS, configuracao de biblioteca): o conserto cita a
> regra que ele vence, com o seletor ou a chave literal — afirmar cascata sem abrir o arquivo ja
> declarou resolvido o que nao estava.
> **Simule a WO a partir do PROPRIO TEXTO dela.** Aplique as edicoes numa copia do repositorio lendo-as
> do arquivo da WO — nao da lembranca nem do script que as gerou — e compare com o que foi testado. Ja
> pegou uma linha em branco que o bloco cercado perdeu e um saldo que esquecia as linhas da propria WO.
> **O bloco de commit da WO nao traz rodape de coautoria.** Quem commita poe o seu: o modelo e a sessao
> sao de quem aplica, e um rodape escrito por quem redigiu e trocado na aplicacao.
> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.
````

## Edicao 7 — `meta/workorders/_TEMPLATE.md` — molde da casa: o mesmo texto da Edicao 3

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
> depois — e diga na WO que sao as duas metades da mesma operacao.
````

**Texto:**

````
> depois — e diga na WO que sao as duas metades da mesma operacao.
> **Inserir so com ancora de LINHA INTEIRA.** Ancora que e so o comeco de uma linha longa pede a quem
> aplica que ache o fim de uma linha que ele nao ve inteira, e ja virou insercao do lado errado. Prefira
> **Substituir** com a ancora repetida dentro do texto novo: substituir nao tem lado. Linha em branco na
> BORDA do texto novo nao sobrevive ao bloco cercado — ponha-a no MEIO, entre a ancora e o texto.
> **Caso medido:** um script de aplicacao tratou «inserir apos» como «substituir» em tres edicoes; o
> saldo de linhas previsto pela WO acusou, e quem aplicou corrigiu antes do commit.
````

## Edicao 8 — `meta/workorders/_TEMPLATE.md` — molde da casa: o mesmo texto da Edicao 4

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
        em campo: 27 itens respondidos em dois roteiros, contra zero em tres tentativas sem forma.
````

**Texto:**

````
        em campo: 27 itens respondidos em dois roteiros, contra zero em tres tentativas sem forma.
        **Tres regras de item.** (1) O item descreve o ESTADO FINAL, nao a acao: «deixe o arquivo sem
        a chave X, ainda valido como JSON», nunca «apague a linha» — a acao tem duas leituras, e a
        errada e a mais natural. (2) Estado intermediario so entra se for REPRESENTAVEL no modelo:
        escreva qual valor o representa; se nao houver, o item mede outra coisa. (3) O roteiro vai
        INTEIRO no corpo da resposta do chat, numerado — nunca «ver o fim da WO».
````

## Edicao 9 — `src/index.template.html` — apply-wo gerada: banner contraditorio para

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "Localize cada âncora EXATAMENTE; se não achar uma, PARE e reporte — não chute um lugar próximo.",
````

**Texto:**

````
    "Localize cada âncora EXATAMENTE; se não achar uma, PARE e reporte — não chute um lugar próximo.",
    "Se o banner «Canal dos meta» disser CHAT e o corpo trouxer edição numerada num documento `meta/`, a WO é contraditória: PARE e pergunte. O banner decide quem APLICA; escolher um dos lados em silêncio já deixou o registro de uma WO inteira de fora.",
````

## Edicao 10 — `src/index.template.html` — apply-wo gerada: corpo minimo do relatorio

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "Ao terminar, RELATE: o que foi feito, achados/desvios do texto da WO, arquivos tocados, build/validação e o commit.",
````

**Texto:**

````
    "Ao terminar, RELATE com corpo mínimo, nesta ordem: (1) o que foi feito, edição por edição; (2) a SAÍDA CRUA das conferências — o número e o comando que o produziu, nunca só «bate»; (3) o que fugiu do texto literal da WO; (4) o que muda para quem usa; (5) o que você olhou além da WO; (6) arquivos tocados; (7) build/validação; (8) commit e push. Relatório que só repete «bate, bate, bate» não foi escrito por quem olhou o diff.",
````

## Edicao 11 — `src/index.template.html` — apply-wo gerada: origem do carimbo de hora

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "WO: $ARGUMENTS",
````

**Texto:**

````
    "O `HHMM` do nome do relatório sai de `date +%y%m%d-%H%M`, rodado na hora — nunca de cabeça.",
    "WO: $ARGUMENTS",
````

## Edicao 12 — `src/index.template.html` — wrap gerada: contagem de estrutura, teto medido, hora

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "e confira o `git diff` — a forma esperada, nada além. Mensagem de commit SEM acento.",
````

**Texto:**

````
    "e confira o `git diff` — a forma esperada, nada além. Mensagem de commit SEM acento.",
    "**Antes do commit, conte a ESTRUTURA que você editou.** No `STATUS.md`, o bloco da sessão anterior tem de continuar no arquivo depois da sua edição — procure o título dele: mover tem duas metades, e a que some é sempre a de apagar. Estrutura que costuma duplicar (`<details>`, o bloco do topo do STATUS) tem contagem esperada — `grep -c` da abertura e do fechamento, um de cada. Aviso em prosa já falhou duas vezes seguidas; contagem não.",
    "Se o commit toca `INSTRUCOES-DO-PROJETO.md`, meça `wc -m` e escreva o número no relatório, ao lado do teto do projeto: teto que ninguém mede envelhece calado.",
    "O `HHMM` do nome do relatório sai de `date +%y%m%d-%H%M`, rodado na hora — nunca de cabeça.",
````

## Edicao 13 — `src/index.template.html` — sondar gerada: origem da hora

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "Grave em `../AAMMDD-HHMM-code-<slug>-explore-<alvo>.txt` (pasta-pai do repo, mesmo lugar e mesmo padrao dos outros relatorios; o ato e sempre `explore`). Use estas quatro secoes:",
````

**Texto:**

````
    "Grave em `../AAMMDD-HHMM-code-<slug>-explore-<alvo>.txt` (pasta-pai do repo, mesmo lugar e mesmo padrao dos outros relatorios; o ato e sempre `explore`). Use estas quatro secoes:",
    "O `HHMM` sai de `date +%y%m%d-%H%M`, rodado na hora — nunca de cabeça.",
````

## Edicao 14 — `.claude/skills/apply-wo/SKILL.md` — apply-wo da casa: as tres regras da gerada

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
- Feche com o **relatório de trabalho** — o que fez, achados e desvios do texto literal da WO,
````

**Texto:**

````
- **Banner contraditório:** se o «Canal dos meta» disser CHAT e o corpo trouxer edição numerada num
  documento `meta/`, a WO é contraditória: PARE e pergunte. O banner decide quem APLICA; escolher um
  dos lados em silêncio já deixou o registro de uma WO inteira de fora.
- **Corpo mínimo do relatório**, nesta ordem: (1) o que foi feito, edição por edição; (2) a SAÍDA CRUA
  das conferências — o número e o comando que o produziu, nunca só «bate»; (3) o que fugiu do texto
  literal da WO; (4) o que muda para quem usa; (5) o que você olhou além da WO; (6) arquivos tocados;
  (7) build/validação; (8) commit e push. Relatório que só repete «bate, bate, bate» não foi escrito
  por quem olhou o diff.
- O `HHMM` do nome do relatório sai de `date +%y%m%d-%H%M`, rodado na hora — nunca de cabeça.
- Feche com o **relatório de trabalho** — o que fez, achados e desvios do texto literal da WO,
````

## Edicao 15 — `.claude/skills/apply-wo/SKILL.md` — apply-wo da casa: contagem de nicho velha

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  `node build.js` e depois `node validate.js index.html` — regra de ouro **18/18 nichos, 0 erros**
````

**Texto:**

````
  `node build.js` e depois `node validate.js index.html` — regra de ouro **19/19 nichos, 0 erros**
````

## Edicao 16 — `.claude/skills/apply-wo/SKILL.md` — idem, segunda linha

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  (o total de checagens sobe a cada check novo; o que não muda é 18/18 e 0 erros).
````

**Texto:**

````
  (o total de checagens sobe a cada check novo; o que não muda é 19/19 e 0 erros).
````

## Edicao 17 — `.claude/skills/wrap/SKILL.md` — wrap da casa: as tres regras da gerada + a de versao, so da casa

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
````

**Texto:**

````
- **Antes do commit, conte a ESTRUTURA que você editou.** No `STATUS.md`, o bloco da sessão anterior
  tem de continuar no arquivo depois da sua edição — procure o título dele: mover tem duas metades, e a
  que some é sempre a de apagar. Estrutura que costuma duplicar (`<details>`, o bloco do topo do
  STATUS) tem contagem esperada — `grep -c` da abertura e do fechamento, um de cada. Aviso em prosa já falhou duas
  vezes seguidas; contagem não.
- Se o commit toca `INSTRUCOES-DO-PROJETO.md`, meça `wc -m` e escreva o número no relatório, ao lado do
  teto do projeto: teto que ninguém mede envelhece calado.
- O `HHMM` do nome do relatório sai de `date +%y%m%d-%H%M`, rodado na hora — nunca de cabeça.
- **Versão (D-158):** WO que muda o que o kit **gera** já traz o corte de minor (`KIT_VERSION`, topo do
  CHANGELOG e «Versão atual» do STATUS). Se ela tocou `src/` e não cortou, aponte no relatório.
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
````

## Edicao 18 — `.claude/skills/sondar/SKILL.md` — sondar da casa: origem da hora

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
Grave em `../AAMMDD-HHMM-code-<slug>-explore-<alvo>.txt` (pasta-pai do repo, mesmo lugar e mesmo padrao dos outros relatorios; o ato e sempre `explore`). Use estas quatro secoes:
````

**Texto:**

````
Grave em `../AAMMDD-HHMM-code-<slug>-explore-<alvo>.txt` (pasta-pai do repo, mesmo lugar e mesmo padrao dos outros relatorios; o ato e sempre `explore`). Use estas quatro secoes:
O `HHMM` sai de `date +%y%m%d-%H%M`, rodado na hora — nunca de cabeça.
````

## Edicao 19 — `validate.js` — C43: 46 -> 62 clausulas

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    ["CLAUDE.md: vocabulario de ato", /`apply` · `wrap` · `probe` · `explore`/, ["claudeMd"]],
````

**Texto:**

````
    // wo0130 (D-158): a primeira leva do feedback dos tres projetos (analise 261015). Uma clausula por
    // regra, conferida no gerado E na casa — a mesma razao das levas do mapa (wo0123–0127).
    ["modelo de WO: string exclusiva",   /EXCLUSIVA do texto que a WO insere/,     ["woTemplate"]],
    ["modelo de WO: nao testado",        /vai marcado «nao testado»/,              ["woTemplate"]],
    ["modelo de WO: deduzido nao para",  /Esperado deduzido nao e condicao de parada/, ["woTemplate"]],
    ["modelo de WO: piso",               /escreva-o como PISO/,                    ["woTemplate"]],
    ["modelo de WO: delta com baseline", /rede ja vermelha nao e rede/,            ["woTemplate"]],
    ["modelo de WO: trecho literal",     /cita o TRECHO literal/,                  ["woTemplate"]],
    ["modelo de WO: simular pelo texto", /a partir do PROPRIO TEXTO dela/,         ["woTemplate"]],
    ["modelo de WO: sem rodape",         /nao traz rodape de coautoria/,           ["woTemplate"]],
    ["modelo de WO: banner aplica",      /O banner decide quem APLICA/,            ["woTemplate"]],
    ["modelo de WO: linha inteira",      /Inserir so com ancora de LINHA INTEIRA/, ["woTemplate"]],
    ["modelo de WO: item de roteiro",    /Tres regras de item/,                    ["woTemplate"]],
    ["apply-wo: banner contraditorio",   /a WO [eé] contradit[oó]ria/,             ["applyWo"]],
    ["apply-wo: corpo minimo",           /SA[IÍ]DA CRUA/,                          ["applyWo"]],
    ["skills: origem da hora",           /date \+%y%m%d-%H%M/,                    ["applyWo","wrap"]],
    ["wrap: conta a estrutura",          /conte a ESTRUTURA que voc[eê] editou/,   ["wrap"]],
    ["wrap: teto medido",                /wc -m/,                                  ["wrap"]],
    ["CLAUDE.md: vocabulario de ato", /`apply` · `wrap` · `probe` · `explore`/, ["claudeMd"]],
````

## Edicao 20 — `src/index.template.html` — corte de versao

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
const KIT_VERSION = "1.122.0";
````

**Texto:**

````
const KIT_VERSION = "1.123.0";
````

## Edicao 21 — `meta/STATUS.md` — so o numero da versao no cabecalho: o C54 exige o STATUS igual ao KIT_VERSION no mesmo commit

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
> Versão atual: **v1.122.0**. Teste:
````

**Texto:**

````
> Versão atual: **v1.123.0**. Teste:
````

## Edicao 22 — `meta/CHANGELOG.md`

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
> Histórico de versões. Versão atual: **v1.122.0**.
````

**Texto:**

````
> Histórico de versões. Versão atual: **v1.123.0**.
````

## Edicao 23 — `meta/CHANGELOG.md` — entrada nova no topo

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
## v1.122.0 — Os dois carimbos respondem sozinhos (wo0106, D-137)
````

**Texto:**

````
## v1.123.0 — A primeira leva do feedback dos vizinhos, e a regra que faltava para cortar versão (wo0130, D-158)
- **Por que esta entrada carrega mais que a própria WO:** a v1.122.0 (28/08) atravessou as wo0107 a wo0129 sem corte, embora várias mudassem o que o kit gera. O resumo abaixo sai do registro (`D-138` a `D-157`); o detalhe vive em `meta/DECISIONS.md`.
- **De 28/08 a 13/10, pelo registro:** relatório com ato e alvo no nome (`D-139`) · bloco de fecho com condição observável e esqueleto literal (`D-140`, `D-142`) · skill `sondar` gerada e o par sonda/exploração (`D-141`, `D-143`) · `/wrap` cita em vez de concluir sobre medição; armadilhas do `grep -c` e do fim de linha no molde (`D-144`) · `C43` conferindo as superfícies instaladas da casa, quatro e depois cinco (`D-145`, `D-151`) · `C102` e `C103`: prosa viva que não mente sobre contagem, e caminho citado que existe (`D-146`–`D-148`) · **19º nicho, companion de jogo** (`D-149`, `D-150`) · as catorze regras do Sand-Land-Map (`D-151`–`D-155`) · **o eixo canal: pasta vinculada por padrão, mount como reserva** (`D-156`, `D-157`).
- **Nesta WO — molde de WO (onze regras):** a string contada é exclusiva do texto inserido · comando não rodado no ambiente de quem aplica vai marcado «não testado» · esperado deduzido não manda parar · número absoluto como piso · rede já vermelha se mede por delta · referência cita trecho literal · simular a WO a partir do próprio texto · o bloco de commit não traz rodapé de coautoria · o banner decide quem aplica · inserção só com âncora de linha inteira · três regras de item de roteiro. Origem: `FK-AG`, `FK-AQ`, `FK-AS`, `FK-AU`, `FK-AR`, `FK-AT`, `FK-AW`, `FK-AX`, `IDEIA-084` (Sand-Land-Map); 02/10 e 18/09 (GameDataHub); 28/08 e 29/09 (satelite-web).
- **Nesta WO — skills:** `/apply-wo` para em banner contraditório e relata com corpo mínimo de oito partes (satelite-web, 06/10); `/wrap` conta a estrutura que editou antes do commit (`FK-AP` + `i-N64`) e mede o teto das Instruções quando as toca (GameDataHub, 02/10); as três skills dizem de onde nasce o `HHMM` (satelite-web, 21/09).
- **A regra do corte (`D-158`):** WO que muda o que o kit gera corta minor na mesma WO — `KIT_VERSION`, topo deste arquivo e «Versão atual» do STATUS.
- Harness **19/19 · 106/106**; `C43` de **46 para 62** cláusulas, todas conferidas nos dois lados.

## v1.122.0 — Os dois carimbos respondem sozinhos (wo0106, D-137)
````

## Edicao 24 — `meta/CEREBRO.md` — a regra do corte, na secao de validacao da casa

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
Nunca publicar sem o harness passar em **19/19 nichos + todas as checagens, 0 erros**. (O harness chama `buildClaudeMd`/`buildInstr` direto via shim, trocando o `boot()`; o "Boot failed: DOMException" do boot real não é usado aqui.) O `build.js` é ferramenta **do lado do dev** — o usuário final continua recebendo **um `index.html` único**, sem build (decisão D-001).
````

**Texto:**

````
Nunca publicar sem o harness passar em **19/19 nichos + todas as checagens, 0 erros**. (O harness chama `buildClaudeMd`/`buildInstr` direto via shim, trocando o `boot()`; o "Boot failed: DOMException" do boot real não é usado aqui.) O `build.js` é ferramenta **do lado do dev** — o usuário final continua recebendo **um `index.html` único**, sem build (decisão D-001).

**Corte de versão (D-158).** WO que muda o que o kit **gera** (`src/`, e por isso o `index.html`) corta **minor** na mesma WO: `KIT_VERSION` no template, entrada nova no topo do `meta/CHANGELOG.md` e «Versão atual» no cabeçalho do `meta/STATUS.md` — o `C54` exige os três iguais. WO que só mexe na casa (`meta/`, skills, harness sem mudar o gerado) não corta. É regra, não preferência: o número é o que diz a um projeto instalado que ele está atrás, e a v1.122.0 atravessou 23 WOs que mudaram o gerado sem que nenhum instalado pudesse saber.
````

## Edicao 25 — `meta/IDEAS.md`

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
## i-N64 — O `/wrap` confere a FORMA do STATUS antes de editar, não só o que o relatório afirma — ABERTA, sem gatilho de data
````

**Texto:**

````
## i-N64 — O `/wrap` confere a FORMA do STATUS antes de editar, não só o que o relatório afirma — RESOLVIDA em 2026-10-15 (wo0130, `D-158`): passo de contagem nas duas skills `/wrap`, a gerada e a da casa
````

## Edicao 26 — `meta/DECISIONS.md` — D-158 no fim do arquivo

**Modo:** ACRESCENTAR no fim do arquivo, com uma linha em branco antes.

**Texto:**

````
## D-158 — A primeira leva do feedback dos vizinhos entra pelo molde e pelas skills, e o corte de versão vira regra

**Data:** 2026-10-15 · **WO:** 0130 · **Análise:** `meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md` · **Origem:** 58 entradas dos três projetos que usam o kit, escritas entre 18/07 e 13/10 e nunca lidas aqui `[medido por instrumento: leitura no disco, 2026-10-15]`.

**Decisão.** Das 37 entradas a adotar, entram nesta leva as que moram no **molde de WO** e nas **skills** — onze regras no molde, seis nas skills —, cada uma com o mesmo texto no gerado e na casa e uma cláusula no `C43` (46 → 62). As do CEREBRO, das Instruções e do prompt de atualização vão na wo0131, junto do livro de leitura que impede o atraso de se repetir.

**Corte de versão, e por que não é decisão do dono.** Não havia regra escrita, e por isso a v1.122.0 (28/08) atravessou 23 WOs que mudaram o gerado, inclusive um nicho novo e o eixo canal. O número é o carimbo pelo qual um projeto instalado sabe que está atrás (`D-137`); deixá-lo parado é carimbar conteúdo de outubro como de agosto. Regra: **WO que muda o que o kit gera corta minor na mesma WO** (`KIT_VERSION`, topo do CHANGELOG, «Versão atual» do STATUS — os três que o `C54` compara). Esta WO corta a **v1.123.0**, e a entrada dela no CHANGELOG resume `D-138` a `D-157` pelo registro.

**Um caso desta própria leva.** A `FK-AX` do Sand-Land-Map (28/09: «inserir após» com âncora de prefixo vira inserção do lado errado) descreveu o desvio que o Code teve ao aplicar a wo0129, duas semanas depois. A regra entra no molde com o caso medido, e esta WO a cumpre: toda edição é **trocar**, com a âncora repetida no texto novo.

**Exceção de raia, declarada.** Esta WO toca o cabeçalho do `meta/STATUS.md`, que é do `/wrap`, para trocar só o número da versão — o `C54` exige STATUS e `KIT_VERSION` iguais no mesmo commit, e o gancho de pré-commit roda o harness.
````

## Edicao 27 — build e harness

`node build.js` → `OK: index.html (901168 bytes) a partir de 19 modulo(s) + template.`
`node validate.js index.html` → `19/19`, `106/106`, `VERDE`. Copie para o relatorio, cruas: as linhas do `C28`, do `C43`
(`em 62 clausulas`) e do `C54` (`v1.123.0 nos tres lugares`).

## Edicao 28 — conferencia, antes e depois

`grep -c` conta LINHAS. Rode cada um logo depois da Edicao 0 e de novo depois da 27; o relatorio traz os dois.

| Comando | Antes | Depois |
|---|---|---|
| `grep -c "EXCLUSIVA do texto que a WO insere" src/index.template.html` | 0 | 1 |
| `grep -c "EXCLUSIVA do texto que a WO insere" meta/workorders/_TEMPLATE.md` | 0 | 1 |
| `grep -c "Inserir so com ancora de LINHA INTEIRA" src/index.template.html` | 0 | 1 |
| `grep -c "Inserir so com ancora de LINHA INTEIRA" meta/workorders/_TEMPLATE.md` | 0 | 1 |
| `grep -c "Tres regras de item" meta/workorders/_TEMPLATE.md` | 0 | 1 |
| `grep -c "O banner decide quem APLICA" src/index.template.html` | 0 | **2** — citada por duas edicoes (1 e 9) |
| `grep -c "SAÍDA CRUA" .claude/skills/apply-wo/SKILL.md` | 0 | 1 |
| `grep -c "conte a ESTRUTURA que você editou" .claude/skills/wrap/SKILL.md` | 0 | 1 |
| `grep -c "date +%y%m%d-%H%M" src/index.template.html` | 1 | **4** — o molde ja tinha 1; entram apply-wo, wrap e sondar |
| `grep -c "date +%y%m%d-%H%M" .claude/skills/sondar/SKILL.md` | 0 | 1 |
| `grep -c '^const KIT_VERSION = "1.123.0";' src/index.template.html` | 0 | 1 |
| `grep -c "^## v1.123.0 " meta/CHANGELOG.md` | 0 | 1 |
| `grep -c "^## D-158 " meta/DECISIONS.md` | 0 | 1 |
| `grep -c "^\*\*Corte de versão (D-158)" meta/CEREBRO.md` | 0 | 1 |
| `grep -c "^## i-N64 .*RESOLVIDA" meta/IDEAS.md` | 0 | 1 |
| `grep -c "18/18" .claude/skills/apply-wo/SKILL.md` | 2 | 0 |

**De leitura:** abra `meta/CHANGELOG.md` e confira que a entrada `## v1.123.0` ficou **acima** da `## v1.122.0`, com uma
linha em branco entre as duas.

## Edicao 29 — commit e push (verde = sem perguntar)

O bloco **nao traz rodape de coautoria** (regra da Edicao 2): se o seu ambiente acrescenta o dele, e o dele que vale.

```
git add src/index.template.html index.html validate.js meta/workorders/_TEMPLATE.md .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md .claude/skills/sondar/SKILL.md meta/CEREBRO.md meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md logs/2026-10-15.md meta/workorders/261015-wo0130-feedback-leva-1-molde-skills-e-versao.md
git commit -m "feat(kit): v1.123.0, primeira leva do feedback dos vizinhos no molde de WO e nas skills" -m "Onze regras no molde e seis nas skills, de quinze entradas do feedback dos tres projetos que usam o kit (analise 261015), com o mesmo texto no gerado e na casa; C43 de 46 para 62 clausulas. Corte de versao vira regra: WO que muda o gerado corta minor na mesma WO. A v1.122.0 atravessou as wo0107 a wo0129; a entrada do CHANGELOG resume D-138 a D-157. i-N64 resolvida. D-158."
git push
```

## Relatorio

Na pasta-pai, `AAMMDD-HHMM-code-kcm-apply-wo0130.txt`, com o `HHMM` de `date +%y%m%d-%H%M` rodado na hora, e o **corpo
minimo da Edicao 10**: o que foi feito, edicao por edicao; a saida crua das conferencias (Edicao 28 com antes e depois,
e as tres linhas do harness); o que fugiu do texto da WO; o que muda para quem usa; o que voce olhou alem da WO;
arquivos tocados contra a tabela de `numstat`; build e validacao; commit e o resultado REAL do push.

/wrap
