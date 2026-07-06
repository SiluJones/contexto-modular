# Análise técnica — Reforma dos 3 modos universais (topbar) + feedback ambiental (i-N36)

> Documento de curadoria (raia Chat). Responde à i-N36 (IDEAS): os toggles universais
> grupo/ASU/Code no topbar "viraram um monstro" (clique-errado por proximidade; modos que
> reconfiguram a saída não deveriam ser toggles soltos), e o pedido de **feedback ambiental** de
> estado (selos/faixas de cor por modo ligado). Escopo fixado pelo usuário (2026-07-04):
> **só os 3 modos + feedback ambiental** (topbar inteiro fica para depois); **reservar lugar para o
> atualizador de KCM (i-N27)** no desenho. Base do kit: v1.53.0. Data: 2026-07-04.
> Pesquisa web: UX de toggle vs. segmented vs. checkbox; progressive disclosure; WCAG 1.4.1/1.4.11
> (não depender de cor sozinha; contraste 3:1 de estado). Precedente interno: spec0024/D-053.

---

## 0. Resumo executivo

O diagnóstico do usuário está certo e tem respaldo forte na literatura — mas a **cura não é "trocar
toggle por segmented control"**, e a pesquisa refuta essa direção específica. Os três modos são
**binários independentes** (cada um liga/desliga, podem estar todos ligados ao mesmo tempo).
Segmented control é para opções **mutuamente exclusivas** — usá-lo aqui seria trocar um erro por
outro. O padrão correto para "várias seleções binárias independentes que reconfiguram a saída" é
**checkbox agrupado sob um heading, dentro de um contêiner de configuração** (progressive
disclosure), não switches avulsos espalhados na barra.

Para o feedback ambiental, a pesquisa é unânime e dá um limite duro: **nunca cor sozinha** (WCAG
1.4.1). Todo selo de modo precisa de **pelo menos dois canais** (cor + forma/ícone + texto), contraste
mínimo 3:1, e — no nosso caso de vários modos ligados — **selos discretos empilháveis**, exatamente
como o usuário já intuiu, em vez de faixas que se sobrepõem e brigam por harmonia.

Recomendação em uma linha: **mover os 3 modos para um painel recolhível "Modo de trabalho"**
(progressive disclosure, controles agrupados sob heading), manter cada modo como controle binário
mas **com rótulo externo claro e espaçamento que impeça clique-errado**, e emitir **selos de estado
multicanal, discretos e empilháveis** perto da saída — com folga reservada para um 4º selo (o
atualizador i-N27).

---

## 1. O diagnóstico do usuário, confrontado com a pesquisa

### 1.1 "Modos que reconfiguram a saída não deveriam ser toggles soltos" — CONFIRMADO
A literatura de design é consistente: o toggle/switch é para **um ajuste binário, independente, de
efeito imediato e óbvio**, em contexto de *settings* — não para controles cujo efeito é complexo,
diferido ou pouco claro. Fontes convergem em: *"se o efeito não é imediato, óbvio e binário, não use
toggle"* e *"para configurações com dependências ou que afetam múltiplos elementos → melhor um form
ou painel, não um switch solto"*. Os 3 modos do KCM **reconfiguram o pacote gerado** (adicionam
seções ao CEREBRO, arquivos aos templates, zips ao download) — efeito estrutural, não um simples
liga/desliga cosmético. Portanto: a intuição do usuário está tecnicamente correta.

### 1.2 "Clique-errado por proximidade" — CONFIRMADO, e já diagnosticado internamente
Não é hipótese: a **spec0024/D-053** já registrou por escrito que *"topbar sobrecarregado causava
clique-errado"* e por isso tirou o toggle de skills do topbar, levando-o ao builder «A obra». Ou
seja, um dos toggles já saiu de lá pela mesma razão. Os 3 universais são o resto do mesmo problema.

### 1.3 "Trocar por segmented control" — REFUTADO (a pesquisa é dura aqui)
Direção levantada na i-N36: "considerar segmented/checklist com rótulo externo". A parte **checklist
com rótulo externo** é correta; a parte **segmented** não serve. Todas as fontes batem na mesma
tecla: segmented control é para **opções mutuamente exclusivas** ("List/Grid", "Dia/Noite") — uma
escolha entre alternativas, não N liga/desligas independentes. Nossos modos **coexistem** (grupo +
Code + ASU podem estar todos ligados). Forçá-los num segmented control quebraria a semântica. O
controle certo para "seleção múltipla independente" é **checkbox** (que, ao contrário do switch,
carrega bem o sentido de "escolho vários e o efeito compõe").

---

## 2. A direção recomendada — painel "Modo de trabalho" (progressive disclosure)

### 2.1 Reenquadrar como configuração, não barra de switches — MAS mantendo acesso global
A i-N36 já aponta certo: "painel «Modo de trabalho» recolhível, controles agrupados sob heading". A
pesquisa de progressive disclosure sustenta isso — **agrupar controles numa zona rotulada** reduz
clutter e erro sem escondê-los.

**Correção de arquitetura (restrição do usuário, 2026-07-04):** os 3 modos hoje são acessíveis de
**qualquer aba/nicho, a qualquer momento**, e isso é uma vantagem de fluxo a **preservar** — prender
o painel a um único lugar (aba de saída, página X) obrigaria o usuário a navegar até lá para
ligar/desligar um modo, trocando o clique-errado por perda de acesso onipresente. Isso feriria o
princípio de não estragar o que já funciona. Portanto a cura do clique-errado vem do
**reenquadramento**, não da realocação: o painel continua **global e sempre-alcançável**; o que muda
é a *apresentação*, não o *lugar*.

Desenho corrigido: um controle persistente **"Modo de trabalho"** no topo (onde os toggles vivem
hoje), que **expande um painel recolhível ali mesmo** — acesso onipresente mantido, proximidade
acidental eliminada. O painel:

- Fica **recolhido por padrão**, sob um heading concreto (nunca "Mais/Avançado" abstrato — a NN/g
  alerta que o rótulo precisa de "information scent": o usuário tem que saber o que vai achar lá).
- Agrupa os 3 controles **sob o mesmo heading**, com rótulo externo por controle + uma linha curta
  do que cada modo faz com a saída (ex.: "Code — adiciona kit de arranque do Claude Code ao
  download").
- Usa **checkbox** (seleção múltipla independente), não switch solto nem segmented.
- **Não fica preso a um nicho/aba:** abre e fecha de onde o usuário estiver, como os toggles atuais.

Nota: minha inclinação anterior ("painel perto da saída") foi **descartada** por esta restrição. Os
*selos de estado* podem viver perto da saída (§3), mas o *controle* é global.

### 2.2 Espaçamento e alvo — a causa mecânica do clique-errado
Independente do controle escolhido, o clique-errado nasce de **alvos grandes colados**. O painel deve
dar folga vertical entre os itens e rótulo clicável amplo por item (o rótulo faz parte do alvo), de
modo que errar o vizinho exija esforço. Isso sozinho já mata a maior parte da dor relatada.

### 2.3 Cuidado com i18n (conexão com i-N26)
A pesquisa de progressive disclosure alerta: UIs de disclosure dependem de rótulos curtos e quebram
com **expansão de texto na tradução**; e **evitar controles só-ícone** (ícone não traduz e tem
"information scent" fraco). Como o i-N26 (idioma misto) está no horizonte, o painel "Modo de
trabalho" deve nascer com rótulos textuais (não só ícones) e espaço para o texto crescer. O
"bichinho laranja do Code" entra como **reforço** do rótulo, nunca como o único sinal.

---

## 3. Feedback ambiental de estado — o que a pesquisa permite e proíbe

O usuário pediu explicitamente pesquisa aqui, e ela retorna um limite não-negociável.

### 3.1 A regra dura: NUNCA cor sozinha (WCAG 1.4.1)
Convergência total das fontes (W3C, Carbon, ASU Digital Accessibility, múltiplos guias de CVD): cor
**não pode ser o único** canal de informação. ~4–8% das pessoas têm alguma deficiência de visão de
cor; além de telas ruins, sol, modo escuro etc. Todo selo de modo precisa de **≥2 canais** entre:
cor, **forma/ícone**, **texto**. Um "selo laranja" sozinho para o Code seria uma violação; "selo
laranja + símbolo do Code + a palavra Code" é correto.

### 3.2 Contraste de estado (WCAG 1.4.11)
Indicador de estado precisa de **contraste ≥3:1** contra o fundo e entre estados. Um alerta
específico da pesquisa: laranjas e amarelos são traiçoeiros — laranja/amarelo sobre branco
frequentemente falha o 3:1. Se o selo do Code é laranja, o contorno/texto do selo é que carrega o
contraste, não o preenchimento claro. Teste em **escala de cinza**: se em cinza os selos ficam
indistinguíveis, o desenho depende de cor demais.

### 3.3 O caso "vários modos ligados" — selos empilháveis, não faixas
Aqui a intuição do usuário já é a resposta certa da pesquisa: **selos discretos empilháveis > faixas
que se sobrepõem**. Faixas de fundo coloridas por modo, quando dois ou três modos ligam juntos,
brigam por área e destroem contraste e harmonia. Selos pequenos, cada um autocontido (cor + ícone +
rótulo curto), **empilham lado a lado sem se contaminar**. Regras derivadas:

- Cada selo é uma unidade fechada; N selos = N unidades em linha/coluna, sem mistura de fundo.
- Não pesar a tela: selos discretos, perto da **saída/preview** (onde o efeito importa), não
  espalhados pela barra inteira.
- Ordem estável (sempre grupo, Code, ASU, [update]) para o usuário escanear por posição também.

### 3.4 Identidade por modo (pedido do usuário)
- **Code:** símbolo do Claude Code ("bichinho laranja") + tom laranja como *reforço*, com o rótulo
  "Code". Nunca só o bichinho, nunca só a cor.
- **ASU:** identidade própria (o usuário delegou a idealização; será passada ao ASU depois).
  **Proposta:** o ASU *aplica patches* — é o toolchain que costura mudanças no repo. Símbolo:
  um **glifo de "patch/costura"** — duas metades se encaixando, ou um chevron duplo `»` sugerindo
  "aplicar/avançar mudança" — dentro de um selo de cantos arredondados. **Cor-âncora: teal/verde-azulado**
  (`#0E7C86` como base — distinto do laranja do Code e de qualquer vermelho de erro; passa 3:1 no
  contorno/texto sobre fundo claro). Rótulo curto: "ASU". Alternativa mais literal: um **ícone de
  remendo/patch** (quadrado com pontos de costura). O contraste vive no contorno + texto, não no
  preenchimento. Fica a escolha final do usuário entre "chevron duplo" e "patch/remendo"; ambos
  respeitam a regra multicanal (glifo + cor + rótulo "ASU").
- **Grupo:** ícone de HUB/grupo + rótulo.
- O **"bichinho animado/dinâmico"** o próprio usuário marcou como scope creep confesso — fica
  anotado para depois, fora desta fase.

---

## 4. Reservar lugar para o atualizador de KCM (i-N27)

Decisão do usuário: o atualizador (o "modo atualização" pausado) precisa de lugar no desenho, porque
a UI dele espera esta reforma. Implicações:

- **Ele NÃO é um 4º "modo de trabalho"** no mesmo sentido dos três. Grupo/Code/ASU reconfiguram *o
  que é gerado*; o atualizador é uma **ação de empacotamento** (gera zip + prompt do estado atual).
  Colocá-lo dentro do painel "Modo de trabalho" como checkbox seria erro de categoria.
- Onde ele vive fica para a fase "topbar inteiro" (adiada), mas o desenho de **selos** deve reservar
  a possibilidade de um selo/indicador ligado ao atualizador — ou, mais provável, o atualizador não
  precisa de selo de *estado* (não é um modo persistente), e sim de um **botão de ação** perto da
  saída. Portanto: o sistema de selos empilháveis é dimensionado para **3 modos**; o atualizador
  entra como **ação**, não como selo — mas a área da saída deve comportar os dois sem aperto.
- O painel "Modo de trabalho" e o atualizador **compartilham a leitura de estado dos modos**: o
  pacote de update (i-N27) já precisa declarar quais modos estavam ligados (feedback do ASU no HUB).
  Os selos desta fase são a **mesma fonte de verdade** que o manifesto do update lê. Bom acoplamento,
  não ruim: fazer os selos agora facilita o atualizador depois.

---

## 5. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Trocar switch por segmented (semântica errada) | Refutado na §1.3; usar checkbox agrupado |
| Esconder os modos demais (progressive disclosure exagerado) | Heading concreto com information scent; recolhido mas rotulado e a 1 clique; não enterrar |
| Selo por cor sozinha (WCAG 1.4.1) | ≥2 canais sempre (cor+ícone+texto); teste em escala de cinza |
| Laranja/amarelo falhando 3:1 (WCAG 1.4.11) | Contraste no contorno/texto do selo, não no preenchimento claro |
| Faixas coloridas brigando quando vários modos ligam | Selos discretos empilháveis, unidades fechadas, ordem estável |
| i18n quebra rótulos curtos (i-N26) | Rótulos textuais desde já; espaço p/ expansão; nada só-ícone |
| Regressão nos 3 modos ao refatorar a UI | Estado migra como em D-053 (`STATE.topbar.*`→`STATE.workmode.*`); round-trip no harness; 17/17 |
| Sobrepor escopo com "topbar inteiro" (adiado) | Esta fase toca só os 3 modos + selos; não mexe em afixo/idioma/outros controles |

---

## 6. Encaminhamento proposto (fases → specs para o Code)

Raia Chat autora; Code implementa em `src/` + `build.js` + `validate.js`. Sequência:

- **Fase 1 — reenquadrar os 3 modos como painel "Modo de trabalho" (global).** Agrupar grupo/Code/ASU
  num contêiner recolhível sob heading "Modo de trabalho", **mantendo o acesso global** (abre de
  qualquer aba/nicho, como os toggles hoje — não prender a uma página); checkbox + rótulo externo +
  descrição curta por modo; espaçamento anti-clique-errado. Estado migra `STATE.topbar.*` →
  `STATE.workmode.*` (espelho de D-053). Harness: round-trip dos 3 modos no novo lar; a saída gerada
  não muda (só a UI). 17/17.
- **Fase 2 — selos de estado multicanal empilháveis.** Componente de selo (cor + ícone + rótulo),
  contraste ≥3:1, escala-de-cinza-safe, empilhável, ordem estável, perto da saída. Símbolo do Code
  (laranja como reforço); placeholder de identidade do ASU; ícone de grupo. Harness: presença do
  selo por modo ligado; ausência quando desligado.
- **Fase 3 (na fase "topbar inteiro", adiada) — encaixe do atualizador i-N27** como ação perto da
  saída, lendo o mesmo estado de modos.

Nada toca `index.html` à mão.

---

## 7. Decisões fixadas / pendentes

**Fixadas (usuário, 2026-07-04):**
- Escopo: só os 3 modos + feedback ambiental; topbar inteiro depois.
- Reservar lugar para o atualizador (i-N27) — tratado como **ação**, não 4º modo (§4).
- Pesquisa web feita (esta análise).
- **Acesso global preservado (§2.1):** o painel "Modo de trabalho" continua alcançável de qualquer
  aba/nicho a qualquer momento — reenquadrar, não realocar. (Corrige a inclinação anterior de pôr o
  painel "perto da saída".)
- **Identidade do ASU (§3.4):** delegada ao chat idealizar; proposta = glifo "patch/costura" (chevron
  duplo `»` ou remendo com pontos de costura) + cor teal `#0E7C86` + rótulo "ASU". Usuário escolhe
  entre as duas formas quando quiser; passa ao ASU depois.
- **Rótulo do heading (decisão delegada ao chat):** **"Modo de trabalho"** — concreto, com
  information scent (diz que ali se configura como o kit trabalha), e já é o termo que a i-N36 usa,
  evitando divergência de vocabulário. Adotado.

**Pendentes de decisão do usuário (não bloqueiam as specs; podem vir depois):**
1. Forma final do glifo do ASU: **chevron duplo** `»` ou **remendo/patch**? (Defino chevron duplo
   como default se não houver preferência.)
2. Confirmar o tom exato do laranja do Code (herdar o laranja oficial do Claude Code) e o teal do ASU
   no momento da spec de selos — ajuste fino de contraste 3:1 fica para a Fase 2.
