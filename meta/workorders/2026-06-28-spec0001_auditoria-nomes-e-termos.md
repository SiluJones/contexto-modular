# Auditoria de nomes e termos — 17 nichos do KCM

> Base para decidirmos os padrões. Dados extraídos do `/mnt/project` (estado vivo). Quatro decisões + inventário.
> Princípio-guia (sua tese, que endosso): **nome de arquivo e termo são convenção de engenharia — fixos, únicos por conceito, iguais em todos os nichos e independentes do idioma da UI.** O que muda com o idioma é a UI e o *conteúdo*, nunca os nomes estruturais.

---

## Decisão 1 — idioma dos nomes de arquivo

O problema é **estreito e localizado**: quase tudo já é consistente. A divergência real está nos **arquivos de conhecimento entre-nichos**, e a causa é **o nicho `dev` que foi para o inglês enquanto os outros ficaram em português.**

| Conceito | Nome PT | Nome EN | Quem usa PT | Quem usa EN | **Canônico recomendado** |
|---|---|---|---|---|---|
| Decisões (ADR) | `DECISOES` | `DECISIONS` | brainstorm, business, design, product | dev | **`DECISOES`** |
| Ideias | `IDEIAS` | `IDEAS` | brainstorm (+ universal) | dev | **`IDEIAS`** |
| Glossário | `GLOSSARIO` | `GLOSSARY` | narrative, research | dev | **`GLOSSARIO`** |
| Contexto | `CONTEXTO` | `CONTEXT` | business | dev | **`CONTEXT`** |
| Histórico | `HISTORICO` | `HISTORY` | dev, research | — | **`HISTORICO`** |
| Changelog | — | `CHANGELOG` | — | dev | **`CHANGELOG`** (já EN) |
| Roadmap | — | `ROADMAP` | — | dev | **`ROADMAP`** (já EN) |
| Status | — | `STATUS` | — | todos | **`STATUS`** (já uniforme) |
| Template de log | — | `LOG-TEMPLATE` | — | todos | **`LOG-TEMPLATE`** (já uniforme) |

**Regra recomendada (uma frase, fácil de impor):** arquivos com **padrão global consagrado** ficam em inglês (`CHANGELOG`, `ROADMAP`, `CONTEXT`, `STATUS`, `LOG-TEMPLATE`, `README`); arquivos de conhecimento **sem padrão global** e **todo conteúdo de nicho** ficam em **português** (`DECISOES`, `IDEIAS`, `GLOSSARIO`, `HISTORICO` + `BIBLIA`, `MECANICAS`, `RECEITAS`…).

**Por que essa direção (e não tudo-inglês):** (a) a maioria dos nichos, o seu repo KCM e 100% dos arquivos de conteúdo já são PT — então só **o nicho `dev` muda**; (b) não existe padrão global de verdade para "DECISIONS.md" como existe para "CHANGELOG.md" — em projeto PT, `DECISOES` é o natural; (c) churn mínimo e o repo do KCM fica estável.

**Mudanças que isso exige (total: 4 renomeações + 1 universal):**
- `dev`: `DECISIONS`→`DECISOES`, `IDEAS`→`IDEIAS`, `GLOSSARY`→`GLOSSARIO`.
- `business`: `CONTEXTO`→`CONTEXT`.
- Template **universal de IDEAS** (forçado em todo nicho) → renomear para **`IDEIAS`** (ver Decisão 3).

> Se você preferir **tudo-inglês** (sua intuição inicial), o caminho inverte: muda a maioria dos nichos + o repo KCM. É legítimo (convenção global), mas é o churn grande. Minha recomendação fica em PT-para-conhecimento pelos motivos acima — mas é seu o último voto.

---

## Decisão 2 — termo de correção (BUG vs FIX) e o DEC

**Estudo feito (busca no código):** o "conflito BUG vs FIX" **não está espalhado nos templates atuais**. O termo de correção aparece só assim:
- Nenhum nicho usa prefixo `BUG-`. O único prefixo de correção é **`FIX-`**, e só no nicho **`dev`** (que rastreia correções como entradas `FIX-NNN`).
- A palavra "bug" aparece só como **frase de evento** no gatilho universal: *"Bug grave resolvido → entrega o DECISIONS.md"*. Não é um arquivo nem um prefixo concorrente — é descrição.

**Conclusão:** não há dois nomes de arquivo brigando; há (a) um **prefixo** (`FIX-`, dev) e (b) uma **palavra de evento** ("bug"). O risco é a IA **improvisar `BUG-`** em projetos gerados porque o template mistura "bug" (evento) com `FIX-` (prefixo).

**Recomendação:** canonizar **`FIX-`** como o único prefixo de correção (é o resultado, curto, neutro); jamais `BUG-`. No gatilho universal, trocar *"Bug grave resolvido"* por *"Erro/bug grave resolvido → registra a lição no `DECISOES`"* (e, só nos nichos que rastreiam correções separadamente, *"+ `FIX-` no log"*). Assim a palavra "bug" pode aparecer como descrição, mas o **prefixo** é sempre `FIX-`.

**Sobre o DEC:** o problema do DEC **não é o termo** (o prefixo `DEC-` é o padrão de fato — 9 nichos o usam). O problema é o **arquivo onde ele mora**: o gatilho universal manda "atualizar `DECISIONS.md`", mas muitos nichos **não têm** esse arquivo (ver Decisão 3). Logo, o DEC se resolve junto da Decisão 1 (nome = `DECISOES`) + Decisão 3 (gatilho por nicho).

---

## Decisão 3 — referências fantasma (o CEREBRO tem que ser genérico **por nicho**, não para todos)

**Causa-raiz localizada.** As seções **universais** do `buildClaudeMd()` — a **tabela de gatilhos**, a regra de **higiene ao encolher** e o **template universal de IDEAS** — fixam nomes de arquivo em inglês e assumem que **todo nicho** os tem:
- Gatilhos: *"Lê CEREBRO → CONTEXT → STATUS → última entrada do `CHANGELOG`"*, *"Decisão importante → entrega `DECISIONS.md`"*, *"Fim de sessão → `STATUS` + `CHANGELOG`"*.
- Higiene: cita *"CONTEXT, STATUS, **DECISIONS, CHANGELOG, IDEAS, ROADMAP**"*.
- IDEAS forçado universal (comentário no código: *"todo nicho referencia IDEAS"*) — e em inglês.

**Mas a realidade dos nichos é outra:**

| Arquivo citado nos gatilhos | Quais nichos REALMENTE têm |
|---|---|
| `CHANGELOG` | **só `dev`** |
| `ROADMAP` | **só `dev`** |
| `DECISIONS`/`DECISOES` | brainstorm, business, design, product, dev (os outros 12 **não têm** — ex.: `game` guarda DECs no `MECANICAS`) |
| `IDEAS`/`IDEIAS` | forçado universal pelo template (mas nomeado em EN) |
| `STATUS`, `LOG-TEMPLATE` | todos ✓ |

Resultado: o CEREBRO de um projeto `game` ou `narrative` manda "atualizar o `CHANGELOG.md`" — arquivo que **não existe** ali. O projeto procura, não acha, e às vezes **tenta "se corrigir" criando o arquivo** → exatamente a corrupção de meta/ que você relatou.

**Recomendação (você confirmou: "genérico por nicho"):** gerar gatilhos, higiene e o template de ideias **a partir dos `contextFiles` reais do nicho**, não de uma lista hardcoded. Na prática:
- O gatilho "fim de sessão" só cita `CHANGELOG`/`ROADMAP` se o nicho os tiver.
- O gatilho "decisão tomada" aponta para o arquivo de decisões **que aquele nicho tem** (`DECISOES`), ou — se não tiver um dedicado — para onde o nicho guarda decisão (ex.: dentro do `MECANICAS`, no `STATUS`).
- A lista de higiene cita só os arquivos-chave **daquele** nicho.
- O `IDEIAS` universal passa a se chamar `IDEIAS` (Decisão 1).

Este é o conserto de **maior valor e maior risco** — toca o núcleo da geração e os 17 nichos. Vai precisar de spec cuidadosa, com o harness 17/17 como rede.

---

## Decisão 4 — convenção obrigatória de nome de spec

**Confirmado:** `AAAA-MM-DD-specNNNN.md`, ex.: **`2026-06-28-spec0001.md`**. Prefixo de data (ordena cronologicamente) + número sequencial de 4 dígitos (ordena dentro do dia e dá identidade curta: "spec0001"). Vira **regra obrigatória** na geração do Modo Code; o assistente nunca inventa nome livre.

---

## Inventário completo — arquivos meta/ por nicho (deduplicado)

| Nicho | Arquivos meta/ (fora STATUS, LOG-TEMPLATE, logs/ que são universais) |
|---|---|
| animation | PROJETO, PERSONAGENS, ROTEIROS, ESTILO, PRODUCAO, CENAS |
| brainstorm | TEMA, **IDEIAS**, MAPA, FILTROS, **DECISOES** |
| business | **CONTEXTO**¹, OBJETIVOS, ANALISE, **DECISOES**, MODELO-FINANCEIRO |
| client | CLIENTE, PROJETO, ACORDOS, ENTREGAS, COMUNICACOES, FINANCEIRO |
| comics | OBRA, PERSONAGENS, ROTEIRO, MUNDO, PRANCHAS |
| cuisine | CONCEITO, RECEITAS, MENU, CUSTOS |
| design | PROJETO, CLIENTE, MARCA, REFERENCIAS, **DECISOES**, REVISOES, PRODUCAO |
| **dev** | **CONTEXT, DECISIONS², CHANGELOG, IDEAS², ROADMAP, GLOSSARY², HISTORICO** |
| game | JOGO, MECANICAS, UNIVERSO, ARTE-E-SOM, PRODUCAO, NIVEIS, ROTEIRO *(DECs vivem no MECANICAS)* |
| marketing | MARCA, AUDIENCIA, TOM-E-VOZ, PAUTA, RESULTADOS |
| music | PROJETO, FAIXAS, LETRAS, ARRANJO, REFERENCIAS |
| narrative | BIBLIA, PERSONAGENS, ENREDO, VOZ, CONTINUIDADE, CRONOLOGIA, **GLOSSARIO** |
| pixel | ESTILO, SPRITES, ANIMACAO, RESTRICOES, TILESET |
| product | PRODUTO, PERSONAS, JORNADAS, **DECISOES**, EXPERIMENTOS |
| research | TEMA, FONTES, HIPOTESES, SINTESE, **GLOSSARIO**, HISTORICO |
| rpg | MUNDO, PJs, NPCs, CAMPANHA, SESSAO, REGRAS-CASEIRAS |

¹ `business` usa `CONTEXTO` (pt) — recomendado → `CONTEXT`.
² `dev` é o único divergente — recomendado → `DECISOES`, `IDEIAS`, `GLOSSARIO`.

**Negrito** = arquivo de conhecimento entre-nichos que entra na padronização. Os demais são conteúdo de nicho (ficam como estão).

---

## Sequência proposta (depois das suas decisões)
1. **Spec de padronização de nomes** (Decisão 1) — renomeia no `dev` + `business` + o universal de IDEAS; atualiza toda referência; harness de rede.
2. **Spec do CEREBRO por-nicho** (Decisões 2+3) — gatilhos/higiene/ideias gerados dos `contextFiles` reais; `FIX-` canônico. *(O conserto grande.)*
3. **Spec da convenção de spec** (Decisão 4) — regra obrigatória de nome no Modo Code.
4. **Lote "disciplina de geração"** — a mensagem do ASU (editar→ASU/novo→baixar, linha ASU na instrução curta, lembrar guia), `.gitignore` personalizado, commit separado no copia-e-cola, README proativo, obediência ao nome de log, starter completo. + a **diretriz de recomendação de config** (ver abaixo).
