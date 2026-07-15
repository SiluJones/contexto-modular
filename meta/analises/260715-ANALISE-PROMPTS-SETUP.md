# ANÁLISE — Subsistema de Prompts (A–F universais + G+ por nicho) · i-N42 e além

> **Procedência:** leitura de `PROMPTS_BASE` (prompts A–F em `src/index.template.html`), dos
> `promptsExtra` dos 18 nichos, do texto-guia da view Prompts, e das notas do usuário
> (`260712-1409`, `260712-2353`, e a dúvida sobre "achatado × estruturado" desta sessão).
> **Raia:** Chat (planejamento). Este documento **não é spec** — é o mapa antes do bisturi.
> **Estado:** proposta para validação. Decisões em aberto marcadas **[EM ABERTO]**.

---

## 1. O que existe hoje (o retrato honesto)

O KCM tem **6 prompts universais** (A–F, em `PROMPTS_BASE`) + **5 a 7 prompts específicos** por nicho
(G em diante; o `custom` tem zero). Todos são funções `(p, n) => string` — recebem os campos preenchidos
(`p`) e o nicho normalizado (`n`), e devolvem o texto para copiar.

| | Prompt | Para quê | Estado |
|---|---|---|---|
| **A** | Dia a dia — com Projeto | Uso recorrente; Claude lê os arquivos do Projeto sozinho | ok |
| **B** | Dia a dia — sem Projeto | Igual, anexando os `.md` à mão | ok |
| **C** | **Projeto novo, do zero** | 1ª sessão de um projeto que ainda não existe | **mode-blind + entrega-blind** |
| **D** | **Projeto existente — adicionar o sistema** | Projeto em andamento que ainda não tem os arquivos | **mode-blind + entrega-blind** |
| **E** | Conversa pesada — transferir agora | Gera o HANDOFF-BRIEF; contexto por modo | **mode-aware** (spec0040) |
| **F** | Retomar após transferência | 1ª mensagem na conversa nova | **mode-aware** (spec0040) |

**O que a spec0040 já resolveu:** E e F são cientes de modo — E não manda mais "regenere tudo"; sabe
que no Code o repo é a verdade (append, não reescrita), no ASU as edições saem por `.yaml`, no vanilla
só o que mudou; F estabelece que **os arquivos vencem o brief**.

**O que sobrou (o alvo desta análise):** **C e D são o último subsistema cego** — cegos ao modo E ao
formato de entrega. E os **G+** nunca foram auditados como conjunto.

---

## 2. A distinção que o usuário fixou (e que a conversa anterior errou)

A i-N42, como foi escrita originalmente, dizia que "C e D ignoram o ↓ e o ↻". **Está errado** — e o
usuário corrigiu. C e D **não são** sobre os downloads do KCM. São os prompts que o **projeto receptor**
usa:

- **C = projeto novo, do zero.** Não existe nada ainda; a conversa vai *criar* os arquivos de contexto.
- **D = projeto que já existe** (tem script, planejamento, material) mas **ainda não tem** o sistema KCM;
  a conversa vai *organizar* o que há dentro dos arquivos.

O refino real, com os termos que o usuário fixou:

### Achatado × Estruturado (a definição precisa)
- **Achatado:** o usuário pegou os templates (pelo prompt, ou baixando avulso) e **arrastou os arquivos
  soltos** para o Projeto do Claude. Sem árvore de pastas.
- **Estruturado:** o usuário passou pelo **↓ (download estruturado)** do KCM **ou** pelo **FlatDrop** —
  e o material chegou com **`_MANIFEST.md`** (o mapa caminho-real → nome-plano).

O ponto que a conversa anterior não tinha entendido, e que é central: **hoje não dá para arrastar uma
pasta com hierarquia para dentro dos arquivos do Projeto do Claude** — a estrutura se perde no upload.
Então "estruturado" **não** quer dizer "chegou em árvore no chat"; quer dizer **"veio com o
`_MANIFEST.md`"** — o mapa que diz onde cada arquivo vai e qual é o nome real. O sinal inequívoco é a
**presença do `_MANIFEST.md`**.

> Nota importante: o CEREBRO **já ensina** a detectar o `_MANIFEST.md` (a "detecção automática de
> manifesto", linha ~1159 do template). Ou seja, a inteligência de reconhecer estruturado × achatado
> **já existe no sistema** — só que vive no CEREBRO (lido pela conversa madura), e **não** nos prompts
> C/D (o momento de setup, onde ela é mais necessária). O refino é **levar essa consciência para C/D**,
> não inventá-la do zero.

---

## 3. Os problemas concretos de C e D

### 3.1 Cegueira de modo
C e D mandam "gere os arquivos preenchidos, prontos para subir no repositório" — sem distinguir:
- **Code:** o receptor tem repo e o Claude Code escreve nele. C deveria orientar `git init` / estrutura
  de pastas + primeiro commit; D deveria orientar a *ler o repo existente* e *acrescentar* os `meta/`,
  não gerar tudo no chat.
- **ASU:** edições em arquivos que já existem saem por `.yaml` — relevante para D (projeto existente).
- **vanilla:** o fluxo atual (gerar inteiros no chat) está certo — é o caso-base.

### 3.2 Cegueira de entrega (só relevante para D)
D atende um projeto que **já existe**. Se esse projeto **já é um projeto KCM** que recebeu material
estruturado (tem `_MANIFEST.md`), mandar "gere os arquivos do zero" é **duplicar o que já veio pronto**.
D deveria: se há `_MANIFEST.md`, **ler pelo mapa e complementar**; se não, tratar como material solto.
(C é sempre "do zero" por definição — a cegueira de entrega quase não o afeta; só o modo importa.)

### 3.3 Rótulo ambíguo
Se **uma conversa do próprio KCM** confundiu C com D e com os downloads, um usuário se confunde igual. Os
títulos ("Projeto novo, do zero" / "Projeto existente — adicionar o sistema") são ok, mas o **texto-guia
da view** não diz *quem é quem* nem *quando o material chega estruturado*. Falta uma linha de orientação.

---

## 4. Proposta para C e D (o miolo)

### C — "Projeto novo, do zero" vira mode-aware
Mantém o corpo atual como caso-base (vanilla) e **acrescenta**, por modo:
- **Code:** ao final, além dos arquivos preenchidos, orienta a estrutura de pastas (`meta/`, `logs/`,
  raiz) e o primeiro commit — ou aponta o **download estruturado (↓)** como atalho ("se você quer a
  árvore pronta, use o botão ↓ em vez de eu gerar arquivo por arquivo").
- **ASU:** irrelevante para projeto novo (não há o que editar) — sem ramo.
- **vanilla:** como hoje.

### D — "Projeto existente" vira mode-aware **e** entrega-aware
- **Detecção de `_MANIFEST.md`:** a primeira instrução do prompt passa a ser *"se eu anexei um
  `_MANIFEST.md`, ele é o mapa — leia por ele e NÃO regenere o que já existe; complemente o que falta"*.
- **Code:** *"o repo é a verdade; leia o que já está lá e ACRESCENTE os `meta/` que faltam, não
  reescreva"*.
- **ASU:** *"mudanças em arquivos existentes saem por `.yaml`, não como arquivo inteiro"*.
- **vanilla:** como hoje (gera os que faltam, inteiros).

> Isso **reusa** a inteligência que já vive no CEREBRO (detecção de manifesto) e a leva ao momento de
> setup. Nenhuma lógica nova de detecção — só a orientação no lugar certo.

### Rótulo (view Prompts)
Trocar o texto-guia de A–F por algo que diga, em uma linha, o eixo de cada um dos quatro de setup:
*"**C** cria um projeto do zero. **D** adota o sistema num projeto que já existe (se você já subiu o
material estruturado, com `_MANIFEST.md`, D lê pelo mapa em vez de recriar). **E/F** transferem entre
conversas."*

---

## 5. Auditoria dos prompts universais A–B, E–F (por modo e vanilla)

- **A (com Projeto)** e **B (sem Projeto)**: são o dia a dia. Não precisam de modo — a diferença deles é
  *onde os arquivos moram* (Projeto do Claude × anexo), não *como se escreve neles*. **Sem mudança.**
- **E e F**: já mode-aware (spec0040). Uma **melhoria pequena** possível em F: hoje ele lista o ritual de
  leitura, mas não menciona o **`_MANIFEST.md`** — se a conversa nova recebeu material estruturado, o
  ritual deveria começar por "se há `_MANIFEST.md`, use-o como mapa". É a mesma consciência da §4, aplicada
  na retomada. **[EM ABERTO]** se entra agora ou vira item separado.
- **Vanilla** (nenhum modo ligado): é o caso-base de todos. A auditoria confirma que ele está coberto —
  A/B/C/D/E/F todos têm o ramo vanilla como default. Nada quebrado.

---

## 6. Auditoria dos prompts específicos G+ (os 5–7 por nicho)

Amostragem (dev, narrative, career, game, business) mostra que os G+ são **task-oriented e bem
construídos** — cada um resolve um momento real do domínio (ex.: no career, "minerar projeto em
evidência", "faixa com fonte"; no narrative, os 7 cobrem bíblia/voz/continuidade). **Não são
mode-blind** no sentido perigoso: eles produzem *conteúdo de trabalho* (uma cena, uma análise, um
currículo), não *arquivos de contexto para versionar* — então o modo raramente muda a entrega deles.

**Dois pontos menores** achados na amostragem:
1. **`custom` tem zero G+.** Um nicho "área livre" sem nenhum prompt específico é uma lacuna — pelo
   menos um prompt genérico de "defina o próprio fluxo" ajudaria. **[EM ABERTO]** — pode ser i-N nova.
2. **Consistência de contrato:** alguns G+ usam `fill`/`fillLabel`, outros não; vale um passe rápido
   confirmando que todos os que pedem entrada declaram o campo (senão a caixa não aparece). É verificação
   mecânica — cabe num check de harness, não numa spec de conteúdo.

**Conclusão sobre os G+:** não precisam de reforma agora. O valor está em C/D. Um passe de consistência
(itens 1 e 2) pode virar uma i-N de baixa prioridade.

---

## 7. Fatiamento proposto

- **spec0046 — C e D mode+entrega-aware (o núcleo da i-N42).** Reescreve os corpos de C e D com os ramos
  por modo e a detecção de `_MANIFEST.md`; atualiza o texto-guia da view; adiciona um check de harness
  (G23) que trava: C/D contêm os ramos por modo, D menciona `_MANIFEST.md`, e o texto-guia distingue os
  quatro de setup. Fecha a i-N42.
- **spec0047 (opcional, menor) — polimento dos universais + G+:** a melhoria de F (manifesto na
  retomada), o prompt genérico do `custom`, e o check de consistência de contrato dos G+. Só se valer a
  pena; pode ficar como i-N dormente.

---

## 8. [EM ABERTO]

1. **F ganha a menção ao `_MANIFEST.md`** na spec0046 (junto com C/D) ou fica para depois?
2. **`custom` ganha um G+ genérico** agora ou vira i-N separada?
3. **Consistência de contrato dos G+**: check de harness nesta leva ou depois?
4. **Nomeação:** manter "C/D" ou renomear os quatro de setup para deixar o eixo explícito no próprio
   rótulo (ex.: "C · Criar do zero", "D · Adotar em projeto existente")? O usuário sinalizou que
   nomeação/estrutura pode ser revista.
