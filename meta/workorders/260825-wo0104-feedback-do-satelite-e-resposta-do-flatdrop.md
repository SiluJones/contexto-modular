# WO 0104 — Registrar o feedback do satelite-web, absorver a resposta do FlatDrop e realojar o gatilho da i-N56

> **Tipo:** WO de DOC (registro).
> **Config sugerida:** modelo leve, `/effort` **médio** — três edições num arquivo, sem código.
> **Pré-requisito:** v1.120.0, commit `89ab6b3`, `main` sincronizada com `origin/main`, harness **18/18 · 98/98 · 0 erros**, 1 não rastreado conhecido (`.claude/launch.json`).
> **Base:** o ciclo de update do satelite-web (`Satelite_10.md`, 6 blocos, lido bloco a bloco no chat de 2026-08-24), a carta 01 enviada a eles em 2026-08-25, a nota `260823-0832.txt` do FlatDrop e a `260825-0037-code-kcm.txt`.
> **Depende de:** wo0101 (que criou as duas entradas de 2026-08-20 nesta mesma seção) e wo0103 (`FIX-036`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** e diga no relatório.
>
> **Âncoras lidas em:**
> - `meta/IDEAS.md` L586 → `## 📮 Feedback para o Kit` — lido no mount de 2026-08-25 00:52; conferido `grep -c` = **1**.
> - `meta/IDEAS.md` L616 → `- **i-N56 disparou (gatilho de evento cumprido, wo0102):** o C31 reprovou a primeira redação da E3 porque a asserção testa a **prosa literal**` — lido no mesmo mount, dentro da entrada da carta ao FlatDrop, onde **não** deveria estar.
> - `meta/IDEAS.md` L527 (fim do corpo da i-N56) → `**Gatilho:** na próxima vez que um check obrigar a contornar a redação de uma correção (em vez de bloquear de fato uma regressão de efeito), avaliar se a asserção deve mirar o efeito (ex.: presença de um conceito, uma proibição, um comportamento) em vez da frase literal.`
>
> **Afirmação sobre artefato legível:** as três âncoras foram abertas neste turno; nenhum símbolo ou caminho citado abaixo vem de memória. Nada em `src/` é tocado, então nenhuma afirmação sobre o gerador é feita aqui.
>
> **Canal dos meta neste ciclo = CODE.**
>
> **Próximo comando:** `/wrap`

---

## 1. Por que

O satelite-web acabou de fazer o merge de um pacote de update e devolveu seis observações que o kit
não tinha — **e uma delas se provou verdadeira contra nós mesmos no mesmo dia**: eles apontaram a falta
de carimbo de versão em arquivo vivo, e ao gerar o pacote v1.120.0 para eles descobrimos que o nosso
carimbo estava *errado* (`FIX-036`). Enquanto isso viver só na carta enviada, não existe para a
próxima conversa — carta é transitória por decisão registrada (D-123).

E há uma dívida vencida: a nota `260823-0832.txt`, resposta do FlatDrop à nossa mensagem de 02/08,
ficou **dois turnos** em «Manter — não li/não absorvido». Sob a regra que a wo0102 acabou de publicar
(«Manter: não li» tem prazo), ela é absorvida agora ou declarada abandonada. É absorvida.

## 2. Contexto factual

**[medido no mount, 2026-08-25 00:52]**

- HEAD `89ab6b3`, `main` **sincronizada com origin/main**. O push do fecho da wo0103, relatado como
  pendente por timeout de SSH em `260825-0037-code-kcm.txt`, saiu depois (`bb93500..89ab6b3`) e o
  manifesto já o registra. **A pendência declarada naquele relatório está fechada** — não repetir.
- `grep -c "^## 📮 Feedback para o Kit$" meta/IDEAS.md` → **1**.
- O bullet da i-N56 está na **linha 616**, dentro da entrada `### 2026-08-20 — Carta 01 enviada ao
  FlatDrop`. A wo0102 mandou acrescentá-lo «à seção de ideias abertas»; ele foi parar dentro de uma
  entrada de correspondência. A i-N56 vive na **linha 526**. É desvio de posição, não de conteúdo.

**[lido no `Satelite_10.md` e na carta 01 enviada a eles]**

- Eles varreram 20/20 arquivos do pacote e classificaram 19 linhas com achado real, 3 legítimas.
- O `R4` deles foi uma **discordância fundamentada e correta**: o texto vivo já estava do lado certo
  da revogação; só o vocabulário («spec») tinha envelhecido.
- Eles chegaram sozinhos, e por outro caminho, ao fato de que **o mount não carrega idade por
  arquivo** — o mesmo que a wo0102 registrou na Edição 4 a partir da nota do Mapsmith.

**[lido no `260823-0832.txt`, do FlatDrop]**

- A pergunta da nossa mensagem de 02/08 sobre contagem de marcadores **já tem resposta no código
  deles**: `_split_managed` casa marcador por linha inteira e levanta `FlatdropIgnoreAmbiguo` quando
  há mais de um de cada; o editor recusa salvar. É a wo0045/FIX-012 do lado deles.
- O segundo pedido («confiram o merge do P11 e do princípio de higiene quando a v1.97.0 chegar»)
  **não pôde ser atendido: a v1.97.0 nunca chegou ao mount deles.**

**[deduzido, e marcado como tal]**

- Que o cartão do caminho vermelho funcionou como projetado: o relatório de fecho registra que o menu
  `AskUserQuestion` foi oferecido diante da falha de push e a escolha foi «tentar de novo». **Inferência:**
  é a primeira ocorrência em campo do cartão usado para ESCOLHER e não para disparar, exatamente como
  a wo0102 especificou. Anotado, não promovido a nada.

---

## Edição 1 — `meta/IDEAS.md` · duas entradas novas no topo do feedback

**Âncora** *(ocorrência única, conferida)*:

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** a linha da âncora, mantendo a linha em branco que já existe abaixo dela
— o bloco novo entra **depois** dessa linha em branco e **antes** da entrada de 2026-08-20:

```

### 2026-08-25 — O ciclo de update do satelite-web: seis itens, e um deles nos pegou no mesmo dia
Sexto projeto a receber um pacote, e o primeiro a devolver crítica sobre o **processo de update** em vez de sobre o conteúdo do kit. Eles varreram 20/20 arquivos do pacote, classificaram 19 linhas com achado real e 3 como legítimas, e não aplicaram nada sozinhos. Nenhum item virou WO ainda.

**(1) O carimbo de modos escala sem destinatário — e o kit podia ter respondido.** A regra do manifesto manda «reporte como choque, com a seção citada, e deixe o usuário decidir — nunca remova sozinho: o kit não tem como saber qual dos dois casos é». A primeira metade está certa e eles a cumpriram à risca. **A segunda metade é falsa, e é nossa.** O caso concreto: o `CEREBRO.md:243` deles traz «ASUs seguem `AAMMDD-asuNNNN.yaml`» enquanto o carimbo declara ASU `nao`, e eles ficaram com um choque sem árbitro. **O kit sabe:** essa cláusula sai de um ternário `(asuModeOn() ? '; instruções ASU seguem …' : '')`, logo só existe em pacote gerado com o modo LIGADO — e pacote com modo esquecido-ligado carimbaria `sim`. Como o carimbo diz `nao`, a linha veio de um pacote anterior: é sobra, com prova. **Proposta:** o manifesto passa a listar, por modo declarado, a **frase-marcadora** que só aparece quando aquele modo está ligado. Aí o projeto resolve sozinho, e a regra de «não remova» deixa de ser um beco. *Gatilho: a segunda vez que um projeto reportar choque de carimbo.*

**(2) Não há carimbo de versão do kit em arquivo vivo — e o nosso, quando existia, mentia.** Eles relataram: *«não sei de qual versão este projeto veio — só que é anterior à v1.90.0, porque carrega as quatro linhas revogadas desde então»*. Deduzir a versão pelo que ainda está errado é arqueologia, não leitura. Sem carimbo, nem o projeto sabe quão atrás está, nem o pacote sabe quanto do que declara já foi aplicado — e o próprio manifesto admite que o número de pontos fica otimista quanto maior a distância. **E o item se provou no mesmo dia, contra nós:** ao gerar o pacote v1.120.0 para eles, a primeira linha da saída foi `KIT_VERSION: 1.119.0` — a wo0102 subiu a versão nos documentos e deixou a constante para trás, então todo artefato saía carimbado com a versão anterior (`FIX-036`, wo0103, corrigido e amarrado pelo C54). **Carimbo errado é pior que ausente: ele responde, e responde mentira.** O que falta agora é o outro lado — um carimbo de versão nos arquivos que o kit **entrega**, para que o projeto instalado saiba de onde veio.

**(3) A tabela de revogações não distingue «o comportamento está errado» de «só o vocabulário envelheceu».** O `R4` deles é o caso, e a discordância deles está certa: o kit revogou «nunca blocos soltos para colar à mão» porque, num projeto COM executor, o bloco cirúrgico com âncora **é** o artefato certo. Mas o texto vivo deles já dizia exatamente isso — proibia o bloco para **o usuário** costurar e no mesmo fôlego mandava usar spec/WO para o Code. **A regra deles já estava do lado certo da revogação; só o nome do artefato tinha envelhecido.** Aplicar a revogação ao pé da letra teria apagado uma proibição boa. A tabela precisa de uma coluna que diga qual dos dois casos é — e a instrução, de um terceiro veredito além de «sai» e «fica»: **«fica, com o vocabulário trocado»**.

**(4) Segunda ocorrência de «a varredura fica cega no que o ignore esconde» — com uma reviravolta que vale mais que o item.** Eles declararam a segunda cobertura **pendente** em `meta/specs/` e `logs/` por não estarem no mount, atribuindo a ausência ao `.flatdropignore` (FIX-024). Duas coisas: **(a)** o dono tinha comentado as duas linhas de propósito, e no mount seguinte os 33 specs e 24 logs estavam lá — a varredura foi completada por nós e fechou limpa (0 achados em R1, e os 6 de R2/R3/R4 todos relato histórico, inclusive o `spec0003`, que é o **texto-fonte** da skill hoje viva e por isso não se corrige); **(b)** a causa declarada era **inferência, não leitura** — o `.flatdropignore` foi lido como «sei o que ele faz» em vez de aberto. É a espécie que o P8 acabou de tipar na wo0102, agora vista num projeto que ainda não tem o P8 tipado. *O item (4) segue valendo: dois consumidores já bateram nele, que era o gatilho registrado.*

**(5) `pasta/` × `pasta/*`: o kit documenta e não verifica.** O nosso `.flatdropignore` explica a forma correta e o motivo medido (a ferramenta poda o diretório antes de descer, então o `!` lá dentro nunca é avaliado; FIX-011/DEC-025 do FlatDrop). O deles usa `meta/sql/` — forma errada — e carrega um comentário prometendo `!meta/sql/<arquivo>` que **não funcionaria**. O template poderia trazer a forma errada **nomeada como armadilha**, em vez de só explicar a certa: quem lê a regra certa não reconhece a errada quando a vê.

**(6) O protocolo de entrega incremental (DEC-034 deles, 16/06) continua não absorvido.** Estava no «Feedback para o Kit» do IDEAS deles desde junho: quando a entrega **acrescenta** a algo que o usuário JÁ aplicou, o delta vai em arquivo separado, com a ordem de aplicação declarada e os blocos que tocam o que a base mudou sinalizados — nunca o arquivo base inteiro com o novo embutido. Hoje o kit distingue «doc inteiro para o usuário» de «WO para o executor», e **não trata esse terceiro caso**: o incremento sobre algo já aplicado por mão humana. Fica na fila, com o crédito deles.

**Convergência independente que vale registrar como fato, não como item:** eles chegaram sozinhos, por outro caminho, a *«o manifesto é foto da hora da geração, e o mount não carrega idade por arquivo»* — a mesma medição que a wo0102 registrou a partir da nota do Mapsmith. **Dois projetos que não se falam, medindo a mesma coisa.** É a evidência mais forte que esse fato vai receber.

### 2026-08-25 — Carta 01 enviada ao satelite-web, e o pacote v1.120.0 junto (aguardando, com gatilho)
Enviada como `260824-kcm-para-satelite-web-01-as-cinco-decisoes-do-update.md`, com o pacote `template-update` v1.120.0 (nicho Desenvolvimento, modos `skills-do-nicho nao · Code sim · ASU nao · compartilhado nao`) substituindo o v1.119.0 que eles tinham recebido em 25/08 01:28. **Numeração `01` declarada como suposição**, com pedido de que confiram a pasta deles antes de responder.

**Cinco decisões respondidas, com a evidência de cada uma:** **B1** — entregar as skills SEM `disable-model-invocation`, preservando a FIX-024 deles: a família de bugs do Claude Code continua **aberta** (`#78523`, 17/07, rótulos `area:skills`/`bug`), e o changelog recente mudou a **mensagem de recusa**, não o caminho de invocação; a contra-evidência é nossa (as duas skills do KCM carregam a flag e foram invocadas com sucesso em 22/08), então é dependente de ambiente e o teste decide. **B2** — sim ao commit+push automático no verde, e com duas máquinas o argumento **se inverte**: o perigo não é empurrar demais, é não empurrar, porque commit local sem push é invisível e o manifesto lê o repo como limpo; colisão falha alto (*non-fast-forward*). **B6** — sim ao fecho por registro, com a ressalva de que a regra é mais estreita do que parece: o kit não abandonou a entrega de arquivo inteiro, restringiu-a por destinatário. **ASU** — sobra, com a prova do ternário (item 1 acima). **`meta/analises/`** — nasce agora e **não vazia**: o `260819-METODO-engenharia-reversa-blue.md` deles está solto no mount e fora do manifesto, ou seja, não versionado — é o caso exato que a regra da pasta preguiçosa prevê.

**Gatilho:** se não vier resposta até a próxima leva do kit, os seis itens do feedback deles seguem valendo de qualquer forma (são nossos, não dependem de resposta), e o que fica pendente é só a confirmação de que o pacote v1.120.0 substituiu o anterior. *Espera sem gatilho não é memória.*

### 2026-08-25 — Resposta do FlatDrop à mensagem de 02/08 (absorvida com dois turnos de atraso)
A nota `260823-0832.txt` ficou **dois turnos** em «Manter — não li». Sob a regra de prazo que a própria wo0102 publicou, é absorvida agora — e o atraso vale como o segundo caso medido de que «Manter» sem prazo é fila indefinida, não cuidado.

**(a) A obrigação que formulamos está implementada, não só documentada.** Perguntamos se a contagem de marcadores era viável do lado deles; a resposta é que **já é o comportamento**: `_split_managed` casa marcador por linha inteira e levanta `FlatdropIgnoreAmbiguo` quando há mais de um de cada, e o editor recusa salvar (wo0045/FIX-012 do lado deles). O nosso `.flatdropignore` documenta a regra de não citar as linhas marcadoras em comentário — **agora sabemos que ela é imposta pela ferramenta, não confiada ao autor.** Vale ajustar o comentário para dizer isso: regra imposta e regra confiada pedem cuidados diferentes de quem edita.

**(b) Um pedido nosso que nunca pôde ser atendido, e a causa é nossa.** Pedimos que conferissem o merge do P11 e do princípio de higiene «quando a v1.97.0 chegar». **A v1.97.0 nunca chegou ao mount deles.** Estamos em v1.120.0 — vinte e três versões depois, com um pedido pendurado numa entrega que não fizemos. *Gatilho: mandar ao FlatDrop o pacote de update atual, ou retirar o pedido explicitamente. Pedido que espera uma entrega que não foi feita é espera sem gatilho, e é o defeito que a D-123 nomeia.*
```

## Edição 2 — `meta/IDEAS.md` · realojar o gatilho da i-N56

A wo0102 mandou acrescentar o bullet «à seção de ideias abertas»; ele foi parar dentro da entrada de
correspondência com o FlatDrop. Conteúdo certo, lugar errado.

**(a) Âncora** *(ocorrência única — fim do corpo da i-N56)*:

```
**Gatilho:** na próxima vez que um check obrigar a contornar a redação de uma correção (em vez de bloquear de fato uma regressão de efeito), avaliar se a asserção deve mirar o efeito (ex.: presença de um conceito, uma proibição, um comportamento) em vez da frase literal.
```

**Inserir IMEDIATAMENTE APÓS** essa linha:

```
**Gatilho CUMPRIDO (2026-08-22, wo0102).** O **C31** reprovou a primeira redação da Edição 3 (item «Estado» do bloco de fecho) porque a asserção testa a **prosa literal** — `manifesto da cópia achatada já trouxer o estado do repo` — e não o comportamento. A edição foi reescrita para preservar a frase e o check ficou verde: **a redação se contorceu para caber no check, que é exatamente o sintoma que esta ideia previa.** A ideia continua ABERTA, agora com caso concreto anexado, que era o que lhe faltava. *Não vira frente nesta leva; o próximo caso decide.*
```

**(b)** Depois disso, **APAGUE** o bullet órfão (linha ~616, dentro da entrada `### 2026-08-20 — Carta
01 enviada ao FlatDrop`), incluindo a linha em branco que o precede. Trecho literal a remover:

```
- **i-N56 disparou (gatilho de evento cumprido, wo0102):** o C31 reprovou a primeira redação da E3 porque a asserção testa a **prosa literal** (`manifesto da cópia achatada já trouxer o estado do repo`), não o comportamento. Reescrevi preservando a frase. **Inferência:** o gatilho de evento daquela ideia ocorreu. Registrar é da Edição 11; decidir o que fazer com ela não é desta WO.
```

> **Se o trecho não bater caractere por caractere, PARE e reporte** — não apague «o parágrafo parecido».
> Apagar é a única operação desta WO que perde texto, e ela só se justifica porque o conteúdo foi
> reescrito, ampliado e realojado na alínea (a) imediatamente antes.

---

## Fora de escopo

- **Nenhuma mudança no gerador, no harness ou nas skills.** Os seis itens do satelite são feedback
  **registrado**, não implementado — cada um tem gatilho próprio.
- **Nenhuma entrada em `DECISIONS.md`.** Nada foi decidido nesta WO. O `FIX-036` já está lá, gravado
  pela wo0103.
- **Não abrir carta 02 ao FlatDrop.** O gatilho do item (b) diz o que fazer; fazer é de outro ciclo.
- **Não reescrever o `.flatdropignore`** por causa do achado (a) da nota do FlatDrop — é edição de
  comentário e cabe na próxima WO que tocar o arquivo, não numa WO de registro.

## Armadilhas desta WO

- **A Edição 2 tem duas metades e a ordem importa:** insira em (a) **antes** de apagar em (b). Se
  apagar primeiro e a inserção falhar, o conteúdo some.
- **O texto inserido cita `wo0102`, `C31` e `i-N56` várias vezes.** Não invente contagens de `grep`
  além das previstas no checklist — as entradas novas são de linhas muito longas e `grep -c` conta
  **linhas**.
- **A âncora da Edição 1 carrega um emoji.** Copie a linha do arquivo, não deste documento.
- **A entrada de 2026-08-20 («Extração do Mapsmith 11») tem de continuar existindo e ficar ABAIXO das
  três novas.** Se ela subir ou sumir, a inserção entrou no lugar errado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `meta/IDEAS.md`, e nada além.
- [ ] `grep -c "^## 📮 Feedback para o Kit$" meta/IDEAS.md` → **1**.
- [ ] `grep -c "^### 2026-08-25 — " meta/IDEAS.md` → **3** (as três entradas novas, e só elas).
- [ ] `grep -c "i-N56 disparou (gatilho de evento cumprido, wo0102)" meta/IDEAS.md` → **0**. *O bullet
      órfão saiu. Se der 1, a Edição 2(b) não foi aplicada.*
- [ ] `grep -c "Gatilho CUMPRIDO (2026-08-22, wo0102)" meta/IDEAS.md` → **1**. *O conteúdo foi
      realojado. Se der 0 com o anterior em 0, houve perda — **PARE e reporte**.*
- [ ] `grep -n "^## i-N56" meta/IDEAS.md` → **uma linha, com número MENOR** que o das três entradas
      novas. É o que prova que a Edição 2(a) foi para a seção de ideias, não para o feedback.
- [ ] `grep -n "^### 2026-08-20 — Extração do Mapsmith 11" meta/IDEAS.md` → **uma linha, com número
      MAIOR** que o das três novas.
- [ ] **WO só de doc:** não precisa de `build.js` nem de `validate.js` — a rede é o `git diff`.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal · arquivos tocados · resultado das sete conferências
acima · o commit. **Não** substitua pelo bloco de fecho do chat.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/IDEAS.md meta/workorders/260825-wo0104-feedback-do-satelite-e-resposta-do-flatdrop.md
```

```
git commit -m "docs(meta): registra o feedback do satelite-web e absorve a resposta do FlatDrop" -m "Seis itens devolvidos pelo ciclo de update do satelite-web: o carimbo de modos escala sem destinatario (e o kit sabia a resposta, pelo ternario do asuModeOn); a falta de carimbo de versao em arquivo vivo, que se provou contra nos no mesmo dia com o FIX-036; a tabela de revogacoes sem o terceiro veredito (fica com o vocabulario trocado); a segunda ocorrencia da varredura cega, com a causa declarada por inferencia em vez de leitura; pasta barra contra pasta barra asterisco, documentado e nao verificado; e o protocolo de entrega incremental de junho, ainda nao absorvido. Registrada tambem a carta 01 enviada a eles com o pacote v1.120.0, e absorvida com dois turnos de atraso a resposta do FlatDrop de 02/08: a contagem de marcadores ja e imposta pela ferramenta, e um pedido nosso esperava a v1.97.0 que nunca foi entregue. O gatilho cumprido da i-N56 sai da entrada de correspondencia e vai para a propria ideia."
```

```
git push
```
