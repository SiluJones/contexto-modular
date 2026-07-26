# Spec — Captura de feedbacks do ASU não extraídos (auditoria de fidelidade)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Doc-only** (`meta/IDEAS.md`): **sem** build/validate. Rede = `git diff`.
> Prompt no Code: **"leia `meta/specs/260701-spec0011-captura-feedback-asu.md` e execute"**.
> Config: **Sonnet + `/effort high`**.

## Contexto
O usuário subiu ao mount os feedbacks dos projetos consumidores (ASU, satelite) para auditar se a sessão anterior os extraiu. Achado: a seção «Feedback para o Kit» do `IDEAS__ASU.md` tinha 8 feedbacks; **4 viraram decisão no KCM (D-037/032/029/031), mas 5 de refinamento/UX ficaram só do lado do ASU** — não chegaram aos meta/ do KCM. Esta spec captura os 5 no IDEAS (P9: nada de feedback se perde), sob «Feedback para o Kit» se existir, senão em «Ativas — do assistente».

**Dedupe:** se algum item já existir no IDEAS do repo, pular e registrar no `git diff` qual foi pulado.

## Tarefa — append no `meta/IDEAS.md`

**Âncora:** o cabeçalho `## 📮 Feedback para o Kit` (se existir); se **não** existir, criar a seção no fim do arquivo com esse título. Inserir os itens:

```
### 2026-06-21 — Starter do Modo Code deve usar nomes-do-nicho (do ASU) — A CORRIGIR
O ASU reportou como BUG do template: o apêndice de arranque do Modo Code (e o `wrap.md` gerado) referenciam nomes FIXOS (`DECISOES.md`, `REVISOES.md` — do nicho Design), então num projeto Dev o starter aponta para arquivos que não existem. A migração inglês (D-035/036) limpou o repo do KCM, mas a GERAÇÃO do starter ainda precisa emitir os nomes de doc DO NICHO selecionado (Dev → DECISIONS/CHANGELOG/ROADMAP; Design → DECISOES/REVISOES/MARCA). Conecta à auditoria de nomes (item "termos invariantes").

### 2026-06-30 — Sinalizar modos ativos ao exportar o template (do ASU) — A DESENVOLVER
O usuário gerou o CEREBRO com só o modo ASU ligado e saiu curto/incompleto; teve de regerar com os modos certos. A página de geração deveria sinalizar quais modos (ASU/grupo/Code) estão ativos no momento de exportar — ou avisar "exportando com o modo X só" — porque o template muda bastante e é fácil exportar a combinação errada sem perceber. É UX da página, não diretriz.

### 2026-06-21 — Bootstrap do rename nas Instruções do painel (do ASU) — A REFINAR
Ao renomear CLAUDE→CEREBRO, as Instruções do Projeto (painel, lidas em todo turno) continuam citando `CLAUDE.md`, e o assistente não edita o painel — o usuário tem de lembrar de trocar à mão. O passo de atualização do KCM deveria incluir um lembrete explícito "troque CLAUDE.md por CEREBRO.md também nas Instruções do Projeto".

### 2026-06-19/21 — Duas variantes da seção HUB: conteúdo vs. toolchain/infra (do ASU) — A AVALIAR
A seção "Projeto em grupo (HUB)" que o kit injeta assume grupo de CONTEÚDO (lore/visual/som). Num grupo que é TOOLCHAIN (ferramentas sincronizadas por contratos, HUB manual — caso ASU/KCM/FlatDrop), o texto precisa ser reescrito à mão. Sugestão: oferecer duas variantes — "grupo de conteúdo" (atual) e "toolchain/infra" (contratos + caixas de entrada + dono por interface) — ou generalizar os exemplos. Liga a i-N27 (HUB enxuto).

### 2026-06-21 — Apêndice de starter descartável incha o CEREBRO (do ASU) — A AVALIAR
O template diz "depois de criar, pode apagar este apêndice", mas até lá o CEREBRO fica inchado com blocos de starter. Como o chat já entrega os arquivos de arranque prontos, o apêndice talvez devesse ser entregue à PARTE (doc de setup), não embutido no CEREBRO.
```
**Diff esperado:** +~20 linhas, 0 removidas (menos os itens pulados por dedupe).

## Validar (doc-only)
`git diff` aditivo; zero remoção.

## Ao terminar (raia do Code — append-only)
- **`meta/STATUS.md`** — append na «Última sessão»: «Capturados 5 feedbacks do ASU que a sessão anterior não extraiu (spec0011).»

## Commit (sem acento)
```
git add meta/IDEAS.md meta/STATUS.md
git commit -m "docs: captura de 5 feedbacks do ASU nao extraidos (spec0011)" -m "starter do modo code com nomes-do-nicho; sinalizar modos ao exportar; bootstrap rename no painel; variante HUB toolchain; apendice de starter a parte"
git push
```
