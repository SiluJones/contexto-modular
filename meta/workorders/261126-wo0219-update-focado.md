# WO 0219 — o update focado: o tools/pacote-delta.js e o _DELTA.md; C143 (D-211, v1.169.0)

> **Por que WO (D-209):** codigo — `src/`, `validate.js` e um script novo de dev mudam, e o hook roda build + harness, que leva minutos e cuja falha pede conserto.
> **Forma:** conferencia (metodo C, D-170, D-174, D-209) · **Tipo:** codigo (corta a v1.169.0).
> **Config sugerida:** modelo padrao, esforco medio.
> **Pre-requisito:** HEAD = `d6e195c`, `main` = `origin/main`; harness em 19/19 · 143/143 · 0 erros, v1.168.0.
> **Ancoras lidas em:** HEAD `d6e195c` («feat(kit): o metodo C no kit - no canal pasta com o Code o chat grava tudo e a WO so vem quando se paga; C142 (wo0218, D-210, v1.168.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-26; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261126-2103` (apply wo0218) lido inteiro e movido.
> **Verificado pelo chat:** replica do HEAD `d6e195c` com os dez arquivos por cima: `node build.js` → `index.html` **1.091.338 bytes**, `sha1sum` sem CR `5008fa502fe2e412e3e01ae9b2149770ce4c26dd`; `node validate.js index.html` = **19/19 · 144/144 · 0 erros**. Prova negativa: o `validate.js` novo contra o `index.html` do HEAD → so o `C143` vermelho. O script rodado de verdade contra o git do repo: v1.162.0 → v1.168.0 no `narrative` (113 linhas) e v1.130.0 → v1.168.0 no `dev` (422, acima do teto).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio. A pasta `rascunhos/` (ignorada pelo git) nao entra no commit.

## Por que

A analise `261126-ANALISE-o-update-focado.md` (U3, teto de 400 linhas), decidida pelo dono: o `tools/pacote-delta.js` gera o pacote de um vizinho com o `_DELTA.md` — o que mudou entre o pacote da versao do projeto e o de agora, com o mesmo perfil —, e o prompt do update e o GUIA mandam comecar por ele. O CLAUDE.md da casa ganha o comando.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | a linha do `_DELTA.md` no prompt do update e no GUIA; `KIT_VERSION` 1.169.0 | 5 / 1 | crlf | `26bf5d263e6b4716f1a383d9d07cf5a96231c2e5` |
| `validate.js` | `C143` | 28 / 0 | crlf | `ba2ed4a5d8b866bf7a38455b52575367e88d7f0d` |
| `tools/pacote-delta.js` | novo (171 linhas, `wc -l`) | 171 / 0 | lf | `c6f5da3ea77edc0b5f21821ae87e7773423fee8f` |
| `CLAUDE.md` | o comando do delta | 1 / 0 | crlf | `0eb312781e4bd5ba7b28da798bfc6b06978c355f` |
| `meta/CHANGELOG.md` | v1.169.0 | 8 / 1 | lf | `4d34caf2b700c8cadc4bd1ca1d761268272f94d9` |
| `meta/STATUS.md` | a versao e o `C143`; o alarme; o hash da wo0218; o bullet desta WO | 5 / 3 | lf | `e735c0907de2411cd445d2e4c66619d958570c55` |
| `meta/DECISIONS.md` | `D-211` | 10 / 0 | crlf | `96562ec64a4145314aa503605561e221f57f2e80` |
| `meta/IDEAS.md` | `i-N114` resolvida | 1 / 1 | lf | `00e555c10db539d6bc2aa060bc285d81450fe915` |
| `logs/2026-11-26.md` | duas linhas na secao da KCM 33 | 2 / 0 | lf | `98439bc6feb67fd108e7a14b5a8c7eb1e66a296d` |
| `meta/analises/261126-ANALISE-o-update-focado.md` | Status «Implementada» e a `D-211` | 2 / 2 | lf | `f461702e99611af1fdbfb2b8e4e68325552f9855` |

Gerado por voce: `index.html` (1.091.338 bytes, `sha1sum` sem CR `5008fa502fe2e412e3e01ae9b2149770ce4c26dd`). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `d6e195c`. Diferente: PARE.
2. `git status --short -uall` = exatamente os nove ` M` do inventario, `?? .claude/launch.json`, `?? tools/pacote-delta.js` e `?? meta/workorders/261126-wo0219-update-focado.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos dez = os do inventario; `git diff --numstat` dos nove rastreados = a coluna + / − (62 acrescentadas, 8 removidas); `wc -l` do script = 171. Diferente: PARE. Fim de linha por `git ls-files --eol` (o script novo nasce LF).
4. Leia o diff inteiro, sem cortar linha (`git diff --word-diff -U0`), e o script novo inteiro.
5. `node build.js`: `index.html` com 1.091.338 bytes e `tr -d '\r' < index.html | sha1sum` = `5008fa502fe2e412e3e01ae9b2149770ce4c26dd`. `node validate.js index.html` = 19/19 · 144/144 · 0 erros. Diferente: PARE.
6. Rode o script uma vez, so para ver que roda no seu ambiente: `node tools/pacote-delta.js --de 1.162.0 --nicho narrative --code --saida ../_teste-delta-wo0219` — a linha de saida tem de dizer `v1.162.0 (894be99) -> v1.169.0 · narrative · 29 arquivos`. A pasta `../_teste-delta-wo0219` fica na pasta-pai (nao apague: diga no relatorio que ela ficou).
7. `git add` dos caminhos do inventario, do `index.html` e desta WO, copiados do `git status --short -uall`; `git diff --cached --stat` com os doze caminhos, conferidos um a um contra o inventario ANTES do commit; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js tools/pacote-delta.js CLAUDE.md index.html meta/CHANGELOG.md meta/STATUS.md meta/DECISIONS.md meta/IDEAS.md logs/2026-11-26.md meta/analises/261126-ANALISE-o-update-focado.md meta/workorders/261126-wo0219-update-focado.md
git commit -m "feat(kit): o update focado - o tools/pacote-delta.js gera o pacote com o _DELTA.md, so o que mudou desde a versao do projeto; C143 (wo0219, D-211, v1.169.0)"
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Traga a linha de saida do passo 6 crua. Diga se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite doc nenhum. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0219.txt` (`date +%y%m%d-%H%M`, rodado na hora).
