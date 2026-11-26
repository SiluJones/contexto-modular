# ANÁLISE — Quando a WO se paga: o método C com o bloco do chat como regra, a WO como exceção com motivo, e a variante do kit

> **Status:** Decidida (2026-11-26: C1, K1, o teste de quatro itens como está, o alarme no STATUS)
> **Data:** 261126 · **Base:** v1.167.0, HEAD `e34beea` (wo0216) · réplica do HEAD medida em `$HOME/rep` na VM do chat
> **Vira:** wo0217 (a casa, a última WO só de doc, porque a regra tem de estar escrita antes de valer) e a WO de código do kit seguinte (K1, com a `i-N111`) · **Decisão:** `D-209` (emenda da `D-174` e da `D-170`)

## Problema

A `D-174` (09/11) deixou a variante do método C no kit esperando dois dados: o GameDataHub adotar e a Carreira chegar a dez WOs de conferência. O dono adiou a análise e trocou a pergunta (`i-N105`, 26/11, `[relatado pelo dono]`): não é só «o kit ensina o método C?», é **«quando a WO se paga?»**. Nos projetos de pixel art o chat altera os arquivos e o dono só roda o bloco de versionar; o receio dele é que o projeto que liga o Code passe a pedir WO para tudo — inclusive para repassar ao Code o que o chat já fez, que é o que a casa faz hoje em toda WO só de doc (a wo0214 podia ter sido um bloco).

Três coisas dependem da resposta: o fluxo da casa, a variante do kit e de onde sai o espaço no CEREBRO gerado (o handoff da KCM 32 apontou a base a 508 bytes do teto).

## Restrições / o que foi medido

**1. A casa, da wo0144 à wo0216** `[medido no repo: git log, git show --name-only, as WOs e os relatórios em ../notas-arquivadas/]`.

| | |
|---|---|
| Commits desde a wo0144 | 73, **todos WOs** (nenhum commit fora de WO) |
| WOs de código (tocam `src/`, `validate.js` ou `build.js`) | 37 — 59,4 linhas por WO em média |
| WOs só de doc | 36 — 52,8 linhas; **27 delas com 4 arquivos ou menos** (o fecho, a conferência de volta, o STATUS, o log, a própria WO) |
| Paradas no Code | **0** |
| Erros que chegaram ao commit | **0** |
| Achados de conteúdo que só o Code viu | **0** (os 2 da base «edições» eram de fim de linha e sumiram com a troca no EOL do arquivo) |
| Erros do chat pegos antes do commit | pelo harness na réplica, antes de a WO existir (4 no piloto; os seguintes não foram contados) |
| Tempo do Code por WO | só doc: 12 a 35 s (wo0206, wo0208, wo0212, wo0214, wo0216); código: 53 a 726 s, quase todo no hook |

Como foi lido: as paradas e os achados por busca de palavra em 63 relatórios (wo0154 a wo0216) — os acertos eram «nada faltou, nada sobrou» e trocas previstas; da wo0144 à wo0153, a tabela da `i-N71`; o relatório da wo0216 inteiro. **A busca é piso** (`C51`): não li os 63 relatórios inteiros. **A tabela da `i-N71` parou na wo0153** — a medida que o CEREBRO da casa manda o chat preencher a cada conferência de volta não foi preenchida em 63 WOs; o número acima é a primeira medição desde o piloto.

**O hook da casa** (`.githooks/pre-commit`, `core.hooksPath` = `.githooks`): todo commit que toca `src/`, `index.html`, `build.js`, `validate.js` ou `build-manifest.json` roda `node build.js`, barra o commit se o `index.html` estava desatualizado e roda `node validate.js index.html`. **O verificador do commit é o hook, não a WO** — e ele roda igual num `git commit` do PowerShell do dono.

**2. Os vizinhos** (dado já registrado; não remedido hoje).
- **GameDataHub** `[carta 06, lida em 21/11, i-N105]`: 8 WOs de conferência, 0 paradas, 0 erros no commit, 45 a 73 linhas contra 588. **Um achado do Code:** a leitura do diff pegou resíduo do texto antigo que o hash não pegaria (wo0164 deles). WOs de código passam de 1.000 linhas na forma «edições»: é onde o C mais rende.
- **Carreira** (o projeto sem verificador) `[relida em 21/11]`: 6 WOs de conferência, 0 e 0; a wo0009 (o merge) gravada e sem aplicar desde 20/11.
- **satelite-web** `[09/11]`: 70 relatórios desde a `DEC-178` deles, nenhuma parada.
- **Observatorio** `[09/11]`: recuou no 28/10, sem decisão escrita, onde o chat dele **regerava o arquivo inteiro** para gravá-lo.
- **My Little Lady** `[i-N111, 25/11]`, na forma «edições»: a WO mandou `git add capitulos/…`, o índice tinha `Capitulos/`, o arquivo não entrou e **o commit saiu sem o capítulo** — a WO não pegou; conferir o `git diff --cached --stat` contra o inventário pegaria.
- **Pixel art** (`Artista\- Pixel Artista`) `[medido no repo deles em 26/11, depois da decisão, com a pasta concedida pelo dono]`: o pixel-desenhista (11 commits, 1 WO, a do fecho), o pixel-plataforma (8 e 1), o pixel-projetista (11 e 1) e **o pixel-artista: 13 commits pelo bloco do chat e, depois de ligar o Code, 5 WOs de edições seguidas (145 a 342 linhas)**, em que o Code conferiu hashes, posicionou texto em seis docs, versionou 115 `.aseprite` e «não rodou os geradores (fora de escopo)». As quatro árvores estão limpas; a qualidade dos commits pelo bloco não foi auditada.

**3. O que o kit gera hoje** `[medido em sandbox: réplica do HEAD e34beea, buildClaudeMd/buildGuiaKit/buildInstr]`.
- **Canal pasta sem o Code** — já é o método C sem a WO: «o chat escreve os documentos; o dono revisa e versiona» e «Commit é do dono: entregue o bloco pronto». **Falta a regra que segura o método:** «troca exata» aparece **0 vezes** no CEREBRO e no GUIA gerados; o texto diz «entrega o arquivo INTEIRO», que no canal pasta o chat lê como regerar o arquivo — o modo de falha do Observatorio.
- **Canal pasta com o Code** — é aqui que o receio do dono está escrito: o dono por documento vira «o Code escreve STATUS, DECISIONS, CHANGELOG; IDEAS e todo doc grande e vivo mudam por WO»; a seção «Desenvolvimento no Claude Code» (1.929 bytes) ensina a WO de edições como forma padrão; as Instruções mandam «doc grande por WO (com a linha `/apply-wo`)». **Ligar o Code troca o fluxo inteiro, e para a forma que a casa abandonou há 73 WOs.**
- **Os tetos:** a base (`custom`, pasta, sem Code) em **71.992 / 72.500**; a pior configuração (`narrative`, mount + Code) em **93.246 / 94.000**; **a pior com pasta + Code, que é onde a variante mora: `narrative` em 91.670 — sobram 2.330 bytes**; o GUIA tem ~31,1 KB e **não tem teto** (é lido por gatilho). Instruções `custom` com Code: 3.637 caracteres; orçamento do modo Code `C28` em 544/550.

**4. Fora daqui** (P13): o estudo da Microsoft sobre revisão de código moderna (Bacchelli e Bird, ICSE 2013) achou que a revisão rende menos defeito do que se espera dela, e que o que pesa é entender o contexto da mudança — quem revisa sem contexto acha o superficial. O Code que confere a WO lê o diff sem o contexto da conversa: o zero em 73 é o que a literatura prevê, não sorte. O mesmo estudo conta a favor da revisão o que ela dá **além** do defeito (consciência do que mudou); aqui isso é o relatório do Code — que a casa só usa para medir custo.

**O que o dado diz, junto:**
- **A rede do método C são três coisas, e nenhuma é a WO:** a troca exata sobre o arquivo lido no turno (impede perder conteúdo), o verificador rodado pelo chat na réplica antes de entregar (pega o erro), e o hook no commit onde houver (barra o vermelho). A WO acrescenta duas: o inventário com `sha1sum` (prova que o disco é o que o chat gravou, no instante do commit) e uma segunda leitura do diff, sem contexto. Em 73 WOs, as duas juntas pegaram zero; no GameDataHub, uma.
- **O que a WO compra de verdade é execução, não conferência:** um passo que o chat não pode rodar (build ou teste fora da VM, acima de ~3 minutos, toolchain do Windows, rede), uma operação de git que não se entrega num bloco com segurança, ou a gravação onde a ponte do chat não grava (`.claude/`).
- **O erro que sobra no bloco avisa:** um `git add` com o caminho errado deixa o `git status` sujo, e o chat vê no turno seguinte — é o «qual avisa quando errou» do CEREBRO. Commit no repo do próprio dono se conserta com outro commit.

## Opções consideradas

**(a) A casa**
- **C0. Como está:** toda mudança por WO de conferência. 36 WOs só de doc, 27 delas de quatro arquivos, pagaram uma troca de janela e 12 a 35 s do Code para nada medido.
- **C1. A WO só de doc vira bloco do chat; a de código fica WO.** O bloco abre com o `cd` (`D-208`), faz `git add` só da lista, `commit` e `push`; o chat confere de volta no turno seguinte. A WO de código fica porque o hook leva de 1 a 12 minutos e a falha dele pede interpretação (o «`index.html` desatualizado, refaça»): é o «o Code faz melhor».
- **C2. Tudo por bloco**, com `node build.js` antes do `git add` e o hook como verificador. Possível — o hook é o mesmo —, mas põe no PowerShell do dono uma espera de até 12 minutos e uma falha que ele teria de ler. Cedo: nunca foi rodado assim.

**(b) O kit**
- **K1. A variante como forma padrão do canal pasta com o Code** (projeto novo; o instalado recebe a proposta no update e decide por escrito). Quatro peças: (1) **no CEREBRO, a regra de gravação no canal pasta, com ou sem o Code:** troca exata de ocorrência única sobre o arquivo lido no turno, no fim de linha dele; arquivo novo inteiro; nunca regerar um arquivo existente inteiro — a frase troca o «entrega o arquivo INTEIRO» do canal pasta e cabe na base trocando, não acrescentando; (2) **a seção «Desenvolvimento no Claude Code» reescrita:** um escritor por documento, o chat; o Code gera o que se gera e confere; **o teste de quando a WO se paga** e, fora dele, o bloco; a WO, quando vem, é de conferência; alarme permanente (um erro no commit ou duas paradas seguidas por conteúdo suspendem — `i-N105` item 2); mudar o método é decisão escrita (o Observatorio); (3) **no GUIA, o «como»:** a WO de conferência por dentro, o bloco, a conferência de volta; (4) **o molde de WO e a `apply-wo` geradas** com a forma «conferência», e a `i-N111` dentro: o `git diff --cached --stat` contra o inventário antes do commit, o fim de linha por Python, a conversão por script em vez de `git checkout`, os caminhos copiados do `git status` e nunca digitados, o «sim» do autor num arquivo que o Code lê. As Instruções com o Code trocam «doc grande por WO» pela regra nova, no mesmo número de caracteres (`C28`).
- **K2. A variante como opção na tela** (um modo a mais). Mais um eixo nas quatro configurações que o `C138` mede, mais orçamento nas Instruções, e o projeto que não marca continua no fluxo que o dono rejeita.
- **K3. Esperar a décima WO da Carreira (M2b).** A condição foi posta para medir o projeto sem verificador; a Carreira está em 6 de 6 sem erro, e o pixel art soma uns 20 commits sem verificador e sem WO. Esperar custa: todo projeto novo que liga o Code nasce na forma «edições» com o Code escrevendo STATUS.

**(c) O espaço no CEREBRO**
- **E-a. A E3 do enxugamento** (higiene, princípios e fecho para o GUIA, ~41,8 KB): não é preciso para isto, e mexe no que o assistente mais lê.
- **E-b. O «como» no GUIA, e no CEREBRO só regra, teste e ponteiro**, trocando texto em vez de acrescentar: a seção do Code é reescrita (1.929 bytes hoje), não somada.

## Recomendação

**C1, K1 e E-b.**

**O teste — a WO se paga quando há pelo menos um destes, e o motivo vai escrito na primeira linha dela:**
1. **Um passo que o chat não roda** e que não é um comando curto que o dono cola: build ou teste fora da VM, acima de ~3 minutos, que pede o toolchain do Windows, a engine, a GPU ou a rede — ou cuja falha pede interpretação e conserto.
2. **Uma operação de git que não se entrega num bloco com segurança:** renomear (com a caixa do Windows), apagar, mover pasta, resolver conflito, merge, reescrever histórico.
3. **Um lote grande ou de risco** em que a segunda leitura e o inventário valem: o merge de um update do kit (23 a 31 arquivos), uma migração, muitos arquivos de código.
4. **A ponte do chat não grava** naquele caminho (`.claude/`) ou falhou na gravação.

**Fora disso, o bloco do chat:** `cd "<pasta>"`, `git add` com os caminhos copiados do `git status --short` lido no turno, `git commit`, `git push` — um bloco só (`D-205`, `D-208`) — e, no turno seguinte, a conferência de volta: `git show --stat` contra a lista e `git status` limpo. O hash do commit entra no STATUS pelo turno seguinte que o gravar. Na casa, pelo teste, toda WO de código passa (item 1: o hook) e toda WO só de doc vira bloco — salvo o merge e o que tocar `.claude/`.

**No kit**, a variante (K1) como padrão do canal pasta com o Code; o mount segue na forma «edições» (reserva). Uma WO de código só, com a `i-N111`, corta minor. **O espaço:** a base não paga a variante (ela mora na seção do Code); a regra de gravação, que vale também sem o Code, entra na base **trocando** a frase do «arquivo INTEIRO» no canal pasta — a medir na réplica, com 508 bytes de folga; a pior com pasta + Code tem 2.330. **A E3 fica fora desta decisão.**

**Ordem:** primeiro a casa, por **uma última WO de conferência** — a regra que tira a WO de doc precisa estar escrita antes de valer, como na `D-170`; depois a WO de kit. A tabela da `i-N71` sai de cena: no lugar, o STATUS da casa carrega o alarme (erros que chegaram ao commit, por bloco e por WO).

## Riscos

- **O bloco perde a conferência no instante do commit.** O que o chat verificou no fim do turno pode mudar antes de o dono colar (ele mesmo edita, outra conversa grava). Remédio: o bloco sai no fim do turno que gravou; a conferência de volta compara o commit com o que o chat gravou e avisa. É mais fraco que o `sha1sum` da WO — e, em 73 WOs, o `sha1sum` não pegou nada.
- **«Pelo teste» vira desculpa nos dois sentidos:** o chat que quer o Code acha um item 3 em toda mudança; o que não quer pula o item 1. O motivo escrito na primeira linha da WO é o que deixa auditar; o fecho do bloco diz por que não houve WO, numa linha.
- **O caminho com a caixa errada** (o caso do My Little Lady) também acontece no bloco. O `git add` copia o caminho do `git status`, e o `git status` sujo no turno seguinte avisa.
- **A medida morre de novo.** A `i-N71` parou em 63 WOs sem ninguém ver. O alarme no STATUS tem de ser uma linha que o fecho lê, não uma tabela à parte.
- **O update do instalado:** quem tem o Code escrevendo STATUS (o fluxo atual do kit) muda de escritor. O prompt do update pergunta, e a resposta vira decisão no DECISIONS deles; sem resposta, fica como está. A Carreira e o GameDataHub já fizeram por transplante — o update tem de reconhecer isso, não reaplicar.
- **O teto das Instruções com o Code** (`C28`, 544/550): a linha nova troca a velha no mesmo comprimento ou encurta outra; medir na réplica.
- **O que a literatura diz contra esta recomendação:** revisão sem defeito achado ainda dá consciência do que mudou. Aqui o dono já é a consciência: ele roda o bloco ou o `/apply-wo` e lê o fecho.

## Ponto de decisão

1. **A casa: C1** (a WO só de doc vira bloco do chat; a de código fica WO), C0 ou C2?
2. **O kit: K1** (a variante como padrão do canal pasta com o Code, com o teste e a regra da troca exata também sem o Code), K2 ou K3?
3. **O teste de quatro itens** está certo, ou falta ou sobra item? (o item 3, o lote grande, é o mais discutível.)
4. **A tabela da `i-N71`** sai e o alarme vai para o STATUS?
