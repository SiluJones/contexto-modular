# WO 0150 — o roteiro do dono vai no chat, no mesmo turno da WO; e o `.claude/` se confere em vez de se supor

> **Forma:** conferencia (metodo C, piloto 7/10, D-170) · **Tipo:** mista — CODIGO (template, harness, molde de WO da casa) e DOC (registros). **A terceira de codigo do piloto.** Corta a **v1.135.0** (`D-158`, `D-173`).
> **Config sugerida:** modelo padrao, esforco baixo. Nada a editar: conferir, gerar o `index.html`, validar, publicar.
> **Pre-requisito:** HEAD = `258e4f7`, `main` = `origin/main`; harness em 19/19 · 114/114 · 0 erros, v1.134.0.
> **Base:** a `i-N79` e a `i-N78` (a leitura de 2026-11-05 do FrameMatch, do Lunoda, do PrintImposer e do GameDataHub, e o relato do dono: o roteiro saiu no turno seguinte em quatro projetos); o pedido do dono em 2026-11-05 («escreva a wo0150»).
> **Ancoras lidas em:** HEAD `258e4f7` («fix(kit): o manifesto do pacote conta e nomeia o que o pacote traz, e as skills do Code saem de uma lista so (wo0149, D-172)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-05; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261105-0859` (apply wo0149) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD (`git archive HEAD | tar -x`, fora do repo) com os oito arquivos por cima e o `node_modules` do dono: `node build.js` = 942.495 bytes, sha1 sem CR o do inventario; harness em **duas fatias** (89 s + 88 s), somando **114/114** e 19 nichos. No caminho o harness pegou tres coisas, todas corrigidas antes da entrega: a linha nova das Instrucoes estourava o orcamento dos modos (`C26`, 1.011 > 950) e o do modo Code (`C28`, 575 > 550), e a frase do `.claude/` levava `sha1sum` a um CEREBRO sem o Code (`C105`).
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

> Metodo C (D-170): o chat JA GRAVOU tudo na arvore e ja rodou build + harness numa replica do HEAD com os arquivos dele por cima. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Quatro projetos entregaram o roteiro do dono no turno seguinte ao da WO de codigo que ele testa (FrameMatch e PrintImposer chegaram a escrever regra local; o PrintImposer, ao se corrigir, escondeu o roteiro so dentro do arquivo da WO). A causa esta no molde de WO do kit: o roteiro «vai para o fecho do chat», sem dizer qual, e o cabecalho dele pede o **Estado** com o commit — que so existe depois do relatorio. A regra certa («no MESMO turno, nao na resposta seguinte») existia, mas no fecho generico do CEREBRO, longe da WO. E as Instrucoes geradas mostravam o `/apply-wo` em codigo inline, contra a regra do bloco cercado. Junto: a frase «a ponte do chat tambem nao grava em `.claude/`» (`D-169`) veio de um relato so; tres projetos mediram que grava.

## O que muda no codigo (para ler o diff com o mapa)

- `src/index.template.html`:
  - no molde de WO gerado, o roteiro vai «**no chat, no MESMO turno que entrega a WO**, como bloco proprio — nunca so dentro do arquivo da WO, nunca no turno seguinte: nada nele depende do relatorio, porque ele sai da spec e do que a WO muda»;
  - o **Estado** do roteiro nomeia a WO («o commit da woNNNN»), nao um hash que ainda nao existe;
  - nas Instrucoes com o Code, a linha vira «**WO nunca vai sozinha:** `/apply-wo <arquivo>` em bloco cercado; roteiro do dono, se houver, no chat.» (102 caracteres: o orcamento do modo Code fica em 549 de 550);
  - no CEREBRO, o `.claude/settings.json` no canal pasta e gravado no lugar quando a ponte grava, conferido na primeira vez relendo o que gravou; se nao gravar, vai para a pasta-pai. O motivo de a permissao nao passar pelo executor fica dito como divisao de raias;
  - `KIT_VERSION` 1.134.0 → 1.135.0.
- `meta/workorders/_TEMPLATE.md` (a casa): o mesmo texto do molde, nas mesmas linhas (CRLF).
- `validate.js`: o `C43` ganha a clausula «modelo de WO: roteiro no mesmo turno» (`/no MESMO turno que entrega a WO/`), cobrada no molde gerado e no da casa. Sem check novo: 114 continua.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat (arquivo novo: `wc -l`); `sha1sum` do arquivo da arvore. Fim de linha na arvore (`git ls-files --eol`): `src/index.template.html`, `validate.js`, `meta/workorders/_TEMPLATE.md` e `meta/DECISIONS.md` **CRLF**; os outros LF.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `src/index.template.html` | o roteiro no molde de WO; o Estado pelo nome da WO; a linha das Instrucoes com o Code; o `.claude/` no CEREBRO; `KIT_VERSION` 1.135.0 | 7 / 5 | `2f86c32e2354e8f447c6143f84d1f28394e0e93c` |
| `validate.js` | a clausula nova do `C43` | 2 / 0 | `fc34b9f1ca58e67e41e22a61c515d056b380fbe0` |
| `meta/workorders/_TEMPLATE.md` | o roteiro no molde da casa, igual ao gerado | 4 / 2 | `d86d472e3bdbe2273dd20d46c17ea81a3797582b` |
| `meta/CHANGELOG.md` | v1.135.0 no topo e no cabecalho | 8 / 1 | `21273bc0651ba83612c8188fbc9ccfa89e839f0b` |
| `meta/STATUS.md` | versao v1.135.0; o hash da wo0149; o bullet desta WO | 4 / 2 | `dd16abbc21a8f786cfd961bb07c6228a018aab74` |
| `meta/IDEAS.md` | `i-N78` e `i-N79` resolvidas; `i-N80` e `i-N81` novas; a linha da wo0149 na `i-N71`; livro de leitura de 2026-11-05 (tres vizinhos novos) | 25 / 3 | `4cf1ab8ba428379d1b94fb8f3cc42d14e4392c3e` |
| `meta/DECISIONS.md` | `D-173` no fim | 12 / 0 | `690f846ef18f2123c135156f607ce1bcbd0a16ae` |
| `logs/2026-11-05.md` (novo) | Conversa 1 do chat | 14 linhas (`wc -l`) | `917b58c5af4f0b2c39d2b2b26a210f2efc7a1447` |

Gerado por quem aplica (`src/` muda): `index.html` com **942.495 bytes** (do template em CRLF, como na sua arvore) e `tr -d '\r' < index.html | sha1sum` = **`24b9b970b146cae4ce29d7c5a3f038a326c6b40c`**, medidos na replica. O sha1 sem CR e o que vale.
Fora do repo (nao versionar): nada desta WO. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `258e4f7`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/CHANGELOG.md`, ` M meta/DECISIONS.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, ` M meta/workorders/_TEMPLATE.md`, ` M src/index.template.html`, ` M validate.js`, `?? .claude/launch.json`, `?? logs/2026-11-05.md`, `?? meta/workorders/261105-wo0150-roteiro-no-mesmo-turno.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito arquivos do inventario = os da tabela, e `git diff --numstat` = a coluna + / − (o log, `wc -l` = 14). Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro. `git ls-files --eol` dos quatro CRLF = `w/crlf`.
5. `node build.js` → `OK: index.html (942495 bytes)`; `tr -d '\r' < index.html | sha1sum` = o do inventario. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre cruas as linhas do `C43` (esperado: **77 clausulas**), do `C28` (**+Code 549/550**), do `C26` (**incremento dos modos: 921**), do `C54` (**v1.135.0 nos tres lugares**) e do `C105`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html index.html validate.js meta/workorders/_TEMPLATE.md meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md logs/2026-11-05.md meta/workorders/261105-wo0150-roteiro-no-mesmo-turno.md
```

```
git commit -m "fix(kit): o roteiro do dono vai no chat, no mesmo turno da WO, e o .claude/ se confere em vez de se supor (wo0150, D-173)" -m "O molde de WO dizia vai para o fecho do chat e pedia o commit no cabecalho do roteiro; quatro projetos entregaram o roteiro no turno seguinte. Instrucoes com o Code: /apply-wo em bloco cercado e o roteiro no chat. CEREBRO: a ponte que grava em .claude/ se confere. C43 com a clausula nova. Tres vizinhos novos no livro (i-N80) e as chaves do localStorage (i-N81). Corta a v1.135.0. Piloto 7/10 do metodo C, a terceira de codigo."
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). O pre-commit hook roda build + harness de novo: diga se rodou e o que deu. Nao edite STATUS, DECISIONS nem log: no piloto eles sao do chat. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0150.txt` (`date +%y%m%d-%H%M`, rodado na hora).
