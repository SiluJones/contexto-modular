# WO 0191 — os nichos salvos como o dono pediu: um card por nicho salvo ao lado do Custom, e o seletor de volta na barra do Custom (v1.155.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (so a interface) + harness + doc. Corta a **v1.155.0** (`D-192`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `3c4f07c`, `main` = `origin/main`; harness em 19/19 · 130/130 · 0 erros, v1.154.0.
> **Base:** as duas capturas do dono de 2026-11-19 (22h13 e 22h14) e o pedido dele: «queria que no espaco onde seleciona nicho fossem gerados os quadrados de blocos para os nichos personalizados, ao lado (mas claramente sinalizado como separado) do custom, enquanto o seletor de nicho personalizado era para continuar aparecendo no header de qualquer nicho personalizado e obviamente no do custom».
> **Ancoras lidas em:** HEAD `3c4f07c` («feat(ui): a rolagem contida no modal ... (wo0190, D-191, v1.154.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-19; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261119-2209` (apply wo0190) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.047.234 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `bd6aabd2b7869d21cc37cc87ff4b205e72549c9b`; harness inteiro = **130/130**, 19/19 (`C54` verde em v1.155.0). Uma prova negativa, vermelha e restaurada: o seletor na barra de cima de todo nicho → `C129`.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A wo0190 leu o item 2 da `i-N102` ao contrario. (1) `savedPresetCardsHTML`: um card por nicho salvo, ao lado do Custom, tracejado e com o selo «salvo»; o clique ativa e fecha a tela; o estado ativo distingue o Custom vazio do nicho salvo. (2) `renderTopbar`: o seletor so quando o nicho e o Custom. (3) Sai o `#ng-custom-saved`. O `C129` passa a cobrar a leitura certa. Registro: CHANGELOG, STATUS (o hash da wo0190 e esta WO), DECISIONS (`D-192`), IDEAS (titulo da `i-N102`), a linha Vira da analise e o log de 19/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | `savedPresetCardsHTML` e os cards; o seletor so na barra do Custom; o estado ativo; o CSS do card salvo; KIT_VERSION 1.155.0 | 37 / 8 | crlf | `c7b9f9e499b64fd4ad577a98d097456f4d6150c5` |
| `validate.js` | o SHIM expoe `savedPresetCardsHTML`; o `C129` corrigido | 15 / 5 | crlf | `159aa59be6875e40aa2b365b8d59abd616c1ebdd` |
| `meta/CHANGELOG.md` | v1.155.0 | 7 / 1 | lf | `3c5eff6088f549389b3f4c5711c6f771b602e197` |
| `meta/DECISIONS.md` | `D-192` | 12 / 0 | crlf | `19acb98fcf09fdc7c43d72b7e290de4c40f35fcb` |
| `meta/IDEAS.md` | titulo da `i-N102` | 1 / 1 | lf | `a6a6f255561ae7a5e30766993fa6060fdd8a29a9` |
| `meta/STATUS.md` | carimbo v1.155.0; hash da wo0190; bullet desta WO | 4 / 2 | lf | `44073f2fe57a2d5ef1c1bb9b0192a68c269fdf61` |
| `logs/2026-11-19.md` | a wo0190 conferida e esta WO | 12 / 0 | lf | `cc1d43e1d09b9c80005d05f7a38f86072d52539e` |
| `meta/analises/261119-ANALISE-a-interface-do-kcm.md` | a linha Vira | 1 / 1 | lf | `58e95ba479be13cb1a94b03ee8e21ea8f7c65467` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.047.234 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `3c4f07c`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261119-wo0191-os-nichos-salvos-como-cards.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` = a coluna + / − (89 acrescentadas, 18 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `bd6aabd2b7869d21cc37cc87ff4b205e72549c9b`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **130/130**. Registre cruas as linhas do `C129` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-19.md meta/analises/261119-ANALISE-a-interface-do-kcm.md index.html meta/workorders/261119-wo0191-os-nichos-salvos-como-cards.md
```

```
git commit -m "fix(ui): os nichos salvos viram cards ao lado do Custom na escolha de nicho, e o seletor volta a barra de cima do Custom (wo0191, D-192, v1.155.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0191.txt` (`date +%y%m%d-%H%M`, rodado na hora).
