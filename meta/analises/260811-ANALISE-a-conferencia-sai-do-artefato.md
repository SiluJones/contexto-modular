# ANÁLISE — A conferência sai do artefato, inteira, e com a contagem declarada

**Status:** `Em discussão`
**Data:** 2026-08-11 · **Versão do kit na época:** v1.105.0 (commit `6bc5c8f`)
**Origem:** Mapsmith — `FEEDBACK-kit-09-lista-de-conferencias.md` (v2, 2026-08-10), IDEA-073,
`meta/analises/260810-ANALISE-o-instrumento-mede-o-que-e-facil.md` e
`260811-ANALISE-a-lista-sai-do-artefato.md`; Sand-Land-Map — `IDEAS.md` §«Feedback para o Kit»,
**FK-J** (2026-08-05) e **FK-K** (2026-08-08). Fricção de campo em `mapsmith_10.md`, blocos 9 e 11.
**Elos:** D-113 (medição delegada) · D-116 (varra pelo fato, não pela frase) · D-110 (parser, não
substring) · D-115 (o mesmo, uma superfície acima) · wo0070/D-104 (o modelo de WO)

---

## Problema

**Três projetos, três alturas, a mesma frase — e as três chegaram sozinhas.**

| onde | a pergunta | o que respondia |
|---|---|---|
| Mapsmith, **IDEA-073** (05/08) | de onde vem a lista de **conferências** da sonda? | da cabeça de quem escreveu, item a item |
| Sand-land, **FK-J** (05/08) | de onde vem a lista de **lugares a mudar** num grep global? | do comentário de quem reclamou do problema |
| Mapsmith, **feedback (9)** (10/08) | de onde vêm os **passos de verificação** de uma WO? | de plausibilidade, sem tocar o código que a WO mudou |

As duas primeiras são do **mesmo dia**, em projetos que não combinaram — e o sand-land registrou a
convergência por escrito: *quando a correção e o instrumento saem do mesmo inventário, o que ficou de
fora fica invisível dos dois lados*. É a terceira convergência independente desta negociação, depois
da sonda (FK-I) e do «quem decide» (que virou D-112).

**O que já custou, com número:**

- **FIX-0010 (Mapsmith).** A conferência de 09/08 dizia `45/45 existem`, `extensões {'.webp': 45}`,
  `sprite_source existe: sim`. Tudo verde, com os 45 ícones sem canal alfa e visualmente destruídos.
  **Nenhum instrumento abriu uma imagem.**
- **FIX-0009 (Mapsmith).** 446 screenshots apagados, e o único relatório que registrou a perda os
  chamou de «candidatos a colisão» — fato certo, causa errada.
- **FK-K (sand-land).** O inventário dos pontos que montavam caminho saiu de um `grep … | head -25`,
  **truncado**. O vigésimo-quarto ponto ficou de fora. Foi pego porque a WO dizia «onze pontos» e o
  executor achou doze — **a contagem declarada é que salvou, não o grep**.
- **DEC-036 e DEC-037 (sand-land).** Dois erros na mesma semana: um grep de `data.meta` achou um
  consumidor onde havia dois (o padrão descrevia o nome da **variável**, não do **campo**); e o
  inventário de «onde a geometria está escrita» veio do comentário que reclamava dela, deixando o
  `app.css` de fora.

**E o defeito subiu de camada sem ninguém notar** — esta é a parte que o Mapsmith não teria
descoberto sozinho, e que ele registrou com honestidade: a IDEA-073 diagnosticou a lista-feita-à-mão
no *instrumento* em 05/08, foi **aprovada no mesmo dia**, e cinco dias depois o mesmo assistente
escreveu três passos de verificação de WO pelo mesmo vício. *«Um diagnóstico registrado sobre uma
camada deve ser lido como pergunta sobre todas as outras.»*

**A fricção concreta, na voz do dono** (`mapsmith_10.md`, bloco 9), sobre a linha «Peça no próximo
turno» que o próprio kit especifica:

> *«Uma dúvida sobre essa linha que vc escreve “wo0072 aplicada, aqui o relatório; o teste manual deu
> X”. Mas por acaso eu deveria fazer algum teste? (…) se sim vc deveria instruir-me como fazer o
> teste explicando certinho aqui no chat, se não é para mim e o code já fez, vc não precisa colocar
> ela nessa linha (…) me confunde.»*

E no bloco seguinte, o pedido explícito: *«sobre essa mecânica de ter critério em apontar o que eu
tenho que testar (e não falar algo confuso como “o teste manual deu X”), eu quero que seja
apresentado como feedback para o kit.»*

---

## Restrições / o que foi medido

Lido no fonte (`src/index.template.html`, v1.105.0), com o repo reconstruído em sandbox e o harness
verde em **18/18 · 84/84**.

**1. O modelo de WO tem um passo de verificação e nenhum dos três campos.** `buildWoTemplate()`
entrega, na seção «Depois de aplicar — conferência antes do commit»:

> `- [ ] **Teste manual que a validacao NAO cobre** (obrigatorio quando a WO toca dado carregado ou
> UI): [caso feliz · caso de borda · regressao possivel].`

Não diz **quem roda**, não pede que o passo demonstre **por onde a execução passa pelo código que a
WO mudou**, e não distingue «passou» de «não foi exercitado». As três lacunas do feedback (9), na
mesma linha.

**2. A virtude já existe; o gatilho é que não.** O comportamento universal `careful_guides` diz, com
todas as letras: *«Quando pede que o usuário faça algo (salvar um arquivo, rodar um comando, aplicar
uma mudança), explica exatamente o quê, onde, como, e o que esperar — e deixa claro o que é decisão
dele versus passo necessário.»* Ela estava ligada, nos 18 nichos, enquanto o dono recebia «o teste
manual deu X». **É a prova viva do item (7) do Mapsmith: princípio escrito no infinitivo não tem
hora.** O gatilho falta exatamente onde o pedido nasce — na parte (b) do item **Próximo** do bloco de
fecho, que o kit especifica como «a frase que o usuário pode mandar de volta» e que nada obriga a ser
uma frase que ele **saiba produzir**.

**3. Metade da FK-J já entrou pela porta dos fundos, e a outra metade não.** A regra de higiene
«**Varra pelo fato, não pela frase**» (D-116, wo0082) manda procurar o termo literal, a paráfrase e
as listas de pendência. Isso cobre a cláusula (a) da FK-J — *grepe o fato, não a expressão de
acesso*. **Não cobre a cláusula (b)** — *de onde sai a lista do que procurar* — nem a FK-K inteira.
E a diferença é a que produziu os dois erros do sand-land: nos dois casos o assistente varreu bem
uma lista que já nascera errada.

**4. Custo de teto: zero, medido.** As três superfícies candidatas — `buildWoTemplate()`, as
`HYGIENE_RULES` e a especificação do bloco de fecho — vivem **fora** de `buildInstr`. Confirmado em
sandbox: o modelo de WO não é lido por nenhuma função das Instruções, e o C27 não impõe teto de
tamanho a ele (hoje reporta 5.921 caracteres, sem limite superior). Uma frase nova nas Instruções
seria possível, mas **não é necessária** — e o orçamento do modo Code tem só 28 de folga (ver a
análise irmã do fecho).

**5. A convergência não é toda independente, e vale registrar como a D-117 fez.** FK-I diz
textualmente que a formulação do Mapsmith é melhor que a do sand-land e a adota; a FK-J cita a carta
12 do Mapsmith. Os dois projetos **se leem**. O que a repetição prova é **reprodução** — que é mais
forte que anedota e mais fraco que convergência cega. Afirmar convergência independente aqui seria
inflar a evidência.

---

## Opções consideradas

### (A) Só a regra de comportamento, sem tocar no modelo de WO

Acrescentar às `HYGIENE_RULES`: *nunca peça ao dono um resultado que você não ensinou a produzir*.
Custo zero, uma linha.

**Por que não basta:** é exatamente o formato que já falhou. O `careful_guides` diz quase isso desde
sempre e não disparou — porque virtude não tem hora. Repetir a virtude num segundo lugar é o
tratamento que o item (7) do Mapsmith diagnostica como insuficiente.

### (B) Só os campos no modelo de WO

Os três campos por passo de verificação, no `buildWoTemplate()`. Custo zero, forma pronta, e é o
lugar onde o autor da WO está quando comete o erro.

**Por que não basta:** o «o teste manual deu X» não nasceu numa WO — nasceu na **linha de fecho do
chat**, que é outra superfície. E deixa a FK-K de fora inteira.

### (C) As três superfícies, uma por altura do defeito — recomendada

O defeito é o mesmo em três alturas, e cada altura tem um lugar próprio no kit:

1. **Modelo de WO (`buildWoTemplate`) — a altura do passo de verificação.** Cada passo ganha três
   campos: **Quem roda** (`quem aplica` por padrão; só vai ao dono o que **toca rede de terceiro** ou
   **destrói algo fora do repositório** — leitura e operação reversível na mesma máquina nunca são
   dele); **Chega no ramo?** (uma linha nomeando arquivo e função por onde a execução passa pelo
   código que a WO mudou — se quem escreve não consegue traçar a linha, o passo não está pronto); e
   **Prova de vida** (quando «passou» se parece com «nada aconteceu», o passo precisa do par negativo
   que force o sinal — `[]` só significa algo depois de você ter visto a mesma checagem devolver
   `['x']`).
2. **Modelo de WO, seção «Armadilhas» — a altura do inventário (FK-J b + FK-K).** Quando o resultado
   de uma varredura vira **inventário** — a lista do que precisa mudar —, ele (i) sai do **artefato**
   («que lugares declaram esta grandeza?»), nunca da memória nem do texto de quem reclamou; (ii)
   **não pode ser paginado nem truncado**; e (iii) **a WO declara quantos pontos achou**, para que
   quem aplica possa contestar o número antes de agir.
3. **Bloco de fecho, item «Próximo (b)» — a altura do gatilho.** A frase pedida de volta ao dono só
   pode conter resultado que ele saiba produzir: se o passo é do executor, a linha pede o
   **relatório**, não o resultado; se é mesmo do dono, o **comando exato, quem roda e o que esperar
   ver** vêm no mesmo turno. É o par que faltava ao `careful_guides`: a virtude no corpo, o gatilho
   com o evento na frente.

Mais um check novo (**C41**) com prova negativa de cada ponta.

### (D) Tratar «ideia aprovada com gatilho vencido» como dívida cobrável

O terceiro achado do feedback (9), e o que o Mapsmith diz que não teria tido sozinho: o `IDEAS.md`
tem um estado **sem cobrança** — aprovada, gatilho vencido, não implementada. A IDEA-073 ficou cinco
dias assim, e o custo apareceu longe de onde ela morava.

**Recomendação: fora desta leva, e não por ser fraco.** O kit já teve duas passadas de taxonomia de
IDEAS (D-104, D-106) e recusou deliberadamente aumentar o vocabulário obrigatório de todo projeto;
uma seção nova no STATUS é exatamente esse tipo de acréscimo. E o caso aqui tem **uma ocorrência
medida**, num projeto que organiza o IDEAS por status+ID — que já é desvio registrado. Vai para o
`IDEAS.md` do kit **com gatilho de repetição**: se um segundo projeto relatar o mesmo estado sem
cobrança, vira análise própria.

---

## Recomendação

**Opção (C), nas três superfícies, numa WO só.** As três edições vivem no mesmo arquivo
(`src/index.template.html`), em pontos distantes, e nenhuma toca as Instruções — **custo de teto
zero, medido**, o que também significa que ela **não compete** com a análise irmã do fecho pelo
orçamento do modo Code.

**Sobre a ordem entre as duas análises:** o fecho vem primeiro. Ele está sangrando — custou uma
conversa reaberta, cinco dias sem log e uma frente apontando para um arquivo inexistente —, e esta
aqui é refinamento de um artefato que já funciona. Não há dependência técnica entre as duas: podem
ser aplicadas em qualquer ordem, e a recomendação é de prioridade, não de sequência.

**Sobre a genealogia, no `DECISIONS.md`:** registrar que os dois projetos se leem (FK-I e FK-J citam
o Mapsmith por escrito). O que a repetição prova é reprodução — mais forte que anedota, e uma
afirmação diferente de convergência independente. A D-117 já fez isso uma vez; o precedente vale.

---

## Riscos

- **Três campos por passo é cerimônia se o passo for trivial.** O feedback (9) mede o custo em «três
  linhas por passo», e reconhece que só o «chega no ramo?» é trabalho de verdade. O modelo precisa
  dizer em voz alta que os campos são **por passo de verificação**, não por item de checklist —
  senão a próxima WO de doc nasce com três campos vazios em cada linha do `git diff`.
- **«Quem roda» pode virar desculpa para empurrar tudo ao executor.** O critério tem de ficar
  positivo e curto — rede de terceiro, ou destruição fora do repo —, senão o pêndulo vai para o outro
  lado e o dono deixa de ser consultado onde deveria.
- **A cláusula anti-truncamento é fácil de escrever e fácil de ignorar.** Ela só morde junto com a
  contagem declarada: foi o número na WO («onze pontos») que pegou o erro, não a proibição do `head`.
  Se apenas uma das duas entrar, que seja a contagem.
- **O gatilho do bloco de fecho pode não disparar pelo mesmo motivo que o `careful_guides` não
  disparou.** A defesa é a posição — dentro do item «Próximo», onde o pedido é redigido — e não o
  texto. Se o próximo relato de campo mostrar «o teste manual deu X» de novo depois disto, o
  diagnóstico é que gatilho em especificação de formato também não basta, e aí o remédio muda de
  natureza.

---

## Ponto de decisão

**Duas perguntas, e a segunda só se a primeira for «sim».**

1. **A leva vai nas três superfícies (C), ou fica só no modelo de WO (B) nesta rodada?** As três
   custam o mesmo — zero de teto — e a terceira é a única que ataca a fricção que você nomeou por
   escrito («não falar algo confuso como “o teste manual deu X”»).
2. **Se for (C): a dívida de gatilho vencido (D) fica mesmo parqueada no `IDEAS` com gatilho de
   repetição, ou você quer vê-la nesta leva?** Ela é o único item deste pacote que muda o formato de
   um doc que todo projeto mantém, e por isso o meu default é esperar o segundo caso.
