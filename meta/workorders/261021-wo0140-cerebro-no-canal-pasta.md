# WO 0140 — no canal pasta, o CEREBRO deixa a lingua do mount nas regras que disparam todo turno

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa e o registro).
> **Config sugerida:** modelo padrao, esforco medio. 22 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`; todas as ancoras sao de UMA linha inteira, menos a do STATUS (trecho do cabecalho, como nas WOs anteriores).
> **Pre-requisito:** HEAD = `aea1749`, `main` = `origin/main`. Harness em **19/19 · 112/112 · 0 erros**, v1.130.0.
> **Base:** `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (WO-2), os cinco pontos aceitos pelo dono em 2026-10-20; `i-N70`.
> **Depende de:** wo0139 (aplicada, `84184bd`; fecho `aea1749`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `b90a0f0cbf0ec06a970f27436b018f363984daf7  meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (status e elos atualizados pelo chat, LF)
> - `c191c99ab73db3266167860058fad880c6f088aa  logs/2026-10-21.md` (novo, secao «Conversa 1 (chat)», LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo. Se ja estiver, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `aea1749`; recortadas do arquivo vivo por script, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `src/index.template.html` — a linha `function buildClaudeMd(niche){`; a linha do carimbo «*Gerado pelo Kit de Contexto Universal v${KIT_VERSION} — nicho ${niche.label}…*» no fim do `buildClaudeMd`; `const KIT_VERSION`
> - `validate.js` — a linha `const SHIM`; a clausula «CEREBRO: ressalva tem custo» do `C43`; as asserções «Monte a lista a partir de uma LISTAGEM do mount», «o mount não é prova» e «mais recente vence» (`C55`), «vem INTEIRO e atualizado» (`C41`), «Sem cópia achatada nem manifesto» e o desempate «mais recente vence && manifesto» (`C33`), «continuar no mount até o merge fechar» (`C29`), «se há avulso no mount» (`C19`), «não trate o mount como verdade absoluta» (`C14`); a linha `check("C27 leva sand-land (wo0070)`
> - `meta/CEREBRO.md` — a linha «- **«Não verificado» é proibido para o que está no mount**»; `.claude/skills/wrap/SKILL.md` — as duas linhas «Se alguma análise de `meta/analises/`…» e «atualize o **Status** dela…»
> - `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.130.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — o titulo da `i-N70`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-167`, CHANGELOG, a `i-N70` resolvida, a casa (`meta/CEREBRO.md` e a skill `wrap`). A edicao do STATUS e so o numero da versao (excecao da `D-158`); a contagem 112 → 113 no cabecalho do STATUS e do `/wrap`. **A analise e o log de 21/10 sao do chat:** esta WO so os versiona pelo sha1 — e, desde esta WO, o `/wrap` **relata** a mudanca de estado de analise, nao a edita.

---

## 1. Por que

A sonda da analise achou 46 linhas distintas com vocabulario do mount no CEREBRO gerado no canal pasta, cerca de 20 delas regras lidas todo turno que contradizem a secao «Canal do chat» do mesmo arquivo (o fecho «Arquivar / Manter — so se houver notas avulsas no mount», uma segunda abertura de turno, P8, P11, a entrega sem Code, «Se aparecerem no mount» no protocolo de atualizacao). Esta WO da a elas o texto do canal pasta e marca a secao de transferencia como reserva no titulo. Corta a **v1.131.0** (`D-158`).

## 2. Contexto factual — medido na replica

**O mecanismo:** quase todas essas linhas vem de constantes carregadas uma vez (`HYGIENE_RULES`, `TRIGGERS_BASE`, `UPDATE_PROTOCOL`, `BEHAVIORS_BASE`), que nao sabem o canal — o ternario da wo0135 nao as alcanca. Entra uma tabela de 39 pares exatos, `CANAL_PASTA` (o texto do mount, recortado do CEREBRO gerado, e o texto do canal pasta), aplicada a saida do `buildClaudeMd` so com o Mount desligado. O CEREBRO do mount nao passa pela tabela.

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 112/112 | **19/19 · 113/113** (entra o `C112`) | `node validate.js index.html` |
| `C112` | — | `ok (39 trocas em 76 CEREBROs do canal pasta; o mount sai sem elas)` | linha do `C112` |
| `C43` | `ok (instalado confere com o gerado em 72 clausulas)` | identico | linha do `C43` |
| `C28` | `ok (padrao 5852/6900 · +Code 540/550 · … · combo+SO 7199/7600 · 304 configuracoes)` | identico (as Instrucoes nao mudam) | linha do `C28` |
| `C54` | v1.130.0 | **v1.131.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 925.835 bytes | **936.658 bytes** | a linha `OK:` do `node build.js` |

- **O canal mount sai identico:** com a versao normalizada, **741 de 741** textos (Instrucoes, CEREBRO, prompts A a F, prompt de atualizacao e kit do Code; 19 nichos × quatro combinacoes de modo). No canal pasta, so o CEREBRO muda.
- **Linhas distintas com vocabulario do mount no CEREBRO do canal pasta:** 46 → 29 — sobram a secao de transferencia (agora «canal de reserva» no titulo), o achatamento, e as legitimas nos dois canais (o painel «Instruções do Projeto», o `.yaml` do ASU, a propria secao de canal).
- **As 39 trocas acham o seu texto** em todos os CEREBROs do mount em que a regra aparece; so a troca 17 («Só pede o upload se a busca não encontrar») acha duas vezes por CEREBRO — no P8 e na secao «Verifica antes de pedir um arquivo» —, e as duas sao trocadas.
- **Prova de que o `C112` acusa:** a prova negativa da Edicao 25.

## Inventario

- **Template:** 1 tabela nova com 39 pares + `canalPasta()`; 1 linha no fim do `buildClaudeMd`; `KIT_VERSION`.
- **Harness:** `C112` novo; o `SHIM` exporta `CANAL_PASTA` e `canalPasta`; nove asserções de seis checks (`C14`, `C19`, `C29`, `C33` ×2, `C41`, `C55` ×3) passam a aceitar a frase de qualquer um dos dois canais — achadas por uma sonda que testa cada regex do `validate.js` contra cada texto velho da tabela; a clausula do `C43`.
- **Casa:** `meta/CEREBRO.md` (1 linha, a ressalva); `.claude/skills/wrap/SKILL.md` (2 linhas, a analise e do chat).
- **Fora:** o P8 da casa; o kit gerado sem pasta (o mount), que nao muda.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `aea1749`. Se diferente, **PARE e reporte**.
2. `sha1sum meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md logs/2026-10-21.md` = os do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md`, `?? .claude/launch.json`, `?? logs/2026-10-21.md`, `?? meta/workorders/261021-wo0140-cerebro-no-canal-pasta.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c '^check("C112 ' validate.js` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `src/index.template.html` · a tabela de trocas do canal pasta, antes do `buildClaudeMd`

**Ancora** (a linha inteira):

```
function buildClaudeMd(niche){
```

**Substituir por:**

```
// wo0140 (i-N70, D-167): no canal pasta, as regras do CEREBRO que disparam todo turno deixam a lingua do mount.
// Cada par: o texto do mount, recortado do CEREBRO gerado, e o texto do canal pasta. A tabela so se aplica com o
// Mount desligado, entao o CEREBRO do mount sai identico. A secao de transferencia e o achatamento continuam,
// marcados como reserva no titulo. O C112 confere que cada par ainda acha o seu texto.
const CANAL_PASTA = [
  ["liste o mount, leia o cabeçalho da cópia achatada se houver (data de geração + estado do repo), e confira a versão viva do artefato principal contra a que você acha que sabe. Um passo, quatro fatos, e só então o trabalho. **Sem cópia achatada nem manifesto** o passo continua valendo com o que houver — a listagem sozinha já mostra nota nova —; o que muda é o carimbo do fecho, que declara a base pobre em vez de fingir precisão.",
   "rode `git log -3 --oneline` e `git status --short`, liste a pasta-pai, e confira a versão viva do artefato principal contra a que você acha que sabe. Um passo, quatro fatos, e só então o trabalho. **Sem a pasta**, vale a reserva (o mount e a cópia achatada); o que muda é o carimbo do fecho, que declara a base pobre em vez de fingir precisão."],
  ["A releitura do mount não tem gatilho próprio",
   "A releitura da pasta não tem gatilho próprio"],
  ["porque quem pede muito costuma ter subido algo antes de pedir",
   "porque quem pede muito costuma ter posto algo na pasta antes de pedir"],
  ["**E os canais não chegam juntos:** relatório que a execução grava em arquivo nasce no instante da aplicação, enquanto a cópia achatada exige um passo manual de quem a gera. **Compare os dois carimbos de commit — o do manifesto e o do relatório — e o mais recente vence.** O relatório lidera **por padrão**, porque normalmente nasce primeiro; não por natureza: o dono commita entre relatórios (salva um doc que o chat entregou, corrige um arquivo à mão) e aí o manifesto está à frente e é a cópia que está em dia. Uma vez que se compara em vez de supor, a divergência vira diagnóstico: **iguais** = o mount é o estado pós-aplicação; **manifesto à frente** = houve commit sem executor, o manifesto lidera; **manifesto atrás** = o mount foi gerado antes de aplicar, o relatório lidera; **iguais mas com arquivo divergindo do commit** = há trabalho por cima, leia quais; **dois relatórios com o mesmo commit** = um foi reaberto e corrigido, vale o corrigido.",
   "**E o relatório não é o estado:** ele afirma um commit, e o `git log` diz se esse commit existe e se há outro por cima — o dono commita entre relatórios (salva um doc, corrige um arquivo à mão). Compare em vez de supor, e a divergência vira diagnóstico: **iguais** = o disco é o estado pós-aplicação; **há commit depois** = houve trabalho por cima, leia o que entrou; **o commit do relatório não aparece** = não foi empurrado, ou foi refeito: pergunte; **`git status` com arquivo mudado** = há trabalho não versionado, leia quais; **dois relatórios com o mesmo commit** = um foi reaberto e corrigido, vale o corrigido."],
  ["o dono subiu porque e para agora",
   "o dono o pos ali porque e para agora"],
  ["**«Não verificado» é proibido para o que está no mount,",
   "**«Não verificado» é proibido para o que está ao seu alcance — a pasta, ou o mount na reserva —,"],
  ["«listei o mount e não está lá» é ressalva",
   "«listei a pasta e não está lá» é ressalva"],
  ["Manda MEDIR (sonda) em vez de deduzir ou pedir upload.",
   "Manda MEDIR (sonda) em vez de deduzir ou pedir o arquivo."],
  ["Confirme que o arquivo chegou ao mount antes de concluir que esta limpo. Cheque `.gitignore` e `.flatdropignore`:",
   "Confirme que o arquivo esta na pasta que voce le antes de concluir que esta limpo. Cheque o `.gitignore` e o que esta conversa alcanca:"],
  ["APLICA de forma simples: baixa os arquivos completos e substitui os antigos na pasta (e sobe no Git/Projeto, se usar). Sem editar nada à mão.",
   "APLICA de forma simples: o assistente grava os arquivos completos direto no lugar deles, e o usuário confere e versiona. Sem editar nada à mão."],
  ["Sobre os arquivos: os documentos já no Projeto chegam ao assistente como somente-leitura (ele lê, não salva por cima). Isso NÃO o impede de entregar versões novas — ele cria cada arquivo atualizado como arquivo novo para baixar. Sem ferramenta de download, entrega o conteúdo completo de cada arquivo no chat, um por bloco.",
   "Sobre os arquivos: com a pasta vinculada, o assistente lê e grava no disco — e relê antes de sobrescrever, porque outro escritor pode ter mexido."],
  ["Se eu colar (ou subir) um bloco/arquivo marcado",
   "Se eu colar um bloco, ou puser na pasta um arquivo, marcado"],
  ["## Transferência entre conversas: o que vai para o Projeto e o que se anexa",
   "## Transferência entre conversas — canal de reserva (sem a pasta vinculada): o que vai para o Projeto e o que se anexa"],
  ["Cada arquivo abaixo vem INTEIRO e atualizado, pronto para você baixar e substituir o antigo. Aplicá-los é decisão sua:",
   "Cada arquivo abaixo é gravado INTEIRO e atualizado, direto no lugar dele na pasta, relido antes de sobrescrever. Diga o que gravou — versioná-los é decisão sua:"],
  ["Antes de pedir que o usuário suba qualquer arquivo (JSON, log, saída, documento), verifica primeiro se ele já não está disponível — na base do Projeto, nos uploads, ou já colado na conversa.",
   "Antes de pedir que o usuário traga qualquer arquivo (JSON, log, saída, documento), verifica primeiro se ele já não está disponível — na pasta do projeto, na pasta-pai, ou já colado na conversa."],
  ["Quando o usuário diz «já subi X»",
   "Quando o usuário diz «já pus X na pasta»"],
  ["Só pede o upload se a busca não encontrar",
   "Só pede o arquivo se a busca não encontrar"],
  ["(arquivos do Projeto/mount, o que já foi entregue na conversa)",
   "(a pasta, o `git log`, o que já foi entregue na conversa)"],
  ["Reveja o mount a CADA turno (novos `.txt`, `_MANIFEST`, arquivos mudados) antes de responder — não espere eu sinalizar upload; um «continuar» ou uma reclamação também pode vir com o mount atualizado. Compare o mount com o que você lembrava: não trate o mount como verdade absoluta nem confie só na memória — o mount é provavelmente a pasta do usuário, mas ele pode ter esquecido de subir. Se difere do que você lembrava, é provável atualização: estude a diferença. Se o mount bate com a memória mas eu afirmo ter aplicado algo que não aparece, faça o que dá e AVISE («o mount não parece atualizado com X»), em vez de inferir cegamente ou regenerar o que já foi feito.",
   "Releia a pasta a CADA turno (`git log -3 --oneline`, `git status --short` e a listagem da pasta-pai: nota nova, relatório novo, commit novo) antes de responder — não espere eu sinalizar; um «continuar» ou uma reclamação também pode vir com o disco mudado. Compare o disco com o que você lembrava: se difere, é provável atualização — estude a diferença. Se o disco bate com a memória mas eu afirmo ter aplicado algo que não aparece, faça o que dá e AVISE («o commit de X não aparece no `git log`»), em vez de inferir cegamente ou regenerar o que já foi feito."],
  ["e em que ESTADO está o mount.",
   "e em que ESTADO está a pasta."],
  ["O mount responde o AGORA.",
   "O disco responde o AGORA."],
  ["o mount não é prova, e usá-lo assim",
   "o disco não é prova, e usá-lo assim"],
  ["Antes de finalizar uma resposta pedindo que eu suba qualquer arquivo (JSON, log, saída, documento), o assistente verifica primeiro se ele já não está disponível — na base do Projeto, nos uploads, ou já citado/colado na conversa.",
   "Antes de finalizar uma resposta pedindo que eu traga qualquer arquivo (JSON, log, saída, documento), o assistente verifica primeiro se ele já não está disponível — na pasta do projeto, na pasta-pai, ou já citado/colado na conversa."],
  ["para eu subir certo de primeira",
   "para eu pôr certo de primeira"],
  ["for mais nova que a do Projeto/mount",
   "for mais nova que a do disco"],
  ["e não a do Projeto»)",
   "e não a do disco»)"],
  ["Não vê o disco local do usuário; compara com o que tem à vista.",
   "Com a pasta vinculada, vê o disco: relê a versão do disco antes de usar a sua — ela pode ter mudado depois que você a leu."],
  ["Se aparecerem no mount arquivos com sufixo `__template-update` junto de um `_UPDATE-MANIFEST.md`:",
   "Se aparecer na pasta-pai uma pasta `AAMMDD-kcm-update-vX.Y.Z/` com arquivos de sufixo `__template-update` e um `_UPDATE-MANIFEST.md`:"],
  ["Antes de comparar, o assistente lista o mount e diz em que versão/commit",
   "Antes de comparar, o assistente roda `git log` e diz em que versão/commit"],
  ["precisa continuar no mount até o merge fechar",
   "precisa continuar na pasta-pai até o merge fechar — e então é MOVIDO para as notas arquivadas"],
  ["A raia de planejamento tem teto de contexto e lê só o que chega pelo mount; a raia de execução lê o disco inteiro e não tem nenhum dos dois limites.",
   "A raia de planejamento lê a pasta, com teto de contexto e de tempo por comando; a raia de execução lê o repositório inteiro e não tem nenhum dos dois limites."],
  ["a saída não é pedir upload de um arquivo grande",
   "a saída não é pedir o arquivo grande"],
  ["chega como upload, é lida",
   "chega na pasta-pai, é lida"],
  ["**Arquivar / Manter** sai quando houver qualquer arquivo avulso no mount, e essa condição se verifica LISTANDO o mount, não lembrando",
   "**Arquivar / Manter** sai quando houver qualquer arquivo avulso na pasta-pai, e essa condição se verifica LISTANDO a pasta-pai, não lembrando"],
  ["só se houver notas avulsas no mount.",
   "só se houver notas avulsas na pasta-pai."],
  ["todo arquivo avulso do mount entra numa das duas",
   "todo arquivo avulso da pasta-pai entra numa das duas"],
  ["**Monte a lista a partir de uma LISTAGEM do mount,",
   "**Monte a lista a partir de uma LISTAGEM da pasta-pai,"],
  ["arquivo já arquivado em turno anterior **continua no mount**, então continua na lista",
   "arquivo dado como arquivado em turno anterior que **continua na pasta-pai** (o movimento não foi feito) continua na lista"],
  ["(se há avulso no mount — listado, não lembrado)",
   "(se há avulso na pasta-pai — listado, não lembrado)"],
];
function canalPasta(s){ return CANAL_PASTA.reduce((t, [velho, novo]) => t.split(velho).join(novo), s); }
function buildClaudeMd(niche){
```

(O texto novo termina repetindo a ancora.)

## Edicao 2 — `src/index.template.html` · o `buildClaudeMd` aplica a tabela no canal pasta

**Ancora** (a ultima linha antes do `return` do `buildClaudeMd`; a linha inteira):

```
  L.push(`*Gerado pelo Kit de Contexto Universal v${KIT_VERSION} — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
```

**Substituir por:**

```
  L.push(`*Gerado pelo Kit de Contexto Universal v${KIT_VERSION} — nicho ${niche.label}. Edite à vontade: este arquivo é seu.*`);
  if(!mountModeOn()) return canalPasta(L.join("\n"));
```

(O texto novo repete a ancora e acrescenta a linha do canal pasta; o `return` de sempre fica logo abaixo e e o do mount.)

## Edicao 3 — `src/index.template.html` · corte de versao (D-158)

**Ancora** :

```
const KIT_VERSION = "1.130.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.131.0";
```

## Edicao 4 — `validate.js` · a tabela sai para o harness

**Ancora** (a linha inteira):

```
const SHIM = 'window.__T = {OSENV, OS_CMDNOTE, INSTR_TETO_MODOS, MODO_ORCAMENTO, structuredFlatdropignore, NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, buildWoTemplate, fileBehaviorLabel, REVOCATIONS, generatedContextFiles, PROMPTS_BASE, INSTR_TETO, KIT_VERSION, updatePackFolder};';
```

**Substituir por:**

```
const SHIM = 'window.__T = {OSENV, OS_CMDNOTE, INSTR_TETO_MODOS, MODO_ORCAMENTO, structuredFlatdropignore, NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, buildWoTemplate, fileBehaviorLabel, REVOCATIONS, generatedContextFiles, PROMPTS_BASE, INSTR_TETO, KIT_VERSION, updatePackFolder, CANAL_PASTA, canalPasta};';
```

## Edicao 5 — `validate.js` · `C43` · a ressalva vale para o que esta ao alcance, nos dois lados

**Ancora** (na lista `CLAUSULAS`; a linha inteira):

```
    ["CEREBRO: ressalva tem custo",    /é proibido para o que está no mount/, ["cerebro"]],
```

**Substituir por:**

```
    ["CEREBRO: ressalva tem custo",    /é proibido para o que está ao seu alcance/, ["cerebro"]],
```

## Edicao 6 — `validate.js` · o `C112`, antes do `C27`

**Ancora** (a linha inteira):

```
check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
```

**Substituir por:**

```
check("C112 no canal pasta, o CEREBRO nao manda fazer pelo mount o que a pasta faz: cada troca acha o seu texto, nenhum texto velho sobra, e o mount sai igual (wo0140, D-167)", () => {
  const S=T.STATE; const prev=Object.assign({}, S.workmode||{});
  const P=T.CANAL_PASTA, usada=P.map(()=>0), fora=[]; let textos=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    [["",""],["yes",""],["","yes"],["yes","yes"]].forEach(([c,a]) => {
      const tag=id+(c?"+Code":"")+(a?"+ASU":"");
      S.workmode={codeMode:c, asuMode:a, groupMode:"no", mountMode:"yes"};
      const M=T.buildClaudeMd(n);
      S.workmode={codeMode:c, asuMode:a, groupMode:"no", mountMode:""};
      const C=T.buildClaudeMd(n); textos++;
      P.forEach(([velho,novo],i) => {
        if(M.indexOf(velho)>-1) usada[i]++;
        if(C.indexOf(velho)>-1) fora.push(tag+": «"+velho.slice(0,48)+"»");
      });
      // o mount nao passa pela tabela: aplicar a tabela ao CEREBRO do mount nao pode dar o do mount de volta
      if(T.canalPasta(M)===M) fora.push(tag+": a tabela nao achou nada no CEREBRO do mount");
    });
  });
  S.workmode=prev;
  const parada=P.map((p,i)=>usada[i]?null:(i+1)+": «"+p[0].slice(0,48)+"»").filter(Boolean);
  assert(parada.length===0, "troca que nao acha mais o seu texto no CEREBRO do mount (o texto velho mudou e a tabela ficou para tras) -> "+parada.slice(0,6).join(" | "));
  assert(fora.length===0, "texto do mount que sobrou no CEREBRO do canal pasta -> "+fora.slice(0,6).join(" | ")+(fora.length>6?" (+"+(fora.length-6)+")":""));
  return "ok (" + P.length + " trocas em " + textos + " CEREBROs do canal pasta; o mount sai sem elas)";
});

check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
```

(O texto novo termina repetindo a ancora.)

## Edicao 7 — `validate.js` · `C55` · aceita a frase dos dois canais

**Ancora** (a linha inteira):

```
    assert(/Monte a lista a partir de uma LISTAGEM do mount/.test(cmd), id+": a lista de Arquivar ainda sai da memoria do que chegou — memoria so devolve o que e novo");
```

**Substituir por:**

```
    assert(/Monte a lista a partir de uma LISTAGEM (do mount|da pasta-pai)/.test(cmd), id+": a lista de Arquivar ainda sai da memoria do que chegou — memoria so devolve o que e novo");
```

## Edicao 8 — `validate.js` · `C41` · aceita a frase dos dois canais

**Ancora** (a linha inteira):

```
    assert(/vem INTEIRO e atualizado/.test(cmdN), id+" (sem Code): o CEREBRO universal perdeu a entrega inteira");
```

**Substituir por:**

```
    assert(/vem INTEIRO e atualizado|é gravado INTEIRO e atualizado/.test(cmdN), id+" (sem Code): o CEREBRO universal perdeu a entrega inteira");
```

## Edicao 9 — `validate.js` · `C33` · aceita a frase dos dois canais

**Ancora** (a linha inteira):

```
    assert(/Sem cópia achatada nem manifesto/.test(cmd), id+": o passo de abertura nao degrada para projeto sem copia achatada");
```

**Substituir por:**

```
    assert(/Sem cópia achatada nem manifesto|\*\*Sem a pasta\*\*, vale a reserva/.test(cmd), id+": o passo de abertura nao degrada para projeto sem copia achatada");
```

## Edicao 10 — `validate.js` · `C29` · aceita a frase dos dois canais

**Ancora** (a linha inteira):

```
    assert(/continuar no mount até o merge fechar/.test(cmd), id+": CEREBRO nao manda manter o pacote no mount ate o merge fechar");
```

**Substituir por:**

```
    assert(/continuar (no mount|na pasta-pai) até o merge fechar/.test(cmd), id+": CEREBRO nao manda manter o pacote no mount ate o merge fechar");
```

## Edicao 11 — `validate.js` · `C19` · aceita a frase dos dois canais

**Ancora** (a linha inteira):

```
  assert(/se há avulso no mount/.test(c) && /se algum arquivo foi entregue NESTE turno/.test(c),"o esqueleto do fecho perdeu as condicoes coladas nos rotulos (wo0111)");
```

**Substituir por:**

```
  assert(/se há avulso (no mount|na pasta-pai)/.test(c) && /se algum arquivo foi entregue NESTE turno/.test(c),"o esqueleto do fecho perdeu as condicoes coladas nos rotulos (wo0111)");
```

## Edicao 12 — `validate.js` · `C14` · aceita a frase dos dois canais

**Ancora** (a linha inteira):

```
  assert(/não trate o mount como verdade absoluta/.test(T.buildClaudeMd(n)),"CEREBRO sem logica memoria x mount");
```

**Substituir por:**

```
  assert(/não trate o mount como verdade absoluta|Compare o disco com o que você lembrava/.test(T.buildClaudeMd(n)),"CEREBRO sem logica memoria x mount");
```

## Edicao 13 — `validate.js` · `C55` · o disco tambem responde o AGORA

**Ancora** (a linha inteira):

```
    assert(/o mount não é prova/.test(cmd), id+": falta dizer que o mount responde o AGORA, nao o ENTAO");
```

**Substituir por:**

```
    assert(/o (mount|disco) não é prova/.test(cmd), id+": falta dizer que o mount responde o AGORA, nao o ENTAO");
```

## Edicao 14 — `validate.js` · `C55` · o desempate no canal pasta e o `git log`

**Ancora** (a linha inteira):

```
    assert(/mais recente vence/.test(cmd), id+": sem criterio de desempate, «o relatorio lidera sempre» erra quando o dono commita entre relatorios");
```

**Substituir por:**

```
    assert(/mais recente vence|o `git log` diz se esse commit existe/.test(cmd), id+": sem criterio de desempate, «o relatorio lidera sempre» erra quando o dono commita entre relatorios");
```

## Edicao 15 — `validate.js` · `C33` · o desempate no canal pasta e o `git log`

**Ancora** (a linha inteira):

```
    assert(/mais recente vence/.test(cmd) && /manifesto/.test(cmd) && /relat[oó]rio lidera \*\*por padrão\*\*/.test(cmd),
```

**Substituir por:**

```
    assert((/mais recente vence/.test(cmd) && /manifesto/.test(cmd) && /relat[oó]rio lidera \*\*por padrão\*\*/.test(cmd)) || /o `git log` diz se esse commit existe/.test(cmd),
```

## Edicao 16 — `meta/CEREBRO.md` · a casa · a ressalva vale para o que esta ao alcance

**Ancora** (a linha inteira):

```
- **«Não verificado» é proibido para o que está no mount, e a ressalva honesta tem custo (FK-AE):** há duas coisas diferentes e elas se parecem por fora — **não verificado** (podia ler, não li) e **não legível por este canal** (não há como daqui). A primeira não é ressalva, é adiamento sem prazo, e nem quem escreve nem quem lê distingue as duas depois. Antes de escrever qualquer uma das duas, diga **qual leitura** você fez para chegar a ela: «listei o mount e o arquivo não está lá» é ressalva; «não olhei» é trabalho pendente. E cumprir a releitura do mount **pela metade** — listar os avulsos e abrir só os que parecem relevantes — é o modo mais comum de falhar de boa-fé, porque o que se perde é exatamente o que não se sabia que era preciso.
```

**Substituir por:**

```
- **«Não verificado» é proibido para o que está ao seu alcance — a pasta, ou o mount na reserva —, e a ressalva honesta tem custo (FK-AE):** há duas coisas diferentes e elas se parecem por fora — **não verificado** (podia ler, não li) e **não legível por este canal** (não há como daqui). A primeira não é ressalva, é adiamento sem prazo, e nem quem escreve nem quem lê distingue as duas depois. Antes de escrever qualquer uma das duas, diga **qual leitura** você fez para chegar a ela: «listei o mount e o arquivo não está lá» é ressalva; «não olhei» é trabalho pendente. E cumprir a releitura do mount **pela metade** — listar os avulsos e abrir só os que parecem relevantes — é o modo mais comum de falhar de boa-fé, porque o que se perde é exatamente o que não se sabia que era preciso.
```

## Edicao 17 — `.claude/skills/wrap/SKILL.md` · a skill `wrap` da casa · a analise e do chat: o Code relata, nao edita

**Ancora** (a linha inteira):

```
- Se alguma análise de `meta/analises/` foi decidida, implementada ou abandonada nesta sessão,
```

**Substituir por:**

```
- Se alguma análise de `meta/analises/` foi decidida, implementada ou abandonada nesta sessão, **diga no relatório**
```

## Edicao 18 — `.claude/skills/wrap/SKILL.md` · a skill `wrap` da casa · a analise e do chat (continuacao)

**Ancora** (a linha inteira):

```
  atualize o **Status** dela (e os elos «Vira» / «Decisão») — análise não se apaga, muda de estado.
```

**Substituir por:**

```
  qual e para que estado — não edite: a análise é do chat (CEREBRO, «Canal do chat», dono por documento), e ele atualiza o **Status** e os elos «Vira» / «Decisão» no turno seguinte. Análise não se apaga, muda de estado.
```

## Edicao 19 — `meta/CHANGELOG.md` · versao atual

**Ancora** :

```
> Histórico de versões. Versão atual: **v1.130.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.131.0**.
```

## Edicao 20 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.130.0 — O que o kit gera para de se contradizer, e o pacote diz a própria versão e a própria pasta (wo0139, D-166)
```

**Substituir por:**

```
## v1.131.0 — No canal pasta, o CEREBRO deixa a língua do mount nas regras que disparam todo turno (wo0140, D-167)
- **Uma tabela de 39 trocas exatas** (`CANAL_PASTA`), aplicada ao CEREBRO gerado só com o Mount desligado: a abertura de turno roda `git log` e `git status` e lista a pasta-pai; a releitura é da pasta, e o desempate entre relatório e estado é o `git log`; o fecho fala de avulso na pasta-pai; P8 relê a pasta a cada turno e P11 compara com o disco; a entrega sem Code grava no lugar; o protocolo de atualização procura `AAMMDD-kcm-update-vX.Y.Z/` na pasta-pai; a medição delegada diz que o chat lê a pasta; e a seção de transferência ganha «canal de reserva» no título. O canal mount sai idêntico (741 de 741 textos), e as Instruções não mudam.
- **Check novo `C112`:** cada troca ainda acha o seu texto no CEREBRO do mount, e nenhum texto velho sobra no do canal pasta, em 19 nichos × quatro modos. Nove asserções antigas, que cobravam a frase do mount no CEREBRO padrão, passam a aceitar a frase de qualquer um dos dois canais (`C14`, `C19`, `C29`, `C33`, `C41`, `C55`). A cláusula «ressalva tem custo» do `C43` passa a «é proibido para o que está ao seu alcance», no gerado e na casa.
- **A casa:** `meta/CEREBRO.md` acompanha a frase da ressalva; a skill `wrap` deixa de mandar o Code atualizar o status da análise — a análise é do chat, e o Code relata a mudança de estado.
- **Origem:** `i-N70` e a análise `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (WO-2). Harness **19/19 · 113/113**.

## v1.130.0 — O que o kit gera para de se contradizer, e o pacote diz a própria versão e a própria pasta (wo0139, D-166)
```

## Edicao 21 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; TRECHO de uma linha longa, 1 ocorrencia — o resto da linha fica):

```
Versão atual: **v1.130.0**.
```

**Substituir por:**

```
Versão atual: **v1.131.0**.
```

## Edicao 22 — `meta/IDEAS.md` · a `i-N70` resolvida

**Ancora** (o titulo inteiro):

```
## i-N70 — O CEREBRO no canal pasta: as regras que disparam todo turno ainda falam a língua do mount — ABERTA, pede análise; gatilho: depois do pacote v1.129.0
```

**Substituir por:**

```
## i-N70 — O CEREBRO no canal pasta: as regras que disparam todo turno ainda falam a língua do mount — RESOLVIDA em 2026-10-21 (wo0140, `D-167`): 39 trocas aplicadas só no canal pasta, `C112`; a transferência fica como reserva, marcada no título
```

## Edicao 23 — `meta/DECISIONS.md` · `D-167` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0139» e termina em «harness 111 → **112**.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-167 — No canal pasta, o CEREBRO deixa a língua do mount nas regras que disparam todo turno, por uma tabela de trocas

**Data:** 2026-10-21 · **WO:** 0140 · **Origem:** `i-N70` e a análise `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (WO-2), cinco pontos aceitos pelo dono em 2026-10-20 · **Estende:** `D-157`, `D-162`, `D-164`.

**Decisão.** As regras do CEREBRO gerado que disparam todo turno no canal pasta — abertura de turno, releitura, ressalva, fecho, gatilhos de medição e de varredura, P8, P11, entrega sem Code, protocolo de atualização, medição delegada, correspondência — ganham o texto do canal pasta. A seção de transferência e o achatamento ficam como reserva, marcados no título. **O mecanismo não é o ternário da wo0135:** quase todas essas linhas vêm de constantes carregadas uma vez (`HYGIENE_RULES`, `TRIGGERS_BASE`, `UPDATE_PROTOCOL`, `BEHAVIORS_BASE`), que não sabem o canal. É uma tabela de 39 pares exatos (`CANAL_PASTA`: texto do mount recortado do gerado × texto do canal pasta), aplicada à saída do `buildClaudeMd` só com o Mount desligado. O CEREBRO do mount sai idêntico por construção. Corta a **v1.131.0** (`D-158`).

**O check.** `C112`: cada par ainda acha o seu texto no CEREBRO do mount — se alguém reescrever uma dessas regras, a troca correspondente para de casar e o check acusa, em vez de o canal pasta voltar calado ao texto velho —, e nenhum texto velho sobra no do canal pasta. Nove asserções antigas cobravam a frase do mount no CEREBRO padrão; passam a aceitar a dos dois canais. A cláusula «ressalva tem custo» do `C43` muda de frase no gerado e na casa.

**Na casa, além da frase:** a skill `wrap` mandava o Code atualizar o status da análise, e o «dono por documento» diz que a análise é do chat — o `/wrap` da wo0139 obedeceu à skill. A skill passa a mandar relatar.

**Fora:** o P8 da casa (`meta/CEREBRO.md`, «Reveja o mount a CADA turno») — a casa tem a própria seção de canal, que manda; fica para quando a casa revisar os princípios.

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0140 traz a medida no repo]`: `index.html` 925.835 → 936.658 bytes; CEREBRO no canal pasta, linhas distintas com vocabulário do mount: 46 → 29 (a transferência e as legítimas nos dois canais); canal mount 741/741 textos idênticos; check novo `C112`; harness 112 → **113**.
```

## Edicao 24 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (936658 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **113/113**. Registre crua no relatorio a linha do `C112`, a do `C43` e a do `C28`. Harness vermelho = **PARE**.

## Edicao 25 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 24. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere ou remove (medido no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF 'const CANAL_PASTA = [' src/index.template.html                                   # 0 -> 1
grep -cF 'if(!mountModeOn()) return canalPasta(L.join(' src/index.template.html             # 0 -> 1
grep -cF 'const KIT_VERSION = "1.131.0";' src/index.template.html                          # 0 -> 1
grep -c '^check("C112 ' validate.js                                                        # 0 -> 1
grep -cF 'CANAL_PASTA, canalPasta};' validate.js                                           # 0 -> 1
grep -cF '/é proibido para o que está ao seu alcance/' validate.js                         # 0 -> 1
grep -cF 'é proibido para o que está ao seu alcance — a pasta, ou o mount na reserva —' meta/CEREBRO.md   # 0 -> 1
grep -cF 'não edite: a análise é do chat' .claude/skills/wrap/SKILL.md                     # 0 -> 1
grep -c '^## D-167 ' meta/DECISIONS.md                                                     # 0 -> 1
grep -c '^## i-N70 .*RESOLVIDA' meta/IDEAS.md                                              # 0 -> 1
grep -m1 '^## v' meta/CHANGELOG.md                                                         # v1.130.0 -> v1.131.0
```

**Prova negativa (rode e restaure):** no `src/index.template.html`, na tabela `CANAL_PASTA`, troque no primeiro par o texto do mount `liste o mount, leia o cabeçalho` por `liste o mount, leia o cabecalho` (sem acento — o par deixa de achar o seu texto), rode `node build.js` e `node validate.js index.html`: o `C112` tem de ficar vermelho com `troca que nao acha mais o seu texto` e `1: «liste o mount, leia o cabecalho`. Restaure, rode o build de novo e confira que o `index.html` voltou a 936.658 bytes e o harness ao verde.

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 87 | 1 |
| `index.html` (gerado) | 87 | 1 |
| `validate.js` | 37 | 11 |
| `meta/CEREBRO.md` | 1 | 1 |
| `.claude/skills/wrap/SKILL.md` | 2 | 2 |
| `meta/CHANGELOG.md` | 7 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 1 | 1 |
| `meta/DECISIONS.md` | 14 | 0 |
| `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (status e elos, do chat) | 2 | 2 |
| `logs/2026-10-21.md` (novo, do chat) | 12 | 0 |
| `meta/workorders/261021-wo0140-cerebro-no-canal-pasta.md` (esta WO) | 594 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada; a analise, com `git diff --numstat` no repositorio.

## Edicao 26 — commit e push (verde = sem perguntar)

```
git add src/index.template.html index.html validate.js meta/CEREBRO.md .claude/skills/wrap/SKILL.md meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md logs/2026-10-21.md meta/workorders/261021-wo0140-cerebro-no-canal-pasta.md
```

```
git commit -m "feat(kit): no canal pasta, o CEREBRO deixa a lingua do mount nas regras que disparam todo turno (wo0140, D-167)" -m "Tabela CANAL_PASTA de 39 trocas aplicada ao CEREBRO so com o Mount desligado; o mount sai identico. C112 novo; nove assercoes antigas aceitam os dois canais; C43 e a casa com a ressalva nova; a skill wrap da casa relata a analise em vez de editar. v1.131.0."
```

```
git push
```

---

## Fora de escopo

- O P8 da casa («Reveja o mount a CADA turno», `meta/CEREBRO.md`): a secao de canal da casa manda; fica para a revisao dos principios da casa.
- A secao de transferencia e o achatamento, que ficam como reserva.
- O pacote aos vizinhos: sai depois desta WO, gerado pelo dono na v1.131.0.

## Armadilhas desta WO

- **Fim de linha.** `src/index.template.html`, `validate.js`, `meta/DECISIONS.md` e `meta/CEREBRO.md` sao **CRLF** na arvore; o texto novo das Edicoes 1, 2, 6 e 23 tem varias linhas — grave-os em CRLF. `.claude/skills/wrap/SKILL.md`, `meta/CHANGELOG.md`, `meta/STATUS.md` e `meta/IDEAS.md` sao LF.
- **A tabela tem crases e «»** dentro de strings JavaScript entre aspas duplas; nenhuma aspa dupla nem barra invertida dentro dos textos (conferido). Recorte, nao redigite.
- **Edicoes que repetem a ancora dentro do texto novo** (1, 2, 6 e 20): a idempotencia e pelo texto novo INTEIRO.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0140.txt` (`date +%y%m%d-%H%M`, rodado na hora). **Analise que mudou de estado: diga no relatorio, nao edite.**
