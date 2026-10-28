# WO 0146 — a tabela de gatilhos para de se contradizer: o canal do documento com o Code, e o ritual em dois tempos no canal pasta

> **Forma:** conferencia (metodo C, piloto 3/10, D-170) · **Tipo:** mista — CODIGO (template + harness) e DOC (registros). **A primeira de codigo do piloto.** Corta a **v1.133.0** (`D-158`, `D-171`).
> **Config sugerida:** modelo padrao, esforco baixo. Nada a editar: conferir, gerar o `index.html`, validar, publicar.
> **Pre-requisito:** HEAD = `db5b54f`, `main` = `origin/main`; harness em 19/19 · 113/113 · 0 erros, v1.132.0.
> **Base:** a `i-N74`, itens 1 e 2 (a `FK-BE` e a `FK-BF` do Mapoteca, lidas em 2026-10-27); o pedido do dono em 2026-10-28 («confira e escreva a wo0146»). As duas primeiras WOs do piloto passaram sem parada, como a ordem do piloto pede antes do codigo.
> **Ancoras lidas em:** HEAD `db5b54f` («docs(meta): a primeira linha da medida do piloto e o custo da conferencia como coluna (wo0145, piloto 2/10 do metodo C)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -4 --oneline` em 2026-10-28; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261027-1654` (apply wo0145) lido inteiro e movido para `../notas-arquivadas/`.
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

> Metodo C (D-170): o chat JA GRAVOU tudo na arvore e ja rodou build + harness numa replica do HEAD com os arquivos dele por cima. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O Mapoteca achou, no pacote v1.131.0, duas contradicoes na tabela de gatilhos do CEREBRO gerado, e o chat as conferiu no `src/` da v1.132.0: continuam. (1) **`FK-BE`:** com o Code ligado, a tabela manda «Entrega o DECISIONS.md completo» (123 linhas do mesmo molde nos 19 nichos), enquanto a secao «Ao final da conversa» diz que documento grande e vivo muda por WO. (2) **`FK-BF`:** no canal pasta, a linha «Inicio de turno» manda ler os quatro arquivos de contexto «**Todo turno**, nao so ao abrir a conversa», contra o ritual em dois tempos da secao «Canal do chat». Os dois lados novos ja estavam decididos (`D-166`; o ritual em dois tempos); a WO so leva a tabela ate eles, e poe os dois pares no `C111`.

## O que muda no codigo (para ler o diff com o mapa)

- `src/index.template.html`: a funcao nova `gatilhoComCode` (logo depois de `canalPasta`) troca «Entrega X.md completo(s)» por «Atualiza X.md pelo canal do documento / de cada um»; no `buildClaudeMd`, a montagem da tabela de gatilhos divide «Inicio de turno» em «Abertura de conversa» + «Inicio de TODO turno» quando o Mount esta desligado, aplica `gatilhoComCode` quando o Code esta ligado, e poe a nota do canal abaixo da tabela com o Code; `KIT_VERSION` 1.132.0 → 1.133.0.
- `validate.js`: `C111` ganha dois pares (7 → 9); o `C40` aceita a linha de inicio na forma de duas linhas.

**Medido na replica:** com o Code, as 123 linhas «Entrega … completo» dos 19 nichos sairam todas como «Atualiza … pelo canal …» — inclusive o plural, a forma sem artigo, a com parentese no meio e o gatilho triplo do `narrative`. **Prova negativa:** desligada a troca do «completo», o par novo acusa nos 19 nichos com o Code; desligada a divisao da linha, o outro par acusa nos 19 do canal pasta.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat (arquivo novo: `+N / 0` pelo `wc -l`); `sha1sum` do arquivo da arvore. Fim de linha na arvore (`git ls-files --eol`): `src/index.template.html`, `validate.js` e `meta/DECISIONS.md` **CRLF**; os outros LF.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `src/index.template.html` | `gatilhoComCode`; a tabela de gatilhos (duas linhas no canal pasta, o canal com o Code, a nota); `KIT_VERSION` 1.133.0 | 23 / 4 | `b1b682ed2af4cefdd5e2ffcc3602fc03e4f043b7` |
| `validate.js` | `C111` +2 pares; `C40` aceita as duas linhas | 7 / 3 | `ec590938968fa20723ad0a64c52160ab42e942f4` |
| `meta/CHANGELOG.md` | v1.133.0 no topo e no cabecalho | 7 / 1 | `59c23e7fcc545b4ad1b97e2b97f508e6976b8476` |
| `meta/STATUS.md` | versao v1.133.0; «nove pares» no `C111` (dizia «cinco»); o hash da wo0145; o bullet desta WO | 4 / 2 | `b5d875897a56275aa603f2191a487d94fac8c4ea` |
| `meta/IDEAS.md` | `i-N74` em parte resolvida (itens 1 e 2); a linha da wo0145 na tabela da `i-N71` | 2 / 1 | `a7caa67d23c67ad39e0e18eab09280a539f6ee20` |
| `meta/DECISIONS.md` | `D-171` no fim | 14 / 0 | `3991dd9ce766bf224a2dd6039da53917e32a9c9b` |
| `logs/2026-10-28.md` (novo) | Conversa 1 do chat | 14 / 0 | `9e2a1589d13202619c44b19937b43f738a1896e8` |

Gerado por quem aplica (`src/` muda): `index.html` com **940.470 bytes** (do template em CRLF, como na sua arvore) e `tr -d '\r' < index.html | sha1sum` = **`8d2ee60d48b918bd50608cd97412d49e2e229e26`**, medidos na replica. O sha1 sem CR e o que vale: os bytes dependem do fim de linha do template (em LF dariam 935.272).
Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `db5b54f`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/CHANGELOG.md`, ` M meta/DECISIONS.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, ` M src/index.template.html`, ` M validate.js`, `?? .claude/launch.json`, `?? logs/2026-10-28.md`, `?? meta/workorders/261028-wo0146-gatilhos-pelo-canal.md`. Faltou ou sobrou: PARE.
3. `sha1sum src/index.template.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md logs/2026-10-28.md` = os do inventario, e `git diff --numstat` = a coluna + / − (o log, `wc -l` = 14). Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro. `git ls-files --eol src/index.template.html validate.js meta/DECISIONS.md` = `w/crlf` nos tres.
5. `node build.js` → `OK: index.html (940470 bytes)`; `tr -d '\r' < index.html | sha1sum` = o do inventario. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **113/113**. Registre cruas as linhas do `C111` (esperado: **9 pares em 152 combinacoes; pasta do pacote AAMMDD-kcm-update-v1.133.0**, com a data de hoje), do `C54` (**v1.133.0 nos tres lugares**) e do `C43` (**76 clausulas**). Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html index.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md logs/2026-10-28.md meta/workorders/261028-wo0146-gatilhos-pelo-canal.md
```

```
git commit -m "feat(kit): a tabela de gatilhos segue o canal do documento com o Code e o ritual em dois tempos no canal pasta (wo0146, D-171)" -m "Com o Code, Entrega X.md completo vira Atualiza X.md pelo canal do documento, com a nota do canal abaixo da tabela (FK-BE). No canal pasta, Inicio de turno vira Abertura de conversa e Inicio de TODO turno (FK-BF). C111 7 para 9 pares. Corta a v1.133.0. Piloto 3/10 do metodo C, a primeira de codigo."
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). O pre-commit hook roda build + harness de novo: diga se rodou e o que deu. Nao edite STATUS, DECISIONS nem log: no piloto eles sao do chat. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0146.txt` (`date +%y%m%d-%H%M`, rodado na hora).
