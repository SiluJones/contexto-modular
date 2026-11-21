# WO 0200 — a wo0199 conferida e duas decisoes do dono: o Raizes & Reinos no Farmeryan, o Senhores no custom (so doc)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — sem `src/`, sem `validate.js`, sem `build.js`. Sem corte de versao (v1.160.1).
> **Config sugerida:** modelo padrao, esforco baixo: so doc.
> **Pre-requisito:** HEAD = `381332f`, `main` = `origin/main`; harness em 19/19 · 134/134 · 0 erros, v1.160.1.
> **Base:** a mensagem do dono de 21/11 (11h12): «o Raizes & Reinos vai para o IDEAS do Farmeryan e o Senhores fica no custom narrativa + animacao»; o achado de forma do relatorio da wo0199 (a `i-N104` num paragrafo so).
> **Ancoras lidas em:** HEAD `381332f` («docs: a wo0198 conferida, as cartas de retomada de seis vizinhos e o GameDataHub lido; i-N105 (wo0199)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-21; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261121-1021` (apply wo0199) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: harness 19/19 · **134/134**, sem mudanca no `index.html` (1.061.955 bytes).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio. As cartas atualizadas (Farmeryan, Senhores e o item 4 dos quatro narrativos) moram nas pastas-pai dos vizinhos, fora deste repositorio: nao entram no commit.

## Por que

As duas decisoes do dono de 21/11 na `i-N104`, agora em itens (nada saiu); STATUS com o hash da wo0199 e esta WO; o log de 21/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N104` reorganizada em itens, com as duas decisoes | 16 / 2 | lf | `d8edad32739f081c25dd05f5c5f09f1aaebec91b` |
| `meta/STATUS.md` | hash da wo0199; bullet desta WO | 3 / 1 | lf | `30ebbcae6fde2ca2968406cb4bfc960600d0e7d7` |
| `logs/2026-11-21.md` | a wo0199 conferida e as decisoes | 5 / 0 | lf | `d15e4c7ea2ad90ff5b11cda9e5342536875d27e0` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `381332f`. Diferente: PARE.
2. `git status --short` = exatamente os tres ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261121-wo0200-decisoes-farmeryan-e-senhores.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario, e `git diff --numstat` = a coluna + / − (24 acrescentadas, 3 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `git add` dos tres e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-21.md meta/workorders/261121-wo0200-decisoes-farmeryan-e-senhores.md
```

```
git commit -m "docs: a wo0199 conferida; o Raizes e Reinos vira ideias do Farmeryan e o Senhores Da Guerra fica no custom narrativa + animacao (wo0200)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0200.txt` (`date +%y%m%d-%H%M`, rodado na hora).
