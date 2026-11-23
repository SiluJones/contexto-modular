# WO 0206 — a wo0205 conferida, o I will die conferido e o pacote do My mother regerado (so doc)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — sem `src/`, sem build. Sem corte de versao (v1.162.0).
> **Config sugerida:** modelo padrao, esforco baixo.
> **Pre-requisito:** HEAD = `b28187b`, `main` = `origin/main`.
> **Base:** o pedido do dono de 23/11 (02h02): «leia o I will die, ele ja esta com o merge ocorrendo, veja o que pode fazer e corrigir; leia o My mother, eu ainda nao iniciei, gere o pacote dele de novo».
> **Ancoras lidas em:** HEAD `b28187b` («docs: a wo0204 conferida e o merge do My Little Lady (o pacote regerado na v1.162.0); i-N108 (wo0205)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-23; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261123-0201` (apply wo0205) lido inteiro.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

O STATUS recebe o hash da wo0205 e o bullet desta WO; o IDEAS ganha a `i-N109` (o merge do I will die conferido: as secoes citadas que nunca nasceram, a pendencia do painel que saiu do STATUS deles), a `i-N108` registra o I will die e o My mother, e o livro de leitura avanca o I will die; o log de 23/11 ganha a segunda metade.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N109` nova; `i-N108`; o livro de leitura | 5 / 2 | lf | `2448d199d0c293f18f938cadc1d374fdddcb1f6a` |
| `meta/STATUS.md` | hash da wo0205; bullet desta WO | 3 / 1 | lf | `97e3ae153bbe7059fa40dc130be6c8747c4beef7` |
| `logs/2026-11-23.md` | a segunda metade do dia | 4 / 0 | lf | `bf1232a4d990ac641e274c2141f6e3c83eb370be` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `b28187b`. Diferente: PARE.
2. `git status --short` = exatamente ` M logs/2026-11-23.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json` e `?? meta/workorders/261123-wo0206-i-will-die-conferido-e-my-mother-regerado.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario; `git diff --numstat` = a coluna + / − (12 acrescentadas, 3 removidas). Diferente: PARE.
4. Leia o diff inteiro, **sem cortar linha** (`git diff --word-diff -U0`, como na wo0205).
5. `git add` dos tres e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-23.md meta/workorders/261123-wo0206-i-will-die-conferido-e-my-mother-regerado.md
```

```
git commit -m "docs: a wo0205 conferida, o merge do I will die conferido e o pacote do My mother regerado; i-N109 (wo0206)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga como leu as linhas longas. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0206.txt` (`date +%y%m%d-%H%M`, rodado na hora).
