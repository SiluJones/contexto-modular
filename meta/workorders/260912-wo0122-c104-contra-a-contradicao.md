# WO 0122 — o C104 passa a pegar a contradicao, nao so a ausencia

> **Tipo:** mista — CODIGO (um check apertado) + DOC (registro).
> **Config sugerida:** modelo padrao, esforco medio. Uma edicao de codigo, cirurgica, com par negativo
> de **uma linha** — o que a wo0121 prometeu e nao entregou.
> **Pre-requisito:** commit `b03ea3e`, arvore limpa (so `.claude/launch.json` nao rastreado, fora de
> escopo desde antes da wo0121), harness em **19/19 nichos · 105/105 · 0 erros**.
> **Base:** os tres achados do relatorio de aplicacao da wo0121 (`260912-2015-code-kcm-apply-wo0121.txt`),
> e a conferencia de volta feita no chat em 2026-09-12 contra o mount de `b03ea3e`.
> **Depende de:** wo0121 (aplicada, `f06cd9a`; fecho `b03ea3e`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `FIX-037`, a linha da `i-N14` no
> `ROADMAP` e o choque de atores no `IDEAS` entram aqui. O chat nao entrega esses documentos depois.

> **Ancoras lidas em** (arquivo vivo lido NESTE turno, mount achatado de `b03ea3e`, manifesto de
> 2026-09-12 20:24, desachatado em sandbox — build reproduziu **877.931 bytes** e harness **19/19 ·
> 105/105**, batendo exato com o repo):
> - `validate.js` — o bloco `// (1) o carimbo e de VERSAO e so na afirmacao volatil...` ate o
>   `doisLados(/carimbo de vers[aã]o|[Cc]arimba a vers[aã]o/i, ...)`, dentro do `C104`
> - `meta/ROADMAP.md` — linha `- **Guias/tutoriais/wikis** (i-N14): nicho "Aprendizado/Guia" (...)`
> - `meta/IDEAS.md` — bloco `## i-N14`, linhas `**As três peças comuns...**` e `**Avaliação preliminar:**`
> - `.flatdropignore` — bloco do editor, linha `!meta/analises/260911-ANALISE-nicho-companion-de-jogo.md`
> - `meta/DECISIONS.md` — ultimo `## FIX-036` e o fim do arquivo (`## D-150`)
> - `NICHOS-CANDIDATOS.md` — secao `### Educação & Cursos`, itens «Usuário» e «Diferença-chave»
> - `src/niches/companion.js` — as tres mencoes ao carimbo (linhas 24, 46 e 93), medidas por grep

---

## 1. Por que

A aplicacao da wo0121 achou tres coisas. Duas sao erro de redacao da WO e nao tem conserto no repo
(a contagem do `meta/CONTEXT.md`, que a instrucao literal «substituir todas as ocorrencias» salvou;
e o checklist que previu `grep = 0` para uma frase que a propria WO manda inserir — a citacao **fica**,
porque e ela que explica por que a ideia mudou). **A terceira e um defeito real e e o que esta WO conserta.**

O `C104(1)`, como a wo0121 o escreveu, exigia apenas que o **conceito** «carimbo de versao» aparecesse
em algum lugar do gerado. O modulo o repete em tres pontos — rotulo do comportamento, convencao e prosa
do `ALVO.md`. Consequencia medida na aplicacao: editar **so a convencao** (a linha normativa que chega
as Instrucoes) para «data da pesquisa» deixava o kit entregando **duas regras opostas no mesmo
documento**, com o harness verde. E pior que a ausencia: texto ausente alguem procura; texto
contraditorio ninguem procura, porque ninguem sabe que mudou.

E o par negativo que a wo0121 prescreveu nao reproduzia — foi escrito de memoria, citando **uma** das
tres edicoes que o sandbox na verdade fizera. Um check cuja rede nunca foi verificada no repo nao e rede.

## 2. Contexto factual

**Medido** (sandbox reconstruido do mount de `b03ea3e`, `node build.js` + `node validate.js`):

- Baseline: `index.html` **877.931 bytes** · **19/19 · 105/105 · VERDE** — os tres numeros batendo com
  o que o relatorio de aplicacao da wo0121 declarou.
- `src/niches/companion.js` md5 `16b0af56f416702850a4a832ec8193f9`, identico ao entregue pelo chat.
  «carimbo de versao» aparece em **tres** linhas: 24 (rotulo do comportamento `stamp_volatile`),
  46 (a convencao) e 93 (prosa do modelo `ALVO.md`). Foi essa redundancia que segurou o `C104` verde.
- A convencao chega ao gerado, **identica nos dois lados**, como
  `- Afirmação volátil leva carimbo de VERSÃO; \`PATCHES.md\` diz o que cada atualização invalidou e onde.`
  — e por isso ela serve de ancora de regex.
- Depois desta WO: **105/105** (nenhum check novo — o `C104` fica mais exigente, nao se multiplica) e
  `index.html` **inalterado em 877.931 bytes**, porque `validate.js` nao e empacotado.
- **Dois pares negativos rodados e restaurados** (modulo volta a md5 `16b0af56…`):
  1. trocar **so a convencao** da linha 46 por «Afirmacao volatil leva a data da pesquisa» →
     `C104` VERMELHO com *«perdeu a CONVENCAO do carimbo de versao (a linha normativa, nao a mencao solta)»*.
     Com o `C104` antigo esta mesma edicao ficava **verde** — e a prova do defeito.
  2. deixar a convencao intacta e acrescentar a contradicao no `short` do comportamento
     («na dúvida vale a data da pesquisa») → `C104` VERMELHO com *«o enquadramento revogado voltou»*.

**Medido no `NICHOS-CANDIDATOS.md`**, e e o achado que nao estava previsto: a `i-N14` diz que conecta a
«Educação & Cursos» (nº1), mas o nº1, como esta escrito la, e sobre **quem ensina** — *«Usuário: professor,
instrutor, criador de curso, palestrante»*, *«Diferença-chave: tem o "aprendiz" como ator central; sucesso =
aprendizagem, não entrega»*, com arquivos `CURSO`, `APRENDIZES`, `MÓDULOS`, `AVALIAÇÕES`. A `i-N14` e sobre
**quem aprende**. Sao atores opostos do mesmo evento, e o vocabulario comum e aparente — a mesma costura
que a wo0121 acabou de desfazer entre «platinar um jogo» e «aprender Aseprite».

**Deduzido, e marcado como tal:** que o regex da convencao e ancora estavel o bastante. Ele depende da
frase literal da convencao do modulo; se uma WO futura reescrever a convencao com outras palavras, o
`C104` fica vermelho **corretamente** (a linha normativa mudou e precisa ser reconferida), mas isso
custara uma ida ao check. E o preco de ancorar em texto normativo em vez de conceito solto, e e o
preco certo.

## Inventario

Quatro lugares, achados por duas perguntas ao artefato:

1. *«Onde o `C104` afrouxa?»* — leitura do bloco inteiro do check no `validate.js` vivo, mais o
   `grep -n "carimbo de vers" src/niches/companion.js` que explicou por que ele nao disparou: **3 pontos**.
2. *«O que ficou desatualizado sobre a `i-N14` depois da wo0121?»* — `grep -rn "i-N14"` nos `meta/`:
   **dois lugares** (`meta/IDEAS.md`, ja reescrito pela wo0121; `meta/ROADMAP.md` linha 121, **nao**
   tocado). Mais o `.flatdropignore`, cuja reinclusao nominal **vence** agora — a regra que a propria
   wo0121 escreveu diz «sai quando a frente fecha», e a frente «escrever o nicho» fechou.

**Declaro:** 5 edicoes, 4 arquivos, **nenhum check novo** (105 antes, 105 depois).

---

## Edicao 1 — `validate.js` · o `C104(1)` ancora na convencao e recusa o enquadramento revogado

**Ancora** (as quatro primeiras linhas do corpo do `C104`, logo depois do `const doisLados = ...`):

```
  // (1) o carimbo e de VERSAO e so na afirmacao volatil — carimbar tudo vira teatro (risco nomeado
  //     na analise 260911); e a data sozinha nao diz se um patch matou a afirmacao.
  doisLados(/carimbo de vers[aã]o|[Cc]arimba a vers[aã]o/i,
    "o companion perdeu o carimbo de versao: sem ele a afirmacao volatil nao tem como ser revalidada por busca");
```

**Substituir por:**

```
  // (1) o carimbo e de VERSAO e so na afirmacao volatil — carimbar tudo vira teatro (risco nomeado
  //     na analise 260911); e a data sozinha nao diz se um patch matou a afirmacao.
  //     APERTADO na wo0122: a wo0121 exigia apenas que o CONCEITO aparecesse em algum lugar do gerado,
  //     e o modulo o repete em tres pontos (rotulo do comportamento, convencao, prosa do ALVO). Editar
  //     so a CONVENCAO — a linha normativa que chega as Instrucoes — para «data da pesquisa» deixava o
  //     kit entregando duas regras OPOSTAS no mesmo documento, com o harness verde. Texto contraditorio
  //     e pior que ausente: ninguem procura o que nao sabe que mudou. Medido na aplicacao da wo0121.
  doisLados(/Afirma[cç][aã]o vol[aá]til leva carimbo de VERS[AÃ]O/,
    "o companion perdeu a CONVENCAO do carimbo de versao (a linha normativa, nao a mencao solta): sem ela a afirmacao volatil nao tem como ser revalidada por busca");
  const PORDATA = /leva a data|carimbo d[ae] data|data d[ae] pesquisa/i;
  assert(!PORDATA.test(instr) && !PORDATA.test(cer),
    "o enquadramento revogado voltou: o carimbo do companion e de VERSAO do artefato, nao de data de pesquisa — data diz a idade, so a versao diz se um patch matou a afirmacao");
```

> **Nao toque** na assercao seguinte (`/vol[aá]til/` + `/geografia e roteiro/`): ela continua valendo e
> e o que impede o carimbo de virar teatro. As assercoes (2) a (6) tambem ficam como estao.

## Edicao 2 — `meta/ROADMAP.md` · a linha da `i-N14` alcanca a wo0121

**Ancora — substituir a linha inteira** (unica no arquivo, na Fase 7, logo abaixo do item ✅ do companion):

```
- **Guias/tutoriais/wikis** (i-N14): nicho "Aprendizado/Guia" (trilhas, fontes/cursos verificados, progresso, glossário) — começar como nicho dentro do kit; virar ferramenta dedicada só se o fluxo pedir. Conecta a "Educação" (NICHOS-CANDIDATOS, nº1). Exige rigor de fonte (casa com i-N17).
```

**Substituir por:**

```
- **Aprendizado/Guia** (i-N14): nicho para **quem aprende** — trilha com pré-requisitos, fontes e cursos verificados, progresso, glossário. **Irmã do companion (D-150):** lá quem se move é o artefato, aqui quem se move é o leitor — as três peças comuns são progresso com critério observável, fonte externa com degrau de confiança e glossário; o maquinário de patch **não** atravessa. **Parada de propósito, sem gatilho de data:** espera um caso real (o dono querendo dominar uma ferramenta com o kit na mão) e o companion rodar uma vez de verdade — pela `i-N61`, desenhar o 20º antes de medir o 19º é adicionar desenho onde falta medição. Exige rigor de fonte (casa com i-N17). **Antes de escrever, resolver o choque de atores com o candidato nº1** (ver `IDEAS`).
```

## Edicao 3 — `meta/IDEAS.md` · o choque de atores entra na `i-N14`

**Ancora** (a linha que abre a avaliacao, dentro do bloco `## i-N14`):

```
**Avaliação preliminar:**
```

**Inserir IMEDIATAMENTE ANTES dessa linha:**

```
**⚠️ Choque de atores com o candidato nº1, achado em 2026-09-12 (FIX-037):** esta ideia diz que «conecta a Educação & Cursos (NICHOS-CANDIDATOS, nº1)» — mas o nº1, como está escrito lá, é sobre **quem ensina**: *«Usuário: professor, instrutor, criador de curso, palestrante»*, *«tem o "aprendiz" como ator central; sucesso = aprendizagem, não entrega»*, com arquivos `CURSO`, `APRENDIZES`, `MÓDULOS`, `AVALIAÇÕES`. A `i-N14` é sobre **quem aprende**. São atores opostos do mesmo evento, e o vocabulário comum é aparente — é a mesma costura que a wo0121 acabou de desfazer entre «platinar um jogo» e «aprender Aseprite». **Resolver isto é pré-requisito de escrever qualquer uma das duas:** ou são dois nichos (o do instrutor monta e avalia; o do aprendiz consome e progride), ou é um com dois papéis declarados — e a resposta muda os arquivos, não só o rótulo. Enquanto não for resolvido, a linha «conecta ao nº1» acima deve ser lida como *pendência*, não como parentesco estabelecido.
```

## Edicao 4 — `.flatdropignore` · a reinclusao nominal sai, porque a frente fechou

> A regra que a **propria wo0121** escreveu duas linhas acima: *«A reinclusao nominal sai quando a
> frente fecha, nao quando o Status muda.»* A frente era **escrever o nicho** e ela fechou em `f06cd9a`;
> o `/wrap` marcou a analise como **Implementada**. A `i-N14` e outra frente, esta parada, e quando
> chegar pedira analise propria — nao esta. Deixar a reinclusao seria o defeito simetrico: analise
> encerrada ocupando mount, que e exatamente o que o comentario acima do bloco proibe («cabecalho de
> Status velho no mount le como pendencia aberta — o P8 ao contrario»).

**Ancora — remover o BLOCO (esta unica linha), dentro do bloco do editor:**

```
!meta/analises/260911-ANALISE-nicho-companion-de-jogo.md
```

**Diff esperado:** −1 linha, 0 adicionadas. As linhas `meta/analises/*` e `!meta/analises/_TEMPLATE.md`
ficam intactas, e o comentario explicativo acima do bloco **nao** e tocado.

## Edicao 5 — `meta/DECISIONS.md` · `FIX-037` (append no fim do arquivo)

**Ancora:** o fim do arquivo (hoje termina no bloco da `D-150`). **Inserir no FIM**, precedido de linha
em branco e `---`:

```

---

## FIX-037 — O C104 pegava a ausência, não a contradição; e a i-N14 esbarra num choque de atores

**Data:** 2026-09-12 · **Base:** os três achados do relatório de aplicação da wo0121 e a conferência de volta feita no chat contra o mount de `b03ea3e`.

**O defeito.** O `C104`, como a wo0121 o escreveu, exigia apenas que o **conceito** «carimbo de versão» aparecesse em algum lugar do gerado. Medido: o módulo o repete em **três** pontos (rótulo do comportamento, convenção, prosa do `ALVO.md`). Editar **só a convenção** — a linha normativa que chega às Instruções — para «data da pesquisa» deixava o kit entregando **duas regras opostas no mesmo documento**, com o harness verde. Texto ausente alguém procura; texto contraditório ninguém procura, porque ninguém sabe que mudou.

**A correção.** O `C104(1)` passa a ancorar na **frase da convenção** (`Afirmação volátil leva carimbo de VERSÃO`), exigida nos dois lados do gerado, e a **recusar o enquadramento revogado** (`leva a data` · `carimbo de data` · `data de pesquisa`) em qualquer lugar das Instruções ou do CEREBRO. Nenhum check novo: o `C104` fica mais exigente, não se multiplica (105 antes, 105 depois).

**A lição de método, que vale além deste check.** Um check que exige o **conceito** tolera redundância e por isso tolera contradição; um que exige a **linha normativa** não tolera nenhuma das duas. Quando um módulo repete uma regra em mais de um lugar por razão editorial, a rede precisa apontar para o lugar que **manda**, não para qualquer um que **menciona**.

**E a causa de segunda ordem, que é minha:** a wo0121 prescreveu um par negativo de **uma** edição quando o teste que de fato rodou em sandbox fizera **três** — escrito de memória, não copiado do comando executado. Par negativo que não reproduz no repo não é rede, e a WO passou a afirmar uma proteção que nunca foi verificada onde importa. **Regra:** o par negativo de uma WO é copiado do comando que rodou, nunca redigido depois.

**Dois achados da mesma aplicação que NÃO viram conserto**, e ficam registrados para não voltarem como surpresa: (a) a wo0121 dizia «4 ocorrências em 3 linhas» no `meta/CONTEXT.md` quando são 4 em 4 — o que salvou foi a instrução literal ser «substituir todas as ocorrências», e a lição é que **instrução que não depende da contagem sobrevive à contagem errada**; (b) o checklist previu `grep "platinar/100%-ar um jogo" = 0` enquanto o texto que a própria WO manda inserir contém a frase entre guillemets — a citação **fica**, porque é ela que explica por que a ideia mudou; o número é que estava errado, e é exatamente a armadilha que o `_TEMPLATE__workorders.md` descreve.

**Achado não previsto, sobre a `i-N14`.** Ela declara conectar a «Educação & Cursos» (NICHOS-CANDIDATOS, nº1), mas o nº1 é sobre **quem ensina** (*«professor, instrutor, criador de curso, palestrante»*; arquivos `CURSO`, `APRENDIZES`, `MÓDULOS`, `AVALIAÇÕES`) e a `i-N14` é sobre **quem aprende**. Atores opostos do mesmo evento — a mesma costura que a wo0121 desfez entre «platinar um jogo» e «aprender Aseprite». Registrado dentro da própria `i-N14` como pré-requisito de escrita, e não resolvido aqui: resolver muda os arquivos, não o rótulo, e pede análise.

**A reinclusão nominal da análise 260911 sai do `.flatdropignore`** — a frente que ela alimentava (escrever o nicho) fechou em `f06cd9a`, e a regra escrita na wo0121 manda a exceção sair com a frente, não com o Status.
```

---

## Fora de escopo

- **Escrever a `i-N14`** — parada de propósito; esta WO só atualiza o que ficou desatualizado sobre ela.
- **Resolver o choque de atores com o candidato nº1** — pede análise, e análise pede material lido antes.
- **`NICHOS-CANDIDATOS.md`** — o choque fica registrado no `IDEAS`, que foi onde o dono pediu; tocar os
  dois lados agora duplicaria o registro antes de haver decisão.
- **`meta/STATUS.md`, `meta/CHANGELOG.md` e o log do dia** — canal do `/wrap`.
- **Salto de versao** — segue em v1.122.0, pelo mesmo motivo da wo0121 (o `C54` exige os três carimbos
  juntos e o precedente é não saltar por WO).

## Armadilhas desta WO

- **A Edicao 1 e uma substituicao de bloco de 4 linhas dentro de um check.** O `validate.js` e LF; a
  ancora e multi-linha e isso e seguro **aqui** — mas confira que o `const PORDATA` ficou **dentro** do
  corpo do `C104`, e nao depois do `});`. Se ficar fora, o `new Function(code)` nem chega a reclamar:
  o `assert` simplesmente nunca roda e o check fica verde por vacuidade.
- **`leva a data` e um regex curto.** Ele so e aplicado ao gerado do **companion** (`instr` e `cer` desta
  funcao), nao ao kit inteiro — nao ha risco de pegar outro nicho. Se um dia pegar, a mensagem diz por que.
- **Esta WO nao muda `src/`**, entao `index.html` deve ficar **identico** (877.931 bytes). Se o build
  mudar o tamanho, algo foi tocado fora do previsto — **PARE e reporte**.
- **A Edicao 4 remove uma linha.** Conferir que removeu **aquela** linha e nao a `!meta/analises/_TEMPLATE.md`,
  que fica logo acima e comeca igual.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente**: `validate.js`, `meta/ROADMAP.md`, `meta/IDEAS.md`,
      `.flatdropignore`, `meta/DECISIONS.md` (modificados) + esta WO (novo). **Nada alem** — em
      particular, `index.html` **nao** deve aparecer.
- [ ] `node build.js` → `index.html` **877.931 bytes**, **inalterado** (rode so para confirmar que nada
      em `src/` foi tocado; se o numero mudar, PARE).
- [ ] `node validate.js index.html` → **19/19 nichos · 105/105 checagens · 0 erros**. A contagem
      **nao sobe**: o `C104` ficou mais exigente, nao se multiplicou.
- [ ] `C104` verde com `ok (companion: carimbo, 4 estados, PATCHES, STATUS reinicia, 2 armadilhas)`.
- [ ] Greps (por **ocorrencia**, `grep -o ... | wc -l`):
      `const PORDATA` em `validate.js` = **1** ·
      `Afirma[cç][aã]o vol[aá]til leva carimbo de VERS` em `validate.js` = **1** ·
      `^## FIX-037` em `meta/DECISIONS.md` = **1** ·
      `Choque de atores com o candidato nº1` em `meta/IDEAS.md` = **1** ·
      `- **Aprendizado/Guia** (i-N14)` em `meta/ROADMAP.md` = **1** ·
      `260911-ANALISE-nicho-companion-de-jogo` em `.flatdropignore` = **0** (era 1).
      *Atencao: a frase «Choque de atores com o candidato nº1» e citada pela Edicao 3 **e** pela
      Edicao 5 (o texto da `FIX-037`), mas em arquivos DIFERENTES — por isso 1 em cada, nao 2 num so.*
- [ ] **Par negativo — copiado do comando que rodou em sandbox; reproduza os DOIS:**
      - **Quem roda:** quem aplica. Operacao reversivel na mesma maquina. **Faca backup de
        `src/niches/companion.js` antes** (`cp`), e restaure por ele — nao pelo `git checkout`.
      - **Chega no ramo?** As duas edicoes alteram o array `conventions`/`behaviors` de
        `src/niches/companion.js` → `node build.js` costura o modulo no `index.html` → `buildInstr` e
        `buildClaudeMd` montam o texto → o `C104` (Edicao 1) le os dois e falha.
      - **Esta e qual pergunta:** «presta?». Verifica que a regra **guardada** e a regra **certa**, nao
        que o check existe.
      - **Negativo A (a ausencia da linha normativa):** trocar, na linha da convencao,
        `Afirmação volátil leva carimbo de VERSÃO` por `Afirmacao volatil leva a data da pesquisa`.
        `node build.js` e `node validate.js` → **VERMELHO** com
        `o companion perdeu a CONVENCAO do carimbo de versao (a linha normativa, nao a mencao solta)...`.
        *Com o `C104` antigo esta mesma edicao ficava VERDE — e a prova de que a Edicao 1 conserta algo.*
      - **Negativo B (a contradicao sem remocao):** com a convencao **intacta**, trocar no `short` do
        comportamento `stamp_volatile` o trecho `geografia e roteiro não levam.` por
        `na dúvida vale a data da pesquisa.` → **VERMELHO** com `o enquadramento revogado voltou: ...`.
      - **Restaurar** o modulo do backup e conferir `md5sum src/niches/companion.js` =
        `16b0af56f416702850a4a832ec8193f9` **antes do commit**, com harness de volta a 19/19 · 105/105.
- [ ] Nada criado fora do repositorio alem do backup temporario do modulo — apague-o e diga o caminho.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add validate.js meta/ROADMAP.md meta/IDEAS.md .flatdropignore meta/DECISIONS.md meta/workorders/260912-wo0122-c104-contra-a-contradicao.md
```

```
git commit -m "fix(harness): C104 ancora na convencao e recusa o carimbo por data" -m "O check exigia so que o conceito aparecesse, e o modulo o repete em tres pontos: editar so a convencao deixava duas regras opostas no mesmo documento com o harness verde. Agora a ancora e a linha normativa e o enquadramento revogado e recusado. Sem check novo. Registra FIX-037, atualiza a linha da i-N14 no ROADMAP, anota o choque de atores com o candidato 1 no IDEAS e tira a reinclusao da analise 260911, cuja frente fechou."
```

```
git push
```
