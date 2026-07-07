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
