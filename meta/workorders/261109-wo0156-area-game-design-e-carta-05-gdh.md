# WO 0156 — a area Game Design no livro de leitura e a i-N86; a carta 05 ao GameDataHub

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `7ee21bd`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.135.0.
> **Base:** o pedido do dono em 2026-11-09 («A proxima area e a que vc recomendar; e sobre o GDH, mande uma carta para ele»).
> **Ancoras lidas em:** HEAD `7ee21bd` («docs(meta): a casa fica no metodo C e a variante do kit espera mais dados (wo0155, D-174)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-09; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261109-1539` (apply wo0155) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 942.495 bytes (igual ao HEAD: nada em `src/`); os 69 checks `C*` verdes. O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A terceira area do mapa dos projetos do dono, **Game Design** (`C:\Users\alexk\Game Design`), escolhida pelo chat a pedido do dono: quinze projetos parados desde julho, e tres secoes de feedback que o kit nunca leu (Anima, aevum, Hey Mother) -> `i-N86` e uma linha no livro. E a **carta 05 ao GameDataHub**, pedida pelo dono, gravada na pasta-pai dele (fora deste repo): o metodo C a partir do que eles ja tem. O STATUS registra a wo0155 e as Instrucoes recoladas.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Os tres sao **LF**.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/STATUS.md` | o hash e o custo da wo0155; o bullet desta WO, com sete pendencias | 3 / 1 | `40d40652bfc9b8a2d2b6beddbf634346dcc8ebbb` |
| `meta/IDEAS.md` | `i-N86` nova; uma linha no livro e um bullet na entrada de 08/11 | 6 / 0 | `2a17f891020ffdca4b1e3dbb286cf2410a27e402` |
| `logs/2026-11-09.md` | a continuacao da conversa | 11 / 0 | `289fb51edf0ef66396b99233b1816373e2afea05` |

Gerado por quem aplica: nada (sem `src/`, sem build).
Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md` e a carta `C:\Users\alexk\Creator\Coletor\Game Data Hub\261109-kcm-para-gamedatahub-05-metodo-c.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `7ee21bd`. Diferente: PARE.
2. `git status --short` = exatamente ` M logs/2026-11-09.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? meta/workorders/261109-wo0156-area-game-design-e-carta-05-gdh.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/STATUS.md meta/IDEAS.md logs/2026-11-09.md` = os do inventario; `git diff --numstat` = a coluna + / −. Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro (sao 20 linhas acrescentadas).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre crua a linha do `C102` (ele le a prosa do STATUS). Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/STATUS.md meta/IDEAS.md logs/2026-11-09.md meta/workorders/261109-wo0156-area-game-design-e-carta-05-gdh.md
```

```
git commit -m "docs(meta): a area Game Design no livro de leitura e a i-N86, e a carta 05 ao GameDataHub registrada (wo0156)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0156.txt` (`date +%y%m%d-%H%M`, rodado na hora).
