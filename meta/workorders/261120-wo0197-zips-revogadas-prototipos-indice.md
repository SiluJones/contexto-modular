# WO 0197 — os zips com o nicho, a linha revogada cacada pelo comportamento, o PROTOTIPOS condicional e o indice dos prompts legivel (v1.160.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o que o kit gera + a interface) + harness + doc. Corta a **v1.160.0** (`D-197`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `53b50f1`, `main` = `origin/main`; harness em 19/19 · 132/132 · 0 erros, v1.159.0.
> **Base:** a `i-N103` (o aviso de lido do Hey Mother `261120-heymother-leu-01` e a nota do dono `261120-0910`) e a nota do dono `261120-1425` («o bloco dos indices poderia aumentar um pouco mais», «dar mais enfase nas letras»), com o pedido no chat de 15h20: «da uma melhor legibilidade a LETRA que identifica o prompt (A, B, C ...)».
> **Ancoras lidas em:** HEAD `53b50f1` («docs: a wo0195 conferida e o item 4 confirmado pelo dono; o fecho da conversa KCM 29 (wo0196)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-20; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261120-1423` (apply wo0196) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.060.861 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `0c86faeb882ee675836c89e455e1c4861a0896c1`; harness inteiro = **133/133**, 19/19 (`C54` verde em v1.160.0, `C132` verde). Uma prova negativa, vermelha e restaurada: o selo da letra de volta a `.pix b{font-family:var(--mono);color:var(--amber);min-width:18px}` → `C132` vermelho («a letra do prompt nao esta num selo grande e grosso»).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

(1) Sem o nome do projeto, o zip do projeto saia `projeto.zip` em todo nicho; agora `projeto-<nicho>-v<versao>.zip` (`structuredZipName`). A pasta do pacote de update ganha o nicho: `AAMMDD-kcm-update-<nicho>-vX.Y.Z` (`updatePackFolder(niche)`), sem o nome do projeto. (2) Na secao das linhas revogadas, o manifesto, o prompt do update e o GUIA mandam cacar o COMPORTAMENTO antes de mostrar a frase; a coluna vira «Como o kit dizia (ponto de partida)»; o `grep` e o piso. (3) O `PROTOTIPOS.md` do `game` ganha `respostaUpdate`, que o `normFiles` e o pacote carregam e a `respostaEsperada` usa no lugar da generica. (4) O indice dos Prompts: coluna de 280 px, nome em 13,5 px e peso 500, letra num selo de 14 px, peso 800, contornado. `C132` novo; `C111` espera o nicho na pasta. Registro: CHANGELOG, STATUS (o hash da wo0196 e esta WO), DECISIONS (`D-197`), IDEAS (`i-N103` resolvida, `i-N104` nova) e o log de 20/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | os zips, a pasta do update, as revogadas, o `respostaUpdate`, o CSS do indice; KIT_VERSION 1.160.0 | 35 / 18 | crlf | `878ef52e2a027fcdf233b558c48d7d2a6420d127` |
| `src/niches/game.js` | `respostaUpdate` no `PROTOTIPOS.md` | 1 / 1 | lf | `5fd02dbaac478748af3423207cdd16a72874d4e8` |
| `validate.js` | `C132` novo; `C111` com o nicho; o shim | 38 / 4 | crlf | `d048cc2894ce634c85513d108df8af329bbaa3de` |
| `meta/CHANGELOG.md` | v1.160.0 | 8 / 1 | lf | `6edcf5d47073dcbd8f4d05c065ee439d7438706e` |
| `meta/DECISIONS.md` | `D-197` | 10 / 0 | crlf | `6543dd696e098bdba3d784de8510ac48136b3d34` |
| `meta/IDEAS.md` | `i-N103` resolvida; `i-N104` nova | 4 / 1 | lf | `128a8ee6fc453dc90c74fcd6da550947acc0ce23` |
| `meta/STATUS.md` | carimbo v1.160.0; hash da wo0196; bullet desta WO | 4 / 2 | lf | `6996fcb93ac15d6ff1760f56a0b44b601307f2e3` |
| `logs/2026-11-20.md` | a KCM 30: a wo0196 conferida e esta WO | 11 / 0 | lf | `c2c5941732d61e464fed5a2012250c2473d90ba0` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.060.861 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `53b50f1`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261120-wo0197-zips-revogadas-prototipos-indice.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` = a coluna + / − (111 acrescentadas, 27 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `0c86faeb882ee675836c89e455e1c4861a0896c1`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **133/133**. Registre cruas as linhas do `C132`, do `C111` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html src/niches/game.js validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-20.md index.html meta/workorders/261120-wo0197-zips-revogadas-prototipos-indice.md
```

```
git commit -m "feat(kit): os zips dizem o nicho, a linha revogada se caca pelo comportamento, o PROTOTIPOS so para quem ainda escolhe e o indice dos prompts legivel; C132 (wo0197, D-197, v1.160.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0197.txt` (`date +%y%m%d-%H%M`, rodado na hora).
