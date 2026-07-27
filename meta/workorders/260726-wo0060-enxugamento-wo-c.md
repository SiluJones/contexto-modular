# wo0060 — **WO-C**: correção do bloco de fecho + poda + migração para os `meta/`

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.82.0` (pós-wo0059, commit `3a4bd77`, pushado), harness **18/18 · 63/63 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 63/63 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado em sandbox pós-wo0059 → verde **18/18 · 63/63**.
> **Rode `/check-wo` antes de aplicar.**
>
> **Escopo aprovado pelo usuário:** WO-C **reduzida** — os papéis dos arquivos **ficam como estão** (com
> folgas de 862–1647 na maioria, comprimi-los custaria clareza sem ganho necessário). Entram: poda do
> cabeçalho auto-referencial, a regra de migração para os `meta/`, e a **correção do bloco de fecho** da
> wo0058 (casada aqui, porque devolve espaço a `narrative` e `game`).

## Resultado medido

| nicho | antes | depois | ganho | folga |
|---|---|---|---|---|
| narrative | 6612 | **6467** | 145 | **433** |
| game | 6520 | **6375** | 145 | **525** |
| dev | 6038 | 5893 | 145 | 1007 |
| career | 6049 | 5817 | 232 | 1083 |

Mais pesado agora: `narrative` 6467 (folga 433). **Todos sob o teto.**

---

## Parte 1 — Correção do bloco de fecho (a wo0058 saiu errada)

A wo0058 entregou o bloco com **ordem e rótulos alterados** em relação ao formato aprovado. Correto:
**Próximo** (antes do divisor) → **Estado** → **Arquivar / Manter** → **Config recomendada** (lista, uma
linha por raia) → **Handoff** (por último). Além disso, o bloco passa a ser **explicitamente personalizável**
pelo projeto — como manda o auto-refino da wo0055, um projeto pode acrescentar a linha que sua rotina exige
(prazo, custo, publicação, estoque) ou propor remover a que nunca se aplica.

### A1 — preâmbulo do bloco (fixa a ordem)
**Âncora:**
```javascript
  L.push("Todo turno de trabalho termina com este bloco, nesta ordem, **emitindo só as linhas que se aplicam** — linha sem conteúdo real não aparece (não escreva «nada a arquivar» nem invente handoff):");
```
**Substituir por:**
```javascript
  L.push("Todo turno de trabalho fecha assim, **emitindo só as linhas que se aplicam** — linha sem conteúdo real não aparece (não escreva «nada a arquivar» nem invente handoff). **Próximo** vem antes de um divisor; o resto vem depois dele:");
```

### A2 — remover a linha «Próximo passo» do lugar antigo
**Âncora (remover a linha inteira):**
```javascript
  L.push("- **Próximo passo** — sempre presente: a próxima ação concreta, não uma lista de possibilidades.");
```
**Substituir por:** *(nada — apagar a linha)*

### A3 — «Próximo» passa a ser o item 1, antes de «Estado»
**Âncora:**
```javascript
  L.push("- **Estado** — uma linha: onde o projeto está agora (versão/fase e, havendo harness, o resultado dos testes) e o commit, quando existir.");
```
**Substituir por:**
```javascript
  L.push("1. **Próximo** — sempre presente, ANTES do divisor: a próxima ação concreta, não uma lista de possibilidades.");
  L.push("2. **Estado** — uma linha: onde o projeto está agora (versão/fase e, havendo harness, o resultado dos testes) e o commit, quando existir.");
```

### A4 — «Notas» vira «Arquivar / Manter»
**Âncora:**
```javascript
  L.push("- **Notas** — só se houver notas avulsas no mount: diga, nome por nome, o que já pode ser **arquivado** (absorvido) e o que **manter** (item ainda aberto), com o motivo em poucas palavras. Não espere que eu pergunte.");
```
**Substituir por:**
```javascript
  L.push("3. **Arquivar / Manter** — só se houver notas avulsas no mount: nome por nome, o que já pode ser **arquivado** (absorvido) e o que **manter** (item ainda aberto), com o motivo em poucas palavras. Não espere que eu pergunte.");
```

### A5 — Config vira lista por raia
**Âncora:**
```javascript
  L.push("- **Config recomendada** — o que usar no próximo passo, **identificando a raia**: para a conversa de planejamento, tipo de modelo + nível de esforço; e uma linha por raia adicional que este projeto realmente use. Nunca afirme saber a config atual — recomende pela tarefa que vem.");
```
**Substituir por:**
```javascript
  L.push("4. **Config recomendada** — em lista, **uma linha por raia**, cada uma nomeando a raia, o tipo de modelo e o nível de esforço (e o terminal, se a raia usar). Só as raias que este projeto realmente usa. Nunca afirme saber a config atual — recomende pela tarefa que vem.");
```

### A6 — Handoff por último + o bloco vira personalizável
**Âncora:**
```javascript
  L.push("- **Handoff** — só quando houver arquivo trocando de mão: arquivo por arquivo, onde cada um vai. Se o pedido for um handoff de sessão completo, o artefato se chama `AAMMDD-HANDOFF-BRIEF.md`.");
```
**Substituir por:**
```javascript
  L.push("5. **Handoff** — por último, só quando houver arquivo trocando de mão: arquivo por arquivo, onde cada um vai. Handoff de sessão completo: o artefato se chama `AAMMDD-HANDOFF-BRIEF.md`.");
  L.push("**Este formato é o ponto de partida, não uma jaula.** Se este projeto tem um dado recorrente que merece linha própria (prazo, custo, publicação, estoque, o que for), acrescente — e se uma linha nunca se aplica aqui, proponha removê-la no refino.");
```

### A7 — gatilho das Instruções com a ordem certa
**Âncora:**
```javascript
lines.push("- **Feche o turno com o bloco padrão** (só o que se aplica): Estado · Próximo passo · Notas (arquivar/manter) · Config por raia · Handoff. Formato no CEREBRO.");
```
**Substituir por:**
```javascript
lines.push("- **Fecho do turno** (só o que se aplica): Próximo · Estado · Arquivar/Manter · Config por raia · Handoff. Formato no CEREBRO.");
```

---

## Parte 2 — Poda e migração

### B1 — cabeçalho auto-referencial podado (−110 chars nos 18)
Explicava o documento para quem já estava lendo o documento.
**Âncora:**
```javascript
lines.push("> Comportamento detalhado, regras de higiene e tabela de gatilhos estão no **CEREBRO.md** (subido como arquivo). Estas instruções trazem só o essencial, lido em toda mensagem.")
```
**Substituir por:**
```javascript
lines.push("> Comportamento detalhado, higiene e gatilhos: **CEREBRO.md**.")
```

### B2 — regra de migração da personalização para os `meta/` (bloco de refino)
**Âncora:** `  L.push("- **Corte o que não se aplica.**`
**Substituir por:**
```javascript
  L.push("- **Personalização genérica migra para os meta/.** O que veio do formulário de montagem serve para **preencher** os arquivos de contexto; depois de aplicado, não precisa continuar ocupando as Instruções. Proponha mover, deixando nas Instruções a identidade do projeto, o ritual, os gatilhos e a disciplina de entrega.");
  L.push("- **Corte o que não se aplica.**
```

### B3 — bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.82.0";` → `const KIT_VERSION = "1.83.0";`

---

## Parte 3 — `validate.js`: atualizar o **C19**

Três edições dentro do check existente (ele trava os rótulos antigos e ficaria vermelho):

**C1.** **Âncora:** `  assert(/Feche o turno com o bloco padrão/.test(T.buildInstr(n)),"Instr sem o gatilho do bloco de fecho");`
→ **Substituir por:** `  assert(/Fecho do turno/.test(T.buildInstr(n)),"Instr sem o gatilho do bloco de fecho");`

**C2.** **Âncora:** `  ["Estado","Próximo passo","Notas","Config recomendada","Handoff"].forEach(k=>`
→ **Substituir por:** `  ["Próximo","Estado","Arquivar / Manter","Config recomendada","Handoff"].forEach(k=>`

**C3.** **Âncora:** `  assert(/AAMMDD-HANDOFF-BRIEF\.md/.test(c),"CEREBRO nao nomeia o artefato de handoff");`
→ **Substituir por** (a âncora + as quatro asserções novas):
```javascript
  assert(/AAMMDD-HANDOFF-BRIEF\.md/.test(c),"CEREBRO nao nomeia o artefato de handoff");
  assert(/\*\*Próximo\*\* vem antes de um divisor/.test(c),"CEREBRO nao fixa a ordem (Proximo antes do divisor)");
  assert(/não uma jaula/.test(c),"CEREBRO nao autoriza o projeto a personalizar o bloco");
  assert(/Personalização genérica migra para os meta/.test(c),"CEREBRO sem a regra de migracao para os meta/");
  assert(!/Estas instruções trazem só o essencial, lido em toda mensagem/.test(T.buildInstr(n)),"cabecalho auto-referencial nao foi podado");
```

---

## Parte 4 — docs (append)

- **`meta/DECISIONS.md` → D-094:** WO-C, escopo reduzido por decisão do usuário — **papéis dos arquivos
  ficam como estão** (folgas de 862–1647 tornam a compressão desnecessária, e ela custaria clareza).
  Entregue: (a) **correção do bloco de fecho** da wo0058 — ordem **Próximo → Estado → Arquivar/Manter →
  Config (lista por raia) → Handoff**, com «Próximo» antes do divisor, e o bloco declarado
  **personalizável** pelo projeto (pode ganhar linha própria para dado recorrente, ou perder a que nunca se
  aplica, via refino); (b) **poda do cabeçalho auto-referencial** (−110 chars nos 18); (c) **regra de
  migração**: personalização vinda do formulário preenche os `meta/` e sai das Instruções, que guardam
  identidade + ritual + gatilhos + disciplina. C19 atualizado. **Enxugamento A→B→C concluído.**
- **`meta/IDEAS.md`:** **enxugamento concluído**; correção do bloco de fecho → **fechada**. Parqueado:
  **padronizar a pasta de análises** — decidido manter **`analises/`** (pt-BR, coerente com `meta/` e
  `workorders/`; `design/` foi descartado por colidir com o nicho Design); falta só padronizar o template
  (com `Status` e elos cruzados) e **dialogar com o projeto que usa `design/`** para renomear, se o conteúdo
  casar com o significado.
- **`meta/STATUS.md`:** v1.82.0 → **v1.83.0**; **18/18 · 63/63 · 0 erros**; `KIT_VERSION 1.83.0`; nota de
  teto: mais pesado é `narrative` 6467 (folga 433), depois `game` 6375 (folga 525).
- **`meta/CHANGELOG.md`:** entrada v1.83.0 no topo.

---

## Verificação

1. `/check-wo` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 63/63 · 0 erros**; C19 verde.
3. **Teto:** narrative **6467** · game **6375** · dev **5893** · career **5817**; nenhum estoura.
4. **Visual:** o CEREBRO mostra o bloco de fecho numerado **1. Próximo → 2. Estado → 3. Arquivar / Manter →
   4. Config recomendada → 5. Handoff**, com a frase «não uma jaula»; as Instruções abrem sem o parágrafo
   auto-referencial e fecham com o gatilho na ordem nova.
5. `git diff --stat` — template + validate.js + index.html + 4 meta-docs + esta WO.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/workorders/260726-wo0060-enxugamento-wo-c.md
git commit -m "fix(fecho)+feat(instrucoes): corrige o bloco de fecho, poda o cabecalho e migra personalizacao para os meta (wo0060, D-094)

- bloco de fecho na ordem correta: Proximo (antes do divisor), Estado, Arquivar/Manter, Config por raia, Handoff
- bloco declarado personalizavel: projeto pode acrescentar linha propria ou propor remover a que nao se aplica
- cabecalho auto-referencial podado (-110 chars nos 18 nichos)
- regra nova: personalizacao do formulario preenche os meta/ e sai das Instrucoes
- papeis dos arquivos mantidos por decisao de escopo (folga suficiente; comprimir custaria clareza)
- C19 atualizado; narrative 6467 (folga 433), game 6375 (folga 525); enxugamento A-B-C concluido
- KIT_VERSION 1.83.0; 18/18, 63/63, 0 erros"
git push
```
