# WO 0121 — o 19o nicho: companion de jogo, e a prosa viva alcancada pelo C102

> **Tipo:** mista — CODIGO (modulo novo, template, manifesto, harness) + DOC (registro).
> **Config sugerida:** modelo padrao, esforco **alto** — a WO toca `validate.js` com regex montada por
> concatenacao e o `src/index.template.html`, que e **CRLF**. Nunca `sed -i` no template (wo0112: um
> `sed -i` converteu o arquivo inteiro para LF e o unico sinal foi a queda de tamanho do `index.html`).
> **Pre-requisito:** commit `a0ac69e`, arvore limpa, harness em **18/18 nichos · 103/103 · 0 erros**.
> **Base:** `meta/analises/260911-ANALISE-nicho-companion-de-jogo.md` (revisao 2) + `D-149` +
> a leitura integral do piloto `Fallout 76` (MECANICAS, CONTEXT, os quatro guias, CEREBRO, INSTRUCOES,
> IDEAS, DECISIONS, ROADMAP, STATUS, GLOSSARY, CHANGELOG, os 8 blocos do `Projeto-Fallout_76.md`)
> feita na conversa de 2026-09-12, e os seis pontos de decisao aceitos pelo dono no mesmo dia.
> **Depende de:** wo0120 (aplicada, commit `7a808a7`; fecho `a0ac69e`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um
> lugar proximo.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**
> e diga no relatorio.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-150`, a reescrita da `i-N14` e o
> item do `ROADMAP` entram aqui. O chat **nao** entrega esses documentos depois. Fora desta lista, o
> unico arquivo que o chat entrega e o modulo novo `src/niches/companion.js` (arquivo novo = chat
> entrega inteiro, `_GUIA-doc-por-wo.md`): ele entra so no `git add`, sem edicao.

> **Ancoras lidas em** (arquivo vivo lido NESTE turno, via mount achatado `/mnt/project` desachatado
> em sandbox pelo `_MANIFEST_contexto-modular.md` de 2026-09-12 15:26, commit `a0ac69e`):
> - `build-manifest.json` — bloco `{ "marker": "//__KCU_NICHE:game__//", "file": "src/niches/game.js" },`
> - `src/index.template.html` — `html[data-niche="game"]{ --amber:#34d399; ...}` · `.hero-research .footnote{...}` · `//__KCU_NICHE:game__//` · `    case "design": return \``
> - `validate.js` — `check("G1 shim/__T populado, 14 chaves, 18 nichos", () => {` · `assert(ids.length === 18, ...)` · `assert(T.NICHES && Object.keys(T.NICHES).length===18,"nichos != 18");` · `const cerebro = ler("meta/CEREBRO.md"), build = ler("BUILD.md");` · `[["meta/CEREBRO.md", cerebro], ["BUILD.md", build]].forEach(([nome, txt]) => {` · `return "ok (eol com lastro, " + PERDOADOS.size + " caminhos perdoados)";`
> - `meta/CEREBRO.md` — quatro linhas citadas nas Edicoes 4a-4d
> - `BUILD.md`, `CLAUDE.md`, `README.md`, `meta/CONTEXT.md`, `meta/MAPA.md` — linhas citadas nas Edicoes 5-9
> - `.flatdropignore` — bloco do editor, linhas `meta/analises/*` e `!meta/analises/_TEMPLATE.md`
> - `meta/DECISIONS.md` — ultima linha do arquivo · `meta/IDEAS.md` — bloco `## i-N14` inteiro · `meta/ROADMAP.md` — linha `- **▶ EM DESENHO — nicho «companion de jogo»...`

---

## 1. Por que

A `D-149` decidiu o nicho e o deixou **por escrever**. Esta WO escreve. O eixo continua o da analise —
em todos os 18 nichos o dono e a fonte da verdade, e num companion a verdade e externa e se move em
calendario alheio — mas o vocabulario so existiu depois da leitura integral do piloto, que a analise
declarou nao ter feito (secao «Riscos»: *«Esta analise nao leu tudo»*). Da leitura sairam tres conteudos
que a `D-149` deixou sem casa e que sao o melhor do piloto: a hierarquia de confianca das fontes, as
armadilhas e as ferramentas da comunidade — todos moravam no `CONTEXT.md`, que sai do conjunto.

Segunda dor, achada ao registrar a primeira: ao subir o 19o nicho, **quatro arquivos que um humano le
antes de qualquer coisa continuavam declarando 18** — `README.md`, `CLAUDE.md`, `meta/CONTEXT.md` e
`meta/MAPA.md`. E exatamente o defeito que motivou o `C102` na wo0117 (*«nenhum check abria esses dois
arquivos — por isso o defeito viveu 52 versoes»*), so que nos arquivos que ele nao varre.

## 2. Contexto factual

**Medido** (sandbox reconstruido do mount, `npm install jsdom`, `node build.js`, `node validate.js`):

- Baseline antes de qualquer edicao: `index.html` **846.719 bytes** · **18/18 · 103/103 · VERDE**.
  As analises ausentes do mount viraram stubs vazios no sandbox — falso positivo conhecido do `C103`,
  que no repo real nao ocorre.
- Depois de todas as edicoes: `index.html` **877.931 bytes** · **19/19 nichos · 105/105 · VERDE**.
  O total de checagens sobe 2: o check por-nicho `N[companion]` e o `C104` novo.
- `C28` **inalterado**: `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
  O `companion` fecha em **6.433** nas Instrucoes; o gargalo do kit continua sendo o `narrative` (6.622).
  Na primeira redacao o modulo saiu em **7.087** e estourou os dois orcamentos (padrao e combo) —
  foi enxugado nos rotulos de comportamento, nas convencoes e nos `role` dos arquivos ate caber com folga.
- `src/niches/companion.js`: **29.146 bytes, 394 linhas, 0 CR** (LF, como todo `.js` do repo).

**Medido no piloto** (leitura integral, 2026-09-12) — a origem do vocabulario:

- O piloto carimba **data de pesquisa** (`Pesquisado em 2026-09-08/09/10`) e **nunca a versao do jogo**.
  As versoes aparecem soltas na prosa («marco/2025, Onslaught»; «Season 22/patch 62»). Consequencia:
  nao ha como responder «o que mudou desde a ultima vez», e o piloto compensa escrevendo tres vezes,
  em arquivos diferentes, *«reconferir perto da Fase 3»* — um gatilho sem lugar para guardar o resultado.
- A volatilidade e **por afirmacao, nao por arquivo**: dentro do mesmo `MECANICAS.md`, a secao 1 (atributos)
  nao muda desde o lancamento e a secao 2 (perks) mudou duas vezes em 18 meses.
- As armadilhas estao **duplicadas em tres arquivos** (7 no `CONTEXT`, 4 e 5 nos dois guias), e sao duas
  especies misturadas: a do artefato e a da fonte.
- Quatro dos oito itens do backlog do piloto comecam com «Confirmar…», e um deles chega a ensinar **como**
  medir. Isto e «quem tem o disco mede» com outro disco: **quem tem o jogo aberto mede**.
- O piloto tem uma tabela «compartilhado entre personagens (CONTA) × especifico de CADA personagem», e e
  ela que **dissolve** a escolha mutuamente exclusiva. Dai o par **escopo permanente × escopo de rodada**.

**Medido no `.flatdropignore`** (e por isso a Edicao 10 existe): a regra da reinclusao nominal **ja esta
escrita**, com exemplo — *«Reinclua a aberta NOMINALMENTE dentro do bloco, na MESMA leva em que ela nasce»*
seguido de `!meta/analises/260801-ANALISE-<assunto>.md`. O eixo dela, porem, e **aberta × decidida**, e a
analise 260911 virou «Decidida» na wo0120 enquanto a proxima frente (escrever o nicho) ainda dependia dela.
Resultado medido: a conversa seguinte trabalhou sem a analise no mount.

**Deduzido, e marcado como tal:** que a granularidade «um arquivo por sistema que o proprio jogo trata como
sistema» e a certa. Sai da objecao do dono (arquivo unico obriga a reler tudo) e do tamanho medido do
`MECANICAS.md` do piloto (11.783 bytes, 10 secoes, 3 sensiveis a patch) — mas nenhum projeto rodou o nicho
ainda. A regra de rachar («quando duas partes do mesmo arquivo passam a ter versoes de verificacao muito
diferentes») entra escrita no proprio `INDICE.md` para que o primeiro uso real possa contesta-la.

## Inventario — de onde saiu a lista de edicoes

**Duas perguntas, feitas ao artefato, nao a memoria.**

1. *«Que lugares precisam saber que existe mais um nicho?»* — `grep -rn` por `__KCU_NICHE`, por
   `data-niche=`, por `case "` no `heroHTML`, pelo manifesto, e pelos asserts de contagem no harness.
   **Seis pontos de registro:** manifesto (1), template (3: tema, hero CSS, marcador, e o `case` do hero
   — 4 insercoes), `validate.js` (3 asserts de contagem).
2. *«Que lugares declaram a grandeza "quantos nichos"?»* — `grep -rnE "\b(17|18)\s*(nichos|/\s*(17|18))"`
   nos docs vivos da casa. **Seis arquivos:** `meta/CEREBRO.md` (4 pontos), `BUILD.md` (3), `CLAUDE.md` (3),
   `README.md` (2 + a linha nova da tabela), `meta/CONTEXT.md` (3 linhas, 4 ocorrencias), `meta/MAPA.md` (1).
   Destes, o `C102` so abria **dois** — dai a Edicao 3d.

**Declaro as contagens, para poderem ser contestadas antes de agir:** 6 pontos de registro do nicho,
6 arquivos com contagem velha, 13 edicoes numeradas, 1 arquivo novo entregue pelo chat.

**Um caso que NAO entrou, de proposito:** `meta/CEREBRO.md` linha 9 mantem «CEREBRO gerado dos 18 nichos»
numa nota historica da wo0063 — e relato do que aquela WO fez, nao declaracao do presente, e o precedente
da wo0114 («17 modulos» na nota historica) manda deixar. O `C102` nao pega essa forma.

---

## Edicao 1 — `build-manifest.json` · registra o modulo novo

**Ancora** (o bloco do `game`, unico no arquivo):

```
    {
      "marker": "//__KCU_NICHE:game__//",
      "file": "src/niches/game.js"
    },
```

**Inserir IMEDIATAMENTE APOS:**

```
    {
      "marker": "//__KCU_NICHE:companion__//",
      "file": "src/niches/companion.js"
    },
```

---

## Edicao 2a — `src/index.template.html` · tema de cor do nicho

> **CRLF.** Ancora de UMA linha, sem quebra dentro — o fim de linha nao morde.

**Ancora:**

```
  html[data-niche="game"]{ --amber:#34d399; --amber-soft:#6ee7b7; --green:#fbbf24; --grad-a:rgba(52,211,153,.08); --grad-b:rgba(251,191,36,.06); }
```

**Inserir IMEDIATAMENTE APOS (uma linha):**

```
  html[data-niche="companion"]{ --amber:#38bdf8; --amber-soft:#7dd3fc; --green:#facc15; --grad-a:rgba(56,189,248,.09); --grad-b:rgba(250,204,21,.05); }
```

## Edicao 2b — `src/index.template.html` · CSS do hero

**Ancora** (ultima linha do bloco `.hero-research`):

```
  .hero-research .footnote{margin-top:16px;padding-top:12px;border-top:1px dashed var(--line);font-size:11px;color:var(--ink-faint)}
```

**Inserir IMEDIATAMENTE APOS:**

```
  .hero-companion{background:#0b1016;border:1px solid var(--line);border-radius:12px;padding:0;overflow:hidden;font-family:var(--body)}
  .hero-companion .ver{display:flex;align-items:center;gap:9px;padding:9px 16px;background:#111a22;border-bottom:1px solid var(--line);font-family:var(--mono);font-size:10.5px;letter-spacing:.5px;color:var(--amber)}
  .hero-companion .ver span{margin-left:auto;color:var(--ink-faint)}
  .hero-companion .rows{padding:16px 20px;display:grid;gap:9px}
  .hero-companion .row{display:flex;align-items:baseline;gap:10px;font-size:13px;color:var(--ink-dim);line-height:1.6}
  .hero-companion .row b{font-family:var(--mono);font-size:10px;color:var(--amber-soft);border:1px solid var(--line);border-radius:5px;padding:2px 6px;flex:none}
  .hero-companion .row.old{color:var(--ink-faint);text-decoration:line-through;text-decoration-color:var(--line)}
  .hero-companion .row.old b{color:var(--green);border-color:var(--green);text-decoration:none;display:inline-block}
  .hero-companion .foot{padding:11px 20px;border-top:1px dashed var(--line);font-size:11px;color:var(--ink-faint);font-family:var(--mono)}
```

## Edicao 2c — `src/index.template.html` · marcador do modulo

**Ancora** (uma linha, unica no arquivo):

```
//__KCU_NICHE:game__//
```

**Inserir IMEDIATAMENTE APOS (linha em branco, comentario, marcador):**

```

/* ---------- COMPANION (Companion de Jogo) ---------- */
//__KCU_NICHE:companion__//
```

## Edicao 2d — `src/index.template.html` · o hero no `heroHTML()`

**Ancora** (uma linha, unica — a abertura do `case "design"` dentro do `switch(id)`):

```
    case "design": return `
```

**Inserir IMEDIATAMENTE ANTES dessa linha:**

```
    case "companion": return `
      <div class="ver">◆ ALVO · temporada 14 <span>PATCHES.md · 2 afirmacoes caidas</span></div>
      <div class="rows">
        <div class="row"><b>estavel</b> A rota das primeiras horas continua valendo — geografia nao leva carimbo.</div>
        <div class="row"><b>v.14</b> Limite de venda diario: 1.400 por dia · fonte: wiki oficial.</div>
        <div class="row old"><b>v.12</b> Bonus de dano por carta: +20% fixo.</div>
        <div class="row"><b>a testar</b> Purificador vem liberado no inicio? — abrir o menu de construcao e olhar.</div>
      </div>
      <div class="foot">revalidar = procurar carimbo anterior a v.14, nao reler tudo</div>`;
```

---

## Edicao 3a — `validate.js` · titulo do `G1`

**Ancora / Substituir por** (linha inteira):

```
check("G1 shim/__T populado, 14 chaves, 18 nichos", () => {
```
```
check("G1 shim/__T populado, 14 chaves, 19 nichos", () => {
```

## Edicao 3b — `validate.js` · contagem do `G1`

```
  assert(ids.length === 18, "esperado 18 nichos, achou " + ids.length);
```
```
  assert(ids.length === 19, "esperado 19 nichos, achou " + ids.length);
```

## Edicao 3c — `validate.js` · contagem do `C11`

```
  assert(T.NICHES && Object.keys(T.NICHES).length===18,"nichos != 18");
```
```
  assert(T.NICHES && Object.keys(T.NICHES).length===19,"nichos != 19");
```

## Edicao 3d — `validate.js` · o `C102` passa a varrer seis arquivos

> **So a LISTA DE ARQUIVOS cresce.** O regex das tres formas erradas fica **intacto**: ampliar para
> `"N-1 nichos"` foi tentado e medido em sandbox — pega a frase **correta** «18 nichos de conteudo + 1
> construtor = 19» e as notas historicas, e vira falso positivo.

**Ancora 1:**

```
  const cerebro = ler("meta/CEREBRO.md"), build = ler("BUILD.md");
```

**Inserir IMEDIATAMENTE APOS:**

```
  // wo0121: o 19o nicho revelou que a varredura cobria DOIS arquivos e a casa mentia em quatro
  // outros (README «18 nichos», CLAUDE.md «= 18», CONTEXT «18/18» 4x, MAPA «os 18 nichos»). Sao
  // arquivos que um humano le antes de qualquer coisa; ficarem atras do disco e o mesmo defeito.
  const OUTROS = ["CLAUDE.md", "README.md", "meta/CONTEXT.md", "meta/MAPA.md"];
```

**Ancora 2 / Substituir por** (linha inteira):

```
  [["meta/CEREBRO.md", cerebro], ["BUILD.md", build]].forEach(([nome, txt]) => {
```
```
  [["meta/CEREBRO.md", cerebro], ["BUILD.md", build]].concat(OUTROS.map(rel => [rel, ler(rel)])).forEach(([nome, txt]) => {
```

## Edicao 3e — `validate.js` · check novo `C104`

**Ancora** (as tres ultimas linhas do bloco do `C103`, incluindo a linha em branco que o separa do `G25`):

```
  return "ok (eol com lastro, " + PERDOADOS.size + " caminhos perdoados)";
});
```

**Inserir IMEDIATAMENTE APOS o `});` acima:**

```

check("C104 o companion nao perde o que o separa dos outros 18 (wo0121)", () => {
  // O nicho nasce de uma inversao: nos 18, o dono e a fonte da verdade; aqui a verdade e externa e
  // se move sozinha. As quatro regras abaixo sao o que traduz essa inversao em metodo — sem elas o
  // nicho vira um `game` com outro nome. Regex sobre o GERADO (Instrucoes + CEREBRO), nao sobre o
  // modulo: o que importa e o que chega ao usuario.
  const n = T.normNiche(T.NICHES.companion);
  assert(n, "nicho companion ausente");
  const instr = T.buildInstr(n), cer = T.buildClaudeMd(n);
  const doisLados = (re, msg) => assert(re.test(instr) && re.test(cer), msg);
  // (1) o carimbo e de VERSAO e so na afirmacao volatil — carimbar tudo vira teatro (risco nomeado
  //     na analise 260911); e a data sozinha nao diz se um patch matou a afirmacao.
  doisLados(/carimbo de vers[aã]o|[Cc]arimba a vers[aã]o/i,
    "o companion perdeu o carimbo de versao: sem ele a afirmacao volatil nao tem como ser revalidada por busca");
  assert(/vol[aá]til/i.test(instr) && /geografia e roteiro/i.test(instr),
    "o carimbo deixou de ser restrito a afirmacao volatil: carimbar tudo e teatro e o carimbo perde sentido");
  // (2) os quatro estados de confianca — o que separa fato de opiniao de forum
  doisLados(/fato · consenso · relato · n[aã]o confirmado/i,
    "o companion perdeu os quatro estados (fato/consenso/relato/nao confirmado): a afirmacao volta a entrar sem classificacao");
  // (3) o documento que responde «o que mudou desde a ultima vez» — o motivo de origem do nicho
  doisLados(/PATCHES\.md/,
    "o companion perdeu o PATCHES.md: volta a nao existir lugar para o que a atualizacao invalidou");
  // (4) so o STATUS reinicia numa jogada nova — e o que faz o new game+ deixar de ser problema
  doisLados(/[uú]nico que reinicia/i,
    "o companion perdeu a regra de que so o STATUS reinicia: a segunda jogada volta a contaminar rota e mecanica");
  // (5) a armadilha e entregavel, e sao DUAS especies (artefato x fonte) — no piloto elas vinham
  //     misturadas e repetidas em tres arquivos
  assert(/artefato e a da fonte|do artefato e a da fonte/i.test(instr),
    "o companion perdeu a separacao das duas especies de armadilha (do artefato x da fonte)");
  // (6) o doc-ancora e o ALVO, nao um CONTEXT herdado
  assert(n.anchorDoc === "ALVO.md", "o companion perdeu o anchorDoc ALVO.md e volta a cair na heuristica de CONTEXT");
  return "ok (companion: carimbo, 4 estados, PATCHES, STATUS reinicia, 2 armadilhas)";
});
```

---

## Edicao 4 — `meta/CEREBRO.md` · quatro contagens (4a a 4d)

Quatro substituicoes de **linha inteira**, cada uma com ancora propria:

**4a** — `Ele tem 17 nichos de conteúdo` → `Ele tem 18 nichos de conteúdo`
(a frase e correta na forma: sao os nichos de CONTEUDO, sem o `custom`).

**4b:**
```
5. **Validar**: `node build.js` (remonta o `index.html`) + `node validate.js index.html` — harness dos 18 nichos + checagens transversais (0 erros) + inspeção visual do nicho.
```
```
5. **Validar**: `node build.js` (remonta o `index.html`) + `node validate.js index.html` — harness dos 19 nichos + checagens transversais (0 erros) + inspeção visual do nicho.
```

**4c:**
```
# 2. Harness: sintaxe (new Function) + teste DOM (jsdom) dos 18 nichos + checagens transversais
```
```
# 2. Harness: sintaxe (new Function) + teste DOM (jsdom) dos 19 nichos + checagens transversais
```

**4d** — na linha que comeca por `Nunca publicar sem o harness passar em`, trocar
`**18/18 nichos + todas as checagens, 0 erros**` por `**19/19 nichos + todas as checagens, 0 erros**`.

**4e** — na linha de «Mudanças nesta revisão (wo0064)», trocar
`(vocabulário WO, caminho \`src/\`, 18/18)` por `(vocabulário WO, caminho \`src/\`, contagem do harness)`.
*Por que:* o `C102` proibe a forma `18/18` no arquivo inteiro, e este e um instantaneo congelado num
relato — a D-123 manda escrever a **regra**, nao o valor. O texto historico continua verdadeiro.

> **NAO** mexer na linha 9 («CEREBRO gerado dos 18 nichos», wo0063): e relato historico, o `C102` nao
> pega essa forma, e o precedente da wo0114 manda deixar.

## Edicao 5 — `BUILD.md` · tres contagens

- `os dados dos 18 nichos` → `os dados dos 19 nichos`
- `node validate.js index.html   # 18/18 nichos, 0 erros (regra de ouro antes de publicar)` → `# 19/19 nichos, 0 erros (...)`
- `**harness 18/18**` → `**harness 19/19**`

## Edicao 6 — `CLAUDE.md` · tres contagens

- `17 nichos de conteúdo + 1 construtor (\`custom\`) = **18**` → `18 nichos de conteúdo + 1 construtor (\`custom\`) = **19**`
- `harness (18 nichos + checagens transversais)` → `harness (19 nichos + checagens transversais)`
- `**18/18 nichos, 0 erros**` → `**19/19 nichos, 0 erros**`

## Edicao 7 — `README.md` · cabecalho, contagem do grupo e a linha do nicho

- `## 18 nichos` → `## 19 nichos`
- `### Criativo & Mídia (8) — exploração, jogos, narrativa` → `### Criativo & Mídia (9) — exploração, jogos, narrativa`
- **Ancora:** `| **Game Design** | Indies, solo devs — mecânicas, lore, produção em paralelo. |`
  **Inserir IMEDIATAMENTE APOS:**

```
| **Companion de Jogo** | Jogadores — acompanhar um jogo que muda sozinho: rotas, mecânicas verificadas, o que cada patch invalidou. |
```

## Edicao 8 — `meta/CONTEXT.md` · quatro ocorrencias

Substituir **todas** as ocorrencias de `18/18 nichos` por `19/19 nichos` (medido: **4 ocorrencias em 3
linhas** — a linha de «Versão de referência», a de «NUNCA publicar sem o harness verde» e o item 5 de
«Publicar sem validar»), e `roda os 18 nichos` por `roda os 19 nichos` (1 ocorrencia).

## Edicao 9 — `meta/MAPA.md` · titulo da secao

```
## Eixos para olhar os 18 nichos
```
```
## Eixos para olhar os 19 nichos
```

---

## Edicao 10 — `.flatdropignore` · a analise aberta volta ao mount, e a regra ganha o eixo certo

**Ancora** (dentro do bloco do editor, duas linhas consecutivas):

```
meta/analises/*
!meta/analises/_TEMPLATE.md
```

**Substituir por:**

```
meta/analises/*
!meta/analises/_TEMPLATE.md
!meta/analises/260911-ANALISE-nicho-companion-de-jogo.md
```

**E, no comentario ACIMA do bloco** (que ja documenta a reinclusao nominal), a ancora e a linha:

```
# aberta NOMINALMENTE dentro do bloco, na MESMA leva em que ela nasce — regra sobre caminho que
```

**Inserir IMEDIATAMENTE APOS a linha `#   !meta/analises/260801-ANALISE-<assunto>.md`:**

```
# Decidida MAS com frente aberta continua subindo: o eixo nao e o Status do cabecalho, e «a proxima
# frente ainda depende dela?». A 260911 virou Decidida na wo0120 e saiu do mount enquanto a frente
# que ela alimenta (escrever o nicho) nem tinha comecado — a conversa seguinte trabalhou sem ela.
# A reinclusao nominal sai quando a frente fecha, nao quando o Status muda.
```

## Edicao 11 — `meta/DECISIONS.md` · `D-150` (append no fim do arquivo)

**Ancora:** o fim do arquivo. **Inserir no FIM**, precedido de linha em branco e `---`:

```

---

## D-150 — O nicho «companion de jogo» e escrito, e o C102 alcanca a prosa que ninguem varria

**Data:** 2026-09-12 · **Base:** `meta/analises/260911-ANALISE-nicho-companion-de-jogo.md` (revisao 2), a `D-149`, a leitura integral do piloto `Fallout 76` e os seis pontos de decisao aceitos pelo dono em 2026-09-12.

**O que fecha.** A `D-149` decidiu o eixo e os nomes e deixou o nicho por escrever. Esta decisao registra o conteudo, que so foi possivel depois de ler o piloto por inteiro — leitura que a propria analise declarou nao ter feito.

**O conjunto final, com as tres casas que a `D-149` nao tinha:**
1. **`FONTES.md`** — a hierarquia de confianca do piloto morava no `CONTEXT.md`, que sai. A **regra** (fato · consenso · relato · nao confirmado; opiniao isolada nao vira fato; fonte agregada/gerada so quando bate com um degrau acima) fica no CEREBRO, porque e comportamento; a **lista** das fontes deste projeto, com o degrau de cada uma, vira documento.
2. **`ARMADILHAS.md`** — casa unica, com as **duas especies separadas**: a do artefato (o jogo induz ao erro) e a da fonte (guia sem data, rascunho de outra sessao tratado como fato). No piloto elas apareciam repetidas em tres arquivos. Rota e mecanica apontam; nao reexplicam.
3. **As ferramentas da comunidade** ficam no `GLOSSARY.md` com a propriedade que importa — **viva × estatica** —, junto do jargao.

**As outras quatro decisoes do dono, com o que as sustenta:**
4. **`ESCOLHAS.md` guarda so escolha dentro do jogo.** Das 5 entradas do `DECISIONS` do piloto, tres eram decisoes sobre a propria documentacao — e so existiram porque o nicho nao existia. Com a estrutura vindo pronta do kit, elas deixam de nascer; o desvio em relacao ao que o nicho manda vai para «Feedback para o Kit», no IDEAS, que e o que o piloto ja fazia.
5. **Granularidade de `mecanicas/`:** um arquivo por **sistema que o proprio jogo trata como sistema** (tem menu, tela ou nome proprio). Piso: nao enche uma tela e nao tem ritmo proprio → vira secao do vizinho. Teto: quando duas partes do mesmo arquivo passam a ter versoes de verificacao muito diferentes, **racha ali**. A regra entra escrita no `INDICE.md` para o primeiro uso real poder contesta-la.
6. **O carimbo mora em tres lugares, com papeis distintos:** sufixo `[v. <versao>]` **so na afirmacao volatil** (numero, percentual, disponibilidade, balanceamento — geografia e roteiro nao levam, sob pena de virar teatro); cabecalho do arquivo com a versao em que ele foi revisado por inteiro; e `PATCHES.md` com o que cada atualizacao invalidou e onde. Juntos, transformam revalidacao em **busca por carimbos velhos**, nao releitura. O piloto carimbava **data de pesquisa** e nunca versao — por isso nao conseguia responder «o que mudou desde a ultima vez», que foi a pergunta que originou tudo.

**Duas peças que sairam da leitura e nao estavam na `D-149`:** o par **escopo permanente (conta) × escopo de rodada** — e ele que dissolve uma escolha mutuamente exclusiva, e refina a `D-149`, que dizia apenas «so o STATUS reinicia» — e a **pendencia de confirmacao com o teste escrito junto**, que e «quem tem o disco mede» com outro disco: quem tem o jogo aberto.

**A `i-N14` («Aprendizado/Guia») e reescrita no mesmo ciclo,** porque como estava ela **continha** este caso: listava «platinar/100%-ar um jogo» ao lado de «aprender Aseprite, Unity, Excel». Ficam nichos **irmaos e separados**: no companion quem se move e o **artefato**; em aprendizado quem se move e o **leitor**. Carimbo de versao e `PATCHES.md` so fazem sentido no primeiro; progresso, fonte externa verificada e glossario sao as tres pecas comuns.

**`C104` novo.** Sem ele nada ficaria vermelho se as regras que separam o nicho dos outros 18 sumissem — e o nicho viraria um `game` com outro nome. Ele confere no **gerado** (Instrucoes e CEREBRO): carimbo de versao restrito a afirmacao volatil, os quatro estados, o `PATCHES.md`, «so o STATUS reinicia», as duas especies de armadilha e o `anchorDoc:"ALVO.md"`. Tres pares negativos medidos.

**`C102` estendido.** Ao subir o 19o nicho, `README.md`, `CLAUDE.md`, `meta/CONTEXT.md` e `meta/MAPA.md` continuavam declarando 18 — o mesmo defeito da wo0117, nos arquivos que o check nao abria. So a **lista de arquivos** cresce (de 2 para 6): ampliar o regex para «N-1 nichos» foi medido em sandbox e produz falso positivo na frase correta «18 nichos de conteudo + 1 construtor = 19».

**Custo medido:** `index.html` 846.719 → 877.931 bytes; harness 18/18 · 103/103 → **19/19 · 105/105**; `C28` **inalterado** (o `companion` fecha em 6.433 nas Instrucoes e o gargalo continua sendo o `narrative`, 6.622) — confirma o que a analise previu: nicho novo e enxuto nao aperta o teto de ninguem.

**Fica pendente:** o nicho tem **um caso** (o piloto) e **nenhum uso real** ainda. O primeiro projeto que rodar o companion e a primeira chance de ver o vocabulario encontrar a realidade — vale o mesmo que a `i-N61` diz dos cinco nichos nunca rodados.
```

## Edicao 12 — `meta/IDEAS.md` · a `i-N14` reescrita

**Ancora — substituir o BLOCO INTEIRO**, do titulo `## i-N14 — Nicho/ferramenta de GUIAS, WIKIS e
TUTORIAIS — A AVALIAR (do usuário)` ate a linha `- *Recomendação:* começar como **nicho** (barato,
dentro do kit) e, se crescer, considerar a ferramenta dedicada. Decidir depois das pendências de
v1.26.x.` (inclusive), **preservando a linha em branco** que vem antes de `## i-N15`.

**Substituir por:**

```
## i-N14 — Nicho «Aprendizado/Guia» — A AVALIAR, agora como IRMÃ do companion (do usuário)
**Status:** ativa. Conecta a "Educação & Cursos" (NICHOS-CANDIDATOS, nº1). **Reescrita em 2026-09-12 (D-150):** o exemplo «platinar/100%-ar um jogo», que estava aqui desde o começo, saiu — virou o nicho `companion`.
**A ideia:** estrutura pronta para **aprender ou dominar** uma ferramenta ou técnica — Aseprite, Unity, Godot, Unreal, Excel, Word, Google Sheets, linguagens de programação —, com trilha do básico ao avançado, pré-requisitos marcados, fontes e cursos verificados (YouTube e outros), e progresso. O usuário acha que um monte de `.md` solto seria "ridículo" para isso, mas que vale ter estrutura pronta.
**A linha que separa das duas, medida ao escrever o companion:** aqui quem se move é o **leitor** — o documento é andaime e se consome à medida que a habilidade entra. No companion quem se move é o **artefato**, e o documento é referência que precisa continuar verdadeira. Por isso carimbo de versão, `PATCHES.md` e revalidação por busca **não** atravessam para cá: o que envelhece num curso é a sua lacuna, não a afirmação.
**As três peças comuns, a desenhar olhando uma para a outra (D-149/D-150):** progresso por fase com critério de conclusão observável · fonte externa verificada com degrau de confiança (o `FONTES.md` do companion é o mesmo problema do `FONTES-E-CURSOS` daqui) · glossário do domínio.
**Avaliação preliminar:**
- Arquivos candidatos: OBJETIVO-DE-DOMINIO, MAPA-DE-HABILIDADES, FONTES-E-CURSOS, PROGRESSO/CHECKLIST, GLOSSARY; behaviors: cita fontes verificadas, separa fato de opinião, monta trilha do básico→avançado, marca pré-requisitos, sugere prática deliberada; prompts: "monte a trilha", "explique X com pré-requisitos", "encontre fontes/cursos confiáveis", "me teste".
- OU **ferramenta separada** se o fluxo for muito diferente (um "companheiro de estudo" que faz pesquisa estruturada e mantém progresso) — o usuário sugeriu que "pelo menos para esses, poderia gerar em uma ferramenta separada".
- *Risco:* recomendação de curso/link exige **rigor de fonte** (não inventar links/cursos; verificar). Casa com a i-N17.
- *Recomendação:* começar como **nicho**, reaproveitando de propósito o vocabulário das três peças comuns — e **não** o maquinário de patch, que é do companion. Sem gatilho de data: o gatilho é o dono querer dominar alguma ferramenta com o kit na mão.
```

## Edicao 13 — `meta/ROADMAP.md` · a frente sai de «EM DESENHO»

**Ancora — substituir a linha inteira** que comeca por `- **▶ EM DESENHO — nicho «companion de jogo»
(D-149, 2026-09-12):**` (unica no arquivo).

**Substituir por:**

```
- ✅ **ESCRITO — nicho «companion de jogo» (D-149/D-150, 2026-09-12, wo0121):** 19º nicho, `src/niches/companion.js`. Eixo: acompanhar um artefato externo que muda sozinho. Documentos: `ALVO.md`, `FONTES.md`, `ARMADILHAS.md`, `STATUS.md`, `ESCOLHAS.md`, `PATCHES.md`, `GLOSSARY.md`, `IDEAS.md`, `ROADMAP.md`, `mecanicas/` (pasta + `INDICE.md`), `rotas/`, `logs/`. Guardado pelo `C104`. Caso único: o piloto `Fallout 76` — **nenhum uso real ainda**, e a primeira rodada em projeto de verdade é a mais valiosa (mesma lógica da `i-N61`).
```

---

## Fora de escopo

- **O salto de versao.** O `C54` exige `KIT_VERSION` + topo do `CHANGELOG` + cabecalho do `STATUS`
  concordando; o harness esta verde em **v1.122.0** e o precedente (wo0113 a wo0120) e nao saltar por WO.
  Quando o dono quiser publicar, o salto vai numa WO propria com os tres carimbos juntos.
- **`meta/STATUS.md` e `meta/CHANGELOG.md`** — canal do `/wrap`, nao desta WO.
- **Reorganizar o projeto `Fallout 76`** — [relatado pelo dono] ele mesmo passa os templates novos.
- **Desenhar a `i-N14`** — esta WO so a reescreve para tirar a sobreposicao e registrar as pecas comuns.
- **O projeto de hardware** — fica fora ate o dono trazer o material, como a `D-149` fixou.
- **`meta/CEREBRO.md` linha 9** — nota historica da wo0063, deixada intacta de proposito.

## Armadilhas desta WO

- **`src/index.template.html` e CRLF** (4.875 linhas CRLF, 0 LF nu — medido). Todas as ancoras dele
  nesta WO sao de **uma linha**, justamente para o fim de linha nao morder. **Nunca `sed -i`** nele.
- **A Edicao 2d insere ANTES da ancora**, nao depois. Inserir depois quebra o template literal do
  `case "design"` e o build falha com erro de sintaxe — foi o que aconteceu na primeira tentativa em
  sandbox, e o `new Function(code)` do harness pega, mas so depois de o build passar.
- **`grep -c` conta LINHAS.** Nos `meta/` um paragrafo e uma linha so. Onde esta WO pede contagem de
  **ocorrencia**, use `grep -o ... | wc -l` — esta dito item a item abaixo.
- **`19/19` e citado por varias edicoes desta WO.** Ao conferir `grep -o "19/19" | wc -l` em um arquivo,
  conte so as ocorrencias daquele arquivo; nao some entre arquivos.
- **`C102` so aceita as tres formas originais no regex.** Se a tentacao for ampliar para pegar
  «18 nichos», nao amplie: foi medido em sandbox e da falso positivo na frase correta do `CLAUDE.md`.
- **O `C103` no sandbox** acusa caminhos de `meta/analises/` inexistentes porque o mount nao os traz.
  No repo real eles existem — nao e defeito, e a divergencia conhecida entre `[medido em sandbox]` e
  `[medido no repo]`.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente**: `build-manifest.json`, `src/index.template.html`, `index.html`,
      `validate.js`, `meta/CEREBRO.md`, `BUILD.md`, `CLAUDE.md`, `README.md`, `meta/CONTEXT.md`,
      `meta/MAPA.md`, `.flatdropignore`, `meta/DECISIONS.md`, `meta/IDEAS.md`, `meta/ROADMAP.md`
      (modificados) + `src/niches/companion.js` e esta WO (novos). **Nada alem.**
- [ ] `node build.js` → `index.html` de 846.719 para **877.931 bytes** e **19 modulo(s)**.
      *Numero previsto por build real em sandbox reconstruido do mount, cujo baseline bateu exato
      (846.719). Se divergir em poucos bytes, conferir `git ls-files --eol src/index.template.html`
      (esperado `i/lf w/crlf attr/text eol=crlf`) antes de qualquer outra hipotese.*
- [ ] `node validate.js index.html` → **19/19 nichos · 105/105 checagens · 0 erros**.
- [ ] `C28` inalterado: `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- [ ] `N[companion]` verde com `instr 6433`.
- [ ] `C104` verde com `ok (companion: carimbo, 4 estados, PATCHES, STATUS reinicia, 2 armadilhas)`.
- [ ] `C102` verde com `ok (N=19, 6 caminhos meta/ conferidos)`.
- [ ] Greps (todos por **ocorrencia**, `grep -o ... | wc -l`):
      `//__KCU_NICHE:companion__//` em `src/index.template.html` = **1** ·
      `data-niche="companion"` = **1** · `case "companion"` = **1** · `hero-companion` = **9**
      (so as 9 linhas de CSS — a classe do elemento e montada por `"hero hero-" + niche.id`, nao literal) ·
      `^## D-150` em `meta/DECISIONS.md` = **1** ·
      `^## i-N14` em `meta/IDEAS.md` = **1**, e `platinar/100%-ar um jogo` = **0** (era 1) ·
      `ESCRITO — nicho «companion de jogo»` em `meta/ROADMAP.md` = **1** ·
      `!meta/analises/260911-ANALISE-nicho-companion-de-jogo.md` em `.flatdropignore` = **1**.
- [ ] **Par negativo — obrigatorio, e ja foi medido em sandbox; reproduza UM deles no repo:**
      - **Quem roda:** quem aplica. Operacao reversivel na mesma maquina.
      - **Chega no ramo?** Editar `src/niches/companion.js`, trocar na convencao a frase
        `Afirmação volátil leva carimbo de VERSÃO` por `Afirmacao volatil leva a data da pesquisa`,
        `node build.js` → o texto entra em `buildInstr`/`buildClaudeMd` do `index.html` → o `C104`
        (Edicao 3e) le os dois e falha no primeiro `doisLados`.
      - **Esta e qual pergunta:** «presta?» — nao «esta la?». Ela verifica que a regra **guardada**
        e a regra **certa**, nao que o arquivo existe.
      - **Prova de vida esperada:** `C104` VERMELHO com
        `o companion perdeu o carimbo de versao: sem ele a afirmacao volatil nao tem como ser revalidada por busca`.
      - **Restaurar por `git checkout -- src/niches/companion.js`** (o arquivo e novo: se ainda nao
        estiver no indice, restaure do backup que voce fizer ANTES — nao confie no `checkout`).
        Depois: `node build.js` de volta a **877.931 bytes** e harness verde antes do commit real.
- [ ] **Teste manual que o harness nao cobre (UI):** abrir o `index.html` no navegador, escolher
      **Companion de Jogo** no grid, e conferir que (a) o card aparece no grupo Criativo com a cor
      `#38bdf8`, (b) a pagina Inicio mostra o hero novo — a linha `v.12` riscada —, e (c) o painel de
      saida gera as Instrucoes citando `ALVO.md` no ritual. O harness testa o texto gerado; **nao**
      testa se o CSS do hero existe nem se o grid o desenha.
- [ ] Nada criado fora do repositorio alem do relatorio.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add src/niches/companion.js build-manifest.json src/index.template.html index.html validate.js meta/CEREBRO.md BUILD.md CLAUDE.md README.md meta/CONTEXT.md meta/MAPA.md .flatdropignore meta/DECISIONS.md meta/IDEAS.md meta/ROADMAP.md meta/workorders/260912-wo0121-nicho-companion-de-jogo.md
```

```
git commit -m "feat(niches): escreve o 19o nicho companion de jogo" -m "Companion acompanha um artefato externo que muda sozinho: a verdade e do jogo, nao do dono. Documentos ALVO/FONTES/ARMADILHAS/ESCOLHAS/PATCHES mais mecanicas e rotas; carimbo de versao so na afirmacao volatil. Check C104 novo guarda as regras que separam o nicho dos outros 18. C102 passa a varrer CLAUDE.md, README.md, meta/CONTEXT.md e meta/MAPA.md, que declaravam 18 nichos. i-N14 reescrita como nicho irmao. D-150."
```

```
git push
```
