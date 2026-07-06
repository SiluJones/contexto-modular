# Análise técnica — Modo Atualização (pacote `template-update` em um gesto)

> Documento de curadoria (raia Chat). Responde à proposta do usuário (nota `260704-1959.txt`):
> um "modo/botão de atualização" que empacote, achatado e desambiguado, tudo o que o KCM gera
> para um nicho — meta + CEREBRO + instrução + skills + kit-Code — mais um prompt de atualização
> gerado por nicho, para o usuário subir num gesto ao mount de um projeto já existente que usa o KCM.
> Base do kit: v1.53.0 (pós-spec0027). Data: 2026-07-04.
> Fonte de nomes do FlatDrop: contrato do HUB (C1) + GLOSSARY (separador `__`, sufixo `__pasta`).

---

## 0. Resumo executivo

O usuário não está pedindo uma fundação nova. Está pedindo para **consolidar em um gesto** três
exportações que hoje existem dispersas e com regras de nome inconsistentes, e cobrir a lacuna real:
os arquivos que ele ainda renomeia à mão (skills de narrativa e kit-Code) saem hoje em **zips com
estrutura de pastas** onde o `applyAffix()` **não é aplicado** — enquanto os `meta/*.md` já saem
achatados e afixados pelo `downloadZIP`. A dor é essa assimetria, não a ausência de conceito.

O mecanismo `*__template-update` **já existe e já foi usado** (registro no HUB §Caixas, feedback do
ASU de 2026-07-03: uma exportação saiu com o modo errado; pediu-se sinalizar os modos ativos ao
exportar). Portanto o trabalho é: **unificar + corrigir + tornar um clique**, não inventar.

Recomendação: um gesto que gera um zip **achatado** (sem subpastas), com todos os artefatos do nicho
+ modos ligados, nomes **reais desachatados** + afixo `__template-update`, um **`_UPDATE-MANIFEST.md`**
(nome distinto do `_MANIFEST.md` do FlatDrop) e um **"copiar prompt de atualização" gerado por
nicho**.

### Decisões do usuário (2026-07-04) — fixadas
- **Afixo:** `__template-update` (confirmado).
- **CEREBRO e instrução (`INSTRUCOES-DO-PROJETO.md`) entram no pacote**, ambos montados com a **build
  ativa no momento** do export (patches às vezes mexem nas instruções também). Ambos marcados no
  manifesto como **"exige fusão — nunca substituição cega"**: o CEREBRO/instrução do projeto-alvo
  pode já conter comportamento próprio que choca com o que vem no update; a conversa-alvo compara e
  propõe merge, o usuário decide.
- **Entrega:** zip (sem download em massa).
- **UI: ADIADA por decisão do usuário.** A colocação dos botões do atualizador só será definida
  **depois** de implementada a correção dos 3 botões universais de modo (ver §5, rebaixada). Não
  desenhar UI do atualizador nesta rodada.

---

## 1. Diagnóstico — o que já existe (e por que a dor é real)

### 1.1 As três exportações de hoje, e a assimetria que causa o trabalho manual

| Exportação | Função em `index.html` | Estrutura de saída | `applyAffix`? | Nome real desachatado? |
|---|---|---|---|---|
| `downloadZIP` | Templates `meta/*.md` do nicho | achatada (raiz do zip) | **sim** | sim |
| `downloadSkillsZIP` | `skills/<nome>/SKILL.md` × N + README | **subpastas** (`skills/<nome>/`) | **não** | não |
| `downloadCodeKitZIP` | `claude-code-kit/…/.claude/…` | **subpastas** | **não** | não |

O `downloadZIP` já faz o que o usuário quer (achata, afixa, nomeia certo). As outras duas replicam a
**estrutura real de instalação** — ótimo para *instalar do zero*, péssimo para *subir ao mount de
atualização*, onde o Projeto do Claude achata tudo e subpastas viram nomes colididos
(quatro `SKILL.md` idênticos). É exatamente por isso que o usuário "renomeia à mão só os de skill e
do modo Code": são os únicos que saem sem o tratamento de nome plano.

**CEREBRO e instrução também compõem o pacote** (decisão do usuário), gerados com a build ativa no
momento do export — porque um patch de atualização pode alterar comportamento tanto do CEREBRO
quanto das `INSTRUCOES-DO-PROJETO.md`. Ambos entram como arquivo inteiro afixado, mas o manifesto os
sinaliza como "exige fusão" (§4.5), já que carregam comportamento que o projeto-alvo pode ter
evoluído por conta própria.

### 1.2 O afixo `__update` já é convenção registrada, mas não automatizada num pacote único

GLOSSARY: *"Afixo / sufixo `__update`: convenção de download do kit para atualizar um projeto sem
perda — baixa o template com sufixo, o assistente do projeto compara e adapta preservando o conteúdo
do projeto."* Existe o **conceito** e existe o **motor** (`applyAffix`, `AFFIX.suffixOn`), mas o
usuário precisa: ligar o sufixo à mão, baixar 1–3 zips distintos, extrair, reachatar os de skill/Code
à mão. O pacote único elimina esses passos.

### 1.3 O feedback de campo do ASU (HUB) já aponta dois requisitos

Do HUB (registro de 2026-07-03):
1. **A combinação de modos ligados muda o resultado do `*__template-update`** — uma exportação saiu
   com o modo errado. → O pacote precisa **declarar quais modos estavam ligados** (no manifesto e no
   nome), e a UI deve deixar isso visível no momento do clique.
2. **A seção de HUB vem no molde "grupo de conteúdo"** — não cabe em toolchain/infra. → Fora do
   escopo deste modo, mas confirma que "template-update" já é um artefato reconhecido do KCM.

---

## 2. O problema de fundo que o afixo não resolve — e a peça que faltava

O usuário observou: mesmo dizendo claramente "é template-update", a conversa-alvo estranhava
("cadê o conteúdo?"). **A raiz não é o nome — é a ausência de sinal semântico.** A conversa-alvo lê
*conteúdo*, e um template é vazio de propósito; o nome do arquivo não é lido como instrução.

A cura tem duas metades que precisam casar:

1. **Um gatilho no CEREBRO gerado** (novo bloco no `UPDATE_PROTOCOL`), presente em todo nicho, que
   ensine: *"Ao receber arquivos marcados como template-update do KCM (ver `_UPDATE-MANIFEST.md`):
   são estruturas genéricas, propositalmente sem o conteúdo específico desta obra — não estranhe a
   falta. Compare cada um com o arquivo vivo equivalente. Novidade útil → proponha ao usuário.
   Choque com o que já existe → apresente lado a lado, o usuário decide. Faltou algo que o projeto
   tem e o template não → aponte. Nunca sobrescreva conteúdo vivo por template vazio."*
2. **Um "prompt de atualização" gerado por nicho** (botão *copiar*), que é o disparo humano dessa
   rotina — reflete os arquivos que entraram no pacote e casa 1-a-1 com o gatilho acima.

Sobre a "primeira fricção" que o usuário mencionou: projetos antigos ainda não têm o gatilho no
CEREBRO. Tudo bem — o **prompt** carrega a rotina inteira embutida (auto-suficiente), então a
primeira atualização funciona mesmo sem o gatilho; o gatilho só torna as próximas mais lisas. Isto
respeita a orientação do usuário ("pode ter essa primeira fricção, as próximas serão lisas").

---

## 3. Fronteira com a regra dura de ENTREGA (checagem obrigatória — P13/refutar)

As Instruções são explícitas: *"Nunca 'arquivo de instruções de atualização' para o usuário aplicar
à mão. Delta só existe como spec-para-Code ou instrução-para-ASU — destinatário é um agente, nunca o
humano."* Isto **poderia** parecer colidir com o modo. Não colide, por dois motivos:

1. **O pacote entrega arquivos INTEIROS**, não deltas. Cada template/skill/arquivo-Code é o arquivo
   completo, pronto para substituir — exatamente o que a regra manda. Não há bloco para costurar.
2. **O "prompt de atualização" não é um patch para o humano aplicar.** É orientação endereçada a
   *outra IA* (a conversa-alvo), que fará a comparação e proporá as mudanças. O humano só copia e
   cola o disparo. A regra proíbe delegar ao humano o trabalho de *aplicar edição cirúrgica*; aqui o
   humano não aplica nada — ele repassa arquivos inteiros + um disparo. Fronteira respeitada.

**Ponto a cravar na spec:** o prompt de atualização deve ser redigido como disparo/orientação
("compare, proponha, o usuário decide"), **nunca** como lista de edições a colar. Se algum dia
alguém tentar fazer o prompt conter os diffs, aí sim feriria a regra.

---

## 4. O esquema de nomes (com o contrato do FlatDrop, sem colidir)

Restrição herdada: o FlatDrop usa separador `__` e sufixo `__pasta` em colisão. Se o pacote de
update também usar `__` cru, os dois esquemas se confundem no mount. Decisões:

### 4.1 Manifesto com nome próprio
`_UPDATE-MANIFEST.md` (não `_MANIFEST.md`). Assim a conversa-alvo distingue "isto é um upload de
atualização do KCM" de "isto é o repo achatado pelo FlatDrop". Cabeçalho do manifesto declara:
nicho, versão do kit, **modos ligados** (skills sim/não, Code sim/não), data, e a tabela
`nome-plano → caminho-real-de-destino`.

### 4.2 Afixo de desambiguação
Sufixo fixo **`__template-update`** (já é a convenção do GLOSSARY, e é auto-descritivo — resolve o
sinal semântico já no nome). Combina com o motor `applyAffix` existente.

- `meta/IDEAS.md` → `IDEAS__template-update.md`
- `meta/CEREBRO.md` → `CEREBRO__template-update.md`
- instrução → `INSTRUCOES__template-update.md`

### 4.3 Colisão dos SKILL.md (o caso crítico)
Quatro skills, todas `SKILL.md`. Achatar sem cuidado colide. Regra: **o nome plano carrega o nome da
skill**, e o caminho real fica no manifesto.

- `skills/escrita-serial/SKILL.md` → `escrita-serial.SKILL__template-update.md`
- `skills/checagem-continuidade/SKILL.md` → `checagem-continuidade.SKILL__template-update.md`

(Usa-se `.` como junção nome-da-skill↔`SKILL`, e `__` só para o afixo final — evita ambiguidade com
o `__pasta` do FlatDrop, que junta *pasta*, não *arquivo.tipo*.) Idem para os arquivos do kit-Code:

- `.claude/skills/apply-spec/SKILL.md` → `apply-spec.SKILL__template-update.md`
- `.claude/settings.json` → `claude-settings.json__template-update` (ou `.json` preservado no fim)
- `CLAUDE.md` (raiz do Code) → `CLAUDE__template-update.md`

O manifesto é a fonte de verdade do destino; o nome plano só precisa ser único e legível. **A spec
deve validar que não há dois nomes planos iguais** (harness pode checar isso).

### 4.4 Extensão preservada
`applyAffix` já insere o afixo antes da extensão (`base__suf.ext`). Para `.json`/`.md` isso se
mantém; a spec só precisa garantir que o ponto de junção nome↔SKILL não seja confundido com a
extensão (tratar `SKILL.md` como unidade).

### 4.5 Marca de "exige fusão" no manifesto (CEREBRO + instrução)
O `_UPDATE-MANIFEST.md` classifica cada entrada em uma de duas naturezas:
- **`template`** — estrutura genérica, vazia do específico da obra (a maioria dos `meta/*.md`,
  skills). Comparar e adotar novidade é seguro.
- **`fusao`** — carrega comportamento que o projeto-alvo pode ter evoluído: **CEREBRO** e
  **INSTRUCOES-DO-PROJETO**. A conversa-alvo **nunca substitui cega**; compara com o arquivo vivo,
  apresenta choques lado a lado, o usuário decide o merge.

O prompt de atualização (§6) e o gatilho no CEREBRO (§2) leem essa classificação: para itens `fusao`,
a rotina é explicitamente "propor merge, nunca sobrescrever".

---

## 5. Desenho da UI — ADIADO por decisão do usuário

**Bloqueado de propósito.** O usuário decidiu (2026-07-04): a colocação dos botões do atualizador só
será definida **depois** de implementada a correção dos 3 botões universais de modo (skills/Code/…),
porque a decisão de *onde* pôr as opções do atualizador depende de como esses três ficarão. Portanto
esta rodada **não** desenha a UI do atualizador.

Requisitos que a UI (quando vier) terá de honrar, já herdados do campo:
- Empacota tudo + prompt num gesto; natureza diferente da fileira de download atual.
- **Linha de status declarando os modos ligados no momento do export** — atende o feedback do ASU
  (uma exportação `*__template-update` já saiu com o modo errado por não haver esse sinal).
- Entrega em zip (sem download em massa).

Enquanto a UI está adiada, as Fases A/B/C (motor, prompt, gatilho) **não dependem dela** e podem
avançar — a UI só pluga os gatilhos prontos no fim.

---

## 6. O prompt de atualização (gerado por nicho) — esboço do conteúdo

Gerado dinamicamente, refletindo os arquivos que entraram no pacote. Estrutura:

1. **Cabeçalho de contexto:** "Subi um *template-update* do KCM (nicho {label}, kit v{X}). Veja o
   `_UPDATE-MANIFEST.md` no mount para o mapa nome-plano → destino."
2. **A rotina (auto-suficiente, para funcionar mesmo sem o gatilho no CEREBRO antigo):**
   "Estes arquivos são genéricos/estruturais — vazios do específico desta obra, de propósito. Para
   cada um, compare com o arquivo vivo equivalente do projeto. Reporte-me: (a) novidade útil que eu
   não tenho, (b) choque com conteúdo meu — apresente lado a lado, eu decido, (c) algo que meu
   projeto tem e o template não cobre. **Não sobrescreva nada vivo sozinho.**"
3. **A lista concreta** dos arquivos do pacote (nome real → papel), extraída do manifesto.

O gatilho equivalente no CEREBRO (via `UPDATE_PROTOCOL`) é a versão condensada da rotina (2), para
que projetos que recebam o kit novo já nasçam sabendo — e o prompt possa encurtar com o tempo.

---

## 7. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Nome plano do update colide com esquema `__` do FlatDrop | Manifesto com nome próprio + junção `.SKILL` distinta de `__pasta`; harness valida unicidade |
| Export sai com o modo errado (já aconteceu — HUB) | Linha de status na UI declara modos ligados; manifesto os grava; possível travar export se nenhum artefato-alvo estiver ativo |
| Prompt vira "patch para o humano colar" (fere regra dura) | Spec obriga redação como disparo/orientação para IA; nunca diffs |
| Inchar o CEREBRO com o novo gatilho | Gatilho é curto (regra fixa, ~6-10 linhas no `UPDATE_PROTOCOL`); segue o princípio "CEREBRO só com regra, artefato sai como arquivo" (D-052) |
| Quebrar as 3 exportações atuais ao refatorar | Reusar `applyAffix`/JSZip existentes; não tocar `downloadZIP/Skills/CodeKit`; o novo é aditivo. Harness 17/17 é a rede |
| Dois canais para o mesmo doc | O pacote de update é canal ISOLADO (só para subir a projeto externo); não colide com a entrega normal de docs desta sessão |

---

## 8. Encaminhamento proposto (fases → specs para o Code)

O trabalho parte para o Code como specs curtas; o chat autora o texto (prompt, gatilho, manifesto).
Sequência sugerida, cada uma com harness verde antes da próxima:

- **Fase A — motor de empacotamento achatado.** `buildUpdatePack()` que coleta {templates do nicho,
  CEREBRO, instrução, skills se ligado, kit-Code se ligado}, aplica o esquema de nomes da §4, monta
  `_UPDATE-MANIFEST.md`, gera o zip. Novo check no harness: unicidade de nomes planos + presença do
  manifesto + skills/Code entram só se o modo estiver ligado.
- **Fase B — prompt de atualização gerado + botão copiar.** `buildUpdatePrompt(niche, modos)` §6.
  **A parte de UI (botão/linha de status) fica adiada** (§5); esta fase entrega a *função geradora*
  do prompt, testável sem UI.
- **Fase C — gatilho no CEREBRO (`UPDATE_PROTOCOL`).** Bloco curto §2/§4.5/§6 em todo nicho, ciente
  da classificação `template`/`fusao`; harness confirma presença e que não estoura o teto (6900).

Nada toca `index.html` à mão: edições em `src/` + `node build.js` + `node validate.js`.

**Pré-requisito de sequência:** o usuário pediu que a **correção dos 3 botões universais de modo**
venha **antes** de qualquer UI do atualizador. As Fases A–C do atualizador (motor/prompt/gatilho) não
dependem dessa correção e podem correr em paralelo; só a UI do atualizador espera.

---

## 9. Decisões fixadas (2026-07-04)

1. **Afixo:** `__template-update` (confirmado — convenção já no GLOSSARY).
2. **CEREBRO + instrução no pacote:** sim, montados com a build ativa do momento, classificados como
   `fusao` no manifesto (merge proposto, nunca substituição cega).
3. **Entrega:** zip apenas (sem download em massa).
4. **UI do atualizador:** adiada até a correção dos 3 botões universais de modo.
