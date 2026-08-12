# WO 0089 — Correspondência entre projetos como tipo nomeado; e o instantâneo de dado derivável

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. Sete edições; a maior é a Edição 2 (seção nova no CEREBRO, 12 `L.push`), mecânica.
> **Pré-requisito:** `KIT_VERSION 1.108.0`, commit `96fe475`, `main` limpo (o `.claude/launch.json` não rastreado é conhecido), harness **18/18 · 88/88 · 0 erros**.
> **Base:** `meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md` §B — item **B2** —, aceito pelo autor em 2026-08-12. Origem: Sand-Land-Map **FK-H** (2026-08-03) e a generalização de **FK-G**.
> **Depende de:** wo0088 (aplicada, `df575fe`; `/wrap` em `96fe475`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 6 e 7.

---

## 1. Por que

**O kit sabe dizer que correspondência entre projetos não deve ser versionada, e não sabe dizer o que ela é.** A regra de higiene atual (C34) diz: *«Mensagem trocada com outro projeto ou frente irmã é nota, não artefato: vive fora do repositório enquanto serve (…) não crie pasta versionada para ela.»* Isso cobre o **descarte** e deixa de fora **a forma** — e a forma é o que o sand-land descobriu na prática, negociando um contrato de dados com o Mapsmith ao longo de 17 cartas.

**O que a FK-H pede, e que o kit não tem:**

- o **nome** (`AAMMDD-<quem>-para-<quem>-NN-<assunto>.md`, com os dois lados no nome porque a mesma pasta guarda os dois sentidos);
- o **contador `NN` único e compartilhado pelos dois lados** — não um por remetente. Com duas séries, «respondendo à sua 7» vira ambíguo e ninguém sabe o que responde o quê;
- a **regra de descarte**, que o kit tem pela metade.

**O custo já pago, e é o argumento mais forte:** correspondência versionada acumulando no repositório e virando **segunda fonte de verdade** — a wo0021 do sand-land achou **três lacunas** ao auditá-la, uma delas **um dado de estado desatualizado que a leitura seguinte tratava como fato**. Não é desarrumação: é um documento que nasceu certo e envelheceu em silêncio parecendo autoridade.

**Entra junto a generalização da FK-G, que a FK-H já apontava sem nome.** *Dado derivável de um artefato vivo não deve ser copiado para um documento que não muda quando o artefato muda.* Ela **não reproduz literalmente no kit** — verificado: o kit usa `NNNN` como marcador, nunca um contador escrito à mão —, mas reproduz **na prática desta negociação**: o brief de handoff de 11/08 abria com «a próxima livre é D-118 · C40 · wo0084», e as três já estavam gastas quando foram lidas. **A regra é o antídoto do próprio contador `NN`** que a Edição 2 institui, e escrevê-las separadas seria instalar o problema junto com a solução.

## 2. Contexto factual

Medido em sandbox no estado `96fe475` (repo reconstruído do mount, build reproduzindo `index.html` byte a byte — **798.111** —, harness verde 18/18 · 88/88 antes de qualquer edição).

- **A regra de higiene sobre mensagem entre projetos existe e é única** — verificada por grep do fato (`entre projetos`, `outro projeto`, `projeto irmão`): **uma** ocorrência, dentro da regra «Referência cruzada, não duplicação». Ela cobre descarte, não forma.
- **Custo de teto: ZERO nas sete edições.** C28 imprime os mesmos números antes e depois: `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Deliberado — o modo Code tem 36 de folga, e nada disto precisa ser lido em todo turno.
- **`index.html` vai de 798.111 para 801.792 bytes.**
- **Um achado do próprio processo de teste, que mudou o check:** a primeira versão do C45 procurava as cláusulas no CEREBRO **inteiro**, e a prova negativa nº 2 passou verde com a cláusula removida — porque `maior existente + 1` **também** vive na regra de higiene da Edição 4. O check foi corrigido para **recortar a seção** antes de afirmar. Sem as provas negativas, o C45 teria entrado capaz de ficar verde com a seção vazia.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato.** Pergunta feita ao repositório: «que lugares do kit falam sobre mensagem, carta, ou troca entre projetos, e que lugares guardam número derivável?». Grep pelo **fato** (`entre projetos`, `outro projeto`, `frente irmã`, `NNNN`, `maior existente`), não pela palavra «carta» — que, sendo a que falta, não acharia nada.

**Não truncado.** As 15 regras de higiene e a tabela de gatilhos inteira foram lidas.

**Contagem declarada: 4 regiões no `src/index.template.html`** (versão · seção nova no CEREBRO · duas regras de higiene · gatilhos — sendo as duas de higiene edições separadas, daí **5 edições** para **4 regiões**) e **1 ponto no `validate.js`** (C45 novo, sem alteração em check existente). **Conteste antes de agir.**

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.108.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.109.0";
```

---

## Edição 2 — `src/index.template.html` · `buildClaudeMd`, seção «Correspondência entre projetos»

**Âncora** (fim da seção da sonda, imediatamente antes do «Bloco de fecho»):

```
  L.push("");
  L.push("## Bloco de 
```

> A âncora termina **no meio da palavra**, como na wo0088 — `"## Bloco de ` com o espaço final é o menor trecho único. Confirmado: **uma** ocorrência no arquivo.

**Substituir por:**

```
  L.push("");
  L.push("## Correspondência entre projetos — quando o interlocutor é outro assistente");
  L.push("");
  L.push("Dois projetos com kits separados que dependem um do outro (um produz o dado, o outro consome; um gera o pacote, o outro renderiza) precisam **negociar um contrato**. O que trocam não é spec, não é análise, não é ordem de trabalho e não é bilhete: é **carta**, e ela tem regras próprias porque tem dois donos.");
  L.push("");
  L.push("- **Nome:** `AAMMDD-<quem>-para-<quem>-NN-<assunto>.md`. O remetente e o destinatário no nome porque a mesma pasta guarda os dois sentidos.");
  L.push("- **O contador `NN` é ÚNICO e COMPARTILHADO pelos dois lados** — não um por remetente. Com duas séries, «respondendo à sua 7» vira ambíguo e ninguém sabe o que responde o quê. A carta nova é a **maior existente + 1**, contando as dos DOIS lados; confira a pasta antes de numerar, não confie na memória nem em número anotado em documento.");
  L.push("- **Uma carta, um assunto.** Carta que negocia três contratos ao mesmo tempo recebe uma resposta que aceita um e ignora dois, e o que foi ignorado não deixa rastro.");
  L.push("- **Diga de que lado está cada afirmação.** «O nosso lado já grava X» é fato do remetente; «vocês deveriam gravar Y» é pedido. Sem a marca, o destinatário lê pedido como fato e implementa contra uma premissa que nunca foi verdadeira.");
  L.push("");
  L.push("**Correspondência é TRANSITÓRIA, e é aqui que ela custa caro.** A carta vive fora do repositório enquanto serve — chega como upload, é lida, e o que precisa sobreviver é **extraído** dela para os documentos duráveis: o acordo vira decisão registrada, o que não coube vira ideia com gatilho, o histórico vira uma linha no registro do projeto. **Versionar a correspondência cria uma segunda fonte de verdade que envelhece sozinha**: uma auditoria real achou três lacunas numa pasta de cartas versionadas, uma delas um dado de estado desatualizado que a leitura seguinte tratava como fato. O destino da carta depois de extraída é o arquivo morto, fora do projeto.");
  L.push("- **O que fica pendente do outro lado é seu, não dele.** Carta enviada e não respondida não é memória: vira item com gatilho no registro de ideias («se não vier resposta até X, decido sozinho por Y»). Esperar resposta sem gatilho é como o projeto trava sem ninguém perceber.");
  L.push("");
  L.push("## Bloco de 
```

---

## Edição 3 — `src/index.template.html` · `HYGIENE_RULES`, a regra existente aponta para a carta

**Âncora** (trecho dentro da primeira regra de higiene):

```
**Mensagem trocada com outro projeto ou frente irmã é nota, não artefato:** vive fora do repositório enquanto serve e vai para o arquivo morto depois — **não crie pasta versionada para ela**.
```

**Substituir por:**

```
**Mensagem trocada com outro projeto ou frente irmã é nota, não artefato:** vive fora do repositório enquanto serve e vai para o arquivo morto depois — **não crie pasta versionada para ela**. Quando a troca é uma negociação continuada, ela vira **carta** e ganha nome e contador próprios (CEREBRO, «Correspondência entre projetos»); continua fora do repositório.
```

---

## Edição 4 — `src/index.template.html` · `HYGIENE_RULES`, o instantâneo de dado derivável

**Âncora** (início da regra acrescentada pela wo0088):

```
  "**Quem abre, fecha — e o que não fechar, declara.**
```

**Substituir por:**

```
  "**Não congele em documento estável o que um artefato vivo já responde.** Contador escrito à mão («a próxima livre é a 118»), contagem de arquivos, versão instalada, estado de branch: tudo isso é derivável de algo que muda sozinho, e o documento que o copia não muda junto. O instantâneo nasce certo e envelhece em silêncio — e o pior é que ele parece autoridade, então a leitura seguinte confia nele em vez de conferir. **Escreva a REGRA, não o valor:** «a maior existente + 1, confira a pasta» em vez do número. Quando o valor precisa mesmo aparecer (um relatório, uma decisão), ele vem **datado e com a origem**, como registro do que era naquele momento — não como estado atual.",
  "**Quem abre, fecha — e o que não fechar, declara.**
```

---

## Edição 5 — `src/index.template.html` · `TRIGGERS_BASE`, o gatilho da carta

**Âncora** (a entrada acrescentada pela wo0088):

```
  ["A tarefa criou algo FORA do repositorio (processo, porta, servidor de dev, arquivo temporario, download)",
```

**Substituir por:**

```
  ["Chega ou sai carta de outro projeto (negociacao de contrato entre frentes)", "Extrai o durável AGORA — acordo vira decisao registrada, o que nao coube vira ideia com gatilho — e NAO versiona a carta. Se ela pede resposta do outro lado, cria o item de espera com prazo: espera sem gatilho trava o projeto sem ninguem perceber."],
  ["A tarefa criou algo FORA do repositorio (processo, porta, servidor de dev, arquivo temporario, download)",
```

> Sem acento na chave, **com** acento em `durável` — é o texto exato testado; o C45 procura `Chega ou sai carta de outro projeto` literalmente.

---

## Edição 6 — `validate.js` · check C45

**Âncora** (início do C44 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C44 sonda e exploracao como par (wo0088): tres propriedades, sem veredito, existencia nao e aptidao; quem abre fecha; gatilho oportunista", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C45 correspondencia entre projetos como tipo nomeado (wo0089): contador compartilhado, transitoriedade, espera com gatilho; e instantaneo de dado derivavel", () => {
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    // (1) o tipo existe e esta separado dos que ja existiam
    assert(/## Correspondência entre projetos/.test(cmd), id+": CEREBRO sem a secao de correspondencia");
    // A partir daqui os asserts do tipo «carta» olham SO a secao dela. Sem recortar, uma frase
    // que exista em qualquer outro ponto do CEREBRO satisfaz o assert e o check fica verde com a
    // secao vazia — foi o que a prova negativa 2 mostrou («maior existente + 1» vive tambem na
    // regra de higiene do instantaneo derivavel).
    const iSec = cmd.indexOf("## Correspondência entre projetos");
    const fSec = cmd.indexOf("\n## ", iSec + 10);
    const sec = cmd.slice(iSec, fSec > -1 ? fSec : cmd.length);
    assert(/não é spec, não é análise, não é ordem de trabalho e não é bilhete/.test(sec), id+": a carta nao e distinguida dos tipos que ja existem — sem isso ela vira 'mais uma nota' e perde as regras proprias");
    assert(/AAMMDD-<quem>-para-<quem>-NN-<assunto>\.md/.test(sec), id+": falta a forma do nome da carta");
    // (2) o contador compartilhado — a clausula que evita as duas series divergindo
    assert(/ÚNICO e COMPARTILHADO pelos dois lados/.test(sec), id+": o contador da carta nao e declarado compartilhado; com um por remetente, 'respondendo a sua 7' vira ambiguo");
    assert(/maior existente \+ 1/.test(sec), id+": o contador nao vem como REGRA (maior existente + 1) — numero anotado envelhece sozinho");
    // (3) transitoriedade, com o custo nomeado
    assert(/TRANSITÓRIA/.test(sec), id+": a carta nao e declarada transitoria");
    assert(/segunda fonte de verdade que envelhece sozinha/.test(sec), id+": falta o custo de versionar correspondencia, que e o que sustenta a regra");
    assert(/extraído/.test(sec) && /arquivo morto/.test(sec), id+": falta o destino da carta depois de extraida");
    // (4) espera sem gatilho e a marca de lado
    assert(/Esperar resposta sem gatilho/.test(sec), id+": carta enviada e nao respondida ainda pode virar memoria em vez de item com prazo");
    assert(/lê pedido como fato/.test(sec), id+": falta a marca de qual lado afirma o que — sem ela o destinatario implementa contra premissa falsa");
    // (5) gatilho de evento
    assert(/Chega ou sai carta de outro projeto/.test(cmd), id+": tabela de gatilhos sem o evento da carta");
    // (6) instantaneo de dado derivavel (FK-G generalizado)
    assert(/Não congele em documento estável o que um artefato vivo já responde/.test(cmd), id+": higiene sem a regra do instantaneo derivavel");
    assert(/Escreva a REGRA, não o valor/.test(cmd), id+": a regra do instantaneo nao diz o que fazer no lugar");
    assert(/datado e com a origem/.test(cmd), id+": falta a excecao — valor pode aparecer, desde que datado e com origem");
  });
  return "ok";
});
```

> **O recorte da seção não é enfeite.** A primeira versão deste check afirmava contra o CEREBRO inteiro e **passou verde com a cláusula do contador removida**, porque `maior existente + 1` também vive na regra de higiene da Edição 4. Se você «simplificar» `sec` de volta para `cmd`, o check volta a poder ficar verde com a seção vazia.

---

## Edição 7 — `meta/DECISIONS.md` · registra a D-123

**Âncora** (última linha do arquivo, fim da D-122):

```
`KIT_VERSION 1.108.0`. **Custo de teto ZERO nas nove edições** — nada foi para as Instruções, de propósito: o orçamento do modo Code tem 36 de folga. C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.107.1; folga do `narrative` em **289**. `analiseFunil()` foi verificada como exclusiva do CEREBRO (duas chamadas, nenhuma em `buildInstr`). Modelo de WO de **8.406 → 8.658** caracteres. Harness **18/18, 87/87 → 88/88, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-123 — Correspondência entre projetos vira tipo nomeado (carta), com contador compartilhado e regra de descarte; e o instantâneo de dado derivável vira regra de higiene (wo0089)

**Base.** `meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md` §B2, aceita pelo autor em 2026-08-12. Origem: Sand-Land-Map **FK-H** (2026-08-03), com a generalização de **FK-G** entrando junto.

**O que faltava.** O kit já dizia que mensagem entre projetos **não se versiona** — a regra de higiene existia e é única no fonte (verificado por grep do fato). O que ele não dizia era **o que ela é**: quando dois projetos com kits separados negociam um contrato de dados, o que trocam não é spec, não é análise, não é ordem de trabalho e não é bilhete. É **carta**, e tem regras próprias porque tem **dois donos** — foi o que o sand-land aprendeu ao longo de 17 delas com o Mapsmith.

**As quatro cláusulas de forma.** Nome com remetente e destinatário (`AAMMDD-<quem>-para-<quem>-NN-<assunto>.md`), porque a mesma pasta guarda os dois sentidos. **Contador `NN` único e compartilhado pelos dois lados** — não um por remetente: com duas séries, «respondendo à sua 7» vira ambíguo. Uma carta, um assunto — carta que negocia três contratos recebe uma resposta que aceita um e ignora dois, e o ignorado não deixa rastro. E **a marca de qual lado afirma o quê**: «o nosso lado já grava X» é fato do remetente, «vocês deveriam gravar Y» é pedido; sem a marca o destinatário lê pedido como fato e implementa contra premissa falsa.

**A transitoriedade, com o custo que a sustenta.** A carta vive fora do repositório enquanto serve; o que sobrevive é o que foi **extraído** dela — acordo vira decisão registrada, o que não coube vira ideia com gatilho. **Versionar correspondência cria uma segunda fonte de verdade que envelhece sozinha:** a wo0021 do sand-land achou três lacunas ao auditar uma pasta de cartas versionadas, uma delas um dado de estado desatualizado que a leitura seguinte tratava como fato. Entra também a metade que a FK-H não pedia mas o caso mostra: **carta enviada e não respondida é responsabilidade de quem enviou** — vira item com gatilho («se não vier resposta até X, decido por Y»), porque espera sem prazo trava o projeto sem ninguém perceber.

**O instantâneo de dado derivável entra na mesma WO de propósito.** *Contador escrito à mão, contagem de arquivos, versão instalada, estado de branch: tudo derivável de algo que muda sozinho, copiado para um documento que não muda junto.* O instantâneo nasce certo, envelhece em silêncio e — o pior — **parece autoridade**, então a leitura seguinte confia nele em vez de conferir. A saída é escrever a **regra** no lugar do valor («a maior existente + 1, confira a pasta»); quando o valor precisa mesmo aparecer, vem **datado e com a origem**, como registro do que era, não como estado atual. **Estava junto porque é o antídoto do contador `NN` que esta mesma WO institui** — separá-las instalaria o problema junto com a solução. O caso que a justifica é desta casa: o brief de handoff de 11/08 abria com «a próxima livre é D-118 · C40 · wo0084», e as três já estavam gastas quando foram lidas.

**Check C45 novo, e o modo como ele foi construído importa.** A primeira versão afirmava as cláusulas contra o CEREBRO inteiro — e a prova negativa nº 2 **passou verde com a cláusula do contador removida**, porque `maior existente + 1` também vive na regra de higiene do instantâneo. O check foi corrigido para **recortar a seção** antes de afirmar. Sem as provas negativas, ele teria entrado capaz de ficar verde com a seção vazia; **é o caso mais claro até aqui de prova negativa consertando o instrumento, não o código**. Uma décima prova foi acrescentada por causa disso: esvaziar a seção inteira, deixando só o título.

**Dez provas negativas rodadas:** contador por remetente · contador como valor em vez de regra · carta declarada durável · transitoriedade sem o custo · espera sem gatilho · sem a marca de lado · sem o gatilho de evento · sem a regra do instantâneo · instantâneo sem a saída («escreva a regra») · seção de carta vazia.

`KIT_VERSION 1.109.0`. **Custo de teto ZERO nas sete edições** — nada foi para as Instruções: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.108.0; folga do `narrative` em **289**. `index.html` de **798.111 → 801.792** bytes. Harness **18/18, 88/88 → 89/89, 0 erros**.
```

---

## Edição 8 — `meta/IDEAS.md` · registra a leva e o que resta

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-12 — FK-H (correspondência entre projetos) e a generalização de FK-G — ACEITOS E IMPLEMENTADOS (D-123, wo0089)
O kit já sabia dizer que correspondência **não se versiona**; passou a saber dizer **o que ela é**. Entram as quatro cláusulas de forma (nome com os dois lados · contador `NN` único e compartilhado · uma carta um assunto · a marca de qual lado afirma o quê), a transitoriedade com o custo que a sustenta (três lacunas numa pasta de cartas versionadas, uma delas um estado desatualizado lido como fato), e a metade que a FK-H não pedia: **carta enviada e não respondida é de quem enviou** — vira item com gatilho, porque espera sem prazo trava o projeto sem ninguém perceber.

**A generalização da FK-G entrou na mesma WO de propósito:** «não congele em documento estável o que um artefato vivo já responde» é o antídoto do contador `NN` que esta WO institui — separá-las instalaria o problema junto com a solução.

**Nota de método, e é a mais útil desta leva:** a primeira versão do C45 afirmava as cláusulas contra o CEREBRO inteiro e **ficou verde com a cláusula do contador removida**, porque a frase também vivia na regra de higiene irmã. As provas negativas pegaram, e o check passou a recortar a seção antes de afirmar. **Primeiro caso registrado de prova negativa consertando o instrumento em vez do código** — vale como argumento sempre que alguém achar que dez provas por check é exagero.

**Fecha o inventário de feedback dos dois projetos.** Restam **B3** (`meta/refs/` — o autor esclareceu que é pasta de «arquivos sem lugar», irmã de `meta/docs/` no sand-land; **é questão de organização dos próprios projetos, não do kit**, e vira sugestão a eles) e o **pedido 1** do Mapsmith (testar o pacote com `meta/analises/` inexistente), que segue sem evento. Próxima frente: os **pacotes de update** para Mapsmith e Sand-Land-Map.
```

---

## Fora de escopo

- **B3 (`meta/refs/` e `meta/docs/`)** — não é falta do kit: é decisão de organização de cada projeto. Vira sugestão aos dois, fora de WO.
- **Um molde de carta** (`_TEMPLATE` de correspondência no pacote do Code) — mesma razão do molde de sonda na wo0088: primeiro o verbete; molde só se um projeto pedir. Carta é texto livre com quatro regras, não formulário.
- **Pasta versionada para cartas** — proibida pela própria decisão; não se cria `meta/cartas/`.
- **Os pacotes de update dos dois projetos** — frente seguinte, depois desta.

## Armadilhas desta WO

- **A âncora da Edição 2 termina no meio da palavra** (`"## Bloco de ` com espaço final), igual à wo0088. Não a «complete». Confirmado: uma ocorrência.
- **Fim de linha:** template é **CRLF**, `validate.js` é **LF**. As Edições 2, 4 e 5 têm âncora multi-linha no template — se não casar, ancore só na **primeira linha** e insira o resto depois. Confira ao fim: template com **0 LF soltos**.
- **A Edição 5 mistura acentuação de propósito:** a chave do gatilho é sem acento (convenção do array) e o valor traz `durável` com acento. É o texto exato testado — não uniformize.
- **Não troque `sec` por `cmd` no C45.** Ver a nota da Edição 6: é a diferença entre um check que morde e um que pode ficar verde com a seção vazia.
- **A Edição 4 insere ANTES da regra da wo0088**, mantendo-a intacta logo abaixo. Se o `git diff` mostrar «Quem abre, fecha» sumindo, algo saiu errado — PARE.
- **Números de check:** C45 é o próximo livre (C44 é da wo0088). Conferido no `validate.js`.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. *(O `meta/STATUS.md` fica para o `/wrap`.)*
- [ ] **Inventário declarado: 4 regiões no template + 1 ponto no `validate.js`.** Refaça a contagem; divergiu, **PARE e reporte antes de editar**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 89/89 checagens, 0 erros**, com **C45 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Diferente disso, alguma edição vazou para `buildInstr` — **PARE e reporte**.
- [ ] `index.html` com **801.792 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de arquivo gerado e execução do harness — reversível, mesma máquina.
  - **Chega no ramo?** `buildClaudeMd()` (Edições 2 e, via `HYGIENE_RULES`, 3 e 4) e `TRIGGERS_BASE` (5). O C45 exercita as três.
  - **Prova de vida:** **force o sinal onde ele quase não existiu.** No `src/index.template.html`, troque `**maior existente + 1**` (o da seção da CARTA, não o da regra de higiene) por `a 18`, rode `node build.js && node validate.js index.html` e confirme que o **C45 falha** com a mensagem sobre o contador vir como regra. Desfaça, rebuild, verde. *Este teste específico foi o que expôs o defeito do próprio check — se ele passar verde, o `sec` virou `cmd` em algum lugar.*
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Se nada, diga isso — «nada criado fora do repositório» é resultado, não silêncio.

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · validação (C28, C45, C27) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever.**

> **Para o `/wrap`:** o `meta/STATUS.md` cita `v1.108.0` e `88/88`. Atualize as ocorrências **vivas** para `v1.109.0` e `89/89`, cite o **C45** antes do C44, acrescente **D-123** aos concluídos. Os números de orçamento **não mudam**. Não toque nos históricos dentro de «Sessão anterior». Sessão nova no topo. E atualize o `Status` da análise `260812-ANALISE-o-que-sobrou-do-feedback.md`: §B fecha por inteiro (B1/B4/B5 na wo0088, B2 nesta), restando só o B3, que sai do escopo do kit.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md meta/workorders/260812-wo0089-correspondencia-entre-projetos.md
```

```
git commit -m "feat(kit): correspondencia entre projetos vira tipo nomeado" -m "O kit ja sabia dizer que mensagem entre projetos nao se versiona; nao sabia dizer o que ela e. Quando dois projetos com kits separados negociam um contrato, o que trocam nao e spec, nem analise, nem ordem de trabalho, nem bilhete: e carta, e tem regras proprias porque tem dois donos." -m "Quatro clausulas de forma: nome com remetente e destinatario, contador NN unico e compartilhado pelos dois lados (com um por remetente, respondendo a sua 7 vira ambiguo), uma carta um assunto, e a marca de qual lado afirma o que. Mais a transitoriedade com o custo que a sustenta: versionar correspondencia cria uma segunda fonte de verdade que envelhece sozinha." -m "Entra junto a regra do instantaneo derivavel, que e o antidoto do proprio contador que esta WO institui: nao congele em documento estavel o que um artefato vivo ja responde; escreva a regra, nao o valor." -m "Check C45 novo com dez provas negativas. A primeira versao dele afirmava contra o CEREBRO inteiro e ficava verde com a clausula do contador removida, porque a frase vivia tambem na regra de higiene irma; passou a recortar a secao antes de afirmar. Custo de teto zero. wo0089, D-123."
```

```
git push
```
