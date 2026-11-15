# ANÁLISE — O nicho `dev` pelo que vinte e seis projetos ensinaram: a verificação quando o alvo não roda, as permissões que as skills pedem, o peso do CEREBRO e o update de projeto atrasado

> **Status:** Decidida (2026-11-15: as duas WOs, nesta ordem; V6 só o índice; V9 (c) entra) — a WO A na wo0172 (v1.143.0, `D-181`); a WO B em seguida
> **Data:** 261115 · **Base:** v1.142.0, HEAD `42f3b54`
> **Vira:** duas WOs de código (A: o protocolo do kit, todos os nichos; B: o módulo `dev`) e o que for adiado, com gatilho, nas `i-N89` a `i-N93` · **Decisão:** a escrever (`D-181` em diante)

## Problema

Quatro áreas do mapa devolveram ao kit o que os projetos `dev` fizeram fora do molde: Artista (`i-N89`, oito ferramentas Lua para o Aseprite), Estudante (`i-N90`, cinco ferramentas Python), Arquiteturas (`i-N91`, o toolchain), o got-legends (`i-N92`) e, nesta conversa, Tools (`i-N93`, oito pastas). São vinte e seis projetos `dev` (Artista 8, Estudante 5, Arquiteturas 4, Tools 8 — o shopify ainda no molde —, o got-legends), contra três gatilhos próprios no `src/niches/dev.js`. Quase todos os do Artista e do Estudante estão parados desde julho, com kit anterior à v1.73: **o peso é de evidência de desenho**. Os de Tools e o got-legends rodam o kit de hoje (v1.122 a v1.142) e estão ativos, então **o que eles dizem sobre o protocolo vale agora**. A pergunta é o que vira mudança no gerador já, o que espera e de que forma.

## Restrições / o que foi medido

`[medido no src/ e no gerado da réplica do HEAD 42f3b54, em 2026-11-15]`

| # | Item | Vozes | No `src/` hoje |
|---|---|---|---|
| V1 | **Verificar quando o alvo não roda no ambiente do chat** — espelho executável com paridade (Lua via Python e um interpretador compilado na hora); núcleo testável separado da tela (controller/view sem o PySide6); `py_compile` para a sintaxe e um script de AST para nome sem import; harness próprio sem argumentos com código de saída (golden set 24/24); linha de base reexecutável (318 chaves; `npm run seeds`); sonda de UI sobre o `dist` (`behave.cjs`) | 5 — PixelForge, PixelStudio (`i-N89` 1, `i-N90` 1), OAI, Vectorforge, EditX (101 testes com prova de vida) | **0** ocorrências de «espelho», «paridade», `py_compile` no `src/`. O CEREBRO do `dev` fala de build e validação no genérico |
| V2 | **O ambiente da máquina do dono impede compilar** — Tauri parado pelo MSVC (`link.exe`) e pelo WDAC (trocado por Neutralino) | 2 — MarkVault, WinImgView (Tools) | nada sobre ambiente que bloqueia; o `SETUP.md` que três projetos criaram não existe no kit |
| V3 | **O `SETUP.md`: guia de ambiente para o humano**, fora do ritual de leitura | 3 — Knowledge-OS (pasta-pai e repo), WinImgView (repo), MarkVault (os passos do MSVC no STATUS) | não existe; o papel mais próximo é o CONTEXT, lido em toda abertura |
| V4 | **As permissões que as skills pedem e o `settings.json` não dá** — as skills mandam rodar `date +%y%m%d-%H%M` (4 vezes no gerado) e `git log` (o passo 1b da `wrap`); o `allow` gerado tem `git status/diff/add/commit/push` e mais nada de shell | 1 voz (EditX, que acrescentou o `date` à mão) + **a medida** | **defeito confirmado:** `Bash(date:*)` e `Bash(git log:*)` ausentes no `settings` de `buildCodeKitFiles`. Cada relatório pede aprovação, e o passo que pede aprovação é o primeiro a ser pulado |
| V5 | **O prompt do update manda rodar `git log` e `git status` sem `GIT_OPTIONAL_LOCKS=0`** — o chat ainda não leu o CEREBRO novo quando roda, e o `git status` comum grava o `index.lock` | 1 voz (EditX) + **o caso** (o got-legends rodou `git add` pelo chat) | **confirmado:** a linha do canal pasta em `buildUpdatePrompt` traz os dois comandos sem a variável |
| V6 | **O peso do CEREBRO** — o do `dev` com o Code tem **104.022 bytes, 27 seções**; as maiores: higiene 18.630, princípios 11.836, bloco de fecho 9.679, transferência (reserva) 6.459. Os projetos: 106 KB contra 36 KB do anterior (fileview), 55 → 112 KB (got-legends), 105 KB (EditX, Vectorforge) | 2 que reclamam (fileview pede um índice de seções no topo; got-legends) + 2 que carregam | sem índice; o CEREBRO é o arquivo da abertura de toda conversa |
| V7 | **O update de projeto muito atrasado** — (a) o manifesto listou 4 linhas revogadas e a varredura pelo fato achou 51 (Vectorforge, ~40 versões); (b) fundir os dois `fusao` não fecha o update: as skills e o molde de WO ainda pedem comparação (got-legends); (c) trocar de modo deixa artefatos **fora** do repo (os backups do ASU na pasta-pai) que nenhum template cobre (Vectorforge); (d) **o carimbo de modos decide «sobra» só pelo arquivo:** com `ASU nao`, mandaria apagar a seção do ASU de um projeto que ainda usava ASU (quatro `.yaml` no repo) — o dono migrava, mas não tinha avisado (fileview); (e) a abertura não confere se o STATUS diz a verdade (got-legends) | 3 — Vectorforge, got-legends, fileview | (a) o manifesto já diz «número é piso»; (b), (c), (e) nada; (d) o manifesto diz «Como decidir, sem perguntar a ninguém» |
| V8 | **Gatilhos que o `dev` não tem** — o usuário cola log ou traceback sem descrever (GeratorPyxel); projeto existente sem documentos: ler o código antes de documentar (Vectorforge, PixelForge `i-N89` 2); a mesma fórmula em dois módulos, e a correção não chega à cópia (PixelStudio `i-N90` 4; o got-legends teve o formatador duplicado, wo0027 dele) | 2 cada | o `dev` tem **3** `triggersExtra` (arquitetura, fase, termo) |
| V9 | **Lugares que o molde não dá** — o HISTORY como baú da pesquisa inicial densa (Forja Ase; o `conhecimento/` do Negócios é a segunda voz, noutro nicho); `README.md` é do projeto e repositório público pede `LICENSE` (Procforge); o LOG-TEMPLATE sem «WOs entregues» (got-legends, três levas); `.claude/settings.local.json` fora do `.gitignore` (got-legends: o Code cria, enche de caminhos absolutos, e ninguém decide versionar) | 1 a 2 cada | HISTORY = «fases antigas»; nada sobre LICENSE; o LOG do `dev` tem Feito/Decisões/Bugs/Aprendizados/Onde parei/Próximos; `settings.local.json` **0** ocorrências no `src/` |
| V10 | **Repositórios com git e quase nada commitado** — MarkVault 1 commit e 43 arquivos fora, PyxelForge 1/37, PixelStudio 2/29, WinImgView 2/22, Reforger 2/20 | 5, todos anteriores à v1.73 e sem o Code | o kit de hoje entrega o commit pronto (sem o Code) ou a WO commita (com o Code); nenhum dos cinco roda o kit de hoje |
| V11 | Avulsos de uma voz: o subtipo «ferramenta de agente» (asebridge); convenção de sinal ou ângulo nunca de memória e forma sintética simétrica para algoritmo geométrico (PixelStudio); «sem bug não é boa de usar» e bug × limitação de escopo = DEC (PixelStudio); a skill `wrap` cita o nome `INSTRUCOES-DO-PROJETO.md` (Vectorforge, que renomeou o arquivo) | 1 | — |
| V12 | **A medida a favor** — o que o kit de hoje já dá e os projetos ativos usam: specs de feature em `specs/` (Vectorforge, quatro, a WO cita a spec — **o primeiro uso real do `SPEC.md` visto pelo KCM**); `analises/` (EditX 2, Vectorforge 1); WO com Edição 0 por sha1 e troca por script com âncora única (EditX, Vectorforge); a sonda que conta e não decide (OAI achou 3 de 7 planilhas com a coluna corrompida); o roteiro do dono para a conferência de tela («6/6 ok» no fileview e no EditX); a fusão pela base do pacote (got-legends, 2 turnos e 1 WO) | — | — |

**Teto das Instruções.** Nenhuma proposta abaixo põe texto nas Instruções do `dev` (hoje 5.305 caracteres com o Code); tudo vai para o CEREBRO, os moldes, o `settings.json`, o prompt e o manifesto do update. Se alguma acabar tocando, o `C28` mede antes.

## Opções consideradas

**V1 + V2 — a verificação no `dev`.** (a) Nada: cada projeto inventa, como os cinco fizeram. (b) **Uma seção no CEREBRO do `dev`, «A rede deste projeto»:** todo projeto declara a sua (o comando que roda sem argumentos e devolve código de saída; a linha de base reexecutável; o roteiro do dono para o que só se vê na tela); **quando o alvo não roda no ambiente do chat**, o assistente constrói o que roda — o núcleo separado da tela, o espelho executável com paridade, a checagem de sintaxe e de nome — e **diz o que ficou sem verificar**, em vez de entregar código plausível; quando a máquina do dono não compila (o MSVC, o WDAC), é ambiente, vai para o `SETUP.md`, e a decisão de trocar de stack é DEC. (c) Um princípio novo universal. — (b): as cinco vozes são do `dev`; o princípio universal (P8, P13) já existe, falta o como do nicho.

**V3 — `SETUP.md`.** (a) Nada. (b) **Arquivo opcional no `dev`**, desligado por padrão: «guia de ambiente para o humano — instalar, configurar, rodar, o que já deu errado e como saiu; não entra no ritual de leitura». (c) Seção no CONTEXT — o CONTEXT é lido em toda abertura, e o guia é para o humano, lido uma vez. — (b).

**V4 — permissões.** Sem alternativa séria: `Bash(date:*)` e `Bash(git log:*)` no `allow` gerado, e um check que confere que **todo comando que as skills mandam rodar** está no `allow` — o check sai da lista de comandos das skills, não de uma cópia dela. Universal (o kit do Code é o mesmo nos 19 nichos).

**V5 — o git do prompt.** Sem alternativa séria: no canal pasta, `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` e `GIT_OPTIONAL_LOCKS=0 git status --short`, com a razão em meia linha (o CEREBRO novo ainda não foi lido). Universal.

**V6 — o peso do CEREBRO.** (a) Nada. (b) **Um índice de seções no topo** (uma linha por `##`, gerado — nunca escrito à mão, para não envelhecer), que permite ler sob demanda e comparar por seção no update. (c) Enxugamento (a etapa B de julho, `D-091`–`D-094`, cortou 15 %; a higiene sozinha tem 18 KB). — (b) agora, barato; (c) é análise própria, com gatilho: a terceira voz que reclamar, ou o CEREBRO do `dev` passar de 110 KB.

**V7 — o update atrasado.** (a) Nada. (b) **Quatro frases no prompt e no manifesto:** (d) marcador presente e modo `nao` **e artefatos do modo no repo** (a pasta `meta/ASU/`, os `.yaml`, a seção do HUB) = pergunta ao dono, não remoção — só o marcador sem artefato é sobra; (b) o update fecha quando os carimbos dos portadores dizem a versão nova, não quando os dois `fusao` fecham — a pasta do pacote fica até lá; (c) ao trocar de modo, procurar sobras de ferramenta também **fora** do repo (pasta-pai) e listá-las para o dono; (e) a abertura confere o topo do STATUS contra o disco (a versão, «Em progresso», «Quebrado») antes de comparar. — (b): o (d) é o único item que impede um erro irreversível (apagar o fluxo vivo).

**V8 — gatilhos do `dev`.** Três linhas em `triggersExtra`: «log ou traceback colado sem descrição → ler os arquivos citados, conferir dependências contra o manifesto do projeto, separar ambiente de bug, e só então propor»; «projeto existente sem documentos preenchidos → ler o código antes de escrever CONTEXT e STATUS (o molde vazio não é o projeto)»; «a mesma fórmula ou regra em dois módulos → registrar a duplicação e convergir na próxima mudança que tocar um deles». O `C114` confere os nomes citados.

**V9 — lugares.** (a) HISTORY: o papel ganha «ou a pesquisa densa da partida (API, algoritmos), para o CONTEXT ficar enxuto» — duas vozes em dois nichos; (b) uma linha no CEREBRO do `dev`: «o `README.md` é do projeto, não do kit; repositório público pede `LICENSE` — pergunte ao dono qual»; (c) o LOG-TEMPLATE do `dev` com «Entregas» (WOs aplicadas, specs e análises do dia), **uma voz em três levas**; (d) `.claude/settings.local.json` no `.gitignore` gerado **quando o Code está ligado** (o Code o cria; o kit já tira do versionamento o que é do usuário). — Os quatro são pequenos e cabem na WO B; (c) é o mais fraco (uma voz).

**V10 — commits.** Nada agora: os cinco são pré-v1.73 e sem o Code; o kit de hoje já cobre. Fica como dado: projeto antigo que reabrir começa pelo «commit do que está no disco» antes do update.

**V11 — avulsos.** Ficam na `i-N89` e `i-N90`, com gatilho de segunda voz. A `wrap` com o nome fixo é desvio local de quem renomeou (o kit gera esse nome): nada a fazer.

## Recomendação

**WO A — o protocolo, todos os nichos (v1.143.0):** V4 (as duas permissões e o check dirigido pelas skills), V5 (o git do prompt), V6 (b) (o índice de seções gerado no topo do CEREBRO) e V7 (b) (as quatro frases). Um check novo para V4 + V5 + V7 (d); o índice entra num check de forma (toda `##` do CEREBRO tem a sua linha no índice, e nada mais).

**WO B — o módulo `dev` (v1.144.0):** V1 + V2 (a seção «A rede deste projeto»), V3 (o `SETUP.md` opcional, desligado no fecho), V8 (os três gatilhos) e V9 (a) a (d). Um check para a seção, o arquivo opcional e os gatilhos.

**Adiar, com gatilho:** V6 (c) o enxugamento do CEREBRO (terceira voz ou 110 KB no `dev`); V10; V11; o subtipo «ferramenta de agente» (segunda voz). **Fora do kit:** os itens do ASU (`i-N89` 7, `i-N90`) seguem na carta 01 ao ASU; a nota do Knowledge-OS (o `db:migrate` com `SELF_SIGNED_CERT_IN_CHAIN`) é do projeto, sem resposta lá.

## Riscos

- **O índice envelhecer:** escrito à mão, mente na primeira mudança — por isso gerado, e conferido por check.
- **A seção de verificação virar receita:** cinco técnicas de cinco linguagens; se o texto as listar como passos, o projeto Rust ou Go não se reconhece. Escrever o princípio (declare a sua rede; quando o alvo não roda, construa o que roda e diga o que ficou de fora) com as técnicas como exemplos.
- **O V7 (d) frear a limpeza legítima:** projeto que desligou o modo de propósito e deixou a pasta vai ter uma pergunta a mais. O custo é um turno; o contrário é apagar o fluxo vivo.
- **Medir a família antes de consertar a instância** (a lição da KCM 25): o V4 se confere contra **todas** as skills geradas, não só as duas citadas; o V9 (d) se mede nos outros nichos com o Code antes de virar regra só do `dev` (provavelmente é universal).

## Ponto de decisão

O dono decide: (1) as duas WOs, nesta ordem, como recomendado — ou só a A; (2) V6: só o índice, ou já o enxugamento; (3) V9 (c), o LOG com «Entregas» com uma voz só: entra ou espera. A Rainha da Preguiça e a cópia do v6 do Cancioneiro (carta 05) não dependem desta análise.
