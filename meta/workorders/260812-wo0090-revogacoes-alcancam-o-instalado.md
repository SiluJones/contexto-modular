# WO 0090 — As revogações alcançam o instalado: o pré-voo dos pacotes de update

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. Seis edições; a mais delicada é a Edição 5, que quebra uma string em duas (ver Armadilhas — a primeira tentativa quebrou o build).
> **Pré-requisito:** `KIT_VERSION 1.109.0`, commit `d50a234`, `main` limpo (o `.claude/launch.json` não rastreado é conhecido), harness **18/18 · 89/89 · 0 erros**.
> **Base:** pré-voo dos pacotes de update para Mapsmith e Sand-Land-Map, pedido pelo autor em 2026-08-12 («se tiver certeza que não temos nenhuma ideia ou fase que seria interessante atualizar e refinar ou corrigir antes de eu fazer update nesses dois projetos»). Diagnóstico medido nesta rodada, nos arquivos vivos dos dois projetos.
> **Depende de:** wo0089 (aplicada, `8f5ce1b`; `/wrap` em `d50a234`).
> **Bloqueia:** a geração dos pacotes de update. **Não gere os pacotes antes desta WO** — os pacotes de hoje sairiam sem as três revogações e o merge preservaria o defeito.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 7 e 8.

---

## 1. Por que

**O autor pediu certeza antes dos pacotes. A varredura achou um defeito, e ele é grave o bastante para bloquear a entrega.**

**O que foi medido, nos arquivos vivos dos dois projetos** (lidos no mount nesta rodada):

| arquivo | o que diz hoje | desde quando está errado |
|---|---|---|
| `.claude/skills/wrap/SKILL.md` do **Mapsmith** | *«Mostre o `git diff` e o bloco de commit (uma linha por comando: git add / git commit / git push)»* | **D-115** (v1.104.0) |
| `.claude/skills/wrap/SKILL.md` do **Sand-Land-Map** | *«Entregue o commit em TRÊS blocos separados (…) `git add` / `git commit` / `git push`»* | **D-115** |
| `meta/CEREBRO.md` de **ambos** | *«a entrega é por ARQUIVO COMPLETO, nunca por blocos soltos para o usuário costurar à mão»* · *«o assistente fecha a resposta com o bloco de commit pronto para copiar e colar»* · *«Fim de sessão»* · *«Ao final de cada sessão»* | **D-115**, **D-118**, **D-119** |

**É exatamente o defeito que o autor sofreu nesta casa em 2026-08-12** — o `/wrap` devolvendo os três blocos de `git` para ele colar, e o relatório escrito antes do push, incapaz de dizer se o push aconteceu. A wo0087 consertou aqui. **Nos dois projetos ele continua vivo, hoje.**

**E o pacote de update, como está, NÃO conserta.** O prompt de update diz, corretamente: *«Template genérico NUNCA substitui arquivo vivo refinado. `CLAUDE.md`, `.claude/*`, skills (…) entram por padrão em (c)»*. Skill viva é preservada — e a linha revogada fica **dentro** dela. **A regra que protege o refinamento está protegendo o defeito.**

**O mecanismo para isso existe e está três decisões atrasado.** A lista `REVOCATIONS` — a seção «Linhas revogadas» do manifesto, feita justamente porque *o merge sabe somar e não sabe subtrair* — tem **uma** entrada, de v1.90.0. **D-115, D-118 e D-119 apagaram comportamento e nenhuma foi registrada ali.** É a mesma forma da D-121 («consertar o gerador não conserta o instalado»), agora no próprio mecanismo que existe para alcançar o instalado.

**Segundo defeito, e sem ele as entradas novas não morderiam.** A tabela manda procurar **a string** que o kit usava. Os dois projetos dizem a mesma coisa com **palavras próprias** — «Entregue o commit em TRÊS blocos separados» não contém nenhuma palavra da frase do kit. **Busca literal só acha quem copiou ao pé da letra, e quanto mais refinado o projeto, menos ele copiou.** A D-116 já resolveu isso para as varreduras internas («varra pelo fato, não pela frase»); faltava aplicar ao update.

## 2. Contexto factual

Medido em sandbox no estado `d50a234` (repo reconstruído do mount, build reproduzindo `index.html` byte a byte — **801.792** —, harness verde 18/18 · 89/89 antes de qualquer edição).

- **`REVOCATIONS` tem 1 entrada** (v1.90.0), verificada no fonte.
- **Pedido nº 1 do Mapsmith, respondido por inspeção nesta rodada:** *«testar o pacote com `meta/analises/` inexistente»*. Gerei o pacote e li o manifesto: o `_TEMPLATE.md` de análises sai com natureza **`modelo-em-espera`**, e o manifesto diz textualmente *«só coloque no destino se a pasta JÁ existir neste projeto (…) se ela não existe aqui, o arquivo não entra e isso NÃO é pendência»*. **O comportamento está correto.** O pedido pode ser fechado.
- **Custo de teto: ZERO nas seis edições.** C28 imprime os mesmos números: `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Quarta leva seguida a custo zero.
- **`index.html` vai de 801.792 para 805.160 bytes.**
- **Da carta 17, lida na íntegra nesta rodada** (eu havia afirmado tê-la lido no turno anterior sem ter lido — corrigido): a lição do canal alfa já está no kit pela D-122. A §1 traz um padrão de contrato de dados — aviso que não cabe dentro de um mapa puro precisa de invólucro `{note, media}` — que é **matéria dos projetos, não do kit**: o kit não define formato de dados. Nada dela entra aqui.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato**, e de dois lados. (1) Do lado dos projetos: `grep` do **fato** (`push`, `MENU`, `Verde`, `bloco de commit`, `blocos soltos`, `arquivos completos`, `sessão`) nos quatro arquivos vivos que o mount traz — as duas skills `wrap` e os dois `CEREBRO.md`. (2) Do lado do kit: `REVOCATIONS` e os dois lugares que a consomem (`buildUpdatePack` → manifesto; `buildUpdatePrompt` → prompt colável).

**Não truncado.** Os quatro arquivos vivos foram varridos inteiros; a lista `REVOCATIONS` é de quatro linhas e foi lida completa.

**Contagem declarada: 3 decisões sem revogação registrada** (D-115, D-118, D-119) e **2 superfícies que mandavam varrer por string** (manifesto e prompt). **Conteste antes de agir** — se você achar uma quarta decisão que apagou comportamento e não está na lista, isso é o achado, não um detalhe.

> **O que NÃO foi olhado:** os `.claude/skills/apply-wo/SKILL.md` dos dois projetos não estão no mount — só as duas `wrap` e a `sondar` do Mapsmith. **Ausência não é zero:** é provável que estejam igualmente atrasados, e o pacote de update vai varrê-los pelo fato. Declarado aqui para não virar «conferido».

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.109.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.110.0";
```

---

## Edição 2 — `src/index.template.html` · três revogações novas

**Âncora** (a lista inteira, hoje com uma entrada):

```
const REVOCATIONS = [
  { desde: "1.90.0",
    texto: "Sempre que o autor sinalizar upload — mesmo sem nomear o arquivo",
    porque: "A lista de exemplos de sinal ensinava a ESPERAR o sinal. A releitura do mount e por turno, sem gatilho do usuario. Substituida por: reveja o mount a cada turno, sem esperar eu sinalizar." },
];
```

**Substituir por:**

```
const REVOCATIONS = [
  { desde: "1.90.0",
    texto: "Sempre que o autor sinalizar upload — mesmo sem nomear o arquivo",
    porque: "A lista de exemplos de sinal ensinava a ESPERAR o sinal. A releitura do mount e por turno, sem gatilho do usuario. Substituida por: reveja o mount a cada turno, sem esperar eu sinalizar." },
  { desde: "1.104.0",
    texto: "Mostre o git diff e o bloco de commit (uma linha por comando)",
    porque: "Diz ao EXECUTOR para entregar bloco de git ao dono — quem tem terminal roda. Vale para qualquer forma de pedir o commit «pronto para copiar» numa skill de fecho ou de aplicacao. Substituida por: caso VERDE, o executor roda add/commit/push sem perguntar; caso VERMELHO, nao commita e fecha com MENU NUMERADO; e o push se resolve ANTES de escrever o relatorio, que e o ultimo passo." },
  { desde: "1.106.0",
    texto: "Ritual de início de sessão",
    porque: "O ritual roda a CADA turno, nao uma vez por fio. O nome antigo contradizia a propria regra e ensinava a rodar so ao abrir. Vale para todo par «sessao/turno» no texto vivo — «ao final de cada sessao», «fim de sessao», «lido toda sessao». Substituida por: turno para o que acontece a cada troca, conversa para o que acontece uma vez por fio." },
  { desde: "1.106.0",
    texto: "nunca blocos soltos para colar à mão",
    porque: "Escrita para projeto SEM executor, onde regenerar e a unica saida. Num projeto COM executor no repositorio ela se inverte: o bloco cirurgico com ancora E o artefato certo, e chama-se ordem de trabalho. Substituida, no modo Code, por: registre AQUI o que falta — doc grande por WO com a linha de aplicacao, arquivo novo ou pequeno inteiro, e o log do dia sempre." },
];
```

> **Sem crase dentro de `texto`** — a coluna vira código na tabela markdown e crase aninhada quebra a célula. Já testado: com crase, a linha sai corrompida no manifesto.

---

## Edição 3 — `src/index.template.html` · o manifesto manda varrer pelo fato

**Âncora** (dentro da montagem do manifesto):

```
    L.push("O merge compara o que e **novo** no template. Estas linhas foram **apagadas de proposito** pelo kit —");
    L.push("um arquivo vivo pode ainda te-las, e nenhuma comparacao vai apontar isso. Procure cada uma no seu");
    L.push("arquivo e, se achar, **remova**; se o seu projeto tiver motivo para manter, registre o desvio.");
    L.push("");
```

**Substituir por:**

```
    L.push("O merge compara o que e **novo** no template. Estas linhas foram **apagadas de proposito** pelo kit —");
    L.push("um arquivo vivo pode ainda te-las, e nenhuma comparacao vai apontar isso. Procure cada uma no seu");
    L.push("arquivo e, se achar, **remova**; se o seu projeto tiver motivo para manter, registre o desvio.");
    L.push("");
    L.push("**Varra pelo FATO, nao pela frase.** O texto da tabela e como o KIT dizia — o seu arquivo pode dizer");
    L.push("a mesma coisa com outras palavras, e foi voce quem escreveu essas palavras. Leia a coluna «Por que");
    L.push("saiu», entenda o COMPORTAMENTO revogado, e procure por ele: o termo literal, a parafrase, a tabela");
    L.push("de gatilhos, e o texto que manda fazer aquilo sem nomear. Busca por string so acha quem copiou o kit");
    L.push("ao pe da letra — e quanto mais refinado o seu projeto, menos ele copiou.");
    L.push("");
    L.push("**E varra as SKILLS, `.claude/` e o CEREBRO — nesta ordem de prioridade.** Skill e a superficie mais");
    L.push("esquecida e a mais perigosa: ela e lida ANTES de trabalhar, entao uma linha revogada ali dirige o");
    L.push("trabalho seguinte em vez de so informar mal. E e justamente onde a regra «template generico nao");
    L.push("substitui arquivo vivo refinado» protege demais: sua skill viva fica intacta, com a linha revogada");
    L.push("dentro. **A regra de nao substituir vale para o conteudo especifico do seu projeto, NUNCA para uma");
    L.push("linha revogada** — essa sai, e o resto da sua skill fica.");
    L.push("");
```

---

## Edição 4 — `src/index.template.html` · o prompt de update abre a exceção

**Âncora** (uma linha):

```
  L.push("**Duas coisas que a comparacao de arquivos NAO produz — leia no `_UPDATE-MANIFEST.md` ANTES de comecar:**");
```

**Substituir por** (três linhas — a nova, uma em branco, e a original):

```
  L.push("**A excecao que a regra acima NAO cobre: linha revogada sai mesmo de arquivo vivo refinado.** «Nao substituir o vivo» protege o conteudo que este projeto criou — nao protege uma linha que o kit apagou por estar errada. Varra as **skills** primeiro (`.claude/skills/*`): sao lidas ANTES de trabalhar, entao linha revogada ali dirige o trabalho seguinte em vez de so informar mal, e sao exatamente o lugar onde a regra de nao substituir protege demais.");
  L.push("");
  L.push("**Duas coisas que a comparacao de arquivos NAO produz — leia no `_UPDATE-MANIFEST.md` ANTES de comecar:**");
```

---

## Edição 5 — `src/index.template.html` · o prompt manda varrer pelo fato

**Âncora** (uma linha, longa):

```
1. **Secao «Linhas revogadas».** O merge so enxerga o que e NOVO no template. Algumas linhas foram **apagadas de proposito** pelo kit, e o texto antigo pode continuar vivo aqui, invisivel a comparacao, dirigindo comportamento que ja foi corrigido. Procure cada texto listado — no CEREBRO, nas Instrucoes e nas skills — e me mostre o que achar antes de mexer.
```

**Substituir por:**

```
1. **Secao «Linhas revogadas».** O merge so enxerga o que e NOVO no template. Algumas linhas foram **apagadas de proposito** pelo kit, e o texto antigo pode continuar vivo aqui, invisivel a comparacao, dirigindo comportamento que ja foi corrigido. Procure cada uma — no CEREBRO, nas Instrucoes e nas skills — e me mostre o que achar antes de mexer. **Varra pelo FATO, nao pela frase:** o texto da tabela e como o KIT dizia; este projeto pode dizer a mesma coisa com outras palavras. Leia a coluna «Por que saiu» e cace o COMPORTAMENTO — busca por string so acha quem copiou o kit ao pe da letra.
```

---

## Edição 6 — `validate.js` · check C46

**Âncora** (início do C45 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C45 correspondencia entre projetos como tipo nomeado (wo0089): contador compartilhado, transitoriedade, espera com gatilho; e instantaneo de dado derivavel", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C46 as revogacoes alcancam o instalado (wo0090): as tres decisoes que MUDARAM comportamento estao na lista, e a varredura e por fato e comeca pelas skills", () => {
  const rev = T.REVOCATIONS;
  assert(Array.isArray(rev) && rev.length >= 4, "lista de revogacoes com menos entradas do que as decisoes que apagaram comportamento — o merge so sabe somar, e o que nao esta aqui sobrevive invisivel no projeto instalado");
  const todas = rev.map(r => (r.texto||"") + " || " + (r.porque||"")).join("\n");
  // (1) as tres decisoes que apagaram comportamento e nao tinham entrada
  assert(/MENU NUMERADO/.test(todas), "revogacao da entrega de bloco de git ausente (D-115): projeto instalado continua devolvendo add/commit/push para o dono colar");
  assert(/ANTES de escrever o relatorio/.test(todas), "a revogacao do bloco de git nao diz o que entra no lugar — revogacao sem substituto vira remocao sem conserto");
  assert(/turno para o que acontece a cada troca/.test(todas), "revogacao do vocabulario sessao->turno ausente (D-118)");
  assert(/modo Code/.test(todas), "revogacao do 'nunca blocos soltos' em modo Code ausente (D-119)");
  // (2) cada entrada declara desde quando e por que — sem isso nao da para varrer pelo fato
  rev.forEach((r, i) => {
    assert(/^\d+\.\d+\.\d+$/.test(r.desde||""), "revogacao "+i+" sem versao de origem");
    assert((r.texto||"").length > 10, "revogacao "+i+" sem o texto antigo para procurar");
    assert((r.porque||"").length > 60, "revogacao "+i+" com 'porque' curto demais para varrer pelo fato — e a coluna que descreve o COMPORTAMENTO, nao a string");
  });
  // (3) o manifesto e o prompt mandam varrer pelo FATO e comecar pelas skills
  const n = T.normNiche(T.NICHES.dev);
  T.STATE.workmode = T.STATE.workmode || {};
  const prev = T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode = "yes";
  const man = T.buildUpdatePack(n).manifest;
  const prompt = T.buildUpdatePrompt(n);
  T.STATE.workmode.codeMode = prev;
  assert(/Varra pelo FATO, nao pela frase/.test(man), "manifesto manda procurar a string revogada, nao o comportamento — projeto refinado escreveu com as proprias palavras e a busca literal nao acha");
  assert(/Varra pelo FATO, nao pela frase/.test(prompt), "o prompt de update — unica superficie garantida a chegar num projeto desatualizado — nao manda varrer pelo fato");
  assert(/varra as SKILLS/i.test(man), "manifesto nao prioriza as skills, que sao lidas ANTES de trabalhar");
  assert(/Varra as \*\*skills\*\* primeiro/.test(prompt), "o prompt nao manda comecar pelas skills");
  assert(/NUNCA para uma\n?linha revogada|NUNCA para uma linha revogada/.test(man.replace(/\n/g," ")), "manifesto nao abre a excecao: 'nao substituir o vivo' esta protegendo demais e mantendo a linha revogada dentro da skill viva");
  assert(/linha revogada sai mesmo de arquivo vivo refinado/.test(prompt), "o prompt nao abre a excecao da linha revogada dentro de arquivo vivo");
  return "ok (" + rev.length + " revogacoes)";
});
```

---

## Edição 7 — `meta/DECISIONS.md` · registra a D-124

**Âncora** (última linha do arquivo, fim da D-123):

```
`KIT_VERSION 1.109.0`. **Custo de teto ZERO nas sete edições** — nada foi para as Instruções: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.108.0; folga do `narrative` em **289**. `index.html` de **798.111 → 801.792** bytes. Harness **18/18, 88/88 → 89/89, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-124 — As revogações alcançam o instalado: três decisões entram na lista, e a varredura do update passa a ser pelo fato, começando pelas skills (wo0090)

**Base.** Pré-voo dos pacotes de update para Mapsmith e Sand-Land-Map, pedido pelo autor em 2026-08-12 — «se tiver certeza que não temos nada a corrigir antes de eu fazer update nesses dois projetos». A varredura achou um defeito que **bloqueava a entrega**.

**O que foi medido nos arquivos vivos dos dois projetos.** A skill `wrap` do Mapsmith manda *«Mostre o `git diff` e o bloco de commit»*; a do Sand-Land-Map manda *«Entregue o commit em TRÊS blocos separados»*. Os dois `CEREBRO.md` trazem *«a entrega é por ARQUIVO COMPLETO, nunca por blocos soltos»*, *«o assistente fecha a resposta com o bloco de commit pronto para copiar e colar»*, e o vocabulário «Fim de sessão / Ao final de cada sessão». **É exatamente o defeito que o autor sofreu nesta casa em 12/08** — o `/wrap` devolvendo blocos de `git` e o relatório escrito antes do push. A wo0087 consertou aqui; **nos dois projetos ele está vivo.**

**E o pacote de update, como estava, não consertaria.** O prompt diz — corretamente — que *«template genérico NUNCA substitui arquivo vivo refinado»* e põe `.claude/*` e skills em (c). Skill viva é preservada, **e a linha revogada fica dentro dela**. A regra que protege o refinamento estava protegendo o defeito.

**A causa: a lista de revogações estava três decisões atrasada.** `REVOCATIONS` existe justamente porque *o merge sabe somar e não sabe subtrair*, e tinha **uma** entrada (v1.90.0). **D-115, D-118 e D-119 apagaram comportamento e nenhuma foi registrada.** É a forma da D-121 — «consertar o gerador não conserta o instalado» — reaparecendo **dentro do próprio mecanismo que existe para alcançar o instalado**. A lição geral que a D-121 registrou (todo update do gerador tem um passo de auto-aplicação) ganha aqui a metade que faltava: **toda decisão que APAGA comportamento tem um passo de revogação registrada**, senão ela conserta o kit e não conserta ninguém.

**Segundo defeito, e sem ele as entradas novas não morderiam: a tabela mandava procurar a STRING.** «Entregue o commit em TRÊS blocos separados» não tem uma palavra em comum com a frase do kit. Busca literal só acha quem copiou ao pé da letra — **e quanto mais refinado o projeto, menos ele copiou**. A D-116 já resolvera isso para as varreduras internas; faltava aplicar ao update. O manifesto e o prompt passam a mandar **varrer pelo fato**, lendo a coluna «Por que saiu» para caçar o comportamento, e a **começar pelas skills** — a superfície mais esquecida e a mais perigosa, porque é lida ANTES de trabalhar. Fica explícita a exceção: *«não substituir o vivo» protege o conteúdo que o projeto criou, NUNCA uma linha revogada*.

**Cada entrada nova traz o substituto, não só a remoção.** Revogação que diz apenas «isto saiu» produz um arquivo com um buraco; as três dizem o que entra no lugar — daí o `assert` próprio no C46 para a que descreve o caso verde/vermelho.

**Fecha também o pedido nº 1 do Mapsmith** («testar o pacote com `meta/analises/` inexistente»), respondido por inspeção do pacote gerado: o modelo sai com natureza `modelo-em-espera` e o manifesto diz *«se ela não existe aqui, o arquivo não entra e isso NÃO é pendência»*. **Comportamento correto** — era o último dos três pedidos de volta ainda sem evento.

**Check C46 novo**, com **sete provas negativas**: revogação do bloco de git ausente · revogação sem substituto · revogação do vocabulário ausente · revogação do modo Code ausente · manifesto varrendo por string · prompt não priorizando as skills · entrada com «porque» curto demais para permitir a varredura por fato.

`KIT_VERSION 1.110.0`. **Custo de teto ZERO nas seis edições** — quarta leva seguida: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.109.0; folga do `narrative` em **289**. `index.html` de **801.792 → 805.160** bytes. Harness **18/18, 89/89 → 90/90, 0 erros**.
```

---

## Edição 8 — `meta/IDEAS.md` · registra o pré-voo e fecha os pedidos do Mapsmith

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-12 — Pré-voo dos pacotes de update: as revogações estavam três decisões atrasadas (D-124, wo0090)
O autor pediu certeza antes de atualizar os dois projetos. A varredura dos arquivos vivos deles achou o **mesmo defeito que ele sofreu aqui em 12/08** — as duas skills `wrap` ainda entregam os blocos de `git` para o dono colar, e os dois `CEREBRO.md` carregam «blocos soltos», «bloco de commit pronto para copiar» e o vocabulário «sessão». **E o pacote de update, como estava, não consertaria:** a regra «template genérico nunca substitui arquivo vivo refinado» preserva a skill viva com a linha revogada dentro. `REVOCATIONS` tinha uma entrada, de v1.90.0; D-115, D-118 e D-119 nunca foram registradas.

**A lição geral, que completa a D-121:** aquela dizia que todo update do gerador tem um passo de **auto-aplicação**. Esta acrescenta a metade simétrica — **toda decisão que APAGA comportamento tem um passo de revogação registrada**, senão conserta o kit e não conserta ninguém. Vale como pergunta de fecho de qualquer leva: *esta decisão removeu alguma coisa? então ela tem entrada na lista de revogações?*

**E a varredura do update passa a ser pelo fato, não pela string** (D-116 aplicada ao merge), começando pelas skills. O gatilho disso foi concreto: «Entregue o commit em TRÊS blocos separados» não tem uma palavra em comum com a frase do kit, e a busca literal não acharia.

**Fecha o pedido nº 1 do Mapsmith** («testar o pacote com `meta/analises/` inexistente»): o modelo sai como `modelo-em-espera` e o manifesto declara que a ausência da pasta **não é pendência**. Comportamento correto, verificado no pacote gerado. **Os três pedidos de volta do Mapsmith estão respondidos** — o nº 2 (a regra do `/wrap` pegar a contagem repetida na terceira vez) foi confirmado em 12/08, o nº 3 (o que a medição delegada poupou) foi respondido parcialmente com as wo0085–wo0089, e agora o nº 1.

**Nota de método:** o defeito só apareceu porque a varredura foi aos **arquivos vivos dos projetos**, não à lista de feedback deles. Nenhum dos dois tinha reclamado disto — eles não sabiam. **Feedback recebido cobre o que o projeto percebeu; varrer o instalado cobre o que ele não percebeu.**
```

---

## Fora de escopo

- **Gerar os pacotes de update** — frente seguinte, e é o que esta WO desbloqueia.
- **A §1 da carta 17** (invólucro `{note, media}` para aviso dentro de mapa puro) — é contrato de dados entre os dois projetos; o kit não define formato de dados.
- **B3 (`meta/refs/`, `meta/docs/`)** — organização de cada projeto, já registrado como fora do escopo do kit.
- **Corrigir as skills dos dois projetos diretamente** — não é papel desta WO nem deste repositório. O pacote de update, com as revogações, é o canal.

## Armadilhas desta WO

- **A Edição 4 quebra uma string em duas.** A primeira tentativa colocou um `\n` cru dentro do literal e **quebrou o build** (`SyntaxError: Invalid or unexpected token`). A forma correta é a da WO: `L.push(...)` novo, `L.push("")`, e o `L.push(...)` original. Se o build quebrar, é aqui.
- **Nada de crase dentro do campo `texto`** das revogações — a célula da tabela é code span, e crase aninhada corrompe a linha. Testado.
- **Fim de linha:** template é **CRLF**, `validate.js` é **LF**. As Edições 2, 3 e 4 têm âncora multi-linha no template — se não casar, ancore só na **primeira linha** e insira o resto. Confira ao fim: **0 LF soltos**.
- **`\n` dentro das regex do C46** (`/NUNCA para uma\n?linha revogada/`) é escape obrigatório; copie literalmente.
- **A Edição 2 substitui a lista inteira**, preservando a entrada de v1.90.0 como primeira. Se o `git diff` mostrar essa entrada sumindo, algo saiu errado — PARE.
- **Números de check:** C46 é o próximo livre (C45 é da wo0089).

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. *(O `meta/STATUS.md` fica para o `/wrap`.)*
- [ ] **Inventário declarado: 3 decisões sem revogação + 2 superfícies varrendo por string.** Refaça a contagem; achou uma quarta decisão que apagou comportamento e não está na lista, **PARE e reporte**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 90/90 checagens, 0 erros**, com **C46 verde** reportando `ok (4 revogacoes)`.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Diferente, **PARE e reporte**.
- [ ] `index.html` com **805.160 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de arquivo gerado e execução do harness — reversível, mesma máquina.
  - **Chega no ramo?** `REVOCATIONS` (Edição 2), `buildUpdatePack()` → seção do manifesto (Edição 3) e `buildUpdatePrompt()` (Edições 4 e 5). O C46 gera o manifesto e o prompt de verdade e afirma sobre os dois — rodar o harness exercita as três.
  - **Prova de vida:** o harness verde não prova que a tabela **sai legível**. Abra o `index.html` no navegador, nicho qualquer, **Modo Code ligado**, e baixe/visualize o **pacote de update**: o `_UPDATE-MANIFEST.md` deve trazer **quatro** linhas na tabela «Linhas revogadas», e a de `v1.104.0` deve aparecer inteira, sem célula quebrada. *(Foi a crase aninhada que quebrou a célula no primeiro teste — é isto que este passo pega e o harness não pega.)* Depois, force o vermelho: apague temporariamente a entrada `1.104.0` do `REVOCATIONS`, rode o harness, confirme que o C46 falha com a mensagem sobre o bloco de git, e desfaça.
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Se o teste manual baixou o pacote, apague-o e diga onde estava; se nada foi criado, diga isso.

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · validação (C28, C46, e a contagem do inventário) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever.**

> **Para o `/wrap`:** o `meta/STATUS.md` cita `v1.109.0` e `89/89`. Atualize as ocorrências **vivas** para `v1.110.0` e `90/90`, cite o **C46** antes do C45, acrescente **D-124** aos concluídos. Os números de orçamento **não mudam**. Não toque nos históricos. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260812-wo0090-revogacoes-alcancam-o-instalado.md
```

```
git commit -m "fix(kit): as revogacoes alcancam o instalado, antes dos pacotes de update" -m "Varredura dos arquivos vivos dos dois projetos irmaos achou neles o mesmo defeito que esta casa sofreu em 12/08: as duas skills wrap ainda entregam os blocos de git para o dono colar, e os dois CEREBRO carregam blocos soltos, bloco de commit pronto para copiar, e o vocabulario sessao." -m "E o pacote de update nao consertaria: a regra template generico nunca substitui arquivo vivo refinado preserva a skill viva com a linha revogada dentro. A lista de revogacoes - que existe justamente porque o merge sabe somar e nao sabe subtrair - tinha uma entrada, de 1.90.0. D-115, D-118 e D-119 nunca foram registradas." -m "Entram as tres, cada uma com o substituto e nao so a remocao. E a varredura do update passa a ser pelo FATO e nao pela string, comecando pelas skills: entregue o commit em TRES blocos separados nao tem uma palavra em comum com a frase do kit, e a busca literal nao acharia." -m "Completa a D-121: aquela disse que todo update do gerador tem um passo de auto-aplicacao; esta acrescenta que toda decisao que APAGA comportamento tem um passo de revogacao registrada. Fecha tambem o pedido 1 do mapsmith. Check C46, sete provas negativas. Custo de teto zero. wo0090, D-124."
```

```
git push
```
