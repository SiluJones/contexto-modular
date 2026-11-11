# WO 0160 — todo arquivo que a tabela de gatilhos e os prompts citam existe no nicho (C114, PLANO.md do business, v1.136.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.136.0** (`D-175`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `555cea0`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.135.0.
> **Base:** o pedido do dono em 2026-11-11 («siga para a WO do check de arquivo citado»).
> **Ancoras lidas em:** HEAD `555cea0` («docs(meta): a carta 01 do Negocios e Licitacoes e a area Artista no livro de leitura - i-N88 e i-N89 (wo0159)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-11; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261111-1831` (apply wo0159) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os oito arquivos por cima e o `node_modules` do dono: `node build.js` = **944.149 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `a582bb0184d285575fb5e10a054782cb7ce8b9f8`; harness inteiro em duas fatias = **115/115**, 19/19 nichos. Provas negativas do `C114`, as duas vermelhas: (a) sem a troca da linha de abertura — «design (padrao, gatilhos): cita CONTEXT.md, que o nicho nao tem» e mais 15 nichos; (b) sem o `PLANO.md` — «business (padrao, prompt J): cita PLANO.md, que o nicho nao tem». O `C107` barrou um papel curto de 56 caracteres, corrigido para 45 antes desta WO.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Uma sonda na replica varreu a tabela de gatilhos e os prompts dos 19 nichos: a linha de abertura («Le CEREBRO.md → CONTEXT.md → STATUS.md») citava `CONTEXT.md` em 16 nichos que nao o tem — o ritual logo acima ja usava o documento-ancora —, e o `business` prometia um `PLANO.md` que nao criava (`i-N84` item 2, `i-N88` item 1). A linha passa a ler o ancora; o `business` ganha o `PLANO.md` opcional; o `C114` guarda a familia inteira. CHANGELOG, STATUS, DECISIONS (`D-175`), IDEAS e o log de 11/11.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem: `w/crlf` em tres).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | a linha de abertura le o ancora; `KIT_VERSION` 1.136.0 | 4 / 1 | crlf | `09860e4598b4fb6b339f962778a7dbfce2a0338c` |
| `src/niches/business.js` | `PLANO.md` opcional e a linha dele no fecho | 33 / 0 | lf | `3946b7a92d7f021001564a1f38bb8e366be3ff7b` |
| `validate.js` | `C114` | 43 / 0 | crlf | `b80b5fbfdeed7284e48186397517fcf7b406326f` |
| `meta/CHANGELOG.md` | v1.136.0 | 7 / 1 | lf | `7f7e703f83646dd8b3b750c2c7d4211c24b10ce9` |
| `meta/DECISIONS.md` | `D-175` | 8 / 0 | crlf | `8ae9c529cc2f6ea0f124210e548e680bdbe88e47` |
| `meta/IDEAS.md` | `i-N84` item 2 e `i-N88` item 1 resolvidos | 2 / 2 | lf | `90998cfd37dddbf40d40b715a43c34f835b71045` |
| `meta/STATUS.md` | carimbo v1.136.0 · 115/115 + C114; hash da wo0159; bullet desta WO | 4 / 2 | lf | `910c49ff29b4b1e391d3ea9af5fa652a9c8d2354` |
| `logs/2026-11-11.md` | a continuacao da conversa | 12 / 0 | lf | `088fb6ed732ce9d3e037f228641a0667ee41261c` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **944.149 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `555cea0`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261111-wo0160-check-arquivo-citado.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` = a coluna + / − (113 acrescentadas, 6 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `a582bb0184d285575fb5e10a054782cb7ce8b9f8`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **115/115**. Registre cruas as linhas do `C114` e do `C54`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html src/niches/business.js validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-11.md index.html meta/workorders/261111-wo0160-check-arquivo-citado.md
```

```
git commit -m "feat(kit): todo arquivo que a tabela de gatilhos e os prompts citam existe no nicho - C114, PLANO.md no business (wo0160, D-175, v1.136.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0160.txt` (`date +%y%m%d-%H%M`, rodado na hora).
