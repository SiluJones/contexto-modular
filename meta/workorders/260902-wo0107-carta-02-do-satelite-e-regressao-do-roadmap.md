# WO 0107 — Registrar a carta 02 do satelite-web, a regressão do ROADMAP e o desvio da wo0106

> **Tipo:** WO de DOC (registro). Fecho de sessão.
> **Config sugerida:** modelo leve, `/effort` **médio** — três edições de texto, sem código.
> **Pré-requisito:** v1.122.0, commit `387aa0c`, `main` sincronizada com `origin/main`, harness **18/18 · 100/100 · 0 erros**, 1 não rastreado conhecido (`.claude/launch.json`).
> **Base:** a carta 02 do satelite-web (`260828-satelite-web-para-kcm-02-tres-achados-do-ciclo.md`, lida por inteiro no turno em que chegou), o relatório `260828-0814-code-kcm.txt`, e a regressão do ROADMAP medida neste turno.
> **Depende de:** wo0106 (aplicada, `387aa0c`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção. Se já existir, **PULE** e diga no relatório.
>
> **Âncoras lidas em:** as três foram lidas **neste turno**, no mount de 2026-09-02 12:17.
> - `meta/IDEAS.md` **L593** → `## 📮 Feedback para o Kit` — `grep -c` = **1**.
> - `meta/IDEAS.md` **L595** → `### 2026-08-25 — O ciclo de update do satelite-web: seis itens, e um deles nos pegou no mesmo dia` — é a entrada que hoje encabeça a seção, e tem de continuar existindo **abaixo** da nova.
> - `meta/IDEAS.md`, seção da `i-N59` → `## i-N59 — O CHANGELOG perdeu 18 versões` — `grep -c` = **1**.
>
> **Afirmação sobre artefato legível:** nada citado abaixo vem de memória. Os números da regressão do ROADMAP foram **derivados** por comparação de tokens entre o arquivo antigo e o novo; os do harness vêm do relatório do Code e do manifesto.
>
> **Canal dos meta neste ciclo = CODE.** Exceções declaradas, e as duas vêm inteiras pela raia do chat: **`meta/ROADMAP.md`** (reescrita corrigida) e **`logs/2026-09-02.md`** (arquivo novo — não há dois escritores num arquivo que ninguém escreveu). A WO só as menciona no `git add`.
>
> **Próximo comando:** `/wrap`

---

## 1. Por que

Três coisas desta sessão só existem em conversa, e conversa não sobrevive à transferência:

- **A carta 02 do satelite-web** traz três achados com caso concreto, e um deles é uma crítica direta a uma conclusão nossa. Carta é transitória por decisão registrada (D-123): o que não for para o `IDEAS.md` morre com o arquivo.
- **A regressão do ROADMAP** é o quarto caso da família da D-135 e o mais desconfortável: aconteceu enquanto se aplicava o próprio princípio que ela viola. Sem registro, volta.
- **O desvio da wo0106** é pequeno e tem de ficar: o rótulo `C38` na Edição 6(a) estava errado — a âncora vive no **C40**. Não teve consequência funcional, mas WO futura que copie o padrão vai citar o check errado.

## 2. Contexto factual

**[medido por instrumento, 2026-09-02]**

- Manifesto de 12:17: `387aa0c`, `main` sincronizada, 1 não rastreado. O relatório `260828-0814-code-kcm.txt` carrega o **mesmo** `387aa0c` — os dois carimbos batem, pela regra da D-136.
- wo0106: 8 edições, harness **100/100**, `C28` idêntico, `index.html` 836.117 bytes, prova negativa do `C54` executada. Contagens derivadas conferidas uma a uma pelo executor.
- **Regressão do ROADMAP:** a primeira versão entregue tinha **9.921 bytes** contra **14.681** do original, e perdia **30 referências** — `D-001`, `D-012`, `D-014`, `D-016`, `D-017`, `D-019`, `D-020`, `D-021`, `D-024` a `D-027`, `D-029`, `D-030`, `FIX-001` a `FIX-003`, `i-N10`, `i-N13`, `i-N17` a `i-N20`, `i-N25`, `v1.4.0`, `v1.21.0` a `v1.23.0`, `v1.25.0`, `v1.25.1`. A versão corrigida, refeita **a partir do arquivo antigo por edição cirúrgica**, tem 22.884 bytes e **0 referências perdidas**.

**[relatado pelo dono, no chat]**

- O pacote v1.121.0 e a carta 05 foram **enviados ao FlatDrop**. Sem resposta até o fecho desta sessão.
- Foi o dono quem detectou a regressão do ROADMAP, e detectou **pelo tamanho do arquivo** — não por leitura do conteúdo.

**[relatado pelo satelite-web, na carta 02]**

- A leva v1.120.0 foi aplicada por inteiro entre 25 e 28/08: skills, `_TEMPLATE.md`, `settings.json`, `.flatdropignore`, `meta/SPEC.md` e o merge dos dois `fusao` — CEREBRO de 41 KB para 79,8 KB; Instruções de 5.796 para 7.463 caracteres, teto 7.600. Cinco WOs desde então, todas aplicadas e empurradas.
- O pacote que eles tinham em 25/08 01:28 **era o v1.120.0** com o carimbo dizendo `v1.119.0`. A carta 01 mandava descartá-lo; seguida ao pé da letra, teria descartado o único pacote disponível.

**[deduzido, e marcado como tal]** que a regressão do ROADMAP nasceu de tratar «revisar» como «reescrever». Não há como provar a intenção; o que se mede é o resultado, e o resultado foi compressão dos blocos concluídos.

---

## Edição 1 — `meta/IDEAS.md` · a carta 02 do satelite-web

**Âncora** *(ocorrência única, L593)*:

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** a linha da âncora, mantendo a linha em branco que já existe abaixo dela — o bloco novo entra **depois** dessa linha em branco e **antes** da entrada de 2026-08-25:

```

### 2026-09-02 — Carta 02 do satelite-web: três achados de uso, e um deles corrige uma conclusão nossa
Eles aplicaram a leva v1.120.0 por inteiro entre 25 e 28/08 — skills, `_TEMPLATE.md`, `settings.json`, `.flatdropignore`, `meta/SPEC.md` e o merge dos dois `fusao` (CEREBRO de 41 KB para 79,8 KB; Instruções de 5.796 para 7.463 caracteres, teto 7.600), com cinco WOs desde então. **Abrem dizendo que nada ali é reclamação de coisa que não funcionou:** é o que apareceu ao usar. Os três nascem de coisas que o kit «já quase acerta», e em cada uma falta meio passo. **Nenhum item pede resposta** — os três já viraram prática local lá.

**(1) A contagem esperada em checklist é armadilha reincidente, e a causa é estrutural.** No ciclo deles o assistente errou **as três** vezes em que cravou um número: 7 → 13 (cada arquivo consumidor tem **import e uso**, dois hits e não um), 135 → 142 (bullets aninhados dentro de blocos longos, não contados linha a linha) e 9 → 10 (a palavra dentro do **JSDoc que a própria WO mandava escrever** — o mesmo modo de falha que nos pegou duas vezes aqui). **A causa não é descuido:** quem escreve a WO está na raia de planejamento e **não tem o arquivo à mão para contar**, então o número sai de reconstrução mental. E o efeito colateral é pior que o erro — quem aplica vê vermelho num check que devia ser verde, e ou para sem motivo, ou **aprende a relativizar os checks**. Duas formas que funcionaram lá e que eles pedem para promover no `_TEMPLATE.md`: **(a) comparar dois números MEDIDOS** em vez de prever um absoluto (`wc -c` do original × `wc -c` da cópia — «não há como errar a previsão porque não há previsão»); **(b) quando o absoluto for inevitável, escrevê-lo como PISO**: a WO que dizia «esperado 135, conte de verdade e reporte o real; se der menos que 126, PARE» deu 142 e **funcionou perfeitamente** — protegeu contra perda sem depender de o autor acertar o total. Foi a única das três que previu a própria falibilidade. **A hierarquia sugerida: comparação medida > piso > absoluto previsto**, com o motivo escrito e o caso do import+uso junto, que é o mais contraintuitivo.

**(2) «Rede de segurança que já está vermelha não é rede».** Ao aplicar uma WO, o `npm run lint` acusou 24 erros. O executor **não** tomou como falha da WO: mediu o baseline com `git stash` e achou **21 erros anteriores**, em 9 arquivos que a WO nem tocava — o `eslint-config-next@16.2.6` trouxe regras estritas que passaram a reprovar código em produção. Ele reportou o **delta** (21 → 24), identificou os três novos um a um e explicou por que nenhum bloqueia (o Next 16 não roda ESLint no `build`; o que o build executa é o type-check, e esse estava limpo). **Nada disso estava escrito em lugar nenhum — foi iniciativa dele.** O pedido: o modelo de WO passa a exigir **delta de erros** sempre que houver baseline conhecido, e o CEREBRO ganha a regra geral. Vale muito além do lint: **qualquer verificação com ruído de fundo precisa de baseline declarado, ou vira teatro** — e um vermelho que sempre aparece ensina a ignorar vermelho, que é o oposto do que a rede existe para fazer.

**(3) Ao medir a ausência de um artefato, abra o artefato antes de concluir por quê — e o caso é a nossa carta 01.** Medimos corretamente que o método de engenharia reversa do Blue não constava do manifesto do repositório deles, e concluímos «análise órfã por falta de lugar», recomendando abrir `meta/analises/` com ele dentro. **A medição estava certa; a conclusão, não.** O arquivo trazia **no próprio cabeçalho** uma decisão do dono, de 18/08, de mantê-lo fora do repositório, com a razão escrita — versionar regra de negócio de ERP de terceiro era escolha ainda não feita. **A ausência era deliberada.** O que impediu o erro do lado deles foi uma cláusula que **nós** escrevemos: «confira o que a carta afirma sobre o SEU repo», da seção de correspondência do CEREBRO — funcionou exatamente como projetada. A generalização que eles propõem: **fato medido não entrega a intenção por trás dele**; ao concluir por que algo está ausente, faltando, desatualizado ou fora do lugar, **abra o artefato**, porque a razão costuma estar escrita nele. É irmã da regra que já temos sobre `.gitignore` («ausência de resultado não é resultado»), mas cobre outro risco: **lá é não ver; aqui é ver e explicar errado.** *Desfecho, que eles fazem questão de registrar: três dias depois o dono reviu a decisão e versionou o arquivo — em `meta/blue/`, não em `meta/analises/`, porque não é análise, é conhecimento de domínio, junto do SQL que ele explica.*

**(4) E um desfecho sobre o carimbo de versão, que fecha o caso do nosso `FIX-036`.** A carta 01 mandava descartar o pacote de 25/08 01:28 e usar o v1.120.0. **O pacote no mount deles ERA o v1.120.0** — com o carimbo dizendo `v1.119.0`, exatamente a divergência que confessamos. Eles provaram **por conteúdo**: as seis mudanças que a carta atribuía ao v1.120.0 estavam todas lá. **Seguida ao pé da letra, a instrução teria descartado o único pacote disponível.** Reforça a direção da wo0106 e acrescenta uma exigência que ela não tem: o carimbo precisa ser **verificável por conteúdo**, não só declarado — hoje o manifesto manda conferir que os quatro carimbos dizem a versão, e não diz o que fazer quando o carimbo mente. *Gatilho: a próxima vez que um projeto relatar divergência entre carimbo e conteúdo.*
```

## Edição 2 — `meta/IDEAS.md` · a regressão do ROADMAP, na `i-N59`

**Âncora** *(ocorrência única — o cabeçalho da ideia)*:

```
## i-N59 — O CHANGELOG perdeu 18 versões
```

> **Localize a linha inteira** (o título continua depois disto) e insira **ao FIM do corpo dessa ideia**, imediatamente antes do próximo `## ` do arquivo. Se houver dúvida sobre onde a `i-N59` termina, **PARE e reporte** em vez de chutar o limite.

**Texto a inserir:**

```
**Caso irmão, 2026-09-02 — a revisão do ROADMAP regrediu o próprio doc que revisava.** O `ROADMAP.md` estava **88 versões** defasado (última nota de revisão: v1.34.0). A revisão foi entregue como **reescrita** e comprimiu os blocos `✅`: de 14.681 para 9.921 bytes, com **30 referências perdidas** — `D-001`, `D-012`, `D-014`, `D-016`, `D-017`, `D-019` a `D-021`, `D-024` a `D-027`, `D-029`, `D-030`, `FIX-001` a `FIX-003`, `i-N10`, `i-N13`, `i-N17` a `i-N20`, `i-N25`, `v1.4.0`, `v1.21.0` a `v1.23.0`, `v1.25.0`, `v1.25.1`. **Refeito a partir do arquivo antigo por edição cirúrgica: 22.884 bytes, 0 referências perdidas.** Três coisas ficam: **(a)** é o quarto caso da família da D-135, e o mais desconfortável, porque aconteceu **enquanto se aplicava** o princípio que ele viola (P11, nunca regredir doc atual); **(b)** quem pegou foi o **dono**, e pelo **tamanho do arquivo** — instrumento externo, não autoconferência, que é exatamente o desenho que a D-135 diz que funciona; **(c)** a regra que sai disso e já está escrita no fecho do ROADMAP: **revisão de doc histórico é acréscimo e requalificação, nunca reescrita** — o que já está concluído não se resume, porque é justamente o registro que impede uma ideia velha de voltar como nova. *Não vira check: comparar tamanho de doc antes e depois pegaria compressão legítima também. Vira regra escrita, e o gatilho é a próxima revisão de doc histórico.*
```

## Edição 3 — `meta/DECISIONS.md` · a errata do rótulo de check na wo0106

**Âncora** *(fim da entrada `D-137`, ocorrência única)*:

```
Cobrado pelo C56, com três provas negativas.
```

**Substituir por:**

```
Cobrado pelo C56, com três provas negativas. **Errata de aplicação (relatório de 2026-08-28 08:14):** o cabeçalho da wo0106 e o título da Edição 6(a) diziam que a âncora `assert(/nao remova sozinho/.test(prompt), …)` vivia no **C38**. Ela é única, foi localizada e substituída exatamente como especificado, mas vive no **C40** («vocabulario turno x conversa + o prompt de update alcanca projeto desatualizado»). A âncora 6(b) essa sim está no C38. **Sem consequência funcional** — os dois checks passam —, mas fica registrado porque WO futura que copie o padrão citaria o check errado, e porque o executor acertou ao aplicar pela âncora e não pelo rótulo: *a âncora é o contrato, o nome do check é comentário.*
```

---

## Fora de escopo

- **Nenhuma mudança no gerador, no harness ou nas skills.** Os quatro itens da carta 02 são feedback **registrado**, não implementado; os itens 1 e 2 dela já estão no ROADMAP (Fase 6, itens 3 e 4) com a ordem de prioridade.
- **Não abrir carta 03 ao satelite-web.** Eles dizem explicitamente que não há pendência de resposta. Se algum item virar mudança, chega pelo próximo `template-update`.
- **Não reconstruir as 18 versões do CHANGELOG.** Continua sendo a dívida da `i-N59`, com fonte disponível e sem gatilho natural.
- **Não mexer no `meta/ROADMAP.md` nem no `logs/2026-09-02.md`.** Os dois vêm inteiros pela raia do chat neste ciclo; a WO só os inclui no `git add`.

## Armadilhas desta WO

- **A Edição 2 pede um limite de seção**, não um trecho literal. É a única das três com risco de posicionamento — se o fim da `i-N59` não for inequívoco, **PARE**.
- **A âncora da Edição 1 carrega um emoji.** Copie a linha do arquivo, não deste documento.
- **A entrada de 2026-08-25 («O ciclo de update do satelite-web: seis itens») tem de continuar existindo e ficar ABAIXO da nova.** Se sumir ou subir, a inserção entrou no lugar errado.
- **O texto inserido cita `v1.120.0` e `carta 01` várias vezes.** Não invente contagens além das previstas no checklist.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `meta/IDEAS.md` e `meta/DECISIONS.md`. O `meta/ROADMAP.md` aparece como modificado e o `logs/2026-09-02.md` como não rastreado — os dois vieram do chat.
- [ ] `grep -c "^## 📮 Feedback para o Kit$" meta/IDEAS.md` → **1**.
- [ ] `grep -c "^### 2026-09-02 — " meta/IDEAS.md` → **1**.
- [ ] `grep -n "^### 2026-08-25 — O ciclo de update do satelite-web" meta/IDEAS.md` → **uma linha, com número MAIOR** que o da entrada nova. É o que prova que a inserção ficou no topo da seção.
- [ ] `grep -c "revisão do ROADMAP regrediu o próprio doc" meta/IDEAS.md` → **1**, e `grep -n` devolve linha com número **MENOR** que o da seção `📮 Feedback para o Kit` (a `i-N59` vive acima dela).
- [ ] `grep -c "a âncora é o contrato, o nome do check é comentário" meta/DECISIONS.md` → **1**.
- [ ] `test -f meta/ROADMAP.md && grep -c "Mudanças nesta revisão (v1.122.0)" meta/ROADMAP.md` → **1**. **Se der 0, PARE:** o ROADMAP no disco ainda é o antigo ou a primeira versão comprimida, e o `git add` o incluiria errado.
- [ ] `grep -c "FIX-002" meta/ROADMAP.md` → **1**. *É o canário da regressão: a versão comprimida não tinha essa referência. **A previsão foi escrita primeiro como `D-001` → 1 e a simulação a refutou** — `D-001` aparece em **3** linhas, porque as notas de revisão novas o citam ao listar o que se havia perdido. `FIX-002` só existe no conteúdo antigo preservado, e por isso é o canário certo.*
- [ ] `test -f logs/2026-09-02.md` → o log do dia está no lugar.
- [ ] **WO só de doc:** não precisa de `build.js` nem de `validate.js` — a rede é o `git diff`.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · desvios do texto literal · arquivos tocados · resultado das nove conferências acima · o commit. Campo do push com o **resultado real**; se ficar pendente, **reabra** este relatório e corrija quando resolver.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/IDEAS.md meta/DECISIONS.md meta/ROADMAP.md logs/2026-09-02.md meta/workorders/260902-wo0107-carta-02-do-satelite-e-regressao-do-roadmap.md
```

```
git commit -m "docs(meta): registra a carta 02 do satelite-web e a regressao do ROADMAP" -m "Tres achados de uso devolvidos pelo satelite-web: a contagem esperada em checklist e armadilha estrutural (erraram as tres vezes que cravaram numero) com a hierarquia comparacao medida maior que piso maior que absoluto previsto; rede de seguranca que ja esta vermelha nao e rede, com baseline declarado e relato por delta; e ao medir a ausencia de um artefato, abrir o artefato antes de concluir por que, que corrige uma conclusao errada da nossa carta 01 a partir de medicao certa. Mais o desfecho do carimbo de versao: o pacote deles era o v1.120.0 carimbado como v1.119.0, e a instrucao ao pe da letra teria descartado o unico pacote disponivel. Registrada tambem a regressao do ROADMAP nesta sessao: a revisao foi entregue como reescrita e perdeu 30 referencias, refeita por edicao cirurgica com zero perdas, e a regra que sai disso. Errata do rotulo de check da wo0106: a ancora da Edicao 6a vive no C40, nao no C38."
```

```
git push
```
