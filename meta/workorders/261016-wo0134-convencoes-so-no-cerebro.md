# WO 0134 — convencoes que repetem um principio do nicho saem das Instrucoes e ficam no CEREBRO

> **Tipo:** mista — CODIGO (produto + harness) + DOC (o registro).
> **Config sugerida:** modelo padrao, esforco medio. 16 trocas nos modulos de nicho (por script, lendo a tabela da Edicao 1), mais 10 edicoes nomeadas, todas TROCAR menos a ultima, que acrescenta no fim do `meta/DECISIONS.md`.
> **Pre-requisito:** HEAD = `4922fd7` (o `/wrap` da wo0133), `main` = `origin/main`. Harness em **19/19 · 108/108 · 0 erros**, v1.125.0.
> **Base:** analise `meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md`, frente 1-A (a WO-2 da recomendacao aceita pelo dono em 2026-10-16; `D-160`, `i-N67`).
> **Depende de:** wo0133 (aplicada, `664858e`; fecho `4922fd7`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `1c00dd7fb16abdaadecf04052250b6ff52ae8d5a  meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md` (status e a secao da WO-2, LF)
> - `9d67682cfe76ae856316ae90efeaa45addfea615  logs/2026-10-16.md` (secao «Conversa 5 (chat)», LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO (Edicao 13). Se ja existir, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `4922fd7`; recortadas do arquivo vivo, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `src/niches/*.js` — a linha `  conventions:[` dos 16 modulos da tabela, e cada texto da tabela como literal `"<texto>"`, 1 ocorrencia no seu modulo
> - `src/index.template.html` — `function renderConventionsBlock(niche){`; a linha `niche.conventions.map(c => ...)` dessa funcao; em `buildInstr`, `niche.conventions.forEach(c => lines.push(...))`; `const KIT_VERSION`
> - `validate.js` — o comeco da linha `check("C27 leva sand-land (wo0070)`
> - `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.125.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — o titulo da `i-N67`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-161`, CHANGELOG, `i-N67`. A Edicao 9 toca o `meta/STATUS.md`
> so para o numero da versao (excecao da `D-158`). **A analise e o log sao do chat:** esta WO so os versiona pelo sha1, e o `/wrap`
> **nao** os edita — no fecho da wo0133 o `/wrap` mudou o status da analise; o conteudo estava certo, mas o documento e do chat.

---

## 1. Por que

A analise de 16/10 mediu que **59 das 113 convencoes** (limiar de sobreposicao 0,4) repetem um principio do proprio nicho que ja esta na mesma pagina das Instrucoes. A WO-1 (wo0133) curou os papeis dos arquivos; esta e a WO-2, a curadoria das convencoes. Cada candidata foi decidida a mao: **46 saem das Instrucoes e ficam no CEREBRO**, **13 ficam** porque trazem uma regra que o principio nao tem — uma delas porque o harness a guarda (`C104`). Corta a **v1.126.0** (`D-158`).

## 2. Contexto factual — medido na replica

**O mecanismo:** a convencao continua no array `conventions` do modulo — que alimenta o CEREBRO, a UI e o construtor `custom`, sem mudar a ordem. Um campo novo, `conventionsSoCerebro`, lista o **texto exato** das que as Instrucoes omitem. Nada se move entre arrays: mover tem duas metades, e esta WO so tem uma. O `C108` novo prova as tres pontas — a marca tem par em `conventions` (nao fica orfa se a convencao for editada), a marcada nao esta nas Instrucoes, e toda convencao continua no CEREBRO.

**Desvio do texto da analise, declarado:** a analise previa «apagar a convencao quando o principio diz o mesmo; fundir o detalhe na frase curta do principio quando a convencao tem algo a mais». Apagar tiraria a convencao tambem do CEREBRO (o array e o mesmo), entao virou «so no CEREBRO». Fundir alongaria o `short` do principio, que a `D-090` curou; a convencao com detalhe a mais **fica** nas Instrucoes, inteira.

**As 13 que ficam, e por que:** `companion[2]` (a frase normativa «Afirmação volátil leva carimbo de VERSÃO» — o `C104` exige que ela chegue as Instrucoes, aperto da wo0122 registrado na `D-150`: editada sozinha, ela ja deixou duas regras opostas no mesmo documento); `business[1]` e `career[2]` (estimativa rotulada com faixa — em `career` ela abranda o principio, que exige fonte sempre); `career[5]` (questao juridica ou de saude: aponta o profissional, sem parecer); `cuisine[5]` (alergenos sempre sinalizados); `rpg[0]`, `animation[0]`, `comics[0]` (o improvisado que vinga vira canone registrado); `rpg[3]` (prep leve, Lazy DM — o principio pareado fala de segredos); `music[1]` (rima e ferramenta), `music[2]` (o ouvido tem prioridade sobre a regra); `animation[5]` e `comics[5]` (mostrar antes de contar). O indice e a posicao no array `conventions` do modulo, a partir de 0.

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 108/108 | **19/19 · 109/109** (entra o `C108`) | `node validate.js index.html` |
| `C28` | `ok (padrao 6034/6900 · +Code 546/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7380/7600 · 304 configuracoes)` | `ok (padrao 5852/6900 · +Code 546/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7198/7600 · 304 configuracoes)` | linha do `C28` |
| `C108` | — | `ok (46 convencoes so no CEREBRO em 16 nichos)` | linha do `C108` |
| `C54` | v1.125.0 | **v1.126.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 913.772 bytes | **920.094 bytes** | a linha `OK:` do `node build.js` |

- **Efeito:** padrao maximo **6.034 → 5.852**; pior caso realista (`narrative`, grupo + Code + ASU + Windows) **7.380 → 7.198**; economia no padrao de 0 a 464 por nicho, **4.848** nos 19 (`dev`, `custom` e `comics` nao mudam). Os incrementos de modo nao mudam: as convencoes nao dependem de modo.
- **Prova de que o `C108` acusa:** a marca com o texto trocado (a «orfa») deixa o `C108` vermelho; e a primeira versao desta WO, que marcava `companion[2]`, deixou o `C104` vermelho na replica — a convencao ficou (ver as 13 acima).

## Inventario

- **Convencoes marcadas: 46**, em **16 modulos**: `design` 2 · `client` 2 · `narrative` 2 · `marketing` 3 · `research` 3 · `product` 3 · `business` 4 · `career` 1 · `game` 3 · `companion` 3 · `pixel` 4 · `brainstorm` 4 · `music` 3 · `rpg` 2 · `cuisine` 3 · `animation` 4. Saiu da sonda de sobreposicao da analise (59 candidatas) e da decisao a mao, uma a uma (13 ficam; `companion[2]` ficou depois que o `C104` acusou a primeira versao desta WO, na replica). Nenhuma marcada em `dev` (usa `conventions:true`), `custom` e `comics` (as duas candidatas de `comics` ficam).
- **Lugares que leem `niche.conventions` no template:** `renderConventionsBlock` (UI), `buildInstr`, `buildClaudeMd`, a fusao de presets do `custom` e o modelo/preset do `custom` (`grep -n "conventions" src/index.template.html`). **Mudam 2:** `buildInstr` passa a usar `conventionsInstr(niche)`, e a UI marca a convencao «só no CEREBRO». O CEREBRO e o `custom` seguem com a lista inteira, de proposito: uma composicao a partir de nichos prontos recebe todas as convencoes, como hoje.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `4922fd7`. Se diferente, **PARE e reporte**.
2. `sha1sum` dos dois arquivos do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M logs/2026-10-16.md`, ` M meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md`, `?? .claude/launch.json`, `?? meta/workorders/261016-wo0134-convencoes-so-no-cerebro.md`. Diferente = **PARE**.
4. Idempotencia: `cat src/niches/*.js | grep -c "^  conventionsSoCerebro:\[$"` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `src/niches/*.js` · a marca das 46 convencoes (16 trocas)

**Como aplicar:** agrupe a tabela abaixo (colunas separadas por TAB: modulo, texto exato da convencao) por modulo, **na ordem em que as linhas aparecem**. Em cada `src/niches/<modulo>.js`:

1. Confira que cada texto do grupo aparece **exatamente 1 vez** no modulo como literal `"<texto>"` (entre aspas duplas). Se der 0 ou 2+, **PARE e reporte** a linha da tabela.
2. **Troque** a linha inteira `  conventions:[` (duas espacos, 1 ocorrencia no modulo) por:

```
  conventionsSoCerebro:[
    "<texto 1 do grupo>",
    "<texto 2 do grupo>",
  ],
  conventions:[
```

— uma linha `    "<texto>",` por texto do grupo, na ordem da tabela. Os modulos sao LF; grave em LF. Leia a tabela **deste arquivo**, por script; o texto pode conter crase, «», `·`, `↔`, `×` e aspas simples — procure como texto literal, nunca como expressao regular.

```
design	O sistema visual (paleta, tipografia, regras de logo) vive em MARCA.md; toda peça nova obedece a ele.
design	Escopo (entregáveis, rodadas, exclusões) vive em PROJETO.md e é a referência para julgar pedidos novos.
client	Feedback ambíguo ou de origem incerta (IA do cliente, terceiros) é validado antes de virar trabalho.
client	Afirmação técnica que vira promessa ao cliente é verificada antes de sair.
narrative	Antes de afirmar um fato da obra, consultar BIBLIA/PERSONAGENS/CONTINUIDADE — não inventar o que contradiz o cânone.
narrative	Manter a bíblia no essencial (Tier 1); não super-documentar.
marketing	Todo conteúdo serve a um dos 3-5 pilares da marca e a uma dor da audiência — nada de post solto sem encaixe.
marketing	Cada peça/campanha tem um objetivo no funil e a métrica adequada ao estágio — vanity metric não conta como sucesso.
marketing	A PAUTA.md é documento vivo: tema, pilar, formato, canal, status; o publicado vira histórico.
research	Separar sempre evidência (com fonte) de hipótese (a testar) de especulação (inferência) — em HIPOTESES e na própria escrita.
research	Síntese liga fontes num argumento; não é resumo sequencial. Cada fonte tem função (apoia/complica/contradiz).
research	Traduções vêm sinalizadas, com o original referenciado; termo técnico incerto traz o original entre parênteses.
product	Job antes de feature: nenhum pedido vira solução sem o problema/JTBD entendido primeiro.
product	Decisões de produto relevantes vão para DECISIONS.md com racional, alternativas e o que se esperava.
product	Risco e hipótese frágil são sinalizados antes de refinar a solução.
business	Toda análise/projeção declara suas premissas; premissa frágil é sinalizada, com a sensibilidade da conclusão.
business	Framework é lente, não receita: entender o problema vem antes; combinar frameworks só se cada um agregar.
business	Decisão é avaliada por risco E custo de oportunidade; métricas financeiras são interdependentes.
business	A estratégia (OBJETIVOS) é o filtro: o que não serve à meta é sinalizado como distração.
career	Nada entra em currículo/portfólio/pitch sem fato datado e prova em EVIDENCIAS.md; adjetivo é derivado, nunca afirmado.
game	Em balanceamento, registrar a INTENÇÃO de design (curva, sensação), não só o número atual — e as premissas de quem vai jogar.
game	Decisão de design é hipótese: validar barato (protótipo, vertical slice, playtest) antes de comprometer produção.
game	O assistente também CONSTRÓI: protótipo jogável, código, conteúdo e dados — design vira artefato testável, não só documento. A narrativa cena a cena (missões, diálogos ramificados, lore passivo) vive em ROTEIRO.md.
companion	Se o documento e o jogo divergem, o documento está errado — a tela é sempre a versão mais atual.
companion	Afirmação mecânica entra classificada (fato · consenso · relato · não confirmado), com a fonte pelo nome.
companion	Escolha que fecha porta vai para `ESCOLHAS.md` com o escopo (conta × rodada) e o contorno, se houver.
pixel	A paleta de ESTILO.md é regra; cor nova entra só como decisão explícita. Cor serve para esculpir forma, não enfeitar.
pixel	Anti-aliasing é escolha consciente (onde/quanto), nunca passo automático — em baixa resolução, menos costuma ser mais.
pixel	Em animação: timing antes de contagem de frames; duração variável; squash & stretch mesmo em baixa resolução.
pixel	Decisões de estilo/técnica vão com o porquê em ESTILO; o assistente orienta e critica — o artista executa.
brainstorm	Divergir antes de convergir: proteger a geração do julgamento; abrir, depois fechar. Sinalizar a fase.
brainstorm	O assistente é espelho e contraponto, não eco — não bajula; oferece a objeção honesta e a pergunta que examina a premissa.
brainstorm	Quando satura no óbvio, usar técnicas (SCAMPER, reverso, analogias) para forçar ângulos novos.
brainstorm	Nada se perde: toda ideia (mesmo a descartada, com a razão) vai para IDEAS.md; ao fim de uma fase, sintetizar e recomendar um caminho.
music	Referência é lente para mirar, não molde para copiar — traduzir o que serve para a voz do artista.
music	Arranjo é movimento (entradas/saídas, contraste verso↔refrão); tirar para destacar.
music	Decisões de produção/harmonia/arranjo vão com o porquê (a intenção/sensação) — coerência entre faixas.
rpg	Cada NPC relevante tem voz, motivação e stakes; a voz se mantém entre sessões.
rpg	A mesa é compartilhada: Session Zero, ferramentas de segurança e pacing antes da 'história perfeita'.
cuisine	Receita é pensada em RATIO antes de quantidade fixa; escalar mantém a proporção e o equilíbrio.
cuisine	A pesquisa de ratios/técnicas informa o primeiro teste (que nunca é aleatório), não o dirige.
cuisine	Técnica explicada com o porquê (ciência); técnica-base antes de truque.
animation	Movimento pensado pelos 12 princípios, com moderação e a serviço da intenção da cena.
animation	Timing e staging resolvidos cedo (storyboard, animatic) — antes da produção cara; o animatic trava o ritmo.
animation	Voz e design por personagem mantidos coerentes; silhueta legível que comunica personalidade.
animation	Em série: cada episódio fecha por si E faz avançar o arco maior.
```

## Edicao 2 — `src/index.template.html` · o helper das convencoes que entram nas Instrucoes

**Ancora** (a linha inteira):

```
function renderConventionsBlock(niche){
```

**Substituir por:**

```
/* Convencoes que entram nas Instrucoes (wo0134, D-161): a lista inteira vai para o CEREBRO, a UI e o
   construtor custom; as marcadas em `conventionsSoCerebro` (texto exato) ficam so no CEREBRO, porque
   um principio do nicho na mesma pagina ja diz a regra. */
function conventionsInstr(niche){
  const so = new Set((niche && niche.conventionsSoCerebro) || []);
  return ((niche && niche.conventions) || []).filter(c => !so.has(c));
}
function renderConventionsBlock(niche){
```

## Edicao 3 — `src/index.template.html` · a UI marca a convencao que fica so no CEREBRO

**Ancora** (em `renderConventionsBlock`, a linha inteira):

```
    niche.conventions.map(c => `<div style="color:var(--ink-dim);font-size:13px;padding:5px 0;line-height:1.55">· ${escapeHTML(c)}</div>`).join("");
```

**Substituir por:**

```
    niche.conventions.map(c => `<div style="color:var(--ink-dim);font-size:13px;padding:5px 0;line-height:1.55">· ${escapeHTML(c)}${(niche.conventionsSoCerebro||[]).includes(c) ? ' <span class="gn">· só no CEREBRO</span>' : ''}</div>`).join("");
```

## Edicao 4 — `src/index.template.html` · as Instrucoes usam o helper

**Ancora** (em `buildInstr`, secao «Convenções»; 1 ocorrencia — a do CEREBRO usa `L.push`):

```
    niche.conventions.forEach(c => lines.push(`- ${c}`));
```

**Substituir por:**

```
    conventionsInstr(niche).forEach(c => lines.push(`- ${c}`));
```

## Edicao 5 — `src/index.template.html` · corte de versao (D-158)

**Ancora:**

```
const KIT_VERSION = "1.125.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.126.0";
```

## Edicao 6 — `validate.js` · o `C108`, antes do `C27`

**Ancora** (o comeco da linha; 1 ocorrencia):

```
check("C27 leva sand-land (wo0070)
```

**Substituir por:**

```
check("C108 convencao so no CEREBRO: a marca tem par, sai das Instrucoes e fica no CEREBRO (wo0134, D-161)", () => {
  let marcadas=0, nichos=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const so=n.conventionsSoCerebro||[], conv=n.conventions||[];
    const instr=T.buildInstr(n), cmd=T.buildClaudeMd(n);
    if(so.length) nichos++;
    so.forEach(c => {
      marcadas++;
      assert(conv.indexOf(c)>=0, id+": convencao marcada so-CEREBRO sem par em conventions (a marca ficou orfa): "+c.slice(0,60));
      assert(instr.indexOf("- "+c)<0, id+": convencao marcada so-CEREBRO ainda nas Instrucoes: "+c.slice(0,60));
    });
    conv.forEach(c => assert(cmd.indexOf("- "+c)>=0, id+": o CEREBRO perdeu a convencao: "+c.slice(0,60)));
    if(conv.length) assert(conv.length > so.length, id+": todas as convencoes sairam das Instrucoes");
  });
  assert(marcadas >= 46, "esperado ao menos 46 convencoes so no CEREBRO (wo0134), achei "+marcadas);
  return "ok (" + marcadas + " convencoes so no CEREBRO em " + nichos + " nichos)";
});

check("C27 leva sand-land (wo0070)
```

(O texto novo termina repetindo a ancora: o resto da linha do `C27` fica como esta.)

## Edicao 7 — `meta/CHANGELOG.md` · versao atual

**Ancora:**

```
> Histórico de versões. Versão atual: **v1.125.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.126.0**.
```

## Edicao 8 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.125.0 — O teto das Instruções passa a olhar os quatro eixos, e o papel de cada arquivo encurta nas Instruções (wo0133, D-160)
```

**Substituir por:**

```
## v1.126.0 — A convenção que repete um princípio do nicho sai das Instruções e fica no CEREBRO (wo0134, D-161)
- **Instruções geradas:** 46 convenções, em 16 nichos, deixam de aparecer nas Instruções porque um princípio do próprio nicho, na mesma página, já diz a regra. Elas seguem inteiras no CEREBRO gerado, na mesma ordem, e na UI, marcadas «só no CEREBRO». Padrão máximo **6.034 → 5.852**; pior caso realista **7.380 → 7.198**.
- **Ficam 13**, decididas uma a uma, porque trazem regra que o princípio não tem: o carimbo de versão do `companion` (guardado pelo `C104`), segurança e parecer (`career`, `cuisine`), estimativa rotulada com faixa (`business`, `career`), o improvisado que vira cânone (`rpg`, `animation`, `comics`), prep leve, e ofício (`music`, `animation`, `comics`).
- **O mecanismo:** campo novo `conventionsSoCerebro`, com o texto exato da convenção; nada se move entre arrays. O construtor `custom` recebe a lista inteira, como antes. Check novo `C108`: a marca tem par, a marcada não está nas Instruções, e toda convenção continua no CEREBRO.
- Origem: análise `261016-ANALISE-teto-das-instrucoes-geradas.md`, frente 1-A (`i-N67`, agora resolvida). Harness **19/19 · 109/109**.

## v1.125.0 — O teto das Instruções passa a olhar os quatro eixos, e o papel de cada arquivo encurta nas Instruções (wo0133, D-160)
```

## Edicao 9 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; 1 ocorrencia):

```
Versão atual: **v1.125.0**.
```

**Substituir por:**

```
Versão atual: **v1.126.0**.
```

## Edicao 10 — `meta/IDEAS.md` · a `i-N67` resolvida

**Ancora** (o titulo inteiro):

```
## i-N67 — O teto das Instruções geradas está quase cheio nos dois eixos — DECIDIDA em 2026-10-16 (`D-160`; análise `261016-ANALISE-teto-das-instrucoes-geradas.md`): a WO-1 é a wo0133 (papéis curtos + `C28` nos quatro eixos); a WO-2, a curadoria das convenções que repetem um princípio do nicho, segue ABERTA
```

**Substituir por:**

```
## i-N67 — O teto das Instruções geradas está quase cheio nos dois eixos — RESOLVIDA em 2026-10-16 (`D-160`, `D-161`; análise `261016-ANALISE-teto-das-instrucoes-geradas.md`): WO-1 = wo0133 (papéis curtos + `C28` nos quatro eixos), WO-2 = wo0134 (46 convenções só no CEREBRO)
```

## Edicao 11 — `meta/DECISIONS.md` · `D-161` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Fica fora, de propósito:**» e termina em «o `C28` não as mede.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-161 — A convenção que repete um princípio do nicho fica só no CEREBRO

**Data:** 2026-10-16 · **WO:** 0134 · **Análise:** `meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md` (frente 1-A) · **Antecede:** `D-160` (a WO-1).

**Decisão.** Das 59 convenções que a sonda da análise apontou como repetição de um princípio do próprio nicho (limiar de sobreposição 0,4), **46 saem das Instruções** e **13 ficam**, decididas uma a uma pelo critério: sai a que o princípio, na mesma página, já diz; fica a que traz uma regra que o princípio não tem. As 46 continuam inteiras no CEREBRO gerado, na mesma ordem, e na UI, marcadas «só no CEREBRO». Corta a **v1.126.0** (`D-158`). Com esta WO a `i-N67` está resolvida.

**O mecanismo, e por que não «apagar».** A análise dizia «apagar a convenção quando o princípio diz o mesmo». O array `conventions` é um só para as Instruções e para o CEREBRO: apagar tiraria a regra dos dois. A convenção fica no array e um campo novo, `conventionsSoCerebro`, lista o texto exato das que as Instruções omitem. Nada se move entre arrays, e o construtor `custom` segue recebendo a lista inteira. **Fundir** o detalhe na frase curta do princípio também ficou de fora: alongaria o `short` que a `D-090` curou; a convenção com detalhe a mais fica nas Instruções, inteira.

**As 13 que ficam:** a frase normativa do carimbo de versão do `companion` (`companion[2]`), que o `C104` exige nas Instruções desde o aperto da wo0122 (`D-150`) — a primeira versão desta WO a marcava, e o `C104` acusou na réplica; segurança e parecer (`career[5]`, `cuisine[5]`), estimativa rotulada com faixa (`business[1]`, `career[2]` — esta abranda o princípio, que exige fonte sempre), o improvisado que vinga vira cânone registrado (`rpg[0]`, `animation[0]`, `comics[0]`), prep leve (`rpg[3]`) e ofício que o princípio não carrega (`music[1]`, `music[2]`, `animation[5]`, `comics[5]`). Índice = posição no array `conventions` do módulo, a partir de 0.

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0134 traz a medida no repo]`: 46 convenções em 16 nichos; padrão máximo **6.034 → 5.852**; combo com a linha do SO **7.380 → 7.198**/7.600; economia no padrão de 0 a 464 por nicho, 4.848 nos 19. Check novo `C108`. Harness 108 → **109**.

**Vigiar:** a marca é por texto exato. Quem editar uma convenção marcada sem editar a marca deixa o `C108` vermelho («a marca ficou órfã») — é o aviso de que as duas mudam juntas.
```

## Edicao 12 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (920094 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **109/109**. Registre crua no relatorio a linha do `C28` e a do `C108`. Harness vermelho = **PARE**.

## Edicao 13 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 12. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere (medido 0 no HEAD). Esperado `antes -> depois` no comentario:

```
cat src/niches/*.js | grep -c "^  conventionsSoCerebro:\[$"                   # 0 -> 16
grep -cF 'function conventionsInstr(niche){' src/index.template.html         # 0 -> 1
grep -cF 'conventionsInstr(niche).forEach' src/index.template.html            # 0 -> 1
grep -cF 'só no CEREBRO</span>' src/index.template.html                       # 0 -> 1
grep -cF 'const KIT_VERSION = "1.126.0";' src/index.template.html             # 0 -> 1
grep -c '^check("C108 ' validate.js                                           # 0 -> 1
grep -c '^## D-161 ' meta/DECISIONS.md                                        # 0 -> 1
grep -c '^## i-N67 .*RESOLVIDA' meta/IDEAS.md                                 # 0 -> 1
grep -m1 '^## v' meta/CHANGELOG.md                                            # v1.125.0 -> v1.126.0
```

**Prova negativa (rode e restaure):** em `src/niches/pixel.js`, dentro de `conventionsSoCerebro`, troque o texto da primeira convencao marcada por qualquer outro (por exemplo, acrescente um `X` antes da aspa final), rode `node build.js` e `node validate.js index.html`: o `C108` tem de ficar vermelho com `pixel: convencao marcada so-CEREBRO sem par em conventions (a marca ficou orfa)`. Restaure o texto, rode o build de novo e confira que o `index.html` voltou ao tamanho da Edicao 12 e o harness ao verde.

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/niches/*.js` (16 modulos; cada um ganha `n + 2` linhas — as `n` marcadas, a abertura e o fecho do array) | 78 | 0 |
| `src/index.template.html` | 10 | 3 |
| `validate.js` | 19 | 0 |
| `index.html` (gerado) | 88 | 3 |
| `meta/CHANGELOG.md` | 7 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 1 | 1 |
| `meta/DECISIONS.md` | 14 | 0 |
| `meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md` (a secao da WO-2, ja no disco) | 23 | 2 |
| `logs/2026-10-16.md` (a secao do chat, ja no disco) | 13 | 0 |
| `meta/workorders/261016-wo0134-convencoes-so-no-cerebro.md` (esta WO) | 386 | 0 |

Por modulo, `+` (e `−` = 0): animation 6 · brainstorm 6 · business 6 · career 3 · client 4 · companion 5 · cuisine 5 · design 4 · game 5 · marketing 5 · music 5 · narrative 4 · pixel 6 · product 5 · research 5 · rpg 4. O `index.html` e o `validate.js` foram medidos com `--ignore-cr-at-eol`.

## Edicao 14 — commit e push (verde = sem perguntar)

```
git add src/index.template.html src/niches index.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md meta/analises/261016-ANALISE-teto-das-instrucoes-geradas.md logs/2026-10-16.md meta/workorders/261016-wo0134-convencoes-so-no-cerebro.md
```

```
git commit -m "feat(kit): convencao que repete principio do nicho fica so no CEREBRO (wo0134, D-161)" -m "46 convencoes em 16 nichos marcadas em conventionsSoCerebro: saem das Instrucoes, seguem inteiras no CEREBRO e na UI. 13 ficam por trazer regra propria. C108 novo. v1.126.0. Resolve a i-N67."
```

```
git push
```

---

## Fora de escopo

- **Mudar o texto de qualquer convencao ou principio.** Esta WO so marca; nenhuma palavra muda.
- O construtor `custom` e a fusao de presets: seguem com a lista inteira de convencoes.
- A conferencia de tela da marca «só no CEREBRO» no painel de convencoes: e do dono (olho num renderizador) e vai no roteiro do chat, nao nesta WO.
- O vocabulario de mount nas Instrucoes do canal pasta: `i-N66`.

## Armadilhas desta WO

- **Fim de linha.** `src/index.template.html`, `validate.js` e `meta/DECISIONS.md` sao **CRLF** na arvore; o texto novo das Edicoes 2 e 6 tem varias linhas — grave-o em CRLF. Os modulos, o CHANGELOG, o STATUS e o IDEAS sao LF.
- **A linha `  conventions:[` existe em 18 modulos** (todos menos `dev`, que usa `conventions:true`), mas so os 16 da tabela mudam: `custom` e `comics` nao tem convencao marcada e nao mudam.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0134.txt` (`date +%y%m%d-%H%M`, rodado na hora).
