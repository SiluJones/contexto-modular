# WO 0183 — o update atrasado e o DECISIONS: um conjunto de Status, a resposta esperada por arquivo, as skills antes da WO, quatro crases e o prompt C sem molde a preencher (C125, v1.149.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.149.0** (`D-186`). A WO B da leva de novembro (analise `261117`, `D-185`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `2c34828`, `main` = `origin/main`; harness em 19/19 · 125/125 · 0 erros, v1.148.0.
> **Base:** a `D-185` (tres WOs; esta e a K2) e o pedido do dono em 2026-11-18 («aplicada, relatorio na pasta-pai» — a WO B era o proximo passo combinado).
> **Ancoras lidas em:** HEAD `2c34828` («feat(kit): o trabalho por encomenda ... (wo0182, D-185, v1.148.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-18; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261118-0106` (apply wo0182) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os 26 arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.027.747 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `b3ccbf24372e324143084a916ea65f358aef715e`; harness inteiro = **126/126**, 19/19 (`C54` verde; `C28` sem mudanca). Duas provas negativas do `C125`, vermelhas e restauradas (conferido por `cmp`): o molde do `rpg` de volta a `aceita | superada por DEC-X` → «rpg: o molde do DECISIONS nao traz o conjunto de Status»; o prompt C sem o filtro → «o prompt C manda preencher molde: SPEC.md, …». A base do CEREBRO cresce **226 bytes** (o `custom`, 96.096 → 96.322); na leva, 1.166 dos 1.500.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

(1) O DECISIONS tinha tres conjuntos de Status — o da higiene do CEREBRO, `aceita | superada por DEC-X` em 13 moldes e `ativa | revista por DEC-X` em 4; o `career` nao tinha Status. Fica um so, nos 18 moldes e na higiene, e a higiene passa a dizer que a FIX fica enquanto a licao valer (tres vizinhos e o KCM, `i-N75` item 1); par novo no `C111`. (2) O manifesto do pacote ganha a coluna «Resposta esperada» por arquivo (`i-N76` item 2). (3) Com o Code, o prompt do update manda instalar as skills do pacote antes de qualquer WO (`i-N80` item 8). (4) O molde de WO usa cerca de quatro crases, e a `apply-wo` delimita por ela (`i-N76` item 3). (5) O prompt C nao manda preencher molde nem opcional (`i-N85` item 3, `i-N91` item 9). `C125` novo. Registro: CHANGELOG, STATUS (o hash da wo0182 e esta WO), DECISIONS (`D-186`), IDEAS (cinco titulos), a analise e o log de 18/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `logs/2026-11-18.md` | a madrugada da conversa | 13 / 0 | lf | `62601bd8653bdd3831eb3f8773074cc1916a454e` |
| `meta/CHANGELOG.md` | v1.149.0 | 10 / 1 | lf | `efaf67c268a23db951cdd31b42d1dee0bd85511f` |
| `meta/DECISIONS.md` | D-186 | 12 / 0 | crlf | `52269e7cd5310fab5c5ae7b6dd5a93955b0bf181` |
| `meta/IDEAS.md` | cinco titulos (i-N75, i-N76, i-N80, i-N85, i-N91) | 5 / 5 | lf | `6a25158a2c90e448ae04ad4662474cfb8a45ec28` |
| `meta/STATUS.md` | carimbo v1.149.0 e 126; hash e custo da wo0182; bullet desta WO | 3 / 2 | lf | `a29fbfb764ef016da569d87fb154e4c93ff360b4` |
| `meta/analises/261117-ANALISE-a-leva-de-novembro.md` | a linha Vira | 1 / 1 | lf | `a106d73386050c1ec39b24d5c4c765dd6ab3a102` |
| `src/index.template.html` | a higiene; respostaEsperada e a coluna do manifesto; as skills antes da WO; as quatro crases no molde e na apply-wo; o prompt C; KIT_VERSION 1.149.0 | 28 / 12 | crlf | `6ba45968f8be05b095e272dab92bb20e4a609330` |
| `src/niches/animation.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `239af7e9cf59e3afaa8ed9b47ae630b672edb075` |
| `src/niches/brainstorm.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `2e09ea3dcf6ba2ce3cb2f4864742c595dd8490d6` |
| `src/niches/business.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `11e94781fff3c4a60e1310978a5c127710424135` |
| `src/niches/career.js` | o Status no molde do DECISIONS (nao tinha) | 1 / 1 | lf | `c002ec904a9927b444b54af17b5fb40e44cd3201` |
| `src/niches/client.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `336a7c376c0279f9b85f122a26e269383d56865a` |
| `src/niches/comics.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `109922370c63af6fc80c856775310da3fea0842b` |
| `src/niches/cuisine.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `6e1c0489ecad743f280965ad1d2982e15cc4ae0a` |
| `src/niches/custom.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `ca8060015cd3501b75ee7b85825092dcdd4c623f` |
| `src/niches/design.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `35d1ff06396a03c22b4dd1ec478c44551e932e73` |
| `src/niches/dev.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `d903ac76ad5f281f92a225a4e1e60c9fb01b5aa9` |
| `src/niches/game.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `ef0aff0180481ea303b95b0ebd7d2c20a580ac1e` |
| `src/niches/marketing.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `022a06eec868777cfae0e4a323de13586bdab41c` |
| `src/niches/music.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `8d94d9bac255ef9de50db51f3ed71b61442f762e` |
| `src/niches/narrative.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `642a117802bba7bc1be5bf1d96229bd496f33b7a` |
| `src/niches/pixel.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `ca38b6c02f28d5ce920aa10cf37ddd04fc4e9ad9` |
| `src/niches/product.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `0b14c774784576062c3d98906bc8b8b7b5917b7e` |
| `src/niches/research.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `f95ede64390137e8539a6b186cbfb96b2875feee` |
| `src/niches/rpg.js` | o Status do molde do DECISIONS | 1 / 1 | lf | `1f539ad4568d78f70f8cc630eec131011c0d0252` |
| `validate.js` | o par novo no C111; C125 | 38 / 1 | crlf | `9164b15c3685d1c7ff2f05682a13b837ce6883ff` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.027.747 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `2c34828`. Diferente: PARE.
2. `git status --short` = exatamente os 26 ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261118-wo0183-o-update-atrasado-e-o-decisions.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos 26 = os do inventario, e `git diff --numstat` = a coluna + / − (128 acrescentadas, 40 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `b3ccbf24372e324143084a916ea65f358aef715e`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **126/126**. Registre cruas as linhas do `C125`, do `C111` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO (o comando abaixo; `src` so tem arquivos do inventario, conferido no passo 2); commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261117-ANALISE-a-leva-de-novembro.md logs/2026-11-18.md index.html meta/workorders/261118-wo0183-o-update-atrasado-e-o-decisions.md
```

```
git commit -m "feat(kit): o update atrasado e o DECISIONS - um conjunto de Status, a resposta esperada por arquivo, as skills antes da WO, quatro crases, o prompt C sem molde a preencher; C125 (wo0183, D-186, v1.149.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0183.txt` (`date +%y%m%d-%H%M`, rodado na hora).
