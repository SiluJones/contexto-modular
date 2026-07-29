# wo0070 — Leva sand-land: modelo de WO, «Técnicas específicas», o dado ilegível pelo canal e a data que não envelhece

> **Tipo:** WO de código + registro. **Canal dos meta neste ciclo = CODE.**
> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.91.0` (pós-wo0069, commit `870ca0b`), harness **18/18 · 70/70 · 0 erros**.
> **Resultado esperado:** `v1.92.0`, harness **18/18 · 71/71 · 0 erros** (check novo **C27**).
> **Base:** feedback do **sand-land** — `260729-1138.txt` (FK-A/B/C), `IDEAS-sand-land.md`
> §«Feedback para o Kit», e o `_TEMPLATE-sand-land.md` que o autor subiu.
>
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir,
> **PULE** o item e diga no relatório.
>
> **Já testada pelo chat:** sandbox do mount v1.91.0, 9 edições, build + harness — **18/18 · 71/71 ·
> 0 erros**, com dois anti-testes do C27. **Custo de teto: zero** — `narrative` 6628, `game` 6536,
> `dev` 6084, todos inalterados. Tudo novo vive no CEREBRO ou em arquivo gerado.

---

## 1. Por quê

O sand-land é o segundo projeto a rodar um ciclo completo com as regras novas, e trouxe três itens
que o FlatDrop não tinha como enxergar.

**FK-C é o mais forte, e é uma falha de coerência nossa.** O kit ensina molde para spec de feature,
para log e para análise — e **nenhum para a WO**, que é o artefato que a raia chat→Code mais produz.
Sem molde, cada WO é reconstruída por imitação da anterior, e imitação deriva: a deles derivou em
quatro pontos (título, idempotência, banner de canal, sintaxe de caminho) por ter copiado a WO
anterior de memória. Pior: o kit **já documenta** o par `pasta/*` + `!pasta/_TEMPLATE.md` para as
análises — só não aplicou a própria regra ao seu artefato principal.

**FK-A** aponta um pedido impossível: a linha `Estado` pede «o commit, quando existir», mas num
Projeto alimentado por cópia achatada **não há `.git`** — nenhum `git log` para ler, e nenhuma
releitura resolve. Hoje a única saída é «não verificado nesta rodada», que soa a desleixo quando é
impossibilidade estrutural. São coisas diferentes e o remédio de cada uma é diferente.

**FK-B** é a contrapartida que faltava à regra da wo0066: «a sua cópia não é a fonte da verdade» está
certa, mas induziu o assistente deles a «corrigir» uma data que estava certa. O que envelhece é o
**estado do repo e as âncoras** — não o **carimbo de emissão** de um documento.

E a sugestão estrutural do IDEAS deles, confirmada duas vezes (DEC-018): ao rebasear o CEREBRO numa
versão nova do kit, **o único conteúdo que valia preservar era o bloco «Técnicas específicas»**. Todo
o resto era formatação genérica que a versão nova já cobria melhor. Isso merece ser oficial: é a
seção que separa o que é do projeto do que é do kit, e é o que sobrevive a rebases.

**Recusado com argumento:** a sugestão de um tipo novo «proposta de fase» (`docs/F2_proposta.md`).
Análise + ROADMAP já cobrem o caso — uma análise pode carregar o plano de entregas — e um quarto tipo
de artefato aumenta o vocabulário que todo projeto precisa aprender. A taxonomia estendida de IDEAS
(IDs `IDEIA-NNN`, referências de origem) fica de fora pelo mesmo motivo; só a gaveta **Adiadas com
gatilho de volta** é boa o bastante para virar sugestão no template, e vai na leva seguinte.

---

## Edição 1 — `src/index.template.html` · `buildWoTemplate()`

**Âncora:**

```js
function buildCodeKitFiles(){
```

**Ação:** INSERIR **imediatamente antes** da âncora o bloco abaixo. Ele é longo: são 113 linhas de
`"..."` dentro de um array. **Copie na íntegra** — o C27 confere as seções do modelo.

```js
/* Modelo de WO (FK-C do sand-land): o artefato que a raia chat->Code mais produz nao tinha molde.
   Sobe sempre ao Projeto pelo par meta/workorders/* + !meta/workorders/_TEMPLATE.md. */
function buildWoTemplate(){
  return [
    "# WO NNNN — [titulo curto e concreto, no que a WO ENTREGA]",
    "",
    "> **Este arquivo e o MODELO — nao o preencha aqui.** Copie para `meta/workorders/AAMMDD-woNNNN-desc.md`",
    "> e preencha a copia. Ele sobe sempre ao Projeto (o `.flatdropignore` ignora `meta/workorders/*` mas",
    "> reinclui `!meta/workorders/_TEMPLATE.md`), para que a primeira sessao depois de uma transferencia",
    "> tenha o formato a mao sem precisar das WOs antigas.",
    ">",
    "> **O que e uma WO:** instrucao de APLICACAO — ancora + texto exato — que o chat autora e o Code posiciona.",
    "> **O que NAO e:** a spec de feature diz **o que** construir e quando esta pronto; a WO diz **como aplicar**.",
    "> Se voce ainda nao sabe o que construir, nao e hora de escrever WO — e hora de analise ou spec.",
    "",
    "---",
    "",
    "## Cabecalho — preencha as linhas que se aplicam e apague as que nao",
    "",
    "> **Tipo:** WO de CODIGO · WO de DOC (registro) · mista.",
    "> **Config sugerida:** modelo e esforco para quem for aplicar.",
    "> **Pre-requisito:** versao/commit em que esta WO foi escrita, e o estado esperado (testes verdes, arvore limpa).",
    "> **Base:** a decisao, a analise ou a conversa que originou.",
    "> **Depende de:** WOs que precisam estar aplicadas antes — ou apague a linha.",
    "> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um",
    "> lugar proximo. Os arquivos podem ter mudado entre a escrita desta WO e a aplicacao.",
    "> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**",
    "> o item e diga no relatorio — nao duplique.",
    "",
    "> **Canal dos meta neste ciclo = CHAT** *(ou **CODE** — escolha um e apague o outro)*.",
    "> Se **CHAT**: esta WO toca so codigo/config — nao faca append nos `meta/`; o chat entrega os",
    "> documentos depois da validacao. Se **CODE**: esta WO E o registro — aplique os appends previstos",
    "> e nao espere doc do chat. *Uma fonte por doc por ciclo; escolher errado aqui duplica conteudo.*",
    "",
    "---",
    "",
    "## 1. Por que",
    "",
    "[Uma a tres frases: a dor concreta, ou a causa raiz se for correcao. Quem aplica precisa saber o que",
    "esta consertando para reconhecer quando o resultado sai errado. Se for correcao de defeito introduzido",
    "por WO anterior, diga qual e assuma — historico honesto e o que impede repetir.]",
    "",
    "## 2. Contexto factual *(so em WO de registro — apague em WO de codigo)*",
    "",
    "[Os fatos que os textos das edicoes afirmam, na ordem em que aconteceram. Esta secao e a FONTE dos",
    "blocos abaixo: fato que nao esta aqui nao deveria aparecer la. Marque o que foi **medido** e o que e",
    "**deduzido** — inferencia sem rotulo vira fato na leitura seguinte.]",
    "",
    "---",
    "",
    "## Edicao 1 — `caminho/real/do/arquivo.ext` · [o que muda, em cinco palavras]",
    "",
    "**Ancora** *(diga ONDE fica: secao, funcao, item — nunca numero de linha)*:",
    "",
    "```",
    "[trecho literal e unico do arquivo vivo, copiado sem reformatar]",
    "```",
    "",
    "**Substituir por:**",
    "",
    "```",
    "[texto exato que entra]",
    "```",
    "",
    "> Variantes — use a que couber, sempre com a ancora acima: **Inserir IMEDIATAMENTE APOS** ·",
    "> **Inserir IMEDIATAMENTE ANTES** · **Remover o bloco inteiro** · **Criar arquivo novo** (sem ancora;",
    "> diga o que fazer se ele ja existir).",
    "",
    "## Edicao 2 — `caminho/real/do/arquivo.ext` · [...]",
    "",
    "[Repita. Uma edicao por bloco. Se um arquivo recebe mudancas distantes entre si, numere 2a/2b/2c em",
    "vez de empilhar num bloco so — cada uma com a propria ancora.]",
    "",
    "---",
    "",
    "## Fora de escopo",
    "",
    "[O que esta WO deliberadamente NAO faz, para que quem aplica nao \"aproveite a viagem\". Melhoria que",
    "voce enxergou no caminho vira ideia no IDEAS ou outra WO — nao entra aqui.]",
    "",
    "## Armadilhas desta WO",
    "",
    "[So quando houver. O que ja deu errado antes neste mesmo lugar e o que quem aplica pode quebrar sem",
    "perceber: ancora que aparece duas vezes, arquivo com fim de linha CRLF (ancora multi-linha colada com",
    "\\\\n nao casa), bloco gerado que sera reescrito, numero de check ja usado.]",
    "",
    "---",
    "",
    "## Depois de aplicar — conferencia antes do commit",
    "",
    "- [ ] `git diff` mostra **exatamente** os arquivos previstos, e nada alem.",
    "- [ ] [Conferencia de forma especifica desta WO — ex.: \"a entrada nova ficou dentro da secao certa\".]",
    "- [ ] **WO de codigo:** o comando de validacao do projeto passa com **0 erros**. Se acusar erro,",
    "      **PARE e reporte antes de commitar**.",
    "- [ ] **WO so de doc:** nao precisa de build — a rede e o `git diff`.",
    "- [ ] **Teste manual que a validacao NAO cobre** (obrigatorio quando a WO toca dado carregado ou UI):",
    "      [caso feliz · caso de borda · regressao possivel].",
    "",
    "## Relatorio de aplicacao *(quem aplica preenche ao terminar)*",
    "",
    "O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da validacao · o commit.",
    "**Nao** substitua este relatorio pelo bloco de fecho do chat: aquele e da raia de planejamento, e trocar",
    "relatorio por formulario perde justamente o que so quem aplicou viu.",
    "",
    "## Commit — blocos separados, mensagem SEM acento",
    "",
    "```",
    "git add [caminhos]",
    "```",
    "",
    "```",
    "git commit -m \"tipo(escopo): descricao no imperativo curto\" -m \"Corpo explicando o porque, sem acento.\"",
    "```",
    "",
    "```",
    "git push",
    "```"
  ].join("\n");
}
```

---

## Edição 2 — `src/index.template.html` · o modelo entra no kit do Code

**Âncora:**

```js
  return { claudeMd, settings, applyWo, wrap };
```

**Substituir por:**

```js
  return { claudeMd, settings, applyWo, wrap, woTemplate: buildWoTemplate() };
```

---

## Edição 3 — `src/index.template.html` · zip do kit do Code

**Âncora:**

```js
  zip.file(`${root}/.claude/skills/wrap/SKILL.md`, f.wrap);
```

**Ação:** INSERIR **imediatamente após**:

```js
  zip.file(`${root}/meta/workorders/_TEMPLATE.md`, f.woTemplate);
```

---

## Edição 4 — `src/index.template.html` · zip estruturado (o `.gitkeep` some)

**Âncora:**

```js
    zip.file(`${root}/meta/workorders/.gitkeep`, "");
```

**Substituir por:**

```js
    zip.file(`${root}/meta/workorders/_TEMPLATE.md`, k.woTemplate);
```

> O `.gitkeep` existia só para a pasta nascer; com o modelo dentro, ele vira lixo.

---

## Edição 5 — `src/index.template.html` · pacote de atualização

**Âncora** (duas linhas, dentro de `buildUpdatePack`):

```js
    files.push({ flat: updateFlat("wrap.SKILL.md"), real: ".claude/skills/wrap/SKILL.md",
      nature: "template", role: "Comando /wrap.", content: k.wrap });
```

**Ação:** INSERIR **imediatamente após**:

```js
    files.push({ flat: updateFlat("workorders._TEMPLATE.md"), real: "meta/workorders/_TEMPLATE.md",
      nature: "template", role: "Modelo de WO (o proprio modelo, nao uma WO preenchida).", content: k.woTemplate });
```

---

## Edição 6 — `src/index.template.html` · o `.flatdropignore` reinclui o modelo

**Âncora:**

```js
  if(codeOn) L.push("meta/workorders/*");
```

**Substituir por:**

```js
  if(codeOn){ L.push("meta/workorders/*"); L.push("!meta/workorders/_TEMPLATE.md"); }
```

> A ordem importa: a reinclusão **depois** da exclusão. O C27 confere.

---

## Edição 7 — `src/index.template.html` · seção «Técnicas específicas deste projeto»

**Âncora:**

```js
  // Princípios (versão COMPLETA — definição longa)
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
  // Tecnicas especificas do projeto (sand-land FK/DEC-018): o unico conteudo que sobrevive a um rebase do kit
  L.push("");
  L.push("## Técnicas específicas deste projeto");
  L.push("");
  L.push("> **Esta seção é sua.** Tudo o mais neste arquivo é genérico e é substituído quando o kit evolui; aqui é onde mora o conhecimento operacional que só este projeto tem — a coordenada que não se mexe, a armadilha da ferramenta que já custou uma sessão, o jeito certo de nomear uma coisa daqui. **Um template-update nunca sobrescreve esta seção**: ele traz a moldura, você mantém o recheio.");
  L.push("");
  L.push("Comece vazia e escreva quando doer duas vezes: técnica que você precisou explicar de novo é candidata. Formato livre — uma linha por item, com o nome do lugar onde ela vale. Se um item virar regra geral do projeto, promova-o para o corpo do CEREBRO e deixe aqui só o caso particular.");
  L.push("");
  L.push("- _(vazio — o primeiro item entra na primeira vez que uma técnica precisar ser repetida)_");
```

---

## Edição 8 — `src/index.template.html` · FK-A, o dado ilegível pelo canal

**Âncora** (trecho único, dentro da descrição do campo Estado):

```
Se você não verificou, escreva «não verificado nesta rodada» — é resposta de primeira classe, não falha.
```

**Substituir por:**

```
Se você não verificou, escreva «não verificado nesta rodada» — é resposta de primeira classe, não falha. E distinga do caso em que o dado **não é legível por este canal**: num Projeto alimentado por cópia achatada não há `.git`, então nenhum `git log` existe para ler — aí escreva «commit não legível pelo mount» e **peça uma vez** (`git log -1 --oneline`), em vez de repetir a ressalva todo turno. «Não verifiquei» é desleixo; «não dá para ler daqui» é fato, e o remédio de cada um é diferente.
```

---

## Edição 9 — `src/index.template.html` · FK-B, a data que não envelhece

**Âncora** (trecho único, no fim da regra de higiene da wo0066):

```
Reentregar o que já foi aplicado custa mais caro que perguntar.",
```

**Substituir por:**

```
Reentregar o que já foi aplicado custa mais caro que perguntar. **A contrapartida, que evita o excesso oposto:** o que envelhece é o **estado do repo e as âncoras** — não o **carimbo de emissão** de um artefato. Documento escrito e datado no dia 27 continua correto se for aplicado no dia 29; a data diz quando foi emitido, não quando foi aplicado. Não «corrija» data de arquivo entregue, nem renomeie WO/análise por causa de atraso.",
```

---

## Edição 10 — `src/index.template.html` · o pré-requisito do ASU é só o guia

**Âncora** (trecho único, na seção «Saída de código via ASU (patch)»):

```
Pré-requisito: `INSTRUCTION_GUIDE.md` e `PROMPT_IA.md` estão no conhecimento do Projeto e o ASU está instalado.
```

**Substituir por:**

```
Pré-requisito: o **`INSTRUCTION_GUIDE.md`** está no conhecimento do Projeto (é o contrato: esqueleto, estratégias, tabela de erros) e o ASU está instalado. **Não suba o `PROMPT_IA.md`:** ele é o bloco que semeia esta diretriz em projetos **sem** o kit — aqui a diretriz já está curada neste CEREBRO, e as duas versões divergem (a dele manda colar o YAML no chat com uma linha de comando; a daqui manda entregar o arquivo para baixar e não emitir instrução de execução). Duas instruções concorrentes no mesmo Projeto é sorteio. O `demo.yaml` também não precisa subir — o guia já traz exemplo completo.
```

---

## Edição 11 — `validate.js` · check **C27**

**Âncora:**

```js
check("C26 curadoria das linhas de modo
```

**Ação:** INSERIR **imediatamente antes**:

```js
check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
  const k=T.buildCodeKitFiles();
  const wo=k.woTemplate||"";
  assert(/Este arquivo e o MODELO/.test(wo), "modelo de WO ausente do kit do Code");
  assert(/Idempotencia:/.test(wo), "modelo de WO sem a clausula de idempotencia");
  assert(/Canal dos meta neste ciclo/.test(wo), "modelo de WO sem o banner de canal dos meta");
  assert(/Fora de escopo/.test(wo), "modelo de WO sem a secao fora de escopo");
  assert(/Armadilhas desta WO/.test(wo), "modelo de WO sem a secao de armadilhas");
  assert(/Relatorio de aplicacao/.test(wo), "modelo de WO sem o relatorio de aplicacao");
  assert(!/npm run|svelte/i.test(wo), "modelo de WO amarrado a um stack especifico");
  const fd=T.structuredFlatdropignore(true);
  assert(/!meta\/workorders\/_TEMPLATE\.md/.test(fd), "flatdropignore nao reinclui o modelo de WO");
  const idx=fd.split("\n");
  assert(idx.indexOf("meta/workorders/*") < idx.indexOf("!meta/workorders/_TEMPLATE.md"), "a reinclusao vem antes da exclusao (ordem invertida)");
  Object.keys(T.NICHES).forEach(id => {
    const cmd=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/## Técnicas específicas deste projeto/.test(cmd), id+": CEREBRO sem a secao Tecnicas especificas");
    assert(/template-update nunca sobrescreve esta seção/.test(cmd), id+": a secao Tecnicas especificas nao esta protegida do template-update");
    assert(/não é legível por este canal/.test(cmd), id+": Estado nao distingue nao-verificado de nao-legivel pelo canal");
    assert(/carimbo de emissão/.test(cmd), id+": falta a contrapartida (data de artefato nao envelhece)");
    assert(/Não suba o `PROMPT_IA.md`/.test(cmd) || !/Saída de código via ASU/.test(cmd), id+": a secao ASU nao avisa para nao subir o PROMPT_IA");
  });
  return "ok (" + wo.length + " chars no modelo)";
});

```

---

## Edição 12 — bump

**Âncora:** `const KIT_VERSION = "1.91.0";` → **Substituir por:** `const KIT_VERSION = "1.92.0";`

---

## Fora de escopo

Não instala a trava por configuração (opção C da análise do teto) — é a próxima. Não mexe na
taxonomia do template de IDEAS (só a gaveta «Adiadas com gatilho» merece, e vai na leva seguinte).
Não cria tipo novo de artefato «proposta de fase» (recusado, ver §1). Não migra o KCM de
`.claude/commands/` para `skills/` — segue aberto no IDEAS.

## Armadilhas desta WO

- A **Edição 1** é longa e contém `\\n` escapado dentro de uma string (na seção «Armadilhas»). Copie
  o bloco sem reformatar; se o build acusar erro de sintaxe, é aí.
- **Edição 4:** existe outro `zip.file` de `.gitkeep` no arquivo (o de `logs/`). Confira que você
  trocou o de `meta/workorders/`, não o de `logs/`.
- **Edição 5:** a âncora tem duas linhas. O arquivo é **CRLF** — se colar com `\n` não casa; edite
  linha a linha.

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` + `node validate.js index.html` → **18/18 · 71/71 · 0 erros**, **C27 verde**
      (a mensagem imprime **4957 chars no modelo**).
- [ ] Teto **inalterado**: `narrative` 6628, `game` 6536, `dev` 6084.
- [ ] `git diff` só nos arquivos previstos.

## Registros (canal CODE)

1. **`meta/DECISIONS.md`** — **D-104 — O kit passa a entregar molde de WO; «Técnicas específicas» vira
   seção oficial.** Registre também o que foi **recusado** e por quê (tipo «proposta de fase»;
   taxonomia estendida de IDEAS), e a correção do pré-requisito do ASU (o `PROMPT_IA.md` no Projeto
   concorre com a diretriz curada do CEREBRO).
2. **`meta/CHANGELOG.md`** — `## v1.92.0 — Leva sand-land (wo0070, D-104)`.
3. **`meta/STATUS.md`** — append + versão **v1.92.0** · 71/71 (folgas inalteradas: dev 816 ·
   narrative 272 · game 364).
4. **`meta/IDEAS.md`** — em «Feedback para o Kit», marcar FK-A, FK-B e FK-C como **atendidos** e
   creditar o sand-land. Abrir: **gaveta «Adiadas (com gatilho de volta)» no template de IDEAS** e
   **`HISTORY.md` sugerir «pesquisa de convenções» e «autópsia» como tipos de seção**.
5. **`meta/workorders/_TEMPLATE.md`** — o KCM também adota o modelo para si (dogfood): grave o mesmo
   conteúdo da Edição 1 nesse caminho e acrescente ao `.flatdropignore` da raiz, **dentro do bloco**,
   logo depois de `meta/workorders/*`, a linha `!meta/workorders/_TEMPLATE.md`.

## Commit — blocos separados, mensagem SEM acento

```bash
git add -A
```

```bash
git commit -m "feat(kit): leva sand-land - modelo de WO e tecnicas especificas (wo0070, D-104)" -m "O kit passa a entregar meta/workorders/_TEMPLATE.md (modelo de WO) no zip estruturado, no kit do Code e no pacote de atualizacao, com reinclusao no flatdropignore. CEREBRO ganha a secao Tecnicas especificas deste projeto, que o template-update nunca sobrescreve. Campo Estado distingue nao verificado de nao legivel pelo canal (mount sem .git). Regra da copia ganha a contrapartida: o que envelhece e o estado do repo, nao o carimbo de emissao. Pre-requisito do ASU passa a ser so o INSTRUCTION_GUIDE. Check C27; KIT_VERSION 1.92.0; harness 18/18, 71/71, 0 erros."
```

```bash
git push
```
