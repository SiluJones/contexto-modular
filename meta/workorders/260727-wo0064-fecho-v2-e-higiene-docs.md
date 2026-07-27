# wo0064 — Bloco de fecho v2 (Próximo com pedido + Arquivar/Manter em lista) + higiene dos docs-âncora

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.85.0` (pós-wo0063), harness **18/18 · 65/65 · 0 erros**, árvore limpa.
> **Resultado esperado:** `v1.86.0`, harness **18/18 · 65/65 · 0 erros** (nenhum check novo — o **C19**
> ganha 4 asserções).
>
> **Toca `src/` e `validate.js`** → exige `node build.js` + `node validate.js index.html`.
> Rode **`/check-wo`** antes.
>
> **Já testada pelo chat:** repo reconstruído em sandbox, edições aplicadas, build + harness rodados —
> **18/18 · 65/65 · 0 erros**, com anti-teste do C19 confirmado (removi a frase-chave → vermelho na
> asserção certa). **Custo de teto: zero** — as duas mudanças de formato vivem no CEREBRO gerado, e o
> gatilho das Instruções não muda uma vírgula. `narrative` segue **6612** (folga 288), `game` **6520**
> (folga 380).

---

## Contexto — por que mexer no formato de novo

O bloco nasceu na wo0058, foi corrigido na wo0060 e agora recebe **duas melhorias pedidas pelo usuário**,
ambas nascidas do uso real:

1. **`Próximo` passa a carregar o pedido de volta.** Hoje ele diz o que fazer; a partir de agora diz
   também **a frase que o usuário manda no próximo turno**. Economiza um turno inteiro de negociação —
   o usuário copia o pedido em vez de reformular a frente do zero.
2. **`Arquivar / Manter` vira lista**, como `Config recomendada` e `Handoff` (que ficaram ótimos assim).
   Prosa corrida num item de varredura rápida é o formato errado.

**Achado da mesma verificação (entra nesta WO):** o `meta/CEREBRO.md` do **próprio KCM** ficou na versão
**pré-wo0060** — ordem antiga (Estado → Próximo → Notas) e o rótulo antigo «Notas». O dogfood não foi
atualizado quando o produto foi corrigido. Tarefa F resolve.

---

## Tarefa A — item 1 do bloco de fecho (`src/index.template.html`)

**Âncora (linha única):**

```js
  L.push("1. **Próximo** — sempre presente, ANTES do divisor: a próxima ação concreta, não uma lista de possibilidades.");
```

**Substituir por:**

```js
  L.push("1. **Próximo** — sempre presente, ANTES do divisor, em duas partes: **(a) Ação** — a próxima coisa concreta a fazer; **(b) Peça no próximo turno** — a frase que o usuário pode mandar de volta para retomar sem reconstruir contexto (a frente sugerida, já redigida como pedido). Não é lista de possibilidades: é uma ação e um pedido.");
```

---

## Tarefa B — item 3 do bloco de fecho (`src/index.template.html`)

**Âncora (linha única):**

```js
  L.push("3. **Arquivar / Manter** — só se houver notas avulsas no mount: nome por nome, o que já pode ser **arquivado** (absorvido) e o que **manter** (item ainda aberto), com o motivo em poucas palavras. Não espere que eu pergunte.");
```

**Substituir por:**

```js
  L.push("3. **Arquivar / Manter** — só se houver notas avulsas no mount. **Em lista**, como a Config e o Handoff: uma linha **Arquivar:** com os nomes já absorvidos e uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras. Nome por nome — e não espere que eu pergunte.");
```

---

## Tarefa C — `validate.js`: 4 asserções novas no **C19**

**Âncora (linha única):**

```js
  assert(/não uma jaula/.test(c),"CEREBRO nao autoriza o projeto a personalizar o bloco");
```

**Substituir por (a âncora permanece; o bloco novo vem depois dela):**

```js
  assert(/não uma jaula/.test(c),"CEREBRO nao autoriza o projeto a personalizar o bloco");
  // wo0064: Proximo em duas partes (acao + pedido de volta) e Arquivar/Manter em lista
  assert(/Peça no próximo turno/.test(c),"CEREBRO nao pede a sugestao de pedido no item Proximo");
  assert(/\*\*\(a\) Ação\*\*/.test(c),"CEREBRO nao separa a acao no item Proximo");
  assert(/\*\*Em lista\*\*, como a Config e o Handoff/.test(c),"Arquivar \/ Manter nao esta em formato de lista");
  assert(/uma linha \*\*Arquivar:\*\* .*e uma linha \*\*Manter:\*\*/.test(c),"Arquivar \/ Manter sem as duas linhas nomeadas");
```

**Não crie check novo.** O total continua **65/65** — o C19 é que fica mais rigoroso.

---

## Tarefa D — bump

**Âncora:** `const KIT_VERSION = "1.85.0";` → **Substituir por:** `const KIT_VERSION = "1.86.0";`

---

## Tarefa E — `CLAUDE.md` (raiz) — reescrever inteiro

**Este é o arquivo mais urgente da WO:** ele é lido pelo Claude Code **em toda sessão** e diz que a
regra de ouro é **17/17**. Um dia o Code aceita 17/17 como verde. Substitua o conteúdo por:

```markdown
# CLAUDE.md — contexto-modular (Kit de Contexto Modular / KCM)

> Guia operacional para o **Claude Code**. Curto de propósito (lido toda sessão).
> O **cérebro** do projeto é `meta/` — leia sob demanda. Comece por `meta/CEREBRO.md`
> (como trabalhamos) e `meta/STATUS.md` (onde paramos).

## O que é
Um `index.html` único (vanilla JS, sem build no lado do usuário) que gera arquivos de
contexto para Projetos do Claude.ai. 17 nichos de conteúdo + 1 construtor (`custom`) = **18**.
O `index.html` é **gerado** a partir de `src/` — **não editar o `index.html` à mão.**

## Estrutura
- `src/index.template.html` — casco (UI + lógica, sem os dados dos nichos)
- `src/niches/<id>.js` — os 18 módulos de nicho (os dados)
- `build.js` + `build-manifest.json` — remontam o `index.html` na raiz
- `validate.js` — harness (18 nichos + checagens transversais)
- `meta/` — docs: `CEREBRO.md` (cérebro), `STATUS`, `DECISIONS`, `CHANGELOG`, `ROADMAP`, `IDEAS`, `CONTEXT`…
- `meta/workorders/` — WOs (instrução de aplicação Chat→Code), `AAMMDD-woNNNN-desc.md`
- `meta/analises/` — análise antes do compromisso, `AAMMDD-ANALISE-<assunto>.md` (só mudança não-trivial)

## Comandos
- **Montar:** `node build.js`  → gera o `index.html` na raiz
- **Validar:** `node validate.js index.html`  (precisa de jsdom: `npm install jsdom` uma vez)
- **Conferir uma WO antes de aplicar:** `/check-wo <arquivo>` (read-only) · **aplicar:** `/apply-wo <arquivo>` · **fechar:** `/wrap`
- **Nunca** commitar sem o harness em **18/18 nichos, 0 erros** (o total de checagens sobe a cada check novo).

## Convenções
- Editar um nicho = editar `src/niches/<id>.js` e rodar `node build.js`. Nunca editar o `index.html` direto.
- Produto = **1 arquivo único, sem framework/bundler/npm** (só JSZip via CDN). Decisão D-001.
- Respostas e código em **pt-BR**.
- **Commits:** uma linha, `-m` repetido, **sem acento**. Conventional Commits (`feat`/`fix`/`docs`/`refactor`/`chore`).
- Ambiente: **PowerShell** (não Git Bash pra abrir o `claude`).
- **Vocabulário:** **WO** = instrução de aplicação Chat→Code. **spec** = spec de feature (SDD).
  **análise** = documento que precede o compromisso. Funil: análise → WO → `DECISIONS.md`.
  WOs antigas mantêm o nome `specNNNN` — história não se reescreve.

## Fluxo com o chat (planejamento)
O chat (Claude web) cuida de design/curadoria e entrega os `meta/` **inteiros**; o Code
implementa e **só acrescenta** em `STATUS`/`DECISIONS`/`logs/`/`ROADMAP` (append-only, não
reescreve). Protocolo completo em `meta/CEREBRO.md` › «🤝 Fluxo Chat ↔ Claude Code».

## Não faça sem pedir
- Não editar o `index.html` à mão (é gerado por `build.js`).
- Não **reescrever** os docs de curadoria (`CONTEXT`/`IDEAS`/`GLOSSARY`) — isso é raia do chat;
  aqui só **append** em `STATUS`/`DECISIONS`/`logs`.
- Não adicionar dependências ao produto.
- Não criar pasta vazia "para depois" (`meta/analises/`, `meta/specs/` nascem no primeiro uso).
```

---

## Tarefa F — `meta/CEREBRO.md`: atualizar o dogfood do bloco de fecho

A seção `## 🧾 Bloco de fecho de turno (formato fixo — dogfood do wo0058)` ficou na versão
**pré-wo0060**. Substitua **da linha do título até a linha que começa com «Vale para todo turno de
trabalho»** (inclusive) por:

```markdown
## 🧾 Bloco de fecho de turno (formato fixo — dogfood do wo0058/wo0060/wo0064)

Todo turno de trabalho termina com este bloco, nesta ordem, **emitindo só as linhas que se aplicam** — linha sem conteúdo real não aparece (não escreva «nada a arquivar» nem invente handoff). **Próximo** vem ANTES de um divisor; o resto vem depois dele:
- **Próximo** — sempre presente, em duas partes: **(a) Ação** — a próxima coisa concreta a fazer; **(b) Peça no próximo turno** — a frase que o usuário pode mandar de volta para retomar sem reconstruir contexto (a frente sugerida, já redigida como pedido). Não é lista de possibilidades: é uma ação e um pedido.
- **Estado** — uma linha: onde o projeto está agora (versão/fase e o resultado do harness) e o commit, quando existir.
- **Arquivar / Manter** — só se houver notas avulsas no mount. **Em lista**: uma linha **Arquivar:** com os nomes já absorvidos e uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras. Não espere que o usuário pergunte.
- **Config recomendada** — em lista, uma linha por raia: **Chat** (planejamento — modelo + nível de esforço) e **Code** (execução — modelo + esforço + terminal). Nunca afirme saber a config atual — recomende pela tarefa que vem.
- **Handoff** — por último, só quando houver arquivo trocando de mão: arquivo por arquivo, onde cada um vai. Handoff de sessão completo: o artefato se chama `AAMMDD-HANDOFF-BRIEF.md`.

Vale para todo turno de trabalho, não só ao encerrar a sessão: é o que permite retomar sem reconstruir contexto. Absorve i-N44/i-N45 e a nota 260720 (nome do handoff).
```

Acrescente também, no topo do arquivo, a linha de revisão (acima da linha da wo0063):

```markdown
> **Mudanças nesta revisão (wo0064):** bloco de fecho v2 — **Próximo** ganha a segunda parte («peça no próximo turno») e **Arquivar / Manter** vira lista; o dogfood do KCM, que tinha ficado na versão pré-wo0060 (ordem e rótulo antigos), foi alinhado ao produto. Higiene: `CLAUDE.md`, `BUILD.md` e `CONTEXT.md` corrigidos de 17→18 nichos e do vocabulário `spec`→WO. Nada removido. `KIT_VERSION 1.86.0`.
```

---

## Tarefa G — `INSTRUCOES-DO-PROJETO.md` (raiz): uma linha

**Âncora (trecho único dentro da linha «Feche com o bloco padrão»):**

```
**Estado** (versão/fase + harness + commit) · **Próximo passo** (sempre) · **Notas** (arquivar/manter, só se houver no mount) · **Config recomendada** por raia
```

**Substituir por:**

```
**Próximo** (sempre — a ação + o que pedir no próximo turno) · **Estado** (versão/fase + harness + commit) · **Arquivar / Manter** (em lista, só se houver nota no mount) · **Config recomendada** por raia
```

> A ordem estava na versão pré-wo0060 aqui também. Depois de aplicar, **avise o usuário para recolar o
> arquivo em Projeto → Instruções** — o repo e o painel do claude.ai são duas cópias.

---

## Tarefa H — `BUILD.md`: 17→18 e `/check-spec` → `/check-wo`

Quatro edições de linha única. **Não** mexa na linha «Migração nicho a nicho com duas redes… harness
17/17»: aquilo é registro histórico da migração i-N13, quando 17/17 era verdade.

**H1 — Âncora:** `os dados dos 17 nichos saíram de dentro do HTML`
**Substituir por:** `os dados dos 18 nichos saíram de dentro do HTML`

**H2 — Âncora:** `com 17 marcadores //__KCU_NICHE:<id>__//`
**Substituir por:** `com 18 marcadores //__KCU_NICHE:<id>__//`

**H3 — Âncora:** `<- 17 módulos de dados (cada um = objeto NICHES.<id> = { ... };)`
**Substituir por:** `<- 18 módulos de dados (cada um = objeto NICHES.<id> = { ... };)`

**H4 — Âncora:** `node validate.js index.html   # 17/17, 0 erros (regra de ouro antes de publicar)`
**Substituir por:** `node validate.js index.html   # 18/18 nichos, 0 erros (regra de ouro antes de publicar)`

**H5 — Âncora (título da seção):** `## Ciclo de uma spec (com o portão read-only)`
**Substituir por:** `## Ciclo de uma WO (com o portão read-only)`

**H6 — Âncora:** `` `/check-spec <caminho>` → aplicar → `node build.js` → `node validate.js index.html` → commit. ``
**Substituir por:** `` `/check-wo <arquivo>` → `/apply-wo <arquivo>` → `node build.js` → `node validate.js index.html` → `/wrap` → commit. ``

**H7 — Âncora:** `O `/check-spec` (i-N39) é **read-only**: confere âncoras`
**Substituir por:** `O `/check-wo` (i-N39, renomeado na wo0053) é **read-only**: confere âncoras`

---

## Tarefa I — `meta/CONTEXT.md`: números e vocabulário

Oito edições de linha única. **Preserve como história** (não editar): a linha «Mudanças desde
v1.42.0…», a «Mudanças nesta revisão (v1.34.0)» e a frase «a v1.34.0 foi além: o próprio Claude Code
aplicou um spec do chat … com 17/17 + 32/32» — todas descrevem o passado, e naquele passado o número
estava certo.

**I1 — Âncora:**
`> Versão de referência: **v1.46.0** · produto = um `index.html` **gerado** de `src/` · **17/17 nichos, 0 erros** no harness.`
**Substituir por:**
`> Versão de referência: **v1.86.0** · produto = um `index.html` **gerado** de `src/` · **18/18 nichos, 0 erros** no harness (o total de checagens sobe a cada check novo — hoje 65).`

**I2 — Âncora:** `São **17 nichos** (16 de conteúdo + **1 construtor** `custom`).`
**Substituir por:** `São **18 nichos** (17 de conteúdo + **1 construtor** `custom`).`

**I3 — Âncora:** `- `src/niches/<id>.js` — **17 módulos**, um por nicho (os objetos `NICHES.<id>`).`
**Substituir por:** `- `src/niches/<id>.js` — **18 módulos**, um por nicho (os objetos `NICHES.<id>`).`

**I4 — Âncora:** `roda os 17 nichos e ~32 checagens de conteúdo.`
**Substituir por:** `roda os 18 nichos e as checagens transversais (65 hoje; o número sobe a cada check novo).`

**I5 — Âncora:** `**NUNCA publicar sem o harness verde (17/17, 0 erros JS, ~32 checagens).**`
**Substituir por:** `**NUNCA publicar sem o harness verde (18/18 nichos, 0 erros JS).**`

**I6 — Âncora:** `As ~32 checagens cobrem D-018/022/028/029 (v1.29–v1.34)`
**Substituir por:** `As checagens cobrem D-018/022/028/029 (v1.29–v1.34)`

**I7 — Âncora:** `5. **Publicar sem validar** → NUNCA sem o harness verde (17/17 + 32 checagens).`
**Substituir por:** `5. **Publicar sem validar** → NUNCA sem o harness verde (18/18 nichos, 0 erros).`

**I8 — Âncora:** `nunca publicar sem 17/17 + 32 checagens;`
**Substituir por:** `nunca publicar sem 18/18 nichos e 0 erros;`

**I9 — Âncora (convenção de nome, vocabulário pré-wo0053):**
`- **Nome de spec/instrução (D-041):** formato **`AAMMDD-…`** (sem `-` na data, ano 2 díg.). Specs: `AAMMDD-specNNNN-desc.md` (ex.: `260701-spec0009-reconciliacao-meta.md`). Instruções ASU: `AAMMDD-asuNNNN.yaml`. Vale para os **novos**; não renomear os antigos do histórico.`
**Substituir por:**
`- **Nome de WO/análise/instrução (D-041, revisto na D-086/wo0053):** formato **`AAMMDD-…`** (sem `-` na data, ano 2 díg.). WOs: `AAMMDD-woNNNN-desc.md` (ex.: `260727-wo0063-analise-no-produto.md`). Análises: `AAMMDD-ANALISE-<assunto>.md`. Spec de feature: `AAMMDD-<nome>.md` em `meta/specs/`. Instruções ASU: `AAMMDD-asuNNNN.yaml`. Vale para os **novos**; **as WOs antigas mantêm `specNNNN`** e a numeração segue a sequência — história não se reescreve.`

---

## Tarefa J — registros

1. **`meta/DECISIONS.md`** — **D-098 — Bloco de fecho v2: `Próximo` carrega o pedido de volta;
   `Arquivar / Manter` vira lista**. Racional: o formato nasceu do uso e é refinado pelo uso (wo0058 →
   wo0060 → wo0064); a segunda parte do `Próximo` economiza um turno de negociação por sessão, e a
   lista alinha o item aos dois que já funcionavam bem. Registre também o achado: **o dogfood do KCM
   tinha ficado na versão pré-wo0060** — quando o produto muda de formato, o `meta/CEREBRO.md` do KCM
   precisa entrar na mesma WO, senão a régua diverge da própria casa.
2. **`meta/CHANGELOG.md`** — `## v1.86.0 — Bloco de fecho v2 + higiene dos docs-âncora (wo0064, D-098)`:
   as duas mudanças de formato; C19 com 4 asserções novas (sem check novo — segue 65/65);
   `CLAUDE.md`/`BUILD.md`/`CONTEXT.md` corrigidos de 17→18 e `spec`→WO; `/check-spec` (comando
   inexistente desde a wo0053) trocado por `/check-wo` no BUILD; **custo de teto zero**.
3. **`meta/STATUS.md`** — append na «Última sessão» + versão **v1.86.0** no cabeçalho.
4. **`meta/IDEAS.md`** — registre como **abertas**:
   - **Curadoria do `CONTEXT.md`** (raia Chat, arquivo inteiro): esta WO corrigiu números e
     vocabulário, mas o doc ainda carrega cabeçalhos de arqueologia («Mudanças desde v1.42.0») e
     descreve o método em termos de v1.34–v1.46. Merece uma passada de curadoria de verdade.
   - **Varredura de defasagem nos docs-âncora** — virou dívida recorrente: `CLAUDE.md` e `BUILD.md`
     ficaram 4 versões maiores desatualizados sem ninguém notar, porque nenhum check olha para eles.
     Avaliar um check que compare o número de nichos citado nos docs com `Object.keys(NICHES).length`.

---

## Verificação

1. `node build.js` → OK, 18 módulos.
2. `node validate.js index.html` → **18/18 · 65/65 · 0 erros**, com o **C19 verde**.
3. Confira o teto: `narrative` **6612** e `game` **6520** (inalterados — se mudarem, algo entrou nas
   Instruções por engano).
4. `grep -rn "17/17" CLAUDE.md BUILD.md meta/CONTEXT.md` → só a linha histórica do BUILD («Migração
   nicho a nicho…») pode sobrar.
5. `git status` limpo ao final.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html validate.js index.html CLAUDE.md BUILD.md INSTRUCOES-DO-PROJETO.md \
        meta/CEREBRO.md meta/CONTEXT.md meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260727-wo0064-fecho-v2-e-higiene-docs.md
git commit -m "feat(kit): bloco de fecho v2 + higiene dos docs-ancora (wo0064, D-098)

- Proximo passa a ter duas partes: acao concreta + a frase para pedir no proximo turno
- Arquivar / Manter vira lista (Arquivar: / Manter:), como Config e Handoff
- C19 ganha 4 assercoes; nenhum check novo (segue 65/65) e custo de teto zero
- dogfood alinhado: o CEREBRO do KCM estava na versao pre-wo0060 (ordem e rotulo antigos)
- CLAUDE.md, BUILD.md e CONTEXT.md corrigidos de 17 para 18 nichos e do vocabulario spec->WO
- BUILD.md deixa de mandar rodar /check-spec, comando que nao existe desde a wo0053
- KIT_VERSION 1.86.0; harness 18/18, 65/65, 0 erros"
git push
```
