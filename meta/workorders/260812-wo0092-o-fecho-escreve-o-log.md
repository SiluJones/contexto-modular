# WO 0092 — O fecho escreve o log; medição também é arquivo; ler antes de sobrescrever; e a correção obrigatória para de chegar cortada

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. Nove edições; a mais delicada é a 6 (campo novo num objeto literal, com aspas escapadas dentro).
> **Pré-requisito:** `KIT_VERSION 1.110.1`, commit `11e5564`, `main` limpo, harness **18/18 · 90/90 · 0 erros**.
> **Base:** auditoria completa do Mapsmith pedida pelo autor em 2026-08-12, antes de gerar o pacote de update dele. Os 56 arquivos do projeto foram varridos; quatro achados viraram edição.
> **Depende de:** wo0091 (aplicada, `11e5564`).
> **Bloqueia:** o pacote do Mapsmith. Três dos quatro achados atingem exatamente esse projeto.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 8 e 9.

---

## 1. Por que

**Quatro achados, todos medidos nos arquivos do Mapsmith e no pacote gerado.**

**(a) A skill `wrap` que o kit publica nunca escreve o log do dia.** Verificado: `/logs?\//` não casa nada no `wrap` gerado. O kit manda o log existir em três lugares — o CEREBRO, a tabela de gatilhos (D-122) e o prompt de transferência (D-119) — e **a única skill que roda no fim do trabalho não o cria**. É a **IDEA-056** do Mapsmith, aberta desde 2026-08-01 e ainda `🔬 em estudo`, com o custo já medido lá: *sete sessões (07-21 a 07-30) sem log, reconstituídas dos meta uma semana depois; duas datas sobraram quase vazias porque não havia de onde reconstituir.* E de novo em agosto: *três dias, dezesseis WOs, duas releases e três FIX sem um único log*.

**(b) O kit abre uma exceção que contradiz a própria regra — e foi a reclamação literal do autor.** O CEREBRO diz hoje: *«Nunca empurre bloco para o usuário colar no executor (…) Bloco colável só para o que não tem âncora nem commit (um pedido de medição, por exemplo).»* Em `mapsmith_7.md`, o autor:

> *«Por que você está me entregando esse monte de mensagens para eu copiar e colar no code? (…) você sabe muito bem que o espaço no code tem limite de caracter, por isso os wo, eles existem justamente por causa disso (…) poderia ter gerado algum tipo de arquivo para elas, e colocado em algum lugar, pois foi o que eu fiz com a anterior, eu gerei um arquivo temporario e mandei ele ler, pois não coube na mensagem.»*

**A exceção foi escrita na wo0085 (por mim) contra evidência de campo que já estava no mount.** «Não é WO» virou «vai colado na mensagem», quando o certo é «é outro artefato».

**(c) A restrição do dono cumprida ao pé da letra, e a sobrescrita sem leitura.** Duas ocorrências, dois projetos, e o autor nomeou a primeira em `mapsmith_8.md`:

> *«todo esse problema se gerou por que vc seguiu literalmente as minhas solicitações? Seja sincero. O problema do arquivo original ter causado tudo isso, foi porque pedi para não apagar né? Se sim, vc poderia ter falado, ou sido esperto e só copiado para um espaço seguro de backup.»*

A segunda foi aqui, no relatório da wo0090: o `.claude/launch.json` foi **sobrescrito sem leitura prévia**, e o que houvesse nele se perdeu. *«Não apague os originais» é um **medo**, não uma especificação* — cumprir a letra e deixar o problema de pé é obedecer contra o interesse de quem pediu.

**(d) A correção obrigatória do `settings.json` chega TRUNCADA no manifesto.** O aviso vivia no campo `role`, e a tabela do manifesto corta `role` em **120 caracteres**. O que o projeto recebe hoje termina no meio da frase:

> `Permissoes do Claude Code. CORRECAO OBRIGATORIA no arquivo que voce ja tem: se houver uma linha comecando com // depois  |`

O leitor nunca descobre o que fazer, nem que precisa de `Write` no `allow`. **E isso importa agora:** o `.claude/settings.json` do Mapsmith — lido no mount nesta rodada — **não tem `Write` nem `additionalDirectories`**, e não tem `defaultMode` para disfarçar. Ou seja: as skills mandam criar log e relatório, e a permissão nega. **É a metade mecânica da causa (a)**, e o aviso que existia para dizer isso vinha cortado.

## 2. Contexto factual

Medido em sandbox no estado `11e5564` (repo reconstruído do mount, build reproduzindo `index.html` byte a byte — **805.153** —, harness verde 18/18 · 90/90 antes de qualquer edição).

- `.claude/settings.json` do Mapsmith, na íntegra: `allow` com `Read, Edit, Grep, Glob`, `Bash(pytest|pip install|ruff|python -m)`, `Bash(git …)`. **Sem `Write`. Sem `additionalDirectories`. Sem `defaultMode`.**
- O `settings.json` que o kit **gera** está correto (`Write` presente, `additionalDirectories: ["../"]`) — o defeito é só no aviso ao instalado.
- **Custo de teto: ZERO.** Skills, CEREBRO, higiene, gatilhos e manifesto não passam por `buildInstr`. C28 idêntico: `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. **Quinta leva seguida.**
- `index.html` vai de **805.153 → 808.190** bytes.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato, em três frentes.** (1) Os **56 arquivos do Mapsmith** no mount, varridos pelo **fato** (`sessão`, `bloco de commit`, `blocos soltos`, `log`, `Write`) — não pela frase. (2) Os **artefatos gerados** pelo kit (`buildCodeKitFiles()` e o pacote de update inteiro), lidos um a um. (3) Os transcritos `mapsmith_7/8`, para as duas reclamações literais do autor.

**Não truncado.** Os 56, sem `head`.

**Contagem declarada: 4 achados** — a skill sem log · a exceção da medição · ler antes de sobrescrever · a correção obrigatória cortada. **5 regiões** no `src/index.template.html` e **2 pontos** no `validate.js` (C37 ajustado, C47 novo). **Conteste antes de agir.**

> **Erro meu, corrigido aqui:** na wo0090 e no guia de entrega eu afirmei que o `.claude/skills/apply-wo/SKILL.md` do Mapsmith **não estava no mount**. Estava. O que aconteceu foi que meu comando de varredura era `grep … || echo "(arquivo ausente no mount)"` — e o `||` dispara quando o `grep` **não acha nada**, não quando o arquivo falta. **Meu instrumento traduziu «sem correspondência» por «inexistente» e eu publiquei isso como fato medido.** O arquivo está íntegro e, lido agora, **não tem o defeito** do `/wrap`: é uma versão própria, mais rica, sem a linha revogada. A afirmação errada saiu do guia.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.110.1";
```

**Substituir por:**

```
const KIT_VERSION = "1.111.0";
```

---

## Edição 2 — `src/index.template.html` · a skill `wrap` gerada escreve o log do dia

**Âncora** (uma linha, dentro de `buildCodeKitFiles`):

```
    "Ao mudar um número ou um estado no `STATUS.md` (contagem de testes/checagens, versão, «funciona até X»), procure o valor ANTIGO no arquivo INTEIRO e atualize todas as ocorrências — o cabeçalho não é o único lugar onde ele aparece, e a cópia esquecida no meio do texto passa a mentir.",
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
    "Escreva o log do dia em `logs/AAAA-MM-DD.md` (formato em `meta/LOG-TEMPLATE.md`). Se o arquivo do dia NÃO existe, CRIE — não regenerar é uma coisa, não criar é outra. Se já existe, acrescente. Cinco linhas escritas hoje valem mais que uma página reconstituída na semana que vem: só você viu o que aconteceu aqui.",
```

---

## Edição 3 — `src/index.template.html` · medição não é WO, mas continua sendo arquivo

**Âncora** (uma linha, no ramo `codeModeOn()` de `buildClaudeMd`):

```
      L.push("- **Nunca empurre bloco para o usuário colar no executor.** A caixa de mensagem dele tem limite de caracteres — é a razão de a WO existir. Bloco colável só para o que não tem âncora nem commit (um pedido de medição, por exemplo).");
```

**Substituir por:**

```
      L.push("- **Nunca empurre bloco para o usuário colar no executor.** A caixa de mensagem dele tem limite de caracteres — é a razão de a WO existir. **Isso inclui pedido de medição.** Medição não tem âncora nem commit, então não é ordem de trabalho — mas continua sendo um arquivo: um script de sonda, ou um `.md` curto com o que rodar e o formato do relatório. «Não é WO» quer dizer «outro artefato», nunca «vai colado na mensagem». Se o usuário precisou criar o arquivo à mão para caber, o pedido estava errado.");
```

---

## Edição 4 — `src/index.template.html` · `HYGIENE_RULES`, ler antes de sobrescrever

**Âncora** (início da regra da wo0088):

```
  "**Quem abre, fecha — e o que não fechar, declara.**
```

**Substituir por:**

```
  "**Antes de destruir ou sobrescrever, leia o que está lá — e proponha a proteção mais barata.** Duas metades da mesma falta de cuidado. (1) **Ler antes de escrever por cima:** arquivo que já existe pode ter conteúdo que ninguém pediu para preservar porque ninguém lembrou dele. Abrir custa um comando; recuperar custa a conversa inteira, e às vezes não custa nada porque não dá. (2) **Restrição do dono não se cumpre ao pé da letra quando há forma mais barata de obter a mesma proteção:** «não apague os originais» é um MEDO, não uma especificação — a resposta certa é copiar para fora do espaço de trabalho e seguir, dizendo que fez. Cumprir a letra e deixar o problema de pé é obedecer contra o interesse de quem pediu. Custo real: uma pasta de trabalho que ficou impossível de limpar por dias, e um arquivo de configuração sobrescrito sem leitura prévia.",
  "**Quem abre, fecha — e o que não fechar, declara.**
```

---

## Edição 5 — `src/index.template.html` · `TRIGGERS_BASE`, o gatilho da sobrescrita

**Âncora** (a entrada da wo0088):

```
  ["A tarefa criou algo FORA do repositorio (processo, porta, servidor de dev, arquivo temporario, download)",
```

**Substituir por:**

```
  ["Vai sobrescrever, mover ou apagar algo que ja existe (arquivo, pasta, config, artefato baixado)", "LE antes. E se o dono pediu para NAO apagar algo, pergunte do que ele tem medo: quase sempre a resposta e copiar para fora do espaco de trabalho e seguir — cumprir a letra e deixar o problema de pe e obedecer contra o interesse de quem pediu."],
  ["A tarefa criou algo FORA do repositorio (processo, porta, servidor de dev, arquivo temporario, download)",
```

---

## Edição 6 — `src/index.template.html` · a correção obrigatória sai do campo truncável

**Âncora** (duas linhas, dentro de `buildUpdatePack`):

```
    files.push({ flat: updateFlat("claude-settings.json"), real: ".claude/settings.json", nature: "template",
      role: "Permissoes do Claude Code. CORRECAO OBRIGATORIA no arquivo que voce ja tem: se houver uma linha comecando com // depois do } final, APAGUE-A — o JSON fica invalido e TODAS as permissoes param de valer em silencio, inclusive additionalDirectories (relatorio em arquivo e medicao fora da raiz). Confira tambem que Write esta no allow.", content: k.settings });
```

**Substituir por:**

```
    files.push({ flat: updateFlat("claude-settings.json"), real: ".claude/settings.json", nature: "template",
      role: "Permissoes do Claude Code.",
      obrigatorio: [
        "Se houver uma linha comecando com `//` depois do `}` final, **APAGUE-A**. O Claude Code nao aceita comentario em JSON: o arquivo INTEIRO e descartado em silencio e TODAS as permissoes param de valer de uma vez — sem erro, sem aviso.",
        "**`Write` no `allow`.** Sem ele, as skills mandam criar o log do dia e o relatorio de trabalho, e a permissao nega o que a skill pede. Se o seu arquivo tem `defaultMode: acceptEdits`, ele disfarca a falta — funciona, mas por outro motivo, e para de funcionar no dia em que o modo mudar.",
        "**`additionalDirectories` com a pasta-pai (`\"../\"`).** Sem ele, o relatorio de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` nao tem onde ser gravado, e a medicao fora da raiz tambem nao.",
      ], content: k.settings });
```

> **Atenção às aspas escapadas** em `` `\"../\"` `` — são obrigatórias. Se o build acusar string não terminada, é aqui.

---

## Edição 7 — `src/index.template.html` · seção própria no manifesto, sem truncamento

**Âncora** (três linhas, na montagem do manifesto):

```
  L.push("| Nome no upload | Destino real | Natureza | Papel |");
  L.push("|---|---|---|---|");
  files.forEach(f => {
```

**Substituir por:**

```
  const comObrig = files.filter(f => Array.isArray(f.obrigatorio) && f.obrigatorio.length);
  if(comObrig.length){
    L.push("## Correcoes obrigatorias (nao sao merge — sao conserto)");
    L.push("");
    L.push("Estas NAO passam pela regra de «template generico nao substitui arquivo vivo»: sao defeitos");
    L.push("conhecidos no arquivo que voce ja tem, e o conserto vale mesmo que voce descarte o resto do");
    L.push("template. Confira uma a uma e me diga o que achou.");
    L.push("");
    comObrig.forEach(f => {
      L.push(`### \`${f.real}\``);
      L.push("");
      f.obrigatorio.forEach(item => L.push(`- ${item}`));
      L.push("");
    });
  }
  L.push("| Nome no upload | Destino real | Natureza | Papel |");
  L.push("|---|---|---|---|");
  files.forEach(f => {
```

> A truncagem de `role` em 120 caracteres **permanece** — ela está certa para uma coluna de resumo. O que muda é que o aviso obrigatório deixa de morar lá.

---

## Edição 8a — `validate.js` · o C37 acompanha o campo novo

> **Não é workaround: o C37 fez o trabalho dele.** Ele exigia `CORRECAO OBRIGATORIA` no `role`, e a Edição 6 tira o aviso de lá. A asserção passa a cobrar o campo novo **e** que ele chegue **inteiro** ao manifesto — que é o defeito que originou tudo.

**Âncora** (duas linhas):

```
  const setEntry = (pack && pack.files ? pack.files : []).find(f => f.real === ".claude/settings.json");
  assert(setEntry && /CORRECAO OBRIGATORIA/.test(setEntry.role||""), "pacote de update nao avisa os projetos JA instalados — consertar o gerador nao conserta quem ja baixou");
```

**Substituir por:**

```
  const setEntry = (pack && pack.files ? pack.files : []).find(f => f.real === ".claude/settings.json");
  // O aviso saiu do campo `role` (truncado em 120 chars na tabela do manifesto, o que cortava a
  // frase no meio) e virou `obrigatorio`, com secao propria e sem corte. Ver D-126/wo0092.
  assert(setEntry && Array.isArray(setEntry.obrigatorio) && setEntry.obrigatorio.length >= 3, "pacote de update nao avisa os projetos JA instalados — consertar o gerador nao conserta quem ja baixou");
  const obrig = (setEntry.obrigatorio||[]).join(" ");
  assert(/APAGUE-A/.test(obrig), "a correcao obrigatoria do settings perdeu o caso do comentario // que invalida o JSON inteiro");
  assert(/`Write` no `allow`/.test(obrig), "a correcao obrigatoria nao cobra Write no allow do projeto instalado");
  assert(/additionalDirectories/.test(obrig), "a correcao obrigatoria nao cobra additionalDirectories no projeto instalado");
  assert(/Correcoes obrigatorias/.test(pack.manifest||""), "o manifesto nao emite a secao de correcoes obrigatorias — sem ela o aviso volta a viver so no campo truncado");
  assert(/APAGUE-A/.test(pack.manifest||""), "a secao de correcoes obrigatorias chega truncada ao manifesto — foi exatamente assim que o aviso morreu por dez versoes, cortado em 120 caracteres");
```

## Edição 8b — `validate.js` · check C47

**Âncora** (início do C46 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C46 as revogacoes alcancam o instalado (wo0090): as tres decisoes que MUDARAM comportamento estao na lista, e a varredura e por fato e comeca pelas skills", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C47 o fecho escreve o log e a medicao tambem e arquivo (wo0092): a skill wrap cria logs/, e nenhum pedido ao executor vai colado na mensagem", () => {
  const kit = T.buildCodeKitFiles();
  // (1) a skill que fecha o trabalho e a unica que roda no fim — e ate agora nao criava o log
  assert(/logs\/AAAA-MM-DD\.md/.test(kit.wrap), "a skill wrap GERADA nao escreve o log do dia — o CEREBRO manda o log existir e a skill que fecha o trabalho nunca o cria (IDEA-056 do mapsmith, sete sessoes reconstituidas de memoria)");
  assert(/Se o arquivo do dia NÃO existe, CRIE/.test(kit.wrap), "a skill wrap nao distingue criar de regenerar — foi assim que 'nao regenere' virou 'nao escreva' em campo");
  assert(/LOG-TEMPLATE/.test(kit.wrap), "a skill wrap manda escrever o log sem dizer onde esta o formato");
  // (2) medicao nao e WO, mas continua sendo arquivo
  Object.keys(T.NICHES).forEach(id => {
    const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
    S.workmode.codeMode = "yes";
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    S.workmode.codeMode = prev;
    assert(/Isso inclui pedido de medição/.test(cmd), id+": o CEREBRO ainda abre excecao para pedido de medicao ir colado na mensagem — foi a reclamacao literal do dono, e a excecao contradizia a propria razao da regra");
    assert(/nunca «vai colado na mensagem»/.test(cmd), id+": falta a formula que fecha a brecha — 'nao e WO' quer dizer 'outro artefato'");
    assert(/criar o arquivo à mão para caber/.test(cmd), id+": falta o sinal de que o pedido estava errado (o dono teve de criar o arquivo por conta)");
  });
  // (3) ler antes de sobrescrever, e a restricao do dono como MEDO e nao especificacao
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/Antes de destruir ou sobrescrever, leia o que está lá/.test(cmd), id+": higiene sem a regra de ler antes de escrever por cima");
    assert(/é um MEDO, não uma especificação/.test(cmd), id+": falta a metade que importa — restricao do dono se cumpre pelo objetivo, nao pela letra");
    assert(/obedecer contra o interesse de quem pediu/.test(cmd), id+": a regra nao nomeia o que ela evita");
    assert(/LE antes/.test(cmd), id+": tabela de gatilhos sem o evento de sobrescrever/apagar");
  });
  return "ok";
});
```

---

## Edição 9 — `meta/DECISIONS.md` · registra a D-126

**Âncora** (última linha do arquivo, fim da D-125):

```
`KIT_VERSION 1.110.1` (correção). **Custo de teto ZERO** — skills não passam por `buildInstr`: C28 idêntico à v1.110.0. `index.html` de **805.160 → 805.153** bytes: sete a menos, porque a correção **encolhe**. Harness **18/18, 90/90, 0 erros** (nenhum check novo — o C43 cresceu).
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-126 — A skill de fecho escreve o log; medição não é WO mas é arquivo; ler antes de sobrescrever; e a correção obrigatória para de chegar cortada (wo0092)

**Base.** Auditoria completa do Mapsmith (56 arquivos no mount) pedida pelo autor em 2026-08-12, antes de gerar o pacote de update dele. Quatro achados, todos medidos.

**(a) A skill `wrap` publicada nunca escreveu o log do dia.** O kit manda o log existir em três lugares — CEREBRO, tabela de gatilhos (D-122) e prompt de transferência (D-119) — e **a única skill que roda no fim do trabalho não o criava**. É a **IDEA-056** do Mapsmith, aberta desde 2026-08-01, com o custo medido lá: *sete sessões sem log, reconstituídas dos meta uma semana depois; duas datas sobraram quase vazias porque não havia de onde reconstituir*. E de novo em agosto: *três dias, dezesseis WOs, duas releases e três FIX sem um único log*. A skill passa a escrevê-lo, com a distinção da D-119 explícita — **se o arquivo do dia não existe, CRIE**.

**(b) O kit abria uma exceção que contradizia a própria regra.** O CEREBRO dizia: *«Nunca empurre bloco para o usuário colar no executor (…) Bloco colável só para o que não tem âncora nem commit (um pedido de medição, por exemplo).»* **A exceção foi escrita na wo0085 contra evidência de campo que já estava no mount** — em `mapsmith_7.md` o autor reclama exatamente disso: *«poderia ter gerado algum tipo de arquivo para elas (…) eu gerei um arquivo temporario e mandei ele ler, pois não coube na mensagem»*. Corrigido: medição **não é** ordem de trabalho — não tem âncora nem commit — **mas continua sendo arquivo**. «Não é WO» quer dizer «outro artefato», nunca «vai colado na mensagem». E fica o sinal de diagnóstico: *se o usuário precisou criar o arquivo à mão para caber, o pedido estava errado*.

**(c) Restrição do dono cumprida ao pé da letra, e sobrescrita sem leitura.** Duas ocorrências, dois projetos. No Mapsmith: *«todo esse problema se gerou porque vc seguiu literalmente as minhas solicitações? (…) você poderia ter falado, ou sido esperto e só copiado para um espaço seguro de backup»* — uma pasta de trabalho que ficou impossível de limpar por dias. Aqui: o `.claude/launch.json` sobrescrito sem leitura prévia na wo0090, com perda do que houvesse. A regra entra em duas metades: **ler antes de escrever por cima** (abrir custa um comando; recuperar custa a conversa inteira, e às vezes não dá) e **restrição do dono é MEDO, não especificação** — «não apague os originais» se atende copiando para fora do espaço de trabalho e seguindo, não parando. *Cumprir a letra e deixar o problema de pé é obedecer contra o interesse de quem pediu.* Com gatilho de evento próprio, porque é decisão que se toma no instante de agir.

**(d) A correção obrigatória do `settings.json` chegava truncada.** O aviso vivia no campo `role`, e a tabela do manifesto corta `role` em **120 caracteres**. O que o projeto recebia terminava em *«se houver uma linha comecando com // depois»* — sem dizer o que fazer, e sem chegar à parte do `Write`. **E isso importava agora:** o `.claude/settings.json` do Mapsmith não tem `Write`, não tem `additionalDirectories` e não tem `defaultMode` para disfarçar — as skills mandam criar log e relatório e a permissão nega. **É a metade mecânica da causa (a)**, e o aviso que existia para dizer isso vinha cortado. Correções obrigatórias ganham **campo próprio** (`obrigatorio`) e **seção própria** no manifesto, sem truncamento, explicitamente fora da regra «template genérico não substitui arquivo vivo» — não são merge, são conserto.

**O C37 mudou junto, e fez o trabalho dele.** Ele exigia `CORRECAO OBRIGATORIA` no `role` e reprovou quando a Edição 6 tirou o aviso de lá. A asserção passa a cobrar o campo novo **e** que ele chegue **inteiro ao manifesto** — o defeito que originou tudo.

**Nota de instrumento, e ela é do autor destas WOs.** Na wo0090 eu afirmei que o `.claude/skills/apply-wo/SKILL.md` do Mapsmith **não estava no mount**. Estava. Meu comando era `grep … || echo "arquivo ausente"`, e o `||` dispara quando o `grep` **não acha nada** — não quando o arquivo falta. **O instrumento traduziu «sem correspondência» por «inexistente», e isso foi publicado como fato medido**, inclusive no guia de entrega. Lido agora, o arquivo está íntegro e **não tem** o defeito do `/wrap`. É a mesma família do FIX-0010 do Mapsmith, invertida: lá o instrumento dizia que existia o que estava destruído; aqui disse que não existia o que estava inteiro. **Ausência relatada por instrumento é uma afirmação, e precisa da mesma prova que qualquer outra.**

**Check C47 novo**, com **sete provas negativas**: skill sem log · skill sem a distinção criar/regenerar · exceção da medição de volta · higiene sem a leitura prévia · restrição virando especificação · gatilho de sobrescrita ausente · correção obrigatória de volta ao campo truncado.

`KIT_VERSION 1.111.0`. **Custo de teto ZERO nas nove edições** — quinta leva seguida: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.110.1; folga do `narrative` em **289**. `index.html` de **805.153 → 808.190** bytes. Harness **18/18, 90/90 → 91/91, 0 erros**.
```

---

## Edição 10 — `meta/IDEAS.md` · registra a auditoria

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-12 — Auditoria completa do Mapsmith antes do pacote: quatro achados (D-126, wo0092)
Os 56 arquivos do projeto foram varridos **pelo fato**, e o pacote de update foi lido de novo. Quatro achados, três deles atingindo exatamente esse projeto: a skill `wrap` publicada **nunca escreveu o log** (a IDEA-056 deles, aberta desde 01/08, com sete sessões reconstituídas de memória como custo); o `settings.json` deles **não tem `Write` nem `additionalDirectories`** — a metade mecânica da mesma causa, porque a skill manda criar e a permissão nega; e **o aviso que existia para dizer isso chegava truncado em 120 caracteres** no manifesto, cortado no meio da frase.

**O achado mais desconfortável é sobre o kit, não sobre eles.** A regra «nunca empurre bloco para o usuário colar no executor» tinha uma exceção — *«um pedido de medição, por exemplo»* — que **eu escrevi na wo0085 contra evidência de campo que já estava no mount**: em `mapsmith_7.md` o autor reclama literalmente de receber medição colada na mensagem e conta que teve de criar o arquivo à mão. «Não é WO» virou «vai colado», quando o certo é «é outro artefato».

**E uma nota de instrumento que vale mais que os quatro achados.** Na wo0090 afirmei que uma skill do Mapsmith não estava no mount. Estava — meu comando era `grep … || echo "ausente"`, e o `||` dispara quando o grep **não acha nada**. **Ausência relatada por instrumento é uma afirmação e precisa de prova, igual a qualquer outra.** É o FIX-0010 deles invertido: lá o instrumento dizia que existia o que estava destruído; aqui disse que não existia o que estava inteiro.

**Fecha a IDEA-056 do Mapsmith pelo lado do kit** — a skill agora escreve o log, com a distinção criar/regenerar explícita. Vale avisá-los ao entregar o pacote: a ideia deles sai de `em estudo` porque a ferramenta mudou, não porque foi descartada.
```

---

## Fora de escopo

- **Corrigir o `settings.json` do Mapsmith diretamente** — não é papel deste repositório. A seção «Correções obrigatórias» do pacote é o canal.
- **Um molde de sonda/medição** — o texto novo diz «script de sonda ou `.md` curto»; formalizar o molde continua esperando um projeto pedir (D-122).
- **As demais ideias abertas do Mapsmith** (IDEA-060, 067, 070…) — são de produto deles, não do kit.
- **Sand-Land-Map** — sai do mount por escolha do autor; o pacote dele vem depois.

## Armadilhas desta WO

- **Fim de linha:** template é **CRLF**, `validate.js` é **LF**. As Edições 4, 5, 6 e 7 têm âncora multi-linha no template — se não casar, ancore só na primeira linha e insira o resto. Confira ao fim: **0 LF soltos**.
- **A Edição 6 tem aspas escapadas** (`` `\"../\"` ``) dentro de um literal. Copie exatamente; erro aqui quebra o build.
- **A Edição 7 usa crase de template string** (`` `### \`${f.real}\`` ``) — as barras invertidas antes das crases internas são obrigatórias.
- **A Edição 4 insere ANTES da regra da wo0088**, que fica intacta logo abaixo. Se o `git diff` mostrar «Quem abre, fecha» sumindo, PARE.
- **A Edição 3 é substituição, não inserção.** A frase «Bloco colável só para o que não tem âncora nem commit…» tem de **sair**. Se ela sobreviver ao lado do texto novo, o CEREBRO fica dizendo as duas coisas — e o C47 não pega isso (ele afirma presença, não ausência). **Confira no `git diff`.**
- **Números de check:** C47 é o próximo livre (C46 é da wo0090). O C37 é ajustado, não recriado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. *(O `meta/STATUS.md` fica para o `/wrap`.)*
- [ ] **Inventário declarado: 4 achados, 5 regiões no template, 2 pontos no `validate.js`.** Divergiu, **PARE e reporte**.
- [ ] **Na Edição 3, a frase antiga saiu** — `grep -c "um pedido de medição, por exemplo" src/index.template.html` deve dar **0**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 91/91 checagens, 0 erros**, com **C47 e C37 verdes**.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`.
- [ ] `index.html` com **808.190 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildCodeKitFiles()` (Edição 2), `buildClaudeMd()` (3), `HYGIENE_RULES` (4), `TRIGGERS_BASE` (5) e `buildUpdatePack()` (6 e 7). O C47 cobre as quatro primeiras; o C37 cobre as duas últimas gerando o pacote de verdade.
  - **Prova de vida:** o harness verde não prova que a seção nova **sai legível** — o defeito (d) era exatamente um texto certo saindo cortado. **Leia o artefato:** gere o pacote pelo `index.html` (nicho qualquer, Modo Code ligado) e abra o `_UPDATE-MANIFEST.md`: deve haver a seção **«Correcoes obrigatorias»** com **três itens** sob `.claude/settings.json`, e o item do `Write` deve terminar em *«…para de funcionar no dia em que o modo mudar.»* — **frase inteira, sem corte**. Depois force o vermelho: renomeie `obrigatorio` para `obrigatorio_x` na Edição 6, rode o harness, confirme que o **C37 falha**, e desfaça.
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Se o teste manual baixou o pacote, apague e diga onde estava. **Leia antes de sobrescrever** qualquer arquivo que já exista — inclusive o `.claude/launch.json`, que foi perdido assim na wo0090.

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados · validação (C28, C47, C37, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia** — a partir desta WO, a sua própria skill manda.

> **Para o `/wrap`:** o `meta/STATUS.md` cita `v1.110.1` e `90/90`. Atualize as vivas para `v1.111.0` e `91/91`, cite o **C47** antes do C46, acrescente **D-126**. Orçamento inalterado. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260812-wo0092-o-fecho-escreve-o-log.md
```

```
git commit -m "feat(kit): a skill de fecho escreve o log, e medicao tambem e arquivo" -m "Auditoria dos 56 arquivos do mapsmith antes de gerar o pacote de update dele. A skill wrap publicada nunca escrevia o log do dia: o kit manda o log existir em tres lugares e a unica skill que roda no fim nao o criava. E a IDEA-056 deles, aberta desde 01/08, com sete sessoes reconstituidas de memoria como custo." -m "O settings.json deles nao tem Write nem additionalDirectories - a metade mecanica da mesma causa, porque a skill manda criar e a permissao nega - e o aviso que existia para dizer isso chegava TRUNCADO em 120 caracteres no manifesto, cortado no meio da frase. Correcoes obrigatorias ganham campo e secao proprios, sem corte, fora da regra de nao substituir arquivo vivo: nao sao merge, sao conserto." -m "A regra de nunca empurrar bloco para o dono colar tinha uma excecao para pedido de medicao, escrita contra evidencia de campo que ja estava no mount. Medicao nao e ordem de trabalho, mas continua sendo arquivo: nao e WO quer dizer outro artefato, nunca vai colado na mensagem." -m "Entra tambem ler antes de sobrescrever, e restricao do dono como MEDO e nao especificacao: nao apague os originais se atende copiando para fora do espaco de trabalho e seguindo. Cumprir a letra e deixar o problema de pe e obedecer contra o interesse de quem pediu. Duas ocorrencias, dois projetos." -m "Check C47 com sete provas negativas; C37 acompanha o campo novo. Custo de teto zero. wo0092, D-126."
```

```
git push
```
