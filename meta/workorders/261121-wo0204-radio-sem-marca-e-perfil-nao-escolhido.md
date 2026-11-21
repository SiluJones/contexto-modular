# WO 0204 — o radio nao tocado nasce sem marca, e o perfil do pacote diz «(nao escolhido)» (v1.162.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (o manifesto do pacote e a tela) + harness + doc. Corta a **v1.162.0** (`D-201`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `0d62d77`, `main` = `origin/main`; harness em 19/19 · 135/135 · 0 erros, v1.161.0.
> **Base:** o handoff `261121-HANDOFF-BRIEF.md`, pendencia 3 (a `i-N107` item 1, e o item 2 como uma linha no manifesto); o pedido do dono de 21/11 (13h59): «confira a wo0203 e siga as pendencias».
> **Ancoras lidas em:** HEAD `0d62d77` («docs: a wo0202 conferida, os seis pacotes v1.161.0 nas pastas-pai e o fecho da conversa KCM 30; i-N107 (wo0203)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-21; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261121-1354` (apply wo0203) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.067.398 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `304e8d0b669e9c265b031bc31deee587ca17d407`; harness inteiro = **136/136**, 19/19 (`C54` verde em v1.162.0). Duas provas negativas vermelhas e restauradas: com o radio de volta a primeira opcao → `C135` («radio nao tocado nasceu marcado: scope=jam, team=solo»); com o perfil de volta a primeira opcao → `C135` («o perfil carimba a primeira opcao como escolhida»). A arvore foi conferida igual a replica, arquivo por arquivo (sem CR).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.** Grave arquivo na pasta-pai so o relatorio.

## Por que

A `i-N107` dizia que o radio nao tocado entrava no CEREBRO e nas Instrucoes com a primeira opcao. Nao entrava: o `buildInstr` so leva radio com valor no estado, e o CEREBRO nao le o bloco. O que mostrava a escolha inexistente era a tela (`renderBuilderSection` marcava a primeira opcao) e a tabela do perfil da v1.161.0 (`perfilDoPacote` a carimbava). (1) O radio nasce sem marca. (2) O perfil diz «(nao escolhido)», e o manifesto explica numa linha quando ha um. (3) Quando o pacote tem arquivo em subpasta (o `companion`), o manifesto avisa que quem descompacta a mao cria a pasta antes (`i-N107` item 2). `C135` novo; o shim expoe `renderBuilderSection`. Registro: CHANGELOG, STATUS (o hash da wo0203 e esta WO), DECISIONS (`D-201`), IDEAS (`i-N107`) e o log de 21/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o radio sem marca, o perfil, a subpasta; KIT_VERSION 1.162.0 | 16 / 3 | crlf | `182f5d31242f768058d5cf8c42f9f11f4e103f33` |
| `validate.js` | `C135` novo; o shim | 42 / 1 | crlf | `37c5ec2e10a4f6af48dd4a19c27d1c3bc25813a8` |
| `meta/CHANGELOG.md` | v1.162.0 | 7 / 1 | lf | `b94ba8c766616679ba7f30547cff2780507d062a` |
| `meta/DECISIONS.md` | `D-201` | 10 / 0 | crlf | `7cb12cd352992e9ea1ec7448c4c103e2e8b49aad` |
| `meta/IDEAS.md` | `i-N107` item 1 resolvido, o diagnostico corrigido | 2 / 1 | lf | `112be8f3da1f11364f20228bad32206fd4679516` |
| `meta/STATUS.md` | carimbo v1.162.0; hash da wo0203; bullet desta WO | 4 / 2 | lf | `d8cd8bc5a005854fe833e249bea3a3ca6138b505` |
| `logs/2026-11-21.md` | a wo0203 conferida e esta WO | 6 / 0 | lf | `8bace273adbbb92780fde40420208f832d88d0f0` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.067.398 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `0d62d77`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261121-wo0204-radio-sem-marca-e-perfil-nao-escolhido.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` = a coluna + / − (87 acrescentadas, 8 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `304e8d0b669e9c265b031bc31deee587ca17d407`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **136/136**. Registre cruas as linhas do `C135` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-21.md index.html meta/workorders/261121-wo0204-radio-sem-marca-e-perfil-nao-escolhido.md
```

```
git commit -m "feat(kit): o radio nao tocado nasce sem marca e o perfil do pacote diz nao escolhido; C135 (wo0204, D-201, v1.162.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS, IDEAS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0204.txt` (`date +%y%m%d-%H%M`, rodado na hora).
