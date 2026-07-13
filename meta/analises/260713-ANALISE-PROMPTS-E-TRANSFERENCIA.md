# Análise — Tratamento de prompts e transferência de conversa (o último subsistema mode-blind)

> Doc de curadoria (raia Chat). Trava o desenho antes da spec.
> Estado ao escrever: **v1.65.0**, 40/40, i-N40 fechado. Evidência: os dois `HANDOFF-BRIEF` reais do
> **satelite-web** (projeto que consome o KCM) + o `_HANDOFF` do próprio KCM + o texto vivo de `PROMPTS_BASE`.

## 1. O achado (causa raiz)
Enquanto o KCM inteiro virou **mode-aware** (CEREBRO varia com grupo/ASU/Code; downloads e update-pack
respeitam os modos), **os prompts A–F nunca mudaram**. São o **último subsistema mode-blind** — e é por isso
que a transferência quebrou no modo Code.

O corpo vivo do prompt **E ("Conversa pesada — transferir agora")** diz:

> *"gere **todos** os arquivos de contexto... Depois gere o conteúdo **ATUAL e COMPLETO** de cada arquivo
> modificado/criado."*

Isso é um anti-padrão em três níveis:

**(a) Ele manda regenerar docs grandes no pior momento possível.** A regeneração acontece justamente quando a
conversa está mais pesada — máxima pressão de contexto, máxima chance de dropar conteúdo. **Já aconteceu, e
está registrado:** no satelite-web, uma regeneração do `IDEAS.md` **comeu 33 bullets** (Concluídas /
Descartadas / Feedback). O próprio HANDOFF-BRIEF-2 daquele projeto elevou isso a regra: *"NUNCA regenerar
arquivo `meta/` grande no chat. Docs meta/ grandes se editam por SPEC (âncora/append). No chat só se geram
arquivos NOVOS."* O prompt do KCM **manda fazer exatamente o contrário**.

**(b) No modo Code é ativamente destrutivo.** No modo Code o **repositório é a fonte de verdade** e o agente
Code escreve nele em **append** (STATUS/DECISIONS/logs, via `/wrap`). Se o chat também regenera esses arquivos,
há **dois escritores** — violação direta da regra do próprio KCM: *"Reescrita conflita; append não."* Era esse
o bug que o usuário encontrou.

**(c) No modo ASU ele se contradiz com o CEREBRO.** O CEREBRO em modo ASU instrui que **edições saem como
instrução `.yaml`**; o prompt E manda entregar **arquivo inteiro**. Dois documentos gerados pelo mesmo kit,
mandando coisas opostas na mesma sessão.

## 2. O que falta: o artefato que de fato funciona
Os dois `HANDOFF-BRIEF` do satelite-web provam empiricamente qual é o artefato certo — e o KCM **não o gera**.
A tese deles, explícita: *"o repositório carrega toda a memória atual; este brief é só o **estado + próximos
passos** pra arrancar sem reler tudo"* e *"este brief é um **atalho**, não a verdade. A verdade é o repo lido
agora. Se divergir, **o repo vence**."*

Ou seja, o modelo correto de transferência é:
- **A memória permanece nos arquivos de contexto / no repo.** Não se transporta memória regenerando-a.
- **O brief é um bootstrap** — arquivo **novo** (portanto seguro de gerar no chat, pela regra (a)) contendo:
  onde estamos · o que foi feito **e por quê** · pendências concretas com o passo exato · próxima frente ·
  **armadilhas e regras aprendidas (o que NÃO regredir)** · ritual de início · config recomendada.
- **A retomada tem ritual** e uma regra de precedência: *o repo/arquivo lido agora vence o brief e vence a
  memória*.

O prompt **F ("Retomar após transferência")** hoje é uma linha ("leia os arquivos antes de responder") — sem
ritual, sem precedência, sem confirmação. Fino demais para o trabalho que faz.

## 3. Decisões fixadas (o refino, por modo)
**Prompt E — transferir** passa a ter duas partes:
1. **Sempre:** gerar o **HANDOFF-BRIEF** (arquivo novo, detalhado, com a estrutura acima).
2. **A atualização do contexto vira mode-aware:**
   - **Modo Code:** **NÃO regenerar os meta no chat.** O repo é a verdade e o Code escreve nele. Em vez disso:
     listar o que falta registrar (append para o Code fazer) e **garantir commit + push** — é o que a próxima
     conversa vai ler.
   - **Modo ASU:** edições em arquivos existentes saem como **instrução `.yaml`**; o brief (arquivo novo) sai
     inteiro. (Elimina a contradição com o CEREBRO.)
   - **Vanilla (sem Code, sem ASU):** entregar inteiros **apenas os arquivos que mudaram nesta sessão** —
     nunca "todos" — com a **declaração de higiene (P12)**: o que saiu, o que foi condensado, e a confirmação
     de que nada **único** se perdeu. É aqui que o usuário não tem agente para aplicar append, então o arquivo
     inteiro é legítimo — mas escopado ao que mudou e com a rede da higiene.
   - **Modo grupo (empilha):** processar a caixa do HUB (triagem → veredito + motivo) e entregar o `HUB.md`
     completo, lembrando de sincronizá-lo nos outros projetos.

**Prompt F — retomar** vira um **ritual numerado**, também mode-aware:
1. (Code) o repositório é a fonte de verdade — puxe e leia a versão atual, nunca a memória.
2. Ler os arquivos de contexto: comportamento → estado → decisões → pendências.
3. Ler o HANDOFF-BRIEF **como atalho, não como verdade**: *se o brief divergir dos arquivos, os arquivos vencem.*
4. **Confirmar em UMA frase** o estado e o próximo passo; em ambiguidade real, perguntar antes de executar.

**Por que os modos entram sem custo:** os corpos de `PROMPTS_BASE` são funções `(p, n) => string` avaliadas no
mesmo escopo de `groupModeOn()/asuModeOn()/codeModeOn()` — basta chamá-las dentro do corpo. Nenhuma mudança de
arquitetura; os `promptsExtra` dos nichos (que o compilador do Custom serializa) **não são tocados**.

## 4. Refutação — o que NÃO fazer
- **Não** criar um "modo transferência" nem um 4º selo: transferência é uma **ação de fim de sessão**, e o
  comportamento já é derivável dos modos existentes.
- **Não** transformar o brief num arquivo `meta/` versionado por padrão: ele é **efêmero** (vale para a próxima
  conversa e morre). Guardá-lo em `meta/` incharia o contexto com estados velhos — exatamente o que o KCM
  combate. (O usuário pode salvar se quiser; o kit não obriga.)
- **Não** manter o "gere com MÁXIMO DETALHE todos os arquivos": é o texto que causou perda documentada.

## 5. Achado colateral (registrar como ideia, não fazer agora)
Os prompts **C ("Projeto novo, do zero")** e **D ("Projeto existente — adicionar o sistema")** também são
**mode-blind e desatualizados**: mandam a IA *gerar* os arquivos de contexto do zero — mas desde a **spec0034**
o KCM tem o **download estruturado** (botão ↓), que entrega a árvore pronta, e desde o i-N40 tem o pacote de
atualização (↻) para o caso do D. Os prompts C/D **ignoram as duas ferramentas** que o próprio kit passou a
oferecer. **Próximo refino natural** (spec seguinte): C aponta para o download estruturado; D aponta para o
pacote de atualização; ambos ficam cientes dos modos. Registrar como **i-N42**.

## 6. Sequência
- **spec0040** (esta leva): prompts **E** e **F** mode-aware + HANDOFF-BRIEF + check de harness travando a
  regra (Code não regenera; vanilla só o que mudou; brief é atalho, arquivos vencem).
- **spec0041** (i-N42, depois): prompts **C/D** cientes do download estruturado e do pacote de atualização.
