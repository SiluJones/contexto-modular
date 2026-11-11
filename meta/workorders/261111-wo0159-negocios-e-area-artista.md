# WO 0159 — a wo0158 no STATUS, a carta 01 do Negocios e Licitacoes (i-N88) e a area Artista (i-N89)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `aab2caf`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.135.0.
> **Base:** o pedido do dono em 2026-11-11 («Leia o 261109-HANDOFF-BRIEF.md na pasta-pai e confira a wo0158; a proxima area e a que voce recomendar»).
> **Ancoras lidas em:** HEAD `aab2caf` («docs(meta): fecho da conversa KCM 24 - o mapa dos projetos, o metodo C na casa e as pendencias no STATUS (wo0158)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-11; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261109-2027` (apply wo0158) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 942.495 bytes (igual ao HEAD); os quatro checks que leem a casa (`C43`, `C54`, `C102`, `C103`) verdes. O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Primeira WO da conversa KCM 25. Publica o hash e o custo da wo0158 no STATUS e o bullet desta WO; no IDEAS, a carta 01 do Negocios e Licitacoes (o primeiro projeto real do `business`: dois defeitos medidos no `src/`, `i-N88`, e a `i-N61` atualizada) e a quinta area do mapa, Artista (`i-N89`), com duas linhas e uma entrada no livro de leitura; e o log de 11/11, novo. O mapa da pasta-pai muda fora do repo.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Os tres sao **LF**.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/STATUS.md` | o hash e o custo da wo0158; o bullet desta WO, com oito pendencias | 3 / 1 | `17215aa59b6b43b6ae4573f3d42f2fa33dc19acc` |
| `meta/IDEAS.md` | `i-N89` e `i-N88` novas; o titulo da `i-N61`; duas linhas e uma entrada no livro de leitura | 16 / 1 | `98fffd559362c04949142612c8e219cebeda0043` |
| `logs/2026-11-11.md` | novo (nao rastreado): o log da conversa | 14 linhas (`wc -l`) | `80f8040dcdd95b15e29481043b502bef58bb78cf` |

Gerado por quem aplica: nada. Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `aab2caf`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? logs/2026-11-11.md`, `?? meta/workorders/261111-wo0159-negocios-e-area-artista.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/STATUS.md meta/IDEAS.md logs/2026-11-11.md` = os do inventario; `git diff --numstat` = a coluna + / − dos dois rastreados; `wc -l logs/2026-11-11.md` = 14. Diferente: PARE.
4. Leia o diff inteiro e o log novo (19 linhas acrescentadas nos rastreados, mais as 14 do log).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre crua a linha do `C102`. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/STATUS.md meta/IDEAS.md logs/2026-11-11.md meta/workorders/261111-wo0159-negocios-e-area-artista.md
```

```
git commit -m "docs(meta): a carta 01 do Negocios e Licitacoes e a area Artista no livro de leitura - i-N88 e i-N89 (wo0159)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0159.txt` (`date +%y%m%d-%H%M`, rodado na hora).
