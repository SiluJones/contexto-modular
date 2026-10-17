# WO 0135 — no canal pasta, as Instrucoes e os prompts A, D, E, F param de mandar baixar, colar e anexar

> **Tipo:** mista — CODIGO (produto + harness) + DOC (o registro).
> **Config sugerida:** modelo padrao, esforco medio. 22 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`; todas as ancoras sao de UMA linha, e 10 delas trocam so o COMECO da linha (o resto fica como esta).
> **Pre-requisito:** HEAD = `01799b5`, `main` = `origin/main`. Harness em **19/19 · 109/109 · 0 erros**, v1.126.0.
> **Base:** `i-N66` e o inventario do chat de 16/10 (log do dia, «Conversa 7 (chat)»); escopo decidido pelo dono em 2026-10-17: Instrucoes e prompts A, D, E, F, check novo, P8/P11 para o IDEAS.
> **Depende de:** wo0134 (aplicada, `a74ddc2`; fecho `84cbde8`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `a6d98ad5a2baf74479c28c6619212561d114598f  logs/2026-10-16.md` (secao «Conversa 7 (chat)», LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO (Edicao 25). Se ja existir, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `01799b5`; recortadas do arquivo vivo, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `src/index.template.html` — no `PROMPTS_BASE`, as linhas `when` e `body` do prompt A, tres `L.push` do D, tres do E, o `when` e dois `steps.push` do F; em `buildInstr`, o titulo «Arquivos de contexto (no Projeto)», a linha dos logs e o ramo sem Code da entrega; `const KIT_VERSION`
> - `validate.js` — o comeco da linha `check("C27 leva sand-land (wo0070)`
> - `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.126.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — os titulos da `i-N66`, da `i-N68` e da `i-N69`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-162`, CHANGELOG, `i-N66`, `i-N68`, `i-N70`. A Edicao 19 toca o
> `meta/STATUS.md` so para o numero da versao (excecao da `D-158`). **O log do dia e do chat:** esta WO so o versiona pelo sha1, e o `/wrap` acrescenta a secao dele sem editar a do chat.

---

## 1. Por que

A `D-157` (wo0129) fez do canal um eixo do kit — pasta vinculada por padrao, mount como reserva — nas Instrucoes e no CEREBRO, mas nao nos prompts de setup. Em 16/10, ao colar o prompt E para fechar a conversa, o dono recebeu «gere o brief **para eu colar**» e «o arquivo pequeno vem inteiro **para eu baixar**» — frases do mount, no canal pasta. O inventario do chat achou mais tres linhas nas Instrucoes geradas (uma delas, sem o modo Code, manda «arquivo novo para baixar e substituir»). Esta WO da o ramo do canal a essas sete superficies e trava com um check. Corta a **v1.127.0** (`D-158`).

## 2. Contexto factual — medido na replica

**A tecnica das ancoras:** dez edicoes trocam so o **comeco** de uma linha longa por `!mountModeOn() ? "texto do canal pasta" : "<o comeco antigo>` — o resto da linha antiga continua igual e passa a ser o ramo do mount. Nenhum texto antigo e redigitado, e o canal mount sai byte a byte igual (conferido: as Instrucoes e os quatro prompts no mount, 19 nichos × Code × ASU, identicos ao HEAD).

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 109/109 | **19/19 · 110/110** (entra o `C109`) | `node validate.js index.html` |
| `C28` | `ok (padrao 5852/6900 · +Code 546/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7198/7600 · 304 configuracoes)` | `ok (padrao 5852/6900 · +Code 526/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7185/7600 · 304 configuracoes)` | linha do `C28` |
| `C109` | — | `ok (380 textos do canal pasta sem vocabulario do mount)` | linha do `C109` |
| `C54` | v1.126.0 | **v1.127.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 920.094 bytes | **922.276 bytes** | a linha `OK:` do `node build.js` |

- **O canal mount sai igual:** Instrucoes e os seis prompts no canal mount, 19 nichos × sem modo, Code, ASU e os dois — **532 textos identicos ao HEAD, 0 diferentes**.
- **O canal pasta encolhe:** as Instrucoes ficam **22** caracteres menores em todo nicho sem modo, e **42** menores com Code (`narrative` 6.379 → 6.337). O incremento do Code cai de 546 para **526** — a linha de entrega sem Code no canal pasta foi calibrada para nao subir o incremento acima de 550 (a primeira versao, mais curta, deu 575 e o `C28` acusou na replica).
- **Prova de que o `C109` acusa:** o `validate.js` desta WO rodado contra o `index.html` do HEAD fica vermelho no `C109`.

## Inventario

- **Superficies com vocabulario do mount no canal pasta: 7**, medidas no gerado da v1.126.0 (`buildInstr` e `PROMPTS_BASE[].body`, nicho `dev`, sem modo e com Code), por busca de `para (eu )?baixar|para eu colar como|_MANIFEST|no Projeto|arquivos do Projeto|Anexe`: Instrucoes — o titulo dos arquivos, a linha dos logs, a entrega sem Code; prompts — A, D, E, F. Os prompts B e C: 0 ocorrencias no canal pasta.
- **Fora, por decisao do dono:** os principios P8 e P11 (`BEHAVIORS_BASE`), que vao ao CEREBRO como reserva (`D-157`) — `i-N70`. E a frase «para eu colar no Code» do prompt E e das Instrucoes, que e sobre a linha `/apply-wo` e vale nos dois canais.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `01799b5`. Se diferente, **PARE e reporte**.
2. `sha1sum logs/2026-10-16.md` = o do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M logs/2026-10-16.md`, `?? .claude/launch.json`, `?? meta/workorders/261017-wo0135-canal-pasta-nos-prompts.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c '^check("C109 ' validate.js` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `src/index.template.html` · prompt A · quando usar, neutro de canal

**Ancora** (o `when` do prompt A; linha inteira):

```
    when:"Claude já lê os arquivos do Projeto sozinho; esta linha só confirma.",
```

**Substituir por:**

```
    when:"Claude já lê o contexto sozinho (os arquivos do Projeto, ou a pasta pelo ritual); esta linha só confirma.",
```

## Edicao 2 — `src/index.template.html` · prompt A · o corpo ganha o ramo do canal

**Ancora** (o comeco da linha `body` do prompt A; 1 ocorrencia — o resto da linha fica):

```
    body:(p,n)=>`Leia os arquivos do Projeto para se ambientar antes de responder.
```

**Substituir por:**

```
    body:(p,n)=>`${mountModeOn() ? "Leia os arquivos do Projeto para se ambientar antes de responder." : "Leia os arquivos de contexto na pasta do projeto, pelo ritual das Instruções, antes de responder."}
```

## Edicao 3 — `src/index.template.html` · prompt D · o material atual, no canal pasta

**Ancora** (a linha inteira):

```
      L.push("[Anexe os arquivos relevantes ou descreva o que existe]");
```

**Substituir por:**

```
      L.push(mountModeOn() ? "[Anexe os arquivos relevantes ou descreva o que existe]" : "[A pasta do projeto está vinculada: o que existe nela é o material — descreva aqui só o que não está lá]");
```

## Edicao 4 — `src/index.template.html` · prompt D · listar a pasta em vez do `_MANIFEST`

**Ancora** (o comeco da linha; o resto — o texto do `_MANIFEST` — vira o ramo do mount):

```
      L.push("Antes de gerar qualquer coisa: **se eu anexei um `_MANIFEST.md`**
```

**Substituir por:**

```
      L.push(!mountModeOn() ? "Antes de gerar qualquer coisa: **liste a pasta** e entenda o que JÁ existe nela. **Não regenere o que já existe** — só complemente o que falta." : "Antes de gerar qualquer coisa: **se eu anexei um `_MANIFEST.md`**
```

## Edicao 5 — `src/index.template.html` · prompt D · gravar direto na pasta

**Ancora** (o comeco da linha):

```
      L.push("Gere preenchidos com a realidade atual (
```

**Substituir por:**

```
      L.push(!mountModeOn() ? "Grave direto na pasta, cada um no lugar dele, preenchidos com a realidade atual (só os que ainda não existem, ou complementando os que vieram incompletos):" : "Gere preenchidos com a realidade atual (
```

## Edicao 6 — `src/index.template.html` · prompt E · o brief vai para a pasta-pai

**Ancora** (o comeco da linha do item 1):

```
      L.push("**1) Gere um **`AAMMDD-HANDOFF-BRIEF.md`** (arquivo NOVO, para eu colar como primeira mensagem da próxima conversa).
```

**Substituir por:**

```
      L.push(!mountModeOn() ? "**1) Grave um **`AAMMDD-HANDOFF-BRIEF.md`** (arquivo NOVO) na pasta-pai do projeto — fora do repositório, nunca versionado; a próxima conversa o lê pelo ritual de abertura. Ele é um ATALHO de arranque, não a memória — a memória continua nos arquivos de contexto. Inclua, com detalhe:" : "**1) Gere um **`AAMMDD-HANDOFF-BRIEF.md`** (arquivo NOVO, para eu colar como primeira mensagem da próxima conversa).
```

## Edicao 7 — `src/index.template.html` · prompt E · com Code, o arquivo pequeno vai direto ao lugar

**Ancora** (o comeco da linha «REGISTRE», no ramo do Code):

```
        L.push("- Em vez de listar o que falta registrar: **REGISTRE**.
```

**Substituir por:**

```
        L.push(!mountModeOn() ? "- Em vez de listar o que falta registrar: **REGISTRE**. O que for delta em documento grande vai como **WO** em `meta/workorders/`, com o texto exato de cada inserção e a linha `/apply-wo` junto; o que for arquivo novo ou pequeno, grave inteiro direto no lugar dele. Não me devolva bloco para eu colar no Code — a caixa dele tem limite, e é por isso que a WO existe." : "- Em vez de listar o que falta registrar: **REGISTRE**.
```

## Edicao 8 — `src/index.template.html` · prompt E · sem Code, gravar em vez de baixar

**Ancora** (o comeco da linha, no ramo sem Code nem ASU; e template literal, com crase):

```
        L.push(`- Entregue INTEIROS **apenas os arquivos que mudaram nesta sessão** (prontos para baixar e substituir)
```

**Substituir por:**

```
        L.push(!mountModeOn() ? `- Grave INTEIROS, direto no lugar de cada um na pasta, **apenas os arquivos que mudaram nesta sessão**, incluindo o log \`logs/${today}.md\`. Não regenere os que não mudaram.` : `- Entregue INTEIROS **apenas os arquivos que mudaram nesta sessão** (prontos para baixar e substituir)
```

## Edicao 9 — `src/index.template.html` · prompt F · quando usar, neutro de canal

**Ancora** (o `when` do prompt F; linha inteira):

```
    when:"Primeira mensagem na conversa nova. Cole junto com o HANDOFF-BRIEF.",
```

**Substituir por:**

```
    when:"Primeira mensagem na conversa nova. No canal mount, cole junto com o HANDOFF-BRIEF; no canal pasta, ele já está na pasta-pai.",
```

## Edicao 10 — `src/index.template.html` · prompt F · a pasta-pai em vez do `_MANIFEST`

**Ancora** (o comeco da linha; o resto vira o ramo do mount):

```
      steps.push("Se houver um `_MANIFEST.md` no material
```

**Substituir por:**

```
      if(!mountModeOn()) steps.push("Peça acesso à pasta-pai do projeto se a conversa não a tiver: o brief e as notas moram lá."); else steps.push("Se houver um `_MANIFEST.md` no material
```

## Edicao 11 — `src/index.template.html` · prompt F · onde o brief mora

**Ancora** (o comeco da linha):

```
      steps.push("Leia o `AAMMDD-HANDOFF-BRIEF.md` da conversa anterior
```

**Substituir por:**

```
      steps.push("Leia o `AAMMDD-HANDOFF-BRIEF.md` da conversa anterior" + (mountModeOn() ? "" : " (na pasta-pai)") + "
```

## Edicao 12 — `src/index.template.html` · Instrucoes · o titulo dos arquivos, sem «no Projeto» no canal pasta

**Ancora** (em `buildInstr`; a linha inteira):

```
    lines.push("## Arquivos de contexto (no Projeto)");
```

**Substituir por:**

```
    lines.push(mountModeOn() ? "## Arquivos de contexto (no Projeto)" : "## Arquivos de contexto");
```

## Edicao 13 — `src/index.template.html` · Instrucoes · a linha dos logs

**Ancora** (em `buildInstr`; o comeco da linha):

```
    lines.push("- Logs detalhados do dia NÃO ficam no Projeto
```

**Substituir por:**

```
    lines.push(!mountModeOn() ? "- Logs detalhados do dia vivem em `logs/` e são lidos sob demanda." : "- Logs detalhados do dia NÃO ficam no Projeto
```

## Edicao 14 — `src/index.template.html` · Instrucoes · sem Code, gravar em vez de baixar

**Ancora** (em `buildInstr`, o ramo sem Code da linha de entrega; o comeco da linha):

```
      : "Entregue cada documento afetado INTEIRO e atualizado (arquivo novo para baixar
```

**Substituir por:**

```
      : !mountModeOn() ? "Grave cada documento afetado INTEIRO e atualizado, direto no lugar dele e relido antes de sobrescrever; nunca blocos soltos para colar à mão. Aplicar é decisão do usuário: diga o que gravou. Detalhes e exceções no CEREBRO.md." : "Entregue cada documento afetado INTEIRO e atualizado (arquivo novo para baixar
```

## Edicao 15 — `src/index.template.html` · corte de versao (D-158)

**Ancora** :

```
const KIT_VERSION = "1.126.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.127.0";
```

## Edicao 16 — `validate.js` · o `C109`, antes do `C27`

**Ancora** (o comeco da linha; 1 ocorrencia):

```
check("C27 leva sand-land (wo0070)
```

**Substituir por:**

```
check("C109 no canal pasta, as Instrucoes e os prompts A, D, E, F nao mandam baixar, colar arquivo nem anexar (wo0135, D-162)", () => {
  const S=T.STATE; const prev=Object.assign({}, S.workmode||{});
  // «para baixar (`AAMMDD-asu…`)» e o .yaml do ASU, aplicado pela interface do ASU: fora desta WO. «no Projeto» so com maiuscula: «no projeto», minusculo, e prosa comum.
  const RUIM=/para (eu )?baixar(?! \(`AAMMDD-asu)|baixar e substituir|para eu colar como|_MANIFEST|arquivos do Projeto|Anexe os arquivos/i, RUIM_P=/no Projeto/;
  const byId=id=>T.PROMPTS_BASE.find(x=>x.id===id);
  const fora=[]; let textos=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    [["",""],["yes",""],["","yes"],["yes","yes"]].forEach(([c,a]) => {
      S.workmode={codeMode:c, asuMode:a, groupMode:"no", mountMode:""};
      const tag=id+(c?"+Code":"")+(a?"+ASU":"");
      const I=T.buildInstr(n); textos++;
      const mi=I.match(RUIM)||I.match(RUIM_P); if(mi) fora.push(tag+" Instr: «"+mi[0]+"»");
      ["A","D","E","F"].forEach(pid => { const b=byId(pid).body({},n); textos++; const m=b.match(RUIM)||b.match(RUIM_P); if(m) fora.push(tag+" prompt "+pid+": «"+m[0]+"»"); });
    });
  });
  // o par: o canal mount continua com a reserva (o ramo, nao a delecao)
  const dev=T.normNiche(T.NICHES.dev);
  S.workmode={codeMode:"yes", mountMode:"yes"};
  const eM=byId("E").body({},dev), fM=byId("F").body({},dev), aM=byId("A").body({},dev), iM=T.buildInstr(dev);
  S.workmode=prev;
  assert(fora.length===0, "vocabulario do mount no canal pasta -> "+fora.slice(0,8).join(" | ")+(fora.length>8?" (+"+(fora.length-8)+")":""));
  assert(/para eu colar como primeira mensagem/.test(eM), "o canal mount perdeu o brief para colar (prompt E)");
  assert(/_MANIFEST/.test(fM), "o canal mount perdeu o _MANIFEST na retomada (prompt F)");
  assert(/arquivos do Projeto/.test(aM), "o canal mount perdeu a leitura do Projeto (prompt A)");
  assert(/Arquivos de contexto \(no Projeto\)/.test(iM), "o canal mount perdeu o titulo dos arquivos no Projeto");
  return "ok (" + textos + " textos do canal pasta sem vocabulario do mount)";
});

check("C27 leva sand-land (wo0070)
```

(O texto novo termina repetindo a ancora: o resto da linha do `C27` fica como esta.)

## Edicao 17 — `meta/CHANGELOG.md` · versao atual

**Ancora** :

```
> Histórico de versões. Versão atual: **v1.126.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.127.0**.
```

## Edicao 18 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.126.0 — A convenção que repete um princípio do nicho sai das Instruções e fica no CEREBRO (wo0134, D-161)
```

**Substituir por:**

```
## v1.127.0 — No canal pasta, as Instruções e os prompts param de mandar baixar, colar e anexar (wo0135, D-162)
- **Instruções geradas, canal pasta:** o título vira «Arquivos de contexto», sem «(no Projeto)»; a linha dos logs perde «NÃO ficam no Projeto»; e, sem o modo Code, a entrega diz **grave cada documento direto no lugar dele** em vez de «arquivo novo para baixar e substituir». No canal pasta as Instruções ficam 22 caracteres menores, e 42 com Code; no mount, nada muda.
- **Prompts, canal pasta:** **A** lê a pasta pelo ritual; **D** lista a pasta em vez de pedir anexo e `_MANIFEST`, e grava os arquivos no lugar; **E** grava o `HANDOFF-BRIEF` na pasta-pai (nunca versionado) e o arquivo pequeno direto no lugar, com ou sem Code; **F** pede a pasta-pai e lê o brief lá.
- **O canal mount não muda:** cada frase antiga virou o ramo do mount, sem redigitar. Check novo `C109`: nada no canal pasta manda baixar, colar arquivo, anexar ou ler `_MANIFEST`, e o mount guarda a reserva.
- **Fica para análise:** os princípios universais P8 e P11 ainda falam a língua do mount no CEREBRO (`i-N70`). Origem: `i-N66`, achada ao colar o prompt E em 16/10. Harness **19/19 · 110/110**.

## v1.126.0 — A convenção que repete um princípio do nicho sai das Instruções e fica no CEREBRO (wo0134, D-161)
```

## Edicao 19 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; 1 ocorrencia):

```
Versão atual: **v1.126.0**.
```

**Substituir por:**

```
Versão atual: **v1.127.0**.
```

## Edicao 20 — `meta/IDEAS.md` · a `i-N66` resolvida

**Ancora** (o titulo inteiro):

```
## i-N66 — Os prompts de setup e de transferência não conhecem o eixo canal — ABERTA, gatilho: a próxima WO de kit
```

**Substituir por:**

```
## i-N66 — Os prompts de setup e de transferência não conhecem o eixo canal — RESOLVIDA em 2026-10-17 (wo0135, `D-162`): Instruções e prompts A, D, E, F com o ramo do canal, `C109`; os princípios P8 e P11 seguem na `i-N70`
```

## Edicao 21 — `meta/IDEAS.md` · a `i-N68`: a wo0129 conferida

**Ancora** (o titulo inteiro):

```
## i-N68 — Conferências de tela pendentes do dono — ABERTA, gatilho: a próxima vez que o dono abrir o `index.html` no navegador
```

**Substituir por:**

```
## i-N68 — Conferências de tela pendentes do dono — ABERTA só para o roteiro das wo0121–wo0127; as duas conferências da wo0129 fecharam em 2026-10-16 (7/7 ok no roteiro da wo0134, `[relatado pelo dono]`, com capturas)
```

## Edicao 22 — `meta/IDEAS.md` · `i-N70`, acima da `i-N69`

**Ancora** (o titulo inteiro da `i-N69`):

```
## i-N69 — Medir o teto em regras, não só em caracteres — ABERTA, sem gatilho de data
```

**Substituir por:**

```
## i-N70 — Os princípios universais P8 e P11 ainda falam a língua do mount — ABERTA, pede análise

**Origem:** inventário da `i-N66` em 2026-10-16, e uma captura de tela do dono: a busca por «reveja o mount a cada turno», com o Mount desligado, achou o texto na definição do P8 («Verifica antes de pedir arquivo») no formulário do kit. O P8 fala em subir, upload e rever o mount a cada turno; o P11 fala em «do Projeto/mount».

**Por que ficou fora da wo0135:** os dois vão inteiros ao CEREBRO gerado, onde a `D-157` declarou toda menção ao mount como canal de reserva — então não estão errados, estão no idioma da reserva. Mudar princípio universal muda os 19 nichos e o `C43` da casa; pede análise: ramo por canal na definição, texto neutro de canal, ou deixar como reserva.

## i-N69 — Medir o teto em regras, não só em caracteres — ABERTA, sem gatilho de data
```

## Edicao 23 — `meta/DECISIONS.md` · `D-162` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Vigiar:** a marca é por texto exato.» e termina em «as duas mudam juntas.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-162 — No canal pasta, as Instruções e os prompts param de mandar baixar, colar e anexar

**Data:** 2026-10-17 · **WO:** 0135 · **Origem:** `i-N66` (achada em 16/10, ao colar o prompt E) e o inventário do chat em 16/10 · **Estende:** `D-157` (o eixo canal).

**Decisão.** A `D-157` levou o eixo canal às Instruções e ao CEREBRO, mas não aos prompts de setup (`PROMPTS_BASE`) nem a três linhas das Instruções. No canal pasta — o padrão — o kit ainda mandava «colar o brief como primeira mensagem», «baixar e substituir» e «anexar o `_MANIFEST`», o que contradiz o canal: o chat grava direto no disco. Esta WO dá o ramo do canal a três linhas das Instruções (o título dos arquivos, a linha dos logs, a entrega sem Code) e a quatro prompts (A, D, E, F). O canal mount não muda: cada frase antiga virou o ramo do mount, recortada, sem redigitar. Corta a **v1.127.0** (`D-158`).

**O check.** `C109` confere 380 textos do canal pasta (19 nichos × sem modo, Code, ASU e os dois × Instruções e os quatro prompts) contra o vocabulário do mount, e o par: o canal mount guarda a reserva nos prompts A, E e F e no título dos arquivos. O `G23` segue verde — o código dos prompts D e F continua citando o `_MANIFEST`, agora no ramo do mount.

**Escopo decidido pelo dono (2026-10-17):** Instruções e prompts A, D, E, F, check novo. **Ficam fora:** os princípios universais P8 e P11, que vão inteiros ao CEREBRO, onde a `D-157` declarou o mount como reserva; mudar princípio universal pede análise (`i-N70`). O prompt B («sem Projeto») e o C («do zero») não têm vocabulário do mount no canal pasta (medido em 16/10). **Também registrado:** as duas conferências de tela da wo0129 fecharam (`i-N68`, 7/7 ok, `[relatado pelo dono]`).

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0135 traz a medida no repo]`: canal pasta — Instruções 22 caracteres menores sem modo, 42 com Code; incremento do Code 546 → **526**/550; canal mount — 532 textos (Instruções e os seis prompts, 19 nichos × quatro combinações de modo) idênticos ao HEAD. Check novo `C109`. Harness 109 → **110**.
```

## Edicao 24 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (922276 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **110/110**. Registre crua no relatorio a linha do `C28` e a do `C109`. Harness vermelho = **PARE**.

## Edicao 25 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 24. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere (medido 0 no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF 'Leia os arquivos de contexto na pasta do projeto, pelo ritual' src/index.template.html   # 0 -> 1
grep -cF '**liste a pasta** e entenda o que JÁ existe nela' src/index.template.html                 # 0 -> 1
grep -cF 'na pasta-pai do projeto — fora do repositório, nunca versionado' src/index.template.html  # 0 -> 1
grep -cF 'grave inteiro direto no lugar dele' src/index.template.html                              # 0 -> 1
grep -cF 'Grave INTEIROS, direto no lugar de cada um na pasta' src/index.template.html             # 0 -> 1
grep -cF 'Peça acesso à pasta-pai do projeto se a conversa não a tiver' src/index.template.html    # 0 -> 1
grep -cF '"## Arquivos de contexto");' src/index.template.html                                     # 0 -> 1
grep -cF 'Logs detalhados do dia vivem em' src/index.template.html                                 # 0 -> 1
grep -cF 'Grave cada documento afetado INTEIRO e atualizado, direto no lugar dele' src/index.template.html  # 0 -> 1
grep -cF 'const KIT_VERSION = "1.127.0";' src/index.template.html                                  # 0 -> 1
grep -c '^check("C109 ' validate.js                                                                # 0 -> 1
grep -c '^## D-162 ' meta/DECISIONS.md                                                             # 0 -> 1
grep -c '^## i-N70 ' meta/IDEAS.md                                                                 # 0 -> 1
grep -c '^## i-N66 .*RESOLVIDA' meta/IDEAS.md                                                      # 0 -> 1
grep -m1 '^## v' meta/CHANGELOG.md                                                                 # v1.126.0 -> v1.127.0
```

**Prova negativa (rode e restaure):** no `src/index.template.html`, na linha da Edicao 12 (o titulo dos arquivos), troque o texto do canal pasta `"## Arquivos de contexto"` por `"## Arquivos de contexto (no Projeto)"`, rode `node build.js` e `node validate.js index.html`: o `C109` tem de ficar vermelho com `Instr: «no Projeto»`. Restaure, rode o build de novo e confira que o `index.html` voltou ao tamanho da Edicao 24 e o harness ao verde.

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 15 | 15 |
| `validate.js` | 29 | 0 |
| `index.html` (gerado) | 15 | 15 |
| `meta/CHANGELOG.md` | 7 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 8 | 2 |
| `meta/DECISIONS.md` | 12 | 0 |
| `logs/2026-10-16.md` (a secao do chat, ja no disco) | 11 | 0 |
| `meta/workorders/261017-wo0135-canal-pasta-nos-prompts.md` (esta WO) | 507 | 0 |

O `index.html`, o template e o `validate.js` foram medidos com `--ignore-cr-at-eol`.

## Edicao 26 — commit e push (verde = sem perguntar)

```
git add src/index.template.html index.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md logs/2026-10-16.md meta/workorders/261017-wo0135-canal-pasta-nos-prompts.md
```

```
git commit -m "feat(kit): no canal pasta, Instrucoes e prompts A D E F param de mandar baixar, colar e anexar (wo0135, D-162)" -m "Cada frase do mount vira o ramo do mount, sem redigitar; o canal pasta grava direto no lugar e le o brief na pasta-pai. C109 novo. P8 e P11 ficam para a i-N70. v1.127.0."
```

```
git push
```

---

## Fora de escopo

- Os principios universais P8 e P11 (`i-N70`), e qualquer texto do CEREBRO gerado: no canal pasta ele ja declara o mount como reserva.
- Os prompts B e C, e os prompts extras dos nichos (`promptsExtra`).
- A frase «para eu colar no Code» (a linha `/apply-wo`), que vale nos dois canais.
- O `.yaml` do ASU «para baixar»: o ASU se aplica pela interface dele, e o `C109` o exclui pelo nome (`AAMMDD-asu`).

## Armadilhas desta WO

- **Fim de linha.** `src/index.template.html`, `validate.js` e `meta/DECISIONS.md` sao **CRLF** na arvore; o texto novo da Edicao 16 tem varias linhas — grave-o em CRLF. As demais ancoras do template sao de uma linha so.
- **Dez ancoras sao o COMECO de uma linha:** troque so o trecho da ancora; o resto da linha fica intacto e fecha o ternario aberto. A edicao 8 e um template literal (crase): o texto novo leva `\`` escapada antes e depois de `logs/${today}.md`, como a linha antiga.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0135.txt` (`date +%y%m%d-%H%M`, rodado na hora).
