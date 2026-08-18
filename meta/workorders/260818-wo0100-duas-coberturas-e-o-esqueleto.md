# WO 0100 — Duas coberturas, o esqueleto do relatório de sonda, e o gatilho que faltava ao verde

> **Tipo:** WO de CÓDIGO + registro (mista). Quatro edições no template, uma no `validate.js`.
> **Config sugerida:** Sonhet, esforço **médio**. A Edição 3 é longa (bloco de código dentro de `L.push`), mas mecânica.
> **Pré-requisito:** `KIT_VERSION 1.118.0`, commit `bac17eb`, `main` limpo, harness **18/18 · 95/95 · 0 erros**. Confirmado no mount (`_MANIFEST` de 18/08 17:20).
> **Base:** `260818-sand-land-para-kcm-02-fecho-do-merge.md` — a carta 02 deles, respondendo ao fecho do merge. Mais o estudo dos três scripts que o autor subiu (`probe-data.mjs`, `scan-games.mjs`, `probe_pacote.py`).
> **Depende de:** wo0099.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 6 e 7.

---

## 1. Por que

A carta 02 do Sand-Land-Map responde a pergunta de método, entrega a varredura completa, e devolve **três coisas** — uma delas contra uma decisão que acabamos de tomar.

**(a) FK-Q — o manifesto precisa declarar DUAS coberturas, não uma.** Eles responderam com precisão: *«contava arquivos comparados contra o pacote — e o pacote tem 20 arquivos, então o número era verdadeiro. A conclusão é que estava errada: “20/20 ENCERRADO” tratou uma cobertura como se fosse a outra.»*

E deram o diagnóstico do porquê a seção «Aplique PRIMEIRO» da wo0099 não basta: *«a tabela continua sendo a que define o escopo mental de quem aplica, e ela lista os arquivos do pacote. Foi assim que os seis passaram: o comando de varredura estava certo e foi lido dentro da moldura errada.»* **Um número sozinho preenche o lugar dos dois.** A proposta deles inclui a válvula que a torna aplicável: a segunda cobertura **pode ficar declarada como pendente** sem invalidar o merge; o que não pode é ser confundida com a primeira.

**Com a frase que fecha o assunto:** *«encerramento é a afirmação que ninguém reconfere»* — é onde a unidade mais falta e menos aparece.

**(b) O arquivo de exclusão nunca é varrido, e é auto-referente.** A varredura completa deles (**54 ocorrências: 9 corrigidas, 45 justificadas**, com as 45 classificadas em quatro categorias) achou um **sétimo arquivo** que a nossa tabela não listava: o `.flatdropignore` deles. E a observação é melhor que o achado:

> *«A higiene que acabamos de mergear diz “o que o `.gitignore` ou o `.flatdropignore` esconde, o assistente não audita”. Ninguém pensa em varrer o próprio arquivo de exclusão — ele não é escondido por si mesmo, mas também nunca é lido como conteúdo. **A regra nova pega o que os arquivos escondem e não pega o arquivo que esconde.**»*

*(O `.flatdropignore` gerado pelo kit está limpo — verificado. O que falta é a regra.)*

**(c) O campo da FK-M não tem hora — eles pegaram a metade que a D-131 deixou.** Sobre a seção da sonda:

> *«ela pede que se declare qual pergunta o instrumento não responde — o que resolve. Mas o defeito não foi de declaração: foi que **ninguém perguntou** qual das duas o verde respondia. Talvez a regra precise de gatilho, não só de campo.»*

**Está certo, e é literalmente o item (7) do Mapsmith aplicado a uma regra que nós mesmos acabamos de escrever.** A D-131 pôs o campo no relatório e no passo de verificação — as duas superfícies onde alguém **escreve**. Faltou o evento: **o momento em que o verde aparece**.

**(d) A skill de sonda: a posição deles é «ainda não», e ela está certa.** *«Uma skill que só roda o script é wrapper puro, e reprova na regra do próprio kit («N+1 só compensa com N consumidores»). O que a justifica é impor o contrato do relatório (…) a pergunta honesta é se a seção já não faz isso sozinha. Nós ainda não sabemos.»*

**Então esta WO não escreve skill nem molde-arquivo.** Escreve **o contrato**, que é a parte que eles dizem carregar o valor — e o coloca onde a seção já existe. O material veio dos três scripts que o autor subiu, lidos nesta rodada: o `probe-data.mjs` produz um relatório com cabeçalho de insumos (`sha256`, `mtime`), a data marcada como *«única linha não-determinística deste relatório»*, `## ALARMES (N)` com a negação embutida quando N=0, seções sem insumo saindo **NÃO CONFERIDA** em vez de omitidas, `MAX_LIST` imprimindo o total, e um `## O QUE NÃO FOI OLHADO` com **duas** listas — a do que faltou nesta execução e a do que a sonda **nunca** olha.

**Três detalhes que só aparecem depois de usar, e que a descrição não tinha:** marcar a data como a única linha não-determinística é o que torna dois relatórios **diffáveis**; a lista **fixa** do «nunca olha» vale mais que a dinâmica, porque é a que ninguém lembraria de escrever no dia; e o zero de alarmes precisa negar a leitura fácil **na própria linha** — o `probe-data.mjs` faz isso com *«Isso não quer dizer que o arquivo está certo»* colado ao zero.

## 2. Contexto factual

Medido em sandbox no estado `bac17eb` (repo reconstruído do mount de hoje 17:20, build reproduzindo `index.html` byte a byte — **820.575** — e harness verde 18/18 · 95/95 antes de qualquer edição).

- O `.flatdropignore` **gerado pelo kit** não tem nenhuma ocorrência de «sessão» — o achado deles é sobre a regra, não sobre o nosso arquivo.
- **Custo de teto: ZERO.** Manifesto, CEREBRO e gatilhos vivem fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**.
- `index.html` vai de **820.575 → 823.845** bytes.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato:** a carta 02 lida inteira; os três scripts (`probe-data.mjs` 656 linhas, `scan-games.mjs` 231, `probe_pacote.py` 397) abertos nas partes que **emitem** o relatório — cabeçalho, alarmes, rodapé, truncamento, gravação em arquivo e código de saída; e o `buildUpdateManifest()`/`buildClaudeMd()` gerados.

**Não truncado.** A carta inteira; dos scripts, as seções de emissão na íntegra.

**Contagem declarada: 3 itens da carta** (FK-Q, arquivo de exclusão, gatilho do verde) **+ 1 contrato** destilado dos scripts, em **3 superfícies** — manifesto, seção da sonda no CEREBRO, tabela de gatilhos. **1 check novo.** **Conteste antes de agir.**

> **Esta é qual pergunta: «está lá?» ou «presta?»** Responde **«está lá?»** — li a carta e os scripts e confirmei que os quatro itens não estão no kit. **Não responde «presta?»**: se o esqueleto escrito no CEREBRO produz relatórios melhores que a descrição produzia, só a próxima sonda escrita sob ele dirá — e é exatamente o ceticismo que eles pediram que ficasse dentro.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.118.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.119.0";
```

---

## Edição 2 — `src/index.template.html` · FK-Q: duas coberturas, e o arquivo de exclusão

**Âncora** (uma linha, na seção «Linhas revogadas» do manifesto):

```
    L.push("**O alvo depois e ZERO, menos as ocorrencias que voce classificar como legitimas** (relato, dominio,");
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
    L.push("**Declare DUAS coberturas, separadas — um numero sozinho preenche o lugar dos dois.** «Arquivos do");
    L.push("pacote comparados: N/N» e «ocorrencias varridas no repo: N, corrigidas: N, justificadas: N» medem");
    L.push("coisas diferentes, e o merge que declara so a primeira soa encerrado sendo metade. **A segunda pode");
    L.push("ficar declarada como PENDENTE sem invalidar o merge** — o que nao pode e ser confundida com a");
    L.push("primeira. Caso real: um projeto fechou «20/20 comparados, ENCERRADO» com sete pontos de cadencia");
    L.push("vivos em seis arquivos que a lista de 20 nao enumerava. **Encerramento e a afirmacao que ninguem");
    L.push("reconfere** — e por isso a unidade precisa vir colada no numero.");
    L.push("");
    L.push("**E varra o proprio arquivo de exclusao.** O `.gitignore` e o `.flatdropignore` nunca sao lidos como");
    L.push("conteudo — eles nao se escondem de si mesmos, mas ninguem pensa em varre-los. A regra que trata do");
    L.push("que eles escondem nao alcanca o arquivo que esconde.");
    L.push("");
```

---

## Edição 3 — `src/index.template.html` · o esqueleto do relatório de sonda

**Âncora** (uma linha, na seção «Sonda e exploração» do CEREBRO):

```
  L.push("**Onde mora — e este é um padrão, não uma regra.**
```

> A âncora termina **no meio da frase** — é o menor trecho único. A linha continua e você não a altera.

**Substituir por:**

```
  L.push("**O esqueleto do relatório — o que sobreviveu a dezenas de execuções nos dois projetos que o escreveram:**");
  L.push("");
  L.push("```");
  L.push("# SONDA — <assunto>                     <- o nome diz o QUE, não o quando");
  L.push("- Gerado em: <data>  *(única linha não-determinística deste relatório)*");
  L.push("- Insumo: <caminho> · <tamanho> · sha256 <hash> · mtime <data>");
  L.push("- Referência: <caminho> | nenhuma — as seções comparativas saem NÃO CONFERIDAS");
  L.push("> A sonda não dá veredito: ela conta, compara e imprime. Decidir é humano.");
  L.push("");
  L.push("## ALARMES (N)");
  L.push("  N=0 -> «Nenhuma verificação falhou. ISSO NÃO QUER DIZER QUE ESTÁ CERTO —");
  L.push("        quer dizer que é coerente nos pontos medidos. Leia O QUE NÃO FOI OLHADO.»");
  L.push("");
  L.push("## <seções do corpo>                    <- tabelas e contagens; lista longa mostra o TOTAL");
  L.push("  seção sem insumo -> **NÃO CONFERIDA**, nunca omitida");
  L.push("");
  L.push("## O QUE NÃO FOI OLHADO");
  L.push("  - o que faltou NESTA execução (dinâmico)");
  L.push("  - o que esta sonda NUNCA olha (fixo, escrito uma vez e para sempre)");
  L.push("```");
  L.push("");
  L.push("Três detalhes que só aparecem depois de usar: **(1)** marcar a data como a única linha não-determinística é o que torna dois relatórios diffáveis — sem isso, comparar antes/depois vira leitura à mão; **(2)** a lista fixa do «nunca olha» é mais valiosa que a dinâmica, porque é a que ninguém lembraria de escrever no dia; **(3)** o rodapé com contagem de alarmes em zero precisa negar a leitura fácil **na própria linha** — «zero alarmes» sem a negação ao lado vira «está certo» na conversa seguinte.");
  L.push("");
  L.push("**Onde mora — e este é um padrão, não uma regra.**
```

> **Atenção às três crases** que abrem e fecham o bloco de código: elas vão **dentro** da string do `L.push`, não em volta dele.

---

## Edição 4 — `src/index.template.html` · `TRIGGERS_BASE`, o gatilho do verde

**Âncora** (a entrada da wo0098):

```
  ["Uma varredura ou conferencia nao achou NADA no lugar onde deveria achar algo",
```

**Substituir por:**

```
  ["Uma conferencia deu VERDE — antes de relatar", "Pergunte qual das duas perguntas esse verde responde: «esta la?» ou «presta?». Verde de existencia lido como verde de aptidao ja passou por 45 arquivos destruidos por dentro. Se o instrumento nao abre o conteudo, diga isso na MESMA linha do verde, nao no rodape."],
  ["Uma varredura ou conferencia nao achou NADA no lugar onde deveria achar algo",
```

---

## Edição 5 — `validate.js` · check C52

**Âncora** (início do C51 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C51 o numero declarado e piso, e as regras do merge vem na frente (wo0099): varredura com comando, prioridade curta, checklist simulado", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C52 duas coberturas, o esqueleto do relatorio e o gatilho do verde (wo0100): o merge declara o que varreu, e verde declara qual pergunta responde", () => {
  const n = T.normNiche(T.NICHES.dev);
  const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
  S.workmode.codeMode = "yes";
  const man = T.buildUpdatePack(n).manifest;
  S.workmode.codeMode = prev;
  // (1) FK-Q: duas coberturas separadas, com a segunda podendo ficar pendente
  assert(/Declare DUAS coberturas, separadas/.test(man), "o manifesto aceita um numero de cobertura so — «comparados» e «varridos» medem coisas diferentes e um preenche o lugar do outro");
  assert(/ocorrencias varridas no repo/.test(man), "falta a segunda cobertura, que e a que some");
  assert(/ficar declarada como PENDENTE sem invalidar o merge/.test(man), "sem a valvula, a segunda cobertura vira pressao para declarar fechado o que nao esta");
  assert(/Encerramento e a afirmacao que ninguem/.test(man), "falta a razao de a unidade importar justamente no encerramento");
  // (2) o proprio arquivo de exclusao entra na varredura
  assert(/varra o proprio arquivo de exclusao/i.test(man), "o manifesto nao manda varrer o .gitignore/.flatdropignore — eles nunca sao lidos como conteudo");
  assert(/nao alcanca o arquivo que esconde/.test(man), "falta a razao: a regra trata do que eles escondem, nao deles mesmos");
  // (3) o esqueleto do relatorio de sonda, com os tres detalhes que so aparecem depois de usar
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/# SONDA — <assunto>/.test(cmd), id+": a secao da sonda descreve as propriedades e nao mostra a FORMA — molde por descricao e o que a D-120 proibe");
    // O assert olha o BLOCO de codigo, nao a secao: a frase tambem aparece no paragrafo de prosa
    // logo abaixo, e sem o recorte o check ficava verde com o esqueleto sem a marca (prova
    // negativa 5 da wo0100 mostrou isso — terceira vez que uma prova negativa conserta o check).
    const iCod = cmd.indexOf("# SONDA — <assunto>"), fCod = cmd.indexOf("```", iCod);
    const esqueleto = iCod > -1 ? cmd.slice(iCod, fCod > -1 ? fCod : iCod) : "";
    assert(/única linha não-determinística/.test(esqueleto), id+": o esqueleto nao marca a data como unica linha nao-deterministica, e sem isso dois relatorios nao sao diffaveis");
    assert(/NÃO CONFERIDA\*\*, nunca omitida/.test(cmd), id+": o esqueleto nao mostra o que fazer com secao sem insumo");
    assert(/o que esta sonda NUNCA olha \(fixo/.test(cmd), id+": falta a lista FIXA do que a sonda nunca olha — e a mais valiosa e a que ninguem lembraria de escrever");
    assert(/ISSO NÃO QUER DIZER QUE ESTÁ CERTO/.test(cmd), id+": zero alarmes sem a negacao ao lado vira «esta certo» na conversa seguinte");
    // (4) o gatilho que faltava a FK-M: campo sem hora nao dispara
    assert(/Uma conferencia deu VERDE — antes de relatar/.test(cmd), id+": a regra de declarar qual pergunta o instrumento responde continua sendo campo sem gatilho");
    assert(/na MESMA linha do verde, nao no rodape/.test(cmd), id+": o gatilho nao diz ONDE a declaracao aparece, e no rodape ela chega depois da leitura");
  });
  return "ok";
});
```

---

## Edição 6 — `meta/DECISIONS.md` · registra a D-134

**Âncora** (última linha do arquivo, fim da D-133):

```
RO** — manifesto, modelo de WO e skills vivem fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **816.174 → 820.575** bytes. Harness **18/18, 94/94 → 95/95, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-134 — Duas coberturas declaradas separadas; o esqueleto do relatório de sonda entra como FORMA; e o verde ganha o gatilho que o campo da FK-M não tinha (wo0100)

**Base.** `260818-sand-land-para-kcm-02-fecho-do-merge.md` — a carta 02 do Sand-Land-Map. Mais o estudo dos três scripts (`probe-data.mjs`, `scan-games.mjs`, `probe_pacote.py`) que o autor subiu.

**(a) FK-Q — o manifesto declara DUAS coberturas.** Eles responderam a pergunta de método com precisão: *«contava arquivos comparados contra o pacote — e o pacote tem 20 arquivos, então o número era verdadeiro. A conclusão é que estava errada.»* E diagnosticaram por que a seção «Aplique PRIMEIRO» da wo0099 não bastaria: *«a tabela continua sendo a que define o escopo mental de quem aplica, e ela lista os arquivos do pacote. Foi assim que os seis passaram: o comando de varredura estava certo e foi lido dentro da moldura errada.»* O manifesto passa a pedir **«arquivos do pacote comparados: N/N»** e **«ocorrências varridas no repo: N, corrigidas: N, justificadas: N»**, com a válvula que torna a regra aplicável — **a segunda pode ficar declarada como pendente sem invalidar o merge**. A frase deles que fecha o assunto entrou no texto: **«encerramento é a afirmação que ninguém reconfere»**.

**(b) O arquivo de exclusão nunca é varrido, e é auto-referente.** A varredura completa deles — **54 ocorrências, 9 corrigidas, 45 justificadas em quatro categorias** — achou um sétimo arquivo que a nossa tabela não listava: o `.flatdropignore`. A observação é melhor que o achado: *«a regra nova pega o que os arquivos escondem e não pega o arquivo que esconde»*. O nosso `.flatdropignore` gerado está limpo; **o que faltava era a regra**.

**(c) O campo da FK-M não tinha hora.** Eles pegaram a metade que a D-131 deixou: *«o defeito não foi de declaração: foi que ninguém perguntou qual das duas o verde respondia. Talvez a regra precise de gatilho, não só de campo.»* **É o item (7) do Mapsmith aplicado a uma regra que nós mesmos acabáramos de escrever** — a D-131 pôs o campo nas duas superfícies onde alguém **escreve** e não pôs o evento. O gatilho novo dispara **no momento em que o verde aparece**, e diz onde a declaração vai: **na mesma linha do verde, não no rodapé** — no rodapé ela chega depois da leitura.

**(d) A skill de sonda: a posição deles é «ainda não», e está certa.** *«Uma skill que só roda o script é wrapper puro, e reprova na regra do próprio kit ("N+1 só compensa com N consumidores"). O que a justifica é impor o contrato do relatório (…) a pergunta honesta é se a seção já não faz isso sozinha. Nós ainda não sabemos.»* **Esta WO não escreve skill nem molde-arquivo:** escreve **o contrato**, que é a parte que eles apontam como portadora do valor, e o põe onde a seção já existe. O ceticismo que pediram fica registrado aqui: **se a próxima sonda escrita sob este esqueleto ainda precisar de skill, a skill se justifica; se não, o molde já era.**

**O contrato veio dos scripts, não da descrição.** Do `probe-data.mjs`: cabeçalho com `sha256` e `mtime` dos insumos, a data marcada como *«única linha não-determinística deste relatório»*, `## ALARMES (N)` com a negação embutida quando N=0, seção sem insumo saindo **NÃO CONFERIDA** em vez de omitida, `MAX_LIST` imprimindo o total, e um `## O QUE NÃO FOI OLHADO` com **duas** listas — a desta execução e a do que a sonda **nunca** olha.

**Três detalhes que só aparecem depois de usar, e que nenhuma descrição tinha:** **(1)** marcar a data como a única linha não-determinística é o que torna dois relatórios **diffáveis** — sem isso, comparar antes/depois vira leitura à mão; **(2)** a lista **fixa** do «nunca olha» vale mais que a dinâmica, porque é a que ninguém lembraria de escrever no dia; **(3)** o zero de alarmes precisa negar a leitura fácil **na própria linha**, e não no rodapé.

**Check C52 novo**, com **nove provas negativas** — e a quinta consertou o próprio check: a asserção da marca da data passava pelo parágrafo de prosa logo abaixo do bloco, e ficaria verde com o esqueleto sem a marca. Passou a recortar o bloco de código. **Terceiro caso registrado de prova negativa consertando o instrumento** (os anteriores: C45/D-123 e C48/D-127).

`KIT_VERSION 1.119.0`. **Custo de teto ZERO** — manifesto, CEREBRO e gatilhos vivem fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **820.575 → 823.845** bytes. Harness **18/18, 95/95 → 96/96, 0 erros**.
```

---

## Edição 7 — `meta/IDEAS.md` · registra a carta 02 e o que fica aberto

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-18 — Carta 02 do Sand-Land-Map: a resposta de método, a varredura completa e o «ainda não» da skill (D-134, wo0100)
Eles responderam a pergunta que fechava o merge — **o «20/20» contava comparados, não varridos** — e foram além do que a resposta exigia: rodaram a varredura completa (**54 ocorrências, 9 corrigidas, 45 justificadas em quatro categorias**), acharam um **sétimo arquivo** que a nossa tabela não listava, e devolveram a **FK-Q**.

**A observação mais afiada da carta é auto-referente:** *«a regra nova pega o que os arquivos escondem e não pega o arquivo que esconde»* — o `.gitignore` e o `.flatdropignore` nunca são lidos como conteúdo.

**E eles pegaram a metade que a nossa D-131 deixou de fora**, com uma frase que vale o registro: *«o defeito não foi de declaração: foi que ninguém perguntou qual das duas o verde respondia»*. Campo sem hora não dispara — o item (7) do Mapsmith batendo numa regra que nós mesmos tínhamos acabado de escrever.

**Sobre a skill de sonda, a posição deles é «ainda não» e o kit a acata.** *«Uma skill que só roda o script é wrapper puro»* — e o que a justificaria é impor o contrato do relatório, que agora está na seção. **O gatilho de reabrir é deles:** rodar mais uma sonda de verdade e ver se o contrato se cumpre sem skill. Se precisar, a skill se justifica; se não, o molde já era.

**Nota sobre o material:** o esqueleto entrou porque os três scripts foram lidos, não descritos. Os três detalhes que ele carrega — data como única linha não-determinística, lista fixa do «nunca olha», negação colada ao zero de alarmes — **não estavam em nenhuma das quatro descrições de sonda que recebemos**. É a D-120 valendo de novo: molde por descrição perde o que só aparece no uso.
```

---

## Fora de escopo

- **Escrever a skill ou um molde-arquivo de sonda** — a posição do Sand-Land-Map é «ainda não», com gatilho próprio, e o kit a acata.
- **Os 9 pontos que eles vão corrigir** — a WO 0043 deles já está escrita.
- **Corrigir o `.flatdropignore` do kit** — está limpo; só a regra faltava.

## Armadilhas desta WO

- **A âncora da Edição 3 termina no meio da frase** (`"**Onde mora — e este é um padrão, não uma regra.**` sem fechar aspas). É o menor trecho único; não a «complete».
- **A Edição 3 tem crases dentro das strings** — as três que abrem e fecham o bloco de código vão **dentro** do `L.push`. Se o build quebrar, é aqui.
- **A Edição 3 é com acento** (CEREBRO) e a Edição 4 é **sem** (convenção do `TRIGGERS_BASE`). O C52 procura as duas formas literalmente. **Não uniformize.**
- **A Edição 4 insere ANTES da âncora** — a entrada da wo0098 permanece logo abaixo. Se ela sumir, **PARE**.
- **Não «simplifique» o recorte `esqueleto` no C52** para `cmd`: a frase da marca da data também aparece na prosa abaixo do bloco, e o check volta a passar com o esqueleto vazio.
- **Números de check:** C52 é o próximo livre (C51 é da wo0099).

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além.
- [ ] **Inventário declarado: 3 itens da carta + 1 contrato, em 3 superfícies, 1 check novo.** Divergiu, **PARE e reporte**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 96/96 checagens, 0 erros**, com **C52 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`.
- [ ] `index.html` com **823.845 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os quatro campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildUpdateManifest()` (Edição 2), `buildClaudeMd()` (3) e `TRIGGERS_BASE` (4). O C52 gera o manifesto e o CEREBRO de verdade e afirma sobre os dois.
  - **Esta é qual pergunta:** **«está lá?»**. O harness confirma que os textos existem e que o esqueleto tem as quatro marcas. **NÃO responde «presta?»** — se o esqueleto produz relatórios melhores que a descrição produzia, só a próxima sonda escrita sob ele dirá. É o ceticismo que o Sand-Land-Map pediu que ficasse dentro.
  - **Prova de vida:** troque `*(única linha não-determinística deste relatório)*` por `(data)` **dentro do bloco de código** da Edição 3, rode `node build.js && node validate.js index.html`, e confirme que o **C52 falha** com a mensagem sobre relatórios diffáveis. Desfaça. *(Se ficar verde, o recorte `esqueleto` virou `cmd` e a asserção está passando pela prosa.)*
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados · validação (C28, C52, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita a versão e a contagem. Atualize as **vivas** para `v1.119.0` e `96/96`, cite o **C52** antes do C51, acrescente **D-134**. Orçamento inalterado. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260818-wo0100-duas-coberturas-e-o-esqueleto.md
```

```
git commit -m "feat(kit): duas coberturas declaradas, e o esqueleto do relatorio de sonda" -m "A carta 02 do sand-land respondeu a pergunta que fechava o merge: o 20/20 contava arquivos comparados contra o pacote, nao ocorrencias varridas no repo. O numero era verdadeiro e a conclusao era errada - um numero sozinho preenche o lugar dos dois. O manifesto passa a pedir as duas coberturas separadas, com a segunda podendo ficar declarada como pendente sem invalidar o merge." -m "E eles acharam um setimo arquivo que a nossa tabela nao listava, com a observacao que vale mais que o achado: a regra nova pega o que os arquivos escondem e nao pega o arquivo que esconde. O gitignore e o flatdropignore nunca sao lidos como conteudo." -m "O campo da FK-M ganhou a hora que lhe faltava. Eles escreveram que o defeito nao foi de declaracao, foi que ninguem perguntou qual das duas o verde respondia - campo sem gatilho nao dispara, batendo numa regra que nos mesmos tinhamos acabado de escrever." -m "E o esqueleto do relatorio de sonda entrou como FORMA, destilado dos tres scripts e nao das descricoes: data marcada como unica linha nao-deterministica (o que torna dois relatorios diffaveis), lista fixa do que a sonda nunca olha, e a negacao colada ao zero de alarmes. Nenhum dos tres estava nas quatro descricoes que recebemos. A skill fica para quando o gatilho deles disparar. Check C52, nove provas negativas, e a quinta consertou o proprio check. wo0100, D-134."
```

```
git push
```
