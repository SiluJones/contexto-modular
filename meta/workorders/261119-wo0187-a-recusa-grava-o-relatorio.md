# WO 0187 — a recusa da apply-wo tambem grava o relatorio, e o relatorio de parada abre dizendo o que entrou (v1.152.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + a skill da casa + doc. Corta a **v1.152.0** (`D-189`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `a4a7cd3`, `main` = `origin/main`; harness em 19/19 · 128/128 · 0 erros, v1.151.0.
> **Base:** a carta 04 do Negocios e Licitacoes (19/11), conferida no `src/` da v1.151.0.
> **Ancoras lidas em:** HEAD `a4a7cd3` («docs: a wo0185 conferida; o feedback do Negocios e Licitacoes lido e a carta 03 a eles (wo0186)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-19; `git status --short` de partida: `?? .claude/launch.json` (so ele). Lidos inteiros na pasta-pai: o relatorio `261118-1122` (apply wo0186), a carta 04 do Negocios, a nota do dono `261119-1353` e tres capturas de tela.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.039.809 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `23530c8dd4e99748ea1d235bf6f85a7c19e13034`; harness inteiro = **128/128**, 19/19 (`C54` verde em v1.152.0; `C43` com 78 clausulas). Duas provas negativas, vermelhas e restauradas: a lista da parada sem a recusa → `C118` «a recusa da apply-wo gerada nao grava o relatorio em arquivo»; a skill da casa sem a primeira linha → `C43`.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

No Negocios, a `apply-wo` recusou certo (a WO sem «Ancoras lidas em») e so avisou na tela; o dono viu a sessao terminar e relatou a WO como aplicada. A regra da parada (`C118`, wo0166) gravava o relatorio em quatro casos e nao listava a recusa. (1) A skill gerada: a recusa entra na regra, a linha da recusa manda gravar, e o relatorio abre dizendo o que entrou. (2) A `apply-wo` da casa nao tinha a regra da parada: ganha a mesma (o `.claude/skills/` muda por WO). (3) O `C118` cobra a recusa e a primeira linha; o `C43`, a clausula nos dois lados. Registro: CHANGELOG, STATUS (o hash da wo0186 e esta WO), DECISIONS (`D-189`), IDEAS (`i-N100`, `i-N101` e o livro de leitura) e o log de 19/11 (novo).

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | a recusa grava; a regra da parada com a recusa e a primeira linha; KIT_VERSION 1.152.0 | 3 / 3 | crlf | `5cffcca0f0f5e8ffb525d221d985a67d36d9b9c5` |
| `validate.js` | duas assercoes no `C118`; a clausula «parada e recusa gravam» no `C43` | 6 / 0 | crlf | `f1ed71bde2d8dbff7338b8e385501c0cba94ef18` |
| `.claude/skills/apply-wo/SKILL.md` | a recusa grava; a regra da parada e da recusa | 2 / 1 | lf | `a22543ab4fbe4ea25d59b532007c764e0aa7b083` |
| `meta/CHANGELOG.md` | v1.152.0 | 7 / 1 | lf | `0ec632aafab1094d9a944d7a7dc98434344d9895` |
| `meta/DECISIONS.md` | `D-189` | 12 / 0 | crlf | `b1b1ea48227503058589528da862919afd14d33f` |
| `meta/IDEAS.md` | `i-N101` e `i-N100` novas; a linha do Negocios no livro de leitura | 7 / 1 | lf | `d7b8eb4f3c2f071ac718de1429a37d3a7180afba` |
| `meta/STATUS.md` | carimbo v1.152.0; hash e custo da wo0186; bullet desta WO | 4 / 2 | lf | `536c7c240aebb19a34ab89e7fdc947aeb4672c81` |
| `logs/2026-11-19.md` | NOVO (a KCM 29 em 19/11) | 14 linhas | lf | `0d6dacaa0faf601d19bf861315d6a2962ff6d6e8` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.039.809 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `a4a7cd3`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json`, `?? logs/2026-11-19.md` e `?? meta/workorders/261119-wo0187-a-recusa-grava-o-relatorio.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario; `git diff --numstat` dos sete = a coluna + / − (41 acrescentadas, 8 removidas); `wc -l` do log = 14. Diferente: PARE.
4. Leia o diff inteiro e o log novo.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `23530c8dd4e99748ea1d235bf6f85a7c19e13034`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **128/128**. Registre cruas as linhas do `C118`, do `C43` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js .claude/skills/apply-wo/SKILL.md meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-19.md index.html meta/workorders/261119-wo0187-a-recusa-grava-o-relatorio.md
```

```
git commit -m "fix(kit): a recusa da apply-wo grava o relatorio e o relatorio de parada abre dizendo o que entrou; a regra na skill da casa (wo0187, D-189, v1.152.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0187.txt` (`date +%y%m%d-%H%M`, rodado na hora).
