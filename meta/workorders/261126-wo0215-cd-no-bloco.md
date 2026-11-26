# WO 0215 — o cd da pasta abre o bloco de comandos, e o comando do Proximo vai num bloco so dele (v1.167.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o CEREBRO e as Instrucoes geradas) + as Instrucoes e o CEREBRO da casa + harness + doc. Corta a **v1.167.0** (`D-208`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `e7f2e52`, `main` = `origin/main`; harness em 19/19 · 141/141 · 0 erros, v1.166.0.
> **Base:** as notas do dono `261126-1047` e `261126-1626` (o `cd` no bloco, do pixel-projetista), lidas inteiras e movidas para `../notas-arquivadas/`; `i-N113` e `i-N112`.
> **Ancoras lidas em:** HEAD `e7f2e52` («docs(meta): o fecho da casa - a linha /apply-wo num bloco de codigo so dela e o esqueleto copiado (wo0214, D-207)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-26; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261125-2227` (apply wo0214) lido inteiro e movido.
> **Verificado pelo chat:** replica do HEAD com os nove arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.077.913 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `05066c2c8a4da0fd5204e1d54a655376f89ec918`; harness inteiro = **142/142**, 19/19 (`C54` verde em v1.167.0; `C28` verde: +Code 544/550, combo + SO 7.376/7.600; `C138` verde: base 71.992/72.500, pior 93.246/94.000; `C139` e `C141` verdes). Prova negativa: o `validate.js` novo contra o `index.html` do HEAD → `C141` vermelho («dev/Code nao: o bloco de commit do CEREBRO nao abre com o cd da pasta»). A arvore foi conferida igual a replica, arquivo por arquivo (sem CR).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

O bloco de commit do CEREBRO gerado (`commitIntro`) e as duas linhas «**Commit:**» das Instrucoes geradas abrem com `cd "<caminho completo do repositorio>"`; o CEREBRO estende a regra a todo bloco de terminal. A linha do commit com o Modo Code encurta para caber no orcamento do modo (`C28`). A linha «Acao» do esqueleto do fecho manda o comando num bloco so dele. Na casa: a linha do commit das Instrucoes e o «Commit pronto ao final» do CEREBRO. `C141` novo. Registro: CHANGELOG, STATUS (o hash da wo0214, o painel recolado e esta WO), DECISIONS (`D-208`), IDEAS (os titulos da `i-N112` e da `i-N113`, e as capturas da `i-N105` e da `i-N113`, gravadas no turno anterior) e o log de 26/11 (novo). **Depois do commit, o dono recola o `INSTRUCOES-DO-PROJETO.md` no painel** (7.751 caracteres).

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o `commitIntro`, as duas linhas do commit, a linha «Acao»; KIT_VERSION 1.167.0 | 4 / 4 | crlf | `96d770d6e8fa829346409bf3b7bd797162634ca5` |
| `validate.js` | `C141` novo | 18 / 0 | crlf | `79f142f7ae587db506aa7136c9828e379ebd24ad` |
| `INSTRUCOES-DO-PROJETO.md` | a linha do commit | 1 / 1 | lf | `35978ffd52c33176904852b781314678774828c8` |
| `meta/CEREBRO.md` | «Commit pronto ao final» | 1 / 1 | crlf | `c5645d3e29f6c25686ab1b182d3726cec6922904` |
| `meta/CHANGELOG.md` | v1.167.0 | 9 / 1 | lf | `3c70080fb386b058e174be90c1c56ae5f1f9928d` |
| `meta/DECISIONS.md` | `D-208` | 10 / 0 | crlf | `ab0ba00aaada5e22729ad0c03b3bfb13ef5f64ce` |
| `meta/IDEAS.md` | `i-N113` nova, o acrescimo na `i-N105`, o titulo da `i-N112` | 5 / 1 | lf | `4fde65355165c8f9db1e39785f927c0524c30b4a` |
| `meta/STATUS.md` | carimbo v1.167.0; hash da wo0214; bullet desta WO | 4 / 2 | lf | `64c343e3c3aab5a1b7a46ee80832a43c7d61270b` |
| `logs/2026-11-26.md` | novo (nao rastreado) | 8 linhas | lf | `2007b27275e8ae3b2f6bb1c9199fedda6c901f76` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.077.913 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `e7f2e52`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json`, `?? logs/2026-11-26.md` e `?? meta/workorders/261126-wo0215-cd-no-bloco.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos nove = os do inventario, e `git diff --numstat` dos oito rastreados = a coluna + / − (52 acrescentadas, 10 removidas). Diferente: PARE.
4. Leia o diff inteiro e o log novo, sem cortar linha (`git diff --word-diff -U0` nos docs).
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `05066c2c8a4da0fd5204e1d54a655376f89ec918`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **142/142**. Registre cruas as linhas do `C141`, do `C139`, do `C28`, do `C138` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; `git diff --cached --stat` com os onze caminhos (no Windows, caminho com a caixa errada nao entra); commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js INSTRUCOES-DO-PROJETO.md meta/CEREBRO.md meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-26.md index.html meta/workorders/261126-wo0215-cd-no-bloco.md
git commit -m "feat(kit): o cd da pasta abre o bloco de comandos e o comando do Proximo vai num bloco so dele; C141 (wo0215, D-208, v1.167.0)"
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS, as Instrucoes nem o log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0215.txt` (`date +%y%m%d-%H%M`, rodado na hora).
