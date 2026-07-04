# Spec — Reconciliação dos meta/ ao estado real (v1.42.0 + notas mineradas)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Doc-only** (mexe em `meta/CONTEXT.md`, `meta/STATUS.md`, `meta/IDEAS.md`, `meta/DECISIONS.md`): **sem** `node build.js` / `node validate.js`. Rede = `git diff`.
> Prompt no Code: **"leia `meta/specs/260701-spec0009-reconciliacao-meta.md` e execute"**.
> Config: **Sonnet + `/effort high`** (posicionamento de texto; nenhuma lógica).

## Contexto (por que esta spec existe)
O handoff de 07-01 destilou o estado da sessão em arquivos `-acrescimo.md` **em vez de atualizar os `meta/` do repo** — e ainda ficou **atrás do próprio repo**: a `spec0008` (Fases B-D, v1.42.0) **já rodou e foi commitada** (confirmado nas notas do Code de 07-01), mas os acréscimos ainda dizem "a confirmar". Além disso, uma pendência técnica real do Code (o teto de 6500 no nicho `game`) ficou **só na nota**, em nenhum `meta/`. Esta spec **firma os `meta/` do repo no estado real**, minerando as notas cruas — sem depender dos `-acrescimo.md` (que são a versão resumida e defasada).

**Regra de ouro respeitada:** cada doc por **um canal só** neste ciclo. Todos vão por esta spec (Code posiciona). Nenhum é entregue "inteiro para baixar" no mesmo ciclo.

**Achado de verificação a validar primeiro:** o repo já deve estar em **v1.42.0** com **D-038/039/040/041** em `DECISIONS.md`. **Antes de aplicar**, rode `grep -n "v1.42.0" meta/STATUS.md meta/CHANGELOG.md` e `grep -n "D-041" meta/DECISIONS.md`. Se v1.42.0 e D-041 **já estiverem lá**, pule as tarefas marcadas `[só se faltar]`. Isto é o P8: confira o arquivo vivo, não o relato.

---

## Tarefa A — `meta/CONTEXT.md`: atualizar carimbo e estado (delta cirúrgico)

O CONTEXT do repo é o **bom e denso** (não o acréscimo). Só precisa refletir que a migração inglês + disciplina v2 concluíram.

### A.1 — carimbo de versão de referência
**Âncora (substituir-BLOCO):** a linha do topo que começa com `> Versão de referência: **v1.34.0**`.
**Substituir por:**
```
> Versão de referência: **v1.42.0** · produto = um `index.html` (~589 KB) **gerado** de `src/` · **17/17 nichos, 0 erros** no harness.
```
**Diff esperado:** 1 linha por 1 linha.

### A.2 — nota de revisão no topo (P12)
**Âncora:** a linha `> **Mudanças nesta revisão (v1.34.0):**` (o bloco `>` que a segue, até a linha `---`).
**Inserir ANTES dessa linha** o bloco:
```
> **Mudanças nesta revisão (v1.42.0):** migração de nomes de gestão para **inglês** concluída (Fases 0-3, D-035); **CEREBRO niche-aware** (D-036); **disciplina v2** completa — ASU por download + escopo código-vs-docs (D-037), config **mode-aware** (D-038), nome de spec no Modo Code (D-039), obediência feedback/nome-de-download (D-040), e **formato de nome `AAMMDD-…`** para spec/ASU (D-041). Nada de conteúdo removido.
>
```
**Diff esperado:** +2 linhas.

### A.3 — corrigir menção ao repo/Pages (a nota parentética já está quase certa; firmar)
**Âncora (substituir-BLOCO):** o trecho `(O histórico citava o repo `kit-contexto`; o diretório atual é `contexto-modular` — confirmar a URL/repo do Pages no GitHub.)`
**Substituir por:**
```
(Repo/diretório canônico: `contexto-modular` (`SiluJones/contexto-modular`); o nome antigo `kit-contexto` está aposentado.)
```
**Diff esperado:** 1 linha por 1 linha.

### A.4 — convenção de nome de spec/ASU (o CONTEXT ainda não menciona AAMMDD)
**Âncora:** a linha `## 10. Idioma e convenções`.
**Inserir DEPOIS do título** (como novo bullet no topo da lista dessa seção, antes do `- **pt-BR em tudo**`):
```
- **Nome de spec/instrução (D-041):** formato **`AAMMDD-…`** (sem `-` na data, ano 2 díg.). Specs: `AAMMDD-specNNNN-desc.md` (ex.: `260701-spec0009-reconciliacao-meta.md`). Instruções ASU: `AAMMDD-asuNNNN.yaml`. Vale para os **novos**; não renomear os antigos do histórico.
```
**Diff esperado:** +1 linha.

---

## Tarefa B — `meta/STATUS.md`: firmar v1.42.0 como CONCLUÍDA + registrar débito do `game`

O STATUS do repo já deve ter a linha v1.42.0. Ajustar o enquadramento de "a confirmar" → "concluída" e **registrar a pendência órfã**.

### B.1 — débito técnico do teto 6500 no nicho `game` (NOVO — só existe em nota)
**Âncora:** a seção de próximos passos/pendências (a linha `## 🎯 PRÓXIMOS (decidir/fazer)` **ou**, se o STATUS do repo tiver outra, a primeira lista de pendências).
**Inserir como novo item no fim dessa lista:**
```
- **Teto 6500 no nicho `game` (dívida da spec0008/D-040):** o texto exato da linha "Nome de download" estourou o teto por ~28 chars; o Code **removeu o parentético** para caber (regra preservada, justificativa retirada). Decidir no próximo ciclo se reescreve a linha mais curta ou eleva o teto. (Origem: nota do Code 07-01.)
```
**Diff esperado:** +1 linha.

### B.2 — risco em aberto: padronização de nome de spec ainda não "pega"
**Inserir logo após o item B.1:**
```
- **Padronização de nome de spec não obedecida em campo:** ao atualizar o CEREBRO do ASU com o Modo Code, o projeto consumidor **não** corrigiu os nomes das specs para o padrão. Sinal de que D-039/D-041 precisam de reforço na camada lida-todo-turno (instrução curta), não só no CEREBRO. Conecta às frentes de auditoria/obediência.
```
**Diff esperado:** +1 linha.

---

## Tarefa C — `meta/IDEAS.md`: capturar o que ficou só nas notas (append, P9)

Minerado das notas cruas que os `-acrescimo.md` não guardaram por inteiro. **Append** na seção de ideias ativas do usuário (âncora: o cabeçalho de ideias ativas mais recente; se não houver, no fim do arquivo sob um `## 💡 Ativas — do usuário`).

**Inserir o bloco:**
```
### 2026-07-01 — Teto 6500 x texto de diretriz (game) — A DECIDIR
A linha "Nome de download" (D-040) não coube no nicho game por ~28 chars; o Code cortou o parentético. Decidir: reescrever mais curto (preservando sentido) ou elevar o teto do harness. Nenhuma diretriz deve depender de um parentético para caber. (Nota do Code 07-01.)

### 2026-06-24/28 — Termos e nomes de arquivo devem ser INVARIANTES ao idioma — A AUDITAR
O usuário esclareceu (260624-ideias): i18n troca **UI e conteúdo-data**, mas **TERMOS e NOMES de arquivo** (CEREBRO, DECISIONS, IDEAS, o par DEC/FIX) permanecem os mesmos em qualquer idioma — é convenção de engenharia. Problema real observado em campo: projetos com `FIX` vs `BUG` divergentes, e `DEC` "não encontrado" onde o arquivo de decisões tem outro nome. Pedido: auditoria completa nos 17 nichos — listar (nicho × arquivo meta/ × termo) e padronizar junto. Também: CEREBRO/instrução de alguns nichos apontam para meta/ que o nicho não tem (D-036 mira isso; confirmar cobertura em campo, incl. `/wrap` apontando para DECISOES.md num game cujo DEC vive no MECANICAS).

### 2026-06-28 — Verificação ativa de config (nível/esforço/pensamento) — REFORÇAR (liga D-034/D-038)
O usuário quer que, ao fim de cada sessão, junto do resumo/dúvidas, o chat **verifique a config atual** e diga com clareza: se a próxima etapa precisa de mais (nomeando modelo + esforço exato — médio/alto/máximo — e pensamento), **pare e avise**; se está sobrando, **conclua a sessão** e sinalize que pode baixar (sem parar no meio de uma etapa boa). Reclamação-raiz: chats davam respostas vazias ou vagas ("aumente para o nível recomendado" sem dizer o esforço). Não deixar o sistema "duro"; é aviso honesto, não trava.

### 2026-06-28 — Geração faltante em dev (gitignore/README/commit) — A PESQUISAR/REFINAR
Reafirmado: `.gitignore` personalizado e README quase nunca saem (mesmo em dev); commit às vezes não sai e o `git commit` deve vir **separado** no copia-e-cola. O usuário aceita esperar (não quer o chat perguntando "quer que eu gere agora?"); quer **previsão e cuidado** na geração. Estender ao possível a outros nichos. (D-040 mira o commit; confirmar.)
```
**Diff esperado:** +~14 linhas, 0 removidas.

> **Nota de dedupe para o Code:** se algum desses itens **já** existir no IDEAS do repo (o acréscimo pode ter sido colado antes), **não duplique** — pule o item que já estiver lá e registre no `git diff` quais foram pulados.

---

## Tarefa D — `meta/DECISIONS.md`: garantir D-041 `[só se faltar]`

Se o `grep -n "D-041"` do preflight **não** achou D-041, faça o append (senão, pule):
```
## D-041 — Estilo de nome de spec/ASU: AAMMDD (revisa D-039 no formato)

**Decisão.** O formato do nome muda de `AAAA-MM-DD-…` para **`AAMMDD-…`** (sem `-` na data, ano 2 díg.). Specs: `AAMMDD-specNNNN-desc.md`; instruções ASU: `AAMMDD-asuNNNN.yaml`. Numeração `specNNNN`/`asuNNNN` e descrição livre mantidas; muda só o bloco de data. Vale para os novos; não renomear os antigos.

**Por quê.** Preferência do usuário (estilo das próprias notas: 260701). Aplicar na geração: Modo Code (Tarefa C da spec0008 usou o formato antigo — corrigir) e a diretriz ASU (D-037 rodou com `AAAA-MM-DD-asuNNNN` — precisa follow-up).
```

## Validar (doc-only)
1. **Sem build/validate.**
2. `git diff` revisado: só as inserções/substituições nomeadas; zero remoção acidental. Confirme que os "diff esperado" batem por tarefa.

## Ao terminar (raia do Code — append-only)
- **`meta/STATUS.md`** — append na «Última sessão»: «meta/ reconciliados ao estado real v1.42.0 (spec0009); mineração das notas para IDEAS; débito do teto-game e risco de nome-de-spec registrados.»

## Commit (sem acento)
```
git add meta/CONTEXT.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md
git commit -m "docs: reconciliacao dos meta ao estado real v1.42.0 (spec0009)" -m "CONTEXT carimbo v1.42.0 + AAMMDD; STATUS firma v1.42.0 e registra debito do teto-game e risco de nome-de-spec; IDEAS minera notas (termos invariantes, config, geracao dev); D-041 se faltar"
git push
```
