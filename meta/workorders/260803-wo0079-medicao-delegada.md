# WO 0079 — Medição delegada: quem tem o disco mede, quem tem o contexto decide

> **Tipo:** template + harness. Nenhum arquivo de nicho.
> **Config sugerida:** Sonnet 5, esforço **Médio**. Sete edições ancoradas + um check.
> **Pré-requisito:** `v1.99.0`, commit `970e5a3`, harness **18/18 · 78/78 · 0 erros**, árvore limpa e
> sincronizada com `origin/main`.
> **Base:** `IDEAS-mapsmith.md`, «Feedback para o Kit», item (5). Leva **B de 4**.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada edição; se já existir, **PULE**.

> **Canal dos meta neste ciclo = CODE.**

---

## 1. Por que

**As duas raias têm limites opostos e o kit nunca disse o que fazer com isso.** A raia de planejamento
tem teto de contexto e enxerga só o que chega pelo mount; a raia de execução lê o disco inteiro e não
tem nenhum dos dois limites. Quando o dado que falta é **estado de arquivo** — quantas linhas, quais
chaves, que dimensão, se existe —, o assistente hoje faz uma de três coisas erradas: pede upload de um
arquivo que não cabe, escreve um script para o dono rodar, ou **deduz** e escreve caminho com `...` no
meio.

Uma frente irmã descobriu a saída por tentativa e erro ao longo de 2026-08-01/02 e quantificou o custo
de não tê-la escrita: **três instruções erradas em dois dias, todas por afirmar estado de arquivo em vez
de mandar medir.** A técnica que funcionou foi simplesmente instruir o executor a medir e reportar os
números — e foi o que fez o chat parar de inventar caminho.

Isto é primo direto da D-111. Lá, o assistente afirmou estado de um arquivo **que tinha e não leu**;
aqui, de um arquivo que **não cabe no canal**. Superfícies diferentes, mesma doença: estado deduzido
apresentado como observado. A D-111 instalou o carimbo de leitura; esta WO instala a delegação.

**Três desenhos aqui divergem da proposta da frente irmã, de propósito:**

1. **O pedido de medição não é arquivo, nem ordem de trabalho, nem comando novo.** Eles sugeriram uma
   seção no modelo de WO. Mas o caso real é a medição vir **antes** de existir WO — o chat precisa dos
   números *para escrever* a ordem. Medição que só cabe dentro de uma WO obriga a escrever a WO sem os
   números, que é o erro a evitar. Fica **bloco colável**, sem arquivo e sem pasta — coerente com a
   D-112, que já decidiu que nem tudo que se troca vira artefato. A seção no modelo existe, mas só para
   o caso restrito de medir **na hora de aplicar**.
2. **O gatilho é condicional ao Modo Code.** Sem executor com acesso a disco não há a quem delegar; a
   linha em projeto sem Modo Code seria conselho impossível de seguir. O check falha se ela vazar.
3. **Acrescentei uma quinta parte que eles não pediram: onde o número pousa.** É a D-112 aplicada — lá,
   achado sem endereço virava pergunta; aqui é pior: **número medido e não registrado volta a ser
   deduzido no turno seguinte**, e a medição inteira se perde.

**Custo de teto: negativo no bloco do Modo Code.** As Edições 1 e 2 enxugam duas linhas que diziam a
mesma coisa com mais palavras, e pagam o gatilho novo com sobra: `+Code` sai de **529/550** para
**522/550**, e o combo de 7519 para **7512/7600**. O bloco ganha uma regra e fica com mais folga do que
tinha.

---

## Edição 1 — `src/index.template.html` · enxugar a linha do Commit (paga o gatilho)

**Âncora** (trecho dentro da linha do Modo Code):

```
**Commit:** ao concluir mudança versionada, ENTREGUE o `git commit` pronto, em bloco SEPARADO para copiar isolado, mensagem sem acento. Bloco git parcial (só `add`) não serve: ou os três em ordem, ou só o `commit`.
```

**Substituir por:**

```
**Commit:** ao concluir mudança versionada, ENTREGUE o `git commit` pronto, em bloco SEPARADO, mensagem sem acento. Bloco git parcial (só `add`) não serve: os três em ordem, ou só o `commit`.
```

> `Bloco git parcial` é asserido pelo **C22** e pelo **C26** — preservado. Nada de sentido se perde: «em
> bloco SEPARADO» já implica copiar isolado, e «ou… ou» vira lista.

## Edição 2 — `src/index.template.html` · enxugar a linha de entregáveis (paga o resto)

**Âncora:**

```
**Entregáveis de repo (sem eu pedir):** `.gitignore` adequado ao stack na PRIMEIRA leva que criar estrutura; `README.md` quando a estrutura estabilizar — se for cedo, DIGA que está adiando e por quê. Detalhe no CEREBRO.
```

**Substituir por:**

```
**Entregáveis de repo (sem eu pedir):** `.gitignore` do stack na PRIMEIRA leva com estrutura; `README.md` quando ela estabilizar — se for cedo, DIGA e por quê. Detalhe no CEREBRO.
```

> O rótulo `**Entregáveis de repo (sem eu pedir):**` é asserido por check — preservado palavra por
> palavra.

## Edição 3 — `src/index.template.html` · gatilho no bloco do Modo Code

**Âncora** (linha inteira; repare no `if(codeModeOn())` no começo):

```
  if(codeModeOn()) lines.push("**WO nunca vai sozinha:** entregue junto a linha `/apply-wo <arquivo>` para eu colar no Code.");
```

**Substituir por** (duas linhas, ambas condicionadas ao modo):

```
  if(codeModeOn()) lines.push("**Arquivo não lido não se deduz — mande o Code medir.**");
  if(codeModeOn()) lines.push("**WO nunca vai sozinha:** entregue junto a linha `/apply-wo <arquivo>` para eu colar no Code.");
```

> **O `if(codeModeOn())` na linha nova não é enfeite:** sem executor não há a quem delegar, e o C35 falha
> se a linha aparecer fora do Modo Code.

## Edição 4 — `src/index.template.html` · seção nova no CEREBRO

**Âncora:**

```
  L.push("## Bloco de fecho de turno (formato fixo)");
```

**Substituir por** (o bloco inteiro abaixo — a âncora reaparece na última linha):

```
  L.push("## Medição delegada (quem tem o disco mede, quem tem o contexto decide)");
  L.push("");
  L.push("A raia de planejamento tem teto de contexto e lê só o que chega pelo mount; a raia de execução lê o disco inteiro e não tem nenhum dos dois limites. Quando o dado que falta é **estado de arquivo** — quantas linhas, quais chaves, que dimensão, se existe —, a saída não é pedir upload de um arquivo grande nem escrever um script para o dono rodar: é **mandar medir**.");
  L.push("");
  L.push("- **A regra:** quem tem acesso ao disco mede, quem tem contexto decide. Nunca afirme estado de arquivo que você não leu — nem para justificar uma escolha, nem para escrever caminho «mais ou menos certo». Caminho com `...` no meio é o sintoma clássico de estado deduzido.");
  L.push("- **O pedido de medição não é ordem de trabalho.** Não tem âncora, não tem edição, não tem commit e não muda arquivo nenhum. É bloco colável, entregue como qualquer instrução ao executor — não crie arquivo nem pasta para ele. Se virar ordem de trabalho, você já estará escrevendo a ordem sem os números que ela precisava, que é exatamente o erro que a medição evita.");
  L.push("- **Peça número cru, não interpretação.** Diga o comando ou o que contar, e peça de volta o valor e o comando que o produziu. Executor que interpreta devolve opinião no lugar de dado — e opinião de quem mediu é a mais difícil de contestar depois, porque parece medida.");
  L.push("- **Dados fora da raiz exigem permissão.** Se o material a medir vive ao lado do repositório e não dentro dele, o executor precisa de `permissions.additionalDirectories` no `.claude/settings.json` — a mesma chave que libera gravar o relatório na pasta-pai, agora para ler.");
  L.push("- **Onde o número pousa.** No relatório da execução, sempre. Se ele mudar uma decisão, também no registro de decisões; se ele revelar um risco, nas armadilhas da ordem de trabalho. Número medido e não registrado volta a ser deduzido no turno seguinte.");
  L.push("");
  L.push("## Bloco de fecho de turno (formato fixo)");
```

## Edição 5 — `src/index.template.html` · seção de medição prévia no modelo de WO

**Âncora** (linha do array do modelo de ordem de trabalho):

```
    "## Armadilhas desta WO",
```

**Substituir por:**

```
    "## Medicao previa *(so quando houver; nao e edicao)*",
    "",
    "[So quando esta WO depender de um numero que a raia de planejamento nao pode ler. Diga O QUE contar e o",
    "comando sugerido; peca de volta o valor e o comando que o produziu, sem interpretacao. Isto NAO tem ancora,",
    "NAO tem commit e NAO muda arquivo — se a medicao contrariar o que a WO assume, PARE antes de editar e relate.]",
    "",
    "## Armadilhas desta WO",
```

> A âncora `"## Armadilhas desta WO",` aparece **uma vez** no template. Se aparecer mais, PARE.

## Edição 6 — `src/index.template.html` · o kit do Code aprende a responder

**Âncora** (linha do array do `claudeMd` em `buildCodeKitFiles()`):

```
    "## Relatório em arquivo (sempre, sem pedir)",
```

**Substituir por:**

```
    "## Quando eu pedir medição",
    "- Eu leio só o que chega pelo mount; você lê o disco. Se eu pedir para **medir**, o pedido não tem âncora nem commit: não edite nada, não conserte nada, não sugira nada.",
    "- Responda com o **número cru e o comando que o produziu**. Sem interpretação, sem recomendação — se você achar que o número indica um problema, diga o número primeiro e a suspeita depois, separada.",
    "- Se o alvo estiver fora da raiz do repositório, isso depende de `permissions.additionalDirectories` no `.claude/settings.json` (a mesma chave do relatório em arquivo). Se a leitura for negada, DIGA — não estime.",
    "",
    "## Relatório em arquivo (sempre, sem pedir)",
```

## Edição 7 — `src/index.template.html` · bump

**Âncora:**

```
const KIT_VERSION = "1.99.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.100.0";
```

## Edição 8 — `validate.js` · check C35

**Âncora** (primeira linha do check C34):

```
check("C34 degrau de saida do funil de analise (wo0078): teste de quem decide, achado vira armadilha da WO, saida do CRLF, mensagem entre frentes nao vira pasta", () => {
```

**Inserir IMEDIATAMENTE ANTES** o bloco (com uma linha em branco entre ele e o C34):

```
check("C35 medicao delegada (wo0079): secao no CEREBRO dos 18, gatilho SO no modo Code, secao sem ancora no modelo de WO, formato de retorno no kit do Code", () => {
  Object.keys(T.NICHES).forEach(id => {
    const cmd=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/## Medição delegada/.test(cmd), id+": CEREBRO sem a secao de medicao delegada");
    assert(/quem tem acesso ao disco mede, quem tem contexto decide/.test(cmd), id+": CEREBRO sem a regra de quem mede e quem decide");
    assert(/O pedido de medição não é ordem de trabalho/.test(cmd), id+": CEREBRO nao separa medicao de ordem de trabalho");
    assert(/Peça número cru, não interpretação/.test(cmd), id+": CEREBRO nao exige numero cru no retorno");
    assert(/permissions\.additionalDirectories/.test(cmd), id+": CEREBRO nao cita a permissao para medir fora da raiz");
    assert(/Número medido e não registrado volta a ser deduzido/.test(cmd), id+": CEREBRO nao diz onde o numero pousa");
  });
  const n=T.normNiche(T.NICHES.dev);
  T.STATE.workmode = T.STATE.workmode || {};
  const prev=T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode="yes"; const insC=T.buildInstr(n);
  T.STATE.workmode.codeMode="no";  const insN=T.buildInstr(n);
  T.STATE.workmode.codeMode=prev;
  assert(/Arquivo não lido não se deduz/.test(insC), "Instr do modo Code sem o gatilho da medicao delegada");
  assert(!/Arquivo não lido não se deduz/.test(insN), "gatilho da medicao vazou para fora do modo Code (sem executor nao ha a quem delegar)");
  const raw=fs.readFileSync(path,"utf8");
  assert(/## Medicao previa/.test(raw), "modelo de WO sem a secao de medicao previa");
  assert(/NAO tem ancora/.test(raw), "modelo de WO nao diz que medicao nao tem ancora nem commit");
  const kit=T.buildCodeKitFiles();
  assert(/## Quando eu pedir medição/.test(kit.claudeMd), "CLAUDE.md do kit nao ensina a responder um pedido de medicao");
  assert(/número cru e o comando que o produziu/.test(kit.claudeMd), "kit do Code nao exige numero cru + comando");
  return "ok";
});
```

---

## Fora de escopo

- **Não** criar arquivo, pasta, skill ou comando novo para o pedido de medição. Ele é bloco colável,
  por decisão desta WO — ver o §1.
- **Não** mexer no `/wrap` (contagem repetida no STATUS) — leva C.
- **Não** decidir sobre o `_TEMPLATE.md` de `analises/` no pacote nem sobre IDEAS por ID — leva D.
- **Não** aumentar o orçamento de 550 do bloco Modo Code. A Edição 3 é paga pelas Edições 1 e 2; se a
  conta não fechar, o problema está nas edições, não no teto.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF**; `validate.js` é **LF**. Toda âncora é de uma linha ou de trecho
  dentro de uma linha.
- **Edição 3 troca UMA linha por DUAS**, e a segunda é a original inalterada. Se o `if(codeModeOn())`
  sumir da linha nova, o C35 fecha — e com razão.
- **Edições 4, 5 e 6 repetem a âncora no fim da substituição.** Não a apague: o bloco novo entra *antes*
  dela.
- **Ordem importa nas Edições 1 e 2:** elas pagam pela 3. Aplicadas fora de ordem o build continua
  funcionando, mas se você aplicar só a 3 e parar, o C28 fecha com `+Code 574>550`.
- **Teto:** o `padrao` **não muda** (6618/6900) — nenhuma edição toca a parte comum das Instruções.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra: `src/index.template.html`, `validate.js`, `index.html` e os `meta/`. Nada além.
- [ ] `node build.js` e `node validate.js index.html` → **18/18 nichos · 79/79 checagens · 0 erros**.
- [ ] C28 deve imprimir
      `padrao 6618/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7512/7600`.
      O `+Code` tem de ficar **menor** que os 529 da v1.99.0 — se subiu, as Edições 1 e 2 não entraram.
- [ ] Leia o modelo de WO gerado e confirme que a seção `## Medicao previa` fica **antes** de
      `## Armadilhas desta WO`, com o colchete bem fechado na última linha.

## Ao terminar — registros (canal CODE)

- `meta/DECISIONS.md`: **D-113** — «medição delegada: quem tem acesso ao disco mede, quem tem contexto
  decide; o pedido de medição é bloco colável, sem âncora, sem commit e sem arquivo; retorno em número
  cru; `additionalDirectories` também habilita leitura fora da raiz; o número medido tem de pousar em
  registro». Registre a evidência da frente irmã (três instruções erradas em dois dias) e o parentesco
  com a D-111 — mesma doença, superfícies diferentes. Registre também os três desvios deliberados em
  relação ao que a frente propôs, com o motivo de cada um.
- `meta/CHANGELOG.md`: **v1.100.0** no topo.
- `meta/STATUS.md`: append na sessão atual, versão para `v1.100.0`, harness `18/18 · 79/79`, e os números
  novos de teto.
- `meta/IDEAS.md`, «Feedback para o Kit»: marcar o item (5) do Mapsmith como **implementado**, anotando
  os três desvios de desenho. Deixar registradas as levas **C** (o `/wrap` deve conferir a contagem
  repetida em todo o `STATUS.md`, não só no cabeçalho) e **D** (o `_TEMPLATE.md` de `analises/` no pacote
  de update; a linha da válvula de desvio para IDEAS por status+ID).
- `meta/IDEAS.md`, ideia nova **com gatilho**: «o orçamento do bloco Modo Code fechou em 522/550 depois
  de duas linhas enxugadas para pagar uma nova. O padrão «cada linha nova paga a própria entrada
  enxugando outra» funcionou duas vezes seguidas (wo0077 e wo0079) e ainda não é regra escrita.
  **Gatilho:** na terceira vez, transformar em regra do refino de Instruções.»

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · build/validate · commit. Grave em
`../AAMMDD-HHMM-code-kcm.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/
```

```
git commit -m "feat(kit): medicao delegada — quem tem o disco mede, quem tem o contexto decide (wo0079, D-113)" -m "A raia de planejamento passa a mandar medir em vez de deduzir estado de arquivo que nao cabe no canal. O pedido de medicao e bloco colavel: sem ancora, sem commit, sem arquivo. Retorno em numero cru mais o comando que o produziu. additionalDirectories documentado tambem para leitura fora da raiz. O numero medido tem de pousar em registro, senao volta a ser deduzido. Gatilho condicionado ao Modo Code, pago pelo enxugamento de duas linhas: +Code cai de 529 para 522. Check C35. Bump 1.100.0."
```

```
git push
```
