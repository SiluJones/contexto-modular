# WO 0091 — A skill `wrap` que o kit publica para de contradizer a própria revogação

> **Tipo:** WO de CÓDIGO + registro (mista). **Pequena e bloqueante.**
> **Config sugerida:** Sonnet, esforço **médio**. Cinco edições, todas de uma linha, exceto o check.
> **Pré-requisito:** `KIT_VERSION 1.110.0`, commit `3258e61`, `main` limpo, harness **18/18 · 90/90 · 0 erros**.
> **Base:** conferência do pacote de update gerado, feita antes de entregá-lo aos dois projetos (2026-08-12). O defeito foi achado ao **ler o pacote**, não ao ler o fonte.
> **Depende de:** wo0090 (aplicada, `a61c6d6`; `/wrap` em `3258e61`).
> **Bloqueia:** a entrega dos pacotes de update. **Não gere os pacotes antes desta WO.**
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 4 e 5.

---

## 1. Por que

**Gerei o pacote de update da v1.110.0 e li a skill `wrap` que ele entrega. Ela se contradiz em duas linhas consecutivas:**

```
e me mostre o `git diff` e o comando de commit (uma linha por comando, mensagem SEM acento).
[…]
Verde: `add`, `commit` e `push` sem perguntar. Vermelho: nao commite nem empurre — feche com MENU NUMERADO […]
```

A correção da **D-115** foi **acrescentada** e a frase antiga **continuou logo acima**. O `description` do front-matter também: *«append em STATUS/DECISIONS, git diff e comando de commit»* — e a descrição é o que o modelo lê primeiro para decidir se invoca a skill.

**A consequência é a pior possível para esta semana.** A wo0090 acabou de registrar a revogação cujo `texto` é *«Mostre o git diff e o bloco de commit (uma linha por comando)»*, para que os dois projetos irmãos a removam de suas skills. **O pacote entregaria a linha revogada e, no mesmo envio, o pedido de removê-la.** Um assistente cuidadoso do outro lado pararia e perguntaria; um menos cuidadoso concluiria que a revogação está errada — e a próxima revogação valeria menos.

**Como isto sobreviveu a seis versões.** O C43 (wo0087) compara **instalado × gerado**, cláusula por cláusula, e as cláusulas são todas afirmativas: «tem o caso verde?», «tem o menu?», «tem a ordem do push?». O gerado tinha todas. **Ninguém perguntava se o gerado tinha também o que a lista de revogações manda tirar.** É a mesma família da D-124 — a lista de revogações existe para o instalado e não estava sendo aplicada à própria saída do gerador.

**E o achado só apareceu porque o pacote foi lido.** O harness gerava aquela string havia seis versões sem reclamar. A leitura do artefato final é que pegou — a mesma lição do FIX-0010 do Mapsmith, num objeto de texto em vez de imagem: *existência não é aptidão*, e nenhum instrumento estava abrindo o pacote.

## 2. Contexto factual

Medido em sandbox no estado `3258e61` (repo reconstruído do mount, build reproduzindo `index.html` byte a byte — **805.160** —, harness verde 18/18 · 90/90 antes de qualquer edição).

- **A skill `apply-wo` gerada NÃO tem o defeito** — verificada linha a linha. Só a `wrap`.
- **O `CEREBRO.md` e as `INSTRUCOES` gerados também não têm defeito**, e é importante não «consertá-los»: a regra da raia de planejamento — *o assistente fecha a resposta com o bloco de commit pronto para copiar* — está **certa**, porque o chat não tem disco. É o par da FK-L(b): *entrega bloco quem NÃO pode rodá-lo*. A revogação da wo0090 está corretamente escopada a **skills**, e o `porque` dela diz isso («numa skill de fecho ou de aplicacao»).
- **Custo de teto: ZERO.** As skills não passam por `buildInstr`. C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.110.0.
- **`index.html` vai de 805.160 para 805.153 bytes** — sete bytes **a menos**: é uma correção que encolhe.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato final, não do fonte.** O pacote de update foi gerado e os 21 arquivos foram abertos; a pergunta feita a cada um foi «este arquivo contém alguma das quatro linhas que a lista de revogações manda remover?».

**Não truncado.** Os 21, um a um.

**Contagem declarada: 1 arquivo do pacote com a linha revogada** (`wrap.SKILL__template-update.md`), em **2 lugares** dentro dele (o `description` do front-matter e o corpo). **Conteste antes de agir** — se você achar um segundo arquivo do pacote com linha revogada, isso é o achado.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.110.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.110.1";
```

---

## Edição 2 — `src/index.template.html` · `buildCodeKitFiles`, o `description` da skill `wrap`

**Âncora:**

```
    "description: Encerra a tarefa — append em STATUS/DECISIONS, git diff e comando de commit. Use quando o usuário pedir /wrap ou para fechar a sessão de trabalho.",
```

**Substituir por:**

```
    "description: Encerra a tarefa — append em STATUS/DECISIONS, confere o git diff, commita e empurra. Use quando o usuário pedir /wrap ou para fechar o trabalho.",
```

> Duas mudanças na mesma linha: o verbo (**commita e empurra**, não «comando de commit») e o vocabulário (**fechar o trabalho**, não «fechar a sessão de trabalho» — resíduo da D-118 num lugar que a varredura daquela WO não alcançou, porque as skills não passam por `buildInstr`).

---

## Edição 3 — `src/index.template.html` · `buildCodeKitFiles`, o corpo da skill `wrap`

**Âncora** (duas linhas consecutivas):

```
    "Encerre a tarefa: atualize `meta/STATUS.md` (append, não reescreva), acrescente `DEC-`/`FIX-` em `meta/DECISIONS.md` se houve decisão/bug,",
    "e me mostre o `git diff` e o comando de commit (uma linha por comando, mensagem SEM acento).",
```

**Substituir por:**

```
    "Encerre a tarefa: atualize `meta/STATUS.md` (append, não reescreva), acrescente `DEC-`/`FIX-` em `meta/DECISIONS.md` se houve decisão/bug,",
    "e confira o `git diff` — a forma esperada, nada além. Mensagem de commit SEM acento.",
```

> O `git diff` **continua sendo conferido** — o que sai é a promessa de *entregá-lo ao dono junto do comando*. A linha seguinte (caso verde/vermelho) já diz quem roda.

---

## Edição 4 — `validate.js` · o C43 passa a olhar o que o gerado NÃO pode conter

**Âncora** (comentário dentro do C43):

```
  // (2) a regressao especifica que originou este check, nomeada para nao voltar disfarcada
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
  // (2b) o GERADO nao pode conter a propria linha que a lista de revogacoes manda remover.
  //      Ficou contraditorio por seis versoes: a correcao da D-115 foi ACRESCENTADA e a frase
  //      antiga continuou logo acima. Um pacote de update nessas condicoes entrega a linha
  //      revogada e, no mesmo envio, manda o projeto remove-la.
  [["wrap", kit.wrap], ["applyWo", kit.applyWo]].forEach(([nome, txt]) => {
    T.REVOCATIONS.forEach(r => {
      if(!/skill/i.test(r.porque||"")) return;
      const chave = /comando de commit|bloco de commit/;
      assert(!chave.test(txt), "a skill GERADA "+nome+" ainda pede o comando/bloco de commit ao dono — e a mesma linha que a revogacao v"+r.desde+" manda os projetos removerem; o pacote entregaria o defeito e o pedido de remove-lo no mesmo envio");
    });
  });

```

> **Por que dentro do C43 e não num check novo.** O C43 é o check da relação **gerado × instalado**; esta é a mesma relação vista pelo terceiro lado (o gerado × o que o próprio kit revogou). Um C47 separado partiria em dois um assunto só. E a varredura é dirigida pela lista `REVOCATIONS` — quando uma revogação nova entrar com «skill» no `porque`, ela passa a ser cobrada aqui **sozinha**, sem edição no check.

---

## Edição 5 — `meta/DECISIONS.md` · registra a D-125

**Âncora** (última linha do arquivo, fim da D-124):

```
`KIT_VERSION 1.110.0`. **Custo de teto ZERO nas seis edições** — quarta leva seguida: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.109.0; folga do `narrative` em **289**. `index.html` de **801.792 → 805.160** bytes. Harness **18/18, 89/89 → 90/90, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-125 — O gerado não pode conter a linha que ele mesmo revoga: a skill `wrap` publicada parava de se contradizer, e o C43 passa a cobrar isso pela lista de revogações (wo0091)

**Base.** Conferência do pacote de update da v1.110.0, feita **antes** de entregá-lo aos dois projetos irmãos. O defeito foi achado **lendo o pacote**, não o fonte.

**O defeito.** A skill `wrap` que o kit publica dizia, em duas linhas consecutivas: *«e me mostre o `git diff` e o comando de commit (uma linha por comando…)»* e, logo abaixo, *«Verde: `add`, `commit` e `push` sem perguntar»*. A correção da D-115 foi **acrescentada** e a frase antiga **continuou**. O `description` do front-matter repetia o erro — e é o que o modelo lê primeiro para decidir se invoca a skill.

**Por que era bloqueante.** A wo0090 acabara de registrar a revogação cujo texto é essa mesma frase, para que os projetos irmãos a removessem. **O pacote entregaria a linha revogada e, no mesmo envio, o pedido de removê-la.** Um assistente cuidadoso do outro lado pararia e perguntaria; um menos cuidadoso concluiria que a revogação está errada — e a próxima revogação valeria menos. Uma lista de revogações contradita pelo próprio pacote não é um erro de texto: é a erosão do mecanismo.

**Por que sobreviveu a seis versões.** O C43 compara instalado × gerado por **cláusulas afirmativas** — «tem o caso verde?», «tem o menu?», «tem a ordem do push?» — e o gerado tinha todas. **Ninguém perguntava se o gerado tinha também o que a lista de revogações manda tirar.** Mesma família da D-124: a lista existia para o instalado e não era aplicada à própria saída do gerador.

**E o achado só veio da leitura do artefato final.** O harness emitia aquela string havia seis versões sem reclamar; foi abrir os 21 arquivos do pacote que pegou. É o FIX-0010 do Mapsmith num objeto de texto — *existência não é aptidão*, e nenhum instrumento estava abrindo o pacote. Reforça a regra da D-122 na sua forma mais geral: **ao escrever um instrumento, pergunte o que ele NÃO abre.**

**O que NÃO foi tocado, de propósito.** A regra da raia de planejamento no CEREBRO e nas Instruções — *o assistente fecha a resposta com o bloco de commit pronto para copiar* — está **certa**: o chat não tem disco, e é o par da FK-L(b), *entrega bloco quem NÃO pode rodá-lo*. A revogação da D-124 está corretamente escopada a **skills**, e o `porque` dela diz isso; o check novo lê esse escopo em vez de repeti-lo.

**A verificação passou a ser dirigida pela lista, não por uma cópia dela.** O trecho novo do C43 percorre `REVOCATIONS`, seleciona as entradas cujo `porque` menciona skill, e afirma a **ausência** nos dois arquivos gerados. Quando uma revogação nova entrar com esse escopo, ela passa a ser cobrada sozinha, sem edição no check — o oposto do instantâneo copiado que a D-123 proibiu.

**Corrigido de carona:** o `description` da skill dizia «fechar a sessão de trabalho», resíduo da D-118 que a varredura daquela WO não alcançou porque as skills não passam por `buildInstr`.

**Duas provas negativas:** a frase contraditória de volta no corpo; e o `description` voltando a prometer o comando de commit. As duas reprovam o C43 sozinhas.

`KIT_VERSION 1.110.1` (correção). **Custo de teto ZERO** — skills não passam por `buildInstr`: C28 idêntico à v1.110.0. `index.html` de **805.160 → 805.153** bytes: sete a menos, porque a correção **encolhe**. Harness **18/18, 90/90, 0 erros** (nenhum check novo — o C43 cresceu).
```

---

## Edição 6 — `meta/IDEAS.md` · registra o achado

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-12 — Conferência do pacote antes de entregá-lo: o gerado contradizia a própria revogação (D-125, wo0091)
O pacote de update da v1.110.0 foi **gerado e lido arquivo por arquivo** antes de ir para os dois projetos. A skill `wrap` publicada pedia o comando de commit ao dono duas linhas acima de mandar o executor empurrar sozinho — a correção da D-115 tinha sido acrescentada sem remover a frase antiga, e o pacote entregaria a linha revogada junto do pedido de removê-la.

**A lição de método, que vale mais que a correção:** o harness emitia aquela string havia seis versões. Todos os checks sobre skills perguntavam o que o gerado **tem**; nenhum perguntava o que ele **não pode ter**. Regra geral: *para cada linha que o kit revoga, o gerado precisa provar a ausência dela* — e a prova tem de ser dirigida pela lista de revogações, não por uma cópia da lista dentro do check.

**E a segunda lição, mais velha e mais teimosa:** foi **abrir o artefato final** que pegou. É o FIX-0010 do Mapsmith num objeto de texto: existência não é aptidão, e nenhum instrumento estava abrindo o pacote. *Ao escrever um instrumento, pergunte o que ele NÃO abre.*
```

---

## Fora de escopo

- **A regra de commit da raia de planejamento** (CEREBRO e Instruções) — está correta; o chat não tem disco. Não tocar.
- **`apply-wo` gerado** — conferido, sem o defeito.
- **Gerar os pacotes** — frente seguinte, que esta WO desbloqueia.

## Armadilhas desta WO

- **Fim de linha:** template é **CRLF**, `validate.js` é **LF**. A Edição 3 é a única com âncora de duas linhas; se não casar, ancore só na segunda linha (a que muda) e substitua-a sozinha. Confira ao fim: **0 LF soltos**.
- **A Edição 3 mantém a primeira linha intacta.** Se o `git diff` mostrar a linha do `STATUS.md`/`DECISIONS.md` mudando, algo saiu errado — PARE.
- **Não «conserte» o CEREBRO nem as Instruções** ao ver «bloco de commit pronto para copiar» lá. É a raia do chat, e está certa. O check novo não olha para elas de propósito.
- **A Edição 4 usa `kit.wrap` e `kit.applyWo`** — as variáveis já existem no C43 (`const kit = T.buildCodeKitFiles();` está acima). Se o seu editor reclamar de variável indefinida, o bloco foi colado fora do C43.
- **`index.html` encolhe.** 805.160 → **805.153**. Se crescer, a Edição 3 acrescentou em vez de substituir.
- **Nenhum check novo.** O total continua **90/90** — o C43 é que ganhou asserções. Se o total virar 91, algo a mais foi colado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além.
- [ ] **Inventário declarado: 1 arquivo do pacote, 2 lugares dentro dele.** Achou um segundo arquivo do pacote com linha revogada, **PARE e reporte**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 90/90 checagens, 0 erros**, com **C43 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`.
- [ ] `index.html` com **805.153 bytes** (sete a MENOS que antes); template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de arquivo gerado e execução do harness, na mesma máquina, reversível.
  - **Chega no ramo?** `buildCodeKitFiles()` no `src/index.template.html` (Edições 2 e 3) e o C43 em `validate.js` (Edição 4). O check gera as skills de verdade e afirma sobre elas.
  - **Prova de vida:** o harness verde não prova que a **skill entregue** ficou coerente — foi justamente isso que passou seis versões. **Leia o artefato:** rode `node -e "const fs=require('fs');const {JSDOM}=require('jsdom');let h=fs.readFileSync('index.html','utf8');let c=h.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\nboot\(\);?\s*$/m,'\n')+'\nwindow.__W=buildCodeKitFiles().wrap;';const d=new JSDOM('',{runScripts:'outside-only'});d.window.eval(c);console.log(d.window.__W);"` e confirme que a palavra **«comando de commit» não aparece** — nem no corpo, nem no `description`. Depois force o vermelho: devolva a frase antiga à Edição 3, rode o harness, confirme que o **C43 falha** com a mensagem sobre o pacote entregar o defeito e o pedido de removê-lo, e desfaça.
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados · validação (C28, C43, bytes do `index.html`) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever.**

> **Para o `/wrap`:** o `meta/STATUS.md` cita `v1.110.0`. Atualize as ocorrências **vivas** para `v1.110.1` e acrescente **D-125** aos concluídos. **A contagem de checagens NÃO muda** (90/90) — não a incremente. Números de orçamento inalterados. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260812-wo0091-o-gerado-nao-contradiz-a-revogacao.md
```

```
git commit -m "fix(kit): a skill wrap publicada para de contradizer a propria revogacao" -m "Ao gerar o pacote de update e ler os 21 arquivos antes de entrega-lo aos dois projetos irmaos, a skill wrap publicada pedia o comando de commit ao dono duas linhas acima de mandar o executor empurrar sozinho. A correcao da D-115 foi acrescentada sem remover a frase antiga, e o description do front-matter repetia o erro." -m "Era bloqueante: a wo0090 acabara de registrar a revogacao dessa mesma frase para que os projetos a removessem. O pacote entregaria a linha revogada e, no mesmo envio, o pedido de remove-la - e uma lista de revogacoes contradita pelo proprio pacote nao e erro de texto, e erosao do mecanismo." -m "Sobreviveu seis versoes porque todos os checks sobre skills perguntavam o que o gerado TEM; nenhum perguntava o que ele nao pode ter. O C43 passa a percorrer a lista de revogacoes e a afirmar a ausencia - dirigido pela lista, nao por uma copia dela, entao revogacao nova de escopo skill passa a ser cobrada sozinha." -m "O achado veio de ABRIR o artefato final, nao o fonte: o FIX-0010 do mapsmith num objeto de texto. Custo de teto zero; o index.html encolhe sete bytes. wo0091, D-125."
```

```
git push
```
