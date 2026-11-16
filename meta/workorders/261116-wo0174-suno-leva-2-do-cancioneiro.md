# WO 0174 — o Suno na leva 2 do Cancioneiro: a copia do commit 94235bd deles, o v6 e quatro skills (C119, v1.145.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.145.0** (`D-183`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `91a4a99`, `main` = `origin/main`; harness em 19/19 · 123/123 · 0 erros, v1.144.0.
> **Base:** as cartas 05 e 06 do Cancioneiro e o pedido do dono em 2026-11-16 («faca a WO da copia do Cancioneiro (cartas 05 e 06)»); a `D-179`.
> **Ancoras lidas em:** HEAD `91a4a99` («feat(kit): o nicho dev - ... C122 (wo0173, D-182, v1.144.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-16; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261116-1021` (apply wo0173) lido inteiro e arquivado; as cartas 05, 06 e 07 lidas inteiras (05 e 06 arquivadas; a 07 fica). **Fonte da copia:** o repo do Cancioneiro no commit `94235bd` («docs: leva 2 do kit v2 no kit»), lido com `git show 94235bd:<caminho>` — a arvore deles tinha a `macetes-suno` mudada pela WO 0045, sem commit, e nao foi usada.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.015.096 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `aa02f40d28ad06df746c54199c84404fab241c15`; harness inteiro = **123/123**, 19/19 nichos. Os sha1 dos textos copiados (Parte 2 `aee74ce`, `macetes-suno` `f6fce0a`, `revisar-faixa` `9bed970`, `escrever-letra-suno` `7399869`, `conceber-album` `1128d15`) conferem com o `sha1sum` dos arquivos no commit deles, e o `C119` os recalcula. Duas provas negativas, vermelhas e restauradas (conferido por `cmp`): um byte mudado na `escrever-letra-suno` → «o carimbo nao bate com o texto copiado»; a `conceber-album` renomeada → «as skills do pacote nao sao as quatro do Cancioneiro».
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A variante Suno do nicho Musica passa do `110e0ba` ao `94235bd` do Cancioneiro: a Parte 2 do `BLOCO-SUNO.md` (o «Ciclo de uma faixa» cita as skills novas), a `macetes-suno` (o v6) e a `revisar-faixa`, com o carimbo novo; e duas skills novas, `escrever-letra-suno` e `conceber-album` — quatro no `skillsPack`. A Parte 1 e o prompt-modelo nao mudaram (o script da copia confere). `C119` com as quatro. CHANGELOG, STATUS (o hash da wo0173 e esta WO), DECISIONS (`D-183`), IDEAS (as cartas 06 e 07 no livro) e o log de 16/11. O aviso de lido fica na pasta-pai do Cancioneiro.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/niches/music.js` | a Parte 2, a `macetes-suno` e a `revisar-faixa` com o carimbo novo; as duas skills novas; a `origem`; «Quatro skills» | 9 / 6 | lf | `e10b264a0f16d4049b70463740e17b3432a64004` |
| `src/index.template.html` | `KIT_VERSION` 1.145.0 | 1 / 1 | crlf | `52fd3ae9276a83a1b69559ed5b4f246b26882758` |
| `validate.js` | o `C119` com as quatro skills | 1 / 1 | crlf | `bee0fba5de7509644ad3ebe546871422046c64c3` |
| `meta/CHANGELOG.md` | v1.145.0 | 8 / 1 | lf | `b53287f4398820c2709e21f262c04f870fd83737` |
| `meta/DECISIONS.md` | `D-183` | 8 / 0 | crlf | `1b623c3b989dece7b62d85ad3af62e9fd8f9c52a` |
| `meta/IDEAS.md` | a carta 06 feita e a carta 07 no livro | 1 / 1 | lf | `865d3679d56326168abce2617859663a6407e4ef` |
| `meta/STATUS.md` | carimbo v1.145.0; hash e custo da wo0173; bullet desta WO | 4 / 2 | lf | `8e95add0460e908dc3d169d54293f941d3ac903a` |
| `logs/2026-11-16.md` | a continuacao da conversa | 13 / 0 | lf | `78fe84906a1486c0ea55658d50a567e59b7a8b6e` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.015.096 bytes** e o `sha1sum` sem CR acima). Fora do repo (nao versionar): o aviso `261116-kcm-leu-05-06-07.md`, na pasta-pai do Cancioneiro. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `91a4a99`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261116-wo0174-suno-leva-2-do-cancioneiro.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` = a coluna + / − (45 acrescentadas, 12 removidas). Diferente: PARE.
4. Leia o diff inteiro. As linhas longas do `music.js` sao os textos copiados, em strings JSON: confira que comecam e terminam onde a WO diz, sem ler cada byte — o `C119` confere o sha1.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `aa02f40d28ad06df746c54199c84404fab241c15`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **123/123**. Registre cruas as linhas do `C119`, do `C15`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/niches/music.js src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-16.md index.html meta/workorders/261116-wo0174-suno-leva-2-do-cancioneiro.md
```

```
git commit -m "feat(kit): o Suno na leva 2 do Cancioneiro - a copia do 94235bd deles, o v6 e quatro skills; C119 (wo0174, D-183, v1.145.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0174.txt` (`date +%y%m%d-%H%M`, rodado na hora).
