# STATUS — Kit de Contexto Universal — 2026-06-21

> Rolante: só o agora + próximos passos. Item resolvido sai daqui (vai pro CHANGELOG).
> Versão atual: **v1.41.0**. Índice ~587 KB. Teste: **17/17 nichos, 0 erros JS** + integridade dos chips (FIX-004) + **~32 checagens de conteúdo** (D-018/022/028/029; v1.29–v1.36) + smoke/round-trip do HUB (códigos curados + variador) + suíte de fluxos. (Detalhe do método no CONTEXT §3.)

> **Mudanças nesta revisão (v1.33.0):** códigos de área do HUB **curados** por nicho (DEV, não "DESE") + **variador** de duplicata (DEV0/DEV1/DEV2); rótulo de grupo reescrito (D-027). Capturada a **direção estratégica**: refator modular + **i18n com idioma misto** (i-N13 expandido + i-N26 em IDEAS) — sem código até decisão. Respostas do usuário às perguntas em aberto registradas em IDEAS. (Histórico completo de versões no CHANGELOG.)

## 💬 Última sessão (2026-06-30 — v1.41.0)
- **ASU por download + escopo código-vs-docs (D-037, disciplina v2 Fase A):** instrução ASU passa a ser entregue como arquivo `.yaml` para baixar (bytes UTF-8 exatos), não colada no chat; novo item de escopo código-vs-docs (código + docs de heading único como DECISIONS/CONTEXT via ASU; docs rolantes STATUS/CHANGELOG/IDEAS inteiros); dica de âncora não-ASCII. Harness 17/17. **Fases B-D pendentes:** config mode-aware, nome de spec no Modo Code, obediência feedback/nome-de-download.

## 💬 Sessão anterior (2026-06-29 — v1.40.0)
- **CEREBRO niche-aware (D-036, Fase 3):** gatilhos/higiene/nota "criar se faltar" respeitam os `contextFiles` do nicho — CHANGELOG/ROADMAP só onde existem; criação automática só da camada universal (STATUS/IDEAS/DECISIONS). Commit foi para a instrução curta (dev/ASU/Modo Code); ritual de checar `.txt` avulso adicionado; limpeza `DECISOES`→`DECISIONS` no template. Harness 17/17.
- ✅ **Migração para inglês + Decisão 3 CONCLUÍDA** (Fases 0-3 feitas): Fase 0 (repo KCM), Fase 1 (nomes dos nichos), Fase 2 (camada universal DECISIONS), Fase 3 (CEREBRO por nicho). D-035 + D-036 fechados.

## 💬 Sessão anterior (2026-06-29 — v1.39.0)
- **Camada universal DECISIONS (D-035, Fase 2):** DECISIONS.md adicionado aos 12 nichos que nao tinham (animation, client, comics, cuisine, custom, game, marketing, music, narrative, pixel, research, rpg); game: residuo IDEIAS->IDEAS em prosa corrigido. Harness 17/17. Fase 3 pendente — exige Opus no Code.

## 💬 Sessão anterior (2026-06-29 — v1.38.0)
- **Nomes de gestao dos nichos em ingles (D-035, Fase 1):** DECISOES→DECISIONS, IDEIAS→IDEAS, GLOSSARIO→GLOSSARY, CONTEXTO→CONTEXT, HISTORICO→HISTORY nos 7 nichos afetados; conteudo de nicho permanece PT. Harness 17/17. Fases 2-3 pendentes.

## 💬 Sessão anterior (2026-06-29 — v1.37.1)
- **Nomes de gestao em ingles (D-035, Fase 0):** `git mv` de DECISOES→DECISIONS, IDEIAS→IDEAS, GLOSSARIO→GLOSSARY, HISTORICO→HISTORY + todas as referencias nos `.md` do repo. Template (nichos, Fases 1-3) pendente.

## 💬 Sessão anterior (2026-06-29 — v1.37.0)
- **Diretriz ASU reescrita (D-033):** editar→ASU (`AAAA-MM-DD-asuNNNN.yaml`); arquivo novo→baixar; lembrete UI e instrução curta citam ASU + `PROMPT_IA.md`.
- **Recomendação de config (D-034):** home nomeada no CEREBRO + gatilho na instrução curta. Nome de log reforçado na instrução curta.
- Harness: **17/17, 0 erros, 32 checagens**.

## 💬 Sessão anterior (2026-06-21 — v1.36.0)
- **Refator modular (D-028) embutido:** `index.html` agora é gerado de `src/index.template.html` + 17 módulos `src/niches/*.js` via `build.js`. Produto continua 1 arquivo único, sem build no lado do usuário (preserva D-001).
- **Cérebro renomeado (D-029):** arquivo gerado do cérebro mudou de `CLAUDE.md` → `CEREBRO.md` em todos os projetos gerados (sempre, não condicional). Libera o nome `CLAUDE.md` para o arquivo-raiz do Claude Code. Todas as referências no template, triggers, behaviors e harness atualizadas.
- **"Feedback para o ASU" no IDEAS gerado:** nova seção logo abaixo de "Feedback para o Kit" no template universal `UNIVERSAL_IDEAS_TPL`.
- Harness: **17/17, 0 erros, 32 checagens**.
- **ROADMAP atualizado para v1.34.0** (modular concluído, i18n em avaliação, fase «Modo Code» aberta) — primeira atualização feita pelo método "doc por spec" (D-030).
- Arquivos tocados nesta sessão (Code): meta/ROADMAP.md, meta/DECISIONS.md, meta/STATUS.md, meta/CEREBRO.md.
- **v1.35.0 — switch «Modo Code» implementado** (D-031): toggle `codeMode` injeta no CEREBRO.md gerado as raias chat↔Code + o método doc-por-spec; (Tarefa B) apêndice com starter `.claude/`. Projetos gerados herdam a capacidade de trabalhar no Claude Code.
- **v1.36.0 — ASU quick wins** (D-032): lembrete na UI ao ligar o ASU + diretriz ancorada no `format_version` do guia. (Parte "HUB" do item c: sem referência de versão no HUB hoje — nada a fazer.)

## 🎯 PRÓXIMOS (decidir/fazer)
1. ✅ **ASU quick wins** (v1.36.0, D-032): lembrete na UI ao ligar o switch ASU + diretriz ancorada no `format_version` do guia — **concluído**.
2. **"Modo Code":** switch que gera o kit de arranque — `CLAUDE.md` raiz starter, `.claude/settings.json` + comandos `/`, protocolo de raias, macetes Windows/PowerShell — funcionando em desktop e CLI.
3. **Consolidar o CINZEIRO no HUB** — EM ANDAMENTO pelo usuário.
4. **README/PLANNING:** reescrever quando der (pitch novo — "kit desenvolve" + HUB/Cânone).

## Fase atual
🏁 **Maduro e em produção.** Publicado (`silujones.github.io/kit-contexto/`), dogfooded, com pilotos reais (jogo CINZEIRO/Fando em grupo). São **17 nichos** (16 de conteúdo + 1 construtor `custom`). Três capacidades no ar: manter contexto; o kit DESENVOLVE (narrative escreve, game cria); coordenar grupos (HUB com Cânone Central). O harness 17/17 + anti-testes é a rede de segurança a cada release.

## 🎯 PRÓXIMO TRABALHO (decidir/fazer)
1. **Consolidar o CINZEIRO no HUB** — EM ANDAMENTO **pelo usuário** (ele faz; depois pode trazer o resultado para ajuste fino). O `buildHub` já gera a forma do `CANON.md` do piloto; falta comparar/consolidar (conteúdo do piloto + forma do kit) e ver se Cânone Central + códigos cobrem o uso real.
2. **DECISÃO ESTRATÉGICA — refator modular + i18n (i-N13 expandido / i-N26).** O usuário **aceita a direção** (dados de nicho em JSON + núcleo → abre i18n e idioma misto); preocupação = não quebrar a ferramenta no processo (mitigação: harness 17/17 como rede, migrar nicho a nicho). Condiciona o README/PLANNING. **Sem código até o "vai" explícito.**
3. **README/PLANNING:** reescrever quando der (pitch novo — "kit desenvolve" + HUB/Cânone). Idealmente depois de decidir o item 2.
4. **Esperar os pilotos** (decisão do usuário): lote i-N23 (pixel), i-N25 (música), e estender "desenvolve" a HQ/RPG/animação — ele vai usar mais e dar feedback antes de qualquer mexida.

✅ **Concluído nesta sessão (v1.33.0):** códigos de área curados + variador (D-027); rótulo de grupo. Direção i18n/modular capturada. Handoff completo gerado.
✅ **Concluído antes:** HUB inspirado no CANON.md (v1.32.0, D-026); página construtora do HUB (v1.31.0, D-025); switch + Instruções enxutas −27% (v1.30.x, D-024); FIX-005 Pages (.nojekyll); "kit desenvolve" fase 1 (v1.29.0, D-023); lote D-022 + D-018 (v1.28.0); FIX-004 chips (v1.27.1); P12/P13 (v1.27.0, D-020/D-021).

## 🧭 Decisões maiores em avaliação (ver ROADMAP / IDEAS)
- **Refator modular + i18n (i-N13 expandido + i-N26):** migrar dados de nicho para JSON + núcleo central; abre troca de idioma da UI e dos templates de forma auditável, inclusive **idioma misto** (artefatos/código/meta em inglês; UI e conversa em pt-BR). **Direção aceita; sem código até decisão.** Risco: a migração quebrar a geração → mitigação: harness 17/17, migrar nicho a nicho validando a cada passo. (Era a Fase 4 "em avaliação"; agora com motivação forte.)
- **Nicho/ferramenta de guias/tutoriais/wikis (i-N14):** aprender ferramentas (Aseprite/Unity/Godot/Unreal/Excel/linguagens), platinar jogos. Pode ser nicho OU ferramenta separada. Conecta a "Educação" (NICHOS-CANDIDATOS nº1).
- **Auto-aplicação de patches (i-N15) + entrega por diff (i-N16):** a IA gera "arquivos de atualização" estruturados (estilo apply_patch) e uma ferramenta local aplica — menos trabalho manual e, com diffs em vez de arquivos inteiros, menos output tokens. Avaliar viabilidade/segurança.

## 🎯 Outras pendências (sem urgência — detalhe no ROADMAP/IDEAS)
- **README/PLANNING** desatualizados (pitch pós "kit desenvolve" + HUB) — reescrever quando der (também item 3 acima).
- **Revisar polimento/qualidade das Instruções geradas** — em parte resolvido pela compressão (−27%) + teto de 6500; confirmar em uso real.
- **Nichos novos (FUTURO, adiados de propósito):** ver `NICHOS-CANDIDATOS.md` — Educação & Cursos (nº1), depois Desenvolvimento Pessoal/Journaling (sensível), Jurídico/Podcast/Tradução. (i15 / i-N14 em IDEAS.)
- **spec-kit para dev/game (i-N7, FUTURO):** análise do Spec-Driven Development quando houver mais feedback de uso.
- **Evoluções de polish** (do CHANGELOG "possíveis v1.1/v1.2"): export/import de preset JSON (i11), tema claro (i9), tradução EN (i10 → agora dentro de i-N26/i18n), PDF dos templates (i13), drag-and-drop no Custom (i20), carimbo de versão nos downloads (i-N10). Nada prometido.
- ✅ **Resolvidos:** MAPA.md "17 prontos" → 16+1 (v1.29.0); reagrupar/renomear narrative (rótulo do grupo, v1.33.0).

## 🔎 Mount (D-018) + localStorage — lembrete operacional
O conector do GitHub alimenta **só o RAG/Conhecimento do Projeto** (busca, com subpastas); **não** popula o mount `/mnt/project/`. **Só o upload direto** popula o mount, **achatado** (sem subpastas; nomes iguais colidem). Para eu ler/editar pelo mount: subir os arquivos DIRETO no Projeto + ligar a ferramenta de código. **`localStorage` é por origem:** presets/HUB do site publicado NÃO aparecem no arquivo local (`file://`) e vice-versa (não é bug).
**FlatDrop / `_MANIFEST.md`:** NÃO é padrão — detectar pela presença do `_MANIFEST.md`. Se existe: consultar (caminho original → nome plano; sufixo `__pasta` = colisão), entregar pelo nome real, usar para entender a estrutura. Se não existe: fluxo normal, sem travar. O FlatDrop filtra o upload (tipos não aceitos; `node_modules`/`venv`/`.git`; `.gitignore` opcional) — ausência pode ser deliberada. Regra no CLAUDE.md; decisão em D-022.

## 🧪 Validação (regra dura: NUNCA publicar sem 17/17 e 0 erros)
Hoje o harness está **consolidado em `/home/claude/kit/validate.js`** (boot limpo por nicho via shim; ~24 checagens de conteúdo + chips + round-trip do HUB + smoke do `buildHub` + teto de 6500 nas Instruções). O container reseta entre sessões → **recriar o harness a cada sessão** (e `npm install jsdom` se faltar). Em sessões antigas existiram arquivos separados (`validate-switch/compose/conflict/reuse`, `t-prompt/shortcut/granular`) — as checagens foram absorvidas no `validate.js` atual; recriar conforme a necessidade. Padrão a cada mexida: `node --check` no `<script>`, balanceamento `<div>`/`</div>` (283/283), **anti-testes** (desfazer a correção numa cópia → o teste reprova), sincronizar para outputs e conferir md5.

## 🗺 Onde está no código (v1.33.0; números aproximados, mudam ao editar)
- **HUB (D-025/026/027), ~8151+:** `NICHE_CODE` (mapa de códigos curados), `baseCode(f)`, `computeCodes(frentes)` (variador DEV0/DEV1), `buildHub()` (identificadores → D1–D6 → Cânone Central → frentes com `[ORIGEM-NNN]` → status), `renderHubChips()` (chips add-style), `renderHubRows()` (linhas com campo `código` + CSS `.hubrow select,.hubrow input` no estilo do kit), `renderHub`/`wireHub`/`updateHubPreview`/`persistHub`/`loadHub`. View `#v-hub` (nav `data-view="hub"`); `setView` chama `renderHub`; boot chama `loadHub()`+`wireHub()`. `STATE.hub` em `LS_HUB="kit-hub-v1"`. `effectiveFiles` NÃO injeta HUB.md no nicho.
- **Diretriz de personalização das Instruções (v1.32.0):** `L.push` logo após "versão curta deste arquivo" no `buildClaudeMd`.
- **`## Código / build` (v1.32.0):** dentro do LOG-TEMPLATE do nicho **game** (após "Decisões de design"). LOG-TEMPLATE é **por-nicho** (16 definições distintas).
- **Instruções enxutas (v1.30.0):** em `buildInstr`, os universais (ids de `BEHAVIORS_BASE`) viram 1 linha de nomes; behaviors do nicho seguem em bullets. Teto de 6500 no harness.
- **IDEAS universal (v1.29.0):** `UNIVERSAL_IDEAS_TPL` (constante de fundação, antes de `HYGIENE_RULES`) injetado em `normNiche` (`_files.some(/^IDE(A|IA)S\.md$/i)`); regra "cria na primeira necessidade" no `buildClaudeMd` após a tabela de gatilhos. Narrative: convention[0] reescrita + kishōtenketsu + behavior `writes_prose` + prompt `id:"J"`. Game: `builds_game` + template `ROTEIRO.md` + output `roteiro` + convention "constrói".
- **Lote D-022 (v1.28.0):** i-N19 na def de `check_before_ask` (P8) + bullet na seção «Verifica antes de pedir um arquivo» do buildClaudeMd; i-N22 em `HYGIENE_RULES`; i-N21 em `TRIGGERS_BASE`; i-N20 em `commitIntro`; i-N18 em `handoffComo`. D-018: itens do `handoffComo` + callouts da tela "Tokens & Fluxos".
- **FIX-004:** `normBuilderSection` (~6200) `opts: g.items.map(it => Array.isArray(it) ? it : [it,it])` — chips de `client`/`narrative` (formato par). `BEHAVIORS_BASE` = 13 (P12 `shrink_hygiene` + P13 `research_refute` no fim). `getCurrentNiche` usa `raw.isBuilder`.
- **Custom:** `composeFromNiches(niches,sel)` (~7507) + chips `data-sc`; `STATE._sc`; presets `toPreset`(body STRING, FIX-003)/`fromPreset`/`mergeCustom`; atalho "Nichos salvos"; `CONTROLS_SKELETON`+captura/restauração (FIX-001). LS: `LS_PRESETS="kit-custom-presets"`, `LS_PRESET_CURR="kit-custom-current"`.

## 🗂 Convenções
- pt-BR em tudo, inclusive comentários de código. Nomes de template profissionais.
- Entrega: arquivos completos em `outputs/` (o usuário organiza no repo: `index.html` na raiz, `.md` em `meta\`).
- Commit ao final: comando completo p/ CMD Windows (UMA linha por comando, `-m` repetido), **sem acentos** (CMD corrompe acentos em `-m`). 3 linhas: `git add` listando, `git commit`, `git push`.
- Usuário no CMD do Windows. Repo: `github.com/SiluJones/kit-contexto`; site `silujones.github.io/kit-contexto`; `.nojekyll` na raiz.

## 💬 Última sessão (2026-06-14 — v1.33.0 + handoff)
Fechamento da conversa p14–p18 (v1.27.1 → v1.33.0). Nesta virada:
- **Códigos de área do HUB** (D-027): defaults curados por nicho (mapa `NICHE_CODE`: DEV, GAME, PIXEL, NARR, SOM, HQ, COZ, RPG, ANIM, BRAIN/IDEIA…) e **variador** de duplicata (`computeCodes`: DEV0/DEV1/DEV2; único fica sem sufixo). Rótulo de grupo: "Histórias, Jogos & Mídia — mundos, arte e som".
- **Direção estratégica capturada** (sem código): refator modular (i-N13) + **i18n com idioma misto** (i-N26) — UI/conversa no idioma do usuário, artefatos/código/meta em inglês. O usuário aprova a direção; preocupação = não quebrar a ferramenta (harness 17/17 é a rede).
- **Handoff gerado** com máximo detalhe: CONTEXT (reescrito), STATUS, DECISIONS, CHANGELOG, IDEAS, ROADMAP, GLOSSARY, LOG-TEMPLATE + HISTORY.md + logs/2026-06-14.md.
**Próximo de fato:** decidir o refator modular + i18n (item 2); o CINZEIRO no HUB segue com o usuário.
