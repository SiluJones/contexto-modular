# wo0057 — Enxugamento **WO-B**, 1ª leva: curadoria de `game`, `narrative`, `career`, `rpg`

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.79.0` (pós-wo0056, commit `76d9caf`, pushado), harness **18/18 · 62/62 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 62/62 checagens · 0 erros** (nenhum check novo; o C18 passa a
> reportar **`ok (28 curados)`**).
> **⚠️ Já validado:** aplicado em sandbox pós-wo0056 → verde, com as medições abaixo confirmadas.
> **Rode `/check-wo` antes de aplicar.**
>
> **Origem:** análise 260726, etapa **B** (por levas, nichos apertados primeiro), com a **regra de exceção**
> aprovada.

## Resultado medido (e uma correção honesta da análise)

| nicho | antes | depois | economia | folga (era) |
|---|---|---|---|---|
| game | 6879 | **6361** | 518 | **539** (era 21) |
| narrative | 6783 | **6453** | 330 | **447** (era 117) |
| career | 6260 | **5803** | 457 | **1097** |
| rpg | 6113 | **5654** | 459 | **1246** |

**A análise super-projetou.** Ela estimava ~2000–2775 chars por nicho; o real é **330–518**. Motivo: a
projeção comparava com a definição **integral**, mas as Instruções já usavam `shortDef()` (1ª frase). O ganho
verdadeiro vem de **curar** a frase, e é mais modesto. Ainda assim, o objetivo prático foi atingido: **o
`game` saiu de 21 para 539 chars de folga** — 25× mais espaço, e a parede deixou de bloquear novas frentes.
Corrigir a expectativa importa para o planejamento da WO-C: o resto do ganho terá de vir dos **papéis dos
arquivos** e da poda de markdown, não dos comportamentos.

**Regra de exceção em ação:** dois comportamentos ficaram **sem `short`** de propósito — `narrative/no_overdoc`
(39 chars) e `rpg/pc_center` (77 chars). Já são mínimos; curar não ganharia nada. *Não preencher* é a forma de
declarar a exceção.

**Integridade verificada:** o CEREBRO da narrativa continua com o **protocolo-sanduíche integral** e com os
**dois modos de colaboração** — nada de estrutura se perdeu. Foi a checagem que eu mais quis fazer nesta WO.

---

## Como aplicar (mecânica única para os 4 arquivos)

Cada comportamento é um array de 3 elementos: `["id","Label","Definição completa"]`. **Acrescente um 4º
elemento** (a frase curada). **Não altere** `id`, `Label` nem a definição. Exemplo:

```javascript
// antes
["scope_killer","Trata escopo como o assassino que é","Scope creep é a maior causa de jogos indie... [texto longo]"],
// depois
["scope_killer","Trata escopo como o assassino que é","Scope creep é a maior causa de jogos indie... [texto longo]","Corta escopo por padrão: propõe o menor recorte jogável e nomeia o que fica fora."],
```
> Se algum comportamento **já tiver** 4 elementos, pare e reporte (seria conflito com outra WO).

---

## Tarefa A — `src/niches/game.js` (9 comportamentos)

| id | 4º elemento a acrescentar |
|---|---|
| `naming` | `"Nunca um nome isolado nem imposto: 2–4 opções fundamentadas, com recomendação."` |
| `experience_first` | `"Primeiro a emoção alvo (a aesthetic); só então as mecânicas que a produzem."` |
| `systems_thinking` | `"Sistemas que interagem (loops, economia, progressão), não features avulsas."` |
| `loop_anchor` | `"Todo design volta ao core loop — que precisa ser divertido por si só."` |
| `intent_over_number` | `"Ao balancear, registra a intenção (curva, sensação alvo), não só o valor."` |
| `scope_killer` | `"Corta escopo por padrão: propõe o menor recorte jogável e nomeia o que fica fora."` |
| `playtest_hypothesis` | `"Design é hipótese: marca o que precisa de playtest antes de dar por certo."` |
| `creator_decides` | `"Explora possibilidades; a visão e a decisão são do designer."` |
| `builds_game` | `"Entrega o artefato (protótipo jogável, conteúdo), não só o documento."` |

## Tarefa B — `src/niches/narrative.js` (6 comportamentos)

| id | 4º elemento a acrescentar |
|---|---|
| `mechanic_vs_judgment` | `"Confia na IA para o mecânico (continuidade, lógica, pacing); o subjetivo é do autor."` |
| `continuity_memory` | `"Consulta BIBLIA/PERSONAGENS/CONTINUIDADE antes de afirmar qualquer fato da obra."` |
| `protect_voice` | `"Consulta VOZ.md antes de sugerir frase, descrição ou diálogo."` |
| `writes_prose` | `"Escreve de verdade quando pedido, no modo combinado, ancorado em VOZ/PERSONAGENS/ENREDO/CONTINUIDADE."` |
| `write_discipline` | `"Prosa nova segue o protocolo pré→durante→pós; a pré-checagem sozinha não basta."` |
| `beats_diagnostic` | `"Estruturas (três atos, jornada) são diagnóstico, não camisa de força."` |

> **`no_overdoc` NÃO recebe 4º elemento** — exceção deliberada (já tem 39 chars).

## Tarefa C — `src/niches/career.js` (6 comportamentos)

| id | 4º elemento a acrescentar |
|---|---|
| `evidence_first` | `"Nada entra em currículo ou pitch sem fato datado e prova em EVIDENCIAS.md."` |
| `scope_ledger` | `"Registra em SITUACAO.md o cargo contratado × o escopo real, com data e prova."` |
| `benchmark_sourced` | `"Faixa salarial e valor de mercado só com fonte, região e data citadas."` |
| `counterargue_before_irreversible` | `"Antes de ato irreversível (pedir aumento, sair), apresenta o contraponto."` |
| `mine_projects` | `"Varre os meta/ de outros projetos em busca de evidência de currículo."` |
| `vent_is_not_fact` | `"Desabafo entra como sinal, marcado; nunca vira fato de currículo."` |

## Tarefa D — `src/niches/rpg.js` (7 comportamentos)

| id | 4º elemento a acrescentar |
|---|---|
| `naming` | `"Nunca um nome isolado nem imposto: 2–4 opções fundamentadas, com recomendação."` |
| `lore_memory` | `"Consulta MUNDO/NPCs/CAMPANHA antes de afirmar qualquer fato do mundo."` |
| `npc_voice` | `"NPC relevante tem voz distinta, motivação clara e algo em jogo."` |
| `prep_light` | `"Prepara o que a party vai tocar na próxima sessão; o resto fica solto."` |
| `secrets_abstract` | `"Segredos e pistas são o tecido da campanha, não posse de uma cena."` |
| `improv_coherent` | `"Inesperado dos jogadores é feature: improvisa escutando, com coerência."` |
| `table_safety` | `"Cuida da mesa: Session Zero, limites de conteúdo e pacing compartilhado."` |

> **`pc_center` NÃO recebe 4º elemento** — exceção deliberada (já tem 77 chars).

## Tarefa E — `src/index.template.html`: bump
**Âncora:** `const KIT_VERSION = "1.79.0";` → `const KIT_VERSION = "1.80.0";`

---

## Tarefa F — docs (append)

- **`meta/DECISIONS.md` → D-091:** enxugamento etapa B, 1ª leva (game, narrative, career, rpg): 28 frases
  curadas no campo `short`; definições integrais intactas no CEREBRO. **Correção de expectativa:** economia
  real de **330–518 chars/nicho** (a análise projetava ~2000–2775, porque comparava com a definição integral
  em vez do `shortDef` já vigente). `game` saiu de **21 → 539** de folga. **Regra de exceção aplicada:**
  `narrative/no_overdoc` e `rpg/pc_center` seguem sem `short` (já mínimos). A curadoria também **corrigiu
  linhas que eram afirmação, não regra** (ex.: `scope_killer` dizia «scope creep é a maior causa de jogos
  indie não terminados»; agora diz o que fazer). Consequência para a WO-C: o ganho restante virá dos papéis
  dos arquivos e da poda de markdown.
- **`meta/IDEAS.md`:** WO-B 1ª leva concluída; **2ª leva** (os 14 nichos restantes) e **WO-C** parqueadas.
- **`meta/STATUS.md`:** v1.79.0 → **v1.80.0**; **18/18 · 62/62 · 0 erros**; `KIT_VERSION 1.80.0`; atualizar a
  nota de teto: **`game` 6361/6900 (folga 539)** — a parede caiu; o mais apertado agora é `narrative` (6453,
  folga 447).
- **`meta/CHANGELOG.md`:** entrada v1.80.0 no topo.
- **Pendência de higiene:** a análise `meta/analises/260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md` ficou **fora do
  commit da wo0056** (corretamente, por não estar citada nela). **Inclua-a no commit desta WO.**

---

## Verificação

1. `/check-wo` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 62/62 · 0 erros**; **C18 reporta `ok (28 curados)`**.
3. **Teto (confira os quatro):** game **6361** · narrative **6453** · career **5803** · rpg **5654**.
4. **Integridade (o mais importante):** o CEREBRO da narrativa ainda contém o **protocolo-sanduíche** e os
   **dois modos de colaboração**; o CEREBRO do game ainda contém a definição integral de `scope_killer`.
   Nenhum comportamento desapareceu das Instruções (o C18 cobre, mas confirme no olho).
5. `git diff --stat` — 4 módulos de nicho + template (versão) + index.html + 4 meta-docs + a análise pendente + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/niches/game.js src/niches/narrative.js src/niches/career.js src/niches/rpg.js \
        src/index.template.html index.html \
        meta/analises/260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260726-wo0057-enxugamento-curadoria-leva1.md
git commit -m "feat(instrucoes): curadoria dos shorts em game, narrative, career e rpg (wo0057, D-091)

- 28 frases curadas no campo short; definicoes integrais preservadas no CEREBRO
- game 6879->6361 (folga 21->539), narrative 6783->6453, career 6260->5803, rpg 6113->5654
- economia real 330-518 por nicho: a analise projetava mais porque comparava com a def integral
- regra de excecao aplicada: narrative/no_overdoc e rpg/pc_center seguem sem short
- curadoria corrigiu linhas que eram afirmacao e nao regra (ex.: scope_killer)
- inclui a analise do enxugamento, que ficou fora do commit anterior
- KIT_VERSION 1.80.0; 18/18, 62/62, 0 erros (C18: 28 curados)"
git push
```
