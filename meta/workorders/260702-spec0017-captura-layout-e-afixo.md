# Spec — Registrar no IDEAS: frente de layout + refino do afixo prefixo/sufixo

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Doc-only** (`meta/IDEAS.md`, `meta/STATUS.md`): **sem** build/validate. Rede = `git diff`.
> Aplicar com: **`/apply-spec 260702-spec0017-captura-layout-e-afixo.md`**
> Config: **Sonnet + esforco Alto**.

## Contexto
Duas frentes estavam soltas/incompletas no registro e precisam entrar no IDEAS (P9):
- **Layout:** so existia como linha solta no STATUS ("Pendente: layout, spec de frontend a parte"), sem escopo. O usuario pediu abas mais fixas e melhor aproveitamento de espaco por tamanho de tela. Pesquisa de UX (NN/G, Material 3, responsive 2026) da o lastro.
- **Afixo prefixo/sufixo:** a i-N3 Parte B **ja foi implementada** (v1.9.0), mas hoje trata prefixo/sufixo como escolha (mutuamente exclusivos). O usuario quer **as duas caixas de texto separadas, cada uma com seu switch liga/desliga**, para usar prefixo E sufixo ao mesmo tempo.

## Tarefa A — nova ideia de layout no IDEAS (append)

**Ancora:** o fim da lista de ideias ativas (apos a ultima i-N3x; se houver secao «Ativas», no fim dela).
**Inserir:**
```
## i-N33 — Layout responsivo da pagina do KCM — 💡 A ESCOPAR (2026-07-02)
Reestruturar a pagina de geracao para aproveitar melhor o espaco conforme a tela e fixar a navegacao. Pedido do usuario + lastro de UX:
- **Nav/abas fixas (sticky):** manter a navegacao ao alcance em pagina longa (NN/G: sticky aumenta descoberta e reduz friccao); no mobile, manter o cabecalho fixo abaixo de ~30% da altura.
- **Aproveitar espaco por tela:** migrar de breakpoints fixos para **container queries** (componente responde ao proprio contêiner) + unidades **dvh** (corrigem o vh no mobile). Painéis de geracao se reorganizam conforme a janela.
- **Abas responsivas:** tabs em tela grande -> accordion (ou tab-list rolavel com botao) em tela pequena; labels curtos, uma so capitalizacao.
Proximo passo: o chat entrega um **wireframe para o usuario aprovar** ANTES de virar spec de frontend (toca `index.template.html` + CSS, com harness). Nao adivinhar layout.
```

## Tarefa B — refino do afixo (append, referenciando a i-N3)

**Inserir logo apos a i-N33:**
```
## i-N34 — Afixo prefixo E sufixo simultaneos (refino da i-N3 Parte B) — 💡 A FAZER (2026-07-02)
A i-N3 Parte B (afixo no download) ja esta implementada (v1.9.0), mas trata prefixo/sufixo como escolha. Refino pedido: **duas caixas de texto separadas** (uma para prefixo, uma para sufixo), **cada uma com seu switch liga/desliga independente**, para o usuario preencher e aplicar os DOIS ao mesmo tempo (ex.: `projeto__CLAUDE__v1.8.md`). UI intuitiva: rotulo claro por caixa, preview do nome resultante. E manipulacao de string no downloadFile (barato); a parte nova e a UI dos dois toggles + preview.
```

## Validar (doc-only)
`git diff` aditivo; zero remocao.

## Ao terminar (raia do Code — append-only)
- **`meta/STATUS.md`** — append na «Ultima sessao»: «Registradas i-N33 (layout responsivo, a escopar via wireframe) e i-N34 (afixo prefixo+sufixo simultaneos, refino da i-N3).»

## Commit (sem acento) — INCLUI o proprio arquivo da spec
```
git add meta/IDEAS.md meta/STATUS.md meta/specs/260702-spec0017-captura-layout-e-afixo.md
git commit -m "docs: registra i-N33 layout responsivo e i-N34 afixo simultaneo" -m "layout: nav sticky + container queries + dvh, wireframe antes de spec; afixo: prefixo E sufixo com toggles independentes (refino da i-N3 parte B)"
git push
```
