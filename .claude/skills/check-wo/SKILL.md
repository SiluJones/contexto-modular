---
name: check-wo
description: Confere uma WO contra o repo ANTES de aplicar — portao read-only que nao edita nada. Use quando o usuario pedir /check-wo ou quiser saber se uma WO ainda e aplicavel.
disable-model-invocation: true
---

Voce vai CONFERIR a WO `$ARGUMENTS` (em `meta/workorders/`) contra o estado atual do repo. **Nao
edite, nao crie, nao rode build/commit.** Isto e um portao de leitura: existe para descobrir, ANTES
de mexer, se a WO e aplicavel como esta escrita.

Passos:

1. Leia a WO inteira. Liste, numeradas, TODAS as edicoes que ela pede (arquivo · tipo · ancora).
2. Para CADA ancora ("Ancora / Substituir por"), procure o texto exato no arquivo-alvo e conte as
   ocorrencias:
   - **1 ocorrencia** → ok.
   - **0 ocorrencias** → ANCORA MORTA (a WO envelheceu ou o texto foi alterado). Mostre o trecho
     atual mais parecido, para o autor corrigir a WO.
   - **2+ ocorrencias** → ANCORA AMBIGUA. Diga quantas e onde.
   **Fim de linha por arquivo:** `src/index.template.html` e **CRLF**; `validate.js`, `build.js` e os
   `src/niches/*.js` sao **LF**. Confira linha a linha antes de declarar ancora morta por isso.
3. Confira os pre-requisitos declarados: versao/commit citados na WO batem com `git log -1` e com o
   `meta/STATUS.md`? A arvore esta limpa (`git status --short`)? Se a WO pede arquivo NOVO, ele ja
   existe (colisao)? Se ela cria um check novo, o numero ja esta em uso?
4. Verifique se o repo esta verde ANTES de aplicar: `node validate.js index.html` (leitura, nao muda
   nada) — regra de ouro **18/18 nichos, 0 erros**. Se ja estiver vermelho, diga — nao se aplica WO
   sobre repo vermelho.
5. Aponte contradicoes internas: dois trechos da WO editando a mesma linha; tarefa que depende de
   outra que ela mesma nao faz; check novo que colide com check existente.

Entregue:

- **VEREDITO: APLICAVEL** / **APLICAVEL COM RESSALVAS** / **NAO APLICAVEL**
- Tabela: edicao · arquivo · ancora encontrada? (1 / 0 / N) · observacao
- A lista do que o autor da WO precisa corrigir antes de voce aplicar
- **Nenhuma alteracao no repo.** Se voce editou algo, voce errou.
