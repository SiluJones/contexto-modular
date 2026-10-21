# ANÁLISE — As contradições do que o kit gera, o pacote que não diz a própria versão, e o CEREBRO no canal pasta

> **Status:** Decidida em 2026-10-20 — os cinco pontos aceitos pelo dono como recomendados; vira a wo0139 (WO-1) e, depois, a WO do CEREBRO no canal pasta (WO-2)
> **Data:** 261020 · **Base:** v1.129.0, commit `ef9695a` (`main` = `origin/main`); medido numa réplica `git archive` de `1d31add` com a wo0138 aplicada (o `src/` é o mesmo do HEAD); GameDataHub `1aab2ab` lido no disco
> **Vira:** `meta/workorders/261020-wo0139-contradicoes-e-pacote-com-versao.md` (WO-1) · **Decisão:** `D-166` · **Origem:** o item de 2026-10-19 do GameDataHub («Pacote v1.127.0 e carta 02: o que o merge achou no próprio pacote», `meta/analises/261019-ANALISE-merge-kcm-v1127.md` deles); `i-N72`; `i-N70`

## Problema

Três defeitos do que o kit entrega a um projeto no canal pasta, achados em sequência na entrega do pacote v1.129.0:

1. **O CEREBRO e as Instruções geradas se contradizem.** Quem faz o merge lê o pacote inteiro contra si mesmo; o GameDataHub fez isso e achou quatro pares de regras que não podem valer juntas. O KCM não acha esse tipo de defeito: o harness confere que cada regra **existe**, nunca que duas regras do mesmo texto **concordam**. As quatro têm a mesma origem — uma regra nova entrou e a antiga, que ela corrigia, não foi tocada.
2. **O pacote não diz de que versão é, em lugar que o receptor confira** (`i-N72`). O pacote entregue em 19/10 era da v1.127.0, anunciado como v1.129.0; e o zip descompacta numa pasta com outro nome que o prompt manda procurar.
3. **O CEREBRO, no canal pasta, ainda fala do mount nas regras que disparam todo turno** (`i-N70`). O aviso da seção «Canal do chat» declara essas menções como reserva, mas a tradução fica por conta do modelo, a cada turno.

## Restrições / o que foi medido

### 1. As quatro contradições — todas presentes na v1.129.0

`[medido em sandbox]` — CEREBRO e Instruções do nicho dev, canal pasta; a coluna «Quando» diz em que combinação de modo os dois lados aparecem juntos.

| # | Lado A (onde nasce) | Lado B (onde nasce) | Quando |
|---|---|---|---|
| 1a | «Em ambos os casos, a entrega é por ARQUIVO COMPLETO, nunca por blocos soltos» — `UPDATE_PROTOCOL.intro` (template l. 1224), incondicional | o parágrafo seguinte e a seção «Ao final da conversa, o assistente REGISTRA o que falta», que mandam WO para doc grande | Code ligado |
| 1b | tabela de gatilhos: «Fim da conversa \| Entrega os arquivos completos afetados» — `TRIGGERS_BASE` (l. 1207), incondicional | a mesma seção «REGISTRA o que falta» | Code ligado |
| 2 | protocolo de update: «O assistente **não tem como distinguir os dois casos**, então reporta como choque… e não remove sozinho» — `buildClaudeMd` (l. 2599), incondicional | o manifesto e o prompt da mesma versão: «agora ele e DECIDIVEL» (`D-137`, wo0106 — mudou o manifesto e o prompt, não o CEREBRO) | sempre |
| 3 | medição delegada: «É bloco colável… não crie arquivo nem pasta para ele» — `buildClaudeMd` (l. 2683), incondicional | o fecho no modo Code: «Nunca empurre bloco para o usuário colar no executor… **Isso inclui pedido de medição**» (l. 2820) | Code ligado |
| 4 | Instruções: «**Commit:** … ENTREGUE o `git commit` pronto, em bloco SEPARADO» — `buildInstr` (l. 2372), sem a exceção | CEREBRO, higiene: «**Havendo WO no turno, o bloco de commit é de quem APLICA**» (l. 1187) | Code ligado |

**O custo de consertar a 4:** é a única nas Instruções. O ramo do Code na linha de commit («havendo WO, o bloco de commit é dela; sem WO, …») custa **+14 caracteres**; o incremento do Code iria de 526 para **540/550** (`C28`) `[medido: comprimento das duas frases]`.

### 2. O pacote sem versão conferível (`i-N72`)

- `downloadUpdatePack` (l. 4143) nomeia o zip `${niche.id}-template-update.zip`; ele descompacta em `dev-template-update/`. O `_UPDATE-PROMPT.md` do canal pasta, desde a v1.129.0, manda procurar `AAMMDD-kcm-update-vX.Y.Z/` `[medido]`.
- A versão está na linha `- Kit:` do manifesto e nos carimbos; **nada manda o receptor compará-la com a versão anunciada**. Em 19/10 o GameDataHub comparou por iniciativa própria e limitou o merge; o Mapoteca tinha programado o merge para esperar o nome da pasta, e o satelite-web não chegou a abrir.

### 3. O CEREBRO no canal pasta (`i-N70`)

Sonda `[medido em sandbox]`: todo CEREBRO gerado no canal pasta (19 nichos × sem modo, Code, ASU e os dois) procurado por vocabulário do mount (`mount`, `_MANIFEST`, `FlatDrop`, «baixar», «anexe», «upload», «subir/suba/subiu/sobe», «no/do/ao Projeto»): **46 linhas distintas em 22 seções**. Classificadas uma a uma `[classificação do chat, linha a linha]`:

| Classe | Linhas | O que é | Onde |
|---|---|---|---|
| **A — dispara no canal pasta e contradiz a seção de canal** | ~20 | regra lida todo turno, escrita para o mount | abertura de turno («liste o mount, leia o cabeçalho da cópia achatada»), a releitura do mount e os quatro modos de falha, «Não verificado é proibido para o que está no mount», os gatilhos «confirme que o arquivo chegou ao mount» e «manda MEDIR em vez de pedir upload», o fecho («Arquivar / Manter — só se houver notas avulsas no mount», nas duas formas), P8 e a seção «Verifica antes de pedir um arquivo» (suba, upload), P11 («Projeto/mount»), a entrega sem Code («baixa os arquivos completos e substitui», «pronto para você baixar»), «Ao receber um template-update — Se aparecerem no mount» (contradiz o prompt da v1.129.0), «Canal de atualização do kit — colar (ou subir)», medição delegada («lê só o que chega pelo mount» — o mesmo que a wo0137 consertou no `CLAUDE.md`), correspondência («chega como upload») |
| **B — reserva legítima** | ~11 | o canal mount descrito como tal | a seção «Transferência entre conversas» (9 linhas) e o achatamento (`_MANIFEST`, árvore do FlatDrop) |
| **C — legítimo nos dois canais, ou falso positivo** | ~15 | não muda | «Instruções do Projeto» (o painel existe nos dois canais), o `.yaml` do ASU «para baixar», a própria seção de canal, «sobe ao Projeto» da sonda, «a tensão sobe» da música |

**Uma trava que o conserto encontra:** o `C43` exige, no CEREBRO gerado (dev, canal pasta) **e** no `meta/CEREBRO.md` da casa, a frase «é proibido para o que está no mount» (cláusula «CEREBRO: ressalva tem custo», wo0124). Reescrever essa linha no canal pasta obriga a mudar a casa e a cláusula na mesma WO.

## Opções consideradas

**Para as contradições:**
- **A1. Consertar as quatro, cada uma pelo lado velho** — o lado A ganha o ramo do modo (ou some, na 2), e o lado B fica. *Recomendada.*
- **A2. Consertar e trancar com um check de pares** — além de A1, um check novo (`C111`) com uma lista de **pares que não podem coexistir no mesmo texto gerado** (frase A × frase B), varrendo 19 nichos × modos × canais, semeado com estas quatro. É o instrumento que falta para a classe «regra nova, regra velha intocada». *Recomendada junto com A1.*
- **A3. Varredura geral de contradições antes de consertar.** Descartada para agora: sem método determinístico, é uma exploração (`/sondar`), e as quatro já medidas não esperam por ela. Fica como ideia.

**Para o pacote (`i-N72`):** a proposta registrada na ideia — no canal pasta, o download se chama `AAMMDD-kcm-update-vX.Y.Z.zip` e o zip traz o conteúdo dentro de uma pasta com esse nome; o `_UPDATE-PROMPT.md` abre mandando conferir a linha `Kit:` do manifesto contra a versão anunciada (diferente = PARE e avise); e o harness confere que o nome do download e o nome citado no prompt são o mesmo.

**Para o CEREBRO (`i-N70`):**
- **C1. Ramificar só a classe A** pela técnica da wo0135 (a frase antiga vira o ramo do mount, recortada), e marcar a seção de transferência e o achatamento como reserva **no título**; a classe C fica. O `C110` passa a varrer o CEREBRO, com uma lista de exceções da classe C. *Recomendada.*
- **C2. Texto neutro de canal** («a pasta, ou o mount na reserva») em todas as linhas. Menos código, mas cada regra fica mais longa no CEREBRO lido a cada abertura, e o canal mount deixa de sair igual.
- **C3. Deixar como reserva.** É o estado de hoje: funciona enquanto o modelo traduz, e o fecho «Arquivar / Manter… no mount» mostra que nem sempre traduz.
- **P8 e P11** (`BEHAVIORS_BASE`) vão nos 19 nichos. Pela C1, ganham o ramo do canal na definição; o canal mount sai igual.

**Ordem e pacote:** duas WOs. Os vizinhos estão no meio do merge da v1.129.0, e a janela entre levas é deliberada (`D-138`): o próximo pacote sai **uma vez**, depois das duas.

## Recomendação

1. **WO-1, v1.130.0:** as quatro contradições (A1), o check de pares `C111` (A2) e a `i-N72` inteira. Pequena, testável, sem tocar a casa.
2. **WO-2, v1.131.0:** a `i-N70` pela C1 — a classe A ramificada, P8 e P11 inclusos, o título da transferência marcado como reserva, o `C110` estendido ao CEREBRO, e a casa (`meta/CEREBRO.md`) e o `C43` acompanhando a frase da ressalva.
3. **Pacote aos vizinhos:** um só, v1.131.0, com uma carta curta a cada um — ao GameDataHub, creditando as quatro contradições.

## Riscos

- **Teto das Instruções:** a contradição 4 leva o incremento do Code a 540/550. O próximo acréscimo ao ramo do Code nas Instruções terá de cortar algo.
- **O check de pares só pega o par que alguém listou.** Ele impede a volta dos quatro; não acha o quinto. A varredura geral (A3) continua sendo o modo de achar.
- **WO-2 é grande:** ~20 linhas em 22 seções, princípios universais nos 19 nichos e a casa no mesmo commit. A técnica da wo0135 (o ramo antigo recortado, a comparação de todos os textos do canal mount antes e depois) é o que a torna auditável; sem ela, não fazer.
- **O merge da v1.129.0 nos vizinhos vai importar as quatro contradições.** O GameDataHub já as conhece; ao Mapoteca e ao satelite-web, a carta do pacote v1.131.0 deve dizer quais linhas descartar se já tiverem entrado.

## Ponto de decisão

1. Duas WOs, nessa ordem (contradições + check de pares + `i-N72` na v1.130.0; o CEREBRO no canal pasta na v1.131.0)?
2. O check de pares (`C111`) entra como instrumento permanente, semeado com as quatro?
3. Para a `i-N70`: ramificar só a classe A, com a transferência marcada como reserva no título (C1)?
4. P8 e P11 com ramo do canal na definição, nos 19 nichos?
5. Um pacote só aos vizinhos, depois da WO-2?
