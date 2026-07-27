# wo0062 — Template da pasta `analises/` + registros pendentes (fecha a fase)

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.84.0` (pós-wo0061, commit `1909c76`, pushado), harness **18/18 · 64/64 · 0 erros**.
> **Resultado esperado:** harness **inalterado — 18/18 · 64/64 · 0 erros**.
>
> **⚠️ Esta WO é DOC-ONLY.** Não toca `src/` nem `validate.js`; a rede de segurança é o `git diff`.
> **Não há bump de `KIT_VERSION`** — o produto não muda. **Não rode `/check-wo`** (não há âncora de código).
>
> **Objetivo:** fechar a fase com o repo íntegro, sem pendência de registro, pronto para a próxima conversa
> ler como fonte de verdade.

---

## Tarefa A — criar `meta/analises/_TEMPLATE.md`

Decisão já tomada: a pasta se chama **`analises/`** (pt-BR, coerente com `meta/` e `workorders/`;
`design/` foi descartado por colidir com o nicho Design). Falta o modelo. Crie o arquivo:

```markdown
# ANÁLISE — [título]

> **Status:** Rascunho | Em discussão | Decidida | Implementada | Abandonada | Substituída
> **Data:** AAMMDD · **Base:** vX.Y.Z (versão/estado em que foi escrita)
> **Vira:** [WO/spec que nasceu daqui, quando houver] · **Decisão:** [D-0XX, quando registrada]

## Problema
[O que dói, para quem, e o que acontece se nada for feito.]

## Restrições / o que foi medido
[Números reais, limites, o que foi testado. Medir antes de propor — estimativa vira erro de planejamento.]

## Opções consideradas
[Inclusive as descartadas, com o motivo do descarte.]

## Recomendação
[Uma, explícita, com o porquê.]

## Riscos
[Onde isto pode dar errado; o que vigiar depois de aplicar.]

## Ponto de decisão
[O que preciso do usuário antes de virar WO. Análise não abre WO sozinha.]
```

**Regra de proporção (registrar no CEREBRO, uma linha):** *análise só para mudança **não-trivial** — mudança
pequena vai direto a WO, sem cerimônia.* O método equivale ao padrão **RFC / design doc** (documento que
precede o compromisso), enquanto `DECISIONS.md` cumpre o papel de **ADR** (o registro depois da escolha).

---

## Tarefa B — `meta/CEREBRO.md`: registrar a convenção

Acrescente, na seção de estrutura/convenções do CEREBRO do próprio KCM, uma entrada curta:

> **`meta/analises/`** — análise antes do compromisso (padrão RFC/design doc): problema, restrições
> medidas, opções, recomendação, riscos e ponto de decisão. Nome: `AAMMDD-ANALISE-<assunto>.md`; modelo em
> `_TEMPLATE.md`. **Só para mudança não-trivial.** O funil é: **análise → WO (`meta/workorders/`) →
> `DECISIONS.md`**; a spec de feature (`meta/specs/`) entra quando o trabalho é de produto.

Atualize a linha «Mudanças nesta revisão».

---

## Tarefa C — conferir e completar os registros pendentes

Antes de commitar, **verifique** (e complete o que faltar) — vários itens desta fase foram decididos em
conversa e podem não ter virado append:

1. **A análise do enxugamento está versionada?**
   `meta/analises/260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md` foi deixada fora do commit da wo0056 e incluída
   na wo0057 — **confirme que está no repo**. Acrescente a ela o cabeçalho de Status do template novo
   (**Status: Implementada**, **Vira:** wo0056/wo0057/wo0059/wo0060, **Decisão:** D-090/D-091/D-093/D-094).
2. **As outras análises desta fase têm o cabeçalho?** `260716-ANALISE-REFINO-NARRATIVE.md`
   (Status: Implementada · Vira: wo0047–wo0051 · Decisão: D-080/D-081/D-084) e
   `260718-ANALISE-i-N7-SDD-NICHOS-CODIGO.md` (Status: Implementada · Vira: wo0054 · Decisão: D-087).
   Se algum desses arquivos **não estiver no repo**, avise — não invente conteúdo.
3. **`.flatdropignore`** aparece como modificação pendente há várias sessões, sempre fora de escopo.
   **Decida agora:** ou commite (se a mudança é boa) ou reverta (`git checkout -- .flatdropignore`).
   Deixar pendente indefinidamente polui o `git status` de toda sessão futura.
4. **`meta/IDEAS.md`** — confirme que estão registradas como **abertas** para a próxima fase:
   - **Ensinar o produto sobre `analises/`** (hoje a convenção é só do KCM; avaliar se os kits gerados também
     recebem a pasta/menção — decisão de escopo, **não decidida**).
   - **i-N43** auto-refino registrado (gravar a armadilha diagnosticada) · **i-N33** layout responsivo ·
     **i-N13+i-N26** nicho em JSON / i18n · **i-N25** música letra/Suno · **i-N23** pixel art ·
     **i-N15/i-N16** entrega por diff.
   - **Validar em campo** se a wo0052 resolveu os projetos que não liam os `.txt`.
   - **Avaliar entregar o `/check-wo` aos projetos** (como o «analyze» do SDD) depois de mais quilometragem.
5. **`meta/STATUS.md`** — deixe o estado final desta fase explícito: **v1.84.0 · 18/18 · 64/64 · 0 erros**,
   e a nota de teto (`narrative` 6467/folga 433, `game` 6375/folga 525).

---

## Verificação

1. `node build.js` · `node validate.js index.html` → **18/18 · 64/64 · 0 erros** (nada deve mudar; se mudar,
   algo saiu do escopo doc-only — pare e reporte).
2. `git status` **limpo** ao final — sem modificação pendente, incluindo `.flatdropignore`.
3. `git log --oneline -8` — confira que wo0056…wo0062 estão todas no histórico e **pushadas**.
4. `git diff --stat` — só `meta/`.

---

## Commit (bloco separado, sem acento)

```bash
git add meta/analises meta/CEREBRO.md meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260727-wo0062-template-analises.md
git commit -m "docs(meta): template da pasta analises + registros pendentes da fase (wo0062, D-096)

- meta/analises/_TEMPLATE.md criado: Status, Base, elos cruzados (Vira/Decisao), problema,
  restricoes medidas, opcoes, recomendacao, riscos e ponto de decisao
- convencao registrada no CEREBRO: analises = padrao RFC/design doc, so para mudanca nao-trivial;
  funil analise -> WO -> DECISIONS (spec de feature entra quando o trabalho e de produto)
- cabecalho de Status aplicado as analises desta fase; pendencias de registro fechadas
- doc-only: produto intocado, harness inalterado (18/18, 64/64)"
git push
```
