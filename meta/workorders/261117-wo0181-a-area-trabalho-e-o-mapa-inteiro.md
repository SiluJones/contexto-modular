# WO 0181 — a area Trabalho do mapa, e com ela o mapa inteiro lido

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Sem corte de versao (v1.147.0) e sem DEC nova.
> **Config sugerida:** modelo leve, esforco baixo: so doc, sem build.
> **Pre-requisito:** HEAD = `d082a28`, `main` = `origin/main`; harness em 19/19 · 124/124 · 0 erros, v1.147.0.
> **Base:** o pedido do dono em 2026-11-17 («siga com a area Trabalho do mapa»).
> **Ancoras lidas em:** HEAD `d082a28` («docs(meta): a area Outros do mapa ... (wo0180)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-17; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261117-1751` (apply wo0180) lido inteiro. Lidos nas pastas do dono (leitura rasa): `Trabalho\Projetos Pilotos` (o rodape do CEREBRO, o topo do STATUS e o «Feedback para o Kit» de cada projeto; o `LEIA-ME` do `_para_excluir`) e a listagem de `Trabalho\quartzolit`, com a nota `261113-1048`. Dado da empresa: o texto novo nao nomeia a empresa.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: `node build.js` = 1.017.868 bytes (o mesmo: so doc); harness = **124/124**, 19/19.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A ultima area do mapa: os Projetos Pilotos entram no livro de leitura como lidos, sem extracao nova (dois itens antigos, o segundo ja coberto pela `D-180`). STATUS (o hash da wo0180, esta WO e as pendencias, com a proxima analise de kit no topo) e o log de 17/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | a linha dos Projetos Pilotos no livro de leitura | 1 / 0 | lf | `ac7ad07369281e38fb1aca3adb6b71bae2e6a4ec` |
| `meta/STATUS.md` | hash e custo da wo0180; bullet desta WO | 2 / 1 | lf | `84fbe33e4a1a97f04bee84f3ae2a6cd14ed1fc9f` |
| `logs/2026-11-17.md` | a noite da conversa | 12 / 0 | lf | `b30d60569db948a20e74bb0e4422353a866e6f67` |

Sem `index.html` (so doc). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `d082a28`. Diferente: PARE.
2. `git status --short` = exatamente os tres ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261117-wo0181-a-area-trabalho-e-o-mapa-inteiro.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario, e `git diff --numstat` = a coluna + / − (15 acrescentadas, 1 removida). Diferente: PARE.
4. Leia o diff inteiro.
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **124/124**. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-17.md meta/workorders/261117-wo0181-a-area-trabalho-e-o-mapa-inteiro.md
```

```
git commit -m "docs(meta): a area Trabalho do mapa, e com ela o mapa inteiro lido (wo0181)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`). Diga se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite doc nenhum. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0181.txt` (`date +%y%m%d-%H%M`, rodado na hora).
