# WO 0164 — a WO B da analise 261112: a incubadora (PREMISSAS, PROTOTIPOS) e o escopo que vence a entrega (C117, v1.139.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.139.0** (`D-177`, a mesma decisao da wo0163).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `f43370d`, `main` = `origin/main`; harness em 19/19 · 117/117 · 0 erros, v1.138.0.
> **Base:** o pedido do dono em 2026-11-14 («siga com a WO B»).
> **Ancoras lidas em:** HEAD `f43370d` («feat(kit): narrative e game pelo que os projetos parados ensinaram - concepcao, VOZ provisorio, invariantes de feel, DEC num lugar so, fim do IDEAS; C116 (wo0163, D-177, v1.138.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-14; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261114-0932` (apply wo0163) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os nove arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **951.343 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `3e5989d837af2a9fd29ae04dfafc1558ce6095e4`; harness inteiro = **118/118**, 19/19 nichos. Quatro provas negativas do `C117`, as quatro vermelhas e restauradas: `PREMISSAS.md` como `ctx` → «narrative: sem o PREMISSAS.md opcional da incubadora»; o gatilho do `game` renomeado → «game: sem o gatilho da incubacao na tabela»; a frase sem o grifo → «dev: o CEREBRO nao diz que a restricao de escopo vence a entrega»; o fecho do `PREMISSAS.md` ligado → «narrative: o PREMISSAS.md deveria estar no fecho e desligado por padrao». O `C28` fica em 5.985/6.900 no pior nicho (era 5.829); o `C107` em 177 papeis curtos.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A WO B da analise `261112` (N1 (b) e N3 (b), decididos pelo dono em 14/11): o projeto que ainda escolhe a obra ganha `PREMISSAS.md` (`narrative`) e `PROTOTIPOS.md` (`game`), opcionais e desligados no fecho, e o gatilho «Projeto em incubacao», que deixa os arquivos da obra no molde ate a escolha; e o principio do pedido composto diz, no CEREBRO, que a restricao de escopo vence a entrega que a contradiz. `C117` novo. De passagem, a indentacao de duas linhas de gatilho que a wo0163 deixou com 2 espacos (o achado do relatorio dela). CHANGELOG, STATUS, IDEAS (`i-N83`, `i-N86`, `i-N87`), a analise e o log de 14/11.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | a clausula do escopo no pedido composto; `KIT_VERSION` 1.139.0 | 2 / 2 | crlf | `c5f2e5006ab7f819b3872ef6033b95f50260e45a` |
| `src/niches/narrative.js` | `PREMISSAS.md`, o gatilho e a linha do fecho; a indentacao | 26 / 1 | lf | `e387e1e5c75e02a83b832b2f7770a080008c3398` |
| `src/niches/game.js` | `PROTOTIPOS.md`, o gatilho e a linha do fecho; a indentacao | 25 / 1 | lf | `179a78698631ee53d5665ceed2b1a6c799978a1b` |
| `validate.js` | `C117` | 27 / 0 | crlf | `f571a9a200075a69ae0086d4a5c230d79d493bdc` |
| `meta/CHANGELOG.md` | v1.139.0 | 8 / 1 | lf | `1d00ba58e795b653294cafad821436ffce3a08ef` |
| `meta/IDEAS.md` | os titulos da `i-N83`, `i-N86` e `i-N87` com o que resolveu | 3 / 3 | lf | `007b325b2a6742377edd0341a67a98849bf8c4da` |
| `meta/STATUS.md` | carimbo v1.139.0 · 118/118 + C117; hash da wo0163; bullet desta WO | 4 / 2 | lf | `5669962330ae464c9b0edb4750a055f89c3bce68` |
| `meta/analises/261112-ANALISE-narrative-e-game.md` | o Status com as duas WOs | 1 / 1 | lf | `d7f1791e77cac2fa149549c812d15e859b5a2b0c` |
| `logs/2026-11-14.md` | a continuacao da conversa | 11 / 0 | lf | `4531ee207c4765367ab325d5322e3b7deeb42db8` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **951.343 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `f43370d`. Diferente: PARE.
2. `git status --short` = exatamente os nove ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261114-wo0164-incubadora-e-escopo.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos nove = os do inventario, e `git diff --numstat` = a coluna + / − (107 acrescentadas, 11 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `3e5989d837af2a9fd29ae04dfafc1558ce6095e4`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **118/118**. Registre cruas as linhas do `C117`, do `C28` e do `C54`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html src/niches/narrative.js src/niches/game.js validate.js meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md meta/analises/261112-ANALISE-narrative-e-game.md logs/2026-11-14.md index.html meta/workorders/261114-wo0164-incubadora-e-escopo.md
```

```
git commit -m "feat(kit): a incubadora no narrative e no game e o escopo que vence a entrega - C117 (wo0164, D-177, v1.139.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0164.txt` (`date +%y%m%d-%H%M`, rodado na hora).
