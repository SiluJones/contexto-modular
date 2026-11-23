# WO 0205 — a wo0204 conferida e o merge do My Little Lady (so doc)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — sem `src/`, sem build. Sem corte de versao (v1.162.0).
> **Config sugerida:** modelo padrao, esforco baixo.
> **Pre-requisito:** HEAD = `894be99`, `main` = `origin/main`.
> **Base:** o pedido do dono de 23/11 (01h43): «verifique o My Little Lady, leia a carta dele, um dos merge teve problema»; a carta `261123-my-little-lady-para-kcm-01-merge-parado.md` (pasta-pai deles; copia em `../notas-arquivadas/`).
> **Ancoras lidas em:** HEAD `894be99` («feat(kit): o radio nao tocado nasce sem marca e o perfil do pacote diz nao escolhido; C135 (wo0204, D-201, v1.162.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-23; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261121-1429` (apply wo0204) lido inteiro.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

O STATUS recebe o hash da wo0204 (com a leitura do diff cortada em 600 caracteres, que o relatorio declarou) e o bullet desta WO; o IDEAS ganha a `i-N108` (o merge do My Little Lady parou no perfil: o chat gerou os narrativos sem ler o projeto; o pacote regerado; a sugestao do terminal «ambos»); o log de 23/11 nasce.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N108` nova | 3 / 0 | lf | `cb2e78d9e73ed0e751b56282451a44ca97d63e0e` |
| `meta/STATUS.md` | hash da wo0204; bullet desta WO | 3 / 1 | lf | `bdbf75ca09ba2616dd343cbdabf2b24f54d9d744` |
| `logs/2026-11-23.md` | novo (9 linhas) | 9 / 0 | lf | `b5a9c8c1208c166e8e058dfbeabf3eee0d1bcbaa` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `894be99`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? logs/2026-11-23.md` e `?? meta/workorders/261123-wo0205-merge-do-my-little-lady.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario; `git diff --numstat` dos dois rastreados = a coluna + / − (6 acrescentadas, 1 removida); `wc -l logs/2026-11-23.md` = 9. Diferente: PARE.
4. Leia o diff inteiro e o log novo inteiro, **sem cortar linha** (as do IDEAS e do STATUS passam de 1.000 caracteres: leia com `git diff --word-diff` ou abra o arquivo, nao corte em largura fixa).
5. `git add` dos tres e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-23.md meta/workorders/261123-wo0205-merge-do-my-little-lady.md
```

```
git commit -m "docs: a wo0204 conferida e o merge do My Little Lady (o pacote regerado na v1.162.0); i-N108 (wo0205)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga como leu as linhas longas. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0205.txt` (`date +%y%m%d-%H%M`, rodado na hora).
