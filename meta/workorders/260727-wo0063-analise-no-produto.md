# wo0063 — «Análise antes do compromisso» no produto + higiene do FlatDrop (modelo sempre sobe)

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.84.0` (pós-wo0062, commit `39f0a86`, pushado), harness **18/18 · 64/64 · 0 erros**,
> árvore limpa.
> **Resultado esperado:** `v1.85.0`, harness **18/18 · 65/65 · 0 erros**.
>
> **Esta WO TOCA `src/` e `validate.js`** → exige `node build.js` + `node validate.js index.html`.
> Rode **`/check-wo`** antes (há âncoras de código).
>
> **Já testada pelo chat:** o repo foi reconstruído em sandbox, as sete edições foram aplicadas e o
> harness rodou de verdade — **18/18 · 65/65 · 0 erros**. Teto medido depois da mudança:
> `narrative` **6612** (folga 288) · `game` **6520** (folga 380) · `dev` **6038** (folga 862) ·
> `career` **5962** (folga 938). Custo do gatilho: **+145 chars** em todos os 18 nichos.
>
> **⚠️ Não toque em `INSTRUCOES-DO-PROJETO.md`.** Ele vai inteiro pelo chat neste mesmo ciclo
> (um canal por doc por ciclo). Se ele aparecer modificado no `git status`, foi o usuário que salvou
> a versão baixada — só commite junto, não reescreva.

---

## Contexto — a decisão que esta WO executa (D-097)

A §4 do `260727-HANDOFF-BRIEF.md` deixou em aberto: *«Ensinar o produto sobre `analises/`?»*.
**Decidido: sim, e como convenção universal** — não como pasta pré-criada.

Três consequências que a implementação respeita:

1. **A pasta nasce no primeiro uso.** Nada de `analises/.gitkeep` no zip: pasta vazia é ruído, e o kit
   já erra por excesso de arquivo. A convenção é ensinada; a pasta aparece quando a primeira análise
   for escrita. Vale igual para `specs/` (o modelo `SPEC.md` do dev/game já dizia
   «copie para `specs/AAMMDD-nome.md`» — agora o CEREBRO diz explicitamente que a pasta só nasce aí).
2. **Projeto que já tem o costume com outro nome não é renomeado por conta própria.** O CEREBRO gerado
   manda **adotar a convenção onde ela cai** (o doc existente ganha cabeçalho de `Status` e os elos) e
   tratar renomeação de pasta como decisão do usuário — proponha, não execute.
3. **Higiene do FlatDrop vira regra escrita:** modelo (`_TEMPLATE.md`) e guia (`_GUIA*.md`) de pasta
   ignorada **sempre** voltam com `!`, na mesma leva em que nascem. Foi exatamente o que faltou na
   wo0062 — o `_TEMPLATE.md` não chegou ao mount e o usuário teve de arrastá-lo à mão.

---

## Tarefa A — gatilho nas Instruções (`src/index.template.html`, `buildInstr`)

**Âncora (linha única, existe 1×):**

```js
  lines.push("**Log:** nomeie `logs/AAAA-MM-DD.md` (data ISO, sem a palavra \"log\" no nome).");
```

**Ação:** INSERIR a linha abaixo **logo após** a âncora (a âncora permanece intacta):

```js
  lines.push("**Análise antes do compromisso:** mudança não-trivial → análise escrita antes (`analises/AAMMDD-ANALISE-<tema>.md`). Formato e funil no CEREBRO.");
```

---

## Tarefa B — função `analiseFunil()` (`src/index.template.html`)

**Âncora (linha única, existe 1×):**

```js
/* Gera o CLAUDE.md COMPLETO — comportamento, higiene, gatilhos, manutenção.
```

**Ação:** INSERIR o bloco abaixo **imediatamente antes** da âncora (mantendo uma linha em branco
entre o bloco novo e o comentário da âncora):

```js
/* Funil da análise: para onde ela vai depois de decidida (wo0063).
   Modo Code → WO; nicho com modelo de spec de feature → spec. Pastas nascem no primeiro uso. */
function analiseFunil(niche){
  const temSpec = (niche.contextFiles||[]).some(f => /^SPEC\.md$/i.test(f.name||""));
  let s = codeModeOn()
    ? "- **Funil:** análise → **WO** (`meta/workorders/`, nome `AAMMDD-woNNNN-desc.md`) → `DECISIONS.md`."
    : "- **Funil:** análise → decisão registrada no `DECISIONS.md` → trabalho.";
  if(temSpec) s += " Quando o trabalho é de produto, a análise vira **spec de feature** (`specs/AAMMDD-<nome>.md`, uma por feature) — a spec diz **o que** construir e quando está pronto" + (codeModeOn() ? "; a WO diz **como aplicar**" : "") + ". Mesma regra: a pasta `specs/` só nasce quando a primeira spec for escrita.";
  return s;
}
```

---

## Tarefa C — seção no CEREBRO gerado (`src/index.template.html`, `buildClaudeMd`)

**Âncora (linha única, existe 1× — é a última linha da tabela «Como manter os documentos»):**

```js
  L.push(`| \`logs/AAAA-MM-DD.md\` | Histórico | Ao final de cada sessão (formato em LOG-TEMPLATE). |`);
```

**Ação:** INSERIR o bloco abaixo **logo após** a âncora. A linha seguinte no arquivo é
`  // Higiene` — ela deve continuar existindo, depois do bloco novo.

```js
  L.push("| `analises/AAMMDD-ANALISE-<tema>.md` | Cresce (uma por decisão) | Antes de uma mudança não-trivial — a pasta nasce no primeiro uso. |");

  // Análise antes do compromisso (wo0063) — universal: vale com ou sem repo, nos dois modos
  L.push("");
  L.push("## Análise antes do compromisso");
  L.push("");
  L.push("Mudança **não-trivial** — estrutural, cara de desfazer, que toca várias frentes, ou que chega como pergunta aberta («vale a pena X?») — começa por uma **análise escrita**, não por um plano de execução. A análise é o documento que precede o compromisso: existe para o usuário decidir com o custo à vista, não para justificar o que já foi decidido.");
  L.push("");
  L.push("- **Onde:** `analises/AAMMDD-ANALISE-<assunto>.md` (projeto com pasta `meta/`: `meta/analises/`). A pasta **nasce no primeiro uso** — nunca antes, nunca vazia. A data é a de criação e não muda depois.");
  L.push("- **O que tem dentro:** `Status` (Rascunho · Em discussão · Decidida · Implementada · Abandonada · Substituída) · **Problema** (o que dói, para quem, o que acontece se nada for feito) · **Restrições / o que foi medido** · **Opções consideradas** (inclusive as descartadas, com o motivo do descarte) · **Recomendação** (uma, explícita, com o porquê) · **Riscos** (o que vigiar depois de aplicar) · **Ponto de decisão** (o que você precisa do usuário).");
  L.push("- **Meça antes de propor.** O que dá para medir, meça; o resto entra rotulado como estimativa. Análise que projeta ganho sem medir vira erro de planejamento.");
  L.push("- **A análise não decide nem abre trabalho sozinha.** Ela para no ponto de decisão e espera o usuário. Depois de decidida, o desfecho vai para o `DECISIONS.md` (a análise guarda o raciocínio; o DECISIONS guarda a decisão) e a análise só muda de `Status` — análise vencida não se apaga: o «por que não» é o que evita refazer o mesmo debate daqui a seis meses.");
  L.push(analiseFunil(niche));
  L.push("- **Mudança pequena não pede análise.** Cerimônia em cima de trivialidade é desperdício — vá direto ao trabalho. Na dúvida, meia página resolve.");
  L.push("- **Se este projeto já escreve documentos desse tipo com outro nome** (`design/`, `estudos/`, `rfc/`, `.md` avulso na raiz): não renomeie nada por conta própria. Adote a convenção onde ela cai — o documento que já existe ganha o cabeçalho de `Status` e os elos (o que nasceu dele, qual decisão registrou), e as análises novas nascem no formato acima. Renomear pasta ou arquivo é decisão do usuário: proponha, não execute.");
  L.push("- **Modelo:** ao escrever a primeira, deixe também um `analises/_TEMPLATE.md` com esse esqueleto — o modelo é o que faz a convenção pegar. Se a pasta estiver ignorada no `.flatdropignore`, **reinclua o modelo** (`!analises/_TEMPLATE.md`): modelo e guia sempre sobem ao Projeto; corpo de análise, não.");
```

> **Atenção:** a primeira linha do bloco usa **aspas duplas**, não crase — dentro de template literal a
> crase de `` `analises/...` `` terminaria a string. Copie como está.

---

## Tarefa D — `.flatdropignore` gerado (`structuredFlatdropignore`)

São **quatro** edições de linha única (o arquivo usa CRLF; não cole âncora multi-linha).

**D1 — Âncora:**

```js
    "logs/", ""
```

**Substituir por:**

```js
    "logs/", "",
    "# Analises (meta/analises/, uma por decisao nao-trivial; a pasta nasce no primeiro uso):",
    "# enquanto forem poucas, deixe subir — sao o \"por que\" das decisoes. Quando pesarem, ligue as",
    "# duas linhas abaixo. REGRA: modelo e guia SEMPRE sobem; corpo de analise, nao.",
    "# meta/analises/*",
    "# !meta/analises/_TEMPLATE.md", ""
```

**D2 — Âncora:**

```js
    L.push("# Specs aplicadas: o desfecho vive em meta/DECISIONS.md e meta/CHANGELOG.md; o corpo pesa.");
```

**Substituir por:**

```js
    L.push("# WOs aplicadas: o desfecho vive em meta/DECISIONS.md e meta/CHANGELOG.md; o corpo pesa.");
```

**D3 — Âncora:**

```js
    L.push("# (Para estudar uma spec no Projeto, reinclua com !meta/workorders/<arquivo>.)");
```

**Substituir por:**

```js
    L.push("# Use \"/*\" (o conteudo), nao \"/\" (a pasta): sob pasta excluida por inteiro o \"!\" NAO reinclui.");
```

**D4 — Âncora:**

```js
    L.push("meta/workorders/", "");
```

**Substituir por:**

```js
    L.push("meta/workorders/*");
    L.push("# Modelo/guia da pasta, se houver, volta com \"!\" — ex.: !meta/workorders/_GUIA.md");
    L.push("# Para estudar UMA WO no Projeto: !meta/workorders/<arquivo>.md", "");
```

> **Por que D3/D4:** o texto antigo mandava reincluir com `!meta/workorders/<arquivo>` **por baixo de
> uma pasta excluída por inteiro** — e isso **não funciona** (o próprio `.flatdropignore` do KCM já
> documenta a armadilha e usa `meta/specs/*`). O produto ensinava uma receita quebrada.

---

## Tarefa E — README estruturado (`structuredReadme`)

**Âncora (linha única):**

```js
    "- `logs/` — um arquivo por sessao (vazia por enquanto)."
```

**Substituir por:**

```js
    "- `logs/` — um arquivo por sessao (vazia por enquanto).",
    "- `meta/analises/` — uma analise por decisao nao-trivial (problema, o que foi medido, opcoes, recomendacao, riscos, ponto de decisao). NAO vem no pacote: a pasta nasce quando a primeira analise for escrita."
```

**Não crie** `meta/analises/.gitkeep` no `downloadStructuredZIP` — a ausência é proposital e o check
C21 trava isso.

---

## Tarefa F — check novo `C21` (`validate.js`)

**Âncora (linha única):**

```js
check("C20 nome padrao do handoff nos prompts de transferencia e retomada (wo0061)", () => {
```

**Ação:** INSERIR o bloco abaixo **imediatamente antes** da âncora (a ordem dos checks `C` no arquivo é
decrescente; `C18`, `C19` e `C20` já existem — o número livre é **C21**).

```js
check("C21 analise antes do compromisso (wo0063): secao no CEREBRO dos 18, gatilho nas Instrucoes, funil, pasta preguicosa", () => {
  const raw=fs.readFileSync(path,"utf8");
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    const instr=T.buildInstr(n);
    assert(/## Análise antes do compromisso/.test(cmd), id+": CEREBRO sem a secao de analise");
    assert(/nasce no primeiro uso/.test(cmd), id+": CEREBRO nao ensina a pasta preguicosa");
    assert(/Ponto de decisão/.test(cmd), id+": CEREBRO sem o ponto de decisao (analise nao decide sozinha)");
    assert(/renomeie nada por conta própria/.test(cmd), id+": CEREBRO sem a clausula de adocao (outro nome ja em uso)");
    assert(/analises\/AAMMDD-ANALISE-/.test(instr), id+": Instrucoes sem o gatilho da analise");
    const temSpec=(n.contextFiles||[]).some(f=>/^SPEC\.md$/i.test(f.name||""));
    assert(temSpec === /specs\/AAMMDD-/.test(cmd), id+": funil de spec incoerente com a existencia do modelo SPEC.md");
  });
  // modo Code: o funil aponta para a WO
  T.STATE.workmode = T.STATE.workmode || {}; const prev=T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode = "yes";
  const cmdCode=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/\*\*Funil:\*\* análise → \*\*WO\*\*/.test(cmdCode), "modo Code: funil nao aponta para a WO");
  T.STATE.workmode.codeMode = prev;
  // .flatdropignore gerado: conteudo da pasta (/*), nunca a pasta inteira — senao o "!" nao reinclui
  assert(/meta\/workorders\/\*/.test(raw), "flatdropignore gerado nao usa meta/workorders/* (o ! nao reincluiria)");
  assert(!/L\.push\("meta\/workorders\/", ""\)/.test(raw), "flatdropignore gerado ainda exclui a pasta inteira");
  assert(/# !meta\/analises\/_TEMPLATE\.md/.test(raw), "flatdropignore gerado nao ensina a reinclusao do modelo");
  assert(/uma analise por decisao nao-trivial/.test(raw), "README estruturado nao menciona meta/analises/");
  assert(!/analises\/\.gitkeep/.test(raw), "o zip esta criando a pasta analises vazia (deveria nascer no primeiro uso)");
  return "ok";
});

```

---

## Tarefa G — bump de versão

**Âncora:** `const KIT_VERSION = "1.84.0";` → **Substituir por:** `const KIT_VERSION = "1.85.0";`
(bump **minor**: seção nova no CEREBRO gerado + gatilho nas Instruções + correção do
`.flatdropignore` gerado + check novo.)

---

## Tarefa H — dogfood no próprio KCM

### H1 · `.flatdropignore` (raiz do repo) — liberar o modelo

**Âncora (linha única — não use `meta/specs/*`, que aparece 2× por causa do comentário):**

```
!meta/workorders/_GUIA-doc-por-spec.md
```

**Substituir por:**

```
!meta/workorders/_GUIA-doc-por-spec.md
!meta/analises/_TEMPLATE.md

# REGRA (wo0063): modelo e guia de pasta ignorada SEMPRE voltam com "!" — o corpo fica fora, o
# modelo sobe. Criou um _TEMPLATE/_GUIA numa pasta ignorada? Reinclua na MESMA leva em que criou.
# E use "pasta/*" (o conteudo), nunca "pasta/" (a pasta): sob pasta excluida por inteiro o "!"
# nao reinclui nada.
```

### H2 · `meta/CEREBRO.md` — registrar as duas regras

**H2a — Âncora (fim da entrada de `meta/analises/`):**

```
a spec de feature (`meta/specs/`) entra quando o trabalho é de produto.
```

**Substituir por:**

```
a spec de feature (`meta/specs/`) entra quando o trabalho é de produto. **Desde a wo0063 (D-097) o produto também ensina isso:** os 18 nichos recebem a seção «Análise antes do compromisso» no CEREBRO gerado + gatilho nas Instruções, com pasta nascendo no primeiro uso e cláusula de adoção para projeto que já usa outro nome (`design/`, `estudos/`, `rfc/`) — renomear é decisão do usuário, o assistente propõe.
```

**H2b — INSERIR, como bullet novo logo depois da entrada acima:**

```
- **Higiene do FlatDrop — modelo e guia sempre sobem (wo0063):** pasta ignorada no `.flatdropignore` esconde o **corpo**, nunca o **modelo**. `_TEMPLATE.md` e `_GUIA*.md` de pasta ignorada voltam com `!` na MESMA leva em que nascem (`!meta/analises/_TEMPLATE.md`, `!meta/workorders/_GUIA-doc-por-spec.md`) — sem isso o modelo não chega ao mount e a convenção não pega (foi o que aconteceu na wo0062: o usuário teve de arrastar o `_TEMPLATE.md` à mão). E use `pasta/*` (o conteúdo), nunca `pasta/` (a pasta inteira): sob pasta excluída por inteiro o `!` **não** reinclui.
```

**H2c —** acrescente a linha «Mudanças nesta revisão» no topo, **acima** da existente
(`> **Mudanças nesta revisão (doc-only, sem bump de \`KIT_VERSION\`):**`):

```
> **Mudanças nesta revisão (wo0063, D-097):** o **produto** passa a ensinar a análise antes do compromisso (seção nova no CEREBRO gerado dos 18 nichos + gatilho de 145 chars nas Instruções + linha na tabela de documentos), com pasta preguiçosa (`analises/` e `specs/` nascem no primeiro uso) e cláusula de adoção. Regra nova de higiene do FlatDrop: modelo/guia de pasta ignorada sempre reincluídos com `!`. Comandos `/check-wo`, `/apply-wo` e `/wrap` atualizados (vocabulário WO, caminho `src/`, 18/18). Nada removido. `KIT_VERSION 1.85.0`.
```

### H3 · `.claude/commands/check-wo.md` — reescrever inteiro

O arquivo ainda fala «spec» (vocabulário anterior à wo0053) e não avisa da armadilha do CRLF.
Substitua o conteúdo por:

```markdown
---
description: Confere uma WO contra o repo ANTES de aplicar. Read-only — nao edita nada.
---

Voce vai CONFERIR a WO `$ARGUMENTS` (em `meta/workorders/`) contra o estado atual do repo. **Nao
edite, nao crie, nao rode build/commit.** Este comando e um portao de leitura: ele existe para
descobrir, ANTES de mexer, se a WO e aplicavel como esta escrita.

Passos:

1. Leia a WO inteira. Liste, numeradas, TODAS as edicoes que ela pede (arquivo · tipo · ancora).
2. Para CADA ancora ("Ancora / Substituir por"), procure o texto exato no arquivo-alvo e conte as
   ocorrencias:
   - **1 ocorrencia** → ok.
   - **0 ocorrencias** → ANCORA MORTA (a WO envelheceu ou o texto foi alterado). Mostre o trecho
     atual mais parecido, para o autor corrigir a WO.
   - **2+ ocorrencias** → ANCORA AMBIGUA. Diga quantas e onde.
   O `src/index.template.html` usa **CRLF**: ancora de mais de uma linha colada com `\n` nao casa.
   Confira linha a linha antes de declarar ancora morta por esse motivo.
3. Confira os pre-requisitos declarados: versao/commit citados na WO batem com `git log -1` e com o
   `meta/STATUS.md`? A arvore esta limpa (`git status --short`)? Se a WO pede arquivo NOVO, ele ja
   existe (colisao)? Se ela cria um check novo, o numero ja esta em uso?
4. Verifique se o repo esta verde ANTES de aplicar: `node validate.js index.html` (leitura, nao muda
   nada) — regra de ouro **18/18 nichos, 0 erros**. Se ja estiver vermelho, diga — nao se aplica WO
   sobre repo vermelho.
5. Aponte contradicoes internas: dois trechos da WO editando a mesma linha; tarefa que depende de
   outra que ela mesma nao faz; check novo que colide com check existente.

Entregue:

- **VEREDITO: APLICAVEL** / **APLICAVEL COM RESSALVAS** / **NAO APLICAVEL**
- Tabela: edicao · arquivo · ancora encontrada? (1 / 0 / N) · observacao
- A lista do que o autor da WO precisa corrigir antes de voce aplicar
- **Nenhuma alteracao no repo.** Se voce editou algo, voce errou.
```

### H4 · `.claude/commands/apply-wo.md` — reescrever inteiro

Ainda dizia «spec», «17/17» e apontava para `index_template.html` (o caminho real é
`src/index.template.html`). Substitua o conteúdo por:

```markdown
Leia o arquivo de WO em `meta/workorders/$ARGUMENTS` e execute-o.

Regras de aplicação:
- Localize cada âncora EXATAMENTE. Se não achar uma, PARE e reporte — nunca chute um lugar próximo.
- O `src/index.template.html` usa **CRLF**: âncora de mais de uma linha colada com `\n` não casa — edite linha a linha.
- Não toque em nada fora das edições nomeadas na WO.
- WO só de doc (`meta/`) NÃO precisa de build. WO que toca `src/` (template ou nicho) precisa de `node build.js` e depois `node validate.js index.html` — regra de ouro **18/18 nichos, 0 erros** (o total de checagens sobe a cada check novo; o que não muda é 18/18 e 0 erros).
- Nunca edite o `index.html` direto: ele é **gerado**. Edite `src/` e rode o build.
- Ao terminar, rode `git diff` e confira que bate com a forma esperada (aditivo + as substituições previstas; sem remoção acidental) ANTES de commitar.
- Faça o bloco «Ao terminar» da WO (append em STATUS/DECISIONS) e o commit indicado (mensagem SEM acento).
- Achado que foge do texto literal da WO (âncora já aplicada, arquivo ausente, tarefa que já existia): **reporte** — não improvise nem duplique.
```

### H5 · `.claude/commands/wrap.md` — duas linhas

Substitua a linha do `DEC-`/`FIX-` (o KCM numera decisões como `D-0NN`) e acrescente a linha das
análises:

```markdown
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
- Se alguma análise de `meta/analises/` foi decidida, implementada ou abandonada nesta sessão, atualize o **Status** dela (e os elos «Vira» / «Decisão») — análise não se apaga, muda de estado.
```

---

## Tarefa I — registros

1. **`meta/DECISIONS.md`** — nova entrada **D-097 — «Análise antes do compromisso» vira convenção do
   produto (pasta preguiçosa)**, no formato do arquivo. Racional: a convenção provou valor no KCM
   (wo0062/D-089/D-096) e os projetos-filhos já produziam documentos equivalentes sem nome nem
   formato comum. Opções consideradas: (A) só no KCM — mantém o problema; (B) pasta `analises/`
   pré-criada no zip — pasta vazia vira ruído e o kit já erra por excesso de arquivo;
   (C) **convenção ensinada + pasta preguiçosa** — escolhida. Consequência: `specs/` segue a mesma
   regra (só nasce quando a primeira spec for escrita) e projeto com nome próprio adota sem rename
   forçado. Registre também a regra de higiene do FlatDrop (modelo/guia sempre reincluídos) como
   parte da mesma decisão.
2. **`meta/CHANGELOG.md`** — entrada `## v1.85.0 — Análise antes do compromisso no produto (wo0063,
   D-097)` no topo, com: seção nova no CEREBRO gerado dos 18; gatilho de **145 chars** nas Instruções;
   linha na tabela de documentos; `analiseFunil()` (WO no modo Code, spec quando o nicho tem
   `SPEC.md`); `.flatdropignore` gerado corrigido (`meta/workorders/*` + receita de reinclusão que
   de fato funciona) e bloco comentado de `analises/`; README estruturado; check **C21**; teto medido
   (`narrative` 6467→**6612**, folga 288; `game` 6375→**6520**, folga 380; `dev` 5893→**6038**;
   `career` 5817→**5962**); harness **18/18, 64/64 → 65/65, 0 erros**.
3. **`meta/STATUS.md`** — append na «Última sessão» + atualize a linha de versão/teto do cabeçalho
   para **v1.85.0 · 18/18 · 65/65** e os novos números de folga.
4. **`meta/IDEAS.md`** — feche a pendência **«Ensinar o produto sobre `analises/`»** (decidida, D-097)
   e registre como **abertas**:
   - **Renomear `design/` → `analises/`** no projeto-filho que usa aquele nome — só depois de dialogar
     com ele; a cláusula de adoção agora permite conviver sem rename.
   - **Validar em campo** se a seção nova faz os projetos escreverem análise antes de mudança grande
     (é o teste real desta WO, como a wo0052 foi do mount-check).
   - **Avaliar entregar o `/check-wo` aos projetos** (segue pendente de mais quilometragem).

---

## Verificação

1. `node build.js` → OK, 18 módulos.
2. `node validate.js index.html` → **18/18 nichos · 65/65 checagens · 0 erros** (o C21 tem de aparecer
   verde; se aparecer «C21 … [FAIL]», pare e reporte a asserção exata).
3. Confira o teto: nenhum nicho acima de 6900. Esperado `narrative` **6612** e `game` **6520**.
4. `git diff --stat` → só `src/index.template.html`, `validate.js`, `index.html` (gerado),
   `.flatdropignore`, `.claude/commands/*.md`, `meta/*`.
5. `git status` limpo ao final.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html validate.js index.html .flatdropignore .claude/commands \
        meta/CEREBRO.md meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260727-wo0063-analise-no-produto.md INSTRUCOES-DO-PROJETO.md
git commit -m "feat(kit): analise antes do compromisso no produto + higiene do flatdrop (wo0063, D-097)

- CEREBRO gerado dos 18 nichos ganha a secao 'Analise antes do compromisso': onde, o que tem
  dentro, medir antes de propor, nao decide sozinha, funil e clausula de adocao
- pasta preguicosa: analises/ e specs/ nascem no primeiro uso; zip nao cria pasta vazia
- gatilho de 145 chars nas Instrucoes (narrative 6612/6900, game 6520/6900 - nenhum estoura)
- analiseFunil(): WO no modo Code, spec de feature quando o nicho tem SPEC.md
- .flatdropignore gerado: meta/workorders/* (a receita antiga com pasta inteira nao reincluia)
  e bloco comentado para analises, com a regra 'modelo e guia sempre sobem'
- dogfood: .flatdropignore do KCM libera meta/analises/_TEMPLATE.md; comandos check-wo/apply-wo/
  wrap atualizados (vocabulario WO, caminho src/, 18/18, status das analises)
- check C21; KIT_VERSION 1.85.0; harness 18/18, 65/65, 0 erros"
git push
```
