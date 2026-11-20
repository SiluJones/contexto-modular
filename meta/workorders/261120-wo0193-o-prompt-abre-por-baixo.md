# WO 0193 — o prompt abre tambem por baixo, o «ver o prompt» se afasta do copiar, e o indice para abaixo da barra (v1.157.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (so a interface) + harness + doc. Corta a **v1.157.0** (`D-194`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `64baa49`, `main` = `origin/main`; harness em 19/19 · 131/131 · 0 erros, v1.156.0.
> **Base:** o pedido do dono de 2026-11-20, com quatro capturas: o abrir «poderia ser mais pratico, no espaco onde ele estaria para abrir»; «pode manter o botao, so afasta ele mais do copiar, manda ele mais para a esquerda»; o recolhivel/expansivel «tambem na parte de baixo de cada prompt»; e «o indice esta sendo cortado pelo header».
> **Ancoras lidas em:** HEAD `64baa49` («feat(ui): os prompts e os blocos das Instrucoes recolhem ... (wo0192, D-193, v1.156.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-20; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261120-1148` (apply wo0192) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.057.828 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `c4d81e4a9ecf0ec3d72aec895572ab3cbc46a12b`; harness inteiro = **131/131**, 19/19 (`C54` verde em v1.157.0). Uma prova negativa, vermelha e restaurada: o copiar sem o `margin-left:auto` → `C130`.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

(1) `renderPrompts`: o recolhido mostra o comeco do corpo apagando (clique abre; aberto, o clique no corpo nao recolhe); a faixa `.pfoot` embaixo de cada card; o titulo e a letra tambem alternam; um estado so (`setAberto`) para os quatro controles; recolher pela faixa devolve o topo do card. (2) O «ver o prompt» logo depois do titulo; o copiar com `margin-left:auto`. (3) `vigiarTopo`: a altura da `.topbar` vira `--topo`, usada pelo `.pindex` e pelo `scroll-margin-top` do `.pcard`; chamada no `boot`. (4) O achado do seu relatorio da wo0192: `enhanceCollapsibleGroups` guarda a chave em `data-gkey` e o «abrir tudo» a usa. (5) `C130` ampliado. Registro: CHANGELOG, STATUS (o hash da wo0192 e esta WO), DECISIONS (`D-194`), IDEAS (`i-N102`) e o log de 20/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o abrir por baixo, o botao junto do titulo, `vigiarTopo` e `--topo`, `data-gkey`; KIT_VERSION 1.157.0 | 45 / 15 | crlf | `cefec67f378b577bed5430ebb8509ef30b1024d7` |
| `validate.js` | o SHIM expoe `vigiarTopo`; `C130` ampliado | 20 / 2 | crlf | `67430e23a8f24313219542e40c3619f2e1950fa5` |
| `meta/CHANGELOG.md` | v1.157.0 | 8 / 1 | lf | `1e627c846fce9ed139ac5283a8ea4d942f053fe8` |
| `meta/DECISIONS.md` | `D-194` | 12 / 0 | crlf | `74c4126e78afd4beee4c2cb32329182d036950e3` |
| `meta/IDEAS.md` | a `i-N102` | 1 / 1 | lf | `ce326f6fd8fd2637047dcf3ad2b1049198991e14` |
| `meta/STATUS.md` | carimbo v1.157.0; hash da wo0192; bullet desta WO | 4 / 2 | lf | `fb600f1cabbf03287d2a77dbacf89230cf7ea84c` |
| `logs/2026-11-20.md` | a wo0192 conferida e esta WO | 9 / 0 | lf | `16d2fff6fe812ef1b42d0bca8991dd9c68b4451c` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.057.828 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `64baa49`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261120-wo0193-o-prompt-abre-por-baixo.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` = a coluna + / − (99 acrescentadas, 21 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `c4d81e4a9ecf0ec3d72aec895572ab3cbc46a12b`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **131/131**. Registre cruas as linhas do `C130` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-20.md index.html meta/workorders/261120-wo0193-o-prompt-abre-por-baixo.md
```

```
git commit -m "fix(ui): o prompt abre tambem por baixo, o ver o prompt vai para junto do titulo e o indice para abaixo da barra de cima (wo0193, D-194, v1.157.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0193.txt` (`date +%y%m%d-%H%M`, rodado na hora).
