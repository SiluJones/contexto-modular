# WO 0137 — no canal pasta, o prompt de atualizacao, o CLAUDE.md, o molde de WO e o prompt C param de falar a lingua do mount

> **Tipo:** mista — CODIGO (produto + harness + o molde da casa) + DOC (o registro).
> **Config sugerida:** modelo padrao, esforco medio. 19 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`; todas as ancoras sao de UMA linha inteira, menos a do STATUS (trecho do cabecalho, como na wo0135 e na wo0136).
> **Pre-requisito:** HEAD = `a92b025`, `main` = `origin/main`. Harness em **19/19 · 110/110 · 0 erros**, v1.128.0.
> **Base:** `meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md`, os quatro pontos aceitos pelo dono em 2026-10-19 como recomendados.
> **Depende de:** wo0136 (aplicada, `2213d6f`; fecho `a92b025`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `0c9a992d9d22915c9399b637942b0d40fea1c6f3  meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md` (novo; status «Decidida», LF)
> - `2e554dd3feda2709879535b871588c2d4c1f8db8  logs/2026-10-18.md` (secao «Conversa 3 (chat)», LF)
> - `02c36e5bf5f1100bd4528582c5997a56463f39d9  logs/2026-10-19.md` (novo, secao «Conversa 1 (chat)», LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo. Se ja estiver, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `a92b025`; recortadas do arquivo vivo por script, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `src/index.template.html` — no prompt C, a linha «Prontos para eu subir a um Projeto»; em `buildWoTemplate()`, as linhas «Ele sobe sempre ao Projeto» e «estado esta o mount»; em `buildCodeKitFiles()`, a linha «Eu leio só o que chega pelo mount»; em `buildUpdatePack()`, o `role` do `.flatdropignore`; em `buildUpdatePrompt()`, as linhas «Subi um **template-update**», «liste o mount» e «Diga quais destes o mount NAO tem»; `const KIT_VERSION`
> - `validate.js` — no `C25`, o assert «liste o mount e me diga»; no `C50`, o assert `gitignore|flatdropignore`; no `C43`, a clausula «idempotencia pelo texto inteiro»; a linha `check("C27 leva sand-land (wo0070)`
> - `meta/workorders/_TEMPLATE.md` — as linhas 4 («Ele sobe sempre ao Projeto») e 34 («estado esta o mount»)
> - `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.128.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — o titulo da `i-N70`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-164`, CHANGELOG, `i-N70` ampliada, `i-N71`. A edicao do STATUS e so o numero da versao (excecao da `D-158`); a contagem 110 → 111 no cabecalho do STATUS e do `/wrap`. **A analise e os logs de 18/10 e 19/10 sao do chat:** esta WO so os versiona pelo sha1.

---

## 1. Por que

A sonda de 18/10 (na analise) achou, no canal pasta, o vocabulario do mount fora do que o `C109` cobre: o **prompt de atualizacao inteiro** — o primeiro texto que o chat de um vizinho le ao receber o pacote, e os tres vizinhos trabalham no canal pasta —, uma linha do `CLAUDE.md` gerado, duas do molde de WO e uma do prompt C. Esta WO da o ramo do canal ao prompt de atualizacao, ao `CLAUDE.md` e ao prompt C (o texto antigo vira o ramo do mount, recortado, sem redigitar) e deixa o molde de WO **neutro de canal** — o mesmo texto vale nos dois, entao a casa recebe as mesmas duas linhas. Trava com o `C110`. Corta a **v1.129.0** (`D-158`). O CEREBRO fica para a segunda etapa (`i-N70`).

## 2. Contexto factual — medido na replica

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 110/110 | **19/19 · 111/111** (entra o `C110`) | `node validate.js index.html` |
| `C110` | — | `ok (228 textos do canal pasta sem vocabulario do mount)` | linha do `C110` |
| `C43` | `ok (instalado confere com o gerado em 71 clausulas)` | `ok (instalado confere com o gerado em 72 clausulas)` | linha do `C43` |
| `C28` | `ok (padrao 5852/6900 · +Code 526/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7185/7600 · 304 configuracoes)` | identico | linha do `C28` |
| `C54` | v1.128.0 | **v1.129.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 922.680 bytes | **924.444 bytes** | a linha `OK:` do `node build.js` |

- **O canal mount sai igual:** com a versao normalizada, 646 de 741 textos do canal mount (Instrucoes, CEREBRO, prompts A a F, prompt de atualizacao e kit do Code; 19 nichos × quatro combinacoes de modo) saem identicos ao HEAD. Os 95 diferentes sao o esperado: o papel do `.flatdropignore` na lista do prompt de atualizacao (57) e as duas linhas neutras do molde de WO (38).
- **Prova de que o `C110` acusa:** o `validate.js` desta WO rodado contra o `index.html` do HEAD fica vermelho no `C110`.

## Inventario

- **Superficies com vocabulario do mount no canal pasta, fora do CEREBRO e do que o `C109` cobre:** prompt de atualizacao (3 linhas do codigo, que geram 23 linhas distintas nos 19 nichos) e o `role` do `.flatdropignore` no pacote; `CLAUDE.md` gerado (1); molde de WO (2, no gerado e na casa); prompt C (1). Medido pela sonda da analise, `[medido em sandbox]`.
- **Fora:** o CEREBRO (47 linhas, `i-N70`); a skill `wrap` da casa («nao sobe ao mount», uma linha, vai com a `i-N70`); o cabecalho «Nome no upload» e a revogacao historica do manifesto do pacote; as Instrucoes (2 linhas legitimas: «colar no Code» e o `.yaml` do ASU).

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `a92b025`. Se diferente, **PARE e reporte**.
2. `sha1sum meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md logs/2026-10-18.md logs/2026-10-19.md` = os do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M logs/2026-10-18.md`, `?? .claude/launch.json`, `?? logs/2026-10-19.md`, `?? meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md`, `?? meta/workorders/261019-wo0137-canal-pasta-no-update-e-no-kit-do-code.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c '^check("C110 ' validate.js` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `src/index.template.html` · prompt C · sem Code nem ASU, gravar na pasta

**Ancora** (no corpo do prompt C, ramo sem Code nem ASU; a linha inteira):

```
        L.push("Prontos para eu subir a um Projeto do claude.ai (ou versionar) e usar como contexto na próxima conversa.");
```

**Substituir por:**

```
        L.push(!mountModeOn() ? "Grave-os direto na pasta do projeto, cada um no lugar dele, para servirem de contexto na próxima conversa." : "Prontos para eu subir a um Projeto do claude.ai (ou versionar) e usar como contexto na próxima conversa.");
```

(O texto novo leva a linha antiga inteira como o ramo do mount.)

## Edicao 2 — `src/index.template.html` · molde de WO gerado · o FlatDrop vira canal de reserva

**Ancora** (em `buildWoTemplate()`; a linha inteira):

```
    "> e preencha a copia. Ele sobe sempre ao Projeto (o `.flatdropignore` ignora `meta/workorders/*` mas",
```

**Substituir por:**

```
    "> e preencha a copia. No canal de reserva (FlatDrop) o modelo sobe ao Projeto mesmo assim (o `.flatdropignore` ignora `meta/workorders/*` mas",
```

(As duas linhas seguintes, `reinclui ...` e `tenha o formato a mao ...`, ficam como estao e fecham a frase.)

## Edicao 3 — `src/index.template.html` · molde de WO gerado · a leitura vale nos dois canais

**Ancora** (em `buildWoTemplate()`; a linha inteira):

```
    "> estado esta o mount. Nao cite simbolo, caminho ou capacidade de ferramenta que voce nao leu neste turno; declarar «nao li»",
```

**Substituir por:**

```
    "> estado esta a pasta (ou o mount, no canal de reserva). Nao cite simbolo, caminho ou capacidade de ferramenta que voce nao leu neste turno; declarar «nao li»",
```

## Edicao 4 — `src/index.template.html` · `CLAUDE.md` gerado · quem le o que, no canal pasta

**Ancora** (em `buildCodeKitFiles()`, secao «Quando eu pedir medicao»; a linha inteira):

```
    "- Eu leio só o que chega pelo mount; você lê o disco. Se eu pedir para **medir**, o pedido não tem âncora nem commit: não edite nada, não conserte nada, não sugira nada.",
```

**Substituir por:**

```
    (!mountModeOn() ? "- Eu leio a pasta com teto de contexto e de tempo por comando; você lê o repositório inteiro. Se eu pedir para **medir**, o pedido não tem âncora nem commit: não edite nada, não conserte nada, não sugira nada." : "- Eu leio só o que chega pelo mount; você lê o disco. Se eu pedir para **medir**, o pedido não tem âncora nem commit: não edite nada, não conserte nada, não sugira nada."),
```

(O ramo do mount e a string antiga inteira, recortada.)

## Edicao 5 — `src/index.template.html` · pacote de atualizacao · o papel do `.flatdropignore` e de reserva

**Ancora** (em `buildUpdatePack()`; a linha inteira):

```
    role: "Enxuga o que sobe ao Projeto do Claude (logs/, workorders no modo Code).", content: structuredFlatdropignore(codeOn) });
```

**Substituir por:**

```
    role: "Canal de reserva (FlatDrop): enxuga o que sobe ao Projeto do Claude (logs/, workorders no modo Code).", content: structuredFlatdropignore(codeOn) });
```

## Edicao 6 — `src/index.template.html` · prompt de atualizacao · onde o pacote mora, no canal pasta

**Ancora** (em `buildUpdatePrompt()`; a linha inteira):

```
  L.push(`Subi um **template-update** do KCM para este projeto (nicho: ${niche.label}). No mount ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo.`);
```

**Substituir por:**

```
  L.push(!mountModeOn() ? `Descompactei um **template-update** do KCM para este projeto (nicho: ${niche.label}) na pasta-pai do projeto, numa pasta \`AAMMDD-kcm-update-v${KIT_VERSION}/\` — fora do repositorio, nunca versionada. Nela ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo. Fechado o merge, **mova** a pasta para \`notas-arquivadas/\` na pasta-pai — mover, nunca apagar.` : `Subi um **template-update** do KCM para este projeto (nicho: ${niche.label}). No mount ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo.`);
```

(O texto novo leva a linha antiga inteira como o ramo do mount. As crases escapadas `\`` sao do template literal, como na linha antiga.)

## Edicao 7 — `src/index.template.html` · prompt de atualizacao · o estado do repo pelo git

**Ancora** (em `buildUpdatePrompt()`; a linha inteira):

```
  L.push("**Antes de comparar qualquer coisa:** liste o mount e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria.");
```

**Substituir por:**

```
  L.push(!mountModeOn() ? "**Antes de comparar qualquer coisa:** rode `git log -3 --oneline` e `git status --short` no repositorio e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria." : "**Antes de comparar qualquer coisa:** liste o mount e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria.");
```

## Edicao 8 — `src/index.template.html` · prompt de atualizacao · o que falta e o repositorio que nao tem

**Ancora** (em `buildUpdatePrompt()`; a linha inteira):

```
  L.push("**E confira se as superficies que eu vou mandar varrer estao AQUI.** Diga quais destes o mount NAO tem: `.claude/settings.json`, `.claude/skills/*`, `CLAUDE.md`, `meta/*`. **Ausencia nao e «nada a fazer» — e cegueira**, e ela costuma ter causa: `.gitignore` ou `.flatdropignore` deste projeto excluindo a pasta. Se as skills nao chegaram, a instrucao «varra as skills primeiro» vira um comando que executa e nao faz nada, e a superficie mais perigosa fica intacta parecendo limpa. Nesse caso me diga ANTES de comparar o resto: e mais barato refazer o upload agora do que descobrir depois que meia varredura foi no vazio.");
```

**Substituir por:**

```
  L.push(!mountModeOn() ? "**E confira se as superficies que eu vou mandar varrer estao AQUI.** Diga quais destes o repositorio NAO tem: `.claude/settings.json`, `.claude/skills/*`, `CLAUDE.md`, `meta/*`. **Ausencia nao e «nada a fazer» — e cegueira**, e ela costuma ter causa: o arquivo nunca foi criado aqui, ou mora fora da pasta concedida a esta conversa. Se as skills nao estao no repositorio, a instrucao «varra as skills primeiro» vira um comando que executa e nao faz nada, e a superficie mais perigosa fica intacta parecendo limpa. Nesse caso me diga ANTES de comparar o resto." : "**E confira se as superficies que eu vou mandar varrer estao AQUI.** Diga quais destes o mount NAO tem: `.claude/settings.json`, `.claude/skills/*`, `CLAUDE.md`, `meta/*`. **Ausencia nao e «nada a fazer» — e cegueira**, e ela costuma ter causa: `.gitignore` ou `.flatdropignore` deste projeto excluindo a pasta. Se as skills nao chegaram, a instrucao «varra as skills primeiro» vira um comando que executa e nao faz nada, e a superficie mais perigosa fica intacta parecendo limpa. Nesse caso me diga ANTES de comparar o resto: e mais barato refazer o upload agora do que descobrir depois que meia varredura foi no vazio.");
```

## Edicao 9 — `src/index.template.html` · corte de versao (D-158)

**Ancora** :

```
const KIT_VERSION = "1.128.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.129.0";
```

## Edicao 10 — `validate.js` · `C25` · o estado do repo pedido nos dois canais

**Ancora** (no `C25`; a linha inteira):

```
  assert(/liste o mount e me diga em que versao\/commit/.test(prompt),"_UPDATE-PROMPT nao pede o estado do repo antes de comparar");
```

**Substituir por:**

```
  assert(/e me diga em que versao\/commit este projeto esta/.test(prompt),"_UPDATE-PROMPT nao pede o estado do repo antes de comparar");
```

## Edicao 11 — `validate.js` · `C50` · a causa da ausencia, nos dois canais

**Ancora** (no `C50`; a linha inteira):

```
  assert(/gitignore|flatdropignore/i.test(prompt), "o prompt nao aponta a causa provavel da ausencia");
```

**Substituir por:**

```
  assert(/gitignore|flatdropignore|fora da pasta concedida/i.test(prompt), "o prompt nao aponta a causa provavel da ausencia");
```

## Edicao 12 — `validate.js` · `C43` · a clausula do FlatDrop como reserva, nos dois lados

**Ancora** (na lista `CLAUSULAS`; a linha inteira):

```
    ["idempotencia pelo texto inteiro",  /texto NOVO INTEIRO/,                     ["woTemplate","applyWo"]],
```

**Substituir por:**

```
    ["idempotencia pelo texto inteiro",  /texto NOVO INTEIRO/,                     ["woTemplate","applyWo"]],
    // wo0137 (D-164): o molde e neutro de canal e rotula o FlatDrop como reserva; a casa acompanha.
    ["modelo de WO: FlatDrop e reserva",  /canal de reserva \(FlatDrop\)/,         ["woTemplate"]],
```

## Edicao 13 — `validate.js` · o `C110`, antes do `C27`

**Ancora** (a linha inteira):

```
check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
```

**Substituir por:**

```
check("C110 no canal pasta, o prompt de atualizacao, o CLAUDE.md, o molde de WO e o prompt C nao falam a lingua do mount (wo0137, D-164)", () => {
  const S=T.STATE; const prev=Object.assign({}, S.workmode||{});
  // O molde e neutro de canal: «o mount, no canal de reserva» e o FlatDrop rotulado como reserva ficam. O papel do .flatdropignore no pacote tambem e rotulado reserva.
  const RUIM=/\bmount\b(?!, no canal de reserva)|\bSubi\b|\bupload\b|subir a um Projeto|Ele sobe sempre ao Projeto/;
  const byId=id=>T.PROMPTS_BASE.find(x=>x.id===id);
  const fora=[]; let textos=0;
  const olha=(tag, txt)=>{ textos++; const m=String(txt).match(RUIM); if(m) fora.push(tag+": «"+m[0]+"»"); };
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    [["",""],["yes",""],["","yes"],["yes","yes"]].forEach(([c,a]) => {
      S.workmode={codeMode:c, asuMode:a, groupMode:"no", mountMode:""};
      const tag=id+(c?"+Code":"")+(a?"+ASU":"");
      olha(tag+" atualizacao", T.buildUpdatePrompt(n));
      olha(tag+" prompt C", byId("C").body({},n));
      if(c){ const k=T.buildCodeKitFiles(); olha(tag+" CLAUDE.md", k.claudeMd); olha(tag+" molde", k.woTemplate); }
    });
  });
  // o par: o canal mount continua com a reserva (o ramo, nao a delecao)
  const dev=T.normNiche(T.NICHES.dev);
  S.workmode={codeMode:"", asuMode:"", groupMode:"no", mountMode:""};
  const upP=T.buildUpdatePrompt(dev);
  S.workmode={codeMode:"yes", asuMode:"", groupMode:"no", mountMode:"yes"};
  const upM=T.buildUpdatePrompt(dev), kM=T.buildCodeKitFiles();
  S.workmode={codeMode:"", asuMode:"", groupMode:"no", mountMode:"yes"};
  const cM=byId("C").body({},dev);
  S.workmode=prev;
  assert(fora.length===0, "vocabulario do mount no canal pasta -> "+fora.slice(0,8).join(" | ")+(fora.length>8?" (+"+(fora.length-8)+")":""));
  assert(/pasta-pai/.test(upP) && /notas-arquivadas\//.test(upP), "no canal pasta, o prompt de atualizacao nao diz onde o pacote mora nem para onde ele vai depois do merge");
  assert(/liste o mount/.test(upM), "o canal mount perdeu o prompt de atualizacao da reserva");
  assert(/Eu leio só o que chega pelo mount/.test(kM.claudeMd), "o canal mount perdeu a linha do CLAUDE.md");
  assert(/subir a um Projeto/.test(cM), "o canal mount perdeu o prompt C da reserva");
  return "ok (" + textos + " textos do canal pasta sem vocabulario do mount)";
});

check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
```

(O texto novo termina repetindo a ancora.)

## Edicao 14 — `meta/workorders/_TEMPLATE.md` · o molde da casa · FlatDrop

**Ancora** (a linha inteira):

```
> e preencha a copia. Ele sobe sempre ao Projeto (o `.flatdropignore` ignora `meta/workorders/*` mas
```

**Substituir por:**

```
> e preencha a copia. No canal de reserva (FlatDrop) o modelo sobe ao Projeto mesmo assim (o `.flatdropignore` ignora `meta/workorders/*` mas
```

## Edicao 15 — `meta/workorders/_TEMPLATE.md` · o molde da casa · estado

**Ancora** (a linha inteira):

```
> estado esta o mount. Nao cite simbolo, caminho ou capacidade de ferramenta que voce nao leu neste turno; declarar «nao li»
```

**Substituir por:**

```
> estado esta a pasta (ou o mount, no canal de reserva). Nao cite simbolo, caminho ou capacidade de ferramenta que voce nao leu neste turno; declarar «nao li»
```

## Edicao 16 — `meta/CHANGELOG.md` · versao atual

**Ancora** :

```
> Histórico de versões. Versão atual: **v1.128.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.129.0**.
```

## Edicao 17 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.128.0 — A idempotência da WO se confere pelo texto novo inteiro, não por frase-chave (wo0136, D-163)
```

**Substituir por:**

```
## v1.129.0 — No canal pasta, o prompt de atualização, o `CLAUDE.md`, o molde de WO e o prompt C param de falar a língua do mount (wo0137, D-164)
- **Prompt de atualização, canal pasta:** o pacote mora na pasta-pai do projeto, em `AAMMDD-kcm-update-vX.Y.Z/`, fora do repositório e nunca versionado; o estado do projeto sai de `git log` e `git status`, e não de «liste o mount»; a superfície que falta é «o repositório não tem»; fechado o merge, a pasta é **movida** para `notas-arquivadas/`. O papel do `.flatdropignore` no pacote passa a dizer que é canal de reserva.
- **`CLAUDE.md` gerado, canal pasta:** «Eu leio só o que chega pelo mount» vira «Eu leio a pasta com teto de contexto e de tempo por comando; você lê o repositório inteiro».
- **Molde de WO, gerado e da casa:** neutro de canal — o FlatDrop vira canal de reserva, e a leitura vale para «a pasta (ou o mount, no canal de reserva)». O `C43` ganha a cláusula (71 → 72).
- **Prompt C, canal pasta, sem Code nem ASU:** grava os arquivos direto na pasta.
- **O canal mount não muda:** cada frase antiga virou o ramo do mount. Check novo `C110`; `C25` e `C50` passam a aceitar o texto do canal pasta. O CEREBRO fica para a segunda etapa (`i-N70`). Origem: `meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md`. Harness **19/19 · 111/111**.

## v1.128.0 — A idempotência da WO se confere pelo texto novo inteiro, não por frase-chave (wo0136, D-163)
```

## Edicao 18 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; TRECHO de uma linha longa, 1 ocorrencia — o resto da linha fica):

```
Versão atual: **v1.128.0**.
```

**Substituir por:**

```
Versão atual: **v1.129.0**.
```

## Edicao 19 — `meta/IDEAS.md` · `i-N71` nova e a `i-N70` ampliada

**Ancora** (o titulo inteiro da `i-N70`):

```
## i-N70 — Os princípios universais P8 e P11 ainda falam a língua do mount — ABERTA, pede análise
```

**Substituir por:**

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, gatilho: dez WOs no método C no satelite-web

**Origem:** `DEC-178` do satelite-web (2026-10-18), lida no disco em 18/10; ponto 4 da análise `261018-ANALISE-canal-pasta-no-resto-do-kit.md`. O chat grava direto na árvore do repositório tudo o que entrega — inclusive edições em arquivo existente e STATUS, DECISIONS e log — e roda `tsc` e ESLint antes; a WO deixa de carregar âncoras e vira a ordem de conferência e publicação (inventário com o md5 final de cada arquivo, `git status` contra o inventário, lint, build, commit, push); o Code não reescreve: falhou, para e relata.

**Por que importa ao KCM:** aqui o chat aplica a WO por script numa réplica e o Code aplica de novo no repositório. O defeito corrigido na wo0136 — a idempotência da transcrição — só existe porque a mudança é transcrita duas vezes.

**O que falta para decidir:** dado de campo. Pedir ao satelite-web, depois de dez WOs no método C: quantas pararam no Code e por quê, se algum erro passou para o commit, e como ficou o dono por documento com um escritor só. Até lá, a casa não muda.

## i-N70 — O CEREBRO no canal pasta: as regras que disparam todo turno ainda falam a língua do mount — ABERTA, pede análise; gatilho: depois do pacote v1.129.0

**Ampliada em 2026-10-19** (ponto 3 da análise `261018-ANALISE-canal-pasta-no-resto-do-kit.md`): além de P8 e P11, o fecho («Arquivar / Manter — só se houver notas avulsas no mount»), a abertura de turno do mount ao lado do «Ritual em dois tempos» do canal pasta, a entrega sem Code («baixar e substituir», que contradiz as Instruções desde a wo0135) e o gatilho de varredura «confirme que o arquivo chegou ao mount». A análise mede 47 linhas distintas do mount no CEREBRO gerado no canal pasta; a proposta é ramificar só as que disparam no canal pasta e deixar a transferência e o achatamento inteiros como reserva.
```

(O corpo antigo da `i-N70` continua logo abaixo, como esta.)

## Edicao 20 — `meta/DECISIONS.md` · `D-164` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0136» e termina em «harness 19/19 · 110/110.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-164 — No canal pasta, o prompt de atualização, o `CLAUDE.md`, o molde de WO e o prompt C param de falar a língua do mount

**Data:** 2026-10-19 · **WO:** 0137 · **Origem:** pergunta do dono em 2026-10-18 e a análise `meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md` (quatro pontos aceitos em 2026-10-19) · **Estende:** `D-157` e `D-162`.

**Decisão.** A sonda de 18/10 achou o vocabulário do mount, no canal pasta, fora do que o `C109` cobre: o prompt de atualização inteiro, uma linha do `CLAUDE.md` gerado, duas do molde de WO e uma do prompt C. O prompt de atualização é o primeiro texto que o chat de um vizinho lê ao receber o pacote, e os três vizinhos trabalham no canal pasta. Esta WO dá o ramo do canal ao prompt de atualização, ao `CLAUDE.md` e ao prompt C (o texto antigo vira o ramo do mount, recortado) e deixa o molde de WO neutro de canal, na casa também. Corta a **v1.129.0** (`D-158`).

**Onde o pacote mora no canal pasta** (ponto 2 da análise): o dono descompacta o zip na pasta-pai do projeto, numa pasta `AAMMDD-kcm-update-vX.Y.Z/`, fora do repositório e nunca versionada, como as cartas; fechado o merge, o chat a **move** para `notas-arquivadas/`. O ramo sai do canal com que o dono gera o pacote — o padrão é o canal pasta.

**O check.** `C110` confere o prompt de atualização e o prompt C nos 19 nichos × quatro combinações de modo, e o `CLAUDE.md` e o molde com o Code, contra o vocabulário do mount; e o par: o canal mount guarda a reserva no prompt de atualização, no `CLAUDE.md` e no prompt C. `C25` e `C50` passam a aceitar o texto do canal pasta; o `C43` ganha a cláusula do FlatDrop como reserva no molde (71 → 72).

**Fora, por decisão do dono (2026-10-19):** o CEREBRO, numa segunda análise que ramifica só as regras que disparam no canal pasta (`i-N70`, ampliada); o «método C» do satelite-web, que vira a `i-N71` com gatilho de dez WOs. Também fora: a skill `wrap` da casa, que ainda diz «não sobe ao mount» numa linha (vai com a `i-N70`).

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0137 traz a medida no repo]`: `index.html` 922.680 → 924.444 bytes; check novo `C110` (228 textos); harness 110 → **111**.
```

## Edicao 21 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (924444 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **111/111**. Registre crua no relatorio a linha do `C110`, a do `C43` e a do `C28`. Harness vermelho = **PARE**.

## Edicao 22 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 21. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere ou remove (medido no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF 'Grave-os direto na pasta do projeto, cada um no lugar dele' src/index.template.html    # 0 -> 1
grep -cF 'No canal de reserva (FlatDrop) o modelo sobe ao Projeto' src/index.template.html meta/workorders/_TEMPLATE.md   # 0/0 -> 1/1
grep -cF 'estado esta a pasta (ou o mount, no canal de reserva)' src/index.template.html meta/workorders/_TEMPLATE.md   # 0/0 -> 1/1
grep -cF 'Eu leio a pasta com teto de contexto e de tempo por comando' src/index.template.html   # 0 -> 1
grep -cF 'Canal de reserva (FlatDrop): enxuga o que sobe' src/index.template.html                # 0 -> 1
grep -cF 'AAMMDD-kcm-update-v${KIT_VERSION}/' src/index.template.html                           # 0 -> 1
grep -cF 'rode `git log -3 --oneline` e `git status --short` no repositorio' src/index.template.html   # 0 -> 1
grep -cF 'Diga quais destes o repositorio NAO tem' src/index.template.html                       # 0 -> 1
grep -cF 'const KIT_VERSION = "1.129.0";' src/index.template.html                                # 0 -> 1
grep -c '^check("C110 ' validate.js                                                              # 0 -> 1
grep -cF 'canal de reserva \(FlatDrop\)' validate.js                                             # 0 -> 1
grep -c '^## D-164 ' meta/DECISIONS.md                                                           # 0 -> 1
grep -c '^## i-N71 ' meta/IDEAS.md                                                               # 0 -> 1
grep -m1 '^## v' meta/CHANGELOG.md                                                               # v1.128.0 -> v1.129.0
```

**Prova negativa (rode e restaure):** no `src/index.template.html`, na linha da Edicao 6, troque o ramo do canal pasta `!mountModeOn() ?` por `false ?` (o pacote volta a dizer «Subi um template-update... No mount ha»), rode `node build.js` e `node validate.js index.html`: o `C110` tem de ficar vermelho com `atualizacao: «Subi»`. Restaure, rode o build de novo e confira que o `index.html` voltou ao tamanho da Edicao 21 e o harness ao verde.

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 9 | 9 |
| `index.html` (gerado) | 9 | 9 |
| `validate.js` | 38 | 2 |
| `meta/workorders/_TEMPLATE.md` | 2 | 2 |
| `meta/CHANGELOG.md` | 8 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 11 | 1 |
| `meta/DECISIONS.md` | 14 | 0 |
| `meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md` (nova, do chat) | 65 | 0 |
| `logs/2026-10-18.md` (a secao do chat, ja no disco) | 12 | 0 |
| `logs/2026-10-19.md` (novo, do chat) | 12 | 0 |
| `meta/workorders/261019-wo0137-canal-pasta-no-update-e-no-kit-do-code.md` (esta WO) | 492 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada.

## Edicao 23 — commit e push (verde = sem perguntar)

```
git add src/index.template.html index.html validate.js meta/workorders/_TEMPLATE.md meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md meta/analises/261018-ANALISE-canal-pasta-no-resto-do-kit.md logs/2026-10-18.md logs/2026-10-19.md meta/workorders/261019-wo0137-canal-pasta-no-update-e-no-kit-do-code.md
```

```
git commit -m "feat(kit): no canal pasta, prompt de atualizacao, CLAUDE.md, molde de WO e prompt C param de falar a lingua do mount (wo0137, D-164)" -m "O pacote mora na pasta-pai e e movido para notas-arquivadas depois do merge; cada frase do mount vira o ramo do mount; o molde fica neutro de canal, na casa tambem. C110 novo, C43 com 72 clausulas. CEREBRO fica para a i-N70; metodo C do satelite vira i-N71. v1.129.0."
```

```
git push
```

---

## Fora de escopo

- O CEREBRO gerado e o da casa (`i-N70`, ampliada nesta WO), e a skill `wrap` da casa.
- O cabecalho «Nome no upload» do manifesto e a revogacao historica que cita upload.
- O «metodo C» do satelite-web (`i-N71`): nada muda na casa.
- Gerar e entregar o pacote v1.129.0 aos vizinhos: e do dono, depois desta WO, com o canal pasta ligado (o padrao).

## Armadilhas desta WO

- **Fim de linha.** `src/index.template.html`, `validate.js`, `meta/DECISIONS.md` e `meta/workorders/_TEMPLATE.md` sao **CRLF** na arvore; os textos novos das Edicoes 12, 13 e 20 tem varias linhas — grave-os em CRLF. `meta/CHANGELOG.md`, `meta/STATUS.md` e `meta/IDEAS.md` sao LF.
- **Edicoes que repetem a ancora dentro do texto novo** (o ramo do mount e a linha antiga): a idempotencia e pelo texto novo INTEIRO — um trecho da ancora ja existe antes de aplicar.
- **Edicao 6 e um template literal** (crase): as crases escapadas `\`` do texto novo sao do codigo, como na linha antiga.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0137.txt` (`date +%y%m%d-%H%M`, rodado na hora).
