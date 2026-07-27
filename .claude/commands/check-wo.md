---
description: Confere uma WO contra o repo ANTES de aplicar. Read-only — nao edita nada.
---

Voce vai CONFERIR a WO `$ARGUMENTS` (em `meta/workorders/`) contra o estado atual do repo. **Nao
edite, nao crie, nao rode build/commit.** Este comando e um portao de leitura: ele existe para
descobrir, ANTES de mexer, se a WO e aplicavel como esta escrita.

Passos:

1. Leia a WO inteira. Liste, numeradas, TODAS as edicoes que ela pede (arquivo · tipo · ancora).
2. Para CADA ancora ("Ancora / Substituir por"), procure o texto exato no arquivo-alvo e conte as
   ocorrencias:
   - **1 ocorrencia** → ok.
   - **0 ocorrencias** → ANCORA MORTA (a WO envelheceu ou o texto foi alterado). Mostre o trecho
     atual mais parecido, para o autor corrigir a WO.
   - **2+ ocorrencias** → ANCORA AMBIGUA. Diga quantas e onde.
   O `src/index.template.html` usa **CRLF**: ancora de mais de uma linha colada com `\n` nao casa.
   Confira linha a linha antes de declarar ancora morta por esse motivo.
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
