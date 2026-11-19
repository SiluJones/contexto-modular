# WO 0189 — a wo0188 conferida, o pacote do Hey Mother conferido e a carta 01 a ele, e a nota do dono sobre a interface (so doc, v1.153.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** DOC — sem `src/`, `validate.js` nem `build.js`; sem corte de versao.
> **Config sugerida:** modelo padrao, esforco leve: sem build; harness inteiro so como rede.
> **Pre-requisito:** HEAD = `d7d3128`, `main` = `origin/main`; harness em 19/19 · 129/129 · 0 erros, v1.153.0.
> **Base:** o aviso do dono em 2026-11-19 («o pacote v1.153.0 esta la, prossiga, eu deixei tambem algumas ideias em txt para voce na sua pasta»).
> **Ancoras lidas em:** HEAD `d7d3128` («feat(kit): a engine no nicho de jogo ... (wo0188, D-190, v1.153.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-19; `git status --short` de partida: `?? .claude/launch.json` (so ele). Lidos inteiros na pasta-pai: o relatorio `261119-1802` (apply wo0188), a nota `261119-1958` e quatro capturas de tela. Lido fora do repo: a pasta `Game Design\Hey Mother` (o pacote v1.153.0 e o `git status` do repositorio dele), so leitura.
> **Verificado pelo chat:** replica do HEAD com os tres arquivos por cima: harness inteiro = **129/129**, 19/19 (sem build: `src/` nao muda).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

(1) STATUS: o hash e o custo da wo0188 e o bullet desta WO. (2) IDEAS: a `i-N102` nova (a interface do KCM, oito itens da nota do dono, um deles defeito: o modal que deixa a pagina rolar), a `i-N101` com o pacote e a carta 01, e o Hey Mother no livro de leitura. (3) O log de 19/11. A carta 01 mora na pasta-pai do Hey Mother e nao e versionada.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `meta/IDEAS.md` | `i-N102` nova; titulo da `i-N101`; a linha do Hey Mother no livro de leitura | 5 / 1 | lf | `66215bf0b17169d190a9ea1cb35efb1214f188e0` |
| `meta/STATUS.md` | hash e custo da wo0188; bullet desta WO | 3 / 1 | lf | `b6f4000740f902bdf27c467cfd0ee91e945e78bd` |
| `logs/2026-11-19.md` | a continuacao da KCM 29 | 13 / 0 | lf | `be8a6eab55701c0bb9e9884aee879769243ad5ee` |

Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `d7d3128`. Diferente: PARE.
2. `git status --short` = exatamente os tres ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261119-wo0189-o-pacote-do-hey-mother.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos tres = os do inventario, e `git diff --numstat` = a coluna + / − (21 acrescentadas, 2 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **129/129**. Vermelho: PARE.
6. Verde: `git add` dos tres e desta WO; commit (o hook roda o harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add meta/IDEAS.md meta/STATUS.md logs/2026-11-19.md meta/workorders/261119-wo0189-o-pacote-do-hey-mother.md
```

```
git commit -m "docs: a wo0188 conferida; o pacote do Hey Mother e a carta 01; a interface do KCM vista pelo dono (wo0189)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0189.txt` (`date +%y%m%d-%H%M`, rodado na hora).
