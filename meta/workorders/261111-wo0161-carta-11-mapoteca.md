# WO 0161 — a wo0160 no STATUS, a carta 11 ao Mapoteca (o metodo C) e o livro de leitura

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Nao toca `src/` nem o `index.html`: sem build, **sem corte de versao** (`D-158`).
> **Config sugerida:** o modelo mais leve, esforco baixo. Nada a editar: conferir, validar, publicar.
> **Pre-requisito:** HEAD = `e597daf`, `main` = `origin/main`; harness em 19/19 · 115/115 · 0 erros, v1.136.0.
> **Base:** o pedido do dono em 2026-11-11 («leia o Mapoteca e escreva a carta 11 sobre o metodo C, depois prossiga com a lista»).
> **Ancoras lidas em:** HEAD `e597daf` («feat(kit): todo arquivo que a tabela de gatilhos e os prompts citam existe no nicho - C114, PLANO.md no business (wo0160, D-175, v1.136.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-11; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261111-2007` (apply wo0160) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 944.149 bytes (igual ao HEAD); os quatro checks que leem a casa (`C43`, `C54`, `C102`, `C103`) verdes. O harness inteiro roda no seu passo 5.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Publica o hash e o custo da wo0160 no STATUS e o bullet desta WO; no IDEAS, o marcador do Mapoteca no livro de leitura (`FK-BH`) e a linha da carta 11 na entrada de 11/11; e a continuacao do log de 11/11. A carta 11 fica na pasta-pai do Mapoteca e nao e versionada.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore. Os tres sao **LF**.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `meta/STATUS.md` | o hash e o custo da wo0160; o bullet desta WO, com sete pendencias | 3 / 1 | `dfe78d0852bd529c4186ab6917b4fb90ec916174` |
| `meta/IDEAS.md` | o marcador do Mapoteca no livro; a linha da carta 11 | 2 / 1 | `2361c6183fb75831666a09a9c3e18ac2336db1aa` |
| `logs/2026-11-11.md` | a continuacao da conversa | 12 / 0 | `902d48662c89ebf1bfd71a1e18302599129b5fc2` |

Gerado por quem aplica: nada. Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md` e a carta 11, na pasta-pai do Mapoteca. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `e597daf`. Diferente: PARE.
2. `git status --short` = exatamente ` M logs/2026-11-11.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, `?? .claude/launch.json`, `?? meta/workorders/261111-wo0161-carta-11-mapoteca.md`. Faltou ou sobrou: PARE.
3. `sha1sum meta/STATUS.md meta/IDEAS.md logs/2026-11-11.md` = os do inventario, e `git diff --numstat` = a coluna + / −. Diferente: PARE.
4. Leia o diff inteiro (17 linhas acrescentadas).
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **115/115**. Registre crua a linha do `C102`. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/STATUS.md meta/IDEAS.md logs/2026-11-11.md meta/workorders/261111-wo0161-carta-11-mapoteca.md
```

```
git commit -m "docs(meta): a carta 11 ao Mapoteca sobre o metodo C e o livro de leitura (wo0161)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 6). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0161.txt` (`date +%y%m%d-%H%M`, rodado na hora).
