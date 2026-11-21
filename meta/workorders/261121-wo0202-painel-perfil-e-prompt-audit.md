# WO 0202 — o update olha o painel e o perfil do pacote, e o kit do Code indica o /doctor prompt-audit (v1.161.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o que o kit gera) + harness + doc. Corta a **v1.161.0** (`D-200`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `679bc60`, `main` = `origin/main`; harness em 19/19 · 134/134 · 0 erros, v1.160.1.
> **Base:** o pedido do dono de 21/11 (12h15): «faca a WO de kit com os itens 1 e 2 da i-N106 e a i-N100»; o feedback da Carreira de 20/11 (`i-N106`); as capturas do dono de 18/11 (`i-N100` item 2), com o comando conferido em 21/11 (Claude Code 2.1.283, 25/09/2026).
> **Ancoras lidas em:** HEAD `679bc60` («docs: a wo0200 conferida, a Carreira relida (6 WOs de conferencia) e tres itens ao kit; i-N106 (wo0201)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-21; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261121-1214` (apply wo0201) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.066.483 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `7198f6a04bd9eaceafd1f4be54fb2a579e847a80`; harness inteiro = **135/135**, 19/19 (`C54` verde em v1.161.0). Prova negativa vermelha e restaurada: sem o paragrafo do painel no prompt → `C134` («o prompt do update nao olha o painel»).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

(1) O prompt do update, logo depois da versao, diz que o painel e superficie: pede o texto colado, varre as revogadas nele, e o merge so fecha com as Instrucoes recoladas; o GUIA (secao do update) diz o mesmo. (2) `perfilDoPacote(niche)` e a secao «Perfil com que o pacote foi gerado» no manifesto (barra e modal, bloco do nicho, SO); o prompt passa de «duas» para «tres» coisas que a comparacao nao produz. (3) O `CLAUDE.md` do kit do Code ganha «Auditoria das instrucoes» (`/doctor prompt-audit .`). `C134` novo; o shim expoe `perfilDoPacote`. Registro: CHANGELOG, STATUS (o hash da wo0201 e esta WO), DECISIONS (`D-200`), IDEAS (`i-N106` itens 1 e 2 e `i-N100` item 2 resolvidos) e o log de 21/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o painel, o perfil, o prompt-audit; KIT_VERSION 1.161.0 | 49 / 3 | crlf | `8a03ca696e17b415a0b487d491df807949497e62` |
| `validate.js` | `C134` novo; o shim | 30 / 1 | crlf | `534fc90e03508cae3bd928bbc308ce3d69474a3c` |
| `meta/CHANGELOG.md` | v1.161.0 | 7 / 1 | lf | `ecd7f63740de101bc7e1a2249d160cda1cdd7dcc` |
| `meta/DECISIONS.md` | `D-200` | 10 / 0 | crlf | `af9ecf36c67a6e09fb2fefae40ba32dd7560e969` |
| `meta/IDEAS.md` | `i-N106` e `i-N100` marcadas | 2 / 2 | lf | `e184ce1cc33a62e6bbe49593c099dc10434332fc` |
| `meta/STATUS.md` | carimbo v1.161.0; hash da wo0201; bullet desta WO | 4 / 2 | lf | `97af76e95841deb654bde4424fdc522a6ee14dd7` |
| `logs/2026-11-21.md` | a wo0201 conferida e esta WO | 6 / 0 | lf | `efc742b7d78d891a1aee9b30d2c2451e6390f57f` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.066.483 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `679bc60`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261121-wo0202-painel-perfil-e-prompt-audit.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` = a coluna + / − (108 acrescentadas, 9 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `7198f6a04bd9eaceafd1f4be54fb2a579e847a80`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **135/135**. Registre cruas as linhas do `C134` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-21.md index.html meta/workorders/261121-wo0202-painel-perfil-e-prompt-audit.md
```

```
git commit -m "feat(kit): o update olha o painel e o perfil do pacote, e o kit do Code indica o /doctor prompt-audit; C134 (wo0202, D-200, v1.161.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0202.txt` (`date +%y%m%d-%H%M`, rodado na hora).
