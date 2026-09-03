# ROADMAP — Kit de Contexto Universal

> Plano deliberado de evolução, em fases. Opcional por natureza (nem todo projeto tem direção de médio prazo) — aqui vale porque há decisões grandes em aberto. O QUE já saiu vive no CHANGELOG; o AGORA no STATUS; o PORQUÊ no DECISIONS; as IDEAS no IDEAS. Este arquivo conecta tudo numa direção.

> **Criado em 2026-06-07.** Primeira versão. Consolida o que já foi feito (Fases 0–2) e organiza o que está por decidir/fazer (Fases 3–5 + Futuro), a partir das discussões desta sessão.

> **Mudanças nesta revisão (v1.122.0):** **revisão de defasagem — nada foi removido, só acrescentado e requalificado.** A nota anterior era da **v1.34.0**, ou seja, **88 versões atrás**. Neste intervalo o kit entregou o que aqui estava escrito como futuro e caminhou por uma frente que este arquivo não tinha. Consertado: a **Fase 4 fecha** (o i18n vira descarte declarado, não pendência silenciosa); a seção «Próxima entrega — Modo Code» vira **✅ Fase 5**, porque foi entregue na v1.35.0 e está em produção em três projetos; nasce a **▶ Fase 6 — Toolchain e protocolo entre projetos**, que é onde o kit realmente esteve das v1.60 às v1.122; a antiga Fase 5 vira **Fase 7**; e o «Restante» da Fase 3 é requalificado item a item contra o que foi medido. **Todos os blocos ✅ anteriores ficaram intactos, com os IDs de decisão, fix e ideia que carregavam** — a primeira versão desta revisão os havia comprimido, o que é regressão de doc (P11) e foi desfeito. Ver `i-N59` sobre as 18 versões que o CHANGELOG perdeu.

> **Mudanças nesta revisão (v1.34.0):** refator **modular concluído** (D-028) — o `index.html` passou a ser gerado de `src/index.template.html` (casco) + 17 módulos `src/niches/*.js` via `build.js`; produto segue **1 arquivo único** (D-001 preservado). Cérebro renomeado `CLAUDE.md`→`CEREBRO.md` (D-029), liberando `CLAUDE.md` para o arquivo-raiz do Claude Code; seção «Feedback para o ASU» no IDEAS gerado. **Fase 4 reescrita:** a pergunta "modular vs. arquivo único" está **resolvida** (modular venceu); o que segue em avaliação é só o **i18n / idioma misto** (i-N26). A menção a "Fase 6 (i18n)" da v1.33.0 fica **consolidada na Fase 4** — nunca chegou a virar bloco próprio (P12: nada perdido, só realocado). **Nova entrega aberta:** «Modo Code». **Método novo:** atualização de doc por **spec para o Claude Code** (D-030) — ver `CEREBRO.md` §«🤝 Fluxo Chat ↔ Claude Code».

> **Mudanças nesta revisão (v1.33.0):** códigos de área do HUB curados + variador (D-027); rótulo de grupo reescrito. **Direção estratégica aceita:** refator modular (i-N13) + i18n com idioma misto (i-N26) — sem código até decisão. Fase 6 (i18n) acrescentada ao horizonte.

> **Mudanças na revisão (v1.32.0):** HUB absorveu o CANON.md do piloto (Cânone Central, códigos de área, precedência, tarefas com origem); construtor por botões + estilo do kit; diretriz de personalização das Instruções; log técnico no game. D-026.

> **Mudanças na revisão (v1.31.0):** página construtora do HUB (06) embutida (D-025); responsabilidade no bloco da frente; HUB.md fora do download por-nicho. Fase 3 ganha bloco ✅ v1.31.0.

> **Mudanças na revisão (v1.30.0):** HUB embutido como switch (i-N24 ✅ D-024) + Instruções enxutas (−27%, teto no harness). Fase 3 ganha bloco ✅ v1.30.0; "reagrupar narrative" adiado (intuito ambíguo). Fase 5: i-N24 marcada EMBUTIDA.

> **Mudanças na revisão (v1.29.0):** "kit desenvolve" fase 1 executada (D-023) — IDEAS universal, narrative escreve, game cria (ROTEIRO.md). Fase 3 ganha bloco ✅ v1.29.0; restante renumerado (HUB i-N24 = refinar/apresentar; estender "desenvolve"; lote pilotos; cosméticos). Fase 5: i-N24 com o desenho do HUB; +i-N25 (música).

> **Mudanças na revisão (v1.28.0):** os itens 1 e 2 da Fase 3 foram **executados** — lote D-022 embutido + D-018 corrigida — e movidos para o bloco ✅; o restante renumerado (lote dos pilotos = 1, cosméticos = 2). Ver CHANGELOG v1.28.0.

> **Mudanças nesta revisão (v1.27.1):** FIX-004 (chips de Cliente/Narrativa) consertado e validado — ver CHANGELOG. A Fase 3 ganhou diretrizes novas a redigir (i-N18/19/20, agora também i-N21/22 com texto proposto) e a Fase 5 ganhou ideias maiores (i-N21 feedback — fluxo desenhado; i-N22 — válvula proposta; **i-N23** melhorias do Pixel vindas do piloto; **i-N24** multi-projeto, 4 frentes do mesmo jogo). **Terceira leva (mesmo dia):** o usuário validou o lote inteiro — **D-022** congela escopo e redação (FlatDrop por detecção automática, não padrão; i-N19 refino de P8; i-N20 `git add` listando; i-N21 escopo ampliado; i-N22 válvula aprovada); **item 1 da Fase 3 liberado**. Itens concluídos seguem visíveis como ✅.

> **Mudanças na revisão anterior (v1.27.0):** a Fase 3 avançou — os itens 1 (propagar P12) e 2 (decidir o princípio de pesquisa/refutação, i-N17) foram **concluídos**; o antigo item 3 (mount/RAG, D-018) passou a ser o próximo. Ver D-020, D-021 e CHANGELOG v1.27.0.

---

## ✅ Fase 0 — MVP + fundação (CONCLUÍDA)
- 18 nichos em página única (v1.0.0); heros distintos; Custom como construtor real; theming por CSS vars; persistência em localStorage.
- Fundação transversal: princípios universais (chegaram a 11; **hoje 13** com P12/P13 — v1.27.0), CLAUDE.md separado das Instruções, filosofia rolante/estável/cresce, regras de higiene, tabela de gatilhos, UPDATE_PROTOCOL. (D-012; v1.1.x–v1.4.0.)

## ✅ Fase 1 — Refinamento área por área (CONCLUÍDA)
- Os 16 nichos de conteúdo (8 sérios + 8 criativos) reconstruídos no "padrão de ouro", cada um com pesquisa de domínio própria. (D-013; v1.5.0–v1.18.0.)
- Transversais acumulados: afixo de download (v1.9.0), seletor de SO (v1.11.0), commit ao final + canal de atualização (v1.19.0), privacidade (v1.20.0), protocolo de transferência contexto/RAG + handoff (v1.21.0), mount/ferramenta de código + diretrizes refinadas (v1.22.0/v1.23.0).
- Achados de ambiente: D-015/D-016/D-017/**D-018** (mount só por upload direto, não pelo conector do GitHub).

## ✅ Fase 2 — Custom Inteligente → Custom unificado (CONCLUÍDA)
- Composição assistida (concatenação + dedup visível + checagem de conflito) — v1.24.0; conserto do bug A + re-entrância (FIX-001).
- Fluxo de preset (Ativar de verdade, editar/trocar, nome pré-preenchido) — v1.25.0 (FIX-002); corpo dos prompts preservado — v1.25.1 (FIX-003).
- **Unificação** num só card `custom` (composição no topo + builder abaixo) + atalho "Nichos salvos" na barra superior + **granularidade** por nicho — v1.26.0 (**D-019**, supersede a parte de D-014 sobre 2 cards).

---

## ▶ Fase 3 — Higiene & consistência (EM ANDAMENTO — barato, alto valor)
Itens de código pequenos e de doc, sem arquitetura nova.

**✅ Concluído (v1.33.0):**
- ✅ **Códigos de área do HUB** (D-027) — defaults curados por nicho (DEV/GAME/PIXEL/NARR/SOM/HQ…) + variador de duplicata (DEV0/DEV1/DEV2); rótulo de grupo "Histórias, Jogos & Mídia — mundos, arte e som".

**✅ Concluído (v1.32.0):**
- ✅ **HUB inspirado no CANON.md** (D-026) — identificadores de área, Cânone Central, precedência (D4), tarefas `[ORIGEM-NNN]`; construtor por botões (chips) + campos no estilo do kit; diretriz "personalizar as próprias Instruções"; `## Código / build` no LOG do game.

**✅ Concluído (v1.31.0):**
- ✅ **Página construtora do HUB** (06 · HUB, D-025) — frentes (nicho+nome+responsável por), add/remover/reordenar, preview, download do `HUB.md` populado; responsabilidade no bloco da frente; HUB.md fora do download por-nicho. Harness +smoke test.

**✅ Concluído (v1.30.0):**
- ✅ **HUB de grupo como switch** (i-N24, D-024) — toggle "Projeto em grupo?"; ligado adiciona seção ao CLAUDE.md + HUB.md aos templates; round-trip no harness.
- ✅ **Instruções enxutas** (D-024) — 13 universais → 1 linha de nomes; −27%; teto de 6500 no harness.

**✅ Concluído (v1.29.0):**
- ✅ **D-023 fase 1** — IDEAS universal (injeção + "cria na primeira necessidade"); narrative **escreve sob direção** (writes_prose, kishōtenketsu, prompt J); game **cria** (builds_game + ROTEIRO.md com AGUARDANDO DESIGN). Harness +10 checagens + anti-teste; 17/17.

**✅ Concluído (v1.28.0):**
- ✅ **Lote D-022 embutido** — as 5 diretrizes no conteúdo gerado de todos os nichos: i-N18 manifesto auto-detectado (`handoffComo`), i-N19 refino de P8 ("STATUS é pista, não fato"), i-N20 commit em 3 linhas listando (`commitIntro`), i-N21 gatilho «Feedback para o Kit» (`TRIGGERS_BASE`), i-N22 válvula de desvio (`HYGIENE_RULES`). Harness +6 checagens + anti-teste; 17/17.
- ✅ **D-018 — orientação mount/RAG corrigida** no CLAUDE.md gerado (3 itens do `handoffComo`) e na tela "Tokens & Fluxos" (2 callouts): só upload direto popula o mount (achatado); conector do GitHub = só busca.

**✅ Concluído (v1.27.1):**
- ✅ **FIX-004** — chips de Cliente/Narrativa não selecionáveis (conversor tratava par como string). Conserto de 1 linha + teste de regressão de chips no harness. (Ver CHANGELOG/DECISIONS.)

**✅ Concluído (v1.27.0):**
- ✅ **P12 (higiene ao encolher) propagado à ferramenta** — 12º item de `BEHAVIORS_BASE` (`shrink_hygiene`), aparece no CLAUDE.md gerado de todos os nichos. Re-validado 17/17. (DEC D-020.)
- ✅ **Princípio de rigor em pesquisa + refutação decidido** (i-N17) — criado o princípio próprio **P13** (`research_refute`), 13º item de `BEHAVIORS_BASE`, em vez de reforçar P1/P7. (DEC D-021.)

**Restante — requalificado em 2026-09-02, item a item, contra o repositório:**
1. **Estender o padrão "desenvolve" (D-023)** a HQ/RPG/animação quando os pilotos sinalizarem; avaliar **i-N25** (música). **→ NÃO APURADO.** Os módulos dos três nichos existem em `src/niches/`, mas não foi possível datar a mudança pelo CHANGELOG (ver `i-N59`). *Marcado como não apurado, não como pendente — a diferença importa: pendente pede ação, não apurado pede medição.*
2. **README/PLANNING:** reescrever refletindo "o kit desenvolve" (pitch novo). **Reagrupar `narrative`:** só após o usuário esclarecer o intuito.
3. **Aplicar o lote de feedback dos pilotos quando fechar** (i-N23: paleta global×bioma no ESTILO, prioridade visual interna no SPRITES, efeitos especiais no ANIMACAO, estado "aguardando design"; mais itens por vir das outras frentes; o item 4 — "aguardando design" — entrou via ROTEIRO na v1.29.0). Gate: decisão do usuário de fechar o lote. Triagem D-022 (base / módulo / específico). Re-validar 17/17.
4. **Cosméticos:** MAPA.md ("17 prontos" → 16 de conteúdo + 1 construtor); reagrupar `narrative` (group literary → tema criativo); revisar README/PLANNING; revisar qualidade das Instruções geradas.

**Situação dos itens 2 a 4 em 2026-09-02:** os três continuam **ABERTOS**, e os três são de doc, não de código. O item 3 (lote de feedback dos pilotos, `i-N23`) está aberto **sem gatilho** desde junho — os pilotos que gerariam o feedback são de nicho criativo, e a atenção do kit está no toolchain. *Ou ganha gatilho, ou vira descarte declarado; ficar como pendência perpétua é o pior dos três estados.* O item 2 ganhou motivo novo: `README` e `PLANNING` também não conhecem a Fase 6.

## ✅ Fase 4 — Arquitetura (CONCLUÍDA)
**✅ Resolvido (v1.34.0 — D-028):** o refator **modular** foi feito. O `index.html` é gerado de `src/index.template.html` + 17 módulos `src/niches/*.js` via `build.js`; saída **byte-idêntica** à v1.33.0 com tudo desligado; o `build.js` é ferramenta **do dev** — o produto segue **1 arquivo único, sem build no lado do usuário** (D-001 preservado). A tensão `file://`/`fetch()` foi resolvida por **concatenação no build** (sem framework, sem toolchain no produto) — exatamente o "caminho de menor arrependimento" que o ROADMAP previa.
**❌ DESCARTADO por inação, e agora está dito (i-N26).** *Medido em 2026-09-02: `i18n` tem **zero** ocorrências no gerador, e nenhuma das 88 versões desde a v1.34.0 o tocou.* Não é pendência silenciosa — é uma frente que o projeto não escolheu. Se voltar, volta como ideia nova, com o custo remedido. O texto da avaliação original fica abaixo como registro do que se pensava então: **⏸ Em avaliação — i18n / idioma misto (i-N26):** com o modular no lugar, abre-se a troca de idioma da UI e dos templates de forma auditável (UI/conversa no idioma do usuário; artefatos/código/meta em inglês). **Direção aceita; sem código até o "vai" explícito.** Risco: a migração de strings quebrar a geração → mitigação: harness 17/17 como rede, migrar por etapas validando a cada passo. (Absorve a "Fase 6 (i18n)" citada na nota da v1.33.0, que nunca virou bloco.)

## ✅ Fase 5 — Modo Code (CONCLUÍDA e madura)

> **Requalificada em 2026-09-02.** Esta seção estava escrita como **«Próxima entrega»** desde junho. Foi entregue na **v1.35.0** e evoluiu por dezenas de versões — era o item mais desatualizado do arquivo. O texto de planejamento original fica abaixo, como registro do que se decidiu no arranque; o que mudou é o **status**, não o conteúdo.

**O que existe hoje, conferido:** o switch gera o kit de arranque para desenvolver no Claude Code — `CLAUDE.md` raiz, `.claude/settings.json` e as skills `apply-wo` e `wrap`. **Evolução medida pelo CHANGELOG:** `.gitignore`/README no perfil dev (v1.43.0) · controle de skills movido do topbar para o builder «A obra» (v1.51.0, D-053) · `spec` vira **Work Order** no vocabulário (v1.76.0, D-086) · análise antes do compromisso (v1.85.0, D-097) · relatório do Code em arquivo (v1.95.0, D-108). **Em produção em três projetos** — `satelite-web`, `mapsmith` e `flatdrop` — e é de lá que vem a maior parte do feedback que o kit consome hoje. **As decisões de arranque de 2026-06-21 estão todas resolvidas e não são mais backlog.**

### Registro do planejamento original (junho/2026)
Switch no kit que gera o **kit de arranque** para desenvolver um projeto **no Claude Code** (desktop e CLI): um `CLAUDE.md` **raiz** starter (comandos de build, convenções, aponta pro `meta/`), `.claude/settings.json` + comandos `/`, o **protocolo de raias** (chat reescreve/entrega inteiro e por spec; Code implementa e dá append), e os macetes de ambiente (abrir pelo PowerShell; commit sem acento). É o que praticamos aqui (dogfooding) virando feature do produto.
- **Decisões de arranque já tomadas** (handoff 2026-06-21): `.claude/commands/` no v1 = **sim**; build no `CLAUDE.md` raiz = **placeholder** (mais simples por ora); interação com os outros switches (HUB/grupo, ASU) = **independente por ora** (não são exclusivos; um talvez não precise do outro — refinar depois).
- **Backlog imediato:** (1) **spec do Modo Code** com as escolhas acima (o chat escreve); (2) **ASU quick wins** b/c — lembrete na UI quando o switch ASU é ligado (subir o `INSTRUCTION_GUIDE.md`); ancorar a diretriz e o HUB no `format_version` em vez da versão da ferramenta.

## ▶ Fase 6 — Toolchain e protocolo entre projetos (EM ANDAMENTO — é aqui que o kit está)

> **Fase criada em 2026-09-02.** Não é trabalho novo: é o reconhecimento de onde o kit esteve das **v1.60 às v1.122**. O ROADMAP não tinha lugar para ela, e por isso a maior parte do esforço recente não aparecia em plano nenhum — ela existia em oito decisões antes de existir em qualquer plano.

**✅ Entregue:**
- **Modo Atualização / `template-update`** (v1.60.0, spec0035, D-063, em diante): `buildUpdatePack` gera o pacote achatado + afixado + manifesto, com **natureza declarada por arquivo** (`template` · `fusao` · `modelo-em-espera`), **linhas revogadas** (o merge não acha sozinho) e **carimbo de modos**.
- **Protocolo de correspondência entre projetos** (D-123): `AAMMDD-<quem>-para-<quem>-NN-<assunto>.md`, contador compartilhado, correspondência **fora do repositório**, e o que fica pendente do outro lado vira item com gatilho do nosso.
- **Medição delegada** (v1.100.0, D-113): quem tem o disco mede, quem tem o contexto decide.
- **A família da afirmação verificável** (v1.120.0–v1.122.0, D-135 a D-137): P8 tipado em quatro espécies, «Âncoras lidas em» com recusa por quem aplica, Arquivar/Manter exaustivo com terceiro estado, relatório com resultado real e reabertura, e os dois carimbos (modos e versão) decidíveis pelo próprio projeto.
- **Ciclo de feedback vivo:** três projetos instalados devolvendo crítica ao kit, registrada em `IDEAS.md` › «📮 Feedback para o Kit».

**▶ Aberto, na ordem que a evidência sugere:**
1. **Canal para avisar um instalado de que algo já foi corrigido. ⏸ PARQUEADO em 2026-09-03, com gatilho — ver `meta/analises/260903-ANALISE-canal-para-avisar-o-instalado.md` e a D-138.** O kit é *pull* e por leva; entre levas os projetos reresolvem o resolvido. **Aconteceu três vezes** (mapsmith 19/08, flatdrop duas vezes), e o custo dos três casos continua real. **O que a análise mudou:** a janela entre levas **é deliberada** — o dono a declarou no turno em que a análise foi entregue, e a razão é evitar que o mesmo projeto pague quatro merges numa semana. Parte do custo é, portanto, **preço escolhido de uma economia**, não sintoma de defeito, e este item deixa de ser «o de maior custo acumulado» sem que nenhum dos fatos medidos mude. As duas peças recomendadas ficam **desenhadas e não aplicadas**: a lista «já corrigido» no manifesto do pacote (custo de teto **zero**) e o gatilho no receptor (custo de teto não medido — é a peça cara, e é a que o dono recusa por ora, com razão pelo que se sabe hoje). *Gatilho de volta, mais alto que o anterior de propósito: **um projeto instalado pagar uma WO** por defeito que o kit já corrigiu — trabalho executado, não item de feedback. O gatilho antigo já disparou e foi ele que produziu a análise; repeti-lo reabriria a frente pelo mesmo custo que o dono decidiu pagar.*
2. **Terceiro veredito na tabela de revogações:** «fica, com o vocabulário trocado». Hoje só há «sai» e «fica», e o `satelite-web` quase apagou uma proibição boa porque só o nome do artefato tinha envelhecido.
3. **Hierarquia de conferência no modelo de WO** (carta 02 do satelite-web, 28/08): **comparação medida > piso > absoluto previsto**. Medido lá: o assistente errou **as três** vezes em que cravou um número, e a causa é estrutural — quem escreve a WO não tem o arquivo à mão para contar.
4. **«Rede de segurança que já está vermelha não é rede»** (mesma carta): verificação com ruído de fundo precisa de **baseline declarado** e relato por **delta**, ou vira teatro.
5. **`pasta/` × `pasta/*` no `.flatdropignore`:** o kit documenta a forma certa e **não verifica**.
6. **Protocolo de entrega incremental** (DEC-034 do satelite-web, junho): quando a entrega acrescenta a algo que o usuário **já aplicou**, o delta vai em arquivo separado com ordem declarada. O kit distingue «doc inteiro» de «WO» e não trata esse terceiro caso.
7. **Reconstruir as 18 versões perdidas do CHANGELOG** (`i-N59`) — dívida com fonte disponível (D-115 a D-134), sem gatilho natural.
8. **Do FlatDrop, prometidos para a carta 06:** extrair a âncora do arquivo por script, e a âncora cobrir tudo o que o texto novo torna redundante.

## 🌱 Fase 7 — Novas capacidades (IDEAS a maturar)
- **Guias/tutoriais/wikis** (i-N14): nicho "Aprendizado/Guia" (trilhas, fontes/cursos verificados, progresso, glossário) — começar como nicho dentro do kit; virar ferramenta dedicada só se o fluxo pedir. Conecta a "Educação" (NICHOS-CANDIDATOS, nº1). Exige rigor de fonte (casa com i-N17).
- *(Nota de 2026-09-02: **parcialmente superado pelos fatos** — o **ASU** cobre a aplicação de patches e o **FlatDrop** cobre o transporte, os dois como ferramentas externas já em uso. O que sobra da i-N15/i-N16 é o modo «auto» **dentro** do kit, que continua sem dono.)*
- **Auto-aplicação de patches** (i-N15) + **entrega por diff** (i-N16): ferramenta externa (projeto do usuário) que aplica patches que o Claude gera; no kit, um modo "auto" que faz o Claude **entregar diffs** (em vez de arquivos inteiros) quando há a ferramenta que aplica — economiza output tokens. Avaliar formato (apply_patch vs unified diff) e segurança (âncoras/validação). Reconciliar com a regra "arquivo inteiro" (só vale diff quando algo aplica automaticamente, não o usuário colando à mão).
- **Comando/template de feedback** (i-N21 — **✅ fechada, D-022**): no piloto, gatilho leve grava em «Feedback para o Kit» (no IDEAS do piloto), **incluindo desvios estruturais** (diretriz nova no CLAUDE do piloto, `.md` novo, template alterado/dispensado); o usuário transporta a seção; o kit **triagem em 3 destinos** (absorver no template base / módulo opcional do grupo / específico do projeto). **Sem pré-aprovação** do kit para o piloto criar `.md`. Vira diretriz do item 1 da Fase 3.
- **Estrutura flexível / válvula de desvio registrado** (i-N22 — **✅ texto aprovado, D-022**): "templates são ponto de partida, não contrato; adapte e **registre** o desvio (DECISIONS + Feedback para o Kit); desviar sem registrar é o erro". O cardápio curado de módulos por grupo vira evolução de médio prazo alimentada pelos desvios. Risco medido continua valendo: doc gerado por LLM piorou sucesso em 5/8 cenários por duplicação — manter a trava "não duplicar o que a estrutura cobre".
- **Protocolo multi-projeto** (i-N24): 4 projetos do kit para o mesmo jogo (game design, pixel art, enredo, música) precisam de sincronismo entre frentes (ex.: estado "aguardando design"). Candidatos do mais barato ao mais caro: convenção de estado + bloco "Dependências entre frentes" no STATUS; bloco de handoff padronizado; projeto-hub (provável exagero). Esperar a dor concreta dos pilotos.

## 🔭 Futuro (adiado de propósito)
- **Nichos novos** (NICHOS-CANDIDATOS.md): Educação & Cursos (nº1), depois Desenvolvimento Pessoal/Journaling (sensível), Jurídico/Podcast/Tradução.
- **spec-kit para dev/game** (i-N7): quando houver mais feedback de uso — análise do que do Spec-Driven Development melhora os processos desses nichos.
- **Evoluções de polish** (do CHANGELOG "possíveis v1.1/v1.2"): export/import de preset em JSON (i11), tema claro (i9), tradução EN (i10), PDF dos templates (i13), drag-and-drop no Custom (i20), carimbo de versão nos downloads (i-N10). Nada prometido.

---

## O que esta revisão ensina sobre o próprio ROADMAP

Ficar **88 versões** sem revisão não foi esquecimento: é que **nada obrigava**. O `STATUS.md` é conferido a cada fecho, o `DECISIONS.md` cresce por WO, o `CHANGELOG.md` ganhou um check na v1.122.0 — e o ROADMAP não tinha nem ritual nem check. O resultado é o previsível: descrevia como «próxima entrega» algo entregue há 87 versões, e não tinha lugar para a fase em que o kit realmente estava.

**Isto não vira check.** Roadmap desatualizado não é regressão de comportamento, e um check que exija revisão a cada N versões vira ritual sem conteúdo. O que vira gatilho é outra coisa: **quando uma leva criar uma frente que o ROADMAP não tem, o ROADMAP entra na mesma leva.** Foi o que a Fase 6 mostrou.

**E uma armadilha desta própria revisão, registrada para não voltar:** a primeira versão dela foi escrita como **reescrita** e comprimiu os blocos ✅ — 30 referências (D-001, D-012, FIX-001…, i-N10, v1.21.0…) desapareceram. O dono pegou pelo tamanho do arquivo. **Revisão de doc histórico é acréscimo e requalificação, nunca reescrita:** o que já está concluído não se resume, porque é justamente o registro que impede uma ideia velha de voltar como nova.
