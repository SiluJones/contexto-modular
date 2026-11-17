# WO 0180 — a area Outros do mapa: o processo comercial que o design nao tem (i-N96) e o Pesquisa usado para diagnostico de hardware (i-N97)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Sem corte de versao (v1.147.0) e sem DEC nova.
> **Config sugerida:** modelo leve, esforco baixo: so doc, sem build.
> **Pre-requisito:** HEAD = `ca4f68f`, `main` = `origin/main`; harness em 19/19 · 124/124 · 0 erros, v1.147.0.
> **Base:** o pedido do dono em 2026-11-17 («siga com a area Outros do mapa»).
> **Ancoras lidas em:** HEAD `ca4f68f` («feat(kit): as chaves do KCM no navegador ... (wo0179, D-184, v1.147.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-17; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261117-1012` (apply wo0179) lido inteiro. Lidos nas pastas do dono (leitura rasa): `Pictures\Cardapio\meta\IDEAS.md` («Feedback para o Kit»), `Documents\Notebook\meta\` (CEREBRO, STATUS, TEMA, IDEAS) e a listagem de `Pictures\Designer`.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 1.017.868 bytes (o mesmo: so doc); harness = **124/124**, 19/19.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A area Outros fecha no livro de leitura: `i-N96` (o primeiro projeto de cardapio do dono pede ao kit o processo comercial — portas, conteudo congelado, preco aceito por escrito — e o projeto novo do cardapio ja o reusa) e `i-N97` (o projeto do notebook usou o nicho Pesquisa para diagnostico de hardware), com as duas linhas na tabela do livro. STATUS (o hash da wo0179 e esta WO) e o log de 17/11. Dado de cliente fica fora: o texto novo nao nomeia cliente.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N96` e `i-N97` novas; duas linhas no livro de leitura | 10 / 0 | lf | `ec8aa786ebf40a80818e9575efeda5f80603e4f4` |
| `meta/STATUS.md` | hash e custo da wo0179; bullet desta WO | 2 / 1 | lf | `297df048025455f3713cedccb4078e1285ac24d4` |
| `logs/2026-11-17.md` | a tarde da conversa | 12 / 0 | lf | `d859602d8ed49b16e129e1134340e9e73a056d4d` |

Sem `index.html` (so doc). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `ca4f68f`. Diferente: PARE.
2. `git status --short` = exatamente os tres ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261117-wo0180-a-area-outros-do-mapa.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario, e `git diff --numstat` = a coluna + / − (24 acrescentadas, 1 removida). Diferente: PARE.
4. Leia o diff inteiro.
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **124/124**. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-17.md meta/workorders/261117-wo0180-a-area-outros-do-mapa.md
```

```
git commit -m "docs(meta): a area Outros do mapa - o processo comercial que o design nao tem (i-N96) e o Pesquisa usado para diagnostico de hardware (i-N97) (wo0180)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`). Diga se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite doc nenhum. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0180.txt` (`date +%y%m%d-%H%M`, rodado na hora).
