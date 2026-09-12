# ANÁLISE — O caso Fallout 76: por que nenhum nicho do kit serve, e o que isso revela

> **Status:** Em discussão — **revisão 2** (2026-09-11, tarde), depois das respostas do dono em `260911-2004.txt`
> **Data:** 260911 · **Base:** KCM v1.122.0, commit `4b6403e` · projeto `Fallout 76` no mount de 2026-09-10 20:19 (20 arquivos, **sem controle de versão**) · `Projeto-Fallout_76.md` com os 8 blocos da conversa de lá
> **Vira:** — · **Decisão:** —
> **Origem:** o dono montou um projeto de guia/companion de jogo usando o nicho **dev** do KCM, apontou que o resultado ficou raso em vários pontos, e pediu que o caso fosse estudado a fundo.

---

## Antes de tudo: a pergunta que eu fiz errado

No turno passado eu ofereci «refinamento dos nichos» ou «nicho novo» sem explicar o que a primeira opção queria dizer — e sem sequer nomear **qual** nicho seria refinado. A pergunta era impossível de responder, e a reclamação está certa.

**O que eu tinha em mente:** o KCM já tem os nichos **`game` (Game Design)** e **`rpg` (Mestres)**, e os dois lidam com jogo. «Refinamento» seria esticar um deles para cobrir este caso, em vez de criar o décimo nono.

**Medindo, essa saída não se sustenta** — e o motivo é mais interessante que a conclusão. Está na seção seguinte.

## Problema

O projeto Fallout 76 produziu artefatos que funcionam, mas com quatro defeitos que o dono nomeou e que têm a mesma raiz:

1. **Quatro arquivos de guia para duas fases**, dois a dois com o mesmo título.
2. **`MECANICAS.md` como arquivo único**, que obriga a reler tudo para achar o que mudou.
3. **Nomes de guia presos à fase** (`guia-fase1`), sem lugar para a época do jogo nem para uma segunda jogada.
4. **Todos os `meta/` do nicho dev foram herdados**, incluindo os que não servem.

## Restrições / o que foi medido

### Os quatro guias — e aqui eu estava errado

No turno passado afirmei que «o kit não tem regra para dizer qual arquivo apagar». **Falso, e o dono estava certo ao mandar conferir:** o bloco 8 do `Projeto-Fallout_76.md` traz, no handoff, exatamente isto — *«`guias/guia-fase1-early-game.md`, `guias/guia-fase2-build-economia.md` → substituem `guia-fase1.md`/`guia-fase2.md` antigos (apague os antigos do Projeto pra não ficar duplicado)»*.

A instrução existiu. **O defeito é outro, e é mais fino:**

| Arquivo | Bytes | Citado por |
|---|---|---|
| `guia-fase1.md` (antigo) | **10.271** | 1 doc |
| `guia-fase1-early-game.md` (novo) | 7.303 | 4 docs |
| `guia-fase2.md` (antigo) | **14.404** | 1 doc |
| `guia-fase2-build-economia.md` (novo) | 8.159 | 5 docs |

O substituto é **29% e 43% menor** que o substituído. A razão é legítima — o conteúdo migrou para o `MECANICAS.md` recém-criado —, mas **isso não foi dito ao lado do pedido de apagar**. E o dono explicou a decisão dele com precisão: não tinha lido os novos, viu que eram menores, e guardou os dois.

**Essa é a reação certa diante da informação que ele tinha.** Ninguém apaga o arquivo maior confiando num pedido que não explica para onde foi o que sumiu. A regra que falta, então, não é «diga qual apagar» — é:

> **Arquivo que encolhe na substituição tem de vir com o que saiu e para onde foi.** Sem isso, quem recebe não consegue distinguir «enxugou» de «perdeu conteúdo», e guardar os dois passa a ser a escolha racional.

E isso vale para os 18 nichos, não só para este caso: é o mesmo gesto da regra de higiene ao encolher (P12), aplicado à **entrega**, não ao documento.

### O calendário do jogo, que decide o desenho dos guias

<cite index="12-1">O Fallout 76 segue, desde 2026, um ciclo de uma atualização grande seguida de um patch de apoio, com cerca de quatro ciclos por ano — o que dá oito patches anuais: quatro lançamentos titulados e quatro correções de apoio.</cite> <cite index="11-1">Cada atualização de conteúdo inicia uma temporada nova, e sai aproximadamente a cada três meses.</cite>

E esses patches **mexem exatamente no que um guia ensina**: <cite index="15-1">a atualização de abril de 2026 reformulou por completo o cálculo de dano de condição da armadura e alterou o comportamento das explosões de ataques com múltiplos projéteis.</cite> <cite index="16-1">O balanceamento de 2026 suavizou os picos extremos de dano e tornou as builds híbridas mais viáveis</cite>. O próprio projeto já registrou um caso assim: o sistema de perks de dano foi reformulado em março de 2025, invalidando boa parte dos guias de build que existiam.

**A defasagem não é hipótese: é calendário.** Um guia de build tem meia-vida de cerca de três meses. Um guia de rota de quest, muito mais. **São dois eixos independentes**, e o desenho atual mistura os dois no mesmo arquivo.

### Arquivo único × granular — a pesquisa aceita a sua objeção

A prática documentada de wikis e de documentos de design vai na direção que o dono apontou. <cite index="3-1">Documentos de design são «coisas vivas», e a estrutura de wiki facilita mantê-los vivos: com um tópico por página, escrever curto deixa de ser opcional, e a higiene do documento sobe — enquanto o documento único gigante vira uma massa espalhada por centenas de páginas em que se perde tempo procurando.</cite> <cite index="1-1">Uma página única que tenta cobrir tudo raramente é a melhor resposta para qualquer pergunta específica.</cite>

E há um conselho que fala direto do problema da defasagem: <cite index="10-1">escrever explicando a versão mais recente testada e mover as notas irrelevantes para páginas separadas, considerando a manutenção — não se deve querer gastar muito tempo atualizando um guia depois de cada atualização.</cite>

**A objeção do dono se sustenta, e o argumento dele é ainda melhor que o da literatura:** com arquivo único, ele não consegue responder «o que mudou desde a última vez que li» — nem distinguir o que é novo no jogo, o que é novo no documento e o que foi corrigido. Num assunto que muda oito vezes por ano, isso é fatal.

### Quais `meta/` o projeto realmente usa

| Documento | Bytes | Situação |
|---|---|---|
| `SPEC.md` | **888** | **modelo intacto** — «[nome da feature]», «preencha ANTES de codar» |
| `HISTORY.md` | **1.095** | **modelo intacto** |
| `CHANGELOG.md` | 2.624 | usado, mas registrando mudanças **do projeto** |
| `DECISIONS.md` | 11.892 | usado de verdade |
| `MECANICAS.md` | 11.783 | criado do zero por lá |
| `CONTEXT.md` | 10.901 | usado |
| `GLOSSARY.md` | 4.081 | usado |
| `IDEAS`, `ROADMAP`, `STATUS` | 3–4 KB | usados |

**Dois documentos foram copiados e nunca preenchidos**, e o próprio projeto registrou isso em DECISIONS. Não é desleixo: `SPEC.md` pergunta «o que construir e quando está pronto» — **não há nada sendo construído**. A resposta à pergunta do dono («precisa de todos esses meta?») é **não**, e está medida.

### O que o kit já tinha, no lugar errado

O nicho **`game`** do KCM já define **`MECANICAS.md`**, além de `NIVEIS.md`, `ROTEIRO.md`, `UNIVERSO.md`, `ARTE-E-SOM.md` e `PRODUCAO.md`. O nicho **`rpg`** define `MUNDO.md`, `REGRAS-CASEIRAS.md`, `SESSAO.md` e `CAMPANHA.md`.

**O projeto reinventou um documento que o kit já tinha** — porque estava no nicho `dev`, e ninguém olha o vocabulário de um nicho vizinho.

## O achado que reorienta a análise inteira

Por que `game` não serve, se ele tem `MECANICAS.md`?

**Porque a direção da verdade é oposta.** No nicho `game`, `MECANICAS.md` registra **decisão de design**: o dono decide o que o jogo faz, e o documento é a fonte da verdade — se o documento e o jogo divergem, **o jogo está errado**. No caso Fallout, `MECANICAS.md` registra **fato externo observado**: a Bethesda decide, o documento tenta acompanhar, e se os dois divergem **o documento está errado**.

Isso não é detalhe de tema. **É a inversão do pressuposto que todos os 18 nichos compartilham:** em todos eles o dono é a fonte da verdade — ele escreve o livro, projeta o jogo, escreve o código, monta a campanha. O documento envelhece só quando o dono muda de ideia.

Num companion, **a verdade é externa e se move sozinha, em calendário conhecido e alheio**. Daí decorre tudo o que falhou:

- `SPEC.md` não serve porque **não há nada a especificar** — o artefato já existe e é de outra pessoa.
- `CHANGELOG.md` quase serve, mas do jeito errado: o que importa não é o que mudou no *projeto*, é o que mudou **no jogo**.
- Um guia envelhece **sem ninguém tocá-lo**, o que nenhum nicho atual precisa tratar.
- A pergunta «isto ainda é verdade?» passa a ser **rotina**, não exceção.

**É nicho novo — e não pelo tema, pelo pressuposto.** Refinar `game` significaria fazer um nicho sustentar as duas direções ao mesmo tempo, e o vocabulário colidiria justamente onde parece coincidir.

E a família é maior que jogo: **acompanhar um artefato que outra pessoa controla e que muda sozinho** cobre também o projeto de montagem de hardware que o dono mencionou, certificação com ementa que muda, acompanhar legislação, seguir uma stack de terceiros. O eixo do nicho é esse, não «jogo».

## Opções consideradas

**A — Refinar `game` ou `rpg`.** *Descartada pela seção acima:* colide no ponto em que parece caber.

**B — Usar `custom`.** É a saída honesta **hoje** e provavelmente foi o que deveria ter sido feito em vez de `dev`. Mas o `custom` não carrega vocabulário próprio: cada projeto reinventa `MECANICAS.md` do zero — foi exatamente o que aconteceu.

**C — Nicho novo, «companion / acompanhamento de artefato externo».** Vocabulário próprio, conjunto de documentos enxuto, e o tratamento da defasagem como parte do método.

**D — Nada; registrar o caso como aprendizado.** Barato e legítimo, mas joga fora vocabulário que já foi testado em uso real. *(A versão 1 desta análise dizia «testado duas vezes, Fallout e hardware». **Estava errado** — ver a revisão 2 no fim.)*

## Recomendação

**C**, com quatro peças de desenho que saem direto do que foi medido.

### 1. O conjunto de documentos, enxuto

Entram, com o papel redefinido: `CONTEXT` (o que estou acompanhando e com que objetivo), `STATUS`, `DECISIONS` (escolhas de rota, não de design), `IDEAS`, `ROADMAP` (as fases do meu progresso), `GLOSSARY` (jargão do artefato — vale muito aqui), `LOG-TEMPLATE` e `logs/`.

**Saem:** `SPEC.md` e `HISTORY.md` — medidos como modelo intacto, e o primeiro pergunta o que não existe.

**Muda de significado:** o `CHANGELOG` deixa de registrar o projeto e passa a registrar **o artefato externo** — o que mudou no jogo, quando, e o que isso invalidou aqui dentro. É o documento que responde «o que mudou desde a última vez que li», que é a pergunta que o dono fez.

**Entram como documentos do nicho:** uma pasta `mecanicas/` e uma pasta `guias/` (abaixo).

### 2. Mecânicas em pasta, com índice — a objeção do dono é acatada

`mecanicas/` com **um arquivo por sistema** (`special.md`, `perks.md`, `legendary.md`, `camp.md`, `economia.md`…) e um `mecanicas/INDICE.md` de uma linha por sistema. A pesquisa apoia, e a razão prática é a dele: **com um arquivo por sistema, «o que mudou» é uma pergunta que a lista de arquivos responde** — data de modificação, e o carimbo dentro.

### 3. Os dois eixos, separados — e é isto que resolve a defasagem

O erro do desenho atual é misturar **progresso do jogador** (fase 1, fase 2) com **época do jogo** (patch) no mesmo arquivo.

- **O nome carrega o eixo estável:** o assunto e o progresso (`guias/01-primeiras-horas.md`). Nome não leva data — data no nome de série ordenada quebra a leitura, que é o que a errata da wo0112 já registrou.
- **O conteúdo carrega o eixo volátil:** cada afirmação que depende de balanceamento leva o carimbo do patch em que foi verificada — `[verificado no patch de 2026-04-21]`. É a mesma família da marca de origem (`[medido no repo]` / `[relatado pelo dono]`) que a wo0114 instalou aqui, aplicada ao tempo em vez da fonte.
- **Daí sai um gesto barato que hoje não existe:** quando um patch sai, não se relê tudo — procura-se pelos carimbos anteriores a ele. **A revalidação vira uma busca, não uma releitura.**

**E o new game+ / segunda jogada deixa de ser problema:** o guia é do *assunto*, e o que é da *jogada* mora no `STATUS` e no `logs/`. Uma jogada nova reinicia o STATUS sem tocar num guia sequer.

### 4. A regra da entrega que encolhe

Genérica, para os 18 nichos: **ao entregar um arquivo que substitui outro e ficou menor, diga o que saiu e para onde foi.** Uma linha. Ela teria evitado os quatro arquivos, e a ausência dela é o que tornou racional guardar os dois.

## Riscos

- **Nicho novo é caro.** São Instruções, CEREBRO, docs e checks, com teto e harness. O kit tem 18 e cada um custou ciclos. **Mitigação:** o `custom` existe justamente para provar um nicho antes de promovê-lo — e o Fallout já é essa prova, rodando.
- **Um caso não faz um nicho.** O Fallout é uma amostra de **um**. *(A versão 1 tratava o projeto de hardware como o segundo caso do MESMO nicho. Era inferência minha, não medição — ver a revisão 2.)*
- **O carimbo de patch pode virar teatro** — carimbar tudo sem ter verificado. **Mitigação:** carimbo só em afirmação que depende de balanceamento; o que é geografia ou roteiro de quest não leva carimbo, e isso precisa estar dito.
- **Pasta `mecanicas/` pode fragmentar demais.** Um arquivo por sistema é útil; um por perk seria absurdo. A granularidade certa é a que a wiki de mecânicas descreve: <cite index="4-1">nem tão geral que vire categoria, nem tão específico que seja variante de outra coisa</cite>.
- **Esta análise não leu tudo.** Li os 8 blocos do `Projeto-Fallout_76.md`, os 4 `.txt` de pedido, o manifesto e os cabeçalhos e tamanhos dos 20 arquivos; **li por inteiro** o `SPEC`, o `HISTORY` e a comparação dos guias. **Não li integralmente** `MECANICAS.md`, `CONTEXT.md` nem os quatro guias — se a decisão for escrever o nicho, eles precisam ser lidos linha a linha, porque é de lá que sai o vocabulário.

## Ponto de decisão

1. **Confirma nicho novo** (opção C), com o eixo sendo «acompanhar artefato externo que muda sozinho» — e não «jogo»?
2. **Espera o projeto de hardware** chegar ao mount para escrever com dois casos, ou escreve já com o Fallout e ajusta depois?
3. **A regra da entrega que encolhe** (peça 4) é independente de tudo isto e vale para os 18 nichos hoje. Vai numa WO própria agora?
4. **O que fazer com o Fallout enquanto isso:** deixo como está, ou entrego a reorganização (pasta `mecanicas/`, renomeação dos guias, `SPEC`/`HISTORY` fora) como pacote de arquivos para o dono aplicar lá, já que aquele projeto não tem controle de versão nem Code?

---

# REVISÃO 2 — 2026-09-11, depois das respostas do dono

## 1. O erro do «hardware»: era inferência minha, e sai

**O dono nunca disse que os dois projetos seriam o mesmo nicho.** Ele disse que testou uma adaptação para companion de jogo e, **em outro lugar**, uma adaptação para diagnóstico de hardware. Fui eu que os juntei, a partir de uma frase de uma linha, para sustentar o argumento de que a família era maior que «jogo».

**Isso é o defeito que este projeto chama de previsão vestida de observação:** eu não li um único arquivo do projeto de hardware, não sei o que ele produz, e mesmo assim escrevi «o dono já testou duas vezes». **Não testou. Testou dois projetos diferentes**, e a semelhança existia só no meu raciocínio.

**A consequência prática é maior que o desconforto:** a versão 1 recomendava *«esperar o segundo caso chegar ao mount antes de escrever o nicho»* — e esse conselho dependia inteiramente da inferência. **Sai.** Não há segundo caso conhecido; há um caso medido (Fallout) e um projeto sobre o qual não sei nada.

**Sobre a pergunta dele — hardware caberia mesmo assim?** Pelo que consigo argumentar **sem** ver o material: o traço que eu tinha visto é real, mas fraco. Diagnóstico de hardware também lida com verdade externa que muda (peças novas, drivers, preços). Só que o **padrão de uso** parece outro: um companion de jogo acompanha **um artefato específico ao longo do tempo**, com progresso próprio e um fim (ou uma temporada); diagnóstico de hardware responde **perguntas pontuais sobre máquinas diferentes**, sem progresso acumulado e sem alvo único. São formas distintas o bastante para que juntá-las produzisse um nicho que não serve direito a nenhum dos dois — que é exatamente o defeito do caso Fallout dentro do `dev`.

**Então: trato o nicho como sendo de companion de artefato acompanhado, com o Fallout como único caso, e o hardware fica fora até você trazer o material.** Se ao ler aquilo eu achar que cabe, digo — com arquivo na mão, não com inferência.

## 2. «Muitos nichos pesa?» — a resposta é técnica, e é não

A preocupação é justa, mas o custo não está onde parece. Medido agora, nos 18 nichos:

| | Instruções | do teto (6.900) |
|---|---|---|
| `narrative` | **6.622** | 96% |
| `game` | 6.530 | 95% |
| `dev` | 6.019 | 87% |
| `business` | 5.278 | 76% |
| `product` | 5.263 | 76% |
| `custom` | **3.297** | 48% |

**O que limita o kit inteiro é o nicho MAIS PESADO, não a quantidade.** Toda regra nova que entra nas Instruções precisa caber no `narrative` — foi ele que quase barrou a wo0113, e é ele que decide o que os outros 17 podem receber. **Um nicho novo e enxuto não piora isso em nada**: entra com folga de 30% ou mais e nunca vira o gargalo.

O custo real de um nicho novo é **de uma vez** (escrever o módulo, os documentos, os checks) e **de leitura** (mais um item na lista da interface). O custo **recorrente** — o que aperta o kit todo turno — vem do teto do pior caso, e não muda.

**Sobre os nichos que nunca foram usados** (produto, negócios, carreira, HQ, cozinha): eles não estão custando teto aos outros, mas estão custando **confiança** — um catálogo em que um terço nunca foi rodado é um catálogo que ninguém sabe se funciona. **Isso é frente própria** e tem duas saídas honestas: rodar um piloto de cada, ou marcar quais são testados em uso real e quais são desenho não verificado. Fica registrado, não entra aqui.

## 3. Os nomes — estudados, com o que cada um promete

O dono tem razão em cobrar: a versão 1 herdou `CONTEXT`, `CHANGELOG`, `DECISIONS` e `guias/` **do projeto Fallout**, que é um piloto usando nomes do `dev`. Reaproveitar nome por inércia é o oposto de desenhar um nicho.

### 3.1 `guias/` — e a descoberta é que nenhum dos dois nomes que você ofereceu serve sozinho

**Detonado e walkthrough são a mesma coisa, e são uma coisa específica:** (cite index="17-1">um walkthrough é um guia voltado a ajudar o jogador a completar o jogo inteiro ou elementos específicos dele</cite>; (cite index="22-1">detalha os passos envolvidos em **vencer** o jogo</cite>. **Guia (strategy guide) é o gênero maior:** (cite index="19-1">a linha entre guia de estratégia e walkthrough é difusa, com o primeiro frequentemente contendo o segundo ou sendo escrito em torno dele</cite>.

**E aí está o problema: o Fallout 76 não tem «vencer».** É jogo-serviço, com temporadas que se renovam quatro vezes por ano. Um detonado no sentido literal **não existe** para ele — o que existe são rotas de progressão, metas e prioridades. Chamar de `detonado/` prometeria uma linearidade que o conteúdo não tem.

Mas o nicho não pode servir só a jogo-serviço: **um single-player com campanha tem fim, e aí detonado é exatamente a palavra certa.** Então a pasta precisa comportar os dois.

| Nome | O que promete | Serve para jogo com fim? | Para jogo-serviço? |
|---|---|---|---|
| `detonado/` | passo a passo até terminar | **sim, exato** | não — não há o que terminar |
| `walkthrough/` | idem, em inglês | sim | não |
| `guias/` | qualquer coisa sobre o jogo | sim, mas vago | sim, mas vago |
| `rotas/` | caminho recomendado, sem prometer fim | sim | **sim** |
| `percurso/` | idem, menos usual em português | sim | sim |

**Recomendo `rotas/`**, com os arquivos numerados por ordem de leitura (`rotas/01-primeiras-horas.md`). O nome não promete um fim que o jogo-serviço não tem, e não impede que um projeto de jogo linear escreva ali um detonado do começo ao fim — que é, afinal, uma rota com destino.

**A distinção que importa de verdade não é o nome, e sim o par:** `rotas/` é **sequência** (a ordem importa, e cada passo tem um momento em que se aplica); `mecanicas/` é **referência** (a ordem não importa, e consulta-se quando a dúvida aparece). Todo companion precisa dos dois, e o defeito do Fallout hoje é que os dois estavam misturados no mesmo arquivo.

### 3.2 `CHANGELOG` — o dono está certo, e o nome é pior do que parece

`CHANGELOG` é um termo com significado fixo em software: **o que mudou no produto que EU mantenho**. Aqui o documento registraria o contrário — o que mudou no artefato que **outra pessoa** mantém. É um nome que diz a coisa certa com o dono errado.

| Nome | Avaliação |
|---|---|
| `CHANGELOG.md` | **descartado** — promete mudanças do projeto |
| `PATCHES.md` | claro para jogo; **específico demais** para um nicho que quer servir a outros artefatos |
| `UPSTREAM.md` | tecnicamente exato, jargão de quem usa git; ruim para leitura humana |
| `ATUALIZACOES.md` | **recomendado** — serve a jogo, a hardware, a norma; e é a palavra que o próprio jogo usa |

E o papel dele precisa ser escrito, porque é o que responde a pergunta que motivou tudo: **cada entrada diz o que mudou no artefato, quando, e o que isso invalidou aqui dentro** — com link para os arquivos de `mecanicas/` e `rotas/` que passaram a estar defasados. É esse documento que transforma «reler tudo» em «ler as três linhas do último patch».

### 3.3 `CONTEXT` — o problema é que ele mistura duas coisas

No `dev`, `CONTEXT.md` guarda «o que é este projeto». Num companion, há **dois** contextos que envelhecem em ritmos diferentes:

- **O artefato:** que jogo, qual edição, qual plataforma, qual versão instalada. Muda quando o artefato muda.
- **Eu:** meu estilo, meu objetivo nesta jogada, o que já fiz, o que não pretendo fazer. Muda quando eu mudo — e **reinicia inteiro numa segunda jogada**.

Misturar os dois é o que torna o new game+ confuso. Separados:

- **`ALVO.md`** — o artefato acompanhado, sua versão, onde ficam as fontes confiáveis.
- **`STATUS.md`** — eu, agora: nível, progresso, jogada atual. É o arquivo que se zera numa jogada nova, **e só ele**.

`CONTEXT.md` sai do conjunto: o que ele guardava foi repartido entre os dois acima.

### 3.4 `DECISIONS` — muda de nome porque muda de natureza

No kit, `DECISIONS.md` registra decisões **de projeto** e é imutável. Num companion, o que se registra é outra coisa: **escolhas minhas dentro do artefato, que fecham portas** — escolhi esta build, esta facção, este caminho. Elas têm consequência e custo de reversão, e o valor de registrá-las é lembrar **por que** escolhi e **o que abri mão**.

Recomendo **`ESCOLHAS.md`**, com o mesmo rigor do `DECISIONS` (append, imutável, uma entrada por escolha com o porquê e o que ficou de fora). O nome descreve o que é, e não empresta autoridade de um documento que faz outra coisa.

### 3.5 Conjunto final proposto

| Documento | Papel |
|---|---|
| `ALVO.md` | o artefato: versão, plataforma, edição, fontes confiáveis |
| `STATUS.md` | eu, agora — o único que reinicia numa jogada nova |
| `ESCOLHAS.md` | escolhas que fecharam portas, com o porquê e o abandonado |
| `ATUALIZACOES.md` | o que mudou no artefato, quando, e o que invalidou aqui |
| `GLOSSARY.md` | o jargão do artefato (mantém o nome: o papel é idêntico ao do kit) |
| `IDEAS.md` | idem |
| `ROADMAP.md` | minhas fases — **meu** progresso, não o do artefato |
| `mecanicas/` | referência, um arquivo por sistema, com `INDICE.md` |
| `rotas/` | sequência, numerada por ordem de leitura |
| `logs/` + `LOG-TEMPLATE.md` | sessão a sessão |

**Saem:** `SPEC.md`, `HISTORY.md`, `CHANGELOG.md`, `CONTEXT.md`, `DECISIONS.md`. Três por não terem função aqui, dois por terem sido repartidos ou renomeados.

## 4. Ponto de decisão — revisado

1. **Confirma o nicho** com o eixo «companion de um artefato acompanhado que muda sozinho», **com o Fallout como caso único** e o hardware fora até você trazer o material?
2. **Os nomes:** `rotas/`, `ALVO.md`, `ESCOLHAS.md`, `ATUALIZACOES.md` — algum que você queira diferente? *Esta é a pergunta em que a sua leitura vale mais que a minha: você é quem vai abrir esses arquivos.*
3. **A regra da entrega que encolhe** (peça 4 da análise original) é independente e vale para os 18 nichos hoje. WO própria agora?
4. **O Fallout enquanto isso:** deixo como está, ou entrego a reorganização como pacote de arquivos para você aplicar lá na mão?
5. **Os cinco nichos nunca rodados** viram frente própria (piloto ou marcação de «não verificado»), ou ficam como estão?
