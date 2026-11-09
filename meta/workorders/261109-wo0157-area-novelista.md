# WO 0157 — a area Novelista no livro de leitura e a i-N87

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `01c1a19`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.135.0.
> **Base:** o pedido do dono em 2026-11-09 («Confira a wo0156 e leia Novelista»).
> **Ancoras lidas em:** HEAD `01c1a19` («docs(meta): a area Game Design no livro de leitura e a i-N86, e a carta 05 ao GameDataHub registrada (wo0156)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-09; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261109-1557` (apply wo0156) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 942.495 bytes (igual ao HEAD: nada em `src/`); os 69 checks `C*` verdes. O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A quarta area do mapa, **Novelista** (`C:\Users\alexk\Novelista`), nos tres projetos que o dono apontou: duas convergencias com outras areas (o modo incubadora, que o aevum ja pedia no `game`; o gatilho da sessao de concepcao) -> `i-N87` e uma linha no livro. O STATUS registra a wo0156.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Os tres sao **LF**.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/STATUS.md` | o hash e o custo da wo0156; o bullet desta WO, com sete pendencias | 3 / 1 | `0fc1763b10aa57124ada33b17af8b63cbac05b92` |
| `meta/IDEAS.md` | `i-N87` nova; uma linha no livro e um bullet na entrada de 08/11 | 6 / 0 | `f7ed083e61d9c22092b3243f8a442c550bc60c68` |
| `logs/2026-11-09.md` | a continuacao da conversa | 11 / 0 | `b705596a8afafa21b365ea83db0bc0b776b6c3cb` |

Gerado por quem aplica: nada (sem `src/`, sem build).
Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `01c1a19`. Diferente: PARE.
2. `git status --short` = exatamente ` M logs/2026-11-09.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? meta/workorders/261109-wo0157-area-novelista.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/STATUS.md meta/IDEAS.md logs/2026-11-09.md` = os do inventario; `git diff --numstat` = a coluna + / −. Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro (sao 20 linhas acrescentadas).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre crua a linha do `C102` (ele le a prosa do STATUS). Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/STATUS.md meta/IDEAS.md logs/2026-11-09.md meta/workorders/261109-wo0157-area-novelista.md
```

```
git commit -m "docs(meta): a area Novelista no livro de leitura e a i-N87 - o modo incubadora e a sessao de concepcao (wo0157)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0157.txt` (`date +%y%m%d-%H%M`, rodado na hora).
