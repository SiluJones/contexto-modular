# WO 0152 — livro de leitura de 08/11: a Carreira e a area Historiador, a i-N61 atualizada, a ideia do Custom na i11

> **Forma:** conferencia (metodo C, piloto 9/10, D-170) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `5282050`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.135.0.
> **Base:** o pedido do dono em 2026-11-08 («Monte o mapa e a wo0152; a primeira area e Historiador»).
> **Ancoras lidas em:** HEAD `5282050` («docs(meta): fecho da conversa KCM 23 - a wo0150 na medida do piloto, as pendencias no STATUS e o log (wo0151, piloto 8/10 do metodo C)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-08; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261105-1726` (apply wo0151) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 942.495 bytes (igual ao HEAD: nada em `src/`); os quatro checks que leem a casa (`C54`, `C102`, `C103`, `C43`) verdes. O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

> Metodo C (D-170): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O dono pediu um mapa dos projetos dele, lido uma area por conversa. A primeira passada achou dois conjuntos fora do livro de leitura: a **Carreira** (nicho `career`, v1.135.0, feedback ao kit desde julho, `i-N82`) e a area **Historiador** (quatro narrativos parados desde agosto, `i-N83`). A `i-N61` dava o `career` como nunca rodado: atualizada. A nota `261108-1016` do dono (o Custom com arquivo de preset reimportavel e um guia para o chat compor o nicho) entra na `i11`. E a linha da wo0151 na `i-N71`. O mapa (`../MAPA-DE-PROJETOS.md`) fica na pasta-pai e nao e versionado: o repo e publico.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Os tres sao **LF**.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/STATUS.md` | o hash e o custo da wo0151; o bullet desta WO, com oito pendencias | 3 / 1 | `2cf42ddc0c02d24b3a3e400646ee7c50f05d8366` |
| `meta/IDEAS.md` | `i11` ampliada; `i-N61` com o titulo atualizado; `i-N82` e `i-N83` novas; a linha da wo0151 na `i-N71`; cinco linhas no livro e a entrada de 08/11 | 23 / 1 | `741c622e163225d3fd2b7c77e58607170a8318a9` |
| `logs/2026-11-08.md` | **novo** — a Conversa 1 da KCM 24 | 16 linhas (`wc -l`) | `878279b72c20e2c1bb18392e3338d6eeb4f138f6` |

Gerado por quem aplica: nada (sem `src/`, sem build).
Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `5282050`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? logs/2026-11-08.md`, `?? meta/workorders/261108-wo0152-livro-de-leitura-carreira-e-historiador.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/STATUS.md meta/IDEAS.md logs/2026-11-08.md` = os do inventario; `git diff --numstat` = a coluna + / − dos dois modificados; `wc -l logs/2026-11-08.md` = 16. Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro e o log novo (sao 26 linhas acrescentadas nos dois modificados, mais as 16 do log).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre crua a linha do `C102` (ele le a prosa do STATUS). Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/STATUS.md meta/IDEAS.md logs/2026-11-08.md meta/workorders/261108-wo0152-livro-de-leitura-carreira-e-historiador.md
```

```
git commit -m "docs(meta): livro de leitura de 08/11 - a Carreira e a area Historiador, a i-N61 atualizada e a ideia do Custom na i11 (wo0152, piloto 9/10 do metodo C)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0152.txt` (`date +%y%m%d-%H%M`, rodado na hora).
