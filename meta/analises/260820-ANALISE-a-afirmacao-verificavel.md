# ANÁLISE — A afirmação verificável: por que a regra existe, é escrita por quem a viola, e falha na quinta série seguida

> **Status:** Em discussão
> **Data:** 260820 · **Base:** v1.119.0, commit `bb8ebee` (foto do `_MANIFEST` de 2026-08-20 21:20)
> **Vira:** — · **Decisão:** —
>
> **Origem:** transcrito `mapsmith_11.md` (44 blocos, 22 turnos, 17–20/08) lido bloco a bloco, mais o
> `IDEAS.md` e o `CEREBRO.md` do Mapsmith no mount desta data. Pedido explícito do dono do Mapsmith no
> bloco 43: *«se realmente tem um motivo então o que deve ser feito é analisado, apresentado para o KCM
> lidar também, desenvolvido e refinado métodos para lidar»*.

---

## Problema

Numa única sessão do Mapsmith, o assistente fez **cinco afirmações falsas que eram verificáveis em
segundos** — e em quatro delas quem refutou foi o dono ou o executor, não ele.

| # | A afirmação | O que a refutou | O que custou |
|---|---|---|---|
| 1 | *«Não há mecanismo»* para sugerir o próximo comando | Um print do dono, com a caixa pré-preenchida | Uma resposta inteira baseada em impossibilidade inventada |
| 2 | *«O menu selecionável é do cliente, não do modelo»* | Duas buscas na documentação: `AskUserQuestion` **é** ferramenta do modelo | A wo0103, escrita como experimento sobre uma hipótese que não podia dar certo |
| 3 | *«A raspagem de HTML acabou»* (o `data-gcmap` sumiu) | O dono colou o HTML: virou `data-gccmap`, **uma letra** | Uma frente declarada morta que estava viva |
| 4 | *«`_make_tab` é o helper que os testes deste arquivo já usam»* | O símbolo **não existe** em lugar nenhum do repositório | Salvo só pelo «PARE» escrito na própria WO |
| 5 | *«Não li o STATUS/DECISIONS/CHANGELOG/log — o mount é anterior»* | `mtime 2026-08-20 17:32` nos quatro, com o conteúdo alegado ausente **presente** | A wo0112 refeita inteira |

E um sexto caso, que não é afirmação e é da mesma família: o relatório
`260820-0020-code-apply-wo0108.txt` ficou **quatro turnos** listado em «Manter — não li» e nunca foi
lido. Ele documentava exatamente a armadilha de `grep` que voltou a acontecer na **wo0110** e na
**wo0111**. *Um relatório não lido custou duas repetições do mesmo erro.*

**O que dói, e para quem.** Não é o erro: é que o erro nasce **apresentado como método cuidadoso**. O
caso 5 é o pior justamente porque a frase *«e não vou fingir que li»* soa como rigor. Contorno vendido
como rigor não deixa suspeitar — o dono só descobriu porque conferiu à mão o que o assistente afirmou
não poder conferir. **O custo real é o dono virar o instrumento de verificação do assistente.**

**Se nada for feito:** a família não é nova. O brief de 2026-08-18 já registrava a D-126 («ausência
relatada por instrumento é uma afirmação e precisa de prova») como **violada quatro vezes na série
anterior, sempre do lado de cá, e nas quatro apontada pelo autor ou pelo projeto irmão**. Somando:
**dez ocorrências em duas séries**, com a regra escrita, publicada nos 18 nichos, e violada por quem a
escreveu. A próxima série repete.

---

## Restrições / o que foi medido

**Medido neste turno, no mount:**

- **O mount zera o `mtime` de todo arquivo.** `CEREBRO.md` e `IDEAS.md` chegam como
  `1979-12-31 00:00`. Não é amostra: é todo o mount, nos dois projetos. **Conferir a idade de um
  arquivo pelo sistema de arquivos é impossível de dentro do chat** — o único carimbo de tempo que
  existe é o `Gerado em` do `_MANIFEST`, que é do lote inteiro, não do arquivo.
- **A tabela do `_MANIFEST` não casa com o mount em 11 arquivos de 109.** No KCM, 5 de 53
  (`.flatdropignore`, `.gitattributes`, `.gitignore`, `settings.local.json`, **`index.template.html`**);
  no Mapsmith, 6 de 56 (os três *dotfiles* e os três `map.2.0-*.json`). O padrão é determinístico: ponto
  inicial vira `_`, ponto interno vira `_`. O manifesto promete mapear o nome plano de volta ao caminho
  original, e para esses arquivos o nome plano que ele declara **não existe**.
- **P8, conferência de volta do brief de 18/08:** a pendência (a) — os logs de 14 e 18/08 — está
  **fechada**: `bb8ebee docs(log): registra os dias 14 e 18 de agosto`. Não repetir como aberta.

**Medido no transcrito (`mapsmith_11.md`):**

- Cinco afirmações refutadas em 22 turnos; em quatro, o refutador foi externo.
- Três reclamações do dono sobre a **mesma** classe de defeito, em turnos diferentes: comando entregue
  pela metade (bloco 17: *«vc ta me irritando de propósito né»*), omissão ambígua no «Arquivar»
  (bloco 25), e comando de download sem o caminho (bloco 35 — **depois** de a regra ter sido escrita
  na wo0101, no bloco 18).
- O que **funcionou** no mesmo transcrito, e funcionou sempre: o **«PARE e relate»**. Pegou o
  `_make_tab` inexistente, pegou a âncora *reflowed*, pegou o parágrafo apagado por engano na
  wo0108, pegou a contradição entre checklist e edição na wo0110. **Zero falhas.**

**Restrição de teto (C28, v1.119.0):** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 ·
compart 372/450 · combo 7491/7600`. Folga do `narrative`: **295**. Folga do balde Code: **36**. Nada
desta análise pode ir para as Instruções sem medição prévia; o modelo de WO e as skills vivem **fora**
do `buildInstr` e custam zero.

---

## O diagnóstico — por que estas regras falham e outras não

As regras do kit que **falham** nesta família têm todas a mesma forma: *«antes de X, confira Y»*. Elas
são **autoendereçadas** — quem tem de cumprir é exatamente quem tem o viés, o cumprimento não produz
artefato nenhum, e o descumprimento não deixa buraco visível. Nada aparece quando você confere; nada
falta quando você não confere.

As regras deste mesmo kit que **funcionam sem depender de memória** têm uma de duas propriedades:

- **A conferência é de outro.** O «PARE e relate» é conferido por quem aplica, não por quem escreve — e
  por isso pegou quatro erros meus numa sessão só. O dono conferindo a lista «Arquivar» é o mesmo
  desenho.
- **A conferência é mecânica.** O C43 e o C37 cobraram a auto-aplicação da D-121 **antes de o autor
  pensar nela**. O `grep` do checklist da WO pegou o parágrafo apagado antes do commit.

**E a IDEA-098 do Mapsmith isola a sub-causa com precisão, que é o que torna isto analisável:** o
`CEREBRO:65` manda rever o mount a cada turno olhando *«novos `.txt`, `_MANIFEST`, **arquivos
mudados**»*. A primeira metade foi cumprida religiosamente — é um `ls` que já se roda por outro motivo.
A última **nunca** foi cumprida, porque exigia uma decisão consciente de reler 45 KB.

> **A metade cara da regra foi a que não tinha comando associado.**

E o mecanismo do veto é o achado que vale carregar: o princípio *«não desperdiça token»* **venceu o
P8 em silêncio, todos os turnos, sem nunca ser formulado**. Dois princípios do mesmo kit em conflito
direto, e o kit não arbitra — não diz qual manda, não diz como reconhecer o conflito, e a decisão é
tomada por omissão, do lado barato, sem que nem o assistente nem o dono vejam acontecer.

**Uma quarta observação, estrutural e independente:** a D-133 corrigiu o «menu numerado» em **18/08**.
O Mapsmith descobriu o mesmo defeito sozinho em **19/08** e o corrigiu à mão na wo0104, e mandou de
volta como feedback um item que o kit já tinha fechado no dia anterior. **Dois projetos resolveram o
mesmo problema em paralelo, com um dia de diferença, sem saber.** O pacote de update é *pull* e por
leva; entre levas, os projetos reresolvem o resolvido. Custou uma WO ao Mapsmith e um item de feedback
morto ao kit.

---

## Opções consideradas

### A — Escrever a regra com mais força no CEREBRO
**Descartada.** É a quinta iteração da mesma forma. A D-126 já é essa regra, está publicada nos 18
nichos, e foi violada dez vezes em duas séries por quem a escreveu. Mais texto na mesma forma custa
teto e compra o mesmo resultado. *A ser adotada, é como complemento das outras, nunca sozinha.*

### B — Mudar o destinatário da conferência (tirar de quem tem o viés)
- **B1 — Campo «Âncoras lidas em» no cabeçalho da WO, com recusa por quem aplica.** O cabeçalho passa a
  exigir, por edição, **o trecho literal** da âncora e o turno em que foi lido; **quem aplica recusa a
  WO se vier vazio**. É exatamente o desenho do «PARE e relate», que tem zero falhas medidas. E o campo
  pede o *trecho*, não uma marca de conferido: não se escreve o trecho sem abrir o arquivo.
- **B2 — «Arquivar / Manter» exaustivo, com leitura forte e prazo.** Hoje o CEREBRO manda listar nome
  por nome; não diz que a lista é exaustiva, nem o que a omissão significa. O dono do Mapsmith formulou
  melhor que a regra: *omissão pode ser «já extraí tudo» ou «nunca abri», e as duas pedem ações
  opostas*. Passa a valer: a lista cobre **todo** arquivo avulso do mount; «Arquivar» só admite o que
  foi lido **inteiro naquele turno**; «Manter» exige motivo; e **«Manter — não li» tem prazo** — na
  dúvida o item é lido ou declarado abandonado, porque foi exatamente um «Manter — não li» de quatro
  turnos que custou duas repetições de um erro documentado.

### C — Tornar a defasagem legível sem comando (matar a causa, não o sintoma)
- **C1 — O `_MANIFEST` do FlatDrop carrega o `mtime` de cada arquivo.** O manifesto já é lido na
  abertura do turno; a idade de todo arquivo passa a chegar **de graça**, junto do que já se lê. Converte
  a metade cara da regra na metade barata — que é precisamente a causa diagnosticada. **Medido:** como o
  mount zera os `mtime`, esta é a **única** via possível; não há alternativa local.
- **C2 — Marca de «mudou desde a geração anterior» no manifesto.** Descartada por redundância: o
  `mtime` já entrega isso e custa menos ao FlatDrop.

### D — Mecanizar num check do harness
**Inaplicável, e nomear isso importa.** O `validate.js` audita o **produto gerado**, não o
comportamento do assistente num turno. Nenhum dos 96 checks pode observar uma leitura que não
aconteceu. **É por isso que esta família atravessou cinco séries:** ela é o ponto cego estrutural do
único instrumento automático que o kit tem. Toda solução aqui é de desenho de processo, não de harness.

### E — Regra por TIPO de afirmação, em vez de por momento
Não é alternativa às outras; é o texto que B1 passa a cobrar. Hoje o P8 fala de *«pedir arquivo»* e a
D-126 de *«ausência relatada por instrumento»* — nenhuma das duas cobre «o que uma ferramenta faz» nem
«que símbolo existe no repositório», que foram três dos cinco casos. A forma proposta:

> **Afirmação sobre artefato legível não é opinião, é leitura.** O que uma ferramenta faz, o que um
> símbolo contém, e em que estado está o mount são as três espécies. Nenhuma se afirma de memória: ou se
> lê, ou se declara não lida — e **declarar não lido não autoriza entregar em cima**.

A segunda metade é a que faltava no caso 5: o assistente declarou não ter lido **e entregou assim
mesmo**, o que é pior que não declarar.

---

## Recomendação

**C1 e B1 agora; B2 em seguida; E como texto de B1; A nunca sozinha.** A ordem não é arbitrária:

1. **C1 tira a causa** — enquanto a conferência custar uma decisão consciente, o princípio barato vence
   em silêncio, e nenhuma regra escrita muda isso. É a única opção que ataca o mecanismo do veto.
2. **B1 tira a dependência de memória** — passa a conferência para quem não tem o viés, no desenho que
   já tem zero falhas medidas neste projeto.
3. **B2 torna o resíduo visível ao dono** — o que escapar de C1 e B1 aparece numa lista que ele lê.

**C1 já está preparado** como carta ao FlatDrop (`260820-kcm-para-flatdrop-01-...`), com os três itens
medidos e resposta pedida item a item.

**Custo de teto previsto: zero para B1 e B2** — o modelo de WO e o bloco de fecho vivem no CEREBRO e no
`buildWoTemplate`, fora do `buildInstr`. **A medição vem antes da escrita**, como manda a D-133; o
número entra na WO, não nesta análise.

---

## Riscos

- **C1 depende de terceiro.** O FlatDrop está em desenvolvimento por decisão do dono; se a carta não for
  atendida, B1 e B2 continuam valendo, mas a causa segue viva. *Vigiar:* se em duas séries o `mtime` não
  vier, C1 vira ideia adiada com gatilho, não pendência silenciosa.
- **B1 pode virar ritual.** Campo obrigatório preenchido sem leitura é o modo de falha clássico —
  o próprio kit já o nomeou na D-102 («campo obrigatório induz confabulação»). *Mitigação embutida:* o
  campo pede o **trecho literal**, não uma confirmação. *Vigiar:* a primeira WO cujo trecho não bater
  com o arquivo.
- **B1 desloca custo para quem aplica.** Recusar WO custa um ciclo. *Contrapeso medido:* na wo0112 o
  ciclo foi gasto de qualquer forma — a WO foi refeita inteira, só que **depois** de o dono descobrir.
- **B2 vira ruído em sessão longa.** *Contra-evidência medida:* o Mapsmith roda a versão exaustiva desde
  a wo0105 e as listas têm 2 a 4 itens.
- **Risco desta própria análise:** ela diagnostica um defeito de leitura e foi escrita a partir de um
  mount que eu **li neste turno** — os checks do topo estão declarados exatamente para que a próxima
  leitura possa refutá-los.

---

## Ponto de decisão

1. **B1 entra?** — «Âncoras lidas em» como campo obrigatório do modelo de WO, com recusa declarada por
   quem aplica. *(Recomendo sim.)*
2. **B2 entra?** — «Arquivar / Manter» exaustivo, «Arquivar» só para lido inteiro no turno, «Manter — não
   li» com prazo. *(Recomendo sim.)*
3. **E entra onde?** — o texto por espécie de afirmação vai como refinamento do P8, como regra de
   higiene no CEREBRO, ou só dentro do cabeçalho da WO (B1)? *A escolha muda o custo de teto e por isso
   pede medição antes da WO.* *(Recomendo: dentro de B1 primeiro; promover a princípio só na segunda
   ocorrência, pela regra do «N+1 só compensa com N consumidores».)*
4. **Os outros seis itens extraídos do Mapsmith saem em uma leva ou em duas?** — os cinco itens
   concretos (comando inteiro · «é do dono» nomeia o impedimento · passo `1b` · enunciação no caminho
   verde · semântica real do `AskUserQuestion`) são baratos e independentes desta análise. *(Recomendo
   uma leva só, depois desta decisão, para não pagar dois ciclos de registro.)*
5. **O achado do paralelo (D-133 × wo0104) vira frente?** — hoje não há canal para o kit avisar um
   projeto instalado de que algo já foi corrigido. *(Recomendo registrar com gatilho: a segunda vez que
   um projeto devolver feedback sobre defeito já fechado.)*
