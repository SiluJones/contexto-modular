# WO 0129 — o canal do chat vira eixo do kit, e a casa se converte na mesma leva

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco medio. Dezessete edicoes, oito no `src/index.template.html`
> (CRLF), uma delas um bloco de ~30 linhas; nenhuma cria arquivo novo alem do que o chat ja gravou.
> **Pre-requisito:** commit `6b5ab10`, `main` = `origin/main`. Fora do indice, so o previsto (lista na Edicao 0).
> Harness em **19/19 · 105/105 · 0 erros** antes de qualquer edicao.
> **Base:** analise `meta/analises/261013-ANALISE-modo-direto-na-maquina.md`, aceita inteira pelo dono em 2026-10-13.
> **Depende de:** wo0128 (aplicada, `c5ebe6f`; fecho `4cc5557`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** um por linha, com o `sha1sum` que o chat mediu
> ao grava-los. A Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu
> no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `8b4260662f746f504c478d91128e24f344a00299  INSTRUCOES-DO-PROJETO.md` (reescrito inteiro pelo chat, LF)
> - `cf226576e72caccbd841bd5c78ed704c30266230  meta/analises/261013-ANALISE-modo-direto-na-maquina.md` (status + desvio, LF)
> - `59bf23179e63eb269c1d937367d33ebb4fea47f8  logs/2026-10-13.md` (novo, secoes do chat, LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO (coluna «depois» do checklist).
> Se ja existir, **PULE** e diga no relatorio.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: a `D-157` entra aqui. O `STATUS.md` e a
> secao do Code no log de hoje sao do `/wrap`.

> **Ancoras lidas em** (lidas pelo chat NESTE turno, no disco, HEAD `6b5ab10`; todas aplicadas por script
> numa replica `git archive HEAD | tar -x` que recusou ancora com 0 ou 2+ ocorrencias — 17 de 17 bateram uma vez):
> - `src/index.template.html` — a linha CSS `.modebtn.mode-asu`; o `desc:` do modo ASU em `WORK_MODES`; a linha `function codeModeOn()`; as duas linhas do ritual em `buildInstr()` (`Antes de qualquer ação, leia nesta ordem` / `Releia o mount ANTES`); a linha `**Nome de download:**`; a linha `mande o Code medir`; o comentario `// Tecnicas especificas do projeto (sand-land FK/DEC-018)`; e, em `buildWoTemplate()`, a linha literal `> **Ancora semantica:**`
> - `validate.js` — a primeira assercao do `C14`; a clausula `["CLAUDE.md: vocabulario de ato"` do `C43`; a linha de abertura do `G25`
> - `meta/workorders/_TEMPLATE.md` — a linha `> **Ancora semantica:**`
> - `meta/CEREBRO.md` — os itens 5 e 6 do «Ritual de início de sessão»
> - `meta/IDEAS.md` — o titulo da `i-N62`
> - `.gitignore` e `meta/DECISIONS.md` — o fim do arquivo

---

## 1. Por que

A analise de 13/10 estudou os tres projetos que ja rodam com o chat lendo e gravando na pasta (GameDataHub,
Sand-Land-Map, satelite-web). Os tres concordaram em tudo o que e estrutural, sem terem combinado, e
divergiram so onde o mount impunha a regra pelo meio. O kit, enquanto isso, gera **zero** linhas sobre o
canal novo e **67** sobre o mount.

A pergunta da `i-N62` tinha premissa errada: nao e uma terceira raia, sao **dois eixos** — quem executa
(`Code`) e por onde o chat le (**canal**). Esta WO:

1. poe o canal no gerador como o botao **Mount**, desligado por padrao (= pasta vinculada). Ligado, as
   Instrucoes saem **identicas** as de hoje;
2. escreve os nove itens do canal pasta: tres nas Instrucoes (ritual em dois tempos, arquivo no lugar
   definitivo, Git so leitura) e os nove numa secao nova do CEREBRO gerado, que rotula o resto do texto de
   mount como **reserva** em vez de reescreve-lo;
3. poe a linha do `sha1sum` no molde de WO — e esta WO ja a usa;
4. converte a casa: Instrucoes reescritas pelo chat (ja no disco), secao «Canal do chat» no CEREBRO,
   o molde de WO, e tres clausulas novas no `C43` que conferem os dois lados;
5. de passagem, fecha a pendencia 5 do handoff de 12/10: `.claude/settings.local.json` no `.gitignore`.

## 2. Contexto factual — medido na replica, nao deduzido

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 105/105 | **19/19 · 106/106** | `node validate.js` (ultimas duas linhas) |
| Clausulas do `C43` | 43 | **46** | `node validate.js \| grep -oE "em [0-9]+ clausulas"` |
| `index.html` gerado | 889.971 bytes | **895.747 bytes** | a linha `OK:` do `node build.js` |
| `C28`, pior nicho | padrao 6622 · +Code 514 · combo 7508 | padrao **6603** · +Code **546**/550 · combo **7521**/7600 | linha do `C28` no harness |

> **Os bytes do `index.html` sao da ARVORE DE TRABALHO**, como o `build.js` imprime — a replica tem o
> template em CRLF como a sua maquina (`attr/text eol=crlf`) e reproduziu os 889.971 de hoje antes de editar.

- **O canal pasta custa MENOS teto que o mount** no padrao (6.603 contra 6.622 no `narrative`).
- **O incremento do Code foi de 514 a 546, num orcamento de 550.** Esta no limite; registre no relatorio.
- **Duas provas negativas rodadas e restauradas na replica:** `GIT_OPTIONAL_LOCKS=0` removido do
  `meta/CEREBRO.md` → `C43` vermelho («a superficie INSTALADA `meta/CEREBRO.md` nao tem a clausula 'CEREBRO:
  git do chat so le'»); a palavra «mount» injetada no ramo pasta do ritual → `C105` vermelho em todos os nichos.

**`numstat` previsto** (`git diff --numstat`, com `--ignore-cr-at-eol` se o seu git acusar fim de linha):

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 42 | 4 |
| `index.html` | 42 | 4 |
| `validate.js` | 37 | 1 |
| `meta/CEREBRO.md` | 15 | 1 |
| `meta/DECISIONS.md` | 14 | 0 |
| `meta/workorders/_TEMPLATE.md` | 3 | 0 |
| `.gitignore` | 3 | 0 |
| `meta/IDEAS.md` | 1 | 1 |

Os tres arquivos do chat (cabecalho) entram no mesmo commit, sem edicao sua: confira so o `sha1sum`.

## Inventario

Dezessete edicoes, de duas origens: **itens 1–11** saem da recomendacao da analise (secao «Recomendacao»,
nove itens + o eixo + o harness); **itens 12–17** sao a conversao da casa e o registro. A lista foi
montada a partir do script que as aplicou na replica — ela e a fonte, nao uma transcricao.

**Fim de linha.** Os blocos abaixo estao em LF. `src/index.template.html`, `meta/CEREBRO.md`,
`meta/DECISIONS.md`, `meta/workorders/_TEMPLATE.md` e `validate.js` estao em **CRLF na sua arvore de
trabalho** (no indice, LF): **preserve o fim de linha de cada arquivo** — compare ancora e texto com os
`\r` removidos e grave com o fim de linha que o arquivo ja tinha. Ancoras multi-linha: so a Edicao 4.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; `git log -1 --oneline` = `6b5ab10`.
2. `sha1sum INSTRUCOES-DO-PROJETO.md meta/analises/261013-ANALISE-modo-direto-na-maquina.md logs/2026-10-13.md`
   — os tres iguais ao cabecalho. Diferente = **PARE e reporte**.
3. `git status --short` = exatamente: ` M INSTRUCOES-DO-PROJETO.md`, ` M meta/analises/261013-ANALISE-modo-direto-na-maquina.md`,
   `?? logs/2026-10-13.md`, `?? meta/workorders/261013-wo0129-canal-do-chat-vira-eixo.md`, `?? .claude/launch.json`,
   `?? .claude/settings.local.json`. Qualquer outra linha = **PARE e reporte**.
4. `node build.js` e `node validate.js`: `889971` bytes e `105/105`. Diferente = **PARE e reporte**.

## Edicao 1 — `src/index.template.html` — cor do botao novo

**Modo:** INSERIR o texto numa linha nova logo DEPOIS da ancora.

**Ancora** (ocorre exatamente 1 vez):

````
  .modebtn.mode-asu{--mc:var(--teal)}
````

**Texto:**

````
  .modebtn.mode-mount{--mc:var(--ink-dim)}
````

## Edicao 2 — `src/index.template.html` — o eixo canal entra como modo; desligado = pasta vinculada (padrao)

**Modo:** INSERIR o texto numa linha nova logo DEPOIS da ancora.

**Ancora** (ocorre exatamente 1 vez):

````
    desc:"Saída via ASU (patch) — edições viram instrução .yaml para baixar e aplicar; escrita nova/rolante sai inteira." },
````

**Texto:**

````
  { id:"mountMode", key:"mount", label:"Mount", glyph:"⇪", cls:"mode-mount",
    desc:"Chat SEM pasta vinculada (site sem vínculo, outra conta) — o repositório chega ao Projeto achatado pelo FlatDrop e o chat entrega arquivos para baixar. Desligado (padrão): o chat lê e grava na pasta do projeto." },
````

## Edicao 3 — `src/index.template.html`

**Modo:** INSERIR o texto numa linha nova logo DEPOIS da ancora.

**Ancora** (ocorre exatamente 1 vez):

````
function codeModeOn(){ return !!(STATE.workmode && STATE.workmode.codeMode === "yes"); }
````

**Texto:**

````
/* Canal do chat (wo0129, D-157): padrao = pasta vinculada (o chat le e grava no disco).
   mountMode "yes" = canal de reserva (mount do Projeto, FlatDrop, entrega para baixar). */
function mountModeOn(){ return !!(STATE.workmode && STATE.workmode.mountMode === "yes"); }
````

## Edicao 4 — `src/index.template.html` — ritual em dois tempos (item 1) no canal pasta; o texto de mount fica identico no ramo de reserva

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
  lines.push(`Antes de qualquer ação, leia nesta ordem: ${readOrder.map(f=>`\`${f}\``).join(" → ")}${coreFiles.some(n=>/CHANGELOG/i.test(n))?" → última entrada do `CHANGELOG.md`":""}. E reveja o mount a cada turno (novos \`.txt\`/arquivos), sem esperar eu sinalizar.`);
  lines.push("Releia o mount ANTES de responder e de qualquer ferramenta, nunca de memória. Mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa. Nota `.txt` é entrada transitória, a fundir nos meta/; se não houver, siga.");
````

**Texto:**

````
  const ordemLeitura = `${readOrder.map(f=>`\`${f}\``).join(" → ")}${coreFiles.some(n=>/CHANGELOG/i.test(n))?" → última entrada do `CHANGELOG.md`":""}`;
  if(mountModeOn()){
    lines.push(`Antes de qualquer ação, leia nesta ordem: ${ordemLeitura}. E reveja o mount a cada turno (novos \`.txt\`/arquivos), sem esperar eu sinalizar.`);
    lines.push("Releia o mount ANTES de responder e de qualquer ferramenta, nunca de memória. Mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa. Nota `.txt` é entrada transitória, a fundir nos meta/; se não houver, siga.");
  } else {
    lines.push(`Ao ABRIR a conversa, leia nesta ordem: ${ordemLeitura}. Em TODO turno, ANTES de responder e de qualquer ferramenta: ${codeModeOn() ? "`git log -3`, `git status` e" : "liste a pasta e"} a pasta-pai, nunca de memória.`);
    lines.push("Mensagem cheia de pedidos é onde essa releitura mais falha. Nota `.txt` da pasta-pai: leia inteira, funda nos meta/ e arquive MOVENDO.");
  }
````

## Edicao 5 — `src/index.template.html` — itens 2 e 3 nas Instrucoes; o nome de download so existe no canal de reserva

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
  lines.push("**Nome de download:** arquivo para baixar usa o nome SIMPLES (ex.: `IDEAS.md`), sem prefixo de pasta (não `meta_IDEAS.md`). Só prefixe para desambiguar dois arquivos de mesmo nome.");
````

**Texto:**

````
  lines.push(mountModeOn()
    ? "**Nome de download:** arquivo para baixar usa o nome SIMPLES (ex.: `IDEAS.md`), sem prefixo de pasta (não `meta_IDEAS.md`). Só prefixe para desambiguar dois arquivos de mesmo nome."
    : "**Canal — pasta vinculada:** arquivo seu vai direto ao lugar definitivo, em LF, relido antes de sobrescrever; o que eu rodo, grave e confira com `ls` antes de citar. Git só leitura (`GIT_OPTIONAL_LOCKS=0`). Resto: CEREBRO, «Canal do chat».");
````

## Edicao 6 — `src/index.template.html` — com disco o chat mede o que esta no disco; o Code mede o que precisa rodar

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
  if(codeModeOn()) lines.push("**Arquivo não lido não se deduz — mande o Code medir.**");
````

**Texto:**

````
  if(codeModeOn()) lines.push(mountModeOn() ? "**Arquivo não lido não se deduz — mande o Code medir.**" : "**Arquivo não lido não se deduz — leia do disco; o Code mede o que roda.**");
````

## Edicao 7 — `src/index.template.html` — os nove itens da analise, como secao do CEREBRO gerado

**Modo:** INSERIR o texto numa linha nova logo ANTES da ancora.

**Ancora** (ocorre exatamente 1 vez):

````
  // Tecnicas especificas do projeto (sand-land FK/DEC-018): o unico conteudo que sobrevive a um rebase do kit
````

**Texto:**

````
  // Canal do chat (wo0129, D-157; analise 261013): com a pasta vinculada (padrao), o chat le e grava no
  // disco. O texto de mount do resto do arquivo NAO se reescreve: uma frase o rotula como reserva.
  if(!mountModeOn()){
    const comCode = codeModeOn();
    L.push("");
    L.push("## Canal do chat — pasta vinculada");
    L.push("");
    L.push("> Este projeto roda com o chat **lendo e gravando na pasta do projeto** (app desktop com a pasta vinculada). Toda menção a mount, `_MANIFEST`, FlatDrop, upload e «nome de download» no resto deste arquivo é **canal de reserva**: vale só quando a conversa roda sem a pasta (site sem vínculo, outra conta). Se a pasta não responder, diga qual canal você tem e siga a reserva — nunca trabalhe de memória.");
    L.push("");
    L.push("- **Ritual em dois tempos.** Ao abrir a conversa, os arquivos de contexto na ordem acima. Em todo turno, só o barato e verificável: " + (comCode ? "`git log -3 --oneline`, `git status --short`" : "a listagem da pasta do projeto") + " e a listagem da pasta-pai; arquivo de contexto que mudou se relê. Ler tudo em todo turno não escala, e regra dura que ninguém cumpre ensina a ignorar as outras. O vigia é o `Base:` do fecho: turno que afirma estado sem leitura feita nele falhou o ritual.");
    L.push("- **Git pelo chat é só leitura, sempre com `GIT_OPTIONAL_LOCKS=0`.** Um `git status` comum grava `.git/index.lock`, e o chat não consegue apagá-lo: o Git do dono fica travado até alguém remover à mão. " + (comCode ? "Commit e push são do Code." : "Commit é do dono: entregue o bloco pronto."));
    L.push("- **Arquivo que você autora vai direto para o lugar definitivo** — nunca para download nem para pasta provisória. Em LF; releia do disco antes de sobrescrever, porque outro escritor pode ter mexido. O que o dono vai rodar ou abrir é gravado e conferido com `ls` **antes** da resposta que o cita.");
    if(comCode) L.push("- **A WO confere o que você gravou.** Cada arquivo que você gravou e a WO vai versionar entra no cabeçalho dela com o `sha1sum` medido ao gravar; a Edição 0 confere, e hash diferente para a aplicação. No mount, o meio impedia dois escritores; no disco, quem impede é o hash.");
    L.push("- **Um dono por documento, escrito.** O meio não impede mais dois escritores no mesmo arquivo; só a regra impede. " + (comCode
      ? "Padrão: o chat escreve inteiros a análise, a WO, CONTEXT, CEREBRO, Instruções e GLOSSARY; o Code escreve o código, STATUS, DECISIONS, CHANGELOG e a sua seção do log; IDEAS e todo doc grande e vivo mudam por WO."
      : "Padrão: o chat escreve os documentos; o dono revisa e versiona.") + " O projeto pode mudar a divisão — registrando em DECISIONS —, nunca deixá-la implícita.");
    L.push("- **Notas e relatórios moram na pasta-pai,** fora do Git. Leia inteira a que chegou, funda nos meta/ e arquive **movendo** para `notas-arquivadas/` dentro dela — mover, nunca apagar. Liste a pasta antes e depois: arquivo que some sem comando que o cite é perda, não arquivamento.");
    L.push("- **Segredo não mora em pasta que o chat lê a cada turno.** `.env`, cookie e token ficam no repositório (ignorados pelo Git) ou fora das pastas concedidas: o que está na pasta-pai entra no contexto todo turno.");
    L.push("- **As Instruções do Projeto têm duas cópias, e a fonte é o arquivo do repositório.** Mudança nas Instruções muda primeiro o arquivo; o fecho pede ao dono que cole no painel do Projeto. O tamanho sai de `wc -m` no turno, nunca de número gravado em documento.");
    L.push("- **O terminal do chat não é o do dono.** É uma VM Linux: cada comando começa do zero, tem teto de cerca de 3 minutos, e processo em segundo plano morre com a chamada. Arquivo «modificado» só por fim de linha (`i/lf w/crlf`) não mudou. Apagar vem desligado: peça a permissão, não contorne.");
  }
````

## Edicao 8 — `src/index.template.html` — item 4 no molde gerado

**Modo:** INSERIR o texto numa linha nova logo ANTES da ancora.

**Ancora** (ocorre exatamente 1 vez):

````
    "> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um",
````

**Texto:**

````
    "> **Arquivos que o chat gravou no disco e esta WO versiona:** um por linha, com o `sha1sum` que o chat mediu",
    "> ao grava-los. A Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu",
    "> no arquivo depois do chat — **PARE e reporte**, nao commite por cima. Sem pasta vinculada, apague a linha.",
````

## Edicao 9 — `validate.js` — C14 passa a conferir os dois canais

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
  assert(/reveja o mount a cada turno/i.test(T.buildInstr(n)),"Instr sem gatilho de reler o mount por turno");
````

**Texto:**

````
  T.STATE.workmode={mountMode:"yes"};
  assert(/reveja o mount a cada turno/i.test(T.buildInstr(n)),"Instr (canal mount) sem gatilho de reler o mount por turno");
  T.STATE.workmode={};
  assert(/Em TODO turno, ANTES de responder/.test(T.buildInstr(n)),"Instr (canal pasta, o padrao) sem o ritual de turno");
````

## Edicao 10 — `validate.js` — C43: 43 -> 46 clausulas

**Modo:** INSERIR o texto numa linha nova logo ANTES da ancora.

**Ancora** (ocorre exatamente 1 vez):

````
    ["CLAUDE.md: vocabulario de ato", /`apply` · `wrap` · `probe` · `explore`/, ["claudeMd"]],
````

**Texto:**

````
    // wo0129 (D-157): o canal pasta vinculada. As tres valem nos dois lados — a casa roda nesse canal
    // desde 2026-10-12, e o gerado o tem por padrao.
    ["CEREBRO: git do chat so le",       /GIT_OPTIONAL_LOCKS=0/,         ["cerebro"]],
    ["CEREBRO: dono por documento",      /Um dono por documento, escrito/, ["cerebro"]],
    ["modelo de WO: hash do que o chat gravou", /o `sha1sum` que o chat mediu/, ["woTemplate"]],
````

## Edicao 11 — `validate.js` — check novo: 105 -> 106, logo antes do G25

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
check("G25 ritual cita o doc-ancora de cada nicho; Instr nao cita .md inexistente (choque CONTEXT)", () => {
````

**Texto:**

````
check("C105 o canal do chat e um eixo (wo0129, D-157): pasta vinculada por padrao, mount como reserva, e o texto de cada canal so aparece no seu", () => {
  const S=T.STATE; const prev=Object.assign({}, S.workmode||{});
  const fora=[];
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    [false,true].forEach(code => {
      S.workmode = { codeMode: code ? "yes" : "" };
      const iD=T.buildInstr(n), cD=T.buildClaudeMd(n);
      S.workmode = { codeMode: code ? "yes" : "", mountMode:"yes" };
      const iM=T.buildInstr(n), cM=T.buildClaudeMd(n);
      const tag=id+(code?"+Code":"");
      if(!/GIT_OPTIONAL_LOCKS=0/.test(iD)) fora.push(tag+": Instr do canal pasta sem o git so leitura");
      if(/mount/i.test(iD)) fora.push(tag+": Instr do canal pasta ainda fala em mount");
      if(/Nome de download/.test(iD)) fora.push(tag+": Instr do canal pasta manda nome de download");
      if(!/## Canal do chat — pasta vinculada/.test(cD)) fora.push(tag+": CEREBRO do canal pasta sem a secao");
      if(!/canal de reserva/.test(cD)) fora.push(tag+": CEREBRO do canal pasta nao rotula o mount como reserva");
      if(/sha1sum/.test(cD) !== code) fora.push(tag+": hash da WO "+(code ? "ausente com o Code" : "vazou sem o Code"));
      if(!/reveja o mount a cada turno/i.test(iM)) fora.push(tag+": Instr do canal mount perdeu o ritual de reserva");
      if(!/Nome de download/.test(iM)) fora.push(tag+": Instr do canal mount perdeu o nome de download");
      if(/Canal do chat — pasta vinculada|GIT_OPTIONAL_LOCKS/.test(iM+cM)) fora.push(tag+": texto do canal pasta vazou no mount");
      if(!code && iM.length > T.INSTR_TETO) fora.push(tag+": Instr do canal mount "+iM.length+">"+T.INSTR_TETO);
    });
  });
  S.workmode = prev;
  assert(fora.length===0, fora.join(" | "));
  return "ok (19 nichos x Code x canal)";
});

check("G25 ritual cita o doc-ancora de cada nicho; Instr nao cita .md inexistente (choque CONTEXT)", () => {
````

## Edicao 12 — `meta/workorders/_TEMPLATE.md` — o molde da casa recebe o mesmo texto do gerado (C43)

**Modo:** INSERIR o texto numa linha nova logo ANTES da ancora.

**Ancora** (ocorre exatamente 1 vez):

````
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um
````

**Texto:**

````
> **Arquivos que o chat gravou no disco e esta WO versiona:** um por linha, com o `sha1sum` que o chat mediu
> ao grava-los. A Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu
> no arquivo depois do chat — **PARE e reporte**, nao commite por cima. Sem pasta vinculada, apague a linha.
````

## Edicao 13 — `meta/CEREBRO.md` — item 5 do ritual parava de valer em 12/10

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
5. **Se a tarefa for mexer no `index.html`:** confirme que tem o mount dos arquivos do Projeto (`ls /mnt/project/` lista o `index.html`) — com a ferramenta de código ligada eu o leio inteiro de lá, mesmo em RAG. Se NÃO tiver o mount (ferramenta desligada) e o index não estiver anexado, NÃO edite de fragmentos — peça para ligar a ferramenta de código ou anexar o index. (Ver «Transferência e fidelidade» abaixo.)
````

**Texto:**

````
5. **Se a tarefa for mexer no `index.html`:** leia `src/` e o `index.html` direto do disco — a pasta do repositório está vinculada (ver «Canal do chat» logo abaixo). Sem a pasta, vale a reserva: o mount ou o arquivo anexado, e nunca editar de fragmentos (ver «Transferência e fidelidade»).
````

## Edicao 14 — `meta/CEREBRO.md` — a secao da casa, logo depois do item 6, com as clausulas que o C43 confere

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
6. Antes de executar, confirma em uma frase o que entendeu da tarefa.
````

**Texto:**

````
6. Antes de executar, confirma em uma frase o que entendeu da tarefa.

## 🗂️ Canal do chat — pasta vinculada (D-157)

> Desde 2026-10-12 (`D-156`) o chat lê e grava **direto na pasta do repositório**, pelo app desktop. Toda menção a mount, `/mnt/project`, `_MANIFEST`, FlatDrop, upload e «nome de download» no resto deste arquivo é **canal de reserva**: vale só quando a conversa roda sem a pasta. Se a pasta não responder, diga qual canal você tem e siga a reserva — nunca trabalhe de memória. É a seção que o kit gera desde a wo0129, adaptada à casa.

- **Ritual em dois tempos.** Ao abrir a conversa: este CEREBRO, a «Última sessão» do `meta/STATUS.md` (o arquivo passa de 270 mil caracteres; o resto, sob demanda) e o topo do CHANGELOG. Em todo turno: `git log -3 --oneline`, `git status --short` e a listagem da pasta-pai `Contexto\`. Commit novo que toque um desses arquivos manda relê-lo. O vigia é o `Base:` do fecho.
- **Git pelo chat é só leitura, sempre com `GIT_OPTIONAL_LOCKS=0`.** Commit e push são do Code. Arquivo novo que o chat cria no repo fica fora do índice até a WO seguinte versioná-lo.
- **Arquivo que o chat autora vai direto para o lugar definitivo**, em LF, relido do disco antes de sobrescrever. Nada de entregar para download o que tem lugar no repo.
- **A WO confere o que o chat gravou:** o cabeçalho lista o `sha1sum` de cada arquivo gravado pelo chat que ela versiona, e a Edição 0 confere antes de tudo.
- **Um dono por documento, escrito.** Nesta casa: o chat grava inteiros `meta/analises/`, as WOs, o `INSTRUCOES-DO-PROJETO.md`, as cartas e o handoff da pasta-pai, e as seções do chat no log do dia; o Code escreve `src/`, `index.html`, `validate.js`, `meta/STATUS.md` (pelo `/wrap`) e a sua seção do log; `meta/CEREBRO.md`, `meta/DECISIONS.md`, `meta/IDEAS.md`, `meta/CHANGELOG.md` e os moldes mudam por WO.
- **Notas e relatórios na pasta-pai `Contexto\`**, fora do Git. O chat lê inteiro, registra e arquiva **movendo** para `notas-arquivadas\` — mover, nunca apagar —, listando antes e depois.
- **Segredo não mora na pasta-pai** nem em nota `.txt`: o que está ali entra no contexto todo turno.
- **As Instruções:** a fonte é o `INSTRUCOES-DO-PROJETO.md` do repo; o que o assistente lê é a cópia colada no painel, e só o dono a atualiza. WO que muda as Instruções termina pedindo para recolar. Tamanho por `wc -m`, no turno.
- **O terminal do chat é uma VM Linux, não o PowerShell do dono:** comando começa do zero, teto de cerca de 3 minutos, nada em segundo plano; fim de linha `i/lf w/crlf` não é mudança. O harness roda ali (`node build.js` + `node validate.js`, com o `node_modules` do dono) numa réplica fora da pasta — nunca no repo vivo antes da WO.
````

## Edicao 15 — `meta/IDEAS.md`

**Modo:** TROCAR a ancora pelo texto.

**Ancora** (ocorre exatamente 1 vez):

````
## i-N62 — Um modo do KCM que trabalha DIRETO NA MÁQUINA (chat no app desktop com pasta conectada, só ele ou junto do modo Code) — ABERTA, gatilho: a próxima conversa, com os três projetos que já rodam assim
````

**Texto:**

````
## i-N62 — Um modo do KCM que trabalha DIRETO NA MÁQUINA (chat no app desktop com pasta conectada, só ele ou junto do modo Code) — DECIDIDA em 2026-10-13 (`D-157`, wo0129; análise `261013-ANALISE-modo-direto-na-maquina.md`)
````

## Edicao 16 — `.gitignore` — pendencia 5 do handoff de 12/10

**Modo:** ACRESCENTAR o texto no FIM do arquivo.

**Texto:**

````
# Permissoes locais do Claude Code: por maquina, nao se versionam (wo0129)
.claude/settings.local.json
````

Uma linha em branco antes do comentario.

## Edicao 17 — `meta/DECISIONS.md` — D-157 no fim do arquivo

**Modo:** ACRESCENTAR o texto no FIM do arquivo.

**Texto:**

````
## D-157 — O canal do chat vira eixo do kit: pasta vinculada por padrão, mount como reserva

**Data:** 2026-10-13 · **WO:** 0129 · **Análise:** `meta/analises/261013-ANALISE-modo-direto-na-maquina.md` · **Origem:** `i-N62`, `D-156` · **Base:** os três projetos do dono que já rodam no canal novo (GameDataHub `DEC-085`, Sand-Land-Map `DEC-079`, satelite-web `FIX-075`/`FIX-076`), lidos no disco em 2026-10-13 `[medido por instrumento]`.

**Decisão.** A pergunta da `i-N62` — terceira raia, variante do modo Code ou substituto do mount — tinha premissa errada: são **dois eixos independentes**, quem executa (`Code`) e por onde o chat lê e grava (**canal**). O gerador ganha o botão **Mount**: desligado (o padrão), as Instruções e o CEREBRO descrevem a pasta vinculada; ligado, sai o texto antigo, sem uma vírgula mudada. Os nove itens do canal pasta vêm todos de incidente medido nos três projetos: ritual em dois tempos, Git só leitura com `GIT_OPTIONAL_LOCKS=0`, arquivo do chat direto no lugar definitivo, `sha1sum` na Edição 0, um dono por documento escrito, notas na pasta-pai arquivadas movendo, segredo fora da pasta-pai, Instruções com fonte no repo e medidas por `wc -m`, e o ambiente da VM.

**O que NÃO se fez, e por quê.** As 67 menções a mount em `src/` e as 43 no CEREBRO gerado **ficam**: uma frase da seção nova as rotula como canal de reserva. Reescrevê-las apagaria o que volta a valer quando o canal mudar de novo (mudou três vezes em quatro dias em setembro) e o que ainda vale para contas sem o app desktop. O **FlatDrop** fica como ferramenta de exceção. **Custo de teto:** as Instruções do canal pasta custam menos que as de mount no padrão (o `C28` mede).

**A casa converte na mesma leva** (dogfooding): `INSTRUCOES-DO-PROJETO.md` reescrito pelo chat no canal novo, seção «Canal do chat» no `meta/CEREBRO.md`, linha do `sha1sum` no molde de WO. O `C43` passa a conferir três cláusulas novas nos dois lados (43 → 46).

**Sem caso rodado:** a combinação canal pasta × `Code = não` é desenho — os três projetos que fundamentam a decisão têm Code. Fica com o rótulo da `i-N61` até um projeto rodar nela.

**Não cortei versão.** O padrão do que o kit gera mudou, e isso justifica a v1.123.0 — decisão do dono, junto da reconstrução do CHANGELOG (`i-N59`).
````

Uma linha em branco entre o fim atual (o bloco da `D-156`) e o titulo da `D-157`.

## Edicao 18 — build e harness

`node build.js` → `OK: index.html (895747 bytes) a partir de 19 modulo(s) + template.`
`node validate.js` → `19/19`, `106/106`, `VERDE`. Copie para o relatorio, cruas: a linha do `C28`, a do `C43`
e a do `C105`.

## Edicao 19 — conferencia (de leitura de numero, com antes e depois)

`grep -c` conta LINHAS. Rode cada um ANTES (logo apos a Edicao 0) e DEPOIS; o relatorio traz os dois.

| Comando | Antes | Depois |
|---|---|---|
| `grep -c "^function mountModeOn" src/index.template.html` | 0 | 1 |
| `grep -c 'id:"mountMode"' src/index.template.html` | 0 | 1 |
| `grep -c "## Canal do chat — pasta vinculada" src/index.template.html` | 0 | 1 |
| ``grep -c 'o `sha1sum` que o chat mediu' src/index.template.html`` | 0 | 1 |
| `grep -c '^check("C105 ' validate.js` | 0 | 1 |
| `grep -c "Um dono por documento, escrito" validate.js` | 0 | 1 |
| `grep -c "^## D-157 " meta/DECISIONS.md` | 0 | 1 |
| `grep -c "^## 🗂️ Canal do chat" meta/CEREBRO.md` | 0 | 1 |
| `grep -c "GIT_OPTIONAL_LOCKS=0" meta/CEREBRO.md` | 0 | 1 |
| `grep -c "confirme que tem o mount dos arquivos do Projeto" meta/CEREBRO.md` | 1 | 0 |
| ``grep -c 'o `sha1sum` que o chat mediu' meta/workorders/_TEMPLATE.md`` | 0 | 1 |
| `grep -c "^## i-N62 .*DECIDIDA" meta/IDEAS.md` | 0 | 1 |
| `grep -c "^## i-N62 .*ABERTA" meta/IDEAS.md` | 1 | 0 |
| `grep -c "^.claude/settings.local.json" .gitignore` | 0 | 1 |

Depois do `git add`: `git status --short` nao lista mais `.claude/settings.local.json` (agora ignorado);
`.claude/launch.json` continua fora, nao rastreado, fora de escopo.

**De leitura** (nao cabe `grep`): abra o `index.html` gerado no navegador e confira que o grupo «modo» do
topo mostra **quatro** botoes — Grupo, Code, ASU, **Mount** — e que clicar em Mount muda a previa das
Instrucoes para o texto com «reveja o mount». Isso e do dono, se voce nao alcancar o navegador: diga no
relatorio que ficou para ele.

## Edicao 20 — commit e push (verde = sem perguntar)

```
git add src/index.template.html index.html validate.js meta/CEREBRO.md meta/DECISIONS.md meta/IDEAS.md meta/workorders/_TEMPLATE.md .gitignore INSTRUCOES-DO-PROJETO.md meta/analises/261013-ANALISE-modo-direto-na-maquina.md logs/2026-10-13.md meta/workorders/261013-wo0129-canal-do-chat-vira-eixo.md
git commit -m "feat(kit): canal do chat vira eixo, pasta vinculada por padrao e mount como reserva" -m "Os tres projetos que ja rodam com o chat na pasta concordaram no estrutural e divergiram onde o mount impunha a regra pelo meio. O gerador ganha o botao Mount (desligado = pasta vinculada): Instrucoes com ritual em dois tempos, arquivo no lugar definitivo e git so leitura com GIT_OPTIONAL_LOCKS=0; CEREBRO com a secao Canal do chat, nove itens, rotulando o texto de mount como reserva. Molde de WO ganha o sha1sum do que o chat gravou. A casa converte na mesma leva. C105 novo, C43 de 43 para 46 clausulas. D-157." -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push
```

## Relatorio

Na pasta-pai, `AAMMDD-HHMM-code-kcm-apply-wo0129.txt` (hora de `date +%y%m%d-%H%M`, rodado na hora). Traga:
o resultado da Edicao 0 (os tres hashes, o status), a tabela da Edicao 19 com antes e depois, as tres
linhas cruas do harness, o `git diff --cached --numstat` contra a tabela da secao 2, qualquer desvio, e o
commit com o resultado REAL do push. **Pendencia do dono a declarar:** recolar o `INSTRUCOES-DO-PROJETO.md`
no painel do Projeto — o painel ainda diz «18 nichos» e descreve o mount.

/wrap
