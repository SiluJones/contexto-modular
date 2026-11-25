# WO 0209 — o update enxuto: as revogadas filtradas pela versao, o perfil sem parada por campo vazio, o vazio avisado na tela, e o kit sem tres contradicoes (v1.163.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o pacote de update, o kit do Code, a tela) + harness + doc. Corta a **v1.163.0** (`D-203`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `9d2a4c8`, `main` = `origin/main`; harness em 19/19 · 137/137 · 0 erros, v1.162.1.
> **Base:** o pedido do dono de 25/11 (14h31): «da analise do update, vou de B com os quatro itens»; a analise `meta/analises/261125-ANALISE-o-update-que-cansa.md`.
> **Ancoras lidas em:** HEAD `9d2a4c8` («docs: a wo0207 conferida, dois merges da v1.162.0 fechados e a analise do update que cansa; i-N110 (wo0208)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-25; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261125-1332` (apply wo0208) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.071.412 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `f901fbefd173153bb1ad4bca77f344671563b1bb`; harness inteiro = **138/138**, 19/19 (`C54` verde em v1.163.0). Provas negativas: sem o paragrafo do filtro no manifesto → `C137` («o manifesto nao manda filtrar as revogadas pela versao antes da tabela»); sem o aviso da tela → `C137` («a tela nao avisa os campos vazios»); restaurado, verde. A arvore foi conferida igual a replica, arquivo por arquivo (sem CR).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

(1) `verNum`, `verMaior` e `revogadaMaisNova()`; o manifesto (antes da tabela) e o prompt do update mandam varrer so as revogadas mais novas que o carimbo do projeto. (2) `PERFIL_VAZIO`; o perfil no manifesto, no prompt e no GUIA: vazio = transplante sem pergunta; preenchido e diferente = pergunta no inventario. (3) `renderUpdateDialog` lista os campos vazios. (4) As skills `apply-wo` e `wrap` sem o «sessao» que manda; a `wrap` e o `CLAUDE.md` com o STATUS rolante; o `CLAUDE.md` fecha o vermelho pelo `AskUserQuestion`. `C137` novo; `C134` revisto (a pergunta no inventario); o shim expoe `verMaior`, `revogadaMaisNova` e `renderUpdateDialog`. Registro: CHANGELOG, STATUS (o hash da wo0208 e esta WO), DECISIONS (`D-203`), IDEAS (`i-N110`), a analise (Implementada) e o log de 25/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | os quatro itens; KIT_VERSION 1.163.0 | 39 / 18 | crlf | `12c26a18cec464f4839c3b5c367f58446ffb7704` |
| `validate.js` | `C137` novo; `C134` revisto; o shim | 39 / 2 | crlf | `4cf52102f0d08dd3613d87f0795cff2d1c104c71` |
| `meta/CHANGELOG.md` | v1.163.0 | 9 / 1 | lf | `ad5d1982a9344014ee42bdb98aa3493438d26f51` |
| `meta/DECISIONS.md` | `D-203` | 10 / 0 | crlf | `f3e334de4802e7372e0b2ddf49b7f56f50771cb1` |
| `meta/IDEAS.md` | `i-N110`: o update enxuto resolvido | 1 / 1 | lf | `a033eba9beabe76fa1272839c3f7b77af7f17bd7` |
| `meta/STATUS.md` | carimbo v1.163.0; hash da wo0208; bullet desta WO | 4 / 2 | lf | `5494a34db1504c7a93bbe6d2a934c793f37ccd66` |
| `meta/analises/261125-ANALISE-o-update-que-cansa.md` | Status Implementada; Vira e Decisao | 2 / 2 | lf | `a2de6f88e7d8e6dfd8e1f39352045d4cc3aeba3f` |
| `logs/2026-11-25.md` | a wo0208 conferida e esta WO | 2 / 0 | lf | `4132d5af42d1251eab357618ef0d32fe163ee1cf` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.071.412 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `9d2a4c8`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261125-wo0209-o-update-enxuto.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` = a coluna + / − (106 acrescentadas, 26 removidas). Diferente: PARE.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0` nos docs).
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `f901fbefd173153bb1ad4bca77f344671563b1bb`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **138/138**. Registre cruas as linhas do `C137`, do `C134`, do `C43` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261125-ANALISE-o-update-que-cansa.md logs/2026-11-25.md index.html meta/workorders/261125-wo0209-o-update-enxuto.md
```

```
git commit -m "feat(kit): o update enxuto - revogadas filtradas pela versao, perfil sem parada por campo vazio, o vazio avisado na tela; C137 (wo0209, D-203, v1.163.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS, a analise nem o log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0209.txt` (`date +%y%m%d-%H%M`, rodado na hora).
