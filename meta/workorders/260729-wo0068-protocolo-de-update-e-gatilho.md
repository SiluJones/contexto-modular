# wo0068 — Protocolo de update (template ≠ vivo, estado do repo, `commands` legado, SPEC é SDD) + o gatilho que faltava na releitura

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.89.0` (pós-wo0067), harness **18/18 · 68/68 · 0 erros**, árvore limpa.
> **Resultado esperado:** `v1.90.0`, harness **18/18 · 69/69 · 0 erros** (check novo **C25**).
>
> **Toca `src/index.template.html`, `src/niches/dev.js` e `validate.js`** → exige `node build.js` +
> `node validate.js index.html`.
>
> **Já testada pelo chat:** sandbox do mount de 29/07 (v1.89.0), 6 edições, build + harness —
> **18/18 · 69/69 · 0 erros**, com dois anti-testes do C25.
>
> **Custo de teto (medido, e é a parte que exige atenção):** `narrative` 6612 → **6628** (folga
> **272**), `game` 6520 → **6536** (folga 364), `dev` 6117 → **6334** (folga 566). O gatilho novo
> custa 82 chars; a Tarefa A **paga 66 deles** enxugando uma redundância na mesma linha, então o
> saldo universal é **+16**. O `dev` sobe mais (+217) porque o `role` do `SPEC.md` aparece nas
> Instruções — foi uma escolha, ver Tarefa E.

---

## Contexto — as quatro causas, e o que esta WO faz com cada uma

A nota `260728-2029.txt` do FlatDrop dissecou por que o assistente afirmou que uma WO estava pendente
tendo dois `.txt` no mount. **Três das quatro causas já foram corrigidas na wo0067**; esta WO fecha a
que sobrou, que é a mais funda.

| # | Causa | Situação |
|---|---|---|
| 2 | **Previsão vestida de observação** — relatar o estado que o próprio turno anterior previa | ✅ wo0067: a linha **Estado** exige leitura feita *naquele* turno, e o texto nomeia a armadilha |
| 3 | **Campo obrigatório induz confabulação** | ✅ wo0067: «não verificado nesta rodada» virou resposta de primeira classe |
| 4 | **Regra longe do ponto onde quebra** | ✅ wo0067: a exigência mudou-se para dentro da descrição do campo |
| 1 | **Trabalho pedido expulsa ritual não-pedido** | ⛔ **em aberto até esta WO** |

A causa 1 é a única sem antídoto: as oito perguntas da mensagem tinham gatilho, a releitura não tinha
nenhum. E ela é a mais perigosa porque o padrão é invertido — **a mensagem que mais empurra a
releitura para fora é a que tem mais chance de vir com o mount novo**, já que quem pede muito
costuma ter subido algo antes de pedir.

**O que esta WO NÃO faz — e por quê.** Não remove o campo **Estado**, nem o bloco de fecho. Tirar o
campo elimina o sintoma e mantém a causa: sem ele, a afirmação de estado migra para a prosa, onde não
há nem rótulo nem lugar para dizer «não verifiquei». Um campo que aceita «não verificado nesta rodada»
é **autodeclaratório** — ele torna a resposta honesta mais barata que a inventada, que é o único
mecanismo que funciona de verdade. O bloco, por sua vez, é o que permite retomar sem reconstruir
contexto; o problema nunca foi ele existir, foi ele exigir um dado sem exigir a leitura.

O resto da WO aplica os quatro itens de **protocolo de update** que o FlatDrop levantou e que ficaram
para esta leva.

---

## Tarefa A — o gatilho da causa 1 (e a curadoria que o paga)

**Âncora (linha única):**

```js
  lines.push("No início e sempre que o usuário sinalizar upload (mesmo sem nomear o arquivo — \"já subi\", \"veja o txt\", \"atualizei o mount\"), releia o mount (notas `.txt` + `_MANIFEST.md`) ANTES de responder, nunca de memória. São entrada transitória (a fundir nos meta/), não fonte canônica; se não houver, siga.");
```

**Substituir por:**

```js
  lines.push("Releia o mount (notas `.txt` + `_MANIFEST.md`) ANTES de responder, nunca de memória — inclusive, e principalmente, quando eu não sinalizo upload. Mensagem cheia de pedidos é onde essa releitura mais falha — e onde mais importa. São entrada transitória (a fundir nos meta/), não fonte canônica; se não houver, siga.");
```

> **A troca é deliberada (P12).** A lista de exemplos («já subi», «veja o txt», «atualizei o mount»)
> sai porque a linha anterior já manda rever o mount **a cada turno, sem esperar sinal** — os exemplos
> ensinavam a esperar o sinal, que é exatamente o hábito errado. Os 66 chars economizados pagam o
> gatilho novo.

---

## Tarefa B — os quatro modos de falha, no CEREBRO (`HYGIENE_RULES`)

**Âncora (linha única):**

```js
  "A sua cópia não é a fonte da verdade:
```

**Ação:** INSERIR **imediatamente antes** da âncora (novo item da lista):

```js
  "A releitura do mount não tem gatilho próprio — e é por isso que ela falha. Quatro modos, todos observados em projetos reais: (1) **trabalho pedido expulsa ritual não-pedido** — mensagem cheia de perguntas explícitas empurra a releitura para fora, e é justamente aí que ela mais importa, porque quem pede muito costuma ter subido algo antes de pedir; (2) **previsão vestida de observação** — relatar o estado que o seu próprio turno anterior previa («ele vai aplicar isso depois»), que por dentro é indistinguível de ter verificado; (3) **campo obrigatório preenchido de memória**, quando falta dado fresco; (4) **regra escrita longe do ponto onde ela quebra**. O antídoto é sempre o mesmo: o gatilho mora no gesto, não no apêndice — se você está prestes a afirmar estado, essa é a hora de ler.",
```

---

## Tarefa C — `_UPDATE-PROMPT`: estado do repo + template ≠ vivo + `commands` legado

**Âncora (linha única):**

```js
  L.push("Estes arquivos sao **genericos/estruturais** — propositalmente vazios do especifico desta obra; nao estranhe a falta de conteudo. Para cada um:");
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
  L.push("**Antes de comparar qualquer coisa:** liste o mount e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria.");
  L.push("");
  L.push("**Template generico NUNCA substitui arquivo vivo refinado.** `CLAUDE.md`, `.claude/*`, skills e os `meta/` que este projeto ja especializou entram por padrao em **(c)**: o generico ensina estrutura, o vivo ja evoluiu. A UNICA excecao e formato descontinuado, que sempre migra — hoje: `.claude/commands/` foi substituido por `.claude/skills/<nome>/SKILL.md` (com front-matter). Se este projeto ainda usa `commands/`, isso e migracao, nao escolha.");
  L.push("");
```

---

## Tarefa D — a mesma regra no CEREBRO gerado

**Âncora (trecho único, dentro da seção «Ao receber um template-update do KCM»):**

```
**Nunca sobrescreve conteúdo vivo por template vazio.**
```

**Substituir por:**

```
**Nunca sobrescreve conteúdo vivo por template vazio** — e mais: **template genérico não é candidato a substituir arquivo vivo refinado.** `CLAUDE.md`, `.claude/*`, skills e os `meta/` já especializados caem por padrão em (c) — o genérico ensina estrutura, o vivo já evoluiu; não é escolha a ser oferecida ao usuário a cada update. A **única** exceção é formato descontinuado, que sempre migra (hoje: `.claude/commands/` → `.claude/skills/<nome>/SKILL.md`). Antes de comparar, o assistente lista o mount e diz em que versão/commit o projeto está: comparar sem saber o estado atual é comparar com memória.
```

---

## Tarefa E — `src/niches/dev.js`: o manifesto do `SPEC.md` diz o que ele é

**Âncora (trecho único):**

```js
role:"Modelo de spec de feature: o problema, os critérios de aceite verificáveis, as decisões e o fora-de-escopo. Copie para `specs/AAMMDD-nome.md`, uma por feature."
```

**Substituir por:**

```js
role:"Modelo de **spec de feature** (Spec-Driven Development): o problema, os critérios de aceite verificáveis, as decisões e o fora-de-escopo. **Sob demanda** — copie para `specs/AAMMDD-nome.md`, uma por feature, e a pasta nasce aí. **Não é o modelo das WOs** (instrução de aplicação Chat→Code, em `meta/workorders/`): spec diz o QUE construir, WO diz COMO aplicar."
```

> **Custo assumido:** +217 chars nas Instruções do `dev` (o `role` aparece no manifesto de arquivos).
> Vale: o mal-entendido que este texto evita custou uma migração de vocabulário inteira no FlatDrop
> (DEC-023 deles). O `dev` fica com 566 de folga — o segundo mais confortável entre os apertados.

---

## Tarefa F — `validate.js`: check novo **C25**

**Âncora (linha única):**

```js
check("C24 convivencia gerado x manual
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
check("C25 protocolo de update e gatilho da releitura (wo0068): estado do repo, template nao substitui vivo, commands legado, SPEC e SDD", () => {
  const dev=T.normNiche(T.NICHES.dev);
  const prompt=T.buildUpdatePrompt(dev);
  assert(/liste o mount e me diga em que versao\/commit/.test(prompt),"_UPDATE-PROMPT nao pede o estado do repo antes de comparar");
  assert(/Template generico NUNCA substitui arquivo vivo refinado/.test(prompt),"_UPDATE-PROMPT nao afirma que template nao substitui vivo");
  assert(/commands\/`? foi substituido por/.test(prompt),"_UPDATE-PROMPT nao marca .claude/commands/ como legado");
  const specFile=(dev.contextFiles||[]).find(f=>/^SPEC\.md$/i.test(f.name||""));
  assert(specFile,"dev perdeu o SPEC.md");
  assert(/Spec-Driven Development/.test(specFile.role||""),"o manifesto do SPEC.md nao diz a origem (SDD)");
  assert(/Não é o modelo das WOs/.test(specFile.role||""),"o manifesto do SPEC.md nao avisa que nao e o modelo das WOs");
  assert(/Sob demanda/i.test(specFile.role||""),"o manifesto do SPEC.md nao diz que e sob demanda");
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const instr=T.buildInstr(n), cmd=T.buildClaudeMd(n);
    assert(/Mensagem cheia de pedidos é onde essa releitura mais falha/.test(instr), id+": Instrucoes sem o gatilho da causa 1 (trabalho pedido expulsa ritual)");
    assert(/nunca de memória/.test(instr), id+": Instrucoes perderam a regra de nao responder de memoria");
    assert(/previsão vestida de observação/.test(cmd), id+": CEREBRO sem os modos de falha da releitura");
    assert(/template genérico não é candidato a substituir arquivo vivo refinado/i.test(cmd), id+": CEREBRO nao afirma a regra do template x vivo no protocolo de update");
  });
  return "ok";
});

```

---

## Tarefa G — bump

**Âncora:** `const KIT_VERSION = "1.89.0";` → **Substituir por:** `const KIT_VERSION = "1.90.0";`

---

## Tarefa H — registros

1. **`meta/DECISIONS.md`** — **D-102 — A releitura ganha gatilho; o campo Estado fica.** Registre a
   decisão de **não** remover o campo nem o bloco, com o racional: campo autodeclaratório («não
   verificado nesta rodada») torna a resposta honesta mais barata que a inventada; removê-lo empurra a
   afirmação de estado para a prosa, onde não há rótulo nem lugar para admitir a falta de leitura.
   Registre também as quatro causas e onde cada uma foi atacada (wo0067 × wo0068).
2. **`meta/CHANGELOG.md`** — `## v1.90.0 — Protocolo de update + gatilho da releitura (wo0068, D-102)`,
   com os números de teto (`narrative` 6628/272, `game` 6536/364, `dev` 6334/566) e a nota de que a
   Tarefa A pagou 66 dos 82 chars do gatilho.
3. **`meta/STATUS.md`** — append + versão **v1.90.0** · 69/69 · as folgas novas.
4. **`meta/IDEAS.md`** — em «Feedback para o Kit», marque como **atendidos** os quatro itens de
   protocolo de update do FlatDrop. E registre **aberto**:
   - **Folga da narrativa em 272 chars.** A configuração padrão está no limite: a próxima linha
     universal vai precisar da decisão da análise `260727-ANALISE-teto-por-configuracao.md` (curar as
     linhas de modo) antes de caber. **Isto é um bloqueio prático, não um aviso.**
   - **Migrar o KCM de `.claude/commands/` para `.claude/skills/`** — o kit agora marca `commands/`
     como legado no protocolo de update, e a casa continua no formato legado. Dogfood pendente.

---

## Verificação

1. `node build.js` · `node validate.js index.html` → **18/18 · 69/69 · 0 erros**, **C25 verde**.
2. Teto: `narrative` **6628**, `game` **6536**, `dev` **6334**. Se `narrative` passar de 6900, algo
   além desta WO entrou.
3. `git status` limpo.

---

## Commit (bloco separado, sem acento)

```bash
git add -A
git commit -m "feat(kit): protocolo de update + gatilho da releitura (wo0068, D-102)

- causa 1 do erro de releitura ganha antidoto: mensagem cheia de pedidos e onde ela mais falha
- os quatro modos de falha da releitura viram regra de higiene no CEREBRO dos 18
- _UPDATE-PROMPT passa a pedir versao/commit do repo antes de comparar qualquer arquivo
- template generico deixa de ser candidato a substituir arquivo vivo refinado (default vai para (c))
- .claude/commands/ marcado como formato legado; a migracao para skills nao e escolha
- manifesto do SPEC.md diz a origem (SDD), que e sob demanda e que nao e o modelo das WOs
- campo Estado e o bloco de fecho MANTIDOS por decisao registrada (D-102)
- check C25; KIT_VERSION 1.90.0; harness 18/18, 69/69, 0 erros"
git push
```
