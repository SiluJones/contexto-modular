# Spec — Aplicar D-041 ao gerador: nome de spec/ASU vira AAMMDD (fix)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html`** (caminho real COM ponto) -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260702-spec0016-fix-nome-aammdd.md`**
> Config: **Sonnet + esforco Alto** (troca de literais localizada; sem logica nova).

## Contexto (bug rastreado)
O **D-041** decidiu que specs e instrucoes ASU usam o formato **`AAMMDD`** (nao `AAAA-MM-DD`). Mas o D-041 so foi registrado no DECISIONS — **nunca foi aplicado ao gerador**. Resultado: a ferramenta ainda emite `AAAA-MM-DD-specNNNN.md` e `AAAA-MM-DD-asuNNNN.yaml` em duas linhas do CEREBRO gerado (buildClaudeMd). A spec0015 corrigiu so a instrucao curta (linha 1916, ja em AAMMDD); faltaram as duas do CEREBRO. Esta spec fecha o buraco.

**IMPORTANTE — o split de datas e proposital, NAO mexer:** **logs continuam `AAAA-MM-DD`** (ISO — linhas ~1920 e ~2079); so **spec e ASU** viram `AAMMDD`. Nao toque nas linhas de log.

## Tarefa A — linha 2220 (instrucao ASU no CEREBRO): nome do .yaml

**Ancora (o trecho do nome; copie do arquivo real com acentos):**
```
Nome `AAAA-MM-DD-asuNNNN.yaml` (ex.: `2026-06-28-asu0001.yaml`)
```
**Substituir por:**
```
Nome `AAMMDD-asuNNNN.yaml` (ex.: `260628-asu0001.yaml`)
```
**Diff esperado:** 1 troca nessa linha. Resto da linha intacto.

## Tarefa B — linha 2248 (Nomes padronizados): spec E asu

**Ancora:**
```
specs em `meta/specs/` seguem `AAAA-MM-DD-specNNNN.md` (ex.: `2026-06-30-spec0007_asu-entrega-e-escopo.md`); instruções ASU seguem `AAAA-MM-DD-asuNNNN.yaml`.
```
**Substituir por:**
```
specs em `meta/specs/` seguem `AAMMDD-specNNNN-desc.md` (ex.: `260630-spec0007-asu-entrega-e-escopo.md`); instruções ASU seguem `AAMMDD-asuNNNN.yaml`.
```
**Diff esperado:** 1 troca nessa linha (dois formatos + o exemplo).

## Tarefa C — varredura de seguranca
Rode `grep -n "AAAA-MM-DD-spec\|AAAA-MM-DD-asu" src/index.template.html`. Deve retornar **VAZIO** apos A e B. Se achar mais alguma ocorrencia, corrija do mesmo jeito (AAMMDD) e reporte no diff. **Nao** altere `logs/AAAA-MM-DD.md` nem `Ultima sincronizacao: AAAA-MM-DD` (esses sao ISO de proposito).

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js index.html
```
**17/17, 0 erros.**

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — nota curta no D-041 (ou D-047 se preferir bloco novo): «D-041 aplicado ao gerador: CEREBRO gerado passa a emitir AAMMDD para spec e ASU; logs seguem ISO (split proposital).»
- **`meta/CHANGELOG.md`** — v1.45.1 (fix) no topo.
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI o proprio arquivo da spec
```
git add src/index.template.html index.html meta/specs/260702-spec0016-fix-nome-aammdd.md meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "fix: aplicar D-041 ao gerador, nome de spec e asu vira AAMMDD" -m "CEREBRO gerado emitia AAAA-MM-DD-specNNNN e AAAA-MM-DD-asuNNNN; agora AAMMDD; logs seguem ISO (split proposital); harness 17/17"
git push
```
