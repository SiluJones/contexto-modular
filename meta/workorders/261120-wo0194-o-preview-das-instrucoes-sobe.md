# WO 0194 — nas Instrucoes, o titulo vai para a coluna dos blocos e o preview sobe, inteiro na tela abaixo da barra (v1.158.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (so a interface) + harness + doc. Corta a **v1.158.0** (`D-195`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `35b09ed`, `main` = `origin/main`; harness em 19/19 · 131/131 · 0 erros, v1.157.0.
> **Base:** o pedido do dono de 2026-11-20 (roteiro da wo0193, 4/4) e seis capturas: o texto «Instrucoes do Projeto. Marque o que importa…» «pode ocupar a mesma coluna que os blocos abaixo dele», o bloco das instrucoes em tempo real sobe e se move com a pagina «para sempre aparecer por inteiro», com o tamanho relativo a tela, «tomando cuidado para ela nao ser escondida pela headbar».
> **Ancoras lidas em:** HEAD `35b09ed` («fix(ui): o prompt abre tambem por baixo ... (wo0193, D-194, v1.157.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-20; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261120-1214` (apply wo0193) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.058.315 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `9eccb96357cc2dea4071797e45a4f0f75273d175`; harness inteiro = **132/132**, 19/19 (`C54` verde em v1.158.0). Uma prova negativa, vermelha e restaurada: o `.out` de volta a `top:80px` → `C131`.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

(1) No HTML da vista `#v-instrucoes`, o kicker, o `h1.page` e o `.lede` entram num `.bhead`, primeiro filho da `.controls`. (2) CSS do `.out`: `top:calc(var(--topo,84px) + 14px)` e `height:calc(100vh - var(--topo,84px) - 28px)` no lugar de `top:80px` e do `max-height`; `.out pre{min-height:0}`; abaixo de 700 px, `height:auto` e o `pre` ate 70vh. (3) `enhanceCollapsibleGroups` poe o «abrir tudo» depois do `.bhead`. (4) `C131` novo: le a pagina como sai (`new JSDOM` sem script) e roda o construtor num DOM com a mesma coluna. Registro: CHANGELOG, STATUS (o hash da wo0193 e esta WO), DECISIONS (`D-195`), IDEAS (`i-N102`) e o log de 20/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o `.bhead` na coluna; o `.out` pela `--topo`; o «abrir tudo» depois do titulo; KIT_VERSION 1.158.0 | 14 / 8 | crlf | `c5811297681beaef7b6d809892107c685719d042` |
| `validate.js` | `C131` | 22 / 0 | crlf | `6593965dc2839a6a296b04ff7470905e59172400` |
| `meta/CHANGELOG.md` | v1.158.0 | 7 / 1 | lf | `6f3b5a4f8e69d25ab9955ec89c89c021e4acfb6c` |
| `meta/DECISIONS.md` | `D-195` | 10 / 0 | crlf | `be74490c38e9b4e2da1a14d54c98096b266a1898` |
| `meta/IDEAS.md` | a `i-N102` | 1 / 1 | lf | `b6b0a91313e843eddc7179947c54df9cff10accd` |
| `meta/STATUS.md` | carimbo v1.158.0; hash da wo0193; bullet desta WO | 4 / 2 | lf | `dfbb84ff36cce95164529a3844c7b93f9a089788` |
| `logs/2026-11-20.md` | a wo0193 conferida e esta WO | 9 / 0 | lf | `f23bc84c184b55214ef6b15705f0c766b8777b2d` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.058.315 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `35b09ed`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261120-wo0194-o-preview-das-instrucoes-sobe.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` = a coluna + / − (67 acrescentadas, 12 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `9eccb96357cc2dea4071797e45a4f0f75273d175`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **132/132**. Registre cruas as linhas do `C131` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-20.md index.html meta/workorders/261120-wo0194-o-preview-das-instrucoes-sobe.md
```

```
git commit -m "fix(ui): nas Instrucoes o titulo vai para a coluna dos blocos e o preview sobe, inteiro na tela abaixo da barra de cima; C131 (wo0194, D-195, v1.158.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0194.txt` (`date +%y%m%d-%H%M`, rodado na hora).
