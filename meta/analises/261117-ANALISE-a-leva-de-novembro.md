# ANÁLISE — A leva de kit de novembro: o que os projetos do dono devolveram depois do mapa inteiro, e o que entra agora

> **Status:** Decidida (2026-11-17, KCM 28: as três como recomendado — três WOs, K1, K2 e K4; o processo comercial no `design` e no `client`; o enxugamento do CEREBRO numa análise própria depois da WO C, com a leva crescendo a base no máximo 1,5 KB)
> **Data:** 261117 · **Base:** v1.147.0, HEAD `9f5bd20` (wo0181), árvore limpa (só `?? .claude/launch.json`)
> **Vira:** três WOs de código — a WO A na wo0182 (v1.148.0), a WO B na wo0183 (v1.149.0; a E11 era metade do que dizia: o `SPEC.md` já se declarava modelo, faltava o prompt C, que mandava preencher também o `LOG-TEMPLATE.md`), a WO C na wo0184 (v1.150.0), com o teto do custom composto incluído pelo dono — a `i-N98`, o Cinzeiro —; o enxugamento do CEREBRO numa análise própria depois da WO C · **Decisão:** `D-185`

## Problema

O mapa dos projetos do dono terminou em 17/11 (a wo0181). Desde a análise do `dev` (`261115`), o IDEAS acumulou **24 entradas abertas** (a `i-N74` à `i-N97`, com sobras de algumas mais antigas). A maioria vem de projeto parado: o peso é de **evidência de desenho**, não de pedido. Três vêm de projeto vivo, e pesam mais: o cardápio de uma cliente no Reino Unido (nicho Design Visual, ativo, pago; `i-N95`), o got-legends (`dev`, reativado em 14/11; `i-N92`) e o Negócios e Licitações (`business`, com dado real; `i-N88`).

A pergunta é o que vira mudança no gerador agora, em quantas WOs, e o que espera com gatilho. Se nada for feito: o cardápio segue num nicho que não tem o processo comercial cuja falta custou horas não pagas no primeiro cardápio do dono (`i-N96`), e cada conversa de cada projeto-usuário continua abrindo com um CEREBRO de 95 a 115 KB.

## Restrições / o que foi medido

**1. O teto das Instruções e o peso do CEREBRO, por nicho** `[medido em réplica: o index.html do HEAD 9f5bd20, sha1 f5ac3fd4; sonda $HOME/kcmtools/medir-kit.js; canal pasta, sem a linha do SO, sem grupo]`

| Nicho | Instruções | com o Code | CEREBRO (bytes) | com o Code |
|---|---|---|---|---|
| narrative | 5.944 | 6.493 | 108.346 | **114.821** |
| game | 5.541 | 6.090 | 102.982 | 109.443 |
| dev | 5.279 | 5.456 | 101.864 | 108.336 |
| design | 4.986 | 5.535 | 99.948 | 106.378 |
| client | 4.891 | 5.440 | 99.790 | 106.264 |
| marketing | 4.641 | 5.190 | 99.260 | 105.710 |
| business | 4.581 | 5.130 | 99.512 | 105.978 |
| custom (2 arquivos) | 3.093 | 3.642 | 95.156 | 101.553 |

Teto: 6.900 no padrão, 7.600 com os modos. Três leituras:

- **O padrão tem folga:** o pior nicho (`narrative`) tem 956 caracteres livres; o `design`, 1.914. Uma linha nova nas Instruções de um nicho cabe.
- **O incremento do Code está cheio:** **549 de 550** em 18 dos 19 nichos (só o `dev` fica em 177). Nada entra no ramo do Code das Instruções sem antes liberar espaço. Isso trava a `i-N92` item 7, o item «Aplicar» da `i-N76` item 4 e a pendência 6 do handoff (o `/apply-wo` inline nas Instruções da casa, que é outro texto, mas a mesma família).
- **O peso do CEREBRO é da família, não da instância.** O `custom`, com dois arquivos, gera 95.156 bytes; o que é próprio do nicho soma de 4 a 13 KB. As seções da base que mais pesam (no `design`, canal pasta, sem o Code): Regras de higiene 18,6 KB · Princípios 12,8 · Bloco de fecho 9,7 · Transferência — canal de reserva 6,5 (no canal pasta é só reserva) · Sonda e exploração 5,9 · Como o assistente entrega 5,7 · Análise antes do compromisso 5,1 · Refino das Instruções 5,0 · Tabela de gatilhos 4,5 · Ao receber um template-update 4,0 · Medição delegada 3,5 · Canal do chat 3,3 · Correspondência entre projetos 2,7. As treze somam cerca de 88 KB. `[sonda $HOME/kcmtools/secoes.js]`

**2. O gatilho do enxugamento (`D-181`, «a terceira voz ou 110 KB no `dev`»).** O `dev` com o Code está em 108.336 (faltam 1,7 KB). Medida a família, o `narrative` com o Code **já passou**, com 114.821, e o `game` está em 109.443. Vozes de peso: o fileview (`i-N93` item 4: 106 KB contra 36 KB do anterior) e o got-legends (`i-N92` item 10: de 55 a 112 KB). O cardápio é medida do KCM, não voz deles: a pergunta da carta 01 («pesou?») ainda não teve resposta.

**3. O processo comercial (`i-N96`) no `src/` de hoje** `[grep em src/niches/, v1.147.0]`:

- **`design`:** tem o comportamento «Guarda escopo e rodadas», o `PROJETO.md` com rodadas e exclusões e o `REVISOES.md`. **Não tem** nenhuma das quatro peças: portas de avanço, preço aceito por escrito, conteúdo congelado antes de diagramar, a marca de origem da sugestão do assistente.
- **`client`:** já tem duas das quatro — «Confirma o combinado por escrito» (o `ACORDOS.md`, com o status confirmado por escrito × só verbal) e o «Yes-and» do escopo, mais o `FINANCEIRO.md` e o modelo de cobrança. Falta separar **valor aceito** de **escopo aceito**, e a marca de origem.
- **`marketing` e `business`:** nenhuma. O `marketing` trata «Marca/Cliente» como campo, sem relação comercial; o `business` não é trabalho por encomenda.

**4. O que o IDEAS dá como aberto e o `src/` já resolveu** (P8, «STATUS é pista»): a `i-N92` itens 3 e 9 (o STATUS que mente no topo; o update que não fecha com os dois `fusao`) estão no prompt do update desde a `D-181`, item 4; a `i-N80` item 2 (a seção «Feedback para o ASU» sem o ASU) desde a `D-178`; a `i-N80` item 4 (o git sem lock no prompt do update) desde a `D-181`, item 2. A WO que versionar esta análise acerta os cabeçalhos.

**5. O que segue sem nada no `src/`** (`grep -c`, zero ocorrências): o «mudou desde a vX» por arquivo no manifesto (`i-N74` item 3); o bloco literal da WO terminando em quatro crases (`i-N76` item 3); «instale as skills do pacote antes de qualquer WO» (`i-N80` item 8); a seção «WOs entregues» no LOG do `dev` (`i-N92` item 11); `emendada` como valor de Status (`i-N75` item 1); `conhecimento/` e a vigência de valor legal no `business` (`i-N88` itens 7 e 9); o conteúdo que se perde se não for feito agora, no `companion` (`i-N84` item 3); a permissão que expira (`i-N77`); o código com nome no kit (`i-N94`); `material-cliente` (`i-N95` item 1); a sugestão do assistente marcada (`i-N96` item 3).

**6. O processo comercial fora do kit (P13, para refinar e para refutar).** A prática de quem trabalha por encomenda confirma as quatro peças: a proposta com escopo e valor aceita por escrito antes de começar; aprovação escrita a cada etapa, com mudança depois dela indo para um pedido de mudança com o custo e o prazo; o conteúdo do cliente chegando antes da diagramação, porque é ele que mais atrasa. **O contraponto, também de lá:** o conteúdo congelado precisa de folga para o ajuste pequeno que aparece quando o texto entra no leiaute, e o processo tem de caber no tamanho do trabalho. Seis portas, onze regras e três artefatos obrigatórios (o `PROCESSO.md` do primeiro cardápio) pesam num trabalho de uma peça só. Fontes: [Sprintlaw, termos de cliente para design no Reino Unido](https://sprintlaw.co.uk/articles/client-terms-graphic-design-businesses-should-use-in-the-uk/); [Sprintlaw, pagamento por etapa](https://sprintlaw.co.uk/articles/web-design-milestone-payments/); [Rocketspark, travar o conteúdo antes do design](https://creativelaunchpad.rocketspark.com/blog/post/142848/should-you-start-web-design-before-locking-in-the-content/); [Emulent, atraso por ciclo de aprovação](https://emulent.com/resources/how-to-minimize-web-design-delays/).

**7. Dado de cliente.** O texto novo do repo não nomeia cliente nem empresa, nem traz preço real; o molde do processo sai do método do `PROCESSO.md` do primeiro cardápio (`Pictures\Cardapio`), não do conteúdo dele. Conferir com `git grep` antes da WO. O `PROCESSO.md` não foi aberto nesta análise (está fora das pastas concedidas): a WO A o lê antes.

## Opções consideradas

As 24 entradas se agrupam em cinco frentes. Cada uma diz o que entra, as vozes e a forma.

### K1 — O trabalho por encomenda (o Design Visual e o `client`) — a frente mais forte

| # | Item | Vozes | Forma proposta |
|---|---|---|---|
| E1 | **O processo comercial** (`i-N96` itens 1 e 2): portas de avanço; **preço aceito por escrito** como porta própria, separada de escopo aceito; conteúdo congelado antes de diagramar, com folga para ajuste pequeno; rodadas contadas; derivado com preço próprio; desconto como corte de escopo | 2 — o primeiro cardápio escreveu o `PROCESSO.md`; o projeto novo já trabalha com as portas 1 e 2 dele, sem combinar | `PROCESSO.md` **opcional** no `design`, molde enxuto que escala com o trabalho (peça única usa as três primeiras portas); no `client`, «valor aceito» como status próprio no `ACORDOS.md` |
| E2 | **A sugestão do assistente marcada** (`i-N96` item 3): pedido do cliente · proposta do assistente · em aberto, para a proposta não virar fato na sessão seguinte | 2, em nichos diferentes — o primeiro cardápio e o Botsu Route (o VOZ «proposto, não aprovado», que a `D-177` já pôs no `narrative`) | uma linha na base, ao lado da marca de origem do fato relatado (`D-119`) |
| E3 | **O insumo permanente fora do «Arquivar / Manter»** (`i-N95` item 1): o material do cliente (PDF, áudio, print, o chat exportado) mora numa subpasta própria da pasta-pai, que o fecho não lista como avulso | 1 projeto; vale também para o `research` (os logs do equipamento do Notebook) e para todo nicho com cliente | uma linha na seção «Canal do chat» da base |
| E4 | **Nome de pasta sem dado pessoal** (`i-N95` item 4): o telefone da cliente no nome da pasta entra no contexto a cada listagem | medida do KCM; parente da `i-N2` (dados pessoais nos documentos) | uma frase na seção de privacidade da base |
| E5 | **O código vem com o nome dele** (`i-N94`): `DEC-`, `FIX-`, `wo` no fecho e nas listas de pendência | o dono, na casa; os projetos-usuário falam a mesma língua | uma linha na seção «Idioma» da base (hoje com 77 bytes) |
| E6 | **A permissão que expira** (`i-N77`): pedido sem resposta no turno vira, no mesmo turno, o arquivo no lugar e o passo a passo para o dono, com as duas saídas | o satelite-web, e o Observatório que o adotou | uma linha na seção «Canal do chat», junto de «apagar vem desligado» |

**Opções para o alcance da E1 (a pergunta do handoff):** **(a)** só no `design`: o lugar das duas vozes, e o mais barato. **(b)** `design` + `client`: o `client` já tem metade e ganha só as duas peças que faltam — a mesma lacuna, que o dono vai sentir quando abrir o projeto `client` «por teste» para gerir os de design (`[relatado pelo dono, 17/11]`). **(c)** `design`, `client` e `marketing`: o `marketing` só é trabalho por encomenda quando é agência ou freelance, e nenhum projeto do dono roda o nicho (o que ele considera é marketing da loja, interno). **(d)** um bloco comum para todo nicho com cliente pagante, ligado por campo: o maior alcance e o mais caro, sem voz fora do Design Visual. O `business` fica fora em qualquer opção: não é trabalho por encomenda. **Descartada:** o `PROCESSO.md` do primeiro cardápio copiado como molde inteiro (seis portas, onze regras, três artefatos obrigatórios) — é o contraponto da pesquisa: pesa mais que o trabalho de uma peça.

**Adiado na K1:** a transcrição de áudio no chat (`i-N95` item 2): uma voz, e depende do ambiente da VM do chat (o `sherpa-onnx`, o `ffmpeg`), que muda. Fica no IDEAS como técnica candidata.

### K2 — O update do projeto atrasado e o DECISIONS

| # | Item | Vozes | Forma proposta |
|---|---|---|---|
| E7 | **O Status do DECISIONS** (`i-N75` item 1): a higiene manda arquivar a entrada «resolvida» e, ao pé da letra, tira do vivo as FIX cuja lição é o conteúdo; o conjunto não diz emenda; o molde traz outro conjunto (`aceita \| superada por DEC-X`, 13 ocorrências) | **3** — Mapoteca, satelite-web, FrameMatch — e o KCM, que achou o segundo conjunto | um conjunto só, nos dois lugares, com `aceita — emendada por DEC-X`; FIX fica enquanto a lição valer; par novo no `C111` |
| E8 | **A resposta padrão por arquivo no manifesto** (`i-N76` item 2): ao lado da natureza, o que se espera (`adotar`, `fundir`, «fica o vivo») | 3 — Cancioneiro, GameDataHub, satelite-web (cada um pediu uma forma de «dizer mais por arquivo») | uma coluna no manifesto, derivada da natureza |
| E9 | **Instalar as skills do pacote antes de qualquer WO** (`i-N80` item 8): a WO de migração se aplica com a skill que ela cria | 1 — PrintImposer | uma frase no prompt do update |
| E10 | **O bloco literal da WO termina em quatro crases** (`i-N76` item 3): título dentro do bloco quebra o aplicador que delimita por cabeçalho | 1 — Cancioneiro, duas WOs paradas | o molde de WO e a skill `apply-wo` geradas |
| E11 | **O `SPEC.md` é lido como documento a preencher** (`i-N85` item 3, `i-N91` item 9) | 2 — Observatório (moveu as specs reais para `meta/specs/`), CDC | o `SPEC.md` do `dev` vira modelo declarado: o nome diz que é molde, e o pedido de abertura não o lista entre os arquivos a preencher |

**Adiados na K2:** o «mudou desde a vX» por arquivo (`i-N74` item 3) pede uma tabela da versão em que cada molde mudou pela última vez, mantida a cada WO — custo permanente, e um check para ela não derivar; vale uma análise própria, junto do comparador por bloco do satelite-web (`i-N75` item 4). A `i-N92` item 7 (as Instruções com o Code mandando o commit pronto) espera: o incremento do Code está em 549/550, e é uma voz. A `i-N92` item 8 (o marcador de seção vazia), a `i-N80` itens 5 a 7 e os antigos de julho: uma voz cada.

### K3 — O que sobrou do `dev`

A análise `261115` já fez duas WOs. Sobram itens de uma voz cada: a `i-N89` itens 2, 5 e 6, a `i-N90` itens 5, 6 e 8, a `i-N91` itens 4 a 8 (o 9 foi para a E11) e a `i-N93` item 8 (dado, sem mudança). **Proposta: nada nesta leva.** Com duas WOs recentes no nicho e nenhum projeto `dev` ativo pedindo, o que sobrou espera a segunda voz.

### K4 — Por nicho, com dado de campo

| # | Item | Vozes | Forma proposta |
|---|---|---|---|
| E12 | **O MODELO-FINANCEIRO por tipo de negócio** (`i-N88` itens 3 a 5): o de hoje é de startup (CAC, LTV, runway); no varejo e no B2G decidiram margem por categoria, ticket, preço mínimo por divisor e preço vencedor ÷ custo; o «Tipo de negócio» ganha varejo físico e fornecedor do governo; a lente de ciclo financeiro | 1 projeto, **medido com dado real** (a resposta à carta 02) | o molde varia pelo campo «Tipo de negócio»; giro e ciclo financeiro «quando houver CMV» |
| E13 | **«Escopo» de escolha múltipla e valor legal com vigência** (`i-N88` itens 6 e 9) | 1 | o campo vira caixas; a convenção «valor, data de vigência e fonte» |
| E14 | **O que se perde se não for feito agora** (`i-N84` item 3): conteúdo com janela de tempo no `companion` | 1 — o coral-island, com o ano 1 perdido | uma pergunta no `ARMADILHAS.md` e a rota da estação abrindo por ela |
| E15 | **O `career` pede o currículo na primeira sessão** (`i-N82` item 4) | 1 — quatro sessões perguntando o que o currículo respondia | o prompt de abertura do nicho |

### K5 — Esperam, com gatilho

A `i-N97` (diagnóstico técnico no Pesquisa: o material do hardware do PC do trabalho); a `i-N65` (rótulo de bug e idioma do código na montagem: análise própria); a `i-N61` (`product` e `comics` nunca rodados: dado); a `i-N83` item 1 (a IA de produção no `animation`: a `D-179` diz que entra quando um projeto real pedir); a `i-N86` itens 1 e 4 (o Custom de jogo, `i11`); os adiados da `261112` (N7, N8, N10); a `i-N82` itens 1 a 3 e 5, a `i-N83` item 2, a `i-N85` itens 2 e 4 a 7, a `i-N88` itens 7, 8 e 10 (uma voz cada, ou conferir no pacote quando o projeto reativar); a `i-N55` a `i-N58`, a `i-N63`, a `i-N69` (gatilho próprio).

### K0 — O peso do CEREBRO (atravessa todas)

**(a)** Esperar a `D-181` ao pé da letra (110 KB no `dev` ou a terceira voz). **(b)** Dar o gatilho por cumprido pela família — o `narrative` com o Code tem 114.821 bytes — e abrir a análise do enxugamento **depois** desta leva. **(c)** Começar o enxugamento já, antes das WOs. O que pesa contra (c): o enxugamento mexe nas 13 seções da base, que os checks cobram cláusula a cláusula (o `C43` tem 76), e não se faz bem misturado com conteúdo novo. O que pesa contra (a): a regra de 15/11 nasceu da instância (`dev`), e medir a família é a regra da KCM 26.

## Recomendação

**Três WOs de código, uma frente cada, e o enxugamento logo depois numa análise própria:**

- **WO A — K1** (E1 a E6), opção **(b)** para o alcance: `PROCESSO.md` opcional no `design`, valor aceito no `ACORDOS.md` do `client`, e as cinco linhas da base (E2 a E6). Corta a v1.148.0. Leva junto o hash da wo0181 no STATUS e os cabeçalhos do IDEAS que a medida 4 corrigiu.
- **WO B — K2** (E7 a E11). Corta a v1.149.0.
- **WO C — K4** (E12 a E15). Corta a v1.150.0.
- **K0 (b):** a análise do enxugamento abre depois da WO C; até lá, **a base cresce no máximo 1,5 KB nesta leva**, medido na réplica, e cada WO declara o quanto. A WO A é a que mais toca a base.

**Por quê.** A K1 é a única frente com projeto vivo e pago, e duas vozes sem combinar. A opção (b) põe a peça onde já existe a metade dela (o `client`) e deixa o `marketing` esperar um projeto que trabalhe para fora. A K2 tem a entrada mais votada da leva (a E7: três vizinhos e o KCM) e é defeito, não desejo. A K4 é barata e tem dado real. A K3 e a K5 esperam a segunda voz ou o gatilho delas. O enxugamento fica fora das três para que cada WO meça o próprio acréscimo contra uma base que ainda não mudou.

## Riscos

- **Crescer a base antes de enxugá-la:** as quatro linhas da WO A podem cair no enxugamento seguinte. Mitigação: elas vão para seções que o enxugamento não deve cortar («Idioma», «Canal do chat», privacidade), e o teto de 1,5 KB na leva.
- **O processo virar peso no trabalho pequeno** (o contraponto do P13): o molde é opcional e diz que escala; a primeira conferência real é o próximo projeto de design do dono — vigiar se o assistente cobra as seis portas de um trabalho de uma peça.
- **Dado de cliente no repo público:** o molde não leva nome, preço nem frase dos dois cardápios. `git grep` pelo nome das clientes e dos estabelecimentos antes de cada WO.
- **O incremento do Code em 549/550:** nenhuma das três WOs toca o ramo do Code das Instruções. Se uma precisar, para e volta aqui.
- **A E7 muda o que os projetos já escreveram:** o Status novo vale para as entradas novas, como o satelite-web fez com as 314 antigas; o prompt do update diz que as antigas não se reescrevem.
- **O `marketing` fora pode estar errado** se o dono abrir um projeto de agência ou freelance. Gatilho: o primeiro projeto `marketing` com cliente de fora.

## Ponto de decisão

1. **Quantas WOs:** uma (só a K1), duas (K1 e K2) ou **três (K1, K2 e K4 — a recomendada)**.
2. **O alcance do processo comercial (E1):** só o `design`; **`design` + `client` (a recomendada)**; `design`, `client` e `marketing`; ou um bloco para todo nicho com cliente pagante.
3. **O peso do CEREBRO:** esperar a `D-181`; **dar o gatilho por cumprido e abrir a análise do enxugamento depois desta leva (a recomendada)**; ou enxugar antes das WOs.
4. **Para a WO A:** acesso à pasta `Pictures\Cardapio`, para ler o `PROCESSO.md` do primeiro cardápio antes de escrever o molde (só o método entra).
