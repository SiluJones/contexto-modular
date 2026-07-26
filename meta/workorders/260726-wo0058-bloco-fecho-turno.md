# wo0058 — Bloco de fecho de turno padronizado (condicional)

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.80.0` (pós-wo0057, commit `8d6d875`, pushado), harness **18/18 · 62/62 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 63/63 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado em sandbox pós-wo0057 → verde **18/18 · 63/63**.
> **Rode `/check-wo` antes de aplicar.**
>
> **Origem:** pedido do usuário (260726-0842): padronizar no KCM o protocolo de fecho de turno —
> «*com cada linha estruturada e organizada assim, quando cada coisa existir… esse tipo de protocolo
> padronizado e identificável é excelente disciplina*». Absorve também o **i-N44/i-N45** e a nota 260720
> (nome padrão do handoff).

## O quê

Cinco linhas, sempre na mesma ordem, **emitindo só as que têm conteúdo real**:
**Estado · Próximo passo · Notas (arquivar/manter) · Config recomendada por raia · Handoff.**

O ponto que faz isso funcionar é a **condicionalidade**: em projeto sem modo Code não aparece linha de Code;
sem notas avulsas no mount não aparece linha de Notas; sem arquivo trocando de mão não aparece Handoff. E o
CEREBRO diz isso explicitamente — «linha sem conteúdo real não aparece; não escreva "nada a arquivar" nem
invente handoff» —, porque a alternativa (emitir a linha vazia) é pior que não emitir.

**Custo de teto:** gatilho de **159 chars** nas Instruções; a estrutura completa fica no CEREBRO (grátis).
Medido: narrative 6453 → **6612** (folga **288**), game 6361 → **6520** (folga **380**), career **5962**,
rpg **5813**. **Nenhum nicho estoura.**

> **Nota de transparência:** a primeira versão do gatilho custava 245 chars e derrubava a narrativa a 201 de
> folga — comia metade do ganho da wo0057. Enxuguei para 158 antes de fechar. Vale lembrar: **cada linha nova
> nas Instruções custa em todos os 18 nichos**; o lugar padrão de conteúdo novo é o CEREBRO.

---

## Tarefa A — `src/index.template.html`

### A1 — gatilho compacto no fecho das Instruções (`buildInstr`)
**Âncora:**
```javascript
    lines.push("- Higiene no CEREBRO.md (resumo: STATUS só o agora; IDEAS nunca perde; uma fonte de verdade por dado).");
```
**Substituir por:**
```javascript
    lines.push("- Higiene no CEREBRO.md (resumo: STATUS só o agora; IDEAS nunca perde; uma fonte de verdade por dado).");
    lines.push("- **Feche o turno com o bloco padrão** (só o que se aplica): Estado · Próximo passo · Notas (arquivar/manter) · Config por raia · Handoff. Formato no CEREBRO.");
```

### A2 — estrutura completa no CEREBRO (`buildClaudeMd`), antes do bullet de sincronia
**Âncora:** `  L.push("- **Sincronia com o CEREBRO.**`
**Substituir por:**
```javascript
  L.push("");
  L.push("## Bloco de fecho de turno (formato fixo)");
  L.push("Todo turno de trabalho termina com este bloco, nesta ordem, **emitindo só as linhas que se aplicam** — linha sem conteúdo real não aparece (não escreva «nada a arquivar» nem invente handoff):");
  L.push("- **Estado** — uma linha: onde o projeto está agora (versão/fase e, havendo harness, o resultado dos testes) e o commit, quando existir.");
  L.push("- **Próximo passo** — sempre presente: a próxima ação concreta, não uma lista de possibilidades.");
  L.push("- **Notas** — só se houver notas avulsas no mount: diga, nome por nome, o que já pode ser **arquivado** (absorvido) e o que **manter** (item ainda aberto), com o motivo em poucas palavras. Não espere que eu pergunte.");
  L.push("- **Config recomendada** — o que usar no próximo passo, **identificando a raia**: para a conversa de planejamento, tipo de modelo + nível de esforço; e uma linha por raia adicional que este projeto realmente use. Nunca afirme saber a config atual — recomende pela tarefa que vem.");
  L.push("- **Handoff** — só quando houver arquivo trocando de mão: arquivo por arquivo, onde cada um vai. Se o pedido for um handoff de sessão completo, o artefato se chama `AAMMDD-HANDOFF-BRIEF.md`.");
  L.push("Vale para todo turno de trabalho, não só ao encerrar a sessão: é o que me deixa retomar sem reconstruir contexto.");
  L.push("");
  L.push("- **Sincronia com o CEREBRO.**
```
> Atenção: a última linha **reabre** o `L.push` existente do bullet de sincronia — o bloco inteiro entra
> **antes** dele, e ele continua intacto logo depois. As crases em `` `AAMMDD-HANDOFF-BRIEF.md` `` são literais.

### A3 — bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.80.0";` → `const KIT_VERSION = "1.81.0";`

---

## Tarefa B — `validate.js`: check **C19**

**Âncora:** `check("C18 motor do enxugamento`
**Substituir por** (insira C19 ANTES do C18, que permanece logo depois):
```javascript
check("C19 bloco de fecho de turno padronizado (wo0058): gatilho nas Instr + formato condicional no CEREBRO", () => {
  const n=T.normNiche(T.NICHES.dev);
  assert(/Feche o turno com o bloco padrão/.test(T.buildInstr(n)),"Instr sem o gatilho do bloco de fecho");
  const c=T.buildClaudeMd(n);
  assert(/## Bloco de fecho de turno/.test(c),"CEREBRO sem a secao do bloco de fecho");
  ["Estado","Próximo passo","Notas","Config recomendada","Handoff"].forEach(k=>
    assert(new RegExp("\\*\\*"+k+"\\*\\*").test(c),"CEREBRO sem a linha: "+k));
  assert(/só as linhas que se aplicam/.test(c),"CEREBRO nao manda condicionar as linhas");
  assert(/AAMMDD-HANDOFF-BRIEF\.md/.test(c),"CEREBRO nao nomeia o artefato de handoff");
  return "ok";
});

check("C18 motor do enxugamento
```

---

## Tarefa C — DOGFOOD

`INSTRUCOES-DO-PROJETO.md` e `meta/CEREBRO.md` do próprio KCM adotam o mesmo bloco. O KCM **já pratica** este
protocolo informalmente (foi ele que originou o pedido) — agora fica escrito, com as raias que o KCM usa de
fato: **Chat** (planejamento) e **Code** (execução). Atualize a linha «Mudanças nesta revisão» do CEREBRO.

---

## Tarefa D — docs (append)

- **`meta/DECISIONS.md` → D-092:** o fecho de turno passa a ter **formato fixo e condicional** (Estado ·
  Próximo passo · Notas · Config por raia · Handoff), emitindo só as linhas com conteúdo real. Origem: pedido
  do usuário após o padrão emergir na prática das sessões do KCM. Resolve duas dores observadas: (a) o usuário
  tinha de **perguntar** o que arquivar; (b) as recomendações de config vinham confusas, sem dizer **para qual
  raia**. Absorve i-N44/i-N45 e o nome `AAMMDD-HANDOFF-BRIEF.md` (nota 260720) — o nome vive no protocolo de
  fecho, não no CEREBRO como arquivo obrigatório. Gatilho de 159 chars nas Instruções; estrutura no CEREBRO.
  Check C19.
- **`meta/IDEAS.md`:** protocolo de fecho + nome do handoff → **INCORPORADOS** (fecha i-N44/i-N45 e a nota
  260720). Seguem parqueadas: **WO-B 2ª leva** (14 nichos restantes) e **WO-C** (papéis de arquivo + migração
  para os `meta/` + poda de markdown), além de **padronizar a pasta de análises** no kit.
- **`meta/STATUS.md`:** v1.80.0 → **v1.81.0**; **18/18 · 63/63 · 0 erros**; `KIT_VERSION 1.81.0`; somar C19;
  atualizar a nota de teto: mais apertado agora é **`narrative` 6612/6900 (folga 288)**, depois `game` (6520,
  folga 380).
- **`meta/CHANGELOG.md`:** entrada v1.81.0 no topo.

---

## Verificação

1. `/check-wo` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 63/63 · 0 erros**; C19 verde.
3. **Teto:** narrative **6612** · game **6520** · career **5962** · rpg **5813**; nenhum nicho estoura.
4. **Visual:** qualquer nicho → as Instruções terminam com o gatilho do bloco padrão; o CEREBRO traz a seção
   «Bloco de fecho de turno» com as cinco linhas e a regra de condicionalidade.
5. `git diff --stat` — template + validate.js + index.html + INSTRUCOES-DO-PROJETO.md + meta/CEREBRO.md + 4 meta-docs + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        INSTRUCOES-DO-PROJETO.md meta/CEREBRO.md \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260726-wo0058-bloco-fecho-turno.md
git commit -m "feat(disciplina): bloco de fecho de turno padronizado e condicional (wo0058, D-092)

- cinco linhas em ordem fixa: Estado, Proximo passo, Notas (arquivar/manter), Config por raia, Handoff
- emite so o que se aplica: sem modo Code nao ha linha de Code; sem notas no mount nao ha linha de Notas
- resolve duas dores: o usuario tinha de perguntar o que arquivar; config vinha sem dizer a raia
- absorve i-N44/i-N45 e o nome AAMMDD-HANDOFF-BRIEF.md (nota 260720)
- gatilho de 159 chars nas Instrucoes, estrutura completa no CEREBRO; dogfood no proprio KCM
- check C19; KIT_VERSION 1.81.0; 18/18, 63/63, 0 erros"
git push
```
