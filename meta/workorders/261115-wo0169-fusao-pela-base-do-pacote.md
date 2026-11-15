# WO 0169 — a fusao do CEREBRO e das Instrucoes parte do pacote: base do kit, transplante do projeto, inventario do corte (C120, v1.142.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.142.0** (`D-180`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `21de81c`, `main` = `origin/main`; harness em 19/19 · 120/120 · 0 erros, v1.141.0.
> **Base:** a leitura do update do got-legends pedida pelo dono em 2026-11-14 (`i-N92`) e a pergunta dele em 2026-11-15 (partir do CEREBRO do pacote e transplantar o que e do projeto, como os outros projetos fizeram), com o «faca qualquer modificacao no KCM que queira».
> **Ancoras lidas em:** HEAD `21de81c` («docs(meta): fecho da conversa KCM 25 - seis versoes, tres areas do mapa, o Suno no nicho Musica e as pendencias no STATUS (wo0168)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-15; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261114-2132` (apply wo0168) lido inteiro. A ponte caiu no meio da gravacao (2026-11-15, manha); na volta, a arvore foi relida por `git diff --numstat` e `grep` antes de seguir.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os sete arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **990.805 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `f54130b7f32e4b038beb88d91a56d7072ea7c34e`; harness inteiro = **121/121**, 19/19 nichos. Tres provas negativas do `C120`, as tres vermelhas e a fonte restaurada (conferida por `cmp`): a frase do prompt na forma antiga → «prompt sem: A fusao parte do PACOTE»; o corte fora do manifesto → «manifesto sem a base do pacote / o transplante / o corte»; a excecao fora do CEREBRO → «CEREBRO: dev sem «fora o CEREBRO, que é `fusao`» | ...» (os 19 nichos).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O kit dizia, nos dois arquivos `fusao` do pacote de update, «compare e proponha o merge», sem dizer de onde partir. O got-legends partiu do CEREBRO vivo e enxertou o v1.138 em fatias (13 turnos, duas WOs, e a terceira planejava 50 blocos de um CEREBRO de 104 KB); na fusao das Instrucoes, a linha do git so leitura do pacote se perdeu e o turno seguinte rodou `git add` pelo chat. Agora: a base e o arquivo do pacote, o projeto transplanta o que e dele, e o inventario (o transplante, o que ficou de fora e toda linha do pacote cortada) vai ao usuario antes da gravacao. No prompt do update, no manifesto e no CEREBRO gerado dos 19 nichos. `C120` novo. CHANGELOG, STATUS (o hash da wo0168 e esta WO), DECISIONS (`D-180`), IDEAS (`i-N92` e o livro de leitura) e o log de 15/11. A carta 01 ao got-legends fica na pasta-pai dele, fora do repo.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | a frase `fusao` no prompt do update, no manifesto e no CEREBRO gerado; a excecao do CEREBRO na regra do `meta/` especializado (prompt e CEREBRO); `KIT_VERSION` 1.142.0 | 8 / 6 | crlf | `bd6326bc4c871f17b992d104fabd689891f6c004` |
| `validate.js` | `C120` | 23 / 0 | crlf | `9278673e79199a31c73bb549243fca445f2dcda6` |
| `meta/CHANGELOG.md` | v1.142.0 | 7 / 1 | lf | `d920dab9b04a42fa110a2cd9dc92f51bfde0a0ed` |
| `meta/DECISIONS.md` | `D-180` | 10 / 0 | crlf | `1756d018c262ba1fc5440b98946c93a75cfd9eab` |
| `meta/IDEAS.md` | `i-N92`; a entrada do livro de leitura de 15/11 | 8 / 0 | lf | `5a578a54b45293d45281f6c502a8a24b03d638da` |
| `meta/STATUS.md` | carimbo v1.142.0 · 121/121 + C120; hash e custo da wo0168; bullet desta WO | 4 / 2 | lf | `29ab7c51dd13f72351d0dfe35bca9ff8036771a7` |
| `logs/2026-11-15.md` | novo (16 linhas) | 16 / 0 | lf | `6acf52d101733454f21b8c29f7a229369435822d` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **990.805 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Fora do repo (nao versionar): a carta `261115-kcm-para-got-01-o-update-pela-base-do-pacote.md`, na pasta-pai do got-legends. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `21de81c`. Diferente: PARE.
2. `git status --short` = exatamente os seis ` M` do inventario, `?? logs/2026-11-15.md`, `?? .claude/launch.json` e `?? meta/workorders/261115-wo0169-fusao-pela-base-do-pacote.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` dos seis rastreados = a coluna + / − (60 acrescentadas, 9 removidas); o log tem 16 linhas (`wc -l`). Diferente: PARE.
4. Leia o diff inteiro e o log novo. As tres frases trocadas no `src/` sao linhas longas de `L.push`: confira que cada uma comeca e termina como a vizinha (aspas, `);`), sem quebra no meio.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `f54130b7f32e4b038beb88d91a56d7072ea7c34e`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **121/121**. Registre cruas as linhas do `C120`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-15.md index.html meta/workorders/261115-wo0169-fusao-pela-base-do-pacote.md
```

```
git commit -m "feat(kit): a fusao do CEREBRO e das Instrucoes parte do pacote - base do kit, transplante do projeto, inventario do corte; C120 (wo0169, D-180, v1.142.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0169.txt` (`date +%y%m%d-%H%M`, rodado na hora).
