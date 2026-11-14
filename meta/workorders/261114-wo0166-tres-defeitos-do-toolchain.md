# WO 0166 — tres defeitos do toolchain (i-N91): a secao do ASU so com o ASU, o log por dia no README, a parada que grava o relatorio (C118, v1.140.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.140.0** (`D-178`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `d0f9237`, `main` = `origin/main`; harness em 19/19 · 118/118 · 0 erros, v1.139.0.
> **Base:** o pedido do dono em 2026-11-14 («siga com a WO dos tres defeitos da i-N91. Pode ja escrever a carta para o ASU. […] o nicho de musica ja foi refinado […]?»).
> **Ancoras lidas em:** HEAD `d0f9237` («docs(meta): a area Arquiteturas no livro de leitura e a i-N91 - o CDC e o ClearDrop lidos pela primeira vez (wo0165)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-14; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261114-1104` (apply wo0165) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os oito arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **952.264 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `327cf0d2e18c6417e541257dfda4af43a8ff7ef8`; harness inteiro = **119/119**, 19/19 nichos. Tres provas negativas do `C118`, as tres vermelhas e restauradas: o corte desligado → «dev: com o ASU desligado, o IDEAS ainda traz «Feedback para o ASU»»; o README antigo → «o README do pacote ainda diz log por sessao»; a linha da parada tirada → «a skill apply-wo gerada nao manda a parada gravar o relatorio em arquivo». O primeiro corte deixava linha em branco dobrada; o `C118` acusou na replica e foi consertado antes desta WO.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Os tres defeitos que a leitura do CDC e do ClearDrop achou com lastro no `src/` (`i-N91`, itens 1 a 3): sem o ASU, o IDEAS sai sem «Feedback para o ASU» (corte no `effectiveFiles`, para todo download; cinco projetos a apagavam a mao); o README do pacote diz log por dia; e a skill `apply-wo` gerada manda a parada gravar o relatorio em arquivo. `C118` novo; o `C31` exige a secao do ASU so com o ASU ligado. CHANGELOG, STATUS, DECISIONS (`D-178`), IDEAS (`i-N91`, `i-N25`, as cartas ao ASU e ao Cancioneiro no livro) e o log de 14/11. Leva tambem, so versionada, a analise `261114-ANALISE-musica-gerada-por-ia.md` (Aberta, aguarda o dono). As cartas ficam nas pastas-pai do ASU e do Cancioneiro e nao sao versionadas.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | `effectiveFiles` corta a secao do ASU sem o modo; README com log por dia; a parada na `apply-wo`; `KIT_VERSION` 1.140.0 | 11 / 3 | crlf | `549827677f91f2bdd28db2983a6c3084e3df3aeb` |
| `validate.js` | `C118`; o `C31` com o ASU ligado | 32 / 1 | crlf | `6c21cad67f61c3f86ffc933f58db95bfbe51bc38` |
| `meta/CHANGELOG.md` | v1.140.0 | 8 / 1 | lf | `f07b2b7ce9342ecc93bd1b547156d217a8ba62dc` |
| `meta/DECISIONS.md` | `D-178` | 8 / 0 | crlf | `8e9960e811a30345be768b565364f390eacbd3a4` |
| `meta/IDEAS.md` | `i-N91` itens 1 a 3 resolvidos; `i-N25` com a analise; as cartas no livro de leitura | 7 / 2 | lf | `4271cba7f520bdb795e70448c827adfde3994646` |
| `meta/STATUS.md` | carimbo v1.140.0 · 119/119 + C118; hash da wo0165; bullet desta WO | 4 / 2 | lf | `96951aca837c0aad715260cc5e9de1b8bc0a3274` |
| `logs/2026-11-14.md` | a continuacao da conversa | 12 / 0 | lf | `25e9600e2fc9ef4087810ac213f00e3098d6017a` |
| `meta/analises/261114-ANALISE-musica-gerada-por-ia.md` | novo (nao rastreado): a analise da musica com o Suno | 45 linhas (`wc -l`) | lf | `f92257aa705725fcce2809a59aed9c4a261be56e` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **952.264 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`; as cartas ao ASU e ao Cancioneiro, nas pastas-pai deles. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `d0f9237`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json`, `?? meta/analises/261114-ANALISE-musica-gerada-por-ia.md` e `?? meta/workorders/261114-wo0166-tres-defeitos-do-toolchain.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario; `git diff --numstat` = a coluna + / − dos sete rastreados (82 acrescentadas, 9 removidas); `wc -l` da analise = 45. Diferente: PARE.
4. Leia o diff inteiro e a analise.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `327cf0d2e18c6417e541257dfda4af43a8ff7ef8`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **119/119**. Registre cruas as linhas do `C118`, do `C31` e do `C54`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-14.md meta/analises/261114-ANALISE-musica-gerada-por-ia.md index.html meta/workorders/261114-wo0166-tres-defeitos-do-toolchain.md
```

```
git commit -m "feat(kit): tres defeitos do toolchain - secao do ASU so com o ASU, log por dia no README, a parada grava o relatorio; C118 (wo0166, D-178, v1.140.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0166.txt` (`date +%y%m%d-%H%M`, rodado na hora).
