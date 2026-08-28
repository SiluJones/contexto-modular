# ROADMAP — Kit de Contexto Universal

> Plano deliberado de evolução, em fases. Opcional por natureza (nem todo projeto tem direção de médio prazo) — aqui vale porque há decisões grandes em aberto. O que já foi feito fica registrado para não voltar como ideia nova.

> **Criado em 2026-06-07.** Primeira versão. Consolida o que já foi feito (Fases 0–2) e organiza o que está por decidir/fazer.

> **Mudanças nesta revisão (v1.121.0 → entra na v1.122.0):** **revisão de defasagem.** A última nota de revisão deste arquivo era da **v1.34.0** — **87 versões atrás**. Neste intervalo o kit fez três coisas grandes que o ROADMAP descrevia como futuro e uma que ele nem previa. Consertado: a Fase 4 fecha, a «Próxima entrega — Modo Code» sai (entregue na v1.35.0 e madura desde então), nasce a **Fase 6 — Toolchain e protocolo entre projetos**, que é onde o kit realmente esteve das v1.60 às v1.122, e a Fase 3 é reescrita contra o que foi medido. **Cada linha abaixo foi conferida contra o repositório ou o CHANGELOG; o que não pôde ser conferido está marcado como tal.** Ver `i-N59` sobre o buraco no CHANGELOG.

> **Mudanças nas revisões anteriores:** v1.34.0 (refator modular concluído, D-028) · v1.33.0 (códigos de área do HUB) · v1.32.0 (HUB absorve o CANON.md) · v1.31.0 (construtora do HUB) · v1.30.0 (HUB como switch + Instruções enxutas) · v1.29.0 («o kit desenvolve», fase 1) · v1.28.0 (lote D-022 + D-018) · v1.27.1 (FIX-004) · v1.27.0 (P12 propagado, P13 criado). *O histórico completo está no `CHANGELOG.md`; estas notas ficam só como marcas de quando o plano mudou.*

---

## ✅ Fase 0 — MVP + fundação (CONCLUÍDA)
- 18 nichos em página única (v1.0.0); heros distintos; Custom como construtor real; theming por CSS vars; persistência em localStorage.
- Fundação transversal: princípios universais (hoje **13**, com P12/P13 — v1.27.0), CLAUDE.md separado das Instruções, filosofia rolante/estável/criativo.

## ✅ Fase 1 — Refinamento área por área (CONCLUÍDA)
- Os 16 nichos de conteúdo reconstruídos no "padrão de ouro", cada um com pesquisa de domínio própria (D-013; v1.5.0–v1.18.0).
- Transversais: afixo de download (v1.9.0), seletor de SO (v1.11.0), commit ao final (v1.19.0), privacidade (v1.20.0).
- Achados de ambiente: D-015 a D-018 (mount só por upload direto, não pelo conector do GitHub).

## ✅ Fase 2 — Custom Inteligente → Custom unificado (CONCLUÍDA)
- Composição assistida, fluxo de preset, unificação num só card `custom` com granularidade por nicho — v1.24.0–v1.26.0.

---

## ▶ Fase 3 — Higiene & consistência (EM ANDAMENTO — o que sobrou é cosmético)

**Conferido em 2026-08-28.** Dos quatro itens que a revisão v1.34.0 listava como restantes, **um foi feito e três continuam abertos** — e os três são de doc, não de código.

1. ~~**Estender o padrão "desenvolve" (D-023)** a HQ/RPG/animação~~ — **conferir antes de reabrir.** Não foi possível datar pelo CHANGELOG (ver `i-N59`); os módulos dos três nichos existem em `src/niches/`. *Marcado como não apurado, não como pendente.*
2. **README/PLANNING:** reescrever refletindo "o kit desenvolve". **ABERTO** — e agora com mais motivo: os dois docs também não conhecem o toolchain da Fase 6.
3. **Aplicar o lote de feedback dos pilotos** (i-N23: paleta global × bioma no ESTILO, prioridade visual interna no SPRITES, efeitos especiais no ANIMACAO). **ABERTO, sem gatilho** — os pilotos que gerariam o feedback são de nicho criativo, e a atenção do kit está no toolchain desde junho. *Ou ganha gatilho, ou vira descarte declarado.*
4. **Cosméticos:** `MAPA.md` (contagem de nichos), reagrupar `narrative`, revisar `README`/`PLANNING`. **ABERTO.**

## ✅ Fase 4 — Arquitetura (CONCLUÍDA)
- **Modular (v1.34.0, D-028):** `index.html` gerado de `src/index.template.html` + 18 módulos `src/niches/*.js` via `build.js`. Em uso desde então, sem regressão.
- **i18n / idioma misto (i-N26): DESCARTADO por inação, e agora está dito.** A revisão v1.34.0 o deixou "em avaliação". **Medido: `i18n` tem zero ocorrências no gerador**, e nenhuma das 87 versões seguintes o tocou. Não é pendência silenciosa — é uma frente que o projeto não escolheu. *Se voltar, volta como ideia nova, com o custo remedido.*

## ✅ Fase 5 — Modo Code (CONCLUÍDA e madura)

> Esta fase estava escrita como **"Próxima entrega"** desde junho. Ela foi entregue na **v1.35.0** e evoluiu por dezenas de versões. Manter como futuro era o item mais desatualizado do arquivo.

- **Switch «Modo Code» (v1.35.0):** gera o kit de arranque para desenvolver no Claude Code — `CLAUDE.md` raiz, `.claude/settings.json`, e as skills `apply-wo` e `wrap`.
- **Evolução medida:** `.gitignore`/README no perfil dev (v1.43.0) · controle de skills movido para o builder (v1.51.0) · `spec` vira **Work Order** no vocabulário (v1.76.0) · análise antes do compromisso (v1.85.0) · relatório do Code em arquivo (v1.95.0).
- **Em produção em três projetos** (satelite-web, mapsmith, flatdrop), e é de lá que vem a maior parte do feedback que o kit consome hoje.
- **Decisões de arranque de 2026-06-21 estão todas resolvidas** — não são mais backlog.

## ▶ Fase 6 — Toolchain e protocolo entre projetos (EM ANDAMENTO — é aqui que o kit está)

> **Fase nova, criada nesta revisão.** Não é trabalho novo: é o reconhecimento de onde o kit esteve das **v1.60 às v1.122**. O ROADMAP não tinha lugar para ela, e por isso a maior parte do esforço recente não aparecia em plano nenhum.

**✅ Entregue:**
- **Modo Atualização / `template-update`** (v1.60.0 em diante): `buildUpdatePack` gera o pacote achatado + afixado + manifesto, com natureza declarada por arquivo (`template` · `fusao` · `modelo-em-espera`), **linhas revogadas** (o merge não acha sozinho) e **carimbo de modos**.
- **Protocolo de correspondência entre projetos** (D-123): `AAMMDD-<quem>-para-<quem>-NN-<assunto>.md`, contador compartilhado, correspondência **fora do repositório**, o que fica pendente do outro lado vira item com gatilho do nosso.
- **Medição delegada** (v1.100.0, D-113): quem tem o disco mede, quem tem o contexto decide.
- **A família da afirmação verificável** (v1.120.0–v1.122.0, D-135 a D-137): P8 tipado em quatro espécies, «Âncoras lidas em» com recusa por quem aplica, Arquivar/Manter exaustivo com terceiro estado, relatório com resultado real e reabertura, os dois carimbos decidíveis.
- **Ciclo de feedback vivo:** três projetos instalados devolvendo crítica ao kit, com os itens registrados em `IDEAS.md` › «📮 Feedback para o Kit».

**▶ Aberto, na ordem que a evidência sugere:**
1. **Canal para avisar um instalado de que algo já foi corrigido.** O kit é *pull* e por leva; entre levas os projetos reresolvem o resolvido. **Já aconteceu três vezes** (mapsmith 19/08, flatdrop duas vezes). É o item de maior custo acumulado e não tem desenho ainda.
2. **A tabela de revogações precisa de um terceiro veredito:** «fica, com o vocabulário trocado». Hoje só tem «sai» e «fica», e o satelite-web quase apagou uma proibição boa porque só o nome do artefato tinha envelhecido.
3. **`pasta/` × `pasta/*` no `.flatdropignore`:** o kit documenta a forma certa e **não verifica**. Quem lê a regra certa não reconhece a errada quando a vê.
4. **Protocolo de entrega incremental** (DEC-034 do satelite-web, junho): quando a entrega acrescenta a algo que o usuário **já aplicou**, o delta vai em arquivo separado com ordem declarada. O kit distingue «doc inteiro» de «WO» e não trata esse terceiro caso.
5. **Reconstruir as 18 versões perdidas do CHANGELOG** (`i-N59`) — dívida com fonte disponível, sem gatilho natural.
6. **Do FlatDrop, prometidos para a carta 06:** extrair a âncora do arquivo por script, e a âncora cobrir tudo o que o texto novo torna redundante.

## 🌱 Fase 7 — Novas capacidades (IDEAS a maturar)
- **Guias/tutoriais/wikis** (i-N14): nicho "Aprendizado/Guia".
- **Auto-aplicação de patches** (i-N15) + **entrega por diff** (i-N16). *Nota de 2026-08-28: parcialmente superado pelos fatos — o **ASU** cobre a aplicação de patches e o **FlatDrop** cobre o transporte. O que sobra da i-N15/i-N16 é o modo "auto" **dentro** do kit, que continua sem dono.*
- **Protocolo multi-projeto** (i-N24): sincronismo entre frentes do mesmo grupo. *O HUB compartilhado cobre a parte de estado; o que falta é o sincronismo ativo.*
- ~~Comando/template de feedback (i-N21)~~ e ~~estrutura flexível (i-N22)~~ — **fechadas na D-022**, ficam aqui só como registro.

## 🔭 Futuro (adiado de propósito)
- **Nichos novos** (`NICHOS-CANDIDATOS.md`): Educação & Cursos (nº 1), depois Desenvolvimento Pessoal/Journaling (sensível), Jurídico/Podcast/Tradução.
- **spec-kit para dev/game** (i-N7): quando houver mais feedback de uso.
- **Polish:** export/import de preset em JSON, tema claro, tradução EN, PDF dos templates, drag-and-drop.

---

## O que esta revisão ensina sobre o próprio ROADMAP

Ficar **87 versões** sem revisão não foi esquecimento: é que **nada obrigava**. O `STATUS.md` é conferido a cada fecho, o `DECISIONS.md` cresce por WO, o `CHANGELOG.md` tem um check — e o ROADMAP não tinha nem ritual nem check. O resultado é o previsível: ele descrevia como "próxima entrega" algo entregue há 86 versões e não tinha lugar para a fase em que o kit realmente estava.

**Isto não vira check.** Roadmap desatualizado não é regressão de comportamento, e um check que exija revisão a cada N versões vira ritual sem conteúdo. O que vira gatilho é outra coisa, e fica registrado aqui: **quando uma leva criar uma frente que o ROADMAP não tem, o ROADMAP entra na mesma leva.** Foi o que a Fase 6 mostrou — ela existia em oito decisões antes de existir em qualquer plano.
