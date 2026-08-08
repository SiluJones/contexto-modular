# WO 0082 — higiene universal e o protocolo de update que sabe subtrair

> **Tipo:** WO de CODIGO.
> **Config sugerida:** Sonnet, esforco medio — sete edicoes, texto exato fornecido.
> **Pre-requisito:** `KIT_VERSION 1.102.0`, commit `8273f94`, `main` == `origin/main`, harness
> **18/18 · 81/81 · 0 erros**. A arvore tem 3 nao rastreados (as duas analises e a wo0081) — a Edicao 7
> versiona os tres.
> **Base:** `meta/analises/260807-ANALISE-feedback-dois-narrativos.md` (leva 3) e
> `meta/analises/260807-ANALISE-extracao-de-acervo-nicho-narrativo.md` (leva 4a), fundidas por decisao do
> autor em `260807-1701.txt`. Evidencia: repos de *My Little Lady* (`44eaf44`) e *I will die* (`ea086dc`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO. Se ja existir, **PULE** e diga.

> **Canal dos meta neste ciclo = CODE.** Esta WO e o registro: faca os appends da Edicao 7.

---

## 1. Por que

**O protocolo de update do kit sabe somar e nao sabe subtrair.** O merge compara o que e *novo* no
template; uma correcao que **apaga** uma linha nunca atravessa, porque nao ha nada novo para comparar. A
D-102 protege arquivo vivo refinado — e a protecao funcionou como projetada —, mas ela nao tem como
expressar «esta linha foi removida de proposito; remova a sua tambem».

Isso ja custou caro, e da para medir. O `meta/CEREBRO.md` do *My Little Lady* manda, hoje, relistar o
mount *«sempre que o autor sinalizar upload»*, com a lista de exemplos. Esse texto foi apagado pelo kit na
**v1.90.0** (wo0068/D-102) com este diagnostico: a lista de sinais **ensinava a esperar o sinal**. O
projeto integrou a **v1.96.0** — seis versoes depois — e ficou com a linha errada. Consequencia registrada
la como FIX-016 («o mount so era relistado quando o autor mandava»), diagnosticada como falha de adesao do
assistente. **Nao era: era o CEREBRO deles mandando fazer aquilo.**

O mesmo defeito tem uma segunda superficie: quando um projeto **desliga um modo** (o *My Little Lady*
migrou de ASU para Code em 2026-07-23), as secoes que aquele modo emitiu ficam no CEREBRO **ja gerado** —
um CEREBRO gerado e arquivo, nao funcao. O kit **nao tem como saber** qual configuracao o projeto usou
quando gerou o arquivo dele, entao a saida nao pode ser remover: e **declarar** os modos do pacote e
mandar reportar a sobra como choque.

Junto vao quatro regras de higiene universais que os dois projetos narrativos produziram com custo real
(um turno inteiro perdido lendo derivado como fonte; onze residuos em cinco arquivos depois de uma
refutacao registrada; um autor perto de largar a obra por receber pergunta sem o trecho citado; e tres
desenhos de metodo trocados no meio do trabalho), e a linha de gatilho que faltava para o bloco de fecho.

## 2. Contexto factual

- **Medido:** o CEREBRO gerado hoje para `dev` e para `narrative` difere em **uma** linha (a secao de
  skills de escrita). Nao existe refinamento que o dev receba e o narrativo nao — eles vivem em
  `HYGIENE_RULES` e saem verbatim para os 18. O que diverge nos projetos e a **versao**, nao o nicho.
- **Medido:** contagem literal nos dois `meta/CEREBRO.md` dos projetos narrativos — **zero** ocorrencias
  de «a copia nao e a fonte da verdade», «abertura de turno», carimbo `Base:`, sandbox, «Medicao
  delegada», «valor ANTIGO». *My Little Lady* declara v1.96.0; *I will die* esta em torno da v1.7x.
- **Medido:** o manifesto do pacote ja declarava `Modos ligados: skills … · Code …` — e **omitia ASU e
  compartilhado**, que sao exatamente os dois que geraram sobra em campo.
- **Medido (colisao encontrada ao implementar):** a primeira versao do registro de revogacoes incluia a
  migracao `spec` -> WO e **derrubou o C15**, que proibe a string do caminho antigo no produto. Isso
  confirmou o limite certo do registro — **so linha de COMPORTAMENTO apagada entra**; migracao de formato
  ja e coberta pela clausula de formato descontinuado, e citar o nome velho reintroduz no produto o termo
  que outro check proibe. O autor tinha levantado a mesma ressalva por outro caminho (risco de um projeto
  novo confundir com o `SPEC.md` do SDD). O item ficou de fora.
- **Medido no sandbox** (repo reconstruido deste mount, `build` + `validate` reais): as edicoes de codigo
  fecham **18/18 · 82/82 · 0 erros**, com **custo de teto zero** — C28 imprime os mesmos numeros da
  v1.102.0 (`padrao 6618/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7512/7600`), porque
  tudo entra em CEREBRO e manifesto, e nada nas Instrucoes.
- **Medido (prova negativa do C38):** com a regra do derivado descaracterizada, com o ASU fora do carimbo,
  e com uma revogacao sem motivo, o C38 falhou nos tres casos, um de cada vez.

---

## Edicao 1 — `src/index.template.html` · bump de versao

**Ancora:**

```
const KIT_VERSION = "1.102.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.103.0";
```

---

## Edicao 2 — `src/index.template.html` · registro de revogacoes

**Ancora** (declaracao da constante de higiene):

```
const HYGIENE_RULES = [
```

**Inserir IMEDIATAMENTE ANTES:**

```js
/* Linhas que o kit APAGOU de proposito. O protocolo de update so sabe somar:
   o merge compara o que e NOVO no template, e uma correcao que remove nunca
   atravessa. Cada entrada e citada com o texto antigo para o merge encontrar.
   Sai daqui quando nenhuma versao ainda em uso puder ter a linha.
   SO entra linha de COMPORTAMENTO que o kit apagou. Migracao de formato
   (commands/ -> skills, spec -> WO) nao entra: ja e tratada pela clausula
   de formato descontinuado, e citar o nome velho aqui reintroduz no produto
   justamente o termo que outros checks proibem. */
const REVOCATIONS = [
  { desde: "1.90.0",
    texto: "Sempre que o autor sinalizar upload — mesmo sem nomear o arquivo",
    porque: "A lista de exemplos de sinal ensinava a ESPERAR o sinal. A releitura do mount e por turno, sem gatilho do usuario. Substituida por: reveja o mount a cada turno, sem esperar eu sinalizar." },
];
```

---

## Edicao 3 — `src/index.template.html` · quatro regras de higiene universais

**Ancora** (ultima entrada do array `HYGIENE_RULES`):

```
  "Válvula de desvio registrado: os templates
```

**Inserir IMEDIATAMENTE ANTES** as quatro linhas abaixo. **Cada regra e UMA linha so do arquivo**, por
mais longa que pareca no editor — nao quebre nenhuma:

```js
  "**Varra pelo fato, não pela frase.** Fechar um item, trocar um nome ou registrar uma refutação não termina no arquivo onde a decisão nasceu. Procure três coisas, sempre: (a) o termo antigo literal; (b) o mesmo conceito em paráfrase, que o `grep` não acha; (c) as listas de pendência — STATUS, IDEAS, checklists. E **as skills por último e com mais atenção**: são a superfície mais esquecida e a mais perigosa, porque são lidas ANTES de trabalhar, então uma linha morta ali dirige o trabalho seguinte em vez de só informar mal.",
  "**Documento derivado nunca é fonte.** Handoff, brief, resumo, reconstrução, checklist, relatório — inclusive os que você mesmo escreveu — são saída de assistente, não cânone. Eles congelam quando nascem enquanto o repo anda, e o modo de falha é sempre o mesmo: o derivado é lido como fato por um turno inteiro antes de alguém conferir. Duas defesas: **a derivação aparece no nome do arquivo** (prefixo/sufixo que se lê de relance), e **antes de usar um dado dele, confira no arquivo vivo**. Divergência entre derivado e fonte: a fonte vence, e o derivado é reescrito lendo a fonte, nunca ajustado de memória.",
  "**Cite a frase-gatilho antes de perguntar.** Quando a dúvida nasce de algo que o usuário escreveu — uma nota, um pedido, uma linha de arquivo —, a frase inteira entra citada ANTES da pergunta. Referência cruzada nua (`arquivo:linha`, «ver DEC-0XX») pode acompanhar o texto literal, nunca substituí-lo: quem escreveu não decora o que escreveu. E nunca pergunte usando um rótulo que você inventou para o assunto — o usuário não reconhece o nome que você deu à dúvida dele.",
  "**Mudança de método não se adota no meio do trabalho.** Refinar o conteúdo é dever contínuo; mudar COMO o trabalho é feito — ordem, sequência, formato do ciclo, o que entra em cada leva — é troca de trilho, e troca de trilho para e vira análise, com o dono decidindo. O modo de falha é específico e já custou caro: um único dado ruim numa etapa vira proposta de reprojeto, a proposta é aceita no impulso, e o custo só aparece na etapa seguinte. Propor continua permitido e é esperado; o que não é permitido é otimizar o processo em vez de executá-lo.",
```

---

## Edicao 4 — `src/index.template.html` · gatilho do bloco de fecho na tabela

A regra existe desde a wo0058, nas Instrucoes. Ela nao esta na **tabela de gatilhos**, que e a superficie
consultada por evento — e foi por isso que ela nao rodou por uma conversa inteira num projeto real.

**Ancora** (em `TRIGGERS_BASE`):

```
  ["Fim de sessão", "Entrega os arquivos completos afetados: STATUS.md + CHANGELOG.md (se fechou algo) + log da sessão."],
```

**Inserir IMEDIATAMENTE ANTES:**

```js
  ["Fim de QUALQUER turno de trabalho", "Emite o Bloco de fecho (formato fixo, secao propria). Nao espera fim de conversa: a maior parte do trabalho acontece em turnos que nao fecham nada."],
```

---

## Edicao 5 — `src/index.template.html` · o pacote passa a subtrair

**5a — carimbo de modos completo + a regra de nao remover sozinho.**

**Ancora** (em `buildUpdateManifest`):

```
  L.push(`- Modos ligados: skills ${skillsOn ? "sim" : "nao"} · Code ${codeOn ? "sim" : "nao"}`);
```

**Substituir por (duas linhas):**

```js
  L.push(`- Modos ligados: skills ${skillsOn ? "sim" : "nao"} · Code ${codeOn ? "sim" : "nao"} · ASU ${asuModeOn() ? "sim" : "nao"} · compartilhado ${groupModeOn() ? "sim" : "nao"}`);
  L.push("- **Este carimbo e declaracao, nao ordem.** Se o seu arquivo vivo tem secao de um modo que este pacote declara como `nao`, ela e sobra de uma configuracao antiga (ou este pacote foi gerado com o modo esquecido). Reporte como choque, com a secao citada, e deixe o usuario decidir — **nunca remova sozinho**: o kit nao tem como saber qual dos dois casos e.");
```

**5b — bloco de linhas revogadas no manifesto.**

**Ancora** (cabecalho da tabela de arquivos, na mesma funcao):

```
  L.push("| Nome no upload | Destino real | Natureza | Papel |");
```

**Inserir IMEDIATAMENTE ANTES:**

```js
  if(REVOCATIONS.length){
    L.push("## Linhas revogadas (o merge nao acha sozinho)");
    L.push("");
    L.push("O merge compara o que e **novo** no template. Estas linhas foram **apagadas de proposito** pelo kit —");
    L.push("um arquivo vivo pode ainda te-las, e nenhuma comparacao vai apontar isso. Procure cada uma no seu");
    L.push("arquivo e, se achar, **remova**; se o seu projeto tiver motivo para manter, registre o desvio.");
    L.push("");
    L.push("| Apagada desde | Texto a procurar | Por que saiu |");
    L.push("|---|---|---|");
    REVOCATIONS.forEach(r => {
      L.push(`| v${r.desde} | \`${r.texto}\` | ${r.porque} |`);
    });
    L.push("");
  }
```

**5c — a regra no CEREBRO, para quem recebe o pacote.**

**Ancora** (fim da secao «Ao receber um template-update do KCM»):

```
Itens marcados `fusao` no manifesto (CEREBRO, INSTRUCOES) carregam comportamento que este projeto pode ter evoluído: propõe o merge, o usuário decide — nunca substituição cega.");
```

**Inserir IMEDIATAMENTE APOS** (a segunda linha e **uma linha so**):

```js
  L.push("");
  L.push("**O merge sabe somar, não sabe subtrair — e por isso o manifesto traz duas seções que a comparação não produz.** (1) **Linhas revogadas:** o kit às vezes APAGA uma linha de propósito, e comparar arquivos só revela o que é novo — o texto antigo continua vivo no seu, invisível ao merge, dirigindo comportamento que já foi corrigido. Procure cada texto listado; se achar, remova, ou registre o desvio se este projeto tiver motivo para manter. (2) **Carimbo de modos:** o manifesto declara com quais modos o pacote foi gerado. Seção de um modo declarado como `nao` que ainda exista no seu arquivo é sobra de configuração antiga — **ou** o pacote foi gerado com o modo esquecido. O assistente **não tem como distinguir os dois casos**, então **reporta como choque com a seção citada e não remove sozinho**. Migrar de modo (ASU→Code, por exemplo) não limpa o CEREBRO já gerado: um CEREBRO gerado é arquivo, não função.");
```

---

## Edicao 6 — `validate.js` · check C38 e o export que ele precisa

**6a — expor `REVOCATIONS`.**

**Ancora** (linha do `SHIM`):

```
buildUpdatePrompt, fileBehaviorLabel, generatedContextFiles
```

**Substituir por:**

```
buildUpdatePrompt, fileBehaviorLabel, REVOCATIONS, generatedContextFiles
```

**6b — o check novo.**

**Ancora:**

```
check("C37 artefato do kit abre no parser
```

**Inserir IMEDIATAMENTE ANTES** o bloco abaixo, seguido de uma linha em branco:

```js
check("C38 higiene universal + o update que sabe subtrair (wo0082): quatro regras nos 18 CEREBROs, gatilho do fecho na tabela, revogacoes e carimbo de modos no pacote", () => {
  const marcas = [
    [/Varra pelo fato, não pela frase/, "sem a regra de varredura por fato (as skills sao a superficie esquecida)"],
    [/são lidas ANTES de trabalhar/, "a regra de varredura nao nomeia as skills como superficie perigosa"],
    [/Documento derivado nunca é fonte/, "sem a regra do documento derivado"],
    [/a derivação aparece no nome do arquivo/, "a regra do derivado nao exige marca no nome"],
    [/Cite a frase-gatilho antes de perguntar/, "sem a regra de citar o gatilho antes da pergunta"],
    [/Mudança de método não se adota no meio do trabalho/, "sem a regra de troca de trilho"],
    [/otimizar o processo em vez de executá-lo/, "a regra de metodo perdeu o modo de falha que a motivou"],
    [/Fim de QUALQUER turno de trabalho/, "tabela de gatilhos sem a linha do bloco de fecho"],
    [/O merge sabe somar, não sabe subtrair/, "protocolo de update nao explica que o merge nao subtrai"],
    [/reporta como choque com a seção citada e não remove sozinho/, "sobra de modo desligado sem a regra de reportar-e-nao-remover"],
  ];
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    marcas.forEach(([re, msg]) => assert(re.test(cmd), id+": "+msg));
  });
  // o registro de revogacoes existe, tem forma, e so carrega comportamento apagado
  assert(Array.isArray(T.REVOCATIONS) && T.REVOCATIONS.length >= 1, "registro REVOCATIONS vazio — o pacote nao tem o que avisar");
  T.REVOCATIONS.forEach(r => {
    assert(/^\d+\.\d+\.\d+$/.test(r.desde||""), "revogacao sem versao semver de origem");
    assert((r.texto||"").length >= 12, "revogacao sem texto citavel — o merge nao acha o que nao consegue procurar");
    assert((r.porque||"").length >= 40, "revogacao sem motivo — sem o porque, quem le nao consegue registrar desvio consciente");
    assert(!/meta\/specs|commands\//.test(r.texto), "migracao de formato nao entra no registro de revogacoes (ja e coberta pela clausula de formato descontinuado, e reintroduz termo proibido no produto)");
  });
  // manifesto do pacote: revogacoes + carimbo completo dos quatro modos
  T.STATE.workmode = T.STATE.workmode || {};
  const prev = { c: T.STATE.workmode.codeMode, a: T.STATE.workmode.asuMode, g: T.STATE.workmode.groupMode };
  T.STATE.workmode.codeMode = "yes"; T.STATE.workmode.asuMode = "no"; T.STATE.workmode.groupMode = "no";
  const pack = T.buildUpdatePack(T.normNiche(T.NICHES.narrative));
  T.STATE.workmode.codeMode = prev.c; T.STATE.workmode.asuMode = prev.a; T.STATE.workmode.groupMode = prev.g;
  const man = (pack && pack.manifest) || "";
  assert(/Linhas revogadas/.test(man), "manifesto do pacote sem a secao de linhas revogadas");
  assert(/ASU nao/.test(man), "carimbo de modos do manifesto nao declara o ASU — modo nao declarado e sobra que ninguem detecta");
  assert(/compartilhado /.test(man), "carimbo de modos do manifesto nao declara o modo compartilhado");
  assert(/nunca remova sozinho/.test(man), "manifesto nao proibe remover sobra de modo por conta propria");
  T.REVOCATIONS.forEach(r => assert(man.indexOf(r.texto) > -1, "revogacao '"+r.texto.slice(0,24)+"...' nao chegou ao manifesto do pacote"));
  return "ok ("+T.REVOCATIONS.length+" revogacao(oes) publicada(s))";
});
```

---

## Edicao 7 — `meta/` · registro (append) e os tres arquivos nao versionados

**7a — versionar o que ficou de fora da wo0081.** Os tres arquivos nao rastreados entram neste commit:
`meta/analises/260807-ANALISE-feedback-dois-narrativos.md`,
`meta/analises/260807-ANALISE-extracao-de-acervo-nicho-narrativo.md` e
`meta/workorders/260807-wo0081-settings-json-valido-write-push-antes-do-relatorio.md`. Confira se o
`.gitignore` nao os exclui; se excluir, **PARE e reporte** — nao force com `-f`.

**7b — `meta/DECISIONS.md`:** append de **D-116**, no formato dos vizinhos. Conteudo obrigatorio: o
achado de que **o protocolo de update e aditivo** e as duas superficies do mesmo defeito (linha apagada
que nao atravessa o merge; secao de modo desligado que sobrevive no arquivo gerado); as duas saidas
correspondentes (registro `REVOCATIONS` publicado no manifesto; carimbo de modos completo com a regra de
**reportar e nao remover**, porque o kit nao distingue «sobra antiga» de «modo esquecido ao gerar»); o
limite do registro (so comportamento apagado — a colisao com o C15 e a evidencia); as quatro regras de
higiene com a origem medida de cada uma; o gatilho do fecho na tabela; `KIT_VERSION 1.103.0`; custo de
teto **zero**; harness **81/81 -> 82/82, 0 erros**.

**7c — `meta/STATUS.md`:** nova secao `## 💬 Última sessão (2026-08-07 — v1.103.0)` no topo, rebaixando a
anterior. **Antes de escrever qualquer numero, procure o valor ANTIGO no arquivo INTEIRO** (`1.102.0`,
`81/81`) e atualize **todas** as ocorrencias de estado atual — preservando as historicas dentro dos blocos
de sessoes passadas. Registrar: levas 3 e 4a fechadas; **leva 4b (skill `ficha-de-choque` no `narrative`)
aberta**, com o desenho ja fixado na analise; e que os pacotes de update para os dois projetos narrativos
ficam para quando o kit estabilizar (pedido do autor).

---

## Fora de escopo

- **Nao** criar a skill `ficha-de-choque` nem tocar em `src/niches/narrative.js`: e a leva 4b.
- **Nao** incluir a migracao `spec` -> WO no registro de revogacoes (ver §2 — derruba o C15, e o autor
  levantou o risco de confusao com o `SPEC.md` do SDD).
- **Nao** gerar pacotes de update para *My Little Lady* / *I will die*: o autor pediu para esperar o kit
  estabilizar.
- **Nao** mexer no vocabulario «sessao» x «turno» — e questao aberta, ainda sem decisao.
- **Nao** gastar teto: nenhuma destas edicoes toca `buildInstr`. Se o C28 mudar, algo vazou.

## Armadilhas desta WO

- **`src/index.template.html` e CRLF** (`validate.js` e LF). Esta WO tem **cinco insercoes multi-linha** —
  bem mais que a wo0081. Depois de aplicar tudo, **normalize** e confira:

```
python -c "import io,re; p='src/index.template.html'; d=io.open(p,'rb').read(); d=re.sub(rb'(?<!\r)\n', b'\r\n', d); io.open(p,'wb').write(d); print(d.count(b'\n')-d.count(b'\r\n'))"
```

  Deve imprimir **0**. O arquivo e 100% CRLF por invariante, entao a normalizacao e segura.
- **As quatro regras da Edicao 3 sao QUATRO linhas**, cada uma uma string do array. O editor vai quebrar
  visualmente; o arquivo nao pode quebrar.
- **Edicao 5a** substitui uma linha por **duas**. Nao apague o `L.push` da `- Data:` que vem em seguida.
- **Ordem importa:** a Edicao 2 (`REVOCATIONS`) precisa vir **antes** da 5b, que le a constante. Aplicar
  5b primeiro quebra o build com `REVOCATIONS is not defined`.
- **Numero de check:** C38 e o proximo livre (o ultimo em uso e C37). Se ja existir um C38, **PARE e
  reporte** — nao renumere.
- **Nao edite `index.html` a mao.** Edite `src/` e rode `node build.js`.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra exatamente `src/index.template.html`, `validate.js`, `index.html`,
      `meta/STATUS.md`, `meta/DECISIONS.md` — mais os **tres arquivos novos** da Edicao 7a, e nada alem.
- [ ] Normalizacao CRLF rodada; o comando das Armadilhas imprime **0**.
- [ ] `node build.js` roda sem erro.
- [ ] `node validate.js` fecha **18/18 · 82/82 · 0 erros**, com **C38 verde**.
- [ ] **C28 imprime os mesmos numeros de antes** (`padrao 6618/6900 · combo 7512/7600`). Se mudou, **PARE
      e reporte**: alguma edicao vazou para as Instrucoes.
- [ ] **Teste manual que a validacao nao cobre:** abra `index.html`, escolha **Narrativa & Ficcao**, ligue
      **Modo Code** e deixe o **ASU desligado**; baixe o **pacote de atualizacao** e abra
      `_UPDATE-MANIFEST.md`. Precisa aparecer (a) o carimbo com os **quatro** modos, dizendo `ASU nao`;
      (b) a secao **«Linhas revogadas»** com a linha da v1.90.0; (c) a frase «nunca remova sozinho».
      Depois ligue o ASU, gere de novo, e confira que o carimbo passou a dizer `ASU sim`.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da validacao · o commit
e o push. **Escreva-o DEPOIS de resolver o push.**

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/STATUS.md meta/DECISIONS.md meta/analises/ meta/workorders/260807-wo0081-settings-json-valido-write-push-antes-do-relatorio.md
```

```
git commit -m "feat(kit): higiene universal e protocolo de update que sabe subtrair (wo0082, D-116)" -m "- achado: o merge do template-update so soma. Correcao que APAGA uma linha nunca atravessa, e a D-102 protege o arquivo vivo sem poder dizer que a linha saiu de proposito" -m "- registro REVOCATIONS publicado no _UPDATE-MANIFEST: texto citavel para o merge procurar + motivo. So comportamento apagado entra; migracao de formato fica na clausula de formato descontinuado (incluir spec->WO derrubava o C15)" -m "- carimbo de modos do manifesto passa a declarar os quatro (skills, Code, ASU, compartilhado). Secao de modo declarado como nao e sobra: o assistente REPORTA como choque e nao remove sozinho, porque o kit nao distingue sobra antiga de modo esquecido ao gerar" -m "- quatro regras de higiene universais: varrer pelo fato e nao pela frase (skills incluidas), documento derivado nunca e fonte, citar a frase-gatilho antes de perguntar, mudanca de metodo nao se adota no meio do trabalho" -m "- tabela de gatilhos ganha a linha do bloco de fecho por turno: a tabela e consultada por evento, a secao e lida por sequencia" -m "- check C38 novo; analises e wo0081 versionadas" -m "- KIT_VERSION 1.103.0; custo de teto zero; 18/18, 81/81 -> 82/82, 0 erros"
```

```
git push
```
