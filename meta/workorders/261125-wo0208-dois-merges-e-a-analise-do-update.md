# WO 0208 — a wo0207 conferida, dois merges fechados e a analise do update que cansa (so doc)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — sem `src/`, sem build. Sem corte de versao (v1.162.1).
> **Config sugerida:** modelo padrao, esforco baixo.
> **Pre-requisito:** HEAD = `9ce052d`, `main` = `origin/main`.
> **Base:** o pedido do dono de 25/11 (13h23): «a wo0207 foi aplicada, leia o txt»; a nota `261125-1321` («ta horrivel atualizar»); os avisos de lido `261123-my-little-lady-leu-03` e `261124-coral-island-leu-01`. Os tres lidos inteiros e movidos para `../notas-arquivadas/`.
> **Ancoras lidas em:** HEAD `9ce052d` («fix(ui): os blocos das Convencoes e do nicho voltam a recolher; C136 (wo0207, D-202, v1.162.1)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-25; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261123-1628` (apply wo0207) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os quatro arquivos por cima: harness 137/137, 19/19 (a analise nova e citada pelo STATUS; o `C119` exige que o caminho exista).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

A analise `261125-ANALISE-o-update-que-cansa.md` (nova, «Em discussao») mede seis merges e recomenda o update enxuto; o IDEAS ganha a `i-N110` (os dois merges fechados e o que ensinaram; a nota do dono) e o livro de leitura avanca o My Little Lady e o Coral Island; o STATUS recebe o hash da wo0207 e o bullet desta WO; o log de 25/11 nasce.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N110` nova; o livro de leitura | 5 / 2 | lf | `d1b1e042e5c155999e2bf4f457357171d6c7a78b` |
| `meta/STATUS.md` | hash da wo0207; bullet desta WO | 3 / 1 | lf | `3a1b9a00e4133ae3bdc669b67a70a342f0d1eaa2` |
| `logs/2026-11-25.md` | novo (8 linhas) | 8 / 0 | lf | `c23c5fb2aa12fb3b49e5db6d29f7181a9456bf70` |
| `meta/analises/261125-ANALISE-o-update-que-cansa.md` | nova (61 linhas) | 61 / 0 | lf | `aab334967449ab0f7c8273607c6ab6a6e920124d` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `9ce052d`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? logs/2026-11-25.md`, `?? meta/analises/261125-ANALISE-o-update-que-cansa.md` e `?? meta/workorders/261125-wo0208-dois-merges-e-a-analise-do-update.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos quatro = os do inventario; `git diff --numstat` dos dois rastreados = 8 acrescentadas, 3 removidas; `wc -l` do log = 8 e da analise = 61. Diferente: PARE.
4. Leia o diff e os dois arquivos novos inteiros, sem cortar linha (`git diff --word-diff -U0`).
5. `git add` dos quatro e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-25.md meta/analises/261125-ANALISE-o-update-que-cansa.md meta/workorders/261125-wo0208-dois-merges-e-a-analise-do-update.md
```

```
git commit -m "docs: a wo0207 conferida, dois merges da v1.162.0 fechados e a analise do update que cansa; i-N110 (wo0208)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga como leu as linhas longas. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, IDEAS, log nem a analise. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0208.txt` (`date +%y%m%d-%H%M`, rodado na hora).
