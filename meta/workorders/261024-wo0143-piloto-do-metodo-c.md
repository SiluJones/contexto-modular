# WO 0143 — o metodo C em piloto na casa: o dono por documento antes da primeira, a forma «conferencia» no molde e nas skills

> **Tipo:** DOC — so a casa (`meta/CEREBRO.md`, `meta/IDEAS.md`, `meta/DECISIONS.md`, o molde de WO, as skills `apply-wo`, `wrap` e `check-wo`, o `CLAUDE.md`). Nao toca `src/` nem o `index.html`: **nao corta versao** (`D-158`), e nao precisa de build — a rede e o `git diff`. O harness roda uma vez no fim porque o `C43`, o `C102` e o `C103` leem o CEREBRO, o molde, as skills e o `CLAUDE.md`.
> **Config sugerida:** modelo padrao, esforco baixo. 9 edicoes TROCAR, todas com ancora de UMA linha inteira, e 2 que acrescentam no fim do arquivo (o molde e o `meta/DECISIONS.md`).
> **Pre-requisito:** HEAD = `0549b16`, `main` = `origin/main`. Harness em **19/19 · 113/113 · 0 erros**, v1.132.0.
> **Base:** ponto 4 da analise `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md` (M3), aceito pelo dono em 2026-10-24, e o pedido do dono no mesmo dia: «Escreva a WO do piloto do metodo C na casa, com o dono por documento antes da primeira».
> **Depende de:** wo0142 (aplicada, `9b0a3a6`; fecho `0549b16`; conferida de volta pelo chat em 2026-10-24).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `28dc979c944f722c5fecdcf2a1ab21187ea1118b  INSTRUCOES-DO-PROJETO.md` (a regra do delta e o item do piloto nas raias; LF)
> - `de2857022e23da0187b990029e4c81d75c26ebcc  meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md` (status: a `i-N71` vira esta WO; LF)
> - `d546fc1a42db63219ca098209bd47039be975ee2  logs/2026-10-24.md` (Conversas 3 e 4 do chat, depois da Conversa 2 do Code; LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo. Ja aplicada = o texto novo inteiro esta no arquivo **e a ancora nao** — salvo quando a ancora esta DENTRO do texto novo (todas as TROCAR desta WO, menos a 8 e a 10). Ja aplicada, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `0549b16`; recortadas do arquivo vivo por script, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x`, com os tres arquivos do chat por cima, **a partir do texto desta WO**):
> - `meta/CEREBRO.md` — as linhas «- **Um dono por documento, escrito.**» e «- **O terminal do chat é uma VM Linux»
> - `meta/workorders/_TEMPLATE.md` — a linha «> Se voce ainda nao sabe o que construir» e o fim do arquivo (o bloco do `git push`)
> - `.claude/skills/apply-wo/SKILL.md` — a linha «PEÇA — não escolha uma WO por conta própria.»; `.claude/skills/wrap/SKILL.md` — a linha «Encerre a tarefa atual (fechamento da raia de EXECUÇÃO»; `.claude/skills/check-wo/SKILL.md` — as linhas «Passos:» e a da regra de ouro com «18/18»
> - `CLAUDE.md` — a linha «reescreve). Protocolo completo em `meta/CEREBRO.md`»; `meta/IDEAS.md` — o titulo da `i-N71`; `meta/DECISIONS.md` — o fim do arquivo (o «**Números**» da `D-169`)
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-170`, a secao do piloto no CEREBRO, a `i-N71` com a tabela da medida. **As Instrucoes, a analise e o log de 24/10 sao do chat:** esta WO so os versiona pelo sha1. **E a ultima WO na forma «edicoes» antes do piloto:** o `/wrap` dela roda como sempre (STATUS e log pelo Code); da wo0144 em diante, nao. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por esta WO nem por nenhum comando dela.**

---

## 1. Por que

O dono aceitou o piloto do metodo C na casa (M3 da analise `261023`): dez WOs em que o chat grava na arvore e a WO so confere e publica, como o satelite-web faz desde a `DEC-178` dele (10 WOs, 10 verdes). A analise deixou uma condicao: **o dono por documento escrito antes da primeira WO de conferencia**, ou os dois escritores brigam — hoje o Code escreve `src/`, `validate.js`, STATUS e a sua secao do log, e o CEREBRO, as skills e o molde mudam por WO. Esta WO escreve a regra nova pelo canal que a regra velha manda (por isso ainda e na forma «edicoes»), poe a forma «conferencia» no molde e nas skills do Code, e deixa a medida pronta na `i-N71`, com a base das dez WOs anteriores.

## Inventario

- `meta/CEREBRO.md`: o item «Um dono por documento» ganha uma frase que remete ao piloto; a secao nova «🧪 Método C — piloto na casa (D-170)» logo depois do ultimo item do «Canal do chat», antes do divisor.
- `meta/workorders/_TEMPLATE.md`: um ponteiro no quadro do topo; o esqueleto da forma «conferencia» no fim.
- `.claude/skills/apply-wo/SKILL.md`: um paragrafo da WO de conferencia, logo depois do primeiro.
- `.claude/skills/wrap/SKILL.md`: um item no topo — sem fecho depois de WO de conferencia.
- `.claude/skills/check-wo/SKILL.md`: o passo 0 da WO de conferencia; «18/18» → «19/19».
- `CLAUDE.md`: um paragrafo do piloto no «Fluxo com o chat».
- `meta/IDEAS.md`: o titulo da `i-N71` e a tabela da medida, com a base.
- `meta/DECISIONS.md`: `D-170` no fim.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `0549b16`. Se diferente, **PARE e reporte**.
2. `sha1sum INSTRUCOES-DO-PROJETO.md meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md logs/2026-10-24.md` = os do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M INSTRUCOES-DO-PROJETO.md`, ` M logs/2026-10-24.md`, ` M meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md`, `?? .claude/launch.json`, `?? meta/workorders/261024-wo0143-piloto-do-metodo-c.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c '^## D-170 ' meta/DECISIONS.md` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `meta/CEREBRO.md` · o dono por documento remete ao piloto

**Ancora** (a linha inteira):

```
- **Um dono por documento, escrito.** Nesta casa: o chat grava inteiros `meta/analises/`, as WOs, o `INSTRUCOES-DO-PROJETO.md`, as cartas e o handoff da pasta-pai, e as seções do chat no log do dia; o Code escreve `src/`, `index.html`, `validate.js`, `meta/STATUS.md` (pelo `/wrap`) e a sua seção do log; `meta/CEREBRO.md`, `meta/DECISIONS.md`, `meta/IDEAS.md`, `meta/CHANGELOG.md` e os moldes mudam por WO.
```

**Substituir por:**

```
- **Um dono por documento, escrito.** Nesta casa: o chat grava inteiros `meta/analises/`, as WOs, o `INSTRUCOES-DO-PROJETO.md`, as cartas e o handoff da pasta-pai, e as seções do chat no log do dia; o Code escreve `src/`, `index.html`, `validate.js`, `meta/STATUS.md` (pelo `/wrap`) e a sua seção do log; `meta/CEREBRO.md`, `meta/DECISIONS.md`, `meta/IDEAS.md`, `meta/CHANGELOG.md` e os moldes mudam por WO. **Da wo0144 à wo0153 vale outra tabela — a do «🧪 Método C — piloto na casa (D-170)», logo abaixo:** um escritor só, o chat; o Code gera o `index.html` e escreve o relatório.
```

(O texto novo repete a ancora e acrescenta logo depois dela.)

## Edicao 2 — `meta/CEREBRO.md` · a secao do metodo C, depois do «Canal do chat»

**Ancora** (a linha inteira):

```
- **O terminal do chat é uma VM Linux, não o PowerShell do dono:** comando começa do zero, teto de cerca de 3 minutos, nada em segundo plano; fim de linha `i/lf w/crlf` não é mudança. O harness roda ali (`node build.js` + `node validate.js`, com o `node_modules` do dono) numa réplica fora da pasta — nunca no repo vivo antes da WO.
```

**Substituir por:**

```
- **O terminal do chat é uma VM Linux, não o PowerShell do dono:** comando começa do zero, teto de cerca de 3 minutos, nada em segundo plano; fim de linha `i/lf w/crlf` não é mudança. O harness roda ali (`node build.js` + `node validate.js`, com o `node_modules` do dono) numa réplica fora da pasta — nunca no repo vivo antes da WO.

## 🧪 Método C — piloto na casa (D-170)

> **Da wo0144 à wo0153** a casa trabalha como o satelite-web desde a `DEC-178` dele: o chat grava na árvore e verifica; a WO vira **ordem de conferência e publicação**; o Code confere, publica e relata, sem reescrever. Existe para medir, com dado da casa, se a variante cabe no kit (`i-N71`; análise `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md`). Enquanto durar, vale no lugar do «dono por documento» acima e das raias de «🤝 Fluxo Chat ↔ Claude Code»; o resto deste arquivo segue valendo. **O kit não muda durante o piloto:** o que ele gera continua na forma «edições».

- **Um escritor por documento — o chat —** para tudo o que entra no commit: `src/`, `validate.js`, `build.js`, `meta/` (STATUS, DECISIONS, IDEAS, CHANGELOG, este CEREBRO, análises, moldes), as skills de `.claude/skills/`, o `CLAUDE.md`, o `INSTRUCOES-DO-PROJETO.md`, o log do dia inteiro e a própria WO. **Do Code:** o `index.html`, que ele gera com `node build.js`, e o relatório na pasta-pai. **Do dono:** `.claude/settings.json`, `.claude/settings.local.json` e a pasta do histórico do CDC. Achado do Code vai no relatório, nunca num doc: o chat lê e registra no turno seguinte.
- **Como o chat grava:** troca exata por script sobre o arquivo lido do disco no turno — ocorrência única exigida, no fim de linha que o arquivo já tem (CRLF continua CRLF; `git ls-files --eol` diz qual) —; arquivo novo em LF. Nunca reescreve arquivo de memória nem a partir de saída de ferramenta, que pode vir truncada. Gravação que a ponte interrompe se confere pelo `sha1sum` antes de refazer: refazer às cegas aplica a troca duas vezes.
- **Verificação antes de entregar — é dela que o piloto depende:** réplica fora da pasta (`git archive HEAD | tar -x`), com os arquivos do `git status --short` copiados da árvore por cima e o `node_modules` do dono; `node build.js` e `node validate.js index.html` verdes; check novo prova que falha sem a mudança (prova negativa na réplica, relatada na WO). O chat continua sem rodar build no repo vivo: o `index.html` da árvore é do Code.
- **A WO de conferência** (esqueleto no fim do `meta/workorders/_TEMPLATE.md`): «Âncoras lidas em» com o HEAD e o `git status --short` de partida; **Inventário** com cada arquivo, o que muda, o `+/−` do `git diff --numstat` e o `sha1sum` da árvore; quando `src/` muda, o `index.html` esperado (bytes e `sha1sum` sem CR, medidos na réplica); o harness esperado; o commit. Sem âncora e sem texto novo: o diff é o registro. **O Code:** `git pull --ff-only`; `git status --short` igual ao inventário; `sha1sum` e `numstat` iguais; lê o diff inteiro; `node build.js` se `src/` mudou; `node validate.js index.html`; `add` só do inventário, do `index.html` gerado e da WO; commit; push; relatório. **Sem `/wrap`.** Falhou, PARA e relata — o chat corrige na árvore, atualiza a mesma WO (sha1 novo) e reentrega a mesma linha `/apply-wo`.
- **Conferência de volta, barata:** o relatório inteiro; `git show --stat` do commit contra o inventário; `git status` limpo; e, sem commit novo por cima, o `sha1sum` da árvore ainda igual ao do inventário. O hash do commit entra no STATUS pela WO seguinte.
- **Ordem:** as duas primeiras WOs só de documentação (sem `src/`, `validate.js` nem `build.js`); código a partir da terceira, se as duas passaram sem parar.
- **Medida:** a tabela da `i-N71` no `meta/IDEAS.md`, que o chat preenche a cada conferência de volta — WO, tipo, parou no Code (e por quê), erro que chegou ao commit, linhas da WO —, contra as dez anteriores (wo0133 a wo0142).
- **Pausa:** um erro que chegue a um commit, ou duas WOs seguidas paradas no Code por conteúdo, suspende o piloto — a WO seguinte volta à forma «edições», e o dono decide.
- **Fim:** depois da conferência de volta da wo0153, o chat escreve a análise do resultado, e o dono decide (a) se a casa fica no método C — e esta seção perde o «piloto» — ou volta, e (b) se o kit ganha a variante (M2), com a condição de entrada: só vale onde o chat roda a verificação do projeto antes de entregar.
```

(O texto novo repete a ancora e acrescenta logo depois dela.)

## Edicao 3 — `meta/workorders/_TEMPLATE.md` · o ponteiro para a forma «conferencia»

**Ancora** (a linha inteira):

```
> Se voce ainda nao sabe o que construir, nao e hora de escrever WO — e hora de analise ou spec.
```

**Substituir por:**

```
> Se voce ainda nao sabe o que construir, nao e hora de escrever WO — e hora de analise ou spec.
>
> **Forma «conferencia» (piloto do metodo C, D-170, wo0144 a wo0153):** o chat ja gravou tudo na arvore e a WO so confere e publica — sem ancora e sem texto novo; o esqueleto esta no fim deste arquivo. Fora do piloto, vale a forma «edicoes» abaixo.
```

(O texto novo repete a ancora e acrescenta logo depois dela.)

## Edicao 4 — `meta/workorders/_TEMPLATE.md` · o esqueleto da forma «conferencia», no fim

**Acrescentar** depois da ultima linha do arquivo, com **uma linha em branco** entre ela e o texto novo:

```
---

## Forma «conferencia» — WO do metodo C (piloto, D-170)

> Da wo0144 a wo0153. O chat JA GRAVOU tudo na arvore (troca exata, no fim de linha do arquivo) e ja rodou build + harness numa replica do HEAD com os arquivos dele por cima. Esta forma nao traz ancora nem texto novo: o diff e o registro. Quem aplica CONFERE e PUBLICA; nao reescreve e nao escreve em doc. Falhou, PARE e relate: o chat corrige na arvore e atualiza esta mesma WO. Protocolo: `meta/CEREBRO.md`, «Metodo C — piloto na casa».

**Cabecalho**

> **Forma:** conferencia (metodo C, piloto N/10, D-170) · **Tipo:** DOC · CODIGO · mista.
> **Config sugerida:** modelo e esforco para quem confere (costuma bastar o mais leve).
> **Pre-requisito:** HEAD = `xxxxxxx`, `main` = `origin/main`; harness em 19/19 · NNN/NNN.
> **Base:** a decisao, a analise ou o pedido que originou.
> **Ancoras lidas em:** o HEAD e o `git status --short` de partida, lidos neste turno ANTES das gravacoes do chat.
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

**Inventario** — saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat (arquivo novo: `+N / 0` pelo `wc -l`); `sha1sum` do arquivo da arvore.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `caminho/do/arquivo` | o que muda, em poucas palavras | N / N | `...` |

Gerado por quem aplica (so quando `src/` muda): `index.html` com NNN bytes e `tr -d '\r' < index.html | sha1sum` = `...`, medidos na replica.
Nao rastreados que ficam fora: `.claude/launch.json` (e o que mais o `git status` de partida mostrar).

**Passos**

1. `git pull --ff-only`; HEAD = o do cabecalho. Diferente: PARE.
2. `git status --short` = exatamente o inventario, esta WO como `??` e os nao rastreados que ficam fora. Faltou ou sobrou: PARE.
3. `sha1sum` de cada arquivo = o do inventario, e `git diff --numstat` = a coluna + / −. Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro.
5. So se `src/` mudou: `node build.js`; bytes e sha1 do `index.html` = os do inventario.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com NNN/NNN.
7. Verde: `git add` de cada caminho do inventario, do `index.html` gerado e desta WO; `git commit -m "tipo(escopo): descricao sem acento"`; `git push`; `git status -sb` com `main` = `origin/main`.

**Relatorio** — o corpo minimo da forma «edicoes», com dois acrescimos: o que voce viu no diff que a WO nao diz, e se o fim de linha de cada arquivo continuou o que era (`git ls-files --eol`). Nao edite STATUS, DECISIONS nem log: no piloto eles sao do chat.
```

## Edicao 5 — `.claude/skills/apply-wo/SKILL.md` · a WO de conferencia

**Ancora** (a linha inteira):

```
PEÇA — não escolha uma WO por conta própria.
```

**Substituir por:**

```
PEÇA — não escolha uma WO por conta própria.

**WO de conferência (método C, piloto da wo0144 à wo0153, D-170):** se o cabeçalho trouxer a linha «**Forma:** conferencia», o chat JÁ GRAVOU tudo na árvore, e você CONFERE e PUBLICA: `git pull --ff-only`; o `git status --short` mostra exatamente o Inventário (faltou ou sobrou, PARE); o `sha1sum` e o `git diff --numstat` de cada arquivo batem com ele (não bateu, PARE — alguém mexeu depois do chat); leia o diff inteiro; `node build.js` se `src/` mudou (bytes e sha1 do `index.html` contra o Inventário) e `node validate.js index.html`; verde, `add` só do Inventário, do `index.html` gerado e da WO, commit, push. **Não reescreva o que o chat gravou e não escreva em doc nenhum** — STATUS, DECISIONS e o log são do chat no piloto; achado vai no relatório. Sem `/wrap`. As regras de âncora, fim de linha e idempotência abaixo são da forma «edições»; push antes do relatório, menu no vermelho, corpo mínimo e relatório na pasta-pai valem para as duas.
```

(O texto novo repete a ancora e acrescenta logo depois dela.)

## Edicao 6 — `.claude/skills/wrap/SKILL.md` · sem fecho depois de WO de conferencia

**Ancora** (a linha inteira):

```
Encerre a tarefa atual (fechamento da raia de EXECUÇÃO — relatório, não o bloco de fecho do chat):
```

**Substituir por:**

```
Encerre a tarefa atual (fechamento da raia de EXECUÇÃO — relatório, não o bloco de fecho do chat):
- **Depois de uma WO de conferência (método C, piloto da wo0144 à wo0153, D-170), não feche aqui:** STATUS, DECISIONS e o log do dia são do chat durante o piloto, e o relatório do `/apply-wo` já é o fecho. Diga isso e pare, sem editar nada.
```

(O texto novo repete a ancora e acrescenta logo depois dela.)

## Edicao 7 — `.claude/skills/check-wo/SKILL.md` · o passo 0 da WO de conferencia

**Ancora** (a linha inteira):

```
Passos:
```

**Substituir por:**

```
Passos:

0. **WO de conferencia** (metodo C, D-170; a linha «Forma» do cabecalho diz conferencia): ela nao tem ancora. Os
   passos 1 e 2 viram: o `git status --short` mostra exatamente o Inventario, e o `sha1sum` e o `git diff --numstat`
   de cada arquivo batem com ele. Os passos 3 a 5 valem igual.
```

(O texto novo repete a ancora e acrescenta logo depois dela.)

## Edicao 8 — `.claude/skills/check-wo/SKILL.md` · a regra de ouro com 19 nichos

**Ancora** (a linha inteira):

```
   nada) — regra de ouro **18/18 nichos, 0 erros**. Se ja estiver vermelho, diga — nao se aplica WO
```

**Substituir por:**

```
   nada) — regra de ouro **19/19 nichos, 0 erros**. Se ja estiver vermelho, diga — nao se aplica WO
```

## Edicao 9 — `CLAUDE.md` · o paragrafo do piloto no «Fluxo com o chat»

**Ancora** (a linha inteira):

```
reescreve). Protocolo completo em `meta/CEREBRO.md` › «🤝 Fluxo Chat ↔ Claude Code».
```

**Substituir por:**

```
reescreve). Protocolo completo em `meta/CEREBRO.md` › «🤝 Fluxo Chat ↔ Claude Code».

**Piloto do método C (D-170, da wo0144 à wo0153):** a WO de conferência traz o que o chat já gravou na árvore, inclusive STATUS, DECISIONS e o log. Você confere (inventário, `sha1sum`, diff), roda build e harness, commita e empurra; não reescreve, não escreve em doc (o achado vai no relatório) e não roda `/wrap`. Protocolo: `meta/CEREBRO.md` › «🧪 Método C — piloto na casa».
```

(O texto novo repete a ancora e acrescenta logo depois dela.)

## Edicao 10 — `meta/IDEAS.md` · o titulo da `i-N71` e a tabela da medida

**Ancora** (a linha inteira):

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — EM PILOTO NA CASA (decidido em 2026-10-24, ponto 4 da análise `261023`): dez WOs no método C, começando pelas de documentação, com o dono por documento escrito antes da primeira; depois, o kit documenta a variante do modo Code com a condição de entrada. Dado de campo do satelite-web (2026-10-20): 10 WOs, 10 verdes
```

**Substituir por:**

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — PILOTO EM CURSO NA CASA (wo0143, `D-170`): dez WOs de conferência, da wo0144 à wo0153, as duas primeiras só de documentação; o dono por documento do piloto está no CEREBRO, «Método C»; no fim, a análise do resultado decide a casa e a variante do kit (M2). Dado de campo do satelite-web (2026-10-20): 10 WOs, 10 verdes

**Medida do piloto** (`D-170`) — o chat preenche uma linha a cada conferência de volta; linhas da WO por `wc -l`. **Base**, as dez WOs anteriores na forma «edições» (wo0133 a wo0142, medidas em 2026-10-24): **469 linhas** em média (222 a 709) e 32 KB; nenhuma parada no Code por conteúdo; dois achados de fim de linha que só o Code via (wo0138, wo0140); nenhum erro conhecido no commit.

| WO | Tipo | Parou no Code? | Erro no commit? | Linhas | Nota |
|---|---|---|---|---|---|
```

## Edicao 11 — `meta/DECISIONS.md` · `D-170` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo, com **uma linha em branco** entre ela e o texto novo:

```
## D-170 — O método C em piloto na casa: o chat grava na árvore, a WO confere e publica, por dez WOs

**Data:** 2026-10-24 · **WO:** 0143 · **Origem:** `i-N71`, ponto 4 da análise `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md`, aceito pelo dono em 2026-10-24 · **Revê, durante o piloto:** o dono por documento da `D-157` e a raia do Code (append em STATUS, DECISIONS e log, pelo `/wrap`).

**Decisão.** Da wo0144 à wo0153: (1) o chat grava na árvore tudo o que entra no commit — `src/`, `validate.js`, `meta/` com STATUS, DECISIONS e o log do dia, as skills, o `CLAUDE.md`, as Instruções e a WO —, por troca exata sobre o arquivo lido no turno e no fim de linha que o arquivo já tem, e roda build + harness numa réplica do HEAD com os arquivos dele por cima antes de entregar; (2) a WO vira ordem de conferência e publicação (forma «conferencia» no molde): inventário com `+/−` e `sha1sum`, `git status` contra ele, build, harness, commit, push; (3) o Code não reescreve e não escreve em doc — gera o `index.html` e escreve o relatório; falhou, para e relata, e o chat corrige na árvore e atualiza a mesma WO; sem `/wrap`. As duas primeiras WOs só de documentação; código a partir da terceira, se elas passaram sem parar. A tabela da `i-N71` mede cada uma contra as dez anteriores. Um erro que chegue a um commit, ou duas paradas seguidas por conteúdo, suspende o piloto. No fim, a análise do resultado decide se a casa fica no método C e se o kit ganha a variante (M2).

**Por que esta WO ainda é na forma «edições».** A regra que ela troca — quem escreve cada documento — é a mesma que diz que o CEREBRO, as skills e o molde mudam por WO. Gravar a regra nova no método C seria usá-la antes de valer; e o dono por documento tinha de estar escrito antes da primeira WO de conferência, ou os dois escritores brigam (o risco que a análise apontou).

**Por que o `index.html` fica com o Code.** O chat não roda build no repo vivo — a réplica é o lugar dele —, e o `index.html` é gerado, não escrito: quem o gera é quem commita. O inventário traz os bytes e o `sha1sum` sem CR medidos na réplica, e o que o Code gerar tem de bater.

**O que o piloto mede que o satelite-web não mediu:** um verificador de 113 checks em vez de tsc + ESLint, e uma casa em que o Code também escrevia os docs. O caso que nenhuma das duas amostras tem — o projeto sem verificador — segue fora: é a condição de entrada da M2.

**Números** `[medido no disco e na réplica do HEAD 0549b16]`: Instruções da casa 7.199 → 7.636 caracteres (`len()` em UTF-8); harness 113/113, sem check novo; base do piloto, as dez WOs anteriores: 469 linhas em média.
```

## Edicao 12 — harness (uma vez)

```
node validate.js index.html
```

Esperado: `RESULTADO: VERDE — 19/19, 0 erros` com **113/113**. Sem `node build.js`: esta WO nao toca `src/`. Registre cruas no relatorio as linhas do `C43` (esperado: **76 clausulas**) e do `C103` (esperado: **6 caminhos meta/ conferidos** — o CEREBRO passa a citar a analise `261023`). Vermelho = **PARE**.

## Edicao 13 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 12. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere ou tira (medido na replica). Esperado `antes -> depois` no comentario:

```
grep -c '^## 🧪 Método C — piloto na casa (D-170)' meta/CEREBRO.md        # 0 -> 1
grep -cF 'Da wo0144 à wo0153 vale outra tabela' meta/CEREBRO.md           # 0 -> 1
grep -c '^## Forma «conferencia»' meta/workorders/_TEMPLATE.md            # 0 -> 1
grep -c '^> \*\*Forma «conferencia» (piloto' meta/workorders/_TEMPLATE.md # 0 -> 1
grep -c '^\*\*WO de conferência (método C' .claude/skills/apply-wo/SKILL.md   # 0 -> 1
grep -c '^- \*\*Depois de uma WO de conferência' .claude/skills/wrap/SKILL.md # 0 -> 1
grep -c '^0\. \*\*WO de conferencia\*\*' .claude/skills/check-wo/SKILL.md     # 0 -> 1
grep -c '18/18' .claude/skills/check-wo/SKILL.md                         # 1 -> 0
grep -c '^\*\*Piloto do método C (D-170' CLAUDE.md                        # 0 -> 1
grep -c '^## i-N71 .*PILOTO EM CURSO NA CASA' meta/IDEAS.md               # 0 -> 1
grep -c '^## D-170 ' meta/DECISIONS.md                                    # 0 -> 1
```

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `meta/CEREBRO.md` | 15 | 1 |
| `meta/workorders/_TEMPLATE.md` | 38 | 0 |
| `.claude/skills/apply-wo/SKILL.md` | 2 | 0 |
| `.claude/skills/wrap/SKILL.md` | 1 | 0 |
| `.claude/skills/check-wo/SKILL.md` | 5 | 1 |
| `CLAUDE.md` | 2 | 0 |
| `meta/IDEAS.md` | 6 | 1 |
| `meta/DECISIONS.md` | 14 | 0 |
| `INSTRUCOES-DO-PROJETO.md` (do chat, ja no disco) | 2 | 1 |
| `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md` (do chat, ja no disco) | 2 | 2 |
| `logs/2026-10-24.md` (do chat, ja no disco) | 26 | 0 |
| `meta/workorders/261024-wo0143-piloto-do-metodo-c.md` (esta WO) | 362 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada; os do chat, com `git diff --numstat` no repositorio.

## Edicao 14 — commit e push (verde = sem perguntar)

```
git add meta/CEREBRO.md meta/workorders/_TEMPLATE.md .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md .claude/skills/check-wo/SKILL.md CLAUDE.md meta/IDEAS.md meta/DECISIONS.md INSTRUCOES-DO-PROJETO.md meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md logs/2026-10-24.md meta/workorders/261024-wo0143-piloto-do-metodo-c.md
```

```
git commit -m "docs(meta): o metodo C entra em piloto na casa - dono por documento, forma conferencia no molde e nas skills (wo0143, D-170)" -m "Da wo0144 a wo0153 o chat grava na arvore tudo o que entra no commit, STATUS e log inclusive, e a WO so confere e publica: inventario com sha1sum, git status, harness, commit, push. O Code gera o index.html e escreve o relatorio, sem wrap. Base das dez WOs anteriores na i-N71. Sem corte de versao."
```

```
git push
```

**Depois do push, peça ao dono no relatorio:** recolar o `INSTRUCOES-DO-PROJETO.md` no painel do Projeto (o item do piloto nas raias e a regra do delta; 7.636 caracteres).

---

## Fora de escopo

- A pasta `notas-arquivadas\- Histórico - KCM (CDC)\`: nenhum comando desta WO a lista, le, move ou altera.
- O kit: nada do que ele gera muda no piloto (a variante M2 so depois do resultado).
- O `.claude/launch.json` nao rastreado: fica como esta.
- O STATUS: o `/wrap` desta WO o atualiza, como sempre.

## Armadilhas desta WO

- **Fim de linha.** `meta/CEREBRO.md`, `meta/DECISIONS.md`, `meta/workorders/_TEMPLATE.md`, a skill `wrap` e o `CLAUDE.md` sao **CRLF** na arvore — grave os textos novos em CRLF (as Edicoes 2, 4 e 11 tem muitas linhas). `meta/IDEAS.md`, `apply-wo` e `check-wo` sao LF.
- **A Edicao 4 traz uma tabela e um `tr -d '\r'` dentro do texto:** recorte, nao redigite — a barra invertida e literal.
- **A Edicao 7 acrescenta o item 0 logo depois de «Passos:»**, com uma linha em branco entre eles; a linha em branco que ja existia antes do item 1 continua.
- **Edicoes que repetem a ancora dentro do texto novo** (todas as TROCAR menos a 8 e a 10): a idempotencia e pelo texto novo INTEIRO.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0143.txt` (`date +%y%m%d-%H%M`, rodado na hora). Analise que mudou de estado: diga no relatorio, nao edite.
