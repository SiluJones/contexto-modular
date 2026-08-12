# WO 0088 — Sonda e exploração como par; quem abre, fecha; e o gatilho oportunista

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. Nove edições; a mais longa é a Edição 2 (seção nova no CEREBRO, ~20 `L.push`), mecânica mas volumosa.
> **Pré-requisito:** `KIT_VERSION 1.107.1`, commit `484f35d`, `main` limpo, harness **18/18 · 87/87 · 0 erros**.
> **Base:** `meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md` §B — itens **B1**, **B4** e **B5** —, aceita integralmente pelo autor em `260812-1219.txt` («aceito a B toda como vc recomenda»). Origem: sand-land **FK-F**, **FK-I**, **FK-L**; Mapsmith **IDEA-073** e feedback **(7)**.
> **Material estudado nesta rodada, subido pelo autor:** `SKILL__sondar` (Mapsmith), `probe_pacote.py`, `probe-data.mjs`, `scan-games.mjs`, e quatro relatórios reais (`260805-1418`, `260805-1623`, `260809-1540` CONFERENCIA; `260808-2144` EXPLORACAO).
> **Depende de:** wo0087 (aplicada, `8aec7bd`; `/wrap` em `484f35d`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 8 e 9.

---

## 1. Por que

**A D-113 pegou o princípio da medição e deixou o artefato.** «Quem tem acesso ao disco mede, quem tem contexto decide» entrou no kit; **a palavra «sonda» não aparecia uma vez no fonte** — verificado. E o que os dois projetos construíram desde então mostra que o kit estava pedindo a coisa errada: **não é um artefato, são dois.**

**A frase do autor que fecha o assunto** (`260812-1219.txt`): *«exploração produz hipótese, script produz evidência.»* O Mapsmith registrou isso como DEC-0029 e separou os dois em arquivos diferentes — a skill `/sondar` (exploração) e o `probe_pacote.py` (conferência determinística). **A sugestão original (FK-F/FK-I) descrevia só a metade determinística**; a outra metade só apareceu quando ela faltou.

**Por que a separação importa, e não é vocabulário.** A regra 5 da skill `/sondar` do Mapsmith diz: *«NÃO parta da lista de checagens da sonda. Se você só olhar onde ela olha, você só acha o que ela já acharia — foi assim que o FIX-0008 sobreviveu a duas rodadas.»* Fundir os dois artefatos num só **destrói exatamente essa propriedade**: a exploração vira uma sonda mal feita, e o que a sonda não pergunta fica invisível para sempre.

**O caso que dá o custo, e é o melhor argumento do pacote.** O `probe_pacote.py` do Mapsmith produziu um relatório verde em tudo — `45/45 existem`, `extensões {'.webp': 45}`, `sprite_source existe: sim` — sobre 45 ícones **destruídos por dentro**, porque o conversor descartava o canal alfa. O `scan-games.mjs` do sand-land traz a lição escrita no cabeçalho, e ela é a melhor linha do corpus inteiro:

> *«até 2026-08-09 todos os nossos instrumentos mediam EXISTÊNCIA (…) Nenhum abria a imagem. **A pergunta que faltava não era “está no disco?”, era “o que está no disco presta?”**»*

**E as três propriedades do relatório não são teoria: estão no código.** O `probe-data.mjs` do sand-land as cita nominalmente no cabeçalho, com a razão de cada uma, e as implementa (`MAX_LIST = 20` com o total sempre impresso; seção sem insumo sai marcada `NAO CONFERIDA`, nunca omitida). O que falta é o kit dizê-las para quem ainda não as descobriu do jeito caro.

**Duas frentes menores entram de carona, porque são da mesma família — falta de gatilho, não falta de regra:**

- **B4 (sand-land FK-L).** *Quem abre, fecha.* Servidor de desenvolvimento acumulando entre sessões **chegou a travar a pasta e impedir o teste que definia uma WO**. Segunda ocorrência, nesta casa: o teste manual da wo0086 baixou um `claude-code-kit.zip` para a pasta pessoal do autor, e ele teve de perguntar o que era. **Duas ocorrências, dois projetos.**
- **B5 (Mapsmith feedback 7).** *Princípio sem gatilho não dispara.* A recomendação aceita foi explicitamente **não** auditar os 13 princípios — vira tabela longa que ninguém lê —, e sim registrar a **política oportunista**: cada vez que um princípio falha em campo, aquele princípio ganha o gatilho, com o evento real colhido do caso.

## 2. Contexto factual

Medido em sandbox no estado `484f35d` (repo reconstruído do mount, build reproduzindo `index.html` byte a byte — **791.994** —, harness verde 18/18 · 87/87 antes de qualquer edição).

- **`analiseFunil()` é chamada apenas em `buildClaudeMd`, nunca em `buildInstr`** — verificado (duas ocorrências no fonte, ambas no CEREBRO). A Edição 3 muda o funil **do CEREBRO**, não o das Instruções, e por isso custa zero.
- **Custo de teto: ZERO nas nove edições.** C28 imprime os mesmos números antes e depois: `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Isso é deliberado — o orçamento do modo Code tem só **36** de folga, e nada desta leva precisava estar nas Instruções.
- **O modelo de WO cresce de 8.406 para 8.658 caracteres** (número que o C27 e o C42 reportam; não há teto sobre ele).
- **`index.html` vai de 791.994 para 798.111 bytes.**

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato.** A pergunta feita ao repositório foi «que lugares do kit falam sobre medir, sobre o funil, e sobre o que a tarefa deixa aberto?». Grep pelo **fato** (`Medição delegada`, `analiseFunil`, `TRIGGERS_BASE`, `HYGIENE_RULES`, `buildWoTemplate`), não pela palavra «sonda» — que, sendo justamente a que falta, não acharia nada.

**Não truncado.** As 13 regras de higiene, a tabela de gatilhos inteira e as duas chamadas de `analiseFunil` foram lidas na íntegra.

**Contagem declarada: 6 pontos no `src/index.template.html`** (versão · seção nova no CEREBRO · funil · gatilhos · higiene · política de refino · checklist da WO — sendo os dois últimos em funções diferentes, daí **7 edições** para **6 regiões**), mais **2 no `validate.js`** (C21 ajustado, C44 novo). **Conteste antes de agir.**

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.107.1";
```

**Substituir por:**

```
const KIT_VERSION = "1.108.0";
```

---

## Edição 2 — `src/index.template.html` · `buildClaudeMd`, seção «Sonda e exploração»

**Âncora** (fim da seção «Medição delegada», imediatamente antes do «Bloco de fecho»):

```
  L.push("");
  L.push("## Bloco de 
```

> A âncora termina **no meio da palavra** — é assim mesmo. `"## Bloco de ` (com o espaço final) é o menor trecho único; a linha continua e você não a altera.

**Substituir por:**

```
  L.push("");
  L.push("## Sonda e exploração — o par que produz evidência");
  L.push("");
  L.push("A medição delegada acima responde a pergunta que alguém já soube fazer. Quando o material é grande demais para caber numa conversa, ou quando ninguém sabe ainda qual é a pergunta, ela não basta — e o que falta são **dois** artefatos, não um:");
  L.push("");
  L.push("- **Sonda** — script **determinístico** que a raia de planejamento escreve, a de execução roda sobre os dados, e que devolve um relatório pequeno. Responde perguntas que alguém já sabia fazer. **Produz evidência.** É reexecutável: rodar duas vezes (antes/depois de uma mudança) e comparar os dois relatórios é o que prova que a mudança fez o que prometia.");
  L.push("- **Exploração** — passada de leitura **sem hipótese prévia**, feita pela raia de execução, que devolve **candidatos a checagem**. Descobre as perguntas que ninguém fez. **Produz hipótese.**");
  L.push("");
  L.push("**Funil:** `exploração` (levanta a pergunta) → `sonda` (mede) → `análise` (raciocina) → ordem de trabalho (muda). **Nenhuma das duas é ordem de trabalho:** não têm âncora, não têm commit, não mudam o repositório. O relatório é a única saída.");
  L.push("");
  L.push("**Três propriedades do relatório — as três juntas, ou o relatório vira lixo:**");
  L.push("1. **Tabela e contagens, nunca prosa.** Número solto é contestável; número ao lado do comando que o produziu, não.");
  L.push("2. **O que NÃO foi olhado é declarado.** Sem isso, ausência vira zero na leitura seguinte — e zero é um fato, ausência não. Seção que não pôde ser medida sai marcada como não conferida, **nunca omitida**.");
  L.push("3. **Nada truncado em silêncio.** Lista cortada mostra o TOTAL. Inventário paginado é inventário errado, e o item que ficou de fora é o que ninguém vai procurar depois.");
  L.push("");
  L.push("**Nenhuma das duas dá veredito, e a razão é a que importa: teste de conformidade não detecta que a especificação está errada.** A sonda relata o fato e **não nomeia a causa** — ausências de origens diferentes produzem o mesmo sintoma. Decidir é da raia de planejamento, com o dono.");
  L.push("- **Existência não é aptidão.** «Está no disco?» e «o que está no disco presta?» são perguntas diferentes, e instrumento que só sabe contar responde sempre a primeira. Caso real: um relatório verde em tudo — arquivos existem, extensão certa, índice bate — sobre imagens destruídas por dentro, porque **nenhum instrumento abriu uma imagem**. Ao escrever uma sonda, pergunte o que ela NÃO abre.");
  L.push("- **A exploração não parte da lista de checagens da sonda.** Se ela só olhar onde a sonda já olha, ela só acha o que a sonda já acharia. É a mesma regra do inventário — a lista sai do artefato, não de quem já a escreveu — vista uma camada acima.");
  L.push("- **Todo achado vem com o comando que o reproduz.** Achado sem forma de reproduzir não entra: vai para «observações descartadas», com o motivo. Número contado de cabeça não vale.");
  L.push("");
  L.push("**Onde mora.** Script e relatórios ficam **fora** do que sobe ao Projeto (workspace ao lado do repositório, ou pasta ignorada) — são grandes e reexecutáveis. Nome com **carimbo de tempo primeiro** e o tipo depois (`AAMMDD-HHMM-EXPLORACAO.md`, `AAMMDD-HHMM-CONFERENCIA.md`), para a pasta se ordenar sozinha. O que sobe ao registro é o que foi **extraído** deles: um número no `DECISIONS`, um candidato no `IDEAS`. O relatório é insumo, não memória.");
  L.push("");
  L.push("## Bloco de 
```

---

## Edição 3 — `src/index.template.html` · `analiseFunil`, o degrau que mede

**Âncora:**

```
  let s = codeModeOn()
    ? "- **Funil:** análise → **WO** (`meta/workorders/`, nome `AAMMDD-woNNNN-desc.md`) → `DECISIONS.md`."
    : "- **Funil:** análise → decisão registrada no `DECISIONS.md` → trabalho.";
```

**Substituir por:**

```
  let s = codeModeOn()
    ? "- **Funil:** exploração/sonda (medem, não decidem) → análise → **WO** (`meta/workorders/`, nome `AAMMDD-woNNNN-desc.md`) → `DECISIONS.md`."
    : "- **Funil:** análise → decisão registrada no `DECISIONS.md` → trabalho.";
```

> Só o ramo de modo Code muda: sem executor não há quem rode a sonda, e prometer o degrau seria promessa vazia. **Custo zero** — esta função só é chamada pelo CEREBRO.

---

## Edição 4 — `src/index.template.html` · `TRIGGERS_BASE`, dois gatilhos de evento

**Âncora** (a entrada acrescentada pela wo0086):

```
  ["Evento que MERECE log: cortar versao, registrar uma decisao ou um bug grave, virar o dia de trabalho", "Escreve `logs/AAAA-MM-DD.md` na hora. O log nao espera o fim da conversa — numa conversa longa o fim nunca chega, e e assim que dias inteiros ficam sem registro."],
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
  ["Precisa de um numero sobre material grande demais para a conversa", "Manda MEDIR (sonda) em vez de deduzir ou pedir upload. Se ninguem sabe ainda qual e a pergunta, manda EXPLORAR primeiro: exploracao produz hipotese, sonda produz evidencia."],
  ["A tarefa criou algo FORA do repositorio (processo, porta, servidor de dev, arquivo temporario, download)", "Quem abriu, fecha — a tarefa termina com a maquina como a encontrou. O que nao puder ser fechado e DECLARADO no relatorio, com o caminho: e o que ninguem lembra de limpar."],
```

> Sem acento, seguindo a convenção do array. O C44 procura `Manda MEDIR (sonda)` e `Quem abriu, fecha` literalmente.

---

## Edição 5 — `src/index.template.html` · `HYGIENE_RULES`, «quem abre, fecha»

**Âncora** (início da última regra):

```
  "Válvula de desvio registrado: os templates
```

**Substituir por:**

```
  "**Quem abre, fecha — e o que não fechar, declara.** Toda tarefa cria coisas **fora** do repositório: processo, porta, servidor de desenvolvimento, arquivo temporário, download de teste. Elas são de quem as criou, e a tarefa termina com a máquina como a encontrou. O que não puder ser fechado entra no relatório **com o caminho**, não como nota vaga — é exatamente o que ninguém lembra de limpar, e o custo aparece longe: servidor esquecido entre sessões chega a travar a pasta e impedir o teste seguinte; arquivo de teste largado numa pasta pessoal vira pergunta («isto aqui é seu?») numa conversa que já tinha fechado. E vale o par: **entrega bloco para outro rodar quem NÃO pode rodá-lo.** Quem tem o terminal executa e relata; devolver bloco para o dono colar, tendo como rodar, é trocar de raia.",
  "Válvula de desvio registrado: os templates
```

---

## Edição 6 — `src/index.template.html` · `buildClaudeMd`, política do gatilho oportunista

**Âncora:**

```
  L.push("- **Não inche.** Antes de acrescentar uma regra, pergunte se ela cabe no CEREBRO. Só vai para as Instruções o que precisa ser lembrado em TODO turno.");
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
  L.push("- **Princípio sem gatilho não dispara — e o remédio é oportunista, não uma auditoria.** Virtude é escrita no infinitivo («analisa antes de aceitar», «explica trade-offs») e não tem hora; gatilho é escrito com o **evento na frente** («quando o dono impõe uma restrição para evitar perda, proponha a forma mais barata de obter a mesma proteção») e dispara sozinho. Percorrer todos os princípios inventando gatilhos gera tabela longa que ninguém lê. **A política é outra: toda vez que um princípio falhar em campo, aquele princípio ganha o gatilho — com o evento real que o teria disparado, colhido do caso.** O caso é o que torna o gatilho específico; sem ele, você escreve outra virtude e acha que escreveu um gatilho.");
```

---

## Edição 7 — `src/index.template.html` · `buildWoTemplate`, o que ficou aberto fora do repo

**Âncora** (o item acrescentado pela wo0086):

```
    "- [ ] **Se a WO declarou um inventario** (\"onze lugares\"), refaca a contagem no repo. Numero diferente:",
    "      **PARE e reporte antes de editar** — a divergencia e o achado, nao um detalhe a acomodar.",
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
    "- [ ] **O que esta tarefa criou FORA do repositorio ja foi fechado?** Processo, porta, servidor de",
    "      desenvolvimento, arquivo temporario, download de teste. O que nao deu para fechar entra no",
    "      relatorio **com o caminho** — nao como nota vaga.",
```

---

## Edição 8a — `validate.js` · o C21 acompanha o funil novo

> **Não é workaround: o C21 fez o trabalho dele.** Ele trava a forma do funil, e a Edição 3 muda essa forma. A regex passa a tolerar o degrau novo **e** a exigi-lo — se alguém apagar a sonda do funil, o C21 reprova.

**Âncora:**

```
  assert(/\*\*Funil:\*\* análise → \*\*WO\*\*/.test(cmdCode), "modo Code: funil nao aponta para a WO");
```

**Substituir por:**

```
  assert(/\*\*Funil:\*\*[^\n]*análise → \*\*WO\*\*/.test(cmdCode), "modo Code: funil nao aponta para a WO");
  assert(/exploração\/sonda[^\n]*análise → \*\*WO\*\*/.test(cmdCode), "modo Code: o funil perdeu o degrau que MEDE antes de raciocinar (wo0088)");
```

## Edição 8b — `validate.js` · check C44

**Âncora** (o comentário que abre o C43 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
/* C43 (wo0087) — O KCM e usuario do proprio kit. Este e o UNICO check que abre arquivo
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C44 sonda e exploracao como par (wo0088): tres propriedades, sem veredito, existencia nao e aptidao; quem abre fecha; gatilho oportunista", () => {
  const wo = T.buildWoTemplate();
  const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    const cmd = T.buildClaudeMd(n);
    // (1) o par existe e esta separado: uma produz hipotese, a outra evidencia
    assert(/## Sonda e exploração/.test(cmd), id+": CEREBRO sem a secao da sonda");
    assert(/Produz evidência/.test(cmd) && /Produz hipótese/.test(cmd), id+": sonda e exploracao nao estao separadas pelo que cada uma produz — sem isso viram sinonimos e a exploracao vira sonda mal feita");
    assert(/determinístico/.test(cmd), id+": a sonda nao e declarada deterministica — o que a torna reexecutavel e comparavel antes/depois");
    // (2) as tres propriedades do relatorio, as tres
    assert(/Tabela e contagens, nunca prosa/.test(cmd), id+": falta a propriedade 1 do relatorio");
    assert(/ausência vira zero|não foi olhado é declarado/i.test(cmd), id+": falta a propriedade 2 — sem ela, o que nao foi medido vira zero na leitura seguinte");
    assert(/Nada truncado em silêncio/.test(cmd), id+": falta a propriedade 3 (truncamento)");
    // (3) a proibicao de veredito COM a razao, que e o que a torna aplicavel
    assert(/teste de conformidade não detecta que a especificação está errada/i.test(cmd), id+": a proibicao de veredito veio sem a razao — regra sem razao nao sobrevive a primeira pressa");
    assert(/não nomeia a causa/.test(cmd), id+": a sonda ainda pode nomear a causa do que mediu");
    // (4) existencia nao e aptidao — a licao do relatorio verde sobre arquivos destruidos
    assert(/Existência não é aptidão/.test(cmd), id+": falta a distincao entre existir e prestar");
    assert(/nenhum instrumento abriu uma imagem/.test(cmd), id+": a licao veio sem o caso que a produziu");
    // (5) a exploracao nao herda o recorte da sonda (a regra do inventario uma camada acima)
    assert(/não parte da lista de checagens da sonda/.test(cmd), id+": a exploracao pode herdar o recorte da sonda e so achar o que ela ja acharia");
    assert(/comando que o reproduz/.test(cmd), id+": achado sem forma de reproduzir ainda entra no relatorio");
    // (6) o funil ganhou o degrau que MEDE, antes do que raciocina
    S.workmode.codeMode = "yes";
    const cmdC = T.buildClaudeMd(n);
    S.workmode.codeMode = prev;
    assert(/exploração\/sonda \(medem, não decidem\)/.test(cmdC), id+" (Code): o funil nao traz o degrau que mede antes de raciocinar");
    // (7) gatilhos de evento novos
    assert(/Manda MEDIR \(sonda\)/.test(cmd), id+": tabela de gatilhos sem o gatilho da medicao/sonda");
    assert(/Quem abriu, fecha/.test(cmd), id+": tabela de gatilhos sem o gatilho de limpar o que ficou fora do repo");
    // (8) higiene: quem abre fecha + entrega bloco quem nao pode rodar
    assert(/\*\*Quem abre, fecha — e o que não fechar, declara\.\*\*/.test(cmd), id+": higiene sem a regra de fechar o que a tarefa abriu");
    assert(/entrega bloco para outro rodar quem NÃO pode rodá-lo/i.test(cmd), id+": falta o par — quem tem terminal executa, nao devolve bloco (FK-L do sand-land)");
    // (9) politica do gatilho oportunista, com a recusa explicita da auditoria
    assert(/Princípio sem gatilho não dispara/.test(cmd), id+": falta a politica de gatilho");
    assert(/oportunista, não uma auditoria/.test(cmd), id+": a politica nao recusa a auditoria de todos os principios — sem isso ela vira tabela longa que ninguem le");
    assert(/evento na frente/.test(cmd), id+": a politica nao diz COMO se escreve um gatilho (evento na frente), so que ele falta");
  });
  // (10) o modelo de WO cobra o que ficou aberto fora do repositorio
  assert(/criou FORA do repositorio/.test(wo), "modelo de WO nao cobra o que a tarefa deixou aberto fora do repo");
  assert(/com o caminho/.test(wo), "o modelo aceita nota vaga em vez do caminho do que nao foi fechado");
  S.workmode.codeMode = prev;
  return "ok";
});
```

---

## Edição 9 — `meta/DECISIONS.md` · registra a D-122

**Âncora** (última linha do arquivo, fim da D-121):

```
`KIT_VERSION 1.107.1` (correção, não feature). **Custo de teto ZERO** — nenhuma edição toca `buildInstr`: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.107.0. Harness **18/18, 86/86 → 87/87, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-122 — Sonda e exploração entram como PAR (uma produz evidência, a outra hipótese); quem abre fecha; e o gatilho de princípio passa a ser oportunista (wo0088)

**Base.** `meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md` §B (B1, B4, B5), aceita integralmente pelo autor em 2026-08-12. Origem: sand-land **FK-F**, **FK-I**, **FK-L**; Mapsmith **IDEA-073** e feedback **(7)**.

**A correção do que a D-113 pegou pela metade.** A D-113 instalou o princípio da medição delegada — «quem tem o disco mede, quem tem o contexto decide» — e deixou o artefato de fora: a palavra «sonda» não aparecia uma vez no fonte do kit. Ao estudar o material que os dois projetos construíram desde então (a skill `/sondar` do Mapsmith, `probe_pacote.py`, `probe-data.mjs`, `scan-games.mjs` e quatro relatórios reais), ficou claro que **o kit pedia a coisa errada: não é um artefato, são dois.**

**Sonda ≠ exploração, e a diferença é operacional.** Na formulação do autor: *exploração produz hipótese, script produz evidência*. A **sonda** é determinística, responde perguntas que alguém já sabia fazer, e é **reexecutável** — rodar antes e depois de uma mudança e comparar os relatórios é o que prova que a mudança fez o que prometia. A **exploração** é uma passada sem hipótese prévia que devolve **candidatos a checagem**. **Fundir as duas destrói a propriedade que justifica a segunda:** a regra 5 da skill do Mapsmith diz que a exploração *não parte da lista de checagens da sonda* — «se você só olhar onde ela olha, você só acha o que ela já acharia; foi assim que o FIX-0008 sobreviveu a duas rodadas». É a regra do inventário da D-120 uma camada acima.

**A lição que dá o custo, e que o kit não tinha: existência não é aptidão.** O `probe_pacote.py` produziu um relatório verde em tudo — `45/45 existem`, `extensões {'.webp': 45}`, `sprite_source existe: sim` — sobre 45 ícones **destruídos por dentro**, porque o conversor descartava o canal alfa. O `scan-games.mjs` do sand-land carrega a formulação no cabeçalho: *«a pergunta que faltava não era “está no disco?”, era “o que está no disco presta?”»*. Instrumento que só sabe contar responde sempre à primeira. Entra no kit como regra com o caso junto — **ao escrever uma sonda, pergunte o que ela NÃO abre**.

**As três propriedades do relatório entram como estavam especificadas, porque já estão implementadas.** Tabela e contagens nunca prosa · o que NÃO foi olhado é declarado (o `probe-data.mjs` marca seção sem insumo como não conferida, nunca a omite) · nada truncado em silêncio (`MAX_LIST = 20`, com o total sempre impresso). **Nenhuma das duas dá veredito**, e a razão vai junto porque é ela que sobrevive à pressa: *teste de conformidade não detecta que a especificação está errada*. A sonda relata o fato e **não nomeia a causa** — ausências de origens diferentes produzem o mesmo sintoma.

**Onde mora.** Fora do que sobe ao Projeto, com **carimbo de tempo primeiro** no nome (`AAMMDD-HHMM-EXPLORACAO.md`, `AAMMDD-HHMM-CONFERENCIA.md`), para a pasta se ordenar sozinha. O relatório é **insumo, não memória**: o que sobe ao registro é o que foi extraído dele.

**Duas frentes menores, da mesma família — falta de gatilho, não falta de regra.** **(B4, FK-L do sand-land)** *Quem abre, fecha, e o que não fechar, declara com o caminho.* Servidor de desenvolvimento esquecido entre sessões chegou a travar a pasta e impedir o teste que definia uma WO; e nesta casa o teste manual da wo0086 largou um `.zip` na pasta pessoal do autor, que teve de perguntar o que era. Duas ocorrências, dois projetos. Vem com o par que a FK-L também pedia e a wo0087 já provou: **entrega bloco para outro rodar quem NÃO pode rodá-lo.** **(B5, Mapsmith feedback 7)** *Princípio sem gatilho não dispara* — e a decisão foi explicitamente **não** auditar os 13 princípios, porque auditoria gera tabela longa que ninguém lê. A política registrada é **oportunista**: cada vez que um princípio falhar em campo, aquele princípio ganha o gatilho, com o evento real colhido do caso. Foi o que a D-120 já fez uma vez, sem nome.

**O C21 mudou junto, e fez o trabalho dele.** Ele travava a forma literal do funil e reprovou quando a Edição 3 acrescentou o degrau — comportamento correto. A regex foi afrouxada no meio e **apertada na ponta**: agora exige o degrau novo, então apagar a sonda do funil reprova.

**Check C44 novo**, com **nove provas negativas**: sonda e exploração virando sinônimo · falta da propriedade do truncamento · veredito sem a razão · existência virando aptidão · exploração partindo da lista da sonda · funil sem o degrau que mede · higiene sem «quem abre fecha» · política virando auditoria · gatilho de medição ausente.

`KIT_VERSION 1.108.0`. **Custo de teto ZERO nas nove edições** — nada foi para as Instruções, de propósito: o orçamento do modo Code tem 36 de folga. C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.107.1; folga do `narrative` em **289**. `analiseFunil()` foi verificada como exclusiva do CEREBRO (duas chamadas, nenhuma em `buildInstr`). Modelo de WO de **8.406 → 8.658** caracteres. Harness **18/18, 87/87 → 88/88, 0 erros**.
```

---

## Edição 10 — `meta/IDEAS.md` · registra a leva

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-12 — FK-F/FK-I (sonda), FK-L(a) (quem abre, fecha) e feedback (7) do Mapsmith (gatilho) — ACEITOS E IMPLEMENTADOS (D-122, wo0088)
**A sonda entrou como PAR, e essa é a correção mais importante da leva.** A sugestão original descrevia só a metade determinística; estudando os artefatos reais dos dois projetos ficou claro que existem dois artefatos com propósitos opostos — *exploração produz hipótese, sonda produz evidência* —, e que fundi-los destrói a propriedade que justifica a segunda (a exploração que parte da lista de checagens da sonda só acha o que a sonda já acharia). **A lição de maior valor do pacote inteiro veio do `scan-games.mjs` do sand-land:** «a pergunta que faltava não era “está no disco?”, era “o que está no disco presta?”» — existência não é aptidão, e instrumento que só conta responde sempre à primeira. Check **C44**, nove provas negativas, custo de teto zero.

**Fecha o FK-L do sand-land por inteiro** — a metade (b) («entrega blocos quem não pode executá-los») já tinha sido fechada pela wo0087/D-121; a metade (a) («quem abre, fecha») entra agora como regra de higiene, gatilho de evento e item do checklist da WO, com as duas ocorrências medidas: o servidor de desenvolvimento que travou a pasta lá, e o `.zip` de teste largado na pasta pessoal do autor aqui.

**Do feedback (7) do Mapsmith, a política e não a auditoria.** «Princípio sem gatilho não dispara» está certo, mas percorrer os 13 princípios inventando gatilhos gera tabela longa que ninguém lê. Fica registrado o método oportunista: princípio que falha em campo ganha o gatilho, com o evento real colhido do caso. É o que a D-120 já tinha feito uma vez sem dar nome.

**Ainda aberto do inventário, por decisão de sequência:** **B2** (correspondência entre projetos — nome, contador `NN` compartilhado e regra de descarte; sand-land FK-H) e **B3** (`meta/refs/` — o autor esclareceu em 2026-08-12 que é pasta de «arquivos sem lugar», irmã de `meta/docs/` no sand-land, e que a organização é questão dos próprios projetos). Os dois entram na leva seguinte, antes dos pacotes de update.
```

---

## Fora de escopo

- **B2 e B3** — ficam para a leva seguinte, registrados no IDEAS.
- **Um molde de sonda no pacote do Code** (`_TEMPLATE` de sonda, como o de WO) — tentador e **deliberadamente fora**: o sand-land avisa que *três propriedades a fixar no molde, senão vira lixo*, e um molde que exija tabela, declaração de não-olhado e artefato bruto para medir três arquivos será ignorado. Primeiro o verbete; o molde só se um projeto pedir.
- **Skill `/sondar` no kit-Code** — mesma razão: a do Mapsmith é específica do formato de pacote dele. O que generaliza são as regras, não o roteiro.
- **Os 13 princípios** — a política é oportunista; nenhum princípio ganha gatilho nesta WO.

## Armadilhas desta WO

- **A âncora da Edição 2 termina no meio da palavra** (`"## Bloco de ` com espaço final). É o menor trecho único; não a «complete».
- **Fim de linha:** `src/index.template.html` é **CRLF**, `validate.js` é **LF**. As Edições 2, 3, 5 e 7 têm âncora multi-linha no template — se alguma não casar, o motivo é o separador: ancore só na **primeira linha** e insira o resto depois dela. Confira ao fim: template com **0 LF soltos**.
- **A Edição 4 é sem acento** (convenção do `TRIGGERS_BASE`) e a Edição 5 é **com** acento (convenção das `HYGIENE_RULES`). O C44 procura as duas formas literalmente. **Não uniformize.**
- **A Edição 8a afrouxa uma regex e aperta outra.** Se você só afrouxar, o C21 fica verde sem exigir o degrau novo — e a Edição 3 poderia ser revertida sem ninguém notar. As duas linhas, sempre.
- **`\/` dentro das regex do C44** (`/exploração\/sonda/`) é escape obrigatório. Copie literalmente.
- **O C27 e o C42 vão reportar 8658** em vez de 8406. Esperado: é o `wo.length`, sem teto.
- **Números de check:** C44 é o próximo livre (C43 é da wo0087). Conferido no `validate.js`.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. *(O `meta/STATUS.md` fica para o `/wrap`.)*
- [ ] **Inventário declarado: 6 regiões no template + 2 pontos no `validate.js`.** Refaça a contagem; divergiu, **PARE e reporte antes de editar**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 88/88 checagens, 0 erros**, com **C44 verde** e **C21 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Diferente disso, alguma edição vazou para `buildInstr` — **PARE e reporte**.
- [ ] `index.html` com **798.111 bytes** e template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de arquivo gerado e execução do harness — reversível, mesma máquina, nada fora do repositório.
  - **Chega no ramo?** `buildClaudeMd()` (Edições 2, 3 via `analiseFunil`, 6), `TRIGGERS_BASE` (4), `HYGIENE_RULES` (5) e `buildWoTemplate()` (7) — todas as funções que esta WO tocou. O C44 exercita as cinco; rodar o harness já passa por elas.
  - **Prova de vida:** o harness verde sozinho não prova que o C44 morde. **Force o sinal:** no `src/index.template.html`, troque temporariamente `Nada truncado em silêncio` por `Corte a lista`, rode `node build.js && node validate.js index.html` e confirme que o **C44 falha** com a mensagem da propriedade 3; desfaça, rebuild, e confirme o verde. Sem ver o vermelho, o verde não significa nada.
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** *(Item novo desta WO, aplicado a ela mesma.)* Se você não abriu servidor nem baixou nada, diga isso no relatório — «nada criado fora do repositório» é resultado, não silêncio.

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · validação (C28, C44, C21, C27) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever** — a skill já traz a ordem desde a wo0087.

> **Para o `/wrap`:** o `meta/STATUS.md` cita `v1.107.1` e `87/87` na linha 4 e no título. Atualize as ocorrências **vivas** para `v1.108.0` e `88/88`, cite o **C44** antes do C43, acrescente **D-122** aos concluídos. Os números de orçamento **não mudam**. Não toque nos históricos dentro de «Sessão anterior». Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três, sem devolver.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260812-wo0088-sonda-e-exploracao-como-par.md
```

```
git commit -m "feat(kit): sonda e exploracao entram como par, e quem abre fecha" -m "A D-113 pegou o principio da medicao e deixou o artefato: a palavra sonda nao aparecia uma vez no fonte. Estudando os scripts e relatorios reais dos dois projetos, ficou claro que nao e um artefato, sao dois - exploracao produz hipotese, sonda produz evidencia - e que fundi-los destroi a propriedade que justifica o segundo: exploracao que parte da lista de checagens da sonda so acha o que a sonda ja acharia." -m "Entram as tres propriedades do relatorio (tabela e contagens nunca prosa; o que nao foi olhado e declarado; nada truncado em silencio), a proibicao de veredito com a razao que a sustenta - teste de conformidade nao detecta que a especificacao esta errada - e a licao que custou 45 icones destruidos: existencia nao e aptidao, e instrumento que so conta responde sempre a pergunta errada." -m "Quem abre fecha, e o que nao fechar declara com o caminho: fecha o FK-L do sand-land por inteiro. E o gatilho de principio vira politica oportunista em vez de auditoria - principio que falha em campo ganha o gatilho, com o evento real colhido do caso." -m "Check C44 novo com nove provas negativas; C21 acompanha o funil e passa a exigir o degrau que mede. Custo de teto zero. wo0088, D-122."
```

```
git push
```
