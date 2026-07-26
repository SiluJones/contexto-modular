# spec0053 — Rename `spec` → **Work Order (WO)**

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.75.0` (pós-spec0052, commit `8b372c1`, pushado), harness **18/18 · 58/58 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 59/59 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado numa reconstrução pós-0052 em sandbox (`build` + `validate`) → verde
> **18/18 · 59/59**, com contagem antes/depois provando que nada colateral quebrou.
> **Rode `/check-spec` antes de aplicar** — este é o **último uso do nome antigo**; a partir daqui o comando
> passa a se chamar `/check-wo`.

## Por quê

O artefato que hoje chamamos «spec» **não é uma spec**: é uma **instrução de aplicação** (edições exatas
para um agente executar). O nome verdadeiro de «spec» (o *que* construir e o que é «pronto») fica reservado
para a spec-de-feature do SDD, que chega na spec0054. Decisão do usuário (260725): o artefato de aplicação
passa a ser **Work Order (WO)** — `AAMMDD-woNNNN-desc.md`, em `meta/workorders/`. Em prosa: *«o chat entrega
uma WO; o Code aplica»*.

---

## ⚠️ ARMADILHAS — leia antes de tocar em qualquer coisa

**NUNCA faça um find-replace cego de `spec`.** Três categorias de ocorrência **devem permanecer intactas**:

1. **Palavras portuguesas** que contêm «spec»: `específico`, `específica`, `específicos`, `especificar`,
   `especialmente`, `especial` — **21 ocorrências** no template.
2. **CSS:** `aspect-ratio` contém «spec» — **3 ocorrências**. Um replace cego **destrói o layout**.
3. **História:** comentários com `(spec0031)`, `(spec0034)`, `(spec0036)`… — **14 ocorrências**. São o registro
   histórico do próprio KCM, de quando o artefato *se chamava* spec. **História não se reescreve** — ficam.

O check **C15** (Tarefa C) trava as três: se qualquer uma for corrompida, o harness fica vermelho.

---

## Tarefa A — `src/index.template.html`

Substituições **globais** (todas as ocorrências), nesta ordem. As contagens são as medidas no sandbox — se a
sua contagem divergir, **pare e reporte** antes de continuar.

| # | De | Para | Ocorrências |
|---|---|---|---|
| A1 | `meta/specs/` | `meta/workorders/` | **10** |
| A2 | `apply-spec` | `apply-wo` | **11** |
| A3 | `applySpec` | `applyWo` | **5** |

> A2 cobre o comando `/apply-spec`, o caminho `.claude/skills/apply-spec/SKILL.md` e as variantes
> (`apply-spec/wrap`, `apply-spec.SKILL.md`). A3 é o identificador JS interno que carrega o conteúdo do
> SKILL.md gerado — renomeado junto para o código não mentir. Nenhuma das duas strings aparece dentro de
> palavra portuguesa, então a substituição global é segura.

Substituições **únicas** (cada uma ocorre 1×; se não for 1×, pare e reporte):

- **A4** — `AAMMDD-specNNNN-desc.md` → `AAMMDD-woNNNN-desc.md`
- **A5** — `260630-spec0007-asu-entrega-e-escopo.md` → `260630-wo0007-asu-entrega-e-escopo.md`
- **A6** — `**spec curta**` → `**WO curta**`
- **A7** — `Aplica as specs de doc` → `Aplica as WOs de doc`
- **A8** — `se um doc foi por spec` → `se um doc foi por WO`
- **A9** — `aplica uma spec de` → `aplica uma WO de`
- **A10** — `spec que delega decisão` → `WO que delega decisão`
- **A11** — `logs/, specs no modo Code` → `logs/, workorders no modo Code`
- **A12** — ``**Nomes padronizados:** specs em `meta/workorders/` seguem`` → ``**Nomes padronizados:** WOs (work orders) em `meta/workorders/` seguem``
  *(atenção: aplicar **depois** de A1, que já trocou o caminho nessa mesma linha)*
- **A13** — bump: `const KIT_VERSION = "1.75.0";` → `const KIT_VERSION = "1.76.0";`

---

## Tarefa B — `validate.js`: acompanhar o rename

- **B1** — global: `apply-spec` → `apply-wo` (**2** ocorrências, no G7).
- **B2** — global: `applySpec` → `applyWo` (**2** ocorrências, no G7).

> Sem isto o **G7 fica vermelho** (ele valida o formato do SKILL.md pelo identificador e pelo nome).

---

## Tarefa C — `validate.js`: check **C15** (trava o rename + as armadilhas)

**Âncora:** `check("C14 adesao ao ritual`
**Substituir por** (insira C15 ANTES do C14, que permanece logo depois):
```javascript
check("C15 rename spec->WO (spec0053): caminhos, comando e prosa; sem quebrar palavras pt-BR nem CSS", () => {
  const raw=fs.readFileSync(path,"utf8");
  assert(!/meta\/specs\//.test(raw),"ainda ha meta/specs/ (deveria ser meta/workorders/)");
  assert(/meta\/workorders\//.test(raw),"meta/workorders/ ausente");
  assert(!/apply-spec/.test(raw),"ainda ha apply-spec (deveria ser apply-wo)");
  assert(/AAMMDD-woNNNN-desc\.md/.test(raw),"padrao AAMMDD-woNNNN-desc.md ausente");
  assert(/aspect-ratio/.test(raw),"CSS aspect-ratio sumiu (replace cego quebrou o layout)");
  assert(/específico|especial/.test(raw),"palavras pt-BR com 'spec' foram corrompidas");
  return "ok";
});

check("C14 adesao ao ritual
```

---

## Tarefa D — DOGFOOD: o próprio KCM adota o WO

O KCM é mantido pelos arquivos que prega — precisa renomear a própria casa.

- **D1** — renomear a pasta: `meta/specs/` → `meta/workorders/` (`git mv`, preservando histórico).
- **D2** — renomear os arquivos **novos daqui para frente** para `AAMMDD-woNNNN-desc.md`. **As WOs
  históricas (spec0001…spec0053) mantêm o nome antigo** — renomear em massa quebraria as referências
  cruzadas em DECISIONS/CHANGELOG/STATUS. A numeração **continua a sequência** (a próxima é `wo0054`).
  *(Se você quiser padronizar o acervo antigo depois, é um trabalho à parte, com atualização das referências
  junto — não faça agora.)*
- **D3** — renomear os comandos: `check-spec.md` → `check-wo.md` e `apply-spec.md` → `apply-wo.md`, trocando
  dentro deles as referências (`/check-spec` → `/check-wo`, `/apply-spec` → `/apply-wo`, `meta/specs/` →
  `meta/workorders/`). **Não** toque em palavras pt-BR nem em history.
- **D4** — `meta/CEREBRO.md` e `INSTRUCOES-DO-PROJETO.md`: trocar as referências ao artefato
  (`meta/specs/` → `meta/workorders/`; `AAMMDD-specNNNN-desc.md` → `AAMMDD-woNNNN-desc.md`;
  «spec-para-Code» → «WO-para-Code»; `/check-spec` → `/check-wo`). Acrescente uma linha de glossário:
  **«WO (Work Order) = instrução de aplicação Chat→Code. "Spec" fica reservado para a spec-de-feature (SDD).»**
  Atualize a linha «Mudanças nesta revisão» do CEREBRO.

---

## Tarefa E — docs (append)

- **`meta/DECISIONS.md` → D-086:** o artefato de aplicação Chat→Code passa a se chamar **Work Order (WO)** —
  `AAMMDD-woNNNN-desc.md` em `meta/workorders/`; comandos `/check-wo` e `/apply-wo`; skill
  `.claude/skills/apply-wo/`. Motivo: o que chamávamos «spec» é uma instrução de aplicação; «spec» fica
  reservado para a spec-de-feature do SDD (spec0054). Histórico preservado (WOs antigas mantêm o nome; os
  comentários `(specNNNN)` no código são registro histórico). Check C15 trava o rename **e** as armadilhas
  (palavras pt-BR, `aspect-ratio`, história).
- **`meta/IDEAS.md`:** rename → **INCORPORADO**. Próximos parqueados: **SDD** (spec0054: P1/P2/P3 + L3
  diretriz, já no vocabulário novo), **handoff + bloco de config padronizado** (spec0055), e a **análise de
  enxugamento das Instruções** (identidade+ritual+gatilhos ficam; personalização migra para os `meta/`).
- **`meta/STATUS.md`:** v1.75.0 → **v1.76.0**; testes **18/18 · 59/59 · 0 erros**; `KIT_VERSION 1.76.0`;
  somar C15; manter a nota de vigilância do `game` (6879/6900).
- **`meta/CHANGELOG.md`:** entrada v1.76.0 no topo, marcando que é uma **mudança de vocabulário** que os
  projetos-filhos vão precisar adotar.

---

## Verificação

1. `/check-spec` (último uso do nome antigo) → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 59/59 · 0 erros**. **C15 e G7 verdes.**
3. **Contagem de segurança** (deve bater exatamente):
   - `grep -c "aspect-ratio" src/index.template.html` → **3**
   - `grep -oE "específ|especif|especial" src/index.template.html | wc -l` → **21**
   - `grep -oE "\(spec00[0-9]{2}\)" src/index.template.html | wc -l` → **14**
   - `grep -c "meta/specs/" src/index.template.html` → **0**
   - `grep -c "apply-spec" src/index.template.html` → **0**
4. **Visual:** o kit do modo Code baixado traz `.claude/skills/apply-wo/SKILL.md` e o CEREBRO gerado aponta
   `meta/workorders/` com o padrão `AAMMDD-woNNNN-desc.md`.
5. `git diff --stat` — template + validate.js + index.html + os arquivos do dogfood + 4 meta-docs + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        meta/CEREBRO.md INSTRUCOES-DO-PROJETO.md \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md
git add -A meta/workorders check-wo.md apply-wo.md
git commit -m "refactor(vocabulario): spec vira Work Order (WO) - meta/workorders, /check-wo, /apply-wo (spec0053, D-086)

- artefato de aplicacao Chat->Code passa a ser WO: AAMMDD-woNNNN-desc.md em meta/workorders/
- comando e skill renomeados (apply-spec -> apply-wo, check-spec -> check-wo); identificador JS applyWo
- 'spec' fica reservado para a spec-de-feature do SDD (proxima entrega)
- historia preservada: WOs antigas e comentarios (specNNNN) mantidos
- check C15 trava o rename e as armadilhas (palavras pt-BR, aspect-ratio, historico)
- dogfood: CEREBRO, INSTRUCOES e comandos do proprio KCM adotam o WO
- KIT_VERSION 1.76.0; 18/18, 59/59, 0 erros"
git push
```
