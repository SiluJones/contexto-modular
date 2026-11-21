# WO 0201 — a wo0200 conferida, a Carreira relida e tres itens ao kit (so doc)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — sem `src/`, sem `validate.js`, sem `build.js`. Sem corte de versao (v1.160.1).
> **Config sugerida:** modelo padrao, esforco baixo: so doc.
> **Pre-requisito:** HEAD = `33ef245`, `main` = `origin/main`; harness em 19/19 · 134/134 · 0 erros, v1.160.1.
> **Base:** «Aplicada, relatorio aqui. Prossiga» (o dono, 21/11 11h58); a Carreira relida com a pasta concedida (a outra metade da condicao da `D-174`).
> **Ancoras lidas em:** HEAD `33ef245` («docs: a wo0199 conferida; o Raizes e Reinos vira ideias do Farmeryan ... (wo0200)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-21; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261121-1115` (apply wo0200) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: harness 19/19 · **134/134**, sem mudanca no `index.html` (1.061.955 bytes).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio. Nada desta WO mora fora do repositorio.

## Por que

A Carreira relida: 6 WOs de conferencia, 0 paradas, 0 erros (a `i-N105`); o item de 20/11 da secao de feedback dela (a `i-N106` nova); o livro de leitura; STATUS com o hash da wo0200 e esta WO; o log de 21/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N106` nova; `i-N105` com a Carreira; o livro de leitura da Carreira | 5 / 2 | lf | `1a446c238eb3032e49f2caa295d3ef1b47257df5` |
| `meta/STATUS.md` | hash da wo0200; bullet desta WO | 3 / 1 | lf | `aa55f5c5246265e4727280ecc84549097198c302` |
| `logs/2026-11-21.md` | a wo0200 conferida e a Carreira | 6 / 0 | lf | `67619a567a619bdfba62b0f11fe411c90faf242a` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `33ef245`. Diferente: PARE.
2. `git status --short` = exatamente os tres ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261121-wo0201-carreira-relida.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario, e `git diff --numstat` = a coluna + / − (14 acrescentadas, 3 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `git add` dos tres e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-21.md meta/workorders/261121-wo0201-carreira-relida.md
```

```
git commit -m "docs: a wo0200 conferida, a Carreira relida (6 WOs de conferencia) e tres itens ao kit; i-N106 (wo0201)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0201.txt` (`date +%y%m%d-%H%M`, rodado na hora).
