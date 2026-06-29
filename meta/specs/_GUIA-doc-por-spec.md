# Guia — Atualização de doc por spec para o Claude Code (D-030)

> **Referência** (não é uma tarefa datada). Como o **chat** (planejamento) e o **Claude Code** (execução)
> dividem a atualização dos `meta/`. Decisão registrada em `DECISIONS.md` (D-030); regra resumida no
> `CEREBRO.md` §«🤝 Fluxo Chat ↔ Claude Code». Este guia é o **passo a passo completo** — e a **semente**
> do que o switch «Modo Code» vai gerar para outros projetos.

## A ideia em uma frase
Para um **delta estruturado** num doc **grande** de curadoria, o chat entrega o **texto exato** numa spec
curta de `meta/specs/`, e o Code **posiciona** no repo — em vez de o chat **regerar o arquivo inteiro**
(que gasta token e arrisca **truncar** no meio). O **`git diff`** é a rede de segurança.

## Por que existe (o problema que resolve)
Regerar um doc grande inteiro a cada mudancinha é caro em output e pode **truncar** — foi assim que o
projeto acabou com **duas cópias** do `CONTEXT.md` sem saber qual era a boa. Uma spec é **muito menor**
que o arquivo, **não trunca**, e o `git diff` mostra **exatamente** o que mudou (mais auditável que
confiar que uma regeneração completa não deixou cair nada — reforça a higiene **P12**).
**Diferença do ASU:** o ASU aplica patch YAML **mecânico**; o Claude Code **entende o sistema** e acha a
âncora por **significado**, com mais cuidado.

## Quando usar cada canal (a regra)

| Situação | Canal | Por quê |
|---|---|---|
| Arquivo **novo** | **Chat entrega inteiro** | Pedir pro Code criar do zero é um salto sem ganho — o chat já tem que escrever todo o conteúdo. |
| Arquivo **pequeno** (o delta é boa parte dele) | **Chat entrega inteiro** | Uma spec teria tamanho parecido; risco de truncar é nulo; mais simples. |
| **Só append** num arquivo grande (novo `DEC-`/`FIX-`, linha no STATUS, marcar fase, novo log) | **Code, append-only** (no «Ao terminar» da tarefa) | Já é a raia normal do Code; não precisa de spec dedicada. |
| Arquivo **grande** + **delta estruturado que reescreve no lugar** (reenquadrar fase, consertar linha velha, mudar status de ideia, inserir nota de revisão) | **Doc por spec (D-030)** | Economiza token, não trunca, `git diff` auditável. |
| Arquivo **grande** + **reescrita de fundo / reestruturação / voz** | **Chat entrega inteiro** | Uma spec ficaria do tamanho do arquivo; a voz da curadoria precisa fluir. |

**Regra de ouro transversal:** **um canal por doc por ciclo.** Se um doc vai por spec, o chat **não**
entrega o mesmo doc inteiro no mesmo ciclo (senão são dois escritores → conflito).

## Lado do CHAT — como ESCREVER uma boa doc-spec
1. **Leia o arquivo VIVO do repo primeiro** (mount `/mnt/project`). **Nunca** autore de fragmento RAG — uma âncora errada corrompe em **silêncio** (pior que um arquivo inteiro errado, que é óbvio).
2. **Uma âncora semântica por edição** — o **título/frase exata** a localizar. **Nunca número de linha** (eles deslizam quando o arquivo muda).
3. **Texto exato, em bloco de código.** O Code **copia**; ele **não autora** prosa de curadoria.
4. **Rotule cada edição:** `inserir-ANTES` / `inserir-DEPOIS` / `substituir-BLOCO`. Em `substituir-BLOCO`, cite o **começo e o fim** do trecho com o suficiente para não haver ambiguidade.
5. **Diga a forma esperada do diff** (ex.: «+N linhas, 0 removidas exceto o bloco X»). Vira sanity-check para o Code **e** para você ao revisar.
6. **Doc-only?** Diga explícito: **sem `node build.js` / `node validate.js`** (nada toca o produto); a rede é o `git diff`.
7. Feche com o **«Ao terminar»** (append-only: STATUS, `DEC-`/`FIX-` se houver) e o **commit** (uma linha por comando, `-m` repetido, **sem acento**).

## Lado do CODE — como APLICAR com segurança
1. **Localize cada âncora exatamente.** Se **não** achar uma, **PARE e reporte** — **nunca chute** um lugar próximo.
2. Aplique `inserir`/`substituir` conforme rotulado. **Não toque em nada fora das edições nomeadas** (P12).
3. Rode **`git diff`** e confira que **bate com a forma esperada** (aditivo + a substituição prevista; zero remoção acidental).
4. Doc-only → **pule build/validate** (eles são para mudanças no `index.html`).
5. Faça o **«Ao terminar»** (append-only) e **commite** com a mensagem dada.

## Exemplo mínimo (`inserir-DEPOIS`)
A spec diz:
> **Âncora:** a linha `## ▶ Fase 3 — Higiene & consistência`. **Inserir DEPOIS dela:**
> ```
> - ✅ **Item novo** (D-0NN) — descrição curta.
> ```
> **Diff esperado:** +1 linha, 0 removidas.

O Code acha a linha, insere o bloco logo abaixo, roda `git diff` (deve mostrar +1 linha), commita. Fim.

## Boas práticas de sessão (vale para qualquer doc-spec)
Cada doc-spec é uma **tarefa discreta**. No Code, **rode em sessão limpa**: `/clear` (ou nova sessão)
entre tarefas não relacionadas — o custo por turno cresce com a sessão (cada turno reenvia todo o
histórico) e a qualidade cai quando o contexto enche. A **continuidade** mora no **repo + `CLAUDE.md` +
`meta/`**, não na conversa — então limpar não perde nada do que importa.

## Para o «Modo Code» (quando virar feature do kit)
O switch gera as **duas metades** deste guia, cada uma onde é lida:
- **No `CLAUDE.md` raiz** (lido pelo **Code**): a seção «**como APLICAR**» (lado do Code) — curta.
- **No `CEREBRO.md`** (lido pelo **assistente de planejamento**): a «**regra**» (quando usar cada canal) + o «**como ESCREVER**» (lado do chat).

Assim, qualquer projeto que ligue o Claude Code **herda o método** sem reinventá-lo — e a trava continua:
**arquivo novo / pequeno / reescrita de fundo = chat entrega inteiro**; só **delta em arquivo grande** vira spec.
