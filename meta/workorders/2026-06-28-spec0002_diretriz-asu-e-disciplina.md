# Spec — Diretriz ASU (editar→ASU / novo→baixar) + disciplina na instrução curta (config, log) + nome de instrução ASU

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca o produto** (`index_template.html` → `index.html`): **precisa** de `node build.js` e `node validate.js`.
> Prompt: **"leia `meta/specs/2026-06-28-spec0002_diretriz-asu-e-disciplina.md` e execute"** (ou **"…só a Tarefa A"** para conservador).

## Contexto
Três frentes **já decididas**, todas de diretriz/texto (não mexem na lógica de geração por nicho — isso vem em outra spec):
- **(A/B) Diretriz ASU** — a mensagem formal do ASU (DEC-025 do lado deles, `mensagem-para-o-KCM-uso-do-ASU.md`) pede: **editar arquivo existente → ASU; arquivo NOVO → entregar pra baixar** (exceto `create_file` em instrução mista). Corrige um bug real: projetos geravam instrução ASU pra o usuário criar arquivo novo à mão. Também: lembrar de subir `INSTRUCTION_GUIDE.md` **e `PROMPT_IA.md`**.
- **(C) Disciplina obedecida** — diretrizes que vivem só no CEREBRO (lido 1×) não pegam; o que pega é a **instrução curta** (lida em toda mensagem). Levar pra lá os gatilhos críticos: **recomendação de configuração** (decidida nesta conversa) e **nome de log**. A recomendação de config também ganha **home nomeada** no CEREBRO.
- **(Decisão 4, metade ASU)** nome padronizado da instrução ASU: `AAAA-MM-DD-asuNNNN.yaml`.

---

## Tarefa A — reescrever a diretriz ASU em `buildClaudeMd()`

### A.1 — cabeçalho (linha 2182)
**Substituir a linha** `L.push("Este projeto entrega mudanças de código como instrução do **Atualizador Automático de Scripts (ASU)** — não arquivos inteiros. Pré-requisito: o \`INSTRUCTION_GUIDE.md\` está no conhecimento do Projeto e a ferramenta ASU está instalada.");` por:
```js
  L.push("Este projeto usa o **Atualizador Automático de Scripts (ASU)** para **alterar arquivos existentes** — responda com UMA instrução `yaml` (patch cirúrgico), não arquivos inteiros. Para **arquivos NOVOS**, entregue o arquivo **pronto para baixar** (não embuta o arquivo inteiro num bloco YAML — arrisca corromper no escape), **exceto** quando a criação faz parte de uma instrução que também edita existentes (operação atômica) — aí use `create_file` na mesma instrução. Pré-requisito: `INSTRUCTION_GUIDE.md` e `PROMPT_IA.md` estão no conhecimento do Projeto e o ASU está instalado.");
```

### A.2 — itens 1 a 4 (linhas 2184-2187) → substituir o bloco inteiro por 5 itens
```js
  L.push("1. Ao pedir uma \"instrução ASU\" (ou ao **editar** arquivos existentes), responda com **UM bloco `yaml`** cujo `format_version` é o declarado no `INSTRUCTION_GUIDE.md` (não fixe número aqui — o guia é o contrato). Nomeie a instrução `AAAA-MM-DD-asuNNNN.yaml` (ex.: `2026-06-28-asu0001.yaml`). Termine com `python -m src apply <arquivo>.yaml --root <RAIZ> --dry-run`. Nunca XML.");
  L.push("2. **Arquivo NOVO:** entregue-o pronto para baixar — não o reescreva como instrução ASU. Exceção: criação junto de edições a existentes na MESMA instrução → aí `create_file`. (Mesmo numa edição, o usuário pode preferir o arquivo inteiro para baixar — se pedir, respeite.)");
  L.push("3. Prefira edições **cirúrgicas** (`replace_function`/`replace_method`/`replace_section`/`set_json_path`); para JS e outras, `type: \"text\"` + `replace_context_block` com âncoras copiadas **literalmente** do arquivo real (indentação exata), casando **uma única vez** — só o miolo no `new_content`.");
  L.push("4. Não invente campos nem use número de linha; o `INSTRUCTION_GUIDE.md` é a referência obrigatória do formato.");
  L.push("5. **Verificação (sessão seguinte):** se emitiu uma instrução ASU e os arquivos estão à vista, confira no disco cada arquivo tocado antes de seguir — não confie em \"deu certo\".");
```

---

## Tarefa B — lembrete da UI também citar `PROMPT_IA.md` (linha 686)
**Na linha do callout `#asu-reminder`,** troque `suba o <code>INSTRUCTION_GUIDE.md</code> no conhecimento do Projeto` por:
```
suba o <code>INSTRUCTION_GUIDE.md</code> e o <code>PROMPT_IA.md</code> no conhecimento do Projeto
```

---

## Tarefa C — disciplina obedecida (instrução curta) + home da config no CEREBRO

### C.1 — gatilhos na instrução curta (`buildInstr`)
**Âncora:** a linha `if(groupModeOn()) lines.push("Projeto em grupo:...");` (linha 1914). **Insira DEPOIS dela:**
```js
  if(asuModeOn()) lines.push("Código: **editar** arquivo existente → instrução ASU (`yaml`, nome `AAAA-MM-DD-asuNNNN.yaml`); arquivo **novo** → entregue pronto para baixar. Detalhe no CEREBRO.");
  lines.push("**Config:** no fim, se a PRÓXIMA etapa pedir configuração diferente, recomende-a explícita (modelo / esforço Baixo→Máximo / pensamento lig-desl). Nunca afirme saber a config atual — recomende pela tarefa. Pesada com config fraca → peça aumento nomeando os níveis; folga → diga que pode baixar.");
  lines.push("**Log:** nomeie `logs/AAAA-MM-DD.md` (data ISO, sem a palavra \"log\" no nome).");
```

### C.2 — home nomeada da recomendação de config no CEREBRO (`buildClaudeMd`)
**Âncora:** a linha `if(asuModeOn()){` (linha 2178). **Insira IMEDIATAMENTE ANTES dela:**
```js
  L.push("");
  L.push("## Recomendação de configuração (fim de sessão)");
  L.push("");
  L.push("No fim de cada sessão, junto do resumo e de qualquer dúvida, avalie o que a **próxima etapa** exige e recomende a configuração de forma **completa e explícita**: **modelo** (ex.: Opus vs Sonnet), **esforço** (Baixo/Médio/Alto/Extra/Máximo) e **pensamento** (ligado/desligado).");
  L.push("- **Nunca afirme saber a configuração atual** — ela não é legível de forma confiável. Recomende pela TAREFA e pela config que o usuário declarou.");
  L.push("- Próxima etapa **pesada** + config provável fraca → **pare e peça o aumento, nomeando os níveis exatos**.");
  L.push("- Etapa atual **leve** mas config **alta** → **não pare no meio**; termine e, no fim, sinalize \"pode baixar para X na próxima\".");
  L.push("- É um **default recomendado**, não proibição — cabe sob a válvula de desvio registrado.");
```

---

## Validar (obrigatório — toca o produto)
1. `node build.js` → **OK**. Com tudo desligado, o `index.html` muda **só** pela seção de config e pelas 2 linhas universais da instrução curta (config + log) — o resto é gated por `asuMode`.
2. `node validate.js` → **17/17**.
3. **Manual:** ligue **"Saída via ASU?"** → na aba CEREBRO, o cabeçalho diz "editar→ASU / novo→baixar", o item 1 traz o nome `AAAA-MM-DD-asuNNNN.yaml`, o callout cita `PROMPT_IA.md`, e a instrução curta tem a linha de ASU. Em qualquer nicho (mesmo sem ASU): o CEREBRO tem a seção «Recomendação de configuração» e a instrução curta tem as linhas **Config** e **Log**.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — acrescente (confirme os próximos números livres):
```
## D-033 — Diretriz ASU: editar→ASU, novo→baixar (atende DEC-025 do ASU)
**Decisão.** A diretriz «Saída de código via ASU» passa a separar: **editar existente → instrução ASU**; **arquivo novo → entregar pra baixar** (exceto `create_file` em instrução mista; usuário pode pedir o inteiro). Instrução ASU nomeada `AAAA-MM-DD-asuNNNN.yaml`. Lembrete da UI e instrução curta também citam ASU e `PROMPT_IA.md`.
**Por quê.** Atende o pedido formal do ASU (DEC-025): embutir arquivo novo em YAML é mais caro e arrisca corromper no escape; e a instrução curta não reforçava ASU, então o comportamento dependia de a IA ter lido o fim do CEREBRO. Corrige o bug real de projetos gerarem instrução pra o usuário criar arquivo à mão.

## D-034 — Recomendação de configuração ao fim da sessão
**Decisão.** Gatilho universal: ao fim, recomendar config da próxima etapa (modelo / esforço / pensamento) de forma explícita, sem afirmar saber a config atual; parar e pedir aumento se a próxima for pesada e a config fraca; sinalizar que pode baixar se sobrou. Home no CEREBRO + linha-gatilho na instrução curta.
**Por quê.** O modelo não lê de forma confiável o próprio esforço/pensamento — recomendar pela tarefa é honesto (P8) e útil; e diretriz só pega quando está na instrução curta (lida em todo turno), não só no CEREBRO.
```
- **`meta/CHANGELOG.md`** — topo:
```
## v1.37.0 — Diretriz ASU + disciplina na instrução curta
- **ASU editar→/novo→baixar** (D-033): diretriz reescrita conforme DEC-025 do ASU; instrução ASU nomeada `AAAA-MM-DD-asuNNNN.yaml`; lembrete e instrução curta citam ASU + `PROMPT_IA.md`.
- **Recomendação de config** (D-034): home no CEREBRO + gatilho na instrução curta. **Nome de log** reforçado na instrução curta.
```
- **`meta/STATUS.md`** — versão → **v1.37.0** + linha na «Última sessão».

## Commit (Code roda; sem acento na mensagem)
```
git add index_template.html index.html meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: diretriz ASU (editar->ASU, novo->baixar) + disciplina na instrucao curta (config, log)" -m "D-033 atende DEC-025 do ASU + nome de instrucao AAAA-MM-DD-asuNNNN; D-034 recomendacao de config com home no CEREBRO e gatilho na instrucao curta; v1.37.0"
git push
```
