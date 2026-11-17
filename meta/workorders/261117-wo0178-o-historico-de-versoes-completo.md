# WO 0178 — o historico de versoes completo (v1.102 a v1.119), e o primeiro projeto de cliente no design no livro de leitura

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Sem corte de versao (v1.146.0) e sem DEC nova.
> **Config sugerida:** modelo leve, esforco baixo: so doc, sem build.
> **Pre-requisito:** HEAD = `c976cca`, `main` = `origin/main`; harness em 19/19 · 123/123 · 0 erros, v1.146.0.
> **Base:** o dono em 2026-11-16 («pode fazer i-N59 quando der») e em 2026-11-17 (o projeto de cardapio em `Estudante\- Designer`, «se tiver sugestoes, pode mandar carta»).
> **Ancoras lidas em:** HEAD `c976cca` («docs(meta): o codigo vem com o nome dele ... (wo0177)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-17; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261116-1434` (apply wo0177) lido inteiro. **Fonte da reconstrucao:** `meta/DECISIONS.md`, `D-115` a `D-134` — cada uma traz a linha `KIT_VERSION` da versao que cortou (de 1.102.0 a 1.119.0, mais 1.107.1 e 1.110.1), a WO e o harness; as datas, dos titulos «Sessao anterior (data — versao)» do `meta/STATUS.md`. Gerado por script a partir dessas linhas, sem texto de memoria.
> **Verificado pelo chat:** replica do HEAD com os quatro arquivos por cima: `node build.js` = 1.015.580 bytes (o mesmo: so doc); harness = **123/123**, 19/19. `grep -c '^## v1\.1[01][0-9]\.' meta/CHANGELOG.md` = **22** (as v1.100 a v1.119 e as duas correcoes).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A `i-N59`: o CHANGELOG saltava da v1.101.0 para a v1.120.0. As 20 entradas entram entre as duas, cada uma com o titulo da decisao, a data, o harness e o elo para ela; a nota do topo deixa de anunciar o buraco. A `i-N95`: o projeto de cardapio do dono e o primeiro de cliente no nicho Design Visual com o kit de hoje; seus dois itens de feedback entram no livro de leitura, com o que o KCM mediu. STATUS (o hash da wo0177 e esta WO) e o log de 17/11 (arquivo novo).

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/CHANGELOG.md` | as v1.102 a v1.119 e as correcoes v1.107.1 e v1.110.1; a nota do topo | 62 / 2 | lf | `8d43acf191f09f7175bedfeb6695985ff8c87332` |
| `meta/IDEAS.md` | `i-N59` resolvida; `i-N95` nova; a linha do Designer no livro | 6 / 1 | lf | `c3f052314c4a852fb89fe6b0ef43854de9704f09` |
| `meta/STATUS.md` | hash e custo da wo0177; bullet desta WO | 2 / 1 | lf | `1cb07098ad48f2c3eb09e58c5ef72ee5281df634` |
| `logs/2026-11-17.md` | arquivo novo | 15 / 0 | lf | `5d63e1b4f6e006fd63233600559506c230f8ff9d` |

Sem `index.html` (so doc). Fora do repo (nao versionar): a carta `261117-kcm-para-cardapio-01-sugestoes-do-kcm.md`, na pasta-pai do projeto de cardapio. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `c976cca`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/CHANGELOG.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? logs/2026-11-17.md` e `?? meta/workorders/261117-wo0178-o-historico-de-versoes-completo.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos quatro = os do inventario, e `git diff --numstat` dos tres modificados = a coluna + / − (70 acrescentadas, 4 removidas); o log novo com 15 linhas (`wc -l`). Diferente: PARE.
4. Leia o diff inteiro. As 20 entradas do CHANGELOG seguem uma forma so: titulo `## vX — <titulo da decisao> (woNNNN, D-NNN)` e uma linha com data, harness e o elo.
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **123/123**. Registre crua a linha do `C54`. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md logs/2026-11-17.md meta/workorders/261117-wo0178-o-historico-de-versoes-completo.md
```

```
git commit -m "docs(meta): o historico de versoes completo - v1.102 a v1.119 reconstruidas de D-115 a D-134 (i-N59) - e o projeto de cardapio no livro de leitura (i-N95) (wo0178)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`). Diga se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite doc nenhum. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0178.txt` (`date +%y%m%d-%H%M`, rodado na hora).
