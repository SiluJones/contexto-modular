# WO 0213 — as sobras do update, numa WO so: o painel no STATUS, as citacoes conferidas, o terminal duplo, a ponte sem .claude/, o projeto novo avisado e o GUIA no painel de saida (v1.166.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o prompt do update, o GUIA, o campo de SO, o README do projeto novo, o painel de saida) + harness + doc. Corta a **v1.166.0** (`D-206`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `6bd3b69`, `main` = `origin/main`; harness em 19/19 · 140/140 · 0 erros, v1.165.0.
> **Base:** a lista do dono `261125-1857` (as seis correcoes), lida inteira e movida para `../notas-arquivadas/`; `i-N109` itens 1 e 2, `i-N108` item 2, `i-N110` itens 1 e 6, `i-N99` item 2.
> **Ancoras lidas em:** HEAD `6bd3b69` («docs: a wo0211 conferida e o fecho da conversa KCM 31 (wo0212)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-25; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261125-1854` (apply wo0212) lido inteiro e movido.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.077.506 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `655110990467b68ef47f206d5e79abe5c48ef1c2`; harness inteiro = **141/141**, 19/19 (`C54` verde em v1.166.0; `C28` verde: a linha de SO mais cara 253, combo + SO 7.371/7.600; `C138` verde: CEREBRO base 71.610/72.500, pior 92.864/94.000, sem mudanca). Prova negativa: o `validate.js` novo contra o `index.html` do HEAD → `C140` vermelho («o campo de SO nao tem a opcao CMD e PowerShell»). A arvore foi conferida igual a replica, arquivo por arquivo (sem CR).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

Seis tropecos medidos em merges de vizinhos, numa versao so. (1) O prompt do update e o GUIA mandam a pendencia «colar as Instrucoes no painel» para o STATUS do projeto, nao so para o log. (2) Antes de fechar o merge, toda secao que as skills e o CEREBRO citam pelo nome existe no `meta/`, ou nasce pela WO do merge, ou a citacao sai. (3) O campo de SO ganha «Windows — CMD e PowerShell» (`win-both`), com a regra de todo bloco de terminal declarar para qual foi escrito. (4) Com o Code, o prompt da a saida para a ponte que recusa gravar em `.claude/`. (5) O README do projeto novo, o botao ↓ e o GUIA avisam que projeto existente usa o pacote de atualizacao. (6) O painel de saida ganha a aba `GUIA-DO-KIT.md` (mostrar, copiar, baixar), por uma tabela `OUT_TABS`. `C140` novo; o shim do harness ganha cinco nomes, os dois novos guardados por `typeof` para o harness ainda carregar o `index.html` antigo. Registro: CHANGELOG, STATUS (o hash da wo0212 e esta WO), DECISIONS (`D-206`), IDEAS (a `i-N111` nova; quatro titulos fechados; duas linhas do livro de leitura) e o log de 25/11. **As Instrucoes da casa nao mudam:** nada a recolar no painel.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | as seis mudancas; KIT_VERSION 1.166.0 | 40 / 21 | crlf | `2f0b6c3725e357015652877c83f687ec8459b1d0` |
| `validate.js` | `C140` novo; o shim | 39 / 1 | crlf | `0beb65f14c46937c3d660f438048ded82c1af7f2` |
| `meta/CHANGELOG.md` | v1.166.0 | 11 / 1 | lf | `6caf7e13787c1058b902b2c0f62cd37a5fad691c` |
| `meta/DECISIONS.md` | `D-206` | 10 / 0 | crlf | `5c67b57c703c86b0344959c79e13b2ccd88a5078` |
| `meta/IDEAS.md` | `i-N111`; os titulos da `i-N108`, `i-N109`, `i-N110`, `i-N99`; o livro de leitura | 9 / 6 | lf | `80e7386f80d79a952ef4f6b89d4058c70ca4bd79` |
| `meta/STATUS.md` | carimbo v1.166.0; hash da wo0212; bullet desta WO | 4 / 2 | lf | `433f89d694f3fc8f496402559078e1b61a811aa4` |
| `logs/2026-11-25.md` | a KCM 32 | 6 / 0 | lf | `8eafce714bb4fc9e2fedc0e39bad857368ac2d2a` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.077.506 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `6bd3b69`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261125-wo0213-sobras-do-update.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` = a coluna + / − (119 acrescentadas, 31 removidas). Diferente: PARE.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0` nos docs).
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `655110990467b68ef47f206d5e79abe5c48ef1c2`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **141/141**. Registre cruas as linhas do `C140`, do `C28`, do `C138` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; `git diff --cached --stat` com os nove caminhos (confira contra o inventario: no Windows, caminho com a caixa errada nao entra); commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-25.md index.html meta/workorders/261125-wo0213-sobras-do-update.md
git commit -m "feat(kit): as sobras do update - painel no STATUS, citacoes conferidas, terminal duplo, ponte sem .claude, projeto novo avisado, GUIA no painel; C140 (wo0213, D-206, v1.166.0)"
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS nem o log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0213.txt` (`date +%y%m%d-%H%M`, rodado na hora).
