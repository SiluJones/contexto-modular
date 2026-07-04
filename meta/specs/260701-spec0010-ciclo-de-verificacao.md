# Spec — Princípio do Ciclo de Verificação (round-trip chat ↔ Code/ASU)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Doc-only** (mexe em `meta/CEREBRO.md` e `meta/DECISIONS.md`): **sem** `node build.js` / `node validate.js`. A rede é o `git diff`.
> Prompt no Code: **"leia `meta/specs/260701-spec0010-ciclo-de-verificacao.md` e execute"**.
> Config: **Sonnet + `/effort high`** (é texto de diretriz; posicionamento, não lógica).

## Contexto (por que esta spec existe)
O handoff de 2026-07-01 entregou **`-acrescimo.md`** para o usuário colar à mão e reentregou um log pelo **nome achatado do FlatDrop** (`logs__2026-07-01`) — violando três regras que hoje moram **só no CEREBRO** (lido 1×): entrega-inteira-≠-delta-pra-humano, desachatar nome do FlatDrop, e verificar-antes-de-confiar (P8). Causa comum: **o repo é atualizado por uma frente (chat gera spec/instrução → Code/ASU aplica no PC), mas ninguém confere, na volta, se cada frente aplicou o que a spec pediu.** Sem esse fecho, um truncamento silencioso do Code (bugs reais: cap de buffer que conserva bytes; regressão de reescrita-inteira; "lost-in-the-middle") passa direto. Esta spec grava o **ciclo de verificação** como princípio do projeto (dogfooding) — a peça que faltava.

## Tarefa A — nova subseção no `meta/CEREBRO.md`

**Âncora:** a linha exata `## 🤝 Fluxo Chat ↔ Claude Code (quando o dev usa o CLI/desktop)`.
**Inserir ANTES dela** o bloco abaixo (uma seção nova, irmã, logo acima):

```
## 🔁 Ciclo de verificação (spec → aplicação → conferência de volta)

Toda mudança nos `meta/` (e no código) passa por um ciclo com **fecho de verificação** — não termina quando o Code/ASU diz "feito", termina quando o **chat confere o que voltou**. É o que evita perda silenciosa (o Code pode truncar/reescrever sem avisar; o ASU pode corromper âncora não-ASCII).

1. **Chat autora a mudança** como spec-para-Code (`meta/specs/`) ou instrução-para-ASU (`.yaml`), **sempre sobre a versão VIVA do repo** (mount `/mnt/project`), e **declara a forma esperada do diff** (ex.: «+6 −2 linhas; nenhuma remoção fora do bloco X»). A forma esperada é o contrato da verificação.
2. **Code/ASU aplica no PC do usuário** e roda `git diff` antes de commitar, conferindo que bate com a forma esperada (já é a raia do Code / a rede do ASU).
3. **Usuário sobe o repo atualizado** ao Projeto (mount) na sessão seguinte.
4. **Chat CONFERE de volta (obrigatório quando a sessão anterior aplicou specs/instruções):** para cada frente tocada, lê o arquivo que voltou e checa (a) o bloco previsto está presente e correto; (b) nada único fora do bloco sumiu (P12); (c) nomes/termos seguem o cânone. Se algo não bate, **reporta e corrige** — não segue como se tivesse dado certo. Se **nada** foi aplicado desde a última vez, pula este passo (proporcional, não cerimonial — P10).

**Barato e ruidoso por design:** declarar a forma do diff transforma um bug silencioso (bytes sumindo no meio) num bug detectável (o diff não bate). É o P8 ("STATUS é pista, não fato") aplicado ao próprio handoff: o relato "deu certo" é pista; o arquivo vivo é o fato.
```

**Diff esperado (A):** +18 linhas, 0 removidas.

## Tarefa B — reforçar a regra de entrega e o nome de arquivo no `meta/CEREBRO.md`

Duas regras já existem no CEREBRO mas foram violadas por serem ambíguas / lidas 1×. Endurecer o texto **onde já está** (substituição no lugar, sem reescrever a seção).

### B.1 — delta é só para o Code, nunca para o humano
**Âncora (substituir-BLOCO):** o bullet que começa com `- **"Atualizar um doc" = entregar o arquivo COMPLETO**` (na seção «Como ENTREGAR as atualizações»).
**Substituir a linha inteira** por:
```
- **"Atualizar um doc" = entregar o arquivo COMPLETO** em `/mnt/user-data/outputs`, pronto para o usuário baixar e substituir. **Nunca** trechos para colar nem um arquivo de "instruções de atualização" **para o usuário aplicar à mão**. Delta (bloco de acréscimo, edição cirúrgica) **só existe como spec-para-Code ou instrução-para-ASU** — destinatário é um agente + `git diff`, nunca o humano com copiar-e-colar. Se a entrega é para o usuário baixar, é o arquivo inteiro; sem exceção.
```
**Diff esperado (B.1):** 1 linha substituída por 1 linha (mais longa); 0 outras.

### B.2 — nome de download é sempre o nome REAL (desachatado do FlatDrop)
**Âncora:** a linha exata `### Verificar antes de pedir upload (regra dura)`.
**Inserir ANTES dela** o bloco:
```
### Nome de arquivo na entrega (regra dura)
Todo arquivo entregue para baixar usa o **nome real do repo**, nunca o nome **achatado** do FlatDrop. `logs/2026-07-01.md` baixa como `2026-07-01.md` (sem `logs__`/`logs_`); `meta/IDEAS.md` baixa como `IDEAS.md` (sem `meta_`). O `_MANIFEST.md` dá o nome real — consultar antes de nomear. Prefixo de pasta **só** para desambiguar dois arquivos de mesmo nome real vindos de pastas diferentes na MESMA entrega; caso contrário, nunca.
```
**Diff esperado (B.2):** +7 linhas, 0 removidas.

## Tarefa C — registrar a decisão

**`meta/DECISIONS.md`** — append (raia do Code), **D-042** (confirme o número — deve vir após D-041):
```
## D-042 — Ciclo de verificação com fecho de volta (round-trip)

**Decisão.** Toda mudança nos meta/ (e código) segue um ciclo com fecho: chat autora a spec/instrução sobre a versão viva + declara a forma esperada do diff; Code/ASU aplica e confere `git diff`; usuário sobe o repo; **o chat confere de volta**, frente por frente, que o previsto foi aplicado e nada único se perdeu (P12). Obrigatório quando a sessão anterior aplicou specs/instruções; pulado quando nada mudou (proporcional, P10). Reforça, no CEREBRO: delta só para agente (Code/ASU) + `git diff`, nunca para o humano colar; nome de download é sempre o real (desachatado do FlatDrop).

**Por quê.** O handoff de 07-01 entregou acréscimos para o usuário colar e um log com nome achatado — violando regras que só viviam no CEREBRO (lido 1×). Modos de falha reais do Code (truncamento por cap de buffer; regressão de reescrita-inteira; lost-in-the-middle) e do ASU (âncora não-ASCII) são silenciosos: reportam "feito". Declarar a forma do diff + conferir de volta torna o erro detectável. É o P8 aplicado ao handoff. Complementa D-030 (doc-por-spec) fechando o loop que faltava.
```

## Validar (doc-only)
1. **Sem build/validate** (nada toca o `index.html`).
2. `git diff` revisado: só as inserções/substituições nomeadas em CEREBRO + o append em DECISIONS; zero remoção acidental.

## Ao terminar (raia do Code — append-only)
- **`meta/STATUS.md`** — append na «Última sessão»: «Ciclo de verificação (round-trip) gravado no CEREBRO + D-042; reforço de entrega-inteira e nome-real na entrega.»

## Commit (sem acento)
```
git add meta/CEREBRO.md meta/DECISIONS.md meta/STATUS.md
git commit -m "docs: ciclo de verificacao round-trip + reforco de entrega e nome real (D-042)" -m "grava o fecho de verificacao no CEREBRO; delta so para Code/ASU nunca para colar; nome de download sempre real (desachatado do FlatDrop); D-042"
git push
```
