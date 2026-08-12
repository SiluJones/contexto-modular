# ANÁLISE — O fecho de conversa em modo Code: listar não é registrar

**Status:** `Decidida`
**Data:** 2026-08-11 · **Versão do kit na época:** v1.105.0 (commit `6bc5c8f`)
**Origem:** Mapsmith — `IDEAS.md` §«Feedback para o Kit», itens **(6)** e **(8)**; notas do autor
`260809-2135.txt`, `260809-2148.txt`, `260810-0702.txt`, `260810-0719.txt`, `260810-0730.txt`;
transcritos `mapsmith_8.md` (bloco 39) e `mapsmith_10.md` (bloco 3).
**Elos:** D-092/wo0058 (bloco de fecho) · D-095/wo0061 (nome do handoff) · D-108 (relatório do Code
em arquivo) · D-113 (medição delegada) · D-116 (o merge sabe somar e não sabe subtrair)

---

## Problema

**O prompt de fecho que o kit entrega produz um fecho incompleto quando o projeto tem executor — e o
custo já foi pago duas vezes, no mesmo projeto, com dez dias de intervalo.**

O prompt E («Conversa pesada — transferir agora») acerta na parte difícil: manda **não regenerar** os
arquivos de contexto, porque dois escritores brigam e reescrever doc grande no fim de uma conversa
pesada é onde se perde conteúdo. Em seguida ele pede, no ramo de modo Code:

> *«Em vez disso: liste o que ainda falta registrar (o append que o Code deve fazer) e garanta que
> está tudo commitado e enviado.»*

**«Liste» é o verbo errado num projeto com executor.** Listar produz um bloco de texto que o dono
precisa colar na caixa de mensagem do Claude Code — que tem limite de caracteres, e que é exatamente
a razão de as WOs existirem. Pior: **um fecho bom tem essa lista vazia.** O prompt pede o inventário
da dívida como se fosse o entregável, quando o entregável é o registro.

**O que aconteceu de fato, nas palavras do dono** (`260809-2135.txt`, sobre uma conversa encerrada em
2026-08-09):

> *«eu achei estranho que o claude chat não quis gerar nenhum wo para registrar tudo o que necessário
> (…) ao invés de corrigir já na hora, só optou por dizer que escreveu isso no handoff (…) eu to até
> sem ter certeza se não foi deixado de fora alguma ideia ou decisão.»*

E o encadeamento completo, dez dias depois (`260810-0730.txt`, `mapsmith_8.md` bloco 39):

1. **Conversa A** encerrou listando sete pendências de registro em vez de executá-las, e **passou
   cinco dias sem escrever um único log de dia**.
2. **Conversa B** gastou um turno re-derivando contexto, entregou a wo0069 e **anunciou** um
   `STATUS.md` e um log que nunca chegaram para download.
3. O dono **voltou à conversa A** com um print, para que ela fizesse o fecho que devia ter feito.
4. **Conversa C** abriu contra um `STATUS.md` que apontava para
   `meta/analises/260810-ANALISE-fatiamento-no-formato-do-pacote.md` — **um arquivo que nunca
   existiu**. Ela mediu e disse isso; o dono confirmou: *«nunca existiu»*. A frente inteira apontava
   para um vazio.

**Quatro causas nomeadas, e nenhuma é «esqueceu»** — o item (8) do Mapsmith já as separou, e a
separação é boa demais para reescrever:

**(a) «Não regenere» foi aplicado a documentos que não existiam.** A regra existe para não haver dois
escritores no mesmo doc. Um log de dia que **não existe** não tem escritor nenhum: escrevê-lo não é
regenerar, é criar. O assistente colapsou *não reescreva* com *não escreva*.

**(b) O critério de aceite do fecho está invertido** — «liste o que falta» em vez de «execute o que
falta e mostre a lista, que deve estar vazia».

**(c) O log do dia não tem gatilho de evento.** Ele pende de «fim da conversa», e numa conversa de
planejamento longa o fim nunca chega: cada turno tem uma frente técnica seguinte. É a IDEA-056 do
Mapsmith vista pelo outro lado — o `/wrap` não cria log e o chat também não, porque nenhum dos dois
tem **quando**.

**(d) O assistente tratou a conversa como memória.** «Os ícones deram RGBA nos dois mapas», «carta 17
enviada» — fatos que o dono relatou no chat e que nunca chegaram ao repositório. A conversa seguinte
não conseguiu confirmar o RGBA e travou entre um handoff que dava o FIX por fechado e um STATUS que
dava a recuperação por pendente. O dono resolveu isso na marra em `mapsmith_10.md`: *«RGBA é fato,
não relato»*.

---

## Restrições / o que foi medido

**Tudo abaixo foi lido no fonte (`src/index.template.html`, v1.105.0) e medido em sandbox** — repo
reconstruído do mount, `node build.js` reproduzindo o `index.html` **byte a byte** (784.473 bytes,
igual ao relatório do Code de 15:42) e `node validate.js` verde em **18/18 · 84/84**.

**1. O defeito do verbo está vivo, e só no ramo de modo Code.** No prompt E, o ramo `codeModeOn()`
contém literalmente a linha citada acima. Os outros dois ramos não têm o problema — o ramo padrão
manda entregar os arquivos inteiros, e o ramo ASU manda emitir instrução `.yaml`.

**2. Achado que a nota não tinha: o ramo de modo Code é o ÚNICO que não nomeia o log do dia.** O ramo
padrão diz, textualmente, *«incluindo o log `logs/AAAA-MM-DD.md`»*. Os ramos **Code e ASU não citam o
log em lugar nenhum**. Ou seja: a única configuração em que o log some é a que tem um executor com
permissão de `Write` e uma skill (`/wrap`) que sabe escrevê-lo. **O log sumiu justamente onde havia
duas mãos capazes de escrevê-lo, porque o prompt que fecha a conversa não pede a nenhuma das duas.**

**3. A regra geral de fecho também é cega ao modo.** Em `buildInstr` a seção final é emitida sob
`outOn.length`, sem nenhuma consulta a `codeModeOn()`:

> *«## Ao final da conversa, entregue arquivos completos — Entregue cada documento afetado INTEIRO e
> atualizado (…), nunca blocos soltos para colar à mão.»*

O mesmo em `buildClaudeMd`. **Num projeto com executor, «nunca blocos soltos para colar à mão» é o
oposto do certo:** o bloco cirúrgico com âncora *é* o artefato correto — ele se chama WO, tem canal
próprio, e o kit já o documenta três seções acima. A regra e o método do próprio kit se contradizem,
e a contradição só aparece no modo Code.

**4. A tabela de gatilhos herda a mesma cegueira.** `TRIGGERS_BASE` fecha com
`["Fim da conversa", "Entrega os arquivos completos afetados: STATUS.md + CHANGELOG.md (se fechou
algo) + log do dia."]`. A tabela **nomeia o log** — este é o único lugar do kit que o amarra ao
fecho — mas o verbo continua sendo «entrega os arquivos completos», que em modo Code briga com a
regra de um canal por doc por ciclo.

**5. O custo de teto: a correção óbvia NÃO cabe, e a correção certa é NEGATIVA.** Este foi o achado
que mudou a recomendação, e ele só apareceu porque foi medido:

| variante medida em sandbox | padrão | +Code | combo | veredito |
|---|---|---|---|---|
| **v1.105.0, como está** | 6611/6900 | **522/550** | 7505/7600 | baseline |
| ramo Code **acrescentado** ao texto universal | 6611 | **558/550** | 7541 | **C28 VERMELHO** |
| ramo Code **substituindo** o texto universal | 6611 | **494/550** | 7477 | verde, 18/18 · 84/84 |

O orçamento do modo Code tem **28 caracteres de folga** — é o mais apertado dos três, e nenhum dos
briefs em circulação diz isso. Empilhar uma linha nova estoura em 8. Mas o texto universal («entregue
tudo inteiro») **não deveria valer em modo Code de qualquer forma**: trocá-lo por um texto próprio
devolve 28 caracteres ao orçamento em vez de gastar 36. A correção que o Mapsmith pediu é, medida,
**mais barata que não fazê-la**.

**6. Nenhum check protege o texto de fecho hoje.** Nenhuma das 84 checagens falhou quando substituí a
frase universal no ramo Code — o que significa que a variante enxuta passa, mas também que nada
impede uma regressão futura. Um check novo é parte da correção, não um extra.

**7. O que já está certo e não deve ser mexido:** o kit do Code (`CLAUDE.md` gerado) já manda gravar
o relatório em arquivo (D-108), já traz a ordem push→relatório (D-115) e a skill `/wrap` já sabe
escrever no STATUS. **A capacidade existe inteira; falta o disparo.**

---

## Opções consideradas

### (A) Corrigir só o prompt E — trocar «liste» por «entregue uma WO de registro»

É o que o item (6) do Mapsmith sugere, na letra. Barato, cirúrgico, custo de teto **zero** (prompts
não passam por `buildInstr`).

**Por que não basta:** o prompt E é lido **uma vez**, no fim da conversa, e só se o dono o colar. As
causas (c) e (d) — log sem gatilho de evento, fato do dono que nunca vira arquivo — acontecem **ao
longo** da conversa, muito antes do fecho. Corrigir só o prompt conserta o sintoma do dia 09 e deixa
o mecanismo que o produziu.

### (B) Corrigir só a regra de fecho (Instruções + CEREBRO), deixando o prompt como está

Cobre (a) e (b) em todo turno, e é onde mora a contradição estrutural. Custo de teto medido:
**−28 no orçamento do modo Code**, se a linha for substituída em vez de somada.

**Por que não basta:** o prompt E é a superfície que o dono efetivamente cola, e ele **contradiz** a
regra corrigida — o mesmo defeito da D-116 (a instrução de usar o mecanismo mora no arquivo que o
mecanismo vem consertar). Duas instruções concorrentes no mesmo momento é sorteio.

### (C) As duas superfícies, mais o gatilho de evento do log — recomendada

Quatro edições, uma por causa nomeada, todas no mesmo lugar em que a causa age:

1. **Prompt E, ramo Code** — «liste o que ainda falta registrar» → **«REGISTRE o que falta: WO de
   registro em `meta/workorders/` com o texto exato de cada inserção e a linha `/apply-wo`. A lista
   que você me mostrar no fim deve estar vazia.»** E a distinção em voz alta: **regenerar** doc que
   existe é proibido; **criar** o que não existe é obrigatório — o log do dia incluído, nominalmente.
   *(Custo de teto: zero.)*
2. **`buildInstr` + `buildClaudeMd`, seção de fecho** — ramo `codeModeOn()` **substituindo** o texto
   universal, não somando. *(Custo medido: −28 no incremento do Code.)*
3. **`TRIGGERS_BASE`** — o gatilho do log deixa de pender só de «Fim da conversa» e ganha eventos que
   **acontecem**: cortar versão, registrar um FIX/decisão, virar o dia. *(Custo de teto: zero — a
   tabela vive só no CEREBRO gerado.)*
4. **Regra nova de origem do fato** — *fato que o dono relata no chat não existe até estar num
   arquivo*, com a marca de origem: `[relatado pelo dono]` ≠ `[medido por instrumento]`. O lugar
   natural é a seção «Medição delegada» do CEREBRO, que já diz que **número medido e não registrado
   volta a ser deduzido no turno seguinte** — falta a metade simétrica, o número *relatado*.
   *(Custo de teto: zero.)*

Mais um check novo (**C41**) cobrindo as quatro pontas, com prova negativa de cada uma.

### (D) Mexer no orçamento do modo Code (`MODO_ORCAMENTO.code`, hoje 550)

**Descartada, e vale dizer por quê:** os 28 de folga são um sinal, não um obstáculo. A medição
mostrou que dá para pagar a correção **curando**, e a D-105 é explícita — o que se trava é o
incremento, e não caber é sinal de que outra linha precisa ser curada primeiro. Mexer no número
carimbaria como orçamento aceito um inchaço que ainda não existe.

---

## Recomendação

**Opção (C), com a edição 2 escrita como substituição.** As quatro edições cabem numa WO só: tocam
`src/index.template.html` em quatro pontos distantes entre si e nenhuma delas escreve nos `meta/` —
não há dois escritores, não há conflito de canal.

**A ordem importa dentro da WO:** a edição 2 é a que paga o orçamento, e a 1 é a que gasta zero. Se
por algum motivo a 2 for abandonada na aplicação, a 1 continua correta sozinha; o inverso também
vale. Nenhuma depende da outra para ficar coerente.

**O que fica de fora de propósito:** a taxonomia do que é «doc grande» versus «arquivo novo ou
pequeno» não vira regra numérica. O critério do dono, dado em `260810-0719.txt`, já é bom o
bastante — *«ou por meio do wo ou vc entregando o arquivo inteiro aqui para eu baixar (só para os que
realmente fazem sentido, como arquivo novo ou pequeno)»* — e transformar isso em limiar de linhas
convida a discussão que a regra existe para evitar.

---

## Riscos

- **A substituição da linha universal apaga uma frase que outros nichos podem estar usando.** Medido:
  nenhum dos 84 checks quebra, mas isso prova que ninguém vigia, não que ninguém depende. O check
  novo precisa afirmar **as duas** versões — a universal no modo padrão, a de registro no modo
  Code — senão a próxima curadoria reintroduz o defeito por descuido.
- **Gatilho de evento demais transforma o log em ruído.** «Virar o dia» é o mais frouxo dos três e é
  o que mais dispara. Se o log virar obrigação de turno, o custo aparece rápido e a correção é tirar
  esse gatilho, não os outros dois.
- **A marca de origem só vale se sobreviver ao handoff.** Foi exatamente ali que ela se perdeu no
  Mapsmith: o brief apagou a diferença entre relatado e medido. Se a regra entrar só no CEREBRO e não
  no formato do handoff, ela conserta o registro e não conserta a transferência.
- **Risco de escopo:** este é o segundo item do feedback do Mapsmith que nasce do prompt E. Se o
  terceiro aparecer, o prompt inteiro merece uma revisão de desenho, não mais um remendo — e aí é
  outra análise.

---

## Ponto de decisão

**Vai a (C) inteira, ou só as edições 1 e 2 (as duas superfícies do fecho), deixando o gatilho de
evento do log e a marca de origem para a leva seguinte?**

As edições 3 e 4 são as que mudam comportamento *durante* a conversa, e são também as que ainda não
têm um segundo caso medido fora do Mapsmith — as 1 e 2 têm o custo quantificado e o defeito lido no
fonte.

---

## Desfecho

**(C) inteira, aprovada pelo autor em 2026-08-11** («aceito a recomendação opção c»). Implementada e
testada em sandbox na **wo0085** → **D-119**, `KIT_VERSION 1.106.0`, check **C41** novo com cinco
provas negativas. Custo de teto **negativo**, como a medição previa: `+Code` de **522 para 514**,
combo de **7505 para 7497**; padrão e folga do `narrative` inalterados.

Uma nota sobre o desenho final, que a análise deixava em aberto: as edições 2 e 3 (as duas
superfícies do fecho) saíram divididas em **2a/2b e 3a/3b** — o título e o corpo de cada seção têm
âncoras separadas, e o título também precisava ramificar, senão o cabeçalho continuaria dizendo
«entregue arquivos completos» acima de um texto que manda registrar por WO.
