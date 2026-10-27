# WO 0145 — a primeira linha da medida do piloto, e o custo da conferencia como coluna

> **Forma:** conferencia (metodo C, piloto 2/10, D-170) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `63fea0c`, `main` = `origin/main`; harness em 19/19 · 113/113 · 0 erros, v1.132.0.
> **Base:** o pedido do dono em 2026-10-27 («confira e escreva a wo0145»); a segunda WO do piloto (`D-170`), so de documentacao, como a ordem do piloto manda.
> **Ancoras lidas em:** HEAD `63fea0c` («docs(meta): livro de leitura de 27/10 e o caminho da WO na skill apply-wo (wo0144, piloto 1/10 do metodo C)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -4 --oneline` em 2026-10-27; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261027-1642` (apply wo0144) lido inteiro e movido para `../notas-arquivadas/`.
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

> Metodo C (D-170): o chat JA GRAVOU tudo na arvore e ja rodou o harness numa replica do HEAD com os arquivos dele por cima. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A wo0144 passou sem parada e o chat a conferiu de volta pelo inventario. O relatorio trouxe um dado que a medida do piloto nao tinha coluna para guardar — o custo da conferencia (4 chamadas de shell, 42 s ate o push) —, e ele so veio porque a WO pediu de improviso. Esta WO grava a primeira linha da tabela da `i-N71`, abre a coluna «Conferencia» e poe o pedido no molde de WO e na secao «Metodo C» do CEREBRO, para que toda conferencia daqui em diante o traga. E a primeira WO do piloto em que o chat grava arquivo **CRLF** na arvore (o molde e o CEREBRO).

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Fim de linha na arvore (`git ls-files --eol`): `meta/CEREBRO.md` e `meta/workorders/_TEMPLATE.md` **CRLF**; os outros tres LF.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/IDEAS.md` | `i-N71`: a coluna «Conferencia» e a linha da wo0144; uma frase na base | 4 / 3 | `1a63c97595ca062674c9ed57ca9fc078d5a6ce81` |
| `meta/workorders/_TEMPLATE.md` | forma «conferencia», «Relatorio»: o custo da conferencia como terceiro acrescimo | 1 / 1 | `3b92433c047d96a54f43f1d956430af28aa25264` |
| `meta/CEREBRO.md` | secao «Metodo C», item «Medida»: o custo da conferencia | 1 / 1 | `ea18a9ad308a6a20db16bc39244368abf1fd0a06` |
| `meta/STATUS.md` | o hash e o custo da wo0144 no bullet dela; o bullet desta WO | 3 / 1 | `59270887df78b0a56acbec59b89d0484b2170a01` |
| `logs/2026-10-27.md` | Conversa 2 do chat | 11 / 0 | `82f0e3445d114caaf5f9d6fd135b7038e6c76331` |

Gerado por quem aplica: nada (sem `src/`, sem build).
Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `63fea0c`. Diferente: PARE.
2. `git status --short` = exatamente ` M logs/2026-10-27.md`, ` M meta/CEREBRO.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, ` M meta/workorders/_TEMPLATE.md`, `?? .claude/launch.json`, `?? meta/workorders/261027-wo0145-o-custo-da-conferencia.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/IDEAS.md meta/workorders/_TEMPLATE.md meta/CEREBRO.md meta/STATUS.md logs/2026-10-27.md` = os do inventario, e `git diff --numstat` = a coluna + / −. Diferente: PARE — alguem mexeu depois do chat. **Um `git diff --numstat` que mostre o CEREBRO ou o molde com o arquivo inteiro trocado e fim de linha estragado: PARE** — e exatamente o que esta WO testa.
4. Leia o diff inteiro. `git ls-files --eol meta/CEREBRO.md meta/workorders/_TEMPLATE.md` = `w/crlf` nos dois.
5. Sem build: nada em `src/`.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **113/113**. Registre crua a linha do `C43` (esperado: 76 clausulas — o molde e o CEREBRO estao entre as superficies que ele compara). Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/workorders/_TEMPLATE.md meta/CEREBRO.md meta/STATUS.md logs/2026-10-27.md meta/workorders/261027-wo0145-o-custo-da-conferencia.md
```

```
git commit -m "docs(meta): a primeira linha da medida do piloto e o custo da conferencia como coluna (wo0145, piloto 2/10 do metodo C)" -m "A wo0144 entra na tabela da i-N71; o relatorio de conferencia passa a trazer chamadas de shell e segundos, no molde de WO e na secao Metodo C do CEREBRO. Primeira WO do piloto com arquivo CRLF gravado pelo chat. Sem corte de versao."
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Nao edite STATUS, DECISIONS nem log: no piloto eles sao do chat. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0145.txt` (`date +%y%m%d-%H%M`, rodado na hora).
