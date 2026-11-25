# WO 0211 — o bloco de git para o usuario: um bloco so, um comando por linha (v1.165.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o CEREBRO e as Instrucoes geradas) + as Instrucoes da casa + harness + doc. Corta a **v1.165.0** (`D-205`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `ef18370`, `main` = `origin/main`; harness em 19/19 · 139/139 · 0 erros, v1.164.0.
> **Base:** a nota do dono `261125-1734` («faca virar regra […] ao inves dos 3 blocos em blocos de codigo separado»), lida inteira e movida para `../notas-arquivadas/`.
> **Ancoras lidas em:** HEAD `ef18370` («feat(kit): o enxugamento, WO B - o como da Analise e do Refino vai para o GUIA, e a base do CEREBRO ganha teto; C138 (wo0210, D-204, v1.164.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-25; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261125-1745` (apply wo0210) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.073.572 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `0fc09b0126417d52d181632ed7919e83a872a089`; harness inteiro = **140/140**, 19/19 (`C54` verde em v1.165.0; `C28` verde: a linha do Modo Code coube no orcamento). Prova negativa: com a frase antiga no CEREBRO → `C139` («o CEREBRO nao manda o bloco unico»); restaurada, verde. A arvore foi conferida igual a replica, arquivo por arquivo (sem CR).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

O `commitIntro` do CEREBRO gerado e as duas linhas «**Commit:**» das Instrucoes geradas (com e sem o Modo Code) mandam `add`, `commit` e `push` num bloco so, um comando por linha; a linha do commit das Instrucoes da casa diz o mesmo. `C139` novo. O modelo de WO fica como esta (o commit dele e rodado pelo Code). Registro: CHANGELOG, STATUS (o hash da wo0210 e esta WO), DECISIONS (`D-205`) e o log de 25/11. **Depois do commit, o dono recola o `INSTRUCOES-DO-PROJETO.md` no painel do Projeto** (7.605 caracteres).

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o `commitIntro` e as duas linhas do commit; KIT_VERSION 1.165.0 | 3 / 3 | crlf | `957541aea19206132fb7590f9ebfe30e394dce2b` |
| `validate.js` | `C139` novo | 16 / 0 | crlf | `f7980e99bc37162677ed76b0c30774dca130727e` |
| `INSTRUCOES-DO-PROJETO.md` | a linha do commit | 1 / 1 | lf | `d538027f0b035531e8d89c8844f62d4df2eca7bf` |
| `meta/CHANGELOG.md` | v1.165.0 | 6 / 1 | lf | `7cb247e4f609fc93d084760ce525b3a98cf9df7f` |
| `meta/DECISIONS.md` | `D-205` | 10 / 0 | crlf | `36f165b54fd5d882c133e2b870a3e3ffedec80b2` |
| `meta/STATUS.md` | carimbo v1.165.0; hash da wo0210; bullet desta WO | 4 / 2 | lf | `109c6d7c5c00f65a60789c59f36a6a6d018410df` |
| `logs/2026-11-25.md` | a wo0210 conferida e esta WO | 2 / 0 | lf | `83a50b74b84ae99ce66d76e2b22bbc362f5f2c95` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.073.572 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `ef18370`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261125-wo0211-git-num-bloco-so.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` = a coluna + / − (42 acrescentadas, 7 removidas). Diferente: PARE.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0` nos docs).
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `0fc09b0126417d52d181632ed7919e83a872a089`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **140/140**. Registre cruas as linhas do `C139`, do `C28`, do `C22` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js INSTRUCOES-DO-PROJETO.md meta/CHANGELOG.md meta/DECISIONS.md meta/STATUS.md logs/2026-11-25.md index.html meta/workorders/261125-wo0211-git-num-bloco-so.md
git commit -m "feat(kit): o bloco de git para o usuario - um bloco so, um comando por linha; C139 (wo0211, D-205, v1.165.0)"
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, as Instrucoes nem o log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0211.txt` (`date +%y%m%d-%H%M`, rodado na hora).
