# WO 0094 — O kit aplica a própria revogação; a sonda ganha o terceiro estado; e amostra deixa de passar por cobertura

> **Tipo:** WO de CÓDIGO + registro (mista). **Grande em número de pontos, pequena em risco:** 48 substituições nos 16 módulos de nicho são repetições da MESMA string.
> **Config sugerida:** Sonnet, esforço **alto** — o volume de substituições repetidas pede atenção, e uma delas exige julgamento (ver Armadilhas: o que NÃO trocar).
> **Pré-requisito:** `KIT_VERSION 1.112.0` (wo0093 aplicada), `main` limpo, harness **18/18 · 92/92 · 0 erros**.
> **Base:** `mapsmith_10_-_Continuação.md` (2026-08-13) — o merge dos `fusao` do Mapsmith, que leu o `CEREBRO__template-update.md` inteiro e devolveu o §6 pedido.
> **Depende de:** wo0093.
> **Bloqueia:** o pacote do Sand-Land-Map e qualquer regeração do pacote do Mapsmith.

> ⚠️ **Medição feita sobre uma base SEM a wo0093.** O mount do KCM que eu tinha (`_MANIFEST` de 13/08 05:20, commit `06faf79`) é anterior à wo0093 — você disse que ela foi aplicada, mas o repo não subiu de novo. **Nenhuma âncora desta WO colide com as da wo0093** (conferido edição por edição: aquela mexeu no carimbo do manifesto, na linha «Varra pelo FATO», no item `Write` do `obrigatorio` e no C48; nenhuma delas aparece aqui). O que **não** posso afirmar é o tamanho final do `index.html` — ver a conferência.

> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 9 e 10.

---

## 1. Por que

O Mapsmith leu o `CEREBRO__template-update.md` inteiro e devolveu o §6. **Quatro achados, todos nossos.**

**(a) O kit não aplicou a própria revogação ao próprio texto gerado.** Eles apontaram dois casos (*«o item 7 ainda diz log da **sessão**»*, *«o item 4 diz ideias da **sessão**»*) e disseram a coisa exata: **é a D-125 violada no gerado.** Varri: são **15 linhas** no CEREBRO, nas Instruções, no `CLAUDE.md` e nos modelos de 16 nichos. **Nós mandamos os projetos varrerem uma cadência que continuamos publicando.** Uma lista de revogações desmentida pelo próprio pacote não é erro de texto — é a erosão do mecanismo, exatamente como a D-125 já registrara para a skill `wrap`, e reaparecendo uma camada acima.

**(b) Falta o terceiro estado do funil: a sonda que amadurece vira instrumento.** É o achado mais forte, e vem com decisão registrada por trás (a DEC-0033 deles):

> *«O modelo do kit para em dois artefatos; o nosso tem três (…) A regra “não dá veredito” está certa para a sonda e **erra ao generalizar**: o que não pode dar veredito é o script exploratório; o instrumento maduro tem de dar, senão ninguém roda. E a regra “fica fora do que sobe ao Projeto” impede exatamente a promoção.»*

E deram o **gatilho**: *a sonda foi rodada uma segunda vez para comparar antes/depois* — a partir daí ela não é descartável, é instrumento sem teste. O `probe_pacote.py` deles é versionado, tem `test_probe_pacote.py`, e serviu de material para o `core/content_check.py`, que **retorna `rc=1`** quando o pacote está errado.

**(c) «Nada truncado» não cobre amostragem.** *«O caso que nos mordeu não foi truncamento: foi `sorted()[:3]`, que não é truncamento de saída — é amostra que parece cobertura.»* Truncar esconde o **fim** da lista; amostrar esconde que a lista **nem foi lida**. São defeitos diferentes e a regra só nomeava um.

**(d) O lugar da sonda era regra e devia ser padrão.** Eles versionam em `meta/` com o tema no nome (`260805-SONDA-pacote-em-webp.md`), e a razão é boa: *«o par antes/depois só existe porque estão versionados»*. **É divergência consciente, não descuido** — e a nossa regra a proibia sem nomear o que se perde dos dois lados.

**Mais uma espécie, da mesma conversa.** O checklist da wo0085 deles tinha um `grep -c "raia de planejamento"` que deu **0** com a frase presente — **quebrada em duas linhas pelo próprio texto que a WO mandava inserir**. `grep` casa por linha. É espécie nova de passo de verificação errado: o comando está certo, a pergunta está certa, e a formatação do próprio texto parte a frase ao meio. Vale para nós tanto quanto para eles — os nossos checklists usam `grep` do mesmo jeito.

**O que NÃO virou edição, de propósito:** a exceção que eles propõem à D-119 (*«registro que depende de validação pendente pode atravessar um turno, desde que a WO que o carrega já esteja escrita»*). É boa e tem caso real por trás (a wo0076 deles), mas **muda o critério de aceite de um fecho** e merece decisão do autor, não carona. Fica no `IDEAS` com gatilho.

## 2. Contexto factual

Medido em sandbox sobre o mount disponível (v1.111.0, `06faf79` — **sem a wo0093**), build reproduzindo `index.html` byte a byte (**808.190**) e harness verde 18/18 · 91/91 antes de qualquer edição.

- **A cadência revogada aparece em 15 linhas dos artefatos gerados** — 8 no `src/index.template.html` e o resto vindo dos módulos de nicho.
- **Custo de teto: NEGATIVO.** C28 sai de `padrao 6611 · combo 7497` para **`padrao 6605 · combo 7491`** — «log do dia» é mais curto que «log da sessão». A folga do `narrative` sobe de 289 para **295**.
- `index.html` na minha base: **808.190 → 812.559** (+4.369). **Com a wo0093 aplicada o número absoluto será outro** (ela cresceu ~982 bytes); o que vale conferir é o **delta de +4.369** e o C28.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato:** os artefatos **gerados** (`buildClaudeMd`, `buildInstr`, `buildCodeKitFiles`, e o `content` de cada `contextFiles`) varridos pela expressão do **comportamento** revogado, não pela palavra solta — `ao final de (cada|uma) sessão`, `ritual de início de sessão`, `fim de sessão`, `em toda sessão`, `log da sessão`, `ideias da sessão`, `handoff de sessão`.

**Não truncado.** Os 18 nichos, os três artefatos do kit-Code e o modelo de WO.

**Contagem declarada: 8 pontos no `src/index.template.html` + 48 substituições em 16 módulos de nicho** (33 de vocabulário + 15 de cadência), **2 pontos no `validate.js`** (C31 ajustado, C49 novo). **Conteste antes de agir** — em particular a contagem por nicho, que está na tabela da Edição 5.

> **Aplicando a regra que eles nos deram — MANDA × RELATA — o que NÃO entra na varredura:** `rpg.js` usa «sessão» como **vocabulário de domínio** (a mesa de jogo: `SESSAO.md`, `## Resumo da sessão`, `Prep da próxima sessão`) — **33 ocorrências que ficam todas**. E os títulos `## Última sessão` / `## Foco da sessão` dentro dos modelos de log são **cabeçalho de documento**, não instrução de cadência: ficam. O que sai é só o texto que **manda** fazer algo «ao final de cada/uma sessão».

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.112.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.113.0";
```

---

## Edição 2 — `src/index.template.html` · a tabela de documentos amarra o log a evento

**Âncora** (uma linha):

```
  L.push(`| \`logs/AAAA-MM-DD.md\` | Histórico | Ao final de cada sessão (formato em LOG-TEMPLATE). **Duas sessões no mesmo dia = o MESMO arquivo**, com \`## Sessão N\` para cada uma — o nome é da data, não da sessão; arquivo novo por sessão quebra o nome. |`);
```

**Substituir por:**

```
  L.push(`| \`logs/AAAA-MM-DD.md\` | Histórico | Ao bater um gatilho de evento — cortar versão, registrar decisão ou bug grave, virar o dia (formato em LOG-TEMPLATE). **Duas conversas no mesmo dia = o MESMO arquivo**, com \`## Conversa N\` para cada uma — o nome é da data, não da conversa; arquivo novo por conversa quebra o nome. |`);
```

---

## Edição 3 — `src/index.template.html` · seis substituições de uma linha

Cada uma é única no arquivo. **Aplique as seis; se alguma não bater ou aparecer mais de uma vez, PARE e reporte.**

| # | procurar | substituir por |
|---|---|---|
| 3a | `(e para o log da sessão). Médio/longo prazo` | `(e para o log do dia). Médio/longo prazo` |
| 3b | `r.replace(" e vai para o CHANGELOG (e para o log da sessão)", " e vai para o log da sessão")` | `r.replace(" e vai para o CHANGELOG (e para o log do dia)", " e vai para o log do dia")` |
| 3c | `se a sessão mexeu em STATUS` | `se o trabalho mexeu em STATUS` |
| 3d | `Handoff de sessão completo` | `Handoff de conversa completa` |
| 3e | `não só ao encerrar a sessão` | `não só ao encerrar a conversa` |
| 3f | `> Arquivo-raiz lido pelo Claude Code em toda sessão.` | `> Arquivo-raiz lido pelo Claude Code em todo turno.` |

> A 3b muda **as duas** ocorrências dentro da mesma linha (o argumento de busca e o de substituição do `.replace`). Se você trocar só uma, o fallback para projeto sem CHANGELOG passa a não casar e a regra fica com o texto errado — **e nenhum check pega isso**, porque só se manifesta em nicho sem CHANGELOG.

---

## Edição 4 — `src/index.template.html` · `buildClaudeMd`, o terceiro estado do funil

**Âncora** (uma linha, na seção «Sonda e exploração»):

```
  L.push("**Funil:** `exploração` (levanta a pergunta) → `sonda` (mede) → `análise` (raciocina) → ordem de trabalho (muda). **Nenhuma das duas é ordem de trabalho:** não têm âncora, não têm commit, não mudam o repositório. O relatório é a única saída.");
```

**Substituir por:**

```
  L.push("**Funil:** `exploração` (levanta a pergunta) → `sonda` (mede) → **`instrumento`** (mede sempre) → `análise` (raciocina) → ordem de trabalho (muda). **Exploração e sonda não são ordem de trabalho:** não têm âncora, não têm commit, não mudam o repositório. O relatório é a única saída.");
  L.push("");
  L.push("**O terceiro estado: sonda que amadurece vira instrumento — e aí passa a dar veredito, de propósito.** Script que ninguém roda sozinho, sem teste, tem vida curta. Quando a mesma medição vale para sempre, ela sai do descartável e entra no produto: **versionada, com teste, e devolvendo código de erro quando o que ela mede está errado.** Aí é comando entregue, não sonda — e a proibição de veredito **deixa de valer**, porque instrumento que não reprova ninguém roda.");
  L.push("- **Gatilho da promoção: a sonda foi rodada uma SEGUNDA vez para comparar antes/depois.** A partir daí ela não é mais descartável — é instrumento sem teste, e o custo de deixá-la assim só cresce.");
  L.push("- **A promoção exige o oposto do descarte.** A sonda vive fora do que sobe ao Projeto; o instrumento é versionado, testado e citado nas decisões. Confundir os dois nas duas direções custa: script frágil virando dependência, ou medição madura sendo reescrita do zero a cada vez.");
```

---

## Edição 5 — `src/index.template.html` · amostra não é cobertura

**Âncora** (uma linha):

```
  L.push("3. **Nada truncado em silêncio.** Lista cortada mostra o TOTAL. Inventário paginado é inventário errado, e o item que ficou de fora é o que ninguém vai procurar depois.");
```

**Substituir por:**

```
  L.push("3. **Nada truncado em silêncio, e amostra nunca se apresenta como cobertura.** São dois defeitos diferentes: truncar esconde o FIM da lista (lista cortada mostra o TOTAL); amostrar esconde que a lista nem foi lida inteira. `os 3 primeiros` num relatório sem a palavra «amostra» vira, na leitura seguinte, «conferi tudo» — e ninguém volta para checar. Se olhou uma parte, diga **quantos de quantos**.");
```

---

## Edição 6 — `src/index.template.html` · onde a sonda mora vira padrão, não regra

**Âncora** (uma linha):

```
  L.push("**Onde mora.** Script e relatórios ficam **fora** do que sobe ao Projeto (workspace ao lado do repositório, ou pasta ignorada) — são grandes e reexecutáveis. Nome com **carimbo de tempo primeiro** e o tipo depois (`AAMMDD-HHMM-EXPLORACAO.md`, `AAMMDD-HHMM-CONFERENCIA.md`), para a pasta se ordenar sozinha. O que sobe ao registro é o que foi **extraído** deles: um número no `DECISIONS`, um candidato no `IDEAS`. O relatório é insumo, não memória.");
```

**Substituir por:**

```
  L.push("**Onde mora — e este é um padrão, não uma regra.** Por omissão, script e relatórios ficam **fora** do que sobe ao Projeto (workspace ao lado do repositório, ou pasta ignorada): são grandes, reexecutáveis, e o que importa deles é o que se extrai. Nome com **carimbo de tempo primeiro** (`AAMMDD-HHMM-EXPLORACAO.md`), para a pasta se ordenar sozinha. **Versionar em vez de descartar é uma escolha legítima, e tem um preço a pagar em voz alta:** ganha-se a comparação antes/depois (que só existe se os dois relatórios sobreviverem) e o tema no nome (`AAMMDD-SONDA-<tema>.md`, que se lê sem abrir); paga-se em repositório maior e no risco de o relatório velho ser lido como estado atual. Quem versiona, registra a escolha. O que sobe ao registro continua sendo o **extraído**: um número no `DECISIONS`, um candidato no `IDEAS`.");
```

---

## Edição 7 — `src/index.template.html` · `buildWoTemplate`, a quinta espécie

**Âncora** (três linhas, no bloco dos três campos):

```
    "      - **Prova de vida:** quando \"passou\" se parece com \"nada aconteceu\", o passo precisa do par negativo",
    "        que forca o sinal. Lista vazia so significa alguma coisa depois de voce ter visto a mesma checagem",
    "        devolver um item.",
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
    "      - **`grep` casa por LINHA.** Se a frase que voce mandou conferir esta quebrada em duas linhas — e o",
    "        proprio texto que a WO insere costuma quebra-la —, o `grep` devolve zero e o passo acusa ausencia",
    "        onde ha presenca. Conferir frase que atravessa linha pede `grep -Pzo`, `rg -U` ou uma ancora curta",
    "        que caiba numa linha so. Vale a regra geral: **ausencia relatada por instrumento e uma afirmacao",
    "        e precisa de prova, igual a qualquer outra** — antes de reportar «nao achei», confirme que o",
    "        instrumento saberia achar.",
```

---

## Edição 8 — `src/niches/*.js` · a varredura nos 16 módulos

**Quatro substituições de vocabulário**, cada uma literal, em todos os arquivos onde aparecerem:

| procurar | substituir por |
|---|---|
| `Modelo do log de sessão. Referência fixa` | `Modelo do log do dia. Referência fixa` |
| `para o log da sessão.` | `para o log do dia.` |
| `com as ideias da sessão capturadas` | `com as ideias da conversa capturadas` |
| `log da sessão preenchido (formato em LOG-TEMPLATE.md)` | `log do dia preenchido (formato em LOG-TEMPLATE.md)` |

**E uma substituição de cadência**, nas quatro formas em que ela aparece. Todas as quatro viram **o mesmo texto**:

Formas a procurar (dentro do `content` do `LOG-TEMPLATE.md` de cada nicho):
- `> Ao final de uma sessão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido`
- `> Ao final de uma sessão de trabalho sobre o cliente, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido`
- `> Ao final de uma sessão de escrita/revisão, o assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido`
- `> Ao final de cada sessão, o assistente entrega um arquivo novo \`logs/AAAA-MM-DD.md\` preenchido`

Texto novo (para as três primeiras):

```
> O log entra ao bater um gatilho de evento — cortar versão, registrar decisão ou erro grave, virar o dia —, e não «no fim», que numa conversa longa nunca chega. O assistente entrega um \`logs/AAAA-MM-DD.md\` preenchido
```

Para a quarta (`dev.js`), o mesmo, mantendo «um arquivo novo»:

```
> O log entra ao bater um gatilho de evento — cortar versão, registrar decisão ou erro grave, virar o dia —, e não «no fim», que numa conversa longa nunca chega. O assistente entrega um arquivo novo \`logs/AAAA-MM-DD.md\` preenchido
```

**Contagem por arquivo — confira contra a sua e me diga se divergir:**

| arquivo | vocabulário | cadência |
|---|---|---|
| `animation.js` | 2 | 1 |
| `brainstorm.js` | 2 | 1 |
| `business.js` | 2 | 1 |
| `career.js` | 2 | 0 |
| `client.js` | 2 | 1 |
| `comics.js` | 2 | 1 |
| `cuisine.js` | 1 | 1 |
| `design.js` | 2 | 1 |
| `dev.js` | 4 | 1 |
| `game.js` | 2 | 1 |
| `marketing.js` | 2 | 1 |
| `music.js` | 2 | 1 |
| `narrative.js` | 2 | 1 |
| `pixel.js` | 2 | 1 |
| `product.js` | 2 | 1 |
| `research.js` | 2 | 1 |
| **total** | **33** | **15** |

> **`custom.js` e `rpg.js` não entram.** O `custom.js` não tem nenhuma ocorrência. O `rpg.js` tem 33 — **todas de domínio** (a mesa de jogo) e **todas ficam**, exceto as duas de vocabulário da tabela acima, que são as mesmas linhas genéricas dos outros nichos. **Não toque em `SESSAO.md`, `## Resumo da sessão`, `Prep da próxima sessão`, `Log — Sessão [N]` nem em nada que descreva a mesa.**

---

## Edição 9a — `validate.js` · o C31 acompanha

> **O C31 fez o trabalho dele** e reprovou na Edição 2. A asserção acompanha o vocabulário novo **e ganha** a exigência do gatilho de evento.

**Âncora:**

```
    assert(/Duas sessões no mesmo dia = o MESMO arquivo/.test(cmd), id+": tabela de docs nao resolve duas sessoes no mesmo dia");
```

**Substituir por:**

```
    assert(/Duas conversas no mesmo dia = o MESMO arquivo/.test(cmd), id+": tabela de docs nao resolve duas conversas no mesmo dia");
    assert(/gatilho de evento — cortar versão/.test(cmd), id+": a tabela de docs ainda amarra o log ao «final de cada sessao» — cadencia revogada (D-118) e substituida por gatilho de evento (D-122)");
```

## Edição 9b — `validate.js` · check C49

**Âncora** (início do C48 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C48 o pacote nao confunde quem le (wo0093): carimbo de skills desambiguado, revogacao distingue mandar de relatar, e o efeito de Write e atrito e nao negacao", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C49 o retorno do primeiro merge (wo0094): o gerado nao usa o vocabulario que ele revoga, a sonda tem terceiro estado, e amostra nao e cobertura", () => {
  // (1) D-125 aplicada a D-118: o proprio gerado nao pode carregar a cadencia revogada
  const kit = T.buildCodeKitFiles();
  const REVOGADO = /ao final de (cada|uma) sess|ritual de in[ií]cio de sess|fim de sess|em toda sess|lido toda sess|log da sess|ideias da sess|handoff de sess/i;
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
    S.workmode.codeMode = "yes";
    const cmd = T.buildClaudeMd(n), ins = T.buildInstr(n);
    S.workmode.codeMode = prev;
    [["CEREBRO", cmd], ["INSTRUCOES", ins]].forEach(([nome, txt]) => {
      const linha = txt.split("\n").find(l => REVOGADO.test(l));
      assert(!linha, id+": o "+nome+" GERADO ainda usa a cadencia revogada pela propria lista do kit — «"+String(linha).trim().slice(0,90)+"»");
    });
  });
  assert(!REVOGADO.test(kit.claudeMd), "o CLAUDE.md gerado ainda diz «lido em toda sessao» — vocabulario que o proprio kit revogou na v1.106.0");
  // (1b) e o texto dos MODELOS que cada nicho entrega tambem nao — o LOG-TEMPLATE de 15 nichos
  //       mandava «ao final de uma sessao», que e a cadencia que a D-122 substituiu por evento.
  //       O CEREBRO nao carrega esse texto, entao (1) sozinho nao o alcanca: a prova negativa 10
  //       da wo0094 passou verde ate este bloco existir.
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    (n.contextFiles||[]).forEach(f => {
      const c = String(f.content||"");
      const linha = c.split("\n").find(l => REVOGADO.test(l));
      assert(!linha, id+"/"+(f.name||"?")+": modelo entregue pelo nicho ainda usa a cadencia revogada — «"+String(linha).trim().slice(0,90)+"»");
    });
  });
  // (2) o log na tabela de docs vem por gatilho de evento, nao por cadencia
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/gatilho de evento — cortar versão/.test(cmd), id+": a tabela de docs ainda amarra o log a uma cadencia");
  });
  // (3) terceiro estado do funil: instrumento, com o gatilho da promocao
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/\*\*`instrumento`\*\* \(mede sempre\)/.test(cmd), id+": o funil da sonda para em dois artefatos — falta o instrumento, onde o valor se acumula");
    assert(/rodada uma SEGUNDA vez para comparar antes\/depois/.test(cmd), id+": falta o gatilho da promocao de sonda para instrumento");
    assert(/a proibição de veredito \*\*deixa de valer\*\*/.test(cmd), id+": a proibicao de veredito continua generalizada — instrumento que nao reprova ninguem roda");
    assert(/amostra nunca se apresenta como cobertura/.test(cmd), id+": o relatorio ainda so proibe truncar; amostrar esconde que a lista nem foi lida");
    assert(/diga \*\*quantos de quantos\*\*/.test(cmd), id+": falta o que fazer quando se olha uma parte");
    assert(/Versionar em vez de descartar é uma escolha legítima/.test(cmd), id+": 'fica fora do repositorio' esta como regra e impede a promocao a instrumento");
    assert(/Quem versiona, registra a escolha/.test(cmd), id+": a escolha de versionar nao vem com a obrigacao de registrar o desvio");
  });
  // (4) quinta especie de passo de verificacao errado
  const wo = T.buildWoTemplate();
  assert(/`grep` casa por LINHA/.test(wo), "modelo de WO sem a especie do grep por linha — o passo acusa ausencia onde ha presenca, porque o texto inserido quebrou a frase");
  assert(/ausencia relatada por instrumento e uma afirmacao/.test(wo), "falta a regra geral: ausencia precisa de prova igual a qualquer outra");
  return "ok";
});
```

---

## Edição 10 — `meta/DECISIONS.md` · registra a D-128

**Âncora:** a última linha do arquivo (fim da D-127, acrescentada pela wo0093).

**Inserir IMEDIATAMENTE APÓS:**

```

---

## D-128 — O kit aplica a própria revogação ao próprio gerado; a sonda ganha o terceiro estado (instrumento); e amostra deixa de passar por cobertura (wo0094)

**Base.** `mapsmith_10_-_Continuação.md` (2026-08-13) — o merge dos `fusao` do Mapsmith, que leu o `CEREBRO__template-update.md` inteiro e devolveu o §6 pedido. Quatro achados, todos nossos.

**(a) O kit mandava varrer uma cadência que continuava publicando.** Eles apontaram dois casos e nomearam a doença: *«é a D-125 violada no gerado»*. A varredura confirmou **15 linhas** — no CEREBRO, nas Instruções, no `CLAUDE.md` e nos modelos de 16 nichos. **Uma lista de revogações desmentida pelo próprio pacote é a erosão do mecanismo**, e é a D-125 reaparecendo uma camada acima: lá era a skill `wrap`, aqui é todo o texto gerado. O C49 passa a varrer o gerado pela **expressão do comportamento** revogado, incluindo o `content` dos modelos que cada nicho entrega — que o CEREBRO não carrega e por isso o primeiro bloco do check não alcançava (a prova negativa 10 passou verde até esse bloco existir).

**(b) O funil parava em dois artefatos, e o terceiro é onde o valor se acumula.** Formulação deles: *«a regra “não dá veredito” está certa para a sonda e erra ao generalizar; o instrumento maduro tem de dar, senão ninguém roda»*. Sonda que amadurece vira **instrumento**: versionada, com teste, devolvendo código de erro. **Gatilho da promoção, dado por eles: a sonda foi rodada uma SEGUNDA vez para comparar antes/depois** — a partir daí não é descartável, é instrumento sem teste. Vem com lastro: o `probe_pacote.py` deles é versionado, tem teste, e serviu de material para o `core/content_check.py`, que retorna `rc=1` quando o pacote está errado.

**(c) «Nada truncado» não cobria amostragem.** *«O caso que nos mordeu não foi truncamento: foi `sorted()[:3]` — amostra que parece cobertura.»* Truncar esconde o **fim** da lista; amostrar esconde que a lista **nem foi lida**. A propriedade 3 passa a nomear os dois, com a saída: se olhou uma parte, diga **quantos de quantos**.

**(d) O lugar da sonda era regra e virou padrão com trade-off nomeado.** Eles versionam em `meta/` com o tema no nome, e a razão é boa — *«o par antes/depois só existe porque estão versionados»*. Era **divergência consciente** e a nossa regra a proibia sem dizer o que se perde dos dois lados. Agora o padrão é descartar, versionar é escolha legítima, e quem versiona registra o desvio. Isto também **destrava a promoção da alínea (b)**: a regra antiga impedia exatamente o caminho que produz o instrumento.

**Espécie nova de passo de verificação errado, da mesma conversa.** Um `grep -c` deu **0** com a frase presente — **quebrada em duas linhas pelo próprio texto que a WO inseria**. `grep` casa por linha. O modelo de WO ganha a espécie, com a regra geral que ela ilustra: *ausência relatada por instrumento é uma afirmação e precisa de prova, igual a qualquer outra* — a mesma que a D-126 registrou quando meu `grep … || echo "ausente"` inventou um arquivo faltando.

**Recusado nesta leva, com gatilho:** a exceção que eles propõem à D-119 — *«registro que depende de validação pendente pode atravessar um turno, desde que a WO que o carrega já esteja escrita»*. Tem caso real por trás (a wo0076 deles, que existiu para desfazer um «resolvido» registrado antes da validação) e é provavelmente certa, mas **muda o critério de aceite de um fecho** e merece decisão do autor, não carona numa WO de varredura.

**Aplicando a regra que eles nos deram — MANDA × RELATA (D-127) — o que ficou:** as 33 ocorrências de «sessão» do `rpg.js` são **vocabulário de domínio** (a mesa de jogo) e ficaram todas; os títulos `## Última sessão` e `## Foco da sessão` são cabeçalho de documento, não instrução de cadência, e ficaram. Saiu só o texto que **manda** fazer algo «ao final de cada/uma sessão». **A refinaria que eles propuseram ontem pagou-se hoje, na nossa própria varredura.**

**Check C49 novo**, com **dez provas negativas** — duas das quais expuseram buracos no próprio check antes de ele entrar: «handoff de sessão» não estava na expressão, e o texto dos modelos de nicho não era alcançado pelo primeiro bloco.

`KIT_VERSION 1.113.0`. **Custo de teto NEGATIVO** — «log do dia» é mais curto que «log da sessão»: C28 sai de `padrao 6611/6900 · combo 7497/7600` para **`padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`**, e a folga do `narrative` sobe de 289 para **295**. `index.html` cresce **+4.369** bytes. Harness **18/18, 92/92 → 93/93, 0 erros**.
```

---

## Edição 11 — `meta/IDEAS.md` · registra o retorno e o que ficou parqueado

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-13 — O merge dos `fusao` do Mapsmith: quatro achados, e o kit publicava o que mandava varrer (D-128, wo0094)
Eles leram o `CEREBRO__template-update.md` inteiro e devolveram o §6. **O achado mais constrangedor é o (a):** o kit mandava os projetos varrerem a cadência «ao final de cada sessão» e **continuava publicando-a em 15 linhas** — CEREBRO, Instruções, `CLAUDE.md` e os modelos de 16 nichos. É a D-125 uma camada acima.

**O achado de maior valor é o terceiro estado do funil**, com decisão registrada por trás (a DEC-0033 deles): *sonda que amadurece vira **instrumento** — versionado, testado, com veredito.* A proibição de veredito estava certa para a sonda e errada ao generalizar; e a regra «fica fora do repositório» **impedia exatamente a promoção**. Gatilho, dado por eles: *a sonda foi rodada uma segunda vez para comparar antes/depois*.

**E a refinaria que eles nos deram ontem (MANDA × RELATA, D-127) pagou-se hoje na nossa própria varredura:** as 33 ocorrências de «sessão» do nicho de RPG são vocabulário de mesa de jogo e ficaram todas.

**Parqueado com gatilho — a exceção à D-119.** Eles propõem: *«registro que depende de validação pendente pode atravessar um turno, desde que a WO que o carrega já esteja escrita»*, com caso real (a wo0076 deles desfez um «resolvido» registrado antes da validação). É provavelmente certa e **muda o critério de aceite de um fecho** — precisa de decisão do autor, não de carona. *Gatilho: a decisão do autor, ou um segundo projeto relatando o mesmo aperto.*

**Aberto de lá:** o merge do `INSTRUCOES-DO-PROJETO.md` (eles seguram até decidir o CEREBRO — corretamente, para não decidir duas vezes) e as quatro perguntas item a item que eles fizeram ao autor.
```

---

## Fora de escopo

- **A exceção à D-119** — parqueada no IDEAS, com gatilho.
- **`rpg.js` como domínio** — 33 ocorrências que ficam. Ver a Edição 8.
- **As perguntas item a item que o Mapsmith fez ao autor** — são sobre o repositório deles.
- **Sand-Land-Map** — recebe o pacote depois desta WO.

## Armadilhas desta WO

- **A wo0093 não está na minha base.** Nenhuma âncora colide (conferido), mas se alguma não bater, é aqui que a suspeita começa: **PARE e reporte** em vez de procurar um lugar parecido.
- **O que NÃO trocar** é a parte que exige julgamento. `rpg.js` inteiro (mesa de jogo), `## Última sessão`, `## Foco da sessão`, `## Objetivo da sessão`, `[Ações para a próxima sessão]`, `Log — Sessão [N]`. **Se você trocar por varredura cega, quebra o nicho de RPG e falsifica cabeçalhos de documento.** A regra é a D-127: sai o que **manda**, fica o que **relata** ou **intitula**.
- **A Edição 3b tem a mesma string duas vezes na mesma linha** (busca e substituição do `.replace`). As duas mudam.
- **Fim de linha:** `src/index.template.html` é **CRLF**; `src/niches/*.js` e `validate.js` são **LF**. As substituições nos nichos são de trecho, não de linha inteira — não reformate. Confira ao fim: template com **0 LF soltos**.
- **A Edição 7 tem aspas escapadas** (`\"passou\"`) na âncora — copie literalmente.
- **`\/` e `\*\*` nas regex do C49** são escapes obrigatórios.
- **Números de check:** C49 é o próximo livre (C48 é da wo0093). O C31 é ajustado, não recriado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra `src/index.template.html`, **16 arquivos** em `src/niches/`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. **`custom.js` e nenhum outro nicho fora dos 16 podem aparecer.**
- [ ] **Inventário declarado: 8 pontos no template + 33 vocabulário + 15 cadência nos nichos.** Refaça a contagem contra a tabela da Edição 8. Divergiu, **PARE e reporte**.
- [ ] `grep -c "sessão" src/niches/rpg.js` continua **33**. Se caiu, a varredura comeu o domínio.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 93/93 checagens, 0 erros**, com **C49 e C31 verdes**.
- [ ] **C28 imprime exatamente:** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`. **Se o padrão vier 6611, a varredura não pegou** — o número cair é a prova de que pegou.
- [ ] `index.html` cresceu **+4.369 bytes** em relação ao valor anterior à WO. *(Não confiro o absoluto: a minha base não tinha a wo0093.)*
- [ ] Template com **0 LF soltos**; `validate.js` e os nichos sem CRLF.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildClaudeMd()` (Edições 2, 4, 5, 6), `buildInstr()` e `buildCodeKitFiles()` (Edição 3), `buildWoTemplate()` (Edição 7) e o `content` dos `contextFiles` de cada nicho (Edição 8). O C49 exercita os cinco.
  - **Prova de vida:** o harness verde não prova que a varredura foi **completa** — prova que os pontos que o check conhece estão limpos. **Force o sinal onde ele quase faltou:** em `src/niches/dev.js`, troque temporariamente `O log entra ao bater um gatilho de evento` por `Ao final de uma sessão`, rode `node build.js && node validate.js index.html`, e confirme que o **C49 falha citando `dev/LOG-TEMPLATE.md`**. Desfaça. *(Este é o bloco (1b): sem ele, o check ficava verde com os 15 modelos errados.)*
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados (com a contagem por nicho) · validação (C28, C49, C31, delta de bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita a versão e a contagem de checagens. Atualize as **vivas** para `v1.113.0` e `93/93`, cite o **C49** antes do C48, acrescente **D-128**. **Os números de orçamento MUDAM nesta WO** — `padrao` vai de 6611 para **6605** e o combo de 7497 para **7491**; procure os valores antigos no arquivo inteiro. Não toque nos históricos. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html src/niches validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260813-wo0094-o-kit-aplica-a-propria-revogacao.md
```

```
git commit -m "fix(kit): o kit aplica a propria revogacao, e a sonda ganha o terceiro estado" -m "O merge dos fusao do mapsmith leu o CEREBRO do template inteiro e devolveu quatro achados, todos nossos. O primeiro e o mais constrangedor: o kit mandava os projetos varrerem a cadencia ao final de cada sessao e continuava publicando-a em 15 linhas - CEREBRO, Instrucoes, CLAUDE.md e os modelos de 16 nichos. E a D-125 uma camada acima." -m "O achado de maior valor e o terceiro estado do funil, com decisao registrada por tras: sonda que amadurece vira instrumento, versionado, testado e com veredito. A proibicao de veredito estava certa para a sonda e errada ao generalizar, e a regra de ficar fora do repositorio impedia exatamente a promocao. O gatilho veio deles: a sonda foi rodada uma segunda vez para comparar antes e depois." -m "Amostra deixa de passar por cobertura: truncar esconde o fim da lista, amostrar esconde que a lista nem foi lida. E o modelo de WO ganha a quinta especie de passo errado - grep casa por linha, e o proprio texto inserido pela WO quebra a frase ao meio." -m "A refinaria que eles nos deram ontem, MANDA contra RELATA, pagou-se hoje na nossa varredura: as 33 ocorrencias de sessao do nicho de RPG sao vocabulario de mesa de jogo e ficaram todas. Check C49 com dez provas negativas, duas das quais consertaram o proprio check. Custo de teto negativo. wo0094, D-128."
```

```
git push
```
