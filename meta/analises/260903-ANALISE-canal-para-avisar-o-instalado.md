# ANÁLISE — Canal para avisar um instalado de que algo já foi corrigido

> **Status:** Em discussão
> **Data:** 260903 · **Base:** v1.122.0, commit `3ea47ad` (mount de 2026-09-03 00:37)
> **Vira:** — · **Decisão:** —
> **Origem:** ROADMAP, Fase 6, item 1 («pede análise antes de WO»). Nasceu do item (9) da extração do Mapsmith 11 (`IDEAS.md`, 2026-08-20), que já declarava a causa estrutural e o gatilho de retorno — cumprido.

---

## Problema

O kit distribui por **pull e por leva**: o pacote de update só existe quando o dono abre o gerador, escolhe o nicho e entrega o zip a um projeto. Entre uma leva e a seguinte, um projeto instalado que topa com um defeito **do kit** não tem como saber se ele já foi corrigido — então conserta à mão, e às vezes devolve como feedback um item que o kit fechou antes.

Quem paga é sempre o instalado, e o kit paga em feedback morto. Se nada for feito, o custo não é um evento raro: ele cresce com o número de projetos instalados (hoje **três** devolvendo crítica: `satelite-web`, `mapsmith`, `flatdrop`) e com a distância entre levas.

**Escopo, porque o assunto tem duas direções e só uma é este item:**

- **(A) kit → instalado — «isto já foi corrigido».** É o que esta análise trata.
- **(B) instalado → kit — «o que eu devolvi segue aberto?».** Já tem desenho: a correspondência entre projetos (D-123), com carta nomeada, contador compartilhado e o que fica pendente do outro lado virando item com gatilho deste lado. Funciona, e não é o que falta.

Misturar as duas foi o que produziu o pior dos três casos abaixo, então elas ficam separadas aqui.

## Restrições / o que foi medido

**Os três casos, com o custo de cada um:**

| Quando | Quem | O que aconteceu | Janela | Custo |
|---|---|---|---|---|
| 18–19/08 | mapsmith | A D-133 corrigiu o «menu numerado» em 18/08. Eles descobriram o mesmo defeito sozinhos em **19/08**, corrigiram à mão e devolveram como feedback um item fechado no dia anterior. | **1 dia** | uma WO lá, um item de feedback morto aqui |
| 02/08 → 25/08 | flatdrop | Pedimos que conferissem o merge do P11 e do princípio de higiene *«quando a v1.97.0 chegar»*. **A v1.97.0 nunca chegou ao mount deles.** Ao absorver a resposta, o kit estava em v1.120.0 — **23 versões depois**, com pedido pendurado numa entrega que não foi feita. | 23 versões | pedido inexequível; espera sem gatilho (o defeito que a D-123 nomeia) |
| 02/08 → 20/08 | flatdrop | A devolução do `ahead N / behind M` na linha de estado do git não voltou, e foi **repetida na carta 01 porque continuava reproduzível**. | 18 dias | uma devolução paga duas vezes |

**O achado que mais pesa na decisão está na coluna «Janela».** O caso do mapsmith teve **um dia** de janela. Nenhum canal *pull* — nenhuma lista dentro de nenhum pacote — teria salvado aquela WO, porque não houve pacote no meio. O que faltou não foi informação disponível: foi **alguém perguntar antes de pagar**. Isso reposiciona o problema: o gargalo não está no transporte, está no **gatilho do lado de quem consome**.

**O que o pacote já carrega hoje** (lido em `buildUpdatePack` / `buildUpdateManifest`, v1.122.0):

- `Kit: vX.Y.Z` no manifesto, e o **carimbo de versão em quatro carriers** — CEREBRO, modelo de WO e as duas skills — declarado como linha do kit que não se funde, com conferência pós-merge (D-137). Ou seja: **o instalado já sabe responder «de que versão eu vim».**
- A tabela **«Linhas revogadas»**, alimentada pela constante `REVOCATIONS`, com o campo **`desde: vX.Y.Z`** por entrada, mais o texto literal e o porquê. É o único registro de *mudança de comportamento* que atravessa a fronteira.
- O carimbo de modos com marcador por modo (D-137), e as regras de merge da seção «Aplique PRIMEIRO».

**O que o pacote NÃO carrega:**

- Nada sobre defeitos **corrigidos**. A `REVOCATIONS` cobre só um caso — a linha que foi **apagada** —, e são **4 entradas em 122 versões**. Correção que troca comportamento sem apagar frase (a maioria) não aparece em lugar nenhum do pacote.
- O `CHANGELOG.md` não viaja. O projeto instalado não tem acesso ao repositório do kit; o mount dele é o dele.

**Restrição de arquitetura, que descarta metade do espaço de soluções:** o gerador é uma página estática, um arquivo, sem servidor, sem rede e sem estado (D-001, preservado no refator modular da Fase 4). **O kit não tem canal de saída.** Não existe lista de instalados, não existe callback, e nada no produto pode adquirir isso sem violar a restrição que sustenta o projeto inteiro.

**Restrição de teto:** o que entra no CEREBRO ou nas Instruções é vigiado pelo C28 — `narrative` está em **6605/6900** (folga 295) e `game` em 6513/6900. O que entra no **manifesto do pacote** custa **zero de teto**, porque o manifesto é gerado e não é injetado no contexto de ninguém. Essa assimetria decide grande parte do desenho abaixo.

## Opções consideradas

**O1 — Nada além do que a wo0106 já fez.** O carimbo de versão em quatro carriers já responde de que versão o projeto veio. *Descartada como suficiente, mantida como linha de base:* «de que versão eu vim» não é «o que mudou desde então», e nenhum dos três casos teria mudado de desfecho.

**O2 — Push: o kit avisa o instalado.** *Descartada por arquitetura, e o descarte é barato de justificar.* Um kit sem rede não avisa ninguém; quem avisa é o dono. E o push manual **já existe e já tem protocolo** — é a carta (D-123). O que faltou nos três casos não foi o meio de mandar a carta: foi o motivo para escrevê-la aparecer a tempo. Criar aparato novo aqui seria duplicar a D-123 com outro nome.

**O3 — Pull com carimbo: o pacote publica o que já foi corrigido.** Generalizar o que a `REVOCATIONS` faz para um segundo registro — chame-se `FIXES` — com a mesma forma: `desde: vX.Y.Z`, o **sintoma observável** no arquivo instalado, e o que o kit fez. O manifesto ganha uma seção «**Já corrigido — não gaste WO nisto**», ordenada por versão, com a instrução de **ignorar tudo que for ≤ à versão dos seus quatro carimbos**. O filtro fica com o leitor, não com o gerador: assim o gerador segue sem estado, e o projeto atrasado — que é o que mais precisa — recebe a lista inteira em vez da mais curta. Custo de teto: **zero**.

**O4 — Boletim/errata fora do pacote,** consultável pelo instalado. *Descartada:* o instalado não alcança o repositório do kit, então o boletim só chegaria por pacote (= O3) ou por carta (= O2). Colapsa nas outras duas sem acrescentar nada.

**O5 — Gatilho no receptor: perguntar antes de pagar.** Uma linha no `TRIGGERS_BASE` do CEREBRO gerado: *antes de consertar à mão um comportamento que veio do kit, confira o carimbo de versão instalado e pergunte ao dono se existe pacote mais novo — e, se consertar mesmo assim, devolva o achado com a versão em que ele foi medido.* Não transporta informação nenhuma; **quebra o modo de falha** que os três casos têm em comum. É a única opção que alcança o caso de janela de um dia. Custo de teto: **não medido** — é a parte cara, e a medição é pré-requisito da WO.

**O6 — Poda automática da lista** (entrada mais velha que N versões sai). *Descartada:* remove exatamente a informação de que o projeto mais atrasado precisa, e o filtro por `desde` no lado do leitor já resolve o volume sem perder histórico.

## Recomendação

**O5 + O3, nesta ordem de importância, na mesma leva.**

O **O5** é o que fecha o buraco: nos três casos o defeito não foi falta de informação disponível, foi **ninguém perguntar**. É a mesma família da D-135 — regra autoendereçada falha, regra que dispara no gesto funciona —, e o gesto aqui é nítido e raro o bastante para não virar ruído: *estou prestes a consertar à mão algo que o kit escreveu.*

O **O3** é o que torna a pergunta **respondível quando há pacote no meio**, e sai quase de graça: a estrutura existe (`REVOCATIONS` com `desde`), o lugar existe (o manifesto), o carimbo do lado do leitor existe (quatro carriers) e o teto não é tocado.

**Critério de entrada da lista `FIXES`, porque sem ele ela vira o CHANGELOG e ninguém lê:** entra só o que um projeto instalado **poderia redescobrir e consertar à mão** — defeito de comportamento observável no arquivo que ele tem. Não entra melhoria, não entra item interno do gerador, não entra nada que o instalado não tenha como notar. O teste é uma pergunta: *um projeto que ainda não recebeu esta versão pagaria trabalho por isto?* Se não, fica só no CHANGELOG.

**O que a recomendação explicitamente NÃO faz, e é preciso dizer em voz alta:** ela **não fecha a janela entre levas**. Fechar a janela exige push, push exige o dono, e isso é a carta que já existe. O O3 reduz o custo *quando o pacote chega*; o O5 reduz o custo *quando o pacote não chegou*. Nenhum dos dois elimina o caso em que o projeto conserta certo, à mão, sem falar com ninguém — e esse caso é aceitável.

**Carona, se a decisão for sim:** o item 2 da Fase 6 (terceiro veredito na tabela de revogações — «fica, com o vocabulário trocado») mexe na mesma estrutura e no mesmo lugar do manifesto. Fazer os dois em levas separadas é abrir duas vezes o mesmo arquivo (P10).

## Riscos

- **A lista cresce e ninguém lê.** Mitigação: o critério de entrada acima, e o filtro por `desde` no leitor. Vigiar na primeira leva depois: se a `FIXES` passar de ~10 entradas por dezena de versões, o critério está frouxo.
- **O O5 é regra escrita num CEREBRO, e regra escrita num CEREBRO não alcança quem já pegou o hábito** — medido no mapsmith, onde a reclamação voltou no bloco 35 *depois* de a regra ter sido escrita no bloco 18. É o risco real desta recomendação, e não tem mitigação completa; o que reduz é o gatilho morar no gesto, não no apêndice.
- **Custo de teto do O5 não medido.** Se a linha não couber no `narrative` (folga 295), a WO não sai como está — remedir antes de escrever, nunca depois.
- **Duplicação com o CHANGELOG.** A `FIXES` é uma *view* curada, não um segundo registro: cada entrada aponta a versão, e a fonte continua sendo o CHANGELOG/DECISIONS. Se alguém começar a manter as duas em paralelo com conteúdo próprio, o defeito é o da i-N59 outra vez.
- **Nenhum dos 100 checks observa isto.** O harness pode conferir que a seção existe no manifesto e que a lista não está vazia — não pode conferir que alguém perguntou antes de consertar. Mesmo ponto cego estrutural que a análise de 20/08 nomeou.

## Ponto de decisão

Quatro perguntas, e nenhuma vira WO sem resposta:

1. **A direção (A) é mesmo o escopo?** Confirma que a direção (B) fica com a D-123 e sai desta frente.
2. **O5 entra?** É a peça cara (teto) e a que alcança o caso de janela curta. Se a resposta for «só o O3», a análise segue válida e o desfecho do mapsmith não muda.
3. **`FIXES` é lista nova ou a `REVOCATIONS` ganha um campo `tipo`?** Lista nova é mais clara de ler; campo novo mexe numa estrutura que já é lida por três projetos e evita uma segunda tabela no mesmo manifesto. Não tenho preferência medida — é escolha de quem cura os `meta/`.
4. **O item 2 da Fase 6 pega carona?** Mesma estrutura, mesmo arquivo.

**Medição obrigatória antes de a WO ser escrita, seja qual for a resposta:** o custo em caracteres do O5 no nicho mais apertado (`narrative`, folga 295), com o C28 rodado.
