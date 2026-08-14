# WO 0097 — Fecha a FK-M: o relatório declara qual das duas perguntas o instrumento não responde

> **Tipo:** WO de CÓDIGO + registro (mista). Pequena: três edições no template, uma no `validate.js`.
> **Config sugerida:** Sonnet, esforço **médio**.
> **Pré-requisito:** `KIT_VERSION 1.115.0`, commit `ab58984`, `main` limpo, harness **18/18 · 93/93 · 0 erros**. Confirmado no mount (`_MANIFEST` de 13/08 21:55).
> **Base:** auditoria do Sand-Land-Map antes de gerar o pacote dele (2026-08-13). Item **FK-M** do `IDEAS.md` deles, aberto em 2026-08-10 e **ainda sem desfecho**.
> **Depende de:** wo0096.
> **Bloqueia:** o pacote do Sand-Land-Map. É a última correção antes dele — mandar o pacote sem isto seria entregar a eles um kit que ignora o feedback mais recente que eles nos deram.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 5 e 6.

---

## 1. Por que

**A auditoria do Sand-Land-Map achou um item de feedback aberto que a nossa leva da sonda não fechou: a FK-M.** Ela é de 2026-08-10 — **anterior** à D-122, que absorveu «existência não é aptidão» — e o kit pegou o **princípio** e deixou de fora **a metade operacional**.

O que a FK-M pede, na letra:

> *«Ao desenhar uma conferência, escrever explicitamente as duas perguntas — “está lá?” e “presta?” — e **declarar qual delas o instrumento não responde**, do mesmo jeito que a sonda já declara o que não olhou.»*

**O kit tem a primeira metade e não tem a segunda.** A D-122 instalou *«Existência não é aptidão (…) ao escrever uma sonda, pergunte o que ela NÃO abre»* — que é uma **pergunta ao autor**, no momento de escrever. A FK-M pede que a resposta vire **propriedade declarada do relatório**, ao lado de «o que não foi olhado». A diferença é a de sempre: pergunta ao autor depende de o autor lembrar; propriedade do relatório o leitor cobra.

**E é o leitor que paga.** Sem a declaração, *«45/45 existem, extensões `{'.webp': 45}`, sprite_source existe: sim»* é um verde de **«está lá?»** que a leitura seguinte consome como verde de **«presta?»** — e os 45 ícones estavam destruídos por dentro. **Os dois projetos tinham o mesmo ponto cego:** o `probe_pacote.py` de um e o `scan-games` do outro.

**A FK-M também traz o argumento que faz a regra sobreviver à pressa**, e que o kit não carrega: *ler 30 bytes de cabeçalho respondeu «presta?» por 45 arquivos de uma vez, sem dependência nenhuma.* Regra sem custo declarado perde para o «depois eu vejo».

## 2. Contexto factual

Medido em sandbox no estado `ab58984` (repo reconstruído do mount de hoje 21:55, build reproduzindo `index.html` byte a byte — **813.436** — e harness verde 18/18 · 93/93 antes de qualquer edição, com os `.claude/` do próprio repo presentes).

- **FK-M consta do `IDEAS.md` do Sand-Land-Map sem linha de desfecho** — todas as outras (FK-A a FK-E) têm; FK-F a FK-L foram fechadas pelas D-113, D-120, D-121, D-122 e D-123 sem que o registro de lá fosse atualizado, o que é assunto deles.
- **Custo de teto: ZERO.** A seção da sonda e o modelo de WO vivem fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**.
- `index.html` vai de **813.436 → 814.394** bytes.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato:** a seção `## 🧩 Feedback para o Kit` do `IDEAS.md` do Sand-Land-Map, lida inteira (13 itens, FK-A a FK-M mais os quatro desvios estruturais antigos), cruzada com o texto **gerado** pelo kit (`buildClaudeMd` e `buildWoTemplate`) para saber qual pedido já estava atendido.

**Não truncado.** Os 13 itens.

**Contagem declarada: 1 item de feedback aberto** (FK-M), atendido em **2 superfícies** — a propriedade 2 do relatório de sonda, e o passo de verificação do modelo de WO. **Conteste antes de agir.**

> **Esta e qual pergunta: «está lá?» ou «presta?»** — aplicando a própria regra a este inventário. Ele responde **«está lá?»**: confirmei que a FK-M não tem linha de desfecho e que o texto do kit não traz a cláusula. **Não responde «presta?»**: não medi se a redação nova resolve o problema em campo — isso só a próxima sonda escrita sob a regra dirá.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.115.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.116.0";
```

---

## Edição 2 — `src/index.template.html` · a propriedade 2 do relatório de sonda

**Âncora** (uma linha, na seção «Sonda e exploração»):

```
  L.push("2. **O que NÃO foi olhado é declarado.** Sem isso, ausência vira zero na leitura seguinte — e zero é um fato, ausência não. Seção que não pôde ser medida sai marcada como não conferida, **nunca omitida**.");
```

**Substituir por:**

```
  L.push("2. **O que NÃO foi olhado é declarado — e qual das duas perguntas o instrumento não responde, também.** Sem a primeira metade, ausência vira zero na leitura seguinte, e zero é um fato enquanto ausência não é: seção que não pôde ser medida sai marcada como não conferida, **nunca omitida**. A segunda metade é a que quase ninguém escreve: toda conferência responde a *«está lá?»* ou a *«presta?»*, e a que ela **não** responde precisa aparecer no relatório com o mesmo destaque do que não foi olhado — senão o verde de uma vira leitura de verde da outra. Costuma custar pouco fechar a lacuna: ler 30 bytes de cabeçalho respondeu «presta?» por 45 arquivos de uma vez, sem dependência nenhuma.");
```

---

## Edição 3 — `src/index.template.html` · `buildWoTemplate`, o passo declara qual pergunta responde

**Âncora** (uma linha, no bloco dos campos por passo de verificação):

```
    "      - **Prova de vida:** quando \"passou\" se parece com \"nada aconteceu\", o passo precisa do par negativo",
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
    "      - **Esta e qual pergunta: «esta la?» ou «presta?»** Contagem, existencia e extensao sao propriedades",
    "        do INVOLUCRO; a aptidao esta no conteudo. Diga qual das duas este passo NAO responde — 45 arquivos",
    "        existindo, com a extensao certa e o indice batendo, ja passaram verdes estando destruidos por dentro,",
    "        porque nenhum instrumento abriu um deles. Fechar a lacuna costuma custar pouco.",
```

---

## Edição 4 — `validate.js` · o C49 cobra as duas superfícies

**Âncora** (uma linha, dentro do C49):

```
  // (4) quinta especie de passo de verificacao errado
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
  // (3b) FK-M do sand-land: existencia nao e aptidao, e o relatorio DECLARA qual das duas
  //       perguntas o instrumento nao responde — do mesmo jeito que ja declara o que nao olhou.
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/qual das duas perguntas o instrumento não responde/.test(cmd), id+": a propriedade 2 do relatorio so declara o que nao foi olhado — falta declarar qual pergunta o instrumento nao responde, e o verde de «esta la?» passa a ser lido como verde de «presta?»");
    assert(/30 bytes de cabeçalho/.test(cmd), id+": a regra veio sem o argumento de custo — sem ele, «declare a lacuna» perde para a pressa");
  });
```

**E, no fim do mesmo check**, âncora:

```
  assert(/ausencia relatada por instrumento e uma afirmacao/.test(wo), "falta a regra geral: ausencia precisa de prova igual a qualquer outra");
```

**Substituir por:**

```
  assert(/ausencia relatada por instrumento e uma afirmacao/.test(wo), "falta a regra geral: ausencia precisa de prova igual a qualquer outra");
  assert(/«esta la\?» ou «presta\?»/.test(wo), "modelo de WO nao cobra do passo de verificacao qual das duas perguntas ele responde");
  assert(/do INVOLUCRO; a aptidao esta no conteudo/.test(wo), "falta a distincao involucro x conteudo no modelo de WO — sem ela «qual pergunta?» vira etiqueta e nao criterio");
```

---

## Edição 5 — `meta/DECISIONS.md` · registra a D-131

**Âncora** (última linha do arquivo, fim da D-130):

```
. **Custo de teto ZERO** — nada toca `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **813.428 → 813.436** bytes. Harness **18/18, 93/93, 0 erros** (nenhum check novo — o C49 cresceu pela terceira vez).
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-131 — Fecha a FK-M: «existência não é aptidão» ganha a metade operacional — o relatório declara qual das duas perguntas o instrumento NÃO responde (wo0097)

**Base.** Auditoria do Sand-Land-Map antes de gerar o pacote dele (2026-08-13). Item **FK-M** do `IDEAS.md` deles, aberto em 2026-08-10 e sem linha de desfecho.

**O kit pegou o princípio e deixou a metade operacional.** A D-122 instalou *«Existência não é aptidão (…) ao escrever uma sonda, pergunte o que ela NÃO abre»*. A FK-M pede outra coisa: que a resposta vire **propriedade declarada do relatório**, ao lado de «o que não foi olhado». **A diferença é a de sempre** — pergunta ao autor depende de o autor lembrar; propriedade do relatório o leitor cobra. É a mesma forma do item (7) do Mapsmith (virtude sem gatilho), aplicada a uma regra que já tínhamos.

**E é o leitor que paga.** Sem a declaração, *«45/45 existem, extensões `{'.webp': 45}`, sprite_source existe: sim»* é um verde de **«está lá?»** que a leitura seguinte consome como verde de **«presta?»** — e os 45 ícones estavam destruídos por dentro. **Os dois projetos tinham o mesmo ponto cego**, cada um no seu instrumento.

**Entra também o argumento de custo que a FK-M carrega e o kit não tinha:** *ler 30 bytes de cabeçalho respondeu «presta?» por 45 arquivos de uma vez, sem dependência nenhuma.* Regra sem custo declarado perde para o «depois eu vejo» — e esta custa quase nada.

**Duas superfícies, porque o defeito aparece nas duas pontas:** a **propriedade 2** do relatório de sonda (quem mede declara a lacuna) e o **passo de verificação** do modelo de WO (quem escreve a conferência declara qual pergunta o passo não responde, com a distinção invólucro × conteúdo junto — sem ela, «qual pergunta?» vira etiqueta em vez de critério).

**Nota de simetria com a FK-A.** Aquela pediu que o kit distinguisse *«não verifiquei»* de *«não dá para ler daqui»*, e virou a D de canal ilegível. Esta pede a distinção irmã, um nível acima: *«conferi»* de *«conferi o invólucro»*. **O mesmo projeto identificou as duas**, com dez meses de prática entre elas.

**Check C49 estendido**, com **quatro provas negativas**: sem a segunda declaração · sem o argumento de custo · modelo de WO sem a pergunta · modelo de WO sem a distinção invólucro × conteúdo. A quarta expôs uma asserção frouxa minha (`/propriedades\s*$|do INVOLUCRO/m`, que passava por outro motivo) e foi apertada antes de entrar.

`KIT_VERSION 1.116.0`. **Custo de teto ZERO** — nada toca `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **813.436 → 814.394** bytes. Harness **18/18, 93/93, 0 erros** (nenhum check novo — o C49 cresceu pela quarta vez).
```

---

## Edição 6 — `meta/IDEAS.md` · registra e fecha o inventário do sand-land

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-13 — Auditoria do Sand-Land-Map antes do pacote: a FK-M estava aberta (D-131, wo0097)
Varri os 36 arquivos deles e cruzei o `IDEAS.md` com o texto gerado pelo kit. **Um item de feedback continuava aberto:** a **FK-M** (2026-08-10), que pede o que a D-122 não deu — não a regra «existência não é aptidão», que entrou, mas a sua **metade operacional**: *declarar qual das duas perguntas o instrumento não responde*, ao lado do que não foi olhado. Pergunta ao autor depende de memória; propriedade do relatório o leitor cobra.

**Simetria que vale registrar:** a FK-A deles pediu que o kit distinguisse «não verifiquei» de «não dá para ler daqui». A FK-M pede a distinção irmã, um nível acima: **«conferi» de «conferi o invólucro»**. Mesmo projeto, dez meses de prática entre as duas.

**Estado do feedback dos dois projetos, agora:** **fechado**. Mapsmith — os nove itens e os três pedidos de volta, respondidos. Sand-Land-Map — FK-A a FK-M, todos com desfecho: A/B/C aceitos (v1.93.0), D recusado com argumento, E adiado com gatilho, F e I na D-122, G e H na D-123, J e K na D-120, L nas D-121 e D-122, **M nesta**.

**Registrado como não olhado, para não virar zero:** o `.claude/` do Sand-Land-Map **não está no mount** — o `.gitignore` deles ignora a pasta inteira, contradizendo o comentário duas linhas acima no mesmo arquivo («NAO ignore .claude/ … sao versionados de proposito»). Não pude auditar as skills nem o `settings.json` deles, que foi exatamente onde estavam os dois defeitos mais caros do Mapsmith. **Vai como pergunta no pacote, não como diagnóstico** (D-127).
```

---

## Fora de escopo

- **Auditar o `.claude/` do Sand-Land-Map** — impossível: a pasta é ignorada pelo `.gitignore` deles e não sobe ao mount. Vai como pergunta no guia de entrega.
- **Atualizar o `IDEAS.md` deles** com os desfechos de FK-F a FK-L — é registro do projeto deles, e o pacote leva a informação.
- **A contradição do `.gitignore` deles** — achado para o guia, não edição do kit.

## Armadilhas desta WO

- **Fim de linha:** `src/index.template.html` é **CRLF**, `validate.js` é **LF**. Todas as âncoras são de uma linha. Confira: template com **0 LF soltos**.
- **A Edição 3 insere ANTES da âncora** — a linha da «Prova de vida» permanece, agora depois do bloco novo. Se ela sumir, **PARE**.
- **A Edição 3 é sem acento** (convenção do array do modelo de WO) e a Edição 2 é **com** acento (convenção do CEREBRO). O C49 procura as duas formas literalmente. **Não uniformize.**
- **`«esta la\?» ou «presta\?»`** na regex tem os pontos de interrogação escapados — obrigatório.
- **Nenhum check novo.** O total continua **93/93**; o C49 cresceu. Se virar 94, algo a mais foi colado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além.
- [ ] **Inventário declarado: 1 item de feedback, 2 superfícies.** Divergiu, **PARE e reporte**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 93/93 checagens, 0 erros**, com **C49 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`.
- [ ] `index.html` com **814.394 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os quatro campos — este é o primeiro a usar o campo que ele mesmo institui):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildClaudeMd()` (Edição 2) e `buildWoTemplate()` (Edição 3); o C49 gera os dois e afirma sobre eles.
  - **Esta é qual pergunta:** **«está lá?»**. O harness confirma que o texto **existe** nos 18 nichos. **NÃO responde «presta?»** — se a redação nova resolve o problema em campo, só a próxima sonda escrita sob a regra dirá.
  - **Prova de vida:** troque `qual das duas perguntas o instrumento não responde` por `qual pergunta` na Edição 2, rode `node build.js && node validate.js index.html`, e confirme que o **C49 falha** com a mensagem sobre o verde de uma virar leitura da outra. Desfaça.
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados · validação (C28, C49, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita a versão. Atualize as **vivas** para `v1.116.0` e acrescente **D-131**. **A contagem de checagens NÃO muda** (93/93) e os números de orçamento também não. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260813-wo0097-fecha-a-fk-m.md
```

```
git commit -m "feat(kit): o relatorio declara qual das duas perguntas o instrumento nao responde" -m "Auditoria do sand-land antes de gerar o pacote deles achou um item de feedback ainda aberto: a FK-M, de 10/08. A D-122 pegou o principio - existencia nao e aptidao - e deixou a metade operacional de fora." -m "O kit dizia ao AUTOR: ao escrever uma sonda, pergunte o que ela nao abre. A FK-M pede que a resposta vire propriedade declarada do RELATORIO, ao lado do que nao foi olhado. Pergunta ao autor depende de memoria; propriedade do relatorio o leitor cobra." -m "E e o leitor que paga: 45 de 45 existem, extensoes certas, indice batendo, e um verde de esta la que a leitura seguinte consome como verde de presta - com os 45 arquivos destruidos por dentro. Os dois projetos tinham o mesmo ponto cego." -m "Entra tambem o argumento de custo que a FK-M carrega: ler 30 bytes de cabecalho respondeu presta por 45 arquivos de uma vez. Regra sem custo declarado perde para a pressa. Duas superficies: a propriedade 2 da sonda e o passo de verificacao do modelo de WO. Quatro provas negativas, uma das quais apertou uma assercao frouxa antes de entrar. wo0097, D-131."
```

```
git push
```
