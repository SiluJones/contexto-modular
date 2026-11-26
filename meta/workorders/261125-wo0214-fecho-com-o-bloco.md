# WO 0214 — o fecho da casa: a linha /apply-wo num bloco de codigo so dela, e o esqueleto copiado (sem corte de versao, v1.166.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** so doc (as Instrucoes da casa, o CEREBRO da casa, os registros). Sem `src/`, sem versao nova (`D-207`).
> **Config sugerida:** modelo padrao, esforco baixo.
> **Pre-requisito:** HEAD = `4413bb8`, `main` = `origin/main`; harness em 19/19 · 141/141 · 0 erros, v1.166.0.
> **Base:** a nota do dono `261125-2120`, lida inteira e movida para `../notas-arquivadas/`.
> **Ancoras lidas em:** HEAD `4413bb8` («feat(kit): as sobras do update - ... C140 (wo0213, D-206, v1.166.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-25; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261125-2131` (apply wo0213) lido inteiro e movido.
> **Verificado pelo chat:** replica do HEAD com os seis arquivos por cima: `node build.js` = 1.077.506 bytes, sha1 sem CR `655110990467b68ef47f206d5e79abe5c48ef1c2` (igual ao do HEAD: nada de `src/` mudou); harness 19/19 · 141/141 (`C139` le as Instrucoes da casa: verde).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

O fecho da wo0213 saiu com a linha `/apply-wo` fora de um bloco de codigo e sem o «Peca no proximo turno». A causa foi o chat reconstituir o bloco de memoria. As Instrucoes da casa (lidas em toda mensagem) passam a dizer «num bloco de codigo so dela», nomeiam o «Peca no proximo turno» e mandam copiar o esqueleto do CEREBRO; a linha «Acao» do esqueleto diz o mesmo do bloco. O kit fica para a `i-N112`. Registro: STATUS (o hash da wo0213 e esta WO), DECISIONS (`D-207`), IDEAS (`i-N112`) e o log de 25/11. **Depois do commit, o dono recola o `INSTRUCOES-DO-PROJETO.md` no painel** (7.727 caracteres).

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `INSTRUCOES-DO-PROJETO.md` | a linha da WO e a do fecho | 2 / 2 | lf | `1031b9d05895136c8d467e8a0d677e4d8f3fa404` |
| `meta/CEREBRO.md` | a linha «Acao» do esqueleto | 1 / 1 | crlf | `68fce848bc58bcf29adcebaa8f648f44daf44a23` |
| `meta/DECISIONS.md` | `D-207` | 8 / 0 | crlf | `9e77350d7e7747f0ed891e480ecfed4d6f85e7f4` |
| `meta/IDEAS.md` | `i-N112` | 3 / 0 | lf | `960002aca3370055998bf73fcf93bdbedc4d32a4` |
| `meta/STATUS.md` | hash da wo0213; bullet desta WO | 3 / 1 | lf | `332df01ccb6ab08dd7929ed68375675e306f64e8` |
| `logs/2026-11-25.md` | a wo0213 conferida e esta WO | 2 / 0 | lf | `3d21d9a507fd03e8d22818df75bc93e375e6d20d` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `4413bb8`. Diferente: PARE.
2. `git status --short` = exatamente os seis ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261125-wo0214-fecho-com-o-bloco.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos seis = os do inventario, e `git diff --numstat` = a coluna + / − (19 acrescentadas, 4 removidas). Diferente: PARE.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0`).
5. `git add` dos caminhos do inventario e desta WO; `git diff --cached --stat` com os sete caminhos; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add INSTRUCOES-DO-PROJETO.md meta/CEREBRO.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-25.md meta/workorders/261125-wo0214-fecho-com-o-bloco.md
git commit -m "docs(meta): o fecho da casa - a linha /apply-wo num bloco de codigo so dela e o esqueleto copiado (wo0214, D-207)"
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS, as Instrucoes nem o log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0214.txt` (`date +%y%m%d-%H%M`, rodado na hora).
