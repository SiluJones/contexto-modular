# Análise & Plano de Refino — Nicho Narrativa (feedback dos 3 projetos de novel)

> Documento de curadoria (raia Chat). Consolida a extração do feedback de campo dos projetos
> Novel 1 ("I Will Die Before the Game's Story Start"), Novel 2 ("My Little Lady" / Espaço Branco)
> e Novel 3 ("Rascunho de um Despertar"), a pesquisa externa, e o plano de specs para o KCM.
> Data: 2026-07-03. Base do kit analisada: v1.46.0 (mount) + v1.47.0 (fecho spec0020).

---

## 1. O que os três projetos revelaram (extração consolidada)

### 1.1 Convergência mais forte: o modelo de colaboração do kit está errado para este autor

Os TRÊS projetos, de forma independente, derrubaram o comportamento `never_writes`
("A IA não escreve a história — explora, o autor decide") e adotaram o mesmo modelo:
**a IA escreve a prosa final; o autor dirige e reage** (DEC-007 do Novel 3, copiado
quase literalmente pelos Novel 1 e 2). O Novel 3 documentou inclusive o risco real dessa
contradição: as Instruções curtas do Projeto continuaram com o texto genérico
("A IA não escreve...") contradizendo abertamente a DEC-007 — uma sessão nova que lesse
só as instruções curtas reverteria comportamento já corrigido.

Hoje o `narrative.js` carrega os DOIS behaviors em conflito (`never_writes` E `writes_prose`).
O kit precisa transformar isso numa **escolha de fundação** (builder), não numa contradição embutida.

### 1.2 Os modos de falha nomeados (erros reais, documentados como FIX)

| Modo de falha | Onde ocorreu | Causa raiz documentada |
|---|---|---|
| **Capability bleeding** — personagem usa skill/item antes de adquiri-lo | Novel 3, FIX-001 (Cap. 7) | Cena planejada com o arco completo e escrita EM DIREÇÃO ao estado final, não A PARTIR do estado atual |
| **Vazamento de metadado estrutural** — prosa cita "Cap. 2", rótulo de bastidores | Novel 3, FIX-002 (Cap. 11) | Referência a evento passado pensada pelo ÍNDICE do ENREDO, não pela MEMÓRIA diegética do personagem |
| **Vazamento de vocabulário de mecânica** — personagem diz "o sistema concede" | Novel 1 (regra 2026-06-17) | Mesmo erro do metadado, na direção da MECÂNICA: vocabulário de bastidores escapando para a diegese |
| **Drift de vocabulário cognitivo** — "ela inventariou/calculou/arquivou"; personagem "não come, só analisa" | Novel 3 (Caps. 4-8) | Personagens analíticos narram o PROCESSO mental em vez de mostrar a AÇÃO física |
| **Mesma metáfora em POVs paralelos** | Novel 2, FIX-004 | POVs diferentes exigem foco diferente; reusar a imagem denuncia o autor único |
| **Beat silencioso lido como fio abandonado** | Novel 3, FIX-007 (Cap. 15) | Eco de risco anterior sem linha de fechamento antes do corte de cena |
| **Dessincronização de docs "status atual"** — rótulo travado 3-4 capítulos atrás | Novel 3, FIX-005 + FIX-008 (RECORRENTE) | Checklist (rápida) atualizada; resumo em prosa e blocos por-personagem (trabalhosos) esquecidos. O doc PARECE atualizado |
| **Fatos fixos de POV anterior violados** | Novel 2 (Cap. 3, reescrita completa) | Processo pulado: não releu o capítulo do mesmo evento antes de escrever |
| **Fonte de verdade duplicada divergindo** | Novel 3 (percentual de poder) | Dado que muda rápido vivia em 2 arquivos atualizados em momentos diferentes |

### 1.3 As soluções que os projetos JÁ inventaram e provaram

1. **Fluxo de capítulo em duas fases** (Novel 2, i-001): (1) esqueleto + perguntas de
   continuidade + variações com trade-offs → aprovação → (2) só então prosa. Evita retrabalho.
2. **Sanduíche de verificação** (Novel 2, Passo 3.5 — a maior lição de processo):
   pré-escrita (ler cânone, listar fatos fixos) **não basta sozinha** — precisa de
   **auditoria PÓS-escrita** contra uma **lista de invariantes que só cresce**
   (todo erro pego pelo autor vira linha permanente; o mesmo erro nunca se corrige duas vezes).
3. **Lista negativa** (Novel 3, checagem-continuidade): antes de escrever, listar o que o
   personagem **AINDA NÃO TEM** — tão importante quanto a positiva. Princípio unificador:
   *escrever A PARTIR do estado atual, nunca EM DIREÇÃO ao estado planejado*.
4. **Voz negativa por personagem** (Novel 2): o que este personagem NUNCA diria/notaria.
5. **Fonte rápida vs. fonte lenta** (Novel 3): dado que muda a cada capítulo (percentuais)
   vive num bloco "Estado atual" ÚNICO no topo de CONTINUIDADE.md; PERSONAGENS.md aponta
   para lá e mantém só o que muda devagar (Rank, Classe).
6. **Gatilho triplo de capítulo concluído** (Novel 3): checklist + resumo narrativo em prosa
   + TODO bloco "status atual" — com **sub-checklist literal de busca ativa** ("procurar toda
   ocorrência de 'Status atual' e conferir o RÓTULO"), porque a regra descritiva sozinha
   falhou (FIX-008 recorreu mesmo com a regra escrita).
7. **Skills por projeto** (Novel 2: 1 skill; Novel 3: 3 skills): protocolos operacionais
   carregados no gatilho certo — serial-fiction (protocolo de escrita), checagem-continuidade
   (pré+pós), voz-calibragem (revisão), textura-mundo (planejamento). Todas nasceram de
   erros reais e têm seção "Aplicação neste projeto" separada do corpo genérico.
8. **Modo extração/migração de acervo** (Novel 1): ~150 arquivos + 44 planilhas de worldbuilding
   pré-existente exigiram uma fase inteira que o kit não modela — pasta `Arquivados/`
   (temporária, gitignorada) + protocolo "informar esgotado → autor move → repete".
9. **Autor edita direto = fonte de verdade** (Novel 3, FIX-006): quando o autor edita um
   capítulo fora da conversa e re-sobe, o assistente lê a versão dele (não a própria memória)
   e refina sobre ela, sem reverter as edições boas.

### 1.4 Lacunas de fundação apontadas

- **PERSONAGENS.md raso na concepção** → ensemble passivo, lutas sem emoção (Novel 3, 8 capítulos).
  Ficha mínima proposta: medo real, flaw que o personagem não vê, humor específico, tell físico,
  contradição de arquétipo. + Modelo de três camadas (primário/secundário/terciário).
- **BIBLIA.md sem teto de poder** → sem noção de ordem de grandeza quando o protagonista cruza
  com algo mais forte (achado também em fóruns de autores LitRPG/Royal Road).
  Pedir UMA frase de ordem de grandeza protagonista-inicial ↔ teto-do-mundo, antes do Cap. 1.
- **CRONOLOGIA.md sem tracker de tempo relativo** → risco silencioso de "três dias depois"
  contradizer a soma acumulada. Adotar o tracker desde o SEGUNDO marcador temporal relativo.
- **VOZ.md envelhece de dois jeitos**: exemplos presos nos Caps. 1-3 (refresh por arco concluído);
  e regra nova de "erro documentado" no CEREBRO sem espelho em VOZ → "O que evitar".
- **Mecânica multi-eixo confunde mesmo documentada termo a termo** (Novel 1 E Novel 3,
  independentes): GLOSSARIO/CONTINUIDADE precisam de seção "Esclarecimento/Equação" que
  amarre as variáveis juntas, proativamente.

### 1.5 Feedback universal (vale além do nicho)

- **Dessincronização instrução-curta ↔ CEREBRO** (Novel 3) — espelho exato do problema
  D-039/D-041 do próprio KCM. Regra proposta: customização estrutural no CEREBRO regenera
  a versão curta e a reapresenta ao autor; + lembrete padrão no CEREBRO.
- **Persistência do mount** (Novel 1): arquivos lidos via ferramenta de código somem entre
  sessões se não estiverem no Project Knowledge permanente — o conteúdo extraído sobrevive,
  o RASTRO se perde. Ritual/handoff deveriam avisar.
- **Fases para pedidos compostos** (Novel 3): separar bloqueante vs. executável — candidato
  a princípio universal.
- **Checagem de referências cruzadas na geração** (Novel 3): DECISIONS.md era referenciado
  em 2 de 3 lugares do CLAUDE.md gerado sem nunca ser criado, por 16 capítulos — bug do
  próprio gerador antigo (a camada universal DECISIONS de v1.39.0/D-035 já mitiga; falta
  garantir consistência interna total das referências no gerado).

---

## 2. O que a pesquisa externa confirma

### 2.1 Validação científica dos erros de campo (ConStory-Bench, arXiv 2026)

Um benchmark dedicado a consistência em geração longa de narrativa (2.000 prompts,
taxonomia de 5 categorias / 19 subtipos de erro) encontrou que LLMs produzem erros
**sistemáticos** de consistência — concentrados em **rastreamento factual e raciocínio
temporal** — e que esses erros **não são aleatórios: agrupam-se em regiões narrativas
previsíveis**. As categorias do benchmark (Timeline & Plot Logic, Characterization,
World-building, Factual & Detail, Narrative & Style) mapeiam 1:1 para os FIXes dos
seus projetos: capability bleeding é erro de Timeline/Plot Logic; drift de vocabulário
cognitivo é Narrative & Style; status desatualizado é Factual & Detail.

**Implicação direta:** a densidade de erro cresce com o tamanho da saída. Isso dá base
empírica para duas disciplinas que o Novel 2 já adotou por instinto:
**capítulo com teto de palavras (900-1.400)** e **um capítulo por sessão**.

### 2.2 O gargalo não é o modelo — é a estrutura

Análises de ferramentas e modelos (2026) convergem no mesmo ponto: *"o gargalo não é a
capacidade do modelo — é a estrutura do escritor (outline, bíblia de personagens, lore book)
que o modelo usa para manter continuidade. Sem isso, até os maiores modelos derivam.
Com isso, qualquer modelo de ponta segura obra de tamanho de romance."* Isso valida a
premissa inteira do KCM — e explica por que os três projetos, mesmo com problemas,
chegaram a 16+ capítulos coerentes: a estrutura de arquivos funcionou.

O complemento da pesquisa: **prevenir durante a escrita > pegar depois** (ferramentas
com contexto estruturado evitam o erro na geração), mas a lição de campo do Novel 2
adiciona o que a literatura de ferramentas não diz: **a pré-checagem sozinha falha** —
a prosa deriva da intenção DURANTE a geração (foi exatamente o mecanismo do FIX-001).
O sanduíche pré + pós é a síntese correta.

### 2.3 Skills: veredito

**Sim — é o caminho certo, e por três razões:**

1. **Já está provado em campo.** Você criou 4 skills em 2 projetos, todas nascidas de
   erros reais, e o Novel 3 as usa como protocolo obrigatório (o STATUS do Novel 2 manda
   "acionar skills/serial-fiction/SKILL.md" antes do Cap. 3). O método que você usou —
   partir de lacunas observadas em tarefas reais — é literalmente a primeira best practice
   da Anthropic para autoria de skills ("start with evaluation: identify specific gaps...
   then build skills incrementally").
2. **O mecanismo resolve o problema certo.** Skills são *progressive disclosure*: o
   protocolo pesado (protocolo de escrita, checklists de auditoria) carrega SÓ quando o
   gatilho dispara (escrever prosa), em vez de inchar a instrução curta lida em toda
   mensagem (que tem teto de caracteres). É exatamente a arquitetura camada-curta vs.
   camada-sob-demanda que o KCM já pratica com CEREBRO vs. Instruções.
3. **É oficial e multiplataforma.** Skills funcionam em claude.ai (upload em settings,
   planos pagos), Claude Code (`.claude/skills/` por projeto) e API — o mesmo SKILL.md
   sem modificação. A convenção `.skills-claude/` que você criou funciona como "skill via
   Project Knowledge + instrução de consultar"; a migração para o mecanismo nativo é
   trivial (mesmo formato: frontmatter YAML `name` + `description` + corpo).

**Cuidados (da doc oficial + skill-creator):**
- A `description` do frontmatter é O mecanismo de disparo — deve ser "insistente" (pushy),
  listando gatilhos concretos ("escreva o capítulo", "continue a cena", "POV de..."),
  porque o modelo tende a SUB-acionar skills. As suas já fazem isso bem.
- Separar corpo genérico de "Aplicação neste projeto" (você já faz) — é o que permite o
  kit gerar a parte genérica e o projeto preencher a específica.
- Quando o SKILL.md crescer, dividir em arquivos referenciados (não inchar o principal).

### 2.4 Disciplina para "perda de contexto no meio do capítulo"

O sintoma que você descreve tem três mecanismos distintos (e três disciplinas):

**(a) Deriva de estado no meio da geração** — o modelo escreve em direção ao arco planejado
(capability bleeding é o caso extremo). Disciplina: **bloco de estado imediatamente antes
de escrever** — a skill de continuidade manda levantar estado atual + lista negativa E o
princípio "a partir do estado, nunca em direção ao plano". Reforço novo (proposto): o
esqueleto da Fase 1 do fluxo em duas fases inclui uma linha de "estado de entrada" por
personagem, que a Fase 2 copia para o topo do próprio prompt de escrita.

**(b) Deriva de voz/qualidade em saída longa** — validada pelo benchmark (densidade de erro
cresce com o tamanho). Disciplinas: **teto de capítulo (900-1.400 palavras padrão)**;
**âncora de voz** (reler os 2-3 últimos parágrafos do capítulo anterior e "continuar a
mesma frase"); **um capítulo por sessão**; para capítulo que PRECISA ser longo, gerar
por cenas (a cena é a unidade de geração, o capítulo é montagem) com re-âncora entre cenas.

**(c) Degradação por conversa longa/pesada** — contexto da SESSÃO, não do capítulo.
Disciplinas já provadas em campo: **handoff completo ao sinal de conversa pesada**
(Novel 2 e 3 fizeram; virar gatilho formal); config por tarefa (modelo mais capaz para
prosa; pensamento desligado para prosa foi a escolha do Novel 2 — capturar como
recomendação testável, não dogma); releitura do cânone ao retomar (a skill voz-calibragem
já manda recalibrar "contra os exemplos mais recentes, não os mais antigos").

A síntese vira um protocolo único — o "sanduíche" com 3 camadas:
**PRÉ** (cânone + fatos fixos + estado + lista negativa) →
**DURANTE** (teto de palavras; âncora de voz; unidade = cena) →
**PÓS** (auditoria contra a lista de invariantes crescente + gatilho triplo de docs).

---

## 3. Plano de mudanças no KCM (priorizado)

### Fase A — Cirurgia no nicho narrative (maior valor, menor risco)
**spec-narrativa-1: modelo de colaboração como escolha de fundação.**
- `builderSection` ganha grupo "Colaboração" com 2 chips: "Autor escreve (IA explora/rascunha)"
  vs. "IA escreve, autor dirige (direção criativa)".
- O gerado emite `writes_prose` OU o novo `directs_creative` (DEC-007 generalizado: entrega
  como versão final; rumo em opções; ideias do autor avaliadas, não obedecidas; nomes sempre
  em 2-4 opções; edição direta do autor = fonte de verdade a refinar).
- `never_writes` morre como behavior fixo (a variante "autor escreve" o absorve).
- Resolve a contradição interna atual E a causa da dessincronização do Novel 3.

**spec-narrativa-2: disciplina de escrita (o sanduíche) nos behaviors/conventions.**
- Behavior novo `write_discipline`: duas fases (esqueleto→prosa); pré-checagem (fatos fixos
  de POV anterior, estado atual, lista negativa); teto 900-1.400 com "mais longo só se a
  cena exigir, gerando por cena"; âncora de voz; auditoria pós contra invariantes.
- Conventions ganham os modos de falha NOMEADOS (capability bleeding, vazamento de metadado,
  vazamento de mecânica/"sistema→deuses" para obras com sistema explícito, metáfora repetida
  em POV paralelo, drift cognitivo) — nomear o erro é o que permite a auditoria procurá-lo.
- Tabela de gatilhos: "Capítulo concluído" vira gatilho TRIPLO com sub-checklist de busca
  ativa (rótulos de Status atual).

**spec-narrativa-3: templates de arquivo atualizados.**
- CONTINUIDADE.md: bloco "Estado atual" no topo (fonte rápida) + tabela "Grafia canônica"
  + seção "Lista de invariantes" (a lista viva da auditoria pós) + nota fonte-rápida/lenta.
- PERSONAGENS.md: ficha primária exige medo/flaw/humor/tell/contradição; três camadas;
  "Status atual" aponta para CONTINUIDADE (não duplica números).
- BIBLIA.md: prompt de teto/ordem de grandeza do sistema de poder.
- CRONOLOGIA.md: seção "Tempo relativo decorrido" com instrução "desde o 2º marcador".
- GLOSSARY/CONTINUIDADE: seção "Esclarecimento/Equação" para mecânica multi-eixo (proativa).
- VOZ.md: nota de refresh por arco + espelho de erros documentados em "O que evitar".

### Fase B — Switch "Skills de escrita" (paralelo ao Modo Code)
**spec-narrativa-4:** toggle no nicho narrative que gera um pacote `.skills-claude/`
(ou `.claude/skills/` quando Modo Code ligado) com 3-4 skills genéricas derivadas das suas:
`escrita-serial` (protocolo do sanduíche), `checagem-continuidade`, `voz-calibragem`,
`textura-mundo` — cada uma com a seção "Aplicação neste projeto" em branco para o projeto
preencher, e descriptions "pushy" com gatilhos concretos. A UI explica onde subir
(claude.ai settings / pasta do projeto) e que o CEREBRO deve mandar consultá-las nos gatilhos.

### Fase C — Universais (candidatos, decidir escopo)
- Sincronização instrução-curta ↔ CEREBRO (regenerar+reapresentar ao customizar; lembrete no CEREBRO).
- Aviso de persistência do mount no ritual/handoff.
- Fases para pedidos compostos (princípio universal ou refinamento do P10).
- Modo "extração/migração de acervo" (playbook `Arquivados/` — talvez só narrativa+jogos, ou universal).
- Checagem de consistência interna de referências cruzadas no gerado (harness pode testar).

### Registro
- Todo o feedback acima entra no IDEAS.md do KCM (seção por projeto de origem) — via append
  na raia Code (o IDEAS do mount está desatualizado em relação ao repo pós-spec0020;
  entregar IDEAS inteiro agora violaria "usa a versão mais recente").
- Decisões formais (modelo de colaboração como escolha; sanduíche; skills-pack) viram D-050+
  quando as specs forem aplicadas.

---

## 4. Sobre a documentação dos problemas

Os problemas **foram excepcionalmente bem documentados** — os FIXes do Novel 3 têm
sintoma/causa-raiz/solução/lição, e o feedback dos três IDEAS é acionável. **Não é
necessário copiar conversas inteiras.** Única lacuna possível: se você vivenciou
degradação de QUALIDADE de prosa no meio de um capítulo longo (não erro de continuidade,
mas a prosa "afundando") além do drift cognitivo já documentado, esse sintoma específico
não está registrado — nesse caso, bastaria apontar UM exemplo (capítulo + trecho),
não a conversa toda.
