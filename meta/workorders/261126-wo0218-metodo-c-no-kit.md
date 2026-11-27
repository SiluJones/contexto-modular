# WO 0218 — o metodo C no kit: no canal pasta com o Code, o chat grava tudo e a WO so vem quando se paga; C142 (D-210, v1.168.0)

> **Por que WO (D-209):** codigo — `src/` e `validate.js` mudam, e o hook roda build + harness, que leva minutos e cuja falha pede conserto.
> **Forma:** conferencia (metodo C, D-170, D-174, D-209) · **Tipo:** codigo (corta a v1.168.0).
> **Config sugerida:** modelo padrao, esforco medio.
> **Pre-requisito:** HEAD = `5f26eaa`, `main` = `origin/main`; harness em 19/19 · 142/142 · 0 erros, v1.167.0.
> **Ancoras lidas em:** HEAD `5f26eaa` («docs(meta): quando a WO se paga - na casa a WO so de doc vira o bloco do chat; a analise e o alarme no STATUS (wo0217, D-209)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-26; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261126-2009` (apply wo0217) lido inteiro e movido.
> **Verificado pelo chat:** replica do HEAD `5f26eaa` com os oito arquivos por cima: `node build.js` → `index.html` **1.090.438 bytes**, `sha1sum` sem CR `5483e958c85beb533efb4384c1d305f998230f94`; `node validate.js index.html` = **19/19 · 143/143 · 0 erros**. Prova negativa: o `validate.js` novo contra o `index.html` do HEAD → so o `C142` vermelho. Tetos: CEREBRO base 72.140/72.500; pior com pasta + Code 92.960; pior geral 93.246/94.000; `C28` +Code 538/550.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio. A pasta `rascunhos/` (ignorada pelo git) nao entra no commit.

## Por que

A `D-209` (K1): o kit ensina o metodo C no canal pasta com o Code — o teste de quando a WO se paga, um escritor por documento, o alarme permanente, a troca exata tambem sem o Code, o «como» no GUIA, a forma «conferencia» no molde e na `apply-wo` com as licoes do My Little Lady (`i-N111`), e o update que propoe a troca de metodo. O mount fica na forma «edicoes». Junto, a analise do update incremental (`i-N114`), decidida pelo dono no mesmo dia (U3, teto de 400 linhas de diff); a WO do delta vem depois desta.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | a secao do Code, o canal pasta, o fecho, as Instrucoes, o GUIA, o molde, a `apply-wo`, o CLAUDE.md e o settings do kit, o prompt do update; `KIT_VERSION` 1.168.0 | 76 / 12 | crlf | `4716d7b2b335fd7e90d28089e993d60ad2176517` |
| `validate.js` | `C142` | 30 / 0 | crlf | `203ba177d750a7b84753f28c544abd3add9e72aa` |
| `meta/CHANGELOG.md` | v1.168.0 | 11 / 1 | lf | `d6673827f066c69b8ba6c5923e4880c34b115907` |
| `meta/STATUS.md` | a versao e o `C142`; o alarme; o hash da wo0217; o bullet desta WO | 5 / 3 | lf | `77739c978a822a845956d50240e0dcddd09a6c4b` |
| `meta/DECISIONS.md` | `D-210` | 10 / 0 | crlf | `a6794b912cb36998366d40e54fc840b77ba6a04f` |
| `meta/IDEAS.md` | `i-N111` resolvida; `i-N114` com a analise, decidida (U3) | 2 / 2 | lf | `faa84f1e243cf0ed0a00987803de0932e405ebdb` |
| `logs/2026-11-26.md` | quatro linhas na secao da KCM 33 | 4 / 0 | lf | `845a91276dde0927e0583810935fb6e61b05d606` |
| `meta/analises/261126-ANALISE-o-update-focado.md` | nova, decidida pelo dono (U3, teto de 400 linhas); 51 linhas, `wc -l` | 51 / 0 | lf | `bc4bd29cb4056ed1c864cf74711f2ad0d810e873` |

Gerado por voce: `index.html` (1.090.438 bytes, `sha1sum` sem CR `5483e958c85beb533efb4384c1d305f998230f94`). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `5f26eaa`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json`, `?? meta/analises/261126-ANALISE-o-update-focado.md` e `?? meta/workorders/261126-wo0218-metodo-c-no-kit.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario; `git diff --numstat` dos sete rastreados = a coluna + / − (138 acrescentadas, 18 removidas); `wc -l` da analise = 51. Diferente: PARE. Fim de linha por `git ls-files --eol`.
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0`), e a analise nova inteira.
5. `node build.js`: `index.html` com 1.090.438 bytes e `tr -d '\r' < index.html | sha1sum` = `5483e958c85beb533efb4384c1d305f998230f94`. `node validate.js index.html` = 19/19 · 143/143 · 0 erros. Diferente: PARE.
6. `git add` dos caminhos do inventario, do `index.html` e desta WO, copiados do `git status --short`; `git diff --cached --stat` com os dez caminhos, conferidos um a um contra o inventario ANTES do commit; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js index.html meta/CHANGELOG.md meta/STATUS.md meta/DECISIONS.md meta/IDEAS.md logs/2026-11-26.md meta/analises/261126-ANALISE-o-update-focado.md meta/workorders/261126-wo0218-metodo-c-no-kit.md
git commit -m "feat(kit): o metodo C no kit - no canal pasta com o Code o chat grava tudo e a WO so vem quando se paga; C142 (wo0218, D-210, v1.168.0)"
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite doc nenhum. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0218.txt` (`date +%y%m%d-%H%M`, rodado na hora).
