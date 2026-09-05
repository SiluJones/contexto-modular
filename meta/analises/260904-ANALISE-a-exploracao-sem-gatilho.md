# ANÁLISE — O kit ensina a exploração e não entrega o gatilho dela

> **Status:** Em discussão
> **Data:** 260904 · **Base:** KCM v1.122.0, commit `d25f38f` (mount de 2026-09-04 12:15) · mapsmith commit `79974f2` (mount de 2026-09-04 12:16)
> **Vira:** — · **Decisão:** —
> **Origem:** leitura do repositório do `mapsmith` a pedido do dono, para achar o que refinar no KCM. Não nasceu de defeito relatado: nasceu de uma comparação entre o que o kit ensina e o que um projeto instalado precisou fabricar sozinho.

---

## Problema

O CEREBRO gerado traz a seção **«Sonda e exploração — o par que produz evidência»**, e ela é boa: define os dois artefatos, o funil `exploração → sonda → instrumento → análise → WO`, o terceiro estado (sonda que amadurece vira instrumento), as três propriedades do relatório, a regra de que nenhuma das duas dá veredito, a de que a exploração não parte da lista de checagens da sonda, a de que todo achado vem com o comando que o reproduz — e até o **esqueleto** do relatório de sonda.

**E o kit entrega duas skills: `apply-wo` e `wrap`.** A exploração não tem gatilho. Ela existe como conhecimento e não existe como comando.

O `mapsmith` fabricou a terceira sozinho: `.claude/skills/sondar/SKILL.md`, 3.520 bytes, `disable-model-invocation: true`, invocada por `/sondar`. **É o mesmo defeito que a wo0111 acabou de tratar em outro campo:** regra que vive só como prosa descritiva é reconstituída de memória a cada uso; regra que vive como artefato para copiar ou executar, não. O bloco de fecho derivou por isso durante quatro turnos. A exploração não deriva — ela simplesmente **não acontece**, porque nada a dispara.

## Restrições / o que foi medido

**Medido no gerador (`src/index.template.html`, v1.122.0):**

- A seção «Sonda e exploração» está inteira no CEREBRO gerado — 15 ocorrências de sonda/exploração no template, incluindo o esqueleto do relatório.
- `buildCodeKitFiles` emite **duas** skills: `apply-wo` e `wrap`. Nenhuma terceira.
- A tabela de gatilhos das Instruções tem a linha *«Precisa de um número sobre material grande demais para a conversa → manda MEDIR (sonda) em vez de deduzir»*. **Isso cobre a sonda, não a exploração** — e a diferença é exatamente a que a própria seção define: a sonda responde pergunta que alguém já soube fazer; a exploração descobre a pergunta.

**Medido no `mapsmith` (commit `79974f2`), na skill que ele fabricou:**

- Regras duras que o texto do kit tem em prosa e a skill converte em ordem operacional: não concluir e não usar a palavra «verificado»; todo achado com o comando que o reproduz; não escrever nada dentro do material explorado; não editar `meta/` nem `src/`; **não partir da lista de checagens da sonda**; número contado de cabeça não vale.
- Uma seção obrigatória no relatório que **o kit não pede**: **«O que eu olhei e não achei nada»**, com a justificativa escrita ali mesmo — *passada exploratória que sempre acha algo é passada que inventa; dizer «olhei X e está consistente» é resultado, e é o que permite a próxima passada pular X*. O kit exige declarar **o que não foi olhado**; o mapsmith acrescenta declarar **o que foi olhado e estava limpo**. São coisas diferentes e as duas são necessárias: a primeira impede que ausência vire zero, a segunda impede que a exploração se sinta obrigada a produzir achado.
- Um destino e um par de nomes: o relatório vai para `zz_extracao/sondas/<AAMMDD-HHMM>-EXPLORACAO.md`, e a conferência determinista grava **ao lado, no mesmo padrão**, com o tipo `CONFERENCIA`. Carimbo primeiro, tipo depois.
- O fecho da skill respeita a raia sem precisar ser lembrado: *o destino de um candidato é o `IDEAS.md`, e quem o move para lá é a raia de planejamento, depois que ele virar checagem determinista.*

**Medido — a evidência de que isto não é teoria.** A análise do mapsmith de 2026-08-10 registra dois defeitos que passaram inteiros por todos os instrumentos: 45 ícones sem canal alfa, visualmente destruídos, com o relatório verde em existência, extensão e origem (*nenhum instrumento abriu uma imagem*); e 446 screenshots apagados cujo único relatório os rotulou como «candidatos a colisão» — *o instrumento relatou o fato certo com a causa errada*. A regra deles sobre a lista de checagens tem data de nascimento: *foi assim que o FIX-0008 sobreviveu a duas rodadas.*

**E o KCM tem o mesmo padrão, medido nas últimas quatro WOs:**

| O que passou | Por quanto tempo | Como apareceu |
|---|---|---|
| `meta/workorders/_TEMPLATE.md` **6.618 bytes** atrás do gerado, sem o campo que a skill `apply-wo` usa para recusar | desde a wo0102 | por acaso, quando fui escrever uma WO e tropecei |
| Quatro entradas do `DECISIONS.md` em `###`, aparecendo como subitens da D-134 | desde a wo0102 | por acaso, ao procurar uma âncora |
| `KIT_VERSION 1.119.0` congelado na linha que o `C54` lê | três versões | por acaso, ao ler outra coisa na mesma linha |

**Nenhum dos três foi achado por instrumento. Os três foram achados de raspão**, enquanto eu procurava outra coisa — e o `C43` existe justamente porque *«as skills instaladas ficaram três versões atrás do gerado sem ninguém notar»*. A `i-N60` registra que o mesmo defeito reapareceu no vizinho que o check não cobre, e o gatilho dela **já disparou duas vezes** sem ser pago.

**Restrição de teto:** a skill é arquivo do kit do Code, como `apply-wo` e `wrap` — **não entra nas Instruções nem no CEREBRO**, logo não disputa a folga de 295 do `narrative`. O que custaria teto seria uma linha na tabela de gatilhos, e é opcional.

**Restrição de escopo do kit:** o KCM atende 18 nichos, e a maioria não tem pacote de dados para explorar. Uma skill de exploração genérica precisa explorar **o material do projeto** — os documentos, os artefatos, o que existe no disco —, não presumir um pipeline técnico. Isso é desenho, não obstáculo: as regras duras da skill do mapsmith são todas independentes de domínio; só os itens do «o que fazer» são específicos.

## Opções consideradas

**A — O kit passa a gerar uma terceira skill, `sondar`.** Genérica: as regras duras (não concluir, reproduzir, não editar, não partir da lista existente, não contar de cabeça, declarar o que olhou e estava limpo) mais um «o que fazer» redigido em torno do material do projeto, com o esqueleto de relatório que o CEREBRO já ensina. Custo de teto zero. Ganho: a exploração passa a ter gatilho em todos os 18 nichos.

**B — Só uma linha na tabela de gatilhos**, mandando explorar quando algo é redescoberto de raspão. *Fraca:* é mais prosa, e prosa é o que já existe e não dispara nada. Seria repetir o erro que a wo0111 corrigiu.

**C — Nada; a exploração é um gesto que o assistente faz quando julga necessário.** *É o estado atual*, e o que ele produziu está na tabela acima: três defeitos achados por acaso, um deles vivo desde a wo0102. «Quando julgar necessário» é a mesma cláusula de julgamento que a wo0111 acabou de remover do fecho por não funcionar.

**D — Um check no harness que compare cada superfície instalada com a gerada** (a `i-N60`, generalizada). *Complementar, não substituta:* fecharia a classe «a casa ficou atrás», que é uma das três linhas da tabela, e não faria nada pelas outras duas. Instrumento acha o que já sabe procurar — é a frase que o próprio CEREBRO gerado já contém.

## Recomendação

**A, com D depois.** A skill é o gatilho que falta e custa zero de teto; a `i-N60` continua valendo por si e fecha uma classe inteira que a exploração só encontraria por sorte. Fazer só D deixaria o kit ensinando um par cuja metade exploratória segue sem comando.

**Duas coisas do mapsmith que devem entrar na skill e ainda não estão no CEREBRO gerado:**

1. **«O que eu olhei e não achei nada» como seção obrigatória**, com a razão junto. É o que impede a exploração de inventar achado para justificar a passada, e o que permite à próxima pular o que já está limpo.
2. **O par de nomes lado a lado** — exploração e conferência determinista gravando no mesmo padrão, carimbo primeiro e tipo depois. Isto é a mesma convenção da wo0110, uma camada acima.

**E uma tensão que a leitura expôs, que precisa ser resolvida antes da WO:** o esqueleto que o kit ensina diz `# SONDA — <assunto>` com o comentário **«o nome diz o QUE, não o quando»**; o mapsmith, que roda isso há mais de um mês, nomeia `<AAMMDD-HHMM>-EXPLORACAO.md` — **carimbo primeiro**. Não é descuido deles: com relatórios reexecutáveis, o que importa é a pasta ordenar sozinha no tempo e o par antes/depois ficar visível, e o assunto vai no título dentro do arquivo. As duas regras estão certas para casos diferentes — documento de sonda de assunto único versus série reexecutável — e hoje o kit só ensina uma, sem dizer quando ela vale. **Isto é candidato a errata do texto atual, não só a acréscimo.**

## Riscos

- **Skill que ninguém invoca é pior que regra em prosa**, porque cria a impressão de cobertura. Mitigação: `disable-model-invocation: true` como nas outras duas (o dono chama), e uma linha no gatilho ligando-a ao evento observável — *achado de raspão, defeito redescoberto, ou material grande demais para a conversa*.
- **A skill genérica pode sair vaga.** As regras duras são universais; o «o que fazer» é que corre risco de virar «olhe as coisas». Mitigação: derivar os itens do que é comum a todo projeto do kit — o que existe no disco contra o que os `meta/` declaram, o que o gerado diz contra o que a casa instalou, números repetidos em dois documentos que deviam concordar.
- **Mais uma superfície instalada para envelhecer.** Três skills em vez de duas, e a `i-N60` já mostra que ninguém confere isso. É argumento a favor de D, não contra A.
- **A leitura do mapsmith foi parcial.** Li o manifesto, a skill `sondar` e a análise de 2026-08-10 inteira; das outras dezoito análises deles li os títulos. Pode haver mais coisa boa lá — esta análise não afirma ter esgotado o material.

## Ponto de decisão

1. **A skill `sondar` entra no kit?** É a decisão principal; o resto depende dela.
2. **A tensão do nome** (`<assunto>` contra `<carimbo>-<tipo>`) vira errata do CEREBRO gerado na mesma WO, ou fica para depois?
3. **A `i-N60` é paga agora?** O gatilho dela disparou duas vezes; a próxima WO toca o `validate.js` de novo se a resposta a 1 for sim.
