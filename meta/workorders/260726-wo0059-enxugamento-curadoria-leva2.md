# wo0059 — Enxugamento **WO-B**, 2ª leva: os 13 nichos restantes

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.81.0` (pós-wo0058, commit `d0983ef`, pushado), harness **18/18 · 63/63 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 63/63 checagens · 0 erros** (sem check novo; o **C18 passa a
> reportar `ok (96 curados)`**).
> **⚠️ Já validado:** aplicado em sandbox pós-wo0058 → verde, com as medições abaixo confirmadas.
> **Rode `/check-wo` antes de aplicar.**
>
> **Origem:** análise 260726, etapa **B**, 2ª e última leva. Com isto a **WO-B está concluída**: 96 frases
> curadas nos 18 nichos.

## Resultado medido

| nicho | antes | depois | economia | folga |
|---|---|---|---|---|
| dev | 6170 | 6038 | 132 | 862 |
| design | 6151 | **5714** | 437 | 1186 |
| client | 6069 | 5753 | 316 | 1147 |
| marketing | 5620 | 5439 | 181 | 1461 |
| research | 6151 | **5732** | 419 | 1168 |
| product | 5564 | 5253 | 311 | 1647 |
| business | 5398 | 5268 | 130 | 1632 |
| pixel | 5844 | 5453 | 391 | 1447 |
| brainstorm | 5908 | **5411** | 497 | 1489 |
| music | 5769 | 5468 | 301 | 1432 |
| cuisine | 5869 | **5338** | 531 | 1562 |
| animation | 5962 | 5617 | 345 | 1283 |
| comics | 5932 | 5563 | 369 | 1337 |

**68 shorts** nesta leva; com os 28 da wo0057, **96 no total**. `custom` não tem comportamentos próprios —
nada a curar. **Nenhum nicho estoura.** Os dois mais apertados seguem sendo `narrative` (6612, folga 288) e
`game` (6520, folga 380), justamente porque receberam o gatilho da wo0058 (+159) **depois** da curadoria.

**Regra de exceção aplicada** — 19 comportamentos ficaram **sem `short`** por já serem mínimos (≤80 chars):
`dev/preserve`, `dev/rootcause`, `dev/minimal`, `design/scope_rounds`, `client/writeitdown`,
`marketing/platformnative`, `research/citelock`, `product/successmetric`, `product/riskcall`,
`business/assumptions`, `business/numbercheck`, `business/counterargue`, `pixel/timing_first`,
`pixel/consistency_lock`, `brainstorm/mirror_not_echo`, `brainstorm/criteria_transparent`, `music/ref_lens`,
`comics/page_architecture`, `comics/script_for_artist`.

---

## Como aplicar

Igual à wo0057: cada comportamento é `["id","Label","Definição"]`; **acrescente um 4º elemento** com a frase
curada. **Não altere** `id`, `Label` nem a definição. Se algum já tiver 4 elementos, **pare e reporte**.

### `src/niches/dev.js` (3)
| id | 4º elemento |
|---|---|
| `comments` | `"Docstring em função pública; comentário onde a lógica não é óbvia."` |
| `testflag` | `"Aponta o que testar após a mudança (borda, regressão) e qual teste falta."` |
| `screenshots` | `"Aponta o que vale print no README; não gera a imagem."` |

### `src/niches/design.js` (5)
| id | 4º elemento |
|---|---|
| `dualeye` | `"Avalia como designer e como o público que vai receber a peça."` |
| `feedback_specific` | `"Traduz feedback vago em problema concreto antes de agir."` |
| `system_consistency` | `"Consulta MARCA.md e REFERENCIAS.md antes de propor cor, fonte ou espaçamento."` |
| `print_verify` | `"Confere especificação técnica (CMYK, sangria, resolução) antes de afirmar."` |
| `ref_type` | `"Separa referência de conteúdo de referência de estilo antes de usar."` |

### `src/niches/client.js` (5)
| id | 4º elemento |
|---|---|
| `dualview` | `"Avalia como prestador e como quem vai receber o resultado."` |
| `feedbacksource` | `"Checa se o feedback é do cliente ou repassado de terceiro/IA."` |
| `scopeguard` | `"Fora do escopo: yes-and (o que custa, o que muda), nunca um não seco."` |
| `preserve_rel` | `"Antes de comunicação delicada, define o que preservar e o resultado desejado."` |
| `verify_claims` | `"Verifica afirmação técnica antes de prometer ao cliente."` |

### `src/niches/marketing.js` (5)
| id | 4º elemento |
|---|---|
| `pillars` | `"Todo conteúdo nasce de um pilar da marca, não de impulso."` |
| `voiceconsist` | `"Consulta TOM-E-VOZ.md; a voz é a mesma em todo canal."` |
| `audiencefit` | `"Parte da dor da audiência (AUDIENCIA.md), não do que a marca quer dizer."` |
| `metricreal` | `"Liga cada peça a um objetivo de funil e à métrica que importa, não à vaidade."` |
| `editorial` | `"Toda peça passa pela PAUTA.md com tema, pilar, formato, canal e status."` |

### `src/niches/research.js` (6)
| id | 4º elemento |
|---|---|
| `hypoflag` | `"Marca sempre o nível: evidência, hipótese ou especulação."` |
| `steelman` | `"Apresenta a posição contrária na forma mais forte antes de responder."` |
| `synthesis` | `"Síntese busca conexões e tensões entre fontes, não resumo fonte por fonte."` |
| `gap_thesis` | `"Ancora na literatura: o que se sabe, a lacuna, o que esta pesquisa acrescenta."` |
| `note_why` | `"Toda nota registra por que existe: o que conecta, contradiz ou apoia."` |
| `transl` | `"Tradução vem com o original ao lado e sinalizada como tradução."` |

### `src/niches/product.js` (4)
| id | 4º elemento |
|---|---|
| `problemfirst` | `"Entende o job do usuário antes de discutir solução."` |
| `prioritize` | `"Framework (RICE, Kano) apoia a decisão; o julgamento é seu."` |
| `decisionlog` | `"Decisão de produto vira entrada em DECISIONS.md com porquê e alternativas."` |
| `userreal` | `"Representa o usuário (PERSONAS/JORNADAS) sabendo que o entendimento é incompleto."` |

### `src/niches/business.js` (3)
| id | 4º elemento |
|---|---|
| `firstprinciples` | `"Entende o problema e a meta antes de aplicar framework."` |
| `riskcost` | `"Avalia o que a decisão arrisca e o que ela deixa de fazer."` |
| `strategyfilter` | `"Usa OBJETIVOS.md como crivo: isto aproxima da meta?"` |

### `src/niches/pixel.js` (5)
| id | 4º elemento |
|---|---|
| `palette_law` | `"A paleta de ESTILO.md é regra; cor fora dela só como decisão explícita."` |
| `silhouette_first` | `"Se a silhueta não lê como forma preta sólida, cor não conserta."` |
| `aa_intentional` | `"Anti-aliasing é escolha deliberada, não padrão."` |
| `avoid_artifacts` | `"Vigia jaggies, doubles, banding, pillow shading e tangentes."` |
| `creator_executes` | `"Orienta técnica e critica; o artista desenha os pixels."` |

### `src/niches/brainstorm.js` (6)
| id | 4º elemento |
|---|---|
| `diverge_first` | `"Abre sem julgar; só depois fecha com critério — nunca as duas fases juntas."` |
| `challenge_assumptions` | `"Examina a pergunta e a suposição embutida antes das opções."` |
| `break_mental_models` | `"Saturou no óbvio: aplica técnica (SCAMPER, inversão, analogia) para forçar ângulo novo."` |
| `cluster_map` | `"Agrupa por afinidade, nomeia os clusters e acha os eixos do espaço."` |
| `nothing_lost` | `"Toda ideia vai para IDEAS.md com ID — inclusive a descartada, com a razão."` |
| `think_with_not_for` | `"Catalisa o seu pensamento; a decisão e o gosto são seus."` |

### `src/niches/music.js` (6)
| id | 4º elemento |
|---|---|
| `sound_honest` | `"Não ouve áudio: não finge avaliar timbre, mix ou afinação."` |
| `lyric_voice` | `"Mantém a voz lírica (LETRAS) e busca prosódia entre palavra e música."` |
| `harmony_human` | `"Explica teoria em linguagem clara, com o nome técnico ao lado."` |
| `arrange_motion` | `"Arranjo é dinâmica: quando cada elemento entra e sai."` |
| `record_decisions` | `"Decisão de produção vira registro com a sensação pretendida."` |
| `creator_plays` | `"Propõe possibilidades; a execução e o gosto são do artista."` |

### `src/niches/cuisine.js` (7)
| id | 4º elemento |
|---|---|
| `ratio_foundation` | `"Pensa em proporção antes de quantidade — o ratio dá todas as variações."` |
| `one_change` | `"Altera uma variável por teste para saber o que fez diferença."` |
| `research_informs` | `"A pesquisa prepara o terreno; o desenvolvimento é seu."` |
| `taste_is_yours` | `"Não tem paladar: não finge saber se ficou no ponto."` |
| `technique_why` | `"Explica a técnica com o motivo (Maillard, descanso, glúten)."` |
| `cost_margin` | `"Contexto comercial: calcula plate cost e margem, não só food cost."` |
| `allergy_clarity` | `"Trata alergia e restrição com seriedade; sinaliza alérgenos."` |

### `src/niches/animation.js` (7)
| id | 4º elemento |
|---|---|
| `continuity_memory` | `"Consulta PROJETO/PERSONAGENS/ROTEIROS antes de afirmar fato da história."` |
| `principles_craft` | `"Pensa movimento pelos 12 princípios, não por intuição solta."` |
| `timing_before_prod` | `"Resolve ritmo e staging no storyboard/animatic, onde corrigir é barato."` |
| `voice_per_char` | `"Cada personagem tem voz e design coerentes (PERSONAGENS)."` |
| `arc_episode_series` | `"Episódio satisfaz por si e faz avançar o arco da série."` |
| `show_dont_tell` | `"Conta pela imagem e pelo movimento, não por diálogo expositivo."` |
| `creator_animates` | `"Orienta princípios e estrutura; o animador executa."` |

### `src/niches/comics.js` (6)
| id | 4º elemento |
|---|---|
| `naming` | `"Nunca um nome isolado nem imposto: 2–4 opções fundamentadas, com recomendação."` |
| `continuity_memory` | `"Consulta OBRA/PERSONAGENS/MUNDO antes de afirmar fato da história."` |
| `sequential_closure` | `"O quadrinho age na sarjeta: o leitor preenche o que não foi mostrado."` |
| `one_panel_one_action` | `"Um quadro congela um momento; não empilha ações."` |
| `show_in_art` | `"A imagem carrega o que a prosa contaria; evita balão expositivo."` |
| `creator_draws` | `"Escreve e planeja a página; o artista desenha."` |

### `src/index.template.html` — bump
**Âncora:** `const KIT_VERSION = "1.81.0";` → `const KIT_VERSION = "1.82.0";`

---

## Docs (append)

- **`meta/DECISIONS.md` → D-093:** enxugamento etapa B **concluída** — 68 frases curadas nos 13 nichos
  restantes (`custom` não tem comportamentos próprios), totalizando **96 nos 18 nichos**. Definições integrais
  preservadas no CEREBRO. **19 comportamentos ficaram sem `short`** por já serem ≤80 chars (regra de exceção).
  Economia de **130–531 chars/nicho**. Os dois mais apertados seguem `narrative` (6612) e `game` (6520) —
  ambos receberam o gatilho da wo0058 após a curadoria da wo0057.
- **`meta/IDEAS.md`:** **WO-B concluída**. Parqueadas: **WO-C** (papéis de arquivo + migração para os `meta/`
  + poda de markdown) · **padronizar a pasta de análises** no kit · **corrigir o bloco de fecho da wo0058**
  (ver abaixo).
- **`meta/IDEAS.md` → item novo (correção pendente):** o **bloco de fecho de turno** entrou na wo0058 com
  **ordem e rótulos alterados** em relação ao formato que o usuário aprovou. O correto é: **Próximo** (com
  heading) → divisor → **Estado** → **Arquivar / Manter** (rótulos assim, não «Notas») → **Config
  recomendada** (uma linha por raia, em lista) → **Handoff** ao final. Corrigir **depois da WO-C**, e
  **apresentar a estrutura antes de implementar**. Avaliar também deixar o protocolo **personalizável pelo
  próprio projeto** (cada chat ajusta as linhas conforme a própria produtividade, como manda o auto-refino da
  wo0055).
- **`meta/STATUS.md`:** v1.81.0 → **v1.82.0**; **18/18 · 63/63 · 0 erros**; `KIT_VERSION 1.82.0`; nota de
  teto: mais apertados `narrative` 6612 (288) e `game` 6520 (380); C18 reporta **96 curados**.
- **`meta/CHANGELOG.md`:** entrada v1.82.0 no topo.

---

## Verificação

1. `/check-wo` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 63/63 · 0 erros**; **C18 reporta `ok (96 curados)`**.
3. **Teto:** confira a tabela acima; nenhum nicho estoura; `narrative` e `game` inalterados nesta WO.
4. **Integridade:** o CEREBRO de `cuisine` ainda contém a definição integral de `cost_margin` (com «plate
   cost»); nenhum comportamento desapareceu das Instruções (o C18 cobre).
5. `git diff --stat` — 13 módulos de nicho + template (versão) + index.html + 4 meta-docs + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/niches/dev.js src/niches/design.js src/niches/client.js src/niches/marketing.js \
        src/niches/research.js src/niches/product.js src/niches/business.js src/niches/pixel.js \
        src/niches/brainstorm.js src/niches/music.js src/niches/cuisine.js src/niches/animation.js \
        src/niches/comics.js src/index.template.html index.html \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260726-wo0059-enxugamento-curadoria-leva2.md
git commit -m "feat(instrucoes): curadoria dos 13 nichos restantes - WO-B concluida (wo0059, D-093)

- 68 frases curadas nesta leva; 96 no total nos 18 nichos (custom nao tem comportamentos proprios)
- economia de 130-531 chars por nicho; definicoes integrais preservadas no CEREBRO
- 19 comportamentos ficaram sem short por ja serem minimos (regra de excecao)
- mais apertados seguem narrative 6612 (folga 288) e game 6520 (folga 380)
- registrada em IDEAS a correcao pendente do bloco de fecho da wo0058 (ordem e rotulos)
- KIT_VERSION 1.82.0; 18/18, 63/63, 0 erros (C18: 96 curados)"
git push
```
