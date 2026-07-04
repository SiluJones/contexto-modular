# Spec — Disciplina v2 · Fases B-D: config mode-aware + nome de spec no Modo Code + obediência

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca o produto** (`src/index.template.html` → `index.html`): **precisa** de `node build.js` e `node validate.js` (17/17).
> Prompt: **"leia `meta/specs/2026-06-30-spec0008_disciplina-v2-BCD.md` e execute"**.
> Config: **Sonnet + `/effort high`** (é texto de diretriz).
> São 3 tarefas independentes (B, C, D). O checklist de validação cobre as três — confira todas antes do commit.

---

## Tarefa B — recomendação de config é mode-aware (chat vs. Claude Code)
O Claude Code **não tem toggle de pensamento** (ele é acoplado ao esforço; há `/effort` e `ultrathink`/`ultracode`). A diretriz atual manda "pensamento (ligado/desligado)" para todo lugar — errado para o Code. Também não deve fixar nome de modelo (envelhece).

### B.1 — seção no CEREBRO (`buildClaudeMd`, linha ≈2199)
**Substitua** a linha `L.push("No fim de cada sessão, junto do resumo e de qualquer dúvida, avalie o que a **próxima etapa** exige e recomende a configuração de forma **completa e explícita**: **modelo** (ex.: Opus vs Sonnet), **esforço** (Baixo/Médio/Alto/Extra/Máximo) e **pensamento** (ligado/desligado).");` por:
```js
  L.push("No fim de cada sessão, junto do resumo e de qualquer dúvida, avalie o que a **próxima etapa** exige e recomende a configuração de forma **completa e explícita**. Os controles dependem de ONDE se trabalha:");
  L.push("- **No chat (claude.ai):** **modelo** (recomende pela capacidade — o mais capaz vs. um mais leve —, não pelo nome/versão, que muda), **esforço** (Baixo→Máximo) e **pensamento** (ligado/desligado): três controles independentes.");
  L.push("- **No Claude Code (CLI/desktop):** **modelo** + **nível de esforço** (`/effort` baixo→máximo, ou `xhigh`/`ultracode` onde houver). **Não há toggle de pensamento** no Code — ele é acoplado ao esforço; para um turno difícil pontual, use `ultrathink` no prompt. Nunca recomende \"ligar o pensamento\" no Code.");
```

### B.2 — linha na instrução curta (`buildInstr`, linha ≈1917)
**Substitua** a linha `lines.push("**Config:** no fim, se a PRÓXIMA etapa pedir configuração diferente, recomende-a explícita (modelo / esforço Baixo→Máximo / pensamento lig-desl). Nunca afirme saber a config atual — recomende pela tarefa. Pesada com config fraca → peça aumento nomeando os níveis; folga → diga que pode baixar.");` por:
```js
  lines.push("**Config:** no fim, se a PRÓXIMA etapa pedir config diferente, recomende-a explícita — no chat: modelo + esforço (Baixo→Máximo) + pensamento (lig/desl); no Claude Code: modelo + `/effort` (ou `ultrathink`/`ultracode`), SEM toggle de pensamento. Nunca afirme saber a atual; recomende pela tarefa. Pesada com config fraca → peça aumento; folga → diga que pode baixar.");
```

---

## Tarefa C — nome de spec padronizado no Modo Code (fecha a Decisão 4)
A convenção `AAAA-MM-DD-specNNNN` foi decidida mas nunca entrou na geração do Modo Code. **Âncora:** a linha da raia do Claude Code que termina em `…Roda build/validação. Commita.');` (≈2238). **Insira DEPOIS dela:**
```js
    L.push('- **Nomes padronizados:** specs em `meta/specs/` seguem `AAAA-MM-DD-specNNNN.md` (ex.: `2026-06-30-spec0007_asu-entrega-e-escopo.md`); instruções ASU seguem `AAAA-MM-DD-asuNNNN.yaml`. Numeração sequencial e estável; a data é a de criação. O chat nomeia; o Code aplica.');
```

---

## Tarefa D — obediência: feedback-ASU registrado + nome simples no download
Dois desvios vistos em produção: (1) o chat gerou feedback para o ASU mas não registrou em «Feedback para o ASU» no IDEAS; (2) arquivos para baixar saíram com o caminho virando prefixo (`meta/IDEAS.md` → `meta_IDEAS.md`).

**Âncora:** a linha da instrução curta do ASU `if(asuModeOn()) lines.push("ASU: **editar** código/doc de heading único …Detalhe no CEREBRO.");` (≈1916). **Insira DEPOIS dela:**
```js
  if(asuModeOn()) lines.push("**Feedback ASU:** se gerou instrução ASU ou esbarrou numa limitação/pedido de melhoria da ferramenta nesta sessão, registre em «Feedback para o ASU» no IDEAS antes de fechar.");
  lines.push("**Nome de download:** arquivo para baixar usa o nome SIMPLES (ex.: `IDEAS.md`), sem prefixo de pasta (não `meta_IDEAS.md`) — mesmo que o caminho apareça no manifest. Só prefixe para desambiguar dois arquivos de mesmo nome.");
```

---

## Validar (obrigatório — cobre B, C, D)
1. `node build.js` → **OK**; `node validate.js` → **17/17**.
2. **B:** no CEREBRO de qualquer nicho, a seção «Recomendação de configuração» tem os dois marcadores (chat / Claude Code) e o do Code diz "não há toggle de pensamento"; a instrução curta traz a linha Config mode-aware.
3. **C:** ligue "Desenvolver no Claude Code?" → o CEREBRO traz o item "Nomes padronizados" com `AAAA-MM-DD-specNNNN.md`.
4. **D:** a instrução curta traz a linha "Nome de download" (sempre) e a "Feedback ASU" (quando ASU ligado).
5. `git diff` revisado.

## Ao terminar (raia do Code — append-only, 3 DECs)
- **`meta/DECISIONS.md`** — acrescente (confirme números):
```
## D-038 — Recomendação de config é mode-aware (chat vs. Claude Code)
**Decisão.** A diretriz de config distingue chat (modelo + esforço + pensamento) de Claude Code (modelo + `/effort`/`ultrathink`/`ultracode`, SEM toggle de pensamento) e recomenda modelo por capacidade, não por nome/versão.
**Por quê.** Pesquisa confirmou que o Code não tem toggle de pensamento — é acoplado ao esforço. A diretriz antiga mandava "ligar pensamento" no Code (inexistente). Nome de modelo fixo envelhece (ex.: Sonnet 5 recém-lançado).

## D-039 — Nome de spec padronizado no Modo Code (fecha a Decisão 4)
**Decisão.** A geração do Modo Code passa a prescrever `AAAA-MM-DD-specNNNN.md` para specs (e reitera `AAAA-MM-DD-asuNNNN.yaml` para instruções ASU).
**Por quê.** A convenção fora decidida mas nunca chegou à geração — projetos com Modo Code inventavam nomes (ex.: `spec-DEC-039-comportamento.md`). Fecha a lacuna.

## D-040 — Obediência: feedback-ASU e nome de download
**Decisão.** Instrução curta reforça: registrar «Feedback para o ASU» no IDEAS ao fim (quando houve feedback); arquivo para baixar usa nome simples (`IDEAS.md`), sem prefixo de pasta, salvo para desambiguar homônimos.
**Por quê.** Ambos desviaram em produção — feedback não registrado, e `meta/IDEAS.md` baixando como `meta_IDEAS.md`. Diretriz só obedecida quando está na instrução curta (lida em todo turno).
```
- **`meta/CHANGELOG.md`** — topo: `## v1.42.0 — Config mode-aware + nome de spec no Modo Code + obediencia (disciplina v2, Fases B-D)` + bullets (D-038/039/040).
- **`meta/STATUS.md`** — versão → **v1.42.0** + «Última sessão»; marque **disciplina v2 (Fases A-D) CONCLUÍDA**; pendente só o **layout** (spec de frontend à parte).

## Commit (sem acento)
```
git add src/index.template.html index.html meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: config mode-aware + nome de spec no Modo Code + obediencia (disciplina v2 B-D)" -m "D-038 config chat-vs-Code sem toggle de pensamento no Code; D-039 fecha Decisao 4 (AAAA-MM-DD-specNNNN); D-040 feedback-ASU e nome simples no download; v1.42.0"
git push
```
