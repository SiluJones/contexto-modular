# WO 0192 — a interface, WO B: os prompts e os blocos das Instrucoes recolhem, e o indice lateral leva e copia (v1.156.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto (so a interface) + harness + doc. Corta a **v1.156.0** (`D-193`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `9b2fb01`, `main` = `origin/main`; harness em 19/19 · 130/130 · 0 erros, v1.155.0.
> **Base:** a analise `meta/analises/261119-ANALISE-a-interface-do-kcm.md` (decidida, `D-191`) e a nota do dono de 19/11 (`i-N102` itens 4, 6 e 7): os prompts recolhidos com o «quando usar» a vista, o campo que cresce, o indice que «rola e copia», e os blocos das Instrucoes recolhidos.
> **Ancoras lidas em:** HEAD `9b2fb01` («fix(ui): os nichos salvos viram cards ao lado do Custom ... (wo0191, D-192, v1.155.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-20; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261119-2249` (apply wo0191) lido inteiro; o aviso de lido `261120-heymother-leu-01` e a nota `261120-0910`, lidos inteiros.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules`: `node build.js` = **1.054.823 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `6b4b7bc52ee6a64f5db062bf253fced242f7b615`; harness inteiro = **131/131**, 19/19 (`C54` verde em v1.156.0). Uma prova negativa, vermelha e restaurada: o card do prompt sem o recolhido → `C130`.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou ou recusou, PARE, grave o relatorio (ele abre com `NADA FOI APLICADO` ou `APLICADO ATE`) e relate. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A segunda das duas WOs da `D-191`. (1) `renderPrompts`: cada card vem recolhido (`pcard closed`), com a letra, o titulo, a linha «quando usar», o «ver o prompt», o copiar e o campo a vista; o campo comeca com uma linha e cresce ate `PFILL_MAX_LINHAS` = 5 (`autoGrowFill`), depois rola. (2) `promptIndexHTML`: o indice lateral (letra e titulo), cujo clique rola ate o prompt e o copia pela `promptCopyText`, com o aviso «copiado»; abaixo de 1100 px ele vai para baixo. (3) `enhanceCollapsibleGroups`, chamada no fim do `renderBuilder`: os blocos das Instrucoes recolhidos, a contagem no cabecalho («2 de 3 marcados», «vazio») e o «abrir tudo / fechar tudo». (4) `C130`, no DOM do jsdom (o SHIM expoe `document` e as funcoes novas). Registro: CHANGELOG, STATUS (o hash da wo0191 e esta WO), DECISIONS (`D-193`), IDEAS (`i-N103` nova: os achados do Hey Mother e o nome dos zips; o evento 1 da `i-N99`; os itens da `i-N102` resolvidos; o livro de leitura), a linha Vira da analise e o log de 20/11 (novo).

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | `renderPrompts` recolhido, `autoGrowFill`, `promptIndexHTML`, `enhanceCollapsibleGroups`, o CSS; KIT_VERSION 1.156.0 | 136 / 26 | crlf | `3b7b167cf4aaf9d71ddba6eb4824610b186081b7` |
| `validate.js` | o SHIM expoe `document` e as funcoes novas; `C130` | 47 / 1 | crlf | `ac26a3bba06d8452eee2419f7c5b553ee13a15f6` |
| `meta/CHANGELOG.md` | v1.156.0 | 8 / 1 | lf | `d630a3a6960afe666822e0a0a7a789d83fe07c93` |
| `meta/DECISIONS.md` | `D-193` | 12 / 0 | crlf | `f9dc71aab39a91ce9291e158c7fcc1b2bd01cbff` |
| `meta/IDEAS.md` | `i-N103` nova; `i-N99` evento 1; `i-N102`; livro de leitura | 6 / 3 | lf | `293d0646d31215a33543d047d39452a641777261` |
| `meta/STATUS.md` | carimbo v1.156.0; hash da wo0191; bullet desta WO | 4 / 2 | lf | `e120fa8fc04e4b5eae7263f38ba2f6b190fef4d3` |
| `meta/analises/261119-ANALISE-a-interface-do-kcm.md` | a linha Vira | 1 / 1 | lf | `e06bed79b34077478586d7a890be4ba48e48feae` |
| `logs/2026-11-20.md` | novo | 14 / 0 | lf | `5e15441a77e6eccbd1c0813f0840ea2311fc14cd` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.054.823 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `9b2fb01`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? logs/2026-11-20.md`, `?? .claude/launch.json` e `?? meta/workorders/261120-wo0192-os-prompts-e-os-blocos-recolhem.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` dos sete rastreados = a coluna + / − (214 acrescentadas, 34 removidas; o log novo, 14 linhas). Diferente: PARE.
4. Leia o diff inteiro e o log novo.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `6b4b7bc52ee6a64f5db062bf253fced242f7b615`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **131/131**. Registre cruas as linhas do `C130` e do `C54`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261119-ANALISE-a-interface-do-kcm.md logs/2026-11-20.md index.html meta/workorders/261120-wo0192-os-prompts-e-os-blocos-recolhem.md
```

```
git commit -m "feat(ui): os prompts e os blocos das Instrucoes recolhem, o campo cresce ate 5 linhas e o indice lateral leva e copia; C130 (wo0192, D-193, v1.156.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; o custo: chamadas de shell e os dois `date +%s`). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. **O titulo do commit vai exatamente como esta acima**; se sair diferente, diga. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0192.txt` (`date +%y%m%d-%H%M`, rodado na hora).
