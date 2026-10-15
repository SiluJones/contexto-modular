# ANÁLISE — O feedback que os três projetos escreveram e o KCM não leu: triagem, levas e versão

> **Status:** Decidida em 2026-10-15 — o dono mandou seguir com a recomendação inteira. Leva 1 aplicada (wo0130, `1286fdf`, v1.123.0); leva 2 aplicada (wo0131, `357ccdf`, v1.124.0). Cartas: depois da wo0131
> **Data:** 261015 · **Base:** KCM `cb061c5` (v1.122.0, 19/19 · 106/106) · Sand-Land-Map `bad361f` · GameDataHub `7b15fd7` · satelite-web `5c970a1` — os quatro lidos no disco nesta conversa
> **Vira:** `meta/workorders/261015-wo0130-feedback-leva-1-molde-skills-e-versao.md` (leva 1) e `meta/workorders/261015-wo0131-feedback-leva-2-cerebro-instrucoes-e-livro.md` (leva 2) · **Decisão:** `D-158`, `D-159` · **Origem:** pedido do dono em 2026-10-15 («antes das cartas, outra leitura, cuidadosa»); `D-157`

---

## Problema

A seção «Feedback para o Kit» do `meta/IDEAS.md` do KCM tem a última entrada em **2026-09-02**. Desde então os três projetos que usam o kit escreveram, cada um na sua própria seção de feedback, o que esta triagem organiza em **58 entradas** endereçadas a nós. Nenhum foi lido até hoje. O GameDataHub nunca foi lido, desde julho.

Não foi desatenção, e a carta 04 ao Sand-Land já tinha dito isso: **nada dispara a leitura dessas seções.** Elas moram no repositório do remetente, e o KCM só as abria quando chegava uma carta. Com a pasta vinculada (`D-157`), o chat do KCM alcança os três repositórios direto, e a leitura ficou barata. O que falta é o gatilho.

O custo de não ler é medido nesta mesma leitura. Um verbete do Sand-Land (`FK-AX`, de 28/09) descreve **exatamente** o desvio que o Code teve ao aplicar a wo0129, duas semanas depois: «inserir depois» aplicado como «trocar». E o satelite-web ainda não tem o `GIT_OPTIONAL_LOCKS=0`, que o GameDataHub mediu em 01/10 e o kit publicou em 13/10.

## O que foi lido — e o que não

| Projeto | Lido inteiro | Entradas na triagem |
|---|---|---|
| Sand-Land-Map | seção de feedback, de `FK-AG` a `FK-AZ` (desde a carta 04, de 15/09), mais `IDEIA-084` | 20 |
| GameDataHub | as duas seções de feedback inteiras (levas de 18/07, 18/09, 25/09, 28/09, 29/09 e 02/10) | 25 |
| satelite-web | seção de feedback inteira; diff de `meta/CEREBRO.md`, Instruções e `.claude/` de `760411f` a `5c970a1` | 13 (os itens de 25/08 e 02/09 já tinham resposta e não entram) |

**Método de triagem:** cada item foi procurado **pelo fato, não pela frase**, no que o kit gera hoje (CEREBRO, Instruções, molde de WO, as três skills e o prompt de atualização, extraídos do `index.html` de `cb061c5` com `buildClaudeMd`, `buildInstr`, `buildCodeKitFiles` e `buildUpdatePrompt` em modo Code). **Não li:** os `DECISIONS` inteiros dos três (a carta 04 prometeu isso para o Sand-Land; fica para a próxima leitura, com marcador) e as análises de domínio.

## Triagem

Legenda: **✔ coberto** (o kit já tem o fato) · **◆ wo0129** (resolvido pela leva de 13/10) · **＋ adotar** · **✖ recusar** (com motivo) · **⌂ deles** (local ou já resolvido no projeto, sem ação aqui) · **◇ produto** (pede análise própria).

### Sand-Land-Map

| Item | Em uma linha | Destino |
|---|---|---|
| `FK-AG` | a string contada no checklist tem de ser **exclusiva do texto que a WO insere** (resolve o alvo; a `FK-R` resolveu o valor) | ＋ molde |
| `FK-AH` | **teste do outro autor:** arquivo com seção de outro autor nunca vai inteiro | ＋ CEREBRO |
| `FK-AJ` | com Code, a seção «a entrega é por ARQUIVO COMPLETO» contradiz o próprio CEREBRO (medido: está lá em modo Code) | ＋ CEREBRO (condicional) |
| `FK-AI` / `FK-AN` | o prompt de update manda «compare» sem método; comparar **por bloco**, com contagem **por arquivo** | ＋ prompt de update |
| `FK-AK` | instrução de edição manual entrega o comando que **mostra** o alvo; em JSON, o comando que edita | ＋ CEREBRO |
| `FK-AL` | arquivar ≠ apagar no vocabulário do fecho | ＋ CEREBRO (o item «Arquivar» genérico não diz «mover»; só a seção do canal diz) |
| `FK-AM` | teto das Instruções medido, nunca gravado | ◆ (`wc -m`, seção do canal) |
| `FK-AO` | comando que o executor roda usa `/`; o dono cola `\` só onde o CMD exige | ＋ CEREBRO + `CLAUDE.md` do kit |
| `FK-AP` | estrutura que se duplica vira **contagem esperada** como passo da skill, não parágrafo de cuidado | ＋ `/wrap` (junto da `i-N64`) |
| `FK-AQ` | comando de conferência que o autor não rodou no ambiente do executor vai marcado **«não testado»** | ＋ molde |
| `FK-AR` | item de roteiro descreve o **estado final**, não a ação | ＋ roteiro |
| `FK-AT` | estado intermediário num roteiro tem de ser **representável no modelo** | ＋ roteiro |
| `FK-AS` / `FK-AU` | referência a documento ou arquivo de terceiro cita **trecho literal**, nunca número de linha ou seção | ＋ molde |
| `FK-AV` | o handoff **nunca** é versionado nem entra nas pastas do projeto | ＋ CEREBRO (linha do Handoff) |
| `FK-AW` | o banner «Canal dos meta» decide quem **aplica**; edição numerada em doc reservado ao chat é contradição, e o `/apply-wo` para | ＋ molde + `/apply-wo` |
| `FK-AX` | inserção só com âncora de **linha inteira**; preferir TROCAR com a âncora dentro do texto — «substituir não tem lado» | ＋ molde (com o caso da wo0129) |
| `FK-AY` | Instruções descrevem o canal pelo que responde a pergunta; réplica por `git archive` | ◆ |
| `FK-AZ` | teto por `wc -m`; duas cópias das Instruções; ritual em dois tempos | ◆ |
| `IDEIA-084` | quem põe o rodapé de coautoria no commit da WO | ＋ molde: o bloco da WO **não** traz rodapé; quem commita põe o seu (medido na wo0129: o Code trocou o modelo do bloco pelo do ambiente) |
| `IDEIA-075`…`083` | mapa, cartografia, tiles | ⌂ |

### GameDataHub

| Item | Em uma linha | Destino |
|---|---|---|
| 02/10 · modo «chat com disco» | tratar como modo, como o Code | ◆ (eixo canal) |
| 02/10 · raias não mudam com disco | — | ◆ (seção do canal) |
| 02/10 · `GIT_OPTIONAL_LOCKS=0` | — | ◆ |
| 02/10 · esperado **deduzido** não é condição de parada | rótulo «deduzido — relate o cru, não pare» | ＋ molde |
| 02/10 · contador do teto no `/wrap` | — | ＋ `/wrap` (mede `wc -m` quando o commit toca as Instruções) |
| 18/09 · rótulo `BUG-00N` × `FIX-N` (segunda vez) | variável de rótulo na montagem | ◇ produto — custa uma terceira troca manual a cada adoção; vira `i-N65` |
| 18/09 · migração de vocabulário | arquivo antigo **não se renomeia**; o manifesto diz isso junto do vocabulário novo | ＋ manifesto de update |
| 18/09 · comentário dentro do bloco do editor do `.flatdropignore` | — | ✔ (o gerado já põe comentário só fora do bloco — `C24`) |
| 18/09 · correspondência dormente | — | ⌂ |
| 18/09 · fim de linha misto; `git ls-files --eol` | — | ✔ (molde, wo0118/0127) |
| 18/09 · comando do Próximo em **bloco cercado**; caminho com barra normal | `\_` vira `_` em código inline | ＋ CEREBRO (bloco de fecho) |
| 18/09 · barra invertida no executor | — | ＋ (mesmo item que `FK-AO`) |
| 18/09 · `.gitattributes` no kit de arranque | — | ✖ normalizar fim de linha num repositório vivo reescreve o índice inteiro; é migração do dono, não arquivo de arranque. O molde já manda medir (`--eol`) |
| 18/09 · simular a WO **a partir do próprio texto** | e comparar com o que foi testado | ＋ molde (pegou uma linha em branco perdida na wo0129, antes de entregar) |
| 18/07 · código em pt-BR por opção | — | ◇ junto da `i-N65` |
| 18/07 · padrão de nome de spec | — | ✔ |
| 18/07 · `commands/` legado | — | ✔ |
| 25/09 · DECISIONS arquiva **por evento**, não por tamanho | o kit ainda diz «~700 linhas» | ＋ CEREBRO (tabela de manutenção) |
| 25/09 · `**Status:**` obrigatório no modelo de BUG/FIX | — | ＋ modelo de DECISIONS |
| 28/09 · previsão de nomes do FlatDrop morreu | — | ⌂ para o FlatDrop (outro destinatário) |
| 28/09 · sem mount, a ferramenta do Projeto entrega o arquivo inteiro | — | ＋ CEREBRO (canal de reserva) |
| 28/09 · **versionar ≠ promover** uma sonda | — | ＋ CEREBRO (sonda) |
| 29/09 · sonda de desempenho com **oráculo** | — | ＋ CEREBRO (sonda) |
| 29/09 · antes de promover, conferir que a sonda chama o **código de produção** | — | ＋ CEREBRO (sonda) |
| desvios vivos (pt-BR, `BUG-`, «Notas», `tests/`, cabeçalho de log) | — | ⌂ registrados lá como desvio — o mecanismo funcionou |

### satelite-web

| Item | Em uma linha | Destino |
|---|---|---|
| 12/10 · Instruções com fonte única no repo, tamanho medido | — | ◆ |
| 28/08 · número absoluto como **piso**, não igualdade | — | ✔ em parte (a `FK-R` troca o número pelo comando); o piso fica como alternativa no molde ＋ |
| 28/08 · lint/build com baseline vermelho: aceite por **delta** medido com `git stash` | — | ＋ molde |
| 28/08 · ao medir ausência, **abra o artefato antes de concluir por quê** | registrado aqui em 02/09, nunca implementado | ＋ CEREBRO |
| 25/08 · entrega incremental em arquivo separado (`DEC-034`) | — | ✖ com Code a WO **é** o delta, e com o canal pasta o arquivo vai inteiro para o lugar dele; o caso que sobra (sem Code, sem pasta) é raro e a regra «arquivo completo» o cobre. Recusa com motivo, não esquecimento |
| 11/07 · reler o IDEAS da frente antes de especificar | — | ＋ CEREBRO (análise/spec) |
| 10/07 · infra multi-máquina, Vercel Hobby | — | ✖ conhecimento de infra de um stack; não é regra de kit |
| 21/09 · o exemplo do fecho («aplicada, aqui o relatório») contradiz o relatório em arquivo | medido: o exemplo continua no CEREBRO gerado | ＋ CEREBRO |
| 21/09 · origem do carimbo de hora nas **skills** | o molde tem `date +%y%m%d-%H%M`; as skills não | ＋ skills |
| 29/09 · roteiro do dono **no corpo da resposta** | — | ＋ CEREBRO (fecho) — o tipo «roteiro» existe desde a wo0126; falta onde ele vai |
| 06/10 · **corpo mínimo** do relatório do `/apply-wo` | saída crua, «o que muda para quem usa», «o que olhei além da WO» | ＋ `/apply-wo` |
| 07/10 · a linha do fecho nas Instruções lista **todos** os itens, uma palavra cada | regra só no CEREBRO não sobrevive a uma compactação | ＋ Instruções (custo de teto: medir) |
| novo, 13–15/10 · o chat **aplica SQL pelo MCP** | mudança de raia, com guarda (ensaiado, conferido, advisors) | ⌂ observado; a carta pergunta se é decisão registrada e se vale como padrão |

### Saldo

**58 entradas** (contadas pelas linhas das três tabelas acima; uma linha pode juntar dois verbetes irmãos, como `FK-AI`/`FK-AN`): **37 a adotar** (uma delas «em parte») · **7** já resolvidas pela wo0129 · **4** já cobertas · **3** recusadas com motivo · **2** de produto · **5** locais deles. **Nenhum item a adotar muda o que a raia faz**: todos são regras de forma, de método ou de vocabulário, e quase todos nasceram de um erro medido.

## Recomendação

### 1. O gatilho que faltava (o achado principal)

**Um livro de leitura**: uma tabela no topo da seção de feedback do `meta/IDEAS.md` do KCM, uma linha por projeto — *projeto · onde fica a seção dele · último item lido · data*. Hoje ela abre assim: Sand-Land `FK-AZ` / `IDEIA-084`, GameDataHub «02/10», satelite «12/10».

**O gatilho:** toda conversa do KCM em que a pasta de um vizinho estiver concedida confere, na abertura, se a seção dele tem item além do marcador. É um `grep` por projeto, e o resultado entra no `Base:`. **No kit**, a seção «Correspondência entre projetos» ganha uma linha: com pasta vinculada, o destinatário lê a seção de feedback do remetente direto, e registra até onde leu.

### 2. Versão: a regra que faltava, e o corte

**Não há regra escrita para cortar versão**, e por isso a v1.122.0 (28/08) atravessou 23 WOs que mudaram o que o kit gera, inclusive o 19º nicho e o eixo canal. Isso é defeito, não estilo: o carimbo de versão é como um projeto instalado sabe que está atrás (`D-137`). Projetos que puxarem o kit hoje recebem «v1.122.0» com conteúdo de outubro.

**Regra proposta** (vai para o CEREBRO da casa e para o `/wrap`): *WO que muda o que o kit **gera** corta minor na mesma WO — `KIT_VERSION`, topo do CHANGELOG e cabeçalho do STATUS juntos (o `C54` já exige os três iguais). WO que só mexe na casa não corta.* A decisão é técnica, decorre da regra e não passa pelo dono.

**O corte:** **v1.123.0** na primeira WO desta leva, com uma entrada de CHANGELOG que resume as decisões `D-138` a `D-157` (fonte: `DECISIONS`). A reconstrução das v1.102–v1.119 segue na `i-N59`, separada.

### 3. As levas

Duas WOs, divididas por superfície e não por remetente. Assim cada uma tem um harness que faz sentido sozinho e uma conferência no `C43` dos dois lados.

- **wo0130 — o molde de WO, as skills e o roteiro** (v1.123.0): `FK-AG`, `FK-AQ`, `FK-AS`/`FK-AU`, `FK-AW`, `FK-AX`, `IDEIA-084`, o «deduzido», o piso, o delta com baseline, a simulação a partir do texto, o roteiro (`FK-AR`, `FK-AT`, no corpo da resposta), o corpo mínimo do relatório, a origem da hora nas skills, e o `/wrap` com contagem de estrutura (`FK-AP` + `i-N64`) e medição do teto. Mais a regra de corte de versão.
- **wo0131 — CEREBRO, Instruções e prompt de update** (v1.124.0): `FK-AH`/`FK-AJ`, `FK-AK`, `FK-AL`, `FK-AO`, `FK-AV`, `FK-AI`/`FK-AN`, o bloco cercado, DECISIONS por evento e `Status:` obrigatório, a ferramenta do Projeto como reserva, as três regras de sonda, abrir o artefato antes de concluir por que falta, reler o IDEAS da frente, o exemplo do fecho, a linha do fecho nas Instruções e o livro de leitura (kit e casa).

Cada regra entra **nos dois lados** com o mesmo texto — o kit gera, a casa carrega — e o `C43` ganha uma cláusula por regra que tiver superfície instalada. A `i-N65` (rótulo `BUG`/`FIX` e código em pt-BR na montagem) fica registrada como produto, com análise própria.

### 4. As cartas — depois da wo0131, e por quê

As cartas saem **depois** das duas WOs, como a 04: dizendo o que entrou, com versão e commit, e não o que vai entrar. Promessa em carta envelhece quando a WO desvia, e os três projetos leem a carta como fato. **Exceção:** dois itens de segurança não podem esperar e não dependem do kit:
- **satelite-web sem `GIT_OPTIONAL_LOCKS=0`** — um `git status` comum do chat deixa `.git/index.lock` e trava o Code.
- **Segredo em pasta-pai lida a cada turno** — um `cf_clearance` em `- Comando.txt` (GameDataHub) e um `.env` (satelite-web).

Esses dois o dono resolve hoje, com uma frase no chat de cada projeto (texto pronto no fecho desta conversa).

**Onde a carta é entregue:** na pasta-pai do destinatário, gravada pelo chat do KCM — o canal que o chat de lá já lê a cada turno. A cópia do KCM fica na nossa pasta-pai e é arquivada movendo, como toda correspondência. Nenhuma das duas é versionada.

## Riscos

- **Leva grande, regras pequenas, superfícies muitas.** Trinta e sete regras em seis superfícies é a classe de WO em que âncora e checklist erram. Mitigação: duas WOs, réplica com aplicação **a partir do texto da WO**, e só âncora de linha inteira (`FK-AX` aplicada a nós mesmos já na wo0130).
- **Teto.** A linha do fecho nas Instruções e o livro de leitura custam caracteres. O `+Code` está em 546/550. Tudo o que for do ramo do Code vai para o CEREBRO ou para as skills, nunca para as Instruções.
- **O livro de leitura é mais uma regra em prosa.** Ele só funciona se for barato e se o resultado aparecer no `Base:`. Vigiar: se a próxima leitura atrasar de novo, vira check (comparar o marcador com o último ID de cada seção).
- **Cortar duas versões em dois dias** parece ruído. Não é: cada uma muda o que o kit gera, e é para isso que existe o número.

## Ponto de decisão

1. **A triagem**: algum item mudaria de destino? Os candidatos naturais a divergir são as três recusas (`.gitattributes`, entrega incremental, infra).
2. **O livro de leitura** com gatilho na abertura da conversa — ou um check do harness desde já?
3. **A regra de versão** como escrita aqui. *Recomendação: decidida, porque é consequência da `D-137`, e não preferência.*
4. **Duas WOs nesta ordem**, com as cartas depois da segunda.

## Desvio na execução (registrado pelo chat ao escrever a wo0130)

- **A wo0130 leva 16 cláusulas novas ao `C43`, não uma por regra.** A regra da hora mora nas duas skills e é uma cláusula com dois alvos; a regra da versão é só da casa e não tem par gerado. `C43`: 46 → **62**.
- **A regra do `/wrap` foi reescrita para passar no `C49`:** a primeira versão citava «Última sessão», vocabulário de cadência que o kit revogou; ficou «o bloco do topo do STATUS», que vale para o kit e para a casa.
- **A wo0130 toca o cabeçalho do `meta/STATUS.md`** (só o número da versão), porque o `C54` exige STATUS e `KIT_VERSION` iguais no mesmo commit. Exceção de raia declarada na `D-158`.

## Desvio na execução (registrado pelo chat ao escrever a wo0131)

- **A linha do fecho nas Instruções não lista os cinco itens.** A sugestão do satelite-web (07/10) colide com a `D-142`, que proíbe o resumo de listar os campos separados por «·» — o `C19` acusou. Entrou a contagem: «o esqueleto tem cinco itens; sem saber nomeá-los, abra-o». A forma longa da frase estourou o combo do `narrative` (7.611 > 7.600) e foi encurtada.
- **O teto está quase cheio nos dois eixos:** padrão 6.662/6.900, `+Code` 546/550, combo 7.580/7.600. A próxima regra que precisar estar nas Instruções vai exigir cortar outra — candidata a análise própria antes da próxima leva.
- **Duas correções na skill `apply-wo` da casa vieram do relatório da wo0130**, não da triagem: o fim de linha afirmado (todo `.md` LF) estava errado, e o caminho do argumento dobrava `meta/workorders/`.
