# ANÁLISE — O fim do piloto do método C: a casa fica, e o kit ganha a variante com a troca exata como regra

> **Status:** Em discussão
> **Data:** 261109 · **Base:** v1.135.0, HEAD `a343d6c` (wo0153, a décima do piloto)
> **Vira:** a decisão da casa (emenda da `D-170`) e, se aceita, a WO de código da variante do kit (M2 da `i-N71`) · **Decisão:** —

## Problema

O piloto do método C (`D-170`, wo0144 a wo0153) acabou. A seção «Fim» do CEREBRO pede duas decisões ao dono: **(a)** a casa fica no método C ou volta à forma «edições»; **(b)** o kit ganha a variante (M2) e com que condição de entrada. A análise de 23/10 deixou uma pergunta aberta para o piloto responder: **o que acontece num projeto sem verificador** — um gerador com harness e um site com `tsc`/ESLint têm rede; um projeto só de documento não tem.

## Restrições / o que foi medido

**1. A casa — dez WOs** (tabela da `i-N71`; base: as dez anteriores na forma «edições», wo0133 a wo0142).

| | Base («edições») | Piloto (método C) |
|---|---|---|
| WOs | 10 | 10 (7 de doc, 3 de código: wo0146, wo0149, wo0150) |
| Linhas por WO (média) | 469 (222 a 709) | **60** (55 a 72) |
| Paradas no Code | 0 por conteúdo | **0** |
| Erros que chegaram ao commit | 0 conhecidos | **0** |
| Achados que só o Code viu | 2 (fim de linha, wo0138 e wo0140) | **0** |
| Erros do chat pegos antes do commit | — | **4**, todos pelo harness na réplica, antes de a WO existir (1 na wo0149, 3 na wo0150) |
| Custo da conferência | não medido | 4,2 chamadas de shell e 67 s em média (23 a 155 s) |

Os dois achados de fim de linha da base sumiram porque o chat passou a gravar no fim de linha que o arquivo já tem (wo0145, a primeira com CRLF, deu uma linha de diff em cada arquivo, sem mistura). **Desvios do Code:** o `Co-Authored-By` acrescentado ao commit em cinco das dez WOs (wo0149 a wo0153; declarado em quatro, depois que a WO passou a pedir); e, na wo0150, o diff de documentação conferido só por sha1 e `numstat`, quando o passo pedia a leitura inteira. Nenhum dos dois mudou o conteúdo.

**2. O satelite-web — a origem** (`DEC-178` deles, 18/10). Setenta relatórios do Code desde então (wo0218 a wo0287). A busca por parada nos relatórios não achou nenhuma (os seis acertos eram a seção «Onde parei» do log). Exemplo de achado de conteúdo: na wo0279, o Code viu um item já cumprido na lista de próximos que o chat gravou, **e não alterou**, como a regra manda. Quantos relatórios trazem achado como esse pede leitura um a um: a busca por palavra não separa achado de «sem divergência». Os dados da `DEC-138` deles (`i-N75`, item 5: 64 SQL aplicados pelo chat, 8 corrigidos depois, nenhum de segurança, erros de medida e não de raia) são da mesma família.

**3. O Observatorio — o primeiro projeto que nasceu no método C** (`DEC-001` deles, 20/10; lido em 2026-11-09; projeto do trabalho, nada dele entra aqui além do método). Vinte e uma WOs até 30/10, nenhuma parada, nenhum erro relatado no commit. **Mas o método mudou no meio, sem decisão escrita:** da wo0001 à wo0014 (até 27/10), método C puro, WOs de 30 a 73 linhas. Da wo0015 em diante (28/10, «pedido do dono» registrado só no handoff deles), **documento grande que já existe não se regera no chat**: o chat grava só o arquivo novo, e STATUS, DECISIONS e as specs (de 9 a 25 KB) voltam a ir por edição E1…En com o md5 «antes» — WOs de 82 a 212 linhas. A `DEC-001` e o CEREBRO deles ainda dizem «o chat grava tudo». Dois motivos aparecem nos arquivos: a ponte de gravação já entregou uma vez uma cópia velha (`.novo` + md5 + `mv` virou regra), e o comando do shell estoura acima de ~10 KB — **o chat de lá regerava o arquivo inteiro para gravá-lo**. É o mesmo medo da `DEC-007` da Carreira («reescrever o arquivo inteiro no fim de uma conversa longa é onde se perde conteúdo»).

**4. A Carreira — o projeto sem verificador** (`DEC-007` deles, 07/11): só documento, sem build nem teste; adota o método C com «troca exata sobre o arquivo lido do disco» e `sha1sum` + `numstat` como a rede. Quatro WOs de conferência até 08/11 (wo0003 a wo0006): pouco para medir, mas é a primeira amostra do caso que a análise de 23/10 dizia faltar. **O GameDataHub** estuda o método do lado dele, com WOs de 500 a 1.000 linhas e dois tropeços do executor na mecânica (aviso de lido da carta 04): é o caso em que o C mais rende, e ainda não há dado.

**O que o dado diz, junto:**
- **O valor do método C está na ordem, não em quem confere.** Na casa, o Code não pegou nenhum erro de conteúdo; quem pegou foi o harness rodado pelo chat antes de a WO existir. A WO encolheu 7,8 vezes porque deixou de carregar o texto.
- **A rede do método é a troca exata, não o inventário.** O sha1 prova que o arquivo é o que o chat gravou; não prova que o chat gravou certo. O que impede perder conteúdo é gravar por troca com âncora de ocorrência única sobre o arquivo lido no turno — o que a casa fez em dez WOs. O Observatorio recuou exatamente onde o chat dele regerava o arquivo inteiro.
- **Sem verificador, a rede é a leitura do diff** — pelo Code (que lê o diff inteiro e relata, sem corrigir) e pelo chat na conferência de volta. É mais fraca que um harness, e é a mesma rede que a forma «edições» tinha num projeto só de documento.

## Opções consideradas

**(a) A casa**
- **A1. Fica no método C** (a seção do CEREBRO perde o «piloto»; a forma «edições» fica como reserva para quando o chat não tiver a pasta). Dez de dez, WO 7,8 vezes menor, o fim de linha resolvido.
- **A2. Volta à forma «edições».** Nada no dado pede isso.
- **A3. Híbrido do Observatorio** (o chat grava o arquivo novo, o Code edita os grandes). Resolve um problema que a casa não tem: aqui o chat já edita por troca exata, e as WOs de 55 a 72 linhas mostram que não precisa.

**(b) O kit (M2)**
- **M2a. A variante agora, condicionada ao canal pasta:** uma seção no CEREBRO gerado (com o Code e o canal pasta ligados), o molde da WO de conferência e a skill `apply-wo` com o ramo «conferência». Com quatro regras escritas: (1) **troca exata por script, com contagem de ocorrência igual a 1, sobre o arquivo lido no turno — nunca regerar um arquivo existente inteiro**; (2) gravar no fim de linha do arquivo; (3) gravação pela ponte se confere relendo o hash, e arquivo grande vai por arquivo novo + hash + troca de nome; (4) com build ou teste, rodá-los numa réplica antes de a WO existir. E a frase sobre o que a variante **não** dá: o Code confere e relata; quem revisa o conteúdo é o chat, antes.
- **M2b. Esperar mais amostras** (Carreira com dez WOs; o GameDataHub). Mais seguro, e o dado que falta é o de projeto sem verificador, que a Carreira só dará daqui a semanas.
- **M2c. A variante como padrão do canal pasta**, e não como opção. Cedo: três projetos rodando, e o Observatorio mostra que o método muda sob pressão sem que ninguém escreva.

## Recomendação

**A1 e M2a.** A casa fica no método C, com a forma «edições» como reserva escrita. O kit ganha a variante agora, como **opção** do modo Code no canal pasta, com as quatro regras acima — a primeira é a que faltou ao Observatorio. A condição de entrada da análise de 23/10 («só vale onde o chat roda a verificação») vira: **com build ou teste, o chat os roda antes; sem eles, a rede é a troca exata e a leitura do diff**, dito como limite e não como proibição — o dado da Carreira chega ao kit por carta, e a variante se revê com ele.

Junto, para quem a adotou: a carta 01 ao Observatorio (pelo canal do satelite-web, que é quem conversa com ele) devolve o achado — o recuo de 28/10 não está em decisão nenhuma, e a troca exata tira a razão dele.

## Riscos

- **A variante parece mais leve do que é.** Sem a regra (1), um chat que regera o arquivo inteiro e mede o hash depois tem um inventário perfeito do arquivo errado. A regra tem de estar no CEREBRO e no molde da WO, perto de onde se escreve.
- **O Code vira carimbo.** Se a conferência não lê o diff (o desvio da wo0150), sobra só o hash. O molde já pede o diff inteiro e o relatório do que foi visto além da WO; vigiar o «Além da WO» vazio.
- **Teto das Instruções geradas:** o modo Code está em 549/550 (`C28`). A variante não cabe nas Instruções; mora no CEREBRO, com uma linha de ponteiro no máximo — e essa linha pede tirar outra antes.
- **Mudança de método sem decisão escrita** (o Observatorio): a seção do kit pede que o projeto registre a variante em DECISIONS, e que voltar atrás, mesmo em parte, também seja decisão.

## Ponto de decisão

1. **A casa fica no método C (A1)?** Se sim, a WO seguinte emenda a `D-170` (o piloto vira regra), tira o «piloto» do título da seção do CEREBRO e das Instruções da casa (que pedem recolar no painel), e põe a forma «edições» como reserva.
2. **O kit ganha a variante agora (M2a), ou espera a Carreira e o GameDataHub (M2b)?** Se agora: uma WO de código (versão nova), com check novo que exija as quatro regras no CEREBRO gerado e o ramo «conferência» na `apply-wo` gerada.
3. **A carta ao Observatorio** sobre o recuo de 28/10: o KCM escreve, ou o achado vai ao satelite-web, que o orienta?
