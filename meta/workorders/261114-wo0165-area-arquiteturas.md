# WO 0165 — a wo0164 no STATUS e a area Arquiteturas no livro de leitura (i-N91)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `9b32efc`, `main` = `origin/main`; harness em 19/19 · 118/118 · 0 erros, v1.139.0.
> **Base:** o pedido do dono em 2026-11-14 («siga com a area Arquiteturas»).
> **Ancoras lidas em:** HEAD `9b32efc` («feat(kit): a incubadora no narrative e no game e o escopo que vence a entrega - C117 (wo0164, D-177, v1.139.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-14; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261114-1017` (apply wo0164) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 951.343 bytes (igual ao HEAD); os quatro checks que leem a casa (`C43`, `C54`, `C102`, `C103`) verdes. O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Publica o hash e o custo da wo0164 no STATUS e o bullet desta WO; no IDEAS, a `i-N91` (a area Arquiteturas: o CDC e o ClearDrop lidos pela primeira vez, tres defeitos do kit com lastro, o feedback ao ASU que nunca chegou a ele), duas linhas e uma entrada no livro de leitura; e a continuacao do log de 14/11. O mapa da pasta-pai muda fora do repo.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Os tres sao **LF**.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/STATUS.md` | o hash e o custo da wo0164; o bullet desta WO, com dez pendencias | 3 / 1 | `3823a9f6504eaa803151daf028fb7cedfa1ec036` |
| `meta/IDEAS.md` | `i-N91`; duas linhas e uma entrada no livro de leitura | 10 / 0 | `2cb2f11f2102d6ea157e55df2f350dc5adb05e8c` |
| `logs/2026-11-14.md` | a continuacao da conversa | 11 / 0 | `5b9b6e551494f179628cd6e41e35193110069ffb` |

Gerado por quem aplica: nada. Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `9b32efc`. Diferente: PARE.
2. `git status --short` = exatamente ` M logs/2026-11-14.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? meta/workorders/261114-wo0165-area-arquiteturas.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/STATUS.md meta/IDEAS.md logs/2026-11-14.md` = os do inventario, e `git diff --numstat` = a coluna + / −. Diferente: PARE.
4. Leia o diff inteiro (24 linhas acrescentadas).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **118/118**. Registre crua a linha do `C102`. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/STATUS.md meta/IDEAS.md logs/2026-11-14.md meta/workorders/261114-wo0165-area-arquiteturas.md
```

```
git commit -m "docs(meta): a area Arquiteturas no livro de leitura e a i-N91 - o CDC e o ClearDrop lidos pela primeira vez (wo0165)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0165.txt` (`date +%y%m%d-%H%M`, rodado na hora).
