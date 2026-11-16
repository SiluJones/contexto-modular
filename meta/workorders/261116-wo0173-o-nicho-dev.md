# WO 0173 — o nicho dev: a rede de cada projeto e o alvo que nao roda, o SETUP para o humano, tres gatilhos e quatro lugares (C122, v1.144.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.144.0** (`D-182`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `b3a4fb0`, `main` = `origin/main`; harness em 19/19 · 122/122 · 0 erros, v1.143.0.
> **Base:** a WO B da analise `261115-ANALISE-o-nicho-dev.md`, aceita pelo dono em 2026-11-15 («aceito as decisoes como voce recomendar»), e o «siga com a WO B» de 2026-11-16.
> **Ancoras lidas em:** HEAD `b3a4fb0` («feat(kit): o protocolo do kit - as permissoes que as skills pedem, o git sem lock no update, a sobra de modo so sem artefato, o indice do CEREBRO; C121 (wo0172, D-181, v1.143.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-16; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261115-1857` (apply wo0172) lido inteiro e arquivado; a carta `261116-cancioneiro-para-kcm-06-leva-2-no-kit.md` lida inteira (fica na pasta-pai ate a WO da copia, com a 05).
> **Verificado pelo chat:** replica do HEAD com os nove arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **998.133 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `50c88337d27a823ba9078a308b37b0c4c0e827d8`; harness inteiro = **123/123**, 19/19 nichos. Cinco provas negativas do `C122`, as cinco vermelhas e a fonte restaurada (conferida por `cmp`): a rede sem o alvo que nao roda; o SETUP ligado no fecho; o `.gitignore` com o Code sem o `settings.local.json`; um gatilho renomeado; o LOG sem «Entregas». O harness inteiro pegou a primeira redacao: o `C107` barrou os papeis curtos do SETUP e do HISTORY acima de 45 caracteres.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A WO B da analise do `dev`: no `src/niches/dev.js`, a secao «A rede deste projeto» e «README e LICENSE» no CEREBRO (pelo `cerebroExtra`, que o gerador ja lia e nenhum nicho usava), «Build e validacao» no CONTEXT, o `SETUP.md` opcional e desligado no fecho, tres gatilhos, o LOG com «Entregas» e o HISTORY da pesquisa da partida; no gerador, o `.gitignore` com `.claude/settings.local.json` quando o Code esta ligado. `C122` novo. CHANGELOG, STATUS (o hash da wo0172 e esta WO), DECISIONS (`D-182`), a analise implementada, IDEAS (`i-N93` e os itens fechados de carona; a carta 06 no livro) e o log de 16/11.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/niches/dev.js` | `cerebroExtra` (duas secoes); «Build e validacao» no CONTEXT; tres gatilhos; o `SETUP.md` e a saida dele; o LOG com «Entregas»; o HISTORY | 50 / 3 | lf | `eceeff36f7148618c43d1a8d58eb23747f38d1b8` |
| `src/index.template.html` | `structuredGitignore(codeOn)` e as duas chamadas; `KIT_VERSION` 1.144.0 | 6 / 6 | crlf | `8c4c3c89911c892a6d2671b358f7d22cdbbcd438` |
| `validate.js` | `C122` | 35 / 0 | crlf | `8dfcb3dda4979ff7e957fe93b8b4bf38945eff96` |
| `meta/CHANGELOG.md` | v1.144.0 | 10 / 1 | lf | `b622733e2c5016efdfdff60d1534a52905c4d7c6` |
| `meta/DECISIONS.md` | `D-182` | 10 / 0 | crlf | `e9e9282fceaad05701abafd62648b2aeae7b7bc9` |
| `meta/IDEAS.md` | `i-N93` e os fechados de carona; a carta 06 no livro | 5 / 1 | lf | `db2b758146c6008ffb43294b788af4a9b86085d5` |
| `meta/STATUS.md` | carimbo v1.144.0 · 123/123 + C122; hash e custo da wo0172; bullet desta WO | 4 / 2 | lf | `e9e981f62e267e09f1b71bc2256aae3c57ff5625` |
| `meta/analises/261115-ANALISE-o-nicho-dev.md` | Status «Implementada» | 1 / 1 | lf | `c301b904ed5d17b36fafc7933c5f531bf5d1dfe7` |
| `logs/2026-11-16.md` | novo (15 linhas) | 15 / 0 | lf | `5dc0a77029cae02b3ad0e652134bbe60588a000f` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **998.133 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `b3a4fb0`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? logs/2026-11-16.md`, `?? .claude/launch.json` e `?? meta/workorders/261116-wo0173-o-nicho-dev.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos nove = os do inventario; `git diff --numstat` dos oito rastreados = a coluna + / − (121 acrescentadas, 14 removidas); o log tem 15 linhas (`wc -l`). Diferente: PARE.
4. Leia o diff inteiro e o log novo. No `dev.js`, as duas secoes do `cerebroExtra` sao template literals com as crases internas escapadas (`\``), como os `content` vizinhos.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `50c88337d27a823ba9078a308b37b0c4c0e827d8`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **123/123**. Registre cruas as linhas do `C122`, do `C121`, do `C107`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/niches/dev.js src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261115-ANALISE-o-nicho-dev.md logs/2026-11-16.md index.html meta/workorders/261116-wo0173-o-nicho-dev.md
```

```
git commit -m "feat(kit): o nicho dev - a rede de cada projeto e o alvo que nao roda, o SETUP para o humano, tres gatilhos e quatro lugares; C122 (wo0173, D-182, v1.144.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0173.txt` (`date +%y%m%d-%H%M`, rodado na hora).
