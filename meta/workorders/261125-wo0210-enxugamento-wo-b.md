# WO 0210 — o enxugamento, WO B: o «como» da Analise e do Refino vai para o GUIA, e a base do CEREBRO ganha teto (v1.164.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o CEREBRO, o GUIA, o pacote de update) + harness + doc. Corta a **v1.164.0** (`D-204`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `fca92d1`, `main` = `origin/main`; harness em 19/19 · 138/138 · 0 erros, v1.163.0.
> **Base:** o pedido do dono de 25/11 (17h24): «siga com a WO B do enxugamento»; a analise `meta/analises/261118-ANALISE-o-enxugamento-do-cerebro.md` (recomendacao 2) e a `i-N99`.
> **Ancoras lidas em:** HEAD `fca92d1` («feat(kit): o update enxuto - revogadas filtradas pela versao, perfil sem parada por campo vazio, o vazio avisado na tela; C137 (wo0209, D-203, v1.163.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-25; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261125-1457` (apply wo0209) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.073.380 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `80de4d4e9c0d9e1e56a4b8dffa6cf92233ad2818`; harness inteiro = **139/139**, 19/19 (`C54` verde em v1.164.0). Provas negativas: um bullet do «como» deixado tambem no CEREBRO → `C138` («nao esta so no GUIA»); 1,2 KB a mais na base → `C138` («passou o teto: 72603 > 72500»); restaurado, verde. A arvore foi conferida igual a replica, arquivo por arquivo (sem CR).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

(1) Sete bullets da «Analise antes do compromisso» e dez do «Refino das Instrucoes» saem do `buildClaudeMd` para `guiaSecaoAnalise` e `guiaSecaoRefino` (o texto muda de lugar, nao de forma); no CEREBRO ficam a regra, os dois testes baratos, o «Onde», o funil, o gatilho do formato, o dever, os tetos, o registro e um ponteiro por secao. (2) `GUIA_SECOES` ganha as duas secoes (o indice do CEREBRO as lista). (3) O manifesto e o prompt do update: «desde a v1.164.0» esse «como» nao volta pelo transplante. (4) `C138` novo, com `CEREBRO_TETO_BASE` (72.500) e `CEREBRO_TETO_MAX` (94.000) no `validate.js`; dez assercoes de sete checks mudam de fonte para o GUIA, e o `C111` procura a Sincronia na secao do GUIA. Registro: CHANGELOG, STATUS (o hash da wo0209 e esta WO), DECISIONS (`D-204`), IDEAS (`i-N99`), a analise `261118` e o log de 25/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | as duas secoes no GUIA, os ponteiros, o transplante proibido; KIT_VERSION 1.164.0 | 43 / 22 | crlf | `9133eedde43c93d6e62dedb92f77996cfa7be2f2` |
| `validate.js` | `C138` novo; dez assercoes mudam de fonte; o `C111` | 55 / 13 | crlf | `e25527e094e36293949007f56a8a84198177b590` |
| `meta/CHANGELOG.md` | v1.164.0 | 10 / 1 | lf | `ad0115c0f9b1b1df95fe4a3869dcf60ee7d62669` |
| `meta/DECISIONS.md` | `D-204` | 10 / 0 | crlf | `0c21d9e0ff19bd81f8ee295691076de502a18d52` |
| `meta/IDEAS.md` | `i-N99` item 1 resolvido | 1 / 1 | lf | `5f45919cdd34217b54463f339318c09fadb93030` |
| `meta/STATUS.md` | carimbo v1.164.0; hash da wo0209; bullet desta WO | 4 / 2 | lf | `4b067da4e556ed3666aba61ff79a046abf8a2842` |
| `meta/analises/261118-ANALISE-o-enxugamento-do-cerebro.md` | o «Vira» da WO B | 1 / 1 | lf | `3a0a80de888f5a4d20ca6b8f3ee0204fd12767e7` |
| `logs/2026-11-25.md` | a wo0209 conferida e esta WO | 2 / 0 | lf | `276be58252a110d362e8264157fcd9fc371ac318` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.073.380 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `fca92d1`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261125-wo0210-enxugamento-wo-b.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` = a coluna + / − (126 acrescentadas, 40 removidas). Diferente: PARE.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0` nos docs). No template, confira que cada linha removida do `buildClaudeMd` reaparece igual numa das duas funcoes `guiaSecao*` novas.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `80de4d4e9c0d9e1e56a4b8dffa6cf92233ad2818`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **139/139**. Registre cruas as linhas do `C138`, do `C127`, do `C111`, do `C43` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261118-ANALISE-o-enxugamento-do-cerebro.md logs/2026-11-25.md index.html meta/workorders/261125-wo0210-enxugamento-wo-b.md
```

```
git commit -m "feat(kit): o enxugamento, WO B - o como da Analise e do Refino vai para o GUIA, e a base do CEREBRO ganha teto; C138 (wo0210, D-204, v1.164.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS, a analise nem o log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0210.txt` (`date +%y%m%d-%H%M`, rodado na hora).
