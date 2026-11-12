# WO 0162 — o que o gerador nao sabe nao sai como placeholder de preencher (C115, v1.137.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.137.0** (`D-176`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `e2800b4`, `main` = `origin/main`; harness em 19/19 · 115/115 · 0 erros, v1.136.0.
> **Base:** o pedido do dono em 2026-11-11 («faca a WO do placeholder»), confirmado em 2026-11-12 («termine a wo0162»).
> **Ancoras lidas em:** HEAD `e2800b4` («docs(meta): a carta 11 ao Mapoteca sobre o metodo C e o livro de leitura (wo0161)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-11 e de novo em 2026-11-12, depois de a ponte reconectar; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261111-2032` (apply wo0161) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os sete arquivos por cima e uma copia do `node_modules` do dono: `node build.js` = **945.254 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `6e2d55c33ef6a78fe6464449793f2a8e54839ad6`; harness inteiro = **116/116**, 19/19 nichos. Quatro provas negativas do `C115`, cada uma vermelha com o seu conserto desfeito: `# Projeto: [NOME]` de volta → «vaza «[NOME]»»; o titulo antigo do CLAUDE.md → «dev (CLAUDE.md…): vaza «<NOME DO PROJETO>»»; a frase antiga do idioma → «vaza «em o idioma escolhido»»; o build para todo nicho → «design: nicho sem codigo recebeu o build de exemplo no CLAUDE.md».
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Dois projetos reais (Album-Referencias, `i-N84` item 1; Negocios e Licitacoes, `i-N88` item 2 — reproduzido no pacote v1.136.0 gerado na pasta-pai deles) receberam `# Projeto: [NOME]` nas Instrucoes e `# <NOME DO PROJETO>` no CLAUDE.md, e o segundo um build de exemplo num repositorio so de documentos. Sem nome, os titulos dizem o que o gerador sabe; idioma «Outro» sem «em o idioma escolhido»; nicho sem codigo (16 de 19) valida pelo `git diff`. `C115` novo; o `G7` aceita o titulo novo. CHANGELOG, STATUS, DECISIONS (`D-176`), IDEAS e o log de 12/11, novo. Leva tambem, so versionada, a analise de kit `261112-ANALISE-narrative-e-game.md` (Aberta, aguarda o dono).

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | titulo sem `[NOME]`; idioma «Outro»; CLAUDE.md sem `<NOME DO PROJETO>` e sem build em nicho sem codigo; `KIT_VERSION` 1.137.0 | 19 / 7 | crlf | `c2d3d9acbd678d8cc9906aa05e3d12279f2c7bce` |
| `validate.js` | `C115`; `G7` com o titulo novo | 36 / 2 | crlf | `bcf6bbd599cb260358f107a3f878e37afda70f8e` |
| `meta/CHANGELOG.md` | v1.137.0 | 8 / 1 | lf | `c92b3b85170cd8cc1801cf76d86fd677f0d8e9e6` |
| `meta/DECISIONS.md` | `D-176` | 8 / 0 | crlf | `6aee58c5730bc70aab61daea4c56a61cfb3ea11e` |
| `meta/IDEAS.md` | `i-N88` item 2 resolvido | 1 / 1 | lf | `089ecbfc1579310bf6948374d7cb115d11f07a7d` |
| `meta/STATUS.md` | carimbo v1.137.0 · 116/116 + C115; hash da wo0161; bullet desta WO | 4 / 2 | lf | `36e25ac032ca8546358ff63fe3f59ea18a4989ef` |
| `logs/2026-11-12.md` | novo (nao rastreado) | 14 linhas (`wc -l`) | lf | `34c3727e9910103b863a6c3b0e0b3d0b81642fc7` |
| `meta/analises/261112-ANALISE-narrative-e-game.md` | novo (nao rastreado): a analise de kit de `narrative` e `game`, so versionada — nao muda codigo | 69 linhas (`wc -l`) | lf | `9d10e5ac342fe29ed383821220ba949afe2e9ea8` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **945.254 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `e2800b4`. Diferente: PARE.
2. `git status --short` = exatamente os seis ` M` do inventario, `?? .claude/launch.json`, `?? logs/2026-11-12.md`, `?? meta/analises/261112-ANALISE-narrative-e-game.md` e `?? meta/workorders/261112-wo0162-placeholder-que-vaza.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario; `git diff --numstat` = a coluna + / − dos seis rastreados (76 acrescentadas, 13 removidas); `wc -l` do log = 14 e da analise = 69. Diferente: PARE.
4. Leia o diff inteiro, o log novo e a analise.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `6e2d55c33ef6a78fe6464449793f2a8e54839ad6`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **116/116**. Registre cruas as linhas do `C115`, do `G7` e do `C54`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-12.md meta/analises/261112-ANALISE-narrative-e-game.md index.html meta/workorders/261112-wo0162-placeholder-que-vaza.md
```

```
git commit -m "feat(kit): o que o gerador nao sabe nao sai como placeholder - C115, titulo sem [NOME], nicho sem codigo valida pelo git diff (wo0162, D-176, v1.137.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0162.txt` (`date +%y%m%d-%H%M`, rodado na hora).
