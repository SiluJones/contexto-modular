# ANÁLISE — O update que cansa: o que o merge de um pacote obriga a fazer, e o que dá para cortar

> **Status:** Em discussão
> **Data:** 261125 · **Base:** v1.162.1 (`9ce052d`)
> **Vira:** a WO de kit «o update enxuto», se o dono aprovar · **Decisão:** a registrar

## Problema

O dono, na nota `261125-1321` `[relatado pelo dono]`: «tá horrível atualizar […] acabou impondo alguma coisa que só está atrapalhando, fazendo perder turno e paciência». O exemplo colado é o merge do Vectorforge (`dev`, kit v1.135.0) com o pacote v1.162.1: o primeiro turno inteiro foi a varredura das linhas revogadas (34 ocorrências, 0 corrigidas) e terminou parado no perfil, com **0 de 23 arquivos comparados**. O merge não começou e já pediu uma decisão ao dono.

O prompt do update cresceu por acréscimo: cada merge real que achou uma falha virou uma regra a mais (`D-180`, `D-186`, `D-197`, `D-200`…), e nenhuma saiu. Hoje ele manda, antes de comparar qualquer arquivo: conferir a versão; olhar o painel; ler as skills inteiras; varrer as revogadas pelo fato em todas as superfícies; conferir o carimbo de modos; comparar o perfil — e parar no perfil se algo divergir.

## Restrições / o que foi medido

Seis merges desde 20/11, todos lidos pelo KCM:

| Projeto | Kit de partida | Revogadas: varridas / corrigidas | Parou no perfil? | Turnos até começar a comparar |
|---|---|---|---|---|
| Vectorforge (`dev`) | v1.135.0 | 34 / **0** | sim (nome e SO vazios no formulário) | ≥ 1, e ainda não começou `[relatado pelo dono, a nota]` |
| My Little Lady | v1.104.0 | 62 / 18 | sim (erro do chat do KCM ao gerar, `i-N108`) | 1 fatia parada, depois 3 fatias |
| I will die | sem carimbo (não medido) | — / 5 superfícies | não: o dono respondeu «campos vazios = manter os da obra» | 1 (inventário), depois a WO |
| Coral Island | v1.122.0 | 19 / 3 | não: o pacote nem era de update (o dono gerou o projeto completo) | contornado com o v1.161.0 |
| Carreira | v1.73 | — | não existia a tabela | — (o painel ficou na v1.73) |
| Hey Mother | não medido aqui | — | — | fundido no v1.155.0, o primeiro evento da `i-N99`, a favor |

`[medido nos avisos de lido, nas cartas e nos relatórios dos vizinhos; o Vectorforge pela nota do dono]` **Não lidos:** o repositório do Vectorforge e o do CDC (o pedido de acesso às duas pastas foi negado pelo filtro automático em 25/11); o CDC é citado pelo dono como outro caso.

**Três fatos do código** `[medido no src/ da v1.162.1]`:
1. Cada linha revogada tem o campo `desde` (a versão em que o kit a revogou): as quatro são de **v1.90.0, v1.104.0, v1.106.0 e v1.106.0**. Um projeto instalado em v1.106.0 ou depois **não pode** ter nenhuma delas vinda do kit. O prompt manda varrer as quatro sempre.
2. O perfil (`D-200`) compara o formulário com o projeto e diz: «campo diferente é pergunta ao dono ANTES de fundir; o remédio é regerar». Campo **vazio** conta como diferente. Mas o vazio não escreve nada errado: o bloco do nicho vazio não entra nas Instruções (`D-201`), e o SO vazio só tira a seção «Ambiente» — que o transplante devolve. Só campo **preenchido e diferente** põe texto errado no pacote.
3. O pacote depende do formulário para as duas `fusao` (CEREBRO e Instruções), mas o merge já transplanta do vivo tudo o que é do projeto. O formulário em branco custa uma linha de transplante, não um pacote novo.

**Três defeitos do próprio kit**, achados por três vizinhos sem combinar (`[medido no pacote v1.162.0/1 por eles]`): as skills `apply-wo` e `wrap` ainda dizem «sessão» (a revogada da v1.106.0 vive no kit); a `wrap` manda «append, não reescreva» no STATUS, que o CEREBRO diz rolante; o `CLAUDE.md` manda fechar com «menu numerado», e as skills mandam `AskUserQuestion`. Cada merge gasta tempo classificando a contradição do kit como «feedback, não remoção».

## Opções consideradas

**A — Só ajustar o texto do prompt.** Pôr «faça rápido» no topo. Não muda nada: as regras continuam obrigatórias, e o assistente cumpre.

**B — O update enxuto: cortar pelo que se mede.** Quatro trocas, cada uma com o comando que a confere:
1. **A varredura das revogadas filtra pela versão:** o manifesto e o prompt dizem «varra só as linhas com `desde` maior que a versão do kit do seu projeto (o carimbo); sem carimbo, todas». No Vectorforge, zero linhas a varrer — o turno inteiro some.
2. **O perfil não para por campo vazio:** vazio no pacote = o projeto mantém o dele, por transplante, sem pergunta. Só campo **preenchido e diferente** vira pergunta, e a pergunta vai **junto com o inventário do merge**, no fim da comparação, nunca antes dela. «Regerar» fica como opção do dono, não como regra.
3. **O botão do pacote avisa o vazio na hora de gerar:** antes de baixar, a tela lista os campos vazios do formulário («Nome, Sistema operacional estão vazios: o merge vai usar os do projeto»). O dono decide ali, sem gastar turno no projeto. Pega também o caso do Coral Island (o botão errado), se a lista disser que é um pacote de update.
4. **Consertar as três contradições do kit** (o «sessão» nas skills, o «append» da `wrap`, o «menu numerado» do `CLAUDE.md`) e pôr um check que as procure no gerado, para não voltarem.

**C — Refazer o update do zero** (um merge mínimo: trocar os arquivos do kit, fundir só CEREBRO e Instruções, sem as seções de varredura). Mais limpo, mas desfaz lições reais (a revogada que só a leitura achou, o painel da Carreira) e é uma WO grande; o custo de errar cai nos vizinhos.

## Recomendação

**B, numa WO de kit (corta minor: muda o que o kit gera).** Os itens 1 e 2 tiram o que a nota do dono mostrou — o turno da varredura e a parada do perfil — sem apagar nenhuma lição: a varredura continua para quem pode ter a linha, e o campo preenchido errado continua sendo pergunta. O item 3 move a decisão do perfil para onde ela é barata (a tela, antes de gerar). O item 4 tira o ruído que três merges gastaram classificando.

**Para o Vectorforge, agora, sem esperar a WO:** responder «B, siga com este pacote» (transplantar o nome Vectorforge e o Windows CMD) e dizer à conversa dele que as quatro revogadas são todas anteriores à v1.135.0 do projeto — a varredura feita basta, e não precisa repetir.

## Riscos

- **O filtro por versão confia no carimbo.** Projeto sem carimbo, ou com carimbo errado, varreria menos do que devia. Mitigação: sem carimbo, varre tudo; o carimbo errado é caso raro e já tem check (`C54`, `C56`).
- **O perfil sem parada pode deixar passar o caso da Carreira** (modalidade «Híbrido» preenchida e errada). Não deixa: preenchido e diferente continua pergunta — só muda o momento (no inventário, não antes de comparar).
- **Cortar regra é a decisão que o kit nunca tomou:** os 137 checks nasceram de acréscimo, quase todos. Os itens 1 e 2 mudam asserts do `C134` e do `C46`; a WO tem de mostrar que o que eles protegiam continua protegido.

## Ponto de decisão

O dono escolhe: **B** (a WO de kit, com os quatro itens), **B sem o item 3** (sem mexer na tela), ou **C**. E, separado: se quer que o KCM leia o Vectorforge e o CDC antes da WO (precisa conceder as duas pastas pelo app desktop, já que o pedido automático foi negado).
