# WO 0163 — o registro de 12 a 14/11 e a WO A da analise 261112: concepcao, VOZ provisorio, invariantes de feel, DEC num lugar so, fim do IDEAS (C116, v1.138.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.138.0** (`D-177`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `fb19c6d`, `main` = `origin/main`; harness em 19/19 · 116/116 · 0 erros, v1.137.0.
> **Base:** o pedido do dono em 2026-11-14 («analise: 1 como recomendado, 2 (b), 3 (b) — siga com a wo0163 e a WO A»). O registro e a WO A vao numa WO so: mexem nos mesmos documentos, e duas WOs em fila brigariam no sha1.
> **Ancoras lidas em:** HEAD `fb19c6d` («feat(kit): o que o gerador nao sabe nao sai como placeholder - C115, titulo sem [NOME], nicho sem codigo valida pelo git diff (wo0162, D-176, v1.137.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -4 --oneline` em 2026-11-14; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261112-1035` (apply wo0162) e os avisos `261112-1531-observatorio-leu-kcm-01`, `261112-mapoteca-leu-11` e `261112-negocios-leu-02` lidos inteiros e movidos para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os catorze arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **947.754 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `ac3e1a36c9b5ed86c60d37fb369ecc3d71b20405`; harness inteiro = **117/117**, 19/19 nichos. Quatro provas negativas do `C116`, as quatro vermelhas e restauradas: o `### DEC-[N]` de volta ao CAMPANHA → «rpg/CAMPANHA.md: abre entrada DEC-[N] fora do DECISIONS»; a marca de fim tirada do IDEAS do brainstorm → «brainstorm: o IDEAS nao termina na marca de fim»; o gatilho da concepcao renomeado → «narrative: sem o gatilho da sessao de concepcao na tabela»; o titulo das invariantes trocado → «game: o MECANICAS sem as invariantes de feel». O `C114` passa com os gatilhos novos (2.674 citacoes).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

**Registro:** a carta 02 ao Negocios e Licitacoes e a resposta deles (`i-N88`), a area Estudante (`i-N90`), os avisos de lido do Observatorio (`i-N85`) e do Mapoteca, o livro de leitura de 14/11, a analise `261112` decidida (`D-177`) e o log de 14/11. **Codigo (a WO A da analise):** o gatilho da sessao de concepcao e as amostras de voz nao aprovadas no `narrative`; as invariantes de feel e o gatilho delas no `game`; o `DEC-[N]` so no DECISIONS (quatro moldes viram indice: MECANICAS, ENREDO, ARRANJO, CAMPANHA); a marca de fim do IDEAS nos tres moldes e a regra de higiene do acrescimo; `C116`.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | marca de fim do IDEAS universal; regra de higiene do acrescimo; `KIT_VERSION` 1.138.0 | 6 / 2 | crlf | `9bcd4d8d4c5e5b710c268f61b87428288f71ddfc` |
| `src/niches/narrative.js` | gatilho da concepcao; VOZ provisorio; ENREDO com indice de DEC | 9 / 5 | lf | `ec449bdd1437ef85a53e41cfe7b7ca2c4bd6174a` |
| `src/niches/game.js` | invariantes de feel e o gatilho; MECANICAS com indice de DEC | 9 / 5 | lf | `440d59bcc20c32526251d3b5605c28c40a33b9d8` |
| `src/niches/music.js` | ARRANJO com indice de DEC | 3 / 4 | lf | `e9822d90b930da268d5357b33f193001217a94f4` |
| `src/niches/rpg.js` | CAMPANHA com indice de DEC | 3 / 4 | lf | `68f1c27b55ff2b3bd00ef5ee039faca40d303087` |
| `src/niches/dev.js` | marca de fim do IDEAS | 4 / 0 | lf | `402dcb6a7d01af322273debee3101eec19de7217` |
| `src/niches/brainstorm.js` | marca de fim do IDEAS | 4 / 0 | lf | `4f570979ba70f116b65db5c3327f3d95f9cceaae` |
| `validate.js` | `C116` | 31 / 0 | crlf | `0a731c44c5900881e30f5bedd7daea5d8f61067e` |
| `meta/CHANGELOG.md` | v1.138.0 | 10 / 1 | lf | `6a9c6312dda699c5bbe4fa09b5fb98259dec01fd` |
| `meta/DECISIONS.md` | `D-177` | 8 / 0 | crlf | `cd673f777796450b9372c40e8028d54f9b3d4a4a` |
| `meta/IDEAS.md` | `i-N90`; `i-N88` com a resposta; `i-N85` com o aviso; quatro linhas e uma entrada no livro de leitura | 16 / 5 | lf | `8e1dffbcad03e139a1b1663ae7402af13104e8fc` |
| `meta/STATUS.md` | carimbo v1.138.0 · 117/117 + C116; hash da wo0162; bullet desta WO | 4 / 2 | lf | `844e0401e4becf18f926d0667ce9d5f9db7bd715` |
| `meta/analises/261112-ANALISE-narrative-e-game.md` | Status «Decidida» e a `D-177` | 2 / 2 | lf | `e57c577fd12ab21820c49efcf90f3f2b142832b9` |
| `logs/2026-11-14.md` | novo (nao rastreado) | 13 linhas (`wc -l`) | lf | `7409677e77cdbe842c7589cc965fa0efeceee9dc` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **947.754 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Fora do repo (nao versionar): `../MAPA-DE-PROJETOS.md`; a carta 02, na pasta-pai do Negocios. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `fb19c6d`. Diferente: PARE.
2. `git status --short` = exatamente os treze ` M` do inventario, `?? .claude/launch.json`, `?? logs/2026-11-14.md` e `?? meta/workorders/261114-wo0163-narrative-e-game-wo-a.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos catorze = os do inventario; `git diff --numstat` = a coluna + / − dos treze rastreados (109 acrescentadas, 30 removidas); `wc -l logs/2026-11-14.md` = 13. Diferente: PARE.
4. Leia o diff inteiro e o log novo.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `ac3e1a36c9b5ed86c60d37fb369ecc3d71b20405`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **117/117**. Registre cruas as linhas do `C116`, do `C114` e do `C54`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html src/niches/narrative.js src/niches/game.js src/niches/music.js src/niches/rpg.js src/niches/dev.js src/niches/brainstorm.js validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261112-ANALISE-narrative-e-game.md logs/2026-11-14.md index.html meta/workorders/261114-wo0163-narrative-e-game-wo-a.md
```

```
git commit -m "feat(kit): narrative e game pelo que os projetos parados ensinaram - concepcao, VOZ provisorio, invariantes de feel, DEC num lugar so, fim do IDEAS; C116 (wo0163, D-177, v1.138.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0163.txt` (`date +%y%m%d-%H%M`, rodado na hora).
