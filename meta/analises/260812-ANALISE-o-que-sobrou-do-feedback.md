# ANÁLISE — O que sobrou do feedback dos dois projetos depois das duas levas

**Status:** `Parcialmente decidida` — §A decidida e implementada (wo0087/D-121); §B fecha por inteiro: B1/B4/B5 decididas e implementadas (wo0088/D-122), B2 decidida e implementada (wo0089/D-123), B3 sai do escopo do kit (questão de organização de cada projeto, não do kit); §C: pedidos 2 e 3 respondidos por evento nesta sessão, pedido 1 sem evento ainda
**Data:** 2026-08-12 · **Versão do kit na época:** v1.107.0 (commit `3677718`)
**Origem:** varredura completa de `IDEAS.md` §«Feedback para o Kit» dos dois projetos (Mapsmith, 14.426 caracteres; Sand-Land-Map, seção inteira), mais `FEEDBACK-kit-09-lista-de-conferencias.md`, `260804-1444.txt` e os três transcritos `mapsmith_8/9/10.md`.
**Elos:** D-112, D-113, D-114, D-115, D-116, D-119, D-120

---

## Inventário — de onde saiu esta lista

Aplicando a regra que a D-120 acabou de instalar, ao próprio trabalho de fazê-la.

**Saiu do artefato.** A lista não veio da memória das duas levas nem do que os briefs diziam ter fechado. Cada item foi lido nas seções de feedback vivas dos dois projetos e depois **verificado contra o fonte** — `grep` no `src/index.template.html` da v1.107.0 procurando o **fato** que a sugestão pede (a palavra «sonda», `meta/refs`, «quem abre», «não foi olhado», «a próxima é a NNNN»), não a frase da sugestão.

**Não truncado.** Nenhum `head`: as duas seções foram lidas inteiras (a do Mapsmith, 14.426 caracteres; a do sand-land, até o fim do arquivo).

**Contagem declarada — conteste antes de agir:** **32 itens** de feedback ao todo. **24 fechados** e verificáveis no fonte; **6 abertos**; **2 respondidos por evento** nesta rodada. Se você contar diferente, o número é o achado.

---

## Problema

Depois da wo0085 e da wo0086, o que sobrou não é resto: **é a metade do feedback que não vinha embrulhada como defeito.** Os itens fechados eram todos «o kit faz X e X está errado» — fáceis de reconhecer, e por isso foram os primeiros. Os seis que sobraram são de outra natureza: **cinco pedem um artefato ou um tipo que o kit não tem**, e um é a única regressão viva.

E há uma descoberta que a varredura produziu e que não estava em lista nenhuma: **o kit corrigiu, para os projetos que ele gera, um defeito que continua vivo dentro do próprio KCM.** É o assunto da §A.

---

## §A — A regressão viva: o `/wrap` do KCM ficou para trás do kit que ele publica

**Isto não é sugestão de projeto irmão — é um defeito medido hoje, no fecho da wo0086.**

O `/wrap` do KCM entregou os três blocos de `git` para o autor colar. O autor apontou, com razão, que o executor **tem terminal** e podia rodá-los; e que o relatório do `/wrap`, escrito antes do push, é **estruturalmente incapaz** de dizer se o push aconteceu — o próprio arquivo `260812-0911-code-kcm.txt` termina com «COMMIT — Ainda NÃO executado».

**O diagnóstico do autor está certo, e a causa é mais interessante que o sintoma. Lido no fonte, os dois arquivos:**

| | o que diz | |
|---|---|---|
| **kit gerado** (`src/index.template.html`, skill `wrap`) | *«Verde: `add`, `commit` e `push` sem perguntar. Vermelho: nao commite nem empurre — feche com MENU NUMERADO (a recomendada em 1)… Resolva o push ANTES de escrever o relatorio.»* | ✅ correto desde a **D-115** |
| **`.claude/skills/wrap/SKILL.md` do próprio KCM** | *«Me mostre o `git diff` e o comando de commit pronto: um bloco por comando… para eu copiar isolado.»* | ❌ pré-D-115 |

**A D-115 consertou o gerador e ninguém migrou o instalado — dentro da própria casa.** A ironia é exata: a D-115(g) diz, com todas as letras, que *«consertar o gerador não conserta o instalado»*, e criou um pacote de update para alcançar quem já tinha instalado o `settings.json` quebrado. **O KCM não aplicou esse raciocínio a si mesmo.**

**E o defeito é o item FK-L(b) do sand-land**, aberto desde 2026-08-09, palavra por palavra: *«entrega blocos quem não pode executá-los — o chat entrega porque não tem disco; o executor roda, e só pergunta uma vez, quando tudo está verde.»* O sand-land descreveu, três dias antes, o que aconteceria aqui.

**A regra que deveria ter pego isto também já existe, e também não foi aplicada em casa.** A higiene «Varra pelo fato, não pela frase» (D-116) termina assim: *«E **as skills por último e com mais atenção**: são a superfície mais esquecida e a mais perigosa, porque são lidas ANTES de trabalhar, então uma linha morta ali dirige o trabalho seguinte em vez de só informar mal.»* É a descrição literal do que aconteceu.

**Segundo achado da mesma varredura, no mesmo lugar.** O `.claude/skills/apply-wo/SKILL.md` do KCM **também** é pré-D-115: não tem a ordem verde/vermelho, não tem menu numerado, não tem «resolva o push antes do relatório». Ele funcionou nas wo0085 e wo0086 **por acidente** — porque as WOs que eu escrevi traziam os blocos de commit no corpo. Numa WO que não os trouxesse, o mesmo defeito do `/wrap` apareceria.

**Terceiro achado, menor e verificado:** o `.claude/settings.json` do KCM não tem `Write` no `allow` (a D-115(b) o pôs no gerado). Funciona hoje só porque o arquivo tem `defaultMode: acceptEdits`, que auto-aceita escrita. É um segundo mecanismo cobrindo uma permissão ausente — funciona, mas por motivo diferente do que o kit documenta.

**Por que o harness nunca pegou nada disso.** `validate.js` lê o `index.html` e as strings do kit gerado. Ele **nunca abre um arquivo de `.claude/` do próprio repositório** — verificado. Todos os checks sobre skills testam o que o kit *emite*, nenhum testa o que o KCM *usa*. É a doença que o Mapsmith nomeou em `260810-ANALISE-o-instrumento-mede-o-que-e-facil.md`, aplicada ao instrumento do próprio kit: o harness mede o que é fácil de medir — a saída da função — e não o que está instalado ao lado dela.

**Recomendação: leva própria, e a primeira da fila.** É a única regressão viva do inventário, tem custo já pago, e o remédio tem três partes: (1) as duas skills e o `settings.json` do KCM migram para a versão que o kit publica; (2) um check novo abre os arquivos de `.claude/` **do repositório** e compara com o que `buildCodeKitFiles()` emite, falhando quando o instalado ficar para trás do gerado; (3) a decisão registra a lição em forma geral — *o KCM é usuário do próprio kit, e todo update do gerador tem um passo de auto-aplicação*.

---

## §B — Os cinco abertos que pedem artefato ou tipo novo

Nenhum é defeito. Todos são «falta uma coisa», e é por isso que atravessaram cinco levas sem serem pegos: **não doem, só custam.**

### B1 — A sonda como artefato de primeira classe *(sand-land FK-F + FK-I; Mapsmith IDEA-073)* — **implementada (wo0088/D-122)**

**O mais forte dos cinco, e o mais mal resolvido até agora.** A D-113 pegou o **princípio** («quem tem acesso ao disco mede, quem tem contexto decide») e o instalou como seção do CEREBRO e do modelo de WO. Não pegou o **molde**, e a palavra «sonda» **não aparece uma vez** no fonte do kit — verificado.

O que ficou de fora, e que o sand-land especificou em detalhe:

- **As três propriedades do relatório.** (1) tabela e contagens, **nunca prosa**; (2) **o que NÃO foi olhado é declarado**, para ausência não virar zero; (3) **nada truncado sem mostrar o total**.
- **O artefato bruto gravado em disco**, para a pergunta seguinte não exigir re-rodar.
- **A proibição de dar veredito** — e a razão dela, que é a parte que mais vale: *teste de conformidade não detecta que a especificação está errada.* É o mecanismo do FIX-0010: 45 arquivos, extensão certa, índice certo, tudo verde, e nenhum instrumento abriu uma imagem.
- **O funil completo:** `análise` (raciocina) ← `sonda` (mede) → `WO` (muda). **Sonda não é WO** — não muda o repo, produz evidência; por isso não cabe no molde existente.

**Lastro:** o Mapsmith tem uma skill `/sondar` própria e cinco relatórios de sonda no repositório; o sand-land tem duas execuções reais e as duas primeiras lacunas do método já corrigidas. **É o item com mais evidência acumulada e menos absorção.**

### B2 — Correspondência entre projetos como tipo nomeado *(sand-land FK-H)* — **implementada (wo0089/D-123)**

Quando dois projetos com kits separados negociam um contrato de dados, o que trocam não é spec, não é WO, não é análise e não é nota. A convenção que funcionou: `AAMMDD-<quem>-para-<quem>-NN-<assunto>.md`, com **contador `NN` único e compartilhado pelos dois lados** — não um por remetente, senão as séries divergem e ninguém sabe o que responde o quê. E são **transitórios**: entram como upload solto e nunca em `meta/`.

**Estado no kit: parcialmente coberto, e a parte que falta é a que custou caro.** A higiene já diz que mensagem entre projetos é nota e não deve virar pasta versionada (C34). **Não diz o nome, nem o contador compartilhado, nem a regra de descarte.** O custo relatado — correspondência versionada acumulando e virando segunda fonte de verdade, com a wo0021 achando três lacunas ao auditá-la — vem justamente da falta da regra de descarte, não da falta do nome.

### B3 — Um lugar para «contrato com outro projeto» e «política do projeto» *(Mapsmith, template-update v1.94.0, lacuna 1)* — **fora do escopo do kit**

O Mapsmith resolveu com `meta/refs/`, que o kit não prevê — verificado: `meta/refs` não aparece no fonte. **Decidido pelo autor (wo0089):** ao contrário do que esta análise supunha, B3 não se resolve junto com o B2 — é questão de organização de cada projeto (`meta/refs/` é pasta de «arquivos sem lugar», irmã de `meta/docs/` no sand-land), não falta do kit. Vira sugestão aos dois projetos, fora de WO.

### B4 — Quem abre, fecha *(sand-land FK-L, metade (a))* — **implementada (wo0088/D-122)**

*Processo, porta e arquivo temporário são de quem os criou, e a tarefa termina com a máquina como a encontrou.* Custo relatado: servidores de dev acumulando entre sessões, a ponto de **um deles travar a pasta e impedir o teste que definia uma WO**.

**E temos uma segunda ocorrência, de hoje, nesta casa:** o relatório da wo0086 registra que o teste manual baixou um `claude-code-kit.zip` para a pasta de Downloads do autor, tentou limpar e a ferramenta negou. Nada grave — mas é a generalização da FK-L acontecendo de novo: *toda tarefa deveria declarar o que **cria fora do repositório**, porque é isso que ninguém lembra de limpar*. Duas ocorrências, dois projetos.

### B5 — Princípio sem gatilho, em forma geral *(Mapsmith item 7)* — **implementada (wo0088/D-122)**

A D-120 aplicou o padrão **uma vez**, ao caso do «Próximo (b)». A sugestão original é maior: *os princípios que dependem de o assistente lembrar de aplicar deveriam vir em pares — a virtude no corpo e o gatilho na tabela de gatilhos, com o evento nomeado.*

**Estado: virtude sim, gatilho não.** O princípio `analyze` já diz o que o autor pediu em 2026-08-05 («se discordar ou encontrar métodos melhores, deveria explicar, ensinar e sugerir») — verificado no fonte, quase literal: *«Nunca se limita às minhas palavras… apresenta a posição — a favor, aprimorando ou contra»*. **O que falta é a hora.** Nenhum gatilho de evento existe para ele.

**Recomendação: por último, e talvez nunca inteiro.** Auditar os 13 princípios para dar gatilho a cada um é uma leva grande, e o custo de teto seria real (a tabela de gatilhos vive no CEREBRO, mas a curadoria mexeria em texto universal). O caminho barato é **oportunista**: cada vez que um princípio falhar em campo, aquele princípio ganha o gatilho — que é exatamente o que a D-120 fez. Vale registrar a política, não executar a auditoria.

---

## §C — Os dois pedidos que esta rodada respondeu por evento

O Mapsmith deixou três perguntas com gatilho («o que o KCM pediu de volta»). **Duas venceram, e ninguém tinha reparado.**

**Pedido 2 — «a regra do `/wrap` pegou a contagem repetida na terceira vez?» — SIM, medido hoje.** Havia duas ocorrências do esquecimento (cabeçalho ia a 53/53 e 62/62, e a linha «pytest NN/NN» ficava presa no número anterior). A regra da D-114 mandou procurar o valor antigo no arquivo **inteiro**. O relatório de hoje registra o resultado: ao varrer, o executor achou **uma segunda menção a `KIT_VERSION 1.106.0` na mesma linha 4**, longe do começo, e a corrigiu — e distinguiu corretamente as ocorrências **históricas** (dentro de «Sessão anterior»), que deixou intactas. **A regra funcionou, e funcionou com a discriminação certa.** Isso deve voltar ao Mapsmith: eles pediram o número, e o número é «pegou, na terceira».

**Pedido 3 — «quantas idas e vindas a medição delegada poupou?»** Parcialmente respondível. O custo de **não** tê-la já estava quantificado (três instruções erradas em dois dias). Do lado positivo, o que temos são as duas últimas WOs: as duas mediram o teto em sandbox **antes** de escrever, e na wo0085 a medição **mudou o desenho** — a variante somada estourava o orçamento em 8 caracteres e teria ido para o Code como vermelha. **Uma medição, um reprojeto evitado.**

**Pedido 1 — «testar o pacote v1.101.0 com `meta/analises/` inexistente»** — sem evento ainda. Continua aberto, com o gatilho original.

---

## §D — Os 24 fechados, para a conferência ser conferível

Não repito o conteúdo; listo para que a contagem possa ser contestada. Mapsmith: IDEAS por status+ID (D-114) · docs em inglês / apêndice `DECISOES.md` (corrigido antes) · `instrucoes-dev` com `CLAUDE.md`/`HISTORICO.md` (corrigido antes) · arranque Python — não procedia, o comando é `PLACEHOLDER` (desfecho 2026-08-03) · `/wrap` esquece contagem (D-114) · saída do CRLF no modelo de WO (v1.94.0, lacuna 2) · `_TEMPLATE.md` de `analises/` no pacote (D-114) · funil sem degrau de saída (D-112) · medição delegada (D-113) · fecho não ramifica por modo (D-119) · fecho incompleto, quatro causas (D-119) · lista de conferências, três campos (D-120). Sand-land: FK-A (v1.93.0) · FK-B (v1.93.0) · FK-C (v1.93.0) · FK-D (recusado com argumento, registrado) · FK-E (gaveta «Adiadas», C29) · FK-G (não reproduz: o kit usa `NNNN` como marcador, não contador escrito à mão — verificado) · FK-J (D-116 + D-120) · FK-K (D-120) · «Técnicas específicas» como seção oficial (v1.93.0) · `HISTORY` com pesquisa e autópsia (C29) · IDEAS com gavetas estendidas (parcial, C29) · mensagem entre projetos não vira pasta (C34).

---

## Recomendação de sequência

1. **§A — a regressão do `/wrap`.** Única coisa quebrada agora, e o remédio inclui o check que impede a recaída. **Uma WO, com o autor apenas conferindo.**
2. **B1 — a sonda.** Maior evidência acumulada, dois projetos, e um efeito colateral valioso: dá ao sand-land o método que o Mapsmith refinou mais. **Pede estudo antes** — ver a pergunta ao autor, abaixo.
3. **B2 + B3 juntos** — correspondência e `refs/` são o mesmo problema visto de dois lados.
4. **B4** — barato, duas ocorrências, cabe de carona em qualquer leva.
5. **B5** — vira política registrada, não auditoria.

---

## Riscos

- **A §A tem um risco de escopo próprio:** ao migrar as skills do KCM, é tentador «melhorar» de passagem. Não é isso — a operação é **igualar ao gerado**, e qualquer melhoria que apareça no caminho vira ideia, não edição.
- **A sonda pode virar cerimônia.** O sand-land avisa: *três propriedades a fixar no molde, senão vira lixo*. Um molde de sonda que exija tabela, declaração de não-olhado e artefato bruto para medir três arquivos vai ser ignorado — o molde precisa dizer quando **não** usar.
- **B2/B3 aumentam o vocabulário obrigatório**, que é exatamente o motivo pelo qual a FK-D foi recusada. A saída é a mesma da `analises/`: **natureza `modelo-em-espera`**, pasta que nasce no primeiro uso, nada imposto a quem não negocia com projeto irmão.
- **O `/apply-wo` do KCM ter funcionado por acidente é o risco mais silencioso deste documento.** Ele passou duas WOs seguidas porque eu escrevi os blocos de commit no corpo delas. Se a §A demorar, a próxima WO que eu escrever sem esses blocos vai reproduzir o defeito do `/wrap` — e dessa vez na aplicação, não no fecho.

---

## Ponto de decisão

**Três perguntas, na ordem em que travam o trabalho.**

1. **A §A vira WO já no próximo turno?** É a única regressão viva, e o custo de esperar é o risco do `/apply-wo`.
2. **Para o B1, você sobe os scripts de sonda e os relatórios dos dois projetos?** O que eu tenho hoje é a *descrição* do método nos dois `IDEAS` e cinco nomes de arquivo de análise; não tenho o `SKILL__sondar` do Mapsmith em uso real, nem um relatório de sonda inteiro, nem os scripts. **Sem isso, o molde sai da descrição — que é precisamente o erro que a D-120 acabou de proibir.**
3. **Os pacotes de update para os dois projetos saem depois das levas, ou em paralelo?** O sand-land tem uma frente de código aberta (migrar para a 0.11.0 do mapsmith); um pacote de kit no meio disso compete por atenção.

---

## Desfecho parcial

**§A — decidida e implementada em 2026-08-12** («vai a §A, aceito todas as suas recomendações»).
Virou a **wo0087** → **D-121**, `KIT_VERSION 1.107.1`, check **C43** novo com **sete provas
negativas**, custo de teto zero. As três recomendações entraram inteiras: migração das duas skills e
do `settings.json`, check que compara instalado × gerado, e a lição registrada em forma geral.

**Um achado que só apareceu ao construir o check:** ele precisava conferir as cláusulas **nos dois
lados**. Um check que olhasse apenas o instalado ficaria **verde justamente no dia em que o kit
parasse de publicar a regra** — o pior momento possível para ficar quieto. A prova negativa nº 7
existe só para isso, e é a única das sete que quebra o lado gerado.

**Ponto 2 do ponto de decisão — respondido em 2026-08-12:** o autor subiu os scripts (`probe-data.mjs`,
`probe_pacote.py`, `scan-games.mjs`), quatro relatórios de sonda/exploração, o `SKILL__sondar` e o
transcrito `mapsmith_7.md`. **O B1 deixa de sair da descrição e passa a sair do artefato** — que era
a condição para escrevê-lo.

**§B (B1–B5) e §C seguem sem decisão.**