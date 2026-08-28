# WO 0106 — Os dois carimbos respondem sozinhos

> **Tipo:** WO de CÓDIGO (gerador + harness).
> **Config sugerida:** modelo leve, `/effort` **médio** — sete edições literais, todas testadas. O que exige atenção é a Edição 1 (bloco longo de `L.push` com crases dentro de template string) e a ordem das Edições 5 e 6.
> **Pré-requisito:** v1.121.0, commit `8ab2520`, `main` sincronizada com `origin/main`, harness **18/18 · 99/99 · 0 erros**, 1 não rastreado conhecido (`.claude/launch.json`).
> **Base:** o item (1) e o item (2) do feedback do satelite-web, registrados pela wo0104; o achado do dono em 28/08 sobre leitura adiada; e a medição do CHANGELOG feita neste turno.
> **Depende de:** wo0103 (`C54`), wo0104 (registro do feedback) e wo0105 (`C55`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção. Se já existir, **PULE** e diga no relatório.
>
> **Âncoras lidas em:** todas lidas **neste turno**, no sandbox reconstruído do mount de 2026-08-27 22:30, e todas as edições aplicadas e validadas lá antes desta WO existir.
> - `src/index.template.html`, `buildUpdateManifest` → `L.push("- **Este carimbo e declaracao, nao ordem.** Se o seu arquivo vivo tem secao de um modo que este pacote declara como \`nao\`, ela e sobra de uma configuracao antiga`
> - `src/index.template.html`, mesma função → `  L.push(\`- Afixo: ${UPDATE_AFFIX}\`);`
> - `src/index.template.html`, `buildUpdatePrompt` → `L.push("2. **Carimbo de modos.** O manifesto declara com quais modos este pacote foi gerado.`
> - `src/index.template.html`, `buildCodeKitFiles` → `  return { claudeMd, settings, applyWo, wrap, woTemplate: buildWoTemplate() };`
> - `src/index.template.html`, `HYGIENE_RULES` → `"**Havendo WO no turno, o bloco de commit e de quem APLICA`
> - `validate.js`, C38 → `assert(/nao remova sozinho/.test(prompt), "o prompt nao proibe remover sobra de modo por conta propria");` e `assert(/nunca remova sozinho/.test(man), "manifesto nao proibe remover sobra de modo por conta propria");`
> - `validate.js`, C54 → `assert(mChg[1] === v, "KIT_VERSION e "+v+" mas o topo do CHANGELOG e v"+mChg[1]+"`
> - `validate.js`, C55 → `check("C55 a lista nao perde item`
>
> **Afirmação sobre artefato legível:** os marcadores da Edição 1 **não** foram escolhidos de memória. Foram **derivados** gerando o CEREBRO com cada modo ligado e desligado e comparando as saídas linha a linha — o resultado está no §2. As contagens do checklist foram derivadas por `grep` sobre o arquivo já editado.
>
> **Canal dos meta neste ciclo = CODE.** Exceção declarada: o **`meta/ROADMAP.md`** vem pela raia do chat, inteiro, porque é reescrita de doc e não delta — a WO só o menciona no `git add`.
>
> **Próximo comando:** `/wrap`

---

## 1. Por que

Duas frases do kit são falsas, e as duas foram apontadas por quem as leu de fora.

**A primeira está no manifesto de todo pacote de update:** *«o kit nao tem como saber qual dos dois casos e»*. O kit **sabe**. Cada modo tem um cabeçalho que só existe no arquivo gerado quando aquele modo está ligado; se o marcador está no arquivo vivo e o pacote declara o modo como `nao`, é sobra — porque um pacote com o modo ligado carimbaria `sim`. O satelite-web ficou com um choque sem árbitro por causa de uma declaração de impotência que não se sustenta, e fez o certo: reportou e não removeu.

**A segunda é uma ausência:** o carimbo de versão não sobrevive até o arquivo vivo. Medido: o `CEREBRO.md` instalado do FlatDrop tem **zero** ocorrências de `Gerado pelo Kit de Contexto Universal v`, e o `CLAUDE.md` deles também. A linha existe no pacote — é a **última** do CEREBRO, o arquivo de natureza `fusão`, o mais mesclado de todos. Última linha de merge é o que mais se perde. Sem ela, «de que versão eu vim?» vira arqueologia: o satelite-web deduziu a própria versão *pelo que ainda estava errado*.

E duas coisas medidas aqui dentro, no mesmo turno:

- **O dono apontou que arquivo avulso fica esperando.** Um esperou dois dias, ele cobrou, e no turno seguinte tinha saído do mount — o conteúdo se perdeu inteiro. A regra de prazo da wo0105 existia e não tinha degrau terminal.
- **O CHANGELOG perdeu 18 versões seguidas** — ver §2. E a `i-N47`, que fechou exatamente esse defeito uma vez, está marcada como FECHADA.

## 2. Contexto factual

**[medido em sandbox, 2026-08-28]**

- Base: `index.html` **833.401 bytes**, **18/18 · 99/99 · 0 erros**.
- Depois: **836.117 bytes**, **18/18 · 100/100 · 0 erros**, **C28 com os cinco números idênticos** — custo de teto **ZERO**.
- **Os marcadores foram derivados, não escolhidos.** Gerando o CEREBRO do nicho `dev` com cada modo ligado e comparando com a versão desligada:

| Modo | Linhas exclusivas | Marcador adotado |
|---|---|---|
| Code | 24 | `## Ao final da conversa, o assistente REGISTRA o que falta` |
| ASU | 8 | `## Saída de código via ASU (patch)` |
| compartilhado | 7 | `## Projeto em grupo (HUB compartilhado)` |
| skills-do-nicho | **0** | **não há** — o sinal é existir arquivo em `.claude/skills/` além de `apply-wo` e `wrap` |

  O zero do `skills-do-nicho` é resultado, não falha: aquele modo não muda o CEREBRO. **Declarar um marcador inexistente seria pior que declarar a ausência**, e por isso a tabela diz «não há», e o C56 cobra que diga.
- **Três provas negativas rodadas:** devolver a frase falsa ao manifesto → C56 vermelho; tirar o carimbo dos três artefatos do kit-Code → C56 vermelho; e trocar a segunda entrada do CHANGELOG por `v1.117.0` → **C54 vermelho**, com a mensagem `as duas entradas do topo do CHANGELOG sao v1.121.0 e v1.117.0: 3 versao(oes) nunca foi(ram) registrada(s)`.

**[medido no repo, 2026-08-28]** — e este é o achado que não estava previsto:

- **As 18 versões de `v1.102.0` a `v1.119.0` nunca entraram no `CHANGELOG.md`.** Ele salta de `v1.101.0` para `v1.120.0`. Elas **existem** no `STATUS.md` e no `DECISIONS.md` — só o CHANGELOG as perdeu.
- O `C54` não pegava: ele confere o **topo** contra a constante, e o topo estava certo.
- A `i-N47` — «Reconstruir o CHANGELOG (v1.54–v1.66 nunca entraram)» — está marcada **✅ FECHADA**. **O mesmo defeito voltou, maior.** Fechar reconstruindo o passado não impede o próximo salto; só um degrau no momento do release impede.

**[deduzido, e marcado como tal]** que o buraco se abriu no ciclo em que o kit passou a registrar por WO com `/wrap` — as WOs de v1.102 a v1.119 mandavam atualizar `STATUS` e `DECISIONS` e **não** mandavam abrir entrada no CHANGELOG, o que bate com o padrão dos registros. Não conferimos as 18 WOs uma a uma; a reconstrução é dívida à parte, no §«Fora de escopo».

## Edição 1 — `src/index.template.html` · o carimbo de modos ganha marcador

**Âncora** *(ocorrência única, dentro de `buildUpdateManifest`)*:

```js
  L.push("- **Este carimbo e declaracao, nao ordem.** Se o seu arquivo vivo tem secao de um modo que este pacote declara como `nao`, ela e sobra de uma configuracao antiga (ou este pacote foi gerado com o modo esquecido). Reporte como choque, com a secao citada, e deixe o usuario decidir — **nunca remova sozinho**: o kit nao tem como saber qual dos dois casos e.");
```

**Substituir por** *(atenção às crases escapadas dentro das template strings)*:

```js
  L.push("- **Este carimbo e declaracao, nao ordem — mas agora ele e DECIDIVEL.** Cada modo tem um marcador: um cabecalho que so existe no arquivo gerado quando aquele modo esta LIGADO. Confira o marcador no seu arquivo vivo:");
  L.push("");
  L.push("| Modo | Declarado aqui | Marcador (so aparece com o modo LIGADO) | Onde |");
  L.push("|---|---|---|---|");
  L.push(`| Code | ${codeOn ? "sim" : "nao"} | \`## Ao final da conversa, o assistente REGISTRA o que falta\` | CEREBRO |`);
  L.push(`| ASU | ${asuModeOn() ? "sim" : "nao"} | \`## Saida de codigo via ASU (patch)\` | CEREBRO |`);
  L.push(`| compartilhado | ${groupModeOn() ? "sim" : "nao"} | \`## Projeto em grupo (HUB compartilhado)\` | CEREBRO |`);
  L.push(`| skills-do-nicho | ${skillsOn ? "sim" : "nao"} | **nao ha marcador no CEREBRO** — o sinal e existir arquivo em \`.claude/skills/\` alem de \`apply-wo\` e \`wrap\` | pasta |`);
  L.push("");
  L.push("**Como decidir, sem perguntar a ninguem:** marcador PRESENTE e modo declarado `nao` = **sobra** de um pacote anterior, gerado quando o modo estava ligado — um pacote com o modo ligado carimbaria `sim`. Pode remover a secao, e diga no relatorio que removeu. Marcador AUSENTE e modo `sim` = **novidade** deste pacote, adote. **O que o marcador NAO decide:** se o dono esqueceu de LIGAR um modo que este projeto deveria usar. Isso e pergunta para ele, nao para o arquivo — e e a unica hipotese que ainda pede confirmacao.");
```

## Edição 2 — `src/index.template.html` · o carimbo de versão vira linha do kit

**Âncora** *(ocorrência única)*:

```js
  L.push(`- Afixo: ${UPDATE_AFFIX}`);
```

**Substituir por:**

```js
  L.push(`- Afixo: ${UPDATE_AFFIX}`);
  L.push("");
  L.push(`- **Carimbo de versao — linha do KIT, nao do projeto.** Quatro arquivos deste pacote terminam em \`Gerado pelo Kit de Contexto Universal v${KIT_VERSION}\`: o CEREBRO, o modelo de WO e as duas skills. Essa linha **nao se funde**: substitua sempre pela do pacote mais recente. **Conferencia depois do merge:** os quatro carimbos do seu projeto devem dizer \`v${KIT_VERSION}\`. Se algum ficou para tras, o merge daquele arquivo deixou passar — e e assim que um projeto perde a resposta para «de que versao eu vim?». Quatro carriers porque o do CEREBRO e a ultima linha do arquivo mais mesclado do pacote, e ultima linha de merge e o que mais se perde.`);
```

## Edição 3 — `src/index.template.html` · o prompt de update para de contradizer o manifesto

> Sem esta edição, dois arquivos do **mesmo pacote** dizem coisas opostas sobre a mesma decisão.

**Âncora** *(ocorrência única, dentro de `buildUpdatePrompt`)*:

```js
  L.push("2. **Carimbo de modos.** O manifesto declara com quais modos este pacote foi gerado. Secao de um modo declarado como `nao` que ainda exista no seu arquivo e sobra de configuracao antiga — **ou** este pacote foi gerado com o modo esquecido. Voce nao tem como distinguir os dois casos: **reporte como choque com a secao citada e nao remova sozinho.**");
```

**Substituir por:**

```js
  L.push("2. **Carimbo de modos, e ele agora DECIDE.** O manifesto declara com quais modos este pacote foi gerado **e da o marcador de cada um** — o cabecalho que so existe no arquivo gerado quando aquele modo esta ligado. Marcador presente com o modo declarado `nao` = **sobra** de pacote anterior: remova a secao e diga no relatorio que removeu, porque um pacote com o modo ligado carimbaria `sim`. O unico caso que ainda e pergunta para o dono e outro: **se ele esqueceu de LIGAR um modo que este projeto deveria usar** — isso o arquivo nao responde, entao nesse caso **reporte e nao remova sozinho.**");
```

## Edição 4 — `src/index.template.html` · os três artefatos do kit-Code passam a carregar o carimbo

**Âncora** *(ocorrência única, fim de `buildCodeKitFiles`)*:

```js
  return { claudeMd, settings, applyWo, wrap, woTemplate: buildWoTemplate() };
```

**Substituir por:**

```js
  const selo = "\n\n*" + kitStamp().replace(/\.$/, "") + " — esta linha e do KIT: nao funda, substitua pela do pacote mais recente.*\n";
  return { claudeMd, settings, applyWo: applyWo + selo, wrap: wrap + selo, woTemplate: buildWoTemplate() + selo };
```

## Edição 5 — `src/index.template.html` · o arquivo avulso se lê quando chega

**Âncora** *(início do item da wo0105, ocorrência única)*:

```
  "**Havendo WO no turno, o bloco de commit e de quem APLICA
```

**Inserir IMEDIATAMENTE ANTES** dessa linha (item novo, terminando em `",` e quebra CRLF):

```
  "**Arquivo avulso novo se le no TURNO em que chega.** Nota, relatorio, carta, analise: o dono subiu porque e para agora. Adiar e a excecao e precisa de motivo dito em voz alta — «Manter: nao li» carrega prazo, e prazo vencido nao rola para o turno seguinte: ou se le, ou se declara abandonado. **Medido: um arquivo esperou dois dias, o dono cobrou, e no turno seguinte ele tinha saido do mount — o conteudo se perdeu inteiro.** Adiar leitura nao guarda o arquivo; so adia a descoberta de que ele sumiu.",
```

## Edição 6 — `validate.js` · o `C38` passa a cobrar o critério, não a proibição

> Aqui a regra mudou de **conteúdo**, não de redação: o marcador torna «sobra» decidível. A proibição sobrevive, mas restrita à hipótese que o arquivo não responde.

**(a) Âncora** *(ocorrência única)*:

```js
  assert(/nao remova sozinho/.test(prompt), "o prompt nao proibe remover sobra de modo por conta propria");
```

**Substituir por:**

```js
  // wo0106: a regra mudou de conteudo, nao so de redacao — o marcador torna «sobra» decidivel, e a
  // proibicao passa a valer so para a hipotese que o arquivo nao responde (o dono esqueceu de ligar).
  assert(/marcador/i.test(prompt) && /sobra/.test(prompt), "o prompt nao da o criterio decidivel de sobra de modo");
  assert(/esqueceu de LIGAR/.test(prompt) && /nao remova sozinho/.test(prompt), "o prompt removeu a cautela inteira — a hipotese «o dono esqueceu de ligar o modo» continua sendo pergunta para ele");
```

**(b) Âncora** *(ocorrência única)*:

```js
  assert(/nunca remova sozinho/.test(man), "manifesto nao proibe remover sobra de modo por conta propria");
```

**Substituir por:**

```js
  assert(/Marcador \(so aparece com o modo LIGADO\)/.test(man), "manifesto nao publica o marcador de cada modo — sem ele «sobra ou modo esquecido?» fica sem arbitro, que foi a devolucao do satelite-web");
  assert(/esqueceu de LIGAR/.test(man), "manifesto removeu a cautela inteira: o marcador decide sobra, nao decide se o dono esqueceu de ligar um modo");
```

## Edição 7 — `validate.js` · o `C54` ganha o degrau que impede o próximo salto

**Âncora** *(ocorrência única, dentro do C54)*:

```js
  assert(mChg[1] === v, "KIT_VERSION e "+v+" mas o topo do CHANGELOG e v"+mChg[1]+": todo artefato gerado (pacote de update, kit do Code, templates) sairia carimbado com a versao errada, e quem recebe nao tem como saber");
```

**Inserir IMEDIATAMENTE APÓS:**

```js
  // wo0106: o CHANGELOG perdeu 18 versoes seguidas (v1.102.0 a v1.119.0) sem ninguem notar, e a
  // i-N47 ja tinha fechado o MESMO defeito uma vez. O buraco antigo e divida registrada; esta
  // assercao impede que outro se abra: no momento do release, o topo e o anterior tem de ser
  // minors consecutivos. Nao reconstroi o passado — impede o proximo salto.
  const tops = (chg.match(/^## v(\d+)\.(\d+)\.(\d+)/gm) || []).slice(0, 2)
    .map(h => h.replace(/^## v/, "").split(".").map(Number));
  if (tops.length === 2 && tops[0][0] === tops[1][0]) {
    const salto = tops[0][1] - tops[1][1];
    assert(salto <= 1, "as duas entradas do topo do CHANGELOG sao v"+tops[0].join(".")+" e v"+tops[1].join(".")+
      ": "+(salto-1)+" versao(oes) nunca foi(ram) registrada(s). O release que pula e este — o buraco nao aparece depois, aparece agora");
  }
```

## Edição 8 — `validate.js` · o check **C56**

**Âncora** *(ocorrência única)*:

```js
check("C55 a lista nao perde item
```

**Inserir IMEDIATAMENTE ANTES**, seguido de uma linha em branco:

```js
check("C56 os dois carimbos respondem sozinhos (wo0106): marcador por modo no manifesto e no prompt, versao em quatro artefatos, leitura no turno em que o arquivo chega", () => {
  const kit = T.buildCodeKitFiles();
  const prev = T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode = "yes";
  const pack = T.buildUpdatePack(T.normNiche(T.NICHES.dev));
  const prompt = T.buildUpdatePrompt(T.normNiche(T.NICHES.dev));
  T.STATE.workmode.codeMode = prev;
  const man = pack.manifest;
  // (1) carimbo de MODOS: o marcador de cada modo, e a fronteira do que ele nao decide
  ["Ao final da conversa, o assistente REGISTRA o que falta", "Saida de codigo via ASU", "Projeto em grupo"].forEach(m =>
    assert(man.indexOf(m) > -1, "manifesto nao publica o marcador do modo: "+m.slice(0, 32)+" — sem marcador o projeto nao tem como distinguir sobra de novidade"));
  assert(/nao ha marcador no CEREBRO/.test(man), "o modo skills-do-nicho nao tem marcador no CEREBRO e o manifesto finge que tem — declarar marcador inexistente e pior que declarar a ausencia");
  assert(/esqueceu de LIGAR/.test(man) && /esqueceu de LIGAR/.test(prompt), "a fronteira sumiu: o marcador decide sobra, nao decide se o dono esqueceu de ligar um modo");
  assert(!/o kit nao tem como saber qual dos dois casos e/.test(man), "a frase falsa continua no manifesto — o kit SABE, pelo gate que gera a secao");
  // (2) carimbo de VERSAO: quatro carriers, e a linha declarada como do kit
  const selo = "Kit de Contexto Universal v" + T.KIT_VERSION;
  [["woTemplate", kit.woTemplate], ["applyWo", kit.applyWo], ["wrap", kit.wrap]].forEach(([n, txt]) =>
    assert(txt.indexOf(selo) > -1, "o artefato "+n+" do kit-Code nao carrega o carimbo de versao — se so o CEREBRO carrega, o carimbo mora na ultima linha do arquivo mais mesclado e e o que mais se perde"));
  assert(T.buildClaudeMd(T.normNiche(T.NICHES.dev)).indexOf(selo) > -1, "o CEREBRO perdeu o carimbo de versao");
  assert(/nao funda, substitua/.test(kit.wrap), "o carimbo nao se declara como linha do KIT — linha sem dono e linha que o merge funde");
  assert(/Carimbo de versao — linha do KIT/.test(man), "o manifesto nao explica que o carimbo nao se funde");
  assert(man.indexOf("devem dizer `v" + T.KIT_VERSION + "`") > -1, "o manifesto nao da a conferencia pos-merge dos carimbos — sem ela «de que versao eu vim?» volta a ser arqueologia");
  // (3) o arquivo avulso se le quando chega
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/se le no TURNO em que chega/.test(cmd), id+": nada manda ler o arquivo avulso no turno em que ele chega — adiar nao guarda o arquivo, so adia descobrir que ele sumiu");
    assert(/prazo vencido nao rola para o turno seguinte/.test(cmd), id+": «Manter: nao li» sem prazo terminal volta a ser fila indefinida");
  });
  return "ok";
});
```

---

## Fora de escopo

- **Não reconstruir as 18 entradas do CHANGELOG.** É dívida real, com fonte disponível (o `DECISIONS.md` tem D-115 a D-134 e o `STATUS.md` tem as versões), mas é trabalho de porte próprio e a Edição 7 já impede o **próximo** salto. Vai registrada no IDEAS com gatilho.
- **Não pôr o carimbo nas skills instaladas do próprio KCM**, e a assimetria é de propósito: o carimbo existe para dizer a um projeto **instalado** de qual versão ele veio; o KCM **é** o kit, e a verdade dele é a constante `KIT_VERSION`, já conferida pelo C54. Carimbo na casa criaria um segundo número para manter em sincronia — exatamente o defeito que a wo0103 consertou. **Não «conserte» isso depois sem reler este parágrafo.**
- **Não mexer no `meta/ROADMAP.md`.** Ele vem inteiro pela raia do chat, no mesmo ciclo; a WO só o inclui no `git add`.
- **Não reabrir a `i-N47`.** Ela fechou o que se propunha (reconstruir v1.54–v1.66). O que faltava não era escopo dela: era o degrau que impedisse a repetição — e é a Edição 7.

## Armadilhas desta WO

- **A Edição 1 tem crases dentro de template strings JS** (`` \` ``). Se o editor «ajudar» desescapando, o build quebra com erro de sintaxe, não com check vermelho.
- **A Edição 3 é irmã da 1.** Se aplicar uma e esquecer a outra, dois arquivos do mesmo pacote dirão coisas opostas e o C56 acusa.
- **A Edição 6 muda o conteúdo de duas asserções, não a redação.** Não «preserve a frase antiga por segurança» — ela cobra exatamente o que esta WO remove.
- **A Edição 4 usa `kitStamp()`**, que já existe no gerador. Não redefina.
- **Ordem:** aplique **todas** as edições do gerador antes de rodar o harness. Com a 6 aplicada e a 1 não, o C38 fica vermelho de propósito.

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` — sem erro, **18 módulos**.
- [ ] `node validate.js index.html` → **18/18 nichos · 100/100 checagens · 0 erros**. *100 = 99 + o C56.*
- [ ] C28 imprime **exatamente** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`. **Diferente = PARE.**
- [ ] `index.html` fica em **836.117 bytes** (era 833.401).
- [ ] Contagens **derivadas** (todas em `src/index.template.html`): `se le no TURNO em que chega` → **1** · `Marcador (so aparece com o modo LIGADO)` → **1** · `nao funda, substitua` → **1** · `Carimbo de versao — linha do KIT` → **1** · **`esqueceu de LIGAR` → 2** *(manifesto e prompt — é isto que prova que as Edições 1 e 3 foram as duas)* · **`o kit nao tem como saber` → 0** *(a frase falsa saiu)*.
- [ ] **Prova negativa, obrigatória:** troque `## v1.120.0` por `## v1.117.0` em `meta/CHANGELOG.md`, rode `validate`, confirme o **C54 vermelho** com a contagem de versões puladas, e **desfaça**.
- [ ] `test -f meta/ROADMAP.md` e o arquivo é o entregue pelo chat neste ciclo (a primeira linha de «Mudanças nesta revisão» cita **v1.121.0**). **Se ainda for o antigo, PARE** — o `git add` abaixo o incluiria desatualizado.
- [ ] `git diff --stat` mostra **4 arquivos**: `src/index.template.html`, `validate.js`, `index.html`, `meta/ROADMAP.md`.

## Ao terminar — registros (canal CODE)

**`meta/DECISIONS.md`** — acrescente:

```
### D-137 — Os dois carimbos respondem sozinhos (wo0106)
**Carimbo de modos:** o manifesto do pacote passa a publicar, por modo, o **marcador** — o cabeçalho que só existe no arquivo gerado quando aquele modo está ligado, derivado por diferença e não escolhido (Code: «Ao final da conversa, o assistente REGISTRA o que falta»; ASU: «Saída de código via ASU (patch)»; compartilhado: «Projeto em grupo (HUB compartilhado)»; skills-do-nicho: **não há**, e o manifesto diz que não há). Com isso «sobra ou modo esquecido?» vira decidível pelo próprio projeto, e a frase falsa *«o kit nao tem como saber qual dos dois casos e»* sai — o kit sabe, pelo gate que gera a seção. A proibição de remover sozinho sobrevive, restrita à única hipótese que o arquivo não responde: **o dono esqueceu de LIGAR um modo**. O `_UPDATE-PROMPT` foi alinhado no mesmo commit, senão dois arquivos do mesmo pacote diriam o contrário um do outro. Devolução do satelite-web, registrada pela wo0104. **Carimbo de versão:** passa de um carrier para **quatro** (CEREBRO, modelo de WO e as duas skills), declarado como **linha do KIT que não se funde**, com conferência pós-merge no manifesto — medido: o CEREBRO instalado do FlatDrop tem zero ocorrências do carimbo, porque ele era a última linha do arquivo mais mesclado do pacote. **Terceira coisa:** arquivo avulso novo se lê no turno em que chega; «Manter: não li» ganha degrau terminal, porque prazo vencido não rola — medido, um arquivo esperou dois dias e sumiu do mount com o conteúdo. **Quarta:** o C54 ganha o degrau que impede o próximo salto de versão no CHANGELOG. **Custo de teto: zero.** Cobrado pelo C56, com três provas negativas.
```

**`meta/IDEAS.md`** — acrescente na seção de ideias:

```
## i-N59 — O CHANGELOG perdeu 18 versões (v1.102.0–v1.119.0), e a i-N47 já tinha fechado o mesmo defeito — ABERTA, dívida com fonte
Medido em 2026-08-28: o `CHANGELOG.md` salta de `v1.101.0` para `v1.120.0`. As 18 versões **existem** no `STATUS.md` e no `DECISIONS.md` (D-115 a D-134) — só o CHANGELOG as perdeu, e o `C54` não pegava porque conferia o topo, que estava certo. **O que importa aqui não é o buraco, é a repetição:** a i-N47 fechou exatamente este defeito uma vez, reconstruindo v1.54–v1.66, e a reconstrução não impediu nada — porque o que faltava era um degrau no **momento do release**, não uma faxina depois. A wo0106 pôs o degrau (Edição 7 do C54: o topo e o anterior têm de ser minors consecutivos). **Fica ABERTA a reconstrução**, que é trabalho de porte próprio e tem fonte disponível. *Gatilho: quando houver uma sessão sem leva urgente — é o tipo de dívida que só se paga em janela ociosa, e por isso some.* **Inferido, marcado:** o buraco provavelmente se abriu quando o registro migrou para WO+`/wrap`, porque as WOs do período mandavam atualizar STATUS e DECISIONS e não mandavam abrir entrada no CHANGELOG. Não foi conferido WO a WO.
```

**`meta/STATUS.md`** — versão **v1.122.0**, harness **18/18 · 100/100**. **Procure `99` no arquivo INTEIRO** e atualize todas as ocorrências.

**`meta/CHANGELOG.md`** — entrada nova da **v1.122.0**.

> **Atenção — duas coisas no mesmo commit:** atualize `const KIT_VERSION` para `"1.122.0"` em `src/index.template.html` **e** abra a entrada no CHANGELOG. O `C54` agora confere as duas coisas: o carimbo **e** que não houve salto de versão.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · desvios · arquivos tocados · build/validate com os números · **o resultado da prova negativa** · o commit. Campo do push com o **resultado real**.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/ROADMAP.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md meta/workorders/260828-wo0106-os-dois-carimbos-respondem-sozinhos.md
```

```
git commit -m "feat(kit): os dois carimbos respondem sozinhos (v1.122.0)" -m "Carimbo de modos publica o marcador de cada modo, derivado por diferenca, e a frase falsa sai: o kit sabe distinguir sobra de modo esquecido pelo gate que gera a secao. A proibicao de remover sozinho fica restrita a hipotese que o arquivo nao responde. Prompt de update alinhado no mesmo commit. Carimbo de versao passa de um para quatro carriers, declarado como linha do kit que nao se funde, com conferencia pos-merge. Arquivo avulso novo se le no turno em que chega, e Manter nao li ganha degrau terminal. C54 ganha o degrau que impede o proximo salto de versao no CHANGELOG, que perdeu 18 versoes sem ninguem notar. ROADMAP revisado contra o feito, 87 versoes de defasagem. Check C56 com tres provas negativas. Teto inalterado."
```

```
git push
```
