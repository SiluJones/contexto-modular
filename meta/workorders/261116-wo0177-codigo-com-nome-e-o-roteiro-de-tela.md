# WO 0177 — o codigo vem com o nome dele, e o roteiro de tela das wo0121-wo0127 sai do chat para o IDEAS

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — so a casa. Sem corte de versao (v1.146.0) e sem DEC nova.
> **Config sugerida:** modelo leve, esforco baixo: so doc, sem build.
> **Pre-requisito:** HEAD = `f12cf10`, `main` = `origin/main`; harness em 19/19 · 123/123 · 0 erros, v1.146.0.
> **Base:** o pedido do dono em 2026-11-16 («quando voce passa esses codigos sem explicar o que sao, eu nao faco ideia, eu nao to abrindo os arquivos meta»; «me passa a lista pendente do i-N68»); as respostas dele sobre o Atlas_Fallen, o `.json` do album e «As duas».
> **Ancoras lidas em:** HEAD `f12cf10` («feat(kit): a carta 07 do Cancioneiro ... (wo0176, v1.146.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-16; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261116-1150` (apply wo0176) lido inteiro. O roteiro de 15/09 foi lido na conversa KCM 19 do historico do CDC (so leitura), e as frases dos seis itens, conferidas no `index.html` da v1.146.0.
> **Verificado pelo chat:** replica do HEAD com os quatro arquivos por cima: `node build.js` = 1.015.580 bytes, `sha1sum` sem CR = `370f587f320aaa0cbe5094d43d3151ea29558134` (o mesmo da wo0176: so doc); harness = **123/123**, 19/19.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O dono nao abre os `meta/`, e a lista do que estava em aberto chegou a ele so com codigos. Uma regra no CEREBRO («Idioma»): codigo de registro vem com o nome dele na primeira vez que aparece; a `i-N94` registra o pedido e o deixa aberto para o kit. O roteiro de tela das wo0121-wo0127 (a `i-N68`) so existia no chat de 15/09: vai para o IDEAS, conferido contra a v1.146.0. STATUS (o hash da wo0176 e esta WO, com as respostas do dono) e o log de 16/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/CEREBRO.md` | «Idioma»: o codigo vem com o nome dele | 2 / 0 | crlf | `63e3f3b67b5263fec66ec73c195682cdbbde35f3` |
| `meta/IDEAS.md` | `i-N94` nova; o roteiro na `i-N68` | 6 / 0 | lf | `cd4df8e5d1d17dae4a8a567cde4b0ce7a27b2bde` |
| `meta/STATUS.md` | hash e custo da wo0176; bullet desta WO | 2 / 1 | lf | `b0028e6fbd211c67e585d230ebe74fc44135988b` |
| `logs/2026-11-16.md` | a conversa 2, continuacao | 15 / 0 | lf | `f254ff2353b9f1a5fe2efb07e3f31b85dacbc536` |

Sem `index.html` (so doc: nao rode o build para commitar; o hook roda o dele). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `f12cf10`. Diferente: PARE.
2. `git status --short` = exatamente os quatro ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261116-wo0177-codigo-com-nome-e-o-roteiro-de-tela.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos quatro = os do inventario, e `git diff --numstat` = a coluna + / − (25 acrescentadas, 1 removida). Diferente: PARE.
4. Leia o diff inteiro.
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **123/123**. Vermelho: PARE.
6. Verde: `git add` de cada caminho do inventario e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/CEREBRO.md meta/IDEAS.md meta/STATUS.md logs/2026-11-16.md meta/workorders/261116-wo0177-codigo-com-nome-e-o-roteiro-de-tela.md
```

```
git commit -m "docs(meta): o codigo vem com o nome dele, e o roteiro de tela das wo0121-wo0127 sai do chat para o IDEAS (wo0177)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`). Diga se o hook imprimiu saida e se o `index.html` ficou intacto. Se o commit sair com linha acrescentada por voce, diga. Nao edite doc nenhum. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0177.txt` (`date +%y%m%d-%H%M`, rodado na hora).
