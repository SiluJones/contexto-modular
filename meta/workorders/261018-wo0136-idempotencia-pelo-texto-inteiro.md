# WO 0136 — a idempotencia da WO se confere pelo texto novo inteiro, e o livro de leitura de 17/10

> **Tipo:** mista — CODIGO (produto + harness + duas superficies da casa) + DOC (o registro).
> **Config sugerida:** modelo padrao, esforco medio. 15 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`; todas as ancoras sao de UMA linha inteira, menos a da Edicao 10 (trecho do cabecalho do STATUS, como na wo0135).
> **Pre-requisito:** HEAD = `8743eac`, `main` = `origin/main`. Harness em **19/19 · 110/110 · 0 erros**, v1.127.0.
> **Base:** o livro de leitura dos vizinhos de 17/10 (log do dia, «Conversa 3 (chat)»): o GameDataHub, respondendo a carta 01, mediu na wo0129 deles uma edicao pulada pela idempotencia por frase-chave; pedido do dono em 2026-10-18.
> **Depende de:** wo0135 (aplicada, `0869695`; fecho `23796ea`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `cc67ae828eb73c789d1af018c517b74d0a6a6286  logs/2026-10-17.md` (secao «Conversa 3 (chat)», LF)
> - `14746fa96b0b5fb0820842f419df7d7134929ff4  logs/2026-10-18.md` (novo, secao «Conversa 1 (chat)», LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo (a regra que esta WO instala). Se ja estiver, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `8743eac`; recortadas do arquivo vivo, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `src/index.template.html` — em `buildWoTemplate()`, a linha `> **Idempotencia:**`; em `buildCodeKitFiles()`, a linha «Localize cada âncora EXATAMENTE» da skill `applyWo`; `const KIT_VERSION`
> - `validate.js` — no `C43`, a clausula `"apply-wo: corpo minimo"` e o comentario `// (2b)`
> - `meta/workorders/_TEMPLATE.md` — a linha `> **Idempotencia:**`; `.claude/skills/apply-wo/SKILL.md` — a linha «Antes de inserir, confira a **idempotência**»
> - `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.127.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — as tres linhas do livro de leitura e o titulo `### 2026-10-15 — Cartas enviadas`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-163`, CHANGELOG, o livro de leitura no IDEAS. A Edicao 10 toca o
> `meta/STATUS.md` so para o numero da versao (excecao da `D-158`). **Os logs de 17/10 e 18/10 sao do chat:** esta WO so os versiona pelo sha1, e o `/wrap` acrescenta a secao dele sem editar a do chat.

---

## 1. Por que

O molde de WO ensina duas coisas que se contradizem. Uma: «**Substituir** com a ancora repetida dentro do texto novo: substituir nao tem lado» (a forma «trocar», FK-AX do Sand-Land-Map). Outra: «**Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**». Na forma «trocar», o texto novo contem a ancora — entao, se a frase-chave cair nesse trecho, ela ja existe ANTES de aplicar, e a edicao e pulada em silencio. O GameDataHub mediu exatamente isso na wo0129 deles e respondeu a carta 01 com a regra que funcionou: «ja aplicada» e o texto novo INTEIRO presente. A skill `apply-wo` gerada nao tinha regra de idempotencia nenhuma; a instalada na casa tinha a frase antiga. Esta WO poe a regra nova nas quatro superficies (molde e skill, gerados e instalados), trava com o `C43` e registra o livro de leitura de 17/10. Corta a **v1.128.0** (`D-158`).

## 2. Contexto factual — medido na replica

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 110/110 | **19/19 · 110/110** (nenhum check novo) | `node validate.js index.html` |
| `C43` | `ok (instalado confere com o gerado em 70 clausulas)` | `ok (instalado confere com o gerado em 71 clausulas)` | linha do `C43` |
| `C28` | `ok (padrao 5852/6900 · +Code 526/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7185/7600 · 304 configuracoes)` | `ok (padrao 5852/6900 · +Code 526/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7185/7600 · 304 configuracoes)` (identico) | linha do `C28` |
| `C54` | v1.127.0 | **v1.128.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 922.276 bytes | **922.680 bytes** | a linha `OK:` do `node build.js` |

- **Prova de que o `C43` acusa:** o `validate.js` desta WO rodado contra a casa do HEAD (o `_TEMPLATE.md` e a skill instalada antigos) fica vermelho no `C43`.
- **As Instrucoes nao mudam:** a regra mora no molde de WO e na skill, fora de `buildInstr`; o `C28` sai identico.

## Inventario

- **Superficies que mandam conferir idempotencia por frase-chave: 3**, medidas no HEAD por `grep -c 'frase-chave do texto NOVO'`: `src/index.template.html` (o molde gerado) 1, `meta/workorders/_TEMPLATE.md` 1, `.claude/skills/apply-wo/SKILL.md` 1. A quarta superficie, a skill `apply-wo` gerada, nao tinha regra nenhuma (`grep -c` de `idempot` na `applyWo` gerada: 0).
- **Fora:** os cabecalhos das WOs ja aplicadas em `meta/workorders/`, que citam a frase antiga — sao historia, nao instrucao viva.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `8743eac`. Se diferente, **PARE e reporte**.
2. `sha1sum logs/2026-10-17.md logs/2026-10-18.md` = os do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M logs/2026-10-17.md`, `?? .claude/launch.json`, `?? logs/2026-10-18.md`, `?? meta/workorders/261018-wo0136-idempotencia-pelo-texto-inteiro.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c 'texto NOVO INTEIRO' validate.js` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `src/index.template.html` · molde de WO gerado · idempotencia pelo texto inteiro

**Ancora** (em `buildWoTemplate()`; a linha inteira):

```
    "> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**",
```

**Substituir por:**

```
    "> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo — frase-chave nao basta: na forma",
    "> «trocar» o texto novo repete a ancora, e um trecho dele ja existe antes de aplicar. Se o inteiro ja estiver, **PULE**",
```

(A linha seguinte, `"> o item e diga no relatorio — nao duplique.",`, fica como esta e fecha a frase.)

## Edicao 2 — `src/index.template.html` · skill `apply-wo` gerada · a regra que faltava

**Ancora** (em `buildCodeKitFiles()`, na `applyWo`; a linha inteira):

```
    "Localize cada âncora EXATAMENTE; se não achar uma, PARE e reporte — não chute um lugar próximo.",
```

**Substituir por:**

```
    "Localize cada âncora EXATAMENTE; se não achar uma, PARE e reporte — não chute um lugar próximo.",
    "Antes de cada edição, confira a idempotência pelo texto NOVO INTEIRO: se ele já está no arquivo, PULE e diga no relatório. Frase-chave não basta — na forma «trocar» o texto novo repete a âncora, e um trecho dele já existe antes de aplicar.",
```

## Edicao 3 — `src/index.template.html` · corte de versao (D-158)

**Ancora** :

```
const KIT_VERSION = "1.127.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.128.0";
```

## Edicao 4 — `validate.js` · a clausula nova do `C43`, nos dois lados

**Ancora** (na lista `CLAUSULAS`; a linha inteira):

```
    ["apply-wo: corpo minimo",           /SA[IÍ]DA CRUA/,                          ["applyWo"]],
```

**Substituir por:**

```
    ["apply-wo: corpo minimo",           /SA[IÍ]DA CRUA/,                          ["applyWo"]],
    // wo0136 (D-163): idempotencia pelo texto NOVO INTEIRO. A frase-chave contradiz a forma «trocar», que
    // repete a ancora no texto novo: o GameDataHub mediu uma edicao pulada em silencio na wo0129 deles.
    ["idempotencia pelo texto inteiro",  /texto NOVO INTEIRO/,                     ["woTemplate","applyWo"]],
```

## Edicao 5 — `validate.js` · a frase antiga nao volta em nenhuma das quatro superficies

**Ancora** (no `C43`; a linha inteira):

```
  // (2b) o GERADO nao pode conter a propria linha que a lista de revogacoes manda remover.
```

**Substituir por:**

```
  // (2a) wo0136: a frase antiga da idempotencia nao volta em nenhum dos quatro lados — com ela, na forma
  //      «trocar», a edicao e pulada em silencio porque o texto novo repete a ancora.
  ["woTemplate", "applyWo"].forEach(alvo => {
    assert(!/frase-chave do texto NOVO/.test(gerado[alvo]), "o kit GERADO voltou a conferir idempotencia pela frase-chave do texto NOVO ("+alvo+"): na forma «trocar» o texto novo repete a ancora e a edicao e pulada em silencio (wo0136)");
    assert(!/frase-chave do texto NOVO/.test(instalado[alvo]), "a superficie INSTALADA `"+CAMINHO[alvo]+"` ainda confere idempotencia pela frase-chave do texto NOVO (wo0136)");
  });

  // (2b) o GERADO nao pode conter a propria linha que a lista de revogacoes manda remover.
```

## Edicao 6 — `meta/workorders/_TEMPLATE.md` · o molde da casa

**Ancora** (a linha inteira):

```
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**
```

**Substituir por:**

```
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo — frase-chave nao basta: na forma
> «trocar» o texto novo repete a ancora, e um trecho dele ja existe antes de aplicar. Se o inteiro ja estiver, **PULE**
```

## Edicao 7 — `.claude/skills/apply-wo/SKILL.md` · a skill da casa

**Ancora** (a linha inteira):

```
- Antes de inserir, confira a **idempotência**: procure a frase-chave do texto NOVO. Se já existir,
```

**Substituir por:**

```
- Antes de cada edição, confira a **idempotência** pelo texto NOVO INTEIRO — frase-chave não basta: na forma
  «trocar» o texto novo repete a âncora, e um trecho dele já existe antes de aplicar. Se o inteiro já estiver no arquivo,
```

(A linha seguinte, `  PULE o item e diga no relatório — não duplique.`, fica como esta.)

## Edicao 8 — `meta/CHANGELOG.md` · versao atual

**Ancora** :

```
> Histórico de versões. Versão atual: **v1.127.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.128.0**.
```

## Edicao 9 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.127.0 — No canal pasta, as Instruções e os prompts param de mandar baixar, colar e anexar (wo0135, D-162)
```

**Substituir por:**

```
## v1.128.0 — A idempotência da WO se confere pelo texto novo inteiro, não por frase-chave (wo0136, D-163)
- **Molde de WO e skill `apply-wo` gerados:** «procure a frase-chave do texto NOVO» vira «procure o texto NOVO INTEIRO», com o porquê escrito: na forma «trocar», que o próprio molde ensina, o texto novo repete a âncora, e um trecho dele já existe antes de aplicar — a edição seria pulada em silêncio. A skill gerada não tinha regra de idempotência; passa a ter.
- **A casa:** o `_TEMPLATE.md` e a skill `apply-wo` instalados recebem a mesma regra. O `C43` ganha a cláusula nos dois lados (70 → 71) e uma conferência negativa: a frase antiga não volta em nenhuma das quatro superfícies.
- **Origem:** o GameDataHub mediu a edição pulada na wo0129 deles e mandou a regra na resposta à carta 01 (2026-10-16), lida no livro de leitura de 17/10. As Instruções não mudam. Harness **19/19 · 110/110**.

## v1.127.0 — No canal pasta, as Instruções e os prompts param de mandar baixar, colar e anexar (wo0135, D-162)
```

## Edicao 10 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; TRECHO de uma linha longa, 1 ocorrencia — o resto da linha fica):

```
Versão atual: **v1.127.0**.
```

**Substituir por:**

```
Versão atual: **v1.128.0**.
```

## Edicao 11 — `meta/IDEAS.md` · livro de leitura · Sand-Land-Map

**Ancora** (a linha inteira):

```
> | Sand-Land-Map | `meta/IDEAS.md`, «📮 Feedback ao KCM — leva nova» | `FK-AZ` e `IDEIA-084` | 2026-10-15 |
```

**Substituir por:**

```
> | Sand-Land-Map | `meta/IDEAS.md`, «📮 Feedback ao KCM — leva nova» | `FK-AZ` e `IDEIA-084` (sem verbete novo; carta 06 lida) | 2026-10-17 |
```

## Edicao 12 — `meta/IDEAS.md` · livro de leitura · GameDataHub

**Ancora** (a linha inteira):

```
> | GameDataHub | `meta/IDEAS.md`, «🔁 Feedback para o Kit» e «🧩 Feedback para o Kit» | leva de 2026-10-02 | 2026-10-15 |
```

**Substituir por:**

```
> | GameDataHub | `meta/IDEAS.md`, «🔁 Feedback para o Kit» e «🧩 Feedback para o Kit» | resposta à carta 01, de 2026-10-16 | 2026-10-17 |
```

## Edicao 13 — `meta/IDEAS.md` · livro de leitura · satelite-web

**Ancora** (a linha inteira):

```
> | satelite-web | `meta/IDEAS.md`, «🧰 Feedback para o Kit» | item de 2026-10-12 | 2026-10-15 |
```

**Substituir por:**

```
> | satelite-web | `meta/IDEAS.md`, «🧰 Feedback para o Kit» | item de 2026-10-12 (nada novo; carta 03 sem resposta) | 2026-10-17 |
```

## Edicao 14 — `meta/IDEAS.md` · a leitura de 17/10, acima da entrada das cartas

**Ancora** (o titulo inteiro):

```
### 2026-10-15 — Cartas enviadas aos três vizinhos, com o que cada uma pede de volta (aguardando, com gatilho)
```

**Substituir por:**

```
### 2026-10-17 — Livro de leitura: o que os três responderam às cartas de 15/10

- **Sand-Land-Map** (`035a476`): nenhum verbete novo desde `FK-AZ`/`IDEIA-084` — as `IDEIA-085` a `096` são do projeto. Responderam com a **carta 06** (`261016-sand-land-para-kcm-06-trocar-no-campo.md`, cópia em `../notas-arquivadas/`): a forma «trocar» com a âncora repetida não atrapalhou a leitura (wo0154–0159, seis sem desvio) e deixa reaplicar a WO por script a partir do próprio texto, conferida por `diff -r` entre duas aplicações. **Pendente do nosso lado:** a leitura do `DECISIONS` deles, prometida nas cartas 04 e 05; a `DEC-056` segue aberta.
- **GameDataHub** (`e4ca135`): item de 2026-10-16, resposta à carta 01, e as duas perguntas fecharam. O `cf_clearance` saiu do `- Comando.txt` (as três ocorrências vazias) `[medido, 2026-10-17]`; o executor deles aplica a WO por script, lendo do texto dela, desde a wo0128. **O achado:** a idempotência por frase-chave pulou uma edição na wo0129 deles, porque o texto novo continha a âncora — e o nosso molde ensinava as duas coisas ao mesmo tempo. Corrigido na wo0136 (`D-163`).
- **satelite-web** (`22a0880`): nada novo — o topo da seção segue o item de 2026-10-12. A **carta 03 está sem resposta**: é a pendência 6 do STATUS deles. O relato «os três responderam» `[relatado pelo dono, 2026-10-16]` valia para dois. Gatilho **2026-11-15** mantido.

### 2026-10-15 — Cartas enviadas aos três vizinhos, com o que cada uma pede de volta (aguardando, com gatilho)
```

## Edicao 15 — `meta/DECISIONS.md` · `D-163` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0135» e termina em «Harness 109 → **110**.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-163 — A idempotência da WO se confere pelo texto novo inteiro, não por frase-chave

**Data:** 2026-10-18 · **WO:** 0136 · **Origem:** resposta do GameDataHub à carta 01 (2026-10-16), lida no livro de leitura de 17/10 · **Corrige:** a regra de idempotência do molde de WO, à luz da forma «trocar» (FK-AX do Sand-Land-Map, adotada na leva da `D-159`).

**Decisão.** O molde ensinava a substituir repetindo a âncora dentro do texto novo, e no mesmo cabeçalho mandava conferir a idempotência pela frase-chave do texto novo. As duas regras se contradizem: se a frase-chave cai no trecho que repete a âncora, ela já existe antes de aplicar e a edição é pulada em silêncio — o GameDataHub mediu isso na wo0129 deles. A regra passa a ser: **«já aplicada» é o texto NOVO INTEIRO presente no arquivo.** Vale nas quatro superfícies — o molde de WO e a skill `apply-wo`, gerados e instalados na casa; a skill gerada não tinha regra de idempotência e passa a ter. Corta a **v1.128.0** (`D-158`).

**O check.** O `C43` ganha a cláusula «idempotencia pelo texto inteiro» nos dois lados (70 → 71) e uma conferência negativa: a frase antiga não volta em nenhuma das quatro superfícies. Nenhum check novo (110).

**Fora:** a variante que o GameDataHub propôs para quando o texto novo contém a âncora («e a âncora ausente») — na forma «trocar» a âncora continua no arquivo depois de aplicar, então a condição falharia; o texto inteiro basta sozinho. Os cabeçalhos das WOs já aplicadas, que citam a frase antiga, são história.

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0136 traz a medida no repo]`: `index.html` 922.276 → 922.680 bytes; `C28` inalterado; harness 19/19 · 110/110.
```

## Edicao 16 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (922680 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **110/110**. Registre crua no relatorio a linha do `C43` e a do `C28`. Harness vermelho = **PARE**.

## Edicao 17 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 16. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere ou remove (medido no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF 'texto NOVO INTEIRO' src/index.template.html            # 0 -> 2
grep -cF 'texto NOVO INTEIRO' meta/workorders/_TEMPLATE.md       # 0 -> 1
grep -cF 'texto NOVO INTEIRO' .claude/skills/apply-wo/SKILL.md   # 0 -> 1
grep -cF 'texto NOVO INTEIRO' validate.js                        # 0 -> 2
grep -cF 'frase-chave do texto NOVO' src/index.template.html meta/workorders/_TEMPLATE.md .claude/skills/apply-wo/SKILL.md   # 1/1/1 -> 0/0/0
grep -cF 'const KIT_VERSION = "1.128.0";' src/index.template.html   # 0 -> 1
grep -c '^## D-163 ' meta/DECISIONS.md                           # 0 -> 1
grep -c '^### 2026-10-17 — Livro de leitura' meta/IDEAS.md       # 0 -> 1
grep -cF '| 2026-10-17 |' meta/IDEAS.md                          # 0 -> 3
grep -m1 '^## v' meta/CHANGELOG.md                               # v1.127.0 -> v1.128.0
```

**Prova negativa (rode e restaure):** no `meta/workorders/_TEMPLATE.md`, troque `texto NOVO INTEIRO` por `texto NOVO` e rode `node validate.js index.html`: o `C43` tem de ficar vermelho com «a superficie INSTALADA `meta/workorders/_TEMPLATE.md` nao tem a clausula 'idempotencia pelo texto inteiro'». Restaure e confira o harness verde.

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 4 | 2 |
| `index.html` (gerado) | 4 | 2 |
| `validate.js` | 10 | 0 |
| `meta/workorders/_TEMPLATE.md` | 2 | 1 |
| `.claude/skills/apply-wo/SKILL.md` | 2 | 1 |
| `meta/CHANGELOG.md` | 6 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 9 | 3 |
| `meta/DECISIONS.md` | 12 | 0 |
| `logs/2026-10-17.md` (a secao do chat, ja no disco) | 11 | 0 |
| `logs/2026-10-18.md` (novo, do chat) | 11 | 0 |
| `meta/workorders/261018-wo0136-idempotencia-pelo-texto-inteiro.md` (esta WO) | 378 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada.

## Edicao 18 — commit e push (verde = sem perguntar)

```
git add src/index.template.html index.html validate.js meta/workorders/_TEMPLATE.md .claude/skills/apply-wo/SKILL.md meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md logs/2026-10-17.md logs/2026-10-18.md meta/workorders/261018-wo0136-idempotencia-pelo-texto-inteiro.md
```

```
git commit -m "feat(kit): a idempotencia da WO se confere pelo texto novo inteiro, nao por frase-chave (wo0136, D-163)" -m "Molde de WO e skill apply-wo, gerados e da casa: na forma trocar o texto novo repete a ancora e a frase-chave pulava a edicao. C43 com a clausula nos dois lados e a frase antiga barrada. Livro de leitura de 17/10 no IDEAS. v1.128.0."
```

```
git push
```

---

## Fora de escopo

- O pacote de update aos vizinhos: sai depois desta WO, ja na v1.128.0, gerado pelo dono.
- A leitura do `DECISIONS` do Sand-Land-Map (pendencia nossa, cartas 04 e 05) e a `DEC-056`.
- A `i-N70` (P8 e P11 no idioma do mount).
- Os cabecalhos das WOs ja aplicadas que citam a frase antiga.

## Armadilhas desta WO

- **Fim de linha.** `src/index.template.html`, `validate.js`, `meta/DECISIONS.md` e `meta/workorders/_TEMPLATE.md` sao **CRLF** na arvore; os textos novos das Edicoes 1, 4, 5, 6 e 15 tem varias linhas — grave-os em CRLF. `.claude/skills/apply-wo/SKILL.md`, `meta/CHANGELOG.md`, `meta/STATUS.md` e `meta/IDEAS.md` sao LF.
- **Edicoes 1, 2, 4, 5 e 9 repetem a ancora dentro do texto novo** — e por isso a idempotencia de cada uma e pelo texto novo INTEIRO, a regra que esta WO instala: um trecho da ancora ja existe antes de aplicar.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0136.txt` (`date +%y%m%d-%H%M`, rodado na hora).
