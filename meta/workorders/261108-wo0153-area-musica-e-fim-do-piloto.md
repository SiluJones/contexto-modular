# WO 0153 — a area Musica no livro de leitura e a i-N84; o piloto do metodo C chega a 10/10

> **Forma:** conferencia (metodo C, piloto 10/10, D-170) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `b4423e6`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.135.0.
> **Base:** o pedido do dono em 2026-11-08 («Confira a wo0152; a proxima area e Musica e Churrascaria»).
> **Ancoras lidas em:** HEAD `b4423e6` («docs(meta): livro de leitura de 08/11 - a Carreira e a area Historiador, a i-N61 atualizada e a ideia do Custom na i11 (wo0152, piloto 9/10 do metodo C)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-08; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261108-1114` (apply wo0152) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 942.495 bytes (igual ao HEAD: nada em `src/`); os quatro checks que leem a casa (`C54`, `C102`, `C103`, `C43`) verdes. O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

> Metodo C (D-170): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A segunda area do mapa dos projetos do dono, **Musica** (`C:\Users\alexk\Music`): quatro projetos, nenhum com git, e so o Album-Referencias e do `music` (os outros sao dois companion e a primeira sessao do `cuisine`). A leitura vira a `i-N84`, com um defeito do kit medido no `src/` (a linha «Inicio de turno» da tabela de gatilhos cita `CONTEXT.md` em todo nicho), e quatro linhas no livro de leitura. A linha da wo0152 na `i-N71`. **Com esta WO o piloto do metodo C chega a 10/10**; o proximo passo da casa e a analise do resultado. O mapa (`../MAPA-DE-PROJETOS.md`) segue fora do repo.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Os tres sao **LF**.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/STATUS.md` | o hash e o custo da wo0152; o bullet desta WO, com oito pendencias | 3 / 1 | `25ae44c666effe520ae411c31fff24f57ede66ca` |
| `meta/IDEAS.md` | `i-N84` nova; a linha da wo0152 na `i-N71`; quatro linhas no livro e um bullet na entrada de 08/11 | 10 / 0 | `0637b5cb0a73e170e9d739f54c21957550055863` |
| `logs/2026-11-08.md` | a continuacao da Conversa 1 | 11 / 0 | `41574f876db7d73c8d55887f431479cb4eb54bb5` |

Gerado por quem aplica: nada (sem `src/`, sem build).
Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `b4423e6`. Diferente: PARE.
2. `git status --short` = exatamente ` M logs/2026-11-08.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? meta/workorders/261108-wo0153-area-musica-e-fim-do-piloto.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/STATUS.md meta/IDEAS.md logs/2026-11-08.md` = os do inventario; `git diff --numstat` = a coluna + / −. Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro (sao 24 linhas acrescentadas).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre crua a linha do `C102` (ele le a prosa do STATUS). Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/STATUS.md meta/IDEAS.md logs/2026-11-08.md meta/workorders/261108-wo0153-area-musica-e-fim-do-piloto.md
```

```
git commit -m "docs(meta): a area Musica no livro de leitura e a i-N84 - a tabela de gatilhos cita CONTEXT.md em todo nicho (wo0153, piloto 10/10 do metodo C)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0153.txt` (`date +%y%m%d-%H%M`, rodado na hora).
