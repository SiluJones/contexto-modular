# WO 0124 — as duas do ritual: a arvore que ninguem procura, e a ressalva que parece rigor

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco medio. Oito edicoes em quatro arquivos; **duas** delas
> em arquivo **CRLF**, e nenhuma e substituicao de bloco multi-linha (todas ancoram em UMA linha).
> **Pre-requisito:** commit `be94719`, arvore limpa (so `.claude/launch.json` nao rastreado, fora de
> escopo desde antes da wo0121), harness em **19/19 nichos · 105/105 · 0 erros**.
> **Base:** `FK-AD` e `FK-AE` do projeto `Sand-Land-Map` (`meta/IDEAS.md` §«Feedback para o Kit»,
> leva `7c2e8c5`), lidos por inteiro no chat em 2026-09-13, mais um erro medido **dentro deste
> repositorio** (a frase falsa do `meta/CEREBRO.md`, secao 2).
> **Depende de:** wo0123 (aplicada, `50d7fb7`; fecho `be94719`) — esta WO usa o mecanismo que ela
> instalou: a superficie `cerebro` na lista `CLAUSULAS` do `C43`.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: a `D-152` entra aqui.
> `meta/CEREBRO.md` e editado como **superficie** (o par de dogfooding), nao como registro.

> **Ancoras lidas em** (arquivo vivo lido NESTE turno, mount de `be94719` — manifesto de 2026-09-14
> 08:56 — desachatado em sandbox; o build reproduziu **880.810 bytes** e **19/19 · 105/105** antes de
> qualquer edicao, batendo exato com o repo):
> - `meta/CEREBRO.md` — a linha que comeca por `- **Manifesto FlatDrop (\`_MANIFEST.md\`) — detecção automática, NÃO é padrão (2026-06-11):**`; a frase `O chat lê o que chega pelo mount — achatado, sem árvore de pastas, sem histórico do git — e tem teto de contexto.` na secao `## 📏 Medição delegada`; e a linha que comeca por `- **Todo número publicado carrega COMO foi obtido**`
> - `src/index.template.html` — em `const HYGIENE_RULES`, a linha do literal que comeca por `"**Arquivo avulso novo se le no TURNO em que chega.**`; em `const UPDATE_PROTOCOL`, a linha do literal que comeca por `"Manifesto de achatamento (detecção automática)`
> - `validate.js` — a entrada `["CEREBRO: olho humano e do dono", /quem tem a TELA v/,           ["cerebro"]],` da lista `CLAUSULAS`
> - `meta/DECISIONS.md` — o fim do arquivo (hoje termina no bloco da `D-151`)

---

## 1. Por que

Sao as duas ultimas ausencias da leva `FK-R`..`FK-AF` do projeto do mapa — as do **ritual**, que e o
que acontece antes de escrever qualquer coisa. As duas tem a mesma forma e e por isso que vao juntas:
**a ressalva que parece rigor**. Uma diz «nao posso saber» sobre algo legivel; a outra diz «nao
verificado» sobre algo que esta no mount. Nenhuma das duas acusa, porque as duas tem a cara de uma
admissao honesta de incerteza — e por isso ninguem as contesta.

**A `FK-AD` tem caso dentro desta casa, e foi ele que definiu a forma desta WO.** O
`meta/CEREBRO.md`, na secao de medicao delegada, afirma que o chat le o mount *«achatado, sem arvore
de pastas, sem historico do git»*. **A frase e falsa desde que o FlatDrop passou a gerar o
`_TREE_*.md`** — e a arvore esta no mount deste projeto agora, listando inclusive os arquivos que o
`.flatdropignore` pulou. Do lado do mapa, o custo medido foi uma conversa que abriu declarando nao
poder saber o numero da proxima WO, com a resposta legivel na arvore. Do lado de ca, a frase esta
escrita no documento que o assistente le em toda sessao.

O mecanismo que o verbete descreve e de **rotulagem**, nao de regra faltando: tudo o que aponta para o
FlatDrop fala de «manifesto» e de «nomes achatados», entao a consulta responde sempre «o nome plano
difere do real?» e nunca «o que existe la?». A saida nao e mandar ler mais: e **descrever os dois
artefatos por PERGUNTA**, para que a pergunta encontre a ferramenta que a responde.

A `FK-AE` e a mesma doenca no eixo do tempo. O ritual ja manda reler o mount, e o produto ja tem
**quatro** modos de falha catalogados — mas nenhum deles e o mais comum: **cumprir pela metade**,
listando os avulsos e abrindo so os que parecem relevantes. O verbete e explicito sobre por que isso
nao se pega sozinho: *o que se perde nessa triagem e exatamente o que nao se sabia que era preciso*.
Custo medido la: uma ideia do dono parada **quatro dias** no mount, e uma WO escrita sobre uma premissa
que um relatorio nao lido ja tinha desmentido.

## 2. Contexto factual

**Medido no sandbox** (reconstruido do mount de `be94719`; baseline `index.html` 880.810 bytes ·
19/19 · 105/105 · VERDE):

| Arquivo | Antes | Depois | Fim de linha |
|---|---|---|---|
| `meta/CEREBRO.md` | 47.916 | **49.585** | LF |
| `src/index.template.html` | 389.607 | **391.370** | CRLF |
| `validate.js` | 163.771 | **164.341** | LF |
| `index.html` (gerado) | 880.810 | **882.573** | — |

- **Checagens: 105 antes, 105 depois.** Nenhum check novo; a lista `CLAUSULAS` vai de **31 para 33**
  `[medido: `grep -oE "em [0-9]+ clausulas"` na saida do `C43`, antes e depois]`.
- **`C28` inalterado.** Nenhuma das duas regras entra nas Instrucoes — vao ao CEREBRO gerado, que nao
  tem teto, pela mesma razao medida na wo0123 (o combo tem 92 caracteres de folga).
- **Dois pares negativos rodados e restaurados**, um por direcao:
  1. a **casa** perde `inclusive o que NÃO subiu` → *«a superficie INSTALADA `meta/CEREBRO.md` nao tem
     a clausula 'CEREBRO: arvore por pergunta'»*;
  2. o **produto** perde `é proibido para o que está no mount` → *«o kit GERADO perdeu a clausula
     'CEREBRO: ressalva tem custo'»*.
- **A frase falsa, medida:** `grep -c "sem árvore de pastas" meta/CEREBRO.md` = **1** antes, **0**
  depois; e `ls` do mount deste projeto mostra `_TREE_contexto-modular.md` presente na leva de
  `be94719`. Os dois fatos juntos sao o caso da `FK-AD` dentro de casa.

**Deduzido, e marcado como tal:** que descrever por pergunta resolve o problema de rotulagem. E a
hipotese do verbete, apoiada no mecanismo (a pergunta encontra a ferramenta), nao numa segunda medicao
— nenhum projeto rodou ainda com a descricao nova.

## Inventario — de onde saiu a lista de edicoes

Duas perguntas ao artefato:

1. *«Onde o kit fala do achatamento?»* — varredura por `MANIFEST|manifesto|FlatDrop|_TREE|achatad` nos
   dois lados. **Produto:** `HYGIENE_RULES` (a regra do avulso e as quatro falhas da releitura) e
   `UPDATE_PROTOCOL` (a deteccao do manifesto). **Casa:** o bullet do manifesto em «Transferencia» e a
   frase de abertura da «Medicao delegada». **O termo `_TREE` nao aparece em nenhum dos dois** — zero
   ocorrencias, que e a `FK-AD` medida.
2. *«Onde mora a marca de como um numero foi obtido?»* — o bullet das quatro marcas
   (`[medido no repo]` · `[medido em sandbox]` · `[deduzido]` · `[relatado pelo dono]`) na casa. E o
   lugar da `FK-AE`: «nao verificado» nao e uma quinta marca, e a ausencia de marca.

**Declaro as contagens:** 8 edicoes · 4 arquivos · 2 clausulas novas (31 → 33) · **nenhum check novo** ·
1 frase falsa corrigida.

---

## Edicao 1 — `meta/CEREBRO.md` · a arvore entra como segundo artefato *(CASA)*

**Ancora** (a linha inteira; ela e longa — identifique pelo comeco, na secao
`## 🔁 Transferência e fidelidade de arquivo`):
a que comeca por `- **Manifesto FlatDrop (\`_MANIFEST.md\`) — detecção automática, NÃO é padrão (2026-06-11):**`.

**Inserir IMEDIATAMENTE APOS essa linha, como uma linha nova:**

```
- **Árvore do FlatDrop (`_TREE_*.md`) — o segundo artefato, e o que ninguém procura (FK-AD):** o manifesto e a árvore respondem perguntas **diferentes**, e é por isso que descrevê-los por nome não funciona. **O manifesto responde «como se chama e onde fica»** — a tabela caminho→nome plano; a coluna esquerda é o mapa de caminhos, não só de nomes. **A árvore responde «o que existe lá, inclusive o que NÃO subiu»** — ela percorre o repositório inteiro e nomeia, um a um, os arquivos pulados pelo `.flatdropignore`. Toda pergunta da forma «isso existe no repo?», «qual é a última WO?», «essa pasta está vazia mesmo?» tem resposta na árvore, e nenhuma delas tem resposta no manifesto.
```

## Edicao 2 — `meta/CEREBRO.md` · a frase falsa sai *(CASA)*

> Esta edicao nao e melhoria, e **correcao de fato**. A casa afirmava, no documento lido em toda
> sessao, que o mount chega sem arvore de pastas — enquanto a arvore esta no mount.

**Ancora / Substituir por** (frase inteira, na abertura da secao `## 📏 Medição delegada`):

```
O chat lê o que chega pelo mount — achatado, sem árvore de pastas, sem histórico do git — e tem teto de contexto.
```
```
O chat lê o que chega pelo mount — achatado, sem histórico do git — e tem teto de contexto. (Até 2026-09-14 esta frase dizia «sem árvore de pastas», e era falsa desde que o FlatDrop passou a gerar o `_TREE_*.md`: a árvore chega, e chega descrevendo até o que não subiu.)
```

## Edicao 3 — `meta/CEREBRO.md` · a ressalva ganha custo *(CASA)*

**Ancora** (a linha que comeca por `- **Todo número publicado carrega COMO foi obtido**`, na mesma
secao `## 📏 Medição delegada`).

**Inserir IMEDIATAMENTE APOS essa linha, como uma linha nova:**

```
- **«Não verificado» é proibido para o que está no mount, e a ressalva honesta tem custo (FK-AE):** há duas coisas diferentes e elas se parecem por fora — **não verificado** (podia ler, não li) e **não legível por este canal** (não há como daqui). A primeira não é ressalva, é adiamento sem prazo, e nem quem escreve nem quem lê distingue as duas depois. Antes de escrever qualquer uma das duas, diga **qual leitura** você fez para chegar a ela: «listei o mount e o arquivo não está lá» é ressalva; «não olhei» é trabalho pendente. E cumprir a releitura do mount **pela metade** — listar os avulsos e abrir só os que parecem relevantes — é o modo mais comum de falhar de boa-fé, porque o que se perde é exatamente o que não se sabia que era preciso.
```

---

## Edicao 4 — `src/index.template.html` · o quinto modo e a ressalva com custo *(PRODUTO)*

> **CRLF**, e o texto e **literal JS**: uma string com virgula no fim, indentada com 4 espacos. Ancora
> de UMA linha — o fim de linha nao morde.

**Ancora** (uma linha, dentro de `const HYGIENE_RULES = [`): a que comeca por
`    "**Arquivo avulso novo se le no TURNO em que chega.**`.

**Inserir IMEDIATAMENTE APOS essa linha:**

```
    "**«Não verificado» é proibido para o que está no mount, e toda ressalva declara a leitura que a sustenta.** Duas coisas diferentes se parecem por fora: **não verificado** (podia ler, não li) e **não legível por este canal** (não há como daqui). A primeira tem a forma de uma admissão honesta e é adiamento sem prazo — ninguém, nem quem escreve, distingue as duas na leitura seguinte. Antes de escrever qualquer uma, diga **qual leitura** foi feita: «listei o mount e não está lá» é ressalva; «não olhei» é trabalho pendente. E o quinto modo de falhar a releitura, o mais comum e o mais silencioso, é **cumpri-la pela metade** — listar os avulsos e abrir só os que parecem relevantes: o que se perde nessa triagem é exatamente o que não se sabia que era preciso, e o custo medido foi uma ideia do dono parada quatro dias no mount e uma ordem de serviço escrita sobre uma premissa que um relatório não lido já tinha desmentido.",
```

## Edicao 5 — `src/index.template.html` · os dois artefatos por pergunta *(PRODUTO)*

**Ancora** (uma linha, dentro de `const UPDATE_PROTOCOL = {`): a que comeca por
`    "Manifesto de achatamento (detecção automática)`.

**Inserir IMEDIATAMENTE APOS essa linha:**

```
    "Os DOIS artefatos do achatamento, descritos por PERGUNTA — descrevê-los por nome é o que faz o segundo nunca ser consultado. **O manifesto (`_MANIFEST.md`) responde «como se chama e onde fica»**: a tabela caminho original → nome na pasta, cuja coluna esquerda é o mapa de caminhos e não só de nomes. **A árvore (`_TREE_*.md`), quando a ferramenta a gera, responde «o que existe lá, inclusive o que NÃO subiu»**: ela percorre o repositório inteiro e nomeia um a um os arquivos pulados pela lista de exclusão. Pergunta da forma «isso existe?», «qual é o último arquivo da série?», «essa pasta está vazia mesmo?» se responde na árvore e não no manifesto — e um assistente que só conhece o manifesto declara não poder saber o que está legível no mount.",
```

---

## Edicao 6 — `validate.js` · duas clausulas novas

**Ancora** (a ultima entrada de alvo `cerebro`, inserida pela wo0123; o alinhamento por espacos faz
parte da linha — **recorte, nao redigite**):

```
    ["CEREBRO: olho humano e do dono", /quem tem a TELA v/,           ["cerebro"]],
```

**Inserir IMEDIATAMENTE APOS:**

```
    // wo0124: as duas do ritual (FK-AD, FK-AE). Mesmo alvo `cerebro`, pelo mesmo motivo da wo0123:
    // a regra vale nos dois lados ou nao vale. A da arvore nasce de um erro MEDIDO na casa — o
    // `meta/CEREBRO.md` afirmava que o mount chega «sem arvore de pastas» enquanto o `_TREE_*.md`
    // estava no mount desde sempre, e uma conversa recusou trabalho por causa dessa frase.
    ["CEREBRO: arvore por pergunta",   /inclusive o que NÃO subiu/,   ["cerebro"]],
    ["CEREBRO: ressalva tem custo",    /é proibido para o que está no mount/, ["cerebro"]],
```

## Edicao 7 — `meta/DECISIONS.md` · `D-152` (append no fim do arquivo)

**Ancora:** o fim do arquivo (hoje termina no bloco da `D-151`). **Inserir no FIM**, precedido de linha
em branco e `---`:

```

---

## D-152 — A árvore do FlatDrop entra por PERGUNTA, e «não verificado» passa a ter custo

**Data:** 2026-09-14 · **Base:** `FK-AD` e `FK-AE` do projeto `Sand-Land-Map` (leva `7c2e8c5`), mais a frase falsa medida no próprio `meta/CEREBRO.md`.

**As duas últimas ausências da leva do mapa, e elas têm a mesma forma: a ressalva que parece rigor.** Uma diz «não posso saber» sobre algo legível; a outra diz «não verificado» sobre algo que está no mount. Nenhuma acusa, porque as duas têm a cara de uma admissão honesta de incerteza — e por isso ninguém as contesta. Erro declarado é pior que erro cometido quando o que se declara é falso.

**`FK-AD` — a árvore.** O mecanismo não é regra faltando, é **rotulagem**: tudo o que aponta para o FlatDrop fala de «manifesto» e de «nomes achatados», então a consulta responde sempre «o nome plano difere do real?» e nunca «o que existe lá?». A saída é descrever os **dois artefatos por pergunta** — o manifesto responde *«como se chama e onde fica»*, a árvore responde *«o que existe lá, inclusive o que NÃO subiu»*, nomeando um a um os arquivos que a lista de exclusão pulou. **O caso não é emprestado:** o `meta/CEREBRO.md` desta casa afirmava, no documento lido em toda sessão, que o mount chega *«sem árvore de pastas»* — falso desde que o FlatDrop passou a gerar o `_TREE_*.md`, que está no mount agora. A Edição 2 é correção de fato, não melhoria de redação.

**`FK-AE` — a ressalva com custo.** O produto já catalogava **quatro** modos de falhar a releitura do mount e nenhum era o mais comum: **cumpri-la pela metade**, listando os avulsos e abrindo só os que parecem relevantes. O verbete diz por que isso não se pega sozinho — *o que se perde nessa triagem é exatamente o que não se sabia que era preciso* —, e o custo medido do outro lado foi uma ideia do dono parada quatro dias no mount e uma WO escrita sobre uma premissa que um relatório não lido já tinha desmentido. A cláusula separa **não verificado** (podia ler, não li — adiamento sem prazo) de **não legível por este canal** (não há como daqui), e exige que qualquer uma das duas declare **qual leitura** a sustenta.

**Mecanismo de guarda: o mesmo da wo0123.** As duas entram no CEREBRO gerado e no `meta/CEREBRO.md` com o **mesmo texto**, e viram cláusulas de alvo `cerebro` na lista do `C43` — que confere gerado e instalado com um regex só. **Custo medido:** `index.html` 880.810 → 882.573 bytes; `CLAUSULAS` 31 → 33; **checagens 105 → 105**; `C28` inalterado. Dois pares negativos, um por direção.

**Fecha a leva do mapa.** Das seis ausências de conteúdo achadas em 2026-09-13, quatro saíram na wo0123 e estas duas aqui. **Fica aberta uma só, e é decisão do dono, não item de backlog:** a `DEC-056` — ordem de serviço irreversível passa por revisão de quem não conhece o repositório —, que é a única da lista que exige um segundo agente. E fica o gesto que ninguém fez ainda: **dizer ao projeto do mapa que as seis foram recebidas**, porque a última carta de volta é de 2026-08-18 e de lá para cá eles escreveram dezessete verbetes no escuro.
```

---

## Fora de escopo

- **`DEC-056`** (revisão externa de WO irreversível) — decisão do dono, ainda não tomada.
- **A carta de volta ao `Sand-Land-Map`** — é correspondência, e o canal dela não é uma WO.
- **Mexer no `.flatdropignore` para subir mais coisa** — esta WO ensina a LER a árvore, não muda o
  que sobe.
- **`meta/STATUS.md`, `meta/CHANGELOG.md` e o log do dia** — canal do `/wrap`.
- **Salto de versão** — segue em v1.122.0 (o `C54` exige os três carimbos juntos).

## Armadilhas desta WO

- **`src/index.template.html` é CRLF** (4.917 linhas). As duas edições dele ancoram em **UMA** linha e
  inserem **UMA** linha — não há bloco multi-linha aqui, que é o modo de falha da WO anterior. **Nunca
  `sed -i`** nele.
- **O texto das Edições 4 e 5 é literal JS**: começa com 4 espaços, abre e fecha aspas duplas, termina
  em vírgula. Ele **não contém aspas duplas internas** (as citações são « »), então não há escape a
  fazer — mas colar o texto das Edições 1/3 nesses lugares quebra o build.
- **As Edições 1 e 3 inserem uma linha de parágrafo único** num arquivo onde o parágrafo é a linha.
  `grep -c` conta linhas, e é o que o checklist usa — ancorado em `^`.
- **A Edição 2 CITA a frase que revoga.** O texto de substituição registra que a frase antiga era
  falsa, e para isso a reproduz entre guillemets — então `grep -c "sem árvore de pastas"` dá **1**
  depois de aplicar, não 0. O checklist usa a forma **ancorada em `^`**, que é a regra instituída pela
  wo0123. *Esta WO caiu na armadilha ao ser escrita e foi pega pela própria regra, rodando o checklist
  contra o sandbox antes de entregar — terceira ocorrência da classe, primeira detectada por mecanismo
  em vez de por leitura atenta.*

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente**: `meta/CEREBRO.md`, `src/index.template.html`, `index.html`,
      `validate.js`, `meta/DECISIONS.md` (modificados) + esta WO (novo). **Nada além.**
- [ ] `node build.js` → `index.html` de 880.810 para **882.573 bytes**, 19 módulo(s).
- [ ] `node validate.js index.html` → **19/19 · 105/105 · 0 erros**. A contagem **não sobe**.
- [ ] `C43` verde, e a mensagem passa a dizer **33 cláusulas** (eram 31).
      Comando: `node validate.js index.html | grep -oE "em [0-9]+ clausulas"`.
- [ ] `C28` inalterado.
- [ ] Tamanhos: `meta/CEREBRO.md` **49.585** · `src/index.template.html` **391.370** ·
      `validate.js` **164.341**.
- [ ] Greps — **todos ancorados em `^`**, exceto os dois últimos, que medem dentro de literais JS
      indentados e por isso ancoram no começo do literal:
      - `grep -c "^- \*\*Árvore do FlatDrop" meta/CEREBRO.md` = **1**
      - `grep -c "^- \*\*«Não verificado» é proibido" meta/CEREBRO.md` = **1**
      - `grep -c "^  const instCerebro = lerRepo" validate.js` = **1** *(inalterado pela wo0123 — só confirma que a base é a esperada)*
      - `grep -c "^    \[\"CEREBRO: " validate.js` = **4** *(eram 2; a Edição 6 acrescenta 2)*
      - `grep -c "^## D-152" meta/DECISIONS.md` = **1**
      - `grep -c "^    \"\*\*«Não verificado» é proibido" src/index.template.html` = **1**
      - `grep -c "^    \"Os DOIS artefatos do achatamento" src/index.template.html` = **1**
      - **Negativo, ancorado em `^`:**
        `grep -c "^O chat lê o que chega pelo mount — achatado, sem árvore" meta/CEREBRO.md` = **0**
        (era 1 — é a linha que a Edição 2 reescreve). **Não use `grep -c "sem árvore de pastas"`:**
        dá **1**, porque o texto de substituição da Edição 2 cita a frase revogada para registrar que
        ela era falsa. Medido em sandbox antes de escrever este item.
- [ ] **Par negativo — copiado dos comandos que rodaram em sandbox; reproduza os DOIS**, porque o `C43`
      protege duas direções:
      - **Quem roda:** quem aplica. **Backup dos dois arquivos antes** (`cp`); restaure por eles.
      - **Chega no ramo?** A altera a superfície **instalada** (`meta/CEREBRO.md`, lido por `lerRepo`
        dentro do `C43`); B altera o **gerador**, então exige `node build.js` entre a edição e o
        `validate`.
      - **Esta é qual pergunta:** «presta?» — prova que o par gerado↔instalado acusa nos dois sentidos.
      - **A — a casa fica atrás:** em `meta/CEREBRO.md`, troque `inclusive o que NÃO subiu` por
        `inclusive o que ficou de fora` → **VERMELHO**: *«a superficie INSTALADA `meta/CEREBRO.md` nao
        tem a clausula 'CEREBRO: arvore por pergunta'»*.
      - **B — o produto perde a regra:** em `src/index.template.html`, troque
        `é proibido para o que está no mount` por `deve ser evitado quando o dado está no mount`;
        `node build.js` e `node validate.js` → **VERMELHO**: *«o kit GERADO perdeu a clausula
        'CEREBRO: ressalva tem custo'»*.
      - **Restaurar os dois**, `node build.js` de volta a **882.573 bytes**, harness 19/19 · 105/105
        antes do commit. Apague os backups e diga o caminho no relatório.
- [ ] **Roteiro para o DONO — não rode, entregue** *(exige olho humano num renderizador; regra da
      wo0123)*. No fecho do chat, o dono abre o `index.html`, escolhe um nicho e gera o `CEREBRO.md`:
      **(a)** na seção de transferência, o texto dos dois artefatos por pergunta aparece logo depois do
      parágrafo do manifesto — *quando está certo*, ele começa por «Os DOIS artefatos do achatamento»;
      **(b)** nas regras de higiene, a cláusula da ressalva aparece logo depois da regra do arquivo
      avulso — *quando está certo*, começa por «**«Não verificado» é proibido**».
- [ ] **Higiene de sessão anterior:** o relatório da wo0123 declarou um backup remanescente em
      `/tmp/wo0123backup`, fora do repositório, que a política da ferramenta impediu de apagar. Ele não
      afeta git nem produto. Se ainda existir e der para remover, remova e diga; se não der, repita a
      declaração no relatório — **pendência que rola sem ser dita vira pendência esquecida.**
- [ ] Nada criado fora do repositório além dos dois backups temporários.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/CEREBRO.md src/index.template.html index.html validate.js meta/DECISIONS.md meta/workorders/260914-wo0124-arvore-e-ressalva-com-custo.md
```

```
git commit -m "feat(kit): a arvore do flatdrop entra por pergunta e a ressalva ganha custo" -m "FK-AD: manifesto e arvore respondem perguntas diferentes, e descrever por nome faz a segunda nunca ser consultada. A casa afirmava que o mount chega sem arvore de pastas, o que era falso desde que o FlatDrop passa a gerar o _TREE. FK-AE: nao verificado passa a ser proibido para o que esta no mount, e toda ressalva declara a leitura que a sustenta. As duas entram no CEREBRO gerado e no da casa com o mesmo texto, guardadas pelo C43. Sem check novo: 31 clausulas viram 33. D-152."
```

```
git push
```
