# WO 0176 — a carta 07 do Cancioneiro: a macetes-suno do commit e13b9d9 deles, com a palavra de andamento (v1.146.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + doc. Corta a **v1.146.0** (`D-158`). Sem DEC nova: aplica a `D-179` pelo procedimento da `D-183`.
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `b079d6b`, `main` = `origin/main`; harness em 19/19 · 123/123 · 0 erros, v1.145.0.
> **Base:** a carta 07 do Cancioneiro e o pedido do dono em 2026-11-16 («siga com a copia da carta 07 do Cancioneiro»).
> **Ancoras lidas em:** HEAD `b079d6b` («docs(meta): fecho da conversa KCM 26 ... (wo0175)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-16; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261116-1113` (apply wo0175) lido inteiro. **Fonte da copia:** o repo do Cancioneiro no commit `e13b9d9` («docs: i-029 fechada ...»), lido com `git show e13b9d9:kit-musica/skills/macetes-suno/SKILL.md`; `git log 94235bd..HEAD -- kit-musica` deles = so o `e13b9d9`, e `git diff --stat` = so esse arquivo (+4 −1). Os outros cinco textos copiados tem o mesmo sha1 no `94235bd` e no `e13b9d9`.
> **Verificado pelo chat:** replica do HEAD com os seis arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.015.580 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `370f587f320aaa0cbe5094d43d3151ea29558134`; harness inteiro = **123/123**, 19/19 nichos. O sha1 do texto copiado (`6d756b806349c28d65ef30ea18a6616f5de6cfab`) confere com o `sha1sum` do arquivo no commit deles, e o `C119` o recalcula. Prova negativa, vermelha e restaurada (conferido por `cmp`): «com 70» trocado por «com 71» na `macetes-suno` → «macetes-suno: o carimbo nao bate com o texto copiado, ou nao sai na skill».
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A WO 0045 do Cancioneiro (a i-029 deles) acrescentou uma linha a `macetes-suno` §5: a palavra de andamento acompanha o numero; ao mudar o BPM, reveja a palavra; «fast» e «slow» do canto ou do arranjo nao sao andamento. A carta 07 pediu a copia depois do commit. So o texto que muda troca de carimbo (commit `e13b9d9`, sha1 novo); a Parte 2 e as outras tres skills seguem no `94235bd`, e o prompt-modelo no `110e0ba`, como na wo0174. Registro: CHANGELOG, STATUS (o hash da wo0175 e esta WO), IDEAS (a carta 07 feita; a linha do Cancioneiro no livro de leitura) e o log de 16/11. O aviso fica na pasta-pai do Cancioneiro.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/niches/music.js` | o texto da `macetes-suno` (o cabecalho e a linha da §5) e o carimbo dela; o comentario da variante | 3 / 2 | lf | `0d61834fa7accee59caaf42620626a32fbea4201` |
| `src/index.template.html` | `KIT_VERSION` 1.146.0 | 1 / 1 | crlf | `964b5a7c6515df470285bbe4da7fb75bc8ee01c5` |
| `meta/CHANGELOG.md` | v1.146.0 | 7 / 1 | lf | `6903e0526e3fbfb95d4dc153cebc9908078443ce` |
| `meta/STATUS.md` | carimbo v1.146.0; hash e custo da wo0175; bullet desta WO | 3 / 2 | lf | `e160f7a8397df83f280d5b0f3aa010ba7f59cafc` |
| `meta/IDEAS.md` | a carta 07 feita; a linha do Cancioneiro no livro de leitura | 2 / 2 | lf | `01bfed0ca0425fcf00cac8f07bbba6387ab759cc` |
| `logs/2026-11-16.md` | a conversa 2 (KCM 27) | 12 / 0 | lf | `36466a7e8707a768188ad71b32254864e24ea857` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.015.580 bytes** e o `sha1sum` sem CR acima). Fora do repo (nao versionar): o aviso `261116-kcm-copiou-07.md`, na pasta-pai do Cancioneiro. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `b079d6b`. Diferente: PARE.
2. `git status --short` = exatamente os seis ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261116-wo0176-carta-07-do-cancioneiro.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos seis = os do inventario, e `git diff --numstat` = a coluna + / − (28 acrescentadas, 8 removidas). Diferente: PARE.
4. Leia o diff inteiro. A linha longa do `music.js` e o texto copiado, numa string JSON: confira que so o cabecalho («a palavra de andamento (§5) em 2026-11-16»), a linha nova da §5 e o carimbo mudam — o `C119` confere o sha1.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `370f587f320aaa0cbe5094d43d3151ea29558134`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **123/123**. Registre cruas as linhas do `C119`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/niches/music.js src/index.template.html meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md logs/2026-11-16.md index.html meta/workorders/261116-wo0176-carta-07-do-cancioneiro.md
```

```
git commit -m "feat(kit): a carta 07 do Cancioneiro - a macetes-suno do e13b9d9 deles, com a palavra de andamento (wo0176, v1.146.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0176.txt` (`date +%y%m%d-%H%M`, rodado na hora).
