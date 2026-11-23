# WO 0207 — os blocos das Convencoes e do nicho voltam a recolher (v1.162.1, patch)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — so a tela (o gerado nao muda) + harness + doc. Corta a **v1.162.1**, patch (`D-202`, `D-199`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `762ce2f`, `main` = `origin/main`; harness em 19/19 · 136/136 · 0 erros, v1.162.0.
> **Base:** a nota do dono `261123-0948` («O colapsar do bloco Convencoes do nicho nao esta funcionando»), lida inteira e movida para `../notas-arquivadas/`.
> **Ancoras lidas em:** HEAD `762ce2f` («docs: a wo0205 conferida, o merge do I will die conferido e o pacote do My mother regerado; i-N109 (wo0206)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-23; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261123-0339` (apply wo0206) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os seis arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.068.218 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `fae9d156a618366f3729d3abb5d7daadf3b41867`; harness inteiro = **137/137**, 19/19 (`C54` verde em v1.162.1). Provas negativas: sem a religacao nas Convencoes → `C136` («as Convencoes nao entraram no recolher»); sem a do bloco do nicho → `C136` («a contagem do bloco do nicho sumiu depois do re-render»); restaurado, verde. O gerado e identico ao da v1.162.0: Instrucoes, CEREBRO, manifesto, prompt e arquivos do pacote, 19 nichos × Code sim/nao, 38 combinacoes, 0 diferentes (sha1, com a versao trocada por um marcador). A arvore foi conferida igual a replica, arquivo por arquivo (sem CR).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

O recolher da `D-193` liga o clique no titulo de cada bloco uma vez, no fim do `renderBuilder`. Dois blocos reescrevem o proprio `innerHTML` depois disso: as Convencoes (o `setNiche` as pinta depois do `renderBuilder`) e o bloco do nicho (a cada clique num chip). O titulo com o clique ia embora. (1) Os dois renders chamam `enhanceCollapsibleGroups()` depois de reescrever. (2) O clique, o teclado e a contagem passam para o grupo, por delegacao. `C136` novo; o shim expoe `renderConventionsBlock`. Registro: CHANGELOG, STATUS (o hash da wo0206 e esta WO), DECISIONS (`D-202`) e o log de 23/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | as duas religacoes, a delegacao; KIT_VERSION 1.162.1 | 15 / 8 | crlf | `8d95d48547cec94996a6b8d844f6a93c91558dcd` |
| `validate.js` | `C136` novo; o shim | 35 / 1 | crlf | `9a846622a12f9735a1fd75c726f28b917ea38551` |
| `meta/CHANGELOG.md` | v1.162.1 | 7 / 1 | lf | `93b1d44cbc853a1e7864002c4059f41df1344df2` |
| `meta/DECISIONS.md` | `D-202` | 10 / 0 | crlf | `f185e60abf7c1618aec6d366639fbb63e58494fc` |
| `meta/STATUS.md` | carimbo v1.162.1; hash da wo0206; bullet desta WO | 4 / 2 | lf | `1216ca58e6cdf7b25418bd140d26fa09491ee4b1` |
| `logs/2026-11-23.md` | a wo0206 conferida e esta WO | 2 / 0 | lf | `3a01e5f44e310b94ef6e5a115e15477fa8b378a7` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.068.218 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `762ce2f`. Diferente: PARE.
2. `git status --short` = exatamente os seis ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261123-wo0207-recolher-das-convencoes-e-do-bloco-do-nicho.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos seis = os do inventario, e `git diff --numstat` = a coluna + / − (73 acrescentadas, 12 removidas). Diferente: PARE.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0` nos docs).
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `fae9d156a618366f3729d3abb5d7daadf3b41867`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **137/137**. Registre cruas as linhas do `C136`, do `C130` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/STATUS.md logs/2026-11-23.md index.html meta/workorders/261123-wo0207-recolher-das-convencoes-e-do-bloco-do-nicho.md
```

```
git commit -m "fix(ui): os blocos das Convencoes e do nicho voltam a recolher; C136 (wo0207, D-202, v1.162.1)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0207.txt` (`date +%y%m%d-%H%M`, rodado na hora).
