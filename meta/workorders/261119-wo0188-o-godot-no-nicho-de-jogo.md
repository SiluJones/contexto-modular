# WO 0188 — a engine no nicho de jogo, a comecar pelo Godot: o .gitignore, a checagem sem janela no CLAUDE.md e o teste de fumaca do chat (C128, v1.153.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.153.0** (`D-190`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `adcdb52`, `main` = `origin/main`; harness em 19/19 · 128/128 · 0 erros, v1.152.0.
> **Base:** a decisao do dono em 2026-11-19 («Decido a analise 261119 como recomendada: a WO do Godot antes do pacote, o Hey Mother achata a estrutura, e o MCP fica para depois do primeiro playtest»).
> **Ancoras lidas em:** HEAD `adcdb52` («fix(kit): a recusa da apply-wo grava o relatorio ... (wo0187, D-189, v1.152.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-19; `git status --short` de partida: `?? .claude/launch.json` e `?? meta/analises/261119-ANALISE-o-game-com-o-hey-mother.md` (a analise do chat, versionada aqui). Relatorio `261119-1715` (apply wo0187) lido inteiro. Lido fora do repo: o Hey Mother (`Game Design\Hey Mother`), so leitura.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.043.791 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `5c56e554437a02d10a92809d7a04827fdc6a8191`; harness inteiro = **129/129**, 19/19 (`C54` verde em v1.153.0; `C28` sem mudanca). Duas provas negativas do `C128`, vermelhas e restauradas (conferido por `cmp`): o bloco do `.gitignore` desligado → «game/Godot: o bloco do Godot no .gitignore falta»; o gatilho desligado → «game/Godot: o gatilho do teste de fumaca falta». Na VM do chat, o Godot 4.6.3 oficial rodou uma copia do `mother_trilhoB` do Hey Mother e gravou o quadro.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O nicho `game` tem o campo «Engine» e nenhum texto gerado o lia (`i-N86` item 1). Com o Godot escolhido: (1) `engineGodot()`; o `.gitignore` ganha `.godot/` e `/android/`; (2) o `CLAUDE.md` troca o build de exemplo pela secao do Godot (o executavel, a checagem sem janela, o `git rm -r --cached` do cache versionado) — a forma do Hey Mother; (3) no canal pasta, o `GUIA-DO-KIT.md` ganha «Teste de fumaça do Godot na VM do chat», com gatilho na tabela do CEREBRO e a linha no indice; (4) o prompt do update manda tirar o cache versionado. Sem o Godot, nada muda. `C128` novo. Registro: CHANGELOG, STATUS (o hash da wo0187 e esta WO), DECISIONS (`D-190`), IDEAS (titulos de `i-N86`, `i-N98`, `i-N101`), a analise `261119` (nova, decidida) e o log de 19/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | `engineGodot`, o `.gitignore`, a secao do `CLAUDE.md`, `guiaSecaoGodot` e o GUIA, o gatilho, a linha do update; KIT_VERSION 1.153.0 | 29 / 4 | crlf | `0ecc3752badaf5275b45a358b34e8e7c6a7f9e90` |
| `validate.js` | `C128` | 39 / 0 | crlf | `cdb1589b5f81e8758f88f4e58b00954fb26cb53a` |
| `meta/CHANGELOG.md` | v1.153.0 | 11 / 1 | lf | `4058223f604c3c0ea3ffee8d3cf662eb8073cd4e` |
| `meta/DECISIONS.md` | `D-190` | 12 / 0 | crlf | `54cfb824eda2f587312f58a7743da7d77223e038` |
| `meta/IDEAS.md` | titulos de `i-N86`, `i-N98`, `i-N101` | 3 / 3 | lf | `d73689d67b0da217cb80cb412ab312bc5da24c72` |
| `meta/STATUS.md` | carimbo v1.153.0 e 129; hash e custo da wo0187; bullet desta WO | 4 / 2 | lf | `e08a793644995d8194c165166cf792ce4e917ca5` |
| `logs/2026-11-19.md` | a wo0187, o Hey Mother, a analise e esta WO | 14 / 0 | lf | `87462ff80cb4a4ec5639715e547988742b63446e` |
| `meta/analises/261119-ANALISE-o-game-com-o-hey-mother.md` | NOVO (analise do chat; decidida) | 60 linhas | lf | `8a53ba6e9094a285b52eb93aacbade932ca59568` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.043.791 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `adcdb52`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json`, `?? meta/analises/261119-ANALISE-o-game-com-o-hey-mother.md` e `?? meta/workorders/261119-wo0188-o-godot-no-nicho-de-jogo.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario; `git diff --numstat` dos sete = a coluna + / − (112 acrescentadas, 10 removidas); `wc -l` da analise = 60. Diferente: PARE.
4. Leia o diff inteiro e a analise nova.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `5c56e554437a02d10a92809d7a04827fdc6a8191`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **129/129**. Registre cruas as linhas do `C128`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`. Se o hook demorar mais de 3 minutos, diga quanto e em que passo.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-19.md meta/analises/261119-ANALISE-o-game-com-o-hey-mother.md index.html meta/workorders/261119-wo0188-o-godot-no-nicho-de-jogo.md
```

```
git commit -m "feat(kit): a engine no nicho de jogo - com o Godot, o gitignore, a checagem sem janela no CLAUDE.md, o teste de fumaca do chat no GUIA e o cache versionado no update; C128 (wo0188, D-190, v1.153.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`, e onde o tempo foi, se passou de 3 minutos). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0188.txt` (`date +%y%m%d-%H%M`, rodado na hora).
