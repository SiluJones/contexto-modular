# ANÁLISE — Enxugamento das Instruções do Projeto

> **Destino:** `meta/analises/260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md`
> **Raia:** Chat (análise; **não** é WO). **Base:** v1.77.0 (pós-wo0054), 18/18 · 60/60 · 0 erros.
> **Método:** medição empírica nos 18 nichos, no `index.html` construído do mount — nenhum número aqui é
> estimado de cabeça.

---

## 1. Por que agora (deixou de ser melhoria e virou bloqueio)

Ao desenhar a wo0054, tentei adicionar **um** arquivo opcional ao nicho `game`: **6976 > 6900 — estourou**.
O `game` está a **21 chars** do teto. Consequência prática: **nenhuma frente nova que precise de arquivo,
comportamento ou gatilho cabe no `game`** — e `narrative` (6783), `career` (6260) e `rpg` (6113) estão logo
atrás. O teto deixou de ser um limite confortável e virou uma parede.

---

## 2. Anatomia real das Instruções (nicho `game`, 6879 chars)

| Seção | Chars | % | Natureza |
|---|---|---|---|
| `## Como trabalhar comigo` | 2047 | **29,8%** | universais comprimidos (468) + **9 comportamentos do nicho em texto integral (~1550)** |
| `## Arquivos de contexto` | 1551 | **22,5%** | nome + **papel descritivo de cada arquivo** |
| `## Ritual de início de sessão` | 1227 | 17,8% | ordem de leitura, gatilhos, disciplina |
| `## Convenções` | 934 | 13,6% | nomenclatura, estilo, formato |
| `## Ao final de cada sessão…` | 868 | 12,6% | entrega, validação, commit |
| `# Projeto: [NOME]` | 217 | 3,2% | **identidade** |
| `## Idioma` | 29 | 0,4% | — |

**O achado central — uma assimetria não intencional:** os **13 princípios universais** já vêm **comprimidos
em rótulos** (468 chars para 13 = ~36 cada, com a definição completa no CEREBRO). Já os **comportamentos do
nicho** vêm em **texto integral** (~170 chars cada, e até 500+ na narrativa) — **e repetidos por inteiro no
CEREBRO**. Ou seja: a informação mais universal é a mais enxuta, e a mais específica é a mais gorda. Não foi
decisão de projeto; foi acúmulo.

---

## 3. Proposta em camadas (o que fica, o que comprime, o que migra)

Sua formulação estava certa: **identidade + ritual + gatilhos ficam; personalização migra.** Traduzido em
camadas operacionais:

- **C1 — FICA INTEGRAL (não tocar):** identidade (`# Projeto`, o que é), **ritual de início**, **gatilhos** e
  as regras de disciplina de entrega. É o que precisa ser lido *todo turno* — é a razão de existir do arquivo.
- **C2 — COMPRIME (rótulo + 1 frase, definição completa no CEREBRO):** os **comportamentos do nicho**. Aplica
  aos comportamentos o mesmo tratamento que os universais **já recebem**. Economia média medida: **~1400
  chars/nicho**.
- **C3 — COMPRIME (papel curto):** os **papéis dos arquivos de contexto** — hoje descritivos, cabem em ~45
  chars ("o que é" em vez de "o que é + quando usar + como manter"; o resto já está no CEREBRO e no próprio
  cabeçalho de cada template). Economia medida: **~500 chars/nicho**.
- **C4 — MIGRA (sua ideia):** as **personalizações genéricas** (chips selecionados no builder) deixam de
  morar nas Instruções depois da primeira aplicação: servem para **preencher os `meta/`** e, no refino, a
  própria conversa **sugere removê-las** das Instruções. Isto **já tem gancho pronto**: o bloco «Refino das
  Instruções do Projeto» (G19) — bastaria acrescentar essa regra lá.

### Números do cenário C2+C3 (medidos nos 18 nichos)

| nicho | hoje | depois | economia | folga depois |
|---|---|---|---|---|
| game | 6879 | **4104** | 2775 | 2796 |
| career | 6260 | 4241 | 2019 | 2659 |
| rpg | 6113 | 3865 | 2248 | 3035 |
| dev | 6011 | 4977 | 1034 | 1923 |
| design | 5992 | 4375 | 1617 | 2525 |

**Maior nicho depois: 4977** (dev) → **folga mínima de 1923 chars** em todo o catálogo (hoje: 21).
**Economia média: ~1890 chars por nicho.**

---

## 4. Riscos — onde a compressão NÃO é segura (a parte que exige cuidado)

**Nem toda definição é elaboração; algumas carregam regra distinta.** A medição expôs isto de forma crua:

- **`narrative` cairia de 6783 → 1708.** Parece ótimo, mas é o **sinal de alerta**: as definições dela contêm
  **estrutura**, não floreio — os dois **modos de colaboração** (rascunho dirigível × direção criativa), o
  naming em ambos os modos, a lista negativa. Cortar para «primeira frase» **perderia regra de verdade**.
- **Regra de segurança proposta:** a compressão é **por comportamento, com curadoria**, não automática. Cada
  definição precisa ser reescrita à mão numa frase que **preserve a regra** (não «a primeira frase do texto
  atual»). Onde a regra não couber numa frase, ela **fica integral** — a exceção é legítima.
- **Guarda de harness:** um check novo garantindo que (a) todo comportamento comprimido tenha sua definição
  completa presente no CEREBRO, e (b) nenhum nicho perca um comportamento no caminho (contagem antes/depois).

---

## 5. Alavanca secundária: markdown (medido)

A sintaxe markdown custa **~6–7% dos tokens** das Instruções (medido em dev e game). A maior fatia é o
**negrito `**`** (~46–50 marcadores). **Recomendação:** manter `#`, `-` e `` ` `` (estrutura ajuda o modelo a
localizar regra), e **podar o negrito** para onde marca inegociável. Cortar o cabeçalho auto-referencial
(«> Estas instruções são lidas em toda mensagem…») também é ganho limpo: explica o documento para quem já o
está lendo. É ganho pequeno perto de C2/C3 — faça junto, não isolado.

---

## 6. Recomendação e sequenciamento

O trabalho é **grande e arriscado se feito de uma vez** (mexe no arquivo mais lido de todos os 18 nichos).
Proposta em três WOs:

1. **WO-A — o motor:** o gerador passa a emitir comportamento como **rótulo + frase curta** nas Instruções e
   **definição completa** no CEREBRO, com o check-guarda. **Sem reescrever texto ainda** — só a mecânica,
   validando que nada some. *(Reversível e verificável.)*
2. **WO-B — a curadoria:** reescrever à mão as frases curtas dos **18 nichos**, comportamento por
   comportamento, respeitando as exceções (narrativa). É a parte que exige julgamento; pode ir por levas
   (nichos mais apertados primeiro: game, narrative, career, rpg).
3. **WO-C — papéis de arquivo + migração (C3+C4) + poda de markdown:** encurtar papéis, acrescentar ao G19 a
   regra de migrar personalização para os `meta/`, podar negrito e o cabeçalho auto-referencial.

**Ponto de decisão para você:** (a) topa a sequência A→B→C? (b) na WO-B, quer que eu comece pelos 4 nichos
apertados ou pelos 18 de uma vez? (c) confirma a **regra de exceção** — comportamento cuja regra não caiba em
uma frase **permanece integral** (eu recomendo sim; sem isso a narrativa se perde).

Não abro WO sem esse aval.
