# WO 0182 — o trabalho por encomenda: as portas do Design Visual, o valor aceito a parte do escopo, e cinco linhas da base (C124, v1.148.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.148.0** (`D-185`). A WO A da leva de novembro (analise `261117`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `9f5bd20`, `main` = `origin/main`; harness em 19/19 · 124/124 · 0 erros, v1.147.0.
> **Base:** a analise `meta/analises/261117-ANALISE-a-leva-de-novembro.md`, decidida pelo dono em 2026-11-17 (as tres respostas recomendadas: tres WOs; o processo comercial no `design` e no `client`; o enxugamento depois, com teto de 1,5 KB de base na leva) e o pedido em 2026-11-18 («escreva a WO A da analise 261117»).
> **Ancoras lidas em:** HEAD `9f5bd20` («docs(meta): a area Trabalho do mapa, e com ela o mapa inteiro lido (wo0181)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-18; `git status --short` de partida: `?? .claude/launch.json` e `?? meta/analises/261117-ANALISE-a-leva-de-novembro.md` (do chat, versionada aqui). Relatorio `261117-1834` (apply wo0181) lido inteiro. Lido fora do repo, so o metodo: o `PROCESSO.md` do primeiro cardapio do dono (`Pictures\Cardapio\meta\`). Dado de cliente: o texto novo nao nomeia cliente nem traz preco real (conferido por `grep`).
> **Verificado pelo chat:** replica do HEAD com os onze arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.024.270 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `df1b3dfcbbbd70e80d09cff5a4fe6a37fb3a8352`; harness inteiro = **125/125**, 19/19 (`C54` «v1.148.0 nos tres lugares»; `C28` sem mudanca: padrao 5985/6900, +Code 549/550). Duas provas negativas do `C124`, vermelhas e restauradas (conferido por `cmp`): a linha do codigo com nome fora da base → «dev pasta: a base deveria ter uma vez «Codigo de registro…»»; a porta do valor de volta ao escopo → «o PROCESSO.md nao separa o valor aceito do escopo aceito». A base do CEREBRO cresce **940 bytes** (o `custom`, 95.156 → 96.096), dos 1.500 da leva.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O nicho Design Visual nao tinha o processo de um trabalho pago (duas vozes: o primeiro cardapio do dono escreveu as portas, o projeto novo ja as usa). Entra um `PROCESSO.md` **opcional** no `design` — seis portas, com o **valor aceito por escrito** como porta propria, separada do escopo; regras de conduta; sinais de descarrilhamento; escala com o trabalho —, mais o comportamento `price_gate`, um gatilho e a saida. No `client`, o valor vira acordo a parte no comportamento «Confirma o combinado por escrito» e no `ACORDOS.md`. Na base do CEREBRO, cinco linhas: em todo nicho, `[proposto pelo assistente]`, nome de pasta sem dado pessoal e o codigo com o nome dele; so no canal pasta, o insumo permanente fora do «Arquivar / Manter» e a permissao que expira. `C124` novo. Registro: CHANGELOG, STATUS (o hash da wo0181 e esta WO), DECISIONS (`D-185`), IDEAS (`i-N94`, `i-N95`, `i-N96`, `i-N77` e os titulos da `i-N92` e da `i-N80`), a analise e os logs de 17 e 18/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | as cinco linhas da base; `KIT_VERSION` 1.148.0 | 8 / 2 | crlf | `b893ab0575daec4864a0988b1a5e497d6af08df7` |
| `src/niches/design.js` | `price_gate`, o gatilho, o molde `PROCESSO.md` (opcional), a saida | 49 / 0 | lf | `0f39a5059cae5e3fc561285f7597b4d560fc094d` |
| `src/niches/client.js` | o valor a parte no `writeitdown` e no `ACORDOS.md` | 2 / 1 | lf | `c78b73cb5470f0f0ad845447e56857280a1e6ca2` |
| `validate.js` | `C124` | 29 / 0 | crlf | `b86ac83ce6c853bc80f5bae7be4445be45c14e1b` |
| `meta/CHANGELOG.md` | v1.148.0 | 9 / 1 | lf | `9d85d384acc3a5ef251555f696125efb31bf4a03` |
| `meta/DECISIONS.md` | `D-185` | 12 / 0 | crlf | `4e220e6e120e24393be056fc206268ac1f59d1d1` |
| `meta/IDEAS.md` | seis titulos (`i-N96`, `i-N95`, `i-N94`, `i-N92`, `i-N80`, `i-N77`) | 6 / 6 | lf | `f0a0dda38a82613c5ab6ef115937461cf119e3b2` |
| `meta/STATUS.md` | carimbo v1.148.0 e 125; hash e custo da wo0181; bullet desta WO | 3 / 2 | lf | `31fc5000df419a19ba3232adad0509f3313eab6c` |
| `logs/2026-11-17.md` | a analise da conversa KCM 28 | 11 / 0 | lf | `bdf1d53c6caa0d039d132fc739738b00a7827b8f` |
| `logs/2026-11-18.md` | novo | 14 / 0 | lf | `8ce379443d94a4ee7c4ed72f3ee258a03398e7b5` |
| `meta/analises/261117-ANALISE-a-leva-de-novembro.md` | nova (decidida) | 127 / 0 | lf | `7724b9920e315bd831908725d7581db3ca7ec986` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.024.270 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `9f5bd20`. Diferente: PARE.
2. `git status --short` = exatamente os nove ` M` do inventario, `?? .claude/launch.json`, `?? logs/2026-11-18.md`, `?? meta/analises/261117-ANALISE-a-leva-de-novembro.md` e `?? meta/workorders/261118-wo0182-o-trabalho-por-encomenda.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos onze = os do inventario; `git diff --numstat` dos nove rastreados = a coluna + / − (129 acrescentadas, 12 removidas); `wc -l` dos dois novos = 14 e 127. Diferente: PARE.
4. Leia o diff inteiro e os dois arquivos novos.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `df1b3dfcbbbd70e80d09cff5a4fe6a37fb3a8352`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **125/125**. Registre cruas as linhas do `C124`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html src/niches/design.js src/niches/client.js validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-17.md logs/2026-11-18.md meta/analises/261117-ANALISE-a-leva-de-novembro.md index.html meta/workorders/261118-wo0182-o-trabalho-por-encomenda.md
```

```
git commit -m "feat(kit): o trabalho por encomenda - PROCESSO.md opcional no design com o valor aceito como porta propria, o valor a parte no client, cinco linhas da base; C124 (wo0182, D-185, v1.148.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0182.txt` (`date +%y%m%d-%H%M`, rodado na hora).
