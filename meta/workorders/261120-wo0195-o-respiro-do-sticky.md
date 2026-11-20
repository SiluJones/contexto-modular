# WO 0195 — o preview das Instrucoes nao sobe mais para baixo da barra no fim da rolagem (v1.159.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (so a interface) + harness + doc. Corta a **v1.159.0** (`D-196`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `751ac7e`, `main` = `origin/main`; harness em 19/19 · 132/132 · 0 erros, v1.158.0.
> **Base:** o roteiro do dono da wo0194, 3/4: o item 4 («nao ser escondida pela headbar») falhou — «ainda esta ficando escondido atras» —, com duas capturas de 12h55.
> **Ancoras lidas em:** HEAD `751ac7e` («fix(ui): nas Instrucoes o titulo vai para a coluna dos blocos ... (wo0194, D-195, v1.158.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-20; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261120-1254` (apply wo0194) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os seis arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.058.723 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `3ed2820f36688ffe64f4d520c45ecbd55e318d5c`; harness inteiro = **132/132**, 19/19 (`C54` verde em v1.159.0). Uma prova negativa, vermelha e restaurada: o respiro de volta a 90 px → `C131`.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

Um sticky nao sai da caixa que o contem. A vista tem 90 px de respiro abaixo do construtor; no fim da rolagem a caixa do preview acaba antes da tela e o empurra para cima: o topo fica em `--topo` + 28 − respiro, ou seja 76 px sob a barra (a medida das capturas). (1) CSS: `@media (min-width: 901px){ #v-instrucoes{padding-bottom:14px} }`, com o comentario. (2) `C131` cobra o respiro ≤ 14 px. Registro: CHANGELOG, STATUS (o hash da wo0194 e esta WO), DECISIONS (`D-196`) e o log de 20/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o respiro de 14 px na vista das Instrucoes; KIT_VERSION 1.159.0 | 5 / 1 | crlf | `0f6ac31f2be1c86a4507663a5d341a248b958e3f` |
| `validate.js` | `C131` cobra o respiro | 4 / 0 | crlf | `a531e0cabe096ec35428647f27e102fbf7ce8adc` |
| `meta/CHANGELOG.md` | v1.159.0 | 6 / 1 | lf | `545f98daad8d4481d10a0eccb7d339a4c1086845` |
| `meta/DECISIONS.md` | `D-196` | 12 / 0 | crlf | `b244a6d5b4432f0db1056a606212c3ba0311823b` |
| `meta/STATUS.md` | carimbo v1.159.0; hash da wo0194; bullet desta WO | 4 / 2 | lf | `f46e1a5aa75ffef1914f53c6569b929ddb9c09d0` |
| `logs/2026-11-20.md` | a wo0194 conferida e esta WO | 9 / 0 | lf | `7cc49ec779d63a9417c3409290c9f9e5c782585e` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.058.723 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `751ac7e`. Diferente: PARE.
2. `git status --short` = exatamente os seis ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261120-wo0195-o-respiro-do-sticky.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos seis = os do inventario, e `git diff --numstat` = a coluna + / − (40 acrescentadas, 4 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `3ed2820f36688ffe64f4d520c45ecbd55e318d5c`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **132/132**. Registre cruas as linhas do `C131` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/STATUS.md logs/2026-11-20.md index.html meta/workorders/261120-wo0195-o-respiro-do-sticky.md
```

```
git commit -m "fix(ui): o preview das Instrucoes nao sobe mais para baixo da barra no fim da rolagem, o respiro abaixo do construtor vira a folga do sticky (wo0195, D-196, v1.159.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0195.txt` (`date +%y%m%d-%H%M`, rodado na hora).
