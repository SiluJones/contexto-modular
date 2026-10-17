# ANÁLISE — O teto das Instruções geradas (i-N67)

> **Status:** Decidida (2026-10-16) — recomendação aceita como está; WO-1 implementada na wo0133 (`664858e`); WO-2 escrita na wo0134
> **Data:** 261016 · **Base:** v1.124.0, HEAD `0e41773`, harness 19/19 · 107/107 · 0 erros
> **Vira:** wo0133 (WO-1: papéis curtos + régua dos quatro eixos) e wo0134 (WO-2: convenções só no CEREBRO) · **Decisão:** D-160, D-161
> **Raia:** Chat (análise; **não** é WO). **Antecessoras:** `260726-ANALISE-ENXUGAMENTO-INSTRUCOES.md` (D-090 a D-094) e `260727-ANALISE-teto-por-configuracao.md` (D-103, D-105).
> **Método:** réplica `git archive HEAD | tar -x` fora da pasta do repo; `node build.js` gerou um `index.html` byte-idêntico ao do repo (`cmp`), e o harness da réplica deu 19/19 · 107/107. Sondas em Node chamando o `buildInstr` e o `buildClaudeMd` reais, pelo mesmo shim do `validate.js`. Todo número desta análise é `[medido em sandbox]` salvo marca em contrário — e o sandbox aqui não diverge do repo no artefato medido, porque o `index.html` é o mesmo byte a byte.

## Problema

A `i-N67` registrou o teto quase cheio pelo `C28`: padrão **6.662/6.900**, incremento do Code **546/550**, combo **7.580/7.600**. A wo0131 já teve de encurtar uma frase para caber. A próxima regra que precise morar nas Instruções vai exigir cortar outra — e as três saídas na mesa eram: cortar o que o CEREBRO já cobre, subir o teto com justificativa medida, ou levar o ramo do Code para a skill `apply-wo`.

A medição desta análise mostra que o problema é **maior** do que o `C28` diz, e de um jeito que nenhuma das três saídas resolve sozinha: **a régua não vê dois dos quatro eixos de modo que o gerador tem hoje.** O `C28` liga só Code e ASU. O `buildInstr` tem mais dois — o **canal** (`mountMode`, que a wo0129 criou depois do `C28`) e o **grupo** (`groupMode`, mais antigo que o `C28` e nunca orçado) — e mais uma linha condicional, a do **sistema operacional**, que nenhum check mede. Com grupo ligado, três nichos já passam do total de 7.600 hoje, e o harness está verde.

Se nada for feito: a próxima WO que tocar as Instruções corta mais uma frase para caber num número que não é o número real, e o projeto-filho com grupo ligado recebe um documento acima do teto que o próprio CEREBRO gerado lhe ensina.

## Restrições / o que foi medido

### 1. O teto não é da plataforma

A central de ajuda da Anthropic descreve as Instruções do Projeto sem publicar limite de tamanho; as fontes de terceiros consultadas falam do limite dos arquivos de conhecimento, não do campo de Instruções. O 6.900 é **orçamento de atenção nosso** — veio da `D-045` (6.500 → 6.900) e foi preservado na `D-103`, quando o dono recusou subi-lo: «o teto só sobe quando as recomendações e o custo real de token/caractere avançarem, não para acomodar o que já cresceu».

### 2. A matriz inteira — 19 nichos × canal × grupo × Code × ASU

Chave: `P` pasta (padrão) / `M` mount · `G` grupo · `C` Code · `A` ASU · `-` desligado. O `C28` mede só as quatro colunas `P-` (sem grupo).

| nicho | P--- | P-C- | P--A | P-CA | PG-- | **PGCA** | M--- | M-CA | **MGCA** | PGCA + linha do SO |
|---|---|---|---|---|---|---|---|---|---|---|
| narrative | 6662 | 7208 | 7406 | 7580 | 6896 | **7814** | 6681 | 7567 | **7801** | **8027** |
| game | 6570 | 7116 | 7314 | 7488 | 6804 | **7722** | 6589 | 7475 | **7709** | **7935** |
| companion | 6473 | 7019 | 7217 | 7391 | 6707 | **7625** | 6492 | 7378 | **7612** | **7838** |
| career | 6012 | 6558 | 6756 | 6930 | 6246 | 7164 | 6031 | 6917 | 7151 | 7377 |
| dev | 6059 | 6233 | 6431 | 6605 | 6293 | 6839 | 6078 | 6592 | 6826 | 7052 |
| rpg | 5869 | 6415 | 6613 | 6787 | 6103 | 7021 | 5888 | 6774 | 7008 | 7234 |
| client | 5803 | 6349 | 6547 | 6721 | 6037 | 6955 | 5822 | 6708 | 6942 | 7168 |
| research | 5782 | 6328 | 6526 | 6700 | 6016 | 6934 | 5801 | 6687 | 6921 | 7147 |
| design | 5764 | 6310 | 6508 | 6682 | 5998 | 6916 | 5783 | 6669 | 6903 | 7129 |
| animation | 5667 | 6213 | 6411 | 6585 | 5901 | 6819 | 5686 | 6572 | 6806 | 7032 |
| comics | 5613 | 6159 | 6357 | 6531 | 5847 | 6765 | 5632 | 6518 | 6752 | 6978 |
| music | 5518 | 6064 | 6262 | 6436 | 5752 | 6670 | 5537 | 6423 | 6657 | 6883 |
| pixel | 5503 | 6049 | 6247 | 6421 | 5737 | 6655 | 5522 | 6408 | 6642 | 6868 |
| marketing | 5489 | 6035 | 6233 | 6407 | 5723 | 6641 | 5508 | 6394 | 6628 | 6854 |
| brainstorm | 5461 | 6007 | 6205 | 6379 | 5695 | 6613 | 5480 | 6366 | 6600 | 6826 |
| cuisine | 5391 | 5937 | 6135 | 6309 | 5625 | 6543 | 5410 | 6296 | 6530 | 6756 |
| business | 5318 | 5864 | 6062 | 6236 | 5552 | 6470 | 5337 | 6223 | 6457 | 6683 |
| product | 5303 | 5849 | 6047 | 6221 | 5537 | 6455 | 5322 | 6208 | 6442 | 6668 |
| custom | 3337 | 3883 | 4081 | 4255 | 3571 | 4489 | 3356 | 4242 | 4476 | 4702 |

Lido da tabela:

- **Grupo custa +234 em todo nicho** (uma linha: «Projeto em grupo: existe um `HUB.md`…») e não pertence a nenhum dos três baldes do `MODO_ORCAMENTO`. É o mesmo buraco que a `D-105` achou com o balde compartilhado: uma linha que nenhum orçamento cobre.
- **Com grupo + Code + ASU, `narrative` (7.814), `game` (7.722) e `companion` (7.625) passam do `INSTR_TETO_MODOS` de 7.600** — no canal padrão e no mount.
- **O canal quase não pesa:** o mount custa +19 no padrão e −13 com Code ligado. O eixo canal entrou sem estourar nada; ele só não é medido.
- **A linha do sistema operacional** (`OSENV`, escolhida no modal) custa de 128 a 213 caracteres com a quebra de linha, conforme o sistema (Windows/CMD é a maior). Não está em nenhum check. O pior caso realista — `narrative`, grupo + Code + ASU + Windows — é **8.027**, 427 acima do total permitido e 1.127 acima do teto que o CEREBRO gerado ensina.
- **O pior caso de conteúdo do `G16`** (todos os chips marcados) roda com os modos desligados, por decisão da `D-105` («trave o incremento, não o total»). Com chips **e** modos, `narrative` chega a 8.066 (P-CA) e 8.287 (MGCA). Não proponho mudar isso — registro para que o número não seja redescoberto.

### 3. Anatomia — onde mora o peso (`narrative`, P-CA, 7.580)

| Seção | Chars | Natureza |
|---|---|---|
| Ritual de início de turno | 2.228 | universal + linhas de modo |
| Arquivos de contexto | 1.502 | do nicho: nome + papel de cada arquivo |
| Como trabalhar comigo | 1.351 | 13 universais num rótulo (469) + 7 princípios do nicho |
| Convenções | 1.328 | do nicho |
| Ao final da conversa | 1.030 | lista de saídas + higiene + fecho |
| topo + Idioma | 142 | identidade |

### 4. O que já está no CEREBRO, literalmente — soma dos 19 nichos (P-CA)

Sonda: de cada linha das Instruções, tira o rótulo (até `:` ou `—`), pega 30 caracteres do meio e procura **literal** no CEREBRO gerado do mesmo nicho e configuração.

| Seção | Chars (19 nichos) | Miolo literal no CEREBRO | % |
|---|---|---|---|
| Convenções | 13.033 | 12.748 | **98%** |
| Arquivos de contexto | 24.121 | 19.789 | **82%** |
| Ao final da conversa | 19.718 | 7.872 | 40% |
| Como trabalhar comigo | 22.914 | 1.841 | 8% |
| Ritual de início de turno | 42.337 | 0 | 0% |
| **Total** | **124.683** | **42.250** | **34%** |

O ritual e os princípios **não** estão duplicados (o 0% e o 8% são o desenho da `D-090`: rótulo curto na Instrução, definição inteira no CEREBRO). A duplicação mora inteira nas duas seções **do nicho**.

### 5. A duplicação que nem precisa do CEREBRO — convenção × princípio na mesma página

Sonda: para cada convenção, a maior sobreposição de palavras (≥ 5 letras, sem acento) com o rótulo + frase curta de um princípio do mesmo nicho, dividida pelo tamanho do menor dos dois.

| Limiar | Convenções que repetem um princípio | Chars |
|---|---|---|
| 0,3 | 73 / 113 | 8.135 / 12.748 |
| **0,4** | **59 / 113** | **6.432 / 12.748** |
| 0,5 | 39 / 113 | 4.264 / 12.748 |

Amostra conferida a olho: 12 pares de 59, todos repetição de fato — `game` «Cria o jogo, não só o documento» × «O assistente também CONSTRÓI: protótipo jogável…»; `animation` «Arco do episódio E arco da série» × «Em série: cada episódio fecha por si E faz avançar o arco maior»; `narrative` «Não super-documenta a bíblia» × «Manter a bíblia no essencial (Tier 1); não super-documentar». O limiar **lista candidatas, não decide**: há convenção com detalhe operacional que o princípio não tem (o protocolo-sanduíche da `narrative` é um caso).

### 6. O ramo do Code — quem lê cada linha

O incremento do Code (+546) é feito de quatro linhas e um título, todas nas Instruções:

| Linha | Chars | Quem lê |
|---|---|---|
| `**Arquivo não lido não se deduz — leia do disco; o Code mede o que roda.**` | 75 | o chat |
| `**WO nunca vai sozinha:** entregue junto a linha /apply-wo…` | 94 | o chat |
| título «Ao final da conversa, REGISTRE o que falta (não liste)» | 58 | o chat |
| «Registre AQUI, não liste para depois: doc grande por WO…» | 193 | o chat |
| ritual com `git log -3`, `git status` | (troca de trecho) | o chat |

**Nenhuma linha do ramo do Code é lida pelo executor.** As Instruções do Projeto são o texto que o *chat* recebe em toda mensagem; o Claude Code lê o `CLAUDE.md` e as skills. O ramo do Code ensina o chat a entregar trabalho ao Code — e as três regras que ele carrega regem a entrega do chat, não a do executor (`D-099`, wo0065: a linha `/apply-wo` junto da WO; `D-113`, wo0079: estado de arquivo não se deduz; `f033209`: o fecho em modo Code registra em vez de listar).

### 7. A régua tem custo de oportunidade, não de dinheiro

7.600 caracteres são da ordem de 2 mil tokens `[deduzido: razão típica de 3 a 4 caracteres por token em português com Markdown; não tokenizado]` — pouco perto de uma janela de contexto. O custo que o teto protege é outro: **atenção**. A evidência externa nova aponta para o mesmo lado e afina a unidade: um preprint de julho de 2026 (arXiv 2607.19257, não revisado) mede a taxa de resposta perfeita caindo de 93,8% com 10 regras para 23,8% com 40 no Claude Sonnet 5, e chão perto de zero a partir de 80 — o que degrada é o **número de regras simultâneas**, não os caracteres. O IFScale (arXiv 2507.11538) acha viés de primazia: regra no começo pesa mais. As Instruções da `narrative` P-CA têm **54 linhas de conteúdo** fora os títulos, com os 13 universais comprimidos numa só.

## Opções consideradas

### (1) Cortar o que o CEREBRO cobre — **recomendada, em duas frentes curadas**

- **1-A — Convenção que repete um princípio do nicho.** Candidatas: 59 convenções, 6.432 chars nos 19 nichos (0 a 632 por nicho; `narrative` 182, `game` 461, `animation` 632). Cada candidata decidida à mão: apagar a convenção quando o princípio diz o mesmo; fundir o detalhe operacional na frase curta do princípio (`short`) quando a convenção tem algo que o princípio não tem. **A convenção apagada não perde nada:** ela segue integral no CEREBRO (seção «Convenções», 98% medido acima).
- **1-B — Papel do arquivo com até 45 caracteres.** É a camada C3 da análise de julho, que a `D-094` deixou de fora **porque as folgas eram de 862 a 1.647 por nicho**. Essa condição não vale mais: a folga padrão da `narrative` é **238**, e com grupo + Code + ASU o total dela já passa do 7.600. Economia medida com o corte em 45: de **143 a 807 por nicho** (`narrative` 548, `game` 596, `companion` 561, `dev` 807). O papel inteiro segue no CEREBRO (82% literal) e no cabeçalho de cada template.
- **Medido junto (1-A + 1-B):** `narrative` PGCA + SO cai de **8.027 para cerca de 7.297**; padrão de 6.662 para cerca de 5.932 (folga de 238 para cerca de 968). `[medido em sandbox para 1-A; 1-B calculado pela soma do excedente acima de 45 em cada papel — a frase curada real pode sair diferente]`.
- **Descartado dentro desta opção — cortar a seção Convenções inteira** (1.328 na `narrative`): é a maior economia, e é a que perde regra de verdade. Convenção como «Antes de afirmar um fato da obra, consultar BIBLIA/PERSONAGENS/CONTINUIDADE» é o tipo de coisa que precisa estar à vista em toda mensagem; o CEREBRO é lido uma vez por conversa.
- **Descartado — cortar a lista de arquivos inteira** (a soma dos papéis chega a 1.287 no `dev`): no canal pasta o chat pode listar a pasta, mas a lista diz *o que cada arquivo é*, e saber o nome sem o papel é o que se mantém.

### (2) Subir o teto com justificativa medida — **não recomendada**

O critério que o dono fixou na `D-103` era «quando as recomendações e o custo real de token/caractere avançarem». Medido nesta análise: nenhuma recomendação publicada mudou (não há limite publicado para o campo), e a evidência nova aponta **contra** — mais texto nas Instruções é mais regra simultânea, e é o número de regras que derruba a aderência. Subir para cobrir o medido (8.027) seria a opção (B) de julho com outro nome: calibrar o freio pelo pior caso atual. **O argumento contrário mais forte:** o teto em caracteres mede um substituto — uma regra longa e única custa mais caracteres e menos atenção que três curtas. Isso é motivo para, um dia, medir regras em vez de caracteres (registrável no IDEAS), não para subir o número de caracteres agora.

### (3) Levar o ramo do Code para a skill `apply-wo` — **descartada: erro de categoria**

A skill é lida pelo executor; as linhas do ramo do Code são lidas pelo chat e regem o que o chat entrega (seção 6). Mover libera 546 caracteres e remove as três regras do único leitor que as aplica. A variante honesta seria levar o texto para onde o chat lê **sob demanda** (o molde de WO, a seção do Code no CEREBRO gerado); o único candidato é «Arquivo não lido não se deduz», e o ganho (75) não paga o risco de reabrir uma falha que custou uma decisão. Fica como está.

### (4) Achado que não estava na mesa — **a régua precisa ver os quatro eixos**

Independente de qual corte, o `C28` passa a medir o que o gerador emite: canal × grupo × Code × ASU (16 configurações por nicho, 304 medições) e a linha do sistema operacional no pior caso do combo. O grupo ganha um balde próprio no `MODO_ORCAMENTO` (custo atual 234 — orçamento sugerido 250, apertado no sentido da `D-103`: já cumprido, a próxima linha de grupo só entra curando outra). **Restrição de ordem, a mesma de julho:** instalar a régua antes dos cortes deixa o harness vermelho na hora (`narrative` PGCA 7.814 > 7.600). A régua entra **na mesma WO** do corte 1-B, que é o que a deixa verde — a análise de julho já tinha avisado do verde falso entre duas WOs.

## Recomendação

**(1) com (4), em duas WOs de kit, nesta ordem:**

1. **WO-1 — papéis dos arquivos e régua dos quatro eixos.** Curar à mão o papel de cada arquivo nos 19 nichos para até 45 caracteres (os completos ficam no CEREBRO e no template); estender o `C28` para canal × grupo × Code × ASU + linha do SO, com o balde `grupo`; um assert que prove as duas pontas (nome do arquivo nas Instruções, papel inteiro no CEREBRO), no padrão do `C26`. Corta minor (`D-158`). Sozinha, ela já põe todo nicho dentro do orçamento nas 16 configurações.
2. **WO-2 — convenções que repetem princípio.** Curadoria das 59 candidatas, nicho a nicho, com a regra de exceção da `D-090` (convenção sem par claro fica). Assert: a contagem de convenções no CEREBRO não cai. Corta minor.

Por que não só a WO-1: ela resolve o número, mas deixa 6.432 caracteres de repetição dentro da mesma página — o tipo de duplicação que a `D-090` combateu nos princípios e que voltou pelas convenções. Por que nessa ordem: a WO-1 é a que torna a régua honesta; a WO-2 é limpeza com ganho menor por nicho.

## Riscos

- **Papel curto que perde a regra do arquivo.** Papel como «OPCIONAL — use quando há salto temporal» ou «Referência fixa — nunca substituído» carrega uma instrução, não uma descrição. Mitigação: a curadoria preserva o marcador (OPCIONAL, nunca substituído) antes de qualquer outra palavra; o assert das duas pontas garante o papel inteiro no CEREBRO.
- **Limiar de sobreposição tratado como veredito.** O 0,4 é sonda: produz candidatas. A WO-2 decide uma a uma, e o relatório lista as que ficaram e por quê.
- **Orçamento de grupo vira teto frouxo.** Se calibrado acima de 250, é a opção (2) disfarçada.
- **A casa fica fora.** As Instruções da própria casa têm **7.039** caracteres (`wc -m INSTRUCOES-DO-PROJETO.md`), acima do 6.900 que o kit ensina; o `C28` não as mede porque não são geradas. Não é escopo desta análise — fica registrado.
- **Achado lateral, não tratado aqui:** no canal pasta (o padrão desde a wo0129) as Instruções ainda dizem «Arquivos de contexto **(no Projeto)**» e «Logs detalhados do dia NÃO ficam **no Projeto**» — vocabulário do mount. Custa pouco e é correção, não teto; pertence à `i-N66` (prompts e textos sem o eixo canal).

## Ponto de decisão

1. **Reabre a `D-094`?** Os papéis dos arquivos ficaram longos porque a folga era de 862 a 1.647; hoje é 238 no pior nicho, e com grupo + Code + ASU três nichos passam do total de 7.600. Recomendo reabrir, com corte curado em 45 caracteres.
2. **Grupo e linha do SO entram no `C28`**, com balde `grupo ≤ 250`? Recomendo sim, na mesma WO do corte dos papéis.
3. **Subir o teto:** confirma a recusa da `D-103` com o critério de hoje (nada mudou no que é publicado; a evidência nova aponta contra)? Recomendo confirmar e registrar no IDEAS a ideia de medir regras em vez de caracteres.
4. **Ramo do Code na skill `apply-wo`:** confirma o descarte?
5. **Uma WO ou duas?** Recomendo duas, papéis + régua primeiro.

Não abro WO sem esse aval.

## Resposta do dono (2026-10-16) e o que a WO-1 mediu

**Respostas, item a item:** (1) reabre a `D-094`, corte curado em 45 caracteres; (2) grupo e linha do SO entram no `C28`, balde `grupo ≤ 250`, na mesma WO do corte dos papéis; (3) o teto não sobe — `D-103` confirmada, e a ideia de medir regras vira `i-N69`; (4) o ramo do Code fica; (5) duas WOs, papéis + régua primeiro. Registro: `D-160`.

**Medido no protótipo da WO-1** (réplica do HEAD `0e41773` com as edições aplicadas; `[medido em sandbox]`):

| | antes | depois da WO-1 |
|---|---|---|
| padrão máximo (pasta ou mount) | 6.681 (`narrative`, mount) | **6.034** |
| `narrative` P--- | 6.662 | **6.015** |
| pior caso realista (`narrative` PGCA + linha do Windows) | 8.027 | **7.380** |
| `game` / `companion` PGCA | 7.722 / 7.625 | **7.038 / 6.972** |
| incrementos Code / ASU / compartilhado / grupo | 546 / 372 / 372 / 234 | inalterados |

- **A estimativa da seção 1-B errou para menos, e a diferença tem dono:** a análise previa cerca de 7.297 para 1-A + 1-B; a WO-1 faz só a 1-B e mede 7.380. Os 83 que faltam são a parte da 1-A (182) menos o que a WO-1 cortou além da estimativa (99): a linha do `CEREBRO.md` e as frases curadas abaixo de 45, que a soma da 1-B — só o excedente acima de 45 — não contava.
- **Achado de desenho:** a normalização dos arquivos (`normFiles`) copia só `name`, `cat`, `role` e `content`; um campo novo no módulo some antes de chegar às Instruções. A WO-1 faz a normalização carregar o `short`.
- **Contagem:** 174 papéis curtos em 174 arquivos — 157 nos módulos de nicho e o IDEAS universal, injetado em 17 nichos.

## WO-2 — o que a curadoria das convenções decidiu e mediu (2026-10-16)

**Decisão, uma a uma:** das 59 candidatas da seção 5, **46 ficam só no CEREBRO** e **13 ficam nas Instruções**. O critério é o da seção 1-A: sai a convenção que o princípio, na mesma página, já diz; fica a que traz uma regra que o princípio não tem.

**Dois desvios do texto da seção 1-A, declarados:**
- **«Apagar» virou «só no CEREBRO».** O array `conventions` é um só para as Instruções e para o CEREBRO; apagar tiraria a regra dos dois, e a seção 4 prometia que ela ficaria no CEREBRO. A WO-2 marca o texto exato num campo novo, `conventionsSoCerebro`, e nada se move entre arrays.
- **«Fundir» não foi usado.** Fundir o detalhe na frase curta do princípio alongaria o `short` que a `D-090` curou; a convenção com detalhe a mais fica nas Instruções, inteira.

**Um conflito com decisão antiga, resolvido a favor dela:** a primeira versão marcava `companion[2]` («Afirmação volátil leva carimbo de VERSÃO…»), e o `C104` acusou na réplica — desde o aperto da wo0122 (`D-150`) ele exige essa frase normativa nas Instruções, porque editada sozinha ela já deixou duas regras opostas no mesmo documento. Ela fica.

**Medido na réplica** (HEAD `4922fd7` com a wo0134 aplicada a partir do texto dela; `[medido em sandbox]`):

| | depois da WO-1 | depois da WO-2 |
|---|---|---|
| padrão máximo (pasta ou mount) | 6.034 | **5.852** |
| pior caso realista (combo + linha do Windows) | 7.380 | **7.198** |
| `narrative` / `game` / `companion` P--- | 6.015 / 5.886 / 5.820 | **5.833 / 5.425 / 5.509** |
| economia por nicho no padrão | — | de 0 a 464 (4.848 nos 19) |

A estimativa da seção 5 era de 6.432 caracteres para as 59 candidatas; saem 4.848 porque 13 ficam.

---

**Fontes externas:** [Anthropic — How can I create and manage projects?](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) · [Prompt Design at Scale, arXiv 2607.19257](https://www.alphaxiv.org/abs/2607.19257.md) · [How Many Instructions Can LLMs Follow at Once? (IFScale), arXiv 2507.11538](https://arxiv.org/abs/2507.11538).

**Reprodução:** as sondas rodaram na VM do chat e não ficam no repo (o relatório é insumo). Cada uma é reproduzível pelo método descrito na seção correspondente; a WO-1 transforma a seção 2 em instrumento, no próprio `C28`.
