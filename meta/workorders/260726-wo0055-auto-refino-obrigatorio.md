# wo0055 — Auto-refino das Instruções como **dever**, não como pedido

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.77.0` (pós-wo0054, commit `dde682a`, pushado), harness **18/18 · 60/60 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 61/61 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado em sandbox pós-wo0054 → verde **18/18 · 61/61**.
> **Teto: custo ZERO** — tudo entra no CEREBRO (bloco G19). `game` fica em **6879, folga 21, inalterado**.
> **Rode `/check-wo` antes de aplicar.**
>
> **Origem:** decisão do usuário (260726): *«a prioridade é dar a possibilidade do chat formular sua própria
> instrução baseada na nossa genérica… isso deveria ser tratado como uma obrigação imposta, pois alguns
> projetos não entregaram refinamento e eu tenho de pedir — não deveria ser eu pedindo.»*

## Por quê

O bloco «Refino das Instruções do Projeto» (G19) já **ensina a refinar**, mas é **passivo**: descreve o
método e espera alguém puxar. Resultado observado em campo: os projetos não refinam, e o usuário precisa
pedir. Esta WO transforma o refino em **dever proativo com gatilho**, e — igualmente importante — dá ao
projeto a **liberdade de decidir o que merece texto integral**.

Isto também é o que torna o **enxugamento** (análise 260726) seguro: o kit passa a entregar Instruções
enxutas *porque* cada projeto tem o dever e a liberdade de crescer de volta o que precisa. Sem esta WO, o
enxugamento seria só perda; com ela, é troca de peso genérico por peso relevante.

---

## Tarefa A — `src/index.template.html`

### A1 — três bullets novos **no início** do bloco G19
**Âncora:** `  L.push("- **Corte o que não se aplica.**`
**Substituir por:**
```javascript
  L.push("- **É dever seu, não meu pedido.** Estas Instruções nascem genéricas: são um ponto de partida a especializar, como todo template do kit. Você **deve** propor o refino por conta própria — no fim da primeira sessão de trabalho real e, depois, sempre que perceber sinal (regra que você repetidamente descumpre, instrução que nunca se aplicou, atrito recorrente). Não espere eu pedir; se eu tiver de pedir, o refino já atrasou.");
  L.push("- **Você decide o que merece texto integral.** As Instruções trazem a regra em forma curta e o CEREBRO guarda a definição completa. Se uma regra específica é crítica **neste** projeto — ou é justamente a que você mais erra — promova-a de volta ao texto integral nas Instruções, dizendo por quê. O orçamento é seu para administrar: encolher não é a meta, acertar o que fica sempre à vista é.");
  L.push("- **Atrito sem solução local vira feedback ao kit.** Se o problema não é deste projeto e sim do KCM (regra confusa, gatilho que não dispara, lacuna de comportamento), registre em IDEAS.md na seção de feedback ao kit — é um desfecho legítimo do refino, não uma desculpa para não refinar.");
  L.push("- **Corte o que não se aplica.**
```
> Os três entram **antes** do bullet existente, que continua igual logo depois.

### A2 — bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.77.0";` → `const KIT_VERSION = "1.78.0";`

---

## Tarefa B — `validate.js`: check **C17**

**Âncora:** `check("C16 SDD leve`
**Substituir por** (insira C17 ANTES do C16, que permanece logo depois):
```javascript
check("C17 auto-refino obrigatorio (wo0055): dever proativo, liberdade de promover regra, feedback ao kit", () => {
  const md=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/É dever seu, não meu pedido/.test(md),"CEREBRO sem o dever proativo de refino");
  assert(/Você decide o que merece texto integral/.test(md),"CEREBRO sem a liberdade de promover regra a integral");
  assert(/vira feedback ao kit/.test(md),"CEREBRO sem o caminho de feedback ao KCM");
  assert(/Refino das Instruções do Projeto/.test(md),"bloco de refino (G19) sumiu");
  return "ok";
});

check("C16 SDD leve
```

---

## Tarefa C — DOGFOOD + template de análise

### C1 — `meta/CEREBRO.md` (próprio KCM)
Acrescente ao bloco de refino as mesmas três regras (dever proativo · liberdade de promover a integral ·
atrito vira feedback), adaptadas ao KCM, e atualize a linha «Mudanças nesta revisão» para v1.78.0.

### C2 — `meta/analises/_TEMPLATE.md` (novo, pequeno)
A pesquisa sobre o método `analises/` (ver Tarefa D) mostrou que o artefato equivale a um **RFC/design doc** e
que a prática madura carrega **status** e **elos cruzados**. Crie o modelo:
```markdown
# ANÁLISE — [título]

> **Status:** Rascunho | Em discussão | Decidida | Implementada | Abandonada | Substituída
> **Data:** AAMMDD · **Base:** vX.Y.Z
> **Vira:** [WO/spec que nasceu daqui, quando houver] · **Decisão:** [D-0XX, quando registrada]

## Problema
## Restrições / o que foi medido
## Opções consideradas
## Recomendação
## Riscos
## Ponto de decisão (o que preciso do usuário)
```
> Regra de uso (registrar no CEREBRO, uma linha): **análise só para mudança não-trivial** — mudança pequena
> vai direto a WO, sem cerimônia.

---

## Tarefa D — docs (append)

- **`meta/DECISIONS.md` → D-088:** o refino das Instruções vira **dever proativo** do assistente, com gatilho
  (fim da primeira sessão real; depois, ao primeiro sinal de atrito) — antes era conhecimento passivo e
  dependia de o usuário pedir. Acompanha a **liberdade de promover regra a texto integral** (o projeto
  administra o próprio orçamento; encolher não é a meta) e o **feedback ao kit** como desfecho legítimo.
  Custo zero de teto (CEREBRO). Check C17. **Pré-condição do enxugamento:** sem esta regra, entregar
  Instruções enxutas seria perda; com ela, é troca de peso genérico por peso relevante.
- **`meta/DECISIONS.md` → D-089:** o método `meta/analises/` fica **confirmado e mantido** — equivale ao
  padrão RFC / design doc (documento que precede o compromisso: define problema, restrições, opções e
  riscos), enquanto `DECISIONS.md` cumpre o papel de ADR (o registro *depois* da escolha), `meta/specs/`
  guarda a spec de feature e `meta/workorders/` a instrução de aplicação. Adotado o campo **Status** e os
  elos cruzados (análise → WO/spec → D-0XX). **Análise não vira spec nem muda de pasta** — são artefatos de
  etapas diferentes. Regra de proporção: só para mudança não-trivial.
- **`meta/IDEAS.md`:** auto-refino → **INCORPORADO**. Parqueados: **enxugamento WO-A/B/C** (aprovado: A→B→C,
  por partes, com regra de exceção) e **handoff + bloco de config padronizado** (260720).
- **`meta/STATUS.md`:** v1.77.0 → **v1.78.0**; **18/18 · 61/61 · 0 erros**; `KIT_VERSION 1.78.0`; somar C17;
  manter a nota do `game` (6879/6900, folga 21).
- **`meta/CHANGELOG.md`:** entrada v1.78.0 no topo.

---

## Verificação

1. `/check-wo` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 61/61 · 0 erros**. C17 e G19 verdes.
3. **Teto:** `game` = **6879 inalterado** (folga 21); nenhum nicho muda — a mudança é 100% CEREBRO.
4. **Visual:** qualquer nicho → CEREBRO, seção «Refino das Instruções do Projeto», abre com «É dever seu, não
   meu pedido», seguida da liberdade de promover regra e do caminho de feedback.
5. `git diff --stat` — template + validate.js + index.html + meta/CEREBRO.md + `meta/analises/_TEMPLATE.md` + 4 meta-docs + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js meta/CEREBRO.md \
        meta/analises/_TEMPLATE.md \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260726-wo0055-auto-refino-obrigatorio.md
git commit -m "feat(refino): auto-refino das Instrucoes vira dever proativo, com liberdade de promover regra (wo0055, D-088/D-089)

- bloco G19 abre com 'e dever seu, nao meu pedido': gatilho na primeira sessao real e a cada sinal de atrito
- projeto decide o que merece texto integral (promove regra critica de volta) - orcamento e dele
- atrito sem solucao local vira feedback ao kit (IDEAS), desfecho legitimo do refino
- pre-condicao do enxugamento: entregar instrucao enxuta so e seguro com o dever de refinar
- metodo meta/analises confirmado como RFC/design doc, com Status e elos cruzados (D-089)
- custo zero de teto (tudo no CEREBRO); check C17; KIT_VERSION 1.78.0
- 18/18, 61/61, 0 erros"
git push
```
