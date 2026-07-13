# Spec — Prompts de transferência mode-aware + HANDOFF-BRIEF (conserta o anti-padrão de regenerar meta no chat)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS**.
> **Harness: +1 check (G14).** Passa de **40/40 → 41/41**. O Code confirma pós-build.
> Aplicar com: **`/apply-spec 260712-spec0040-prompts-transferencia.md`**
> Config: **Sonnet + esforco Alto** (reescreve 2 corpos de prompt + expõe `PROMPTS_BASE` no SHIM + check novo).
> **Diff conferido no chat contra o template vivo v1.65.0** (pós spec0039, commit 02bec15). Build/harness ficam com o Code.
> Base: **`meta/ANALISE-PROMPTS-E-TRANSFERENCIA.md`** (escrita nesta sessão). Independente das anteriores.

## Contexto (o bug)
Os prompts A–F são o **último subsistema mode-blind** do KCM. O prompt **E ("Conversa pesada — transferir
agora")** manda *"gere **todos** os arquivos de contexto... o conteúdo **ATUAL e COMPLETO** de cada arquivo"* —
ou seja, **regenerar os meta grandes no momento mais pesado da conversa**. Isso:
- **já causou perda documentada** (no satelite-web, uma regeneração do `IDEAS.md` comeu 33 bullets — virou
  regra lá: *"nunca regenerar meta grande no chat; no chat só se geram arquivos NOVOS"*);
- é **destrutivo no modo Code** (o repo é a verdade e o Code faz **append**; o chat regenerando = **dois
  escritores**, contra a regra do próprio KCM «reescrita conflita, append não»);
- **contradiz o CEREBRO no modo ASU** (lá, edições saem como `.yaml`, não como arquivo inteiro).

Conserto: **E** e **F** viram **mode-aware**, e a transferência passa a produzir o artefato que de fato funciona
— o **HANDOFF-BRIEF** (arquivo **novo**, seguro de gerar no chat), com a memória permanecendo nos arquivos/repo.

**Chave de implementação:** os corpos de `PROMPTS_BASE` são funções `(p,n)=>string` avaliadas no mesmo escopo de
`groupModeOn()/asuModeOn()/codeModeOn()` (declarações de função, içadas) — basta chamá-las dentro do corpo.
Nenhuma mudança de arquitetura. Os `promptsExtra` dos nichos **não são tocados**.

**NAO fazer:** não criar "modo transferência" nem 4º selo; não versionar o brief em `meta/` por padrão (é
efêmero); não mexer nos prompts A/B/C/D (C/D são a **spec seguinte**, i-N42); não tocar `promptsExtra`.

---

## Tarefa A — `src/index.template.html`: reescrever os prompts E e F
**Ancora** (as duas entradas E e F, em sequência, no fim de `PROMPTS_BASE`):
```
  { id:"E", title:"Conversa pesada — transferir agora",
    when:"Cole na conversa travada. O Claude já conhece a estrutura; não precisa subir nada.",
    fill:null,
    body:(p,n)=>{
      const files = n.contextFiles.map(f=>`- ${f.name} → ${f.role}`).join("\n");
      return `Esta conversa está pesada. Antes de encerrarmos, gere todos os arquivos de contexto para eu continuar numa nova conversa sem perder nada. Gere com MÁXIMO DETALHE — o objetivo é que a nova conversa continue exatamente daqui sem precisar de nada desta.\n\n${files}\n- logs/${today}.md → log desta sessão\n\nDepois gere o conteúdo ATUAL e COMPLETO de cada arquivo modificado/criado. Não resuma demais.`;
    } },
  { id:"F", title:"Retomar após transferência",
    when:"Primeira mensagem na conversa nova, após subir os arquivos.",
    fill:"task", fillLabel:"O que quer fazer hoje",
    body:(p,n)=>`Estou retomando após transferência de contexto. Leia os arquivos antes de responder, especialmente os que registram problemas, decisões e estado anterior.\n\n---\n${p.task||"[O QUE QUER FAZER HOJE]"}` },
```
**substituir-BLOCO por:**
```
  { id:"E", title:"Conversa pesada — transferir agora",
    when:"Cole na conversa travada. Gera o HANDOFF-BRIEF; a memória continua nos arquivos, não é regerada aqui.",
    fill:null,
    body:(p,n)=>{
      const L = [];
      L.push("Esta conversa está ficando pesada. Vamos preparar a transferência para uma conversa nova.");
      L.push("");
      L.push("**1) Gere um HANDOFF-BRIEF** (arquivo NOVO, para eu colar como primeira mensagem da próxima conversa). Ele é um ATALHO de arranque, não a memória — a memória continua nos arquivos de contexto. Inclua, com detalhe:");
      L.push("- Onde estamos: estado atual e o que já está fechado.");
      L.push("- O que foi feito nesta sessão — e POR QUÊ (o motivo, não só o quê).");
      L.push("- Pendências concretas: o que fazer primeiro, com o passo exato.");
      L.push("- Próxima frente e o que ainda NÃO foi decidido.");
      L.push("- Armadilhas e regras aprendidas nesta sessão (o que não regredir).");
      L.push("- Ritual de início e a configuração recomendada para a próxima etapa.");
      L.push("");
      L.push("**2) Atualize o contexto — sem regenerar o que não mudou:**");
      if(codeModeOn()){
        L.push("- O repositório é a fonte de verdade e o Claude Code já escreve nele (append em STATUS/DECISIONS/logs). **NÃO regenere os arquivos de contexto aqui no chat**: dois escritores brigam, e reescrever um doc grande no fim de uma conversa pesada é como se perde conteúdo.");
        L.push("- Em vez disso: liste o que ainda falta registrar (o append que o Code deve fazer) e garanta que está tudo **commitado e enviado** — o repo é o que a próxima conversa vai ler.");
      } else if(asuModeOn()){
        L.push("- Edições em arquivos que já existem saem como **instrução .yaml (ASU)** — não me devolva o arquivo inteiro.");
        L.push("- O HANDOFF-BRIEF é arquivo novo: esse vem inteiro.");
      } else {
        L.push(`- Entregue INTEIROS **apenas os arquivos que mudaram nesta sessão** (prontos para baixar e substituir), incluindo o log \`logs/${today}.md\`. Não regenere os que não mudaram.`);
        L.push("- Antes de encolher ou reescrever qualquer arquivo, confirme que nada ÚNICO se perdeu (uma decisão, uma ideia, um detalhe que só existia ali) e me diga o que saiu e por quê.");
      }
      if(groupModeOn()){
        L.push("- Processe a caixa de entrada do HUB (triagem → veredito + motivo) e entregue o `HUB.md` completo; lembre-me de sincronizá-lo nos outros projetos.");
      }
      L.push("");
      L.push("Não resuma demais o brief: o objetivo é que a próxima conversa arranque exatamente daqui.");
      return L.join("\n");
    } },
  { id:"F", title:"Retomar após transferência",
    when:"Primeira mensagem na conversa nova. Cole junto com o HANDOFF-BRIEF.",
    fill:"task", fillLabel:"O que quer fazer hoje",
    body:(p,n)=>{
      const steps = [];
      if(codeModeOn()) steps.push("O repositório é a fonte de verdade: leia a versão atual dos arquivos (puxe antes de começar), nunca a memória.");
      steps.push("Leia os arquivos de contexto: primeiro o que define seu comportamento, depois o estado atual, as decisões e o que ficou pendente.");
      steps.push("Leia o HANDOFF-BRIEF da conversa anterior — ele é um ATALHO de arranque, **não a verdade**. Se o brief divergir dos arquivos, os ARQUIVOS vencem.");
      steps.push("Confirme em UMA frase o que entendeu do estado e do próximo passo. Em ambiguidade real, pergunte antes de executar.");
      const ritual = steps.map((s,i) => `${i+1}. ${s}`).join("\n");
      return `Estou retomando o trabalho numa conversa nova. Antes de responder:\n\n${ritual}\n\n---\n${p.task||"[O QUE QUER FAZER HOJE]"}`;
    } },
```
**Guarda-corpo:** se o bloco âncora não bater **exatamente** (acentos, crases, `\n` escapados), **PARE e reporte** — não adivinhe as fronteiras.

---

## Tarefa B — `validate.js`: expor `PROMPTS_BASE` no SHIM
**Ancora:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, generatedContextFiles};';
```
**substituir-BLOCO por:**
```
const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, generatedContextFiles, PROMPTS_BASE};';
```

## Tarefa C — `validate.js`: check G14 (trava a regra aprendida na dor)
**Ancora:**
```
// ============ SUMARIO ============
```
**inserir-ANTES** dela:
```
check("G14 transferencia mode-aware: Code NAO regenera meta; vanilla so o que mudou; brief nao vence os arquivos", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const E = T.PROMPTS_BASE.find(x => x.id === "E");
  const F = T.PROMPTS_BASE.find(x => x.id === "F");
  assert(E && F, "prompts E/F ausentes");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.codeMode = "no"; T.STATE.workmode.asuMode = "no"; T.STATE.workmode.groupMode = "no";
  const vanilla = E.body({}, dev);
  assert(/HANDOFF-BRIEF/.test(vanilla), "transferencia sem HANDOFF-BRIEF");
  assert(/apenas os arquivos que mudaram/i.test(vanilla), "vanilla deveria pedir so os arquivos que mudaram");
  assert(!/gere todos os arquivos de contexto/i.test(vanilla), "voltou o anti-padrao de regenerar tudo");
  T.STATE.workmode.codeMode = "yes";
  const code = E.body({}, dev);
  assert(/n[aã]o regenere/i.test(code), "modo Code deveria proibir regenerar os meta no chat");
  assert(/commitado|commit/i.test(code), "modo Code deveria exigir commit/push antes de transferir");
  T.STATE.workmode.codeMode = "no"; T.STATE.workmode.asuMode = "yes";
  const asu = E.body({}, dev);
  assert(/\.yaml|ASU/i.test(asu), "modo ASU deveria mandar as edicoes por instrucao .yaml");
  T.STATE.workmode.asuMode = "no";
  const f = F.body({}, dev);
  assert(/ARQUIVOS vencem/i.test(f), "retomada sem a regra de precedencia (arquivos vencem o brief)");
  return "ok";
});

```

---

## Verificação (Code)
- `node build.js` + `node validate.js index.html` → 17/17 nichos, **41/41**, 0 erros.
- No navegador, aba **Prompts**: o prompt **E** muda de texto conforme os modos (ligue **Code** → aparece "NÃO regenere os arquivos de contexto aqui no chat" + exigência de commit/push; ligue **ASU** → edições por `.yaml`; nenhum dos dois → "apenas os arquivos que mudaram"; ligue **Grupo** → acrescenta a linha do HUB). O prompt **F** vira ritual numerado (com o passo do repositório só no modo Code).

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `FIX`/`DEC`: prompts de transferência eram **mode-blind** e mandavam **regenerar todos os meta no chat** — anti-padrão com perda de conteúdo documentada (regeneração de `IDEAS.md` no satelite-web comeu 33 bullets) e conflito de dois escritores no modo Code. Agora **E/F são mode-aware**: E gera o **HANDOFF-BRIEF** (arquivo novo) e, para o contexto — Code: **não regenerar**, listar o append e garantir commit/push; ASU: edições por `.yaml`; vanilla: **só os arquivos que mudaram** + higiene P12; grupo: empilha o HUB. F vira **ritual** com precedência explícita (**os arquivos vencem o brief**). **G14** trava a regressão.
- **`meta/IDEAS.md`** — registrar **i-N42**: *prompts C/D estão desatualizados — mandam a IA gerar os arquivos do zero, ignorando o **download estruturado** (↓, spec0034) e o **pacote de atualização** (↻, i-N40) que o kit já oferece. Refino: C aponta para o estruturado, D para o pacote; ambos cientes dos modos.* (Confirmar o próximo i-N livre antes de numerar.)
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0040 (prompts de transferência mode-aware + G14, 41/41); bump minor.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "fix: prompts de transferencia eram mode-blind e mandavam regenerar os meta no chat (spec0040)" -m "prompt E agora gera o HANDOFF-BRIEF (arquivo novo) e trata o contexto por modo: Code nao regenera (repo e a verdade, Code faz append; exige commit/push), ASU manda edicoes por .yaml, vanilla entrega so os arquivos que mudaram com higiene P12, grupo empilha o HUB; prompt F vira ritual com precedencia (os arquivos vencem o brief); G14 trava a regressao do anti-padrao que causou perda de 33 bullets no IDEAS de um projeto consumidor; 41/41"
git push
```
