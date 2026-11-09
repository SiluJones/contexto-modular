# WO 0155 — a casa fica no metodo C (D-174): a secao do CEREBRO sem «piloto», as Instrucoes, a analise decidida

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `f8d0df2`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.135.0.
> **Base:** as decisoes do dono em 2026-11-09 sobre a analise 261109 («1 ok, 2 espera mais dados, 3 pode fazer como recomendar»).
> **Ancoras lidas em:** HEAD `f8d0df2` («docs(meta): analise do fim do piloto do metodo C, o Observatorio no livro de leitura e a i-N85 (wo0154)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-09; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261109-1035` (apply wo0154) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima: `node build.js` = 942.495 bytes (igual ao HEAD); os 69 checks `C*` verdes (entre eles o `C43`, que compara o instalado da casa com o gerado, e o `C102`). O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum. **Depois do push, o dono recola o `INSTRUCOES-DO-PROJETO.md` no painel do Projeto.**

> Metodo C: o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O dono decidiu a analise do fim do piloto: a casa fica no metodo C (A1); a variante do kit espera mais dados (M2b: a Carreira com dez WOs e o GameDataHub); o achado do recuo vai ao Observatorio por carta do KCM (gravada na pasta-pai dele, fora deste repo). `D-174` emenda a `D-170`; a secao do CEREBRO e a linha das Instrucoes deixam de dizer «piloto».

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. **`meta/CEREBRO.md` e `meta/DECISIONS.md` sao CRLF na arvore** (`i/lf w/crlf`; o aviso do git e esperado); os outros cinco sao LF.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/CEREBRO.md` | a secao «Metodo C» vira a forma da casa: titulo, abertura, reserva, pausa (voltar atras e decisao escrita) e a variante do kit esperando | 5 / 5 | `3584f85806a5510afe4b2513d75489dbcfacdef0` |
| `meta/DECISIONS.md` | `D-174` no fim | 8 / 0 | `46b89b18b47bc530c4a12b6f78df05b48e625280` |
| `INSTRUCOES-DO-PROJETO.md` | «Piloto do metodo C (D-170, wo0144 a wo0153 …)» → «Metodo C (D-170, D-174 …)» | 1 / 1 | `7d78e63441135901d575c7ab63242505f4ae4923` |
| `meta/analises/261109-ANALISE-fim-do-piloto-do-metodo-c.md` | Status «Decidida» e a `D-174` no cabecalho | 2 / 2 | `28123c386e7c4332b56a2d63faf869dad51361a1` |
| `meta/IDEAS.md` | o titulo da `i-N71` (decidida) | 1 / 1 | `06922ba6fa178e4e7ae1d5a4250a64cb5730b024` |
| `meta/STATUS.md` | o hash e o custo da wo0154; o bullet desta WO | 3 / 1 | `56929f7f4898f7557567a895d7d9876e710b7537` |
| `logs/2026-11-09.md` | a continuacao da conversa | 9 / 0 | `5c5b3a208f4309295d4d45ab5096ce8817e76b1b` |

Gerado por quem aplica: nada. Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md` e a carta `C:\Users\alexk\Trabalho\Observatorio\261109-kcm-para-observatorio-01-o-recuo-do-metodo-c.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `f8d0df2`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261109-wo0155-a-casa-fica-no-metodo-c.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario (os dois CRLF medidos como estao na arvore); `git diff --numstat` = a coluna + / −. Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro (29 linhas acrescentadas, 10 removidas).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre crua a linha do `C43` e a do `C102`. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`. Confira com `git ls-files --eol meta/CEREBRO.md meta/DECISIONS.md` que a arvore segue `w/crlf`.

## Commit

```
git add meta/CEREBRO.md meta/DECISIONS.md INSTRUCOES-DO-PROJETO.md meta/analises/261109-ANALISE-fim-do-piloto-do-metodo-c.md meta/IDEAS.md meta/STATUS.md logs/2026-11-09.md meta/workorders/261109-wo0155-a-casa-fica-no-metodo-c.md
```

```
git commit -m "docs(meta): a casa fica no metodo C e a variante do kit espera mais dados (wo0155, D-174)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0155.txt` (`date +%y%m%d-%H%M`, rodado na hora).
