# Spec — ROADMAP v1.34.0 (modular concluído, i18n em avaliação, fase «Modo Code») + formalizar o método "doc por spec"

> Tarefa para o **Claude Code** (CLI ou desktop). Rode no repo `contexto-modular`.
> **Esta spec é só de DOCUMENTAÇÃO** — NÃO toca o `index.html`. **Não precisa** de `node build.js`
> nem de `node validate.js`. A rede de segurança aqui é o **`git diff`**: revise antes de commitar.
> Prompt de arranque no Code: **"leia `meta/specs/2026-06-21_roadmap-v1340-e-metodo-doc-spec.md` e execute"**.

## Contexto (por quê)
A v1.34.0 entrou (modular D-028, rename do cérebro D-029, seção «Feedback para o ASU» no IDEAS gerado),
mas o **ROADMAP ainda está em v1.33.0**: marca o refator modular como "em avaliação" (já está **feito**) e
não tem a próxima entrega («Modo Code»). Este é também o **primeiro uso do método "doc por spec"**: o chat
entrega o **texto exato** de um delta de curadoria e o Code **posiciona** no repo (em vez de o chat regerar o
arquivo inteiro). Ver a decisão **D-030** na Tarefa C.

> **Conservador:** se quiser só testar o método, rode **apenas a Tarefa A**. B e C podem vir depois.

---

## Tarefa A — atualizar o `meta/ROADMAP.md` (3 edições cirúrgicas)

As âncoras são **semânticas** (título/linha de referência), não números de linha. Aplique **texto exato**.

### A.1 — inserir a nota de revisão v1.34.0 (nova entrada no topo das notas)
**Âncora:** a lista de notas em blockquote logo após o cabeçalho. Insira o bloco abaixo **imediatamente
ANTES** da linha que começa com `> **Mudanças nesta revisão (v1.33.0):**` (notas mais novas no topo).

Inserir:
```
> **Mudanças nesta revisão (v1.34.0):** refator **modular concluído** (D-028) — o `index.html` passou a ser gerado de `src/index.template.html` (casco) + 17 módulos `src/niches/*.js` via `build.js`; produto segue **1 arquivo único** (D-001 preservado). Cérebro renomeado `CLAUDE.md`→`CEREBRO.md` (D-029), liberando `CLAUDE.md` para o arquivo-raiz do Claude Code; seção «Feedback para o ASU» no IDEAS gerado. **Fase 4 reescrita:** a pergunta "modular vs. arquivo único" está **resolvida** (modular venceu); o que segue em avaliação é só o **i18n / idioma misto** (i-N26). A menção a "Fase 6 (i18n)" da v1.33.0 fica **consolidada na Fase 4** — nunca chegou a virar bloco próprio (P12: nada perdido, só realocado). **Nova entrega aberta:** «Modo Code». **Método novo:** atualização de doc por **spec para o Claude Code** (D-030) — ver `CEREBRO.md` §«🤝 Fluxo Chat ↔ Claude Code».
```

### A.2 — reescrever o bloco da Fase 4
**Âncora:** o bloco que começa na linha `## ⏸ Fase 4 — Arquitetura (EM AVALIAÇÃO — não mexer sem decisão)`
e vai até a linha que termina `...Até lá, fica em avaliação.` (4 bullets). **Substitua o bloco inteiro** por:

```
## ✅/⏸ Fase 4 — Arquitetura (modular CONCLUÍDO; i18n em avaliação)
**✅ Resolvido (v1.34.0 — D-028):** o refator **modular** foi feito. O `index.html` é gerado de `src/index.template.html` + 17 módulos `src/niches/*.js` via `build.js`; saída **byte-idêntica** à v1.33.0 com tudo desligado; o `build.js` é ferramenta **do dev** — o produto segue **1 arquivo único, sem build no lado do usuário** (D-001 preservado). A tensão `file://`/`fetch()` foi resolvida por **concatenação no build** (sem framework, sem toolchain no produto) — exatamente o "caminho de menor arrependimento" que o ROADMAP previa.
**⏸ Em avaliação — i18n / idioma misto (i-N26):** com o modular no lugar, abre-se a troca de idioma da UI e dos templates de forma auditável (UI/conversa no idioma do usuário; artefatos/código/meta em inglês). **Direção aceita; sem código até o "vai" explícito.** Risco: a migração de strings quebrar a geração → mitigação: harness 17/17 como rede, migrar por etapas validando a cada passo. (Absorve a "Fase 6 (i18n)" citada na nota da v1.33.0, que nunca virou bloco.)
```

### A.3 — inserir a fase «Modo Code» (nova entrega, antes da Fase 5)
**Âncora:** insira o bloco abaixo **imediatamente ANTES** da linha
`## 🌱 Fase 5 — Novas capacidades (IDEAS a maturar)`.

Inserir:
```
## ▶ Próxima entrega — Modo Code (switch do kit de arranque do Claude Code)
Switch no kit que gera o **kit de arranque** para desenvolver um projeto **no Claude Code** (desktop e CLI): um `CLAUDE.md` **raiz** starter (comandos de build, convenções, aponta pro `meta/`), `.claude/settings.json` + comandos `/`, o **protocolo de raias** (chat reescreve/entrega inteiro e por spec; Code implementa e dá append), e os macetes de ambiente (abrir pelo PowerShell; commit sem acento). É o que praticamos aqui (dogfooding) virando feature do produto.
- **Decisões de arranque já tomadas** (handoff 2026-06-21): `.claude/commands/` no v1 = **sim**; build no `CLAUDE.md` raiz = **placeholder** (mais simples por ora); interação com os outros switches (HUB/grupo, ASU) = **independente por ora** (não são exclusivos; um talvez não precise do outro — refinar depois).
- **Backlog imediato:** (1) **spec do Modo Code** com as escolhas acima (o chat escreve); (2) **ASU quick wins** b/c — lembrete na UI quando o switch ASU é ligado (subir o `INSTRUCTION_GUIDE.md`); ancorar a diretriz e o HUB no `format_version` em vez da versão da ferramenta.
```

---

## Tarefa B — (raia do Code, append-only) registrar em STATUS e DECISIONS

### B.1 — `meta/STATUS.md`
- Acrescente, no bloco **«Última sessão»** mais recente, uma linha:
  `- **ROADMAP atualizado para v1.34.0** (modular concluído, i18n em avaliação, fase «Modo Code» aberta) — primeira atualização feita pelo método "doc por spec" (D-030).`
- Em **«PRÓXIMOS»**, garanta que o item do **Modo Code** continua listado (já está). Nada a remover.

### B.2 — `meta/DECISIONS.md` (acrescentar **D-030** — confirme antes que é o próximo número livre; P8)
Acrescente, **na sequência existente** (logo após D-029), preservando o formato do arquivo:

```
## D-030 — Atualização de doc por spec para o Claude Code (curadoria-delta)

**Decisão.** Além do fluxo "o chat entrega o arquivo INTEIRO" (que **continua valendo** para reescritas de fundo/voz/reestruturação), o chat pode entregar uma **spec curta** em `meta/specs/` que descreve uma **edição cirúrgica** de um doc de curadoria (ROADMAP/CONTEXT/IDEAS/CHANGELOG): com o **texto exato a inserir/alterar** e **âncoras semânticas** (seção/título, nunca número de linha). O Code aplica no repo.

**Por quê.** (1) **Token/truncamento:** uma spec é muito menor que regerar um arquivo grande, e elimina o risco de a regeneração truncar no meio — risco real (em jun/26 surgiram duas cópias paralelas do CONTEXT por causa disso). (2) **Auditável:** o `git diff` mostra exatamente o que mudou — mais seguro para a higiene P12 do que confiar que uma regeneração completa não deixou cair nada. (3) **Diferença do ASU:** o ASU aplica patch YAML **mecânico**; o Claude Code **entende o sistema** e localiza a âncora por **significado**, com mais cuidado e validando.

**Não fere a regra dura "Atualizar um doc = arquivo COMPLETO… nunca um arquivo de instruções de atualização".** Aquela regra é **anti-erro-humano** — ela proíbe empurrar trechos/instruções para o **usuário** aplicar à mão. A spec-para-Code tem **outro destinatário**: um agente cuidadoso + `git diff` como rede. São canais distintos; a regra dura segue intacta para entregas ao usuário.

**Guarda-corpos.** (1) A spec é escrita sobre a **versão VIVA do repo** (mount `/mnt/project`), **nunca** de fragmento RAG. (2) O **chat autora a prosa**; o Code só **posiciona** — não inventa texto de curadoria. (3) **Um canal por doc por ciclo:** se um doc vai por spec, o chat **não** entrega o mesmo doc inteiro no mesmo ciclo (evita dois escritores → conflito). (4) **Reescrita de fundo/voz continua indo como arquivo inteiro** entregue pelo chat. (5) Vale o handoff: após a sessão do Code, o usuário sobe o repo para o chat voltar à verdade.

**Escopo.** Complementa o «🤝 Fluxo Chat ↔ Claude Code» e estende o uso de `meta/specs/` (antes só tarefas de código + append) às curadorias-delta. Supersede: nada.
```

### B.3 — uma linha de fechamento no STATUS
`- Arquivos tocados nesta sessão (Code): meta/ROADMAP.md, meta/DECISIONS.md, meta/STATUS.md, meta/CEREBRO.md.`

---

## Tarefa C — documentar a regra no `meta/CEREBRO.md` (curadoria; texto exato fornecido)

**Âncora:** dentro da seção `## 🤝 Fluxo Chat ↔ Claude Code`, o bullet que começa com
`- **Specs (sem prompt gigante):**`. **Insira o bullet abaixo imediatamente DEPOIS dele**
(o chat autorou o texto; você só posiciona):

```
- **Curadoria-delta por spec (D-030):** quando a mudança num doc de curadoria (ROADMAP/CONTEXT/IDEAS/CHANGELOG) for um **delta estruturado** (marcar fase, abrir fase, inserir nota de revisão, acrescentar item) — e **não** uma reescrita de fundo/voz — o chat pode entregar o **texto exato** numa spec de `meta/specs/`, com **âncora semântica** (seção/título, nunca número de linha), e o Code aplica no repo. O chat **autora a prosa**; o Code só **posiciona**. Continua valendo: reescrita de fundo vai como **arquivo inteiro** (regra dura «Como ENTREGAR as atualizações»), e **um canal por doc por ciclo** (se foi por spec, o chat não entrega o mesmo doc inteiro no mesmo ciclo). Por que não fere a regra "arquivo COMPLETO": aquela é anti-erro-**humano** (o usuário colando à mão); aqui quem aplica é um agente cuidadoso e o `git diff` é a rede.
```

Atualize também a nota do topo do CEREBRO se houver um marcador de revisão — **opcional**; se a estrutura
do arquivo não pedir, deixe como está (não force).

---

## Validar (leve — é doc, não código)
- **Não** rode `build.js`/`validate.js` (nada toca o `index.html`).
- Confira o **`git diff`**: as 3 edições do ROADMAP entraram no lugar certo; D-030 está na sequência;
  o bullet novo está dentro de §«Fluxo Chat ↔ Claude Code».
- Garanta que **nada foi removido** dos docs além do bloco da Fase 4 que foi **substituído** (P12).

## Commit (Code roda; Git Bash interno aceita `/`; mensagem **sem acento**)
```
git add meta/ROADMAP.md meta/DECISIONS.md meta/STATUS.md meta/CEREBRO.md
git commit -m "docs: ROADMAP v1.34.0 (modular concluido, i18n em avaliacao, fase Modo Code) + metodo doc-spec D-030" -m "Primeira atualizacao por spec; D-030 formaliza curadoria-delta por spec para o Code; regra no CEREBRO; doc-only, sem build"
git push
```

## Próximas specs (NÃO fazer agora — o chat escreve depois)
- **Spec do «Modo Code»** com as escolhas de arranque (commands v1, build placeholder, switches independentes).
- **ASU quick wins** (b) lembrete na UI ao ligar o switch ASU; (c) ancorar diretriz/HUB no `format_version`.
