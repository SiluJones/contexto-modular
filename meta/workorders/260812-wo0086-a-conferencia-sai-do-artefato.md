# WO 0086 — A conferência sai do artefato, inteira, e com a contagem declarada

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. As oito edições são mecânicas, mas duas inserem blocos multi-linha dentro de arrays de string em `buildWoTemplate()` — atenção ao escape das aspas (ver Armadilhas).
> **Pré-requisito:** `KIT_VERSION 1.106.0`, commit `f033209`, `main` limpo (o `.claude/launch.json` não rastreado que o relatório da wo0085 menciona é esperado), harness **18/18 · 85/85 · 0 erros**.
> **Base:** `meta/analises/260811-ANALISE-a-conferencia-sai-do-artefato.md` — **opção (C), três superfícies**, com a dívida de gatilho vencido **(D) parqueada**; aprovada pelo autor em 2026-08-12. Origem: Mapsmith `FEEDBACK-kit-09-lista-de-conferencias.md` + IDEA-073; sand-land `IDEAS.md` **FK-J** e **FK-K**; fricção em `mapsmith_10.md` blocos 9 e 11.
> **Depende de:** wo0085 (aplicada, `f033209`). Não há sobreposição de âncoras entre as duas.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte** — não chute um lugar próximo.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** o item e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique os appends das Edições 6, 7 e 8.

---

## 1. Por que

**Três projetos chegaram sozinhos à mesma pergunta: de onde saiu a lista?**

| onde | a pergunta | o que respondia |
|---|---|---|
| Mapsmith, IDEA-073 (05/08) | de onde vem a lista de **conferências** da sonda? | da cabeça de quem escreveu |
| Sand-land, **FK-J** (05/08) | de onde vem a lista de **lugares a mudar**? | do comentário de quem reclamou |
| Mapsmith, feedback (9) (10/08) | de onde vêm os **passos de verificação** de uma WO? | de plausibilidade, sem tocar o código que a WO mudou |

As duas primeiras são do **mesmo dia**, em projetos que não combinaram — e o sand-land registrou por escrito o mecanismo: *quando a correção e o instrumento saem do mesmo inventário, o que ficou de fora fica invisível dos dois lados*.

**O que já custou, com número.** **FIX-0010 (Mapsmith):** conferência verde em tudo — `45/45 existem`, `extensões {'.webp': 45}` — com os 45 ícones sem canal alfa e visualmente destruídos; **nenhum instrumento abriu uma imagem**. **FK-K (sand-land):** o inventário dos pontos que montavam caminho saiu de um `grep … | head -25` **truncado**, e o vigésimo-quarto ponto ficou de fora — pego porque a WO **declarava** «onze pontos» e o executor achou doze. **DEC-036 (sand-land):** um `grep` de `data.meta` achou um consumidor onde havia dois, porque o padrão descrevia o nome da *variável*, não do *campo*.

**E o defeito subiu de camada sem ninguém notar:** a IDEA-073 diagnosticou a lista-feita-à-mão no *instrumento* em 05/08, foi aprovada no mesmo dia, e cinco dias depois o mesmo assistente escreveu três passos de verificação de WO pelo mesmo vício.

**A fricção que o autor nomeou por escrito** (`mapsmith_10.md`, bloco 9), sobre a linha «Peça no próximo turno» que o próprio kit especifica:

> *«Uma dúvida sobre essa linha que vc escreve “wo0072 aplicada, aqui o relatório; o teste manual deu X”. Mas por acaso eu deveria fazer algum teste? (…) se sim vc deveria instruir-me como fazer o teste explicando certinho aqui no chat, se não é para mim e o code já fez, vc não precisa colocar ela nessa linha (…) me confunde.»*

## 2. Contexto factual

Tudo abaixo **medido** em sandbox no estado `f033209` (repo reconstruído do mount, build reproduzindo `index.html` **byte a byte** — 788.483 —, harness verde 18/18 · 85/85 antes de qualquer edição).

- **O modelo de WO tem um passo de verificação e nenhum dos três campos.** `buildWoTemplate()` entrega hoje: `- [ ] **Teste manual que a validacao NAO cobre** (…): [caso feliz · caso de borda · regressao possivel].` Não diz **quem roda**, não exige que o passo demonstre por onde a execução passa pelo código que a WO mudou, e não distingue «passou» de «não foi exercitado».
- **A virtude já existe; o gatilho é que não.** O comportamento universal `careful_guides` diz, com todas as letras, que ao pedir algo ao usuário o assistente «explica exatamente o quê, onde, como, e o que esperar». Estava **ligado nos 18 nichos** enquanto o autor recebia «o teste manual deu X». Princípio escrito no infinitivo não tem hora.
- **Metade da FK-J já entrou pela porta dos fundos.** A regra de higiene «Varra pelo fato, não pela frase» (D-116) cobre a cláusula (a) — *grepe o fato, não a expressão*. **Não cobre a (b)** — *de onde sai a lista do que procurar* — nem a FK-K. É a diferença que produziu os dois erros do sand-land: nos dois casos varreu-se bem uma lista que já nascera errada.
- **Custo de teto: ZERO, medido.** As três superfícies vivem fora de `buildInstr`. Confirmado: C28 imprime os mesmos números antes e depois (`padrao 6611 · +Code 514 · +ASU 372 · compart 372 · combo 7497`).
- **A convergência não é toda cega, e o registro precisa dizer isso.** FK-I diz textualmente que adota a formulação do Mapsmith; FK-J cita a carta 12 do Mapsmith. Os dois projetos **se leem**. O que a repetição prova é **reprodução** — mais forte que anedota, mais fraco que convergência independente.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.106.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.107.0";
```

---

## Edição 2 — `src/index.template.html` · `buildWoTemplate()`, os três campos por passo de verificação

**Âncora** (duas linhas do array, dentro da seção «Depois de aplicar»):

```
    "- [ ] **Teste manual que a validacao NAO cobre** (obrigatorio quando a WO toca dado carregado ou UI):",
    "      [caso feliz · caso de borda · regressao possivel].",
```

**Substituir por:**

```
    "- [ ] **Teste manual que a validacao NAO cobre** (obrigatorio quando a WO toca dado carregado ou UI).",
    "      Cada passo de verificacao — nao cada item deste checklist — traz os tres campos abaixo. Passo",
    "      sem os tres nao esta pronto para ser escrito:",
    "      - **Quem roda:** por padrao, **quem aplica**. So vai ao dono o passo que toca **rede de terceiro**",
    "        ou **destroi algo fora do repositorio**; leitura e operacao reversivel na mesma maquina nunca sao",
    "        dele. E quando for dele, o passo chega com o comando exato, o que esperar ver, e o que fazer se",
    "        vier diferente — **nunca peca um resultado que voce nao ensinou a produzir.**",
    "      - **Chega no ramo?** Uma linha nomeando o arquivo e a funcao por onde a execucao passa pelo codigo",
    "        que esta WO mudou. Se voce nao consegue tracar essa linha, o passo nao verifica esta WO: verifica",
    "        que o programa continua rodando. E o unico campo que da trabalho, e e o que separa conferir de",
    "        parecer conferir.",
    "      - **Prova de vida:** quando \"passou\" se parece com \"nada aconteceu\", o passo precisa do par negativo",
    "        que forca o sinal. Lista vazia so significa alguma coisa depois de voce ter visto a mesma checagem",
    "        devolver um item.",
```

---

## Edição 3 — `src/index.template.html` · `buildWoTemplate()`, seção «Inventario»

**Âncora** (fim da seção «Contexto factual», imediatamente antes do separador da Edição 1 do modelo):

```
    "**deduzido** — inferencia sem rotulo vira fato na leitura seguinte.]",
    "",
    "---",
    "",
    "## Edicao 1 — `caminho/real/do/arquivo.ext` · [o que muda, em cinco palavras]",
```

**Substituir por:**

```
    "**deduzido** — inferencia sem rotulo vira fato na leitura seguinte.]",
    "",
    "## Inventario — de onde saiu a lista de edicoes *(apague se a WO tem uma edicao so)*",
    "",
    "[Quando as edicoes abaixo sao **todos os lugares** que precisam mudar, diga como voce achou esses lugares.",
    "Lista feita de cabeca, ou herdada do texto de quem apontou o problema, ja custou caro: o que ficou de fora",
    "fica invisivel dos dois lados, porque a correcao e a conferencia saem do mesmo inventario incompleto.]",
    "",
    "- **Saiu do artefato, nao da memoria.** A pergunta e sempre \"que lugares declaram esta grandeza?\", feita ao",
    "  codigo. Grepe o **fato**, nao a frase: o mesmo campo aparece com outro nome de variavel, e a mesma regra",
    "  aparece parafraseada. Procure o termo literal, a parafrase, e as listas de pendencia.",
    "- **Nao truncar.** Nada de `head`, nada de \"os principais\". Inventario paginado e inventario errado, e o",
    "  item que ficou de fora e justamente o que ninguem vai procurar depois.",
    "- **Declare quantos.** Escreva o numero de pontos encontrados — \"onze lugares montam este caminho\" — para",
    "  que quem aplica possa **contestar a contagem antes de agir**. Ja foi assim que um inventario truncado foi",
    "  pego: a WO dizia onze, o executor achou doze. A contagem e a rede; a proibicao do `head` sozinha nao pega.",
    "",
    "---",
    "",
    "## Edicao 1 — `caminho/real/do/arquivo.ext` · [o que muda, em cinco palavras]",
```

---

## Edição 4 — `src/index.template.html` · `buildWoTemplate()`, contestar a contagem no checklist

**Âncora:**

```
    "- [ ] [Conferencia de forma especifica desta WO — ex.: \"a entrada nova ficou dentro da secao certa\".]",
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
    "- [ ] **Se a WO declarou um inventario** (\"onze lugares\"), refaca a contagem no repo. Numero diferente:",
    "      **PARE e reporte antes de editar** — a divergencia e o achado, nao um detalhe a acomodar.",
```

---

## Edição 5 — `src/index.template.html` · `buildClaudeMd()`, o gatilho no item «Próximo (b)» do bloco de fecho

**Âncora** (uma linha só):

```
  L.push("1. **Próximo** — sempre presente, ANTES do divisor, em duas partes: **(a) Ação** — a próxima coisa concreta a fazer; **(b) Peça no próximo turno** — a frase que o usuário pode mandar de volta para retomar sem reconstruir contexto (a frente sugerida, já redigida como pedido). Não é lista de possibilidades: é uma ação e um pedido.");
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
  L.push("   **A frase só pode conter resultado que o usuário saiba produzir.** É aqui que a regra de instruções cuidadosas costuma falhar — não por má vontade, mas porque a linha é redigida rápido, no fim do turno, e ninguém a lê como um pedido de trabalho. Antes de escrevê-la, pergunte de quem é cada resultado que ela menciona: se é do executor, peça o **relatório** («aplicada, aqui o relatório»); se é de fato do usuário, o **comando exato, quem roda e o que esperar ver** vêm no MESMO turno, não na resposta seguinte. Pedir «o teste manual deu X» sem nunca ter dito que teste é esse, quem o roda e como se roda transfere ao usuário um trabalho que ele não sabe que tem — e ele descobre isso escrevendo de volta para perguntar.");
```

---

## Edição 6 — `validate.js` · check C42

**Âncora** (início do C41 — inserir **imediatamente ANTES** desta linha, com uma linha em branco entre o bloco novo e ela):

```
check("C41 o fecho em modo Code registra em vez de listar (wo0085): canal por doc, log do dia com gatilho de evento, regenerar x criar, origem do fato", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C42 a conferencia sai do artefato (wo0086): tres campos por passo, inventario declarado e nao truncado, e a frase pedida so cobra o que o dono sabe produzir", () => {
  const wo = T.buildWoTemplate();
  // (1) tres campos por passo de verificacao
  assert(/\*\*Quem roda:\*\*/.test(wo), "modelo de WO sem o campo 'Quem roda' — o passo nao diz de quem e");
  assert(/\*\*Chega no ramo\?\*\*/.test(wo), "modelo de WO sem o campo 'Chega no ramo?' — sem ele o passo verifica que o programa roda, nao que a WO funcionou");
  assert(/\*\*Prova de vida:\*\*/.test(wo), "modelo de WO sem o campo 'Prova de vida' — 'passou' indistinguivel de 'nada aconteceu'");
  assert(/rede de terceiro/.test(wo) && /destroi algo fora do repositorio/.test(wo), "o criterio de 'Quem roda' nao esta positivo e curto — sem ele, tudo vira pedido ao dono");
  assert(/nunca peca um resultado que voce nao ensinou a produzir/.test(wo), "o modelo nao proibe cobrar do dono um resultado que ele nao sabe produzir");
  assert(/nao cada item deste checklist/.test(wo), "o modelo nao limita os tres campos aos PASSOS DE VERIFICACAO — aplicados a cada item do checklist viram cerimonia");
  // (2) inventario: sai do artefato, nao trunca, declara a contagem
  assert(/## Inventario/.test(wo), "modelo de WO sem a secao de inventario");
  assert(/que lugares declaram esta grandeza/.test(wo), "o inventario nao manda perguntar ao artefato");
  assert(/Grepe o \*\*fato\*\*, nao a frase/.test(wo), "o inventario nao distingue varrer pelo fato de varrer pela frase");
  assert(/Nao truncar/.test(wo) && /head/.test(wo), "o inventario nao proibe truncamento — foi um head que escondeu o ponto que faltava");
  assert(/Declare quantos/.test(wo), "o inventario nao exige a contagem declarada, que e a unica rede que ja pegou o erro");
  assert(/contestar a contagem antes de agir/.test(wo), "a contagem declarada nao serve para quem aplica contestar");
  const ondeInv = wo.indexOf("## Inventario"), ondeEd1 = wo.indexOf("## Edicao 1");
  assert(ondeInv > -1 && ondeEd1 > -1 && ondeInv < ondeEd1, "a secao de inventario vem DEPOIS das edicoes — quem escreve ja montou a lista antes de ler a regra");
  assert(/refaca a contagem no repo/.test(wo), "o checklist de conferencia nao manda refazer a contagem declarada");
  // (3) a frase pedida de volta so cobra o que o dono sabe produzir
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/Peça no próximo turno/.test(cmd), id+": o bloco de fecho perdeu a parte (b) do item Proximo");
    assert(/só pode conter resultado que o usuário saiba produzir/.test(cmd), id+": a parte (b) nao tem o gatilho — a virtude de instruir com cuidado ja existia e nao disparava, porque nao tinha hora");
    assert(/peça o \*\*relatório\*\*/.test(cmd), id+": nao diz que resultado do executor se cobra como relatorio");
    assert(/no MESMO turno/.test(cmd), id+": nao exige que o comando e o esperado cheguem junto do pedido");
    assert(/o teste manual deu X/.test(cmd), id+": falta o exemplo concreto que o autor nomeou como confuso");
  });
  return "ok (" + wo.length + " chars no modelo)";
});
```

> **Nada a fazer no `SHIM`** — `buildWoTemplate`, `NICHES`, `normNiche` e `buildClaudeMd` já estão exportados.
> **O C27 muda de número reportado** (era `5921 chars no modelo`, passa a `8406`) — é o mesmo `wo.length`, e o C27 não impõe teto ao modelo. Não é regressão.

---

## Edição 7 — `meta/DECISIONS.md` · registra a D-120

**Âncora** (última linha do arquivo, fim da D-119):

```
`KIT_VERSION 1.106.0`. **Custo de teto NEGATIVO:** C28 sai de `padrao 6611/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7505/7600` para **`padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`**. O padrão e a folga do `narrative` (289) não mudam — nenhuma edição toca o texto universal. Harness **18/18, 84/84 → 85/85, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-120 — A conferência sai do artefato: três campos por passo, inventário declarado e não truncado, e a frase pedida de volta só cobra o que o dono sabe produzir (wo0086)

**Base.** `meta/analises/260811-ANALISE-a-conferencia-sai-do-artefato.md`, opção (C) — três superfícies —, aprovada pelo autor em 2026-08-12, com a dívida (D) parqueada.

**Contexto — três projetos, três alturas, a mesma pergunta.** *De onde saiu a lista?* No Mapsmith (IDEA-073, 05/08) era a lista de **conferências** de um instrumento, tirada da cabeça de quem a escreveu. No sand-land (FK-J, **mesmo dia**, sem combinação) era a lista de **lugares a mudar** num grep global, herdada do comentário de quem tinha reclamado do problema. No Mapsmith de novo (feedback 9, 10/08) eram os **passos de verificação de uma WO**, escritos por plausibilidade, sem tocar o código que a WO mudou. O sand-land nomeou o mecanismo: **quando a correção e o instrumento saem do mesmo inventário, o que ficou de fora fica invisível dos dois lados.**

**O custo, com número.** FIX-0010 (Mapsmith): conferência verde em tudo — `45/45 existem`, `extensões {'.webp': 45}` — com os 45 ícones sem canal alfa e visualmente destruídos; **nenhum instrumento abriu uma imagem**. FK-K (sand-land): inventário saído de um `grep … | head -25` truncado, com o vigésimo-quarto ponto de fora — **pego porque a WO declarava «onze pontos» e o executor achou doze**. DEC-036 (sand-land): um `grep` de `data.meta` achou um consumidor onde havia dois, porque o padrão descrevia o nome da *variável*, não do *campo*.

**E o defeito sobe de camada sem ninguém notar.** A IDEA-073 diagnosticou a lista-feita-à-mão no *instrumento*, foi aprovada no mesmo dia, e **cinco dias depois** o mesmo assistente escreveu passos de verificação de WO pelo mesmo vício. A lição, na formulação do próprio Mapsmith: *um diagnóstico registrado sobre uma camada deve ser lido como pergunta sobre todas as outras.*

**Achado que decidiu a forma do remédio: a virtude já existia e não disparava.** O comportamento universal `careful_guides` manda, com todas as letras, explicar «exatamente o quê, onde, como, e o que esperar» ao pedir algo ao usuário. Estava **ligado nos 18 nichos** enquanto o autor recebia «o teste manual deu X» e tinha de escrever de volta perguntando se aquele teste era dele. **Princípio escrito no infinitivo não tem hora** — é o item (7) do feedback do Mapsmith confirmado em campo, e é por isso que a correção não repete a virtude num segundo lugar: ela põe o **gatilho** dentro do item «Próximo (b)» do bloco de fecho, que é onde a frase é redigida.

**Decisão — três superfícies, uma por altura do defeito.** **(1)** Cada **passo de verificação** do modelo de WO passa a trazer três campos: **Quem roda** (por padrão quem aplica; só vai ao dono o passo que toca rede de terceiro ou destrói algo fora do repositório — e aí chega com comando, expectativa e o que fazer se vier diferente), **Chega no ramo?** (uma linha nomeando arquivo e função por onde a execução passa pelo código que a WO mudou — sem ela o passo verifica que o programa roda, não que a WO funcionou) e **Prova de vida** (o par negativo, para quando «passou» se parece com «nada aconteceu»). **(2)** Seção **«Inventario»** nova no modelo de WO, posicionada **antes** da primeira edição — porque quem escreve monta a lista ali, não no fim: sai do artefato e não da memória, não trunca, e **declara a contagem**; o checklist de conferência ganha o contra-passo de refazer a contagem e **parar se divergir**. **(3)** O item «Próximo (b)» do bloco de fecho ganha o gatilho: a frase pedida de volta só pode conter resultado que o usuário saiba produzir.

**Duas escolhas de posicionamento, e o porquê de cada uma.** A análise sugeria a seção «Armadilhas» para a regra de inventário; foi para uma seção própria antes da Edição 1 porque **Armadilhas é lida por quem aplica, e a regra de inventário é para quem escreve** — a metade que interessa a quem aplica (contestar a contagem) foi para o checklist, onde ele já está. E a proibição do `head` fica explicitamente subordinada à contagem declarada: *a contagem é a rede; a proibição sozinha não pega*, porque foi o número na WO, e não a regra, que pegou o erro do sand-land.

**Sobre a genealogia, dita em voz alta.** FK-I adota textualmente a formulação do Mapsmith; FK-J cita a carta 12 do Mapsmith. **Os dois projetos se leem.** O que esta repetição prova é **reprodução** — mais forte que anedota, mais fraco que convergência independente —, e o registro diz isso porque afirmar convergência cega aqui seria inflar a evidência.

**Parqueado nesta leva (D):** «ideia aprovada com gatilho vencido é dívida sem cobrança» — o terceiro achado do feedback (9), com **uma** ocorrência medida, num projeto que já organiza o IDEAS por status+ID (desvio registrado). O kit recusou duas vezes (D-104, D-106) aumentar o vocabulário obrigatório do IDEAS de todo projeto. Fica no IDEAS com **gatilho de repetição**: um segundo projeto relatar o mesmo estado.

**Check C42 novo**, com **sete provas negativas** — uma por campo (Quem roda, Chega no ramo, Prova de vida), uma pela contagem declarada, uma pela proibição de truncar, uma pela posição da seção de inventário (movida para depois das edições) e uma pelo gatilho do «Próximo (b)». Todas reprovam o C42 sozinhas.

`KIT_VERSION 1.107.0`. **Custo de teto ZERO** — as três superfícies vivem fora de `buildInstr`: C28 imprime os mesmos números da v1.106.0 (`padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`), folga do `narrative` em **289**. O modelo de WO cresce de **5.921 para 8.406** caracteres (número que o C27 e o C42 reportam; não há teto sobre ele). Harness **18/18, 85/85 → 86/86, 0 erros**.
```

---

## Edição 8 — `meta/IDEAS.md` · registra a leva no «Feedback para o Kit»

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece; a entrada nova fica no topo da seção):

```

### 2026-08-12 — Feedback do Mapsmith (item 9 + IDEA-073) e do sand-land (FK-J, FK-K), «a conferência sai do artefato» — ACEITOS E IMPLEMENTADOS (D-120, wo0086)
Três projetos chegaram à mesma pergunta — *de onde saiu a lista?* — em três alturas diferentes: a lista de conferências de um instrumento, a lista de lugares a mudar num grep global, e os passos de verificação de uma WO. As três superfícies do kit foram corrigidas, cada uma na altura em que o defeito age. **O achado que decidiu a forma:** o comportamento universal `careful_guides` já mandava explicar «o quê, onde, como e o que esperar» ao pedir algo ao usuário, e estava **ligado nos 18 nichos** enquanto o autor recebia «o teste manual deu X» — princípio escrito no infinitivo não tem hora, então a correção pôs o **gatilho** dentro do item «Próximo (b)» do bloco de fecho, em vez de repetir a virtude num segundo lugar. Custo de teto **zero**. Check **C42**, com sete provas negativas.

**Genealogia, dita em voz alta:** FK-I adota textualmente a formulação do Mapsmith e FK-J cita a carta 12 dele — **os dois projetos se leem**. O que a repetição prova é *reprodução*, não convergência independente; o registro diz isso de propósito.

**Parqueada, com gatilho de repetição — «ideia aprovada com gatilho vencido é dívida sem cobrança».** Já registrada na entrada de 2026-08-11 e mantida parqueada nesta leva: uma ocorrência medida, num projeto que organiza o IDEAS por status+ID (desvio registrado), e o kit já recusou duas vezes (D-104, D-106) aumentar o vocabulário obrigatório do IDEAS. *Gatilho de volta: um segundo projeto relatar o mesmo estado sem cobrança.*
```

---

## Fora de escopo

- **A dívida (D)** — parqueada por decisão do autor.
- **`HYGIENE_RULES`** — a regra «Varra pelo fato, não pela frase» (D-116) fica como está; a cláusula que falta é sobre a **origem** da lista, e ela vive no modelo de WO, não na higiene universal.
- **`careful_guides`** — o texto do princípio **não muda**. O diagnóstico é que ele não tem gatilho, não que esteja mal escrito; mexer nele reintroduziria o custo de teto sem resolver nada.
- **`.claude/launch.json`** (criado pela wo0085 para o teste manual, não versionado) — decisão do autor se fica ou sai; esta WO não o toca.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF; `validate.js` é LF.** As Edições 2 e 3 substituem blocos **multi-linha**. Se a âncora multi-linha não casar, o motivo mais provável é fim de linha: nesse caso, **ancore só na PRIMEIRA linha** de cada bloco e insira o resto depois dela — não reformate o arquivo. Confira ao fim: `python -c "import io; d=io.open('src/index.template.html','rb').read(); print(d.count(b'\n')-d.count(b'\r\n'))"` → **0**. Não rode isso no `validate.js`.
- **Aspas escapadas dentro de string JS.** As Edições 2 e 3 contêm `\"passou\"`, `\"nada aconteceu\"`, `\"que lugares declaram esta grandeza?\"`, `\"os principais\"` e `\"onze lugares\"`. **Copie literalmente, com as barras.** Se o build reclamar de string não terminada, foi aqui.
- **A Edição 3 move o separador `---`.** O texto substituto reintroduz o `"---"` e o `""` **depois** da seção nova, antes da `## Edicao 1`. Se você inserir a seção *depois* do separador, o C42 reprova de propósito (`a secao de inventario vem DEPOIS das edicoes`) — e a mensagem é literal: a posição é a regra, não decoração.
- **O C42 procura texto sem acento no modelo de WO** (`Nao truncar`, `Declare quantos`, `Grepe o **fato**, nao a frase`) e **com** acento no CEREBRO (`só pode conter resultado que o usuário saiba produzir`). Os dois registros são propositais — o modelo de WO é ASCII por convenção do arquivo, o CEREBRO não é. Não uniformize.
- **Número de check:** o próximo livre era **C42**; o C41 é da wo0085. Conferido no `validate.js` antes de escrever.
- **O C27 vai reportar 8406 em vez de 5921.** Esperado — é o `wo.length`, e não há teto sobre ele.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. *(O `meta/STATUS.md` fica para o `/wrap`, ver abaixo.)*
- [ ] A seção `## Inventario` aparece **antes** de `## Edicao 1` no modelo de WO gerado.
- [ ] `node build.js` roda sem erro; `node validate.js index.html` → **18/18 nichos, 86/86 checagens, 0 erros**, com **C42 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Qualquer número diferente significa que algo vazou para `buildInstr` — **PARE e reporte**.
- [ ] CRLF do template: o comando das Armadilhas imprime **0**.
- [ ] **Passo de verificação** — este é o primeiro que segue o próprio formato que a WO institui:
  - **Quem roda:** quem aplica. É leitura de arquivo gerado, reversível, na mesma máquina.
  - **Chega no ramo?** `buildWoTemplate()` (o array de strings editado nas Edições 2–4) e `buildClaudeMd()` (a Edição 5) — as duas funções que esta WO mudou. Baixe o **kit do Claude Code** pela aba de saída do `index.html` (nicho qualquer, **Modo Code ligado**) e abra `meta/workorders/_TEMPLATE.md` do zip: é a saída literal de `buildWoTemplate()`. Confirme os três campos e a seção `## Inventario`. Depois, na aba de saída, veja o **CEREBRO.md** e confirme a linha nova logo abaixo do item «Próximo».
  - **Prova de vida:** com o **Modo Code DESLIGADO**, o botão do kit do Claude Code some da aba de saída — o que prova que o que você leu veio mesmo do ramo Code, e não de um arquivo estático qualquer. O CEREBRO, ao contrário, deve trazer a linha nova **nos dois estados** (a Edição 5 é incondicional).

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · validação (com os números do C28, C42 e C27) · commit e push. Escreva-o **depois** de resolver o push.

> **Para o `/wrap`:** o cabeçalho do `meta/STATUS.md` (linha 4) cita `v1.106.0`, `85/85 checagens`, o orçamento por modo e a lista de concluídos. Atualize **todas** as ocorrências vivas: `1.106.0` → `1.107.0`, `85/85` → `86/86`, cite o **C42** antes do C41, e acrescente **D-120** à lista. Os números do orçamento **não mudam** (custo zero). Não toque nos números **históricos** dentro dos blocos de sessões passadas. Acrescente a sessão nova no topo, movendo a atual para «Sessão anterior».

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260812-wo0086-a-conferencia-sai-do-artefato.md
```

```
git commit -m "feat(kit): a conferencia sai do artefato, inteira e com a contagem declarada" -m "Tres projetos chegaram a mesma pergunta em tres alturas: de onde saiu a lista? Da cabeca de quem escreveu, do comentario de quem reclamou, ou de plausibilidade sem tocar o codigo que a WO mudou. Quando a correcao e o instrumento saem do mesmo inventario, o que ficou de fora fica invisivel dos dois lados." -m "Tres superficies: cada passo de verificacao do modelo de WO ganha Quem roda, Chega no ramo e Prova de vida; uma secao de inventario nasce ANTES da primeira edicao, exigindo que a lista saia do artefato, nao trunque e declare a contagem; e o item Proximo (b) do bloco de fecho passa a so cobrar resultado que o dono sabe produzir." -m "O gatilho e o remedio, nao a virtude: careful_guides ja mandava explicar o que, onde, como e o que esperar, estava ligado nos 18 nichos, e mesmo assim o dono recebia o teste manual deu X. Principio escrito no infinitivo nao tem hora." -m "Check C42 novo, com sete provas negativas. Custo de teto zero. wo0086, D-120." 
```

```
git push
```
