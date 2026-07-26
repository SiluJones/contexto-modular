# Spec — Registro da auditoria de nomes + política DEC/FIX por nicho

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Doc-only** (`meta/DECISIONS.md`, `meta/STATUS.md`): **sem** build/validate. Rede = `git diff`.
> Prompt no Code: **"leia `meta/specs/260701-spec0012-auditoria-nomes-e-fix.md` e execute"**.
> Config: **Sonnet + `/effort high`**.

## Contexto
Auditoria de nomes/termos nos 17 nichos (frente pedida em 2026-06-24, registrada como "A AUDITAR" no IDEAS). Resultado: o repo está **são** — `DECISIONS.md` uniforme nos 17, zero resíduo `DECISOES/IDEIAS/GLOSSARIO/HISTORICO` no código dos nichos, termo `BUG` eliminado, `wrap.md` só cita arquivos universais (STATUS/DECISIONS). A migração EN parcial (gestão universal + nicho `dev`; demais em PT) foi **decisão consciente** (D-035) para não forçar migração dos 20+ projetos dev vivos, não lacuna. Único ponto a formalizar: a presença/ausência de `FIX` por nicho, hoje implícita, para ninguém "corrigir" por engano.

## Decisão a registrar
**Nichos com `FIX` (13):** dev, client, narrative, marketing, research, game, pixel, music, rpg, cuisine, animation, comics, custom.
**Nichos só com `DEC` (4):** design, product, business, brainstorm.
A ausência de `FIX` nesses 4 é **intencional**: são nichos de conteúdo/estratégia sem "bug de código/artefato executável" a registrar. `DEC` cobre as decisões; não há o que corrigir no sentido de FIX.

## Tarefa A — `meta/DECISIONS.md` (append, D-043)

**Âncora:** fim do bloco de decisões (após D-042, antes do rodapé/FIXES se houver).
**Inserir:**
```
## D-043 — Auditoria de nomes (17 nichos) + política DEC/FIX por nicho

**Decisão.** (a) Nomes de arquivo meta/ são **invariantes por nicho** — cada nicho tem um conjunto fixo; a migração EN parcial (gestão universal STATUS/CONTEXT/CHANGELOG/ROADMAP/LOG-TEMPLATE + o nicho `dev` em DECISIONS/IDEAS/GLOSSARY/HISTORY; demais nichos em PT) é definitiva (D-035), **não** se padroniza tudo em EN — isso forçaria migração dos 20+ projetos dev vivos, risco alto sem ganho. Nomes de domínio em PT (PERSONAGENS, MECANICAS, REVISOES do design, etc.) ficam em PT por serem conteúdo, não gestão. (b) O par de termos é **DEC/FIX** (o `BUG` histórico foi eliminado). (c) **FIX é opcional por nicho:** 13 nichos têm FIX (produzem código/artefato executável); 4 usam só DEC — **design, product, business, brainstorm** — por serem conteúdo/estratégia sem bug executável. Essa ausência é intencional; **não "corrigir" adicionando FIX** a esses nichos.

**Por quê.** Fecha a auditoria de 2026-06-24. O repo já estava são (DECISIONS uniforme, sem resíduo PT no código, wrap limpo); faltava gravar a política para uma futura sessão não tratar a ausência de FIX como lacuna e introduzir churn. Formato de data mantém o split deliberado: logs `AAAA-MM-DD` (ISO), specs/ASU `AAMMDD` (D-041) — domínios diferentes.
```

## Tarefa B — `meta/IDEAS.md`: marcar o item de auditoria como CONCLUÍDO

**Âncora:** o item `### 2026-06-24/28 — Termos e nomes de arquivo devem ser INVARIANTES ao idioma — A AUDITAR`.
**Na linha do título, trocar** `— A AUDITAR` por `— AUDITADO (D-043)`.
**Diff esperado:** 1 palavra-chave trocada na linha do título; corpo intacto.

## Validar (doc-only)
`git diff` aditivo (Tarefa A) + 1 troca de status (Tarefa B); zero remoção de conteúdo.

## Ao terminar (raia do Code — append-only)
- **`meta/STATUS.md`** — append na «Última sessão»: «Auditoria de nomes dos 17 nichos concluída (D-043): repo são; política DEC/FIX por nicho formalizada; sem migração.»

## Commit (sem acento)
```
git add meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md
git commit -m "docs: auditoria de nomes dos 17 nichos + politica DEC/FIX por nicho (D-043)" -m "repo sao (DECISIONS uniforme, sem residuo PT, wrap limpo); migracao EN parcial e definitiva; FIX opcional por nicho (design/product/business/brainstorm so DEC, intencional)"
git push
```
