# Análise técnica — Modo Code: refino dos artefatos à luz das práticas de 2026 + spec-kit

> Documento de curadoria (raia Chat). Base da spec0026. Estuda o que o Modo Code do KCM gera hoje,
> compara com as práticas atuais de Claude Code (pesquisa jul/2026) e com o GitHub spec-kit (i-N7,
> fase antiga em stand-by), e define o escopo do refino.
> Data: 2026-07-04. Base do kit: v1.52.0 (pós-spec0025).

---

## 1. O que o Modo Code gera hoje (dois blocos no CEREBRO)

Ligando o toggle «Desenvolver no Claude Code?», o CEREBRO ganha:

**Bloco 1 — Seção de raias (FIXA, fica no CEREBRO, correto):** explica as raias chat↔Code, o
método doc-por-spec, nomes de spec/ASU, o ambiente Windows/PowerShell. É regra de comportamento
fixa — pertence ao CEREBRO. Nada a remover aqui.

**Bloco 2 — «Apêndice — arquivos de arranque» (ANTI-PADRÃO, precisa sair):** emite como texto,
dentro do CEREBRO, quatro artefatos de instalação — `CLAUDE.md` raiz, `.claude/settings.json`,
`.claude/commands/apply-spec.md`, `.claude/commands/wrap.md` — com a instrução autodestrutiva
«depois de criar, pode apagar este apêndice». É o MESMO problema que a D-052 corrigiu nas skills:
artefato de instalação inlinado num arquivo de regras fixas, com bloco-para-apagar.

Este é o alvo primário da spec0026 (i-N37): o bloco 2 vira download `.zip`, o CEREBRO fica com
um ponteiro curto, a instrução de apagar some.

---

## 2. O que a pesquisa (jul/2026) revela — os artefatos estão DESATUALIZADOS

A pesquisa das práticas atuais de Claude Code mostrou que os artefatos gerados seguem um formato
que virou legado. Correções necessárias, além de mover o bloco:

### 2.1 Slash commands foram FUNDIDOS em Skills (mudança de 2026)
- O formato recomendado agora é **`.claude/skills/<nome>/SKILL.md`**, não `.claude/commands/*.md`
  (que é **legado** — ainda funciona, mas não é o recomendado). Um arquivo em
  `.claude/skills/apply-spec/SKILL.md` cria o mesmo `/apply-spec` e ainda pode ser auto-invocado.
- Quando skill e command têm o mesmo nome, **a skill tem precedência**.
- **Decisão para o KCM:** migrar `apply-spec` e `wrap` de `.claude/commands/*.md` para
  `.claude/skills/<nome>/SKILL.md` (com frontmatter `name`+`description`). Isso ALINHA os dois
  mundos do kit: as skills de escrita (narrativa) e os comandos de Code passam a usar o MESMO
  formato e o MESMO mecanismo de empacotamento (o `.claude/skills/` + zip que já construímos na
  spec0023). Consistência arquitetural real, não cosmética.
  - Nuance: para comandos com efeito colateral que o usuário quer disparar só de propósito
    (ex.: um `/wrap` que faz append e mostra commit), a doc sugere `disable-model-invocation: true`
    no frontmatter — o comando só roda quando chamado por `/wrap`, não por auto-match. Aplicável
    ao `wrap`; o `apply-spec` também (não quer que ele dispare sozinho ao ver a palavra "spec").

### 2.2 CLAUDE.md: «< 200 linhas» e o teste do «se eu remover, o Claude erra?»
- A pesquisa confirma a regra que o KCM já segue: CLAUDE.md curto, procedural vai para skills.
  O CLAUDE.md gerado pelo kit já é enxuto (ritual + build + convenções). **Nada a corrigir** —
  só vale reforçar no texto do starter a diretriz «< 200 linhas; procedural → skill».
- Detalhe a incorporar: a sintaxe `@arquivo` para importar (em vez de colar) e `!` `comando` `` para
  contexto dinâmico em comandos são padrões atuais úteis — mas são refinamento opcional, não core.

### 2.3 A regra de config da i-N29 está OBSOLETA
- A i-N29 registrou «padrão Sonnet 4.6 esforço BAIXO». A prática atual (e a nossa própria
  calibragem, refinada nesta jornada) é mais rica: **Sonnet para rotina / Opus para complexo**,
  com esforço proporcional à ambiguidade, `/effort low` para o mecânico. O texto do Modo Code que
  ensina config deve refletir a calibragem atual (a que viemos usando: diff validado → Sonnet;
  julgamento sem rede → Opus), não a regra velha.

### 2.4 Oportunidades novas (NÃO fazer agora — registrar)
A pesquisa revelou recursos que não existiam quando o Modo Code foi desenhado. Nenhum entra na
spec0026 (escopo é mover+migrar), mas valem registro para avaliação futura:
- **Hooks** (`.claude/settings.json` → `hooks`): comandos determinísticos em pontos do ciclo.
  Caso de ouro para o KCM: um `PreToolUse`/pre-commit que roda `node validate.js` e BLOQUEIA o
  commit se o harness não estiver verde — transforma a regra «não commitar sem 17/17» de
  instrução (que pode ser ignorada) em guardrail de sistema (que não pode). Forte candidato.
- **Subagents** (`.claude/agents/`): isolam contexto para exploração pesada. Menos crítico para
  o KCM (o projeto é um HTML só), mas útil para os nichos dev/game gerados.
- **`/security-review`, `/review` built-in**: o starter poderia mencioná-los.

---

## 3. i-N7 — o que o spec-kit (SDD) ensina, e o que o KCM JÁ tem

A grande descoberta: **o KCM já reinventou o Spec-Driven Development por conta própria.** O
mapeamento é quase 1:1:

| spec-kit (SDD) | equivalente no KCM | veredito |
|---|---|---|
| `constitution.md` (princípios não-negociáveis) | **CEREBRO.md** (comportamento + 13 princípios) | KCM já tem, e mais rico |
| `/specify` → spec.md (o quê/porquê) | o chat AUTORA a spec em `meta/specs/` | KCM já tem |
| `/plan` → plan.md (blueprint técnico) | embutido na spec (âncoras + tarefas) | KCM funde spec+plan |
| `/tasks` → tasks.md (passos) | as Tarefas A/B/C… da spec | KCM já tem |
| `/implement` | `/apply-spec` | KCM já tem |
| `/analyze` (consistência cross-artefato, read-only, antes de implementar) | **não existe** | **lacuna** |
| `/clarify` (resolve ambiguidade antes do plano) | parcial — o chat pergunta, mas sem gate formal | parcial |
| spec reutilizável (mesmo spec, outro stack) | specs são casadas com o código | N/A p/ dogfooding |

**O que vale a pena importar do spec-kit (sem adotar a ferramenta — o usuário nem quer):**
1. **Um gate de análise antes de aplicar** (`/analyze` do spec-kit): um passo read-only que confere
   a spec contra o estado atual do repo ANTES de o Code aplicar — as âncoras existem? batem
   exatamente? há contradição com uma decisão registrada? Hoje o `apply-spec` já manda «se não
   achar a âncora, PARE e reporte», o que é metade disso. O upgrade seria um `/check-spec` que faz
   a conferência a seco e relata, sem tocar em nada — reduz o risco de aplicação parcial. **Mas**:
   no fluxo do KCM o CHAT já valida a spec no clone antes de entregar (âncoras testadas, harness
   verde), então esse gate é menos crítico aqui que num fluxo vibe. Candidato a refino, não urgente.
2. **A ideia de «checklist como testes unitários do inglês»** (spec-kit `/checklist`): validar que a
   spec está completa/clara antes de aplicar. O KCM já faz isso informalmente (o chat revisa a
   própria spec). Não precisa formalizar agora.

**Veredito i-N7:** o KCM não precisa do spec-kit — já pratica SDD de forma adaptada ao seu dogfooding.
O único empréstimo com valor real é o **gate de conferência read-only** (`/check-spec`), e mesmo esse
é opcional porque o chat já pré-valida. Registro como ideia; **não entra na spec0026.** A fase antiga
(i-N7) pode ser **fechada como «analisada — KCM já implementa SDD; empréstimo pontual registrado»**.

---

## 4. Escopo da spec0026 (o que fazer AGORA)

Mantendo a spec contida e espelhando exatamente a D-052:

**A. Bloco 2 (apêndice de arranque) sai do CEREBRO e vira download.**
- Reusar `buildSkillMd`? Não — os artefatos do Code não são skills. Criar `downloadCodeKitZIP()`
  análogo ao `downloadSkillsZIP()`, montando a estrutura real do repo:
  `claude-code-kit/CLAUDE.md`, `claude-code-kit/.claude/settings.json`,
  `claude-code-kit/.claude/skills/apply-spec/SKILL.md`, `claude-code-kit/.claude/skills/wrap/SKILL.md`,
  e um `README.md` com instalação + cláusula anti-`.gitignore` de `.claude/`.
- Botão «Baixar kit do Claude Code (.zip)» na aba de saída, visível quando o Modo Code está ligado.
- CEREBRO fica com **ponteiro curto**: o que o zip contém + onde instalar + «consulte o CLAUDE.md
  e os comandos do pacote». Sem inline, sem «pode apagar».

**B. Migrar os comandos para o formato atual (Skills).**
- `apply-spec` e `wrap` viram `.claude/skills/<nome>/SKILL.md` com frontmatter
  `name`+`description`+`disable-model-invocation: true` (efeito colateral → só por invocação).
- Mantém `.claude/commands/` como nota de compat? Não — gerar só o formato atual, e o ponteiro
  menciona que `.claude/commands/` legado também funcionaria. Menos arquivos, formato recomendado.

**C. Atualizar o texto de config (i-N29 obsoleta).**
- A parte do bloco 1 (raias) que menciona esforço/modelo passa a refletir a calibragem atual
  (Sonnet p/ diff validado; Opus p/ julgamento; esforço proporcional à ambiguidade).

**D. Harness.** Novo check G7 (espelho do G6): Modo Code ligado → ponteiro no CEREBRO (sem inline,
sem «pode apagar»); `downloadCodeKitZIP`/`buildCodeKitFiles` rende os arquivos certos; toggle
desligado → sem seção.

**Fora do escopo da spec0026 (registrar em IDEAS):**
- **i-N38 (novo):** hook de pre-commit que roda o harness e bloqueia commit sem 17/17 — o starter
  do Code poderia gerar um `.claude/hooks/` opcional. Forte candidato à próxima fase de Code.
- **i-N39 (novo):** `/check-spec` — gate de conferência read-only da spec antes de aplicar
  (empréstimo do `/analyze` do spec-kit). Opcional, porque o chat já pré-valida.
- **i-N7:** fechar como analisada (KCM já pratica SDD).
- Fase futura já registrada: reforma dos 3 toggles universais + feedback ambiental (i-N36).

---

## 5. Ordem
spec0026 faz A+B+C+D numa spec só (todos tocam o mesmo bloco do template — separar criaria deriva
de âncora). Depois dela, o ciclo de refino de modos (skills + code) fica fechado, e as pendências
restantes são a fase de pesquisa dos universais (i-N36) e os candidatos novos (i-N38 hook, i-N39
check-spec) — todos fora de pressa.
