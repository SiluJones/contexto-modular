# WO 0199 — a wo0198 conferida, as cartas de retomada de seis vizinhos e o GameDataHub lido (so doc)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — sem `src/`, sem `validate.js`, sem `build.js`. Sem corte de versao (v1.160.1).
> **Config sugerida:** modelo padrao, esforco baixo: so doc.
> **Pre-requisito:** HEAD = `694c1dc`, `main` = `origin/main`; harness em 19/19 · 134/134 · 0 erros, v1.160.1.
> **Base:** o pedido do dono de 21/11 (09h51): a mensagem e a sugestao de atualizacao para jogos 2D em Godot alem do Hey Mother, a leitura dos quatro narrativos, o Coral Island primeiro, e a lista do que esta em aberto.
> **Ancoras lidas em:** HEAD `694c1dc` («fix(ui): as Instrucoes sem a margem a mais em cima ... (wo0198, D-198, D-199, v1.160.1)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-21; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261121-0951` (apply wo0198) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: harness 19/19 · **134/134**, sem mudanca no `index.html` (1.061.955 bytes).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio. As seis cartas e o aviso de lido moram nas pastas-pai dos vizinhos, fora deste repositorio: nao entram no commit.

## Por que

O registro do que o chat fez fora do repo: seis cartas de retomada (Coral Island, Farmeryan, My mother, I will die, My Little Lady, Senhores Da Guerra) na `i-N104`; o GameDataHub lido de 31/10 a 21/11 na `i-N105` nova e no livro de leitura; STATUS com o hash da wo0198 e esta WO; o log de 21/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N105` nova; `i-N104` com as cartas e a escolha dos jogos; o livro de leitura do GameDataHub | 5 / 2 | lf | `8741c376b84e5a5b7dc89ae6e8bb6d4f6a0dcc0f` |
| `meta/STATUS.md` | hash da wo0198; bullet desta WO | 3 / 1 | lf | `4f729ce87b195c95c112d1d6c66d4de7cc33ada0` |
| `logs/2026-11-21.md` | a wo0198 conferida e a retomada | 12 / 0 | lf | `fd0097e037be81807716c3d5cbc178853127ffb7` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `694c1dc`. Diferente: PARE.
2. `git status --short` = exatamente os tres ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261121-wo0199-retomada-de-seis-vizinhos.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario, e `git diff --numstat` = a coluna + / − (20 acrescentadas, 3 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `git add` dos tres e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-21.md meta/workorders/261121-wo0199-retomada-de-seis-vizinhos.md
```

```
git commit -m "docs: a wo0198 conferida, as cartas de retomada de seis vizinhos e o GameDataHub lido; i-N105 (wo0199)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0199.txt` (`date +%y%m%d-%H%M`, rodado na hora).
