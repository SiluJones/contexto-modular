# WO 0099 — O número declarado é piso; as regras que governam o merge vêm na frente; e o menu vira botão

> **Tipo:** WO de CÓDIGO + registro (mista). Sete edições, três delas repetidas por regex.
> **Config sugerida:** Sonnet, esforço **médio**.
> **Pré-requisito:** `KIT_VERSION 1.117.0`, commit `573a18f`, `main` limpo, harness **18/18 · 94/94 · 0 erros**. Confirmado no mount (`_MANIFEST` de 18/08 12:18).
> **Base:** o merge do Sand-Land-Map, fechado em 2026-08-18 (`af7fa1b`, 20/20, DEC-047). Três itens novos de feedback deles — **FK-N**, **FK-O**, **FK-P** — e um pedido direto do autor durante o merge.
> **Depende de:** wo0098.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 6 e 7.

---

## 1. Por que

O Sand-Land-Map fechou o merge em **20/20, seis WOs, cinco commits** — e devolveu três itens de feedback que são todos sobre **o processo de merge**, não sobre o conteúdo. Somados ao que o autor pediu durante a aplicação, formam uma leva coerente: **o pacote descreve bem o que mudar e mal como conduzir a mudança.**

**(a) FK-N — o número declarado é medido por SEÇÃO e a revogação mora no ITEM.** O pacote declarou **11** pontos de revogação para o `CEREBRO.md` deles; a varredura pelo fato achou **22**. Não é erro de contagem: *«quem escreve o manifesto olha as seções que mudou; a palavra revogada se espalha por títulos, células de tabela e itens de lista que a seção não enumera»*. **E o pior:** o desvio cresce com a distância entre versões — eles estavam **24 versões atrás** —, então **o projeto que mais precisa do merge é o que recebe o número mais otimista**. A proposta deles é barata e certa: o manifesto entrega o **comando de varredura**, não só a lista, *«para que a divergência apareça em um comando em vez de depender de alguém desconfiar»*.

**Prova de que a proposta é necessária, colhida do próprio merge deles:** eles declararam **20/20 ENCERRADO** e, varrendo os arquivos do mount agora, ainda restam ocorrências da cadência revogada em `CONTEXT.md:3`, `HISTORY.md:4`, `GLOSSARY.md:3`, `STATUS.md:4`, `README.md:13,15` e `_TEMPLATE.md` de WO — **arquivos que a lista de 20 não enumerava com o termo**. A DEC-046 deles já registra um caso desses («uma revogação sobreviveu a quatro fatias porque morava num arquivo que ninguém pensou em varrer»); a varredura por comando teria pego os outros seis de uma vez.

**(b) FK-O — a regra que impede o pedido impossível chega tarde demais.** A cláusula *«a frase só pode conter resultado que o usuário saiba produzir»* estava na **fatia 3** do merge deles, e o defeito que ela impede aconteceu na **fatia 1**. O autor escreveu, literalmente:

> *«o grep deu N (espero que esse “o grep deu N” seja algo que o code fosse identificar, pois não faço ideia de como descobrir para te passar (…) isso era um problema que era para ter sido corrigido pelo kcm e estar incluso no cerebro)»*

E de novo dois turnos depois: *«não entendi o que tenho que fazer em “inclusive os três comandos de horário”»*. **Duas vezes, no mesmo merge, com a regra dentro do pacote que estava sendo aplicado.** Um merge grande é aplicado na ordem em que o arquivo está escrito, e as regras que governam a **conduta durante o merge** ficam onde calharam de cair no documento.

**(c) FK-P — o checklist de uma WO precisa simular o texto final de TODAS as edições dela.** A wo0041 deles pedia `grep -c = 1` para três frases que a **Edição 11 da própria WO** citava de novo. O grep deu 2, o Code parou, perguntou, e o autor confirmou que o erro era do checklist. **Custou um ciclo vermelho desnecessário** — e a causa é que o número esperado foi calculado olhando cada edição isolada.

**(d) O pedido do autor, e é o de maior alcance:** que o momento de decisão no Code venha como **menu de botões**, não como pergunta escrita na mensagem. O kit diz «MENU NUMERADO, nunca com pergunta em prosa» — mas **menu numerado escrito no corpo da mensagem ainda obriga o dono a digitar a escolha**, e por isso continua sendo prosa. O sand-land já corrigiu na skill deles, com o fallback certo. É a mesma família do FK-L: *entrega bloco para outro executar quem não pode executá-lo* — aqui, *pede digitação quem tinha como pedir um clique*.

## 2. Contexto factual

Medido em sandbox no estado `573a18f` (repo reconstruído do mount de hoje 12:18, build reproduzindo `index.html` byte a byte — **816.174** — e harness verde 18/18 · 94/94 antes de qualquer edição, com os `.claude/` do próprio repo presentes).

- **O texto do menu aparece 2× no template** (skill `wrap` e skill `apply-wo` geradas) — a Edição 5 é por regex, não por âncora única.
- **O C43 pegou sozinho** que os `.claude/skills/*` do **próprio KCM** ficariam atrás do gerado assim que o texto mudasse. A Edição 5b existe por causa disso — é a D-121 funcionando sem ninguém lembrar dela.
- **Custo de teto: ZERO.** Manifesto, modelo de WO e skills vivem fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**.
- `index.html` vai de **816.174 → 820.575** bytes.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato:** os sete relatórios `.txt` do sand-land (17/08 e 18/08), o transcrito `sand-land_7.md` lido bloco a bloco, o `IDEAS.md` deles (FK-N, FK-O, FK-P na íntegra), as duas skills deles (para ver como resolveram o menu) e o `buildUpdateManifest()`/`buildWoTemplate()` gerados.

**Não truncado.** Os sete relatórios inteiros, os 16 blocos do transcrito.

**Contagem declarada: 4 itens** (FK-N, FK-O, FK-P, pedido do menu), em **4 superfícies** — manifesto (2 seções), modelo de WO, skills geradas, skills instaladas do KCM. **2 pontos no `validate.js`** (C37 e C43 ajustados) **+ 1 check novo**. **Conteste antes de agir.**

> **Esta é qual pergunta: «está lá?» ou «presta?»** Responde **«está lá?»** — li os relatórios e o feedback e confirmei que os quatro itens existem e não estão no kit. **Não responde «presta?»**: se o comando de varredura no manifesto de fato muda o resultado de um merge, só o próximo merge dirá.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.117.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.118.0";
```

---

## Edição 2 — `src/index.template.html` · FK-N: o manifesto entrega o comando e diz que o número é piso

**Âncora** (uma linha, na seção «Linhas revogadas» do manifesto):

```
    L.push("**Varra pelo FATO, nao pela frase.** O texto da tabela e como o KIT dizia — o seu arquivo pode dizer");
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
    L.push("**Rode a varredura, nao confie na lista — e o numero abaixo e PISO, nao medida.** Quem escreve esta");
    L.push("tabela olha as SECOES que mudou; a linha revogada mora no ITEM — titulo, celula de tabela, item de");
    L.push("lista — que a secao nao enumera. **E o desvio cresce com a distancia entre versoes:** o projeto mais");
    L.push("atrasado, que e o que mais precisa do merge, recebe o numero mais otimista. Um caso real: o manifesto");
    L.push("declarou 11 pontos num arquivo e a varredura achou 22.");
    L.push("");
    L.push("Para cada termo da tabela, rode em CADA arquivo do seu `meta/`, no `CLAUDE.md`, nas `.claude/skills/*`");
    L.push("e nos seus modelos (`_TEMPLATE.md`, `LOG-TEMPLATE.md`) — nao so nos que voce acha que mudaram:");
    L.push("");
    L.push("```");
    L.push("grep -rn \"<termo revogado>\" meta/ CLAUDE.md .claude/   # ANTES: anote o numero por arquivo");
    L.push("grep -rn \"<termo revogado>\" meta/ CLAUDE.md .claude/   # DEPOIS: alvo = 0, menos o que voce justificar");
    L.push("```");
    L.push("");
    L.push("**O alvo depois e ZERO, menos as ocorrencias que voce classificar como legitimas** (relato, dominio,");
    L.push("contraste — ver abaixo) **e listar uma a uma, com arquivo e linha**. Fechar o merge sem essa lista e");
    L.push("declarar limpo o que ninguem contou: `grep -c` conta LINHAS, nao ocorrencias, e uma linha com o termo");
    L.push("duas vezes vale 1 — se voce usou `-c`, use tambem `grep -o ... | wc -l` antes de dizer que fechou.");
    L.push("");
```

> **As aspas dentro do `grep -rn` são escapadas no fonte** (`\"<termo revogado>\"`). Copie literalmente; sem os escapes o build quebra.

---

## Edição 3 — `src/index.template.html` · FK-O: «Aplique PRIMEIRO», antes da tabela de arquivos

**Âncora** (uma linha):

```
  const comObrig = files.filter(f => Array.isArray(f.obrigatorio) && f.obrigatorio.length);
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
  L.push("## Aplique PRIMEIRO — as regras que governam o proprio merge");
  L.push("");
  L.push("Um merge grande e aplicado na ordem em que o arquivo esta escrito, e as regras que protegem a");
  L.push("**conduta durante o merge** ficam onde calharam de cair no documento. Quem esta muitas versoes");
  L.push("atras passa o merge inteiro operando sob as regras velhas que este pacote veio corrigir — e o");
  L.push("defeito que a regra impede acontece antes de a regra chegar. Estas quatro vem na frente:");
  L.push("");
  L.push("1. **Bloco de fecho, item «Proximo»** — a frase pedida de volta so pode conter resultado que o dono");
  L.push("   saiba produzir. Sem ela, o merge pede «o grep deu N» sem nunca dizer que grep, e o dono descobre");
  L.push("   escrevendo de volta para perguntar.");
  L.push("2. **Medicao delegada** — quem tem o disco mede, quem tem o contexto decide; e numero medido vem com");
  L.push("   o comando que o produziu. E o que impede o merge inteiro de correr sobre numeros deduzidos.");
  L.push("3. **Varredura pelo fato** (secao «Linhas revogadas», acima) — sem ela, cada fatia varre so o que a");
  L.push("   lista ja sabia, e o que sobra fica invisivel ate a fatia seguinte.");
  L.push("4. **Os tres campos por passo de verificacao** (`_TEMPLATE.md` de WO) — quem roda, chega no ramo, e");
  L.push("   qual pergunta o passo NAO responde. Sao os passos das WOs do proprio merge.");
  L.push("");
  L.push("Nao e ordenacao de tudo: sao quatro itens, e o resto do pacote pode ser aplicado na ordem que fizer");
  L.push("sentido para este projeto. Ordenacao errada e pior que nenhuma — por isso a marca e curta.");
  L.push("");
```

---

## Edição 4 — `src/index.template.html` · FK-P: o checklist simula o texto final da WO inteira

**Âncora** (uma linha, em `buildWoTemplate`):

```
    "- [ ] **Se a WO declarou um inventario** (\"onze lugares\"), refaca a contagem no repo. Numero diferente:",
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
    "- [ ] **Se algum passo mede um termo com `grep -c`, o numero esperado foi simulado contra o texto FINAL",
    "      de TODAS as edicoes desta WO?** Termo citado por duas edicoes conta 2, nao 1 — e o checklist que",
    "      olha cada edicao isolada produz um VERMELHO falso, que para a aplicacao e gasta um ciclo. Quando um",
    "      termo aparece em mais de uma edicao, declare: «esta frase e citada por duas edicoes; esperado = 2».",
    "      E lembre que `grep -c` conta LINHAS: duas ocorrencias na mesma linha valem 1.",
```

---

## Edição 5a — `src/index.template.html` · o menu vira botão, nas duas skills geradas

**Duas ocorrências**, uma na skill `wrap` e outra na `apply-wo`. **Substitua as duas** — o texto a procurar é idêntico:

**Procurar:**

```
MENU NUMERADO (a recomendada em 1), nunca com pergunta em prosa
```

**Substituir por:**

```
MENU DE OPCOES pela ferramenta `AskUserQuestion`, com a recomendada em primeiro lugar e marcada `(Recomendado)`. **Nunca pergunte em prosa — e menu numerado escrito no corpo da mensagem TAMBEM e prosa**, porque obriga o dono a digitar a resposta em vez de clicar. Sem a ferramenta, caia no menu numerado em texto e DIGA que caiu no fallback
```

> **Confirme que trocou 2, não 1.** `grep -c "MENU NUMERADO (a recomendada em 1)" src/index.template.html` deve dar **0** ao fim.

## Edição 5b — `.claude/skills/*` do próprio KCM · a casa acompanha

> **Não é escopo extra: é o C43 cobrando.** Ele reprova assim que o gerado muda e o instalado não. Foi ele que apontou, não eu.

**Em `.claude/skills/wrap/SKILL.md`, âncora** (duas linhas):

```
  empurre — feche com **MENU NUMERADO** de saídas reais (a recomendada em 1), nunca com pergunta em
  prosa. Se a minha escolha chegar depois, o relatório se REESCREVE — não fica valendo a versão velha.
```

**Substituir por:**

```
  empurre — ofereça as saídas reais pelo **menu de opções** da ferramenta `AskUserQuestion`, com a
  recomendada em primeiro lugar e marcada `(Recomendado)`. **Nunca pergunte em prosa — e menu numerado
  escrito no corpo da mensagem TAMBÉM é prosa**, porque me obriga a digitar a escolha em vez de clicar.
  Sem a ferramenta, caia no menu numerado em texto e **diga que caiu no fallback**. Se a minha escolha
  chegar depois, o relatório se REESCREVE — não fica valendo a versão velha.
```

**Em `.claude/skills/apply-wo/SKILL.md`, âncora** (duas linhas):

```
  (qualquer uma falhou): NÃO commite nem empurre — feche com **MENU NUMERADO** de saídas reais (a
  recomendada em 1), nunca com pergunta em prosa.
```

**Substituir por:**

```
  (qualquer uma falhou): NÃO commite nem empurre — ofereça as saídas reais pelo **menu de opções** da
  ferramenta `AskUserQuestion`, com a recomendada em primeiro lugar e marcada `(Recomendado)`. **Nunca
  pergunte em prosa — e menu numerado escrito no corpo da mensagem TAMBÉM é prosa.** Sem a ferramenta,
  caia no menu numerado em texto e **diga que caiu no fallback**.
```

---

## Edição 6a — `validate.js` · C43 e C37 acompanham o menu novo

> **Os dois fizeram o trabalho deles** e reprovaram na Edição 5a. As asserções passam a cobrar a ferramenta **e** o fallback.

**Âncora 1** (uma linha, na lista de cláusulas do C43):

```
    ["recomendada em 1",   /recomendada em 1/i,               ["wrap","applyWo"]],
```

**Substituir por:**

```
    // A wo0099 trocou o menu numerado em texto pela ferramenta de botoes: menu escrito no corpo
    // da mensagem ainda obriga o dono a DIGITAR a escolha, e por isso continua sendo prosa.
    ["recomendada marcada",/recomendada em primeiro lugar e marcada/i, ["wrap","applyWo"]],
    ["menu por ferramenta",/AskUserQuestion/,                 ["wrap","applyWo"]],
```

**Âncora 2** (uma linha, no C37):

```
    assert(/MENU NUMERADO/.test(txt), "skill "+nome+" nao manda fechar com menu numerado no caso vermelho");
```

**Substituir por:**

```
    assert(/AskUserQuestion/.test(txt), "skill "+nome+" nao manda fechar o caso vermelho pelo menu de BOTOES — menu numerado escrito na mensagem obriga o dono a digitar a escolha, e por isso ainda e prosa (wo0099)");
    assert(/caia no menu numerado/i.test(txt), "skill "+nome+" nao tem o fallback para quando a ferramenta de menu nao existir");
```

## Edição 6b — `validate.js` · check C51

**Âncora** (início do C50 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C50 varredura muda nao e varredura limpa (wo0098): o pacote confere se as superficies chegaram, e a higiene cobra o que o ignore esconde", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C51 o numero declarado e piso, e as regras do merge vem na frente (wo0099): varredura com comando, prioridade curta, checklist simulado", () => {
  const n = T.normNiche(T.NICHES.dev);
  const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
  S.workmode.codeMode = "yes";
  const pack = T.buildUpdatePack(n); const man = pack.manifest;
  S.workmode.codeMode = prev;
  // (1) FK-N: o manifesto entrega o COMANDO e diz que o numero e piso
  assert(/o numero abaixo e PISO, nao medida/i.test(man), "o manifesto ainda apresenta a contagem de revogacoes como medida — quem a escreve olha SECOES e a revogacao mora no ITEM");
  assert(/a linha revogada mora no ITEM/i.test(man), "falta a causa da divergencia (secao x item), sem a qual o piso vira numero arbitrario");
  assert(/o desvio cresce com a distancia entre versoes/i.test(man), "falta o pior efeito: o projeto mais atrasado recebe o numero mais otimista");
  assert(/grep -rn/.test(man), "o manifesto nao entrega o comando de varredura — «procure cada texto listado» so acha o que a lista ja sabia");
  assert(/alvo depois e ZERO/i.test(man), "a varredura nao tem alvo declarado, entao qualquer numero passa por bom");
  assert(/`grep -c` conta LINHAS, nao ocorrencias/.test(man), "o manifesto nao avisa que grep -c conta linhas — foi assim que uma contagem de 8 apareceu como 7");
  // (2) FK-O: prioridade curta e justificada, ANTES do resto do manifesto
  assert(/## Aplique PRIMEIRO/.test(man), "manifesto sem a marca de aplicar primeiro — as regras que governam o merge chegam depois do defeito que elas impedem");
  assert(/Nao e ordenacao de tudo: sao quatro itens/.test(man), "a marca de prioridade nao se limita — ordenacao errada e pior que nenhuma");
  const iPrio = man.indexOf("## Aplique PRIMEIRO"), iTab = man.indexOf("| Nome no upload");
  assert(iPrio > -1 && iTab > -1 && iPrio < iTab, "a secao «Aplique PRIMEIRO» vem depois da tabela de arquivos — quem le ja escolheu a ordem antes de chegar nela");
  ["item «Proximo»", "Medicao delegada", "Varredura pelo fato", "tres campos por passo"].forEach(t => {
    assert(man.indexOf(t) > -1, "a lista de «aplique primeiro» nao cita «"+t+"»");
  });
  // (3) FK-P: o checklist da WO simula o texto final de TODAS as edicoes
  const wo = T.buildWoTemplate();
  assert(/simulado contra o texto FINAL/.test(wo), "o modelo de WO nao manda simular o numero esperado contra o texto final de todas as edicoes — checklist que olha edicao isolada produz VERMELHO falso");
  assert(/citada por duas edicoes; esperado = 2/.test(wo), "falta a forma de declarar o termo citado por mais de uma edicao");
  assert(/`grep -c` conta LINHAS/.test(wo), "o modelo de WO nao avisa que grep -c conta linhas");
  return "ok";
});
```

---

## Edição 7 — `meta/DECISIONS.md` · registra a D-133

**Âncora** (última linha do arquivo, fim da D-132):

```
`KIT_VERSION 1.117.0`. **Custo de teto ZERO** — nada toca `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **814.394 → 816.174** bytes. Harness **18/18, 93/93 → 94/94, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-133 — O pacote descreve bem O QUE mudar e mal COMO conduzir a mudança: número como piso, regras do merge na frente, e o menu vira botão (wo0099)

**Base.** O merge do Sand-Land-Map, fechado em 2026-08-18 (`af7fa1b`, 20/20, DEC-047). Três itens novos deles — **FK-N**, **FK-O**, **FK-P** — mais um pedido direto do autor durante a aplicação. **Os quatro são sobre o processo de merge, não sobre o conteúdo**, e é por isso que formam uma leva só.

**(a) FK-N — o número declarado é medido por SEÇÃO e a revogação mora no ITEM.** O pacote declarou 11 pontos para o `CEREBRO.md` deles; a varredura achou **22**. *«Quem escreve o manifesto olha as seções que mudou; a palavra revogada se espalha por títulos, células de tabela e itens de lista que a seção não enumera.»* **E o desvio cresce com a distância entre versões** — eles estavam 24 versões atrás —, então **o projeto que mais precisa do merge recebe o número mais otimista**. O manifesto passa a entregar o **comando de varredura** com alvo declarado (zero, menos o que se justifique item a item), mais o aviso de que `grep -c` conta linhas e não ocorrências.

**Prova de que a proposta era necessária, colhida do próprio merge deles:** fecharam **20/20 ENCERRADO** e ainda restam ocorrências da cadência revogada em `CONTEXT.md`, `HISTORY.md`, `GLOSSARY.md`, `STATUS.md`, `README.md` e no `_TEMPLATE.md` de WO — **arquivos que a lista de 20 não enumerava com o termo**. A DEC-046 deles já registrava um caso desses; a varredura por comando teria pego os outros seis de uma vez.

**(b) FK-O — a regra que impede o pedido impossível chega tarde demais.** A cláusula «a frase só pode conter resultado que o usuário saiba produzir» estava na **fatia 3** do merge deles, e o defeito que ela impede aconteceu na **fatia 1**: *«o grep deu N (…) não faço ideia de como descobrir para te passar»*. E se repetiu dois turnos depois. **Duas vezes, no mesmo merge, com a regra dentro do pacote que estava sendo aplicado.** O manifesto ganha uma seção **«Aplique PRIMEIRO»** com **quatro** itens — o item «Próximo» do fecho, a medição delegada, a varredura pelo fato, e os três campos por passo de verificação — posicionada **antes da tabela de arquivos**, porque um aviso de ordem que chega depois da tabela chega depois de a ordem ter sido escolhida. **A contrapartida que eles mesmos nomearam entrou junto:** *ordenação errada é pior que nenhuma*, então são quatro itens e o resto do pacote fica livre.

**(c) FK-P — o checklist precisa simular o texto final de TODAS as edições da própria WO.** A wo0041 deles pedia `grep -c = 1` para três frases que a **Edição 11 da mesma WO** citava de novo; o grep deu 2 e custou um ciclo vermelho falso. Generaliza a FK-N uma camada acima: *lá a granularidade da varredura escondeu o que muda por item; aqui a checagem não foi feita contra o resultado final da própria WO que a escreveu.*

**(d) O pedido do autor, e é o de maior alcance: o menu vira botão.** O kit dizia «MENU NUMERADO, nunca com pergunta em prosa». **Menu numerado escrito no corpo da mensagem ainda obriga o dono a digitar a escolha** — e por isso continua sendo prosa. As duas skills passam a oferecer as saídas pela ferramenta de menu (`AskUserQuestion`), com a recomendada marcada e **fallback declarado** quando ela não existir. É a família da FK-L vista de outro ângulo: *entrega bloco para outro executar quem não pode executá-lo* → **pede digitação quem tinha como pedir um clique**.

**O C43 e o C37 reprovaram sozinhos e apontaram a metade que eu não tinha visto:** assim que o texto do menu mudou no gerador, eles acusaram que os `.claude/skills/*` do **próprio KCM** ficariam atrás. A Edição 5b existe por causa disso. **É a D-121 funcionando sem ninguém lembrar dela** — a primeira vez, nesta série, em que o instrumento cobrou a auto-aplicação antes de o autor pensar nela.

**Check C51 novo**, com **onze provas negativas**: sem o piso · sem a causa seção×item · sem o comando de varredura · sem o alvo zero · sem o aviso do `grep -c` · sem «Aplique PRIMEIRO» · prioridade sem limite · checklist sem simulação · sem a forma de declarar termo repetido · gerado voltando ao menu numerado (C37) · instalado do KCM ficando atrás (C43).

`KIT_VERSION 1.118.0`. **Custo de teto ZERO** — manifesto, modelo de WO e skills vivem fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **816.174 → 820.575** bytes. Harness **18/18, 94/94 → 95/95, 0 erros**.
```

---

## Edição 8 — `meta/IDEAS.md` · registra a leva e o que fica aberto

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-18 — O merge do Sand-Land-Map fechou (20/20) e devolveu três itens sobre o PROCESSO (D-133, wo0099)
FK-N, FK-O e FK-P não falam do conteúdo do kit: falam de **como conduzir um merge**. Somados ao pedido do autor sobre o menu de botões, viram a mesma constatação — **o pacote descreve bem o que mudar e mal como conduzir a mudança**.

**O achado mais forte é o da FK-N, e ele se provou no próprio merge que o gerou:** eles declararam 20/20 ENCERRADO e ainda restam ocorrências da cadência revogada em seis arquivos — `CONTEXT.md`, `HISTORY.md`, `GLOSSARY.md`, `STATUS.md`, `README.md` e o `_TEMPLATE.md` de WO. **A lista de 20 não os enumerava com o termo.** O comando de varredura teria pego os seis de uma vez, e é exatamente o que a FK-N pedia.

**E a FK-O tem o custo medido em voz alta:** a regra que impede «o grep deu N» estava na fatia 3 do merge deles, e o defeito aconteceu na fatia 1 — e de novo na 3a. Duas vezes, com a regra dentro do pacote que estava sendo aplicado.

**Nota de instrumento, e desta vez a favor:** o C43 e o C37 reprovaram sozinhos quando o texto do menu mudou, apontando que os `.claude/skills/*` do próprio KCM ficariam atrás. **Primeira vez nesta série em que o instrumento cobrou a auto-aplicação antes de o autor pensar nela** — a D-121 funcionando sem depender de memória.

**Aberto, para levar ao Sand-Land-Map na próxima correspondência:** os seis arquivos com resto de cadência, e a pergunta de método que vem junto — *o «20/20» contava arquivos comparados ou arquivos varridos?* A resposta deles vale mais que a correção, porque é o teste da FK-N em campo.

**Aberto, do autor:** o interesse em uma **skill de sonda** no kit e em aprimorar o script de sonda. O kit tem o verbete (D-122, D-128) e recusou o molde duas vezes por falta de pedido — **agora há pedido**. *Gatilho: a próxima leva, com o material dos dois projetos na mão.*
```

---

## Fora de escopo

- **Os seis arquivos com resto de cadência no Sand-Land-Map** — é do projeto deles; vai como correspondência, não como edição daqui.
- **A skill/molde de sonda no kit** — registrada no IDEAS com gatilho; é leva própria e precisa do material dos dois projetos.
- **O `.gitignore` pendente deles** — já diagnosticado pelo Code deles no relatório de 12:08; decisão do autor.

## Armadilhas desta WO

- **A Edição 5a é por REGEX, não por âncora única** — são **duas** ocorrências do mesmo texto. Se você tratar como âncora única, o `assert` de unicidade falha e você pode trocar só uma. Confirme com `grep -c` que sobrou **0**.
- **A Edição 5b não é opcional.** Sem ela o C43 reprova — e reprova certo.
- **Fim de linha:** `src/index.template.html` é **CRLF**; `validate.js` e os `.claude/skills/*` são **LF**. Confira: template com **0 LF soltos**.
- **As aspas escapadas no bloco `grep -rn`** da Edição 2 são obrigatórias.
- **A asserção de ordem do C51** (`Aplique PRIMEIRO` antes da tabela) é a que carrega mais peso e falha junto com a ausência da seção — não tem prova negativa isolada.
- **Números de check:** C51 é o próximo livre (C50 é da wo0098). C37 e C43 são ajustados, não recriados.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `.claude/skills/wrap/SKILL.md`, `.claude/skills/apply-wo/SKILL.md`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além.
- [ ] **Inventário declarado: 4 itens, 4 superfícies, 2 checks ajustados + 1 novo.** Divergiu, **PARE e reporte**.
- [ ] `grep -c "MENU NUMERADO (a recomendada em 1)" src/index.template.html` → **0**.
- [ ] **Simulação do checklist (a regra que esta própria WO institui):** a frase `MENU NUMERADO` aparece no texto novo das Edições 5a, 5b e 6a — **é citada por mais de uma edição**. Não use `grep -c "MENU NUMERADO"` como conferência: o número não é 0, e sim o que sobra nos textos de fallback. Use a conferência da linha acima, que é específica.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 95/95 checagens, 0 erros**, com **C51, C43 e C37 verdes**.
- [ ] **C28 imprime exatamente:** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`.
- [ ] `index.html` com **820.575 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os quatro campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildUpdateManifest()` (Edições 2 e 3), `buildWoTemplate()` (4) e `buildCodeKitFiles()` (5a); o C51 gera o manifesto de verdade e afirma sobre ele, inclusive sobre a **ordem** das seções, e o C43 compara gerado × instalado (5b).
  - **Esta é qual pergunta:** **«está lá?»**. O harness confirma que os textos existem e em que ordem. **NÃO responde «presta?»** — se o comando de varredura muda o resultado de um merge real, só o próximo merge dirá.
  - **Prova de vida:** mova temporariamente o bloco `## Aplique PRIMEIRO` para **depois** de `L.push("| Nome no upload…")`, rode `node build.js && node validate.js index.html`, e confirme que o **C51 falha** com a mensagem sobre o leitor já ter escolhido a ordem. Desfaça.
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados · validação (C28, C51, C43, C37, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita a versão e a contagem. Atualize as **vivas** para `v1.118.0` e `95/95`, cite o **C51** antes do C50, acrescente **D-133**. Orçamento inalterado. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html .claude/skills/wrap/SKILL.md .claude/skills/apply-wo/SKILL.md validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260818-wo0099-o-numero-declarado-e-piso.md
```

```
git commit -m "feat(kit): o numero declarado e piso, e as regras do merge vem na frente" -m "O sand-land fechou o merge em 20/20 e devolveu tres itens que nao falam do conteudo do kit: falam de como conduzir um merge. Somados ao pedido do autor sobre o menu de botoes, viram a mesma constatacao - o pacote descreve bem o que mudar e mal como conduzir a mudanca." -m "FK-N: o manifesto declarou 11 pontos de revogacao num arquivo e a varredura achou 22, porque quem escreve olha as SECOES e a revogacao mora no ITEM. E o desvio cresce com a distancia entre versoes, entao o projeto que mais precisa do merge recebe o numero mais otimista. O manifesto passa a entregar o comando de varredura com alvo declarado, e avisa que grep -c conta linhas e nao ocorrencias." -m "FK-O: a regra que impede o pedido impossivel estava na fatia 3 do merge deles e o defeito aconteceu na fatia 1. O manifesto ganha a secao Aplique PRIMEIRO, com quatro itens e posicionada antes da tabela de arquivos - aviso de ordem que chega depois da tabela chega depois de a ordem ter sido escolhida." -m "FK-P: o checklist de uma WO precisa simular o texto final de TODAS as edicoes dela, porque termo citado por duas edicoes conta 2. E o menu vira botao: menu numerado escrito no corpo da mensagem ainda obriga o dono a digitar a escolha, e por isso continua sendo prosa. O C43 e o C37 reprovaram sozinhos e cobraram a auto-aplicacao nas skills desta casa, antes de eu pensar nela. Check C51, onze provas negativas. wo0099, D-133."
```

```
git push
```
