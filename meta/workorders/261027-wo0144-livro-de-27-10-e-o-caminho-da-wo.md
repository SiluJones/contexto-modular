# WO 0144 — o livro de leitura de 27/10 (a `i-N74`) e o caminho da WO na skill `apply-wo`

> **Forma:** conferencia (metodo C, piloto 1/10, D-170) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `90c8906`, `main` = `origin/main`; harness em 19/19 · 113/113 · 0 erros, v1.132.0.
> **Base:** o pedido do dono em 2026-10-27 («confira e escreva a wo0144»); a primeira WO do piloto (`D-170`), so de documentacao, como a ordem do piloto manda.
> **Ancoras lidas em:** HEAD `90c8906` («docs(meta): fecha a wo0143 no STATUS e no log do dia»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-10-27; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorios `261026-0930` (apply) e `261026-0936` (wrap) da wo0143 lidos inteiros e movidos para `../notas-arquivadas/`.
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

> Metodo C (D-170): o chat JA GRAVOU tudo na arvore e ja rodou o harness numa replica do HEAD com os arquivos dele por cima. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Duas coisas pequenas, as duas so de documentacao. (1) O **livro de leitura de 27/10**: o Mapoteca registrou dois pares contraditorios novos no pacote (`FK-BE`, a tabela de gatilhos que manda entregar documento «completo» contra o canal de cada documento; `FK-BF`, a linha «Inicio de turno» que manda ler os quatro arquivos «todo turno» contra o ritual em dois tempos), e o GameDataHub sugeriu o manifesto dizer, por arquivo, «mudou desde a vX». O chat conferiu os dois pares no `src/` da v1.132.0: continuam. Viram a `i-N74`, aberta para a proxima analise de kit. (2) **O caminho dobrado:** a skill `apply-wo` da casa montava `meta/workorders/$ARGUMENTS`, e a linha que o chat entrega ja traz o prefixo — o relatorio da wo0143 achou `meta/workorders/meta/workorders/` outra vez. A skill passa a ler o argumento como vem, a forma que o kit ja gera.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat (arquivo novo: `+N / 0` pelo `wc -l`); `sha1sum` do arquivo da arvore. Os quatro sao **LF** na arvore (`git ls-files --eol`; o log e novo).

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/IDEAS.md` | livro de leitura (tres linhas da tabela; a entrada de 27/10); a `i-N74`, acima da `i-N73` | 15 / 3 | `f951e3f8dbd03b833943857b479445fd1292bdf2` |
| `.claude/skills/apply-wo/SKILL.md` | o primeiro paragrafo le o caminho da WO como ele vem | 2 / 2 | `35c79d35a7d2eeaecd8ee5d6db55f50cd385eb61` |
| `meta/STATUS.md` | o bullet desta WO na «Ultima sessao»; o «Pendente do dono» da wo0143 marcado como feito | 3 / 1 | `fa304a179e70a7b7e569c984e8f85cd367466904` |
| `logs/2026-10-27.md` (novo) | Conversa 1 do chat: a conferencia de volta da wo0143, o livro, esta WO | 14 / 0 | `16d148d9f51446c84bc1b5792187f55077ed03a9` |

Gerado por quem aplica: nada (sem `src/`, sem build).
Nao rastreados que ficam fora: `.claude/launch.json`.

**A skill `apply-wo` que voce esta usando e uma das que esta WO muda:** a versao na arvore ja e a nova. Se a leitura do caminho falhar por causa dela, PARE e relate — e o primeiro dado do piloto.

## Passos

1. `git pull --ff-only`; HEAD = `90c8906`. Diferente: PARE.
2. `git status --short` = exatamente ` M .claude/skills/apply-wo/SKILL.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? logs/2026-10-27.md`, `?? meta/workorders/261027-wo0144-livro-de-27-10-e-o-caminho-da-wo.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/IDEAS.md .claude/skills/apply-wo/SKILL.md meta/STATUS.md logs/2026-10-27.md` = os do inventario, e `git diff --numstat` = a coluna + / − (o log, `wc -l` = 14). Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro (e o log novo).
5. Sem build: nada em `src/`.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **113/113**. Registre crua a linha do `C102` (o `C102` e o `C103` leem a prosa do STATUS e do IDEAS). Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando.

## Commit

```
git add meta/IDEAS.md .claude/skills/apply-wo/SKILL.md meta/STATUS.md logs/2026-10-27.md meta/workorders/261027-wo0144-livro-de-27-10-e-o-caminho-da-wo.md
```

```
git commit -m "docs(meta): livro de leitura de 27/10 e o caminho da WO na skill apply-wo (wo0144, piloto 1/10 do metodo C)" -m "FK-BE e FK-BF do Mapoteca e o manifesto mudou desde a vX do GameDataHub viram a i-N74, aberta para a proxima analise de kit. A skill apply-wo le o caminho da WO como vem. Primeira WO de conferencia: o chat gravou, o Code conferiu e publicou. Sem corte de versao."
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes», com os dois acrescimos da forma «conferencia»: o que voce viu no diff que esta WO nao diz, e se o fim de linha de cada arquivo continuou o que era (`git ls-files --eol`). **E um dado novo, so do piloto:** quanto tempo e quantos comandos a conferencia levou, de ponta a ponta — e a base para comparar com as WOs na forma «edicoes». Nao edite STATUS, DECISIONS nem log: no piloto eles sao do chat. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0144.txt` (`date +%y%m%d-%H%M`, rodado na hora).
