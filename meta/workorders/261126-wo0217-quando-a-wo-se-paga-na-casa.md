# WO 0217 — quando a WO se paga: a casa no fluxo novo (D-209; sem corte de versao, v1.167.0)

> **Por que WO (D-209):** a regra que tira a WO de doc da casa tem de estar escrita antes de valer — esta e a ultima WO so de doc. As proximas mudancas so de doc vao pelo bloco de git do chat.
> **Forma:** conferencia (metodo C, D-170, D-174, D-209) · **Tipo:** so doc (CEREBRO, Instrucoes, CLAUDE.md, STATUS, DECISIONS, IDEAS, o log de 26/11, a analise nova). Sem `src/`, sem versao nova.
> **Config sugerida:** modelo padrao, esforco baixo.
> **Pre-requisito:** HEAD = `e34beea`, `main` = `origin/main`; harness em 19/19 · 142/142 · 0 erros, v1.167.0.
> **Ancoras lidas em:** HEAD `e34beea` («docs: a wo0215 conferida e o fecho da conversa KCM 32 (wo0216)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-26; `git status --short` de partida: `?? .claude/launch.json` e `?? meta/analises/261126-ANALISE-quando-a-wo-se-paga.md`. Relatorio `261126-1820` (apply wo0216) lido inteiro e movido.
> **Verificado pelo chat:** o harness le CLAUDE.md, CEREBRO e STATUS da casa; rodado numa replica do HEAD com os oito arquivos por cima: `node build.js` + `node validate.js index.html` = 19/19 · 142/142 · 0 erros. O `index.html` nao muda.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

O dono decidiu a analise `261126-ANALISE-quando-a-wo-se-paga.md` (C1, K1, o teste de quatro itens, o alarme no STATUS; `D-209`). A casa passa a versionar mudanca so de doc pelo bloco de git do chat; a WO fica para codigo, git arriscado, lote grande ou `.claude/`, com o motivo na primeira linha. O CEREBRO, as Instrucoes e o CLAUDE.md dizem isso; o STATUS ganha o alarme no cabecalho e o hash da wo0216; o IDEAS fecha a `i-N105` e tira a tabela da `i-N71`. **O dono recola o `INSTRUCOES-DO-PROJETO.md` no painel depois do push.**

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/CEREBRO.md` | «Metodo C»: o teste, o bloco, o alarme, a variante do kit | 6 / 5 | crlf | `431aabd63be200303cb5f9eccb35b0d402a6ed59` |
| `INSTRUCOES-DO-PROJETO.md` | a WO so quando se paga; o commit pelo bloco | 3 / 3 | lf | `40e512d05345d6798cdee870afc528783495d7ad` |
| `CLAUDE.md` | o paragrafo do metodo C | 1 / 1 | crlf | `80993cef3ee5b7b8f86a521e2849770a2246f197` |
| `meta/STATUS.md` | o alarme; o hash da wo0216; o bullet desta WO | 4 / 1 | lf | `8c03ac8fdf5dd7ff6a88ec045b2594aa3fc1370d` |
| `meta/DECISIONS.md` | `D-209` | 12 / 0 | crlf | `18930ebf09f0815abab112e02d699c35a410f29a` |
| `meta/IDEAS.md` | `i-N105` decidida, o pixel art medido; `i-N71` sem a tabela | 3 / 2 | lf | `48ca3eaf7d30ed7390127551c8a718882cfc9993` |
| `logs/2026-11-26.md` | a secao da KCM 33 | 7 / 0 | lf | `7f995044e06308dea6f6b1798a7401f9c71d29e7` |
| `meta/analises/261126-ANALISE-quando-a-wo-se-paga.md` | nova (99 linhas, `wc -l`) | 99 / 0 | lf | `94ae7104780cd5f318fb284bb678af158e66169a` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `e34beea`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json`, `?? meta/analises/261126-ANALISE-quando-a-wo-se-paga.md` e `?? meta/workorders/261126-wo0217-quando-a-wo-se-paga-na-casa.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario; `git diff --numstat` dos sete rastreados = a coluna + / − (36 acrescentadas, 12 removidas); `wc -l` da analise = 99. Diferente: PARE. O fim de linha confere-se por `git ls-files --eol`, nao por `grep`.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0`), e a analise nova inteira.
5. `git add` dos caminhos do inventario e desta WO, copiados do `git status --short`; `git diff --cached --stat` com os nove caminhos (confira um a um contra o inventario antes do commit); commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/CEREBRO.md INSTRUCOES-DO-PROJETO.md CLAUDE.md meta/STATUS.md meta/DECISIONS.md meta/IDEAS.md logs/2026-11-26.md meta/analises/261126-ANALISE-quando-a-wo-se-paga.md meta/workorders/261126-wo0217-quando-a-wo-se-paga-na-casa.md
git commit -m "docs(meta): quando a WO se paga - na casa a WO so de doc vira o bloco do chat; a analise e o alarme no STATUS (wo0217, D-209)"
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite doc nenhum. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0217.txt` (`date +%y%m%d-%H%M`, rodado na hora).
