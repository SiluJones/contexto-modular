# wo0066 — «A sua cópia não é a fonte da verdade»: sandbox ≠ mount, instrução viva = painel, análise volta ao mount

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.87.0` (pós-wo0065, commits `4bddaa0` + `437fd39`), harness **18/18 · 66/66 ·
> 0 erros**, árvore limpa.
> **Resultado esperado:** `v1.88.0`, harness **18/18 · 67/67 · 0 erros** (check novo **C23**).
>
> **Toca `src/` e `validate.js`** → exige `node build.js` + `node validate.js index.html`.
>
> **Já testada pelo chat:** sandbox reconstruído **do mount de agora** (não do sandbox anterior — é
> justamente o erro que esta WO corrige), edições aplicadas, build + harness — **18/18 · 67/67 ·
> 0 erros**, com anti-teste do C23. **Custo de teto: zero** (a regra vive só no CEREBRO; o C23 prova
> que ela não vazou para as Instruções). `narrative` 6612, `game` 6520, `dev` 6117 — inalterados.

---

## Contexto — o erro que originou esta WO

No turno anterior eu **não reli o mount** e reentreguei a **wo0065 já aplicada**, com a linha
`/apply-wo` e o handoff de arquivos que já estavam no repo. A nota `260727-2216.txt` — o relatório do
Code, com o commit `4bddaa0` e o achado do `.flatdropignore` — estava no mount o tempo todo. O
`_GUIA-doc-por-wo.md` também.

A causa não é distração: é **estrutural, e nova**. Eu mantinha um sandbox reconstruído do mount para
testar a WO. A partir do momento em que o sandbox existe, ele passa a **parecer** o estado do projeto —
e a releitura do mount vira redundância aparente. Só que o sandbox congela no instante em que foi
criado, enquanto o repo anda. Regra de releitura que existe há várias versões não impediu isso, porque
ela fala de «reler o mount» e não de **desconfiar da própria cópia**.

Sintomas de que a armadilha pegou (todos aconteceram): reentregar trabalho já aplicado; repetir uma
linha `/apply-wo` de WO fechada; listar handoff de arquivo que já está no repo; falar de pendência que
o arquivo vivo mostra resolvida.

**Dado que confirma a gravidade:** o `src/index.template.html` do repo é **byte-idêntico** ao do meu
sandbox. Ou seja, a cópia estava *tecnicamente correta* quanto ao produto — e mesmo assim me levou a
errar, porque o que mudou não foi o código: foi **o estado do trabalho**. Cópia correta e estado
errado é a forma mais traiçoeira desta armadilha.

**Achados dependentes, que a mesma investigação trouxe:**

1. **As análises do KCM não chegam ao mount.** O `.flatdropignore` exclui `meta/analises/*` e reinclui
   só o `_TEMPLATE.md`. Uma análise em **«Em discussão»** — que é exatamente o documento que o chat
   precisa reler no turno seguinte para continuar a conversa — fica invisível. O produto ensina o
   oposto («enquanto forem poucas, deixe subir»); a casa faz o contrário.
2. **A instrução que vale é a do painel.** Desde `437fd39` o `INSTRUCOES-DO-PROJETO.md` está fora do
   mount de propósito (versionado no git, sem duplicar no Projeto). Isso torna definitivo o que já era
   verdade: **a única comparação legítima é contra o texto de Projeto → Instruções**, não contra o
   arquivo do repo. Tratar a cópia versionada como referência é a mesma armadilha desta WO, com outra
   roupa.

---

## Tarefa A — regra de higiene nova no produto (`src/index.template.html`)

**Âncora (linha única):**

```js
  "Válvula de desvio registrado: os templates
```

**Ação:** INSERIR **imediatamente antes** da âncora (dentro de `HYGIENE_RULES`, como novo item):

```js
  "A sua cópia não é a fonte da verdade: vale o arquivo que está no repo/mount AGORA, não o que você leu, gerou ou reconstruiu antes nesta conversa. Qualquer artefato que você produziu (um pacote, uma reconstrução, um resumo do estado) envelhece no instante em que alguém aplica alguma coisa. Antes de dizer que algo continua pendente — ou de reentregar trabalho — releia o arquivo vivo. Reentregar o que já foi aplicado custa mais caro que perguntar.",
```

> As `HYGIENE_RULES` entram **só no CEREBRO**; as Instruções não mudam de tamanho. O C23 prova as duas
> pontas.

---

## Tarefa B — check novo **C23** (`validate.js`)

**Âncora (linha única):**

```js
check("C22 disciplina de entrega no modo Code
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
check("C23 a copia nao e a fonte da verdade (wo0066): regra de higiene nos 18 CEREBROs, sem custo nas Instrucoes", () => {
  let base=null;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    assert(/A sua cópia não é a fonte da verdade/.test(cmd), id+": CEREBRO sem a regra de releitura antes de afirmar pendencia");
    assert(/releia o arquivo vivo/.test(cmd), id+": CEREBRO nao manda reler o arquivo vivo");
    assert(!/A sua cópia não é a fonte da verdade/.test(T.buildInstr(n)), id+": a regra vazou para as Instrucoes (deve viver so no CEREBRO)");
  });
  return "ok";
});

```

---

## Tarefa C — bump

**Âncora:** `const KIT_VERSION = "1.87.0";` → **Substituir por:** `const KIT_VERSION = "1.88.0";`

---

## Tarefa D — `.flatdropignore`: as análises voltam ao mount

**Âncora (linha única):**

```
meta/analises/*
```

**Substituir por:**

```
# Analises: enquanto forem POUCAS, sobem. O chat precisa reler a analise "Em discussao" no turno
# seguinte — analise que o chat nao ve nao e discutida, e reescrita do zero. Quando pesarem, religue
# a linha abaixo e reinclua pontualmente a que estiver aberta (!meta/analises/<arquivo>.md).
# meta/analises/*
```

> A linha `!meta/analises/_TEMPLATE.md`, logo abaixo, **permanece** — inofensiva com a exclusão
> comentada e útil como lembrete da regra «modelo e guia sempre sobem».

---

## Tarefa E — `meta/CONTEXT.md` §7: armadilha nova

**Âncora (linha única — é o último item da lista):**

```
14. **Nomes do mount mudam por sessão** (achatado FlatDrop: `dev__src__niches.js` ou colisões `dev.js`) — conferir `_MANIFEST.md` / listar antes de mapear.
```

**Substituir por:**

```
14. **Nomes do mount mudam por sessão** (achatado FlatDrop: `dev__src__niches.js` ou colisões `dev.js`) — conferir `_MANIFEST.md` / listar antes de mapear.
15. **Tratar a própria cópia como o estado do projeto** (sandbox reconstruído, artefato gerado, resumo de dois turnos atrás) → reentrega de trabalho já aplicado. O sandbox congela quando é criado; o repo anda. **Cópia byte-idêntica não protege** — o que envelhece primeiro não é o código, é o *estado do trabalho*. Releia o mount ANTES de responder, sempre, e com mais rigor quando existir um sandbox (wo0066).
16. **Comparar contra a cópia versionada das Instruções** em vez do texto de **Projeto → Instruções** → conclusão errada sobre o que o assistente lê de fato. Desde `437fd39` o `INSTRUCOES-DO-PROJETO.md` nem sobe ao mount: o painel é a única referência (wo0066).
```

---

## Tarefa F — `meta/CEREBRO.md`: as duas regras

**F1 — Âncora (linha única, na entrada de higiene do FlatDrop da wo0063):**

```
E use `pasta/*` (o conteúdo), nunca `pasta/` (a pasta inteira): sob pasta excluída por inteiro o `!` **não** reinclui.
```

**Substituir por:**

```
E use `pasta/*` (o conteúdo), nunca `pasta/` (a pasta inteira): sob pasta excluída por inteiro o `!` **não** reinclui. **Revisto na wo0066:** as **análises voltaram a subir** — enquanto forem poucas, o corpo sobe junto, porque análise «Em discussão» que o chat não enxerga no turno seguinte não é discutida, é reescrita do zero. O que fica fora do mount por decisão é o `INSTRUCOES-DO-PROJETO.md` (`437fd39`): ele é versionado no git, mas quem vale é o texto colado em **Projeto → Instruções**.
```

**F2 — INSERIR, como bullet novo logo depois do bullet acima:**

```
- **A sua cópia não é a fonte da verdade (wo0066).** O que vale é o arquivo vivo do mount **agora** — não o sandbox que o chat reconstruiu para testar a WO, não o pacote entregue dois turnos atrás, não o resumo de estado que ele mesmo escreveu. O sandbox congela no instante em que nasce; o repo anda. **Cópia byte-idêntica não protege:** o que envelhece primeiro não é o código, é o *estado do trabalho* — foi assim que uma WO já aplicada foi reentregue com `/apply-wo` e handoff, com o template idêntico ao do repo. Regra prática: antes de afirmar que algo está pendente, de reentregar um arquivo ou de repetir uma linha de comando, **releia o mount** — inclusive as notas `.txt`, que são onde o Code reporta o que fechou. E a releitura vale **mais**, não menos, quando existe um sandbox: é ele que cria a ilusão de já se saber o estado.
- **A instrução viva é a do painel (wo0066).** Ao falar do que o assistente lê em toda mensagem, a referência é o texto de **Projeto → Instruções** — não o `INSTRUCOES-DO-PROJETO.md` do repo, que é cópia versionada e está fora do mount por decisão (`437fd39`). Quando uma WO mudar as Instruções, a entrega **tem** de terminar com o pedido explícito de recolar no painel: enquanto o painel não for atualizado, o repo está certo e o assistente continua errado.
```

---

## Tarefa G — registros

1. **`meta/DECISIONS.md`** — **D-100 — A cópia não é a fonte da verdade; análises voltam ao mount; a
   instrução viva é a do painel.** Contexto: reentrega da wo0065 já aplicada, com o relatório do Code
   (`260727-2216.txt`) disponível no mount desde antes do turno. Opções: (A) reforçar a regra de
   releitura que já existia — descartada, ela já existia e não impediu; (B) proibir sandbox —
   descartada, o sandbox é o que faz a WO chegar testada, e a wo0065 provou o valor (template
   byte-idêntico ao aplicado); (C) **nomear a armadilha e atacar a causa** — a ilusão de estado, não a
   falta de leitura — escolhida. Consequência: regra nova nas `HYGIENE_RULES` (produto, 18 nichos),
   armadilhas 15 e 16 no CONTEXT, análises reincluídas no mount, C23.
2. **`meta/CHANGELOG.md`** — `## v1.88.0 — A copia nao e a fonte da verdade (wo0066, D-100)`, com o
   custo de teto (**zero**: a regra é CEREBRO-only, provado pelo C23) e o harness 66/66 → **67/67**.
3. **`meta/STATUS.md`** — append + versão **v1.88.0** · 67/67.
4. **`meta/IDEAS.md`** — registrar **aberta**: **medir a defasagem entre painel e repo**. Não há como
   o harness ver o texto colado em Projeto → Instruções; hoje a única defesa é o pedido explícito de
   recolar. Avaliar se o `INSTRUCOES-DO-PROJETO.md` deveria carregar um carimbo de versão
   (`<!-- v1.88.0 -->`) que o assistente possa conferir contra o `KIT_VERSION` ao abrir a sessão — se
   divergir, ele avisa em vez de assumir.

---

## Verificação

1. `node build.js` · `node validate.js index.html` → **18/18 · 67/67 · 0 erros**, **C23 verde**.
2. Teto inalterado: `narrative` **6612**, `game` **6520**, `dev` **6117** (se mudarem, a regra vazou
   para as Instruções — e o C23 deve ter pego).
3. `git status` limpo.

---

## Commit (bloco separado, sem acento)

```bash
git add -A
git commit -m "feat(kit): a copia nao e a fonte da verdade (wo0066, D-100)

- regra de higiene nova nos 18 CEREBROs: vale o arquivo vivo, nao a copia gerada antes
- armadilhas 15 e 16 no CONTEXT: sandbox congela e o repo anda; instrucao viva e a do painel
- analises voltam a subir ao mount enquanto forem poucas (analise que o chat nao ve nao e discutida)
- check C23 prova a regra nos 18 CEREBROs e que ela NAO vazou para as Instrucoes (custo de teto zero)
- KIT_VERSION 1.88.0; harness 18/18, 67/67, 0 erros"
git push
```
