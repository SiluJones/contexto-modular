# wo0061 — Nome padrão do handoff nos prompts de transferência e retomada

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.83.0` (pós-wo0060, commit `d84bf56`, pushado), harness **18/18 · 63/63 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 64/64 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado em sandbox pós-wo0060 → verde **18/18 · 64/64**.
> **Rode `/check-wo` antes de aplicar.** **Teto: custo zero** (prompts ficam fora do `N[]`).
>
> **Origem:** nota `260720-2129` — *«era para ter criado um nome de padronização dos Handoff… pode ser
> adicionado ao **prompt de transferência** (e não ao cérebro e tudo mais)»*.

## Por quê

As wo0058/wo0060 puseram `AAMMDD-HANDOFF-BRIEF.md` no **CEREBRO** (bloco de fecho). Mas o pedido original era
o **prompt de transferência** — e é ali que o nome faz diferença prática: é o prompt que **manda gerar** o
arquivo. Hoje os prompts E e F dizem só «HANDOFF-BRIEF», sem a convenção de data, então cada projeto inventa
o nome do arquivo que acabou de ser mandado criar.

---

## Tarefa A — `src/index.template.html`

### A1 — prompt **E** («Conversa pesada — transferir agora»)
**Âncora (fragmento único):** `um HANDOFF-BRIEF** (arquivo NOVO,`
**Substituir por:** ``um **`AAMMDD-HANDOFF-BRIEF.md`** (arquivo NOVO,``

### A2 — prompt **F** («Retomar após transferência»)
**Âncora (fragmento único):** `HANDOFF-BRIEF da conversa anterior`
**Substituir por:** ``` `AAMMDD-HANDOFF-BRIEF.md` da conversa anterior ```

### A3 — bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.83.0";` → `const KIT_VERSION = "1.84.0";`

---

## Tarefa B — `validate.js`: check **C20**

**Âncora:** `check("C19 bloco de fecho`
**Substituir por** (insira C20 ANTES do C19, que permanece logo depois):
```javascript
check("C20 nome padrao do handoff nos prompts de transferencia e retomada (wo0061)", () => {
  const raw=fs.readFileSync(path,"utf8");
  const n=(raw.match(/AAMMDD-HANDOFF-BRIEF\.md/g)||[]).length;
  assert(n>=3,"nome AAMMDD-HANDOFF-BRIEF.md deveria estar no CEREBRO + prompts E e F (achei "+n+")");
  assert(!/um HANDOFF-BRIEF\*\*/.test(raw),"prompt de transferencia ainda usa o nome sem convencao de data");
  return "ok ("+n+" ocorrencias)";
});

check("C19 bloco de fecho
```

---

## Tarefa C — docs (append)

- **`meta/DECISIONS.md` → D-095:** o nome `AAMMDD-HANDOFF-BRIEF.md` passa a constar nos **prompts E
  (transferir) e F (retomar)**, não só no CEREBRO — é o prompt que manda gerar o arquivo, então é ali que a
  convenção evita cada projeto inventar um nome. Fecha a nota 260720. Check C20. **Custo zero de teto**
  (prompts ficam fora do `N[]` das Instruções).
- **`meta/IDEAS.md`:** handoff padronizado → **FECHADO** (i-N44/i-N45 concluídos). **`UPDATE_PROTOCOL`
  revisado nesta passada e mantido como está** — entrega arquivo inteiro, conjunto consistente na mesma leva,
  higiene aplicada na montagem; não precisa refino. Parqueado para a próxima fase: **template da pasta
  `analises/`** (decidido `analises/` em pt-BR; falta o template com `Status` + elos cruzados e o diálogo com
  o projeto que usa `design/`).
- **`meta/STATUS.md`:** v1.83.0 → **v1.84.0**; **18/18 · 64/64 · 0 erros**; `KIT_VERSION 1.84.0`; somar C20.
- **`meta/CHANGELOG.md`:** entrada v1.84.0 no topo.

---

## Verificação

1. `/check-wo` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 64/64 · 0 erros**; **C20 reporta `ok (3 ocorrências)`**.
3. **Teto:** inalterado nos 18 (prompts não entram nas Instruções); `narrative` segue 6467, `game` 6375.
4. **Visual:** aba Prompts → **E** manda gerar um `AAMMDD-HANDOFF-BRIEF.md`; **F** manda colar o
   `AAMMDD-HANDOFF-BRIEF.md` da conversa anterior, mantendo o aviso de que o brief é atalho, não a verdade.
5. `git diff --stat` — template + validate.js + index.html + 4 meta-docs + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260727-wo0061-nome-handoff-nos-prompts.md
git commit -m "feat(handoff): nome AAMMDD-HANDOFF-BRIEF.md nos prompts de transferencia e retomada (wo0061, D-095)

- prompts E e F passam a nomear o artefato com a convencao de data (antes so o CEREBRO tinha)
- e o prompt que manda gerar o arquivo, entao e ali que a convencao evita nome inventado
- fecha a nota 260720 e as ideias i-N44/i-N45
- UPDATE_PROTOCOL revisado e mantido: entrega arquivo inteiro, leva consistente, higiene na montagem
- check C20; custo zero de teto (prompts ficam fora das Instrucoes)
- KIT_VERSION 1.84.0; 18/18, 64/64, 0 erros"
git push
```
