# Decisions — Kit de Contexto Universal

> Decisões formais com racional. Não apague — marque como superada se mudar.

---

## D-001 — Página única HTML autossuficiente, sem build
**Data:** durante o planejamento inicial
**Contexto:** o kit precisava ser hospedável e usável sem dor.
**Opções consideradas:**
- A) HTML único com tudo embutido — sem build, sem deps
- B) Stack React + build (Vite/Next) com componentes
- C) Stack vanilla + módulos JS separados servidos por servidor

**Decisão:** A — HTML único.

**Racional:** o kit é distribuído via GitHub Pages (estático). Build complica o deploy, adiciona ciclo dev. Componentes ajudariam manutenção, mas o ganho não compensa o custo. Vanilla com `<script>` único é o caminho mais honesto para o problema.

**Consequências previstas:**
- O arquivo cresce (~285KB ao fim) — aceitável.
- Refator se complica — mas o kit é pequeno o suficiente.

**Status:** ativa.

---

## D-002 — 17 nichos profundos + 1 custom
**Data:** durante o planejamento de cobertura
**Contexto:** quantos nichos prontos colocar?
**Opções consideradas:**
- A) 4-6 nichos super profundos
- B) 30+ nichos rasos cobrindo tudo
- C) 17 profundos + 1 construtor real (Custom)

**Decisão:** C.

**Racional:** profundidade > cobertura. Mas extensibilidade real importa para quem está fora do catálogo. Custom não como vazio cinza, mas como construtor de verdade.

**Consequências previstas:**
- Mais trabalho de produção de templates.
- Risco de algum nicho ficar raso por descuido — mitigado por revisão sistemática.

**Status:** ativa.

---

## D-003 — Hero distinto por nicho (não só cor)
**Data:** durante design do produto
**Contexto:** como diferenciar nichos visualmente sem ser cosmético?
**Opções consideradas:**
- A) Mesma estrutura, só troca de cor da paleta
- B) Variação de fonte por grupo, mantendo layout
- C) Hero block visualmente distinto na Home de cada nicho

**Decisão:** C, somado a B.

**Racional:** o domínio do usuário tem que aparecer no produto. Terminal para Dev faz sentir o terminal. Postits para Brainstorm. Scroll medieval para RPG. Não é decoração — é tom comunicado pelo visual.

**Consequências previstas:**
- 18 layouts de hero para fazer e manter.
- Risco de inconsistência — mitigado pela base CSS comum.

**Status:** ativa.

---

## D-004 — Templates com nomes profissionais
**Data:** durante produção dos templates
**Contexto:** evitar nomes infantis tipo "DEFINITIVO" ou "APRIMORADO".
**Decisão:** o nome do template é a função do arquivo. Padronização: `MAIÚSCULAS.md`. Sem qualificadores opinativos.

**Racional:** o usuário é adulto, sabe o que está baixando. Nome do arquivo é informação, não autopromoção.

**Status:** ativa.

---

## D-005 — Custom como construtor real
**Data:** durante design do nicho Custom
**Contexto:** o Custom virou esqueleto vazio na primeira versão. Insuficiente.
**Decisão:** Custom é um construtor com formulário. Define identidade, arquivos, comportamentos, prompts. Salva preset em `localStorage`.

**Racional:** extensibilidade verdadeira. Quem está fora dos 17 prontos consegue ter algo seu, e voltar a usar.

**Consequências previstas:**
- Lógica extra significativa no JS.
- UI específica do Custom.

**Status:** ativa.

---

## D-006 — Meta-doc em `meta/` usando estrutura do nicho Brainstorm
**Data:** durante consolidação do projeto
**Contexto:** o próprio kit é projeto que precisa de contexto. Como documentar?
**Opções consideradas:**
- A) `README.md` extenso, sem mais nada
- B) Pasta `docs/` com convenção própria
- C) Pasta `meta/` usando exatamente a estrutura do nicho Brainstorm

**Decisão:** C.

**Racional:** auto-referência. O kit aplicado a si mesmo. Funciona como prova de fogo do nicho Brainstorm e como demonstração de uso real. Os arquivos `TEMA.md`, `IDEAS.md`, `MAPA.md`, `FILTROS.md`, `STATUS.md`, `CHANGELOG.md`, `LOG-TEMPLATE.md` são exatamente os que o nicho Brainstorm gera.

**Status:** ativa.

---

## D-007 — A-F universais imutáveis; G+ específicos por nicho
**Data:** durante design dos prompts
**Contexto:** os prompts deveriam variar muito por nicho?
**Decisão:** o ciclo de vida de um projeto (setup, sessão início, sessão fim, migração) é o mesmo em todo domínio. A-F cobrem isso e ficam universais. Cada nicho adiciona G+ para tarefas só dele.

**Racional:** evita reescrever a mesma coisa 18 vezes e cria uma "gramática" comum que o usuário internaliza uma vez.

**Status:** ativa.

---

## D-008 — Theming via CSS variables + `[data-niche]`
**Data:** durante implementação
**Contexto:** como trocar cores e fontes sem repintar tudo via JS?
**Decisão:** definir todas as cores e famílias de fonte como CSS variables, sobrescritas por atributos `[data-niche]` e `[data-group]` no `<html>`.

**Racional:** o CSS faz o trabalho. JS só seta o atributo. Performance e simplicidade.

**Status:** ativa.

---

## D-009 — Persistência em `localStorage`, não servidor
**Data:** sempre foi assim
**Contexto:** onde guardar configurações e presets Custom?
**Decisão:** `localStorage`. Tudo local ao navegador do usuário.

**Racional:** privacidade absoluta + nenhuma infraestrutura. Custo zero, zero pegada.

**Consequências previstas:**
- Não funciona entre dispositivos sem exportar/importar manualmente.
- Não funciona em modo anônimo (limpa ao fechar).

**Status:** ativa. Possível complementar com export/import JSON em v1.1.

---

## D-010 — JSZip carregado via CDN sob demanda
**Data:** durante implementação dos downloads
**Contexto:** baixar templates em ZIP precisa de uma lib.
**Decisão:** JSZip carregado por CDN só quando o usuário clica em "baixar ZIP".

**Racional:** evita bloat na primeira carga. 99% dos usos do kit não precisam de ZIP.

**Status:** ativa.

---

## D-011 — Nichos sensíveis (saúde, finanças, direito) ficam fora dos prontos
**Data:** durante decisão de cobertura
**Contexto:** valeria ter um nicho de saúde, direito, finanças?
**Decisão:** não, ficam só como caso de uso de Custom.

**Racional:** são territórios onde um template pronto pode ser confundido com conselho profissional. Prefiro não dar essa abertura. Quem precisa, constrói no Custom — assume autoria, assume responsabilidade.

**Status:** ativa.

---

## D-012 — Fundação transversal: 6 princípios, CLAUDE.md separado, higiene

**Data:** 2026-05-29
**Status:** aceita
**Autor:** ambos (feedback do Claude/GameDataHub + análise + decisão do usuário)

### Contexto
Após o MVP (17 nichos + custom), o usuário trouxe o feedback massivo que um Claude gerou no projeto real GameDataHub (nicho dev), além de materiais de uso real do nicho design/cliente. Esse feedback evoluiu a estrutura de docs muito além do que o kit gerava: CLAUDE.md separado, princípio anti-concordância-automática, princípio anti-desperdício-de-tokens, filosofia rolante/estável/cresce com regras de higiene, ROADMAP/GLOSSARY, tabela de gatilhos. Decidiu-se refinar área por área; esta é a Etapa 0 (fundação), antes de tocar nos nichos um a um.

### Decisão
1. **Adicionar 2 princípios universais** (total 6): «Analisa antes de aceitar» e «Não desperdiça tokens». Os 4 antigos (direto, incerteza, trade-offs, captura ideias) foram reescritos mais ricos.
2. **Gerar CLAUDE.md** como artefato separado das Instruções, com toggle de abas. Instruções = núcleo denso (lido em todo turno); CLAUDE.md = comportamento completo (subido como arquivo, versionável).
3. **Estruturas base**: filosofia de arquivos, regras de higiene, tabela de gatilhos — refletidas no CLAUDE.md gerado.

### Alternativas consideradas
- **Fundir CLAUDE.md dentro das Instruções (como era)** — rejeitada: as Instruções são lidas em toda mensagem e ficariam caras/longas; e não dá para versionar/atualizar separado.
- **Só CLAUDE.md, sem núcleo nas Instruções** — rejeitada: arquivos de conhecimento podem não ser carregados (RAG sob demanda); o essencial precisa estar nas Instruções, que são garantidamente lidas.
- **Refazer todos os 18 nichos de uma vez** — rejeitada (foi justamente o erro de método do MVP): espalha o esforço, deixa cada nicho raso. Fundação primeiro, depois um nicho por vez.

### Fundamento técnico (pesquisa 2026-05-29)
- Instruções do Projeto: lidas inteiras em cada mensagem ("função em hot loop"); cada token custa para sempre.
- Project knowledge: usa RAG nos planos pagos (só carrega o relevante quando o acervo é grande); quando pequeno, entra inteiro. Fácil de atualizar trocando o arquivo.
- Conclusão: especialização, não redundância. Núcleo curto + arquivo completo.

### Definição de arquivos: núcleo + opcionais
- **Núcleo (7):** CLAUDE, CONTEXT, STATUS, DECISIONS, IDEAS, CHANGELOG, LOG-TEMPLATE.
- **Opcionais (3):** ROADMAP, GLOSSARY, BRIEFING/continuidade.
- Por que não fundir ROADMAP no IDEAS/STATUS: horizontes temporais distintos (plano em fases vs. brainstorm vs. agora). Fundir recriaria fonte-de-verdade-dupla. Mas como nem todo projeto tem plano de fases, ROADMAP é opcional.

### Consequências
- **Positivas:** comportamento do kit alinhado ao que o uso real provou ser superior; Instruções mais baratas em token; CLAUDE.md versionável; base pronta para aprofundar cada nicho.
- **Negativas:** mais um artefato para o usuário subir (CLAUDE.md) — mitigado: ctrl+A + arrastar resolve, e o ganho de qualidade compensa.
- **Pendente:** os nichos individuais ainda não foram aprofundados (Etapa 1+). A fundação prepara a máquina; cada nicho será lapidado com seu próprio feedback ao longo do tempo.

### Sobre a feature nativa "Pesquisar e referenciar conversas" (Opus 4.8)
Levantado pelo usuário. Análise: a feature cobre continuidade entre conversas suas, mas é sob demanda e por busca, limitada ao projeto, não persistente. O kit mantém diferencial em: portabilidade (arquivos vão pro Git, funcionam em qualquer conta), estrutura deliberada (decisão/ideia/estado separados), e controle do que entra no contexto. Vale continuar lapidando.

---

## D-013 — Refinamento área por área concluído: os 16 nichos no padrão de ouro

**Data:** 2026-05-30 · **Status:** marco atingido

### A decisão / o marco
Encerrar a fase de refinamento nicho por nicho. Os 16 nichos de conteúdo (8 sérios + 8 criativos) foram reconstruídos no padrão de ouro, cada um a partir de pesquisa de domínio própria (com citações), não só do feedback ou de conversas anteriores.

### Como foi conduzido
Ritual consistente por nicho: estudar o nicho atual + pesquisa web aprofundada do domínio (2-4 buscas) → projetar (núcleo enxuto + opcionais, behaviors derivados da pesquisa, prompts G-L das tarefas reais) → construir isolado em /home/claude → validar (node --check + balanceamento de tags + jsdom 17/17) → publicar + CHANGELOG/STATUS → commit no formato CMD Windows. Nunca publicado sem 17/17 nichos e 0 erros.

### Padrões que emergiram
- **Sérios:** ênfase em decisão/risco/premissa/método (dev, business, product, research...) com o arquivo-âncora guardando o "porquê".
- **Criativos:** ênfase em "explora/critica/orienta — o criador executa/decide". E, num subgrupo, o reconhecimento honesto dos limites do assistente como traço de design: music ("não ouço áudio"), cuisine ("não cozinho nem provo"), pixel/animation/comics ("não desenho/animo"). O assistente dá a leitura técnica; o sentido humano (ouvido, paladar, olho) decide.
- **brainstorm (o fechamento):** o nicho do próprio kit. Behavior-assinatura "espelho e contraponto, não eco" (anti-sycophancy) — fechando o sentido de toda a ferramenta: pensar COM a IA, não deixar a IA pensar por você.

### O que fica
- Funcionalidades transversais acumuladas: afixo nos downloads, seletor de SO, fix dos selects do topbar, fundação de 9 princípios, CLAUDE.md separado das Instruções.
- Pendências de consolidação (não-nicho): revisar README/PLANNING, revisar qualidade das Instruções geradas, i-N3 parte A (canal de atualização), i-N2 (dados pessoais), reagrupar narrative.
- custom permanece como gerador (sem aprofundamento, por design).

### Negativas / a vigiar
- Cada nicho foi lapidado com pesquisa, mas ainda não com uso real extenso. O refino verdadeiro continua com o feedback de quem usar cada um (como já previsto para game). Padrão de ouro é piso, não teto.

---

## D-014 — Arquitetura do Custom Inteligente: composição assistida, não fusão automática

**Data:** 2026-06-02 · **Status:** aprovada (a implementar)

### A decisão
Adicionar um SEGUNDO nicho de construção — o **Custom Inteligente** — mantendo o custom atual como **"Blank"** (página em branco, poder total). O Custom Inteligente compõe um nicho novo a partir da SELEÇÃO de nichos existentes, por **concatenação assistida e revisável** — NÃO por fusão automática opaca.

### Por que (o racional)
- O usuário testou o custom atual e o achou intimidante: é um formulário em branco, sem nenhum mecanismo de herdar templates/behaviors de outros nichos. Ele queria "apertar em mais de um nicho e as características se incorporarem".
- Pesquisa do padrão (presets/composição) e a lição do GitHub spec-kit: **"full replacement over inheritance — herança é complexa e frágil; composição deve ser explícita e revisável"**. Arrays concatenam (não se fundem mágico); conflitos precisam de detecção.
- Fusão automática geraria "Frankenstein" incoerente (4 STATUS.md, behaviors contraditórios). O usuário concordou em NÃO fazer o automático perigoso.

### Como (a estrutura aprovada)
1. **2 nichos de construção, não 3** (mais limpo): Custom (Blank) + Custom Inteligente.
2. Custom Inteligente abre com chips dos 16 nichos. Marcar importa o material (concatena contextFiles + behaviors + promptsExtra), editável.
3. **Dedup visível** dos arquivos repetidos (STATUS/LOG que todos têm) e behaviors parecidos.
4. **Sub-painel = granularidade, não mecânica nova:** "importar nicho inteiro" vs. "escolher peças item a item". Botão "escolher peças" por nicho. NÃO é uma terceira opção.
5. **Checagem de conflito (spec-kit-inspired):** avisar sobre behaviors contraditórios; sinalizar, não bloquear.
6. Cai no motor existente (mergeCustom + presets em localStorage).

### Alternativas consideradas
- **Fusão automática** — rejeitada (risco de Frankenstein; o usuário concordou).
- **Terceira opção separada para o sub-painel** — rejeitada (é só granularidade do mesmo fluxo; botão a mais bastaria).

### Risco / como saberemos
Baixo-médio. UI nova sobre motor existente. Fazer por partes (importação+dedup → sub-painel → checagem de conflito), validando jsdom 17/17 a cada passo. Sinal de sucesso: usuário consegue montar um nicho "dev + pixel" (caso real dele: ferramentas de Aseprite) sem recriar tudo do zero.

### Contexto de uso que motivou (do usuário)
Ele está fazendo ferramentas reais que se encaixam em **dev** como base, algumas com tempero de outro domínio: plugin de Figma (dev), assets Unity/Godot (dev, ou dev+game), plugins/extensão/script de Aseprite para pixel art em massa/procedural (dev + pixel — o caso perfeito para o Custom Inteligente), geração procedural de molduras/bordas (dev + pixel/design).

---

## D-015 — Protocolo de transferência entre conversas (contexto vs. RAG) — transversal

**Data:** 2026-06-03 · **Status:** aceita e implementada (v1.21.0)

### Contexto
O usuário levantou — com razão — uma lacuna grave de conhecimento que afetava o uso real do kit (e de qualquer projeto dele no Claude.ai): **não estava claro o que acontece com os arquivos quando se transfere um projeto para uma conversa nova.** A confusão concreta:
- Ele confiou que "o GitHub / os arquivos do Projeto" dariam continuidade 100% e que o assistente poderia editar o código a partir deles. Em projetos grandes isso NÃO é verdade.
- Risco real: alguns projetos dele podem ter sido corrompidos ao transferir confiando cegamente nos arquivos do Projeto em modo de busca (o assistente teria editado a partir de fragmentos).

### Fundamento técnico (pesquisa 2026-06-03, docs oficiais + práticas profissionais)
- **Conhecimento do Projeto tem dois modos automáticos** (Claude Help Center): *in-context* quando o total cabe na janela (arquivos INTEIROS, editáveis com fidelidade) e *RAG / "Modo de pesquisa"* quando o total se aproxima do limite (só FRAGMENTOS recuperados por relevância; capacidade expande ~10x). Há indicador visível na tela do Projeto. Volta a in-context se o conteúdo encolher.
- **Sincronização do GitHub é manual** ("Sync now"), só puxa nome+conteúdo do branch (sem histórico/PRs), e há relatos de quebrar silenciosamente — logo, o que está no GitHub pode estar atrasado em relação à cópia local; upload direto é mais fresco.
- **Anexo de conversa** é por sessão (não passa para a próxima), ocupa contexto a cada turno (custa token) e dá fidelidade total. Um arquivo gerado pelo próprio assistente dentro da conversa tem a mesma fidelidade pelo mesmo motivo (entra no histórico). Por isso a conversa original de desenvolvimento mantinha o index fiel sem anexar — ele nasceu ali.
- **Contexto não passa entre conversas a menos que esteja no conhecimento do Projeto** — continuidade de verdade exige o Projeto; o anexo é fidelidade na sessão ativa.
- **Enquadramento profissional** (context engineering 2025/26): a janela de contexto é como RAM (rápida, finita, zerada por sessão); arquivos externos são o disco (grandes, mas exigem recuperação). O método robusto de handoff é a "sumarização iterativa ancorada" (um doc de estado — intenção/decisões/ações/próximos passos — sempre atualizado) — que é o papel do nosso STATUS.

### Decisão
Adicionar um protocolo **transversal** (no `UPDATE_PROTOCOL`, portanto no CLAUDE.md de TODOS os nichos) e ensinar o usuário na própria UI:
1. **Seção "Transferência entre conversas"** no CLAUDE.md gerado, com: os dois modos; **regra dura anti-arquivo-falso** (nunca reconstruir a partir de fragmentos — pedir o anexo); onde colocar cada arquivo (leve→Projeto, preferindo upload direto; pesado/em-edição→anexo); comportamento do anexo; **handoff ao final** (dizer arquivo-por-arquivo onde colocar + montar um PROMPT DE INÍCIO); verificação de integridade.
2. **Seção "Contexto vs. RAG — e onde colocar cada arquivo"** na view *Tokens & Fluxos* (a parte que ensina o usuário), com tabela dos dois modos, regra de ouro e o enquadramento RAM/disco.

### Alternativas consideradas
- **Não documentar (deixar o usuário descobrir)** — rejeitada: foi exatamente a lacuna que pôs projetos em risco.
- **Mecanismo automático de "detectar modo e agir"** — fora de escopo do kit (o kit gera texto/instrução; quem decide o modo é o tamanho do conhecimento). Resolvido como regra de comportamento + ensino, não como código que checa o ambiente.

### Consequências
- Todos os nichos passam a instruir o assistente a fazer o handoff e a recusar reconstrução por fragmentos. Vale especialmente para dev/game (arquivos grandes).
- O usuário tem agora um critério visível (o rótulo "Modo de pesquisa") e uma regra de ouro.
- **A vigiar:** o usuário vai auditar projetos transferidos no passado para detectar corrupção por edição-via-fragmentos.

---

## D-016 — Mount + ferramenta de código no protocolo de transferência; diretrizes refinadas

**Data:** 2026-06-03 · **Status:** aceita e implementada (v1.22.0) · **parcialmente superada por D-018** (a alimentação do mount é por upload direto, NÃO pelo conector do GitHub)

### Contexto
Continuação da v1.21.0. Dois gatilhos do usuário: (a) ele trouxe **duas conversas** (`Tentativa_1.md` = meu raciocínio; `Analisada.md` = uma conversa de outro projeto, o de scraping) e apontou uma **divergência**: lá o assistente afirmava ler qualquer arquivo do Projeto inteiro pelo mount mesmo em RAG e "não precisar anexar"; aqui eu havia dito que o index "precisa ser anexado porque está em RAG". (b) Ele identificou **atrito entre diretrizes** — o "não desperdiçar tokens" empurrava o assistente a *inferir* um arquivo faltante em vez de pedir, e algumas conversas não pausavam ao receber um arquivo desatualizado, gerando arquivos inconsistentes (relato: "2 arquivos incompletos que se completavam").

### Verificação empírica (decisiva)
Rodei `ls /mnt/project/` e `cmp` nesta sessão: o `/mnt/project/` é um **mount** dos arquivos do Projeto; li o `index.html` **inteiro** (7700 linhas / 518.033 bytes, terminando em `</html>`, **byte-idêntico** ao v1.21.0) com o Projeto em **"Modo de pesquisa" (RAG)**. Logo: o RAG governa a injeção automática no chat e a busca por fragmentos; **não impede** a leitura completa pelo mount via ferramenta de código. O mount também **atualizou** no meio da conversa quando o usuário re-subiu os arquivos.

### Decisão
1. **Reconciliação (correção da v1.21.0):** o critério certo NÃO é "está em RAG?", é **"tenho o arquivo COMPLETO por algum canal?"**. Canais: Projeto in-context; **mount `/mnt/project/` (ferramenta de código) — lê inteiro mesmo em RAG**; anexo; ou gerado na conversa. Corrigida a seção de transferência (handoffComo) e a tela "Tokens & Fluxos", que conflavam os mecanismos.
2. **Caminho limpo para projetos com código/repo:** tudo no Projeto + ferramenta de código ligada → leitura/edição pelo mount, sem anexar. **Ritual de início** confere o mount; se faltar, o assistente pede para ligar a ferramenta antes de trabalhar. Multi-pasta (Next/Svelte): grosso no Projeto/mount, anexar só o arquivo da tarefa; limite de anexos **sem número fixo** (regra robusta independe do número exato, que já mudou).
3. **Diretrizes refinadas (BEHAVIORS_BASE 9 → 11):** P2 esclarecido (token em trabalho verificável = investimento; inferir arquivo falso = desperdício maior); P3 + "sem rodeios"; P8 + anti-inferir (faz o possível e pede o resto, nunca reconstrói); **P10 Cadência** (fases auditáveis, plano no ROADMAP/IDEAS/STATUS, sem fragmentar o trivial, sem afrouxar a regra de doc completo); **P11 Não regride nem mistura versões** (pausa e avisa se o arquivo recebido estiver desatualizado vs. o que o assistente gerou, ou internamente inconsistente).

### Alternativas consideradas
- **Manter "anexar por causa do RAG"** — rejeitada: é o erro factual que esta decisão corrige (provado pela leitura do mount em RAG).
- **Forçar a ferramenta de código por prompt** — impossível: o toggle é do usuário. Resolvido como (a) lembrete no prompt de início e (b) ritual em que o assistente checa e pede para ligar.
- **Limitar a orientação a "dev lê pelo mount; chat comum anexa"** — o usuário rejeitou a limitação: quis o caminho do mount como padrão, ativável sempre, sem incomodar os nichos que não precisam. Atendido (o caminho do mount é o recomendado; o anexo é o fallback do chat comum).

### Consequências
- Transferências de projetos com código (dev/game do usuário) ficam limpas: nada de anexar a cada vez; o assistente lê tudo do mount e só pede para ligar a ferramenta se faltar.
- As diretrizes deixam de colidir: pedir arquivo necessário ≠ desperdício; o assistente para de inferir e passa a pedir; e pausa diante de versão desatualizada.
- **A vigiar:** confirmar em uso real que o ritual de checar o mount não atrita com nichos sem ferramenta de código (deve ser inócuo — cai no fallback de anexo).

---

## D-017 — Refino das diretrizes (P8/P11), handoff multi-pasta e canal de atualização

**Data:** 2026-06-03 · **Status:** aceita e implementada (v1.23.0)

### Contexto
Antes de transferir para o Custom, o usuário levantou refinamentos finos (e pediu para eu analisar/validar, podendo discordar):
1. **P11 estava bruto demais.** "Pausa e avisa se receber arquivo desatualizado" podia gerar halts desnecessários — uma conversa interromperia um trabalho no meio para pedir atualização de algo que **já tem**. O caso real: a IA tinha a versão nova; a antiga estava nos arquivos do Projeto; bastava usar a nova.
2. **"Proibir inferir" (P8) era perigoso.** Se o usuário PEDIR para inferir/extrapolar, a diretriz entraria em conflito consigo mesma e com os princípios de token/redundância.
3. **Multi-pasta:** dúvida se o certo era anexar ou pôr no Projeto; e a experiência do usuário de que arquivos de mesmo nome em pastas diferentes "se sobrepõem".
4. **Atualizar projetos que já usam o Kit** sem quebrar a estrutura que a IA montou lá; e se valeria um feedback de volta.

### Verificação empírica (sem palpite)
`find /mnt/project`: o mount está **achatado** — todos os arquivos na raiz, **sem** `meta/`/`logs/`, mesmo o repo do GitHub tendo `meta/`. O `index.html` v1.22.0 está no mount (GitHub alimentando). Com uploads diretos + GitHub **duplicados**, não dá para isolar se o GitHub achata subpastas ou se vejo o upload direto. Conclusão honesta: o achatamento que **observo** torna provável a colisão de nomes iguais; para confirmar o comportamento do GitHub-com-subpastas, é preciso um **teste limpo** (remover uploads diretos, deixar só GitHub, conversa nova, `ls -R`).

### Decisão
1. **P11 reformulado:** "usa sempre a versão mais recente que tem à vista; se a que gerou/recebeu nesta conversa for mais nova que a do Projeto/mount, usa a sua e avisa em uma linha — **sem parar**; só PARA e pede quando **não tem** a versão que a tarefa exige; nunca interrompe trabalho no meio por algo que já possui; nunca costura pedaço novo em arquivo velho". (Salvo-conduto para usar o que já tem; pare-e-peça só quando falta.)
2. **P8 escopado:** a regra é contra **inventar silenciosamente** um arquivo que deveria ter; **exceção:** inferência PEDIDA pelo usuário é permitida (transparente, como inferência). Não colide com pedido explícito nem com o P2.
3. **Handoff:** o assistente **mapeia a estrutura do mount no início** e informa o usuário (resolve o "não sei o que passar" do Svelte). Multi-pasta = tudo no Projeto/mount; anexar é último recurso; aviso sobre colisão de nomes iguais (prefixo de pasta resolve).
4. **Canal de atualização (i-N3) reforçado:** ao integrar atualização do sistema num projeto montado, preservar a estrutura existente, adaptar só o universal/transversal, e **listar o que muda antes de mudar**. **Feedback opcional** (só sob pedido) — para não sobrecarregar a conversa que recebe a atualização. O usuário prefere trazer os `.md` de feedback manualmente para cá; alinhado.

### Alternativas consideradas
- **Manter P11 "pausa se desatualizado"** — rejeitada (gera halts no meio do trabalho; o usuário apontou o risco do "monstro").
- **Manter "nunca inferir" absoluto** — rejeitada (conflita com inferência pedida).
- **Anexar arquivos multi-pasta** — rejeitada como padrão (o caminho limpo é Projeto + mount; anexo é fallback do chat sem ferramenta).
- **Relatório de feedback automático na conversa que atualiza** — rejeitada como padrão (sobrecarga); virou opcional sob pedido.

### Consequências
- As diretrizes deixam de se chocar entre si (token × pedir arquivo × inferir × versão).
- Projetos multi-pasta ficam viáveis sem o usuário saber a estrutura (a IA mapeia).
- **Pendente (teste limpo):** confirmar se o GitHub preserva subpastas no mount — exige conversa só-GitHub. Até lá, prefixo de pasta é a aposta segura para nomes iguais.

---

## D-018 — O mount `/mnt/project/` é alimentado por upload direto, NÃO pelo conector do GitHub
**Data:** 2026-06-04 · **Status:** ativa (supersede a parte de D-016 sobre alimentação do mount) · **orientação GERADA pelo kit corrigida na v1.28.0** (CLAUDE.md gerado + tela "Tokens & Fluxos": só upload direto popula o mount, achatado; conector do GitHub = só busca/RAG)

### Contexto
Desde a v1.22.0 (D-016) assumimos "tudo no Projeto + ligar a ferramenta de código → leio os arquivos inteiros pelo mount". Mas aquela verificação foi feita com **uploads diretos presentes**, confundindo a causa. D-017/v1.23.0 já anotava o mount **achatado** e recomendava um **teste limpo** (só-GitHub) para isolar.

### Experimento (controlado, dois estados — prints do usuário)
- **Estado 1 — só o conector GitHub** ("SiluJones/kit-contexto", Modo de pesquisa/RAG, 12% da capacidade): `ls -R /mnt/project/` → **VAZIO** (0 arquivos).
- **Estado 2 — uploads diretos dos `.md`** no Projeto: `/mnt/project/` → **POPULADO** (15 arquivos), **achatado** (sem subpastas, mesmo o repo do GitHub tendo `meta/`/`logs/`). Confirmado lendo o `index.html` completo (523.307 bytes) pelo mount.

### Decisão / conclusão
- O **conector do GitHub alimenta o RAG / Conhecimento do Projeto** (busca semântica funciona; os caminhos de subpasta `meta/`, `logs/` aparecem na busca) **mas NÃO alimenta o mount `/mnt/project/`**.
- **Só o upload direto** de arquivos no Projeto popula o mount — e eles chegam **achatados** (o upload não carrega estrutura de pasta).
- O **RAG não bloqueia** a leitura pelo mount: um arquivo que ESTÁ no mount é lido inteiro, RAG ou não. O que estava errado era a **inferência** de que o conector do GitHub populava o mount.

### Corrige
A conclusão de **D-016** (e as notas da v1.22.0/v1.23.0) de que "tudo no Projeto + ferramenta de código → mount". Isso vale para arquivos **subidos direto**; via conector do GitHub, eles ficam **só no RAG**. A observação empírica de D-016 (ler o index pelo mount em RAG) continua correta — mas porque o index estava lá por **upload direto**, não pelo conector.

### Consequências
- **Dogfooding:** para eu ler/editar o `index.html` (e os `.md`) pelo mount, o usuário sobe os arquivos **direto** no Projeto, sem depender do conector do GitHub. (GitHub segue ótimo para versão/hospedagem e para a busca por RAG.)
- **Colisão de nomes:** mount achatado → nomes iguais em pastas diferentes colidem; diferenciar com prefixo de pasta ou confiar no mapa que a IA faz no início.
- **Pendência gerada:** a orientação de mount/RAG/anexo **gerada pelo kit** (CLAUDE.md / tela "Tokens & Fluxos") ainda diz "tudo no Projeto + ferramenta de código → mount", impreciso para projetos conectados via GitHub — corrigir num passe dedicado (muda conteúdo em todos os nichos; re-validar 18/18). Anotado no STATUS.

### A vigiar
Se o usuário sincronizar muitos arquivos via GitHub mas precisar deles no mount, lembrar de subir direto os que serão editados/lidos inteiros.


---

## D-019 — Unificar os dois construtores num só card Custom (composição + construção na mesma tela)

**Data:** 2026-06-07 · **Status:** aceita e implementada (v1.26.0) · **supersede a parte de D-014** sobre "2 nichos de construção"

### Contexto
A D-014 definiu 2 cards de construção: `custom` (Blank) e `customSmart` (Inteligente). Em teste de navegador, o usuário apontou um atrito real: para reusar um nicho salvo ele tinha que entrar no Inteligente, marcar qualquer nicho e importar só para revelar o dropdown de presets do builder; e **não havia caminho do builder de volta para o Inteligente** a não ser sair do custom e voltar para "recarregar". Os dois construtores serem "mutuamente exclusivos em espaço" tornava o fluxo confuso.

### A decisão
**Fundir os dois construtores em UM card `custom`.** A tela do construtor passa a ter, de cima para baixo: (1) a seção "Compor a partir de nichos prontos" (os chips dos 16 nichos, antes o Inteligente) e (2) o "Custom Builder" (identidade, arquivos, comportamentos, prompts, presets). Importar pelos chips **preenche o builder na mesma tela**, sem trocar de view. O nicho `customSmart` foi removido (objeto, CSS de tema, hero, branch de roteamento, função `renderSmartCustomForm`). Contagem de nichos: **18 → 17**.

### Por que (o racional)
- Resolve o atrito apontado: composição e construção ficam juntas; some o "beco sem saída" builder→inteligente.
- "Um abaixo do outro" foi a preferência explícita do usuário (alternativa aceitável seria botões de alternância; a fusão é mais simples e definitiva).
- O Inteligente virou uma **seção** (o chip composer no topo), não um card separado — menos superfície, menos confusão.

### Como (implementação)
- `renderSmartCustomForm` → dividido em `composerSectionHTML()` (markup dos chips + granularidade) + `wireComposer()` (handlers) + `refreshComposer()` (re-render só de `#g-composer`). `renderCustomForm` passou a renderizar o composer no topo e chamar `wireComposer()`.
- `composeFromNiches(niches)` ganhou 2º parâmetro `sel` (granularidade — ver D-014 item 4, agora entregue: "escolher peças" por nicho).
- Removido tudo de `customSmart`. `getCurrentNiche` já usava `raw.isBuilder` (genérico) — sem efeito colateral.
- Testes atualizados: `validate-compose/conflict/reuse` passaram a usar `setNiche("custom")`; `validate-switch` virou "transições + coexistência (chips e builder juntos no custom)"; contagem esperada 18 → 17.

### Alternativas consideradas
- **Manter 2 cards com botões de alternância** entre eles — rejeitada: ainda são duas telas; a fusão é mais simples e elimina a navegação.
- **Manter 2 cards e só adicionar cross-links** — rejeitada pelo mesmo motivo.

### Consequências
- Fluxo do Custom muito mais direto; o atalho "Nichos salvos" na barra superior (mesma sessão) complementa o acesso a presets.
- **A vigiar:** o card único acumula muita coisa numa tela (composer + builder). Se ficar longo demais, considerar recolher o composer por padrão. Por ora, em teste, ficou aceitável.

---

## D-020 — Princípio P12: higiene ao encolher arquivos-chave

**Data:** 2026-06-07 · **Status:** aceita; **ativa para o nosso projeto**; **propagada para a ferramenta (v1.27.0)** — é o 12º item de `BEHAVIORS_BASE`

### Contexto
Ao longo do projeto, vários arquivos-chave são reescritos/encolhidos entre sessões (CONTEXT, STATUS, DECISIONS, CHANGELOG, IDEAS, ROADMAP). O risco real: uma reescrita "enxugar" e **perder conteúdo único** sem ninguém perceber. O usuário pediu uma diretriz explícita contra isso — **tanto para o nosso projeto quanto para a ferramenta** (o kit, que gera os docs de outros projetos).

### A decisão (o princípio)
> **Ao reescrever/encolher qualquer arquivo-chave (CONTEXT, STATUS, DECISIONS, CHANGELOG, IDEAS, ROADMAP), informar explicitamente o que saiu e para onde foi (ou que é redundante/obsoleto); nunca encolher sem justificar item a item, e conferir que nada único se perdeu do conjunto.**

Na prática: cada reescrita abre com uma nota "Mudanças nesta revisão" listando o que mudou/saiu/por quê (e para onde foi). É o que esta própria leva de docs faz.

### Escopo / estado
- **Nosso projeto (governança):** ativo já — registrado no CLAUDE.md (como P12 das regras de trabalho) e no CONTEXT.md. Esta entrega de docs o aplica.
- **A ferramenta (feito, v1.27.0):** virou o **12º item de `BEHAVIORS_BASE`** (id `shrink_hygiene`) no `index.html`, aparecendo no CLAUDE.md gerado de TODOS os nichos (e como bullet curto nas Instruções, via `shortDef`). Re-validado 17/17, 0 erros. Ver CHANGELOG v1.27.0.

### Relação com diretrizes existentes
Complementa P8 ("não inventa o que falta") e as regras de higiene ("DECISIONS/CHANGELOG/IDEAS só crescem"; "STATUS é só o agora"). P8 protege contra **inventar**; P12 protege contra **perder** ao encolher.

### Nota relacionada — rigor em pesquisa + refutação → **resolvida em D-021**
O usuário perguntou se já há diretriz para o Claude **pesquisar/aprender sobre a ideia ou solicitação** não só para refinar de forma profissional, mas também para **refutar e criticar** com base no sentido e na experiência de outros. Era a i-N17. **Decidida na v1.27.0 (ver D-021):** virou um princípio próprio (P13, `research_refute`), em vez de só reforçar P1/P7.

---

## D-021 — Princípio P13: pesquisa para refinar E para refutar (decide a i-N17)

**Data:** 2026-06-07 · **Status:** aceita; **propagada para a ferramenta (v1.27.0)** — é o 13º item de `BEHAVIORS_BASE`

### Contexto
Vinha da nota relacionada de D-020 e da i-N17: o usuário queria explícito o ângulo de **pesquisar a experiência de outros para refutar/criticar** uma ideia, não apenas para refiná-la. A questão a decidir era de forma, não de mérito: **reforçar P1/P7 (opção a)** ou **criar um princípio próprio (opção b)**.

### A decisão
Optou-se pela **(b) — princípio próprio, P13** (`research_refute`):

> **Pesquisa a experiência de outros (casos reais, post-mortems, críticas, convenções) não só para refinar a proposta, mas para REFUTÁ-LA quando a evidência aponta contra. Procura ativamente onde a ideia já falhou para os outros — não só o que a apoia — e traz o contraponto fundamentado na prática alheia, não apenas na própria análise. Não conclui "parece bom" sem antes confrontar a proposta com o que o mundo já tentou no assunto.**

### Racional (por que um princípio próprio, e não reforço de P1/P7)
- O ângulo cruza vários princípios sem ser nenhum: P1 é **ter posição** (analisar antes de aceitar); P7 é **estudar o domínio antes de estruturar**; P5 é **apresentar o contra-argumento**. P13 é o vetor que falta: ir **buscar fora** o contra-argumento, com lastro na experiência de terceiros — distinto de P5, que é argumentar a partir do próprio raciocínio. Diluído dentro de P1/P7, esse "ir refutar com base na prática alheia" se perde.
- Custo de errar é baixo e simétrico: se o usuário preferir a opção (a), reverter é mudança de **uma linha** (tirar o 13º item e, querendo, anexar uma frase a P7).

### Contra-argumento considerado (P5/P13 aplicados à própria decisão)
`BEHAVIORS_BASE` é a "gramática" do kit e há valor em mantê-la enxuta/conservadora — cada princípio novo é exibido no CLAUDE.md de todos os 17 nichos e compete por atenção do leitor. Um risco real de catálogos de princípios é a inflação (muitos itens → ninguém lê). Pesa contra criar P13; mas o ganho de tornar explícito um comportamento que o usuário valoriza e que hoje fica implícito superou, e a reversão é barata.

### Escopo / estado
- **A ferramenta (feito, v1.27.0):** 13º item de `BEHAVIORS_BASE` (id `research_refute`), renderizado em `buildInstr` (curto) e `buildClaudeMd` (`### N.` + def longa). Re-validado 17/17, 0 erros.
- **Nosso projeto (governança):** vale por tabela — adotamos os princípios universais do kit; registrado no CLAUDE.md/CONTEXT como P13.
- **i-N17:** marcada **concluída** em IDEAS (status muda, não apaga).

---

## D-022 — Lote de diretrizes do CLAUDE.md gerado fechado (i-N18 a i-N22): escopo e redação

**Data:** 2026-06-11 · **Status:** aceita; **embutida na ferramenta (v1.28.0)**, junto com a correção mount/RAG (D-018) — re-validado 17/17, com checagens de conteúdo novas no harness

### Contexto
Os primeiros pilotos reais (game design, pixel art, enredo, música, dev, design visual) geraram cinco propostas de diretriz (i-N18 a i-N22). Nesta data o usuário validou o lote, com ajustes de escopo. Esta entrada congela as decisões para a passada de código não reabrir a discussão.

### As decisões
1. **FlatDrop NÃO é padrão — detecção automática (i-N18).** Nem todo projeto usa o FlatDrop; o assistente não pode travar pela ausência do manifesto. Diretriz condicional: ao mapear o mount, verificar se existe `_MANIFEST.md`; **se existe**, é a fonte de verdade de nomes/estrutura (sufixo `__pasta` = colisão; referir-se e **entregar sempre pelo nome real**; aproveitar para entender a estrutura do projeto); **se não existe**, seguir normal — nunca travar, pedir ou estranhar. O FlatDrop **filtra** o upload (tipos que o Projeto não aceita, como imagens; ignorados fixos planejados `node_modules/`, `venv/`, `.git/`; `.gitignore` opcional): **ausência de arquivo pode ser deliberada, não erro**; se algo necessário faltar, vale P8 (pedir, não assumir).
2. **i-N19 = refino de P8, não P14.** "STATUS é pista, não fato": antes de repetir uma pendência do STATUS, conferir o estado real (mount/arquivos); então (a) confirmar que falta de fato, ou (b) constatar feito e **atualizar o STATUS** — nunca só ecoar o texto velho. Entra como refino na redação de P8 + nota no `UPDATE_PROTOCOL`.
3. **Commit: 3 linhas, listando arquivos (i-N20).** Padrão = `git add` com os **arquivos listados**; o assistente **pode** usar `git add .` a critério quando o conjunto é pequeno e a árvore é conhecida/limpa. `add` / `commit` / `push` em **linhas separadas**; mensagem **sem acentos** (CMD).
4. **Feedback inclui desvios estruturais; piloto tem autonomia; triagem em 3 destinos (i-N21).** Feedback não é só menção em conversa: diretriz adicionada ao CLAUDE do piloto, `.md` novo, estrutura de `.md` alterada ou template dispensado — tudo é **desvio registrado** (DECISIONS do piloto + seção «Feedback para o Kit» no IDEAS). **Sem pré-aprovação do kit** para o piloto criar/testar um `.md` novo (pré-aprovação = gargalo que mata o sinal da fase de validação); o material vem ao kit quando o usuário quiser — inclusive subindo o arquivo no projeto do kit para análise. No kit, **triagem em 3 destinos**: (1) absorver no template base do nicho; (2) virar módulo opcional do grupo; (3) ficar específico do projeto (registrado, **não generaliza**). Dispensa de um `.md` quase sempre é (3); só vira mudança de base se o padrão se repetir no lote.
5. **Válvula de desvio registrado aprovada (i-N22).** Texto aprovado como está (ver i-N22): templates são **ponto de partida, não contrato**; adaptar é permitido; o erro é desviar **sem registrar**; não duplicar o que a estrutura já cobre.

### Por quê (compacto)
Pilotos são a **fase de validação**; rigidez agora gera resistência e perda de sinal (i-N22). Diretrizes condicionais e auto-detectáveis evitam que o kit imponha ferramentas (FlatDrop) que nem todo projeto usa. A triagem protege contra generalizar cedo demais (risco medido: doc gerado por LLM piorou sucesso em 5/8 cenários por duplicação) e contra remover do template o que só UM projeto dispensou.

### Pendência
~~Redigir o texto final curto de cada diretriz dentro do `index.html`, embutir, re-validar 17/17.~~ **Feita (v1.28.0):** i-N18 → item novo no `handoffComo`; i-N19 → def do P8 + bullet na seção dedicada; i-N20 → `commitIntro` (a parte universal das 3 linhas migrou da nota condicional para o intro incondicional); i-N21 → linha nova em `TRIGGERS_BASE`; i-N22 → regra nova em `HYGIENE_RULES`. Os itens de template do pixel (i-N23) seguem **fora** — aguardam o lote dos pilotos fechar.

---

## D-023 — O kit DESENVOLVE, não só documenta (fase 1: escritor e game design) + IDEAS universal

**Data:** 2026-06-12 · **Status:** aceita; **embutida (v1.29.0)** · Origem: ideia-260612 + guia do escritor + pesquisa P13

### Contexto
Pilotos mostraram dois problemas: (a) nichos de produção tratados como "suporte" — o usuário quer que, como no dev, o kit **crie** (escreva capítulos, construa o jogo); (b) inconsistência: todos os nichos referenciam IDEAS (gatilhos/P9/higiene) mas só 2 tinham o template — assistentes reportavam "faltou o IDEAS.md".

### Decisões
1. **IDEAS universal por injeção** (`UNIVERSAL_IDEAS_TPL` via `normNiche`, sem duplicar dev/brainstorm) + regra no CLAUDE.md gerado: arquivo referenciado inexistente → **criar na primeira necessidade** (não é erro). O template já nasce com a seção «Feedback para o Kit» (fecha o ciclo da i-N21).
2. **Narrativa escreve sob direção.** Conciliação explícita: o guia alerta "não deixe a IA escrever por você" e a pesquisa confirma (homogeneização de voz no uso PASSIVO); o pedido do usuário é escrita **dirigida**. A diferença que torna ambos verdadeiros: direção do autor + ancoragem na bíblia (VOZ/PERSONAGENS/CONTINUIDADE) + entrega como rascunho/opções + [HIPÓTESE] no inventado + vigilância de drift. A convention antiga ("não escreve a obra") foi REESCRITA — mantê-la contradiria o behavior novo. Kishōtenketsu entra como repertório de 1ª ordem para LN/WN (fractal; ketsu adiado = gancho serial).
3. **Game design cria o jogo** (`builds_game`): designer + desenvolvedor + programador; protótipo mínimo antes de sistema; práticas de dev quando é código. **ROTEIRO.md** vira a casa da narrativa cena a cena (feedback literal do piloto), com **AGUARDANDO DESIGN** como estado de sincronia entre frentes (ponte para i-N24).
4. **Extensão futura:** o mesmo padrão "desenvolve" vale para HQ, RPG de mesa e animação (produção textual) — fica no ROADMAP, aplicado quando os pilotos derem o sinal. Música = i-N25 (avaliar criação completa: letra/estilo/prompts p/ Suno).

### Alternativas rejeitadas
- Manter narrative só como suporte (contraria o uso real e o pedido); behavior de escrita SEM reescrever a convention (CLAUDE.md autocontraditório); IDEAS por template copiado em cada nicho (15 duplicações para manter — injeção é 1 fonte).

---

## D-024 — HUB de grupo como switch (i-N24) + Instruções enxutas

**Data:** 2026-06-12 · **Status:** aceita; **embutida (v1.30.0)** · Origem: usuário aceitou a estrutura do HUB e levantou o tamanho das Instruções

### Decisões
1. **HUB vira switch, não custom de grupo.** Toggle universal "Projeto em grupo?" (injetado via `normNiche`, igual ao IDEAS): ligado, adiciona a seção HUB ao CLAUDE.md gerado + 1 linha no ritual das Instruções + o `HUB.md` (`UNIVERSAL_HUB_TPL`, genérico) aos templates/zip (via `effectiveFiles`). Desligado: opt-in puro, nada aparece (round-trip no harness). O "custom de grupo" foi **descartado** (faria o mesmo que canal de atualização + a seção embutida, com mais código).
2. **Instruções enxutas.** As Instruções são lidas em TODA mensagem; o CLAUDE.md é a versão completa. Os 13 princípios universais (genéricos, idênticos em todo nicho) eram 13 bullets repetidos — agora são **uma linha de nomes** ("definição completa no CLAUDE.md"). Os behaviors de nicho seguem em bullets (diferenciam o projeto). Redução medida: −27% (6193→4503 média). Trava nova: **teto de 6500 caracteres** por Instrução no harness, para não re-inchar quando vierem novos princípios.

### Alternativas rejeitadas
- HUB como nicho/custom separado (redundante); manter os 13 universais por extenso nas Instruções (contraria o design "Instruções = essencial; CLAUDE.md = completo" e o peso por mensagem); cortar princípios de verdade (perde-se conteúdo — a compressão preserva tudo, só muda a forma).

### Nota — cosmético adiado
**Reagrupar `narrative`** (Fase 3) NÃO foi feito: o campo `group:` é tema visual do card (serif/literary/digital → branding), não categoria de exibição; o intuito do item ("group literary → tema criativo") está ambíguo. Aguarda o usuário esclarecer o que quer reagrupar antes de qualquer mudança cosmética. README/PLANNING seguem para depois (pitch mudou com "kit desenvolve").

---

## D-025 — Página construtora do HUB + responsabilidade no bloco da frente (não em 4ª seção)

**Data:** 2026-06-13 · **Status:** aceita; **embutida (v1.31.0)** · Origem: ideia-260613

### Decisões
1. **Página dedicada "06 · HUB"** (group-level, independente do nicho atual): construtor de frentes (nicho + nome + responsável por), com adicionar/remover/reordenar, preview ao vivo e download. Estado em `STATE.hub`, persistido em chave própria (`LS_HUB`) — o HUB é do GRUPO, não de um projeto. `buildHub()` gera o `HUB.md` populado.
2. **Responsabilidade fica no bloco da frente (seção 2), não numa 4ª seção.** O usuário cogitou uma seção própria; preferiu-se a linha "Responsável por" dentro de cada frente porque (a) uma seção à parte duplicaria a Visão e o mapa de donos (D3); (b) "uma fonte de verdade" é princípio do kit. D3 passou a **apontar** para essa linha. O comportamento dinâmico que o usuário quer (cada conversa atualiza para as outras frentes) é exatamente o que a linha + o gatilho de atualização do HUB já entregam. Reversível: virar 4ª seção é mudança localizada se ele preferir.
3. **HUB.md sai do download por-nicho** (`effectiveFiles` deixa de injetá-lo): senão cada nicho geraria um HUB genérico repetido. Vem só da página HUB. O switch "Projeto em grupo?" segue adicionando a seção de instruções do HUB ao CLAUDE.md (texto reaponta para a página).
4. **Sem "identificador de tokens" por frente:** cogitado na ideia, mas não há mecanismo desse tipo no kit nem necessidade (HUB é documento, não orçamento de runtime). Nada adicionado — registrado para não reabrir.

### Alternativas rejeitadas
- 4ª seção de responsabilidade (duplicação); HUB.md em cada nicho (repetição); HUB embutido na página de um nicho específico (o HUB é group-level, merece página própria).

---

## D-026 — HUB inspirado no CANON.md (Cânone Central + códigos + precedência) + diretriz de Instruções + log técnico

**Data:** 2026-06-13 · **Status:** aceita; **embutida (v1.32.0)** · Origem: erro-260613 + ideia-260613_-_2 + o CANON.md que o projeto em grupo (CINZEIRO) montou sozinho

### Contexto
O piloto em grupo, usando o HUB, evoluiu por conta própria um `CANON.md` mais maduro que o template do kit: identificadores de área (`[GAME]`/`[ART]`/…), uma seção **Cânone Central** de fatos travados, princípios de precedência e tarefas com `[ORIGEM-ID]`. É o loop de feedback (i-N21/i-N22) entregando uma versão melhor — que volta para o kit.

### Decisões
1. **HUB absorve o CANON.md (genérico, não o conteúdo do jogo):** `buildHub` passa a gerar tabela de **identificadores das áreas** (código por frente, opcional, derivado do nome se vazio), seção **Cânone Central** (fatos travados — nomes/identidade/dimensões/marcos), diretriz **D4 "Cânone Central tem precedência"** (mudança exige aprovação do usuário) e caixa de entrada no formato **`[ORIGEM-NNN]`** com refutação `[REFUTACAO-ID]`.
2. **Construtor por botões + estilo do kit:** fileira de chips dos 16 nichos (clicar adiciona uma frente, estilo "add"; o select por linha fica para trocar/editar). `<select>` e campos (código/nome/responsabilidade) passam a usar o visual padrão do kit (resolve a inconsistência apontada nos prints). O código entrou como campo curto opcional por linha.
3. **Diretriz de personalização das Instruções:** o CLAUDE.md gerado autoriza o assistente a adaptar as Instruções do Projeto a cada projeto (encurtar/trocar/remover/acrescentar), respeitando o teto de caracteres e registrando o desvio. É a i-N22 aplicada às Instruções — atende o pedido do usuário.
4. **Log técnico no game (responde ao erro-260613):** LOG-TEMPLATE do nicho game ganha `## Código / build` (removível se o projeto é só design). O erro mostrou a válvula funcionando (o Fando preservou sua seção `## Código`); a causa de fundo era o log do game não prever trabalho de código. Fix aplicado só ao game (dev já registra código em Feito/Bugs; demais nichos não precisam).

### Cosmético adiado / não feito
- **HUB com "entrada própria" tipo nicho (TROCAR):** mantido o modelo atual (página dedicada 06 + toggle "Projeto em grupo?" por projeto). O toggle tem função real — marcar cada projeto do grupo para o CLAUDE.md dele ganhar a seção do HUB; transformá-lo num "nicho" traria retrabalho sem ganho claro. Reabrir se o uso mostrar atrito.

### Alternativas rejeitadas
- Copiar o conteúdo específico do jogo (Vasha/#C84800) para o template (seria conteúdo, não estrutura); manter o HUB sem Cânone Central (perderia a maior contribuição do piloto); log técnico genérico em todos os nichos (bloat para cozinha/música/etc.).

---

## D-027 — Códigos de área do HUB: curados + variador de duplicata

**Data:** 2026-06-14 · **Status:** aceita; **embutida (v1.33.0)** · Origem: ideia-260613_-_3

### Decisão
O código de cada frente no HUB passou a ter um **default curado por nicho** (`NICHE_CODE`: DEV, GAME, PIXEL, NARR, SOM, HQ…) em vez de derivar das 4 primeiras letras (que dava "DESE" para Desenvolvedor). Quando o mesmo código-base repete, ganha **variador numérico** (DEV0, DEV1, DEV2); código único fica sem sufixo. O campo "código" por linha continua sobrescrevendo. Implementação: `baseCode(f)` (code explícito → mapa do nicho → derivado do nome) + `computeCodes(frentes)` (aplica o sufixo só em duplicatas); `buildHub` calcula os códigos uma vez e usa por índice.

### Nota estratégica (do mesmo arquivo de respostas — NÃO é decisão ainda, é direção)
O usuário sinalizou que o **refator modular (i-N13)** lhe parece boa ideia, com a ressalva da preocupação de quebrar a ferramenta no processo. Motivação nova e forte: o refator abre **i18n** — trocar UI e dados de template para outros idiomas de forma prática e auditável — incluindo a possibilidade de **idioma misto** (ex.: templates/metas/código/comentários em inglês profissional, enquanto a UI do kit e a conversa do Claude no projeto seguem no idioma do usuário). Atrativo para uso por terceiros / portfólio. Capturado em IDEAS (i-N13 expandido + i-N26). Sem código até decisão explícita.

---

## D-028 — Refator modular: index.html gerado de src/ via build.js

**Data:** 2026-06-21 · **Status:** aceita; **embutida (v1.34.0)** · Origem: i-N13 + decisão do usuário

### Decisão
O `index.html` na raiz deixou de ser editado à mão e passou a ser **gerado** por `node build.js` a partir de dois componentes: `src/index.template.html` (casco com UI + lógica, sem dados de nicho) e `src/niches/<id>.js` (17 módulos, um por nicho). O `build-manifest.json` registra a ordem de montagem. A saída é byte-idêntica à v1.33.0 com tudo desligado. O build é ferramenta **do dev** (não do usuário final) — o produto continua sendo **1 arquivo único sem build no lado do usuário** (preserva D-001). Comitar sem rodar `node build.js` + harness 17/17 é proibido pelo CLAUDE.md do projeto.

### Consequências
- Editar um nicho = editar `src/niches/<id>.js` e rodar `node build.js`. Nunca editar o `index.html` diretamente.
- O harness (`validate.js index.html`) continua sendo a rede de segurança obrigatória.
- Abre caminho para i18n (i-N13/i-N26): cada módulo de nicho pode ter versões por idioma sem tocar o casco.

---

## D-029 — Cérebro renomeado: CLAUDE.md → CEREBRO.md (em todos os projetos gerados)

**Data:** 2026-06-21 · **Status:** aceita; **embutida (v1.34.0)** · Origem: spec 2026-06-20

### Decisão
O arquivo do "cérebro" gerado pelo kit (comportamento do assistente, antes chamado `CLAUDE.md`) passa a se chamar **`CEREBRO.md`** em todos os projetos gerados, sempre — não condicional. A função interna `buildClaudeMd()` mantém o nome (renomear quebraria chamadas internas), mas o download e todas as referências visíveis (UI, templates, triggers, behaviors, harness) apontam para `CEREBRO.md`.

### Por quê
O nome `CLAUDE.md` é convenção do **Claude Code** (CLI) para o arquivo-raiz de instruções do projeto de desenvolvimento. Usar o mesmo nome para o cérebro gerado causava colisão semântica: o usuário não sabia qual dos dois estava lendo, e o Claude Code poderia confundir o arquivo do kit com as instruções do repositório. Liberar `CLAUDE.md` resolve a ambiguidade definitivamente.

### Consequências
- Projetos existentes que já têm `CLAUDE.md` como cérebro precisam renomear o arquivo no Projeto do Claude.ai — mudança pontual, sem perda de conteúdo.
- O `CLAUDE.md` da raiz do repositório `contexto-modular` (lido pelo Claude Code) continua com esse nome — não é afetado.

---

## D-030 — Atualização de doc por spec para o Claude Code (curadoria-delta)

**Decisão.** Além do fluxo "o chat entrega o arquivo INTEIRO" (que **continua valendo** para reescritas de fundo/voz/reestruturação), o chat pode entregar uma **spec curta** em `meta/specs/` que descreve uma **edição cirúrgica** de um doc de curadoria (ROADMAP/CONTEXT/IDEAS/CHANGELOG): com o **texto exato a inserir/alterar** e **âncoras semânticas** (seção/título, nunca número de linha). O Code aplica no repo.

**Por quê.** (1) **Token/truncamento:** uma spec é muito menor que regerar um arquivo grande, e elimina o risco de a regeneração truncar no meio — risco real (em jun/26 surgiram duas cópias paralelas do CONTEXT por causa disso). (2) **Auditável:** o `git diff` mostra exatamente o que mudou — mais seguro para a higiene P12 do que confiar que uma regeneração completa não deixou cair nada. (3) **Diferença do ASU:** o ASU aplica patch YAML **mecânico**; o Claude Code **entende o sistema** e localiza a âncora por **significado**, com mais cuidado e validando.

**Não fere a regra dura "Atualizar um doc = arquivo COMPLETO… nunca um arquivo de instruções de atualização".** Aquela regra é **anti-erro-humano** — ela proíbe empurrar trechos/instruções para o **usuário** aplicar à mão. A spec-para-Code tem **outro destinatário**: um agente cuidadoso + `git diff` como rede. São canais distintos; a regra dura segue intacta para entregas ao usuário.

**Guarda-corpos.** (1) A spec é escrita sobre a **versão VIVA do repo** (mount `/mnt/project`), **nunca** de fragmento RAG. (2) O **chat autora a prosa**; o Code só **posiciona** — não inventa texto de curadoria. (3) **Um canal por doc por ciclo:** se um doc vai por spec, o chat **não** entrega o mesmo doc inteiro no mesmo ciclo (evita dois escritores → conflito). (4) **Reescrita de fundo/voz continua indo como arquivo inteiro** entregue pelo chat. (5) Vale o handoff: após a sessão do Code, o usuário sobe o repo para o chat voltar à verdade.

**Escopo.** Complementa o «🤝 Fluxo Chat ↔ Claude Code» e estende o uso de `meta/specs/` (antes só tarefas de código + append) às curadorias-delta. Supersede: nada.

---

## D-031 — Switch «Modo Code»: o kit gera o arranque do Claude Code

**Decisão.** Novo toggle `codeMode` ("Desenvolver no Claude Code?") no topbar, no mesmo padrão de `groupMode`/`asuMode`. Ligado, o `CEREBRO.md` gerado ganha a seção «Desenvolvimento no Claude Code» (raias chat↔Code + método doc-por-spec + segurança de aplicação + ambiente) e, opcionalmente (Tarefa B), um apêndice com o starter (`CLAUDE.md` raiz, `.claude/settings.json`, `.claude/commands/`).

**Por quê.** Para que qualquer projeto gerado pelo KCM herde a capacidade de trabalhar bem no Claude Code — em especial o **doc-por-spec** (D-030), aproveitando a edição cirúrgica do agente em vez de regenerar docs inteiros. Dogfooding: é o fluxo que o próprio KCM usa, virando feature.

**Escopo v1.** build no `CLAUDE.md` raiz = **placeholder**; `.claude/commands/` = **sim** (apply-spec, wrap); switches **independentes**. Aba/saída dedicada = polish futuro; no v1 o starter sai como apêndice do `CEREBRO.md`.

---

# FIXES — bugs graves resolvidos (formato sintoma/causa/solução/lição)

> Decisões são "por que as coisas são assim"; FIXES são "o que quebrou feio e como consertamos". Não apagar.

## FIX-001 — Construtor reescrevia a coluna de controles sem restaurar o esqueleto
**Versão:** v1.24.0 · **Gravidade:** alta (afetava o Custom Blank desde antes; silencioso)
- **Sintoma:** ao entrar num nicho construtor e depois sair (ou re-chamar o formulário), os controles ficavam errados; o próximo construtor também falhava, em cascata.
- **Causa raiz:** `renderCustomForm` reescrevia `.controls` inteiro (removendo os hosts estáticos `#g-behaviors` etc.) e **nada restaurava o esqueleto**.
- **Solução:** `let CONTROLS_SKELETON` capturado intacto na 1ª renderização (`captureControlsSkeleton`) e restaurado no topo de `renderBuilder` e dos formulários construtores (`restoreControlsSkeleton`) → re-entrância (idempotência).
- **Lição:** quem reescreve a coluna de controles tem que poder restaurá-la; render deve ser idempotente.

## FIX-002 — "Aplicar preset" sem nome zerava o preset (footgun)
**Versão:** v1.25.0 · **Gravidade:** alta (perda de trabalho silenciosa)
- **Sintoma:** ativar um nicho recém-montado **sem digitar um nome** apagava o preset; o nicho ativado vinha vazio.
- **Causa raiz:** `setNiche("custom")` relê `LS_PRESET_CURR`; sem o preset salvo com nome, não achava nada e setava `customPreset=null`.
- **Solução:** o botão (renomeado "⚡ Ativar este nicho", primário) **sempre persiste** o preset antes de ativar — com o nome digitado ou um derivado do título (`slugifyName`). Mais a barra "Editar / trocar" (`injectActiveCustomBar`) para sair do modo ativo sem perder o preset.
- **Lição:** ações que dependem de estado persistido têm que **garantir** esse estado antes; nunca confiar que o usuário preencheu um pré-requisito implícito.

## FIX-003 — Corpo dos prompts sumia depois de Ativar (função descartada pelo JSON)
**Versão:** v1.25.1 · **Gravidade:** alta (saída gerada incompleta)
- **Sintoma:** prompts importados/compostos apareciam **com o corpo vazio** na aba Prompts depois de Ativar (e o CLAUDE.md/Prompts gerado saía sem os corpos). No editor (Instruções) o corpo aparecia.
- **Causa raiz:** `toPreset` guardava o `body` do prompt como **função** (`function(){return texto}`). Ativar salva o preset via `savePresets` → `JSON.stringify` no `localStorage`, **que descarta funções** → ao reler (`listPresets`/`JSON.parse`), `body` virava `undefined`. No editor funcionava porque ali o `_cf` ainda tinha o body como string.
- **Solução:** `toPreset` passa a guardar `body` como **STRING** (`typeof p.body==="function" ? p.body({},{}) : (p.body||"")`). A view, os geradores e o `fromPreset` já lidam com string. Prompts compostos ficam com corpo estático (template com `[placeholders]`), sem `fill` dinâmico — aceitável (função não sobrevive ao localStorage de qualquer forma).
- **Confirmado por design:** o CLAUDE.md gerado lista só **título** dos prompts (corpo NÃO) — igual aos nichos prontos; os corpos vivem na aba Prompts.
- **Lição:** **nada que vá para o `localStorage` pode ser função.** Serializável = string/número/objeto simples.

## FIX-004 — Chips de campo de Cliente/Narrativa não selecionáveis (par tratado como string)
**Versão:** v1.27.1 · **Gravidade:** alta (controle do nicho inutilizável + escolha não entrava na saída)
- **Sintoma:** nos nichos `client` e `narrative`, os chips do `builderSection` (Gênero, Formato, Pessoa narrativa, Canal, etc.) mostravam o rótulo grudado ("fantasy,Fantasia") e **não acendiam ao clicar** — o usuário não conseguia selecioná-los. A escolha também não aparecia no texto gerado.
- **Causa raiz:** `normBuilderSection` converte `groups → items` mapeando `it => [it, it]`, assumindo que cada item é uma **string**. Esses dois nichos usam o formato **par `[código, rótulo]`**, então `it` já era `["fantasy","Fantasia"]` e virava `[["fantasy","Fantasia"],["fantasy","Fantasia"]]`. No render, `data-val` recebia a string `"fantasy,Fantasia"` (array → toString); no clique guardava essa string, mas o `.on` compara contra o **array** de `opts` (`cur.includes(v)`), que nunca casa → o chip nunca acende. E a saída (`o[0]===val`) também não achava o rótulo. Os nichos com `items` de **strings** (dev, design, marketing) não eram afetados (`[it,it]` numa string funciona).
- **Solução:** `opts: g.items.map(it => Array.isArray(it) ? it : [it, it])` — par passa direto, string é embrulhada. Conserta seleção, estado `.on` e texto gerado de uma vez.
- **Teste de regressão:** o harness agora verifica, em **todos** os nichos, que cada `opt` é `[string,string]` (nenhum `[array,array]`) e faz um **round-trip seleção→saída** (seleciona o 1º chip e confirma que o rótulo, não o código, aparece no texto). Provado que reprova o código com o bug e aprova o corrigido.
- **Lição:** **dois formatos de dados convivendo no mesmo campo precisam de um normalizador que detecte qual é** — e de um teste que exercite os DOIS. O bug passou batido porque a validação anterior só conferia presença/ausência de princípios, não a integridade dos controles de cada nicho. Onde há mais de um formato aceito, testar os dois caminhos.

## FIX-005 — GitHub Pages não publicava (build do Jekyll quebrando em UTF-8)
**Versão:** v1.30.1 · **Gravidade:** alta (site público parado; só o HTML local abria)
- **Sintoma:** após o push, o workflow "pages build and deployment" falhava (runs #32/#33); o site em `silujones.github.io/kit-contexto` não atualizava. Log: `github-pages 232 | Error: The source text contains invalid characters for the used encoding UTF-8`, ao renderizar `meta/STATUS.md`.
- **Causa raiz:** o GitHub Pages roda **Jekyll** por padrão e tenta renderizar TODO `.md` do repo (kramdown/commonmark). Algo na renderização do STATUS.md o fez abortar com erro de encoding. Os `.md` gerados pelo kit estão em **UTF-8 válido** (verificado: sem byte inválido, sem caractere de controle, sem BOM) — então não é arquivo malformado; é o Jekyll tropeçando (provável caractere válido que o parser rejeita, ou re-codificação no caminho até o repo). E, no fundo: **este repo não precisa de Jekyll** — o site é um único `index.html` (app de página única); os `.md` são documentos de projeto, não páginas web.
- **Solução:** criar um arquivo vazio **`.nojekyll`** na RAIZ do repo. O GitHub Pages pula o build do Jekyll e serve os arquivos estáticos — `index.html` funciona, os `.md` ficam só armazenados, e o erro (e os avisos de Node 20 deprecado) somem.
- **Lição:** **site de página única no GitHub Pages → `.nojekyll` desde o início.** Deixar o Jekyll processar docs de projeto não traz ganho e adiciona um modo de falha (encoding, front-matter, caracteres). Candidato a virar dica do kit no handoff de projetos que publicam no Pages (anotar em IDEAS se reincidir).

## FIX-006 — Chat entregou arquivos meta de handoff incompletos (parciais) sem avisar
**Versão:** v1.53.0 (fecho de sessão) · **Gravidade:** alta (risco de perda de histórico se colado por cima; sem dano real ao repo)
- **Sintoma:** o chat tentou gerar arquivos meta de handoff (DECISIONS/CHANGELOG/IDEAS) e os entregou INCOMPLETOS — só com as entradas da jornada corrente, sem o histórico completo (D-001..D-048, v1.0..v1.46, ~40 ideias).
- **Causa raiz:** o chat não tinha os arquivos completos no contexto e reconstruiu de memória só o que tinha visto, tratando "handoff" como categoria diferente de "atualizar um doc" — uma racionalização que contorna a regra dura de entrega («arquivo COMPLETO», «nunca trechos», «delta só como spec-para-Code»).
- **Impacto real:** nenhum dano ao repo — os meta reais estavam íntegros (os appends do Code a cada spec mantiveram tudo). A correção foi aplicada via spec0027 sobre os arquivos reais, não sobre a entrega parcial do chat.
- **Reforço registrado:** entrega de doc nomeado é sempre o arquivo inteiro OU vai por spec-para-Code; nunca parcial para o humano. Ver logs/2026-07-04.md.

## D-032 — Diretriz do ASU ancorada no `format_version` do guia (não em literal)

**Decisão.** A diretriz do ASU no `CEREBRO.md` gerado deixa de fixar `format_version: "1.0"` e passa a citar o `format_version` **declarado no `INSTRUCTION_GUIDE.md`** do Projeto. Também: lembrete na UI do kit (callout) ao ligar o switch ASU, para subir o `INSTRUCTION_GUIDE.md`.

**Por quê.** O formato é o contrato **estável**; a ferramenta evolui. Ancorar no guia evita que a saída fique presa a uma versão velha quando o ASU mudar. O lembrete na UI reduz o erro de esquecer de subir o guia (sem ele, a instrução ASU não tem referência de formato).

## D-033 — Diretriz ASU: editar→ASU, novo→baixar (atende DEC-025 do ASU)
**Decisão.** A diretriz «Saída de código via ASU» passa a separar: **editar existente → instrução ASU**; **arquivo novo → entregar pra baixar** (exceto `create_file` em instrução mista; usuário pode pedir o inteiro). Instrução ASU nomeada `AAAA-MM-DD-asuNNNN.yaml`. Lembrete da UI e instrução curta também citam ASU e `PROMPT_IA.md`.
**Por que.** Atende o pedido formal do ASU (DEC-025): embutir arquivo novo em YAML e mais caro e arrisca corromper no escape; e a instrucao curta nao reforcava ASU, entao o comportamento dependia de a IA ter lido o fim do CEREBRO. Corrige o bug real de projetos gerarem instrucao pra o usuario criar arquivo a mao.

## D-034 — Recomendação de configuração ao fim da sessão
**Decisão.** Gatilho universal: ao fim, recomendar config da proxima etapa (modelo / esforco / pensamento) de forma explicita, sem afirmar saber a config atual; parar e pedir aumento se a proxima for pesada e a config fraca; sinalizar que pode baixar se sobrou. Home no CEREBRO + linha-gatilho na instrucao curta.
**Por que.** O modelo nao le de forma confiavel o proprio esforco/pensamento — recomendar pela tarefa e honesto (P8) e util; e diretriz so pega quando esta na instrucao curta (lida em todo turno), nao so no CEREBRO.

## D-035 — Nomes de gestao padronizados em ingles (universal por nicho)

**Decisao.** Os arquivos de **gestao/infra** passam a ter nome canonico em **ingles** em todo o ecossistema: `CONTEXT`, `STATUS`, `DECISIONS`, `IDEAS`, `CHANGELOG`, `ROADMAP`, `GLOSSARY`, `HISTORY`, `LOG-TEMPLATE`. Camada universal por nicho: **`STATUS`+`IDEAS`+`DECISIONS`**. Conteudo de nicho (`MECANICAS`, `BIBLIA`…) **permanece em PT**.

**Por que.** Convencao de TI do mundo real (nomes de infra em ingles) e — decisivo — evitar **colisao** quando um nicho faz custom com dev (nao gerar `IDEAS` e `IDEIAS` para a mesma coisa). Conteudo de nicho fica na lingua do criador porque nao colide e nao e infra.

**Migracao em fases:** Fase 0 = repo KCM (este commit). Fases 1-3 = template (renomear nichos; camada universal; CEREBRO por nicho + `FIX-` + commit-na-instrucao-curta).

## D-036 — CEREBRO gerado é niche-aware

**Decisão.** Gatilhos, higiene e a nota de "criar se faltar" passam a respeitar os `contextFiles` reais do nicho: CHANGELOG/ROADMAP só aparecem para nichos que os têm; a criação automática vale só para a camada universal (STATUS/IDEAS/DECISIONS). Commit foi para a instrução curta (dev/ASU/Modo Code); ritual de checar `.txt` avulso adicionado.

**Por quê.** O CEREBRO genérico mandava nichos atualizarem/criarem CHANGELOG/ROADMAP que não fazem parte deles — gerando referência fantasma e arquivos espúrios. Commit sumia em chats ASU/normais por estar só no CEREBRO (lido 1x), não na instrução curta.

## D-037 — ASU: instrução por download + escopo código-vs-docs

**Decisão.** A instrução ASU é entregue como arquivo `.yaml` para baixar (bytes UTF-8 exatos), não colada no chat. ASU vale para código e docs de heading único/estável (DECISIONS, CONTEXT); docs rolantes (STATUS/CHANGELOG/IDEAS) vão inteiros; reavaliar DECISIONS via ASU só perto de ~700 linhas. Âncora não-ASCII: evitar literal com `.*`.

**Por quê.** Colar YAML corrompe bytes em âncoras não-ASCII (visto em produção); o INSTRUCTION_GUIDE ja espera o yaml salvo como arquivo. E patch cirúrgico briga com a higiene holística dos docs rolantes — é o D-030 aplicado ao ASU.

## D-038 — Recomendacao de config e mode-aware (chat vs. Claude Code)
**Decisao.** A diretriz de config distingue chat (modelo + esforco + pensamento) de Claude Code (modelo + `/effort`/`ultrathink`/`ultracode`, SEM toggle de pensamento) e recomenda modelo por capacidade, nao por nome/versao.
**Por que.** Pesquisa confirmou que o Code nao tem toggle de pensamento — e acoplado ao esforco. A diretriz antiga mandava "ligar pensamento" no Code (inexistente). Nome de modelo fixo envelhece (ex.: Sonnet 5 recem-lancado).

## D-039 — Nome de spec padronizado no Modo Code (fecha a Decisao 4)
**Decisao.** A geracao do Modo Code passa a prescrever `AAAA-MM-DD-specNNNN.md` para specs (e reitera `AAAA-MM-DD-asuNNNN.yaml` para instrucoes ASU).
**Por que.** A convencao fora decidida mas nunca chegou a geracao — projetos com Modo Code inventavam nomes (ex.: `spec-DEC-039-comportamento.md`). Fecha a lacuna.

## D-040 — Obediencia: feedback-ASU e nome de download
**Decisao.** Instrucao curta reforca: registrar «Feedback para o ASU» no IDEAS ao fim (quando houve feedback); arquivo para baixar usa nome simples (`IDEAS.md`), sem prefixo de pasta, salvo para desambiguar homonimos.
**Por que.** Ambos desviaram em producao — feedback nao registrado, e `meta/IDEAS.md` baixando como `meta_IDEAS.md`. Diretriz so obedecida quando esta na instrucao curta (lida em todo turno).

## D-041 — Estilo de nome de spec/ASU: AAMMDD (revisa D-039 no formato)

**Decisão.** O formato do nome muda de `AAAA-MM-DD-…` para **`AAMMDD-…`** (sem `-` na data, ano 2 díg.). Specs: `AAMMDD-specNNNN-desc.md`; instruções ASU: `AAMMDD-asuNNNN.yaml`. Numeração `specNNNN`/`asuNNNN` e descrição livre mantidas; muda só o bloco de data. Vale para os novos; não renomear os antigos.

**Por quê.** Preferência do usuário (estilo das próprias notas: 260701). Aplicar na geração: Modo Code (Tarefa C da spec0008 usou o formato antigo — corrigir) e a diretriz ASU (D-037 rodou com `AAAA-MM-DD-asuNNNN` — precisa follow-up).

## D-042 — Ciclo de verificação com fecho de volta (round-trip)

**Decisão.** Toda mudança nos meta/ (e código) segue um ciclo com fecho: chat autora a spec/instrução sobre a versão viva + declara a forma esperada do diff; Code/ASU aplica e confere `git diff`; usuário sobe o repo; **o chat confere de volta**, frente por frente, que o previsto foi aplicado e nada único se perdeu (P12). Obrigatório quando a sessão anterior aplicou specs/instruções; pulado quando nada mudou (proporcional, P10). Reforça, no CEREBRO: delta só para agente (Code/ASU) + `git diff`, nunca para o humano colar; nome de download é sempre o real (desachatado do FlatDrop).

**Por quê.** O handoff de 07-01 entregou acréscimos para o usuário colar e um log com nome achatado — violando regras que só viviam no CEREBRO (lido 1×). Modos de falha reais do Code (truncamento por cap de buffer; regressão de reescrita-inteira; lost-in-the-middle) e do ASU (âncora não-ASCII) são silenciosos: reportam "feito". Declarar a forma do diff + conferir de volta torna o erro detectável. É o P8 aplicado ao handoff. Complementa D-030 (doc-por-spec) fechando o loop que faltava.

## D-043 — Auditoria de nomes (17 nichos) + política DEC/FIX por nicho

**Decisão.** (a) Nomes de arquivo meta/ são **invariantes por nicho** — cada nicho tem um conjunto fixo; a migração EN parcial (gestão universal STATUS/CONTEXT/CHANGELOG/ROADMAP/LOG-TEMPLATE + o nicho `dev` em DECISIONS/IDEAS/GLOSSARY/HISTORY; demais nichos em PT) é definitiva (D-035), **não** se padroniza tudo em EN — isso forçaria migração dos 20+ projetos dev vivos, risco alto sem ganho. Nomes de domínio em PT (PERSONAGENS, MECANICAS, REVISOES do design, etc.) ficam em PT por serem conteúdo, não gestão. (b) O par de termos é **DEC/FIX** (o `BUG` histórico foi eliminado). (c) **FIX é opcional por nicho:** 13 nichos têm FIX (produzem código/artefato executável); 4 usam só DEC — **design, product, business, brainstorm** — por serem conteúdo/estratégia sem bug executável. Essa ausência é intencional; **não "corrigir" adicionando FIX** a esses nichos.

**Por quê.** Fecha a auditoria de 2026-06-24. O repo já estava são (DECISIONS uniforme, sem resíduo PT no código, wrap limpo); faltava gravar a política para uma futura sessão não tratar a ausência de FIX como lacuna e introduzir churn. Formato de data mantém o split deliberado: logs `AAAA-MM-DD` (ISO), specs/ASU `AAMMDD` (D-041) — domínios diferentes.

## D-044 — Diretriz de geração: .gitignore na 1a leva com estrutura, README quando estabiliza

**Decisão.** No perfil dev/Code, a instrução curta ganha duas diretrizes universais: `.gitignore` adequado ao stack entregue na PRIMEIRA leva que cria estrutura (sem esperar pedido); `README.md` entregue/atualizado quando a estrutura estabiliza (não no rascunho inicial, para não nascer desatualizado) — se adiar, o assistente diz por quê. Commit segue em bloco SEPARADO, mensagem sem acento. O CEREBRO gerado ganha nota equivalente na seção de commit. Tudo por previsão, sem pedir permissão a cada vez.

**Por quê.** Projetos gerados — sobretudo dev/Modo Code — quase nunca recebiam `.gitignore` personalizado nem README (notas de 2026-06-28). O usuário aceita esperar pela geração e não quer ser perguntado "quer que eu gere agora?"; quer previsão e cuidado.

## D-045 — Releitura do mount por turno ao sinal de upload (mesmo sem nomear arquivo); previne responder de memoria a «veja o txt». Instrucao curta, todos os nichos.

**Decisão.** A instrução curta passa a reler notas `.txt` avulsas e o `_MANIFEST.md` do mount **a cada turno** em que o usuário sinalizar upload — mesmo sem nomear o arquivo (ex.: "já subi", "veja o txt", "atualizei o mount") — não só na abertura da sessão. A linha foi **fundida** com o ritual existente de leitura de `.txt` no início (elimina redundância "início" vs "por turno"), em vez de somada como linha nova. O teto de tamanho da instrução curta no harness (`validate.js`) subiu de **6500 para 6900** — o teto anterior era conservador; mesmo com a linha fundida, `game` (~6578) e `narrative` (~6426) ficam com folga real, sem cortar nenhuma outra regra.

**Por quê.** A instrução original só mandava checar `.txt` "no início da sessão". Quando o usuário sinalizava upload no meio da conversa sem nomear o arquivo, o assistente não tinha gatilho para reler o mount e respondia de memória — errando (ex.: chamou uma spec de redundante quando uma nota `.txt` recém-subida já confirmava sua aplicação). Uma primeira tentativa (v1) apenas somou uma linha nova de 360 caracteres, estourando o teto de 6500 em `game` (6840) e `narrative` (6688); a correção mínima sugerida (remover exemplos entre parênteses) não bastava — `game` tinha só ~14 caracteres de folga. A v2 resolveu fundindo as duas regras numa linha só e reavaliando o teto como conservador.

## D-046 — Refino do D-037 (estudo ASU-vs-spec-vs-inteiro): escopo do ASU por tipo de arquivo + verificação obrigatória

**Decisão.** ASU serve para código, docs de heading estável (DECISIONS/CONTEXT/GLOSSARY) e **trecho localizado** de capítulo/escrita longa; **escrita nova ou reescrita profunda** de capítulo e **docs rolantes** (de qualquer nicho, incluindo equivalentes de domínio como `REVISOES`) vão sempre inteiros. Verificação de volta no disco passa a ser obrigatória e autônoma (sem esperar pedido do usuário) sempre que uma instrução ASU foi aplicada e os arquivos estão à vista. Nome do arquivo ASU corrigido de `AAAA-MM-DD-asuNNNN.yaml` para `AAMMDD-asuNNNN.yaml` (follow-up do D-041).

**Por quê.** O estudo ASU-vs-spec-vs-inteiro mostrou que o "lost-in-the-middle" na geração de texto longo é real: reescrever um capítulo inteiro para mudar um trecho arrisca corromper o resto ao redor — então edição localizada em capítulo existente é o caso onde ASU dá utilidade real ao narrativo, mas escrita nova/reescrita profunda não tem âncora (é geração, não edição). Docs rolantes de QUALQUER nicho continuam proibidos para ASU: a edição é holística (mover resolvido, reclassificar, fundir) e briga com patch cirúrgico — o diff pode "bater" e a higiene ainda estar errada, porque ASU não tem julgamento. A verificação precisava ser explícita e autônoma na diretriz gerada (já era o ponto 9 do PROMPT_IA do ASU e o D-042), não deixada implícita.

## D-047 — D-041 aplicado ao gerador (fix): CEREBRO gerado emite AAMMDD para spec e ASU

**Decisão.** D-041 aplicado ao gerador: o CEREBRO gerado (`buildClaudeMd`, `src/index.template.html`) passa a emitir `AAMMDD-asuNNNN.yaml` e `AAMMDD-specNNNN-desc.md` (antes ainda emitia `AAAA-MM-DD-…` em duas linhas); logs seguem `AAAA-MM-DD` (ISO) — split proposital, não mexido.

**Por quê.** D-041 só tinha sido registrado no DECISIONS, nunca aplicado ao gerador; a spec0015 corrigiu só a instrução curta, faltavam as duas linhas do CEREBRO gerado. spec0016 fecha o buraco.

## D-048 — Layout desktop: builder 2 colunas ate 700px, rail sticky em <=900px, sem layout shift

**Decisão.** Layout desktop: builder segue 2 colunas até 700px (antes colapsava em 900); rail vira barra superior fixa (sticky) em <=900px em vez de estática; `.out` ganha `min-height` e o fade perde o `translateY` para eliminar layout shift ao trocar opções/abas. Mobile e layout empilhado alternativo ficam como i-N33 (futuro).

**Por quê.** spec0018, escopo definido pelo usuário (foco desktop): o `.builder` colapsava cedo demais (900px) desperdiçando espaço horizontal disponível; a `.rail` virava `position:static` e rolava para fora da tela em telas médias, quebrando o comportamento "semelhante independente do tamanho da tela"; `.out` com `height:fit-content` + `.view` com `translateY` no fade causavam "pulo" de layout ao trocar opções, incomodando o uso.

## D-049 — Afixo no download passa de escolha exclusiva para prefixo E sufixo independentes

**Decisão.** Afixo no download passa de escolha exclusiva (none/prefix/suffix) para prefixo E sufixo INDEPENDENTES — dois toggles + duas caixas, combinando numa passada (i-N34). Fecha o refino da i-N3 Parte B.

**Por quê.** spec0020. A i-N3 Parte B tratava prefixo/sufixo como modo exclusivo (só um por vez); o refino pedido na i-N34 permite os dois simultâneos e independentes, cobrindo os 4 casos (nenhum, só prefixo, só sufixo, ambos) numa única passada de renomeio.

## D-050 — Nicho narrativa, fase A do refino por feedback de campo (3 projetos de novel + ConStory-Bench)

**Decisão.** O modelo de colaboração vira escolha de fundação (rascunho dirigível vs. direção criativa; `never_writes` removido — os 3 projetos o derrubaram via DEC-007), disciplina-sanduíche (pré/durante/pós com Lista de invariantes que só cresce e 6 erros nomeados), gatilho triplo de capítulo concluído com busca ativa de rótulos, e templates atualizados (Estado atual + invariantes na CONTINUIDADE, ficha com interior/tell/3 camadas, teto de poder na BIBLIA, tempo relativo na CRONOLOGIA, equação de mecânica no GLOSSARY, refresh+espelho na VOZ).

**Por quê.** spec0021. Base: meta/ANALISE-REFINO-NICHO-NARRATIVO.md. Os tres projetos de novel derrubaram, independentemente, o behavior `never_writes` e adotaram o modelo "IA escreve a versão final, autor dirige" (DEC-007 do Novel 3, copiado pelos outros dois) — o nicho carregava dois behaviors em contradição. Os FIXes de campo (capability bleeding, vazamento de metadado, drift cognitivo, status-desatualizado recorrente) e a pesquisa (ConStory-Bench 2026: erros sistemáticos, densidade cresce com o tamanho da saída) pediam uma disciplina de escrita explícita.

## D-051 — Nicho narrativa, fase B (i-N35): switch niche-scoped «Gerar skills de escrita?»

**Decisão.** Switch niche-scoped «Gerar skills de escrita?» que emite um pacote de 4 Agent Skills (escrita-serial, checagem-continuidade, voz-calibragem, textura-mundo) como apêndice do CEREBRO — mesmo padrão do Modo Code. Toggle só aparece em nichos que declaram `skillsPack` (hoje só narrative); pacote vive no CEREBRO sob demanda, sem impacto no teto das Instruções. Formato oficial Agent Skills (frontmatter name+description; description pushy; seção «Aplicação neste projeto» para o projeto preencher).

**Por quê.** spec0022, fase B do refino do nicho narrativa (base: meta/ANALISE-REFINO-NICHO-NARRATIVO.md). O toggle é niche-scoped (via `n.skillsPack`) para não poluir os outros 16 nichos; o pacote entra só no CEREBRO (sob demanda) para não inflar as Instruções lidas em todo turno — mesma arquitetura já validada pelo Modo Code (D-041/D-047). Harness G6 novo cobre o round-trip e o niche-scoping (narrative tem o toggle; dev não tem). 17/17, 33/33, 0 erros; `N[narrative]` segue em 6688/6900.

## D-052 — Skills de escrita saem do CEREBRO e viram pacote `skills.zip` separado (Q1/Nível 2)

**Decisão.** Skills de escrita saem do CEREBRO e viram pacote `skills.zip` separado (botão próprio na aba de saída), estrutura `skills/<nome>/SKILL.md` (arrasta para `.claude/`). CEREBRO fica só com ponteiro (intro + tabela de gatilhos + instalação): inchaço cai de +29% para +4,4%. Reusa o JSZip do `downloadZIP`. Q1/Nível 2 da análise. Zip inclui README com cláusula anti-`.gitignore` de `.claude/`.

**E o princípio geral:** Diretriz KCM: o CEREBRO.md contém SÓ regras/diretrizes/técnicas FIXAS — nunca artefatos temporários nem instruções autodestrutivas («apague este bloco»). Qualquer material de instalação/arranque sai como arquivo/download separado, jamais como bloco-para-remover dentro de um arquivo de regras. (Aplicado às skills nesta spec; o mesmo padrão no Modo Code será corrigido na spec0026.)

**Por quê.** spec0023, base: meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md (Q1, Nível 2). O switch de D-051 emitia as 4 SKILL.md inteiras como texto no CEREBRO (+10.055 chars, +29%) e ainda carregava uma instrução autodestrutiva («pode apagar este apêndice») — anti-padrão de progressive disclosure (o corpo da skill deveria carregar sob demanda, não ficar sempre lido) e um risco (usuário ou IA obedece e remove algo importante). Harness G6 reescrito para provar que o corpo NÃO vaza pro CEREBRO e que o ponteiro aponta o `skills.zip`. 17/17, 33/33, 0 erros; `N[narrative]` segue em 6688/6900.

---

## D-053 — Controle de skills de escrita sai do topbar e vai para o builder «A obra», default LIGADO

**Decisão.** Controle de skills de escrita sai do topbar e vai para o builder «A obra» (ao lado de Colaboração), com default LIGADO. Motivo: topbar sobrecarregado causava clique-errado; «skills» é escolha DA OBRA, não modo global. Estado migra de `STATE.topbar.skillsMode` para `STATE.builder.skillsMode`; `skillsPackOn` passa a default-ON (só «no» explícito desliga). Q2/opção (a) da análise. Reforma dos 3 toggles universais fica para fase futura (pesquisa dedicada).

**Por quê.** spec0024, base: `meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md` (Q2, opção (a)). Harness G6 reescrito (default LIGADO sem setar nada; `skillsMode` some do `topbar` do narrative). 17/17, 33/33, 0 erros; `N[narrative]` segue em 6688/6900.

## D-054 — Refino das 4 skills de escrita (Q3): 10 técnicas de campo incorporadas

**Decisão.** Incorporadas 10 técnicas concretas das skills provadas em campo (Novel 2/3) aos `body` das 4 skills de escrita: discurso direto vs. reportado + teste de imersão, ratio de diálogo ~40%, flag de uma frase, regra de ouro do POV paralelo (escrita-serial); cura do drift cognitivo (verbo mental → gesto físico) + teste «ela-não-come» + anti-correção (voz-calibragem); retecer fora de cena, revelar por atrito, checklist 1-de-3 (textura-mundo); pergunta-oráculo (checagem-continuidade).

**Por quê.** spec0025, base: `meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md` (Q3) — comparação com as 4 skills provadas em campo (Novel 2/3), que tinham técnica concreta (o «como fazer») ausente do protocolo capturado na spec0022. Sem custo de contexto: as técnicas vão pros SKILL.md do zip (spec0023), o ponteiro no CEREBRO não muda. 17/17, 33/33, 0 erros; `N[narrative]` segue em 6688/6900.

---

## D-055 — Modo Code: apêndice de arranque sai do CEREBRO e vira `claude-code-kit.zip` separado, formato Skills atual

**Decisão.** Modo Code: apêndice de arranque sai do CEREBRO e vira `claude-code-kit.zip` separado (botão próprio), espelhando a D-052. Remove a instrução autodestrutiva «pode apagar». Comandos migrados do formato legado `.claude/commands/*.md` para o atual `.claude/skills/<nome>/SKILL.md` (slash commands fundidos em Skills em 2026; `disable-model-invocation: true` para só rodarem por invocação). CLAUDE.md starter atualizado (regra «< 200 linhas», config Sonnet/Opus atual em vez da regra obsoleta da i-N29). Harness G7. Fecha i-N37 e o ciclo de refino de modos (skills+code).

---

## D-056 — Os 3 modos universais migram do topbar para o painel global «Modo de trabalho»

**Decisão.** `groupMode`/`asuMode`/`codeMode` saem da injeção de toggles soltos no `topbar` de todo nicho e passam a viver num painel `<details class="workmode">` (checkbox agrupado sob heading, progressive disclosure nativa), posicionado no `.main` logo abaixo do topbar sticky, **fora de qualquer `.view`** — visível/recolhível de qualquer aba. Estado migra de `STATE.topbar.*` para `STATE.workmode.*`, mas continua **por-nicho** (mesma vida do antigo `STATE.topbar`): "global" aqui é alcance de UI (painel aparece em toda aba), não estado compartilhado entre nichos — a saída gerada por nicho não muda. Harness G4/G5/G7 migrados para `STATE.workmode` + guarda nova "modo NAO deveria mais estar no topbar" (trava de regressão).

**Por quê.** spec0028, base: `meta/ANALISE-REFORMA-MODOS-TOPBAR.md` (seções 1-2) + i-N36. Pesquisa + D-053 confirmaram que toggles soltos no topbar são erro (clique-errado) e que segmented control está refutado (os 3 modos coexistem, seleção independente). Fecha a parte 1 da fase C da i-N36. 17/17, 34/34, 0 erros.

---

## D-057 — Selos de estado multicanal (cor+glifo+rótulo), empilháveis, perto da saída

**Decisão.** Cada modo ligado (`grupo`/`Code`/`ASU`) ganha um selo discreto e empilhável acima do preview da saída, nunca cor sozinha (WCAG 1.4.1): três canais — cor (`--sc`), glifo (`.g`) e rótulo em texto. O contraste vive no contorno + texto (WCAG 1.4.11), não no preenchimento — fundo transparente, borda e texto herdam `--sc`. Ordem estável: grupo → Code → ASU (mesma ordem do painel «Modo de trabalho» da D-056). Glifos/cores fixados: grupo = `◉` + verde, Code = `⌘` + âmbar, ASU = chevron duplo `»` + `--teal:#5cc2c9` (on-dark do `#0E7C86` da análise, escolhido porque o tema é escuro). `workBadges()` é a fonte pura (testável), `renderWorkBadges()` só espelha no DOM; harness G8. O atualizador i-N40 não ganha selo — entra depois como ação futura perto da saída.

**Desvio aplicado em relação à spec0029 (documentado, confirmado com o usuário durante a aplicação):** as classes CSS dos selos saíram de `.selo.group`/`.selo.code`/`.selo.asu` para `.selo.selo-group`/`.selo.selo-code`/`.selo.selo-asu`. Motivo: `.group` já existe como classe utilitária genérica no template (painéis `<div class="group">`, linha ~213) com `background:var(--panel)` + `border:1px solid var(--line-soft)` + `padding:18px 20px` — mesma especificidade do `.selo.group` da spec e declarada depois no CSS, então vencia a cascata e quebrava o selo «Grupo» (fundo sólido em vez de transparente, borda cinza em vez de verde), falhando o passo 2 da verificação visual da própria spec. Os ids internos (`workBadges()[].id === "group"`) e o harness G8 não mudaram — só o nome da classe CSS renderizada.

**Por quê.** spec0029, base: `meta/ANALISE-REFORMA-MODOS-TOPBAR.md` (seção 3). Fecha a parte 2 da fase C da i-N36 (feedback ambiental). 17/17, 35/35, 0 erros.

---

## FIX-007 — spec0029 nomeou a classe CSS do selo de grupo com nome já usado (`.group`), quebrando o contraste
**Versão:** v1.55.0 (spec0029) · **Gravidade:** média (passava no harness JS, mas quebrava a regra visual central da própria spec — fundo transparente/contraste no contorno)
- **Sintoma:** com os 3 modos ligados, o selo «Grupo» aparecia com fundo sólido cor de painel e borda cinza, em vez de fundo transparente + contorno verde (os selos Code/ASU renderizavam corretos).
- **Causa raiz:** a spec0029 (Tarefa A.2) instruiu `.selo.group{--sc:var(--green)}`, mas `.group` já existe no template como classe utilitária genérica de painel (`background:var(--panel);border:1px solid var(--line-soft);padding:18px 20px`, usada em vários `<div class="group">`). Mesma especificidade CSS (duas classes vs. uma, mas a regra genérica define as propriedades que a nova não sobrescreve) e a regra genérica vem depois no arquivo → vencia a cascata para `background`/`border`/`padding`.
- **Como foi pego:** não pelo harness (que só testa `workBadges()`, a lógica pura, não CSS) — pego na verificação visual manual no navegador que a spec0029 pede explicitamente como passo além do harness. `preview_inspect` confirmou `background-color` resolvendo para `--panel` em vez de transparente.
- **Correção:** classes renomeadas para `.selo-group`/`.selo-code`/`.selo-asu` (sem colisão); `id`s internos e harness G8 inalterados. Detalhe completo na nota "Desvio aplicado" da D-057.
- **Reforço registrado:** nomes de classe CSS novos em specs devem ser conferidos contra classes utilitárias genéricas existentes (`.group`, `.card`, etc.) antes de aplicar — o harness JS não pega colisão de CSS; só a verificação visual pega.

**Por quê.** spec0026, base: `meta/ANALISE-MODO-CODE-REFINO.md`. O mesmo anti-padrão da D-052 (apêndice inline + instrução autodestrutiva) existia no Modo Code, além do formato legado de comandos. 17/17, 34/34, 0 erros.

---

## D-058 — Modos voltam ao topbar como botões-toggle agrupados; painel e selos saem

**Decisão.** Os 3 modos (`groupMode`/`codeMode`/`asuMode`) saem do painel `<details class="workmode">` (D-056) e dos selos perto da saída (D-057) e passam a viver como um cluster `.modes` de botões-toggle (`.modebtn`, `aria-pressed`) dentro do próprio `#topbar`, herdando o `position:sticky` dele — fixos ao rolar de graça. Ativo, o botão enche com a cor do modo (Grupo verde, Code laranja de verdade via nova variável `--code:#e8823a`, ASU teal) + rótulo curto, multicanal (cor + rótulo + `aria-pressed`), lê em escala de cinza (cheio vs. contorno). As descrições viram tooltip própria (`.tip`, não `title`), aparecendo em `:hover` e `:focus-visible`, `pointer-events:none` (nunca bloqueia o clique), posicionada abaixo do botão, `aria-describedby` → `role="tooltip"` — decisão com lastro em WCAG 1.4.13 (conteúdo não-essencial, já que cor+rótulo bastam). `STATE.workmode` e `workBadges()` são mantidos (harness G8), `workBadges()` passa a ler a nova fonte única `WORK_MODES` (antes `WORK_SELOS`) com mesma forma/ordem de retorno.

**Por quê.** spec0030, base: `meta/ANALISE-REFORMA-MODOS-TOPBAR.md` + feedback do usuário (260706-1026.txt): o painel `<details>` não é sticky (some ao rolar) e os selos perto da saída ficaram pouco visíveis; o topbar já é sticky de graça. Fecha a parte 1 da fase "topbar inteiro" da i-N36 (antes de spec0031 e spec0032). 17/17, 35/35, 0 erros.

---

## D-059 — Canto do topbar vira cluster de ação (engrenagem → modal `<dialog>`); afixo migra para dentro dele

**Decisão.** O `.sync-note` redundante (● + rótulo do nicho) no canto direito do topbar sai — a rail já identifica o nicho — e dá lugar a um cluster `.actions`, que nasce com **1 botão: a engrenagem** (`#act-cfg`). Clicar nela abre um `<dialog id="cfg-dialog" class="cfg">` nativo (`showModal()`: centraliza, prende foco, fecha no Esc, tem backdrop) com a seção **Projeto**, que passa a hospedar a config **global do afixo** (prefixo/sufixo + preview), migrada da aba Templates por **move de HTML com IDs preservados** (`affix-box`, `affix-prefix-on/text`, `affix-suffix-on/text`, `affix-preview`) — `applyAffix`/`AFFIX`/lógica de fiação no boot não mudam. Abrir/fechar o modal não toca `STATE.niche` nem re-renderiza views. Download e atualizar entram no mesmo cluster nas specs 0033/0034 (sem botão morto agora). **SO fica de fora** desta spec — segue entelado com `OSENV`/`#g-os`; migração dele fica para spec própria.

**Desvio técnico da spec aplicado e confirmado com o usuário antes de corrigir:** a spec0031 mandava inserir o bloco `<dialog>` **depois** do `</script>` final (imediatamente antes de `</body>`). Verificação visual no navegador expôs que isso quebra a fiação: `boot()` roda de forma síncrona no fim do `<script>` inline (sem `DOMContentLoaded`), e como o parser HTML só adiciona ao DOM o que já leu, o `<dialog>` — por vir depois do `</script>` — ainda não existia quando `boot()` tentava `$("#cfg-close")`/`$("#cfg-dialog")`/`$("#affix-prefix-on")` etc., que retornavam `null` e deixavam os listeners nunca anexados (X não fechava, backdrop não fechava, toggles de prefixo/sufixo não habilitavam os campos nem atualizavam o preview — Esc continuava funcionando por ser nativo do `<dialog>`, mascarando o problema numa checagem superficial). Correção: o bloco `<dialog>` foi movido para **antes** da tag `<script>` (mesmo HTML, mesmos IDs, mesmo CSS/JS — só a posição no documento mudou), restaurando a premissa implícita do arquivo (todo HTML vem antes do `<script>` final que faz o boot). Reconfirmado no navegador: X fecha, backdrop fecha, Esc fecha, toggle de prefixo habilita o campo e atualiza o preview ao digitar.

**Por quê.** spec0031, base: `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md` §2. Prepara o terreno para spec0032 (aba Nicho + campos `multi`/`segmented`), spec0033 (download estruturado) e spec0034 (atualizar). Harness sem check novo nem alterado (é UI + realocação de HTML; nenhum `build*`/campo/estado de saída muda) — 17/17, 35/35, 0 erros.

---

## D-060 — Sistema de campos ganha `multi`/`segmented`, roteados ao modal por `panel:"modal"`; gênero de jogo vira multi

**Decisão.** O sistema de campos de nicho (`topbar:[...]`) ganha dois tipos novos: **`multi`** (chips aditivos, valor-lista — múltiplas seleções acendem/apagam independentes) e **`segmented`** (chip de escolha única, mesmo visual mas exclusivo). Campos podem declarar `panel:"modal"` para renderizar na nova seção **Nicho** do modal de configuração (`#cfg-sec-nicho`/`#cfg-nicho-body`, via `renderNicheConfig`) em vez do `#topbar` — `renderTopbar` passa a filtrar `f.panel !== "modal"`. A seção nasce `hidden` e só aparece quando o nicho ativo tem ao menos um campo `panel:"modal"`. Reusa o padrão de chips já existente no builder (`.chip`/`.chip.on`, `cur.includes(v)`) — nenhum componente novo. O campo `genreSel` do nicho **game** (14 opções) sai da topbar, vira `type:"multi"` + `panel:"modal"`, label "Gênero (pode ser mais de um)". Degrada limpo: um `STATE.topbar.genreSel` antigo (string, de sessão anterior) não é array → cai no default `[]`, sem erro.

**ACHADO registrado (P8/P13).** Rastreando o template: campos de topbar do nicho (`genreSel`/`engineSel`/`phase` etc.) **só são lidos no render e na gravação de `STATE.topbar`** — **não entram na saída gerada** (CEREBRO/Instruções) hoje. São metadados de UI que não moldam o contexto exportado. Esta spec conserta o **controle** (e o modelo de dados: um jogo agora registra vários gêneros corretamente), mas a **fiação até a saída fica para spec futura** (ver i-N41 em IDEAS.md).

**Por quê.** spec0032, base: `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md` §3. Pesquisa fixou que multi-seleção com opções visíveis pede chips, não dropdown, e que campos numerosos/defina-e-esqueça pertencem ao modal, não à topbar apertada. Aplicada depois da spec0031 (modal/dialog já existente). Harness sem check novo nem alterado — campos de topbar não entram na saída gerada, nenhum `build*` muda — 17/17, 35/35, 0 erros.

---

## D-061 — `buildInstr` ganha bloco "Contexto do projeto"; conserto do desencontro `phase`/`fase` no Estágio

**Decisão.** `buildInstr` passa a emitir, logo após a linha "Estágio", uma linha **"Contexto do projeto: ..."** com os campos de `niche.topbar` ainda não consumidos no cabeçalho (ex.: gênero, engine) — mas só quando têm valor preenchido (campo vazio não aparece; array vira lista separada por vírgula; múltiplos campos são unidos por " · "). Os IDs já consumidos no cabeçalho (`project`/`projeto`/`peca`/`tema`/`version`/`versao`/`fase`/`phase`/`langSel`) ficam fora do bloco, para não duplicar. **Conserto de brinde:** o check do Estágio testava só `tb.fase`, mas o campo "Fase" usado em game/narrativa tem `id:"phase"` — a Fase nunca entrava na saída; o check ganhou `|| tb.phase` (linha e leitura), então agora "Fase: Protótipo" aparece como "Estágio: Protótipo." `buildClaudeMd` não foi tocado — contexto do projeto é do CONTEXT, não do CEREBRO.

**Por quê.** spec0033, base: `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md` + achado registrado na D-060 (campos de nicho como `genreSel`/`engineSel` eram preenchidos mas não moldavam a saída, tornando o gênero multi da spec0032 apenas cosmético). Fecha a **i-N41**. Bloco guardado por presença de valor mantém o teto `instr.length ≤ 6900` intacto no teste (topbar vazia não emite nada). Harness sem check novo nem alterado — 17/17, 35/35, 0 erros.

---

## D-062 — Download estruturado (projeto novo) no cluster de ação: árvore de pastas ciente da config

**Decisão.** Novo botão `#act-dl` ("↓") no cluster de ação do canto (`actionsClusterHTML`, spec0031), ao lado da engrenagem, chamando `downloadStructuredZIP` — a intenção **"projeto novo"**: entrega o projeto **já na árvore de pastas certa**, ciente da config, para descompactar e começar (em vez de montar as pastas à mão + FlatDrop). Árvore gerada (`<raiz>` = slug do nome do projeto ou "projeto"): `meta/` (arquivos de contexto via `effectiveFiles`, **nomes canônicos sem afixo**) + `INSTRUCOES-DO-PROJETO.md` na raiz (via `buildInstr`) + `logs/.gitkeep` — sempre; com **modo Code** ligado, soma `CLAUDE.md` + `.claude/settings.json` + `.claude/skills/apply-spec|wrap/SKILL.md` (via `buildCodeKitFiles`) + `meta/specs/.gitkeep`; **skills do nicho** (se ligadas) em `.claude/skills/<nome>/SKILL.md` (Code) ou `skills/<nome>/SKILL.md` (sem, via `buildSkillMd`); `.gitignore` e `.flatdropignore` gerados na hora (o segundo enxuga `logs/` sempre e `meta/specs/` a mais no modo Code) + `README.md` de arranque. **O afixo (`applyAffix`) não é aplicado** — nomes limpos são a intenção de projeto novo; o afixo serve à disambiguação do fluxo de **atualização** de projeto existente (i-N40/spec0035). Pastas vazias (`logs/`, `meta/specs/`) levam `.gitkeep` porque descompactadores/git nem sempre preservam pasta vazia. Botão reusa `.actbtn` (spec0031) — sem CSS novo. Os downloads **granulares** (Baixar todos/ZIP/skills/kit-Code, aba Templates) ficam — são a intenção "peças avulsas", mantida a pedido do usuário.

**Por quê.** spec0034, base: `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md` §1 + decisões do usuário. Aplicada depois da spec0033 (cluster de ação e campos de nicho já maduros). O botão **atualizar** (i-N40) entra no mesmo cluster na spec0035, onde o afixo volta a valer. Harness sem check novo nem alterado — as funções são aditivas e só chamam builders já cobertos; como os demais downloads, não têm check dedicado (ação de DOM/blob) — verificado no navegador (JSZip in-page): árvore base, árvore com Code, árvore com skills+Code e conteúdo do `.flatdropignore` conferem com a spec. 17/17, 35/35, 0 erros.

---

## D-063 — Modo Atualização Fase A: motor `buildUpdatePack` achatado + afixado + `_UPDATE-MANIFEST.md`

**Decisão.** `buildUpdatePack(niche)` coleta os artefatos do nicho (meta + CEREBRO + INSTRUCOES + skills/kit-Code conforme modo), achatados e afixados com `__template-update` (afixo fixo, **≠ AFFIX do usuário**, que é dos downloads normais). `updateFlat(displayName)` insere o afixo antes da última extensão (`<skill>.SKILL.md` vira `<skill>.SKILL__template-update.md`). `_UPDATE-MANIFEST.md` (via `buildUpdateManifest`) mapeia **nome-plano → destino real + natureza** (`template`/`fusao`) numa tabela, com nicho/modos ligados/data/afixo no cabeçalho. **CEREBRO e INSTRUCOES são `fusao`** (montados com a build ativa do momento — merge proposto, nunca substituição cega); os demais (meta/*.md, skills, kit-Code) são `template`. Manifesto usa **data** (`today`), não versão — o produto não expõe constante de versão real (o "v1.4" da tela é stamp velho; a versão vive em `meta/STATUS.md`, fora do build); desvio consciente da análise §4.1, registrado. Check **G9** valida: pack não vazio, manifesto com assinatura, nomes planos únicos (com e sem Code ligado), todos com o afixo, kit-Code fora quando desligado/dentro quando ligado, CEREBRO/INSTRUCOES = `fusao`.

**Escopo:** só o motor + manifesto + G9 — **sem UI, sem zip, sem prompt** (Fase B). Não toca `downloadZIP`/`downloadSkillsZIP`/`downloadCodeKitZIP`/`downloadStructuredZIP` (aditivo); não aplica o `AFFIX` do usuário.

**Por quê.** spec0035, base: `meta/ANALISE-MODO-ATUALIZACAO.md` §4 (esquema de nomes), §4.5 (fusão), §7 (riscos) — i-N40, Fase A. A dor real: `downloadZIP` já achata+afixa os `meta/*.md`, mas skills/kit-Code saíam em subpastas sem afixo, colidindo quando o Projeto do Claude achata tudo (vários `SKILL.md` iguais). Aplicada depois da spec0034. Harness: **+1 check (G9), 35/35 → 36/36**. Fase B (prompt + UI: botão ↻ + `<dialog>`) e Fase C (gatilho no CEREBRO) em specs seguintes. 17/17, 36/36, 0 erros.

---

## D-064 — Modo Atualização Fase B: `buildUpdatePrompt` (disparo para IA, nunca diffs) + `downloadUpdatePack` (zip achatado) + UI (botão ↻ → `<dialog>` de duas saídas)

**Decisão.** `buildUpdatePrompt(niche)` monta o **disparo humano** que a conversa-alvo executa: orienta a IA a **comparar** cada arquivo do pacote com o vivo equivalente do projeto e **reportar** (a) novidade útil, (b) choque — lado a lado, o usuário decide, (c) o que o projeto tem e o template não cobre; **nunca sobrescrever** conteúdo vivo por template vazio; itens `fusao` (CEREBRO/INSTRUCOES) pedem merge, nunca substituição cega. **Regra dura (análise §3): o prompt jamais contém blocos de diff** — é orientação/disparo, não uma lista de edições para o humano colar. `downloadUpdatePack()` zipa (JSZip) o pacote achatado de `buildUpdatePack` + `_UPDATE-MANIFEST.md` + `_UPDATE-PROMPT.md` como `<nicho>-template-update.zip`. UI: botão **↻** (`#act-upd`) no cluster de ação (ao lado de `#act-dl`/`#act-cfg`) abre `<dialog id="upd-dialog">` com nota do que é o pacote, **linha de status dos modos ligados agora** (`renderUpdateDialog`, refeita a cada abertura — reflete skills/Code no momento do clique) e duas ações: baixar o zip ou copiar o prompt (com fallback de erro se `navigator.clipboard` falhar). `<dialog>` fica **antes do `<script>`**, ao lado do `cfg-dialog` (lição D-059 — o `boot()` fia listeners síncronos). Check **G10** trava a regra dura: prompt não vazio, contém a rotina de comparação, contém a regra de não-sobrescrever, e **não contém ```** (bloco de código/diff).

**Por quê.** spec0036, base: `meta/ANALISE-MODO-ATUALIZACAO.md` §2/§3/§5/§6 — i-N40, Fase B (fecha o i-N40 junto com a Fase C). Aplicada depois da spec0035 (motor da Fase A). A UI estava adiada até a correção dos 3 modos (spec0030); liberada agora. Harness: **+1 check (G10), 36/36 → 37/37**. Verificado no navegador: cluster com três botões (↓/↻/⚙), dialog abre com status correto ("skills nao · Code nao" no nicho recém-selecionado), prompt gerado sem blocos de diff e com a rotina de comparação/não-sobrescrever, fechamento por ✕ mantém nicho/aba. Fase C (bloco `UPDATE_PROTOCOL` no CEREBRO) é a próxima spec. 17/17, 37/37, 0 erros.

---

## D-065 — FIX: CEREBRO/INSTRUCOES faltavam nos downloads de "templates" (fonte única `generatedContextFiles`)

**Bug.** `CEREBRO.md` e `INSTRUCOES-DO-PROJETO.md` são **gerados** (`buildClaudeMd`/`buildInstr`) e **não vivem** em `niche.contextFiles`. Como todo download de "templates" iterava só `effectiveFiles`/`contextFiles`, os três saíam incompletos: `downloadStructuredZIP` (projeto novo) sem `meta/CEREBRO.md` (o INSTRUCOES já ia à raiz por linha explícita); `downloadZIP` ("Pacote em ZIP") sem CEREBRO **e** INSTRUCOES; `downloadAllTemplates` ("Baixar todos") sem CEREBRO **e** INSTRUCOES. Era *drift*: o CEREBRO é montado à parte e nunca foi somado às listas. Bug achado pelo usuário (estruturado sem `meta/CEREBRO.md`) + auditoria dos downloads que ele pediu.

**Decisão.** Novo helper **`generatedContextFiles(niche)`** (após `effectiveFiles`) vira a **fonte única dos gerados**: retorna `[CEREBRO.md {meta:true}, INSTRUCOES-DO-PROJETO.md {meta:false}]` com `content` já montado. Os três downloads consomem: `downloadZIP` achata+afixa (`applyAffix`, como o resto do pacote); `downloadAllTemplates` concatena aos individuais; `downloadStructuredZIP` roteia por `f.meta` (CEREBRO→`meta/`, INSTRUCOES→raiz, **sem afixo** — segue projeto novo), substituindo a linha explícita do INSTRUCOES (o helper assume, sem duplicar). Assim, somar um gerado no futuro cobre os três de uma vez. **Não** mexe em `downloadSkillsZIP`/`downloadCodeKitZIP` (propósito específico, o kit-Code já traz `CLAUDE.md`); não aplica afixo no estruturado. Check **G11** trava a regressão: valida que os gerados existem na fonte compartilhada com `name`/`meta`/`content` corretos.

**Por quê.** spec0037, base: BUG do usuário + auditoria dos downloads. Aplicada depois da spec0036 (Fase B do i-N40). Independe da spec0038 (Fase C). Harness: **+1 check (G11), 37/37 → 38/38**. 17/17, 38/38, 0 erros.

---

## D-066 — Modo Atualização Fase C: bloco incondicional `UPDATE_PROTOCOL` no CEREBRO (via `buildClaudeMd`), fecha o i-N40

**Decisão.** `buildClaudeMd` ganha uma seção **incondicional** «Ao receber um template-update do KCM», inserida **antes** de «Regras de higiene» — vale para todo projeto gerado, ligado ou não a modos. É a versão **condensada e permanente** do prompt da Fase B (spec0036): ensina a IA-alvo a reconhecer o sufixo `__template-update` + o `_UPDATE-MANIFEST.md`, e a rotina **comparar → reportar → nunca-sobrescrever** — (a) novidade útil que falta, (b) choque lado a lado (o usuário decide), (c) o que o projeto tem e o template não cobre. Itens marcados `fusao` no manifesto (CEREBRO, INSTRUCOES) pedem **merge proposto, nunca substituição cega**. Sem teto de caracteres no CEREBRO (o teto N é só das Instruções), então é acréscimo de baixo risco; os checks G4/G5/G7 (substring de HUB/ASU/Code no `buildClaudeMd`) seguem intactos. Check **G12** trava a presença: `template-update` + regra de não-sobrescrever + distinção `template`/`fusao`. **NÃO** põe diffs, não duplica o prompt inteiro, não toca downloads.

**Por quê.** spec0038, base: `meta/ANALISE-MODO-ATUALIZACAO.md` — i-N40, Fase C. Aplicada depois da Fase B (spec0036); independe da spec0037. Torna todo projeto gerado ciente de como lidar com um template-update **mesmo sem o prompt**. Harness: **+1 check (G12), 38/38 → 39/39**. **Fecha o i-N40 (Modo Atualização): Fases A+B+C completas.** 17/17, 39/39, 0 erros.

---

## D-067 — FIX: pacote de atualização vinha sem `.gitignore`/`.flatdropignore`

**Bug.** `buildUpdatePack` (Fase A do i-N40) empacotava meta/*, CEREBRO, INSTRUCOES, skills e kit-Code, mas **não incluía os dois ignores** que o download **estruturado** já gera (`structuredGitignore`/`structuredFlatdropignore`, da spec0034). Resultado: um projeto que se atualiza pelo pacote nunca recebia melhorias no `.flatdropignore`/`.gitignore` recomendados. Bug achado pelo usuário; independente das specs anteriores.

**Decisão.** `buildUpdatePack` passa a somar os dois ignores **sempre**, antes do manifesto, **reusando os helpers** já existentes (mesma fonte do estruturado — sem duplicar): `structuredGitignore()` e `structuredFlatdropignore(codeOn)`, natureza `template`, nomes planos `gitignore__template-update` / `flatdropignore__template-update` (destino real `.gitignore`/`.flatdropignore` no manifesto). Auditoria: o pacote passa a conter tudo que um projeto completo tem. **Fora de propósito** (intencional): `HUB.md` (é de grupo, baixado à parte) e os `.gitkeep` de pasta vazia (o pacote é achatado — a atualização mescla conteúdo, não recria estrutura). Os downloads granulares (`downloadZIP`/`downloadAllTemplates`) **não** recebem os ignores (são infra de raiz, não "templates"). Check **G13** trava a regressão: valida `.gitignore`/`.flatdropignore` com conteúdo no pacote + nomes planos únicos.

**Por quê.** spec0039, base: BUG do usuário + auditoria do pacote de atualização. Independe das anteriores. Harness: **+1 check (G13), 39/39 → 40/40**. Pacote de atualização agora completo (auditado). 17/17, 40/40, 0 erros.

---

## D-068 — FIX: prompts de transferência eram mode-blind e mandavam regenerar todos os meta no chat

**Bug.** Os prompts A–F eram o último subsistema **mode-blind** do KCM. O prompt **E ("Conversa pesada — transferir agora")** mandava *"gere **todos** os arquivos de contexto… o conteúdo **ATUAL e COMPLETO** de cada arquivo"* — ou seja, **regenerar os meta grandes no momento mais pesado da conversa**. Anti-padrão com **perda documentada** (no satelite-web, uma regeneração do `IDEAS.md` comeu 33 bullets — virou regra lá: *"nunca regenerar meta grande no chat; no chat só se geram arquivos NOVOS"*), **destrutivo no modo Code** (dois escritores: o chat regenerando contra o repo, que é a verdade e recebe **append**) e **contraditório no ASU** (lá edições saem como `.yaml`, não arquivo inteiro).

**Decisão.** **E** e **F** viram **mode-aware**, e a transferência passa a produzir o artefato que de fato funciona — o **HANDOFF-BRIEF** (arquivo **novo**, seguro de gerar no chat), com a memória permanecendo nos arquivos/repo. **E**: gera o HANDOFF-BRIEF (atalho de arranque, não a memória) e trata o contexto por modo — **Code**: **não regenerar** os meta no chat, listar o append pendente e garantir **commit/push** (o repo é o que a próxima conversa lê); **ASU**: edições por `.yaml`, brief novo vem inteiro; **vanilla**: **só os arquivos que mudaram** + higiene P12 (não perder nada único); **grupo**: empilha o processamento do HUB. **F** vira **ritual** numerado com precedência explícita (**os arquivos vencem o brief**) e o passo do repositório só no modo Code. `PROMPTS_BASE` exposto no SHIM; **G14** trava a regressão (Code não regenera; vanilla só o que mudou; brief não vence os arquivos). Não se criou "modo transferência" nem 4º selo; brief não é versionado em `meta/` por padrão (é efêmero); prompts A/B/C/D e `promptsExtra` intocados.

**Por quê.** spec0040, base: `meta/ANALISE-PROMPTS-E-TRANSFERENCIA.md`. Independe das anteriores. Harness: **+1 check (G14), 40/40 → 41/41**. Prompts C/D ficam para a spec seguinte (i-N42). 17/17, 41/41, 0 erros.

---

## D-069 — Nasce o 18º nicho `career` (Carreira & Trabalho): evidência → dossiê → artefato, com contraponto antes do irreversível

**Decisão.** O KCM ganha seu **18º nicho** (17 de conteúdo + `custom`): `career`, grupo `serif`, categoria `core`. A **tese** é uma cadeia de derivação: o que você já fez entra como **fato datado + prova** (`EVIDENCIAS.md`, append-only) → consolida em **competência com lastro** (`DOSSIE.md`, derivado; toda linha aponta para um EV-xxx) → vira **artefato** (currículo/pitch/portfólio) que nunca afirma o que não pode provar. Em paralelo, `SITUACAO.md` mantém o **contratado × real** (linha do tempo do escopo, com data/quem-pediu/prova — o dado que a negociação exige e a memória perde) e `DECISIONS.md` registra o porquê **com o melhor contra-argumento na mesa**. Seis **behaviors**: `evidence_first` (evidência antes de adjetivo), `scope_ledger` (livro-razão do escopo), `benchmark_sourced` (número com fonte, ou não é número), `counterargue_before_irreversible` (contraponto antes de ato que não se desfaz — aumento, revisão de cargo, recusa, demissão, publicar material da empresa), `mine_projects` (minera os meta/ de outro projeto em evidência; projeto pequeno gera evidência pequena) e `vent_is_not_fact` (desabafo é sinal, não fato; questão jurídica/saúde → organiza os fatos e aponta o profissional, sem dar parecer). Campo **Fronteiras** ("o que você NÃO quer") no builder, usado para avisar antes que o escopo cruze a linha por inércia. **Regra de privacidade** (convenção 7): o projeto do usuário é sensível → versiona **local ou em repositório PRIVADO**, nunca publica salário, dados de terceiros ou da empresa — o **template** do kit é que é público. Topbar com `momentSel` (select) e `frentes` (multi, modal); 10 templates (CONTEXT, EVIDENCIAS, DOSSIE, SITUACAO, MERCADO, PLANO, ESTUDO, DECISIONS, STATUS, LOG-TEMPLATE); 6 prompts extras (G–L: minerar projeto, radiografia do escopo, faixa com fonte, conversa difícil, currículo com lastro, decidir). Novo check **G15** trava behaviors-chave + arquivos do dossiê + os campos de topbar (Momento/Frentes) chegando ao `buildInstr` (spec0033) sob o teto de 6900 (instr do career: 6179/6900).

**Por quê.** spec0041, base: `meta/analises/260713-ANALISE-NICHO-CARREIRA.md` (o chat curou; o Code só posicionou). Independe das anteriores. Harness: **+1 nicho e +1 check (G15), 17/17 · 41/41 → 18/18 · 43/43** (o G1 subiu de 17 para 18 nichos; a linha final do harness deixou de ser hardcoded). 18/18, 43/43, 0 erros.

## D-070 — Dois orçamentos de instrução (base 6900 / pior caso 7600); o teto nunca fora medido sob escolha do usuário

**Decisão.** O KCM passa a medir **dois** orçamentos para a instrução de cada nicho: **base ≤ 6900** — a instrução sem nenhuma escolha do usuário (check `N[...]`, inalterado) — e **pior caso ≤ 7600** — com **todos** os chips/multi marcados (novo check **G16**). Motivo do achado: ao escrever a spec0042 descobriu-se que (a) o check de chips (FIX-004) estava **vácuo** — normalizava para `.items` mas lia `norm.groups`, sempre `undefined` no formato moderno, então nunca validou nada; e (b) o teto de 6900 **jamais fora medido no uso real** — só com zero opções. Medindo o pior caso, três nichos já furavam 6900 no produto publicado (`narrative` 7174, `career` 7009, `game` 6978). O teto de 7600 dá ~6% de folga sobre o pior valor atual — é o **freio que faltava**, não licença para inchar.

**Por quê.** spec0042. Alternativa considerada e recusada por ora: enxugar narrative/career/game para caber em 6900 (decisão de produto, não de execução — viraria outra spec). Harness: +3 checks (G16/G17/G18) e o FIX do check de chips, **18/18 · 43/43 → 18/18 · 46/46**, 0 erros.

## D-071 — SO migrado para o modal (seção Ambiente), fechando a i-N36 fase C; engine/fase do game na aba Nicho

**Decisão.** O seletor de **sistema operacional** (`#g-os`) sai do painel esquerdo e passa para uma nova seção **«Ambiente»** dentro do `<dialog id="cfg-dialog">`, antes da seção Nicho — fechando a **i-N36 fase C**. Nada de JS muda: o `id="g-os"` é o mesmo, o wiring (`osSel.onchange` → `OSENV.value`/`STATE.os`) e o restore (`snap.os`) continuam válidos; o `<dialog>` já está antes do `<script>` final (**D-059**). No nicho `game`, os campos **Engine** (`engineSel`) e **Fase** (`phase`) ganham `panel:"modal"`, indo para a aba Nicho do modal — muda só onde renderizam, não o que sai (`phase` segue alimentando a linha **Estágio:** do `buildInstr`). Novo check **G17** trava: SO dentro do modal, DOM antes do script (D-059) e engine/fase com `panel:modal`.

**Por quê.** spec0042, nota do usuário `260713-0937`. Harness: coberto por G17. 18/18, 46/46, 0 erros.

## D-072 — O CEREBRO passa a ensinar o refino das próprias Instruções (orçamento explícito, «mover é barato, apagar é caro»)

**Decisão.** O CEREBRO ganha a seção **«Refino das Instruções do Projeto»**: as Instruções são lidas em toda mensagem, então a versão que o kit gera é um **ponto de partida genérico** que o projeto deve encurtar e especializar **sem perder processo**. A seção dá seis regras — cortar o que não se aplica, especializar o que se aplica, não confundir encurtar com esquecer (regra que já evitou erro real, e está no DECISIONS, **não** sai; se sai, **some ao CEREBRO** — mover é barato, apagar é caro), não inchar, uma regra por linha no imperativo, e um **teto explícito de ~6.900 caracteres** com a exigência de dizer o tamanho antes/depois — e fecha mandando **registrar** toda mudança de instrução no DECISIONS + «Feedback para o Kit» no IDEAS. Novo check **G19** trava a presença da seção, do teto e do registro em DECISIONS/IDEAS.

**Por quê.** spec0043 (i-N48, nascida e fechada nesta spec). A conversa errava dos dois lados — inflava (acrescenta e nunca corta) ou podava demais (apaga a regra que existia por um motivo); a seção fecha isso ensinando o orçamento explicitamente. Harness: +1 check (G19), 46/46 → 47/47. 18/18, 47/47, 0 erros.

## D-073 — Portões de processo: hook de pré-commit (harness verde obrigatório) e `/check-spec` (conferência read-only antes de aplicar)

**Decisão.** Dois portões passam a impedir por **máquina** as duas regressões mais caras da história do projeto. **i-N38 — `.githooks/pre-commit`:** bloqueia qualquer commit que toque o produto (`src/`, `index.html`, `build.js`, `validate.js`, `build-manifest.json`) sem **build + harness verdes**, e ainda garante que o `index.html` commitado é o do build atual; bypass consciente por `git commit --no-verify` (emergência, não rotina). Liga-se por `git config core.hooksPath .githooks` (não viaja no clone; documentado no BUILD.md). **i-N39 — `/check-spec`:** comando read-only que, antes de aplicar uma spec, confere âncoras (0 = morta, 2+ = ambígua), pré-requisitos (versão/commit/árvore limpa/colisão de arquivo novo) e o estado verde do repo — não edita, não builda, não commita. O ciclo de uma spec passa a ser `/check-spec → aplicar → build → validate → commit`.

**Por quê.** spec0043. As duas regressões mais caras (âncora morta e commit sem harness) eram evitadas só por disciplina; agora são impedidas por máquina. Toolchain (fora do harness); teste manual do hook relatado na sessão. 18/18, 47/47, 0 erros.

## D-074 — Paleta unificada: uma cor principal por nicho (card == página), G20/G21 travam a invariante

**Decisão.** O KCM passa a ter **uma cor principal por nicho**, lida da mesma fonte pelo card (tela de escolha, `cardColor` em `src/niches/<id>.js`) e pela página do nicho (`html[data-niche="<id>"]{ --amber: … }` em `src/index.template.html`). Antes eram **duas fontes independentes** sem nada obrigando-as a concordar: onze nichos divergiam e o `career` **não tinha bloco `[data-niche]` nenhum** — por isso a página dele herdava o âmbar padrão (o do dev). Essa era a **causa raiz** do bug «a cor do carreira é igual à do dev» (a spec0042 mexeu só no card). A spec0044 (1) cria o bloco `[data-niche="career"]` ausente; (2) realinha 11 `cardColor` à cor da página e **redistribui os matizes** para dar separação real (pixel lima, música ciano, cozinha laranja, animação índigo, HQ fúcsia, game esmeralda, rpg vermelho, negócios bege), mantendo a leitura semântica de cada nicho e nenhuma cor principal repetida; (3) trava tudo com dois checks: **G20** lê o `--amber` do CSS do `index.html` e exige `cardColor == página` em todos os nichos (nicho novo sem bloco `[data-niche]` agora **quebra o harness** em vez de herdar em silêncio), **G21** proíbe cor principal repetida entre nichos.

**Por quê.** spec0044 (i-N49). Duas fontes de cor sem invariante deixavam a divergência voltar a cada nicho novo; G20 é o check que faltava desde sempre. Harness: +2 checks (G20/G21), 47/47 → 49/49. 18/18, 49/49, 0 erros.

## D-075 — `.gitattributes` fixa LF no hook de pré-commit (evita *bad interpreter* em clone novo)

**Decisão.** Novo `.gitattributes` na raiz com `* text=auto`, `.githooks/pre-commit text eol=lf` e `*.sh text eol=lf`, seguido de `git add --renormalize .githooks/pre-commit`. Sem isso, num clone novo com `core.autocrlf=true` o shebang do hook vira `#!/bin/sh\r` → *bad interpreter* → o hook (D-073) morre calado, que é o pior modo de um portão de segurança falhar.

**Por quê.** spec0044, nota levantada na spec0043. Blindagem do portão de pré-commit. Fora do harness (toolchain). 18/18, 49/49, 0 erros.

## D-076 — `INSTR_TETO` no produto (fonte única de teto) + contador de instrução na UI

**Decisão.** O produto ganha a constante `INSTR_TETO = 6900` (`src/index.template.html`), teto das Instruções do Projeto — que são lidas em toda mensagem. Antes o `6900` vivia **cravado em três literais** no `validate.js` (assert do check `N[...]`, teto do career, rótulo do check `N[...]`); os três migraram para a constante (`grep 6900 validate.js` agora vazio), então mudar o teto num único lugar move UI, os checks `N` e o check do career juntos. A saída ganha um contador ao lado de «Copiar» (`#instr-count`): «5754 / 6900 (83%)», verde até 90%, âmbar de 90–100%, vermelho cheio acima de 100%; na aba CEREBRO vira «CEREBRO · sem teto» (o CEREBRO é lido sob demanda, não tem teto). `updateInstrCount` roda dentro de `updatePreview`, então o contador reage a cada chip marcado. Novo check **G22** (INSTR_TETO exposto no SHIM + a UI lê dele: elemento, função e a base `len / INSTR_TETO`).

**Por quê.** spec0045 (i-N46). O estouro do teto só aparecia no harness (D-070); quem monta o contexto marcando chips não via o orçamento crescer. Constante única mata a divergência silenciosa entre os três literais. Harness: +1 check (G22), 49/49 → 50/50. 18/18, 50/50, 0 erros.

## D-077 — CHANGELOG reconstruído (v1.54–v1.66) a partir do DECISIONS

**Decisão.** O corpo do `meta/CHANGELOG.md` saltava de v1.53.0 direto para v1.67.0 — 12 versões (v1.54–v1.66) só existiam no STATUS/DECISIONS. Reconstruídas a partir do DECISIONS (D-056 a D-068) e inseridas em ordem decrescente antes de v1.53.0. Registrado no topo do CHANGELOG que **não existe v1.64.0**: houve um salto real de numeração no histórico (v1.63.0 → v1.65.0).

**Por quê.** spec0045 (i-N47). O CHANGELOG voltou a ser uma linha do tempo contínua (v1.53 → v1.69, sem v1.64). Doc-only, fora do harness. 18/18, 50/50, 0 erros.

## D-078 — Prompts C/D de setup mode+entrega-aware, com títulos explícitos; D e F detectam `_MANIFEST.md`

**Decisão.** i-N42. Os prompts universais de setup deixam de ser cegos a modo e a formato de entrega. **Títulos** (a confusão que a ideia mirava): **C** vira «Começar um projeto do zero com o KCM» e **D** vira «Adotar o KCM num projeto já em andamento» — o eixo (projeto novo × projeto que já existe) fica explícito no próprio rótulo. **Corpos:** C e D passam de template-string única para montagem por `L.push`, ganhando ramos `codeModeOn()` (repo é a verdade — árvore + commit em C; acrescenta, não reescreve, em D) e `asuModeOn()` (projeto novo gera inteiro; adoção sai como instrução `.yaml` para o que já existe). **`_MANIFEST.md`:** o **D** manda ler pelo mapa quando o material veio de um pacote estruturado (download ↓ do KCM ou FlatDrop) — fonte de verdade de nomes/estrutura, **não regenerar o que já existe**; o **F** (retomada) ganha um passo que usa o `_MANIFEST.md` antes de deduzir qualquer caminho. Texto-guia da view Prompts reescrito para explicar A–F. Novo check **G23**.

**Por quê.** spec0046 (i-N42). C/D eram o resíduo mode-blind do subsistema de prompts (E/F já tinham virado mode-aware na spec0040) e os títulos genéricos («Projeto novo, do zero» / «Projeto existente — adicionar o sistema») confundiam até conversas do próprio KCM. Nenhuma lógica de detecção nova: reusa a consciência de modo/`_MANIFEST` que já vivia no CEREBRO. Harness: +1 check (G23), 50/50 → 51/51.

## D-079 — `KIT_VERSION` no produto (fonte única de versão) + `kitStamp()`

**Decisão.** i-N10. O produto ganha `KIT_VERSION = "1.70.0"` (`src/index.template.html`), logo após `INSTR_TETO` — fonte única da versão do kit. Antes o rodapé mostrava um `v1` cravado e os READMEs dos downloads diziam «Kit de Contexto Universal» sem versão. Agora: o rodapé da coluna esquerda mostra `${niche.label} · v${KIT_VERSION}`; o helper `kitStamp()` («Gerado pelo Kit de Contexto Universal v1.70.0 — {data}.») carimba os READMEs (skills, kit do Code) e os demais READMEs/manifestos passam a citar `v${KIT_VERSION}` (Templates, `structuredReadme`, rodapé do `INSTRUCOES-DO-PROJETO`); o `_UPDATE-MANIFEST` ganha uma linha `- Kit: v${KIT_VERSION}`. Espelha o que a spec0045 fez com `INSTR_TETO`. Novo check **G24** (constante exposta no SHIM + rodapé + `kitStamp` + carimbo nos downloads). **Consequência de release:** todo bump de versão passa a mexer nesta constante (i-N50).

**Por quê.** spec0046 (i-N10). Sem constante de versão, o «canal de atualização» não sabia de qual versão um arquivo veio, e o rodapé mentia um `v1` fixo. Fonte única mata a divergência silenciosa. Harness: +1 check (G24), 51/51 → 52/52. 18/18, 52/52, 0 erros.

## D-080 — Doc-âncora por nicho (`anchorDoc`) + fim do choque `CONTEXT`

**Decisão.** i-N53. O resolvedor do «doc de contexto» deixa de adivinhar o arquivo-âncora por regex de nome (`/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i`). Cada nicho **declara** seu âncora em `anchorDoc`; os resolvedores das Instruções (`buildInstr`) e do CEREBRO (`buildClaudeMd`) preferem essa declaração e só caem na regex como retaguarda (nicho sem o campo). Corrige a omissão do âncora no ritual de **4 nichos** que a regex não casava — narrative/`BIBLIA.md`, marketing/`MARCA.md`, pixel/`ESTILO.md`, rpg/`MUNDO.md` — onde o ritual gerado (Instruções E CEREBRO) caía para `CEREBRO → STATUS` e omitia o arquivo em torno do qual o nicho é construído. `custom` declara `anchorDoc:null` («sem âncora» explícito: só `CEREBRO.md`, comportamento idêntico ao atual, agora declarado). Corrige também o **choque `CONTEXT`**: duas linhas do modo ASU e o `CLAUDE.md` do kit-Code cravavam o literal `CONTEXT`/`CONTEXT.md`, que a narrativa e vários nichos não possuem — viraram genéricas («o doc de contexto estável do projeto»). Novo check **G25** (ritual cita o âncora de todo nicho; Instruções nunca citam um `.md` inexistente — testado com ASU on/off). `KIT_VERSION 1.70.1`.

**Por quê.** spec0047 (análise 260716 §A). O resolvedor por regex de nome falhava em silêncio: 4 nichos nunca mandavam ler a própria bíblia/marca/estilo/mundo, e nichos sem `CONTEXT.md` recebiam instrução para um arquivo inexistente (só no modo ASU). Declaração explícita mata a adivinhação; G25 trava a invariante para sempre. Harness: +1 check (G25), 52/52 → 53/53. 18/18, 53/53, 0 erros.

## D-081 — Refino do nicho Narrativa a partir de feedback de 4 projetos reais (spec0048)

**Decisão.** Segunda e última spec do refino narrativo (a spec0047 fez a base). Tudo em `src/niches/narrative.js` (skills/CEREBRO — **teto inalterado**, `N[narrative]` segue em 6702/6900). **B1 — `checagem-continuidade`, 5 erros nomeados novos:** (1) **Narração que hedgeia o próprio POV** — o personagem-foco sempre sabe o que ELE fez/disse/quis; incerteza só é legítima sobre o OUTRO (3ª limitada e 1ª pessoa); (2) **Vazamento de familiaridade cedo demais** — capítulo-ponte logo após um marco que importa linguagem de rotina/intimidade insustentável no tempo curto (variante temporal do capability bleeding); (3) **Transição ausente disfarçada de economia** — cena nova sem a frase mínima de ambientação (onde/quando/o quê); (4) **Eco não verificado** — mudar um fato canônico sem buscar ativamente as reafirmações parafraseadas nos outros arquivos (regra-mãe: fonte única, eco citado); (5) **Craft afirmado sem verificação** — apresentar «regra de ofício» como consenso sem confrontar a prática real (é o P13 dentro da escrita). **B2 — `escrita-serial`, passo PRÉ «a cena já existe?»:** antes de escrever, checar se a cena não foi já escrita e aprovada em algum arquivo do Projeto (reler o capítulo anterior NÃO substitui a busca). **B3 — `escrita-serial`, bloco «processando notas de revisão do autor»:** interpretar antes de transcrever (não colar; separar o que é para a cena do que orienta só o raciocínio; nota longa = processar por inteiro; não dramatizar mecânica na ação). **B4 — gatilho «concluída OU revisada»:** a revisão de capítulo existente dispara o mesmo gatilho triplo (linha do `triggersExtra`, que vive no CEREBRO, + heading na `checagem-continuidade`). **B5 — `textura-mundo`, «eco físico vs. eco comportamental»:** para o reconhecimento tardio de parentesco/identidade, plantar os dois canais (físico visível + comportamental invisível) e deixar o comportamental fazer o trabalho. Novo check **C10** (trava o conteúdo novo; `triggersExtra` conferido no CEREBRO, não nas Instruções). `KIT_VERSION 1.71.0`.

**Por quê.** spec0048 (análise 260716 §B). Cada item vem de um FIX real de projeto em produção: os 5 erros de B1 de My Little Lady FIX-006/007/008, My mother DEC-007 e P13; o passo «a cena já existe?» de My mother FIX-001; o bloco de notas de revisão de I will die (princípios 21-23); o gatilho «concluída OU revisada» de My Little Lady FIX-005; o eco físico vs. comportamental de My Little Lady. Sem pressão de teto — B1/B2/B3/B5 vão para as skills e B4 para os gatilhos (que vivem no CEREBRO). Harness: +1 check (C10), 53/53 → 54/54. 18/18, 54/54, 0 erros.

## D-082 — Universais da base: leva C (spec0049)

**Decisão.** Terceira e última leva do refino narrativo (análise 260716 §C). Três universais entram na base, **todos só no CEREBRO** (teto dos 18 inalterado; nenhum princípio novo, G2 segue 13). **C1:** o princípio `cadence` ganha «pedido composto» — quando vários pedidos vêm numa mensagem, enumerar as partes, executar o que não bloqueia e parar só na decisão que de fato trava (não deixar um pedido soterrar os outros nem transformar tudo em pergunta). **C4:** o princípio `consistency` ganha a armadilha de concordância de gênero/número em rename por busca-e-troca (FIX-003 do projeto Rascunho: trocar «o Assentamento» por «a Consolidação» sem ajustar artigos e adjetivos quebra o texto). **C5:** o bloco «Refino das Instruções» (G19) ganha a regra de sincronia Instruções-curtas ↔ CEREBRO — ao mexer no CEREBRO, checar se as Instruções ainda batem e propor alinhar/regenerar a versão curta se divergirem. Novo check **C11**. `KIT_VERSION 1.72.0`.

**Por quê.** spec0049 (análise 260716 §C). Dois dos cinco universais candidatos se resolveram no estudo e **não entram**: **C3 (ideias do autor como conselho, não comando) já era coberto por P1 «Analisa antes de aceitar»** — é um restatement de domínio, não um buraco. **C2 (nunca pedir nome sem 2–4 opções) NÃO foi promovido a universal** — não se aplica a dev/finanças/pesquisa (lá se escolhe um bom nome direto) e conflita com P2 «não abre menu de opções para decisão óbvia»; é comportamento de trabalho criativo, fica para eventual passada dedicada nos nichos criativos. C1/C4/C5 crescem só o CEREBRO (a linha comprimida dos universais nas Instruções usa só o `b.label`, não a descrição), então o teto dos 18 fica inalterado. Harness: +1 check (C11), 54/54 → 55/55. 18/18, 55/55, 0 erros.

## D-083 — Nomes com opções fundamentadas na ficção, não universal (spec0050)

**Decisão.** C2 da análise 260716 §C — parqueado na spec0049 — resolvido como **comportamento de ficção**, não universal. A regra «nomear vem com 2–4 opções fundamentadas» existia **só na narrativa**, presa ao modo Direção Criativa. Esta spec: **(a) narrativa** — o naming sai do bloco Direção Criativa e passa a valer em **ambos os modos**, enriquecido (uma recomendação por opção; não precisa ser menu formal; nome temporário que valha manter é sinalizado, com alternativas mesmo assim); **(b) game/rpg/comics** — novo behavior `naming` (mesmo caso: elenco e mundo com muitos elementos nomeáveis e nomes temporários ruins). Novo check **C12**. `KIT_VERSION 1.73.0`.

**Por quê.** spec0050 (análise 260716 §C item C2 — decisão do usuário em 260717-1313.txt). Não virou regra universal: dev/produto já resolvem com nome temporário e naming universal conflitaria com P2; o alvo é a **ficção**, onde há muitos personagens/lugares e o autor entrega nomes temporários ruins que quer trocar. Escopo: narrativa (foco) + game/rpg/comics (mesmo caso); fora music/design/animation/dev/etc. (naming lá é raro/próximo do dev — extensão **descartada**). Teto: narrativa **inalterada** (6702 — o enriquecimento cresce só o CEREBRO); game 6798, rpg 6032, comics 5692 (todos < 6900; game é o mais apertado, folga 102). Harness: +1 check (C12), 55/55 → 56/56. 18/18, 56/56, 0 erros.

## D-084 — E-ASU (ASU não cobre binários) + B6 (Retcon no CONTINUIDADE) (spec0051)

**Decisão.** Duas mudanças pequenas e independentes num só ciclo (análise 260716 §E e §B6). **E-ASU:** a seção «Saída de código via ASU» do CEREBRO passa a ensinar que o ASU opera **só em arquivos de texto** (patch por âncora) e **não cobre `.docx`/`.xlsx` nem outros binários** — um documento Word ou planilha sai inteiro para baixar, nunca como instrução ASU. Vale para qualquer nicho que use ASU. **B6:** o template do `CONTINUIDADE.md` da narrativa ganha a seção **opcional «Retcon»** (antes de «Inconsistências encontradas e resolvidas»): quando uma reescrita muda um fato canônico, a memória factual guarda só a **verdade atual**; o histórico da mudança vai para ENREDO.md (trama) ou DECISIONS.md (craft). Enxuta de propósito — sem a tabela de «fontes brutas». Novo check **C13**. `KIT_VERSION 1.74.0`.

**Por quê.** spec0051 (análise 260716 §E + §B6, decisão do usuário em 260717-1313.txt). E-ASU: como é o **KCM** que ensina a usar o ASU, o aviso de que ele não cobre binários deve vir de dentro do produto. B6: separar a verdade atual (memória factual, fonte única) do «porquê» da mudança (rastreável em ENREDO/DECISIONS sem poluir o «o quê»). O **modo de migração/extração (§D) foi DESCARTADO** — não precisa de modo: era organização + script Python mal-implementado + leitura incompleta de caminhos, não uma lacuna de comportamento do kit. Teto: narrativa **inalterada** (6702 — ambas as mudanças são CEREBRO/template, fora das Instruções). Harness: +1 check (C13), 56/56 → 57/57. 18/18, 57/57, 0 erros.

## D-085 — Adesão ao ritual: mount-check por turno + memória×mount + fix vazamento ASU (spec0052)

**Decisão.** Origem no relatório 260722 (projetos ignorando o ritual — respondendo de memória a mounts atualizados). Três correções + dogfood. **C-a:** o princípio universal `check_before_ask` (P8) ganha a lógica **mount-por-turno incondicional** — revisar o mount a CADA turno (novos `.txt`, `_MANIFEST`, arquivos mudados) antes de responder, **sem** depender de sinal do usuário (um «continuar», uma correção ou uma reclamação também pode vir com o mount atualizado) — mais a **comparação memória × mount**: nem tratar o mount como verdade absoluta nem confiar só na memória; se divergem, é provável atualização (estuda); se o mount bate com a memória mas o usuário afirma ter aplicado algo ausente, faz o que dá e **avisa** («o mount não parece atualizado com X»), em vez de inferir cegamente ou regenerar o que já foi feito. Cresce só o CEREBRO (sem teto). **C-b:** gatilho curto no ritual das Instruções (superfície lida todo turno; +81 chars em todos os nichos). **C-c:** fim do **vazamento da nomeação ASU no modo Code** — a linha «Nomes padronizados» só cita `AAMMDD-asuNNNN.yaml` quando o modo ASU está ligado. **Dogfood:** as mesmas correções nos arquivos próprios do KCM (`INSTRUCOES-DO-PROJETO.md` item 4 + `CEREBRO.md` item 8). Novo check **C14**. `KIT_VERSION 1.75.0`.

**Por quê.** spec0052 (relatório 260722-1153, prioridade URGENTE — quebrando projetos ao vivo, à frente do SDD). O erro em campo era responder de memória a um mount já atualizado; a regra antiga dependia de o usuário «sinalizar upload», o que falhava quando o mount vinha junto de um «continuar» ou de uma reclamação. A nuance vai quase toda para o CEREBRO (sem teto); só o gatilho curto entra nas Instruções. NÃO inclui o «padrão de nome de spec nas Instruções» — o nome «spec» muda na spec0053; aqui só o que independe do rename. Teto: nenhum nicho estoura; **`game` fica em 6879/6900 (folga 21) — o mais apertado, a vigiar**. Harness: +1 check (C14), 57/57 → 58/58. 18/18, 58/58, 0 erros.

## D-086 — Rename `spec` → **Work Order (WO)** (spec0053)

**Decisão.** O artefato de aplicação Chat→Code passa a se chamar **Work Order (WO)** — nome de arquivo `AAMMDD-woNNNN-desc.md`, em `meta/workorders/`; comandos `/check-wo` e `/apply-wo`; skill `.claude/skills/apply-wo/` (no gerador) e comandos `.claude/commands/{check,apply}-wo.md` (no próprio KCM). No gerador (`src/index.template.html`): caminho `meta/workorders/`, comando `apply-wo`, identificador JS interno `applyWo`, padrão `AAMMDD-woNNNN-desc.md` e a prosa do fluxo («o chat entrega uma WO; o Code aplica»). Novo check **C15** trava o rename **e** as armadilhas. **Dogfood:** o próprio KCM adota o WO — pasta `meta/specs/` → `meta/workorders/` (git mv, histórico preservado), comandos renomeados, `CEREBRO.md` e `INSTRUCOES-DO-PROJETO.md` atualizados com glossário. `KIT_VERSION 1.76.0`.

**Por quê.** O artefato que chamávamos «spec» **não é uma spec**: é uma **instrução de aplicação** (edições exatas para um agente executar). O nome «spec» (o *que* construir e o que é «pronto») fica reservado para a **spec-de-feature do SDD** (spec0054). **História preservada:** as WOs históricas (spec0001…spec0053) mantêm o nome antigo — renomear em massa quebraria referências cruzadas em DECISIONS/CHANGELOG/STATUS; a numeração continua a sequência (próxima é `wo0054`). Os comentários `(specNNNN)` no código são registro histórico e ficam. **Armadilhas evitadas** (C15 trava): palavras pt-BR com «spec» (`específico`, `especial`…), CSS `aspect-ratio`, e a história `(specNNNN)` — nada de find-replace cego. Harness: +1 check (C15), 58/58 → 59/59. **`game` segue em 6879/6900** (a vigiar). 18/18, 59/59, 0 erros.

## D-087 — SDD leve nos nichos dev e game (wo0054)

**Decisão.** SDD leve entra nos nichos de código (análise i-N7, `meta/analises/260718-ANALISE-i-N7-SDD-NICHOS-CODIGO.md`, itens P1/P2/L3). Importada a **espinha** do Spec-Driven Development (a spec como artefato durável + critério de aceite verificável), **não** a cerimônia do Spec Kit (sem `constitution.md` separada — CONTEXT/JOGO + DECISIONS + princípios já são a constituição; sem CLI; sem 6 arquivos por feature). **P1 — `dev` ganha o modelo `SPEC.md`** (opcional, `cat:"opcional"`): problema, critérios de aceite verificáveis, decisões de design, fora de escopo, passos — copiar para `specs/AAMMDD-nome.md`, uma por feature. **P2 — prompts exigem critérios de aceite:** prompt **J** (dev, «Planejar uma feature ou fase») e prompt **H** (game, «Projetar / revisar uma mecânica») passam a pedir critérios de aceite verificáveis/observáveis antes de codar/implementar. **`game` NÃO ganha arquivo novo** — o teto medido não comporta (6976 > 6900, testado); o reforço vai só no prompt (custo zero no teto), porque o nicho já tem `MECANICAS.md` como spec de mecânica. **L3 — princípio `analyze` ganha cláusula de ambiguidade:** quando o pedido for ambíguo ou de escala de feature, expor lacunas e o que foi assumido ANTES de construir; em tarefa pequena a regra continua sendo fazer, não levantar bandeira (cresce só o CEREBRO, custo zero nas Instruções). Novo check **C16**. `KIT_VERSION 1.77.0`.

**Por quê.** wo0054 (origem: análise i-N7). O teto do `game` é a evidência concreta que molda o desenho: medido em 6976 > 6900 ao testar um arquivo opcional ali — folga de só 21 chars — por isso o design é deliberadamente assimétrico (`dev` ganha arquivo, `game` ganha só prompt). Isso também é a prova dura de que o enxugamento das Instruções (ideia do usuário) precisa vir antes de qualquer nova frente que queira arquivo no `game`. A cláusula de ambiguidade em L3 é limitada a pedido ambíguo/de escala de feature de propósito — sem a segunda metade («em tarefa pequena a regra continua sendo fazer»), viraria o «levantar bandeira em tudo» que o kit evita. Harness: +1 check (C16), 59/59 → 60/60. `dev` 6011/6900 (era 5835, folga 889); `game` 6879/6900 inalterado (folga 21). 18/18, 60/60, 0 erros.

## D-088 — Refino das Instruções vira dever proativo, com liberdade de promover regra (wo0055)

**Decisão.** O bloco «Refino das Instruções do Projeto» (G19) deixa de ser só conhecimento passivo (ensina a refinar, espera alguém puxar) e ganha **dever proativo com gatilho**: o projeto **deve** propor o refino por conta própria — no fim da primeira sessão de trabalho real e, depois, a cada sinal de atrito (regra repetidamente descumprida, instrução que nunca se aplicou, atrito recorrente); não é o usuário quem deveria pedir. Acompanha a **liberdade de promover regra a texto integral**: o projeto decide o que é crítico o bastante para sair da forma curta e voltar ao texto completo nas Instruções — o orçamento é dele para administrar, encolher não é a meta. E o **feedback ao kit**: atrito sem solução local (regra confusa, gatilho que não dispara, lacuna de comportamento do KCM) vira registro em IDEAS.md — desfecho legítimo do refino, não desculpa para não refinar. Novo check **C17**. `KIT_VERSION 1.78.0`. Custo **zero de teto** — tudo entra no CEREBRO (G19), nenhum nicho muda (`game` inalterado, 6879/6900, folga 21).

**Por quê.** Decisão do usuário (260726): *«a prioridade é dar a possibilidade do chat formular sua própria instrução baseada na nossa genérica… isso deveria ser tratado como uma obrigação imposta, pois alguns projetos não entregaram refinamento e eu tenho de pedir — não deveria ser eu pedindo.»* Observado em campo: projetos não refinam sozinhos, e o usuário precisa pedir toda vez. **Pré-condição do enxugamento** (análise 260726-ANALISE-ENXUGAMENTO-INSTRUCOES): entregar Instruções mais curtas só é seguro se o projeto tem o dever E a liberdade de crescer de volta o que precisar — sem esta WO, encolher seria só perda; com ela, é troca de peso genérico por peso relevante. Harness: +1 check (C17), 60/60 → 61/61. 18/18, 61/61, 0 erros.

## D-089 — `meta/analises/` confirmado como RFC/design doc (wo0055)

**Decisão.** O método `meta/analises/` fica **confirmado e mantido**: equivale ao padrão **RFC/design doc** — documento que precede o compromisso, define problema, restrições, opções consideradas e riscos — enquanto `DECISIONS.md` cumpre o papel de **ADR** (o registro *depois* da escolha), `meta/specs/` guarda a spec de feature (SDD) e `meta/workorders/` a instrução de aplicação (WO). Adotado o campo **Status** (Rascunho | Em discussão | Decidida | Implementada | Abandonada | Substituída) e os **elos cruzados** (análise → WO/spec, quando houver → D-0XX, quando registrada), formalizados em `meta/analises/_TEMPLATE.md`. **Análise não vira spec nem muda de pasta** — são artefatos de etapas diferentes do mesmo fluxo. **Regra de proporção:** análise só para mudança não-trivial; mudança pequena vai direto a WO, sem cerimônia.

**Por quê.** A pesquisa feita para a wo0055 (Tarefa D, pesquisa sobre o método `analises/`) mostrou que o artefato já cumpria, na prática, o papel de RFC/design doc havia 11 análises (260703 a 260726) — faltava só nomear o padrão, dar-lhe **Status** visível e **elos cruzados** rastreáveis, para que uma análise antiga não fique "solta" sem se saber se foi decidida, implementada ou abandonada. Sem mudança de comportamento retroativa: análises antigas continuam válidas como estão; o modelo vale a partir daqui.

## D-090 — Enxugamento etapa A: motor do campo `short` curado (wo0056)

**Decisão.** Comportamento de nicho ganha campo opcional **`short`** (4º elemento do array, ou chave do objeto) com **precedência nas Instruções** sobre o corte automático (`shortDef`, 1ª frase, teto 180 chars). `normBehaviors` aceita `short:b[3]`; `buildInstr` usa `b.short || shortDef(b.def)`. `buildClaudeMd` **não muda** — o CEREBRO segue emitindo `b.def` integral, garantindo que a curadoria nunca perde informação, só decide o que fica sempre à vista. **A regra de exceção fica embutida na mecânica:** comportamento sem `short` mantém o corte automático — não preencher é a forma de dizer «este fica como está», nada a configurar. Novo check **C18** (motor instalado + contrato: nada some das Instruções, definição completa no CEREBRO, `short` comprime de fato). `KIT_VERSION 1.79.0`. **Esta WO não muda uma palavra de conteúdo** — nenhum nicho preenche `short` ainda; a curadoria é a WO-B.

**Por quê.** Origem: `meta/analises/260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md`, etapa A do plano A→B→C aprovado. **Achado que corrigiu a análise:** a análise supunha que as Instruções carregavam a definição integral dos comportamentos — não é bem assim, o corte por `shortDef()` já existia; o que faltava não era *cortar*, era **curar** (a frase que sobra hoje é a primeira do texto, escolhida por acaso, não a melhor síntese da regra). Isso trocou o desenho de «criar um sistema de compressão» por «adicionar um campo curado opcional com precedência» — mudança mais simples e sem risco de perda de informação. **Prova de neutralidade:** `buildInstr` dos 18 nichos fica byte-idêntica (nenhum `short` preenchido ainda); `buildClaudeMd` difere só no carimbo de versão. Harness: +1 check (C18), 61/61 → 62/62. `game` inalterado, 6879/6900 (folga 21). 18/18, 62/62, 0 erros.

## D-091 — Enxugamento etapa B, 1ª leva: curadoria de `game`, `narrative`, `career`, `rpg` (wo0057)

**Decisão.** 28 frases curadas no campo `short` dos comportamentos de `game` (9), `narrative` (6), `career` (6) e `rpg` (7); as definições integrais permanecem intactas no CEREBRO. **Correção de expectativa:** a economia real foi de **330–518 chars/nicho** (a análise de origem projetava ~2000–2775, porque comparava com a definição integral em vez do `shortDef` já vigente desde antes da wo0056). Medido: `game` 6879→**6361** (folga 21→**539**), `narrative` 6783→**6453** (folga 117→**447**), `career` 6260→**5803** (folga **1097**), `rpg` 6113→**5654** (folga **1246**). `game` saiu de 21 para 539 chars de folga — a parede que bloqueava novas frentes caiu. **Regra de exceção aplicada:** `narrative/no_overdoc` (39 chars) e `rpg/pc_center` (77 chars) seguem sem `short` — já são mínimos, curar não ganharia nada; não preencher é a forma de declarar a exceção (mecânica da D-090). A curadoria também **corrigiu linhas que eram afirmação, não regra** (ex.: `scope_killer` dizia «scope creep é a maior causa de jogos indie não terminados»; agora diz o que fazer). `KIT_VERSION 1.80.0`. Nenhum check novo; **C18 passa a reportar `ok (28 curados)`**. 18/18, 62/62, 0 erros.

**Por quê.** Origem: análise 260726, etapa B (por levas, nichos apertados primeiro), com a regra de exceção da D-090 em ação pela primeira vez. A correção de expectativa importa para o planejamento da WO-C: o resto do ganho de espaço terá de vir dos papéis dos arquivos e da poda de markdown, não dos comportamentos — a curadoria de frase já deu o que tinha para dar nesta leva. Integridade verificada manualmente: o CEREBRO da narrativa continua com o protocolo-sanduíche integral e os dois modos de colaboração; nada de estrutura se perdeu.

## D-092 — Bloco de fecho de turno padronizado e condicional (wo0058)

**Decisão.** O fecho de turno passa a ter **formato fixo e condicional**: Estado · Próximo passo · Notas (arquivar/manter) · Config recomendada por raia · Handoff — emitindo só as linhas com conteúdo real (linha sem conteúdo real não aparece; nunca escrever «nada a arquivar» nem inventar handoff). Origem: pedido do usuário (260726-0842) depois do padrão emergir na prática das sessões do KCM — *«com cada linha estruturada e organizada assim... esse tipo de protocolo padronizado e identificável é excelente disciplina»*. Resolve duas dores observadas: (a) o usuário tinha de **perguntar** o que arquivar; (b) as recomendações de config vinham confusas, sem dizer **para qual raia**. Absorve **i-N44/i-N45** e o nome `AAMMDD-HANDOFF-BRIEF.md` (nota 260720) — o nome vive no protocolo de fecho, não como arquivo obrigatório no CEREBRO. Gatilho de 159 chars nas Instruções («Feche o turno com o bloco padrão…»); a estrutura completa (as cinco linhas + a regra de condicionalidade) fica no CEREBRO, grátis. **Dogfood:** o próprio KCM adota o bloco em `INSTRUCOES-DO-PROJETO.md` e `meta/CEREBRO.md`, com as raias que usa de fato — **Chat** (planejamento) e **Code** (execução). Novo check **C19**. `KIT_VERSION 1.81.0`. Teto medido: `narrative` 6453→**6612** (folga 288), `game` 6361→**6520** (folga 380), `career` **5962**, `rpg` **5813** — nenhum nicho estoura. 18/18, 63/63, 0 erros.

**Por quê.** A primeira versão do gatilho custava 245 chars e derrubava `narrative` a 201 de folga — comia metade do ganho da wo0057; foi enxugado para 159 antes de fechar. Lição registrada: cada linha nova nas Instruções custa em todos os 18 nichos simultaneamente; o lugar padrão de conteúdo novo é o CEREBRO (grátis, sem teto), não as Instruções curtas.

## D-093 — Enxugamento etapa B, 2ª e última leva: curadoria dos 13 nichos restantes (wo0059)

**Decisão.** 68 frases curadas no campo `short` dos 13 nichos restantes — dev (3), design (5), client (5), marketing (5), research (6), product (4), business (3), pixel (5), brainstorm (6), music (6), cuisine (7), animation (7), comics (6); `custom` não tem comportamentos próprios, nada a curar. Com os 28 da wo0057, totaliza **96 frases curadas nos 18 nichos** — **WO-B concluída**. Definições integrais preservadas no CEREBRO. Economia de **130–531 chars/nicho**: dev 6170→6038, design 6151→**5714**, client 6069→5753, marketing 5620→5439, research 6151→**5732**, product 5564→5253, business 5398→5268, pixel 5844→5453, brainstorm 5908→**5411**, music 5769→5468, cuisine 5869→**5338**, animation 5962→5617, comics 5932→5563. Nenhum nicho estoura. **Regra de exceção aplicada** (mecânica da D-090): 19 comportamentos ficaram sem `short` por já serem mínimos (≤80 chars) — `dev/preserve`, `dev/rootcause`, `dev/minimal`, `design/scope_rounds`, `client/writeitdown`, `marketing/platformnative`, `research/citelock`, `product/successmetric`, `product/riskcall`, `business/assumptions`, `business/numbercheck`, `business/counterargue`, `pixel/timing_first`, `pixel/consistency_lock`, `brainstorm/mirror_not_echo`, `brainstorm/criteria_transparent`, `music/ref_lens`, `comics/page_architecture`, `comics/script_for_artist`. Os dois nichos mais apertados seguem sendo `narrative` (6612, folga 288) e `game` (6520, folga 380) — inalterados nesta WO, porque receberam o gatilho da wo0058 depois da curadoria da wo0057. `KIT_VERSION 1.82.0`. Nenhum check novo; **C18 passa a reportar `ok (96 curados)`**. 18/18, 63/63, 0 erros.

## D-094 — WO-C: correção do bloco de fecho + poda + migração para os `meta/` (wo0060)

**Decisão.** Escopo **reduzido** por decisão do usuário — os **papéis dos arquivos ficam como estão** (folgas de 862–1647 na maioria dos nichos tornavam a compressão desnecessária, e ela custaria clareza sem ganho necessário). Entregue: **(a) correção do bloco de fecho** da wo0058, que tinha saído com ordem e rótulos errados — formato correto é **Próximo → Estado → Arquivar/Manter → Config recomendada (lista por raia) → Handoff**, com «Próximo» explicitamente **antes do divisor** e o resto depois; o bloco passa a ser **declarado personalizável** pelo projeto (pode ganhar linha própria para um dado recorrente — prazo, custo, publicação, estoque — ou perder a que nunca se aplica, via refino), como manda o dever de auto-refino da wo0055; **(b) poda do cabeçalho auto-referencial** das Instruções (explicava o documento para quem já estava lendo o documento; −110 chars nos 18 nichos); **(c) regra nova de migração**: personalização genérica vinda do formulário de montagem serve para **preencher** os arquivos de contexto, e depois de aplicada não precisa continuar ocupando as Instruções — o projeto deve propor mover, deixando nas Instruções só identidade, ritual, gatilhos e disciplina de entrega. Check **C19** atualizado (rótulos do array + 4 asserções novas: ordem de «Próximo», frase «não uma jaula», regra de migração, poda do cabeçalho). `KIT_VERSION 1.83.0`. **Enxugamento A→B→C concluído.** Teto medido: `narrative` 6612→**6467** (folga 433), `game` 6520→**6375** (folga 525), `dev` 6038→5893 (folga 1007), `career` 6049→5817 (folga 1083). Nenhum nicho estoura. 18/18, 63/63, 0 erros.

**Por quê.** A wo0058 introduziu o bloco de fecho com a ordem errada (Estado antes de Próximo) e rótulos que não bateram com o formato aprovado no planejamento — corrigido aqui porque a wo0059 (curadoria dos 13 nichos) tinha prioridade e não devia carregar a correção junto. A migração para `meta/` fecha o ciclo do enxugamento: a etapa A instalou o motor (`short`), a etapa B curou o conteúdo existente, e esta etapa C ensina o projeto a **não deixar peso genérico se acumular** nas Instruções desde a origem (o formulário de montagem), em vez de só cortar o que já acumulou.

**Por quê.** Origem: análise 260726, etapa B, 2ª e última leva — fecha o plano A→B→C aprovado para a etapa B. Com a WO-B concluída, o que resta de ganho de espaço (WO-C) vem dos papéis dos arquivos e da poda de markdown, não mais dos comportamentos — a curadoria de frase já deu o que tinha para dar nos 18 nichos. Integridade verificada: o CEREBRO de `cuisine` segue com a definição integral de `cost_margin` (incluindo «plate cost»); nenhum comportamento desapareceu das Instruções.

## D-095 — Nome do handoff nos prompts de transferência e retomada (wo0061)

**Decisão.** O nome `AAMMDD-HANDOFF-BRIEF.md` passa a constar nos **prompts E (transferir agora) e F (retomar após transferência)**, não só no CEREBRO — prompt E diz «Gere um **`AAMMDD-HANDOFF-BRIEF.md`** (arquivo NOVO, ...)»; prompt F diz «Leia o `AAMMDD-HANDOFF-BRIEF.md` da conversa anterior». É o prompt que **manda gerar** o arquivo, então é ali que a convenção evita cada projeto inventar o próprio nome. Fecha a nota `260720-2129` e as ideias **i-N44/i-N45** (a wo0058/D-092 já as tinha fechado pelo bloco de fecho, mas o nome só vivia no CEREBRO — o pedido original mirava o prompt). **`UPDATE_PROTOCOL` revisado nesta passada e mantido como está** — entrega arquivo inteiro, conjunto consistente na mesma leva, higiene aplicada na montagem; não precisa refino. Novo check **C20**. `KIT_VERSION 1.84.0`. **Custo zero de teto** — prompts ficam fora do `N[]` das Instruções; `narrative` segue 6467, `game` 6375. Harness **18/18, 63/63 → 64/64, 0 erros**.

**Por quê.** Origem: nota `260720-2129` — *«era para ter criado um nome de padronização dos Handoff… pode ser adicionado ao prompt de transferência (e não ao cérebro e tudo mais)»*. As wo0058/wo0060 puseram o nome no CEREBRO (bloco de fecho), mas o pedido original era o prompt de transferência em si — é ali que o nome faz diferença prática, porque é o prompt que manda gerar o arquivo. Parqueado para a próxima fase: template da pasta `analises/` (decidido `analises/` em pt-BR; falta o template com `Status` + elos cruzados e o diálogo com o projeto que usa `design/`).

## D-096 — Template da pasta `meta/analises/` + registros pendentes da fase (wo0062)

**Decisão.** `meta/analises/_TEMPLATE.md` ganha o texto-guia em cada seção (Problema/Restrições/Opções/Recomendação/Riscos/Ponto de decisão) — o modelo básico já existia desde a D-089 (wo0055), só com os títulos; esta passada o deixa autoexplicativo. `meta/CEREBRO.md` (seção de convenções) ganha a **convenção de nome** (`AAMMDD-ANALISE-<assunto>.md`) e o **funil explícito**: análise → WO (`meta/workorders/`) → `DECISIONS.md`, com a spec de feature (`meta/specs/`) reservada ao trabalho de produto. **Registros pendentes da fase fechados:** cabeçalho de Status (Implementada/Vira/Decisão) aplicado a `260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md` (Vira: wo0056/wo0057/wo0059/wo0060 · Decisão: D-090/D-091/D-093/D-094) e a `260716-ANALISE-REFINO-NARRATIVE.md` (Vira: wo0047–wo0051 · Decisão: D-080/D-081/D-084); `.flatdropignore` — modificação pendente de várias sessões (`meta/specs/*` → `meta/workorders/*`, coerente com o rename da D-086/wo0053) — **commitada**, por ser correção real e não ruído; três itens novos registrados em `meta/IDEAS.md` como abertos para a próxima fase (ensinar o produto sobre `analises/`, validar em campo a wo0052, avaliar entregar `/check-wo` aos projetos). **Achado que não foi corrigido:** `meta/analises/260718-ANALISE-i-N7-SDD-NICHOS-CODIGO.md` — citada como origem da wo0054 (D-087) — **não está no repo**; não foi recriada (regra dura: não inventar conteúdo de análise a partir de memória). **Doc-only: produto intocado**, sem bump de `KIT_VERSION`, harness inalterado **18/18, 64/64, 0 erros**.

**Por quê.** Fecha a fase de enxugamento/handoff (D-090 a D-095) com o repo íntegro e sem pendência de registro, para a próxima conversa ler `meta/` como fonte de verdade sem precisar reconstruir contexto de memória. O `.flatdropignore` estava pendente havia várias sessões, sempre fora de escopo das WOs anteriores — resolvido aqui em vez de deixado poluindo o `git status` indefinidamente. A análise `260718` ausente é um buraco real no histórico (a wo0054/D-087 cita um arquivo que nunca chegou a ser commitado) — registrado como gap conhecido, não mascarado.

## D-097 — «Análise antes do compromisso» vira convenção do produto (pasta preguiçosa) (wo0063)

**Decisão.** O produto passa a ensinar a convenção `meta/analises/` aos projetos **gerados**, não só ao próprio KCM: os 18 nichos recebem a seção nova «Análise antes do compromisso» no CEREBRO gerado (onde, o que tem dentro, medir antes de propor, a análise não decide sozinha, funil via `analiseFunil()`, cláusula de adoção para projeto que já usa outro nome) + o gatilho de 145 chars nas Instruções + a linha na tabela «Como manter os documentos». **Opções consideradas:** (A) manter só no KCM — mantém o problema (projetos-filhos já produziam documentos equivalentes sem nome nem formato comum); (B) pasta `analises/` pré-criada no zip — descartada: pasta vazia é ruído e o kit já erra por excesso de arquivo; (C) **convenção ensinada + pasta preguiçosa** — escolhida: a pasta só nasce quando a primeira análise for escrita, e a mesma regra vale para `specs/`. Consequência: projeto que já escreve esse tipo de documento com outro nome (`design/`, `estudos/`, `rfc/`) não é renomeado por conta própria — o assistente propõe, o usuário decide. **Higiene do FlatDrop registrada como regra escrita** (mesma decisão): modelo (`_TEMPLATE.md`) e guia (`_GUIA*.md`) de pasta ignorada **sempre** voltam com `!`, na mesma leva em que nascem — faltou exatamente isso na wo0062, e o usuário teve de arrastar o `_TEMPLATE.md` à mão. `.flatdropignore` gerado corrigido: `meta/workorders/*` (não mais `meta/workorders/`) — a receita antiga reincluía com `!` **por baixo de uma pasta excluída por inteiro**, o que não funciona. Novo check **C21**. `KIT_VERSION 1.85.0`. Teto medido: `narrative` 6612 (folga 288), `game` 6520 (folga 380), `dev` 6038 (folga 862), `career` 5962 (folga 938) — nenhum nicho estoura. Harness **18/18, 64/64 → 65/65, 0 erros**.

**Por quê.** A §4 do `260727-HANDOFF-BRIEF.md` deixou em aberto «Ensinar o produto sobre `analises/`?» (fechada em IDEAS como pendência da D-096). A convenção provou valor no próprio KCM (D-089/D-096) e os projetos-filhos já sentiam a falta de um nome/formato comum para o documento que precede uma decisão não-trivial. A pasta preguiçosa evita o trade-off falso entre "ensinar a convenção" e "não inchar o kit com pasta vazia".

## D-098 — Bloco de fecho v2: `Próximo` carrega o pedido de volta; `Arquivar / Manter` vira lista (wo0064)

**Decisão.** O bloco de fecho de turno recebe **duas melhorias nascidas do uso real**: **(1)** o item **Próximo** ganha uma segunda parte — **(a) Ação** (a próxima coisa concreta) e **(b) Peça no próximo turno** (a frase já redigida que o usuário pode devolver para retomar sem reconstruir contexto), economizando um turno inteiro de negociação; **(2)** **Arquivar / Manter** deixa de ser prosa corrida e vira **lista** (uma linha **Arquivar:**, uma linha **Manter:**), como **Config recomendada** e **Handoff** já eram. Check **C19** ganha 4 asserções novas (sem check novo — segue **65/65**). **Custo de teto zero**: as duas mudanças vivem só no CEREBRO gerado, e o gatilho das Instruções não muda uma vírgula (`narrative` segue **6612**, folga 288; `game` **6520**, folga 380). **Achado da mesma verificação, registrado aqui:** o `meta/CEREBRO.md` do **próprio KCM** tinha ficado na versão **pré-wo0060** — ordem antiga (Estado → Próximo → Notas) e o rótulo antigo «Notas» — o dogfood não tinha sido atualizado quando o produto foi corrigido na wo0060. Corrigido nesta WO junto com a higiene de `CLAUDE.md`/`BUILD.md`/`meta/CONTEXT.md` (17→18 nichos, vocabulário `spec`→WO — o `CLAUDE.md` da raiz, lido pelo Claude Code em toda sessão, ainda dizia que a regra de ouro era **17/17**). `KIT_VERSION 1.86.0`. Harness **18/18, 65/65, 0 erros**.

**Por quê.** O formato nasceu na wo0058 e já tinha sido corrigido uma vez na wo0060 — é refinado pelo uso, não desenhado de uma vez. A segunda parte do `Próximo` resolve um atrito real (o usuário reformulando o pedido do zero a cada turno); a lista alinha o item aos dois formatos que já funcionavam bem. O achado do dogfood desatualizado é o motivo estrutural por trás da tarefa de higiene: quando o **produto** muda de formato, o **CEREBRO do próprio KCM** precisa entrar na mesma WO — senão a régua com que o KCM se mede diverge da régua que ele ensina, e ninguém nota porque nenhum check olha para os docs-âncora (`CLAUDE.md`, `BUILD.md`) que citam números como "17/17" em prosa solta.

## D-099 — O bloco de fecho tem raia: planejamento fecha com o bloco, execução fecha com relatório (wo0065)

**Decisão.** O Claude Code passou a emitir o bloco de fecho de turno por conta própria (nota `260727-1833.txt`), sem ninguém ter pedido — a seção do `meta/CEREBRO.md` dizia «**Todo** turno de trabalho termina com este bloco» sem dizer **de quem** é a raia, e a wo0064 deixou a seção mais fresca, o que provavelmente selou a adoção. O prejuízo é concreto: o Code trocou o **relatório de trabalho** (o que fez, o que encontrou, o que fugiu do texto da WO) por um **formulário** preenchido com «nada avulso» e «sem WO pendente» — vazio é pior que relatório, porque perde a única informação que só quem executou tem, e de quebra violou a própria regra condicional do formato (linhas vazias que ele proíbe). **Opções consideradas:** (A) deixar como está — o Code continua trocando relatório por formulário; (B) tirar o bloco do CEREBRO e deixá-lo só nas Instruções — quebraria o projeto vanilla, que não tem Instruções separadas; (C) **dar dono ao bloco** — escolhida: o bloco é da raia de **planejamento** (chat); quem **executa** no Claude Code fecha com **relatório**. Consequência: `meta/CEREBRO.md`, `CLAUDE.md` (raiz), `.claude/commands/wrap.md` e `INSTRUCOES-DO-PROJETO.md` do próprio KCM passam a dizer isso explicitamente; o `CLAUDE.md` gerado e a skill `apply-wo` do kit-Code (produto) passam a mandar **relatar**. **Duas disciplinas de entrega que vinham falhando no chat, corrigidas junto:** a regra «WO nunca vai sozinha» (linha `/apply-wo <arquivo>` junto) subiu das Instruções (lidas em toda mensagem) para reforçar o que só vivia no CEREBRO (lido no início da sessão) — regra que precisa valer em todo turno e mora só no CEREBRO evapora, foi o que aconteceu com essa mesma linha (existia na D-030, sumiu na prática); e o bloco `git` parcial (só `add`, sem o `commit`) passa a ser proibido em prosa. **Fim dos resíduos do rename `spec`→WO (wo0053) no kit do Claude Code:** o check C15 vigiava caminhos e nome de comando, mas não a prosa — `CLAUDE.md` gerado e skill `apply-wo` ainda diziam «aplica uma spec», argumento rotulado `Spec: $ARGUMENTS`; nove ocorrências corrigidas (6 na prosa geral do template, 4 no kit do Code). Novo check **C22**. `KIT_VERSION 1.87.0`. Teto: padrão inalterado (`narrative` 6612, `game` 6520); `dev` 6038 → **6117** (folga 783, por causa da linha `/apply-wo` condicional a `codeModeOn()`). Harness **18/18, 65/65 → 66/66, 0 erros**.

**Por quê.** O achado não é só "o Code fez algo que não devia" — é que a instrução que causou isso estava tecnicamente correta («todo turno termina com o bloco») e ambígua só na dimensão que importava (de quem é a raia). Regra escrita sem dono se espalha para quem a lê primeiro. A lição de método vale para qualquer regra futura no CEREBRO que fale de "todo turno": nomear a raia não é excesso de formalismo, é o que impede um agente disciplinado de aplicar corretamente uma regra ambígua no lugar errado.

## D-100 — A cópia não é a fonte da verdade; análises voltam ao mount; a instrução viva é a do painel (wo0066)

**Decisão.** No turno anterior, o chat reentregou a wo0065 **já aplicada** — linha `/apply-wo` e handoff de arquivos que já estavam no repo — porque não releu o mount: o relatório do Code (`260727-2216.txt`, com o commit `4bddaa0` e o achado do `.flatdropignore`) estava lá desde antes do turno. A causa não é distração, é estrutural: o chat mantinha um **sandbox reconstruído do mount** para testar a WO, e a partir do momento em que o sandbox existe, ele passa a *parecer* o estado do projeto — a releitura do mount vira redundância aparente, embora o sandbox congele no instante em que nasce enquanto o repo anda. **Dado que confirma a gravidade:** o `src/index.template.html` do repo era **byte-idêntico** ao do sandbox — a cópia estava tecnicamente correta quanto ao produto, e mesmo assim levou ao erro, porque o que mudou não foi o código, foi **o estado do trabalho**. **Opções consideradas:** (A) reforçar a regra de releitura que já existia — descartada, ela já existia (item 4 do ritual) e não impediu o erro; (B) proibir sandbox — descartada, é o sandbox que faz a WO chegar testada, e a própria wo0065 provou o valor (template byte-idêntico ao aplicado); (C) **nomear a armadilha e atacar a causa** (a ilusão de estado, não a falta de leitura) — escolhida. Consequência: regra nova nas `HYGIENE_RULES` (produto, CEREBRO gerado dos 18 nichos), armadilhas **15** e **16** no `meta/CONTEXT.md` §7, `meta/analises/*` reincluído no `.flatdropignore` (análise «Em discussão» que o chat não vê no turno seguinte não é discutida, é reescrita do zero), e duas regras novas no `meta/CEREBRO.md` («a cópia não é a fonte da verdade» + «a instrução viva é a do painel», esta última consequência direta de `437fd39`: o `INSTRUCOES-DO-PROJETO.md` do repo é backup versionado, quem vale é o texto de Projeto → Instruções). Novo check **C23** (regra presente nos 18 CEREBROs, ausente das Instruções — custo de teto zero, provado). `KIT_VERSION 1.88.0`. Teto inalterado: `narrative` 6612, `game` 6520, `dev` 6117. Harness **18/18, 66/66 → 67/67, 0 erros**.

**Por quê.** A regra de releitura por turno (item 4 do ritual, várias versões de idade) fala de «reler o mount», não de «desconfiar da própria cópia» — e por isso não pegou o caso em que a cópia é boa mas o estado mudou. Cópia correta e estado errado é a forma mais traiçoeira desta armadilha, porque nenhuma checagem de conteúdo a detecta; só a disciplina de reler antes de afirmar pendência ou reentregar. As duas armadilhas dependentes (análises fora do mount, instrução comparada contra o arquivo versionado em vez do painel) são a mesma raiz com outra roupa: tratar uma cópia — do repo, de uma pasta ignorada, de um arquivo backup — como se fosse a fonte da verdade.

## D-101 — Convivência gerado × manual: bloco marcado, verificação no ponto de uso, HUB aposentado (wo0067)

**Decisão.** Primeiro ciclo completo de um projeto (FlatDrop 0.14.0) sob as regras pós-v1.87 devolveu doze itens; esta WO aplica os cinco de maior valor. **(1) Convivência gerado × manual.** O `.flatdropignore` que o kit emite passa a ter os marcadores `# >>> flatdrop-editor` / `# <<<` — regra dentro (o que o editor do FlatDrop reescreve a cada salvamento), comentário fora (sobrevive porque o editor só toca o bloco), nada depois do fim (vale a última regra que casa). Corrige de quebra o bug que o FlatDrop apontou: o gerador ensinava `pasta/*` mas ainda emitia `logs/` na forma antiga, e mandava reincluir `!meta/analises/_TEMPLATE.md` sem o `meta/analises/*` que faz o `!` valer — o par agora vem completo. **Opções consideradas** para a frase sobre o motivo do `pasta/*`: (A) manter «o `!` não reinclui» (o texto antigo, impreciso); (B) trocar para «é só a poda de diretório» (a correção que o FlatDrop mediu com PathSpec); (C) **dizer as duas coisas** — escolhida: a poda é a causa comum nas ferramentas, mas no git puro a limitação é normativa e documentada, e quem lê precisa acertar nos dois mundos. **Recusado:** substituir a frase antiga pela nova sem a ressalva do git puro — perderia precisão para o caso mais comum de todos. **(2) Verificação no ponto de uso.** O campo **Estado** do bloco de fecho agora exige que o dado venha de leitura feita **neste turno** e admite «não verificado nesta rodada» como resposta de primeira classe — campo obrigatório sem dado fresco empurra para a memória, que logo após entregar um trabalho é a *expectativa* de que ele foi aplicado, não observação. A regra «a cópia não é a fonte da verdade» (D-100) já existia, mas morava em «Regras de higiene», longe de onde ela quebra — regra sem gatilho no ponto de uso é decoração. **(3) Gatilho concreto de análise.** Some ao lado de «mudança não-trivial» (subjetivo) o teste **«mudar o formato de um artefato que outra pessoa — ou o você do futuro — vai ler ou editar»**, testável e que teria pego as três correções que exigiram redesenho na sessão do FlatDrop. **(4) Princípio do artefato gerado.** Novo item nas `HYGIENE_RULES`: artefato gerado que convive com edição humana precisa enxergar o que existe fora dele, ter precedência definida por posição, e nunca desfazer o que não é seu — o `.flatdropignore` e, antes, o apêndice do CEREBRO já tropeçaram no mesmo padrão. **(5) HUB de infraestrutura aposentado.** O `HUB.md` da raiz (toolchain KCM·ASU·FlatDrop, escrito à mão) estava parado desde 2026-07-03 — quatro meses de versões atrás — e as três frentes já se coordenam bilateralmente pelo mount e pelo «Feedback para o Kit» (esta WO inteira nasceu de um feedback que chegou sem o HUB). Os três itens da sua caixa de entrada foram conferidos contra o código antes de apagar: C4 (diretriz ASU) já aplicado; ASU nos próprios docs vira nota no IDEAS; sinalização dos modos ativos parcialmente aplicada (falta na tela, abre item no IDEAS). Os **contratos** (a única coisa do HUB que o KCM ainda usava) migraram para uma subseção nova ao final da §8 do `meta/CONTEXT.md`. **Não** se mexeu no `buildHub()` do produto — é feature viva para grupos de projetos de conteúdo, coisa distinta do HUB de infraestrutura que morreu aqui. **Achado fora do texto literal da WO:** o arquivo vive na **raiz** do repo (`HUB.md`), não em `meta/HUB.md` como o texto da WO nomeia — mesmo arquivo, caminho diferente do descrito; removido do local real. Novo check **C24**. `KIT_VERSION 1.89.0`. Teto inalterado: `narrative` 6612, `game` 6520, `dev` 6117. Harness **18/18, 67/67 → 68/68, 0 erros**.

**Por quê.** Os cinco itens compartilham a mesma lição: uma regra correta que não está no lugar onde o erro acontece, ou um formato que não distingue o que é seu do que é do outro, não protege ninguém — só parece proteger. O HUB aposentado é o mesmo tema em escala de processo: coordenação que não é mais usada continua «documentada» só até alguém confiar nela por engano.

## D-102 — A releitura ganha gatilho; o campo Estado fica (wo0068)

**Decisão.** A nota `260728-2029.txt` do FlatDrop dissecou por que o assistente afirmou que uma WO estava pendente tendo dois `.txt` no mount — quatro causas. Três já tinham antídoto pela wo0067: **previsão vestida de observação** (o campo Estado exige leitura feita naquele turno), **campo obrigatório induz confabulação** («não verificado nesta rodada» virou resposta de primeira classe) e **regra longe do ponto onde quebra** (a exigência mudou para dentro da descrição do campo). A quarta — **trabalho pedido expulsa ritual não-pedido** — ficou sem antídoto: as oito perguntas da mensagem tinham gatilho, a releitura do mount não tinha nenhum, e o padrão é invertido — a mensagem que mais empurra a releitura para fora é a que tem mais chance de vir com o mount novo, porque quem pede muito costuma ter subido algo antes de pedir. **Opções consideradas:** (A) remover o campo Estado e o bloco de fecho — descartada: tirar o campo elimina o sintoma e mantém a causa, porque sem ele a afirmação de estado migra para a prosa, onde não há rótulo nem lugar para dizer «não verifiquei» (um campo que aceita essa resposta é autodeclaratório — torna a resposta honesta mais barata que a inventada, o único mecanismo que funciona de verdade); (B) só reforçar a regra existente com mais texto — descartada, é o mesmo padrão que já falhou nas outras três causas antes do wo0067 nomear a armadilha; (C) **dar gatilho à causa 1 e nomear os quatro modos de falha como regra de higiene** — escolhida. Consequência: a linha do gatilho nas Instruções troca a lista de exemplos («já subi», «veja o txt»...) — que ensinava a *esperar o sinal*, o hábito errado — por «inclusive, e principalmente, quando eu não sinalizo upload» + «mensagem cheia de pedidos é onde essa releitura mais falha»; os 66 chars economizados pagam a maior parte dos 82 do gatilho novo (saldo universal **+16**). Os quatro modos de falha (as duas causas do wo0067 renomeadas + as duas desta WO) entram como item novo nas `HYGIENE_RULES` do CEREBRO gerado. **Junto, no mesmo protocolo de update:** o `_UPDATE-PROMPT` passa a pedir o estado do repo (versão/commit) antes de comparar qualquer arquivo — comparar sem saber o estado atual é comparar com memória; **template genérico deixa de ser candidato a substituir arquivo vivo refinado** (`CLAUDE.md`, `.claude/*`, skills e os `meta/` já especializados caem por padrão em (c), não em escolha oferecida a cada update) — a única exceção é formato descontinuado, que sempre migra (hoje: `.claude/commands/` → `.claude/skills/<nome>/SKILL.md`); e o manifesto do `SPEC.md` no nicho `dev` passa a dizer que é modelo de spec-de-feature (Spec-Driven Development), sob demanda, e **não** o modelo das WOs — o mal-entendido spec×WO já custou uma migração de vocabulário inteira no FlatDrop (DEC-023 deles). Novo check **C25**. `KIT_VERSION 1.90.0`. Teto: `narrative` 6612 → **6628** (folga 272), `game` 6520 → **6536** (folga 364), `dev` 6117 → **6334** (folga 566, o `role` do `SPEC.md` aparece no manifesto de arquivos). Harness **18/18, 68/68 → 69/69, 0 erros**.

**Por quê.** As três primeiras causas tinham antídoto porque cada uma tocava um dado (o campo Estado); a quarta não tinha dado nenhum para ancorar a correção — é a ausência do próprio gesto de reler, não um preenchimento malfeito dele. Por isso o antídoto não podia ser "mais um campo": tinha de ser um gatilho na regra que já manda reler a cada turno, deixando explícito que o caso em que ela mais falha é exatamente o caso em que ela mais importa. Manter o campo Estado e o bloco de fecho, em vez de removê-los, segue a mesma lição da D-100/D-101: a resposta a uma regra que falhou não é apagar o mecanismo, é encontrar o ponto exato onde ele quebra e reforçar ali.

## D-103 — Curar antes de travar: as linhas de modo perdem a duplicação, não a regra (wo0069)

**Decisão.** A análise `260727-ANALISE-teto-por-configuracao.md` mediu o problema: com **Modo Code + ASU** ligados, **13 dos 18 nichos** entregavam Instruções acima do teto de 6.900, pior caso **8.097** (`narrative`). Cinco opções na mesa — (A) documentar e aceitar, (B) subir o teto, (C) teto por configuração, (D) curar as linhas de modo, (E) escopar por nicho. O autor respondeu (2026-07-29): **(B) recusada** — subir o teto daria margem para os projetos engordarem as Instruções; o teto só sobe quando o custo real de token/caractere avançar, não para acomodar o que já cresceu. **(E) descartada**, como a análise recomendava. **(A) adotada como complemento**, não resposta isolada. **(D) aceita e aplicada nesta WO**; **(C) aceita, mas só depois de (D)** — travar sem curar carimbaria o tamanho atual como orçamento aceito. Consequência: a linha do ASU nas Instruções, a linha de feedback do ASU, e as duas linhas de `.gitignore`+README perdem a duplicação com o que o CEREBRO gerado **já** detalhava por completo (`Saída de código via ASU (patch)`, `Artefatos de repo`) — a mesma arquitetura que a wo0056-A validou para os princípios (versão curta na Instrução, definição completa no CEREBRO, check nas duas pontas). A linha do commit perde «Não pule o commit», redundante com o «ENTREGUE» que abre a mesma frase. **Informação nova do autor, que muda o texto do ASU no CEREBRO:** ele aplica as instruções **pela interface** do ASU e guarda o `.yaml` fora da raiz do projeto — o trabalho do assistente termina no `.yaml` **válido**; como o usuário aplica e onde guarda não é assunto da conversa, e o CEREBRO passa a proibir explicitamente inventar instrução de execução ou pasta de destino. Novo check **C26** prova as duas pontas (curto na Instrução, completo no CEREBRO) e vigia o incremento dos modos (limite de vigilância 950, hoje **901**). `KIT_VERSION 1.91.0`. **Números medidos:** nichos acima do teto no combo Code+ASU caem de **13 para 2**; incremento máximo do **+Code** cai de 779 para **529**; incremento máximo do **+ASU** cai de 690 para **372**; incremento total dos modos (medido no C26) cai de **1469 para 901**. Configuração padrão: `narrative`/`game` inalterados (todas as linhas curadas são condicionais aos modos); `dev` cai de 6334 para **6084** (folga 816), pela fusão `.gitignore`+README. Harness **18/18, 69/69 → 70/70, 0 erros**. **Recomendação registrada para a WO seguinte (opção C):** orçamento **Code ≤ 550 · ASU ≤ 400**, «apertado» no sentido de já cumprido hoje — a próxima linha de modo só entra se outra for curada; `G16` não deve virar o check de tudo (trava o incremento dos modos, não o total, que continua sob tolerância de 7.600 no combo cheio); publicar a folga no STATUS a cada versão, ordem `dev` → `narrative` → `game`.

**Por quê.** O medo de curar é perder regra — mas a curadoria da wo0069 não cortou nenhuma: cortou **duplicação** entre a Instrução (lida em toda mensagem, cara) e o CEREBRO (lido uma vez por sessão, já tinha a versão completa). O C26 é o que torna essa curadoria agressiva segura: exige as duas pontas, então qualquer regra que "sumir" da Instrução sem contrapartida no CEREBRO deixa o build vermelho — a mesma garantia que a wo0056-A deu aos princípios. A ordem curar → travar não é burocracia: travar (opção C) antes de curar teria fixado o inchaço medido (13/18 nichos estourando) como se fosse o tamanho certo do produto; curar primeiro dá ao teto por configuração um número que já reflete o produto enxuto, não o produto como ele cresceu por acidente.

## D-104 — O kit passa a entregar molde de WO; «Técnicas específicas» vira seção oficial (wo0070)

**Decisão.** O sand-land foi o segundo projeto a rodar um ciclo completo sob as regras pós-wo0066, e trouxe três feedbacks (`260729-1138.txt`, FK-A/B/C) que o FlatDrop não tinha como enxergar por não produzir WOs. **FK-C (o mais forte):** o kit ensina molde para spec de feature, log e análise — nenhum para a **WO**, o artefato que a raia chat→Code mais produz; sem molde, cada WO deriva por imitação da anterior (a do sand-land derivou em quatro pontos: título, idempotência, banner de canal, sintaxe de caminho). Pior: o kit **já documenta** o par `pasta/*` + `!pasta/_TEMPLATE.md` para análises — só não aplicava a própria regra ao artefato principal. Consequência: `buildWoTemplate()` novo, gerando `meta/workorders/_TEMPLATE.md` no zip estruturado, no kit do Code e no pacote de atualização, com reinclusão no `.flatdropignore` gerado (`meta/workorders/*` seguido de `!meta/workorders/_TEMPLATE.md` — ordem importa, é a reinclusão). O `.gitkeep` que só existia para a pasta nascer sai (o modelo a substitui). **FK-A:** a linha «Estado» pedia «o commit, quando existir», mas num Projeto por cópia achatada não há `.git` — nenhuma releitura resolve. «Não verifiquei» (desleixo) e «não dá para ler daqui» (fato estrutural) precisavam de remédios diferentes; o campo Estado passa a distinguir os dois, com «commit não legível pelo mount» + pedir uma vez (`git log -1 --oneline`) em vez de repetir a ressalva todo turno. **FK-B:** a regra da wo0066 («a cópia não é a fonte da verdade») induziu o assistente do sand-land a «corrigir» uma data de emissão que estava certa — a regra precisava da contrapartida: o que envelhece é o **estado do repo e as âncoras**, não o **carimbo de emissão** de um documento (escrito e datado no dia 27, aplicado no dia 29, segue correto). **Estrutural (IDEAS do sand-land, confirmado 2×, DEC-018 deles):** ao rebasear o CEREBRO numa versão nova do kit, o único conteúdo que valia preservar era o bloco «Técnicas específicas» — o resto era formatação genérica que a versão nova já cobria melhor. Vira seção oficial no CEREBRO gerado: começa vazia, protegida do template-update («um template-update nunca sobrescreve esta seção»), promovível ao corpo do CEREBRO quando um item virar regra geral. **Achado à parte:** o pré-requisito do ASU citava `PROMPT_IA.md` no conhecimento do Projeto — mas esse arquivo semeia a diretriz ASU em projetos **sem** o kit, e diverge da diretriz já curada no CEREBRO (comando colado no chat vs. arquivo para baixar sem instrução de execução); corrigido para só o `INSTRUCTION_GUIDE.md`. **Recusado com argumento:** tipo novo de artefato «proposta de fase» (`docs/F2_proposta.md`) — análise + ROADMAP já cobrem o caso, e um quarto tipo de artefato aumenta o vocabulário que todo projeto precisa aprender; a taxonomia estendida de IDEAS (IDs `IDEIA-NNN`, referências de origem) fica de fora pelo mesmo motivo — só a gaveta «Adiadas com gatilho de volta» é boa o bastante para virar sugestão no template, vai na leva seguinte. Novo check **C27** prova as seções do modelo de WO, a ordem de reinclusão no `.flatdropignore`, e nos 18 CEREBROs: a seção Técnicas específicas + sua proteção contra template-update, a distinção Estado não-verificado/não-legível, a contrapartida do carimbo de emissão, e o aviso do ASU contra o `PROMPT_IA.md`. `KIT_VERSION 1.92.0`. **Custo de teto: zero** — `narrative` 6628, `game` 6536, `dev` 6084, todos inalterados (tudo novo vive no CEREBRO ou em arquivo gerado à parte). Harness **18/18, 70/70 → 71/71, 0 erros**. Dogfood: o próprio KCM adota o molde para si em `meta/workorders/_TEMPLATE.md` e no `.flatdropignore` da raiz.

**Por quê.** Os três feedbacks compartilham a mesma lição das decisões anteriores (D-100/D-101/D-102): uma regra certa que não está no lugar onde quebra não protege ninguém. FK-C é o caso mais direto — o kit pregava «pasta/\* + \_TEMPLATE.md» sem praticar no seu próprio artefato mais usado; FK-A e FK-B são a mesma armadilha em miniatura, um campo (Estado) e uma regra (a cópia não é a fonte da verdade) escritos sem prever o caso estrutural (mount sem `.git`) ou o excesso oposto (desconfiar até do que não devia). «Técnicas específicas» formaliza algo que já acontecia informalmente — a curadoria humana descartando boilerplate do kit e preservando o conhecimento do projeto — e dar a isso um nome e uma proteção evita que aconteça de novo por imitação malfeita, o mesmo padrão-raiz do FK-C.

## D-105 — Teto por configuração: trava o incremento, não o total (wo0071)

**Decisão.** A wo0069 (D-103) curou as linhas de modo e deixou uma recomendação registrada para a WO seguinte: orçamento **Code ≤ 550 · ASU ≤ 400**, com o `G16` seguindo fora do assunto dos modos. Esta WO instala o check que faltava — a opção **(C)** da análise `260727-ANALISE-teto-por-configuracao.md`, agora com os números aprovados pelo autor. **O princípio:** trava-se o **incremento**, não o total. O total varia com a riqueza do nicho (`narrative` é grande porque narrativa é grande — isso é do projeto, não do kit); o incremento é exatamente o que as linhas de modo custam, e é o que cada WO nova empurra para cima. Por isso o `G16` **não muda** — segue medindo só o pior caso de **conteúdo** (chips/multi). **O achado da medição:** ao instalar o check com o modelo de dois orçamentos (Code, ASU), ele reprovou **17 de 18 nichos** com «+ASU +807 > 400». Investigado: as linhas de **commit** e de **entregáveis de repo** são liberadas por `asuModeOn() || codeModeOn() || CHANGELOG` — **qualquer** modo de trabalho as liga — e no modelo de dois números elas eram cobradas do Code (que vem primeiro) e ficavam **sem dono** quando só o ASU estava ligado. Consequência: um **terceiro balde**, `compartilhado` (linhas que qualquer modo liga), com orçamento próprio de **450** — sem ele, dava para engordar uma linha compartilhada indefinidamente e passar verde nos dois orçamentos aprovados. **Números medidos, todos dentro do orçamento:** compartilhado **435**/450, Code **529**/550, ASU **372**/400, total no combo cheio **7.529**/7.600, padrão **6.628**/6.900 — nenhum dos números aprovados pelo autor mudou; o balde novo só cobre um buraco que existia e não era vigiado por ninguém. `INSTR_TETO_MODOS = 7600` e `MODO_ORCAMENTO = {code:550, asu:400, compartilhado:450}` viram fonte única, lida tanto pelo harness quanto pelo CEREBRO gerado (que agora publica os três orçamentos e o total — um número que o leitor não consegue reproduzir é pior que número nenhum, o mesmo princípio da opção (A) da análise). O `C26` (wo0069) passa a **derivar** o limite de vigilância do orçamento (`code+asu`) em vez do 950 fixo. Novo check **C28**, que mede os 18 nichos em quatro configurações e imprime os cinco números a cada rodada — é o instrumento que faltava: a deriva do orçamento passa a ser visível sem ninguém ir medir à mão. `KIT_VERSION 1.93.0`. **Custo de teto: zero** na configuração padrão — `narrative` 6628, `game` 6536, `dev` 6084, todos inalterados. Harness **18/18, 71/71 → 72/72, 0 erros**.

**Por quê.** O modelo de dois números (Code, ASU) parecia completo porque cobria os dois switches que o usuário liga — mas o custo real não segue os switches, segue as **linhas**, e uma linha liberada por `||` (qualquer modo) não pertence a nenhum dos dois orçamentos que só um modo cobre. Esse é o motivo de o achado só ter aparecido ao **instalar e rodar** o check, não ao projetá-lo no papel: um orçamento de dois baldes é uma partição que parece exaustiva e não é, e a lacuna fica invisível até algo cair nela. A trava do incremento (não do total) é o que impede o teto por configuração de virar a opção (B) disfarçada — um orçamento calibrado no que já existe hoje só funciona como freio se ele for sobre o que cada mudança *acrescenta*, nunca sobre o que o projeto *já tem* por ser rico em conteúdo.

## D-106 — Gaveta de adiadas com gatilho de volta; HISTORY ganha pesquisa e autópsia; pacote de update fica até o merge fechar (wo0072)

**Decisão.** Fecha os três itens que sobravam da leva sand-land — dois abertos desde a wo0070/D-104 (§«Feedback para o Kit» do IDEAS) e a lição da nota `260729-1252.txt`, adiada por sequenciamento (a corrente wo0069→0071 tinha de fechar na ordem antes) e não por esquecimento. **Item 1:** o IDEAS já distinguia «Ativas», «Em avaliação», «Concluídas» e «Descartadas», mas faltava o estado mais comum de todos — **decidi não fazer agora** — que hoje ou poluía «Ativas» ou mentia como «Descartada». A gaveta **«Adiadas»** entra no template universal (`narrative`) e no IDEAS próprio do `dev` (que tem vocabulário com emoji); o `brainstorm` já tinha o equivalente («Em banho-maria») e recebe só a **exigência do gatilho de volta** — ideia adiada sem gatilho é ideia perdida, ninguém relê uma lista de adiadas por esporte. **Critério do que entrou:** passou porque é **estado que já existe na prática e não tinha lugar**. **Recusado:** a taxonomia estendida do IDEAS (IDs `IDEIA-NNN`, referências de origem, gavetas «Reduzidas/Reescopadas» e «Longo prazo») — boa para centenas de ideias, cara para todos os outros projetos, porque aumenta o vocabulário obrigatório que todo projeto precisa aprender antes de escrever a primeira linha. **A regra é cobrada, o nome da seção não** — cada nicho usa o vocabulário dele. **Item 3:** o `HISTORY.md` (arquivo-baú) enumerava três exemplos de tipo de seção; ganham mais dois nos nichos `dev` e `research`: **pesquisa de convenções** (o que já foi investigado antes de adotar um padrão externo — impede pesquisar de novo em seis meses) e **autópsia** (sintoma → causa raiz → correção → como evitar). **A nota `260729-1252.txt`:** a regra do protocolo de update dizia que o pacote de template-update é «entrada transitória», mas o sand-land tirou-o do mount **antes** de o merge fechar e perdeu três trechos de prosa genérica até o pacote voltar. Duas lições: enquanto o merge estiver em curso, o pacote **fica** no mount; e, se ele já saiu, o assistente **declara a cobertura de leitura** (quais faixas leu verbatim e quais não) — foi essa declaração que permitiu fechar a lacuna com um diff dirigido em vez de refazer o merge inteiro. Novo check **C29**, provando a gaveta+gatilho nos 18 IDEAS, os dois tipos de seção nos HISTORY de `dev`/`research`, e a regra do pacote transitório nos 18 CEREBROs gerados. `KIT_VERSION 1.94.0`. **Custo de teto: zero** — tudo vive em template/CEREBRO/harness, nenhuma Instrução ganhou linha nova. Harness **18/18, 72/72 → 73/73, 0 erros**. **A leva sand-land fecha aqui** — não sobra item aberto dela.

**Por quê.** O adiamento de três turnos do próprio item 1 (por sequenciamento correto, não descuido) é o argumento vivo a favor dele: uma lista sem estado para «decidido não agora, com gatilho» empurra toda ideia adiada para «Ativa» (some no ruído) ou «Descartada» (mente sobre o motivo). A exigência do gatilho é o que distingue esta gaveta de um cemitério de ideias — sem ele, a gaveta vira exatamente o problema que ela deveria resolver. A escolha de dar a cada nicho seu próprio vocabulário (em vez de forçar «Adiadas» em todo lugar) segue o mesmo princípio que orientou o enxugamento das Instruções (wo0056 em diante): o kit cobra a regra que importa, nunca o nome exato da caixa que a guarda.

## D-107 — O KCM migra para `.claude/skills/` (wo0073)

**Decisão.** Desde a wo0068 (D-102) o kit marca `.claude/commands/` como formato legado no protocolo de update e manda os projetos-filhos migrarem para `.claude/skills/<nome>/SKILL.md`. O KCM continuou nos `commands/` — item registrado como pendência no IDEAS desde então. Esta WO fecha o dogfood: os três comandos (`apply-wo`, `check-wo`, `wrap`) migram para `.claude/skills/<nome>/SKILL.md`, cada um ganhando `name` e `description` no front-matter (o `check-wo` já tinha `description`; só ganhou o resto). `disable-model-invocation: true` é o que faz a skill se comportar como comando explícito — a invocação **não muda**: `/apply-wo <arquivo>`, `/check-wo <arquivo>` e `/wrap` continuam sendo a forma de chamar, e o modelo não dispara nenhuma delas por conta própria (mesmo formato que o kit já emite para os projetos-filhos desde a wo0065). Testado nesta sessão: chamar a skill `apply-wo` diretamente (sem passar pelo comando) foi recusada com o erro esperado de `disable-model-invocation`. `.claude/commands/` é removido do repo (git remove a pasta, sem `.gitkeep`). **Sem bump:** nada em `src/` foi tocado, o produto não muda, harness segue **18/18, 73/73, 0 erros**. **Fora de escopo, reafirmado:** o `check-wo` não é entregue aos projetos-filhos (só `apply-wo` e `wrap` saem no kit) — segue aberto no IDEAS aguardando mais quilometragem.

**Por quê.** «Faça o que mando, não faça o que faço» é o pior tipo de dívida de um kit que ensina convenção aos outros — pior ainda quando o kit desobedece a própria regra no exato momento em que ela nasce para os filhos (wo0068). A migração não muda uma linha de produto porque a skill com `disable-model-invocation: true` é, por construção, indistinguível de um comando explícito para quem invoca — a diferença é só onde o arquivo mora e o que o torna descobrível (`description`), que é justamente o que o `check-wo` (único com front-matter até aqui) já vinha provando que funciona.

## D-108 — O gatilho de análise ganha contrapeso e cláusula de abandono; o relatório da raia de execução passa a ser gravado em arquivo (wo0074)

**Decisão.** Evidência de campo (ASU, 2026-07-30, §«Feedback para o Kit» do IDEAS, item 5): um pedido pequeno disparou o gatilho de análise (wo0063/D-097), o assistente foi à fonte, **descobriu ali que a premissa caía** (o manifesto já tinha cabeçalho `#`; o parser já o ignorava) — e **continuou escrevendo** em vez de parar, devolvendo ao usuário um «ponto de decisão» que era escolha técnica dele e custando um turno inteiro. Causa: assimetria de concretude — o lado que **alarga** o gatilho vinha com cinco exemplos nomeados e reforço («mesmo quando o diff é pequeno»); o lado que **estreita** era um adjetivo solto («mudança pequena não pede análise») e aparecia depois. Entre um critério reconhecível e uma abstração, o assistente segue o reconhecível. **O remédio é a posição, não o texto:** o item «mudança pequena» sobe e vira **dois testes baratos** (o QUÊ já está decidido? cabe em meia página?) lidos ANTES do gatilho que alarga; o gatilho ganha o fecho «é uma pergunta a refazer DEPOIS de ler a fonte, não uma senha para começar a escrever» + o limite do formato já extensível; e nasce a **cláusula de abandono** — ler a fonte é o que tem valor, não escrever o documento; se a leitura derrubar a premissa, o desfecho legítimo é parar, dizer o que a leitura mostrou e ir trabalhar. Novo check **C30** trava a ordem (teste barato antes do gatilho) e o texto dos quatro trechos nos 18 nichos. **Em paralelo:** a raia de execução (Claude Code) já produz relatório de trabalho a cada `/apply-wo`/`/wrap`, e o usuário copiava esse relatório à mão para um `.txt` na pasta-pai do repo (é de lá que a sessão de planejamento seguinte o lê). O kit do Code (`CLAUDE.md`, `settings.json`, skills `apply-wo`/`wrap`) passa a gravar o MESMO relatório em `../AAMMDD-HHMM-code-<slug>.txt` automaticamente, com interruptor local («apague a seção para desligar») e aviso explícito se a escrita for negada — o relatório no chat continua sendo a entrega em qualquer caso. Requer `permissions.additionalDirectories: ["../"]`. **Dogfood:** o próprio KCM adota a regra (`CLAUDE.md`, `.claude/settings.json`, as duas skills), slug `kcm`. **Testado nesta sessão:** a gravação em `../260801-HHMM-code-kcm.txt` funcionou de primeira, sem negação de permissão. `KIT_VERSION 1.95.0`. **Custo de teto: zero** — C28 segue com os mesmos números (`padrao 6638/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7539/7600`; o padrão sobe 10 chars pela Edição 1, sem tocar os orçamentos de modo). Harness **18/18, 73/73 → 74/74, 0 erros**. **Também:** `.flatdropignore` — análises **Decidida/Implementada/Abandonada/Substituída** deixam de subir ao mount (só a ABERTA sobe, reincluída nominalmente na leva em que nasce); o desfecho já vive em DECISIONS/CHANGELOG, e cabeçalho de Status velho no mount lia como pendência aberta.

**Por quê.** Uma seção que ensina a **começar** uma análise e nunca ensina a **abandonar** uma vai sempre terminar em documento, porque nada no texto autoriza parar no meio — mesmo quando a leitura da fonte já respondeu a pergunta. A ordem importa mais que o conteúdo aqui: o lado que estreita sempre existiu («mudança pequena não pede análise»), mas perdia porque vinha depois e era mais abstrato — corrigir a posição sem inventar regra nova é o teste de que o diagnóstico estava certo. Automatizar a gravação do relatório fecha um laço manual que já existia (o usuário já lia o `.txt` da pasta-pai na sessão seguinte) sem inventar processo novo.

## D-109 — Templates de nicho que redefinem um universal precisam de paridade verificada; `.claude/commands/` deixa de ser alternativa; log por dia acumula sessões; o estado do repo vem do manifesto quando ele o traz (wo0075)

**Decisão.** Uma frente irmã devolveu quatro observações que se confirmaram na leitura do template (`260802-MENSAGEM-FlatDrop-para-KCM.md`, Parte 3, itens 3/4/5/6). Três eram nomes diferentes do **mesmo defeito estrutural**: `dev` e `brainstorm` **redefinem** os templates universais de `IDEAS.md` (e `STATUS.md`), e esses overrides não herdam refinamento nenhum feito depois — o `UNIVERSAL_IDEAS_TPL` ganhou as seções «Feedback para o Kit» e «Feedback para o ASU», mas as versões próprias do `dev` e do `brainstorm` continuaram sem elas. Como o CEREBRO gerado manda escrever nessas seções em **três** lugares diferentes, todo projeto de nicho `dev`/`brainstorm` nascia com uma regra apontando para um endereço que o próprio kit não criava — duas frentes irmãs tiveram de abrir a seção à mão antes de mandar o primeiro feedback, inclusive o feedback que originou esta WO. **É o inverso do defeito da wo0074:** lá, uma convenção foi aplicada uniformemente sem perguntar se devia ser uniforme; aqui, o universal foi refinado e o kit **esqueceu que dois nichos não o usam** — nenhum check cobria a paridade, o buraco era invisível ao harness. **Consequência:** as duas seções `📮` entram no fim do `IDEAS.md` próprio do `dev` e do `brainstorm`; check **C31** novo garante, para os 18 nichos, que o `IDEAS.md` efetivo tem as duas seções (não só o universal) e que pelo menos 2 nichos têm override próprio — a asserção `overrides>=2` é deliberada: sem ela, se algum dia os overrides forem apagados, o check passaria a vigiar só o universal e ficaria verde sem checar nada. **Os outros dois pontos, menores e independentes:** (1) o kit se contradizia sobre `.claude/commands/` — o protocolo de update já chamava de «formato descontinuado» (D-102/wo0068) e tratava a migração como automática, mas a instalação do kit do Code e o README do zip diziam que o formato legado «também funcionaria, mas Skills é o recomendado», apresentando como escolha o que o próprio kit já tratava como migração obrigatória; corrigido nos dois pontos para «formato descontinuado» — não é alternativa a escolher. O mesmo C31 prova que `também funcionaria` não aparece mais em lugar nenhum e que `formato descontinuado` aparece pelo menos 3× (hoje 4×: instalação, README do zip, protocolo de update). (2) `logs/AAAA-MM-DD.md` + «ao final de cada sessão» deixava indefinido o caso de duas sessões no mesmo dia; a saída óbvia (arquivo novo por sessão) quebraria o nome — uma frente irmã resolveu sozinha com `## Sessão N` dentro do arquivo do dia, e o kit devia ter dito isso: corrigido na tabela de documentos do CEREBRO gerado (a linha «Log:» das Instruções não muda — a regra completa mora no CEREBRO, que não paga teto). **Acréscimo à parte, não mudança de formato:** o contrato do manifesto FlatDrop passou a trazer, quando a raiz é um repositório git, o último commit/branch/limpo-sujo como «foto da geração» — assinatura e tabela do manifesto não mudaram (é acréscimo a uma lista de metadados sempre extensível), então não dispara o gatilho de mudança de formato (D-097/wo0063); o item «Estado» do bloco de fecho passa a usar esse dado quando ele vier, em vez de pedir — registrando que é foto da hora da geração, não do turno; a regra do «peça uma vez» (D-104/wo0070) continua valendo para mounts gerados por versões anteriores, sem as linhas. `KIT_VERSION 1.96.0`. **Custo de teto: zero** — nenhuma edição toca as Instruções; C28 imprime os mesmos cinco números de v1.95.0. Harness **18/18, 74/74 → 75/75, 0 erros**. **Fora de escopo, adiado para a leva 2** (mesma mensagem do FlatDrop, Parte 1 — anatomia do bloco gerado): `📁 Arquivos Críticos` do `STATUS.md` do `dev` e o exemplo do Princípio 11, ambos decisão pendente do usuário; a citação «previsão vestida de observação» já mora no CEREBRO (protegida pelo C25) e não repete no Princípio 8.

**Por quê.** O padrão que une os quatro itens é sempre o mesmo: uma regra certa escrita num lugar não alcança sozinha quem tem caminho próprio — seja um nicho com override, seja um artefato (instalação/README) que descreve o mesmo fato que outro artefato (protocolo de update) já descrevia diferente. A wo0074 já tinha nomeado a versão "aplicar uniformemente sem perguntar"; esta WO nomeia a versão oposta — "refinar o universal e esquecer quem não o usa" — e a resposta nos dois casos é a mesma: não confiar em prosa isolada, transformar a paridade em **check**, porque só o harness pega o que a leitura humana, buscando por padrão no lugar errado, deixa passar.

---

## D-110 — A anatomia do bloco gerado vira parte do princípio de higiene, com contagem de marcadores como forma testável; o P11 passa a cobrir o efeito estrutural do rename; `Arquivos Críticos` muda de STATUS para CONTEXT no nicho dev (wo0076)

**Decisão.** O kit tinha o **princípio** — desde a v1.89.0, as `HYGIENE_RULES` do CEREBRO gerado já diziam que artefato gerado que convive com edição humana precisa enxergar o que existe fora dele, ter precedência por posição e nunca desfazer o que não é seu — mas princípio não é verificável, e uma frente irmã provou isso na prática: escreveu um cabeçalho novo para o `.flatdropignore` **citando os marcadores do bloco dentro de um comentário**, para documentar a convenção; o gerador procura os marcadores por substring, cortou na citação, injetou o bloco no meio da frase e deixou dois blocos no arquivo. **E o mesmo defeito estava vivo neste próprio repositório:** o `.flatdropignore` gerado pelo kit e o `.flatdropignore` da raiz deste repo reproduziam os dois marcadores dentro de comentários explicativos — a mina não tinha detonado ainda porque a geração do mount só *lê* as regras; quem reescreve o bloco é o editor visual, e um único uso dele sobre este repo bastaria. **Correção:** as `HYGIENE_RULES` ganham a **anatomia declarada** — cinco regras que juntas compram a liberdade de usar editor visual e edição manual no mesmo arquivo (comentário FORA do bloco; regra DENTRO; UM bloco só; bloco é o ÚLTIMO conteúdo do arquivo; **os marcadores não se citam em comentário** — a quinta decorre da terceira, mas precisa ser dita em voz alta, porque é o erro que se comete justamente ao documentar a convenção) — mais **duas obrigações do lado da ferramenta** (diante de ambiguidade, recusar e não adivinhar, porque reescrever é a única operação irreversível; normalizar só o próprio bloco, nunca o texto da pessoa). O `.flatdropignore` gerado (`structuredFlatdropignore`) e o `.flatdropignore` da raiz deste repo param de citar os marcadores em comentário — descrevem em vez de reproduzir. Check **C32** novo trava a contagem: exatamente 1 ocorrência de cada marcador no `.flatdropignore` gerado (com e sem modo Code), mais a presença da anatomia, da quinta regra, das duas obrigações e da metade estrutural do P11 no CEREBRO dos 18 nichos. **Dois ajustes menores, decididos pelo usuário:** o **Princípio 11** (`consistency`) só ensinava a concordância de gênero/número em rename por busca-e-troca — ficava calado sobre o efeito **estrutural** (o termo também vive em caminho de pasta, nome de comando, identificador); ganha esse acréscimo, com o rename real `meta/CLAUDE.md` → `meta/CEREBRO.md` como exemplo (o exemplo cogitado pela frente irmã, «spec → WO», é impossível aqui — o C15 bane as duas strings do `index.html` inteiro, exatamente porque nasceu daquele rename; usar o caso que a própria regra originou seria o C15 impedindo o kit de se ensinar). E **`📁 Arquivos Críticos`** muda de endereço: nascia no `STATUS.md` do nicho `dev` (documento volátil, reescrito a cada sessão) enquanto o conteúdo é conhecimento **estável**, e três prompts do próprio nicho (Debug, Plano, Auditoria) já mandavam procurá-lo «em CONTEXT», onde a seção não existia — não é remoção, é correção de endereço para onde o kit já apontava. `KIT_VERSION 1.97.0`. **Custo de teto: zero** — nenhuma edição toca as Instruções; C28 imprime os mesmos cinco números da v1.96.0 (`padrao 6638/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7539/7600`). Harness **18/18, 75/75 → 76/76, 0 erros**.

**Por quê.** Um princípio escrito em prosa não impede ninguém de violá-lo justamente ao explicá-lo — é o padrão que a wo0067 (D-101) já tinha nomeado («artefato gerado precisa de anatomia»), mas sem a forma testável a regra dependia de leitura humana atenta, e a leitura humana atenta é exatamente o que falha ao documentar uma convenção citando o próprio exemplo que ela proíbe. Contar marcadores (exatamente 1 de cada) é a tradução da regra 3 (um bloco só) e da regra 5 (não citar em comentário) para algo que o harness prova a cada build — enquanto o check exigir exatamente um de cada, ninguém reintroduz a citação em comentário sem o repo ficar vermelho. O P11 e o `Arquivos Críticos` são achados de leitura do mesmo ciclo (mensagem do FlatDrop, Parte 1), pequenos e independentes da anatomia, mas com o mesmo formato de erro: regra certa, endereço/exemplo errado.

---

## D-111 — A releitura do mount deixa de ser exortação e passa a produzir um carimbo auditável pelo usuário; abertura de turno vira passo anterior a qualquer ferramenta; o sandbox ganha aviso de falsa confirmação; fica declarado que o relatório em arquivo lidera a cópia achatada (wo0077)

**A falha que originou tudo.** Em 2026-08-02, a wo0076 foi aplicada às **22:39** (commit `d423747`, relatório automático em `260802-2239-code-kcm.txt`). **No turno seguinte**, sem ter listado o mount uma única vez naquele turno, o assistente afirmou «a wo0076 você ainda não aplicou» — **quatro horas depois** de ela ter sido aplicada — e entregou uma revisão obsoleta dessa WO.

**Decisão.** A falha não veio de regra ausente: as Instruções já mandavam reler o mount em dois lugares, um deles com a frase «Mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa», lida em toda mensagem e desobedecida mesmo assim. O CEREBRO já nomeava os quatro modos de fracasso da releitura, e a falha foi a combinação exata de dois deles: *trabalho pedido expulsa ritual não-pedido* (o turno carregava dois entregáveis, uma auditoria e uma reconstrução de sandbox) e *previsão vestida de observação* (relatar o estado que o próprio turno anterior previa). **Diagnóstico: as Instruções já mandavam, em dois lugares, e isso não bastou — mais exortação não resolve.** Faltavam três coisas mecânicas e uma nova: **(a)** a releitura estava escrita como cerimônia e praticada como cerimônia de SESSÃO — vira passo de abertura de **TURNO**, antes de qualquer outra ferramenta, com degradação explícita para quando não há cópia achatada. **(b)** o campo «Estado» exigia leitura fresca mas era inauditável — quem lê não tem como saber se o assistente leu ou lembrou; ganha o carimbo `Base:` (arquivo lido NESTE turno + data que ELE declara + commit/versão que ELE traz), porque carimbo inventado é mentira detectável e campo vago não é. **(c)** o sandbox produz uma falsa confirmação nova: reconstruir o projeto a partir da cópia que se tem e ver as âncoras casarem é lido como «a WO continua válida» — é o contrário, se o trabalho tivesse sido aplicado a âncora estaria morta, e o silêncio dela é que engana. **(d)** os dois canais não chegam juntos — o relatório em arquivo nasce no instante da aplicação, a cópia achatada exige passo manual de quem a gera; o relatório lidera sempre, e a listagem do mount é o único lugar onde a discordância entre os dois aparece. `KIT_VERSION 1.98.0`. Check **C33** novo. **Custo de teto: negativo** — uma das duas exortações redundantes foi enxugada para pagar o carimbo; C28 passa de `padrao 6638/6900 · combo 7539/7600` para `padrao 6618/6900 · combo 7519/7600` (−20 líquido). Harness **18/18, 76/76 → 77/77, 0 erros**.

**Por quê.** Regra existente e desobedecida não se resolve com uma terceira exortação — as duas primeiras já tinham falhado, e somar prosa treina a ignorar prosa. A resposta é trocar exortação por valor produzido: um carimbo que o próprio usuário audita num olhar (data que ele reconhece, gerada por ele) é mais forte que um pedido repetido, porque a mentira nele é detectável e o vazio não é. A abertura de turno amarra o gatilho a um MOMENTO mecânico (antes de qualquer ferramenta) em vez de a uma exortação lida e esquecida. O aviso da falsa confirmação existe porque nasceu de uma boa regra («reconstrua e teste antes de entregar a WO») que, sem o aviso, produz exatamente o engano que causou esta WO.

---

## D-112 — O funil da análise ganha degrau de saída: o teste é quem decide, e o achado técnico da análise abandonada vira armadilha da ordem de trabalho; material trocado entre frentes é nota transitória e não ganha pasta versionada (wo0078)

**Evidência de campo (Mapsmith, 2026-08-02).** O dono declarou uma pasta como fato canônico; o assistente foi ler o código, encontrou uma armadilha técnica legítima, e devolveu uma análise com duas opções — uma delas «não fazer, só documentar» —, que era a negação do que o dono tinha acabado de decidir. O achado era bom; o formato é que estava errado: a cláusula de abandono da wo0074 ensinou a parar de escrever quando a premissa cai, mas não disse onde pousa o que a leitura descobriu de bom.

**Decisão.** O teste (1) do funil («Antes de escrever, dois testes baratos») deixa de perguntar **o quê** está decidido e passa a perguntar **quem** decide — mesma regra, dedo no lugar certo: «Quem ainda decide? O dono já decidiu o QUÊ? Então isto é execução, não análise: o par de artefatos é decisão registrada + ordem de trabalho... Análise é para quando a pergunta ainda é dele.» O achado técnico de uma análise abandonada ganha endereço: vira armadilha da ordem de trabalho, como risco a tratar — não volta como pergunta ao dono. Achado sem endereço vira pergunta: é assim que uma análise abandonada ressuscita disfarçada. O modelo de WO passa a dar a saída do CRLF que já avisava sem resolver: âncora de uma linha não tem quebra dentro, então o fim de linha não morde — para inserir várias linhas, ancorar em uma só e dizer se o texto novo entra antes ou depois dela. E fica registrado que mensagem trocada com outro projeto ou frente irmã é nota, não artefato: vive fora do repositório enquanto serve e vai para o arquivo morto depois — não ganha pasta versionada, porque o que precisa sobreviver é o que foi extraído dela para os documentos, não o texto da mensagem.

**Convergência independente.** A frente irmã (Mapsmith) chegou à formulação «quem decide» **sem ter a wo0074** (eles estão na v1.94.0) — duas frentes descobrindo a mesma regra por caminhos diferentes é o sinal mais forte de que ela está certa.

`KIT_VERSION 1.99.0`. Check **C34** novo. Harness **18/18, 77/77 → 78/78, 0 erros**. Teto (C28) inalterado da v1.98.0: `padrao 6618/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7519/7600`.

**Por quê.** Achado sem endereço vira pergunta — e uma análise abandonada que ressuscita disfarçada de pergunta é pior que uma análise que nunca existiu, porque nega ao dono uma decisão que ele já tinha tomado. Dar ao achado o endereço que já existia (a seção «Armadilhas desta WO») custa uma frase e evita o retrabalho de decidir de novo o que já estava decidido.

---

## D-113 — Medição delegada: quem tem acesso ao disco mede, quem tem contexto decide; o pedido de medição é bloco colável, sem âncora, sem commit e sem arquivo; retorno em número cru; `additionalDirectories` também habilita leitura fora da raiz; o número medido tem de pousar em registro (wo0079)

**Evidência de campo (frente irmã, 2026-08-01/02).** A raia de planejamento tem teto de contexto e enxerga só o que chega pelo mount; a raia de execução lê o disco inteiro e não tem nenhum dos dois limites. Quando o dado que falta é **estado de arquivo** — quantas linhas, quais chaves, que dimensão, se existe —, o assistente fazia uma de três coisas erradas: pedia upload de um arquivo que não cabe, escrevia um script para o dono rodar, ou deduzia e escrevia caminho com `...` no meio. A frente irmã quantificou o custo de não ter essa saída escrita: **três instruções erradas em dois dias**, todas por afirmar estado de arquivo em vez de mandar medir. A técnica que funcionou na prática foi simplesmente instruir o executor a medir e reportar os números.

**Parentesco com a D-111.** Mesma doença, superfícies diferentes: lá (D-111), o assistente afirmou estado de um arquivo **que tinha e não leu**; aqui, de um arquivo que **não cabe no canal**. A D-111 instalou o carimbo de leitura; esta instala a delegação — quem tem acesso ao disco mede, quem tem contexto decide.

**Decisão.** Nasce a seção «Medição delegada» no CEREBRO gerado dos 18 nichos: a regra (nunca afirmar estado de arquivo não lido; caminho com `...` no meio é o sintoma clássico de estado deduzido), o formato de retorno exigido (número cru + o comando que o produziu, sem interpretação — executor que interpreta devolve opinião no lugar de dado, e opinião de quem mediu é a mais difícil de contestar depois porque parece medida), a permissão para ler fora da raiz (`permissions.additionalDirectories`, a mesma chave que já libera gravar o relatório na pasta-pai) e onde o número pousa (relatório da execução sempre; registro de decisões se mudar uma; armadilhas da WO se revelar um risco — número medido e não registrado volta a ser deduzido no turno seguinte). O kit do Code gerado ganha a contraparte: como responder a um pedido de medição (não editar, não consertar, não sugerir; devolver número cru + comando; declarar se a leitura fora da raiz foi negada). O modelo de WO ganha a seção opcional «Medição prévia» — só para o caso restrito de medir **na hora de aplicar**, sem âncora, sem commit e sem arquivo. Gatilho novo nas Instruções (`Arquivo não lido não se deduz — mande o Code medir.`) condicionado ao Modo Code. Check **C35** novo.

**Três desvios deliberados em relação à proposta da frente irmã, cada um com motivo:**
1. **O pedido de medição não virou seção de arquivo de WO, nem ordem de trabalho, nem comando novo — ficou bloco colável, sem arquivo e sem pasta.** A frente irmã sugeriu uma seção no modelo de WO; mas o caso real é a medição vir **antes** de existir WO — o chat precisa dos números *para escrever* a ordem, e medição que só cabe dentro de uma WO obriga a escrevê-la sem os números que ela precisava, que é exatamente o erro a evitar. Coerente com a D-112, que já tinha decidido que nem tudo que se troca vira artefato. A seção no modelo existe, mas só para o caso restrito de medir na hora de aplicar.
2. **O gatilho ficou condicional ao Modo Code.** Sem executor com acesso a disco não há a quem delegar — a linha apareceria em projeto sem Modo Code como conselho impossível de seguir. O check C35 falha se ela vazar para fora do modo.
3. **Entrou uma quinta parte que a frente irmã não pediu: onde o número pousa.** Aplicação da D-112 — lá, achado sem endereço virava pergunta; aqui é pior: número medido e não registrado volta a ser deduzido no turno seguinte, e a medição inteira se perde.

`KIT_VERSION 1.100.0`. Check **C35** novo. **Custo de teto: negativo no bloco do Modo Code** — as Edições 1 e 2 enxugaram duas linhas que diziam a mesma coisa com mais palavras, e pagaram o gatilho novo com sobra: `+Code` caiu de **529/550** para **522/550**, `compart` de **435/450** para **372/450**, e o combo de **7519** para **7512/7600**. Harness **18/18, 78/78 → 79/79, 0 erros**.

**Por quê.** Estado deduzido apresentado como observado é a mesma falha-raiz da D-111, só que na superfície oposta: lá era um arquivo pequeno que cabia e não foi lido; aqui é um arquivo grande que não cabe no canal de jeito nenhum, então a única saída correta é delegar a medição a quem tem o disco. Escrever isso como bloco colável (não como artefato) evita o custo de criar estrutura para um pedido que é, por natureza, transitório e específico do momento em que a WO está sendo escrita.

---

## D-114 — O pacote de update passa a levar o modelo de análise sob a natureza nova `modelo-em-espera`; o `/wrap` passa a conferir valor repetido no `STATUS.md` inteiro; a válvula de desvio nomeia o IDEAS por status+ID como desvio legítimo (wo0080)

**Base.** `IDEAS-mapsmith.md`, «Feedback para o Kit» — levas C e D (as duas últimas que restavam do lote de quatro; ver D-112/D-113 para as duas primeiras).

**(C) Valor repetido em prosa envelhece onde ninguém olha.** A frente irmã relatou que o `/wrap` atualiza a contagem de testes no cabeçalho do `STATUS.md` e esquece a mesma contagem no meio do texto — aconteceu duas vezes seguidas. O problema não é a contagem: é **qualquer valor repetido**. A correção é uma linha nas skills `/wrap` (kit gerado e deste próprio repo): ao mudar um número ou um estado, procurar o valor ANTIGO no arquivo INTEIRO, não só no cabeçalho.

**(D-i) O kit manda criar `analises/` e não manda o modelo — mas mandar o modelo fura a pasta preguiçosa.** O kit só descrevia o esqueleto no CEREBRO, deixando o assistente escrevê-lo do zero a cada projeto. Mandar o `_TEMPLATE.md` como arquivo `template` comum criaria `meta/analises/` **vazia** em todo projeto que recebesse o pacote, violando a regra de que pasta nasce no primeiro uso. **Decisão:** nasce uma terceira natureza no pacote de update — `modelo-em-espera` — ao lado de `template` (comparar e adotar é seguro) e `fusao` (propor merge, o usuário decide): guarde o arquivo; só coloque no destino se a pasta já existir ali; se não existe, o arquivo não entra, e **isso não é pendência**. `buildUpdatePack` passa a incluir `meta/analises/_TEMPLATE.md` com essa natureza, **fora do `if(codeOn)`** — a convenção de análise é universal aos 18 nichos, não do Modo Code.

**(D-ii) O IDEAS por status+ID é desvio legítimo e a válvula não sabia disso.** A frente irmã organiza o IDEAS por status e ID estável porque o roadmap e o registro de decisões dela referenciam ideias por ID — adotar a divisão por autor do template seria regressão. Não nasceu variante nova no kit (mais superfície para manter); a válvula de desvio registrado (`HYGIENE_RULES`) ganhou o exemplo nomeado, porque regra que não dá exemplo do que permite é lida como se não permitisse nada.

**Por que a natureza nova foi preferível a uma ressalva no campo de papel.** O protocolo de update já ramifica por natureza (`template` vs. `fusao`) — a exceção da pasta preguiçosa precisava ser um **ramo** do protocolo, não um texto no campo `role` que o leitor pode ignorar. Ver também **i-N58**: `modelo-em-espera` é a primeira natureza nova desde que o protocolo existe; se um segundo arquivo pedir a mesma natureza, o kit ganha seção própria para ela.

Check **C36** novo. `KIT_VERSION 1.101.0`. Harness **18/18, 79/79 → 80/80, 0 erros**. **Custo de teto: zero** — C28 imprime os mesmos números da v1.100.0 (`padrao 6618/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7512/7600`), nenhuma das edições toca as Instruções. **IDEAS atualizado:** as três observações restantes do feedback do Mapsmith (leva C e leva D) marcadas como implementadas — com isso, as quatro levas do feedback do Mapsmith estão fechadas; resta só a mensagem de volta à frente, raia do chat. Ideia nova **i-N58** registrada sobre a natureza `modelo-em-espera`.
