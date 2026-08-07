# ANÁLISE — Extração de acervo no nicho narrativo: skill de apresentação, ticket de leva, e o que o protocolo de update não consegue apagar

> **Status:** Em discussão
> **Data:** 260807 · **Base:** KCM `KIT_VERSION 1.102.0`, commit `8273f94` (relatório `260807-1558-code-kcm.txt`), harness 18/18 · 81/81 · 0 erros
> **Fontes primárias:** repos achatados de *I will die before the game story start* (`ea086dc`, 2026-08-07, limpo) e *My Little Lady* (`44eaf44`, 2026-08-06, limpo) · nota do autor `260807-0802.txt`
> **Vira:** — · **Decisão:** —

---

## 0 · Duas correções à análise anterior

Os repos chegaram, e derrubaram duas coisas que eu escrevi em `260807-ANALISE-feedback-dois-narrativos.md`. Registro antes de qualquer proposta nova, porque é o tipo de erro que vira cânone se ficar sem correção.

**(a) «Ler do mais recente para o mais antigo» — REFUTADO. Sai da proposta.**
Eu listei isso como regra medida, candidata ao kit, com o número de origem (*6 fatos em ~40 ideias*). O número é real. A conclusão foi revogada **no mesmo dia** pela **DEC-024** do *My Little Lady*, com evidência de campo do efeito colateral: num único turno o assistente declarou «perdidos» seis nomes que estavam em notas ainda não lidas, abriu como pendência um pré-requisito já resolvido, leu «o Códice é um índice que aponta tudo → refutado» como se o *Códice* tivesse sido refutado, e propôs fechar três tensões com uma nota recente enquanto as notas que as definem seguiam por ler. Palavras do registro: *«é o que acontece ao ler um documento que responde perguntas que ainda não foram feitas»*.

**Eu li isso no `IDEAS` → «Feedback para o Kit» do projeto, que ainda descreve a DEC-022 como viva, e no handoff brief.** Os dois estão desatualizados; o `DECISIONS` não. É exatamente a armadilha que o material denuncia — derivado tratado como fonte — e ela me pegou na primeira volta. **A ordem de leitura não entra no kit em nenhuma direção:** é política do autor, não comportamento do assistente. Ver (b).

**(b) A DEC-024 tem um item 2 que muda o desenho desta análise inteira.**

> *«**O método de extração é do autor.** O assistente propõe conteúdo — ideias, refinamento de cena, alternativas de execução — e **não** propõe mudanças no funcionamento da extração. Se enxergar um problema no método, aponta; não redesenha.»*

E o motivo, no mesmo registro: *«o assistente já havia gasto três desenhos de método (arquivos de design separados → DESIGN.md único → ordem invertida), e os três falharam pelo mesmo motivo — **otimizar o processo em vez de executá-lo**»*.

Isso não é regra do kit — é decisão de um projeto. Mas é a lição mais cara que estes dois repos produziram, e ela define a **fronteira da skill** que eu proponho abaixo: a skill governa **como um item é apresentado** e **o que não pode se perder**. Ela **não** governa sequência, tamanho de leva, ordem de leitura nem quando parar — isso é do dono, e uma skill que legisle sobre isso reproduz o erro que a DEC-024 nomeou.

**Correção menor, de passagem:** eu escrevi que os três itens antigos que recomendei não mexer «não têm custo medido». Falso para um deles: a convenção `Arquivados/` **tem** custo medido — planilhas `.xlsx` inteiras da Fase 1 do *I will die* sumiram do Project Knowledge por terem ido para `notas-arquivadas/`, que já era gitignorada (DEC-4/FIX-2 deles). Continua não sendo urgente; mas «sem custo medido» estava errado.

---

## 1 · Problema

Dois projetos narrativos rodam a mesma fase que o kit não modela — extrair worldbuilding de um acervo antigo para o cânone — e cada um resolveu por conta própria, com métodos que hoje divergem em detalhes e concordam no essencial. O kit não tem nada disso: `grep "extra[cç]"` em `src/niches/narrative.js` → **0 ocorrências**.

Ao mesmo tempo, o autor pergunta por que refinamentos que ele pediu para transplantar não chegaram ao narrativo. A resposta, medida, é pior e melhor do que a pergunta supõe: **eles chegaram ao nicho; não chegaram aos projetos.** E há um motivo estrutural para isso, que ninguém tinha nomeado.

---

## 2 · O que foi medido

### 2.1 — Não existe divergência dev × narrativo no kit

Gerei o CEREBRO dos dois nichos a partir do `index.html` recém-construído (v1.102.0, Modo Code ligado) e comparei os títulos de seção. **Diferença: uma linha** — o narrativo tem `## Skills de escrita (Agent Skills)`, que o dev não tem, porque o dev não tem skills de escrita. Todo o resto — ritual, princípios, higiene, análise antes do compromisso, medição delegada, bloco de fecho, tabela de gatilhos, refino das Instruções — é **idêntico**.

Os refinamentos universais vivem em `HYGIENE_RULES` e nos princípios, e são emitidos verbatim para os 18. **Não há nada de dev que o narrativo não receba.**

### 2.2 — O que não chegou foi a *versão*

| Refinamento | Entrou no kit | Está no CEREBRO gerado hoje | *My Little Lady* | *I will die* |
|---|---|---|---|---|
| «a cópia não é a fonte da verdade» (D-100) | v1.88.0 | sim | **não** | **não** |
| abertura de turno antes de qualquer ferramenta (D-111) | v1.98.0 | sim | **não** | **não** |
| carimbo `Base:` no Estado (D-111) | v1.98.0 | sim | **não** | **não** |
| falsa confirmação do sandbox (D-111) | v1.98.0 | sim | **não** | **não** |
| medição delegada (D-113) | v1.100.0 | sim | **não** | **não** |
| `/wrap` procura o valor antigo no STATUS inteiro (D-114) | v1.101.0 | sim | **não** | **não** |
| natureza `modelo-em-espera` no pacote (D-114) | v1.101.0 | sim | **não** | **não** |

Contagem literal de ocorrências nos dois `meta/CEREBRO.md`: **zero** para cada uma das sete linhas. O CEREBRO do *My Little Lady* declara-se **v4, integrando o KCM v1.96.0**; o do *I will die* é da leva de **2026-07-04**, e não tem sequer as seções «Bloco de fecho de turno», «Análise antes do compromisso», «Refino das Instruções» e «Técnicas específicas» — está em torno da v1.7x.

**Um CEREBRO gerado é um arquivo, não uma função.** Ele congela na versão em que foi mesclado. É a mesma regra que o kit já escreveu para si (*«a cópia não é a fonte da verdade»*), aplicada a ela mesma — com a ironia de que a regra que faltava era justamente essa.

### 2.3 — O achado: **o protocolo de update sabe somar, não sabe subtrair**

Este é o resultado mais importante da medição, e ele responde à pergunta do autor melhor que a tabela acima.

O ritual do CEREBRO do *My Little Lady*, item 7, diz hoje:

> *«**Sempre que o autor sinalizar upload** — mesmo sem nomear o arquivo («já subi», «veja o txt», «atualizei o mount») — **relê o mount antes de responder**, nunca de memória.»*

Esse texto é a versão do kit **anterior à wo0068 (D-102, v1.90.0)**, que o apagou de propósito, com este diagnóstico: a lista de exemplos de sinal **ensinava a esperar o sinal**. O substituto, que está nas Instruções geradas hoje, diz o contrário: *«reveja o mount a cada turno, **sem esperar eu sinalizar**»* e *«mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa»*.

O *My Little Lady* integrou a **v1.96.0**, seis versões **depois** da correção — e ficou com a linha errada. Contagem: **zero** ocorrências de «não sinalizo»/«principalmente, quando» no CEREBRO deles.

E aqui está a causa, que não é descuido de ninguém: a **D-102** decidiu que *template genérico não substitui arquivo vivo refinado* — `.claude/*` e os `meta/` especializados caem por padrão em «manter o seu». A proteção funcionou como projetada. Só que ela protege **linha por linha adicionada**, e não tem como expressar *«esta linha foi removida de propósito; remova a sua também»*. O merge compara o que é **novo** no template. **Uma correção que apaga não atravessa o protocolo.**

Isso explica, na mesma tacada, o item que eu já tinha achado na análise anterior — a seção de ASU que sobreviveu no *My Little Lady* depois de o projeto migrar para Modo Code. Não são dois problemas: é **um**, com duas superfícies. O protocolo de update é aditivo, e o kit já emitiu pelo menos duas correções subtrativas.

E a consequência prática é ruim de um jeito específico: **a FIX-016 daquele projeto** — «o mount só era relistado quando o autor mandava, e entre dois turnos cinco arquivos entraram e quatro saíram» — foi diagnosticada lá como falha de adesão. Não era. Era o CEREBRO deles mandando fazer exatamente isso.

### 2.4 — Os capítulos não chegaram ao mount

Os dois manifestos declaram **30** e **32** arquivos. Chegaram **25** e **22**. A diferença é exata: **os 5 capítulos do *I will die* e os 10 do *My Little Lady*** — e nada mais. Todos os `meta/`, skills e logs vieram completos.

Não bloqueia esta análise (o desenho é de método, não de prosa), mas bloqueia qualquer conferência de continuidade, e é relevante porque a **DEC-11** do *I will die* torna o capítulo uma fonte auditável como outra qualquer. Vale descobrir por que sumiram antes da próxima subida — se foi teto de arquivos do Projeto, o padrão vai se repetir.

### 2.5 — O que cada projeto já tem escrito

**My Little Lady** (Modo Code, KCM v1.96.0) tem duas seções que o kit não tem: `## Worldbuilding: extração em dois turnos, direto para o cânone` e `## Como apresentar extração e choque (DEC-033)`. Dentro delas, quatro mecanismos que o protocolo de ficha do outro projeto **não** tem:

- **Marca de confiança obrigatória por item:** *literal* (com a frase-fonte citada) · *síntese* (o assistente combinou ou deduziu — sempre destacado, nunca misturado) · *conflito* · *aberto*.
- **Regra da frase-fonte (FIX-011):** se não há frase citável, o item **não pode** ser literal — é síntese, e síntese só vira cânone com aprovação explícita. *«O assistente não decide sozinho quando uma síntese é claramente o que o autor quis dizer.»*
- **Nota antiga é suspeita por padrão:** contradição entre nota velha e cânone é sinalizada como *possivelmente superada* — nunca escalada como pendência, nunca resolvida a partir da nota velha sozinha.
- **Antes de abrir pendência, conferir o cânone.**

**I will die** (Modo ASU, KCM ~v1.7x) tem a skill `ficha-de-choque` e duas levas rodadas. Dela, o que o *My Little Lady* não tem:

- **Os quatro campos com o texto proposto pronto para copiar** (o campo 4 é *o texto*, não a descrição da mudança).
- **Status 🟡/🟢/🔴/🔧**, e o **🔧 «resolvido sozinho»** com critério herdado da DEC-8: *(a)* nenhuma prosa já escrita depende do resultado **e** *(b)* existe reconciliação que aproveita todas as fontes sem descartar nenhuma como errada. Aplicado a 6 de 8 pendências numa auditoria real.
- **Ciclo de leva:** o decidido **sai** do ticket; o não respondido volta **refinado**, nunca repetido igual; o ticket não acumula item resolvido.
- **Formato reduzido para lacuna** (sem «escrito hoje» para chocar): os dois primeiros campos viram «O QUE ESTÁ EM ABERTO».
- **DEC-11** (capítulo não é fonte protegida; coexistência é aceitável; o capítulo escrito não vence por padrão) e **DEC-12** (2–4 variações refinadas para qualquer texto que o autor rascunhe).

**Os dois juntos formam um protocolo completo. Nenhum dos dois sozinho é.**

---

## 3 · O ticket de leva (a proposta do autor em `260807-0802.txt`, §3.3)

### 3.1 — Como eu entendi

Cada sessão de extração produz **um** `.md`, escrito pelo chat, com tudo o que hoje ele escreveria dentro da mensagem: os itens ainda abertos da sessão anterior (refinados), o que veio das notas novas subidas, o que foi reaberto, e as inconsistências encontradas no cânone. O que foi decidido — validado ou refutado — **não aparece**: saiu para o cânone na hora. O autor lê, responde (no chat ou por um `.txt` novo), e **arquiva**. Na sessão seguinte o chat gera outro, do zero. O arquivo nunca é editado depois de nascer.

Duas dores concretas por trás: a mensagem do chat virava parede de texto e deixava a página pesada; e o que ficava «azul» só existia no chat, então morria com a conversa.

O que quebrou nos `DESIGN-00X` antigos do *My Little Lady* foi **outra coisa**, e ele nomeou certo: os verdes e vermelhos já fechados **nunca saíam**, então achar o verde que tinha sido reaberto exigia garimpar entre verdes mortos há semanas, vermelhos descartados há mais tempo ainda, e os azuis.

### 3.2 — A crítica, que era o que ele pediu

**A refutação anterior não se aplica a isto, e ele está certo.** O que foi refutado no *My Little Lady* era um documento que se **regerava inteiro a cada rodada carregando tudo** — um cânone paralelo, com todos os defeitos de um segundo lugar para ficar desatualizado. O que ele descreve é o oposto: **carrega só o aberto, e encolhe por construção**. Isso não é um cânone paralelo; é o **retrato do conjunto em aberto** no instante em que nasceu, e ele é substituído inteiro na sessão seguinte. O diagnóstico do *I will die* já provou a forma em campo, duas vezes.

Onde ele erra, e é um ponto só: **«estaria fresco na memória» só vale dentro da mesma conversa.** Na sessão seguinte — que costuma ser uma conversa nova — o chat **precisa ler** o ticket para saber o que está aberto. Nesse instante o ticket **é** fonte, e é derivado: se o autor respondeu metade no chat e a sessão acabou antes da WO, o ticket e a realidade divergem exatamente onde importa.

A correção é barata e não muda a ideia dele: **o ticket novo é derivado do cânone + das respostas do autor, nunca do ticket velho.** O ticket anterior serve para saber **o que perguntar de novo**; o texto de cada item é reconferido contra o `meta/` antes de reaparecer. É a regra «varra pelo fato, não pela frase» aplicada ao próprio ticket — e é o que impede que ele vire o `DESIGN-004` de novo por outro caminho.

Dois riscos menores, ambos com saída conhecida: o ticket precisa **declarar no cabeçalho que é saída de assistente** (é o erro que custou um turno inteiro no *My Little Lady*, com o `RECON-001`); e precisa de **endereço combinado** — a raiz do repo enquanto serve, `notas-arquivadas/` depois, sem pasta versionada nova (mesmo desfecho da D-112).

**E o ponto mais forte a favor, que ele não usou:** o ticket é **independente de modo**. Arquivo novo sai inteiro em Modo Code, em Modo ASU e no vanilla — as três configurações já fazem isso hoje. Só a *aplicação* do que foi decidido muda (WO · `.yaml` · arquivo inteiro), e essa parte já está resolvida em cada modo. Um `PENDENTES.md` em `meta/` teria de ser mantido pelos três canais; o ticket não é mantido por ninguém, porque não é mantido — é regerado.

**Conclusão: o ticket ganha do `PENDENTES.md`, e o `PENDENTES.md` sai da mesa.** O «azul» ganha endereço sem custar um 11º documento em `meta/`.

---

## 4 · Opções

**Para o protocolo (mantida a recomendação anterior, agora com os dois repos lidos):** skill de nicho. Custo de teto **zero** — o `narrative` está em 6618/6900, e skill vive no CEREBRO gerado. **Nome: `ficha-de-choque`**, sem renomear. O nome já existe em campo, tem duas levas atrás dele, está citado em DEC-10, no STATUS e no arquivo da skill; adotar o nome de origem custa zero rename em qualquer lugar, e renomear custaria uma varredura no *I will die* para ganhar taxonomia. O kit já tem a cicatriz desse tipo de troca (`spec`→WO, e o C15 que nasceu dela).

**Para o alcance:** `narrative` agora. O autor confirmou `game` e `rpg` como candidatos e disse que **nem todo narrativo precisa** — ele tem três histórias rodando e sabe que duas seriam marreta para noz. Isso é requisito, não observação: a skill precisa de **um teste de entrada barato**, na primeira linha, que a desligue em obra sem acervo. É a mesma lição da wo0074 (o gatilho de análise disparando demais) e ele nomeou o incômodo com todas as letras.

**Para a subtração (§2.3), três caminhos:**
- **(A) Lista de revogações no pacote de update.** O pacote passa a levar um bloco «o que saiu, e por quê» — as linhas que o kit apagou desde a versão declarada pelo projeto, com o texto antigo citado para o merge achar. Alcança projeto vivo, é aditivo ao protocolo, e é o único que resolve o caso do *My Little Lady* sem ele regenerar nada.
- **(B) Regenerar o CEREBRO do zero a cada update.** Resolve tudo e destrói «Técnicas específicas deste projeto», que a D-104 criou justamente para sobreviver a rebase. Descartada.
- **(C) Não fazer nada e avisar caso a caso.** É o estado atual, e ele já custou uma FIX diagnosticada errada.

**Para o ticket:** implementar como parte da mesma skill (é o artefato que ela produz), não como documento de `meta/`.

---

## 5 · Recomendação

**Leva 4a — subtração (WO pequena, antes da skill).** Opção **(A)**: o pacote de update ganha o bloco de revogações, e as duas revogações conhecidas entram nele (a linha do ritual apagada pela wo0068; as seções de um modo desligado). Vem primeiro porque é o que destrava os dois projetos — sem isso, tudo o que a leva 4b entregar chega neles pelo mesmo cano entupido.

**Leva 4b — a skill `ficha-de-choque` no `narrative`.** Funde os dois lados: os quatro campos + status + 🔧 com o critério da DEC-8 + ciclo de leva + formato de lacuna (do *I will die*), e as marcas de confiança + regra da frase-fonte + nota antiga suspeita + conferir o cânone antes de abrir pendência (do *My Little Lady*). Mais o ticket de leva como artefato, com a correção do §3.2. Mais o teste de entrada barato. **Fora dela, por decisão:** ordem de leitura, tamanho de leva e sequenciamento — método é do dono (DEC-024).

**Sobem à base universal, no CEREBRO dos 18 (teto zero):** *citar a frase-gatilho inteira antes de perguntar qualquer coisa* — é a regra que os dois projetos escreveram com as mesmas palavras, e é universal porque nada nela é narrativo; e *documento derivado nunca é fonte*, que hoje tem **zero** ocorrências no produto e custou um turno inteiro num projeto e uma correção minha nesta análise.

**Estende comportamento existente:** a DEC-12 (2–4 variações refinadas, com trade-offs) generaliza o behavior `naming` da D-083, que hoje faz isso só para **nomes**, nos nichos de ficção.

**Não entra:** ordem de leitura de notas (refutada, §0a) · `PENDENTES.md` (substituído pelo ticket, §3.2) · qualquer regra sobre quando parar ou quanto ler.

**Sobre fazer a análise em paralelo às WOs das outras levas:** ela já está aqui. A leva 3 (higiene universal) e a leva 4a tocam o mesmo arquivo — `HYGIENE_RULES` e o protocolo de update — e o kit tem regra explícita contra dois escritores no mesmo doc no mesmo ciclo. **Recomendo fundir 3 e 4a numa WO só**, e deixar a 4b sozinha depois.

---

## 6 · Riscos

- **Legislar sobre o método do dono.** É o risco central, e a DEC-024 é a evidência de que ele já custou três desenhos de método. Mitigação: a skill descreve **apresentação e higiene**, e diz explicitamente, no próprio texto, que sequência e tamanho de leva são do autor.
- **Overkill em obra pequena.** Requisito declarado. Sem teste de entrada, a skill vira a próxima queixa — do mesmo tipo que «análises e specs geradas sem necessidade».
- **Promover cedo.** Duas levas, um projeto, um autor. Por isso skill de nicho, e só duas peças na base universal.
- **A lista de revogações vira lixo.** Se cada WO puder declarar uma revogação, em vinte versões o pacote carrega uma lista morta. Mitigação: só entra revogação de linha que o kit **apagou de propósito**, e a entrada sai quando nenhuma versão suportada ainda a tiver.
- **Continuar lendo derivado como fonte.** Aconteceu comigo nesta mesma frente, com a DEC-022. O `IDEAS` → «Feedback para o Kit» dos projetos é um resumo, e resumo envelhece; o `DECISIONS` é o registro.

---

## 7 · Ponto de decisão

1. **Fundir a leva 3 com a 4a** numa WO só (higiene universal + bloco de revogações no pacote), e deixar a skill sozinha na 4b — confirma?
2. **Nome:** fico com `ficha-de-choque`, sem renomear. Se preferir outro, é agora — depois custa varredura nos dois lados.
3. **O ticket de leva:** o nome do arquivo fica `AAMMDD-auditoria-NN.md` (o do *I will die*, já em uso), ou vira algo mais neutro, já que ele carrega extração nova além de auditoria? E onde ele mora depois de respondido — `notas-arquivadas/`, ou fora do versionamento?
4. **Alcance:** `narrative` agora e `game`/`rpg` depois, ou os três de uma vez? Recomendo um por vez — a skill vai mudar depois da primeira leva real, e mudar em três lugares custa três vezes.
5. **Os capítulos:** quer descobrir por que os 15 não subiram antes da próxima leva? Para a 4b eu não preciso deles.
6. **Os dois projetos estão desatualizados** (§2.2) e um deles com a linha do ritual invertida (§2.3). Depois da leva 4a eu monto o pacote de update para os dois — ou você prefere que eu escreva a mensagem de aviso agora, antes, já que o *My Little Lady* está rodando com o ritual errado neste momento?
