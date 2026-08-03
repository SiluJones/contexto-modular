# WO 0077 — Leitura antes do trabalho: abertura de turno, carimbo `Base:`, falsa confirmação e canal rápido

> **Tipo:** template + harness. Nenhum arquivo de nicho.
> **Config sugerida:** Sonnet 5, esforço **Médio**. Oito edições ancoradas + um check.
> **Pré-requisito:** `v1.97.0`, commit `d423747`, harness **18/18 · 76/76 · 0 erros**.
> **Base:** falha real de 2026-08-02, apurada no chat: o assistente afirmou «a wo0076 você ainda não
> aplicou» **quatro horas depois** de ela ter sido aplicada (commit `d423747`, relatório
> `260802-2239-code-kcm.txt`, 22:39), e entregou uma revisão obsoleta dessa WO.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada edição; se já existir, **PULE**.

> **Canal dos meta neste ciclo = CODE.**

---

## 1. Por que

A falha não veio de regra ausente. **As Instruções já mandavam reler o mount em dois lugares**, um deles
com a frase «Mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa» — lida em
toda mensagem, e desobedecida mesmo assim. O CEREBRO já nomeava os quatro modos de fracasso da releitura,
e a falha foi uma combinação exata de dois deles: *trabalho pedido expulsa ritual não-pedido* (o turno
carregava dois entregáveis, uma auditoria e uma reconstrução de sandbox) e *previsão vestida de
observação* (relatar o estado que o próprio turno anterior previa).

Conclusão: **mais exortação não resolve.** O que faltava eram três coisas mecânicas e uma nova.

**(a) A releitura estava escrita como cerimônia e praticada como cerimônia de SESSÃO.** O texto diz «a
cada turno», mas nada o amarra a um momento; na prática vira abertura de sessão e some no turno pesado —
justamente o turno em que mais importa. Vira **passo de abertura de TURNO, antes de qualquer outra
ferramenta**.

**(b) Campo de verificação genérico é inauditável.** O item «Estado» do bloco de fecho já exigia leitura
fresca e falhou porque **quem lê não tem como saber se o assistente leu ou lembrou**. Uma data que o
próprio usuário gerou, não: ele confere num olhar. Daí o carimbo `Base:` — carimbo inventado é mentira
detectável, campo vago não é.

**(c) O sandbox produz uma falsa confirmação, e isso é novo.** Ao reconstruir o projeto a partir da cópia
que tem e ver as âncoras casarem, o assistente lê isso como «a WO continua válida». É o contrário: se o
trabalho tivesse sido aplicado, a âncora estaria **morta**. O silêncio da âncora é que engana. Este ponto
cego **nasceu de uma boa regra** — «reconstrua e teste antes de entregar a WO» — e precisa vir com o aviso.

**(d) Os dois canais não chegam juntos.** O relatório que a execução grava em arquivo nasce no **instante
da aplicação**; a cópia achatada exige um passo manual de quem a gera. O relatório lidera, sempre. Quando
discordam, o relatório vence — e **a listagem do mount é o único lugar onde a discordância aparece**.

**Custo de teto: negativo.** Uma das duas exortações redundantes foi enxugada para pagar o carimbo. As
Instruções ficam **20 caracteres menores** do que na v1.97.0 e passam a produzir um dado auditável em vez
de repetir um pedido. É a resposta do kit à pergunta «a disciplina está pesando o processo?»: pesa quando
é exortação por turno; não pesa quando é valor produzido uma vez.

---

## Edição 1 — `src/index.template.html` · Instruções: releitura enxuta e antes das ferramentas

**Âncora:**

```
  lines.push("Releia o mount (notas `.txt` + `_MANIFEST.md`) ANTES de responder, nunca de memória — inclusive, e principalmente, quando eu não sinalizo upload. Mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa. São entrada transitória (a fundir nos meta/), não fonte canônica; se não houver, siga.");
```

**Substituir por:**

```
  lines.push("Releia o mount ANTES de responder e de qualquer ferramenta, nunca de memória. Mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa. Nota `.txt` é entrada transitória, a fundir nos meta/; se não houver, siga.");
```

> A frase `Mensagem cheia de pedidos é onde essa releitura mais falha` é asserida pelo **C25** — preserve
> palavra por palavra. Medido: 314 → **235 caracteres** (−79).

## Edição 2 — `src/index.template.html` · Instruções: o `Estado` passa a exigir o carimbo

**Âncora:**

```
    lines.push("- **Fecho do turno** (só o que se aplica): Próximo · Estado · Arquivar/Manter · Config por raia · Handoff. Formato no CEREBRO.");
```

**Substituir por:**

```
    lines.push("- **Fecho do turno** (só o que se aplica): Próximo · Estado (abre com `Base:` — o lido NESTE turno, com data e commit) · Arquivar/Manter · Config por raia · Handoff. Formato no CEREBRO.");
```

> Medido: 126 → **185 caracteres** (+59). Somado à Edição 1: **−20 líquido**. Depois desta WO o C28 deve
> imprimir `padrao 6618/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7519/7600`.

## Edição 3 — `src/index.template.html` · CEREBRO: o item `Estado` descreve o carimbo

**Âncora** (trecho no meio da linha do item «Estado» do bloco de fecho):

```
«Não verifiquei» é desleixo; «não dá para ler daqui» é fato, e o remédio de cada um é diferente.
```

**Substituir por:**

```
**A linha abre com o carimbo `Base:`** — qual arquivo foi lido NESTE turno para saber o estado, com a data que ELE declara e o commit/versão que ELE traz (`Base: _MANIFEST 02/08 23:40 · d423747 · 3 .txt`). Sem cópia achatada, use o que houver: o doc de estado do projeto e a data dele. O carimbo existe porque campo de verificação genérico é inauditável — quem lê não sabe se você leu ou lembrou —, enquanto uma data que o próprio usuário gerou ele confere num olhar. Carimbo inventado é mentira detectável; campo vago não é. «Não verifiquei» é desleixo; «não dá para ler daqui» é fato, e o remédio de cada um é diferente.
```

> Substituição de trecho no MEIO de uma linha muito longa — não substitua a linha inteira.

## Edição 4 — `src/index.template.html` · nova regra de higiene: abertura de turno

**Âncora** (primeira linha da regra da releitura, dentro de `HYGIENE_RULES`):

```
  "A releitura do mount não tem gatilho próprio
```

**Inserir IMEDIATAMENTE ANTES** a linha (é um novo item do array, com a vírgula no fim):

```
  "**Abertura de turno, antes de QUALQUER outra ferramenta:** liste o mount, leia o cabeçalho da cópia achatada se houver (data de geração + estado do repo), e confira a versão viva do artefato principal contra a que você acha que sabe. Um passo, quatro fatos, e só então o trabalho. **Sem cópia achatada nem manifesto** o passo continua valendo com o que houver — a listagem sozinha já mostra nota nova —; o que muda é o carimbo do fecho, que declara a base pobre em vez de fingir precisão. Não é cerimônia de início de SESSÃO: é de TURNO, e o turno pesado é justamente o que a dispensa por conta própria.",
```

## Edição 5 — `src/index.template.html` · a falsa confirmação do sandbox

**Âncora** (fim da regra «A sua cópia não é a fonte da verdade»):

```
Não «corrija» data de arquivo entregue, nem renomeie WO/análise por causa de atraso.
```

**Substituir por:**

```
Não «corrija» data de arquivo entregue, nem renomeie WO/análise por causa de atraso. **E cuidado com a falsa confirmação:** reconstruir o projeto em sandbox a partir da cópia que você tem NÃO é verificação de estado. Âncora que ainda casa prova que a sua cópia é velha, não que o trabalho está pendente — se o trabalho tivesse sido aplicado, a âncora estaria morta, e é o silêncio dela que engana. Antes de reconstruir, compare a versão do artefato copiado com o estado declarado no cabeçalho da cópia; divergiram, a cópia está atrasada e nenhuma conclusão sobre pendência vale.
```

## Edição 6 — `src/index.template.html` · qual canal vence

**Âncora** (fim da regra dos quatro modos de falha da releitura):

```
O antídoto é sempre o mesmo: o gatilho mora no gesto, não no apêndice — se você está prestes a afirmar estado, essa é a hora de ler.
```

**Substituir por:**

```
O antídoto é sempre o mesmo: o gatilho mora no gesto, não no apêndice — se você está prestes a afirmar estado, essa é a hora de ler. **E os canais não chegam juntos:** relatório que a execução grava em arquivo nasce no instante da aplicação, enquanto a cópia achatada exige um passo manual de quem a gera. O relatório lidera, sempre. Quando os dois discordam, **o relatório vence e a cópia está atrasada** — e a listagem do mount é o único lugar onde essa discordância aparece.
```

## Edição 7 — `src/index.template.html` · bump

**Âncora:**

```
const KIT_VERSION = "1.97.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.98.0";
```

## Edição 8 — `validate.js` · check C33

**Âncora** (primeira linha do check C32):

```
check("C32 anatomia do bloco gerado (wo0076): cinco regras + duas obrigacoes no CEREBRO, marcadores nao citados em comentario, Arquivos Criticos no CONTEXT, P11 com a metade estrutural", () => {
```

**Inserir IMEDIATAMENTE ANTES** o bloco (com uma linha em branco entre ele e o C32):

```
check("C33 leitura antes do trabalho (wo0077): abertura de turno antes de qualquer ferramenta, carimbo Base no Estado, falsa confirmacao do sandbox, canal rapido do relatorio", () => {
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const ins=T.buildInstr(n), cmd=T.buildClaudeMd(n);
    assert(/abre com `Base:`/.test(ins), id+": Instrucoes nao exigem o carimbo Base no Estado (exortacao sem valor produzido nao pega)");
    assert(/NESTE turno/.test(ins), id+": o carimbo nao amarra a leitura ao turno corrente");
    assert(/ANTES de responder e de qualquer ferramenta/.test(ins), id+": Instrucoes nao poem a releitura ANTES das ferramentas");
    assert(/Abertura de turno, antes de QUALQUER outra ferramenta/.test(cmd), id+": CEREBRO sem o passo de abertura de turno");
    assert(/Sem cópia achatada nem manifesto/.test(cmd), id+": o passo de abertura nao degrada para projeto sem copia achatada");
    assert(/é de TURNO/.test(cmd), id+": CEREBRO nao distingue cerimonia de sessao de gatilho de turno");
    assert(/falsa confirmação/.test(cmd), id+": CEREBRO sem a regra da falsa confirmacao do sandbox");
    assert(/Âncora que ainda casa prova que a sua cópia é velha/.test(cmd), id+": CEREBRO nao explica por que a ancora que casa engana");
    assert(/o relatório vence e a cópia está atrasada/.test(cmd), id+": CEREBRO nao diz qual canal vence quando discordam");
    assert(/A linha abre com o carimbo/.test(cmd), id+": CEREBRO nao descreve o carimbo Base");
    assert(/confere num olhar/.test(cmd), id+": CEREBRO nao diz POR QUE o carimbo e auditavel (razao de existir)");
  });
  return "ok";
});
```

---

## Fora de escopo

- **Não** acrescentar uma terceira exortação sobre releitura em lugar nenhum. Havia duas, e as duas
  falharam; esta WO **troca prosa por valor produzido**, não soma texto.
- **Não** mexer nos outros quatro campos do bloco de fecho. A observação de que três deles raramente
  carregam informação real é verdadeira e **não foi medida** — vai para o IDEAS, não para esta WO.
- **Não** criar check que tente verificar comportamento do assistente. O harness garante que o texto
  exista nos 18; obediência não é testável daqui, e fingir que é seria pior que admitir.
- **Não** tocar em `src/niches/*`.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF**; `validate.js` é **LF**.
- **C25 depende de duas frases desta WO.** A Edição 1 preserva
  `Mensagem cheia de pedidos é onde essa releitura mais falha`; se o C25 ficar vermelho, foi aí.
- **A Edição 4 insere um item de array**, não uma linha de `L.push`. A vírgula final faz parte do texto.
- **Edições 3, 5 e 6 substituem trecho no MEIO de linhas longas.** Case a frase-âncora, nunca a linha.
- **Teto:** esta é a primeira WO em várias levas que **toca as Instruções**. O saldo previsto é −20; se o
  C28 imprimir número maior que `6618`, alguma edição entrou fora do lugar.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra: `src/index.template.html`, `validate.js`, `index.html` e os `meta/`. Nada além.
- [ ] `node build.js` e `node validate.js index.html` → **18/18 nichos · 77/77 checagens · 0 erros**.
- [ ] C28 deve imprimir
      `padrao 6618/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7519/7600`.
- [ ] Gere o CEREBRO de um nicho qualquer e leia a regra nova de abertura de turno inteira: ela precisa
      dizer o que fazer **quando não há cópia achatada** (projeto sem FlatDrop é caso normal, não exceção).

## Ao terminar — registros (canal CODE)

- `meta/DECISIONS.md`: **D-111** — «a releitura do mount deixa de ser exortação e passa a produzir um
  carimbo auditável pelo usuário; abertura de turno vira passo anterior a qualquer ferramenta; o sandbox
  ganha aviso de falsa confirmação; fica declarado que o relatório em arquivo lidera a cópia achatada».
  Registre a falha que originou tudo, com datas: wo0076 aplicada às **22:39** (`d423747`), relatório
  automático em `260802-2239-code-kcm.txt`, e o assistente afirmando **no turno seguinte** que ela não
  tinha sido aplicada — sem ter listado o mount uma única vez naquele turno. Registre também o
  diagnóstico: **as Instruções já mandavam, em dois lugares, e isso não bastou**.
- `meta/CHANGELOG.md`: **v1.98.0** no topo.
- `meta/STATUS.md`: append na sessão atual, versão para `v1.98.0`, harness `18/18 · 77/77`, e os números
  novos de teto.
- `meta/IDEAS.md` — **corrigir a `i-N54`**: ela está como **ABERTA com gatilho de retorno** e a auditoria
  já foi feita (2026-08-02) e a **refutou**. Mova para «Descartadas» com o motivo medido: o kit tem
  exatamente DOIS templates universais (`IDEAS.md` e `HUB.md`); o `HUB.md` não tem nenhum override; o
  `IDEAS.md` tinha dois (`dev`, `brainstorm`), fechados pela wo0075 e travados pelo C31; `STATUS.md`,
  `CONTEXT.md`, `DECISIONS.md` e `LOG-TEMPLATE.md` são por nicho **de propósito** (17 versões distintas
  do `LOG-TEMPLATE`). Não há população para varrer.
- `meta/IDEAS.md` — **ideia nova, com gatilho**: «medir quantos dos cinco campos do bloco de fecho
  carregam informação real no turno típico. Suspeita: dois carregam e três são preenchidos por obrigação
  — e formato preenchido por obrigação treina a preencher sem ler, que é o modo de falha já nomeado no
  próprio kit. **Gatilho:** quando o carimbo `Base:` tiver rodado por ~10 turnos e der amostra.»
- `meta/IDEAS.md`, «Feedback para o Kit» — **errata da mensagem enviada ao FlatDrop em 2026-08-02**: ela
  afirma que a v1.97.0 «aguarda aplicação pela wo0076» (já estava aplicada quando a mensagem foi escrita)
  e que a auditoria foi «registrada como descartada com motivo» (estava como aberta até esta WO). A
  segunda vira verdade aqui; a primeira precisa de uma linha de correção na próxima mensagem à frente.

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · build/validate · commit. Grave em
`../AAMMDD-HHMM-code-kcm.txt`. **E diga o estado do push do `d423747`** — o relatório da wo0076 registrou
que ele ficou aguardando confirmação.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/
```

```
git commit -m "feat(kit): leitura antes do trabalho — abertura de turno, carimbo Base, falsa confirmacao e canal rapido (wo0077, D-111)" -m "A releitura do mount deixa de ser exortacao repetida e passa a produzir um carimbo que o usuario audita num olhar. Abertura de turno vira passo anterior a qualquer ferramenta, com degradacao para projeto sem copia achatada. Sandbox ganha aviso de falsa confirmacao. Fica declarado que o relatorio em arquivo lidera a copia achatada. Instrucoes ficam 20 caracteres MENORES. Check C33. Bump 1.98.0."
```

```
git push
```
