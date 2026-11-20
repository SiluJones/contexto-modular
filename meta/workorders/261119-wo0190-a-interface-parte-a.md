# WO 0190 — a interface, WO A: a rolagem contida no modal e travada na escolha de nicho, a copia sem o marcador vazio, o Engine na barra do jogo, os nichos salvos no card do Custom (C129, v1.154.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (so a interface) + harness + doc. Corta a **v1.154.0** (`D-191`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `b828a8b`, `main` = `origin/main`; harness em 19/19 · 129/129 · 0 erros, v1.153.0.
> **Base:** a decisao do dono em 2026-11-19 («Decido a analise da interface como recomendada: duas WOs, o “quando usar” fica a vista, o indice rola e copia, e Nichos salvos num seletor abaixo do card do Custom»).
> **Ancoras lidas em:** HEAD `b828a8b` («docs: a wo0188 conferida; o pacote do Hey Mother e a carta 01; a interface do KCM vista pelo dono (wo0189)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-19; `git status --short` de partida: `?? .claude/launch.json` e `?? meta/analises/261119-ANALISE-a-interface-do-kcm.md` (a analise do chat, versionada aqui). Relatorio `261119-2043` (apply wo0189) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os nove arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.045.251 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `451d92e976dca6a2ed1f5352036f1186a669e301`; harness inteiro = **130/130**, 19/19 (`C54` verde em v1.154.0; `C28` sem mudanca). O harness achou o `G17`, que exigia o Engine no modal: revisto nesta WO. Uma prova negativa do `C129`, vermelha e restaurada (conferido por `cmp`): o botao de copiar sem `promptCopyText`.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A nota do dono de 19/11 e quatro capturas (`i-N102`), a analise `261119` da interface. (1) CSS: `overscroll-behavior: contain` no modal, no fundo dele e no corpo; a sobreposicao de nicho trava a pagina de tras (`html:has(.overlay.on)`, com `scrollbar-gutter: stable`). (2) `promptCopyText`: a copia sem o marcador do fim quando o campo esta vazio. (3) `src/niches/game.js`: o Engine sai do modal. (4) «Nichos salvos» sai de `renderTopbar` e vai para abaixo do card do Custom; escolher um fecha a sobreposicao. `C129` novo; o `G17` revisto. O que o kit gera nao muda. Registro: CHANGELOG, STATUS (o hash da wo0189 e esta WO), DECISIONS (`D-191`), IDEAS (titulo da `i-N102`), a analise (nova, decidida) e o log de 19/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o CSS da rolagem; o seletor abaixo do card do Custom; a barra de cima sem o atalho; `promptCopyText`; KIT_VERSION 1.154.0 | 25 / 8 | crlf | `e3f475c2f49df8b1b6ff9e829907e0d7c62862e1` |
| `src/niches/game.js` | o Engine sem `panel:"modal"` | 1 / 1 | lf | `1ab2412e7946fe400d7f4b98f17a62a432d2e6de` |
| `validate.js` | o SHIM expoe quatro funcoes; `C129`; o `G17` revisto | 37 / 2 | crlf | `04e5eda9fd08d3a970006c58e30f26a53e1a4203` |
| `meta/CHANGELOG.md` | v1.154.0 | 9 / 1 | lf | `00dd415c0c1cb2317af5142e2383566068ede2bf` |
| `meta/DECISIONS.md` | `D-191` | 12 / 0 | crlf | `2e1ceb456ca084b35ca4d5c6bd375da39e5ef757` |
| `meta/IDEAS.md` | titulo da `i-N102` | 1 / 1 | lf | `9999ad9ba5852713448c8eb3c6ed8c02c00a8488` |
| `meta/STATUS.md` | carimbo v1.154.0 e 130; hash e custo da wo0189; bullet desta WO | 4 / 2 | lf | `19a09e0ca77cac6acd2dbe990767e9170233c369` |
| `logs/2026-11-19.md` | a wo0189, a analise da interface e esta WO | 13 / 0 | lf | `2e2833c1ac6029c4cd91ba3f60d1642cf9f2e2b1` |
| `meta/analises/261119-ANALISE-a-interface-do-kcm.md` | NOVO (analise do chat; decidida) | 60 linhas | lf | `622fa941e6c19125d19e19b1b589fde7194a08e8` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.045.251 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `b828a8b`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json`, `?? meta/analises/261119-ANALISE-a-interface-do-kcm.md` e `?? meta/workorders/261119-wo0190-a-interface-parte-a.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos nove = os do inventario; `git diff --numstat` dos oito = a coluna + / − (102 acrescentadas, 15 removidas); `wc -l` da analise = 60. Diferente: PARE.
4. Leia o diff inteiro e a analise nova.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `451d92e976dca6a2ed1f5352036f1186a669e301`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **130/130**. Registre cruas as linhas do `C129`, do `G17`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html src/niches/game.js validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-19.md meta/analises/261119-ANALISE-a-interface-do-kcm.md index.html meta/workorders/261119-wo0190-a-interface-parte-a.md
```

```
git commit -m "feat(ui): a rolagem contida no modal e travada na escolha de nicho, a copia sem o marcador vazio, o Engine na barra do jogo, os nichos salvos no card do Custom; C129 (wo0190, D-191, v1.154.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0190.txt` (`date +%y%m%d-%H%M`, rodado na hora).
