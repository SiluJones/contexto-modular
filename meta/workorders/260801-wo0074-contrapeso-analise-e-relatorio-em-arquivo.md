# WO 0074 — Contrapeso do gatilho de análise + relatório do Code gravado em arquivo

> **Tipo:** mista (código + config + doc de higiene).
> **Config sugerida:** Sonnet 5, esforço **Médio**. As âncoras vêm testadas; não há decisão delegada.
> **Pré-requisito:** `v1.94.0`, commit `4f47638`, árvore limpa, harness **18/18 · 73/73 · 0 erros**.
> **Base:** conversa de 2026-08-01 (chat) + `IDEAS.md` do ASU, seção «Feedback para o Kit», item 5 de
> 2026-07-30 (ocorrência real do gatilho disparando onde não devia) + a spec `260730-origem-do-backup.md`
> como corpo de delito.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte** — nunca chute um
> lugar próximo.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE**
> o item e diga no relatório — não duplique.

> **Canal dos meta neste ciclo = CODE.** Esta WO É o registro: aplique os appends previstos em
> «Ao terminar» e não espere doc do chat.

---

## 1. Por que

O gatilho de análise que a wo0063 levou aos 18 nichos **dispara demais e não sabe parar**. A causa é
assimetria de concretude no texto gerado: o lado que **alarga** («mudar o formato de um artefato que
outra pessoa vai ler») vem com cinco exemplos nomeados e um reforço («mesmo quando o diff é pequeno»),
enquanto o lado que **estreita** é um adjetivo solto («mudança pequena não pede análise») e aparece
depois. Entre um critério reconhecível e uma abstração, o assistente segue o reconhecível.

Há ocorrência de campo documentada (ASU, 2026-07-30): pedido pequeno → gatilho invocado → o assistente
foi à fonte, **descobriu ali que o formato não mudava** (o manifesto já tinha cabeçalho `#`; o parser já
o ignorava), registrou o fato dentro da própria spec **e continuou escrevendo**. Constatou a premissa
cair e não atualizou a conclusão; devolveu ao usuário um «ponto de decisão» que era escolha técnica
dele, custando um turno. A seção ensina a **começar** uma análise e nunca ensina a **abandonar** uma.

Em paralelo, a raia de execução já produz um relatório de trabalho a cada `/apply-wo` e `/wrap`, e o
usuário hoje **copia esse relatório à mão** para um `.txt` na pasta-pai do repo — é de lá que a sessão
de planejamento seguinte o lê (o ritual já manda «cheque `.txt` avulsos no mount»). Automatizar a
gravação fecha o laço sem inventar processo novo.

---

## Edição 1 — `src/index.template.html` · linha do gatilho nas Instruções do Projeto

**Âncora** (função que monta as Instruções, logo depois da linha «**Log:**»):

```
  lines.push("**Análise antes do compromisso:** mudança não-trivial → análise escrita antes (`analises/AAMMDD-ANALISE-<tema>.md`). Formato e funil no CEREBRO.");
```

**Substituir por:**

```
  lines.push("**Análise antes do compromisso:** não-trivial → `analises/AAMMDD-ANALISE-<tema>.md`; QUÊ já decidido = execução, vá direto. Gatilho e abandono no CEREBRO.");
```

> Medido: 144 → **154 caracteres** (+10). Depois desta WO o C28 deve imprimir
> `padrao 6638/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7539/7600`.

## Edição 2 — `src/index.template.html` · testes baratos ANTES do resto da seção

**Âncora** (seção «Análise antes do compromisso» do CEREBRO gerado — primeiro item da lista):

```
  L.push("- **Onde:** `analises/AAMMDD-ANALISE-<assunto>.md` (projeto com pasta `meta/`: `meta/analises/`). A pasta **nasce no primeiro uso** — nunca antes, nunca vazia. A data é a de criação e não muda depois.");
```

**Inserir IMEDIATAMENTE ANTES** a linha:

```
  L.push("- **Antes de escrever, dois testes baratos.** (1) **O QUÊ já está decidido?** Então isto é execução, não análise — vá para o trabalho, que já tem critério de aceite e armadilhas. (2) **Cabe em meia página de conversa?** Então é conversa. Análise é para a decisão cara de desfazer, cujo custo precisa estar à vista ANTES do compromisso; cerimônia em cima de trivialidade é desperdício.");
```

## Edição 3 — `src/index.template.html` · o gatilho vira pergunta a refazer, e ganha limite

**Âncora** (mesma seção, item «Gatilho concreto»):

```
  L.push("- **Gatilho concreto, além do «não-trivial»:** mudar o **formato de um artefato que outra pessoa — ou o você do futuro — vai ler ou editar** pede análise, mesmo quando o diff é pequeno. Nome de arquivo, estrutura de pasta, layout de bloco gerado, campo de formulário, vocabulário de um termo em uso: o custo não está no diff, está em quem vai conviver com ele.");
```

**Substituir por:**

```
  L.push("- **Gatilho concreto, além do «não-trivial»:** mudar o **formato de um artefato que outra pessoa — ou o você do futuro — vai ler ou editar** pede análise, mesmo quando o diff é pequeno. Nome de arquivo, estrutura de pasta, layout de bloco gerado, campo de formulário, vocabulário de um termo em uso: o custo não está no diff, está em quem vai conviver com ele. **É uma pergunta a refazer DEPOIS de ler a fonte, não uma senha para começar a escrever** — e tem limite: acrescentar um campo, uma linha ou uma seção a um formato que **já é extensível** não é mudar o formato. Se quem lê hoje continua lendo sem ajuste, não há convivência nova a negociar.");
```

> O trecho `vai ler ou editar** pede análise` é asserido pelo C24 — preserve-o palavra por palavra.

## Edição 4 — `src/index.template.html` · cláusula de abandono no lugar de «mudança pequena»

**Âncora** (mesma seção, item seguinte ao gatilho):

```
  L.push("- **Mudança pequena não pede análise.** Cerimônia em cima de trivialidade é desperdício — vá direto ao trabalho. Na dúvida, meia página resolve.");
```

**Substituir por:**

```
  L.push("- **Abandonar no meio é desfecho legítimo.** O que tem valor é ler a fonte, não escrever o documento. Se a leitura derrubar a premissa que disparou o gatilho — o formato já era extensível, o problema não existia, a decisão já estava tomada —, **pare, diga o que a leitura mostrou e vá trabalhar**. Análise que continua depois da premissa cair devolve como «ponto de decisão» o que era escolha técnica sua, e custa um turno.");
```

> O conteúdo de «mudança pequena» não se perdeu: subiu para a Edição 2, onde passa a ser lido **antes**
> do lado que alarga. Isso é o remédio — a ordem, não o texto.

## Edição 5 — `src/index.template.html` · `CLAUDE.md` do kit do Code ganha o relatório em arquivo

**Âncora** (dentro de `buildCodeKitFiles()`, no array do `claudeMd`):

```
    "## Config (modelo × esforço)",
```

**Inserir IMEDIATAMENTE ANTES** as linhas:

```
    "## Relatório em arquivo (sempre, sem pedir)",
    "- Ao fechar QUALQUER tarefa (`/apply-wo` ou `/wrap`), grave o MESMO relatório também em `../AAMMDD-HHMM-code-<slug>.txt` — pasta-PAI do repo, fora do versionamento (troque `<slug>` pelo nome curto do projeto; a pasta-pai costuma ser compartilhada por vários repos).",
    "- Exige `permissions.additionalDirectories` no `.claude/settings.json`. Se a escrita for negada, DIGA e siga — o relatório no chat continua sendo a entrega.",
    "- **Para desligar:** apague esta seção. O relatório no chat não muda.",
    "",
```

## Edição 6 — `src/index.template.html` · `settings.json` do kit libera a pasta-pai

**Âncora** (dentro de `buildCodeKitFiles()`, no array do `settings`):

```
    '    "deny": ["Bash(rm -rf:*)"]',
```

**Substituir por:**

```
    '    "deny": ["Bash(rm -rf:*)"],',
    '    "additionalDirectories": ["../"]',
```

## Edição 7 — `src/index.template.html` · skill `apply-wo` do kit grava o relatório

**Âncora** (dentro de `buildCodeKitFiles()`, no array do `applyWo`):

```
    "Ao terminar, RELATE: o que foi feito, achados/desvios do texto da WO, arquivos tocados, build/validação e o commit.",
```

**Inserir IMEDIATAMENTE APÓS** a linha:

```
    "Grave o MESMO relatório em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

## Edição 8 — `src/index.template.html` · skill `wrap` do kit grava o relatório

**Âncora** (dentro de `buildCodeKitFiles()`, no array do `wrap`):

```
    "e me mostre o `git diff` e o comando de commit (uma linha por comando, mensagem SEM acento).",
```

**Inserir IMEDIATAMENTE APÓS** a linha:

```
    "Grave o relatório de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

## Edição 9 — `src/index.template.html` · bump do kit

**Âncora:**

```
const KIT_VERSION = "1.94.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.95.0";
```

## Edição 10 — `validate.js` · check C30

**Âncora** (primeira linha do check C29):

```
check("C29 fecho da leva sand-land (wo0072): gaveta Adiadas com gatilho, tipos de secao no HISTORY, pacote de update transitorio", () => {
```

**Inserir IMEDIATAMENTE ANTES** o bloco (e uma linha em branco entre ele e o C29):

```
check("C30 contrapeso do gatilho de analise + relatorio em arquivo (wo0074): teste barato antes do gatilho, clausula de abandono, kit do Code grava o relatorio", () => {
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    const instr=T.buildInstr(n);
    const iTeste=cmd.indexOf("Antes de escrever, dois testes baratos");
    const iGatilho=cmd.indexOf("Gatilho concreto, além do");
    assert(iTeste>=0, id+": CEREBRO sem os testes baratos que estreitam o gatilho");
    assert(iGatilho>=0, id+": CEREBRO perdeu o gatilho concreto");
    assert(iTeste<iGatilho, id+": o lado que estreita ficou DEPOIS do que alarga (a ordem e o remedio)");
    assert(/Então isto é execução, não análise/.test(cmd), id+": CEREBRO sem o teste do QUE ja decidido");
    assert(/Abandonar no meio é desfecho legítimo/.test(cmd), id+": CEREBRO sem a clausula de abandono");
    assert(/já é extensível\*\* não é mudar o formato/.test(cmd), id+": CEREBRO sem o limite do formato ja extensivel");
    assert(/pergunta a refazer DEPOIS de ler a fonte/.test(cmd), id+": gatilho nao virou pergunta a refazer apos ler a fonte");
    assert(/QUÊ já decidido = execução/.test(instr), id+": Instrucoes levam so o lado que alarga, sem o contrapeso");
  });
  const kit=T.buildCodeKitFiles();
  assert(/## Relatório em arquivo/.test(kit.claudeMd), "CLAUDE.md do kit nao manda gravar o relatorio em arquivo");
  assert(/Para desligar:\*\* apague esta seção/.test(kit.claudeMd), "o relatorio em arquivo nao tem interruptor local");
  assert(/additionalDirectories/.test(kit.settings), "settings.json do kit nao libera a pasta-pai (a escrita seria negada)");
  ["applyWo","wrap"].forEach(k => assert(/AAMMDD-HHMM-code-<slug>\.txt/.test(kit[k]), "skill "+k+" nao grava o relatorio no arquivo (regra so no CLAUDE.md evapora)"));
  return "ok";
});
```

---

# Dogfood — o próprio repo adota o relatório em arquivo

> Slug deste projeto: **`kcm`**. Pasta-pai: a que contém `contexto-modular/`.
> Exemplo de nome final: `../260801-1430-code-kcm.txt`.

## Edição 11 — `CLAUDE.md` (raiz do repo)

**Âncora** (última linha da seção «Como fechar uma tarefa»; é o parágrafo que começa com
`**Relate o trabalho**`) — **inserir IMEDIATAMENTE APÓS** esse parágrafo, com uma linha em branco antes:

```
Grave o MESMO relatório também em `../AAMMDD-HHMM-code-kcm.txt` (pasta-PAI do repo, fora do versionamento) — sempre, sem eu pedir, tanto em `/apply-wo` quanto em `/wrap`. Se a escrita for negada, DIGA e siga: o relatório no chat continua sendo a entrega. **Para desligar:** apague este parágrafo.
```

## Edição 12 — `.claude/skills/apply-wo/SKILL.md`

**Âncora** (últimas linhas do arquivo):

```
- Feche com o **relatório de trabalho** — o que fez, achados e desvios do texto literal da WO,
  arquivos tocados, resultado de build/validate, o commit. **Não** use o bloco de fecho do chat:
  aquele é da raia de planejamento.
```

**Inserir IMEDIATAMENTE APÓS:**

```
- **Grave o mesmo relatório em `../AAMMDD-HHMM-code-kcm.txt`** (pasta-pai do repo). Sempre, sem
  pedido. Se a escrita for negada, diga e siga — o relatório no chat é que vale.
```

## Edição 13 — `.claude/skills/wrap/SKILL.md`

**Âncora** (últimas linhas do arquivo):

```
- Me mostre o `git diff` e o comando de commit pronto: um bloco por comando (`git add` /
  `git commit` / `git push`), mensagem SEM acento, e o `git commit` em bloco separado para eu copiar
  isolado.
```

**Inserir IMEDIATAMENTE APÓS:**

```
- **Grave o relatório de trabalho em `../AAMMDD-HHMM-code-kcm.txt`** (pasta-pai do repo). Sempre, sem
  pedido. Se a escrita for negada, diga e siga.
```

## Edição 14 — `.claude/settings.json`

**Âncora:**

```
      "Bash(git push -f:*)"
    ]
  }
}
```

**Substituir por:**

```
      "Bash(git push -f:*)"
    ],
    "additionalDirectories": ["../"]
  }
}
```

## Edição 15 — `.flatdropignore` · análises decididas param de subir

**Âncora 15a** (comentário FORA do bloco — as quatro linhas sobre análises):

```
# Analises: enquanto forem POUCAS, sobem — a analise "Em discussao" precisa ser relida no turno
# seguinte. Quando pesarem, acrescente o par dentro do bloco:
#   meta/analises/*
#   !meta/analises/_TEMPLATE.md
```

**Substituir por:**

```
# Analises: sobe so a que esta ABERTA (Rascunho / Em discussao) — ela precisa ser relida no turno
# seguinte, e analise que o assistente nao ve nao e discutida, e reescrita do zero. Decidida,
# Implementada, Abandonada ou Substituida NAO sobe: o desfecho ja esta em DECISIONS/CHANGELOG, e
# cabecalho de Status velho no mount le como pendencia aberta (o P8 ao contrario). Reinclua a
# aberta NOMINALMENTE dentro do bloco, na MESMA leva em que ela nasce — regra sobre caminho que
# ainda nao existe nao sobrevive la dentro. Ex.:
#   !meta/analises/260801-ANALISE-<assunto>.md
```

**Âncora 15b** (DENTRO do bloco `# >>> flatdrop-editor`):

```
!meta/workorders/_GUIA-doc-por-wo.md
```

**Inserir IMEDIATAMENTE APÓS:**

```
meta/analises/*
```

> Ordem importa: `meta/analises/*` precisa vir **antes** do `!meta/analises/_TEMPLATE.md` que já
> existe dentro do bloco. Não mexa nesse `!` — ele continua onde está.

---

## Fora de escopo

- **Não** carimbar `Status` retroativo nas doze análises existentes. Elas saem do mount por regra; o
  cabeçalho se acerta quando alguma for reaberta. Arqueologia de metadado não entra aqui.
- **Não** decidir se a seção «Análise antes do compromisso» deve continuar universal nos 18 nichos.
  Não há campo ainda (nenhum projeto não-dev com Modo Code foi atualizado). Vira item de IDEAS com
  gatilho de retorno — ver «Ao terminar».
- **Não** adaptar o vocabulário da seção ao nicho (`cuisine` continua lendo «layout de bloco gerado»).
  Depende da decisão acima.
- **Não** mexer no `_TEMPLATE.md` das análises nem no funil de spec (o `SPEC.md` segue só no `dev`).
- **Não** criar pasta de relatórios: o arquivo cai direto na pasta-pai, que já existe.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF**; `validate.js`, `CLAUDE.md`, `.claude/**` e `.flatdropignore`
  são **LF**. Toda âncora aqui é de UMA linha por causa disso; ao inserir blocos de várias linhas,
  preserve o fim de linha do arquivo de destino.
- **C24 depende do texto do gatilho.** A Edição 3 acrescenta ao fim da linha e não toca no trecho
  `vai ler ou editar** pede análise`. Se o C24 ficar vermelho, foi aí.
- **C21 exige `analises/AAMMDD-ANALISE-` nas Instruções.** A linha nova da Edição 1 mantém o caminho —
  não a encurte «melhorando» o texto.
- **`additionalDirectories` não foi verificado contra um Claude Code vivo por quem escreveu esta WO.**
  Depois de aplicar, **teste a gravação uma vez** e relate: se o campo não for o certo, o sintoma será
  permissão negada na primeira gravação, e a correção é de config, não de código.
- **Ordem no `.flatdropignore`:** vence a ÚLTIMA regra que casa. `meta/analises/*` antes do `!`, e nada
  depois do `# <<<`.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra exatamente: `src/index.template.html`, `validate.js`, `index.html` (gerado),
      `CLAUDE.md`, `.claude/settings.json`, as duas `SKILL.md`, `.flatdropignore` — e os `meta/` do
      bloco «Ao terminar». Nada além.
- [ ] `node build.js` e depois `node validate.js index.html` → **18/18 nichos · 74/74 checagens ·
      0 erros**. O C28 deve imprimir `padrao 6638/6900 · +Code 529/550 · +ASU 372/400 · compart
      435/450 · combo 7539/7600`.
- [ ] **Teste manual (a validação não cobre):** o próprio relatório desta WO tem de aparecer como
      arquivo em `../260801-HHMM-code-kcm.txt`. Se a gravação for negada, diga no relatório — isso é
      resultado, não falha da WO.
- [ ] Abra o `.flatdropignore` e confirme: comentário só acima do `# >>>`, `meta/analises/*` antes do
      `!meta/analises/_TEMPLATE.md`, nada depois do `# <<<`.

## Ao terminar — registros (canal CODE)

- `meta/DECISIONS.md`: **D-108** — «o gatilho de análise ganha contrapeso e cláusula de abandono; o
  relatório da raia de execução passa a ser gravado em arquivo». Registre a evidência de campo (ASU,
  item 5 do «Feedback para o Kit», 2026-07-30) e o motivo da ordem: o remédio é a **posição** do lado
  que estreita, não o texto dele.
- `meta/CHANGELOG.md`: **v1.95.0** no topo.
- `meta/STATUS.md`: append na sessão atual, versão para `v1.95.0`, harness `18/18 · 74/74`.
- `meta/IDEAS.md`, ideia nova **com gatilho de retorno**: «avaliar se a seção *Análise antes do
  compromisso* deve seguir universal nos 18 nichos, ou ser condicionada / ter vocabulário por nicho.
  **Gatilho:** quando o primeiro projeto de nicho não-dev com Modo Code devolver feedback de uso.»
- `meta/IDEAS.md`, «Feedback para o Kit» / frentes irmãs: registrar que o item 5 do ASU foi **aceito e
  implementado** nesta WO, e que resta responder à frente (mensagem é raia do chat, não desta WO).

## Relatório de aplicação

O que foi feito · o que fugiu do texto literal desta WO · arquivos tocados · resultado do build/validate ·
o commit. **Não** substitua por bloco de fecho do chat. E grave-o também no arquivo da pasta-pai — esta
WO é o primeiro teste da regra que ela mesma instala.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html CLAUDE.md .claude/settings.json .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md .flatdropignore meta/
```

```
git commit -m "feat(kit): contrapeso do gatilho de analise e relatorio do Code em arquivo (wo0074, D-108)" -m "Inverte a ordem da secao de analise: os testes baratos vem antes do gatilho que alarga. Acrescenta clausula de abandono e o limite do formato ja extensivel. Kit do Code passa a gravar o relatorio na pasta-pai. Analises decididas saem do mount. Check C30. Bump 1.95.0."
```

```
git push
```
