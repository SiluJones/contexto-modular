# WO 0198 — as Instrucoes sem a margem a mais em cima, e cada aba lembra a propria rolagem (v1.160.1, o primeiro patch)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (so a interface) + harness + doc. Corta a **v1.160.1** (`D-198`; o patch pela `D-199`, que emenda a `D-158`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `98d08b8`, `main` = `origin/main`; harness em 19/19 · 133/133 · 0 erros, v1.160.0.
> **Base:** a nota do dono `261120-1617` («ainda tem uma margenzinha de espaco que nao sei por que que esta ai»; «a barra de rolar e compartilhada em todas as abas, nao seria possivel separar e tambem se lembrar onde estava? Mas apenas no nicho que voce esta») e as duas capturas de 16h17; a pergunta do dono no chat de 21/11 sobre cortar versao em mudanca so de tela.
> **Ancoras lidas em:** HEAD `98d08b8` («feat(kit): os zips dizem o nicho, ... C132 (wo0197, D-197, v1.160.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-21; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261120-1614` (apply wo0197) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.061.955 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `1f8304353c02d5c3fd3138b4cb2e1c710ed45be3`; harness inteiro = **134/134**, 19/19 (`C54` verde em v1.160.1). Duas provas negativas, vermelhas e restauradas: sem a linha que devolve a posicao no `setView` → `C133` («a aba nova herdou a rolagem da anterior: 500»); o topo de volta a 38 px → `C131`. O que o kit gera, comparado com a v1.160.0 em 76 configuracoes (532 saidas): 0 diferencas fora o carimbo.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

(1) Acima do preview das Instrucoes havia 58 px (38 da vista, 20 do construtor); o preview foi feito para caber na tela a 14 px da barra, e a pagina rolava 44 px a toa (58 + 14 − 28). Em tela larga, a vista fica com 14 px em cima e embaixo e o construtor sem margem; `C131` cobra topo + fundo ≤ 28 e ganha o rotulo da wo0195. (2) `setView` guarda a posicao da aba que sai (`ROLAGEM`, em memoria) e devolve a da aba que entra; `setNiche` chama `rolagemDoNicho(id)`, que zera tudo ao trocar de nicho. `C133` novo. (3) A `D-199`: mudanca so de tela corta patch; o CEREBRO da casa diz isso na secao da validacao. Registro: CHANGELOG, STATUS (o hash da wo0197 e esta WO), DECISIONS (`D-198`, `D-199`), IDEAS (`i-N104`, a recomendacao corrigida), CEREBRO e o log novo de 21/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o topo das Instrucoes; a rolagem por aba; KIT_VERSION 1.160.1 | 21 / 2 | crlf | `4a0c1a8d1a918897b6a7b2f6ad4782697d668937` |
| `validate.js` | `C133` novo; `C131` com o topo e o rotulo; o shim | 41 / 4 | crlf | `fd94e3d1fa48e9f309552b4662f580cf3df5dc7e` |
| `meta/CEREBRO.md` | o corte por patch (`D-199`) na secao da validacao | 1 / 1 | crlf | `8519d361245e8f570914056e59d81074b0dd8e92` |
| `meta/CHANGELOG.md` | v1.160.1 | 7 / 1 | lf | `2cb3b85765dab088b441f4a4b0b825f1826872dc` |
| `meta/DECISIONS.md` | `D-198`, `D-199` | 18 / 0 | crlf | `f802cdfc1ee4aba8003b3d1eff95a6dbc4589878` |
| `meta/IDEAS.md` | `i-N104`: a recomendacao corrigida e os narrativos | 1 / 1 | lf | `648003ed8991a4c14256556227c8616899e36354` |
| `meta/STATUS.md` | carimbo v1.160.1; hash da wo0197; bullet desta WO | 4 / 2 | lf | `bffa7f25c4489fd6be0f631b112b1f0a0c19f300` |
| `logs/2026-11-21.md` | NOVO: a KCM 30 em 21/11 | 13 linhas | lf | `8de2462e627370fe63be424a16166d1c1be162c8` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.061.955 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `98d08b8`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? logs/2026-11-21.md`, `?? .claude/launch.json` e `?? meta/workorders/261121-wo0198-margenzinha-e-rolagem-por-aba.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, `git diff --numstat` dos sete = a coluna + / − (93 acrescentadas, 11 removidas) e `wc -l logs/2026-11-21.md` = 13. Diferente: PARE.
4. Leia o diff inteiro e o log novo.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `1f8304353c02d5c3fd3138b4cb2e1c710ed45be3`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **134/134**. Registre cruas as linhas do `C133`, do `C131` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CEREBRO.md meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-21.md index.html meta/workorders/261121-wo0198-margenzinha-e-rolagem-por-aba.md
```

```
git commit -m "fix(ui): as Instrucoes sem a margem a mais em cima e cada aba lembra a propria rolagem; so tela corta patch; C133 (wo0198, D-198, D-199, v1.160.1)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS, CEREBRO nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0198.txt` (`date +%y%m%d-%H%M`, rodado na hora).
