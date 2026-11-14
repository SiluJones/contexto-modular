# WO 0167 — musica gerada por IA: o Suno no nicho Musica, copiado do Cancioneiro com carimbo (C119, v1.141.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.141.0** (`D-179`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `e7486cc`, `main` = `origin/main`; harness em 19/19 · 119/119 · 0 erros, v1.140.0.
> **Base:** o pedido do dono em 2026-11-14 («aceito as recomendacoes de voces dois ao que vc concordar, entao prossiga»), com a carta 04 do Cancioneiro (as tres respostas e as recomendacoes).
> **Ancoras lidas em:** HEAD `e7486cc` («feat(kit): tres defeitos do toolchain - secao do ASU so com o ASU, log por dia no README, a parada grava o relatorio; C118 (wo0166, D-178, v1.140.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-14; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261114-1127` (apply wo0166) e a carta `261114-cancioneiro-para-kcm-04` lidos inteiros e movidos para `../notas-arquivadas/`. **Fonte das copias:** o repo do Cancioneiro em `110e0ba` (a WO 0039 deles), arvore limpa, os quatro arquivos em LF.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os nove arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **989.147 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `5404ca5b823b38c89ca15d017d8ad75758cd935c`; harness inteiro = **120/120**, 19/19 nichos. Tres provas negativas do `C119`, as tres vermelhas e restauradas: um byte mudado na `macetes-suno` copiada → «macetes-suno: o carimbo nao bate com o texto copiado»; a Parte 1 fora das Instrucoes → «as Instrucoes sem a Parte 1 do bloco»; a variante ligada sem o campo → «com Producao Tocada a variante nao deveria mudar o nicho». O harness inteiro achou o `C15` vermelho pelo `meta/specs/` do prompt-modelo copiado; o `C15` conta agora so fora das copias, e a prova negativa na prosa do kit segue vermelha.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A analise `261114` decidida pelo dono com a recomendacao do Cancioneiro: o nicho Musica ganha o campo «Producao» (Tocada · Gerada por IA (Suno)) e, com o Suno, o bloco, as duas skills e o prompt-modelo do Cancioneiro copiados byte a byte do `110e0ba` deles, com carimbo (commit, data, sha1); do lado do KCM, o FAIXAS e o LOG-TEMPLATE com o Suno, o gatilho do relato do dono e o prompt da faixa. O mecanismo e generico: `variantes` no modulo e `nicheEfetivo` no gerador. `C119` novo; o `C15` desconta o texto copiado. CHANGELOG, STATUS, DECISIONS (`D-179`), IDEAS (`i-N25` e `i-N84` item 1 resolvidos; o livro de leitura), a analise decidida e o log de 14/11. O aviso de lido da carta 04 fica na pasta-pai do Cancioneiro.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | `nicheEfetivo` e o `getCurrentNiche` que o usa; as linhas extras nas Instrucoes e no CEREBRO; o titulo das skills; a skill copiada byte a byte; `KIT_VERSION` 1.141.0 | 34 / 3 | crlf | `70abd2d81cd2e15d5e6feb02c04b5f4d9ae47f39` |
| `src/niches/music.js` | o campo «Producao» e a variante Suno (as copias do Cancioneiro com carimbo; o FAIXAS, o LOG, o gatilho e o prompt) | 30 / 1 | lf | `57e9b2e88fb4f1564bb0c37ba90a87b05c763c19` |
| `validate.js` | `C119`; o `nicheEfetivo` no SHIM; o `C15` sem contar as copias | 62 / 2 | crlf | `a9f82d3205eaa23d598157e05cebb19cfff84c4c` |
| `meta/CHANGELOG.md` | v1.141.0 | 9 / 1 | lf | `089762cc4d08a93bfb3290ac60babb5b2261875e` |
| `meta/DECISIONS.md` | `D-179` | 8 / 0 | crlf | `3c92950bfe18a0983a104afafe0db6a1e7393607` |
| `meta/IDEAS.md` | `i-N25` e `i-N84` item 1 resolvidos; a linha do Cancioneiro e uma entrada no livro | 7 / 3 | lf | `072e2fcab62ccd9529c302d000ecb5f40ca6a867` |
| `meta/STATUS.md` | carimbo v1.141.0 · 120/120 + C119; hash da wo0166; bullet desta WO | 4 / 2 | lf | `8b3a21ff2bbdbbd1ed016bdba4a4e0bbc6c9ffcd` |
| `meta/analises/261114-ANALISE-musica-gerada-por-ia.md` | Status «Decidida» e a `D-179` | 2 / 2 | lf | `9b2c2f1f1b1d852fbf7c90f8f7859d25c31d20c7` |
| `logs/2026-11-14.md` | a continuacao da conversa | 13 / 0 | lf | `12977ed2bbdcacde5fe5a50b377d29106f182abe` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **989.147 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`; o aviso `261114-kcm-leu-04.md`, na pasta-pai do Cancioneiro. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `e7486cc`. Diferente: PARE.
2. `git status --short` = exatamente os nove ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261114-wo0167-musica-com-suno.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos nove = os do inventario, e `git diff --numstat` = a coluna + / − (169 acrescentadas, 14 removidas). Diferente: PARE.
4. Leia o diff inteiro. As linhas longas do `music.js` sao os textos copiados do Cancioneiro, em strings JSON: confira que comecam e terminam onde a WO diz, sem precisar ler cada byte — o `C119` confere o sha1.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `5404ca5b823b38c89ca15d017d8ad75758cd935c`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **120/120**. Registre cruas as linhas do `C119`, do `C15` e do `C54`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html src/niches/music.js validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261114-ANALISE-musica-gerada-por-ia.md logs/2026-11-14.md index.html meta/workorders/261114-wo0167-musica-com-suno.md
```

```
git commit -m "feat(kit): musica gerada por IA - o Suno no nicho Musica, copiado do Cancioneiro com carimbo; variante por campo; C119 (wo0167, D-179, v1.141.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0167.txt` (`date +%y%m%d-%H%M`, rodado na hora).
