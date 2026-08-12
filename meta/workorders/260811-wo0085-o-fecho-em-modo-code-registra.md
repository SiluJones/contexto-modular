# WO 0085 — O fecho em modo Code registra em vez de listar

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. As sete edições são mecânicas — âncora exata, texto pronto —, mas duas delas trocam uma linha por um ternário multi-linha e exigem atenção ao CRLF (ver Armadilhas).
> **Pré-requisito:** `KIT_VERSION 1.105.0`, commit `6bc5c8f`, `main` limpo, harness **18/18 · 84/84 · 0 erros**.
> **Base:** `meta/analises/260811-ANALISE-o-fecho-em-modo-code.md` — **opção (C)**, aprovada pelo autor em 2026-08-11. Origem do material: Mapsmith, `IDEAS.md` §«Feedback para o Kit», itens **(6)** e **(8)**; notas `260809-2135.txt`, `260809-2148.txt`, `260810-0702.txt`, `260810-0719.txt`, `260810-0730.txt`.
> **Depende de:** nada. Não conflita com a análise irmã (`260811-ANALISE-a-conferencia-sai-do-artefato.md`), que segue sem decisão e não toca nenhum destes pontos.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte** — não chute um lugar próximo.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** o item e diga no relatório — não duplique.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique os appends das Edições 8 e 9 e não espere documento do chat. As duas análises já estão no repo como arquivos entregues pelo chat; esta WO só as versiona.

---

## 1. Por que

**O prompt de fecho do kit produziu um fecho incompleto num projeto real, e o custo foi pago duas vezes.** Em 2026-08-09 uma conversa de cinco dias encerrou **listando** sete pendências de registro em vez de executá-las, e passou os cinco dias **sem escrever um único log**. A conversa seguinte gastou um turno re-derivando contexto e anunciou um `STATUS.md` que nunca chegou. O autor teve de **reabrir a conversa antiga** para que ela fizesse o fecho que devia ter feito. Uma terceira conversa abriu contra um STATUS que apontava para uma análise **que nunca existiu**.

Quatro causas, nenhuma delas «esqueceu»:

- **(a)** «Não regenere os arquivos de contexto» foi aplicado a um documento que **não existia**. A regra existe para não haver dois escritores no mesmo arquivo; um log que ninguém escreveu não tem escritor nenhum. Escrevê-lo não é regenerar, é criar.
- **(b)** O critério de aceite está invertido: o prompt pede «liste o que ainda falta registrar». **Um fecho bom tem essa lista vazia.**
- **(c)** O log do dia pende de «fim da conversa», e numa conversa de planejamento longa o fim nunca chega — cada turno tem uma frente seguinte.
- **(d)** Fatos que o autor relatou no chat («os ícones deram RGBA nos dois mapas») nunca chegaram ao repositório, e a conversa seguinte travou entre um handoff que dava o defeito por fechado e um STATUS que o dava por aberto.

**Dois achados desta análise que não estavam no feedback**, os dois lidos no fonte:

1. **O ramo `codeModeOn()` do prompt E é o único que não nomeia o log do dia** — o ramo sem executor diz, textualmente, «incluindo o log `logs/AAAA-MM-DD.md`». O log sumiu exatamente na configuração que tinha **duas** mãos capazes de escrevê-lo, porque o prompt não pedia a nenhuma.
2. **A regra geral de fecho é cega ao modo.** «Entregue cada documento afetado INTEIRO (…) nunca blocos soltos para colar à mão» é emitida em `buildInstr` e `buildClaudeMd` sem consultar `codeModeOn()`. Num projeto com executor isso é o **oposto** do certo: o bloco cirúrgico com âncora *é* o artefato correto, chama-se WO, e o kit o documenta três seções acima. A regra e o método do próprio kit se contradiziam.

## 2. Contexto factual

Fatos que os textos abaixo afirmam. **Tudo medido** em sandbox (repo reconstruído do mount, `node build.js` reproduzindo o `index.html` byte a byte — 784.473 — e `node validate.js` verde antes de qualquer edição), exceto onde marcado.

- Orçamento do modo Code na v1.105.0: **522/550** — **28 caracteres de folga**, o mais apertado dos três baldes.
- Acrescentar um ramo Code **somando** ao texto universal: incremento vai a **558/550** → **C28 vermelho**. Medido.
- Escrevendo como **substituição** (o texto universal não vale em modo Code): **514/550**. Custo **negativo**: −8 no incremento, −8 no combo.
- Nenhuma das 84 checagens quebrou quando a frase universal foi substituída no ramo Code — o texto de fecho **não era vigiado por ninguém**. Daí o C41 da Edição 7.
- `buildWoTemplate`, `HYGIENE_RULES`, `TRIGGERS_BASE` e os prompts **não passam** por `buildInstr` — custo de teto zero.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.105.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.106.0";
```

---

## Edição 2a — `src/index.template.html` · `buildInstr`, título do fecho ramifica por modo

**Âncora** (dentro de `buildInstr`, no bloco `if(outOn.length)`):

```
    lines.push("## Ao final da conversa, entregue arquivos completos");
```

**Substituir por:**

```
    lines.push(codeModeOn() ? "## Ao final da conversa, REGISTRE o que falta (não liste)" : "## Ao final da conversa, entregue arquivos completos");
```

## Edição 2b — `src/index.template.html` · `buildInstr`, corpo do fecho ramifica por modo

> **Aplique a 2a ANTES da 2b.** Depois da 2b, a âncora da 2a deixa de existir na forma citada.

**Âncora** (a linha imediatamente seguinte à da Edição 2a):

```
    lines.push("Entregue cada documento afetado INTEIRO e atualizado (arquivo novo para baixar e substituir o antigo), nunca blocos soltos para colar à mão. Aplicar é decisão do usuário. Detalhes e exceções no CEREBRO.md.");
```

**Substituir por** (cinco linhas; o texto universal vira o ramo `else`, **não** desaparece):

```
    lines.push(codeModeOn()
      ? "Registre AQUI, não liste para depois: doc grande por WO (com a linha `/apply-wo`), arquivo novo ou pequeno inteiro, e o log do dia SEMPRE. A lista termina vazia. Regenerar × criar: CEREBRO.md."
      : "Entregue cada documento afetado INTEIRO e atualizado (arquivo novo para baixar e substituir o antigo), nunca blocos soltos para colar à mão. Aplicar é decisão do usuário. Detalhes e exceções no CEREBRO.md.");
```

---

## Edição 3a — `src/index.template.html` · `buildClaudeMd`, título da seção de fecho

**Âncora:**

```
    L.push("## Ao final da conversa, o assistente entrega (como arquivos completos)");
```

**Substituir por:**

```
    L.push(codeModeOn() ? "## Ao final da conversa, o assistente REGISTRA o que falta" : "## Ao final da conversa, o assistente entrega (como arquivos completos)");
```

## Edição 3b — `src/index.template.html` · `buildClaudeMd`, corpo da seção de fecho

> **Aplique a 3a ANTES da 3b.**

**Âncora:**

```
    L.push("Cada arquivo abaixo vem INTEIRO e atualizado, pronto para você baixar e substituir o antigo. Aplicá-los é decisão sua:");
```

**Substituir por** (o texto antigo vira o ramo `else`, intacto):

```
    if(codeModeOn()){
      L.push("**A regra geral — «entregue tudo inteiro» — foi escrita para projeto SEM executor, onde regenerar é a única saída. Aqui ela se inverte:** com um executor no repositório, o registro do fecho é **WO cirúrgica**, e reescrever um documento grande no fim de uma conversa pesada é justamente onde se perde conteúdo.");
      L.push("");
      L.push("- **Registrar é o entregável; listar não é.** «O que ainda falta registrar» é o inventário da dívida, não o pagamento dela. Um fecho bom termina com essa lista **vazia** — e o que ficou de fora vira WO agora, nesta conversa, não recado para a próxima.");
      L.push("- **Regenerar ≠ criar.** «Não regenere os arquivos de contexto» existe para não haver dois escritores no mesmo documento. Um arquivo que **não existe** não tem escritor nenhum: escrevê-lo não é regenerar, é criar — e é obrigatório. O log do dia é o caso que mais se perde por essa confusão.");
      L.push("- **Qual canal para qual documento.** Documento grande e vivo → **WO** em `meta/workorders/`, com o texto exato de cada inserção e a linha `/apply-wo` junto. Arquivo **novo**, pequeno, ou que precise de curadoria que reescreve → **inteiro, para baixar**. Nunca os dois no mesmo ciclo para o mesmo documento.");
      L.push("- **Nunca empurre bloco para o usuário colar no executor.** A caixa de mensagem dele tem limite de caracteres — é a razão de a WO existir. Bloco colável só para o que não tem âncora nem commit (um pedido de medição, por exemplo).");
      L.push("");
      L.push("Os arquivos abaixo continuam sendo os afetados por este trabalho — o que muda é o canal de cada um, não a obrigação de registrar:");
    } else {
      L.push("Cada arquivo abaixo vem INTEIRO e atualizado, pronto para você baixar e substituir o antigo. Aplicá-los é decisão sua:");
    }
```

---

## Edição 4 — `src/index.template.html` · prompt E, ramo Code

**Âncora** (dentro de `PROMPTS_BASE`, prompt `id:"E"`, no bloco `if(codeModeOn())`):

```
        L.push("- Em vez disso: liste o que ainda falta registrar (o append que o Code deve fazer) e garanta que está tudo **commitado e enviado** — o repo é o que a próxima conversa vai ler.");
```

**Substituir por:**

```
        L.push("- **Mas regenerar é diferente de criar.** Documento que já existe: não reescreva. Documento que NÃO existe — o log do dia é o caso típico — escreva agora; não há dois escritores num arquivo que ninguém escreveu.");
        L.push("- Em vez de listar o que falta registrar: **REGISTRE**. O que for delta em documento grande vai como **WO** em `meta/workorders/`, com o texto exato de cada inserção e a linha `/apply-wo` junto; o que for arquivo novo ou pequeno vem inteiro para eu baixar. Não me devolva bloco para eu colar no Code — a caixa dele tem limite, e é por isso que a WO existe.");
        L.push("- Ao final, me mostre a lista do que ficou por registrar. **Ela deve estar vazia** — se não estiver, o fecho não terminou.");
        L.push("- Garanta que está tudo **commitado e enviado** — o repo é o que a próxima conversa vai ler.");
        L.push("- Fato que eu relatei no chat e que não está em arquivo nenhum ainda (uma medição, uma confirmação, um envio) **não existe para a próxima conversa**: registre-o marcando a origem — `[relatado pelo dono]` é diferente de `[medido por instrumento]`.");
```

---

## Edição 5 — `src/index.template.html` · `TRIGGERS_BASE`, gatilho de evento do log

**Âncora** (última entrada do array):

```
  ["Fim da conversa", "Entrega os arquivos completos afetados: STATUS.md + CHANGELOG.md (se fechou algo) + log do dia."],
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
  ["Evento que MERECE log: cortar versao, registrar uma decisao ou um bug grave, virar o dia de trabalho", "Escreve `logs/AAAA-MM-DD.md` na hora. O log nao espera o fim da conversa — numa conversa longa o fim nunca chega, e e assim que dias inteiros ficam sem registro."],
```

---

## Edição 6 — `src/index.template.html` · `buildClaudeMd`, origem do fato na «Medição delegada»

**Âncora** (última linha da seção):

```
  L.push("- **Onde o número pousa.** No relatório da execução, sempre. Se ele mudar uma decisão, também no registro de decisões; se ele revelar um risco, nas armadilhas da ordem de trabalho. Número medido e não registrado volta a ser deduzido no turno seguinte.");
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
  L.push("- **Fato que o usuário relata no chat não existe até estar num arquivo — e a origem vai junto.** `[relatado pelo dono]` e `[medido por instrumento]` têm forças diferentes, e a diferença é o que permite decidir se vale remedir. Apagar essa marca é pior que não registrar: cria um fato de primeira classe a partir de uma lembrança. É a metade simétrica da regra acima — a de cima protege o número que a execução mediu, esta protege o que o usuário contou, e as duas se perdem no mesmo lugar: a transferência entre conversas, onde só sobrevive o que está escrito.");
```

---

## Edição 7 — `validate.js` · check C41

**Âncora** (início do C40 — inserir o bloco **imediatamente ANTES** desta linha, seguido de uma linha em branco):

```
check("C40 vocabulario turno x conversa + o prompt de update alcanca projeto desatualizado + a WO entra no proprio git add (wo0084)", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C41 o fecho em modo Code registra em vez de listar (wo0085): canal por doc, log do dia com gatilho de evento, regenerar x criar, origem do fato", () => {
  const S = T.STATE; S.workmode = S.workmode || {};
  const prevCode = S.workmode.codeMode;
  // (1) a regra de fecho ramifica por modo — em modo Code, WO cirurgica; sem executor, arquivo inteiro
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    S.workmode.codeMode = "";
    const instrN = T.buildInstr(n), cmdN = T.buildClaudeMd(n);
    S.workmode.codeMode = "yes";
    const instrC = T.buildInstr(n), cmdC = T.buildClaudeMd(n);
    if(!/Ao final da conversa/.test(instrN)) return;   // nicho sem saidas ativas nao emite a secao
    assert(/entregue arquivos completos/.test(instrN), id+" (sem Code): o fecho universal perdeu a entrega de arquivos inteiros — sem executor, regenerar e a unica saida");
    assert(/REGISTRE o que falta/.test(instrC), id+" (Code): o fecho ainda manda entregar tudo inteiro — com executor no repo, o registro e WO cirurgica");
    assert(!/nunca blocos soltos para colar à mão/.test(instrC), id+" (Code): sobrou 'nunca blocos soltos' — em modo Code o bloco com ancora E o artefato certo, e chama-se WO");
    assert(/log do dia SEMPRE/.test(instrC), id+" (Code): o fecho nao nomeia o log do dia — e o unico modo em que ele nao era citado, e o unico em que sumiu em campo");
    assert(/`\/apply-wo`/.test(instrC), id+" (Code): o fecho nao diz que a WO vai com a linha /apply-wo junto");
    assert(/lista termina vazia/i.test(instrC), id+" (Code): o criterio de aceite continua sendo o inventario da divida, nao o pagamento dela");
    assert(/Regenerar ≠ criar/.test(cmdC), id+" (Code): o CEREBRO nao distingue regenerar de criar — foi assim que o log de dia inexistente virou 'nao regenere'");
    assert(/lista do que ficou por registrar|termina com essa lista \*\*vazia\*\*/.test(cmdC), id+" (Code): o CEREBRO nao exige que a lista do fecho termine vazia");
    assert(/caixa de mensagem/.test(cmdC), id+" (Code): o CEREBRO nao proibe empurrar bloco para o usuario colar no executor");
    assert(/vem INTEIRO e atualizado/.test(cmdN), id+" (sem Code): o CEREBRO universal perdeu a entrega inteira");
    assert(!/Regenerar ≠ criar/.test(cmdN), id+" (sem Code): a regra de canal do modo Code vazou para projeto sem executor");
  });
  // (2) o log do dia ganhou gatilho de EVENTO — nao pende so do fim da conversa
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/Evento que MERECE log/.test(cmd), id+": a tabela de gatilhos amarra o log so ao fim da conversa — numa conversa longa o fim nunca chega");
    assert(/cortar versao/.test(cmd) && /virar o dia/.test(cmd), id+": o gatilho do log nao nomeia eventos que ACONTECEM");
  });
  // (3) o prompt de transferencia manda REGISTRAR, e distingue regenerar de criar
  S.workmode.codeMode = "yes";
  const pe = T.PROMPTS_BASE.find(p => p.id === "E");
  const corpoC = pe.body({}, T.normNiche(T.NICHES.dev));
  S.workmode.codeMode = "";
  const corpoN = pe.body({}, T.normNiche(T.NICHES.dev));
  S.workmode.codeMode = prevCode;
  assert(!/liste o que ainda falta registrar/.test(corpoC), "o prompt de transferencia ainda pede a LISTA do que falta — listar produz bloco colavel, e um fecho bom termina com a lista vazia");
  assert(/REGISTRE/.test(corpoC), "o prompt de transferencia nao manda registrar");
  assert(/regenerar é diferente de criar|regenerar e diferente de criar/.test(corpoC), "o prompt nao distingue regenerar de criar — a causa (a) do fecho falho de campo");
  assert(/log do dia/.test(corpoC), "o prompt de transferencia em modo Code nao nomeia o log do dia (o ramo sem executor sempre nomeou)");
  assert(/`\/apply-wo`/.test(corpoC), "o prompt nao pede a linha /apply-wo junto da WO");
  assert(/deve estar vazia/.test(corpoC), "o prompt nao inverte o criterio de aceite");
  assert(/relatado pelo dono/.test(corpoC), "o prompt nao manda registrar com a origem o fato que so existe no chat");
  assert(/logs\//.test(corpoN), "o ramo sem executor perdeu a mencao ao log do dia");
  // (4) origem do fato: relatado x medido, na Medicao delegada
  Object.keys(T.NICHES).forEach(id => {
    S.workmode.codeMode = "yes";
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    S.workmode.codeMode = prevCode;
    assert(/não existe até estar num arquivo/.test(cmd), id+": o CEREBRO nao diz que fato relatado no chat nao existe ate estar em arquivo");
    assert(/relatado pelo dono/.test(cmd) && /medido por instrumento/.test(cmd), id+": faltam as duas marcas de origem, que e o que a transferencia apaga");
  });
  S.workmode.codeMode = prevCode;
  return "ok";
});
```

> **Nada a fazer no `SHIM`.** `PROMPTS_BASE`, `STATE`, `NICHES`, `normNiche`, `buildInstr` e `buildClaudeMd` já estão exportados. Confirmado rodando.

---

## Edição 8 — `meta/DECISIONS.md` · registra a D-119

**Âncora** (a última linha do arquivo, fim da D-118):

```
`KIT_VERSION 1.105.0`. Check **C40** novo. **Custo de teto NEGATIVO** — «turno» é mais curto que «sessão», e «Ao final da conversa» é mais curto que «Ao final de cada sessão»: C28 sai de `padrao 6618/6900 · combo 7512/7600` para **`padrao 6611/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7505/7600`** — a folga do `narrative` sobe de **282 para 289**. O prompt de update e o modelo de WO não passam por `buildInstr`, então não custam nada além do que já custavam. Harness **18/18, 83/83 → 84/84, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-119 — O fecho de conversa em modo Code registra em vez de listar; o log do dia ganha gatilho de evento; fato relatado carrega a origem (wo0085)

**Base.** `meta/analises/260811-ANALISE-o-fecho-em-modo-code.md`, opção (C), aprovada pelo autor em 2026-08-11. Material de campo: Mapsmith, `IDEAS.md` §«Feedback para o Kit» itens (6) e (8), mais cinco notas do autor de 2026-08-09 e 2026-08-10.

**Contexto.** O prompt E («Conversa pesada — transferir agora») acerta na parte difícil — manda **não regenerar** os arquivos de contexto, porque dois escritores brigam — e erra no verbo logo depois: no ramo de modo Code, pedia «liste o que ainda falta registrar». **Listar produz um bloco de texto que o dono cola na caixa de mensagem do executor, que tem limite de caracteres — o problema que as WOs existem para resolver.** E o critério de aceite estava invertido: um fecho bom termina com essa lista **vazia**.

**O custo real, medido em campo.** Uma conversa de cinco dias encerrou listando sete pendências em vez de executá-las e sem escrever um único log; a conversa seguinte gastou um turno re-derivando contexto e anunciou um `STATUS.md` que nunca entregou; o autor reabriu a conversa antiga para que ela fizesse o fecho que devia ter feito; uma terceira conversa abriu contra um STATUS que apontava para uma análise **que nunca existiu**.

**Quatro causas, e cada edição ataca uma.** (a) «Não regenere» foi aplicado a um documento que **não existia** — um log que ninguém escreveu não tem escritor, e criar não é regenerar; (b) o critério de aceite pedia o inventário da dívida, não o pagamento; (c) o log pendia de «fim da conversa», que numa conversa de planejamento longa **nunca chega**; (d) fatos relatados no chat pelo dono nunca chegavam ao repositório, e a conversa seguinte travava entre um handoff que dava o defeito por fechado e um STATUS que o dava por aberto.

**Dois achados desta análise, lidos no fonte e ausentes do feedback original.** **(1)** O ramo `codeModeOn()` do prompt E era o **único que não nomeava o log do dia** — o ramo sem executor sempre o nomeou. O log sumiu justamente na configuração que tinha duas mãos capazes de escrevê-lo, porque o prompt não pedia a nenhuma. **(2)** A regra geral de fecho era **cega ao modo**: «entregue cada documento INTEIRO (…) nunca blocos soltos para colar à mão» saía igual com e sem executor. Num projeto com executor isso é o oposto do certo — o bloco cirúrgico com âncora *é* o artefato correto, chama-se WO, e o kit o documenta três seções acima. A regra e o método do próprio kit se contradiziam, e a contradição só aparecia no modo Code.

**Decisão.** A seção de fecho passa a ramificar por modo nas duas superfícies (`buildInstr` e `buildClaudeMd`), **substituindo** o texto universal em vez de somar a ele; o prompt E manda REGISTRAR, distingue regenerar de criar, nomeia o log do dia, exige a lista vazia e manda marcar a origem do fato relatado; a tabela de gatilhos ganha um gatilho de **evento** para o log (cortar versão, registrar decisão ou bug grave, virar o dia); e a seção «Medição delegada» ganha a metade simétrica da regra que já tinha — a de cima protege o número que a execução mediu, a nova protege o que o dono contou, com `[relatado pelo dono]` distinto de `[medido por instrumento]`.

**Por que substituindo, e não somando — este número decidiu o desenho.** O orçamento do modo Code tinha **28 caracteres de folga** (522/550), o mais apertado dos três baldes, e nenhum documento em circulação dizia isso. Acrescentar um ramo Code ao texto universal levava o incremento a **558/550** e deixava o C28 **vermelho**. Escrito como substituição — porque o texto universal não deveria valer em modo Code de qualquer forma — o incremento cai para **514**. A correção pedida pelo campo é, medida, **mais barata que não fazê-la**.

**Recusado nesta leva:** mexer em `MODO_ORCAMENTO.code`. Os 28 de folga são sinal, não obstáculo, e a D-105 é explícita — o que se trava é o incremento, e não caber é sinal de que outra linha precisa ser curada antes. Aumentar o número carimbaria como orçamento aceito um inchaço que ainda não existe.

**Check C41 novo.** Confere, nos 18 nichos: a seção de fecho ramifica (universal sem executor, «REGISTRE o que falta» com executor); «nunca blocos soltos» **não** sobrevive no ramo Code; o log do dia e a linha `/apply-wo` aparecem no fecho em modo Code; o CEREBRO distingue regenerar de criar, exige lista vazia e proíbe empurrar bloco para a caixa do executor; a regra de canal **não vaza** para projeto sem executor; a tabela de gatilhos tem o gatilho de evento do log; o prompt E não pede mais a lista; e as duas marcas de origem existem. **Cinco provas negativas rodadas**, uma por defeito, todas reprovando o C41 sozinhas.

`KIT_VERSION 1.106.0`. **Custo de teto NEGATIVO:** C28 sai de `padrao 6611/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7505/7600` para **`padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`**. O padrão e a folga do `narrative` (289) não mudam — nenhuma edição toca o texto universal. Harness **18/18, 84/84 → 85/85, 0 erros**.
```

---

## Edição 9 — `meta/IDEAS.md` · registra a leva no «Feedback para o Kit»

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece; a entrada nova fica no topo da seção, antes da de 2026-08-11 sobre a wo0084):

```

### 2026-08-11 — Feedback do Mapsmith, itens (6) e (8) «o fecho de conversa em modo Code» — ACEITOS E IMPLEMENTADOS (D-119, wo0085)
As quatro causas nomeadas pelo Mapsmith foram atacadas uma a uma, cada uma no lugar onde a causa age. Dois achados nossos entraram junto, os dois lidos no fonte e ausentes do feedback: **(1)** o ramo `codeModeOn()` do prompt E era o **único** que não nomeava o log do dia — o log sumiu na configuração que tinha duas mãos capazes de escrevê-lo; **(2)** a regra geral de fecho era cega ao modo, mandando «nunca blocos soltos para colar à mão» num projeto onde o bloco com âncora *é* o artefato certo e se chama WO. A correção saiu com **custo de teto negativo** (+Code 522 → 514) porque foi escrita como substituição do texto universal, não como acréscimo — a variante somada estourava o orçamento do modo Code em 8 caracteres, e essa medição é que definiu o desenho. Check **C41**.

**Aberto, para a leva seguinte:** a análise irmã `meta/analises/260811-ANALISE-a-conferencia-sai-do-artefato.md` (Mapsmith item 9 + sand-land FK-J e FK-K) segue **sem decisão**, com dois pontos de decisão em aberto. Ela não toca nenhum ponto desta WO.

**Ideia nova, com gatilho de repetição — «ideia aprovada com gatilho vencido é dívida sem cobrança».** Terceiro achado do feedback (9) do Mapsmith, e o único que o projeto diz que não teria tido sozinho: o `IDEAS.md` é excelente no que promete — nada se perde, ideia muda de status e não some — mas tem um estado **sem cobrança**: aprovada, gatilho já vencido, não implementada. A IDEA-073 deles ficou cinco dias assim, e o custo apareceu longe de onde ela morava. A proposta é o STATUS (ou o ritual de fecho) listar, uma linha por item, as ideias aprovadas cujo gatilho venceu — não é backlog, é a lista do que o projeto já decidiu que faria e não fez; se ela ficar longa, isso é a informação. **Parqueada de propósito:** o kit já recusou duas vezes (D-104, D-106) aumentar o vocabulário obrigatório do IDEAS de todo projeto, e este caso tem **uma** ocorrência medida, num projeto que organiza o IDEAS por status+ID — que já é desvio registrado. *Gatilho de volta: um segundo projeto relatar o mesmo estado sem cobrança.*

**Achado à parte, não corrigido aqui (fora de escopo):** o ramo **sem executor** do prompt E ainda diz «apenas os arquivos que mudaram nesta **sessão**» — resíduo do vocabulário que a wo0084/D-118 curou. Os prompts não passam por `buildInstr` e não estavam na varredura daquela WO. Correção de uma palavra, para a próxima leva que tocar os prompts.
```

---

## Edição 10 — `meta/STATUS.md` · sessão nova no topo

**Âncora:**

```
## 💬 Última sessão (2026-08-11 — v1.105.0)
```

**Substituir por** (a linha vira «Sessão anterior» e a sessão nova entra acima):

```
## 💬 Última sessão (2026-08-11 — v1.106.0)
- **O fecho de conversa em modo Code registra em vez de listar (D-119, wo0085):** o prompt E do kit pedia «liste o que ainda falta registrar» no ramo de modo Code — e listar produz bloco colável na caixa do executor, que tem limite, e que é o problema que as WOs existem para resolver; pior, o critério estava invertido (um fecho bom termina com essa lista **vazia**). Custo de campo, no Mapsmith: uma conversa de cinco dias encerrada sem um único log, um turno inteiro perdido re-derivando contexto na conversa seguinte, a conversa antiga reaberta para fazer o fecho que devia ter feito, e uma terceira abrindo contra um STATUS que apontava para uma análise **que nunca existiu**. Quatro edições, uma por causa: **(a)** regenerar ≠ criar — arquivo que não existe não tem dois escritores, e escrevê-lo é obrigatório; **(b)** o critério de aceite inverte — REGISTRE, e mostre a lista vazia; **(c)** o log do dia ganha **gatilho de evento** (cortar versão, registrar decisão ou bug grave, virar o dia) em vez de pender de um «fim de conversa» que numa conversa longa nunca chega; **(d)** fato relatado pelo dono não existe até estar em arquivo, com a origem marcada — `[relatado pelo dono]` ≠ `[medido por instrumento]`. **Dois achados lidos no fonte, ausentes do feedback:** o ramo Code do prompt E era o **único** que não nomeava o log do dia (o ramo sem executor sempre nomeou), e a regra geral de fecho era cega ao modo, mandando «nunca blocos soltos para colar à mão» onde o bloco com âncora *é* o artefato certo. **A medição definiu o desenho:** o orçamento do modo Code tinha **28 caracteres de folga** (522/550) — a variante que SOMA um ramo Code ao texto universal marca 558 e deixa o C28 vermelho; escrita como **substituição**, marca **514**. Custo de teto **negativo**: C28 vai de `+Code 522/550 · combo 7505/7600` para **`+Code 514/550 · combo 7497/7600`**; padrão 6611 e folga do `narrative` 289 inalterados. Check **C41** novo, com cinco provas negativas. `KIT_VERSION 1.106.0`. Harness **18/18, 84/84 → 85/85, 0 erros**. **Aberto:** a análise irmã (`260811-ANALISE-a-conferencia-sai-do-artefato.md` — Mapsmith item 9 + sand-land FK-J/FK-K) segue sem decisão, com dois pontos de decisão para o autor; ela não toca nenhum ponto desta WO.

## 💬 Sessão anterior (2026-08-11 — v1.105.0)
```

> **Atenção do `/wrap`:** o cabeçalho do arquivo (linha 3, «Versão atual: **v1.105.0**. Teste: **18/18 nichos, 84/84 checagens**») cita a versão e a contagem. Procure o valor antigo no arquivo INTEIRO e atualize **todas** as ocorrências de `1.105.0` → `1.106.0` e `84/84` → `85/85`, incluindo a descrição do check mais recente. Não toque nos números **históricos** dentro dos blocos de sessões passadas.

---

## Fora de escopo

- **A análise irmã** (`260811-ANALISE-a-conferencia-sai-do-artefato.md`) — sem decisão do autor. Nenhuma edição desta WO toca os pontos dela (`buildWoTemplate`, `HYGIENE_RULES`, bloco de fecho item «Próximo»).
- **A dívida de gatilho vencido** — parqueada no IDEAS com gatilho de repetição (Edição 9).
- **«nesta sessão» no ramo sem executor do prompt E** — resíduo da wo0084, registrado no IDEAS, não corrigido aqui.
- **`MODO_ORCAMENTO.code`** — fica em 550. Ver a D-119.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF; `validate.js` é LF.** Todas as âncoras das Edições 1–6 são de **uma linha só**, então o fim de linha não morde. As Edições 2b e 3b **inserem várias linhas** a partir de uma âncora de uma linha — é a saída correta, mas confira depois com `python -c "import io; d=io.open('src/index.template.html','rb').read(); print(d.count(b'\n')-d.count(b'\r\n'))"` → deve dar **0**. **Nunca rode isso no `validate.js`**, que é LF.
- **Ordem obrigatória: 2a antes de 2b, 3a antes de 3b.** Depois da 2b/3b, as âncoras da 2a/3a deixam de existir na forma citada.
- **A Edição 2b e a 3b preservam o texto universal como ramo `else`.** Se ele desaparecer, projetos **sem** executor perdem a regra de entregar arquivos inteiros — e o C41 reprova por isso, de propósito (`sem Code: o fecho universal perdeu a entrega de arquivos inteiros`).
- **A Edição 5 usa texto sem acento**, seguindo o padrão do resto de `TRIGGERS_BASE` (a linha vizinha do bloco de fecho também é sem acento). O C41 procura `cortar versao` e `virar o dia` — se você «corrigir» os acentos, o check reprova.
- **`≠` e `×` são caracteres não-ASCII dentro do texto novo** (Edições 2b, 3b). Eles estão no texto substituto, não nas âncoras, então não afetam a busca. Mas o C41 procura literalmente `Regenerar ≠ criar` — não troque por `!=`.
- **Número de check já usado:** o próximo livre era **C41**; o C40 é da wo0084. Confirmado no `validate.js` antes de escrever.
- **O `SHIM` não precisa de mudança** — todas as funções que o C41 usa já estão exportadas. Se você achar que falta alguma, PARE e reporte: provavelmente o C41 foi colado num lugar errado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md`, `meta/STATUS.md` — e nada além.
- [ ] `node build.js` roda sem erro.
- [ ] `node validate.js index.html` → **18/18 nichos, 85/85 checagens, 0 erros**, com o **C41 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. **Se o `padrao` não for 6611, algo vazou para o texto universal** — pare e reporte antes de commitar.
- [ ] Normalização CRLF do template: o comando das Armadilhas imprime **0**.
- [ ] **Teste manual que a validação não cobre** — abra o `index.html` no navegador, nicho **Narrativa & Ficção**: com o **Modo Code DESLIGADO**, a aba Instruções deve trazer «Ao final da conversa, entregue arquivos completos»; **ligando o Modo Code**, o mesmo trecho deve virar «Ao final da conversa, REGISTRE o que falta (não liste)». Depois, na aba Prompts, abra o **prompt E** com o Modo Code ligado e confirme que ele **não** contém mais a palavra «liste o que ainda falta».

## Relatório de aplicação

O que foi feito · o que fugiu do texto literal desta WO · arquivos tocados · resultado da validação (com os números do C28 e do C41) · o commit e o push. Escreva-o **depois** de resolver o push.

## Commit — blocos separados, mensagem SEM acento

**A própria WO entra no `git add`**, junto das duas análises que a originaram. Se alguma já estiver versionada, o `add` não faz nada e isso **não é erro**.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/260811-ANALISE-o-fecho-em-modo-code.md meta/analises/260811-ANALISE-a-conferencia-sai-do-artefato.md meta/workorders/260811-wo0085-o-fecho-em-modo-code-registra.md
```

```
git commit -m "fix(kit): o fecho em modo Code registra em vez de listar" -m "O prompt de transferencia pedia a LISTA do que falta registrar, num modo em que listar produz bloco colavel na caixa do executor - que tem limite, e que e o problema que as WOs existem para resolver. Um fecho bom termina com essa lista vazia." -m "Quatro causas, uma edicao para cada: regenerar nao e criar (arquivo que nao existe nao tem dois escritores); o criterio de aceite inverte; o log do dia ganha gatilho de evento em vez de pender de um fim de conversa que nunca chega; e fato relatado pelo dono carrega a origem, porque relatado e medido tem forcas diferentes." -m "A regra geral de fecho era cega ao modo: mandava nunca blocos soltos para colar a mao num projeto onde o bloco com ancora E o artefato certo e se chama WO. Agora ramifica, substituindo o texto universal em vez de somar a ele - o que torna a correcao mais barata que nao faze-la: +Code 522 para 514." -m "Check C41 novo, com cinco provas negativas. wo0085, D-119."
```

```
git push
```
