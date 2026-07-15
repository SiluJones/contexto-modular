# IDEAS — Banco de ideias do Kit

> Ideias capturadas ao longo das conversas que originaram o kit. Marcação simples: ativa, refinada, descartada (com motivo), arquivada para depois.

---

## i1 — A separação contexto/histórico como princípio
**Status:** ativa, virou pilar arquitetural.
**Nota:** o que mata as conversas longas não é o limite por mensagem (continue), é o histórico cumulativo. A solução não é "comprimir" tudo, é separar o que precisa estar sempre presente do que pode ser consultado sob demanda.

---

## i2 — Múltiplos nichos profundos, não muitos rasos
**Status:** ativa, definidora do escopo.
**Nota:** 17 prontos + 1 custom. Recusa explícita a "nichos parasitas" que sobrepunham (Solo Dev Studio caiu por isso — virou Custom preset).

---

## i3 — Brainstorm como o nicho deste próprio kit
**Status:** ativa, virou meta-doc.
**Nota:** o kit aplicado a si mesmo. Pasta `meta/` é a prova de fogo do nicho Brainstorm.

---

## i4 — Cada nicho com hero visual distinto na Home
**Status:** ativa, implementada para os 18.
**Nota:** não basta trocar cor da paleta. O ambiente visual carrega o tom. Terminal para Dev (você sente o terminal). Postits para Brainstorm. Scroll medieval para RPG. Card de receita para Cozinha.

---

## i5 — Templates com nomes profissionais
**Status:** ativa, regra editorial.
**Nota:** sem "DEFINITIVO", "APRIMORADO", "FINAL". O nome do template é a função do arquivo. Padronização adulta.

---

## i6 — Custom realmente extensível
**Status:** ativa, virou construtor.
**Nota:** define identidade + arquivos + comportamentos + prompts + cor + fonte. Salva preset em localStorage. Múltiplos presets simultâneos.

---

## i7 — Prompts A-F universais, G+ específicos por nicho
**Status:** ativa, definidora da estrutura.
**Nota:** ciclo de vida do projeto (setup, sessão, encerramento, migração) é o mesmo em todo domínio. O que muda são as tarefas específicas.

---

## i8 — STATUS.md sempre rolante (não vira histórico)
**Status:** ativa, regra de uso.
**Nota:** STATUS é "agora", não "tudo que aconteceu". Logs vão pro Git. Decisões importantes vão pra DECISIONS.md.

---

## i9 — Tema claro
**Status:** arquivada para depois.
**Nota:** o kit hoje é só escuro. Tem gente que prefere claro. Adicionar isso significaria revisar todas as paletas dos nichos. Não é prioridade.

---

## i10 — Tradução para inglês
**Status:** arquivada para depois.
**Nota:** dobrar texto, manter sincronizado. Vale considerar se o uso crescer.

---

## i11 — Exportar/importar preset Custom como JSON
**Status:** arquivada como evolução natural.
**Nota:** o preset Custom hoje só vive no navegador. Permitir baixar/colar JSON resolve "quero meu preset em outro dispositivo".

---

## i12 — Galeria de presets compartilhados
**Status:** descartada na v1.
**Nota:** exigiria back-end. Tira a simplicidade do kit-página. Pode existir num produto separado, não neste.

---

## i13 — Versão impressa (PDF) dos templates
**Status:** arquivada.
**Nota:** alguns nichos (cozinha, RPG) podem se beneficiar. JSZip já cuida do empacotamento; PDF seria extra.

---

## i14 — "Solo Dev Studio" como nicho
**Status:** descartada, virou caso de Custom.
**Nota:** sobrepunha Game Design quando o foco era game, e Dev + Produto quando era app. Sem ganho real.

---

## i15 — Nicho de Educação / Aprendizado pessoal
**Status:** descartada na v1.
**Nota:** amplo demais. Quem estuda formalmente cabe em Pesquisa. Quem cria material didático cabe em Marketing/Conteúdo. Quem cuida de roteiro de aula cabe em Custom.

---

## i16 — Nicho de Saúde / Bem-estar
**Status:** descartada deliberadamente.
**Nota:** território sensível. Não quero fazer prompts que possam mascarar conselho médico.

---

## i17 — Nicho de Finanças pessoais
**Status:** descartada na v1.
**Nota:** mesmo motivo de saúde — território onde um nicho pronto pode virar conselho financeiro implícito. Cabe muito bem em Custom.

---

## i18 — Nicho jurídico (Direito)
**Status:** descartada na v1.
**Nota:** domínio profissional sério, exigiria precisão sobre citação de leis e jurisprudência por país. Custom dá conta.

---

## i19 — Memória do Claude como toggle no kit
**Status:** descartada.
**Nota:** a memória do Claude é configuração do Claude.ai, não do kit. O fluxo recomendado já cobre conversas novas via Prompt A.

---

## i20 — Drag-and-drop para reordenar arquivos do Custom
**Status:** arquivada como polish.
**Nota:** ordem dos arquivos não afeta funcionamento; é UX. Pode entrar numa v1.1 se eu tocar de novo no Custom.

---

## i21 — Auto-save da configuração além do localStorage
**Status:** ativa, já implementada como persistência por nicho.
**Nota:** cada nicho tem seu próprio state salvo. Trocar de nicho e voltar recupera.

---

## i22 — Validação do JSON de preset importado
**Status:** vinculada à i11.
**Nota:** se eu permitir importar preset, preciso validar. Não é trivial.

---

## i23 — Modo "biblioteca pessoal" de prompts custom
**Status:** descartada na v1, vira parte do Custom.
**Nota:** ao salvar preset, você salva seus prompts G+. Não preciso de uma biblioteca paralela.

---

## i24 — Atalhos de teclado
**Status:** arquivada como polish.
**Nota:** Esc fecha overlay já existe. Mais atalhos (Cmd+1/2/3/4/5 para navegar views) seriam um nice-to-have.

---

## Arquivadas com motivo (resumo)

- i9, i10, i11, i13, i20, i22, i24 — evoluções possíveis, sem prioridade
- i12, i19, i23 — descartadas por mudar a natureza do kit
- i14 — descartada por sobreposição
- i15, i16, i17, i18 — descartadas por escolha editorial (cabem em Custom)

---

## i-N1 — Git commit pronto ao final de toda entrega de código/conteúdo (IMPLEMENTAR JÁ)
**Status:** aprovada — virou princípio (CLAUDE.md do kit + behavior dos nichos onde houver Git).
**Nota:** sempre que algo for para o GitHub, o assistente entrega no final a mensagem de commit pronta na convenção correta (Conventional Commits), fácil de copiar e colar. O usuário pediu explicitamente "fácil para copiar". Aplicar ao próprio projeto também.

---

## i-N2 — Mecanismo de segurança para dados pessoais/sensíveis nos documentos (ADIAR p/ análise longa)
**Status:** arquivada para análise profunda futura — NÃO implementar agora.
**Problema:** durante uma conversa, o usuário pode mencionar algo pessoal/constrangedor de passagem (exemplo dado por ele: comentar que não tem namorada no meio de uma ideia). Isso poderia ser salvo literalmente num documento de contexto. A pergunta: o kit deveria ter um mecanismo que, ao detectar informação realmente pessoal/comprometedora que precise aparecer, pergunte permissão antes de registrar?
**Tensão identificada pelo próprio usuário (importante):** o medo é que um mecanismo desses ESTRAGUE o processo — reduzindo/limitando a captura de informação importante (ideias, funcionamento da ferramenta). Hoje ele não passa nada realmente pessoal além das ideias, e QUER que elas sejam registradas com riqueza.
**Avaliação preliminar (a aprofundar):** distinguir "informação pessoal incidental e irrelevante ao projeto" (não registrar — não tem valor de contexto mesmo) de "informação que o projeto precisa". O primeiro caso já deveria ser filtrado naturalmente por relevância, sem precisar de mecanismo especial nem de perguntar. O risco do mecanismo é gerar fricção e perda. Requer: pesquisa sobre privacy-by-design em ferramentas de nota, análise de onde traçar a linha, e o usuário formular melhor o caso. Por ora: o princípio geral de só registrar o que tem valor de contexto provavelmente já cobre 90%.

---

## i-N3 — "Backdoor" de atualização do kit + prefixo/sufixo configurável nos downloads
**Status:** ativa, a avaliar viabilidade (2 partes).
**Parte A — canal de atualização:** um mecanismo que prepare a conversa (e o Claude) para receber atualizações do kit — novos princípios, cláusulas, templates refinados — de forma que conversas que já usam o kit possam ingerir as novas regras facilmente, só subindo as novas versões de template. Ideia: um arquivo/seção "changelog de regras do kit" que o usuário sobe, e o Claude reconhece e aplica.
**Parte B — prefixo/sufixo nos downloads:** uma opção no kit que ofereça adicionar prefixo ou sufixo aos arquivos baixados (ex.: CLAUDE.md → CLAUDE__v1.8.md ou meuprojeto__CLAUDE.md), com um padrão convencional/identificador. Útil para versionar e para a ingestão de dados.
**Avaliação preliminar:** Parte B é viável e barata (é só manipulação de string no nome do arquivo no download — já temos a função downloadFile). Parte A é mais sutil: "preparar o Claude" não é algo que o kit-HTML faça (o kit gera texto; quem "prepara o Claude" é o conteúdo que entra nas Instruções/CLAUDE.md). Pode ser resolvido com uma seção no CLAUDE.md tipo "se o usuário trouxer um arquivo de atualização do kit, aplique as novas regras aos próximos outputs". A avaliar com calma.

---

## i-N4 — Mecânica "concluir entrega + perguntar permissão no mesmo turno"
**Status:** ativa, a refinar como regra de eficiência.
**Nota:** o usuário sugeriu (e o assistente concordou): quando uma nova ideia exige permissão/decisão dele para prosseguir, em vez de só perguntar e gastar um turno, o assistente avalia se dá para JÁ concluir e entregar uma parte de trabalho útil (ex.: a próxima etapa de nicho) e deixar a pergunta de permissão no final — aproveitando o turno. Eficiência de tokens. A refinar: só vale quando o trabalho a adiantar é independente da decisão pendente (não pode depender da resposta). Candidato a virar nota no CLAUDE.md do kit como prática de trabalho.

---

## i-N5 — Comandos de terminal sensíveis ao SO (Windows/Mac/Linux)
**Status:** ativa, a avaliar. Surgiu de um bug real.
**Problema:** o assistente gerou um `git commit` com continuação de linha `\` (sintaxe bash/Linux) e quebrou no CMD do Windows do usuário (`'\' is outside repository`). Isso vale para QUALQUER comando de terminal que o kit ou o Claude gere.
**Implicação no kit:** as Instruções/CLAUDE.md geradas podem conter comandos (git, instalação, scripts). Se o usuário estiver em Windows (CMD ou PowerShell), Mac ou Linux, a sintaxe muda (continuação de linha, separadores de path, aspas).
**Possível solução:** o kit poderia ter um campo no builder ("Sistema operacional / shell: Windows-CMD / Windows-PowerShell / Mac-Linux") que injeta na instrução a convenção certa de comando. Ou uma regra no CLAUDE.md gerado: "comandos de terminal no formato compatível com o SO do usuário; na dúvida, perguntar". Para o nosso projeto já foi resolvido (CMD Windows, -m repetido numa linha só). A avaliar como generalizar para os nichos que envolvem terminal (dev principalmente).

---

# Atualização de status — 2026-06-02 (sessão de consolidação)

## i-N1 (commit ao final) — ✅ IMPLEMENTADA E GENERALIZADA (v1.19.0)
Antes só no CLAUDE.md do nosso projeto (dogfooding); agora é seção do UPDATE_PROTOCOL → aparece no CLAUDE.md de TODOS os nichos, sensível ao SO.

## i-N2 (privacidade / dados pessoais) — ✅ IMPLEMENTADA (v1.20.0)
No formato relevância + marcação (NÃO censura): incidental irrelevante fica fora por irrelevância; sensível-mas-útil é sinalizado com opção de generalizar/omitir; na dúvida, pergunta. Seção do UPDATE_PROTOCOL.

## i-N3 (backdoor de atualização + afixo) — ✅ AMBAS IMPLEMENTADAS
- Parte B (afixo prefixo/sufixo): v1.9.0.
- Parte A (canal de atualização): v1.19.0 — seção no CLAUDE.md que ensina o Claude a reconhecer/aplicar updates do kit trazidos para a conversa.

## i-N4 (entregar + perguntar no mesmo turno) — ✅ JÁ É PRÁTICA
No CLAUDE.md do projeto. Usada o tempo todo nesta jornada.

## i-N5 (comandos sensíveis ao SO) — ✅ IMPLEMENTADA (v1.11.0)
Seletor de SO no builder; injeta sintaxe em Instruções e CLAUDE.md.

---

## i-N6 — Custom Inteligente (composição assistida de nichos) — APROVADA, A IMPLEMENTAR
A grande próxima feature. Ver D-014 (DECISIONS) e a seção dedicada no STATUS. Resumo: 2º nicho de construção que importa/concatena material de nichos existentes, com dedup visível, sub-painel de seleção fina e checagem de conflito (spec-kit-inspired). NÃO fusão automática.

## i-N7 — spec-kit para refinar dev e game (FUTURO, do usuário) — FECHADA (2026-07-04)
Quando tiver mais feedback de uso dos nichos dev e game, o usuário pedirá uma análise do que do GitHub spec-kit (Spec-Driven Development) pode tornar os PROCESSOS desses nichos mais completos. O usuário não tem certeza se vai conseguir usar o spec-kit em si, mas quer a análise. Anotado.

**Fechamento (2026-07-04):** analisada — o KCM já pratica SDD adaptado (CEREBRO=constitution, spec=specify+plan, apply-spec=implement); empréstimo pontual (`/check-spec`) registrado como i-N39.

## i-N8 — Exemplos prontos no Custom (instanciar nichos candidatos) — IDEIA do usuário, condicional
Após o Custom Inteligente, avaliar oferecer "exemplos" prontos para criar instantaneamente os nichos que ficaram de fora (ver NICHOS-CANDIDATOS.md) — ou instruir como criá-los. O usuário disse "se for problemático, esqueça". A reavaliar depois do Custom Inteligente.

---

# Atualização de status — 2026-06-03 (sessão sobre contexto/RAG e transferência)

## i-N9 — Protocolo de transferência entre conversas (contexto vs. RAG + handoff) — ✅ IMPLEMENTADA (v1.21.0)
**Origem:** do usuário (que sofria com a falta de clareza sobre o que o Claude consegue ou não fazer com arquivos do Projeto vs. anexados) + análise/pesquisa do assistente.
**O que é:** uma seção transversal no CLAUDE.md gerado (UPDATE_PROTOCOL → todos os nichos) que ensina o assistente a: reconhecer os dois modos do conhecimento do Projeto (in-context vs. RAG/"Modo de pesquisa"); **nunca reconstruir um arquivo a partir de fragmentos** (regra dura anti-arquivo-falso — pedir o anexo); orientar onde colocar cada arquivo (leve→Projeto por upload direto; pesado/em-edição→anexo); e fazer o **handoff ao final** — dizer arquivo-por-arquivo onde colocar para a próxima conversa e montar um PROMPT DE INÍCIO pronto. Mais uma seção de ensino ("Contexto vs. RAG") na view Tokens & Fluxos para o usuário.
**Por que importava:** o usuário pôs projetos em risco ao transferir confiando cegamente nos arquivos do Projeto em modo de busca. Ver D-015 para o fundamento técnico (docs oficiais + práticas de context engineering: janela = RAM, arquivos = disco; sumarização iterativa ancorada = papel do STATUS).
**A vigiar (do usuário):** auditar projetos transferidos no passado para detectar corrupção por edição-via-fragmentos.

## i-N10 — Afixo de versão automático / "carimbo de versão do kit" nos downloads (SEMENTE, do usuário)
**Status:** semente — surgiu de raspão ("um padrão convencional/identificador" na i-N3-B). Vale considerar: o kit poderia oferecer carimbar automaticamente a versão do kit no nome ou no rodapé dos arquivos gerados, ajudando o "canal de atualização" a saber de qual versão um arquivo veio. Não prometido.

---

## i-N9 (extensão v1.22.0) — Mount/ferramenta de código no protocolo + diretrizes refinadas — ✅ IMPLEMENTADA
Continuação da i-N9. O usuário trouxe duas conversas (`Tentativa_1.md`, `Analisada.md`) que expuseram uma divergência (uma dizia "leio do mount em RAG, não precisa anexar"; a outra dizia "anexe por causa do RAG") e atritos entre diretrizes. **Verifiquei empiricamente** que o `/mnt/project/` é um mount lido inteiro pela ferramenta de código mesmo em RAG (li o index completo, byte-idêntico). Resultado: corrigida a seção de transferência (o critério é "tenho o arquivo COMPLETO?", não "está em RAG?"); adicionado o caminho limpo (tudo no Projeto + ferramenta de código → mount, sem anexar) + ritual de checar o mount; e refinadas as diretrizes universais (BEHAVIORS_BASE 9→11): P2 esclarecido, P3 "sem rodeios", P8 anti-inferir, **P10 Cadência**, **P11 Não regride/mistura versões**. Ver D-016.

## i-N11 — "Ativar a ferramenta de código" como passo padrão do handoff (do usuário) — ✅ IMPLEMENTADA (v1.22.0)
O usuário quis que, para os projetos dele (dev/game), toda transferência já comece com a ferramenta de código ligada e usando o mount — sem ter que pedir a cada vez para verificar se dá para atualizar scripts/metadados, e sem se limitar a "dev lê pelo mount; chat comum anexa". Atendido: o prompt de início gerado lembra de ligar a ferramenta de código; o CLAUDE.md manda o assistente checar o mount no início e pedir para ligar se faltar. (O toggle em si é do usuário — não dá para um prompt ligar sozinho; o kit resolve com lembrete + ritual de verificação.)

## i-N9/i-N11 (refino v1.23.0) — diretrizes ajustadas + mount achatado — ✅ IMPLEMENTADA
Antes de transferir, o usuário pediu refino para evitar choque entre diretrizes. **P8** ganhou exceção para inferência PEDIDA (a regra é contra inventar silenciosamente, não contra inferir quando solicitado). **P11** virou "usa a versão mais nova que tem; só pára e pede quando não tem a que a tarefa exige" (em vez de pausar sempre que algo estiver desatualizado — evitava o "monstro" de halts no meio do trabalho). **Handoff** passou a **mapear a estrutura do mount no início** (resolve "não sei o que passar" em projetos multi-pasta). **Canal de atualização** preserva a estrutura do projeto ao integrar um update + feedback opcional. **Achado:** o mount `/mnt/project/` apareceu **achatado** (sem subpastas). Ver D-017.

## i-N12 — Teste limpo do mount (GitHub-only) — SEMENTE
Confirmar se o GitHub **preserva subpastas** no mount: numa conversa nova, remover os uploads diretos, deixar **só** o repositório do GitHub, ligar a ferramenta de código e rodar `ls -R /mnt/project/`. Se preservar, projetos multi-pasta (Next/Svelte) dispensam renomear arquivos de mesmo nome. Até confirmar, prefixo de pasta é a aposta segura. (Surgiu da dúvida real do usuário sobre `pages` de mesmo nome em pastas diferentes.)

---

## Nichos como ideias FUTURAS (adiados de propósito pelo usuário)
Ver NICHOS-CANDIDATOS.md (recuperado dos PLANNING). Não fazer agora. Prioridade do assistente se um dia expandir: Educação & Cursos (nº1); Desenvolvimento Pessoal/Journaling (cuidado: sensível); depois Jurídico/Podcast/Tradução. Tradução & Localização foi sugestão do assistente (não estava no PLANNING).


---

# Atualização de status — 2026-06-07 (sessão Custom unificado + consertos)

## i-N6 (Custom Inteligente) — ✅ COMPLETA e EVOLUÍDA
A composição assistida (concatenação + dedup visível + checagem de conflito) foi entregue nas v1.24.0/v1.25.0; o **sub-painel de granularidade** ("escolher peças" por nicho) entrou na **v1.26.0**. E o conjunto foi **unificado num só card `custom`** (composição no topo + builder abaixo) — ver **D-019** (supersede a parte de D-014 sobre 2 cards). O Custom Inteligente deixou de ser um card separado e virou a seção de composição do próprio Custom.

## P12 (higiene ao encolher docs) — ✅ adotada para o projeto E propagada à ferramenta (v1.27.0)
Novo princípio pedido pelo usuário (ver DEC **D-020**): ao reescrever/encolher um arquivo-chave, dizer o que saiu/para onde/por quê; não encolher sem justificar item a item; conferir que nada único se perdeu. **Ativa para nós** (CLAUDE.md/CONTEXT) **e propagada à ferramenta na v1.27.0** — é o 12º item de `BEHAVIORS_BASE` (`shrink_hygiene`), no CLAUDE.md gerado de todos os nichos. Ver CHANGELOG v1.27.0.

---

## i-N13 — Refator modular do kit (dados de nicho em JSON separados + núcleo central) — A AVALIAR (do usuário)
**Status:** ativa, decisão em aberto. Ver ROADMAP (Fase 4) e CONTEXT ("questão de arquitetura em aberto").
**A questão (do usuário):** o HTML único "pesado" dificulta editar/auditar nicho a nicho. O método "profissional" talvez fosse dados de cada nicho em **JSON separado** (estrutura padronizada) + um **arquivo central** para o que muda em todos; assim, ajustar/refinar um nicho mexeria só no arquivo dele, as gerações ficariam mais **auditáveis**, e criar nichos novos seria mais fácil.
**Avaliação preliminar (trade-offs honestos):**
- *A favor da modularização:* edição/diff por nicho; menos risco de mexer num nicho e quebrar outro; criar nicho = adicionar um arquivo; testes/validação por arquivo; o JS principal encolhe.
- *Contra (o que se perde):* hoje é **1 arquivo, sem build, roda via `file://` e em GitHub Pages estático** (D-001). JSON separados exigem ou (a) `fetch()` em runtime — que **não funciona via `file://`** (CORS) e quebra o "abra o arquivo e use", ou (b) um **passo de build** que embute os JSON no HTML final — reintroduz toolchain que o projeto evitou de propósito. Há um meio-termo: manter os nichos como módulos no **repositório** (DX melhor) e gerar um `index.html` "bundled" por um script simples de concatenação (sem framework) — o deploy continua 1 arquivo, o desenvolvimento fica modular.
- *Recomendação atual:* **não migrar por impulso**; se a manutenção por nicho começar a doer de verdade, o caminho de menor arrependimento é o **bundle por concatenação** (modular no repo, 1 arquivo no deploy), preservando D-001 no produto final. Decidir com calma.

## i-N14 — Nicho/ferramenta de GUIAS, WIKIS e TUTORIAIS — A AVALIAR (do usuário)
**Status:** ativa. Conecta a "Educação & Cursos" (NICHOS-CANDIDATOS, nº1).
**A ideia:** algo já preparado para **acelerar e profissionalizar** uma busca/organização padronizada e útil para **aprender ou dominar** ferramentas e técnicas — ex.: platinar/100%-ar um jogo; aprender Aseprite, Unity, Godot, Unreal, Excel, Word, Google Sheets, linguagens de programação; com **referências, dicas, e até cursos/orientações de YouTube e outros**. O usuário acha que um monte de `.md` solto seria "ridículo" para isso, mas que vale ter estrutura pronta.
**Avaliação preliminar:**
- Pode ser **um nicho no kit** (ex.: "Aprendizado/Guia": arquivos como OBJETIVO-DE-DOMINIO, MAPA-DE-HABILIDADES, FONTES-E-CURSOS, PROGRESSO/CHECKLIST, GLOSSARY; behaviors: cita fontes verificadas, separa fato de opinião, monta trilha do básico→avançado, marca pré-requisitos, sugere prática deliberada; prompts: "monte a trilha", "explique X com pré-requisitos", "encontre fontes/cursos confiáveis", "faça um plano de 100%/platina", "me teste").
- OU **ferramenta separada** se o fluxo for muito diferente (um "companheiro de estudo" que faz pesquisa estruturada e mantém progresso) — o usuário sugeriu que "pelo menos para esses, poderia gerar em uma ferramenta separada".
- *Risco:* recomendações de curso/links e "como dominar" exigem **rigor de fonte** (não inventar links/cursos; verificar). Casa com a i-N17 (rigor em pesquisa).
- *Recomendação:* começar como **nicho** (barato, dentro do kit) e, se crescer, considerar a ferramenta dedicada. Decidir depois das pendências de v1.26.x.

## i-N15 — Ferramenta de auto-aplicação de patches ("auto" on/off em todos os nichos) — A AVALIAR (do usuário)
**Status:** ativa, a avaliar viabilidade/segurança. Ver ROADMAP (Fase 5).
**A ideia (do usuário):** uma ferramenta externa (ele já iniciou um projeto) que, **dada uma estrutura**, atualiza/modifica scripts e arquivos de metadados **sozinha**. O Claude, em vez de pedir para o usuário aplicar mudanças à mão, **gera arquivos de atualização** (seguindo a estrutura) + o **caminho** onde a ferramenta os encontra; a ferramenta então aplica. Mais automatizado e talvez mais seguro contra erros (se bem feito). Integrado ao kit como um **switch on/off "auto"** que apareceria em **todos os nichos**. Referências citadas a ele por outros projetos: **AutoCoder** e o formato **apply_patch da OpenAI**. Seria como um agente de IA, "sem consumo de tokens diretamente na máquina".
**Avaliação preliminar (honesta):**
- *Sobre tokens:* uma ferramenta local que **aplica** patches **não reduz** os tokens que o Claude gasta para **gerar** o conteúdo. **MAS** há um ganho real se o Claude passar a **emitir diffs/patches** (só o que muda) em vez de **arquivos inteiros** — aí caem os **output tokens** (hoje a regra é "entregue o arquivo INTEIRO", que é cara). Esse é o ângulo de economia de verdade — virou a i-N16.
- *Sobre segurança/erros:* patches no estilo `apply_patch` precisam de **âncoras boas** (contexto ao redor) senão falham quando o arquivo muda; um runner local bem feito valida antes de aplicar. É exatamente o que Claude Code / apply_patch fazem.
- *Encaixe no kit:* o kit gera **texto**; "aplicar" é da ferramenta externa do usuário. O kit poderia (a) gerar os patches no formato que a ferramenta espera e (b) documentar o caminho. O switch "auto" no kit faria o CLAUDE.md/Instruções instruírem o Claude a **entregar patches** (em vez de arquivos inteiros) quando o projeto usa a ferramenta de auto-aplicação.
- *Recomendação:* promissor. Tratar em duas frentes: a **ferramenta externa** (projeto do usuário) e, no kit, a **i-N16** (modo "entrega por diff"). Avaliar formato (apply_patch vs unified diff) e como o switch entra sem complicar os nichos.

## i-N16 — Modo "entrega por diff/patch" no kit (economia de output tokens) — A AVALIAR
**Status:** ativa (derivada da i-N15). 
**A ideia:** um modo (talvez o switch "auto" da i-N15) em que o Claude, em projetos que usam a ferramenta de auto-aplicação, **entrega patches** (só as mudanças) em vez de arquivos inteiros — reduzindo output tokens nas atualizações (relevante: a sessão anterior consumiu 100% da janela e exigiu 5h de espera). 
**Tensão a resolver:** isso **conflita** com a regra dura atual "entregue o arquivo INTEIRO, nunca trechos para colar" (que existe porque colar trechos à mão é frágil). A reconciliação: a entrega por diff só vale **quando há uma ferramenta que aplica o patch automaticamente** (não é o usuário colando à mão) — aí o patch é seguro. Sem a ferramenta, continua arquivo inteiro. Precisa de formato robusto + validação. A decidir junto com i-N15.

## i-N17 — Princípio explícito de rigor em pesquisa + refutação fundamentada — ✅ DECIDIDA (v1.27.0)
**Status:** **concluída** — virou o princípio **P13** (`research_refute`), 13º item de `BEHAVIORS_BASE`. Ver **DEC D-021** e CHANGELOG v1.27.0.
**A ideia (registro):** o usuário perguntou se já existe diretriz para o Claude **pesquisar/aprender** sobre a ideia ou solicitação não só para **refinar de forma profissional**, mas também para **refutar e criticar** com base no sentido e na **experiência de outros**.
**Situação na época:** **parcialmente** coberto — P1 (analisa antes de aceitar), P4 (admite incerteza; pesquisa o que muda), P7 (estuda o domínio antes de estruturar). Faltava tornar **explícito** o ângulo "buscar a experiência de outros para refutar/criticar, não só para refinar".
**Opções consideradas:** (a) reforçar a redação de P7/P1; (b) criar um princípio próprio. **Escolhida a (b)** — o ângulo (ir buscar fora o contraponto, com lastro na prática alheia) cruza P1/P5/P7 sem ser nenhum, e a reversão para (a) seria de uma linha. Racional e contra-argumento completos em **D-021**. Texto final propagado à ferramenta na mesma passada de código que levou a P12.

---

> **Lote novo (2026-06-11):** 5 ideias trazidas pelo usuário a partir dos primeiros testes reais (nichos game design narrativo, música, pixel art, dev, design visual). As três primeiras são **diretrizes concretas a embutir na ferramenta** (a redigir e validar numa próxima passada de `BEHAVIORS_BASE`/`UPDATE_PROTOCOL`); as duas últimas são **maiores, a avaliar**. Pesquisa de fundo (convenção AGENTS.md / estudos ETH Zurich e GitHub; literatura de feedback/RFC) anotada em cada uma.

## i-N18 — Diretriz: ler o MANIFEST para o nome certo no upload achatado — ✅ EMBUTIDA (v1.28.0)
**A ideia:** quando os arquivos vão para o Projeto via **upload achatado** (mount sem subpastas), nomes iguais em pastas diferentes **colidem e são renomeados** (ex.: `meta/LOG-TEMPLATE.md` vs um log do dia). O CLAUDE.md gerado deveria instruir o assistente a **conferir um manifesto/índice** para mapear o nome renomeado → arquivo lógico, em vez de assumir pelo nome.
**Lastro (P13):** é convenção estabelecida. O próprio exemplo canônico de AGENTS.md instrui: *"confira o campo `name` dentro de cada `package.json` para confirmar o nome certo — não use o de cima"*. Ou seja, "não confie no nome aparente; consulte a fonte de verdade" já é padrão para agentes.
**A refinar:** (1) o kit já gera um `MAPA.md`/índice? Se sim, a diretriz aponta para ele; se não, talvez gerar um pequeno manifesto (lista "nome lógico → papel") seja parte da entrega. (2) Texto curto, na seção de transferência/`UPDATE_PROTOCOL`, não um princípio universal novo (é operacional, não comportamental). (3) Cuidar para não inflar — a pesquisa alerta que seções de "estrutura" que envelhecem viram **passivo** que confunde o agente; o manifesto tem que ser barato de manter ou gerado automaticamente.
**✅ Atualização (2026-06-11, alinhado com o usuário):** o manifesto **já existe e não é do kit** — é o **`_MANIFEST.md` que o FlatDrop gera** ao achatar o repo para upload (cabeçalho `flatdrop-manifest v1`; tabela *caminho original → nome na pasta*; em colisão o nome plano ganha sufixo **`__pasta`**). A parte confusa do registro acima ("o kit gerar manifesto próprio") está **descartada** — nada a criar. A diretriz a redigir na ferramenta encolhe para: *"se houver um manifesto de achatamento (ex.: `_MANIFEST.md`), consulte-o para mapear nomes; arquivo com sufixo `__pasta` é renomeação de colisão; refira-se e **entregue** sempre pelo nome/caminho real, sem deixar duas entregas de mesmo nome se sobreporem."* **Já adotada para o nosso projeto** (CLAUDE.md, seção de transferência, em vigor).
**✅ Atualização 2 (mesmo dia — aviso do usuário):** o FlatDrop **não é padrão** — nem todo projeto vai usá-lo, e o assistente **não pode travar** pela ausência do manifesto. A diretriz vira **condicional com detecção automática**: *"ao mapear o mount, verifique se existe `_MANIFEST.md`; se existir, use-o como fonte de verdade de nomes/estrutura (sufixo `__pasta` = colisão; refira-se e entregue pelo nome real; aproveite para entender a estrutura do projeto); se não existir, siga normalmente — sem pedir, sem estranhar."* Anotado também: o FlatDrop **filtra** o upload (tipos que o Projeto não aceita, como imagens; ignorados fixos planejados tipo `node_modules/`, `venv/`, `.git/`; `.gitignore` opcional) — **ausência de arquivo pode ser filtragem deliberada, não erro**; o manifesto lista exatamente o que subiu; se algo necessário faltar, vale P8 (pedir, não assumir). Regra do nosso CLAUDE.md já revisada nesses termos. **Validada — ver D-022.**

## i-N19 — Diretriz: verificar o estado atual antes de repetir um STATUS possivelmente velho — ✅ EMBUTIDA (v1.28.0)
**A ideia:** o assistente às vezes **repete o que o STATUS diz** ("item X pendente") sem **verificar o estado real** — mesmo quando o arquivo já está no mount, corrigido. Resultado: repete em solicitações seguidas que "ainda falta", em vez de checar, constatar que já está lá e **atualizar o STATUS**. A diretriz: ao agir sobre algo que o STATUS marca como pendente, **conferir primeiro** (o arquivo/estado existe?), e só então (a) sinalizar de fato faltante, ou (b) constatar feito e atualizar o STATUS — nunca só repetir o texto velho.
**Lastro (P13) — forte:** isto é um modo de falha **documentado**. Estudos citados na literatura de AGENTS.md (ETH Zurich; análise de 2.500+ repositórios) mostram que **referências estruturais desatualizadas ativamente enganam** o agente e que arquivos de contexto "envelhecem e viram passivo". A correção recomendada é a mesma: o estado real do repositório vence o documento; tratar o doc como pista, não como verdade.
**A refinar:** (1) é refinamento de **P8** ("verifica antes de pedir/afirmar; não inventa") aplicado a STATUS, OU um princípio próprio (P14?) "STATUS é hipótese a verificar, não fato"? Provável: estende P8 + um item no `UPDATE_PROTOCOL` ("antes de reportar pendência, confirme contra o mount"). (2) Cruza com **P12** (que já manda atualizar o STATUS ao mexer) — aqui o gatilho é o inverso: **verificar** antes de repetir. (3) Evitar redundância: uma frase clara, não três.
**✅ VALIDADA (2026-06-11):** o usuário confirmou — segue como **refino de P8** + nota no `UPDATE_PROTOCOL` (não vira P14). Pronta para a passada de código. Ver D-022.

## i-N20 — Formato do bloco de commit: três comandos em linhas separadas + `git add .` — ✅ EMBUTIDA (v1.28.0)
**A ideia:** entregar o commit como **3 linhas** (`git add` / `git commit …` / `git push`) em vez de uma só encadeada com `&&`. E a dúvida: usar sempre `git add .`?
**Análise (P5, trade-offs):**
- **Linhas separadas vs `&&`:** separadas são mais legíveis e deixam o usuário rodar passo a passo / inspecionar antes do push; o `&&` numa linha "para se algo falhar" mas é menos transparente. Para o fluxo dele (CMD do Windows, colar e revisar), **3 linhas é melhor** — mantida a regra de mensagem sem acentos.
- **`git add .` vs caminhos explícitos:** `.` é cômodo, mas adiciona **tudo** que estiver sujo no diretório (incluindo arquivos não relacionados, temporários, segredos esquecidos). A convenção de agentes mais repetida em 2.500+ repos é justamente **"nunca commitar segredos"**. Recomendação: para um repo pequeno e controlado como este (1 `index.html` + `meta/`), `git add .` é **aceitável**, mas o mais seguro é **listar os arquivos** (como já vínhamos fazendo) ou usar `git add -A` consciente. Talvez o kit ofereça as duas formas e explique o trade-off em uma linha.
**A definir:** atualizar o template de commit (`commitTitulo`/`commitIntro`/`commitNota` no `UPDATE_PROTOCOL`) para 3 linhas + nota sobre `git add .`.
**✅ DEFINIDA (2026-06-11):** padrão = **listar os arquivos** no `git add`; o assistente **pode** usar `git add .` a critério quando o conjunto é pequeno e a árvore é conhecida/limpa. 3 linhas separadas (`add` / `commit` / `push`), mensagem sem acentos. Entra no template de commit na passada de código. Ver D-022.

## i-N21 — Comando/template de FEEDBACK (capturar fricção de uso e rotear para os docs) — ✅ EMBUTIDA (v1.28.0, escopo ampliado)
**A ideia:** um "comando" (e talvez template) de **feedback**: o usuário despeja qualquer observação dos testes (mesmo solta/bagunçada) e o assistente a **estrutura** e roteia. Problema embutido: na hora de "transferir" o feedback, o assistente **não lembra quais arquivos do projeto são os "diferentes"** (custom) — então ou pede todos, ou sugere quais mandar, mas para sugerir certo precisa de referência.
**Lastro (P13):** feedback capturado **cedo e roteado para ação** acelera iteração e reduz retrabalho; mas a literatura de RFC/FMEA é clara sobre o **modo de falha**: template que vira **cerimônia pesada** é tratado como checkbox e seus achados "raramente são aproveitados" — falta de dono mata o processo. Logo, o comando tem que ser **leve** e **terminar em destino** (virar entrada de IDEAS/DECISIONS/CHANGELOG ou um item de ROADMAP), não um `FEEDBACK.md` que ninguém relê.
**Refino proposto (a discutir):**
- O "comando" é um **gatilho de conversa** ("feedback: …") que o assistente transforma em: resumo em 1 linha → categoria (bug / fricção / ideia / elogio) → **destino** (qual doc) → ação sugerida. Sem arquivo novo permanente; alimenta os docs que já existem.
- O problema dos "arquivos diferentes" casa com a **i-N18 (manifesto)**: se o projeto tem um manifesto de quais `.md`/peças são custom, o assistente sabe o que pedir/comparar. Alternativa que o usuário levantou: na transferência, pegar o **template do kit** e mandar o assistente **comparar** o projeto contra ele para descobrir o que é custom — viável, mas mais caro por turno.
- **Contraponto honesto:** talvez não precise de "comando" nenhum — feedback já pode ir para IDEAS via P9 ("captura ideias"). O valor extra seria só a **rotina de roteamento + a ligação com o manifesto**. Avaliar se compensa formalizar.
**✅ Atualização (2026-06-11, alinhado com o usuário):** respondendo a dúvida ("o gatilho gera um arquivo que eu entrego, ou escreve nos docs do projeto?"): **são duas pontas, em lugares diferentes — e nenhuma exige arquivo novo para o usuário gerenciar.** **(a) No piloto:** o CLAUDE.md gerado ganha um gatilho leve — qualquer observação sobre o KIT (template que não coube, campo que faltou, estrutura que atrapalhou) o assistente registra na hora numa seção **«Feedback para o Kit»** dentro do próprio IDEAS.md do piloto (vira `FEEDBACK-KIT.md` só se crescer muito). Como o assistente do piloto registra **os próprios desvios** que fez (válvula da i-N22), ele SABE o que é custom — a ideia de comparar contra o template do kit (cara) fica **descartada**. **(b) Transferência:** o usuário copia essa seção/arquivo para a conversa do kit — só isso. **(c) No kit:** o assistente daqui roteia cada item para IDEAS/DECISIONS/ROADMAP e vira trabalho. O feedback real do piloto de pixel art (ver i-N23) provou o fluxo na prática antes mesmo do gatilho existir.
**✅ Atualização 2 (2026-06-11 — escopo ampliado; dúvidas do usuário respondidas):** feedback **não é só menção em conversa** — inclui **desvios estruturais**, que são o feedback mais valioso: **(a)** diretriz nova adicionada ao CLAUDE.md do piloto; **(b)** `.md` novo criado; **(c)** estrutura de outro `.md` alterada; **(d)** template dispensado. A válvula (i-N22) já manda registrar todo desvio no DECISIONS do piloto **e** marcá-lo em «Feedback para o Kit» — então **sim, o desenho já cobre**: mudou a estrutura = registra como feedback, automaticamente, sem o usuário precisar lembrar de "avisar". **Autonomia do piloto (decidido):** **NÃO há sinal verde prévio do kit** para criar/testar um `.md` novo — pré-aprovação viraria gargalo e mataria justamente o sinal que a fase de validação existe para gerar. O piloto cria, testa, aprimora e refina **lá**; quando o usuário quiser (maduro ou não), o arquivo/desvio vem ao kit — inclusive **subindo o `.md` nos arquivos do projeto do kit** para eu analisar. **Triagem no kit (3 destinos):** ao receber um desvio, classificar em **(1) absorver no template base** do nicho (a falta era geral — ex.: paleta por bioma), **(2) virar módulo opcional do grupo** (útil para vários, não para todos), ou **(3) específico do projeto** (fica registrado como caso, **não generaliza** — ex.: dispensar um `.md` que só aquele projeto não usa quase nunca vira remoção do template base; só se o padrão se repetir no lote). Ver D-022.

## i-N22 — Não engessar na estrutura genérica: pular templates e propor outros .md por projeto/grupo — ✅ EMBUTIDA (v1.28.0)
**A ideia:** o CLAUDE.md gerado poderia autorizar o assistente a **não se limitar** ao conjunto fixo de templates: dispensar um template que o projeto não usa, e **sugerir outros `.md`** que ajudem a mapear coisas úteis daquele projeto (talvez para todo um grupo de nichos, talvez só para um).
**Lastro (P13) — com alerta importante:** a direção bate com a convenção atual ("**progressive disclosure**": dê só o necessário, aponte para o resto; **remova a seção de estrutura se o layout já é óbvio**). MAS há um risco medido: **arquivos de contexto gerados por LLM reduziram a taxa de sucesso em 5 de 8 cenários** e **aumentaram custo ~23%**, principalmente por **duplicar** o que já existe. Ou seja, "a IA cria `.md` à vontade" pode **piorar** o projeto. A diretriz precisa ser **disciplinada**: criar/dispensar arquivo só quando há ganho **não óbvio e específico** — nunca boilerplate.
**Refino proposto (a discutir):**
- Em vez de "crie o que quiser", a diretriz é: *"a estrutura do nicho é um **ponto de partida**, não uma camisa de força. Se um template não serve ao projeto, diga e dispense-o. Se faltar mapear algo recorrente e específico (que os docs atuais não cobrem), **proponha** um arquivo novo — justificando o ganho — em vez de forçar tudo no genérico."* Com a trava: não duplicar o que já está coberto.
- Talvez nasça daí uma **biblioteca de "módulos de doc" opcionais** por grupo (ex.: um `WORLDBUILDING.md` para narrativa/rpg/game; um `ASSET-LIST.md` para pixel/design/música) — em vez de geração livre, um cardápio curado que o assistente sugere quando cabe. Mais seguro que improviso.
- **Tensão com a identidade do kit:** o kit vende "estrutura pronta e consistente". Flexibilizar demais corrói isso. O equilíbrio é "padrão forte + desvio justificado", não "vale tudo".
**✅ Atualização (2026-06-11, ângulo do usuário incorporado):** o ponto que faltava: os pilotos são a **fase de validação** do kit — o refino até aqui foi **teórico** (pesquisa), genérico e amplo, não validado em uso. Convenção imposta com força demais NESSA fase gera **resistência e perda de sinal**: o projeto se espreme no template em vez de mostrar o que falta. A elaboração cuidadosa é a **válvula de desvio registrado** — texto proposto para o CLAUDE.md gerado (a validar pelo usuário): *"Os templates e a estrutura deste kit são **ponto de partida, não contrato**. Se a realidade do projeto não couber neles, **adapte**: dispense template que não serve, acrescente seção ou arquivo que falte — e **registre o desvio** (o que mudou e por quê) no DECISIONS, marcando-o também em «Feedback para o Kit» (IDEAS). Desviar **sem registrar** é que é o erro; desviar registrando é como o kit aprende. Não duplique o que a estrutura já cobre."* Assim nenhum caminho se fecha, e todo desvio vira feedback estruturado (alimenta a i-N21). **Prova real:** o piloto de pixel art desviou exatamente assim — criou "paleta global + extensão por bioma" que o template não previa, registrou e reportou (i-N23). É o comportamento desejado. O "cardápio curado de módulos" continua válido, mas como evolução de médio prazo alimentada pelos desvios registrados — não como tranca inicial.
**✅ VALIDADA (2026-06-11):** o usuário aprovou o texto da válvula como está. Pronta para a passada de código. Ver D-022.

> **Acréscimos do mesmo dia (2026-06-11, após alinhamento):** i-N23 e i-N24, vindos do primeiro feedback real (piloto de pixel art) e do arranjo de 4 projetos para o mesmo jogo.

## i-N25 — Música: criação completa (letra, estilo, estrutura, prompts p/ IAs como Suno) — A AVALIAR (do usuário)
**A ideia (2026-06-12):** levar o padrão "o kit desenvolve" (D-023) também à música — funcionalidade e estrutura para CRIAR músicas completas: letra, estilo, referências, e prompts prontos para IAs de geração (Suno etc.). **Cadência:** o próprio usuário pediu para analisar/refinar mais antes; entra depois dos pilotos atuais. Provável forma: behavior "compõe sob direção" + template de LETRA/FAIXA + prompt de geração — espelho do que a v1.29.0 fez no narrative.

## i-N23 — Melhorias do nicho Pixel Art vindas do piloto — REGISTRADAS, aguardando fechar o lote (do usuário)
**Origem:** primeiro feedback real de uso — projeto com múltiplos biomas e 2+ personagens (a personagem da luva assimétrica; o Guardião Forjado). Quatro itens, todos válidos e específicos:
1. **ESTILO.md — paleta global vs. paleta por bioma.** O template assume paleta única; projetos multi-ambiente precisam de **núcleo global** (no piloto: 39 cores) + **extensão por bioma** até um teto (no piloto: 64). Incorporação provável: subseção "Estrutura da paleta" (núcleo / extensões por contexto / teto), mantendo "paleta é lei" por camada.
2. **SPRITES.md — campo "prioridade visual interna".** Além da silhueta (leitura à distância), **onde o olho pousa primeiro depois da forma** (a luva assimétrica; as brasas nas juntas). Guia a distribuição de contraste sem prosa. Incorporação: 1 linha no bloco de personagem, logo abaixo de "Silhueta".
3. **ANIMACAO.md — seção própria de "efeitos especiais"** (hit-stop, partículas, glow): têm timing próprio que não cabe na tabela por personagem. Incorporação: seção "Efeitos (timing próprio)" com mini-tabela.
4. **SPRITES.md — estado "aguardando design"** para sprites cuja ação ainda não foi confirmada pelo projeto de game design. É sincronismo ENTRE projetos → caso-semente da **i-N24**.
**Cadência (decisão do usuário):** "é só o começo" — **não mexer na ferramenta ainda**. Acumular o lote dos 4 pilotos, pesquisar/refinar, e aplicar de uma vez (itens 1–3 são texto de template, baratos; o 4 depende da i-N24). Toda mudança de template = re-validação 17/17.
**⏸ PAUSA (2026-06-12):** o usuário decidiu **não fechar o lote por ora** — itens permanecem registrados aqui; aplicar quando ele sinalizar (o item 4 já entrou via ROTEIRO.md na v1.29.0).

## i-N24 — Protocolo multi-projeto: HUB de grupo — ✅ EMBUTIDA (v1.30.0)
> **🔁 Feedback do piloto → kit (2026-06-13, v1.32.0 — D-026):** o projeto em grupo (jogo CINZEIRO) montou sozinho um `CANON.md` mais maduro que o template do kit. Absorvido: **identificadores de área** (`[GAME]`/`[ART]`…), seção **Cânone Central** (fatos travados que toda frente respeita), **precedência do cânone** (mudar exige aprovação do usuário) e **tarefas com origem** `[ORIGEM-NNN]`/`[REFUTACAO-ID]`. Também: construtor do HUB por **botões** + campos no estilo do kit; **diretriz** no CLAUDE.md para o assistente personalizar as próprias Instruções; `## Código / build` no LOG do game (erro-260613). É o ciclo «Feedback para o Kit» funcionando ponta a ponta — um piloto evoluiu a estrutura, e a melhoria voltou para todos.
**O cenário real:** o usuário roda **4 projetos do kit para o MESMO jogo** — game design, pixel art, enredo (nicho narrativa) e música — e usa o nicho narrativa também para novels japonesas (mesmo nicho, dois usos bem diferentes: roteiro de jogo e prosa serial). Surge uma necessidade que nenhum nicho isolado cobre: **mudança numa frente precisa chegar às outras** (design cria ação nova → arte precisa de sprite → "aguardando design"; enredo muda cena → música re-ambienta).
**✅ Atualização (2026-06-12, do usuário — o HUB de 3 seções):** desenho proposto para o `.md` central do grupo: **(1)** diretrizes universais do grupo (ex.: *nunca alterar diretamente arquivos/meta de outra área — sugestão, crítica ou refinamento vai para a seção 2*); **(2)** uma subseção POR ÁREA, onde as OUTRAS áreas escrevem pedidos/sugestões para a dona estudar e decidir; **(3)** status ultra-curto por área (mais enxuto que o STATUS.md — saber o que cada frente faz/entregou sem abrir os md dela). UI possível: switch "grupo de projetos relacionados" OU um custom que monta SÓ os arquivos de grupo + gatilho no CLAUDE.md dos projetos para analisarem o central. **A REFINAR e apresentar antes de codar** (pedido explícito). Primeira ponte já embutida: o estado **AGUARDANDO DESIGN** no ROTEIRO.md (v1.29.0).
**A avaliar (do mais barato ao mais caro):** (a) **convenção de estado** nos catálogos ("aguardando <frente>") + um bloco "Dependências entre frentes" no STATUS de cada projeto; (b) um **bloco de handoff** padronizado ("o que mudou → o que as outras frentes precisam saber"), que o usuário transporta como já transporta contexto entre conversas; (c) algo maior (projeto-hub que coordena) — provavelmente exagero agora. **Cadência:** esperar o uso real mostrar a dor concreta antes de formalizar (mesma regra da i-N23). Os 4 pilotos do jogo são o laboratório perfeito para isso.
**✅ REFINADA E APRESENTADA (2026-06-12, parte 2):** template **HUB.md entregue** ao usuário, personalizado para as 4 frentes — 3 seções polidas: **(1)** diretrizes D1–D5 (ninguém mexe na casa do outro; mudança que afeta outro vira item na caixa dele; cada verdade tem UM dono — mapa de cânone; status ≤3 linhas; tudo assinado/datado, caixa rolante com «Decididos»); **(2)** por frente: Visão + **Caixa de entrada com triagem** (aceito/recusado/em análise + motivo) + Decididos; **(3)** status relâmpago. + Apêndice com o gatilho pronto para colar no CLAUDE.md dos 4 projetos (ler HUB no ritual; processar caixa ao encerrar; entregar HUB completo; D2 liga no AGUARDANDO DESIGN do ROTEIRO/SPRITES). **Mecanismo recomendado:** (a) **gatilho-only AGORA** (zero código; os 4 pilotos validam o desenho em uso real) → (b) **switch "grupo de projetos"** na ferramenta DEPOIS, com o template embutido; (c) custom-de-grupo **descartado** (redundante com o canal de atualização + apêndice). **Aguarda do usuário:** aprovar/ajustar o template e escolher quando embutir o switch (b).
**✅ Construtor embutido (2026-06-13, v1.31.0 — D-025):** ganhou **página própria "06 · HUB"** — construtor de frentes (nicho + nome + responsável por; add/remover/reordenar; preview; download). `HUB.md` sai populado. **Responsabilidade** ficou no bloco de cada frente (não em 4ª seção — evita duplicar Visão/D3; reversível). **HUB.md saiu do download por-nicho** (vinha repetido). "Identificador de tokens" por frente: não existe no kit nem é necessário, nada feito. Ver D-025.
**✅ EMBUTIDA (2026-06-12, v1.30.0 — D-024):** o usuário aprovou a estrutura e mandou prosseguir. Virou **switch "Projeto em grupo?"** (toggle universal no topbar): ligado, adiciona a seção HUB ao CLAUDE.md gerado + linha no ritual + `HUB.md` genérico (`UNIVERSAL_HUB_TPL`) aos templates/zip; desligado, nada (round-trip validado). Custom-de-grupo descartado. Validado 17/17.


---

## i-N13 (EXPANDIDO) — Refator modular + base para i18n — 🟡 DIREÇÃO ACEITA (sem código até decisão)
**Estado (2026-06-14):** o usuário acha **boa ideia**, com a ressalva de não querer quebrar a ferramenta no processo (confia que dá para fazer com cuidado). Motivação nova e decisiva: o refator (dados de nicho em JSON separados + núcleo) **abre i18n** — trocar UI **e** dados de template para outros idiomas de forma prática e auditável. Hoje tudo é string embutida no HTML único; auditar/traduzir é inviável. **Próximo passo quando decidir:** desenhar a separação dados↔núcleo SEM perder o "1 arquivo via file:// sem build" (ou aceitar conscientemente trocar isso por um loader). Risco central: a migração quebrar a geração — mitigação: o harness 17/17 vira a rede de segurança (migrar nicho a nicho, validando a cada passo). Ver i-N26 (idioma misto), que depende deste.

## i-N26 — i18n com idioma MISTO (UI/conversa no idioma do usuário; metas/código em inglês) — 💡 NOVA (do usuário, 2026-06-14)
**A ideia:** além de traduzir a ferramenta, permitir um modo **misto**: o Claude, no projeto gerado, **escreve código, arquivos meta e comentários em inglês profissional** (a convenção dev) enquanto **conversa e interage sempre em pt-BR** (ou no idioma do usuário); e a UI do kit fica no idioma do usuário. O usuário não pretende mudar o próprio estilo, mas vê a possibilidade como atraente para o futuro — especialmente se a ferramenta for usada por terceiros ou como **portfólio**. **Forma provável:** um toggle/seleção de "idioma da UI", "idioma da conversa" e "idioma dos artefatos (templates/meta/código)" — gerando o CLAUDE.md com a diretriz de idioma correspondente. **Depende de i-N13** (a base modular/i18n). Sem código até lá.

## Respostas do usuário (2026-06-14) às perguntas em aberto — registro
- **Consolidar o CINZEIRO no HUB do kit:** EM ANDAMENTO pelo usuário; fazer depois (não agora).
- **Reescrever README/PLANNING:** quando der — segue no backlog (pitch mudou com "kit desenvolve" + HUB/Cânone).
- **Estender "desenvolve" a HQ/RPG/animação + i-N25 (música) + lote i-N23 (pixel):** ESPERAR os pilotos pedirem; o usuário vai usar mais e dar feedback antes de qualquer mexida.
- **Cosmético do `narrative` (sério vs criativo):** resolvido SEM alterar agrupamento — só o **rótulo de grupo** foi reescrito (v1.33.0): "Criativo & Mídia — exploração, jogos, narrativa" → "Histórias, Jogos & Mídia — mundos, arte e som".

## i-N27 — HUB: manter o núcleo (registro de contratos), cortar o aparato pesado — 💡 DECIDIDA (2026-06-21, com pesquisa)
**Veredito:** o **conceito** do HUB é válido (registrar os contratos entre KCM·ASU·FlatDrop para que mudar um surface o impacto nos outros), mas o **aparato** (caixa por frente, status relâmpago, merge canônico, "entregar HUB inteiro a cada sessão") é **over-engineered para 3 ferramentas solo** — você é o ponto único de serialização, sem concorrência real; as caixas ficam vazias e o doc drifta mesmo assim.
**Lastro (P13):** docs de coordenação à mão apodrecem — ~60% ficam obsoletos em 6 meses; **cópia/"salvar como" é a causa nº 1 de drift**; quando a confiança no doc cai, o sistema em volta "colapsa" (colapso de **confiança**, não de dados). Prova viva: o HUB diz ASU **v0.4.0**, a ferramenta está em **v0.6.0**.
**O que fazer:**
- **Modelo single-file SEM cópias está certo** (a correção do Claude do ASU): **um só `HUB.md` na pasta-mãe**, lido de lá, não duplicado por repo. (Mata meu modelo antigo de cópias+sync.)
- Manter só o **Cânone** (as ~3-4 interfaces, cada uma com **dono + versão atual**); cortar caixas/status/merge/"entregar inteiro".
- **A versão tem que ser derivada/gerada, não digitada** — senão drifta (já drifou).
- **Dono único do HUB:** KCM gera/possui a versão canônica; ASU e FlatDrop **propõem** (não regeneram o arquivo). Resolve a ambiguidade de autoria do cérebro do ASU (linha 224 "gerado pelo KCM" × linha 229 "ASU entrega o HUB completo") — o único risco real de choque de dados. "Colapso de projetos" é exagero: é doc de coordenação, não estado em runtime; diff+backup+§8+você pegam um contrato velho.
- **Kit:** oferecer **duas variantes** da seção de HUB — "grupo de conteúdo" (modelo de caixas, cabe a frentes criativas) e "toolchain/infra" (só o Cânone). (= Refinar 3 do «Feedback para o Kit» do ASU; convergência das duas análises.)

## i-N28 — FEEDBACK.md: NÃO criar; resolver inchaço por ciclo de vida + rotação — 💡 DECIDIDA (2026-06-21)
**Você reconsiderou certo, e a refutação já existia (DEC-017 do ASU):** um arquivo dedicado de feedback é uma **4ª fonte de verdade** (viola "uma fonte por dado"; mais um arquivo pra manter). Pesquisa: cada arquivo a mais é mais um silo.
**O inchaço é real**, mas o remédio é **ciclo de vida + rotação**, não arquivo novo:
1. **Estado por entrada** nas seções «Feedback para o Kit/ASU»: status (Aberta / Enviada / Incorporada / Descartada) + data (o IDEAS do ASU já faz Ativas→Concluídas→Descartadas).
2. **Arquivar, não apagar:** item resolvido sai da seção ativa → vai para `logs/AAAA-MM-DD.md` (é a P12 aplicada ao feedback).
3. **Trigger = reconciliação na atualização do kit:** quando uma versão nova do kit chega, a IA compara os itens **abertos** com o CHANGELOG do kit; os atendidos viram "Incorporada" e arquivam — mas a IA **propõe** e o usuário **confirma** (humano no loop; pesquisa: auto-aplicar sem revisão é arriscado).
**Reconciliar a tensão que criei:** a seção «Feedback para o ASU» (já adicionada no spec) = lugar de **estacionar**; emparelhar com a linha pendente no `INSTRUCTION_GUIDE` do ASU (a IA consumidora **também sinaliza na conversa**). Seção (estaciona) + sinal (conversa) + rotação (higiene) = ciclo completo, sem inchar e sem 4ª fonte.

## i-N29 — Função "modo Code": gera kit de arranque (desktop E CLI) — 💡 A IMPLEMENTAR (spec a escrever)
**O switch gera:** `CLAUDE.md` raiz starter + **`.claude/settings.json`** (permissões, como as referências satelite/mother — já entreguei um avulso pro contexto-modular) + `.claude/commands/` + protocolo de raias + macetes Windows/PowerShell. **Funciona em desktop e CLI** (mesmo motor; só muda como se abre).
**Regra nova a embutir (vinda das referências):** **padrão Sonnet 4.6 esforço BAIXO**; o chat **avisa de forma clara** quando um spec precisa de esforço ALTO (nota "⚠️ suba o esforço para Alto nesta tarefa" no topo do spec). Esforço **proporcional à ambiguidade do spec** (baixo p/ mecânico, alto p/ exploratório).
**O CEREBRO passa a ensinar** ao Claude-chat os macetes de Code (settings.json, esforço, abrir na pasta do repo, etc.).

## i-N30 — Correções de processo chat ↔ Code — 💡 ADOTADAS (2026-06-21)
- **Chat entrega TODO o meta decidido + o commit ANTES de liberar pro Code** (some o desencontro; foi erro meu soltar o spec antes da curadoria).
- **Chat gera o commit ao entregar material** (uma linha, sem acento).
- **STATUS/DECISIONS — não é problema os dois atualizarem** SE: um dono por arquivo (Code faz append em STATUS/DECISIONS; chat cura CHANGELOG/IDEAS/ROADMAP — append não conflita) + o chat **sempre lê a última versão** que o usuário sobe (P11). Reforço: o Code escreve uma linha **"arquivos tocados nesta sessão"** no fim do STATUS.
- **Balanço de ferramenta:** chat p/ divergente (arquitetura, análise, curadoria que reescreve); Code p/ convergente (implementar, testar, append). Modelo de topo p/ sessões difíceis; mais leve p/ rotina.

## i-N31 — ASU quick wins (specs pendentes) e retração do syntax-check — 💡 REGISTRADO (2026-06-21)
- **(b)** lembrete na UI quando o switch ASU é ligado (subir `INSTRUCTION_GUIDE.md`/`PROMPT_IA.md` ao Projeto consumidor).
- **(c)** ancorar a diretriz ASU e o contrato do HUB no **`format_version`** (não na versão da ferramenta) — pra um bump que não muda o formato não exigir reescrever a diretriz/HUB.
- **Retração:** eu havia sugerido checagem de sintaxe pós-apply no ASU; **o ASU já recusou com fundamento** (IDEAS 2026-06-19) — fora de escopo, é trabalho do compilador; o medo real é **prosa** (não código), mitigado por diff+§8+backup/rollback. Endosso a recusa + a sequência dele (docs 0.6.0 → teste de campo → conveniências).

## i-N32 — Fluxo de desenvolvimento atual (registro) — 💡 (2026-06-21)
Desenvolvimento migrou pro **Claude Code** (desktop até segunda; CLI no trabalho). Conta do trabalho conta KCM; casa conta mother/alexk. Sem `ANTHROPIC_API_KEY` (senão cobra API). Abrir o repo (não a pasta-mãe). O rename CLAUDE→CEREBRO foi feito **pelo próprio Code rodando um spec do chat** (dogfooding: 17/17 + 32/32) — o protocolo de raias funciona.

## i-N33 — Layout responsivo da pagina do KCM — 💡 A ESCOPAR (2026-07-02)
Reestruturar a pagina de geracao para aproveitar melhor o espaco conforme a tela e fixar a navegacao. Pedido do usuario + lastro de UX:
- **Nav/abas fixas (sticky):** manter a navegacao ao alcance em pagina longa (NN/G: sticky aumenta descoberta e reduz friccao); no mobile, manter o cabecalho fixo abaixo de ~30% da altura.
- **Aproveitar espaco por tela:** migrar de breakpoints fixos para **container queries** (componente responde ao proprio contêiner) + unidades **dvh** (corrigem o vh no mobile). Painéis de geracao se reorganizam conforme a janela.
- **Abas responsivas:** tabs em tela grande -> accordion (ou tab-list rolavel com botao) em tela pequena; labels curtos, uma so capitalizacao.
Proximo passo: o chat entrega um **wireframe para o usuario aprovar** ANTES de virar spec de frontend (toca `index.template.html` + CSS, com harness). Nao adivinhar layout.

## i-N35 — Switch skills-pack do nicho narrativa (fase B) — ✅ IMPLEMENTADA (v1.49.0)
Fase B do refino do nicho narrativa (spec0021 cobriu a fase A). Base: meta/ANALISE-REFINO-NICHO-NARRATIVO.md. spec0022: toggle niche-scoped `skillsMode` emite 4 Agent Skills (escrita-serial, checagem-continuidade, voz-calibragem, textura-mundo) como apêndice do CEREBRO, sem impacto no teto das Instruções. Harness G6, 17/17, 33/33, 0 erros.

## i-N36 — Universais da fase C (2026-07-03) — ✅ FECHADA (spec0042, 2026-07-14)
Fase C do refino do nicho narrativa: itens universais (não específicos do nicho) — sync instrução-curta/CEREBRO, aviso de persistência do mount, fases para pedidos compostos, modo extração de acervo. Base: meta/ANALISE-REFINO-NICHO-NARRATIVO.md.

**2026-07-04 — Q2 (modo skills) aplicada (spec0024, D-053):** o controle de skills de escrita saiu do topbar e foi para o builder «A obra», default LIGADO. A reforma dos 3 toggles universais (grupo/ASU/Code) + feedback ambiental (faixas/selos de cor, símbolo do Code, identidade do ASU) segue como item de pesquisa futura, junto desta i-N36.

**2026-07-06 — fase C FECHADA (spec0028 + spec0029, D-056/D-057):** spec0028 tirou os 3 toggles universais do topbar para o painel global recolhível «Modo de trabalho» (`STATE.workmode`); spec0029 acrescentou o feedback ambiental — selos de estado multicanal (cor+glifo+rótulo), empilháveis, perto da saída, ordem estável grupo→Code→ASU. Com isso, **a fase C (reforma dos 3 modos + feedback ambiental) está feita**. Resta da i-N36 só a fase "topbar inteiro" (adiada, fora de escopo destas duas specs) + o encaixe do atualizador i-N40 (que acopla nos selos como fonte de verdade, mas entra como ação futura, sem virar 4º selo).

**2026-07-14 — i-N36 FECHADA (spec0042, D-071):** o último resíduo — o seletor de SO ainda no painel esquerdo — migrou para a seção «Ambiente» dentro do modal ⚙ (antes da aba Nicho), fechando de vez a i-N36. JS inalterado (mesmo `#g-os`, mesmo wiring/restore); DOM antes do `<script>` final (D-059), travado pelo novo check G17.

## i-N37 — Modo Code: apêndice de arranque vira download (espelho da D-052) — spec0026 — ✅ IMPLEMENTADA (v1.53.0)
D-052 (spec0023) aplicou às skills de escrita o princípio "CEREBRO só com regra fixa, sem artefato autodestrutivo/temporário": saíram do CEREBRO e viraram `skills.zip` separado. O apêndice de arranque do Modo Code (starter `.claude/commands/*.md` + instrução «pode apagar este apêndice») tinha o MESMO anti-padrão e recebeu o mesmo tratamento — vira download separado (`claude-code-kit.zip`) em vez de bloco-para-remover dentro do CEREBRO; comandos migrados para `.claude/skills/<nome>/SKILL.md` (formato atual). Base: `meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md` (Q1, Nível 2).

**Q1/Nível 2 da análise:** aplicada nesta spec (skills de escrita, D-052) e em spec0026 (Modo Code, D-055). **Princípio geral firmado como diretriz do KCM:** o CEREBRO.md contém só regras/diretrizes/técnicas FIXAS — nunca artefatos temporários nem instruções autodestrutivas; material de instalação/arranque sai como arquivo/download separado.

## i-N38 — Hook de pre-commit que roda o harness e bloqueia commit sem verde — ✅ FECHADA (spec0043, D-073)
Candidato à próxima fase de Code: um hook de pre-commit (via `.claude/settings.json` ou git hook nativo) que roda `node validate.js` automaticamente antes de cada commit e bloqueia se não vier 17/17 (ou o total vigente), 0 erros. Reduz o risco de commit com harness quebrado.
**Fechamento (2026-07-14, spec0043):** `.githooks/pre-commit` bloqueia commit que toque o produto sem **build + harness verdes**, e garante que o `index.html` commitado é o do build atual. Bypass consciente por `--no-verify`. Liga por `git config core.hooksPath .githooks` (não viaja no clone; documentado no BUILD.md). Teste manual do bloqueio/passagem relatado na sessão.

## i-N39 — /check-spec: gate read-only de conferência da spec antes de aplicar — ✅ FECHADA (spec0043, D-073)
Empréstimo pontual do `/analyze` do GitHub spec-kit (fechamento da i-N7): um comando `/check-spec` que, antes de `/apply-spec`, faz uma conferência READ-ONLY da spec contra o repo (âncoras existem? arquivos citados existem? não conflita com outra spec aberta?) e reporta divergências sem tocar em nada. Opcional — o chat já pré-valida a spec antes de entregá-la, então o ganho é uma segunda rede, não a primeira.
**Fechamento (2026-07-14, spec0043):** `.claude/commands/check-spec.md` — comando read-only que confere âncoras (0 = morta, 2+ = ambígua), pré-requisitos (versão/commit/árvore limpa/colisão) e o estado verde do repo antes de aplicar. Ciclo da spec agora: `/check-spec → aplicar → build → validate → commit`.

## i-N34 — Afixo prefixo E sufixo simultaneos (refino da i-N3 Parte B) — ✅ IMPLEMENTADA (v1.47.0)
A i-N3 Parte B (afixo no download) ja esta implementada (v1.9.0), mas trata prefixo/sufixo como escolha. Refino pedido: **duas caixas de texto separadas** (uma para prefixo, uma para sufixo), **cada uma com seu switch liga/desliga independente**, para o usuario preencher e aplicar os DOIS ao mesmo tempo (ex.: `projeto__CLAUDE__v1.8.md`). UI intuitiva: rotulo claro por caixa, preview do nome resultante. E manipulacao de string no downloadFile (barato); a parte nova e a UI dos dois toggles + preview. **Precisao:** prefixo e sufixo sao INDEPENDENTES — cada um com seu switch e sua caixa; podem estar ligados os dois, um so, ou nenhum, e o resultado se combina numa unica passada (ex.: so prefixo `projeto__CLAUDE.md`; so sufixo `CLAUDE__v1.8.md`; ambos `projeto__CLAUDE__v1.8.md`; nenhum `CLAUDE.md`). Preview do nome final atualiza ao vivo conforme os toggles/caixas.

## i-N40 — Modo Atualização: empacotar o nicho ativo (achatado + afixado + prompt) para subir num gesto a um projeto KCM existente — ✅ CONCLUÍDA (todas as fases) — Fase A ✅ (spec0035), Fase B ✅ (spec0036), Fase C ✅ (spec0038, 2026-07-07)
Refino/descendente da **i-N3** (backdoor de atualização + afixo, já implementada). Base: `meta/ANALISE-MODO-ATUALIZACAO.md` + nota `260704-1959.txt`. Um gesto que empacota, **achatado e desambiguado**, tudo do nicho ativo (meta + CEREBRO + instrução + skills se ligado + kit-Code se ligado) num **zip achatado** + `_UPDATE-MANIFEST.md` + **prompt de atualização gerado por nicho**, para o usuário subir de uma vez ao mount de um projeto que já usa o KCM. **Decisões fixadas:** afixo `__template-update`; CEREBRO+instrução entram como build ativa do momento, classificados `fusao` (merge proposto, nunca substituição cega); **zip apenas**; a **UI do atualizador fica ADIADA** até a reforma dos 3 modos (i-N36) — entra como **ação** perto da saída, não como 4º modo/selo. Dor real: assimetria — `downloadZIP` já achata+afixa os meta, mas `downloadSkillsZIP`/`downloadCodeKitZIP` saem em subpasta sem `applyAffix`. Acopla com os selos (spec0029): mesma fonte de verdade que o manifesto do update lê.

**2026-07-07 — Fase A concluída (spec0035, D-063):** motor `buildUpdatePack(niche)` + `buildUpdateManifest` no template, check G9 no harness (36/36). Só o motor — sem UI, sem zip, sem prompt. **Fase B** (`buildUpdatePrompt` + botão ↻ + `<dialog>` de duas saídas) e **Fase C** (gatilho `UPDATE_PROTOCOL` no CEREBRO) pendentes — ver specs 0036/0037.

**2026-07-07 — Fase B concluída (spec0036, D-064):** `buildUpdatePrompt(niche)` (disparo para IA-alvo: comparar/propor/fundir, nunca diffs — regra dura §3 travada por G10) + `downloadUpdatePack()` (zip achatado: pacote + `_UPDATE-MANIFEST.md` + `_UPDATE-PROMPT.md`) + UI (botão ↻ no cluster de ação → `<dialog>` de duas saídas com linha de status dos modos ligados). Harness: check G10, 37/37. Falta só a **Fase C** (bloco `UPDATE_PROTOCOL` no CEREBRO) — ver spec0037. Fecha o i-N40.

## i-N41 — Campos de nicho na saída — ✅ IMPLEMENTADA (v1.59.0, spec0033)
Hoje `genreSel`/`engineSel`/`phase` são preenchidos mas não entram no CEREBRO/Instruções. Fazer um bloco "Contexto do nicho" na saída consumir esses campos (gênero(s), engine, fase), para o que o usuário marca de fato moldar o contexto gerado.
**Resolução:** `buildInstr` ganhou o bloco "Contexto do projeto" (após o Estágio), emitindo os campos de `niche.topbar` não-consumidos e com valor; conserto de brinde do desencontro `phase`/`fase` no Estágio. Ver D-061.

## i-N42 — Prompts C/D (setup do projeto receptor): reconhecer como os templates chegaram + rótulo de quem é o prompt — A REFINAR (spec seguinte)
**REESCRITA (2026-07-13).** A leitura anterior estava errada — dizia que C/D "mandam gerar do zero, ignorando o download estruturado/pacote de atualização", tratando-os como se fossem sobre os downloads do KCM. **Não são.** C e D são os prompts do **projeto receptor**: **C = projeto novo**; **D = projeto que já existe e vai adotar o kit**. O refino real é:
- (a) C/D devem **reconhecer como os templates chegaram** (pacote achatado × **estruturado** do botão ↓ — neste caso não se "gera do zero" o que já veio pronto);
- (b) C/D são **mode-blind**: no **Code** o receptor tem repo → árvore + commit; no **ASU**, edição por `.yaml`;
- (c) o **rótulo** de cada prompt deve dizer **para quem ele é** — se uma conversa do próprio KCM se confundiu, o usuário se confunde igual.
- **D ≠ pacote de atualização:** o ↻ já tem prompt próprio + protocolo no CEREBRO (i-N40). São coisas distintas.

## i-N43 — Auto-refino registrado: «problema diagnosticado → grava a armadilha» — A ESPECIFICAR
Projetos diagnosticam a causa de um problema e **não registram** o aprendizado: fica na memória da conversa, some ao truncar/transferir, e o erro se repete. Falta um **gatilho universal**: «problema diagnosticado → grava a armadilha no DECISIONS/CEREBRO do projeto e reporta ao KCM». (Origem: nota `260709-0808`. **Verificar antes de especificar** se já existe algo truncado/corrompido no CEREBRO nessa direção.)

## i-N44 — Handoff enxuto + log do Code — A ESPECIFICAR
Handoff **não se versiona** (é atalho efêmero; o repo é a verdade), nome padronizado `_HANDOFF-AAAA-MM-DD.md`, arquivado fora do repo. O brief deve carregar **só o fio vivo** (o que não está em arquivo nenhum) e **nunca** repetir STATUS/DECISIONS. No modo **Code** ele é quase dispensável (tudo já foi para append); no **vanilla** é o único portador. Avaliar também o Code emitir um **log de sessão** (hoje o usuário copia a última mensagem à mão).

## i-N45 — Prompt de retomada fixo (separar do brief datado) — A ESPECIFICAR
Separar o **prompt de retomada permanente** (não datado, vive no CEREBRO: "leia os meta/ nesta ordem, confirme em uma frase, execute o próximo passo") do **brief datado e efêmero**. Refino natural do prompt F pós-spec0040.

## i-N46 — Contador de caracteres da instrução na UI — ✅ FECHADA (spec0045, D-076)
O usuário marca chips e a instrução cresce — mas ele não vê isso: o estouro do teto só aparecia no harness (e só depois de a spec0042 medir o pior caso; ver D-070). Ideia: exibir na UI o tamanho da instrução gerada (e talvez a distância até o teto), atualizando conforme o usuário marca opções. Torna o orçamento visível para quem realmente monta o contexto, em vez de deixá-lo escondido no `validate.js`.

## i-N47 — Reconstruir o CHANGELOG (v1.54–v1.66 nunca entraram) — ✅ FECHADA (spec0045, D-077)
O topo do `meta/CHANGELOG.md` pula de v1.53 direto para v1.67: as versões v1.54 a v1.66 (todas as specs desse intervalo) nunca foram registradas. Reconstruir o histórico a partir das specs/DECISIONS correspondentes, para o CHANGELOG voltar a ser uma linha do tempo contínua.

## i-N48 — Refino de instrução pela própria conversa — ✅ FECHADA (spec0043, D-072) — nasceu e morreu nesta spec
O CEREBRO passa a ensinar a conversa a cuidar do próprio orçamento de instrução: seção «Refino das Instruções do Projeto» com as seis regras (cortar o que não se aplica, especializar o que se aplica, «mover é barato, apagar é caro», não inchar, uma regra por linha, teto de ~6.900 caracteres) + registro obrigatório em DECISIONS/IDEAS. Trava por G19. Fecha o buraco em que a conversa inflava ou podava demais as Instruções.

## i-N49 — Paleta unificada dos nichos (é a spec0044) — FECHADA (spec0044, D-074/D-075)
O KCM tem **duas cores por nicho** que não conversam: o `cardColor` (tela de escolha, em `src/niches/<id>.js`) e o bloco `html[data-niche="<id>"]{ --amber: … }` (página do nicho, em `src/index.template.html`). O `career` **não tem entrada `[data-niche]`** — por isso a página dele herda o âmbar padrão (o do dev): é esta a causa do «a cor do carreira é igual à do dev» (a spec0042 mexeu só no card). A spec0044 vai unificar as duas fontes por nicho, ancorando na preferência já dada pelo usuário, e resolver os **choques** que a unificação cria (dois nichos caindo na mesma cor).

## 💡 Ativas — do usuário

### 2026-07-01 — Teto 6500 x texto de diretriz (game) — A DECIDIR
A linha "Nome de download" (D-040) não coube no nicho game por ~28 chars; o Code cortou o parentético. Decidir: reescrever mais curto (preservando sentido) ou elevar o teto do harness. Nenhuma diretriz deve depender de um parentético para caber. (Nota do Code 07-01.)

### 2026-06-24/28 — Termos e nomes de arquivo devem ser INVARIANTES ao idioma — AUDITADO (D-043)
O usuário esclareceu (260624-ideias): i18n troca **UI e conteúdo-data**, mas **TERMOS e NOMES de arquivo** (CEREBRO, DECISIONS, IDEAS, o par DEC/FIX) permanecem os mesmos em qualquer idioma — é convenção de engenharia. Problema real observado em campo: projetos com `FIX` vs `BUG` divergentes, e `DEC` "não encontrado" onde o arquivo de decisões tem outro nome. Pedido: auditoria completa nos 17 nichos — listar (nicho × arquivo meta/ × termo) e padronizar junto. Também: CEREBRO/instrução de alguns nichos apontam para meta/ que o nicho não tem (D-036 mira isso; confirmar cobertura em campo, incl. `/wrap` apontando para DECISOES.md num game cujo DEC vive no MECANICAS).

### 2026-06-28 — Verificação ativa de config (nível/esforço/pensamento) — REFORÇAR (liga D-034/D-038)
O usuário quer que, ao fim de cada sessão, junto do resumo/dúvidas, o chat **verifique a config atual** e diga com clareza: se a próxima etapa precisa de mais (nomeando modelo + esforço exato — médio/alto/máximo — e pensamento), **pare e avise**; se está sobrando, **conclua a sessão** e sinalize que pode baixar (sem parar no meio de uma etapa boa). Reclamação-raiz: chats davam respostas vazias ou vagas ("aumente para o nível recomendado" sem dizer o esforço). Não deixar o sistema "duro"; é aviso honesto, não trava.

### 2026-06-28 — Geração faltante em dev (gitignore/README/commit) — A PESQUISAR/REFINAR
Reafirmado: `.gitignore` personalizado e README quase nunca saem (mesmo em dev); commit às vezes não sai e o `git commit` deve vir **separado** no copia-e-cola. O usuário aceita esperar (não quer o chat perguntando "quer que eu gere agora?"); quer **previsão e cuidado** na geração. Estender ao possível a outros nichos. (D-040 mira o commit; confirmar.)

## 📮 Feedback para o Kit

### 2026-07-03 — Feedback consolidado dos projetos Novel 1/2/3, fase A aplicada — INCORPORADO (D-050, v1.48.0)
Feedback consolidado dos projetos Novel 1/2/3 extraído e aplicado na fase A do nicho narrativa (ver ANALISE-REFINO-NICHO-NARRATIVO.md); pendentes: fase B (switch skills-pack de escrita) e fase C (universais: sync instrução-curta/CEREBRO, aviso de persistência do mount, fases para pedidos compostos, modo extração de acervo).

### 2026-06-21 — Starter do Modo Code deve usar nomes-do-nicho (do ASU) — A CORRIGIR
O ASU reportou como BUG do template: o apêndice de arranque do Modo Code (e o `wrap.md` gerado) referenciam nomes FIXOS (`DECISOES.md`, `REVISOES.md` — do nicho Design), então num projeto Dev o starter aponta para arquivos que não existem. A migração inglês (D-035/036) limpou o repo do KCM, mas a GERAÇÃO do starter ainda precisa emitir os nomes de doc DO NICHO selecionado (Dev → DECISIONS/CHANGELOG/ROADMAP; Design → DECISOES/REVISOES/MARCA). Conecta à auditoria de nomes (item "termos invariantes").

### 2026-06-30 — Sinalizar modos ativos ao exportar o template (do ASU) — A DESENVOLVER
O usuário gerou o CEREBRO com só o modo ASU ligado e saiu curto/incompleto; teve de regerar com os modos certos. A página de geração deveria sinalizar quais modos (ASU/grupo/Code) estão ativos no momento de exportar — ou avisar "exportando com o modo X só" — porque o template muda bastante e é fácil exportar a combinação errada sem perceber. É UX da página, não diretriz.

### 2026-06-21 — Bootstrap do rename nas Instruções do painel (do ASU) — A REFINAR
Ao renomear CLAUDE→CEREBRO, as Instruções do Projeto (painel, lidas em todo turno) continuam citando `CLAUDE.md`, e o assistente não edita o painel — o usuário tem de lembrar de trocar à mão. O passo de atualização do KCM deveria incluir um lembrete explícito "troque CLAUDE.md por CEREBRO.md também nas Instruções do Projeto".

### 2026-06-19/21 — Duas variantes da seção HUB: conteúdo vs. toolchain/infra (do ASU) — A AVALIAR
A seção "Projeto em grupo (HUB)" que o kit injeta assume grupo de CONTEÚDO (lore/visual/som). Num grupo que é TOOLCHAIN (ferramentas sincronizadas por contratos, HUB manual — caso ASU/KCM/FlatDrop), o texto precisa ser reescrito à mão. Sugestão: oferecer duas variantes — "grupo de conteúdo" (atual) e "toolchain/infra" (contratos + caixas de entrada + dono por interface) — ou generalizar os exemplos. Liga a i-N27 (HUB enxuto).

### 2026-06-21 — Apêndice de starter descartável incha o CEREBRO (do ASU) — A AVALIAR
O template diz "depois de criar, pode apagar este apêndice", mas até lá o CEREBRO fica inchado com blocos de starter. Como o chat já entrega os arquivos de arranque prontos, o apêndice talvez devesse ser entregue à PARTE (doc de setup), não embutido no CEREBRO.

### 2026-07-04 — Q3 (refino das skills) aplicada — encerra o ciclo do refino narrativo — INCORPORADO (D-054, v1.52.0)
Aplicadas as 10 técnicas de campo (Novel 2/3) aos `body` das 4 skills de escrita (spec0025). Com isso encerra o ciclo do refino narrativo: fases A/B (D-050/D-051) + Q1/Q2/Q3 (D-052/D-053/D-054). Restam: spec0026 (Modo Code espelha o princípio «CEREBRO só com regra fixa» de D-052, i-N37) e a fase futura (reforma dos 3 toggles universais + feedback ambiental, junto de i-N36).