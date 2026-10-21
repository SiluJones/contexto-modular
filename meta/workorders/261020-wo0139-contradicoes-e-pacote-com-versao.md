# WO 0139 — o que o kit gera para de se contradizer (check de pares), e o pacote diz a propria versao e a propria pasta

> **Tipo:** mista — CODIGO (produto + harness) + DOC (o registro).
> **Config sugerida:** modelo padrao, esforco medio. 21 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`; todas as ancoras sao de UMA linha inteira, menos a do STATUS (trecho do cabecalho, como nas WOs anteriores).
> **Pre-requisito:** HEAD = `ef9695a`, `main` = `origin/main`. Harness em **19/19 · 111/111 · 0 erros**, v1.129.0.
> **Base:** `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (WO-1), os cinco pontos aceitos pelo dono em 2026-10-20.
> **Depende de:** wo0138 (aplicada, `09ae6ff`; fecho `ef9695a`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `a540b2b480a83d943e567bb937e1c32632f35676  meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (novo; status «Decidida», LF)
> - `97b0c7998ac359460f29152708dee06d67b27612  logs/2026-10-20.md` (novo; secoes «Conversa 1», «Conversa 2» e «Conversa 3 (chat)», LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo. Se ja estiver, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `ef9695a`; recortadas do arquivo vivo por script, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `src/index.template.html` — em `TRIGGERS_BASE`, a linha «Fim da conversa»; o `intro` do `UPDATE_PROTOCOL`; em `buildClaudeMd`, o paragrafo «O merge sabe somar» e a linha «O pedido de medição não é ordem de trabalho»; em `buildInstr`, a linha «**Commit:**»; a linha `function buildUpdatePrompt(niche){`; em `buildUpdatePrompt()`, as linhas «Descompactei um **template-update**» e «**Antes de comparar qualquer coisa:** rode `git log`»; em `downloadUpdatePack()`, as linhas do `pack.files.forEach`, dos dois `zip.file` e do `a.download`; `const KIT_VERSION`
> - `validate.js` — a linha `const SHIM`; no `C38`, o par «reporta como choque com a seção citada e não remove sozinho»; a linha `check("C27 leva sand-land (wo0070)`
> - `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.129.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — os titulos da `i-N72` e da `i-N71`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-166`, CHANGELOG, a `i-N72` resolvida, o Observatorio na `i-N71`. A edicao do STATUS e so o numero da versao (excecao da `D-158`); a contagem 111 → 112 no cabecalho do STATUS e do `/wrap`. **A analise e o log de 20/10 sao do chat:** esta WO so os versiona pelo sha1.

---

## 1. Por que

Ao fazer o merge do pacote, o GameDataHub leu o pacote inteiro contra si mesmo e achou quatro pares de regras que o kit gera e que nao podem valer juntas; as quatro continuam na v1.129.0 (medido na analise). Todas nasceram de uma regra nova que entrou sem tocar a antiga, e o harness nao tinha instrumento para isso: conferia que cada regra existe, nunca que duas concordam. Esta WO conserta as quatro pelo lado velho e cria o `C111`, um check de pares. Na mesma leva, a `i-N72`: no canal pasta, o zip e a pasta do pacote passam a ter o nome que o prompt cita, e o prompt abre mandando conferir a versao. Corta a **v1.130.0** (`D-158`).

## 2. Contexto factual — medido na replica

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 111/111 | **19/19 · 112/112** (entra o `C111`) | `node validate.js index.html` |
| `C111` | — | `ok (5 pares em 152 combinacoes; pasta do pacote AAMMDD-kcm-update-v1.130.0)` — o `AAMMDD` e a data UTC do dia em que roda | linha do `C111` |
| `C38` | `ok (4 revogacao(oes) publicada(s))` | identico | linha do `C38` |
| `C28` | `ok (padrao 5852/6900 · +Code 526/550 · … · combo+SO 7185/7600 · 304 configuracoes)` | `ok (padrao 5852/6900 · +Code 540/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7199/7600 · 304 configuracoes)` | linha do `C28` |
| `C54` | v1.129.0 | **v1.130.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 924.444 bytes | **925.835 bytes** | a linha `OK:` do `node build.js` |

- **O canal mount muda de proposito**, nos mesmos pontos que o canal pasta: com a versao normalizada, 608 de 741 textos do canal mount (Instrucoes, CEREBRO, prompts A a F, prompt de atualizacao e kit do Code; 19 nichos × quatro combinacoes de modo) saem identicos ao HEAD. Os 133 diferentes sao o previsto: o CEREBRO (57 — o `intro`, o gatilho, o carimbo e a medicao valem nos dois canais), o prompt de atualizacao (57 — a linha da versao) e as Instrucoes com o Code (19 — a linha de commit).
- **Prova de que o `C111` acusa:** a prova negativa da Edicao 24, medida na replica — com a linha de commit antiga de volta no modo Code, o `C111` fica vermelho em `dev+Code: commit sem excecao x commit e da WO`. (O `validate.js` desta WO nao carrega o `index.html` do HEAD: o `SHIM` exporta `updatePackFolder`, que la nao existe — por isso a prova e a negativa, e nao a do HEAD.)

## Inventario

- **Contradicoes consertadas: 4** (5 pares, porque a entrega por arquivo completo aparece em dois lugares — o `intro` e a tabela de gatilhos), todas no template: `TRIGGERS_BASE`, `UPDATE_PROTOCOL.intro`, `buildClaudeMd` (2), `buildInstr` (1, so com o Code).
- **Pacote:** 1 funcao nova (`updatePackFolder`), 2 linhas do prompt, 4 linhas do download.
- **Harness:** `C111` novo; `C38` com o par do carimbo trocado pela regra decidivel; `SHIM` exporta `updatePackFolder`.
- **Fora:** o CEREBRO no canal pasta (`i-N70`, WO seguinte); a data UTC do `today`.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `ef9695a`. Se diferente, **PARE e reporte**.
2. `sha1sum meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md logs/2026-10-20.md` = os do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: `?? .claude/launch.json`, `?? logs/2026-10-20.md`, `?? meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md`, `?? meta/workorders/261020-wo0139-contradicoes-e-pacote-com-versao.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c '^check("C111 ' validate.js` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `src/index.template.html` · tabela de gatilhos · o fim da conversa aponta para a secao do modo

**Ancora** (em `TRIGGERS_BASE`; a linha inteira):

```
  ["Fim da conversa", "Entrega os arquivos completos afetados: STATUS.md + CHANGELOG.md (se fechou algo) + log do dia."],
```

**Substituir por:**

```
  ["Fim da conversa", "Registra o que falta, cada documento pelo canal dele — como diz a seção «Ao final da conversa»: STATUS.md + CHANGELOG.md (se fechou algo) + log do dia."],
```

## Edicao 2 — `src/index.template.html` · protocolo de atualizacao dos docs · a frase do arquivo completo vale sem executor

**Ancora** (em `UPDATE_PROTOCOL`; a linha inteira):

```
  intro: "As mudanças nos documentos que decorrem do trabalho do assistente são registradas pelo PRÓPRIO assistente — quando ele faz algo, ele mesmo atualiza os docs afetados. O que o usuário quer acrescentar por conta (ele sabe onde e o quê) é decisão dele. Em ambos os casos, a entrega é por ARQUIVO COMPLETO, nunca por blocos soltos para o usuário costurar à mão.",
```

**Substituir por:**

```
  intro: "As mudanças nos documentos que decorrem do trabalho do assistente são registradas pelo PRÓPRIO assistente — quando ele faz algo, ele mesmo atualiza os docs afetados. O que o usuário quer acrescentar por conta (ele sabe onde e o quê) é decisão dele. Em ambos os casos, nada vai em blocos soltos para o usuário costurar à mão: sem executor no repositório, a entrega é por ARQUIVO COMPLETO; com executor, vale o teste do parágrafo seguinte.",
```

## Edicao 3 — `src/index.template.html` · CEREBRO · o carimbo de modos e decidivel, como no manifesto

**Ancora** (em `buildClaudeMd`, o paragrafo «O merge sabe somar»; a linha inteira):

```
  L.push("**O merge sabe somar, não sabe subtrair — e por isso o manifesto traz duas seções que a comparação não produz.** (1) **Linhas revogadas:** o kit às vezes APAGA uma linha de propósito, e comparar arquivos só revela o que é novo — o texto antigo continua vivo no seu, invisível ao merge, dirigindo comportamento que já foi corrigido. Procure cada texto listado; se achar, remova, ou registre o desvio se este projeto tiver motivo para manter. (2) **Carimbo de modos:** o manifesto declara com quais modos o pacote foi gerado. Seção de um modo declarado como `nao` que ainda exista no seu arquivo é sobra de configuração antiga — **ou** o pacote foi gerado com o modo esquecido. O assistente **não tem como distinguir os dois casos**, então **reporta como choque com a seção citada e não remove sozinho**. Migrar de modo (ASU→Code, por exemplo) não limpa o CEREBRO já gerado: um CEREBRO gerado é arquivo, não função.");
```

**Substituir por:**

```
  L.push("**O merge sabe somar, não sabe subtrair — e por isso o manifesto traz duas seções que a comparação não produz.** (1) **Linhas revogadas:** o kit às vezes APAGA uma linha de propósito, e comparar arquivos só revela o que é novo — o texto antigo continua vivo no seu, invisível ao merge, dirigindo comportamento que já foi corrigido. Procure cada texto listado; se achar, remova, ou registre o desvio se este projeto tiver motivo para manter. (2) **Carimbo de modos:** o manifesto declara com quais modos o pacote foi gerado. Seção de um modo declarado como `nao` que ainda exista no seu arquivo é sobra de configuração antiga — **ou** o pacote foi gerado com o modo esquecido. O manifesto dá o **marcador** de cada modo — o cabeçalho que só existe no arquivo gerado com o modo LIGADO: marcador presente com o modo declarado `nao` é **sobra**, e sai, dito no relatório. A única hipótese que o arquivo não responde é **o dono ter esquecido de LIGAR o modo** ao gerar o pacote: essa você pergunta, e não remove sozinho. Migrar de modo (ASU→Code, por exemplo) não limpa o CEREBRO já gerado: um CEREBRO gerado é arquivo, não função.");
```

## Edicao 4 — `src/index.template.html` · CEREBRO · o pedido de medicao vai em arquivo, nunca colado

**Ancora** (em `buildClaudeMd`, secao «Medição delegada»; a linha inteira):

```
  L.push("- **O pedido de medição não é ordem de trabalho.** Não tem âncora, não tem edição, não tem commit e não muda arquivo nenhum. É bloco colável, entregue como qualquer instrução ao executor — não crie arquivo nem pasta para ele. Se virar ordem de trabalho, você já estará escrevendo a ordem sem os números que ela precisava, que é exatamente o erro que a medição evita.");
```

**Substituir por:**

```
  L.push("- **O pedido de medição não é ordem de trabalho.** Não tem âncora, não tem edição, não tem commit e não muda arquivo nenhum. Mas não vai colado na mensagem do executor: vai como arquivo — a seção «Medição prévia» de uma WO, ou um `.md` curto com o que rodar e o formato do relatório. Não crie pasta nova para ele. Se virar ordem de trabalho, você já estará escrevendo a ordem sem os números que ela precisava, que é exatamente o erro que a medição evita.");
```

## Edicao 5 — `src/index.template.html` · Instrucoes · com Code, o commit e da WO quando ha WO

**Ancora** (em `buildInstr`; a linha inteira):

```
    lines.push("**Commit:** ao concluir mudança versionada, ENTREGUE o `git commit` pronto, em bloco SEPARADO, mensagem sem acento. Bloco git parcial (só `add`) não serve: os três em ordem, ou só o `commit`.");
```

**Substituir por:**

```
    lines.push(codeModeOn() ? "**Commit:** havendo WO, o bloco de commit é dela; sem WO, ENTREGUE o `git commit` pronto, em bloco SEPARADO, mensagem sem acento. Bloco git parcial (só `add`) não serve: os três em ordem, ou só o `commit`." : "**Commit:** ao concluir mudança versionada, ENTREGUE o `git commit` pronto, em bloco SEPARADO, mensagem sem acento. Bloco git parcial (só `add`) não serve: os três em ordem, ou só o `commit`.");
```

(O ramo sem Code e a string antiga inteira, recortada.)

## Edicao 6 — `src/index.template.html` · o nome da pasta do pacote, num lugar so

**Ancora** (a linha inteira):

```
function buildUpdatePrompt(niche){
```

**Substituir por:**

```
// i-N72 (wo0139): o nome que o zip cria e o nome que o prompt cita saem daqui, e de nenhum outro lugar.
function updatePackFolder(){ return today.slice(2).replace(/-/g, "") + "-kcm-update-v" + KIT_VERSION; }
function buildUpdatePrompt(niche){
```

(O texto novo termina repetindo a ancora.)

## Edicao 7 — `src/index.template.html` · prompt de atualizacao · cita a pasta que o zip cria

**Ancora** (em `buildUpdatePrompt()`; a linha inteira):

```
  L.push(!mountModeOn() ? `Descompactei um **template-update** do KCM para este projeto (nicho: ${niche.label}) na pasta-pai do projeto, numa pasta \`AAMMDD-kcm-update-v${KIT_VERSION}/\` — fora do repositorio, nunca versionada. Nela ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo. Fechado o merge, **mova** a pasta para \`notas-arquivadas/\` na pasta-pai — mover, nunca apagar.` : `Subi um **template-update** do KCM para este projeto (nicho: ${niche.label}). No mount ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo.`);
```

**Substituir por:**

```
  L.push(!mountModeOn() ? `Descompactei um **template-update** do KCM para este projeto (nicho: ${niche.label}) na pasta-pai do projeto, numa pasta \`${updatePackFolder()}/\` — fora do repositorio, nunca versionada. Nela ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo. Fechado o merge, **mova** a pasta para \`notas-arquivadas/\` na pasta-pai — mover, nunca apagar.` : `Subi um **template-update** do KCM para este projeto (nicho: ${niche.label}). No mount ha um \`_UPDATE-MANIFEST.md\` com o mapa nome-plano -> destino real e a natureza de cada arquivo.`);
```

## Edicao 8 — `src/index.template.html` · prompt de atualizacao · primeiro, a versao

**Ancora** (em `buildUpdatePrompt()`; a linha inteira):

```
  L.push(!mountModeOn() ? "**Antes de comparar qualquer coisa:** rode `git log -3 --oneline` e `git status --short` no repositorio e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria." : "**Antes de comparar qualquer coisa:** liste o mount e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria.");
```

**Substituir por:**

```
  L.push("**Primeiro, a versao:** este pacote e da **v" + KIT_VERSION + "** (linha `- Kit:` do `_UPDATE-MANIFEST.md`). Se a carta ou o dono anunciou outra versao, **PARE** e avise antes de comparar qualquer coisa — pacote de versao errada nao se funde: se regenera.");
  L.push("");
  L.push(!mountModeOn() ? "**Antes de comparar qualquer coisa:** rode `git log -3 --oneline` e `git status --short` no repositorio e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria." : "**Antes de comparar qualquer coisa:** liste o mount e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria.");
```

(O texto novo termina repetindo a ancora: a ordem de comparar fica logo abaixo.)

## Edicao 9 — `src/index.template.html` · download do pacote · os arquivos vao dentro da pasta, no canal pasta

**Ancora** (em `downloadUpdatePack()`; a linha inteira):

```
  pack.files.forEach(f => zip.file(f.flat, f.content || ""));   // achatado na raiz do zip
```

**Substituir por:**

```
  // canal pasta: o conteudo vai dentro de uma pasta com o nome que o prompt cita (i-N72); no mount, achatado na raiz
  const dir = mountModeOn() ? "" : updatePackFolder() + "/";
  pack.files.forEach(f => zip.file(dir + f.flat, f.content || ""));
```

## Edicao 10 — `src/index.template.html` · download do pacote · o manifesto na pasta

**Ancora** (a linha inteira):

```
  zip.file("_UPDATE-MANIFEST.md", pack.manifest);
```

**Substituir por:**

```
  zip.file(dir + "_UPDATE-MANIFEST.md", pack.manifest);
```

## Edicao 11 — `src/index.template.html` · download do pacote · o prompt na pasta

**Ancora** (a linha inteira):

```
  zip.file("_UPDATE-PROMPT.md", buildUpdatePrompt(niche));
```

**Substituir por:**

```
  zip.file(dir + "_UPDATE-PROMPT.md", buildUpdatePrompt(niche));
```

## Edicao 12 — `src/index.template.html` · download do pacote · o zip tem o nome da pasta

**Ancora** (a linha inteira):

```
  a.href = url; a.download = `${niche.id || projectSlug(niche.label)}-template-update.zip`;
```

**Substituir por:**

```
  a.href = url; a.download = mountModeOn() ? `${niche.id || projectSlug(niche.label)}-template-update.zip` : updatePackFolder() + ".zip";
```

## Edicao 13 — `src/index.template.html` · corte de versao (D-158)

**Ancora** :

```
const KIT_VERSION = "1.129.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.130.0";
```

## Edicao 14 — `validate.js` · o `updatePackFolder` sai para o harness

**Ancora** (a linha inteira):

```
const SHIM = 'window.__T = {OSENV, OS_CMDNOTE, INSTR_TETO_MODOS, MODO_ORCAMENTO, structuredFlatdropignore, NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, buildWoTemplate, fileBehaviorLabel, REVOCATIONS, generatedContextFiles, PROMPTS_BASE, INSTR_TETO, KIT_VERSION};';
```

**Substituir por:**

```
const SHIM = 'window.__T = {OSENV, OS_CMDNOTE, INSTR_TETO_MODOS, MODO_ORCAMENTO, structuredFlatdropignore, NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, buildWoTemplate, fileBehaviorLabel, REVOCATIONS, generatedContextFiles, PROMPTS_BASE, INSTR_TETO, KIT_VERSION, updatePackFolder};';
```

## Edicao 15 — `validate.js` · o `C111`, antes do `C27`

**Ancora** (a linha inteira):

```
check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
```

**Substituir por:**

```
check("C111 o que o kit gera nao se contradiz: pares de regras que nao podem coexistir, e o pacote diz a propria versao e a propria pasta (wo0139, D-166)", () => {
  const S=T.STATE; const prev=Object.assign({}, S.workmode||{});
  // Cada par: duas regras que, no mesmo texto lido pelo assistente (Instrucoes + CEREBRO + manifesto + prompt de atualizacao),
  // mandam coisas opostas. Semeado com as quatro do GameDataHub (2026-10-19). Par novo entra aqui quando alguem achar.
  // O quarto campo diz se o par so se contradiz com o Code ligado (sem Code nao ha WO, e as duas regras nao se tocam).
  const PARES=[
    ["entrega por arquivo completo x modo Code registra", /a entrega é por ARQUIVO COMPLETO, nunca por blocos soltos/, /o assistente REGISTRA o que falta/, true],
    ["gatilho do fim da conversa x modo Code registra",   /\| Fim da conversa \| Entrega os arquivos completos/,      /o assistente REGISTRA o que falta/, true],
    ["carimbo indistinguivel x carimbo decidivel",        /não tem como distinguir os dois casos/,                   /DECIDIVEL/,                                       false],
    ["medicao em bloco colavel x nunca empurre bloco",    /É bloco colável, entregue como qualquer instrução/,       /Isso inclui pedido de medição/, true],
    ["commit sem excecao x commit e da WO",               /\*\*Commit:\*\* ao concluir mudança versionada, ENTREGUE/, /Havendo WO no turno, o bloco de commit/, true]
  ];
  const fora=[]; let textos=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    ["", "yes"].forEach(mnt => [["",""],["yes",""],["","yes"],["yes","yes"]].forEach(([c,a]) => {
      S.workmode={codeMode:c, asuMode:a, groupMode:"no", mountMode:mnt};
      const pk=T.buildUpdatePack(n);
      const txt=[T.buildInstr(n), T.buildClaudeMd(n), pk?pk.manifest:"", T.buildUpdatePrompt(n)].join("\n");
      textos++;
      PARES.forEach(([nome,a1,b1,soCode]) => { if(soCode && !c) return; if(a1.test(txt) && b1.test(txt)) fora.push(id+(c?"+Code":"")+(a?"+ASU":"")+(mnt?"+mount":"")+": "+nome); });
    }));
  });
  // i-N72: no canal pasta, o prompt cita a pasta que o zip cria, e abre pela versao
  const dev=T.normNiche(T.NICHES.dev);
  S.workmode={codeMode:"yes", asuMode:"", groupMode:"no", mountMode:""};
  const upP=T.buildUpdatePrompt(dev), pasta=T.updatePackFolder();
  S.workmode={codeMode:"yes", asuMode:"", groupMode:"no", mountMode:"yes"};
  const upM=T.buildUpdatePrompt(dev);
  S.workmode=prev;
  const fonte=fs.readFileSync(path,"utf8");
  assert(fora.length===0, "o kit gera duas regras que se contradizem -> "+fora.slice(0,6).join(" | ")+(fora.length>6?" (+"+(fora.length-6)+")":""));
  assert(/^\d{6}-kcm-update-v\d+\.\d+\.\d+$/.test(pasta) && pasta.endsWith(T.KIT_VERSION), "o nome da pasta do pacote nao tem a forma AAMMDD-kcm-update-vX.Y.Z com a versao do kit: "+pasta);
  assert(upP.indexOf("`"+pasta+"/`")>-1, "no canal pasta, o prompt de atualizacao nao cita a pasta que o zip cria ("+pasta+"/)");
  assert(/updatePackFolder\(\) \+ "\.zip"/.test(fonte) && /zip\.file\(dir \+ f\.flat/.test(fonte), "o download do pacote nao usa a pasta que o prompt cita — o nome do zip e o do prompt voltam a divergir");
  [upP, upM].forEach(u => assert(/\*\*Primeiro, a versao:\*\*/.test(u) && u.indexOf("v"+T.KIT_VERSION)>-1, "o prompt de atualizacao nao manda conferir a versao do pacote antes de comparar"));
  assert(upP.indexOf("**Primeiro, a versao:**") < upP.indexOf("**Antes de comparar qualquer coisa:**"), "a conferencia da versao vem DEPOIS da ordem de comparar");
  return "ok (" + PARES.length + " pares em " + textos + " combinacoes; pasta do pacote " + pasta + ")";
});

check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
```

(O texto novo termina repetindo a ancora.)

## Edicao 16 — `validate.js` · `C38` · o carimbo de modos cobra a regra decidivel

**Ancora** (no `C38`; a linha inteira):

```
    [/reporta como choque com a seção citada e não remove sozinho/, "sobra de modo desligado sem a regra de reportar-e-nao-remover"],
```

**Substituir por:**

```
    [/essa você pergunta, e não remove sozinho/, "sobra de modo desligado sem a regra: marcador decide a sobra, e so o modo esquecido de LIGAR fica para o dono (D-137, wo0139)"],
```

## Edicao 17 — `meta/CHANGELOG.md` · versao atual

**Ancora** :

```
> Histórico de versões. Versão atual: **v1.129.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.130.0**.
```

## Edicao 18 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.129.0 — No canal pasta, o prompt de atualização, o `CLAUDE.md`, o molde de WO e o prompt C param de falar a língua do mount (wo0137, D-164)
```

**Substituir por:**

```
## v1.130.0 — O que o kit gera para de se contradizer, e o pacote diz a própria versão e a própria pasta (wo0139, D-166)
- **Quatro contradições consertadas pelo lado velho:** «a entrega é por ARQUIVO COMPLETO» passa a valer sem executor, e com executor remete ao teste do parágrafo seguinte; o gatilho «Fim da conversa» aponta para a seção do modo em vez de mandar entregar arquivos completos; o CEREBRO diz o que o manifesto já dizia desde a `D-137` — o marcador decide a sobra, e só o modo esquecido de LIGAR fica para o dono; o pedido de medição vai como arquivo, nunca colado; e, com o Code, a linha de commit das Instruções diz que havendo WO o bloco é dela (+14 caracteres; incremento do Code 526 → 540/550).
- **Check novo `C111`, de pares:** cinco pares de regras que não podem coexistir no mesmo texto lido pelo assistente (Instruções + CEREBRO + manifesto + prompt de atualização), varridos em 19 nichos × quatro modos × dois canais. Semeado com as quatro do GameDataHub; par novo entra quando alguém achar. O `C38` passa a cobrar a regra decidível do carimbo.
- **O pacote (`i-N72`):** no canal pasta, o zip se chama `AAMMDD-kcm-update-vX.Y.Z.zip` e traz o conteúdo dentro de uma pasta com o mesmo nome, que é a que o `_UPDATE-PROMPT.md` cita; e o prompt abre mandando conferir a versão do manifesto contra a anunciada — diferente, PARE. No mount, o zip continua como era.
- **Origem:** o item de 2026-10-19 do GameDataHub e a análise `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md`. O CEREBRO no canal pasta (`i-N70`) é a WO seguinte. Harness **19/19 · 112/112**.

## v1.129.0 — No canal pasta, o prompt de atualização, o `CLAUDE.md`, o molde de WO e o prompt C param de falar a língua do mount (wo0137, D-164)
```

## Edicao 19 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; TRECHO de uma linha longa, 1 ocorrencia — o resto da linha fica):

```
Versão atual: **v1.129.0**.
```

**Substituir por:**

```
Versão atual: **v1.130.0**.
```

## Edicao 20 — `meta/IDEAS.md` · a `i-N72` resolvida

**Ancora** (o titulo inteiro):

```
## i-N72 — O pacote de atualização no canal pasta: o nome do zip não bate com a pasta que o prompt manda procurar, e o receptor não confere a versão — ABERTA, gatilho: a próxima WO de kit
```

**Substituir por:**

```
## i-N72 — O pacote de atualização no canal pasta: o nome do zip não bate com a pasta que o prompt manda procurar, e o receptor não confere a versão — RESOLVIDA em 2026-10-20 (wo0139, `D-166`): o zip e a pasta têm o nome que o prompt cita, e o prompt abre pela versão; `C111`
```

## Edicao 21 — `meta/IDEAS.md` · a `i-N71` ganha o segundo projeto no metodo C

**Ancora** (o titulo inteiro):

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, gatilho: dez WOs no método C no satelite-web
```

**Substituir por:**

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, gatilho: dez WOs no método C no satelite-web

**2026-10-20 — um segundo projeto no método C:** o **Observatorio** (`C:\Users\alexk\Trabalho\Observatorio`), novo, começa orientado pelo dono a seguir o fluxo do satelite-web `[relatado pelo dono]`. Ainda não lido pelo KCM. Quando tiver dez WOs, é o segundo conjunto de dado de campo — e o primeiro de um projeto que nasceu no método C, sem a transição.
```

(O corpo antigo da `i-N71` continua logo abaixo, como esta.)

## Edicao 22 — `meta/DECISIONS.md` · `D-166` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Fora:** virar regra gerada para todo projeto do kit» e termina em «escrita no `meta/CEREBRO.md`.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-166 — O que o kit gera para de se contradizer, com um check de pares; e o pacote diz a própria versão e a própria pasta

**Data:** 2026-10-20 · **WO:** 0139 · **Origem:** o item de 2026-10-19 do GameDataHub (o merge do pacote v1.127.0 achou quatro contradições no próprio pacote) e a análise `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md`, cinco pontos aceitos pelo dono em 2026-10-20 · **Resolve:** `i-N72`.

**Decisão.** As quatro contradições — entrega por arquivo completo × o modo Code registra; o gatilho do fim da conversa × o modo Code registra; o carimbo «indistinguível» no CEREBRO × «decidível» no manifesto (`D-137`); a medição em bloco colável × nunca empurre bloco; o commit sem exceção nas Instruções × «havendo WO, o bloco é de quem aplica» — são consertadas pelo lado velho, que é o que ficou para trás quando a regra nova entrou. O `C111` guarda os cinco pares (o gatilho e a entrega contam separados) em 19 nichos × quatro modos × dois canais; o par que só se contradiz com o Code é conferido só com o Code. No pacote, o canal pasta ganha o nome conferível: zip e pasta `AAMMDD-kcm-update-vX.Y.Z`, citados pelo prompt a partir de uma função só (`updatePackFolder`), e o prompt abre mandando conferir a versão. Corta a **v1.130.0** (`D-158`).

**Por quê o check de pares.** O harness conferia que cada regra existe, e nada conferia que duas regras do mesmo texto concordam: as quatro nasceram de uma regra nova que entrou sem tocar a antiga. O par listado não volta; o par novo continua sendo achado por leitura — desta vez, a do vizinho no merge.

**Fora:** o CEREBRO no canal pasta (`i-N70`, a WO seguinte, v1.131.0); uma varredura geral de contradições (fica como exploração). A data da pasta do pacote vem de `today`, que é a data UTC do kit: gerado à noite no Brasil, sai com a data do dia seguinte — comportamento de todo o kit, mantido.

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0139 traz a medida no repo]`: `index.html` 924.444 → 925.835 bytes; incremento do Code nas Instruções 526 → 540/550; check novo `C111`; harness 111 → **112**.
```

## Edicao 23 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (925835 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **112/112**. Registre crua no relatorio a linha do `C111`, a do `C38` e a do `C28`. Harness vermelho = **PARE**.

## Edicao 24 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 23. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere ou remove (medido no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF 'nunca por blocos soltos para o usuário costurar' src/index.template.html     # 1 -> 0
grep -cF 'Registra o que falta, cada documento pelo canal dele' src/index.template.html  # 0 -> 1
grep -cF 'não tem como distinguir os dois casos' src/index.template.html                # 1 -> 0
grep -cF 'essa você pergunta, e não remove sozinho' src/index.template.html             # 0 -> 1
grep -cF 'É bloco colável, entregue como qualquer instrução' src/index.template.html     # 1 -> 0
grep -cF '**Commit:** havendo WO, o bloco de commit é dela' src/index.template.html      # 0 -> 1
grep -cF 'function updatePackFolder()' src/index.template.html                          # 0 -> 1
grep -cF '**Primeiro, a versao:**' src/index.template.html                              # 0 -> 1
grep -cF 'updatePackFolder() + ".zip"' src/index.template.html                          # 0 -> 1
grep -cF 'const KIT_VERSION = "1.130.0";' src/index.template.html                       # 0 -> 1
grep -c '^check("C111 ' validate.js                                                     # 0 -> 1
grep -cF 'essa você pergunta, e não remove sozinho' validate.js                         # 0 -> 1
grep -c '^## D-166 ' meta/DECISIONS.md                                                  # 0 -> 1
grep -c '^## i-N72 .*RESOLVIDA' meta/IDEAS.md                                           # 0 -> 1
grep -m1 '^## v' meta/CHANGELOG.md                                                      # v1.129.0 -> v1.130.0
```

**Prova negativa (rode e restaure):** no `src/index.template.html`, na linha da Edicao 5, troque `codeModeOn() ?` por `false ?` (a linha de commit volta a ser a antiga com o Code ligado), rode `node build.js` e `node validate.js index.html`: o `C111` tem de ficar vermelho com `dev+Code: commit sem excecao x commit e da WO`. Restaure, rode o build de novo e confira que o `index.html` voltou ao tamanho da Edicao 23 e o harness ao verde.

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 17 | 11 |
| `index.html` (gerado) | 17 | 11 |
| `validate.js` | 42 | 2 |
| `meta/CHANGELOG.md` | 7 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 3 | 1 |
| `meta/DECISIONS.md` | 12 | 0 |
| `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (nova, do chat) | 84 | 0 |
| `logs/2026-10-20.md` (novo, do chat) | 38 | 0 |
| `meta/workorders/261020-wo0139-contradicoes-e-pacote-com-versao.md` (esta WO) | 516 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada.

## Edicao 25 — commit e push (verde = sem perguntar)

```
git add src/index.template.html index.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md logs/2026-10-20.md meta/workorders/261020-wo0139-contradicoes-e-pacote-com-versao.md
```

```
git commit -m "feat(kit): o que o kit gera para de se contradizer, com check de pares, e o pacote diz a propria versao e pasta (wo0139, D-166)" -m "Quatro contradicoes consertadas pelo lado velho; C111 novo com cinco pares; C38 cobra a regra decidivel do carimbo. No canal pasta, zip e pasta AAMMDD-kcm-update-vX.Y.Z citados pelo prompt, que abre pela versao (i-N72). v1.130.0."
```

```
git push
```

---

## Fora de escopo

- O CEREBRO no canal pasta (`i-N70`): a WO seguinte, v1.131.0.
- Uma varredura geral por contradicoes novas: o `C111` guarda as listadas; achar as outras e leitura.
- A data UTC do `today` (vale para todo o kit).
- O pacote aos vizinhos: sai uma vez, depois da WO do CEREBRO.

## Armadilhas desta WO

- **Fim de linha.** `src/index.template.html`, `validate.js` e `meta/DECISIONS.md` sao **CRLF** na arvore; os textos novos das Edicoes 6, 8, 9, 15 e 22 tem varias linhas — grave-os em CRLF. `meta/CHANGELOG.md`, `meta/STATUS.md` e `meta/IDEAS.md` sao LF.
- **A pasta do pacote tem a data do dia em que o harness roda** (UTC): o numero da linha do `C111` muda de um dia para o outro, e isso nao e desvio.
- **Edicoes que repetem a ancora dentro do texto novo** (5, 6, 8, 15, 18 e 21): a idempotencia e pelo texto novo INTEIRO.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0139.txt` (`date +%y%m%d-%H%M`, rodado na hora).
